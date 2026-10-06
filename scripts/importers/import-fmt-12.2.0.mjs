#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse, serializeOuter } from 'parse5';
import { hashFile, describePath } from './safe-import-output.js';
import { prepareImportBatch } from './batch-import-output.js';

const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const NOTES = 'docs/notes/document-import/fmt/v12-2-0';
export const VERSION = 'v12-2-0';
export const PAGE_MAP = [
  { key: 'index', id: '01-docs/01-home.md', title: 'Home' },
  { key: 'get-started', id: '01-docs/02-get-started.md', title: 'Get Started' },
  { key: 'api', id: '01-docs/03-api.md', title: 'API Reference' },
  { key: 'syntax', id: '01-docs/04-syntax.md', title: 'Format String Syntax' },
  { key: 'license', id: '02-license/01-license.md', title: 'License' },
];
const walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, key) => n.attrs?.find((x) => x.name === key)?.value;
const text = (n) => n.value ?? (n.childNodes ?? []).map(text).join('');
const frontmatter = (page) =>
  `---\ntitle: ${JSON.stringify(page.title)}\nlicenseSource: "fmt-12-2-0"\n---\n\n`;
const inputs = JSON.parse(
  fs.readFileSync(new URL('./fmt-12.2.0-source-hashes.json', import.meta.url))
);

export function readLockedInputs(root = repository) {
  for (const entry of inputs.inputs) {
    const file = path.join(root, entry.path);
    assert.ok(!fs.lstatSync(file).isSymbolicLink() && fs.lstatSync(file).isFile(), entry.path);
    assert.equal(hashFile(file), entry.sha256, `固定入力SHA不一致: ${entry.path}`);
  }
  return path.join(root, NOTES);
}

/** Restore only fixed-header verified template return types before HTML parsing. */
export function repairDeclarationHTML(html, notes) {
  const repair = JSON.parse(
    fs.readFileSync(path.join(notes, 'DECLARATION_REPAIR_MAP.json'), 'utf8')
  );
  assert.equal(repair.sourceCommit, inputs.commit);
  assert.equal(repair.mappings.length, 11);
  for (const entry of repair.mappings) {
    const relative = entry.header.path.slice((NOTES + '/').length);
    assert.ok(
      entry.header.path.startsWith(NOTES + '/') &&
        /^source\/include\/fmt\/[a-z0-9-]+\.h$/.test(relative)
    );
    const header = path.join(notes, relative);
    assert.equal(hashFile(header), entry.header.sha256);
    const excerpt = fs
      .readFileSync(header, 'utf8')
      .split('\n')
      .slice(entry.sourceLines.start - 1, entry.sourceLines.end)
      .join('\n');
    assert.equal(excerpt, entry.sourceExcerpt);
    assert.ok(excerpt.replace(/\s+/g, ' ').includes(entry.returnType));
    assert.equal(entry.from.split(entry.returnType).length, 2);
    assert.equal(
      entry.to,
      entry.from.replace(
        entry.returnType,
        entry.returnType.replaceAll('<', '&lt;').replaceAll('>', '&gt;')
      )
    );
    assert.equal(html.split(entry.from).length, 2, '宣言修復は原HTMLの1箇所だけに適用');
    html = html.replace(entry.from, entry.to);
  }
  const article = walk(parse(html)).find(
    (n) => n.tagName === 'article' && attr(n, 'class')?.includes('md-content__inner')
  );
  assert.ok(article);
  const declarations = walk(article).filter(
    (n) => n.tagName === 'code' && attr(n, 'class') === 'language-cpp decl'
  );
  assert.equal(declarations.length, 84);
  for (const declaration of declarations)
    assert.ok(
      walk(declaration).every((n) => !n.tagName || ['code', 'div'].includes(n.tagName)),
      '宣言内の未知HTML要素'
    );
  for (const entry of repair.mappings)
    assert.equal(text(declarations[entry.declarationIndex]).trim(), entry.expectedDisplay);
  return html;
}

/** A separately identified editorial note does not replace the frozen upstream text. */
export function readEditorialNote(notes) {
  const document = JSON.parse(fs.readFileSync(path.join(notes, 'EDITORIAL_NOTES.json'), 'utf8'));
  assert.equal(document.sourceCommit, inputs.commit);
  assert.equal(document.notes.length, 1);
  const note = document.notes[0];
  assert.equal(note.id, 'locale-optimize-size');
  assert.equal(note.page, 'api');
  assert.equal(note.beforeHeading, '### Binary Size Optimization');
  assert.equal(note.header.path, NOTES + '/source/include/fmt/base.h');
  const header = path.join(notes, 'source/include/fmt/base.h');
  assert.equal(hashFile(header), note.header.sha256);
  const excerpt = fs
    .readFileSync(header, 'utf8')
    .split('\n')
    .slice(note.lines.start - 1, note.lines.end)
    .join('\n');
  assert.equal(excerpt, note.sourceExcerpt);
  assert.equal(
    excerpt,
    '#ifndef FMT_USE_LOCALE\n#  define FMT_USE_LOCALE (FMT_OPTIMIZE_SIZE <= 1)\n#endif'
  );
  for (const language of ['en', 'ja']) {
    const html = note[language + 'HTML'];
    assert.ok(
      html.startsWith('<aside class="fmt-editorial-note" role="note">') && html.endsWith('</aside>')
    );
    const tree = walk(parse(html));
    assert.equal(tree.filter((n) => n.tagName === 'aside').length, 1);
    assert.ok(
      tree.every(
        (n) =>
          !n.tagName ||
          ['html', 'head', 'body', 'aside', 'p', 'strong', 'code', 'a'].includes(n.tagName)
      )
    );
    const links = tree.filter((n) => n.tagName === 'a');
    assert.equal(links.length, 1);
    assert.equal(
      attr(links[0], 'href'),
      'https://github.com/fmtlib/fmt/blob/' + inputs.commit + '/include/fmt/base.h#L890-L892'
    );
  }
  return note;
}

/** All changes are limited to the approved ID/href map. First overload targets remain. */
function repairArticle(article, page, notes) {
  const declarationRepairs =
    page === 'api'
      ? JSON.parse(fs.readFileSync(path.join(notes, 'DECLARATION_REPAIR_MAP.json'))).mappings
      : [];
  const expected = JSON.parse(fs.readFileSync(path.join(notes, 'REPAIR_MAP.json')))
    .mappings.filter((m) => m.page === page)
    .map((entry) => {
      if (!entry.declaration) return entry;
      // Legacy ID repair context was captured before approved type escaping.
      // Update only an exact matching declaration; the ID/href repair remains identical.
      const matching = declarationRepairs.filter((repair) => {
        const code = walk(parse(repair.from)).find((n) => n.tagName === 'code');
        return text(code).trim() === entry.declaration.trim();
      });
      assert.ok(matching.length <= 1);
      return matching.length
        ? {
            ...entry,
            declaration: entry.declaration.replace(
              entry.declaration.trim(),
              matching[0].expectedDisplay
            ),
          }
        : entry;
    });
  const actual = [],
    used = new Set(
      walk(article)
        .map((n) => attr(n, 'id'))
        .filter(Boolean)
    ),
    seen = new Set();
  for (const n of walk(article)) {
    const id = attr(n, 'id');
    if (id) {
      let replacement = id;
      if (id === 'operator' && n.attrs.some((x) => ['"_a"', '"_cf"'].includes(x.name))) {
        const suffix = n.attrs.some((x) => x.name === '"_a"') ? 'a' : 'cf';
        assert.ok(
          text(n)
            .replace(/\s+/g, '')
            .includes('operator""_' + suffix)
        );
        replacement = 'operator-literal-' + suffix;
        n.attrs = n.attrs.filter((x) => !['"_a"', '"_cf"'].includes(x.name));
      } else if (seen.has(id)) {
        let index = 2;
        while (used.has(id + '-overload-' + index)) index++;
        replacement = id + '-overload-' + index;
      }
      if (replacement !== id) {
        assert.ok(!used.has(replacement));
        n.attrs.find((x) => x.name === 'id').value = replacement;
        used.add(replacement);
        actual.push({
          page,
          kind: 'id',
          from: id,
          to: replacement,
          declaration: text(n).slice(0, 500),
        });
      }
      seen.add(replacement);
    }
    const href = attr(n, 'href');
    if (href === '../syntax/#chrono-format-specifications') {
      n.attrs.find((x) => x.name === 'href').value = '../syntax/#chrono-format-spec';
      actual.push({
        page,
        kind: 'href',
        from: href,
        to: '../syntax/#chrono-format-spec',
        reason: 'Existing fixed syntax.md anchor at294',
      });
    }
    if (['file::WRONLY', 'file::CREATE', 'file::TRUNC'].includes(href)) {
      const line = { 'file::WRONLY': 235, 'file::CREATE': 237, 'file::TRUNC': 239 }[href];
      const sourceLine = fs
        .readFileSync(path.join(notes, 'source/include/fmt/os.h'), 'utf8')
        .split('\n')[line - 1];
      assert.ok(sourceLine.includes(href.slice(6) + ' ='));
      const to = `https://github.com/fmtlib/fmt/blob/${inputs.commit}/include/fmt/os.h#L${line}`;
      n.attrs.find((x) => x.name === 'href').value = to;
      actual.push({
        page,
        kind: 'href',
        from: href,
        to,
        reason: 'Official fixed header enumerator',
        sourceLine,
      });
    }
  }
  assert.deepEqual(actual, expected, '修復範囲が承認済み対応表から変わりました');
}

export function generateCanonicalPages({
  root = repository,
  pandoc = process.env.LIBX_FMT_PANDOC ?? 'pandoc',
} = {}) {
  const notes = readLockedInputs(root);
  const version = spawnSync(pandoc, ['--version'], { encoding: 'utf8' });
  assert.equal(version.status, 0, version.error?.message ?? version.stderr);
  assert.match(version.stdout, /^pandoc 3\.8\.3\b/, '変換器の固定版が必要です');
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-fmt-canonical-'));
  const relocations = [];
  try {
    return PAGE_MAP.map((page) => {
      let body;
      if (page.key === 'license') {
        const license = fs.readFileSync(path.join(notes, 'source/LICENSE'), 'utf8');
        body = `# License\n\n[Original MIT notice](https://github.com/fmtlib/fmt/blob/${inputs.commit}/LICENSE).\n\n\`\`\`text\n${license}\`\`\`\n`;
      } else {
        const original = fs.readFileSync(
          path.join(notes, 'generated-source', page.key + '.html'),
          'utf8'
        );
        const repairedInput =
          page.key === 'api' ? repairDeclarationHTML(original, notes) : original;
        const article = walk(parse(repairedInput)).find(
          (n) => n.tagName === 'article' && attr(n, 'class')?.includes('md-content__inner')
        );
        assert.ok(article, page.key);
        repairArticle(article, page.key, notes);
        const raw = [];
        for (const n of article.childNodes) {
          if (
            walk(n).some(
              (c) =>
                ['pre', 'table'].includes(c.tagName) ||
                (c.tagName === 'code' && /\s{2,}/.test(text(c)))
            )
          ) {
            const marker = 'LIBXCODEPLACEHOLDER' + raw.length + 'END';
            raw.push({ marker, html: serializeOuter(n).replace(/\n/g, '&#10;') });
            n.tagName = 'p';
            n.attrs = [];
            n.childNodes = [{ nodeName: '#text', value: marker, parentNode: n }];
          }
        }
        const html = path.join(temporary, page.key + '.html'),
          md = path.join(temporary, page.key + '.md');
        fs.writeFileSync(html, serializeOuter(article));
        const result = spawnSync(pandoc, ['-f', 'html', '-t', 'gfm', html, '-o', md], {
          encoding: 'utf8',
        });
        assert.equal(result.status, 0, result.stderr);
        body = fs.readFileSync(md, 'utf8');
        for (const item of raw) {
          assert.equal(body.split(item.marker).length, 2);
          body = body.replace(item.marker, item.html);
        }
        // Reparse the repaired article to classify links; do not infer destinations from strings.
        const repaired = walk(parse(serializeOuter(article)));
        // Raw blocks have placeholders above: also inspect their original HTML for links.
        const nodes = [...repaired, ...raw.flatMap((item) => walk(parse(item.html)))];
        for (const href of new Set(
          nodes.filter((n) => n.tagName === 'a' && attr(n, 'href')).map((n) => attr(n, 'href'))
        )) {
          if (href.startsWith('#')) continue;
          const url = new URL(
            href,
            'https://fmt.local/' + (page.key === 'index' ? '' : page.key + '/')
          );
          if (url.hostname !== 'fmt.local') continue;
          const targetKey =
            url.pathname === '/' ? 'index' : url.pathname.replace(/^\//, '').replace(/\/$/, '');
          const target = PAGE_MAP.find((p) => p.key === targetKey);
          assert.ok(target, `未分類の原文リンク: ${href}`);
          const to = `/docs/fmt/${VERSION}/en/${target.id.replace(/\.md$/, '')}/${url.hash}`;
          assert.ok(body.includes('href="' + href + '"') || body.includes('](' + href + ')'), href);
          body = body
            .replaceAll('href="' + href + '"', 'href="' + to + '"')
            .replaceAll('](' + href + ')', '](' + to + ')');
          relocations.push({ page: page.key, from: href, to });
        }
        if (page.key === 'index') {
          assert.ok(body.includes('(perf.svg)') || body.includes('src="perf.svg"'));
          body = body
            .replaceAll('(perf.svg)', '(/docs/fmt/assets/perf.svg)')
            .replaceAll('src="perf.svg"', 'src="/docs/fmt/assets/perf.svg"');
        }
        assert.ok(!body.includes('LIBXCODEPLACEHOLDER'));
      }
      if (page.key === 'api') {
        const note = readEditorialNote(notes);
        assert.equal(body.split(note.beforeHeading).length, 2);
        body = body.replace(note.beforeHeading, note.enHTML + '\n\n' + note.beforeHeading);
      }
      return { ...page, content: frontmatter(page) + body };
    });
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
}

export function importFmt({ root = repository, check = false, pandoc } = {}) {
  const pages = generateCanonicalPages({ root, pandoc });
  const writePages = (directory) => {
    for (const page of pages) {
      const file = path.join(directory, page.id);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, page.content);
    }
  };
  const validate = (directory) => {
    assert.deepEqual(
      describePath(directory)
        .map((x) => x.path)
        .sort(),
      PAGE_MAP.map((x) => x.id).sort()
    );
    for (const page of pages)
      assert.equal(fs.readFileSync(path.join(directory, page.id), 'utf8'), page.content);
  };
  const app = path.join(root, 'apps/fmt');
  return prepareImportBatch({
    stagingRoot: path.join(root, '.tmp/fmt-import'),
    check,
    outputs: [
      {
        kind: 'directory',
        targetPath: path.join(app, 'src/content/docs', VERSION, 'en'),
        generate: writePages,
        validate,
      },
      {
        kind: 'directory',
        targetPath: path.join(root, NOTES, 'generated/canonical'),
        generate: writePages,
        validate,
      },
      ...[
        ['source/doc/perf.svg', 'perf.svg'],
        ['source/LICENSE', 'fmt-LICENSE.txt'],
      ].map(([source, target]) => ({
        kind: 'file',
        targetPath: path.join(app, 'public/assets', target),
        generate: (file) => fs.copyFileSync(path.join(root, NOTES, source), file),
        validate: (file) => assert.equal(hashFile(file), hashFile(path.join(root, NOTES, source))),
      })),
    ],
  });
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  assert.ok(
    args.every((x) => x === '--check'),
    '引数は--checkのみ'
  );
  const results = importFmt({ check: args.includes('--check') });
  console.log(JSON.stringify({ check: args.includes('--check'), pages: 5, outputs: results }));
  if (args.includes('--check') && results.some((x) => !x.matches)) process.exitCode = 1;
}
