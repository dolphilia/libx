---
title: Awesome WebGL
description: >-
  WebGLのライブラリ、シェーダーエディター、デバッグツール、学習資料を紹介します。WebGL
  2や開発者向けのWebVR資料、コミュニティ、関連リストも収録しています。
licenseSource: github-sjfricke-awesome-webgl-readme-md
toc:
  maxLevel: 4
---
# Awesome WebGL

WebGLのライブラリ、シェーダーエディター、デバッグツール、学習資料を紹介します。WebGL 2や開発者向けのWebVR資料、コミュニティ、関連リストも収録しています。

[WebGL（Web Graphics Library）](https://www.khronos.org/webgl/)は、対応ブラウザーでプラグインなしにインタラクティブな3D・2Dグラフィックスを描画するJavaScript APIです。ブラウザーのWeb標準に組み込まれ、ページ内のCanvasで物理演算、画像処理、エフェクトにGPUアクセラレーションを利用できます。

WebGLの描画は他のHTML要素と混在させ、ページや背景と合成できます。プログラムは、JavaScriptの制御コードとGPU（Graphics Processing Unit）で実行するシェーダーコードを組み合わせます。

## WebGL

WebGLの資料とツールです。

### 記事

チュートリアル以外のWebGL関連記事・ブログ記事です。

* [Context Loss & Preloading](https://medium.com/@mattdesl/non-intrusive-webgl-cebd176c281d#.gyc6h9mr5) - WebGLのコンテキストを失ったときの対処方法。
* [WebGL Off the Main Thread](https://hacks.mozilla.org/2016/01/webgl-off-the-main-thread/) - WebGLでブラウザーのWeb Workerを使う方法。
* [Optimizing Scenes for Better WebGL Performance](https://www.soft8soft.com/docs/manual/en/introduction/Optimizing-WebGL-performance.html) - WebGLを使ったインタラクティブコンテンツの最適化手法。
* [First steps in WebGL](https://dev.to/aralroca/first-steps-in-webgl-385c) - 三角形を描く例を通して、WebGLとは何か、どのように動くかを学ぶ入門記事。

### ブログ連載

> WebGLを扱うブログ連載です。

* [Codeflow](http://codeflow.org/tags/webgl.html) - WebGLの技法や工夫を紹介するブログ記事。
* [Real-Time Rendering](http://www.realtimerendering.com/blog/tag/webgl/) - 書籍『Real-Time Rendering』のブログ。
* [WebGL Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices) - Mozillaの公式WebGLベストプラクティス。
* [WebGL Insights](http://webglinsights.blogspot.com/) - 書籍『WebGL Insights』のブログ。
* [WebGL Month](https://github.com/lesnitsky/webgl-month) - 1か月間、毎日WebGLを学ぶチュートリアル。
* [WebGL Image Processing](https://maximmcnair.com/webgl-image-processing) - WebGLによる画像処理。色補正、ブレンドモード、しきい値処理、ディザリング、畳み込み、フィルムグレインなどの手法を解説。

### 書籍

WebGLに関する書籍です。

* [Interactive Computer Graphics: A Top-Down Approach with WebGL](https://www.amazon.com/Interactive-Computer-Graphics-Top-Down-Approach/dp/0133574849) 著者：Edward Angel、Dave Shreiner - 計算機科学・工学を学ぶ学部生、十分なプログラミング技能を持つ他分野の学生、固定原文で最新版と紹介されているWebGLによるコンピューターアニメーションやグラフィックスに関心のある専門家向け。
* [Professional WebGL Programming](https://www.amazon.com/Professional-WebGL-Programming-Developing-Graphics/dp/1119968860) 著者：Andreas Anyuru - WebGLでハードウェアアクセラレーションを使った3Dグラフィックスを開発する方法。
* [Programming 3D Applications with HTML5 and WebGL](https://www.amazon.com/Programming-Applications-HTML5-WebGL-Visualization/dp/1449362966) 著者：Tony Parisi - HTML5、CSS3、WebGLによる高性能な3D Webアプリケーションの開発。本書ではWebGLを新しいグラフィックス標準として紹介。
* [WebGL Beginner's guide](https://www.amazon.com/WebGL-Beginners-Guide-Diego-Cantor/dp/184969172X) 著者：Diego Cantor、Brandon Jones - JavaScript開発者向けの、WebGLによる3D Web開発の入門書。
* [WebGL Hotshot](https://www.amazon.com/WebGL-Hotshot-Mitch-Williams-ebook/dp/B00KLAJ65Y) 著者：Mitch Williams - Webデザイナーが3Dグラフィックスの概念や技能を学ぶ書籍。
* [WebGL Insights](https://github.com/WebGLInsights/WebGLInsights.github.io/releases/download/v1.0/WebGL.Insights.-.Patrick.Cozzi.pdf) 著者：Patrick Cozzi - 中級・上級のWebGL開発者向けの実践的な技法。WebGLエンジン・アプリケーション開発者、GPUベンダー、ブラウザー開発者、研究者、教育者の寄稿を収録。
  * [書籍のサイト](http://www.webglinsights.com/)
* [WebGL Programming Guide: Interactive 3D Graphics Programming with WebGL](https://www.amazon.com/WebGL-Programming-Guide-Interactive-Graphics/dp/0321902920) 著者：Kouichi Matsuda、Rodger Lea - HTML5、JavaScript、3Dグラフィックス、数学、OpenGLの予備知識がなくても始められる、WebGLによるインタラクティブな3Dプログラミングの入門書。

### バグ報告

ブラウザーや仕様のバグ報告先です。

* [Chromeのバグ報告](https://bugs.chromium.org/p/chromium/issues/list) - Chromeに関するバグの報告先。
* [KhronosのGitHub Issue](https://github.com/KhronosGroup/WebGL/issues) - 仕様や適合性に関するバグの報告先。
* [Mozilla BugZilla](https://bugzilla.mozilla.org) - Firefoxに関するバグの報告先。
* [WebKit Bugzilla](https://bugs.webkit.org/enter_bug.cgi?assigned_to=cmarrin%40apple.com&attachurl=&blocked=&bug_file_loc=http%3A%2F%2F&bug_severity=Normal&bug_status=NEW&comment=&component=WebGL&contenttypeentry=&contenttypemethod=autodetect&contenttypeselection=text%2Fplain&data=&dependson=&description=&flag_type-1=X&flag_type-3=X&form_name=enter_bug&keywords=&maketemplate=Remember%20values%20as%20bookmarkable%20template&op_sys=Mac%20OS%20X%2010.5&priority=P2&product=WebKit&rep_platform=PC&short_desc=&version=528%2B%20%28Nightly%20build%29) - Safariに関するバグの報告先。

### GLSL エディター

> オンラインのGLSLエディターです。

> 注意：[WebGL 1のシェーダーはOpenGL ES Shading Languageバージョン1.00に適合する必要があります](https://www.khronos.org/registry/webgl/specs/1.0.3/#4.3)

> [GLSLバージョン1.00の公式仕様](https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf)

> [OpenGL ESバージョン2.0.25の公式仕様](https://www.khronos.org/registry/OpenGL/specs/es/2.0/es_full_spec_2.0.pdf)

* [Fractal Lab](http://hirnsohle.de/test/fractalLab/) - 2D・3Dフラクタルを探索するオンラインツール。
* [GLSL Sandbox](http://glslsandbox.com) - フラグメントシェーダーをその場で編集するオンラインエディター。
* [GLSLbin](http://glslb.in) - [glslify](https://github.com/glslify/glslify)に対応するフラグメントシェーダーのサンドボックス。
* [Shader Toy](https://www.shadertoy.com) - フラグメントシェーダーをその場で編集するエディター。
* [ShaderFrog](https://shaderfrog.com/) - WebGLシェーダーの編集・組み合わせ用ツール。
* [SHDR Editor](http://shdr.bkcore.com) - GLSLシェーダーをその場で編集・表示・検証するツール。
* [ShaderExpo](https://anuraghazra.github.io/ShaderExpo/) - 依存ライブラリ不要のシェーダーエディター。行内のエラーログ、自動補完、モデル・テクスチャの読み込みに対応。

### リファレンス

> WebGLの参照資料です。

* [Google Project ANGLE](https://github.com/google/angle) - 固定原文では、Windows版Google ChromeとMozilla Firefoxの標準WebGLバックエンドとして紹介。
* [Khronosの公式Wiki](https://www.khronos.org/webgl/wiki/) - WebGLの公式Wiki。
* [WebVR Community Group](https://www.w3.org/community/immersive-web/) - 高性能な仮想現実をオープンなWebに導入することを目指すグループ。
* [WebGL Errata](https://www.khronos.org/webgl/wiki/Errata_to_the_WebGL_Specification) - 適合性テストとコードの移植性に影響する、グラフィックスドライバーの既知のバグ。
* [WebGL拡張](https://www.khronos.org/registry/webgl/extensions/) - WebGL拡張の一覧。
* [WebGLリファレンスカード](https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf) - 印刷用のWebGL 1.0 API早見表。
* [WebGLソースコード](https://github.com/KhronosGroup/WebGL) - 閲覧や開発への参加に使うWebGLのソースコード。
* [WebGL仕様書](https://www.khronos.org/registry/webgl/specs/1.0/) - WebGLの詳細な仕様。

### 講演

> WebGL関連の講演です。

* [発表資料一覧](https://www.khronos.org/webgl/wiki/Presentations) - KhronosがまとめたWebGL関連の発表資料。
* [Next-Generation 3D Graphics on the Web](https://www.youtube.com/watch?v=K2JzIUIHIhc) - Ricardo Cabello（MrDoob）によるGoogle I/O 19での講演。

### ツール／デバッグ

> WebGLの開発・デバッグに使うツールです。

* [Khronos Dev Tools](https://github.com/KhronosGroup/WebGLDeveloperTools) - ES6モジュールとして使うことを想定したWebGL開発ツール。
* [Spector.js](https://spector.babylonjs.com/) - WebGLシーンの調査・問題解決用のJavaScriptフレームワーク。描画フレームワークに依存しない。
* [WebGL Inspector](http://benvanik.github.io/WebGL-Inspector/) - gDEBuggerとPIXを参考にした、高度なWebGLアプリケーションの開発用ツール。
* [WebGl Playground](http://jessevdk.github.io/webgl-play/) - JavaScriptと、必要に応じてGLSLの頂点・フラグメントシェーダーを同時に編集するツール。コードの整理、整形、構文ハイライトに対応。
* [WebGL Report](http://webglreport.com/?v=1) - ブラウザーが対応するWebGL機能を調べるツール。
* [WebGL Support Stats](http://webglstats.com/) - ブラウザー・端末ごとのWebGL機能対応を示すインタラクティブなダッシュボード。
* [WebGL Texture Tester](http://toji.github.io/texture-tester/) - WebGLの各テクスチャ形式を1つずつ読み込み、ブラウザー・端末が対応する形式を調べるツール。
* [Web Tracing Framework](http://google.github.io/tracing-framework/index.html) - 複雑なWebアプリケーションのトレース・調査に使うライブラリ、ツール、可視化機能の集合。

#### Chrome 固有のツール／デバッガー

* [GLSL Shader Editor Extension](https://github.com/spite/ShaderEditorExtension) - ブラウザー内でシェーダーをその場で編集するChrome DevTools拡張。
* [Spector.js Extension](https://chrome.google.com/webstore/detail/spectorjs/denbgaamihkadbghdceggmchnflmhpmk) - WebGL・WebGL 2シーンの調査と問題解決用ツール。
* [Webgl Insight](https://github.com/3Dparallax/insight) - さまざまなWebGLデバッグ機能を備えたChrome拡張。

#### Firefox 固有のツール／デバッガー

* [Canvas Debugger](https://hacks.mozilla.org/2014/03/introducing-the-canvas-debugger-in-firefox-developer-tools/) - Firefoxの開発者ツールでWebGLシェーダーをデバッグする短いチュートリアル。
* [Firefox開発者ツール](https://developer.mozilla.org/en-US/docs/Tools) - MozillaによるFirefoxの公式デバッグツール一覧。
* [Shader Editor](https://hacks.mozilla.org/2013/11/live-editing-webgl-shaders-with-firefox-developer-tools/) - Firefoxの開発者ツールでWebGLシェーダーをデバッグする短いチュートリアル。

### チュートリアル

> 動画以外のオンラインWebGLチュートリアルです。

* [Directional Shadow Mapping](http://chinedufn.com/webgl-shadow-mapping-tutorial/) - リアルタイムの平行光源シャドウマッピングの概念。
* [Get Started Tutorial](https://www.khronos.org/webgl/wiki/Tutorial) - KhronosによるWebGLの入門チュートリアル。
* [Getting Started with WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL) - Mozilla FoundationによるWebGLの入門ガイド。
* [Learn WebGL](https://www.tutorialspoint.com/webgl/index.htm) - WebGLの用語を学ぶTutorials Pointの記事。
* [Learning WebGL](http://learningwebgl.com/blog/?page_id=1217) - 『WebGL Up and Running』の著者によるチュートリアル。
* [Multitexturing using a Blendmap](http://chinedufn.com/webgl-multitexture-blend-map-tutorial/) - ブレンドマップで地形に複数のテクスチャを適用する方法。
* [Particle Effects via Billboards](http://chinedufn.com/webgl-particle-effect-billboard-tutorial/) - ビルボード技法によるパーティクルエフェクトの作成。
* [The Book of Shaders](https://thebookofshaders.com/) - フラグメントシェーダーを段階的に学ぶ入門ガイド。
* [WebGL Academy](http://www.webglacademy.com/) - 自動インデントとHTML・JavaScript・GLSL・Pythonの構文ハイライトを備えたオンラインIDE。コードの実行とプロジェクトのダウンロードに対応。
* [WebGL Fundamentals](https://webglfundamentals.org/) - コード例と操作できるデモを備えたオンラインチュートリアル。
* [WebGL Workshop](http://webgl-workshop.com/) - WebGLを使い始めるためのインタラクティブなワークショップ。

### 動画

> WebGL関連の動画です。

* [An Introduction to WebGL Programming](https://www.youtube.com/watch?v=tgVLb6fOVVc&feature=youtu.be) - SIGGRAPH Universityによる、3時間のWebGL概説。
* [WebGL Tutorials - YouTube](https://www.youtube.com/playlist?list=PLjcVFFANLS5zH_PeKC6I8p0Pt1hzph_rt) - Indigo Codeによる、YouTubeの講義形式の動画チュートリアル。

## WebGL 2

固定原文では、WebGL 2を今後の仕様として紹介しています。

WebGL全般の資料は[WebGL](#webgl)節にあります。

### 記事

チュートリアル以外のWebGL 2関連記事・ブログ記事です。

* [WebGL 2 What's New](https://webgl2fundamentals.org/webgl/lessons/webgl2-whats-new.html) - WebGL 2で追加された機能の紹介。
* [What's Coming in WebGL 2.0](https://blog.tojicode.com/2013/09/whats-coming-in-webgl-20.html) - 記事執筆時点でWebGL 2への導入が予定されていた機能の紹介。
* [WebGL 2 SIGGRAPH Asia 2015](https://docs.google.com/presentation/d/1Orx0GB0cQcYhHkYsaEcoo5js3c5-pv7ahPniIRIzzfg/edit#slide=id.p) - GoogleのZhenyao MoとKen Russellによる、SIGGRAPH Asia 2015での発表。
* [WebGL 2 Lands in Firefox](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) - Firefox 51からのWebGL 2対応についての解説。
* [WebGL 2 Basics](http://www.realtimerendering.com/blog/webgl-2-basics/) - WebGL 2の入門ブログ記事。
* [WebGL 2 New Features](http://www.realtimerendering.com/blog/webgl-2-new-features/) - WebGL 2の新機能を紹介する記事。

### リファレンス

> WebGL 2の参照資料です。

* [WebGL 2仕様書（編集者草案）](https://www.khronos.org/registry/webgl/specs/latest/2.0/) - WebGL 2の詳細な仕様。上流リストでは編集者草案として紹介。
* [WebGL 2リファレンスカード](https://www.khronos.org/files/webgl20-reference-guide.pdf) - 印刷用のWebGL 2.0 API早見表。
* [WebGL 2対応表](https://caniuse.com/#feat=webgl2) - WebGL 2へのブラウザーの対応状況を示す表。

### チュートリアル
* [WebGL 2 Fundamentals](https://webgl2fundamentals.org/) - コード例と操作できるデモを備えたオンラインチュートリアル。
* [WebGL 2 Samples](http://webglsamples.org/WebGL2Samples/) - 解説コメントを備えたWebGL 2のサンプル。
* [WebGL 2 Examples](https://github.com/tsherif/webgl2examples) - WebGL 2を直接使って実装した描画アルゴリズム。
* [WebGL 2 & GLSL Primer: A Zero-to-Hero, Spaced-Repetition Guide](https://github.com/GregStanton/webgl2-glsl-primer) - 間隔反復でWebGL 2とGLSLを学ぶ段階的な教材。内容を最小単位の質問・回答カードに分け、実習プロジェクトと解答コードを各所に収録。

### 動画

> WebGL関連の動画です。

* [Fun with WebGL 2.0](https://www.youtube.com/playlist?list=PLMinhigDWz6emRKVkVIEAaePW7vtIkaIF) - WebGL 2の入門動画チュートリアル。固定原文では動画追加が続いているシリーズとして紹介。
* [WebGL 2.0 is Here: What You Need To Know](https://www.youtube.com/watch?v=Xf65duJ_QFs) - 2017年4月のKhronosウェビナー。
    * [スライド](https://www.khronos.org/assets/uploads/developers/library/2017-webgl-webinar/Khronos-Webinar-WebGL-20-is-here_What-you-need-to-know_Apr17.pdf)

## WebVR

固定原文では、WebVRを発展途上のエコシステムとして紹介しています。

娯楽用のWebVRコンテンツを探すためではなく、開発に使う資料を収録しています。

### ブログ連載

固定原文で継続的に更新されると紹介されている、WebVRのブログ連載です。

* [Mozilla VR Blog](https://blog.mozvr.com/) - Firefoxの開発元によるWebVRのブログ。

### プラットフォーム

> WebVR体験用のプラットフォームです。

* [JanusVR](https://janusvr.com/) - Webページを、ポータルでつながる共同利用可能な3D Web空間として扱うプラットフォーム。

### リファレンス

> WebVRの参照資料です。

* [ブラウザーの対応状況](https://webvr.rocks/) - ブラウザー、ヘッドセット、OSごとのWebVR対応状況。
* [Mozilla VR](https://mixedreality.mozilla.org/) - Mozillaの公式WebVRページ。
* [UX of VR](https://www.uxofvr.com/) - WebVRのユーザー体験を設計するための資料。
* [WebXR Device API](https://immersive-web.github.io/webxr/) - WebXR向けのW3C API草案。
* [WebVR仕様書](https://w3c.github.io/webvr/) - W3Cの公式WebVR仕様（旧仕様）。
  * [WebVR仕様書の読み方](https://dassur.ma/things/reading-specs/)

## ライブラリ

> [各ライブラリの詳細は、上流リストのLibrariesディレクトリで確認できます。](https://github.com/sjfricke/awesome-webgl/tree/master/Libraries)

### 2D
* [p2.js](https://github.com/schteppe/p2.js) - JavaScript製の2D剛体物理エンジン。
* [Phaser](https://phaser.io/) - CanvasとWebGLを使うオープンソースのHTML5 2Dゲームフレームワーク。モバイルブラウザーにも対応。
* [PixiJS](http://www.pixijs.com/) - WebGLを使った2D JavaScriptレンダラー。
* [Planck.js](https://github.com/shakiba/planck.js) - 複数の環境向けのHTML5ゲーム開発に使う2D物理エンジン。
* [Stage.js](https://github.com/shakiba/stage.js) - 複数の環境向けのHTML5ゲーム開発に使う2Dライブラリ。

### コンピュート（GPGPU）

#### コンピュータービジョン
* [GammaCV](https://gammacv.com) - ブラウザー向けの、WebGLで処理を高速化するコンピュータービジョンライブラリ。

#### パーティクル
* [Phenomenon](https://github.com/vaneenige/phenomenon) - 高性能なアプリケーションに必要な基本機能を提供する、小型で低水準のWebGLライブラリ。

### 地図と可視化
* [Cesium](https://cesiumjs.org/) - 3D地球儀・地図向けのオープンソースライブラリ。
* [Deck.gl](http://deck.gl/) - React向けのWebGLデータ可視化レイヤー。高性能な描画を想定。
* [Luma.gl](https://luma.gl/) - WebGL 2とGPUを使う、データ可視化・計算用フレームワーク。
* [MapMetrics GL](https://github.com/MapMetrics/mapmetrics-gl) - Mapbox GL JS互換の地図ライブラリ。ベクタータイル、ジオコーディング、経路案内、検索を内蔵。
* [xeokit](https://xeokit.io/) - AEC/BIMアプリケーション向けのWebグラフィックスSDK。3Dタイル、実世界の座標、倍精度に対応。

### 数学
* [glMatrix](http://glmatrix.net/) - 高性能なWebGLアプリケーション向けのJavaScript行列・ベクトルライブラリ。
* [Sylvester](http://sylvester.jcoglan.com/) - JavaScriptのベクトル・行列・幾何計算ライブラリ。
* [TWGL](http://twgljs.org/) - WebGL APIを使うコードの記述量を減らすことを目的としたライブラリ。

### レンダリング
* [GLBoost](https://github.com/emadurandal/GLBoost) - 3Dグラフィックスを描画するライブラリ。
* [GrimoireGL](https://grimoire.gl/) - Webエンジニアリングとコンピューターグラフィックスの橋渡しをするライブラリ。
* [Hilo3d](https://github.com/hiloteam/Hilo3d) - 3Dゲーム向けのWebGL描画エンジン。

### 物理
* [Ammo.js](https://github.com/kripken/ammo.js/) - Emscriptenを使い、Bullet物理エンジンをJavaScriptへ直接移植したもの。
* [Cannon.js](http://schteppe.github.io/cannon.js/) - Web向けの軽量で簡潔な3D物理エンジン。

### WebGL 2
* [PicoGL.js](https://tsherif.github.io/picogl.js/) - WebGL 2専用の最小限の描画ライブラリ。

### WebVR
* [A-Frame](https://aframe.io/) - 仮想現実体験を作るWebフレームワーク。
  * [Awesome-AFrame](https://github.com/aframevr/awesome-aframe)
* [Hologram](https://hologram.cool/) - コーディングの予備知識なしで、WebVRを対話的に作成・試作するデスクトップアプリ。
* [LÖVR](https://lovr.org/) - LuaでVRを作る簡潔なフレームワーク。
* [React 360](https://facebook.github.io/react-360/) - ReactでVRサイトやインタラクティブな360度体験を作るツール。
* [Primrose](https://github.com/capnmidnight/Primrose/) - ブラウザーでVRアプリケーションを試作するツール。

### その他
* [Babylon.js](https://www.babylonjs.com/) - HTML5、WebGL、Web Audioによる3Dゲーム開発用のJavaScriptフレームワーク。
* [Blend4Web](https://www.blend4web.com/en/) - インターネット上のインタラクティブな3D可視化用ツール。
* [ClayGL](http://claygl.xyz/) - 拡張可能なWeb3Dアプリケーションを作るWebGLグラフィックスライブラリ。
* [CopperLicht](https://www.ambiera.com/copperlicht/index.html) - ゲームや3Dアプリケーションを作るJavaScriptライブラリ・WebGL 3Dエンジン。
* [GLGE](http://www.glge.org/) - WebGLを使いやすくするJavaScriptライブラリ。
* [Lightgl.js](https://github.com/evanw/lightgl.js) - 試作用の、軽量で明示的なWebGLライブラリ。
* [OSG.js](https://cedricpinson.github.io/osgjs-website/) - OpenSceneGraphの概念に基づくWebGLフレームワーク。
* [Pex-gl](http://vorg.github.io/pex/) - Plask/Node.jsとWebGLを使った計算的思考向けのJavaScriptライブラリ群。
* [PlayCanvas](https://playcanvas.com/) - インタラクティブな体験を作るゲームエンジンプラットフォーム。
* [Pocket.gl](https://github.com/gportelli/pocket.gl) - Webページへ埋め込む、全体をカスタマイズできるWebGLシェーダーのサンドボックス。
* [Regl](http://regl.party/) - WebGLを関数型に抽象化する、軽量・宣言的・ステートレスなライブラリ。
* [Scene.js](http://scenejs.org/) - 詳細な3D可視化向けの、拡張可能なWebGLエンジン。
* [Three.js](https://threejs.org/) - 軽量で使いやすいことを目指す3Dライブラリ。
* [Turbulenz](https://github.com/turbulenz/turbulenz_engine) - ブラウザー・デスクトップ・モバイル端末向けにHTML5ゲームを作る、モジュール構造の2D・3Dゲームフレームワーク。
* [Verge3D](https://www.soft8soft.com/verge3d/) - アーティスト向けの、3D Web体験を作るツール群。
* [Whitestorm.js](https://whs.io/) - 物理演算を備えた3D Webアプリケーションの開発用フレームワーク。

## コミュニティ
* [Stack Overflow](https://stackoverflow.com/questions/tagged/webgl)
* [Reddit](https://www.reddit.com/r/webgl/)
* [Facebook](https://www.facebook.com/groups/webgl/about/)
* [Twitter](https://twitter.com/webgl)
* [Freenode IRC](http://webchat.freenode.net/?channels=webgl)
* [Khronos Forum](https://community.khronos.org/c/other-standards/webgl)
* [Google Group](https://groups.google.com/forum/#!forum/webgl-dev-list)
* [Google Plus](https://plus.google.com/communities/114915309361980512257)
* [公開メーリングリスト](https://www.khronos.org/webgl/public-mailing-list/)
* [WebVR Slack](http://webvr-slack.herokuapp.com/)
* [WebVR公開メーリングリスト](https://lists.w3.org/Archives/Public/public-webvr/)
* 固定原文で活動中と紹介されているMeetupグループ
  * [サンフランシスコ（CA）](https://www.meetup.com/WebGL-Developers-Meetup/)
  * [マウンテンビュー（CA）](https://www.meetup.com/Silicon-Valley-HTML5-WebGL-Meetup/)
  * [ロンドン（英国）](https://www.meetup.com/WebGL-Workshop-London/)
  * [ニューヨーク（NY）](https://www.meetup.com/NYC-WebGL-Developers/)

## 関連リスト

> 関連するAwesomeリストです。

* [awesome](https://github.com/sindresorhus/awesome) - Awesomeリストを集めたリスト。
* [awesome-opengl](https://github.com/eug/awesome-opengl) - OpenGLのライブラリ、デバッガー、資料のリスト。他のAwesomeリストを参考に作成。
* [awesome-vulkan](https://github.com/vinjn/awesome-vulkan) - Vulkanのプロジェクトと関連資料のリスト。
* [gamedev](https://github.com/ellisonleao/magictools) - ゲーム開発の資料を集めたリスト。
* [glTF](https://github.com/KhronosGroup/glTF) - Web向けに設計された、実行時の3Dアセット配信形式。
* [graphics-resources](https://github.com/mattdesl/graphics-resources) - グラフィックスプログラミングの資料一覧。
