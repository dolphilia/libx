---
title: "GLFW 2 から 3 への移行"
description: "GLFW 2 ユーザー向け移行ガイド"
---

<a id="moving_guide"></a>

# GLFW 2 から 3 への移行
これは GLFW 2 から 3 へ移行するためのガイドです。変更または削除された内容を説明しますが、既存のコードベースを新しい API へ移行する際に必要なものを除き、[新機能](/docs/glfw/v3-5-1/ja/05-migration-and-history/02-release-notes/#news)は扱いません。たとえば、GLFW 3 でフルスクリーンウィンドウを作成するには、新しいマルチモニター関数が必要です。


<a id="moving_removed"></a>

## 変更・削除された機能
<a id="moving_renamed_files"></a>

### 名前が変更されたライブラリとヘッダーファイル
GLFW 3 のヘッダーは [glfw3](https://github.com/glfw/glfw/blob/3.5.1/include/GLFW/glfw3.h).h という名前で `GLFW` ディレクトリへ移動され、ほかのメジャーバージョンのヘッダーとの衝突を避けています。同様に、GLFW 3 ライブラリの名前は `glfw3,` です。ただし、Unix 系システムで共有ライブラリとしてインストールされる場合は、[soname][] `libglfw.so.3` を使用します。

[soname]: https://en.wikipedia.org/wiki/soname

__旧構文__
```c
#include <GL/glfw.h>
```

__新構文__
```c
#include <GLFW/glfw3.h>
```


<a id="moving_threads"></a>

### スレッド関数の削除
スレッド単位のスリープ関数を含むスレッド関数は削除されました。これらはかなり原始的で、あまり使われず、統合も不十分であり、GLFW の中心領域（コンテキスト、入力、ウィンドウ）に充てる時間を奪っていました。より優れたスレッドライブラリが存在し、普及しつつある [C++11][] と [C11][] の両方でネイティブのスレッド機能を利用できます。

[C++11]: https://en.cppreference.com/w/cpp/thread
[C11]: https://en.cppreference.com/w/c/thread

C++11 または C11 の機能を使用したくてもコンパイラーがまだ対応していない場合は、GLFW の原作者が作成した [TinyThread++][] および [TinyCThread][] プロジェクトを参照してください。これらのライブラリは C++11 と C11 のスレッド API の実用的なサブセットを実装しており、実際に GLFW 3 の一部のテストプログラムでも TinyCThread を使用しています。

[TinyThread++]: https://gitorious.org/tinythread/tinythreadpp
[TinyCThread]: https://github.com/tinycthread/tinycthread

一方、GLFW 3 は GLFW 2 よりも_複数スレッドからの使用_を適切にサポートしています。一度に 1 スレッドだけという制約はありますが、どのスレッドでもコンテキストをカレントにできます。また、どの関数を任意のスレッドから使用でき、どの関数をメインスレッドからのみ使用すべきかがドキュメントに明記されています。

__削除された関数__
> `glfwSleep`, `glfwCreateThread`, `glfwDestroyThread`, `glfwWaitThread`,
> `glfwGetThreadID`, `glfwCreateMutex`, `glfwDestroyMutex`, `glfwLockMutex`,
> `glfwUnlockMutex`, `glfwCreateCond`, `glfwDestroyCond`, `glfwWaitCond`,
> `glfwSignalCond`, `glfwBroadcastCond` and `glfwGetNumberOfProcessors`.

__削除された型__
> `GLFWthreadfun`


<a id="moving_image"></a>

### 画像・テクスチャ読み込みの削除
画像およびテクスチャ読み込み関数は削除されました。Targa 画像形式しかサポートしておらず、主に初心者向けの例でしか役立たなかったためです。GLFW 3 に残すに値する品質にするには、ほかの形式だけでなく、OpenGL テクスチャリングの現代的な拡張もサポートする必要がありました。その場合、多数の外部依存関係（libjpeg、libpng など）を追加するか、それらのライブラリの組み込み版を GLFW に同梱することになります。

すでに同じ処理を行うライブラリがあるため、作業を重複させ、その複製を GLFW に結び付ける必要はありません。OpenGL と stdio は GLFW が利用できる場所ならどこでも利用できるため、そのようなライブラリはプラットフォーム非依存にもできます。

__削除された関数__
> `glfwReadImage`, `glfwReadMemoryImage`, `glfwFreeImage`, `glfwLoadTexture2D`,
> `glfwLoadMemoryTexture2D` and `glfwLoadTextureImage2D`.


<a id="moving_stdcall"></a>

### GLFWCALL マクロの削除
Windows 上でコールバック関数に [\_\_stdcall][stdcall] を使用させる `GLFWCALL` マクロは削除されました。GLFW は Pascal ではなく C で記述されています。このマクロの削除により、すべてのコールバック関数へ `GLFWCALL` を付ける要件をアプリケーション開発者が覚える必要がなくなります。また、`@n` エントリーポイント接尾辞を明示的に無効化する必要がなくなり、DLL と DLL リンクライブラリの作成も簡単になります。

[stdcall]: https://msdn.microsoft.com/en-us/library/zxk0tw93.aspx

__旧構文__
```c
void GLFWCALL callback_function(...);
```

__新構文__
```c
void callback_function(...);
```


<a id="moving_window_handles"></a>

### ウィンドウハンドル引数
GLFW 3 は複数のウィンドウをサポートするため、ウィンドウ関連のすべての GLFW 関数とコールバックにウィンドウハンドル引数が追加されました。新しく作成されたウィンドウのハンドルは、以前の `glfwOpenWindow` に相当する [glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) が返します。ウィンドウハンドルは、[不透明型][opaque-type] [GLFWwindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3c96d80d363e67d13a41b5d1821f3242) へのポインターです。

[opaque-type]: https://en.wikipedia.org/wiki/Opaque_data_type

__旧構文__
```c
glfwSetWindowTitle("New Window Title");
```

__新構文__
```c
glfwSetWindowTitle(window, "New Window Title");
```


<a id="moving_monitor"></a>

### 明示的なモニター選択
GLFW 3 は複数のモニターをサポートします。フルスクリーンモードのウィンドウを要求するには、`GLFW_FULLSCREEN` を渡す代わりに、ウィンドウで使用するモニターを指定します。[glfwGetPrimaryMonitor](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gac3adb24947eb709e1874028272e5dfc5) 関数は GLFW 2 が選択していたモニターを返しますが、ほかにも多数の[モニター関数](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide)があります。モニターハンドルは、[不透明型][opaque-type] [GLFWmonitor](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#ga8d9efd1cde9426692c73fe40437d0ae3) へのポインターです。

__旧式の基本的なフルスクリーン__
```c
glfwOpenWindow(640, 480, 8, 8, 8, 0, 24, 0, GLFW_FULLSCREEN);
```

__新式の基本的なフルスクリーン__
```c
window = glfwCreateWindow(640, 480, "My Window", glfwGetPrimaryMonitor(), NULL);
```

> **注記:** `glfwOpenWindow` のフレームバッファビット深度引数は[ウィンドウヒント](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints)になりましたが、[妥当なデフォルト値](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints_values)が指定されているため、これらのヒントを設定する必要はほとんどありません。


<a id="moving_autopoll"></a>

### 自動イベントポーリングの削除
GLFW 3 の [glfwSwapBuffers](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga15a5a1ee5b3c2ca6b15ca209a12efd14) はイベントを自動的にポーリングしないため、[glfwPollEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga37bd57223967b4211d60ca1a0bf3c832) または [glfwWaitEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e) を自分で呼び出す必要があります。単一のウィンドウへ作用するバッファ交換とは異なり、イベント処理関数はすべてのウィンドウへ同時に作用します。

__旧式の基本的なメインループ__
```c
while (...)
{
    // Process input
    // Render output
    glfwSwapBuffers();
}
```

__新式の基本的なメインループ__
```c
while (...)
{
    // Process input
    // Render output
    glfwSwapBuffers(window);
    glfwPollEvents();
}
```


<a id="moving_context"></a>

### 明示的なコンテキスト管理
各 GLFW 3 ウィンドウは独自の OpenGL コンテキストを持ち、どの時点でどのスレッド上のどのコンテキストをカレントにすべきかは、アプリケーション開発者だけが判断できます。そのため、GLFW 3 はこの判断を利用者に委ねます。

つまり、ウィンドウ作成後、OpenGL 関数を呼び出す前に [glfwMakeContextCurrent](/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga1c04dc242268f827290fe40aa1c91157) を呼び出す必要があります。


<a id="moving_hidpi"></a>

### ウィンドウサイズとフレームバッファサイズの分離
ウィンドウの位置とサイズはスクリーン座標を使用するようになりました。高 DPI モニターを備えたマシンでは、スクリーン座標とピクセルが一致しない場合があります。OpenGL はスクリーン座標ではなくピクセルを使用するため、これは重要です。たとえば、`glViewport` で指定する矩形にはピクセルを使用する必要があります。そのため、フレームバッファサイズ関数が追加されました。[glfwGetFramebufferSize](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga0e2637a4161afb283f5300c7f94785c9) 関数でウィンドウのフレームバッファサイズを取得できます。また、[glfwSetFramebufferSizeCallback](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f) で設定できるフレームバッファサイズコールバックも追加されました。

__旧式の基本的なビューポート設定__
```c
glfwGetWindowSize(&width, &height);
glViewport(0, 0, width, height);
```

__新式の基本的なビューポート設定__
```c
glfwGetFramebufferSize(window, &width, &height);
glViewport(0, 0, width, height);
```


<a id="moving_window_close"></a>

### ウィンドウを閉じる処理の変更
`GLFW_OPENED` ウィンドウ引数は削除されました。[glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2) または [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) によって破棄されていない限り、ウィンドウは「開いて」います。

ユーザーがウィンドウを閉じようとする操作は、ほかと同様の単なるイベントになりました。GLFW 2 とは異なり、GLFW 3 で作成されたウィンドウとコンテキストは、利用者が選択しない限り破棄されません。各ウィンドウには閉じるフラグがあり、ユーザーがそのウィンドウを閉じようとすると `GLFW_TRUE` に設定されます。デフォルトではそれ以外の処理は行われず、ウィンドウは表示されたままです。ウィンドウを破棄するか、別の処理を行うか、要求を無視するかは利用者が決めます。

閉じるフラグは [glfwWindowShouldClose](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga24e02fbfefbb81fc45320989f8140ab5) でいつでも照会でき、[glfwSetWindowShouldClose](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708) でいつでも設定できます。

__旧式の基本的なメインループ__
```c
while (glfwGetWindowParam(GLFW_OPENED))
{
    ...
}
```

__新式の基本的なメインループ__
```c
while (!glfwWindowShouldClose(window))
{
    ...
}
```

閉じるコールバックは値を返さなくなりました。代わりに、閉じるフラグが設定された後、イベント処理が完了する前に呼び出されるため、必要に応じてその値を上書きできます。ただし、閉じるコールバック（およびその他のウィンドウ関連コールバック）から [glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2) を呼び出すことはできません。

__旧構文__
```c
int GLFWCALL window_close_callback(void);
```

__新構文__
```c
void window_close_callback(GLFWwindow* window);
```

> **注記:** GLFW が閉じるフラグを `GLFW_FALSE` にクリアすることはありません。そのため、ゲーム内メニューでユーザーが終了を選んだ場合など、ほかの理由でウィンドウを閉じるためにも使用できます。


<a id="moving_hints"></a>

### 永続的なウィンドウヒント
`glfwOpenWindowHint` 関数は [glfwWindowHint](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033) に改名されました。

ウィンドウヒントは、ウィンドウ作成時にデフォルト値へリセットされなくなりました。[glfwWindowHint](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033) または [glfwDefaultWindowHints](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gaa77c4898dfb83344a6b4f76aa16b9a4a) で変更されるか、ライブラリが終了して再初期化されるまで値を保持します。


<a id="moving_video_modes"></a>

### ビデオモードの列挙
ビデオモードの列挙はモニター単位になりました。[glfwGetVideoModes](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gad2e24d2843cb7d6c26202cddd530fc1b) 関数は、必要な配列サイズを推測させる代わりに、指定されたモニターで利用可能なすべてのモードを返すようになりました。動作の定義が不十分だった `glfwGetDesktopMode` 関数は、モニターの現在のモードを返す [glfwGetVideoMode](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5) に置き換えられました。


<a id="moving_char_up"></a>

### 文字アクションの削除
[文字コールバック](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga1ab90a55cf3f58639b893c0f4118cb6e)の action 引数は削除されました。これは、スウェーデン人が英語環境で開発したという GLFW の起源による名残でした。しかし、多くのキーボード配列では、発音区別符号付き文字を生成するために複数のキーが必要です。スウェーデン語キーボード配列でも、ü のような一般的でない文字には複数のキーが必要です。

__旧構文__
```c
void GLFWCALL character_callback(int character, int action);
```

__新構文__
```c
void character_callback(GLFWwindow* window, int character);
```


<a id="moving_cursorpos"></a>

### カーソル位置の変更
`glfwGetMousePos` 関数は [glfwGetCursorPos](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc) に、`glfwSetMousePos` は [glfwSetCursorPos](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7) に、`glfwSetMousePosCallback` は [glfwSetCursorPosCallback](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7) に改名されました。

直接呼び出す関数とコールバックの両方で、カーソル位置は `int` ではなく `double` になりました。一部のプラットフォームはサブピクセル単位のカーソル移動を提供でき、そのデータが利用可能な場合はアプリケーションへ渡されます。提供されないプラットフォームでは、小数部は 0 になります。

GLFW 3 では、以前の `glfwSetMousePos` に相当する [glfwSetCursorPos](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7) を使ってウィンドウ内のカーソル位置を設定できるのは、そのウィンドウがアクティブな場合だけです。ウィンドウがアクティブでなければ、この関数は何も通知せず失敗します。


<a id="moving_wheel"></a>

### ホイール位置からスクロールオフセットへの置き換え
`glfwGetMouseWheel` 関数は削除されました。スクロールはオフセット入力であり、絶対位置を持ちません。マウスホイールコールバックは、2 次元の浮動小数点スクロールオフセットを受け取る[スクロールコールバック](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5)に置き換えられました。これにより、現代的なタッチパッドなどから精密なスクロールデータを受け取れます。

__旧構文__
```c
void GLFWCALL mouse_wheel_callback(int position);
```

__新構文__
```c
void scroll_callback(GLFWwindow* window, double xoffset, double yoffset);
```

__削除された関数__
> `glfwGetMouseWheel`


<a id="moving_repeat"></a>

### キーリピートアクション
`GLFW_KEY_REPEAT` による有効化は削除され、キーと文字の両方でキーリピートが常に有効になりました。新しいキーアクション `GLFW_REPEAT` が追加され、[キーコールバック](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5bd751b27b90f865d2ea613533f0453c)で最初のキー押下とリピートを区別できます。[glfwGetKey](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gadd341da06bc8d418b4dc3a3518af9ad2) は引き続き `GLFW_PRESS` または `GLFW_RELEASE` だけを返すことに注意してください。


<a id="moving_keys"></a>

### 物理キー入力
GLFW 3 のキートークンは物理キーへ対応します。現在のキーボード配列が生成する値へ対応していた GLFW 2 とは異なります。トークンは標準的な米国配列での値に従って命名されていますが、これは大半の開発者がその配列を知っていると想定した便宜上のものにすぎません。つまり、たとえば `GLFW_KEY_LEFT_BRACKET` は常に 1 つのキーであり、プログラム利用者のキーボード配列にかかわらず、同じ位置にある同じキーです。

キー入力機能は元来テキスト入力用ではありませんが、GLFW 2 ではその用途でも多少は機能しました。テキスト入力に使用していた場合、GLFW 2 と 3 のどちらでも、代わりに文字コールバックを使用すべきです。これにより、押されたキーではなく、入力された文字を取得できます。

GLFW 3 は標準的な 105 キーキーボードのすべてのキーに対応するキートークンを持つため、`a` と `A` のどちらを検査するか覚える代わりに、[GLFW_KEY_A](/docs/glfw/v3-5-1/ja/04-reference/09-keyboard-key-tokens/#ga03e842608e1ea323370889d33b8f70ff) を検査します。


<a id="moving_joystick"></a>

### ジョイスティック関数の変更
`glfwGetJoystickPos` 関数は [glfwGetJoystickAxes](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408) に改名されました。

`glfwGetJoystickParam` 関数と `GLFW_PRESENT`、`GLFW_AXES`、`GLFW_BUTTONS` トークンは、[glfwJoystickPresent](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1) 関数、および [glfwGetJoystickAxes](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408) と [glfwGetJoystickButtons](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) 関数が返す軸数とボタン数に置き換えられました。


<a id="moving_mbcs"></a>

### Win32 MBCS サポート
GLFW 3 の Win32 ポートは [MBCS モード][MBCS]ではコンパイルできません。ただし、Unicode 版 Win32 API の使用が影響するのは、それを使って作成されたウィンドウだけで、プロセス全体には影響しないため、同じアプリケーションの別の部分から MBCS 関数を呼び出すことは完全に可能です。したがって、GLFW を使用するアプリケーションに MBCS モードのコードがあっても、GLFW 自体がそれをサポートする必要はありません。

[MBCS]: https://msdn.microsoft.com/en-us/library/5z097dxa.aspx


<a id="moving_windows"></a>

### Windows XP より古いバージョンのサポート
Windows XP より古いバージョンに対する明示的なサポートはすべて削除されました。GLFW 3 が古いバージョン上で動作することを積極的に阻止するコードはありませんが、それらのバージョンに存在しない Win32 関数を使用します。

Windows XP は 2001 年にリリースされ、2015 年 1 月時点では、それ以前のほぼすべての Windows を置き換えただけでなく、XP 自体も Windows 7 と 8 に急速に置き換えられていました。MSDN ライブラリは Windows 2000 より古いバージョンのドキュメントさえ提供していないため、労力をかける価値があると判断しても、それらのバージョンとの互換性を維持することは困難です。

Win32 API も進化を続けており、GLFW 3 は Windows XP 以降にしか存在しない多数の関数を使用します。Windows 95 をまだサポートする GLFW 2 の視点では新しい OS である XP でさえ、現代の Windows にしか存在しない多数の関数を実行時に検査する必要があります。


<a id="moving_syskeys"></a>

### システム全体のホットキーの捕捉
Alt+Tab のようなシステム全体のホットキーを無効化・捕捉する機能は削除されました。現代のアプリケーションは、ゲーム、科学的可視化、その他の用途を問わず、デスクトップの良き一員として、フルスクリーンモードで動作中でもこれらのホットキーを機能させることが期待されています。


<a id="moving_terminate"></a>

### 自動終了処理
GLFW 3 は初期化時に [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) を `atexit` へ登録しません。`exit` は呼び出し元スレッドから登録済み関数を呼び出し、`exit` 自体は任意のスレッドから呼び出せる一方、[glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) はメインスレッドからのみ呼び出さなければならないためです。

GLFW が確保したすべてのリソースを解放するには、プログラム終了前にメインスレッドから [glfwTerminate](/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#gaaae48c0a18607ea4a4ba951d939f0901) を自分で呼び出してください。これにより、[glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2) でまだ破棄されていないすべてのウィンドウが破棄され、残っているウィンドウハンドルが無効になることに注意してください。


<a id="moving_glu"></a>

### GLU ヘッダーのインクルード
GLFW 3 はデフォルトでは GLU ヘッダーをインクルードせず、GLU 自体も [Khronos][] によって非推奨とされています。__新しいプロジェクトでは GLU を使用すべきではありません__。ただし、GLFW 3 へ移行したレガシーコードで必要な場合は、GLFW ヘッダーをインクルードする前に [GLFW_INCLUDE_GLU](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_INCLUDE_GLU) を定義し、GLFW ヘッダーに GLU をインクルードさせることができます。

[Khronos]: https://en.wikipedia.org/wiki/Khronos_Group

__旧構文__
```c
#include <GL/glfw.h>
```

__新構文__
```c
#define GLFW_INCLUDE_GLU
#include <GLFW/glfw3.h>
```

GLU が提供する機能の代替となるライブラリは多数あります。行列ヘルパー関数については、[GLM][]（C++ 向け）、[linmath.h][]（C 向け）などの数学ライブラリを参照してください。テッセレーション関数については、たとえば [libtess2][] を参照してください。

[GLM]: https://github.com/g-truc/glm
[linmath.h]: https://github.com/datenwolf/linmath.h
[libtess2]: https://github.com/memononen/libtess2


<a id="moving_tables"></a>

## 名前変更表
<a id="moving_renamed_functions"></a>

### 改名された関数
| GLFW 2                      | GLFW 3                        | 備考 |
| --------------------------- | ----------------------------- | ----- |
| `glfwOpenWindow`            | [glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb)         | すべてのチャンネルビット深度はヒントになりました
| `glfwCloseWindow`           | [glfwDestroyWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacdf43e51376051d2c091662e9fe3d7b2)        |       |
| `glfwOpenWindowHint`        | [glfwWindowHint](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga7d9c8c62384b1e2821c4dc48952d2033)           | すべての `GLFW_*_BITS` トークンを受け付けるようになりました |
| `glfwEnable`                | [glfwSetInputMode](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b)         |       |
| `glfwDisable`               | [glfwSetInputMode](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b)         |       |
| `glfwGetMousePos`           | [glfwGetCursorPos](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga01d37b6c40133676b9cea60ca1d7c0cc)         |       |
| `glfwSetMousePos`           | [glfwSetCursorPos](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga04b03af936d906ca123c8f4ee08b39e7)         |       |
| `glfwSetMousePosCallback`   | [glfwSetCursorPosCallback](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gac1f879ab7435d54d4d79bb469fe225d7) |       |
| `glfwSetMouseWheelCallback` | [glfwSetScrollCallback](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga571e45a030ae4061f746ed56cb76aede)    | double 型の 2 次元スクロールオフセットを受け取ります |
| `glfwGetJoystickPos`        | [glfwGetJoystickAxes](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408)      |       |
| `glfwGetWindowParam`        | [glfwGetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337)      |       |
| `glfwGetGLVersion`          | [glfwGetWindowAttrib](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337)      | `GLFW_CONTEXT_VERSION_MAJOR`、`GLFW_CONTEXT_VERSION_MINOR`、`GLFW_CONTEXT_REVISION` を使用します |
| `glfwGetDesktopMode`        | [glfwGetVideoMode](/docs/glfw/v3-5-1/ja/04-reference/05-monitor-reference/#gaba376fa7e76634b4788bddc505d6c9d5)         | モニターの現在のモードを返します |
| `glfwGetJoystickParam`      | [glfwJoystickPresent](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaed0966cee139d815317f9ffcba64c9f1)      | 軸数とボタン数は [glfwGetJoystickAxes](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaeb1c0191d3140a233a682987c61eb408) と [glfwGetJoystickButtons](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#ga5ffe34739d3dc97efe432ed2d81d9938) が提供します |


<a id="moving_renamed_types"></a>

### 改名された型
| GLFW 2              | GLFW 3                | 備考 |
| ------------------- | --------------------- |       |
| `GLFWmousewheelfun` | [GLFWscrollfun](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaf656112c33de3efdb227fa58f0134cf5)    |       |
| `GLFWmouseposfun`   | [GLFWcursorposfun](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gad6fae41b3ac2e4209aaa87b596c57f68) |       |


<a id="moving_renamed_tokens"></a>

### 改名されたトークン
| GLFW 2                      | GLFW 3                       | 備考 |
| --------------------------- | ---------------------------- | ----- |
| `GLFW_OPENGL_VERSION_MAJOR` | `GLFW_CONTEXT_VERSION_MAJOR` | OpenGL ES にも適用されるため改名されました |
| `GLFW_OPENGL_VERSION_MINOR` | `GLFW_CONTEXT_VERSION_MINOR` | OpenGL ES にも適用されるため改名されました |
| `GLFW_FSAA_SAMPLES`         | `GLFW_SAMPLES`               | OpenGL API に合わせて改名されました |
| `GLFW_ACTIVE`               | `GLFW_FOCUSED`               | ウィンドウフォーカスコールバックに合わせて改名されました |
| `GLFW_WINDOW_NO_RESIZE`     | `GLFW_RESIZABLE`             | デフォルト値が反転しました |
| `GLFW_MOUSE_CURSOR`         | `GLFW_CURSOR`                | [glfwSetInputMode](/docs/glfw/v3-5-1/ja/04-reference/06-input-reference/#gaa92336e173da9c8834558b54ee80563b) とともに使用します |
| `GLFW_KEY_ESC`              | `GLFW_KEY_ESCAPE`            |       |
| `GLFW_KEY_DEL`              | `GLFW_KEY_DELETE`            |       |
| `GLFW_KEY_PAGEUP`           | `GLFW_KEY_PAGE_UP`           |       |
| `GLFW_KEY_PAGEDOWN`         | `GLFW_KEY_PAGE_DOWN`         |       |
| `GLFW_KEY_KP_NUM_LOCK`      | `GLFW_KEY_NUM_LOCK`          |       |
| `GLFW_KEY_LCTRL`            | `GLFW_KEY_LEFT_CONTROL`      |       |
| `GLFW_KEY_LSHIFT`           | `GLFW_KEY_LEFT_SHIFT`        |       |
| `GLFW_KEY_LALT`             | `GLFW_KEY_LEFT_ALT`          |       |
| `GLFW_KEY_LSUPER`           | `GLFW_KEY_LEFT_SUPER`        |       |
| `GLFW_KEY_RCTRL`            | `GLFW_KEY_RIGHT_CONTROL`     |       |
| `GLFW_KEY_RSHIFT`           | `GLFW_KEY_RIGHT_SHIFT`       |       |
| `GLFW_KEY_RALT`             | `GLFW_KEY_RIGHT_ALT`         |       |
| `GLFW_KEY_RSUPER`           | `GLFW_KEY_RIGHT_SUPER`       |       |
