---
title: "ウィンドウガイド"
description: "ウィンドウの作成、プロパティ、イベント"
---

<a id="window_guide"></a>

# ウィンドウガイド

このガイドでは、ウィンドウに関連する GLFW の関数を紹介します。この分類の特定の関数について詳しくは、[window](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/)を参照してください。GLFW のほかの領域についてもガイドがあります。

 - [intro_guide](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_guide)
 - [context_guide](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_guide)
 - [vulkan_guide](/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_guide)
 - [monitor_guide](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide)
 - [input_guide](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_guide)


<a id="window_object"></a>

## ウィンドウオブジェクト

[GLFWwindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242) オブジェクトは、ウィンドウとコンテキストの両方を内包します。[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) で作成し、[glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2) で破棄します。残っている場合は [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) でも破棄されます。ウィンドウとコンテキストは分離できない形で結び付いているため、オブジェクトポインターはコンテキストとウィンドウの両方のハンドルとして使われます。

ウィンドウ関連の各コールバックへ渡されるイベントストリームを確認するには、`events` テストプログラムを実行してください。


<a id="window_creation"></a>

### ウィンドウを作成する

ウィンドウとその OpenGL または OpenGL ES コンテキストは [glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) で作成します。この関数は作成したウィンドウオブジェクトのハンドルを返します。たとえば、次のコードは 640×480 のウィンドウモードのウィンドウを作成します。

```c
GLFWwindow* window = glfwCreateWindow(640, 480, "My Title", NULL, NULL);
```

ウィンドウの作成に失敗すると `NULL` が返るため、戻り値を確認する必要があります。

ウィンドウハンドルは、ウィンドウ関連のすべての関数へ渡します。また、すべての入力イベントとともに渡されるため、イベントハンドラーはどのウィンドウがイベントを受け取ったか判断できます。


<a id="window_full_screen"></a>

#### フルスクリーンウィンドウ

フルスクリーンウィンドウを作成するには、ウィンドウが使うモニターを指定する必要があります。多くの場合は、ユーザーのプライマリモニターが適切です。モニターの取得について詳しくは、[monitor_monitors](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_monitors)を参照してください。

```c
GLFWwindow* window = glfwCreateWindow(640, 480, "My Title", glfwGetPrimaryMonitor(), NULL);
```

フルスクリーンウィンドウはモニターの表示領域全体を覆い、境界線や装飾を持ちません。

ウィンドウモードのウィンドウは、[glfwSetWindowMonitor](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7) でモニターを設定するとフルスクリーンにできます。フルスクリーンウィンドウは、同じ関数でモニターの設定を解除するとウィンドウモードにできます。

[GLFWvidmode](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga902c2816ac9b34b757282daab59b2565) 構造体の各フィールドは関数引数またはウィンドウヒントに対応し、組み合わせてそのウィンドウの_希望するビデオモード_を構成します。ウィンドウが入力フォーカスを持つ間、希望するビデオモードに最も近い、サポートされているビデオモードが選択したモニターに設定されます。ビデオモードの取得について詳しくは、[monitor_modes](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_modes)を参照してください。

ビデオモードのフィールド | 対応先
------------------------- | ------
GLFWvidmode.width | [glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) の `width` 引数
GLFWvidmode.height | [glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) の `height` 引数
GLFWvidmode.redBits | [GLFW_RED_BITS](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RED_BITS) ヒント
GLFWvidmode.greenBits | [GLFW_GREEN_BITS](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_GREEN_BITS) ヒント
GLFWvidmode.blueBits | [GLFW_BLUE_BITS](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_BLUE_BITS) ヒント
GLFWvidmode.refreshRate | [GLFW_REFRESH_RATE](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_REFRESH_RATE) ヒント

フルスクリーンウィンドウを作成した後は、[glfwSetWindowMonitor](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7) で解像度、リフレッシュレート、モニターを変更できます。解像度だけを変更する場合は [glfwSetWindowSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb) も使えます。いずれの場合も、新しいビデオモードは [glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) が選ぶビデオモードと同じ方法で選択されます。ウィンドウが OpenGL または OpenGL ES コンテキストを持つ場合、そのコンテキストは影響を受けません。

デフォルトでは、ウィンドウが入力フォーカスを失うと、ユーザーがデスクトップへ戻れるように、モニターの元のビデオモードが復元され、ウィンドウがアイコン化されます。複数のモニターをフルスクリーンウィンドウで同時に覆う場合などは、[GLFW_AUTO_ICONIFY](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_hint) ウィンドウヒントでこの動作を無効にできます。

モニターが切断されると、そのモニター上でフルスクリーンになっているすべてのウィンドウはウィンドウモードへ切り替わります。詳しくは [monitor_event](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_event)を参照してください。


<a id="window_windowed_full_screen"></a>

#### 「ウィンドウ化フルスクリーン」ウィンドウ

希望するビデオモードに最も近いものが現在のビデオモードであれば、ビデオモードは変更されません。これによりウィンドウ作成が高速になり、アプリケーションの切り替えもはるかに滑らかになります。これは_ウィンドウ化フルスクリーン_または_ボーダーレスフルスクリーン_ウィンドウと呼ばれることがあり、フルスクリーンウィンドウとして扱われます。このようなウィンドウを作成するには、現在のビデオモードを要求します。

```c
const GLFWvidmode* mode = glfwGetVideoMode(monitor);

glfwWindowHint(GLFW_RED_BITS, mode->redBits);
glfwWindowHint(GLFW_GREEN_BITS, mode->greenBits);
glfwWindowHint(GLFW_BLUE_BITS, mode->blueBits);
glfwWindowHint(GLFW_REFRESH_RATE, mode->refreshRate);

GLFWwindow* window = glfwCreateWindow(mode->width, mode->height, "My Title", monitor, NULL);
```

これは、ウィンドウモードからフルスクリーンへ切り替えるウィンドウでも機能します。

```c
const GLFWvidmode* mode = glfwGetVideoMode(monitor);

glfwSetWindowMonitor(window, monitor, 0, 0, mode->width, mode->height, mode->refreshRate);
```

[glfwGetVideoMode](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5) はモニターの_現在の_ビデオモードを返すことに注意してください。そのモニター上にある既存のフルスクリーンウィンドウをウィンドウ化フルスクリーンにする場合は、あらかじめデスクトップの解像度を保存しておく必要があります。


<a id="window_destruction"></a>

### ウィンドウを破棄する

ウィンドウが不要になったら、[glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2) で破棄します。

```c
glfwDestroyWindow(window);
```

ウィンドウの破棄は常に成功します。実際に破棄する前にすべてのコールバックが解除されるため、そのウィンドウへ以後イベントが配信されることはありません。[glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) の呼び出し時に残っているすべてのウィンドウも破棄されます。

フルスクリーンウィンドウを破棄すると、モニターの元のビデオモードは復元されますが、ガンマランプは変更されたままです。


<a id="window_hints"></a>

### ウィンドウ作成ヒント

ウィンドウとコンテキストを作成する前に設定できるヒントがいくつかあります。ウィンドウ自体に影響するものも、フレームバッファまたはコンテキストに影響するものもあります。ライブラリを [glfwInit](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e) で初期化するたびに、これらのヒントはデフォルト値へ設定されます。整数値のヒントは [glfwWindowHint](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033)、文字列値のヒントは [glfwWindowHintString](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f) で個別に設定できます。[glfwDefaultWindowHints](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a) を使うと、すべてを一度にデフォルト値へ戻せます。

一部のヒントはプラットフォーム固有です。どのプラットフォームでも常に設定できますが、対応するプラットフォームだけに影響し、ほかでは無視されます。設定にプラットフォーム固有のヘッダーや呼び出しは必要ありません。

> **注:** 指定した属性を持たせるウィンドウとコンテキストを作成する前に、ウィンドウヒントを設定する必要があります。ヒントは [glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) への追加引数として機能します。


<a id="window_hints_hard"></a>

#### ハード制約とソフト制約

一部のウィンドウヒントはハード制約です。ウィンドウとコンテキストの作成を成功させるには、利用可能な機能と_正確に_一致しなければなりません。ハード制約ではないヒントは可能な限り近いものと照合されますが、作成されるコンテキストとフレームバッファは、ヒントで要求した内容と異なる可能性があります。

次のヒントは常にハード制約です。

- [GLFW_STEREO](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_STEREO)
- [GLFW_DOUBLEBUFFER](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DOUBLEBUFFER)
- [GLFW_CLIENT_API](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CLIENT_API_hint)
- [GLFW_CONTEXT_CREATION_API](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_CONTEXT_CREATION_API_hint)

次の追加ヒントは、OpenGL コンテキストを要求する場合はハード制約ですが、OpenGL ES コンテキストを要求する場合は無視されます。

- [GLFW_OPENGL_FORWARD_COMPAT](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_FORWARD_COMPAT_hint)
- [GLFW_OPENGL_PROFILE](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_hint)


<a id="window_hints_wnd"></a>

#### ウィンドウ関連のヒント

<a id="GLFW_RESIZABLE_hint"></a>

__GLFW_RESIZABLE__ は、ウィンドウモードのウィンドウを_ユーザーが_サイズ変更できるかどうかを指定します。[glfwSetWindowSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb) 関数を使えば、引き続きウィンドウのサイズを変更できます。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。フルスクリーンウィンドウと装飾のないウィンドウでは、このヒントは無視されます。

<a id="GLFW_VISIBLE_hint"></a>

__GLFW_VISIBLE__ は、ウィンドウモードのウィンドウを最初から表示するかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。フルスクリーンウィンドウでは無視されます。

<a id="GLFW_DECORATED_hint"></a>

__GLFW_DECORATED__ は、ウィンドウモードのウィンドウに境界線や閉じるボタンなどのウィンドウ装飾を付けるかどうかを指定します。装飾のないウィンドウをユーザーがサイズ変更することはできませんが、一部のプラットフォームでは引き続きクローズイベントを発生させられます。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。フルスクリーンウィンドウでは無視されます。

<a id="GLFW_FOCUSED_hint"></a>

__GLFW_FOCUSED__ は、作成時にウィンドウモードのウィンドウへ入力フォーカスを与えるかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。フルスクリーンウィンドウと最初から非表示のウィンドウでは無視されます。

<a id="GLFW_AUTO_ICONIFY_hint"></a>

__GLFW_AUTO_ICONIFY__ は、フルスクリーンウィンドウが入力フォーカスを失ったときに、自動的にアイコン化して以前のビデオモードを復元するかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。ウィンドウモードのウィンドウでは無視されます。

<a id="GLFW_FLOATING_hint"></a>

__GLFW_FLOATING__ は、ウィンドウモードのウィンドウをほかの通常のウィンドウより前面に浮かせるかどうかを指定します。これは topmost または always-on-top とも呼ばれます。主にデバッグ目的の機能であり、正しいフルスクリーンウィンドウの実装には使えません。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。フルスクリーンウィンドウでは無視されます。

<a id="GLFW_MAXIMIZED_hint"></a>

__GLFW_MAXIMIZED__ は、ウィンドウモードのウィンドウを最大化した状態で作成するかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。フルスクリーンウィンドウでは無視されます。

<a id="GLFW_CENTER_CURSOR_hint"></a>

__GLFW_CENTER_CURSOR__ は、新しく作成したフルスクリーンウィンドウの中央へカーソルを移動するかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。ウィンドウモードのウィンドウでは無視されます。

<a id="GLFW_TRANSPARENT_FRAMEBUFFER_hint"></a>

__GLFW_TRANSPARENT_FRAMEBUFFER__ は、ウィンドウのフレームバッファを透明にするかどうかを指定します。有効であり、システムがサポートしている場合、ウィンドウのフレームバッファのアルファチャンネルを使って、フレームバッファと背景を合成します。ウィンドウ装飾には影響しません。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。

<a id="GLFW_FOCUS_ON_SHOW_hint"></a>

__GLFW_FOCUS_ON_SHOW__ は、[glfwShowWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66) の呼び出し時にウィンドウへ入力フォーカスを与えるかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。

<a id="GLFW_SCALE_TO_MONITOR"></a>

__GLFW_SCALE_TO_MONITOR__ は、[コンテンツスケール](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_scale)の変化に基づいてウィンドウのコンテンツ領域をサイズ変更するかどうかを指定します。コンテンツスケールは、ユーザーのシステム全体の設定変更や、異なるスケール設定を持つモニターへのウィンドウ移動によって変化します。

このヒントが効果を持つのは、Windows や X11 のようにスクリーン座標とピクセルが常に 1:1 で対応するプラットフォームだけです。macOS などでは、フレームバッファの解像度がウィンドウサイズとは独立して変化できます。

<a id="GLFW_SCALE_FRAMEBUFFER_hint"></a>
<a id="GLFW_COCOA_RETINA_FRAMEBUFFER_hint"></a>

__GLFW_SCALE_FRAMEBUFFER__ は、[コンテンツスケール](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_scale)の変化に基づいてフレームバッファをサイズ変更するかどうかを指定します。コンテンツスケールは、ユーザーのシステム全体の設定変更や、異なるスケール設定を持つモニターへのウィンドウ移動によって変化します。

このヒントが効果を持つのは、macOS や Wayland のように、スクリーン座標をピクセル座標に対して拡大・縮小できるプラットフォームだけです。Windows や X11 などでは、フレームバッファとウィンドウのコンテンツ領域のサイズが常に 1:1 で対応します。

これは GLFW 3.4 で導入された新しい名前です。互換性のため、以前の `GLFW_COCOA_RETINA_FRAMEBUFFER` という名前も利用できます。どちらの名前も同じヒント値を変更します。

<a id="GLFW_MOUSE_PASSTHROUGH_hint"></a>

__GLFW_MOUSE_PASSTHROUGH__ は、ウィンドウをマウス入力に対して透過させ、すべてのマウスイベントを背後のウィンドウへ通過させるかどうかを指定します。装飾のないウィンドウでだけサポートされます。装飾のあるウィンドウで有効にした場合の動作は、プラットフォームごとに異なります。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。

<a id="GLFW_POSITION_X"></a>
<a id="GLFW_POSITION_Y"></a>

__GLFW_POSITION_X__ と __GLFW_POSITION_Y__ は、希望するウィンドウの初期位置を指定します。ウィンドウマネージャーはこれらの座標を変更または無視する可能性があります。一方または両方のヒントを `GLFW_ANY_POSITION` に設定すると、ウィンドウマネージャーがユーザーの希望に合うと判断した場所へウィンドウを配置します。指定できる値は、有効な任意のスクリーン座標と `GLFW_ANY_POSITION` です。


<a id="window_hints_fb"></a>

#### フレームバッファ関連のヒント

<a id="GLFW_RED_BITS"></a>
<a id="GLFW_GREEN_BITS"></a>
<a id="GLFW_BLUE_BITS"></a>
<a id="GLFW_ALPHA_BITS"></a>
<a id="GLFW_DEPTH_BITS"></a>
<a id="GLFW_STENCIL_BITS"></a>

__GLFW_RED_BITS__、__GLFW_GREEN_BITS__、__GLFW_BLUE_BITS__、__GLFW_ALPHA_BITS__、__GLFW_DEPTH_BITS__、__GLFW_STENCIL_BITS__ は、デフォルトフレームバッファの各成分について希望するビット深度を指定します。`GLFW_DONT_CARE` は、アプリケーションに希望がないことを意味します。

<a id="GLFW_ACCUM_RED_BITS"></a>
<a id="GLFW_ACCUM_GREEN_BITS"></a>
<a id="GLFW_ACCUM_BLUE_BITS"></a>
<a id="GLFW_ACCUM_ALPHA_BITS"></a>

__GLFW_ACCUM_RED_BITS__、__GLFW_ACCUM_GREEN_BITS__、__GLFW_ACCUM_BLUE_BITS__、__GLFW_ACCUM_ALPHA_BITS__ は、アキュムレーションバッファの各成分について希望するビット深度を指定します。`GLFW_DONT_CARE` は、アプリケーションに希望がないことを意味します。

アキュムレーションバッファは古い OpenGL の機能であり、新しいコードでは使うべきではありません。

<a id="GLFW_AUX_BUFFERS"></a>

__GLFW_AUX_BUFFERS__ は、希望する補助バッファ数を指定します。`GLFW_DONT_CARE` は、アプリケーションに希望がないことを意味します。

補助バッファは古い OpenGL の機能であり、新しいコードでは使うべきではありません。

<a id="GLFW_STEREO"></a>

__GLFW_STEREO__ は、OpenGL の立体視描画を使うかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。これはハード制約です。

<a id="GLFW_SAMPLES"></a>

__GLFW_SAMPLES__ は、マルチサンプリングに使う希望サンプル数を指定します。0 はマルチサンプリングを無効にします。`GLFW_DONT_CARE` は、アプリケーションに希望がないことを意味します。

<a id="GLFW_SRGB_CAPABLE"></a>

__GLFW_SRGB_CAPABLE__ は、フレームバッファを sRGB 対応にするかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。

> **注:** __OpenGL:__ 有効であり、システムがサポートしている場合、`GL_FRAMEBUFFER_SRGB` の有効・無効によって sRGB 描画が制御されます。デフォルトでは sRGB 描画は無効です。

> **注:** __OpenGL ES:__ 有効であり、システムがサポートしている場合、コンテキストでは sRGB 描画が常に有効になります。

<a id="GLFW_DOUBLEBUFFER"></a>
<a id="GLFW_DOUBLEBUFFER_hint"></a>

__GLFW_DOUBLEBUFFER__ は、フレームバッファをダブルバッファリングするかどうかを指定します。ほぼすべての場合にダブルバッファリングを使うべきです。これはハード制約です。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。


<a id="window_hints_mtr"></a>

#### モニター関連のヒント

<a id="GLFW_REFRESH_RATE"></a>

__GLFW_REFRESH_RATE__ は、フルスクリーンウィンドウについて希望するリフレッシュレートを指定します。`GLFW_DONT_CARE` は、利用可能な最高のリフレッシュレートを使うことを意味します。ウィンドウモードのウィンドウでは無視されます。


<a id="window_hints_ctx"></a>

#### コンテキスト関連のヒント

<a id="GLFW_CLIENT_API_hint"></a>

__GLFW_CLIENT_API__ は、どのクライアント API 向けのコンテキストを作成するかを指定します。指定できる値は `GLFW_OPENGL_API`、`GLFW_OPENGL_ES_API`、`GLFW_NO_API` です。これはハード制約です。

<a id="GLFW_CONTEXT_CREATION_API_hint"></a>

__GLFW_CONTEXT_CREATION_API__ は、コンテキストの作成に使うコンテキスト作成 API を指定します。指定できる値は `GLFW_NATIVE_CONTEXT_API`、`GLFW_EGL_CONTEXT_API`、`GLFW_OSMESA_CONTEXT_API` です。これはハード制約です。クライアント API を要求しない場合、このヒントは無視されます。

カレントコンテキストの作成に使われた API を把握していると仮定する[拡張ローダーライブラリ](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext_auto)は、このヒントを変更すると失敗する可能性があります。[glfwGetProcAddress](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga35f1837e6f666781842483937612f163) を介して関数を読み込ませることで解決できます。

> **注:** __Wayland:__ EGL API がネイティブのコンテキスト作成 API そのものであるため、このヒントは効果を持ちません。

> **注:** __X11:__ 一部の Linux システムでは、単一プロセス内でネイティブ API と EGL API の両方を介してコンテキストを作成すると、アプリケーションがセグメンテーションフォールトを起こします。現時点では、Linux 上でどちらか一方の API だけを使ってください。

> **注:** __OSMesa:__ 名前が示すように、OSMesa で作成した OpenGL コンテキストは、バッファを交換してもウィンドウの内容を更新しません。フレームバッファの内容を取得するには、OpenGL 関数、または OSMesa のネイティブアクセス関数 [glfwGetOSMesaColorBuffer](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga3b36e3e3dcf308b776427b6bd73cc132) と [glfwGetOSMesaDepthBuffer](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#ga6b64039ffc88a7a2f57f0956c0c75d53) を使ってください。

<a id="GLFW_CONTEXT_VERSION_MAJOR_hint"></a>
<a id="GLFW_CONTEXT_VERSION_MINOR_hint"></a>

__GLFW_CONTEXT_VERSION_MAJOR__ と __GLFW_CONTEXT_VERSION_MINOR__ は、作成するコンテキストが互換性を持たなければならないクライアント API のバージョンを指定します。これらのヒントの正確な動作は、要求するクライアント API によって異なります。

サポートされる最高バージョンのコンテキストをドライバーへ直接要求する方法はありませんが、これらのヒントのデフォルトであるバージョン 1.0 のコンテキストを要求すると、GLFW は最高バージョンの提供を試みます。

これらのヒントを、GLFW ヘッダーの API バージョンを提供する [GLFW_VERSION_MAJOR](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga6337d9ea43b22fc529b2bba066b4a576) および [GLFW_VERSION_MINOR](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaf80d40f0aea7088ff337606e9c48f7a3) と混同しないでください。

> **注:** __OpenGL:__ これらのヒントはハード制約ではありませんが、作成されたコンテキストの OpenGL バージョンが要求より低い場合、作成は失敗します。したがって、古いコードでデフォルトのバージョン 1.0 を使ってもまったく問題はなく、利用可能であればバージョン 3.0 以降の後方互換コンテキストを取得できます。

> **注:** __OpenGL ES:__ これらのヒントはハード制約ではありませんが、作成されたコンテキストの OpenGL ES バージョンが要求より低い場合、作成は失敗します。また、2.0 以降を要求した場合は OpenGL ES 1.x を返せず、その逆も同様です。これは、OpenGL ES 3.x は 2.0 と後方互換ですが、OpenGL ES 2.0 は 1.x と後方互換ではないためです。

> **注:** __macOS:__ OS が OpenGL バージョン 3.2 以降でサポートするのは、コアプロファイルのコンテキストだけです。バージョン 3.2 以降の OpenGL コンテキストを作成する前に、[GLFW_OPENGL_PROFILE](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_OPENGL_PROFILE_hint) ヒントを適切に設定しなければなりません。macOS は OpenGL 3.0 および 3.1 のコンテキストを一切サポートしません。

<a id="GLFW_OPENGL_FORWARD_COMPAT_hint"></a>

__GLFW_OPENGL_FORWARD_COMPAT__ は、OpenGL コンテキストを前方互換にするかどうかを指定します。前方互換コンテキストでは、要求した OpenGL バージョンで非推奨となったすべての機能が削除されます。要求する OpenGL バージョンが 3.0 以降の場合に限って使わなければなりません。OpenGL ES を要求する場合、このヒントは無視されます。

前方互換性について詳しくは、[OpenGL Reference Manual](https://www.opengl.org/registry/)を参照してください。

<a id="GLFW_CONTEXT_DEBUG_hint"></a>
<a id="GLFW_OPENGL_DEBUG_CONTEXT_hint"></a>

__GLFW_CONTEXT_DEBUG__ は、コンテキストをデバッグモードで作成するかどうかを指定します。デバッグモードでは、追加のエラー・診断通知機能が提供される可能性があります。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。

OpenGL および OpenGL ES のデバッグコンテキストについて詳しくは、[GL_KHR_debug][] 拡張を参照してください。

[GL_KHR_debug]: https://www.khronos.org/registry/OpenGL/extensions/KHR/KHR_debug.txt

> **注:** `GLFW_CONTEXT_DEBUG` は GLFW 3.4 で導入された新しい名前です。互換性のため、以前の `GLFW_OPENGL_DEBUG_CONTEXT` という名前も利用できます。

<a id="GLFW_OPENGL_PROFILE_hint"></a>

__GLFW_OPENGL_PROFILE__ は、どの OpenGL プロファイル向けのコンテキストを作成するかを指定します。指定できる値は `GLFW_OPENGL_CORE_PROFILE` または `GLFW_OPENGL_COMPAT_PROFILE` のいずれか、あるいは特定のプロファイルを要求しない `GLFW_OPENGL_ANY_PROFILE` です。3.2 より前の OpenGL バージョンを要求する場合は、`GLFW_OPENGL_ANY_PROFILE` を使わなければなりません。OpenGL ES を要求する場合、このヒントは無視されます。

OpenGL プロファイルについて詳しくは、[OpenGL Reference Manual](https://www.opengl.org/registry/)を参照してください。

<a id="GLFW_CONTEXT_ROBUSTNESS_hint"></a>

__GLFW_CONTEXT_ROBUSTNESS__ は、コンテキストが使う堅牢性戦略を指定します。`GLFW_NO_RESET_NOTIFICATION` または `GLFW_LOSE_CONTEXT_ON_RESET` のいずれか、あるいは堅牢性戦略を要求しない `GLFW_NO_ROBUSTNESS` を指定できます。

<a id="GLFW_CONTEXT_RELEASE_BEHAVIOR_hint"></a>

__GLFW_CONTEXT_RELEASE_BEHAVIOR__ は、コンテキストが使う解放時の動作を指定します。指定できる値は `GLFW_ANY_RELEASE_BEHAVIOR`、`GLFW_RELEASE_BEHAVIOR_FLUSH`、`GLFW_RELEASE_BEHAVIOR_NONE` のいずれかです。`GLFW_ANY_RELEASE_BEHAVIOR` の場合は、コンテキスト作成 API のデフォルト動作が使われます。`GLFW_RELEASE_BEHAVIOR_FLUSH` の場合は、コンテキストがカレントではなくなるたびにパイプラインをフラッシュします。`GLFW_RELEASE_BEHAVIOR_NONE` の場合は、解放時にパイプラインをフラッシュしません。

コンテキスト解放時の動作について詳しくは、[GL_KHR_context_flush_control][] 拡張を参照してください。

[GL_KHR_context_flush_control]: https://www.opengl.org/registry/specs/KHR/context_flush_control.txt

<a id="GLFW_CONTEXT_NO_ERROR_hint"></a>

__GLFW_CONTEXT_NO_ERROR__ は、コンテキストがエラーを生成するかどうかを指定します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。有効にすると、本来エラーが生成される状況で、代わりに未定義動作が発生します。

OpenGL および OpenGL ES のエラーなしモードについて詳しくは、[GL_KHR_no_error][] 拡張を参照してください。

[GL_KHR_no_error]: https://www.opengl.org/registry/specs/KHR/no_error.txt


<a id="window_hints_win32"></a>

#### Win32固有のヒント

<a id="GLFW_WIN32_KEYBOARD_MENU_hint"></a>

__GLFW_WIN32_KEYBOARD_MENU__ は、Alt+Space および Alt を押してから Space を押すキーボードショートカットでウィンドウメニューへアクセスできるようにするかどうかを指定します。ほかのプラットフォームでは無視されます。

<a id="GLFW_WIN32_SHOWDEFAULT_hint"></a>

__GLFW_WIN32_SHOWDEFAULT__ は、ウィンドウを初めて表示するときに、プログラムの `STARTUPINFO` で指定された方法で表示するかどうかを指定します。これはショートカットのプロパティウィンドウにある `Run` オプションと同じ情報です。プログラムの起動時にこの情報が指定されなかった場合、GLFW はこのヒントが `GLFW_FALSE` に設定されたものとして動作します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。ほかのプラットフォームでは無視されます。


<a id="window_hints_osx"></a>

#### macOS固有のヒント

<a id="GLFW_COCOA_FRAME_NAME_hint"></a>

__GLFW_COCOA_FRAME_NAME__ は、ウィンドウフレームの自動保存に使う UTF-8 エンコードの名前を指定します。空の場合、そのウィンドウではフレームの自動保存が無効になります。ほかのプラットフォームでは無視されます。[glfwWindowHintString](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f) で設定します。

<a id="GLFW_COCOA_GRAPHICS_SWITCHING_hint"></a>

__GLFW_COCOA_GRAPHICS_SWITCHING__ は、自動グラフィックス切り替えへ参加するかどうかを指定します。つまり、OpenGL コンテキストに統合 GPU を使い、必要に応じて GPU 間を移動することをシステムに許可するか、常に単体 GPU で実行するよう強制するかを指定します。統合 GPU と単体 GPU の両方を備えたシステムだけに影響します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。ほかのプラットフォームでは無視されます。

単純なプログラムやツールでは節電のために有効にするとよいでしょう。一方、ゲームなど高度な描画を行うアプリケーションでは無効のままにするとよいでしょう。

自動グラフィックス切り替えへ参加するバンドル形式のアプリケーションは、`Info.plist` の `NSSupportsAutomaticGraphicsSwitching` キーを `true` に設定し、そのことを宣言する必要もあります。


<a id="window_hints_wayland"></a>

#### Wayland固有のウィンドウヒント

<a id="GLFW_WAYLAND_APP_ID_hint"></a>

__GLFW_WAYLAND_APP_ID__ は、ウィンドウの Wayland app_id を指定します。ウィンドウマネージャーは、これを使ってウィンドウの種類を識別します。[glfwWindowHintString](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f) で設定します。


<a id="window_hints_x11"></a>

#### X11固有のウィンドウヒント

<a id="GLFW_X11_CLASS_NAME_hint"></a>
<a id="GLFW_X11_INSTANCE_NAME_hint"></a>

__GLFW_X11_CLASS_NAME__ と __GLFW_X11_INSTANCE_NAME__ は、ICCCM の `WM_CLASS` ウィンドウプロパティについて、希望する ASCII エンコードのクラス部分とインスタンス部分を指定します。効果を持たせるには、両方のヒントを空文字列以外に設定する必要があります。[glfwWindowHintString](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga8cb2782861c9d997bcf2dea97f363e5f) で設定します。


<a id="window_hints_values"></a>

#### サポートされる値とデフォルト値

ウィンドウヒント | デフォルト値 | サポートされる値
---------------- | ------------ | ------------------
GLFW_RESIZABLE | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_VISIBLE | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_DECORATED | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_FOCUSED | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_AUTO_ICONIFY | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_FLOATING | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_MAXIMIZED | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_CENTER_CURSOR | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_TRANSPARENT_FRAMEBUFFER | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_FOCUS_ON_SHOW | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_SCALE_TO_MONITOR | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_SCALE_FRAMEBUFFER | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_MOUSE_PASSTHROUGH | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_POSITION_X | `GLFW_ANY_POSITION` | 有効な任意のスクリーンX座標または `GLFW_ANY_POSITION`
GLFW_POSITION_Y | `GLFW_ANY_POSITION` | 有効な任意のスクリーンY座標または `GLFW_ANY_POSITION`
GLFW_RED_BITS | 8 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_GREEN_BITS | 8 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_BLUE_BITS | 8 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_ALPHA_BITS | 8 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_DEPTH_BITS | 24 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_STENCIL_BITS | 8 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_ACCUM_RED_BITS | 0 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_ACCUM_GREEN_BITS | 0 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_ACCUM_BLUE_BITS | 0 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_ACCUM_ALPHA_BITS | 0 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_AUX_BUFFERS | 0 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_SAMPLES | 0 | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_REFRESH_RATE | `GLFW_DONT_CARE` | 0～`INT_MAX`または `GLFW_DONT_CARE`
GLFW_STEREO | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_SRGB_CAPABLE | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_DOUBLEBUFFER | `GLFW_TRUE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_CLIENT_API | `GLFW_OPENGL_API` | `GLFW_OPENGL_API`、`GLFW_OPENGL_ES_API`、`GLFW_NO_API` のいずれか
GLFW_CONTEXT_CREATION_API | `GLFW_NATIVE_CONTEXT_API` | `GLFW_NATIVE_CONTEXT_API`、`GLFW_EGL_CONTEXT_API`、`GLFW_OSMESA_CONTEXT_API` のいずれか
GLFW_CONTEXT_VERSION_MAJOR | 1 | 選択したクライアント API の有効な任意のメジャーバージョン番号
GLFW_CONTEXT_VERSION_MINOR | 0 | 選択したクライアント API の有効な任意のマイナーバージョン番号
GLFW_CONTEXT_ROBUSTNESS | `GLFW_NO_ROBUSTNESS` | `GLFW_NO_ROBUSTNESS`、`GLFW_NO_RESET_NOTIFICATION`、`GLFW_LOSE_CONTEXT_ON_RESET` のいずれか
GLFW_CONTEXT_RELEASE_BEHAVIOR | `GLFW_ANY_RELEASE_BEHAVIOR` | `GLFW_ANY_RELEASE_BEHAVIOR`、`GLFW_RELEASE_BEHAVIOR_FLUSH`、`GLFW_RELEASE_BEHAVIOR_NONE` のいずれか
GLFW_OPENGL_FORWARD_COMPAT | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_CONTEXT_DEBUG | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_OPENGL_PROFILE | `GLFW_OPENGL_ANY_PROFILE` | `GLFW_OPENGL_ANY_PROFILE`、`GLFW_OPENGL_COMPAT_PROFILE`、`GLFW_OPENGL_CORE_PROFILE` のいずれか
GLFW_WIN32_KEYBOARD_MENU | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_WIN32_SHOWDEFAULT | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_COCOA_FRAME_NAME | `""` | UTF-8 エンコードのフレーム自動保存名
GLFW_COCOA_GRAPHICS_SWITCHING | `GLFW_FALSE` | `GLFW_TRUE` または `GLFW_FALSE`
GLFW_WAYLAND_APP_ID | `""` | ASCII エンコードの Wayland `app_id` 名
GLFW_X11_CLASS_NAME | `""` | ASCII エンコードの `WM_CLASS` クラス名
GLFW_X11_INSTANCE_NAME | `""` | ASCII エンコードの `WM_CLASS` インスタンス名


<a id="window_events"></a>

## ウィンドウイベントの処理

[events](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events)を参照してください。


<a id="window_properties"></a>

## ウィンドウのプロパティとイベント

<a id="window_userptr"></a>

### ユーザーポインター

各ウィンドウには、[glfwSetWindowUserPointer](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3d2fc6026e690ab31a13f78bc9fd3651) で設定し、[glfwGetWindowUserPointer](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gae77a4add0d2023ca21ff1443ced01653) で取得できるユーザーポインターがあります。任意の用途に使用でき、ウィンドウの有効期間を通じて GLFW が変更することはありません。

ポインターの初期値は `NULL` です。


<a id="window_close"></a>

### ウィンドウを閉じる操作とクローズフラグ

ユーザーが閉じるボタンをクリックしたり Alt+F4 のようなキー操作を使ったりしてウィンドウを閉じようとすると、ウィンドウの_クローズフラグ_が設定されます。ただし、実際にウィンドウが破棄されるわけではなく、この状態変化を監視しなければ、それ以上は何も起こりません。

クローズフラグの現在の状態は [glfwWindowShouldClose](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga24e02fbfefbb81fc45320989f8140ab5) が返します。また、[glfwSetWindowShouldClose](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708) で直接設定・解除できます。一般的には、クローズフラグをメインループの条件として使います。

```c
while (!glfwWindowShouldClose(window))
{
    render(window);

    glfwSwapBuffers(window);
    glfwPollEvents();
}
```

ユーザーがウィンドウを閉じようとしたときに通知を受け取りたい場合は、クローズコールバックを設定します。

```c
glfwSetWindowCloseCallback(window, window_close_callback);
```

コールバック関数は、クローズフラグが設定された_直後_に呼び出されます。たとえば、クローズ要求を選別し、特定の条件を満たさない場合にクローズフラグを再び解除するために使えます。

```c
void window_close_callback(GLFWwindow* window)
{
    if (!time_to_close)
        glfwSetWindowShouldClose(window, GLFW_FALSE);
}
```


<a id="window_size"></a>

### ウィンドウサイズ

ウィンドウのサイズは [glfwSetWindowSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb) で変更できます。ウィンドウモードのウィンドウでは、ウィンドウの_コンテンツ領域_のサイズを[スクリーン座標](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#coordinate_systems)で設定します。ウィンドウシステムがウィンドウサイズに制限を課すことがあります。

```c
glfwSetWindowSize(window, 640, 480);
```

フルスクリーンウィンドウでは、指定したサイズが希望する新しいビデオモードの解像度になります。希望する新しいビデオモードに最も近いビデオモードが直ちに設定され、その解像度に合うようウィンドウのサイズが変更されます。

ユーザー、システム、または自身のコードによってウィンドウのサイズが変更されたときに通知を受け取りたい場合は、サイズコールバックを設定します。

```c
glfwSetWindowSizeCallback(window, window_size_callback);
```

コールバック関数は、ウィンドウのサイズ変更時に、コンテンツ領域の新しいサイズをスクリーン座標で受け取ります。

```c
void window_size_callback(GLFWwindow* window, int width, int height)
{
}
```

[glfwGetWindowSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaeea7cbc03373a41fb51cfbf9f2a5d4c6) を使うと、ウィンドウの現在のサイズを直接取得できます。

```c
int width, height;
glfwGetWindowSize(window, &width, &height);
```

> **注:** ウィンドウサイズを `glViewport` などのピクセル単位の OpenGL 呼び出しへ渡さないでください。ウィンドウサイズの単位はピクセルではなくスクリーン座標です。ピクセル単位の呼び出しには、ピクセルで表される[フレームバッファサイズ](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_fbsize)を使ってください。

上記の関数はコンテンツ領域のサイズを扱いますが、装飾のあるウィンドウでは通常、この長方形の周囲にタイトルバーとウィンドウフレームがあります。[glfwGetWindowFrameSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1a9fd382058c53101b21cf211898f1f1) でそれらの幅を取得できます。

```c
int left, top, right, bottom;
glfwGetWindowFrameSize(window, &left, &top, &right, &bottom);
```

返される値は、コンテンツ領域の各辺からウィンドウ全体の対応する辺までの距離をスクリーン座標で表します。座標ではなく距離であるため、常に0以上です。


<a id="window_fbsize"></a>

### フレームバッファサイズ

ウィンドウサイズはスクリーン座標で測定しますが、OpenGL はピクセルを扱います。たとえば、`glViewport` へ渡すサイズはピクセル単位でなければなりません。スクリーン座標とピクセルが同じマシンもありますが、異なるマシンもあります。ウィンドウのフレームバッファサイズをピクセル単位で取得するために、別の関数群が用意されています。

ユーザーまたはシステムによってウィンドウのフレームバッファのサイズが変更されたときに通知を受け取りたい場合は、サイズコールバックを設定します。

```c
glfwSetFramebufferSizeCallback(window, framebuffer_size_callback);
```

コールバック関数は、フレームバッファのサイズ変更時に新しいサイズを受け取ります。たとえば、OpenGL ビューポートの更新に使えます。

```c
void framebuffer_size_callback(GLFWwindow* window, int width, int height)
{
    glViewport(0, 0, width, height);
}
```

[glfwGetFramebufferSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9) を使うと、ウィンドウのフレームバッファの現在のサイズを直接取得できます。

```c
int width, height;
glfwGetFramebufferSize(window, &width, &height);
glViewport(0, 0, width, height);
```

たとえば通常のモニターと高 DPI モニターの間でウィンドウをドラッグした場合など、フレームバッファのサイズはウィンドウサイズとは独立して変化することがあります。


<a id="window_scale"></a>

### ウィンドウのコンテンツスケール

ウィンドウのコンテンツスケールは [glfwGetWindowContentScale](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaf5d31de9c19c4f994facea64d2b3106c) で取得できます。

```c
float xscale, yscale;
glfwGetWindowContentScale(window, &xscale, &yscale);
```

コンテンツスケールは、現在の DPI とプラットフォームのデフォルト DPI の比率と考えることができます。テキストなどの UI 要素のピクセル寸法へ適用する倍率として意図されています。この倍率で拡大・縮小した寸法が使用中のマシンで適切に見えるなら、DPI やスケーリング設定が異なるほかのマシンでも妥当な大きさで表示されるはずです。

これは、両方のマシンで DPI とスケーリングの設定が適切であることに依存します。

コンテンツスケールは、モニターの解像度とピクセル密度、DPI や倍率などのユーザー設定の両方に依存する可能性があります。物理サイズと現在の解像度から計算した生の DPI とは大きく異なる場合があります。

モニターごとに独自のコンテンツスケールを持てるシステムでは、ウィンドウのコンテンツスケールは、システムがそのウィンドウをどのモニター上にあるとみなすかに依存します。

システム設定の変更や、異なるスケールのモニターへの移動によってウィンドウのコンテンツスケールが変化したときに通知を受け取りたい場合は、コンテンツスケールコールバックを設定します。

```c
glfwSetWindowContentScaleCallback(window, window_content_scale_callback);
```

コールバック関数は、ウィンドウの新しいコンテンツスケールを受け取ります。

```c
void window_content_scale_callback(GLFWwindow* window, float xscale, float yscale)
{
    set_interface_scale(xscale, yscale);
}
```

ピクセルとスクリーン座標が常に 1:1 で対応するプラットフォームでは、コンテンツスケールが異なるモニターへ移動しても同じ大きさに見えるよう、ウィンドウのサイズを変更する必要があります。ウィンドウの作成時と、その後にコンテンツスケールが変化したときの両方で自動的に行うには、[GLFW_SCALE_TO_MONITOR](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_SCALE_TO_MONITOR) ウィンドウヒントを設定します。

ピクセルとスクリーン座標が必ずしも等しくないプラットフォームでは、代わりにウィンドウへ完全な解像度の画像を提供できるよう、フレームバッファのサイズを変更する必要があります。コンテンツスケールが異なるモニター間をウィンドウが移動すると、ウィンドウサイズは同じままですが、フレームバッファサイズが変化します。これはデフォルトで自動的に行われます。このサイズ変更を無効にするには、[GLFW_SCALE_FRAMEBUFFER](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa5a9c6b4722670fd33d6e8a88f2e21bc) ウィンドウヒントを設定します。

どちらのヒントもウィンドウの作成時に適用されます。すべてのウィンドウはコンテンツスケール 1 で開始します。一方または両方のヒントが設定されたウィンドウは、作成、設定、表示される過程で適切なスケールへ適応します。


<a id="window_sizelimits"></a>

### ウィンドウサイズの制限

ウィンドウモードのウィンドウのコンテンツ領域について、最小・最大サイズを [glfwSetWindowSizeLimits](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac314fa6cec7d2d307be9963e2709cc90) で強制できます。アスペクト比も設定されていない限り、ユーザーは指定した制限内で任意のサイズとアスペクト比へウィンドウを変更できます。

```c
glfwSetWindowSizeLimits(window, 200, 200, 400, 400);
```

最小サイズと最大サイズの一方だけを指定するには、もう一方の組を `GLFW_DONT_CARE` に設定します。

```c
glfwSetWindowSizeLimits(window, 640, 480, GLFW_DONT_CARE, GLFW_DONT_CARE);
```

ウィンドウのサイズ制限を無効にするには、すべてを `GLFW_DONT_CARE` に設定します。

ウィンドウモードのウィンドウのコンテンツ領域について、アスペクト比を [glfwSetWindowAspectRatio](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga72ac8cb1ee2e312a878b55153d81b937) で強制できます。サイズ制限も設定されていない限り、ユーザーはウィンドウを自由にサイズ変更できますが、アスペクト比を保つようサイズが制約されます。

```c
glfwSetWindowAspectRatio(window, 16, 9);
```

アスペクト比は分子と分母で指定し、それぞれ幅と高さに対応します。ウィンドウに現在のアスペクト比を維持させるには、現在のサイズを比率として使います。

```c
int width, height;
glfwGetWindowSize(window, &width, &height);
glfwSetWindowAspectRatio(window, width, height);
```

ウィンドウのアスペクト比制限を無効にするには、両方の値を `GLFW_DONT_CARE` に設定します。

1つのウィンドウにサイズ制限とアスペクト比の両方を設定できますが、両者が矛盾する場合の結果は未定義です。


<a id="window_pos"></a>

### ウィンドウの位置

デフォルトでは、ウィンドウマネージャーがウィンドウのサイズと、ユーザーが作業しているように見えるモニターに基づき、新しいウィンドウモードのウィンドウの位置を選択します。ほとんどの場合、これが適切です。特定の位置にウィンドウを作成する必要がある場合は、[GLFW_POSITION_X](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_X) と [GLFW_POSITION_Y](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_Y) ウィンドウヒントで希望する位置を設定できます。

```c
glfwWindowHint(GLFW_POSITION_X, 70);
glfwWindowHint(GLFW_POSITION_Y, 83);
```

以前の動作へ戻すには、これらのヒントを `GLFW_ANY_POSITION` に設定します。

ウィンドウモードのウィンドウの位置は [glfwSetWindowPos](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1abb6d690e8c88e0c8cd1751356dbca8) で変更できます。この関数は、コンテンツ領域の左上隅が指定した[スクリーン座標](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#coordinate_systems)になるようウィンドウを移動します。ウィンドウシステムがウィンドウの配置に制限を課すことがあります。

```c
glfwSetWindowPos(window, 100, 100);
```

ユーザー、システム、または自身のコードによってウィンドウが移動したときに通知を受け取りたい場合は、位置コールバックを設定します。

```c
glfwSetWindowPosCallback(window, window_pos_callback);
```

コールバック関数は、ウィンドウが移動したときに、コンテンツ領域の左上隅の新しい位置をスクリーン座標で受け取ります。

```c
void window_pos_callback(GLFWwindow* window, int xpos, int ypos)
{
}
```

[glfwGetWindowPos](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga73cb526c000876fd8ddf571570fdb634) を使うと、ウィンドウのコンテンツ領域の現在位置を直接取得できます。

```c
int xpos, ypos;
glfwGetWindowPos(window, &xpos, &ypos);
```

> **注:** __Wayland:__ アプリケーションは、ウィンドウの位置やウィンドウが移動したかどうかを知ることができません。[GLFW_POSITION_X](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_X) と [GLFW_POSITION_Y](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_POSITION_Y) ウィンドウヒントは無視されます。[glfwGetWindowPos](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga73cb526c000876fd8ddf571570fdb634) と [glfwSetWindowPos](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1abb6d690e8c88e0c8cd1751356dbca8) は [GLFW_FEATURE_UNAVAILABLE](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5) を通知します。ウィンドウ位置コールバックは呼び出されません。


<a id="window_title"></a>

### ウィンドウタイトル

GLFW のすべてのウィンドウにはタイトルがあります。ただし、装飾のないウィンドウやフルスクリーンウィンドウでは表示されないか、タスクバーなどのインターフェースにだけ表示される場合があります。[glfwSetWindowTitle](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga5d877f09e968cef7a360b513306f17ff) で、UTF-8 エンコードの新しいウィンドウタイトルを設定できます。

```c
glfwSetWindowTitle(window, "My Window");
```

指定した文字列は関数が処理を返す前にコピーされるため、保持する必要はありません。

ソースファイルが UTF-8 でエンコードされていれば、任意の Unicode 文字をソース内で直接使えます。

```c
glfwSetWindowTitle(window, "ラストエグザイル");
```

C++11 または C11 を使っている場合は、UTF-8 文字列リテラルを使えます。

```c
glfwSetWindowTitle(window, u8"This is always a UTF-8 string");
```

現在のウィンドウタイトルは [glfwGetWindowTitle](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac6151765c54b789c4fe66c6bc6215953) で取得できます。

```c
const char* title = glfwGetWindowTitle(window);
```

<a id="window_icon"></a>

### ウィンドウアイコン

一部のプラットフォームでは、装飾のあるウィンドウにアイコンがあります。[glfwSetWindowIcon](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gadd7ccd39fe7a7d1f0904666ae5932dc5) へ候補画像の一覧を指定すると、このアイコンを設定できます。

```c
GLFWimage images[2];
images[0] = load_icon("my_icon.png");
images[1] = load_icon("my_icon_small.png");

glfwSetWindowIcon(window, 2, images);
```

画像データは32ビット、リトルエンディアン、乗算済みではない RGBA 形式です。つまり、各チャンネル8ビットで、赤チャンネルが先頭です。ピクセルは左上隅から始まる連続した行として、標準的な順序で配置します。

デフォルトのウィンドウアイコンへ戻すには、空の画像配列を渡します。

```c
glfwSetWindowIcon(window, 0, NULL);
```


<a id="window_monitor"></a>

### ウィンドウのモニター

フルスクリーンウィンドウには特定のモニターが関連付けられています。このモニターのハンドルは [glfwGetWindowMonitor](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga4d766499ac02c60f02221a9dfab87299) で取得できます。

```c
GLFWmonitor* monitor = glfwGetWindowMonitor(window);
```

このモニターハンドルは、[glfwGetMonitors](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2) が返すものの1つです。

ウィンドウモードのウィンドウについて、この関数は `NULL` を返します。これにより、フルスクリーンウィンドウとウィンドウモードのウィンドウを区別できます。

[glfwSetWindowMonitor](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga81c76c418af80a1cce7055bccb0ae0a7) を使うと、ウィンドウをモニター間で移動したり、フルスクリーンとウィンドウモードの間で切り替えたりできます。同じまたは別のモニター上でウィンドウをフルスクリーンにする場合は、希望するモニター、解像度、リフレッシュレートを指定します。位置引数は無視されます。

```c
const GLFWvidmode* mode = glfwGetVideoMode(monitor);

glfwSetWindowMonitor(window, monitor, 0, 0, mode->width, mode->height, mode->refreshRate);
```

ウィンドウモードにする場合は、希望する位置とサイズを指定します。リフレッシュレート引数は無視されます。

```c
glfwSetWindowMonitor(window, NULL, xpos, ypos, width, height, 0);
```

これにより、装飾、前面表示、サイズ変更の可否、サイズ制限またはアスペクト比制限など、以前のウィンドウ設定が復元されます。元々ウィンドウモードだったウィンドウを元のサイズと位置へ戻すには、フルスクリーンにする前にこれらを保存し、上記のように渡してください。


<a id="window_iconify"></a>

### ウィンドウのアイコン化

ウィンドウは [glfwIconifyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4) でアイコン化（最小化）できます。

```c
glfwIconifyWindow(window);
```

フルスクリーンウィンドウをアイコン化すると、ユーザーまたはアプリケーションがウィンドウを復元するまで、そのモニターの元のビデオモードが復元されます。

アイコン化されたウィンドウは [glfwRestoreWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7) で復元できます。この関数は、最大化されたウィンドウも復元します。

```c
glfwRestoreWindow(window);
```

フルスクリーンウィンドウを復元すると、希望するビデオモードもそのモニターへ復元されます。

ユーザー、システム、または自身のコードによってウィンドウがアイコン化・復元されたときに通知を受け取りたい場合は、アイコン化コールバックを設定します。

```c
glfwSetWindowIconifyCallback(window, window_iconify_callback);
```

コールバック関数は、ウィンドウのアイコン化状態の変化を受け取ります。

```c
void window_iconify_callback(GLFWwindow* window, int iconified)
{
    if (iconified)
    {
        // The window was iconified
    }
    else
    {
        // The window was restored
    }
}
```

[glfwGetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337) で、現在のアイコン化状態を取得することもできます。

```c
int iconified = glfwGetWindowAttrib(window, GLFW_ICONIFIED);
```

> **注:** __Wayland:__ アプリケーションは、自身のウィンドウがアイコン化されたかどうかを知ることも、アイコン化状態から復元することもできません。[glfwRestoreWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7) は最大化状態からのみ復元でき、アイコン化コールバックは呼び出されません。[GLFW_ICONIFIED](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_ICONIFIED_attrib) 属性は偽になります。[glfwIconifyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga1bb559c0ebaad63c5c05ad2a066779c4) は通常どおり機能します。


<a id="window_maximize"></a>

### ウィンドウの最大化

ウィンドウは [glfwMaximizeWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3f541387449d911274324ae7f17ec56b) で最大化できます。

```c
glfwMaximizeWindow(window);
```

フルスクリーンウィンドウは最大化できません。この関数へフルスクリーンウィンドウを渡しても何も起こりません。

最大化されたウィンドウは [glfwRestoreWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga52527a5904b47d802b6b4bb519cdebc7) で復元できます。この関数は、アイコン化されたウィンドウも復元します。

```c
glfwRestoreWindow(window);
```

ユーザー、システム、または自身のコードによってウィンドウが最大化・復元されたときに通知を受け取りたい場合は、最大化コールバックを設定します。

```c
glfwSetWindowMaximizeCallback(window, window_maximize_callback);
```

コールバック関数は、ウィンドウの最大化状態の変化を受け取ります。

```c
void window_maximize_callback(GLFWwindow* window, int maximized)
{
    if (maximized)
    {
        // The window was maximized
    }
    else
    {
        // The window was restored
    }
}
```

[glfwGetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337) で、現在の最大化状態を取得することもできます。

```c
int maximized = glfwGetWindowAttrib(window, GLFW_MAXIMIZED);
```

新しく作成したウィンドウは、デフォルトでは最大化されません。ウィンドウを作成する前に [GLFW_MAXIMIZED](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_MAXIMIZED_hint) ウィンドウヒントを設定すると、この動作を変更できます。

```c
glfwWindowHint(GLFW_MAXIMIZED, GLFW_TRUE);
```


<a id="window_hide"></a>

### ウィンドウの表示状態

ウィンドウモードのウィンドウは [glfwHideWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49401f82a1ba5f15db5590728314d47c) で非表示にできます。

```c
glfwHideWindow(window);
```

これにより、タスクバー、Dock、ウィンドウ一覧からの削除も含め、ウィンドウはユーザーから完全に見えなくなります。フルスクリーンウィンドウは非表示にできず、フルスクリーンウィンドウに対して [glfwHideWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49401f82a1ba5f15db5590728314d47c) を呼び出しても何も起こりません。

非表示のウィンドウは [glfwShowWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66) で表示できます。

```c
glfwShowWindow(window);
```

デフォルトでは、この関数はそのウィンドウへ入力フォーカスも設定します。新しく作成するすべてのウィンドウについてこの動作を変更するには [GLFW_FOCUS_ON_SHOW](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint) ウィンドウヒントを設定し、既存のウィンドウについて変更するには [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) を使います。

[glfwGetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337) で、現在の表示状態を取得することもできます。

```c
int visible = glfwGetWindowAttrib(window, GLFW_VISIBLE);
```

新しく作成したウィンドウは、デフォルトで表示されます。ウィンドウを作成する前に [GLFW_VISIBLE](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_VISIBLE_hint) ウィンドウヒントを設定すると、この動作を変更できます。

```c
glfwWindowHint(GLFW_VISIBLE, GLFW_FALSE);
```

非表示として作成したウィンドウは、表示するまでユーザーから完全に見えません。たとえば特定の位置へ移動するなど、表示前にウィンドウをさらに設定する必要がある場合に便利です。


<a id="window_focus"></a>

### ウィンドウの入力フォーカス

[glfwFocusWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga873780357abd3f3a081d71a40aae45a1) を使うと、ウィンドウへ入力フォーカスを与えて前面へ移動できます。

```c
glfwFocusWindow(window);
```

ウィンドウを強制的に最前面へ移動すると、ユーザーの操作を大きく妨げる可能性があることに注意してください。ユーザーの注意を引く、より穏当な方法については、[注意要求](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_attention)を参照してください。

ユーザー、システム、または自身のコードによってウィンドウが入力フォーカスを得た、または失ったときに通知を受け取りたい場合は、フォーカスコールバックを設定します。

```c
glfwSetWindowFocusCallback(window, window_focus_callback);
```

コールバック関数は、ウィンドウの入力フォーカス状態の変化を受け取ります。

```c
void window_focus_callback(GLFWwindow* window, int focused)
{
    if (focused)
    {
        // The window gained input focus
    }
    else
    {
        // The window lost input focus
    }
}
```

[glfwGetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337) で、現在の入力フォーカス状態を取得することもできます。

```c
int focused = glfwGetWindowAttrib(window, GLFW_FOCUSED);
```

新しく作成したウィンドウには、デフォルトで入力フォーカスが与えられます。ウィンドウを作成する前に [GLFW_FOCUSED](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUSED_hint) ウィンドウヒントを設定すると、この動作を変更できます。

```c
glfwWindowHint(GLFW_FOCUSED, GLFW_FALSE);
```


<a id="window_attention"></a>

### ウィンドウへの注意要求

ユーザーを中断せずにイベントを知らせたい場合は、[glfwRequestWindowAttention](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga2f8d59323fc4692c1d54ba08c863a703) で注意を要求できます。

```c
glfwRequestWindowAttention(window);
```

システムは指定したウィンドウを強調表示します。これをサポートしないプラットフォームでは、アプリケーション全体を強調表示します。ユーザーが注意を向けると、システムが自動的に要求を終了します。


<a id="window_refresh"></a>

### ウィンドウの損傷と再描画

ウィンドウの内容が損傷して再描画が必要になったときに通知を受け取りたい場合は、ウィンドウ再描画コールバックを設定します。

```c
glfwSetWindowRefreshCallback(m_handle, window_refresh_callback);
```

コールバック関数は、ウィンドウの内容を再描画する必要があるときに呼び出されます。

```c
void window_refresh_callback(GLFWwindow* window)
{
    draw_editor_ui(window);
    glfwSwapBuffers(window);
}
```

> **注:** Aero、Compiz、Aqua など、ウィンドウの内容をオフスクリーンに保存する合成ウィンドウシステムでは、このコールバックがウィンドウまたはフレームバッファのサイズ変更時にしか呼び出されない可能性があります。


<a id="window_transparency"></a>

### ウィンドウの透明度

GLFW はウィンドウについて、フレームバッファ透明度とウィンドウ全体の透明度という2種類の透明化をサポートします。単一のウィンドウで両方の方法を使ってはなりません。使った場合の結果は未定義です。

どちらの方法もプラットフォーム側のサポートを必要とします。GLFW がサポートする各プラットフォームのすべてのバージョンが対応するわけではないため、ウィンドウが実際に透明かどうかを確認する仕組みがあります。

[GLFW_TRANSPARENT_FRAMEBUFFER](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_TRANSPARENT_FRAMEBUFFER_hint) ウィンドウヒントを使うと、ウィンドウのフレームバッファをピクセルごと、フレームごとに透明にできます。

```c
glfwWindowHint(GLFW_TRANSPARENT_FRAMEBUFFER, GLFW_TRUE);
```

システムがサポートしている場合、フレームバッファのピクセル単位のアルファチャンネルを使って、ウィンドウのコンテンツ領域を背景と合成します。これにはシステム上でデスクトップ合成が有効になっている必要があります。ウィンドウ装飾には影響しません。

[GLFW_TRANSPARENT_FRAMEBUFFER](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_TRANSPARENT_FRAMEBUFFER_attrib) ウィンドウ属性を使うと、ウィンドウのフレームバッファを透明にできたか確認できます。

```c
if (glfwGetWindowAttrib(window, GLFW_TRANSPARENT_FRAMEBUFFER))
{
    // window framebuffer is currently transparent
}
```

GLFW には、フレームバッファ透明度を有効にする `gears` というサンプルが付属します。

装飾を含むウィンドウ全体の不透明度は、[glfwSetWindowOpacity](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gac31caeb3d1088831b13d2c8a156802e9) で設定できます。

```c
glfwSetWindowOpacity(window, 0.5f);
```

不透明度（アルファ）値は、0から1までの正の有限数です。0 は完全な透明、1 は完全な不透明を表します。新しく作成したウィンドウの初期不透明度は1です。

ウィンドウの現在の不透明度は [glfwGetWindowOpacity](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gad09f0bd7a6307c4533b7061828480a84) で取得できます。

```c
float opacity = glfwGetWindowOpacity(window);
```

システムがウィンドウ全体の透明化をサポートしない場合、この関数は常に1を返します。

GLFW には、実行時にウィンドウ全体の透明度を制御できる `window` というテストプログラムが付属します。

通知など一時的なオーバーレイを表示するために、これらの透明化方法のいずれかを使う場合は、[GLFW_FLOATING](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7fb0be51407783b41adbf5bec0b09d80) と [GLFW_MOUSE_PASSTHROUGH](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga88981797d29800808ec242274ab5c03a) のウィンドウヒントおよび属性が役立つ可能性があります。


<a id="window_attribs"></a>

### ウィンドウ属性

ウィンドウには、[glfwGetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337) で取得できる多くの属性があります。ユーザー操作によって変化する可能性がある状態（入力フォーカスの有無など）を反映するものも、ウィンドウ固有の性質（境界線の種類など）を反映するものもあります。ウィンドウに関係するものと、その OpenGL または OpenGL ES コンテキストに関係するものがあります。

```c
if (glfwGetWindowAttrib(window, GLFW_FOCUSED))
{
    // window has input focus
}
```

[GLFW_DECORATED](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DECORATED_attrib)、[GLFW_RESIZABLE](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RESIZABLE_attrib)、[GLFW_FLOATING](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FLOATING_attrib)、[GLFW_AUTO_ICONIFY](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_attrib)、[GLFW_FOCUS_ON_SHOW](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_attrib) の各ウィンドウ属性は [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) で変更できます。

```c
glfwSetWindowAttrib(window, GLFW_RESIZABLE, GLFW_FALSE);
```



<a id="window_attribs_wnd"></a>

#### ウィンドウ関連の属性

<a id="GLFW_FOCUSED_attrib"></a>

__GLFW_FOCUSED__ は、指定したウィンドウが入力フォーカスを持つかどうかを示します。詳しくは [window_focus](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_focus)を参照してください。

<a id="GLFW_ICONIFIED_attrib"></a>

__GLFW_ICONIFIED__ は、指定したウィンドウがアイコン化されているかどうかを示します。詳しくは [window_iconify](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_iconify)を参照してください。

<a id="GLFW_MAXIMIZED_attrib"></a>

__GLFW_MAXIMIZED__ は、指定したウィンドウが最大化されているかどうかを示します。詳しくは [window_maximize](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_maximize)を参照してください。

<a id="GLFW_HOVERED_attrib"></a>

__GLFW_HOVERED__ は、ほかのウィンドウを挟まず、カーソルが現在ウィンドウのコンテンツ領域上に直接あるかどうかを示します。詳しくは [cursor_enter](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_enter)を参照してください。

<a id="GLFW_VISIBLE_attrib"></a>

__GLFW_VISIBLE__ は、指定したウィンドウが表示されているかどうかを示します。詳しくは [window_hide](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hide)を参照してください。

<a id="GLFW_RESIZABLE_attrib"></a>

__GLFW_RESIZABLE__ は、指定したウィンドウを_ユーザーが_サイズ変更できるかどうかを示します。作成前は [GLFW_RESIZABLE](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RESIZABLE_hint) ウィンドウヒント、作成後は [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) で設定できます。

<a id="GLFW_DECORATED_attrib"></a>

__GLFW_DECORATED__ は、指定したウィンドウに境界線や閉じるボタンなどの装飾があるかどうかを示します。作成前は [GLFW_DECORATED](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DECORATED_hint) ウィンドウヒント、作成後は [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) で設定できます。

<a id="GLFW_AUTO_ICONIFY_attrib"></a>

__GLFW_AUTO_ICONIFY__ は、指定したフルスクリーンウィンドウがフォーカスを失ったときにアイコン化されるかどうかを示します。作成前は [GLFW_AUTO_ICONIFY](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_AUTO_ICONIFY_hint) ウィンドウヒント、作成後は [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) で設定できます。

<a id="GLFW_FLOATING_attrib"></a>

__GLFW_FLOATING__ は、指定したウィンドウが前面表示されるかどうかを示します。これは topmost または always-on-top とも呼ばれます。作成前は [GLFW_FLOATING](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FLOATING_hint) ウィンドウヒント、作成後は [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) で設定できます。

<a id="GLFW_TRANSPARENT_FRAMEBUFFER_attrib"></a>

__GLFW_TRANSPARENT_FRAMEBUFFER__ は、指定したウィンドウが透明なフレームバッファを持つかどうかを示します。つまり、ウィンドウのフレームバッファのアルファチャンネルを使って、ウィンドウの内容を背景と合成するかどうかです。詳しくは [window_transparency](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_transparency)を参照してください。

<a id="GLFW_FOCUS_ON_SHOW_attrib"></a>

__GLFW_FOCUS_ON_SHOW__ は、[glfwShowWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga61be47917b72536a148300f46494fc66) の呼び出し時にウィンドウへ入力フォーカスを与えるかどうかを指定します。作成前は [GLFW_FOCUS_ON_SHOW](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_FOCUS_ON_SHOW_hint) ウィンドウヒント、作成後は [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) で設定できます。

<a id="GLFW_MOUSE_PASSTHROUGH_attrib"></a>

__GLFW_MOUSE_PASSTHROUGH__ は、ウィンドウをマウス入力に対して透過させ、すべてのマウスイベントを背後のウィンドウへ通過させるかどうかを指定します。作成前は [GLFW_MOUSE_PASSTHROUGH](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_MOUSE_PASSTHROUGH_hint) ウィンドウヒント、作成後は [glfwSetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gace2afda29b4116ec012e410a6819033e) で設定できます。装飾のないウィンドウでだけサポートされます。装飾のあるウィンドウで有効にした場合の動作は、プラットフォームごとに異なります。


<a id="window_attribs_ctx"></a>

#### コンテキスト関連の属性

<a id="GLFW_CLIENT_API_attrib"></a>

__GLFW_CLIENT_API__ は、ウィンドウのコンテキストが提供するクライアント API を示します。`GLFW_OPENGL_API`、`GLFW_OPENGL_ES_API`、`GLFW_NO_API` のいずれかです。

<a id="GLFW_CONTEXT_CREATION_API_attrib"></a>

__GLFW_CONTEXT_CREATION_API__ は、ウィンドウのコンテキストの作成に使われたコンテキスト作成 API を示します。`GLFW_NATIVE_CONTEXT_API`、`GLFW_EGL_CONTEXT_API`、`GLFW_OSMESA_CONTEXT_API` のいずれかです。

<a id="GLFW_CONTEXT_VERSION_MAJOR_attrib"></a>
<a id="GLFW_CONTEXT_VERSION_MINOR_attrib"></a>
<a id="GLFW_CONTEXT_REVISION_attrib"></a>

__GLFW_CONTEXT_VERSION_MAJOR__、__GLFW_CONTEXT_VERSION_MINOR__、__GLFW_CONTEXT_REVISION__ は、ウィンドウのコンテキストのクライアント API バージョンを示します。

> **注:** これらの属性を、GLFW ヘッダーの API バージョンを提供する `GLFW_VERSION_MAJOR`、`GLFW_VERSION_MINOR`、`GLFW_VERSION_REVISION` と混同しないでください。

<a id="GLFW_OPENGL_FORWARD_COMPAT_attrib"></a>

__GLFW_OPENGL_FORWARD_COMPAT__ は、ウィンドウのコンテキストが前方互換 OpenGL コンテキストなら `GLFW_TRUE`、それ以外なら `GLFW_FALSE` です。

<a id="GLFW_CONTEXT_DEBUG_attrib"></a>
<a id="GLFW_OPENGL_DEBUG_CONTEXT_attrib"></a>

__GLFW_CONTEXT_DEBUG__ は、ウィンドウのコンテキストがデバッグモードなら `GLFW_TRUE`、それ以外なら `GLFW_FALSE` です。

これは GLFW 3.4 で導入された新しい名前です。互換性のため、以前の `GLFW_OPENGL_DEBUG_CONTEXT` という名前も利用できます。

<a id="GLFW_OPENGL_PROFILE_attrib"></a>

__GLFW_OPENGL_PROFILE__ は、コンテキストが使う OpenGL プロファイルを示します。コンテキストが既知のプロファイルを使う場合は `GLFW_OPENGL_CORE_PROFILE` または `GLFW_OPENGL_COMPAT_PROFILE`、OpenGL プロファイルが不明な場合や OpenGL ES コンテキストの場合は `GLFW_OPENGL_ANY_PROFILE` です。プロファイルのビットが設定されていない場合、GLFW は別の方法でプロファイルの検出を試みるため、返されるプロファイルはコンテキストフラグのプロファイルビットと一致しないことがあります。

<a id="GLFW_CONTEXT_RELEASE_BEHAVIOR_attrib"></a>

__GLFW_CONTEXT_RELEASE_BEHAVIOR__ は、コンテキストが使う解放時の動作を示します。指定できる値は `GLFW_ANY_RELEASE_BEHAVIOR`、`GLFW_RELEASE_BEHAVIOR_FLUSH`、`GLFW_RELEASE_BEHAVIOR_NONE` のいずれかです。`GLFW_ANY_RELEASE_BEHAVIOR` の場合は、コンテキスト作成 API のデフォルト動作が使われます。`GLFW_RELEASE_BEHAVIOR_FLUSH` の場合は、コンテキストがカレントではなくなるたびにパイプラインをフラッシュします。`GLFW_RELEASE_BEHAVIOR_NONE` の場合は、解放時にパイプラインをフラッシュしません。

<a id="GLFW_CONTEXT_NO_ERROR_attrib"></a>

__GLFW_CONTEXT_NO_ERROR__ は、コンテキストがエラーを生成するかどうかを示します。指定できる値は `GLFW_TRUE` と `GLFW_FALSE` です。有効な場合、本来エラーが生成される状況で、代わりに未定義動作が発生します。

<a id="GLFW_CONTEXT_ROBUSTNESS_attrib"></a>

__GLFW_CONTEXT_ROBUSTNESS__ は、コンテキストが使う堅牢性戦略を示します。ウィンドウのコンテキストが堅牢性をサポートする場合は `GLFW_LOSE_CONTEXT_ON_RESET` または `GLFW_NO_RESET_NOTIFICATION`、それ以外の場合は `GLFW_NO_ROBUSTNESS` です。


<a id="window_attribs_fb"></a>

#### フレームバッファ関連の属性

GLFW はデフォルトフレームバッファ、すなわちウィンドウに接続されたフレームバッファのほとんどの属性を公開しません。これらは OpenGL、OpenGL ES、Vulkan のいずれかで直接取得できるためです。唯一の例外は [GLFW_DOUBLEBUFFER](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DOUBLEBUFFER_attrib) です。OpenGL ES がこの情報を提供しないためです。

OpenGL または OpenGL ES のバージョン 3.0 以降を使っている場合は、`glGetFramebufferAttachmentParameteriv` 関数で赤、緑、青、アルファ、深度、ステンシルの各バッファチャンネルのビット数を取得できます。それ以外の場合は `glGetIntegerv` 関数を使えます。

MSAA サンプル数は常に `glGetIntegerv` で取得します。フレームバッファオブジェクトをサポートするコンテキストでは、現在バインドされているフレームバッファのサンプル数が返ります。

属性 | glGetIntegerv | glGetFramebufferAttachmentParameteriv
---- | ------------- | -------------------------------------
赤のビット数 | `GL_RED_BITS` | `GL_FRAMEBUFFER_ATTACHMENT_RED_SIZE`
緑のビット数 | `GL_GREEN_BITS` | `GL_FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`
青のビット数 | `GL_BLUE_BITS` | `GL_FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`
アルファのビット数 | `GL_ALPHA_BITS` | `GL_FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`
深度のビット数 | `GL_DEPTH_BITS` | `GL_FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`
ステンシルのビット数 | `GL_STENCIL_BITS` | `GL_FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`
MSAAサンプル数 | `GL_SAMPLES` | _この関数では提供されません_

`glGetFramebufferAttachmentParameteriv` を呼び出すとき、赤、緑、青、アルファのサイズは `GL_BACK_LEFT` から取得し、深度とステンシルのサイズはそれぞれ `GL_DEPTH` と `GL_STENCIL` のアタッチメントから取得します。

<a id="GLFW_DOUBLEBUFFER_attrib"></a>

__GLFW_DOUBLEBUFFER__ は、指定したウィンドウが OpenGL または OpenGL ES での描画時にダブルバッファリングされるかどうかを示します。作成前に [GLFW_DOUBLEBUFFER](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_DOUBLEBUFFER_hint) ウィンドウヒントで設定できます。


<a id="buffer_swap"></a>

## バッファ交換

GLFW のウィンドウはデフォルトでダブルバッファリングされます。つまり、フロントバッファとバックバッファという2つの描画バッファがあります。表示されるのがフロントバッファで、描画先となるのがバックバッファです。

フレーム全体の描画が完了したら、描画した内容を表示して新しいフレームの描画を始めるために、バックバッファとフロントバッファを交換します。これは [glfwSwapBuffers](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14) で行います。

```c
glfwSwapBuffers(window);
```

バッファ交換の発生時点を選択すると便利な場合があります。[glfwSwapInterval](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed) 関数を使うと、[glfwSwapBuffers](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14) を呼び出してからバッファを交換するまでにドライバーが待つべき、モニターの最小リフレッシュ回数を選択できます。

```c
glfwSwapInterval(1);
```

間隔が0の場合、[glfwSwapBuffers](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14) の呼び出し時にリフレッシュを待たず、直ちに交換します。それ以外の場合は、各バッファ交換の間に少なくとも指定間隔分の垂直帰線が経過します。垂直帰線を待つ時間を測定したくないベンチマークでは、スワップ間隔0が便利です。一方、スワップ間隔1を使うとティアリングを避けられます。

一部のドライバーにはアプリケーションが要求するスワップ間隔を上書きする、ユーザー制御の設定があるため、すべてのマシンで機能するとは限りません。

`WGL_EXT_swap_control_tear` または `GLX_EXT_swap_control_tear` 拡張のいずれかをサポートするコンテキストは、_負の_スワップ間隔も受け付けます。これにより、フレームの到着が少し遅れてもドライバーが直ちに交換できます。目に見えるティアリングの危険性と引き換えに、フレームレートの安定性が高まります。これらの拡張は [glfwExtensionSupported](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga87425065c011cef1ebd6aac75e059dfa) で確認できます。
