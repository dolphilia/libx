---
title: "Awesome jQuery Tips Everyone Should Know"
description: "jQuery examples for events, forms, images, animations, selectors, DOM updates, and AJAX."
licenseSource: "github-AllThingsSmitty-jquery-tips-everyone-should-know-readme-md"
---

# Awesome jQuery Tips Everyone Should Know

jQuery code examples for events, forms, images, animations, selectors, DOM updates, and AJAX. Browser support information follows the fixed source. The examples cover specific patterns rather than complete applications.

## Tips

### Use `noConflict()`

Other JavaScript libraries may also use the `$` alias. After loading jQuery, call `noConflict()` to restore the value held by that alias before jQuery loaded:

```javascript
jQuery.noConflict();
```

Then reference this instance through `jQuery` instead of `$` (e.g., `jQuery('div p').hide()`). You can also keep the returned instance in a local alias, including when managing multiple loaded versions:

```javascript
let $x = jQuery.noConflict();
```

Calling `noConflict()` returns a reference to this jQuery instance and restores the previous `$`. If the global `jQuery` variable must also be restored to a previously loaded version, use `noConflict(true)`; see [jQuery.noConflict()](https://api.jquery.com/jQuery.noConflict/).

### Checking If jQuery Loaded

Before you can do anything with jQuery you first need to make certain it has loaded:

```javascript
if (typeof jQuery == "undefined") {
  console.log("jQuery hasn't loaded");
} else {
  console.log("jQuery has loaded");
}
```

The messages distinguish whether the global variable is defined.

### Check Whether an Element Exists

Before using an HTML element, check that it is present in the DOM.

```javascript
if ($("#selector").length) {
  //do something with element
}
```

### Use `.on()` Binding Instead of `.click()`

The source illustrates multiple event names with this fragment:

```javascript
.on('click tap hover')
```

`.on()` supports delegated handlers with a matching `selector` to process descendants added later; directly bound handlers apply to the selected elements that already exist. See the [jQuery `.on()` documentation](https://api.jquery.com/on/).

The source’s `tap` event requires an event provider. Its `hover` pseudo-event was removed in jQuery 1.9; use `mouseenter mouseleave` for pointer entry and exit. The fragments above and below also need a receiver and handler to be complete calls. A namespace can be supplied as follows:

```javascript
.on('click.menuOpening')
```

A namespace lets you remove the matching handler (e.g., `.off('click.menuOpening')`) without removing other click handlers.

### Back to Top Button

By using the `animate` and `scrollTop` methods in jQuery you don't need a plugin to create a simple scroll-to-top animation:

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

Changing the `scrollTop` value changes the scroll destination. This example scrolls to the top over 800 milliseconds.

> **NOTE:**
> The source links to a report of [scrollTop behavior](https://github.com/jquery/api.jquery.com/issues/417) that depends on the scroll container.

### Preload Images

Start loading image resources before they are displayed, for example images used on hover:

```javascript
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $("<img>").attr("src", arguments[i]);
  }
};

$.preloadImages("img/hover-on.png", "img/hover-off.png");
```

### Checking If Images Are Loaded

Register a handler for each selected image’s load event:

```javascript
$("img").on("load", function () {
  console.log("image load successful");
});
```

To target one image, replace the img selector with its ID or class selector. This listens for future load events rather than checking whether loading already completed; see the [jQuery load event documentation](https://api.jquery.com/load-event/).

### Fix Broken Images Automatically

Handle an image-loading error by assigning a fallback image. The class prevents repeated fallback assignments:

```javascript
$("img").on("error", function () {
  if (!$(this).hasClass("broken-image")) {
    $(this).prop("src", "img/broken.png").addClass("broken-image");
  }
});
```

To hide an image after it fails to load, use:

```javascript
$("img").on("error", function () {
  $(this).hide();
});
```

### Post a Form with AJAX

jQuery AJAX methods are a common way to request text, HTML, XML, or JSON. If you wanted to send a form via AJAX you could collect the user inputs via the `val()` method:

```javascript
$.post("sign_up.php", {
  user_name: $("input[name=user_name]").val(),
  email: $("input[name=email]").val(),
  password: $("input[name=password]").val(),
});
```

Instead of reading each field individually, use `serialize()` to collect successful form controls as a URL-encoded string. Not every control is included; see the [serialization conditions](https://api.jquery.com/serialize/). The source also notes that `.val()` strips carriage return characters from browser-reported `<textarea>` values, as described in the [value API documentation](https://api.jquery.com/val/):

```javascript
$.post("sign_up", $("#sign-up-form").serialize());
```

### Toggle Classes on Hover

Add a class when the pointer enters an element and remove it when the pointer leaves. The source’s `.on("hover", handlerIn, handlerOut)` example confuses an event name with the two-handler `.hover()` method. The [jQuery `.hover()` documentation](https://api.jquery.com/hover/) gives separate `.on()` handlers for `mouseenter` and `mouseleave`:

```javascript
$(".btn")
  .on("mouseenter", function () {
    $(this).addClass("hover");
  })
  .on("mouseleave", function () {
    $(this).removeClass("hover");
  });
```

Add the necessary CSS. Alternatively, toggle the class on pointer entry and exit:

```javascript
$(".btn").on("mouseenter mouseleave", function () {
  $(this).toggleClass("hover");
});
```

> **NOTE:**
> The source also points to CSS as an alternative for hover styling.

### Disabling Input Fields

At times you may want the submit button of a form or one of its text inputs to be disabled until the user has performed a certain action (e.g., checking the "I've read the terms" checkbox). Add the `disabled` attribute to your input so you can enable it when you want:

```javascript
$('input[type="submit"]').prop("disabled", true);
```

All you need to do is run the `prop` method again on the input, but set the value of `disabled` to `false`:

```javascript
$('input[type="submit"]').prop("disabled", false);
```

### Stop the Loading of Links

Sometimes you don't want links to go to a certain web page nor reload the page; you might want them to do something else like trigger another script. This will do the trick of preventing the default action:

```javascript
$("a.no-link").on("click", function (e) {
  e.preventDefault();
});
```

### Cache jQuery Selectors

Each repeated `$('.element')` call runs a new selection rather than reusing a previous result. Select the elements once and store that result in a variable:

```javascript
var blocks = $("#blocks").find("li");
```

Now you can use the `blocks` variable wherever you want without having to search the DOM every time:

```javascript
$("#hideBlocks").on("click", function () {
  blocks.fadeOut();
});

$("#showBlocks").on("click", function () {
  blocks.fadeIn();
});
```

Reusing the selection avoids repeated lookups. It does not automatically include elements added after the selection was made.

### Toggle Fade/Slide

The `fadeIn` and `slideDown` methods show an element. To alternate between showing and hiding it on clicks, use these toggle methods. The first effect depends on the element’s initial visibility:

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

### Simple Accordion

Toggle the panel immediately following a clicked accordion header and close the other content panels:

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

The HTML must place each panel immediately after its header. The closing rule selects content panels throughout the document, so its scope must match the intended accordion.

### Make Two Divs the Same Height

Set one div’s minimum height from another div’s current content height:

```javascript
$(".div").css("min-height", $(".main-div").height());
```

This sets `min-height`, so the target can still be taller. It does not guarantee equal rendered heights. To set `height` from the tallest element in a group instead, measure the group and apply that value:

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

For columns grouped into rows, this example uses each row’s current height for its columns. Heights may differ between rows:

```javascript
var $rows = $(".same-height-columns");
$rows.each(function () {
  $(this).find(".column").height($(this).height());
});
```

> **NOTE:**
> This can be done several ways [in CSS](http://codepen.io/AllThingsSmitty/pen/KMPqoO) but depending on what your needs are, knowing how to do this in jQuery is handy.

### Open External Links in New Tab/Window

The source sets a new browsing target for href values beginning with http or //, then resets the target for values beginning with the current origin string. This is a string-prefix test, not a strict origin comparison: protocol-relative same-origin URLs remain in the first group, and another host can share the origin string prefix:

```javascript
$('a[href^="http"]').attr("target", "_blank");
$('a[href^="//"]').attr("target", "_blank");
$('a[href^="' + window.location.origin + '"]').attr("target", "_self");
```

### Find Element By Text

Use the `:contains()` selector to match text in an element’s content, including descendants. Matching is case-sensitive; see the [selector documentation](https://api.jquery.com/contains-selector/). This example hides `div` elements that do not contain the search text. It assumes input that can be inserted into the quoted selector without escaping; it does not handle arbitrary quotes or backslashes:

```javascript
var search = $("#search").val();
$('div:not(:contains("' + search + '"))').hide();
```

### Trigger on Visibility Change

Run a handler when the document changes between visible and hidden states, such as when switching tabs:

```javascript
$(document).on("visibilitychange", function (e) {
  if (e.target.visibilityState === "visible") {
    console.log("Tab is now in view!");
  } else if (e.target.visibilityState === "hidden") {
    console.log("Tab is now hidden!");
  }
});
```

### AJAX Call Error Handling

Register a global handler for failed AJAX requests, such as responses with status 404 or 500. The event is not fired when global events are disabled for a request; see the [ajaxError documentation](https://api.jquery.com/ajaxError/):

```javascript
$(document).on("ajaxError", function (e, xhr, settings, error) {
  console.log(error);
});
```

### Chain Plugin Calls

Chain compatible method calls on one jQuery selection instead of repeatedly selecting the same element. The source first uses separate calls:

```javascript
$("#elem").show();
$("#elem").html("bla");
$("#elem").otherStuff();
```

Combine those calls when each method returns a jQuery object that supports the next method:

```javascript
$("#elem").show().html("bla").otherStuff();
```

Another way to reuse the selection is to store it in a variable prefixed with `$`. This source example hides the element, whereas the preceding examples show it:

```javascript
var $elem = $("#elem");
$elem.hide();
$elem.html("bla");
$elem.otherStuff();
```

Both chaining and [caching](#cache-jquery-selectors) can reuse the selection; choose according to the methods’ return values and the required behavior.

### Sort List Items Alphabetically

Sort list items using their text converted to uppercase, then append them in that order. The source comparator returned 1 even for equal text; this corrected version returns 0 for equality, following the [Array sorting contract](https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.sort):

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

This is a string comparison after case conversion, rather than locale-aware collation.

### Disable Right-Click

If you want to disable right-click, you can do it for an entire page...

```javascript
$(document).ready(function () {
  $(document).bind("contextmenu", function (e) {
    return false;
  });
});
```

...and you can also do the same for a specific element:

```javascript
$(document).ready(function () {
  $("#submit").bind("contextmenu", function (e) {
    return false;
  });
});
```

## Support

The fixed source lists Chrome, Firefox, Safari, Opera, Edge, and IE11. This is the source’s browser support statement, not a guarantee for current jQuery releases.

## Translations

- [български](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/bg-BG)
- [Español](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/es-ES)
- [Français](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/fr-FR)
- [Magyar](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/hu-HU)
- [한국어](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/ko-KR)
- [Português do Europe](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/pt-PT)
- [Pусский](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/ru-RU)
- [简体中文](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/zh-CN)
- [繁體中文](https://github.com/AllThingsSmitty/jquery-tips-everyone-should-know/tree/master/translations/zh-TW)
