# GNU Make 4.4.1候補調査（第103サイクル）

2026-10-02確認。判定はdeferred。正式版マニュアル全文が対象で、通常枠の規模を超えるため、必要な章を削って採用しない。試験変換・採点・翻訳・内容レビューは未実施。

公式FTPの配布物 `make-4.4.1.tar.gz` と一覧を取得し、URL、時刻、SHA-256を `source/gnu-make/fetch-records.json` に保存した。アーカイブ全395ファイルを `gnu-make-input-inventory.json` で分類した。本文は `doc/make.texi`、includeは `version.texi`、`make-stds.texi`、`fdl.texi` の3点で、`doc/Makefile.am` の生成設定とも対応する。Info出力は照合用、CLIのmanは別の公式資料であり、このマニュアル範囲には含めない。版表示は `version.texi` の4.4.1、更新日は2023-02-26。本体のEdition 0.77と製品版4.4.1を混同しない。

本体の27～45行はFSFの著作権とGFDL 1.3以降を指定し、Invariant Sectionsはない。Front-Cover TextとBack-Cover Textの指定はある。`make-stds.texi` は別の著作権年と、Cover TextsなしのGFDL条件を持つ。末尾のComplex Makefile例にはGPLの通知もある。リポジトリのCOPYING（GPL3）のみを全文の権利根拠にはしない。翻訳・変更版・通知・透明な入力の配布方法と、例の別条件をこのサイトで履行する設計は未確定なので、rightsはunknownのまま。既存日本語訳を再利用する判断もしていない。

配布Infoをnode単位で測り、Top、GFDL、生成索引を除外した概算でも、空白token 76,344、ASCII語75,632、169 nodesとなった。メニュー・参照文字列を含む概算であり、精密な本文語数ではないが、3万語以内と判断する根拠にはならない。原稿13,744行とincludeの規模も `gnu-make-workload.json` と入力一覧に保存した。再利用可能なTexinfo変換器、初回・更新工数の別枠判断がないのでworkloadはunknown。自立性の全範囲照合も未了。

日本語調査では、訳者サイトの資料一覧にGNU Make 4.4全訳へのリンクがあり、検索で16章＋4付録の案内と第4・10・13章のページが見つかった。取得した `gnu-ja-index.html` も4.4ラベルを示す。実際の目次 `index.jp.html` は403となり、対象4.4.1との本文差分・全章対応は照合できていない。「4.4表記だから4.4.1の必要部分が未訳」と推測しない。japaneseResearchは調査不足のunresearchedとして保持し、既存訳の品質も評価しない。検索語・失敗した取得先を証拠に残す。

再開条件は、GFDLおよび例の条件の履行設計、全文の別枠工数と変換方式、日本語4.4資料と4.4.1の実差分が揃うこと。次回確認は2026-11-01、またはこれらに関する新しい根拠を得た時。通常枠への即着手はしない。
