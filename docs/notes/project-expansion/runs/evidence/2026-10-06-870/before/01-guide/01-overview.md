---
title: "概要"
documentId: "wren:index.html"
order: 1
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Wrenの概要</h1>
<h2>Wrenは小さく高速な、クラスを中心とする並行スクリプト言語です <a class="header-anchor" href="#wren-is-a-small,-fast,-class-based-concurrent-scripting-language" name="wren-is-a-small,-fast,-class-based-concurrent-scripting-language">#</a></h2>
<hr/>
<p>Luaほどの小さなパッケージにSmalltalkを収め、Erlangをひとさじ加え、なじみのある現代的な<a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/">構文</a>で包んだものを想像してください。</p>
<pre class="snippet"><code>&#10;System.print("Hello, world!")&#10;&#10;class Wren {&#10;  flyTo(city) {&#10;    System.print("Flying to %(city)")&#10;  }&#10;}&#10;&#10;var adjectives = Fiber.new {&#10;  ["small", "clean", "fast"].each {|word| Fiber.yield(word) }&#10;}&#10;&#10;while (!adjectives.isDone) System.print(adjectives.call())&#10;</code></pre>
<ul>
<li><p><strong>Wrenは小さい。</strong> VMの実装に含まれる<a href="https://github.com/wren-lang/wren/tree/main/src">セミコロンは4,000個未満</a>です。午後のひとときで全体に目を通せます。<em>小さく</em>ても、<em>詰め込みすぎ</em>ではありません。読みやすく、<a href="https://github.com/wren-lang/wren/blob/46c1ba92492e9257aba6418403161072d640cb29/src/wren_value.h#L378-L433">丁寧にコメントが付いています</a>。</p></li>
<li><p><strong>Wrenは高速。</strong> 高速な単一パスのコンパイラが無駄の少ないバイトコードを生成し、コンパクトなオブジェクト表現とともに、Wrenが<a href="/docs/wren/v0-4-0/en/01-guide/22-performance/">ほかの動的言語に匹敵する性能</a>を発揮するのに役立ちます。</p></li>
<li><p><strong>Wrenはクラスを中心とする。</strong> スクリプト言語は数多くありますが、珍しいオブジェクトモデルを持つものや、そもそもオブジェクトモデルを持たないものもあります。Wrenでは<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/">クラス</a>を中心に据えています。</p></li>
<li><p><strong>Wrenは並行処理を備える。</strong> 軽量な<a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">ファイバー</a>が実行モデルの中核を担い、相互に通信するコルーチンの群れとしてプログラムを構成できます。</p></li>
<li><p><strong>Wrenはスクリプト言語。</strong> Wrenはアプリケーションへの組み込みを目的としています。依存関係はなく、小さな標準ライブラリと<a href="/docs/wren/v0-4-0/en/01-guide/16-embedding/">使いやすいC API</a>を備えています。C99、C++98、またはそれ以降で問題なくコンパイルできます。</p></li>
</ul>
<hr/>
<p><a href="https://wren.io/try">ブラウザーで試せます</a>！<br/>気に入ったら、<a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/">始めてみましょう</a>。<br/>わくわくしましたか？ <a href="/docs/wren/v0-4-0/en/01-guide/24-contributing/">開発への参加</a>も歓迎します！</p>
</div>

