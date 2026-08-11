import assert from 'node:assert/strict';
import test from 'node:test';
import { renderHtmlFragmentForTest, renderMan } from '../../scripts/importers/import-lua-5.5.1.mjs';

test('Lua HTMLのインライン要素を一つの読みやすいリスト項目に保つ', () => {
  const source =
    '<ul><li><b><a name="pdf-LUA_OPADD"><code>LUA_OPADD</code></a></b>: performs addition (<code>+</code>)</li></ul>';

  assert.equal(
    renderHtmlFragmentForTest(source),
    '- **<a id="pdf-LUA_OPADD"></a>`LUA_OPADD`**: performs addition (`+`)'
  );
});

test('Lua HTMLの定義リストを用語と説明が対応する項目へ変換する', () => {
  const source = '<dl><dt><code>LUA_PATH</code></dt><dd>module search path</dd></dl>';

  assert.equal(renderHtmlFragmentForTest(source), '- **`LUA_PATH`**: module search path');
});

test('Lua manのTPマクロを用語と説明が対応する項目へ変換する', () => {
  const source = `.TH LUA 1
.SH OPTIONS
.TP
.BI \\-e " stat"
execute statement
.IR stat .
.TP
.B \\--
stop handling options.
`;

  assert.equal(
    renderMan(source, { title: 'lua command' }),
    `# lua command

## OPTIONS

- **-e** *stat*: execute statement *stat*.

- **--**: stop handling options.`
  );
});
