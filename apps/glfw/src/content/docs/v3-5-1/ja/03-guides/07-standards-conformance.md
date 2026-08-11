---
title: "標準への準拠"
description: "プラットフォームの標準および拡張機能の要件"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<a id="compat_guide"></a>

# 標準への準拠

このガイドでは、このバージョンの GLFW が使用するさまざまな API 拡張機能について説明します。ここに挙げるのは本質的には実装の詳細ですが、幅広いマシンへのアプリケーションの配布を予定している開発者にとって、極めて重要な情報でもあります。

このガイドの情報は GLFW API の一部ではなく、特定のマシン上でライブラリの一部の機能が動作するための前提条件にすぎません。この情報は GLFW の将来のバージョンで変更される可能性があり、そのような変更は API の破壊的変更とは見なされません。


<a id="compat_x11"></a>

## X11 の拡張機能、プロトコル、IPC 標準

GLFW はツールキットライブラリを介さず Xlib を直接使用するため、Unix 系システムで使われている多種多様なウィンドウマネージャーと適切に連携する責任を単独で負います。アプリケーションとウィンドウマネージャーがうまく連携できるように、X11 API の範囲外の動作を規定する多くの標準と慣例が策定されています。特に重要なのが [Inter-Client Communication Conventions Manual][ICCCM]（ICCCM）と [Extended Window Manager Hints][EWMH]（EWMH）です。

[ICCCM]: https://www.tronche.com/gui/x/icccm/
[EWMH]: https://standards.freedesktop.org/wm-spec/wm-spec-latest.html

GLFW は、枠のないウィンドウをサポートするために `_MOTIF_WM_HINTS` ウィンドウプロパティを使用します。実行中のウィンドウマネージャーがこのプロパティをサポートしていない場合、`GLFW_DECORATED` ヒントは効果を持ちません。

GLFW は、ユーザーが GLFW ウィンドウを閉じようとしたことを捕捉するために、ICCCM の `WM_DELETE_WINDOW` プロトコルを使用します。実行中のウィンドウマネージャーがこのプロトコルをサポートしていない場合、クローズコールバックは呼び出されません。

GLFW は EWMH の `_NET_WM_PING` プロトコルを使用します。これにより、アプリケーションがイベントの処理を停止するなどして応答しなくなったとき、ウィンドウマネージャーがユーザーへ通知できます。実行中のウィンドウマネージャーがこのプロトコルをサポートしていない場合、アプリケーションが停止してもユーザーには通知されません。

GLFW は、GLFW ウィンドウを全画面表示にするようウィンドウマネージャーへ伝えるために、EWMH の `_NET_WM_STATE_FULLSCREEN` ウィンドウ状態を使用します。実行中のウィンドウマネージャーがこの状態をサポートしていない場合、全画面ウィンドウが正しく動作しないことがあります。GLFW にはこの状態を利用できない場合のフォールバック処理がありますが、この点に関する動作はウィンドウマネージャーごとに多少異なります。

GLFW は、全画面表示の GLFW ウィンドウをリダイレクトしないようコンポジット型ウィンドウマネージャーへ伝えるために、EWMH の `_NET_WM_BYPASS_COMPOSITOR` ウィンドウプロパティを使用します。実行中のウィンドウマネージャーがコンポジット処理を使用していてもこのプロパティをサポートしていない場合、全画面ウィンドウでバッファを交換するたびに追加のコピー処理が行われることがあります。

GLFW は、ライブラリの終了後もクリップボードの文字列をユーザーが利用できるようにするため、[クリップボードマネージャープロトコル][ClipboardManager]を使用します。クリップボードマネージャーが実行されておらず、[glfwSetClipboardString](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd) でクリップボードの内容を設定した場合、ライブラリの終了時にクリップボードは空になります。

[clipboardManager]: https://www.freedesktop.org/wiki/ClipboardManager/

GLFW は、ファイルのドロップイベントを提供するために [X ドラッグアンドドロッププロトコル][XDND]を使用します。ドラッグ元のアプリケーションがこのプロトコルをサポートしていない場合、ドラッグアンドドロップは機能しません。

[XDND]: https://www.freedesktop.org/wiki/Specifications/XDND/

GLFW は、マルチモニターをサポートするために XRandR 1.3 拡張機能を使用します。実行中の X サーバーがこのバージョンの拡張機能をサポートしていない場合、マルチモニターサポートは機能せず、デスクトップ全体にまたがる単一のモニターだけが報告されます。

GLFW は、ガンマランプをサポートするために XRandR 1.3 および Xf86vidmode 拡張機能を使用します。実行中の X サーバーがこれらの一方または両方をサポートしていない場合、ガンマランプは機能しません。

GLFW は、キーボード入力を提供するために Xkb 拡張機能と検出可能な自動リピートを使用します。実行中の X サーバーがこの拡張機能をサポートしていない場合は、Xkb を使わないフォールバック経路が使用されます。

GLFW は、カーソルが無効なときに加速されていない生のマウス移動を提供するため、XInput2 拡張機能を使用します。実行中の X サーバーがこの拡張機能をサポートしていない場合は、通常の加速されたマウス移動が使用されます。

GLFW は、透過ウィンドウのフレームバッファをサポートするため、XRender 拡張機能とコンポジットマネージャーの両方を使用します。実行中の X サーバーがこの拡張機能をサポートしていないか、コンポジットマネージャーが実行されていない場合、`GLFW_TRANSPARENT_FRAMEBUFFER` フレームバッファヒントは効果を持ちません。

GLFW は、標準カーソル形状の種類を増やすため、Xcursor 拡張機能と freedesktop のカーソル規約の両方を使用します。実行中の X サーバーがこの拡張機能をサポートしていないか、現在のカーソルテーマがこの規約をサポートしていない場合、`GLFW_RESIZE_NWSE_CURSOR`、`GLFW_RESIZE_NESW_CURSOR`、`GLFW_NOT_ALLOWED_CURSOR` の各形状は利用できず、ほかの形状にも従来の画像が使われることがあります。


<a id="compat_wayland"></a>

## Wayland のプロトコルと IPC 標準

GLFW はツールキットライブラリを介さず libwayland を直接使用するため、Unix 系システムで使われているすべてのコンポジターと適切に連携する責任を単独で負います。ほとんどの機能はコアプロトコルによって提供されます。カーソルサポートは libwayland-cursor ヘルパーライブラリ、EGL 統合は libwayland-egl、キーボード処理は [libxkbcommon](https://xkbcommon.org/) によって提供されます。さらに GLFW は、コンポジターがサポートしている場合、特定の機能を実装するためにいくつかの追加 Wayland プロトコルを使用します。

GLFW は、キー入力とテキスト入力をサポートするために xkbcommon 0.5.0 を使用します。それより前のバージョンはサポートされていません。

GLFW は、より適切なウィンドウ管理を提供するために [xdg-shell][] プロトコルを使用します。GLFW がウィンドウを表示するには、このプロトコルが必須です。

[xdg-shell]: https://wayland.app/protocols/xdg-shell

GLFW は、無効化されたカーソルを実装するために、[relative-pointer-unstable-v1][] プロトコルと [pointer-constraints-unstable-v1][] プロトコルを併用します。実行中のコンポジターがこれらのプロトコルを両方ともサポートしていない場合、カーソルを無効にしても効果はありません。

[relative-pointer-unstable-v1]: https://wayland.app/protocols/relative-pointer-unstable-v1
[pointer-constraints-unstable-v1]: https://wayland.app/protocols/pointer-constraints-unstable-v1

GLFW は、スクリーンセーバーの起動を禁止するために [idle-inhibit-unstable-v1][] プロトコルを使用します。実行中のコンポジターがこのプロトコルをサポートしていない場合、全画面ウィンドウであってもスクリーンセーバーが起動することがあります。

[idle-inhibit-unstable-v1]: https://wayland.app/protocols/idle-inhibit-unstable-v1

GLFW は、利用できる場合、ウィンドウ装飾に [libdecor][] ライブラリを使用します。これにより、サーバー側の装飾（ウィンドウマネージャーが描画する装飾）をサポートしていないデスクトップシステムでも、高品質なクライアント側の装飾（アプリケーションが描画する装飾）が提供されます。libdecor と xdg-decoration のどちらも提供しないシステムでは、非常に基本的なウィンドウ装飾が提供されます。この装飾にはウィンドウタイトルやキャプションボタンは含まれません。

[libdecor]: https://gitlab.freedesktop.org/libdecor/libdecor

GLFW は、ウィンドウの周囲に装飾を描画するよう要求するために [xdg-decoration-unstable-v1][] プロトコルを使用します。このプロトコルは wayland-protocols 1.15 の一部であり、ビルド時に必須です。実行中のコンポジターがこのプロトコルをサポートしていない場合、GLFW 自身が [viewporter][] プロトコルとサブサーフェスを併用して、非常に簡素なフレームを描画します。実行中のコンポジターがこれらのプロトコルもサポートしていない場合、ウィンドウの周囲に装飾は描画されません。

[xdg-decoration-unstable-v1]: https://wayland.app/protocols/xdg-decoration-unstable-v1
[viewporter]: https://wayland.app/protocols/viewporter

GLFW は、ウィンドウのフォーカス要求と注意喚起要求を実装するために [xdg-activation-v1][] プロトコルを使用します。実行中のコンポジターがこのプロトコルをサポートしていない場合、ウィンドウのフォーカス要求と注意喚起要求は何も行いません。

[xdg-activation-v1]: https://wayland.app/protocols/xdg-activation-v1

GLFW は、フレームバッファのきめ細かなスケーリングを実装するために [fractional-scale-v1][] プロトコルを使用します。実行中のコンポジターがこのプロトコルをサポートしていない場合、[GLFW_SCALE_FRAMEBUFFER](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa5a9c6b4722670fd33d6e8a88f2e21bc) ウィンドウヒントがフレームバッファに適用できる倍率は整数に限られます。通常は、実際の倍率以上となる最小の整数が使われます。

[fractional-scale-v1]: https://wayland.app/protocols/fractional-scale-v1


<a id="compat_glx"></a>

## GLX の拡張機能

GLX API は、X Window System を使用する Unix 系システムで OpenGL コンテキストを作成するために使われる既定の API です。

GLFW は、フレームバッファのピクセルフォーマットを列挙して選択するために、GLX 1.3 の `GLXFBConfig` 関数を使用します。GLX 1.3 がサポートされていない場合、[glfwInit](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e) は失敗します。

GLFW は、垂直帰線同期（_vsync_）を提供するために、`GLX_MESA_swap_control,`、`GLX_EXT_swap_control`、`GLX_SGI_swap_control` の各拡張機能をこの優先順で使用します。これらの拡張機能をどれも利用できない場合、[glfwSwapInterval](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed) を呼び出しても効果はありません。

GLFW は、マルチサンプリングによるアンチエイリアスを備えたコンテキストを作成するために、`GLX_ARB_multisample` 拡張機能を使用します。この拡張機能を利用できない場合、`GLFW_SAMPLES` ヒントは効果を持ちません。

GLFW は、OpenGL 2.1 以前のコンテキストを作成する場合でも、利用できるときは `GLX_ARB_create_context` 拡張機能を使用します。この拡張機能を利用できない場合、`GLFW_CONTEXT_VERSION_MAJOR` と `GLFW_CONTEXT_VERSION_MINOR` の各ヒントは部分的にしかサポートされず、`GLFW_CONTEXT_DEBUG` ヒントは効果を持ちません。また、`GLFW_OPENGL_PROFILE` または `GLFW_OPENGL_FORWARD_COMPAT` ヒントを `GLFW_TRUE` に設定すると、[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) は失敗します。

GLFW は、コンテキストプロファイルをサポートするために `GLX_ARB_create_context_profile` 拡張機能を使用します。この拡張機能を利用できない場合、`GLFW_OPENGL_PROFILE` ヒントを `GLFW_OPENGL_ANY_PROFILE` 以外に設定するか、`GLFW_CLIENT_API` を `GLFW_OPENGL_API` または `GLFW_NO_API` 以外に設定すると、[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) は失敗します。

GLFW は、コンテキストを解放（カレントではない状態に）したときにフラッシュするかどうかを制御するために、`GLX_ARB_context_flush_control` 拡張機能を使用します。この拡張機能を利用できない場合、`GLFW_CONTEXT_RELEASE_BEHAVIOR` ヒントは効果を持たず、コンテキストは解放時に必ずフラッシュされます。

GLFW は、sRGB フレームバッファをサポートするために `GLX_ARB_framebuffer_sRGB` と `GLX_EXT_framebuffer_sRGB` の各拡張機能を使用します。これらの拡張機能を両方とも利用できない場合、`GLFW_SRGB_CAPABLE` ヒントは効果を持ちません。


<a id="compat_wgl"></a>

## WGL の拡張機能

WGL API は、Microsoft Windows および Wine などの Win32 API 実装で OpenGL コンテキストを作成するために使用されます。

GLFW は、以下に挙げるほかのすべての WGL 拡張機能が存在するかを確認するために、`WGL_EXT_extension_string` または `WGL_ARB_extension_string` 拡張機能を使用します。両方を利用できる場合は EXT の方が優先されます。どちらも利用できない場合、ほかの拡張機能は使用されず、コンテキスト作成に関係する GLFW の多くの機能は、使用しても効果を持たないかエラーを発生させます。

GLFW は、垂直帰線同期（_vsync_）を提供するために `WGL_EXT_swap_control` 拡張機能を使用します。この拡張機能を利用できない場合、[glfwSwapInterval](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed) を呼び出しても効果はありません。

GLFW は、マルチサンプリングによるアンチエイリアスを備えたコンテキストを作成するために、`WGL_ARB_pixel_format` と `WGL_ARB_multisample` の各拡張機能を使用します。これらの拡張機能を利用できない場合、`GLFW_SAMPLES` ヒントは効果を持ちません。

GLFW は、OpenGL 2.1 以前のコンテキストを作成する場合でも、利用できるときは `WGL_ARB_create_context` 拡張機能を使用します。この拡張機能を利用できない場合、`GLFW_CONTEXT_VERSION_MAJOR` と `GLFW_CONTEXT_VERSION_MINOR` の各ヒントは部分的にしかサポートされず、`GLFW_CONTEXT_DEBUG` ヒントは効果を持ちません。また、`GLFW_OPENGL_PROFILE` または `GLFW_OPENGL_FORWARD_COMPAT` ヒントを `GLFW_TRUE` に設定すると、[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) は失敗します。

GLFW は、コンテキストプロファイルをサポートするために `WGL_ARB_create_context_profile` 拡張機能を使用します。この拡張機能を利用できない場合、`GLFW_OPENGL_PROFILE` ヒントを `GLFW_OPENGL_ANY_PROFILE` 以外に設定すると、[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) は失敗します。

GLFW は、コンテキストを解放（カレントではない状態に）したときにフラッシュするかどうかを制御するために、`WGL_ARB_context_flush_control` 拡張機能を使用します。この拡張機能を利用できない場合、`GLFW_CONTEXT_RELEASE_BEHAVIOR` ヒントは効果を持たず、コンテキストは解放時に必ずフラッシュされます。

GLFW は、sRGB フレームバッファをサポートするために `WGL_ARB_framebuffer_sRGB` と `WGL_EXT_framebuffer_sRGB` の各拡張機能を使用します。これらの拡張機能を両方とも利用できない場合、`GLFW_SRGB_CAPABLE` ヒントは効果を持ちません。


<a id="compat_osx"></a>

## macOS 上の OpenGL

macOS はバージョン 14 の時点でも OpenGL を提供していますが、Apple によって非推奨とされています。この API は引き続き利用できるものの、十分に保守されておらず、新たな問題が頻繁に生じます。現在のシステムでは OpenGL が Metal 上に実装されており、完全にはスレッドセーフではありません。

macOS は OpenGL のステレオレンダリングをサポートしていません。`GLFW_STEREO` ヒントを true に設定すると、OpenGL コンテキストの作成は必ず失敗します。

macOS は前方互換な OpenGL コアプロファイルコンテキストだけをサポートしていますが、GLFW 3.4 以降は `GLFW_OPENGL_FORWARD_COMPAT` ヒントが無視されます。このヒントを false（既定値）に設定しても、利用可能であれば前方互換コンテキストが返されます。

macOS は、OpenGL のデバッグコンテキスト、エラーなしコンテキスト、堅牢性をサポートしていません。`GLFW_CONTEXT_DEBUG`、`GLFW_CONTEXT_NO_ERROR`、`GLFW_CONTEXT_ROBUSTNESS` の各ヒントは無視され、これらの機能を持たないコンテキストが返されます。

macOS は、OpenGL コンテキストをカレントではない状態にしてもフラッシュしません。`GLFW_CONTEXT_RELEASE_BEHAVIOR` ヒントは無視され、解放時の動作は常に `GLFW_RELEASE_BEHAVIOR_NONE` と同等になります。コンテキストをフラッシュする必要がある場合は、カレントではない状態にする前に `glFlush` を呼び出してください。


<a id="compat_vulkan"></a>

## Vulkan ローダーと API

既定では、GLFW は macOS を除くすべてのプラットフォームで、システム全体の標準 Vulkan ローダーを使用して Vulkan API にアクセスします。このローダーは、グラフィックスドライバーと Vulkan SDK のどちらによってもインストールされます。ローダーまたは最低限機能する ICD が少なくとも 1 つ存在しない場合、[glfwVulkanSupported](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga2e7f30931e02464b5bc8d0d4b6f9fe2b) は `GLFW_FALSE` を返し、そのほかの Vulkan 関連関数はすべて [GLFW_API_UNAVAILABLE](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e) エラーで失敗します。


<a id="compat_wsi"></a>

## Vulkan WSI 拡張機能

Vulkan WSI 拡張機能は、サポートされるすべてのプラットフォームで GLFW ウィンドウ用の Vulkan サーフェスを作成するために使用されます。

GLFW は、Microsoft Windows 上でサーフェスを作成するために `VK_KHR_surface` と `VK_KHR_win32_surface` の各拡張機能を使用します。これらのいずれかを利用できない場合、[glfwGetRequiredInstanceExtensions](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6) は空のリストを返し、ウィンドウサーフェスの作成は失敗します。

GLFW は、macOS 上でサーフェスを作成するために `VK_KHR_surface` と、`VK_MVK_macos_surface` または `VK_EXT_metal_surface` のいずれかの拡張機能を使用します。必要な拡張機能を利用できない場合、[glfwGetRequiredInstanceExtensions](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6) は空のリストを返し、ウィンドウサーフェスの作成は失敗します。

GLFW は、X11 上でサーフェスを作成するために `VK_KHR_surface` と、`VK_KHR_xlib_surface` または `VK_KHR_xcb_surface` のいずれかの拡張機能を使用します。`VK_KHR_surface` を利用できないか、`VK_KHR_xlib_surface` と `VK_KHR_xcb_surface` の両方を利用できない場合、[glfwGetRequiredInstanceExtensions](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6) は空のリストを返し、ウィンドウサーフェスの作成は失敗します。

GLFW は、Wayland 上でサーフェスを作成するために `VK_KHR_surface` と `VK_KHR_wayland_surface` の各拡張機能を使用します。これらのいずれかを利用できない場合、[glfwGetRequiredInstanceExtensions](/docs/glfw/v3-5-1/ja/04-reference/07-vulkan-support-reference/#ga99ad342d82f4a3421e2864978cb6d1d6) は空のリストを返し、ウィンドウサーフェスの作成は失敗します。
