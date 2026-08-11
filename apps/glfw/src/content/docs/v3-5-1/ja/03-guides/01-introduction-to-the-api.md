---
title: "API入門"
description: "初期化、エラー、座標系、バージョン管理"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<a id="intro_guide"></a>

# API入門

このガイドでは GLFW の基本概念を紹介し、初期化、エラー処理、API の保証と制限について説明します。広範な内容を簡潔に学ぶチュートリアルについては、代わりに [quick_guide](/docs/glfw/v3-5-1/ja/02-getting-started/01-getting-started/#quick_guide)を参照してください。この分類の特定の関数について詳しくは、[init](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/)を参照してください。

GLFW のほかの領域についてもガイドがあります。

 - [window_guide](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_guide)
 - [context_guide](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_guide)
 - [vulkan_guide](/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_guide)
 - [monitor_guide](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide)
 - [input_guide](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_guide)


<a id="intro_init"></a>

## 初期化と終了

ほとんどの GLFW 関数を呼び出す前に、ライブラリを初期化しなければなりません。この初期化では、マシンで利用可能な機能の確認、モニターの列挙、タイマーの初期化、必要なプラットフォーム固有の初期化が行われます。

ライブラリの初期化に成功する前に呼び出せるのは、次の関数だけです。また、いずれもメインスレッドからのみ呼び出せます。

 - [glfwGetVersion](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197)
 - [glfwGetVersionString](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga026abd003c8e6501981ab1662062f1c0)
 - [glfwPlatformSupported](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed)
 - [glfwGetError](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18)
 - [glfwSetErrorCallback](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40)
 - [glfwInitHint](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga110fd1d3f0412822b4f1908c026f724a)
 - [glfwInitAllocator](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6)
 - [glfwInitVulkanLoader](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga76af552d0307bb5f7791f245417d4752)
 - [glfwInit](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e)
 - [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901)

初期化に成功する前にこれら以外の関数を呼び出すと、[GLFW_NOT_INITIALIZED](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a) エラーが発生します。


<a id="intro_init_init"></a>

### GLFWを初期化する

ライブラリは [glfwInit](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e) で初期化します。エラーが発生した場合、この関数は `GLFW_FALSE` を返します。

```c
if (!glfwInit())
{
    // Handle initialization failure
}
```

初期化の一部が失敗すると、成功した部分は [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) が呼ばれた場合と同様に終了処理されます。ライブラリの初期化は1回だけでよく、初期化済みのライブラリをさらに初期化しようとすると、直ちに `GLFW_TRUE` が返ります。

ライブラリの初期化に成功したら、アプリケーションが終了する前にライブラリを終了するべきです。現代のシステムは終了したプログラムが割り当てたリソースを適切に解放しますが、GLFW はシステム全体の設定を変更することがあり、終了処理をしないと元に戻らない可能性があります。

__macOS:__ ライブラリを初期化すると、メインメニューと Dock アイコンが作成されます。コマンドライン専用プログラムには望ましくありません。[GLFW_COCOA_MENUBAR](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga71e0b4ce2f2696a84a9b8c5e12dc70cf) 初期化ヒントを使うと、メインメニューと Dock アイコンの作成を無効にできます。


<a id="init_hints"></a>

### 初期化ヒント

初期化ヒントは [glfwInit](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e) より前に設定し、ライブラリが終了するまでの動作に影響します。ヒントは [glfwInitHint](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga110fd1d3f0412822b4f1908c026f724a) で設定します。

```c
glfwInitHint(GLFW_JOYSTICK_HAT_BUTTONS, GLFW_FALSE);
```

設定したヒントの値が GLFW によってリセットされることはありませんが、値が反映されるのは初期化中だけです。GLFW の初期化後に設定した値は、ライブラリを終了して再び初期化するまで無視されます。

一部のヒントはプラットフォーム固有です。これらはどのプラットフォームでも設定できますが、対応するプラットフォームだけに影響し、ほかのプラットフォームでは無視されます。設定にプラットフォーム固有のヘッダーや関数は必要ありません。


<a id="init_hints_shared"></a>

#### 共通の初期化ヒント

<a id="GLFW_PLATFORM"></a>

__GLFW_PLATFORM__ は、ウィンドウ処理と入力に使うプラットフォームを指定します。指定できる値は `GLFW_ANY_PLATFORM`、`GLFW_PLATFORM_WIN32`、`GLFW_PLATFORM_COCOA`、`GLFW_PLATFORM_WAYLAND`、`GLFW_PLATFORM_X11`、`GLFW_PLATFORM_NULL` です。デフォルト値は `GLFW_ANY_PLATFORM` で、ライブラリがサポートするプラットフォームのうち Null バックエンド以外から選択します。

<a id="GLFW_JOYSTICK_HAT_BUTTONS"></a>

__GLFW_JOYSTICK_HAT_BUTTONS__ は、[glfwGetJoystickHats](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c) がなかった以前の GLFW バージョンとの互換性のため、ジョイスティックのハットをボタンとしても公開するかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。

<a id="GLFW_ANGLE_PLATFORM_TYPE_hint"></a>

__GLFW_ANGLE_PLATFORM_TYPE__ は、[ANGLE][] を介して OpenGL ES と EGL を使うときに要求するプラットフォームの種類（描画バックエンド）を指定します。要求したプラットフォームの種類を利用できない場合、ANGLE はデフォルトを使います。指定できる値は `GLFW_ANGLE_PLATFORM_TYPE_NONE`、`GLFW_ANGLE_PLATFORM_TYPE_OPENGL`、`GLFW_ANGLE_PLATFORM_TYPE_OPENGLES`、`GLFW_ANGLE_PLATFORM_TYPE_D3D9`、`GLFW_ANGLE_PLATFORM_TYPE_D3D11`、`GLFW_ANGLE_PLATFORM_TYPE_VULKAN`、`GLFW_ANGLE_PLATFORM_TYPE_METAL` のいずれかです。

[ANGLE]: https://chromium.googlesource.com/angle/angle/

ANGLE のプラットフォームの種類は、`EGL_ANGLE_platform_angle` 拡張を介して指定されます。このヒントがデフォルト値の `GLFW_ANGLE_PLATFORM_TYPE_NONE` の場合、この拡張は使われません。


<a id="init_hints_osx"></a>

#### macOS固有の初期化ヒント

<a id="GLFW_COCOA_CHDIR_RESOURCES_hint"></a>

__GLFW_COCOA_CHDIR_RESOURCES__ は、アプリケーションのバンドルに `Contents/Resources` サブディレクトリがある場合、アプリケーションのカレントディレクトリをそこへ設定するかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。ほかのプラットフォームでは無視されます。

<a id="GLFW_COCOA_MENUBAR_hint"></a>

__GLFW_COCOA_MENUBAR__ は、GLFW の初期化時にメニューバーと Dock アイコンを作成するかどうかを指定します。メニューバーを nib から作成する場合と GLFW が手動で作成する場合の両方に適用されます。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。ほかのプラットフォームでは無視されます。


<a id="init_hints_wayland"></a>

#### Wayland固有の初期化ヒント

<a id="GLFW_WAYLAND_LIBDECOR_hint"></a>

__GLFW_WAYLAND_LIBDECOR__ は、利用可能な場合にウィンドウ装飾へ [libdecor][] を使うかどうかを指定します。指定できる値は `GLFW_WAYLAND_PREFER_LIBDECOR` と `GLFW_WAYLAND_DISABLE_LIBDECOR` です。ほかのプラットフォームでは無視されます。

[libdecor]: https://gitlab.freedesktop.org/libdecor/libdecor


<a id="init_hints_x11"></a>

#### X11固有の初期化ヒント

<a id="GLFW_X11_XCB_VULKAN_SURFACE_hint"></a>

__GLFW_X11_XCB_VULKAN_SURFACE__ は、Vulkan サーフェスの作成に `VK_KHR_xcb_surface` 拡張を優先するか、`VK_KHR_xlib_surface` 拡張を使うかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。ほかのプラットフォームでは無視されます。


<a id="init_hints_values"></a>

#### サポートされる値とデフォルト値

初期化ヒント | デフォルト値 | サポートされる値
------------ | ------------ | ------------------
[GLFW_PLATFORM](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM) | `GLFW_ANY_PLATFORM` | `GLFW_ANY_PLATFORM`、`GLFW_PLATFORM_WIN32`、`GLFW_PLATFORM_COCOA`、`GLFW_PLATFORM_WAYLAND`、`GLFW_PLATFORM_X11`、`GLFW_PLATFORM_NULL` のいずれか
[GLFW_JOYSTICK_HAT_BUTTONS](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_JOYSTICK_HAT_BUTTONS) | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
[GLFW_ANGLE_PLATFORM_TYPE](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaec269b24cf549ab46292c0125d8bbdce) | `GLFW_ANGLE_PLATFORM_TYPE_NONE` | `GLFW_ANGLE_PLATFORM_TYPE_NONE`、`GLFW_ANGLE_PLATFORM_TYPE_OPENGL`、`GLFW_ANGLE_PLATFORM_TYPE_OPENGLES`、`GLFW_ANGLE_PLATFORM_TYPE_D3D9`、`GLFW_ANGLE_PLATFORM_TYPE_D3D11`、`GLFW_ANGLE_PLATFORM_TYPE_VULKAN`、`GLFW_ANGLE_PLATFORM_TYPE_METAL` のいずれか
[GLFW_COCOA_CHDIR_RESOURCES](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gab937983147a3158d45f88fad7129d9f2) | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
[GLFW_COCOA_MENUBAR](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga71e0b4ce2f2696a84a9b8c5e12dc70cf) | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
[GLFW_WAYLAND_LIBDECOR](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga2a3f2fd7695902c498b050215b3db452) | `GLFW_WAYLAND_PREFER_LIBDECOR` | `GLFW_WAYLAND_PREFER_LIBDECOR` または `GLFW_WAYLAND_DISABLE_LIBDECOR`
[GLFW_X11_XCB_VULKAN_SURFACE](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaa341e303ebeb8e4199b8ab8be84351f6) | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`


<a id="platform"></a>

### 実行時のプラットフォーム選択

GLFW は、複数のプラットフォーム（ウィンドウシステム）向けに同時にコンパイルできます。これにより、単一のライブラリバイナリで、Linux やその他の Unix 系システム上の Wayland と X11 の両方をサポートできます。

[GLFW_PLATFORM](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM) 初期化ヒントを介して、プラットフォーム選択を制御できます。デフォルトでは [GLFW_ANY_PLATFORM](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga18b2d37374d0dea28cd69194fa85b859) に設定されます。これは、サポートされるウィンドウシステムを優先順位に従って探し、最初に見つかったものを選択します。特定のプラットフォームを設定し、それだけを GLFW に検索させることもできます。

```c
glfwInitHint(GLFW_PLATFORM, GLFW_PLATFORM_X11);
```

この仕組みは Null プラットフォームも提供します。Null プラットフォームは常にサポートされますが、明示的に要求する必要があります。このプラットフォームは実質的にはスタブであり、単一の 1080p モニター上でウィンドウシステムを模倣しますが、実際のウィンドウシステムとは一切やり取りしません。

```c
glfwInitHint(GLFW_PLATFORM, GLFW_PLATFORM_NULL);
```

[glfwPlatformSupported](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed) を使うと、ライブラリバイナリが特定のプラットフォームのサポートを組み込んでコンパイルされたかどうかを検査できます。

```c
if (glfwPlatformSupported(GLFW_PLATFORM_WAYLAND))
    glfwInitHint(GLFW_PLATFORM, GLFW_PLATFORM_WAYLAND);
```

GLFW の初期化後は、[glfwGetPlatform](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga6d6a983d38bd4e8fd786d7a9061d399e) で選択されたプラットフォームを取得できます。

```c
int platform = glfwGetPlatform();
```

特に Linux やその他の Unix 系システムで[ネイティブアクセス関数](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/)を使う場合は、選択されたプラットフォームに対応する関数を呼んでいることを確認する必要があるかもしれません。


<a id="init_allocator"></a>

### ヒープメモリアロケーターを独自に指定する

初期化前に [glfwInitAllocator](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6) を使うと、ヒープメモリアロケーターを独自に指定できます。

```c
GLFWallocator allocator;
allocator.allocate = my_malloc;
allocator.reallocate = my_realloc;
allocator.deallocate = my_free;
allocator.user = NULL;

glfwInitAllocator(&allocator);
```

アロケーターは初期化の開始時に有効になり、ライブラリが完全に終了するまで GLFW によって使われます。初期化後に設定したアロケーターは、次回の初期化時に初めて反映されます。

このアロケーターが使われるのは、C 標準ライブラリで行われるはずだったメモリ割り当てだけです。プラットフォーム固有 API で行わなければならないメモリ割り当てには、引き続きその API が使われます。

割り当て関数は [GLFWallocatefun](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120) と一致するシグネチャでなければなりません。希望するバイト単位のサイズと、[glfwInitAllocator](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6) に渡したユーザーポインターを受け取り、割り当てたメモリブロックのアドレスを返します。

```c
void* my_malloc(size_t size, void* user)
{
    ...
}
```

[GLFWallocatefun](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga4306a564e9f60f4de8cc8f31731a3120) のドキュメントには、割り当て関数の要件と制限も記載されています。有効な関数がそのすべてを満たさない場合、GLFW が失敗する可能性があります。

再割り当て関数は [GLFWreallocatefun](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63) と一致する関数シグネチャでなければなりません。再割り当てするメモリブロック、新しく希望するバイト単位のサイズ、[glfwInitAllocator](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6) に渡したユーザーポインターを受け取り、サイズ変更後のメモリブロックのアドレスを返します。

```c
void* my_realloc(void* block, size_t size, void* user)
{
    ...
}
```

[GLFWreallocatefun](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga3e88a829615d8efe8bec1746f7309c63) のドキュメントには、再割り当て関数の要件と制限も記載されています。有効な関数がそのすべてを満たさない場合、GLFW が失敗する可能性があります。

解放関数は [GLFWdeallocatefun](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28) と一致する関数シグネチャでなければなりません。解放するメモリブロックと、[glfwInitAllocator](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9dde93e9891fa7dd17e4194c9f3ae7c6) に渡したユーザーポインターを受け取ります。

```c
void my_free(void* block, void* user)
{
    ...
}
```

[GLFWdeallocatefun](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga7181615eda94c4b07bd72bdcee39fa28) のドキュメントには、解放関数の要件と制限も記載されています。有効な関数がそのすべてを満たさない場合、GLFW が失敗する可能性があります。


<a id="intro_init_terminate"></a>

### GLFWを終了する

GLFW ライブラリを初期化した場合は、アプリケーションが終了する前にライブラリを終了するべきです。これは [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) で行います。

```c
glfwTerminate();
```

これにより、残っているウィンドウ、モニター、カーソルの各オブジェクトが破棄され、変更されたガンマランプが元に戻り、無効化されていた場合はスクリーンセーバーが再び有効になり、GLFW が割り当てたその他のリソースが解放されます。

ライブラリを終了すると、一度も初期化されていなかった状態に戻ります。そのため、GLFW を再び使うにはもう一度初期化する必要があります。ライブラリが初期化されていない場合や、すでに終了している場合は、直ちに処理を返します。


<a id="error_handling"></a>

## エラー処理

一部の GLFW 関数はエラーを示す戻り値を持ちますが、何が起きたのか、なぜ起きたのかを調べるには役立たないことがよくあります。ほかの関数ではエラー用の戻り値が予約されていないため、エラー通知に別の経路が必要です。さらに、すべての GLFW 関数が戻り値を持つわけでもありません。

呼び出し元スレッドで最後に発生した[エラーコード](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/)は、いつでも [glfwGetError](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18) で取得できます。

```c
int code = glfwGetError(NULL);

if (code != GLFW_NO_ERROR)
    handle_error(code);
```

前回の呼び出し以降にエラーが発生していない場合は、[GLFW_NO_ERROR](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gafa30deee5db4d69c4c93d116ed87dbf4)（0）が返ります。エラーは関数が処理を返す前にクリアされます。

エラーコードはエラーの大まかな分類を示します。[GLFW_NOT_INITIALIZED](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a) のように意味が1つしかないエラーコードもあれば、[GLFW_PLATFORM_ERROR](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1) のように多くの異なるエラーに使われるものもあります。

GLFW は、エラーの大まかな分類より詳しい情報を持っていることがよくあります。エラーコードとともに、UTF-8 でエンコードされた人間が読める説明を取得できます。前回の呼び出し以降にエラーが発生していない場合、説明には `NULL` が設定されます。

```c
const char* description;
int code = glfwGetError(&description);

if (description)
    display_error_message(code, description);
```

取得した説明文字列が有効なのは、次のエラーが発生するまでです。保持する必要がある場合はコピーしなければなりません。

エラーが発生するたびに呼ばれるエラーコールバックを設定することもできます。[glfwSetErrorCallback](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaff45816610d53f0b83656092a4034f40) で設定します。

```c
glfwSetErrorCallback(error_callback);
```

エラーコールバックは、[glfwGetError](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18) が返すものと同じエラーコードと人間が読める説明を受け取ります。

```c
void error_callback(int code, const char* description)
{
    display_error_message(code, description);
}
```

エラーコールバックはエラーの保存後に呼び出されます。そのため、エラーコールバック内で [glfwGetError](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18) を呼び出すと、コールバック引数と同じ値が返ります。

コールバックへ渡された説明文字列が有効なのは、エラーコールバックが処理を返すまでです。保持する必要がある場合はコピーしなければなりません。

__通知されるエラーが致命的になることはありません。__ GLFW の初期化に成功していれば、発生するエラーの数にかかわらず、終了するまで初期化済みかつ安全な状態を保ちます。初期化中にエラーが発生して [glfwInit](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e) が失敗した場合は、初期化されたライブラリの部分がすべて安全に終了処理されます。

現在は無効な呼び出しが特定のエラーを生成することに依存しないでください。将来、同じ呼び出しが別のエラーを生成したり、有効になったりする可能性があります。


<a id="coordinate_systems"></a>

## 座標系

GLFW には、_仮想スクリーン_と、ウィンドウの_コンテンツ領域_（単に_コンテンツ領域_とも呼びます）という2つの主要な座標系があります。どちらも同じ単位、すなわち_仮想スクリーン座標_（単に_スクリーン座標_とも呼びます）を使います。この単位がピクセルと一致するとは限りません。

<img src="spaces.svg" width="90%" />

仮想スクリーンとコンテンツ領域のどちらの座標系でも、X 軸は右方向、Y 軸は下方向を指します。

ウィンドウとモニターの位置は、それぞれのコンテンツ領域の左上隅を仮想スクリーンに対して指定します。一方、カーソル位置はウィンドウのコンテンツ領域を基準に指定します。

ウィンドウのコンテンツ領域座標系の原点は、ウィンドウ位置の指定基準となる点でもあるため、コンテンツ領域座標にウィンドウ位置を加えると仮想スクリーン座標へ変換できます。ウィンドウフレームがある場合、フレームはコンテンツ領域から外側へ広がりますが、ウィンドウ位置には影響しません。

GLFW のほぼすべての位置とサイズは、上記2つの原点のいずれかを基準とするスクリーン座標で測定されます。これには、カーソル位置、ウィンドウの位置とサイズ、ウィンドウフレームのサイズ、モニター位置、ビデオモードの解像度が含まれます。

例外は、ミリメートルで測定する[モニターの物理サイズ](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_size)と、ピクセルで測定する[フレームバッファサイズ](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_fbsize)の2つです。

使用中のマシンではピクセルとスクリーン座標が 1:1 で対応するかもしれませんが、Retina ディスプレイ搭載 Mac など、ほかのすべてのマシンで対応するとは限りません。スクリーン座標とピクセルの比率は、ウィンドウがどのモニター上にあるとみなされるかに応じて、実行時に変化することもあります。


<a id="guarantees_limitations"></a>

## 保証と制限

この節では、オペレーティングシステムやドライバーのバグを除き、GLFW の動作を期待できる条件について説明します。この制限を外れて GLFW を使った場合、一部のプラットフォーム、マシン、状況、GLFW バージョンでは動作するかもしれませんが、いつ動かなくなっても不思議ではなく、それはバグとはみなされません。


<a id="lifetime"></a>

### ポインターの有効期間

GLFW が、利用者から渡されたポインターを解放することはありません。また、GLFW から渡されたポインターを利用者が解放してはなりません。

多くの GLFW 関数は、動的に割り当てられた構造体、文字列、配列へのポインターを返します。また、一部のコールバックには文字列や配列が渡されます。これらは常に GLFW が管理するため、アプリケーションが解放してはいけません。各ポインターの有効期間は、GLFW の各関数とコールバックのドキュメントに記載されています。このデータを保持する必要がある場合は、有効期間が終了する前にコピーしなければなりません。

多くの GLFW 関数は、アプリケーションが割り当てた構造体や文字列へのポインターを受け取ります。これらを GLFW が解放することはなく、常にアプリケーション側の責任となります。GLFW がこれらの構造体や文字列内のデータを保持する必要がある場合は、関数が処理を返す前にコピーされます。

将来のマイナーリリースまたはパッチリリースで、ポインターの有効期間が短縮されることはありません。


<a id="reentrancy"></a>

### 再入可能性

GLFW のイベント処理とオブジェクト破棄は再入可能ではありません。つまり、次の関数はどのコールバック関数からも呼び出してはなりません。

 - [glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2)
 - [glfwDestroyCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a)
 - [glfwPollEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832)
 - [glfwWaitEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e)
 - [glfwWaitEventsTimeout](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf)
 - [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901)

これらの関数は将来のマイナーリリースまたはパッチリリースで再入可能になるかもしれませんが、この一覧にない関数が再入不能へ変更されることはありません。


<a id="thread_safety"></a>

### スレッドセーフ性

ほとんどの GLFW 関数はメインスレッド（main を呼び出すスレッド）からのみ呼び出せますが、ライブラリの初期化後は任意のスレッドから呼び出せる関数もあります。初期化前はライブラリ全体がスレッドセーフではありません。

GLFW の各関数のリファレンスドキュメントには、メインスレッドに制限されるかどうかが記載されています。

1つまたは複数のプラットフォームの制限により、初期化、終了、イベント処理、およびウィンドウ、カーソル、OpenGL コンテキスト、OpenGL ES コンテキストの作成と破棄は、すべてメインスレッドに制限されます。

イベント処理はメインスレッドで行わなければならないため、エラーコールバック以外のすべてのコールバックは、そのスレッド上でのみ呼び出されます。どの GLFW 関数もエラーを生成する可能性があるため、エラーコールバックは任意のスレッドで呼び出される可能性があります。

エラーコードと説明は任意のスレッドから取得できます。

 - [glfwGetError](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga944986b4ec0b928d488141f92982aa18)

空イベントは任意のスレッドから送信できます。

 - [glfwPostEmptyEvent](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab5997a25187e9fd5c6f2ecbbc8dfd7e9)

ウィンドウのユーザーポインターとクローズフラグは任意のスレッドから読み書きできますが、GLFW はこれらを同期しません。

 - [glfwGetWindowUserPointer](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae77a4add0d2023ca21ff1443ced01653)
 - [glfwSetWindowUserPointer](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3d2fc6026e690ab31a13f78bc9fd3651)
 - [glfwWindowShouldClose](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga24e02fbfefbb81fc45320989f8140ab5)
 - [glfwSetWindowShouldClose](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708)

OpenGL および OpenGL ES コンテキストを扱う次の関数は任意のスレッドから呼び出せますが、GLFW はウィンドウオブジェクトを同期しません。

 - [glfwMakeContextCurrent](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157)
 - [glfwGetCurrentContext](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#gad94e80185397a6cf5fe2ab30567af71c)
 - [glfwSwapBuffers](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14)
 - [glfwSwapInterval](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed)
 - [glfwExtensionSupported](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa)
 - [glfwGetProcAddress](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163)

生のタイマー関数は任意のスレッドから呼び出せます。

 - [glfwGetTimerFrequency](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443)
 - [glfwGetTimerValue](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa)

通常のタイマーは任意のスレッドから使えますが、GLFW はタイマーのオフセットの読み書きを同期しません。

 - [glfwGetTime](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a)
 - [glfwSetTime](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0)

ライブラリのバージョン情報は任意のスレッドから取得できます。

 - [glfwGetVersion](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197)
 - [glfwGetVersionString](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga026abd003c8e6501981ab1662062f1c0)

プラットフォーム情報は任意のスレッドから取得できます。

 - [glfwPlatformSupported](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed)
 - [glfwGetPlatform](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga6d6a983d38bd4e8fd786d7a9061d399e)

Vulkan 関連の関数はすべて任意のスレッドから呼び出せます。

 - [glfwVulkanSupported](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b)
 - [glfwGetRequiredInstanceExtensions](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6)
 - [glfwGetInstanceProcAddress](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gadf228fac94c5fd8f12423ec9af9ff1e9)
 - [glfwGetPhysicalDevicePresentationSupport](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#gaff3823355cdd7e2f3f9f4d9ea9518d92)
 - [glfwCreateWindowSurface](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga1a24536bec3f80b08ead18e28e6ae965)

GLFW が内部で同期オブジェクトを使うのは、スレッド単位のコンテキスト状態とエラー状態を管理するためだけです。追加の同期はアプリケーション側で行います。

現在任意のスレッドから呼び出せる関数は、今後も常にその性質を保ちます。一方、現在メインスレッドに制限されている関数は、将来のリリースで任意のスレッドから呼び出せるよう更新される可能性があります。


<a id="compatibility"></a>

### バージョン互換性

GLFW は[セマンティックバージョニング](https://semver.org/)を使います。これにより、以前のマイナーバージョンの API に対するソースとバイナリの後方互換性が保証されます。つまり、より新しいバージョンのライブラリへ置き換えても、既存のプログラムは引き続きコンパイルでき、既存のバイナリも引き続き実行できます。

関数または定数が一度追加されると、その関数のシグネチャまたは定数の値は、GLFW の次のメジャーバージョンまで変更されません。メジャーバージョン間では、いかなる互換性も保証されません。

ドキュメントに記載されていない動作は、記載されるまでいつでも変更される可能性があります。

リファレンスドキュメントと実装が異なる場合、ほぼ常にリファレンスドキュメントが優先され、実装が次のリリースで修正されます。また、ガイドの記述よりもリファレンスドキュメントが優先されます。


<a id="event_order"></a>

### イベントの順序

関連するイベントが到着する順序は、プラットフォーム間で一貫することが保証されません。例外は合成されたキーとマウスボタンの解放イベントで、これらは常にウィンドウのフォーカス喪失イベントの後に配信されます。


<a id="intro_version"></a>

## バージョン管理

GLFW は、アプリケーションのコンパイル対象となった GLFW のバージョンと、現在実行に使っているバージョンを識別する仕組みを提供します。GLFW を動的に読み込む場合（単に動的リンクする場合ではありません）は、これを使ってライブラリバイナリがアプリケーションと互換性を持つか検証できます。


<a id="intro_version_compile"></a>

### コンパイル時のバージョン

GLFW のコンパイル時バージョンは、GLFW ヘッダーの `GLFW_VERSION_MAJOR`、`GLFW_VERSION_MINOR`、`GLFW_VERSION_REVISION` マクロで提供されます。

```c
printf("Compiled against GLFW %i.%i.%i\n",
       GLFW_VERSION_MAJOR,
       GLFW_VERSION_MINOR,
       GLFW_VERSION_REVISION);
```


<a id="intro_version_runtime"></a>

### 実行時のバージョン

実行時バージョンは [glfwGetVersion](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197) で取得できます。この関数は GLFW が初期化済みかどうかにかかわらず呼び出せます。

```c
int major, minor, revision;
glfwGetVersion(&major, &minor, &revision);

printf("Running against GLFW %i.%i.%i\n", major, minor, revision);
```


<a id="intro_version_string"></a>

### バージョン文字列

GLFW 3 は、バージョン、プラットフォーム、コンパイラ、プラットフォーム固有のコンパイル時オプションを説明する、コンパイル時に生成されたバージョン文字列も提供します。これは主にバグ報告の提出を目的としており、バイナリでどのコードパスが有効かを開発者が確認できるようにします。

バージョン文字列は [glfwGetVersionString](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga026abd003c8e6501981ab1662062f1c0) が返します。この関数は GLFW が初期化済みかどうかにかかわらず呼び出せます。

GLFW ライブラリのバージョンを解析するために、__バージョン文字列を使わないでください。__ 実行中のライブラリバイナリのバージョンは、[glfwGetVersion](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga9f8ffaacf3c269cc48eafbf8b9b71197) 関数ですでに取得できます。

サポートされるプラットフォームを解析するために、__バージョン文字列を使わないでください。__ [glfwPlatformSupported](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed) 関数でプラットフォームのサポートを照会できます。

__GLFW 3.4:__ [実行時のプラットフォーム選択](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#platform)の追加に対応するため、この文字列の形式が変更されました。

文字列の形式は次のとおりです。

 - GLFW のバージョン
 - サポートされる各プラットフォームについて:
   - ウィンドウシステム API の名前
   - 該当する場合、ウィンドウシステム固有のコンテキスト作成 API の名前
 - 常にサポートされるコンテキスト作成 API である EGL と OSMesa の名前
 - その他のコンパイル時オプション、API、および（Windows の場合）使用したコンパイラ

たとえば GLFW 3.5 を MinGW-64 で Windows 用 DLL としてコンパイルすると、次のようなバージョン文字列になる場合があります。

```c
3.5.0 Win32 WGL Null EGL OSMesa MinGW-w64 DLL
```

Wayland と X11 の両方を有効にして GLFW を Linux 用の静的ライブラリとしてコンパイルすると、次のようなバージョン文字列になる場合があります。

```c
3.5.0 Wayland X11 GLX Null EGL OSMesa monotonic
```
