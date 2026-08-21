---
title: "writing-resources/awesome-scientific-writing"
description: "writing-resources/awesome-scientific-writing の定本スナップショット"
licenseSource: "github-writing-resources-awesome-scientific-writing-readme-md"
---

# Awesome Scientific Writing [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> 科学的な文章作成はLaTeXだけにとどまりません。
> [Markdown](https://daringfireball.net/projects/markdown/)（およびその多様な方言）、
> [reStructuredText](https://docutils.sourceforge.io/rst.html)、
> [Jupyter notebooks](https://jupyter.org/)のような形式によって、それが可能になります。

:bookmark: は、**文献をシームレスに引用できる**ことを示します。

:link: は、**文書内の図と節を相互参照できる**ことを示します。

## 目次

- [ワードプロセッサ](#word-processors)
- [参考文献](#bibliography)
- [図版](#illustrations)
- [変換器とフィルター](#converters-and-filters)
- [スペルチェックとLint](#spell-checking-and-linting)
- [テンプレート](#templates)
  - [論文](#articles)
  - [書籍](#books)
- [チュートリアル](#tutorials)
- [その他のリスト](#other-lists)

## ワードプロセッサ

- [Marktext](https://github.com/marktext/marktext) - Markdownテキストエディター。
- [R Studio](https://github.com/rstudio/rstudio) - R用IDE。
  - [bookdown](https://github.com/rstudio/bookdown) - R Markdownで書籍、長文記事、レポートを執筆しやすくするRパッケージ :bookmark: :link:。
  - [R Markdown](https://rmarkdown.rstudio.com/) - Markdownの隣にRを書けるRパッケージ :bookmark: :link:。
- [Vim](https://www.vim.org/) - コマンドラインのテキストエディター。
  - [fzf-bibtex](https://github.com/msprev/fzf-bibtex/#readme) - Goで実装されたファジーファインダーfzfを用いる、Vim統合付きBibTeXソース。
  - [vim-pandoc](https://github.com/vim-pandoc/vim-pandoc) - Vim向けPandoc統合とユーティリティ。
  - [vim-pandoc-syntax](https://github.com/vim-pandoc/vim-pandoc-syntax) - Vim向けPandoc構文ハイライト。
- [Visual Studio Code](https://code.visualstudio.com/) - Markdownをサポートする人気のIDE。
  - [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown/#readme) - プレビューや自動補完など、VSCodeのMarkdownサポートを強化する拡張機能。
  - [Markdown Preview Enhanced](https://github.com/shd101wyy/markdown-preview-enhanced) - Pandoc統合とユーティリティ。
- [Zettlr](https://www.zettlr.com/) - CSL、BibLaTeX、Pandocなど多数のツールを統合するMarkdownエディター :bookmark: :link:。

## 参考文献

引用、BibTeX、BibLaTeXファイルを生成するための文献管理ツール。

- [Citation Style Language (CSL) styles](https://editor.citationstyles.org/) - 9,000を超える無料のCSL引用スタイルと、新規スタイルを作るオンラインエディターを備えるクラウドソース型リポジトリ。
- [JabRef](https://www.jabref.org/) - オープンソースの参考文献管理ツール。
- [Zotero](https://www.zotero.org/) - 研究を収集、整理、引用、共有するためのFOSSツール。
  - [Better BibTeX for Zotero](https://retorque.re/zotero-better-bibtex/) - Zotero向けの強化されたBibTeX／BibLaTeX統合。
- [ZoteroBib](https://zbib.org/) - オンラインの参考文献管理ツール。

## 図版

図を自分で描くことは、多くの科学者を悩ませてきました。幸い、美しいグラフィックを作成できる形式言語があります。

- [app.diagrams.net](https://app.diagrams.net/) - draw.ioという名称の、オープンソースでオンライン、デスクトップ、コンテナー配置可能なダイアグラム作成ソフトウェア。
- [graphviz](https://graphviz.org/) - ドメイン固有のDOT言語を使用するグラフとネットワークの可視化ソフトウェア。
- [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/) - 図を描く代わりに簡単な図を定義します。
- [Vega Lite](https://vega.github.io/vega-lite/examples/) - グラフとより複雑な図を定義します。
- [PlantUML](https://plantuml.com/) - 図を描く代わりにUML図を定義します。

## 変換器とフィルター

補助ファイルとツール。

- [Cicero](https://cicero.xyz/) - remarkまたはreveal.jsを使用してMarkdownソースからHTMLプレゼンテーションをレンダリングするPythonパッケージ :link:。
- [docutils](https://docutils.sourceforge.io/docs/) - reStructuredTextを各種形式へ変換し、コマンドラインツールを提供するPythonパッケージ :link:。
- [Jupyter Book](https://jupyterbook.org/en/stable/) - CommonMark、MyST Markdown、Jupyter notebooksのコレクションをHTMLウェブサイトに変換する静的サイトジェネレーター。
- [MyST](https://myst-parser.readthedocs.io/en/latest/) - reStructuredText風の機能を備えるCommonMark Markdownのスーパーセット、Markedly Structured Text。
- [nbconvert](https://nbconvert.readthedocs.io/en/latest/) - Jupyter notebooksを`reveal.js`プレゼンテーション、PDF、HTML、Markdown、reStructuredTextなどへ変換します。
- [pandoc](https://pandoc.org/MANUAL) - あるマークアップ形式から別の形式へ変換するHaskellライブラリと、そのライブラリを用いるコマンドラインツール :bookmark: :link:。
  - [Pandoc filters](https://github.com/jgm/pandoc/wiki/Pandoc-Filters) - 引用や相互参照などの追加機能を実装するpandocアドオンのリスト。
  - [Panflute](http://scorreia.com/software/panflute/) - John MacFarlaneのpandocfiltersに対するPythonらしい代替。
- [Quarto](https://quarto.org) - R MarkdownとJupyter NotebooksをPDF、スライド、ウェブサイトへコンパイルします。R、Python、Juliaをサポート :bookmark: :link:。

## スペルチェックとLint

- [GNU Aspell](http://aspell.net/) - コマンドラインのスペルチェッカー。
- [Hunspell](http://hunspell.github.io/) - コマンドラインのスペルチェッカー。
- [LanguageTool](https://languagetool.org/) - オープンソースの文法、スタイル、スペルチェッカー。
- [LanguageCheck](https://github.com/JohannesBuchner/languagecheck) - 科学的LaTeX論文を分析し、一般的な誤り／曖昧さ、時制の一貫性、aとan、スペルチェック、段落の主題文について改善を提案します。
- [Markdown lint tool](https://github.com/markdownlint/markdownlint) - Markdownリンター。
- [proselint](https://github.com/amperser/proselint) - 散文向けリンター。
- [remarklint](https://github.com/remarkjs/remark-lint) - Markdownリンター。
- [restructuredtext-lint](https://github.com/twolfson/restructuredtext-lint) - reStructuredTextリンター。
- [textlint](https://textlint.github.io/) - テキストとMarkdown向けの拡張可能なLintツール。
- [textidote](https://sylvainhalle.github.io/textidote/) - LaTeX文書のスペル、文法、スタイルを検査します。
- [Vale](https://github.com/errata-ai/vale) - 速度と拡張性を重視して構築された、散文向けの無料オープンソースリンター。
- [write-good](https://github.com/btford/write-good) - 英語散文向けの素朴なリンター。

## テンプレート

再利用できるミニマルな例。

### 論文

- [Paper Templates for GitHub Pages](https://github.com/dev-onejun/paper-templates-for-github-pages) - GitHub Pagesで公開する、論文と履歴書／CV向けのMarkdownベーステンプレート。

### 書籍

- [bookdown-demo](https://github.com/rstudio/bookdown-demo/#readme) - R Markdownとbookdownに基づく書籍の最小例。
- [Eisvogel](https://github.com/Wandmalfarbe/pandoc-latex-template) - クリーンな学術向けpandoc LaTeXテンプレート。
- [Template for writing a PhD thesis in
   Markdown](https://github.com/tompollard/phd_thesis_markdown#readme) - 主にMarkdownと少量のLaTeXを用い、Pandocでコンパイルする博士論文執筆のための、整然としたファイル構成フレームワーク。

## チュートリアル

科学目的の論文とプレゼンテーションの生成方法。

- [3 frameworks into one — Write your next paper with R Studio!](https://blog.devgenius.io/write-your-whole-paper-in-r-it-is-better-77e1843f0c09) - R Markdown（bookdown）、Zotero（文献管理）、Notion（研究論文のノート作成）を組み合わせて学術論文を書くワークフローの概要。
- [Book on Riemann solvers](https://github.com/clawpack/riemann_book/#readme) - カスタム`nbconvert`テンプレートを用いる例。ノートブックを出力なしで保存して（バージョン管理のため）、`bookbook`実行前に自動実行することで、PDFとHTML版に出力を含める方法を示します。
- [Dennis Tenen and Grant Wythoff](https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown) - PandocとMarkdownを使ったプレーンテキストでの持続可能な執筆。
- [Heads up! Quarto is here to stay. Immediately combine R & Python in your next document](https://blog.devgenius.io/heads-up-quarto-is-here-to-stay-aa861ef87491) - Quartoの機能、利用理由、R Markdownとの比較の要約。M1 Macユーザー向けに、reticulateでよくある問題を解決するヒントもあります。
- [Write your dissertation in RMarkdown](https://ourcodingclub.github.io/tutorials/rmarkdown-dissertation/) - テキスト、図、参考文献、画像、書式設定などを含む複雑なPDF文書を作成するステップバイステップガイド。
- [Writing scientific papers for ACPD using Emacs
   Org-mode](https://www.draketo.de/english/emacs/writing-papers-in-org-mode-acpd) - Org-mode内でLaTeXコマンドとシームレスに統合して論文を執筆する詳細チュートリアル。

## その他のリスト

- [Awesome Jupyter](https://github.com/markusschanta/awesome-jupyter/#renderingpublishingconversion)
- [Awesome LaTeX](https://github.com/egeerardyn/awesome-LaTeX/#readme)
- [Awesome Markdown](https://github.com/BubuAnabelas/awesome-markdown/#readme)
- [Delightful Open Science](https://codeberg.org/teaserbot-labs/delightful-open-science)

### 貢献

貢献を歓迎します。最初に[貢献ガイドライン](https://github.com/writing-resources/awesome-scientific-writing/blob/c4a8c9ba4c6a4bc705f721e7024df00290f44f8b/CONTRIBUTING.md)をお読みください。
