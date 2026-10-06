---
title: "jq 1.8 マニュアル"
order: 0
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">公式マニュアル</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">固定原典</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">ライセンス</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/01-original-notices/\">原著作権・第三者通知</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/\">ライセンス全文</a></p>"}]
---

# jq 1.8 マニュアル

<div class="jq-upstream-field" data-source-key="body">

<p>jqのプログラムは「フィルター」です。入力を受け取り、出力を生成します。オブジェクトから特定のフィールドを取り出す、数値を文字列に変換するなど、さまざまな一般的な処理に使える組込みフィルターが数多くあります。</p>
<p>フィルターはさまざまな方法で組み合わせられます。あるフィルターの出力を別のフィルターへパイプで渡したり、フィルターの出力を配列にまとめたりできます。</p>
<p>複数の結果を生成するフィルターもあります。たとえば、入力配列のすべての要素を生成するフィルターがあります。このフィルターの出力を2つ目のフィルターへパイプで渡すと、配列の各要素に対して2つ目のフィルターが実行されます。一般に、他の言語ならループや反復処理で行うことを、jqではフィルターをつなぎ合わせるだけで行えます。</p>
<p>どのフィルターにも入力と出力があることを覚えておくのが大切です。"hello"や42のようなリテラルもフィルターです。入力は受け取りますが、出力として常に同じリテラルを生成します。加算のように2つのフィルターを組み合わせる演算では、通常、両方に同じ入力を渡し、その結果を組み合わせます。したがって、平均を求めるフィルターは <code>add / length</code> と書けます。入力配列を <code>add</code> フィルターと <code>length</code> フィルターの両方へ渡してから、割り算を行うわけです。</p>
<p>とはいえ、少し先走ってしまいました。:) もっと簡単なところから始めましょう。</p>

</div>

