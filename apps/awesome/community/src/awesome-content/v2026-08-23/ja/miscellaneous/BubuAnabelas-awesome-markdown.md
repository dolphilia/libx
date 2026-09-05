---
title: "Awesome Markdown"
description: "Markdownを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-BubuAnabelas-awesome-markdown-readme-md"
---

# Awesome Markdown

Markdownを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Awesome Markdown ![Awesome](https://github.com/sindresorhus/awesome)](#awesome-markdown-awesomehttpsgithubcomsindresorhusawesome)
  - [目次](#contents)
  - [CMS／ブログ](#cms--blogs)
  - [ライブラリ](#libraries)
    - [C](#c)
    - [Java](#java)
    - [JavaScript](#javascript)
    - [Perl](#perl)
    - [PHP](#php)
    - [Python](#python)
    - [Ruby](#ruby)
  - [ツール](#tools)
    - [変換器](#converters)
    - [エディター](#editors)
    - [リンター](#linters)
    - [その他](#miscellaneous)
    - [プレゼンテーション](#presentations)
  - [サービス](#services)
  - [リソース](#resources)
    - [ドキュメント](#documentation)
    - [チュートリアル](#tutorials)
  - [ライセンス](#license)

---





## CMS／ブログ

> 既定でMarkdownをサポートするCMSまたはブログ。

- [Ghost](https://blog.ghost.org/markdown/) - プロのブロガー向け公開プラットフォーム。
- [Grav](https://getgrav.org/) - モダンなフラットファイルCMS。
- [Hexo](https://hexo.io/) - 高速、簡潔、強力なブログフレームワーク。
- [Hugo](https://gohugo.io/) - 高速でモダンな静的Webサイトエンジン。
- [Jekyll](https://jekyllrb.com/) - プレーンテキストを静的Webサイトやブログへ変換する。
- [Pelican](https://blog.getpelican.com/) - データベースやサーバーサイドロジックを必要としない静的サイトジェネレーター。
- [Svbtle](https://svbtle.com/) - 思考を助けるよう設計されたブログプラットフォーム。
- [Vuepress](https://vuepress.vuejs.org/) - Vueを活用した最小限の静的サイトジェネレーター。
- [Laravel CommonMark Blog](https://github.com/spekulatius/laravel-commonmark-blog) - Laravelで使う静的ジェネレーター。CommonMarkとFrontMatterを利用し、`public`フォルダへ直接公開する。

## ライブラリ

> Markdown文書をレンダリングするためのライブラリ。

### C

- [cmark](https://github.com/commonmark/cmark) - Cで書かれたCommonMarkの解析・レンダリングライブラリおよびプログラム。
- [Hoedown](https://github.com/hoedown/hoedown) - 標準準拠、高速、安全なCのMarkdown処理ライブラリ（Sundownフォーク）。
- [peg-markdown](https://github.com/jgm/peg-markdown) - PEG文法を使うCでのMarkdown実装。
- [Sundown](https://github.com/vmg/sundown) - 標準準拠、高速、安全なCのMarkdown処理ライブラリ。

### Java

- [commonmark-java](https://github.com/atlassian/commonmark-java) - Markdown形式の仕様であるCommonMarkのJava実装。
- [flexmark-java](https://github.com/vsch/flexmark-java) - ソースレベルASTを持つMarkdownパーサーのJava実装。
- [pegdown](https://github.com/sirthias/pegdown) - 多数の拡張をサポートする、parboiled PEGパーサーに基づく純粋なJava製Markdownプロセッサー。

### JavaScript

- [markdown-it](https://github.com/markdown-it/markdown-it) - 正しく実装されたMarkdownパーサー。100% CommonMarkサポート、拡張、構文プラグイン、高速性を備える。
- [markdown-js](https://github.com/evilstreak/markdown-js) - 今度はJavaScript向けの、もう一つのMarkdownパーサー。
- [marked](https://github.com/markedjs/marked) - JavaScriptで書かれ、高速性を重視したフル機能Markdownパーサー・コンパイラー。
- [mmarkdown](https://github.com/albinotonnina/mmarkdown) - Markdownファイル内のmmdフェンスコードブロックを解釈し、より優れた版を生成する。
- [Showdown](https://github.com/showdownjs/showdown) - John Gruberの元の成果物に基づくJavaScript製MarkdownからHTMLへの変換器。
- [Snarkdown](https://github.com/developit/snarkdown) - 非常にシンプルな1kbのMarkdownパーサー。

### Perl

- [Markdown.pl](https://daringfireball.net/projects/downloads/Markdown_1.0.1.zip) :gem: _John GruberによるオリジナルのMarkdownライブラリ。_

### PHP

- [commonmark](https://github.com/thephpleague/commonmark) - CommonMarkとGFM仕様を完全にサポートする、拡張性の高いPHP Markdownパーサー。
- [parsedown](https://github.com/erusev/parsedown) - PHP向けのより優れたMarkdownパーサー。
- [php-markdown](https://github.com/michelf/php-markdown) - John GruberのオリジナルMarkdown.plから派生したMarkdownおよびMarkdown Extra向けパーサー。

### Python

- [markdown-it-py](https://github.com/executablebooks/markdown-it-py) - 正しく実装されたMarkdownパーサー。100% CommonMarkサポート、拡張、構文プラグイン、高速性を備える。Pythonで利用可能。
- [markdown2](https://github.com/trentm/python-markdown2) - Pythonによる高速かつ完全なMarkdown実装。
- [Mistune](https://github.com/lepture/mistune) - レンダラー機能を持つ、純粋なPython製で最速のMarkdownパーサー。
- [PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/) - Python Markdown向け拡張のコレクション。
- [Python-Markdown](https://github.com/Python-Markdown/markdown) - John GruberのMarkdownのPython実装。

### Ruby

- [kramdown](https://github.com/gettalong/kramdown) - 厳格な構文定義を使用し、複数の一般的な拡張をサポートする、高速な純粋Ruby製Markdownスーパーセット変換器。
- [Redcarpet](https://github.com/vmg/redcarpet) - 蝶とポップコーンのような香りがする、Markdown処理用Rubyライブラリ。

## ツール

### 変換器

> Markdownをほかの形式へ、またはその逆へ変換する。

- [csvtomd](https://github.com/mplewis/csvtomd) - CSVファイルをMarkdown表へ変換する。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Dimer Markdown](https://github.com/dimerapp/markdown) - MarkdownをHTMLまたはJSONへ変換する。 ![Globe][globe] ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [HTML To Markdown for PHP](https://github.com/thephpleague/html-to-markdown) - PHPでHTMLをMarkdownへ変換する。
- [markdown-pdf](https://github.com/alanshaw/markdown-pdf) - MarkdownからPDFへの変換器。
- [Markdown to PDF](https://www.markdowntopdf.com/) - MarkdownをPDFへ変換する簡潔で便利なWebサイト。 ![Globe][globe]
- [Pandoc](https://pandoc.org/) - 汎用文書変換器。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Torsimany](https://github.com/PolBaladas/torsimany) - 形式に依存しないJSONを、スタイリッシュで人間が読みやすいMarkdownへ変換する。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [turndown](https://github.com/domchristie/turndown) - JavaScriptで書かれたHTMLからMarkdownへの変換器。
- [yamp](https://github.com/angrykoala/yamp) - Markdown関連タスク向けの使いやすいCLIツールボックス。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [clipboard2markdown](https://euangoddard.github.io/clipboard2markdown/) - コンテンツを貼り付けてMarkdown版を得るWebサイト。JavaScriptが有効なモダンブラウザで動作する。

### エディター

> Markdown文書を編集・保存する。

- [Abricotine](https://abricotine.brrd.fr/) - 組み込みのリアルタイムプレビューを備えた、Electron製軽量Markdownエディター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Caret](https://caret.io/) - MacおよびPC向けMarkdownエディター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [iA Writer](https://ia.net/writer) - Mac OS、iOS、Androidで最高の執筆体験を提供するよう設計されたiA Writer。 :gem: _非常にシンプルなエディター。_ ![Android OS][android-os] ![iOS Logo][ios-logo] ![Mac OS X][macosx]
- [Let's Markdown!](https://letsmarkdown.com) - Rustで構築されたオンラインのリアルタイム共同編集Markdownエディター。 ![Globe][globe]
- [Markdownify](https://markdownify.js.org) - 最小限のMarkdownエディター用デスクトップアプリ。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [MarkRight](https://github.com/dvcrn/markright) - 最小限のGitHub Flavored Markdownエディター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Mark Text](https://github.com/marktext/marktext/) - 次世代Markdownエディター（Electron製）。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [PileMd](https://pilemd.com/) - Markdownノートアプリ。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [StackEdit](https://stackedit.io/) - ブラウザ内Markdownエディター。 ![Globe][globe]
- [TOAST UI Editor](https://ui.toast.com/tui-editor/) - 拡張可能なGFM Markdown WYSIWYGエディター。 ![Globe][globe]
- [Typora](https://typora.io/) - 最小限のMarkdownエディター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Notable](https://notable.md/) - 優れたMarkdownベースのノートアプリ。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Boostnote](https://boostnote.io/) - 開発者向けMarkdownエディター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Trilium Notes](https://github.com/zadam/trilium) - 大規模な個人知識ベースの構築に焦点を当てた階層型ノートアプリケーション。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Joplin](https://joplinapp.org/) - 同期機能を備えたオープンソースのノート・To-Doアプリケーション。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows] ![iOS Logo][ios-logo] ![Android OS][android-os]
- [Visual Studio Code](https://code.visualstudio.com/) - 組み込みMarkdownプレビューと多数のMarkdown拡張を備えたオープンソースコードエディター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Quiver](http://happenapps.com/) - プログラマー向けに構築されたノートブック。 ![Mac OS X][macosx] ![iOS Logo][ios-logo]
- [Bear](https://bear.app/) - ノートと文章を作るための、美しく柔軟な執筆アプリ。 ![Mac OS X][macosx] ![iOS Logo][ios-logo]
- [Obsidian](https://obsidian.md/) - Mermaidサポートを持つノートブックエディター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Bangle.io](https://bangle.io/) - データをローカルにMarkdown形式で保存するNotion風ノート作成Webアプリ。 ![Globe][globe]

### リンター

> Markdown文書の問題を指摘し、標準化する。

- [Markdown Lint Tool](https://github.com/markdownlint/markdownlint) - Markdownファイルを確認し、スタイル上の問題を指摘するツール。
- [Markdownlint](https://github.com/igorshubovych/markdownlint-cli) - Markdown/CommonMarkファイル向けNode.jsスタイルチェッカー・lintツール。
- [remark-lint](https://github.com/remarkjs/remark-lint) - Markdownコードスタイルリンター。
- [textlint](https://textlint.github.io/) - テキストとMarkdown向けのプラグイン可能なlintツール。
- [markdownlint](https://github.com/DavidAnson/vscode-markdownlint) - Visual Studio Code用Markdown lint・スタイルチェック。

### その他

> Markdown文書を編集、変換、エクスポートなどするためのツール。

- [Dillinger](https://dillinger.io/) - Dillingerは、クラウド対応、モバイル対応、オフラインストレージ、AngularJSを活用したHTML5 Markdownエディター。 ![Globe][globe]
- [GitDown](https://github.com/gajus/gitdown) – GitHubのMarkdownプリプロセッサー。 :octocat:
- [HackMD](https://hackmd.io) - HackMDは、全プラットフォームでリアルタイム共同編集Markdownノートを作成できる。 ![Globe][globe]
- [Laverna](https://laverna.cc/) - LavernaはMarkdownエディターと暗号化サポートを備えたJavaScriptノートアプリケーション。 :gem: _暗号化付きMarkdownノート。_ ![Globe][globe] ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Markable.in](https://markable.in/) - 優れたMarkdownエディター。 ![Globe][globe]
- [markcat](https://github.com/BubuAnabelas/markcat) - Markdownファイルのターミナルビューア。 :gem: _Markdownハイライト付きの`cat`。_ ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [Markdown Magic](https://github.com/DavidWells/markdown-magic) - Markdownファイルを自動整形し、外部ドキュメント・srcコードを同期する。
- [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables) - CSVインポートに対応した視覚的Markdown表ビルダー。 ![Globe][globe]
- [mdformat](https://github.com/executablebooks/mdformat) - CommonMark準拠Markdownフォーマッター。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]
- [remark](https://remark.js.org/) - プラグインで動作するMarkdownプロセッサー。
- [Socrates](https://socrates.io/) - etherpad風のサーバーレスなリアルタイムMarkdownエディター・ビューア。 ![Globe][globe]
- [termd](https://github.com/dephraiim/termd) - 構文ハイライト付きのターミナル用Markdownレンダラー。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]


### プレゼンテーション

> Markdownでスライドプレゼンテーションを作成・編集する。

- [gitpitch](https://github.com/gitpitch/gitpitch/) - GitHub、GitLab、Bitbucket、GitBucket、Gitea、Gogsで使える、誰もが利用できるMarkdownプレゼンテーション。 ![Globe][globe]
- [hacker-slides](https://github.com/msoedov/hacker-slides) - Markdownからプレゼンテーションスライドを作るための最小限UI。 ![Mac OS X][macosx] ![Linux][linux]
- [Marp](https://marp.app/) - Markdownプレゼンテーションエコシステム。 :gem: _Markdownをさまざまな形式へ変換するCLI、Web、IDEプラグインなど。_ ![Mac OS][macosx] ![Linux][linux] ![Windows][windows]
- [mdp](https://github.com/visit1985/mdp) - コマンドラインベースのMarkdownプレゼンテーションツール。 :gem: _Markdownを使うPowerPointとVimのようなもの。_ ![Mac OS X][macosx] ![Linux][linux]
- [remark](https://remarkjs.com) - HTMLとCSSに慣れた人を対象とする、簡単なブラウザ内Markdown駆動スライドショーツール。 ![Globe][globe]
- [reveal.js](https://revealjs.com) - MarkdownをサポートするオープンソースHTMLプレゼンテーションフレームワーク。 ![Mac OS X][macosx] ![Linux][linux] ![Windows][windows]

## サービス

> Markdownを活用するさまざまなサービス。

- [Daux.io](https://daux.io) - Daux.ioは、単純なフォルダ構造とMarkdownファイルを使って、その場でカスタムドキュメントを作成するドキュメントジェネレーター。
- [Dimer](https://dimerapp.com/) - DimerはMarkdownからクリーンで美しいドキュメントWebサイトを生成する。 ![Globe][globe]
- [GitBook](https://www.gitbook.com/?t=1) - GitBookはモダンな公開ツールチェーン。執筆と共同作業の両方を容易にする。
- [GitPrint](https://gitprint.com/) - GitHub Markdownを簡単に印刷する。 ![Globe][globe]

## リソース

### ドキュメント

> Markdownに関するドキュメントと有用な情報。

- [CommonMark](https://commonmark.org/) - 強く定義され、高い互換性を持つMarkdown仕様。
- [GitHub Flavored Markdown Specifications](https://github.github.com/gfm/) - CommonMarkに基づくGitHub Markdownの正式仕様。
- [Original Specifications](https://daringfireball.net/projects/markdown/) :gem: _Markdownを始める場所。_
- [Pandoc’s Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) - [Pandoc](https://pandoc.org/)には独自の強力なMarkdown実装がある。複数の追加拡張から構成される。
- [ScholarlyMarkdown](http://scholarlymarkdown.com/) - ScholarlyMarkdownは、Web優先、セマンティックXMLを次点、LaTeX／Wordをその次とする、学術コミュニケーションの構文・標準・ベストプラクティス。
- [Stack Overflow Markdown Documentation (archived)](https://web.archive.org/web/20160724152503/https://stackoverflow.com/documentation/markdown/topics) - 整理されたMarkdownドキュメント。
- [Stack Overflow Markdown Questions](https://stackoverflow.com/questions/tagged/markdown) - Stack Overflowで高く評価されたMarkdownの質問。
- [The text/markdown Media Type (RFC7763)](https://tools.ietf.org/html/rfc7763) - 本文書は、プレーンテキスト書式構文の一群であるMarkdownで使用する`text/markdown`メディアタイプを登録する。
- [Wikipedia Article](https://en.wikipedia.org/wiki/Markdown)

### チュートリアル

> 有用なリンクとチュートリアル。

- [GitHub's Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [how-to-markdown](https://github.com/workshopper/how-to-markdown) - このワークショップはMarkdownの使い方を教える。
- [Interactive Markdown Tutorial](https://www.markdowntutorial.com/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) :gem: _構文を思い出せないときに見る場所。_
- [Markdown Guide](https://www.markdownguide.org) - 簡潔で基本的なMarkdownガイド。

---

_[Icon pack by Icons8](https://icons8.com)_

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律の及ぶ範囲で、[Joaquín Serna](https://github.com/BubuAnabelas)はこの著作物に対するすべての著作権および関連する権利・隣接権を放棄しています。



[globe]: https://img.icons8.com/color/24/globe.png 'Globe'
[android-os]: https://img.icons8.com/color/24/android-os.png 'Android OS'
[ios-logo]: https://img.icons8.com/color/24/ios-logo.png 'iOS Logo'
[macosx]: https://img.icons8.com/color/24/mac-logo.png 'Mac OS X'
[linux]: https://img.icons8.com/color/24//linux--v1.png 'Linux'
[windows]: https://img.icons8.com/color/24/windows-11.png 'Windows'
