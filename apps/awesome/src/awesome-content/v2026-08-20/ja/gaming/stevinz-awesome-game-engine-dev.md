---
title: "stevinz/awesome-game-engine-dev"
description: "ゲームエンジン開発の実装、学習、ライブラリ、専門技術、制作ツールを分類した定本スナップショット"
licenseSource: "github-stevinz-awesome-game-engine-dev-readme-md"
---



<div align="center">
    <a href="https://github.com/stevinz/awesome-game-engine-dev"><img width="1100" src="aged-title.png" alt="Awesome Game Engine Dev Logo"/></a>
</div>

# ゲームエンジン開発のAwesomeリスト <a id="awesome-game-engine-development"></a> [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome#readme)

ゲーム制作を改善・高速化するゲームエンジン開発資料の厳選リストです。特にGodotやUnityのような高水準で多機能なゲームエンジンの開発を対象とします。

MonoGameやSDLのような低水準エンジン、アプリ／ゲームフレームワーク、グラフィックスライブラリには通常ない機能を含みます。特に視覚的なシーンエディターを重視し、スクリプト、物理、アセット管理、特殊効果、収益化なども扱います。

<br />

## 目次 <a id="contents"></a>

- [ゲームエンジン](#game-engines)
    - [厳選コレクション](#awesome-collections)
    - [人気](#popular)
    - [AAA](#aaa)
    - [商用](#commercial)
    - [特化型](#specialty)
- [学習](#learning)
    - [コンピューターグラフィックス](#computer-graphics)
    - [エンジン開発](#engine-development)
    - [ゲーム開発](#game-development)
    - [GUI](#graphical-user-interface)
    - [プログラミング](#programming)
- [ライブラリ](#libraries)
    - [BASIC](#basic)
    - [C](#c)
    - [C++](#c-1)
    - [C#](#c-2)
    - [Dart](#dart)
    - [F#](#f)
    - [Go](#go)
    - [Haxe](#haxe)
    - [Lua](#lua)
    - [Java](#java)
    - [JavaScript](#javascript)
    - [Kotlin](#kotlin)
    - [Pascal](#pascal)
    - [Python](#python)
    - [Ruby](#ruby)
    - [Rust](#rust)
    - [Swift](#swift)
    - [Zig](#zig)
- [オープンソースゲーム](#open-source-games)
    - [厳選コレクション](#awesome-collections-1)
    - [C](#c-3)
    - [C++](#c-4)
    - [Java](#java-1)
- [専門トピック](#specialty-topics)
    - [アセットパイプライン／形式](#asset-pipeline--formats)
    - [色操作](#color-manipulation)
    - [敵・経路探索](#enemies--pathfinding)
    - [Entity Component System](#entity-component-systems)
    - [流体・煙](#fluid--smoke)
    - [幾何](#geometry)
    - [毛髪](#hair)
    - [照明・影](#lighting--shadows)
    - [ネットワーク](#network)
    - [パーティクル](#particles)
    - [物理](#physics)
    - [レンダリング](#rendering)
    - [スクリプト](#scripting)
    - [シェーダー](#shaders)
    - [符号付き距離場](#signed-distance-fields)
    - [タイリング](#tiling)
    - [透明表現](#transparency)
- [ツール／ソフトウェア](#tools--software)
    - [厳選コレクション](#awesome-collections-2)
    - [アニメーションソフトウェア](#animation-software)
    - [音声ツール](#audio-tools)
    - [色／パレット](#color--palettes)
    - [デバッグ／プロファイリング](#debugging--profiling)
    - [画像エディター](#image-editors)
    - [レベルエディター](#level-editors)
    - [マテリアル／テクスチャ](#materials--textures)
    - [モデリングツール](#modeling-tools)
    - [パーティクルツール](#particle-tools)
    - [ピクセルアート](#pixel-art)
    - [タイルマップエディター](#tilemap-editors)
    - [ベクターエディター](#vector-editors)
    - [ボクセル](#voxel)
- [ゲーム素材](#video-game-assets)
    - [音声素材](#audio-assets)
    - [グラフィック素材](#graphic-assets)
    - [マテリアル素材](#material-assets)
    - [モデル素材](#model-assets)
- [アーカイブ](#archive)
- [凡例](#legend)

<br />
<br />

## ゲームエンジン <a id="game-engines"></a>
_試用・探究・学習・着想に使える本番対応ゲームエンジンです。_

### 厳選コレクション <a id="awesome-collections"></a>
- 📚 [Awesome Game Engines](https://github.com/ChessMax/awesome-game-engines) - ゲームエンジンのリスト
- 📚 [Cool Engines](https://github.com/JohnClarking/CoolEngines) - オープンソースのグラフィック・ゲームエンジンのリスト
- 📚 [Fantasy Consoles](https://github.com/paladin-t/fantasy) - 利用可能なファンタジーコンソール／コンピュータのリスト
- 📚 [Wikipedia: List of Game Engines](https://en.wikipedia.org/wiki/List_of_game_engines) - ゲームエンジンとそのプラットフォーム・ライセンスのリスト

### 人気 <a id="popular"></a>
- 🎉 [Godot](https://github.com/godotengine/godot) 🔥 - 製品が豊富なオープンソースエンジン。素晴らしい！ [[Awesome](https://github.com/godotengine/awesome-godot) | [Website](https://godotengine.org)]
- 💸 [Unity](https://unity.com) - ゲームエンジン界のトップブランド、業界標準。 [[Awesome](https://github.com/RyanNielson/awesome-unity)]
- 💸 [Unreal Engine](https://www.unrealengine.com) - AAA品質、驚異的な機能セット、現実に近い視覚表現。 [[Awesome](https://github.com/insthync/awesome-ue4)]

### AAA <a id="aaa"></a>
- 🎉 [Amazon Lumberyard](https://github.com/aws/lumberyard) - _AWS_ と _Twitch_ に統合されたAAAエンジン。_CRYENGINE_ からフォークされたもの
- 💰 [C4 Engine](http://c4engine.com) - 現代のコンソールエンジン
- 💸 [CRYENGINE](https://www.cryengine.com) - _Crytek_ が提供する強力なリアルタイムゲーム開発プラットフォーム
- 🆓 [Evergine](https://evergine.com) - 高品質な3Dおよび2Dソリューション。かつては _Wave Engine_。 [[Samples](https://github.com/EvergineTeam/Samples)]
- 💸 [Flax Engine](https://github.com/FlaxEngine/FlaxEngine) - C++およびC#で書かれた現代的な3Dゲームエンジン
- 💰 [Gamebryo](http://www.gamebryo.com) - 完全なツールセット、柔軟なワークフロー、迅速なプロトタイピング
- 🎉 [O3DE](https://github.com/o3de/o3de/) - マルチプラットフォームAAAエンジン。映画級の3D品質。_Lumberyard_ の継承者
- 💸 [Unigine](https://unigine.com) - リアルタイム3Dエンジン。写実的なグラフィック、大きな仮想世界、C++およびC# API

### 商用 <a id="commercial"></a>
- 💰 [AppGameKit](https://www.appgamekit.com/studio) - _TheGameCreators_ による簡単で迅速なゲーム開発
- 💸 [Buildbox](https://www.buildbox.com) - コーディングなしで3Dおよび2Dのゲームを作成可能。
- 💰 [Cave Engine](https://uniday.studio/cave/) - 3D用の高速かつ簡単なPythonゲームエンジン。
- 💸 [Construct](https://www.construct.net/) - ドラッグ＆ドロップでゲームを作成できるビルダー。 [[Awesome](https://github.com/ConstructCommunity/awesome-construct)]
- 💰 [Corgi Engine](https://corgi-engine.moremountains.com/) - _Unity_に基づく2Dおよび2.5Dプラットフォームゲームエンジン。
- 🎉 [Defold](https://github.com/defold/defold) - _King_が開発したオープンソースゲームエンジン。 [[Website](https://defold.com)]
- 💸 [Felgo](https://felgo.com/games) - _Qt_ を使用して、数日でクロスプラットフォーム2Dゲームを構築
- 💰 [GameGuru](https://www.game-guru.com/) - _TheGameCreators_ によるゲームビルダー。3Dで、コードなしで作成可能
- 💸 [GameMaker](https://www.yoyogames.com/en/gamemaker) - _YoYo Games_ による人気2Dゲーム開発環境
- 💸 [GameSalad](https://gamesalad.com) - 高度な視覚プログラミングインターフェース
- 💸 [Luxe](https://luxeengine.com/) - 2Dを主としたエンジンで、2D/3Dレンダラーを備えている。
- 💸 [MANU](https://manu-vgm.itch.io/) - 独自のアニメーションシステムにより、コードなしでゲームを作成可能
- 💸 [NeoAxis](https://github.com/NeoAxis/NeoAxisEngine) - ゲームおよびアプリケーション開発に使える柔軟なリアルタイムプラットフォーム
- 💰 [Phaser Editor 2D](https://phasereditor2d.com) - _Phaser_用の商用・ウェブベースのエディタ。 [[GitHub](https://github.com/PhaserEditor2D/PhaserEditor2D-v3)]
- 💸 [PlayCanvas](https://playcanvas.com) - 人気のある（_Flappy Bird_）WebGLゲームエンジン。 [[Awesome](https://github.com/playcanvas/awesome-playcanvas) | [GitHub](https://github.com/playcanvas/engine)]
- 💸 [Roblox](https://www.roblox.com/create) - Luaスクリプトで没入感のある3D体験を作成可能
- 💸 [Simulation Starter Kit](https://benmorris.itch.io/plugin-based-scene-editor) - 複数のプラットフォームでインタラクティブな3Dアプリを構築
- 💸 [Stencyl](https://github.com/Stencyl/stencyl-engine) - 視覚スクリプトで簡単かつ迅速にゲームを作成
- 💸 [Titan Engine](https://esenthel.com/) - マルチプラットフォームエンジン。2000年に開始。かつては _Esenthel Engine_。

### 特化型 <a id="specialty"></a>
- 💰 [3dSen](https://geod.itch.io/3dnes) - NESゲームを3Dでプレイできるエミュレーター。 [[Website](http://www.geodstudio.net)]
- 🎉 [Adventure Game Studio](https://github.com/adventuregamestudio/ags) - ポイントアンドクリックアドベンチャーゲーム用のオープンソースエンジン。 [[Website](https://www.adventuregamestudio.co.uk/)]
- 💸 [DopeFish](https://lemontoast-games.itch.io/dopefish) - _Doom_ / _Heretic_ のマップロードシステム（_GameMaker_用）
- 🎉 [GB Studio](https://github.com/chrismaltby/gb-studio) - _Game Boy_用のレトロアドベンチャーゲーム作成ツール
- 🔒 [HARFANG 3D](https://github.com/harfang3d/harfang3d) - 業界専門家向けの3D可視化ライブラリ（C++、Python、Lua、Goで使用可能）
- 💰 [Platforming Engine](https://robvansaaze.itch.io/platforming-engine) - _GameMaker_で独自のプラットフォーマーを作成するためのすべてのツール
- 🎉 [Ren'Py](https://github.com/renpy/renpy) - ビジュアルノベルエンジン。 [[Website](https://www.renpy.org/)]
- 💰 [RPG in a Box](https://www.rpginabox.com) - _Godot_で作られたストーリーとアイデアをゲームに変換
- 💰 [RPG Maker](https://www.rpgmakerweb.com) - 専門知識なしでオリジナルのRPGを作成
- 🔒 [Twine](https://github.com/klembot/twinejs) - インタラクティブで非線形なストーリーを語るツール
- 💸 [Unbound](https://www.unbound.io/) - SDFを用いたゲームエンジン。直感的に3Dゲームをスculptし、スクリプト作成

<br />
<br />

## 学習 <a id="learning"></a>
_ゲームエンジンの設計・開発に必要なトピックの情報です。_

### コンピューターグラフィックス <a id="computer-graphics"></a>
- Awesome Collections
    - 📚 [Awesome Demoscene](https://github.com/psykon/awesome-demoscene) - 地下コンピュータアート文化：コンピュータグラフィックスとサウンドの探求
    - 📚 [Awesome Graphics Libraries](https://github.com/jslee02/awesome-graphics-libraries) - 3Dグラフィックスライブラリとリソースのキュレーションリスト
- Blog Articles
    - 📚 [Comparison of Modern Graphics APIs](https://web.archive.org/web/20260203162531/https://alain.xyz/blog/comparison-of-modern-graphics-apis) - 現代のグラフィックスAPIと古いAPIの比較
    - 📚 [GPU Performance for Game Artists](http://www.fragmentbuffer.com/gpu-performance-for-game-artists/) - 芸術関連の一般的なパフォーマンス問題
- Books
    - 📚 [GPU Gems](https://developer.nvidia.com/gpugems/gpugems/contributors) - リアルタイムグラフィックス向けのプログラミング技術、ヒント、トリック
    - 📚 [GPU Gems 2](https://developer.nvidia.com/gpugems/gpugems2/copyright) - 高パフォーマンスグラフィックス向けのプログラミング技術
    - 📚 [GPU Gems 3](https://developer.nvidia.com/gpugems/gpugems3/contributors) - _NVIDIA_がホストする、最先端GPUプログラミング例のコレクション
    - 📚 [Interactive Computer Graphics](https://www.cs.unm.edu/~angel/) - コンピュータグラフィックスのトップダウンアプローチ
    - 📚 [Physically-Based Rendering](https://www.pbrt.org) - アカデミー賞受賞者によるPBR（Physically Based Rendering）の权威から
    - 📚 [Real-Time Rendering, Fourth Edition](https://www.realtimerendering.com/) - 3Dインタラクティブコンピュータグラフィックスの完全なリファレンス
- Education Portals
    - 📚 [Game Art Tricks](http://simonschreibt.de/game-art-tricks/) - グラフィックス技術のさまざまなアプローチを紹介する記事のコレクション
    - 📚 [Graphics Codex](https://graphicscodex.com/) - コンピュータグラフィックスにおける必須なデジタルリファレンスおよび学習リソース
    - 📚 [Lighthouse3d.com](http://www.lighthouse3d.com/tutorials/) - OpenGL、GLSLおよびその他のグラフィックストピックに関するチュートリアルのコレクション
    - 📚 [Paper Bug](https://www.jeremyong.com/paperbug/) - グラフィックスプログラミング論文のインデックス付きコンパンドium
    - 📚 [Scratchapixel](https://www.scratchapixel.com) - コンピュータグラフィックストピックに関する詳細な解説
- Graphics API: DirectX
    - 🌎 [DirectX](https://learn.microsoft.com/en-us/windows/win32/directx) - _Microsoft_ APIを使用して2D/3Dゲームおよびアプリを開発。 [[Blog](https://devblogs.microsoft.com/directx/) | [Samples](https://github.com/microsoft/DirectX-Graphics-Samples)]
    - 📚 [DirectXTutorial.com](http://www.directxtutorial.com/default.aspx) - DirectX 9および11バージョンに関するチュートリアルが多数ある古いリソース。
- Graphics API: Glide
    - 📚 [Glide](https://en.wikipedia.org/wiki/Glide_(API)) - 1990年代、_3dfx Interactive_が_ Voodoo Graphics_のために開発した。
    - 🌎 [Glide Open Source Project](https://glide.sourceforge.net/) - Glideのオープンソースプロジェクト
- Graphics API: Mantle
    - 📚 [Mantle](https://en.wikipedia.org/wiki/Mantle_(API)) - _AMD_がDirect3DおよびOpenGLの代替として開発したプロジェクト
- Graphics API: Metal
    - 🌎 [Metal](https://developer.apple.com/metal/) - _Apple_プラットフォームでの3Dアプリ開発用API。 [[Samples](https://developer.apple.com/metal/sample-code/)]
    - 📚 [Metal Tutorial](https://www.raywenderlich.com/7475-metal-tutorial-getting-started) - _RayWenderlich.com_でメタルを始める方法を学ぼう
- Graphics API: OpenGL
    - 📚 [Learn OpenGL](https://learnopengl.com) 🔥 - 素晴らしい！現代のグラフィックスプログラミング向けの詳細なチュートリアル
    - 🌎 [Mesa 3D](https://www.mesa3d.org/) - OpenGLのオープンソース実装
    - 🌎 [OpenGL](https://www.opengl.org/) - 業界における高性能グラフィックスの基礎
    - 📚 [OpenGL Tutorial](https://www.opengl-tutorial.org) - OpenGLチュートリアルとソースコード例のコレクション
- Graphics API: Vulkan
    - 🌎 [Vulkan](https://www.vulkan.org) - 現代的なマルチプラットフォームグラフィックスAPI。 [[Samples](https://github.com/khronosGroup/Vulkan-samples)]
    - 📚 [Vulkan Tutorial](https://github.com/Overv/VulkanTutorial) - VulkanグラフィックスおよびコンピュートAPIの基本的な使い方を教える
- Graphics API: WebGL
    - 🌎 [WebGL](https://www.khronos.org/webgl/) - オープンウェブ標準3DグラフィックスAPI。 [[GitHub](https://github.com/KhronosGroup/WebGL)]
    - 📚 [WebGL Fundamentals](https://webglfundamentals.org) 🔥 - WebGLが本当に何であるか、そしてどのように機能するかを完全に理解できる
    - 📚 [WebGL 2 Fundamentals](https://webgl2fundamentals.org) - WebGL2標準を使用した更新
    - 📚 [WebGL 2 Samples](https://github.com/WebGLSamples/WebGL2Samples) - WebGL 2の機能を簡潔に示すサンプル。
    - 📚 [WebGL Tutorial](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial) - キャンバス要素を使ってWebGLグラフィックスを描く方法
- Graphics API: WebGPU
    - 📚 [Learn WebGPU](https://eliemichel.github.io/LearnWebGPU/) - WebGPUグラフィックスAPIの解説
    - 🌎 [WebGPU](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status) - 次世代ウェブ3DグラフィックスAPI。 [[GitHub](https://github.com/gpuweb/gpuweb)]
    - 🌎 [WebGPU Demos](https://webkit.org/demos/webgpu/) - _Apple_によるシンプルなWebGPU例のコレクション
    - 📚 [WebGPU Fundamentals](https://webgpufundamentals.org/) - WebGPUを学ぶために役立つ記事のセット
- Pipeline: GPGPU
    - 🌎 [CUDA](https://developer.nvidia.com/cuda-zone) - _NVIDIA_が並列計算およびプログラミングのために開発したプロジェクト
    - 📚 [DirectCompute](https://en.wikipedia.org/wiki/DirectCompute) - _Microsoft_が開発したDirectX 10および11で使用するcompute shader向けのAPI。
    - 🌎 [OpenCL](https://www.khronos.org/opencl/) - CPUやGPU、その他プロセッサを対象としたプログラムの実行に必要な内容
- Platform: XNA
    - 📚 [RB Whitaker's Wiki](http://rbwhitaker.wikidot.com/) - C#、MonoGame、XNAなどに関するチュートリアル
    - 📚 [Riemer's MonoGame Tutorials](https://github.com/SimonDarksideJ/XNAGameStudio/wiki/RiemersArchiveOverview) - MonoGameでプログラミングを始めるために必要なすべての情報
    - 📚 [XNA Game Studio Archive](https://github.com/SimonDarksideJ/XNAGameStudio) 🔥 - [MonoGame](https://en.wikipedia.org/wiki/MonoGame) / [FNA](https://fna-xna.github.io/) / [XNA](https://en.wikipedia.org/wiki/Microsoft_XNA)開発者にとって必須の訪問。

### エンジン開発 <a id="engine-development"></a>
- Blog Articles
    - 📚 [How to Become a Game Engine Developer](https://www.haroldserrano.com/blog/how-to-become-a-game-engine-developer) - ゲームエンジン開発の入り口となる内容
- Books
    - 📚 [Data-Oriented Design](https://www.dataorienteddesign.com/dodbook/) - 複雑性を減らし、パフォーマンスを向上させる実用的な手法
    - 📚 [Game Engine Architecture](https://www.gameenginebook.com) - ゲームエンジン開発における理論と実践
    - 📚 [Game Engine Black Book: DOOM](https://fabiensanglard.net/gebbdoom/) - _Doom_エンジンの歴史、エンジニアリング、開発に関する内容
- Commercial Studios Research Divisions
    - 🌎 [Activision Research](https://research.activision.com/) - _Activision_における研究から生まれたブログ記事、記事、プレゼンテーション
    - 🌎 [EA Technology](https://www.ea.com/technology/research) - ゲーム技術に関する研究、_Frostbite_エンジンに関する情報
    - 🌎 [tri-Ace Research](https://research.tri-ace.com/) - _tri-Ace Inc._の研究開発部門から発表された論文
    - 🌎 [Ubisoft Technology](https://www.ubisoft.com/en-us/company/how-we-make-games/technology) - _Anvil_や_Snowdrop_といった内部技術について学ぶ
- Developer Blogs
    - 📚 [Bits, Pixels, Cycles and More](https://zeux.io/) - グラフィックス、最適化、低レベルエンジンプログラミング
    - 📚 [Bitsquid Development Blog](https://bitsquid.blogspot.com/) - アーキテクチャ、レンダリング、ツールに関する過去の記事
    - 📚 [cybereality](https://cybereality.com/) - カスタム3Dエンジン開発、グラフィックスおよびゲーム技術。
    - 📚 [Digital Grove](https://www.dgtlgrove.com/) - 低レベルプログラミング、ツール、UI、デバッグ、ゲームエンジン
    - 📚 [Harold Serrano](https://www.haroldserrano.com/blog) - エンジンアーキテクチャ、グラフィックス、_Untold Engine_の構築
    - 📚 [Our Machinery Blog Archive](https://ruby0x1.github.io/machinery_blog_archive/) - エンジンアーキテンチャ、レンダリング、ECS、ツール開発
    - 📚 [The Danger Zone](https://therealmjp.github.io/posts/) - リアルタイムレンダリング、GPUプログラミング、グラフィックスAPI
    - 📚 [The ryg blog](https://fgiesen.wordpress.com/) - 低レベルプログラミング、グラフィックス、圧縮、コンピュータアーキテクチャ
    - 📚 [Wicked Engine Devblog](https://turanszkij.wordpress.com/category/devblog/) - _Wicked Engine_におけるレンダリング、グラフィックス、エンジン開発
- Education Portals
    - 📚 [3D Game Engine Programming](https://www.3dgep.com) - グラフィックス、物理学、AI、I/Oなどに関する記事

### ゲーム開発 <a id="game-development"></a>
- Awesome Collections
    - 📚 [Awesome Gamedev](https://github.com/Calinou/awesome-gamedev) - ゲームを作成するための無料リソースのコレクション
    - 📚 [GameDev-Resources](https://github.com/Kavex/GameDev-Resources) - ゲーム開発用の素晴らしいリソース一覧
    - 📚 [Magic Tools](https://github.com/ellisonleao/magictools) - 魔法が現実に起こるようにするゲーム開発用のリソース一覧
    - 🌎 [Web Game Dev](https://www.webgamedev.com) - JavaScriptによるゲーム開発に関連する技術とツールのリソース
- Books
    - 📚 [Art of Game Design](https://www.amazon.com/Art-Game-Design-Book-Lenses/dp/0123694965) - ゲームデザインをわかりやすく教えている
    - 📚 [Game Programming Patterns](https://gameprogrammingpatterns.com) - コードを理解しやすくするゲームに見られるパターン
- Developer Portals
    - 🌎 [Game Developer](https://www.gamedeveloper.com) - 業界のブログ、イベント、仕事、更新情報など。以前は _Gamasutra_ でした
    - 🌎 [GameDev.net](https://www.gamedev.net/) - ゲーム開発のフォーラム、チュートリアル、ブログ、プロジェクト、ポートフォリオ、ニュース
    - 🌎 [GameFromScratch.com](https://gamefromscratch.com) - ゲーム開発のニュース、チュートリアルなど
    - 🌎 [itch.io](https://itch.io) - ゲーム開発のリソースと、ゲームを紹介・プロモーション・購入・販売できるプラットフォーム
- Education Portals
    - 🌎 [Lazy Foo' Tutorials](https://lazyfoo.net/tutorials/SDL/) - SDLを使ってゲームプログラミングをはじめよう

### GUI <a id="graphical-user-interface"></a>
- 📚 [List of Widget Toolkits](https://en.wikipedia.org/wiki/List_of_widget_toolkits) - すべてのプラットフォームおよび言語向けのGUIフレームワーク。

### プログラミング <a id="programming"></a>
- 📚 [Big-O Cheat Sheet](https://www.bigocheatsheet.com) - コンピュータサイエンスで使われるアルゴリズムのBig-O複雑度
- 🌎 [Deadlock Empire](https://deadlockempire.github.io/#menu) - スレッドと並列処理をマスターするためのインタラクティブチュートリアル
- 📚 [Every Programmer Should Know](https://github.com/mtdvio/every-programmer-should-know) - すべての開発者が知るべき技術的事項
- 📚 [Games of Coding](https://github.com/michelpereira/awesome-games-of-coding) - プログラミング言語を学ぶためのゲーム
- 🌎 [Geeks for Geeks](https://www.geeksforgeeks.org) - チュートリアル、記事、コース、コーディングコンテスト、仕事など
- 📚 [Learn to Program](https://github.com/karlhorky/learn-to-program) - プログラミングを学ぶための教育リソース
- 📚 [TIOBE Index](https://www.tiobe.com/tiobe-index/) - プログラミング言語の流行度、月次更新

<br />
<br />

## ライブラリ <a id="libraries"></a>
_言語別のゲームエンジン開発ライブラリ、フレームワーク、コードです。_

### BASIC <a id="basic"></a>
- 📚 [Awesome Basic](https://github.com/JohnBlood/awesome-basic) - 素晴らしいBASICの方言、IDE、チュートリアルの一覧
- BASIC: App Framework
    - 💰 [Basic for Qt](https://www.q7basic.org/index.html) - _Qt_で構築されたBASIC言語と環境。以前は _Q7Basic_ でした
    - 🎉 [QB64](https://github.com/QB64Team/qb64) - 現代的な BASIC+OpenGL ランゲージ。_QBasic_ / _QB4.5_ との互換性を維持。
    - 📚 [Visual Basic](https://learn.microsoft.com/en-us/dotnet/visual-basic/) - Microsoft が開発した Windows 用オブジェクト指向言語。
- BASIC: Game Framework
    - 🎉 [Dark Basic](https://github.com/TheGameCreators/Dark-Basic-Pro) - アプリケーションおよびゲーム開発用のBASICプログラミング言語。 [[Website](https://www.thegamecreators.com/product/dark-basic-pro-open-source)]

### C <a id="c"></a>
- 📚 [Awesome C](https://github.com/oz123/awesome-c) - 素晴らしい C フレームワーク、ライブラリ、リソース、その他魅力的なもの一覧。
- 📚 [Learn C Programming](https://www.programiz.com/c-programming) - C プログラミングを学ぶための優れたチュートリアル。
- C: App Framework
    - 🎉 [Allegro](https://github.com/liballeg/allegro5) - ゲームおよびマルチメディアアプリ向けのクロスプラットフォームライブラリ。
    - 🎉 [glfw](https://github.com/glfw/glfw) - ウィンドウ、グラフィックスコンテキスト、入力、イベント向けのクロスプラットフォームAPI。
    - 🎉 [MiniFB](https://github.com/emoon/minifb) - ピクセルを描画するためのクロスプラットフォームフレームバッファを生成。
    - 🎉 [SDL](https://github.com/libsdl-org/SDL) 🔥 - 音声、キーボード、マウス、ジョイスティック、グラフィックスハードウェアへの低レベルアクセス。
    - 🎉 [Sokol](https://github.com/floooh/sokol) 🔥 - グラフィックス、ウィンドウ、ファイル処理、音声など、単一ファイルライブラリ。
- C: Audio
    - ⭐ [Miniaudio](https://github.com/mackron/miniaudio) - 単一ファイルのオーディオ再生およびキャプチャライブラリ。
    - 🎉 [SDL_mixer](https://github.com/libsdl-org/SDL_mixer) - SDL に対応したさまざまなファイル形式をサポートするオーディオマキシ。
    - 🎉 [SoLoud](https://github.com/jarikomppa/soloud) 🔥 - ゲーム向けに無料で簡単でポータブルなオーディオエンジン。
- C: Cross-Platform
    - 🎉 [Cosmopolitan](https://github.com/jart/cosmopolitan) - 一度ビルドして、あらゆるプラットフォームで実行できる C ライブラリ。
- C: Entity Component System
    - 🎉 [Flecs](https://github.com/SanderMertens/flecs) - C99 で実装された高速かつ軽量のエンティティ・コンポーネント・システム。
- C: File Formats
    - 🎉 [Assimp](https://github.com/assimp/assimp) - オープンアセットインポートライブラリ。40以上の3Dファイルフォーマットを読み込む。
    - 🎉 [cgltf](https://github.com/jkuhlmann/cgltf) - C99で書かれた1ファイル分のglTF 2.0ローダーおよびライター。
    - ⭐ [dr_libs](https://github.com/mackron/dr_libs) - 単一ファイルのオーディオデコードライブラリ。
    - 🎉 [Libspng](https://github.com/randy408/libspng) - シンプルで現代的な libpng の代替。
    - 🎉 [Miniz](https://github.com/richgel999/miniz) - zlib の最も使われる API（_libpng_ および _libzip_）への単一ファイルドロップイン置き換え。
    - 🎉 [OBJ GL Loader v2](https://github.com/karolek471/objgl) - OpenGL 用の非常に高速な wavefront OBJ ローダー。
    - 🎉 [PL_MPEG](https://github.com/phoboslab/pl_mpeg) - MPEG1 ビデオおよび MP2 音声のデコードに用いる単一ファイルライブラリ。
    - 🎉 [QOI](https://github.com/phoboslab/qoi) - 高速かつ損失なし画像圧縮を実現する「かなりOKな画像フォーマット」。
    - ⭐ [stb_vorbis](https://github.com/nothings/stb/blob/master/stb_vorbis.c) - Ogg Vorbis 音声デコーダ
- C: File System
    - 🎉 [HexEmbed](https://github.com/codeplea/hexembed) - C/C++プログラムにファイルを簡単に、クロスプラットフォームで埋め込むことを支援する小型ユーティリティ
    - ⭐ [Incbin](https://github.com/graphitemaster/incbin) - C/C++アプリケーションにバイナリやテキストファイルを簡単に含める
    - 🎉 [PhysicsFS](https://github.com/icculus/physfs) - ポータブルで柔軟なファイルI/O抽象化。さまざまなアーカイブへのアクセスを提供
    - ⭐ [Where Am I](https://github.com/gpakosz/whereami) - ローカルファイルシステム上の現在のパスを特定
- C: Fonts
    - 🎉 [Font Stash](https://github.com/memononen/fontstash) - stb_truetypeを使用してフォントをテクスチャアタスにレンダリングする軽量ライブラリ
    - 🎉 [IconFontCppHeaders](https://github.com/juliettef/IconFontCppHeaders) - アイコンフォント向けのC/C++ヘッダーとC#クラス
    - ⭐ [stb_truetype](https://github.com/nothings/stb/blob/master/stb_truetype.h) - TrueTypeフォントファイルを処理するシングルヘッダーファイルライブラリ
    - 🎉 [Vertext](https://github.com/kevinmkchin/vertext) - テキストのレンダリング用頂点を生成、stb_truetypeが必要
- C: Game Engine w/Editor
    - ⭐ [AVA](https://github.com/r-lyeh/AVA) - ミニマムで軽量な3Dゲームエンジン
    - 🎉 [TIC-80](https://github.com/nesbox/TIC-80) - 小さなゲームを作成・共有するための仮想コンピュータ。 [[Website](https://tic80.com/)]
- C: Game Framework
    - 🎉 [CGL](https://github.com/Jaysmito101/cgl) - シングルヘッダーで、多くのグラフィックスおよびユーティリティ関数を提供
    - 🎉 [Corange](https://github.com/orangeduck/Corange) - 純粋Cのゲームエンジン
    - 🎉 [DOME](https://github.com/domeengine/dome) - SDL2とWrenスクリプト言語を統合。 [[Website](https://domeengine.com/)]
    - 🎉 [Entrypoint](https://github.com/jimon/entrypoint) - ゲームの軽量なエントリーポイント
    - ⭐ [FWK](https://github.com/r-lyeh/FWK) - 3Dゲームフレームワーク
    - 🎉 [Gunslinger](https://github.com/MrFrenik/gunslinger) - マルチメディアアプリ向けのC99ヘッダのみのフレームワーク
    - 🎉 [RayLib](https://github.com/raysan5/raylib) 🔥 - 2D/3Dゲームプログラミングを楽しむためのシンプルで使いやすいライブラリ。
- C: Geometry
    - 🎉 [Blob](https://github.com/BlockoS/blob) - 輪郭追跡アルゴリズムのシングルヘッダー実装
    - 🎉 [Marching Squares](https://github.com/prideout/par/blob/master/par_msquares.h) - 画像を三角形に変換。 [[Info](https://prideout.net/marching-squares)]
    - 🎉 [Octasphere](https://github.com/prideout/par/blob/master/par_octasphere.h) - 球体、箱体、カプセルのための三角形メッシュを生成。 [[Info](https://prideout.net/blog/octasphere/)]
    - 🎉 [Par_Shapes](https://github.com/prideout/par/blob/master/par_shapes.h) - 固体、球体などを含む三角形メッシュ。 [[Info](https://prideout.net/shapes)]
    - 🎉 [Par_Streamlines](https://github.com/prideout/par/blob/master/par_streamlines.h) - 厚い線、ベジア、流線を三角形化。 [[Demo](https://github.com/prideout/streamlines_demo) | [Info](https://prideout.net/blog/par_streamlines/)]
- C: Graphics - 2D
    - 🎉 [NanoVG](https://github.com/memononen/nanovg) - UIおよび可視化用のOpenGLベースの2Dベクターディスプレイライブラリ
    - 🎉 [Tilengine](https://github.com/megamarc/Tilengine) - レトロスタイルゲーム開発用の2Dグラフィックスとレターエフェクト
- C: Graphics - 3D
    - 🎉 [Sokol Gfx](https://github.com/floooh/sokol/blob/master/sokol_gfx.h) - マルチプラットフォーム対応、1ファイル分のグラフィックス。 [[Examples](https://floooh.github.io/sokol-html5/)]
    - 🎉 [Sokol Graphics Painter](https://github.com/edubart/sokol_gp) - _Sokol_で実装された2Dグラフィックスペイント
    - 🎉 [wgpu-native](https://github.com/gfx-rs/wgpu-native) - _wgpu-core_に基づくネイティブWebGPU実装
- C: Gui
    - 🎉 [cImgui](https://github.com/cimgui/cimgui) - デア・イムグー向けに生成されたスリムなCのWrapper
    - 🎉 [lvgl](https://github.com/lvgl/lvgl) 🔥 - 嵌め込み型GUIライブラリ。多くのウィジェットと高度な視覚効果を提供
    - 🎉 [NAppGUI](https://github.com/frang75/nappgui_src) - デスクトップアプリケーションを構築するためのプロフェッショナルで詳しいSDK
    - 🎉 [Native File Dialog](https://github.com/mlabbe/nativefiledialog) - ネイティブのファイル開閉ダイアログをポータブルに呼び出す
    - 🎉 [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear) - 一ファイルで構成された即時モード対応のマルチプラットフォームGUIライブラリ
- C: Input
    - 🎉 [libGamepad](https://github.com/mtwilliams/libgamepad) - ゲームパッド入力用のマルチプラットフォームライブラリ
    - 🎉 [Sokol Gamepad](https://github.com/floooh/sokol/pull/393/commits/26a9da9dafd4adb22a1ace0de0d2569da31ae427) - _Sokol_ におけるゲームパッドサポートを備えたブランチ
- C: Layout
    - 🎉 [Clay](https://github.com/nicbarker/clay) - 高性能な2D UIレイアウトライブラリ
- C: Libraries
    - ⭐ [Cute Headers](https://github.com/RandyGaul/cute_headers) - ゲーム向けに主に使用される1ファイル分のライブラリ、 [Randy Gaul](https://github.com/RandyGaul)。
    - ⭐ [Libs](https://github.com/mattiasgustavsson/libs) - C/C++向けの公開ドメインライブラリ、 [Mattias Gustavsson](https://github.com/mattiasgustavsson)。
    - ⭐ [Pico Headers](https://github.com/empyreanx/pico_headers) - ゲーム開発用の一ファイル、マルチプラットフォームライブラリ
    - 📚 [Single-file Libs](https://github.com/nothings/single_file_libs) - 多くの著者が貢献した一ファイルC/C++ライブラリの素晴らしいコレクション
    - ⭐ [stb](https://github.com/nothings/stb) 🔥 - C/C++用の単一ファイル公開ドメインライブラリ、由来 [Sean Barrett](https://github.com/nothings).
- C: Lighting
    - ⭐ [Light Mapper](https://github.com/ands/lightmapper) - 既存のOpenGLレンダラーを使用したライトマップバケイング用の一ファイルライブラリ
- C: Math
    - 🎉 [Cglm](https://github.com/recp/cglm) - 高度に最適化されたOpenGL数学ライブラリ
    - ⭐ [Handmade Math](https://github.com/HandmadeMath/Handmade-Math) 🔥 - ゲームおよびコンピュータグラフィックス向けのシンプルかつパブリックドメインの数学ライブラリ
    - 🎉 [Kazmath](https://github.com/Kazade/kazmath) - ゲーム向けの数学ライブラリ
    - 🎉 [Raymath](https://github.com/raysan5/raylib/blob/master/src/raymath.h) - _RayLib_ ゲームフレームワークに含まれる数学ライブラリ
- C: Network
    - 🎉 [ENet](https://github.com/zpl-c/enet) - シンプルで軽量かつ信頼性の高いUDPネットワークライブラリ
    - 🎉 [librg](https://github.com/zpl-c/librg) - ネットワーク／ファイルストリーミングライブラリとアプリロジックの間のミドルウェア
    - 🎉 [netcode](https://github.com/mas-bandwidth/netcode) - UDPをベースに構築されたマルチプレイヤーゲーム向けのセキュアなクライアント・サーバープロトコル
- C: Physics
    - 🎉 [Chipmunk](https://github.com/slembcke/Chipmunk2D) - 高速かつ軽量の2Dゲーム物理ライブラリ
- C: Scripting
    - 🎉 [Duktape](https://github.com/svaarala/duktape) - 埋め込み型JavaScriptエンジン。ポータビリティとコンパクトなサイズに焦点を当てる
    - 🎉 [JerryScript](https://github.com/jerryscript-project/jerryscript) - IoT向けの超軽量JavaScriptエンジン
    - 🎉 [Lua](https://github.com/lua/lua) - 強力で効率的かつ軽量な、埋め込み可能なスクリプト言語
    - 🎉 [QuickJS](https://github.com/bellard/quickjs) - 小型で埋め込み可能なJavaScriptエンジン

### C++ <a id="c-1"></a>
- 📚 [Awesome C++](https://github.com/fffaraz/awesome-cpp) - 素晴らしいC++フレームワーク、ライブラリ、リソースの一覧
- 📚 [Awesome C++ Game Dev](https://github.com/Caerind/AwesomeCppGameDev) - ゲーム開発向け素晴らしいC++アイテムの一覧
- 📚 [Awesome Hpp](https://github.com/p-ranav/awesome-hpp) - 素晴らしいヘッダーのみのC++ライブラリの一覧
- 🌎 [C++ Papyrus](https://caiorss.github.io/C-Cpp-Notes/index.html) - 現代C++による基本から高度なトピックの例
- 🌎 [cppreference.com](https://en.cppreference.com/w/cpp) - C、C++、STL向けオンラインリファレンス
- 📚 [Learn C++](https://www.learncpp.com) 🔥 - C++の作成、コンパイル、デバッグまでの一連のステップを丁寧に解説
- 📚 [Modern Cpp Features](https://github.com/AnthonyCalandra/modern-cpp-features) - 現代C++言語およびライブラリ機能のチェックシート
- C++: App Framework
    - 🎉 [Cinder](https://github.com/cinder/Cinder) - macOS、Windows、Linux、iOS用のアプリ／グラフィックスライブラリ。 [[Website](https://libcinder.org)]
    - 🎉 [Cross Window](https://github.com/alaingalvan/CrossWindow) - ウィンドウやその他のOSタスクを管理するプラットフォームライブラリ
    - 🎉 [SFML](https://github.com/SFML/SFML) 🔥 - ウィンドウ、グラフィックス、オーディオ、ネットワークへのクロスプラットフォームアクセス
- C++: Animation
    - 🎉 [Ozz-Animation](https://github.com/guillaumeblanc/ozz-animation) - 骨格アニメーションライブラリとツールセット
    - 🎉 [Tweeny](https://github.com/mobius3/tweeny) - ゲームやアプリ用の複雑なアニメーションのインベタイン（インベタイン）ライブラリ
- C++: Audio
    - 🎉 [Amplitude Audio SDK](https://github.com/SparkyStudios/AmplitudeAudioSDK) - ゲーム向けに設計されたクロスプラットフォームオーディオエンジン
    - 💰 [irrKlang](https://www.ambiera.com/irrklang/) - 高レベルの2D/3、オーディオエンジンおよびライブラリ
    - 💰 [Juce](https://github.com/juce-framework/JUCE) - マルチプラットフォームオーディオアプリ向けのリードフレームワーク
    - 🔒 [OpenAL Soft](https://github.com/kcat/openal-soft) - _OpenAL_ 3DオーディオAPIのソフトウェア実装
    - 🎉 [PortAudio](https://github.com/PortAudio/portaudio) - クロスプラットフォームオーディオライブラリ
    - 🎉 [Steam Audio](https://github.com/ValveSoftware/steam-audio) - ゲームおよびVR向けのクロスプラットフォーム空間オーディオSDK
- C++: Cross-Platform
    - 🌎 [emscripten](https://github.com/emscripten-core/emscripten) - C/C++からJavaScript（WebAssembly）へのコンパイラ。 [[Website](https://emscripten.org/)]
- C++: Entity Component System
    - 🎉 [EntityX](https://github.com/alecthomas/entityx) - 高速かつ型安全なC++エンティティ・コンポーネントシステム
    - 🎉 [Entt](https://github.com/skypjack/entt) - ゲームが現代のC++と融合した、高速かつ信頼性の高いエンティティ・コンポーネントシステム
- C++: Fonts
    - 🎉 [HarfBuzz](https://github.com/harfbuzz/harfbuzz) - 文字整形ライブラリ。フォーマットされ位置づけられたグリフ出力
    - 🎉 [msdfgen](https://github.com/Chlumsky/msdfgen) - マルチチャンネル符号距離フィールド生成器
    - 💰 [Slug](http://sluglibrary.com) - 3Dアプリ向けの高品質で解像度に依存しないテキストおよびベクターグラフィックス
    - 🎉 [slughorn](https://github.com/AlphaPixel/slughorn) - _Slug_のテキスト／グラフィックスGPUレンダリングライブラリをプロジェクトに組み込むためのライブラリ
- C++: File Formats
    - ⭐ [Jpeg-Compressor](https://github.com/richgel999/jpeg-compressor) - 1ファイルで基盤を構成し、ベースラインJPEG圧縮画像を出力するライブラリ
    - 🎉 [TinyDNG](https://github.com/syoyo/tinydng) - ヘッダーのみのDNG／TIFFローダーおよびセーバー
    - 🎉 [TinyEXR](https://github.com/syoyo/tinyexr) - ミニマムだが強力な1ファイルWavefront OBJローダー
    - 🎉 [TinyGLTF](https://github.com/syoyo/tinygltf) - ヘッダーのみのC++11 tiny glTF 2.0ライブラリ。
    - 🎉 [TinyOBJLoader](https://github.com/tinyobjloader/tinyobjloader) - C++17で実装された_Dear ImGui_用のヘッダーのみのファイルブラウザ実装
- C++: File System
    - 🎉 [Imgui-Filebrowser](https://github.com/AirGuanZ/imgui-filebrowser) - Vulkanバックエンド、現代的なレンダラー、スクリプト、物理演算など
- C++: Game Engine w/Editor
    - 🎉 [AnKi 3D Engine](https://github.com/godlikepanos/anki-3d-engine) - VulkanバックエンドにPBRとスタイル化されたGUI（_CrystalWidgets_）を備えたシステム
    - 🔒 [Crown Engine](https://github.com/crownengine/crown) - データ駆動型の3Dおよび2Dゲームエンジン。
    - 🎉 [Crystal Engine](https://github.com/neelmewada/CrystalEngine) - 2D／3Dプロジェクト向けのクロスプラットフォーム対応。以前は _Supernova_ と呼ばれていた
    - 🎉 [Doriax](https://github.com/doriaxengine/doriax) - コードなしで構築された2.5Dゲームエンジン（_Qt_、OpenGL、_Chipmunk Physics_ を使用）
    - 🎉 [Drop Creator](https://github.com/scidian/drop) - クロスプラットフォーム対応の2D／3ドゲームエンジン
    - 🎉 [Echo](https://github.com/timi-liuliang/echo) - GameMakerと互換性のある2Dエンジン
    - 🔒 [Enigma](https://github.com/enigma-dev/enigma-dev) - 編集器を備えた高性能ゲームエンジンおよびAAA品質のアニメーショングラフ
    - 🎉 [Esoterica Engine](https://github.com/BobbyAnguelov/Esoterica) - 開発中のゲームエンジン
    - 🎉 [ezEngine](https://github.com/ezEngine/ezEngine) - マルチプラットフォーム対応の等高線ゲームエンジン
    - 🎉 [FIFE](https://github.com/fifengine/fifengine) - マルチプラットフォームの等角ゲームエンジン
    - 🎉 [G3D Innovation Engine](https://sourceforge.net/p/g3d/code/HEAD/tree/) - 学術および産業分野でのR&Dに使用されている。 [[Website](https://casual-effects.com/g3d/www/index.html)]
    - 🎉 [Irrlicht](https://sourceforge.net/projects/irrlicht/) - 20年以上にわたり開発が続けられているクロスプラットフォーム3Dエンジン。 [[Website](https://irrlicht.sourceforge.io/)]
    - 🎉 [Limon Engine](https://github.com/enginmanap/limonEngine) - 3D FPSゲームエンジンで、完全な動的ライトとシャドウをサポート
    - 🎉 [Lina Engine](https://github.com/inanevin/LinaEngine) - モジュラーなゲームエンジンで、3Dデスクトップゲームの開発を目的としたもの
    - 🎉 [Lumos](https://github.com/jmorton06/Lumos) - OpenGLおよびVulkanをサポートする、クロスプラットフォーム2D/3Dゲームエンジン
    - 🎉 [Lumix Engine](https://github.com/nem0/LumixEngine) - _Dear ImGui_をベースにしたエディタを備えた3Dゲームエンジン
    - 🎉 [MxEngine](https://github.com/asc-community/MxEngine) - 現代C++を用いた汎用3Dゲームエンジン
    - 🔒 [neoGFX](https://github.com/i42output/neogfx) - クロスプラットフォームアプリケーションおよびゲームエンジン
    - 🎉 [ÖbEngine](https://github.com/ObEngine/ObEngine) - _SFML_を用いて構築されたLuaスクリプトを備えた2Dエンジン
    - 🎉 [Overload](https://github.com/adriengivry/Overload) - 業界標準を参考にした、よくドキュメント化された3Dゲームエンジン
    - 🎉 [Razix Engine](https://github.com/Pikachuxxxx/Razix) - 生産パイプライン向けの高性能研究エンジン
    - 🎉 [Rootex](https://github.com/sdslabs/rootex) - 進行中のゲームを動かしている高度なC++3Dゲームエンジン
    - 🎉 [Skylicht](https://github.com/skylicht-lab/skylicht-engine) - オーディオ、物理、粒子などの機能をアップグレード。_Irrlicht_をベースに構築
    - 🎉 [Spartan Engine](https://github.com/PanosK92/SpartanEngine) - 品質とパフォーマンスへの強調
    - 🎉 [Torque 3D](https://github.com/GarageGames/Torque3D) - _The Forge_をベースにした高性能3Dエンジン
    - 🔒 [UPBGE](https://github.com/UPBGE/upbge) - _Blender_からフォークされたブレンドゲームエンジン
- C++: Game Framework
    - 🎉 [Acid](https://github.com/EQMG/Acid) - 現代C++17を用い、高速かつシンプルでモジュラーに構成
    - 🎉 [blah](https://github.com/NoelFB/blah) - 小型2Dゲームフレームワーク
    - 🎉 [Cocos2d-x](https://github.com/cocos2d/cocos2d-x) - インディーゲーム開発コミュニティで広く使われている
    - 🎉 [Cute Framework](https://github.com/RandyGaul/cute_framework) - 2Dゲームを作成するためのシンプルかつ簡潔なフレームワーク
    - 🔒 [Fireworks Engine](https://github.com/Pikachuxxxx/Fireworks-Engine) - 迅速なプロトタイピングに適した軽量OpenGLフレームワーク
    - 🎉 [Halley](https://github.com/amzeratul/halley) - 現代C++17。_Wargroove_（デスクトップおよびコンソール用の戦略ゲーム）に使用
    - 🎉 [is::Engine](https://github.com/Is-Daouda/is-Engine) - _SDL2_ および _SFML_ をベースにした2Dフレームワーク
    - 🎉 [JNGL](https://github.com/jhasse/jngl) - 2Dフレームワーク。どこでも開発し、どこでもデプロイ可能
    - 🔒 [KlayGE](https://github.com/gongminmin/KlayGE) - プラグインベースのクロスプラットフォームゲームフレームワーク
    - 🎉 [Koala Engine](https://github.com/phisko/kengine) - ECSアーキテクチャを採用したフレームワーク、つまり _Kengine_
    - 🎉 [Lumino](https://github.com/LuminoEngine/Lumino) - リアルタイムグラフィックスアプリの開発用フレームワーク
    - 🎉 [Nazara Engine](https://github.com/NazaraEngine/NazaraEngine) - カスタムシェーダー、ECS、2D/3D、ネットワークなど
    - 🎉 [nCine](https://github.com/nCine/nCine) - クロスプラットフォーム2Dゲームフレームワーク.
    - 🎉 [Octave](https://github.com/mholtkamp/octave) - GameCube、Wii、3DSなど用の3Dゲームエンジン
    - 🎉 [ORX](https://github.com/orx/orx) - 2.5Dデータ駆動型ゲーム開発フレームワーク
    - 🎉 [Oryol](https://github.com/floooh/oryol) - 小型で、3D、ポータブルかつ拡張可能なコーディングフレームワーク
    - ⭐ [Ouzel](https://github.com/elnormous/ouzel) - パブリックドメインであり、2Dゲーム開発に特化したフレームワーク
    - 🎉 [Polycode](https://github.com/ivansafrin/Polycode) - クリエイティブコード用のクロスプラットフォームエンジン
    - 🎉 [Solar2D](https://github.com/coronalabs/corona) - 反復と使用のしやすさを重視。以前は _Corona_ と呼ばれていた
    - 🎉 [Thunder](https://github.com/thunder-engine/thunder) - モジュールアーキテクチャを備えたクロスプラットド2D/3D
    - 🎉 [Two](https://github.com/hugoam/two) - ライブグラフィックスアプリおよびゲームの迅速開発を支援するツールキット
    - 🎉 [Urho3D](https://github.com/urho3d/Urho3D) - クロスプラットフォーム2D/3Dゲームフレームワーク
    - 💸 [Valve Source SDK](https://github.com/ValveSoftware/source-sdk-2013) - _[Valve Software](https://www.valvesoftware.com/)_による2013年版Source SDK。 [[Info](https://en.wikipedia.org/wiki/Source_(game_engine)) | [Wiki](https://developer.valvesoftware.com/wiki/Source_SDK_2013)]
- C++: Geometry
    - 🎉 [CinoLib](https://github.com/mlivesu/cinolib) - 多角形および多面体メッシュ処理用のヘッダーのみライブラリ
    - 🎉 [Delabella](https://github.com/msokalski/delabella) - 非常に安定した2Dデラウナイ triangulation
    - 🎉 [Delaunator-Cpp](https://github.com/soerendd/delaunator-cpp) - 2D点のデラウナイ三角化に特化した非常に高速なライブラリ
    - 🔒 [Easy3D](https://github.com/LiangliangNan/Easy3D) - 3Dモデリング、幾何学処理、レンダリングに便利なライブラリ
    - 🎉 [Extrude](https://github.com/stevinz/extrude) - 2D画像を3Dエクストルードメッシュに変換
    - 🔒 [Generator](https://github.com/ilmola/generator) - C++11用のプロシージャル幾何学生成分ライブラリ
    - 🎉 [Geometric Tools](https://www.geometrictools.com/index.html) - C++14における数学、幾何学、グラフィックス、画像解析および物理学
    - 🎉 [GeometronLib](https://github.com/LukasBanana/GeometronLib) - 3D形状（立方体、球体など）のメッシュとレーザー／幾何学の交差
    - 🔒 [Libigl](https://github.com/libigl/libigl) - シンプルな幾何学処理ライブラリ
    - 🎉 [MeshOptimizer](https://github.com/zeux/meshoptimizer) - メッシュを小さくし、レンダリングを速くするためのメッシュ最適化ライブラリ
    - 🎉 [Polygon Mesh Processing Library](https://github.com/pmp-library/pmp-library) - 多角形表面メッシュの処理および可視化
    - 🎉 [PolyPartition](https://github.com/ivanfratric/polypartition) - 2D多角形の分区および三角化
    - ⭐ [RamerDouglasPeucker](https://gist.github.com/TimSC/0813573d77734bcb6f2cd2cf6cc7aa51) - 2D線の沿いのポイント数を減らす
    - 🎉 [Recast & Detour](https://github.com/recastnavigation/recastnavigation) - ゲーム用ナビゲーションメッシュツールセット
    - 🎉 [Seam-aware Decimater](https://github.com/songrun/SeamAwareDecimater) - UVを保持しながらメッシュを簡略化
    - 🎉 [Spheres](https://github.com/caosdoar/spheres) - 球体メッシュを生成する4つの方法
    - 🔒 [Trimesh2](https://gfx.cs.princeton.edu/proj/trimesh2/) - 3D三角メッシュの入出力および操作用のユーティリティ
    - 🎉 [V-HACD](https://github.com/kmammou/v-hacd) - 3D表面を「近似凸」部分の集合に分解
- C++: Graphics - 2D
    - 🎉 [Blend2D](https://github.com/blend2d/blend2d) - 高性能2Dベクターグラフィックスエンジン。 [[Website](https://blend2d.com/)]
    - 🎉 [C++ Bitmap Library](https://github.com/ArashPartow/bitmap) - ビットマップの読み込みおよび操作を支援するライブラリ
    - 🎉 [QNanoPainter](https://github.com/QUItCoding/qnanopainter) - _Qt_用のOpenGL加速ベクタードラッグライブラリ（_NanoVG_で駆動）
    - 🎉 [Skia](https://github.com/google/skia) - Chromeで使用されている完全な2Dグラフィックスライブラリ。 _Google_ による。 [[Website](https://skia.org)]
    - 🎉 [vg-renderer](https://github.com/jdryg/vg-renderer) - _Bgfx_用の2Dベクターグラフィックスレンダラー（_NanoVG_のアイデアに基づく）
- C++: Graphics - 3D
    - 🎉 [Bgfx](https://github.com/bkaradzic/bgfx) - プラットフォームを越えて、グラフィックスAPIに依存しないレンダリングライブラリ
    - 🎉 [Dawn](https://dawn.googlesource.com/dawn) - WebGPUを動かす基本エンジン。 _Chromium_ による。 [[GitHub](https://github.com/google/dawn)]
    - 🎉 [Diligent Engine](https://github.com/DiligentGraphics/DiligentEngine) - 現代的なクロスプラットフォームグラフィックスAPI抽象化ライブラリ
    - 🎉 [Ember](https://github.com/strah19/Ember) - SDL2とOpenGLを用いたグラフィックスフレームワーク
    - 🎉 [Filament](https://github.com/google/filament) - _Google_ によるモバイル中心のリアルタイム物理ベースレンダリングエンジン
    - 🎉 [Forge](https://github.com/ConfettiFX/The-Forge) 🔥 - すべての主要プラットフォームおよびコンソールに対応するクロスプラットフォームレンダリングフレームワーク
    - 🎉 [Horde3D](https://github.com/horde3d/Horde3D) - 3Dレンダリングおよびアニメーションエンジン
    - 🎉 [Intermediate Graphics Library (IGL)](https://github.com/facebook/igl) - _Facebook_ によるクロスプラットフォーム抽象化レイヤー
    - 🎉 [LLGL](https://github.com/LukasBanana/LLGL) - OpenGL、Direct3D、Vulkan、Metalへの薄い抽象化レイヤー
    - 🎉 [Magnum Engine](https://github.com/mosra/magnum) - ゲームおよびアプリ向けのモジュラリーファイルC++11グラフィックスミドルウェア
    - 🎉 [NVRHI](https://github.com/NVIDIA-RTX/NVRHI) - _NVIDIA_ による複数のグラフィックスAPI上の抽象化レイヤー
    - 🎉 [Ogre](https://github.com/OGRECave/ogre) - シーン中心の柔軟な3Dエンジン
    - 🎉 [OSRE](https://github.com/kimkulling/osre) - ただの「オープンソースレンダリングエンジン」
    - 🔒 [StratusGFX](https://github.com/KTStephano/StratusGFX) - 現代的なグラフィックス技術を実装したリアルタイム3Dレンダリングエンジン
    - 🎉 [Threepp](https://github.com/markaren/threepp) - 人気の3DJavaScriptライブラリ_Three.js_（r129）のクロスプラットフォームC++17版。
    - 🎉 [trinity](https://github.com/carbonengine/trinity) - _Carbon Game Engine_ 用のレンダリングエンジン
    - 🎉 [Tungsten](https://github.com/tunabrain/tungsten) - C++11による高性能物理ベースレンダリングエンジン
    - 🎉 [Wicked Engine](https://github.com/turanszkij/WickedEngine) - パフォーマンスと現代的なレンダリング技術に焦点を当てるエンジン
- C++: Gui
    - 🎉 [Crazy Eddie's GUI](https://github.com/cegui/cegui) - 多プラットフォーム対応の柔軟なGUIライブラリ
    - 🎉 [Dear ImGui](https://github.com/ocornut/imgui) 🔥 - ブloatなしの即時モードGUIライブラリ。多くの他の言語に移植されている
    - 🔒 [FLTK](https://github.com/fltk/fltk) - 高速Light Toolkit、クロスプラットフォームGUI。 [[Website](https://www.fltk.org/)]
    - 🔒 [GTK](https://github.com/gnome/gtk) - GIMP Toolkit、マルチプラットフォームでGUIを作成するためのツールキット
    - 🎉 [GuiLite](https://github.com/idea4good/GuiLite) - ヘッダーのみのクロスプラットフォームGUIライブラリ
    - 📚 [List of C++ UI Libraries](https://philippegroarke.com/posts/2018/c++_ui_solutions/) - C++のGUIライブラリ一覧、写真と説明付き
    - 🎉 [Litehtml](https://github.com/litehtml/litehtml) - 軽量なHTML / CSSレンダリングエンジン
    - 🎉 [Nana](https://github.com/cnjinhao/nana) - 現代C++によるクロスプラットフォームGUIライブラリ
    - ⭐ [Portable File Dialogs](https://github.com/samhocevar/portable-file-dialogs) - Windows、macOS、LinuxにおけるC++11ネイティブのシングルヘッダーダイアログ
    - 🔒 [Qt](https://github.com/qt) - 業界標準GUIライブラリ。 [[Awesome](https://github.com/mikeroyal/Qt-Guide) | [Website](https://www.qt.io)]
    - ⭐ [RmlUi](https://github.com/mikke89/RmlUi) - HTML / CSSソースファイルを頂点と描画命令に変換する。 [[Docs](https://mikke89.github.io/RmlUiDoc/)]
    - ⭐ [Turbo Badger](https://github.com/fruxo/turbobadger) - ハードウェアアクセラレーションアプリおよびゲーム向けGUIライブラリ。 [[Oryol Example](https://floooh.github.io/oryol-samples/wasm/TurboBadgerDemo.html)]
    - 🔒 [Wt](https://github.com/emweb/wt) - 現代C++によるWebGUIライブラリ。 [[Website](https://www.webtoolkit.eu/wt)]
    - 🔒 [wxWidgets](https://github.com/wxWidgets/wxWidgets) - ネイティブコントロールを用いたクロスプラットフォームGUI。 [[Website](https://wxwidgets.org)]
- C++: Input
    - 🎉 [Gainput](https://github.com/jkuhlmann/gainput) - 使いやすい入力ライブラリ
    - 🎉 [OIS](https://github.com/wgois/OIS) - オブジェクト指向の入力システム。多くのオペレーティングシステムと互換性がある
    - 🎉 [Oryol Input](https://github.com/floooh/oryol/tree/043683dcb3181beb64ae1c85ea76e4a4eb71c124/code/Modules/Input) - _Oryol_ゲームフレームワークから導入された入力モジュール
- C++: Layout
    - 🎉 [Yoga](https://github.com/facebook/yoga) - Facebookによるクロスプラットフォーム [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) レイアウトエンジン。 [[Website](https://yogalayout.com/)]
- C++: Libraries
    - 🎉 [Boost Libraries](https://github.com/boostorg) - 幅広いC++ライブラリ、多くがSTLに含まれる。 [[Website](https://www.boost.org)]
    - 🎉 [cyCodeBase](https://github.com/cemyuksel/cyCodeBase) - 数学、幾何学、画像およびグラフィックスユーティリティを備えたコンパクトな基礎ライブラリ
    - 📚 [Gamedev Libraries](https://github.com/raizam/gamedev_libraries) - ゲーム開発用のオープンソースC/C++ライブラリのコレクション
    - 📚 [Inqlude](https://inqlude.org) - _Qt_ベースのアプリ開発者向けのライブラリ一覧
    - 📚 [List of Open Source C++ Libraries](https://en.cppreference.com/w/cpp/links/libs) - オープンソースC++ライブラリの包括的な一覧
    - 📚 [NVIDIA GameWorks](https://github.com/NVIDIAGameWorks) - _NVIDIA_が提供するゲームおよびアプリ開発向け技術
- C++: Lighting
    - 🎉 [Thekla Atlas](https://github.com/Thekla/thekla_atlas) - アトラス生成ツール
    - 🎉 [UVAtlas](https://github.com/Microsoft/UVAtlas) - テクスチャアトラスの作成とパッキングに用いるDirectXライブラリ
- C++: Math
    - 🎉 [OpenGL Mathematics](https://github.com/g-truc/glm) - グラフィックスソフトウェア向けのヘッダーのみの数学ライブラリ
- C++: Network
    - 🎉 [Cpp-HttpLib](https://github.com/yhirose/cpp-httplib) - C++11におけるシングルヘッダーHTTPサーバーおよびクライアントライブラリ
    - 🎉 [GameNetworkingSockets](https://github.com/ValveSoftware/GameNetworkingSockets) - UDPを介したメッセージ、P2Pネットワーク、暗号化
    - 🎉 [yojimbo](https://github.com/mas-bandwidth/yojimbo) - クライアント/サーバー型ゲーム向けネットワークライブラリ
- C++: Physics
    - 🎉 [Box2D](https://github.com/erincatto/box2d) - バトルテストされた2D物理シミュレーション。 [[Docs](https://box2d.org/documentation/) | [Fixed Time-Step](https://www.unagames.com/blog/daniele/2010/06/fixed-time-step-implementation-box2d) | [Tutorials](http://www.iforce2d.net/b2dtut/introduction)]
    - 🎉 [Box3D](https://github.com/erincatto/box3d) - _Box2D_の開発者によるゲーム用3D物理エンジン
    - 🎉 [Bullet Physics](https://github.com/bulletphysics/bullet3) - 人気のある3D物理ライブラン
    - 🎉 [Chrono](https://github.com/projectchrono/chrono) - 高性能な多物理・多体動力学シミュレーション。[[Gallery](https://projectchrono.org/gallery/)]
    - 🎉 [Edyn](https://github.com/xissburg/edyn) - マルチスレッド・ネットワーク対応の物理エンジン。大規模動的ワールドをサポート。[[Testbed](https://github.com/xissburg/edyn-testbed)]
    - 🎉 [Jolt Physics](https://github.com/jrouwe/JoltPhysics) - マルチコア対応の3D剛体物理および衝突検出エンジン
    - 🎉 [Liquid Fun](https://github.com/google/liquidfun) - _Box2D_の拡張。粒子ベースの流体およびソフトボディを追加。[[Demos](http://google.github.io/liquidfun/)]
    - 🎉 [Newton Dynamics](https://github.com/MADEAPPS/newton-dynamics/) - 3D環境のリアルタイムシミュレーション
    - 🎉 [ODE](https://bitbucket.org/odedevs/ode/src/master/) - オープンダイナミクスエンジン、3D剛体物理。[[Wikipedia](https://en.wikipedia.org/wiki/Open_Dynamics_Engine)]
    - 🎉 [Qu3e](https://github.com/RandyGaul/qu3e) - ゲームに用いられる高速3D物理エンジン
    - 🎉 [ReactPhysics3D](https://github.com/DanielChappuis/reactphysics3d) - 3D物理エンジン
    - 🎉 [Slingshot](https://github.com/Slingshot-Physics/slingshot-community) - 3D剛体動力学用の制約ベース物理エンジン
- C++: Reflection
    - 🎉 [Boost.PFR](https://github.com/boostorg/pfr) - Boostライブラリに含まれる基本的な反射C++14ライブラリ
    - 🎉 [Magic Enum](https://github.com/Neargye/magic_enum) - ヘッダーのみのC++17、enumに対する静的反射を提供
    - 🎉 [Meta](https://github.com/skypjack/meta) - ヘッダーのみのC++17、非侵襲的かつマクロなしの実行時反射システム
    - 🎉 [Nameof](https://github.com/Neargye/nameof) - ヘッダーのみのC++17、変数名を取得するnameofマクロを提供
    - 🎉 [Ponder](https://github.com/billyquith/ponder) - C++17のクラスとオブジェクトを公開し、データとして利用可能にする
    - 🎉 [Reflect](https://github.com/stevinz/reflect) - C++11における実行時反射およびメタデータ用の小型で柔軟なシングルヘッダーライブラリ
    - 🎉 [RTTR](https://github.com/rttrorg/rttr) - C++11における反射
- C++: Scripting
    - 🎉 [AngelScript](http://www.angelcode.com/angelscript/) - マルチプラットフォームスクリプティングライブラリ、C/C++の広く知られた構文を採用
    - 🔒 [ArkScript](https://github.com/ArkScript-lang/Ark) - 小型で高速な機能型およびスクリプティング言語
    - 🎉 [ChaiScript](https://github.com/ChaiScript/ChaiScript) - C++17に直接対応する埋め込みスクリプティング言語
    - 🎉 [GameMonkey Script](https://github.com/publicrepo/gmscript) - アプリ、ツール、ゲーム向けの埋め込みスクリプティング言語
    - 🎉 [v8](https://github.com/v8/v8) - _Google_による高性能JavaScriptおよびWebAssemblyエンジン
- C++: Serialization
    - 🎉 [Cap'n Proto](https://github.com/capnproto/capnproto) - 高速データ交換フォーマットおよび機能ベースのRPCシステム
    - 🎉 [Cereal](https://github.com/USCiLab/cereal) - ヘッダーのみのC++11シリアル化ライブラリ
    - 🎉 [Cista++](https://github.com/felixguendling/cista) - シンプルかつ高性能なシリアル化および反射ライブラリ
    - 🎉 [FlatBuffers](https://github.com/google/flatbuffers) - _Google_による効率的なマルチプラットフォームシリアル化ライブランリ
    - 🎉 [JSON for Modern C++](https://github.com/nlohmann/json) - Modern C++におけるJSONサポート
    - 🎉 [Protobuf](https://github.com/protocolbuffers/protobuf) - _Google_によるプラットフォーム非依存シリアル化データ用のプロトコルバッファーズ
    - 🎉 [RapidJSON](https://github.com/Tencent/rapidjson/) - 高速JSONパーサー／ジェネレーター
- C++: Terrain
    - 🎉 [Terra Forge 3D](https://github.com/Jaysmito101/TerraForge3D) - プロシージャル3D地形生成およびテクスチャリングツール
- C++: Utility
    - 🎉 [Any-Lite](https://github.com/martinmoene/any-lite) - C++98以降のヘッダーのみの'any'型。
    - 🎉 [EASTL](https://github.com/electronicarts/EASTL/) - Electronic ArtsのSTLリプレース、パフォーマンスに重点を置いたもの
    - 🎉 [faker-cxx](https://github.com/cieslarmichal/faker-cxx) - C++20 Fakerライブラリ。テストおよび開発用に仮の（しかし現実的な）データを生成。
    - 🎉 [Parallel Hashmap](https://github.com/greg7mdp/parallel-hashmap) - ヘッダーのみの高速かつメモリ効率の良いハッシュマップおよび二分木コンテナ
    - 🎉 [Spdlog](https://github.com/gabime/spdlog) - 高速ログライブラリ
    - 🎉 [Tiny-Process-Library](https://gitlab.com/eidheim/tiny-process-library) - 新しいプロセスの作成と終了を簡単に行えるようにする
    - 🎉 [TinyXML-2](https://github.com/leethomason/tinyxml2) - 他のプログラムに簡単に統合できるXMLパーサー
- C++: Visual Programming / Nodes
    - 🎉 [NodeEditor](https://github.com/paceholder/nodeeditor) - _Qt_で構築されたグラフ制御データ処理
    - 🎉 [QuickQanava](https://github.com/cneben/QuickQanava) - _QtQuick_ベースのアプリでグラフを表示し、関係データを可視化、C++14で実装
    - 🎉 [Visual Script Engine](https://github.com/kovacsv/VisualScriptEngine) - 埋め込み用に設計されたビジュアルスクリプティングエンジン

### C# <a id="c-2"></a>
- 📚 [Awesome C-Sharp](https://github.com/uhub/awesome-c-sharp) - 素晴らしいC#フレームワーク、ライブラリ、ソフトウェアの一覧
- 📚 [Awesome .NET](https://github.com/quozd/awesome-dotnet) - 素晴らしい.NETライブラリ、ツール、フレームワーク、ソフトウェアのコレクション
- 📚 [Dot Net Perls](https://www.dotnetperls.com) - C#言語のリファレンス
- C#: App Framework
    - 🎉 [ATF](https://github.com/SonyWWS/ATF) - Windows向けツール作成用のコンポーネント。2005年から開始。
- C#: Audio
    - 🎉 [NAudio](https://github.com/naudio/NAudio) - .NET向けのオーディオおよびMIDIライブラリ
- C#: Cross-Platform
    - 🌎 [Blazor](https://github.com/dotnet/aspnetcore/blob/main/src/Components/README.md) - _Microsoft_によるC#からJavaScript（WebAssembly）への技術。[[Website](https://github.com/stevinz/awesome-game-engine-dev/blob/f7f76faaf7f78ab3c5f24cbe10e7b9a83a205a4b/(https:/dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor))]
    - 🎉 [h5](https://github.com/curiosity-ai/h5) - 次世代C#からJavaScriptへのコンパイラ
    - 🎉 [Mono](https://github.com/mono/mono) - _Microsoft_の.NET Frameworkのオープンソース実装
- C#: Entity Component System
    - 🎉 [Arch](https://github.com/genaray/Arch) - オプションでマルチスレッドをサポートする高性能ECS
    - 🎉 [DefaultEcs](https://github.com/Doraku/DefaultEcs) - ゲーム開発向けのECSフレームワーク
    - 🎉 [friflo ECS](https://github.com/friflo/Friflo.Engine.ECS) - 高性能C# ECS
    - 🎉 [LeoECS](https://github.com/Leopotam/ecs) - _Unity_とのオプション統合をサポートするC#ベースのECSフレームドワーク
- C#: Game Engine w/Editor
    - 🎉 [Duality](https://github.com/AdamsLair/duality) - モジュラー2Dエンジン。_OpenTK_で構築されたエディタ。
    - 🎉 [Flat Red Ball](https://github.com/vchelaru/FlatRedBall) - 2Dゲームエンジンおよび設計ツール。_MonoGame_で構築。[[Website](https://flatredball.com/)]
    - 🎉 [Murder](https://github.com/isadorasophia/murder) - ピクセルアートベースのECSゲームエンジン。_MonoGame_上に構築。[[Docs](https://isadorasophia.com/murder/)]
    - 🎉 [Prowl](https://github.com/ProwlEngine/Prowl) - _Unity_にインスパイアされた3Dゲームエンジン。
    - 🎉 [Stride](https://github.com/stride3d/stride) - 現実的なレンダリングおよびVR用ゲームエンジン。以前は_Xenko_。[[Website](https://www.stride3d.net/)]
    - 💸 [Unity](https://store.unity.com/) - ゲームエンジンの最も有名な名前。業界標準。
- C#: Game Framework
    - 🎉 [FNA](https://github.com/FNA-XNA/FNA) - マイクロソフトXNAゲームスタジオ4.0ライブラリの再実装。
    - 🎉 [Monofoxe](https://github.com/Martenfur/Monofoxe) - _MonoGame_との連携を簡単にするように設計されたゲームエンジン。
    - 🎉 [MonoGame](https://github.com/MonoGame/MonoGame) 🔥 - 跨プラットフォームゲーム開発用のフレームワーク。[[Website](https://www.monogame.net/)]
    - 🎉 [Nez](https://github.com/prime31/Nez) - _MonoGame_に基づく豊富な2Dフレームワーク。
    - 🎉 [Protogame](https://github.com/RedpointGames/Protogame) - 跨プラットフォーム2D/3Dゲームエンジン。_MonoGame_で構築。
- C#: Geometry
    - 🎉 [DotRecast](https://github.com/ikpil/DotRecast) - _Recast & Detour_のポート。ゲーム、Unity3D、サーバー、C#向けのナビゲーションメッシュツールセット。
- C#: Graphics - 2D
    - 🎉 [ImageSharp](https://github.com/SixLabors/ImageSharp) - .NET向けの現代的かつマルチプラットフォーム2Dグラフィックスライブラリ。
- C#: Graphics - 3D
    - 🎉 [OpenTK](https://github.com/opentk/opentk) - Open Toolkit、OpenGL用のC#バインディング。[[LearnOpenTK](https://github.com/opentk/LearnOpenTK)]
    - 🎉 [Veldrid](https://github.com/mellinoe/veldrid) - マルチプラットフォームかつグラフィックスAPIに依存しない、.NET向けのレンダリングおよびコンピュートライブラリ。
- C#: Gui
    - 🎉 [Apos.Gui](https://github.com/Apostolique/Apos.Gui) - _MonoGame_向けのUIライブラリ。
    - 🎉 [Avalonia](https://github.com/AvaloniaUI/Avalonia) - .NET用の跨プラットフォームGUIフレームワーク。[[Website](https://avaloniaui.net/)]
    - 🎉 [GeonBit.UI](https://github.com/RonenNess/GeonBit.UI) - _MonoGame_プロジェクト向けのGUI。
    - 🎉 [MGUI](https://github.com/Videogamers0/MGUI) - _MonoGame_ゲームフレームワーク向けのUIフレームワーク。
    - 🎉 [MonoGame.Forms](https://github.com/BlizzCrafter/MonoGame.Forms) - _MonoGame_用のWindows Forms向けレンダリングウィンドウ。
    - 🎉 [Myra](https://github.com/rds1983/Myra) - _Mono、FNA_、_Stride_向けのGUIライブラリ。
    - 🎉 [Squid](https://github.com/Roderik11/Squid) - C#によるリアルタイムGUIシステム。
    - 🎉 [Uno](https://github.com/unoplatform/uno) - モバイル、デスクトップおよびWebAssembly用のGUIライブラリ。[[Website](https://platform.uno/)]
    - 🎉 [VellumUI](https://github.com/notgiven688/vellum) - フォントレンダリングを備えた軽量の即時モードGUIライブラリ。
- C#: Layout
    - 🎉 [Gum](https://github.com/vchelaru/Gum) - あらゆるプラットフォームでUIを作成するための柔軟なレイアウトツール。
- C#: Physics
    - 🎉 [Aether Physics](https://github.com/tainicom/Aether.Physics2D) - 連続衝突検出を備えた2D物理ライブラリ。
    - 🎉 [Box2D.NET](https://github.com/ikpil/Box2D.NET) - Box2Dのポート。ゲーム、.NET C#、Unity3D、サーバー向けの2D物理エンジン。
    - 🎉 [Jitter Physics 2](https://github.com/notgiven688/jitterphysics2) - 高速かつシンプルで依存関係のない物理エンジン。
    - 🎉 [Velcro Physics](https://github.com/Genbox/VelcroPhysics) - Box2DのC#版。以前は_Farseer Physics_と呼ばれていた。
- C#: Utility
    - 🎉 [Facepunch.Steamworks](https://github.com/Facepunch/Facepunch.Steamworks) - Steamworksの実装。
    - 🎉 [Monogame.Extended](https://github.com/MonoGame-Extended/Monogame-Extended) - _MonoGame_をより素晴らしいものにするための拡張機能のリスト

### Dart <a id="dart"></a>
- 📚 [Awesome Dart](https://github.com/yissachar/awesome-dart) - 素晴らしいDartフレームワーク、ライブラリ、ソフトウェアの厳選リスト
- 🌎 [Dart](https://dart.dev) - プラットフォームに問わず高速アプリケーションに最適化された言語。[[GitHub](https://github.com/dart-lang/)]
- Dart: App Framework
    - 🎉 [Flutter](https://flutter.dev) - _Google_ によるオープンソースアプリフレームワーク。 [[Awesome](https://github.com/Solido/awesome-flutter) | [GitHub](https://github.com/flutter)]
- Dart: File Formats
    - 🎉 [image](https://github.com/brendan-duncan/image) - 画像フォーマットのデコード／エンコードや画像処理に使うライブラリ
- Dart: Game Framework
    - 🎉 [Flame](https://github.com/flame-engine/flame) - ミニマリズムを採用した _Flutter_ をベースとした2Dゲームエンジン。 [[Awesome](https://github.com/flame-engine/awesome-flame) | [Examples](https://examples.flame-engine.org/) | [Website](https://flame-engine.org/)]

### F# <a id="f"></a>
- 📚 [Awesome F#](https://github.com/fsprojects/awesome-fsharp) - フレームワーク、ライブラリ、ソフトウェアおよびリソースの厳選リスト
- 🌎 [F#](https://fsharp.org) - .NET向けの機能中心の言語で、表現力の高いコードと並列処理を優先
- F#: Audio
    - 🔒 [FSound](https://github.com/albertp007/FSound) - 音声処理用のライブラリ
- F#: Entity Component System
    - 🎉 [Garnet](https://github.com/bcarruthers/garnet) - ECSとアクターのようなメッセージ機能を備えたゲーム作成用ライブラリ
- F#: Game Engine w/Editor
    - 🎉 [Nu Game Engine](https://github.com/bryanedds/Nu) - 機能的スタイルで構築されたクロスプラットフォームゲームエンジン
- F#: Gui
    - 🎉 [Fabulous](https://github.com/fabulous-dev/Fabulous) - クロスプラットフォームアプリ向けの宣言型UIフレームワーク

### Go <a id="go"></a>
- 📚 [Awesome Go](https://github.com/avelino/awesome-go) - 素晴らしいGoフレームワーク、ライブラリ、ソフトウェアのリスト
- 🌎 [Go](https://go.dev/) - 静的型付け、コンパイル型のプログラミング言語。_Google_ で設計された。 [[GitHub](https://github.com/golang)]
- Go: Audio
    - 🎉 [Beep](https://github.com/faiface/beep) - 再生と音声処理
- Go: Game Engine w/Editor
    - 🎉 [G3N](https://github.com/g3n/engine) - OpenGLベースの3Dゲームエンジン
- Go: Game Framework
    - 🎉 [Ebitengine](https://github.com/hajimehoshi/ebiten) - 非常にシンプルな2Dゲームライブラリ
    - 🎉 [Engo](https://github.com/EngoEngine/engo) - 2Dゲーム用のフレームワーク
    - 🎉 [Pixel](https://github.com/faiface/pixel) - 手作りの2Dゲームライブラリ。 [[Examples](https://github.com/faiface/pixel-examples)]
- Go: Geometry
    - 🎉 [3D Mesh Simplification](https://github.com/fogleman/simplify) - 3Dメッシュの簡略化
- Go: Graphics
    - 🎉 [ln](https://github.com/fogleman/ln) - 3Dラインアートエンジン、ベクターベースの3Dレンダラー。 [[Docs](https://pkg.go.dev/github.com/fogleman/ln/ln)]

### Haxe <a id="haxe"></a>
- 📚 [Awesome Haxe](https://github.com/nadako/awesome-haxe) - 非常に便利なHaxeリンクの厳選リスト
- 📚 [Awesome Haxe Game Dev](https://github.com/Dvergar/awesome-haxe-gamedev) - Haxe向けのゲーム開発リソースの素晴らしいリスト
- 🌎 [Haxe](https://haxe.org) - クロスプラットフォームでのネイティブコードを生成。 [[GitHub](https://github.com/HaxeFoundation/haxe)]
- 📚 [Haxe Blog: Game Engine](https://kircode.com/post/how-i-wrote-my-own-3d-game-engine-and-shipped-a-game-with-it-in-20-months) - 「20ヶ月で自作3Dゲームエンジンを完成し、ゲームをリリースした話」
- 📚 [Haxe Blog: OpenFL](https://www.gamedeveloper.com/programming/flash-is-dead-long-live-openfl-) - "Flashは死んだ、OpenFLが生き残れ"
- Haxe: Animation
    - 🎉 [Actuate](https://github.com/jgranick/actuate) - 柔軟で高速なTweenライブラリ
    - 🎉 [DragonBones](https://github.com/openfl/dragonbones) - _DragonBones_の骨格アニメーション用のランタイムサポート
    - 🎉 [Spine-Hx](https://github.com/jeremyfa/spine-hx) - _Spine_ ランタイム for Haxe.
- Haxe: App Framework
    - 🎉 [Lime](https://github.com/haxelime/lime) - Haxeのクロスプラットフォーム開発者向けに柔軟で軽量なレイヤー.
    - 🎉 [nme](https://github.com/haxenme/nme) - Haxeプロジェクト向けのクロスプラットフォームネイティブバックエンド.
- Haxe: Cross-Platform
    - 🎉 [HashLink](https://github.com/HaxeFoundation/hashlink/) - Haxe用の仮想マシン.
- Haxe: Entity Component System
    - 🎉 [Ecx](https://github.com/eliasku/ecx) - Haxe用のエンティティ・コンポーネントシステムフレームワーク.
    - 🎉 [GASM](https://github.com/HacksawStudios/GASM) - Haxe用のフレームワークに依存しないエンティティ・コンポーネントシステムフレームワーク.
- Haxe: Game Engine w/Editor
    - 🎉 [Armory](https://github.com/armory3d/armory) - _Blender_ との完全統合を備えた3Dゲームエンジン.
    - 🎉 [Away3D](https://github.com/openfl/away3d) - OpenFL 用のリアルタイム3Dエンジン。 [[Website](http://away3d.com)]
    - 🎉 [Flixel-Studio](https://github.com/Dovyski/flixel-studio) - _HaxeFlixel_ 用の埋め込み型、ゲーム内エディタ.
    - 🎉 [Hide](https://github.com/heapsio/hide) - _Heaps_ 3Dグラフィックエンジン向けの拡張可能なIDE.
    - 🎉 [LDtk](https://github.com/deepnight/ldtk) 🔥 - モダンで軽量かつ効率的な2Dレベルエディタ。 [[Website](https://ldtk.io)]
    - 🎉 [Starling](https://github.com/openfl/starling) - 人気のある（_Angry Birds_）2Dゲームエンジン。_OpenFL_ をベースに構築。 [[Editor](http://starlingbuilder.github.io) | [Website](https://gamua.com/starling/)]
- Haxe: Game Framework
    - 🎉 [Ceramic](https://github.com/ceramic-engine/ceramic) - クロスプラットフォーム2Dフレームワーク。 [[Examples](https://ceramic-engine.com/examples/)]
    - 🎉 [Citrus](https://github.com/DaVikingCode/Citrus-Engine) - ActionScript 3をベースとした2D/3Dフレームワーク。 [[Website](http://citrusengine.com/)]
    - 🎉 [Clay](https://github.com/clay2d/clay) - クロスプラットフォーム2Dゲームフレームワーク.
    - 🎉 [gameBase](https://github.com/deepnight/gameBase) - _Heaps_ グラフィックスフレームワークを用いたHaxeゲームのベース構造。 [[Tutorial](https://deepnight.net/tutorial/using-my-gamebase-to-create-a-heaps-game/)]
    - 🎉 [HaxeFlixel](https://github.com/HaxeFlixel/flixel) - _OpenFL_ をベースにしたクロスプラットフォーム2Dゲームフレームワーク。 [[Website](https://haxeflixel.com/)]
    - 🎉 [OpenFL](https://github.com/openfl/openfl) - API のオープンソース実装。 [Adobe Flash](https://en.wikipedia.org/wiki/Adobe_Flash) [[Website](https://www.openfl.org/)]
- Haxe: Graphics
    - 🎉 [Heaps](https://github.com/HeapsIO/heaps) 🔥 - クロスプラットフォーム2D/3Dエンジン（_Haxe_ の開発者による）。 [[Website](https://heaps.io)]
    - 🎉 [Kha](https://github.com/Kode/Kha) - 超軽量かつ高性能なマルチメディアフレームワーク.
    - 🎉 [Sparkler](https://github.com/AndreiRudenko/sparkler) - モジュール化されたマクロを活用した粒子システム.
- Haxe: Gui
    - 🎉 [HaxeUI](https://github.com/haxeui/haxeui-core) - クロスプラットフォーム対応のスタイル可能GUIコンポーネントセット.
    - 🎉 [Zui](https://github.com/armory3d/zui) - _ArmorPaint_ で使用される即時モードユーザーインターフェース.
- Haxe: Libraries
    - 📚 [HaxeLibs](https://lib.haxe.org/all) - Haxeウェブサイトにアップロードされたすべてのライブラリの一覧.
    - 📚 [HaxeTink](https://github.com/haxetink) - Haxe向けのさまざまなアドオンライブラリ.
    - 🌎 [Snowkit](https://github.com/snowkit) - Haxe開発者の集まり.
- Haxe: Physics
    - 🎉 [Haxe Bullet](https://github.com/armory3d/haxebullet) - _Bullet 3D_ フィジックスバインディング for Haxe.
    - 🎉 [HeapsIO/bullet](https://github.com/HeapsIO/bullet) - _Bullet 3D_ フィジックス for _Heaps_ (Haxeのネイティブ低レベルゲームフレームワーク).
    - 🎉 [Jelly Physics](https://github.com/michaelapfelbeck/jellyPhysics) - ソフトボディ2Dフィジックスエンジン.
    - 🎉 [Nape](https://github.com/HaxeFlixel/nape-haxe4) - 高速かつ使いやすい2D剛体物理学エンジン。 [[Demos](https://joecreates.github.io/napephys/)]
- Haxe: Serialization / Storage
    - 🎉 [CastleDB](https://github.com/ncannasse/castle) - 構造化されたデータベースに、ローカルWebサービスで編集可能
    - 🎉 [Format](https://github.com/HaxeFoundation/format) - Haxe向けにさまざまなファイルフォーマットをサポート
    - 🎉 [HxBit](https://github.com/HeapsIO/hxbit) - バイナリシリアライゼーションとネットワーク同期用のライブラリ
- Haxe: Utility
    - 🎉 [hexMachina](https://github.com/DoclerLabs/hexCore) - 強力なモジュール化MVCフレームワーク。 [[Website](http://hexmachina.org/)]
    - 🎉 [HxColorToolkit](https://github.com/andyli/hxColorToolkit) - 色変換および色テーマ生成用のライブラリ
    - 🎉 [HxMath](https://github.com/tbrosman/hxmath) - Haxe言語向けゲーム用数学ライブラリ
    - 🎉 [SteamWrap](https://github.com/larsiusprime/SteamWrap) - Haxe用のSteam APIネイティブ拡張
- Haxe: Visual Programming / Nodes
    - 🎉 [Haxe-Blockly](https://github.com/nickmain/haxe-blockly) - [Blockly](https://developers.google.com/blockly) のHaxe用ラッパー

### Lua <a id="lua"></a>
- 📚 [Awesome Lua](https://github.com/LewisJEllis/awesome-lua) - 素晴らしいLuaパッケージとリソース
- Lua: Game Framework
    - 🎉 [3DreamEngine](https://github.com/3dreamengine/3DreamEngine) - _LÖVE_ 上に構築された3Dエンジン。
    - 🎉 [Gideros](https://github.com/gideros/gideros) - Luaで開発する2D/3Dクロスプラットフォームゲーム。 [[Website](http://giderosmobile.com/)]
    - 🎉 [INSTEAD](https://github.com/instead-hub/instead) - シンプルなテキストアドベンチャーインタープリターサイド
    - 🎉 [LÖVE](https://github.com/love2d/love) - Luaでゲームコードを書くための2Dフレームワーク。 [[Awesome](https://github.com/love2d-community/awesome-love2d) | [Website](https://love2d.org)]
    - 🎉 [Vectarine](https://github.com/vanyle/vectarine) - LuaおよびLuauで高速プロトタイピング可能なクロスプラットフォームゲームエンジン。 [[Website](http://vectarine.surge.sh/)]

### Java <a id="java"></a>
- 📚 [Awesome Java](https://github.com/akullpp/awesome-java) - Java向け素晴らしいフレームワーク、ライブラリ、ソフトウェア
- 🌎 [Java](https://dev.java) - 一般用途の言語。上で実行。 [Java virtual machines](https://en.wikipedia.org/wiki/Java_virtual_machine) [[GitHub](https://github.com/openjdk)]
- 📚 [Learn Java](https://dev.java/learn/) - 公式ドキュメントとチュートリアル
- 📚 [OpenGL & GLSL Tutorials](https://github.com/mattdesl/lwjgl-basics/wiki) - _LWJGL_および_libGDX_向けOpenGL/GLSLチュートリアル
- Java: Game Engine w/Editor
    - 🎉 [Alice 3](https://github.com/TheAliceProject/alice3) - _Carnegie Mellon_によるプログラミングとアニメーションを教えるブロックベース3Dエンジン
- Java: Game Framework
    - 🎉 [jMonkeyEngine](https://github.com/jMonkeyEngine/jmonkeyengine) - 現代的な3Dゲーム開発ツールセット
    - 🎉 [libGDX](https://github.com/libgdx/libgdx) - _LWJGL_に基づいて構築され、それに追加されたゲームフレームワーク。 [[Awesome](https://github.com/rafaskb/awesome-libgdx) | [Website](https://libgdx.com/)]
    - 🎉 [LWJGL](https://github.com/LWJGL/lwjgl3) - グラフィックス、音声、並列計算、XRなど。 [[Website](https://www.lwjgl.org/)]
- Java: Gui
    - 🎉 [VisUI](https://github.com/kotcrab/vis-ui) - _libGDX_用のUIツールキット

### JavaScript <a id="javascript"></a>
- 📚 [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript) - ブラウザ側JavaScriptライブラリとリソースのコレクション
- 📚 [Eloquent JavaScript](https://eloquentjavascript.net) - 現代的なJavaScriptプログラミング、例を含む
- 🌎 [MDN](https://developer.mozilla.org/en-US/) - Mozilla開発者ネットワーク、優れた学習リソース
- 🌎 [W3 Schools](https://www.w3schools.com/default.asp) - 世界最大のウェブ開発者サイトでプログラミングを学ぶ
- JavaScript: Animation
    - 🎉 [Animate.css](https://github.com/animate-css/animate.css) - 即時使用可能な純粋CSSアニメーション。 [[Examples](https://animate.style/)]
    - 🎉 [D3.js](https://github.com/d3/d3) - データ駆動型ドキュメント。SVG、キャンバス、HTMLでデータを生き生きと表現。 [[Examples](https://observablehq.com/@d3/gallery) | [Website](https://d3js.org)]
    - 💸 [GreenSock](https://github.com/greensock/GSAP) - 堅牢なアニメーションツールセット。 [[Website](https://greensock.com)]
    - 🎉 [Ossos](https://github.com/sketchpunklabs/ossos) - ウェブベースのキャラクタアニメーションシステム
    - 🎉 [React-Spring](https://github.com/pmndrs/react-spring) - スプリング物理ベースのReactアニメーションライブラリ
    - 🎉 [Scene.js](https://github.com/daybrush/scenejs) - JavaScript と CSS を使う、タイムラインベースのアニメーションライブラリ
    - 🎉 [Theatre](https://github.com/theatre-js/theatre) - ウェブ向けのモーショングラフィック編集ツール
    - 🎉 [Tween.js](https://github.com/tweenjs/tween.js) - ロバート・ペンナーの式を用いた簡単なアニメーションのためのウェンティングエンジン
    - 🎉 [TweenJS](https://github.com/CreateJS/TweenJS) - _CreateJS_ シリーズの一部として提供される、ウェンティング／アニメーションライブラリ
- JavaScript: Audio
    - 🎉 [Howler.js](https://github.com/goldfire/howler.js) - すべてのプラットフォームで安定して動作する、簡単で信頼性の高いオーディオ処理
    - 🎉 [PixiJS Sound](https://github.com/pixijs/sound) - _PixiJS_に基づいたフィルタ付き音声ライブラリ。 [[Examples](https://pixijs.io/sound/examples/)]
    - 🎉 [SoundJS](https://github.com/CreateJS/SoundJS) - シンプルなAPIと強力な機能を備えたライブラリ、_CreateJS_ シリーズの一部
    - 🎉 [Sonant-X](https://github.com/nicolas-van/sonant-x) - 小型JavaScriptシンセサイザーライブラリ。 [[Online Composer](https://nicolas-van.github.io/sonant-x-live/)]
    - 🎉 [SpessaSynth](https://github.com/spessasus/SpessaSynth) - MIDIプレイヤーおよびシンセサイザー
    - 🎉 [Tone.js](https://github.com/Tonejs/Tone.js) - ブラウザ内でインタラクティブな音楽を作成するためのWebAudioフレームワーク
    - 🎉 [tuna](https://github.com/Theodeus/tuna) - WebAudio API向けのオーディオエフェクトライブラリ
    - 🎉 [Waveform Playlist](https://github.com/naomiaro/waveform-playlist) - マルチトラックのウェブオーディオ編集・プレイヤー、キャンバス波形プレビュー付き
- JavaScript: Color
    - 🎉 [Chroma.js](https://github.com/gka/chroma.js) - すべての色の操作に使えるライブラリ
- JavaScript: Cross-Platform
    - 🎉 [Apache Cordova](https://cordova.apache.org) - iOS／Android向けのモバイルアプリ（JavaScript、HTML、CSSを使用）
    - 🎉 [Capacitor](https://github.com/ionic-team/capacitor) - iOS、Android、Webなどにネイティブでウェブアプリを実行。 [[Website](https://capacitorjs.com/)]
    - 🎉 [Electron](https://github.com/electron/electron) - JavaScript、HTML、CSSで開発するクロスプラットフォームデスクトップアプリ。 [[Website](https://www.electronjs.org/)]
    - 📚 [Electron Alternatives](https://github.com/sudhakar3697/electron-alternatives) - マルチプラットフォームGUIアプリ開発の選択肢
    - 🎉 [Ejecta](https://github.com/phoboslab/Ejecta) - iOS向けのJavaScriptキャンバスとオーディオ実装。App Store対応。
    - 🎉 [NW.js](https://github.com/nwjs/nw.js) - JavaScriptで開発するデスクトップアプリ。以前は_Node-Webkit_。 [[Website](https://nwjs.io)]
    - 🎉 [nx.js](https://github.com/TooTallNate/nx.js/) - Nintendo Switchのホームブリューアプリ向けのJavaScriptランタイム
    - 📚 [Progressive Web Apps](https://web.dev/progressive-web-apps/) - プラットフォーム固有アプリのように感じるウェブ技術の活用
    - 🎉 [React Native](https://github.com/facebook/react-native) - Reactを使ってネイティブアプリを構築するためのフレームワーク。 [[Website](https://reactnative.dev/)]
    - 🎉 [Tauri](https://github.com/tauri-apps/tauri) - より小さく、速く、安全なデスクトップアプリケーション。 [[Website](https://tauri.app/)]
    - 💸 [Ultralight](https://ultralig.ht/) - 現代的なHTML5、CSS、JavaScriptをサポート。_WebKit_ に基づく。
    - 🎉 [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) - Microsoft Edgeコントロールにより、ウェブをネイティブアプリに埋め込み可能。 [[Docs](https://learn.microsoft.com/en-us/microsoft-edge/webview2/)]
    - 🎉 [Window.js](https://github.com/windowjs/windowjs) - デスクトップグラフィックスプログラミング用のJavaScriptランタイム。 [[Docs](https://windowjs.org/)]
- JavaScript: Docking
    - 🎉 [Dock Spawn TS](https://github.com/node-projects/dock-spawn-ts) - [Dock Spawn](https://github.com/coderespawn/dock-spawn)のTypeScript版。JavaScriptドッキングフレームワーク。
    - 🎉 [FlexLayout](https://github.com/caplin/FlexLayout) - マルチタブレイアウトマネージャー
    - 🎉 [Golden Layout](https://github.com/golden-layout/golden-layout) - ウェブアプリ向けのマルチウィンドウレイアウトマネージャー
    - 🎉 [PhosphorJS](https://github.com/phosphorjs/phosphor) - 高性能でプラグイン対応、デスクトップ風のウェブアプリ
    - 🎉 [React Mosaic](https://github.com/nomcopter/react-mosaic) - Reactタイリングウィンドウマネージャー
    - 🎉 [RC-Dock](https://github.com/ticlo/rc-dock) - React用ドックレイアウトコンポーネント
    - 🎉 [wcDocker](https://github.com/WebCabin/wcDocker) - レスポンシブかつインタラクティブなデザインを持つウィンドウレイアウトシステム
- JavaScript: Entity Component System
    - 🎉 [Becsy](https://github.com/LastOliveGames/becsy) - TypeScriptおよびJavaScript用のマルチスレッドECS
    - 🔒 [bitECS](https://github.com/NateTheGreatt/bitECS) - 機能的で最小限であり、データ指向かつ超高性能なECSライブラリ
    - 🎉 [Ecsy](https://github.com/ecsyjs/ecsy) - 軽量で使いやすいことを目指す実験的なECS
    - 🎉 [Miniplex](https://github.com/hmans/miniplex) - ゲーム用エンティティマネージメントシステム
- JavaScript: File Formats
    - 🎉 [JSMpeg](https://github.com/phoboslab/jsmpeg) - JavaScriptによるMPEG1動画デコーダー
- JavaScript: Framework
    - 🎉 [Alpine](https://github.com/alpinejs/alpine) - マークアップにJavaScriptの振る舞いを組み込むための堅牢かつ最小限のフレームワーク
    - 🎉 [Angular](https://github.com/angular/angular) - 現代的なウェブ開発者のプラットフォーム
    - 🎉 [Aurelia](https://github.com/aurelia/framework) - ブラウザ、モバイル、デスクトップアプリ向けの現代的なフロントエンドフレームワーク
    - 🎉 [Ember](https://github.com/emberjs/ember.js) - 野心的なウェブ開発者向けのフレームワーク
    - 🎉 [Preact](https://github.com/preactjs/preact) - 同じ現代的なAPIを持つ高速かつ3kBのReactの代替品
    - 🎉 [React](https://github.com/facebook/react/) - ユーザーインターフェースを構築するための宣言的・効率的・柔軟なJavaScriptライブラリ
    - 🎉 [Svelte](https://github.com/sveltejs/svelte) - 宣言的なコンポーネントを効率的なJavaScriptに変換する
    - 🎉 [Vue](https://github.com/vuejs/vue) - ウェブ上でUIを構築するためのプログレッシブJavaScriptフレームワーク
- JavaScript: Game Engines
    - 📚 [JavaScript Game Engines](https://github.com/collections/javascript-game-engines) - GitHub上のJavaScript／HTML5ゲームエンジンのコレクション
    - 📚 [JavaScript Wiki: Game Engines](https://github.com/bebraw/jswiki/wiki/Game-Engines) - JavaScript／HTML5ゲームエンジンおよびフレームワーク
- JavaScript: Game Engine w/Editor
    - 🎉 [A-Frame](https://github.com/aframevr/aframe/) - VR体験を構築するためのウェブフレームワーク。 [[Website](https://aframe.io)]
    - 🎉 [Carrots](https://github.com/Carrotstudio0/Carrots-Engine) - _GDevelop_からフォークされたオープンソース2D／3Dゲームエンジン
    - 🎉 [Cocos Creator](https://github.com/cocos-creator/engine) - クロスプラットフォーム2D/3Dゲーム開発。 [[Website](https://www.cocos.com/en/creator)]
    - 🎉 [ct.js](https://github.com/ct-js/ct-js) - _PixiJS_をベースにしたデスクトップ2Dゲームエンジン
    - 🎉 [Egret](https://github.com/egret-labs/egret-core) - モバイルゲームエンジン。 [[Editor](https://github.com/egret-labs/egret-ui-editor-opensource)]
    - 🎉 [GDevelop](https://github.com/4ian/GDevelop) - フル機能2D/3D/マルチプレイヤーゲーム開発。 [[Website](https://gdevelop.io/)]
    - 🎉 [Impact](https://github.com/phoboslab/impact) - デスクトップおよびモバイルブラウザ向けゲームエンジン。 [[2D Level Editor](https://impactjs.com/documentation/weltmeister)]
    - 🔒 [Infinite Reality Engine](https://github.com/ir-engine/ir-engine) - 社会的空間ウェブ向け3Dツールキット。以前は _Ethereal Engine_ と呼ばれていた。
    - 🎉 [Isogenic](https://github.com/irrelon/ige) - _Valve_ のマルチプレイヤーシステムをベースにした高度なマルチプレイヤーエンジン。
    - 🎉 [melonJS](https://github.com/melonjs/melonJS) - 現代的な2Dゲームエンジン、レベル編集機能付き 。 [Tiled](https://doc.mapeditor.org/en/stable/) [[Website](https://melonjs.org)]
    - 🎉 [microStudio](https://github.com/pmgl/microstudio/) - オンラインゲームエンジン。プログラミングを学び、練習できる。
    - 🎉 [Pixelbox.js](https://github.com/cstoquer/pixelbox) - タイルベース2Dゲームの高速プロトタイピング用サンドボックス。 [[Download](https://pixwlk.itch.io/pixelbox)]
    - 🎉 [QICI Engine](https://github.com/qiciengine/qiciengine) - ゲームを作成するためのツールセット。
    - 🎉 [Superpowers](https://github.com/superpowers) - インディーズ開発者向けの2Dおよび3Dゲーム制作。
    - 🎉 [Taro](https://github.com/moddio/taro) - _Box2D_物理を備えたマルチプレイヤーエンジン、つまり _Moddio_。 [[Website](https://www.modd.io)]
- JavaScript: Game Framework
    - 🎉 [Crafty](https://github.com/craftyjs/Crafty) - 構造的に2Dゲームを作成できる。
    - 🎉 [Excalibur](https://github.com/excaliburjs/Excalibur) - ウェブ向けフレンドリーなTypeScript 2Dゲームエンジン。
    - 🎉 [Galacean](https://github.com/galacean/engine) - Web／モバイル中心のエンジン。WebGLおよびglTFをベースに構築。
    - 🎉 [Kaboom](https://github.com/replit/kaboom) - シンプルな2Dフレームワーク。
    - 🎉 [LittleJS](https://github.com/KilledByAPixel/LittleJS) - WebGLによるレンダリングを用いた軽量2Dフレームワーク。
    - 🎉 [Meep](https://github.com/Usnul/meep) - ECSゲームフレームワーク。
    - 🎉 [Oasis](https://github.com/ant-galaxy/oasis-engine) - _AntGroup_ が開発したWebGLフレームワーク。2D／3D、アニメーション、物理演算をサポート。
    - 🎉 [Phaser](https://github.com/photonstorm/phaser) - 高速2Dゲームフレームワーク。 [[Website](https://phaser.io)]
    - 🎉 [Turbulenz](https://github.com/turbulenz/turbulenz_engine) - ブラウザ、デスクトップ、モバイル向けのモジュラー2D／3Dゲームフレームワーク。
    - 🎉 [WhitestormJS](https://github.com/WhitestormJS/whs.js) - _Three.js_ をベースにした3Dアプリ／ゲーム用フレームワーク。
- JavaScript: Geometry
    - 🎉 [Convexhull.js](https://github.com/indy256/convexhull-js) - 高性能JavaScript 2D凸包ライブラリ。
    - 🎉 [Delaunator](https://github.com/mapbox/delaunator) - 2Dポイントのデラウナイ triangulationに特化した驚異的な高速JavaScriptライブラリ。
    - 🎉 [Earcut](https://github.com/mapbox/earcut) - あなたのWebGLアプリ向けに最も高速で最小サイズのJavaScript多角形三角化ライブラリ。
    - 🎉 [Poly-Decomp.js](https://github.com/schteppe/poly-decomp.js) - 2D多角形を凸部分に分解する。
- JavaScript: Graphics - 2D
    - 🎉 [CanvasKit](https://github.com/google/skia/tree/main/modules/canvaskit) - _Google_の2Dグラフィックスライブラリ、SkiaのWebAssemblyビルド。 [[Samples](https://skia.org/docs/user/modules/canvaskit/)]
    - 🎉 [EaselJS](https://github.com/CreateJS/EaselJS) - キャンバス要素の操作を容易にし、 [CreateJS](https://createjs.com/) の一部。
    - 🎉 [Escher.js](https://github.com/tentone/escher.js) - インタラクティブな2Dグラフィックスキャンバスフレームワーク。
    - 🎉 [Fabric.js](https://github.com/fabricjs/fabric.js) - 強力でシンプルなJavaScriptキャンバスライブラリ。
    - 🎉 [Konva](https://github.com/konvajs/konva) - デスクトップおよびモバイルアプリ向けのキャンバスインタラクティビティフレームワーク
    - 🎉 [p5.js](https://github.com/processing/p5.js) - クリエイティブコーディング向けライブラリ。 [[Website](https://p5js.org)]
    - 🎉 [Paper.js](https://github.com/paperjs/paper.js) - ベクターグラフィックスのスイス軍刀。 [[Examples](http://paperjs.org/)]
    - 🎉 [Pencil.js](https://github.com/pencil-js/pencil.js) - モジュラリーフレームワークのインタラクティブ2D描画ライブラリ。 [[Examples](https://pencil.js.org/)]
    - 🎉 [PixiJS](https://github.com/pixijs/pixijs) 🔥 - 高速かつ軽量の2Dライブラリ。 [[Awesome](https://github.com/cursedcoder/awesome-pixijs) | [Editor](https://github.com/Megabyteceer/thing-editor) | [Essentials](https://github.com/ShukantPal/pixi-essentials) | [Website](https://pixijs.com/)]
    - 🎉 [Pts](https://github.com/williamngan/pts) - ビジュアライゼーションおよびクリエイティブコーディング向けライブラリ。 [[Examples](https://ptsjs.org)]
    - 🎉 [PuzzleScript](https://github.com/increpare/puzzlescript) - _bfxr_の開発者によるパズルゲームエンジン。 [[Awesome](https://github.com/lee2sman/awesome-puzzlescript)]
    - 🎉 [Scrawl-canvas](https://github.com/KaliedaRik/Scrawl-canvas) - キャンバス要素を扱うためのライブラリ
    - 🎉 [Stage.js](https://github.com/piqnt/stage.js) - ゲーム開発用2Dレンダリングエンジン。 [[Examples](https://piqnt.com/stage.js/)]
    - 🎉 [Two.js](https://github.com/jonobr1/two.js) - ウェブ向けのレンダラーに依存しない2D描画API
    - 🎉 [ZIM](https://github.com/danzen/zimjs) - クリエイティブキャンバスフレームワーク。 [[Website](https://zimjs.com/)]
- JavaScript: Graphics - 3D
    - 🎉 [Babylon.js](https://github.com/BabylonJS/Babylon.js) 🔥 - 強力なウェブレンダリングエンジン。 [[Extensions](https://github.com/BabylonJS/Extensions) | [Website](https://www.babylonjs.com/)]
    - 🎉 [ClayGL](https://github.com/pissang/claygl) - スケーラブルなWeb3Dアプリケーション向けのWebGLライブラリ
    - 🎉 [CopperLicht](https://ambiera.com/copperlicht/) - WebGL向け3Dライブラリ。 [[CopperCube Editor](https://ambiera.com/coppercube/index.html)]
    - 🎉 [Filament for Web](https://github.com/google/filament/tree/main/web/filament-js) - Googleの3Dグラフィックスライブラリ _Filament_ のWebAssemblyビルド
    - 🎉 [Four](https://github.com/CodyJasonBennett/four) - 最小限のthree.jsの代替ライブラリ
    - 🎉 [Hilo3d](https://github.com/hiloteam/Hilo3d) - アリババのWebGL 3Dレンダリングエンジン
    - 🎉 [Litescene.js](https://github.com/jagenjo/litescene.js) - WebGL 3DエンジンライブラリでWebGLStudioが使用
    - 🎉 [LUME](https://github.com/lume/lume) - インタラクティブな2D/3D体験の作成を簡略化
    - ⭐ [OGL](https://github.com/oframe/ogl) 🔥 - 高速で強力で最小限の WebGL ライブラリ。 [[Examples](https://oframe.github.io/ogl/examples)]
    - 🎉 [PicoGL.js](https://github.com/tsherif/picogl.js) - 最小限の WebGL 2 レンダリング ライブラリ。 [[Examples](https://tsherif.github.io/picogl.js/)]
    - 🎉 [Pixi3D](https://github.com/jnsmalm/pixi3d) - _PixiJS_ 用の 3D レンダラー。2D アプリとシームレスに統合可能。 [[Examples](https://pixi3d.org/)]
    - 🎉 [RedGL](https://github.com/redcamel/RedGL2) - JavaScript 3D WebGLライブラリ
    - 🎉 [Regl](https://github.com/regl-project/regl) - 高速な機能的なWebGL
    - 🎉 [SwissGL](https://github.com/google/swissgl) - WebGL2上の最小限のラッパー
    - 🎉 [ThingJS](https://github.com/uinosoft/t3d.js) - 軽量で拡張可能な3Dライブラリ、つまり _t3d_
    - 🎉 [Three.js](https://github.com/mrdoob/three.js/) 🔥 - 一般用途の 3D ライブラリ。 [[Awesome](https://github.com/0xAxiome/awesome-threejs) | [Docs](https://threejs.org) | [Editor](https://threejs.org/editor/) | [Examples](https://threejs.org/examples/)]
    - 🎉 [TWGL](https://github.com/greggman/twgl.js) - 小さな WebGL ヘルパー ライブラリ。 [[Examples](http://twgljs.org/)]
    - 📚 [WebGL Frameworks](https://en.wikipedia.org/wiki/List_of_WebGL_frameworks) - ウィキペディア上のWebGLフレームワーク一覧
    - 📚 [WebGL / WebGPU Frameworks](https://gist.github.com/76878ba6903cf15789b712464875cfdc) - WebGLおよびWebGPUフレームワークとライブラリの一覧
    - 🎉 [x3dom](https://github.com/x3dom/x3dom) - あなたのウェブページに3Dコンテンツをシームレスに統合
- JavaScript: Graphics - Three.js
    - 📚 [Discover Three.js](https://discoverthreejs.com) - Three.jsを使って美しい3Dウェブアプリケーションを作成
    - 🌎 [SBcode Three.js Tutorials](https://sbcode.net/threejs/) - テーマに関するコードと説明を含む素晴らしい例
    - 🎉 [Sketch Three.js](https://github.com/ykob/sketch-threejs) - Three.jsで作成されたインタラクティブなスケッチ
    - 🎉 [Sketchbook](https://github.com/swift502/Sketchbook) - Three.jsとCannon.jsで構築された3Dプレイグランド
    - 🌎 [Stemkoski Three.js Examples](http://stemkoski.github.io/Three.js/) - 非常に良いインストラクション例のセット。
    - 📚 [Three.js Bookshelf](https://discourse.threejs.org/t/three-js-bookshelf/2468) - リソースの良いコレクション。
    - 📚 [Three.js Discourse Examples](https://hofk.de/main/discourse.threejs/) - Three.jsフォーラムに投稿されたすべての例を年間でまとめたコレクション。
    - 💰 [Three.js Journey](https://threejs-journey.com/) - WebGLを初心者から上級者まで教えるコース。
    - 📚 [Three.js Manual](https://threejs.org/manual/#en/fundamentals) - 素晴らしい記事と説明。以前は _ThreeJsFundamentals_ として存在。
    - 📚 [THREEx](https://github.com/jeromeetienne/threex) - オープンソースゲーム拡張の良いコレクション。
- JavaScript: Graphics - Three.js - Addon
    - 🎉 [Custom Shader Material](https://github.com/FarazzShaikh/THREE-CustomShaderMaterial) - 自作シェーダーでThree.jsのマテリアルを拡張。
    - 🎉 [irregular-grid](https://github.com/sketchpunklabs/irregular_grid) - 不規則なグリッドを生成・使用する例。 [[Demos](https://sketchpunklabs.github.io/irregular_grid/)]
    - 🎉 [Lamina](https://github.com/pmndrs/lamina) - Three.js用の拡張可能でレイヤー構造のシェーダーマテリアル。
    - ❓ [screen-space-reflections](https://github.com/0beqz/screen-space-reflections) - Three.jsにおけるスクリーンスペース反射。
    - 🎉 [three-billboard-reflection](https://github.com/0beqz/three-billboard-reflection) - Three.jsにおけるパフォーマンスの高い平面反射。
    - 🎉 [three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) - メッシュ上のレーザー投射を高速化し、空間クエリを有効化。
    - 🎉 [three-mesh-ui](https://github.com/felixmariotto/three-mesh-ui) - Three.js用のVRユーザーインターフェース。
    - 🎉 [three-nebula](https://github.com/creativelifeform/three-nebula) - Three.js用のWebGL粒子システム。
    - 🎉 [three-projected-material](https://github.com/marcofugaro/three-projected-material) - Three.jsにおけるテクスチャ投影。
    - 🎉 [three.ik](https://github.com/jsantell/THREE.IK) - Three.jsにおける逆運動学。
    - 🎉 [Troika JS - Derived Material](https://github.com/protectwise/troika/blob/master/packages/troika-three-utils/src/DerivedMaterial.js) - 既存の Three.js マテリアルを拡張。 [[Docs](https://protectwise.github.io/troika/troika-three-utils/createDerivedMaterial/)]
    - 🎉 [voxelizer](https://github.com/andstor/voxelizer) - 3Dモデルのボクセル化。
- JavaScript: Graphics - Three.js - React
    - 🎉 [drei](https://github.com/pmndrs/drei) - react-three-fiber用の便利なヘルパー。
    - 🎉 [gltfjsx](https://github.com/pmndrs/gltfjsx) - GLTFをJSXコンポーネントに変換。
    - 🎉 [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - Three.js用のReactレンダラー。
- JavaScript: Graphics - Three.js - Svelte
    - 🎉 [Threlte](https://github.com/threlte/threlte) - Svelte および Three.js 用の 3D フレームワークとエコシステム。 [[Website](https://threlte.xyz/)]
- JavaScript: Gui
    - 🎉 [Bootstrap](https://github.com/twbs/bootstrap) - 人気がある。レスポンシブでモバイルファーストのプロジェクトを開発可能。 [[Website](https://getbootstrap.com/)]
    - 🎉 [dat.GUI](https://github.com/dataarts/dat.gui) - JavaScriptで変数を変更するための軽量GUI。
    - 🎉 [Dojo](https://github.com/dojo/widgets) - ウェブアプリ向けのGUIウィジェット
    - 🎉 [Guify](https://github.com/colejd/guify) - JavaScript 変数を変更するためのシンプルな GUI。 [[Demo](https://jons.website/projects/guify/)]
    - 🎉 [GuiGui](https://github.com/superguigui/guigui) - JavaScript で何かを調整するための GUI。 [[Demo](https://superguigui.github.io/guigui/)]
    - 🎉 [Inferno](https://github.com/infernojs/inferno) - 高性能ユーザーインターフェースを構築するReact風ライブラリ
    - 🎉 [jQuery UI](https://github.com/jquery/jquery-ui) - jQuery向けの公式GUIライブラリ
    - 🎉 [Leva](https://github.com/pmndrs/leva) - Reactを中心としたコンポーネントGUI
    - 🎉 [Magic Circle](https://github.com/dpwoert/magic-circle) - マルチ機能GUI。_dat.GUI_、_Unity_、_Framer_にインスパイアされたもの
    - 🎉 [PCUI](https://github.com/playcanvas/pcui) - _PlayCanvas_によるウェブ向けUIコンポーネントライブラリ
    - 🎉 [Tweakpane](https://github.com/cocopon/tweakpane) - 値の調整に適したコンパクトGUI
    - 🎉 [uil](https://github.com/lo-th/uil) - シンプルなJavaScript GUI
    - 🎉 [w2ui](https://github.com/vitmalina/w2ui) - 現代ウェブアプリ向けのGUIウィジェット
    - 🎉 [Zebkit](https://github.com/barmalei/zebkit) - キャンバスでレンダリングされたUIコンポーネントライブラリ
- JavaScript: Input
    - 🎉 [Joycon.js](https://github.com/barhatsor/joycon.js) - JavaScriptによるコントロール機能
    - ❓ [Mesekai](https://github.com/Neleac/Mesekai) - リアルタイムモーショントラッキング
    - 🎉 [use-gesture](https://github.com/pmndrs/use-gesture) - ReactおよびJavaScriptでのマウス／タッチジェスチャー用ユーティリティ
    - 🔒 [WebAR.rocks.faceDepth](https://github.com/WebAR-rocks/WebAR.rocks.faceDepth) - カメラから取得した顔を3Dシーンに挿入
- JavaScript: Layout
    - 📚 [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - CSS flexbox レイアウトに関する包括的なガイド。
    - 📚 [Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - CSS grid レイアウトに関する包括的なガイド。
- JavaScript: Networking
    - 🎉 [Socket.io](https://github.com/socketio/socket.io) - リアルタイムの両方向イベントベース通信を可能にする
    - 🎉 [WebRTC](https://webrtc.org/) - ペア間でビデオ、声、一般データを送信できる
- JavaScript: Physics
    - 🎉 [Ammo.js](https://github.com/kripken/ammo.js) - _Bullet 3D_物理エンジンをWebAssemblyに移植
    - 🎉 [Box2d.js](https://github.com/kripken/box2d.js/) - Box2DをWebAssemblyに移植
    - 🎉 [box3d-wasm](https://github.com/monteslu/box3d-wasm) - Box3D が WebAssembly でポートされています
    - 🎉 [Cannon-es](https://github.com/pmndrs/cannon-es) - の 3D 物理エンジンのメンテナンスされたフォーク。 [Cannon.js](https://github.com/schteppe/cannon.js) [[Demos](https://pmndrs.github.io/cannon-es/)]
    - 🎉 [Goblin Physics](https://github.com/chandlerprall/GoblinPhysics) - JavaScript で完全に再構築された 3D 物理エンジン
    - 🎉 [JoltPhysics.js](https://github.com/jrouwe/JoltPhysics.js) - _Jolt Physics_ を JavaScript（WebAssembly）に移植。 [[Demos](https://jrouwe.github.io/JoltPhysics.js/)]
    - 🎉 [Matter.js](https://github.com/liabru/matter-js) - ウェブ向けの特徴的な 2D 物理エンジン。 [[Demos](https://brm.io/matter-js/)]
    - 🎉 [Oimo.js](https://github.com/lo-th/Oimo.js) - 軽量な 3D 物理エンジン。 [[Demos](http://lo-th.github.io/Oimo.js)]
    - 🎉 [p2.js](https://github.com/schteppe/p2.js) - Cannon.js の開発者による 2D 刚体物理
    - 🎉 [Particulate.js](https://github.com/jpweeks/particulate-js) - シンプルで高速かつ安定した粒子物理ライブラリ
    - 🎉 [Planck.js](https://github.com/shakiba/planck.js) - _Box2D_ 物理エンジンの JavaScript リライト。 [[Demos](https://piqnt.com/planck.js/)]
    - 🎉 [Physijs](https://github.com/chandlerprall/Physijs) - Three.js 用の物理プラグイン
    - 🎉 [Rapier](https://rapier.rs/docs/user_guides/javascript/getting_started_js) - パフォーマンスに焦点を当てた Rust の 2D/3D 物理ライブラリ（WebAssembly でポート）
    - 🎉 [Verly.js](https://github.com/anuraghazra/Verly.js) - Verlet 物理エンジンを簡単に統合可能。 [[Demos](https://anuraghazra.dev/Verly.js/)]
- JavaScript: Utility
    - 🎉 [Clipboard.js](https://github.com/zenorocha/clipboard.js) - 小型で現代的なクリップボードコピー機能
    - 🎉 [Day.js](https://github.com/iamkun/dayjs) - [Moment.js](https://github.com/moment/moment) への 2kB の高速な代替品。同じ現代的な API を備える。
    - 🎉 [i18next](https://github.com/i18next/i18next) - 人気の国際化フレームワーク
    - 🎉 [jQuery](https://github.com/jquery/jquery) - 高速かつ機能が豊富なJavaScriptライブラリ。 [[Website](https://jquery.com)]
    - 🎉 [PreloadJS](https://github.com/CreateJS/PreloadJS) - プログレスイベント付きのアセットの事前ロード
    - 🎉 [Struct Vec](https://github.com/moomoolive/struct-vec) - マルチスレッド用の JavaScript 配列のようなコンテナ
- JavaScript: Timeline
    - 🎉 [Frame.js](https://github.com/mrdoob/frame.js/) - JavaScript シーケンスエディタ
    - 🎉 [Neo](https://github.com/lo-th/neo) - JavaScriptのタイムライン。 [[Demo](http://lo-th.github.io/neo/)]
- JavaScript: Video
    - 💸 [Remotion](https://github.com/remotion-dev/remotion) - Reactで動的に動画を作成。 [[Website](https://www.remotion.dev/)]
- JavaScript: Visual Programming / Nodes
    - 🎉 [Butterfly](https://github.com/alibaba/butterfly) - _Alibaba_ が開発したフローとフィールドレイアウトに特化したダイアグラムライブラリ
    - 🎉 [Drawflow](https://github.com/jerosoler/Drawflow) - シンプルなJavaScriptフローライブラリ。 [[Demo](https://jerosoler.github.io/Drawflow/)]
    - 🎉 [Flow](https://github.com/sunag/flow) - ノードグラフライブラリ
    - 🎉 [Litegraph.js](https://github.com/jagenjo/litegraph.js) - ブラウザ上で_Unreal Blueprints_に似たグラフを作成。 [[Demo](https://tamats.com/projects/litegraph/editor/)]
    - 🎉 [Node-RED](https://github.com/node-red/node-red) - イベント駆動アプリケーション向けのローコードプログラミング
    - 🎉 [Nodl](https://github.com/emilwidlund/nodl) - 計算ノードグラフ向けのフレームワーク
    - 🎉 [Rete.js](https://github.com/retejs/rete) - 視覚プログラミングおよびノードエディタ用のフレームワーク。 [[Demo](https://rete.js.org/#/examples/basic)]

### Kotlin <a id="kotlin"></a>
- 📚 [Awesome Kotlin](https://github.com/KotlinBy/awesome-kotlin) - 素晴らしい Kotlin 関連ものリスト
- 🌎 [Kotlin](https://kotlinlang.org/) - 汎用言語で、Javaと互換性を持つ。 [[GitHub](https://github.com/JetBrains/kotlin)]
- Kotlin: Game Engine w/Editor
    - 🎉 [KorGE](https://github.com/korlibs/korge) - Kotlin用のマルチプラットフォーム2Dゲームエンジン。 [[Website](https://korge.org/)]
- Kotlin: Game Framework
    - 🎉 [FXGL](https://github.com/AlmasB/FXGL) - 2D用ゲームライブラリ、実験的な3D用。
    - 🎉 [Kool](https://github.com/fabmax/kool) - マルチプラットフォーム3D Vulkan / OpenGLグラフィックスエンジン。 [[Examples](https://fabmax.github.io/kool/kool-js/)]
    - 🎉 [KTX](https://github.com/libktx/ktx) - _libGDX_ ゲームフレームワーク向けの Kotlin エクステンション

### Pascal <a id="pascal"></a>
- 📚 [Awesome Pascal](https://github.com/Fr0sT-Brutal/awesome-pascal) - Delphi / Pascal リソースのキュレーションリスト
- 📚 [Delphi](https://en.wikipedia.org/wiki/Delphi_(software)) - クロスプラットフォーム対応の Pascal ダイアレクトと人気 IDE
- 🌎 [Free Pascal](https://www.freepascal.org/) - 成熟したオープンソース Pascal コンパイラ
- 📚 [Pascal Tutorials](https://www.tutorialspoint.com/pascal/index.htm) - シンプルで使いやすいPascalチュートリアル。
- Pascal: Game Engine w/Editor
    - 🎉 [Castle](https://github.com/castle-engine/castle-engine) - クロスプラットフォーム2D/3Dゲームエンジンおよびエディタ。 [[Website](https://castle-engine.io/)]
- Pascal: Game Framework
    - 🎉 [Apus](https://github.com/Cooler2/ApusGameEngine) - クロスプラットフォーム2Dゲーム作成用のライブラリ。
- Pascal: Physics
    - 🎉 [Kraft](https://github.com/BeRo1985/kraft) - オブジェクトパascalの3D物理エンジン。

### Python <a id="python"></a>
- 📚 [Awesome Python](https://github.com/vinta/awesome-python) - 素晴らしいPythonフレームワーク、ライブラリ、ソフトウェアなどを一覧に。
- 🌎 [Python.org](https://www.python.org) - 迅速に開発できるプログラミング言語。 [[Docs](https://www.python.org/doc/)]
- Python: App Framework
    - 🎉 [Pyglet](https://github.com/pyglet/pyglet) - ゲーム開発向けのウィンドウングおよびマルチメディアライブラリ。
- Python: Cross-Platform
    - 💸 [Anvil](https://anvil.works) - Pythonだけで構成されたフルスタックWebアプリケーション。
    - 🎉 [Brython](https://github.com/brython-dev/brython) - ブラウザ内で動作するPython 3。
- Python: Game Engine w/Editor
    - 💰 [Cave Engine](https://uniday.studio/) - 3D用の高速かつ簡単なPythonゲームエンジン。
    - 🎉 [ursina](https://github.com/pokepetter/ursina) - Pythonと_Panda3D_を用いたゲームエンジン。
- Python: Game Framework
    - 🎉 [Arcade](https://github.com/pythonarcade/arcade) - 2Dアーケードゲームを作成するための使いやすいライブラリ。
    - 🎉 [Panda3D](https://github.com/panda3d/panda3d) - _Disney_および_Carnegie Mellon_が開発した強力で成熟したゲームエンジン。
    - 🔒 [Pygame](https://github.com/pygame/pygame) - _SDL_をベースにしたゲームおよびマルチメディアアプリケーションフレームワーク。
    - 🎉 [Pygcurse](https://github.com/asweigart/pygcurse) - ライブラリによるテキストアドベンチャー／ローグライク。 [Curses-like](https://en.wikipedia.org/wiki/Curses_%28programming_library%29) [[Website](http://inventwithpython.com/pygcurse/)]
- Python: Gui
    - 🎉 [CustomTkinter](https://github.com/TomSchimansky/CustomTkinter) - _Tkinter_をベースにした現代的でカスタマイズ可能なUIライブラリ。
    - 🎉 [Kivy](https://github.com/kivy/kivy) - クロスプラットフォームGUIフレームワーク。 [[Website](https://kivy.org/)]
    - 🎉 [NiceGUI](https://github.com/zauberzeug/nicegui/) - Pythonを使ってウェブベースのユーザーインターフェースを作成。
    - 🔒 [PySide](https://doc.qt.io/qtforpython-6/) - _Qt_の公式Pythonバインディング。
    - 💸 [PyQt](https://riverbankcomputing.com/software/pyqt/intro) - _Qt_のPythonバインディング。
    - 📚 [tkinter](https://docs.python.org/3/library/tkinter.html) - Tcl/Tk GUIツールキットへの標準Pythonインターフェース。

### Ruby <a id="ruby"></a>
- 📚 [Awesome Ruby](https://github.com/markets/awesome-ruby) - 素晴らしいRubyライブラリ、ツール、フレームワーク、ソフトウェアを一覧に。
- 🌎 [Ruby](https://www.ruby-lang.org/en/) - シンプル性／生産性に焦点を当てた動的プログラミング言語。 [[GitHub](https://github.com/ruby/ruby)]
- Ruby: Framework
    - 🎉 [Ruby on Rails](https://github.com/rails/rails) - ウェブアプリフレームワーク。 [[Website](https://rubyonrails.org)]
- Ruby: Game Framework
    - 🎉 [Ruby 2D](https://github.com/ruby2d/ruby2d) - クロスプラットフォーム2Dアプリの開発を可能にする。
- Ruby: Graphics - 3D
    - 🎉 [Mittsu](https://github.com/danini-the-panini/mittsu) - _Three.js_に大きく依存した3Dグラフィックスライブラリ。
- Ruby: Gui
    - 🎉 [Glimmer](https://github.com/andyobtiva/glimmer) - GUIライブラリおよびDSL（ドメイン特定言語）フレーム及。
    - 🎉 [Shoes](https://github.com/shoes/shoes4) - クロスプラットフォームGUIライブラリ。 [[Website](http://shoesrb.com/)]

### Rust <a id="rust"></a>
- 📚 [Awesome Rust](https://github.com/rust-unofficial/awesome-rust) - Rustのコードとリソースを厳選した一覧。
- 🌎 [Rust](https://www.rust-lang.org) - 誰もが質の高いソフトウェアを開発できるように支援する。 [[Docs](https://www.rust-lang.org/learn) | [GitHub](https://github.com/rust-lang)]
- Rust: App Framework
    - 🎉 [Makepad](https://github.com/makepad/makepad) - ソフトウェア開発プラットフォームおよびネイティブレンダリングGUIフレームワーク。 [[Editor](https://makepad.dev/)]
    - 🎉 [Tao](https://github.com/tauri-apps/tao) - クロスプラットフォームウィンドウング。 [[Docs](https://docs.rs/tao/latest/tao/)]
- Rust: Audio
    - 🎉 [Kira](https://github.com/tesselode/kira) - ゲーム向けに表現力のある音声を作成。
- Rust: Docking
    - 🎉 [egui_dock](https://github.com/anhosh/egui_dock) - _egui_へのドッキングサポート。
    - 🎉 [egui_tiles](https://github.com/rerun-io/egui_tiles) - _egui_用のタイルレイアウトエンジン。
- Rust: Game Engine w/Editor
    - 🎉 [Fyrox](https://github.com/FyroxEngine/Fyrox) - 2D/3Dゲームエンジンとエディタ。以前は _Rg3d_。 [[Website](https://fyrox.rs/)]
    - 🎉 [Renzora Engine](https://github.com/renzora/engine) - _Bevy_をベースにした3Dゲームエンジンおよびビジュアルエディタ。
- Rust: Game Framework
    - 🎉 [Ambient](https://github.com/AmbientRun/Ambient) - マルチプレイヤーゲームエンジン。
    - 🎉 [Amethyst](https://github.com/amethyst/amethyst) - データ駆動型の2D/3Dゲームエンジンで、速くかつ設定しやすいことを目指している。
    - 🎉 [Bevy](https://github.com/bevyengine/bevy) 🔥 - 革新的にシンプルなデータ駆動型2D/3Dゲームエンジン。 [[Website](https://bevyengine.org)]
    - 🎉 [Macroquad](https://github.com/not-fl3/macroquad) - 使いやすいゲームライブラリ。_RayLib_に強くインスピレーションを受けている。
- Rust: Graphics - 3D
    - 🎉 [Ash](https://github.com/ash-rs/ash) - Rust向けのVulkanバインディング。
    - 🎉 [Glium](https://github.com/glium/glium) - OpenGL APIに対する安全なラッパー。
    - 🎉 [Kiss3D](https://github.com/sebcrozet/kiss3d) - シンプルで、無駄のない3Dグラフィックスエンジン。
    - 🎉 [Miniquad](https://github.com/not-fl3/miniquad) - マルチプラットフォーム対応のレンダリング。
    - 🎉 [three-d](https://github.com/asny/three-d) - 2D/3Dレンダラー。プラットフォームを越えて描画を簡単に行えるようにする。
    - 🎉 [Vulkano](https://github.com/vulkano-rs/vulkano) - Vulkan APIに対する安全かつ豊かなラッパー。
    - 🎉 [wgpu](https://github.com/gfx-rs/wgpu) - マルチプラットフォーム対応のグラフィックスAPI。_Firefox_におけるWebGPUを駆動。
- Rust: Gui
    - 🔒 [Azul](https://github.com/fschutt/azul) - デスクトップGUIフレームワーク。
    - 🎉 [Dioxus](https://github.com/dioxuslabs/dioxus) - マルチプラットフォーム対応、React風のGUIライブラリ。
    - 🎉 [Druid](https://github.com/linebender/druid) - データ中心のGUI設計ツールキット。
    - 🎉 [egui](https://github.com/emilk/egui) - 使いやすい即時モードGUI。ウェブおよびネイティブで動作。 [[Demo](https://www.egui.rs/)]
    - 🔒 [Slint](https://github.com/slint-ui/slint) - 埋め込み／デスクトップ用GUIツールキット。以前は _SixtyFPS_。 [[Website](https://slint-ui.com/)]
- Rust: Physics
    - 🎉 [Rapier](https://github.com/dimforge/rapier) - パフォーマンスに焦点を当てた2D/3D物理エンジン。 [[Docs](https://rapier.rs)]

### Swift <a id="swift"></a>
- 📚 [Awesome Swift](https://github.com/matteocrippa/awesome-swift) - 素晴らしいSwiftライブラリとリソースの協働リスト。
- 🌎 [Swift](https://developer.apple.com/documentation/swift) - Appleが開発したiOS、Mac、その他Appleデバイス向けアプリ開発用のツール。
- Swift: Game Engine w/Editor
    - 🔒 [UntoldEngine](https://github.com/untoldengine/UntoldEngine) - 高パフォーマンスな空間可視化アプリ向け。
- Swift: Game Framework
    - 🎉 [GateEngine](https://github.com/STREGAsGate/GateEngine) - 2Dおよび3Dゲームを構築できるクロスプラットフォームゲームエンジン。
    - 🎉 [Glide](https://github.com/cocoatoucher/Glide) - 実例とチュートリアルを備えた2Dゲーム開発用エンジン。
    - 🎉 [Imagine Engine](https://github.com/JohnSundell/ImagineEngine) - Appleのプラットフォーム向けの高速2Dゲームエンジン。
    - 🎉 [Iris](https://github.com/Chandram-Dutta/Iris) - Swiftによる最小限の2Dゲームエンジン。
    - 🎉 [OctopusKit](https://github.com/invadingoctopus/octopuskit) - iOS、macOS、tvOS向けの2D ECSゲームエンジン。
- Swift: Gui
    - 🌎 [SwiftUI](https://developer.apple.com/swiftui/) - Appleの現代的な、旗艦的なGUIフレームワーク。すべてのAppleプラットフォームで開発に使用。
- Swift: Physics
    - 🎉 [JelloSwift](https://github.com/LuizZak/JelloSwift) - スウィフトなソフトボディ物理エンジン
    - 🌎 [SpriteKit Physics](https://developer.apple.com/documentation/spritekit/getting-started-with-physics) - 物理の基礎を学ぶ

### Zig <a id="zig"></a>
- 📚 [Awesome Zig](https://github.com/nrdmn/awesome-zig) - Zigのコードとリソースを厳選したリスト
- 🌎 [Zig](https://ziglang.org/) - 一般用途の言語およびツールチェーン。 [[Docs](https://ziglang.org/documentation/master/) | [GitHub](https://github.com/michal-z/zig)]
- 📚 [Ziglings](https://github.com/ratfactor/ziglings) - 小さなバグを修正することでZigプログラミング言語を学ぶ
- Zig: App Framework
    - 🎉 [Upaya](https://github.com/prime31/zig-upaya) - ゲームツールやヘルパーアプリを作成するためのフレームワーク
- Zig: File System
    - 🎉 [Known Folders](https://github.com/ziglibs/known-folders) - 複数のオペレーティングシステムでよく使われるフォルダにアクセスできる
- Zig: Game Engine w/Editor
    - 🎉 [Mach](https://github.com/hexops/mach) - ゲームエンジンおよびグラフィックスツールキット。 [[Examples](https://machengine.org/gpu/)]
- Zig: Game Framework
    - 🎉 [Zig-Gamedev Project](https://github.com/michal-z/zig-gamedev) - DirectX 12を使用したサンプルアプリケーションとライブラリ。
- Zig: Graphics - 2D
    - 🎉 [Mini Pixel](https://github.com/fabioarnold/MiniPixel) - ミニピクセルアートエディタ。 [[Download](https://fabioarnold.itch.io/mini-pixel)]
    - 🔒 [Pixi](https://github.com/foxnne/pixi) - ピクセルアート編集ツール
- Zig: Scripting
    - 🎉 [Cyber](https://github.com/fubark/cyber) - 高速で効率的かつ並列処理可能なスクリプティング言語

<br />
<br />

## オープンソースゲーム <a id="open-source-games"></a>
_実装を調べて学べる成功したオープンソースゲームです。_

### 厳選コレクション <a id="awesome-collections-1"></a>
- 📚 [Open Source Games](https://github.com/michelpereira/awesome-open-source-games) - GitHub上にソースコードが公開されているゲームのコレクション
- 📚 [Quake Engines](https://quakeengines.github.io/) - _idTech_エンジン、その派生版およびソースポートのリポジトリ一覧

### C <a id="c-3"></a>
- 🔒 [Doom](https://github.com/id-Software/DOOM) - _id Software_が1993年に発表したオリジナル3D名作。
- 🔒 [Gish](https://github.com/blinry/gish) - 賞を受賞した物理ベースのパズルゲームのオープンソース版。 [[Steam](https://store.steampowered.com/app/9500/Gish/)]
- 💸 [Handmade Hero](https://handmadehero.org/) - ゲームを作成するまでの動画と、15ドルのソースコード。
- 🔒 [Wolfenstein 3D](https://github.com/id-Software/wolf3d) - _Wolfenstein 3D_の元のオープンソースリリース

### C++ <a id="c-4"></a>
- 🔒 [Doom 3](https://github.com/id-Software/DOOM-3) - _Doom 3_のGPLソースリリース
- 🔒 [Dungeon Crawl: Stone Soup](https://github.com/crawl/crawl) - クラシックなローグライクアドベンチャー。 [[Play](https://crawl.develz.org/)]
- 🎉 [Etheral Legends](https://github.com/Soverance/EtherealLegends) - インディーアクションRPG。_Unreal Engine 4_で構築された。 [[Steam](https://store.steampowered.com/app/428980/Ethereal_Legends/)]
- 🔒 [GemRB](https://github.com/gemrb/gemrb) - _Bioware_のInfinity Engineのオープンソース実装
- 🔒 [NetHack](https://github.com/NetHack/NetHack) - _NetHack_の公式Gitリポジトリ
- 🎉 [OpenLara](https://github.com/XProger/OpenLara) - クラシックな_Tomb Raider_オープンソースエンジン。 [[Play](http://xproger.info/projects/OpenLara/)]
- 🎉 [TeeWorlds](https://github.com/teeworlds/teeworlds) - レトロなマルチプレイヤーシューティング。 [[Website](https://teeworlds.com/)]
- 🔒 [zDoom](https://github.com/ZDoom/gzdoom) - すべてのDoomエンジンゲーム向けの現代的で機能中心のポート

### Java <a id="java-1"></a>
- 🔒 [Pixel Dungeon](https://github.com/watabou/pixel-dungeon) - ピクセルアートによるグラフィックとシンプルなインターフェースを持つ伝統的なローグライクゲーム

<br />
<br />

## 専門トピック <a id="specialty-topics"></a>
_ゲームエンジン／ゲーム開発の専門トピックと機能を扱います。_

### アセットパイプライン／形式 <a id="asset-pipeline--formats"></a>
- 📚 [glTF](https://www.khronos.org/gltf/) - シーン、メッシュ、マテリアル、アニメーション、データ用の実行時3Dアセット配信フォーマット。
- 🎉 [KTX-Software](https://github.com/KhronosGroup/KTX-Software) - _Khronos_のテクスチャコンテナツールとKTX/KTX2ワークフロー向けのライブラリ
- 🎉 [MikkTSpace](https://github.com/mmikk/MikkTSpace) - ノーマルマップ生成ツールで使われる接線空間の標準

### 色操作 <a id="color-manipulation"></a>
- 📚 [How to Choose Colors Procedurally](http://devmag.org.za/2012/07/29/how-to-choose-colours-procedurally-algorithms/) - プロシージャルパレットとその生成方法。
- 📚 [Red, Yellow, and Blue](https://daveeddy.com/2014/07/01/red-yellow-and-blue/) - 塗料色輪からRGB空間への色の変換。 [[Source](https://github.com/bahamas10/ryb)]

### 敵・経路探索 <a id="enemies--pathfinding"></a>
- 📚 [Intro to AI](https://www.raywenderlich.com/2808-introduction-to-ai-programming-for-games) - RayWenderlich.comでのゲーム敵AIプログラミングの導入
- 📚 [Beginner's Guide to Game AI](https://www.gamedev.net/tutorials/programming/artificial-intelligence/the-total-beginners-guide-to-game-ai-r4942/) - ゲームにおける敵AIに使われる概念の導入

### Entity Component System <a id="entity-component-systems"></a>
- 📚 [A Simple Entity Component System](https://austinmorlan.com/posts/entity_component_system/) - C++におけるECSの基礎
- 📚 [Evolve Your Hierarchy](https://cowboyprogramming.com/2007/01/05/evolve-your-heirachy/) - ECSについての概要とその利点、かつ[Cowboy Programming](https://cowboyprogramming.com)。
- 📚 [Intro to Component-Based Architecture in Games](https://www.raywenderlich.com/2806-introduction-to-component-based-architecture-in-games) - コンポーネントベースのアーキテクチャ
- 📚 [Nomad Game Engine](https://savas.ca/nomad) - C++で基盤からECSを構築する記事。 [[Source](https://github.com/taurheim/NomadECS)]
- 📚 [What's an Entity System](http://entity-systems.wikidot.com) - ECSの概要およびゲーム開発におけるその利用方法

### 流体・煙 <a id="fluid--smoke"></a>
- 📚 [Fluid Simulation on the GPU](https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-38-fast-fluid-dynamics-simulation-gpu) - GPU Gems Chapter 38 - GPU上で高速かつ安定した流体シミュレーション。
- 🔒 [Fluids-2D](https://github.com/mharrys/fluids-2d) - WebGLとThree.jsを活用したGPU上のリアルタイム流体動力学。
- 🔒 [GPU Fluid Experiments](http://haxiomic.github.io/GPU-Fluid-Experiments/html5/) - クロスプラットフォームGPU流体シミュレーション。 [[Source](https://github.com/haxiomic/GPU-Fluid-Experiments)]
- 🎉 [WebGL Fluid Simulation](https://paveldogreat.github.io/WebGL-Fluid-Simulation/) - ブラウザで流体を操作できる（モバイルでも）。 [[Source](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)]

### 幾何 <a id="geometry"></a>
- CSG (Constructive Solid Geometry)
    - 📚 [Constructive Solid Geometry](https://en.wikipedia.org/wiki/Constructive_solid_geometry) - ブール演算を用いた原始オブジェクトの結合技術
    - 🎉 [csg.js](https://github.com/evanw/csg.js/) - CSGを実装するJavaScriptライブラリ。 [[Examples](https://evanw.github.io/csg.js/)]
    - 🎉 [three-bvh-csg](https://github.com/gkjohnson/three-bvh-csg) - 3メッシュ-BVHに基づく高速かつ動的なCSG
    - 🎉 [three-csgmesh](https://github.com/manthrax/THREE-CSGMesh) - csg.jsライブラリのThree.jsとの利用に向けた変換
- Meshes
    - 📚 [Geometry, Surfaces, Curves, Polyhedra](https://paulbourke.net/geometry/) - メッシュ、形状、テクスチャなどに関する幾何学のトピック
    - 📚 [Mesh Transforms](https://ciechanow.ski/mesh-transforms/) - _Apple_'s UIViewメッシュ操作用のプライベートAPI。 [[Source](https://github.com/olegtyshcneko/CAMeshTransform)]
- Smoothing
    - 📚 [Laplacian Smoothing](http://rodolphe-vaillant.fr/entry/70/laplacian-smoothing-c-code-to-smooth-a-mesh) - ラプラシアンスムージングのためのC++コードを含むノートの草案
    - 📚 [Subdivision at Matt's Webcorner](http://graphics.stanford.edu/~mdfisher/subdivision.html) - サブディビジョン表面を用いたスムージング
    - 📚 [Subdivision Surfaces](http://www.holmes3d.net/graphics/subdivision/) - サブディビジョン表面における異なるスキームの説明

### 毛髪 <a id="hair"></a>
- 📚 [Fuzzy Meshes](https://medium.com/@Zadvorsky/fuzzy-meshes-4c7fd3910d6f) - コーンと重力を使ってフェルをシミュレーション。 [[Source](https://github.com/zadvorsky/three-fuzzy-mesh)]

### 照明・影 <a id="lighting--shadows"></a>
- Gamma
    - 📚 [What Every Coder Should Know About Gamma](https://blog.johnnovak.net/2016/09/21/what-every-coder-should-know-about-gamma/) - 光の発射と視覚的な明るさ
- Lighting 2D
    - 📚 [Gleaner Heights: 2D Lighting](http://gleanerheights.blogspot.com/2017/05/lighting-in-2d-games-shader-glsl.html?m=1) - GLSLを用いたゲームにおける2D照明の簡単な紹介
- Lighting 3D
    - 📚 [Basic Lighting](https://learnopengl.com/Lighting/Basic-Lighting) - _LearnOpenGL_による3D照明に関する記事。
    - 📚 [Forward Rendering vs. Deferred Rendering](https://gamedevelopment.tutsplus.com/articles/forward-rendering-vs-deferred-rendering--gamedev-12342) - 複数の照明を扱うための技術
    - 📚 [Forward+ Rendering / Tiled Forward Shading](https://www.3dgep.com/forward-plus/) - タイル化されたライトカリングによるフォワードレンダリング
- Shadows 2D
    - 📚 [2D Pixel Perfect Shadows](https://github.com/mattdesl/lwjgl-basics/wiki/2D-Pixel-Perfect-Shadows) - シェーダーを用いた2Dピクセル完全なライト／シャドウのアプローチ
    - 📚 [2D Visibility](https://www.redblobgames.com/articles/visibility/) - 2D可視性に関する優れたインタラクティブチュートリアル
    - 📚 [Fast 2D shadows in Unity](https://www.gamedeveloper.com/programming/fast-2d-shadows-in-unity-using-1d-shadow-mapping) - 3Dレンダリング技術を活用して高速2Dシャドウを実現する方法。
    - 📚 [Sight & Light](https://ncase.me/sight-and-light/) - ゲームに2Dの可視性／シャドウ効果を実装する方法。 [[Source](https://github.com/ncase/sight-and-light)]
    - 📚 [Symmetric Shadowcasting](https://www.albertford.com/shadowcasting/) - 視野角を計算する一般的な技術
- Shadows 3D
    - 📚 [Efficient Soft-Edged Shadows](https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-17-efficient-soft-edged-shadows-using) - GPU Gems 2 Chapter 17。
    - 📚 [Shadow Mapping](https://en.m.wikipedia.org/wiki/Shadow_mapping) - シャドウマッピングおよびその達成技術
- Volumetric
    - 🌎 [Threex Volumetric Spotlight](http://jeromeetienne.github.io/threex.volumetricspotlight/examples/basic.html) - 三次元光の例としてのThree.js。 [[Source](https://github.com/jeromeetienne/threex.volumetricspotlight)]

### ネットワーク <a id="network"></a>
- 📚 [Source Multiplayer Networking](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking) - _Valve_のSourceエンジンによるマルチプレイヤーシステム。

### パーティクル <a id="particles"></a>
- 📚 [Particles](https://learnopengl.com/In-Practice/2D-Game/Particles) - _LearnOpenGL_による記事
- 📚 [Soft Particles](https://keaukraine.medium.com/implementing-soft-particles-in-webgl-and-opengl-es-b968d61133b0) - WebGLにおけるソフトパティクルの実装

### 物理 <a id="physics"></a>
- 📚 [Fix Your Timestep!](https://gafferongames.com/post/fix_your_timestep/) 🔥 - 変動FPSでも物理を安定させる方法。
- 📚 [Game Physics from Scratch](https://brm.io/game-physics-for-beginners/) - ゲーム物理の初期リソース
- 📚 [Intro to Physics](https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics) - パート1：剛体動力学の概要
- 📚 [Open Source Physics Engines](https://www.tapirgames.com/blog/open-source-physics-engines) - オープンソース物理エンジンのリスト
- Platformer
    - 📚 [2D Physics Games](https://www.gamedeveloper.com/design/how-to-create-2d-physics-games-with-box2d-library) - Box2Dを用いた水、ロープ、重力、線、車両など
    - 📚 [Basic 2D Platformer Physics](https://gamedevelopment.tutsplus.com/series/basic-2d-platformer-physics--cms-998) - プラットフォーム型ゲーム用の物理システムの構築方法
- Ropes / Chains
    - 📚 [Draw SVG rope using JavaScript](https://muffinman.io/blog/draw-svg-rope-using-javascript/) - SVGパスベクターロープ描画
    - 📚 [Ropes in Contraption Maker](https://www.gamedeveloper.com/design/ropes-in-contraption-maker) - _Contraption Maker_におけるロープの物理を実装
    - 🌎 [Matter.js: Chains](https://brm.io/matter-js/demo/#chains) - _Matter.js_を使ったチェインデモ。 [[Source](https://github.com/liabru/matter-js/blob/master/examples/chains.js)]
- Soft Body
    - 📚 [Blob Physics](https://cowboyprogramming.com/2007/01/05/blob-physics/) - Verlet物理を用いて2Dのブロブをシミュレート
    - 🌎 [Oryol: Bullet Cloth](https://floooh.github.io/oryol-samples/wasm/BulletPhysicsCloth.html) - _Oryol_ゲームフレームワークを使った_Bullet 3D_物理シミュレーションの布。 [[Source](https://github.com/floooh/oryol-samples/blob/master/src/BulletPhysicsCloth/BulletPhysicsCloth.cc)]
    - 🌎 [Three.js: Ammo Volume](https://threejs.org/examples/?q=physics#physics_ammo_volume) - _Ammo.js_と_Three.js_を使った3Dソフトボディ体積。 [[Source](https://github.com/mrdoob/three.js/blob/master/examples/physics_ammo_volume.html)]
- Verlet Physics
    - 📚 [Making a Verlet Physics Engine](https://medium.com/m/global-identity?redirectUrl=https%3A%2F%2Fbetterprogramming.pub%2Fmaking-a-verlet-physics-engine-in-javascript-1dff066d7bc5) - JavaScriptによる2D物理エンジンの内部構造
- Water / Buoyancy
    - 📚 [2D Water](https://prime31.github.io/water2d-part1/) - スプリングを用いた2D水のモデリング

### レンダリング <a id="rendering"></a>
- 📚 [GPU Driven Rendering](https://vkguide.dev/docs/gpudriven/gpu_driven_engines/) - GPU上でレンダリングを計算シェーダーで計算
- 📚 [Model Batching](https://webglfundamentals.org/webgl/lessons/webgl-qna-drawing-many-different-models-in-a-single-draw-call.html) - 1回のレンダリングコールで複数のモデルを描画

### スクリプト <a id="scripting"></a>
- 📚 [Adding Languages to Game Engines](https://www.gamedeveloper.com/programming/adding-languages-to-game-engines) - ゲームにスクリプトを追加した物語
- 📚 [Implementing a Scripting Engine](https://www.flipcode.com/archives/Implementing_A_Scripting_Engine-Part_1_Overview.shtml) - スクリプトエンジンをゼロから書く
- 📚 [Embedded Scripting Languages](https://caiorss.github.io/C-Cpp-Notes/embedded_scripting_languages.html) - ライブラリとして利用可能なスクリプト言語とエンジン
- 📚 [List of Embedded Scripting Languages](https://github.com/dbohdan/embedded-scripting-languages) - アプリケーション／ゲームで使用可能なスクリプト言語
- 📚 [Scriptorium](https://github.com/r-lyeh-archived/scriptorium) - ゲームスクリプト言語のベンチマーク

### シェーダー <a id="shaders"></a>
- 📚 [3D Game Shaders For Beginners](https://lettier.github.io/3d-game-shaders-for-beginners/index.html) 🔥 - ゲームを向上させるシェーダー。 [[Source](https://github.com/lettier/3d-game-shaders-for-beginners)]
- 📚 [Book of Shaders](https://thebookofshaders.com) 🔥 - をステップごとに解説。 [Fragment Shaders](https://www.khronos.org/opengl/wiki/Fragment_Shader) [[Source](https://github.com/patriciogonzalezvivo/thebookofshaders)]
- 🎉 [CrossShader](https://github.com/alaingalvan/CrossShader) - GLSL、HLSL、Metalなどでのシェーダーのクロスコンパイル
- 🌎 [Geeks3D Shader Library](https://www.geeks3d.com/shader-library/) - ポストプロセス、照明、ユーティリティなど
- 📚 [Review of Shader Languages](https://web.archive.org/web/20260201143258/https://alain.xyz/blog/a-review-of-shader-languages) - HLSL、GLSL、MSL、WGSLの違い
- 📚 [Ronja Tutorials](https://github.com/ronja-tutorials/ShaderTutorials) - シェーダー技術に関するチュートリアルを多数提供。
- 🌎 [Shader Park](https://github.com/shader-park/shader-park-core) - JavaScriptによるシェーダープログラミング。
- 💰 [Shader Survival Guide](https://www.gameslave.dev/theshadersurvivalguide) - Unity Shader Graphを用いたシェーダーとVFXの世界への導入。
- 🌎 [SHADERed](https://github.com/dfranx/SHADERed) - C++で書かれたシェーダーIDE。
- 🌎 [Shadertoy](https://www.shadertoy.com) - オンラインでシェーダーを構築・共有。
- Bloom
    - 📚 [LearnOpenGL Tutorial](https://learnopengl.com/Advanced-Lighting/Bloom) - OpenGLで使用されるブローム照明の技術を解説。
    - 🌎 [Three.js: Bloom Example](https://threejs.org/examples/?q=bloom#webgl_postprocessing_unreal_bloom) - _Three.js_を使ったWebGLブロームポストプロセス。 [[Source](https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_unreal_bloom.html)]
    - 📚 [Unity Tutorial](https://catlikecoding.com/unity/tutorials/advanced-rendering/bloom/) - ブローム効果のサポートを追加する方法。
- Dithering
    - 📚 [Dithering on the GPU](http://alex-charlton.com/posts/Dithering_on_the_GPU/) - 8x8ベイアーダイタリングを用いたGLSLにおける順序ダイタリング。
- Fire
    - 📚 [Fire Shader in GLSL](https://clockworkchilli.com/blog/8_a_fire_shader_in_glsl_for_your_webgl_games) - ノイズテクスチャとマスクを用いたフィアーアイントロシェーダー。
    - 🌎 [Simplex 3D Noise](https://www.shadertoy.com/view/MllfDn) - ShaderToyにおけるシンプルノイズによる火のシミュレーションシェーダー。
- Lines
    - 📚 [Drawing Lines](https://mattdesl.svbtle.com/drawing-lines-is-hard) - 2D/3Dライン描画のための技術。
- Noise
    - 📚 [Book of Shaders: Noise](https://thebookofshaders.com/11/) - Book of Shadersによる優れたGLSLノイズ記事。
    - 📚 [Color Banding](https://shader-tutorial.dev/advanced/color-banding-dithering/) - ノイズやダイタリングを用いてグラデーションの描画を改善する方法。
    - 🎉 [Psrdnoise](https://github.com/stegu/psrdnoise/) - 2D/3のタイル化シンプルノイズの生成。
    - 📚 [Understanding Perlin Noise](http://adrianb.io/2014/08/09/perlinnoise.html) - C#で書かれたパーソンノイズの解析。 [[Source](https://gist.github.com/Flafla2/f0260a861be0ebdeef76)]
    - 🎉 [WebGL Noise](https://github.com/stegu/webgl-noise/) - オリジナルの_Ashima Arts_2D、3Dおよび4Dノイズ関数の維持されているブランチ。
- Outlines
    - 🌎 [Fast Solid 2D Outline](https://www.shadertoy.com/view/XdV3Dc) - 2D画像のアルファチャンネルにアウトラインを描く。
    - 📚 [Let it glow!](http://blogs.love2d.org/content/let-it-glow-dynamically-adding-outlines-characters) - キャラクターに動的にアウトラインを追加するためのシェーダーコード付き記事。
    - 🎉 [Outline Shader](https://www.reddit.com/r/godot/comments/8g067a/the_perfect_outline_shader_atleast_close/) - 良いアウトラインシェーダー。 [[Source](https://github.com/steincodes/godot-shader-tutorials)]
    - 📚 [Outlines w/Surface IDs](https://omar-shehata.medium.com/better-outline-rendering-using-surface-ids-with-webgl-e13cdab1fd94) - 深さ、法線、表面IDを組み合わせた技術。 [[Source](https://github.com/OmarShehata/webgl-outlines)]
    - 📚 [Sketchy Outling](https://lettier.github.io/3d-game-shaders-for-beginners/outlining.html) - スケッチ風アウトラインの生成に関する記事。
- Pixelation
    - 📚 [Pixel Art Shaders](https://alaingalvan.tumblr.com/post/79829067408/glsl-pixel-art-shaders) - ピクセルアートゲーム向けの有用なGLSLポストプロセスシェーダー。
    - 🌎 [Three.js: Pixelation Example](https://threejs.org/examples/?q=pixel#webgl_postprocessing_pixel) - _Three.js_を使ったWebGLピクセル化ポストプロセス。 [[Source](https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_pixel.html)]
- Postprocessing
    - 📚 [Image Editor Effects](https://github.com/alaingalvan/image-editor-effects) - WebGL画像フィルタ／効果シェーダー。
- Upscaling
    - 📚 [How do I perform an xBR or hqx filter in XNA?](https://gamedev.stackexchange.com/questions/87275/how-do-i-perform-an-xbr-or-hqx-filter-in-xna/87821#87821) - スケーリングシェーダーのコード。
    - 📚 [hqx](https://en.wikipedia.org/wiki/Hqx) - マキス・ステピンが開発したhqxピクセルアートアップスケーリングアルゴリズムについてのウィキペディア記事
- Water / Refraction
    - 📚 [2D Water Shader](https://rotatingcanvas.com/fragment-shader-to-simulate-water-surface-in-libgdx/) - _libGDX_で2D水表面をシミュレートするGLSLフラグメントシェーダー
- Wireframe
    - 📚 [Flat and Wireframe Shading](https://catlikecoding.com/unity/tutorials/advanced-rendering/flat-and-wireframe-shading/) - バリアトリクス座標を使用したフラットシェーディング／ワイヤーフレーム

### 符号付き距離場 <a id="signed-distance-fields"></a>
- 📚 [2D SDFs](https://iquilezles.org/articles/distfunctions2d/) - 基本2Dプリミティブのための署名距離関数。
- 📚 [3D SDFs](https://iquilezles.org/articles/distfunctions/) - 基本的な3Dプリミティブ用の符号距離関数
- 📚 [CSG w/SDFs](https://jasmcole.com/2019/10/03/signed-distance-fields/) - 円形のSDFを使ってCSGで3Dオブジェクトを構築。 [[Source](https://github.com/jasmcole/Blog/tree/master/CSG)]
- 📚 [Bezier Strokes](https://vladjuckov.github.io/beziers-sdf/) - ベジェストロークをSDFでレンダリングするブログ記事
- 📚 [Signed Distance Field Resources](https://github.com/CedricGuillemet/SDF) - チュートリアル、論文、ソフトウェア、デモ、ディスカッションなど
- 🎉 [SDF Mesh Generation](https://github.com/fogleman/sdf) - SDFを使って3Dメッシュを生成するPython API

### タイリング <a id="tiling"></a>
- 📚 [Auto-Tile](https://gamedevelopment.tutsplus.com/tutorials/how-to-use-tile-bitmasking-to-auto-tile-your-level-layouts--cms-25673) - タイルビットマスクを使ってレベルレイアウトを自動タイル化する方法
- 📚 [List of Eucliden Uniform Tilings](https://en.wikipedia.org/wiki/List_of_Euclidean_uniform_tilings) - 一様タイリング、空間埋め尽くし多角形についてのウィキペディア記事
- 📚 [Space-Filling Polyhedron](https://mathworld.wolfram.com/Space-FillingPolyhedron.html) - 、空間を埋める3D多角形。 [Polyhedra](https://en.wikipedia.org/wiki/Category:Space-filling_polyhedra) [[5 Space-Filling Polyhedra](https://www.steelpillow.com/polyhedra/five_sf/five.html)]

### 透明表現 <a id="transparency"></a>
- 📚 [Depth Peeling](https://developer.download.nvidia.com/assets/gamedev/docs/OrderIndependentTransparency.pdf) - 順序に依存しない透過性を実現する方法
- 📚 [Intro to Order-Independent Transparency](https://learnopengl.com/Guest-Articles/2020/OIT/Introduction) - _LearnOpenGL_による記事
- 📚 [Weighted, Blended](http://casual-effects.blogspot.com/2015/03/implemented-weighted-blended-order.html) - 順序に依存しない透過性を実現する方法

<br />
<br />

## ツール／ソフトウェア <a id="tools--software"></a>
_ゲームエンジン／ゲーム開発を支援するソフトウェアです。_

### 厳選コレクション <a id="awesome-collections-2"></a>
- 🌎 [Itch.io Tools](https://itch.io/tools) - _Itch.io_上のゲーム開発ツールの豊富なコレクション
- 📚 [Tiny Tools](https://tinytools.directory/) - ゲーム開発に役立つかもしれないツール

### アニメーションソフトウェア <a id="animation-software"></a>
- 💸 [Cascadeur](https://cascadeur.com) - 物理ベースのキャラクターアニメーションに使える3Dアニメーションソフト
- 🆓 [DragonBones](https://dragonbones.github.io/en/index.html) - オープンソース2Dゲームの骨格アニメーションソリューション。 [[Source](https://github.com/DragonBones/)]
- 💰 [FaceFX](https://facefx.com/) - オーディオベースの顔アニメーションのリードプロバイダー。
- 💸 [Mixamo](https://www.mixamo.com/#/) - ゲーム、映画などに使える3Dキャラクターアニメーションツール。_Adobe_による
- 💸 [Spine](http://esotericsoftware.com/) - ゲーム用2Dアニメーション。

### 音声ツール <a id="audio-tools"></a>
- Music
    - 🆓 [Ardour](https://ardour.org) - レコード、編集、ミックス。 [[Source](https://github.com/Ardour/ardour)]
    - 🆓 [Audacity](https://www.audacityteam.org) - マルチトラックオーディオエディタおよびレコーダー。 [[Source](https://github.com/audacity/audacity)]
    - 🆓 [Bosca Ceoil](https://boscaceoil.net) - 音楽を作成するための使いやすいツール
    - 🆓 [Cakewalk](https://www.bandlab.com/products/cakewalk) - 完全な音楽制作パッケージ
    - 🆓 [FamiStudio](https://famistudio.org) - チップチューンアーティストやNESホームブリュア向けの音楽エディタ。 [[Source](https://github.com/BleuBleu/FamiStudio)]
    - 💸 [fmod](https://www.fmod.com) - ゲーム向けの人気（_Hades_、_Celeste_、_Untitled Goose Game_）の音声ソフトウェア
    - 💸 [KiraStudio](https://kirastudio.org/) - 明瞭性、自動化、音声制作に特化した軽量音楽スタジオ
    - 🆓 [LMMS](https://lmms.io) 🔥 - 跨プラットフォームの音楽制作ソフトウェア。 [[Source](https://github.com/lmms/lmms)]
    - 🆓 [Sound Box](https://gitlab.com/mbitsnbites/soundbox) - ブラウザ内で合成音楽を作成可能。小型デモに最適。
    - 🆓 [ZzFXM](https://keithclark.github.io/ZzFXM/tracker/) - ミニJavaScriptアプリで使用可能な音楽ジェネレーター。 [[Source](https://github.com/keithclark/ZzFXM)]
- Sound Effects
    - 🆓 [Bfxr](https://www.bfxr.net) - クラシック。ゲーム用のシンプルなサウンドエフェクトを作成。 [[Source](https://github.com/increpare/bfxr2)]
    - 🆓 [ChipTone](https://sfbgames.itch.io/chiptone) - サウンドエフェクトを生成するツール。
    - 💸 [sfxia](https://rxi.itch.io/sfxia) - ミニ音声生成器。
    - 🆓 [sfxr](https://www.drpetter.se/project_sfxr.html) - オリジナルのミニサウンドエフェクトツール。
    - 🆓 [ZzFX](https://killedbyapixel.github.io/ZzFX/) - ミニJavaScriptサウンドエフェクトシステム / Zuper Zmall Zound Zynth。 [[Source](https://github.com/KilledByAPixel/ZzFX)]

### 色／パレット <a id="color--palettes"></a>
- 🌎 [Colormind](http://colormind.io) - 色のシームレスなスケームを生成。写真や芸術作品などから色のスタイルを学習可能。
- 🌎 [COLOURlovers](https://www.colourlovers.com) - 色、パレット、パターンを共有できる。
- 🌎 [Coolors](https://coolors.co) - 高速色パレット生成器。
- 🌎 [Huemint](https://huemint.com) - グラフィックデザイン用に機械学習を用いて色を生成。
- 🌎 [Lospec](https://lospec.com/palette-list) - ピクセルアート用のパレットデータベース。
- 🎉 [Palette Extractor](https://pixelpixi.github.io/spritewright/palette-extractor/) - 任意のスプライトまたは画像からパレットを抽出し、GPL、ASEまたはヘキサを出力。 [[Source](https://github.com/pixelpixi/spritewright)]
- 🌎 [Paletton](https://paletton.com) - 色の輪の補色を探索できる。

### デバッグ／プロファイリング <a id="debugging--profiling"></a>
- 🆓 [Nsight](https://developer.nvidia.com/nsight-graphics) - Direct3D、Vulkan、OpenGL、OpenXRで構築されたフレームをデバッグ、プロファイリング、エクスポート。
- 🆓 [PIX](https://learn.microsoft.com/en-us/windows/win32/direct3dtools/pix/articles/general/pix-overview) - Direct3D 12を使用するゲーム開発者向けのデバッグおよびプロファイリングツール。
- 🎉 [RenderDoc](https://github.com/baldurk/renderdoc) - スタンドアローンのグラフィックスデバッグツール。
- 🎉 [Tracy Profiler](https://github.com/wolfpld/tracy) - フレームプロファイラー。

### 画像エディター <a id="image-editors"></a>
- 🆓 [GIMP](https://www.gimp.org) - GNU画像編集プログラム、オープンソース画像エディタ。 [[Source](https://github.com/GNOME/gimp)]
- 🆓 [Photopea](https://www.photopea.com) - オンラインフォトエディタ。

### レベルエディター <a id="level-editors"></a>
- 💰 [Crocotile 3D](https://prominent.itch.io/crocotile3d) - 2Dタイルを使って3Dシーンを作成するツール。
- 💰 [Cygon](https://www.cygon.tech/) - 高速かつ簡単なゲーム環境のプロトタイピング。
- 🆓 [Radiant](https://icculus.org/gtkradiant/) - 跨プラットフォームのレベルエディタ for ゲーム。 [idTech](https://en.wikipedia.org/wiki/Id_Tech) [[Source](https://github.com/TTimo/GtkRadiant)]
- 🆓 [TrenchBroom](https://trenchbroom.github.io) - _Quake-Engine_ ゲーム向けのレベルエディタ。 [[Source](https://github.com/TrenchBroom/TrenchBroom)]

### マテリアル／テクスチャ <a id="materials--textures"></a>
- 💰 [Filter Forge](https://www.filterforge.com) - 写真エフェクト、リアルなテクスチャ、視覚編集機能。
- 🆓 [JSplacement](https://windmillart.net/?p=jsplacement) - マルチプラットフォーム対応の擬似乱数ディスプレースメントマップ生成器。
- 🆓 [Material Maker](https://www.materialmaker.org) - プロセス マテリアルメーカー。 [physically-based rendering](https://en.wikipedia.org/wiki/Physically_based_rendering) [[Source](https://github.com/RodZill4/material-maker)]
- 🆓 [Materialize](http://boundingboxsoftware.com/materialize/) - 画像からゲーム用マテリアルを作成するツール。 [[Source](https://github.com/BoundingBoxSoftware/Materialize)]
- 💸 [PixPlant](https://www.pixplant.com/index.php) - タイル3Dマテリアルの簡単な作成を可能にするツール。
- 🆓 [SPARTAN](https://pnjeffries.itch.io/spartan-procjam-edition) - さまざまなタイル可能な背景タイプを生成。
- 🆓 [TexaTool](https://kronbits.itch.io/texatool) - スライダーを動かすことでタイル可能なテクスチャを生成するオンラインツール。
- 🆓 [Texgen.js](https://texgenjs.org) - JavaScriptテクスチャジェネレーターツール。 [[Source](https://github.com/mrdoob/texgen.js)]

### モデリングツール <a id="modeling-tools"></a>
- 💰 [3DS Max](https://www.autodesk.com/products/3ds-max/) - 3Dモデリングとレンダリングに特化したクラシックソフトウェア。
- 🆓 [ArmorPaint](https://armorpaint.org) - 物理ベースのテクスチャペインティング、3Dモデルにdropインして塗りつける。 [[Source](https://github.com/armory3d/armortools)]
- 💰 [Asset Forge](https://assetforge.io) - 3Dモデルと2Dスプライトをブロックを使って作成します。
- 🆓 [Blender](https://www.blender.org) 🔥 - 開源3Dモデリングの標準。 [[Source](https://github.com/blender/blender)]
- 🆓 [Meshroom](https://alicevision.org/#meshroom) - 3D再構成、フレームワークで構築されたもの。 [AliceVision](https://github.com/alicevision/AliceVision) [[Source](https://github.com/alicevision/meshroom)]
- 💸 [ZBrush](https://www.maxon.net/en/zbrush) - シンプルで使いやすい3Dスケルトツール。

### パーティクルツール <a id="particle-tools"></a>
- 💸 [Particle Designer](https://www.71squared.com/particledesigner) - macOS向けに設計された強力な粒子エフェクト編集器。
- 💸 [TimelineFX](https://www.rigzsoft.co.uk) - ゲーム、アプリ、ウェブページに素晴らしいパーティクル効果を追加します

### ピクセルアート <a id="pixel-art"></a>
- 💸 [Aseprite](https://www.aseprite.org) - アニメーションスプライト編集ツールおよびピクセルアートツール。 [[Source](https://github.com/aseprite/aseprite)]
- 💰 [Ditherdragon](https://winterveil.itch.io/ditherdragon) - アート、スケッチ、画像をピクセルアートにリサンプルします
- 💰 [Fluid FX](https://codemanu.itch.io/fluid-fx) - 爆発、血、煙など、アニメーションを流体シミュレーションで実現します
- 💰 [Juice FX](https://codemanu.itch.io/juicefx) - スプライトやアニメーションにスタイルを簡単に追加します
- 🆓 [Piskel](https://www.piskelapp.com) - オンラインでアニメーションスプライトおよびピクセルアートを編集。 [[Source](https://github.com/piskelapp/piskel)]
- 💰 [PixaTool](https://kronbits.itch.io/pixatool) - 画像、スプライト、動画を変換してピクセルアートを作成します
- 💰 [Pixel FX](https://codemanu.itch.io/particle-fx-designer) - ピクセルアートのパーティクル効果を作成し、スプライトシートにレンダリングします
- 🎉 [Pixelorama](https://github.com/Orama-Interactive/Pixelorama) - 開源ピクセルアートマルチツール。 [[Web Version](https://orama-interactive.itch.io/pixelorama)]
- 💰 [Smear FX](https://codemanu.itch.io/smear-fx) - 2Dアニメーションにスメアを加えて、よりリアルな表現にします
- 💰 [Sprite Illuminator](https://www.codeandweb.com/spriteilluminator) - ゲームエンジン内で2Dスプライトを使って驚くような光効果を作成します
- 💰 [Texture Packer](https://www.codeandweb.com/texturepacker) - スプライトシートを作成し、ゲームグラフィックを最適化します

### タイルマップエディター <a id="tilemap-editors"></a>
- 🎉 [Ogmo Editor](https://github.com/Ogmo-Editor-3/OgmoEditor3-CE) - 無料で、開源のプロジェクト指向タイルマップ編集ツール。
- 🆓 [Sprite Fusion](https://www.spritefusion.com/) - 無料で、ウェブベースの2Dタイルマップ編集ツール。Unity、Godotなどへのエクスポートに対応。
- 🆓 [Tiled](https://www.mapeditor.org) - すべてのタイルベースゲーム向けの汎用タイルマップ編集ツール。 [[Source](https://github.com/mapeditor/tiled)]

### ベクターエディター <a id="vector-editors"></a>
- 🆓 [Inkscape](https://inkscape.org) - マルチプラットフォーム、開源ベクターグラフィックス編集ツール。 [[Source](https://github.com/inkscape/inkscape)]
- 🆓 [Krita](https://krita.org/en/) - プロクオリティの開源ペインティング。 [[Source](https://github.com/KDE/krita)]
- 💰 [Vec Maker](https://kronbits.itch.io/vecmaker) - 使いやすいベクターデザイン。

### ボクセル <a id="voxel"></a>
- 💰 [Ken Shape](https://tools.kenney.nl/kenshape/) - 2D、3DのCC0 1.0ゲームグラフィックスおよびその他の資産を描画。
- 🎉 [IsoVoxel](https://github.com/tommyettinger/IsoVoxel) - _MagicaVoxel_ .voxファイルから等角ピクセルアートを生成します
- 🆓 [MagicaVoxel](https://ephtracy.github.io) - 軽量なボクセルアートエディタ
- 💰 [Qubicle](http://minddesk.com/) - 人気のある（_Crossy Road_、_Pacman 256_）voxelエディタ。3Dモデルの簡単な作成が可能。

<br />
<br />

## ゲーム素材 <a id="video-game-assets"></a>
_ゲームとゲームエンジンを形にするための素材です。_

### 音声素材 <a id="audio-assets"></a>
- Music
    - 🆓 [BandLab Sounds](https://www.bandlab.com/sounds/home) - 音楽制作に使用する高品質のループとパック
    - 💸 [Bensound](https://www.bensound.com/royalty-free-music) - オリジナルの音楽トラック、署名を付けて無料。ゲームに最適です
    - 💸 [Incompetech](https://incompetech.com/wordpress/) - ゲーム用の素晴らしいトラックコレクション。購入または署名が必要です
    - 💸 [Melody Loops](https://www.melodyloops.com/music/free/) - 無料と手頃な価格の音楽ループの素晴らしい組み合わせ
    - 💸 [Soundimage](https://soundimage.org/looping-music/) - ゲーム用のループ音楽トラック。購入または署名が必要です
- Sound Effects
    - 🆓 [Freesound](https://freesound.org/browse/) - コミュニティによる無料サウンドエフェクトアーカイブ
    - 💸 [Free Sound Effects](https://www.freesoundeffects.com/) - 豊富なサウンドエフェクトコレクション
    - 💰 [Soundsnap](https://www.soundsnap.com) - サブスクリプション制のプロフェッショナルサウンドエフェクトライブラリ

### グラフィック素材 <a id="graphic-assets"></a>
- 💸 [Flaticon](https://www.flaticon.com) - 品質の高いベクターアイコンとスタンプ
- 💸 [Freepik](https://www.freepik.com) - イラスト、写真、アイコン、プレゼンテーションテンプレート
- 🆓 [Kenny](https://www.kenney.nl/assets) 🔥 - 2D/3D CC0 1.0ゲームグラフィックスおよびその他の資産。
- 🆓 [Open Game Art](https://opengameart.org) - 無料／公有領域のゲームアートをオンラインで提供するポータル
- 🆓 [Top Free Game Assets](https://itch.io/game-assets/free) - _Itch.io_ に掲載されているトップクラスの無料ゲーム資産

### マテリアル素材 <a id="material-assets"></a>
- 🆓 [AmbientCG](https://ambientcg.com) - 物理ベースレンダリングに使用可能な公有領域素材
- 🆓 [Pmndrs Materials](https://github.com/pmndrs/market-assets/tree/main/files/materials) - 公有領域素材のコレクション

### モデル素材 <a id="model-assets"></a>
- 🆓 [Pmndrs Market](https://github.com/pmndrs/market) - 公有領域モデルのコレクション
- 🆓 [Poly Pizza](https://poly.pizza) - 数千もの無料の低多面体モデルを使って、美しいものを構築しよう
- 🆓 [Quaternius](https://quaternius.com) - CC0 1.0 3Dモデルのコレクション。
- 📚 [Retro3DGraphicsCollection](https://github.com/Miziziziz/Retro3DGraphicsCollection) - 著作権なし、レトロ（_PS1_ スタイル）3Dグラフィック資産
- 💸 [Sketchfab](https://sketchfab.com) - 膨大な3D資産ライブラリ

<br />
<br />

## アーカイブ <a id="archive"></a>

_削除したリンク切れ項目は[アーカイブ](https://github.com/stevinz/awesome-game-engine-dev/blob/f7f76faaf7f78ab3c5f24cbe10e7b9a83a205a4b/ARCHIVE.md)に保持します。_

<br />

## 凡例 <a id="legend"></a>

_絵文字の意味です。_

- オープンソースソフトウェア
    - ⭐ - [パブリックドメインライセンス](https://en.wikipedia.org/wiki/Public-domain-equivalent_license) ([CC0](https://creativecommons.org/publicdomain/zero/1.0/), [BOLA](https://blitiri.com.ar/p/bola/), [WTFPL](https://en.wikipedia.org/wiki/WTFPL), [Unlicense](https://en.wikipedia.org/wiki/Unlicense), etc.)
    - 🎉 - [許容的ライセンス](https://en.wikipedia.org/wiki/Permissive_software_license) ([MIT/Expat](https://en.wikipedia.org/wiki/MIT_License), [BSD](https://en.wikipedia.org/wiki/BSD_licenses), [ZLIB/LIBPNG](https://en.wikipedia.org/wiki/Zlib_License), [ISC](https://en.wikipedia.org/wiki/ISC_license), [Apache](https://en.wikipedia.org/wiki/Apache_License), [Boost](https://www.boost.org/users/license.html) etc.)
    - 🔒 - [コピーレフトライセンス](https://en.wikipedia.org/wiki/Copyleft) ([CC](https://en.wikipedia.org/wiki/Creative_Commons_license), [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License), [LGPL](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License), [MPL](https://en.wikipedia.org/wiki/Mozilla_Public_License), etc.)
    - ❓ - 不明なライセンス
- 素材／サービス／ツール
    - 🆓 - 無料
    - 💰 - 有料
    - 💸 - 一部無料
- その他
    - 📚 - 記事・ブログ・コレクション・一覧・チュートリアル
    - 🔥 - 注目すべき優れた資料
    - 🌎 - Webサイト

<br />

## コントリビューション <a id="contributing"></a>

_[コントリビューションガイド](https://github.com/stevinz/awesome-game-engine-dev/blob/f7f76faaf7f78ab3c5f24cbe10e7b9a83a205a4b/CONTRIBUTING.md)を参照してください。_

<br />
