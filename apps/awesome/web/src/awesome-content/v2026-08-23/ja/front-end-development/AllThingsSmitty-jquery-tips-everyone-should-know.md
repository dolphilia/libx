---
title: "Awesome jQuery Tips Everyone Should Know"
description: "イベント、フォーム、画像、アニメーション、セレクター、DOM更新、AJAXに関するjQueryのコード例を案内します。"
licenseSource: "github-AllThingsSmitty-jquery-tips-everyone-should-know-readme-md"
---

# Awesome jQuery Tips Everyone Should Know

イベント、フォーム、画像、アニメーション、セレクター、DOM更新、AJAXに関するjQueryのコード例を探せます。ブラウザー対応情報は固定原文に沿っています。各コードは特定の処理パターンを示す例です。

## ヒント<a id="tips"></a>

### `noConflict()`を使う<a id="use-noconflict"></a>

ほかのJavaScriptライブラリーも`$`エイリアスを使う場合があります。jQueryを読み込んだ後に`noConflict()`を呼び出すと、読み込み前の値へ戻せます。

```javascript
jQuery.noConflict();
```

その後は、`jQuery`からこのインスタンスを参照し、`$`の代わりに使います（例: `jQuery('div p').hide()`）。複数の版を読み込んでいる場合などは、返されたインスタンスをローカルな別名で保持することもできます。

```javascript
let $x = jQuery.noConflict();
```

`noConflict()`はこのjQueryインスタンスへの参照を返し、以前の`$`を復元します。グローバルな`jQuery`変数も先に読み込んだ版へ戻す必要がある場合は`noConflict(true)`を使います。[jQuery.noConflict()](https://api.jquery.com/jQuery.noConflict/)を参照してください。

### jQueryが読み込まれたか確認する<a id="checking-if-jquery-loaded"></a>

jQueryで何かを行う前に、まず読み込まれていることを確かめる必要があります。

```javascript
if (typeof jQuery == "undefined") {
  console.log("jQuery hasn't loaded");
} else {
  console.log("jQuery has loaded");
}
```

グローバル変数が定義されているかをメッセージで区別します。

### 要素が存在するか確認する<a id="check-whether-an-element-exists"></a>

HTML要素を使う前に、それがDOMの一部であることを確認する必要があります。

```javascript
if ($("#selector").length) {
  //do something with element
}
```

### `.on()`バインディングを使い、`.click()`は使わない<a id="use-on-binding-instead-of-click"></a>

原文では、複数のイベント名を指定する例として次の断片を示しています。

```javascript
.on('click tap hover')
```

`.on()`に一致条件の`selector`を渡す委譲ハンドラーでは、後から追加された子孫要素も処理できます。直接バインドする場合は、呼び出し時に選択された既存の要素が対象です。[jQueryの`.on()`資料](https://api.jquery.com/on/)を参照してください。

原文の`tap`イベントには、それを発生させる仕組みが必要です。`hover`疑似イベントはjQuery 1.9で削除されているため、ポインターの出入りには`mouseenter mouseleave`を使います。上下の断片を完全な呼び出しにするには対象オブジェクトとハンドラーも必要です。次のように名前空間を指定できます。

```javascript
.on('click.menuOpening')
```

名前空間を使うと、ほかのクリックハンドラーを残し、一致するハンドラーだけを解除できます（例: `.off('click.menuOpening')`）。

### ページ先頭へ戻るボタン<a id="back-to-top-button"></a>

jQueryの`animate`・`scrollTop`メソッドを使えば、単純な先頭スクロールアニメーションにプラグインは不要です。

```javascript
// Back to top
$(".container").on("click", ".back-to-top", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 800);
});
```

```html
<!-- Create an anchor tag -->
<div class="container">
  <a href="#" class="back-to-top">Back to top</a>
</div>
```

`scrollTop`値を変えると、スクロールの到達位置が変わります。この例では800ミリ秒かけて先頭へ移動します。

> **注記:**
> 原文では、スクロールする要素に依存する[scrollTopの挙動の報告](https://github.com/jquery/api.jquery.com/issues/417)を参照しています。

### 画像をプリロードする<a id="preload-images"></a>

ホバー時に使う画像などを、表示する前に読み込み始めます。

```javascript
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $("<img>").attr("src", arguments[i]);
  }
};

$.preloadImages("img/hover-on.png", "img/hover-off.png");
```

### 画像が読み込まれたか確認する<a id="checking-if-images-are-loaded"></a>

選択した各画像の読み込み完了イベントにハンドラーを登録します。

```javascript
$("img").on("load", function () {
  console.log("image load successful");
});
```

特定の画像を対象にするには、imgセレクターをIDまたはクラスのセレクターへ置き換えます。これは今後の完了イベントを待つ処理であり、すでに読み込みが終わったかを調べる処理ではありません。[jQueryのloadイベント資料](https://api.jquery.com/load-event/)を参照してください。

### 壊れた画像を自動的に修正する<a id="fix-broken-images-automatically"></a>

画像の読み込みエラー時に、代替画像を指定します。クラスを付けて、代替画像への繰り返し置換を防ぎます。

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

### AJAXでフォームを送信する<a id="post-a-form-with-ajax"></a>

jQuery AJAXメソッドは、テキスト、HTML、XML、JSONをリクエストする一般的な手段です。AJAXでフォームを送るには、`val()`メソッドでユーザー入力を収集できます。

```javascript
$.post("sign_up.php", {
  user_name: $("input[name=user_name]").val(),
  email: $("input[name=email]").val(),
  password: $("input[name=password]").val(),
});
```

各フィールドを個別に読む代わりに、`serialize()`で送信対象のフォーム部品をURLエンコードした文字列にまとめられます。すべての部品が対象になるわけではないため、[シリアライズの条件](https://api.jquery.com/serialize/)を参照してください。また原文では、`.val()`がブラウザーの報告する`<textarea>`の値から復帰文字（CR）を除くことに言及しています。[値を取得するAPIの資料](https://api.jquery.com/val/)にも説明があります。

```javascript
$.post("sign_up", $("#sign-up-form").serialize());
```

### ホバー時にクラスを切り替える<a id="toggle-classes-on-hover"></a>

ポインターが要素に入ったときにクラスを追加し、出たときに削除します。原文の`.on("hover", handlerIn, handlerOut)`は、イベント名と2ハンドラーを受け取る`.hover()`メソッドを混同しています。[jQueryの`.hover()`資料](https://api.jquery.com/hover/)に従い、`.on()`で`mouseenter`と`mouseleave`へ別々のハンドラーを登録します。

```javascript
$(".btn")
  .on("mouseenter", function () {
    $(this).addClass("hover");
  })
  .on("mouseleave", function () {
    $(this).removeClass("hover");
  });
```

必要なCSSを追加します。代わりに、ポインターの出入りでクラスを切り替えることもできます。

```javascript
$(".btn").on("mouseenter mouseleave", function () {
  $(this).toggleClass("hover");
});
```

> **注記:**
> 原文では、ホバー時のスタイル設定にCSSを使う方法にも言及しています。

### 入力フィールドを無効化する<a id="disabling-input-fields"></a>

フォーム送信ボタンまたはテキスト入力を、ユーザーが特定の操作（例: 「規約を読みました」チェックボックス）を行うまで無効にしたい場合があります。入力に`disabled`属性を追加し、必要なときに有効化します。

```javascript
$('input[type="submit"]').prop("disabled", true);
```

入力で`prop`メソッドを再度実行し、`disabled`の値を`false`に設定するだけです。

```javascript
$('input[type="submit"]').prop("disabled", false);
```

### リンクの読み込みを止める<a id="stop-the-loading-of-links"></a>

リンクを特定のWebページへ遷移させず、ページも再読み込みせず、別のスクリプトを起動するなど別のことをさせたい場合があります。既定の動作を防ぐには次を使います。

```javascript
$("a.no-link").on("click", function (e) {
  e.preventDefault();
});
```

### jQueryセレクターをキャッシュする<a id="cache-jquery-selectors"></a>

`$('.element')`を繰り返し呼ぶと、前回の結果を再利用せず新たに要素を選択します。一度選択した結果を変数へ格納できます。

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

選択結果を再利用すると繰り返し検索を避けられます。ただし、選択後に追加された要素は自動的には含まれません。

### フェード／スライドを切り替える<a id="toggle-fadeslide"></a>

`fadeIn`と`slideDown`は要素を表示するメソッドです。クリックごとに表示と非表示を切り替えるには、次のメソッドを使います。最初の動作は要素が初めに表示されているかに依存します。

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

### シンプルなアコーディオン<a id="simple-accordion"></a>

クリックした見出しの直後にあるパネルを開閉し、ほかの内容パネルを閉じます。

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

HTMLでは各パネルを見出しの直後に配置する必要があります。パネルを閉じるルールは文書全体から選択するため、対象範囲を意図したアコーディオンへ合わせてください。

### 二つのDivを同じ高さにする<a id="make-two-divs-the-same-height"></a>

あるdivの現在の内容の高さを使って、別のdivの最小高さを設定します。

```javascript
$(".div").css("min-height", $(".main-div").height());
```

この例は`min-height`を設定するため、対象要素がより高くなることもあります。表示上の高さが等しくなる保証はありません。要素群の最大の高さを`height`に設定するには、各要素を測定してその値を適用します。

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

行ごとに列をまとめる場合、次の例は各行の現在の高さをその行の列に設定します。行同士の高さは異なる場合があります。

```javascript
var $rows = $(".same-height-columns");
$rows.each(function () {
  $(this).find(".column").height($(this).height());
});
```

> **注記:**
> これは[CSS](http://codepen.io/AllThingsSmitty/pen/KMPqoO)で複数の方法により実現できますが、必要に応じてjQueryでの方法を知っておくと便利です。

### 外部リンクを新しいタブ／ウィンドウで開く<a id="open-external-links-in-new-tabwindow"></a>

原文では、hrefがhttpまたは//から始まるリンクの表示先を変え、現在のオリジン文字列から始まるリンクだけ元の表示先へ戻しています。これは文字列の接頭辞比較であり、厳密なオリジン比較ではありません。同一オリジンでもプロトコル相対URLは最初の指定のままで、別のホストが同じ接頭辞を持つ場合もあります。

```javascript
$('a[href^="http"]').attr("target", "_blank");
$('a[href^="//"]').attr("target", "_blank");
$('a[href^="' + window.location.origin + '"]').attr("target", "_self");
```

### テキストで要素を見つける<a id="find-element-by-text"></a>

jQueryの`:contains()`セレクターは、子孫要素も含むテキストを大文字と小文字を区別して照合します。[セレクター資料](https://api.jquery.com/contains-selector/)を参照してください。この例は、検索語を含まない`div`要素を隠します。検索語を引用符で囲んだセレクターへそのまま挿入できることが前提で、任意の引用符やバックスラッシュへの処理はありません。

```javascript
var search = $("#search").val();
$('div:not(:contains("' + search + '"))').hide();
```

### 可視性の変更時にトリガーする<a id="trigger-on-visibility-change"></a>

タブの切り替えなどで文書の状態が表示中と非表示の間で変わったときに、ハンドラーを実行します。

```javascript
$(document).on("visibilitychange", function (e) {
  if (e.target.visibilityState === "visible") {
    console.log("Tab is now in view!");
  } else if (e.target.visibilityState === "hidden") {
    console.log("Tab is now hidden!");
  }
});
```

### AJAX呼出しのエラー処理<a id="ajax-call-error-handling"></a>

404や500など、AJAXリクエストの失敗に対応するグローバルハンドラーを登録します。リクエストでグローバルイベントを無効にすると、このイベントは発生しません。[ajaxError資料](https://api.jquery.com/ajaxError/)を参照してください。

```javascript
$(document).on("ajaxError", function (e, xhr, settings, error) {
  console.log(error);
});
```

### プラグイン呼出しを連鎖する<a id="chain-plugin-calls"></a>

同じ要素を繰り返し検索する代わりに、対応するメソッドを一つの選択結果へ連鎖して呼び出せます。原文では、まず個別の呼び出しを示しています。

```javascript
$("#elem").show();
$("#elem").html("bla");
$("#elem").otherStuff();
```

各メソッドが次のメソッドに対応するjQueryオブジェクトを返す場合、呼び出しをまとめられます。

```javascript
$("#elem").show().html("bla").otherStuff();
```

`$`を先頭に付けた変数へ保存する方法でも、選択結果を再利用できます。原文のこの例は要素を非表示にし、直前の表示する例とは動作が異なります。

```javascript
var $elem = $("#elem");
$elem.hide();
$elem.html("bla");
$elem.otherStuff();
```

連鎖と[キャッシュ](#cache-jquery-selectors)は、どちらも選択結果を再利用できます。メソッドの戻り値と必要な動作に合わせて使います。

### リスト項目をアルファベット順に並べ替える<a id="sort-list-items-alphabetically"></a>

項目のテキストを大文字に変換して比較し、その順にリストへ配置します。原文の比較関数は同じテキストにも1を返すため、[配列の並べ替えの仕様](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort)に従い、同値の場合に0を返すよう補正しています。

```javascript
var ul = $("#list"),
  lis = $("li", ul).get();

lis.sort(function (a, b) {
  var aText = $(a).text().toUpperCase();
  var bText = $(b).text().toUpperCase();
  return aText < bText ? -1 : aText > bText ? 1 : 0;
});

ul.append(lis);
```

大文字に変換した文字列の比較であり、言語別の照合順序による並べ替えではありません。

### 右クリックを無効化する<a id="disable-right-click"></a>

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

## サポート<a id="support"></a>

固定原文ではChrome、Firefox、Safari、Opera、Edge、IE11を挙げています。原文の対応情報であり、現在のjQueryリリースでの動作を保証するものではありません。

## 翻訳<a id="translations"></a>

- [български](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/bg-BG)
- [Español](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/es-ES)
- [Français](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/fr-FR)
- [Magyar](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/hu-HU)
- [한국어](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/ko-KR)
- [Português do Europe](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/pt-PT)
- [Pусский](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/ru-RU)
- [简体中文](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/zh-CN)
- [繁體中文](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/zh-TW)
