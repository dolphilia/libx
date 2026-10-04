---
title: "色"
order: 14
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">公式マニュアル</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">固定原典</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">ライセンス</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/01-original-notices/\">原著作権・第三者通知</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/\">ライセンス全文</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/13/title">

<h2 id="colors">色</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/13/body">

<p>別の色を設定するには、環境変数 <code>JQ_COLORS</code> を、<code>"1;31"</code> のような端末のエスケープシーケンスの一部をコロンで区切ったリストに設定します。順序は次のとおりです。</p>
<ul>
<li><code>null</code> の色</li>
<li><code>false</code> の色</li>
<li><code>true</code> の色</li>
<li>数値の色</li>
<li>文字列の色</li>
<li>配列の色</li>
<li>オブジェクトの色</li>
<li>オブジェクトのキーの色</li>
</ul>
<p>既定の配色は、<code>JQ_COLORS="0;90:0;39:0;39:0;39:0;32:1;39:1;39:1;34"</code> と設定した場合と同じです。</p>
<p>ここでは、VT100/ANSIエスケープのマニュアルは提供しません。ただし、各色の指定は、セミコロンで区切った2つの数値で構成するべきです。最初の数値は、次のいずれかです。</p>
<ul>
<li>1（明るい）</li>
<li>2（暗い）</li>
<li>4（下線）</li>
<li>5（点滅）</li>
<li>7（反転）</li>
<li>8（非表示）</li>
</ul>
<p>2番目の数値は、次のいずれかです。</p>
<ul>
<li>30（黒）</li>
<li>31（赤）</li>
<li>32（緑）</li>
<li>33（黄）</li>
<li>34（青）</li>
<li>35（マゼンタ）</li>
<li>36（シアン）</li>
<li>37（白）</li>
</ul>

</div>

