---
title: "標準カーソル形状"
description: "GLFW 3.5.1 標準カーソル形状"
licenseSource: "glfw-3.5.1"
---

> このリファレンスページは、[GLFW 3.5.1 公式ドキュメント](https://www.glfw.org/docs/3.5.1/)を Markdown 向けに改変したものです。書式、ナビゲーション、リンクは libx 用に変更していますが、技術的内容は GLFW 3.5.1 ソース配布物に基づいています。

<span id="details"></span>

## 説明

これらは、プラットフォーム（ウィンドウシステム）に要求できる<a href="/docs/glfw/v3-5-1/ja/03-guides/05-input-guide/#cursor_standard" class="el">標準カーソル形状</a>です。

<table class="memberdecls">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr class="heading">
<td colspan="2"><h2 id="macros" class="groupheader"><span id="define-members"></span> マクロ</h2></td>
</tr>
<tr id="r_ga8ab0e717245b85506cb0eaefdea39d0a" class="memitem:ga8ab0e717245b85506cb0eaefdea39d0a">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga8ab0e717245b85506cb0eaefdea39d0a" class="el">GLFW_ARROW_CURSOR</a>   0x00036001</td>
</tr>
<tr class="memdesc:ga8ab0e717245b85506cb0eaefdea39d0a">
<td class="mdescLeft"> </td>
<td class="mdescRight">通常の矢印カーソル形状。<br />
</td>
</tr>
<tr class="separator:ga8ab0e717245b85506cb0eaefdea39d0a">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga36185f4375eaada1b04e431244774c86" class="memitem:ga36185f4375eaada1b04e431244774c86">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga36185f4375eaada1b04e431244774c86" class="el">GLFW_IBEAM_CURSOR</a>   0x00036002</td>
</tr>
<tr class="memdesc:ga36185f4375eaada1b04e431244774c86">
<td class="mdescLeft"> </td>
<td class="mdescRight">テキスト入力用の I ビームカーソル形状。<br />
</td>
</tr>
<tr class="separator:ga36185f4375eaada1b04e431244774c86">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga8af88c0ea05ab9e8f9ac1530e8873c22" class="memitem:ga8af88c0ea05ab9e8f9ac1530e8873c22">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga8af88c0ea05ab9e8f9ac1530e8873c22" class="el">GLFW_CROSSHAIR_CURSOR</a>   0x00036003</td>
</tr>
<tr class="memdesc:ga8af88c0ea05ab9e8f9ac1530e8873c22">
<td class="mdescLeft"> </td>
<td class="mdescRight">十字線カーソル形状。<br />
</td>
</tr>
<tr class="separator:ga8af88c0ea05ab9e8f9ac1530e8873c22">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaad01a50929fb515bf27e4462c51f6ed0" class="memitem:gaad01a50929fb515bf27e4462c51f6ed0">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaad01a50929fb515bf27e4462c51f6ed0" class="el">GLFW_POINTING_HAND_CURSOR</a>   0x00036004</td>
</tr>
<tr class="memdesc:gaad01a50929fb515bf27e4462c51f6ed0">
<td class="mdescLeft"> </td>
<td class="mdescRight">指差し手形カーソル形状。<br />
</td>
</tr>
<tr class="separator:gaad01a50929fb515bf27e4462c51f6ed0">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga2010a43dc1050a7c9154148a63cf01ad" class="memitem:ga2010a43dc1050a7c9154148a63cf01ad">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga2010a43dc1050a7c9154148a63cf01ad" class="el">GLFW_RESIZE_EW_CURSOR</a>   0x00036005</td>
</tr>
<tr class="memdesc:ga2010a43dc1050a7c9154148a63cf01ad">
<td class="mdescLeft"> </td>
<td class="mdescRight">水平方向のサイズ変更／移動用矢印形状。<br />
</td>
</tr>
<tr class="separator:ga2010a43dc1050a7c9154148a63cf01ad">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaa59214e8cdc8c8adf08fdf125ed68388" class="memitem:gaa59214e8cdc8c8adf08fdf125ed68388">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaa59214e8cdc8c8adf08fdf125ed68388" class="el">GLFW_RESIZE_NS_CURSOR</a>   0x00036006</td>
</tr>
<tr class="memdesc:gaa59214e8cdc8c8adf08fdf125ed68388">
<td class="mdescLeft"> </td>
<td class="mdescRight">垂直方向のサイズ変更／移動用矢印形状。<br />
</td>
</tr>
<tr class="separator:gaa59214e8cdc8c8adf08fdf125ed68388">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gadf2c0a495ec9cef4e1a364cc99aa78da" class="memitem:gadf2c0a495ec9cef4e1a364cc99aa78da">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gadf2c0a495ec9cef4e1a364cc99aa78da" class="el">GLFW_RESIZE_NWSE_CURSOR</a>   0x00036007</td>
</tr>
<tr class="memdesc:gadf2c0a495ec9cef4e1a364cc99aa78da">
<td class="mdescLeft"> </td>
<td class="mdescRight">左上から右下への斜め方向のサイズ変更／移動用矢印形状。<br />
</td>
</tr>
<tr class="separator:gadf2c0a495ec9cef4e1a364cc99aa78da">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gab06bba3b407f92807ba9b48de667a323" class="memitem:gab06bba3b407f92807ba9b48de667a323">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gab06bba3b407f92807ba9b48de667a323" class="el">GLFW_RESIZE_NESW_CURSOR</a>   0x00036008</td>
</tr>
<tr class="memdesc:gab06bba3b407f92807ba9b48de667a323">
<td class="mdescLeft"> </td>
<td class="mdescRight">右上から左下への斜め方向のサイズ変更／移動用矢印形状。<br />
</td>
</tr>
<tr class="separator:gab06bba3b407f92807ba9b48de667a323">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga3a5f4811155f95ccafbbb4c9a899fc1d" class="memitem:ga3a5f4811155f95ccafbbb4c9a899fc1d">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga3a5f4811155f95ccafbbb4c9a899fc1d" class="el">GLFW_RESIZE_ALL_CURSOR</a>   0x00036009</td>
</tr>
<tr class="memdesc:ga3a5f4811155f95ccafbbb4c9a899fc1d">
<td class="mdescLeft"> </td>
<td class="mdescRight">全方向のサイズ変更／移動用カーソル形状。<br />
</td>
</tr>
<tr class="separator:ga3a5f4811155f95ccafbbb4c9a899fc1d">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga297c503095b034bc8891393b637844b1" class="memitem:ga297c503095b034bc8891393b637844b1">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga297c503095b034bc8891393b637844b1" class="el">GLFW_NOT_ALLOWED_CURSOR</a>   0x0003600A</td>
</tr>
<tr class="memdesc:ga297c503095b034bc8891393b637844b1">
<td class="mdescLeft"> </td>
<td class="mdescRight">操作禁止を示す形状。<br />
</td>
</tr>
<tr class="separator:ga297c503095b034bc8891393b637844b1">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gabb3eb0109f11bb808fc34659177ca962" class="memitem:gabb3eb0109f11bb808fc34659177ca962">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gabb3eb0109f11bb808fc34659177ca962" class="el">GLFW_HRESIZE_CURSOR</a>   <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga2010a43dc1050a7c9154148a63cf01ad" class="el">GLFW_RESIZE_EW_CURSOR</a></td>
</tr>
<tr class="memdesc:gabb3eb0109f11bb808fc34659177ca962">
<td class="mdescLeft"> </td>
<td class="mdescRight">Legacy name for compatibility.<br />
</td>
</tr>
<tr class="separator:gabb3eb0109f11bb808fc34659177ca962">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_gaf024f0e1ff8366fb2b5c260509a1fce5" class="memitem:gaf024f0e1ff8366fb2b5c260509a1fce5">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaf024f0e1ff8366fb2b5c260509a1fce5" class="el">GLFW_VRESIZE_CURSOR</a>   <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaa59214e8cdc8c8adf08fdf125ed68388" class="el">GLFW_RESIZE_NS_CURSOR</a></td>
</tr>
<tr class="memdesc:gaf024f0e1ff8366fb2b5c260509a1fce5">
<td class="mdescLeft"> </td>
<td class="mdescRight">Legacy name for compatibility.<br />
</td>
</tr>
<tr class="separator:gaf024f0e1ff8366fb2b5c260509a1fce5">
<td colspan="2" class="memSeparator"> </td>
</tr>
<tr id="r_ga1db35e20849e0837c82e3dc1fd797263" class="memitem:ga1db35e20849e0837c82e3dc1fd797263">
<td class="memItemLeft" style="text-align: right;" data-valign="top">#define </td>
<td class="memItemRight" data-valign="bottom"><a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga1db35e20849e0837c82e3dc1fd797263" class="el">GLFW_HAND_CURSOR</a>   <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaad01a50929fb515bf27e4462c51f6ed0" class="el">GLFW_POINTING_HAND_CURSOR</a></td>
</tr>
<tr class="memdesc:ga1db35e20849e0837c82e3dc1fd797263">
<td class="mdescLeft"> </td>
<td class="mdescRight">Legacy name for compatibility.<br />
</td>
</tr>
<tr class="separator:ga1db35e20849e0837c82e3dc1fd797263">
<td colspan="2" class="memSeparator"> </td>
</tr>
</tbody>
</table>

## マクロ定義の詳細

<span id="ga8ab0e717245b85506cb0eaefdea39d0a"></span>

## <span class="permalink">[◆ ](#ga8ab0e717245b85506cb0eaefdea39d0a)</span>GLFW_ARROW_CURSOR

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_ARROW_CURSOR   0x00036001 |

</div>

<div class="memdoc">

通常の矢印カーソル形状。

</div>

</div>

<span id="ga36185f4375eaada1b04e431244774c86"></span>

## <span class="permalink">[◆ ](#ga36185f4375eaada1b04e431244774c86)</span>GLFW_IBEAM_CURSOR

<div class="memitem">

<div class="memproto">

|                                         |
|-----------------------------------------|
| \#define GLFW_IBEAM_CURSOR   0x00036002 |

</div>

<div class="memdoc">

テキスト入力用の I ビームカーソル形状。

</div>

</div>

<span id="ga8af88c0ea05ab9e8f9ac1530e8873c22"></span>

## <span class="permalink">[◆ ](#ga8af88c0ea05ab9e8f9ac1530e8873c22)</span>GLFW_CROSSHAIR_CURSOR

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_CROSSHAIR_CURSOR   0x00036003 |

</div>

<div class="memdoc">

十字線カーソル形状。

</div>

</div>

<span id="gaad01a50929fb515bf27e4462c51f6ed0"></span>

## <span class="permalink">[◆ ](#gaad01a50929fb515bf27e4462c51f6ed0)</span>GLFW_POINTING_HAND_CURSOR

<div class="memitem">

<div class="memproto">

|                                                 |
|-------------------------------------------------|
| \#define GLFW_POINTING_HAND_CURSOR   0x00036004 |

</div>

<div class="memdoc">

指差し手形カーソル形状。

</div>

</div>

<span id="ga2010a43dc1050a7c9154148a63cf01ad"></span>

## <span class="permalink">[◆ ](#ga2010a43dc1050a7c9154148a63cf01ad)</span>GLFW_RESIZE_EW_CURSOR

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_RESIZE_EW_CURSOR   0x00036005 |

</div>

<div class="memdoc">

水平方向のサイズ変更／移動用矢印形状。通常は水平方向の両矢印です。

</div>

</div>

<span id="gaa59214e8cdc8c8adf08fdf125ed68388"></span>

## <span class="permalink">[◆ ](#gaa59214e8cdc8c8adf08fdf125ed68388)</span>GLFW_RESIZE_NS_CURSOR

<div class="memitem">

<div class="memproto">

|                                             |
|---------------------------------------------|
| \#define GLFW_RESIZE_NS_CURSOR   0x00036006 |

</div>

<div class="memdoc">

垂直方向のサイズ変更／移動用形状。通常は垂直方向の両矢印です。

</div>

</div>

<span id="gadf2c0a495ec9cef4e1a364cc99aa78da"></span>

## <span class="permalink">[◆ ](#gadf2c0a495ec9cef4e1a364cc99aa78da)</span>GLFW_RESIZE_NWSE_CURSOR

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_RESIZE_NWSE_CURSOR   0x00036007 |

</div>

<div class="memdoc">

左上から右下への斜め方向のサイズ変更／移動用形状。通常は斜め方向の両矢印です。

注記  
**macOS:** この形状は非公開のシステム API によって提供されるため、将来 <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a> で失敗する可能性があります。

**Wayland:** この形状は、すべてのカーソルテーマがサポートしているわけではない新しい標準によって提供されます。

**X11:** この形状は、すべてのカーソルテーマがサポートしているわけではない新しい標準によって提供されます。

</div>

</div>

<span id="gab06bba3b407f92807ba9b48de667a323"></span>

## <span class="permalink">[◆ ](#gab06bba3b407f92807ba9b48de667a323)</span>GLFW_RESIZE_NESW_CURSOR

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_RESIZE_NESW_CURSOR   0x00036008 |

</div>

<div class="memdoc">

右上から左下への斜め方向のサイズ変更／移動用形状。通常は斜め方向の両矢印です。

注記  
**macOS:** この形状は非公開のシステム API によって提供されるため、将来 <a href="/docs/glfw/v3-5-1/ja/04-reference/02-error-codes/#ga09d6943923a70ddef3a085f5baee786c" class="el">GLFW_CURSOR_UNAVAILABLE</a> で失敗する可能性があります。

**Wayland:** この形状は、すべてのカーソルテーマがサポートしているわけではない新しい標準によって提供されます。

**X11:** この形状は、すべてのカーソルテーマがサポートしているわけではない新しい標準によって提供されます。

</div>

</div>

<span id="ga3a5f4811155f95ccafbbb4c9a899fc1d"></span>

## <span class="permalink">[◆ ](#ga3a5f4811155f95ccafbbb4c9a899fc1d)</span>GLFW_RESIZE_ALL_CURSOR

<div class="memitem">

<div class="memproto">

|                                              |
|----------------------------------------------|
| \#define GLFW_RESIZE_ALL_CURSOR   0x00036009 |

</div>

<div class="memdoc">

全方向のサイズ変更／移動用カーソル形状。通常は水平・垂直の両矢印を組み合わせた形、またはつかむ手の形です。

</div>

</div>

<span id="ga297c503095b034bc8891393b637844b1"></span>

## <span class="permalink">[◆ ](#ga297c503095b034bc8891393b637844b1)</span>GLFW_NOT_ALLOWED_CURSOR

<div class="memitem">

<div class="memproto">

|                                               |
|-----------------------------------------------|
| \#define GLFW_NOT_ALLOWED_CURSOR   0x0003600A |

</div>

<div class="memdoc">

操作禁止を示す形状。通常は斜線の入った円です。

注記  
**Wayland:** この形状は、すべてのカーソルテーマがサポートしているわけではない新しい標準によって提供されます。

**X11:** この形状は、すべてのカーソルテーマがサポートしているわけではない新しい標準によって提供されます。

</div>

</div>

<span id="gabb3eb0109f11bb808fc34659177ca962"></span>

## <span class="permalink">[◆ ](#gabb3eb0109f11bb808fc34659177ca962)</span>GLFW_HRESIZE_CURSOR

<div class="memitem">

<div class="memproto">

|  |
|----|
| \#define GLFW_HRESIZE_CURSOR   <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#ga2010a43dc1050a7c9154148a63cf01ad" class="el">GLFW_RESIZE_EW_CURSOR</a> |

</div>

<div class="memdoc">

これは以前のバージョンとの互換性のための別名です。

</div>

</div>

<span id="gaf024f0e1ff8366fb2b5c260509a1fce5"></span>

## <span class="permalink">[◆ ](#gaf024f0e1ff8366fb2b5c260509a1fce5)</span>GLFW_VRESIZE_CURSOR

<div class="memitem">

<div class="memproto">

|  |
|----|
| \#define GLFW_VRESIZE_CURSOR   <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaa59214e8cdc8c8adf08fdf125ed68388" class="el">GLFW_RESIZE_NS_CURSOR</a> |

</div>

<div class="memdoc">

これは以前のバージョンとの互換性のための別名です。

</div>

</div>

<span id="ga1db35e20849e0837c82e3dc1fd797263"></span>

## <span class="permalink">[◆ ](#ga1db35e20849e0837c82e3dc1fd797263)</span>GLFW_HAND_CURSOR

<div class="memitem">

<div class="memproto">

|  |
|----|
| \#define GLFW_HAND_CURSOR   <a href="/docs/glfw/v3-5-1/ja/04-reference/16-standard-cursor-shapes/#gaad01a50929fb515bf27e4462c51f6ed0" class="el">GLFW_POINTING_HAND_CURSOR</a> |

</div>

<div class="memdoc">

これは以前のバージョンとの互換性のための別名です。

</div>

</div>
