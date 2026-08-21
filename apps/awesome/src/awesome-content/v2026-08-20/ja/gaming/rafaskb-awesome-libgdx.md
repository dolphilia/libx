---
title: "rafaskb/awesome-libgdx"
description: "rafaskb/awesome-libgdx の正規スナップショット"
licenseSource: "github-rafaskb-awesome-libgdx-readme-md"
---

[![Awesome libGDX Logo](https://github.com/rafaskb/awesome-libgdx/blob/93102878e1b59430845b85d1d8ea057a497d57cb/logo.png 'Awesome libGDX Logo')](https://libgdx.com/)

# Awesome libGDX [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![Latest libGDX Version](https://img.shields.io/maven-central/v/com.badlogicgames.gdx/gdx?color=e74a45&label=Latest%20libGDX%20Version&style=flat-square)](https://search.maven.org/artifact/com.badlogicgames.gdx/gdx)

> <a href="https://libgdx.com/"><img src="https://libgdx.com/assets/images/logo.png" alt="libGDX Logo" align="right" style="margin-right: 25px" height=40></a>
>
> [libGDX](https://libgdx.com/) は Java で書かれた、比較的低レベルで無料・オープンソースのクロスプラットフォームゲーム開発フレームワークです。
>
> このリストは、開発者が[libGDX](https://libgdx.com/)ゲームフレームワークを使い、[Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/master/awesome.md)に従った _awesome_ なゲームを作れるよう、優れたリソース、ツール、チュートリアル、プロジェクトを集めたものです。
>
> コントリビューションを**歓迎**しますが、まず[Contributing](#contributing)を参照してください。

---

## 目次

- [リソース](#resources)
  - [人工知能](#algorithms-and-ai)
  - [コントローラー](#controllers)
  - [エディター](#editors)
  - [エンティティコンポーネントシステム（ECS）](#entity-component-system-ecs)
  - [物理](#physics)
  - [サービス](#services)
  - [セットアップとデプロイ](#setup-and-deployment)
  - [ユーザーインターフェイス](#user-interface)
  - [視覚効果](#visual-effects)
  - [オーディオ](#audio)
  - [その他](#others)
- [チュートリアル](#tutorials)
  - [はじめに](#getting-started)
  - [高度な内容](#advanced)
- [アセット](#assets)
- [コミュニティ](#community)
- [その他のリスト](#other-lists)

---

## リソース

_フレームワークの能力を強化するため libGDX コード内で使えるリソース。_

### アルゴリズムと AI
- [gdx-ai](https://github.com/libgdx/gdx-ai) - Steering Behaviors、Formation Motion、Pathfinding、Behavior Trees、Finite State Machines を備える人工知能フレームワーク。
- [Simple Graphs](https://github.com/earlygrey/simple-graphs) - グラフデータ構造とアルゴリズム（高速なパス探索を含む）の Java ライブラリ。

### コントローラー
- [gdx-controllers](https://github.com/libgdx/gdx-controllers) - ゲームパッドとジョイスティックのサポートを追加。
- [gdx-controllerutils](https://github.com/MrStahlfelge/gdx-controllerutils) - Scene2D ボタン入力サポート、ユーザー設定可能なボタンマッピング、LWJGL2 向け hotplugging を追加。
- [sdl2gdx](https://github.com/electronstudio/sdl2gdx) - SDL を使う強力なゲームパッド実装。同一マッピング下の数百のコントローラー、rumble、hotplugging をサポート。

### エディター
- [HyperLap2D](https://github.com/rednblackgames/HyperLap2D) - libGDX 向けランタイムを持つ、複雑な2Dワールド・シーンの視覚エディター。
- [Mundus](https://github.com/JamesTKhan/Mundus) - libGDX 向けランタイムを持つ3Dワールド・レベルエディター。
- [Spine](http://esotericsoftware.com/) - ゲーム用2Dアニメーションに特化した、スケルトンベースアニメーションツール。

### エンティティコンポーネントシステム（ECS）
- [Artemis-odb](https://github.com/junkdog/artemis-odb) - 高性能な Java ベース Entity-Component-System フレームワーク。
- [Ashley](https://github.com/libgdx/ashley) - Ash・Artemis に着想を得た Java エンティティシステム。

### 物理
- [Box2D](https://libgdx.com/wiki/extensions/physics/box2d) - 2Dゲーム向けで最も人気の高い物理ライブラリの一つ。
- [Bullet](https://libgdx.com/wiki/extensions/physics/bullet/bullet-physics) - 3D衝突検出・剛体力学ライブラリ。
- [jbump](https://github.com/tommyettinger/jbump) - プラットフォーマーなど単純な2Dゲームに有用な、実装容易な AABB 衝突検出。

### サービス
- [gdx-facebook](https://github.com/TomGrill/gdx-facebook) - Facebook Graph API のクロスプラットフォームサポートを提供。
- [gdx-fireapp](https://github.com/mk-5/gdx-fireapp) - Firebase 用クロスプラットフォーム API。
- [gdx-firebase](https://github.com/TomGrill/gdx-firebase) - Firebase 用クロスプラットフォーム（Desktop/Android のみ）API。
- [gdx-gameanalytics](https://github.com/MrStahlfelge/gdx-gameanalytics) - libGDX 用 Game Analytics REST API クライアント実装。すべてのバックエンドで動作。
- [gdx-gamesvcs](https://github.com/MrStahlfelge/gdx-gamesvcs) - Google Play Games、Apple Game Center などの gameservices を容易に統合。
- [gdx-pay](https://github.com/libgdx/gdx-pay) - InApp 購入用クロスプラットフォーム API を提供。
- [steamworks4j](https://github.com/code-disaster/steamworks4j) - Java アプリケーションから Steamworks C++ API へアクセスできる薄いラッパー。

### セットアップとデプロイ
- [gdx-liftoff](https://github.com/tommyettinger/gdx-liftoff) - より多くのバックエンドをサポートし、ワンクリックでライブラリ追加を可能にするモダンな libGDX セットアップツール。
- [libgdx-library-template](https://github.com/tommyettinger/libgdx-library-template) - 新しいライブラリ作成用のスケルトンプロジェクト。異なる設定が必要なため。
- [Packr](https://github.com/libGDX/packr) - Windows、Linux、macOS 配布用に JAR、アセット、JVM をパッケージ化。

### ユーザーインターフェイス
- [Freetype](https://libgdx.com/wiki/extensions/gdx-freetype) - 軽量な .ttf フォントファイルから任意サイズの BitmapFonts をオンザフライで生成。
- [gdx-dialogs](https://github.com/TomGrill/gdx-dialogs) - ネイティブダイアログのクロスプラットフォームサポートを提供。
- [gdx-skins](https://github.com/czyzby/gdx-skins) - 無料の Scene2D GUI スキン。
- [InGameConsole](https://github.com/StrongJoshua/libGDX-inGameConsole) - Source ゲームに搭載されるものに似たコンソールをゲームへ追加可能。
- [msdf-gdx](https://github.com/maltaisn/msdf-gdx) - libGDX で高品質な MSDF（multi-channel signed distance field）テキストを描画する軽量ユーティリティ。
- [PieMenu](https://github.com/payne911/PieMenu) - 高い柔軟性とカスタマイズ容易性を持つ Scene2D 用ラジアルメニュー。
- [Ray3K Skins](https://ray3k.wordpress.com/artwork/) - サンプルコード、カスタム drawable、実験的機能を備えた無料 Scene2D.UI スキン。
- [Skin Composer](https://github.com/raeleus/skin-composer) - グラフィカルインターフェイスで libGDX scene2d.ui 用スキンを作成。
- [TenPatch](https://github.com/raeleus/TenPatch) - 複数の伸縮領域を実装する libGDX 9patch 実装の代替。
- [TextraTypist](https://github.com/tommyettinger/textratypist) - TypingLabel（下記）のように、スタイル、絵文字、複数フォント、クリック可能リンクなどもサポート。
- [TypingLabel](https://github.com/rafaskb/typing-label) - リアルタイムにタイプ入力されているように見える libGDX Label。
- [VisUI](https://github.com/kotcrab/vis-ui) - scene2d.ui を使用して libGDX 内で見栄えのよい UI を作成。UI エディターではありません。

### 視覚効果
- [Box2DLights](https://github.com/libgdx/box2dlights) - レイキャスティングに Box2D、レンダリングに OpenGL ES 2.0 を使う2Dライティングフレームワーク。
- [colorful-gdx](https://github.com/tommyettinger/colorful-gdx) - ティントによる色への影響を拡張。多くの事前作成済みシェーダーも備えます。
- [HackLights](https://github.com/aliasifk/HackLights) - libGDX 向け軽量 framebuffer ベースライティングエンジン。
- [gdx-vfx](https://github.com/crashinvaders/gdx-vfx) - libgdx-contribs-postprocessing に基づく柔軟な後処理シェーダー視覚効果。
- [libgdx-screenmanager](https://github.com/crykn/libgdx-screenmanager) - 各種トランジション効果をサポートする libGDX 用スクリーンマネージャー。
- [Particle Park](https://github.com/raeleus/Particle-Park) - ライブプレビュー付きでダウンロードできるパーティクル効果のショーケース。
- [Shape Drawer](https://github.com/earlygrey/shapedrawer) - Batch flushing を回避する、ShapeRenderer の高性能な代替。
- [gdx-gltf](https://github.com/mgsx-dev/gdx-gltf) - GLTF 3Dファイル形式サポート（インポート／エクスポート）、PBR シェーダー、その他の高度なレンダリング。
- [gdx-graph](https://github.com/MarcinSc/gdx-graph) - レンダリングパイプラインとシェーダーを設計する GUI、それらをゲームへ容易に組み込むライブラリを提供。

### オーディオ
- [TuningFork](https://github.com/Hangman/TuningFork) - libGDX デスクトップユーザー向け高度な3Dオーディオ機能。
- [gdx-miniaudio](https://github.com/rednblackgames/gdx-miniaudio) - MiniAudio に基づく libGDX 用高度クロスプラットフォームオーディオエンジン。
- [gdx-sfx](https://github.com/spookygames/gdx-sfx) - libGDX でよりよい効果音を得るための便利なもの。
- [gdx-pd](https://github.com/mgsx-dev/gdx-pd) - libGDX 用 Pure Data 拡張。

### その他
- [anim8-gdx](https://github.com/tommyettinger/anim8-gdx) - 必要に応じて設定可能なディザリングを使い、Pixmaps のシーケンスから（アニメーション）GIF・PNG を保存。
- [gdx-dbgagent](https://github.com/PokeMMO/gdx-dbgagent) - オブジェクトが dispose されない問題や Color.WHITE などの定数変更といった一般的問題をデバッグする Java Agent。 
- [gdx-jnigen](https://github.com/libgdx/gdx-jnigen) - C/C++ コードを Java ソースコードとインラインで記述できる小さなライブラリ。
- [gdxGifRecorder](https://github.com/Anuken/GDXGifRecorder) - GIF を記録し自動保存するユーティリティクラス。
- [KTX](https://github.com/libktx/ktx) - libGDX 用 Kotlin 拡張・ユーティリティ。
- [noise4j](https://github.com/czyzby/noise4j) - 各種プロシージャルコンテンツ生成チュートリアルに基づくシンプルなマップジェネレーター。
- [Texture Packer GUI](https://github.com/crashinvaders/gdx-texture-packer-gui) - libGDX ゲームフレームワーク向けテクスチャアトラスをパック・管理する簡単な方法。
- [libGDX Plugin](https://github.com/BlueBoxWare/LibGDXPlugin) - 色プレビューや一般的なミスの追加検査など、多くの libGDX 機能・ツールを追加する IntelliJ IDEA・Android Studio 用プラグイン。

## チュートリアル

_初心者と経験豊富な開発者向けのチュートリアル。_

### はじめに

- [Official libGDX Wiki](https://libgdx.com/wiki/) - 膨大な情報を含む公式 libGDX wiki。
- [Tann's Hello libGDX](https://colourtann.github.io/HelloLibgdx/) - ゼロからゲームを作る方法を扱う初心者向けの優れたガイド。
- [Development Tutorial Playlist by Phillip Mod Dev](https://www.youtube.com/playlist?list=PLLwCf-qdpyEnB_FO_1HkUFh7smwGNjAaC) - libGDX の基礎を扱う動画シリーズ。
- [Brandon Grasley's Space Shooter Game](https://www.youtube.com/playlist?list=PLfd-5Q3Fwq0WKrkEKw12nqpfER3MG5_Wi) - 完全な Android ゲームをゼロから作る動画チュートリアルシリーズ。
- [Creating a Launcher](https://youtu.be/3l5F7f7vfTU) - libGDX を使いゲームランチャーを作る動画チュートリアル。
- [Deploying with JPackage](https://github.com/raeleus/skin-composer/wiki/libGDX-and-JPackage) - Gradle コマンド経由で JPackage を使い libGDX ゲームをデプロイするチュートリアル。
- [JSON in Game Dev](http://mana-break.blogspot.com/2014/06/power-of-json-in-game-development-items.html) - データ保存に JSON を使う一般的なチュートリアル。
- [Progress Bar Design](https://github.com/raeleus/skin-composer/wiki/The-Man-Who-Killed-Hitler-and-then-The-Progress-Bar) - 例とともに異なるプログレスバー設計手法の長所・短所を議論。
- [libGDX External Tutorials](https://libgdx.com/wiki/articles/external-tutorials) - 公式・非公式チュートリアルの大きな一覧。
- [Scene2D.UI From the Ground Up](https://github.com/raeleus/skin-composer/wiki/From-the-Ground-Up:-Scene2D.UI-Tutorials) - libGDX の主要なシーングラフ・レイアウトツールキット Scene2D における UI 設計の基礎を扱う。

### 高度な内容

- [Code Hotswapping](https://youtu.be/zKfh6WuaikQ) - 生産性を高めるため libGDX プロジェクトでコード hotswapping を有効にする動画チュートリアル。
- [Dynamic Textures with Pixmap](https://javadocmd.com/blog/libgdx-dynamic-textures-with-pixmap/) - Pixmaps を使いマスクを作る方法を詳細に説明。
- [iOS Deployment Tutorial](https://link.medium.com/vgYo0mSi3W) - RoboVM を使い2019年に iOS へデプロイする方法。
- [Sub-pixel Perfect Smooth Scrolling](http://code-disaster.com/2016/02/subpixel-perfect-smooth-scrolling.html) - ピクセルパーフェクトなスムーズスクロール。
- [Introduction to 3D Series](https://www.youtube.com/playlist?list=PLjUR2MkQ0cuHZ70Ps8F9WMyoyKHKAbYvQ) - gdx-gltf を使う libGDX 3D のチュートリアルシリーズ。

### 一般的な学習資料
- [Book of Shaders](https://github.com/patriciogonzalezvivo/thebookofshaders) - Fragment Shaders の抽象的で複雑な世界を段階的に案内するガイド。GLSL。
- [Game Programming Patterns](https://gameprogrammingpatterns.com/) - ゲームのアーキテクチャ・設計パターン。

## アセット

_ゲームを次のレベルへ進めるための、無料で高品質なアセット集。_

- [Kenney Assets](https://kenney.nl/) - 2D・3Dアートから効果音まで、ゲーム向け高品質アセット。
- [OpenGameArt.org](https://opengameart.org/) - 多様なオープンコンテンツアセットを提供するリポジトリ。
- [Game-Icons.net](http://game-icons.net/) - クールなゲーム関連グラフィックを大量に含むリポジトリ。
- [Jsfxr](https://chr15m.itch.io/jsfxr) - 数個のボタンを押して独自の効果音を素早く作成。プロトタイピングに最適。
- [freesound.org](https://freesound.org/) - 音声スニペット、サンプル、録音、短い電子音の巨大な協働データベース。

## コミュニティ

_他の libGDX 開発者と連絡を取り、協働し、助けを得る。_

- [Discord](https://discord.gg/4S8pQqc) - コミュニティのさまざまなリーダーが毎日利用できる活発なチャット。**推奨**
- [Reddit](https://www.reddit.com/r/libgdx/) - libGDX の非公式 subreddit。活動は多くありません。

## その他のリスト

_libGDX 開発者に役立つ可能性がある他の awesome リスト。_

- [Game Networking](https://github.com/MFatihMAR/Awesome-Game-Networking) - ゲームネットワークプログラミングリソースのキュレーション済みリスト。
- [Game Talks](https://github.com/hzoo/awesome-gametalks) - ゲーミングトーク（開発、設計など）のキュレーション済みリスト。
- [Java](https://github.com/akullpp/awesome-java) - 優れた Java フレームワーク、ライブラリ、ソフトウェアのキュレーション済みリスト。
- [Kotlin](https://github.com/KotlinBy/awesome-kotlin) - Kotlin 関連の優れたもののキュレーション済みリスト。
- [Magic Tools](https://github.com/ellisonleao/magictools) - 魔法を起こすためのゲーム開発リソース一覧。
- [Game Accessibility Guidelines](http://gameaccessibilityguidelines.com/) - ゲームができるだけ幅広い人々に同じくらい楽しいものとなるようにする、インクルーシブなゲーム設計の率直なリファレンス。**推奨**
- [Awesome Gamedev](https://github.com/Calinou/awesome-gamedev) - 素晴らしいゲームを作るための、フリーソフトウェア・フリーカルチャーリソース集。


---


## コントリビュート

コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/rafaskb/awesome-libgdx/blob/93102878e1b59430845b85d1d8ea057a497d57cb/contributing.md)を読んでください。



## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)
