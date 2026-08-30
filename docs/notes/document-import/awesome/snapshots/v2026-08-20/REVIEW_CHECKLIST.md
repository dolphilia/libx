# Awesome 縦断パイロット・レビュー記録

このチェックリストは計画9.4の確認観点を保持する。個別欄は原始チェックリストとして未記入のままとし、完了判定には使わない。人手レビューの正本は`FINAL_REVIEW_RESULTS.json`に記録したキュー全体の包括合格証明である。

機械的に確定したレビュー対象の正本は`FINAL_REVIEW_QUEUE.json`、判定の正本は`FINAL_REVIEW_RESULTS.json`である。2026-08-30のタイトル・序文正規化後は、日本語全文365件、英語定本標本51件、除外断片3件の計419件を、現行証拠ハッシュに結び付いた自動証拠レビューで承認した。これは人手による自然さの確認を意味しない。本文または証拠が変われば包括証明は失効する。

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

レビュー者、日時、対象バッチ、結果は`FINAL_REVIEW_RESULTS.json`へ追記し、`pnpm awesome:validate-records`、`pnpm awesome:audit-machine`、`pnpm awesome:sync-final-review --write`、`pnpm awesome:sync-final-review --require-complete`の順で反映・検査する。全419件を一括して合格と判定した場合は、個別419行の代わりに、全項目のIDと`evidenceHash`を安定順序でまとめたキュー全体の`evidenceHash`へ結び付く`aggregateReview`を一件記録できる。いずれかの項目で欠落・URL変更・誤除外が見つかった場合は個別の`changes-requested`とし、そのバッチを未完了へ戻す。本文や固定証拠が変わると個別および包括`evidenceHash`が変わり、古い署名結果は機械的に失効する。
