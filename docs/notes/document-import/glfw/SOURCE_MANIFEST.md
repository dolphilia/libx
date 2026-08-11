# GLFW取得元マニフェスト

## 1. 固定版

| 項目 | 値 |
| --- | --- |
| 正式リリース | GLFW 3.5.1 |
| Gitタグ | `3.5.1` |
| 注釈付きタグオブジェクト | `70a9bb3881fe80fd483236e2b203cb451c6ecf40` |
| コミットSHA | `d9d6f0f1f967807ffade6598ea9a631ebaf37a56` |
| リリース日時 | 2026-07-31T19:01:25Z |
| 取得日時 | 2026-08-11T01:06:53Z |
| 取得担当 | Codex |

GitHub Releases API、タグ参照API、コミットAPIを照合した。`latest`入口と配布ZIP内`docs/html/index.html`のSHA-256も一致したため、以後は公式配布ZIPを固定版の主取得物とする。

## 2. 取得物

| ID | 種別 | 取得元URL | 固定リビジョン／版 | 保存先 | SHA-256 | 状態 |
| --- | --- | --- | --- | --- | --- | --- |
| glfw-source-zip | 公式ソース配布ZIP | https://github.com/glfw/glfw/releases/download/3.5.1/glfw-3.5.1.zip | 3.5.1 | `01-source/glfw-3.5.1.zip` | `ea79bc5feffc254c87291980c2d0bce9acebb68c4983b79f961dcd2cb8a611a0` | 取得・照合済み |
| glfw-repository | ZIP展開物 | 上記配布ZIP | `d9d6f0f1f967807ffade6598ea9a631ebaf37a56` | `01-source/repository/glfw-3.5.1/` | ZIPで一括固定 | 取得済み |
| glfw-docs-html | 公式`latest`入口HTML | https://www.glfw.org/docs/latest/ | 3.5.1 | `01-source/official-latest-index.html` | `79e659e04b829abbe17f06f8a0e5e86447bd975a943ebd2fc454f82b20c69f97` | 配布ZIP内入口と一致 |
| glfw-license-page | 公式ライセンスページ | https://www.glfw.org/license | 2026-08-11取得 | `01-source/official-license.html` | `5b8a858789961bdb5c3a06787ea710bba1e167e52ed3e312efb802115f996e72` | 取得済み |
| glfw-license-file | 固定版ライセンス | https://github.com/glfw/glfw/blob/3.5.1/LICENSE.md | 3.5.1 | `repository/glfw-3.5.1/LICENSE.md` | `149704059b5d0bf551637e50042dd4de9c2cae921021f6636298911e3a5f9462` | 確認済み |
| glfw-public-header | 公開APIヘッダー | 固定版ZIP内`include/GLFW/glfw3.h` | 3.5.1 | 同左 | `95ecc16e4875bca18cff863232d5dbb623f3457b05f07efd26fe8bc8a06345b6` | 確認済み |
| glfw-native-header | ネイティブAPIヘッダー | 固定版ZIP内`include/GLFW/glfw3native.h` | 3.5.1 | 同左 | `d301085c2a998345c0f80127d8e67d4394f1c7b12ca9c2cf3b73b7fa15c804ae` | 確認済み |

取得物を追加するたびに、リダイレクト後URL、HTTPの`Last-Modified`／`ETag`が得られる場合は作業ログにも記録する。

## 3. 出典の優先順位

1. 固定リリース内のDoxygen文書ソースと公開ヘッダー
2. 同じ版の公式生成HTML
3. 固定リリースの配布物、リリースノート、版履歴

内容が食い違う場合は自動的に一方を採用せず、`WORK_LOG.md`へ差異と判断を記録する。

## 4. ライセンス確認

| 項目 | 暫定確認 | 採用前確認 |
| --- | --- | --- |
| ライセンス名 | zlib/libpng | 固定版`LICENSE.md`で確認済み |
| 著作権者 | Marcus Geelnard、Camilla Löwy | 固定版の表示を設定済み |
| 翻訳・改変 | 許可 | 原著を偽らず、変更版と明示する |
| 再配布 | 許可 | ライセンス通知を除去・改変しない |
| 変更表示 | 必須 | 全ページの冒頭と帰属UIで明示する |
| 原文URL | 必須の運用情報 | 固定リリースURLを設定済み |

固定版の`LICENSE.md`全文を確認し、`project.config.jsonc`の`licensing.sources`へ必要な情報を設定するまで本文を公開しない。

## 5. 取得完了条件

- [x] 正式リリース、タグ、コミットが一致する
- [x] 公式HTMLが同じ版を示す
- [x] 全取得物に保存先とチェックサムがある
- [x] 文書ソースと公開ヘッダーの所在を確認した
- [x] ライセンス通知と変更表示方法を確定した
- [x] `CONTENT_MAP.md`のインベントリを作成できる
