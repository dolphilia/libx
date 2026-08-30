---
title: "git-tips/tips"
description: "Gitの日常操作、履歴、ブランチ、設定、取り消しコマンドをまとめた定本スナップショット"
licenseSource: "github-git-tips-tips-readme-md"
---

## git-tips
> `git-tips`のコレクションです。ヒントを追加する場合は[contributing.md](https://github.com/git-tips/tips/blob/727551c5dab24c7b1d63814222a06f9d01546bc4/contributing.md)を確認してください。

[English](http://git.io/git-tips) | [中文](https://github.com/521xueweihan/git-tips) | [Русский](https://github.com/Imangazaliev/git-tips) | [한국어](https://github.com/mingrammer/git-tips) | [Tiếng Việt](https://github.com/hprobotic/git-tips) | [日本語](https://github.com/isotai/git-tips) | [नेपाली](https://github.com/amarduwal/git-tips) | [Polski](https://github.com/mbiesiad/tips) | [فارسی](https://github.com/javadnikbakht/git-tips)

### __ツール:__

* [git-tip](https://www.npmjs.com/package/git-tip) - これらのヒントを効率よく利用するための便利なCLI（[Dockerコンテナー版](https://github.com/djoudi5/docker-git-tip)）。

📖 **[対話型GitBookドキュメントはこちら](https://git-tips.github.io/tips/)**

追記: すべてのコマンドは`git version 2.7.4 (Apple Git-66)`で検証されています。

## 目次

* [基本操作](#basic-operations)
  * [指定コミットまでの全ファイルを一覧表示](#list-of-all-files-till-a-commit)
  * [直前のブランチへ素早く切り替える](#quickly-switch-to-the-previous-branch)
  * [リモートブランチを削除](#delete-remote-branch)
  * [リモートタグを削除](#delete-remote-tag)
  * [インデックス（ステージ）の内容でローカル変更を取り消す](#undo-local-changes-with-the-content-in-indexstaging)
  * [直前のコミットメッセージを書き換える](#reword-the-previous-commit-message)
  * [現在のブランチだけのコミット履歴を表示](#see-commit-history-for-just-the-current-branch)
  * [作者情報を修正](#amend-author)
  * [変更ファイル全体ではなく一部だけをステージ](#stage-parts-of-a-changed-file-instead-of-the-entire-file)
  * [cherry-pickで別ブランチのコミットを取り込む](#pick-commits-across-branches-using-cherry-pick)
  * [スタッシュから単一ファイルを取り出す](#grab-a-single-file-from-a-stash)
  * [リポジトリから新しいワークツリーを作成（Git 2.5）](#create-new-working-tree-from-a-repository-git-25)
  * [HEADの状態から新しいワークツリーを作成](#create-new-working-tree-from-head-state)
  * [現在のブランチにありmasterへ未マージの全コミットを表示](#show-all-commits-in-the-current-branch-yet-to-be-merged-to-master)
  * [コミットメッセージを変えずに直前のコミットを修正](#modify-previous-commit-without-modifying-the-commit-message)
  * [リモートで削除済みのブランチ参照を整理](#prunes-references-to-remove-branches-that-have-been-deleted-in-the-remote)
  * [最初のリビジョンのコミットハッシュを取得](#retrieve-the-commit-hash-of-the-initial-revision)
  * [バンドルからインポート](#import-from-a-bundle)
  * [コミット時に1ファイルを無視（例: Changelog）](#ignore-one-file-on-commit-eg-changelog)
  * [ID指定のプルリクエストをローカルブランチへ取得](#fetch-pull-request-by-id-to-a-local-branch)
  * [削除したファイルを復元](#restore-deleted-file)
  * [特定のコミットハッシュの状態へファイルを復元](#restore-file-to-a-specific-commit-hash)
  * [以前のコミットに対する修正としてマーク](#marks-your-commit-as-a-fix-of-a-previous-commit)
  * [ステージ領域を経由せずコミット](#skip-staging-area-during-commit)
  * [対話的にステージ](#interactive-staging)
  * [無視対象ファイルの状態を表示](#status-of-ignored-files)
  * [履歴のない新規ブランチをチェックアウト](#checkout-a-new-branch-without-any-history)
  * [二分探索で原因コミットを特定](#find-guilty-with-binary-search)
  * [pre-commitとcommit-msgフックを迂回](#bypass-pre-commit-and-commit-msg-githooks)
  * [単一ブランチだけをクローン](#clone-a-single-branch)
  * [新規ブランチを作成して切り替える](#create-and-switch-new-branch)
  * [ローカルブランチを最新コミット順に表示](#show-all-local-branches-ordered-by-recent-commits)
  * [リポジトリをシャロークローン](#clone-a-shallow-copy-of-a-repository)
  * [リモートリポジトリへ強制プッシュ](#force-push-to-remote-repository)
  * [コミットを作者とタイトルでグループ化](#group-commits-by-authors-and-title)
  * [他者の作業を上書きしない安全な強制プッシュ](#forced-push-but-still-ensure-you-dont-overwrite-others-work)
  * [ブランチ内のコミット数](#number-of-commits-in-a-branch)
  * [オブジェクトノートを追加](#add-object-notes)
  * [別リポジトリのコミットを適用](#apply-commit-from-another-repository)
  * [特定の参照をフェッチ](#specific-fetch-reference)
  * [未確定変更の概要を生成](#generates-a-summary-of-pending-changes)
  * [Git状態を短縮表示](#show-git-status-short)
  * [1日前より前のコミットをチェックアウト](#checkout-a-commit-prior-to-a-day-ago)
  * [現在のブランチをリモートの同名ブランチへプッシュ](#push-the-current-branch-to-the-same-name-on-the-remote-repository)
  * [新しいローカルブランチをリモートへプッシュして追跡](#push-a-new-local-branch-to-remote-repository-and-track)
  * [サブモジュールを最新コミットへ更新](#update-a-submodule-to-the-latest-commit)
  * [リポジトリを複製](#duplicating-a-repository)
  * [スパースチェックアウトで特定ディレクトリだけをクローン](#sparse-checkout-clone-only-specific-directories)
  * [出力を列形式で表示](#show-output-in-columns)
  * [ワークツリーを一覧表示](#list-worktrees)
  * [ワークツリーを削除](#remove-a-worktree)
* [ブランチ操作](#branching)
  * [masterへマージ済みの全ブランチを一覧表示](#list-all-branches-that-are-already-merged-into-master)
  * [masterへマージ済みのブランチを削除](#remove-branches-that-have-already-been-merged-with-master)
  * [全ブランチ、上流、最終コミットを一覧表示](#list-all-branches-and-their-upstreams-as-well-as-last-commit-on-branch)
  * [上流ブランチを追跡](#track-upstream-branch)
  * [ローカルブランチを削除](#delete-local-branch)
  * [ローカル・リモートの全ブランチを取得](#get-list-of-all-local-and-remote-branches)
  * [リモートブランチだけを取得](#get-only-remote-branches)
  * [指定コミットハッシュを含むブランチを検索](#find-out-branches-containing-commit-hash)
  * [ブランチ名を変更](#rename-a-branch)
  * [`master`ブランチをアーカイブ](#archive-the-master-branch)
  * [リモートでsquashマージ済みのローカルブランチを削除](#delete-local-branches-that-has-been-squash-and-merged-in-the-remote)
  * [履歴付きブランチをファイルへエクスポート](#export-a-branch-with-history-to-a-file)
  * [現在のブランチ名を取得](#get-the-name-of-current-branch)
  * [現在のブランチの最新タグを表示](#show-the-most-recent-tag-on-the-current-branch)
  * [WIPの全ブランチを一覧表示](#list-all-branch-is-wip)
  * [整形済みパッチファイル](#preformatted-patch-file)
  * [ブランチへ切り替える（checkoutの新しい代替）](#switch-to-a-branch-modern-alternative-to-checkout)
* [ログと履歴](#log-and-history)
  * [Git付属の役立つガイドを表示](#show-helpful-guides-that-come-with-git)
  * [内容から変更を検索](#search-change-by-content)
  * [特定ファイルの時系列変更を表示](#show-changes-over-time-for-specific-file)
  * [競合中の全ファイルを一覧表示](#list-all-the-conflicted-files)
  * [コミットで変更された全ファイルを一覧表示](#list-of-all-files-changed-in-a-commit)
  * [前回コミット以降の未ステージ変更](#unstaged-changes-since-last-commit)
  * [コミット用にステージした変更](#changes-staged-for-commit)
  * [ステージ済み・未ステージ変更を両方表示](#show-both-staged-and-unstaged-changes)
  * [2週間前からの変更を表示](#what-changed-since-two-weeks)
  * [masterから分岐後の全コミットを表示](#see-all-commits-made-since-forking-from-master)
  * [追跡中の全ファイルを表示](#show-all-tracked-files)
  * [未追跡の全ファイルを表示](#show-all-untracked-files)
  * [無視対象の全ファイルを表示](#show-all-ignored-files)
  * [バージョンツリーを可視化](#visualize-the-version-tree)
  * [reflogからのみ参照されるコミットを含めてツリーを可視化](#visualize-the-tree-including-commits-that-are-only-referenced-from-reflogs)
  * [単語単位のインライン差分を表示](#show-inline-word-diff)
  * [一般的な差分ツールで変更を表示](#show-changes-using-common-diff-tools)
  * [Branch2にないBranch1のコミット](#commits-in-branch1-that-are-not-in-branch2)
  * [直近n件のコミットを一覧表示](#list-n-last-commits)
  * [競合中の全ファイルをエディターで開く](#open-all-conflicted-files-in-an-editor)
  * [コミットログのGPG署名を表示](#view-the-gpg-signatures-in-the-commit-log)
  * [別ブランチからファイルを取り出す](#extract-file-from-another-branch)
  * [ルートコミットとマージコミットだけを表示](#list-only-the-root-and-merge-commits)
  * [名前変更をまたいで特定ファイルのコミットと変更を表示](#list-commits-and-changes-to-a-specific-file-even-through-renaming)
  * [全ブランチのコミットログから指定テキストを検索](#search-commit-log-across-all-branches-for-given-text)
  * [masterから見たブランチ最初のコミットを取得](#get-first-commit-in-a-branch-from-master)
  * [指定ファイルの各行について作者・時刻・最終リビジョンを表示](#show-the-author-time-and-last-revision-made-to-each-line-of-a-given-file)
  * [作者ごとの寄与行数を表示](#show-how-many-lines-does-an-author-contribute)
  * [すべてのgit notesを表示](#show-all-the-git-notes)
  * [未プッシュのGitコミットを一覧表示](#list-unpushed-git-commits)
  * [空白だけの変更を除いてすべて追加](#add-everything-but-whitespace-changes)
  * [指定範囲をblame](#blame-on-certain-range)
  * [Gitの論理変数を表示](#show-a-git-logical-variable)
  * [リポジトリ名を取得](#get-the-repo-name)
  * [指定期間のログ](#logs-between-date-range)
  * [ログから作者を除外](#exclude-author-from-logs)
  * [直前コミットの変更詳細を展開表示](#view-expanded-details-of-changes-in-last-commit)
  * [過去30日間のHEAD位置を可視化](#visualize-each-position-of-head-in-the-last-30-days)
  * [リベース前後のブランチを比較](#compare-two-versions-of-a-rebased-branch)
  * [テストスクリプトでbisectを自動化](#automate-bisect-with-a-test-script)
  * [行範囲を指定してblame](#blame-with-line-range)
  * [blameで移動・コピーされた行を検出](#detect-moved-or-copied-lines-in-blame)
  * [グラフ付きoneline形式でログ表示](#log-with-graph-in-oneline-format)
  * [ファイルが削除されたコミットを検索](#find-commits-where-a-file-was-deleted)
  * [期間別・作者別のコミット数を表示](#show-commit-count-per-author-per-time-period)
  * [コミット署名を検証](#verify-commit-signatures)
  * [単語単位の差分を色付きで表示](#show-diff-with-word-level-granularity-using-color)
* [マージとリベース](#merging-and-rebasing)
  * ['feature'を'master'へリベースしてmasterへマージ](#rebases-feature-to-master-and-merges-it-in-to-master-)
  * [リベース前に変更をスタッシュ](#stash-changes-before-rebasing)
  * [fixupコミットを通常コミットへsquash](#squash-fixup-commits-normal-commits)
  * [対話的リベースで直前2コミットを変更](#change-previous-two-commits-with-an-interactive-rebase)
  * [2ブランチの共通祖先を検索](#find-common-ancestor-of-two-branches)
  * [ブランチのベースを変更](#change-a-branch-base)
  * [fixupコミットを作成して自動squash](#create-a-fixup-commit-and-auto-squash)
  * [ルートコミットから対話的にリベース](#rebase-interactively-from-the-root-commit)
* [その他](#miscellaneous)
  * [日常Gitを約20コマンドで](#everyday-git-in-twenty-commands-or-so)
  * [ファイルを削除せず追跡解除](#untrack-files-without-deleting)
  * [追跡ファイルの変更を考慮しない](#dont-consider-changes-for-tracked-file)
  * [変更がリリースに含まれるか確認](#check-if-the-change-was-a-part-of-a-release)
  * [無視対象ファイルを一覧表示](#list-ignored-files)
  * [未パックオブジェクト数とディスク使用量を集計](#count-unpacked-number-of-objects-and-their-disk-consumption)
  * [オブジェクトDBから到達不能オブジェクトをすべて除去](#prune-all-unreachable-objects-from-the-object-database)
  * [作業リポジトリをgitwebですぐ閲覧](#instantly-browse-your-working-repository-in-gitweb)
  * [追跡ファイルからパターン（正規表現または文字列）に一致する行を検索](#find-lines-matching-the-pattern-regex-or-string-in-tracked-files)
  * [未追跡ファイルをバックアップ](#backup-untracked-files)
  * [複数パッチをメール送信](#send-a-collection-of-patches-as-emails)
* [リモート](#remotes)
  * [リモートURLを変更](#changing-a-remotes-url)
  * [全リモート参照を取得](#get-list-of-all-remote-references)
  * [リモート名を追加](#adding-remote-name)
  * [設定済みの全リモートを一覧表示](#list-all-currently-configured-remotes)
  * [リモートリポジトリの参照を一覧表示](#list-references-in-a-remote-repository)
  * [リモートブランチ一覧を更新](#refresh-the-list-of-remote-branches)
  * [オフライン共有用バンドルを作成](#create-a-bundle-file-for-offline-sharing)
  * [バンドルファイルからクローン](#clone-from-a-bundle-file)
  * [部分クローンでblobを除外し高速取得](#partial-clone-clone-without-blobs-for-faster-fetch)
* [セットアップと設定](#setup-and-config)
  * [プッシュ後の履歴から機密データを削除](#remove-sensitive-data-from-history-after-a-push)
  * [グローバル設定変更後に作者情報を再設定](#reset-author-after-author-has-been-changed-in-the-global-config)
  * [GitのBash補完を取得](#get-git-bash-completion)
  * [Gitエイリアス](#git-aliases)
  * [pull時は常にmergeでなくrebase](#always-rebase-instead-of-merge-on-pull)
  * [全エイリアスと設定を一覧表示](#list-all-the-alias-and-configs)
  * [Gitで大文字小文字を区別](#make-git-case-sensitive)
  * [カスタムエディターを追加](#add-custom-editors)
  * [タイプミスを自動修正](#auto-correct-typos)
  * [競合解決を記録して再利用](#reuse-recorded-resolution-record-and-reuse-previous-conflicts-resolutions)
  * [グローバル設定の項目を削除](#remove-entry-in-the-global-config)
  * [コミット時にファイルモード変更を無視](#ignore-file-mode-changes-on-commits)
  * [Gitの端末カラー出力を無効化](#turn-off-git-colored-terminal-output)
  * [個別の色設定](#specific-color-settings)
  * [エイリアス: git undo](#alias-git-undo)
  * [[ローカル/グローバル] Git設定を編集](#edit-localglobal-git-config)
  * [全Gitエイリアスを一覧表示](#list-all-git-aliases)
  * [リモート接続にHTTPSでなくSSHを使用](#use-ssh-instead-of-https-for-remotes)
  * [LFからCRLFへの自動置換を防止](#prevent-auto-replacing-lf-with-crlf)
  * [各レベルの設定を編集](#edit-config-for-each-level)
  * [バックグラウンド保守を有効化して操作を高速化](#enable-background-maintenance-for-faster-operations)
  * [GPGでなくSSH鍵でコミット署名](#sign-commits-with-ssh-key-instead-of-gpg)
  * [rerereで再発するマージ競合を自動解決](#enable-rerere-to-auto-resolve-recurring-merge-conflicts)
  * [新規リポジトリの既定ブランチ名を設定](#set-default-branch-name-for-new-repos)
* [スタッシュ](#stashing)
  * [追跡ファイルの現在状態をコミットせず保存](#saving-current-state-of-tracked-files-without-committing)
  * [追跡ファイルの未ステージ変更を保存](#saving-current-state-of-unstaged-changes-to-tracked-files)
  * [未追跡ファイルを含めて現在状態を保存](#saving-current-state-including-untracked-files)
  * [メッセージ付きで現在状態を保存](#saving-current-state-with-message)
  * [無視・未追跡・追跡中の全ファイル状態を保存](#saving-current-state-of-all-files-ignored-untracked-and-tracked)
  * [保存済みスタッシュを一覧表示](#show-list-of-all-saved-stashes)
  * [任意のスタッシュ内容をパッチ形式で表示](#show-the-contents-of-any-stash-in-patch-form)
  * [一覧から削除せず任意のスタッシュを適用](#apply-any-stash-without-deleting-from-the-stashed-list)
  * [最後のスタッシュを適用して一覧から削除](#apply-last-stashed-state-and-delete-it-from-stashed-list)
  * [保存済みスタッシュをすべて削除](#delete-all-stored-stashes)
  * [未ステージ変更だけをスタッシュ](#stash-only-unstaged-changes)
  * [特定ファイルをスタッシュ](#stash-specific-files)
  * [スタッシュのdiffstat概要を表示](#show-a-diffstat-summary-of-a-stash)
* [サブモジュールとサブツリー](#submodules-and-subtrees)
  * [全サブモジュールを更新](#update-all-the-submodules)
  * [Git追跡中のサブフォルダーをgh-pagesへ配備](#deploying-git-tracked-subfolder-to-gh-pages)
  * [subtreeでプロジェクトをリポジトリへ追加](#adding-a-project-to-repo-using-subtree)
  * [subtreeで連携プロジェクトの最新変更を取得](#get-latest-changes-in-your-repo-for-a-linked-project-using-subtree)
* [タグ](#tagging)
  * [ローカルタグを作成](#create-local-tag)
  * [ローカルタグを削除](#delete-local-tag)
* [変更の取り消し](#undoing-changes)
  * [リモートと同期してローカル変更を上書き](#sync-with-remote-overwrite-local-changes)
  * [最初のコミットへGit reset](#git-reset-first-commit)
  * [Reset: 未コミットのローカル変更を保持](#reset-preserve-uncommitted-local-changes)
  * [Revert: 新しいコミットを作成してコミットを取り消す](#revert-undo-a-commit-by-creating-a-new-commit)
  * [Reset: コミットを破棄（非公開ブランチ向け）](#reset-discard-commits-advised-for-private-branch)
  * [未追跡ファイル・ディレクトリの削除前にdry-runで一覧確認](#before-deleting-untracked-filesdirectory-do-a-dry-run-to-get-the-list-of-these-filesdirectories)
  * [未追跡ファイルを強制削除](#forcefully-remove-untracked-files)
  * [未追跡ディレクトリを強制削除](#forcefully-remove-untracked-directory)
  * [assume-unchangedを取り消す](#undo-assume-unchanged)
  * [`.gitignore`対象ファイルをクリーン](#clean-the-files-from-gitignore)
  * [dry-run（対応する任意のコマンドで実行可能）](#dry-run-any-command-that-supports-dry-run-flag-should-do)
  * [ステージ済みファイルをステージ解除](#unstaging-staged-file)
  * [Revert: マージ全体を取り消す](#revert-reverting-an-entire-merge)
  * [ファイルを復元（reset/checkout --の新しい代替）](#restore-file-modern-alternative-to-resetcheckout---)

## 基本操作

### 指定コミットまでの全ファイルを一覧表示
```sh
git ls-tree --name-only -r <commit-ish>
```

### 直前のブランチへ素早く切り替える
```sh
git checkout -
```
**Alternatives:**
```sh
git checkout @{-1}
```

### リモートブランチを削除
```sh
git push origin --delete <remote_branchname>
```
**Alternatives:**
```sh
git push origin :<remote_branchname>
```
```sh
git branch -dr <remote/branch>
```

### リモートタグを削除
```sh
git push origin :refs/tags/<tag-name>
```

### インデックス（ステージ）の内容でローカル変更を取り消す
```sh
git checkout -- <file_name>
```
**Alternatives:**
```sh
git restore <file_name>
```

### 直前のコミットメッセージを書き換える
```sh
git commit -v --amend
```

### 現在のブランチだけのコミット履歴を表示
```sh
git cherry -v master
```

### 作者情報を修正
```sh
git commit --amend --author='Author Name <email@address.com>'
```

### 変更ファイル全体ではなく一部だけをステージ
```sh
git add -p
```

### cherry-pickで別ブランチのコミットを取り込む
```sh
git checkout <branch-name> && git cherry-pick <commit-ish>
```

### スタッシュから単一ファイルを取り出す
```sh
git checkout <stash@{n}> -- <file_path>
```
**Alternatives:**
```sh
git checkout stash@{0} -- <file_path>
```

### リポジトリから新しいワークツリーを作成（Git 2.5）
```sh
git worktree add -b <branch-name> <path> <start-point>
```

### HEADの状態から新しいワークツリーを作成
```sh
git worktree add --detach <path> HEAD
```

### 現在のブランチにありmasterへ未マージの全コミットを表示
```sh
git cherry -v master
```
**Alternatives:**
```sh
git cherry -v master <branch-to-be-merged>
```

### コミットメッセージを変えずに直前のコミットを修正
```sh
git add --all && git commit --amend --no-edit
```

### リモートで削除済みのブランチ参照を整理
```sh
git fetch -p
```
**Alternatives:**
```sh
git remote prune origin
```

### 最初のリビジョンのコミットハッシュを取得
```sh
 git rev-list --reverse HEAD | head -1
```
**Alternatives:**
```sh
git rev-list --max-parents=0 HEAD
```
```sh
git log --pretty=oneline | tail -1 | cut -c 1-40
```
```sh
git log --pretty=oneline --reverse | head -1 | cut -c 1-40
```

### バンドルからインポート
```sh
git clone repo.bundle <repo-dir> -b <branch-name>
```

### コミット時に1ファイルを無視（例: Changelog）
```sh
git update-index --assume-unchanged Changelog; git commit -a; git update-index --no-assume-unchanged Changelog
```

### ID指定のプルリクエストをローカルブランチへ取得
```sh
git fetch origin pull/<id>/head:<branch-name>
```
**Alternatives:**
```sh
git pull origin pull/<id>/head:<branch-name>
```

### 削除したファイルを復元
```sh
git checkout <deleting_commit> -- <file_path>
```

### 特定のコミットハッシュの状態へファイルを復元
```sh
git checkout <commit-ish> -- <file_path>
```

### 以前のコミットに対する修正としてマーク
```sh
git commit --fixup <SHA-1>
```

### ステージ領域を経由せずコミット
```sh
git commit --only <file_path>
```

### 対話的にステージ
```sh
git add -i
```

### 無視対象ファイルの状態を表示
```sh
git status --ignored
```

### 履歴のない新規ブランチをチェックアウト
```sh
git checkout --orphan <branch_name>
```

### 二分探索で原因コミットを特定
```sh
git bisect start                    # Search start 
git bisect bad                      # Set point to bad commit 
git bisect good v2.6.13-rc2         # Set point to good commit|tag 
git bisect bad                      # Say current state is bad 
git bisect good                     # Say current state is good 
git bisect reset                    # Finish search 

```

### pre-commitとcommit-msgフックを迂回
```sh
git commit --no-verify
```

### 単一ブランチだけをクローン
```sh
git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

### 新規ブランチを作成して切り替える
```sh
git checkout -b <branch-name>
```
**Alternatives:**
```sh
git branch <branch-name> && git checkout <branch-name>
```
```sh
git switch -c <branch-name>
```

### ローカルブランチを最新コミット順に表示
```sh
git for-each-ref --sort=-committerdate --format='%(refname:short)' refs/heads/
```

### リポジトリをシャロークローン
```sh
git clone https://github.com/user/repo.git --depth 1
```

### リモートリポジトリへ強制プッシュ
```sh
git push -f <remote-name> <branch-name>
```

### コミットを作者とタイトルでグループ化
```sh
git shortlog
```

### 他者の作業を上書きしない安全な強制プッシュ
```sh
git push --force-with-lease <remote-name> <branch-name>
```

### ブランチ内のコミット数
```sh
git rev-list --count <branch-name>
```

### オブジェクトノートを追加
```sh
git notes add -m 'Note on the previous commit....'
```

### 別リポジトリのコミットを適用
```sh
git --git-dir=<source-dir>/.git format-patch -k -1 --stdout <SHA1> | git am -3 -k
```

### 特定の参照をフェッチ
```sh
git fetch origin master:refs/remotes/origin/mymaster
```

### 未確定変更の概要を生成
```sh
git request-pull v1.0 https://git.ko.xz/project master:for-linus
```

### Git状態を短縮表示
```sh
git status --short --branch
```

### 1日前より前のコミットをチェックアウト
```sh
git checkout master@{yesterday}
```

### 現在のブランチをリモートの同名ブランチへプッシュ
```sh
git push origin HEAD
```

### 新しいローカルブランチをリモートへプッシュして追跡
```sh
git push -u origin <branch_name>
```

### サブモジュールを最新コミットへ更新
```sh
cd <path-to-submodule>
git pull origin <branch>
cd <root-of-your-main-project>
git add <path-to-submodule>
git commit -m "submodule updated"
```

### リポジトリを複製
```sh
git clone --bare https://github.com/exampleuser/old-repository.git

git push --mirror https://github.com/exampleuser/new-repository.git
```

### スパースチェックアウトで特定ディレクトリだけをクローン
```sh
git clone --filter=blob:none --sparse <url> && cd <repo> && git sparse-checkout set <dir1> <dir2>
```

### 出力を列形式で表示
```sh
git branch --column
```
**Alternatives:**
```sh
git tag --column
```

### ワークツリーを一覧表示
```sh
git worktree list
```

### ワークツリーを削除
```sh
git worktree remove <path>
```
**Alternatives:**
```sh
git worktree prune
```

## ブランチ操作

### masterへマージ済みの全ブランチを一覧表示
```sh
git branch --merged master
```

### masterへマージ済みのブランチを削除
```sh
git branch --merged master | grep -v '^\*' | xargs -n 1 git branch -d
```
**Alternatives:**
```sh
git branch --merged master | grep -v '^\*\|  master' | xargs -n 1 git branch -d # will not delete master if master is not checked out
```

### 全ブランチ、上流、最終コミットを一覧表示
```sh
git branch -vv
```

### 上流ブランチを追跡
```sh
git branch -u origin/mybranch
```

### ローカルブランチを削除
```sh
git branch -d <local_branchname>
```

### ローカル・リモートの全ブランチを取得
```sh
git branch -a
```

### リモートブランチだけを取得
```sh
git branch -r
```

### 指定コミットハッシュを含むブランチを検索
```sh
git branch -a --contains <commit-ish>
```
**Alternatives:**
```sh
git branch --contains <commit-ish>
```

### ブランチ名を変更
```sh
git branch -m <new-branch-name>
```
**Alternatives:**
```sh
git branch -m [<old-branch-name>] <new-branch-name>
```

### `master`ブランチをアーカイブ
```sh
git archive master --format=zip --output=master.zip
```

### リモートでsquashマージ済みのローカルブランチを削除
```sh
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -D
```

### 履歴付きブランチをファイルへエクスポート
```sh
git bundle create <file> <branch-name>
```

### 現在のブランチ名を取得
```sh
git rev-parse --abbrev-ref HEAD
```

### 現在のブランチの最新タグを表示
```sh
git describe --tags --abbrev=0
```

### WIPの全ブランチを一覧表示
```sh
git checkout master && git branch --no-merged
```

### 整形済みパッチファイル
```sh
git format-patch -M upstream..topic
```

### ブランチへ切り替える（checkoutの新しい代替）
```sh
git switch <branch-name>
```
**Alternatives:**
```sh
git switch -c <new-branch-name>
```

## ログと履歴

### Git付属の役立つガイドを表示
```sh
git help -g
```

### 内容から変更を検索
```sh
git log -S'<a term in the source>'
```

### 特定ファイルの時系列変更を表示
```sh
git log -p <file_name>
```

### 競合中の全ファイルを一覧表示
```sh
git diff --name-only --diff-filter=U
```

### コミットで変更された全ファイルを一覧表示
```sh
git diff-tree --no-commit-id --name-only -r <commit-ish>
```

### 前回コミット以降の未ステージ変更
```sh
git diff
```

### コミット用にステージした変更
```sh
git diff --cached
```
**Alternatives:**
```sh
git diff --staged
```

### ステージ済み・未ステージ変更を両方表示
```sh
git diff HEAD
```

### 2週間前からの変更を表示
```sh
git log --no-merges --raw --since='2 weeks ago'
```
**Alternatives:**
```sh
git whatchanged --since='2 weeks ago'
```

### masterから分岐後の全コミットを表示
```sh
git log --no-merges --stat --reverse master..
```

### 追跡中の全ファイルを表示
```sh
git ls-files -t
```

### 未追跡の全ファイルを表示
```sh
git ls-files --others
```

### 無視対象の全ファイルを表示
```sh
git ls-files --others -i --exclude-standard
```

### バージョンツリーを可視化
```sh
git log --pretty=oneline --graph --decorate --all
```
**Alternatives:**
```sh
gitk --all
```
```sh
git log --graph --pretty=format:'%C(auto) %h | %s | %an | %ar%d'
```

### reflogからのみ参照されるコミットを含めてツリーを可視化
```sh
git log --graph --decorate --oneline $(git rev-list --walk-reflogs --all)
```

### 単語単位のインライン差分を表示
```sh
git diff --word-diff
```

### 一般的な差分ツールで変更を表示
```sh
git difftool [-t <tool>] <commit1> <commit2> <path>
```

### Branch2にないBranch1のコミット
```sh
git log Branch1 ^Branch2
```

### 直近n件のコミットを一覧表示
```sh
git log -<n>
```
**Alternatives:**
```sh
git log -n <n>
```

### 競合中の全ファイルをエディターで開く
```sh
git diff --name-only | uniq | xargs $EDITOR
```

### コミットログのGPG署名を表示
```sh
git log --show-signature
```

### 別ブランチからファイルを取り出す
```sh
git show <branch_name>:<file_name>
```

### ルートコミットとマージコミットだけを表示
```sh
git log --first-parent
```

### 名前変更をまたいで特定ファイルのコミットと変更を表示
```sh
git log --follow -p -- <file_path>
```

### 全ブランチのコミットログから指定テキストを検索
```sh
git log --all --grep='<given-text>'
```

### masterから見たブランチ最初のコミットを取得
```sh
git log --oneline master..<branch-name> | tail -1
```
**Alternatives:**
```sh
git log --reverse master..<branch-name> | head -6
```

### 指定ファイルの各行について作者・時刻・最終リビジョンを表示
```sh
git blame <file-name>
```

### 作者ごとの寄与行数を表示
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | gawk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s removed lines: %s total lines: %s
", add, subs, loc }' -
```
**Alternatives:**
```sh
git log --author='_Your_Name_Here_' --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s
", add, subs, loc }' - # on Mac OSX
```

### すべてのgit notesを表示
```sh
git log --show-notes='*'
```

### 未プッシュのGitコミットを一覧表示
```sh
git log --branches --not --remotes
```
**Alternatives:**
```sh
git log @{u}..
```
```sh
git cherry -v
```

### 空白だけの変更を除いてすべて追加
```sh
git diff --ignore-all-space | git apply --cached
```

### 指定範囲をblame
```sh
git blame -L <start>,<end>
```

### Gitの論理変数を表示
```sh
git var -l | <variable>
```

### リポジトリ名を取得
```sh
git rev-parse --show-toplevel
```

### 指定期間のログ
```sh
git log --since='FEB 1 2017' --until='FEB 14 2017'
```

### ログから作者を除外
```sh
git log --perl-regexp --author='^((?!excluded-author-regex).*)$'
```

### 直前コミットの変更詳細を展開表示
```sh
git show
```

### 過去30日間のHEAD位置を可視化
```sh
git reflog
```

### リベース前後のブランチを比較
```sh
git range-diff <base>..<old-tip> <base>..<new-tip>
```
**Alternatives:**
```sh
git range-diff <rev1>...<rev2>
```

### テストスクリプトでbisectを自動化
```sh
git bisect start <bad> <good> && git bisect run <script>
```

### 行範囲を指定してblame
```sh
git blame -L <start>,<end> <file>
```
**Alternatives:**
```sh
git blame -L :'<funcname>' <file>
```

### blameで移動・コピーされた行を検出
```sh
git blame -M -C <file>
```
**Alternatives:**
```sh
git blame -C -C -C <file>
```

### グラフ付きoneline形式でログ表示
```sh
git log --oneline --graph --all --decorate
```

### ファイルが削除されたコミットを検索
```sh
git log --diff-filter=D --summary | grep delete
```
**Alternatives:**
```sh
git log --all --full-history -- <file>
```

### 期間別・作者別のコミット数を表示
```sh
git shortlog -sn --since='1 year ago'
```
**Alternatives:**
```sh
git shortlog -sne --all
```

### コミット署名を検証
```sh
git verify-commit <commit>
```
**Alternatives:**
```sh
git log --show-signature
```

### 単語単位の差分を色付きで表示
```sh
git diff --color-words
```
**Alternatives:**
```sh
git diff --word-diff=color
```

## マージとリベース

### 'feature'を'master'へリベースしてmasterへマージ
```sh
git rebase master feature && git checkout master && git merge -
```

### リベース前に変更をスタッシュ
```sh
git rebase --autostash
```

### fixupコミットを通常コミットへsquash
```sh
git rebase -i --autosquash
```

### 対話的リベースで直前2コミットを変更
```sh
git rebase --interactive HEAD~2
```

### 2ブランチの共通祖先を検索
```sh
git merge-base <branch-name> <other-branch-name>
```

### ブランチのベースを変更
```sh
git rebase --onto <new_base> <old_base>
```

### fixupコミットを作成して自動squash
```sh
git commit --fixup=<commit> && git rebase -i --autosquash <commit>~1
```

### ルートコミットから対話的にリベース
```sh
git rebase -i --root
```

## その他

### 日常Gitを約20コマンドで
```sh
git help everyday
```

### ファイルを削除せず追跡解除
```sh
git rm --cached <file_path>
```
**Alternatives:**
```sh
git rm --cached -r <directory_path>
```

### 追跡ファイルの変更を考慮しない
```sh
git update-index --assume-unchanged <file_name>
```

### 変更がリリースに含まれるか確認
```sh
git name-rev --name-only <SHA-1>
```

### 無視対象ファイルを一覧表示
```sh
git check-ignore *
```

### 未パックオブジェクト数とディスク使用量を集計
```sh
git count-objects --human-readable
```

### オブジェクトDBから到達不能オブジェクトをすべて除去
```sh
git gc --prune=now --aggressive
```

### 作業リポジトリをgitwebですぐ閲覧
```sh
git instaweb [--local] [--httpd=<httpd>] [--port=<port>] [--browser=<browser>]
```

### 追跡ファイルからパターン（正規表現または文字列）に一致する行を検索
```sh
git grep --heading --line-number 'foo bar'
```

### 未追跡ファイルをバックアップ
```sh
git ls-files --others -i --exclude-standard | xargs zip untracked.zip
```

### 複数パッチをメール送信
```sh
git send-email [<options>] <file|directory>…

git send-email [<options>] <format-patch options>
```

## リモート

### リモートURLを変更
```sh
git remote set-url origin <URL>
```

### 全リモート参照を取得
```sh
git remote
```
**Alternatives:**
```sh
git remote show
```

### リモート名を追加
```sh
git remote add <remote-nickname> <remote-url>
```

### 設定済みの全リモートを一覧表示
```sh
git remote -v
```

### リモートリポジトリの参照を一覧表示
```sh
git ls-remote git://git.kernel.org/pub/scm/git/git.git
```

### リモートブランチ一覧を更新
```sh
git remote update origin --prune
```

### オフライン共有用バンドルを作成
```sh
git bundle create <file>.bundle --all
```
**Alternatives:**
```sh
git bundle create <file>.bundle <branch-name>
```

### バンドルファイルからクローン
```sh
git clone <file>.bundle <directory>
```

### 部分クローンでblobを除外し高速取得
```sh
git clone --filter=blob:none <url>
```
**Alternatives:**
```sh
git clone --filter=tree:0 <url>
```

## セットアップと設定

### プッシュ後の履歴から機密データを削除
```sh
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch <path-to-your-file>' --prune-empty --tag-name-filter cat -- --all && git push origin --force --all
```

### グローバル設定変更後に作者情報を再設定
```sh
git commit --amend --reset-author --no-edit
```

### GitのBash補完を取得
```sh
curl -L http://git.io/vfhol > ~/.git-completion.bash && echo '[ -f ~/.git-completion.bash ] && . ~/.git-completion.bash' >> ~/.bashrc
```

### Gitエイリアス
```sh
git config --global alias.<handle> <command> 
git config --global alias.st status
```

### pull時は常にmergeでなくrebase
```sh
git config --global pull.rebase true
```
**Alternatives:**
```sh
#git < 1.7.9
git config --global branch.autosetuprebase always
```

### 全エイリアスと設定を一覧表示
```sh
git config --list
```

### Gitで大文字小文字を区別
```sh
git config --global core.ignorecase false
```

### カスタムエディターを追加
```sh
git config --global core.editor '$EDITOR'
```

### タイプミスを自動修正
```sh
git config --global help.autocorrect 1
```

### 競合解決を記録して再利用
```sh
git config --global rerere.enabled 1
```

### グローバル設定の項目を削除
```sh
git config --global --unset <entry-name>
```

### コミット時にファイルモード変更を無視
```sh
git config core.fileMode false
```

### Gitの端末カラー出力を無効化
```sh
git config --global color.ui false
```

### 個別の色設定
```sh
git config --global <specific command e.g branch, diff> <true, false or always>
```

### エイリアス: git undo
```sh
git config --global alias.undo '!f() { git reset --hard $(git rev-parse --abbrev-ref HEAD)@{${1-1}}; }; f'
```

### [ローカル/グローバル] Git設定を編集
```sh
git config [--global] --edit
```

### 全Gitエイリアスを一覧表示
```sh
git config -l | grep alias | sed 's/^alias\.//g'
```
**Alternatives:**
```sh
git config -l | grep alias | cut -d '.' -f 2
```

### リモート接続にHTTPSでなくSSHを使用
```sh
git config --global url.'git@github.com:'.insteadOf 'https://github.com/'
```

### LFからCRLFへの自動置換を防止
```sh
git config --global core.autocrlf false
```

### 各レベルの設定を編集
```sh
git config --edit --system

git config --edit --global

git config --edit --local
```

### バックグラウンド保守を有効化して操作を高速化
```sh
git maintenance start
```
**Alternatives:**
```sh
git maintenance run --task=gc
```

### GPGでなくSSH鍵でコミット署名
```sh
git config gpg.format ssh && git config user.signingkey ~/.ssh/id_ed25519.pub && git commit -S -m '<message>'
```

### rerereで再発するマージ競合を自動解決
```sh
git config rerere.enabled true
```

### 新規リポジトリの既定ブランチ名を設定
```sh
git config --global init.defaultBranch main
```

## スタッシュ

### 追跡ファイルの現在状態をコミットせず保存
```sh
git stash
```
**Alternatives:**
```sh
git stash push
```

### 追跡ファイルの未ステージ変更を保存
```sh
git stash -k
```
**Alternatives:**
```sh
git stash --keep-index
```
```sh
git stash push --keep-index
```

### 未追跡ファイルを含めて現在状態を保存
```sh
git stash -u
```
**Alternatives:**
```sh
git stash push -u
```
```sh
git stash push --include-untracked
```

### メッセージ付きで現在状態を保存
```sh
git stash push -m <message>
```
**Alternatives:**
```sh
git stash push --message <message>
```

### 無視・未追跡・追跡中の全ファイル状態を保存
```sh
git stash -a
```
**Alternatives:**
```sh
git stash --all
```
```sh
git stash push --all
```

### 保存済みスタッシュを一覧表示
```sh
git stash list
```

### 任意のスタッシュ内容をパッチ形式で表示
```sh
git stash show -p <stash@{n}>
```

### 一覧から削除せず任意のスタッシュを適用
```sh
git stash apply <stash@{n}>
```

### 最後のスタッシュを適用して一覧から削除
```sh
git stash pop
```
**Alternatives:**
```sh
git stash apply stash@{0} && git stash drop stash@{0}
```

### 保存済みスタッシュをすべて削除
```sh
git stash clear
```
**Alternatives:**
```sh
git stash drop <stash@{n}>
```

### 未ステージ変更だけをスタッシュ
```sh
git stash push --keep-index
```

### 特定ファイルをスタッシュ
```sh
git stash push -m '<message>' <file1> <file2>
```

### スタッシュのdiffstat概要を表示
```sh
git stash show --stat <stash@{n}>
```
**Alternatives:**
```sh
git stash show -p <stash@{n}>
```

## サブモジュールとサブツリー

### 全サブモジュールを更新
```sh
git submodule foreach git pull
```
**Alternatives:**
```sh
git submodule update --init --recursive
```
```sh
git submodule update --remote
```

### Git追跡中のサブフォルダーをgh-pagesへ配備
```sh
git subtree push --prefix subfolder_name origin gh-pages
```
**Alternatives:**
```sh
git subtree push --prefix subfolder_name origin branch_name
```

### subtreeでプロジェクトをリポジトリへ追加
```sh
git subtree add --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

### subtreeで連携プロジェクトの最新変更を取得
```sh
git subtree pull --prefix=<directory_name>/<project_name> --squash git@github.com:<username>/<project_name>.git master
```

## タグ

### ローカルタグを作成
```sh
git tag <tag-name>
```

### ローカルタグを削除
```sh
git tag -d <tag-name>
```

## 変更の取り消し

### リモートと同期してローカル変更を上書き
```sh
git fetch origin && git reset --hard origin/master && git clean -f -d
```

### 最初のコミットへGit reset
```sh
git update-ref -d HEAD
```

### Reset: 未コミットのローカル変更を保持
```sh
git reset --keep <commit>
```

### Revert: 新しいコミットを作成してコミットを取り消す
```sh
git revert <commit-ish>
```

### Reset: コミットを破棄（非公開ブランチ向け）
```sh
git reset <commit-ish>
```

### 未追跡ファイル・ディレクトリの削除前にdry-runで一覧確認
```sh
git clean -n
```

### 未追跡ファイルを強制削除
```sh
git clean -f
```

### 未追跡ディレクトリを強制削除
```sh
git clean -f -d
```

### assume-unchangedを取り消す
```sh
git update-index --no-assume-unchanged <file_name>
```

### `.gitignore`対象ファイルをクリーン
```sh
git clean -X -f
```

### dry-run（対応する任意のコマンドで実行可能）
```sh
git clean -fd --dry-run
```

### ステージ済みファイルをステージ解除
```sh
git reset HEAD <file-name>
```

### Revert: マージ全体を取り消す
```sh
git revert -m 1 <commit-ish>
```

### ファイルを復元（reset/checkout --の新しい代替）
```sh
git restore <file-name>
```
**Alternatives:**
```sh
git restore --staged <file-name>
```

