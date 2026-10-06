import assert from 'node:assert/strict';
import test from 'node:test';
import {
  collapseDefinitionItems,
  removeGeneratedSourceNotice,
} from '../../scripts/importers/normalize-lua-translation-format.mjs';

test('日本語の定義的リスト項目を訳文を変えず一行へ正規化する', () => {
  const source = `- **<a id="pdf-LUA_OPADD"></a>\`LUA_OPADD\`**
  
  ：加算（
  
  \`+\`
  
  ）を実行します。
- **<a id="pdf-LUA_OPSUB"></a>\`LUA_OPSUB\`**
  
  ：減算（
  
  \`-\`
  
  ）を実行します。`;

  assert.equal(
    collapseDefinitionItems(source),
    `- **<a id="pdf-LUA_OPADD"></a>\`LUA_OPADD\`**：加算（\`+\`）を実行します。
- **<a id="pdf-LUA_OPSUB"></a>\`LUA_OPSUB\`**：減算（\`-\`）を実行します。`
  );
});

test('通常の複数段落リストとネストしたリストは変更しない', () => {
  const source = `- **重要**

  最初の段落です。

  - ネストした項目`;

  assert.equal(collapseDefinitionItems(source), source);
});

test('Frontmatter直後にある既知のLua出典通知だけを除去する', () => {
  const source = `---\ntitle: "例"\n---\n\n> このページは、[Lua 5.5.1公式ドキュメント](https://www.lua.org/manual/5.5/manual.html#1)をMarkdownへ変更したものです。libx向けに整形しています。\n\n# 本文\n\n> 通常の引用\n`;

  assert.equal(
    removeGeneratedSourceNotice(source),
    `---\ntitle: "例"\n---\n\n# 本文\n\n> 通常の引用\n`
  );
  assert.equal(removeGeneratedSourceNotice('> 通常の引用\n'), '> 通常の引用\n');
});
