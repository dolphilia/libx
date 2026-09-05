import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { discoverApps } from '../packages/project-config/src/app-registry.js';
import {
  collectAppPages,
  collectGroupPages,
  loadGroupPages,
} from '../packages/project-config/src/group-pages.js';
import { pruneUnreferencedJavaScriptAssets } from './prune-unreferenced-javascript-assets.js';
import { validateGroupNavigation } from '../packages/ui/src/components/group-navigation.js';

const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const ignored = new Set(['node_modules', 'dist', '.astro', '.git']);
const types = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

function files(directory, { input = true } = {}) {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .flatMap((entry) => {
      const file = path.join(directory, entry.name);
      if (input && ignored.has(entry.name)) return [];
      if (entry.isSymbolicLink())
        throw new Error(`生成入力・出力のsymlinkは使用できません: ${file}`);
      return entry.isDirectory() ? files(file, { input }) : [file];
    });
}

function outputFiles(directory) {
  // Unlike input traversal, the supplied directory itself may be named dist.
  return files(directory, { input: false });
}

export function appInputHash(app, repositoryRoot) {
  const digest = crypto.createHash('sha256');
  digest.update(
    JSON.stringify({
      schemaVersion: 2,
      node: process.version,
      platform: process.platform,
      arch: process.arch,
    })
  );
  const inputs = [
    app.directory,
    path.join(repositoryRoot, 'packages'),
    path.join(repositoryRoot, 'config'),
    path.join(repositoryRoot, 'scripts'),
  ];
  // Site lists and redirects depend on the available document projects.
  if (app.type === 'site') inputs.push(path.join(repositoryRoot, 'apps'));
  const groupConfig = app.groupId
    ? path.join(path.dirname(app.directory), 'group.config.jsonc')
    : null;
  for (const directory of inputs) {
    for (const file of files(directory)) {
      if (file.endsWith('.tsbuildinfo')) continue;
      digest.update(path.relative(repositoryRoot, file));
      digest.update(fs.readFileSync(file));
    }
  }
  for (const file of ['pnpm-lock.yaml', 'pnpm-workspace.yaml', 'package.json']
    .map((name) => path.join(repositoryRoot, name))
    .concat(groupConfig)
    .filter(Boolean)) {
    if (fs.existsSync(file)) digest.update(fs.readFileSync(file));
  }
  if (app.groupId) digest.update(JSON.stringify(loadGroupPages(app.directory)));
  return digest.digest('hex');
}

/** Normalize URL ownership, including index aliases and encoded segments. */
export function canonicalOutputPath(relative) {
  if (
    typeof relative !== 'string' ||
    !relative ||
    relative.startsWith('/') ||
    relative.includes('\\') ||
    /[?#\0]/.test(relative)
  )
    throw new Error(`不正な出力パス: ${relative}`);
  const segments = relative.split('/').map((segment) => decodeURIComponent(segment));
  if (
    segments.some(
      (segment) => !segment || segment === '.' || segment === '..' || /[/\\?#\0]/.test(segment)
    )
  )
    throw new Error(`不正な出力パス: ${relative}`);
  const normalized = segments.map((segment) => encodeURIComponent(segment)).join('/');
  return normalized.replace(/(?:^|\/)index\.html$/, '/').replace(/^\//, '') || './';
}

function entryOnly(file) {
  return (
    file === 'index.html' ||
    file === '404.html' ||
    file === 'favicon.svg' ||
    file === 'sw.js' ||
    /^v[^/]+\/(?:[^/]+\/)?index\.html$/.test(file)
  );
}

export function inspectAppOutput(app, { group, inputHash = null } = {}) {
  if (!fs.existsSync(app.outputDirectory)) throw new Error(`ビルド出力がありません: ${app.id}`);
  const entryId = group ? `${group.id}/${group.config.entry}` : app.id;
  const records = [];
  const sharedData = [];
  const owners = new Set();
  for (const file of outputFiles(app.outputDirectory)) {
    const relative = path.relative(app.outputDirectory, file).split(path.sep).join('/');
    if (group && (relative.startsWith('sidebar/') || relative.startsWith('search/'))) {
      const content = fs.readFileSync(file);
      sharedData.push({
        path: relative,
        canonical: canonicalOutputPath(relative),
        sha256: hash(content),
        bytes: content.length,
      });
      continue;
    }
    if (group && app.id !== entryId && entryOnly(relative)) continue;
    const canonical = canonicalOutputPath(relative);
    if (owners.has(canonical))
      throw new Error(`app内の公開URLが重複しています: ${app.id}: ${canonical}`);
    owners.add(canonical);
    const content = fs.readFileSync(file);
    records.push({
      path: relative,
      canonical,
      sha256: hash(content),
      bytes: content.length,
      contentType: types[path.extname(file)] ?? 'application/octet-stream',
    });
  }
  return {
    schemaVersion: 1,
    appId: app.id,
    publicBase: app.publicBase,
    inputHash,
    files: records,
    sharedData,
    ...(group ? { pages: collectAppPages(app).pages } : {}),
  };
}

export function recordAppBuild(app, repositoryRoot) {
  const group = discoverApps(repositoryRoot).groups.find((entry) => entry.id === app.groupId);
  const manifest = inspectAppOutput(app, { group, inputHash: appInputHash(app, repositoryRoot) });
  const directory = path.join(app.directory, '.astro');
  fs.mkdirSync(directory, { recursive: true });
  const file = path.join(directory, 'libx-output.json');
  fs.writeFileSync(`${file}.tmp`, JSON.stringify(manifest, null, 2) + '\n');
  fs.renameSync(`${file}.tmp`, file);
  return manifest;
}

export function readVerifiedAppBuild(app, repositoryRoot) {
  const file = path.join(app.directory, '.astro/libx-output.json');
  if (!fs.existsSync(file))
    throw new Error(`検証済み成果物目録がありません。再ビルドしてください: ${app.id}`);
  const manifest = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (
    manifest.schemaVersion !== 1 ||
    manifest.appId !== app.id ||
    manifest.publicBase !== app.publicBase ||
    manifest.inputHash !== appInputHash(app, repositoryRoot)
  ) {
    throw new Error(`入力が変更されています。再ビルドしてください: ${app.id}`);
  }
  for (const entry of [...manifest.files, ...(manifest.sharedData ?? [])]) {
    if (canonicalOutputPath(entry.path) !== entry.canonical)
      throw new Error(`生成物目録が不正です: ${app.id}`);
    const target = path.join(app.outputDirectory, entry.path);
    if (!fs.existsSync(target) || hash(fs.readFileSync(target)) !== entry.sha256)
      throw new Error(`生成物が欠損・変更されています: ${app.id}/${entry.path}`);
  }
  const group = discoverApps(repositoryRoot).groups.find((entry) => entry.id === app.groupId);
  const current = inspectAppOutput(app, { group });
  if (
    JSON.stringify(current.files) !== JSON.stringify(manifest.files) ||
    JSON.stringify(current.sharedData) !== JSON.stringify(manifest.sharedData) ||
    JSON.stringify(current.pages) !== JSON.stringify(manifest.pages)
  ) {
    throw new Error(`生成物の集合が変更されています: ${app.id}`);
  }
  return manifest;
}

function collectGroupData(members, catalog) {
  const searches = new Map();
  const sidebars = new Map();
  const normalize = (url) => decodeURI(url).split('#')[0].replace(/\/$/, '');
  const pages = new Map(catalog.pages.map((page) => [normalize(page.url), page]));
  const categoryIds = (section) => {
    const ids = new Set();
    const visit = (item) => {
      if (item.href) {
        const page = pages.get(normalize(item.href));
        if (!page) throw new Error(`ナビ目録に対応するページがありません: ${item.href}`);
        ids.add(page.categoryId);
      }
      for (const child of item.items ?? []) visit(child);
    };
    visit(section);
    return [...ids];
  };
  for (const app of members) {
    for (const file of files(path.join(app.outputDirectory, 'search'))) {
      if (!file.endsWith('.json')) continue;
      const index = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (
        index.schemaVersion !== 1 ||
        !Array.isArray(index.entries) ||
        !index.version ||
        !index.lang
      )
        throw new Error(`検索目録が不正です: ${file}`);
      const key = `${index.version}/${index.lang}`;
      const combined = searches.get(key) ?? {
        schemaVersion: 1,
        version: index.version,
        lang: index.lang,
        entries: [],
      };
      combined.entries.push(...index.entries);
      searches.set(key, combined);
    }
    for (const file of files(path.join(app.outputDirectory, 'sidebar'))) {
      if (!file.endsWith('.json')) continue;
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (!Array.isArray(data)) throw new Error(`サイドバー目録が不正です: ${file}`);
      const key = path.basename(file);
      const combined = sidebars.get(key) ?? [];
      for (const section of data) {
        const ids = categoryIds(section);
        if (ids.length !== 1)
          throw new Error(
            `カテゴリの文書が空または混在しています: ${app.id}/${key}: ${section.title}`
          );
        const categoryId = ids[0];
        if (section.categoryId && section.categoryId !== categoryId)
          throw new Error(`カテゴリIDが文書の配置と一致しません: ${app.id}/${key}`);
        const existing = combined.find(
          (entry) => entry.categoryId === categoryId && !entry.href && !section.href
        );
        if (existing) {
          if (existing.title !== section.title)
            throw new Error(
              `同じカテゴリIDの表示名が一致しません: ${categoryId} (${existing.title}, ${section.title})`
            );
          existing.items = [...(existing.items ?? []), ...(section.items ?? [])];
        } else combined.push({ ...structuredClone(section), categoryId });
      }
      sidebars.set(key, combined);
    }
  }
  return { searches, sidebars };
}

function navigationHtml(group, navigation) {
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[character]
    );
  const { lang, version, items } = navigation;
  const title =
    group.config.name[lang] ?? group.config.name.en ?? Object.values(group.config.name)[0];
  const direction = /^(ar|fa|he|ur)(-|$)/.test(lang) ? 'rtl' : 'ltr';
  const render = (entries) =>
    `<ul>${entries
      .map(
        (item) =>
          `<li>${
            item.href
              ? `<a href="${escape(item.href)}">${escape(item.title)}</a>`
              : `<span>${escape(item.title)}</span>`
          }${item.items ? render(item.items) : ''}</li>`
      )
      .join('')}</ul>`;
  return `<!doctype html><html lang="${escape(lang)}" dir="${direction}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} — ${escape(version)}</title><style>html{color-scheme:light dark;font:1rem/1.7 system-ui}body{max-width:70rem;margin:auto;padding:1.5rem}li{overflow-wrap:anywhere;margin-block:.4rem}ul{padding-inline-start:1.5rem}a:focus-visible{outline:2px solid currentColor;outline-offset:3px}</style></head><body><header><a href="${escape(group.publicBase)}/">${escape(title)}</a></header><main><h1>${escape(title)}</h1><p>${escape(version)} · ${escape(lang)}</p><nav aria-label="${escape(title)}">${render(items)}</nav></main></body></html>\n`;
}

/** Compose from complete independently built app outputs; commit only on success. */
export async function composeGroupOutput(group, members, destination, { manifests } = {}) {
  const expected = group.memberIds;
  if (
    expected.length !== members.length ||
    expected.some((id) => !members.some((app) => app.id === id))
  )
    throw new Error(`グループの成果物が揃っていません: ${group.id}`);
  const ordered = expected.map((id) => members.find((app) => app.id === id));
  const stage = `${destination}.stage-${crypto.randomUUID()}`;
  const backup = `${destination}.previous-${crypto.randomUUID()}`;
  const site = path.join(stage, 'site');
  fs.mkdirSync(site, { recursive: true });
  const ownership = new Map();
  try {
    for (const app of ordered) {
      const manifest = manifests?.get(app.id) ?? inspectAppOutput(app, { group });
      for (const entry of manifest.files) {
        const canonical = canonicalOutputPath(entry.path);
        if (ownership.has(canonical))
          throw new Error(
            `公開URLの所有が重複しています: ${canonical} (${ownership.get(canonical).appId}, ${app.id})`
          );
        const source = path.join(app.outputDirectory, entry.path);
        if (hash(fs.readFileSync(source)) !== entry.sha256)
          throw new Error(`統合中に成果物が変更されました: ${app.id}/${entry.path}`);
        const target = path.join(site, entry.path);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(source, target);
        ownership.set(canonical, { ...entry, appId: app.id });
      }
    }
    const writeShared = (relative, value, contentType = 'application/json') => {
      const canonical = canonicalOutputPath(relative);
      if (ownership.has(canonical))
        throw new Error(`グループ予約パスと衝突しています: ${relative}`);
      const content = contentType === 'application/json' ? JSON.stringify(value) + '\n' : value;
      const target = path.join(site, relative);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, content);
      ownership.set(canonical, {
        path: relative,
        canonical,
        sha256: hash(content),
        bytes: Buffer.byteLength(content),
        contentType,
        appId: `group:${group.id}`,
      });
    };
    const catalog = collectGroupPages(group, ordered);
    const { searches, sidebars } = collectGroupData(ordered, catalog);
    const searchPages = new Set();
    const navigationPages = new Set();
    const knownUrl = (url) => {
      if (typeof url !== 'string' || !url.startsWith(`${group.publicBase}/`))
        throw new Error(`グループ外の目録URL: ${url}`);
      const relative =
        url
          .slice(group.publicBase.length + 1)
          .split('#')[0]
          .replace(/\/$/, '') + '/index.html';
      const canonical = canonicalOutputPath(relative);
      if (!ownership.has(canonical)) throw new Error(`目録に対応するページがありません: ${url}`);
      return canonical;
    };
    for (const page of catalog.pages) knownUrl(page.url);
    writeShared('navigation/pages.json', {
      ...catalog,
      pages: catalog.pages.map(({ sourcePath: _sourcePath, ...page }) => page),
    });
    for (const [key, value] of searches) {
      const seen = new Set();
      for (const entry of value.entries) {
        const url = knownUrl(entry.url);
        if (!url.startsWith(`${value.version}/${value.lang}/`))
          throw new Error(`検索目録の版・言語がURLと一致しません: ${entry.url}`);
        if (seen.has(url)) throw new Error(`検索URLが重複しています: ${url}`);
        seen.add(url);
        searchPages.add(url);
      }
      if (Buffer.byteLength(JSON.stringify(value)) > 2 * 1024 * 1024)
        throw new Error(`グループ検索索引が2 MiBを超えました: ${key}`);
      writeShared(`search/${key}.json`, value);
    }
    for (const [name, value] of sidebars) {
      const walk = (entries) => {
        for (const entry of entries) {
          if (entry.href) navigationPages.add(knownUrl(entry.href));
          if (entry.items) walk(entry.items);
        }
      };
      walk(value);
      writeShared(`sidebar/${name}`, value);
      const match = /^sidebar-(.+)-(v[^/]+)\.json$/.exec(name);
      if (!match) throw new Error(`サイドバーの版・言語を解決できません: ${name}`);
      const [, lang, version] = match;
      const navigation = validateGroupNavigation(
        { schemaVersion: 1, lang, version, items: value, revision: catalog.navigationRevision },
        { baseUrl: group.publicBase, lang, version }
      );
      writeShared(`navigation/${version}/${lang}.json`, navigation);
      writeShared(
        `navigation/${version}/${lang}/index.html`,
        navigationHtml(group, navigation),
        'text/html'
      );
    }
    for (const page of catalog.pages) {
      const canonical = knownUrl(page.url);
      if (!searchPages.has(canonical) || !navigationPages.has(canonical))
        throw new Error(`文書の検索・ナビ目録が欠損しています: ${page.url}`);
    }
    // Use the public prefix for reachability; pruning a bare app dist misresolves URLs.
    const publicRoot = path.join(stage, 'public-root');
    const prefixedSite = path.join(publicRoot, group.publicBase.slice(1));
    fs.mkdirSync(path.dirname(prefixedSite), { recursive: true });
    fs.renameSync(site, prefixedSite);
    await pruneUnreferencedJavaScriptAssets(publicRoot, { apply: true });
    fs.renameSync(prefixedSite, site);
    fs.rmSync(publicRoot, { recursive: true, force: true });
    const output = [...ownership.values()].filter((entry) =>
      fs.existsSync(path.join(site, entry.path))
    );
    fs.writeFileSync(
      path.join(stage, 'manifest.json'),
      JSON.stringify(
        { schemaVersion: 1, groupId: group.id, publicBase: group.publicBase, files: output },
        null,
        2
      ) + '\n'
    );
    const hadPrevious = fs.existsSync(destination);
    if (hadPrevious) fs.renameSync(destination, backup);
    try {
      fs.renameSync(stage, destination);
    } catch (error) {
      if (hadPrevious) fs.renameSync(backup, destination);
      throw error;
    }
    fs.rmSync(backup, { recursive: true, force: true });
    return { directory: path.join(destination, 'site'), files: output.length };
  } catch (error) {
    fs.rmSync(stage, { recursive: true, force: true });
    throw error;
  }
}
