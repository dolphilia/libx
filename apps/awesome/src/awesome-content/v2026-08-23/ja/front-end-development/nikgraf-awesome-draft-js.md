---
title: "Awesome Draft.js"
description: "Draft.jsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-nikgraf-awesome-draft-js-readme-md"
---

# Awesome Draft.js

Draft.jsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## コミュニティ

* [Slack チャンネル](https://draftjs.herokuapp.com/)

## 発表
* [Isaac Salier-Hellendag による Rich Text Editing with React @ React.js Conf 2016](https://www.youtube.com/watch?v=feUYwoLhE_4)
* [Nik Graf による Draft.js と DraftJS Plugins を使った Rich Text 編集](https://www.youtube.com/watch?v=gxNuHZXZMgs)
* [React 第37回：What I Learned Today – Atomic Jolt による Draft.js](https://www.youtube.com/watch?v=0k9suXgCtTA)
* [008 - Draft.js Plugins @ React30](https://www.youtube.com/watch?v=w-PqnpMizcQ)
* [Ben Briggs による HubSpot の Draft.js](https://product.hubspot.com/blog/tech-talk-at-night-react-meetup)
* [Draft.js の内部 - React Melbourne Meetup](https://www.youtube.com/watch?feature=player_embedded&v=vOZAO3jFSHI)

## Draft.js 上に構築されたスタンドアロンエディター

* [Draft WYSIWYG](https://github.com/bkniffler/draft-wysiwyg) - Drag & Drop、Resize、Tooltip を備えた WYSIWYG Editor です。
* [Draft.js Editor](https://github.com/AlastairTaft/draft-js-editor/) - Medium と Facebook Notes に着想を得た Rich Text Editor です。
* [React-RTE](https://github.com/sstur/react-rte/) - CKEditor や TinyMCE に似た高機能な Textarea 代替です。
* [Facebook Notes Clone(ish)](https://github.com/andrewcoelho/react-text-editor) - Facebook Notes に似た Rich Text Editor です。
* [Megadraft](https://github.com/globocom/megadraft) - 使いやすい標準 Plugin 群と拡張性を備えた Rich Text Editor です。
* [Medium Draft](https://github.com/brijeshb42/medium-draft) - Keyboard Shortcut に重点を置いた Medium 風 Rich Text Editor です。
* [React-Draft-Wyiswyg](https://github.com/jpuri/react-draft-wysiwyg) - さまざまなテキスト編集オプションと、それに対応する HTML 生成を備えた WYSIWYG Editor です。
* [Dante 2](https://github.com/michelson/dante2) - Draft.js 上に構築された、もう1つの Medium Clone です。
* [Last Draft](https://github.com/vacenz/last-draft) - Draft.js Plugin で構築された Draft Editor です。
* [Z-Editor](https://github.com/Z-Editor/Z-Editor) - オンライン Z 記法エディターです。
* [Draftail](https://github.com/springload/draftail/) - Wagtail 用に構築された、Draft.js ベースの設定可能な Rich Text Editor です。
* [Braft](https://github.com/margox/braft-editor) - 拡張可能な Draft.js Editor です。

## Draft.js 向けに構築されたプラグインとデコレーター

* [Draft.js Plugins](https://github.com/draft-js-plugins/draft-js-plugins) - Draft.js 上の Plugin Architecture です。
  - [配置](https://www.draft-js-plugins.com/plugin/alignment)
  - [Block Breakout](https://github.com/icelab/draft-js-block-breakout-plugin) - 入力しながら Block Type から抜けます。
  - [ボタン](https://github.com/vacenz/last-draft-js-plugins)
  - [Color Picker](https://github.com/vacenz/last-draft-js-plugins)
  - [カウンター](https://www.draft-js-plugins.com/plugin/counter) - 文字数、単語数、行数を数えます。
  - [区切り](https://github.com/simsim0709/draft-js-plugins/tree/master/draft-js-divider-plugin)
  - [Drag and Drop](https://www.draft-js-plugins.com/plugin/drag-n-drop)
  - [埋め込み](https://github.com/vacenz/last-draft-js-plugins)
  - [絵文字](https://www.draft-js-plugins.com/plugin/emoji) - Slack 風の絵文字対応です。
  - [EmojiPicker](https://github.com/vacenz/last-draft-js-plugins)
  - [Focus](https://www.draft-js-plugins.com/plugin/focus)
  - [GifPicker](https://github.com/vacenz/last-draft-js-plugins)
  - [Hashtag](https://www.draft-js-plugins.com/plugin/hashtag) - Twitter 風の Hashtag 対応です。
  - [画像](https://www.draft-js-plugins.com/plugin/image)
  - [Inline Toolbar](https://www.draft-js-plugins.com/plugin/inline-toolbar)
  - [KaTeX](https://github.com/letranloc/draft-js-katex-plugin) - KaTeX で LaTeX を挿入・レンダリングします。
  - [Link](https://github.com/vacenz/last-draft-js-plugins)
  - [Linkify](https://www.draft-js-plugins.com/plugin/linkify) - Link を自動的に Anchor Tag へ変換します。
  - [List](https://github.com/samuelmeuli/draft-js-list-plugin) - List の自動作成と入れ子 List に対応します。
  - [Markdown Shortcut](https://github.com/ngs/draft-js-markdown-shortcuts-plugin/) - Markdown 構文の Shortcut です。
  - [MathJax](https://github.com/tarjei/draft-js-mathjax-plugin) - MathJax がレンダリングする (La)TeX で数式を編集します。
  - [Mention](https://www.draft-js-plugins.com/plugin/mention) - Twitter 風の Mention 対応です。
  - [Modal](https://github.com/vacenz/last-draft-js-plugins)
  - [Prism](https://github.com/withspectrum/draft-js-prism-plugin) - Prism で Code Block を構文強調表示します。
  - [Resizeable](https://www.draft-js-plugins.com/plugin/resizeable)
  - [RichButtons](https://github.com/jasonphillips/draft-js-richbuttons-plugin) - Rich Formatting Button を追加・カスタマイズします。
  - [Side Toolbar](https://www.draft-js-plugins.com/plugin/side-toolbar)
  - [Sidebar](https://github.com/vacenz/last-draft-js-plugins)
  - [Single Line](https://github.com/icelab/draft-js-single-line-plugin) - 入力を1行に制限します。
  - [Sticker](https://www.draft-js-plugins.com/plugin/sticker) - Facebook 風の Sticker 対応です。
  - [Toolbar](https://github.com/vacenz/last-draft-js-plugins)
  - [Undo](https://www.draft-js-plugins.com/plugin/undo) - Undo と Redo の Button です。
  - [動画](https://www.draft-js-plugins.com/plugin/video)
* [Draft.js Gutter](https://github.com/seejamescode/draft-js-gutter) - 行番号 Gutter を補完します。
* [Draft.js Basic HTML Editor](https://github.com/dburrows/draft-js-basic-html-editor) - HTML を入力形式として受け取り、onChange へ HTML を返します。
* [Draft.js Prism](https://github.com/SamyPesse/draft-js-prism)- Prism で Code Block を強調表示します。
* [Draft.js Typeahead](https://github.com/dooly-ai/draft-js-typeahead) - Typeahead 機能に対応します。
* [Draft Extend](https://github.com/HubSpot/draft-extend) - 設定可能な Plugin と統合 Serialization を備えた、拡張可能な Draft.js Editor を構築します。
* [Draft.js Code](https://github.com/SamyPesse/draft-js-code) - より快適なコード編集のための低レベルユーティリティ集です。
* [Draft.js Annotatable](https://github.com/cltk/annotations) - ユーザー作成 Annotation に対応した、すぐに使える Draft.js Annotation System です。
* [Draft.js Regex](https://github.com/YozhikM/draft-regex) - Regex、空行の防止、貼り付けた HTML の消去など、柔軟な Helper 群です。

## 共通ユーティリティ

* [BackDraft.js](https://github.com/evanc/backdraft-js) - rawContentBlock を Markup 付き文字列へ変換する関数です。
* [Draft.js Exporter](https://github.com/rkpasia/draft-js-exporter) - Draft.js のコンテンツをエクスポート・整形します。
* [Draft.js：ContentState を HTML へエクスポート](https://github.com/sstur/draft-js-utils/tree/master/packages/draft-js-export-html) - ContentState を HTML へエクスポートします。
* [Draft.js：ContentState を PDFMake へエクスポート](https://github.com/datagenno/draft-js-export-pdfmake) - ContentState を PDFMake へエクスポートします。
* [Redraft](https://github.com/lokiuz/redraft) - 指定した Callback で Draft.js の convertToRaw の結果をレンダリングし、React と適切に連携します。
* [Draft.js Exporter（Ruby）](https://github.com/ignitionworks/draftjs_exporter) - Draft.js の Content State を HTML へエクスポートします。
* [Draft.js Exporter（Python）](https://github.com/springload/draftjs_exporter) - Draft.js の Raw ContentState を HTML へ変換するライブラリです。
* [Draft.js AST Exporter](https://github.com/icelab/draft-js-ast-exporter) - コンテンツを抽象構文木（AST）へエクスポートします。
* [Draft.js AST Importer](https://github.com/icelab/draft-js-ast-importer)- 対になる draft-js-ast-exporter が出力した抽象構文木（AST）をインポートします。
* [Draft.js Multidecorators](https://github.com/SamyPesse/draft-js-multidecorators) - 複数の Decorator を組み合わせます。
* [Draft.js SimpleDecorator](https://github.com/Soreine/draft-js-simpledecorator) - 柔軟な Decorator を簡単に作成します。
* [DraftJS Utils](https://github.com/jpuri/draftjs-utils) - DraftJS 用 Utility Function 群です。
* [DraftJs to HTML](https://github.com/jpuri/draftjs-to-html) - DraftJS Editor のコンテンツから HTML を生成するライブラリです。
* [Draft Convert](https://github.com/HubSpot/draft-convert) - Draft.js ContentState と HTML の間を拡張可能な方法で Serialize・Deserialize します。
* [HTML to DraftJS](https://github.com/jpuri/html-to-draftjs) - プレーン HTML を DraftJS Editor のコンテンツへ変換します。
* [Draft.js Exporter（Go）](https://github.com/ejilay/draftjs) - Draft.js の Content State を HTML へエクスポートします。
* [React Native Draft.js Render](https://github.com/globocom/react-native-draftjs-render) - Draft.js Model 用の React Native Renderer です。
* [Draft.js Filters](https://github.com/thibaudcolas/draftjs-filters) - 許可した Formatting だけを保持するよう Draft.js コンテンツを Filter します。
* [Sticky](https://github.com/nadunindunil/sticky) - シンプルなメモ作成・Clipboard 管理 Desktop Application です。

## ブログ記事

* [Facebook が Rich Text Editor Framework Draft.js をオープンソース化](https://code.facebook.com/posts/1684092755205505/facebook-open-sources-rich-text-editor-framework-draft-js/)
* [このブログ記事は Draft.js で書かれました](https://dev.to/ben/this-blog-post-was-written-using-draftjs)
* [Draft.js が Rich Text Data を表現する方法](https://medium.com/@rajaraodv/how-draft-js-represents-rich-text-data-eeabb5f25cf2#.7gd8psdvi)
* [初心者向け Draft.js ガイド](https://medium.com/@adrianli/a-beginner-s-guide-to-draft-js-d1823f58d8cc#.uufeulpl5)
* [Draft.js で Todo List を実装する](http://bitwiser.in/2016/08/31/implementing-todo-list-in-draft-js.html)
* [Draft.js の部品](https://cannibalcoder.com/2016/12/02/draft-js-pieces/)
* [Draft.js を学ぶ](https://reactrocket.com/series/learning-draft-js/) - Draft.js で開発する方法を扱うブログ記事シリーズです。
* [Wagtail の新しい Editor が Draft.js で構築されている理由](https://wagtail.io/blog/why-wagtail-new-editor-is-built-with-draft-js/)
* [Draft.js で Rich Text Pipeline を再考する](https://wagtail.io/blog/rethinking-rich-text-pipelines-with-draft-js/)

## ライブデモ
* [Draft-js Samples - サンプルとコード解説を備えたアプリ](https://github.com/Mair/react-meetup-draftjs)
* [Draftail Playground](https://draftail-playground.herokuapp.com/) – Wagtail の Draft.js 依存関係をスタンドアロンデモにしたものです。
* [モバイルブラウザー用 Draft Drag and Drop デモ](https://github.com/jan4984/draft-dnd-example)

## 公式リポジトリのサンプル用 Playground（v0.10.0）
* [Rich Text Editor](https://codepen.io/Kiwka/pen/YNYvyG)
* [Color Editor](https://codepen.io/Kiwka/pen/oBpVve)
* [HTML から変換する Editor](https://codepen.io/Kiwka/pen/YNYgWa)
* [Entity Editor](https://codepen.io/Kiwka/pen/wgpOoZ)
* [Link Editor](https://codepen.io/Kiwka/pen/ZLvPeO)
* [Media Editor](https://codepen.io/Kiwka/pen/rjpRzj)
* [Plain Text Editor](https://codepen.io/Kiwka/pen/jyYJzb)
* [Decorator Editor - Tweet の例](https://codepen.io/Kiwka/pen/KaZERV)

## 本番環境での利用
* [StoryChief](https://www.storychief.io/)
* [HKW Technosphere Magazine](https://technosphere-magazine.hkw.de/)
* [Douban Read](https://read.douban.com/editor_ng)
* [Dooly](https://www.dooly.ai)
* [Wagtail](https://wagtail.io/)
* [Patreon](https://www.patreon.com/)

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Nikolaus Graf](https://github.com/nikgraf/) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
