---
title: "Awesome WebExtensions"
description: "複数ブラウザー向けの WebExtensions 開発に使う文書、ライブラリー、ツール、テスト、実装例。"
licenseSource: "github-fregante-Awesome-WebExtensions-readme-md"
---

# Awesome WebExtensions

WebExtensions は、複数のブラウザー向けに拡張機能を開発する仕組みです。文書、コミュニティ、ライブラリー、開発ツール、テスト、ひな形、サンプル拡張機能を探せます。固定原文では Chrome の拡張機能 API と広く互換性があり、Chrome 向け拡張機能は多くの場合、[少しの変更](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension)で Firefox でも動くと説明されています。

## 入門 <a id="始める"></a>

- [Chrome 拡張機能の文書](https://developer.chrome.com/docs/extensions/reference) - もともとの Chrome 拡張機能モデルに関する文書。
- [Mozilla の WebExtensions 文書](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) - WebExtensions API を説明する MDN の wiki。
- [WebExtensions のブラウザー対応状況](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) - Chrome、Edge、Firefox、Opera の互換性表。
- [Safari 拡張機能の文書](https://developer.apple.com/safari/extensions/) - 固定原文では、WebExtensions とまったく異なる API を使う Safari 拡張機能の開発文書として紹介。
- [Opera の API 対応状況](https://dev.opera.com/extensions/apis/) - Opera の WebExtensions 対応状況の詳細。
- [Browser Extension Standard](https://browserext.github.io/browserext/) - 固定原文で Mozilla、Opera、Microsoft が対応すると紹介された API 標準。

## コミュニティ

- [Google Groups](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions) - 拡張機能に関する議論。
- [Mozilla Discourse](https://discourse.mozilla.org/c/add-ons) - 拡張機能に関する議論。
- [`#addons:mozilla.org`](https://matrix.to/#/#addons:mozilla.org) - Mozilla の Matrix チャンネル。
- [Stack Overflow の `google-chrome-extension` タグ](https://stackoverflow.com/questions/tagged/google-chrome-extension) - 関連する質問。
- [Stack Overflow の `firefox-addon-webextensions` タグ](https://stackoverflow.com/questions/tagged/firefox-addon-webextensions) - 関連する質問。
- [Stack Overflow の `microsoft-edge-extension` タグ](https://stackoverflow.com/questions/tagged/microsoft-edge-extension) - 関連する質問。

## ライブラリーとフレームワーク

拡張機能に組み込んで使うコードです。

- [webext-options-sync](https://github.com/fregante/webext-options-sync) - 拡張機能のオプションを管理し、自動保存するためのライブラリー。
- [webext-storage-cache](https://github.com/fregante/webext-storage-cache) - Promise で操作する、Map 風の有効期限付きキャッシュストレージ。
- [webext-dynamic-content-scripts](https://github.com/fregante/webext-dynamic-content-scripts) - カスタムドメインで `content_scripts` を自動的に挿入。
- [mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill) - `browser` 名前空間の標準化された Promise ベース API に対応するポリフィル。
- [@types/firefox-webext-browser](https://www.npmjs.com/package/@types/firefox-webext-browser) - `browser` 名前空間向けの TypeScript 型。
- [redux-webext](https://github.com/ivantsov/redux-webext) - Redux を使って WebExtension の状態を管理。
- [ExtPay](https://github.com/Glench/ExtPay) - サーバーのバックエンドを運用せずに、拡張機能内で決済を受け付けるためのライブラリー。
- [inject-react-anywhere](https://github.com/OlegWock/inject-react-anywhere) - API を介して第三者のサイトへ React コンポーネントを挿入し、スタイルを分離するライブラリー。
- [その他の関連ライブラリー](https://github.com/fregante/webext-fun)

## ツール

拡張機能の管理を支援するアプリです。

- [Chrome Webstore Upload](https://github.com/fregante/chrome-webstore-upload-cli) - CLI 経由、または GitHub Actions による自動実行で、Chrome Web Store へ拡張機能をアップロード。
- [mozilla/web-ext](https://github.com/mozilla/web-ext) - WebExtensions のビルド・実行・テストを支援するコマンドラインツール。
- [chromepet](https://github.com/ZenHubIO/chromepet) - 拡張機能の新しい版が公開されたときに通知。
- [chrome-ext-downloader](https://github.com/jiripospisil/chrome-ext-downloader) - Chrome Web Store の任意の拡張機能をダウンロードし、実装を確認するためのツール。
- [chrome-store-api](https://github.com/acvetkov/chrome-store-api) - Chrome Web Store API のラッパー。
- [Chrome 拡張機能のソースビューアー](https://github.com/Rob--W/crxviewer) - ストア上で拡張機能のソースコードを直接表示する WebExtension。
- [@wext/shipit](https://github.com/LinusU/wext-shipit) - Chrome Web Store、Mozilla Addons、Opera Addons への自動公開ツール。
- [wext-manifest-loader](https://github.com/abhijithvijayan/wext-manifest-loader) - 特定のブラウザー向けにのみ含める `manifest.json` のプロパティを指定する Webpack ローダー。
- [webextension-manifest-loader](https://github.com/jsmnbom/webextension-manifest-loader) - ブラウザーに合わせた manifest.json を読み込む Webpack ローダー。インポート可能なプロパティもすべて取り込み、manifest.json を Webpack の唯一のエントリーポイントにできる。
- [webpack-extension-reloader](https://github.com/rubenspgcavalcante/webpack-extension-reloader) - 開発中のブラウザー拡張機能を自動的に再読み込みする Webpack プラグイン。
- [webpack-target-webextension](https://github.com/awesome-webextension/webpack-target-webextension) - Webpack でビルドする WebExtensions にコード分割機能を追加。
- [Extension.js](https://github.com/cezaraugusto/extension.js) - 導入後すぐに使え、設定不要で複数ブラウザーに対応する拡張機能開発ツール。

## テスト

- [sinon-chrome](https://github.com/acvetkov/sinon-chrome) - テスト用に Chrome Extensions API をモック。
- [addons-linter](https://github.com/mozilla/addons-linter) - Mozilla のガイドラインに沿って拡張機能を検証。
- [webextensions-jsdom](https://github.com/stoically/webextensions-jsdom) - manifest.json に基づき、ポップアップ、サイドバー、バックグラウンドを JSDOM で読み込む。
- [webextensions-api-fake](https://github.com/stoically/webextensions-api-fake) - メモリー内で動作する WebExtensions API のフェイク実装。TypeScript 型を含む。
- [webextensions-api-mock](https://github.com/stoically/webextensions-api-mock) - sinon のスタブによる WebExtensions API の実装。TypeScript 型を含む。
- [webextensions-schema](https://github.com/stoically/webextensions-schema) - WebExtensions のスキーマ JSON ファイルをプログラムから利用するためのライブラリー。

## ボイラープレート

- [browser-extension-template](https://github.com/fregante/browser-extension-template) - Parcel、オプションハンドラー、自動公開を備えた最小構成のひな形。
- [create-webextension](https://github.com/rpl/create-webextension) - Yarn で WebExtension を生成するツール。
- [generator-web-extension](https://github.com/webextension-toolbox/generator-web-extension) - 複数ブラウザー向けのウェブ拡張機能開発を始めるための構成を生成するツール。
- [WXT](https://github.com/wxt-dev/wxt) - ウェブ拡張機能の開発フレームワーク。

## サンプル拡張機能

拡張機能の構成を理解する参考になるリポジトリです。GitHub Actions による自動デプロイの例も含みます。

- [npmhub](https://github.com/npmhub/npmhub)
- [Hide Files on GitHub](https://github.com/sindresorhus/hide-files-on-github)
- [mdn/webextension-examples](https://github.com/mdn/webextensions-examples) - MDN の文書向けにまとめられた、さまざまな拡張機能の例。
