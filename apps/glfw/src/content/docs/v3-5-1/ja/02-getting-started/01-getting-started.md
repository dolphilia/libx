---
title: "はじめに"
description: "GLFWでウィンドウを作成して描画する"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<a id="quick_guide"></a>

# はじめに

このガイドでは、GLFW 3 を使った小さなアプリケーションの作成手順を説明します。このアプリケーションはウィンドウと OpenGL コンテキストを作成し、回転する三角形を描画します。ユーザーがウィンドウを閉じるか _Escape_ キーを押すと終了します。このガイドで紹介するのは、よく使われる関数の一部です。GLFW にはほかにも多くの関数があります。

このガイドは、以前のバージョンの GLFW を使った経験がないことを前提としています。過去に GLFW 2 を使ったことがある場合は、GLFW 3 で動作が変わった関数があるため、[moving_guide](/docs/glfw/v3-5-1/ja/05-migration-and-history/01-moving-from-2-to-3/#moving_guide)を読んでください。


<a id="quick_steps"></a>

## 手順

<a id="quick_include"></a>

### GLFW ヘッダーをインクルードする

アプリケーションのソースファイルで GLFW を使う場合は、そのヘッダーファイルをインクルードする必要があります。

```c
#include <GLFW/glfw3.h>
```

このヘッダーは、GLFW API のすべての定数、型、関数プロトタイプを提供します。

デフォルトでは、開発環境の OpenGL ヘッダーもインクルードします。プラットフォームによっては、このヘッダーが古いバージョンの OpenGL しかサポートしていません。最も極端なのは Windows で、通常は OpenGL 1.2 までしかサポートしていません。

その代わりに、多くのプログラムは[拡張ローダーライブラリ](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext_auto)を使い、そのヘッダーをインクルードします。この例では [glad](https://gen.glad.sh/) が生成したファイルを使います。多くの場合、GLFW ヘッダーは先にインクルードされたこの種のヘッダーを検出し、開発環境のヘッダーをインクルードしません。

```c
#include <glad/gl.h>
#include <GLFW/glfw3.h>
```

ヘッダーの競合を確実に避けるには、GLFW ヘッダーより前に [GLFW_INCLUDE_NONE](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#GLFW_INCLUDE_NONE) を定義し、開発環境のヘッダーをインクルードしないよう明示できます。こうすると、2つのヘッダーをどちらの順序でもインクルードできます。

```c
#define GLFW_INCLUDE_NONE
#include <GLFW/glfw3.h>
#include <glad/gl.h>
```


<a id="quick_init_term"></a>

### GLFW を初期化・終了する

ほとんどの GLFW 関数を使う前に、ライブラリを初期化しなければなりません。初期化に成功すると `GLFW_TRUE` が返ります。エラーが発生した場合は `GLFW_FALSE` が返ります。

```c
if (!glfwInit())
{
    // Initialization failed
}
```

`GLFW_TRUE` と `GLFW_FALSE` は、それぞれ常に 1 と 0 であることに注意してください。

GLFW の使用を終えたら、通常はアプリケーションを終了する直前に GLFW を終了する必要があります。

```c
glfwTerminate();
```

これにより、残っているウィンドウがすべて破棄され、GLFW が割り当てたその他のリソースも解放されます。この呼び出しの後で、初期化を必要とする GLFW 関数を使うには、GLFW をもう一度初期化しなければなりません。


<a id="quick_capture_error"></a>

### エラーコールバックを設定する

キーの押下、GLFW ウィンドウの移動、エラーの発生など、ほとんどのイベントはコールバックを通じて通知されます。コールバックは C 関数（または C++ の static メソッド）であり、イベントを説明する引数とともに GLFW から呼び出されます。

GLFW 関数が失敗すると、GLFW のエラーコールバックにエラーが通知されます。これらの通知はエラーコールバックで受け取れます。この関数は次のシグネチャでなければなりませんが、ほかのコールバックで許されている処理なら何を行っても構いません。

```c
void error_callback(int error, const char* description)
{
    fprintf(stderr, "Error: %s\n", description);
}
```

GLFW が呼び出す関数を認識できるよう、コールバック関数を設定する必要があります。エラーコールバックを設定する関数は、初期化前に呼び出せる数少ない GLFW 関数の1つです。そのため、初期化中と初期化後の両方でエラー通知を受け取れます。

```c
glfwSetErrorCallback(error_callback);
```


<a id="quick_create_window"></a>

### ウィンドウとコンテキストを作成する

ウィンドウとその OpenGL コンテキストは、[glfwCreateWindow](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga3555a418df92ad53f917597fe2f64aeb) を1回呼び出すだけで作成できます。この関数は、作成したウィンドウとコンテキストを組み合わせたオブジェクトのハンドルを返します。

```c
GLFWwindow* window = glfwCreateWindow(640, 480, "My Title", NULL, NULL);
if (!window)
{
    // Window or OpenGL context creation failed
}
```

これは、OpenGL コンテキストを持つ 640×480 のウィンドウモードのウィンドウを作成します。ウィンドウまたは OpenGL コンテキストの作成に失敗した場合は `NULL` が返ります。戻り値は必ず確認してください。ウィンドウの作成が失敗することはまれですが、コンテキストの作成はドライバーが正しくインストールされているかどうかに左右され、必要なハードウェアを備えたマシンでも失敗する可能性があります。

GLFW が作成する OpenGL コンテキストは、デフォルトではどのバージョンになるか決まっていません。作成する_前_に `GLFW_CONTEXT_VERSION_MAJOR` と `GLFW_CONTEXT_VERSION_MINOR` のヒントを設定すると、OpenGL の最低バージョンを要求できます。マシンが要求された最低バージョンをサポートしていない場合は、コンテキスト（およびウィンドウ）の作成に失敗します。

`GLFW_OPENGL_PROFILE` ヒントを設定すると、OpenGL プロファイルを選択できます。このプログラムではコアプロファイルを使います。macOS が OpenGL 3.x および 4.x でサポートするのは、このプロファイルだけだからです。

```c
glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
GLFWwindow* window = glfwCreateWindow(640, 480, "My Title", NULL, NULL);
if (!window)
{
    // Window or context creation failed
}
```

ウィンドウとコンテキストが不要になったら破棄します。

```c
glfwDestroyWindow(window);
```

この関数を呼び出すと、そのウィンドウには以後イベントが配信されず、ハンドルも無効になります。


<a id="quick_context_current"></a>

### OpenGL コンテキストをカレントにする

OpenGL API を使うには、あらかじめカレントな OpenGL コンテキストが必要です。

```c
glfwMakeContextCurrent(window);
```

別のコンテキストをカレントにするか、現在のコンテキストを所有するウィンドウを破棄するまで、このコンテキストはカレントのままです。

モダン OpenGL にアクセスするために[拡張ローダーライブラリ](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_glext_auto)を使っている場合は、この時点で初期化します。ローダーが読み込み元とするカレントコンテキストを必要とするためです。この例では [glad](https://github.com/Dav1dde/glad) を使いますが、この規則はこの種のライブラリすべてに当てはまります。

```c
gladLoadGL(glfwGetProcAddress);
```


<a id="quick_window_close"></a>

### ウィンドウのクローズフラグを確認する

各ウィンドウには、そのウィンドウを閉じるべきかどうかを示すフラグがあります。

ユーザーがタイトルバーの閉じるボタンを押すか、Alt+F4 のようなキー操作を使ってウィンドウを閉じようとすると、このフラグが 1 に設定されます。__この時点でウィンドウが実際に閉じられるわけではない__ことに注意してください。このフラグを監視してウィンドウを破棄するか、ユーザーに何らかのフィードバックを返すことが想定されています。

```c
while (!glfwWindowShouldClose(window))
{
    // Keep running
}
```

[glfwSetWindowCloseCallback](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gada646d775a7776a95ac000cfc1885331) でクローズコールバックを設定すると、ユーザーがウィンドウを閉じようとしたときに通知を受け取れます。コールバックはクローズフラグが設定された直後に呼び出されます。

[glfwSetWindowShouldClose](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga49c449dde2a6f87d996f4daaa09d6708) を使って、自分でフラグを設定することもできます。たとえば _Escape_ キーの押下など、ほかの種類の入力をウィンドウを閉じる操作として扱いたい場合に便利です。


<a id="quick_key_input"></a>

### 入力イベントを受け取る

各ウィンドウには、さまざまな種類のイベントを受け取るために設定できるコールバックが多数あります。キーの押下・解放イベントを受け取るには、キーコールバック関数を作成します。

```c
static void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
    if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
        glfwSetWindowShouldClose(window, GLFW_TRUE);
}
```

キーコールバックは、ウィンドウに関係するほかのコールバックと同様に、ウィンドウごとに設定します。

```c
glfwSetKeyCallback(window, key_callback);
```

イベントが発生したときにイベントコールバックが呼び出されるようにするには、後述の方法でイベントを処理する必要があります。


<a id="quick_render"></a>

### OpenGL で描画する

カレントな OpenGL コンテキストがあれば、通常どおり OpenGL を使えます。このチュートリアルでは、複数の色を持つ回転する三角形を描画します。`glViewport` のためにフレームバッファのサイズを取得する必要があります。

```c
int width, height;
glfwGetFramebufferSize(window, &width, &height);
glViewport(0, 0, width, height);
```

[glfwSetFramebufferSizeCallback](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gab3fb7c3366577daef18c0023e2a8591f) を使ってフレームバッファサイズのコールバックを設定し、サイズが変わったときに通知を受けることもできます。

OpenGL による描画の詳細は、このチュートリアルの範囲外です。ただし、モダン OpenGL を学ぶための優れた資料は数多くあります。その一部を紹介します。

 - [Anton's OpenGL 4 Tutorials](https://antongerdelan.net/opengl/)
 - [Learn OpenGL](https://learnopengl.com/)
 - [Open.GL](https://open.gl/)

これらはすべて GLFW を使っていますが、ウィンドウとコンテキストの作成にどの API を使っても、OpenGL 自体の動作は同じです。


<a id="quick_timer"></a>

### タイマーを読み取る

滑らかなアニメーションを作るには、時刻源が必要です。GLFW は、初期化後の経過秒数を返すタイマーを提供します。各プラットフォームで最も精度の高い時刻源が使われ、通常はマイクロ秒またはナノ秒の分解能があります。

```c
double time = glfwGetTime();
```


<a id="quick_swap_buffers"></a>

### バッファを入れ替える

GLFW のウィンドウは、デフォルトでダブルバッファリングを使います。つまり、各ウィンドウはフロントバッファとバックバッファという2つの描画バッファを持ちます。表示されるのがフロントバッファで、描画先となるのがバックバッファです。

フレーム全体の描画が完了したら、2つのバッファを入れ替える必要があります。これにより、バックバッファがフロントバッファになり、その逆も行われます。

```c
glfwSwapBuffers(window);
```

スワップ間隔は、バッファを入れ替えるまで何フレーム待つかを示す値で、一般に _垂直同期（vsync）_ と呼ばれます。デフォルトのスワップ間隔は 0 で、バッファが直ちに入れ替えられることを意味します。高速なマシンでは、画面の更新頻度が通常は毎秒 60～75 回にとどまるため、それらのフレームの多くは表示されません。その結果、CPU と GPU のサイクルを大量に浪費します。

また、画面の更新中にバッファが入れ替わるため、[画面のティアリング](https://en.wikipedia.org/wiki/Screen_tearing)が発生します。

このため、通常はスワップ間隔を 1 に設定します。さらに大きな値も設定できますが、入力遅延につながるため、通常は推奨されません。

```c
glfwSwapInterval(1);
```

この関数はカレントコンテキストに作用し、コンテキストがカレントでなければ失敗します。


<a id="quick_process_events"></a>

### イベントを処理する

GLFW は、イベントを受け取り、アプリケーションが応答不能になっていないことを示すために、ウィンドウシステムと定期的に通信する必要があります。表示中のウィンドウがある間は、イベント処理を定期的に行わなければなりません。通常は各フレームでバッファを入れ替えた後に行います。

保留中のイベントを処理する方法には、ポーリングと待機の2つがあります。この例ではイベントのポーリングを使います。これは、すでに受信済みのイベントだけを処理して、直ちに処理を返します。

```c
glfwPollEvents();
```

ほとんどのゲームのように継続して描画する場合は、これが最適です。一方、新しい入力を受け取ったときだけ描画を更新すればよい場合は、[glfwWaitEvents](/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#ga554e37d781f0a997656c26b2c56c835e) のほうが適しています。この関数は、少なくとも1つのイベントを受信するまでスレッドを休止させ、受信後にすべてのイベントを処理します。CPU サイクルを大幅に節約でき、たとえば多くの種類の編集ツールで役立ちます。


<a id="quick_example"></a>

## すべてを組み合わせる

GLFW の初期化、ウィンドウの作成、キーボード入力のポーリングが分かったので、小さなプログラムを作成できます。

このプログラムは 640×480 のウィンドウモードのウィンドウを作成し、画面のクリア、三角形の描画、イベントの処理を繰り返します。ユーザーが _Escape_ キーを押すかウィンドウを閉じると、ループを終了します。

```c

#define GLAD_GL_IMPLEMENTATION
#include <glad/gl.h>
#define GLFW_INCLUDE_NONE
#include <GLFW/glfw3.h>

#include "linmath.h"

#include <stdlib.h>
#include <stddef.h>
#include <stdio.h>

typedef struct Vertex
{
    vec2 pos;
    vec3 col;
} Vertex;

static const Vertex vertices[3] =
{
    { { -0.6f, -0.4f }, { 1.f, 0.f, 0.f } },
    { {  0.6f, -0.4f }, { 0.f, 1.f, 0.f } },
    { {   0.f,  0.6f }, { 0.f, 0.f, 1.f } }
};

static const char* vertex_shader_text =
"#version 330\n"
"uniform mat4 MVP;\n"
"in vec3 vCol;\n"
"in vec2 vPos;\n"
"out vec3 color;\n"
"void main()\n"
"{\n"
"    gl_Position = MVP * vec4(vPos, 0.0, 1.0);\n"
"    color = vCol;\n"
"}\n";

static const char* fragment_shader_text =
"#version 330\n"
"in vec3 color;\n"
"out vec4 fragment;\n"
"void main()\n"
"{\n"
"    fragment = vec4(color, 1.0);\n"
"}\n";

static void error_callback(int error, const char* description)
{
    fprintf(stderr, "Error: %s\n", description);
}

static void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
    if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
        glfwSetWindowShouldClose(window, GLFW_TRUE);
}

int main(void)
{
    glfwSetErrorCallback(error_callback);

    if (!glfwInit())
        exit(EXIT_FAILURE);

    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    GLFWwindow* window = glfwCreateWindow(640, 480, "OpenGL Triangle", NULL, NULL);
    if (!window)
    {
        glfwTerminate();
        exit(EXIT_FAILURE);
    }

    glfwSetKeyCallback(window, key_callback);

    glfwMakeContextCurrent(window);
    gladLoadGL(glfwGetProcAddress);
    glfwSwapInterval(1);

    // NOTE: OpenGL error checks have been omitted for brevity

    GLuint vertex_buffer;
    glGenBuffers(1, &vertex_buffer);
    glBindBuffer(GL_ARRAY_BUFFER, vertex_buffer);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    const GLuint vertex_shader = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(vertex_shader, 1, &vertex_shader_text, NULL);
    glCompileShader(vertex_shader);

    const GLuint fragment_shader = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(fragment_shader, 1, &fragment_shader_text, NULL);
    glCompileShader(fragment_shader);

    const GLuint program = glCreateProgram();
    glAttachShader(program, vertex_shader);
    glAttachShader(program, fragment_shader);
    glLinkProgram(program);

    const GLint mvp_location = glGetUniformLocation(program, "MVP");
    const GLint vpos_location = glGetAttribLocation(program, "vPos");
    const GLint vcol_location = glGetAttribLocation(program, "vCol");

    GLuint vertex_array;
    glGenVertexArrays(1, &vertex_array);
    glBindVertexArray(vertex_array);
    glEnableVertexAttribArray(vpos_location);
    glVertexAttribPointer(vpos_location, 2, GL_FLOAT, GL_FALSE,
                          sizeof(Vertex), (void*) offsetof(Vertex, pos));
    glEnableVertexAttribArray(vcol_location);
    glVertexAttribPointer(vcol_location, 3, GL_FLOAT, GL_FALSE,
                          sizeof(Vertex), (void*) offsetof(Vertex, col));

    while (!glfwWindowShouldClose(window))
    {
        int width, height;
        glfwGetFramebufferSize(window, &width, &height);
        const float ratio = width / (float) height;

        glViewport(0, 0, width, height);
        glClear(GL_COLOR_BUFFER_BIT);

        mat4x4 m, p, mvp;
        mat4x4_identity(m);
        mat4x4_rotate_Z(m, m, (float) glfwGetTime());
        mat4x4_ortho(p, -ratio, ratio, -1.f, 1.f, 1.f, -1.f);
        mat4x4_mul(mvp, p, m);

        glUseProgram(program);
        glUniformMatrix4fv(mvp_location, 1, GL_FALSE, (const GLfloat*) &mvp);
        glBindVertexArray(vertex_array);
        glDrawArrays(GL_TRIANGLES, 0, 3);

        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    glfwDestroyWindow(window);

    glfwTerminate();
    exit(EXIT_SUCCESS);
}
```

上のプログラムは[ソースパッケージ][download]内の `examples/triangle-opengl.c` にあり、GLFW をビルドするとほかのすべてのサンプルと一緒にコンパイルされます。ソースパッケージから GLFW をビルドした場合は、Windows なら `triangle-opengl.exe`、Linux なら `triangle-opengl`、macOS なら `triangle-opengl.app` としてすでに用意されています。

[download]: https://www.glfw.org/download.html

このチュートリアルで使ったのは、GLFW が提供する多数の関数のうち一部だけです。GLFW が扱う領域ごとにガイドがあり、各ガイドではその分類のすべての関数を紹介します。

 - [intro_guide](/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_guide)
 - [window_guide](/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_guide)
 - [context_guide](/docs/glfw/v3-5-1/ja/03-guides/02-context-guide/#context_guide)
 - [monitor_guide](/docs/glfw/v3-5-1/ja/03-guides/03-monitor-guide/#monitor_guide)
 - [input_guide](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#input_guide)

GLFW 関数をクリックすると、その関数のリファレンスドキュメントを参照できます。各関数のリファレンスからは、関連する関数やガイドの節へ移動できます。

チュートリアルはここまでです。GLFW を使うプログラムを作成したら、コンパイルしてリンクする必要があります。その方法は使用する開発環境によって異なるため、その環境のドキュメントを参照するのが最適です。GLFW 固有の詳細については、[build_guide](/docs/glfw/v3-5-1/ja/02-getting-started/03-building-applications/#build_guide)を参照してください。
