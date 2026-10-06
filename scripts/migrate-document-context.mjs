#!/usr/bin/env node
// Move only recognized Libx annotations; upstream notices and content remain in place.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const apply = process.argv.includes('--apply');
const rendererPath = process.env.LIBX_MARKDOWN_RENDERER;
if (!rendererPath) throw new Error('Set LIBX_MARKDOWN_RENDERER to the installed @astrojs/markdown-remark module.');
const { createMarkdownProcessor } = await import(pathToFileURL(rendererPath).href);
const renderer = await createMarkdownProcessor({ syntaxHighlight: false, smartypants: false });
const hash = (text) => crypto.createHash('sha256').update(text).digest('hex');
const walk = (dir) => fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir, e.name)) : /\.mdx?$/.test(e.name) ? [path.join(dir, e.name)] : []) : [];
const normalizePolicy = (text) => text
  .replace(/(?:ユーザーが承認した|ユーザー承認済みの|承認された|承認済みの)運用方針(?:に基づき|に従い)|ユーザー承認に基づき/g, 'Libxの運用方針に基づき')
  .replace(/Under the (?:user-approved|approved) operating policy|Under user approval/gi, 'Under Libx’s operating policy');
const records = [];
for (const app of fs.readdirSync(path.join(root, 'apps'))) {
  if (app === 'awesome') continue;
  for (const file of walk(path.join(root, 'apps', app, 'src/content/docs'))) {
    // Unpublished Lua snapshot is separate pending work, not this maintenance batch.
    if (file.endsWith('04-known-issues-2026-10-02.md')) continue;
    const original = fs.readFileSync(file, 'utf8');
    const fm = original.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/);
    if (!fm) throw new Error(`Missing frontmatter: ${file}`);
    if (/^documentContext:/m.test(fm[0])) continue; // idempotent; existing metadata is not overwritten
    const body = original.slice(fm[0].length);
    const spans = [];
    const select = (start, end, kind) => {
      if (end <= start) return;
      if (spans.some(s => start < s.end && end > s.start)) throw new Error(`Overlapping annotations: ${file}`);
      spans.push({ start, end, kind, original: body.slice(start, end) });
    };
    const matches = (re, kind) => { for (const m of body.matchAll(re)) select(m.index, m.index + m[0].length, kind); };
    if (app === 'spdlog' || app === 'zlib') {
      matches(/<aside\s+data-editorial="(?:provenance|license)"[^>]*>[\s\S]*?<\/aside>/g, 'source');
      matches(/<aside\s+data-editorial="source-note"[^>]*>[\s\S]*?<\/aside>/g, 'editorial');
      if (app === 'spdlog' && file.endsWith('/02-reference/01-license.md')) {
        const heading = body.match(/^# [^\n]+\n/m);
        const end = body.indexOf('## LICENSE');
        if (heading && end > heading.index) select(heading.index + heading[0].length, end, 'source');
      }
    }
    if (app === 'xxhash') {
      const footer = body.match(/^## (?:Source and notices|出典と通知)\s*$/m);
      if (footer) select(footer.index, body.length, 'source');
      const note = body.match(/^## (?:Editorial notes on the fixed source|Editorial notes on fixed upstream text|固定した原文に関する編集注記|固定した上流原文に対する編集注記)\s*$/m);
      if (note) {
        const tail = body.slice(note.index + note[0].length);
        const boundary = tail.search(/<div class="contents xxhash-api"|^## /m);
        if (boundary < 0) throw new Error(`Missing xxHash editorial boundary: ${file}`);
        select(note.index, note.index + note[0].length + boundary, 'editorial');
      }
    }
    if (app === 'xxhash') matches(/^編集注記：[^\n]+$/gm, 'editorial');
    if (app === 'xxhash' && file.includes('/03-notices/')) {
      matches(/^(?:Original notice retained verbatim\.|原通知を変更せず保持しています。)$/gm, 'source');
      matches(/^\[(?:Fixed original source|固定版の原文)\]\([^\n]+\)$/gm, 'source');
      matches(/^以下は内容理解のための非公式訳です。[^\n]+$/gm, 'editorial');
    }
    if (app === 'gperf') {
      const boundary = body.indexOf('<div class="gperf-original">');
      if (boundary < 0) throw new Error(`Missing gperf original boundary: ${file}`);
      select(0, boundary, 'source');
      const note = body.match(/^## (?:Editorial notes on the fixed source|固定原文についての編集注記)\s*$/m);
      if (note) select(note.index, body.length, 'editorial');
    }
    if (app === 'fmt') matches(/<aside class="fmt-editorial-note"[^>]*>[\s\S]*?<\/aside>/g, 'editorial');
    if (app === 'cjson') {
      matches(/<aside class="libx-source-notes"[^>]*>[\s\S]*?<\/aside>/g, 'editorial');
      matches(/<p>以下は上に保持した英語の原通知の非公式参考訳です。ライセンス条件の原文は英語の通知を参照してください。<\/p>/g, 'editorial');
    }
    if (app === 'lua' || app === 'glfw') matches(/^> \*\*(?:Libx|libx)[^\n]*(?:\n>[^\n]*)*/gm, 'editorial');
    if (app === 'uthash') matches(/^以下はLibxによる非公式の参考訳です。[^\n]*$/gm, 'editorial');
    if (app === 'pugixml') {
      matches(/ 訳注：原文は「C11」と表記しています。固定版のヘッダーでは、C\+\+11以降または対応するMSVCでムーブコンストラクターとムーブ代入演算子が有効になることを確認できます。/g, 'editorial');
      matches(/（訳注：原文は戻り値を「属性」と記していますが、上の関数宣言ではテキストオブジェクトへの参照を返します。）/g, 'editorial');
      matches(/ 訳注：原文は「cross-document copies」と「inter-document copies」を併記しています。両者の区別はこの記述だけでは明確でないため、原文の数値と表記を保持しています。/g, 'editorial');
      matches(/ 訳注：関数名はこの履歴の原文表記です。固定版ヘッダーでは、この選択関数はXMLノードのクラスのメンバーとして宣言されています。/g, 'editorial');
    }
    spans.sort((a, b) => a.start - b.start);
    let remaining = body;
    for (const span of [...spans].reverse()) remaining = remaining.slice(0, span.start) + remaining.slice(span.end);
    const notes = [];
    for (const span of spans) {
      const text = normalizePolicy(span.original);
      const html = text.trim().startsWith('<aside') || text.trim().startsWith('<p>') ? text.trim() : (await renderer.render(text.trim())).code;
      // A moved note retains a link to the original section, so 'above/below'
      // in a preserved quotation can still be interpreted at its original location.
      let context;
      if (span.kind === 'editorial' && app !== 'gperf') {
        const preceding = body.slice(0, span.start);
        const headings = [...preceding.matchAll(/<h[1-6]\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/h[1-6]>/g)];
        const last = headings.at(-1);
        if (last) context = { anchor: last[1], label: last[2].replace(/<[^>]*>/g, '').trim() };
        if (!context) {
          const heading = [...preceding.matchAll(/^#{1,6} (.+)$/gm)].at(-1);
          if (heading) {
            const rendered = (await renderer.render(heading[0])).code;
            const id = rendered.match(/id="([^"]+)"/);
            if (id) context = { anchor: id[1], label: heading[1] };
          }
        }
      }
      notes.push({ kind: span.kind, html, ...(context ? { context } : {}) });
    }
    remaining = normalizePolicy(remaining);
    if (spans.length === 0 && remaining === body) continue;
    const frontmatter = notes.length ? fm[0].replace(/\r?\n---(?:\r?\n|$)$/, `\ndocumentContext: ${JSON.stringify(notes)}\n---\n`) : fm[0];
    const updated = frontmatter + remaining;
    // Reconstruct untouched body from extracted ranges; no unselected text is edited.
    let reconstructed = remaining;
    if (normalizePolicy(body) === body) {
      for (const span of spans) reconstructed = reconstructed.slice(0, span.start) + span.original + reconstructed.slice(span.start);
      if (reconstructed !== body) throw new Error(`Body reconstruction failed: ${file}`);
    }
    records.push({ path: path.relative(root, file), before: hash(original), after: hash(updated), bodyBefore: hash(body), bodyAfter: hash(remaining), notes: spans.map(s => ({ ...s, normalized: normalizePolicy(s.original) })), bodyPreservedExceptAnnotationsAndPolicy: true });
    if (apply) {
      if (fs.readFileSync(file, 'utf8') !== original) throw new Error(`Concurrent modification: ${file}`);
      fs.writeFileSync(file, updated);
    }
  }
}
const output = process.env.LIBX_CONTEXT_REPORT;
if (output) fs.writeFileSync(output, JSON.stringify({ applied: apply, files: records.length, records }, null, 2) + '\n');
const counts = {};
for (const r of records) { const app = r.path.split('/')[1]; counts[app] = (counts[app] ?? 0) + 1; }
console.log(JSON.stringify({ applied: apply, files: records.length, projects: counts }));
