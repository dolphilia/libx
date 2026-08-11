---
title: "コンテキストガイド"
description: "OpenGLとOpenGL ESのコンテキスト管理"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<a id="context_guide"></a>

# コンテキストガイド

このガイドでは、OpenGL および OpenGL ES コンテキストに関連する GLFW の関数を紹介します。この分類の特定の関数について詳しくは、[context](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/)を参照してください。GLFW API のほかの領域についてもガイドがあります。

 - [intro_guide](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_guide)
 - [window_guide](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_guide)
 - [vulkan_guide](/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_guide)
 - [monitor_guide](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide)
 - [input_guide](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_guide)


<a id="context_object"></a>

## コンテキストオブジェクト

ウィンドウオブジェクトは、トップレベルウィンドウと OpenGL または OpenGL ES コンテキストの両方を内包します。[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) で作成し、[glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2) または [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) で破棄します。詳しくは [window_creation](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_creation)を参照してください。

ウィンドウとコンテキストは分離できない形で結び付いているため、ウィンドウオブジェクトはコンテキストのハンドルとしても機能します。

さまざまな種類のコンテキストの作成を試し、そのプロパティを確認するには、`glfwinfo` テストプログラムを実行してください。

> **注:** Vulkan にはコンテキストがなく、Vulkan インスタンスは Vulkan API 自体を介して作成します。Vulkan を使ってウィンドウへ描画する場合は、[GLFW_CLIENT_API](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CLIENT_API_hint) ヒントを `GLFW_NO_API` に設定し、コンテキストの作成を無効にしてください。詳しくは [vulkan_guide](/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_guide)を参照してください。


<a id="context_hints"></a>

### コンテキスト作成ヒント

[glfwWindowHint](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033) で指定するヒントには、作成するコンテキストの種類に関係するものがいくつかあります。ウィンドウガイドの[コンテキスト関連ヒント](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints_ctx)を参照してください。


<a id="context_sharing"></a>

### コンテキストオブジェクトの共有

[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) でウィンドウとその OpenGL または OpenGL ES コンテキストを作成するとき、新しいコンテキストがオブジェクト（テクスチャ、頂点バッファ、要素バッファなど）を共有する相手として、別のウィンドウを指定できます。

```c
GLFWwindow* second_window = glfwCreateWindow(640, 480, "Second Window", NULL, first_window);
```

オブジェクト共有はオペレーティングシステムとグラフィックスドライバーが実装します。共有するオブジェクトの種類を選べるプラットフォームでは、GLFW はすべての種類の共有を要求します。

詳しくは [OpenGL](https://www.opengl.org/registry/) または [OpenGL ES](https://www.khronos.org/opengles/) のリファレンス文書の該当する章を参照してください。残念ながら、この章の名前と番号はバージョンや API によって異なりますが、_Shared Objects and Multiple Contexts_ という名前だったことがあります。

GLFW には、`sharing` という最小限のオブジェクト共有サンプルプログラムが付属します。


<a id="context_offscreen"></a>

### オフスクリーンコンテキスト

GLFW は、関連付けられたウィンドウを持たないコンテキストの作成をサポートしません。ただし、[GLFW_VISIBLE](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_VISIBLE_hint) ウィンドウヒントを使うと、非表示ウィンドウを持つコンテキストを作成できます。

```c
glfwWindowHint(GLFW_VISIBLE, GLFW_FALSE);

GLFWwindow* offscreen_context = glfwCreateWindow(640, 480, "", NULL, NULL);
```

ウィンドウを表示する必要はなく、そのコンテキストを通常のオフスクリーンコンテキストとして使えます。ウィンドウマネージャーによっては、非表示ウィンドウのフレームバッファのサイズが使用不能または変更不能なことがあります。そのため、このようなコンテキストでの描画にはフレームバッファオブジェクトを推奨します。

表示されているものがなくても、ウィンドウが少なくとも1つある間は[イベントを処理](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events)するべきです。


<a id="context_less"></a>

### コンテキストのないウィンドウ

[GLFW_CLIENT_API](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CLIENT_API_hint) ヒントを `GLFW_NO_API` に設定すると、コンテキストの作成を無効にできます。

コンテキストのないウィンドウを [glfwMakeContextCurrent](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157) または [glfwSwapBuffers](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14) に渡してはいけません。渡すと [GLFW_NO_WINDOW_CONTEXT](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487) エラーが発生します。


<a id="context_current"></a>

## カレントコンテキスト

OpenGL または OpenGL ES を呼び出す前に、正しい種類のカレントコンテキストが必要です。1つのコンテキストを同時にカレントにできるのは1つのスレッドだけであり、1つのスレッドで同時にカレントにできるコンテキストも1つだけです。

コンテキストをスレッド間で移動するときは、新しいスレッドでカレントにする前に、元のスレッドで非カレントにしなければなりません。

ウィンドウのコンテキストは [glfwMakeContextCurrent](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157) でカレントにします。

```c
glfwMakeContextCurrent(window);
```

カレントコンテキストのウィンドウは [glfwGetCurrentContext](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#gad94e80185397a6cf5fe2ab30567af71c) が返します。

```c
GLFWwindow* window = glfwGetCurrentContext();
```

次の GLFW 関数は、コンテキストがカレントであることを必要とします。カレントコンテキストなしでこれらの関数を呼び出すと、[GLFW_NO_CURRENT_CONTEXT](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0) エラーが発生します。

 - [glfwSwapInterval](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed)
 - [glfwExtensionSupported](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa)
 - [glfwGetProcAddress](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163)


<a id="context_swap"></a>

## バッファ交換

ウィンドウガイドの [buffer_swap](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#buffer_swap)を参照してください。


<a id="context_glext"></a>

## OpenGLとOpenGL ESの拡張

OpenGL と OpenGL ES の利点の1つは拡張性です。ハードウェアベンダーは、ある機能が OpenGL または OpenGL ES 仕様の新しいバージョンへ取り込まれる前に、その API を拡張する機能を実装へ含められます。また、一部の拡張は仕様へ取り込まれず、廃れるまで拡張のままです。

拡張は次の要素で定義されます。

- 拡張名（例: `GL_ARB_gl_spirv`）
- 新しい OpenGL トークン（例: `GL_SPIR_V_BINARY_ARB`）
- 新しい OpenGL 関数（例: `glSpecializeShaderARB`）

公式拡張に使われる Architecture Review Board の略である `ARB` 接辞に注目してください。上記の拡張は ARB が作成しましたが、Nvidia の `NV`、AMD の `AMD` など、多くの異なる接辞があります。どの団体も汎用の `EXT` 接辞を使えます。拡張の一覧とその仕様は、[OpenGL Registry](https://www.opengl.org/registry/) と [OpenGL ES Registry](https://www.khronos.org/registry/gles/) にあります。


<a id="context_glext_auto"></a>

### ローダーライブラリで拡張を読み込む

拡張ローダーライブラリは、OpenGL と OpenGL ES の拡張、および新しいバージョンの OpenGL または OpenGL ES コア API の両方へアクセスするための、最も簡単で優れた方法です。必要なものすべての宣言と読み込みに関する詳細を処理します。そのようなライブラリの1つが [glad](https://github.com/Dav1dde/glad) で、ほかにもいくつかあります。

以下の例では glad を使いますが、どの拡張ローダーライブラリも同様に動作します。

最初に glad の Python スクリプトを使ってソースファイルを生成する必要があります。この例では、GLFW と glad の両方でデフォルトとなる、すべてのバージョンの OpenGL に対応したローダーを生成します。OpenGL ES 用のローダーや、特定の API バージョンと拡張集合用のローダーも生成できます。生成ファイルは `output` ディレクトリへ書き込まれます。

```sh
python main.py --generator c --no-loader --out-path output
```

`--no-loader` オプションを追加するのは、GLFW が OpenGL および OpenGL ES の関数ポインターを読み込む関数をすでに提供しているためです。この関数は、選択されたコンテキスト作成 API を自動的に使います。glad は独自の実装を持つ代わりに、この関数を呼び出せます。ほかにもいくつかのコマンドラインオプションがあります。詳しくは glad のドキュメントを参照してください。

生成された `output/src/glad.c`、`output/include/glad/glad.h`、`output/include/KHR/khrplatform.h` ファイルをビルドへ追加します。次に、開発環境の OpenGL ヘッダーを置き換える glad ヘッダーファイルをインクルードします。glad ヘッダーを GLFW ヘッダーより先にインクルードすると、開発環境の OpenGL または OpenGL ES ヘッダーが抑制されます。

```c
#include <glad/glad.h>
#include <GLFW/glfw3.h>
```

最後に、適切なカレントコンテキストを用意してから glad を初期化します。

```c
window = glfwCreateWindow(640, 480, "My Window", NULL, NULL);
if (!window)
{
    ...
}

glfwMakeContextCurrent(window);

gladLoadGLLoader((GLADloadproc) glfwGetProcAddress);
```

glad を読み込むと、作成したコンテキストと生成した glad ローダーの両方がサポートする、OpenGL コア関数と拡張関数すべてにアクセスできます。その後、描画を開始できます。

[コンテキストヒント](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints_ctx)で、必要な OpenGL または OpenGL ES の最低バージョンを指定できます。要件がより複雑な場合は、[コンテキスト属性](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attribs_ctx)で実際の OpenGL または OpenGL ES バージョンを確認するか、`GLAD_GL_VERSION_x_x` 真偽値で特定のバージョンがカレントコンテキストにサポートされるか確認できます。

```c
if (GLAD_GL_VERSION_3_2)
{
    // Call OpenGL 3.2+ specific code
}
```

特定の拡張がサポートされるか確認するには、`GLAD_GL_xxx` 真偽値を使います。

```c
if (GLAD_GL_ARB_gl_spirv)
{
    // Use GL_ARB_gl_spirv
}
```


<a id="context_glext_manual"></a>

### 拡張を手動で読み込む

絶対に必要な場合を除き、__この方法を使わないでください。__ [拡張ローダーライブラリ](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext_auto)を使えば、単調で反復的かつエラーを起こしやすい大量の作業を省けます。

特定の拡張を使うには、まずコンテキストがその拡張をサポートするか確認し、拡張が新しい関数を導入する場合は、その関数へのポインターを取得しなければなりません。GLFW は、拡張と新しい API 関数を手動で読み込むために [glfwExtensionSupported](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa) と [glfwGetProcAddress](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163) を提供します。

この節では、OpenGL 拡張を手動で読み込む方法を示します。OpenGL ES 拡張の読み込みも、拡張ヘッダーの名前を除けば同じです。


<a id="context_glext_header"></a>

#### glext.hヘッダー

`glext.h` 拡張ヘッダーは、すべての OpenGL 拡張のインターフェースを定義する、継続的に更新されているファイルです。最新版は常に [OpenGL Registry](https://www.opengl.org/registry/) にあります。[OpenGL ES Registry](https://www.khronos.org/registry/gles/) には、OpenGL ES の各バージョン向け拡張ヘッダーもあります。開発環境に含まれるものは数年前のままで、使いたい拡張が含まれていない可能性があるため、独自に用意した拡張ヘッダーを使うことを強く推奨します。

このヘッダーは、サポートするすべての拡張の全関数について、関数ポインター型を定義します。これらには `PFNGLSPECIALIZESHADERARBPROC`（`glSpecializeShaderARB` 用）のような名前が付きます。つまり、関数名を大文字にし、両端へ `PFN`（pointer to function）と `PROC`（procedure）を追加します。

拡張ヘッダーをインクルードするには、GLFW ヘッダーをインクルードする前に [GLFW_INCLUDE_GLEXT](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_INCLUDE_GLEXT) を定義します。

```c
#define GLFW_INCLUDE_GLEXT
#include <GLFW/glfw3.h>
```


<a id="context_glext_string"></a>

#### 拡張の有無を確認する

使用するマシンが実際に拡張をサポートするとは限りません。ドライバーが古い場合や、グラフィックスカードに必要なハードウェア機能がない場合があるためです。そのため、実行時にコンテキストが拡張をサポートするか確認する必要があります。これは [glfwExtensionSupported](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa) で行います。

```c
if (glfwExtensionSupported("GL_ARB_gl_spirv"))
{
    // The extension is supported by the current context
}
```

引数は拡張名を格納したヌル終端 ASCII 文字列です。拡張がサポートされていれば [glfwExtensionSupported](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa) は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE` を返します。


<a id="context_glext_proc"></a>

#### 関数ポインターを取得する

すべてではありませんが、多くの拡張では新しい OpenGL 関数を使う必要があります。これらの関数には、オペレーティングシステムのクライアント API ライブラリ内にエントリーポイントがないことが多いため、実行時に取得する必要があります。[glfwGetProcAddress](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163) でこれらの関数へのポインターを取得できます。

```c
PFNGLSPECIALIZESHADERARBPROC pfnSpecializeShaderARB = glfwGetProcAddress("glSpecializeShaderARB");
```

一般に、関数ポインター変数へ関数と（完全に）同じ名前を付けることは避けるべきです。リンカーが混乱する可能性があります。代わりに、上記のように異なる接頭辞を使うか、別の命名方式を使えます。

これまでに説明した要素を組み合わせると、次のようになります。

```c
#define GLFW_INCLUDE_GLEXT
#include <GLFW/glfw3.h>

#define glSpecializeShaderARB pfnSpecializeShaderARB
PFNGLSPECIALIZESHADERARBPROC pfnSpecializeShaderARB;

// Flag indicating whether the extension is supported
int has_ARB_gl_spirv = 0;

void load_extensions(void)
{
    if (glfwExtensionSupported("GL_ARB_gl_spirv"))
    {
        pfnSpecializeShaderARB = (PFNGLSPECIALIZESHADERARBPROC)
            glfwGetProcAddress("glSpecializeShaderARB");
        has_ARB_gl_spirv = 1;
    }
}

void some_function(void)
{
    if (has_ARB_gl_spirv)
    {
        // Now the extension function can be called as usual
        glSpecializeShaderARB(...);
    }
}
```
