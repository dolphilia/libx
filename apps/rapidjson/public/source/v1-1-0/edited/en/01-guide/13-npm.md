---
title: "NPM guide (fixed source supplement)"
documentId: "rapidjson:doc/npm.md"
order: 13
licenseSource: "rapidjson-fixed"
documentContext: [{"kind": "source", "html": "<p>RapidJSON 1.1.0; fixed commit f54b0e47a08782a6131cc3d60f94d038fa6e0a51. Copyright (C) 2015 THL A29 Limited and Milo Yip. <a href=\"/docs/rapidjson/notices/LICENSE.txt\">Full original licence and component notices</a>. Unofficial Libx static edition. The Japanese edition covers the 13 user guides; the remaining 205 API, index and source pages are English original references.</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用するLibxの運用方針に基づき掲載しています。</p><p>定本はRapidJSON v1.1.0の固定コミットf54b0e47a08782a6131cc3d60f94d038fa6e0a51です。<a href=\"/docs/rapidjson/upstream/rapidjson-f54b0e47a08782a6131cc3d60f94d038fa6e0a51.tar.gz\">取得時の原文・ソース一式（tar.gz）</a>を提供します。SHA-256: <code>4a76453d36770c9628d7d175a2e9baccbfbd2169ced44f0cb72e86c5f5f2f7cd</code>。アーカイブ内のlicense.txtと各ファイルの通知を保持しています。</p>"}, {"kind": "editorial", "html": "<p>Libxの運用方針に基づき、固定ソースの補助資料 <a href=\"https://github.com/Tencent/rapidjson/blob/f54b0e47a08782a6131cc3d60f94d038fa6e0a51/doc/npm.md\">doc/npm.md</a> を静的に掲載しています。このファイルは元のDoxygen生成本文には含まれていないため補足しました。package.json と binding.gyp のコード・順序・明示アンカーを保持し、見出し階層だけをページ内表示へ合わせました。固定版に含まれる当時の記述であり、コード例は実行していません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/rapidjson/source/v1-1-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：原文アーカイブ、英日原稿、固定入力、通知と再構築手順を含みます。原文・第三者素材の条件は各通知を参照してください。</p>"}]
---
<div class="contents rapidjson-document">
<h1 id="npm">NPM</h1>
<h2 id="package">package.json</h2>
<div class="fragment"><pre><code class="language-js">{&#10;  ...&#10;  "dependencies": {&#10;    ...&#10;    "rapidjson": "git@github.com:miloyip/rapidjson.git"&#10;  },&#10;  ...&#10;  "gypfile": true&#10;}&#10;</code></pre></div>
<h2 id="binding">binding.gyp</h2>
<div class="fragment"><pre><code class="language-js">{&#10;  ...&#10;  'targets': [&#10;    {&#10;      ...&#10;      'include_dirs': [&#10;        '&lt;!(node -e \'require("rapidjson")\')'&#10;      ]&#10;    }&#10;  ]&#10;}&#10;</code></pre></div>
</div>
