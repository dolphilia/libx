---
title: "スタックメモリの使用"
documentId: "yyjson:01-guide/11-stack-memory.md"
order: 11
licenseSource: "yyjson-fixed"
toc: {"maxLevel": 6}
documentContext: [{"kind": "source", "html": "<p>yyjson 0.13.0, fixed commit 6447536015f3d600f3d65323b10976103b337ca7. By YaoYuan and yyjson contributors. <a href=\"https://github.com/ibireme/yyjson/blob/6447536015f3d600f3d65323b10976103b337ca7/doc/API.md#L1799-L1808\">Fixed official original</a>. <a href=\"/docs/yyjson/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Libxによる非公式編集・日本語訳です。固定Markdown7資料とSVG7図を保持し、利用ガイド16ページが日本語訳の対象です。更新履歴・原著Performance TODO・原MIT通知は英語原文参照です。Libxの運用方針に基づき、意味のまとまった節分割・見出し・内部参照・静的な図の配置を調整しています。</p>"}, {"kind": "editorial", "html": "<p>原著のPerformance.mdはTODOのみで未執筆です。READMEの性能図表と2020年のレポートは固定原文のまま提供し、原著の制限・注意書きも保持しています。生成Doxygenの全シンボル一覧、第三者テーマ、対話型ベンチマークや構造図の編集ファイルは収録せず、<a href=\"https://ibireme.github.io/yyjson/doc/doxygen/html/\">公式文書</a>と原稿中の参照リンクで補います。原文の技術監査やサンプルプログラムの実行は行っていません。</p>"}]
---
<a id="stack-memory-usage"></a>
# スタックメモリの使用

ライブラリのほとんどの関数は、固定サイズのスタックメモリを使います。JSONの読み込み・書き出しや、JSON Pointerの処理を行う関数も含まれます。

ただし、一部の関数は再帰を使うため、ネストが深すぎるとスタックオーバーフローが起きる場合があります。これらの関数には、ヘッダーファイルで次の警告が記されています。

> @warning
> この関数は再帰的であり、オブジェクトの階層が深すぎるとスタックオーバーフローが起きる場合があります。
