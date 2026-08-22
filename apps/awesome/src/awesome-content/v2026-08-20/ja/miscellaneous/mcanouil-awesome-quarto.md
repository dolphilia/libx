---
title: "mcanouil/awesome-quarto"
description: "Quartoの公式資料、学習資料、拡張機能、実例を分類した定本スナップショット"
licenseSource: "github-mcanouil-awesome-quarto-readme-md"
---



<div align="center">



# <a href="https://quarto.org" target="_blank" rel="noopener noreferrer"><img src="media/media.png" alt-text="Awesome list logo with the Quarto logo with text, which is a pair of sunglasses with below the text 'awesome' and then the Quarto logo in blue and grey blue as per Quarto's logo." width="75%"/></a></br>[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

インターネット上で公開されている[Quarto®](https://quarto.org)のドキュメント、講演、ツール、実例、記事を最新の状態で厳選したリストです。

[Quarto®](https://quarto.org) is an open-source scientific and technical publishing system built on [Pandoc](https://pandoc.org/).

</div>

---

Contributions of any kind are welcome, just follow the [guidelines](https://github.com/mcanouil/awesome-quarto/blob/8c6e0c56c35915e88de13eed0f73ac7e681b3f88/.github/CONTRIBUTING.md) by either:

- Filling a [suggestion issue](https://github.com/mcanouil/awesome-quarto/issues/new?assignees=mcanouil&labels=&template=suggestion.yml) (簡単な方法)
- Opening a [pull request](https://github.com/mcanouil/awesome-quarto/compare).

---

## 目次

- [Official documentation \& quickstarts](#official-documentation--quickstarts)
- [Tutorials \& workshops](#tutorials--workshops)
- [ブログ記事](#blog-posts)
- [講演・動画](#talks-and-videos)
- [対応エディター](#supported-editors)
- [ライブラリ・パッケージ・スクリプト](#librariespackagesscripts)
  - [R](#r)
  - [Julia](#julia)
  - [Python](#python)
  - [エディター](#editors)
  - [その他](#miscellaneous)
- [AI \& LLMs](#ai--llms)
- [継続的インテグレーション・継続的デリバリー](#continuous-integration--continuous-deployment)
- [拡張機能](#extensions)
- [実例](#real-life-examples)
  - [プレゼンテーション形式](#presentations-formats)
  - [Webサイト形式](#websites-formats)
  - [書籍形式](#book-formats)
  - [その他の形式](#other-formats)
- [フォロー](#follow)
  - [公式](#official)
  - [コミュニティ](#community)

## 公式ドキュメント・クイックスタート <a id="official-documentation--quickstarts"></a>

- [Documentation: Quarto documentation](https://quarto.org/) - 公式Quartoドキュメンテーション
- [GitHub: Quarto GitHub repository](https://github.com/quarto-dev) - 公式Quarto GitHubリポジトリ
- [Tutorial: Hello, Quarto](https://quarto.org/docs/get-started/hello/) - 公式「Hello, Quarto」チュートリアル
- [Tutorial: Computations](https://quarto.org/docs/get-started/computations/) - 公式「Computations」チュートリアル
- [Tutorial: Authoring](https://quarto.org/docs/get-started/authoring/) - 公式「Authoring」チュートリアル
- [Service: Quarto Pub](https://quartopub.com/) - Quartoでドキュメント、ウェブサイト、プレゼンテーション、書籍、ブログを作成し、Quarto CLIで安全にウェブ上に公開する。これはウェブ上に公開・共有するための最も簡単な方法である。

## チュートリアル・ワークショップ <a id="tutorials--workshops"></a>

- [Tutorial: The ultimate guide to starting a Quarto blog](https://albert-rapp.de/posts/13_quarto_blog_writing_guide/13_quarto_blog_writing_guide.html) - Quartoでブログを始めるための詳細ガイド
- [Tutorial: Creating a blog with Quarto in 10 steps](https://beamilz.com/posts/2022-06-05-creating-a-blog-with-quarto/en/) - 新しいQuartoブログの紹介と、自作のQuartoブログを作成する手順を示すブログ記事
- [Tutorial: Making shareable docs with Quarto](https://openscapes.github.io/quarto-website-tutorial/) - Quartoでウェブサイトを作成するチュートリアル
- [Workshop: From R Markdown to Quarto](https://rstudio-conf-2022.github.io/rmd-to-quarto/) - R Markdownのスキルと専門性をQuarto、R Markdownの次世代に応用するためのワークショップ
- [Workshop: Getting started with Quarto](https://rstudio-conf-2022.github.io/get-started-quarto/) - rstudio::conf(2022)で提供された「Quartoで始める」ワークショップ資料
- [Workshop: Quarto, a library to run them all?](https://warwickcim.github.io/quarto-workshop/slides/slides.html) [RSECon'22](https://rsecon2022.society-rse.org/)で開催されたワークショップ。カルロス・カマラ、ジェームズ・トリップ、カガタイ・トゥルカイが指導（資料： <https://github.com/WarwickCIM/quarto-workshop>）
- [Tutorial: Creating your personal website using Quarto](https://ucsb-meds.github.io/creating-quarto-websites/) - Samantha Csikが提供する、Quartoを使って個人ウェブサイトを構築するためのステップバイステップガイド
- [Tutorial: Customizing Quarto Websites - Make your website stand out using SASS & CSS](https://ucsb-meds.github.io/customizing-quarto-websites/) サマンタ・シクが発表したスライド。SASSとCSSを使ってHTML Quartoサイトをカスタマイズする方法（資料： <https://github.com/UCSB-MEDS/customizing-quarto-websites>）
- [Workshop: Quartaki — 6 hour introduction to Quarto](https://drmowinckels.io/quartaki/) によるRとRStudioの使い方。基本的なマーカード、HTMLレポート、引用と参照、PDFおよびジャーナルテンプレート、Reveal.jsプレゼンテーションについて（資料： ） [Athanasia Mo Mowinckel](https://github.com/drmowinckels)
- [Workshop: Mi primer blog con Quarto](https://perezp44.github.io/taller.primer.blog/) ペドロ・J・ペレスによるスペイン語のワークショップ。Quartoでブログを作成する方法（資料： <https://github.com/perezp44/taller.primer.blog>）
- [Tutorial: Creating Quarto Journal Article Templates](https://christophertkenny.com/posts/2023-07-01-creating-quarto-journal-articles/) - ジャーナルのLaTeXテンプレートをQuartoテンプレートに変換するプロセスを詳細に説明したブログ記事
- [Tutorial: Personal Website using Jupyter Notebook and Quarto](https://adtarie.net/posts/007-quarto-python-tutorial/) - Quartoを使ってウェブサイトを作成するためのPython中心のステップバイステップチュートリアル
- [Tutorial: Publish a Quarto website with Netlify](https://jadeyryan.com/blog/2023-11-19_publish-quarto-website/) - Jadey Ryanが提供する、Quartoウェブサイトの作成方法、GitHubとの接続、Netlifyでデプロイ・公開する方法を詳細に説明したブログ記事
- [Workshop: Parameterized Reports with Quarto](https://jadeyryan.quarto.pub/rladies-dc-quarto-params/) `quarto`と `purrr`を使ってパラメータ化されたレポートを作成し、複数フォーマットの出力を作成する2時間のコード実践ワークショップ（資料： <https://github.com/jadeynryan/parameterized-quarto-workshop>）
- [Tutorials: Quarto Visual Editor and RStudio](https://www.youtube.com/playlist?list=PLEzw67WWDg80-fT1hq2IZf7D62tRmKy8f&si=ECVfFIH1bg6_JfjS) - Andy Fieldが提供する、Quarto Visual EditorおよびRStudioで初心者向けの短い動画チュートリアルのYouTubeプレイリスト
- [Quarto for amsmath LaTeX users](https://nmfs-opensci.github.io/quarto-amsmath/) - Quarto書籍における数式の番号付けや、HTMLおよびPDFレンダリングにおけるfancy mathに関する問題を解決するためのノート
- [Tutorial: A step-by-step guide to parameterized reporting in R using Quarto](https://rfortherestofus.com/2024/06/parameterized-reporting-quarto) - Quartoでのパラメータ化レポートの使用方法についての動画によるガイド
- [Slidecrafting](https://slidecrafting-book.com/) - Emil Hvitfeldtによるスライド制作の本。機能的で美しく見えるスライドを組み立てる芸術。
- [Workshop: Branded Websites, Presentations, Dashboards, and PDFs with Quarto](https://posit-conf-2025.github.io/quarto-brand/) - Isabella VelásquezおよびSara Altmanが主導するposit::conf(2025)での「ブランド化されたQuarto出力の作成」ワークショップ資料（CC BY-SA 4.0ライセンスで提供）
- [Workshop: Extending Quarto](https://posit-conf-2025.github.io/quarto-extend/) - posit::conf(2025) ウォークショップ資料：カスタム拡張機能、フォーマット、テンプレート、フィルタの開発について、Mine Çetinkaya-Rundel と Charlotte Wickham が指導（資料は CC BY-SA 4.0 ライセンスで提供）。
- [Tutorial: Using GitHub Codespaces to teach with Quarto](https://opensource.posit.co/blog/2025-05-19_quarto-codespaces/) - Mickaël Canouil が紹介する GitHub Codespaces の基本と、Quarto を教える際に使いやすいようにする方法。
- [Tutorial: How to Get a Blog Up from Scratch in 1 Day Using Quarto and Netlify](https://eliottkalfon.com/posts/quarto-blog-tutorial/) - Eliott Kalfon が提供する、1日で完了する Netlify 部署を用いた Quarto ブログの構築を徹底解説するガイド。
- [Tutorial: Writing a book with Quarto](https://blog.stephenturner.us/p/quarto-books) - Stephen Turner が提供する、RMarkdown で作成された古くからのコースサイトを Quarto で洗練された電子書籍に変換する詳細な手順。
- [Workshop: Beginner-friendly tutorial on using Quarto for sharing research](https://pythonhealthdatascience.github.io/quarto-tutorial/) - 初心者向けの、研究を共有・整理するための Quarto サイトの構築ガイド（GitHub、Quarto、Markdown の導入から、事前経験なしでも学べる）。
- [Workshop: Intro to Quarto](https://posit-conf-2024.github.io/quarto-intro/) - Andrew Bray が指導する posit::conf(2024) の半日ワークショップ：Quarto の基礎、ドキュメントの洗練、拡張機能、プレゼンテーション、そして自分の成果を共有する方法。
- [Workshop: Build-a-Dashboard](https://posit-conf-2024.github.io/quarto-dashboards/) - Mine Çetinkaya-Rundel が指導する posit::conf(2024) の全日ワークショップ：生産性を確保した Quarto ダッシュボード（カード、価値ボックス、テーマ設定、デプロイ）の構築。
- [Workshop: Quarto Websites](https://posit-conf-2024.github.io/quarto-websites/) - Charlotte Wickham と Emil Hvitfeldt が指導する posit::conf(2024) の全日ワークショップ：Quarto サイトの構築、スタイル設定、デプロイ（ナビゲーション、CSS/SCSS、リスト表示を含む）。
- [Workshop: Zero to Website with Quarto](https://charlotte.quarto.pub/dslc24/) - Charlotte Wickham が指導する、ゼロから Quarto サイトを構築する実践ワークショップ（ページ、ナビゲーション、リスト表示、スタイル設定、公開までを含む）。
- [Workshop: Quarto Workshop 2024 (NMFS OpenSci)](https://nmfs-opensci.github.io/Quarto-Workshop-2024/) - Gaston Sanchez が提供する、Quarto を用いた再現可能なレポートの7モジュールシリーズ（Markdown 基礎から Zotero 参考文献を用いた書籍構築まで）。
- [Workshop: Mastering Quarto CLI - From Authoring to Publishing](https://m.canouil.dev/mastering-quarto-cli/) - Mickaël Canouil が提供する、CLI の設定、Markdown、コード実行、テーマ設定、ブランド化、GitHub Pages および Posit Connect Cloud への公開までを含む7セッションのワークショップ。
- [Workshop: Closeread](https://github.com/qmd-lab/closeread-workshop) - Closeread の開発者たちが提供する、Closeread を用いたスクロリーテリングの1時間実践ワークショップ（コンポーネント、テキストおよびコードの焦点効果、グラフィックを含む）。
- [Tutorial: Scrollytelling with Quarto Closeread](https://www.gastonsanchez.com/learn-closeread/) - Gaston Sanchez が提供する、Closeread のスクロリーテリング技術を段階的に教えるモジュールごとのレッスンとインタラクティブな例。
- [Tutorial: How to Make High-Quality PDFs with Quarto and Typst](https://rfortherestofus.com/2025/11/quarto-typst-pdf) - David Keyes と Joseph Barbier が提供する、カスタム Typst 関数、フッター、レイアウトを用いたブランド化されたレポートの再現チュートリアル。
- [Tutorial: Building Quarto Typst Templates - The Lua-Typst Bridge](https://mickael.canouil.fr/posts/2026-02-27-typst-template-tutorial-part1/) - Mickaël Canouil が提供する、Lua フィルタと Typst 関数を組み合わせて、Quarto Typst テンプレートにカスタムバッジやパネルを構築する2部チュートリアル。
- [Tutorial: Building a Real-World Python Dashboard with Quarto](https://quartoisfun.com/dashboards/about.html) - Keith Galli が提供する、Python ダッシュボード（価値ボックス、Folium 地図、Shiny 統合、Connect Cloud デプロイ）を構築するビデオチュートリアルシリーズ。
- [Tutorial: Multilingual webpages with babelquarto](https://joelnitta.com/posts/2024-12-06_babelquarto/) ジョエル・ニッタが開発した `babelquarto`Rパッケージを使って既存のQuartoサイトに2つ目の言語を追加するステップバイステップチュートリアル
- [Tutorial: Seven accessibility tips for Quarto and R Markdown users](https://remlapmot.github.io/post/2025/quarto-accessibility/) - Tom Palmer が提供する、alt テキスト、タグ付きPDF、アクセシブルなテーブル、Word テンプレートについての実践ガイド（アクセシビリティスコアの前後比較を含む）。
- [Tutorial: Quarto for Reproducible Research Workflows and Academic Publishing](https://elenlefoll.quarto.pub/quarto4research/) - Elen Le Foll が提供する、学術書類におけるリテラートプログラミング、再現性、マルチフォーマット出版に関するオープン教育リソース。

## ブログ記事 <a id="blog-posts"></a>

- [We don't talk about Quarto](https://www.apreshill.com/blog/2022-04-we-dont-talk-about-quarto/) - Alison Presmanes Hill が提供する、Quarto パブリッシングソフトウェアについてのブログ記事。
- [Quarto tip a day](https://mine-cetinkaya-rundel.github.io/quarto-tip-a-day/) - Quarto で作成されたウェブサイトで、毎日1つのQuartoのヒントをブログ記事として紹介するコンテンツ。
- [Announcing Quarto, a new scientific and technical publishing system](https://posit.co/blog/announcing-quarto-a-new-scientific-and-technical-publishing-system) - J.J. AllaireがQuarto、新しいオープンソースの科学的および技術的出版システムのリリースを発表したブログ記事
- [Interactive Molecular Content](https://www.valencekjell.com/posts/2022-08-13-interactive/) - Quartoでウェブページにインタラクティブなコンテンツ（つまり、分子の可視化）を埋め込む方法を示すブログ記事（Bokeh、3DMol.jsおよびNGLを使用）
- [Slidecraft 101: Colors and Fonts](https://emilhvitfeldt.com/post/slidecraft-colors-fonts/) - エミル・ホビルトがQuartoプレゼンテーションフォーマットを使って「機能的で美しく見えるスライドの作成の芸術」について述べたブログ記事
- [Making Slides in Quarto with Reveal.js](https://meghan.rbind.io/blog/2022-07-12-making-slides-in-quarto-with-revealjs/) - メグヘン・ホールが、Reveal.jsを使ってQuartoでスライドを作成し、エモジーやスライドのカスタマイズ方法について述べたブログ記事
- [A beginner's guide to using Observable JavaScript, R, and Python with Quarto](https://www.infoworld.com/article/2336848/a-beginners-guide-to-using-observable-javascript-r-and-python-with-quarto.html) - この記事では、Observable JavaScriptを使用するQuartoドキュメントの設定方法を紹介し、RやPythonからデータをObservableコードブロックに渡す方法も解説
- [Six Productivity Hacks for Quarto](https://posit.co/blog/6-productivity-hacks-for-quarto) - コンテンツの再利用に関する6つのヒント、Pandocのdivおよびspanの挿入、GitHub Actionsによる継続的デプロイについて述べたブログ記事
- [Use R to Generate a Quarto Blogpost](https://themockup.blog/posts/2022-11-08-use-r-to-generate-a-quarto-blogpost/) - トム・モックがRを使ってQuartoブログ記事を生成する方法について述べたブログ記事
- [Adding Subscriptions to a Quarto Site](https://forbo7.github.io/forblog/posts/7_blog_subscriptions.html) - Quartoブログにサブスクリプションフォームを追加する方法について述べたブログ記事
- [I'm an R user: Quarto or R Markdown?](https://www.jumpingrivers.com/blog/quarto-rmarkdown-comparison/) [Jumping Rivers](https://www.jumpingrivers.com/)ユーザー視点からQuartoとR Markdownを比較したブログ記事
- [Quarto for the Python User](https://www.jumpingrivers.com/blog/quarto-for-python-users/) - Pythonユーザー向けにQuartoでレポートを作成する方法を紹介したブログ記事
- [How to publish your Quarto document/book/website as a Docker container?](https://mickael.canouil.fr/posts/2023-05-07-quarto-docker/) - ミカエル・カヌイールがQuartoドキュメント／書籍／ウェブサイトをDockerコンテナとして公開する方法を説明したブログ記事
- [Making Pretty PDFs with Quarto](https://nrennie.rbind.io/blog/pdf-quarto/making-pretty-pdf-quarto/) - PDFドキュメントのスタイルをカスタマイズし、そのスタイルをQuarto拡張に保存することで再利用・共有を容易にする方法を説明したブログ記事
- [How to self-publish a technical book on Leanpub and Amazon using Quarto](https://brodrigues.co/blog/2023-06-29-book_quarto/) - このブログ記事では、Leanpub向けのEpubおよびAmazonのセルフパブリッシングサービス（KDP）向けの印刷用PDFをコンパイルするための設定を説明
- [Hello Quarto: Porting my Website from Hugo Apéro](https://silviacanelon.com/blog/2023-09-29-hello-quarto/) - ブログダウンHugo ApéroサイトをQuartoに移行したユーザーの経験を詳細に記述したブログ記事（デザインアイデア、CSSのヒント、HTMLパーシャル、リダイレクトの設定なども含む）
- [Seven Tips for Creating Quarto Reveal.js Presentations](https://remlapmot.github.io/post/2025/quarto-revealjs-tips/) - R/knitr、HTML/CSS、Quarto本体のオプションを使ってReveal.jsスライドをカスタマイズするためのいくつかのヒントを示したブログ記事
- [Creating effectively multi-engine Quarto documents using Quarto's embed shortcode](https://remlapmot.github.io/post/2025/multi-engine-quarto/) - ドキュメント内に異なる言語/エンジンのコードとその出力を表示・実行するためのembedショートコードの使用方法を説明したブログ記事
- [Migrating my Academic (Hugo Wowchemy) website to Quarto](https://jc-castillo.com/blog/posts/quarto-migration/) - Hugo Academic/Wowchemyから学術サイトをQuartoに移行した際の技術的なステップ（コンテンツ、出版物、サイト構造の変換）を記述したブログ記事
- [Collaborating on Quarto documents](https://nrennie.rbind.io/blog/collaborating-quarto/) - 非技術的な協力者とQuartoドキュメントを協働するための複数のオプションを説明し、GitベースおよびGitなしのワークフローを含むニコラ・レンニーのブログ記事
- [Styling a Quarto blog](https://www.guillaumedehaene.com/posts/2024/03/styling_a_quarto_blog.html) - グイガンヌ・デハネが、具体的なYAMLおよびSCSS例を使ってテーマ、フォント、コードブロック、図、数学のレンダリングを解説したブログ記事
- [Apply the Dracula Theme to Quarto Websites](https://boyd.tarlinton.au/posts/dracula_theme.html) - ボイド・タールリントが、Bootswatch DarklyテーマをDraculaパレットにアダプトし、読者のシステム設定に応じて明るい・暗いモードを切り替える方法を説明したブログ記事
- [A Claude Skill for _brand.yml](https://blog.stephenturner.us/p/brand-yml-claude-skill-uva-sds-quarto) 組織のブランド資産から `_brand.yml`仕様をAIアグリントで生成し、 `quarto use brand`で共有する方法についてのブログ記事（著者：ステファン・ターナー）
- [Adding Alt Text in Quarto with Claude Code](https://blog.stephenturner.us/p/alt-text-quarto-claude-code-skill) Quartoドキュメント内の図に `fig-alt`の説明をAIアグリントで生成・挿入する方法についてのブログ記事（著者：ステファン・ターナー）
- [How to automatically convert TikZ images to SVG with Quarto](https://www.andrewheiss.com/blog/2026/02/25/tikz-quarto-svg-fun/) - アンデュー・ヘイスが、Pandoc diagram拡張を使って、TikZ図をHTMLおよびWordではSVG、LaTeX出力ではPDFとしてレンダリングする方法を説明したブログ記事
- [Research Workflow with Quarto and targets](https://kazuyanagimoto.com/blog/2025/0426_research_workflow/index.html) 分析から論文までを管理する再現可能な研究パイプラインを `targets`パッケージと組み合わせたブログ記事（著者：カズハル・ヤナギモト）
- [Quarto dashboard creation and automation](https://ivelasq.rbind.io/blog/automated-quarto-dashboard/) - Isabella Velásquezによる、APIからデータを取得し、ピンを設定してスケジュールで再発行するダッシュボードを構築するブログ記事
- [Parameterized reports with the Jupyter engine](https://opensource.posit.co/blog/2025-07-24_parameterized-reports-python/) Jupyterノートブックをパラメータ化されたレポートテンプレートに変換するブログ記事（著者：チャロテ・ウィッカム）。 `brand.yml`とTypstスタイルを含む
- [How to Finally Fix Your Tables in Typst PDFs](https://albert-rapp.de/posts/37_gt_typst/) Quarto PDFにカスタム `gt`テーブルスタイルをTypstでレンダリングする際にLuaフィルターを使って持ち込む方法についてのブログ記事（著者：アルベルト・ラップ）
- [Quarto Reveal.js Extensions to Sharpen Your Slides](https://mickael.canouil.fr/posts/2026-04-21-quarto-revealjs-extensions/) - Mickaël Canouilによる、Reveal.jsの4つの拡張機能（フラグメントアニメーション、注釈ステップ、繰り返しヘッダー、キーボード操作によるタブセット）をレビューしたブログ記事
- [Scrollytelling with Closeread](https://nightingaledvs.com/scrollytelling-with-closeread/) - Kenneth Odohによる、Closeread拡張機能を使ってインタラクティブなスクロールベースのデータストーリーを構築するプロセス（設定からデプロイまで）を解説したブログ記事
- [Using Quarto to Write a Book](https://kieranhealy.org/blog/archives/2026/03/09/using-quarto-to-write-a-book/) - Kieran Healyによる、Quartoでデータ可視化書を書く際の検討、特にテキストソース、埋め込み図、出力フォーマットについての記事
- [Creating Book Indexes in Quarto](https://friendly.github.io/blog/posts/2026-04-quarto-indexes/) - Michael Friendlyによる、HTMLおよびPDFを対象とした自動化された書籍インデックス作成にRのヘルパー関数とLaTeXマクロを使用したブログ記事
- [Publishing a Quarto Blog: What I Learned Moving from Netlify to GitHub Pages](https://mfatihtuzen.github.io/posts/2026-04-24_quarto_blog_github/) - M. Fatih Tüzenによる、計算量の多いQuartoブログを異なるホスト間で移動する際の環境差、依存関係管理、再現性についてのブログ記事

## 講演・動画 <a id="talks-and-videos"></a>

- [Reproducible authoring with Quarto](https://www.youtube.com/watch?v=6p4vOKS6Xls) 2022年のトロントでの再現性に関するワークショップ（講師：ミネ・チェティンカヤ・ルンデル）（スライド： <https://mine-cetinkaya-rundel.github.io/2022-repro-toronto/>）
- [Reproducible Publications with Julia and Quarto](https://www.youtube.com/watch?v=Y1uKNO32H_I) 2022年のジャーリアコン（講師：J.J. アイラ）（スライド： <https://jjallaire.github.io/quarto-juliacon-2022/>）
- [A Conversation about Quarto](https://www.youtube.com/watch?v=azVAl343CIU) [Openscapes](https://openscapes.org/)コミュニティトーク：Hello Quarto!
- [Workshop: Welcome to Quarto 2-hour Workshop](https://www.youtube.com/watch?v=yvi5uXQMvu4) RStudioミートアップ：トム・モックによるQuarto2時間ワークショップ（スライド： <https://jthomasmock.github.io/quarto-2hr-webinar/>）
- [Quarto for the Curious](https://posit.co/resources/videos/quarto-for-rmarkdown-users) 2022年のRStudio::confでトム・モックが行ったQuartoの概要（資料： <https://thomasmock.quarto.pub/quarto-curious/>）
- [Hello Quarto: Share • Collaborate • Teach • Reimagine](https://posit.co/resources/videos/hello-quarto-share-collaborate-teach-reimagine) 2022年のRStudio::confでミネ・チェティンカヤ・ルンデルとジュリア・ストーディ・ロンドスが発表したキーノート。オープンサイエンスにおけるQuartoの活用方法を紹介（資料： <https://github.com/mine-cetinkaya-rundel/hello-quarto>）
- [Websites & Books & Blogs, oh my! Creating Rich Content with Quarto](https://posit.co/resources/videos/websites-books-blogs-oh-my-creating-rich-content-with-quarto) - Devin PastoorがRStudio::conf(2022)で行った、Quartoが提供するフォーマットの一部と、コンテンツに集中しやすい理由を示した講演
- [Literate Programming With Jupyter Notebooks and Quarto](https://www.youtube.com/watch?v=C8kDPmb_IKU) 2022年のRStudio::confでハメル・フスインが発表した [Nbdev](https://github.com/AnswerDotAI/nbdev)とQuartoの統合に関する講演（資料： <https://github.com/fastai/nbdev-demo>）
- [These are a few of my favorite things](https://posit.co/resources/videos/these-are-a-few-of-my-favorite-things-about-quarto-presentations) - Tracy TealがRStudio::conf(2022)で行った、Quartoプレゼンテーションの特徴（複数列、スピーカーノート、モード、トランジションなど）を強調した講演
- [Building a Blog with Quarto](https://www.youtube.com/watch?v=CVcvXfRyfE0) RStudio Meetup: Quartoを使ってブログを構築する — Isabella Velásquez (資料: <https://ivelasq.quarto.pub/building-a-blog-with-quarto/>).
- [Beautiful Reports and Presentations with Quarto](https://www.youtube.com/watch?v=hbf7Ai3jnxY) RStudio Meetup: Quartoで美しいレポートとプレゼンテーションを作成する — Tom Mock (資料: <https://github.com/jthomasmock/quarto-reporting>).
- [Introduction to Quarto](https://www.youtube.com/watch?v=y6_xMIBKuP4) R-Ladies St. Louis: Quartoの導入 — Isabella Velásquez (資料: <https://github.com/ivelasq/2022-10-27_intro-to-quarto>).
- [Quarto YouTube Playlist](https://www.youtube.com/playlist?list=PLDqZV53PcnYxnBYuEdSBxnOwdKLGaoKGg) - Eli Holmesによる、QuartoとPandocに関する動画のプレイリスト
- [Create your Data Science Portfolio with Quarto](https://www.youtube.com/watch?v=xtSFXtDf4cM) Deepsha Menghaniによるこの動画では、Quartoを使ってデータサイエンスポートフォリオサイトを作成し、すぐにデプロイする方法を学べます (資料: <https://deepshamenghani.quarto.pub/portfolio-with-quarto-workshop/#/title-slide>).
- [A Coffee with Quarto and Neovim](https://www.youtube.com/playlist?list=PLabWm-zCaD1axcMGvf7wFxJz8FZmyHSJ7) [Jannik Buhr](https://jmbuhr.de/)がNeovimでQuartoを使う方法を示すYouTubeプレイリスト.
- [How to style your Quarto blog without knowing a lot of HTML/CSS?](https://www.youtube.com/watch?v=ErRX8plZpQE) - Albert Rappによる、HTML/CSSの基礎がなくてもQuartoブログのスタイルを設定できるチュートリアル動画
- [Quarto for Academics](https://www.youtube.com/watch?v=EbAAmrB0luA) - Mine Çetinkaya-Rundelによる、学術者としての視点から、教育者や研究者としてQuartoの機能が特に役立つ点を強調した動画
- [Quarto Dashboards](https://www.youtube.com/watch?v=_VGJIPRGTy4) - Charles Teagueによる、Quarto 1.4で新しく登場するダッシュボード機能を紹介した動画
- [Parameterized Quarto reports improve understanding of soil health](https://www.youtube.com/watch?v=lbE5uOqfT70) Jadey Ryanによるposit::conf(2023)の講演では、HTMLおよびMS Word出力によるパラメータ化レポートの作成プロセスの例を紹介 (資料: <https://jadeynryan.github.io/2023_posit-parameterized-quarto/>).
- [posit::conf(2024) Quarto talks](https://opensource.posit.co/blog/2024-11-06_conf-talks/) - posit::conf(2024)の講演動画が公開され、YouTubeにQuarto講演のまとめプレイリストが提供されている
- [posit::conf(2024) Quarto workshop materials](https://opensource.posit.co/blog/2024-10-15_conf-workshops-materials/) - posit::conf(2024)で開催された3つのQuartoワークショップ（「Hello Quarto」「Quarto Websites」「Beautiful documents with Quarto」）の資料が、学習や指導に利用可能
- [posit::conf(2025) Quarto talks](https://opensource.posit.co/blog/2025-11-24_conf-talk-videos/) - posit::conf(2025)の講演動画が公開され、Quartoの活用（レポート作成、選挙夜報、ビジネス協働など）について紹介されている
- [posit::conf(2025) Quarto workshop materials](https://opensource.posit.co/blog/2025-10-27_conf-workshops-materials/) - posit::conf(2025)で開催されたQuartoワークショップの資料（「Branded Websites, Presentations, Dashboards, and PDFs with Quarto」「Extending Quarto」）が、学習や指導に利用可能
- [Closeread: bringing Scrollytelling to Quarto](https://www.youtube.com/watch?v=KqLxy66B3lQ) - Andrew Brayによる、Quartoでスクロリーテリングドキュメントを構築するためのCloseread拡張機能を紹介するposit::conf(2024)の講演
- [Introducing Quarto's Native Julia Engine](https://www.youtube.com/watch?v=kk5Pll_dItQ) - Julius Krumbiegelによる、QuartoのネイティブJuliaエンジン（JupyterやIJuliaなしでノートブックをレンダリング）に関するJuliaCon 2025の講演、RCallサポートと拡張可能なセル機構について
- [Quarto with brand.yml](https://www.youtube.com/watch?v=mTuhQ64P3qc) R-Ladies Phillyの講演では、Isabella Velásquezが`brand.yml`とQuarto HTMLおよびTypst出力に共通のスタイルガイドを適用する方法を紹介 (スライド: <https://ivelasq.rbind.io/talk/brand-yml/>).
- [Making high-quality PDFs with Quarto and Typst](https://www.youtube.com/watch?v=jY2nCypm0Xs) - David KeyesとJoseph Barbierによる、QuartoとTypstを使って現実のPDFレポートテンプレートを作成し、それをQuarto拡張としてパッケージ化するライブストリーミング動画
- [Quarto for Reproducible Medical Manuscripts](https://www.youtube.com/watch?v=NK1onTLcgY4) Mine Çetinkaya-RundelによるR/Medicineのウェビナーでは、出版用に再現可能な研究提出用のQuartoマニュスクリプトの活用方法を紹介 (資料: <https://mine.quarto.pub/quarto-manuscripts-rmed>).
- [From One Notebook to Many Reports: Automating with Quarto](https://www.youtube.com/watch?v=ZERDZ5JtP50) Charlotte WickhamによるSciPy 2025の講演では、1つのパラメータ化Pythonノートブックから複数のカスタマイズされた出版用PDFレポートを生成する方法を紹介 (スライド: <https://cwickham.github.io/one-notebook-many-reports/>).
- [Interactive R, Python, and Shiny in the Browser with Quarto and Shinylive](https://www.youtube.com/watch?v=59DSo_jjTpI) - Isabella Velásquezによる、サーバー不要のブラウザ専用インタラクティブアプリケーションをQuartoとShinyliveで構築するR-Ladies Romeの講演
- [Quarto Dashboards video series](https://opensource.posit.co/blog/2024-11-22_dashboards-workshop/) - ダッシュボード、ダッシュボードコンポーネント、テーマとスタイルに関する3パートの動画シリーズ。RおよびPython向けのスライドとスタートコードを提供。
- [Quarto with Python Crash Course](https://www.youtube.com/playlist?list=PL9HYL-VRX0oQZPzhJR022G_bV4vynT4Ol) Keith Galliによる6話の動画シリーズでは、PythonユーザーがQuartoの基礎からパラメータ化レポート、ダッシュボード、スライドショー、ポートフォリオサイトまでを学べます (資料: <https://github.com/KeithGalli/quarto-crash-course>).
- [Quarto: Open-source technical publishing](https://talkpython.fm/episodes/show/493/quarto-open-source-technical-publishing) - Quartoの設計思想、ノートブックからレポートへのワークフロー、プロジェクトの方向性について解説するTalk Python To Meのエピソード。J.J. AllaireとCarlos Scheideggerが登場。

## 対応エディター <a id="supported-editors"></a>

- [Emacs](https://github.com/quarto-dev/quarto-emacs) [Emacs](https://www.gnu.org/software/emacs/)がQuartoと連携するためのモード.
- [Neovim](https://github.com/quarto-dev/quarto-nvim) [Neovim](https://neovim.io/)がQuartoと連携するためのツール.
- [Sublime Text](https://github.com/quarto-dev/quarto-sublime) [Sublime Text](https://www.sublimetext.com/)がQuartoと連携するためのプラグイン.
- [Vim](https://github.com/quarto-dev/quarto-vim) [Vim](https://www.vim.org/)がQuartoと連携するためのプラグイン.
- [Visual Studio Code/Positron](https://github.com/quarto-dev/quarto) [Visual Studio Code/Positron](https://code.visualstudio.com/)がQuartoと連携するための拡張機能.
- [Scrivener](https://forum.literatureandlatte.com/t/scrivener-quarto-a-technical-academic-publishing-workflow/129769) Quarto対応の[Scrivener](https://www.literatureandlatte.com/)によるScrivenerテンプレートサポート.
- [RStudio](https://posit.co/products/open-source/rstudio) [Posit PBC](https://posit.co/)が本格的にQuartoをサポートするIDE.
- [Positron](https://positron.posit.co/) Posit PBCが開発した次世代の拡張可能で多言語対応のデータサイエンスIDE（[the Visual Studio Code extension for Quarto](https://github.com/quarto-dev/quarto)によるサポートあり）.
- [Zed](https://github.com/prefrontal-systems/zed-quarto-plugin) [Zed](https://zed.dev/)向けの拡張機能がQuartoドキュメントにシンタックスハイライト、コードブロック挿入、スニペットを提供.

## ライブラリ・パッケージ・スクリプト <a id="librariespackagesscripts"></a>

### R <a id="r"></a>

- [R](https://github.com/quarto-dev/quarto-r) [R](https://www.r-project.org/)とQuarto CLIを接続するインターフェースパッケージ.
- [quartostamp](https://github.com/matt-dray/quartostamp) Rパッケージで、Quarto ドキュメントに必要なユーティリティのdivとclassを挿入できる を提供しています. [RStudio Addin](https://rstudio.github.io/rstudioaddins/) `revealjs`
- [babelquarto](https://docs.ropensci.org/babelquarto/) 多言語Quarto書の設定とレンダリングを支援するRパッケージ（詳しくは [babeldown](https://docs.ropensci.org/babeldown/articles/quarto.html)を参照）.
- [altdoc](https://github.com/etiennebacher/altdoc) - Rパッケージをドキュメントするためのpkgdownへの代替ツール。
- [surveydown](https://surveydown.org/) - Quarto、Shiny、Supabaseを活用したマークダウンベースの調査フォームを作成できるプラットフォーム。
- [plume](https://github.com/arnaudgallou/plume/) - テーブルデータからQuartoに著者情報を生成または挿入できる機能。
- [pakret](https://github.com/arnaudgallou/pakret/) - RやRパッケージの個別かつフォーマット済みの引用を、R MarkdownまたはQuartoドキュメント内で直接作成できる機能。
- [grateful](https://github.com/Pakillo/grateful/) - 使用したすべてのRパッケージの引用を、プロジェクト全体をスキャンしてBibTexファイルに生成。
- [rd2qmd](https://github.com/eitsupi/rd2qmd) - Rustで書かれた高速なRdからQuarto Markdownへのコンバーター。参照サイトの構築に必要なクロスパッケージリンク解決を実現。
- [ir](https://github.com/r-lib/ir) スクリプトのフロントマターに記述された依存関係から再現可能な環境を管理する、最小のRスクリプトランナー。Quartoドキュメントに対応するための `ir`YAMLキーをサポートしています.

### Julia <a id="julia"></a>

- [Julia](https://github.com/quarto-dev/quarto-julia) [Julia](https://julialang.org/)とQuarto CLIのインターフェースパッケージ.
- [DocumenterQuarto](https://github.com/jdc-pub/DocumenterQuarto.jl) - Juliaパッケージで、QuartoとDocumenterを使用してJuliaパッケージのドキュメントを生成。
- [QuartoNotebookRunner](https://github.com/PumasAI/QuartoNotebookRunner.jl) - QuartoがJuliaコードを実行するために使用する、本格的なJuliaノートブックエンジン。

### Python <a id="python"></a>

- [Python](https://github.com/quarto-dev/quarto-python) [Python](https://www.python.org/)とQuarto CLIのインターフェースパッケージ.
- [quartodoc](https://github.com/machow/quartodoc) - Pythonモジュールで、MarkdownとQuartoを使ってPythonパッケージのAPIリファレンスドキュメントを迅速に生成。
- [lintquarto](https://github.com/lintquarto/lintquarto) - Quartoファイル内のPythonコードに対して、リントツール、静的型チェック、コード分析ツールを実行するPythonパッケージ。
- [great-docs](https://github.com/posit-dev/great-docs) - Positから提供されるパッケージで、Quartoをレンダリングエンジンとして活用し、Pythonサイトの自動ドキュメントサイト（トップページ、APIリファレンス、CLIリファレンス）を生成。

### エディター <a id="editors"></a>

- [RStudio & VSCode snippets](https://gist.github.com/jthomasmock/11acebd4448f171f786e01397df34116) - RStudioおよびVSCode向けのスニペットで、Quartoによるタイプ設定を容易に。
- [Quarto Wizard](https://github.com/mcanouil/quarto-wizard) - Visual Studio Code拡張機能で、Quartoプロジェクトの管理（拡張機能のインストールや更新）を支援。
- [Quarto Wingman](https://github.com/ntluong95/quarto-wingman) - Visual Studio Code拡及機能で、インタラクティブなコードセル設定、改善されたPythonのシンタックスハイライト、知能的なトークン認識、強化されたフッテーン表示、RおよびPythonのインラインコード実行を提供。データ探索に特に有用。

### その他 <a id="miscellaneous"></a>

- [ohq2quarto](https://github.com/hrbrmstr/ohq2quarto) Rベースのコマンドラインツールで、任意の [ObservableHQ](https://observablehq.com/)ノートブックをQuartoプロジェクトに変換します.
- [Quartize](https://github.com/hrbrmstr/reveal-qmd) Chrome拡張機能で、任意の [ObservableHQ](https://observablehq.com/)ノートブックをダウンロード可能な `FileAttachment`のリストとページ内Quartoソースドキュメントに変換します.
- [matrix BOT](https://github.com/rgomez90/matrix-bot) に搭載された小さなボットで、いくつかのQuartoファイルを監視し、PDFをマトリクスチャンネルに返します. [matrix-network](https://matrix.org/)
- [Panache](https://github.com/jolars/panache) - Markdown、Quarto、R Markdown向けの言語サーバー、フォーマッター、リントツール。Rustで構築され、損失なしCSTパーサーを備え、コードブロックに外部フォーマッターおよびリントツールのサポートを提供。
- [loom-lsp](https://github.com/PMassicotte/loom-lsp) - Quartoドキュメント向けのRustベースの言語サーバー。同一ドキュメント内の異なる言語に対するIDEサポートを可能にする。
- [vale](https://github.com/vale-cli/vale) - Quartoのマークダウンファイル内のプロセスをリントするためのコマンドラインツール。Goで書かれたもの。
- [rumdl](https://github.com/rvben/rumdl) - Rustで書かれたマークダウンリントツールおよびフォーマッター。
- [LTeX+](https://github.com/ltex-plus/ltex-ls-plus) - Quarto と LaTeX、Markdown、R Markdown に対応する LanguageTool 基盤の文法およびスペルチェック言語サーバー
- [brand.yml](https://github.com/posit-dev/brand-yml) HTML、ダッシュボード、`revealjs`、およびTypstフォーマットに適用されるブランドガイドラインをRとPythonツールで記述できる、ポータブルなYAML仕様.

## AI・LLM <a id="ai--llms"></a>

- [Quarto Agent Skills](https://github.com/posit-dev/skills) Positから提供されるClaude/Agentスキルのコレクション（Quarto作成、`brand.yml`、およびaltテキストスキルを含む）で、AIコードエージェントにQuarto特有の知識とワークフローを追加。Claude Code、Claude.ai、および他のエージェント（Cursor、Codex、Cline）から `npx skills add`を介して利用可能です.
- [Quarto Brand.yml Skill](https://github.com/stephenturner/skill-brand-yml) Stephen Turnerが開発した、一貫したQuartoドキュメントブランドを実現するための `_brand.yml`ファイルの生成・編集を行うClaude Codeスキル.
- [Quarto Talks](https://github.com/alfredo-hs/quarto-talks) AIコードエージェントを使って、研究論文をQuartoプレゼンテーションに変換するエージェントスキルと `revealjs`テンプレート.
- [babeldown](https://github.com/ropensci-review-tools/babeldown) DeepL機械翻訳を使用して、`babelquarto`で構築された多言語Quarto書やウェブサイトを翻訳するRパッケージ.

## 継続的インテグレーション・継続的デリバリー <a id="continuous-integration--continuous-deployment"></a>

- [Quarto GitHub Actions](https://github.com/quarto-dev/quarto-actions) - 公式 Quarto GitHub Actions による Quarto プロジェクトのセットアップ、レンダリング、デプロイ
- [Quarto Website with GitHub Actions](https://tarleb.com/posts/quarto-with-gh-pages/) - GitHub Actions で Quarto ウェブサイトが更新されると自動的に公開される
- [Quarto Devcontainer Feature](https://github.com/rocker-org/devcontainer-features/tree/main/src/quarto-cli) あなたの [Development Containers](https://containers.dev/)にQuarto CLIを機能として追加します.
- [Publish a Quarto project in 6 minutes](https://www.youtube.com/watch?v=arzBRW5XIkg) - GitHub Actions を使ってローカルレンダリングなしで Quarto プロジェクトを GitHub Pages に公開するための短いチュートリアル
- [Publishing to GitHub Pages](https://mickael.canouil.fr/posts/2024-12-30-quarto-github-pages/) - Quarto プロジェクトを GitHub Pages に公開するためのさまざまな方法（手動および自動）を紹介する小さなガイド
- [Quarto Extensions Updater](https://github.com/mcanouil/quarto-extensions-updater) - リポジトリ内の Quarto エクステンションを自動的に更新する GitHub Action。Dependabot が依存関係を管理するように機能する。
- [Quarto GitLab CI/CD component](https://gitlab.com/kamapu/components/quarto) - GitLab CI/CD で再利用可能なコンポーネントで、Quarto プロジェクトを GitLab Pages にレンダリング・公開する

## 拡張機能 <a id="extensions"></a>

- [Quarto.org Extensions Listing](https://quarto.org/docs/extensions/) <https://quarto.org>から提供されるQuarto拡張機能の一覧.
- [Quarto Extensions Listing](https://m.canouil.dev/quarto-extensions/) - カテゴリやキーワードで拡張機能を検索・フィルタリングし、簡単にクリックまたはコマンドでインストールできる、厳選された拡張機能コレクション.

## 実例 <a id="real-life-examples"></a>

### プレゼンテーション形式 <a id="presentations-formats"></a>

- [Advanced Introduction to R (French)](https://m.canouil.dev/radvanced/) [See slides](https://github.com/mcanouil/radvanced).
- [Streamlining with R](https://github.com/meghall06/personal-website/blob/master/static/slides/NEAIR/NEAIR.qmd) [See slides](https://meghan.rbind.io/slides/neair/neair.html).
- [An educator's perspective of the tidyverse](https://github.com/mine-cetinkaya-rundel/tidyperspective/blob/main/talks/dagstat-2022.qmd) [See slides](https://mine-cetinkaya-rundel.github.io/tidyperspective/talks/dagstat-2022.html).
- [An anthology of experimental designs](https://github.com/emitanaka/talks/tree/master/Toronto2022) [See slides](https://emitanaka.org/slides/toronto2022/).
- [The untold story of palmerpenguins](https://github.com/apreshill/palmerpenguins-useR-2022) [See slides](https://apreshill.github.io/palmerpenguins-useR-2022/).
- [Outrageously efficient EDA](https://github.com/jthomasmock/arrow-dplyr) [See slides](https://jthomasmock.github.io/arrow-dplyr/).
- [Improvements in textrecipes](https://github.com/emilhvitfeldt/talk-useR2022-textrecipes/) [See slides](https://emilhvitfeldt.github.io/talk-useR2022-textrecipes/).
- [Quarto: Create Beautiful Documents with R, Python, Julia and Observable (Runapp 2022 talk)](https://github.com/jimjam-slam/talk-runapp-quarto-2022) [See slides](https://runapp2022.talks.jamesgoldie.dev/).
- [Iframes Gallery](https://github.com/EmilHvitfeldt/quarto-iframe-examples) iframesのギャラリーで、Quarto `revealjs`形式に使用できるもの.
- [Continental-scale biodiversity data assessment using the Atlas of Living Australia](https://github.com/shandiya/VicBioCon2023) ヴィクトリアンバイオダイバーシティ会議2023のスライド（[See slides](https://shandiya.quarto.pub/vicbiocon2023/)）.
- [Creating Stunning Presentations with Quarto](https://github.com/EmilHvitfeldt/talk-jsm-stunning-presentations) カスタム `revealjs`テーマの設計に関するJSMトーク。そのトーク自体は、カスタムSCSSとフォントを使用して構築されたショーケースデッキ（[See slides](https://emilhvitfeldt.github.io/talk-jsm-stunning-presentations/)）.

### Webサイト形式 <a id="websites-formats"></a>

- [quarto.org](https://github.com/quarto-dev/quarto-web) - Quarto ドキュメンテーションウェブサイト
- [R-Manuals](https://github.com/rstudio/r-manuals) - R マニュアルを Quarto で再構成したもの
- [Quarto tip a day](https://github.com/mine-cetinkaya-rundel/quarto-tip-a-day) - 毎日 Quarto に関する1つのヒントを紹介するウェブサイト／ブログ
- [Documentation website from Jupyter Notebook](https://github.com/aeturrell/skimpy) - Jupyter Notebook（Python モジュールドキュメンテーションを含む）から Quarto を使ってウェブサイトを生成する
- [Program Evaluation for Public Service (course)](https://github.com/andrewheiss/evalf22.classes.andrewheiss.com) - R を使ってプログラム評価と因果推論を学ぶ大学院レベルのコースのウェブサイト（Quarto で構築）
- [Bioconductor Community Blog](https://github.com/Bioconductor/biocblog) - Bioconductor コミュニティ向けの Quarto ブログ
- [R for Social Scientists workshop](https://github.com/SMaRTWorkshops/r4ss) - ワークショップの Quarto Reveal JS プレゼンテーションを埋め込んだ Quarto ウェブサイト
- [AffCom Lab Website](https://github.com/jmgirard/affcomlab) - 研究室向けのカスタムリストページ（人物と出版物）を活用した Quarto ブログ／ウェブサイト
- [Quantum Jitter](https://github.com/cgoo4/quantumjitter) - カスタムテーマ（flatly / darkly をベースにアダプト）、日/夜のランディングページ、そして革新的な404ページを備えた Quarto ウェブサイト／ブログ
- [Andrew Heiss's website](https://github.com/andrewheiss/ath-quarto) - カスタム EJS フォーマット、フッター、40-4ページ、(S)CSS、そして多くのカスタマイズを含むウェブサイト
- [Ella Kaye's website](https://github.com/EllaKaye/ellakaye.co.uk) - Bootstrap Grid カード型ホームページレイアウト、ナビゲーションバー内のCSSアニメーション、ライト／ダークモードを備えたウェブサイト
- [Quering with PRQL](https://github.com/eitsupi/querying-with-prql) Docusaurusサイトで、`Jupyter`および`knitr`を用いた計算、複数言語（PRQL、SQL、R、Python、_etc._）をサポート.
- [Real World Data Science](https://realworlddatascience.net/) - Royal Statistical Society ウェブサイト（Quarto で構築）は、Lux Bootswatch テーマに基づいたカスタムデザインを採用しており、ナビゲーションバーおよびホームページレイアウトもカスタマイズされている
- [Silvia Canelón's website](https://silviacanelon.com) - Hugo Apéro ブログダウンテーマのスタイルに合わせたカスタマイズされたウェブサイト
- [NASCENT-PERU website](https://nascent-peru.github.io/) 英語・スペイン語を用いた科学的研究プロジェクト向けのマルチ言語サイト（[babelquarto](https://github.com/ropensci-review-tools/babelquarto)パッケージを使用）.
- [rainbowR website](https://rainbowr.org) - rainbowRはRでコードを書くLGBTQ+の人々のコミュニティです。そのウェブサイトはレインボー色のテーマを持ち、明るいモードと暗いモードの両方に対応したカスタムシンタックスハイライトを提供し、ナビゲーションバーにいくつかの楽しいカスタム設定を備えています。
- [Marten Walk's website](https://martenw.com/) - マートン・ウォーカーの学術サイトで、フィナンシャル・タイムズをインスピレーションに受けて作られたカスタムテーマを採用し、現代的なデザインと多くのカスタム設定（つまり、カスタムフォント、カスタムグラフなど）を備えています。
- [Skimpy documentation](https://aeturrell.github.io/skimpy/) `quartodoc`で作成されたドキュメンテーション.
- [Juan Torres Munguía's website](https://github.com/jatorresmunguia/juan-torresmunguia.github.io) Quartoサイトで、flatlyからアダプテッドされたカスタムテーマを採用し、ホームページに軽量かつインタラクティブなキャンバス背景を提供するparticles.jsを統合（see <https://juan-torresmunguia.netlify.app/>）.
- [DES RAP Book](https://pythonhealthdatascience.github.io/des_rap_book/) - PythonおよびRで離散イベントシミュレーションモデルを開発するためのセルフペイズトレーニングリソースで、各ページの上部に言語の切り替えを可能にするトグルが設けられています。
- [Noah Weidig's website](https://github.com/noahweidig/noahweidig.github.io) - カスタム明るい／暗いテーマ（cosmoに基づく）を備えた1ページのポートフォリオとブログ、インタラクティブな3D地球、およびポストレンダリングスクリプトによるOpen Graphカードの生成を実現しています。
- [Quarto Pressmark](https://mdwm.org/quarto-pressmark/) 新聞やtufte-cssにインスパイアされた、美しく、タイプグラフィックでミニマリストなQuartoサイトテーマ。カスタムフォントと広範なカスタムスタイルを備えている（see <https://github.com/skriptum/quarto-pressmark>）.
- [ggsegverse](https://ggsegverse.github.io/) Rパッケージエコシステム向けの脳セグメンテーション可視化サイト。カスタムテーマとr-universe APIとのJavaScript統合を実現（see `ggsegverse`）.

### 書籍形式 <a id="book-formats"></a>

- [R for Data Science, 2E](https://github.com/hadley/r4ds/) 『R for Data Science』第2版（see <https://r4ds.hadley.nz/>）.
- [R Packages, 2E](https://github.com/hadley/r-pkgs/) 『R Packages』第2版（see <https://r-pkgs.org/>）.
- [mlr3book](https://github.com/mlr-org/mlr3book/tree/main/book/) パッケージエコシステムに関する書籍（see ）. [`mlr3`](https://mlr3.mlr-org.com/) <https://mlr3book.mlr-org.com/>
- [Introduction to Data Analysis with R](https://jmbuhr.de/dataintro/) - ビデオと講義スクリプトを含む導入コース（Quarto書形式）.
- [Python for Data Analysis, 3E](https://github.com/wesm/pydata-book) 『Python for Data Analysis』第3版（see <https://wesmckinney.com/book/>）.
- [Network Science: Models, Mathematics, and Computation](https://github.com/network-science-notes/network-science-notes.github.io) ネットワーク科学の大学レベル講義ノート。カスタムCSSとGoogle Colabによる同伴ライブコーディングノートを備えている（see <https://network-science-notes.github.io/>）.
- [Quarto for Scientists](https://github.com/njtierney/qmd4sci) 再現可能なレポートを書くための科学者向けの「生きている書籍」（Quartoで作成）（see <https://qmd4sci.njtierney.com/>）.
- [Quarto: The Practical Guide](https://github.com/mine-cetinkaya-rundel/quarto-tdg) Mine Çetinkaya-Rundel と Charlotte Wickham による Quarto についての概念から始まるガイド書。公式リファレンスドキュメントを補完（参照：<https://quarto-tdg.org/>）.
- [Applied Machine Learning for Tabular Data](https://github.com/aml4td/website) Max Kuhn と Kjell Johnson によるテーブルベース機械学習に関するオープンテキスト。本体の内容はソフトウェアに依存せず、別途の計算補助資料と分離されている（参照：<https://aml4td.org/>）.

### その他の形式 <a id="other-formats"></a>

- [Scrollytelling with Closeread](https://github.com/nrennie/scrollytelling) Closeread エクステンションを用いて構築されたスクロリーテリングデータストーリーのコレクション。線グラフ、弧グラフ、Gapminder風アニメーションをカバー（参照：<https://nrennie.rbind.io/scrollytelling/>）.
- [GitHub open-source dashboard](https://github.com/schochastics/gh-dashboard) Quarto ダッシュボード。メンテナーのオープンソースプロジェクトの健康状態、CRANの状態、週間活動をモニタリング（参照：<https://schochastics.github.io/gh-dashboard/>）.




## フォロー <a id="follow"></a>



### 公式 <a id="official"></a>

- GitHub Organisations
  - [@quarto-dev](https://github.com/quarto-dev) - Quarto CLI、IDEプラグイン／拡張機能など、Quartoのツールを含むGitHub組織です。
  - [@quarto-ext](https://github.com/quarto-ext) - Quartoのチームが開発・維持している拡張機能を含むGitHub組織です。
  - [@quarto-journals](https://github.com/quarto-journals) - Quartoのチームが開発・維持しているジャーナルテンプレートを含むGitHub組織です。
- Current members:
  - [Christophe Dervieux (\@cderv)](https://github.com/cderv) Quarto コアチームメンバー（BlueSky：[\@cderv.bsky.social](https://bsky.app/profile/cderv.bsky.social)）.
  - [Carlos Scheidegger (\@cscheid)](https://github.com/cscheid) Quarto コアチームメンバー（BlueSky：[\@cscheid.net](https://bsky.app/profile/cscheid.net)）.
  - [Gordon Woodhull (\@gordonwoodhull)](https://github.com/gordonwoodhull) Quarto コアチームメンバー（BlueSky：[\@gordonwoodhull.bsky.social](https://bsky.app/profile/gordonwoodhull.bsky.social)）.
- Past members:
  - [J.J. Allaire (\@jjallaire)](https://github.com/jjallaire/) - Quartoコアチームのメンバーです。
  - [Charles Teague (\@dragonstyle)](https://github.com/dragonstyle) - Quartoコアチームのメンバーです。
  - [Yihui Xie (\@yihui)](https://github.com/yihui) - Quartoコアチームのメンバーです。
  - [Tom Mock (\@jthomasmock)](https://github.com/jthomasmock) - 顧客支援およびQuarto製品マネージャーです。

### コミュニティ <a id="community"></a>

- [Mickaël Canouil (\@mcanouil)](https://github.com/mcanouil) Awesome Quarto リストのメンテナー（BlueSky：[\@mickael.canouil.fr](https://bsky.app/profile/mickael.canouil.fr)）.
- [Nicola Rennie (\@nrennie)](https://github.com/nrennie) PDFおよびTypstのスタイル、アクセシビリティ、ClosereadのスクロリーテリングについてのQuartoチュートリアルを投稿（BlueSky：[\@nrennie.bsky.social](https://bsky.app/profile/nrennie.bsky.social)）.
- [Emil Hvitfeldt (\@EmilHvitfeldt)](https://github.com/EmilHvitfeldt) Quarto `revealjs`プレゼンテーションのスタイルに関するSlidecraftシリーズの著者（BlueSky：[\@emilhvitfeldt.bsky.social](https://bsky.app/profile/emilhvitfeldt.bsky.social)）.
- [Isabella Velásquez (\@ivelasq)](https://github.com/ivelasq) Quarto ダッシュボードおよび`brand.yml`のチュートリアル、講演、posit::glimpse() ニュースレターを投稿（BlueSky：[\@ivelasq3.bsky.social](https://bsky.app/profile/ivelasq3.bsky.social)）.
- [Albert Rapp (\@AlbertRapp)](https://github.com/AlbertRapp) Quarto ブロッキング、Typst、ウェブ開発に関するチュートリアルをブログおよびニュースレターを通じて投稿（BlueSky：[\@albertrapp.bsky.social](https://bsky.app/profile/albertrapp.bsky.social)）.

_Who else should we be following!?_

## コントリビューション <a id="contributing"></a>

これらの[コントリビューター](https://github.com/mcanouil/awesome-quarto/graphs/contributors)に感謝します。
