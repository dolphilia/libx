---
title: "stetso/awesome-gideros"
description: "stetso/awesome-giderosの日本語訳"
licenseSource: "github-stetso-awesome-gideros-readme-md"
---

# Awesome Gideros [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

<h1 align="center">
	<a href="http://giderosmobile.com"><img width="200" src="https://raw.githubusercontent.com/stetso/awesome-gideros/4fa4266feca39bdf4eb9c741f0948622e222b62a/gideros_logo.png" alt="Awesome Gideros"></a>
	<br>
	<br>
</h1>

Android、iOS、HTML5、WinRT、デスクトップ（Windows、OSX）向けのゲームやアプリを簡単に作成できる[Giderosゲーム開発フレームワーク](http://giderosmobile.com/)の優れたリソースを集めた一覧です。プルリクエストによるコントリビューションを歓迎します。

## 目次

- [はじめに](#getting-started)
- [リソース](#resources)
	- [チュートリアルとヒント](#tutorials-and-tips)
	- [完全なゲームの例](#full-game-examples)
	- [出版物](#publications)
	- [IDEとエディター](#ides-and-editors)
	- [グラフィックスとシェーダー](#graphics-and-shaders)
	- [シーン管理](#scene-management)
	- [入力](#input)
	- [アニメーションとトゥイーン](#animation-and-tweens)
	- [タイルマップ](#tilemaps)
	- [カメラ](#camera)
	- [オーディオ](#audio)
	- [保存と読み込み](#saving-and-loading)
	- [収益化](#monetization)
	- [GUI](#gui)
	- [3D](#3d)
	- [Plugins](#plugins)
- [便利なLuaライブラリ](#useful-lua-libraries)
- [ライセンスとコントリビューション](#license-and-contributing)

## はじめに

- [Download Gideros](http://giderosmobile.com/download) - Giderosを入手できます（無料ですが寄付を歓迎しています）。
- [Getting Started Manual](http://docs.giderosmobile.com) - まずここでフレームワークの概要を確認してください。
- [API Reference](http://docs.giderosmobile.com/reference/) - 不明点を調べるときに最初に参照する場所です。
- [Forum](http://giderosmobile.com/forum/) - 協力的なコミュニティへ参加できます。
- [Online Editor](http://giderosmobile.com/code/) - 何もインストールせずブラウザーでGiderosを試せます。
- [Online Examples](http://giderosmobile.com/examples) - ブラウザーでGiderosの機能例を確認できます。
- [Developer Guide](http://giderosmobile.com/guide) - 公式のガイドとチュートリアル一覧です。

## リソース
*Giderosに関するブログやフォーラムの投稿、ウェブサイト、パッケージなどのリソース集です。*

### チュートリアルとヒント
- [Introductory Video Tutorial](https://www.youtube.com/watch?v=IRLxBijIX50) - Giderosのメンテナーによる動画です。
- [Publishing to Android](http://giderosmobile.com/forum/discussion/6894/publishing-tutorial#Item_7) - Android向け公開の入門です。
- [Improving performance](http://giderosmobile.com/forum/discussion/4892/software-improve-what-kind-of-skills-do-you-need) - Giderosアプリの性能改善に関するヒントを扱うフォーラムスレッドです。
- [Desktop API](http://giderosmobile.com/forum/discussion/5870/new-desktop-api-test/p1) - マウスカーソルとウィンドウ装飾を操作するDesktop APIの概要です。


### 完全なゲームの例
- [Simple square-dodge game](http://bluebilby.com/2013/05/08/gideros-mobile-tutorial-creating-your-first-game/) - シンプルな四角形回避ゲームを作る入門チュートリアルです。
- [Top-down roguelike Tutorial](https://programmingbymoonlight.com/roguelike-intro/) - Giderosでターン制ローグライクを作る詳細なチュートリアルシリーズです。
- [Breakout Clone](http://blog.hotbutteredgames.com/post/143878823915/gideros-tutorial-a-simple-box2d-game-gideros-is-a) - GiderosとBox2Dを使ってブロック崩し風ゲームを作るチュートリアルです。
- ["Grab the treasure" course](http://www.moosader.com/learn/introduction-to-mobile-game-development/) - 小さなゲームの開発を通じてGiderosを学ぶ包括的な入門ガイドです。


### 出版物
*Giderosに関する書籍です。*
- [Gideros Mobile Game Development](https://www.packtpub.com/game-development/gideros-mobile-game-development) - Giderosを使ったモバイルゲーム開発を包括的に扱う書籍です。
- [Learn Lua for iOS Game Development](http://www.apress.com/us/book/9781430246626) - Giderosを含むさまざまなLuaベースのゲーム開発フレームワークを紹介します。

### IDEとエディター
*Giderosで利用できるコードエディターとプラグインです。*
- [Using ZeroBrane Studio with Gideros](http://www.indiedb.com/tutorials/gideros-with-zerobrane) - Gideros Remote PreviewでZBSを使うための入門チュートリアルです。
- [Live Coding with Gideros and ZeroBrane Studio](https://www.youtube.com/watch?v=wPYvJxFxMkM) - ZBSとGiderosのライブコーディング機能を紹介する動画です。
- [ZeroBrane Studio integration and debugging](https://www.youtube.com/watch?v=GIipyzSpSr0) - ZBSの作者による動画チュートリアルです。
- [Visual Studio Code plugin](https://marketplace.visualstudio.com/items?itemName=devCAT.lua-debug ) - Giderosに対応しています（Windowsのみ）。
- [Sublime Text 3 plugin](http://giderosmobile.com/forum/discussion/5218/gideros-sublime-text-3-package-for-osx-windows-version-0-10/p1) - ST3へGideros対応を追加します。

### グラフィックスとシェーダー
- [Shaders in Gideros](http://bit.ly/2pkF09m) - Giderosのシェーダーに関する入門記事です。
- [Shadertoy viewer](http://giderosmobile.com/forum/discussion/6667/shadertoy-viewer-beta-shaders-from-www-shadertoy-com-in-gideros/p1) - Giderosを使ってShadertoyのシェーダーを試せます。
- [Intro to clipping and the RenderTarget](http://www.indiedb.com/engines/gideros/tutorials/clipping-in-gideros-with-rendertarget) - RenderTargetクラスでクリッピング効果を作る方法を説明するテキストチュートリアルです。

### シーン管理
- [SceneManager](http://appcodingeasy.com/Gideros-Mobile/Manage-Scenes-in-Gideros-Mobile) - トランジションの有無を問わず、シーンを簡単に切り替えられます。
- [Passing variables using the SceneManager](http://giderosmobile.com/forum/discussion/1474/passing-variables-with-scene-manager/p1) - シーンマネージャー使用時に次のシーンへ変数を渡す方法です。

### 入力
- [GidSwipe](https://github.com/stetso/GidSwipe) - モバイル向けの使いやすいタップ／スワイプ管理ライブラリです。
- [Gestures](http://appcodingeasy.com/Gideros-Mobile/Detecting-Gestures-in-Gideros) - 点のリストから複雑なジェスチャーを定義・検出します。
- [Accelerometer](http://appcodingeasy.com/Gideros-Mobile/Using-Accelerometer-with-Box2d-in-Gideros) - 端末の加速度センサーを入力として使う簡単な例です。
- [Shake detection](http://appcodingeasy.com/Gideros-Mobile/Gideros-Shake-detection) - 端末の振動を検出する短いコード例です。

### アニメーションとトゥイーン
- [GTween](http://appcodingeasy.com/Gideros-Mobile/Gideros-GTween-with-easing) - 必要なイージング関数を備え、スプライトの変数をトゥイーンします。
- [Animation using MovieClip](http://bluebilby.com/2013/05/12/gideros-mobile-tutorial-animated-movieclips/) - MovieClipクラスでスプライトをアニメーションさせるチュートリアルです。
- [Spriteheet animation class](https://github.com/nascode/gideros_animsheet) - スプライトシートからアニメーションを作成・再生するためのクラスです。

### タイルマップ
 - [Collision with Tilemaps](http://giderosmobile.com/forum/discussion/6353/collision-with-any-object/p1) - オブジェクトをタイルマップのタイルへ衝突させる例と提案です。

 ### カメラ
 - [Smooth camera with Drag and Pinch-to-Zoom](http://giderosmobile.com/forum/discussion/2715/camera-class-with-kinetics-and-pinch-to-zoom/p1) - モバイルゲーム向けの便利なカメラクラス実装です。

### オーディオ
- [Intro to using audio with Gideros](http://bluebilby.com/2013/04/18/gideros-mobile-tutorial-playing-music-and-sound-effects/) - Giderosでサウンドを生成・利用するチュートリアルです。

### 保存と読み込み
- [Using JSON](http://giderosmobile.com/forum/discussion/6918/saving-and-loading-data-files#Item_1) - JSONを使って手動で読み込み・保存します。
- [DataSaver module](http://appcodingeasy.com/Gideros-Mobile/Save-and-load-data-module-for-Gideros-Mobile) - データの保存と読み込みを簡単にする使いやすいラッパーです。
- [Encrypting save files](http://giderosmobile.com/forum/discussion/5625/simple-savegame-encryption/p1) - セーブファイルを不正な改変から守るためのコード付きアイデアです。

### 収益化
- [Admob integration](http://giderosmobile.com/forum/discussion/5801/tuto-video-tutorial-how-to-add-admob-plugin-to-your-app) - Admobをゲームへ統合する動画チュートリアルです。
- [Google Service integration](http://giderosmobile.com/forum/discussion/5806/tuto-video-tutorial-how-to-add-google-services-to-your-app) - Admobチュートリアルの第2部で、Google Play Serviceとの統合を紹介します。

### GUI
- [Layout](https://github.com/Nlcke/layout) - Comprehensive Gideors GUI framework ([forum entry](http://giderosmobile.com/forum/discussion/6651/layout-gideros-gui-framework#Item_23)).
- [Button class](http://appcodingeasy.com/Gideros-Mobile/Gideros-mobile-button-class) - クリック可能なボタンを作るシンプルなクラスです。
- [AceSlide class](http://appcodingeasy.com/Gideros-Mobile/Easy-input-for-choosing-packages-or-levels-in-Gideros-Mobile) - レベル選択などに使えるスライド式UI要素です。

### 3D
*注: 3D対応はまだ開発中ですが、現時点で試したい場合の出発点を紹介します。*
- [Tutorial using 3D in Gideros](https://www.youtube.com/watch?v=IfHwdJD6ad8) - Giderosのメンテナーによる入門です。

### プラグイン
- [SKStoreReview](https://github.com/mertkurum/GiderosStoreReview) - iOS 10.3以降のSKStoreReviewController向けGiderosプラグインです。
- [C++ plugin development](http://giderosmobile.com/forum/discussion/1025/step-by-step-how-to-write-a-c-plugin-and-deploy-it-to-the-desktop-windows-player) - C++によるGiderosプラグイン開発の入門です。

## 便利なLuaライブラリ
*Gideros専用ではありませんが、ゲーム開発に役立つ汎用Luaライブラリです。*

- [lume](https://github.com/rxi/lume) - ゲーム開発に役立つ関数を集めた優れたコレクションです。
- [inspect](https://github.com/kikito/inspect.lua) - テーブルを読みやすい形式でコンソールへ簡単に整形出力します。
- [jumper](http://yonaba.github.io/Jumper/) - Lua向けの非常に高速なグリッドベース経路探索です。
- [bump](https://github.com/kikito/bump.lua) - Simple, flexible and fast library for collision detection using axis-aligned bounding boxes (from version 2017.8 onwards Gideros contains a C-port of the library with the same API that should be used instead [cbump](https://wiki.giderosmobile.com/index.php/Bump).
- [Bresenham](https://github.com/rm-code/Bresenham) - Bresenham's line algorithm, implemented in Lua.

## 関連するAwesomeリスト
- [awesome-lua](https://github.com/LewisJEllis/awesome-lua)
- [awesome-love2d](https://github.com/love2d-community/awesome-love2d)
- [awesome-gamedev](https://github.com/mbrukman/awesome-gamedev)


## ライセンスとコントリビューション

この一覧へのコントリビューションを歓迎します。[コントリビューションガイドライン](https://github.com/stetso/awesome-gideros/blob/4fa4266feca39bdf4eb9c741f0948622e222b62a/contributing.md) to get started.

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
