import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse, parseFragment, serializeOuter } from 'parse5';
import { hashFile } from './safe-import-output.js';
import { prepareImportBatch } from './batch-import-output.js';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const relativeBase = 'docs/notes/document-import/uthash/v2-4-0';
const lockHash = 'd4827108cdfa7a9427d13ceded201d97dfc4a4de0d4a9b45b62002526899f2df';
const mapHash = '3a5ae7e9ba3683ef2a7967d50c75d57e4b464689b1d4768b817f95f6b06628ad';
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const walk = (n, f) => {
  f(n);
  for (const c of n.childNodes ?? []) walk(c, f);
};

// Neither source nor existing generated output may traverse symlinks.
function noSymlinks(p, recursive = false) {
  for (let current = path.resolve(p); ; current = path.dirname(current)) {
    let stat;
    try {
      stat = fs.lstatSync(current);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    if (stat) assert.ok(!stat.isSymbolicLink(), `symlink: ${current}`);
    if (path.dirname(current) === current) break;
  }
  if (recursive && fs.existsSync(p) && fs.lstatSync(p).isDirectory())
    for (const name of fs.readdirSync(p)) noSymlinks(path.join(p, name), true);
}
export function mapReference(href, map, lang = 'en') {
  const [file, fragment] = href.split('#');
  const suffix = fragment === undefined ? '' : '#' + fragment;
  const page = map.pages.find(
    (p) => path.basename(p.source.path).replace(/\.txt$/, '.html') === file
  );
  if (page) return `/docs/uthash/v2-4-0/${lang}/${page.id.replace(/\.md$/, '')}/` + suffix;
  if (map.references[file]) return map.references[file].replace('{lang}', lang) + suffix;
  if (file === 'rss.png') return map.assets[0].target + suffix;
  return href;
}
function convert(html, pandoc) {
  const replacements = [];
  const token = (value) => {
    const key = `LIBXUTHASHTOKEN${replacements.length}END`;
    assert.ok(!html.includes(key), 'source contains conversion token');
    replacements.push([key, value]);
    return key;
  };
  let prepared = html
    .replace(/<table\b[^>]*>[\s\S]*?<\/table>/g, (v) => '<p>' + token(v) + '</p>')
    .replace(
      /<h([1-6]) id="([A-Za-z0-9_.:-]+)"([^>]*)>([\s\S]*?)<\/h\1>/g,
      (_, level, id, attrs, inner) =>
        '<p>' +
        token(`<!--libx-source-heading:${id}-->`) +
        '</p><h' +
        level +
        attrs +
        '>' +
        inner +
        '</h' +
        level +
        '>'
    )
    .replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/g, (v) =>
      v.includes('<a ') ? '<p>' + token(v) + '</p>' : v
    )
    .replace(/&amp;(#(?:x[0-9a-f]+|[0-9]+);)/gi, (_, entity) => token('&amp;' + entity))
    .replace(
      /<pre class="pygments highlight"><code data-lang="([^"]+)">/g,
      (_, lang) =>
        '<pre class="' + (lang === 'c++' ? 'cpp' : lang) + '"><code data-lang="' + lang + '">'
    );
  let md = execFileSync(
    pandoc,
    ['-f', 'html', '-t', 'gfm', '--wrap=none', '--syntax-highlighting=none'],
    { input: prepared, encoding: 'utf8', maxBuffer: 32e6 }
  );
  for (const [key, value] of replacements) {
    assert.equal(md.split(key).length, 2, `conversion lost token: ${key}`);
    md = md.replace(key, value);
  }
  assert.ok(!md.includes('LIBXUTHASHTOKEN'), 'unprocessed conversion token');
  return md;
}
export function importUthash({
  root = repository,
  asciidoc,
  pandoc,
  check = false,
  commitOptions,
} = {}) {
  assert.ok(asciidoc && pandoc, 'explicit AsciiDoc/Pandoc executable paths required');
  root = path.resolve(root);
  const base = path.join(root, relativeBase),
    lockPath = path.join(base, 'SOURCE_LOCK.json');
  noSymlinks(base, true);
  assert.equal(hashFile(lockPath), lockHash, 'SOURCE_LOCK changed');
  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  assert.equal(lock.contentMap.sha256, mapHash);
  assert.equal(hashFile(path.join(root, lock.contentMap.path)), mapHash, 'CONTENT_MAP changed');
  const map = JSON.parse(fs.readFileSync(path.join(root, lock.contentMap.path), 'utf8'));
  for (const input of lock.inputs) {
    assert.ok(input.path.startsWith(relativeBase + '/source/'));
    const file = path.join(root, input.path);
    noSymlinks(file);
    assert.ok(fs.lstatSync(file).isFile());
    assert.equal(hashFile(file), input.sha256, `fixed input changed: ${input.path}`);
  }
  const toolVersions = {
    asciidoc: execFileSync(asciidoc, ['--version'], { encoding: 'utf8' }).trim(),
    pandoc: execFileSync(pandoc, ['--version'], { encoding: 'utf8' }).split('\n')[0],
  };
  assert.equal(toolVersions.asciidoc, 'asciidoc 10.2.1');
  assert.equal(toolVersions.pandoc, 'pandoc 3.8.3');
  const output = path.join(base, 'generated');
  noSymlinks(output, true);
  if (fs.existsSync(output)) assert.ok(fs.lstatSync(output).isDirectory());
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-uthash-convert-'));
  try {
    const pages = [];
    for (const page of map.pages) {
      const source = path.join(root, page.source.path);
      let md,
        fragment = null;
      if (path.basename(source) === 'LICENSE') {
        const notice = fs.readFileSync(source, 'utf8');
        assert.ok(!notice.includes('```'));
        md =
          '<pre>' +
          notice.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;') +
          '</pre>\n';
      } else {
        const htmlPath = path.join(temporary, path.basename(source, '.txt') + '.html');
        execFileSync(asciidoc, ['-a', 'toc2', '-o', htmlPath, source], {
          encoding: 'utf8',
          maxBuffer: 32e6,
        });
        const document = parse(fs.readFileSync(htmlPath, 'utf8'));
        let content;
        walk(document, (n) => {
          if (attr(n, 'id') === 'content') content = n;
        });
        assert.ok(content, 'missing AsciiDoc #content');
        fragment = content.childNodes.map(serializeOuter).join('');
        const mapped = parseFragment(fragment);
        walk(mapped, (n) => {
          for (const a of n.attrs ?? [])
            if (['href', 'src'].includes(a.name)) a.value = mapReference(a.value, map);
        });
        md = convert(mapped.childNodes.map(serializeOuter).join(''), pandoc);
      }
      const metadata = {
        title: page.title,
        description: `uthash 2.4.0 official source: ${page.title}`,
        sourceURL: page.sourceURL,
        licenseSource: page.licenseSource,
        upstreamAuthors: page.authors,
        upstreamVersionHeader: page.sourceVersionHeader ?? null,
      };
      const header =
        '---\n' +
        Object.entries(metadata)
          .map(([k, v]) => k + ': ' + JSON.stringify(v))
          .join('\n') +
        '\n---\n\n';
      pages.push({ id: page.id, markdown: header + md, fragment, source: page.source });
    }
    const results = prepareImportBatch({
      stagingRoot: temporary,
      check,
      commitOptions,
      outputs: [
        {
          targetPath: output,
          kind: 'directory',
          generate: (prepared) => {
            for (const p of pages) {
              const dest = path.join(prepared, 'canonical', p.id);
              fs.mkdirSync(path.dirname(dest), { recursive: true });
              fs.writeFileSync(dest, p.markdown);
              if (p.fragment !== null) {
                const html = path.join(
                  prepared,
                  'source-fragments',
                  p.id.replace(/\.md$/, '.html')
                );
                fs.mkdirSync(path.dirname(html), { recursive: true });
                fs.writeFileSync(html, p.fragment);
              }
            }
            fs.mkdirSync(path.join(prepared, 'assets'));
            fs.copyFileSync(
              path.join(root, map.assets[0].path),
              path.join(prepared, 'assets/rss.png')
            );
            fs.writeFileSync(
              path.join(prepared, 'GENERATION.json'),
              JSON.stringify(
                {
                  schemaVersion: 1,
                  project: 'uthash',
                  version: 'v2-4-0',
                  sourceLockSha256: lockHash,
                  contentMapSha256: mapHash,
                  toolVersions,
                  pages: pages.map((p) => ({ id: p.id, source: p.source })),
                  status: 'generated-unreviewed',
                  notes: [
                    'Full content review pending; mechanical rendering verification recorded separately.',
                    'Original title/authors/version retained as metadata; publication must render provenance/annotated license policy.',
                    'Historical userguide.pdf404 annotation belongs outside imported body.',
                  ],
                },
                null,
                2
              ) + '\n'
            );
          },
          validate: (prepared) => {
            for (const p of pages)
              assert.equal(
                fs.readFileSync(path.join(prepared, 'canonical', p.id), 'utf8'),
                p.markdown
              );
            assert.equal(hashFile(path.join(prepared, 'assets/rss.png')), map.assets[0].sha256);
          },
        },
      ],
    });
    return {
      pages: pages.length,
      sourceFragments: pages.filter((p) => p.fragment !== null).length,
      assets: 1,
      toolVersions,
      check,
      matches: results.every((r) => r.matches),
    };
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    assert.ok(
      args.every((a) => a === '--check' || /^--(?:asciidoc|pandoc)=.+$/.test(a)),
      'unsupported argument'
    );
    assert.equal(new Set(args.map((a) => a.split('=')[0])).size, args.length, 'duplicate argument');
    const result = importUthash({
      check: args.includes('--check'),
      asciidoc: args.find((a) => a.startsWith('--asciidoc='))?.slice(11),
      pandoc: args.find((a) => a.startsWith('--pandoc='))?.slice(9),
    });
    console.log(JSON.stringify(result));
    if (result.check && !result.matches) process.exitCode = 1;
  } catch (error) {
    console.error(error.stack);
    process.exitCode = 1;
  }
}
