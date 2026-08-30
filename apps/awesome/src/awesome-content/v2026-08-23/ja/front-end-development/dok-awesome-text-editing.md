---
title: "dok/awesome-text-editing"
description: "dok/awesome-text-editing の正規スナップショット"
licenseSource: "github-dok-awesome-text-editing-readme-md"
---

# Awesome text editing [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
ウェブ向けのテキスト編集ライブラリ、サービス、リソースを厳選したコレクションです。

## contenteditable を使うリッチテキストエディター
* [Slate](https://github.com/ianstormtaylor/slate) - React と Immutable を基盤に構築されたリッチテキストエディター
* [TipTap](https://github.com/scrumpy/tiptap) - Vue.js 向けリッチテキストエディター
* [Trix](https://github.com/basecamp/trix) - Basecamp のリッチテキストエディター
* [CKEditor](http://ckeditor.com/) - 2003 年に開始。iframe とインライン形式のリッチテキスト編集に対応
* [Squire](https://github.com/neilj/Squire) - HTML5 リッチテキストエディター
* [ProseMirror](http://prosemirror.net/) - CodeMirror の作者によるエディター
* [Scribe](https://github.com/guardian/scribe) - [Guardian](http://www.theguardian.com/) チームによるエディター
* [Quill](http://quilljs.com/) - 現代のウェブ向けに構築された無料・オープンソースの WYSIWYG エディター
* [Summernote](http://summernote.org/) - Bootstrap に依存するリッチテキストエディター
* [wysihtml](http://wysihtml.com/) - Voog が開発
* [Etherpad](http://etherpad.org/) - 真のリアルタイム共同編集を提供するオープンソースのオンラインエディター
* [TinyMCE](http://www.tinymce.com/) - WordPress と Drupal のコミュニティで広く利用
* [Medium.js](http://jakiestfu.github.io/Medium.js/docs/) - 注意：[Medium](https://medium.com/) では実際には使用されていません
* [Textbox.IO](https://textbox.io/) - TinyMCE の開発元によるエディター
* [Froala](https://www.froala.com/wysiwyg-editor) - モバイル対応、豊富な例、高い性能、インライン編集を備えた使いやすいリッチテキストエディター
* [Redactor](http://imperavi.com/redactor/) - 高度で整然かつ滑らかに動作し、優れた没入型ユーザー体験を提供するリッチテキストエディター
* [Ritzy](https://github.com/ritzyed/ritzy) - ウェブベースの共同リッチテキストエディター
* [Aloha Editor](http://www.alohaeditor.org/Content.Node/index.html) - HTML5 対応のオープンソース・ブラウザベースのリッチテキストエディター
* [WYMeditor](http://www.wymeditor.org/) - セマンティックなマークアップを重視するオープンソース XHTML エディター
* [Dijit Editor](http://dojotoolkit.org/) - Dojo ベースのリッチテキストエディターコンポーネント
* [YUI Rich Text Editor](http://yui.github.io/yui2/) - Yahoo! のリッチテキストエディターコンポーネント
* [KindEditor](https://github.com/kindsoft/kindeditor) - オープンソース HTML エディター
* [Hallo](https://github.com/bergie/hallo) - jQuery UI 向けのシンプルなリッチテキストエディター（contentEditable）
* [markitup](http://markitup.jaysalvat.com/home/) - 汎用マークアップ jQuery エディター
* [openwysiwyg](http://www.openwebware.com/) - 無料のクロスブラウザー WYSIWYG エディター
* [tejQuery](http://jqueryte.com/) - 軽量（19.5 KB）で便利な HTML エディター
* [Trumbowyg](http://alex-d.github.io/Trumbowyg/) - 軽量で翻訳・カスタマイズ可能な jQuery プラグイン
* [NicEdit](http://nicedit.com/) - 2012 年に開発終了
* [jWYSIWYG](https://github.com/jwysiwyg/jwysiwyg) - WYSIWYG jQuery プラグイン
* [Alloy](http://alloyeditor.com/) - CKEDITOR 上に構築された現代的な WYSIWYG エディター
* [Draft.js](http://facebook.github.io/draft-js/) - React 向けリッチテキストエディターフレームワーク
* [MediumEditor](https://github.com/yabwe/medium-editor) - medium.com のインラインエディターツールバーのクローン。contenteditable API でリッチテキスト編集を実現します。

## コードエディター

* [Yace](https://solopov.dev/yace) - プラグイン対応のブラウザー向け 1 KB コードエディター
* [CodeJar](https://medv.io/codejar/) - ブラウザー向けの小型コードエディター
* [CodeMirror](https://codemirror.net/) - ブラウザー向けに JavaScript で実装された多用途テキストエディター
* [Ace](https://ace.c9.io/#nav=about) - JavaScript で書かれた埋め込み可能なコードエディター
* [EditArea](http://www.cdolivet.com/editarea/editarea/exemples/exemple_full.html)
* [Behave.js](http://jakiestfu.github.io/Behave.js/) - 通常のテキストエリアに IDE のような動作を追加する軽量ライブラリ


## Markdown エディター

* [markdown-js](https://github.com/evilstreak/markdown-js) - JavaScript 向け Markdown パーサー
* [pagedown](https://code.google.com/p/pagedown/wiki/PageDown) - Stack Overflow とその他の Stack Exchange ネットワークで使用される JavaScript Markdown プレビュー

## contenteditable リッチテキストエディターの評価基準

エディターに求められる要件：
* 安定している
* オープンソースである
* ソフト改行を処理できる
* ブロックレベル要素のスタイルを操作できる
* インラインレベル要素のスタイルを操作できる
* ブロックレベル要素のクラスを操作できる
* インラインレベル要素のクラスを操作できる
* ブロックレベル要素のカスタム属性を変更できる
* インラインレベル要素のカスタム属性を変更できる
* 選択範囲をキャッシュする
* iframe とインラインの両方のモードに対応する
* ノードのタグ種別を変更できる
* 書式を消去できる
* 簡潔な API を備える
* さまざまなモジュールローダーに対応する
    * AMD と Common.js
* サービスを支える組織があり、有償サポートプランを提供できる可能性がある
* Microsoft Word からコピー＆ペーストできる


## ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
