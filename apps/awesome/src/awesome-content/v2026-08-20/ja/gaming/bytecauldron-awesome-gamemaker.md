---
title: "bytecauldron/awesome-gamemaker"
description: "GameMakerのライブラリ、拡張、制作ツール、学習資料を分類した定本スナップショット"
licenseSource: "github-bytecauldron-awesome-gamemaker-readme-md"
---

<p align="center">
    <a href="https://gamemaker.io/"><img src="https://github.com/bytecauldron/awesome-gamemaker/raw/main/images/banner.png" /></a>
</p>

# GameMakerのAwesomeリスト <a id="awesome-gamemaker"></a> [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Made with GameMaker](https://img.shields.io/badge/Made%20with-GameMaker-000000.svg?style=flat&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAZlBMVEX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2BrG8stAAAAIXRSTlMABg0OFBkfcn1%2Bf4CBgoOFhoeIiouWmNDa5ebp8PX2%2B%2F6o6Vq%2BAAAAY0lEQVR42k2OWQ6AIAwFn%2BIOioobrnD%2FS4o0EeanmQxNAdErRFTWtsFq6%2BiiZozz0CSnTjYBwo0RkF8DWDLf51Ni9K%2FYdq0Fy3KAfzk97M7goK1F%2F4rGH9Kk1OlboQtEDIrmC%2BU3CVxTr%2FRMAAAAAElFTkSuQmCC)](https://gamemaker.io) [![Links](https://github.com/bytecauldron/awesome-gamemaker/actions/workflows/links.yml/badge.svg)](https://github.com/bytecauldron/awesome-gamemaker/actions/workflows/links.yml)

> GameMaker向けの優れたライブラリ、スニペット、ガイド、プロジェクトを厳選したリストです。😎

[GameMaker](https://gamemaker.io/)はYoYo Gamesが提供する使いやすいクロスプラットフォームゲームエンジンです。初心者から上級者まで、デスクトップ、HTML5、コンソール向けの2D・3Dゲームを制作できます。

GameMakerで制作できるゲームの例は[こちらのリスト](https://steamdb.info/tech/Engine/GameMaker/)を参照してください。

## 目次 <a id="contents"></a>

- [はじめに](#getting-started)
- [データ操作](#data-manipulation)
- [ネイティブ拡張](#native-extensions)
- [タイミング](#timing)
- [非同期処理](#async)
- [ユーティリティ](#utilities)
- [ツール](#tools)
- [デバッグ](#debugging)
- [入力処理](#input-handling)
- [ユーザーインターフェース](#user-interface)
- [ローカライズ](#localization)
- [物理演算](#physics)
- [スプライト](#sprites)
- [音声](#audio)
- [レベル](#levels)
- [パーティクル](#particles)
- [ライティング](#lighting)
- [シェーダー](#shaders)
- [3D](#3d)
- [スプライトスタッキング](#sprite-stacking)
- [ネットワーク](#networking)
- [統合](#integrations)
- [カメラ](#camera)
- [シーケンス](#sequences)
- [状態機械](#state-machines)
- [経路探索](#pathing)
- [便利な追加資料](#useful-extras)
- [ブログ](#blogs)
- [YouTube](#youtube)
- [コミュニティ](#community)
- [謝辞](#special-thanks)

## はじめに <a id="getting-started"></a>

- [GameMaker Manual](https://manual.gamemaker.io/)
- [GameMaker Release Notes](https://gms.yoyogames.com/ReleaseNotes.html)
- [GameMaker Marketplace](https://marketplace.gamemaker.io/)
- [Beginner GameMaker Tutorials](https://www.youtube.com/watch?v=nBCDzE9MDbk&list=PLPRT_JORnIur4v19PHXCtJ5P05vaokFdP) - シュアーン・スパルドインのチュートリアル。IDEの基本機能についての包括的な紹介。初心者の方は、フルプレイリストを確認するのを強くおすすめします。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Advanced GameMaker Tutorials](https://www.youtube.com/watch?v=n8-MuIuOQFE&list=PL_hT--4HOvrfuDcYrTufdpgwoALAczPR2) - ドラゴンアイト・スパムによるチュートリアル。GML言語に関連するより高度なテーマを掘り下げています。また、包括的な3Dおよびシェーダー導入動画も提供しています。 及 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)

### 推奨事項 <a id="recommendations"></a>

- プログラミング経験がある場合は、ビジュアル（ドラッグ＆ドロップ）機能ではなくGameMaker Language（GML）を学ぶことを推奨します。
- ピクセルアートには、標準スプライトエディターの代替として[Aseprite](https://www.aseprite.org/)が広く使われています。💸
- [Asepriteのソースコード](https://github.com/aseprite/aseprite) - 無料でコンパイルできます。
- 他の開発者によるライブラリも活用できますが、ライセンスには注意してください。
- IDEやランタイムの更新は、GML構文変更などによりゲームを壊す可能性があります。共同作業では同じGMSバージョンを使い、十分な予告と確認の後に更新してください。GMSダウンロードページから以前のIDEを再インストールできます。
- 複雑な物理相互作用が必要でない限り、GameMaker組み込みの物理システムを避けることが一般に推奨されます。
- プロジェクトを定期的にバックアップしてください。リポジトリで大きなメディアファイルを扱う場合は[Git LFS](https://git-lfs.github.com/).

## データ操作 <a id="data-manipulation"></a>

より具体的な分類に当てはまらないデータ構造とファイル形式を扱います。

- [GML-OOP](https://github.com/Mtax-Development/GML-OOP) - GameMakerの主要機能を操作するためのコンストラクタライブラリ。
- [GML-Classes](https://github.com/Nikko-the-cat/GML-Classes) - GameMakerにOOP機能を追加する別のプロジェクト。
- [Destructors](https://github.com/DatZach/Destructors) - struct内でds_*タイプ（リストやマップなど）を使用できるようにします。
- [SNAP](https://github.com/JujuAdams/SNAP) - データ形式を簡単に保存・読み込みできるライブラリ。新しいGameMakerには`json_parse`と`json_stringify`が含まれますが、CSV、INI、XMLなどを変換するときに役立ちます。
- [LWO](https://github.com/tabularelf/lwo) - structを用いた軽量オブジェクト。
- [Lock And Key](https://github.com/AlubJ/Lock-And-Key) - 文字列およびファイルの暗号化。
- [Map](https://github.com/GameMakerDiscord/Map.gml) - ハッシュテーブルの実装。
- [Matrices](https://github.com/JujuAdams/matrices) - マトリクス操作スクリプトのコレクション。
- [gm-stream](https://github.com/daikon-games/gm-stream) - データ構造の操作。
- [ForEach](https://github.com/KeeVeeGames/foreach.gml) - 配列、ds_lists、ds_maps、ds_stacks、ds_queues、ds_prioritiesおよびstructに対してforeach実装を追加します。
- [DeepCopy](https://github.com/KeeVeeGames/DeepCopy.gml) - 深層クローンクラスインスタンス／構成されたstruct、任意の順序にネストされた匿名structおよび配列！
- [Cottonwool](https://github.com/JujuAdams/Cottonwool) - メモリリークのない安全な表面。
- [BSONGML](https://github.com/LAGameStudio/BSONGML) - JSONとして文字列で読み込む際のメモリおよびパフォーマンスの懸念を回避し、GML構造データをバイナリファイルに保存・読み込みできます。
- [Binder](https://github.com/Homunculus84/Binder) - 大規模データセットに対して効率的な検索を行うためのバイナリ検索ライブラリ。
- [Airkiver](https://github.com/AlubJ/Airkiver) - ゲームファイルアーカイブツール。
- [OKColor](https://github.com/KeeVeeGames/OKColor.gml) - OKLab/OKLCHカラーを実装するための、適切なカラーマネージャー。
- [Exception](https://github.com/KeeVeeGames/Exception.gml) - カスタム例外のためのベースクラス。
- [ArrayList](https://github.com/KeeVeeGames/ArrayList.gml) - 最も完全なリストクラス。ガベージコレクション対応、高速ソート機能、[]アクセサ、配列としての参照。
- [Bit Buffers](https://yellowafterlife.itch.io/gamemaker-bit-buffers) - ビット単位でのバッファの読み書き。
- [sprite_add_gif](https://yellowafterlife.itch.io/gamemaker-sprite-add-gif) - アニメーションGIFをスプライトとして動的に読み込みます
- [Managix](https://foxyofjungle.itch.io/managix) - アシンクメモリとリソースマネージャー（テクスチャグループ、オーディオグループなど） 💸
- [Ngrams](https://github.com/tinkerer-red/Ngrams) - ふらっと検索、予測テキスト、トークンシーケンスモデル用の軽量n-gramライブラリ

## ネイティブ拡張 <a id="native-extensions"></a>

特定プラットフォームで動作し、GMLだけでは不可能、非実用的、または非効率な処理を可能にします。入力処理など特定用途のネイティブ拡張は対応する節に掲載します。

- [GM-ExtensionGenerator](https://github.com/YoYoGames/GM-ExtensionGenerator) - ネイティブ拡張用の公式・スキーマ駆動コードジェネレーター
- [zlib functions](https://yellowafterlife.itch.io/gamemaker-zlib) - シンプルな圧縮／解圧関数
- [Window Taskbar](https://yellowafterlife.itch.io/gamemaker-window-taskbar) - Windows専用。ゲームウィンドウのボーダーおよび/またはタスクバーのボタンをフラッシュします
- [GMSDLL](https://github.com/YAL-GameMaker/GMSDLL) - GameMakerでDLLを構築するためのテンプレートプロジェクト
- [Extension Collection](https://samuel-venable.itch.io/gamemaker-extension-collection) - さまざまな拡張を組み合わせた拡張セット
- [gameframe](https://github.com/YAL-GameMaker/gameframe) - Windows用のカスタムウィンドウのキャプションとボーダー
- [GMD3D11](https://github.com/blueburncz/GMD3D11) - Windows Direct3Dとのインターフェースに使用するDLL
- [GM Sysinfo](https://github.com/SpikeHD/gm-sysinfo) - システム情報やリソース使用量を取得するためのクロスプラットフォーム拡張
- [Video Player Extension](https://forum.gamemaker.io/index.php?threads/video-player-for-windows-macos-and-ubuntu.77882/) - 動画を再生します。ただし、最新版GMSには動画サポートがあります
- [GMESCAPI](https://marketplace.gamemaker.io/assets/9529/gmescapi) - ウェブカメラのキャプチャ
- [Rousr Release](https://gitlab.com/rousr-release/) - Rousrチームの未維持プロジェクト（誰かがOutsideTheBox/Dissonanceがどこにいったかを尋ねた場合に）
- [window_shape](https://yellowafterlife.itch.io/gamemaker-window-shape) - Windowsでのカスタム形状のウィンドウ 💸
- [Windows' windows](https://yellowafterlife.itch.io/gamemaker-winwin) - Windowsでの複数ウィンドウ 💸
- [winMenu](https://yellowafterlife.itch.io/gamemaker-winmenu) - Windowsでのネイティブメニュー 💸
- [window_set_icon](https://yellowafterlife.itch.io/window-set-icon) - Windowsでのウィンドウおよび/またはタスクバーのアイコンを変更
- [file_dropper](https://yellowafterlife.itch.io/gamemaker-file-dropper) - Windowsでのゲームウィンドウにファイルをドラッグ＆ドロップして受け入れる
- [file_dragger](https://github.com/YAL-GameMaker/file_dragger) - Windowsでのゲームウィンドウからファイルをドラッグ＆ドロップして外に出す
- [Window Commands](https://yellowafterlife.itch.io/gamemaker-window-commands) - ディスパッチ/インターセプトウィンドウコントロールは、最小化（およびその他のウィンドウ関連機能）を含む。
- [wasm-bridge](https://github.com/Sidorakh/wasm-bridge) - GX/ウェブアセンブリゲームにおけるJS拡張機能の使用方法。
- [Web Dynamic Textures](https://yellowafterlife.itch.io/gamemaker-web-dyn-textures) - HTML5用の動的テクスチャページロードシステム。
- [GMWinBackdrop](https://topherlicious.itch.io/gmwinbackdrop) - Windows 11のバックグラウンド素材。
- [GMSDLL.rs](https://github.com/YAL-GameMaker/GMSDLL.rs?) - RustでネイティブDLL拡張を構築する例。

## タイミング <a id="timing"></a>

独自タイマー、タイムライン、タスクスケジューリングを扱います。

- [DoLater](https://github.com/JujuAdams/DoLater) - native call_later()関数を改善した遅延コード実行。
- [Stopwatch](https://github.com/Lojemiru/Stopwatch) - GameMakerのアルーム機能の代替。
- [wTimer](https://mors-games.itch.io/wtimer) - アルーム機能の堅牢な代替。
- [FrogAlarm](https://github.com/colmeye/FrogAlarms) - GameMakerのアルーム機能へのもう一つの簡単な代替。
- [fuwafuwa](https://github.com/kemonologic/fuwafuwa) - 使いやすいタイマーシステム。
- [Timer](https://github.com/nommiin/Timers) - JavaScriptのsetTimeoutおよびsetIntervalにモデル化された間隔ベースのタイミングメソッド。
- [GMTimeLine](https://github.com/TimVN/GMTimeLine) - GameMakerのタイムラインへの純コードの代替。
- [Agenda](https://github.com/benal20/Agenda.gml) - コールバックの実行をスケジュールおよび遅延する。
- [GMMT](https://github.com/erkan612/GMMT) - 30以上のエイジング関数、キーフレーム、クリップ、運動経路、スプリング物理、振動、Perlinノイズ、および完全な再生制御を備えたTweeningフレームワーク。
- [STAGING](https://github.com/sdelaughter/STAGING) - 複数フレームにわたる初期化タスクを分割し、非同期タスクのサポートを含む。

## 非同期処理 <a id="async"></a>

- [Coroutines](https://github.com/JujuAdams/Coroutines) - GameMaker用の非同期関数。
- [SimThreads](https://github.com/tabularelf/SimThreads) - GameMakerにおけるシミュレートされたスレッド。
- [MultiProcessing](https://github.com/tinkerer-red/MultiProcessing) - GameMakerにおけるマルチプロセスの概念実証。
- [Promises](https://github.com/YAL-GameMaker/Promise.gml) - JavaScriptのPromiseのアダプテーション。
- [GML Promise](https://github.com/tinkerer-red/GML-Promise) - JavaScriptスタイルのPromiseライブラリのもう一つ。

## ユーティリティ <a id="utilities"></a>

- [gm-core](https://github.com/gm-core) - 基礎となるユーティリティセットであり、新しいGameMakerプロジェクトの素晴らしい出発点。品質の向上機能、ネットワークツール、テストフレームワーク、デルタタイミング、その他を内包。
- [FAST](https://github.com/Hyomoto/FAST) - フレキシブルなアシスタントツールキット。gm-coreに類似しているが、入力と解像度の処理を含む。
- [DDDEditor](https://github.com/DragoniteSpam/DDDEditorGMS2) - 汎用的なゲームエディタ。
- [handytools](https://github.com/JujuAdams/handytools/) - ジュジュのライブラリを一つの便利なプロジェクトにまとめて提供。
- [GameMaker Scaffolding](https://github.com/babaganosch/GameMakerScaffolding) - もう一つの魅力的な総合的なテンプレートで、低解像度・タイルベースゲームの開発に焦点を当てる。
- [Broadcast](https://github.com/JulianDicken/Broadcast) - イベント処理ライブラリ。
- [Polarca](https://github.com/VitorEstevam/polarca) - 補間関数。
- [Twerp](https://pixelatedpope.itch.io/twerp) - lerp()に類するスムーズな関数。
- [Dynamo](https://github.com/JujuAdams/Dynamo) - 動的データローダー。
- [Gumshoe](https://github.com/JujuAdams/Gumshoe) - シンプルな深層ファイル検索関数。
- [Mathematical Scripts](https://github.com/adam-rumpf/game-maker-scripts) - 数学関数のスクリプト集。
- [Seedpod](https://github.com/daikon-games/gm-seedpod) - GMLプログラミング体験を向上させるスクリプト集。
- [Trixscript](https://trixelized.itch.io/trixscript) - ゲームに実用的な関数を追加。
- [CoreExtension](https://github.com/blueburncz/CoreExtension) - CC0プログラミングライブラリのコレクション。（アーカイブ）
- [Voxeledphoton's FreeGMScripts](https://github.com/vphoton/FreeGMScripts) - 追加のGMLヘルパー関数。一部は2.3以降の構文と不一致の可能性がある。
- [Motion Scripts](https://avis.itch.io/motion-scripts) - 組み込みの運動変数の置き換えメソッドを提供。
- [Canvas](https://github.com/tabularelf/Canvas) - 表面管理に向けた素晴らしい解決策のもう一つ。
- [GMLodash](https://github.com/DatZach/GMLodash) - GMLにおける関数型プログラミング。
- [Autoframer](https://github.com/mstop4/auto-framer) - 異なるディスプレイやウィンドウサイズに合わせてゲームビューのサイズ調整を自動的に処理。
- [GML+](https://xgasoft.itch.io/gmlp) - GMLの「ギャップ」を埋める目的を持つスクリプト集。 💸
- [GMLive](https://yellowafterlife.itch.io/gamemaker-live) - ライブコーディング／インタラクティブなプログラミング。💸
- [gml-highscorer](https://github.com/Grisgram/gml-highscorer) - 最高スコアと賞のシステム。
- [SSave](https://github.com/stoozey/SSave) - シンプルなファイル保存システム。
- [Catspeak](https://github.com/katsaii/catspeak-lang) - モーディング用のクロスプラットフォームプログラミング言語。
- [JITSpeak](https://github.com/BenjaminUrquhart/JITSpeak) - Catspeakのパフォーマンスを向上させる。
- [GMBenchmark](https://github.com/DragoniteSpam/GMBenchmark) - GMLコードのベンチマークツール。
- [Figgy](https://github.com/glebtsereteli/Figgy) - 一貫性と持続可能なライブ設定を提供し、ゲームのチューニングとバランス調整をスムーズに。
- [RenderStack](https://github.com/FoxyOfJungle/RenderStack) - ゲームのレンダリングをカスタマイズ可能な順序に分離する。
- [GMLiteSearch](https://github.com/erkan612/GMLiteSearch) - GameMaker用の高速で柔軟な全文検索。小規模から中規模データセット（10k〜50k以上ドキュメント）に対応し、リアルタイムインデックス、模糊検索、n-gram、BM25/TF-IDFスコアリング、持続性を備える。
- [Iota](https://github.com/JujuAdams/iota) - 軽量なタイムステップライブラリ。
- [GMVex](https://github.com/erkan612/GMVex) - SVG対応のベクターグラフィックスフレームワーク。TrueTypeフォントのレンダリング、パスの論理演算、塗りつぶし／線描のレンダリングをサポート。
- [RunGML](https://github.com/sdelaughter/RunGML) - Lisp風の構文を持つ実行時スクリプティング言語。JSONファイルを含むことでモーディングサポートを提供し、ゲーム内コンソールを用いてデバッグ／ライブコーディングを実現。
- [Tweeny](https://github.com/Kruger0/Tweeny) - アニメーション曲線とエイズ関数をサポートする、一時実行型のTweenライブラリ。

## ツール <a id="tools"></a>

ゲーム内で使うものではなく、プロジェクトファイルやGameMaker本体に作用するツールです。

- [Stitch for VSCode](https://marketplace.visualstudio.com/items?itemName=bscotch.bscotch-stitch-vscode) - VSCodeでGameMakerプロジェクトを編集できる。
- [GMEdit](https://github.com/YellowAfterlife/GMEdit) - GameMakerと併用するコードエディタ。
- [YYP Maker](https://sahaun.itch.io/yyp-maker) - `.yyp`ファイルを生成するツール。
- [Rubber](https://github.com/GameMakerDiscord/Rubber) - コマンドラインからGameMakerプロジェクトをコンパイルするツール。使い方を説明した[詳しいガイド](https://www.patreon.com/posts/how-to-build-36556955)があります。
- [GMSnip](https://manta-ray.itch.io/gmsnip) - IDE内で無限にコードスニペットを定義できる実験的ツール。
- [vim-GML](https://github.com/JafarDakhan/vim-gml) - GameMaker用の高品質Vim文法強調表示。
- [sfGML](https://yellowafterlife.itch.io/gamemaker-haxe) - 強型型のHaxeからGMLコードを生成。
- [Win7 patcher for GM2024.11+](https://yellowafterlife.itch.io/gm2024-win7-patcher) - 新しいGMバージョンで作成されたゲームがWindows 7上で実行できるようにする。
- [RerouteAudio](https://yellowafterlife.itch.io/gamemaker-reroute-audio) - コンパイルされた音声ファイルをサブディレクトリに分類する。💸
- [GMLC](https://github.com/tinkerer-red/GMLC) - 実行時コンパイラとインタープリターより、GMLコードを読み込み、コンパイル、実行する。
- [GMLVM](https://github.com/erkan612/GMLVM) - 使いやすい完全なGMLインタープリターより、実行時におけるGMLコードの実行を可能にする。

## デバッグ <a id="debugging"></a>

- [rt-shell](https://github.com/daikon-games/rt-shell) - ゲーム中に簡単に使えるシェル。自作コマンド、コマンドメタデータ、コマンドの提案、履歴などを作成できる。
- [Snitch](https://github.com/JujuAdams/Snitch) - クラッシュとログ記録システム。
- [DeerLog](https://mulfok.itch.io/gamemaker-deerlog) - 小型のログ記録機能。
- [Meta](https://github.com/nommiin/meta) - 実行時アセットインスペクタ。
- [FPS Speedometer](https://dragonite.itch.io/fps-speedometer-for-gamemaker) - 見やすいフレームレート表示。
- [Duck](https://github.com/imlazyeye/duck) - 高速なGMLアナライザーより、コードスタイルの強制とエラーの検出を行う。
- [Gobo](https://github.com/Pizzaandy/Gobo/) - GML用の意見のあるコードフォーマッター。
- [Gobo (EttyKitty fork)](https://github.com/EttyKitty/Gobo/) - GML用の少し意見の少ないコードフォーマッターで、より多くのオプションと機能を提供。
- [Inspectron](https://github.com/shdwcat/Inspectron) - ゲームマーカーのデバッグビューを簡単に作成できるフリュイディーAPI。
- [GMPulse](https://topherlicious.itch.io/gmpulse) - 実行時インスペクタとコントロールパネル。 💸
- [Lookout](https://github.com/glebtsereteli/Lookout) - 役立つデバッグオーバーレイビュー。
- [Olympus](https://github.com/bscotch/olympus) - テストフレームワーク。
- [Ganary](https://github.com/bscotch/ganary) - Olympusを使用して回帰テストを行う。
- [gm-verrific](https://github.com/Alphish/gm-verrific) - 最高の自動テストフレームワーク。
- [gms2-test](https://github.com/pmarincak/gms2-test) - ユニットテストフレームワーク。
- [Crispy](https://github.com/bfrymire/crispy) - GameMakerにおけるユニットテスト。

## 入力処理 <a id="input-handling"></a>

- [Input](https://codeberg.org/offalynne/Input) - 無駄な話なしのゲームパッド／キーボードライブラリ。
- [InputTouch](https://github.com/AlubJ/InputTouch) - Input向けのタッチコントロールプラグイン。
- [XeroInput](https://www.reddit.com/r/gamemaker/comments/icoh6m/xeroinput_gms23_input_handler/) - 別のライブラリで、1つのアクションに対して複数の入力を受け付けることができます。
- [InputCandy](https://github.com/LAGameStudio/InputCandy) - Input と類似しており、SDL をラッパーとして機能し、アクションとシグナリングを提供する一方で、テスト、画面上の診断、および周辺機器に関連する他のUIコンポーネント、さらにユーザー向けに事前に構築された設定メニューを提供し、簡単にスタイルを変更できます。
- [Good Vibes](https://github.com/mrdaneeyul/good-vibes) - デバイスの振動。
- [Mouse Queue](https://github.com/YAL-GameMaker/window_mouse_queue) - Windowsのマウスポインタを高精度で追跡します。
- [Native Cursors](https://yellowafterlife.itch.io/gamemaker-native-cursors) - システムレベルのカーソル。 💸
- [Native Mouselock](https://yellowafterlife.itch.io/gamemaker-native-mouselock) - システムレベルのマウスロック。 💸
- [Raw Input](https://yellowafterlife.itch.io/gamemaker-raw-input) - 複数のマウスとキーボードを使用できます。 💸

## ユーザーインターフェース <a id="user-interface"></a>

- [Scribble](https://github.com/JujuAdams/scribble) - 効率的なマルチエフェクトテキストレンダラー。
- [Scripture](https://pixelatedpope.itch.io/scripture) - 使いやすく、高度に互換性のあるテキストレンダラーのもう一つ。
- [Chatterbox](https://github.com/JujuAdams/chatterbox) - ナラティブスクリプトツール。
- [Textboxy](https://github.com/glitchroy/textboxy) - シンプルなテキストボックス。
- [Crochet](https://github.com/FaultyFunctions/Crochet) - 作家やプログラマー向けのインタラクティブなダイアログエディタ。
- [NotificationSystem](https://github.com/babaganosch/NotificationSystem) - GameMakerにおける通知。
- [YUI](https://github.com/shdwcat/YUI) - ライブリロード、テンプレートシステム、データバインディング、ドラッグアンドドロップ機能を備えたUIシステム。
- [Guido](https://github.com/JujuAdams/Guido) - シンプルな即時モードGUIフレームワーク。
- [GMUI-Framework](https://github.com/AlertStudios/GMUI-Framework) - 純粋なGMLソリューションで、メニューの構造と制御を行い、.NET UIに類似した機能を提供します。
- [GMUI](https://github.com/erkan612/GMUI) - 即時モードGameMaker UIライブラリで、多くのUIコンポーネントを提供。
- [MajorGUI](https://github.com/erkan612/MajorGUI_GML) - 表面ベースのGUIで、UIのスタイルと機能について100％制御できます。
- [GMS2-UI-Library](https://github.com/nabilatsoulcade/GMS2-UI-Library) - GameMakerでUI設計を実装するための便利なスクリプトを豊富に備えたライブラリ。
- [Emu UI](https://github.com/DragoniteSpam/Emu) - 共通のUI要素（テキスト入力、チェックボックス、ラジオボタン、ダイアログボックスなど）。
- [Easy And Fast Menu](https://pkgames.itch.io/easy-and-fast-menus-for-gms-23) - メニューを数秒で実行できるシンプルな実装。GMUIのような大きなソリューションを必要としない場合、非常に適しているように見えます。
- [Pause Menu](https://jasontomlee.itch.io/pause-menu-gamemaker-1-2) - もう一つの小さな実装だが、メニュー選択間のアニメーションがカッコいい。
- [Magpie](https://dragonite.itch.io/magpie) - 汎用インベントリシステム。
- [ImGuiGML](https://rousr.itch.io/imguigml) - Dear ImGuiのDLL/GMLラッパー。
- [GUI Framework](https://niris.itch.io/gui-framework) - Niris GamesによるGUI実装。
- [Menu Tutorial](https://www.youtube.com/watch?v=1ITZOrI2qkA&list=PLSFMekK0JFgx2vmcCnttxxhrNVTjUB8R1) - 親しみやすいコソノアウト。![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Smart Clickable GUI](https://www.youtube.com/watch?v=RbBgE3cUShc) - ピクセル化されたポープ。![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [zitk](https://github.com/TandyRum1024/zitk) - もう一つ興味深い、Dear ImGuiをインスピレーションに受けて作られたGUIツールキット。開発中だが、注目すべきです。
- [gooey](https://manta-ray.itch.io/gooey) - GameMaker LTS用のスプライトベースのUIライブラリ。
- [SimpleUI](https://github.com/evolutionleo/SimpleUI) - ミニマリズムを採用したUIフレームワーク。
- [LimeUI](https://github.com/Limekys/LimeUI) - 現代的でタッチ対応のよいインターフェースに適したFlexpanelシステム。
- [Bento](https://github.com/JujuAdams/Bento) - マルチプラットフォーム対応のUIフレームワーク。
- [InteractiveBooks](https://marketplace.gamemaker.io/assets/4858/now-free-interactive-books) - 非常に柔軟でインタラクティブな本の実装。
- [SimpleBook](https://github.com/Gizmo199/SimpleBook) - シンプルな本のレンダリングフレームワーク。

## ローカライズ <a id="localization"></a>

- [polyglot](https://github.com/daikon-games/polyglot) - ローカライズ用のライブラリ。
- [gm-i18n](https://github.com/CreativeHandOficial/gm-i18n) - JSONファイルを使ってテキストのローカライズを簡単かつ迅速に実行。
- [Lexicon](https://github.com/tabularelf/lexicon) - もう一つのローカライズソリューションで、実装の簡略化に焦点を当てている。
- [GMLocalize](https://github.com/DragoniteSpam/GMLocalize2) - 完全なローカライズソリューションではない。GameMaker Studio 2プロジェクトからテキストを抽出し、JSONファイルに保存。
- [Small Pentapop Localization Tool](https://github.com/AntonBergaker/small_pp_localization_tool) - GMLocalizeに類似したエクスポートツールだが、CSVにエクスポート。
- [gms2-mofile](https://github.com/pmarincak/gms2-mofile) - ローカライズ用のMofileリーダー。
- [cmnLoc](https://yellowafterlife.itch.io/gamemaker-cmn-loc) - テキスト抽出機能・短い構文・ICUおよび複数形対応のローカライズライブラリ。💸
- [MythLoco](https://mythloco.co.uk) - ウェブベースの文字列エディタを備えたローカライズシステム。
- [Krug's Localize System](https://github.com/Kruger0/Localize) - リアルタイムでGoogleスプレッドシートAPIと同期するローカライズシステム。

## 物理演算 <a id="physics"></a>

- [Loj Hadron Collider](https://github.com/Lojemiru/Loj-Hadron-Collider) - 確実でピクセル精度の衝突エンジン。
- [On Slopes and Grids](https://forum.gamemaker.io/index.php?threads/on-slopes-and-grids-subpixel-perfect-topdown-movement-and-collision-line-without-objects.4073/) - 45度の傾きを実装するチュートリアル。
- [GMS2 Platforming System](https://benal.itch.io/basic-modern-platforming-system) - ベン・アレンによるGameMaker実装とシューン・スパルドインのオリジナル1.4プラットフォームチュートリアルへの拡張。
- [Inverse Kinematics Extension](https://github.com/tonystr/Inverse-Kinematics-Extension-for-Gamemaker) - 逆運動学を扱うためのライブラリ。
- [Verlet Integration Library](https://jamjamteam.itch.io/verlet-integration-gamemake-studio-2) - サレク・ラムベルトによるバーレット積分。
- [GMVerlet-Integration](https://github.com/tabularelf/GMVerlet-Integration) - ビジュアルに使用されたバーレット積分の例。
- [Top-Down Movement & Collision](https://pixelatedpope.itch.io/tdmc/devlog/156556/converting-tdmc-to-use-tiles) - ピクセルエイテッド・ポープによるオブジェクトベースの衝突システム。
- [GMPhysX](https://bytecauldron.itch.io/gmphysx) - GameMakerにNVIDIA PhysXを追加し、物理ベースの2D/3Dゲームを実現。💸
- [Fracture](https://github.com/GlebTsereteli/Fracture) - プロシージャルなBox2Dの破壊効果に物理ベースの破壊を適用。

## スプライト <a id="sprites"></a>

- [AESnips](https://github.com/angelwire/AESnips) - スプライト再生システム。
- [phgen](https://github.com/squircledev/phgen) - プレースホルダー資産の生成。
- [Disarm](https://github.com/NuxiiGit/disarm) - 実行時におけるスプライトの骨格アニメーション。
- [SpriteSource](https://github.com/bscotch/stitch/tree/develop/packages/sprite-source) - アート資産パイプラインを作成するためのユーティリティ。
- [PixelUpscaler](https://github.com/JujuAdams/Pixel-Art-Upscaling) - GameMaker用の不自然な解像度向けピクセルアートのアップスケールシェーダー。
- [ASESync](https://sahaun.itch.io/asesync) - GameMaker内でAsepriteファイルを自動同期。
- [conveyorbelt](https://github.com/imissmyfriends/conveyorbelt) - ASESyncに類似。AsepriteファイルをGameMakerのスプライトにエクスポート。
- [Collage](https://github.com/tabularelf/Collage) - テクスチャページビルダーと画像マネージャー。GameMakerのテクスチャページパッキングを模倣しつつ、より高い柔軟性を提供。
- [GM Animate](https://github.com/KormexGit/GM-Animate) - スプライトアニメーションマネージャー

## 音声 <a id="audio"></a>

- [GMEXT-FMOD](https://github.com/YoYoGames/GMEXT-FMOD) - GameMakerにおけるFMODの公式サポート
- [FML](https://github.com/Nikkilae/fml) - FMOD Studio API用のGameMakerバインディング
- [Echo/Delay Effect](https://madwolf-studios.itch.io/audio-echodelay-effect-for-gamemaker-studio-2) - 最適化された遅延効果。💸
- [wavload](https://github.com/nkrapivin/wavload) - 外部から.wavファイルを読み込む方法を示す。
- [audioExt](https://github.com/tabularelf/audioExt) - 音声外部ローダー／アンローダーマネージャー
- [ExternalAudio](https://github.com/NuxiiGit/ExternalAudio) - 実行時における外部.wavファイルの読み込み。
- [Phonix](https://github.com/Andre-404/Phonix/) - コンパクトな音声システム。動的音楽に最適！
- [Vinyl](https://github.com/JujuAdams/Vinyl) - リアルタイムで更新可能な音声システム。
- [LineAudio](https://github.com/WangleLine/LineAudio) - 音声補助関数。
- [Bard](https://github.com/gl326/bard-audio) - GameMakerにおける優れた音声設計・実装を支援するエンジン。最新のGameMaker音声効果を活用したバージョンへアップデート。
- [SynthEngine](https://topherlicious.itch.io/synthengine) - GameMaker用の完全機能の音楽シンセサイザー。
- [MusicTheoryLib](https://topherlicious.itch.io/musictheorylib) - GameMaker用の便利な音楽理論ツール。
- [WaveForm](https://topherlicious.itch.io/waveform) - GameMaker内で音声バッファから音波を描画。
- [WaveWrite](https://topherlicious.itch.io/wavewrite) - GameMaker内で.wavファイルを読み書き。
- [GMMidi](https://topherlicious.itch.io/gmmidi) - GameMaker内でMIDIファイルを読み書き。
- [EZAFX](https://topherlicious.itch.io/ezafx) - GameMaker用の即時プリセット音声効果。
- [GMSync](https://topherlicious.itch.io/gmsync) - ゲーム要素を音楽のリズムに完全に同期。
- [MicVol](https://topherlicious.itch.io/micvol) - GameMaker内でマイクの音量をリアルタイムで監視。💸

## レベル <a id="levels"></a>

- [LDtk to GMS](https://shynif.itch.io/ldtk-to-gms) - LDtkインポートツール
- [LDtkParser](https://github.com/evolutionleo/LDtkParser) - Advanced LDtk Importer.
- [Room Data Inspector](https://github.com/heygleeson/GM-RoomInspector) - 部屋データを収集し、JSONに保存して後で使用する.
- [Random Dungeon Generator](https://github.com/BlaXun/Random-Dungeon-Generator-GMS-2.3) - ユーザーが定義した部屋を組み合わせてダンジョンを作成.
- [Random Level Generator](https://github.com/GameMakerDiscord/random-level-gen-gms2) - GameMakerで実装されたランダムレベル生成の例（Nuclear Throneに類似）.
- [Wave Function Collapse](https://quadolorgames.itch.io/wfc-gml-demo) - ランダムなタイルマップを生成するが、現在の状態では生産用には準備されていない.
- [Destructible Terrain](https://github.com/niksudan/gms2-destructible-terrain) - GameMaker Studioで、表面とグリッドを使用した、衝突可能かつ破壊可能な地形の例.
- [Cellular Automata Caves](https://alessiogamedev.itch.io/gms-cellular-automata-algorithm) - 数百ミリ秒で巨大な洞窟を生成する.
- [GMRoomLoader](https://github.com/glebtsereteli/GMRoomLoader) - 実行時における部屋の読み込みを簡易化。再利用可能な部屋プレファブやプロシージャル生成に最適.

## パーティクル <a id="particles"></a>

- [Particle Editor](https://gamemakercasts.itch.io/particle-editor) - 簡単なUIで粒子を作成し、GMLコードにエクスポートする.
- [Particles Wrapper](https://github.com/GamemakerCasts/particles) - シンプルな粒子システムのラッパーで、粒子を作成する楽しさと簡単さを実現.
- [Advanced Particles](https://limekys.itch.io/advanced-particle-system) - 独自のデルタタイミングメソッドを備えた粒子実装.
- [Pulse](https://github.com/Delfos1/Pulse) - より複雑な粒子発生器、システム、粒子を作成するためのライブラリ.
- [Burrn](https://github.com/FoxyOfJungle/Burrn) - IDEに内蔵された粒子資産を使用する、内蔵型粒子システム.

## ライティング <a id="lighting"></a>

- [Bulb](https://github.com/JujuAdams/Bulb) - 2Dの照明と陰影.
- [GameMaker Lighting Engine](https://github.com/bilouw/Gamemaker-Lighting-Engine) - タイルベースの照明エンジンによる陰影の投影.
- [Lighting Systems](https://www.youtube.com/playlist?list=PLYVea5brHS8YHECGPoEp4_gWU-k6nWzUy) - GrizzliusMaximusによる、シャドウキャスティングを用いた非常に高速な動的2Dライティング実装。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Crystal](https://foxyofjungle.itch.io/crystal-2d-lighting-engine) - 完全で効率的な2D照明と陰影ソリューション. 💸

## シェーダー <a id="shaders"></a>

- [TransFX](https://short-bread.itch.io/transfx) - トランジションライブラリ.
- [Post-Processing FX](https://foxyofjungle.itch.io/post-processing-fx) - 50以上の高品質かつカスタマイズ可能な効果. 💸
- [Lens Distortion FOV](https://foxyofjungle.itch.io/lens-distortion-fov-shader) - 有用な視野深さ効果. 💸
- [Fast Blur Area](https://foxyofjungle.itch.io/foxey-blur-area) - 2行のコードで実現する高速アルファブレンドシェーダー効果. 💸
- [Transitions Pro](https://foxyofjungle.itch.io/foxey-transitions-pro) - 42のカスタマイズ可能なトランジション。💸
- [Sketch Cartoon Shader](https://foxyofjungle.itch.io/sketch-cartoon-shader) - ゲームのビジュアルをドロー／スケッチスタイルに変換。💸
- [2D Water Reflections](https://foxyofjungle.itch.io/water-reflective) - カスタマイズ可能な水のオブジェクトで、簡単に反射を表示。💸
- [BJRTFX](https://zikbakguru.itch.io/bjrtfx) - ZikのCRTユーティリティシェーダー。
- [bktGlitch](https://odditica.itch.io/bktglitch) - グリッチシェーダー。
- [H O R R I - F I](https://gizmo199.itch.io/horri-fi) - VHSシェーダー。
- [Depth Sorted Silhouettes](https://pixelatedpope.itch.io/depth-sorted-silhouette-example) - シェーダーベースの深さソートシルエットを示す例プロジェクト。PC、Mac、HTML5、Androidでテスト済。
- [GMShaders.com](https://gmshaders.com/) - Xorによるシェーダーチュートリアル。元々は"xorshaders.com"にホストされていた。
- [1PassBlur](https://github.com/XorDev/1PassBlur/wiki) - 調整可能な半径のブラーシェーダー。
- [Bokeh Blur](https://github.com/XorDev/Bokeh/wiki) - 1PassBlurの拡張で、異なる見た目を提供。現実のレンズブラーに似ている。ただし、1PassまたはDual-Kawaseに比べて非常に遅い。
- [Dual-Kawase](https://github.com/XorDev/Dual-Kawase/wiki) - 半径を制限したブラーシェーダーだが、非常に効率的。
- [Xor's Halftone](https://xordev.itch.io/halftone) - 素晴らしい、多様なハーフトーンシェーダー。調整可能な設定がたくさんある。
- [Voronoi](https://github.com/XorDev/GMS-Voronoi-Pixels) - フォローリスト上のピクセルをvoronoi図にサンプリング。
- [Fire-Fun](https://github.com/XorDev/Fire-Fun/wiki) - いくつかの面白い魔法の火球。
- [Jump Flooding](https://terohannula.itch.io/jump-flooding-algorithm) - GMLによるジャンプフローティングアルゴリズムの実装（シェーダーを使用）。
- [Outline Shader](https://github.com/Grisgram/gml-outline-shader-drawer) - シェーダーを使ってスプライトの周囲にアウトラインを描く。
- [Chameleon](https://github.com/Lojemiru/Chameleon) - パレットスワッパー。
- [Xpanda](https://github.com/GameMakerDiscord/Xpanda) - シェーダーに外部ファイルのコードを含める。
- [Shadertoy to GameMaker](https://github.com/jfkn1ght/Shadertoy2GM) - shadertoy.comのシェーダーをGameMaker（GLSL ES）で実行できるように変換。
- [Shader Tutorials](https://www.youtube.com/watch?v=ch4BYqkL1w8&list=PL0kTSdIvQNCNE-BDKOlYu628AalMmXy_P) - ゲーム・リバース。![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Shader Tutorials](https://www.youtube.com/watch?v=a4S7LXx6-sQ&list=PL_hT--4HOvrdkihto8Xu7hhp1-5Gj8zsa) - ドラゴンイトスパム。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)

## 3D <a id="3d"></a>

- [3D-2D](https://github.com/YoYoGames/3D-2D) - 3Dモデルを2Dスプライトに変換する公式ツール.
- [BBMOD](https://github.com/blueburn-cz/BBMOD) - 3Dレンダリングソリューション。OBJファイルのインポート、3Dカメラセットアップ、ColMeshとの統合など、複数のモジュールを備えています.
- [ColMesh](https://forum.gamemaker.io/index.php?threads/colmesh-3d-collisions-made-easy.82765/) - TheSnidrによる3D衝突ライブラリ.
- [BSP 4 GMS](https://cdlegasse.itch.io/ozarq-bsp-4-gms) - GameMakerにBSPファイルをインポート。現在はデモですが、注目すべきです.
- [dotobj](https://github.com/JujuAdams/dotobj) - ネイティブGMLで書かれた軽量OBJ/MTL 3Dモデルローダ.
- [Bronze Box](https://github.com/cicadian/Bronze-Box) - 2Dグリッドから3Dワールドモデルを構築する例.
- [DopeFish Respawned](https://lemontoast-games.itch.io/dopefish-respawned) - DOOMマップをGameMakerにロードするための包括的なWADマネージャ.
- [Blender to GameMaker](https://github.com/blender-to-gmstudio) - ブレンドに連携するモデルのインポート・エクスポート用のスクリプト一式.
- [DmrVBM](https://github.com/Dreamer13sq/DmrVBM-blender-to-gms2) - ブレンドから頂点バッファデータを読み出し、GMSに書き込むためのインポート/エクスポートツール.
- [Penguin](https://dragonite.itch.io/penguin) - 3Dモデル変換ツール.
- [Three Mice In a Trench Coat](https://github.com/XorDev/ThreeMiceInaTrenchcoat) - GameMaker 3Dゲームのソースコード.
- [sPart](https://marketplace.gamemaker.io/assets/7299/spart-3d-particle-system) - TheSnidrによる3Dパーティクルシステム.
- [Terrain Editor](https://dragonite.itch.io/terrain) - 地形をGMモデル、OBJ、または頂点バッファにエクスポートします.
- [Snowy Snow](https://dragonite.itch.io/snowy-snow) - 3D雪シェーダー.
- [Collisions](https://dragonite.itch.io/collisions) - ネイティブGMLと互換性のある3D衝突システム.
- [Bonk](https://github.com/JujuAdams/Bonk) - もう一つの面白い衝突ライブラリで、衝突形状の大部分のケースを処理しています.
- [3D Fragment Point Lights](https://danieldavis.itch.io/ddg-point-light-shader-system) - シェーダーを使用した3Dポイントライト。 💸
- [3D GameMaker Playlist](https://www.youtube.com/watch?v=ojfN--tdSNM&list=PL_hT--4HOvrcML9uqHe4fwBVTm650Vy3V) - ドラゴンイトスパム。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [3D Collisions Playlist](https://www.youtube.com/watch?v=o7kjtTEMpeU&list=PL_hT--4HOvrf_VYo26LNl3zN5uwfuC3CC) - ドラゴンイトスパム。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [3D Optimization Playlist](https://www.youtube.com/watch?v=knfAZbJJKNY&list=PL_hT--4HOvrf_CJSA7fVU1tkjGVv5Sq2t) - ドラゴンイトスパム。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [glTF parser](https://bitbucket.org/tijit/gltf-parser-for-gamemaker-lts/src/main/) - アニメーションをサポートするモデルローダ.
- [GMFlux](https://github.com/Fanatrick/GMFlux) - 高さフィールドによる流体シミュレーションソルバー。

## スプライトスタッキング <a id="sprite-stacking"></a>

- [Beginners Guide to Sprite Stacking](https://medium.com/@avsnoopy/beginners-guide-to-sprite-stacking-in-gamemaker-studio-2-and-magica-voxel-part-1-f7a1394569c0) - avisによるスプライトスタックの基礎解説。dev_dwarfのパート2もご確認ください。
- [Fauxton3D](https://gizmo199.itch.io/fauxton3d) - スプライトスタックエンジン。
- [Sprite Stacking Tutorials](https://www.youtube.com/watch?v=VIDN-nG3EOU&list=PL3Kbpztq9qwT9MbW_k4yyJU__or1r8P2j) - Gizmo199によるチュートリアル。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)

## ネットワーク <a id="networking"></a>

- [Warp](https://github.com/evolutionleo/Warp) - GameMakerとNode.jsで構築された、マルチプレイヤーゲーム向けの機能豊富なフレームワーク。
- [EZ Networking](https://jasontomlee.itch.io/easy-gms-networking-platformer-build) - ホスト/クライアント実装にチャット機能を備えたもの。
- [Patchwire-GM](https://github.com/gm-core/patchwire-gm) - gm-coreから提供されるネットワークライブラリ。gm-core全体を用いずにこの実装を利用する場合にご利用ください。
- [GMHandshake](https://gist.github.com/nkrapivin/c73f5a962466a4ecb63187a009a300d8) - ネットワークハンドシェイクを示すGist。
- [HTTP GML](https://github.com/Sidorakh/http.gml) - GMLでGETリクエストを受け取り、ファイルをアップロードする。
- [GMNest](https://github.com/TimVN/GMNest) - HTML5ゲーム向けのSocket.IO拡張。
- [MultiClient](https://github.com/tabularelf/MultiClient) - DLLなし、複数クライアントをサポートするネットワーク開発用ランチャ。
- [Multiplayer Networking Tutorial](https://www.youtube.com/watch?v=NbsXRuNijlo&list=PLxaJReoxlrY_S4MrCYjzFCSrNX1TUX626) - Wizirdiによるチュートリアル。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Good GameMaker Rollback](https://springrollgames.itch.io/ggmr) - ロールバックネットコードライブラリ。
- [GM Networking](https://github.com/gmclan-org/gm_networking) - 非常にシンプルなネットワークコードのデモンストレーション。
- [Boomers Networking](https://github.com/gmclan-org/gm_boomers_networking) - GMのネイティブ関数を使用して、かつGM:Studio時代に人気だったネットワーク拡張39dllを模倣するネットワークライブラリ。
- [Rocket Networking Engine](https://marketplace.gamemaker.io/assets/11424/rocket-networking-engine) - 簡単な低コードマルチプレイヤーエンジン。

## 統合 <a id="integrations"></a>

- [DHook](https://github.com/tabularelf/DHook) - Discordとの統合。
- [GMS2_RPC](https://github.com/Mtax-Development/GMS2_RPC) - 別のDiscord統合。
- [NekoPresence](https://marketplace.gamemaker.io/assets/9526/nekopresence) - おっと、すべてのDiscord統合。
- [GMHook](https://github.com/Kruger0/GMHook) - Discord統合を非常に好んでいます。
- [Steamworks.gml](https://github.com/YAL-GameMaker/steamworks.gml) - GameMaker: StudioにおけるSteamworks SDKサポートへのさまざまな拡張。
- [Parworks](https://github.com/nkrapivin/Parworks) - YYG Steamworks拡張に追加された機能。
- [GOG.gml](https://github.com/GameMakerDiscord/GOG.gml) - GOG.com SDKサポート用のネイティブ拡張。
- [GMTwitch](https://github.com/GameMakerDiscord/GMTwitch) - Twitch統合
- [Github.gml](https://github.com/AlubJ/GitHub.gml) - GitHub REST API

## カメラ <a id="camera"></a>

- [GameMaker Cameras: As Simple as Possible](https://www.youtube.com/watch?v=_g1LQ6aIJFk) - Pixelated PopeによるGameMakerのカメラシステム解説。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Camera System Guide](https://maddestudiosgames.com/gms2-meet-the-camera-system/) - GameMakerにおけるカメラの初歩
- [Pixel Perfect Smooth Camera](https://github.com/YAL-GameMaker/pixel-perfect-smooth-camera) - ピクセル精度かつスムーズなカメラの例
- [Dynamic Splitscreen](https://maddestudios.itch.io/gms2-project-dynamic-splitscreen) - プレイヤーが近接した場合にカメラを統合するローカルマルチプレイヤーのスプリットスクリーン実装
- [STANNcam](https://github.com/jack27121/STANNcam) - カメラと解像度管理
- [Camera All-In-One](https://jasontomlee.itch.io/allinone-camera) - エディタ、スクリーンシェイク、ビューサイズ調整、フォローモード、スクリーン効果など 💸
- [REZOL](https://foxyofjungle.itch.io/rezol) - 完全な解像度およびスクリーン管理（スプリットスクリーン対応付き） 💸

## シーケンス <a id="sequences"></a>

- [Sequences Tutorial](https://www.youtube.com/watch?v=WO6gzhrx5b8) - シャン・スパルドイン。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Making Splash Screen Sequences](https://www.youtube.com/watch?v=hTh5UpFxx1E) - マッシュ・アーケード。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [DuplicateSequence](https://github.com/KeeVeeGames/DuplicateSequence.gml) - 実行時に編集できるよう、シーケンスアセットや構造体のディープコピーを作成します。

## 状態機械 <a id="state-machines"></a>

- [SnowState](https://github.com/sohomsahaun/SnowState) - 堅牢な有限状態マシン
- [FastSM](https://github.com/JulianDicken/FastSM) - スノーステートへの軽量代替
- [wFSM](https://mors-games.itch.io/wfsm) - 使いやすい別の有限状態マシンライブラリ
- [True State](https://pixelatedpope.itch.io/truestate) - 複雑なオブジェクトを扱うための機能豊かな有限状態マシン
- [Pinocchio](https://github.com/JujuAdams/Pinocchio) - 状態ベースのアニメーションシステム
- [BehaviorTree](https://github.com/Gizmo199/BehaviorTree) - シンプルな行動木システム
- [FSM AI](https://github.com/gmclan-org/FSM-AI-module) - NPCAI用の有限状態マシン

## 経路探索 <a id="pathing"></a>

- [Aquila](https://dragonite.itch.io/aquila) - A*パスファインディング実装
- [A-Star-Pathing](https://github.com/helloalbertdang/A-Star-Pathing) - 別のA*パスファインディング実装
- [Grid-based Pathfinding Scripts](https://proton-squid.itch.io/pathfinding) - 3つの異なるアルゴリズムを備えた柔軟なパスファインディングシステム
- [Pathfinding in graph](https://github.com/gmclan-org/dijkstra-graph) - 重み付きグラフにおける最短経路探索システム（ダイクストラアルゴリズムを使用）
- [PathPlus](https://delfos1.itch.io/pathplus-for-gamemaker/devlog/1115089/pathplus-220-follower-and-spriter) - ゲームメーカーのパスをカーマルロムとベジエ補間で強化

## 便利な追加資料 <a id="useful-extras"></a>

- [Animated Flag](https://github.com/Grisgram/gml-animated-flag) - 頂点アニメーションによるフラグ
- [Danmaku Project](https://github.com/OmegaX1000/DanmakuProject) - バトルヘルエンジン
- [OrbinautFramework](https://github.com/TrianglyRU/OrbinautFramework) - クラシックなソニックゲームを作成するための正確なフレームワーク
- [Mouse Trail Effect](https://all-x.itch.io/gms2-mouse-trail-effect) - プリミティブを使って線を描く方法を示すことでカラフルなトレールを作成
- [Starfield Generator](https://github.com/PixelProphecy/gml_starfield_generator) - ゲームメーカーのGML言語で星のフィールドを生成するスクリプト
- [CleanShapes](https://github.com/JujuAdams/Clean-Shapes) - ゲームメーカー用のアンチエイリアスプリミティブライブラリ
- [GMLScripts.com](https://www.gmlscripts.com/script/index) - 数十の補助スクリプトで、公式ドキュメントと同様に構成されている
- [GM48 Resources](https://gm48.net/resources) - コミュニティから提供される無料リソースでゲームメーカー・ゲーム開発・ゲームジャムをより良くする
- [GameMaker Kitchen](https://www.gamemakerkitchen.com/) - オープンソースのライブラリ、アセット、スニペットに向けた素晴らしいリソース
- [Dracula Theme](https://github.com/dracula/gamemaker-studio) - IDE用のダークテーマ
- [Gruvbox Theme](https://github.com/heygleeson/Gruvbox-GMTheme) - IDE用のレトログルーヴテーマ
- [2.3 Syntax in Detail](https://yal.cc/gamemaker-2-3-syntax-in-details/) - GMLの構文機能・変更についての完全ガイド（Yalによる）
- [GameMaker Garbage Collection](https://gist.github.com/DatZach/96a30d6ae4225f8ec152719e57aed26b) - GMLにおけるガベージコレクションの仕組み
- [GitHub Yacc to GML Fix](https://www.reddit.com/r/gamemaker/comments/n5m35l/a_simple_fix_for_github_incorrectly_detecting/) - GitHubにあなたのリポジトリがGMLであることを通知
- [GameMaker Repo Badges](https://github.com/matthiaszarzecki/MadeWithGameMakerStudioBadges) - READMEファイルに追加できる華やかなバッジ
- [GameMaker Discord Community GitHub](https://github.com/GameMakerDiscord) - ゲームメーカーツールを作成し、共有したいですか？公式DiscordのGitHubに提出を検討してください
- [Source Control with Git & GameMaker](https://www.youtube.com/watch?v=UZG-P68xWio&list=PLSFMekK0JFgzmyDxVxj5Cctafu5UX_vUC) - 親しみやすいコソノアウト。![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Game Resolution & Aspect Ratio Management](https://www.youtube.com/watch?v=_g1LQ6aIJFk&list=PLXkVsacazW2qvdnKNzgBLkUwlgi3FU-VO) - ピクセル化されたポープ。![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Setting up a Virtual Machine for GameMaker](https://www.youtube.com/watch?v=cK5k1_zN4eM) - マイカーテヒーマニアク. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Making Attacks Feel Good](https://www.youtube.com/watch?v=RWkMsD2WUz8) - ブロブフィッシュ。 ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Tome](https://github.com/chesrowe/Tome/) - GameMakerプロジェクトから自動的にドキュメントサイトを生成する機能.
- [Piano example](https://github.com/gmclan-org/piano_example) - 一つのオーディオファイルを使ってピッチを変えて楽器の音を演奏する例.
- [Compatibility scripts](https://github.com/gmclan-org/compatibility-scripts) - GMがGM:S 1.4プロジェクトをインポートする際に使用するスクリプト。実行時ファイルから直接取得した内容.
- [Pause example](https://github.com/gmclan-org/pause_no_surface) - 表面を使わずにシンプルな一時停止画面の例.
- [Build Automation, CI/CD](https://gist.github.com/shichen85/887d237cdc4338fa3f4e4749a14990db) - GitHub ActionsをCI/CDパイプラインとして使い、ゲームのビルドを自動化する方法のチュートリアル。
- [BROKVN](https://cowcat.itch.io/brokvn-engine) - ビジュアルノベルエンジン.
- [AssParser](https://github.com/DecadeDecaf/AssParser) - 動画再生時の字幕サポート.
- [Ultimate Optimization Tier List](https://forum.gamemaker.io/index.php?threads/the-ultimate-gamemaker-optimization-tier-list.122141/) - GameMaker最適化に関する優れたフォーラムスレッド.

## ブログ <a id="blogs"></a>

- [RefresherTowel](https://refreshertowelgames.wordpress.com/category/tutorial/) - レベル生成に関する複数の投稿を含む.
- [Tony Str](https://tonystr.net/) - JSON、正規表現（regex）、GMLでの円の描画に関する素晴らしい記事をいくつか含む.
- [Katsaii](https://www.katsaii.com/content/blog/posts.html) - より高度なGMLトピックに関するいくつかの記事.
- [Meseta on Game Dev](https://meseta.dev/) - 経験豊かなGameMaker開発者がGameMakerの概念やライブラリについて述べた内容.
- [Thoughts On GameMaker](https://github.com/JujuAdams/ThoughtsOnGameMaker) - 伝統的なブログではないが、さまざまなGML技術について素晴らしい情報を提供している.
- [YellowAfterlife](https://yal.cc/category/gm/) - 中級から上級のトピックを扱う複数のチュートリアル。

## YouTube <a id="youtube"></a>

- [Jordan Guillou](https://www.youtube.com/channel/UCBmOLRTaPrfOxnTqpCLrwdQ) - GameMaker関連のチュートリアルをいくつか持つハブリーデベロッパー.
- [DragoniteSpam](https://www.youtube.com/c/DragoniteSpam) - GameMakerの高度な技術要素を扱い、特に3Dに焦点を当てている.
- [Shaun Spalding](https://www.youtube.com/c/ShaunSpalding) - YoYo Gamesの以前のコミュニティマネージャー。初心者向けのGameMakerチュートリアルが多様で、新しいGameMaker機能に関する助けになるアップデートも提供している.
- [FriendlyCosmonaut](https://www.youtube.com/c/FriendlyCosmonaut) - GameMakerでファーミングRPGを構築するための素晴らしいプレイリストと、その他のチュートリアルをいくつか含む。
- [Pixelated Pope](https://www.youtube.com/c/PixelatedPope) - ゲームマーカーの解像度管理、カメラ、GUIなどに関するガイド
- [Xor](https://www.youtube.com/c/XorDev) - 3Dに焦点を当てたシェーダーのデモンストレーションが多数
- [GamingEngineer](https://www.youtube.com/c/GamingEngineer) - コミュニティに長年参加しているゲームマーカー開発者。ゲームマーカーが実現できる可能性を広く紹介する動画が多数あり、特に3Dに焦点を当てている。
- [TheSnidr](https://www.youtube.com/c/TheSnidr) - ゲームマーカー向けの素晴らしい3Dデモンストレーションとチュートリアルが多数。
- [Peyton Burnham](https://www.youtube.com/channel/UCfh2Q3TsvlxM1S2GvXQ4eeQ) - 上向きシューターおよびRPG向けのゲームマーカーチュートリアル。
- [Gaming Reverends](https://www.youtube.com/channel/UC7fkptPD1FHQyDc9Fnm9S_A) - ゲームマーカーのシェーダーに関する基礎知識を学びたいなら、「ハブリープログラマー向けシェーダー」のプレイリストはぜひチェックしてください。
- [Let's Learn This Together](https://www.youtube.com/c/LetsLearnThisTogether) - 小さなインディ開発会社で、ゲームマーカーのガイドを提供することを専門とする。
- [Matharoo](https://www.youtube.com/c/GameMakerStationMatharoo) - 無料のゲームマーカーチュートリアルやゲームマーカーに関する最新情報が多数。
- [GravityShift Games](https://www.youtube.com/c/SlasherXGAMES/) - ジャンルに特化したゲームマーカーチュートリアル、ゲームマーカーにデータベースを統合する方法なども含まれる。
- [Slyddar](https://www.youtube.com/c/Slyddar/) - DnDおよびGMLチュートリアルを専門とするチャンネル。
- [SamSpadeGameDev](https://www.youtube.com/@SamSpadeGameDev) - 初心者向けのコードチュートリアル。
- [gentoo's iceberg Playlist](https://www.youtube.com/playlist?list=PLks6h7R6jAUGrofUAQB178r6K8h43Ml5-) - アイスベイクを基にしたシリーズで、ゲームマーカーにおける高度なプログラミングアイデアを紹介。

## コミュニティ <a id="community"></a>

[![GameMaker Forums](https://img.shields.io/badge/Forums-6AA916?style=for-the-badge&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAZlBMVEX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2BrG8stAAAAIXRSTlMABg0OFBkfcn1%2Bf4CBgoOFhoeIiouWmNDa5ebp8PX2%2B%2F6o6Vq%2BAAAAY0lEQVR42k2OWQ6AIAwFn%2BIOioobrnD%2FS4o0EeanmQxNAdErRFTWtsFq6%2BiiZozz0CSnTjYBwo0RkF8DWDLf51Ni9K%2FYdq0Fy3KAfzk97M7goK1F%2F4rGH9Kk1OlboQtEDIrmC%2BU3CVxTr%2FRMAAAAAElFTkSuQmCC&&logoColor=white)](https://forum.gamemaker.io/index.php)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/r/gamemaker/)
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/gamemaker)

## 謝辞 <a id="special-thanks"></a>

JujuAdams, FaultyFunctions, Gleb Tsereteli, Shaun Spalding, DragoniteSpam, Nick Ver Voort, Pixelated Pope, Tony Strømsnæs, HeartBeast, Xor, Gaming Reverends, Matharoo, YellowAfterlife, Gizmo199, Avis, Josh Wilson, Lojemiru

## 脚注 <a id="footnotes"></a>

- [GameMaker Libraries](https://github.com/FaultyFunctions/GameMakerLibraries)とGleb Tsereteliのリストを基に、リンクと詳細を追加しています。
- GML構文変更のため、リンク先資料の多くは`GameMaker 2.3+`でのみ動作します。GameMaker 1.4向けのバックポートは、多くのライブラリ作者に歓迎されるでしょう。🙂
- より一般的なゲーム開発資料は[Awesome Gamedev](https://github.com/Calinou/awesome-gamedev)または[MagicTools](https://github.com/ellisonleao/magictools)を参照してください。

*GameMaker®はYoYo Games™の所有物です。このリストはYoYo Gamesとは提携していません。*

## コントリビューション <a id="contributing"></a>

共有したい優れた資料がある場合は[コントリビューションガイドライン](https://github.com/bytecauldron/awesome-gamemaker/blob/main/CONTRIBUTING.md)を参照してください。

![Keybindings](https://github.com/bytecauldron/awesome-gamemaker/raw/main/images/keybindings.png)
