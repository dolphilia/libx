from pathlib import Path
from bs4 import BeautifulSoup
import json,re,ast
N=Path('/Users/dolphilia/github/libx/docs/notes/document-import/mdbook/v0-5-4');W=Path('/private/tmp/libx-mdbook-formal-843/apps/mdbook');M=json.loads((N/'CONTENT_MAP.json').read_text())
P={
'10-continuous-integration.md':[
'<a href="https://docs.github.com/en/actions">GitHub Actions</a>や<a href="https://docs.gitlab.com/ee/ci/">GitLab CI/CD</a>など、さまざまなサービスを使って、本を自動でテスト・デプロイできます。',
'以下では、mdBookを実行するためのサービス設定について、一般的な指針を示します。具体的な手順は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Automated-Deployment">Automated Deployment</a>ページを参照してください。',
'mdBookのインストールには、いくつかの方法があります。必要なことや好みに応じて選んでください。',
'おそらく最も簡単なのは、<a href="https://github.com/rust-lang/mdBook/releases">GitHub Releasesページ</a>のビルド済みバイナリーを使う方法です。広く使われているCLIツール<code>curl</code>で実行ファイルをダウンロードする、次のような方法があります。',
'この方法について、考慮する点を示します。',
'ソースからビルドするには、Rustをインストールする必要があります。Rustが事前にインストールされているサービスもありますが、そうでなければ、インストールする工程を追加してください。',
'Rustをインストールすると、<code>cargo install</code>でmdBookをビルド・インストールできます。mdBookの<strong>互換性を壊さない</strong>最新バージョンを取得するには、SemVerのバージョン指定を推奨します。例を示します。',
'推奨するいくつかのオプションを含んでいます。',
'mdBookのビルドには少し時間がかかる場合があるため、キャッシュの方法を調べるとよいでしょう。',
'変更をpushしたりプルリクエストを作成したりするたびに、<a href="/docs/mdbook/v0-5-4/en/01-guide/08-cli-test/"><code>mdbook test</code></a>でテストを実行するとよいでしょう。本に含まれるRustのコード例を検証できます。',
'Rustをインストールする必要があります。Rustが事前にインストールされているサービスもありますが、そうでなければ、インストールする工程を追加してください。',
'適切なバージョンのRustがインストールされていることを確認した後は、本のディレクトリで<code>mdbook test</code>を実行するだけです。',
'リンク切れを調べる<a href="https://github.com/marxin/mdbook-linkcheck2#continuous-integration">mdbook-linkcheck2</a>など、ほかの種類のテストも検討するとよいでしょう。独自のスタイル検査、スペル検査、そのほかのテストも、CIで実行すると便利です。',
'本を自動でデプロイしたい場合もあるでしょう。変更をpushするたびに行う方法もあれば、特定のリリースにタグを付けたときだけ行う方法もあります。',
'利用するウェブサービスへ変更を送る、具体的な方法も理解する必要があります。たとえば、<a href="https://docs.github.com/en/pages">GitHub Pages</a>では、特定のGitブランチへ出力をコミットするだけです。ほかのサービスでは、SSHなどでリモートサーバーへ接続する必要がある場合もあります。',
'基本的には、<code>mdbook build</code>を実行して出力を生成し、<code>book</code>ディレクトリにあるファイルを適切な場所へ転送します。',
'その後、ウェブサービスのキャッシュを無効にする必要があるか、検討するとよいでしょう。',
'さまざまなサービスの例は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Automated-Deployment">Automated Deployment</a>ページを参照してください。',
'mdBookは、リンク切れに使う404ページを自動で生成します。既定では、本のルートに<code>404.html</code>というファイルを出力します。<a href="https://docs.github.com/en/pages">GitHub Pages</a>などのサービスでは、リンク切れにこのページを自動で使います。ほかのサービスでも、ウェブサーバーがこのページを使うよう設定するとよいでしょう。読者が本へ戻るためのナビゲーションを提供できます。',
'本をドメインのルート以外へデプロイする場合、404ページが正しく動くように<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.site-url</code></a>を設定してください。CSSなどの静的ファイルを正しく読み込むには、本の公開場所を知る必要があります。たとえば、このガイドは<a href="https://rust-lang.github.io/mdBook/">https://rust-lang.github.io/mdBook/</a>へ公開され、<code>site-url</code>を次のように設定しています。',
'本に<code>src/404.md</code>というファイルを作ると、404ページの見た目を変更できます。別のファイル名を使う場合は、<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.input-404</code></a>へ指定できます。'],
'11-for_developers-index.md':[
'<code>mdbook</code>は主にコマンドラインツールとして使われますが、内部のライブラリーを直接取り込み、本を管理するために使うこともできます。また、柔軟なプラグインの仕組みがあるため、本を分析したり別の形式へ出力したりする必要がある場合は、独自のツールや、本を処理するもの（通常は<em>バックエンド</em>と呼びます）を作れます。',
'<em>開発者向け</em>の章では、<code>mdbook</code>の高度な使い方を説明します。',
'開発者が本のビルド処理へ介入する、主な方法は次の2つです。',
'本のプロジェクトを表示形式へ変換する処理は、いくつかの工程を経ます。',
'<code>mdbook</code>バイナリーは、内部のmdBookクレートを包み、その機能をコマンドラインのプログラムとして提供するものです。プログラムからmdBookを操作するには、[<code>mdbook-driver</code>]クレートを使えます。独自の機能を追加したり、ビルド処理を調整したりできます。',
'<code>mdbook-driver</code>クレートの使い方を知るには、<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/">API文書</a>を見るのが最も簡単です。最上位の文書では、<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/struct.MDBook.html"><code>MDBook</code></a>型で本を読み込み、ビルドする方法を説明しています。<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/config/index.html">config</a>モジュールでは、設定システムについて詳しく説明しています。'],
'12-for_developers-backends.md':[
'「バックエンド」は、本の出力を生成する際に<code>mdbook</code>が呼び出すプログラムです。本と設定情報をJSONで表したデータが、<code>stdin</code>を通じて渡されます。バックエンドは、この情報を受け取ると、任意の処理を行えます。',
'バックエンドの使い方について、詳しくは<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/">レンダラーの設定</a>を参照してください。',
'コミュニティは、いくつかのバックエンドを開発しています。利用できるバックエンドの一覧は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a>ページを参照してください。',
'このページでは、単語数を数える簡単なプログラムを例に、独自の代替バックエンドを作る手順を説明します。Rustで書きますが、PythonやRubyなどを使っても構いません。',
'最初に、バイナリーのプログラムを新しく作り、<code>mdbook-renderer</code>を依存関係へ追加します。',
'<code>mdbook-wordcount</code>プラグインが呼び出されると、<code>mdbook</code>はプラグインの<code>stdin</code>へ、JSON形式の<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html"><code>RenderContext</code></a>を送ります。読み込みに便利なコンストラクター<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html#method.from_json"><code>RenderContext::from_json()</code></a>で、<code>RenderContext</code>を読み込めます。',
'バックエンドが本を読み込むために必要な定型コードは、これだけです。',
'<strong>注：</strong><code>RenderContext</code>には<code>version</code>フィールドがあります。これによって、バックエンドは呼び出し元の<code>mdbook</code>のバージョンと互換性があるかを判断できます。この<code>version</code>は、<code>mdbook</code>の<code>Cargo.toml</code>にある、対応するフィールドから直接取得されます。',
'バックエンドでは、<a href="https://crates.io/crates/semver"><code>semver</code></a>クレートでこのフィールドを確認し、互換性に問題がありそうなら警告を出すことを推奨します。',
'バックエンドに本のコピーを取り込めたので、各章の単語数を数えましょう。',
'<code>RenderContext</code>は<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/book/struct.Book.html"><code>Book</code></a>フィールド（<code>book</code>）を持ちます。<code>Book</code>には、本のすべての項目を順にたどる<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/book/struct.Book.html#method.iter"><code>Book::iter()</code></a>メソッドがあるため、この工程も最初と同じくらい簡単です。',
'基本部分が動くようになったので、実際に使ってみましょう。まず、プログラムをインストールします。',
'次に、単語を数えたい本のディレクトリへ<code>cd</code>で移動し、<code>book.toml</code>ファイルを更新します。',
'本をメモリーへ読み込む際、<code>mdbook</code>は<code>book.toml</code>のすべての<code>output.*</code>テーブルを調べ、使うバックエンドを判断します。何も指定していなければ、既定のHTMLレンダラーを使います。',
'つまり、独自のバックエンドを追加したい場合は、HTMLバックエンドも追加する必要があります。そのテーブルの内容は、空のままでも構いません。',
'あとは通常どおり本をビルドすれば、すべて<em>そのまま動く</em>はずです。',
'<code>wordcount</code>バックエンドの完全な名前やパスを指定する必要がなかったのは、<code>mdbook</code>が命名規則からプログラム名を<em>推測</em>するためです。<code>foo</code>バックエンドの実行ファイルは通常<code>mdbook-foo</code>という名前で、<code>book.toml</code>の<code>[output.foo]</code>に対応します。コマンドライン引数が必要だったり、インタープリターで実行するスクリプトだったりする場合など、<code>mdbook</code>へ呼び出すコマンドを明示するには、<code>command</code>フィールドを使えます。',
'特定の章（生成された文章やコードなど）の単語数を数えたくない場合を考えます。標準的な方法は、通常の<code>book.toml</code>設定ファイルの<code>[output.foo]</code>テーブルへ項目を追加することです。',
'<code>Config</code>は、おおむね入れ子のハッシュマップとして扱えます。<code>get()</code>などのメソッドで設定内容へアクセスできます。便利な<code>get_deserialized()</code>メソッドは、値を取得して任意の型<code>T</code>へ自動でデシリアライズします。',
'実装するために、独自のシリアライズ可能な<code>WordcountConfig</code>構造体を作り、このバックエンドのすべての設定をまとめます。',
'まず、<code>Cargo.toml</code>へ<code>serde</code>と<code>serde_derive</code>を追加します。','続いて、設定の構造体を作れます。',
'あとは、<code>RenderContext</code>から<code>WordcountConfig</code>をデシリアライズし、除外対象の章を飛ばすためのチェックを追加します。',
'本のビルド時に、単語数をターミナルへ表示するのも便利ですが、ファイルへ出力するとよい場合もあります。<code>mdbook</code>は、<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html"><code>RenderContext</code></a>の<code>destination</code>フィールドで、生成した出力を置く場所をバックエンドへ伝えます。',
'<strong>注：</strong>出力先ディレクトリが存在することや、空であることは保証されません（バックエンドがキャッシュを使えるように、<code>mdbook</code>は以前の内容を残す場合があります）。そのため、<code>fs::create_dir_all()</code>で作成しておくとよいでしょう。',
'出力先ディレクトリがすでに存在していても、空だとは考えないでください。バックエンドが前回の結果をキャッシュできるように、<code>mdbook</code>は古い内容を残す場合があります。',
'本の処理中には、エラーが発生する可能性があります（ここまで書いた多くの<code>unwrap()</code>も、その例です）。<code>mdbook</code>は、0以外の終了コードを、出力生成の失敗として解釈します。',
'たとえば、すべての章の単語数が<em>偶数</em>であることを確認し、奇数ならエラーにする場合は、次のように書けます。',
'バックエンドを再インストールし、本をビルドすると、次のようになります。',
'気付いたかもしれませんが、プラグインの子プロセスからの出力は、すぐにユーザーへ渡されます。プラグインは「沈黙の原則」に従い、生成エラーや警告など、必要な場合だけ出力することを推奨します。',
'すべての環境変数はバックエンドへ引き継がれるため、通常どおり<code>MDBOOK_LOG</code>でログの詳しさを制御できます。',
'説明用の例ではありますが、<code>mdbook</code>の代替バックエンドを作る方法を示せたと思います。不足している点があれば、ユーザーガイドを改善できるように<a href="https://github.com/rust-lang/mdBook/issues">Issueトラッカー</a>へ投稿してください。',
'章の冒頭で紹介した既存のバックエンドは、実際の作り方のよい例になります。ソースコードを読んだり、質問したりしてみてください。'],
'13-for_developers-preprocessors.md':[
'<em>プリプロセッサー</em>は、本の読み込み直後、出力生成の前に実行されるコードです。本を更新・変更できます。たとえば、次のように使えます。',
'プリプロセッサーの使い方について、詳しくは<a href="/docs/mdbook/v0-5-4/en/01-guide/18-format-configuration-preprocessors/">プリプロセッサーの設定</a>を参照してください。',
'MDBookが第三者のプラグインを見つける仕組みは簡単です。<code>book.toml</code>へ新しいテーブル（<code>foo</code>プリプロセッサーなら<code>[preprocessor.foo]</code>）を追加すると、<code>mdbook</code>はビルド処理の中で<code>mdbook-foo</code>プログラムの呼び出しを試みます。',
'プリプロセッサーを定義し、ビルド処理を開始すると、mdBookは<code>preprocessor.foo.command</code>キーで定義したコマンドを2回実行します。1回目は、指定したレンダラーに対応するかを確認します。プロセスへ2つの引数を渡します。最初は文字列<code>supports</code>、次はレンダラーの名前です。プリプロセッサーは、対応する場合は終了コード0、対応しない場合は0以外で終了する必要があります。',
'レンダラーに対応する場合、mdbookは2回目を実行し、stdinへJSONデータを渡します。JSONは<code>[context, book]</code>という配列です。<code>context</code>はシリアライズした<a href="https://docs.rs/mdbook-preprocessor/latest/mdbook_preprocessor/struct.PreprocessorContext.html"><code>PreprocessorContext</code></a>オブジェクト、<code>book</code>は本の内容を含む<a href="https://docs.rs/mdbook-preprocessor/latest/mdbook_preprocessor/book/struct.Book.html"><code>Book</code></a>オブジェクトです。',
'プリプロセッサーは、任意の変更を加えた<a href="https://docs.rs/mdbook-preprocessor/latest/mdbook_preprocessor/book/struct.Book.html"><code>Book</code></a>オブジェクトを、JSON形式でstdoutへ返す必要があります。',
'最も簡単な始め方は、独自の<code>Preprocessor</code>トレイト実装を作り（たとえば<code>lib.rs</code>へ）、入力を適切な<code>Preprocessor</code>メソッドへ振り分ける、外側の実行ファイルを作る方法です。<code>examples/</code>ディレクトリには、ほかのプリプロセッサーへ簡単に応用できる<a href="https://github.com/rust-lang/mdBook/blob/master/examples/nop-preprocessor.rs">何もしないプリプロセッサーの例</a>があります。',
'<code>mdbook-preprocessor</code>をライブラリーとして取り込むと、本を扱う既存の仕組みをプリプロセッサーから使えます。',
'たとえば、独自プリプロセッサーでは、<a href="https://docs.rs/mdbook-preprocessor/latest/mdbook_preprocessor/fn.parse_input.html"><code>parse_input()</code></a>関数で、<code>stdin</code>へ渡されたJSONをデシリアライズできます。続いて、<a href="https://docs.rs/mdbook-preprocessor/latest/mdbook_preprocessor/book/struct.Book.html#method.for_each_mut"><code>Book::for_each_mut()</code></a>で<code>Book</code>の各章をその場で変更し、<code>serde_json</code>クレートで<code>stdout</code>へ書き出せます。',
'章には、再帰的に順にたどって直接アクセスする方法と、便利な<code>Book::for_each_mut()</code>メソッドを使う方法があります。',
'<code>chapter.content</code>は、Markdownを含む文字列にすぎません。正規表現や手作業の検索・置換でも処理できますが、コンピューターで扱いやすい形式へ変換するとよいでしょう。<a href="https://docs.rs/mdbook-markdown/latest/mdbook_markdown/"><code>mdbook-markdown</code></a>クレートは、mdBookがMarkdownの解析に使う<a href="https://crates.io/crates/pulldown-cmark"><code>pulldown-cmark</code></a>クレートを公開しています。<a href="https://crates.io/crates/pulldown-cmark-to-cmark"><code>pulldown-cmark-to-cmark</code></a>クレートで、イベントをMarkdownのテキストへ戻せます。',
'次のコードブロックは、文書を意図せず壊さずに、Markdownの強調をすべて取り除く方法を示します。',
'詳しくは<a href="https://github.com/rust-lang/mdBook/tree/master/examples/remove-emphasis/">例の完全なソース</a>を参照してください。',
'mdBookはstdinとstdoutでプリプロセッサーと通信するため、Rust以外の言語でも簡単に実装できます。次のコードは、最初の章の内容を変更する、Pythonによる簡単なプリプロセッサーの実装を示します。上で示した設定に従い、<code>preprocessor.foo.command</code>がPythonスクリプトを指すものとします。'],
'22-format-mdbook.md':[
'mdBookには、行の先頭へ特定の接頭辞を付けて、コード行を非表示にする機能があります。',
'Rustでは、<a href="https://doc.rust-lang.org/stable/rustdoc/write-documentation/documentation-tests.html#hiding-portions-of-the-example">Rustdocと同様に</a>、行の先頭へ<code># </code>（<code>#</code>の後に空白）を付けると非表示にできます。この接頭辞は<code>##</code>でエスケープできます。文字列<code># </code>で始まる行を、そのまま表示したい場合に使います（詳しくは<a href="https://doc.rust-lang.org/stable/rustdoc/write-documentation/documentation-tests.html#hiding-portions-of-the-example">Rustdocの文書</a>を参照してください）。',
'次のように表示されます。',
'コードブロックをタップしたり、マウスを重ねたりすると、非表示の行の表示を切り替える、目のアイコン（[SVG0]）が現れます。',
'既定では、<code>rust</code>と注釈を付けたコード例だけで使えます。ほかの言語では、<code>book.toml</code>へ言語名と接頭辞の文字を指定し、コード行を非表示にする独自の接頭辞を定義できます。',
'指定した接頭辞で始まる行が非表示になります。上のPythonの接頭辞を使うと、次のコードは、','次のように表示されます。',
'個々のコードで別の接頭辞を指定して、上書きできます。次の例は、上と同じ結果になります。',
'Rustのコードブロックには、コードを実行して結果を直下へ表示する、再生ボタン（[SVG0]）が自動で付きます。コードを<a href="https://play.rust-lang.org/">Rust Playground</a>へ送る仕組みです。',
'<code>main</code>関数がない場合、コードは自動でその中へ包まれます。',
'コードブロックの再生ボタンを無効にしたい場合は、次のように<code>noplayground</code>を指定できます。',
'本のすべてのコードブロックで再生ボタンを無効にするには、次の設定を<code>book.toml</code>へ書けます。',
'Rustのコードブロックでは、言語名の直後に、カンマ、空白、タブで区切って属性を追加できます。例を示します。',
'これらの属性は、<a href="/docs/mdbook/v0-5-4/en/01-guide/08-cli-test/"><code>mdbook test</code></a>でRustの例をテストする際に特に重要です。<a href="https://doc.rust-lang.org/rustdoc/documentation-tests.html#attributes">rustdocの属性</a>と同じ属性を使い、いくつか追加されています。',
'次の構文で、ファイルを本へ取り込めます。','ファイルのパスは、現在のソースファイルからの相対パスで指定します。',
'mdBookは、取り込んだファイルをMarkdownとして解釈します。includeコマンドは、コードや例を挿入するためによく使われるため、解釈せずにファイルの内容を表示するには、通常、コマンドを<code>```</code>で囲みます。',
'例に必要な行など、ファイルの一部だけが必要な場合があります。部分的な取り込みには、4つの方法があります。',
'最初のコマンドは、<code>file.rs</code>の2行目だけを取り込みます。2番目は10行目までを取り込み、11行目から末尾までは除きます。3番目は2行目以降を取り込み、1行目を除きます。最後は<code>file.rs</code>の2〜10行目を取り込みます。',
'取り込むファイルを変更したときに本が壊れないように、行番号の代わりにアンカーを使って、特定の節を取り込むこともできます。アンカーは、対応する2行の組です。開始行は正規表現<code>ANCHOR:\s*&#91;\w_-&#93;+</code>、終了行は<code>ANCHOR_END:\s*&#91;\w_-&#93;+</code>に一致する必要があります。どのような形式のコメント行にも、アンカーを置けます。',
'取り込むファイルとして、次の例を考えます。','本の中では、次のように書くだけです。','取り込むアンカー内で、アンカーのパターンを含む行は無視されます。',
'<code>rustdoc_include</code>ヘルパーは、完全な例を含む外部のRustファイルからコードを取り込みます。ただし、<code>include</code>と同じように行番号やアンカーを指定し、最初はその部分の行だけを表示します。',
'行番号の範囲やアンカーの間にない行も取り込まれますが、先頭に<code>#</code>を付けます。読者はコードを展開して完全な例を見ることができ、Rustdocは<code>mdbook test</code>の実行時に完全な例を使います。',
'たとえば、次のRustプログラムを含む<code>file.rs</code>というファイルを考えます。','次の構文で、最初は2行目だけを表示するコードを取り込めます。',
'手作業でコードを挿入し、<code>#</code>を使って2行目以外を非表示にした場合と、同じ結果になります。',
'つまり、次のように表示されます（残りのファイルを見るには「展開」アイコンをクリックします）。',
'次の構文で、実行可能なRustファイルを本へ挿入できます。','Rustファイルのパスは、現在のソースファイルからの相対パスで指定します。',
'再生ボタンをクリックすると、コードが<a href="https://play.rust-lang.org/">Rust Playground</a>へ送られ、コンパイル・実行されます。結果は返送され、コードの直下へ表示されます。',
'生成したコードの表示例です。',
'ファイル名の後に渡した値は、コードブロックの属性として追加されます。たとえば、<code>{{#playground example.rs editable}}</code>は、次のようなコードブロックを生成します。',
'<code>editable</code>属性は、<a href="#rust-code-block-attributes">Rustのコードブロック属性</a>で説明したとおり、<a href="/docs/mdbook/v0-5-4/en/01-guide/25-format-theme-editor/">エディター</a>を有効にします。',
'章の先頭近くに<code>{{#title ...}}</code>を置くと、目次（サイドバー）の項目とは異なる&lt;title&gt;を指定できます。',
'これらのクラスは、インラインHTMLで画像を左右に寄せるために、既定で用意されています。',
'<code>hidden</code>クラスを付けたHTMLタグは表示されません。',
'mdBookには、<a href="https://fontawesome.com">Font Awesome Free</a>バージョン6の、MITライセンスのSVGファイルのコピーが含まれます。<code>&lt;i&gt;</code>構文を模倣し、結果をインラインSVGへ変換します。regular、solid、brandsのアイコンだけを含み、lightなどの有料機能は含みません。',
'たとえば、次のHTML構文に対して、','次のように表示されます：[SVG0]',
'利用できるアイコンは、<a href="https://fontawesome.com/v6/search">無料のアイコン集合</a>を参照してください。'],
'31-misc-contributors.md':['mdBookの改善に協力した貢献者の一覧です。皆さんに大きな感謝を！','この一覧に自分が載っていないと思った場合は、プルリクエストで追加してください。']}
L={
'10-continuous-integration.md':[
'比較的速く、必ずしもキャッシュへの対応は必要ありません。','Rustをインストールする必要がありません。',
'特定のURLを指定するため、新しい版を取得するには、スクリプトを手で更新する必要があります。特定の版へ固定したい場合は、利点にもなります。一方、新しい版が公開されたら、自動で取得したいユーザーもいます。','GitHub CDNが利用できることに依存します。',
'<code>--no-default-features</code> — CIでは通常不要な、<code>mdbook serve</code>用のHTTPサーバーなどの機能を無効にします。ビルド時間を大幅に短くできます。',
'<code>--features search</code> — 既定の機能を無効にした場合、組み込みの<a href="/docs/mdbook/v0-5-4/en/01-guide/30-guide-reading/#search">検索</a>など、必要な機能を手で有効にしてください。',
'<code>--vers "^0.5.4"</code> — <code>0.5</code>系列の最新版をインストールします。ただし、<code>0.6.0</code>以降のような、SemVer上の互換性がない版は、ビルドを壊す可能性があるためインストールしません。古いmdBookがすでにインストールされていれば、Cargoが自動で更新します。特定の版へ固定したい場合は、<code>^</code>を<code>=</code>へ置き換えてください。',
'<code>--locked</code> — mdBookのリリース時に使われた依存関係を使います。<code>--locked</code>を指定しなければ、すべての依存関係の最新版を使います。リリース後の修正が含まれる場合もありますが、まれにビルドの問題が起きることもあります。'],
'11-for_developers-index.md':[
'<a href="/docs/mdbook/v0-5-4/en/01-guide/13-for_developers-preprocessors/">プリプロセッサー</a>',
'<a href="/docs/mdbook/v0-5-4/en/01-guide/12-for_developers-backends/">代替バックエンド</a>',
'<code>book.toml</code>を解析します。存在しなければ、既定の<code>Config</code>を使います。','本の各章をメモリーへ読み込みます。','使うプリプロセッサーとバックエンドを見つけます。','すべてのプリプロセッサーを実行します。','バックエンドを呼び出し、処理した結果を出力します。'],
'13-for_developers-preprocessors.md':['<code>{{#include /path/to/file.md}}</code>のような独自のヘルパーを作る','LaTeX形式の式（<code>$$ \\frac{1}{3} $$</code>）を、対応するMathJaxの式へ置き換える'],
'22-format-mdbook.md':[
'<code>editable</code> — <a href="/docs/mdbook/v0-5-4/en/01-guide/25-format-theme-editor/">エディター</a>を有効にします。',
'<code>noplayground</code> — 再生ボタンを取り除きますが、テストは行います。',
'<code>mdbook-runnable</code> — 再生ボタンを必ず表示します。テストはせずに、読者が実行できるようにしたい例で、<code>ignore</code>属性と組み合わせるためのものです。',
'<code>ignore</code> — テストを行わず、再生ボタンも表示しません。ただし、Rustの構文としてハイライトします。',
'<code>should_panic</code> — 実行するとpanicを起こすべきコードです。',
'<code>no_run</code> — テスト時にコンパイルしますが、実行しません。再生ボタンも表示しません。',
'<code>compile_fail</code> — コンパイルが失敗するべきコードです。',
'<code>edition2015</code>、<code>edition2018</code>、<code>edition2021</code>、<code>edition2024</code> — 特定のRustエディションを指定します。本全体へ設定するには、<a href="/docs/mdbook/v0-5-4/en/01-guide/17-format-configuration-general/#rust-options"><code>rust.edition</code></a>を参照してください。']}
H={'Running <code>mdbook</code> in continuous integration':'継続的インテグレーションで<code>mdbook</code>を実行する','Installing mdBook':'mdBookをインストールする','Pre-compiled binaries':'ビルド済みバイナリー','Building from source':'ソースからビルドする','Running tests':'テストを実行する','Deploying':'デプロイする','404 handling':'404への対応','For developers':'開発者向け','The build process':'ビルド処理','Using <code>mdbook</code> as a library':'<code>mdbook</code>をライブラリーとして使う','Alternative backends':'代替バックエンド','Setting up':'準備する','Inspecting the book':'本を調べる','Enabling the backend':'バックエンドを有効にする','Configuration':'設定','Output and signalling failure':'出力と失敗の通知','Wrapping up':'おわりに','Preprocessors':'プリプロセッサー','Hooking into MDBook':'MDBookへ組み込む','Hints for implementing a preprocessor':'プリプロセッサーを実装するヒント','Implementing a preprocessor with a different language':'別の言語でプリプロセッサーを実装する','mdBook-specific features':'mdBook固有の機能','Hiding code lines':'コード行を非表示にする','Rust playground':'Rust Playground','Rust code block attributes':'Rustのコードブロック属性','Including files':'ファイルを取り込む','Including portions of a file':'ファイルの一部を取り込む','Including a file but initially hiding all except specified lines':'ファイルを取り込み、最初は指定した行だけを表示する','Inserting runnable Rust files':'実行可能なRustファイルを挿入する','Controlling page &#x3C;title>':'ページの&#x3C;title>を指定する','HTML classes provided by mdBook':'mdBookが提供するHTMLクラス','<code>class="left"</code> and <code>"right"</code>':'<code>class="left"</code>と<code>"right"</code>','<code>class="hidden"</code>':'<code>class="hidden"</code>','Font-Awesome icons':'Font Awesomeのアイコン','Contributors':'貢献者','Continuous integration':'継続的インテグレーション','For Developers':'開発者向け','Alternative Backends':'代替バックエンド','Syntax highlighting':'構文ハイライト'}
def keep_svg(original,new):
 svgs=re.findall(r'<span class="fa-svg">[\s\S]*?</span>',original)
 for i,x in enumerate(svgs):assert '[SVG'+str(i)+']'in new;new=new.replace('[SVG'+str(i)+']',x)
 assert '[SVG'not in new
 return new
for name,ja in P.items():
 s=(N/'canonical/en/01-guide'/name).read_text();front,body=s.split('---\n',2)[1:];d=BeautifulSoup(body,'html.parser');ps=re.findall(r'<p(?: [^>]*)?>[\s\S]*?</p>',body);assert len(ps)==len(ja),(name,len(ps),len(ja))
 for old,new in zip(ps,ja):assert old in body;body=body.replace(old,'<p>'+keep_svg(old,new)+'</p>',1)
 if name in L:
  lis=[x for x in re.findall(r'<li>(?:(?!<li>|</li>)[\s\S])*?</li>',body)if '<p>'not in x and '<pre'not in x];assert len(lis)==len(L[name]),(name,len(lis),len(L[name]))
  for old,new in zip(lis,L[name]):assert old in body;body=body.replace(old,'<li>'+new+'</li>',1)
 if name.startswith('11-'):
  body=body.replace('<li>Load the book\n<ul>','<li>本を読み込みます。\n<ul>').replace('<li>For each backend:\n<ol>','<li>各バックエンドについて、次の処理を行います。\n<ol>')
 if name.startswith('13-'):body=body.replace('<summary>Example no-op preprocessor</summary>','<summary>何もしないプリプロセッサーの例</summary>')
 if name.startswith('22-'):
  body=body.replace('alt="The Rust logo"','alt="Rustロゴ"').replace('<div class="hidden">This will not be seen.</div>','<div class="hidden">これは表示されません。</div>')
 for en,jp in H.items():body=body.replace('>'+en+'<','>'+jp+'<');front=front.replace('"text": "'+en+'"','"text": "'+jp+'"')
 body=body.replace('/v0-5-4/en/','/v0-5-4/ja/');src=next(p['sourcePath']for p in M['pages']if p['id']=='01-guide/'+name)
 context=[{'kind':'source','html':f'<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href="https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/{src}">固定した原典</a> · <a href="/docs/mdbook/source/v0-5-4/edited/ja/{name}">編集可能な日本語文書</a> · <a href="/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz">固定原資料一式</a>。</p>'},{'kind':'editorial','html':'<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>'}]
 if name.startswith('22-'):context.append({'kind':'editorial','html':'<p>本文のSVGをMITとする説明は、原文の表現を保持しています。Font AwesomeのアイコンにはCC BY 4.0、非アイコンコードにはMIT等の素材別条件を適用します。Rustロゴは変更せずCC BY 4.0の通知を保持し、Rustとの提携・推奨を示しません。<a href="/docs/mdbook/source/v0-5-4/notices/FA_6_2_0_LICENSE.txt">Font Awesomeの原通知</a> · <a href="/docs/mdbook/source/v0-5-4/notices/RUST_ARTWORK_LOGO_LICENSE.md">Rustロゴの原通知</a>。</p>'})
 h=d.select_one('h1');title=H.get(h.decode_contents(),H.get(h.get_text(),h.get_text()));title=BeautifulSoup(title,'html.parser').get_text();front=re.sub(r'^title: .*$', 'title: '+json.dumps('mdBook：'+title,ensure_ascii=False),front,flags=re.M);front=re.sub(r'^documentContext: .*$', 'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M);front=front.replace('/v0-5-4/en/','/v0-5-4/ja/');result='---\n'+front+'---\n'+body
 for p in [N/'translations/ja/01-guide'/name,W/'src/content/docs/v0-5-4/ja/01-guide'/name,W/'public/source/v0-5-4/edited/ja'/name]:p.parent.mkdir(parents=True,exist_ok=True);p.write_text(result)
 (N/'drafts/ja/01-guide'/name).write_text(body);print('Saved draft',name)
