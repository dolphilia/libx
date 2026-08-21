---
title: "入力ガイド"
description: "キーボード、マウス、ジョイスティック、ゲームパッド入力"
---

<a id="input_guide"></a>

# 入力ガイド

このガイドでは、入力に関連する GLFW の関数を紹介します。この分類の特定の関数について詳しくは、[input](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/)を参照してください。GLFW のほかの領域についてもガイドがあります。

 - [intro_guide](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_guide)
 - [window_guide](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_guide)
 - [context_guide](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_guide)
 - [vulkan_guide](/docs/glfw/v3-5-1/ja/03-guides/06-vulkan-guide/#vulkan_guide)
 - [monitor_guide](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide)

GLFW は多くの種類の入力を提供します。時刻のようにポーリングでしか取得できないものや、スクロールのようにコールバックでしか受け取れないものもありますが、多くの入力はコールバックとポーリングの両方を提供します。コールバックはポーリングより使用に手間がかかりますが、CPU 負荷が低く、状態変化を取りこぼさないことを保証します。

すべての入力コールバックはウィンドウハンドルを受け取ります。[ウィンドウのユーザーポインター](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_userptr)を使うと、コールバックからグローバルではない構造体やオブジェクトへアクセスできます。

さまざまなイベントコールバックの動作を把握するには、`events` テストプログラムを実行してください。このプログラムは GLFW がサポートするすべてのコールバックを登録し、各イベントについて渡されたすべての引数を、時刻・順序情報とともに出力します。


<a id="events"></a>

## イベント処理

GLFW は、アプリケーションへ入力を提供し、アプリケーションが応答不能になっていないことをウィンドウシステムへ示すために、ウィンドウシステムのイベントをポーリングする必要があります。イベント処理は通常、各フレームの[バッファ交換](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#buffer_swap)後に行います。ウィンドウがない場合でも、モニターとジョイスティックの接続イベントを受け取るにはイベントをポーリングする必要があります。

保留中のイベントを処理する関数は3つあります。[glfwPollEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832) は、すでに受信済みのイベントだけを処理し、直ちに処理を返します。

```c
glfwPollEvents();
```

ほとんどのゲームのように継続して描画する場合は、これが最適です。

新しい入力を受け取ったときだけウィンドウの内容を更新すればよい場合は、[glfwWaitEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e) のほうが適しています。

```c
glfwWaitEvents();
```

この関数は少なくとも1つのイベントを受信するまでスレッドを休止させ、その後、受信したすべてのイベントを処理します。CPU サイクルを大幅に節約でき、たとえば編集ツールに便利です。

イベントを待機しつつ、定期的な更新が必要な UI 要素などのタスクがある場合は、[glfwWaitEventsTimeout](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga605a178db92f1a7f1a925563ef3ea2cf) でタイムアウトを指定できます。

```c
glfwWaitEventsTimeout(0.7);
```

少なくとも1つのイベントを受信するか、指定した秒数が経過するまでスレッドを休止させ、その後、受信したイベントを処理します。

メインスレッドが [glfwWaitEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e) で休止している場合は、[glfwPostEmptyEvent](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab5997a25187e9fd5c6f2ecbbc8dfd7e9) でイベントキューへ空イベントを送信すると、別のスレッドから起こすことができます。

```c
glfwPostEmptyEvent();
```

コールバックが上記の関数への応答として_のみ_呼び出されると仮定しないでください。上記の方法の1つ以上でイベントを処理する必要はありますが、GLFW 自身のコールバック登録を必要とするウィンドウシステムは、多くのウィンドウシステム関数の呼び出しに応じて GLFW へイベントを渡すことがあります。GLFW は、処理を返す前にそのイベントをアプリケーションのコールバックへ渡します。

たとえば Windows では、[glfwSetWindowSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb) の実装に使われるシステム関数が、各ウィンドウにあり GLFW がそのウィンドウ向けに実装したイベントコールバックへ、ウィンドウサイズイベントを直接送信します。[ウィンドウサイズコールバック](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_size)を設定している場合、GLFW は [glfwSetWindowSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga371911f12c74c504dd8d47d832d095cb) の呼び出し全体が処理を返す前に、新しいサイズを指定してそのコールバックを呼び出します。


<a id="input_keyboard"></a>

## キーボード入力

GLFW はキーボード入力をキーイベントと文字イベントの2つに分類します。キーイベントは実際の物理キーボード上のキーに関係し、文字イベントはその一部を押すことで生成されるテキストに関係します。

キーと文字は 1:1 で対応しません。1回のキー押下で複数の文字が生成される場合があり、1つの文字を生成するために複数のキーが必要な場合もあります。使用中のマシンでは当てはまらないかもしれませんが、利用者全員が同じキーボード配列、入力方式、オペレーティングシステムを使うとは限りません。


<a id="input_key"></a>

### キー入力

物理キーが押された、離された、またはリピートされたときに通知を受け取りたい場合は、キーコールバックを設定します。

```c
glfwSetKeyCallback(window, key_callback);
```

コールバック関数は、[キーボードキー](/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/)、プラットフォーム固有のスキャンコード、キーアクション、[修飾キービット](/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/)を受け取ります。

```c
void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
    if (key == GLFW_KEY_E && action == GLFW_PRESS)
        activate_airship();
}
```

アクションは `GLFW_PRESS`、`GLFW_REPEAT`、`GLFW_RELEASE` のいずれかです。キーを押すたびに `GLFW_PRESS` と `GLFW_RELEASE` アクションのイベントが発生します。多くのキーは、押し続けている間に `GLFW_REPEAT` アクションのイベントも発生させます。

多くのキーボードには、同時に押されていることを検出できるキー数に制限があることに注意してください。この制限を[キーロールオーバー](https://en.wikipedia.org/wiki/Key_rollover)と呼びます。

`GLFW_REPEAT` アクションのキーイベントは、テキスト入力を目的としています。ユーザーのキーボード設定で指定された速度で発生します。複数のキーを押し続けても、リピートされるのは最大1つのキーです。どのキーが押し続けられているかの判断や、アニメーションの駆動を `GLFW_REPEAT` アクションに依存させてはいけません。代わりに、`GLFW_PRESS` と `GLFW_RELEASE` アクションに基づいて関係するキーの状態を保存するか、基本的なキャッシュ済みキー状態を提供する [glfwGetKey](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2) を呼び出してください。

キーは既存の[キートークン](/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/)のいずれかです。_E-mail_ キーや _Play_ キーなど、GLFW に対応するトークンがない場合は `GLFW_KEY_UNKNOWN` になります。

スキャンコードは、キートークンの有無にかかわらず各キーに固有です。スキャンコードはプラットフォーム固有ですが、時間が経過しても一貫します。そのため、キーのスキャンコードはプラットフォームごとに異なりますが、ディスクへ安全に保存できます。現在のプラットフォームがサポートする任意の[キートークン](/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/)について、[glfwGetKeyScancode](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga67ddd1b7dcbbaff03e4a76c0ea67103a) でスキャンコードを取得できます。

```c
const int scancode = glfwGetKeyScancode(GLFW_KEY_X);
set_key_mapping(scancode, swap_weapons);
```

[キートークン](/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/)を持つ各物理キーについて、最後に通知された状態はウィンドウごとの状態配列にも保存され、[glfwGetKey](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2) でポーリングできます。

```c
int state = glfwGetKey(window, GLFW_KEY_E);
if (state == GLFW_PRESS)
{
    activate_airship();
}
```

返される状態は `GLFW_PRESS` または `GLFW_RELEASE` です。

この関数が返すのは、キャッシュされたキーイベントの状態だけです。物理キーの現在の状態をシステムへ問い合わせることはなく、キーリピートに関する情報も提供しません。

<a id="GLFW_STICKY_KEYS"></a>

状態をポーリングする場合、探している状態変化を取りこぼす可能性があります。状態をポーリングする前に押されたキーが再び離されると、そのキー押下を取りこぼします。推奨される解決策はキーコールバックを使うことですが、`GLFW_STICKY_KEYS` 入力モードもあります。

```c
glfwSetInputMode(window, GLFW_STICKY_KEYS, GLFW_TRUE);
```

スティッキーキーモードを有効にすると、[glfwGetKey](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2) でそのキーの状態をポーリングするまで、ポーリング可能なキー状態が `GLFW_PRESS` のままになります。ポーリング後、その間にキー解放イベントが処理されていれば状態は `GLFW_RELEASE` へ戻り、そうでなければ `GLFW_PRESS` のままです。

<a id="GLFW_LOCK_KEY_MODS"></a>

入力イベントが生成された時点で Caps Lock と Num Lock がどの状態だったか知りたい場合は、`GLFW_LOCK_KEY_MODS` 入力モードを設定します。

```c
glfwSetInputMode(window, GLFW_LOCK_KEY_MODS, GLFW_TRUE);
```

この入力モードを有効にすると、[修飾キービット](/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/)を受け取るすべてのコールバックで、イベント発生時に Caps Lock がオンなら [GLFW_MOD_CAPS_LOCK](/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/#gaefeef8fcf825a6e43e241b337897200f) ビット、Num Lock がオンなら [GLFW_MOD_NUM_LOCK](/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/#ga64e020b8a42af8376e944baf61feecbe) ビットが設定されます。

`GLFW_KEY_LAST` 定数は、すべての[キートークン](/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/)のうち最大の値を保持します。


<a id="input_char"></a>

### テキスト入力

GLFW は、オペレーティングシステムのテキスト入力システムが生成する [Unicode コードポイント](https://en.wikipedia.org/wiki/Unicode)のストリームとしてテキスト入力をサポートします。キー入力とは異なり、テキスト入力はキーボード配列と修飾キーの影響を受け、[デッドキー](https://en.wikipedia.org/wiki/Dead_key)を使った文字の合成をサポートします。受信後は、コードポイントを UTF-8 など任意のエンコーディングへ変換できます。

GLFW がサポートするすべてのプラットフォームで `unsigned int` は32ビット長であるため、コードポイント引数をネイティブエンディアンの UTF-32 として扱えます。

通常のテキスト入力を提供する場合は、文字コールバックを設定します。

```c
glfwSetCharCallback(window, character_callback);
```

コールバック関数は、通常のテキスト入力につながるキーイベントについて Unicode コードポイントを受け取り、一般にはそのプラットフォームの標準テキストフィールドと同様に動作します。

```c
void character_callback(GLFWwindow* window, unsigned int codepoint)
{
}
```


<a id="input_key_name"></a>

### キー名

キーを名前で参照したい場合は、[glfwGetKeyName](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeaed62e69c3bd62b7ff8f7b19913ce4f) で、印字可能なキーのキーボード配列依存の名前を取得できます。

```c
const char* key_name = glfwGetKeyName(GLFW_KEY_W, 0);
show_tutorial_hint("Press %s to move forward", key_name);
```

この関数は[キーとスキャンコード](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_key)の両方を扱えます。指定したキーが `GLFW_KEY_UNKNOWN` ならスキャンコードを使い、それ以外の場合はスキャンコードを無視します。これはキーコールバックの動作と一致するため、コールバック引数を常に変更せずこの関数へ渡せます。


<a id="input_mouse"></a>

## マウス入力

マウス入力には、マウス移動、ボタン押下、スクロールオフセットなど、多くの形式があります。カーソルの外観も、独自画像またはシステムテーマの標準カーソル形状へ変更できます。


<a id="cursor_pos"></a>

### カーソル位置

カーソルがウィンドウ上を移動したときに通知を受け取りたい場合は、カーソル位置コールバックを設定します。

```c
glfwSetCursorPosCallback(window, cursor_position_callback);
```

コールバック関数は、ウィンドウのコンテンツ領域の左上隅を基準に、スクリーン座標で測定したカーソル位置を受け取ります。サブピクセルのカーソル位置を提供するプラットフォームでは、完全な値がそのまま渡されます。

```c
static void cursor_position_callback(GLFWwindow* window, double xpos, double ypos)
{
}
```

カーソル位置はウィンドウごとにも保存され、[glfwGetCursorPos](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc) でポーリングできます。

```c
double xpos, ypos;
glfwGetCursorPos(window, &xpos, &ypos);
```


<a id="cursor_mode"></a>

### カーソルモード

<a id="GLFW_CURSOR"></a>

`GLFW_CURSOR` 入力モードは、特殊な形式のマウス移動入力向けに複数のカーソルモードを提供します。デフォルトのカーソルモードは `GLFW_CURSOR_NORMAL` で、通常の矢印カーソル（または [glfwSetCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e) で設定した別のカーソル）を使い、カーソル移動を制限しません。

マウス移動に基づくカメラ操作など、無制限のマウス移動を必要とする入力方式を実装する場合は、カーソルモードを `GLFW_CURSOR_DISABLED` に設定します。

```c
glfwSetInputMode(window, GLFW_CURSOR, GLFW_CURSOR_DISABLED);
```

これによりカーソルが非表示になり、指定したウィンドウへ固定されます。その後、GLFW がカーソルの再中央配置とオフセット計算に関するすべての詳細を処理し、アプリケーションへ仮想カーソル位置を提供します。この仮想位置は通常どおり、カーソル位置コールバックとポーリングの両方で提供されます。

> **注:** GLFW のほかの機能を使って、この機能を独自に実装しないでください。そのような実装はサポートされず、`GLFW_CURSOR_DISABLED` ほど堅牢には動作しません。

カーソルがウィンドウ上にあるときだけ非表示にし、動作は通常のままにしたい場合は、カーソルモードを `GLFW_CURSOR_HIDDEN` に設定します。

```c
glfwSetInputMode(window, GLFW_CURSOR, GLFW_CURSOR_HIDDEN);
```

このモードはカーソルの移動を制限しません。

カーソルを表示したままウィンドウのコンテンツ領域内に閉じ込めたい場合は、カーソルモードを `GLFW_CURSOR_CAPTURED` に設定します。

```c
glfwSetInputMode(window, GLFW_CURSOR, GLFW_CURSOR_CAPTURED);
```

カーソルはコンテンツ領域内では通常どおり動作しますが、ウィンドウがフォーカスを失わない限り、その外へ出られません。

これらの特殊モードを終了するには、`GLFW_CURSOR_NORMAL` カーソルモードへ戻します。

```c
glfwSetInputMode(window, GLFW_CURSOR, GLFW_CURSOR_NORMAL);
```

カーソルが無効になっていた場合は、最後に表示されていた位置へ戻ります。


<a id="GLFW_RAW_MOUSE_MOTION"></a>
<a id="raw_mouse_motion"></a>

### 生のマウス移動

カーソルが無効な場合、利用可能であれば、生の（拡大・縮小や加速が適用されていない）マウス移動を有効にできます。

生のマウス移動は、表面上を移動する実際のマウスの動きにより近いものです。デスクトップカーソルの移動に適用される拡大・縮小や加速の影響を受けません。その処理はカーソルに適していますが、たとえば 3D カメラの制御には生の移動のほうが適しています。このため、生のマウス移動が提供されるのはカーソルが無効な場合だけです。

[glfwRawMouseMotionSupported](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gae4ee0dbd0d256183e1ea4026d897e1c2) を呼び出して現在のマシンが生の移動を提供するか確認し、`GLFW_RAW_MOUSE_MOTION` 入力モードを設定して有効にします。デフォルトでは無効です。

```c
if (glfwRawMouseMotionSupported())
    glfwSetInputMode(window, GLFW_RAW_MOUSE_MOTION, GLFW_TRUE);
```

サポートされていれば、生のマウス移動はウィンドウごとにいつでも有効・無効にできますが、提供されるのはカーソルが無効な場合だけです。


<a id="cursor_object"></a>

### カーソルオブジェクト

GLFW は、独自カーソル画像とシステムテーマのカーソル画像の両方の作成をサポートし、[GLFWcursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga89261ae18c75e863aaf2656ecdd238f4) オブジェクトとして内包します。[glfwCreateCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3) または [glfwCreateStandardCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf2fb2eb2c9dd842d1cef8a34e3c6403e) で作成し、[glfwDestroyCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a) で破棄します。残っている場合は [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) でも破棄されます。


<a id="cursor_custom"></a>

#### 独自カーソルを作成する

独自カーソルは [glfwCreateCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3) で作成します。この関数は作成したカーソルオブジェクトのハンドルを返します。たとえば、次のコードはホットスポットが左上隅にある 16×16 の白い正方形カーソルを作成します。

```c
unsigned char pixels[16 * 16 * 4];
memset(pixels, 0xff, sizeof(pixels));

GLFWimage image;
image.width = 16;
image.height = 16;
image.pixels = pixels;

GLFWcursor* cursor = glfwCreateCursor(&image, 0, 0);
```

カーソルの作成に失敗すると `NULL` が返るため、戻り値を確認する必要があります。

画像データは32ビット、リトルエンディアン、乗算済みではない RGBA 形式です。つまり、各チャンネル8ビットで、赤チャンネルが先頭です。ピクセルは左上隅から始まる連続した行として、標準的な順序で配置します。


<a id="cursor_standard"></a>

#### 標準カーソルを作成する

現在のシステムカーソルテーマにある[標準形状](/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/)のカーソルは、[glfwCreateStandardCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf2fb2eb2c9dd842d1cef8a34e3c6403e) で作成できます。

```c
GLFWcursor* url_cursor = glfwCreateStandardCursor(GLFW_POINTING_HAND_CURSOR);
```

システムカーソルテーマが実際の画像を提供する点を除き、これらのカーソルオブジェクトは [glfwCreateCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga556f604f73af156c0db0e97c081373c3) で作成したものとまったく同じように動作します。

一部の形状はすべての環境で利用できるわけではありません。形状を利用できない場合は `NULL` が返ります。詳しくは [glfwCreateStandardCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf2fb2eb2c9dd842d1cef8a34e3c6403e)を参照してください。


<a id="cursor_destruction"></a>

#### カーソルを破棄する

カーソルが不要になったら、[glfwDestroyCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga81b952cd1764274d0db7fb3c5a79ba6a) で破棄します。

```c
glfwDestroyCursor(cursor);
```

カーソルの破棄は常に成功します。いずれかのウィンドウでカレントになっているカーソルを破棄すると、そのウィンドウはデフォルトカーソルへ戻ります。カーソルモードには影響しません。[glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) の呼び出し時に残っているすべてのカーソルも破棄されます。


<a id="cursor_set"></a>

#### カーソルを設定する

[glfwSetCursor](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad3b4f38c8d5dae036bc8fa959e18343e) を使うと、カーソルをウィンドウのカレントカーソルに設定できます。

```c
glfwSetCursor(window, cursor);
```

設定後、システムカーソルがウィンドウのコンテンツ領域上にあり、[カーソルモード](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_mode)が `GLFW_CURSOR_NORMAL` に設定されている間、そのカーソル画像が使われます。

単一のカーソルを任意の数のウィンドウへ設定できます。

デフォルトカーソルへ戻すには、そのウィンドウのカーソルを `NULL` に設定します。

```c
glfwSetCursor(window, NULL);
```

カーソルを破棄すると、そのカーソルを設定しているすべてのウィンドウがデフォルトカーソルへ戻ります。カーソルモードには影響しません。


<a id="cursor_enter"></a>

### カーソルの出入りイベント

カーソルがウィンドウのコンテンツ領域へ入った、または領域から出たときに通知を受け取りたい場合は、カーソル出入りコールバックを設定します。

```c
glfwSetCursorEnterCallback(window, cursor_enter_callback);
```

コールバック関数は、カーソルの新しい分類を受け取ります。

```c
void cursor_enter_callback(GLFWwindow* window, int entered)
{
    if (entered)
    {
        // The cursor entered the content area of the window
    }
    else
    {
        // The cursor left the content area of the window
    }
}
```

[GLFW_HOVERED](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_HOVERED_attrib) ウィンドウ属性を使うと、カーソルが現在ウィンドウのコンテンツ領域内にあるか照会できます。

```c
if (glfwGetWindowAttrib(window, GLFW_HOVERED))
{
    highlight_interface();
}
```


<a id="input_mouse_button"></a>

### マウスボタン入力

マウスボタンが押された、または離されたときに通知を受け取りたい場合は、マウスボタンコールバックを設定します。

```c
glfwSetMouseButtonCallback(window, mouse_button_callback);
```

<a id="GLFW_UNLIMITED_MOUSE_BUTTONS"></a>

関連する[ボタントークン](/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/)を持つものだけではなく、すべてのマウスボタンをコールバックで扱うには、[GLFW_UNLIMITED_MOUSE_BUTTONS](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS) 入力モードを設定します。

```c
glfwSetInputMode(window, GLFW_UNLIMITED_MOUSE_BUTTONS, GLFW_TRUE);
```

この入力モードを有効にすると、GLFW は通知するマウスボタンを、関連するボタントークンを持つものだけに制限しません。これは、[GLFW_MOUSE_BUTTON_LAST](/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/#gab1fd86a4518a9141ec7bcde2e15a2fdf) より大きいボタンを一切通知しなかった以前の GLFW バージョンとの互換性のための制限で、利用者が依存している可能性があります。

コールバック関数は、[マウスボタン](/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/)、ボタンアクション、[修飾キービット](/docs/glfw/v3-5-1/ja/04-reference/10-modifier-key-flags/)を受け取ります。

```c
void mouse_button_callback(GLFWwindow* window, int button, int action, int mods)
{
    if (button == GLFW_MOUSE_BUTTON_RIGHT && action == GLFW_PRESS)
        popup_menu();
}
```

マウスボタンは整数で、[マウスボタントークン](/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/)のいずれか、または [GLFW_UNLIMITED_MOUSE_BUTTONS](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS) 入力モードが設定されている場合は、その他の任意の正の値になります。

アクションは `GLFW_PRESS` または `GLFW_RELEASE` です。

各[マウスボタントークン](/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/)について最後に通知された状態は、ウィンドウごとの状態配列にも保存され、[glfwGetMouseButton](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1473feacb5996c01a7a5a33b5066704) でポーリングできます。これは [GLFW_UNLIMITED_MOUSE_BUTTONS](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS) 入力モードの影響を受けません。

```c
int state = glfwGetMouseButton(window, GLFW_MOUSE_BUTTON_LEFT);
if (state == GLFW_PRESS)
{
    upgrade_cow();
}
```

返される状態は `GLFW_PRESS` または `GLFW_RELEASE` です。

この関数が返すのは、キャッシュされたマウスボタンイベントの状態だけです。マウスボタンの現在の状態をシステムへ問い合わせることはありません。

<a id="GLFW_STICKY_MOUSE_BUTTONS"></a>

状態をポーリングする場合、探している状態変化を取りこぼす可能性があります。状態をポーリングする前に押されたマウスボタンが再び離されると、そのボタン押下を取りこぼします。推奨される解決策はマウスボタンコールバックを使うことですが、`GLFW_STICKY_MOUSE_BUTTONS` 入力モードもあります。

```c
glfwSetInputMode(window, GLFW_STICKY_MOUSE_BUTTONS, GLFW_TRUE);
```

スティッキーマウスボタンモードを有効にすると、[glfwGetMouseButton](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1473feacb5996c01a7a5a33b5066704) でそのボタンの状態をポーリングするまで、ポーリング可能なマウスボタン状態が `GLFW_PRESS` のままになります。ポーリング後、その間にマウスボタン解放イベントが処理されていれば状態は `GLFW_RELEASE` へ戻り、そうでなければ `GLFW_PRESS` のままです。

`GLFW_MOUSE_BUTTON_LAST` 定数は、すべての[マウスボタントークン](/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/)のうち最大の値を保持します。


<a id="scrolling"></a>

### スクロール入力

マウスホイールまたはタッチパッドのジェスチャーでユーザーがスクロールしたときに通知を受け取りたい場合は、スクロールコールバックを設定します。

```c
glfwSetScrollCallback(window, scroll_callback);
```

コールバック関数は、2次元のスクロールオフセットを受け取ります。

```c
void scroll_callback(GLFWwindow* window, double xoffset, double yoffset)
{
}
```

通常のマウスホイールは垂直方向なので、Y 軸方向のオフセットを提供します。


<a id="joystick"></a>

## ジョイスティック入力

ジョイスティック関数は、接続されたジョイスティックとコントローラーを公開し、どちらもジョイスティックと呼びます。`GLFW_JOYSTICK_1`、`GLFW_JOYSTICK_2` から `GLFW_JOYSTICK_16`（`GLFW_JOYSTICK_LAST`）まで、最大16台のジョイスティックをサポートします。[glfwJoystickPresent](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1) で[ジョイスティック](/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/)が存在するか検査できます。

```c
int present = glfwJoystickPresent(GLFW_JOYSTICK_1);
```

各ジョイスティックには、0個以上の軸、0個以上のボタン、0個以上のハット、人間が読める名前、ユーザーポインター、SDL 互換 GUID があります。

検出されたジョイスティックは配列の先頭から追加されます。一度検出されたジョイスティックは、切断されるかライブラリが終了するまで割り当てられた ID を維持します。そのため、ジョイスティックの接続・切断に伴って ID に空きが生じることがあります。

ジョイスティックの軸、ボタン、ハットの状態はポーリング時に更新され、ウィンドウの作成やイベント処理を必要としません。ただし、ジョイスティックの接続・切断イベントを確実に[ジョイスティックコールバック](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_event)へ配信するには、[イベントを処理](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events)しなければなりません。

接続されたすべてのジョイスティックの全プロパティをリアルタイムで確認するには、`joysticks` テストプログラムを実行してください。


<a id="joystick_axis"></a>

### ジョイスティックの軸状態

ジョイスティックの全軸の位置は [glfwGetJoystickAxes](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408) が返します。返される配列の有効期間については、リファレンスドキュメントを参照してください。

```c
int count;
const float* axes = glfwGetJoystickAxes(GLFW_JOYSTICK_5, &count);
```

返される配列の各要素は -1.0 から 1.0 までの値です。


<a id="joystick_button"></a>

### ジョイスティックのボタン状態

ジョイスティックの全ボタンの状態は [glfwGetJoystickButtons](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) が返します。返される配列の有効期間については、リファレンスドキュメントを参照してください。

```c
int count;
const unsigned char* buttons = glfwGetJoystickButtons(GLFW_JOYSTICK_3, &count);
```

返される配列の各要素は `GLFW_PRESS` または `GLFW_RELEASE` です。

[glfwGetJoystickHats](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c) がなかった以前のバージョンとの後方互換性のため、デフォルトではボタン配列にすべてのハットも含まれます。詳しくは [glfwGetJoystickButtons](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) のリファレンスドキュメントを参照してください。


<a id="joystick_hat"></a>

### ジョイスティックのハット状態

すべてのハットの状態は [glfwGetJoystickHats](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c) が返します。返される配列の有効期間については、リファレンスドキュメントを参照してください。

```c
int count;
const unsigned char* hats = glfwGetJoystickHats(GLFW_JOYSTICK_7, &count);
```

返される配列の各要素は次のいずれかです。

名前 | 値
---- | --
`GLFW_HAT_CENTERED` | 0
`GLFW_HAT_UP` | 1
`GLFW_HAT_RIGHT` | 2
`GLFW_HAT_DOWN` | 4
`GLFW_HAT_LEFT` | 8
`GLFW_HAT_RIGHT_UP` | `GLFW_HAT_RIGHT` \| `GLFW_HAT_UP`
`GLFW_HAT_RIGHT_DOWN` | `GLFW_HAT_RIGHT` \| `GLFW_HAT_DOWN`
`GLFW_HAT_LEFT_UP` | `GLFW_HAT_LEFT` \| `GLFW_HAT_UP`
`GLFW_HAT_LEFT_DOWN` | `GLFW_HAT_LEFT` \| `GLFW_HAT_DOWN`

斜め方向は、基本方向（上、右、下、左）のビット単位の組み合わせです。対応する方向との AND を取ることで個別に検査できます。

```c
if (hats[2] & GLFW_HAT_RIGHT)
{
    // State of hat 2 could be right-up, right or right-down
}
```

[glfwGetJoystickHats](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga06e660841b3e79c54da4f54a932c5a2c) がなかった以前のバージョンとの後方互換性のため、デフォルトではすべてのハットがボタン配列にも含まれます。詳しくは [glfwGetJoystickButtons](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) のリファレンスドキュメントを参照してください。


<a id="joystick_name"></a>

### ジョイスティック名

ジョイスティックの UTF-8 でエンコードされた人間が読める名前は、[glfwGetJoystickName](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac6a8e769e18e0bcfa9097793fc2c3978) が返します。返される文字列の有効期間については、リファレンスドキュメントを参照してください。

```c
const char* name = glfwGetJoystickName(GLFW_JOYSTICK_4);
```

ジョイスティック名が一意であることは保証されません。同じメーカーの同じモデルのジョイスティックは、同じ名前を持つ可能性があります。一意性が保証されるのは[ジョイスティック ID](/docs/glfw/v3-5-1/ja/04-reference/12-joysticks/) だけであり、それもそのジョイスティックが切断されるまでに限られます。


<a id="joystick_userptr"></a>

### ジョイスティックのユーザーポインター

各ジョイスティックには、[glfwSetJoystickUserPointer](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga6b2f72d64d636b48a727b437cbb7489e) で設定し、[glfwGetJoystickUserPointer](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga18cefd7265d1fa04f3fd38a6746db5f3) で取得できるユーザーポインターがあります。任意の用途に使用でき、GLFW が変更することはありません。この値は、ジョイスティックが切断されるかライブラリが終了するまで保持されます。

ポインターの初期値は `NULL` です。


<a id="joystick_event"></a>

### ジョイスティック構成の変更

ジョイスティックが接続または切断されたときに通知を受け取りたい場合は、ジョイスティックコールバックを設定します。

```c
glfwSetJoystickCallback(joystick_callback);
```

コールバック関数は、接続または切断されたジョイスティックの ID と、発生したイベントを受け取ります。

```c
void joystick_callback(int jid, int event)
{
    if (event == GLFW_CONNECTED)
    {
        // The joystick was connected
    }
    else if (event == GLFW_DISCONNECTED)
    {
        // The joystick was disconnected
    }
}
```

すべてのプラットフォームでジョイスティックの接続・切断イベントを配信するには、[イベント処理](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#events)関数のいずれかを呼び出す必要があります。ジョイスティック関数が切断を検出し、コールバックを呼び出す場合もあります。その場合、関数は切断されたジョイスティックについて通常返す値を返します。

切断されたジョイスティックについて有用な値を返すのは [glfwGetJoystickName](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac6a8e769e18e0bcfa9097793fc2c3978) と [glfwGetJoystickUserPointer](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga18cefd7265d1fa04f3fd38a6746db5f3) だけであり、それもモニターコールバックが処理を返すまでに限られます。


<a id="gamepad"></a>

### ゲームパッド入力

ジョイスティック関数が提供する軸、ボタン、ハットには、デバイス上のどこに配置されているかを示すラベルがありません。同じデバイスでも、プラットフォーム間で順序が異なる場合があります。

この問題を解決するため、SDL コミュニティは、多くの異なるデバイスから Xbox 風ゲームパッドへのマッピングデータベースである [SDL_GameControllerDB][] プロジェクトをクラウドソーシングで作成しました。

[SDL_GameControllerDB]: https://github.com/gabomdq/SDL_GameControllerDB

GLFW はこのマッピング形式をサポートし、リリース時点で利用可能なマッピングのコピーを内蔵しています。実行時の更新方法については [gamepad_mapping](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#gamepad_mapping)を参照してください。ジョイスティックの接続時やマッピングの更新時には、マッピングがジョイスティックへ自動的に割り当てられます。

[glfwJoystickIsGamepad](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad0f676860f329d80f7e47e9f06a96f00) を使うと、ジョイスティックが存在し、かつゲームパッドマッピングを持つか確認できます。

```c
if (glfwJoystickIsGamepad(GLFW_JOYSTICK_2))
{
    // Use as gamepad
}
```

ゲームパッド入力だけに関心がある場合は、[glfwJoystickPresent](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1) の代わりにこの関数を使えます。

[glfwGetGamepadName](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga8aea73a1a25cc6c0486a617019f56728) を使うと、ゲームパッドマッピングが提供する人間が読める名前を取得できます。これは[ジョイスティック名](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#joystick_name)と同じ場合も異なる場合もあります。

```c
const char* name = glfwGetGamepadName(GLFW_JOYSTICK_7);
```

ジョイスティックのゲームパッド状態を取得するには、[glfwGetGamepadState](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadccddea8bce6113fa459de379ddaf051) を呼び出します。

```c
GLFWgamepadstate state;

if (glfwGetGamepadState(GLFW_JOYSTICK_3, &state))
{
    if (state.buttons[GLFW_GAMEPAD_BUTTON_A])
    {
        input_jump();
    }

    input_speed(state.axes[GLFW_GAMEPAD_AXIS_RIGHT_TRIGGER]);
}
```

[GLFWgamepadstate](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga61acfb1f28f751438dd221225c5e725d) 構造体には、ボタン状態用と軸状態用の2つの配列があります。各ボタンと軸の値は、[glfwGetJoystickButtons](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) および [glfwGetJoystickAxes](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408) 関数と同じです。つまり、ボタンは `GLFW_PRESS` または `GLFW_RELEASE`、軸は -1.0 以上 1.0 以下です。

配列のサイズと各配列内の位置は固定されています。

[ボタンインデックス](/docs/glfw/v3-5-1/ja/04-reference/14-gamepad-buttons/)は `GLFW_GAMEPAD_BUTTON_A`、`GLFW_GAMEPAD_BUTTON_B`、`GLFW_GAMEPAD_BUTTON_X`、`GLFW_GAMEPAD_BUTTON_Y`、`GLFW_GAMEPAD_BUTTON_LEFT_BUMPER`、`GLFW_GAMEPAD_BUTTON_RIGHT_BUMPER`、`GLFW_GAMEPAD_BUTTON_BACK`、`GLFW_GAMEPAD_BUTTON_START`、`GLFW_GAMEPAD_BUTTON_GUIDE`、`GLFW_GAMEPAD_BUTTON_LEFT_THUMB`、`GLFW_GAMEPAD_BUTTON_RIGHT_THUMB`、`GLFW_GAMEPAD_BUTTON_DPAD_UP`、`GLFW_GAMEPAD_BUTTON_DPAD_RIGHT`、`GLFW_GAMEPAD_BUTTON_DPAD_DOWN`、`GLFW_GAMEPAD_BUTTON_DPAD_LEFT` です。

必要であれば、A、B、X、Y ボタンインデックスの別名として `GLFW_GAMEPAD_BUTTON_CROSS`、`GLFW_GAMEPAD_BUTTON_CIRCLE`、`GLFW_GAMEPAD_BUTTON_SQUARE`、`GLFW_GAMEPAD_BUTTON_TRIANGLE` も利用できます。

[軸インデックス](/docs/glfw/v3-5-1/ja/04-reference/15-gamepad-axes/)は `GLFW_GAMEPAD_AXIS_LEFT_X`、`GLFW_GAMEPAD_AXIS_LEFT_Y`、`GLFW_GAMEPAD_AXIS_RIGHT_X`、`GLFW_GAMEPAD_AXIS_RIGHT_Y`、`GLFW_GAMEPAD_AXIS_LEFT_TRIGGER`、`GLFW_GAMEPAD_AXIS_RIGHT_TRIGGER` です。

`GLFW_GAMEPAD_BUTTON_LAST` と `GLFW_GAMEPAD_AXIS_LAST` 定数は、それぞれの配列で利用可能な最大のインデックスと等しくなります。


<a id="gamepad_mapping"></a>

### ゲームパッドマッピング

GLFW は、リリース時点で [SDL_GameControllerDB][] にあるマッピングのコピーを内蔵しています。新しいマッピングは [glfwUpdateGamepadMappings](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed5104612f2fa8e66aa6e846652ad00f) で実行時に追加できます。

```c
const char* mappings = load_file_contents("game/data/gamecontrollerdb.txt");

glfwUpdateGamepadMappings(mappings);
```

この関数は、単一行から変更されていない `gamecontrollerdb.txt` ファイル全体までをサポートします。

CMake を使って GLFW をソースからコンパイルする場合は、_update_mappings_ ターゲットをビルドすると、組み込みマッピングを更新できます。これは `GenerateMappings.cmake` CMake スクリプトを実行し、`gamecontrollerdb.txt` をダウンロードして `mappings.h` ヘッダーファイルを再生成します。

以下ではマッピング形式について説明します。ただし、__この説明は正式な仕様ではない__ことに注意してください。この形式は SDL および SDL_GameControllerDB プロジェクトが定義しており、そのドキュメントとコードが優先されます。

各マッピングは、ゲームパッドの GUID、名前、配置を説明するカンマ区切り値の単一行です。16進数字で始まらない行は無視されます。

最初の値は常にゲームパッド GUID です。32文字の16進文字列で、通常はメーカー、モデル、リビジョン、コンピューターへの接続方式を識別します。この情報を利用できない場合、GUID はゲームパッド名を使って生成されます。GLFW は SDL 2.0.5 以降の GUID 形式を使いますが、古い形式から変換できます。

2番目の値は常に、人間が読めるゲームパッド名です。

それ以降の値はすべて `<field>:<value>` の形式で、マッピングの配置を説明します。すべてのフィールドが存在するとは限らず、順序も問いません。

ボタンフィールドは `a`、`b`、`x`、`y`、`back`、`start`、`guide`、`dpup`、`dpright`、`dpdown`、`dpleft`、`leftshoulder`、`rightshoulder`、`leftstick`、`rightstick` です。

軸フィールドは `leftx`、`lefty`、`rightx`、`righty`、`lefttrigger`、`righttrigger` です。

軸またはボタンフィールドの値には、ジョイスティックボタン、ジョイスティック軸、ハットのビットマスク、または空値を指定できます。ジョイスティックボタンは `bN` で指定します。たとえば3番目のボタンは `b2` です。ジョイスティック軸は `aN` で指定します。たとえば8番目のボタンは `a7` です。ジョイスティックハットのビットマスクは `hN.N` で指定します。たとえば最初のハットの左方向は `h0.8` です。マスクには複数のビットを設定できます。

軸の前には `+` または `-` の範囲修飾子を付けられます。たとえば4番目の軸の正の半分は `+a3` です。これにより、入力をジョイスティック軸の正または負の半分だけに制限します。軸または半軸の後には `~` 反転修飾子を付けられます。たとえば `a2~` または `-a7~` です。これはゲームパッド軸の値の符号を反転します。

ハットのビットマスクは、ジョイスティック関数の[ハット状態](/docs/glfw/v3-5-1/ja/04-reference/13-joystick-hat-states/)と一致します。

マッピングが有効なプラットフォームを指定する、特別な `platform` フィールドもあります。指定できる値は `Windows`、`Mac OS X`、`Linux` です。

ゲームパッドマッピングの例を次に示します。これは Windows 上で XInput API を介してアクセスする Xbox コントローラー用に GLFW が内蔵しているものです。ページに収めるため複数行に分割していますが、実際のゲームパッドマッピングは単一行でなければなりません。

```
78696e70757401000000000000000000,XInput Gamepad (GLFW),platform:Windows,a:b0,
b:b1,x:b2,y:b3,leftshoulder:b4,rightshoulder:b5,back:b6,start:b7,leftstick:b8,
rightstick:b9,leftx:a0,lefty:a1,rightx:a2,righty:a3,lefttrigger:a4,
righttrigger:a5,dpup:h0.1,dpright:h0.2,dpdown:h0.4,dpleft:h0.8,
```

> **注:** GLFW は、SDL に最近追加された出力範囲と `+` および `-` 修飾子をまだサポートしません。入力修飾子 `+`、`-`、`~` はサポートされ、上記で説明しています。


<a id="time"></a>

## 時刻入力

GLFW は [glfwGetTime](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa6cf4e7a77158a3b8fd00328b1720a4a) で、秒単位の高分解能な時刻入力を提供します。

```c
double seconds = glfwGetTime();
```

[glfwInit](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga317aac130a235ab08c6db0834907d85e) でライブラリを初期化してからの経過秒数を返します。使用されるプラットフォーム固有の時刻源は、通常マイクロ秒またはナノ秒の分解能を持ちます。

[glfwSetTime](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf59589ef6e8b8c8b5ad184b25afd4dc0) で基準時刻を変更できます。

```c
glfwSetTime(4.0);
```

これは時刻を指定した秒数へ設定し、そこから計時を続けます。

[glfwGetTimerValue](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga09b2bd37d328e0b9456c7ec575cc26aa) を使うと、上記の関数の実装に使われる生のタイマーへアクセスすることもできます。

```c
uint64_t value = glfwGetTimerValue();
```

この値の単位は 1&nbsp;/&nbsp;frequency 秒です。生のタイマーの周波数は、オペレーティングシステムとハードウェアによって異なります。[glfwGetTimerFrequency](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga3289ee876572f6e91f06df3a24824443) で周波数を Hz 単位で取得できます。

```c
uint64_t frequency = glfwGetTimerFrequency();
```


<a id="clipboard"></a>

## クリップボード入出力

システムクリップボードに UTF-8 エンコードの文字列が含まれる場合、またはその形式へ変換できる場合は、[glfwGetClipboardString](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga71a5b20808ea92193d65c21b82580355) で取得できます。返される文字列の有効期間については、リファレンスドキュメントを参照してください。

```c
const char* text = glfwGetClipboardString(NULL);
if (text)
{
    insert_text(text);
}
```

クリップボードが空の場合、または内容を変換できなかった場合は `NULL` が返ります。

[glfwSetClipboardString](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaba1f022c5eb07dfac421df34cdcd31dd) を使うと、システムクリップボードの内容を UTF-8 エンコードの文字列へ設定できます。

```c
glfwSetClipboardString(NULL, "A string with words in it");
```


<a id="path_drop"></a>

## パスのドロップ入力

ウィンドウへドロップされたファイルやディレクトリのパスを受け取りたい場合は、ファイルドロップコールバックを設定します。

```c
glfwSetDropCallback(window, drop_callback);
```

コールバック関数は、UTF-8 でエンコードされたパスの配列を受け取ります。

```c
void drop_callback(GLFWwindow* window, int count, const char** paths)
{
    int i;
    for (i = 0;  i < count;  i++)
        handle_dropped_file(paths[i]);
}
```

パス配列とその文字列が有効なのは、ファイルドロップコールバックが処理を返すまでです。そのイベント専用に生成された可能性があるためです。パスを保持したい場合は、配列のディープコピーを作成する必要があります。
