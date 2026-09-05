import fs from 'node:fs';
import path from 'node:path';
import { stripJsonComments } from './jsonc-runtime.js';

const SEGMENT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ignoredDirectories = new Set(['node_modules', 'dist', 'public']);

/** Resolve from the caller's location; never depend on a fixed nesting depth. */
export function findRepositoryRoot(start = process.cwd()) {
  let directory = path.resolve(start);
  while (!fs.existsSync(path.join(directory, 'pnpm-workspace.yaml'))) {
    const parent = path.dirname(directory);
    if (parent === directory) throw new Error(`libxのルートが見つかりません: ${start}`);
    directory = parent;
  }
  return directory;
}

/** Read only the owning group, also usable while scaffolding its first child. */
export function readAppGroup(directory) {
  const parent = path.dirname(path.resolve(directory));
  return fs.existsSync(path.join(parent, 'group.config.jsonc')) ? loadGroup(parent) : null;
}

function readJson(file) {
  if (fs.realpathSync(file) !== file)
    throw new Error(`設定にシンボリックリンクは使えません: ${file}`);
  const value = JSON.parse(stripJsonComments(fs.readFileSync(file, 'utf8')));
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`設定はオブジェクトで指定してください: ${file}`);
  }
  return value;
}

function assertSegment(value, label) {
  if (typeof value !== 'string' || !SEGMENT.test(value)) {
    throw new Error(`${label}は小文字英数字とハイフンで指定してください: ${value}`);
  }
}

function directories(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.') && !ignoredDirectories.has(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .flatMap((entry) => {
      if (entry.isSymbolicLink())
        throw new Error(
          `アプリ階層にシンボリックリンクは使えません: ${path.join(directory, entry.name)}`
        );
      return entry.isDirectory() ? [path.join(directory, entry.name)] : [];
    });
}

function hasAppMarker(directory) {
  return ['package.json', 'astro.config.mjs', 'src'].some((name) =>
    fs.existsSync(path.join(directory, name))
  );
}

function loadGroup(directory) {
  const id = path.basename(directory);
  assertSegment(id, 'グループID');
  if (hasAppMarker(directory)) throw new Error(`グループとアプリを兼用できません: ${id}`);
  const config = readJson(path.join(directory, 'group.config.jsonc'));
  const allowed = new Set(['schemaVersion', 'name', 'entry', 'order', 'versioning', 'paths']);
  for (const key of Object.keys(config)) {
    if (!allowed.has(key)) throw new Error(`未知のグループ設定: ${id}.${key}`);
  }
  if (config.schemaVersion !== 1) throw new Error(`未対応のグループschemaVersion: ${id}`);
  if (
    !config.name ||
    typeof config.name !== 'object' ||
    Array.isArray(config.name) ||
    !Object.keys(config.name).length ||
    Object.values(config.name).some((name) => typeof name !== 'string' || !name.trim())
  ) {
    throw new Error(`グループ表示名が不正です: ${id}`);
  }
  assertSegment(config.entry, 'entry');
  const order = config.order ?? [];
  if (
    !Array.isArray(order) ||
    order.some((name) => typeof name !== 'string' || !SEGMENT.test(name)) ||
    new Set(order).size !== order.length
  ) {
    throw new Error(`orderは重複しない子アプリ名の配列にしてください: ${id}`);
  }
  for (const [field, allowedKey] of [
    ['versioning', 'mode'],
    ['paths', 'baseUrl'],
  ]) {
    const value = config[field];
    if (
      value !== undefined &&
      (!value ||
        typeof value !== 'object' ||
        Array.isArray(value) ||
        Object.keys(value).some((key) => key !== allowedKey))
    ) {
      throw new Error(`グループ設定が不正です: ${id}.${field}`);
    }
  }
  const mode = config.versioning?.mode ?? 'independent';
  if (!['shared', 'independent'].includes(mode))
    throw new Error(`versioning.modeが不正です: ${id}`);
  const publicBase = config.paths?.baseUrl ?? `/docs/${id}`;
  if (
    typeof publicBase !== 'string' ||
    !/^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*\/)*[a-z0-9]+(?:-[a-z0-9]+)*$/.test(publicBase)
  ) {
    throw new Error(`グループ公開パスが不正です: ${id}`);
  }
  return { id, directory, config, publicBase, versionMode: mode, memberIds: [] };
}

function loadApp(directory, group) {
  const slug = path.basename(directory);
  assertSegment(slug, 'アプリ名');
  const id = group ? `${group.id}/${slug}` : slug;
  for (const required of ['package.json', 'astro.config.mjs', 'src/config/project.config.jsonc']) {
    const file = path.join(directory, required);
    if (!fs.existsSync(file) || !fs.statSync(file).isFile())
      throw new Error(`アプリ必須ファイルがありません: ${id}/${required}`);
    if (fs.realpathSync(file) !== file)
      throw new Error(`アプリファイルにシンボリックリンクは使えません: ${file}`);
  }
  const pkg = readJson(path.join(directory, 'package.json'));
  if (typeof pkg.name !== 'string' || !pkg.name || /\s/.test(pkg.name))
    throw new Error(`package名が不正です: ${id}`);
  const config = readJson(path.join(directory, 'src/config/project.config.jsonc'));
  const projectSlug = config.paths?.projectSlug ?? slug;
  assertSegment(projectSlug, 'projectSlug');
  const publicBase =
    group?.publicBase ??
    config.paths?.baseUrl ??
    `${config.paths?.baseUrlPrefix ?? '/docs'}/${projectSlug}`;
  return {
    id,
    directory,
    groupId: group?.id ?? null,
    packageName: pkg.name,
    projectSlug,
    publicBase,
    outputDirectory: path.join(directory, 'dist'),
  };
}

/** The single source of application discovery for Node scripts and Astro. */
export function discoverApps(repositoryRoot = findRepositoryRoot()) {
  const root = fs.realpathSync(repositoryRoot);
  const appsDirectory = path.join(root, 'apps');
  const apps = [];
  const groups = [];
  for (const directory of directories(appsDirectory)) {
    if (!fs.existsSync(path.join(directory, 'group.config.jsonc'))) {
      if (hasAppMarker(directory)) apps.push(loadApp(directory));
      continue;
    }
    const group = loadGroup(directory);
    const members = [];
    for (const child of directories(directory)) {
      if (fs.existsSync(path.join(child, 'group.config.jsonc')))
        throw new Error(`グループの再入れ子は使えません: ${child}`);
      if (hasAppMarker(child)) members.push(loadApp(child, group));
    }
    const names = new Set(members.map((app) => path.basename(app.directory)));
    for (const name of [group.config.entry, ...(group.config.order ?? [])]) {
      if (!names.has(name))
        throw new Error(`グループに子アプリが存在しません: ${group.id}/${name}`);
    }
    const order = group.config.order ?? [];
    const rank = (app) => {
      const index = order.indexOf(path.basename(app.directory));
      return index < 0 ? order.length : index;
    };
    members.sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id, 'en'));
    group.memberIds = members.map((app) => app.id);
    apps.push(...members);
    groups.push(group);
  }
  const packages = new Set();
  for (const app of apps) {
    if (packages.has(app.packageName))
      throw new Error(`package名が重複しています: ${app.packageName}`);
    packages.add(app.packageName);
  }
  return { root, apps, groups };
}

export function resolveApp(id, repositoryRoot = findRepositoryRoot()) {
  if (
    typeof id !== 'string' ||
    id.split('/').length > 2 ||
    id.split('/').some((part) => !SEGMENT.test(part))
  ) {
    throw new Error(`アプリIDが不正です: ${id}`);
  }
  const app = discoverApps(repositoryRoot).apps.find((entry) => entry.id === id);
  if (!app) throw new Error(`アプリが見つかりません: ${id}`);
  return app;
}

export function selectApps({ projects, group }, repositoryRoot = findRepositoryRoot()) {
  if ((!projects && !group) || (projects && group))
    throw new Error('--projects または --group のどちらか一方を指定してください。');
  const registry = discoverApps(repositoryRoot);
  if (group) {
    const selected = registry.groups.find((entry) => entry.id === group);
    if (!selected) throw new Error(`グループが見つかりません: ${group}`);
    return selected.memberIds.map((id) => registry.apps.find((app) => app.id === id));
  }
  const ids = projects.split(',').map((id) => id.trim());
  if (ids.some((id) => !id)) throw new Error('--projects に空のIDは指定できません。');
  return [...new Set(ids)].map((id) => resolveApp(id, registry.root));
}
