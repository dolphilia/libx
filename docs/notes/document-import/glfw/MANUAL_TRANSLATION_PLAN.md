# GLFW日本語版・逐次翻訳計画

- 作成日: 2026-08-11
- 翻訳元定本: `apps/glfw/src/content/docs/v3-5-1/en/`
- 翻訳先: `apps/glfw/src/content/docs/v3-5-1/ja/`
- 対象: GLFW 3.5.1、36ページ
- 現在の進捗: 36/36ページ

## 1. 方針

現段階ではGoogle等の翻訳機、翻訳API、Ollama等のローカル翻訳モデル、一括翻訳スクリプトを使用しない。英語定本を開き、一ページずつ、節ごとに意味と構造を照合しながら日本語へ翻訳する。

ページ数を進めることより、次のページでも再現できる翻訳・照合手順を確立することを優先する。機械的に確認できる構造、リンク、識別子はスクリプトで検査するが、訳文の生成と技術的意味の確定は自動化しない。

## 2. 進捗状態

各ページは次の順で状態を進める。

1. `未着手`: 日本語ファイルが存在しない。
2. `翻訳中`: ページ全体の訳がまだ揃っていない。原則として公開ディレクトリへ途中版を残さない。
3. `初稿`: 全本文を翻訳し、省略がない。
4. `原文照合済み`: 技術条件、規範表現、否定、コード、リンクを英語定本と照合した。
5. `検証済み`: 構造・リンク検査、個別ビルド、ブラウザ表示に合格した。

進捗数に含めるのは`原文照合済み`以上とする。現在は36ページすべてが`原文照合済み`であり、未着手ページはない。全体の構造検査、内部リンク検査、個別ビルドに合格し、代表ページのブラウザ表示も確認した。

## 3. 一ページの作業手順

1. `CONTENT_MAP.md`で上流文書と英語定本の対応を確認する。
2. 英語ファイルを同一相対パスの日本語ファイルへ複製する。
3. Frontmatterでは`title`と`description`だけを翻訳し、`licenseSource`を保持する。
4. 見出し、段落、注記、表の説明文を上から順に一つずつ翻訳する。
5. コード、API識別子、型、マクロ、数値、URL、HTMLアンカーを変更しない。
6. 一節を訳すたびに英語と日本語を並べ、主語、条件、否定、作用範囲、省略の有無を確認する。
7. `TRANSLATION_GUIDE.md`の用語と文体へ統一する。
8. must、should、may、not、unless、until、before／afterを含む文を再度確認する。
9. ページ全体でコード、リンク、見出し階層、注記、リスト、表を照合する。
10. 欠落許容の翻訳構造検査と内部リンク検査を実行する。
11. 個別ビルドとブラウザ表示を確認し、この表の状態を更新する。

作業を中断するときは、未完成の日本語を公開対象へ残さず、必要なら`.tmp/document-import/glfw/04-translation/manual-work/`へ退避する。

## 4. 完了条件

ページを`原文照合済み`にするには、次をすべて満たす。

- 原文の見出し、段落、リスト項目、表、注記に対応する日本語がある。
- 要約、無断の補足、条件の追加・削除がない。
- must、should、may、否定、例外、時系列の強さと範囲が一致する。
- 戻り値、エラー、スレッド、プラットフォーム、有効期間の条件が一致する。
- コード、識別子、数値、URL、アンカー、`licenseSource`が一致する。
- 用語表と文体規則に従っている。
- `validate-glfw-translation.mjs --allow-missing`が既存ページについて成功する。
- `validate-glfw-links.mjs --allow-missing-ja`がエラー0件になる。

## 5. 翻訳順序

読者が最初に使う文書から進め、APIリファレンスはガイドで用語を固めた後に着手する。

### 第1段階: 入口と導入（4ページ）

| 順 | ファイル | 状態 |
| ---: | --- | --- |
| 1 | `01-overview/01-introduction.md` | 原文照合済み |
| 2 | `02-getting-started/01-getting-started.md` | 原文照合済み |
| 3 | `02-getting-started/02-compiling-glfw.md` | 原文照合済み |
| 4 | `02-getting-started/03-building-applications.md` | 原文照合済み |

最初の1ページ完了後に、用語表、1ページの所要時間、検査手順を見直す。第1段階完了後に文体とビルド手順を固定する。

### 第2段階: 利用ガイド（8ページ）

| 順 | ファイル | 状態 |
| ---: | --- | --- |
| 5 | `03-guides/01-introduction-to-the-api.md` | 原文照合済み |
| 6 | `03-guides/02-context-guide.md` | 原文照合済み |
| 7 | `03-guides/03-monitor-guide.md` | 原文照合済み |
| 8 | `03-guides/04-window-guide.md` | 原文照合済み |
| 9 | `03-guides/05-input-guide.md` | 原文照合済み |
| 10 | `03-guides/06-vulkan-guide.md` | 原文照合済み |
| 11 | `03-guides/07-standards-conformance.md` | 原文照合済み |
| 12 | `03-guides/08-internal-structure.md` | 原文照合済み |

第2段階完了後、ガイドで確定した用語をAPIリファレンス用の用語表へ反映する。

### 第3段階: 中核APIリファレンス（8ページ）

| 順 | ファイル | 状態 |
| ---: | --- | --- |
| 13 | `04-reference/01-initialization-version-error.md` | 原文照合済み |
| 14 | `04-reference/02-error-codes.md` | 原文照合済み |
| 15 | `04-reference/03-window-reference.md` | 原文照合済み |
| 16 | `04-reference/04-context-reference.md` | 原文照合済み |
| 17 | `04-reference/05-monitor-reference.md` | 原文照合済み |
| 18 | `04-reference/06-input-reference.md` | 原文照合済み |
| 19 | `04-reference/07-vulkan-support-reference.md` | 原文照合済み |
| 20 | `04-reference/08-native-access.md` | 原文照合済み |

### 第4段階: 定数・構造体・非推奨一覧（14ページ）

| 順 | ファイル | 状態 |
| ---: | --- | --- |
| 21 | `04-reference/09-keyboard-key-tokens.md` | 原文照合済み |
| 22 | `04-reference/10-modifier-key-flags.md` | 原文照合済み |
| 23 | `04-reference/11-mouse-buttons.md` | 原文照合済み |
| 24 | `04-reference/12-joysticks.md` | 原文照合済み |
| 25 | `04-reference/13-joystick-hat-states.md` | 原文照合済み |
| 26 | `04-reference/14-gamepad-buttons.md` | 原文照合済み |
| 27 | `04-reference/15-gamepad-axes.md` | 原文照合済み |
| 28 | `04-reference/16-standard-cursor-shapes.md` | 原文照合済み |
| 29 | `04-reference/17-glfwallocator.md` | 原文照合済み |
| 30 | `04-reference/18-glfwgamepadstate.md` | 原文照合済み |
| 31 | `04-reference/19-glfwgammaramp.md` | 原文照合済み |
| 32 | `04-reference/20-glfwimage.md` | 原文照合済み |
| 33 | `04-reference/21-glfwvidmode.md` | 原文照合済み |
| 34 | `04-reference/22-deprecated-list.md` | 原文照合済み |

### 第5段階: 移行と履歴（2ページ）

| 順 | ファイル | 状態 |
| ---: | --- | --- |
| 35 | `05-migration-and-history/01-moving-from-2-to-3.md` | 原文照合済み |
| 36 | `05-migration-and-history/02-release-notes.md` | 原文照合済み |

## 6. 段階ごとの確認

各段階の終了時に次を記録する。

- 完了ページ数と実作業時間
- 新たに確定・変更した用語
- 原文照合で見つかった誤りの種類
- 機械検査で検出できた問題と、人だけが検出できた問題
- 次段階の順序、粒度、見積もりを変える必要があるか

全36ページを一度に見積もって固定せず、1ページ、4ページ、12ページ、20ページ、34ページの節目で計画を更新する。
