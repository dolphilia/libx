---
title: "Vulkan サポートリファレンス"
description: "GLFW 3.5.1 Vulkan サポートリファレンス"
---

<span id="details"></span>

## 説明

これは Vulkan 関連の関数と型のリファレンスドキュメントです。作業目的に沿った情報については、<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/" class="el">Vulkan ガイド</a>を参照してください。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> 型定義</h2></td>
</tr>
<tr id="r_ga70c01918dc9d233a4fbe0681a43018af" class="memitem:ga70c01918dc9d233a4fbe0681a43018af">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga70c01918dc9d233a4fbe0681a43018af" class="el">GLFWvkproc</a>) (void)</td>
</tr>
<tr class="memdesc:ga70c01918dc9d233a4fbe0681a43018af">
<td class="mdescLeft"> </td>
<td class="mdescRight">Vulkan API 関数ポインター型。<br />
</td>
</tr>
<tr class="separator:ga70c01918dc9d233a4fbe0681a43018af">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="functions" class="groupheader"><span id="func-members"></span> 関数</h2></td>
</tr>
<tr id="r_ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="memitem:ga2e7f30931e02464b5bc8d0d4b6f9fe2b">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> (void)</td>
</tr>
<tr class="memdesc:ga2e7f30931e02464b5bc8d0d4b6f9fe2b">
<td class="mdescLeft"> </td>
<td class="mdescRight">Vulkan ローダーと ICD が見つかったかどうかを返します。<br />
</td>
</tr>
<tr class="separator:ga2e7f30931e02464b5bc8d0d4b6f9fe2b">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga99ad342d82f4a3421e2864978cb6d1d6" class="memitem:ga99ad342d82f4a3421e2864978cb6d1d6">
<td class="memItemLeft" style="text-align: right;" data-valign="top">const char ** </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> (uint32_t *count)</td>
</tr>
<tr class="memdesc:ga99ad342d82f4a3421e2864978cb6d1d6">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFW が必要とする Vulkan インスタンス拡張を返します。<br />
</td>
</tr>
<tr class="separator:ga99ad342d82f4a3421e2864978cb6d1d6">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadf228fac94c5fd8f12423ec9af9ff1e9" class="memitem:gadf228fac94c5fd8f12423ec9af9ff1e9">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga70c01918dc9d233a4fbe0681a43018af" class="el">GLFWvkproc</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9" class="el">glfwGetInstanceProcAddress</a> (VkInstance instance, const char *procname)</td>
</tr>
<tr class="memdesc:gadf228fac94c5fd8f12423ec9af9ff1e9">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定された Vulkan インスタンス関数のアドレスを返します。<br />
</td>
</tr>
<tr class="separator:gadf228fac94c5fd8f12423ec9af9ff1e9">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaff3823355cdd7e2f3f9f4d9ea9518d92" class="memitem:gaff3823355cdd7e2f3f9f4d9ea9518d92">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92" class="el">glfwGetPhysicalDevicePresentationSupport</a> (VkInstance instance, VkPhysicalDevice device, uint32_t queuefamily)</td>
</tr>
<tr class="memdesc:gaff3823355cdd7e2f3f9f4d9ea9518d92">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたキューファミリーがイメージを表示できるかどうかを返します。<br />
</td>
</tr>
<tr class="separator:gaff3823355cdd7e2f3f9f4d9ea9518d92">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1a24536bec3f80b08ead18e28e6ae965" class="memitem:ga1a24536bec3f80b08ead18e28e6ae965">
<td class="memItemLeft" style="text-align: right;" data-valign="top">VkResult </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965" class="el">glfwCreateWindowSurface</a> (VkInstance instance, <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window, const VkAllocationCallbacks *allocator, VkSurfaceKHR *surface)</td>
</tr>
<tr class="memdesc:ga1a24536bec3f80b08ead18e28e6ae965">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウ用の Vulkan サーフェスを作成します。<br />
</td>
</tr>
<tr class="separator:ga1a24536bec3f80b08ead18e28e6ae965">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## 型定義の詳細

<span id="ga70c01918dc9d233a4fbe0681a43018af"></span>

## <span class="permalink">[◆ ](#ga70c01918dc9d233a4fbe0681a43018af)</span>GLFWvkproc

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| typedef void(\* GLFWvkproc) (void) |

</div>

<div class="memdoc">

通常のポインターからのキャストを強制せずに Vulkan API 関数ポインターを返すために使用する、汎用関数ポインターです。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_proc" class="el">Vulkan 関数ポインターの照会</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9" class="el">glfwGetInstanceProcAddress</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

## 関数の詳細

<span id="ga2e7f30931e02464b5bc8d0d4b6f9fe2b"></span>

## <span class="permalink">[◆ ](#ga2e7f30931e02464b5bc8d0d4b6f9fe2b)</span>glfwVulkanSupported()

<div class="memitem">

<div class="memproto">

|                         |     |       |     |     |     |
|-------------------------|-----|-------|-----|-----|-----|
| int glfwVulkanSupported | (   | void  |     | )   |     |

</div>

<div class="memdoc">

この関数は、Vulkan ローダーと、最低限機能するいずれかの ICD が見つかったかどうかを返します。

Vulkan ローダーや ICD が利用可能であっても、それだけではサーフェス作成やインスタンス作成が可能であるとは保証されません。Vulkan サーフェス作成に必要な拡張が利用可能かを確認するには <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> を、物理デバイスのキューファミリーがイメージ表示をサポートするかを確認するには <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92" class="el">glfwGetPhysicalDevicePresentationSupport</a> を呼び出してください。

戻り値  
Vulkan が最低限利用可能な場合は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_support" class="el">Vulkan サポートの照会</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga99ad342d82f4a3421e2864978cb6d1d6"></span>

## <span class="permalink">[◆ ](#ga99ad342d82f4a3421e2864978cb6d1d6)</span>glfwGetRequiredInstanceExtensions()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| const char \*\* glfwGetRequiredInstanceExtensions | ( | uint32_t \*  | *count* | ) |  |

</div>

<div class="memdoc">

この関数は、GLFW ウィンドウ用の Vulkan サーフェスを作成するために GLFW が必要とする Vulkan インスタンス拡張名の配列を返します。成功した場合、リストには必ず `VK_KHR_surface` が含まれます。そのため、追加の拡張が不要であれば、このリストを `VkInstanceCreateInfo` 構造体へ直接渡せます。

マシン上で Vulkan が利用できない場合、この関数は `NULL` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> エラーを生成します。Vulkan が最低限利用可能かを確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> を呼び出してください。

Vulkan は利用可能でも、ウィンドウサーフェス作成を可能にする拡張の組み合わせが見つからない場合、この関数は `NULL` を返します。その場合でも、オフスクリーンレンダリングや計算処理には Vulkan を使用できます。

引数  
|  |  |  |
|----|----|----|
| \[out\] | count | 戻り値の配列に含まれる拡張数を格納する場所。エラーが発生した場合は 0 に設定されます。 |

<!-- -->

戻り値  
ASCII エンコードされた拡張名の配列。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> があります。

<!-- -->

備考  
将来の GLFW バージョンでは、追加の拡張が必要になる可能性があります。`VkInstanceCreateInfo` 構造体で同じ拡張を複数回指定するとエラーになるため、有効化したい拡張が戻り値の配列にすでに含まれていないか確認してください。

<!-- -->

ポインターの有効期間  
戻り値の配列は GLFW によって確保および解放されます。自分で解放してはいけません。ライブラリが終了するまでのみ有効であることが保証されます。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_ext" class="el">必要な Vulkan 拡張の照会</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965" class="el">glfwCreateWindowSurface</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="gadf228fac94c5fd8f12423ec9af9ff1e9"></span>

## <span class="permalink">[◆ ](#gadf228fac94c5fd8f12423ec9af9ff1e9)</span>glfwGetInstanceProcAddress()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga70c01918dc9d233a4fbe0681a43018af" class="el">GLFWvkproc</a> glfwGetInstanceProcAddress | ( | VkInstance  | *instance*, |
|  |  | const char \*  | *procname*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたインスタンスについて、指定された Vulkan コア関数または拡張関数のアドレスを返します。instance が `NULL` の場合、少なくとも次の関数を含む、Vulkan ローダーがエクスポートする任意の関数を返せます。

- `vkEnumerateInstanceExtensionProperties`
- `vkEnumerateInstanceLayerProperties`
- `vkCreateInstance`
- `vkGetInstanceProcAddr`

マシン上で Vulkan が利用できない場合、この関数は `NULL` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> エラーを生成します。Vulkan が最低限利用可能かを確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> を呼び出してください。

この関数は、プラットフォーム固有の Vulkan ローダー照会をフォールバックとして使用して `vkGetInstanceProcAddr` を呼び出すことと同等です。

引数  
|  |  |  |
|----|----|----|
| \[in\] | instance | 問い合わせる Vulkan インスタンス。インスタンス作成関連の関数を取得する場合は `NULL`。 |
| \[in\] | procname | ASCII エンコードされた関数名。 |

<!-- -->

戻り値  
関数のアドレス。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> があります。

<!-- -->

ポインターの有効期間  
戻り値の関数ポインターは、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_proc" class="el">Vulkan 関数ポインターの照会</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="gaff3823355cdd7e2f3f9f4d9ea9518d92"></span>

## <span class="permalink">[◆ ](#gaff3823355cdd7e2f3f9f4d9ea9518d92)</span>glfwGetPhysicalDevicePresentationSupport()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| int glfwGetPhysicalDevicePresentationSupport | ( | VkInstance  | *instance*, |
|  |  | VkPhysicalDevice  | *device*, |
|  |  | uint32_t  | *queuefamily*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定された物理デバイスの指定されたキューファミリーが、GLFW のビルド対象プラットフォームへの表示をサポートするかどうかを返します。

マシン上で Vulkan または必要なウィンドウサーフェス作成用インスタンス拡張が利用できない場合、あるいは指定されたインスタンスが必要な拡張を有効にして作成されていない場合、この関数は `GLFW_FALSE` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> エラーを生成します。Vulkan が最低限利用可能かを確認するには <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> を、必要なインスタンス拡張を確認するには <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> を呼び出してください。

引数  
|        |             |                                                       |
|--------|-------------|-------------------------------------------------------|
| \[in\] | instance    | 物理デバイスが属するインスタンス。 |
| \[in\] | device      | キューファミリーが属する物理デバイス。 |
| \[in\] | queuefamily | 問い合わせるキューファミリーのインデックス。 |

<!-- -->

戻り値  
キューファミリーが表示をサポートする場合は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
**macOS:** `VK_MVK_macos_surface` および `VK_EXT_metal_surface` 拡張は `vkGetPhysicalDevice*PresentationSupport` 型の関数を提供しないため、現在この関数は常に `GLFW_TRUE` を返します。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。Vulkan オブジェクトの同期の詳細については、Vulkan 仕様を参照してください。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_present" class="el">Vulkan 表示サポートの照会</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>

<span id="ga1a24536bec3f80b08ead18e28e6ae965"></span>

## <span class="permalink">[◆ ](#ga1a24536bec3f80b08ead18e28e6ae965)</span>glfwCreateWindowSurface()

<div class="memitem">

<div class="memproto">

|  |  |  |  |
|----|----|----|----|
| VkResult glfwCreateWindowSurface | ( | VkInstance  | *instance*, |
|  |  | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window*, |
|  |  | const VkAllocationCallbacks \*  | *allocator*, |
|  |  | VkSurfaceKHR \*  | *surface*  |
|  | ) |  |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウ用の Vulkan サーフェスを作成します。

Vulkan ローダー、または最低限機能する ICD が 1 つも見つからない場合、この関数は `VK_ERROR_INITIALIZATION_FAILED` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> エラーを生成します。Vulkan が最低限利用可能かを確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> を呼び出してください。

必要なウィンドウサーフェス作成用インスタンス拡張が利用できない場合、または指定されたインスタンスがそれらの拡張を有効にして作成されていない場合、この関数は `VK_ERROR_EXTENSION_NOT_PRESENT` を返し、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a> エラーを生成します。必要なインスタンス拡張を確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> を呼び出してください。

ウィンドウサーフェスは別の API と共有できないため、ウィンドウは<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CLIENT_API_attrib" class="el">クライアント API ヒント</a>を `GLFW_NO_API` に設定して作成されていなければなりません。そうでない場合、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> エラーを生成し、`VK_ERROR_NATIVE_WINDOW_IN_USE_KHR` を返します。

ウィンドウサーフェスは、指定された Vulkan インスタンスより先に破棄しなければなりません。ウィンドウサーフェスを破棄する責任は呼び出し側にあります。GLFW は代わりに破棄しません。サーフェスを破棄するには `vkDestroySurfaceKHR` を呼び出してください。

引数  
|  |  |  |
|----|----|----|
| \[in\] | instance | サーフェスを作成する Vulkan インスタンス。 |
| \[in\] | window | サーフェスを作成する対象のウィンドウ。 |
| \[in\] | allocator | 使用するアロケーター。デフォルトのアロケーターを使用する場合は `NULL`。 |
| \[out\] | surface | サーフェスのハンドルを格納する場所。エラーが発生した場合は `VK_NULL_HANDLE` に設定されます。 |

<!-- -->

戻り値  
成功した場合は `VK_SUCCESS`。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は Vulkan エラーコード。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> があります。

<!-- -->

備考  
作成呼び出しが行われる前にエラーが発生した場合、GLFW はそのエラーに最も適した Vulkan エラーコードを返します。<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b" class="el">glfwVulkanSupported</a> と <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> を適切に使用すれば、これらのエラーのほぼすべてを回避できます。

**macOS:** GLFW は `VK_EXT_metal_surface` 拡張を優先し、`VK_MVK_macos_surface` 拡張をフォールバックとして使用します。拡張が選択された場合、その名前は <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> が返す配列に含まれます。

**macOS:** この関数は、MoltenVK の動作に必要な `CAMetalLayer` インスタンスを作成し、ウィンドウのコンテンツビューに設定します。

**X11:** デフォルトでは、GLFW は `VK_KHR_xcb_surface` 拡張を優先し、`VK_KHR_xlib_surface` 拡張をフォールバックとして使用します。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_X11_XCB_VULKAN_SURFACE_hint" class="el">GLFW_X11_XCB_VULKAN_SURFACE</a> 初期化ヒントを設定すると、`VK_KHR_xlib_surface` を優先拡張にできます。拡張が選択された場合、その名前は <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a> が返す配列に含まれます。

<!-- -->

スレッドセーフ性  
この関数は、どのスレッドからでも呼び出せます。Vulkan オブジェクトの同期の詳細については、Vulkan 仕様を参照してください。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_surface" class="el">Vulkan ウィンドウサーフェスの作成</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a>

<!-- -->

導入バージョン  
バージョン 3.2 で追加されました。

</div>

</div>
