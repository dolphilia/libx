---
title: "Awesome ActionScript 3"
description: "ActionScript 3を扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-robinrodricks-awesome-actionscript3-readme-md"
---

# Awesome ActionScript 3

ActionScript 3を扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

* [Development Tools](#development-tools)
* [Frameworks](#frameworks)
* [User Interface](#user-interface)
* [Multimedia](#multimedia)
* [Database](#database)
* [File Formats](#file-formats)
* [Networking](#networking)
* [Utilities](#utilities)
* [Runtimes](#runtimes)
* [AIR Native Extensions](#air-native-extensions)


<a id="development-tools"></a>
## 開発ツール
*This section includes commercial tools as well as free/open source tools.*

<a id="code-editors"></a>
#### コードエディター
* [FlashDevelop](http://flashdevelop.org/) - AS3およびAIR用の無料かつオープンソースのIDE、コード補完、デバッグ機能などを備えている。
* [Powerflasher FDT](http://fdt.powerflasher.com/) - Adobe Flash/AIRコンテンツ開発用のEclipseプラットフォームに基づく商用IDE。
* [Adobe Flash Builder](https://www.adobe.com/products/flash-builder.html) - Flexフレームワークでアプリケーションを構築するための商用IDE（高度なデバッグツールを備えている）。
* [Moonshine IDE](http://moonshine-ide.com/) - Moonshineは、ActionScript 3で構築された無料かつオープンソースの中重量級IDEであり、ActionScript 3、Apache Flex®、Apache FlexJS®およびFeathers開発に加え、クラウドおよびデスクトップサポートを提供する。
* [IntelliJ IDEA](https://www.jetbrains.com/help/idea/building-actionscript-and-flex-applications.html) - AS3をサポートする多くの言語を備えた商用IDE。
* [Visual Studio Code](https://as3mxml.com/) - Visual Studio Code向けのAS3およびMXML言語拡張機能。Windows、macOS、Linuxで動作。

<a id="live-debuggers"></a>
#### ライブデバッガー
* [Adobe Scout](https://www.adobe.com/products/scout.html) - AIRアプリケーションおよびゲーム向けの高度な視覚プロファイリングおよびデバッグツール（Stage3D対応）。
* [De-Monster Debugger](https://github.com/MrTact/monsterdebugger) - ライブAIRアプリケーションからのグラフィックスおよびデータをデバッグするための高度なツール。
* [De-Monster Debugger (Starling)](https://github.com/joshtynjala/monsterdebugger-client-starling) - De-Monster Debuggerのフォークであり、Starling Frameworkに対応している。

<a id="asset-creators"></a>
#### アセット作成ツール
* [Adobe Animate CC](https://www.adobe.com/products/animate.html) - ベクターベクトルおよびアニメーションツールセットで、ベクターやスプライトシートの作成が可能。
* [TILED Map Editor](http://www.mapeditor.org/) - さまざまなAS3ゲームエンジンと互換性を持つ柔軟なタイルマップエディタ。
* [FlashMovieClipConverter](https://github.com/zenrobin/FlashMovieClipConverter) - Flash MovieClipをStarling IAnimatable Spriteに変換するツール。

<a id="swf-obfuscators"></a>
#### SWF難読化ツール
* [secureSWF](http://www.kindi.com/) - AS3およびAIR用の商用オブフュセーター。リネーム、資産暗号化、自動コード最適化を提供。
* [irrFuscator](http://www.ambiera.com/irrfuscator/) - FlashおよびFlex SWFファイル用のAS3用商用オブフュセーター。

<a id="swf-inspectors"></a>
#### SWF検査ツール
* [SWFWire](https://github.com/magicalhobo/SWFWire) - 高度なSWFデコンパイラ、インスペクタ、デバッガツール（）。 [website](http://www.swfwire.com/)
* [Velocity9](https://github.com/velocity9/Inspector) - 基本的なSWFインスペクタ。

<a id="swf-decompilers"></a>
#### SWF逆コンパイラー
* [AS3Sorcerer](http://www.as3sorcerer.com/) - AS3およびMXML言語の99％精度のデコンパイラ（SWF/SWC、Alchemyオペコードに対応）。
* [Sothink Decompiler](http://www.sothink.com/product/flashdecompiler/) - AS2/AS3向けの高度なデコンパイラ（資産の抽出およびSWFをFLA/Flexに変換に対応）。

<a id="ane-dev-tools"></a>
#### ANE開発ツール
* [FreSharp](https://github.com/tuarua/FreSharp) - FlashRuntimeExtensionsのC#ラッパーを使用して、C#でANEを構築する。
* [Swift-IOS-ANE](https://github.com/tuarua/Swift-IOS-ANE) - iOS 10向けのSwift 3で記述されたANEのスタートキット。

<a id="frameworks"></a>
## フレームワーク
<a id="mvc-frameworks"></a>
#### MVCフレームワーク

* [PureMVC](https://github.com/PureMVC/puremvc-as3-standard-framework) - Flash（[multicore](https://github.com/PureMVC/puremvc-as3-multicore-framework)）向けの業界標準MVCフレームワーク
* [Robotlegs](https://github.com/robotlegs/robotlegs-framework) - Flash向けの依存性注入、モジュール/ビュー/コマンド管理フレームワーク
* [Hummingbird](https://github.com/flashapi/hummingbird) - AS3、モバイル、Starlingフレームワーク向けの堅牢なMVCアプリケーションの構築とデプロイ
* [Apollo](https://github.com/LaurentZuijdwijk/Apollo) - 依存性注入およびメッセージングフレームワーク。MVCプロジェクトのベースとして利用可能
* [Somacore](https://github.com/soundstep/somacore_framework) - 軽量なイベントベースのAS3 MVCフレームワーク
* [Kote](https://github.com/whitered/Kote) - PureMVCとas3-signalsの長所を統合した高速かつ軽量なMVCフレームワーク
* [StarlingMVC](https://github.com/CreativeBottle/starlingMVC) - Starlingベースのゲーム向けのIOCフレームワーク

<a id="ui-frameworks"></a>
#### UIフレームワーク

* [Starling](https://gamua.com/starling/) - Stage3Dをベースにした高性能2Dグラフィックスエンジン。APIはFlash APIと同一。 ([github](https://github.com/Gamua/Starling-Framework), [help](http://wiki.starling-framework.org/start))
* [Feathers UI](https://feathersui.com/) - Starlingフレームワーク向けのUIコンポーネント ([github](https://github.com/BowlerHatLLC/feathers), [help](https://feathersui.com/help/index.html))
* [Flow](https://github.com/artman/Flow) - Flexを代替するためのレイアウト、効果、データバインディング、リモートフレームワーク
* [AS3Commons UI](https://github.com/AS3Commons/as3commons-ui) - レイアウト、フォーカス、キーボード管理フレームワーク
* [Swiz](https://github.com/swiz/swiz-framework) - AS3とAdobe Flexを用いたRIAsの作成に必要な極めてシンプルなマイクロアーキテクチャ
* [Hiddenwood](https://github.com/raweden/Project-Hiddenwood) - ウェブアプリ開発プロジェクト用に開発されたUIライブラリ。AS3で構築され、MVCパターンを採用。
* [Elastic-Lists](https://github.com/MoritzStefaner/Elastic-Lists) - フェイスブラウジングに向けた柔軟かつ強力なインターフェース。
* [Apache Flex®](https://flex.apache.org/) - Apache Flex® SDKは、人気のAdobe Flex SDKの進化形であり、モバイルデバイス、ウェブブラウザ、デスクトッププラットフォーム向けにFlashベースのアプリケーションを簡単に構築できるアプリケーション開発フレームワークです。
* [Apache Royale®](http://royale.apache.org/) - Apache Royale®プロジェクトは、Apache Flex® SDKの次世代を開発しています。Royaleは、MXMLおよびActionScriptで開発されたアプリケーションが、Flash/AIRランタイムだけでなく、ブラウザ上でFlashなしで実行され、モバイルデバイス上でPhoneGap/Cordovaアプリとして実行され、Chromium Embedded Frameworkなどの埋め込みJS環境でも実行できるようにする目標を持っています。Royaleは、現在Flashが実行できる範囲を超えて、MXMLおよびActionScriptのコードをさらに多くの場所で実行できる可能性があります。

<a id="game-frameworks"></a>
#### ゲームフレームワーク

* [CitrusEngine](http://citrusengine.com/) - StarlingとAway3Dをベースにしたプロフェッショナルなゲームエンジン
* [StarlingPunk](https://github.com/asaia/StarlingPunk) - Starlingをベースにしたフレームワークで、ゲームプロジェクトに構造と組織を追加。
* [FlashPunk](https://github.com/useflashpunk/FlashPunk) - 2Dゲーム開発用のフレームワーク。グラフィックス、イベント、入力、アニメーションなどを提供。
* [Flixel](https://github.com/AdamAtomic/flixel) - 自作ゲームオブジェクトを作成するために拡張可能な有用なベースクラス。
* [Tetragon](https://github.com/NothingInteractive/tetragon) - クロスプラットフォームフレームワークで、どんな種類のゲームも構築可能。リソース管理、デバッグ機能、マルチローカルサポート、レイヤー拡張性、ゲーム指向データ構造などを提供。
* [Pixelizer](https://github.com/johanp/Pixelizer) - 2Dゲーム開発用のコンポーネントベースのゲームエンジン。レンダリング、アニメーション、入力など提供。
* [AS3isolib](https://github.com/as3isolib/as3isolib.v1) - 等角投影ゲーム開発を支援する等角ライブラリ。
* [IsoHill](https://github.com/jadbox/IsoHill-Game-Engine) - Starlingに基づくGPUベースの等角エンジン。TILEDマップパーサー、レイヤーなど（[website](http://www.isohill.com/)）。
* [YCanvas](https://github.com/jozefchutka/YCanvas) - 高性能な2Dタイルレンダラーおよびワールドマップレンダラー。
* [ND2D](https://github.com/lrrrs/nd2d) - Stage3Dを用いたGPU加速2Dゲームエンジン（[ND2Dx](https://github.com/NoRabbit/ND2Dx)）。
* [Nexus](https://github.com/tversteeg/Nexus) - Stage3Dを用いたGPU加速2Dゲームエンジン。

<a id="3d-frameworks"></a>
#### 3Dフレームワーク

* [AwayBuilder](http://awaytools.com/awaybuilder/) - さまざまなソースから3Dアセットをインポート・最適化・バケするための可視ワークフローツール。
* [Away3D](https://github.com/away3d/away3d-core-fp11) - Flash Player 11+用のオープンソースGPU加速3Dエンジン（[examples](https://github.com/away3d/away3d-examples-fp11)）。
* [Away3D OpenFL](https://github.com/away3d/away3d-core-openfl) - Neko、HTML5およびネイティブCPP向けのAway3D（[examples](https://github.com/away3d/away3d-examples-openfl)）。
* [AwayPhysics FP11](https://github.com/away3d/awayphysics-core-fp11) - Away3D FP 11向けの3D物理ライブラリ（[examples](https://github.com/away3d/awayphysics-examples-fp11)）。
* [Alternativa3D](https://github.com/AlternativaPlatform/Alternativa3D) - Alternativa3D GPU加速3Dエンジン（[examples](https://github.com/AlternativaPlatform/Alternativa3DExamples)）。
* [Flare3D](http://flare3d.com/) - 高性能エンジンとレベルエディタIDEを備えた商業用3Dプラットフォーム。
* [Zen3D](https://github.com/hgupta9/Zen3D) - Adobe FlashおよびAIR向けの高性能3Dエンジン（GPUベース）。

<a id="animation"></a>
#### アニメーション

* [GreenSock GSAP](https://greensock.com/gsap-as) - Flash向け業界標準のアニメーションライブラリ（TweenLite、TweenMax）（[github](https://github.com/greensock/GreenSock-AS3)）。
* [GTween](http://gskinner.com/libraries/gtween/) - プログラムによるアニメーション、トランジション、遷移を実現する小型だが堅牢なライブラリ。
* [DragonBones](http://dragonbones.github.io/) - Starlingを用いた高速スケルトンアニメーションと、Flash Proからアニメーションをエクスポートするツール。
* [FlashEff2](http://www.flasheff.com/) - Premiere向けプログラム化アニメーションライブラリ。100以上のトランジションとテキストエフェクトを提供。
* [FlashEffNano](http://www.flasheffnano.com/) - モバイルデバイス向けに最適化されたFlashEffトランジションライブラリ。20以上のトランジション、750スタイルを提供。
* [StarlingGAFPlayer](https://github.com/zenrobin/StarlingGAFPlayer) - Flash Proで作成されたGAFアニメーションをStarlingで再生。

<a id="signals"></a>
#### シグナル

* [AS3-signals](https://github.com/robertpenner/as3-signals) - AS3のイベントにC#のイベントやQtのシグナル/スロットをインスピレーションとして新しいアプローチ
* [react-as3](https://github.com/tconkling/react-as3) - シグナル/スロットと関数反応型プログラミングライブラリ
* [Signaller](https://github.com/whitered/Signaller) - ディスパッチを行うために権限を制限したシグナル実装
* [Fa-as3](https://github.com/fabrikagency/fa-as3) - 書く量を減らし、より多くのことを実現するフレームワーク。jQueryにモデル化。

<a id="functional"></a>
#### 関数型

* [AS3FP](https://github.com/jadbox/AS3FP) - HaskellおよびCoffeescriptに基づく関数的idiomのコレクション
* [Raix](https://github.com/richardszalay/raix) - 反応的かつインタラクティブなeXtensionsは、インタラクティブデータ（配列）または反応データ（イベント）との対話の簡易化。
* [Fxp-as3](https://github.com/j3k0/fxp-as3) - 『mostly adequate guide』をインスピレーションにした関数ライブラリ

<a id="unit-testing"></a>
#### ユニットテスト

* [AS3unit](https://github.com/Hoten/as3unit) - ActionScript 3向けのユニットテストフレームワーク
* [hamcrest-as3](https://github.com/drewbourne/hamcrest-as3) - 'match'ルールを宣言的に定義できるマッチャー対象オブジェクト
* [expect.as](https://github.com/krzysztof-o/expect.as) - ActionScript 3向けのBDDスタイルのアサートライブラリ
* [AS3spec](https://github.com/f1337/as3spec) - AS3向けのミニBDDフレームワーク。BaconおよびRSpecをインスピレーションに。
* [Flexunit](https://github.com/flexunit/flexunit) - Actionscript 、Flexプロジェクト向けのFlexUnitプロジェクト
* [ASunit](https://github.com/patternpark/asunit) - Flashプレイヤー6、7、8、9、10に対応する唯一のユニットテストフレームワーク
* [RobotEyes](https://github.com/Stray/RobotEyes) - TDD向けのエンドツーエンドテスト。WindowLickerとDrew BourneのMockolateのハイブリッド。

<a id="user-interface"></a>
## ユーザーインターフェース
<a id="ui-components"></a>
#### UIコンポーネント

* [MinimalComps](https://github.com/minimalcomps/minimalcomps) - Flash向けの最小限のActionScript 3.0 UIコンポーネント
* [MadComponents](https://github.com/danfreeman/MadComponents) - AS3 / AIR向けの人気モバイルUIフレームワーク
* [AsWing](https://github.com/dreamsxin/AsWing) - オープンソースFlash ActionScript GUIフレームワーク
* [GPUI](https://github.com/inspirit/GPUI) - Stage3D（GPU）に基づくミニGUIライブラリ
* [Falcon](https://github.com/HendrixString/Falcon) - Feathers向けのレスポンス/フレキシブルなモバイルUIコントロール
* [Flex-maps](https://github.com/igorcosta/flex-maps) - Apache Flexにおけるマップの確実な解決策
* [FlexBook](https://github.com/blvz/FlexBook) - Flex向け素晴らしいページフリップコンポーネント
* [Flex-Android-Material-Skins](https://github.com/quick6black/flex-Android-Material-Skins) - Androidのマテリアルデザインスキンを備えたFlex Mobileコンポーネント

<a id="starling-components"></a>
#### Starlingコンポーネント

* [TabbedApplication](https://github.com/pol2095/Feathers-Extension-Tabbed-Application) - タブのナビゲーションをスワイプで実現するビューベースのナビゲーションモデル
* [DataGrid](https://github.com/pol2095/Feathers-Extension-DataGrid) - 列ヘッダー付きデータグリッドを表示し、スムーズなスクロールを実現
* [DataTree](https://github.com/pol2095/Feathers-Extension-Tree) - 階層構造のデータを展開可能なツリーとして表示
* [Canvas](https://github.com/pol2095/Feathers-Extension-Canvas) - 基本的なベクタードラッグ機能をサポート
* [CircleProgress](https://github.com/pol2095/Feathers-Extension-CircleProgress) - 円形プログレスバーを用いて進行状況を表示
* [ZoomableControl](https://github.com/pol2095/Feathers-Extension-ZoomableControl) - マルチタッチ入力によるズーム操作を可能にする
* [Toaster](https://github.com/pol2095/Feathers-Extension-Toaster) - 操作に関する簡潔なフィードバックを小さなポップアップで提供
* [Google Maps](https://github.com/ZwickTheGreat/feathers-maps) - Starling向けGoogleマップ、モバイルデバイス向け最適化

<a id="layout"></a>
#### レイアウト

* [Adobe TLF](https://github.com/apache/flex-tlf) - Adobe/Apache Flexテキストレイアウトフレームワーク(TLF)
* [TinyTLF](https://github.com/joelhooks/tinytlf) - Flash/Flex向けの柔軟なテキストレイアウトフレームワーク（Flashテキストエンジンに基づく）
* [TransformManager](https://greensock.com/TransformManager) - Greensockによるインタラクティブなスケーリング／回転／移動機能
* [TransformTool](https://github.com/senocular/TransformTool) - 2D空間におけるオブジェクト操作用のフリーフォームツール（AS、JS）
* [Argilla-Mosaic](https://github.com/folletto/Argilla-Mosaic) - 動的レイアウトライブラリ
* [xrope](https://github.com/evan-liu/xrope) - ネイティブAS3ディスプレイオブジェクト向けのシンプルレイアウトライブラリ
* [miglayout-as](https://github.com/develar/miglayout-as) - MigLayoutのポート（Flash/Flex/FlashCocoa（SWT/Swing/JavaFX）向けの非常に柔軟なレイアウトマネージャ）

<a id="multi-touch"></a>
#### マルチタッチ

* [TUIO Client](https://github.com/lagerkoller/tuio-as3) - マルチタッチハードウェア向けの共通フレームワーク（TUIO/FLCおよびTUIO/TCPをサポート（[web](http://www.tuio.org/?flash)））
* [Gestouch](https://github.com/fljot/Gestouch) - より良いナチュラルユーザーインターフェースを構築するためのマルチタッチジェスチャ認識ライブラリ
* [Gestures.IO](https://github.com/GesturesIO/gesturesio-as3) - ジェスチャベースのナチュラルインタラクションを作成する方法を簡素化
* [TouchScript](https://github.com/TouchScript/TouchScript.as3) - 複雑なジェスチャインタラクションを大規模なタッチ表面で扱いやすくするマルチタッチフレームワーク

<a id="game-controllers"></a>
#### ゲームコントローラー

* [AS3dpad](https://github.com/duckleg/as3dpad) - Adobe AIR Mobile（Android/iOS）向けの仮想タッチスクリーンゲームパッド
* [Gamepad](https://github.com/iainlobb/Gamepad) - キーボードを使ってアナログジョイスティック入力をシミュレート
* [Advanced_Joystick](https://github.com/justjoeyuk/Advanced_Joystick) - Starling Framework向けのジョイスティック、Adobe AIR Mobile用
* [AS3-Controller-Input](https://github.com/arkeus/as3-controller-input) - Adobe AIRからOuyaおよびXbox360ゲームコントローラーとインタラクション

<a id="multimedia"></a>
## マルチメディア

<a id="augmented-reality"></a>
#### 拡張現実

* [FLARToolKit](https://github.com/Saqoosha/FLARToolKit) - Flash Player 11向けの業界標準ARToolkitライブラリのAS3版。（[website](http://www.libspark.org/wiki/saqoosha/FLARToolKit/en)）
* [FLAREmulator](https://github.com/theflashbum/FLAREmulator) - ウェブカメラがあるか無いかを確認しながらARデモをテストし、何が機能し、何が機能しないかを確認
* [FLARManager](http://words.transmote.com/wp/flarmanager/) - FLARToolkit/flare.tracker/flare.NFTを使用した軽量な拡張現実アプリ開発フレームワーク
* [NyARToolkitAS3](https://github.com/nyatla/NyARToolkitAS3) - マーカーベースの拡張現実ライブラリ、NyARToolkit AS3版
* [EZFLAR](https://github.com/tcha-tcho/EZFLAR) - ARが使いやすいようにする小さなラッパー
* [IN2AR](https://github.com/inspirit/IN2ARSDKExamples) - IN2ARを用いたクロスプラットフォーム拡張現実エンジンのSDK

<a id="data-visualization"></a>
#### データ可視化

* [Axiis](https://github.com/hgupta9/AxiisCharts) - 線、棒、セクター、列、クラスタ、領域、スミス、トレーマップなどのチャートを含むデータ可視化フレームワーク
* [Open Flash Charts](https://sourceforge.net/projects/openflashchart/) - 線チャート、領域チャート、棒チャート、円チャート、散点チャート
* [Flare](https://github.com/prefuse/Flare) - チャートおよびグラフ、データ管理、視覚エンコード、アニメーション、インタラクション技術をサポート
* [clearmaps](https://github.com/sunlightlabs/clearmaps) - データ可視化用マッピングフレームワーク
* [redada](https://github.com/geraldo/redada) - GraphMLファイルを使って重み付きグラフをインタラクティブに可視化
* [Flextreemap](https://github.com/joshtynjala/flextreemap) - Adobe Flex向けのTreeMapデータ可視化コンポーネント
* [GraphVisualizer](https://github.com/armisael/GraphVisualizer) - Flex 3 + ActionScript 3を用いたウェブソフトウェアで動的なグラフを描画
* [Weave](https://github.com/WeaveTeam/Weave) - ウェブベースの分析および可視化環境
* [Social-grid](https://github.com/Instrument/social-grid) - ソーシャルメディア向けの抽象グリッド可視化

<a id="camera"></a>
#### カメラ

* [CameraDetection](https://github.com/cataclysmicrewind/CameraDetection) - カメラ検出機能
* [Fluocam](https://github.com/Fluocode/Fluocam) - スターリングアプリ向け仮想カメラ
* [WebcamRecorder](https://github.com/Stupeflix/WebcamRecorder) - ウェブカメラからのChromeレス動画/音声/静止画像の記録
* [FlashyWrappers](https://github.com/rainbowcreatures/FlashyWrappers) - Windows/Android/iOS/OSX上のAIRアプリから動画の記録

<a id="image"></a>
#### 画像

* [Scale9Image](https://github.com/Tibus/Scale9Image) - スターリング用のスケール9グリッド画像の最適化
* [ASImageLib](https://github.com/terrynoya/ASImageLib) - アクションスクリプト向けBMP/PNGデコーダ
* [Async-Image-Encoders](https://github.com/LeeBurrows/Async-Image-Encoders) - ビットマップデータを画像ファイルフォーマットに非同期にエンコード
* [Flip-Planes-AS3](https://github.com/jamesflorentino/Flip-Planes-AS3) - 写真スライドショー効果
* [AS3-transitions-lib](https://github.com/foo123/as3-transitions-lib) - 画像トランジションライブラリ
* [Inspirit Image](https://github.com/hgupta9/InspiritImage) - FFT、SURF、エッジ検出、流体ソルバーなど
* [Inspirit GPUImage](https://github.com/inspirit/GPUImage) - GPUベースの画像処理用フレームワーク
* [AS3potrace](https://github.com/PowerflasherBR/as3potrace) - POTraceの実装、ビットマップ画像をベクターフォーマットにトレース
* [ATF-Encoder](https://github.com/plepers/ATF-Encoder) - 純AS3でATF（Adobe Texture Format）ファイルのエンコード／デコード
* [AS3-klt](https://github.com/motemen/as3-klt) - Kanade-Lucas-Tomasi特徴トラッカーの実装
* [BlurHash](https://github.com/roipeker/as3-blurhash) - アクションスクリプト3.0でのBlurHashエンコーダ／デコーダの実装

<a id="font"></a>
#### フォント

* [Firetype](https://github.com/MaxDidIt/firetype) - OpenTypeフォントをパースし、Stage3Dでレンダリング
* [BMFontRenderer](https://github.com/bengarney/BMFontRenderer) - BMFontフォーマットのビットマップフォントデータ用AS3レンダラー
* [HanFont](https://github.com/kyoji2/HanFont) - アクションスクリプトにおける中国語フォントの埋め込み用AIRアプリ
* [Ficon.as](https://github.com/dv/Ficon.as) - アイコンフォントを簡単に組み込むライブラリ

<a id="particle"></a>
#### パーティクル

* [Flint](https://github.com/richardlord/Flint) - フラッシュおよびフラックス向けのパーティクルエンジン
* [Desuade Partigen](http://desuade.com/partigen) - デスエード・パルティゲン・パティクル生成システム（[github](https://github.com/andrewfitz/desuade)）
* [Angulex](https://github.com/cosmindolha/ParticleDesigner) - Starlingフレームワーク用のパティクルデザイナー（ActionScript 3）
* [SAP](https://github.com/gonchar/SAP) - Starling用のパティクルシステム
* [Starling-Particles](https://github.com/Gamua/Starling-Extension-Particle-System) - Starlingフレームワーク用のパティクルシステム。71squared.comの「Particle Designer」と互換性を持つ。
* [MotionParticleSprite](https://github.com/bjeld/motionparticlesprite) - Flash Proで運動経路を設計し、Starlingのパティクルにガイドする。

<a id="panorama-viewer"></a>
#### パノラマビューアー

* [Pantaloons](https://github.com/EyeSee360/Pantaloons) - Flash Playerでのパノラマ表示。
* [SaladoPlayer](https://github.com/mstandio/SaladoPlayer) - パノラマ閲覧機能。
* [PanoramicViewer](https://github.com/BrianMehrman/PanoramicViewer) - 3Dパノラマ閲覧機能。
* [Sphere_panorama](https://github.com/suzumura-ss/flash_sphere_panorama) - AS3で記述されたエキリクターリングテクスチャを用いたパノラマプレイヤー（Alternativa3D）。
* [CuTy](https://github.com/fieldOfView/CuTy) - Flash 10に基づくQTVRパノラマ閲覧機能。

<a id="qr-code"></a>
#### QRコード

* [Zxing AS3](https://github.com/zxing/zxing/tree/c1df162b95e07928afbd4830798cc1408af1ac67/actionscript) - QRコードの検出と生成（[ドキュメント](https://zxing.github.io/zxing/)）。
* [AS3-qrcode-encoder](https://github.com/jbpin/as3-qrcode-encoder) - AS3によるQRコードエンコーダ。
* [qrcode-as](https://github.com/yanbe/qrcode-as) - Windows、Mac、Linuxでウェブカメラに対応したQRコードリーダー。

<a id="sound"></a>
#### サウンド

* [SoundAS](https://github.com/treefortress/SoundAS) - AS3用の現代的かつ軽量なサウンドマネージャ。
* [Standingwave3](https://github.com/maxl0rd/standingwave3) - 動的サウンドライブラリ。
* [Standingwave3-addons](https://github.com/charlesclements/standingwave3-addons) - SW3用のアドオン。
* [Soundtouch-as3](https://github.com/also/soundtouch-as3) - SoundTouchサウンド処理ライブラリのAS3版（C++からAS3への移植）。
* [SeiON](https://github.com/cardin/SeiON) - サウンドマネージャライブラリ。
* [AS3-Sound-Manager](https://github.com/GrupoW/as3-Sound-Manager)- マット・プライバイルスキーによるサウンドマネージャクラスのアップグレード版。
* [AS3sfxr](https://github.com/SFBTom/as3sfxr) - C++からAS3へのsfxrの移植（Flash Player 10の新しいサウンドおよびファイル機能を用いる）。
* [AS3-audio](https://github.com/singuerinc/as3-audio) - アクションスクリプトでのオーディオ管理
* [SiON](https://github.com/keim/SiON) - フラッシュソフトウェアシンセイザー
* [FlashWavRecorder](https://github.com/michalstocki/FlashWavRecorder) - オーディオの録音とWAVファイルとしての保存
* [Local-recorder](https://github.com/pauln/local-audio-recorder) - ローカルオーディオレコーダー（ストリーミングサーバーは不要）。現在はFlash Player 10.1以上が必要。
* [Jukebox](https://github.com/AlwynW/Jukebox) - アクションスクリプト3プロジェクト向けの音楽マネージャー
* [Flod](https://github.com/photonstorm/Flod) - アミーガSoundTracker（MOD）およびFastTracker（XM）のリプレイライブラリ

<a id="video-player"></a>
#### 動画プレーヤー

* [Flowplayer](https://github.com/flowplayer/flash) - フロープレイヤーフラッシュ、ウェブ向けのビデオプレイヤー
* [Goplayer](https://github.com/dbrock/goplayer) - アクションスクリプト3で書かれた現代的なオープンソースビデオプレイヤー
* [OSFlashVideoPlayer](https://github.com/FlashJunior/OSFlashVideoPlayer) - オープンソースフラッシュビデオプレイヤー
* [F4player](https://github.com/gokercebeci/f4player) - オープンソースAS3フラッシュビデトプレイヤー
* [dashas](https://github.com/castlabs/dashas) - アクションスクリプトで書かれたMPEG-DASHプレイヤー
* [hlsplayer](https://github.com/erlyvideo/hlsplayer) - OSMFフラッシュフレームワーク向けのHLSプレイヤー
* [vgaplayer](https://github.com/euske/vgaplayer) - Adobe Flash Media Serverストリーム（RTMP）向けのオープンソースプレイヤー

<a id="database"></a>
## データベース

#### SQLite
* [AS3Query](https://github.com/kemsky/as3Query) - アクションスクリプト向けのもう一つのSQLite ORMおよびクエリDSL
* [AIRdb](https://github.com/dkeskar/airdb) - AIR ORM：AIRおよびFlexアプリ内でクライアント側のSQLiteを使用するためのORM。ActiveRecordスタイルのモデル、マイグレーション、アソシエーションをサポート。
* [Flexine](https://github.com/riadvice/Flexine) - AIR向けのSQLite ORM
* [AIR-sqlite](https://github.com/probertson/air-sqlite) - AIR内でSQLiteデータベースを扱うためのユーティリティ

#### MongoDB
* [MongoAS3](https://github.com/s9tpepper/MongoAS3) - MongoDBドライバー
* [ActionMongo](https://github.com/RIAlizer/ActionMongo) - MongoDBドライバー

#### CouchDB
* [AS3couchdb](https://github.com/bustardcelly/as3couchdb) - CouchDBインスタンスとのインタラクション用のクライアント側API
* [Soup](https://github.com/dima/soup) - シナリオ・サイン・エア・レストフルXを組み合わせて、オフライン/オンライン対応アプリを構築し、取り消し・再実行機能を備える

#### MySQL
* [AS3mysql](https://github.com/hgupta9/as3mysql) - MySQLオープンソースデータベース用ドライバー

#### PostgreSQL
* [Pegasus](https://github.com/uhoh-itsmaciek/pegasus) - PostgreSQLオープンソースデータベース用ドライバー

#### DynamoDB
* [AWS-dynamodb](https://github.com/ferf/aws-dynamodb-actionscript) - AmazonのAWS DynamoDBへのアクセス用ドライバー

#### Redis
* [AS3redis](https://github.com/zhangq0355/as3redis) - Redisへのドライバー

<a id="file-formats"></a>
## ファイル形式

<a id="archives"></a>
#### アーカイブ

* [FZip](https://github.com/claus/fzip) - 標準ZIPアーカイブの読み込み、変更、作成を可能にする成熟したライブラリ
* [ASZip](https://code.google.com/archive/p/aszip/) - AS3からZIPアーカイブを生成
* [Untar-Worker](https://github.com/mesmotronic/as3-worker-untar) - AS3ワーカー（バックグラウンドスレッド）を使用したTARの抽出

<a id="3d-formats"></a>
#### 3D形式

* [AsCollada](https://github.com/timknip/ascollada) - COLLADA 3Dモデルファイルの解析（[fork](https://github.com/david-gregory/ascollada)）
* [AsBlender](https://github.com/timknip/asblender) - Blenderの.BLENDファイルの解析
* [AS3-bvh-parser](https://github.com/rkn14/as3-bvh-parser) - BVHファイルの解析
* [EasyAGAL](https://github.com/Barliesque/EasyAGAL) - AGALシェーダの開発を簡便にし、コード補完、コードヒント、マクロなどを利用可能にする

#### CSV

* [CSV4AS3](https://github.com/lizardon/CSV4AS3) - Apache Commons CSVから導入されたCSVライブラリ
* [Csvlib](https://github.com/51systems/csvlib) - CSVパーサー

#### CSS

* [AS3csslib](https://github.com/heyfrench/as3csslib) - ActionScript 3.0用のCSS3パーサー、セレクタ、スタイルエンジン
* [Fcss](https://github.com/theflashbum/fcss) - Flash Cascading StyleSheet Library
* [Stylekit-as3](https://github.com/videojuicer/stylekit-as3) -  CSS3を用いたスキン可能なユーザインターフェース
* [Sass4as](https://github.com/jeremyruppel/sass4as) - ActionScript 3.0用のSyntactically Awesome Stylesheets
* [Jakute-CSS](https://github.com/kakenbok/Jakute-Styling-Engine) - ActionScript/Flash用のCSSフレームワークJakute
* [CSS.as](https://gist.github.com/trxcllnt/1161266) - 1ファイル分のCSSパーサー、TinyTLFプロジェクトの一部

#### BSON

* [ActionBSON](https://github.com/fminzoni/ActionBSON) - BSONデータのエンコーダ／デコーダ
* [MongoAS3](https://github.com/s9tpepper/MongoAS3) - MongoDBドライバー（BSON I/Oを含む）

#### EXIF

* [AS3-exif-lib](https://github.com/unstoppable/actionscript-exif-reading-lib) - JPEGのEXIFデータを解析
* [Exif-as3](https://github.com/bashi/exif-as3) - JPEGのEXIFデータを解析

#### FXG

* [Fxg-as3-lib](https://github.com/pixelami/fxg-as3-lib) - 純粋なAS3 FXGレンダリングライブラリ（実行時レンダリングおよびmxmlをサポート）
* [Fxg2as3](https://github.com/ZackPierce/fxg2as3) - FXGマーカーを実行可能なActionscript 3コードに変換

#### GIF

* [AS3gif](https://github.com/audreyt/as3gif) - アニメーションGIFの再生およびエンコード
* [GIF Player](https://github.com/theturtle32/Flash-Animated-GIF-Library) - FlashでアニメーションGIFを再生
* [Async-gif-decoder](https://github.com/honzabrecka/async-gif-decoder) - 非同期GIFデコーダおよびプレイヤー

#### ICAL

* [AS3iCAL](https://github.com/nicolai86/as3.iCal) - RFC2445規格に基づくiCalパーサー

#### JSON

* [Actionjson](https://github.com/mherkender/actionjson) - より高速かつ高度なActionScript 3 JSONライブラリ
* [Jameson](https://github.com/mattupstate/jameson) - JSONドキュメントオブジェクトマッパー
* [Serialkiller](https://github.com/benbjohnson/serialkiller) - JSONおよびXMLシリアル化ライブラリ
* [JsonMapper](https://github.com/kemsky/JsonMapper) - 型付きJSONパーサー
* [JSONTools](https://github.com/s9tpepper/JSONTools) - JSONエラー、JSWoof JSONライブラリの速度、E4XスタイルのクエリをE4Jと呼ぶ

#### Markdown

* [Showdown.as](https://gist.github.com/cstrahan/648771) - shdown.jsのポート
* [Actiondown](https://github.com/bbeaumont/Actiondown) - Javascript Showdownのポート
* [Markdownlib](https://github.com/Corsaair/markdownlib) - Markdownの実装

#### MP3

* [AS3id3lib](https://github.com/devxoul/as3id3lib) - MP3 ID3データを解析
* [AS3Icy](https://github.com/claus/as3icy) - Shoutcast、IcecastおよびLimewireからのライブMP3ストリームをデコードおよび再生

#### PDF

* [AlivePDF](https://code.google.com/archive/p/alivepdf/) - クライアント側のPDF生成 ([github](https://github.com/riadvice/alivepdf))
* [PurePDF](https://github.com/sephiroth74/purePDF) - JavaのiTextをベースにした完全なPDFライブラリ
* [HalcyonPDF](https://github.com/systemed/halcyon_pdf) - OpenStreetMap用のPDFレンダラー
* [PDFCase](https://github.com/dickclaus/pdfcase) - PDFライブラリ
* [PDFView](https://github.com/jankapunkt/PDFView) - ゼロから構築されたPDF閲覧ツール

#### PSD

* [AS3-psd-parser](https://github.com/warrenseine/as3-psd-parser) - PhotoshopのPSDファイルを解析し、BitmapDataオブジェクトとしてレンダリング

#### SWF

* [AS3swf](https://github.com/claus/as3swf) - SWFファイルを解析・作成・変更・公開するための低レベルライブラリ
* [AS3abc](https://github.com/imcj/as3abc) - ABC（ActionScriptブロックコード）ファイルを解析・作成・変更・公開するための低レベルライブラリ
* [SWFWire](https://github.com/magicalhobo/SWFWire) - SWFのデコンパイルおよびインスペクタツール
* [Abc-abstraction](https://github.com/krilnon/abc-abstraction) - ABCを解析・操作・SWFに再パッケージし、実行可能にする

#### SVG

* [AS3SVGRenderer](https://github.com/LucasLorentz/AS3SVGRenderer) - Flash Player用のSVGレンダラー
* [SVGParser](https://github.com/millermedeiros/SVGParser) - FIVe3DおよびHTML5キャンバスへのSVG解析・レンダリング

#### XML

* [XMLSerializer](https://github.com/vapesolius/XMLSerializer) - ActionScriptからXMLへ、およびXMLからActionScriptへデータシリアライズを可能にするライブラリ
* [DynamicXMLParser](https://github.com/lmgerhard/DynamicXMLParser) - ActionScript 3で定義されたデータクラスに動的にXMLコンテンツをパース（解析）
* [Nudge](https://github.com/pluglimited/Nudge) - オブジェクトをXMLにシリアライズ／デシリアライズするためのフレームワーク
* [AStream](https://github.com/kokorin/AStream) - AS3で記述されたXMLとオブジェクト（および逆）のマッピングライブラリ。XStreamと互換。

#### XLSX

* [AS3-xlsx-reader](https://github.com/childoftv/as3-xlsx-reader) - Open XML Excel（.XLSX）またはOpen Officeスプレッドシートを解析


<a id="networking"></a>
## ネットワーク
<a id="data-loader"></a>
#### データローダー

* [GreenSock LoaderMax](https://github.com/greensock/GreenSock-AS3) - 実行時におけるアセットの読み込みを簡単かつ強力に実現
* [BulkLoader](https://github.com/arthur-debert/BulkLoader) - ActionScript用の大量アセット読み込みライブラリ
* [AssetLoader](https://github.com/Matan/AssetLoader) - AS3ベースのAS3Signalsを活用したマルチファイル／アセットローダー

<a id="hardware"></a>
#### ハードウェア

* [AS3midilib](https://github.com/heyfrench/as3midilib) - MIDIファイルやMIDI入出力デバイスと連携する
* [AS3glue](https://code.google.com/archive/p/as3glue/) - Arduinoボード向けの通信機能
* [AS3-arduino](https://github.com/quetwo/as3-arduino-connector) - Adobe AIRとArduinoプロトタイピングボードの接続
* [AIRkinect](https://github.com/AS3NUI/airkinect-2-core) - Microsoft Kinectとの統合用ANE ([examples](https://github.com/AS3NUI/airkinect-2-examples)).
* [KinectGate](https://github.com/cleoag/KinectGate) - KinectSDKとAS3ソケットゲートの連携
* [Kinect-Gestures](https://github.com/tonybeltramelli/Air-Kinect-Gesture-Lib) - AIR Kinectジェスチャーライブラリ
* [OpenTSPS](https://github.com/labatrockwell/openTSPS) - TSPSは、空間における人の感知を可能にするクロスプラットフォームツールキットであり、リアルタイムの動画（Kinect、ウェブカメラなど）に対してOpenCV操作を行い、WebSockets、OSC、TUIO、またはTCPを介してクライアントにJSON形式で送信する
* [LeapMotionAS3](https://github.com/logotype/LeapMotionAS3) - LeapMotionセンサーとの統合（ジェスチャー、画像、骨格/ボーンを210FPSで提供）

<a id="servers"></a>
#### サーバー

* [AIRhttp](https://github.com/leopoldodonnell/airhttp) - Adobe AIR向けのHTTPサーバー
* [AIR-Server](https://github.com/wouterverweirder/AIR-Server) - Adobe AIR向けのソケットサーバーライブラリ

#### OAuth

* [Actionscript-oauth2](https://github.com/charlesbihis/actionscript-oauth2) - OAuth 2.0サービスとのインターフェース
* [oauth-flex](https://github.com/oauth-io/oauth-flex) - Apache Flex/ActionScript向けのOAuth.ioプラグイン
* [oauth-as3](https://github.com/mlepicki/oauth-as3) - Maven化された、RSL形式のoauth-as3ライブラリ（ActionScript 3向けのOAuth）

#### HTTP

* [Hendrix-HTTP](https://github.com/HendrixString/Hendrix-HttP-AiR) - ActionScript 3（as3）をSquareのOkHttpにインスパイアした軽量HTTPライブラリ
* [HTTPForm](https://github.com/dv/HTTPForm) - multipart/form-data形式のHTMLフォーム送信リクエストをエミュレート（ファイルアップロードを含む）
* [AS3httpclient](https://github.com/abdul/as3httpclient) - HTTPクライアの実装
* [AS3httpclient](https://github.com/gabriel/as3httpclient) - HTTPクライアの実装
* [Amazon Web Services](https://github.com/satoshi7/ActionScript-API-for-AWS-Amazon-Web-Services-) - AWS向けのAS3 API

#### P2P

* [P2Plocal](https://github.com/palkan/as3_p2plocal) - ローカルRTMFP接続
* [Android-Flash-P2P](https://github.com/beautifycode/Android-Flash-P2P) - Client.swfとAndroidデバイス間のAIRによるP2P通信
* [NetGrouper](https://github.com/walpolea/NetGrouper) - NetGroupおよびRTMFPマルチキャスト機能をラッピングし、ローカルネットワークまたはAdobe Cirrus上で迅速にP2Pマルチプレイヤーゲームを構築するためのもの
* [HydraP2P](https://github.com/devboy/HydraP2P) - Flash Player 10.1で導入されたペアツー・ツーAPIを簡易化
* [GroupP2P](https://github.com/oohazard/GroupP2P) - ペアツー・ツーベースのnetgroup
* [HLS-P2P](https://github.com/lava-tech/hls-p2p) - Flash OSMFベースのハイブリッドCDN&P2P HLSソリューション
* [P2Pmessaging](https://github.com/dreamsocket/actionscript-p2p_messaging) - FlashでP2Pを行うためのシンプルなメッセージングフレームワーク
* [ArcusNode](https://github.com/OpenRTMFP/ArcusNode) - Adobe Flash上でNode JSで実行されるペアアシストネットワーク用のRTMFPリーダーチャンネルサービス

#### Sockets

* [AS3WebSocket](https://github.com/theturtle32/AS3WebSocket) - 最終版WebSocketドラフトRFC6455向けのWebSocketクライアント実装
* [SmartSocket](https://github.com/XaeroDegreaz/SmartSocket) - SmartSocketはJavaおよびPHPのソケットサーバエンジンであり、マルチユーザーアプリケーションの開発を迅速かつ簡単に行うために設計されている
* [FlashSocket.IO](https://github.com/simb/FlashSocket.IO) - AS3/AIRクライアントからSocket.IOサーバに接続
* [Socket.io](https://github.com/ascorbic/socket-io-actionscript) - Socket.IO Actionscript 3クライアント
* [AMFsocket](https://github.com/chadrem/amf_socket) - 高パフォーマンスネットワーク通信用の両方向RPCライブラリ
* [Sockpuppet](https://github.com/rjungemann/sockpuppet) - 完全なRuby/ActionScriptソケットクライアント・サーバ（AMFを用いる）
* [Socket.io-flash](https://github.com/sinnus/socket.io-flash) - Socket.IO v.0.08以降のサーバとの通信
* [ws-flash-client](https://github.com/youurayy/ws-flash-client) - 信頼性のある最小限のWebSocketクライアント（ネイティブWebSocketが利用できない場合、Adobe Flashを使用）

<a id="protocols"></a>
#### プロトコル

* [GIT](https://github.com/nexussays/git-as3) - クライアント側でのGitの実装
* [AIRplay](https://github.com/mikkoh/AS3-Airplay) - クライアント側でのAppleのAirplayの実装
* [TeaTime](https://github.com/aemoncannon/croqodile) - CroquetプロジェクトのTeaTimeプロトコルのAS3/Erlang実装
* [XMPP](https://github.com/lyokato/as3xmppclient) - クライアント側でのXMPPライブラリの実装
* [XMPP](https://github.com/bluef/kuching) - 軽量XMPPライブラリの実装
* [AMQP](https://github.com/0x6e6562/as3-amqp) - 0-8バージョンのAMQPのクライアント側実装
* [NTP](https://github.com/charlespalen/AS3-NTP-Implementation) - NTPクライアント（ネットワークタイムプロトコル）のクライアント側実装
* [FUDI](https://github.com/matthiasbreuer/FUDI-as3) - Puredata FUDIプロトコルのクライアント側実装
* [BDD Cucumber](https://github.com/flashquartermaster/Cuke4AS3) - Flash ActionScriptにおけるBDD Cucumber Wireプロトコル実装

<a id="email"></a>
#### メール

* [AIRXMail](https://github.com/hgupta9/AirXMail) - SMTP、POP3、IMAP4をサポートする完全なメールライブラリ
* [AS3Mailer](https://github.com/Matan/AS3Mailer) - サーバースクリプトを使ってメールを送信またはmailtoを呼び出す

<a id="utilities"></a>
## ユーティリティ

<a id="artificial-intelligence"></a>
#### 人工知能

* [FiniteStateMachine](https://github.com/pzUH/FiniteStateMachine) - AIボット/エージェント向けの有限状態マシン
* [N-GramPredictor](https://github.com/pzUH/N-GramPredictor) - AIボット/エージェント向けのn-gram予測器
* [Naive-BayesPredictor](https://github.com/pzUH/Naive-BayesPredictor) - AIボット/エージェント向けのナイブベイズ予測器
* [HierarchicalStateMachine](https://github.com/pzUH/HierarchicalStateMachine) - AIボット/エージェント向けの階層状態マシン
* [Godmode-as3](https://github.com/tconkling/godmode-as3) - 行動木実装（人工知能）
* [DecisionTree](https://github.com/pzUH/DecisionTree) - AIボット/エージェント向けの二分決定木
* [FuzzyStateMachine](https://github.com/pzUH/FuzzyStateMachine) - AIボット/エージェント向けのファジィ状態マシン（FuSM）
* [SmartKid](https://github.com/skyfeiyun/SmartKid) - 2D・3Dゲーム向けの強力なAIエンジン

<a id="async"></a>
#### 非同期処理

* [EasyAS-Worker](https://github.com/myflashlab/easyAS-Worker) - AIR Worker向けの簡易ラッパー
* [Worker-from-class](https://github.com/bortsen/worker-from-class) - クラス定義からWorkerを作成

<a id="crypto"></a>
#### 暗号

* [BlooddyCrypto](https://github.com/blooddy/blooddy_crypto) - バイナリデータ処理用の高性能ライブラリ。このライブラリにはMD5、SHA-1、SHA-2、Base64、CRC32、JSON、PNG/JPEGエンコーダーが含まれています
* [AS3Crypto](https://github.com/timkurvers/as3-crypto) - Henri Torgemaneの優れた暗号化ライブラリのフォーク（[patched](https://github.com/lyokato/as3crypto_patched)）
* [AS3corelib](https://github.com/mikechambers/as3corelib) -  MD5およびSHA1ハッシュ、画像エンコーダー、JSONシリアライズ
* [ASCrypt](https://github.com/Meychi/ASCrypt) - 複数言語に対応したAPIを持つ暗号化ライブラリ
* [Nexuslib](https://github.com/nexussays/nexuslib-as3) - 反射、シリアライズ、シードランダム数生成、暗号化、ネットワーク接続など
* [Hashlib](https://github.com/Corsaair/hashlib) - 30以上のハッシュ関数を提供。
* [XXTEA-AS3](https://github.com/xxtea/xxtea-as3) - ActionScript 3向けのXXTEA暗号アルゴリズムライブラリ。
* [Gibberish-AES](https://github.com/NordMike/gibberish-aes-as3) - AES暗号化に必要な完全にOpenSSLに準拠したActionScript 3ライブラリ。

<a id="data"></a>
#### データ

 * [AS3Commons Collections](https://github.com/AS3Commons/as3commons-collections) - AS3向けに高度で高パフォーマンスのコレクションとイテレーター。

<a id="geometry"></a>
#### 幾何学

* [AS3geometry](https://github.com/alecmce/as3geometry) - プリミティブ、多角形、交点など。
* [AS3GeomAlgo](https://github.com/azrafe7/as3GeomAlgo) - 幾何学アルゴリズムのコレクション。hxGeomAlgoの移植。
* [Coral](https://github.com/richardlord/Coral) - 3D数学（ポイント、ベクトル、マトリクス、クォータニオン）向けの高パフォーマンスクラス。
* [Csg.as](https://github.com/timknip/csg.as) - 3Dメッシュ上の構成固体幾何学（CSG）の実装。
* [PathUtils](https://github.com/alinakipoglu/Actionscript-PathUtils) - 二次関数、ベジエ曲線および線列の処理。
* [Hilbert](https://github.com/nodename/Hilbert) - cortesi/scurveから導かれたヒルベルト曲線の移植。
* [AS3AStar](https://github.com/tomnewton/AS3AStar) - 高速A*パスフィンドアルゴリズン。
* [A-star_pathfinder](https://github.com/kevhiggins/a-star_pathfinder) - タイルベースマップ向けのA*パスフィンドインターフェース。
* [As3Pathfinder](https://github.com/azakhary/As3Pathfinder) - ディジャクのアルゴリズムを用いたグリッドパスフィンドライブラリ。

<a id="math"></a>
#### 数学

* [AS3Units](https://github.com/erussell/AS3Units) - NGUnitsの移植。単位のパース、フォーマット、変換を可能にする。
* [AS3LinAlg](https://github.com/inspirit/AS3LinAlg) - 線形代数ライブラリ（ジャコビSVD、固有ベクトル／値、コレスキーLUなど）。
* [Performance Primitives](https://github.com/martinkallman/performance-as3) - インテルパフォーマンスプリミティブに基づいた高パフォーマンス数学ライブラリ。
* [Zexpression](https://github.com/Xorcerer/zexpression) - 関数や変数を含む数学式のパースと評価。
* [FlexibleMatrix](https://github.com/Lukx/FlexibleMatrix) - 汎用的なマトリクスクラス。
* [AS3eval](http://eval.hurlant.com/) - Tamarin ESCコンパイラをFlash Player内で動作させるためのパッケージ。（[alternate](https://github.com/SimonRichardson/as3-eval)）。
* [FlashFormulaEditor](https://github.com/zasdfgbnm/FlashFormulaEditor) - Adobe Flexで作成されたフォーマルエディタ。

<a id="text"></a>
#### テキスト

* [Linkify-as3](https://github.com/CodeCatalyst/linkify-as3) - URL、メールアドレス、電話番号などをクリック可能なリンクに変換します。
* [AS3hyphenation](https://github.com/gka/as3hyphenation) - JavaScriptテキストの連続化ライブラリHyphenator.jsのポート。

<a id="runtimes"></a>
## ランタイム

<a id="emulators"></a>
#### エミュレーター

* [NES Emulator](https://github.com/nesbox/emulator) - NES、スーパーナンバ、セガメガドライブ、ゲームボーイなどのビデオコンソールのエミュレーター。
* [Commodore 64 Emulator](https://github.com/claus/fc64) - ActionScript 3で書かれた低レベルのコムドレ64エミュレーター。
* [8080 Emulator](https://github.com/ozipi/As3_SpaceInvaders_Emulator) - Intel 8080プロセッサに基づいたActionScript 3のスペースインベーダーエミュレーター。
* [8-bit VM](https://github.com/OutOfTheVoid/AS3-8-bit-VM) - 8ビットの仮想マシンをActionScriptで書いたもの。

<a id="interpreters"></a>
#### インタープリター

* [JS](https://github.com/theturtle32/RhinoAS3) - RhinoJS、MozillaのRhino JavaScriptインタプリタのポート。
* [Simple JS](https://github.com/sixsided/Simplified-JavaScript-Interpreter) - ActionScript 、JavaScriptインタプリタ。
* [MIL](https://github.com/ser1zw/MIL) - MIL言語の仮想マシンとインタプリタをActionScriptで書いたもの。
* [TALES](https://github.com/oaubert/tales4as) - ActionScript用のTALESインタプリタ。
* [Scheme](https://github.com/hrundik/fScheme) - ActionScriptで書かれたSchemeインタプリタ。
* [Lisp](https://github.com/rzubek/as_lisp) - ActionScriptで書かれたLisp方言、コンパイラとバイトコードインタプリタを含むもの。
* [Lisp Compiler](https://github.com/aemoncannon/las3r) - AVM2用のLispコンパイラ。
* [CannonML](https://github.com/abiyasa/cannonml_as3) - keimのCannonML（shmupスクリプト言語）インタプリタ。

<a id="air-native-extensions"></a>
## AIRネイティブ拡張

<a id="audio-ane"></a>
#### オーディオANE
* [SongPicker](https://github.com/richpixel/SongPickerANE) - iOSおよびAndroid用の音楽選択・再生ANE。
* [SilentSwitch](https://github.com/StickSports/ANE-Silent-Switch) - iOS用のANEで、ハードウェアの静音スイッチがオンのとき、音を無効にする。
* [VolumePro](https://github.com/myflashlab/VolumePro-ANE) - ネイティブの音声ストリームの音量を制御し、音量の変化を確認できます。
* [SystemVolume](https://github.com/nweber/SystemVolumeNativeExtension) - iOSおよびAndroidデバイスのシステム音量と相互作用します。

<a id="multimedia-ane"></a>
#### マルチメディアANE
* [WebView (Tuarua)](https://github.com/tuarua/WebViewANE) - OSX 10.10以降、Windowsデスクトップ、iOS 9.0以降、Android 21以降向けの現代的なWebView。WindowsではCEF（Chromium Embedded Framework）を使用し、iOS/OSXではWKWebView、AndroidではWebViewを使用。
* [WebView (FlashLab)](https://github.com/myflashlab/webView-ANE) - StageWebViewの代替品。AIRからJavaScript関数を呼び出すことができます。
* [AVANE](https://github.com/tuarua/AVANE) - FFmpegを使用してビデオエンコードアプリケーションを構築する場合に使用します。
* [PDF](https://github.com/myflashlab/PDF-ANE) - AIRモバイルアプリからPDFファイルを開くことができます。AndroidおよびiOSでサポートされています。
* [VideoPlayer](https://github.com/myflashlab/videoPlayer-ANE) - AndroidまたはiOSのネイティブビデオプレイヤーでビデオファイルを再生できます。
* [SurfaceVideoPlayer](https://github.com/myflashlab/surfaceVideoPlayer-ANE) - SurfacePlayer ANEは、AIRモバイルプロジェクト内でビデオファイルを再生する際に使用できます。
* [Speech](https://github.com/myflashlab/speech-ANE) - 文字列を音声ファイルに変換し、逆に音声ファイルを文字列に変換する処理をバックグラウンドで完全に実行できます。
* [MyAR](https://github.com/myflashlab/AR-ANE-Samples) - AR ANEは、MetaioのSDKに基づきAndroidおよびiOS 64ビットでサポートされています。
* [QR-zbar](https://github.com/saumitrabhave/qr-zbar-ane) - QRコード読み取りANE。
* [Barcode](https://github.com/myflashlab/barcode-ANE) - この高速バーコードスキャナANEで、ほぼすべてのバーコードタイプをスキャンできます。
* [Bullet](https://github.com/mziwisky/bullet-ane) - バレル物理シミュレーションライブラリ。

<a id="file-system-ane"></a>
#### ファイルシステムANE
* [FileChooser](https://github.com/myflashlab/fileChooser-ANE) - デバイスファイルシステムからファイルを選択できるようにします。
* [ZipManager](https://github.com/myflashlab/zipManager-ANE) - AndroidおよびiOSでネイティブプロセスを使用して、大きなZIPアーカイブを圧縮または展開できます。
* [Spotlight](https://github.com/myflashlab/Spotlight-ANE) - iOS 9のスポットライト検索と統合し、検索項目およびユーザー生成コンテンツをインデックス化できます。

<a id="networking-ane"></a>
#### ネットワークANE
* [Firebase](https://github.com/myflashlab/Firebase-ANE) - AndroidおよびiOS向けGoogle FirebaseのAPI。ActionScript APIは100％同一です。
* [DownloadManager](https://github.com/myflashlab/downloadManager-ANE) - 大きなデータファイルのダウンロードを、一時停止／再開機能付きで実行できます。
* [BitTorrent](https://github.com/tuarua/BitTorrentANE) - BitTorrent対応アプリケーションを構築する場合に使用します。

<a id="hardware-ane"></a>
#### ハードウェアANE
* [Bluetooth](https://github.com/myflashlab/bluetooth-ANE) - 他のデバイスを検出し、接続し、ペアリングし、データをやり取りできます。
* [GPS](https://github.com/myflashlab/GPS-ANE) - 最も適切なプロバイダーを自動的に確認して、デバイスの現在のGPS位置を最も速く取得できます。
* [GoogleVR](https://github.com/myflashlab/GoogleVR-ANE) - AIR開発者向けにGoogleの仮想現実SDKが提供されています。
* [Joystick-ANE](https://github.com/StackAndHeap/joystick-ane) - ANEジャイロスコープライブラリ。
* [AIRControl](https://github.com/AlexanderOMara/AIRControl) - Adobe AIRゲームコントローラーANE。
* [AIROUYAController](https://github.com/gaslightgames/AIROUYAController) - OUYA コントローラー向け ANE
* [AIRKinectv2](https://github.com/Tastenkunst/AIRKinectv2) - Microsoft Kinect v2 for Windows SDK 向け ANE
* [Serial/MIDI/DMX](https://github.com/benkuper/AIR-NativeExtensions) - AIRBonjour, NativeSerial, NativeDMXController, NativeMIDI, VirtualMIDI, ExtendedMouse
* [LeapMotionAS3](https://github.com/logotype/LeapMotionAS3) - LeapMotion センサー向け ANE (ジェスチャー、画像、骨格/骨格 @ 210 FPS を提供)

<a id="system-ane"></a>
#### システムANE
* [TaskbarProgress](https://github.com/tuarua/TaskbarProgressANE) - OSX および Windows 7/8/10 でのタスクバー進行状況の表示
* [DesktopToast](https://github.com/tuarua/DesktopToastANE) - Windows 8/10 および OSX でのインタラクティブなトースト通知の表示
* [AlarmManager](https://github.com/myflashlab/alarmManager-ANE) - AIR アプリが閉じられている場合でもスケジュールされたタスクを実行
* [InAppPayments](https://github.com/myflashlab/inAppPayments-ANE) - Android および iOS でのアプリ内課金とアプリ内購入を同等に実現する ANE
* [PermissionCheck](https://github.com/myflashlab/PermissionCheck-ANE) - Adobe Air アプリ内で権限の確認と要求
* [RateMe](https://github.com/myflashlab/RateMe-ANE) - ユーザーにアプリの評価を最も効率的に促す
* [Statusbar](https://github.com/myflashlab/Statusbar-ANE) - AIR アプリ内で実行時におけるステータスバーの制御
* [Badge](https://github.com/myflashlab/Badge-ANE) - iOS のバッジ値の制御
* [WinDebug](http://www.henke37.cjb.net/windebug/) - Windows 用 ANE でアプリ、ウィンドウ、メモリ、ブレークポイント、メタデータ、レジストリなどに制御
* [Can-Open-URL](https://github.com/StickSports/ANE-Can-Open-URL) - iOS で特定の URL スキームを処理できるアプリがインストールされているかどうかを検出する AN及

<a id="social-ane"></a>
#### ソーシャルANE
* [Facebook](https://github.com/myflashlab/facebook-ANE) - AIR アプリに Facebook SDK を統合
* [GCM](https://github.com/myflashlab/GCM-ANE) - Android および iOS での Google クラウドメッセージの使用
* [Baidu](https://github.com/lilili87222/baidu-ane-for-ios-and-android) - Baidu ANE (iOS および Android 用)

<a id="analytics-ane"></a>
#### 分析ANE
* [Admob](https://github.com/myflashlab/Admob-ANE) - Admob ANE
* [GameServices](https://github.com/myflashlab/GameServices-ANE) - Android+iOS 用 Google ゲームサービス
* [MoPub](https://github.com/StickSports/MoPub-ANE) - MoPub 广告向け ANE
* [UMAnalytics](https://github.com/ColerYu/ANE-UMAnalytics) - UMAnalytics SDK (iOS および Android) 用の ANE
* [Localytics](https://github.com/randori/ANE-Localytics) - モバイル Adobe AIR アプリケーション用の Localytics アナリティクス (iOS および Android)
* [Testflight](https://github.com/jlopez/ane-testflight) - Apple TestFlight 用の ANE
* [HockeyApp](https://github.com/airext/hockeyapp) - Hockeyapp のテストおよび配布プラットフォーム用の ANE
* [Chartboost](https://github.com/ChartBoost/air) - Chartboost SDK 用の ANE およびコンパイルスクリプト
* [Devtodev](https://github.com/devtodev-analytics/air-sdk) - ゲーム開発者向けのフルサイクルアナリティクスソリューション
