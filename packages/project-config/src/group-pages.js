import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { createHash } from 'node:crypto';
import { discoverApps, findRepositoryRoot, readAppGroup } from './app-registry.js';
import { stripJsonComments } from './jsonc-runtime.js';

const buildCache = new Map();
const json = (file) => JSON.parse(stripJsonComments(fs.readFileSync(file, 'utf8')));
const normalizeUrl = (url) => decodeURI(url).replace(/\/$/, '');

function sourceFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name, 'en'))
    .flatMap((entry) => {
      const file = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`文書目録の入力にsymlinkは使えません: ${file}`);
      return entry.isDirectory() ? sourceFiles(file) : /\.mdx?$/.test(entry.name) ? [file] : [];
    });
}

/** Read frontmatter and route metadata only; never import another app's Markdown modules. */
export function collectAppPages(app) {
  const config = json(path.join(app.directory, 'src/config/project.config.jsonc'));
  const versions = config.versioning?.versions;
  if (!Array.isArray(versions) || !versions.length)
    throw new Error(`版の宣言がありません: ${app.id}`);
  const awesomeRoot = path.join(app.directory, 'src/awesome-content');
  const isAwesome = fs.existsSync(awesomeRoot);
  const contentRoot = isAwesome ? awesomeRoot : path.join(app.directory, 'src/content/docs');
  let routes;
  if (isAwesome) {
    const routeFile = path.join(app.directory, 'src/generated/awesome-localized-routes.json');
    const manifest = json(routeFile);
    if (manifest.schemaVersion !== 2 || !Array.isArray(manifest.entries))
      throw new Error(`Awesomeページ目録が不正です: ${routeFile}`);
    routes = manifest.entries;
  }
  const pages = sourceFiles(contentRoot).map((file) => {
    const sourcePath = path.relative(app.directory, file).split(path.sep).join('/');
    const [version, lang, ...segments] = path.relative(contentRoot, file).split(path.sep);
    const route = routes?.find((entry) => entry.moduleKey === `/${sourcePath}`);
    if (isAwesome && !route) throw new Error(`Awesome文書の経路がありません: ${file}`);
    const slug = route?.slug ?? segments.join('/').replace(/\.mdx?$/, '');
    if (!version || !lang || !slug || !versions.some((entry) => entry.id === version))
      throw new Error(`文書の版・言語・経路が不正です: ${file}`);
    const { data } = matter(fs.readFileSync(file, 'utf8'));
    const rawDocumentId = route
      ? `awesome:${route.sourceId}`
      : (data.documentId ?? `${app.id}:${slug}`);
    const documentId = typeof rawDocumentId === 'string' ? rawDocumentId.trim() : rawDocumentId;
    if (typeof documentId !== 'string' || !documentId.trim() || /[\0\r\n]/.test(documentId))
      throw new Error(`文書IDが不正です: ${file}`);
    const categoryId = (route?.categoryId ?? slug.split('/')[0]).replace(/^\d+-/, '');
    const order =
      route?.order ??
      data.order ??
      Number(
        slug
          .split('/')
          .at(-1)
          .match(/^(\d+)-/)?.[1] ?? 999999
      );
    if (!Number.isFinite(order)) throw new Error(`文書の表示順が不正です: ${file}`);
    return {
      documentId,
      appId: app.id,
      version,
      lang,
      slug,
      sourcePath,
      url: `${app.publicBase}/${version}/${lang}/${slug}/`,
      categoryId,
      order,
      title: String(route?.navigationTitle ?? data.title ?? slug),
      description: String(route?.description ?? data.description ?? ''),
      licenseSource: route?.licenseSource ?? data.licenseSource ?? null,
      ...(route?.repository ? { repository: route.repository } : {}),
    };
  });
  pages.sort(
    (a, b) =>
      a.version.localeCompare(b.version) ||
      a.lang.localeCompare(b.lang) ||
      a.categoryId.localeCompare(b.categoryId) ||
      a.order - b.order ||
      a.slug.localeCompare(b.slug)
  );
  return { appId: app.id, versions, language: config.language, pages };
}

export function resolveGroupPagination(
  catalog,
  url,
  { scope = 'category', order = 'catalog' } = {}
) {
  if (!['category', 'version'].includes(scope) || !['catalog', 'document'].includes(order))
    throw new Error('ページネーションの範囲または順序が不正です');
  const current = catalog.pages.find((page) => normalizeUrl(page.url) === normalizeUrl(url));
  if (!current) throw new Error(`現在の文書がグループ目録にありません: ${url}`);
  const pages = catalog.pages.filter(
    (page) =>
      page.version === current.version &&
      page.lang === current.lang &&
      (scope === 'version' || page.categoryId === current.categoryId) &&
      (catalog.versionMode === 'shared' || page.appId === current.appId)
  );
  if (order === 'document') pages.sort((a, b) => a.order - b.order || a.url.localeCompare(b.url));
  const index = pages.indexOf(current);
  const link = (page) => (page ? { title: page.title, url: page.url } : undefined);
  return { prev: link(pages[index - 1]), next: link(pages[index + 1]) };
}

export function resolveGroupDocumentLink(catalog, link, currentUrl) {
  const origin = 'https://libx.invalid';
  const target = new URL(
    link.startsWith('/') && !link.startsWith(`${catalog.publicBase}/`) && !link.startsWith('//')
      ? catalog.publicBase + link
      : link,
    origin + currentUrl
  );
  if (target.origin !== origin || target.search)
    throw new Error(`グループ内の文書URLを指定してください: ${link}`);
  const page = catalog.pages.find(
    (entry) => normalizeUrl(entry.url) === normalizeUrl(target.pathname)
  );
  if (!page) throw new Error(`リンク先がグループ目録にありません: ${link}`);
  return { title: page.title, url: page.url + target.hash };
}

export function collectGroupPages(group, members) {
  if (
    members.length !== group.memberIds.length ||
    group.memberIds.some((id) => !members.some((app) => app.id === id))
  )
    throw new Error(`グループの入力が揃っていません: ${group.id}`);
  const apps = group.memberIds.map((id) => collectAppPages(members.find((app) => app.id === id)));
  if (group.versionMode === 'shared') {
    const declared = (app) =>
      app.versions
        .map((version) => version.id)
        .sort()
        .join('\n');
    if (apps.some((app) => declared(app) !== declared(apps[0])))
      throw new Error(`sharedグループの版宣言が揃っていません: ${group.id}`);
    const latest = (app) =>
      app.versions
        .filter((version) => version.isLatest)
        .map((version) => version.id)
        .join(',');
    if (apps.some((app) => latest(app) !== latest(apps[0])))
      throw new Error(`sharedグループの最新版本が一致しません: ${group.id}`);
  }
  const pages = apps.flatMap((app) => app.pages);
  const ids = new Set();
  const urls = new Set();
  for (const page of pages) {
    const identity = `${page.documentId}\0${page.version}\0${page.lang}`;
    const url = normalizeUrl(page.url);
    if (ids.has(identity))
      throw new Error(
        `文書ID・版・言語が重複しています: ${page.documentId} ${page.version}/${page.lang}`
      );
    if (urls.has(url)) throw new Error(`文書URLが重複しています: ${url}`);
    ids.add(identity);
    urls.add(url);
  }
  const catalog = {
    schemaVersion: 1,
    groupId: group.id,
    publicBase: group.publicBase,
    versionMode: group.versionMode,
    apps: apps.map(({ pages: _pages, ...app }) => app),
    pages,
  };
  const categories = group.memberIds.map(
    (id) =>
      json(
        path.join(members.find((app) => app.id === id).directory, 'src/config/project.config.jsonc')
      ).translations ?? {}
  );
  return {
    ...catalog,
    navigationRevision: createHash('sha256')
      .update(JSON.stringify({ catalog, categories }))
      .digest('hex'),
  };
}

/** Build processes may memoize immutable inputs; dev callers always rescan. */
export function loadGroupPages(directory = process.cwd(), { cache = false } = {}) {
  const group = readAppGroup(directory);
  if (!group) return null;
  const root = findRepositoryRoot(directory);
  const key = `${root}\0${group.id}`;
  if (cache && buildCache.has(key)) return buildCache.get(key);
  const registry = discoverApps(root);
  const members = registry.apps.filter((app) => app.groupId === group.id);
  const catalog = collectGroupPages(
    registry.groups.find((entry) => entry.id === group.id),
    members
  );
  if (cache) buildCache.set(key, catalog);
  return catalog;
}

/** Resolve real counterpart URLs, including documents renamed or moved between children. */
export function resolveGroupPageContext(catalog, { url, appId, version, lang }) {
  const owner = catalog.apps.find((app) => app.appId === appId);
  if (!owner) throw new Error(`目録にappがありません: ${appId}`);
  const current = catalog.pages.find((page) => normalizeUrl(page.url) === normalizeUrl(url));
  const scope =
    catalog.versionMode === 'independent'
      ? catalog.pages.filter((page) => page.appId === appId)
      : catalog.pages;
  const indexPath = (targetVersion, targetLang) =>
    `${catalog.publicBase}/navigation/${targetVersion}/${targetLang}/`;
  const counterpart = (targetVersion, targetLang) =>
    current &&
    scope.find(
      (page) =>
        page.documentId === current.documentId &&
        page.version === targetVersion &&
        page.lang === targetLang
    );
  const languages = [
    ...new Set(scope.filter((page) => page.version === version).map((page) => page.lang)),
  ].sort();
  const languagePaths = languages.map((targetLang) => {
    const target = counterpart(version, targetLang);
    return {
      lang: targetLang,
      path: target?.url ?? indexPath(version, targetLang),
      isCurrent: targetLang === lang,
      exact: Boolean(target),
    };
  });
  const versions = owner.versions.filter((item) =>
    scope.some((page) => page.version === item.id && page.lang === lang)
  );
  const versionPaths = Object.fromEntries(
    versions.map((item) => [item.id, counterpart(item.id, lang)?.url ?? indexPath(item.id, lang)])
  );
  return { documentId: current?.documentId ?? null, languagePaths, versions, versionPaths };
}
