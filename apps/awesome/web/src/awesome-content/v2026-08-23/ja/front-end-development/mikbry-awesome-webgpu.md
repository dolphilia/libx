---
title: "Awesome WebGPU"
description: "WebGPUの仕様、ブラウザー対応、教材、ライブラリ、デバッグツール、デモ、コミュニティの資料。"
licenseSource: "github-mikbry-awesome-webgpu-readme-md"
---

# Awesome WebGPU

[WebGPU](https://www.w3.org/TR/webgpu/)は、デスクトップからモバイルまで、現代的な3DグラフィックスとGPU計算に使う[W3C](https://www.w3.org/)のウェブ標準です。WebGLとは異なり、既存のネイティブAPIの移植ではなく、Metal、Vulkan、Direct3D12の概念を取り入れています。固定原文では近年のGPUでの性能を目指す開発途上の標準と説明しており、以下で仕様、ブラウザー対応、教材、ライブラリ、デバッグ、デモ、コミュニティの議論を探せます。

## <a id="websites"></a>Web サイト

### <a id="official-websites"></a>公式サイト
- [GPUWeb](https://github.com/gpuweb/gpuweb) - 公式GitHubリポジトリ。
- [WebGPU公式解説](https://gpuweb.github.io/gpuweb/explainer/)

### <a id="webgpu-specifications"></a>WebGPU 仕様
- [策定履歴](https://www.w3.org/standards/history/webgpu/)
- [編集者草案](https://gpuweb.github.io/gpuweb/)
### <a id="wgsl-webgpu-shading-language-specifications"></a>WGSL（WebGPU Shading Language）仕様
- [作業草案](https://www.w3.org/TR/WGSL/)
- [編集者草案](https://gpuweb.github.io/gpuweb/wgsl/)

### <a id="api-documentations"></a>API ドキュメント
- [API早見表とドキュメント](https://webgpu.rocks/) - WebGPU.rocks。
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) - MDNのWebGPU APIリファレンス。

### <a id="misc"></a>その他
- [Google開発者サイト](https://developer.chrome.com/docs/web-platform/webgpu)
- [GitHub上の107のWebGPUプロジェクト](https://awesomeopensource.com/projects/webgpu) - AwesomeOpenSource.com。
- [r/WebGPU - Reddit](https://www.reddit.com/r/webgpu/) - WebGPUのSubreddit。
- [compute.toys](https://compute.toys/) - Shadertoyのようなコンピュートシェーダーの実験環境。
- [Shadeup](https://shadeup.dev/) - WebGPUでの実験を容易にする言語・ウェブサイト。
- [Tour of WGSL](https://google.github.io/tour-of-wgsl/) - WebGPU Shading Languageの短い入門。
- [WebGPU Experts Blog](https://www.webgpuexperts.com/blog) - WebGPUの月次ニュース。

## <a id="browser-support"></a>ブラウザー対応状況
固定原文ではWebGPUを実験的な技術と説明しています。以下の対応状況と設定方法は、その原文時点の記述です。
- [実装状況](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status) - W3C公式グループ。
- [WebGPUのブラウザー対応状況](https://caniuse.com/webgpu) - CanIUse.com WebGPU。

### Chrome
原文ではChromeおよびBlink/Chromiumベースのブラウザーで対応していると記載されています。
- [デスクトップ](https://www.google.com/chrome/) - WindowsとmacOSでWebGPUが既定で有効。
- [Android](https://developer.chrome.com/blog/new-in-webgpu-121) - WebGPUが既定で有効。
- [Edge](https://www.microsoft.com/edge/) - WebGPUが既定で有効。

### Firefox
原文ではWebGPUへの対応はまだ実験的と説明されています。
- [Firefox Nightly](https://nightly.mozilla.org/) - `about:config`を開き、`dom.webgpu.enabled`をtrueに設定。

### Safari
原文ではWebGPUへの対応はまだ実験的と説明されています。
- [macOS Safari TP](https://developer.apple.com/safari/resources/) - 190以降でWebGPUが既定で有効。
- [macOS Safari](https://www.apple.com/safari/) - macOS 26 Tahoe以降でWebGPUが既定で有効。それ以前の版では`WebGPU`機能フラグが必要。
- [iOS/iPadOS Safari](https://mil-tokyo.github.io/webdnn/docs/tips/enable_webgpu_ios.html) - iOS/iPadOS 26以降でWebGPUが既定で有効。それ以前の版では`Settings` &rightarrow; `Safari` &rightarrow; `Advanced` &rightarrow; `Feature Flags` &rightarrow; `WebGPU`の設定が必要。

## <a id="articles"></a>記事

- [WebGPU](https://en.wikipedia.org/wiki/WebGPU) - Wikipediaの記事。
- [A Taste of WebGPU in Firefox](https://hacks.mozilla.org/2020/04/experimental-webgpu-in-firefox/) - Dzmitry MalyshauによるMozilla.orgの記事。
- [Point of WebGPU native](https://kvark.github.io/web/gpu/native/2020/05/03/point-of-webgpu-native) - 著者：Dzmitry Malyshau。
- [Graphics on the web and beyond with WebGPU](https://dmnsgn.medium.com/13c4ba049039) - 著者：[Damien Seguin](https://dmnsgn.medium.com/)。
- [Implementing WebGPU in Gecko](https://kvark.github.io/web/gpu/gecko/2019/12/10/gecko-webgpu) - 著者：[Dzmitry Malyshau](https://github.com/kvark)。
- [From WebGL to WebGPU in Construct](https://www.construct.net/en/blogs/ashleys-blog-2/webgl-webgpu-construct-1519) - 著者：Ashley Gullen。
- [A brief history of graphics on the web and WebGPU](https://www.construct.net/en/blogs/ashleys-blog-2/brief-history-graphics-web-1517) - 著者：Ashley Gullen。
- [WebGPU texture best practices](https://toji.github.io/webgpu-best-practices/img-textures.html) - 著者：Brandon Jones。
- [WebGPU Buffer upload best practices](https://toji.github.io/webgpu-best-practices/buffer-uploads.html) - 著者：Brandon Jones。
- [wgpu-rs on the web](https://gfx-rs.github.io/2020/04/21/wgpu-web) - Rust Graphics Mages。
- [Compiling Machine Learning to WASM and WebGPU with Apache TVM](https://tvm.apache.org/2020/05/14/compiling-machine-learning-to-webassembly-and-webgpu) - 著者：[Tianqi Chen](https://github.com/tqchen)と[Jared Roesch](https://github.com/jroesch)。
- [The WebAssembly App Gap](https://paulbutler.org/2020/the-webassembly-app-gap/) - 著者：[Paul Butler](https://github.com/paulgb)。
- [Next-generation 3D Graphics on the web](https://webkit.org/blog/7380/next-generation-3d-graphics-on-the-web/) - Webkit.orgの記事。著者：[Dean Jackson](https://twitter.com/grorgwork)。
- [Efficently rendering glTF models - A WebGPU Case Study](https://toji.github.io/webgpu-gltf-case-study/) - 著者：[Brandon Jones](https://github.com/toji)。
- [WebGPU - All of the cores, none of the canvas](https://surma.dev/things/webgpu/index.html) - 著者：[Surma](https://github.com/surma)。
- [WebGPU Fundamentals](https://webgpufundamentals.org/) - WebGPUの学習に役立つ記事集。
- [PBR in WebGPU: implementation details](https://tchayen.com/pbr-in-webgpu-implementation-details) - 著者：[Tomasz Czajecki](https://github.com/tchayen)。
- [I want to talk about WebGPU](https://cohost.org/mcc/post/1406157-i-want-to-talk-about-webgpu) - 著者：[Andi](https://mastodon.social/@mcc)。
- [From WebGL to WebGPU](https://developer.chrome.com/blog/from-webgl-to-webgpu/) - 著者：Google。
- [WebGPU for Dummies](https://amirsojoodi.github.io/posts/WebGPU-for-Dummies/) - 著者：Amir Sojoodi。
- [WebGPU Timestamps](https://amirsojoodi.github.io/posts/WebGPU-Timestamp/) - 著者：Amir Sojoodi。
- [WebAssembly and WebGPU](https://developer.chrome.com/blog/io24-webassembly-webgpu-2) - WebAssemblyとWebGPUでウェブ上の機械学習性能を改善する方法を学ぶ記事の第2部。

## <a id="tutorials"></a>チュートリアル

- [Raw WebGPU](https://alain.xyz/blog/raw-webgpu) - WebGPUアプリの実装方法の概要。著者：[Alain Galvan](https://github.com/alaingalvan)。
- [Basic WebGPU Rendering](https://dev.to/ndesmic/basic-webgpu-rendering-2kob) - シーンをレンダリングする手順の要約。著者：[@ndesmic](https://github.com/ndesmic)。
- [Get started with GPU Compute on the Web](https://web.dev/gpu-compute/) - グラフィックス以外の用途でWebGPUを使うチュートリアル。著者：[François Beaufort](https://github.com/beaufortfrancois)。
- [WebGPU for Metal Developers Part 1](https://metalbyexample.com/webgpu-part-one/)と[Part 2](https://metalbyexample.com/webgpu-part-two/) - AppleのGPU APIであるMetalの視点からのWebGPU入門。著者：[Warren Moore](https://twitter.com/warrenm)。
- [From 0 to glTF with WebGPU: Series](https://www.willusher.io/graphics/2023/04/10/0-to-gltf-triangle/) [（リポジトリ）](https://github.com/Twinklebear/webgpu-0-to-gltf?tab=readme-ov-file) - glTFモデルビューアーを作るチュートリアル。著者：[Will Usher](https://github.com/Twinklebear)。
- [Learn wgpu](https://sotrh.github.io/learn-wgpu/) - WebGPUのRust実装wgpuのチュートリアルと実例。著者：[@sotrh](https://github.com/sotrh)
- [LearningWebGPU 教程 （中国語）](https://github.com/hjlld/LearningWebGPU) - 著者：[@hjlld](https://github.com/hjlld)。
- [Real-Time Ray-Tracing in WebGPU](https://maierfelix.github.io/2020-01-13-webgpu-ray-tracing/) - VulkanとDX12のレイトレーシング拡張を備えた改変版WebGPU実装でレイトレーサーを構築。著者：[Felix Maier](https://github.com/maierfelix)。
- [Build a compute rasterizer in WebGPU](https://github.com/OmarShehata/webgpu-compute-rasterizer/blob/main/how-to-build-a-compute-rasterizer.md) - コンピュートシェーダーで完全なラスタライザーを構築する方法。著者：[Omar Shehata](https://github.com/OmarShehata)。
- [WebGPU Engine Development （中国語・英語）](https://arche.graphics/docs/intro) - WebGPUエンジンの開発工程（C++とTypeScript）。
- [Learn WebGPU for native C++ development](https://eliemichel.github.io/LearnWebGPU) - wgpuまたはDawnを使うデスクトップアプリ向けWebGPUチュートリアル。著者：[@eliemichel](https://github.com/eliemichel)。

## <a id="books"></a>書籍

- [Practical WebGPU Graphics](https://books.google.com/books?id=tPQyEAAAQBAJ&printsec=frontcover) - 著者：[Jack Xu](https://github.com/jack1232)

## <a id="libraries"></a>ライブラリ

- [Babylon.js](https://doc.babylonjs.com/setup/support/webGPU) - オープンなゲーム・レンダリングエンジン。
- [Three.js](https://threejs.org/) - 使いやすく軽量な汎用3Dライブラリ。
- [PlayCanvas](https://playcanvas.com/) - WebGPUに対応するウェブベースのゲームエンジン。
- [PixiJS](https://pixijs.com/) - WebGPUレンダラーを備えた2Dレンダリングエンジン。
- [Dawn](https://dawn.googlesource.com/dawn) - ChromiumのWebGPUを支えるGoogleの実装。単独のパッケージとしても利用可能。
- [wgpu](https://github.com/gfx-rs/wgpu) - Firefoxで使われるMozillaの実装。Dawnと同様、単独のパッケージとしても利用可能。
- [webgpu-headers](https://github.com/webgpu-native/webgpu-headers) - C/C++ヘッダー。
- [sokol](https://github.com/floooh/sokol/) - CとC++向けのシンプルなSTB形式のクロスプラットフォームライブラリ。
- [RedGPU](https://github.com/redcamel/RedGPU) - JavaScript向けWebGPUライブラリ。著者：[@redcamel](https://github.com/redcamel)。
- [WebGPU .NET](https://github.com/WaveEngine/WebGPU.NET) - wgpuを基盤にした.NETバインディング。
- [Deno](https://deno.com/) - V8エンジンを基盤にしたJavaScript、TypeScript、WebAssemblyのランタイム。
- [RedCube](https://github.com/Reon90/redcube) - WebGPUバックエンドを使うglTFビューアー。
- [hwoa-rang-gpu](https://github.com/gnikoloff/hwoa-rang-gpu) - 小規模なWebGPUレンダリング・計算ライブラリ。
- [wgsl_reflect](https://github.com/brendan-duncan/wgsl_reflect) - JavaScript向けのWebGPU Shading Languageパーサーとリフレクションライブラリ。
- [Arche Graphics](https://github.com/yangfengzzz/Arche.js) - WebGPUグラフィックスエンジン。
- [WebGPU-C++](https://github.com/eliemichel/WebGPU-Cpp) - 単一ファイルでオーバーヘッドがなく、C++らしい記法のラッパー。著者：@eliemichel。
- [Use.GPU](https://usegpu.live) - リアクティブ・宣言的なWebGPUランタイム。
- [GEngine](https://github.com/hpugis/GEngine) - WebGPUを基盤にした基本的なレンダリングエンジン。著者：junwei.gu。
- [Thimbleberry](https://github.com/mighdoll/thimbleberry) - 再利用可能なWebGPUシェーダーと補助関数。
- [WebRTX](https://github.com/codedhead/webrtx) - WebGPUのレイトレーシング拡張。
- [SWGPU](https://github.com/jay19240/SWGPU) - シンプルなWebGPUゲームエンジン。
- [React Native WebGPU](https://github.com/wcandillon/react-native-webgpu) - Dawnを使うReact Native向けWebGPU実装。
- [TypeGPU](https://typegpu.com/) - 型推論による型安全性を備え、GPUバッファーの作成・書き込み・読み取りを行うTypeScript API。
- [WESL](https://github.com/wgsl-tooling-wg/wesl-spec/blob/main/README.md) - `import`や`@if`などを提供するWGSL拡張。
- [WebGpGpu.ts](https://github.com/eddow/webgpgpu) - ブラウザーやサーバー側からコンピュートシェーダーへアクセスでき、習得の負担を抑えるWebGPUフレームワーク。
- [spark.js](https://ludicon.com/sparkjs/) - WebGPU向けのリアルタイムGPUテクスチャ圧縮ライブラリ。
- [zephyr3d](https://zephyr3d.org/) - WebGPU/WebGLに対応するTypeScriptベースの3Dレンダリングエンジン。
- [ChartGPU](https://github.com/chartgpu/chartgpu) - WebGPUを基盤にした高性能グラフライブラリ。原文では100万以上のデータ点を60fpsで処理すると記載。

## <a id="debuggers-and-profilers"></a>デバッガーとプロファイラー
- [webgpu-inspector](https://github.com/brendan-duncan/webgpu_inspector) - WebGPUの検査用デバッガー。
- [webgpu-profiler](https://crates.io/crates/wgpu-profiler) - RustとWebGPU向けのプロファイラー。

原文では、以下はしばらく更新されていないと記載されています。
- [webgpu-devtools](https://github.com/takahirox/webgpu-devtools) - ウェブブラウザー拡張機能。
- [webgpu-debugger](https://github.com/webgpu/webgpu-debugger) - 初期段階のデバッガー。

## <a id="gists"></a>Gist

- [2D](https://gist.github.com/munrocket/30e645d584b5300ee69295e54674b3e4)と[3D SDFプリミティブ](https://gist.github.com/munrocket/f247155fc22ecb8edf974d905c677de1) - WGSLによる符号付き距離場のプリミティブ。著者：[@munrocket](https://github.com/munrocket)。

## <a id="demos"></a>デモ

原文では、デモはChrome/Edgeで最もよく動作すると記載されています。

- [WebGPU Samples](https://webgpu.github.io/webgpu-samples/) - WebGPU APIの使い方を示すサンプルとデモ集 - [リポジトリ](https://github.com/webgpu/webgpu-samples)
- [WebGPU first-person exploration of the Sponza Palace](https://toji.github.io/webgpu-test/) - WebGL、WebGL 2.0、WebGPUのシーンレンダリング比較。著者：Brandon Jones - [リポジトリ](https://github.com/toji/webgpu-test)
- [WebGPU Clustered Shading](https://toji.github.io/webgpu-clustered-shading/) - 著者：Brandon Jones - [リポジトリ](https://github.com/toji/webgpu-clustered-shading)
- [WebGPU Metaballs](https://toji.github.io/webgpu-metaballs/) - 著者：Brandon Jones - [リポジトリ](https://github.com/toji/webgpu-metaballs)
- [WebGPU External Texture Test](https://toji.github.io/webgpu-external-test/) - 著者：Brandon Jones - [リポジトリ](https://github.com/toji/webgpu-external-test)
- [Online WGSL Editor](https://takahirox.github.io/online-wgsl-editor/) - 著者：[Takahiro](https://github.com/takahirox) - [リポジトリ](https://github.com/takahirox/online-wgsl-editor)
- [Three.js WebGPU examples](https://threejs.org/examples/?q=webgpu) - WebGPUレンダラーを使うthree.jsの実例集 - [リポジトリ](https://github.com/mrdoob/three.js/tree/dev/examples#:~:text=webgpu_compute.html)
- [Spookyball](https://spookyball.com) - ハロウィーンをテーマにしたオープンソースのBreakoutクローン。著者：Brandon Jones - [リポジトリ](https://github.com/toji/spookyball)
- [Babylon.js Playground](https://playground.babylonjs.com/) - 著者：[Babylon.js](https://www.babylonjs.com/) （右上で`WebGPU`を選択）。
- [PlayCanvas WebGPU Demos](https://playcanvas.vercel.app/) - 著者：[PlayCanvas](https://playcanvas.com/) （右上で`WebGPU`を選択）。
- [Project Prismatic](https://play.projectprismatic.com) - Stratton StudiosによるUnityを使ったWebGPU体験・デモ。
- [WebGPU Particles](https://hsimpson.github.io/webgpu-particles/) - パーティクルの計算とレンダリング。著者：[Daniel Toplak](https://github.com/hsimpson) - [リポジトリ](https://github.com/hsimpson/webgpu-particles)
- [An online WebGPU calculator](https://laskin.live) - WebRTC経由で離れた場所にいる友人のGPU上でのみ使えるオンライン計算機 - [リポジトリ](https://github.com/periferia-labs/laskin.live)
- [WebGPU Examples](https://tsherif.github.io/webgpu-examples/) - WebGPUで実装したレンダリングアルゴリズムの実例。著者：[Tarek Sherif](https://github.com/tsherif) - [リポジトリ](https://github.com/tsherif/webgpu-examples)
- [wgpu examples](https://wgpu.rs/examples/) - [wgpu](https://wgpu.rs)ライブラリの公式実例集 - [リポジトリ](https://github.com/gfx-rs/wgpu/tree/trunk/examples)
- [Forest WebGPU](https://www.babylonjs.com/Demos/WebGPU/forestWebGPU.html) - Babylon.jsで構築したシーン。
- [WebGPU-Playground](https://06wj.github.io/WebGPU-Playground/) - WebGPUの実験環境。著者：[@06wj](https://github.com/06wj) - [リポジトリ](https://github.com/06wj/WebGPU-Playground)
- [Dawn RT](https://github.com/maierfelix/dawn-ray-tracing) - レイトレーシング拡張を備えたdawnのフォーク。著者：Felix Maier。
- [wgpu-load-test](https://github.com/MacTuitui/wgpu-load-test) - wgpuの負荷テスト。著者：[Alexis Andre](https://github.com/MacTuitui)。
- [WebGPU Compute 101 Demo](https://hello-webgpu-compute.glitch.me) - コンピュートシェーダーを使う簡単な実例。 [ソースコード](https://glitch.com/edit/#!/hello-webgpu-compute)
- [WebGPU 2D Fluid Simulation](https://kishimisu.github.io/WebGPU-Fluid-Simulation/) - 論文「Real-Time Fluid Dynamics for Games」の実装。著者：[kishimisu](https://github.com/kishimisu) - [リポジトリ](https://github.com/kishimisu/WebGPU-Fluid-Simulation)
- [WebGPU-Lab](https://s-macke.github.io/WebGPU-Lab/) - コンピュートシェーダーを中心とするデモと実験。著者：[Sebastian Macke](https://github.com/s-macke) - [リポジトリ](https://github.com/s-macke/WebGPU-Lab)
- [WebGPU Live Demo Editor](https://www.wgsl.dev/editor) - WebGPUの実例集。著者：[Hepp Maccoy](https://github.com/hepp) - [リポジトリ](https://github.com/hepp/webgpu-examples)
- [Thimbleberry Image Transform Demo](https://thimbleberry.dev) - Thimbleberryを使って構築した画像処理アプリ。著者：[mighdoll](https://vis.social/@mighdoll) - [リポジトリ](https://github.com/mighdoll/thimbleberry/tree/main/image-demo)
- [Shadowray Playground](https://shadowray.gl) - コンピュートシェーダーでレイトレーシング機能を実装したWebGPU API拡張、WebRTXのデモ。著者：[codedhead](https://github.com/codedhead)。
- [Web Stable Diffusion](https://mlc.ai/web-stable-diffusion/#text-to-image-generation-demo) - 画像生成AIモデルの実装。開発：CMU、OctoML、Catalystほか - [リポジトリ](https://github.com/mlc-ai/web-stable-diffusion)
- [WebLLM](https://mlc.ai/web-llm/) - LLM推論エンジン。開発：CMU、ワシントン大学、OctoMLほか - [リポジトリ](https://github.com/mlc-ai/web-llm)
- [Shader Graph WGSL](https://deepkolos.github.io/shader-graph-wgsl/) - ノードベースのシェーダーエディター。著者：[deepkolos](https://github.com/deepkolos) - [リポジトリ](https://github.com/deepkolos/shader-graph-wgsl)
- [WebGPU Memory Model Testing](https://gpuharbor.ucsc.edu/webgpu-mem-testing/) - メモリモデルのテストスイート。著者：[Reese Levine](https://github.com/reeselevine) ほか、カリフォルニア大学サンタクルーズ校 - [リポジトリ](https://github.com/reeselevine/webgpu-litmus)
- [Marching Cubes WebGPU](https://conorpo.github.io/marching-cubes-webgpu/) - Marching cubesの実装。著者：[Conor O'Malley](https://github.com/conorpo) - [リポジトリ](https://github.com/conorpo/marching-cubes-webgpu)
- [WebGPU Path Tracing](https://iamferm.in/webgpu-path-tracing/) - WebGPUコンピュートシェーダーを使うパストレーサー。著者：[Fermin Lozano](https://github.com/ferminLR) - [リポジトリ](https://github.com/ferminLR/webgpu-path-tracing)
- [WebGPU real-time ray tracer](https://github.com/C-none/Web-RTRT/) - ReSTIRアルゴリズムを実装したリアルタイムレイトレーサー - [リポジトリ](https://github.com/C-none/Web-RTRT)
- [Real-Time GPU Texture Compression Demo](https://ludicon.com/sparkjs/gltf-demo/) - リアルタイムテクスチャ圧縮の利点を示すデモ。KTX2テクスチャを使うモデルと、AVIF + Sparkを使うモデルを比較。

## <a id="videos"></a>動画

- [From WebGL to WebGPU: A perspective from Babylon js by David Catuhe](https://www.youtube.com/watch?v=A2FxeEl4nWw)
- [Next-Generation 3D Graphics on the Web (Google I/O 2019)](https://www.youtube.com/watch?v=K2JzIUIHIhc)
- [WebGL to WebGPU （再生リスト）](https://www.youtube.com/playlist?list=PLMinhigDWz6f5Nm_GYGREYnaf9mzoNdjX) - 著者：[SketchpunkLabs](https://www.youtube.com/c/SketchpunkLabs)
- [WebGPU （再生リスト）](https://www.youtube.com/playlist?list=PLnTPVrg9-a1Ou2KXUniDr1HC7qgL2JD2x) - 著者：[Genka](https://www.youtube.com/channel/UCBTwKzJg-BR56tKWO5CT7XA)
- [WebGPU Graphics Programming Step-by-Step （再生リスト）](https://www.youtube.com/playlist?list=PL_UrKDEhALdKh0118flOjuAnVIGKFUJXN) - 著者：[Practical Programming with Dr. Xu](https://www.youtube.com/channel/UCg14XfqXim0vpgabU3T7tRg)
- [Introducing WebGPU: Unlocking modern GPU access for JavaScript](https://www.youtube.com/watch?v=m6T-Mq1BPXg) - 著者：Google。
- [A proper look at WebGPU for native games](https://www.youtube.com/watch?v=DdMl4E7xQEY) - 著者：[Madrigal](https://www.madrigalgames.com/)

## <a id="presentations"></a>プレゼンテーション

- [Building WebGPU with Rust](https://fosdem.org/2020/schedule/event/rust_webgpu/) - MozillaのDzmitry Malyshauによる発表。

## <a id="community"></a>コミュニティ

- [GPU for the web community group](https://www.w3.org/community/gpu/) - W3Cのコミュニティ。
- [Public GPU](https://lists.w3.org/Archives/Public/public-gpu/) - W3Cのメーリングリスト。
- [Matrix WebGPU](https://matrix.to/#/#WebGPU:matrix.org) - 非公式チャンネル。
- [YC Point of WebGPU on native](https://news.ycombinator.com/item?id=23079200) - 当該記事についての議論。

## <a id="bug-reporting"></a>バグ報告

- [Webkit](https://bugs.webkit.org/buglist.cgi?bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&component=WebGPU)
- [Firefox](https://bugzilla.mozilla.org/buglist.cgi?product=Core&component=Graphics%3A%20WebGPU)
- [Chromium](https://bugs.chromium.org/p/chromium/issues/list?q=component:Blink%3EWebGPU)
