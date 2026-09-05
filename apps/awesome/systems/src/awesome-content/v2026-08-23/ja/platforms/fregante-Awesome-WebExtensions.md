---
title: "Awesome WebExtensions"
description: "WebExtensionsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-fregante-Awesome-WebExtensions-readme-md"
---

# Awesome WebExtensions

WebExtensionsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [始める](#getting-started)
- [コミュニティ](#community)
- [ライブラリーとフレームワーク](#libraries-and-frameworks)
- [ツール](#tools)
- [テスト](#testing)
- [ボイラープレート](#boilerplates)
- [サンプル拡張機能](#sample-extensions)

## 始める

- [Chrome Extensions documentation](https://developer.chrome.com/docs/extensions/reference) - オリジナルの Chrome 拡張機能モデルに関するドキュメント。
- [Mozilla's WebExtensions documentation](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) - WebExtensions API の MDN wiki。
- [Browser support for WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) - Chrome、Edge、Firefox、Opera の互換性表。
- [Safari Extensions documentation](https://developer.apple.com/safari/extensions/) - Safari 拡張機能構築に関する開発者ドキュメント。技術的には WebExtensions ではなく、API は完全に異なります。
- [Opera API support](https://dev.opera.com/extensions/apis/) - Opera の詳細な WebExtensions サポート。
- [Browser Extension Standard](https://browserext.github.io/browserext/) - Mozilla、Opera、Microsoft がサポートする API の標準。

## コミュニティ

- [Google Groups](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions) - 議論。
- [Mozilla Discourse](https://discourse.mozilla.org/c/add-ons) - 議論。
- [`#addons:mozilla.org`](https://matrix.to/#/#addons:mozilla.org) - Mozilla の Matrix チャンネル。
- [`google-chrome-extension` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/google-chrome-extension) - 関連する質問。
- [`firefox-addon-webextensions` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/firefox-addon-webextensions) - 関連する質問。
- [`microsoft-edge-extension` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/microsoft-edge-extension) - 関連する質問。

## ライブラリーとフレームワーク

拡張機能の一部となるためのコード。

- [webext-options-sync](https://github.com/fregante/webext-options-sync) - 拡張機能のオプション管理と自動保存を支援します。
- [webext-storage-cache](https://github.com/fregante/webext-storage-cache) - 有効期限付きの Map 風 promise キャッシュストレージ。
- [webext-dynamic-content-scripts](https://github.com/fregante/webext-dynamic-content-scripts) - カスタムドメインで `content_scripts` を自動注入します。
- [mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill) - `browser` 名前空間の標準化された promise ベース API をサポートする polyfill。
- [@types/firefox-webext-browser](https://www.npmjs.com/package/@types/firefox-webext-browser) - `browser` 名前空間向け TypeScript 型を提供します。
- [redux-webext](https://github.com/ivantsov/redux-webext) - WebExtension の状態管理に Redux を使用します。
- [ExtPay](https://github.com/Glench/ExtPay) - サーバーバックエンドを実行することなく、拡張機能で安全な支払いを受け取ります。
- [inject-react-anywhere](https://github.com/OlegWock/inject-react-anywhere) - 便利な API とスタイル分離により、サードパーティーサイトへ React コンポーネントを注入します。
- [More…](https://github.com/fregante/webext-fun)

## ツール

拡張機能管理を支援するアプリ。

- [Chrome Webstore Upload](https://github.com/fregante/chrome-webstore-upload-cli) - cli 経由（または GitHub Actions 上で自動）で Chrome Web Store へ拡張機能をアップロードします。
- [mozilla/web-ext](https://github.com/mozilla/web-ext) - WebExtensions のビルド、実行、テストを支援するコマンドラインツール。
- [chromepet](https://github.com/ZenHubIO/chromepet) - 新しいバージョンの公開時に通知を受け取ります。
- [chrome-ext-downloader](https://github.com/jiripospisil/chrome-ext-downloader) - Chrome Web Store の任意の拡張機能をダウンロードし、その実装を確認します。
- [chrome-store-api](https://github.com/acvetkov/chrome-store-api) - Chrome Web Store API ラッパー。
- [Chrome extension source viewer](https://github.com/Rob--W/crxviewer) - ストア上で拡張機能のソースコードを直接表示する WebExtension。
- [@wext/shipit](https://github.com/LinusU/wext-shipit) - Chrome Web Store、Mozilla Addons、Opera Addons への自動公開ツール。
- [wext-manifest-loader](https://github.com/abhijithvijayan/wext-manifest-loader) - 特定ブラウザーにのみ表示する `manifest.json` プロパティを指定できる Webpack loader。
- [webextension-manifest-loader](https://github.com/jsmnbom/webextension-manifest-loader) - ブラウザーに合わせた manifest.json を読み込む Webpack loader。インポート可能なすべてのプロパティもインポートし、唯一の webpack エントリーポイントとして 'manifest.json' を使えます。
- [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader) - 開発中にブラウザー拡張機能を自動リロードする Webpack プラグイン。
- [webpack-target-webextension](https://github.com/awesome-webextension/webpack-target-webextension) - Webpack による WebExtensions ビルドにコード分割サポートを追加します。
- [Extension.js](https://github.com/cezaraugusto/extension.js) - プラグアンドプレイ、ゼロ設定、クロスブラウザーの拡張機能開発ツール。

## テスト

- [sinon-chrome](https://github.com/acvetkov/sinon-chrome) - テスト用に Chrome Extensions API をモックします。
- [addons-linter](https://github.com/mozilla/addons-linter) - Mozilla のガイドラインに対して拡張機能を検証します。
- [webextensions-jsdom](https://github.com/stoically/webextensions-jsdom) - manifest.json に基づき JSDOM で popup、sidebar、background を読み込みます。
- [webextensions-api-fake](https://github.com/stoically/webextensions-api-fake) - インメモリーの WebExtensions API Fake 実装（TypeScript 型を含む）。
- [webextensions-api-mock](https://github.com/stoically/webextensions-api-mock) - sinon stub としての WebExtensions API（TypeScript 型を含む）。
- [webextensions-schema](https://github.com/stoically/webextensions-schema) - WebExtensions Schema JSON ファイルをプログラムから利用します。

## ボイラープレート

- [browser-extension-template](https://github.com/fregante/browser-extension-template) - parcel、オプションハンドラー、自動公開を備えた必要最小限のボイラープレート。
- [create-webextension](https://github.com/rpl/create-webextension) - Yarn WebExtension ジェネレーター。
- [generator-web-extension](https://github.com/webextension-toolbox/generator-web-extension) - クロスブラウザーのウェブ拡張機能開発を始めるために必要なすべてを作成する WebExtension ジェネレーター。
- [WXT](https://github.com/wxt-dev/wxt) - ウェブ拡張機能を開発する次世代フレームワーク。

## サンプル拡張機能

これらはシンプルでモダンな WebExtensions リポジトリであり、GitHub Actions 経由の自動デプロイメントを含め、各部品をどこに置けばよいか把握する助けになります。

- [npmhub](https://github.com/npmhub/npmhub)
- [Hide Files on GitHub](https://github.com/sindresorhus/hide-files-on-github)
- [mdn/webextension-examples](https://github.com/mdn/webextensions-examples) - MDN ドキュメントのためにキュレートされた、さまざまなサンプル拡張機能。
