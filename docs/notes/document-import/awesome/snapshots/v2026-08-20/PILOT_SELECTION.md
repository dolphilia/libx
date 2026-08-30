# 縦断パイロットの選定

起点を含めて10取得元以下とする。直接候補673件の固定情報から、ライセンス・規模・カテゴリ・公開可否が異なる組合せを選んだ。

| 取得元 | 条件 | 選定理由 |
| --- | --- | --- |
| `sindresorhus/awesome` | CC0-1.0、入口、広告・支援ブロック | 起点の除外規則とカテゴリ索引を検証する。 |
| `0pandadev/awesome-windows` | CC0-1.0、65 KiB | 短中規模のプラットフォーム系リスト。 |
| `avelino/awesome-go` | MIT、408 KiB | 文書へのライセンス適用確認と大規模READMEの分割候補を検証する。 |
| `rust-unofficial/awesome-rust` | ライセンス未検出、359 KiB | `metadata-only`の本文非混入を検証する。 |
| `serhii-londar/open-source-mac-os-apps` | CC0-1.0、414 KiB | 大規模・多数カテゴリの正規化と翻訳負荷を測定する。 |
| `PatrickJS/awesome-angular` | CC0-1.0、327 KiB | フロントエンド系の相対リンク、画像・表を確認する。 |
| `YuzheSHI/awesome-agi-cocosci` | CC0-1.0、575 KiB | 最大級ページ、専門用語、分割しきい値を検証する。 |
| `awesome-selfhosted/awesome-selfhosted` | ライセンス未検出、329 KiB | 大規模`metadata-only`の索引表示を検証する。 |

本文取り込みの可否はこの選定では決めない。各固定ライセンス文書の人手判定を`LICENSE_DECISIONS.json`へ記録して初めて`included`へ昇格できる。
