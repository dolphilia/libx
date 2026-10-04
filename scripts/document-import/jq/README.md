# jq 固定英語定本の再生成

対象は jq-1.8.2（commit `34f7186b86743a083a589741b6cea95293524108`）の jq 1.8 Manual 全量。文書の条件は CC BY 3.0。ソフトウェアの MIT へ置換しない。

```bash
python3 scripts/document-import/jq/import.py \
  --packet docs/notes/document-import/jq/1.8.2 \
  --output /private/tmp/jq-canonical-new
```

Python標準ライブラリだけで実行する。出力先は存在しないディレクトリを指定する。入力ハッシュが変わった場合と既存出力への上書きを拒否する。ネットワーク・LLMを使わず、保存した原文YAML・同一原文の解析JSON・検証済み上流HTML描画・境界・通知から16本文と2原通知を生成する。

`CONTENT_MAP.json` は全1135原文文字列の出力先とハッシュを示す。API本文の301描画fieldと、250実行例のプログラム・入力・各出力を保持する。原文のHTML描画は593の固定Python Markdown参照を保存したもので、取り込み時には上流生成処理を再実行しない。原文とのfieldハッシュと保存物の全ハッシュを照合する。

出力は英語定本だけであり、日本語訳の自動生成・公開を行わない。日本語訳稿は `translations/` へページごとに保存し、原文対照後に次へ進む。現在は導入のみ翻訳済み。全量翻訳・別工程の全文レビュー・正式アプリの読み取り専用check:content・機械/表示/統合検証は未完。

再生成の一致と改変拒否の証拠は `docs/notes/project-expansion/runs/evidence/2026-10-04-602/EXPORT_VERIFICATION.json`。共有rootのアプリやlandingへ未検証成果物を統合しない。
