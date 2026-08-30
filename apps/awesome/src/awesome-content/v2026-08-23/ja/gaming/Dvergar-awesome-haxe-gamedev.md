---
title: "Dvergar/awesome-haxe-gamedev"
description: "Dvergar/awesome-haxe-gamedev の定本スナップショット"
licenseSource: "github-Dvergar-awesome-haxe-gamedev-readme-md"
---

<div align="center"><a href="https://haxe.org/"><img src="images/haxe-logo.png" width="500"></a></div>

# Awesome Haxeゲーム開発 [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

クロスプラットフォームのネイティブコード生成に使われる高水準・厳格な型付きプログラミング言語**[Haxe 4](https://haxe.org/)**向けゲーム開発リソースの厳選リスト。

自由に更新してください。

## 目次
* [ゲームエンジン](#game-engines)
* [低レベルエンジン](#low-level-engine)
* [物理](#physics)
* [アーキテクチャ](#architecture)
* [ネットワーキング](#networking)
* [シリアライゼーションとストレージ](#serialization-and-storage)
* [ゲーム](#games)
* [その他](#miscellaneous)
* [記事](#articles)
* [その他のhaxeリスト](#other-haxe-lists)

## ゲームエンジン

これらはHaxe 4互換ゲームエンジンです。
* [Armory (Kha)](https://github.com/armory3d/armory) - 完全なBlender統合を備えるオープンソース3Dゲームエンジン（`Web`、`Mobile`、`Desktop`、`Consoles`）。
* [Away3D](https://github.com/openfl/away3d) - OpenFL向けオープンソース・リアルタイム3Dエンジン（`Web`、`Mobile`、`Desktop`）。
* [ceramic](https://github.com/ceramic-engine/ceramic) - クロスプラットフォーム2Dフレームワーク（`Web`、`Mobile`、`Desktop`、`Unity`）。
* [HaxeFlixel (OpenFL)](https://github.com/HaxeFlixel/flixel) - OpenFLを基盤とする無料クロスプラットフォーム2Dゲームエンジン（`Web`、`Mobile`、`Desktop`、`Consoles`）。
* [Haxegon (OpenFL)](https://github.com/haxegon/haxegon) - 初心者向けプログラミングライブラリ。OpenFL・Starlingを基盤とする（`Web`、`Mobile`、`Desktop`、`Consoles`）。
* [Heaps](https://github.com/HeapsIO/heaps) - 高性能ゲームフレームワーク（`Web`、`Mobile`、`Desktop`、`Consoles`）。
* [hxdefold](https://github.com/hxdefold/hxdefold) - Defoldゲームエンジン向けHaxe/Lua externs（`Web`、`Mobile`、`Desktop`）。
* [OpenFL](https://github.com/openfl/openfl) - 対話型ゲーム・アプリ開発ライブラリ（`Web`、`Mobile`、`Desktop`、`Consoles`）。
* [Starling](https://github.com/openfl/starling) - 人気のStage3Dフレームワーク「クロスプラットフォームゲームエンジン」（`Web`、`Mobile`、`Desktop`）。
* [Stencyl (OpenFL)](https://github.com/Stencyl/stencyl-engine) - コードなしでFlash、HTML5、iOS、Android、デスクトップゲームを作成する（`Mobile`、`Desktop`）。
* [unreal.hx](https://github.com/proletariatgames/unreal.hx) - Unreal向けHaxe統合（`Web`、`Mobile`、`Desktop`、`Consoles`）。
* [HxGodot (Godot 4.0)](https://github.com/HxGodot/hxgodot) - Godot 4向けHaxe GDExtension（`Web`、`Mobile`、`Desktop`、`Consoles`）。

## 低レベルエンジン
* [Kha](https://github.com/Kode/Kha) - 超ポータブル、高性能なオープンソースマルチメディアフレームワーク（`Web`、`Mobile`、`Desktop`、`Consoles`）。
* [Lime](https://github.com/openfl/lime) - Haxeクロスプラットフォーム開発者向けの柔軟・軽量レイヤー（`Web`、`Mobile`、`Desktop`）。
* [linc_glfw](https://github.com/Sunjammer/linc_glfw) - デスクトップ向けGLFWバインディング（OpenGL、OpenGL ES、Vulkanのマルチプラットフォームライブラリ）_(Desktop)_。
* [NME](https://github.com/haxenme/nme) - クロスプラットフォームネイティブバックエンド（`Web`、`Mobile`、`Desktop`）。
* [3DSHaxe](https://github.com/Krismowo/3DSHaxe) - 3ds homebrewを作る（`3DS`）。

## 物理
* [echo](https://github.com/AustinEast/echo/) - シンプルな物理ライブラリ。
* [haxebullet](https://github.com/armory3d/haxebullet) - Bullet 3D物理。
* [nape-haxe4](https://github.com/HaxeFlixel/nape-haxe4) - 物理エンジン（napeの元のHaxe3版は[こちら](https://github.com/deltaluca/nape)）。

## アーキテクチャ
```
IoC == Inversion of Control  
EC == Entity Component  
ECS == Entity-Component-System
FSM == Finite State Machine
MVC == Model View Controller
```

* [awe6](https://github.com/hypersurge/awe6) - `IoC`、`EC` - 逆転ゲームフレームワーク。将来性の確保に焦点を置く開発ツール。
* [ecx](https://github.com/eliasku/ecx) - `ECS` - Entity Component Systemフレームワーク。
* [hexMachina](https://github.com/DoclerLabs/hexCore) - `MVC` - 強力なマルチモジュラーMVCフレームワーク。
* [OSIS](https://github.com/Dvergar/OSIS) - `ECS` - ネットワーキング対応のEntity Component Systemアーキテクチャ。

## ネットワーキング
* [Anette](https://github.com/Dvergar/Anette) - シンプルなネットワークライブラリ（UDPなし）。
* [colyseus-hx](https://github.com/colyseus/colyseus-hx) - マルチプレイヤーゲームクライアント。
* [haxe-simple-peer (js)](https://github.com/melonin/haxe-simple-peer) - simple-peer向けHaxe externs。
* [hxWebSockets](https://github.com/ianharrigan/hxWebSockets) - 全プラットフォーム向けWebSocket。
* 組み込み - Heaps、OpenFL（HaxeFlixelほか）、Kha（Armory）。

## シリアライゼーションとストレージ
* [Bits](https://github.com/RealyUniqueName/Bits) - ビット数無制限のバイナリビットフラグ。
* [CastleDB](https://github.com/ncannasse/castle) - コラボレーションを容易にする構造化静的データベース。
* [hxbit](https://github.com/ncannasse/hxbit) - バイナリシリアライゼーション・ネットワーク同期ライブラリ。
* [PODStream](https://github.com/Dvergar/PODStream) - Plain Old Dataシリアライザー。

## ゲーム
* [Darksburg](https://store.steampowered.com/app/939100/Darksburg/) - Heaps - `Desktop`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/darksburg.jpg)
* [Dead Cells](https://dead-cells.com/) - Heaps - `Desktop`、`Consoles`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/dead-cells.jpg)
* [Defender's Quest](http://www.defendersquest.com/) - HaxeFlixel（OpenFL）- `Desktop`、`Consoles`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/defenders-quest.jpg)
* [Defender's Quest 2](https://store.steampowered.com/app/252190/Defenders_Quest_2_Mists_of_Ruin/) - HaxeFlixel（OpenFL）- `Desktop`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/defenders-quest-2.jpg)
* [Dicey Dungeons](http://diceydungeons.com/) - Haxegon（OpenFL）- `Desktop`、`Consoles`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/dicey-dungeons.jpg)
* [Evoland](http://evoland.shirogames.com/) - Heaps - `Desktop`、`Mobile`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/evoland.jpg)
* [Northgard](http://northgard.net/) - Heaps - `Desktop`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/northgard.jpg)
* [Papers, Please](http://papersplea.se/) - OpenFL - `Desktop`、`iOS`、`PsVita`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/papers-please.jpg)
* [Pocket Kingdom](https://store.steampowered.com/app/462620/Pocket_Kingdom/) - HaxePunk（OpenFL）- `Desktop`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/pocket-kingdom.jpg)
* [rymdkapsel](https://rymdkapsel.com/) - OpenFL - `Desktop`、`Mobile`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/rymdkapsel.jpg)
* [Spellbreak](https://playspellbreak.com/) - unreal.hx - `PC`、`PS`、`Xbox`、`Switch`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/spellbreak.jpg)
* [The Westport Independent](http://www.doublezeroonezero.com/westport.html) - Luxe - `Desktop`、`Mobile`。
    * ![Screenshot](https://raw.githubusercontent.com/Dvergar/awesome-haxe-gamedev/main/images/westport-independent.jpg)

さらにショーケース:
* [OpenFL showcase](https://www.openfl.org/showcase)
* [HaxeFlixel showcase](https://haxeflixel.com/showcase/)
* [itch.io showcase](https://itch.io/games/made-with-haxe)
* [HaxePunk showcase](https://haxepunk.com/games/)
* [Flambe showcase](https://github.com/aduros/flambe/wiki/Showcase)
* [Kha showcase](https://github.com/Kode/Kha/wiki/Games-Built-With-Kha)

## その他

### サードパーティーAPI
* [SteamWrap](https://github.com/larsiusprime/SteamWrap) - SteamAPI向けネイティブ拡張。
* [newgrounds](https://lib.haxe.org/p/newgrounds) - Newgrounds API。
* [hxgamejolt-api](https://github.com/MAJigsaw77/hxgamejolt-api) - GameJolt API向けHaxeバインディング。

### AI
[goap](https://gitlab.com/haath/goap) - AI向け目標指向アクションプランナー。

### アニメーション
* [spine-hx](https://github.com/jeremyfa/spine-hx) - 公式Java/libgdxランタイムから自動変換されたSpineランタイム。
* HaxeFlixel - Spineパーサー。
* [Heaps-Spine](https://github.com/Beeblerox/Heaps-Spine) - heaps向けSpineプレイヤー。
* [heaps-aseprite](https://github.com/AustinEast/heaps-aseprite) - Aseprite形式のスプライト・アニメーションを読み込み・レンダリングする。
* [openfl-aseprite](https://github.com/miriti/openfl-aseprite) - Aseprite形式のスプライト・アニメーションを読み込み・レンダリングする。
* [openfl-spine](https://github.com/rainyt/openfl-spine) - OpenFLエンジンでSpineアニメーションをレンダリングする。Sprite・Tilemapによるレンダリング処理を実現できる。
* [ase](https://github.com/miriti/ase) - 外部依存なしの.ase/.aseprite向けファイル形式リーダー／ライター。
* [flxgif](https://github.com/MAJigsaw77/flxgif) - HaxeFlixel向けYagpのGifプレイヤー。

### 音響
* [sfxr-hx](https://github.com/jobf/sfxr-hx) - Sfxrの純粋Haxe実装。

### 色操作
* [nxColor](https://github.com/oscarcs/nxColor) - 色操作ライブラリ。

### 衝突
* [differ](https://github.com/snowkit/differ) - 分離軸定理の衝突ライブラリ。

### コンピュータービジョン
* [Vision](https://github.com/ShaharMS/Vision) - クロスプラットフォームコンピュータービジョンライブラリ。

### データ構造
* [polygonal-ds](https://github.com/polygonal/ds) - ゲーム向けデータ構造。

### ダイアログ
* [hxyarn](https://github.com/cxsquared/hxyarn) - Yarnダイアログファイル向けパーサー・ランナー。

### エディター
* [flixel-studio](https://github.com/Dovyski/flixel-studio) - HaxeFlixel向けゲーム内エディター。

### ヘルパー
* [deepnightLibs](https://github.com/deepnight/deepnightLibs) - 一般的なゲーム開発目的ライブラリ。

### ローカリゼーション
* [firetongue](https://github.com/larsiusprime/firetongue) - 翻訳／ローカリゼーションフレームワーク。

### マップパーサー
* [PyxelEdit Map Importer](https://github.com/Dvergar/PyxelEdit-Map-Importer) - エディターPyxelEditが生成するマップ向けパーサー。
* Heaps - Tiled向け組み込みパーサー。
* HaxeFlixel - Tiled・Ogmo向けパーサー。
* [LEd](https://github.com/deepnight/led-haxe-api) - 型付きコンパイル時ローダーを備える2Dレベルエディター。
* [TiledHX](https://github.com/yanrishatum/tiledhx) - 包括的でモダンなTiledパーサー。

### 数学ヘルパー
* [hxmath](https://github.com/tbrosman/hxmath) - ゲーム指向の数学ライブラリ。
* [haxe-glm](https://github.com/hamaluik/haxe-glm) - 2、3、4次元のベクトル・行列、および四元数を使うためのツールセット。
* [hx-vector2d](https://github.com/markknol/hx-vector2d) - 演算子オーバーロードを備えた、世界で最も完全なVector2d／Pointクラス。

### Modding
* [polymod](https://github.com/larsiusprime/polymod) - ゲーム／アプリ向けアトミックモッディングフレームワーク。

### パーティクル
* [Sparkler](https://github.com/RudenkoArts/sparkler) - モジュラー粒子システム。

### 収益化
* [extension-iap](https://github.com/charmdev/extension-iap) - 共通APIを使うOpenFLプロジェクト向けに、アプリ内購入（iOS）・アプリ内課金（Android）へのアクセスを提供する。[これ](https://github.com/HaxeExtension/extension-iap)のフォーク。

### 経路探索
* [pathfinder](https://github.com/hypersurge/pathfinder) - 簡単なA*経路探索アルゴリズム。
* [astar](https://gitlab.com/haath/astar) - 多用途でフレームワーク非依存のA-starソルバーライブラリ。

### プロシージャル生成
* [Dungeon builder](https://github.com/julsam/dungeon-builder) - ダンジョン生成アルゴリズムのセット（軽微な変更でhx4に対応）。

### シェーダー
* [HGSL](https://github.com/saharan/HGSL) - HaxeからGL Shading Languageへ。
* [parasol](https://github.com/47rooks/parasol) - HaxeFlixel向けシェーダーライブラリ。

### スプライト
* [haxe-aseprite](https://github.com/PongoEngine/haxe-aseprite) - .ase・.asepriteファイル向けパーサー。

### テクスチャパッカー
* [hxpk](https://github.com/bendmorris/hxpk) - libGDX Texture Packerの移植版。

### トゥイーン
* [actuate](https://github.com/jgranick/actuate) - 柔軟で高速な「トゥイーン」ライブラリ。
* [YATL](https://github.com/Yanrishatum/yatl) - Yet Another（Haxe）Tweening Library。
* [TweenX/TweenXCore](https://github.com/shohei909/tweenx) - トゥイーンライブラリ。

### UI
* [domkit](https://github.com/ncannasse/domkit) - CSSコンポーネントに基づく厳格な型付きUIフレームワーク。
* [flixel-ui](https://github.com/HaxeFlixel/flixel-ui) - HaxeFlixel向けGUIライブラリ。
* [HaxeUI](http://haxeui.org/) - 複数のフレームワークバックエンド（HTML5、Kha、OpenFL、PixiJS、WxWidgets、その他進行中のもの）を持つUIライブラリ。
* [Feathers UI](https://feathersui.com/) - クリエイティブなフロントエンドプロジェクト向けクロスプラットフォームGUIコンポーネント。

### 映像
* [hxCodec](https://github.com/polybiusproxy/hxCodec) - HaxeFlixel・OpenFLにネイティブ映像再生を追加する。

## 記事
* [Flash is dead, long live OpenFL!](http://gamasutra.com/blogs/LarsDoucet/20140318/213407/Flash_is_dead_long_live_OpenFL.php)
* [Flash is gone, what now?](https://www.linkedin.com/pulse/flash-gone-what-now-matan-uberstein/)
* [How I wrote my own 3D game engine and shipped a game with it in 20 months](https://kircode.com/post/how-i-wrote-my-own-3d-game-engine-and-shipped-a-game-with-it-in-20-months)
* [Building 42 games within a year — Insane game development](https://medium.com/@mknol/building-42-games-within-a-year-insane-game-development-5340d506068f)
* [Porting to console via Unity](https://do-games.com/blog/the-adventure-pals-console-tech-part1)

## その他のhaxeリスト
* [awesome haxe](https://github.com/nadako/awesome-haxe)
* [awesome snowkit](https://github.com/anissen/awesome-snowkit)
* [awesome haxe js](https://github.com/MatthijsKamstra/awesome-haxe-js)
