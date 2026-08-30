---
title: "tomodachi94/awesome-computercraft"
description: "tomodachi94/awesome-computercraft の正規スナップショット"
licenseSource: "github-tomodachi94-awesome-computercraft-readme-md"
---





<a id="awesome-computercraft"></a>
# Awesome ComputerCraft [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://raw.githubusercontent.com/tomodachi94/awesome-computercraft/bdefad4c76cb2be7dd88389a67045dab5c60b5d8/assets/cc-tweaked-logo.png" align="right" width="100">](https://computercraft.cc)

> [ComputerCraft](https://computercraft.info) と[そのフォーク](https://computercraft.cc)の有用なプログラム、ライブラリ、文献、Mod を集めたリストです。

**ComputerCraft** は、Lua でプログラミングできるコンピューターを Minecraft に追加する Mod です。**ComputerCraft: Tweaked** は、新しい Minecraft バージョン向けのフォークです。

このプロジェクトは [GitHub](https://github.com/tomodachi94/awesome-computercraft) で公開されており、サードパーティのウェブサイトでは正しく表示されない場合があります。

リストに追加すべきものがあれば、[Issue でお知らせください](https://github.com/tomodachi94/awesome-computercraft/issues/new/choose)。

貢献する場合は [CONTRIBUTING.md](https://github.com/tomodachi94/awesome-computercraft/blob/bdefad4c76cb2be7dd88389a67045dab5c60b5d8/CONTRIBUTING.md) を参照してください。
その他の質問については [FAQ](https://github.com/tomodachi94/awesome-computercraft/blob/bdefad4c76cb2be7dd88389a67045dab5c60b5d8/FAQ.md) を参照してください。

略称について: `CC` は ComputerCraft、`CC:T` は ComputerCraft: Tweaked、`CC:R` は ComputerCraft: Restitched を指します。

<a id="contents"></a>
## 目次



- [Mod](#mods)
  - [ComputerCraft Mod](#computercraft-mods)
  - [アドオン Mod](#add-on-mods)
  - [リソースパック](#resource-packs)
- [Lua プログラム](#lua-programs)
  - [ユーティリティ](#utility)
  - [ライブラリ](#library)
  - [娯楽](#fun)
  - [オペレーティングシステム](#operating-systems)
  - [経済](#economy)
  - [特定 Mod 向けプログラム](#mod-specific-programs)
- [Lua 以外のプログラム](#non-lua-programs)
  - [ブリッジ](#bridging)
  - [エミュレーター](#emulators)
  - [プラグイン](#plugins)
  - [ツール](#tools)
- [文献](#literature)
  - [解説記事](#essays)
  - [チュートリアル](#tutorials)
  - [図表と計算ツール](#charts-tables-and-calculators)
  - [その他のリスト](#other-lists)
- [リソース](#resources)



<a id="mods"></a>
## Mod
<a id="computercraft-mods"></a>
### ComputerCraft Mod

- [ComputerCraft: Tweaked](https://computercraft.cc) -  オリジナルのComputerCraftの現代版Minecraft向けのブランチ
- [ComputerCraft: Restitched](https://www.curseforge.com/minecraft/mc-mods/cc-restitched) -  CC:Tに適用可能なパッチセットで、Fabric上で実行可能にする
- [ComputerCraft](https://computercraft.info) -  コンピュータを追加し、Luaプログラムの実行を可能にするモジュール

<a id="add-on-mods"></a>
### アドオン Mod

- [Advanced Peripherals](https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals) - さまざまな周辺機器と、ほかの Mod を操作するための API を追加する Mod
- [Classic Peripherals](https://modrinth.com/mod/classicperipherals) - 長距離通信用の Radio Tower や、暗号処理を提供する Cryptographic Accelerator など、各種周辺機器を追加する Mod
- [Computronics](https://wiki.vexatos.com/wiki:computronics) -  さまざまな周辺機器を追加し、世界内のイベントの検知や音声操作を可能にする
- [Plethora](https://plethora.madefor.cc) -  周辺機器を追加し、多くのブロックを周辺機器として扱えるようにする。さらに、プレイヤーを周辺機器として操作できるようにする
    - [Plethora Fabric](https://github.com/SwitchCraftCC/Plethora-Fabric) - 1.19以降のPlethoraのFabric向けポート
- [CC:C Bridge](https://modrinth.com/mod/cccbridge) - ComputerCraftと[Create](https://modrinth.com/mod/create)の互換性を追加するモジュール
- [sc-peripherals](https://github.com/SwitchCraftCC/sc-peripherals) - 3Dプリンターを追加し、カスタムブロックやポスターの作成を可能にするモジュール
- [Turtlematic](https://www.curseforge.com/minecraft/mc-mods/turtlematic) - タートルの応用を拡張し、非常に強力な機能を提供するモジュール
- [UnlimitedPeripheralWorks](https://www.curseforge.com/minecraft/mc-mods/unlimitedperipheralworks) - CC:Tの機能を拡張するためのさまざまな周辺機器を追加。さらに、他のモジュール向けにも多くの周辺機器を追加する
- [Roadworks](https://github.com/znepb/Roadworks) - ComputerCraftで制御可能な交通信号機を追加するモジュール

<a id="resource-packs"></a>
### リソースパック

- [ComputerCreate](https://modrinth.com/resourcepack/computercreate) -  テクスチャパックを[Create mod](https://modrinth.com/mod/create)のスタイルで追加するリソースパック

<a id="lua-programs"></a>
## Lua プログラム
<a id="utility"></a>
### ユーティリティ

- [Artist](https://github.com/SquidDev-CC/artist) -  ComputerCraftの最初のアイテム管理システムの一つ
- [ComputerCraft Advanced Shell (cash)](https://cash.madefor.cc) -  ComputerCraft用のBourne互換シェル
- [CCVim](https://github.com/Minater247/CCVim/tree/rewrite-2026) - ComputerCraft用のVimの忠実なポート
- [Consult](https://consult.madefor.cc) -  多くのシステムと互換性を重視したテキストエディタ
    - [Consult: Recrafted](https://github.com/manaphoenix/CONSULT_RECRAFTED) -  Recraftedシステム向けのConsultのブランチ
- [`hopper.lua`](https://github.com/umnikos/hopper.lua) - コンテナ間のアイテム移動を行うコマンドラインプログラム
- [GEMU](https://github.com/9551-Dev/GEMU) -  ピクセルボックスをベースにしたCraftOS-PCのグラフィックスモードエミュレーター
- [`gist`](https://pastebin.com/zSLPYpqs) -  GitHub Gistのダウンロード/アップロードプログラムで、内蔵されている`pastebin`プログラムを拡張することを目的としたもの
- [Howl](https://github.com/SquidDev-CC/Howl) -  CCおよびCC:T.用のビルドシステム
- [LuaIDE](https://web.archive.org/web/20230211195528/http://www.computercraft.info/forums2/index.php?/topic/12347-luaide-10-you-might-actually-like-editing-in-game/) -  ゲーム中でLuaファイルを編集するためのフル機能IDE
- [MISC](https://github.com/Storehaus/CC-MISC) -  モジュラーリストストレージと工作システム
- [Mildly Better Shell (MBS)](https://github.com/SquidDev-CC/mbs) -  スクロールバックと補完の解像度向上を含む改善されたシェル
- [ModemShark](https://gist.github.com/MCJack123/56ca71555d9c0f78d4c985f1e9ad28e8) -  シンプルなUIを持つモーダムパケットスニファー
- [netshell](https://github.com/lyqyd/cc-netshell) -  別のコンピュータからコンピュータのシェルにアクセス
- [OrangeBox](https://github.com/walksanatora/orangebox) - ComputerCraftコンピュータへの仮想化サポート
- [rawshell](https://gist.github.com/MCJack123/8c8861e5e3082d2bed18d07641b5b2cc) -  CraftOS-PCの"raw mode"フォーマットをサポートし、ファイル転送、暗号化、パスワード、WebSocketsなど、現代的なnetshellの代替品
- [ShrekPrint](https://pinestore.cc/projects/115/shrekprint) - フルカラーおよび書籍サポートを備えた印刷ソフトウェア
- [ShrekWord](https://pinestore.cc/projects/114/shrekword) - ワードのようなドキュメントエディタ
- [unicornpkg](https://unicornpkg.madefor.cc) - 快適に使える現代的なパッケージマネージャー
- [FSEncrypt](https://gist.github.com/MCJack123/32c56917dc61da336ec0e8ca6aae39f8) -  透過ファイルシステム暗号化

<a id="library"></a>
### ライブラリ

- [Acidity](https://github.com/9551-Dev/acidity) -  シンプルなプロシージャル世界生成向けノイズ生成ライブラリ
- [Anavrins' ChaCha20](https://web.archive.org/web/20200924232302/http://www.computercraft.info/forums2/index.php?/topic/25474-chacha20-encryption-in-computercraft/) -  [ChaCha20](https://en.wikipedia.org/wiki/ChaCha20-Poly1305)の実装
- Anavrins' hashing libraries:
    - [MD5](https://pastebin.com/6PVSRckQ) -  [MD5](https://en.wikipedia.org/wiki/MD5)の実装
    - [SHA-1](https://pastebin.com/SfL7vxP3) -  [SHA-1](https://en.wikipedia.org/wiki/SHA-1)の実装に[HMAC](https://en.wikipedia.org/wiki/HMAC)サポートを含む
    - [SHA-256](https://web.archive.org/web/20230211193054/http://www.computercraft.info/forums2/index.php?/topic/8169-sha-256-in-pure-lua/) -  [SHA-256](https://en.wikipedia.org/wiki/SHA-2)の実装に[HMAC](https://en.wikipedia.org/wiki/HMAC)および[PBKDF2](https://en.wikipedia.org/wiki/PBKDF2)のサポートを含む
- [AUKit](https://mcjack123.github.io/AUKit/) -  ComputerCraft用の最高のオーディオ処理および変換ライブラリ
- [Basalt](https://basalt.madefor.cc/) -  ユーザー体験を重視したGUIライブラリ
- [Bigfont](https://pastebin.com/3LfWxRWh) -  異なるフォントサイズで文字を書くことを容易にできるライブラリ
- [C3D](https://c3d.madefor.cc/) -  高度な3DレンダリングAPI
- [CC-Archive](https://github.com/MCJack123/CC-Archive) -  ファイルのアーカイブおよび展開に必要な各種ライブラリ
- [dbprotect](https://gist.github.com/MCJack123/4cf6fc941a2d412b4195caafb9636363) -  `debug` APIへの保護ラッパーであり、保護関数内のアップバリューへのアクセスを制限できる
- [`ecc.lua`](https://web.archive.org/web/20190808224502/http://www.computercraft.info/forums2/index.php?/topic/29803-elliptic-curve-cryptography/) -  [elliptic-curve cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)の実装
- [ecnet](https://github.com/migeyel/ecnet) -  ComputerCraftにおける安全なネットワーク通信
- [GuiH](https://guih.madefor.cc) -  強力なGUIおよびグラフィックスライブラリ
- [IsometriH](https://github.com/9551-Dev/IsometriH) -  [isometric rendering](https://en.wikipedia.org/wiki/Isometric_video_game_graphics)エンジン
- [Luz](https://github.com/MCJack123/Luz) - Luaファイル用の極めて軽量な圧縮アルゴリズム
- [Milo](https://github.com/kepler155c/opus-apps/wiki/Milo-(crafting---storage-system)) -  製品の組み立ておよびインベントリ管理システム。注：これはOpusOSおよびPlethoraに依存しています
- [Pine3D](https://github.com/Xella37/Pine3D) - 高速性を重視した3Dレンダリングエンジン
- [PngLua](https://github.com/9551-Dev/pngLua) -  ComputerCraft用のPNG解析ライブラリ
- [`Pixelbox Lite`](https://github.com/9551-Dev/pixelbox_lite) - ComputerCraft用の非常に高速かつ柔軟なテレテキスト2Dレンダリングライブラリ
- [RedRun](https://gist.github.com/MCJack123/473475f07b980d57dd2bd818026c97e8) -  CraftOSでプログラムを終了後にバックグラウンドでプロセスを実行できる小さなライブラリ。DOS TSRに類似しています
- [Tamperer](https://github.com/Fatboychummy-CC/Tamperer) -  設定メニューの容易な作成を可能にするライブラリ
- [Tampl](https://github.com/9551-Dev/tampl) - 動的コード生成および既存プログラムへのコード挿入に最適化されたLuaトークン化およびパーサーライブラリ
- [Telem](https://telem.cyberbit.dev) - 周辺機器向けのテレメトリライブラリ。ストレージ、エネルギー、機械などのゲーム中およびクラウドベースのモニタリングダッシュボードを可能にする
- [VeriCode](https://gist.github.com/MCJack123/7752c85918bcf23ada028abd615e8750) -  モデムを介したコードの安全な転送を可能にするシンプルなコード署名関数を提供

<a id="fun"></a>
### 娯楽

- [AUKit austream](https://github.com/MCJack123/AUKit/blob/master/austream.lua) -  WAV、DFPWM、AIFF、AU、FLACをサポートするシンプルなオーディオプレイヤーAUKitに基づく
- [battleship](https://gist.github.com/MCJack123/7082da1d2ac725c33ff77389877ad7f4) - 人気の2人用ゲーム *[Battleship](https://en.wikipedia.org/wiki/Battleship_(game))* の実装
- [CCDoom](https://github.com/Xella37/CCDoom) - Pine3D を使って [*Doom* シューティングゲーム](https://en.wikipedia.org/wiki/Doom_(1993_video_game))を ComputerCraft へ移植したもの
- [CC-Minecraft](https://github.com/Xella37/CC-Minecraft) - *Minecraft* を Pine3D を使って ComputerCraft に移植した作品
- [LuaGB](https://github.com/MCJack123/LuaGB) -  Game Boy (Color) エミュレータの ComputerCraft への移植。CraftOS-PC で最も効果的。
- [lunatic86](https://github.com/MCJack123/lunatic86) -  8086 プログラマの PC エミュレータを ComputerCraft に移植した作品
- [Musicify](https://github.com/knijn/musicify) -  ComputerCraft で音楽を再生できる軽量クライアント：Tweaked
	- [tracc](https://github.com/MCJack123/tracc/tree/playAudio) -  ComputerCraft で 8 チャネルのポリフォニーをサポートする XM モジュールトラッカー／プレイヤー
- [YahtCC](https://gist.github.com/MCJack123/4f7f1635998f44630c8440e81213d32e) -  *[Yahtzee](https://en.wikipedia.org/wiki/Yahtzee)* のサイコロゲームの実装
- [YouCube](https://youcube.madefor.cc) -  ComputerCraft で YouTube およびその他のサービスにアクセス
- [YTP2CCP](https://pastebin.com/nxEMWHY3) -  コメント付き YouTube のピアノの記録を変換し、CC:T で再生

<a id="operating-systems"></a>
### オペレーティングシステム

- [LevelOS](https://install.leveloper.cc) -  Windows を模倣した現代的な GUI オペレーティングシステム
- [Opus](https://github.com/kepler155c/opus) -  GUI、アプリストア、多くのシステム関連 API を備えたオペレーティングシステム
- [Phoenix](https://phoenix.madefor.cc) - モジュール性を重視し、独自カーネルを実装したオペレーティングシステム
    - Phoenix は現在アルファ版です。
- [Recrafted](https://github.com/ocawesome101/recrafted) -  CraftOS をリライトした作品。機能面で完全な対応を保ちつつ、「より合理的な API デザイン」を維持。
- [UnBIOS](https://gist.github.com/MCJack123/42bc69d3757226c966da752df80437dc) -  CraftOS を「元に戻す」プログラム。BIOS を実行する前と同じ状態に戻す。OS 開発に有用。
- [cOS](https://github.com/knijn/cos) - NixOS に着想を得た、カスタマイズ可能な ComputerCraft OS


<a id="economy"></a>
### 経済

- [`colorful.kst`](https://github.com/znepb/colorful) - カラフルなブロックを販売し、必要に応じて色を塗ることができる Krist ストア
- [Kristify](https://kristify.madefor.cc/) - 現代版 ComputerCraft で高度にカスタマイズ可能な Krist ストアのソフトウェア。[Basalt](https://basalt.madefor.cc) によって駆動。
- [LP](https://github.com/migeyel/lp) - 購入・販売価格を供給と需要に基づいて動的に調整する Krist ストア
- [msks](https://github.com/ShrekshellraiserCC/msks) - Krist 仮想通貨向けの現代的でシンプルなストア
- [printshop](https://github.com/znepb/printshop) - 3Dプリントやポスターを販売するKristショップで、プレイヤーが自作デザインを印刷できる機能を備えたもの
- [Radon](https://github.com/Allymonies/Radon) - カテゴリや名前なしショップ、複数通貨に対応する高度にカスタマイズ可能なKristショップ

<a id="mod-specific-programs"></a>
### 特定 Mod 向けプログラム

> 注: このセクションには、特定の Mod 専用で、ユーティリティのセクションには適さないプログラムを掲載しています。

- [DraconicControl](https://pastebin.com/UqVHTht5) -  Draconic EvolutionのDraconic Reactorをコンピュータから制御できる機能
- [ReactorControl and TurbineControl](https://pastebin.com/p4zeq7Ma) -  Big Reactorsにおけるリアクターとタービンの自動管理
    - [ReactorControl patched](https://pastebin.com/2ZrbnH5w) -  前のプログラムは`parallel`APIを再帰的に使用しており、これが原因で動作が停止する可能性がある。その問題を修正したパッチが開発された
- [`cc-mek-scada`](https://github.com/MikaylaFischler/cc-mek-scada) - Mekanismの分裂反応炉をカスタマイズ可能な方法で制御するプログラム
- [`shrekflight`](https://p.sc3.io/t6ZRrJutrN) - クリエイティブモードのような飛行機能および指定座標への自動飛行を提供するプログラム

<a id="non-lua-programs"></a>
## Lua 以外のプログラム

> 注: このセクションには、Mod や Lua プログラムではなく、このリストの主題に**直接**関係するプログラムを掲載しています。

<a id="bridging"></a>
### ブリッジ

> 注: このサブセクションには、主にインターネット経由で、ゲーム外から ComputerCraft の機能へアクセスできるプログラムを掲載しています。


- [Cloud Catcher](https://github.com/SquidDev-CC/cloud-catcher) -  ゲーム外のコンピュータとの相互作用を可能にするプログラム

- [Krist Server](https://github.com/tmpim/Krist) -  Krist仮想通貨用のサーバーで、CCおよびCC:Tとの使用を想定
    - [KristForge](https://github.com/tmpim/kristforge) -  Krist仮想通貨を採掘するマイナー
    - [KristWeb2](https://github.com/tmpim/KristWeb2) -  Reactで書かれたKristのウェブウォレット
- [Netmount](https://github.com/tmpim/netmountcc) - カスタマイズ可能なWebSocketおよびWebDAVによるリモートストレージソリューション
- [Turtleshell](https://turtleshell.ginger.services/) - ゲーム内コンピュータを[SSH](https://en.wikipedia.org/wiki/Secure_Shell)経由でアクセスできるリレーサーバー
- [Ultron Control](https://gitlab.com/Merith-TK/ultron-control) -  タートルの制御をウェブAPIとして公開するプログラム

<a id="emulators"></a>
### エミュレーター

- [CCEmuX](https://emux.cc) -  CCおよびCC:T用のエミュレーターで、モジュールを直接実行するもの
- [Copy Cat](https://github.com/SquidDev-CC/copy-cat) -  ブラウザ内で動作するCC:T用エミュレーター
- [CraftOS-PC](https://www.craftos-pc.cc) -  速度を重視したC++で書かれたCC:T用エミュレーター

<a id="plugins"></a>
### プラグイン

- [CraftOS-PC for VS Code](https://www.craftos-pc.cc/docs/extension) -  CraftOS-PC内でVSCodeを介してプログラムの操作と実行を行う拡張機能
- [`craftos2-plugins`](https://github.com/MCJack123/craftos2-plugins) -  CraftOS-PC用の小さなプラグインのコレクションで、開発者が維持しているもの
- [VSCode Extensions for ComputerCraft](https://marketplace.visualstudio.com/items?itemName=lemmmy.computercraft-extension-pack) -  自明。CCおよびCC:Tの関数に自動補完を提供し、Lua言語サーバーを含む

<a id="tools"></a>
### ツール

- [ComputerCraft Music Converter](https://music.madefor.cc) - 音声ファイルをDFPWM（ComputerCraftの音声フォーマット）に変換するウェブアプリ
- [BIMG-Generator](https://github.com/ShrekshellraiserCC/BIMG-Generator) - 画像をBIMGフォーマットに変換するJavaプログラム
- [`cc-tstl-template`](https://github.com/MCJack123/cc-tstl-template) -  TypeScriptをLuaに変換するコンパイラのテンプレートで、ComputerCraftプログラムをTypeScriptで書くことができる
- [Quartz Encoder](https://cc.alexdevs.me/index.html) - 音声ファイルの URL を DFPWM または MDFPWM へ変換する API
- [sanjuuni](https://github.com/MCJack123/sanjuuni) -  画像および動画ファイルをComputerCraftでの再生およびストリーミングに適したさまざまなフォーマットに迅速に変換するプログラム

<a id="literature"></a>
## 文献
<a id="essays"></a>
### 解説記事

- [JackMacWindows's essay on ComputerCraft OSes](https://gist.github.com/MCJack123/4b2bca21bdc0cf5c67ce7177326c2154) -  適切なオペレーティングシステムの構築に関する提案、勧め方、励ましの内容を含む
- [JackMacWindows's essay on sane APIs](https://gist.github.com/MCJack123/39ac0847579b3676cc098aca5860c758) -  APIの使いやすさを高めるための提案を含む

<a id="tutorials"></a>
### チュートリアル
<a id="basics"></a>
#### 基礎
- [Direwolf20's tutorials](https://www.youtube.com/watch?v=wrUHUhfCY5A) -  ComputerCraftプログラミングの基礎を説明する動画シリーズ
- [Sethbling's tutorials](https://www.youtube.com/watch?v=DSsx4VSe-Uk) -  ComputerCraftプログラミングの基礎を説明する別の動画シリーズ
- Lyqyd's *Computer Basics* series ([1](https://web.archive.org/web/20170617144334/http://www.computercraft.info/forums2/index.php?/topic/15033-computer-basics-i/), [2](https://web.archive.org/web/20230719181359/https://www.computercraft.info/forums2/index.php?/topic/15041-computer-basics-ii/), [3](https://web.archive.org/web/20230719181437/https://www.computercraft.info/forums2/index.php?/topic/20905-computer-basics-iii/)) - ちょっと古くはありますが、あなたの旅の初めに非常に優れたものです.
- [The FTB Wiki's Getting Started guide for ComputerCraft](https://ftb.fandom.com/wiki/Getting_Started_(ComputerCraft)) -  スタートするための総合的なリソースです.

<a id="moderate-or-advanced"></a>
#### 中級・上級
- [Bomb Bloke's *Guide to Coroutines*](https://web.archive.org/web/20230210142049/https://www.computercraft.info/forums2/index.php?/topic/25670-bbs-guide-to-coroutines/) -  なぜコルーチンを使わないべきかを説明し、その使い方に関するチュートリアルを含む.

<a id="charts-tables-and-calculators"></a>
### 図表と計算ツール

- [JackMacWindows's coroutine flow chart](https://web.archive.org/web/20231212184953/https://cdn.discordapp.com/attachments/477911902152949771/959769473437560862/Blank_Diagram_1_Page_1.png) -  コルーチンがどのように動作するかを示す。各列は1つのコルーチンのコードフローを表す.
- [KingOfGamesYami's event flow chart](https://forums.computercraft.cc/index.php?topic=26.0) -  プログラムが実行される際にイベントの流れを示す.

- [Wojbie's decimal font chart](https://web.archive.org/web/20231212200503/https://cdn.discordapp.com/attachments/477911902152949771/933498000385400862/1642633650325141456271.png) and [Cake's hex font chart](https://web.archive.org/web/20231118175928/https://thox.madefor.cc/_images/encodings-cc-chars.png) - ComputerCraftフォント文字の十進数と十六進数のマッピングを含む.
- [Emma's ComputerCraft compatibility chart](https://docs.google.com/spreadsheets/d/1s4d21cL3QrUyegEzYaVXvqDr1zNorgyZ-fDWeopIC1k/edit?usp=sharing) -  エミュレータおよびゲーム内MODでの互換性を示す.
- [MasonGulu's monitor size calculator](https://monitorsize.madefor.cc/) - モニタに表示可能な文字数およびピクセル数を計算するオンラインツール.

<a id="other-lists"></a>
### その他のリスト

- [Awesome Lua](https://github.com/LewisJEllis/awesome-lua) - Luaプログラミング言語に特化したAwesomeリスト.
- [Awesome SwitchCraft](https://github.com/aspen-reeves/awesome-switchcraft) - SwitchCraftサーバーに特化したAwesomeリスト.
- [Awesome CC: Tweaked](https://github.com/Shlomo1412/awesome-cctweaked) - CC: Tweakedに関連するものだけをリストに含むAwesomeリスト。
- [Hengestone's list of languages which compile to Lua](https://github.com/hengestone/lua-languages/blob/master/README.md) -  Luaにコンパイルできる言語のリスト

<a id="resources"></a>
## リソース

- [`tweaked.cc` documentation](https://tweaked.cc) -  CCおよびCC:Tにおけるほとんどのメソッドについてのドキュメンテーションを含む
- [CC's forums](https://computercraft.info/forums2) -  チュートリアルやプログラムが豊富に収録された非常に貴重なリソース
- [CC:T's forums](https://forums.computercraft.cc) -  非常に貴重だが、比較的新しいもの
- [Minecraft Computer Mods Discord](https://discord.gg/H2UyJXe) -  CCおよびCC:Tにおけるプログラミングに関する助けを求めるためのDiscordサーバー
- [ComputerCraft's subreddit](https://reddit.com/r/computercraft) - 自分のComputerCraftの創作作品を紹介したり、助けを求めるためのSubreddit

- [Lua's manual](https://www.lua.org/manual/) -  `Tweaked.cc`に含まれていないメソッドについてのドキュメンテーションを含む。特に5（補助ライブラリ）および6（標準ライブラリ）のセクションが注目すべき
