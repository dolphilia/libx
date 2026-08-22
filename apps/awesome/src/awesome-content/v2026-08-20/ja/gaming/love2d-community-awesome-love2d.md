---
title: "love2d-community/awesome-love2d"
description: "LÖVEゲーム開発のライブラリ、ツール、教材、配布資源を分類した定本スナップショット"
licenseSource: "github-love2d-community-awesome-love2d-readme-md"
---

# Awesome Löve [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
![Awesome Löve](https://raw.githubusercontent.com/love2d-community/awesome-love2d/fd851a96c81f87964e4c4d6b8906083b5a7a3c36/logo.png)

高品質な[LÖVE](http://love2d.org)ライブラリ、プロジェクト、資料をカテゴリ別にまとめたコミュニティ主導のコレクションです。

## 目次 <a id="contents"></a>

* [3D](#3d)
* [AI](#ai)
* [アニメーション](#animation)
* [カメラ](#camera)
* [開発支援](#development)
* [描画](#drawing)
* [エンティティ](#entity)
* [ヘルパー](#helpers)
* [入力](#input)
* [ライティング](#lighting)
* [数学](#math)
* [音楽](#music)
* [ネットワーク](#networking)
* [オブジェクト指向](#oo)
* [性能](#performance)
* [物理演算](#physics)
* [プラットフォーム](#platforms)
* [シリアライズ](#serialization)
* [シェーダー](#shaders)
* [テスト](#testing)
* [トゥイーン](#tweening)
* [UI](#ui)
* [ユーティリティ](#utilities)
* [チュートリアル](#tutorials)
* [IDE](#ides)
* [配布](#distribution)
* [関連資料](#related)

## 3D <a id="3d"></a>
*3D中心のライブラリ*

* [3DreamEngine](https://github.com/3dreamengine/3DreamEngine) - LÖVE用の素晴らしい3Dエンジン
* [anim9](https://github.com/excessive/anim9) - 3Dの骨格アニメーションライブラリ（IQMおよびIQEと使用するための設計）
* [Brinevector3D](https://github.com/flamendless/brinevector3D) - 3D（x,y,z）用のFFI対応ベクトルライブラリ
* [bump-3dpd](https://github.com/oniietzschan/bump-3dpd) - Lua用の3D衝突検出ライブラリ
* [g3d](https://github.com/groverburger/g3d) - LÖVE用のシンプルで使いやすい3Dエンジン
* [IQE](https://github.com/excessive/iqe) - インターフェース・クエーカー・エクスポートローダー（テキスト）
* [IQM](https://github.com/excessive/iqm-exm) - インターフェース・クエーカー・モデルローダー（バイナリ）
* [love-gltf](https://gitlab.com/Alloyed/love-gltf) - GLTF資産ローダーおよびテストレンダラー；骨格アニメーションとモルフォターゲットをサポート
* [Lovox](https://github.com/Keyslam/Lovox) - voxel処理用の擬似的3Dライブラリ
* [Menori](https://github.com/rozenmad/Menori) - LÖVEで3Dレンダリングを行うためのライブラリ


## AI <a id="ai"></a>
*ナビゲーション、意思決定、AIのライブラリ*

* [astar](https://github.com/xiejiangzhi/astar) - 別のA*ライブラリ。任意のマップ（グリッド、ポイント、メッシュ、または無限マップ）に対応し、経路コストをサポート
* [beehive.lua](https://github.com/drhayes/beehive.lua) - 機能的な行動木実装
* [FluadHTN](https://github.com/Safebox36/OdaiHTN) - AI計画用の強力な階層タスクネットワーク
* [Jumper](https://github.com/Yonaba/Jumper) - グリッドベースの経路探索ライブラリ
* [LÖVElyTrees](https://github.com/Nrosa01/LOVElyTrees) - 完全な行動木実装と木のレンダリングを備えた実装
* [Lua-star](https://github.com/wesleywerner/lua-star) - 簡単で純粋なLuaによるA*経路探索
* [Luafinding](https://github.com/GlorifiedPig/Luafinding) - 純粋にLuaで書かれたクラスベースA*実装
* [pathfun](https://codeberg.org/apicici/pathfun) - ファンネルアルゴリズムを使用した純粋Luaによる2D経路探索ライブラリ

## アニメーション <a id="animation"></a>
*アニメーションとフレーム管理のライブラリ*

* [andross](https://github.com/pfirsich/andross) - Löveバックエンドを持つ2D骨格/ボーンアニメーション用Luaライブラリ
* [anim8](https://github.com/kikito/anim8) - アニメーションライブラリ
* [animx](https://github.com/besnoi/animX) - XMLファイルからアニメーションを読み込むための豊富なアニメーションライブラリ！
* [Aseprite loader](https://github.com/elloramir/love-ase) - 完全なase/asepriteファイルローダー（JSONなし）
* [chiro](https://github.com/bjornbytes/chiro) - スプライト、骨格、フレーム、テキスト等のアニメーションを管理します。 [Spine](http://esotericsoftware.com)
* [lovanim](https://github.com/patrixr/love-animation) - 最小限の状態を持つアニメーションライブラリ
* [Lump](https://github.com/sixFingers/lump) - Adobe Flashアニメーションランタイム
* [Peachy](https://github.com/josh-perry/peachy) - LÖVEにおけるasepriteアニメーションのパーサー／レンダラー
* [skeletor](https://github.com/pelevesque/skeletor) - 2Dの骨格アニメーションシステム
* [SYSL-Text](https://github.com/sysl-dev/SYSL-Text) - タグベースのテキストアニメーションおよび自動改行ライブラリ
* [Walt](https://github.com/davisdude/Walt) - アニメーションライブラリ

## カメラ <a id="camera"></a>
*ビューポートとカメラのライブラリ*

* [Brady](https://github.com/davisdude/Brady) - パララックススクロールをサポートするカメラライブラリ
* [Editgrid](https://github.com/bakpakin/Editgrid) - GameraおよびHUMPと互換性のあるスケーリンググリッド
* [gamera](https://github.com/kikito/gamera) - カメラシステム
* [hump.camera](https://hump.readthedocs.io/en/latest/camera.html) - ウィンドウロックとスムーズなカメラ移動補間をサポートするカメラライブラリ
* [parallax](https://github.com/idbrii/love-parallax) - 任意のカメラシステムに適用可能なスクロールライブラリ；タイル背景画像をシームレスに表示
* [roomshift](https://github.com/mshiplet/roomshift) - ルームベースのカメラとスムーズな遷移

## 開発支援 <a id="development"></a>
*開発体験を向上させる支援ライブラリ*

* [debugGraph](https://github.com/Mechazawa/Love-Debug-Graph) - FPSグラフを描画する小さなオブジェクト指向FPSグラフユーティリティ（FPSGraphベース）
* [FPSGraph](https://github.com/icrawler/FPSGraph) - 小さなFPSグラフユーティリティ
* [LÖVE API](https://github.com/love2d-community/love-api) - LÖVEの完全なAPIドキュメンテーション（Luaテーブル形式）
* [LÖVE Build](https://github.com/nhartland/love-build) - 自動クロスプラットフォームビルドをサポートするGitHubアクション
* [LÖVE TypeScript Definitions](https://github.com/hazzard993/love-typescript-definitions) - TypeScriptでLÖVEゲームを書く
* [Lovebird](https://github.com/rxi/lovebird) - ブラウザベースのデバッグコンソール
* [LoveDebug](https://github.com/flamendless/lovedebug) - インラインコンソールのようなデバッガーツール
* [lovelier](https://github.com/patrixr/lovelier) - Moonscript対応のLÖVEライブリローダー
* [loveprofiler](https://github.com/dknight/loveprofiler) - 非常にシンプルなログとプロファイラー
* [lurker](https://github.com/rxi/lurker) - 実行中のゲームに自動で変更されたLuaファイルを置き換え
* [vudu](https://github.com/deltadaedalus/vudu) - 広範なゲーム中デバッギングGUI（コンソール、変数ブラウザ/エディタ、速度制御など）

## 描画 <a id="drawing"></a>
*描画処理を簡素化するライブラリ*

* [Artal](https://github.com/EvineDev/Artal) - LÖVE用の.PSD解析ライブラリ
* [Autobatch](https://github.com/rxi/autobatch) - スプライトバッチの自動利用を簡易化するLÖVEモジュール
* [center](https://github.com/swalrus1/center) - スクリーンサイズに応じてコンテンツを動的に配置・適合させるシンプルモジュール
* [deep](https://github.com/Nikaoto/deep) - Z軸を追加し、アクションや描画呼び出しをキューできる
* [draft](https://github.com/pelevesque/draft) - 複雑な形状を描画するモジュール
* [Export-TextureAtlas](https://github.com/EngineerSmith/Export-TextureAtlas) - Runtime-TextureAtlasをコマンドラインツールとして拡張し、アタスをエクスポートできる
* [grove.draworder](https://github.com/FloatingBanana/Grove/blob/master/grove/draworder.lua) - deepに似ているが、カスタムソート方法を設定でき、複数のネスト可能なインスタンスを作成可能
* [Hot particles](https://github.com/ReFreezed/HotParticles) - "Hot ParticlesはLÖVEゲームフレームワーク用の粒子エディタです"
* [HSLUV](https://github.com/hsluv/hsluv-lua) - HSLuv（人間が使いやすいHSLの代替）のLua実装
* [Maid64](https://github.com/adekto/maid64) - LÖVE用の低解像度スケーラー
* [Push](https://github.com/Ulydev/push) - LÖ及のシンプルな解像度処理ライブラリ
* [renderplanet](https://github.com/meric/renderplanet/) - 現実的な正交視点の惑星描画
* [Resolution Solution](https://github.com/grif-on/love2d_resolution_solution) - 解像度対応をゲームに簡単に追加できるスケールライブラリ
* [Runtime-TextureAtlas](https://github.com/EngineerSmith/Runtime-TextureAtlas) - 実行時におけるテクスチャアタスのパッキングとレンダリング；外部ツール不要
* [Shöve](https://github.com/Oval-Tutu/shove) - LÖVE用の強力な解像度処理およびレンダリングライブラリ
* [Sölar](https://github.com/JanWerder/soelar) - 比較的シンプルな太陽系シミュレーター
* [svglover](https://github.com/globalcitizen/svglover) - LÖVEにSVGをインポートし表示するためのライブラリ
* [SYSL-Pixel](https://github.com/sysl-dev/Sysl-Pixel) - ピクセルアートに特化したスケーラー。グラフィック、位置、スクリーンキャプチャ、シェーダーに適用。
* [turtle.lua](https://github.com/arthurealike/turtle.lua) - LÖVE用のタートルグラフィックスライブラリ

## エンティティ <a id="entity"></a>
*エンティティとゲームオブジェクト管理ライブラリ*

* [adorbs](https://github.com/JosephShering/adorbs) - 極めてシンプルで機能的なエンティティ・コンポーネント・システム
* [Concord](https://github.com/Keyslam-Group/Concord) - 完全に機能するECSライブラリ
* [ecs-lua](https://github.com/nidorx/ecs-lua) - ECS Luaは、ゲーム開発向けに高速かつ使いやすいECS（エンティティ・コンポーネント・システム）エンジンです
* [evolved.lua](https://github.com/BlackMATov/evolved.lua) - Lua用の進化したECS（エンティティ・コンポーネント・システム）
* [knife.system](https://github.com/airstruck/knife/blob/master/readme/system.md) - 極めてシンプルで機能的なECS
* [nata](https://github.com/tesselode/nata) - OOPとECSを融合したエンティティ管理
* [tiny-ecs](https://github.com/bakpakin/tiny-ecs) - シンプルで柔軟かつ実用的なLua用エンティティ・コンポーネント・システム

## ヘルパー <a id="helpers"></a>
*再利用可能なゲーム向け関数群を提供するライブラリ*

* [astray](https://github.com/SiENcE/astray) - ダンジョンクライマーおよびローグライクゲーム向けのマゼ、ルーム、ダンジョン生成ライブラリ
* [batteries](https://github.com/1bardesign/batteries/) - Luaの標準ライブラリが稀であるため補完し、ゲームに有用なアルゴリズムやデータ構造の実装を提供
* [cartographer](https://github.com/tesselode/cartographer) - 小さなTiledマップローダーと描画ツール
* [clove](https://github.com/besnoi/clove) - 大量のアセットを迅速に読み込むことができるヘルパー・ライブラリ
* [GameStateManager](https://github.com/GwyrddGlas/GameStateManager) - 軽量で最適化され、実装が簡単なゲーム状態管理ソリューション
* [grove.color](https://github.com/FloatingBanana/Grove/blob/master/grove/color.lua) - 'color objects'を使用して色をブレンド、変換、補間
* [hump](https://github.com/HDictus/hump) - LÖVEでゲームを開発するためのツール集（ゲームステート、タイマー/ツイーン、ベクトル、クラス、シグナル、カメラ）
* [iffy](https://github.com/besnoi/iffy) - LÖVE用のスプライトシートおよびタイルセットのヘルパー・ライブラリ
* [knife](https://github.com/airstruck/knife) - Lua用の便利なマイクロモジュールのコレクション（クラス、ステートマシン、バインド、チェーン、コルーチン、イベント、メモライズ、エンティティ、テスト、タイマー）
* [Love dialogue](https://github.com/Miisan-png/Love-Dialogue) - ラブ2D用のシンプルなダイアログライブラリ。ダイアログにカスタムスクリプト言語を備えている。
* [love-state-switcher](https://github.com/nekromoff/love-state-switcher) - Lua LÖVEエンジン用のステートスイッチクラス。
* [lovely-windows](https://github.com/flamendless/lovely-windows) - 仮想ウィンドウを管理するウィンドウ/スクリーンマネージャーのモジュール。
* [lua-state-machine](https://github.com/kyleconroy/lua-state-machine) - Luaの有限状態マシン。
* [lue](https://github.com/Ulydev/lue) - ゲームに色のハーフ効果を表示できるLÖVEライブラリ。
* [lume](https://github.com/rxi/lume/) - ゲーム開発に特化したLua用の関数集。
* [Manami](https://github.com/MikuAuahDark/NPad93/blob/master/manami.lua) - UTF-8対応、多色表示、右揃えをサポートした改良版"reflowprint"。
* [narrator](https://github.com/astrochili/narrator) - インクナラティブスクリプト言語のパーサーと実行環境の実装。
* [prism](https://github.com/PrismRL/prism) - 包括的な伝統的なローグライクエンジン。
* [reflowprint](https://github.com/josefnpat/reflowprint) - 1文字ずつ表示されるテキストの並びを調整するためのライブラリ。
* [roomy](https://github.com/tesselode/roomy) - LÖVE用のスクリーン管理ライブラリ。
* [rotLove](https://github.com/paulofmandown/rotLove) - LÖVE用のローグライクツールキット。rot.jsのLÖVE/lua版。
* [SceneMan](https://github.com/KINGTUT10101/SceneMan) - スタックを使用するシンプルで強力なシーン/ゲームステートマネージャー。複数のシーンを同時に実行可能。
* [Scenery](https://github.com/paltze/scenery) - 極めてシンプルなシーン/ステート管理システム。
* [ScreenManager](https://github.com/rm-code/screenmanager) - LÖVEフレームワーク用のスクリーン/ステート管理。
* [shack](https://github.com/Ulydev/shack) - LÖ便ライブラリで、揺れや回転などのスクリーン効果を簡単に追加できる。
* [shard](https://github.com/MineGame159/shard) - 便利なミニモジュールのコレクション。
* [Simple Tiled Implementation](https://github.com/karai17/Simple-Tiled-Implementation) - Tiledマップのローダーとレンダラー。
* [Vivid](https://github.com/WetDesertRock/vivid) - 色の数学、操作、変換ライブラリ。

## 入力 <a id="input"></a>
*入力と操作割当のライブラリ*

* [baton](https://github.com/tesselode/baton) - キーボードとゲームパッドの制御を橋渡しするLÖVE用の入力ライブラリ。
* [GamepadGuesser](https://github.com/idbrii/love-gamepadguesser) - ゲームパッド用の正しいボタンアイコンを取得し、更新されたゲームパッドDBを読み込みます
* [input](https://github.com/xiejiangzhi/input) - シンプルで強力な入力ライブラリ。操作時間や順序の確認をサポートします
* [Kazari](https://github.com/MikuAuahDark/Kazari) - マルチタッチジェスチャーおよび入力ライブラリ
* [love-microphone](https://github.com/LPGhatguy/love-microphone) - LÖVE用のシンプルなマイクサポート
* [LoveKeys](https://github.com/SpaceCat-Chan/LoveKeys) - あなたに状態を追跡してくれるシンプルな入力処理ライブラリ
* [Swipe](https://github.com/zombrodo/swipe) - シンプルな円形キーボードライブラリ
* [tactile](https://github.com/tesselode/tactile) - シンプルで柔軟な入力ライブラリ

## ライティング <a id="lighting"></a>
*ライティングと影のライブラリ*

* [bitumbra](https://github.com/a13X-B/bitumbra) - GPUで加速された多数のライトによる2Dシャドウ
* [Light](https://github.com/xiejiangzhi/light) - シンプルな動的ライト実装
* [Light World](https://github.com/tanema/light_world.lua) - ライトモデル
* [lighter](https://github.com/speakk/lighter) - パフォーマンスの高い動的ライト実装（シンプルなAPI）
* [Shädows](https://github.com/matiasah/shadows) - LÖVE用のシャドウ＆ライトエンジン
* [Simple Love Lights](https://github.com/dylhunn/simple-love-lights) - 非常にシンプルなレーザー投射によるライト実装

## 数学 <a id="math"></a>
*数学処理のライブラリ*

* [Bresenham](https://github.com/rm-code/Bresenham) - Luaで書かれたブレセンハムの線アルゴリズム
* [brinevector](https://github.com/novemberisms/brinevector) - パフォーマンスに優れたスタンドアローン軽量luajit ffi加速2Dベクトルライブラリ
* [Cirno's Perfect Math Library](https://github.com/excessive/cpml) - ゲーム用に設計された数学・交差検出ライブラド
* [delaunay](https://github.com/Yonaba/delaunay) - 凸多角形用の三角化ライブラリ
* [hump.vector](https://hump.readthedocs.io/en/latest/vector.html) - 強力な2Dベクトルクラス
* [loaded_dice](https://github.com/a13X-B/loaded_dice) - ウォーカー・ヴォスのアリアメソッド実装（ダイスのようなRNG）：報酬テーブルなどに活用できます
* [MLib](https://github.com/davisdude/mlib) - Luaで書かれた数学および形状交差検出ライブラリ。堅牢で使いやすいことを目的としています
* [nvec](https://github.com/MikuAuahDark/NPad93/blob/master/nvec.lua) - Hump.vectorに互換性のあるLuaJITでFFIが加速された2Dベクトルライブラリ。
* [polysec](https://github.com/dknight/polysec) - 多角形および矩形の交差検出に適した高速かつ軽量のライブラリ.
* [shash](https://github.com/rxi/shash) - Lua用のシンプルで軽量な空間ハッシュ.
* [vector.lua](https://github.com/automattf/vector.lua) - ProcessingのPVectorクラスに基づいたシンプルなベクトルライブラリ.
* [Vornmath](https://github.com/DUznanski/vornmath) - Lua用の最も包括的な小さなベクトル・マトリクス、複素数、クォータニオンライブラリ.

## 音楽 <a id="music"></a>
*音楽関連ライブラリ*

* [denver](https://github.com/superzazu/denver.lua) - Löve用のカスタム波形生成ライブラリ.
* [lovebpm](https://github.com/rxi/lovebpm) - LÖVE用のオーディオトラックのBPMにイベントを同期するライブラリ.
* [ripple](https://github.com/tesselode/ripple) - タグ対応のオーディオマネージャ.
* [wave](https://github.com/Ulydev/wave) - オーディオパースングとリズム機能を備えたサウンドマネージャ.
* [Lua-Opus](https://github.com/GwyrddGlas/Lua-Opus) - キュー可能な再生とPCM統合をサポートするOgg Opusオーディオファイルのストリーミングとデコードモジュール.

## ネットワーク <a id="networking"></a>
*ネットワークとオンラインプレイのライブラリ*

* [fetch-lua](https://github.com/elloramir/fetch-lua) - luajitのみで構成されたHTTPS/HTTPリクエストライブラリ.
* [Grease](https://github.com/bartbes/love-misc-libs/tree/master/grease) - ネットワーク通信をLovers（TCP、UDP、Enet）にとって簡単にするためのネットワークライブラリ。（IPv6）
* [löve-ws](https://github.com/holywyvern/love-ws) - WebSocketクライアントおよびサーバー用ライブラリ.
* [love2d-lua-websocket](https://github.com/flaribbit/love2d-lua-websocket) - シンプルなイベント駆動型WebSocketクライアントライブラリ。（IPv4）
* [LoverNet](https://github.com/josefnpat/LoverNet) - bitserおよびenetを活用したネットワークライブラリ。（IPv4）
* [NoobHub](https://github.com/Overtorment/NoobHub) - オープンソースのマルチプレイヤーおよびネットワークメッセージング。（IPv6）
* [Sock.lua](https://github.com/camchenry/sock.lua) - LÖVEゲーム用のLuaネットワークライブラリ。（IPv4）

## オブジェクト指向 <a id="oo"></a>
*[Class-Commons](https://github.com/bartbes/Class-Commons)に対応するオブジェクト指向ライブラリ*

* [30log](https://github.com/Yonaba/30log) - Luaにおけるオブジェクト指向のミニマライズされたフレームワーク。名前付き（および名前無し）クラス、単一継承、およびミックスインの基本的なサポートを備えている。
* [classic](https://github.com/rxi/classic/) - Lua用の小さなクラスモジュール。無駄な過剰抽象化を避け、シンプルさと良好なパフォーマンスを維持しようとする。
* [hump.class](https://hump.readthedocs.io/en/latest/class.html) - 小さな、高速なクラス/プロトタイプ実装。複数継承（クラス・コモン）をサポート。
* [knife.base](https://github.com/airstruck/knife/blob/master/readme/base.md) - 極めて最小のベースクラスを提供し、単一継承とコンストラクタをサポートする。
* [LowerClass](https://github.com/DevonPalma/LowerClass) - MiddleClassをインスピレーションとして設計された拡張機能を備えたライブラリ。
* [middleclass](https://github.com/kikito/middleclass) - Lua用のシンプルなオブジェクト指向ライブラリ；継承、メタメソッド（演算子）、クラス変数、弱いミックスインサポート（クラス-コモンス）を備える。
* [muun](https://github.com/megagrump/muun) - Moonscriptと互換性のあるクラス実装。
* [Object-Library](https://github.com/Virus01Official/Object-Library) - ObjectLibraryはLÖVE2Dゲームエンジン向けのシンプルなライブラリで、衝突検出とオプションのテクスチャを持つオブジェクトを作成できる。
* [selene](https://github.com/novafacing/selene) - Moonscriptでゲームを書くためのプロジェクトテンプレート。Luaのプレコンパイルなしで使用可能。

## 性能 <a id="performance"></a>
*性能測定ツール*

* [AppleCake](https://github.com/EngineerSmith/AppleCake) - LÖVE向けの詳細なプロファイリングとスレッドサポートを備えたプロファイリングライブラリ。
* [jprof](https://github.com/pfirsich/jprof) - LÖVE向けのプロファイリングライブラド/ツール。
* [Piefiller](https://github.com/Polynominal/Piefiller) - LÖVE向けのグラフィカルプロファイリングツール。

## 物理演算 <a id="physics"></a>
*衝突判定と物理演算のラッパー*

* [breezefield](https://github.com/HDictus/breezefield) - 軽量で使いやすいlove.physicsのラッパー（風場代替）。
* [Bump](https://github.com/kikito/bump.lua) - Lua用の衝突検出ライブラリ。
* [HC](https://hc.readthedocs.io/en/latest/) - 任意の多角形による衝突検出を可能にし、オブジェクトの回転を許容。
* [loveblobs](https://github.com/zhangf911/loveblobs) - 動的および静的任意のソフトボディをサポートするソフトボディライブラリ。
* [slick](https://github.com/erinmaus/slick/) - bump.luaをインスピレーションとして作った、使いやすい多角形衝突検出ライブラリ。
* [Strike](https://github.com/Aweptimum/Strike) - 2D衝突検出ライブラリ。可拡張であり、分離軸定理に基づく。

## プラットフォーム <a id="platforms"></a>
*LÖVEが公式対応しないプラットフォーム向け移植*

* [LÖVE Potion](https://github.com/lovebrew/lovepotion) - Nintendo（3DS、Switch、Wii U）向けのLÖVEの非公式実装（ホームブリュー）。
* [LOVE-WrapLua](https://github.com/LukeZGD/LOVE-WrapLua) - OneLua、lpp-vita、Lua Player PS3向けの小さなシンプルなラッパー。
* [lovejs-player](https://codeberg.org/alexjgriffith/lovejs-player) - Emscriptenを使用してWebにLÖVEを移植したもの。
* [LoveDos](https://github.com/rxi/lovedos) - 2D DOSゲーム向けのLuaフレームワーク。LÖVE APIの一部を実装。
* [LoveFTW](https://bitbucket.org/T-BoneISS/l-veftw) - Windows Phone 8.1向けの未完成の移植。
* [LÖVR](https://github.com/bjornbytes/lovr) - LÖVE用の仮想現実デバイス向けのサポート
* [Lutro](https://lutro.libretro.com/) - リトロゲーム向けにLÖVE APIの一部を実装した、RetroArchで多数のプラットフォームで実行可能なポータブルゲームエンジン

## シリアライズ <a id="serialization"></a>
*ゲーム保存とストレージのライブラリ*

* [arson](https://github.com/flamendless/arson.lua) - json.luaでエンコード・デコードできるカスタムデータ型を登録するための補助ライブラリ
* [binser](https://github.com/bakpakin/binser) - カスタマイズ可能なLuaシリアライザ
* [bitser](https://github.com/gvx/bitser) - LuaJITを使用してLua値をシリアライズおよびデシリアライズ
* [cdata](https://github.com/excessive/cdata) - LuaJITのFFIを使ってLuaデータとCデータの間をシリアライズ
* [knife.serialize](https://github.com/airstruck/knife/blob/master/readme/serialize.md) - Luaスクリプトとしてデータをシリアライズ
* [Lady](https://github.com/gvx/Lady) - セーブゲームの保存と読み込み；Serに基づく
* [moonblob](https://github.com/megagrump/moonblob) - バイナリシリアライズとデータパーソーリングライブラリ
* [Ser](https://github.com/gvx/Ser) - Lua用の高速かつ堅牢で豊富なテーブルシリアライズライブラリ
* [Smallfolk](https://github.com/gvx/Smallfolk) - Lua用の高速かつ堅牢で安全で豊富なテーブ及シリアライズライブラリ
* [trickle](https://github.com/bjornbytes/trickle) - ネットワーク用途に特化した高圧縮を目的としたビットストリームライブラリ

## シェーダー <a id="shaders"></a>
*GLSL関連ライブラリ*

* [LoveShaderConverter](https://github.com/tsteinholz/LoveShaderConverter) - ShadertoyのシェーダーファイルをLÖVE GLSLファイルに変換するための便利なユーティリティを備えたツール
* [Moonshine](https://github.com/vrld/moonshine) - ブレード、ヴィンテージ、カラーグレードなど、一般的なポストプロセス効果を収録したリポジトリ
* [ngrading](https://github.com/MikuAuahDark/NPad93/tree/master/ngrading) - シンプルなカラーグレードライブラリ
* [ShaderScan](https://github.com/idbrii/love-shaderscan) - ホットリロード、インクルード、より良いエラーメッセージを追加し、シェーダーの反復開発を加速

## テスト <a id="testing"></a>
*単体テスト用ライブラリ・ツール*

* [busted](https://github.com/lunarmodules/busted) - カスタマイズ可能なアサートを備えたシンプルなユニットテストフレームワーク
* [knife.test](https://github.com/airstruck/knife/blob/master/readme/test.md) - フィクスチャなしテストフレームワーク
* [Luassert](https://github.com/lunarmodules/luassert) - Lua・LÖVEコードの単体テスト、モック、検証を支援します。 `assert()`
* [Lunatest](https://github.com/silentbicycle/lunatest) - xUnitスタイルのランダム化ユニットテストフレームワーク
* [lust](https://github.com/bjornbytes/lust) - 最小限のテストフレームワーク
* [Specl](http://gvvaughan.github.io/specl/) - 行動駆動開発（BDD）ツール
* [Telescope](http://norman.github.io/telescope/) - 高度にカスタマイズ可能なBDDスタイルのテストライブラリ

## トゥイーン <a id="tweening"></a>
*補間とタイマーのライブラリ*

* [Flux](https://github.com/rxi/flux) - Lua用の高速かつ軽量なTweeningライブラリ
* [hump.timer](https://hump.readthedocs.io/en/latest/timer.html) - 柔軟なTweening機能を備えたタイマーとTweeningライブラリ
* [knife.timer](https://github.com/airstruck/knife/blob/master/readme/timer.md) - タイマーとTweeningを簡単に作成
* [NAniTe](https://github.com/MikuAuahDark/NPad93/blob/master/nanite.lua) - 前進および後退更新をサポートするタイムラインベースのアニメーションシステム
* [tick](https://github.com/rxi/tick) - 関数呼び出しを遅延させるためのLuaモジュール
* [tween.lua](https://github.com/kikito/tween.lua) - jQueryのanimateメソッドを参考にしたLua用のTweening/エイジング/補間関数

## UI <a id="ui"></a>
*ユーザーインターフェースライブラリ*

* [Badar 🌕](https://github.com/Nabeel20/Badr) - 簡単な**カスタムUI構文**でコンポーネントの組み立てを容易に
* [CatUI](https://github.com/wilhantian/catui) - LÖVE用の非常に軽量なGUIライブラリ
* [cimgui-love](https://codeberg.org/apicici/cimgui-love) - LÖVEにDear ImGuiをcimgui（プログラム生成C-API）でラップしたLuaJIT FFIによるモジュール。最新版Dear ImGuiへのアップデートが容易
* [FlexLöve](https://github.com/mikefreno/FlexLove) - 完全機能を備えたGUIライブラリ。flexbox/grid/absoluteレイアウト、即時モードおよび保持モード、9patchテーマ、高度なイベントサポートをサポート
* [GOOi](https://github.com/gustavostuff/gooi) - Android向けGUIライブラリ
* [Hanker](https://gitlab.com/Alloyed/hanker) - 極めて最大限の即時モード風UI要素。ゲームパッド対応
* [Helium](https://github.com/qeffects/helium) - 現代的でカスタマイズ可能かつ高性能な保持モードUIフレームワーク
* [Inky](https://github.com/Keyslam/Inky) - 用途に応じたGUIフレームワーク
* [Layouter](https://github.com/nekromoff/layouter) - LÖVE 2Dゲームエンジン用のシンプルな**UIグリッドレイアウト**ライブラリ
* [ListBox](https://github.com/darkmetalic/ListBox) - タッチ、マウス、キーボード入力に対応するLÖVE用の動的ListBox
* [Love Imgui](https://github.com/slages/love-imgui) - LÖVEゲームエンジン用のImguiモジュール
* [Löve-Nuklear](https://github.com/keharriso/love-nuklear) - LÖTVEゲーム用の軽量即時モードGUI
* [LoveFrames Fork](https://github.com/linux-man/LoveFrames) - 11.2 GUIライブラリのフォーク
* [LOVELi](https://github.com/mtanksl/LOVELi) - .NETのMAUIコントロールをインスピレーションとして、StackLayout、AbsoluteLayout、Grid、Label、Button、Image、CheckBox、RadioButton、Switch、ProgressBar、Slider、TextBoxおよびBorderを含む保持モードレイアウトとGUIライブラリ
* [Lovely Toasts](https://codeberg.org/togfox/Lovely-Toasts) - テキストを自由に選択できる浮遊するスピーチバブル
* [lovepatch](https://github.com/notcl4y14/lovepatch) - LÖVE用のシンプルな9パッチライブラリ
* [lovr-ui2d](https://github.com/immortalx74/lovr-ui2d) - LÖVRおよびLÖVE用の即時モードGUIライブラリ
* [LuaJIT-ImGui](https://github.com/sonoro1234/LuaJIT-ImGui) - Dear ImGuiにLuaJITバインディングを備えたLÖVEモジュール；cpp名を使用することで、すべてのcimguiウィジェットを簡単に例コードにコピー可能
* [Luis](https://github.com/SiENcE/luis) - Love UI System - LÖVE用の保持モードUIフレームワーク。マウス、キーボード、タッチ、ゲームパッドの入力処理、レイヤー、グリッド、状態、テーマシステム、UIエディタ、16以上のウィジェット（デスクトップおよびモバイル用）
* [Lynx](https://gitlab.com/TSnake41/lynx) - 非常に軽量なリストベースUIライブラリ
* [MeowUI](https://github.com/MoonGameLab/MeowUI) - MoonScriptで記述された拡張可能なライブラリ。Löve2Dの提供されたコアモジュールに基づき、自作GUIコントロールを作成可能
* [NLay](https://github.com/MikuAuahDark/NPad93#nlay) - 柔軟なレイアウトライブラリ
* [Patchy](https://github.com/excessive/patchy) - 9パッチライブラリ
* [Plan](https://github.com/zombrodo/plan) - 非常にシンプルなルールベースレイアウトライブラリ
* [Polywell](https://gitlab.com/technomancy/polywell) - Luaで記述された、非常に高度にカスタマイズ可能なテキストエディタ／コーディングツール。LÖVEゲームエンジン上で動作
* [ProdUI](https://github.com/frank-f-trafton/prod_ui_wip) - LÖVEフレームワーク用のユーザーインターフェースライブラリ
* [SafeWord](https://github.com/josefnpat/safeword) - LÖVE用のオーバースキャン検出ライブラリ
* [Slab](https://github.com/flamendless/Slab) - LÖVEフレームワーク用の即時モードGUIツールキット
* [Slicy](https://github.com/wqferr/slicy) - Patchyの問題を修正した新しい9パッチ／9スライスライブラリ
* [SUIT](https://github.com/vrld/SUIT) - 小さな即時モードGUIライブラリ
* [TuxRedux](https://github.com/KINGTUT10101/TuxRedux) - SUITをインスピレーションとして、LOVE2D用の即時モードUIシステム
* [YALG](https://github.com/sasszem/yalg) - 非常にシンプルで、プラットフォームを越えて使える反応型UI（最終的なUI用）

## ユーティリティ <a id="utilities"></a>
*ゲーム固有ではないライブラリ・ツール*

* [andromeda](https://github.com/itzKiwiSky/Andromeda) - LÖVE用の資産データベースとローダー
* [ArrayRotation](https://gist.github.com/rm-code/4118d4a97d8cde16952199d94b84ead0) - 2次元配列（正方形および非正方形）の回転
* [bar128-love](https://github.com/Nawias/bar128-love) - LÖVE用のバーコード描画ライブラリ
* [cargo](https://github.com/bjornbytes/cargo) - 資産マネージャー
* [chance.lua](http://ejmr.github.io/chance.lua/) - ランダムデータ生成用のライブラリ
* [colorchanger](https://github.com/santoslove/colorchanger) - LÖVEゲーム内の色を変更
* [Flirt](https://github.com/Alloyed/flirt) - LÖVEバージョンマネージャー；同一マシン上で複数バージョンのエンジンを切り替え可能
* [GifCat](https://github.com/WetDesertRock/GifCat) - LÖVEからGIFを保存するためのシンプルなモジュール
* [hex2color](https://github.com/swalrus1/hex2color) - HEX色値を使用するための1つの関数
* [i18n](https://github.com/excessive/i18n) - ゲームのローカライズを支援するための国際化ライブラリ
* [Ini Parser](https://github.com/nobytesgiven/ini_parser) - 一般用途のini設定パーサー
* [KeyedArray](https://github.com/KINGTUT10101/KeyedArray) - アイテムを位置またはキーで検索できる特別なデータ構造。順序付き辞書に似ている
* [L5](https://l5lua.org/) - Processing / p5.jsをLuaに移植した軽量な創造的コーディングライブラリ
* [Lily](https://github.com/MikuAuahDark/lily) - 非同期資産ローダー
* [log.lua](https://github.com/rxi/log.lua) - 設定可能なログ出力用のライブラリ
* [love-loader](https://github.com/kikito/love-loader) - スレッドによるリソースロード
* [love-pe](https://github.com/Rami-Sabbagh/love-pe) - LÖVE自体のアイコンを変更するためのLÖ及のツール
* [love-qrcode](https://github.com/Nawias/love-qrcode) - LÖVE用のQRコード描画ライブラリ
* [love2d-assets-loader](https://github.com/Yonaba/love2d-assets-loader) - 資産ローダー
* [lovely-engine](https://github.com/vinnyhorgan/lovely-engine) - LÖVEの設定と使用を簡単にするツールで、Moonscript対応
* [LuaRequireExtended](https://github.com/KINGTUT10101/LuaRequireExtended) - 入力パラメータと複数出力値を持つファイルをrequireできるLuaモジュール
* [luasteam](https://github.com/uspgamedev/luasteam) - Steamworks API向けのLuaバインディング
* [Luvent](https://github.com/ejmr/Luvent) - シンプルなイベント駆動プログラミング
* [nativefiledialog](https://github.com/Alloyed/nativefiledialog/tree/master/lua) - Windows/Mac/Linuxでのファイル選択ダイアログを開く
* [nativefs](https://github.com/EngineerSmith/nativefs) - LÖVEが許可するパス外のファイルの読み書き
* [particle-system-playground](https://github.com/santoslove/particle-system-playground) - LÖVE用の基本的な粒子システムエディタ
* [ParticleEditor](https://github.com/MusouCrow/ParticleEditor) - LÖVE用の粒子エディタ
* [require.lua](https://github.com/premek/require.lua) - フォルダ内のすべてのファイルをrequireする
* [servelove](https://github.com/YellowButShort/servelove/) - LÖVE上で動作するウェブサーバーライブラリ
* [ShakeDetectorLua](https://github.com/azoyan/ShakeDetectorLua) - Luaで書かれた振動検出用の加速度センサデータ利用
* [smiti18n](https://github.com/Oval-Tutu/smiti18n) - LÖVE対応の非常に完全なLua向け国際化ライブラリ
* [splashy](https://github.com/videah/splashy) - スプラッシュスクリーンライブラリ
* [text2.love](https://git.sr.ht/~akkartik/text2.love) - プロセス（コード以外）向けのフル機能テキストエディタ
* [tick](https://github.com/bjornbytes/tick) - LÖVEのループ内で使えるタイミング調整
* [LUA-SNG-Parser](https://github.com/GwyrddGlas/LUA-SNG-Parser) - カスタム.sng形式の音楽パッケージファイルをパース・抽出するLuaライブラリ。メタデータ読み込み、ファイルリスト表示、一括抽出をサポート。リズムゲームや音声ベースプロジェクトに最適

## チュートリアル <a id="tutorials"></a>
*ブログとチュートリアル*

* [Building love2d games for the web with love.js and Docker](https://kalis.me/building-love2d-games-web-docker/) - LÖVEゲームをウェブ上でパッケージ化するためのチュートリアル
* [CS50 Introduction to Game Development](https://cs50.harvard.edu/games/) - ハーバード大学CS50オープンコースウェア
* [How to LÖVE](https://sheepolution.com/learn/book/contents) - SheepolutionによるLÖVEからゼロから学ぶ書籍
* [learn2love](https://rvagamejams.com/learn2love/) - LuaとLÖVEを使ったプログラミング学習用の書籍（バージョン11.0以降）
* [Simple Game Tutorials](https://simplegametutorials.github.io/) - LÖVEで簡単なゲーム（スネーク、ソコバーン、テトラス、など）を作成するためのチュートリアル
* [Tutorial on making an Arkanoid-type game](https://github.com/noooway/love2d_arkanoid_tutorial/wiki) - nooowaay によるブレイクアウトクローンを作成するための完全なチュートリアル
* [Using Tiled Maps in LÖVE (archived)](https://web.archive.org/web/20230314215611/http://lua.space/gamedev/using-tiled-maps-in-love) - Tiled で作成したマップを LÖVE ゲームに活用する方法についての記事

## IDE <a id="ides"></a>
*統合開発環境とテキストエディター向けプラグイン*

* [Brackets](https://brackets.io/) - Adobe による現代的なオープンソーステキストエディタ（廃止）
	* [Lua Syntax Highlighter](https://github.com/ForbesLindesay/brackets-language-extensions) - Brackets に Lua の文法ハイライトを追加
	* [LÖVE Hints for Brackets.io](https://gitlab.com/sdonalcreative/brackets-love-hints/) - LÖVE のコードヒントを提供
	* [Run LÖVE](https://github.com/instilledbee/run-love2d) - ホットキーで LÖVE プロジェクトを起動
* [ZeroBrane Studio](https://studio.zerobrane.com/) - コード補完、文法ハイライト、リアルタイムコーディング、コード分析、デバッグをサポートする軽量な Lua IDE
	* [API Syntax Hightlight](https://github.com/flamendless/LOVE-API-Extractor-for-ZeroBraneStudio) - ZBS に LOVE API の文法ハイライトを追加するスクリプト
* [IntelliJ IDEA](https://www.jetbrains.com/idea/) - 機能的で効率的な Java IDE
	* [EmmyLua](https://github.com/EmmyLua/VSCode-EmmyLua) - VSCode 用の Lua IDE/デバッガープラグイン
	* [LÖVE IDEA](https://github.com/rm-code/love-IDEA-plugin) - IntelliJ-IDEA にスニペットとコード補完を提供
* [Vim](https://www.vim.org/) - どんな種類のテキストでも作成・変更を非常に効率的に行える、高度にカスタマイズ可能なテキストエディタ
	* [Vim LOVE Docs](https://github.com/davisdude/vim-love-docs) - Vim での文法ハイライト
* [Notepad++](https://notepad-plus-plus.org) - 複数の言語をサポートする無料ソースコードエディタおよび Notepad の代替品
	* [LÖVE API for Notepad++](https://github.com/dail8859/love-api-npp) - Notepad++ へのコード補完とドキュメンテーション
* [Visual Studio Code](https://code.visualstudio.com/) - VS Code は、コードエディタのシンプルさと開発者が必要とする編集・ビルド・デバッグサイクルを組み合わせた新しいタイプのツール
	* [Local Lua Debugger](https://marketplace.visualstudio.com/items?itemName=tomblind.local-lua-debugger-vscode) - 依存関係のないシンプルな Lua デバッガー。Löve 用の launch.json の例が提供されている
	* [Lua for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=trixnz.vscode-lua) - VSCode で Lua に Intellisense とLintingを提供
	* [Lua Language Server](https://marketplace.visualstudio.com/items?itemName=sumneko.lua) - 開発を簡単かつ迅速にし、LÖVE のコード補完とドキュメンテーションを含む、Lua 用のさまざまな機能
	* [Visual Studio Code LÖVE Launcher](https://marketplace.visualstudio.com/items?itemName=JanW.love-launcher) - Visual Studio Code 用の Löve ランチャー拡張
* [Sublime Text](https://www.sublimetext.com) - コード、マーカップ、プロセス用の高度なテキストエディタ。スムーズなユーザーインターフェース、優れた機能、驚異的なパフォーマンスをお楽しみください。
	* [Package Manager](https://packagecontrol.io/) - Sublime Textのパッケージマネージャーで、パッケージの検索、インストール、アップデートを非常に簡単に行えます。
	* [SublimeLove](https://packagecontrol.io/packages/SublimeLove) - 文法ハイライト、自動補完、ビルドシステムをサポートしています。
	* [SublimeLinter-luacheck](https://packagecontrol.io/packages/SublimeLinter-luacheck) - あなたのLuaコードに対するリントおよび静的解析を提供します。
* [Pulsar](https://pulsar-edit.dev/) - Atom（廃止）に基づくカスタマイズ可能なテキストエディタ。サポートと自動補完は良好ですが、現在はエラーハイライトが不足しています。
	* [autocomplete-love](https://github.com/rameshvarun/autocomplete-love) - LÖVE用の自動補完とスニペット。
	* [love-ide](https://github.com/rameshvarun/love-ide) - PulsarでLove2Dゲームを書くために、複数のユーティリティを自動インストールします。
	* [language-lua](https://github.com/FireZenk/language-lua) - luaファイルに文法ハイライトとスニペットを追加します。
	* [atom-autocomplete-lua](https://github.com/dapetcu21/atom-autocomplete-lua) - Lua用の自動補完。
* [Zed](https://zed.dev) - 高パフォーマンスの協働を目的とした次世代コードエディタ。Rustで構築されています。
	* [love2z](https://github.com/alejandro-alzate/love2z) - AlejandroのZed向けベータタイプヒント。
	* [love2d](https://github.com/LuaCATS/love2d) - Lua言語サーバー向けのLuaCATSタイプヒント。
 	* [Lua extension](https://zed.dev/extensions/lua) - LÖVE・Luaの編集、補完、デバッグ、実行を支援するIDE・拡張機能です。 [Lua Language Support page](https://zed.dev/docs/languages/lua)
* [Love2D WebIDE](https://love.ivie.codes/) - Love2Dゲームを書くための完全にウェブベースのIDE。


## 配布 <a id="distribution"></a>
*LÖVEゲーム配布用のツール・テンプレート*
* [AppImageKit](https://github.com/AppImage/AppImageKit) - AppImageKitを使用することで、LÖVEゲームをRHEL、CentOS、Ubuntu、Fedora、Debianおよびその派生版といった一般的なLinuxベースのオペレーティングシステム上で実行可能なAppImageにパッケージ化できます。1ゲーム＝1ファイル。
* [boon](https://github.com/camchenry/boon) - マルチプラットフォームで使いやすいツール。Windows、macOS、Linuxをサポートしています。
* [LÖVE Actions](https://github.com/love-actions) - Android、iOS、Linux、macOS、Windowsのすべての主要プラットフォームでクロスプラットフォームゲームパッケージのビルドとデプロイをサポートしています。
* [LÖVE Game Development & Automated Build System](https://github.com/Oval-Tutu/bootstrap-love2d-project) - 事前設定されたVSCode/Codium。Android、iOS、HTML5、Linux、macOS、Windows向けにビルドし、自動的にItch.ioに公開します。
* [love-build](https://github.com/ellraiser/love-build) - LÖVEで作成されたダウンロード可能なアプリケーション（LÖVEで作成！）で、あなたのOSにかかわらずWindows、macOS、Linux向けのゲームをビルドできます。
* [love-deploy](https://github.com/tducasse/love-deploy) - itch.io上でゲームをビルドおよびデプロイ（Windowsおよびウェブエクスポートをサポート）。
* [love-export](https://github.com/dmoa/love-export) - Windows、macOS、Linux向けにバイナリをビルドするための高速かつシンプルなコマンドラインツール。
* [love-fuser](https://github.com/MikuAuahDark/love-fuser) - GitHub Actions を使って LÖVE ゲームをパッケージ化。Windows、Linux、Android をサポート。
* [love-packager](https://github.com/simplifylabs/love-packager) - LÖVE ゲームを数秒でパッケージ化できるシンプルな CLI。
* [love-release](https://github.com/MisterDA/love-release) - Lua スクリプトによるゲーム配布自動化ツール。Windows、macOS、Debian、Linux をサポート。
* [Love-Snap-Template](https://github.com/popey/love-snap-template) - Snappy Store での LÖVE ゲーム配布用のパッケージテンプレート。
* [lover](https://github.com/Wolfyxon/lover) - LÖVEゲームのビルド、パッケージ化、配布を支援するツール・テンプレートです。 `Cargo`
* [lovesfx](https://github.com/tpimh/lovesfx) - Windows 用の LÖVE ゲームを1ファイルにまとめる。
* [makelove](https://github.com/pfirsich/makelove) - Python 3 で書かれたゲームを融合する高度なマルチプラットフォームツール。Windows および Linux に対応。AppImage をサポート。

## 関連資料 <a id="related"></a>

* [awesome-love-shaders](https://github.com/karai17/awesome-love-shaders) - LÖVE で動作するシェーダーを設計したシェーダー一覧。
* [awesome-lua](https://github.com/LewisJEllis/awesome-lua) - このようなリストだが、より一般で Lua のすべての用途をカバーするもの。
* [awesome-pico8](https://github.com/pico-8/awesome-PICO-8) - PICO-8 のリソース、チュートリアル、ツールなど、厳選された一覧。

その他のAwesomeリストは[awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)で確認できます。
