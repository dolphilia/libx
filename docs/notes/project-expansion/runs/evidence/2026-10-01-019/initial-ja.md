---
title: "コンテキストリファレンス"
description: "GLFW 3.5.1 コンテキストリファレンス"
---

<span id="details"></span>

## 説明

これは、OpenGL および OpenGL ES コンテキスト関連関数のリファレンスドキュメントです。作業手順を中心とした情報については、<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/" class="el">コンテキストガイド</a>を参照してください。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="typedefs" class="groupheader"><span id="typedef-members"></span> 型定義</h2></td>
</tr>
<tr id="r_ga3d47c2d2fbe0be9c505d0e04e91a133c" class="memitem:ga3d47c2d2fbe0be9c505d0e04e91a133c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">typedef void(* </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga3d47c2d2fbe0be9c505d0e04e91a133c" class="el">GLFWglproc</a>) (void)</td>
</tr>
<tr class="memdesc:ga3d47c2d2fbe0be9c505d0e04e91a133c">
<td class="mdescLeft"> </td>
<td class="mdescRight">クライアント API 関数のポインター型。<br />
</td>
</tr>
<tr class="separator:ga3d47c2d2fbe0be9c505d0e04e91a133c">
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
<tr id="r_ga1c04dc242268f827290fe40aa1c91157" class="memitem:ga1c04dc242268f827290fe40aa1c91157">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157" class="el">glfwMakeContextCurrent</a> (<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> *window)</td>
</tr>
<tr class="memdesc:ga1c04dc242268f827290fe40aa1c91157">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウのコンテキストを、呼び出し元スレッドでカレントにします。<br />
</td>
</tr>
<tr class="separator:ga1c04dc242268f827290fe40aa1c91157">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad94e80185397a6cf5fe2ab30567af71c" class="memitem:gad94e80185397a6cf5fe2ab30567af71c">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> * </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#gad94e80185397a6cf5fe2ab30567af71c" class="el">glfwGetCurrentContext</a> (void)</td>
</tr>
<tr class="memdesc:gad94e80185397a6cf5fe2ab30567af71c">
<td class="mdescLeft"> </td>
<td class="mdescRight">呼び出し元スレッドでコンテキストがカレントになっているウィンドウを返します。<br />
</td>
</tr>
<tr class="separator:gad94e80185397a6cf5fe2ab30567af71c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga6d4e0cdf151b5e579bd67f13202994ed" class="memitem:ga6d4e0cdf151b5e579bd67f13202994ed">
<td class="memItemLeft" style="text-align: right;" data-valign="top">void </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed" class="el">glfwSwapInterval</a> (int interval)</td>
</tr>
<tr class="memdesc:ga6d4e0cdf151b5e579bd67f13202994ed">
<td class="mdescLeft"> </td>
<td class="mdescRight">カレントコンテキストのスワップ間隔を設定します。<br />
</td>
</tr>
<tr class="separator:ga6d4e0cdf151b5e579bd67f13202994ed">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga87425065c011cef1ebd6aac75e059dfa" class="memitem:ga87425065c011cef1ebd6aac75e059dfa">
<td class="memItemLeft" style="text-align: right;" data-valign="top">int </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa" class="el">glfwExtensionSupported</a> (const char *extension)</td>
</tr>
<tr class="memdesc:ga87425065c011cef1ebd6aac75e059dfa">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定された拡張が利用可能かを返します。<br />
</td>
</tr>
<tr class="separator:ga87425065c011cef1ebd6aac75e059dfa">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga35f1837e6f666781842483937612f163" class="memitem:ga35f1837e6f666781842483937612f163">
<td class="memItemLeft" style="text-align: right;" data-valign="top"><a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga3d47c2d2fbe0be9c505d0e04e91a133c" class="el">GLFWglproc</a> </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163" class="el">glfwGetProcAddress</a> (const char *procname)</td>
</tr>
<tr class="memdesc:ga35f1837e6f666781842483937612f163">
<td class="mdescLeft"> </td>
<td class="mdescRight">カレントコンテキストについて、指定された関数のアドレスを返します。<br />
</td>
</tr>
<tr class="separator:ga35f1837e6f666781842483937612f163">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## 型定義の詳細

<span id="ga3d47c2d2fbe0be9c505d0e04e91a133c"></span>

## <span class="permalink">[◆ ](#ga3d47c2d2fbe0be9c505d0e04e91a133c)</span>GLFWglproc

<div class="memitem">

<div class="memproto">

|                                    |
|------------------------------------|
| typedef void(\* GLFWglproc) (void) |

</div>

<div class="memdoc">

通常のポインターからのキャストを強制せずに、クライアント API 関数のポインターを返すために使用する汎用関数ポインターです。

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext" class="el">OpenGL および OpenGL ES の拡張</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163" class="el">glfwGetProcAddress</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

## 関数の詳細

<span id="ga1c04dc242268f827290fe40aa1c91157"></span>

## <span class="permalink">[◆ ](#ga1c04dc242268f827290fe40aa1c91157)</span>glfwMakeContextCurrent()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| void glfwMakeContextCurrent | ( | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \*  | *window* | ) |  |

</div>

<div class="memdoc">

この関数は、指定されたウィンドウの OpenGL または OpenGL ES コンテキストを、呼び出し元スレッドでカレントにします。`NULL` を渡すことで、新しいコンテキストをカレントにせず、呼び出し元スレッドからカレントコンテキストを切り離すこともできます。

1つのコンテキストを同時にカレントにできるのは1つのスレッドだけであり、各スレッドで同時にカレントにできるコンテキストも1つだけです。コンテキストをカレントにすると、呼び出し元スレッドで以前カレントだったコンテキストは切り離されます。

コンテキストをスレッド間で移動するときは、新しいスレッドでカレントにする前に、元のスレッドで切り離して（非カレントにして）おかなければなりません。

既定では、コンテキストを非カレントにすると、暗黙にパイプラインのフラッシュが強制されます。`GL_KHR_context_flush_control` をサポートするマシンでは、<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_RELEASE_BEHAVIOR_hint" class="el">GLFW_CONTEXT_RELEASE_BEHAVIOR</a> ヒントを設定することで、コンテキストがこのフラッシュを実行するかを制御できます。

指定されたウィンドウは、OpenGL または OpenGL ES コンテキストを持っていなければなりません。コンテキストのないウィンドウを指定すると、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a> エラーが発生します。

引数  
|  |  |  |
|----|----|----|
| \[in\] | window | コンテキストをカレントにするウィンドウ。カレントコンテキストを切り離す場合は `NULL`。 |

<!-- -->

備考  
以前のカレントコンテキストが、この関数へ渡されたものとは異なるコンテキスト作成 API で作成されていた場合でも、GLFW は新しいコンテキストをカレントにする前に、以前のコンテキストをその API から切り離します。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_current" class="el">カレントコンテキスト</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#gad94e80185397a6cf5fe2ab30567af71c" class="el">glfwGetCurrentContext</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="gad94e80185397a6cf5fe2ab30567af71c"></span>

## <span class="permalink">[◆ ](#gad94e80185397a6cf5fe2ab30567af71c)</span>glfwGetCurrentContext()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242" class="el">GLFWwindow</a> \* glfwGetCurrentContext | ( | void  |  | ) |  |

</div>

<div class="memdoc">

この関数は、呼び出し元スレッドで OpenGL または OpenGL ES コンテキストがカレントになっているウィンドウを返します。

戻り値  
コンテキストがカレントになっているウィンドウ。どのウィンドウのコンテキストもカレントでない場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_current" class="el">カレントコンテキスト</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157" class="el">glfwMakeContextCurrent</a>

<!-- -->

導入バージョン  
バージョン 3.0 で追加されました。

</div>

</div>

<span id="ga6d4e0cdf151b5e579bd67f13202994ed"></span>

## <span class="permalink">[◆ ](#ga6d4e0cdf151b5e579bd67f13202994ed)</span>glfwSwapInterval()

<div class="memitem">

<div class="memproto">

|                       |     |      |            |     |     |
|-----------------------|-----|------|------------|-----|-----|
| void glfwSwapInterval | (   | int  | *interval* | )   |     |

</div>

<div class="memdoc">

この関数は、カレントの OpenGL または OpenGL ES コンテキストのスワップ間隔を設定します。これは、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a> が呼び出されてから、バッファを交換して戻るまでに待機する画面更新の回数です。これは、*垂直同期*、*垂直帰線同期*、または単に *vsync* と呼ばれることがあります。

`WGL_EXT_swap_control_tear` または `GLX_EXT_swap_control_tear` 拡張のいずれかをサポートするコンテキストでは、*負*のスワップ間隔も受け付けます。これにより、フレームの到着が少し遅れた場合でも、ドライバーが直ちに交換できます。これらの拡張は <a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa" class="el">glfwExtensionSupported</a> で確認できます。

呼び出し元スレッドでコンテキストがカレントになっていなければなりません。カレントコンテキストなしでこの関数を呼び出すと、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> エラーが発生します。

この関数は Vulkan には適用されません。Vulkan でレンダリングする場合は、代わりにスワップチェーンのプレゼントモードを参照してください。

引数  
|  |  |  |
|----|----|----|
| \[in\] | interval | <a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a> によってバッファが交換されるまでに待機する、画面更新の最小回数。 |

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
この関数はコンテキスト作成中には呼び出されず、スワップ間隔はその API の既定値のままになります。GLFW が使用する一部のスワップ間隔拡張では、スワップ間隔をゼロ以外の値に設定した後でゼロへ戻せないためです。

一部の GPU ドライバーは、アプリケーションの要求を上書きするユーザー設定やドライバーの不具合により、要求されたスワップ間隔に従いません。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#buffer_swap" class="el">バッファの交換</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14" class="el">glfwSwapBuffers</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。

</div>

</div>

<span id="ga87425065c011cef1ebd6aac75e059dfa"></span>

## <span class="permalink">[◆ ](#ga87425065c011cef1ebd6aac75e059dfa)</span>glfwExtensionSupported()

<div class="memitem">

<div class="memproto">

|                            |     |                |             |     |     |
|----------------------------|-----|----------------|-------------|-----|-----|
| int glfwExtensionSupported | (   | const char \*  | *extension* | )   |     |

</div>

<div class="memdoc">

この関数は、指定された <a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext" class="el">API 拡張</a>が、カレントの OpenGL または OpenGL ES コンテキストでサポートされているかを返します。クライアント API 拡張とコンテキスト作成 API 拡張の両方を検索します。

呼び出し元スレッドでコンテキストがカレントになっていなければなりません。カレントコンテキストなしでこの関数を呼び出すと、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> エラーが発生します。

この関数は呼び出すたびに1つ以上の拡張文字列を取得して検索するため、頻繁に使用する場合は結果をキャッシュすることを推奨します。拡張文字列はコンテキストの有効期間中に変化しないため、キャッシュしても問題ありません。

この関数は Vulkan には適用されません。Vulkan を使用する場合は、代わりに <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6" class="el">glfwGetRequiredInstanceExtensions</a>、`vkEnumerateInstanceExtensionProperties`、`vkEnumerateDeviceExtensionProperties` を参照してください。

引数  
|        |           |                                          |
|--------|-----------|------------------------------------------|
| \[in\] | extension | ASCII でエンコードされた拡張名。 |

<!-- -->

戻り値  
拡張が利用可能な場合は `GLFW_TRUE`、それ以外の場合は `GLFW_FALSE`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext" class="el">OpenGL および OpenGL ES の拡張</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163" class="el">glfwGetProcAddress</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。

</div>

</div>

<span id="ga35f1837e6f666781842483937612f163"></span>

## <span class="permalink">[◆ ](#ga35f1837e6f666781842483937612f163)</span>glfwGetProcAddress()

<div class="memitem">

<div class="memproto">

|  |  |  |  |  |  |
|----|----|----|----|----|----|
| <a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga3d47c2d2fbe0be9c505d0e04e91a133c" class="el">GLFWglproc</a> glfwGetProcAddress | ( | const char \*  | *procname* | ) |  |

</div>

<div class="memdoc">

この関数は、指定された OpenGL または OpenGL ES の<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext" class="el">コア関数または拡張関数</a>がカレントコンテキストでサポートされている場合、そのアドレスを返します。

呼び出し元スレッドでコンテキストがカレントになっていなければなりません。カレントコンテキストなしでこの関数を呼び出すと、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a> エラーが発生します。

この関数は Vulkan には適用されません。Vulkan でレンダリングする場合は、代わりに <a href="/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9" class="el">glfwGetInstanceProcAddress</a>、`vkGetInstanceProcAddr`、`vkGetDeviceProcAddr` を参照してください。

引数  
|        |          |                                         |
|--------|----------|-----------------------------------------|
| \[in\] | procname | ASCII でエンコードされた関数名。 |

<!-- -->

戻り値  
関数のアドレス。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー</a>が発生した場合は `NULL`。

<!-- -->

エラー  
発生する可能性のあるエラーには、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a>、および <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a> があります。

<!-- -->

備考  
ある関数のアドレスが、コンテキスト間で同じであることは保証されません。

関連するバージョンまたは拡張が利用できない場合でも、この関数が `NULL` でないアドレスを返すことがあります。必ず先にコンテキストのバージョンまたは拡張文字列を確認してください。

<!-- -->

ポインターの有効期間  
返された関数ポインターは、コンテキストが破棄されるか、ライブラリが終了するまで有効です。

<!-- -->

スレッドセーフ性  
この関数は、任意のスレッドから呼び出せます。

<!-- -->

関連項目  
<a href="/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext" class="el">OpenGL および OpenGL ES の拡張</a>

<a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa" class="el">glfwExtensionSupported</a>

<!-- -->

導入バージョン  
バージョン 1.0 で追加されました。

</div>

</div>
