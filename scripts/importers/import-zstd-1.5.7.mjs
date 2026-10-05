import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { unified } from 'unified';
import parse from 'remark-parse';
import gfm from 'remark-gfm';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export function generateZstdCanonical(sourcePath) {
  const source = fs.readFileSync(sourcePath, 'utf8');
  assert.equal(
    crypto.createHash('sha256').update(source).digest('hex'),
    '81d08d9af1e3011190cae694d1b775b46db4743728733522a4119a5cb7558bb5',
    'Fixed Zstandard specification source changed'
  );
  const lines = source.trimEnd().split('\n');
  const ranges = [
    [1, 94, '01-introduction', 'Introduction and notices', '導入と通知'],
    [95, 319, '02-frames', 'Zstandard frames', 'Zstandardフレーム'],
    [320, 612, '03-blocks', 'Blocks and literals', 'ブロックとリテラル'],
    [613, 984, '04-sequences', 'Sequences and execution', 'シーケンスと実行'],
    [985, 1027, '05-skippable-frames', 'Skippable frames', 'スキップ可能なフレーム'],
    [1028, 1232, '06-fse', 'Entropy encoding and FSE', 'エントロピー符号化とFSE'],
    [1233, 1473, '07-huffman', 'Huffman coding', 'Huffman符号化'],
    [1474, 1537, '08-dictionary', 'Dictionary format', '辞書形式'],
    [1538, lines.length, '09-appendices', 'Appendices and version changes', '付録と版の変更履歴'],
  ];
  const tree = unified().use(parse).use(gfm).parse(source);
  const text = (n) => n.value ?? (n.children ?? []).map(text).join('');
  const slug = (s) =>
    s
      .toLowerCase()
      .replace(/[^\p{L}\p{N}_\-\s]/gu, '')
      .replace(/\s/g, '-');
  const anchors = new Map();
  const headingIds = new Map();
  const headings = tree.children.filter((n) => n.type === 'heading');
  for (const h of headings) {
    const baseId = slug(text(h));
    let id = baseId;
    let suffix = 0;
    while (anchors.has(id)) id = `${baseId}-${++suffix}`;
    headingIds.set(h, id);
    anchors.set(
      id,
      ranges.find((r) => h.position.start.line >= r[0] && h.position.start.line <= r[1])[2]
    );
  }
  const definitions = tree.children
    .filter((n) => n.type === 'definition')
    .map((n) => source.slice(n.position.start.offset, n.position.end.offset));
  const sourceUrl =
    'https://github.com/facebook/zstd/blob/f8745da6ff1ad1e7bab384bd1f9d742439278e99/doc/zstd_compression_format.md';
  const result = [];
  for (let i = 0; i < ranges.length; i++) {
    const [start, end, id, en, ja] = ranges[i];
    const part = lines.slice(start - 1, end).join('\n') + '\n';
    let body = part;
    const localHeadings = headings.filter(
      (h) => h.position.start.line >= start && h.position.start.line <= end
    );
    for (const h of [...localHeadings].reverse()) {
      const position =
        lines.slice(start - 1, h.position.start.line - 1).join('\n').length +
        (h.position.start.line > start ? 1 : 0);
      body =
        body.slice(0, position) +
        `<a id="source-${headingIds.get(h)}"></a>\n\n` +
        body.slice(position);
    }
    // Reference definitions are globally scoped in the original single file.
    body += '\n' + definitions.filter((d) => !part.includes(d)).join('\n') + '\n';
    body = body.replace(/\(#([a-zA-Z0-9_\-]+)\)/g, (_, a) => {
      if (a === 'the-format-of-compressed_block') a = 'compressed-blocks';
      assert(anchors.has(a), `missing heading ${a}`);
      const page = anchors.get(a);
      return `(${page === id ? '' : `/docs/zstd/v1-5-7/en/01-specification/${page}`}#source-${a})`;
    });
    // Definition destinations have no parentheses.
    body = body.replace(/(^\[[^\n]+\]:\s*)#([a-zA-Z0-9_\-]+)/gm, (_, prefix, a) => {
      if (a === 'the-format-of-compressed_block') a = 'compressed-blocks';
      assert(anchors.has(a), `missing definition ${a}`);
      return (
        prefix +
        (anchors.get(a) === id ? '' : `/docs/zstd/v1-5-7/en/01-specification/${anchors.get(a)}`) +
        `#source-${a}`
      );
    });
    const context = [
      {
        kind: 'source',
        html: `<p>Zstandard 1.5.7 / format specification 0.4.3 (2024-10-07), Meta Platforms, Inc. and affiliates. <a href="${sourceUrl}">Fixed original</a>; <a href="/docs/zstd/source/v1-5-7/zstd_compression_format.md">Complete original Markdown</a>; <a href="/docs/zstd/source/v1-5-7/NOTICE.txt">Original permission notice</a>.</p>`,
      },
      {
        kind: 'editorial',
        html: '<p>Libx provides the complete fixed format specification in nine static chapters. CLI, API and implementation behavior are outside this scope; see the original project. Original headings and internal links are adapted for chapter navigation. One original broken reference to compressed blocks is repaired. This is an unofficial edition; the original notice is preserved.</p>',
      },
    ];
    if (id === '07-huffman')
      context[1].html +=
        '<p>The final ABEF encoding table is reproduced verbatim. Its E/F code entries differ from the prefix-code table above; consult the fixed original and reference implementation.</p>';
    const metadata = {
      title: `Zstandard: ${en}`,
      description: `Format specification 0.4.3 — ${en}`,
      documentId: `zstd-format-${id}`,
      order: i + 1,
      licenseSource: 'zstd-format-0.4.3',
      documentContext: context,
    };
    const canonical =
      '---\n' +
      Object.entries(metadata)
        .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
        .join('\n') +
      '\n---\n\n' +
      body;
    const relative = `01-specification/${id}.md`;
    result.push({
      id: relative,
      title: { en, ja },
      originalLines: [start, end],
      content: canonical,
    });
  }
  assert.equal(ranges.map((r) => lines.slice(r[0] - 1, r[1]).join('\n')).join('\n') + '\n', source);
  return result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = path.resolve(
    process.argv.find((a) => a.startsWith('--root='))?.slice(7) ?? process.cwd()
  );
  const sourcePath = path.resolve(
    root,
    process.argv.find((a) => a.startsWith('--source='))?.slice(9) ??
      'apps/zstd/public/source/v1-5-7/zstd_compression_format.md'
  );
  const output = path.resolve(
    root,
    process.argv.find((a) => a.startsWith('--output='))?.slice(9) ??
      'apps/zstd/src/content/docs/v1-5-7/en'
  );
  const pages = generateZstdCanonical(sourcePath);
  for (const page of pages) {
    const target = path.join(output, page.id);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, page.content);
  }
  console.log(
    `Generated ${pages.length} English chapters from the fixed complete Zstandard specification`
  );
}
