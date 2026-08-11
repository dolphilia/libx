import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { readJsoncFile } from './jsonc-utils.js';

const markdownParser = unified().use(remarkParse).use(remarkGfm);
const mdxParser = unified().use(remarkParse).use(remarkGfm).use(remarkMdx);
const TRANSLATABLE_FRONTMATTER = new Set(['title', 'description']);

function listContentFiles(root, base = root) {
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(root, entry.name);
      return entry.isDirectory()
        ? listContentFiles(entryPath, base)
        : entry.isFile() && /\.mdx?$/.test(entry.name)
          ? [path.relative(base, entryPath)]
          : [];
    })
    .sort();
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, stable(value[key])])
    );
  }
  return value;
}

function immutableFrontmatter(data) {
  return stable(
    Object.fromEntries(Object.entries(data).filter(([key]) => !TRANSLATABLE_FRONTMATTER.has(key)))
  );
}

function htmlAttributes(value, names) {
  const result = [];
  for (const name of names) {
    const expression = new RegExp(`\\b${name}=["']([^"']+)["']`, 'g');
    for (const match of value.matchAll(expression)) result.push(`${name}:${match[1]}`);
  }
  return result;
}

function technicalIdentifiers(value, prefixes) {
  if (!prefixes.length) return [];
  return [...value.matchAll(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)]
    .map((match) => match[0])
    .filter((token) => prefixes.some((prefix) => token.startsWith(prefix) && token !== prefix));
}

export function parseContentDocument(source, extension = '.md', identifierPrefixes = []) {
  const parsedMatter = matter(source);
  const tree = (extension === '.mdx' ? mdxParser : markdownParser).parse(parsedMatter.content);
  const definitions = new Map();
  visit(tree, 'definition', (node) => definitions.set(node.identifier, node.url));

  const result = {
    frontmatter: immutableFrontmatter(parsedMatter.data),
    headings: [],
    code: [],
    inlineCode: [],
    links: [],
    images: [],
    anchors: [],
    identifiers: [],
    unhandledDirectives: [],
  };

  visit(tree, (node) => {
    if (node.type === 'heading') result.headings.push(node.depth);
    if (node.type === 'code')
      result.code.push({ lang: node.lang ?? null, meta: node.meta ?? null, value: node.value });
    if (node.type === 'inlineCode') result.inlineCode.push(node.value);
    if (node.type === 'link') result.links.push(node.url);
    if (node.type === 'linkReference' && definitions.has(node.identifier)) {
      result.links.push(definitions.get(node.identifier));
    }
    if (node.type === 'image') result.images.push(node.url);
    if (node.type === 'imageReference' && definitions.has(node.identifier)) {
      result.images.push(definitions.get(node.identifier));
    }
    if (node.type === 'html') {
      result.anchors.push(...htmlAttributes(node.value, ['id']).map((item) => item.slice(3)));
      result.links.push(...htmlAttributes(node.value, ['href']).map((item) => item.slice(5)));
      result.images.push(...htmlAttributes(node.value, ['src']).map((item) => item.slice(4)));
    }
    if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
      for (const attribute of node.attributes ?? []) {
        if (attribute.type !== 'mdxJsxAttribute' || typeof attribute.value !== 'string') continue;
        if (attribute.name === 'id') result.anchors.push(attribute.value);
        if (attribute.name === 'href') result.links.push(attribute.value);
        if (attribute.name === 'src') result.images.push(attribute.value);
      }
    }
    if (node.type === 'text') {
      result.identifiers.push(...technicalIdentifiers(node.value, identifierPrefixes));
      for (const match of node.value.matchAll(
        /(^|\n)\s*@(?:ref|snippet|anchor|note|warning|b)\b/g
      )) {
        result.unhandledDirectives.push(match[0].trim());
      }
    }
  });

  result.identifiers.sort();
  result.anchors.sort();
  return result;
}

function normalizeInvariantUrl(url, { baseUrl, version, sourceLanguage, targetLanguage }) {
  const targetPrefix = `${baseUrl}/${version}/${targetLanguage}/`;
  const sourcePrefix = `${baseUrl}/${version}/${sourceLanguage}/`;
  return url.startsWith(targetPrefix) ? `${sourcePrefix}${url.slice(targetPrefix.length)}` : url;
}

function compare(label, sourceValue, targetValue, file, errors) {
  if (JSON.stringify(sourceValue) !== JSON.stringify(targetValue)) {
    errors.push(`${file}: ${label}が定本と一致しません`);
  }
}

function stripQueryAndFragment(url) {
  const hashIndex = url.indexOf('#');
  const queryIndex = url.indexOf('?');
  const indexes = [hashIndex, queryIndex].filter((index) => index >= 0);
  const end = indexes.length ? Math.min(...indexes) : url.length;
  return { path: url.slice(0, end), anchor: hashIndex >= 0 ? url.slice(hashIndex + 1) : '' };
}

function routeForFile(baseUrl, version, language, relativePath) {
  return `${baseUrl}/${version}/${language}/${relativePath.replace(/\.mdx?$/, '')}`;
}

function resolveInternalRoute(url, sourceRoute) {
  const { path: targetPath, anchor } = stripQueryAndFragment(url);
  if (!targetPath) return { route: sourceRoute, anchor };
  if (targetPath.startsWith('/')) return { route: targetPath.replace(/\/$/, ''), anchor };
  if (/^[a-z][a-z+.-]*:/i.test(targetPath)) return null;
  const base = path.posix.dirname(sourceRoute);
  return { route: path.posix.resolve(base, targetPath).replace(/\/$/, ''), anchor };
}

export function validateTranslatedContent({
  projectDir,
  version: requestedVersion,
  targetLanguages,
  allowMissing = false,
  identifierPrefixes = [],
}) {
  const config = readJsoncFile(path.join(projectDir, 'src/config/project.config.jsonc'));
  const docsRoot = path.join(projectDir, 'src/content/docs');
  const projectSlug = config.paths.projectSlug ?? path.basename(projectDir);
  const baseUrl = config.paths.baseUrl ?? `${config.paths.baseUrlPrefix ?? '/docs'}/${projectSlug}`;
  const sourceLanguage = config.licensing.sourceLanguage;
  const versions = requestedVersion
    ? [requestedVersion]
    : config.versioning.versions.map((entry) => entry.id);
  const targets =
    targetLanguages?.length > 0
      ? targetLanguages
      : config.language.supported.filter((language) => language !== sourceLanguage);
  const report = {
    project: projectSlug,
    sourceLanguage,
    versions: {},
    checkedLinks: 0,
    missing: [],
    errors: [],
  };

  for (const version of versions) {
    const sourceRoot = path.join(docsRoot, version, sourceLanguage);
    const sourceFiles = listContentFiles(sourceRoot);
    const parsedByRoute = new Map();
    const fileByRoute = new Map();
    const syntheticRoutes = new Set();

    for (const language of config.language.supported) {
      syntheticRoutes.add(`${baseUrl}/${version}/${language}`);
      for (const relativePath of listContentFiles(path.join(docsRoot, version, language))) {
        const filePath = path.join(docsRoot, version, language, relativePath);
        const route = routeForFile(baseUrl, version, language, relativePath);
        parsedByRoute.set(
          route,
          parseContentDocument(
            fs.readFileSync(filePath, 'utf8'),
            path.extname(filePath),
            identifierPrefixes
          )
        );
        fileByRoute.set(route, filePath);
      }
    }

    report.versions[version] = { sourceFiles: sourceFiles.length, targets: {} };
    for (const targetLanguage of targets) {
      const targetRoot = path.join(docsRoot, version, targetLanguage);
      const targetFiles = listContentFiles(targetRoot);
      const missing = sourceFiles.filter((file) => !targetFiles.includes(file));
      const extra = targetFiles.filter((file) => !sourceFiles.includes(file));
      report.versions[version].targets[targetLanguage] = {
        files: targetFiles.length,
        missing: missing.length,
        extra: extra.length,
      };
      report.missing.push(...missing.map((file) => `${version}/${targetLanguage}/${file}`));
      if (extra.length)
        report.errors.push(`${version}/${targetLanguage}: 余分な翻訳: ${extra.join(', ')}`);
      if (missing.length && !allowMissing) {
        report.errors.push(`${version}/${targetLanguage}: 未翻訳: ${missing.join(', ')}`);
      }

      for (const relativePath of targetFiles.filter((file) => sourceFiles.includes(file))) {
        const sourceRoute = routeForFile(baseUrl, version, sourceLanguage, relativePath);
        const targetRoute = routeForFile(baseUrl, version, targetLanguage, relativePath);
        const sourceDocument = parsedByRoute.get(sourceRoute);
        const targetDocument = parsedByRoute.get(targetRoute);
        const context = { baseUrl, version, sourceLanguage, targetLanguage };

        compare(
          'Frontmatter不変項目',
          sourceDocument.frontmatter,
          targetDocument.frontmatter,
          relativePath,
          report.errors
        );
        compare(
          '見出し階層',
          sourceDocument.headings,
          targetDocument.headings,
          relativePath,
          report.errors
        );
        compare(
          'コードブロック',
          sourceDocument.code,
          targetDocument.code,
          relativePath,
          report.errors
        );
        compare(
          'インラインコード',
          [...sourceDocument.inlineCode].sort(),
          [...targetDocument.inlineCode].sort(),
          relativePath,
          report.errors
        );
        compare(
          'HTML/MDXアンカー',
          sourceDocument.anchors,
          targetDocument.anchors,
          relativePath,
          report.errors
        );
        compare(
          '画像URL',
          sourceDocument.images.map((url) => normalizeInvariantUrl(url, context)).sort(),
          targetDocument.images.map((url) => normalizeInvariantUrl(url, context)).sort(),
          relativePath,
          report.errors
        );
        compare(
          'リンク先',
          sourceDocument.links.map((url) => normalizeInvariantUrl(url, context)).sort(),
          targetDocument.links.map((url) => normalizeInvariantUrl(url, context)).sort(),
          relativePath,
          report.errors
        );
        compare(
          '技術識別子',
          sourceDocument.identifiers,
          targetDocument.identifiers,
          relativePath,
          report.errors
        );
        if (targetDocument.unhandledDirectives.length) {
          report.errors.push(
            `${relativePath}: 未処理命令 ${targetDocument.unhandledDirectives.join(', ')}`
          );
        }
      }
    }

    for (const [sourceRoute, document] of parsedByRoute) {
      for (const url of [...document.links, ...document.images]) {
        const target = resolveInternalRoute(url, sourceRoute);
        if (!target || !target.route.startsWith(`${baseUrl}/`)) continue;
        report.checkedLinks++;
        const publicRelative = target.route.startsWith(`${baseUrl}/`)
          ? target.route.slice(baseUrl.length + 1)
          : null;
        const publicTarget = publicRelative
          ? path.join(projectDir, 'public', publicRelative)
          : null;
        if (
          !parsedByRoute.has(target.route) &&
          !syntheticRoutes.has(target.route) &&
          !(publicTarget && fs.existsSync(publicTarget))
        ) {
          report.errors.push(
            `${path.relative(projectDir, fileByRoute.get(sourceRoute))}: リンク先がありません: ${url}`
          );
          continue;
        }
        if (target.anchor && parsedByRoute.has(target.route)) {
          const anchors = parsedByRoute.get(target.route).anchors;
          if (!anchors.includes(target.anchor)) {
            report.errors.push(
              `${path.relative(projectDir, fileByRoute.get(sourceRoute))}: アンカーがありません: ${url}`
            );
          }
        }
      }
    }
  }

  report.errors = [...new Set(report.errors)];
  return report;
}
