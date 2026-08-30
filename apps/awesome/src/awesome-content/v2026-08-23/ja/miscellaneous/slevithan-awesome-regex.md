---
title: "Awesome Regex"
description: "Regexを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-slevithan-awesome-regex-readme-md"
---

# Awesome Regex

Regexを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Testers](#testers)
- [Syntax-free regex builders](#syntax-free-regex-builders)
- [Visualizers](#visualizers)
- [Grep-like tools](#grep-like-tools)
- [Tutorials](#tutorials)
- [Regex engines](#regex-engines)
  - [Documentation](#documentation)
  - [Source code](#source-code)
  - [Flavor differences](#flavor-differences)
- [Performance](#performance)
- [Collections of patterns](#collections-of-patterns)
- [JavaScript regex libraries](#javascript-regex-libraries)
- [JavaScript regex evolution](#javascript-regex-evolution)
- [Books](#books)
- [Articles](#articles)
- [Communities](#communities)
- [Miscellaneous](#miscellaneous)

<a id="testers"></a>
## テスター

*正規表現の構築、テスト、および実行に使用。*

- [regex101](https://regex101.com/) - **最も無料で最高のウェブベースのテストツール**
  - Flavors: Java, JavaScript, .NET, PCRE, RE2, Rust, and emulates Python.
  - Includes regex debugger (PCRE only).
- [RegexBuddy](https://www.regexbuddy.com/) (Windows, $40) - **最も優れたテストツール**
  - Flavors: Emulates hundreds of flavors/versions, with deep knowledge of differences.
  - Includes regex debugger.
- [RegExr](https://regexr.com/) \[[*GitHub*](https://github.com/gskinner/regexr/)] - **最も優れたオープンソーステストツール**
  - Flavors: JavaScript, PCRE.
  - Languages: 🇺🇸, 🇨🇳 ([fork](https://regexr-cn.com/)).
- [RegexLearn](https://regexlearn.com/playground) \[[*GitHub*](https://github.com/aykutkardas/regexlearn.com/blob/develop/src/pages/%5Blang%5D/playground.tsx)] - **最も多言語対応のテストツール** (JavaScript)
  - Languages: 🇺🇸, 🇹🇷, 🇷🇺, 🇪🇸, 🇨🇳, 🇩🇪, 🇺🇦, 🇫🇷, 🇵🇱, 🇰🇷, 🇧🇷, 🇨🇿, 🇬🇪.
- [regexplained](https://regexplained.com/) \[[*GitHub*](https://github.com/LeaVerou/regexplained)] - **プレゼンテーション向けの最も優れたテストツール** (JavaScript)

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

**コマンドライン**

- [pcre2test](https://pcre2project.github.io/pcre2/doc/pcre2test/) - 正規表現デバッガーを含む。味: PCRE
- [rxrx](https://metacpan.org/dist/Regexp-Debugger/view/bin/rxrx) - 正規表現デバッガーを含む ([video intro](https://www.youtube.com/watch?v=zcSFIUiMgAs))。味: Perl

**味（flavor）別**

- fancy-regex (Rust library): [fancy-regex playground](https://fancy-regex.github.io/fancy-regex/) \[[*GitHub*](https://github.com/fancy-regex/fancy-regex/tree/main/playground)].
- JavaScript: [RegViz](http://regviz.org/)。
- .NET: [Regex Storm](http://regexstorm.net/tester) \[[*GitHub*](https://github.com/lonekorean/regex-storm)].
- PCRE: [PHP Live Regex](https://www.phpliveregex.com/)。
- Python: [Pythex](https://pythex.org/)。
- Ruby: [Rubular](https://rubular.com/)。
- sed: [GNU sed REPL](https://sed.js.org/)。
- Swift: [Swift Regex](https://swiftregex.com/) \[[*GitHub*](https://github.com/swiftfiddle/swiftregex)] - 正規表現デバッガーとDSLビルダーを含む

**複数の味**

- [CyrilEx](https://extendsclass.com/regex-tester.html) \[[*GitHub*](https://github.com/cyrilbois/cyrilex)] - Java, JavaScript, MySQL, PHP, Python, Ruby.
- [Patterns](https://krillapps.com/patterns/) (macOS, $3) - Bash, Emacs, grep, Java, Oniguruma, PCRE, POSIX BRE, POSIX ERE, Ruby, sed.
- [RegexPlanet](https://www.regexplanet.com/) \[[*GitHub*](https://github.com/regexplanet)] - Go, Java, JavaScript (Bun, Deno, Node.js), .NET, Perl, PHP, PostgreSQL, Python, Ruby, Rust, Swift, Tcl, XRegExp.
</details>

<a id="syntax-free-regex-builders"></a>
## 構文不要の正規表現ビルダー

*正規表現を書く必要なく、正規表現の構文やコードを書かずに構築できる。*

- [ChatGPT](https://chat.openai.com/) その他LLM - 例: *"`X`をマッチさせる正規表現を作成し、段階的に説明してください"*
- [RegexMagic](https://www.regexmagic.com/) (Windows, $40) - サンプルとルールを使用して正規表現を生成
  - Flavors: Emulates hundreds of flavors/versions.

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [Regex Generator](https://regex-generator.olafneumann.org/) \[[*GitHub*](https://github.com/noxone/regex-generator)] - サンプルテキストから簡単な正規表現を生成
- [Regex.ai](https://regex.ai/) - テキスト内のサンプルをマークし、AIを使用して潜在的な正規表現を生成
</details>

<a id="visualizers"></a>
## 可視化ツール

*あなたの正規表現がどのように構成されているか、あるいはどのように動作するかを可視化できる。*

- [Regex Vis](https://regex-vis.com/) \[[*GitHub*](https://github.com/Bowen7/regex-vis)] - ライナー図を生成、視覚エディタ付き。味: JavaScript
  - Languages: 🇺🇸, 🇨🇳.
- [Regulex](https://jex.im/regulex/) \[[*GitHub*](https://github.com/CJex/regulex)] - ライナー図を生成。味: JavaScript
- [Nodexr](https://www.nodexr.net/) \[[*GitHub*](https://github.com/Jcparkyn/nodexr)] - グラフィカルエディタで視覚的な階層構造を提供。味：.NET.

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [Regex Nodes](https://johannesvollmer.com/regex-nodes/) \[[*GitHub*](https://github.com/johannesvollmer/regex-nodes)] - グラフィカルエディタで視覚的な階層構造を提供。味：JavaScript.
- [Debuggex](https://www.debuggex.com/) - 鉄道図を生成。味：JavaScript、PCRE、Python.
- [Regexper](https://regexper.com/) \[[*GitLab*](https://gitlab.com/javallone/regexper-static)] - 鉄道図を生成。味：JavaScript.
</details>

<a id="grep-like-tools"></a>
## grep系ツール

*ファイルを検索・置換できる。*

<a id="command-line"></a>
### コマンドライン

- [ripgrep](https://github.com/BurntSushi/ripgrep) - より良いかつ速いgrep。ディレクトリを再帰的に検索しつつ、gitignoreルールを尊重し、隠しファイルやバイナリファイルをスキップする。
  - Flavors: Rust (default), PCRE.
- [nomino](https://github.com/yaa110/nomino) - ファイル名のリネームには正規表現を使用。
  - Flavor: Rust.

➕ **関連項目:** [Feature comparison of grep-like tools](https://beyondgrep.com/feature-comparison/).

### GUI

- [Aba Search and Replace](https://www.abareplace.com/) (Windows, $30) - 入力中にマッチを表示。
- [PowerGREP](https://www.powergrep.com/) (Windows, $159) - GUIまたはコマンドラインからアーカイブ、バイナリファイル、PDF、ドキュメント/シート、メールなどに検索可能。
  - Flavors: Emulates hundreds of flavors/versions.
- [PowerRename](https://github.com/microsoft/PowerToys) (Windows) - ファイル名のリネームには正規表現を使用。

<a id="tutorials"></a>
## チュートリアル

*正規表現の使い方を学ぼう.*

<a id="traditional"></a>
### 従来型

- [Regular-Expressions.info](https://www.regular-expressions.info/) - 多数の正規表現の味をカバー。
- [The Modern JavaScript Tutorial: Regular expressions](https://javascript.info/regular-expressions) \[[*GitHub*](https://github.com/javascript-tutorial/en.javascript.info)] - JavaScriptにおける正規表現の使い方ガイド。
  - Languages: 🇺🇸, 🇪🇸, 🇫🇷, 🇮🇹, 🇯🇵, 🇷🇺, 🇺🇦, 🇨🇳 (partial for [others](https://javascript.info/translate)).

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [RexEgg](https://rexegg.com/) - 詳細なチュートリアル（高度なトピックを含む）。
- [learnbyexample](https://learnbyexample.github.io/books/) \[[*GitHub*](https://github.com/learnbyexample)] - 正規表現に関する電子書籍（[JavaScript](https://learnbyexample.github.io/learn_js_regexp/), [Python](https://learnbyexample.github.io/py_regular_expressions/), [Ruby](https://learnbyexample.github.io/Ruby_Regexp/)）
- [Regular Expressions for Regular Folk](https://refrf.dev/) \[[*GitHub*](https://github.com/shreyasminocha/regex-for-regular-folk)] - 初心者向けの視覚的かつ例に基づいた電子書籍。
</details>

<a id="with-interactive-exercises"></a>
### 対話型演習付き

- [RegexLearn](https://regexlearn.com/) \[[*GitHub*](https://github.com/aykutkardas/regexlearn.com)] - 交互式チュートリアルと練習問題。
  - Languages: 🇺🇸, 🇹🇷, 🇷🇺, 🇪🇸, 🇨🇳, 🇩🇪, 🇺🇦, 🇫🇷, 🇵🇱, 🇰🇷, 🇧🇷, 🇨🇿, 🇬🇪.
- [RegexOne](https://regexone.com/) - 交互式チュートリアルと練習問題。

<a id="videos"></a>
### 動画

- [*Demystifying Regular Expressions*](https://www.youtube.com/watch?v=M7vDtxaD7ZU) - Lea Verouによる初心者向けの素晴らしい講演（HolyJS 2017、1時間12分）。
- [*Learn Regular Expressions In 20 Minutes*](https://www.youtube.com/watch?v=rhzKDrUiJVk) - Kyle Cookによる正規表現テストツールでの実時間構文解説。
- Many options for video courses are available on [Udemy](https://www.udemy.com/topic/regular-expressions/) ($).

<a id="regex-engines"></a>
## 正規表現エンジン

*主要な正規表現の実装例：プログラミング言語に組み込まれたものや、独立したライブラリとして提供されているもの.*

<a id="documentation"></a>
### ドキュメント

*公式の正規表現リファレンスとガイド.*

<a id="regex-flavors"></a>
#### 正規表現フレーバー

- Boost.Regex: [Manual](https://boost.org/libs/regex)。
- C++: [Regular expressions library](https://en.cppreference.com/w/cpp/regex)。
- Hyperscan: [Introduction](https://www.hyperscan.io/)。
- ICU: [Regular Expressions](https://unicode-org.github.io/icu/userguide/strings/regexp.html)。
- Java: [Pattern](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/util/regex/Pattern.html), [API](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/util/regex/package-summary.html).
- JavaScript: [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions), [Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions), [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet).
- .NET: [Overview](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions), [Language](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference), [API](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions).
- Onigmo: [RE](https://github.com/k-takata/Onigmo/blob/master/doc/RE)。
- Oniguruma: [RE](https://github.com/kkos/oniguruma/blob/master/doc/RE)。
- PCRE2: [Pattern](https://pcre2project.github.io/pcre2/doc/pcre2pattern/), [API](https://pcre2project.github.io/pcre2/doc/).
- Perl: [Syntax](https://perldoc.perl.org/perlre), [Tutorial](https://perldoc.perl.org/perlretut), [Quick Start](https://perldoc.perl.org/perlrequick).
- Python: [re](https://docs.python.org/library/re.html)。
- RE2: [Syntax](https://github.com/google/re2/wiki/Syntax)。
- Rust: [regex](https://docs.rs/regex) - 参照： [regex-lite](https://docs.rs/regex-lite).
- Swift: [Regex](https://developer.apple.com/documentation/swift/regex/) - 参照： [RegexBuilder](https://developer.apple.com/documentation/regexbuilder), [NSRegularExpression](https://developer.apple.com/documentation/foundation/nsregularexpression).

ℹ️ Raku（かつてはPerl 6）が正規表現を再構築する。詳細は： [Grammars](https://docs.raku.org/language/grammars) ([tutorial](https://docs.raku.org/language/grammar_tutorial))， [Regexes](https://docs.raku.org/language/regexes) ([best practices](https://docs.raku.org/language/regexes-best-practices))。

<a id="without-own-flavor"></a>
#### 独自フレーバーを持たない実装

- Go: [regexp](https://pkg.go.dev/regexp) - 味：RE2.
- MySQL: [Regular Expressions](https://dev.mysql.com/doc/refman/en/regexp.html) - 味：ICU.
- PHP: [Regular Expressions](https://www.php.net/manual/en/book.pcre.php) - 味：PCRE.
- Ruby: [Regexp](https://docs.ruby-lang.org/en/master/Regexp.html) - 味：Onigmo.

<a id="source-code"></a>
### ソースコード

*主要な正規表現実装の背後にあるコードを読むか、貢献するか。*

- [Boost.Regex](https://github.com/boostorg/regex) - C++ リグレクスライブラリ.
- [Hyperscan](https://github.com/intel/hyperscan) - インテルの高性能ライブラリ、 [DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection) に使用.
- [ICU](https://github.com/unicode-org/icu/blob/main/icu4c/source/i18n/regexcmp.cpp) - Unicode org のパッケージで、完全な Unicode サポートを提供.
- [Java: java.util.regex](https://github.com/openjdk/jdk/tree/master/src/java.base/share/classes/java/util/regex) - JDK の標準リグレクス.
- JavaScript:
  - [JavaScriptCore: RegExp](https://github.com/WebKit/WebKit/blob/main/Source/JavaScriptCore/runtime/RegExp.cpp) - Safari が使用するリグレクスエンジン.
  - [V8: Irregexp](https://github.com/v8/v8/tree/main/src/regexp) - Chrome、Edge、 [Firefox](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/) などに使用されるリグレクスエンジン.
- [.NET: System.Text.RegularExpressions](https://github.com/dotnet/runtime/tree/main/src/libraries/System.Text.RegularExpressions) - すべての .NET 言語（C#、VB など）で共有されている.
- [Onigmo](https://github.com/k-takata/Onigmo) - Oniguruma から分岐した。Ruby 2.0+ で使用.
- [Oniguruma](https://github.com/kkos/oniguruma) - Ruby 1.9、TextMate の文法などに使用される C リグレクスライブラリ.
- [PCRE2](https://github.com/PCRE2Project/pcre2) - PHP、Rなどに使われる人気のC言語の正規表現ライブラリ
- [Perl](https://github.com/Perl/perl5/blob/blead/regexp.h) - [perlreguts](https://perldoc.perl.org/perlreguts)を参照してください。
- [Python: re](https://github.com/python/cpython/tree/main/Lib/re) および [regex](https://github.com/mrabarnett/mrab-regex) - 標準および拡張された正規表現ライブラリ
- [RE2](https://github.com/google/re2) - Goなどに使われる人気のC++正規表現ライブラリ。バックトラッキングエンジンではない。
- [Rust: regex](https://github.com/rust-lang/regex) - バックトラッキングエンジンではない。

<a id="flavor-differences"></a>
### フレーバー間の違い

*正規表現の種類ごとの構文と動作の違い。*

- Ron Buckton: [Regular Expression Feature Comparisons](https://rbuckton.github.io/regexp-features/) \[[*GitHub*](https://github.com/rbuckton/regexp-features)].
- Regular-Expressions.info: [Tools & Languages](https://www.regular-expressions.info/tools.html)。
- Steven Levithan: [Named capture](https://xregexp.com/syntax/named_capture_comparison/), [Lookbehind](https://stevenlevithan.com/regex/tests/lookbehind.html).
- Wikipedia: [Comparison of regular expression engines](https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines)。

<a id="performance"></a>
## 性能

*パターンとエンジンのパフォーマンス、ベンチマーク、および [ReDoS](https://en.wikipedia.org/wiki/ReDoS) 防止。*

<a id="crafting-efficient-regexes"></a>
### 効率的な正規表現の作成

- [Runaway Regular Expressions: Catastrophic Backtracking](https://www.regular-expressions.info/catastrophic.html) - 超線形バックトラッキングの探索と解決法
- [Book: High Performance JavaScript](https://www.amazon.com/dp/059680279X/?tag=slev-20) (2010) - *第5章：文字列と正規表現*.
- [Book: Mastering Regular Expressions, 3rd Edition](https://www.amazon.com/Mastering-Regular-Expressions-Jeffrey-Friedl/dp/0596528124/?tag=slev-20) (2006) - *第6章：効率的な表現の構築*.
- [Performance of Greedy vs. Lazy Regex Quantifiers](https://blog.stevenlevithan.com/archives/greedy-lazy-performance) - バックトラッキングの仕組みを示す

ℹ️ バックトラッキングエンジンを使用する場合、正規表現の構成方法が一致するマッチや失敗の報告速度に影響を与えることがあります。

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [Performance of Regular Expressions](https://medium.com/textmaster-engineering/performance-of-regular-expressions-81371f569698) - バックトラッキング性能について、詳細な例を含む
</details>

<a id="regex-engine-optimization"></a>
### 正規表現エンジンの最適化

- [Regular Expression Matching Can Be Simple And Fast](https://swtch.com/~rsc/regexp/regexp1.html) - バックトラッキングのないエンジンについて。 [follow up](https://swtch.com/~rsc/regexp/regexp3.html) にはRE2とPCREの性能比較が含まれる
- [Regular Expression Improvements in .NET 7](https://devblogs.microsoft.com/dotnet/regular-expression-improvements-in-dotnet-7/) および [.NET 5](https://devblogs.microsoft.com/dotnet/regex-performance-improvements-in-net-5/) - パフォーマンス最適化の詳細な説明を含む
- [ripgrep is faster than {grep, …}](https://blog.burntsushi.net/ripgrep/) - リプグレとRustの `regex` が高速である理由についての詳細を含む

<a id="benchmarking"></a>
### ベンチマーク

- Cross-engine benchmarking libraries: [rebar](https://github.com/BurntSushi/rebar), [regex-benchmark](https://github.com/mariomka/regex-benchmark).
- [Boost.Regex: Performance](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/background/performance.html) - Boost、C++ `std::regex` などとの比較

<a id="redos-checkers"></a>
### ReDoS検査ツール

- [regex.rip](https://regex.rip/) - ReDoS脆弱性を検証する正規表現をテストする
- [recheck](https://github.com/makenowjust-labs/recheck) \[[*home*](https://makenowjust-labs.github.io/recheck/)] - JavaScriptおよびScalaでReDoS脆弱性を検出するライブラリ。ESLintプラグインとして使用可能
- [vuln-regex-detector](https://github.com/davisjam/vuln-regex-detector) - ReDoS脆弱性を検出するPerlライブラリ

⚠️ これらのツールにはサポートされる文法に制限があります。

<a id="collections-of-patterns"></a>
## パターン集

*特定のタスクに用意された事前作成された正規表現。*

- [Book: Regular Expressions Cookbook, 2nd Edition](https://www.amazon.com/Regular-Expressions-Cookbook-Solutions-Programming/dp/1449319432/?tag=slev-20) (2012) - 高品質な解説を含む詳細な説明
  - Flavors: Java, JavaScript, .NET, PCRE, Perl, Python, Ruby, XRegExp.
- [Regex DB](https://rgxdb.com/) - 解説には、一致するテキストと一致しないテキストの基本的な記述および例が含まれる

<details>
  <summary>⚠️ <b>Word of warning</b></summary>
  <br>

Many regexes found online are low quality. It's risky to use regexes you don't fully understand in code, since they might have false positives/negatives, be vulnerable to performance problems with certain target strings, or assume a different regex flavor.
</details>

<a id="javascript-regex-libraries"></a>
## JavaScript正規表現ライブラリ

*高度な正規表現の使用や処理に向けたオープンソースJavaScriptライブラリ。*

<a id="alternative-regex-builders-and-engines"></a>
### 代替ビルダーとエンジン

- [Regex+](https://github.com/slevithan/regex) - 拡張された読みやすさと高性能なJavaScript正規表現をサポートするテンプレートタグ
- [Oniguruma-To-ES](https://github.com/slevithan/oniguruma-to-es) - OnigurumaパターンをネイティブJavaScript正規表現に変換
- Use other engines via WebAssembly: [node-re2](https://github.com/uhop/node-re2) (RE2), [rregex](https://github.com/2fd/rregex) (Rustの`regex`), [vscode-oniguruma](https://github.com/microsoft/vscode-oniguruma) (Oniguruma)

<a id="abstracted-regex-syntax"></a>
### 抽象化された正規表現構文

- [Rexx](https://github.com/yyytcool/rexx) - 構造化された構文に変数とコメントを用いたテンプレートタグ
- [Melody](https://github.com/yoav-lavi/melody) \[[*docs*](https://yoav-lavi.github.io/melody/book/)] - 正規表現にコンパイルされる言語
- Compose with functions: [compose-regexp.js](https://github.com/compose-regexp/compose-regexp.js)， [VerbalExpressions](https://github.com/VerbalExpressions/JSVerbalExpressions) ([many languages](https://verbalexpressions.github.io/)向けの実装), [magic-regexp](https://github.com/unjs/magic-regexp) \[[*home*](https://regexp.dev/)], [Super Expressive](https://github.com/francisrstokes/super-expressive) \[[*playground*](https://nartc.github.io/ng-super-expressive/)]

<a id="regex-processors-utilities-and-more"></a>
### 正規表現プロセッサー、ユーティリティなど

- AST builders: [regexpp](https://github.com/eslint-community/regexpp), [regexp-tree](https://github.com/DmitrySoshnikov/regexp-tree), [regjsparser](https://github.com/jviereck/regjsparser)/[regjsgen](https://github.com/bnjmnt4n/regjsgen), [regexp-simple-parser](https://github.com/fabiospampinato/regexp-simple-parser).
  - AST explorers: [AST Explorer: RegExp](https://astexplorer.net/#/gist/56d33dc28d07c7f57bdf5ca0f4061320/c6b67a829334151af01ba55960c653e4462df437), [JS RegExp AST Viewer](https://leaysgur.github.io/js-regexp-ast-viewer/).
  - [regexp-ast-analysis](https://github.com/RunDevelopment/regexp-ast-analysis) \[[*docs*](https://rundevelopment.github.io/regexp-ast-analysis/docs/latest/)] - regexppによって生成されたASTノードを分析
- [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp) \[[*home*](https://ota-meshi.github.io/eslint-plugin-regexp/)] - 正規表現の誤りなどを検出するESLintプラグイン
- [arkregex](https://github.com/arktypeio/arktype/tree/main/ark/regex) - TS型を持つ`RegExp`に相当するコンストラクタ
- [super-regex](https://github.com/sindresorhus/super-regex) - 正規表現に実行タイムアウトを追加
- Partial regex matching: [regex-partial-match](https://github.com/TomStrepsil/regex-partial-match), [incr-regex-package](https://github.com/nurulc/incr-regex-package).
- [regex-utils](https://github.com/gruhn/regex-utils) - 正規表現の等価性を確認、正規表現の交差を構築など、その他のユーティリティ
- Generate strings that match a given regex: [randexp.js](https://github.com/fent/randexp.js), [regex-to-strings](https://github.com/wimpyprogrammer/regex-to-strings).
- [regexgen](https://github.com/devongovett/regexgen) - 複数の文字列に一致する正規表現を生成
- [Regex Colorizer](https://github.com/slevithan/regex-colorizer) \[[*home*](https://slevithan.github.io/regex-colorizer/demo/)] - 正規表現の構文をハイライト
- [regex-to-mermaid](https://github.com/tayles/regex-to-mermaid) - 正規表現を可視化するMermaid図を生成

<a id="javascript-regex-evolution"></a>
## JavaScript正規表現の進化

JavaScriptにおける正規表現の改善の歴史 [standard](https://tc39.es/ecma262/multipage/)。ES2018以降には、機能が開発および議論されたTC39の提案へのリンクが含まれています。

- ES3 (1999) introduced regular expressions.
- ES5 (2009) fixed unintuitive behavior by creating a new object every time regex literals are evaluated \[[*explainer*](https://whereswalden.com/2010/01/15/more-es5-incompatible-changes-regular-expressions-now-evaluate-to-a-new-object-not-the-same-object-each-time-theyre-encountered/)], および、文字クラス内でエスケープされない前slashを含む正規表現リテラルを許可した (`/[/]/`).
- ES6/ES2015 added: \[[*explainer*](https://2ality.com/2015/07/regexp-es6.html)]
  - Flag `y` (`sticky`), which anchors matches to `lastIndex`.
  - Flag `u` (`unicode`) \[[*explainer*](https://mathiasbynens.be/notes/es6-unicode-regex)] \[[*2016 spec fix*](https://github.com/tc39/ecma262/pull/525)], これは `\u{…}` を通じてユニコードコードポイントエスケープを追加し、未指定エスケープ、八進数エスケープ、量化された先行確認、および特定の文脈における未エスケープ特殊文字に対して厳密なエラーを発生させ、フラグ `i` におけるユニコードケースフォールディング、およびコードポイントマッチング（量化子、文字クラス、範囲、および組み込みセットに影響）を提供する。
  - Getter `RegExp.prototype.flags`, the ability to copy a regex using `RegExp` (optionally with new flags), and support for subclassing `RegExp` (along with `RegExp.prototype[Symbol.match`/`replace`/`search`/`split]` and `RegExp[Symbol.species]`).
- ES2018 added [flag `s`](https://github.com/tc39/proposal-regexp-dotall-flag) (`dotAll`), [lookbehind](https://github.com/tc39/proposal-regexp-lookbehind), [named capture](https://github.com/tc39/proposal-regexp-named-groups), および [Unicode properties](https://github.com/tc39/proposal-regexp-unicode-property-escapes) ( `\p{…}` および `\P{…}` により、フラグ `u` を必要とする; 詳細は [list](https://github.com/mathiasbynens/regexpu-core/blob/main/property-escapes.md) を参照)。
- ES2020 added string method [`matchAll`](https://github.com/tc39/proposal-string-matchall) (イテレータを返す)、さらに `RegExp.prototype[Symbol.matchAll]`。
- ES2022 added [flag `d`](https://github.com/tc39/proposal-regexp-match-indices) (`hasIndices`), これはマッチされたサブ文字列の開始および終了インデックスを提供する。
- ES2024では[フラグ`v`](https://github.com/tc39/proposal-regexp-v-flag)（`unicodeSets`）\[[*解説*](https://v8.dev/features/regexp-v-flag)]が追加されました。これはフラグ`u`を拡張し、複数文字からなる「文字列のプロパティ」を`\p{…}`へ追加します。また、文字クラス内の複数文字要素を`\p{…}`と`\q{…|…}`で表現でき、入れ子の文字クラス、集合演算子`[…--…]`と`[…&&…]`、文字クラス内の新しいエスケープ規則を利用できます。さらに、`\p`と`\P`について、否定文字クラス`[^…]`内での大文字・小文字を区別しないマッチングが修正されました。
- ES2025 added [modifiers](https://github.com/tc39/proposal-regexp-modifiers) `(?ims:…)`, [duplicate named capturing groups](https://github.com/tc39/proposal-duplicate-named-capturing-groups) に別々の選択肢経路で、および [`RegExp.escape`](https://github.com/tc39/proposal-regex-escaping)。

> Editions from ES2019 onward have added additional Unicode properties that can be used via `\p{…}` and `\P{…}`. ES2021 added string method [`replaceAll`](https://github.com/tc39/proposal-string-replaceall), although the only difference from ES3's `replace` when given a regex is that it throws if not using flag `g`.
<details>
  <summary>➕ <b>See also</b></summary>
  <br>

- [*Regexes Got Good: The History And Future Of Regular Expressions In JavaScript*](https://www.smashingmagazine.com/2024/08/history-future-regular-expressions-javascript/)
- Backcompat libraries: [regexpu](https://github.com/mathiasbynens/regexpu), [regenerate](https://github.com/mathiasbynens/regenerate) ([Unicode property sets](https://github.com/mathiasbynens/regenerate-unicode-properties)).
- Chrome's `l` (`linear`) regex flag, behind a V8 flag \[[*explainer*](https://v8.dev/blog/non-backtracking-regexp)] \[[*how to run*](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/)].
- [Can I use](https://caniuse.com/) - 個別の機能に対する最新のブラウザサポート表。
</details>

<details>
  <summary>🔮 <b>Future: Active proposals</b></summary>
  <br>

- [Extended mode and comments](https://github.com/tc39/proposal-regexp-x-mode) (2021) - フラグ `x` (`extended`) において、無関係な空白および行コメント (`#…`) を含み、インラインコメントを `(?#…)` で提供。
- [Atomic operators](https://github.com/tc39/proposal-regexp-atomic-operators) (2021) - 原子グループを `(?>…)` で提供し、持続量化子（例: `*+`, `++`）を導入。
- [Buffer boundaries](https://github.com/tc39/proposal-regexp-buffer-boundaries) (2021) - アンカー `\A` および `\z` はフラグ `m` に影響されない。
- [\R escape](https://github.com/tc39/proposal-regexp-r-escape) (2021) - 文字クラス外では、 `\R` は任意の行終端をマッチする。
- [Restrict subclassing support in built-ins](https://github.com/tc39/proposal-rm-builtin-subclassing) (2020) - `RegExp` のサブクラス化が縮小された。
- [Legacy RegExp features](https://github.com/tc39/proposal-regexp-legacy-features) (2015) - 過去の機能の標準化。
</details>

<a id="books"></a>
## 書籍

*選ばれた正規表現の本の一覧.*

- [*Regular Expressions Cookbook, 2nd Edition*](https://www.amazon.com/dp/1449319432/?tag=slev-20) (2012) ジャン・ゴイバーツおよびスティーブン・レヴィタンによる - 八つのプログラミング言語に向けた正規表現チュートリアル、実用問題100以上の正規表現レシピ、および各味の違いに深く焦点を当てる。
  - Flavors: Java, JavaScript, .NET, PCRE, Perl, Python, Ruby, XRegExp.
- [*Mastering Regular Expressions, 3rd Edition*](https://www.amazon.com/dp/0596528124/?tag=slev-20) (2006) ジェフリー・フリードルによる - コンピュータ科学の名作で、基礎知識を既に持っている人向け。効率的な正規表現の作成に関する良好なカバーを含む。
  - Flavors: Dedicated chapters on Java, .NET, Perl, and PHP (PCRE), with more limited coverage of Python, Tcl, command line tools, etc.
- [*Introducing Regular Expressions*](https://www.amazon.com/dp/1449392687/?tag=slev-20) (2012) マイケル・フィッツジェラードによる - 正規表現にまだ慣れていないプログラマ向けの導入書で、基本を厳密に扱う。

<a id="articles"></a>
## 記事

*選ばれた正規表現に関する記事の一覧.*

- [*The World's Shortest Regex Compiler?*](https://jasonhpriestley.com/regex) および最適化に関する [follow up](https://jasonhpriestley.com/regex-dfa) - JavaScriptで非バックトラッキング正規表現エンジンを書くための導入。
- [*Regex Legends: The People Behind the Magic*](https://blog.stevenlevithan.com/archives/regex-legends) - 影響力を持つ技術の人物たち.

<a id="communities"></a>
## コミュニティ

*正規表現を議論し、支援し、助けを求める.*

- [Reddit: r/regex](https://www.reddit.com/r/regex/)
- [Stack Overflow: &lsqb;regex&rsqb;](https://stackoverflow.com/questions/tagged/regex?tab=Votes)

<a id="miscellaneous"></a>
## その他

*その他、興味深い、楽しい、そして便利なコンテンツです。*

- Quiz: [regex101 Regex Quiz](https://regex101.com/quiz) - ログインが必要です。
- Games: [Regex Crossword](https://regexcrossword.com/), [regexle](https://regexle.com/), [The Typing of the RegEX](https://thetypingoftheregex.com/), [Regex Machina](https://codepip.com/games/regex-machina/) ($).
- Comics: [xkcd](https://xkcd.com/208/), [Garabato Kid](https://twitter.com/garabatokid/status/1147063121678389253).

<a id="about"></a>
## このリストについて

Awesome Regex は [Steven Levithan](https://github.com/slevithan) と [contributors](https://github.com/slevithan/awesome-regex/graphs/contributors) によって作成されました。

<a id="sponsors-and-backers"></a>
### スポンサーと支援者

[<img src="https://github.com/roboflow.png" width="40" height="40">](https://github.com/roboflow)

<a id="past-sponsors"></a>
### 過去のスポンサー

[<img src="https://github.com/antfu.png" width="40" height="40">](https://github.com/antfu)
[<img src="https://github.com/brc-dd.png" width="40" height="40">](https://github.com/brc-dd)

もしこのプロジェクトを支援したいなら、改善点を提供したり、他人に共有したり、あるいは [sponsoring](https://github.com/sponsors/slevithan) 進行中の開発に協力していただけると嬉しいです。

© 2024–present. CC BY 4.0。
