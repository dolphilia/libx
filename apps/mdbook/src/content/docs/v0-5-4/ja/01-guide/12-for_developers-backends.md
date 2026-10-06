---
title: "mdBook：代替バックエンド"
documentId: "mdbook:guide/src/for_developers/backends.md"
order: 30
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/for_developers/backends.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/12-for_developers-backends.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "プリプロセッサー", "link": "/v0-5-4/ja/01-guide/13-for_developers-preprocessors"}
next: {"text": "貢献者", "link": "/v0-5-4/ja/01-guide/31-misc-contributors"}
---


<div class="mdbook-guide">
<h1 id="alternative-backends"><a class="header" href="#alternative-backends">代替バックエンド</a></h1>
<p>「バックエンド」は、本の出力を生成する際に<code>mdbook</code>が呼び出すプログラムです。本と設定情報をJSONで表したデータが、<code>stdin</code>を通じて渡されます。バックエンドは、この情報を受け取ると、任意の処理を行えます。</p>
<p>バックエンドの使い方について、詳しくは<a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/">レンダラーの設定</a>を参照してください。</p>
<p>コミュニティは、いくつかのバックエンドを開発しています。利用できるバックエンドの一覧は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a>ページを参照してください。</p>
<h2 id="setting-up"><a class="header" href="#setting-up">準備する</a></h2>
<p>このページでは、単語数を数える簡単なプログラムを例に、独自の代替バックエンドを作る手順を説明します。Rustで書きますが、PythonやRubyなどを使っても構いません。</p>
<p>最初に、バイナリーのプログラムを新しく作り、<code>mdbook-renderer</code>を依存関係へ追加します。</p>
<pre><code class="language-shell">$ cargo new --bin mdbook-wordcount&#10;$ cd mdbook-wordcount&#10;$ cargo add mdbook-renderer&#10;</code></pre>
<p><code>mdbook-wordcount</code>プラグインが呼び出されると、<code>mdbook</code>はプラグインの<code>stdin</code>へ、JSON形式の<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html"><code>RenderContext</code></a>を送ります。読み込みに便利なコンストラクター<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html#method.from_json"><code>RenderContext::from_json()</code></a>で、<code>RenderContext</code>を読み込めます。</p>
<p>バックエンドが本を読み込むために必要な定型コードは、これだけです。</p>
<pre class="playground"><code class="language-rust edition2018">// src/main.rs&#10;use std::io;&#10;use mdbook_renderer::RenderContext;&#10;&#10;fn main() {&#10;    let mut stdin = io::stdin();&#10;    let ctx = RenderContext::from_json(&#x26;mut stdin).unwrap();&#10;}</code></pre>
<blockquote>
<p><strong>注：</strong><code>RenderContext</code>には<code>version</code>フィールドがあります。これによって、バックエンドは呼び出し元の<code>mdbook</code>のバージョンと互換性があるかを判断できます。この<code>version</code>は、<code>mdbook</code>の<code>Cargo.toml</code>にある、対応するフィールドから直接取得されます。</p>
<p>バックエンドでは、<a href="https://crates.io/crates/semver"><code>semver</code></a>クレートでこのフィールドを確認し、互換性に問題がありそうなら警告を出すことを推奨します。</p>
</blockquote>
<h2 id="inspecting-the-book"><a class="header" href="#inspecting-the-book">本を調べる</a></h2>
<p>バックエンドに本のコピーを取り込めたので、各章の単語数を数えましょう。</p>
<p><code>RenderContext</code>は<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/book/struct.Book.html"><code>Book</code></a>フィールド（<code>book</code>）を持ちます。<code>Book</code>には、<code>Book</code>のすべての項目を順にたどる<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/book/struct.Book.html#method.iter"><code>Book::iter()</code></a>メソッドがあるため、この工程も最初と同じくらい簡単です。</p>
<pre class="playground"><code class="language-rust edition2018">&#10;fn main() {&#10;    let mut stdin = io::stdin();&#10;    let ctx = RenderContext::from_json(&#x26;mut stdin).unwrap();&#10;&#10;    for item in ctx.book.iter() {&#10;        if let BookItem::Chapter(ref ch) = *item {&#10;            let num_words = count_words(ch);&#10;            println!("{}: {}", ch.name, num_words);&#10;        }&#10;    }&#10;}&#10;&#10;fn count_words(ch: &#x26;Chapter) -> usize {&#10;    ch.content.split_whitespace().count()&#10;}</code></pre>
<h2 id="enabling-the-backend"><a class="header" href="#enabling-the-backend">バックエンドを有効にする</a></h2>
<p>基本部分が動くようになったので、実際に使ってみましょう。まず、プログラムをインストールします。</p>
<pre><code class="language-shell">$ cargo install --path .&#10;</code></pre>
<p>次に、単語を数えたい本のディレクトリへ<code>cd</code>で移動し、<code>book.toml</code>ファイルを更新します。</p>
<pre><code class="language-diff">  &#91;book&#93;&#10;  title = "mdBook Documentation"&#10;  description = "Create book from markdown files. Like Gitbook but implemented in Rust"&#10;  authors = &#91;"Mathieu David", "Michael-F-Bryan"&#93;&#10;&#10;+ &#91;output.html&#93;&#10;&#10;+ &#91;output.wordcount&#93;&#10;</code></pre>
<p>本をメモリーへ読み込む際、<code>mdbook</code>は<code>book.toml</code>のすべての<code>output.*</code>テーブルを調べ、使うバックエンドを判断します。何も指定していなければ、既定のHTMLレンダラーを使います。</p>
<p>つまり、独自のバックエンドを追加したい場合は、HTMLバックエンドも追加する必要があります。そのテーブルの内容は、空のままでも構いません。</p>
<p>あとは通常どおり本をビルドすれば、すべて<em>そのまま動く</em>はずです。</p>
<pre><code class="language-shell">$ mdbook build&#10;...&#10;2018-01-16 07:31:15 &#91;INFO&#93; (mdbook::renderer): Invoking the "mdbook-wordcount" renderer&#10;mdBook: 126&#10;Command Line Tool: 224&#10;init: 283&#10;build: 145&#10;watch: 146&#10;serve: 292&#10;test: 139&#10;Format: 30&#10;SUMMARY.md: 259&#10;Configuration: 784&#10;Theme: 304&#10;index.hbs: 447&#10;Syntax highlighting: 314&#10;MathJax Support: 153&#10;Rust code specific features: 148&#10;For Developers: 788&#10;Alternative Backends: 710&#10;Contributors: 85&#10;</code></pre>
<p><code>wordcount</code>バックエンドの完全な名前やパスを指定する必要がなかったのは、<code>mdbook</code>が命名規則からプログラム名を<em>推測</em>するためです。<code>foo</code>バックエンドの実行ファイルは通常<code>mdbook-foo</code>という名前で、<code>book.toml</code>の<code>[output.foo]</code>に対応します。コマンドライン引数が必要だったり、インタープリターで実行するスクリプトだったりする場合など、<code>mdbook</code>へ呼び出すコマンドを明示するには、<code>command</code>フィールドを使えます。</p>
<pre><code class="language-diff">  &#91;book&#93;&#10;  title = "mdBook Documentation"&#10;  description = "Create book from markdown files. Like Gitbook but implemented in Rust"&#10;  authors = &#91;"Mathieu David", "Michael-F-Bryan"&#93;&#10;&#10;  &#91;output.html&#93;&#10;&#10;  &#91;output.wordcount&#93;&#10;+ command = "python /path/to/wordcount.py"&#10;</code></pre>
<h2 id="configuration"><a class="header" href="#configuration">設定</a></h2>
<p>特定の章（生成された文章やコードなど）の単語数を数えたくない場合を考えます。標準的な方法は、通常の<code>book.toml</code>設定ファイルの<code>[output.foo]</code>テーブルへ項目を追加することです。</p>
<p><code>Config</code>は、おおむね入れ子のハッシュマップとして扱えます。<code>get()</code>などのメソッドで設定内容へアクセスできます。便利な<code>get_deserialized()</code>メソッドは、値を取得して任意の型<code>T</code>へ自動でデシリアライズします。</p>
<p>実装するために、独自のシリアライズ可能な<code>WordcountConfig</code>構造体を作り、このバックエンドのすべての設定をまとめます。</p>
<p>まず、<code>Cargo.toml</code>へ<code>serde</code>と<code>serde_derive</code>を追加します。</p>
<pre><code>$ cargo add serde serde_derive&#10;</code></pre>
<p>続いて、設定の構造体を作れます。</p>
<pre class="playground"><code class="language-rust edition2018"><span data-mdbook-hidden-line="true">#!&#91;allow(unused)&#93;&#10;</span><span data-mdbook-hidden-line="true">fn main() {&#10;</span>use serde_derive::{Serialize, Deserialize};&#10;&#10;...&#10;&#10;#&#91;derive(Debug, Default, Serialize, Deserialize)&#93;&#10;#&#91;serde(default, rename_all = "kebab-case")&#93;&#10;pub struct WordcountConfig {&#10;  pub ignores: Vec&#x3C;String>,&#10;}&#10;<span data-mdbook-hidden-line="true">}</span></code></pre>
<p>あとは、<code>RenderContext</code>から<code>WordcountConfig</code>をデシリアライズし、除外対象の章を飛ばすためのチェックを追加します。</p>
<pre><code class="language-diff">  fn main() {&#10;      let mut stdin = io::stdin();&#10;      let ctx = RenderContext::from_json(&#x26;mut stdin).unwrap();&#10;+     let cfg: WordcountConfig = ctx.config&#10;+         .get_deserialized("output.wordcount")&#10;+         .unwrap_or_default();&#10;&#10;      for item in ctx.book.iter() {&#10;          if let BookItem::Chapter(ref ch) = *item {&#10;+             if cfg.ignores.contains(&#x26;ch.name) {&#10;+                 continue;&#10;+             }&#10;+&#10;              let num_words = count_words(ch);&#10;              println!("{}: {}", ch.name, num_words);&#10;          }&#10;      }&#10;  }&#10;</code></pre>
<h2 id="output-and-signalling-failure"><a class="header" href="#output-and-signalling-failure">出力と失敗の通知</a></h2>
<p>本のビルド時に、単語数をターミナルへ表示するのも便利ですが、ファイルへ出力するとよい場合もあります。<code>mdbook</code>は、<a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html"><code>RenderContext</code></a>の<code>destination</code>フィールドで、生成した出力を置く場所をバックエンドへ伝えます。</p>
<pre><code class="language-diff">+ use std::fs::{self, File};&#10;+ use std::io::{self, Write};&#10;- use std::io;&#10;  use mdbook::renderer::RenderContext;&#10;  use mdbook::book::{BookItem, Chapter};&#10;&#10;  fn main() {&#10;    ...&#10;&#10;+     let _ = fs::create_dir_all(&#x26;ctx.destination);&#10;+     let mut f = File::create(ctx.destination.join("wordcounts.txt")).unwrap();&#10;+&#10;      for item in ctx.book.iter() {&#10;          if let BookItem::Chapter(ref ch) = *item {&#10;              ...&#10;&#10;              let num_words = count_words(ch);&#10;              println!("{}: {}", ch.name, num_words);&#10;+             writeln!(f, "{}: {}", ch.name, num_words).unwrap();&#10;          }&#10;      }&#10;  }&#10;</code></pre>
<blockquote>
<p><strong>注：</strong>出力先ディレクトリが存在することや、空であることは保証されません（バックエンドがキャッシュを使えるように、<code>mdbook</code>は以前の内容を残す場合があります）。そのため、<code>fs::create_dir_all()</code>で作成しておくとよいでしょう。</p>
<p>出力先ディレクトリがすでに存在していても、空だとは考えないでください。バックエンドが前回の結果をキャッシュできるように、<code>mdbook</code>は古い内容を残す場合があります。</p>
</blockquote>
<p>本の処理中には、エラーが発生する可能性があります（ここまで書いた多くの<code>unwrap()</code>も、その例です）。<code>mdbook</code>は、0以外の終了コードを、出力生成の失敗として解釈します。</p>
<p>たとえば、すべての章の単語数が<em>偶数</em>であることを確認し、奇数ならエラーにする場合は、次のように書けます。</p>
<pre><code class="language-diff">+ use std::process;&#10;  ...&#10;&#10;  fn main() {&#10;      ...&#10;&#10;      for item in ctx.book.iter() {&#10;          if let BookItem::Chapter(ref ch) = *item {&#10;              ...&#10;&#10;              let num_words = count_words(ch);&#10;              println!("{}: {}", ch.name, num_words);&#10;              writeln!(f, "{}: {}", ch.name, num_words).unwrap();&#10;&#10;+             if cfg.deny_odds &#x26;&#x26; num_words % 2 == 1 {&#10;+               eprintln!("{} has an odd number of words!", ch.name);&#10;+               process::exit(1);&#10;+             }&#10;          }&#10;      }&#10;  }&#10;&#10;  #&#91;derive(Debug, Default, Serialize, Deserialize)&#93;&#10;  #&#91;serde(default, rename_all = "kebab-case")&#93;&#10;  pub struct WordcountConfig {&#10;      pub ignores: Vec&#x3C;String>,&#10;+     pub deny_odds: bool,&#10;  }&#10;</code></pre>
<p>バックエンドを再インストールし、本をビルドすると、次のようになります。</p>
<pre><code class="language-shell">$ cargo install --path . --force&#10;$ mdbook build /path/to/book&#10;...&#10;2018-01-16 21:21:39 &#91;INFO&#93; (mdbook::renderer): Invoking the "wordcount" renderer&#10;mdBook: 126&#10;Command Line Tool: 224&#10;init: 283&#10;init has an odd number of words!&#10;2018-01-16 21:21:39 &#91;ERROR&#93; (mdbook::renderer): Renderer exited with non-zero return code.&#10;2018-01-16 21:21:39 &#91;ERROR&#93; (mdbook::utils): Error: Rendering failed&#10;2018-01-16 21:21:39 &#91;ERROR&#93; (mdbook::utils):    Caused By: The "mdbook-wordcount" renderer failed&#10;</code></pre>
<p>気付いたかもしれませんが、プラグインの子プロセスからの出力は、すぐにユーザーへ渡されます。プラグインは「沈黙の原則」に従い、生成エラーや警告など、必要な場合だけ出力することを推奨します。</p>
<p>すべての環境変数はバックエンドへ引き継がれるため、通常どおり<code>MDBOOK_LOG</code>でログの詳しさを制御できます。</p>
<h2 id="wrapping-up"><a class="header" href="#wrapping-up">おわりに</a></h2>
<p>説明用の例ではありますが、<code>mdbook</code>の代替バックエンドを作る方法を示せたと思います。不足している点があれば、ユーザーガイドを改善できるように<a href="https://github.com/rust-lang/mdBook/issues">Issueトラッカー</a>へ投稿してください。</p>
<p>章の冒頭で紹介した既存のバックエンドは、実際の作り方のよい例になります。ソースコードを読んだり、質問したりしてみてください。</p>
</div>
