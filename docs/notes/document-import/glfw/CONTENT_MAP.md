# GLFW上流文書とlibx配置の対応表

## 状態の定義

- `未調査`: 上流ファイルとページをまだ照合していない
- `採用`: 独立したlibxページとして採用する
- `統合`: 別の上流ページと一つのlibxページへ統合する
- `参照`: 本文を複製せず外部参照にする
- `除外`: 対象外とし理由を記録する
- `変換済み`: 英語MDXへの機械変換と構文確認が完了した
- `定本確認済み`: 原文照合と技術レビューが完了した
- `翻訳済み`: 日本語初稿がある
- `翻訳確認済み`: 日本語と原文のレビューが完了した

## 確定インベントリ

公式`docs/CMakeLists.txt`がDoxygenへ渡す14文書、公開ヘッダー2件、生成HTMLの`pages.html`と`topics.html`を照合した。配置先はすべて`apps/glfw/src/content/docs/v3-5-1/<lang>/`以下である。

翻訳進捗は英語36/36ページ、日本語36/36ページである。機械翻訳由来の試験初稿は管理者判断により公開対象から外した。すべての日本語ページを英語定本から逐次翻訳し、未翻訳ページはない。

### ガイドと履歴

| ID | 上流ファイル | libx配置（英語） | 状態 | 判断・例外 |
| --- | --- | --- | --- | --- |
| introduction | `docs/main.md` | `01-overview/01-introduction.md` | 変換済み | 公式入口 |
| getting-started | `docs/quick.md` | `02-getting-started/01-getting-started.md` | 変換済み | チュートリアル相当 |
| compile-guide | `docs/compile.md` | `02-getting-started/02-compiling-glfw.md` | 変換済み | ライブラリ自体のコンパイル |
| build-guide | `docs/build.md` | `02-getting-started/03-building-applications.md` | 変換済み | 利用アプリのビルドとリンク |
| intro-guide | `docs/intro.md` | `03-guides/01-introduction-to-the-api.md` | 変換済み | Guarantees and limitationsをこのページ内に保持 |
| context-guide | `docs/context.md` | `03-guides/02-context-guide.md` | 変換済み |  |
| monitor-guide | `docs/monitor.md` | `03-guides/03-monitor-guide.md` | 変換済み |  |
| window-guide | `docs/window.md` | `03-guides/04-window-guide.md` | 変換済み |  |
| input-guide | `docs/input.md` | `03-guides/05-input-guide.md` | 変換済み |  |
| vulkan-guide | `docs/vulkan.md` | `03-guides/06-vulkan-guide.md` | 変換済み |  |
| standards | `docs/compat.md` | `03-guides/07-standards-conformance.md` | 変換済み |  |
| internals | `docs/internal.md` | `03-guides/08-internal-structure.md` | 変換済み | 公式Pages一覧に含まれる開発者向け文書 |
| moving-guide | `docs/moving.md` | `05-migration-and-history/01-moving-from-2-to-3.md` | 変換済み |  |
| release-notes | `docs/news.md` | `05-migration-and-history/02-release-notes.md` | 変換済み | 3.5系列のリリースノート |

### APIリファレンス

APIは1シンボル1ページに分割せず、上流Doxygenのグループ単位を維持する。これによりページ数を抑え、上流の分類・アンカー・シグネチャをそのまま追跡できる。構造体と非推奨一覧だけは独立ページを維持する。

| ID | 上流生成HTML | libx配置（英語、`04-reference/`以下） | 状態 |
| --- | --- | --- | --- |
| init-reference | `group__init.html` | `01-initialization-version-error.md` | 変換済み |
| errors | `group__errors.html` | `02-error-codes.md` | 変換済み |
| window-reference | `group__window.html` | `03-window-reference.md` | 変換済み |
| context-reference | `group__context.html` | `04-context-reference.md` | 変換済み |
| monitor-reference | `group__monitor.html` | `05-monitor-reference.md` | 変換済み |
| input-reference | `group__input.html` | `06-input-reference.md` | 変換済み |
| vulkan-reference | `group__vulkan.html` | `07-vulkan-support-reference.md` | 変換済み |
| native-reference | `group__native.html` | `08-native-access.md` | 変換済み |
| keys | `group__keys.html` | `09-keyboard-key-tokens.md` | 変換済み |
| modifiers | `group__mods.html` | `10-modifier-key-flags.md` | 変換済み |
| mouse-buttons | `group__buttons.html` | `11-mouse-buttons.md` | 変換済み |
| joysticks | `group__joysticks.html` | `12-joysticks.md` | 変換済み |
| joystick-hats | `group__hat__state.html` | `13-joystick-hat-states.md` | 変換済み |
| gamepad-buttons | `group__gamepad__buttons.html` | `14-gamepad-buttons.md` | 変換済み |
| gamepad-axes | `group__gamepad__axes.html` | `15-gamepad-axes.md` | 変換済み |
| cursor-shapes | `group__shapes.html` | `16-standard-cursor-shapes.md` | 変換済み |
| allocator-struct | `struct_g_l_f_wallocator.html` | `17-glfwallocator.md` | 変換済み |
| gamepad-state-struct | `struct_g_l_f_wgamepadstate.html` | `18-glfwgamepadstate.md` | 変換済み |
| gamma-ramp-struct | `struct_g_l_f_wgammaramp.html` | `19-glfwgammaramp.md` | 変換済み |
| image-struct | `struct_g_l_f_wimage.html` | `20-glfwimage.md` | 変換済み |
| video-mode-struct | `struct_g_l_f_wvidmode.html` | `21-glfwvidmode.md` | 変換済み |
| deprecated | `deprecated.html` | `22-deprecated-list.md` | 変換済み |

### 参照・除外

| 上流物 | 分類 | 理由 |
| --- | --- | --- |
| `glfw3_8h.html`、`glfw3native_8h.html` | 参照 | APIグループページと内容が重複するファイル単位ビュー |
| `*_8md.html` | 参照 | ガイドページと重複するソースファイルビュー |
| `files.html`、`topics.html`、`pages.html` | 参照 | インベントリ照合用の生成索引 |
| `docs/CONTRIBUTING.md`、`docs/SUPPORT.md` | 除外 | Doxygen公開文書の入力外。開発・サポート運用文書であり利用者向け定本の対象外 |
| Doxygenテーマ画像・検索JS・CSS | 除外 | libxのUIと検索を使用するため不要 |
| `docs/spaces.svg` | 採用 | 文書から参照される説明図として`public/assets/glfw-3.5.1/`へ配置 |

## APIリファレンス粒度の判断結果

- 上流Doxygenの17グループ構造を維持する。
- シンボルへのDoxygenアンカーを保持し、ガイド中の`@ref`を内部リンクへ変換する。
- 大きなグループページは残るが、1シンボル1ページ化によるファイル数増加と更新追跡コストを避ける。
- 構造体5件と非推奨一覧は上流と同じ独立ページにする。
- 英語・日本語は同じ36ファイル構造を使用する。

## 完了条件

- [x] 公式ナビゲーション上の全ページを分類した
- [x] リポジトリ内の全Doxygen文書ソースを分類した
- [x] 公開ヘッダーから生成されるAPIグループを分類した
- [x] 画像、コード例、外部仕様リンクを分類した
- [x] 採用・統合・除外の各判断に理由がある
- [x] 全採用ページに英語・日本語の配置先がある
