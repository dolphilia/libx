---
title: "バージョン 3.5 リリースノート"
description: "GLFW 3.5 で導入された変更"
licenseSource: "glfw-3.5.1"
---

> このページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を Markdown 向けに改変したものです。書式、ナビゲーション、リンクは libx 用に変更していますが、技術的内容は GLFW 3.5.1 ソース配布物に基づいています。

<a id="news"></a>

# バージョン 3.5 リリースノート
## 3.5.0 がリリースされなかった理由

ツールの設定ミスにより、誤った `3.5.0` タグが一時的にメイン Git リポジトリで公開されました。多数のパッケージング協力者による手動対応のおかげで、これはほぼ完全に巻き戻されました。GLFW 3.5 の最初の実際のリリースが、あらゆる場所で誤ったタグを確実に置き換えるよう、最初のリリースは 3.5.1 と命名されました。


<a id="features"></a>

## 新機能
<a id="unlimited_mouse_buttons"></a>

### 無制限のマウスボタン
GLFW に、対応する[マウスボタントークン](/docs/glfw/v3-5-1/ja/04-reference/11-mouse-buttons/)だけでなく、無制限の数のマウスボタンをマウスボタンコールバックへ通知できる入力モードが追加されました。これにより、値が 8 を超えるマウスボタンを使用できます。以前のバージョンとの互換性のため、この機能を利用するには [GLFW_UNLIMITED_MOUSE_BUTTONS](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS) 入力モードを設定する必要があります。


<a id="eglconfig"></a>

### EGLConfig ネイティブアクセス関数
GLFW は、`EGLSurface` を持つウィンドウの `EGLConfig` を照会するネイティブアクセス関数 [glfwGetEGLConfig](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gaada9744377463b229b4817eb96384e8c) を提供するようになりました。


<a id="glxfbconfig"></a>

### GLXFBConfig ネイティブアクセス関数
GLFW は、`GLXWindow` を持つウィンドウの `GLXFBConfig` を照会するネイティブアクセス関数 [glfwGetGLXFBConfig](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gada0e83394c2258396bff9ba6b73abf98) を提供するようになりました。


<a id="caveats"></a>

## 注意事項
<a id="deprecations"></a>

## 非推奨
<a id="removals"></a>

## 削除
<a id="winxp_vista"></a>

### Windows XP および Vista サポートの削除
Windows XP および Vista のサポートは削除されました。Windows XP の延長サポートは 2014 年に終了しています。


<a id="original_mingw"></a>

### オリジナル MinGW サポートの削除
現在は保守されていないオリジナル MinGW ディストリビューションのサポートは削除されました。

これは、より高機能で引き続き完全にサポートされる [MinGW-w64](https://www.mingw-w64.org/) には当てはまりません。MinGW-w64 は 32 ビットと 64 ビットの両方のバイナリをビルドでき、活発に保守され、多くのプラットフォームで利用できます。


<a id="new_symbols"></a>

## 新しいシンボル
<a id="new_functions"></a>

### 新しい関数
 - [glfwGetEGLConfig](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gaada9744377463b229b4817eb96384e8c)
 - [glfwGetGLXFBConfig](/docs/glfw/v3-5-1/ja/04-reference/08-native-access/#gada0e83394c2258396bff9ba6b73abf98)


<a id="new_types"></a>

### 新しい型
<a id="new_constants"></a>

### 新しい定数
- [GLFW_UNLIMITED_MOUSE_BUTTONS](/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#GLFW_UNLIMITED_MOUSE_BUTTONS)

<a id="news_archive"></a>

## 以前のバージョンのリリースノート
- [3.4 リリースノート](https://www.glfw.org/docs/3.4/news.html)
- [3.3 リリースノート](https://www.glfw.org/docs/3.3/news.html)
- [3.2 リリースノート](https://www.glfw.org/docs/3.2/news.html)
- [3.1 リリースノート](https://www.glfw.org/docs/3.1/news.html)
- [3.0 リリースノート](https://www.glfw.org/docs/3.0/news.html)
