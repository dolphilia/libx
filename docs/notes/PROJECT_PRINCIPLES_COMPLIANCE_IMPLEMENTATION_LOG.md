# libx 正式原則準拠改善 実施記録

- 計画: `docs/plans/PROJECT_PRINCIPLES_COMPLIANCE_IMPROVEMENT_PLAN.md`
- 開始日: 2026-08-11
- ステータス: 実施完了

## フェーズ1: 選択的ビルドの公開安全性

### 2026-08-11: P0-1 landingと文書サイトの出力保全

解消対象:

- P0-1「landing選択ビルドが他サイト出力を削除し得る」

実施内容:

- 選択対象を現在の `dist/` へ直接コピーする処理を廃止した。
- 現在の統合出力を一時ステージへ複製し、選択対象だけを置換してから `dist/` を一括で入れ替える処理を `scripts/selective-output.js` に分離した。
- landing更新時には、文書サイトの `docs/` と他のポータルサイトが所有するルートを予約領域として維持する。
- landingビルドが予約領域と同名の出力を生成した場合は、既存成果物を変更せず統合を拒否する。
- ステージ準備、サイドバーコピー、URL補正の途中で失敗した場合は、公開中の `dist/` を変更しない。

追加した自動検証:

1. landingだけの統合で文書サイトと他サイトを維持する。
2. landingの古い所有ファイルを除去する。
3. 文書サイト1件の統合でlandingと他の文書サイトを維持する。
4. ステージ準備中の失敗で現在の `dist/` を維持する。
5. landingと予約済みルートの衝突を拒否する。

検証結果:

| 検証 | 結果 |
| --- | --- |
| `node --test tests/runtime/selective-output.test.js` | 4件成功 |
| `pnpm lint` | 成功 |
| `pnpm check` | 成功。単体6件、実行時8件、生成物スモーク3件を含む |
| `pnpm build:selective --projects=landing` | 成功 |
| landing更新前後の `dist/docs/**` | 380ファイル、SHA-256 `2f584aed26303c835f5bfc74c55a47ad40cf5e04d482daeb3b750f31660ded4f` で一致 |
| `pnpm build:selective --projects=sample-docs` | 成功 |
| sample-docs更新前後のlanding所有領域 | 87ファイル、SHA-256 `588342906d9baa6ae1abce588a4edcc11ec1b8d25a9dd45fca4ffc04b3652846` で一致 |
| sample-docs更新前後のtest-verification | 152ファイル、SHA-256 `316338ce560913f494a92d36827ecaeff048efbe973765ed9ef9b8b68f68af35` で一致 |
| 一時ステージ残存 | なし |
| `git diff --check` | 成功 |

変更ファイル:

- `scripts/build-selective.js`
- `scripts/selective-output.js`
- `tests/runtime/selective-output.test.js`

残課題:

- フェーズ1の中核保証は実装できた。CIでこの実行時テストを必須化する作業はフェーズ2で行う。
- 現在の統合ビルドは別のバックアップ方式を持つ。全体ビルドの原子的置換は、選択的ビルドのP0解消とは分離して後続の安全性整理で扱う。

## フェーズ2: 品質ゲートと再現可能な開発環境

### 2026-08-11: P1-1、P3-1、P3-3 品質ゲートの必須化

解消対象:

- P1-1「CIが検査失敗を許容し、format検査も実行不能」
- P3-1「主要文書に参照切れと現状不一致がある」
- P3-3「ツールチェーンの再現条件が未固定」

実施内容:

- `prettier-plugin-astro` をルートの開発依存へ追加した。
- 文書本文、MDX、生成済みサイドバー、同期生成されるService Workerを `.prettierignore` で保守対象コードの整形契約から分離した。
- 保守対象のJavaScript、TypeScript、Astro、CSS、JSON、JSONCを一度Prettierで機械整形した。
- JSONCは既存ローダーとの互換性を保つため、末尾カンマなしを明示的な整形規則にした。
- `format:check` と `check:links` を追加し、ルート `pnpm check` の必須処理へ組み込んだ。
- Markdownリンク検査はコードフェンス内の例を除外し、実在する相対ファイルと見出しアンカーを検査する。
- GitHub Actionsの `continue-on-error` を除去し、デプロイ前の品質ジョブをローカルと同じ `pnpm check` へ統一した。
- `packageManager` を `pnpm@10.10.0` として宣言し、Node.js 20以上、pnpm 10.10.0以上をpackage manifestと主要文書へ反映した。
- 監査で確認した原則文書、バックアップガイド、ビルドガイドの参照切れを修正した。
- READMEと各ガイドの `global-defaults.json` を実在する `.jsonc` 名へ修正し、`sample-docs` のルーティング説明を現在のversion-first構造へ合わせた。

検証中に確認・解消した問題:

- 初回整形でJSONCへ末尾カンマが追加され、コメント除去後に `JSON.parse` する既存経路が設定を読めなくなった。
- JSONC専用の `trailingComma: none` を追加して再整形し、サイドバー生成時の設定読込警告がなくなることを確認した。

検証結果:

| 検証 | 結果 |
| --- | --- |
| `pnpm install --frozen-lockfile` | 成功。13ワークスペース、pnpm 10.10.0 |
| `pnpm format:check` | 成功 |
| `pnpm check:links` | 21 Markdownファイル、問題なし |
| `pnpm check` | 成功。format、lint、型、単体6件、実行時8件、テンプレート・2アプリビルド、スモーク3件を含む |
| `pnpm build:sidebar` | 設定読込警告なしで成功 |
| `git diff --check` | 成功 |

Cloudflare Pagesの直接アップロード方式、プロジェクト名、認証情報の扱いは変更していない。`cloudflare`スキルのPages手順を確認し、デプロイ方式ではなくデプロイ前ゲートだけを変更した。

残課題:

- GitHub Actions上の実際の成功はpush後に確認する必要がある。ローカルでは同一コマンドと固定ロックファイルの成功を確認済みである。
- 文書本文とMDXは不完全な説明用コード例を含むため、PrettierではなくビルドとMarkdownリンク検査で保護する。

## フェーズ3: 管理CLIとロケール処理

### 2026-08-11: P1-2、P1-3 変更計画、dry-run、原子的更新、BCP 47対応

解消対象:

- P1-2「管理CLIの正本、安全確認、復旧が不十分」
- P1-3「BCP 47形式を一部処理が扱えない」

実施内容:

- `packages/i18n/src/language-names.json` をスクリプト側の言語レジストリとして読む `scripts/locale-utils.js` を追加した。
- `Intl.getCanonicalLocales` と登録済みIDの照合により、CLI間で同じBCP 47検証を使うようにした。
- `create-document` の2文字限定正規表現を廃止し、`zh-Hans`、`zh-Hant`、`pt-BR`を受理できるようにした。
- 統合・選択ビルドで重複していたHTML URL補正を `scripts/html-url-rewriter.js` へ統合し、ハイフン付きロケールと `v2.1` のような版を保持するようにした。
- `add-language` はプロジェクトのコンテンツ言語だけを更新し、landing UI自体の言語設定を変更しない責務へ分離した。存在しない `projects.config.jsonc.siteConfig.supportedLangs` への依存を削除した。
- `add-language` に `--dry-run` を追加し、設定、全バージョンの言語ディレクトリ、生成予定文書を表示するようにした。
- `add-language` のビルド検証失敗を成功扱いせず、既存のロールバック経路へ接続した。
- 複数の準備済みファイル・ディレクトリを一括確定し、途中失敗時に全対象を復元する `scripts/atomic-paths.js` を追加した。
- `create-version` に変更予定表示と `--dry-run` を追加した。新しい版の全言語コンテンツを一時ディレクトリへ準備し、設定と同時に確定するようにした。コピー失敗は警告継続せず全体を中止する。
- `create-document` に変更予定表示と `--dry-run` を追加した。文書とカテゴリ翻訳設定を準備後に同時確定するようにした。
- `create-document` はプロジェクト未対応言語と設定に存在しない版を明示的に拒否し、表示する想定URLを現在のversion-first構造へ修正した。
- 設定の直列化、設定ファイル解決、カテゴリ翻訳の変更計画を、書き込み処理から分離して再利用できるようにした。

追加した自動検証:

1. `en`、`ar`、`zh-Hans`、`zh-Hant`、`pt-BR`の共有ロケール検証。
2. ハイフン付きロケールと小数版を含むHTML URL補正。
3. `add-language`、`create-version`、`create-document`のdry-run前後のディレクトリハッシュ不変。
4. `create-document`によるプロジェクト未対応ロケールの拒否。
5. 複数パスの確定成功と、2件目の確定失敗時に1件目も復元するロールバック。

検証結果:

| 検証 | 結果 |
| --- | --- |
| `pnpm check` | 成功 |
| 単体テスト | 6件成功 |
| 実行時テスト | 16件成功 |
| 生成物スモークテスト | 3件成功 |
| テンプレート、sample-docs、test-verification | すべてビルド成功 |
| dry-run後の準備・バックアップ残存 | なし |
| `git diff --check` | 成功 |

残課題:

- プロジェクトのコンテンツ言語追加とlanding UI言語追加を分離した。後者を管理CLI化する場合は、i18n言語レジストリを正本とする独立操作として設計する。
- 現在のローカル統合ビルドには、すべてのindex.htmlを同じ英語リダイレクトへ置換する既存処理が残る。BCP 47補正とは別の挙動課題として、配信構造整理時に扱う。

## フェーズ4: 読者安全性、国際化、アクセシビリティ

### 2026-08-11: P1-4、P1-5、P1-6 読者経路の保証

実施内容:

- 共有UIのアクセシブル名を15ロケールの翻訳キーへ移し、テーマ、ナビゲーション、バナー、サイドバー、言語選択の表示言語と読み上げ言語を一致させた。
- サイドバー開閉操作のDOM構造、状態属性、フォーカス可能性を修正し、方向依存CSSを論理プロパティへ移した。
- タスクリストへ文脈由来のアクセシブル名を付けるrehypeプラグインを追加し、コードテーマを高コントラスト版へ変更した。
- 言語ごとに実在する版をコンテンツ集合から導出し、欠落版を選択肢に出さず、現在のサイドバーだけを先読みするようにした。
- ライセンス必須値、sourceLanguage、source ID、Frontmatter参照を含むリポジトリ整合性検査を `pnpm check` に追加した。
- 英語デスクトップとアラビア語モバイルをブラウザで確認し、アラビア語v2が存在しないv1サイドバーを要求しないこと、コンソールエラーがないことを確認した。

検証結果:

| 検証 | 結果 |
| --- | --- |
| Lighthouse 英語デスクトップ | Accessibility、Best Practices、SEO、Agenticが各100 |
| Lighthouse アラビア語モバイル | 各カテゴリ100 |
| アラビア語ネットワーク | 10要求、`sidebar-ar-v2.json` は200、v1への404なし |
| 最終Lighthouse simulated mobile | LTR、重量LTR、RTLのAccessibilityが各1.00 |
| `check:integrity` | 設定、コンテンツ、landing、ライセンス参照が成功 |

## フェーズ5: 設定契約と生成物の正本

### 2026-08-11: P2-2、P2-3、P2-4 設定・生成経路の一元化

実施内容:

- 版ID、一意な最新版、言語と表示名、コンテンツ座標、アプリIDとslug、landing装飾、ライセンス参照を共有検査器で検証するようにした。
- 既定言語を `language.default`、ロケール集合を共有翻訳辞書、JSONC解析を `@docs/project-config/jsonc`、既定値解決を `default-resolvers.js` に集約した。
- サイドバーを一時ディレクトリで生成して成功時だけ原子的に置換し、古い組合せを削除するようにした。
- 正規テンプレートと全配信アプリのprebuildでサイドバーとService Workerを再生成し、CIで生成後差分を検査する方針へ統一した。
- 孤立していた `libx-docs` のlanding装飾を削除した。
- 決定をADR 0003、0004へ記録した。

## フェーズ6: 公開API境界と重複実装

### 2026-08-11: P2-1、P2-5、P2-7、P3-2 現行APIへの移行

実施内容:

- レイアウト、ページ、UI、content-utils、管理スクリプトを現行 `ProjectConfig` へ移し、未使用になったレガシー型、同期初期化API、`basic.*`、`languageNames`、`.json`設定fallbackを削除した。
- Viteのワークスペース `src` aliasを削除し、アイコンと言語名をpackage exportsから参照するようにした。
- Astroを5.7.12系へ揃え、共有パッケージの実行時所有が不要な箇所はpeer dependencyへ変更した。
- 共通ヘッダー骨格を `DocsHeaderFrame.astro` として共有し、正規テンプレート、2配信アプリ、landingから利用するようにした。
- 公開境界と依存方針をADR 0005へ記録した。

検証結果:

- 廃止API、旧設定fallback、`src` alias、Astro 3依存のコード検索結果は0件。
- 正規テンプレート、sample-docs、test-verification、landingのビルドが成功した。

## フェーズ7: 継続性能契約

### 2026-08-11: P2-6 性能フィクスチャ、比較対象、予算

実施内容:

- 通常LTR、重量LTR、通常RTL、最小静的HTML、Starlight比較サイトを固定した。
- 1サイト選択ビルド、landing選択ビルド、統合ビルド、1,000文書サイドバー生成を管理者性能ケースとして固定した。
- Lighthouse simulated mobileとプロセスツリー最大RSSを各3回測り、中央値をJSONへ出力するスクリプトを追加した。
- 初期予算を `config/performance-budgets.json` に定義し、超過を終了コードで検出するようにした。
- 性能、アクセシビリティ、リンク、設定、ライセンスを参照する品質レポート生成と週次・手動CIを追加した。
- 手順を性能測定ガイド、確定値を `PERFORMANCE_BASELINE_2026-08-11.md` に記録した。

最終中央値:

| 対象 | 結果 |
| --- | --- |
| libx通常LTR | LCP 1,953ms、CLS 0、137,905B、Accessibility 1.00 |
| libx重量LTR | LCP 1,802ms、CLS 0、134,558B、Accessibility 1.00 |
| libx通常RTL | LCP 1,802ms、CLS 0、124,103B、Accessibility 1.00 |
| 最小静的HTML / Starlight | LCP 614ms / 2,255ms |
| sample-docs / landing選択ビルド | 6,496ms / 2,768ms |
| 統合ビルド | 11,758ms、最大RSS 829.1MB |
| 1,000文書サイドバー | 326ms、最大RSS 73.8MB |

全対象が初期予算内だった。

## 最終結果

- 計画の全受け入れ基準を満たした。
- `pnpm check` をローカルとCIの共通ゲートとし、選択的ビルド、管理CLI、国際化、アクセシビリティ、設定・ライセンス整合性、公開API、生成物、性能を検証可能にした。
- GitHub Actions上の実行結果と本番環境のCore Web Vitalsは、push・配信後に継続観測する。
