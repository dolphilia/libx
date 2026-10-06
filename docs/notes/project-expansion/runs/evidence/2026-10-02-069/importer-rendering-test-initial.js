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

test('Lua見出し直後のpで囲まれていない説明をインライン要素で分割しない', () => {
  const source = `<p><hr><h3><a name="pdf-dofile"><code>dofile ([filename])</code></a></h3>
Opens the named file and executes its content as a Lua chunk.
When called without arguments, <code>dofile</code> executes the content of
standard input (<code>stdin</code>).
<p>Errors propagate to the caller.
`;

  assert.equal(
    renderHtmlFragmentForTest(source),
    '---\n\n### <a id="pdf-dofile"></a>`dofile ([filename])`\n\n' +
      'Opens the named file and executes its content as a Lua chunk. When called without arguments, `dofile` executes the content of standard input (`stdin`).\n\n' +
      'Errors propagate to the caller.'
  );
});

test('Lua説明のインライン要素を結合しても明示段落とコード境界を保つ', () => {
  const source =
    '<h3>Values</h3>First <code>x</code> and <b>nil</b>.' +
    '<p>Second <code>y</code>.</p><pre>print(x)\nprint(y)</pre>' +
    'After <code>z</code>.<hr><h3>Next</h3>Last <code>w</code>.';

  assert.equal(
    renderHtmlFragmentForTest(source),
    '### Values\n\nFirst `x` and **nil**.\n\nSecond `y`.\n\n' +
      '```lua\nprint(x)\nprint(y)\n```\n\nAfter `z`.\n\n---\n\n### Next\n\nLast `w`.'
  );
});
