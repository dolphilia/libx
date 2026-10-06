---
title: "Awesome text editing"
description: "ウェブのリッチテキスト・コードエディター、Markdownツール、contenteditableエディターの評価基準を案内します。"
licenseSource: "github-dok-awesome-text-editing-readme-md"
---

# Awesome text editing

ウェブのテキスト編集ライブラリーと資料を探せます。contenteditableを使うリッチテキストエディター、ブラウザー向けコードエディター、Markdownツール、contenteditableエディターの評価基準を掲載しています。依存ライブラリー、編集モード、選択時の要件も確認できます。

## contenteditable を使うリッチテキストエディター
* [Slate](https://github.com/ianstormtaylor/slate) - React と Immutable を基盤に構築されたリッチテキストエディター
* [TipTap](https://github.com/scrumpy/tiptap) - Vue.js 向けリッチテキストエディター
* [Trix](https://github.com/basecamp/trix) - Basecamp のリッチテキストエディター
* [CKEditor](http://ckeditor.com/) - 2003 年に開始。iframe とインライン形式のリッチテキスト編集に対応
* [Squire](https://github.com/neilj/Squire) - HTML5 リッチテキストエディター
* [ProseMirror](http://prosemirror.net/) - CodeMirror の作者によるエディター
* [Scribe](https://github.com/guardian/scribe) - [Guardian](http://www.theguardian.com/) チームによるエディター
* [Quill](http://quilljs.com/) - ウェブ向けの無料・オープンソースWYSIWYGエディター
* [Summernote](http://summernote.org/) - Bootstrap に依存するリッチテキストエディター
* [wysihtml](http://wysihtml.com/) - Voog が開発
* [Etherpad](http://etherpad.org/) - リアルタイム共同編集を提供するオープンソースのオンラインエディター
* [TinyMCE](http://www.tinymce.com/) - WordPress と Drupal のコミュニティで広く利用
* [Medium.js](http://jakiestfu.github.io/Medium.js/docs/) - 注意：[Medium](https://medium.com/) では実際には使用されていません
* [Textbox.IO](https://textbox.io/) - TinyMCE の開発元によるエディター
* [Froala](https://www.froala.com/wysiwyg-editor) - モバイル対応、豊富な利用例、インライン編集を備え、原文では高性能と説明されるリッチテキストエディター
* [Redactor](http://imperavi.com/redactor/) - リッチテキストエディター
* [Ritzy](https://github.com/ritzyed/ritzy) - ウェブベースの共同リッチテキストエディター
* [Aloha Editor](http://www.alohaeditor.org/Content.Node/index.html) - HTML5 対応のオープンソース・ブラウザー向けのリッチテキストエディター
* [WYMeditor](http://www.wymeditor.org/) - セマンティックなマークアップを重視するオープンソース XHTML エディター
* [Dijit Editor](http://dojotoolkit.org/) - Dojo ベースのリッチテキストエディターコンポーネント
* [YUI Rich Text Editor](http://yui.github.io/yui2/) - Yahoo! のリッチテキストエディターコンポーネント
* [KindEditor](https://github.com/kindsoft/kindeditor) - オープンソース HTML エディター
* [Hallo](https://github.com/bergie/hallo) - jQuery UI 向けのリッチテキストエディター（contentEditable）
* [markitup](http://markitup.jaysalvat.com/home/) - 汎用マークアップ jQuery エディター
* [openwysiwyg](http://www.openwebware.com/) - 無料のクロスブラウザー WYSIWYG エディター
* [tejQuery](http://jqueryte.com/) - 軽量（19.5 KB）のHTMLエディター
* [Trumbowyg](http://alex-d.github.io/Trumbowyg/) - 軽量で翻訳・カスタマイズ可能な jQuery プラグイン
* [NicEdit](http://nicedit.com/) - 原文では2012年に開発終了と記載
* [jWYSIWYG](https://github.com/jwysiwyg/jwysiwyg) - WYSIWYG jQuery プラグイン
* [Alloy](http://alloyeditor.com/) - CKEDITORを基盤に構築されたWYSIWYGエディター
* [Draft.js](http://facebook.github.io/draft-js/) - React 向けリッチテキストエディターフレームワーク
* [MediumEditor](https://github.com/yabwe/medium-editor) - medium.com のインラインエディターツールバーのクローン。contenteditable APIによるリッチテキスト編集。

## コードエディター

* [Yace](https://solopov.dev/yace) - プラグイン対応のブラウザー向け 1 KB コードエディター
* [CodeJar](https://medv.io/codejar/) - ブラウザー向けの小型コードエディター
* [CodeMirror](https://codemirror.net/) - ブラウザー向けにJavaScriptで実装されたテキストエディター
* [Ace](https://ace.c9.io/#nav=about) - JavaScript で書かれた埋め込み可能なコードエディター
* [EditArea](http://www.cdolivet.com/editarea/editarea/exemples/exemple_full.html)
* [Behave.js](http://jakiestfu.github.io/Behave.js/) - 通常のテキストエリアに IDE のような動作を追加する軽量ライブラリ

## Markdown エディター

* [markdown-js](https://github.com/evilstreak/markdown-js) - JavaScript 向け Markdown パーサー
* [pagedown](https://code.google.com/p/pagedown/wiki/PageDown) - Stack Overflow とその他の Stack Exchange ネットワークで使用される JavaScript Markdown プレビュー

## contenteditable リッチテキストエディターの評価基準

原文が示すエディターの評価基準：
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
