# libx 性能基準値（2026-08-11）

正式原則準拠改善後の比較基準を記録する。予算の正本は `config/performance-budgets.json`、再測定手順は `docs/guides/PERFORMANCE_MEASUREMENT_GUIDE.md` とする。

## 測定条件

- 測定日: 2026-08-11（Asia/Tokyo）
- 読者性能: Lighthouse 12.8.2、simulated mobile、cold navigation
- 管理者性能: macOSローカル環境、各ケース3回
- 集計: 3回の中央値
- 比較対象: 最小静的HTML、Astro Starlight 0.34.8
- libx対象: 通常LTR、重量LTR、通常RTL

ローカル環境の絶対値は本番環境の値を代替するものではない。本番計測が利用できる場合は本番値を優先し、この記録は同一環境内の相対比較と回帰検出に使う。

## 読者性能

| 対象 | LCP | CLS | 転送量 | Accessibility |
| --- | ---: | ---: | ---: | ---: |
| 最小静的HTML | 614ms | 0 | 356B | 1.00 |
| Starlight | 2,255ms | 0 | 212,691B | 1.00 |
| libx 通常LTR | 1,953ms | 0 | 137,905B | 1.00 |
| libx 重量LTR | 1,802ms | 0 | 134,558B | 1.00 |
| libx 通常RTL | 1,802ms | 0 | 124,103B | 1.00 |

libxの3対象は、LCP 2,500ms以下、CLS 0.1以下、転送量350,000B以下、Accessibility 1.00という初期予算をすべて満たした。通常LTRは同条件のStarlightよりLCPが302ms短く、転送量が約35%少なかった。

## 管理者性能

| ケース | 所要時間 | 最大RSS |
| --- | ---: | ---: |
| sample-docs選択ビルド | 6,496ms | 818.3MB |
| landing選択ビルド | 2,768ms | 736.7MB |
| 統合ビルド | 11,758ms | 829.1MB |
| 1,000文書サイドバー生成 | 326ms | 73.8MB |

すべて `config/performance-budgets.json` の初期予算内だった。サイト別ビルドが継続的に予算へ近づく場合は、文書単位の増分処理を導入する前にサイト分割の妥当性を検討する。

## 再測定

```bash
PERF_RUNS=3 pnpm perf:reader
PERF_RUNS=3 pnpm perf:management
node scripts/performance/create-quality-report.js
```

一時結果は `.tmp/performance/` に保存される。週次・手動CIは `.github/workflows/performance-budget.yml` で同じ予算を検査する。
