---
title: "Awesome LaTeX"
description: "LaTeXを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-egeerardyn-awesome-LaTeX-readme-md"
---

# Awesome LaTeX

LaTeXを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次



- [Awesome LaTeX](#awesome-latex--)
  - [目次](#contents)
  - [LaTeXを学ぶ](#learning-latex)
  - [ディストリビューション](#distributions)
  - [Dockerイメージ](#docker-images)
  - [エンジン](#engines)
    - [ウェブ上のLaTeX数式](#latex-formulas-on-the-web)
  - [エディター](#editors)
    - [LaTeX専用](#latex-focused)
    - [汎用テキストエディター](#general-purpose-text-editors)
    - [オンラインエディター](#online-editors)
  - [Language Server](#language-servers)
  - [文献管理ツール](#bibliography-tools)
  - [ビルドツール](#build-tools)
    - [GitHub Actions](#github-actions)
  - [その他のツール](#misc-tools)
    - [フォーマッター](#formatters)
    - [品質検査ツール](#quality-check-tools)
    - [数式関連ツール](#tools-centered-around-equations)
  - [LaTeX対応GUIツール](#latex-compatible-gui-tools)
  - [パッケージ](#packages)
    - [参考文献](#references)
    - [表](#tables)
    - [グラフィックス](#graphics)
      - [PSTricks](#pstricks)
      - [TikZ](#tikz)
    - [ソースコード](#source-code)
    - [タイポグラフィ](#typography)
    - [プレゼンテーション・スライド](#presentations-slides)
  - [テンプレート](#templates)
  - [記号](#symbols)
  - [資料](#resources)
  - [作例](#showcases)
  - [チュートリアル](#tutorials)
  - [書籍](#books)
  - [ブログ](#blogs)
  - [ソーシャルメディア](#social-media)
  - [Meta Awesome-LaTeX](#meta-awesome-latex)
  - [凡例](#legend)



<a id="learning-latex"></a>
## LaTeXを学ぶ

LaTeXを学ぶ方法を指南


<a id="distributions"></a>
## ディストリビューション

- [MacTeX](https://tug.org/mactex/) - macOS用の最も一般的なLaTeXディストリビューション。基本的にTeXLiveにMac用のツールを追加したもの。![mac]
- [TeX Live](https://www.tug.org/texlive/) - Unix系オペレーティングシステム（GNU/Linuxを含む）用の最も一般的なLaTeXディストリビューション。Windowsでも動作する。![linux] ![windows]
- [MikTeX](https://miktex.org) - Windows用の最も一般的なLaTeXディストリビューションだが、Mac、Linuxでも利用可能であり、Dockerイメージとして提供されている。![linux] ![windows] ![mac] ![foss]

<a id="docker-images"></a>
## Dockerイメージ

インストールせずに即実行可能なLaTeX環境を構築したい場合、Dockerイメージが選択肢になるでしょう。

- [reitzig/texlive-docker](https://github.com/reitzig/texlive-docker) - 最小限のTeXLiveシステムでパッケージインストールが可能
- [Island of TeX/texlive](https://gitlab.com/islandoftex/images/texlive) - デビアンベースの完全なTeXLiveシステム
- [dante-ev/docker-texlive](https://github.com/dante-ev/docker-texlive) - デビアンベースの完全なTeX及時システムにpandoc、perl、pythonが事前にインストールされている

<a id="engines"></a>
## エンジン

- [pdfTeX](https://www.tug.org/applications/pdftex/) - PDFファイルを即座に生成するTeXコンパイラ（現代では多くのユーザーにとって標準的なコンパイラ）。![foss]
- [XeTeX](http://xetex.sourceforge.net) - TeXコンパイラで、TeX/pdfTeXよりも優れたUnicodeおよびフォントサポートを提供（つまり、OSのフォントを使用できる）。![foss]
- [LuaTeX](https://www.luatex.org) - (La)TeXコンパイラでLuaコードによるスクリプトサポートがあり、標準TeX/pdfTeXよりも改善されたUnicodeおよびフォントサポートを提供。![foss]
- [tectonic](https://tectonic-typesetting.GitHub.io/en-US/) - 現代的な、自立型の(La)TeXコンパイラ。XeTeXとTeXLiveをベースにしている。![foss]

<a id="latex-formulas-on-the-web"></a>
### ウェブ上のLaTeX数式

- [Auto-LaTeX Equations with Google Docs](https://sites.google.com/site/autolatexequations) - Google Docsに高品質な数学式を直接レンダリング。
- [MathJaX](https://www.mathjax.org) - ウェブ上で数学式をレンダリングするJavaScriptエンジン。結果は非常に美しく見える。![foss]
- [mimeTeX](https://ctan.org/pkg/mimetex) - mimeTeXは、サーバーにLaTeXのインストールを必要とせずに、ウェブサイトにLaTeX式をPNG画像としてレンダリングする古いツール。![foss]
- [mathTeX](https://ctan.org/pkg/mathtex) - mathTeXはmimeTeXの後継。より美しく見える画像を生成するが、サーバーにLaTeXのインストールが必要。![foss]
- [KaTeX](https://khan.GitHub.io/KaTeX/) - Khan Academyが開発した数学レンダリングライブラリ。読み込み速度に重点を置いている。すべての出力は固定画像ではなく、プレーンHTMLとして処理される。![foss]
- [Franklin.jl](https://franklinjl.org/) - KaTeXをサポートし、コード評価、LaTeX風コマンド、オプションの事前レンダリングを提供する静的サイトジェネレーター（Juliaで構成）。![foss]
- [xhub](https://github.com/nschloe/xhub) - GitHub PagesでLaTeXを使用できるブラウザ拡張。![foss]

<a id="editors"></a>
## エディター

notepadでLaTeXコードを編集するのは素晴らしいものではありません。
多くのエディタが存在しますが、以下に最も素晴らしいエディタを紹介します。
LaTeXエディタの完全リストは、[tex.stackexchange.com](https://tex.stackexchange.com/)に[big list of LaTeX Editors/IDEs](https://tex.stackexchange.com/q/339/9075)として収集されています。

- [List of popular LaTeX editors](https://tex.stackexchange.com/questions/339/latex-editors-ides) - 人気LaTeXエディタのコミュニティが維持するリスト。スクリーンショットと短い説明を含む。

<a id="latex-focused"></a>
### LaTeX専用

LaTeXを編集するための最も素晴らしいエディタの多くは、まさにそのように機能しています：LaTeXを編集します。

- [Kile](https://kile.sourceforge.io) - Linux/KDEコミュニティから生まれた優れたLaTeXエディタ。WindowsやmacOSでも良好に動作する。![foss]
- [TeXMaker](https://www.xm1math.net/texmaker/) - Kileの良い代替案。
- [TeXStudio](https://www.texstudio.org) - テキストマーカーから生まれた、マルチプラットフォーム用LaTeXエディタ。
- [WinEdt](https://www.winedt.com) - 多くの人が称賛するLaTeXエディタ。![windows]
- [TeXnicCenter](https://www.texniccenter.org) - かなり古いが無料かつ十分なLaTeXエディタ。![windows]
- [LyX](https://www.lyx.org) - マルチプラットフォーム対応のWYSIWYMエディタで、内部ではLaTeXを使ってドキュメントをレンダリング。![foss]
- [TeXShop](https://pages.uoregon.edu/koch/texshop/) - MacTeXに含まれる、シンプルで分かりやすいLaTeXドキュメント用エディタ。![mac]
- [TeXWorks](https://www.tug.org/texworks/) - シンプルで、TeXShopをモデルにしたLaTeXコード用エディタ。このエディタはマルチプラットフォーム対応。![foss]
- [BakomaTex](https://www.bakoma-tex.com) - 商業用LaTeXエディタで、ソースコードとWYSIWYGの両方でドキュメントを編集可能。
- [Texifier](https://www.texifier.com/) - macOSおよびiOS用の商業用LaTeXエディタ。優れた機能（ドキュメントの概要表示、同期PDF表示、自動補完、デバイス間の同期など）を備えているが、執筆を妨げない。![mac]
- [TeX64](https://tex64.com) – ネイティブなmacOS用LaTeXエディタで、AIによるエラー修正、式のOCR、リアルタイムPDFプレビュー、構造化された数学編集をサポート。![mac]
- [Oleafly](https://github.com/Oleafly/Oleafly) - LaTeX、Typst、Markdownに対応する無料オープンソースのデスクトップエディタ。リアルタイムPDFプレビュー、SyncTeX、組み込みエンジン、Gitネイティブプロジェクトを備える。![foss]

<a id="general-purpose-text-editors"></a>
### 汎用テキストエディター

これらのエディタは、一つの特徴にとどまらないもので、確かにLaTeXを編集できますが、それ以外にも多くの機能を提供できます！

- [Atom](https://atom.io) [![Atom][awesome]](https://github.com/mehcode/awesome-atom) ![foss]
  - [LaTeXTools](https://atom.io/packages/latextools) - Sublime Textの同名パッケージをAtomに移植したエディタ。![foss]

- [Sublime Text](https://www.sublimetext.com) [![Sublime Text][awesome]](https://github.com/dreikanter/sublime-bookmarks)
  - [LaTeXing](https://github.com/LaTeXing/LaTeXing) - 無料のLaTeX編集プラグイン。![foss]
  - [LaTeXTools](https://github.com/SublimeText/LaTeXTools) - Sublime Text用の無料LaTeXプラグイン。![foss]

- [Emacs](https://www.gnu.org/software/emacs/)  [![Emacs][awesome]](https://github.com/emacs-tw/awesome-emacs) ![foss]
  - [AucTeX](https://www.gnu.org/software/auctex/) - LaTeX用のEmacsプラグインで、式と図のプレビューを表示。![foss]
  - [RefTeX](https://www.gnu.org/software/auctex/reftex) - LaTeX用のEmacsプラグインで、ラベル、参照、引用のサポートを追加。![foss]

- [Vim](https://www.vim.org) [![Vim][awesome]](https://github.com/mhinz/vim-galore) ![foss]
  - [Vim-LaTeX](http://vim-latex.sourceforge.net) ![foss]
  - [LaTeX Live Preview](https://github.com/xuhdev/vim-latex-live-preview) - LaTeXドキュメントを即時プレビュー。![foss]
  - [vimtex](https://github.com/lervag/vimtex) - 現代的なvimプラグインでLaTeXファイルを編集。ライブプレビューや前向き検索などのさまざまな機能を備えている。![foss]

- [IntelliJ](https://www.jetbrains.com/idea/)
  - [TeXiFy-IDEA](https://github.com/Hannah-Sten/TeXiFy-IDEA) - IntelliJ IDEA用の無料LaTeXプラグイン。![foss]

- [VS Code](https://code.visualstudio.com/) [![VS Code][awesome]](https://github.com/viatsko/awesome-vscode) ![foss]
  - [LaTeX Workshop](https://github.com/James-Yu/LaTeX-Workshop) - Visual Studio Code用のLaTeX拡張機能 ![foss]
  - [a-nau/latex-devcontainer](https://github.com/a-nau/latex-devcontainer) - ローカルインストールなしでLaTeXを使うためのDevcontainer設定 ![foss]

<a id="online-editors"></a>
### オンラインエディター

共同編集が可能なオンラインエディタです。

- [List of popular online LaTeX editors](https://tex.stackexchange.com/questions/3/compiling-documents-online/1654#1654) - 人気オンラインLaTeXエディタ（式編集器を含む）のコミュニティが維持するリスト。
- [Authorea](https://www.authorea.com) - Gitサポートと参考文献ツールを備えたオンラインエディタ。
- [OpenAI Prism](https://prism.openai.com) - リアルタイムコラボレーション機能を備えたオンラインエディタ。
- [Modern LaTeX Editor](https://github.com/InMDev/Modern-LaTeX-Editor) - サインアップ不要のハイブリッドコードエディタ＋視覚エディタ。Notion／Googleドキュメント／Microsoft Wordのような編集と原始的なLaTeXコードブロックを組み合わせたもの。
- [Octree](https://www.useoctree.com) - AIによる文章作成支援を備えたオンラインエディタ。
- [Androma TeX Editor](https://androma.org) - 数学Wikiに統合されたコラボレートLaTeXエディタ。問題追跡、プルリクエスト、WASMベースのコンパイル機能を備えている。
- [Overleaf](https://www.overleaf.com) - オンラインエディタで、WYSIWYMエディタとGitサポートを備えている。また、[Overleaf Community Edition](https://github.com/overleaf/overleaf)（セルフホスト、AGPLライセンス）としても利用可能。![foss]
  - [olcli](https://github.com/aloth/olcli) - Overleafとのコマンドラインインターフェースで、プロジェクトの同期、管理、コンパイルをターミナルから行える。![foss]
- [SciTeX Cloud](https://github.com/ywatanabe1989/scitex-cloud) - AIアシスタント統合、図／表／引用管理、リアルタイムコラボレーション、MCPサーバー（29ツール）を備えたセルフホスト可能なオンラインエディタ。![foss]
- [WebLaTeX](https://github.com/sanjib-sen/weblatex) - GitHub CodespaceおよびDevコンテナに基づくWebベースのVSCode。Git統合＋Copilot＋文法・スペルチェック＋リアルタイムコラボレーションサポート。
- [Papeeria](https://papeeria.com) - Gitサポートを備えたオンラインエディタ。
- [JaxEdit](https://zohooo.GitHub.io/jaxedit/) - ライブプレビューと良好なプレゼンテーションモードを備えたオンラインLaTeXエディタ。
- [Vexlio](https://vexlio.com/) - LaTeX式サポートを備えたオンライン図形エディタ。ライブプレビューと簡単なエクスポートを提供。
- [TeXbrain](https://tex.swimmingbrain.dev) - ブラウザベースの無料オープンソースLaTeXエディタ。ブラウザ内でのコンパイル、ライブPDFプレビュー、Git統合を提供。アカウントやインストール不要。![foss]
- [LetX](https://letx.app) - オンラインエディタでリアルタイムマルチ著者協働（CRDT）、両方向SyncTeX、1000以上のジャーナル／論文テンプレートを提供
- [Sarmate.net](https://www.sarmate.net) - 5つの組み込みWYSIWYGヘルパー（TikZ図、確率樹、符号表、色ボックス、LaTeXテーブル）を備えたオンラインエディタ。自動的にクリーンなLaTeXコードを生成。クラウドコンパイル、リアルタイム協働、無料プランを提供

<a id="language-servers"></a>
## Language Server

言語サーバーは、[Language Server Protocol](https://microsoft.github.io/language-server-protocol/)をサポートする任意のエディタ（例：Neovim、VS Code、Emacs、Helix）に、IDEの機能（補完、診断、ナビゲーションなど）を提供します。

- [TexLab](https://github.com/latex-lsp/texlab) - LaTeXおよびBibTeX向けの言語サーバー。補完、定義、参照、名前変更、フォーマット、前向き検索を提供。![foss]
- [Badness](https://github.com/jolars/badness) - LaTeX向けの言語サーバー、フォーマッター、リントツール。rust-analyzerスタイルの損失なし・エラー許容構文木をベースに構築。![foss]

<a id="bibliography-tools"></a>
## 文献管理ツール

- [JabRef](https://www.jabref.org) - 非常に強力なマルチプラットフォーム（Java）bibtexエディタ。![mac] ![windows] ![linux] ![foss]
- [Papis](https://github.com/papis/papis) - 非常にカスタマイズ可能で、強力かつシンプルなマルチプラットフォーム（Python）ライブラリマネージャー。非常に完全なコマンドラインインターフェース、複数のGUI、スクリプティング機能を備えている。![linux] ![mac] ![foss]
- [Bibdesk](http://bibdesk.sourceforge.net) - ![mac]向けに優れた参考文献エディタ
- [Zotero](https://www.zotero.org) - ブラウザに搭載された参照マネージャー。BibTeXへのエクスポートおよび多くのLaTeXエディタとの統合を提供。![mac] ![windows] ![linux] ![foss]
- [Mendeley](https://www.mendeley.com) - アプリケーションおよびクラウドクライアントとして、あなたの参照およびPDFを管理できます。LaTeXワークフローにBibTeXファイルとして同期可能です。![mac] ![windows] ![linux]
- [betterbib](https://github.com/nschloe/betterbib) - BibTeXファイルを改善するためのコマンドラインツール。オンラインソースから情報を取得。![mac] ![windows] ![linux] ![foss]
- [OneCite](https://github.com/HzaCode/OneCite) - すべての引用管理および学術参考文献ツールキット。混乱した参考文献を完璧にフォーマットされた引用に変換。DOI、arXiv ID、タイトルなどに対応し、出力はBibTeX、APA、MLA形式。![mac] ![windows] ![linux] ![foss]
- [CrossRef Local](https://github.com/ywatanabe1989/crossref-local) - ローカルなCrossRefデータベース（167M論文）を備え、全文検索、影響因子データ、BibTeXの豊富な補完用Python API、MCPサーバー（15ツール）を提供。![foss]
- [OpenAlex Local](https://github.com/ywatanabe1989/openalex-local) - ローカルなOpenAlexデータベース（284Mの学術作品）を備え、抽象および意味検索による文献発見を可能にし、MCPサーバーを提供。![foss]

<a id="build-tools"></a>
## ビルドツール

LaTeXドキュメントのコンパイルは面倒です。ビルドツールは、コンパイルプロセスを管理するのに役立ちます。

- [Arara](https://www.ctan.org/pkg/arara) ([GitHub repo](https://github.com/islandoftex/arara)) - ドキュメント内に呼び出すツールを指定できるシンプルツール。拡張が非常に容易。![foss]
- [latexmk](https://www.ctan.org/pkg/latexmk) - 多くのLaTeXエディタ（LaTeXing、TeXShopなど）が使用するビルドツール。LaTeXファイルのビルドに使用。![foss]

<a id="github-actions"></a>
### GitHub Actions

- [xu-cheng/latex-action](https://github.com/xu-cheng/latex-action) - LaTeXドキュメントのコンパイルを実行するGitHubアクション
- [dante-ev/latex-action](https://github.com/dante-ev/latex-action) - DANTE e.V.のGitHubアクションでLaTeXドキュメントをコンパイル。完全なTeXLiveと事前インストール済みのperlおよびpythonを提供

<a id="misc-tools"></a>
## その他のツール

- [CaTeX](https://github.com/Alexis-benoist/CaTeX) - LaTeXドキュメントを結合し、プレアンブルの適切なマージを考慮した処理を実行
- [Pandoc](https://pandoc.org) - このプログラムはほぼすべてのドキュメントフォーマット（LaTeX、DOC、マーカードなど）をほぼすべての他のフォーマットに変換できます。複数フォーマットを使用するワークフローを支援する素晴らしいツールです。![foss]
- [SciTeX Writer](https://github.com/ywatanabe1989/scitex-writer) - マニュスクリプトコンパイルシステム。マニュスクリプト、修正、補足資料のテンプレートを提供し、図、表、引用の処理、およびMCPサーバー（38ツール）を備えています。![foss]

<a id="formatters"></a>
### フォーマッター

フォーマッタは、LaTeXソースのレイアウトを一貫性を持たせてくれるので、内容に集中できます。

- [latexindent](https://ctan.org/pkg/latexindent) - PerlスクリプトでLaTeXドキュメントをインデントし、フォーマットするツール。YAML設定で高度にカスタマイズ可能であり、主要なTeXディストリビューションに同梱されている。![foss]
- [tex-fmt](https://github.com/WGUNDERWOOD/tex-fmt) - Rustで書かれた非常に高速なLaTeXフォーマッター。妥当なデフォルト設定と最小限の設定で動作。![foss]
- [Badness](https://github.com/jolars/badness) - Rustで書かれた決定論的、ルールベース、そしてidempotentなLaTeXフォーマッター（また、リーダーおよび言語サーバーも提供）。![foss]

<a id="quality-check-tools"></a>
### 品質検査ツール

- [ChkTeX](https://www.nongnu.org/chktex/) - LaTeXドキュメント向けのリーダー／コードチェックツール。![foss]
- [blacktex](https://github.com/nschloe/blacktex) - コマンドラインツールで、よく見られるLaTeXの反パターンを置き換え、ファイルを整理する。![windows] ![linux] ![mac] ![foss]
- [TeXtidote](https://github.com/sylvainhalle/textidote) - 跨プラットフォーム（Java）によるLaTeXドキュメント向けのスペル、文法、スタイルチェックツール。![windows] ![linux] ![mac] ![foss]
- [Badness](https://github.com/jolars/badness) - エラーチョークなLaTeXリーダーで、豊かな診断とソーススニペットを提供（また、フォーマッターおよび言語サーバーも提供）。![foss]
- [latex2arxiv](https://github.com/YuZh98/latex2arxiv) - コマンドラインツールで、arXiv投稿に向けたLaTeXプロジェクトを準備：未使用ファイルを削除、ドラフトマーカーを除去、参考文献を検証し、アップロード前に拒絶されるエラーを検出。GitHub ActionおよびAIエージェント向けのMCPサーバーとしても利用可能。![windows] ![linux] ![mac] ![foss]

<a id="tools-centered-around-equations"></a>
### 数式関連ツール

- [Codecogs Eqn Editor](https://editor.codecogs.com/) - オンラインLaTeX式エディタで、式を含む図を生成できる。
- [EqualX](https://equalx.sourceforge.io/) - グラフィカルLaTeX式エディタ。![windows] ![linux] ![foss]
- [KLaTeXFormula](https://klatexformula.sourceforge.io) - LaTeXitの跨プラットフォーム代替ツール。![foss]
- [Laeqed](https://www.thrysoee.dk/laeqed/) - 跨プラットフォームLaTeX式をPNGに変換するツール。![windows] ![linux] ![mac] ![foss]
- [LaTeXEqEdit](http://latexeqedit.sourceforge.net/) - Windows向けLaTeX式エディタ。![windows] ![foss]
- [LaTeXiT](https://www.chachatelier.fr/latexit/) - LaTeXitは、Mac上で非LaTeXドキュメントにPDF、PNGなどとしてレンダリングされた式をドラッグ＆ドロップで簡単に挿入できる式エディタ。![mac]
- [LaTeX to Image](https://thomasahle.com/latex2png/) - LaTeXをPNG、JPEG、またはSVG画像に変換。大きな記号メニューと簡単なドラッグ＆ドロップ式の入力。
- [pix2tex](https://lukas-blecher.github.io/LaTeX-OCR/) - LaTeX OCR ![windows] ![linux] ![mac] ![foss]
- [Image to LaTeX](https://www.underleaf.ai/tools/image-to-latex) - AIを活用した変換ツールで、手書きノート、式、または表の画像をクリーンなLaTeXコードに変換。

<a id="latex-compatible-gui-tools"></a>
## LaTeX対応GUIツール

- [TikzEdt](https://www.tikzedt.org) (また： [GitHub repo](https://github.com/hchapman/tikzedt)) - TikZ図のWYSIWYGおよびテキストベースエディタ。![foss]
- [TikZ-Editor](https://github.com/fredokun/TikZ-Editor) - TikZ図のライブプレビュー編集ツール。![mac] ![linux] ![foss]
- [IPE](https://ipe.otfried.org) - LaTeXコマンドやドキュメントと良好に統合された描画ツール。![foss]
- [GeoGebra](https://www.geogebra.org/) - クロスプラットフォームの幾何学ツールでTikZ出力。![foss]
- [Dia](https://wiki.gnome.org/Apps/Dia) - クロスプラットフォームの図解ツールでPSTricksおよびMetaPostコード出力可能。![foss]
- [TikZiT](https://tikzit.GitHub.io) - PGF/TikZを使用してグラフや文字図を生成するGUIツール。![windows] ![linux] ![mac] ![foss]
- [LaTeXDraw](https://latexdraw.sourceforge.net/) - ベクターベースの描画ツールでLaTeXが第一の存在。![windows] ![linux] ![mac] ![foss]

<a id="packages"></a>
## パッケージ

- [CTAN](https://www.ctan.org) - The Comprehensive TeX Archive Networkは、有用なパッケージやドキュメントを検索する場所です。

<a id="references"></a>
### 参考文献

- [Cross-reference packages explained](https://tex.stackexchange.com/a/36312/9075) - 参照用パッケージ（cleveref, varioref, theoremref, namerefなど）についての詳細：どのものを使うべきか、どのものが衝突するか？

<a id="tables"></a>
### 表

- [Excel2LaTeX](https://www.ctan.org/pkg/excel2latex?lang=en) - Excel（2010以前）のマクロでLaTeX `tabular`コードを生成。![windows] ![mac]
- [csv2latex](http://freshmeat.sourceforge.net/projects/csv2latex) - あなたの好きなプログラムからCSVファイルを変換し、LaTeX `tabular`に変換。![linux] ![mac]
- [Tables Generator](https://www.tablesgenerator.com) - このウェブサイトはテーブルを入力するためのグラフィカルインターフェースを提供し、LaTeX、Markdown、HTMLなどに適切にフォーマットされたコードを生成します。
- [pgfplotstable](https://www.ctan.org/pkg/pgfplotstable?lang=en) - このパッケージは、さまざまな表示形式で指定された精度に丸められた数値表を表示し、CSVファイルを読み込み、LaTeXドキュメントに直接埋め込むことができます。

<a id="graphics"></a>
### グラフィックス

<a id="pstricks"></a>
#### PSTricks

PSTricksは、PostScript/DVIファイルに図を埋め込むために使える素晴らしいライブラリです。

<a id="tikz"></a>
#### TikZ

TikZは、多くのプラグインを備えた素晴らしいパッケージで、LaTeXドキュメント内から図を作成できます。
通常、`pdflatex`を使うのはPSTricksよりも簡単です。

- [TeXample](https://www.texample.net) - LaTeXに関するブログで、多くのTikZ図を収録しています。
- [pgfplots](http://pgfplots.sourceforge.net) - TikZ/pgfのスタイルに従った本当に素晴らしいプロットライブラリ。このライブラリはCSVデータファイルを読み込み、計算を行い、美しいプロットを作成できます。
- [A very minimal introduction to TikZ (PDF)](https://cremeronline.com/LaTeX/minimaltikz.pdf) - ジャコクス・クリーマーが執筆したTikZ世界への導入ドキュメント。
- [PetarV-/TikZ](https://github.com/PetarV-/TikZ) - ペタール・ヴェリチコヴィッチが提供する、出版用のPGF/TikZ図のコレクション。
- [matlab2tikz](https://github.com/matlab2tikz/matlab2tikz) - MATLABのプロットをPGFPlots/TikZに変換。![windows] ![linux] ![mac] ![foss]
- [tikzplotlib](https://github.com/nschloe/tikzplotlib) - matplotlibのプロットをPGFPlots/TikZに変換。![windows] ![linux] ![mac] ![foss]
- [TikZBlog](https://latexdraw.com) - LaTeXでイラストを描く方法についてのステップバイステップチュートリアル。
- [OpenTikZ](https://github.com/opentikz/opentikz) - コミュニティが提供するコピー可能なTikZアイコンと、学術的な概念図（システム/アーキテクチャ、パイプライン、フロー図）用の編集可能でパラメータ化されたテンプレート。CC0コンテンツで、必要に応じてクラウドコードスキルで図を編集可能です。![foss]

<a id="source-code"></a>
### ソースコード

- [minted](https://www.ctan.org/pkg/minted) - mintedパッケージは [pygments](https://pygments.org/)を使用してリストを生成します。これにより、LaTeXは300以上のプログラミング言語やマークアップ言語、その他テキストフォーマットをフォーマットできます。

<a id="typography"></a>
### タイポグラフィ

- [microtype](https://ctan.org/pkg/microtype) - このパッケージは、マージンキルニングとフォント拡張を有効にすることで、ドキュメントの見た目を改善します。

<a id="presentations-slides"></a>
### プレゼンテーション・スライド

- [nics](https://nics.nilcons.com/) - Beamerに対する主張の強い代替ツールで、共通のタスクを非常に簡単かつデフォルトで美しく表現できるように作成しました。素晴らしいドキュメンテーションと詳細なクイックリファレンスを提供し、始め方をサポートしています。

<a id="templates"></a>
## テンプレート

- [LaTeX templates](https://www.latextemplates.com) - LaTeX用の論文、ポスター、履歴書、論文、書籍、プレゼンテーションなど、さまざまなテンプレートのコレクション。
- [Ultimate Beamer Theme List](https://github.com/martinbjeldbak/ultimate-beamer-theme-list) - BeamerのテーマへのリンクとPDFプレビュー。
- [LaTeX Beamer Theme Overview](https://github.com/UweZiegenhagen/LaTeX-Beamer-Theme-Overview/blob/main/OVERVIEW.md) - TeXLiveに含まれるBeamerテーマの視覚的な概要。
- [TeXtured](https://github.com/jdujava/TeXtured) - タイプグラフィック的に洗練され、シンプルで構造的なLaTeXテンプレート（主に論文用）。

<a id="symbols"></a>
## 記号

- [Comprehensive LaTeX symbol list](https://www.ctan.org/tex-archive/info/symbols/comprehensive/) - LaTeX用の非常に広範なシンボルリスト。[A4](https://mirrors.ctan.org/info/symbols/comprehensive/symbols-a4.pdf)および[letter](https://mirrors.ctan.org/info/symbols/comprehensive/symbols-letter.pdf)サイズで提供されています。
- [Detexify](https://detexify.kirelabs.org/classify.html) - シンボルを描くと、このサイト／アプリがLaTeXコマンドを教えてくれます。

<a id="resources"></a>
## 資料

- [TUG](https://www.tug.org) - TeXユーザーグループは、他の（La）TeXユーザーとつながるための方法です。
- [TeXDoc](https://texdoc.net) - オンラインインターフェースによる`texdoc`ユーティリティでLaTeXパッケージとドキュメンテーションを閲覧できる機能。
- [Dickimaw Books: LaTeX resources](https://www.dickimaw-books.com/latexresources.html) - LaTeXに役立つリソースの素晴らしい概要。
- [LaTeX cookbook](https://latex-cookbook.net) - TeXampleの兄弟プロジェクトで、かなりの量のサンプルコードを含んでいます。
- [Visual FAQ](https://ctan.org/pkg/visualfaq) - タイプ設定に関する問題と、適切なTeX FAQへのリンク。
- [MartinThoma's LaTeX example](https://github.com/MartinThoma/LaTeX-examples/) - 例としてのLaTeXドキュメントを含むGitHubリポジトリ。
- [LaTeX community](https://latex.org/forum) - LaTeXに関するフォーラム。
- German: [Neue TeX FAQ](https://texfragen.de) - ドイツ語で現代的かつ更新されたLaTeX FAQ。
- [BibTeX Style Examples](http://www.cs.stir.ac.uk/~kjt/software/latex/showbst.html) - 一般的なBibTeXスタイル（BSTファイル）の例出力。
- [TeX World](https://tex.world/) -  TeXユーザーグループ、DANTE、GUTenbergがサポートするウェブサイト。
- [TeXnique](https://texnique.xyz) - LaTeXによるタイプ設定ゲーム。

<a id="showcases"></a>
## 作例

- [Showcase of beautiful typography done in TeX & friends](https://tex.stackexchange.com/questions/1319/showcase-of-beautiful-typography-done-in-tex-friends) - LaTeXの力を示す例の集合。
- [Showcase of beautiful invitations in TeX](https://tex.stackexchange.com/q/281415/9075) - LaTeXで作成された招待状のショーケース。
- [Showcase of "programming your document" paradigm](https://tex.stackexchange.com/q/219774/9075) - LaTeXドキュメントのコレクションで、LaTeXがプログラミング言語のように使用できる方法を示している.
- [TUG: TeX showcase](https://www.tug.org/texshowcase/) - TUGから提供されるウェブサイトで、LaTeXが何ができるかを示す例がいくつか掲載されている.
- [Awesome LaTeX drawing](https://github.com/xinychen/awesome-latex-drawing) - LaTeXを使って図を描くための学術的な例のキュレーションされたリスト

<a id="tutorials"></a>
## チュートリアル

- [LearnLaTeX.org](https://www.learnlatex.org/) - ブラウザ上で利用可能なLaTeXチュートリアル
- [The (Not So) Short Introduction to LaTeX2e](https://mirrors.ctan.org/info/lshort/english/lshort.pdf) - LaTeXについて非常に包括的な紹介
- [Begin LaTeX in minutes](https://github.com/luong-komorebi/Begin-Latex-in-minutes) - 初心者向けのLaTeXの簡潔な紹介で、LaTeXを使う際に便利です.
- [Getting to Grips with LaTeX](https://www.andy-roberts.net/writing/latex) - LaTeXについて必要な大部分の知識を順を追って解説した完全ガイド
- [LaTeX introductions in languages other than English](https://tex.stackexchange.com/questions/84384/latex-introductions-in-languages-other-than-english/84385) - 多くの言語で書かれた紹介ドキュメントのコレクション

<a id="books"></a>
## 書籍

- [Wikibooks: LaTeX](https://en.wikibooks.org/wiki/LaTeX) - LaTeXのWikiブック。実際には紙の本ではなく、内容が非常に豊富です.
- [The LaTeX Companion, F. Mittelbach (2004)](https://www.informit.com/store/latex-companion-9780201362992)
- [LaTeX Graphics Companion, M. Goossens (2007)](https://www.informit.com/store/latex-graphics-companion-9780321508928)
- [TeX by Topic (2007)](https://ctan.org/pkg/texbytopic)
- [TeX for the Impatient (2020)](https://ctan.org/pkg/impatient)
- [Formatting Information (2020)](https://latex.silmaril.ie/formattinginformation) - このページは、*Formatting Information - An introduction to typesetting with LATEX* という書籍のHTML5ベースのオンライン版であり、2000年代初頭から継続的に更新されています.

<a id="blogs"></a>
## ブログ

- [TeXblog](https://texblog.net) - LaTeXおよび関連するすべての話題についてのブログ
- [texblog.org](https://texblog.org) - LaTeXおよび関連トピック（チュートリアル、パッケージ、コードスニペットなど）に関するブログ
- [TeX Talk](https://tex-talk.net) - TeX Stack Exchangeサイト向けのブログで、ニュースやインタビューを掲載しています.
- [TeX Hour](https://texhour.github.io/) - 週に1回開催されるビデオミーティング

<a id="social-media"></a>
## ソーシャルメディア

- [LinkedIn: TeX/LaTeX User Group](https://www.linkedin.com/groups/1600297)
- [Twitter: @TeXtip](https://twitter.com/TeXtip) - [John D. Cook](https://www.johndcook.com/)による(La)TeXに関するヒント
- [TeX.StackExchange](https://tex.stackexchange.com) - StackExchange TeXセクション
- [TopAnswers TeX](https://topanswers.xyz/tex) - TeXおよびその関連技術についての無料かつオープンソースのQ&Aサイト

---



<a id="meta-awesome-latex"></a>
## Meta Awesome-LaTeX

ご寄付をご希望の方は、私たちの [CONTRIBUTING](https://github.com/egeerardyn/awesome-LaTeX/blob/649d5293a16afcb0d91cd98cdc68da1248784f93/CONTRIBUTING.md)ガイドラインをぜひお読みください。

<a id="legend"></a>
## 凡例

マック、Linux、Windowsの互換性を示すアイコンは、プログラムがそのプラットフォームに*のみ*提供されている場合に表示されます。したがって、そのアイコンが表示されていないということは、ソフトウェアが完全にクロスプラットフォームに対応していることを意味します。

|       Logo          | Description                                            |
|:-------------------:|:-------------------------------------------------------|
| ![mac]              | [macOS](https://www.apple.com/macos)                   |
| ![linux]            | [GNU/Linux](https://www.gnu.org)                       |
| ![windows]          | [Microsoft Windows](https://www.microsoft.com/windows) |
| ![FOSS]             | [Free Open-Source Software](https://opensource.org)    |

---

すべての商標はそれぞれの所有者に帰属しています。

[mac]: https://cdn.jsdelivr.net/gh/egeerardyn/awesome-LaTeX@700138fe725574e1741f148df6d1f77a8aa07eee/fig/apple.svg
[linux]: https://cdn.jsdelivr.net/gh/egeerardyn/awesome-LaTeX@700138fe725574e1741f148df6d1f77a8aa07eee/fig/linux.svg
[windows]: https://cdn.jsdelivr.net/gh/egeerardyn/awesome-LaTeX@700138fe725574e1741f148df6d1f77a8aa07eee/fig/windows.svg
[foss]: https://cdn.jsdelivr.net/gh/egeerardyn/awesome-LaTeX@700138fe725574e1741f148df6d1f77a8aa07eee/fig/foss.svg
[awesome]: https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
