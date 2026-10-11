---
title: "Awesome Frontend Development"
description: "外観、設計、互換性、コミュニティ、ウェブ標準、UI部品、開発ワークフローの分野別資料へ案内するフロントエンド開発の索引。"
licenseSource: "github-dypsilon-frontend-dev-bookmarks-readme-md"
---

# Awesome Frontend Development

フロントエンド開発の分野別資料を探すための索引です。外観、設計、互換性、コミュニティ、ウェブ標準、UI部品、開発ワークフローを7分類で案内します。Libxにはこの索引を収録し、各分野の資料一覧は固定原文のGitHubファイルで開きます。

固定原文には、全資料を1ページにまとめた[一括版](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/TOTALLY-GIGANTIC-FILE.md)もあります。原文は別の閲覧用サイト[frontend.directory](http://frontend.directory/)も案内しています。

固定原文では、分野別ファイルに分けた版が継続更新の対象とされています。古いブックマークには上流タグv.1.0を案内していますが、そこには古くなったリンクが多数あると注意しています。

## 外観

Webサイトの見た目を構成する要素。

- [アニメーション](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/appearance/animation.md) - 動きや形状変化を作り出す処理。
- [タイポグラフィ](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/appearance/typography.md) - 組版された文字の書体、配置、外観。
- [可視化](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/appearance/visualization.md) - データを視覚的な文脈へ配置すること。

## アーキテクチャ <a id="architecture"></a>

フロントエンドコード全体の構造と、その設計方法。

- [アルゴリズム](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/architecture/algorithms.md) - 実行する処理を自己完結した手順として定めたもの。計算、データ処理、自動推論などを行う。
- [デザインパターン](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/architecture/design-patterns.md) - アプリケーションやシステムの設計でよくある問題に再利用できる解決方法。
- [設計](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/architecture/designs.md) - すぐ利用でき、文書が用意されたフロントエンド開発用の構造やフレームワーク。
- [イベント駆動プログラミング](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/architecture/event-driven-programming.md) - ユーザー操作、センサー出力、ほかのプログラムやスレッドからのメッセージなどのイベントで処理の流れが決まるプログラミングパラダイム。
- [関数型プログラミング](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/architecture/functional-programming.md) - 計算を数学的関数の評価として扱い、状態変更や可変データを避けるプログラミングパラダイム。
- [関数型リアクティブプログラミング（FRP）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/architecture/functional-reactive-programming-frp.md) - 関数型プログラミングの構成要素を使って非同期データフローを扱うプログラミングパラダイム。

## 互換性 <a id="compatibility"></a>

プリンター、メール、モバイル端末、各種ブラウザーなど、異なる入出力機器やレンダリングソフトウェアで製品を動作させる能力。

- [クロスブラウザー](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/compatibility/cross-browser.md) - Webサイト、Webアプリケーション、HTML構造、クライアント側スクリプトが、必要な機能を備えた環境で動作し、機能がない環境でも適切に動作を停止するか、機能を限定して動作できること。
- [メール](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/compatibility/e-mail.md) - HTML形式の電子メールを作成すること。
- [キーボード](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/compatibility/keyboard.md) - Webブラウザーでキーボード入力を扱うこと。
- [モバイル](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/compatibility/mobile.md) - スマートフォンやタブレットでの閲覧に最適化したWebサイトの開発。
- [プリンター](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/compatibility/printers.md) - CSSによる印刷出力の制御。
- [レスポンシブWebデザイン（RWD）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/compatibility/responsive-web-design-rwd.md) - 利用者と端末の要件に応じ、端末の寸法や能力に基づいてレイアウトを変化させる設計。
- [Webアクセシビリティ](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/compatibility/web-accessibility.md) - 障害のある人がWebを知覚・理解・操作し、やり取りや情報発信にも参加できるようにすること。

## エコシステム <a id="ecosystem"></a>

開発者、企業、組織、ニュースソース。

- [プロジェクトを取り巻くコミュニティ](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/ecosystem/communities-around-projects.md) - 成功したオープンソースプロジェクトの周囲で開発者が作る、プラグイン、ライブラリ、チュートリアルなどの資料。
- [ニュース](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/ecosystem/news.md) - フロントエンドWeb開発に関する日刊・週刊ニュースを提供するWebサイトやニュースレター。
- [著名なコミュニティメンバー](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/ecosystem/notable-community-members.md) - 著名なエンジニア、エバンジェリスト、アーキテクトなどのコミュニティメンバー。
- [組織](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/ecosystem/organizations.md) - Web開発に関わる営利企業と非営利組織。
- [ポッドキャスト](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/ecosystem/podcasts.md) - 音声、動画、デジタルラジオ、PDF、ePubなどを連続配信し、購読による自動ダウンロードやストリーミングで視聴するデジタルメディア。

## 言語、プロトコル、ブラウザーAPI <a id="languages-protocols-browser-apis"></a>

プログラミング言語、マークアップ言語、Web関連標準。

- [Cascading Style Sheets（CSS）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/cascading-style-sheets-css.md) - HTMLやXMLで書かれた文書の見た目を記述し、画面、紙面、音声などの媒体で要素をどう表現するか定めるスタイルシート言語。
- [Document Object Model（DOM）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/document-object-model-dom.md) - HTML、XML、SVG文書のプログラミングインターフェース。ツリーへアクセスし、文書構造、スタイル、内容を変更するための方法を定義する。
- [HyperText Markup Language（HTML）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/hypertext-markup-language-html.md) - Webページ作成用の標準マークアップ言語。その要素がすべてのWebサイトの構成要素になる。
- [Hypertext Transfer Protocol（HTTP）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/hypertext-transfer-protocol-http.md) - 分散・協調型ハイパーメディア情報システム用のアプリケーションプロトコルで、World Wide Webのデータ通信基盤。
- [JavaScript（ECMAScript）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/javascript-ecmascript.md) - HTML文書へ動的な対話性を加えられる動的プログラミング言語。ECMAScript標準で定義される。
- [JavaScript Object Notation（JSON）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/javascript-object-notation-json.md) - 人が読み書きしやすく、機械も解析・生成しやすい軽量データ交換形式。JavaScriptの一部を基礎とする。
- [Scalable Vector Graphics（SVG）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/scalable-vector-graphics-svg.md) - 対話性とアニメーションを扱える、XMLベースの2次元ベクター画像形式。
- [Service Worker](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/service-workers.md) - オフライン時のWebアプリケーション起動処理など、アプリケーションが持続的なバックグラウンド処理を利用できるようにする仕組み。
- [テンプレート言語とエンジン](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/templating-languages-and-engines.md) - プログラムロジックと表示を独立した部分へ分離し、双方の開発、柔軟性、変更、保守を容易にするツール。
- [トランスパイル言語](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/transpiled-languages.md) - JavaScriptやCSSなど、ブラウザーがネイティブ対応する標準へ変換される抽象言語。
- [Uniform Resource Identifier（URI）](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/uniform-resource-identifier-uri.md) - リソースを識別する文字列。最も一般的な形式はUniform Resource Locator（URL）。
- [Web Animations API](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/animation/web-animations-api.md) - Web上のアニメーションを駆動するJavaScript API。SVGとCSSのアニメーション機能を統合し、従来は宣言的にしか利用できなかった機能を、APIから開発者が利用できるようにする。
- [WebAssembly](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/languages-protocols-browser-apis/webassembly.md) - 固定原文では、従来JavaScriptが担ってきた領域を補い、コンパイラーの出力先となる低水準コード表現として紹介されている。

## ユーザーインターフェースコンポーネント <a id="user-interface-components"></a>

Webサイトやアプリケーションへ組み込めるUIコンポーネント。

- [ボタン](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/buttons.md) - 検索の実行や操作の確認など、イベントの発生やダイアログ操作を簡単に行うためのグラフィカルなコントロール要素。
- [コード](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/code.md) - Webサイトへの埋め込み用に設計されたコードビューアーとエディター。
- [フォーム](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/forms.md) - チェックボックス、ラジオボタン、テキスト欄などを通じて利用者がデータを入力し、処理のためサーバーへ送信できるHTMLフォーム。
- [ギャラリーと画像スライダー](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/galeries-and-image-sliders.md) - Webサイトに画像コレクションを表示するコンポーネント。
- [グリッド](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/grid.md) - CSSグリッドレイアウトシステム。
- [リッチテキストエディター](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/rich-text-editors.md) - Webブラウザー内でリッチテキストを編集し、利用者が書式を有効なHTMLマークアップとして直接記述する手間を減らすインターフェース。
- [目次](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/table-of-contents.md) - 目次を自動生成するコンポーネント。
- [UIキット](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/ui-kits.md) - すぐ使えるコンポーネント集。
- [動画と音声](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/user-interface-components/video-and-audio.md) - Webサイトで音声・動画ファイルを再生するコンポーネント。

## ワークフロー <a id="workflow"></a>

タスクの自動化とアセット配信。

- [自動テスト](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/automated-testing.md) - ソフトウェアを本番公開する前に、ツールがあらかじめ記述されたテストを実行する工程。
- [ビルドツール](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/build-tools.md) - 反復作業を自動化するためのツールキットとエコシステム。
- [CSSツール](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/css-tools.md) - CSSファイルの解析、前処理、後処理を行うツール。
- [コードエディター](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/code-editors.md) - Webサイトのソースコード編集に特化したテキストエディター。
- [ドキュメント](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/documentation.md) - Web成果物に関するドキュメントの執筆、生成、公開、利用。
- [プログラマー向けフォント](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/fonts-for-programmers.md) - コードの位置をそろえ、似た文字を区別しやすくするフォント。
- [はじめに](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/getting-started.md) - フロントエンド開発ワークフローを設定するための手順別ガイド。
- [HTMLツール](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/html-tools.md) - HTMLソースコードの前処理・後処理ツール。
- [画像の後処理](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/image-post-processing.md) - 画像変換と最適化のためのツール。
- [JavaScriptツール](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/javascript-tools.md) - JavaScriptファイルの静的解析、前処理、後処理を行うツール。
- [パッケージ管理](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/package-management.md) - 再利用可能なライブラリやコンポーネントのインストール、更新、設定、削除を一貫した方法で自動化するツール群。
- [ソースマップ](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/sourcemaps.md) - 結合・圧縮されたファイルをビルド前の状態へ対応付ける仕組み。
- [バージョン管理](https://github.com/dypsilon/frontend-dev-bookmarks/blob/50ed051c96428af9d4f020305ca206587514e121/workflow/version-control.md) - ファイルやファイル集合の変更を時系列で記録し、後から特定の版を取り出せるようにするシステム。
