# Lua上流文書とlibx配置の対応表

## 1. 状態

| 状態 | 意味 |
| --- | --- |
| 候補 | 選定済みだが正式取得・内容確認前 |
| 採用 | 独立した定本ページとして収録する |
| 分割 | 一つの上流文書を複数ページへ分ける |
| 統合 | 重複を明示して一つのページへまとめる |
| 検査参照 | 公開本文にはせず完全性・識別子検査に使う |
| 外部参照 | 複製せず公式URLへリンクする |
| 除外 | 理由を記録して対象外にする |

配置とページ数は、Lua 5.5.1正式取得物の機械集計と分割試験をもとに確定した。ページ境界の機械可読な正本は`scripts/importers/lua-5.5.1-page-map.mjs`、生成結果は`.tmp/document-import/lua/05-reports/import-manifest.json`にある。

## 2. 主要入力

| ID | 上流 | 内容 | 初期判断 | libxカテゴリ案 | 未解決 |
| --- | --- | --- | --- | --- | --- |
| readme | `doc/readme.html` | 概要、ビルド、インストール、変更、ライセンス | 分割 | `01-overview`、`07-migration-and-known-issues` | 4ページ。重複内容は統合しない |
| manual-1 | `doc/manual.html` §1 | Introduction | 採用 | `01-overview` | README導入との重複 |
| manual-2 | `doc/manual.html` §2 | Basic Concepts | 分割 | `02-language` | 6ページ。章導入を§2.1へ含める |
| manual-3 | `doc/manual.html` §3 | The Language | 分割 | `02-language` | 4ページ。章導入を§3.1へ含める |
| manual-4 | `doc/manual.html` §4 | C API | 分割 | `03-c-api` | 17ページ。§4.6だけ10の安定名範囲へ分割 |
| manual-5 | `doc/manual.html` §5 | Auxiliary Library | 分割 | `04-auxiliary-library` | 6ページ。§5.1だけ5の安定名範囲へ分割 |
| manual-6 | `doc/manual.html` §6 | Standard Libraries | 分割 | `05-standard-library` | 概要と各節の12ページ |
| manual-7 | `doc/manual.html` §7 | Lua Standalone | 採用 | `06-tools` | manページと統合せず、言語仕様として保持 |
| manual-8 | `doc/manual.html` §8 | 5.4との非互換性 | 採用 | `07-migration-and-known-issues` | 3小節を1ページに保持 |
| manual-9 | `doc/manual.html` §9 | Complete Syntax | 採用 | `02-language` | BNF保持方法 |
| lua-man | `doc/lua.1` | インタープリターCLI | 採用 | `06-tools` | 1ページ。manual §7と統合しない |
| luac-man | `doc/luac.1` | コンパイラーCLI | 採用 | `06-tools` | 1ページ |
| bugs-5-5-1 | 公式bugs一覧 | 5.5.1既知問題（取得時点では報告0件） | 採用 | `07-migration-and-known-issues` | 取得時点を明記した1ページ |

## 3. 検査参照

| ID | 上流 | 用途 | 公開しない理由 |
| --- | --- | --- | --- |
| contents | `doc/contents.html` | 章節・API索引の完全性 | 本文ナビゲーションと重複 |
| lua-header | `src/lua.h` | C API名、型、定数、宣言 | マニュアル本文の検証資料 |
| lauxlib-header | `src/lauxlib.h` | 補助API名、型、宣言 | マニュアル本文の検証資料 |
| lualib-header | `src/lualib.h` | 標準ライブラリ名、open関数 | マニュアル本文の検証資料 |
| luaconf-header | `src/luaconf.h` | 構成マクロ、プラットフォーム条件 | マニュアル本文の検証資料 |
| root-readme | `README` | 正式版と入口の確認 | `doc/readme.html`へ誘導する短文 |
| makefile | `Makefile` | ビルド・インストール対象の照合 | 手順本文ではない |

## 4. `doc/`全ファイルの分類

| ファイル | 分類 | 理由 |
| --- | --- | --- |
| `manual.html` | 分割 | リファレンスマニュアル本文 |
| `readme.html` | 分割 | 配布、ビルド、変更、ライセンス本文 |
| `lua.1` | 採用 | インタープリターCLIの独立資料 |
| `luac.1` | 採用 | コンパイラーCLIの独立資料 |
| `contents.html` | 検査参照 | 目次・索引の完全性検査に使用 |
| `lua.css`、`manual.css`、`index.css` | 除外 | libxテーマで置換し、意味内容を持たない |
| `logo.png` | 除外 | 装飾ロゴ。本文中は製品名の代替テキストを保持 |
| `OSIApproved.png` | 除外 | 装飾バッジ。ライセンス本文と公式リンクを保持 |

## 5. 初回対象外

| 対象 | 判断 | 理由 |
| --- | --- | --- |
| Lua 5.4.9 RC文書 | 除外 | 未正式で対象系列も異なる |
| Lua 5.4以前のマニュアル | 除外 | 初回の版・翻訳規模を限定する |
| Programming in Lua | 外部参照 | 別著作物で対象版も異なる |
| FAQ | 外部参照 | 常時更新でリリース固定ではない |
| Technical Notes・論文 | 外部参照 | 言語定義・利用リファレンスとは目的が異なる |
| lua-users.org Wiki | 外部参照 | 公式固定配布物ではない |
| ソースコードブラウザー | 外部参照 | 全ソース複製は文書サイトの範囲外 |
| CSS・サイト装飾画像 | 除外候補 | libxテーマで再現し、内容上必要な画像だけ採用する |

## 6. インベントリとページ粒度の実測

| 項目 | 実測 |
| --- | ---: |
| `manual.html` | 381,419バイト |
| 見出し | h1 10、h2 32、h3 386、h4 8 |
| 名前付きアンカー | 531 |
| リンク | 583 |
| `<pre>` | 312 |
| 欠落フラグメント・重複アンカー | 0・0 |
| `readme.html` | 10,776バイト、アンカー6 |
| 生成した英語定本 | 56ページ、392 KB前後 |
| 生成後に保持した上流アンカー | 538（manual 531、README 6、bugs 1） |
| 共通検査で確認した内部リンク | 582、エラー0 |
| 最大Markdown | `02-language/10-expressions.md`、約27 KB |

§4.6は約75 KB・アンカー170、§5.1は約35 KB・アンカー74だった。1シンボル1ページにすると管理ファイル数が急増する一方、節をそのまま1ページにすると表示・レビュー・翻訳単位が大きすぎる。このため、元のアルファベット順を維持した安定名範囲に限って§4.6を10ページ、§5.1を5ページへ分けた。それ以外は章または節を単位とした。

API識別子照合では、マニュアルのAPI・環境変数系アンカー297件、4ヘッダーの識別子402件を抽出した。マニュアル側だけの7件は環境変数名6件と補助マクロ`lua_numbertointeger`、ヘッダー側だけの112件は構成・互換・宣言用マクロ等を含む。したがって単純な集合一致は要件にせず、差分を`inventory.json`に固定した。

README、manual §7、manページ、README変更一覧、manual §8は、目的と規範性が異なるため無言で統合しない。同じ事項が重複しても、出典単位の独立ページとして追跡する。

## 7. ページ数

| カテゴリ | ページ数 |
| --- | ---: |
| `01-overview` | 4 |
| `02-language` | 11 |
| `03-c-api` | 17 |
| `04-auxiliary-library` | 6 |
| `05-standard-library` | 12 |
| `06-tools` | 3 |
| `07-migration-and-known-issues` | 3 |
| 合計 | 56 |

各ページの開始・終了アンカー、英語タイトル、スラッグは`scripts/importers/lua-5.5.1-page-map.mjs`を正本とする。インポータは各上流アンカーから新URLを構築し、欠落・重複・壊れた内部リンクを検査する。

## 8. 完了条件

- [x] 配布物内の全`doc/`ファイルを分類した
- [x] マニュアル第1章から第9章の配置先がある
- [x] 全アンカーに保持・移行・除外の判断がある
- [x] C APIと補助APIをヘッダーと照合した
- [x] README、manual、manページの重複処理を記録した
- [x] 既知問題一覧の固定方法と更新方法を決めた
- [x] すべての採用ページに英語配置先がある
- [x] 採用・統合・除外の判断に理由がある
