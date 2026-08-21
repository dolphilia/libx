---
title: "モニターガイド"
description: "モニターオブジェクト、モード、ガンマランプ"
---

<a id="monitor_guide"></a>

# モニターガイド

このガイドでは、モニターに関連する GLFW の関数を紹介します。この分類の特定の関数について詳しくは、[monitor](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/)を参照してください。GLFW のほかの領域についてもガイドがあります。

 - [intro_guide](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_guide)
 - [window_guide](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_guide)
 - [context_guide](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_guide)
 - [vulkan_guide](/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_guide)
 - [input_guide](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_guide)


<a id="monitor_object"></a>

## モニターオブジェクト

モニターオブジェクトは、現在接続されているモニターを表し、[不透明型](https://en.wikipedia.org/wiki/Opaque_data_type) [GLFWmonitor](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3) へのポインターとして表現されます。アプリケーションはモニターオブジェクトを作成・破棄できません。そのアドレスは、表しているモニターが切断されるか、ライブラリが[終了](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init_terminate)するまで維持されます。

各モニターには、現在のビデオモード、サポートするビデオモードの一覧、仮想位置、人間が読める名前、推定物理サイズ、ガンマランプがあります。モニターのうち1つがプライマリモニターです。

モニターの仮想位置は[スクリーン座標](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#coordinate_systems)で表され、現在のビデオモードとともに、接続された各モニターがそれらにまたがる仮想デスクトップに対して提供するビューポートを表します。

GLFW がモニター構成と利用可能なビデオモードをどのように認識しているか確認するには、`monitors` テストプログラムを実行してください。


<a id="monitor_monitors"></a>

### モニターを取得する

プライマリモニターは [glfwGetPrimaryMonitor](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5) が返します。これはユーザーが優先するモニターであり、通常はタスクバーやメニューバーなど、システム全体の UI 要素があるモニターです。

```c
GLFWmonitor* primary = glfwGetPrimaryMonitor();
```

[glfwGetMonitors](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga70b1156d5d24e9928f145d6c864369d2) を使うと、現在接続されているすべてのモニターを取得できます。返される配列の有効期間については、リファレンスドキュメントを参照してください。

```c
int count;
GLFWmonitor** monitors = glfwGetMonitors(&count);
```

返される配列では、プライマリモニターが常に最初のモニターです。ただし、モニターの接続・切断時に、ほかのモニターが別のインデックスへ移動することがあります。


<a id="monitor_event"></a>

### モニター構成の変更

モニターが接続または切断されたときに通知を受け取りたい場合は、モニターコールバックを設定します。

```c
glfwSetMonitorCallback(monitor_callback);
```

コールバック関数は、接続または切断されたモニターのハンドルと、発生したイベントを受け取ります。

```c
void monitor_callback(GLFWmonitor* monitor, int event)
{
    if (event == GLFW_CONNECTED)
    {
        // The monitor was connected
    }
    else if (event == GLFW_DISCONNECTED)
    {
        // The monitor was disconnected
    }
}
```

モニターが切断されると、そのモニター上でフルスクリーンになっているすべてのウィンドウは、コールバックが呼び出される前にウィンドウモードへ切り替わります。切断されたモニターについて有用な値を返すのは [glfwGetMonitorName](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga7af83e13489d90379588fb331b9e4b68) と [glfwGetMonitorUserPointer](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5) だけであり、それもモニターコールバックが処理を返すまでに限られます。


<a id="monitor_properties"></a>

## モニターのプロパティ

各モニターには、現在のビデオモード、サポートするビデオモードの一覧、仮想位置、コンテンツスケール、人間が読める名前、ユーザーポインター、推定物理サイズ、ガンマランプがあります。


<a id="monitor_modes"></a>

### ビデオモード

フルスクリーンウィンドウの作成、ビデオモードの変更、ウィンドウモードからフルスクリーンへの切り替えを行うとき、GLFW は通常、適切なビデオモードをうまく選択します。ただし、どのビデオモードがサポートされているかを正確に把握すると便利な場合があります。

ビデオモードは [GLFWvidmode](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga902c2816ac9b34b757282daab59b2565) 構造体で表現されます。[glfwGetVideoModes](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b) を使うと、モニターがサポートするビデオモードの配列を取得できます。返される配列の有効期間については、リファレンスドキュメントを参照してください。

```c
int count;
GLFWvidmode* modes = glfwGetVideoModes(monitor, &count);
```

モニターの現在のビデオモードを取得するには、[glfwGetVideoMode](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5) を呼び出します。返されるポインターの有効期間については、リファレンスドキュメントを参照してください。

```c
const GLFWvidmode* mode = glfwGetVideoMode(monitor);
```

ビデオモードの解像度は、ピクセルではなく[スクリーン座標](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#coordinate_systems)で指定されます。


<a id="monitor_size"></a>

### 物理サイズ

モニターの物理サイズまたはその推定値は、[glfwGetMonitorPhysicalSize](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga7d8bffc6c55539286a6bd20d32a8d7ea) を使ってミリメートル単位で取得できます。これは現在の_解像度_、つまり現在の[ビデオモード](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_modes)の幅と高さとは関係ありません。

```c
int width_mm, height_mm;
glfwGetMonitorPhysicalSize(monitor, &width_mm, &height_mm);
```

この値からモニターの生の DPI を計算できますが、多くの場合は有用ではありません。代わりに、[モニターのコンテンツスケール](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_scale)と[ウィンドウのコンテンツスケール](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_scale)を使ってコンテンツを拡大・縮小してください。


<a id="monitor_scale"></a>

### コンテンツスケール

モニターのコンテンツスケールは [glfwGetMonitorContentScale](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad3152e84465fa620b601265ebfcdb21b) で取得できます。

```c
float xscale, yscale;
glfwGetMonitorContentScale(monitor, &xscale, &yscale);
```

コンテンツスケールの意味と使い方について詳しくは、[ウィンドウのコンテンツスケール](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_scale)を参照してください。


<a id="monitor_pos"></a>

### 仮想位置

仮想デスクトップ上のモニター位置は[スクリーン座標](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#coordinate_systems)で表され、[glfwGetMonitorPos](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga102f54e7acc9149edbcf0997152df8c9) で取得できます。

```c
int xpos, ypos;
glfwGetMonitorPos(monitor, &xpos, &ypos);
```


<a id="monitor_workarea"></a>

### ワークエリア

モニターのうち、システム全体のタスクバーやメニューバーが占有していない領域をワークエリアと呼びます。これは[スクリーン座標](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#coordinate_systems)で指定され、[glfwGetMonitorWorkarea](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga7387a3bdb64bfe8ebf2b9e54f5b6c9d0) で取得できます。

```c
int xpos, ypos, width, height;
glfwGetMonitorWorkarea(monitor, &xpos, &ypos, &width, &height);
```


<a id="monitor_name"></a>

### 人間が読める名前

モニターの UTF-8 でエンコードされた人間が読める名前は、[glfwGetMonitorName](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga7af83e13489d90379588fb331b9e4b68) が返します。返される文字列の有効期間については、リファレンスドキュメントを参照してください。

```c
const char* name = glfwGetMonitorName(monitor);
```

モニター名が一意であることは保証されません。同じメーカーの同じモデルのモニターは、同じ名前を持つ可能性があります。一意性が保証されるのはモニターハンドルだけであり、それもそのモニターが切断されるまでに限られます。


<a id="monitor_userptr"></a>

### ユーザーポインター

各モニターには、[glfwSetMonitorUserPointer](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga702750e24313a686d3637297b6e85fda) で設定し、[glfwGetMonitorUserPointer](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga1adbfbfb8cd58b23cfee82e574fbbdc5) で取得できるユーザーポインターがあります。任意の用途に使用でき、GLFW が変更することはありません。この値は、モニターが切断されるかライブラリが終了するまで保持されます。

ポインターの初期値は `NULL` です。


<a id="monitor_gamma"></a>

### ガンマランプ

モニターのガンマランプは [glfwSetGammaRamp](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd) で設定できます。この関数はモニターハンドルと [GLFWgammaramp](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga939cf093cb0af0498b7b54dc2e181404) 構造体へのポインターを受け取ります。

```c
GLFWgammaramp ramp;
unsigned short red[256], green[256], blue[256];

ramp.size = 256;
ramp.red = red;
ramp.green = green;
ramp.blue = blue;

for (i = 0;  i < ramp.size;  i++)
{
    // Fill out gamma ramp arrays as desired
}

glfwSetGammaRamp(monitor, &ramp);
```

ガンマランプのデータは関数が処理を返す前にコピーされるため、ランプの設定後に保持する必要はありません。

ガンマランプのサイズは、そのモニターの現在のガンマランプと同じにすることを推奨します。

モニターの現在のガンマランプは [glfwGetGammaRamp](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f) が返します。返される構造体の有効期間については、リファレンスドキュメントを参照してください。

```c
const GLFWgammaramp* ramp = glfwGetGammaRamp(monitor);
```

通常のガンマランプを設定したい場合は、[glfwSetGamma](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a) に希望する指数を渡すと GLFW が計算します。この関数は、生成したランプを使って [glfwSetGammaRamp](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd) を呼び出します。

```c
glfwSetGamma(monitor, 1.0);
```

[glfwSetGamma](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a) 関数を使ったガンマ補正を試すには、`gamma` テストプログラムを実行してください。

> **注:** ソフトウェア制御のガンマランプは、ハードウェアのガンマ補正に_加えて_適用されます。現在のハードウェア補正は通常、sRGB ガンマの近似です。したがって、完全に線形なランプ、すなわちガンマ 1.0 を設定すると、デフォルトの（通常は sRGB に似た）動作になります。

> **注:** __Wayland:__ アプリケーションはモニターのガンマランプを読み取りまたは変更できません。[glfwGetGammaRamp](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga76ba90debcf0062b5c4b73052b24f96f)、[glfwSetGammaRamp](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga583f0ffd0d29613d8cd172b996bbf0dd)、[glfwSetGamma](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga6ac582625c990220785ddd34efa3169a) の各関数は [GLFW_FEATURE_UNAVAILABLE](/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5) を通知します。
