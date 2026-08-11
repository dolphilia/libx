---
title: "エラーコード"
description: "GLFW 3.5.1のエラーコード"
licenseSource: "glfw-3.5.1"
---

> このリファレンスページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を改変して Markdown 化したものです。libx 向けに書式、ナビゲーション、リンクを変更していますが、技術的な内容は GLFW 3.5.1 のソース配布物に基づいています。

<span id="details"></span>

## 説明

これらの使用方法については、<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#error_handling" class="el">エラー処理</a>を参照してください。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> マクロ</h2></td>
</tr>
<tr id="r_gafa30deee5db4d69c4c93d116ed87dbf4" class="memitem:gafa30deee5db4d69c4c93d116ed87dbf4">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gafa30deee5db4d69c4c93d116ed87dbf4" class="el">GLFW_NO_ERROR</a>   0</td>
</tr>
<tr class="memdesc:gafa30deee5db4d69c4c93d116ed87dbf4">
<td class="mdescLeft"> </td>
<td class="mdescRight">エラーは発生していません。<br />
</td>
</tr>
<tr class="separator:gafa30deee5db4d69c4c93d116ed87dbf4">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2374ee02c177f12e1fa76ff3ed15e14a" class="memitem:ga2374ee02c177f12e1fa76ff3ed15e14a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga2374ee02c177f12e1fa76ff3ed15e14a" class="el">GLFW_NOT_INITIALIZED</a>   0x00010001</td>
</tr>
<tr class="memdesc:ga2374ee02c177f12e1fa76ff3ed15e14a">
<td class="mdescLeft"> </td>
<td class="mdescRight">GLFWが初期化されていません。<br />
</td>
</tr>
<tr class="separator:ga2374ee02c177f12e1fa76ff3ed15e14a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa8290386e9528ccb9e42a3a4e16fc0d0" class="memitem:gaa8290386e9528ccb9e42a3a4e16fc0d0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaa8290386e9528ccb9e42a3a4e16fc0d0" class="el">GLFW_NO_CURRENT_CONTEXT</a>   0x00010002</td>
</tr>
<tr class="memdesc:gaa8290386e9528ccb9e42a3a4e16fc0d0">
<td class="mdescLeft"> </td>
<td class="mdescRight">このスレッドでカレントになっているコンテキストがありません。<br />
</td>
</tr>
<tr class="separator:gaa8290386e9528ccb9e42a3a4e16fc0d0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga76f6bb9c4eea73db675f096b404593ce" class="memitem:ga76f6bb9c4eea73db675f096b404593ce">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga76f6bb9c4eea73db675f096b404593ce" class="el">GLFW_INVALID_ENUM</a>   0x00010003</td>
</tr>
<tr class="memdesc:ga76f6bb9c4eea73db675f096b404593ce">
<td class="mdescLeft"> </td>
<td class="mdescRight">関数に渡された引数のいずれかが無効な列挙値です。<br />
</td>
</tr>
<tr class="separator:ga76f6bb9c4eea73db675f096b404593ce">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaaf2ef9aa8202c2b82ac2d921e554c687" class="memitem:gaaf2ef9aa8202c2b82ac2d921e554c687">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a>   0x00010004</td>
</tr>
<tr class="memdesc:gaaf2ef9aa8202c2b82ac2d921e554c687">
<td class="mdescLeft"> </td>
<td class="mdescRight">関数に渡された引数のいずれかが無効な値です。<br />
</td>
</tr>
<tr class="separator:gaaf2ef9aa8202c2b82ac2d921e554c687">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga9023953a2bcb98c2906afd071d21ee7f" class="memitem:ga9023953a2bcb98c2906afd071d21ee7f">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga9023953a2bcb98c2906afd071d21ee7f" class="el">GLFW_OUT_OF_MEMORY</a>   0x00010005</td>
</tr>
<tr class="memdesc:ga9023953a2bcb98c2906afd071d21ee7f">
<td class="mdescLeft"> </td>
<td class="mdescRight">メモリの割り当てに失敗しました。<br />
</td>
</tr>
<tr class="separator:ga9023953a2bcb98c2906afd071d21ee7f">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga56882b290db23261cc6c053c40c2d08e" class="memitem:ga56882b290db23261cc6c053c40c2d08e">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga56882b290db23261cc6c053c40c2d08e" class="el">GLFW_API_UNAVAILABLE</a>   0x00010006</td>
</tr>
<tr class="memdesc:ga56882b290db23261cc6c053c40c2d08e">
<td class="mdescLeft"> </td>
<td class="mdescRight">要求されたAPIのサポートをGLFWがシステム上で見つけられませんでした。<br />
</td>
</tr>
<tr class="separator:ga56882b290db23261cc6c053c40c2d08e">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad16c5565b4a69f9c2a9ac2c0dbc89462" class="memitem:gad16c5565b4a69f9c2a9ac2c0dbc89462">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad16c5565b4a69f9c2a9ac2c0dbc89462" class="el">GLFW_VERSION_UNAVAILABLE</a>   0x00010007</td>
</tr>
<tr class="memdesc:gad16c5565b4a69f9c2a9ac2c0dbc89462">
<td class="mdescLeft"> </td>
<td class="mdescRight">要求されたバージョンのOpenGLまたはOpenGL ESを利用できません。<br />
</td>
</tr>
<tr class="separator:gad16c5565b4a69f9c2a9ac2c0dbc89462">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gad44162d78100ea5e87cdd38426b8c7a1" class="memitem:gad44162d78100ea5e87cdd38426b8c7a1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad44162d78100ea5e87cdd38426b8c7a1" class="el">GLFW_PLATFORM_ERROR</a>   0x00010008</td>
</tr>
<tr class="memdesc:gad44162d78100ea5e87cdd38426b8c7a1">
<td class="mdescLeft"> </td>
<td class="mdescRight">より具体的なカテゴリのいずれにも該当しない、プラットフォーム固有のエラーが発生しました。<br />
</td>
</tr>
<tr class="separator:gad44162d78100ea5e87cdd38426b8c7a1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga196e125ef261d94184e2b55c05762f14" class="memitem:ga196e125ef261d94184e2b55c05762f14">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga196e125ef261d94184e2b55c05762f14" class="el">GLFW_FORMAT_UNAVAILABLE</a>   0x00010009</td>
</tr>
<tr class="memdesc:ga196e125ef261d94184e2b55c05762f14">
<td class="mdescLeft"> </td>
<td class="mdescRight">要求された形式はサポートされていないか、利用できません。<br />
</td>
</tr>
<tr class="separator:ga196e125ef261d94184e2b55c05762f14">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gacff24d2757da752ae4c80bf452356487" class="memitem:gacff24d2757da752ae4c80bf452356487">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gacff24d2757da752ae4c80bf452356487" class="el">GLFW_NO_WINDOW_CONTEXT</a>   0x0001000A</td>
</tr>
<tr class="memdesc:gacff24d2757da752ae4c80bf452356487">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたウィンドウにはOpenGLまたはOpenGL ESコンテキストがありません。<br />
</td>
</tr>
<tr class="separator:gacff24d2757da752ae4c80bf452356487">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga09d6943923a70ddef3a085f5baee786c" class="memitem:ga09d6943923a70ddef3a085f5baee786c">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a>   0x0001000B</td>
</tr>
<tr class="memdesc:ga09d6943923a70ddef3a085f5baee786c">
<td class="mdescLeft"> </td>
<td class="mdescRight">指定されたカーソル形状を利用できません。<br />
</td>
</tr>
<tr class="separator:ga09d6943923a70ddef3a085f5baee786c">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga526fba20a01504a8086c763b6ca53ce5" class="memitem:ga526fba20a01504a8086c763b6ca53ce5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga526fba20a01504a8086c763b6ca53ce5" class="el">GLFW_FEATURE_UNAVAILABLE</a>   0x0001000C</td>
</tr>
<tr class="memdesc:ga526fba20a01504a8086c763b6ca53ce5">
<td class="mdescLeft"> </td>
<td class="mdescRight">要求された機能はプラットフォームによって提供されていません。<br />
</td>
</tr>
<tr class="separator:ga526fba20a01504a8086c763b6ca53ce5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga5dda77e023e83151e8bd55a6758f946a" class="memitem:ga5dda77e023e83151e8bd55a6758f946a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga5dda77e023e83151e8bd55a6758f946a" class="el">GLFW_FEATURE_UNIMPLEMENTED</a>   0x0001000D</td>
</tr>
<tr class="memdesc:ga5dda77e023e83151e8bd55a6758f946a">
<td class="mdescLeft"> </td>
<td class="mdescRight">要求された機能はそのプラットフォーム向けに実装されていません。<br />
</td>
</tr>
<tr class="separator:ga5dda77e023e83151e8bd55a6758f946a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3608c6c29ab7a72f3bf019f4c3a2563d" class="memitem:ga3608c6c29ab7a72f3bf019f4c3a2563d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga3608c6c29ab7a72f3bf019f4c3a2563d" class="el">GLFW_PLATFORM_UNAVAILABLE</a>   0x0001000E</td>
</tr>
<tr class="memdesc:ga3608c6c29ab7a72f3bf019f4c3a2563d">
<td class="mdescLeft"> </td>
<td class="mdescRight">プラットフォームを利用できないか、一致するプラットフォームが見つかりませんでした。<br />
</td>
</tr>
<tr class="separator:ga3608c6c29ab7a72f3bf019f4c3a2563d">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## マクロ定義の解説

<span id="gafa30deee5db4d69c4c93d116ed87dbf4"></span>

## <span class="permalink">[◆ ](#gafa30deee5db4d69c4c93d116ed87dbf4)</span>GLFW_NO_ERROR

<div class="memitem">

<div class="memproto">

|                            |
|----------------------------|
| \#define GLFW_NO_ERROR   0 |

</div>

<div class="memdoc">

エラーは発生していません。

分析  
問題ありません。

</div>

</div>

<span id="ga2374ee02c177f12e1fa76ff3ed15e14a"></span>

## <span class="permalink">[◆ ](#ga2374ee02c177f12e1fa76ff3ed15e14a)</span>GLFW_NOT_INITIALIZED

<div class="memitem">

<div class="memproto">

|                                            |
|--------------------------------------------|
| \#define GLFW_NOT_INITIALIZED   0x00010001 |

</div>

<div class="memdoc">

ライブラリが<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#intro_init" class="el">初期化</a>されていなければ呼び出してはならないGLFW関数を呼び出した場合に発生します。

分析  
アプリケーションプログラマーの誤りです。初期化が必要な関数を呼び出す前にGLFWを初期化してください。

</div>

</div>

<span id="gaa8290386e9528ccb9e42a3a4e16fc0d0"></span>

## <span class="permalink">[◆ ](#gaa8290386e9528ccb9e42a3a4e16fc0d0)</span>GLFW_NO_CURRENT_CONTEXT

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_NO_CURRENT_CONTEXT   0x00010002 |

</div>

<div class="memdoc">

カレントのOpenGLまたはOpenGL ESコンテキストを必要とし、それを操作するGLFW関数を呼び出したものの、呼び出し元スレッドでカレントになっているコンテキストがない場合に発生します。そのような関数の一つが <a href="/docs/glfw/v3-5-1/ja/04-reference/04-context-reference/#ga6d4e0cdf151b5e579bd67f13202994ed" class="el">glfwSwapInterval</a> です。

分析  
アプリケーションプログラマーの誤りです。カレントコンテキストを必要とする関数を呼び出す前に、コンテキストがカレントになっていることを確認してください。

</div>

</div>

<span id="ga76f6bb9c4eea73db675f096b404593ce"></span>

## <span class="permalink">[◆ ](#ga76f6bb9c4eea73db675f096b404593ce)</span>GLFW_INVALID_ENUM

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_INVALID_ENUM   0x00010003 |

</div>

<div class="memdoc">

関数に渡された引数のいずれかが無効な列挙値です。たとえば、<a href="/docs/glfw/v3-5-1/ja/04-reference/03-window-reference/#gacccb29947ea4b16860ebef42c2cb9337" class="el">glfwGetWindowAttrib</a> で <a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#GLFW_RED_BITS" class="el">GLFW_RED_BITS</a> を要求した場合です。

分析  
アプリケーションプログラマーの誤りです。問題のある呼び出しを修正してください。

</div>

</div>

<span id="gaaf2ef9aa8202c2b82ac2d921e554c687"></span>

## <span class="permalink">[◆ ](#gaaf2ef9aa8202c2b82ac2d921e554c687)</span>GLFW_INVALID_VALUE

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_INVALID_VALUE   0x00010004 |

</div>

<div class="memdoc">

関数に渡された引数のいずれかが無効な値です。たとえば、2.7のように存在しないバージョンのOpenGLまたはOpenGL ESを要求した場合です。

有効ではあるものの利用できないバージョンのOpenGLまたはOpenGL ESを要求した場合は、代わりに <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gad16c5565b4a69f9c2a9ac2c0dbc89462" class="el">GLFW_VERSION_UNAVAILABLE</a> エラーになります。

分析  
アプリケーションプログラマーの誤りです。問題のある呼び出しを修正してください。

</div>

</div>

<span id="ga9023953a2bcb98c2906afd071d21ee7f"></span>

## <span class="permalink">[◆ ](#ga9023953a2bcb98c2906afd071d21ee7f)</span>GLFW_OUT_OF_MEMORY

<div class="memitem">

<div class="memproto">

|                                          |
|------------------------------------------|
| \#define GLFW_OUT_OF_MEMORY   0x00010005 |

</div>

<div class="memdoc">

メモリの割り当てに失敗しました。

分析  
GLFWまたは基盤となるオペレーティングシステムのバグです。[issue tracker](https://github.com/glfw/glfw/issues)へバグを報告してください。

</div>

</div>

<span id="ga56882b290db23261cc6c053c40c2d08e"></span>

## <span class="permalink">[◆ ](#ga56882b290db23261cc6c053c40c2d08e)</span>GLFW_API_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                            |
|--------------------------------------------|
| \#define GLFW_API_UNAVAILABLE   0x00010006 |

</div>

<div class="memdoc">

要求されたAPIのサポートをGLFWがシステム上で見つけられませんでした。

分析  
インストールされているグラフィックスドライバーが要求されたAPIをサポートしていないか、選択したコンテキスト作成APIを介してはサポートしていません。以下にいくつか例を示します。

<!-- -->

  
Windowsにプリインストールされている一部のグラフィックスドライバーはOpenGLをサポートしていません。AMDはEGLを介したOpenGL ESだけをサポートする一方、NvidiaとIntelはWGLまたはGLX拡張機能を介したものだけをサポートします。macOSはOpenGL ESをまったく提供していません。MesaのEGL、OpenGL、OpenGL ESライブラリは、Nvidiaのバイナリドライバーと連携しません。古いグラフィックスドライバーはVulkanをサポートしていません。

</div>

</div>

<span id="gad16c5565b4a69f9c2a9ac2c0dbc89462"></span>

## <span class="permalink">[◆ ](#gad16c5565b4a69f9c2a9ac2c0dbc89462)</span>GLFW_VERSION_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_VERSION_UNAVAILABLE   0x00010007 |

</div>

<div class="memdoc">

要求されたバージョンのOpenGLまたはOpenGL ES（要求されたコンテキストまたはフレームバッファのヒントを含む）を、このマシンでは利用できません。

分析  
このマシンは要求をサポートしていません。アプリケーションに十分な柔軟性がある場合は、要求を引き下げて再試行してください。それ以外の場合は、マシンが要求を満たしていないことをユーザーへ通知してください。

<!-- -->

  
将来の無効なOpenGLおよびOpenGL ESバージョンも、<a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#gaaf2ef9aa8202c2b82ac2d921e554c687" class="el">GLFW_INVALID_VALUE</a> ではなく、このエラーで失敗します。たとえば、4.x系列が4.8へ到達する前に5.0が登場した場合のOpenGL 4.8です。これは、将来どのバージョンが存在するかをGLFWが知ることはできないためです。

</div>

</div>

<span id="gad44162d78100ea5e87cdd38426b8c7a1"></span>

## <span class="permalink">[◆ ](#gad44162d78100ea5e87cdd38426b8c7a1)</span>GLFW_PLATFORM_ERROR

<div class="memitem">

<div class="memproto">

|                                           |
|-------------------------------------------|
| \#define GLFW_PLATFORM_ERROR   0x00010008 |

</div>

<div class="memdoc">

より具体的なカテゴリのいずれにも該当しない、プラットフォーム固有のエラーが発生しました。

分析  
GLFW、基盤となるオペレーティングシステムまたはそのドライバーのバグや構成エラー、あるいは必要なリソースの不足です。[issue tracker](https://github.com/glfw/glfw/issues)へ問題を報告してください。

</div>

</div>

<span id="ga196e125ef261d94184e2b55c05762f14"></span>

## <span class="permalink">[◆ ](#ga196e125ef261d94184e2b55c05762f14)</span>GLFW_FORMAT_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_FORMAT_UNAVAILABLE   0x00010009 |

</div>

<div class="memdoc">

ウィンドウ作成中に発生した場合、要求されたピクセルフォーマットはサポートされていません。

クリップボードの照会時に発生した場合、クリップボードの内容を要求された形式へ変換できませんでした。

分析  
ウィンドウ作成中に発生した場合、1つ以上の<a href="/docs/glfw/v3-5-1/ja/03-guides/04-window-guide/#window_hints_hard" class="el">厳密な制約</a>に一致する利用可能なピクセルフォーマットがありませんでした。アプリケーションに十分な柔軟性がある場合は、要求を引き下げて再試行してください。それ以外の場合は、マシンが要求を満たしていないことをユーザーへ通知してください。

<!-- -->

  
クリップボードの照会時に発生した場合は、状況に応じてエラーを無視するか、ユーザーへ報告してください。

</div>

</div>

<span id="gacff24d2757da752ae4c80bf452356487"></span>

## <span class="permalink">[◆ ](#gacff24d2757da752ae4c80bf452356487)</span>GLFW_NO_WINDOW_CONTEXT

<div class="memitem">

<div class="memproto">

|                                              |
|----------------------------------------------|
| \#define GLFW_NO_WINDOW_CONTEXT   0x0001000A |

</div>

<div class="memdoc">

OpenGLまたはOpenGL ESコンテキストを持つ必要がある関数へ、コンテキストを持たないウィンドウが渡されました。

分析  
アプリケーションプログラマーの誤りです。問題のある呼び出しを修正してください。

</div>

</div>

<span id="ga09d6943923a70ddef3a085f5baee786c"></span>

## <span class="permalink">[◆ ](#ga09d6943923a70ddef3a085f5baee786c)</span>GLFW_CURSOR_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_CURSOR_UNAVAILABLE   0x0001000B |

</div>

<div class="memdoc">

指定された標準カーソル形状を利用できません。現在のプラットフォームのカーソルテーマが提供していないか、プラットフォームで利用できないためです。

分析  
プラットフォームまたはシステム設定による制限です。別の<a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/" class="el">標準カーソル形状</a>を選択するか、<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_custom" class="el">カスタムカーソル</a>を作成してください。

</div>

</div>

<span id="ga526fba20a01504a8086c763b6ca53ce5"></span>

## <span class="permalink">[◆ ](#ga526fba20a01504a8086c763b6ca53ce5)</span>GLFW_FEATURE_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                                |
|------------------------------------------------|
| \#define GLFW_FEATURE_UNAVAILABLE   0x0001000C |

</div>

<div class="memdoc">

要求された機能がプラットフォームによって提供されていないため、GLFWはその機能を実装できません。このエラーが発生する可能性がある場合は、各関数のドキュメントに記載されています。

分析  
プラットフォームまたはプラットフォームのバージョンによる制限です。その機能がアプリケーションに不可欠でない限り、このエラーは無視できます。

<!-- -->

  
このエラーを発生させる関数呼び出しは、エラーの発生と、存在する出力引数の更新以外には何も行いません。

</div>

</div>

<span id="ga5dda77e023e83151e8bd55a6758f946a"></span>

## <span class="permalink">[◆ ](#ga5dda77e023e83151e8bd55a6758f946a)</span>GLFW_FEATURE_UNIMPLEMENTED

<div class="memitem">

<div class="memproto">

|                                                  |
|--------------------------------------------------|
| \#define GLFW_FEATURE_UNIMPLEMENTED   0x0001000D |

</div>

<div class="memdoc">

要求された機能は、このプラットフォーム向けのGLFWにはまだ実装されていません。

分析  
このプラットフォーム向けのGLFW実装が不完全であり、将来のリリースで修正されることが期待されます。その機能がアプリケーションに不可欠でない限り、このエラーは無視できます。

<!-- -->

  
このエラーを発生させる関数呼び出しは、エラーの発生と、存在する出力引数の更新以外には何も行いません。

</div>

</div>

<span id="ga3608c6c29ab7a72f3bf019f4c3a2563d"></span>

## <span class="permalink">[◆ ](#ga3608c6c29ab7a72f3bf019f4c3a2563d)</span>GLFW_PLATFORM_UNAVAILABLE

<div class="memitem">

<div class="memproto">

|                                                 |
|-------------------------------------------------|
| \#define GLFW_PLATFORM_UNAVAILABLE   0x0001000E |

</div>

<div class="memdoc">

初期化中に発生した場合、一致するプラットフォームが見つかりませんでした。<a href="/docs/glfw/v3-5-1/ja/03-guides/01-introduction-to-the-api/#GLFW_PLATFORM" class="el">GLFW_PLATFORM</a> 初期化ヒントが `GLFW_ANY_PLATFORM` に設定されていた場合、Nullプラットフォームを除き、このライブラリバイナリがサポートするどのプラットフォームもGLFWが検出できませんでした。初期化ヒントが特定のプラットフォームに設定されていた場合、そのプラットフォームがこのライブラリバイナリでサポートされていないか、GLFWが検出できませんでした。

ネイティブアクセス関数から発生した場合、その関数が対象とするものとは異なるプラットフォーム用にGLFWが初期化されています。

分析  
どのプラットフォームも検出できない状況は、通常macOS以外のUnixシステムでだけ発生します。ウィンドウシステムが実行されていないか、必要な環境変数を持たないターミナルからプログラムを実行した場合です。可能であれば別のプラットフォームへフォールバックするか、利用可能なプラットフォームを検出できなかったことをユーザーへ通知してください。

特定のプラットフォームを検出できない原因は上記と同じ場合もあれば、そのプラットフォームのサポートがコンパイル時に組み込まれていない場合もあります。特定のプラットフォームをライブラリバイナリがサポートしているか確認するには、<a href="/docs/glfw/v3-5-1/ja/04-reference/01-initialization-version-error/#ga8785d2b6b36632368d803e78079d38ed" class="el">glfwPlatformSupported</a> を呼び出してください。

</div>

</div>
