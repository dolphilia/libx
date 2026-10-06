---
title: "jqの起動"
order: 1
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/0/title">

<h2 id="invoking-jq">jqの起動</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/0/body">

<p>jqのフィルターはJSONデータのストリームを処理します。jqへの入力は、空白で区切られたJSON値の列として解析され、指定したフィルターへ1つずつ渡されます。フィルターの出力は、改行で区切られたJSONデータの列として標準出力に書き出されます。</p>
<p>最も単純で、最もよく使われるフィルター（jqプログラム）は <code>.</code> です。これは恒等演算子で、jq処理系への入力をそのまま出力ストリームへコピーします。jq処理系は既定で入力ストリームからJSONテキストを読み取り、出力を整形するため、<code>.</code> プログラムの主な用途は入力の検証と整形です。jqのプログラミング言語には豊富な機能があり、検証や整形以外にもはるかに多くのことができます。</p>
<p>注意：シェルの引用規則に気を配ることが大切です。一般則として、jqプログラムは常に引用符で囲むのが最善です（Unixシェルでは一重引用符を使います）。jqで特別な意味を持つ文字の多くは、シェルのメタ文字でもあるためです。たとえば、<code>jq
"foo"</code> はほとんどのUnixシェルで失敗します。これは <code>jq foo</code> と同じになり、通常は <code>foo is not
defined</code> という理由で失敗するからです。Windowsコマンドシェル（cmd.exe）では、<code>-f program-file</code> オプションの代わりにコマンド行でjqプログラムを指定する場合、プログラムを二重引用符で囲むのが最善ですが、その場合はjqプログラム内の二重引用符をバックスラッシュでエスケープする必要があります。Powershell（<code>powershell.exe</code>）またはPowershell Core（<code>pwsh</code>/<code>pwsh.exe</code>）では、jqプログラムを一重引用符で囲み、プログラム内の二重引用符をバックスラッシュでエスケープ（<code>\"</code>）してください。</p>
<ul>
<li>Unixシェル：<code>jq '.["foo"]'</code></li>
<li>Powershell：<code>jq '.[\"foo\"]'</code></li>
<li>Windowsコマンドシェル：<code>jq ".[\"foo\"]"</code></li>
</ul>
<p>注意：jqではユーザー定義関数を使えますが、すべてのjqプログラムにはトップレベルの式が必要です。</p>
<p>コマンド行オプションを使って、jqによる入出力の読み書きの方法を変更できます。</p>
<ul>
<li><code>--null-input</code> / <code>-n</code>:</li>
</ul>
<p>入力を一切読み取りません。代わりに、<code>null</code> を入力としてフィルターを1回実行します。jqを簡単な計算機として使う場合や、JSONデータを一から構築する場合に便利です。</p>
<ul>
<li><code>--raw-input</code> / <code>-R</code>:</li>
</ul>
<p>入力をJSONとして解析しません。代わりに、テキストの各行を文字列としてフィルターへ渡します。<code>--slurp</code> と組み合わせると、入力全体を1つの長い文字列としてフィルターへ渡します。</p>
<ul>
<li><code>--slurp</code> / <code>-s</code>:</li>
</ul>
<p>入力中のJSONオブジェクトごとにフィルターを実行する代わりに、入力ストリーム全体を大きな配列へ読み込み、フィルターを1回だけ実行します。</p>
<ul>
<li><code>--compact-output</code> / <code>-c</code>:</li>
</ul>
<p>jqは既定でJSON出力を整形します。このオプションを使うと、各JSONオブジェクトを1行にまとめ、よりコンパクトに出力します。</p>
<ul>
<li><code>--raw-output</code> / <code>-r</code>:</li>
</ul>
<p>このオプションを使うと、フィルターの結果が文字列の場合、引用符付きのJSON文字列に整形せず、そのまま標準出力に書き出します。jqフィルターをJSONを使わないシステムと連携させる場合に便利です。</p>
<ul>
<li><code>--raw-output0</code>:</li>
</ul>
<p><code>-r</code> と同様ですが、各出力の後に改行ではなくNULを出力します。出力する値に改行が含まれる場合に便利です。出力値にNULが含まれる場合、jqは0以外のコードで終了します。</p>
<ul>
<li><code>--join-output</code> / <code>-j</code>:</li>
</ul>
<p><code>-r</code> と同様ですが、各出力の後に改行を出力しません。</p>
<ul>
<li><code>--ascii-output</code> / <code>-a</code>:</li>
</ul>
<p>jqは通常、ASCII以外のUnicodeコードポイントをUTF-8で出力します。入力でエスケープシーケンス（"\u03bc"など）を使って指定した場合も同様です。このオプションを使うと、ASCII以外の各文字を対応するエスケープシーケンスに置き換え、ASCIIだけで出力するよう強制できます。</p>
<ul>
<li><code>--sort-keys</code> / <code>-S</code>:</li>
</ul>
<p>各オブジェクトのフィールドを、キーをソートした順序で出力します。</p>
<ul>
<li><code>--color-output</code> / <code>-C</code> と <code>--monochrome-output</code> / <code>-M</code>:</li>
</ul>
<p>jqは既定で、端末に書き出す場合にJSONを色付きで出力します。<code>-C</code> を使うと、パイプやファイルに書き出す場合でも色付きの出力を強制でき、<code>-M</code> で色を無効にできます。環境変数 <code>NO_COLOR</code> が空でない場合、jqは既定で色付きの出力を無効にしますが、<code>-C</code> で有効にできます。</p>
<p>色は環境変数 <code>JQ_COLORS</code> で設定できます（後述）。</p>
<ul>
<li><code>--tab</code>:</li>
</ul>
<p>インデントの各段階で、2つの空白の代わりにタブを使います。</p>
<ul>
<li><code>--indent n</code>:</li>
</ul>
<p>指定した数の空白（最大7個）でインデントします。</p>
<ul>
<li><code>--unbuffered</code>:</li>
</ul>
<p>JSONオブジェクトを出力するたびに、出力をフラッシュします（遅いデータソースをパイプでjqへ渡し、jqの出力をさらに別の場所へパイプで渡す場合に便利です）。</p>
<ul>
<li><code>--stream</code>:</li>
</ul>
<p>入力をストリーミング方式で解析し、パスと葉の値（スカラー、および空の配列や空のオブジェクト）からなる配列を出力します。たとえば、<code>"a"</code> は <code>[[],"a"]</code> になり、<code>[[],"a",["b"]]</code> は <code>[[0],[]]</code>、<code>[[1],"a"]</code>、<code>[[2,0],"b"]</code> になります。</p>
<p>非常に大きな入力の処理に便利です。フィルタリング、および <code>reduce</code> と <code>foreach</code> の構文と組み合わせて使うと、大きな入力を逐次的に集約できます。</p>
<ul>
<li><code>--stream-errors</code>:</li>
</ul>
<p><code>--stream</code> と同様ですが、不正なJSON入力に対して、第1要素がエラー、第2要素がパスの配列値を生成します。たとえば、<code>["a",n]</code> は <code>["Invalid literal at line 1,
  column 7",[1]]</code> を生成します。</p>
<p><code>--stream</code> を暗黙に有効にします。<code>--stream</code> を使い、<code>--stream-errors</code> を付けなかった場合、不正なJSON入力に対してエラー値は生成されません。</p>
<ul>
<li><code>--seq</code>:</li>
</ul>
<p>jqの入出力でJSONテキストを区切るために、MIMEタイプ <code>application/json-seq</code> の方式を使います。つまり、出力の各値の前にASCIIのRS（レコード区切り）文字を、各出力の後にASCIIのLF（改行）を出力します。解析に失敗した入力JSONテキストは無視されますが警告が出され、次のRSまでの後続入力はすべて破棄されます。このモードでは、<code>--seq</code> オプションを付けずに実行したjqの出力も解析できます。</p>
<ul>
<li><code>-f</code> / <code>--from-file</code>:</li>
</ul>
<p>awkの-fオプションのように、コマンド行ではなくファイルからフィルターを読み取ります。このオプションにより、フィルター引数はプログラムのソースではなくファイル名として解釈されます。</p>
<ul>
<li><code>-L directory</code> / <code>--library-path directory</code>:</li>
</ul>
<p>モジュールの検索リストの先頭に <code>directory</code> を追加します。このオプションを使うと、組込みの検索リストは使われません。後述のモジュールの節を参照してください。</p>
<ul>
<li><code>--arg name value</code>:</li>
</ul>
<p>このオプションは、事前定義された変数として値をjqプログラムへ渡します。<code>--arg foo bar</code> を指定してjqを実行すると、プログラム内で <code>$foo</code> を使え、その値は <code>"bar"</code> になります。<code>value</code> は文字列として扱われるため、<code>--arg foo 123</code> は <code>$foo</code> に <code>"123"</code> を束縛します。</p>
<p>名前付き引数は、jqプログラム内で <code>$ARGS.named</code> としても使えます。名前が有効な識別子でない場合、それにアクセスするにはこの方法しかありません。</p>
<ul>
<li><code>--argjson name JSON-text</code>:</li>
</ul>
<p>このオプションは、JSONエンコードされた値を事前定義された変数としてjqプログラムへ渡します。<code>--argjson foo 123</code> を指定してjqを実行すると、プログラム内で <code>$foo</code> を使え、その値は <code>123</code> になります。</p>
<ul>
<li><code>--slurpfile variable-name filename</code>:</li>
</ul>
<p>指定したファイル内のすべてのJSONテキストを読み取り、解析されたJSON値の配列を指定したグローバル変数へ束縛します。<code>--slurpfile foo bar</code> を指定してjqを実行すると、プログラム内で <code>$foo</code> を使えます。その値は、<code>bar</code> という名前のファイル内の各テキストに対応する要素を持つ配列です。</p>
<ul>
<li><code>--rawfile variable-name filename</code>:</li>
</ul>
<p>指定したファイルを読み取り、その内容を指定したグローバル変数へ束縛します。<code>--rawfile foo bar</code> を指定してjqを実行すると、プログラム内で <code>$foo</code> を使え、その値は <code>bar</code> という名前のファイル内のテキストを内容とする文字列になります。</p>
<ul>
<li><code>--args</code>:</li>
</ul>
<p>残りの引数は、文字列の位置引数として扱われます。jqプログラム内で <code>$ARGS.positional[]</code> として使えます。</p>
<ul>
<li><code>--jsonargs</code>:</li>
</ul>
<p>残りの引数は、JSONテキストの位置引数として扱われます。jqプログラム内で <code>$ARGS.positional[]</code> として使えます。</p>
<ul>
<li><code>--exit-status</code> / <code>-e</code>:</li>
</ul>
<p>jqの終了ステータスは、最後の出力値が <code>false</code> でも <code>null</code> でもない場合に0、最後の出力値が <code>false</code> または <code>null</code> の場合に1、有効な結果が一度も生成されなかった場合に4になります。通常、使用方法の問題またはシステムエラーがあった場合には2、jqプログラムのコンパイルエラーがあった場合には3、jqプログラムが実行された場合には0で終了します。</p>
<p>終了ステータスを設定する別の方法として、組込み関数 <code>halt_error</code> もあります。</p>
<ul>
<li><code>--binary</code> / <code>-b</code>:</li>
</ul>
<p>WSL、MSYS2、Cygwinを使うWindowsユーザーは、ネイティブのjq.exeを使う場合、このオプションを指定してください。指定しないと、jqは改行（LF）を復帰と改行の組（CRLF）へ変換します。</p>
<ul>
<li><code>--version</code> / <code>-V</code>:</li>
</ul>
<p>jqのバージョンを出力し、0で終了します。</p>
<ul>
<li><code>--build-configuration</code>:</li>
</ul>
<p>jqのビルド設定を出力し、0で終了します。この出力には、サポート対象として保証された形式や構造がなく、将来のリリースで予告なく変わる可能性があります。</p>
<ul>
<li><code>--help</code> / <code>-h</code>:</li>
</ul>
<p>jqのヘルプを出力し、0で終了します。</p>
<ul>
<li><code>--</code>:</li>
</ul>
<p>引数の処理を終了します。残りの引数はオプションとして解釈されません。</p>
<ul>
<li><code>--run-tests [filename]</code>:</li>
</ul>
<p>指定したファイルまたは標準入力内のテストを実行します。指定するオプションの最後に置く必要があり、それより前のオプションすべてに従うわけではありません。入力は、コメント行、空行、プログラム行と、それに続く1行の入力、期待する出力の数だけの出力行（出力1つにつき1行）、最後の空行で構成されます。コンパイル失敗のテストは、<code>%%FAIL</code> だけを含む行、コンパイルするプログラムを含む行、実際のエラーと比較するエラーメッセージを含む行の順で始まります。</p>
<p>このオプションは後方互換性を保たずに変更される可能性があるので、注意してください。</p>

</div>

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
