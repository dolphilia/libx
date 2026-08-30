# Awesome 縦断パイロット・レビュー記録

このチェックリストは、当初予定していた人手確認の観点を履歴として保持する。個別欄は原始チェックリストとして未記入のままとし、緩和後の完了判定には使わない。最終レビューの正本は`FINAL_REVIEW_QUEUE.json`、`FINAL_REVIEW_RESULTS.json`、`../../review/REVIEW_GATE_DECISION.json`、`../../review/AUTOMATED_FINAL_REVIEW_EVIDENCE.json`である。

2026-08-30に、英日672/672の現本文から日本語全文672件、英語定本標本84件、除外断片3件の計759件を再生成した。旧365ページ集合に対する416件の包括証明は`SUPERSEDED_FINAL_REVIEW_RESULTS.json`へ失効済み中間証拠として退避した。その後、管理者が人手署名の必須条件を緩和したため、全759件を品質ゲートとキュー全体の証拠ハッシュに結び付く自動証拠レビューで承認した。本文または証拠が変わった場合は、この包括承認も機械的に失効する。

## パイロット取得元

| 取得元 | 固定状態 | 人手ライセンス確認 | 原文・定本全文照合 | 出典表示確認 | 判定 |
| --- | --- | --- | --- | --- | --- |
| `sindresorhus/awesome` | CC0-1.0 / included | [ ] | [ ] | [ ] | 未完了 |
| `0pandadev/awesome-windows` | CC0-1.0 / metadata-only | [ ] | 本文を生成しないことを確認 [ ] | [ ] | 未完了 |
| `avelino/awesome-go` | MIT / included | [ ] | [ ] | [ ] | 未完了 |
| `rust-unofficial/awesome-rust` | ライセンス未検出 / metadata-only | [ ] | 本文を生成しないことを確認 [ ] | [ ] | 未完了 |
| `serhii-londar/open-source-mac-os-apps` | CC0-1.0 / included | [ ] | [ ] | [ ] | 未完了 |
| `PatrickJS/awesome-angular` | CC0-1.0 / included | [ ] | [ ] | [ ] | 未完了 |
| `YuzheSHI/awesome-agi-cocosci` | CC0-1.0 / included | [ ] | [ ] | [ ] | 未完了 |
| `awesome-selfhosted/awesome-selfhosted` | ライセンス未検出 / metadata-only | [ ] | 本文を生成しないことを確認 [ ] | [ ] | 未完了 |

## 必須の確認事項

- [ ] `EXCLUSIONS.json`の全断片について、除外理由と本文非混入を人手で確認する。
- [ ] 検出した新規Markdown構造・画像・表の各初出ページを原文と全文照合し、正規化後の相対リンクが0件であることを確認する。
- [ ] 各採用ライセンスがREADME本文へ適用され、翻訳・改変・再配布を許す根拠を記録する。
- [ ] `metadata-only`本文がいずれの分割サイトにも生成されないことを確認する。
- [ ] 出典パネルで著作者、固定コミット、ライセンス、原文URLを確認する。

レビュー者、日時、対象バッチ、結果は`FINAL_REVIEW_RESULTS.json`へ追記し、各コマンドへ`--snapshot=v2026-08-23`を明示して`awesome:validate-records`、`awesome:audit-machine`、`awesome:sync-final-review --write`、`awesome:sync-final-review --require-complete`の順で反映・検査する。全759件を一括して合格と判定した場合は、個別759行の代わりに、全項目のIDと`evidenceHash`を安定順序でまとめたキュー全体の`evidenceHash`へ結び付く`aggregateReview`を一件記録できる。いずれかの項目で欠落・URL変更・誤除外が見つかった場合は個別の`changes-requested`とし、そのバッチを未完了へ戻す。本文や固定証拠が変わると個別および包括`evidenceHash`が変わり、古い署名結果は機械的に失効する。
