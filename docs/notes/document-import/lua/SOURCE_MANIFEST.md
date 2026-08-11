# Lua取得元マニフェスト

## 1. 固定版

| 項目 | 値 | 状態 |
| --- | --- | --- |
| 系列 | Lua 5.5 | 採用 |
| 正式リリース | Lua 5.5.1 | 確定 |
| libx版ID | `v5-5-1` | 確定 |
| 配布物内READMEの日付 | 2026-07-24 | 確認済み |
| 公式公開日 | 2026-08-03 | 確認済み |
| 取得日時 | 2026-08-11T06:49:51Z | 取得済み |
| 取得担当 | Codex | 完了 |

初期選定では5.5.1をRC2と判断したが、正式取得直前の再確認で2026-08-03に正式公開済みと判明した。本文変換前だったため、計画の切替規則に従い5.5.0から5.5.1へ対象を変更した。現在のWork areaはLua 5.4.9 RC1を扱っており、5.5.1はDownload areaと版履歴の正式版一覧にある。

配布物内READMEの日付はアーカイブ作成日の2026-07-24、公式版履歴の日付は正式公開日の2026-08-03である。ファイル名、本文版、Download areaのハッシュがすべて5.5.1として一致するため、版同一性を損なう差異ではない。

固定配布物内の文書を正本とする。公式オンラインマニュアルは本文が固定版と一致し、末尾の更新時刻だけが1分異なる。オンライン版はリンク・表示・更新差分の照合に使い、再取得で定本を無言更新しない。

## 2. 取得物候補

| ID | 種別 | 取得元 | 固定条件 | 保存先 | SHA-256 | 状態 |
| --- | --- | --- | --- | --- | --- | --- |
| lua-source-tar | 公式ソース配布物 | `https://www.lua.org/ftp/lua-5.5.1.tar.gz` | Lua 5.5.1 | `01-source/lua-5.5.1.tar.gz` | `1c4b4068d67061f2a2231ad2b5422e77acea1487ea9890f6320af614f4373dce` | 取得・公式値一致 |
| lua-download-page | 公式Download area | `https://www.lua.org/ftp/` | 2026-08-11取得 | `01-source/official-download.html` | `28cb22c1bb0716f0d8100d7843787008deee39381f7581053b0519d9f1cfe7af` | 取得済み |
| lua-version-history | 公式版履歴 | `https://www.lua.org/versions.html` | 2026-08-11取得 | `01-source/official-versions.html` | `561f964e8962637b62e6cc8da5ce8ce6781cb63d7994c2e3e1fe5def59adb787` | 取得済み |
| lua-work-area | RC確認 | `https://www.lua.org/work/` | 2026-08-11取得 | `01-source/official-work.html` | `7f6f6a3db8fb4dd32245df47f8364f66d8efdd720a7e2cf0526e5238e7fa4742` | 取得済み |
| lua-online-manual | 公式オンラインマニュアル | `https://www.lua.org/manual/5.5/manual.html` | 2026-08-11取得、比較専用 | `01-source/official-manual.html` | `786827cf063c8d929f84f567a1fc5954bedb6f1d3c180383f8321453e39d7e79` | 取得済み |
| lua-online-contents | 公式オンライン目次 | `https://www.lua.org/manual/5.5/` | 2026-08-11取得、比較専用 | `01-source/official-manual-contents.html` | `9ccf55c9ce178e1f3fd1cab276b484aebd0c027d8ca7952624a704d12cd0e1d5` | 取得済み |
| lua-bugs-5-5-1 | 公式既知問題 | `https://www.lua.org/bugs.html#5.5.1` | 2026-08-11取得 | `01-source/official-bugs.html` | `8992aa7b0783d81a848d436d071fcc04ab487af5724c92495d48ebbaf94bdaee` | 取得済み、報告0件 |
| lua-license-page | 公式ライセンス | `https://www.lua.org/copyright.html` | 2026-08-11取得 | `01-source/official-license.html` | `9fa02db000d8178643a592032fab2e1d2ba6d9e2f609f149fc113d30d32dbea2` | 取得済み |

HTTPの`Last-Modified`、`ETag`、バイト数は`.tmp/document-import/lua/05-reports/*.headers.txt`へ保存した。

## 3. 配布物内の対象

| パス | 用途 | 公開定本 |
| --- | --- | --- |
| `doc/manual.html` | 公式リファレンスマニュアル | 採用 |
| `doc/readme.html` | 概要、導入、変更、ライセンス | 採用 |
| `doc/lua.1` | Luaコマンド | 採用 |
| `doc/luac.1` | luacコマンド | 採用 |
| `doc/contents.html` | 目次・完全性照合 | 検査参照 |
| `src/lua.h` | 中核C API宣言 | 検査参照 |
| `src/lauxlib.h` | 補助ライブラリ宣言 | 検査参照 |
| `src/lualib.h` | 標準ライブラリ宣言 | 検査参照 |
| `src/luaconf.h` | 構成マクロ | 検査参照 |
| `README`、`Makefile` | 版・ビルド情報照合 | 検査参照 |

`manual.css`、サイト用CSS、ロゴ等は表示再現のために無条件複製しない。本文から必要な画像だけを分類する。

## 4. 出典の優先順位

1. 固定した正式配布物内の文書、ライセンス、ヘッダー
2. 同じ正式版に対する公式bugs一覧
3. 取得日時を固定した公式オンラインマニュアルと版履歴
4. 公式ソースコード表示

Lua公式GitHubミラーは不定期に同期されるため、固定版の正本にはしない。内容が食い違う場合は自動統合せず、差異と判断を`WORK_LOG.md`へ残す。

## 5. ライセンス確認

| 項目 | 予備確認 | 正式取得後 |
| --- | --- | --- |
| ライセンス | MIT | 固定版で確認済み |
| 著作権表示 | Copyright © 1994–2026 Lua.org, PUC-Rio | 固定版で確認済み |
| 使用・複製・変更・公開・配布 | 許可 | 確認済み |
| 必須条件 | 著作権表示と許諾表示を保持 | 確認済み |
| 翻訳・整形 | 変更として扱い、原著と誤認させない | 運用方針確定 |
| 保証 | 無保証条項を保持 | 確認済み |

固定配布物の`doc/readme.html`にあるライセンス全文を保存・照合し、`project.config.jsonc`へLua.org、PUC-Rio、MIT、固定版出典を設定するまで公開定本を確定しない。

## 6. 取得完了条件

- [x] 取得時点の最新正式版とRC状態を再確認した
- [x] 正式版、ファイル名、配布物内版表示が一致する
- [x] tarballのSHA-256が公式掲載値と一致する
- [x] 正式取得物を`01-source/`へ保存した
- [x] オンライン比較資料に取得日時とSHA-256がある
- [x] リリース日差異を記録し、定本の版同一性に影響しないと判断した
- [x] 固定版ライセンス全文と適用範囲を確認した
- [x] `CONTENT_MAP.md`の全対象を分類できる
