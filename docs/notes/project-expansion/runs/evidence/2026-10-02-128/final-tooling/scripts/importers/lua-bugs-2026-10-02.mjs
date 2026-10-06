import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { hashFile } from './safe-import-output.js';
import { commitPreparedPathsAtomically } from '../atomic-paths.js';

export const LUA_BUGS_PAGE = '07-migration-and-known-issues/04-known-issues-2026-10-02.md';
export const LUA_BUGS_SOURCE = 'docs/notes/document-import/lua/v5-5-1/bugs-2026-10-02';
export const LICENSE_ANNOTATION_EN =
  'The description and reproducer on this page were obtained from the official Lua bugs page. No documentation-specific license notice was found. Under the Libx operating policy, the Lua software MIT license is applied with this annotation. This operational decision does not establish an explicit individual permission for the submitted material. The original reporter attribution and the Lua.org and PUC-Rio copyright and permission notices are retained.';
export const LICENSE_ANNOTATION_JA =
  'このページの説明と再現例はLua公式の既知不具合一覧から取得したものです。文書専用のライセンス表記は見つからなかったため、Libxの運用方針に基づきLua本体のMITライセンスを注釈付きで適用しています。この判断は、当該投稿素材への個別許諾が明示されていることを意味しません。原文の報告者表示とLua.org・PUC-Rioの著作権・許諾通知を保持しています。';
const hashes = {
  'official-bugs.html': 'b7b5a38d3cc32cd5b627a0e073948152e26f1382e21441d08db6c827e9596b6e',
  'known-issues-5.5.1.html': '46d471c4c6c3cb700bef45de6da435497df88b79c03ec522d08f19e5bbc135fa',
  'copyright.html': '9fa02db000d8178643a592032fab2e1d2ba6d9e2f609f149fc113d30d32dbea2',
  'SOFTWARE-LICENSE.txt': 'a23ad1f0b07e4e59009d8efaaf1f5ed1dcd06e5256c1743a58ca4f1cacad32e0',
};
const walk = (node) => [node, ...(node.childNodes ?? []).flatMap(walk)];
const text = (node) => node.value ?? (node.childNodes ?? []).map(text).join('');

export function assertNoSymlink(target) {
  for (let current = path.resolve(target); ; current = path.dirname(current)) {
    if (fs.existsSync(current))
      assert.ok(!fs.lstatSync(current).isSymbolicLink(), `symlink: ${current}`);
    else {
      try {
        fs.lstatSync(current);
        throw new Error(`symlink: ${current}`);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
    if (path.dirname(current) === current) break;
  }
}

export function readSnapshot(root) {
  const base = path.join(root, LUA_BUGS_SOURCE);
  assertNoSymlink(base);
  const lockPath = path.join(base, 'SOURCE_LOCK.json');
  assertNoSymlink(lockPath);
  const lock = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  assert.equal(lock.project, 'lua');
  assert.equal(lock.upstreamVersion, '5.5.1');
  assert.equal(lock.snapshotDate, '2026-10-02');
  const inputs = {};
  for (const [name, digest] of Object.entries(hashes)) {
    const file = path.join(base, 'source', name);
    assertNoSymlink(file);
    assert.equal(hashFile(file), digest, `固定入力SHA: ${name}`);
    const record = lock.inputs.find((item) => item.path === `${LUA_BUGS_SOURCE}/source/${name}`);
    assert.equal(record?.sha256, digest, `SOURCE_LOCK入力: ${name}`);
    inputs[name] = fs.readFileSync(file, 'utf8');
  }
  assert.ok(inputs['official-bugs.html'].includes(inputs['known-issues-5.5.1.html'].trim()));
  const section = walk(parse(inputs['known-issues-5.5.1.html']));
  assert.equal(section.filter((node) => node.tagName === 'li').length, 1);
  const code = section.find((node) => node.tagName === 'pre');
  assert.ok(code);
  return { inputs, lock, sourceCode: text(code).replace(/^\n/, '').replace(/\s+$/, '') };
}

export function generateSnapshot(root, renderHtml) {
  const snapshot = readSnapshot(root);
  assert.equal(typeof renderHtml, 'function');
  const body = renderHtml(snapshot.inputs['known-issues-5.5.1.html'], {
    source: 'official-bugs.html',
    output: LUA_BUGS_PAGE,
    headingShift: -1,
    localAnchors: ['5.5.1', '5.5.1-1'],
  });
  const notice = snapshot.inputs['SOFTWARE-LICENSE.txt'].trimEnd();
  const content = `---\ntitle: "Known issues in Lua 5.5.1 (2026-10-02 snapshot)"\ndescription: "The complete official Lua 5.5.1 bug report and reproducer acquired on 2026-10-02."\nlicenseSource: "lua-bugs-2026-10-02"\n---\n\n> **Libx snapshot note (2026-10-02, Asia/Tokyo):** This page preserves the official bugs list acquired at 2026-10-01T17:29:12.280720Z. For later reports, see the [current official bugs list](https://www.lua.org/bugs.html#5.5.1). The [2026-08-11 snapshot](/docs/lua/v5-5-1/en/07-migration-and-known-issues/03-known-issues/) is retained separately.\n\n${body}\n\n## Libx license annotation\n\n${LICENSE_ANNOTATION_EN}\n\nOriginal Lua software license notice ([official source](https://www.lua.org/copyright.html)):\n\n\`\`\`text\n${notice}\n\`\`\`\n`;
  return { ...snapshot, content };
}

export function checkSnapshot(root, renderHtml) {
  const generated = generateSnapshot(root, renderHtml);
  const target = path.join(root, 'apps/lua/src/content/docs/v5-5-1/en', LUA_BUGS_PAGE);
  assertNoSymlink(target);
  assert.equal(fs.readFileSync(target, 'utf8'), generated.content, '新bugs定本の再生成不一致');
  return generated;
}

export function writeSnapshot(root, renderHtml, commitOptions = {}) {
  const generated = generateSnapshot(root, renderHtml);
  const target = path.join(root, 'apps/lua/src/content/docs/v5-5-1/en', LUA_BUGS_PAGE);
  assertNoSymlink(target);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const prepared = fs.mkdtempSync(path.join(path.dirname(target), '.bugs-prepared-'));
  const file = path.join(prepared, 'snapshot.md');
  try {
    fs.writeFileSync(file, generated.content);
    commitPreparedPathsAtomically([{ preparedPath: file, targetPath: target }], commitOptions);
  } finally {
    fs.rmSync(prepared, { recursive: true, force: true });
  }
  return generated;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  import('./import-lua-5.5.1.mjs')
    .then(({ renderHtmlFragmentForTest }) => {
      const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
      assert.ok(
        process.argv.slice(2).every((arg) => arg === '--check'),
        '不正な引数'
      );
      if (process.argv.includes('--check')) checkSnapshot(root, renderHtmlFragmentForTest);
      else writeSnapshot(root, renderHtmlFragmentForTest);
      console.log('Lua新bugs取得版: 固定原資料4件・英語定本1ページの再生成一致');
    })
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}
