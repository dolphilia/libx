---
title: "モジュール"
order: 13
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/12/title">

<h2 id="modules">モジュール</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/body">

<p>jqにはライブラリ／モジュールの仕組みがあります。モジュールは、ファイル名が <code>.jq</code> で終わるファイルです。</p>
<p>プログラムがインポートするモジュールは、既定の検索パスで探します。以下を参照してください。<code>import</code> と <code>include</code> の指示では、インポートする側がこのパスを変更できます。</p>
<p>検索パス内のパスには、さまざまな置換を適用します。</p>
<p><code>~/</code> で始まるパスでは、<code>~</code> をユーザーのホームディレクトリで置き換えます。</p>
<p><code>$ORIGIN/</code> で始まるパスでは、<code>$ORIGIN</code> をjq実行ファイルがあるディレクトリで置き換えます。</p>
<p><code>./</code> で始まるパス、または <code>.</code> というパスでは、<code>.</code> を、そのファイルを取り込む側のファイルのパスで置き換えます。コマンドラインで指定した最上位のプログラムの場合は、現在のディレクトリを使います。</p>
<p>インポートの指示では、検索パスを任意で指定できます。その後ろに既定の検索パスを追加します。</p>
<p>既定の検索パスは、コマンドラインオプション <code>-L</code> に指定した検索パスです。それがなければ、<code>["~/.jq", "$ORIGIN/../lib/jq",
"$ORIGIN/../lib"]</code> です。</p>
<p>nullまたは空文字列のパス要素は、検索パスの処理を終了させます。</p>
<p>相対パス <code>foo/bar</code> の依存モジュールは、指定した検索パス内の <code>foo/bar.jq</code> と <code>foo/bar/bar.jq</code> で探します。これは、モジュールをバージョン管理ファイルやREADMEファイルなどと一緒にディレクトリへ置けるようにしつつ、単一ファイルのモジュールも使えるようにするためです。</p>
<p>曖昧さを避けるため、同じ名前のパス要素を連続させることは認められていません。たとえば、<code>foo/foo</code> です。</p>
<p>例として、<code>-L$HOME/.jq</code> を指定すると、モジュール <code>foo</code> は、<code>$HOME/.jq/foo.jq</code> と <code>$HOME/.jq/foo/foo.jq</code> に見つかります。</p>
<p>ユーザーのホームディレクトリに <code>.jq</code> があり、ディレクトリではなくファイルである場合、メインプログラムへ自動的に読み込まれます。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/0/title">

<h3 id="import-relativepathstring-as-name"><code>import RelativePathString as NAME [&lt;metadata&gt;];</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/0/body">

<p>検索パス内のディレクトリからの相対パスとして、指定したパスで見つかったモジュールをインポートします。相対パス文字列には <code>.jq</code> 接尾辞を追加します。モジュールの記号には、<code>NAME::</code> という接頭辞が付きます。</p>
<p>任意のメタデータは、定数のjq式でなければなりません。<code>homepage</code> などのキーを持つオブジェクトにするべきです。現時点で、jqが使うのは、メタデータの <code>search</code> のキーと値だけです。メタデータは、組込み関数 <code>modulemeta</code> によって利用者にも提供されます。</p>
<p>メタデータに <code>search</code> キーがある場合、その値は文字列か、文字列の配列であるべきです。これは、最上位の検索パスの先頭に追加する検索パスです。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/1/title">

<h3 id="include-relativepathstring"><code>include RelativePathString [&lt;metadata&gt;];</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/1/body">

<p>検索パス内のディレクトリからの相対パスとして、指定したパスで見つかったモジュールを、その場所へ取り込むかのようにインポートします。相対パス文字列には <code>.jq</code> 接尾辞を追加します。モジュールの記号は、モジュールの内容を直接取り込んだかのように、呼出し側の名前空間へインポートされます。</p>
<p>任意のメタデータは、定数のjq式でなければなりません。<code>homepage</code> などのキーを持つオブジェクトにするべきです。現時点で、jqが使うのは、メタデータの <code>search</code> のキーと値だけです。メタデータは、組込み関数 <code>modulemeta</code> によって利用者にも提供されます。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/2/title">

<h3 id="import-relativepathstring-as-$name"><code>import RelativePathString as $NAME [&lt;metadata&gt;];</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/2/body">

<p>検索パス内のディレクトリからの相対パスとして、指定したパスで見つかったJSONファイルをインポートします。相対パス文字列には <code>.json</code> 接尾辞を追加します。ファイルのデータは、<code>$NAME::NAME</code> として使えます。</p>
<p>任意のメタデータは、定数のjq式でなければなりません。<code>homepage</code> などのキーを持つオブジェクトにするべきです。現時点で、jqが使うのは、メタデータの <code>search</code> のキーと値だけです。メタデータは、組込み関数 <code>modulemeta</code> によって利用者にも提供されます。</p>
<p>メタデータに <code>search</code> キーがある場合、その値は文字列か、文字列の配列であるべきです。これは、最上位の検索パスの先頭に追加する検索パスです。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/3/title">

<h3 id="module-&lt;metadata&gt;"><code>module &lt;metadata&gt;;</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/3/body">

<p>この指示は完全に任意です。正しく動作するためには必要ありません。組込み関数 <code>modulemeta</code> で読み取れるメタデータを提供することだけが目的です。</p>
<p>メタデータは、定数のjq式でなければなりません。<code>homepage</code> のようなキーを持つオブジェクトにするべきです。現時点で、jqはこのメタデータを使いませんが、組込み関数 <code>modulemeta</code> によって利用者に提供されます。</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/4/title">

<h3 id="modulemeta"><code>modulemeta</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/12/entries/4/body">

<p>モジュール名を入力として受け取り、モジュールのメタデータをオブジェクトとして出力します。モジュールがインポートするものは、メタデータも含めて <code>deps</code> キーの配列の値になり、モジュールが定義する関数は <code>defs</code> キーの配列の値になります。</p>
<p>プログラムは、この関数でモジュールのメタデータを問い合わせ、たとえば、不足している依存モジュールの検索、ダウンロード、インストールに使えます。</p>

</div>

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
