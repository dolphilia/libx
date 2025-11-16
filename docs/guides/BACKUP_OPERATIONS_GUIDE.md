# バックアップ運用ガイド

このガイドでは、libxプロジェクトにおけるバックアップの仕組みと運用方法について説明します。

## 目次

1. [バックアップの概要](#バックアップの概要)
2. [`.backups/` ディレクトリの運用](#backups-ディレクトリの運用)
3. [復元手順](#復元手順)
4. [各バックアップ層の活用方法](#各バックアップ層の活用方法)
5. [ベストプラクティス](#ベストプラクティス)
6. [トラブルシューティング](#トラブルシューティング)

---

## バックアップの概要

libxプロジェクトでは、**3層のバックアップ構造**を採用しています。それぞれが異なる役割を持ち、互いに補完し合うことで、データの安全性を確保しています。

### バックアップの3層構造

| レイヤー | 対象 | バックアップ方法 | 復元方法 | 主な用途 |
|---------|------|----------------|---------|---------|
| **1. Git** | ソースコード、MDXドキュメント、設定ファイル | コミット履歴 | `git reset`, `git revert` | 日常的なバージョン管理 |
| **2. 自動バックアップ** | 設定ファイル、ビルド成果物 | `.backups/` ディレクトリに自動保存 | 手動コピー、ロールバックスクリプト | 破壊的操作からの保護 |
| **3. Cloudflare Pages** | デプロイされたサイト | デプロイ履歴の自動保存 | ダッシュボードでロールバック | 本番環境の保護 |

### 各層の役割と限界

#### 1. Git（ソースコード管理）

**カバー範囲：**
- すべてのソースコード（`apps/`, `packages/`, `scripts/`）
- MDXドキュメントファイル（`apps/*/src/content/docs/`）
- プロジェクト設定ファイル（`*.config.json`, `astro.config.mjs`）
- ビルド設定ファイル（`package.json`, `pnpm-lock.yaml`）

**限界：**
- ⚠️ コミット前の変更は保護されない
- ⚠️ `.gitignore` で除外されたファイル（`node_modules/`, `dist/`, `.backups/`）は管理されない
- ⚠️ 誤ったコミット後の復旧には履歴操作が必要

**ベストプラクティス：**
```bash
# 作業前にブランチを作成
git checkout -b feature/my-changes

# こまめにコミット
git add .
git commit -m "変更内容の説明"
```

#### 2. 自動バックアップ（`.backups/` ディレクトリ）

**カバー範囲：**
- プロジェクト設定ファイル（`project.config.json`, `projects.config.json`）
- ビルド成果物（`dist/` ディレクトリ全体）
- カテゴリ構造の変更前の状態
- 言語追加時に変更されるすべてのファイル

**限界：**
- ⚠️ 自動削除されないため、手動でのクリーンアップが必要
- ⚠️ 大容量のバックアップ（dist/など）は数回分だけ保持すべき

**自動バックアップが作成されるタイミング：**
- ビルド実行時（`dist/` ディレクトリ削除前）
- プロジェクト設定ファイル更新前
- カテゴリ同期実行時
- 言語追加実行時

#### 3. Cloudflare Pages（デプロイ履歴）

**カバー範囲：**
- デプロイされたビルド成果物（`dist/` の内容）
- 各デプロイのスナップショット

**限界：**
- ⚠️ ソースコードはバックアップされない
- ⚠️ ローカルでのビルドテスト結果は含まれない
- ⚠️ アクセスにはCloudflareアカウントが必要

---

## `.backups/` ディレクトリの運用

### ディレクトリ構造

`.backups/` ディレクトリは、自動化スクリプトによって以下の構造で管理されます：

```
.backups/
├── build-integrated/                      # ビルド前のdist/バックアップ
│   └── 2025-11-02T10-30-00-000Z/
│       └── dist/
├── project-config-sample-docs/            # プロジェクト設定ファイルのバックアップ
│   └── 2025-11-02T11-26-23-407Z/
│       └── apps/sample-docs/src/config/project.config.json
├── category-sync-sample-docs/             # カテゴリ同期時のバックアップ
│   └── 2025-11-02T12-15-30-123Z/
│       └── apps/sample-docs/src/config/project.config.json
└── language-addition-2025-11-02T14-20-10-456Z/  # 言語追加時のバックアップ
    ├── apps/sample-docs/src/config/project.config.json
    └── sites/landing/src/config/projects.config.json
```

### バックアップのシナリオ別分類

| シナリオ名 | 作成タイミング | 含まれる内容 | 想定サイズ |
|-----------|--------------|-------------|----------|
| `build-integrated` | ビルド実行時（`dist/` 削除前） | `dist/` ディレクトリ全体 | 数MB〜数十MB |
| `project-config-{project}` | プロジェクト設定更新前 | `project.config.json` | 数KB |
| `category-sync-{project}` | カテゴリ同期実行時 | `project.config.json` | 数KB |
| `language-addition-{timestamp}` | 言語追加実行時 | 変更されたすべての設定ファイル | 数KB〜数十KB |

### 保持期間とクリーンアップ

#### 推奨保持期間

- **設定ファイルのバックアップ**（`project-config-*`, `category-sync-*`）: **7日間**
- **ビルド成果物のバックアップ**（`build-integrated`）: **3回分**（または7日間、いずれか少ない方）
- **言語追加のバックアップ**（`language-addition-*`）: **7日間**

#### 手動クリーンアップ方法

**7日以上前のバックアップをすべて削除：**
```bash
find .backups -type d -mtime +7 -mindepth 1 -maxdepth 1 -exec rm -rf {} +
```

**特定のシナリオのみ削除：**
```bash
# build-integratedのバックアップで最新3つ以外を削除
cd .backups/build-integrated
ls -t | tail -n +4 | xargs rm -rf
```

**ディスク使用量の確認：**
```bash
# バックアップ全体のサイズ
du -sh .backups

# シナリオ別のサイズ
du -sh .backups/*

# 詳細な内訳
du -sh .backups/*/* | sort -h
```

#### 定期メンテナンスの推奨スケジュール

- **週次**（毎週月曜日など）:
  ```bash
  # サイズ確認
  du -sh .backups

  # 必要に応じて古いバックアップを削除
  find .backups -type d -mtime +7 -mindepth 1 -maxdepth 1 -exec rm -rf {} +
  ```

- **月次**:
  - `.backups/` の全体的な見直し
  - 不要なシナリオディレクトリの削除
  - バックアップ戦略の見直し

---

## 復元手順

### ケース1: 設定ファイルの復元

プロジェクト設定ファイル（`project.config.json`）が破損した、または意図しない変更が加わった場合：

**手順：**

1. **最新のバックアップを確認：**
   ```bash
   # sample-docsプロジェクトの例
   ls -lt .backups/project-config-sample-docs/
   ```

2. **バックアップの内容を確認：**
   ```bash
   cat .backups/project-config-sample-docs/2025-11-02T11-26-23-407Z/apps/sample-docs/src/config/project.config.json
   ```

3. **復元を実行：**
   ```bash
   cp .backups/project-config-sample-docs/2025-11-02T11-26-23-407Z/apps/sample-docs/src/config/project.config.json \
      apps/sample-docs/src/config/project.config.json
   ```

4. **復元後の確認：**
   ```bash
   # 設定ファイルの内容を確認
   cat apps/sample-docs/src/config/project.config.json

   # ビルドが成功するか確認
   cd apps/sample-docs
   pnpm build
   ```

### ケース2: ビルド成果物の復元

ビルドに失敗した、または予期しない結果になった場合：

**手順：**

1. **最新のdistバックアップを確認：**
   ```bash
   ls -lt .backups/build-integrated/
   ```

2. **バックアップサイズを確認（完全性チェック）：**
   ```bash
   du -sh .backups/build-integrated/2025-11-02T10-30-00-000Z/dist
   ```

3. **現在のdistを削除して復元：**
   ```bash
   rm -rf dist
   cp -r .backups/build-integrated/2025-11-02T10-30-00-000Z/dist ./dist
   ```

4. **復元後の確認：**
   ```bash
   # プレビューサーバーで確認
   pnpm preview
   ```

### ケース3: 言語追加の失敗からの復旧

言語追加スクリプトがエラーで中断した場合：

**自動ロールバック（推奨）：**

通常、`add-language.js` スクリプトはエラー発生時に自動でロールバックを実行します：

```
❌ エラーが発生しました: ...
🔄 変更をロールバック中...
✅ ロールバック完了
```

**手動復旧が必要な場合：**

1. **バックアップディレクトリを特定：**
   ```bash
   ls -lt .backups/ | grep language-addition
   # 例: language-addition-2025-11-02T14-20-10-456Z
   ```

2. **バックアップ内容を確認：**
   ```bash
   find .backups/language-addition-2025-11-02T14-20-10-456Z -type f
   ```

3. **各ファイルを復元：**
   ```bash
   # project.config.json の復元
   cp .backups/language-addition-2025-11-02T14-20-10-456Z/apps/sample-docs/src/config/project.config.json \
      apps/sample-docs/src/config/project.config.json

   # projects.config.json の復元
   cp .backups/language-addition-2025-11-02T14-20-10-456Z/sites/landing/src/config/projects.config.json \
      sites/landing/src/config/projects.config.json
   ```

4. **作成されたディレクトリを手動削除：**
   ```bash
   # エラーメッセージから作成されたパスを確認し、削除
   rm -rf apps/sample-docs/src/content/docs/v2/de
   ```

5. **復元後の確認：**
   ```bash
   # 設定ファイルの内容を確認
   cat apps/sample-docs/src/config/project.config.json

   # サイドバー生成が成功するか確認
   pnpm build:sidebar
   ```

### ケース4: Gitコミット後の復元

Gitにコミットした変更を取り消したい場合：

**コミット直後（プッシュ前）の取り消し：**
```bash
# 直前のコミットを取り消す（変更は保持）
git reset --soft HEAD~1

# 直前のコミットを完全に取り消す（変更も破棄）
git reset --hard HEAD~1
```

**特定のファイルのみ以前の状態に戻す：**
```bash
# 特定のファイルを1つ前のコミットの状態に戻す
git checkout HEAD~1 -- apps/sample-docs/src/config/project.config.json

# 変更をコミット
git add apps/sample-docs/src/config/project.config.json
git commit -m "設定ファイルを以前の状態に戻す"
```

**複数コミット前の状態に戻す：**
```bash
# コミット履歴を確認
git log --oneline

# 特定のコミットまで戻す（例: abc1234）
git reset --hard abc1234
```

---

## 各バックアップ層の活用方法

### Git（日常的なバージョン管理）

**作業開始前のチェックリスト：**
```bash
# 1. 現在の状態を確認
git status

# 2. 最新版を取得
git pull

# 3. 作業用ブランチを作成
git checkout -b feature/update-docs

# 4. 変更を実施
# ... ドキュメント編集など ...

# 5. こまめにコミット
git add .
git commit -m "ドキュメント更新: XXX"
```

**問題が発生した場合：**
```bash
# 作業ディレクトリの変更を破棄（コミット前）
git checkout -- .

# 特定のファイルの変更を破棄
git checkout -- apps/sample-docs/src/content/docs/v2/ja/01-guide/01-getting-started.mdx

# 直前のコミットを取り消す
git reset --hard HEAD~1
```

### 自動バックアップ（`.backups/` ディレクトリ）

**バックアップが作成されるスクリプト：**

| スクリプト | バックアップタイミング | 確認方法 |
|-----------|---------------------|---------|
| `build-integrated.js` | `dist/` 削除前 | `ls -lt .backups/build-integrated/` |
| `add-language.js` | 言語追加開始時 | `ls -lt .backups/ \| grep language-addition` |
| `create-project.js` | プロジェクト設定更新前 | `ls -lt .backups/project-config-*/` |
| `document-utils.js` | カテゴリ同期時 | `ls -lt .backups/category-sync-*/` |

**バックアップの確認：**
```bash
# すべてのバックアップをタイムスタンプ順に表示
find .backups -type d -maxdepth 2 -mindepth 2 -exec ls -ld {} \; | sort -k6,7

# 最新のバックアップのみ表示
find .backups -type d -maxdepth 2 -mindepth 2 | while read dir; do
  echo "$dir: $(ls -t "$dir" 2>/dev/null | head -1)"
done
```

### Cloudflare Pages（本番環境のロールバック）

**デプロイ履歴の確認とロールバック：**

1. **Cloudflareダッシュボードにアクセス：**
   - https://dash.cloudflare.com/ にログイン
   - Pages → `libx` プロジェクトを選択

2. **デプロイ履歴を確認：**
   - "Deployments" タブをクリック
   - 各デプロイのタイムスタンプ、コミットハッシュ、ステータスを確認

3. **以前のデプロイにロールバック：**
   - ロールバックしたいデプロイをクリック
   - "Rollback to this deployment" ボタンをクリック
   - 確認ダイアログで "Rollback" を選択

4. **ロールバック後の確認：**
   - デプロイが完了するまで数分待機
   - 本番サイトにアクセスして動作確認

**注意点：**
- ⚠️ ロールバックはビルド成果物のみを戻します（ソースコードは変更されません）
- ⚠️ 最新のソースコードと本番サイトの不一致が発生する可能性があります
- ⚠️ ロールバック後は、ソースコードも適切なコミットに戻すことを推奨します

---

## ベストプラクティス

### 作業前の確認事項

**破壊的操作を実行する前に必ず確認：**

```bash
# 1. Gitの状態を確認
git status

# 2. コミットされていない重要な変更があればコミット
git add .
git commit -m "作業前のコミット"

# 3. ブランチを作成（大きな変更の場合）
git checkout -b feature/major-changes

# 4. バックアップディレクトリの容量を確認
du -sh .backups

# 5. 古いバックアップを削除（必要に応じて）
find .backups -type d -mtime +7 -mindepth 1 -maxdepth 1 -exec rm -rf {} +
```

### 自動化スクリプト実行時のベストプラクティス

#### `--dry-run` オプションの活用

多くのスクリプトは `--dry-run` オプションをサポートしています：

```bash
# 言語追加のドライラン（実際には変更しない）
node scripts/add-language.js sample-docs de --dry-run

# 実行されるアクションを確認してから本実行
node scripts/add-language.js sample-docs de
```

#### 処理結果の確認

スクリプト実行後は必ず以下を確認：

```bash
# 1. バックアップが作成されたか確認
ls -lt .backups/

# 2. 変更内容をGitで確認
git status
git diff

# 3. ビルドが成功するか確認
pnpm build:sidebar
pnpm build:local

# 4. 問題なければコミット
git add .
git commit -m "変更内容の説明"
```

### 定期的なメンテナンス

#### 週次チェック（毎週月曜日など）

```bash
# バックアップディレクトリのサイズ確認
du -sh .backups
du -sh .backups/* | sort -h

# 7日以上前のバックアップを削除
find .backups -type d -mtime +7 -mindepth 1 -maxdepth 1 -exec rm -rf {} +
```

#### 月次メンテナンス

```bash
# 1. バックアップの全体的な見直し
ls -la .backups/

# 2. 不要なシナリオディレクトリを削除
rm -rf .backups/obsolete-scenario-name/

# 3. ビルド成果物のバックアップは最新3つのみ保持
cd .backups/build-integrated
ls -t | tail -n +4 | xargs rm -rf
cd ../..

# 4. ディスク使用量の再確認
du -sh .backups
```

#### デプロイ後の確認

```bash
# 1. デプロイが成功したことを確認
# Cloudflareダッシュボードまたはコマンドで確認

# 2. 本番サイトにアクセスして動作確認
# https://dolphilia.github.io/libx/

# 3. 問題があればロールバック
# Cloudflareダッシュボードから以前のデプロイにロールバック
```

---

## トラブルシューティング

### Q1: バックアップディレクトリが肥大化している

**症状：**
```bash
$ du -sh .backups
1.5G    .backups
```

**原因：**
- ビルド成果物（`dist/`）のバックアップが大量に蓄積している
- 古いバックアップが自動削除されない

**解決方法：**

```bash
# 1. 何が容量を使っているか確認
du -sh .backups/* | sort -h

# 2. build-integratedのバックアップを最新3つのみ残す
cd .backups/build-integrated
ls -t | tail -n +4 | xargs rm -rf
cd ../..

# 3. 7日以上前のバックアップを削除
find .backups -type d -mtime +7 -mindepth 1 -maxdepth 1 -exec rm -rf {} +

# 4. 結果を確認
du -sh .backups
```

### Q2: スクリプトがエラーで中断したが、ロールバックされなかった

**症状：**
- 言語追加スクリプトがエラーで終了
- 「ロールバック中...」のメッセージが表示されなかった
- 設定ファイルが中途半端な状態になっている

**原因：**
- 予期しないエラーでロールバック処理が実行されなかった
- バックアップは作成されているが、復元が必要

**解決方法：**

```bash
# 1. 最新の言語追加バックアップを確認
ls -lt .backups/ | grep language-addition
# 出力例: language-addition-2025-11-02T14-20-10-456Z

# 2. バックアップに含まれるファイルを確認
find .backups/language-addition-2025-11-02T14-20-10-456Z -type f

# 3. 各ファイルを手動で復元
cp .backups/language-addition-2025-11-02T14-20-10-456Z/apps/sample-docs/src/config/project.config.json \
   apps/sample-docs/src/config/project.config.json

cp .backups/language-addition-2025-11-02T14-20-10-456Z/sites/landing/src/config/projects.config.json \
   sites/landing/src/config/projects.config.json

# 4. スクリプトが作成した不完全なディレクトリを削除
# （エラーメッセージから作成されたパスを確認）
rm -rf apps/sample-docs/src/content/docs/v2/de

# 5. 復元を確認
git status
git diff
```

### Q3: どのバックアップから復元すべきかわからない

**症状：**
- `.backups/` に複数のバックアップが存在
- どれが最適な復元ポイントか判断できない

**解決方法：**

```bash
# 1. タイムスタンプ付きでバックアップを一覧表示
find .backups -type d -maxdepth 2 -mindepth 2 | while read dir; do
  timestamp=$(basename "$dir")
  scenario=$(basename "$(dirname "$dir")")
  echo "$timestamp | $scenario | $dir"
done | sort

# 2. Gitのコミット履歴と照合
git log --oneline --since="2025-11-01" --until="2025-11-03"

# 3. バックアップのタイムスタンプとGitログのタイムスタンプを比較
# 例: 2025-11-02T11-26-23-407Z → 2025年11月2日 11:26:23 UTC

# 4. 問題が発生する直前のバックアップを選択
# 通常は最新のバックアップが最適

# 5. バックアップの内容を確認してから復元
cat .backups/project-config-sample-docs/2025-11-02T11-26-23-407Z/apps/sample-docs/src/config/project.config.json
```

### Q4: ビルドが失敗するが、原因がわからない

**症状：**
```bash
$ pnpm build
❌ Build failed
```

**解決方法：**

```bash
# 1. サイドバー生成から試す（よくある原因）
pnpm build:sidebar

# 2. 個別のアプリをビルドしてエラー箇所を特定
cd apps/sample-docs
pnpm build

# 3. 設定ファイルが壊れていないか確認
cat src/config/project.config.json | jq .
# jqがエラーを出す場合、JSONが壊れている

# 4. 設定ファイルが壊れていた場合、バックアップから復元
cp ../../.backups/project-config-sample-docs/[最新のタイムスタンプ]/apps/sample-docs/src/config/project.config.json \
   src/config/project.config.json

# 5. 再度ビルドを試す
pnpm build
```

### Q5: Cloudflare Pagesのロールバックができない

**症状：**
- ダッシュボードに「Rollback to this deployment」ボタンが表示されない
- ロールバックを実行してもエラーになる

**原因：**
- 最新のデプロイにはロールバックできない
- デプロイが失敗している場合、ロールバック先として選択できない

**解決方法：**

```bash
# 1. 正常にデプロイされたバージョンを特定
# Cloudflareダッシュボードで "Success" ステータスのデプロイを確認

# 2. 該当するGitコミットを特定
# デプロイに表示されているコミットハッシュをメモ

# 3. ローカルでそのコミットをチェックアウト
git checkout [コミットハッシュ]

# 4. 再ビルド・再デプロイ
pnpm build:deploy
pnpm deploy:pages

# 5. 成功したら、mainブランチも該当コミットに戻す（必要に応じて）
git checkout main
git reset --hard [コミットハッシュ]
git push --force-with-lease
```

### Q6: `.backups/` ディレクトリが存在しない

**症状：**
- バックアップが見つからない
- `.backups/` ディレクトリ自体が存在しない

**原因：**
- 初回実行時はまだバックアップが作成されていない
- `.backups/` を誤って削除した

**解決方法：**

```bash
# 1. .backups/ ディレクトリを作成
mkdir -p .backups

# 2. 自動化スクリプトを実行すると自動で作成される
# 例: ビルドを実行
pnpm build

# 3. バックアップが作成されたことを確認
ls -la .backups/

# 注意: .backups/ はGit管理外（.gitignore:212）なので、
# 削除しても次回スクリプト実行時に自動で再作成されます
```

---

## 参考資料

### 関連ドキュメント

- [CLAUDE.md](../CLAUDE.md) - プロジェクト全体のガイド
- [BUILD_AND_DEPLOYMENT_GUIDE.md](BUILD_AND_DEPLOYMENT_GUIDE.md) - ビルドとデプロイの詳細
- [LANGUAGE_ADDITION_GUIDE.md](LANGUAGE_ADDITION_GUIDE.md) - 言語追加の手順
- [PROJECT_PRINCIPLES.md](../notes/PROJECT_PRINCIPLES.md) - プロジェクトの設計原則

### バックアップに関連するスクリプト

- `scripts/safety-utils.js` - 統一バックアップユーティリティ
- `scripts/add-language.js` - 言語追加スクリプト（自動ロールバック機能付き）
- `scripts/build-integrated.js` - 統合ビルドスクリプト（dist/バックアップ機能付き）
- `scripts/document-utils.js` - ドキュメント管理ユーティリティ

### Git関連リソース

- [Git公式ドキュメント](https://git-scm.com/doc)
- [Git - 取り消し操作](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E5%8F%96%E3%82%8A%E6%B6%88%E3%81%97%E6%93%8D%E4%BD%9C)

### Cloudflare Pages関連リソース

- [Cloudflare Pages ドキュメント](https://developers.cloudflare.com/pages/)
- [デプロイのロールバック](https://developers.cloudflare.com/pages/configuration/rollbacks/)

---

## まとめ

libxプロジェクトのバックアップ戦略：

✅ **Gitでソースコードを日常的に管理**
✅ **自動バックアップ（`.backups/`）で破壊的操作から保護**
✅ **Cloudflare Pagesで本番環境を保護**

このガイドに従うことで、安全で効率的な開発・運用が可能になります。不明点があれば、関連ドキュメントを参照するか、プロジェクト管理者に相談してください。
