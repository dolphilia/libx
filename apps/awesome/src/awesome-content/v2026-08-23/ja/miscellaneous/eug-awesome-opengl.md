---
title: "Awesome opengl"
description: "openglを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-eug-awesome-opengl-readme-md"
---

# Awesome opengl

openglを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

* [記事](#articles)
* [書籍](#books)
* [デバッグ](#debug)
* [GLSLエディター](#glsl-editors)
* [ライブラリ](#libraries)
* [プロファイルローダー](#profile-loaders)
* [リファレンス](#references)
* [講演](#talks)
* [動画](#videos)
* [Webサイト](#websites)


## 記事 <a id="articles"></a>

*OpenGLの記事（チュートリアル以外）*

* [(2014) Ray tracing with OpenGL Compute Shaders](https://github.com/LWJGL/lwjgl3-wiki/wiki/2.6.1.-Ray-tracing-with-OpenGL-Compute-Shaders-%28Part-I%29) — **Kai Burjack** - OpenGL（LWJGL）を使ったレイトレーシングの詳細なチュートリアルシリーズ。
* [(2014) Things that drive me nuts about OpenGL](http://richg42.blogspot.com.au/2014/05/things-that-drive-me-nuts-about-opengl.html) — **Rich Geldreich** - GL APIへの建設的な（あるいはそうでない）批評。
* [(2011) A trip through the graphics pipeline](https://fgiesen.wordpress.com/2011/07/09/a-trip-through-the-graphics-pipeline-2011-index) — **Fabian Giesen** - D3D／OpenGLグラフィックスパイプラインを扱う包括的で充実したシリーズ。
* [(2010) What is OpenGL?](http://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Chapter-1:-The-Graphics-Pipeline.html) — **Joe Groff** - OpenGLの構成要素を簡潔に紹介。


## 書籍 <a id="books"></a>

*OpenGLに関する人気書籍*

* [A Trip Down the Graphics Pipeline](http://www.amazon.com/dp/1558603875) — **Jim Blinn** - グラフィックスパイプラインについて豊富な情報を収録し、コンピューターグラフィックスの中心概念を学ぶのに最適な資料の一つである人気書籍。
* [Computer Graphics](http://www.amazon.com/dp/0321399528) — **John F. Hughesほか** - コンピューターグラフィックスのアルゴリズム設計・実装に携わる人の必読書です。OpenGL中心の書籍ではありませんが、技術を示す価値ある例を収録しています。
* [Interactive Computer Graphics](http://www.amazon.com/dp/0132545233) — **Edward Angel、Dave Shreiner** - OpenGLを使った複数の例でさまざまな側面を一度に扱いますが、独学でOpenGLを学ぶ場合には役立ちにくいかもしれません。
* [OpenGL ES 3.0 Programming Guide](http://www.amazon.com/dp/0321933885) — **Dan Ginsburgほか** - OpenGL ES 3.0 APIを使うために必要な情報を明快に提示します。
* [OpenGL Insights](http://www.amazon.com/dp/1439893764) — **Patrick Cozzi、Christophe Riccio** - OpenGLの高度なトピックを幅広く扱い、技法とヒントを学べる充実した包括的資料。
* [OpenGL Programming Guide](http://www.amazon.com/dp/0321773039) — **Dave Shreinerほか** - 基礎をよく網羅し、APIの明快なリファレンスを提供します。
* [OpenGL Shading Language](http://www.amazon.com/dp/0321637631) — **Randi J. Rostほか** - シェーディング言語について非常に明快に書かれた書籍。シェーダーの書き方も複数の説明で扱います。
* [OpenGL SuperBible](http://www.amazon.com/dp/0321712617) — **Richard S. Wrightほか** - コンピューターグラフィックスの基本概念を網羅し、OpenGLによる明快な例を提示します。初心者の必読書です。
* [Real-Time Rendering](http://www.amazon.com/dp/1568814240) — **Tomas Akenine-Moller、Eric Haines、Naty Hoffman** - ゲームエンジンの概念、ゲームクライアントプログラミングの基礎、DirectXとOpenGLを理解するために必要な知識をよく説明しています。


## デバッグ <a id="debug"></a>

*デバッグ・プロファイリング用ライブラリ*

* [apitrace](http://apitrace.github.io) - OpenGL、Direct3D、そのほかのグラフィックスAPIをトレースするツール。
* [CodeXL](https://github.com/GPUOpen-Tools/CodeXL) - デバッガー、プロファイラー、フレーム／シェーダー解析を含むAMDのツールスイート。
* [GL-SL Debugger](http://glsl-debugger.github.io) - OpenGLプログラムのデバッグツール。
* [GLIntercept](https://github.com/dtrebilco/glintercept) - Windows向けOpenGL関数呼び出しインターセプター。
* [Intel-GPA](https://software.intel.com/en-us/gpa) - IntelのOpenGL Graphics Performance Analyzer。
* [NVIDIA® Nsight™](https://developer.nvidia.com/nvidia-nsight-visual-studio-edition) - グラフィックスアプリケーション向け開発プラットフォーム。
* [RenderDoc](https://github.com/baldurk/renderdoc) - スタンドアロンのグラフィックスデバッグツール。
* [tracy](https://github.com/wolfpld/tracy) - ゲームやそのほかのアプリケーション向けのリアルタイム遠隔テレメトリ・フレームプロファイラー。
* [vogl](https://github.com/ValveSoftware/vogl) - Valveが開発したOpenGLキャプチャー・再生デバッガー。


## GLSLエディター <a id="glsl-editors"></a>

*オンラインGLSLエディター*

* [GLSL Sandbox](http://glslsandbox.com) - fragment shader向けオンライン・ライブエディター。
* [GLSLbin](http://glslb.in) - [glslify](https://github.com/stackgl/glslify)に対応するfragment shaderサンドボックス。
* [SHDR Editor](http://shdr.bkcore.com) - GLSL shaderのライブエディター、ビューアー、バリデーター。
* [Shader Toy](https://www.shadertoy.com) - 最も人気のあるfragment shader向けライブエディター。
* [ShaderFrog](http://shaderfrog.com/) - WebGL Shaderのエディター兼コンポーザー。

## ライブラリ <a id="libraries"></a>

*OpenGLアプリケーション向けの便利なライブラリ*

* [assimp](https://github.com/assimp/assimp) - 3Dモデルを統一的にインポートする移植可能なライブラリ。
* [Bullet](http://bulletphysics.org/wordpress) - 最先端の衝突検出、軟体・剛体力学を提供します。
* [fltk](https://www.fltk.org/) - UIウィジェットを移植可能な形で生成するC++ツールキット。[LGPLv2](https://www.fltk.org/COPYING.php)
* [freeGLUT](http://freeglut.sourceforge.net) - OpenGLコンテキストを含むウィンドウを作成・管理できる成熟したライブラリ。
* [GLFW](http://www.glfw.org) - OpenGLコンテキストを持つウィンドウの作成・操作に使うモダンなライブラリ。
* [GLFM](https://github.com/brackeen/glfm) - モバイル端末とWebへOpenGL ESコンテキストと入力イベントを提供。
* [glm](http://glm.g-truc.net/0.9.6/index.html) - GLSL仕様を基にしたグラフィックスソフトウェア向け数学ライブラリ。
* [Magnum](https://github.com/mosra/magnum) - モダンOpenGL向けの2D／3Dグラフィックスエンジン。
* [MathFu](http://google.github.io/mathfu/) - シンプルさと効率を重視し、主にゲーム向けに開発されたC++数学ライブラリ。
* [Newton](http://newtondynamics.com/forum/newton.php) - クロスプラットフォームで現実的な物理演算を提供。
* [OGLplus](http://oglplus.org) - OpenGL上にオブジェクト指向のファサードを実装するライブラリ集。
* [SDL](http://www.libsdl.org) - マルチメディアとグラフィックスハードウェアへ低水準アクセスを提供するよう設計されています。
* [SFML](http://www.sfml-dev.org) - ゲームとマルチメディアアプリケーションの開発を容易にするシンプルなインターフェース。
* [SOIL](http://www.lonesock.net/soil.html) - 主にOpenGLへテクスチャーをアップロードするための小さなCライブラリ（[SOIL2](https://bitbucket.org/SpartanJ/soil2)も参照）。
* [Pangolin](https://github.com/stevenlovegrove/Pangolin) - OpenGLの表示・操作を管理し、動画入力を抽象化する、軽量で移植可能な高速開発ライブラリ。
* [morphologica](https://github.com/ABRG-Models/morphologica) - データ可視化、特に数値シミュレーション向けのOpenGLグラフィックスエンジン。
* [raylib](https://github.com/raysan5/raylib) - ゲームプログラミングを楽しむためのシンプルで扱いやすいライブラリ。

## プロファイルローダー <a id="profile-loaders"></a>

*OpenGL向けプロファイルローダー*

* [gl3w](https://github.com/skaslev/gl3w) - シンプルなOpenGL core profileローダー。
* [glad](https://github.com/Dav1dde/glad) - 公式仕様を基にした複数profile対応のローダー生成器。
* [glbindify](https://github.com/nnesse/glbindify) - OpenGL、wgl、glX向けC bindingを生成するコマンドラインツール。
* [glbinding](https://github.com/cginternals/glbinding) - C++11の機能を活用して型安全性を提供するprofileローダー。
* [GLEW](http://glew.sourceforge.net) - OpenGL拡張を読み込む成熟したクロスプラットフォームライブラリ。


## リファレンス <a id="references"></a>

*OpenGLのリファレンス*

* [docs.GL](http://docs.gl) - OpenGLの代替ドキュメント。
* [OpenGL API Tables](http://web.eecs.umich.edu/~sugih/courses/eecs487/common/notes/APITables.xml) - 複数のOpenGL・GLSLバージョンに対応するAPIクイックリファレンス。
* [OpenGL Cheat Sheet](https://www.khronos.org/files/opengl43-quick-reference-card.pdf) - OpenGL 4.3のコマンドと構文のクイックリファレンスカード。
* [OpenGL Docs](https://www.opengl.org/sdk/docs) - 公式ドキュメントサイト。
* [OpenGL Wiki](https://www.opengl.org/wiki/Main_Page) - 公式OpenGL Wiki。


## 講演 <a id="talks"></a>

*OpenGL関連の講演*
* [Approaching Zero Driver Overhead in OpenGL](http://gdcvault.com/play/1020791/) - [スライド](http://www.slideshare.net/CassEveritt/approaching-zero-driver-overhead) - [Reddit AMA](https://www.reddit.com/r/gamedev/comments/21mbo8/we_are_the_authors_of_approaching_zero_driver) — **Cass Everitt、Tim Foley、John McDonald、Graham Sellers** [1:15:54]
* [How Modern OpenGL Can Radically Reduce Driver Overhead](https://www.youtube.com/watch?v=-bCeNzgiJ8I) — **Cass Everitt、John McDonald** [51:13]
* [Moving Your Games to OpenGL](https://www.youtube.com/watch?v=45O7WTc6k2Y) — **Rich Geldreich、Dan Ginsburg、Peter Lohrmann、Jason Mitchell** [54:45]


## 動画 <a id="videos"></a>

*OpenGLの動画チュートリアル*

* [Jamie King](https://www.youtube.com/playlist?list=PLRwVmtr-pp06qT6ckboaOhnm9FxmzHpbY) - モダンOpenGLとQtの包括的なチュートリアル。
* [MakingGamesWithBen](https://www.youtube.com/playlist?list=PLSPw4ASQYyymu3PfG9gxywSPghnSMiOAW) - OpenGLとゲーム開発の段階的な動画チュートリアル。
* [SIGGRAPH](https://www.youtube.com/user/ACMSIGGRAPH/playlists) - コンピューターグラフィックスの著名な会議。
* [TheChernoProject](https://www.youtube.com/playlist?list=PLlrATfBNZ98foTJPJ_Ev03o2oq3-GGOS2) - C++によるOpenGL入門。
* [thebennybox](https://www.youtube.com/user/thebennybox/playlists) - OpenGLとゲーム開発の動画チュートリアル。
* [ThinMatrix](https://www.youtube.com/user/ThinMatrix/playlists) - Javaを使ったOpenGLとゲーム開発の動画チュートリアル。
* [sentdex](https://www.youtube.com/playlist?list=PLQVvvaa0QuDdfGpqjkEJSeWKGCP31__wD) - Pythonを使ったOpenGL（immediate mode）の動画チュートリアル。
* [Sonar Systems](https://www.youtube.com/playlist?list=PLRtjMdoYXLf6zUMDJVRZYV-6g6n62vet8) - 新しいモダンOpenGL 3.0以降を学べます。
* [Introduction to OpenGL](https://www.youtube.com/playlist?list=PLvv0ScY6vfd9zlZkIIqGDeG5TUWswkMox) - Mike ShahによるC++でのOpenGL動画チュートリアル。

## Webサイト <a id="websites"></a>

*OpenGLのチュートリアルサイト*

* [3D Game Shaders For Beginners](https://github.com/lettier/3d-game-shaders-for-beginners) — **David Lettier**
* [Learn OpenGL](https://learnopengl.com) — **Joey de Vries**
* [Learning Modern 3D Graphics Programming](https://bitbucket.org/alfonse/gltut/wiki/Home) — **Jason L. McKesson**
* [Light House 3D](http://www.lighthouse3d.com/tutorials/glsl-core-tutorial) — **Light House 3D**
* [Modern OpenGL](http://www.tomdalling.com/blog/category/modern-opengl) — **Tom Dalling**
* [OpenGL Examples](https://github.com/McNopper/OpenGL) — **Norbert Nopper**
* [OpenGL Step by Step](http://ogldev.atspace.co.uk) — **Etay Meiri**
* [OpenGL Tutorial](https://open.gl) — **Alexander Overvoorde**
* [OpenGL Tutorial](http://antongerdelan.net/opengl/index.html) — **Anton Gerdelan**
* [OpenGL Tutorial](http://www.opengl-tutorial.org) — **Bonder Wu**
* [OpenGL Tutorial](http://www.songho.ca/opengl) — **Song Ho Ahn**

## 関連リスト <a id="related-lists"></a>

*類似するAwesomeリスト*
* [awesome](https://github.com/sindresorhus/awesome) - Awesomeリストを厳選したリスト。
* [awesome-computer-vision](https://github.com/jbhuang0604/awesome-computer-vision) - 優れたコンピュータービジョン資料を厳選したリスト。
* [awesome-webgl](https://github.com/sjfricke/awesome-webgl) - 優れたWebGLライブラリ、資料などを厳選したリスト。
* [awesome-vulkan](https://github.com/vinjn/awesome-vulkan) - 優れたVulkanプロジェクトとエコシステムを厳選したリスト。
* [gamedev](https://github.com/ellisonleao/magictools) - ゲーム開発に関するAwesomeリスト。
* [graphics-resources](https://github.com/mattdesl/graphics-resources) - グラフィックスプログラミング資料のリスト。


## ライセンス <a id="license"></a>

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

この作品は[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/)の下でライセンスされています。

## コントリビューション <a id="contributing"></a>
詳しくは[CONTRIBUTING](https://github.com/eug/awesome-opengl/blob/master/CONTRIBUTING.md)を参照してください。
