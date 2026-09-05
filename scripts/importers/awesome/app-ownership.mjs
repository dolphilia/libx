import fs from 'node:fs';
import path from 'node:path';
import {
  discoverApps,
  findRepositoryRoot,
} from '../../../packages/project-config/src/app-registry.js';

/** Source ownership is independent of language, snapshot, category labels and URLs. */
export function loadAwesomeOwnership(root = findRepositoryRoot()) {
  const file = path.join(root, 'config/awesome-source-owners.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (
    !data ||
    data.schemaVersion !== 1 ||
    data.groupId !== 'awesome' ||
    !data.sourceOwners ||
    Array.isArray(data.sourceOwners) ||
    typeof data.sourceOwners !== 'object' ||
    Object.keys(data).some((key) => !['schemaVersion', 'groupId', 'sourceOwners'].includes(key))
  )
    throw new Error(`Awesome所有割当の形式が不正です: ${file}`);
  for (const [sourceId, child] of Object.entries(data.sourceOwners)) {
    if (
      !sourceId.trim() ||
      sourceId !== sourceId.trim() ||
      typeof child !== 'string' ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(child)
    )
      throw new Error(`Awesome所有割当が不正です: ${sourceId} → ${child}`);
  }
  return data;
}

export function ownerForSource(sourceId, ownership) {
  if (!Object.hasOwn(ownership.sourceOwners, sourceId))
    throw new Error(
      `Awesome取得元の所有子を追加してください: ${sourceId} (config/awesome-source-owners.json)`
    );
  return ownership.sourceOwners[sourceId];
}

export function partitionAwesomeRecords(entries, ownership) {
  const partitions = new Map();
  for (const entry of entries) {
    const child = ownerForSource(entry.sourceId, ownership);
    const records = partitions.get(child) ?? [];
    records.push(entry);
    partitions.set(child, records);
  }
  return partitions;
}

export function getAwesomeApps(root = findRepositoryRoot()) {
  const registry = discoverApps(root);
  const group = registry.groups.find((entry) => entry.id === 'awesome');
  const apps = registry.apps.filter((entry) =>
    group ? entry.groupId === 'awesome' : entry.id === 'awesome'
  );
  if (!apps.length) throw new Error('Awesomeの配置が見つかりません');
  if (group) {
    const ownership = loadAwesomeOwnership(root);
    for (const child of new Set(Object.values(ownership.sourceOwners))) {
      if (!apps.some((app) => app.id === `awesome/${child}`))
        throw new Error(`所有割当に対応する子appがありません: awesome/${child}`);
    }
  }
  return { root: registry.root, group: group ?? null, apps };
}

export function appForSource(sourceId, root = findRepositoryRoot()) {
  return createAwesomeResolver(root).appForSource(sourceId);
}

/** One operation uses one filesystem snapshot; no process-global stale cache. */
export function createAwesomeResolver(root = findRepositoryRoot()) {
  const ownership = loadAwesomeOwnership(root);
  const layout = getAwesomeApps(root);
  const apps = new Map(layout.apps.map((app) => [app.id, app]));
  const resolve = (sourceId) => {
    const owner = ownerForSource(sourceId, ownership);
    return apps.get(layout.group ? `awesome/${owner}` : 'awesome');
  };
  return {
    ...layout,
    ownership,
    appForSource: resolve,
    contentPath: (entry) => contentPathWithinApp(entry, resolve(entry.sourceId)),
  };
}

/** Read each child's metadata without importing or compiling Markdown modules. */
export function readAwesomeRouteManifest({ root = findRepositoryRoot(), localized = true } = {}) {
  const { apps, group } = getAwesomeApps(root);
  const ownership = loadAwesomeOwnership(root);
  const name = localized ? 'awesome-localized-routes.json' : 'awesome-routes.json';
  const entries = [];
  const identities = new Set();
  const categories = new Map();
  for (const app of apps) {
    const file = path.join(app.directory, 'src/generated', name);
    const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!manifest || manifest.schemaVersion !== 2 || !Array.isArray(manifest.entries))
      throw new Error(`Awesome経路目録が不正です: ${file}`);
    for (const entry of manifest.entries) {
      if (
        !entry ||
        ['sourceId', 'version', 'lang', 'slug'].some(
          (key) => typeof entry[key] !== 'string' || !entry[key].trim()
        ) ||
        !Number.isFinite(entry.order)
      )
        throw new Error(`Awesome経路項目が不正です: ${file}`);
      const child = ownerForSource(entry.sourceId, ownership);
      if (group && app.id !== `awesome/${child}`)
        throw new Error(`取得元が所有子と異なるappにあります: ${entry.sourceId}: ${app.id}`);
      const identity = `${entry.sourceId}\0${entry.version}\0${entry.lang}`;
      if (identities.has(identity))
        throw new Error(`Awesome経路の取得元・版・言語が重複しています: ${entry.sourceId}`);
      identities.add(identity);
      entries.push({ ...entry, appId: app.id });
    }
    for (const category of manifest.categories ?? []) {
      const previous = categories.get(category.id);
      if (previous && JSON.stringify(previous) !== JSON.stringify(category))
        throw new Error(`Awesomeカテゴリ定義が矛盾しています: ${category.id}`);
      categories.set(category.id, category);
    }
  }
  entries.sort(
    (a, b) =>
      a.version.localeCompare(b.version, 'en') ||
      a.order - b.order ||
      a.lang.localeCompare(b.lang, 'en')
  );
  return {
    schemaVersion: 2,
    categories: [...categories.values()].sort((a, b) => a.order - b.order),
    entries,
  };
}

export function awesomeContentPath(entry, root = findRepositoryRoot()) {
  return createAwesomeResolver(root).contentPath(entry);
}

function contentPathWithinApp(entry, app) {
  const relative = entry.moduleKey?.replace(/^\//, '');
  if (
    !relative?.startsWith('src/awesome-content/') ||
    relative
      .split('/')
      .some((part) => !part || part === '.' || part === '..' || part.includes('\\'))
  )
    throw new Error(`Awesome本文パスが不正です: ${entry.moduleKey}`);
  let target = app.directory;
  for (const segment of relative.split('/')) {
    target = path.join(target, segment);
    try {
      if (fs.lstatSync(target).isSymbolicLink())
        throw new Error(`Awesome本文パスにsymlinkは使えません: ${target}`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return target;
}

/** Logical category/file.md addresses stay stable when physical ownership moves. */
export function createAwesomeContentAccess(version, root = findRepositoryRoot()) {
  if (!/^v\d{4}-\d{2}-\d{2}(?:-\d+)?$/.test(version))
    throw new Error(`Awesome本文の版が不正です: ${version}`);
  const resolver = createAwesomeResolver(root);
  const prefix = `/src/awesome-content/${version}/en/`;
  const entries = readAwesomeRouteManifest({ root, localized: false }).entries.filter(
    (entry) => entry.version === version
  );
  const byFile = new Map();
  for (const entry of entries) {
    if (!entry.moduleKey.startsWith(prefix))
      throw new Error(`英語経路が不正です: ${entry.moduleKey}`);
    const file = entry.moduleKey.slice(prefix.length);
    if (byFile.has(file)) throw new Error(`本文の論理パスが重複しています: ${file}`);
    byFile.set(file, entry);
  }
  const pathFor = (lang, file) => {
    if (!/^[a-z]+(?:-[a-z0-9]+)*$/i.test(lang)) throw new Error(`言語が不正です: ${lang}`);
    const entry = byFile.get(file);
    if (!entry) throw new Error(`Awesome英語経路目録に本文がありません: ${version}/${file}`);
    return resolver.contentPath({
      ...entry,
      moduleKey: `/src/awesome-content/${version}/${lang}/${file}`,
    });
  };
  return {
    pathFor,
    files(lang) {
      if (!/^[a-z]+(?:-[a-z0-9]+)*$/i.test(lang)) throw new Error(`言語が不正です: ${lang}`);
      const result = [];
      for (const app of resolver.apps) {
        const directory = path.join(app.directory, 'src/awesome-content', version, lang);
        if (!fs.existsSync(directory)) continue;
        if (fs.lstatSync(directory).isSymbolicLink())
          throw new Error(`本文探索にsymlinkは使えません: ${directory}`);
        for (const entry of fs.readdirSync(directory, { recursive: true, withFileTypes: true })) {
          if (entry.isSymbolicLink())
            throw new Error(`本文探索にsymlinkは使えません: ${directory}/${entry.name}`);
          if (!entry.isFile() || !entry.name.endsWith('.md')) continue;
          const absolutePath = path.join(entry.parentPath ?? entry.path, entry.name);
          const file = path.relative(directory, absolutePath).split(path.sep).join('/');
          if (pathFor(lang, file) !== absolutePath)
            throw new Error(`本文が所有子と異なる場所にあります: ${absolutePath}`);
          result.push(file);
        }
      }
      return result.sort();
    },
  };
}
