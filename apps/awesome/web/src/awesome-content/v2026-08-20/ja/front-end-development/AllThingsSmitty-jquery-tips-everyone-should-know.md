---
title: "Awesome jQuery Tips Everyone Should Know"
description: "jQuery Tips Everyone Should Knowを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-AllThingsSmitty-jquery-tips-everyone-should-know-readme-md"
---

# Awesome jQuery Tips Everyone Should Know

jQuery Tips Everyone Should Knowを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [ヒント](#tips)
- [サポート](#support)
- [翻訳](#translations)
- [貢献ガイドライン](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/blob/f54990999a702137c41040c079a1f25237ca8faa/CONTRIBUTING.md)

## ヒント

1. [`noConflict()`を使う](#use-noconflict)
1. [jQueryが読み込まれたか確認する](#checking-if-jquery-loaded)
1. [要素が存在するか確認する](#check-whether-an-element-exists)
1. [`.on()`バインディングを使い、`.click()`は使わない](#use-on-binding-instead-of-click)
1. [ページ先頭へ戻るボタン](#back-to-top-button)
1. [画像をプリロードする](#preload-images)
1. [画像が読み込まれたか確認する](#checking-if-images-are-loaded)
1. [壊れた画像を自動的に修正する](#fix-broken-images-automatically)
1. [AJAXでフォームを送信する](#post-a-form-with-ajax)
1. [ホバー時にクラスを切り替える](#toggle-classes-on-hover)
1. [入力フィールドを無効化する](#disabling-input-fields)
1. [リンクの読み込みを止める](#stop-the-loading-of-links)
1. [jQueryセレクターをキャッシュする](#cache-jquery-selectors)
1. [フェード／スライドを切り替える](#toggle-fadeslide)
1. [シンプルなアコーディオン](#simple-accordion)
1. [二つのDivを同じ高さにする](#make-two-divs-the-same-height)
1. [外部リンクを新しいタブ／ウィンドウで開く](#open-external-links-in-new-tabwindow)
1. [テキストで要素を見つける](#find-element-by-text)
1. [可視性の変更時にトリガーする](#trigger-on-visibility-change)
1. [AJAX呼出しのエラー処理](#ajax-call-error-handling)
1. [プラグイン呼出しを連鎖する](#chain-plugin-calls)
1. [リスト項目をアルファベット順に並べ替える](#sort-list-items-alphabetically)
1. [右クリックを無効化する](#disable-right-click)

### `noConflict()`を使う

jQueryが使う`$`エイリアスは、他のJavaScriptライブラリでも使われます。jQueryが別ライブラリの`$`オブジェクトと競合しないよう、ドキュメントの先頭で`noConflict()`メソッドを使います。

```javascript
jQuery.noConflict();
```

これ以降は`jQuery`変数名で、`$`の代わりにjQueryオブジェクトを参照します（例: `jQuery('div p').hide()`）。同じページに複数のjQueryバージョンがある場合（推奨しません）、`noConflict()`を使い特定のバージョンへエイリアスを設定できます。

```javascript
let $x = jQuery.noConflict();
```

<sup>[目次に戻る](#table-of-contents)</sup>

### jQueryが読み込まれたか確認する

jQueryで何かを行う前に、まず読み込まれていることを確かめる必要があります。

```javascript
if (typeof jQuery == "undefined") {
  console.log("jQuery hasn't loaded");
} else {
  console.log("jQuery has loaded");
}
```

これで準備完了です。

<sup>[目次に戻る](#table-of-contents)</sup>
### 要素が存在するか確認する

HTML要素を使う前に、それがDOMの一部であることを確認する必要があります。

```javascript
if ($("#selector").length) {
  //do something with element
}
```

<sup>[目次に戻る](#table-of-contents)</sup>

### `.on()`バインディングを使い、`.click()`は使わない

`.on()`を使うと、複数イベントを追加できるなど、`.click()`より多くの利点があります。

```javascript
.on('click tap hover')
```

また、動的に作成された要素にもバインディングが適用されます（DOM要素へ動的追加される要素を毎回手動でバインドする必要はありません）。

さらに名前空間を設定できます。

```javascript
.on('click.menuOpening')
```

名前空間により特定イベントを解除できます（例: `.off('click.menuOpening')`）。

<sup>[目次に戻る](#table-of-contents)</sup>

### ページ先頭へ戻るボタン

jQueryの`animate`・`scrollTop`メソッドを使えば、単純な先頭スクロールアニメーションにプラグインは不要です。

```javascript
// Back to top
$(".container").on("click", ".back-to-top", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 800);
});
```

```html

<div class="container">
  <a href="#" class="back-to-top">Back to top</a>
</div>
```

`scrollTop`値を変えると、スクロールバーの到達位置が変わります。実際には、ドキュメント本体を800ミリ秒かけて先頭へスクロールするようアニメーションさせています。

> **注記:**
> `scrollTop`には[不安定な挙動](https://github.com/jquery/api.jquery.com/issues/417)があるため注意してください。

<sup>[目次に戻る](#table-of-contents)</sup>

### 画像をプリロードする

Webページで最初は表示されない画像（ホバー時など）を多く使う場合は、プリロードすることが合理的です。

```javascript
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $("<img>").attr("src", arguments[i]);
  }
};

$.preloadImages("img/hover-on.png", "img/hover-off.png");
```

<sup>[目次に戻る](#table-of-contents)</sup>

### 画像が読み込まれたか確認する

スクリプトを続行するために、画像が完全に読み込まれたか確認する必要があることがあります。

```javascript
$("img").on("load", function () {
  console.log("image load successful");
});
```

特定の画像だけが読み込まれたか確認するには、`<img>`タグをIDまたはクラスに置き換えることもできます。

<sup>[目次に戻る](#table-of-contents)</sup>

### 壊れた画像を自動的に修正する

サイトで壊れた画像リンクを見つけた際、それらを一つずつ置換するのは大変です。この単純なコードで多くの手間を省けます。

```javascript
$("img").on("error", function () {
  if (!$(this).hasClass("broken-image")) {
    $(this).prop("src", "img/broken.png").addClass("broken-image");
  }
});
```

壊れた画像を隠したい場合は、代わりに次のスニペットを使えます。

```javascript
$("img").on("error", function () {
  $(this).hide();
});
```

<sup>[目次に戻る](#table-of-contents)</sup>

### AJAXでフォームを送信する

jQuery AJAXメソッドは、テキスト、HTML、XML、JSONをリクエストする一般的な手段です。AJAXでフォームを送るには、`val()`メソッドでユーザー入力を収集できます。

```javascript
$.post("sign_up.php", {
  user_name: $("input[name=user_name]").val(),
  email: $("input[name=email]").val(),
  password: $("input[name=password]").val(),
});
```

ただし、これらの`val()`呼出しはすべてコストが高く、`.val()`を`<textarea>`要素に使うとブラウザーが報告する値から改行文字が取り除かれます。ユーザー入力を収集するより良い方法は、文字列として収集する`serialize()`関数を使うことです。

```javascript
$.post("sign_up", $("#sign-up-form").serialize());
```

<sup>[目次に戻る](#table-of-contents)</sup>

### ホバー時にクラスを切り替える

ユーザーがページ上のクリック可能な要素にホバーしたとき、見た目を変えたいとします。ホバー中は要素へクラスを追加し、ホバーを止めたらクラスを削除できます。

```javascript
$(".btn").on(
  "hover",
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
```

必要なCSSを追加します。さらに簡単な方法が必要なら、`toggleClass`メソッドを使います。

```javascript
$(".btn").on("hover", function () {
  $(this).toggleClass("hover");
});
```

> **注記:**
> この場合はCSSのほうが高速な解決策かもしれませんが、知っておく価値はあります。

<sup>[目次に戻る](#table-of-contents)</sup>

### 入力フィールドを無効化する

フォーム送信ボタンまたはテキスト入力を、ユーザーが特定の操作（例: 「規約を読みました」チェックボックス）を行うまで無効にしたい場合があります。入力に`disabled`属性を追加し、必要なときに有効化します。

```javascript
$('input[type="submit"]').prop("disabled", true);
```

入力で`prop`メソッドを再度実行し、`disabled`の値を`false`に設定するだけです。

```javascript
$('input[type="submit"]').prop("disabled", false);
```

<sup>[目次に戻る](#table-of-contents)</sup>

### リンクの読み込みを止める

リンクを特定のWebページへ遷移させず、ページも再読み込みせず、別のスクリプトを起動するなど別のことをさせたい場合があります。既定の動作を防ぐには次を使います。

```javascript
$("a.no-link").on("click", function (e) {
  e.preventDefault();
});
```

<sup>[目次に戻る](#table-of-contents)</sup>

### jQueryセレクターをキャッシュする

どのプロジェクトでも、同じセレクターを何度も書くことがあります。`$('.element')`セレクターは、以前に実行済みかどうかに関係なく毎回DOM全体を検索します。代わりにセレクターを一度実行し、結果を変数へ格納できます。

```javascript
var blocks = $("#blocks").find("li");
```

これで毎回DOMを検索せず、必要な場所で`blocks`変数を使えます。

```javascript
$("#hideBlocks").on("click", function () {
  blocks.fadeOut();
});

$("#showBlocks").on("click", function () {
  blocks.fadeIn();
});
```

jQueryセレクターのキャッシュは優れた性能改善になります。

<sup>[目次に戻る](#table-of-contents)</sup>

### フェード／スライドを切り替える

スライドとフェードはjQueryのアニメーションで一般的です。クリック時に要素を表示するには`fadeIn`・`slideDown`メソッドが適していますが、最初のクリックで現れ、二度目のクリックで消えるようにするには次を使えます。

```javascript
// Fade
$(".btn").on("click", function () {
  $(".element").fadeToggle("slow");
});

// Toggle
$(".btn").on("click", function () {
  $(".element").slideToggle("slow");
});
```

<sup>[目次に戻る](#table-of-contents)</sup>

### シンプルなアコーディオン

素早くアコーディオンを作るシンプルな方法です。

```javascript
// Close all panels
$("#accordion").find(".content").hide();

// Accordion
$("#accordion")
  .find(".accordion-header")
  .on("click", function () {
    var next = $(this).next();
    next.slideToggle("fast");
    $(".content").not(next).slideUp("fast");
    return false;
  });
```

このスクリプトを追加すれば、Webページ側では動作に必要なHTMLを用意するだけです。

<sup>[目次に戻る](#table-of-contents)</sup>

### 二つのDivを同じ高さにする

内容に関係なく二つのdivを同じ高さにしたい場合があります。

```javascript
$(".div").css("min-height", $(".main-div").height());
```

この例は`min-height`を設定するため、メインdivより大きくはできますが、小さくはなりません。より柔軟な方法は、要素群をループして最も高い要素の高さを`height`に設定することです。

```javascript
var $columns = $(".column");
var height = 0;
$columns.each(function () {
  if ($(this).height() > height) {
    height = $(this).height();
  }
});
$columns.height(height);
```

_すべての_列を同じ高さにしたい場合は次を使います。

```javascript
var $rows = $(".same-height-columns");
$rows.each(function () {
  $(this).find(".column").height($(this).height());
});
```

> **注記:**
> これは[CSS](http://codepen.io/AllThingsSmitty/pen/KMPqoO)で複数の方法により実現できますが、必要に応じてjQueryでの方法を知っておくと便利です。

<sup>[目次に戻る](#table-of-contents)</sup>

### 外部リンクを新しいタブ／ウィンドウで開く

外部リンクを新しいブラウザータブまたはウィンドウで開き、同一オリジンのリンクは同じタブまたはウィンドウで開くようにします。

```javascript
$('a[href^="http"]').attr("target", "_blank");
$('a[href^="//"]').attr("target", "_blank");
$('a[href^="' + window.location.origin + '"]').attr("target", "_self");
```

<sup>[目次に戻る](#table-of-contents)</sup>

### テキストで要素を見つける

jQueryの`contains()`セレクターを使うと、要素コンテンツ内のテキストを見つけられます。テキストが存在しない場合は、その要素を隠します。

```javascript
var search = $("#search").val();
$('div:not(:contains("' + search + '"))').hide();
```

<sup>[目次に戻る](#table-of-contents)</sup>

### 可視性の変更時にトリガーする

ユーザーがタブからフォーカスを外したとき、またはタブへ再度フォーカスしたときにJavaScriptを起動します。

```javascript
$(document).on("visibilitychange", function (e) {
  if (e.target.visibilityState === "visible") {
    console.log("Tab is now in view!");
  } else if (e.target.visibilityState === "hidden") {
    console.log("Tab is now hidden!");
  }
});
```

<sup>[目次に戻る](#table-of-contents)</sup>

### AJAX呼出しのエラー処理

AJAX呼出しが404または500エラーを返すと、エラーハンドラーが実行されます。ハンドラーが未定義の場合、他のjQueryコードが意図どおり動かないことがあります。グローバルAJAXエラーハンドラーを定義するには次を使います。

```javascript
$(document).on("ajaxError", function (e, xhr, settings, error) {
  console.log(error);
});
```

<sup>[目次に戻る](#table-of-contents)</sup>

### プラグイン呼出しを連鎖する

jQueryではプラグインメソッド呼出しを「連鎖」できるため、DOMの繰返し検索と複数のjQueryオブジェクト作成を抑えられます。次のスニペットがプラグインメソッド呼出しだとします。

```javascript
$("#elem").show();
$("#elem").html("bla");
$("#elem").otherStuff();
```

連鎖を使うと大幅に改善できます。

```javascript
$("#elem").show().html("bla").otherStuff();
```

代替として、要素を（`$`を先頭に付けた）変数へキャッシュできます。

```javascript
var $elem = $("#elem");
$elem.hide();
$elem.html("bla");
$elem.otherStuff();
```

jQueryの連鎖と[キャッシュ](#cache-jquery-selectors)は、より短く高速なコードにつながるベストプラクティスです。

<sup>[目次に戻る](#table-of-contents)</sup>

### リスト項目をアルファベット順に並べ替える

リストの項目が多くなりすぎることがあります。CMSがコンテンツを生成し、それらをアルファベット順にしたい場合を考えます。

```javascript
var ul = $("#list"),
  lis = $("li", ul).get();

lis.sort(function (a, b) {
  return $(a).text().toUpperCase() < $(b).text().toUpperCase() ? -1 : 1;
});

ul.append(lis);
```

これで完了です。

<sup>[目次に戻る](#table-of-contents)</sup>

### 右クリックを無効化する

右クリックを無効にしたい場合、ページ全体に対して設定できます。

```javascript
$(document).ready(function () {
  $(document).bind("contextmenu", function (e) {
    return false;
  });
});
```

特定の要素に対して同じことを行うこともできます。

```javascript
$(document).ready(function () {
  $("#submit").bind("contextmenu", function (e) {
    return false;
  });
});
```

<sup>[目次に戻る](#table-of-contents)</sup>

## サポート

Chrome、Firefox、Safari、Opera、Edge、IE11の現行バージョン。

<sup>[目次に戻る](#table-of-contents)</sup>

## 翻訳

- [български](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/bg-BG)
- [Español](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/es-ES)
- [Français](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/fr-FR)
- [Magyar](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/hu-HU)
- [한국어](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/ko-KR)
- [Português do Europe](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/pt-PT)
- [Pусский](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/ru-RU)
- [简体中文](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/zh-CN)
- [繁體中文](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/zh-TW)

<sup>[目次に戻る](#table-of-contents)</sup>
