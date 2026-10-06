# LZ4 1.10.0 固定出典と取り込み判断

作成日: 2026-10-05T03:39:18.114273+00:00。正式作業は準備段階。日本語翻訳・全文内容レビュー・正式検証は未完了。

- 公式プロジェクト: https://github.com/lz4/lz4 / https://lz4.org/
- 固定タグ: v1.10.0、commit `ebb370ca83af193212df4dcbadcc5d87bc0de2f0`。
- 固定archive: `docs/notes/project-expansion/runs/evidence/2026-10-05-780/LZ4_FIXED.tar.gz`、SHA-256 `eb1a93e934d4fd29df6e2061ba0bf447568561764d758f4a5662c0e29370ffa9`。
- release/tag取得証拠: expansion evidence780のLZ4_RELEASE.json / LZ4_TAG.json。公開日時はその固定JSONを正本としここで推定しない。
- 全208入力: evidence784 BOUNDARY.json、27採用/87参照/94除外。`CONTENT_MAP.json`で7カテゴリ・27原文/日本語pageの対応を固定。
- 生成manual2は固定公式gen_manual.cpp/header2と版1.10.0からbyte一致を再現（evidence785 GENERATOR_REPRODUCTION.json）。
- 原header9識別子の生成省略を避けるため全header5を保存し、コードから新しい説明を書かない。

## 権利と履行

evidence784 RIGHTS_AND_FULFILLMENT.jsonの27ファイル別判断と固定LICENSE/COPYING全文を継承する。libのBSD、lib/dll/example/MakefileのGPL例外、djgppのlpsantil BSD、Frame仕様の固有文書許諾、その他のGPL-2.0-or-laterを区別する。文書専用指定が未発見の範囲は、承認済みのソフトウェアライセンス文書適用を注釈付きの運用判断として明示する。権利者の新許諾を取得したと記録しない。

各ページ出典欄に原版/著者/原文/ライセンス全文/注釈/非公式翻訳と変更日を表示する。原著本文の著作権・許諾・免責通知は本文でも保持する。GPL部分の完全な対応source kit（全208原入力、定本・訳文、map/importer/生成手順と通知）を同じサイトから静的downloadできるようにし、内容/到達性を正式検証する。source kitや通知配置は現在未実施で、候補qualificationの権利判断を履行完了へ繰り上げない。

## 採用と保守

evidence786 SCORECARD.jsonで71点、INDEPENDENT_SELECTION_REVIEW.jsonで別passを実施。同じCodexによる別確認であり人間/別agentレビューではない。固定Frame旧訳・AMD部分日本語資料を認め、原著との版/範囲差と調査先を記録。未発見を不存在と断定しない。

識別子を含む語数28897、空白token31077。3万語超の可能性を保守的に扱いLARGE_SCOPE_DECISION.jsonへ実測・限定再利用converter・初回/毎版工数を残した別枠判断。量のために必要な章を切り捨てない。正式新規active上限1/全体2/未公開verified上限2は維持する。

作業場は `/private/tmp/libx-lz4-formal-786`。rootのapps/lz4はまだ存在せず、配信対象から物理的に分離している。正規template生成→固定取得確認→safe canonical出力→ページ逐次翻訳→別AI全文review→機械検査/正式表示へ進む。外部公開・定期設定は別途指示まで行わない。
