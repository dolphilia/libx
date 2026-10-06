---
title: "manページの導入と後書き"
order: 15
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="manpage_intro">

<h1>jq(1) -- コマンドラインJSONプロセッサー</h1>
<h2 id="synopsis">書式</h2>
<p><code>jq</code> [&lt;options&gt;...] &lt;filter&gt; [&lt;files&gt;...]</p>
<p><code>jq</code> は、JSON文書の選択、反復、集約など、さまざまな方法でJSONを変換できます。たとえば、コマンド <code>jq 'map(.price) | add'</code> を実行すると、JSONオブジェクトの配列を入力として受け取り、その"price"フィールドの合計を返します。</p>
<p><code>jq</code> はテキスト入力も受け取れますが、既定では、<code>jq</code> は <code>stdin</code> からJSONの値（数値やその他のリテラルも含みます）のストリームを読み込みます。空白が必要なのは、1と2やtrueとfalseのような値を区切る場合だけです。1つ以上の&lt;files&gt;を指定できます。その場合、<code>jq</code> は代わりに、それらのファイルから入力を読み込みます。</p>
<p>&lt;options&gt;は、[INVOKING JQ]の節で説明されています。主に入力と出力の書式に関するものです。&lt;filter&gt;はjq言語で書き、入力ファイルまたは文書をどう変換するかを指定します。</p>
<h2 id="filters">フィルター</h2>

</div>

<div class="jq-upstream-field" data-source-key="manpage_epilogue">

<h2 id="bugs">バグ</h2>
<p>おそらく存在します。次の場所で報告または議論してください。</p>
<pre><code>https://github.com/jqlang/jq/issues&#10;</code></pre>
<h2 id="author">著者</h2>
<p>Stephen Dolan <code>&lt;mu@netsoc.tcd.ie&gt;</code></p>

</div>

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
