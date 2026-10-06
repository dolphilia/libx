---
title: "Awesome Draft.js"
description: "React向けのDraft.jsを使ったリッチテキストエディター、プラグイン、デコレーター、変換ユーティリティ、講演、記事、デモ。"
licenseSource: "github-nikgraf-awesome-draft-js-readme-md"
---

# Awesome Draft.js

[Draft.js](https://draftjs.org/)は、Reactでリッチテキストエディターを作るためのフレームワークです。独立したエディター、プラグインとデコレーター、コンテンツの変換ユーティリティ、講演、記事、デモ、v0.10.0用のサンプル、コミュニティのほか、固定原文に記載された本番環境での採用例を探せます。

## <a id="community"></a>コミュニティ

* [Slackチャンネル](https://draftjs.herokuapp.com/)

## <a id="presentations"></a>発表
* [Rich Text Editing with React @ React.js Conf 2016 by Isaac Salier-Hellendag ](https://www.youtube.com/watch?v=feUYwoLhE_4)
* [Rich text editing with Draft.js & DraftJS Plugins by Nik Graf](https://www.youtube.com/watch?v=gxNuHZXZMgs)
* [React Ep. 37: Draftjs by What I Learned Today – Atomic Jolt](https://www.youtube.com/watch?v=0k9suXgCtTA)
* [008 - Draft.js Plugins @ React30](https://www.youtube.com/watch?v=w-PqnpMizcQ)
* [Draft.js at HubSpot by Ben Briggs](https://product.hubspot.com/blog/tech-talk-at-night-react-meetup)
* [Draft.js under the hood - React Melbourne meetup](https://www.youtube.com/watch?feature=player_embedded&v=vOZAO3jFSHI)

## <a id="standalone-editors-built-on-draftjs"></a>Draft.js 上に構築されたスタンドアロンエディター

* [Draft WYSIWYG](https://github.com/bkniffler/draft-wysiwyg) - ドラッグ＆ドロップ、サイズ変更、ツールチップを備えたWYSIWYGエディター。
* [Draft.js Editor](https://github.com/AlastairTaft/draft-js-editor/) - MediumとFacebook Notesに着想を得たリッチテキストエディター。
* [React-RTE](https://github.com/sstur/react-rte/) - CKEditorやTinyMCEに似た多機能なtextareaの代替。
* [Facebook Notes Clone(ish)](https://github.com/andrewcoelho/react-text-editor) - Facebook Notesに似たリッチテキストエディター。
* [Megadraft](https://github.com/globocom/megadraft) - 標準のプラグイン群と拡張性を備えたリッチテキストエディター。
* [Medium Draft](https://github.com/brijeshb42/medium-draft) - キーボードショートカットに重点を置くMedium風のリッチテキストエディター。
* [React-Draft-Wyiswyg](https://github.com/jpuri/react-draft-wysiwyg) - さまざまなテキスト編集オプションと、それに対応するHTML生成を備えたWYSIWYGエディター。
* [Dante 2](https://github.com/michelson/dante2) - Draft.jsで作られたMediumのクローン。
* [Last Draft](https://github.com/vacenz/last-draft) - Draft.jsのプラグインで作られたDraftエディター。
* [Z-Editor](https://github.com/Z-Editor/Z-Editor) - オンラインのZ記法エディター。
* [Draftail](https://github.com/springload/draftail/) - Wagtail向けに作られた、Draft.jsを基にした設定可能なリッチテキストエディター。
* [Braft](https://github.com/margox/braft-editor) - 拡張可能なDraft.jsエディター。

## <a id="plugins-and-decorators-built-for-draftjs"></a>Draft.js 向けに構築されたプラグインとデコレーター

* [Draft.js Plugins](https://github.com/draft-js-plugins/draft-js-plugins) - Draft.js上で使うプラグインの仕組み。
  - [配置](https://www.draft-js-plugins.com/plugin/alignment)
  - [Block Breakout](https://github.com/icelab/draft-js-block-breakout-plugin) - 入力中に特定のブロック形式を解除する機能。
  - [ボタン](https://github.com/vacenz/last-draft-js-plugins)
  - [色の選択](https://github.com/vacenz/last-draft-js-plugins)
  - [カウンター](https://www.draft-js-plugins.com/plugin/counter) - 文字数、単語数、行数のカウント。
  - [区切り](https://github.com/simsim0709/draft-js-plugins/tree/master/draft-js-divider-plugin)
  - [ドラッグ＆ドロップ](https://www.draft-js-plugins.com/plugin/drag-n-drop)
  - [埋め込み](https://github.com/vacenz/last-draft-js-plugins)
  - [絵文字](https://www.draft-js-plugins.com/plugin/emoji) - Slack風の絵文字への対応。
  - [絵文字の選択](https://github.com/vacenz/last-draft-js-plugins)
  - [フォーカス](https://www.draft-js-plugins.com/plugin/focus)
  - [GIFの選択](https://github.com/vacenz/last-draft-js-plugins)
  - [ハッシュタグ](https://www.draft-js-plugins.com/plugin/hashtag) - Twitter風のハッシュタグへの対応。
  - [画像](https://www.draft-js-plugins.com/plugin/image)
  - [インラインツールバー](https://www.draft-js-plugins.com/plugin/inline-toolbar)
  - [Katex](https://github.com/letranloc/draft-js-katex-plugin) - KatexでLaTeXを挿入・描画する機能。
  - [リンク](https://github.com/vacenz/last-draft-js-plugins)
  - [Linkify](https://www.draft-js-plugins.com/plugin/linkify) - リンクを自動でaタグに変換する機能。
  - [リスト](https://github.com/samuelmeuli/draft-js-list-plugin) - リストの自動作成と入れ子のリスト。
  - [Markdownショートカット](https://github.com/ngs/draft-js-markdown-shortcuts-plugin/) - Markdown構文のショートカット。
  - [Mathjax](https://github.com/tarjei/draft-js-mathjax-plugin) - Mathjaxが描画する(La)TeXを使った数式編集。
  - [メンション](https://www.draft-js-plugins.com/plugin/mention) - Twitter風のメンションへの対応。
  - [モーダル](https://github.com/vacenz/last-draft-js-plugins)
  - [Prism](https://github.com/withspectrum/draft-js-prism-plugin) - Prismでコードブロックの構文を強調表示する機能。
  - [サイズ変更](https://www.draft-js-plugins.com/plugin/resizeable)
  - [RichButtons](https://github.com/jasonphillips/draft-js-richbuttons-plugin) - リッチテキストの書式設定ボタンの追加・カスタマイズ。
  - [サイドツールバー](https://www.draft-js-plugins.com/plugin/side-toolbar)
  - [サイドバー](https://github.com/vacenz/last-draft-js-plugins)
  - [1行入力](https://github.com/icelab/draft-js-single-line-plugin) - 入力を1行に制限する機能。
  - [ステッカー](https://www.draft-js-plugins.com/plugin/sticker) - Facebook風のステッカーへの対応。
  - [ツールバー](https://github.com/vacenz/last-draft-js-plugins)
  - [元に戻す](https://www.draft-js-plugins.com/plugin/undo) - 元に戻す・やり直すボタン。
  - [動画](https://www.draft-js-plugins.com/plugin/video)
* [Draft.js Gutter](https://github.com/seejamescode/draft-js-gutter) - Draft.jsに行番号欄を追加する部品。
* [Draft.js Basic HTML Editor](https://github.com/dburrows/draft-js-basic-html-editor) - HTMLを入力形式として受け取り、onChangeにHTMLを返すエディター。
* [Draft.js Prism](https://github.com/SamyPesse/draft-js-prism) - Prismを使ったコードブロックの強調表示。
* [Draft.js Typeahead](https://github.com/dooly-ai/draft-js-typeahead) - 入力候補の提示機能への対応。
* [Draft Extend](https://github.com/HubSpot/draft-extend) - 設定可能なプラグインと統合されたシリアライズ機能を備える、拡張可能なDraft.jsエディターの構築。
* [Draft.js Code](https://github.com/SamyPesse/draft-js-code) - コード編集をしやすくする低レベルのユーティリティ集。
* [Draft.js Annotatable](https://github.com/cltk/annotations) - ユーザーによる注釈の作成に対応する、すぐに使えるDraft.js向け注釈システム。
* [Draft.js Regex](https://github.com/YozhikM/draft-regex) - 正規表現、空行の防止、貼り付けたHTMLの消去などの柔軟な補助機能。

## <a id="common-utilities"></a>共通ユーティリティ

* [BackDraft.js](https://github.com/evanc/backdraft-js) - rawContentBlockをマークアップ付きの文字列に変換する関数。
* [Draft.js Exporter](https://github.com/rkpasia/draft-js-exporter) - Draft.jsのコンテンツのエクスポートと整形。
* [Draft.js: Export ContentState to HTML](https://github.com/sstur/draft-js-utils/tree/master/packages/draft-js-export-html) - ContentStateのHTMLへのエクスポート。
* [Draft.js: Export ContentState to PDFMake](https://github.com/datagenno/draft-js-export-pdfmake) - ContentStateのPDFMakeへのエクスポート。
* [Redraft](https://github.com/lokiuz/redraft) - 指定したコールバックでDraft.jsのconvertToRawの結果を描画し、Reactと相性のよいライブラリ。
* [Draft.js exporter (Ruby)](https://github.com/ignitionworks/draftjs_exporter) - Draft.jsのコンテンツ状態のHTMLへのエクスポート。
* [Draft.js exporter (Python)](https://github.com/springload/draftjs_exporter) - Draft.jsのraw ContentStateをHTMLに変換するライブラリ。
* [Draft.js AST Exporter](https://github.com/icelab/draft-js-ast-exporter) - コンテンツの抽象構文木（AST）へのエクスポート。
* [Draft.js AST Importer](https://github.com/icelab/draft-js-ast-importer) - 対になるdraft-js-ast-exporterが出力した抽象構文木（AST）のインポート。
* [Draft.js Multidecorators](https://github.com/SamyPesse/draft-js-multidecorators) - 複数のデコレーターの組み合わせ。
* [Draft.js SimpleDecorator](https://github.com/Soreine/draft-js-simpledecorator) - 柔軟なデコレーターを簡単に作成する機能。
* [DraftJS Utils](https://github.com/jpuri/draftjs-utils) - DraftJS向けのユーティリティ関数集。
* [DraftJs to HTML](https://github.com/jpuri/draftjs-to-html) - DraftJSエディターのコンテンツからHTMLを生成するライブラリ。
* [Draft Convert](https://github.com/HubSpot/draft-convert) - 拡張可能な方法で行う、Draft.jsのContentStateとHTMLの間のシリアライズ・デシリアライズ。
* [HTML to DraftJS](https://github.com/jpuri/html-to-draftjs) - 通常のHTMLからDraftJSエディターのコンテンツへの変換。
* [Draft.js Exporter (Go)](https://github.com/ejilay/draftjs) - Draft.jsのコンテンツ状態のHTMLへのエクスポート。
* [React Native Draft.js Render](https://github.com/globocom/react-native-draftjs-render) - Draft.jsのモデルを描画するReact Native向けの部品。
* [Draft.js filters](https://github.com/thibaudcolas/draftjs-filters) - 許可した書式だけを残すDraft.jsコンテンツのフィルター。
* [Sticky](https://github.com/nadunindunil/sticky) - メモ作成とクリップボード管理用のデスクトップアプリ。

## <a id="blog-posts--articles"></a>ブログ記事

* [Facebook open sources rich text editor framework Draft.js](https://code.facebook.com/posts/1684092755205505/facebook-open-sources-rich-text-editor-framework-draft-js/)
* [This Blog Post Was Written Using Draft.js](https://dev.to/ben/this-blog-post-was-written-using-draftjs)
* [How Draft.js Represents Rich Text Data](https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.7gd8psdvi)
* [A Beginner’s Guide to Draft.js](https://medium.com/@adrianli/a-beginner-s-guide-to-draft-js-d1823f58d8cc#.uufeulpl5)
* [Implementing todo list in Draft.js](http://bitwiser.in/2016/08/31/implementing-todo-list-in-draft-js.html)
* [Draft.js Pieces](https://cannibalcoder.com/2016/12/02/draft-js-pieces/)
* [Learning Draft.js](https://reactrocket.com/series/learning-draft-js/) - Draft.jsを使う開発方法についてのブログ記事シリーズ。
* [Why Wagtail’s new editor is built with Draft.js](https://wagtail.io/blog/why-wagtail-new-editor-is-built-with-draft-js/)
* [Rethinking rich text pipelines with Draft.js](https://wagtail.io/blog/rethinking-rich-text-pipelines-with-draft-js/)

## <a id="live-demos"></a>ライブデモ
* [Draft-js Samples：サンプルとコード解説を備えたアプリ](https://github.com/Mair/react-meetup-draftjs)
* [Draftail Playground](https://draftail-playground.herokuapp.com/) - WagtailのDraft.js関連の依存関係を独立したデモにしたもの。
* [モバイルブラウザー向けDraftのドラッグ＆ドロップデモ](https://github.com/jan4984/draft-dnd-example)

## <a id="playgrounds-for-examples-from-official-repository-v0100"></a><a id="公式リポジトリのサンプル用-playgroundv0100"></a>公式リポジトリのサンプルを試す場（v0.10.0）
* [リッチテキストエディター](https://codepen.io/Kiwka/pen/YNYvyG)
* [色のエディター](https://codepen.io/Kiwka/pen/oBpVve)
* [HTMLから変換するエディター](https://codepen.io/Kiwka/pen/YNYgWa)
* [エンティティのエディター](https://codepen.io/Kiwka/pen/wgpOoZ)
* [リンクのエディター](https://codepen.io/Kiwka/pen/ZLvPeO)
* [メディアのエディター](https://codepen.io/Kiwka/pen/rjpRzj)
* [プレーンテキストエディター](https://codepen.io/Kiwka/pen/jyYJzb)
* [デコレーターのエディター：ツイートの例](https://codepen.io/Kiwka/pen/KaZERV)

## <a id="usage-in-production"></a>本番環境での利用
* [StoryChief](https://www.storychief.io/)
* [HKW Technosphere Magazine](https://technosphere-magazine.hkw.de/)
* [Douban Read](https://read.douban.com/editor_ng)
* [Dooly](https://www.dooly.ai)
* [Wagtail](https://wagtail.io/)
* [Patreon](https://www.patreon.com/)
