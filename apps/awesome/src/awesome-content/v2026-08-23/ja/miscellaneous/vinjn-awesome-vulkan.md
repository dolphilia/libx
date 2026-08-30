---
title: "vinjn/awesome-vulkan"
description: "Vulkanのライブラリ、SDK、サンプル、デバッグツール、学習資料集"
licenseSource: "github-vinjn-awesome-vulkan-readme-md"
---

# Awesome Vulkan [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

<img src="https://raw.githubusercontent.com/SaschaWillems/Vulkan/master/images/vulkanlogoscene.png" alt="Vulkan demo scene" height="256px">

優れたVulkanライブラリ、デバッグツール、関連資料を厳選したリストです。[awesome-opengl](https://github.com/eug/awesome-opengl)などのAwesomeコンテンツから着想を得ています。

* **[Hardware Support](#hardware-support)**
* **[SDK](#sdk)**
* **[IHV Document](#document)**
* **[Tutorial](#tutorial)**
* **[Apps](#apps)**
* **[Samples](#samples)**
* **[Libraries](#libraries)**
* **[Bindings](#bindings)**
* **[Tools](#tools)**
* **[Books](#books)**
* **[Papers](#papers)**
* **[Khronos](#khronos)**
* **[Community](#community)**

<a id="hardware-support"></a>
## ハードウェア対応
*  [gpuinfo](http://vulkan.gpuinfo.org/) - サスハ・ウィルムスによるVulkanハードウェアデータベース
*  [Khronos](https://www.khronos.org/vulkan)
*  [NVIDIA](https://developer.nvidia.com/Vulkan)
    *  [Driver for Desktop](https://developer.nvidia.com/vulkan-driver)
    *  [Driver for Android](https://developer.nvidia.com/vulkan-android)
    *  [Driver for Linux for Tegra (L4T)](https://developer.nvidia.com/embedded/vulkan)
*  [AMD](http://www.amd.com/en-gb/innovations/software-technologies/technologies-gaming/vulkan)
    *  [Open-source Driver](https://github.com/GPUOpen-Drivers/AMDVLK)
*  [Imagination](https://www.imgtec.com/developers/powervr-sdk-tools/)
*  Intel
    *  [Open-source Driver](https://01.org/linuxgraphics/blogs/jekstrand/2016/open-source-vulkan-drivers-intel-hardware/)
    *  [Driver for Windows](https://software.intel.com/en-us/blogs/2016/03/14/new-intel-vulkan-beta-1540204404-graphics-driver-for-windows-78110-1540)
*  [Qualcomm](https://developer.qualcomm.com/software/adreno-gpu-sdk/gpu)
*  Arm
    *  [Mali GPU Best Practices](https://developer.arm.com/solutions/graphics/developer-guides/mali-gpu-best-practices)

<a id="sdk"></a>
## SDK
*  [For Windows & Linux](https://vulkan.lunarg.com/signin)
*  [For Android](https://developer.android.com/ndk/guides/graphics/index.html)

<a id="document"></a>
## IHVドキュメント
*  [AMD](http://gpuopen.com/tag/vulkan/)
    *  [Vulkan barriers explained](http://gpuopen.com/vulkan-barriers-explained/)
    *  [Vulkan Fast Paths](https://gpuopen.com/wp-content/uploads/2016/03/VulkanFastPaths.pdf)
    *  [Let Your Game Shine – Optimizing DirectX 12 and Vulkan Performance with AMD CodeXL	](https://gpuopen.com/wp-content/uploads/2016/03/Let_your_game_shine_optimizing_DirectX-12_and_Vulkan-performance_with_AMD_CodeXL.pdf)
    *  [D3D12 & Vulkan: Lessons Learned	 ](https://gpuopen.com/wp-content/uploads/2016/03/d3d12_vulkan_lessons_learned.pdf)
    *  [Say Hello to a New Rendering API in Town!](http://gpuopen.com/say-hello/)
    *  [Vulkan Renderpasses](http://gpuopen.com/vulkan-renderpasses/)
    *  [Performance tweets series: Barriers, fences, synchronization](http://gpuopen.com/performance-tweets-series-barriers-fences-synchronization/)
    *  [Using the Vulkan™ Validation Layers](http://gpuopen.com/using-the-vulkan-validation-layers/)
    *  [Most common mistakes in Vulkan apps](https://gpuopen.com/wp-content/uploads/2016/05/Most-common-mistakes-in-Vulkan-apps.pdf)
	*  [Vulkan Device Memory](http://gpuopen.com/vulkan-device-memory/)
*  [NVIDIA](https://developer.nvidia.com/taxonomy/term/586)
    * [Vulkan Device-Generated Commands](https://developer.nvidia.com/device-generated-commands-vulkan)
    * [Getting Vulkan Ready For VR](https://developer.nvidia.com/getting-vulkan-ready-vr)
    * [GPU-Driven Rendering](http://on-demand.gputechconf.com/gtc/2016/presentation/s6138-christoph-kubisch-pierre-boudier-gpu-driven-rendering.pdf)
    * [GDC 16 - High-performance, Low-Overhead Rendering with OpenGL and Vulkan](http://developer.download.nvidia.com/gameworks/events/GDC2016/mschott_lbishop_gl_vulkan.pdf)
    * [GDC 16 - Vulkan and NVIDIA – The Essentials](http://developer.download.nvidia.com/gameworks/events/GDC2016/Vulkan_Essentials_GDC16_tlorach.pdf)
    * [Engaging the Voyage to Vulkan](https://developer.nvidia.com/engaging-voyage-vulkan)
    * [Vulkan Shader Resource Binding](https://developer.nvidia.com/vulkan-shader-resource-binding)
    * [Vulkan Memory Management](https://developer.nvidia.com/vulkan-memory-management)
    * [OpenGL like Vulkan](https://developer.nvidia.com/opengl-vulkan)
    * [Transitioning from OpenGL to Vulkan](https://developer.nvidia.com/transitioning-opengl-vulkan)
    * [Siggraph 15 talk - Vulkan on NVIDIA GPUs](http://on-demand.gputechconf.com/siggraph/2015/presentation/SIG1501-Piers-Daniell.pdf)
*  [Arm](https://developer.arm.com/solutions/graphics/apis/vulkan)
    * [Vulkan Best Practice for Mobile Developers Tutorials](https://github.com/ARM-software/vulkan_best_practice_for_mobile_developers)
    * [Vulkan's Key Features on Arm Architecture](https://developer.arm.com/-/media/Files/pdf/graphics-and-multimedia/Vulkan%20API%20key%20features%20on%20ARM%20architecture.pdf)
    * [Porting a Graphics Engine to the Vulkan API](https://community.arm.com/groups/arm-mali-graphics/blog/2016/02/16/porting-a-graphics-engine-to-the-vulkan-api)
    * [Get Your Engine Ready for Vulkan on Mobile](https://developer.arm.com/-/media/Files/pdf/graphics-and-multimedia/Get%20Your%20Engine%20Ready%20for%20Vulkan%20on%20Mobile.pdf)
    * [Multi-Threading in Vulkan](https://community.arm.com/groups/arm-mali-graphics/blog/2016/04/19/massively-multi-thread-for-vulkan)
    * [Mali Vulkan SDK Tutorials](https://developer.arm.com/products/software/mali-sdks/vulkan) および [Slides](https://developer.arm.com/graphics/vulkan/vulkan-tutorials)
* Intel
    * [API without Secrets: Introduction to Vulkan](https://github.com/GameTechDev/IntroductionToVulkan) [[LICENSE](https://github.com/GameTechDev/IntroductionToVulkan/blob/master/license.txt)]
        * [Part 1: The Beginning](https://software.intel.com/en-us/api-without-secrets-introduction-to-vulkan-part-1)
        * [Part 2: Swap Chain](https://software.intel.com/en-us/api-without-secrets-introduction-to-vulkan-part-2)
        * [Part 3: First Triangle](https://software.intel.com/en-us/api-without-secrets-introduction-to-vulkan-part-3)
        * [Part 4: Vertex Attributes](https://software.intel.com/en-us/articles/api-without-secrets-introduction-to-vulkan-part-4)
* [Imagination](http://blog.imgtec.com/tag/vulkan)
    * [Efficient Rendering with Vulkan on PowerVR](https://imagination-technologies-cloudfront-assets.s3.amazonaws.com/idc-docs/gdc16/6_Efficient%20rendering%20with%20Vulkan%20on%20PowerVR.pdf)
    * [Migrating to Vulkan with the New PowerVR Graphics Framework](https://www.imgtec.com/webinar/migrating-to-vulkan-with-the-powervr-framework/)
    * [Migrating from OpenGLES to Vulkan](https://www.imgtec.com/downloads/download-info/migrating-from-opengl-es-to-vulkan/)
* Samsung
    * [Siggraph 2016 - Best Practices for Mobile](https://community.arm.com/cfs-file/__key/telligent-evolution-extensions-calendar-calendarfiles/00-00-00-00-05/2_2D00_mmg_2D00_siggraph2016_2D00_best_2D00_practice_2D00_andrew.pdf)
    * [Vulkan Usage Recommencation](https://developer.samsung.com/game/usage) （モバイル用）
* Epic
    * [Efficient use of Vulkan on UE4 Mobile](https://community.arm.com/cfs-file/__key/telligent-evolution-extensions-calendar-calendarfiles/00-00-00-00-05/6_2D00_mmg_2D00_siggraph2016_2D00_vulkan_2D00_smedis.pdf)
* Khronos
   * [Vulkan Guide](https://github.com/KhronosGroup/Vulkan-Guide)
* [LunarG](https://lunarg.com)
    * [Vulkan SDK](https://vulkan.lunarg.com/)
    * [Vulkan SDK Version Compatibility](https://www.lunarg.com/news-insights/white-papers/vulkan-sdk-version-compatibility/)
    * [Introducing the New Vulkan Configurator](https://www.lunarg.com/news-insights/white-papers/vulkan-validation-layers/)
    * [Unified Validation Layer for Vulkan](https://www.lunarg.com/news-insights/white-papers/unified-validation-layer-for-vulkan/)
    * [Vulkan Synchronization Validation Quick Start Guide](https://www.lunarg.com/news-insights/white-papers/vulkan-synchronization-validation-quick-start-guide/)
    * [Guide to Vulkan Synchronization Validation](https://www.lunarg.com/news-insights/white-papers/guide-to-vulkan-synchronization-validation/)
    * [Vulkan GPU-Assisted Validation](https://www.lunarg.com/news-insights/white-papers/vulkan-gpu-assisted-validation/)
    * [Automatic RelaxedPrecision Decoration and Conversion in Spirv-Opt](https://www.lunarg.com/news-insights/white-papers/automatic-relaxedprecision-decoration-and-conversion-in-spirv-opt/)
    * [SPIR-V Legalization and Size Reduction with spirv-opt](https://www.lunarg.com/news-insights/white-papers/spir-v-legalization-and-size-reduction-with-spirv-opt/)
    * [All White Papers](https://www.lunarg.com/vulkan-white-papers/)
* Community
    * [VulkanHub](https://vkdoc.net)

<a id="tutorial"></a>
## チュートリアル
*  [How to Learn Vulkan](https://www.jeremyong.com/c++/vulkan/graphics/rendering/2018/03/26/how-to-learn-vulkan.html) - Vulkanを学ぶ方法についてのメタ投稿
*  [I Am Graphics And So Can You](https://www.fasterthan.life/blog/2017/7/11/i-am-graphics-and-so-can-you-part-1) - グラフィックス分野に新規に取り組む人々向けのVulkanに関するブログ風チュートリアル
*  [Vulkan Game Engine Tutorial](https://www.youtube.com/watch?v=Y9U9IE0gVHA) - ブレドン・ゲーラのYouTubeで公開されたVulkanゲームエンジン作成シリーズチュートリアル
*  [Kohi Game Engine Series](https://www.youtube.com/watch?v=dHPuU-DJoBM&list=PLv8Ddw9K0JPg1BEO-RS-0MYs423cvLVtj) - "Vulkanゲームエンジンシリーズ、C言語とVulkanを使ってから地からゲームエンジンを作成する"
*  [Moving to Vulkan (Khronos UK May16)](https://www.khronos.org/assets/uploads/developers/library/2016-uk-chapter-moving-to-vulkan/Moving-to-Vulkan_Khronos-UK_May16.pdf)
*  [jhenriques's tutorial](http://jhenriques.net/development.html)
*  [Lunarg's tutorial](https://vulkan.lunarg.com/doc/sdk/1.0.26.0/windows/tutorial.html)
*  [Mike Bailey's Vulkan Page](http://web.engr.oregonstate.edu/~mjb/vulkan/) - 広範なVulkanコーススライドを提供。[CC BY-NC-ND 4.0]
*  [Qualcomm Video Tutorial Series](https://developer.qualcomm.com/software/adreno-gpu-sdk/tutorial-videos) - モバイルデバイス向けVulkanに重点を置いている
*  [Raw Vulkan](https://alain.xyz/blog/raw-vulkan) - Vulkanアプリケーションを地からプログラミングする方法の概要
* Siggraph
    * [An overview of next-generation graphics APIs](http://nextgenapis.realtimerendering.com/) - Vulkan、D3D12などについての解説
*  [Tutorial by Overv](https://vulkan-tutorial.com/) および [its github repository](https://github.com/Overv/VulkanTutorial)。[CC BY-SA 4.0]
*  [vulkan-sxs](https://github.com/philiptaylor/vulkan-sxs) - Vulkan APIをステップバイステップに解説し、[vulkan-sync](https://github.com/philiptaylor/vulkan-sync) - Vulkanの実行依存性要件をより正確な形で再表現。[MIT]
*  [Vulkan in 30 minutes](https://renderdoc.org/vulkan-in-30-minutes.html) - バルドゥルクによるもの
*  [Vulkan Demos and Tutorials](https://github.com/Z80Fan/VulkanDemos)。[MIT]
*  [Vulkan Guide](https://vkguide.dev)。[MIT]
*  [Vulkan Lecture Series](https://www.youtube.com/playlist?list=PLmIqTlJ6KsE1Jx5HV4sd2jOe3V1KMHHgn) - ウィーン工科大学のコンピュータグラフィックス研究ユニットのヨハネス・アンテルグゲンベーグの大学講義。Vulkanの基本および高度なテーマをカバー：Vulkanの基本、スワップチェーン、リソースとディスクリプタ、コマンドとコマンドバッファ、パイプラインと段階、リアルタイムレイトレーシング、および同期。

<a id="apps"></a>
## アプリ
*  [The Talos Principle](http://www.croteam.com/talos-principle-will-support-vulkan-first-screenshot-released/) - クローテームによるもの
*  [Dota2](https://github.com/ValveSoftware/Dota-2-Vulkan/) - ヴァルヴによるもの
*  [Basemark](https://www.basemark.com/blog/basemark-extends-its-benchmarking-lead-with-a-vulkan-performance-test/) - バスマーケットで
*  [GFXBench 5](https://kishonti.net/news_single.jsp?id=31133884) - キショントイによって。
*  [ProtoStar](https://www.unrealengine.com/blog/epic-games-unveils-protostar-at-samsung-galaxy-unpacked) - エピックが開発した、アンリアルエンジン4技術を用いた作品。
*  [DDraceNetwork](https://github.com/ddnet/ddnet/) - 協働2Dプラットフォームゲーム。オプションの [Vulkan backend](https://github.com/ddnet/ddnet/blob/master/src/engine/client/backend/vulkan/backend_vulkan.cpp)。 - [zlib](https://github.com/ddnet/ddnet/blob/master/license.txt) [website](https://ddnet.tw/)
*  [Doom](https://en.wikipedia.org/wiki/Doom_(2016_video_game)) - by id Software.
*  [vkQuake](https://github.com/Novum/vkQuake) - クエーカーSpasmに基づくVulkan版クエーカー。[GPL]
*  [vkQuake2](https://github.com/kondrak/vkQuake2) - id Softwareのクエーカー2 v3.21（Vulkanサポート）（WindowsおよびLinux）［GPL］
*  [q2vkpt](https://github.com/cschied/q2vkpt/) - リアルタイムパストラッカーVKPTがq2pro Quake 2クライアントに統合されたもの。 [gpl]
*  [Linux port of SteamVR](https://github.com/ValveSoftware/SteamVR-for-Linux) - SteamVRはVulkan APIに基づいて構築されている。
*  [3DMark](https://www.futuremark.com/pressreleases/compare-vulkan-and-directx-12-performance-with-3dmark) - 3DMark APIオーバーヘッドテスト.
*  [Q2RTX](https://github.com/NVIDIA/Q2RTX) - NVIDIAがQuake IIに実装したRTXレイトレーシング。 [[LICENSE](https://github.com/NVIDIA/Q2RTX/blob/master/license.txt)]

<a id="samples"></a>
## サンプル
*  Khronos [Vulkan samples](https://github.com/KhronosGroup/Vulkan-Samples) [[LICENSE](https://github.com/KhronosGroup/Vulkan-Samples/blob/master/LICENSE)]
*  Sascha Willems's [samples](https://github.com/SaschaWillems/Vulkan) そして [Deferred rendering of Sponza](https://github.com/SaschaWillems/VulkanSponza) と、彼の [Khronos_meetup_munich](https://www.saschawillems.de/blog/2016/04/11/khronos-chapter-munich-vulkan-slides/) についての話
*  (Incomplete) Sascha Willems's [samples port](https://github.com/jvm-graphics-labs/Vulkan) Kotlinに
*  Sascha Willems's [Vulkan-glTF-PBR](https://github.com/SaschaWillems/Vulkan-glTF-PBR) - 物理ベースレンダリングをVulkanでglTF 2.0モデルを使用して実現。 [MIT]
*  [Vulkan Best Practice for Mobile Developers Samples](https://github.com/ARM-software/vulkan_best_practice_for_mobile_developers)
*  Google
    *  [Android port of LunarG samples](https://github.com/googlesamples/vulkan-basic-samples)。
    *  [android tutorials](https://github.com/googlesamples/android-vulkan-tutorials)。
*  [nvpro-samples](https://github.com/nvpro-samples) - NVIDIA DesignWorksのサンプル。 [[LICENSE](https://github.com/nvpro-samples/gl_vk_threaded_cadscene/blob/master/LICENSE)]
    *  [gl_vk_chopper](https://github.com/nvpro-samples/gl_vk_chopper) - シンプルなVulkanレンダリング例.
    *  [gl_vk_threaded_cadscene](https://github.com/nvpro-samples/gl_vk_threaded_cadscene) - OpenGLとVulkanを、CADシーンのレンダリングにおけるさまざまな技術と [the blog](https://developer.nvidia.com/vulkan-opengl-threaded-cad-scene-sample)について比較。
    *  [gl_vk_bk3dthreaded](https://github.com/nvpro-samples/gl_vk_bk3dthreaded) - Vulkanサンプルで3Dを'worker-threads'を使用してレンダリング。
    *  [gl_vk_supersampled](https://github.com/nvpro-samples/gl_vk_supersampled) - Vulkanサンプルで高品質のスーパーサンプリングレンダリングを示す。
*  [NVIDIA GameWorks Samples](https://github.com/NVIDIAGameWorks/GraphicsSamples) - GameWorksのクロスプラットフォームグラフィックスAPIサンプル。 [[LICENSE](https://github.com/NVIDIAGameWorks/GraphicsSamples/blob/master/license.txt)]
*  [LunarG's Samples](https://github.com/LunarG/VulkanSamples)
*  [vkcube](https://github.com/krh/vkcube) - krhによる'vkcube'サンプルは、X、waylandおよびVTコンソールでのDRM/KMSに対応している。
*  [Stardust from Intel](https://github.com/GameTechDev/stardust_vulkan) - スターダストサンプルアプリケーションは、VulkanグラフィックスAPIを用いてアニメーションされた粒子の雲を効率的にレンダリングする。 [[LICENSE](https://github.com/GameTechDev/stardust_vulkan/blob/master/license.txt)]
*  [Vulkan Quake port based on QuakeSpasm](https://github.com/Novum/vkQuake)。
*  [C# Samples](https://github.com/FacticiusVir/SharpVk-Samples) - Overvのチュートリアルを[SharpVk](https://github.com/FacticiusVir/SharpVk)[MIT]に移植したもの。
*  [Vulkan-Forward-Plus-Renderer](https://github.com/WindyDarian/Vulkan-Forward-Plus-Renderer) - VFPR - a Vulkan Forward Plus Renderer. [MIT]
*  [Laugh Engine](https://github.com/jian-ru/laugh_engine) - リアルタイムPBRレンダラーのVulkan実装。
*  [tinyrenderers](https://github.com/chaoticbob/tinyrenderers) - VulkanおよびD3D12レンダラーのシングルヘッダー実装。
*  [TLVulkanRenderer](https://github.com/trungtle/TLVulkanRenderer) - リアルタイム透過性に関するマスター論文のためのシンプルなVulkanベースレンダラー。[CC BY-SA 4.0]
*  [Vulkan-Hpp Samples](https://github.com/jherico/Vulkan) - Sascha Willemsの優れたVulkanサンプルをフォークしたもので、Vulkan-Hppを使用している。
*  [SDF Font Demo](https://github.com/kocsis1david/font-demo) - Vulkanで符号距離を推定してテキストをレンダリング。[MIT]
*  [vulkantoy](https://github.com/jpystynen/vulkantoy) - Shadertoyの画像シェーダーテストアプリケーション（Vulkan版）。[MIT]
*  [GL_vs_VK](https://github.com/RippeR37/GL_vs_VK) - OpenGLとVulkanAPIのパフォーマンス比較。[MIT]
*  [Vulkan Basic Graphics Samples](https://github.com/vcoda/basic-graphics-samples) - Magmaライブラリを使用して書かれたシンプルなグラフィックスサンプルのコレクション。
*  [Simple RTX Vulkan raytracing tutorials](https://github.com/iOrange/rtxON)。[MIT]
*  [Ray Tracing In One Weekend (Vulkan RTX)](https://github.com/GPSnoopy/RayTracingInVulkan) - Peter Shirleyの『Ray Tracing in One Weekend』の書籍をVulkanおよびNVIDIAのRTX拡張を使用して実装したもの。
*  [Gears VK](https://github.com/jeffboody/gearsvk) - Gears VKは、有名な"gears"デモをVulkan/Android/Linuxに大幅に変更したポート。[MIT]
*  [Hello triangle,](https://github.com/maierfelix/VK_KHR_ray_tracing) Vulkanレイトレーシング拡張に基づくもの。[MIT]
*  [Simple Animation Blender](https://github.com/Red1C3/Simple-Animation-Blender) - Vulkanをグラフィカルバックエンド、ImGuiをGUIとして使用したリアルタイム1Dアニメーションブレンドとプレイヤー。[MIT]

<a id="libraries"></a>
## ライブラリ
* 2D
   *  [imgui](https://github.com/ocornut/imgui) - 即時モードグラフィカルユーザーインターフェース。[MIT]
   *  [Skia](https://skia.googlesource.com/skia) - Googleの2Dグラフィックスライブラリには、[Vulkan](https://skia.org/user/special/vulkan) [backend](https://github.com/google/skia/tree/master/src/gpu/vk)があり、そのクロスプラットフォーム[sample application](https://skia.org/user/sample/viewer)でのデモンストレーションが、独自の[window library](https://github.com/google/skia/tree/master/tools/viewer)によって行われている。[BSD 3-clause] [website](https://skia.org)
   *  [VKVG](https://github.com/jpbruyere/vkvg) - Vulkan 2Dグラフィックスライブラリ。APIはCairoグラフィックスライブラリと同様のパターンを採用しているが、新しい関数を提供。

* Compute
   *  [libvc](https://github.com/alexhultman/libvc) - C++用Vulkanコンピュート [[LICENSE](https://github.com/alexhultman/libvc/blob/master/LICENSE)]
   *  [Vulkan Kompute](https://github.com/axsaucedo/vulkan-kompute) - 高速かつ軽量のVulkan Computeフレームワーク。高度なGPU処理用途に最適化。[Apache License 2.0]
   *  [ncnn](https://github.com/Tencent/ncnn) - 高性能なニューラルネットワーク推論フレームワーク。VulkanベースのGPU推論を採用。[BSD 3-clause]
   *  [vuh](https://github.com/Glavnokoman/vuh) - VulkanベースのC++ GPGPU計算フレームワーク。[MIT]
   *  [VkFFT](https://github.com/DTolm/VkFFT) - 効率的なVulkan FFTライブラリ [MPL-2.0 ライセンス]

* Low Level
   *  [Vulkan Memory Allocator](https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator) - AMDから提供される簡単なVulkanメモリ割り当てライブラリ。[MIT]
      *  [VulkanMemoryAllocator-Hpp] (https://github.com/malte-v/VulkanMemoryAllocator-Hpp) - C++ Bindings for VMA, like Vulkan-HPP
   *  [Fossilize](https://github.com/Themaister/Fossilize) - さまざまな永続Vulkanオブジェクトタイプのためのシリアライズフォーマット。[MIT]
   *  [vk-bootstrap](https://github.com/charles-lunarg/vk-bootstrap) - Vulkan開発をスムーズに進めるためのC++ユーティリティライブラリ。インスタンス、物理デバイス、デバイス、スワップチェーンの自動生成を実現。[MIT]
   *  [Google's vulkan-cpp-library](https://github.com/google/vulkan-cpp-library) - C++11を用いたVulkan抽象化ライブラリ。メモリ、リソース管理、型およびスレッドセーフ性、システム独立性を提供。[Apache]
   *  [FrameGraph](https://github.com/azhirnov/FrameGraph) - フレームをタスクグラフとして表現するVulkan抽象化レイヤー。[BSD 2-clause]
   *  [V-EZ](https://github.com/GPUOpen-LibrariesAndSDKs/V-EZ) - プロフェッショナルワーキングステーション向けのVulkan API向け軽量ミドルウェアレイヤー。[MIT]
   *  [Vookoo](https://github.com/andy-thomason/Vookoo) - Vookooは、Vulkanグラフィックスデータ構造の構築および更新を支援する、依存関係のないユーティリティのセット。[MIT]
   *  [vpp](https://github.com/nyorain/vpp) - パフォーマンスに焦点を当て、シンプルなインターフェースを提供する現代C++ベースのVulkan抽象化。[MIT]
   *  [VulkanSceneGraph](https://github.com/vsg-dev) - Vulkan/C++17シーングラフプロジェクト。[OpenSceneGraph](http://www.openscenegraph.org)の継承プロジェクト。
   *  [Vulkan-WSIWindow](https://github.com/renelindsay/Vulkan-WSIWindow) - マルチプラットフォームライブラリ。Vulkanウィンドウを作成し、入力イベントを処理。[Apache License 2.0]
   *  [Screen 13](https://github.com/attackgoat/screen-13) - Rust向けに使いやすいVulkanレンダグラフ。[MIT]

* Frameworks, Engines, Higher Level Rendering
   *  [Acid](https://github.com/Equilibrium-Games/Acid) - 高速なC++17 Vulkanゲームエンジン。[MIT]
   *  [AMD's Anvil](https://github.com/GPUOpen-LibrariesAndSDKs/Anvil) - マルチプラットフォーム向けのVulkanフレームワーク。[[LICENSE](https://github.com/GPUOpen-LibrariesAndSDKs/Anvil/blob/master/LICENSE.txt)]
   *  [Auto-Vk](https://github.com/cg-tuwien/Auto-Vk) - Vulkan-Hpp上に構築された、現代C++向けのVulkan便利かつ生産性の高いレイヤー。TU Wienのコンピュータグラフィックス研究部門による開発。[MIT]
   *  [Auto-Vk-Toolkit](https://github.com/cg-tuwien/Auto-Vk-Toolkit) - [Auto-Vk](https://github.com/cg-tuwien/Auto-Vk)を基盤としたC++フレームワーク。急速なプロトタイピング、研究、教育に適した開発。TU Wienのコンピュータグラフィックス研究部門による開発。[MIT（フレームワークコード）]
   *  [bgfx](https://github.com/bkaradzic/bgfx#bgfx---cross-platform-rendering-library) - クロスプラットフォーム、グラフィックスAPIに依存しない、「自社エンジン/フレームワークをもって来」スタイルのレンダリングライブラリ。 [[BSD-2-clause](https://github.com/bkaradzic/bgfx/blob/master/LICENSE)]
   *  [bsf](https://github.com/GameFoundry/bsf) - リアルタイムグラフィックアプリケーション開発用の現代C++14ライブラリ。[MIT]
   *  [Cinder](https://github.com/cinder/Cinder) および [the story](https://libcinder.org/notes/vulkan) [behind](https://forum.libcinder.org/#Topic/23286000002614007)。[BSD]
   *  [DemoFramework](https://github.com/NXPmicro/gtec-demo-framework) - NXP GTEC C++11クロスプラットフォームデモフレームワーク。Vulkan、OpenGL ES、OpenVX、OpenCL、OpenVGおよびOpenCV向けの多くのサンプルを含む。 [[BSD-3-clause](https://github.com/NXPmicro/gtec-demo-framework/blob/master/License.md)]
   *  [Diligent Engine](https://github.com/DiligentGraphics/DiligentEngine) - OpenGL/GLES、Direct3D11/12およびVulkanをサポートする現代的なクロスプラットフォーム低レベルグラフィックスライブラリ。[Apache License 2.0]
   *  [Falcor](https://github.com/NVIDIAGameWorks/Falcor) - NVIDIAによるリアルタイムレンダリングフレームワーク。主にDX12をサポートし、Vulkanについては実験的サポートを提供。[BSD 3-clause]
   *  [glfw](https://github.com/glfw/glfw) および [the guide](http://www.glfw.org/docs/3.2/vulkan.html)。 [[LICENSE](https://github.com/glfw/glfw/blob/master/LICENSE.md)]
   *  [Intrinsic Engine](https://github.com/begla/Intrinsic) - IntrinsicはVulkanベースのクロスプラットフォームグラフィックスおよびゲームエンジン。[Apache License 2.0]
   *  [Introductory Vulkan sample by GPUOpen](https://github.com/GPUOpen-LibrariesAndSDKs/HelloVulkan)。[MIT]
   *  [liblava](https://github.com/liblava/liblava) - 現代的なC++で構成された使いやすいフレームワーク。[MIT]
   *  [Logi](https://github.com/UL-FRI-LGM/Logi) - 軽量なオブジェクト指向のVulkan抽象化フレームワーク。[BSD 2-clause]
   *  [Lugdunum](https://github.com/Lugdunum3D/Lugdunum) - Vulkanと現代的なC++14を用いた現代的なクロスプラットフォーム3Dレンダリングエンジン。[MIT]
   *  [Nabla](https://github.com/Devsh-Graphics-Programming/Nabla) - Vulkan、OptiXおよびCUDAの相互操作を可能にするモジュラーレンダリングライブラリおよびフレームワーク（PC/Linux/Android対応）。[Apache License 2.0]
   *  [openFrameworks](https://github.com/openframeworks-vk/openFrameworks) - 最も有名なC++クリエイティブコーディングフレームワーク。[MIT]
   *  [PowerVR SDK](https://github.com/powervr-graphics/Native_SDK) - VulkanおよびGLES開発を加速するC++クロスプラットフォーム3DグラフィックスSDK。 [[LICENSE](https://github.com/powervr-graphics/Native_SDK/blob/4.1/LICENSE_POWERVR_SDK.txt)]
   *  [Pumex](https://github.com/pumexx/pumex) - クロスプラットフォームVulkanレンダラー。フレームグラフとシンプルなシーングラフを実装。複数の表面に同時にレンダリング可能。[MIT]
   *  [SDL](https://discourse.libsdl.org/t/sdl-2-0-6-released/23109) - SDL_vulkan.hにクロスプラットフォームVulkanグラフィックスサポートを追加。[zlib]
   *  [small3d](https://www.gamedev.net/projects/515-small3d/), ティニーVulkanベースのC++クロスプラットフォームゲーム開発フレームワーク [BSD 3-clause]
   *  [Spectrum](https://github.com/mwalczyk/spectrum_core) - Vulkanを中心とした開発中フレームワークおよび抽象化層。
   *  [Tephra](https://github.com/Dolkar/Tephra) - 現代的なC++17グラフィックスおよびコンピュートライブラリ。VulkanとOpenGLのような高度なAPIの間のギャップを埋める。[MIT]
   *  [The-Forge](https://github.com/ConfettiFX/The-Forge) - DirectX 12、Vulkan、macOS Metal 2 のレンダリングフレームワーク。[Apache License 2.0]
   *  [VKFS](https://github.com/MHDtA-dev/VKFS) - クロスプラットフォームで使いやすいC++フレームワーク。Vulkanの初期化を迅速に行い、準備済み環境を提供。基本的なVulkanオブジェクトに対する高度な抽象化を提供。
   *  [Vulkan Launchpad](https://github.com/cg-tuwien/VulkanLaunchpad) - Windows、macOS、Linux向けのVulkanフレームワーク。特にVulkanの初心者に適しており、ウィーン大学のコンピュータグラフィックス研究ユニットで使用。[MIT]
       * [Vulkan Launchpad Starter](https://github.com/cg-tuwien/VulkanLaunchpadStarter) - 追加機能とアセットを含むスタートテンプレート。[[LICENSE]](https://github.com/cg-tuwien/VulkanLaunchpadStarter/blob/main/LICENSE)

* Other API Interop and Implementations
   *  [visor](https://github.com/baldurk/visor) - Vulkan Ignoble Software レンダラ。[MIT]
   *  [VulkanOnD3D12](https://github.com/Chabloom/VulkanOnD3D12) - D3D12用のVulkan API。[Apache License 2.0]
   *  [rostkatze](https://github.com/msiglreith/rostkatze) - D3D12の上に構築されたVulkanのC++実装 🐈[Apache License 2.0]
   *  [VK9](https://github.com/disks86/VK9) - Vulkanを使用したDirect3D 9互換層
   *  [VUDA](https://github.com/jgbit/vuda) - ヘッダーのみのライブラリで、CUDA Runtime APIインターフェースを提供。[MIT]
   *  [clspv](https://github.com/google/clspv) - OpenCL Cの一部をVulkanコンピュートシェーダに変換するプロトタイプコンパイラ。[Apache License 2.0]
   *  [MoltenVK](https://github.com/KhronosGroup/MoltenVK/) - iOSおよびmacOS上でVulkanを実行。[Apache-2.0]
   *  [Zink](https://gitlab.freedesktop.org/kusma/mesa/tree/zink) - Vulkanの上に構築されたOpenGL実装、Mesaプロジェクトの一部。[MIT]
   *  [glo / OpenGL Overload](https://github.com/g-truc/glo) - Vulkanの上に構築されたOpenGL実装。
   *  [gfx-portability](https://github.com/gfx-rs/portability) - MetalおよびD3D12向けのVulkanのポータビリティ実装、[gfx-rs](https://github.com/gfx-rs/gfx/)に基づく。

* Raytracing
   *  [Quartz](https://github.com/Nadrin/Quartz) - 物理ベースのVulkan RTXパストレイサーおよび宣言型ES7のようなシーン記述言語。[LGPL-3.0]

* Scientific
   *  [datoviz](https://github.com/datoviz/datoviz) - 高パフォーマンスGPUによるインタラクティブな科学データ可視化（Vulkanベース）。[MIT]
   *  [iMSTK](https://gitlab.kitware.com/iMSTK/iMSTK) - VulkanおよびVTKバックエンドを用いた外科シミュレーションの構築に用いるC++ツールキット。[Apache License 2.0]

* Shaders
   *  [glslang](https://github.com/KhronosGroup/glslang) - glslをspirvにコンパイルするためのライブラリ [BSD 3-Clause]
   *  [SPIRV-Cross](https://github.com/KhronosGroup/SPIRV-Cross) - spirvのリフレクションを実現し、Vulkanパイプラインレイアウトの作成を簡易化するライブラリ [Apache-2.0 ライセンス]

* Outdated ⚠️
   *  [VkHLF](https://github.com/nvpro-pipeline/VkHLF) - Vulkanのハイレベルフレームワーク。[[LICENSE]](https://github.com/nvpro-pipeline/VkHLF/blob/master/LICENSE.txt)

<a id="bindings"></a>
## バインディング
*  [ash](https://github.com/MaikKlein/ash) - ルスト向けのヴァルカンバインディング。[MIT]
*  [gfx-rs](https://github.com/gfx-rs/gfx) - ルスト向けの低オーバーヘッドヴァルカン類のGPUAPI。[Apache License 2.0]
*  [libvulkan.lua](https://github.com/CapsAdmin/ffibuild/blob/master/vulkan/vulkan.lua) - ルアーバインディングによるヴァルカン。
*  [dvulkan](https://github.com/ColonelThirtyTwo/dvulkan) - 自動生成されたDバインディングによるヴァルカン。
*  [ErupteD](https://github.com/ParticlePeter/ErupteD) - 別の自動生成されたDバインディングによるヴァルカン。
*  [flextGL](https://github.com/mosra/flextgl) - 最小限のヴァルカンヘッダー/ローダー生成器および [the blog post](http://blog.magnum.graphics/hacking/simple-efficient-vulkan-loading-with-flextgl/) について。
*  [Silk.NET](https://github.com/dotnet/Silk.NET) - C#向けのヴァルカンおよびその他のバインディング。[MIT]
*  [vulkan](https://github.com/expipiplus1/vulkan) - ハスケル向けのヴァルカンおよびヴァルカンメモリアロケータバインディング。[BSD-3-Clause]
*  [nvk](https://github.com/maierfelix/nvk) - JavaScript向けのヴァルカンバインディング。[MIT]
*  [racket-vulkan](https://github.com/zyrolasting/racket-vulkan) - ラケット向けのヴァルカンバインディングおよび [detailed implementation notes](https://sagegerard.com/racket-vulkan-notes-index.html)。[MIT]
*  [Vulkan-hpp](https://github.com/KhronosGroup/Vulkan-Hpp) NVIDIAから発展したオープンソースヴァルカンC++APIおよび [the blog](https://developer.nvidia.com/open-source-vulkan-c-api) について。
*  [VulkanSharp](https://github.com/mono/VulkanSharp) - C#向けのヴァルカンバインディング。[MIT]
*  [Vulkano](https://github.com/vulkano-rs/vulkano) - 安全かつ豊かなルストによるヴァルカンAPIのラッパー。[MIT]
*  [LWJGL](https://www.lwjgl.org/) - ライトウェイトなJavaゲームライブラリ3にはヴァルカンバインディングがある。[BSD]
*  [SharpVk](https://github.com/FacticiusVir/SharpVk) - Linq-to-SPIR-Vおよび [NuGet package](https://www.nuget.org/packages/SharpVk) を用いたC#向けのヴァルカンバインディング。[MIT]
*  [vulkan](https://github.com/realitix/vulkan) - CFFIで生成された究極のPythonバインディング。[Apache Licence 2.0]
*  [vulkan-go](https://github.com/vulkan-go/vulkan) - Go向けのヴァルカンバインディング。[MIT]
*  [PasVulkan](https://github.com/BeRo1985/pasvulkan) - ヴァルカンバインディングおよびオブジェクトパascal向けのハイレベルラッパーライブラリ。[Zlib]
*  [vulkan-zig](https://github.com/Snektron/vulkan-zig) - Zig向けのヴァルカンバインディング生成器。[MIT]
*  [VK²](https://github.com/kotlin-graphics/vkk)Kotlinによるヴァルカンラッパー：コードの表現力と安全性がグラフィックパワーアップ。[Apache License 2.0]
*  [Vortice.Vulkan](https://github.com/amerkoleci/Vortice.Vulkan) - .NET Standard 2.0 および .NET5 C# バインディング [MIT]
*  [Raw Node.js Vulkan API](https://github.com/hydra2s/node-vulkan-api) - Node.JS 用の新しい Vulkan バインディング。LWJGL-3 または NVK に類似。
*  [Deno Vulkan](https://github.com/deno-windowing/vulkan) - Deno 用の Vulkan API バインディング。[Apache ライセンス 2.0]

<a id="tools"></a>
## ツール
*  [Nsight™ Visual Studio Edition 5.2+](https://developer.nvidia.com/nvidia-nsight-visual-studio-edition)。
*  [LoaderAndValidationLayers](https://github.com/KhronosGroup/Vulkan-LoaderAndValidationLayers) - KhronosGroup によるもの。[Apache ライセンス 2.0]
*  [renderdoc](https://github.com/baldurk/renderdoc) - baldurk による、独立したグラフィックスデバッグツール。[MIT]
    * [RDCtoVkCpp](https://github.com/azhirnov/RDCtoVkCpp) - RenderDoc の Vulkan キャプチャをコンパイル可能かつ実行可能な C++ コードに変換。[MIT]
*  [VulkanTools](https://github.com/LunarG/VulkanTools) - LunarG のツール（レイヤーおよび設定ツール）。[Apache ライセンス 2.0]
*  [VKtracer](https://www.vktracer.com) - Vulkan 用のユニバーサルかつ使いやすいプロファイラー。
*  [CodeXL](https://github.com/GPUOpen-Tools/CodeXL) - CodeXL がオープンソース化。[MIT]
*  [Qualcomm Adreno GPU Tools](https://developer.qualcomm.com/software/adreno-gpu-sdk/tools) - サンプル、Adreno 推奨レイヤー、Adreno GPU 用のベストプラクティスドキュメント。
*  [Qualcomm Snapdragon Profiler](https://developer.qualcomm.com/software/snapdragon-profiler) - Adreno GPU 用の Vulkan イベント記録およびフレームキャプチャを含む。
*  [Arm Mobile Studio](https://www.arm.com/products/development-tools/graphics/arm-mobile-studio) - Arm Graphics Analyzer を含み、グラフィックスパフォーマンスの問題を簡単にトレース可能であり、Arm Streamline パフォーマンスアナライザーを含み、システム全体のパフォーマンスを把握し、CPU および GPU のボトルネックを迅速に特定できる。
*  [Open Capture and Analytics Tool (OCAT)](https://github.com/GPUOpen-Tools/OCAT) - D3D11、D3D12、および Vulkan 用の FPS オーバーレイとパフォーマンス測定を提供。[MIT]
*  [gapid](https://github.com/google/gapid) - グラフィックスAPIデバッガー。Android OpenGL ES および Vulkan アプリケーションのトレースと再実行が可能。[Apache License 2.0]
*  [Arm - PerfDoc](https://github.com/ARM-software/perfdoc) - Mali アプリケーション開発ベストプラクティスドキュメントに対するバリデーションレイヤー。[MIT]
*  [glsl_trace](https://github.com/azhirnov/glsl_trace) - Vulkan および OpenGL 用のシェーダデバッグとプロファイリングライブラリ。[MIT]
*  [MangoHud](https://github.com/flightlessmango/MangoHud) - Vulkan および OpenGL 用の FPS、温度、CPU/GPU ロードをモニタリングするオーバーレイ。[MIT]

<a id="books"></a>
## 書籍
* [Introduction to Computer Graphics and the Vulkan API](https://www.amazon.com/Introduction-Computer-Graphics-Vulkan-API/dp/1548616176) **Kenwright** による — Vulkan API を用いて、基礎から実践的にコンピュータグラフィックスの興味深いテーマに導入する。
* [Learning Vulkan](https://www.amazon.com/Learning-Vulkan-Parminder-Singh/dp/1786469804) - **Parminder Singh** による — よく理解できる例を用いて、Vulkan API およびそのプログラミング技術に着手する。
  * [Book's Examples](https://github.com/PacktPublishing/Learning-Vulkan)
* [Vulkan Cookbook](https://www.amazon.com/Vulkan-Cookbook-Pawel-Lapinski/dp/1786468158)- **Pawel Lapinski** による — Vulkan API を最大限に活用するための幅広いグラフィックスプログラミングおよびGPU計算手法を探索。
  * [Book's Examples](https://github.com/PacktPublishing/Vulkan-Cookbook)
* [Vulkan Programming Guide](https://www.amazon.com/Vulkan-Programming-Guide-Official-Learning/dp/0134464540) - **Graham Sellers** および **John Kessenich** による - 多くの分野における強力な3D開発技術を紹介します。
* [Mastering Graphics Programming with Vulkan](https://www.amazon.com/Mastering-Graphics-Programming-Vulkan-state/dp/1803244798/ref=sr_1_1?keywords=mastering+graphics+programming+with+vulkan&qid=1678290788&sprefix=mastering+graphics+%2Caps%2C255&sr=8-1) - **マルコ・カストリナ**と**ガブリエル・サソネ**が、初原理から最先端技術までを経て構築した現代的なレンダリングエンジンを構築する。

<a id="papers"></a>
## 論文
*  [The Road to Vulkan: Teaching Modern Low-Level APIs in Introductory Graphics Courses](https://www.cg.tuwien.ac.at/research/publications/2022/unterguggenberger-2022-vulkan) **ヨハネス・アンテルグゲンベーカー**、**ベルナルド・ケルブ**、**ミハエル・ウィマー**による、Eurographics 2022 - 教育論文
    *  [論文への直接リンク](https://www.cg.tuwien.ac.at/research/publications/2022/unterguggenberger-2022-vulkan/unterguggenberger-2022-vulkan-paper.pdf)。
    *  [YouTube](https://youtu.be/ZG0ct4V6c0k).

<a id="khronos"></a>
## Khronos
*  Specification
    *  Vulkan 1.0 Core API ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.0/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.0/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.0/html/vkspec.html))
    *  Vulkan 1.0 Core API + Khronos-defined Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.0-wsi_extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.0-wsi_extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.0-wsi_extensions/html/vkspec.html))
    *  Vulkan 1.0 Core API + all registered Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.0-extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.0-extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.0-extensions/html/vkspec.html))
    *  Vulkan 1.1 Core API ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.1/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.1/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.1/html/vkspec.html))
    *  Vulkan 1.1 Core API + Khronos-defined Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.1-khr-extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.1-khr-extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.1-khr-extensions/html/vkspec.html))
    *  Vulkan 1.1 Core API + all registered Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.1-extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.1-extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.1-extensions/html/vkspec.html))
    *  Vulkan 1.2 Core API ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.2/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.2/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.2/html/vkspec.html))
    *  Vulkan 1.2 Core API + Khronos-defined Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.2-khr-extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.2-khr-extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.2-khr-extensions/html/vkspec.html))
    *  Vulkan 1.2 Core API + all registered Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.2-extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.2-extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.2-extensions/html/vkspec.html))
    *  Vulkan 1.3 Core API ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.3/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.3/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.3/html/vkspec.html))
    *  Vulkan 1.3 Core API + Khronos-defined Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.3-khr-extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.3-khr-extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.3-khr-extensions/html/vkspec.html))
    *  Vulkan 1.3 Core API + all registered Extensions ([Chunked HTML](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/index.html)) ([PDF](https://registry.khronos.org/vulkan/specs/1.3-extensions/pdf/vkspec.pdf)) ([Single-file HTML](https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html))
*  Quick Reference Sheets
    *  [Vulkan 1.0 Quick Reference Sheets](https://www.khronos.org/registry/vulkan/specs/1.0/refguide/Vulkan-1.0-web.pdf)
    *  [Vulkan 1.1 Quick Reference Sheets](https://www.khronos.org/registry/vulkan/specs/1.1/refguide/Vulkan-1.1-web.pdf)
*  [Conformance Tests (CTS)](https://github.com/KhronosGroup/Vulkan-CTS)
*  Conferences and Presentations
    *  [GDC 2016 Presentations](https://www.khronos.org/developers/library/2016-gdc)
    *  [2016 UK Chapter: Moving to Vulkan](https://www.khronos.org/developers/library/2016-uk-chapter-moving-to-vulkan)
    *  [SIGGRAPH 2016 BOF - Vulkan](https://www.youtube.com/watch?v=CsHMiEQgrLA)
    *  [SIGGRPAH 2016 Best Practices Roundtable](https://www.youtube.com/watch?v=owuJRPKIUAg)
    *  [2016 Vulkan DevDay UK](https://www.khronos.org/developers/library/2016-vulkan-devday-uk)
    *  [2016 Vulkan DevDay Seoul](https://www.khronos.org/developers/library/2016-Vulkan-DevU-Seoul)
    *  [2017 Vulkan DevU Vancouver](https://www.khronos.org/developers/library/2017-vulkan-devu-vancouver)
    *  [2017 Vulkan Loader Webinar](https://www.khronos.org/developers/library/2017-vulkan-loader-webinar)
    *  [SIGGRAPH 2017 BOF - Vulkan](https://www.youtube.com/watch?v=Nx0u-9ZwrmQ)
    *  [2018 Vulkan Montreal Dev Day](https://www.khronos.org/developers/library/2018-vulkan-montreal-dev-day)
    *  [2018 Vulkanised!](https://www.khronos.org/developers/library/2018-vulkanised)
    *  [SIGGRAPH 2018 BOF - Vulkan](https://www.youtube.com/watch?v=FCAM-3aAzXg&t=18350s)

<a id="community"></a>
## コミュニティ
*  [Freenode IRC](http://webchat.freenode.net/?channels=Vulkan)
*  [Google Plus](https://plus.google.com/communities/108983304183191634377)
*  [Khronos Forum](https://forums.khronos.org/forumdisplay.php/114-Vulkan)
*  [Reddit](https://www.reddit.com/r/vulkan/)
*  [Stack Overflow](http://stackoverflow.com/questions/tagged/vulkan)
*  [Discord](https://discord.com/invite/tFdvbEj)

<a id="related-lists"></a>
## 関連リスト
*  [awesome](https://github.com/sindresorhus/awesome) - 素晴らしいリストの厳選リスト。
*  [awesome-opengl](https://github.com/eug/awesome-opengl) - 素晴らしいOpenGLライブラリ、デバッガーやリソースの厳選リスト。
*  [gamedev](https://github.com/ellisonleao/magictools) - ゲーム開発に関する素晴らしいリスト。
*  [graphics-resources](https://github.com/mattdesl/graphics-resources) - グラフィックプログラミング向けリソース一覧
*  [awesome-d3d12](https://github.com/vinjn/awesome-d3d12) - 厳選された素晴らしい D3D12 ライブラリ、デバッグツールおよびリソース一覧

<a id="license"></a>
## ライセンス

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

この作品は[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/)のライセンスで許可されています。

<a id="contributing"></a>
## コントリビューション
Please see [CONTRIBUTING](https://github.com/vinjn/awesome-vulkan/blob/master/CONTRIBUTING.md) for details.
