---
title: "Vulkanガイド"
description: "GLFWをVulkanとともに使う"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<a id="vulkan_guide"></a>

# Vulkanガイド

このガイドは、公式の [Vulkan リソース](https://www.khronos.org/vulkan/)と GLFW のその他のドキュメントの間を補うものであり、どちらかの代替ではありません。ローダー、デバイス、キュー、サーフェスなどの Vulkan の概念にある程度精通していることを前提とし、Vulkan 関数の詳細な説明は Vulkan のドキュメントに委ねます。

Vulkan 向けに開発するには、使用するプラットフォーム用の [LunarG Vulkan SDK](https://vulkan.lunarg.com/) をダウンロードしてください。ヘッダーとリンクライブラリに加え、開発に必要な検証レイヤーも提供します。

[Vulkan Tutorial](https://vulkan-tutorial.com/) には、GLFW と Vulkan の使い方についてさらに詳しい情報があります。[Khronos Vulkan Samples](https://github.com/KhronosGroup/Vulkan-Samples) も、小さなフレームワークを挟んで GLFW を使っています。

特定の Vulkan サポート関数について詳しくは、[vulkan](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/)を参照してください。GLFW API のほかの領域についてもガイドがあります。

 - [intro_guide](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_guide)
 - [window_guide](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_guide)
 - [context_guide](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_guide)
 - [monitor_guide](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide)
 - [input_guide](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_guide)


<a id="vulkan_loader"></a>

## Vulkanローダーを見つける

GLFW 自体を Vulkan ローダーへリンクする必要はありません。

デフォルトでは、GLFW は標準名を使い、実行時に Vulkan ローダーを動的に読み込みます。Windows では `vulkan-1.dll`、Linux などの Unix 系システムでは `libvulkan.so.1`、macOS では `libvulkan.1.dylib` です。

__macOS:__ GLFW はアプリケーションバンドルの `Frameworks` サブディレクトリも検索します。

コードが別の名前または標準ではない場所にある Vulkan ローダーを使う場合は、その場所を GLFW へ指示する必要があります。GLFW を初期化する前に、使用する `vkGetInstanceProcAddr` を [glfwInitVulkanLoader](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga76af552d0307bb5f7791f245417d4752) へ渡すと、GLFW はすべての Vulkan エントリーポイントの取得にその関数を使います。これにより、GLFW は Vulkan ローダーを動的に読み込まなくなります。

```c
glfwInitVulkanLoader(vkGetInstanceProcAddr);
```

__macOS:__ アプリケーションを再配布可能にするには、LunarG SDK のドキュメントに従ってアプリケーションバンドルを設定する必要があります。[macOS 向け SDK ドキュメント](https://vulkan.lunarg.com/doc/sdk/latest/mac/getting_started.html)に詳しい説明があります。


<a id="vulkan_include"></a>

## Vulkanヘッダーファイルをインクルードする

GLFW に Vulkan ヘッダーをインクルードさせるには、GLFW ヘッダーをインクルードする前に [GLFW_INCLUDE_VULKAN](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_INCLUDE_VULKAN) を定義します。

```c
#define GLFW_INCLUDE_VULKAN
#include <GLFW/glfw3.h>
```

独自の場所にある Vulkan ヘッダーや独自に変更した Vulkan ヘッダーをインクルードする場合は、GLFW ヘッダーより前に行います。

```c
#include <path/to/vulkan.h>
#include <GLFW/glfw3.h>
```

GLFW ヘッダーまたはその前で Vulkan ヘッダーをインクルードしない限り、Vulkan 型に依存する次の GLFW 関数は宣言されません。

 - [glfwInitVulkanLoader](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga76af552d0307bb5f7791f245417d4752)
 - [glfwGetInstanceProcAddress](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9)
 - [glfwGetPhysicalDevicePresentationSupport](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92)
 - [glfwCreateWindowSurface](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965)

GLFW の Vulkan 部分を動作させるために `VK_USE_PLATFORM_*_KHR` マクロを定義する必要はありません。これらの拡張を直接使う場合に限って定義してください。


<a id="vulkan_support"></a>

## Vulkanサポートを照会する

Vulkan ローダーへ直接リンクしている場合は、この節を飛ばせます。標準のデスクトップローダーライブラリは Vulkan のすべてのコア関数と Khronos 拡張関数をエクスポートし、直接呼び出せるようにします。

Vulkan ローダーへ直接リンクする代わりに動的に読み込む場合は、[glfwVulkanSupported](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b) でローダーと ICD が利用可能か確認できます。

```c
if (glfwVulkanSupported())
{
    // Vulkan is available, at least for compute
}
```

Vulkan ローダーと最低限機能する ICD が見つかると、この関数は `GLFW_TRUE` を返します。

一方または両方が見つからない場合、ほかの Vulkan 関連 GLFW 関数を呼び出すと [GLFW_API_UNAVAILABLE](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e) エラーが発生します。


<a id="vulkan_proc"></a>

### Vulkan関数ポインターを取得する

見つかったローダーから任意の Vulkan コア関数または拡張関数を読み込むには、[glfwGetInstanceProcAddress](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9) を呼び出します。インスタンス作成に必要な関数を読み込むには、インスタンスとして `NULL` を渡します。

```c
PFN_vkCreateInstance pfnCreateInstance = (PFN_vkCreateInstance)
    glfwGetInstanceProcAddress(NULL, "vkCreateInstance");
```

インスタンスの作成後は、そのインスタンスからその他のすべての Vulkan コア関数と、有効にしたインスタンス拡張の関数を読み込めます。

```c
PFN_vkCreateDevice pfnCreateDevice = (PFN_vkCreateDevice)
    glfwGetInstanceProcAddress(instance, "vkCreateDevice");
```

この関数はまず `vkGetInstanceProcAddr` を呼び出します。失敗した場合は、プラットフォーム固有の Vulkan ローダー照会（`dlsym` または `GetProcAddress`）へフォールバックします。それも失敗すると `NULL` を返します。`vkGetInstanceProcAddr` について詳しくは、Vulkan のドキュメントを参照してください。

Vulkan は、Vulkan 関数のデバイス固有版を読み込む `vkGetDeviceProcAddr` も提供します。この関数は、[glfwGetInstanceProcAddress](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9) を使ってインスタンスから取得できます。

```c
PFN_vkGetDeviceProcAddr pfnGetDeviceProcAddr = (PFN_vkGetDeviceProcAddr)
    glfwGetInstanceProcAddress(instance, "vkGetDeviceProcAddr");
```

デバイス固有関数は、渡されたデバイスに基づく内部ディスパッチが不要なため、わずかに高速に実行できる可能性があります。`vkGetDeviceProcAddr` について詳しくは、Vulkan のドキュメントを参照してください。


<a id="vulkan_ext"></a>

## 必須Vulkan拡張を照会する

Vulkan で有用な処理を行うには、インスタンスを作成する必要があります。Vulkan を使ってウィンドウへ描画する場合は、GLFW が Vulkan サーフェスを作成するために必要とするインスタンス拡張を有効にしなければなりません。

必要なインスタンス拡張を取得するには、[glfwGetRequiredInstanceExtensions](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6) を呼び出します。

```c
uint32_t count;
const char** extensions = glfwGetRequiredInstanceExtensions(&count);
```

[glfwGetPhysicalDevicePresentationSupport](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92) および [glfwCreateWindowSurface](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965) へ渡すインスタンスを作成するときは、これらの拡張をすべて有効にしなければなりません。拡張の集合はプラットフォームによって異なり、グラフィックスドライバーなどの要因によっても異なる可能性があります。

失敗した場合は `NULL` を返し、GLFW は Vulkan ウィンドウサーフェスを作成できません。それでも、オフスクリーン描画や計算処理には Vulkan を使えます。

成功した場合、返される配列には常に `VK_KHR_surface` が含まれます。そのため、追加の拡張が不要なら、この一覧を `VkInstanceCreateInfo` 構造体へ直接渡せます。

```c
VkInstanceCreateInfo ici;

memset(&ici, 0, sizeof(ici));
ici.enabledExtensionCount = count;
ici.ppEnabledExtensionNames = extensions;
...
```

GLFW の将来のバージョンでは、追加の拡張が必要になる可能性があります。`VkInstanceCreateInfo` 構造体で同じ拡張を複数回指定するのはエラーになるため、有効にしたい拡張が返された配列にすでに含まれていないか確認してください。

__macOS:__ MoltenVK は（2022年7月時点で）Vulkan に完全準拠した実装ではありません。Vulkan SDK 1.3.216.0 の時点では、MoltenVK を物理デバイス一覧へ表示するために、`VK_KHR_portability_enumeration` インスタンス拡張も有効にし、インスタンス作成情報のフラグへ `VK_INSTANCE_CREATE_ENUMERATE_PORTABILITY_BIT_KHR` ビットを設定しなければなりません。詳しくは Vulkan と MoltenVK のドキュメントを参照してください。


<a id="vulkan_present"></a>

## Vulkanプレゼンテーションサポートを照会する

すべての Vulkan デバイスのすべてのキューファミリーが、サーフェスへ画像をプレゼンテーションできるわけではありません。ウィンドウとサーフェスを先に作成せず、物理デバイスの特定キューファミリーが画像プレゼンテーションをサポートするか確認するには、[glfwGetPhysicalDevicePresentationSupport](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92) を呼び出します。

```c
if (glfwGetPhysicalDevicePresentationSupport(instance, physical_device, queue_family_index))
{
    // Queue family supports image presentation
}
```

`VK_KHR_surface` 拡張は、既存の Vulkan サーフェスについて同じ検査を行う `vkGetPhysicalDeviceSurfaceSupportKHR` 関数も提供します。


<a id="vulkan_window"></a>

## ウィンドウを作成する

Vulkan と同じウィンドウで OpenGL または OpenGL ES を使うのでなければ、コンテキストを作成する必要はありません。[GLFW_CLIENT_API](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CLIENT_API_hint) ヒントでコンテキスト作成を無効にできます。

```c
glfwWindowHint(GLFW_CLIENT_API, GLFW_NO_API);
GLFWwindow* window = glfwCreateWindow(640, 480, "Window Title", NULL, NULL);
```

詳しくは [context_less](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_less)を参照してください。


<a id="vulkan_surface"></a>

## Vulkanウィンドウサーフェスを作成する

[glfwCreateWindowSurface](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965) を使うと、GLFW ウィンドウ用の Vulkan サーフェス（`VK_KHR_surface` 拡張で定義）を作成できます。

```c
VkSurfaceKHR surface;
VkResult err = glfwCreateWindowSurface(instance, window, NULL, &surface);
if (err)
{
    // Window surface creation failed
}
```

ウィンドウ上に OpenGL または OpenGL ES コンテキストを作成している場合、そのコンテキストがウィンドウへのプレゼンテーションを所有するため、Vulkan サーフェスを作成できません。

サーフェスを破棄するのはアプリケーションの責任です。GLFW は代わりに破棄しません。同じ拡張の `vkDestroySurfaceKHR` 関数を呼び出して破棄してください。
