---
title: "Awesome Git and Git Flow Cheat Sheet"
description: "Git and Git Flow Cheat Sheetを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-arslanbilal-git-cheat-sheet-readme-md"
---

# Awesome Git and Git Flow Cheat Sheet

Git and Git Flow Cheat Sheetを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 📖 概要 <a id="-about"></a>

この包括的なGitチートシートは、すべてを暗記せずにGitコマンドを使いこなすための早見表です。初心者から経験豊富な開発者まで、主要なGit操作を素早く確認できます。

**コントリビューションを歓迎します！** 次のような協力が可能です：
- 文法上の誤りを修正
- 新しいコマンドを追加
- 他の言語へ翻訳
- 説明を改善

---
## 📋 目次 <a id="-table-of-contents"></a>

- [🔧 セットアップ](#-setup)
- [⚙️ 設定ファイル](#️-configuration-files)
- [🆕 リポジトリの作成](#-create-repository)
- [📝 ローカルの変更](#-local-changes)
- [🔍 検索](#-search)
- [📖 コミット履歴](#-commit-history)
- [📁 移動／名前変更](#-move--rename)
- [🌿 ブランチとタグ](#-branches--tags)
- [🔄 更新と公開](#-update--publish)
- [🔀 マージとリベース](#-merge--rebase)
- [↩️ 取り消し](#️-undo)
- [🌊 Git Flow](#-git-flow)
- [🌍 その他の言語](#-other-languages)

---

## 🔧 セットアップ <a id="-setup"></a>

### 設定の表示 <a id="view-configuration"></a>

**現在の設定を表示：**
```bash
git config --list
```

**リポジトリ設定を表示：**
```bash
git config --local --list
```

**グローバル設定を表示：**
```bash
git config --global --list
```

**システム設定を表示：**
```bash
git config --system --list
```

### ユーザー設定 <a id="user-configuration"></a>

**バージョン履歴に記録する名前を設定：**
```bash
git config --global user.name "[firstname lastname]"
```

**メールアドレスを設定：**
```bash
git config --global user.email "[valid-email]"
```

### 表示とエディターの設定 <a id="display--editor-settings"></a>

**コマンドラインの自動色付けを有効化：**
```bash
git config --global color.ui auto
```

**コミット用のグローバルエディターを設定：**
```bash
git config --global core.editor vi
```

---

## ⚙️ 設定ファイル <a id="-configuration-files"></a>

| 適用範囲 | 場所 | コマンドフラグ |
|-------|----------|--------------|
| **リポジトリ** | `<repo>/.git/config` | `--local` |
| **ユーザー** | `~/.gitconfig` | `--global` |
| **システム** | `/etc/gitconfig` | `--system` |

---

## 🆕 リポジトリの作成 <a id="-create-repository"></a>

### 既存リポジトリのクローン <a id="clone-existing-repository"></a>

**SSHを使用：**
```bash
git clone ssh://user@domain.com/repo.git
```

**HTTPSを使用：**
```bash
git clone https://domain.com/user/repo.git
```

### 新しいリポジトリの初期化 <a id="initialize-new-repository"></a>

**現在のディレクトリにリポジトリを作成：**
```bash
git init
```

**指定したディレクトリにリポジトリを作成：**
```bash
git init <directory>
```

---

## 📝 ローカルの変更 <a id="-local-changes"></a>

### 状態と差分の確認 <a id="check-status--differences"></a>

**作業ディレクトリの状態を表示：**
```bash
git status
```

**追跡対象ファイルの変更を表示：**
```bash
git diff
```

**指定したファイルの変更を表示：**
```bash
git diff <file>
```

### 変更のステージング <a id="staging-changes"></a>

**現在の変更をすべて追加：**
```bash
git add .
```

**指定したファイルを追加：**
```bash
git add <filename1> <filename2>
```

**ファイルの一部を対話的に追加：**
```bash
git add -p <file>
```

### 変更のコミット <a id="committing-changes"></a>

**追跡対象ファイルの変更をすべてコミット：**
```bash
git commit -a
```

**ステージ済みの変更をコミット：**
```bash
git commit
```

**メッセージ付きでコミット：**
```bash
git commit -m 'message here'
```

**ステージングを省略してメッセージ付きでコミット：**
```bash
git commit -am 'message here'
```

**指定した日付でコミット：**
```bash
git commit --date="`date --date='n day ago'`" -am "<Commit Message Here>"
```

### 直前のコミットを変更 <a id="modify-last-commit"></a>

> ⚠️ **警告：** 公開済みコミットをamendしないでください。

**直前のコミットをamend：**
```bash
git commit -a --amend
```

**コミットメッセージを変えずにamend：**
```bash
git commit --amend --no-edit
```

**コミッター日時を変更：**
```bash
GIT_COMMITTER_DATE="date" git commit --amend
```

**作者日時を変更：**
```bash
git commit --amend --date="date"
```

### 変更のstash <a id="stashing-changes"></a>

**現在の変更を一時保存：**
```bash
git stash
```

**直前にstashした変更を適用：**
```bash
git stash apply
```

**指定したstashを適用：**
```bash
git stash apply stash@{stash_number}
```
> 利用可能なstashは`git stash list`で確認できます。

**直前のstashを削除：**
```bash
git stash drop
```

**未コミットの変更を別ブランチへ移動：**
```bash
git stash
git checkout branch2
git stash pop
```

---

## 🔍 検索 <a id="-search"></a>

### テキスト検索 <a id="text-search"></a>

**すべてのファイルからテキストを検索：**
```bash
git grep "Hello"
```

**指定したバージョンを検索：**
```bash
git grep "Hello" v2.5
```

### コミット検索 <a id="commit-search"></a>

**指定したキーワードを導入したコミットを検索：**
```bash
git log -S 'keyword'
```

**正規表現で検索：**
```bash
git log -S 'keyword' --pickaxe-regex
```

---

## 📖 コミット履歴 <a id="-commit-history"></a>

### 基本的な履歴 <a id="basic-history"></a>

**すべてのコミットを詳細表示：**
```bash
git log
```

**各コミットを1行で表示：**
```bash
git log --oneline
```

**指定した作者のコミットを表示：**
```bash
git log --author="username"
```

**指定したファイルの変更履歴を表示：**
```bash
git log -p <file>
```

### 高度な履歴 <a id="advanced-history"></a>

**ブランチを比較：**
```bash
git log --oneline <origin/master>..<remote/master> --left-right
```

**誰がいつ何を変更したか表示：**
```bash
git blame <file>
```

### 参照ログ <a id="reference-logs"></a>

**参照ログを表示：**
```bash
git reflog show
```

**参照ログを削除：**
```bash
git reflog delete
```

---

## 📁 移動／名前変更 <a id="-move--rename"></a>

**ファイル名を変更：**
```bash
git mv Index.txt Index.html
```

---

## 🌿 ブランチとタグ <a id="-branches--tags"></a>

### ブランチ一覧 <a id="list-branches"></a>

**ローカルブランチを一覧表示：**
```bash
git branch
```

**ローカルとリモートの全ブランチを一覧表示：**
```bash
git branch -a
```

**リモートブランチを一覧表示：**
```bash
git branch -r
```

**マージ済みブランチを一覧表示：**
```bash
git branch --merged
```

### ブランチの切り替えと作成 <a id="switch--create-branches"></a>

**既存ブランチへ切り替え：**
```bash
git checkout <branch>
```

**新しいブランチを作成して切り替え：**
```bash
git checkout -b <branch>
```

**直前のブランチへ切り替え：**
```bash
git checkout -
```

**既存ブランチから新しいブランチを作成：**
```bash
git checkout -b <new_branch> <existing_branch>
```

**指定したコミットからブランチを作成：**
```bash
git checkout <commit-hash> -b <new_branch_name>
```

**切り替えずにブランチを作成：**
```bash
git branch <new-branch>
```

**追跡ブランチを作成：**
```bash
git branch --track <new-branch> <remote-branch>
```

### ブランチ操作 <a id="branch-operations"></a>

**別ブランチから単一ファイルを取り出す：**
```bash
git checkout <branch> -- <filename>
```

**別ブランチの指定コミットを適用：**
```bash
git cherry-pick <commit hash>
```

**現在のブランチ名を変更：**
```bash
git branch -m <new_branch_name>
```

**ローカルブランチを削除：**
```bash
git branch -d <branch>
```

**ローカルブランチを強制削除：**
```bash
git branch -D <branch>
```
> ⚠️ **警告：** 未マージの変更は失われます。

### タグ <a id="tags"></a>

**HEADにタグを作成：**
```bash
git tag <tag-name>
```

**注釈付きタグを作成：**
```bash
git tag -a <tag-name>
```

**メッセージ付きタグを作成：**
```bash
git tag <tag-name> -am 'message here'
```

**すべてのタグを一覧表示：**
```bash
git tag
```

**タグをメッセージ付きで一覧表示：**
```bash
git tag -n
```

---

## 🔄 更新と公開 <a id="-update--publish"></a>

### リモート管理 <a id="remote-management"></a>

**設定済みリモートを一覧表示：**
```bash
git remote -v
```

**リモート情報を表示：**
```bash
git remote show <remote>
```

**新しいリモートを追加：**
```bash
git remote add <remote> <url>
```

**リモート名を変更：**
```bash
git remote rename <remote> <new_remote>
```

**リモートを削除：**
```bash
git remote rm <remote>
```
> ℹ️ **注：** 削除されるのはローカルのリモート参照だけで、リモートリポジトリ自体は削除されません。

### FetchとPull <a id="fetch--pull"></a>

**マージせずに変更を取得：**
```bash
git fetch <remote>
```

**変更を取得してマージ：**
```bash
git pull <remote> <branch>
```

**メインブランチから変更を取得：**
```bash
git pull origin master
```

**リベース付きでpull：**
```bash
git pull --rebase <remote> <branch>
```

### Pushと公開 <a id="push--publish"></a>

**ローカルの変更を公開：**
```bash
git push <remote> <branch>
```

**リモートブランチを削除：**
```bash
# Git v1.7.0+
git push <remote> --delete <branch>

# Git v1.5.0+
git push <remote> :<branch>
```

**タグを公開：**
```bash
git push --tags
```

---

## 🔀 マージとリベース <a id="-merge--rebase"></a>

### マージ操作 <a id="merge-operations"></a>

**ブランチを現在のHEADへマージ：**
```bash
git merge <branch>
```

**マージツールをグローバル設定：**
```bash
git config --global merge.tool meld
```

**設定済みのマージツールを使用：**
```bash
git mergetool
```

### リベース操作 <a id="rebase-operations"></a>

> ⚠️ **警告：** 公開済みコミットをリベースしないでください。

**現在のHEADをブランチ上へリベース：**
```bash
git rebase <branch>
```

**リベースを中止：**
```bash
git rebase --abort
```

**競合解決後にリベースを続行：**
```bash
git rebase --continue
```

### 競合の解決 <a id="conflict-resolution"></a>

**ファイルを解決済みとして記録：**
```bash
git add <resolved-file>
```

**解決済みファイルを削除：**
```bash
git rm <resolved-file>
```

### コミットのsquash <a id="squashing-commits"></a>

**対話的リベースでsquash：**
```bash
git rebase -i <commit-just-before-first>
```

**squash設定例：**
```
# 変更前
pick <commit_id>
pick <commit_id2>
pick <commit_id3>

# 変更後（commit_id2とcommit_id3をcommit_idへsquash）
pick <commit_id>
squash <commit_id2>
squash <commit_id3>
```

---

## ↩️ 取り消し <a id="-undo"></a>

### 変更の破棄 <a id="discard-changes"></a>

**ローカルの変更をすべて破棄：**
```bash
git reset --hard HEAD
```

**すべてのファイルをステージから外す：**
```bash
git reset HEAD
```

**指定したファイルの変更を破棄：**
```bash
git checkout HEAD <file>
```

### Reset操作 <a id="reset-operations"></a>

**以前のコミットへresetし、すべての変更を破棄：**
```bash
git reset --hard <commit>
```

**リモートブランチの状態へreset：**
```bash
git reset --hard <remote/branch>
# 例: git reset --hard upstream/master
```

**変更を未ステージ状態で保持してreset：**
```bash
git reset <commit>
```

**未コミットのローカル変更を保持してreset：**
```bash
git reset --keep <commit>
```

### コミットのrevert <a id="revert-commits"></a>

**コミットをrevertし、逆の変更を持つ新しいコミットを作成：**
```bash
git revert <commit>
```

### 無視対象ファイルの整理 <a id="clean-ignored-files"></a>

**誤ってコミットした、本来無視すべきファイルを追跡対象から外す：**
```bash
git rm -r --cached .
git add .
git commit -m "remove ignored files"
```

---

## 🌊 Git Flow <a id="-git-flow"></a>

**改良版Git-flow：** [git-flow-avh](https://github.com/petervanderdoes/gitflow-avh)

### 📋 目次 <a id="-table-of-contents-1"></a>
- [🔧 セットアップ](#setup-1)
- [🚀 はじめに](#getting-started)
- [✨ Feature](#features)
- [🎁 Releaseの作成](#make-a-release)
- [🔥 Hotfix](#hotfixes)
- [📊 コマンド概要](#commands-overview)

---

### 🔧 セットアップ {#setup-1}

> **前提条件：** 動作するGit環境が必要です。Git-flowはmacOS、Linux、Windowsで動作します。

**macOS (Homebrew):**
```bash
brew install git-flow-avh
```

**macOS (MacPorts):**
```bash
port install git-flow
```

**Linux（Debian系）：**
```bash
sudo apt-get install git-flow
```

**Windows (Cygwin):**
> wgetとutil-linuxが必要です。
```bash
wget -q -O - --no-check-certificate https://raw.githubusercontent.com/petervanderdoes/gitflow/develop/contrib/gitflow-installer.sh install <state> | bash
```

---

### 🚀 はじめに <a id="getting-started"></a>

プロジェクトに合わせてGit-flowを初期化します。

**対話形式で初期化：**
```bash
git flow init
```
> ブランチ命名規則について質問されます。既定値を推奨します。

**既定値で初期化：**
```bash
git flow init -d
```

---

### ✨ Feature <a id="features"></a>

Featureブランチは、次回リリース向けの新機能開発に使用します。通常は開発者のリポジトリ内だけに存在します。

**新しいFeatureを開始：**
```bash
git flow feature start MYFEATURE
```
> developを基点にFeatureブランチを作成し、そのブランチへ切り替えます。

**Featureを完了：**
```bash
git flow feature finish MYFEATURE
```
> 次の処理を行います：
> 1. MYFEATUREをdevelopへマージ
> 2. Featureブランチを削除
> 3. developへ戻る

**共同作業用にFeatureを公開：**
```bash
git flow feature publish MYFEATURE
```

**公開済みFeatureを取得：**
```bash
git flow feature pull origin MYFEATURE
```

**originのFeatureを追跡：**
```bash
git flow feature track MYFEATURE
```

---

### 🎁 Releaseの作成 <a id="make-a-release"></a>

Releaseブランチは、新しい本番リリースの準備に使用し、軽微なバグ修正やメタデータの整備を行えます。

**Releaseを開始：**
```bash
git flow release start RELEASE [BASE]
```
> developからReleaseブランチを作成します。必要に応じて[BASE]コミットのSHA-1を指定できます。

**Releaseを公開：**
```bash
git flow release publish RELEASE
```

**リモートのReleaseを追跡：**
```bash
git flow release track RELEASE
```

**Releaseを完了：**
```bash
git flow release finish RELEASE
```
> 次の処理を行います：
> 1. Releaseブランチをmasterへマージ
> 2. Releaseへタグを付与
> 3. Releaseをdevelopへバックマージ
> 4. Releaseブランチを削除

> 💡 **忘れずに：** `git push --tags`でタグをpushしてください。

---

### 🔥 Hotfix <a id="hotfixes"></a>

Hotfixは本番稼働中のバージョンにある重大な問題を修正します。master上の該当タグから分岐します。

**Hotfixを開始：**
```bash
git flow hotfix start VERSION [BASENAME]
```

**Hotfixを完了：**
```bash
git flow hotfix finish VERSION
```
> developとmasterの両方へマージし、master側のマージにタグを付けます。

---

### 📊 コマンド概要 <a id="commands-overview"></a>

<p align="center">
    <img alt="Git Flow Commands" src="https://raw.githubusercontent.com/arslanbilal/git-cheat-sheet/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/Img/git-flow-commands.png" height="270" width="460">
</p>

### 🌊 Git Flow構成図 <a id="-git-flow-schema"></a>

<p align="center">
    <img alt="Git Flow Schema" src="https://raw.githubusercontent.com/arslanbilal/git-cheat-sheet/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/Img/git-flow-commands-without-flow.png">
</p>

---


## 🌍 その他の言語 <a id="-other-languages"></a>

このチートシートは複数の言語で利用できます：

| 言語 | リンク |
|----------|------|
| 🇸🇦 アラビア語 | [git-cheat-sheet-ar.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-ar.md) |
| 🇧🇩 ベンガル語 | [git-cheat-sheet-bn.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-bn.md) |
| 🇧🇷 ブラジルポルトガル語 | [git-cheat-sheet-pt_BR.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-pt_BR.md) |
| 🇨🇳 中国語 | [git-cheat-sheet-zh.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-zh.md) |
| 🇩🇪 ドイツ語 | [git-cheat-sheet-de.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-de.md) |
| 🇬🇷 ギリシャ語 | [git-cheat-sheet-el.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-el.md) |
| 🇮🇳 ヒンディー語 | [git-cheat-sheet-hi.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-hi.md) |
| 🇰🇷 韓国語 | [git-cheat-sheet-ko.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-ko.md) |
| 🇵🇱 ポーランド語 | [git-cheat-sheet-pl.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-pl.md) |
| 🇪🇸 スペイン語 | [git-cheat-sheet-es.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-es.md) |
| 🇹🇷 トルコ語 | [git-cheat-sheet-tr.md](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/other-sheets/git-cheat-sheet-tr.md) |

---

## 🤝 コントリビューション <a id="-contributing"></a>

コントリビューションを歓迎します。次のような協力が可能です：

- 🐛 バグや誤字を報告
- ✨ 新しいGitコマンドを追加
- 🌍 新しい言語へ翻訳
- 💡 説明を改善
- 📝 書式を改善

**コントリビューション方法：**
1. このリポジトリをforkする
2. Featureブランチを作成する（`git checkout -b feature/AmazingFeature`）
3. 変更をコミットする（`git commit -m 'Add some AmazingFeature'`）
4. ブランチへpushする（`git push origin feature/AmazingFeature`）
5. Pull Requestを作成する

---

## 📄 ライセンス <a id="-license"></a>

このプロジェクトはオープンソースで、[MIT License](https://github.com/arslanbilal/git-cheat-sheet/blob/4098de6b02a1a9ccb0f7e1eb8b6da29d91c67841/LICENSE)の下で利用できます。

---

<p align="center">
    <b>⭐ 役に立った場合は、このリポジトリにスターを付けてください。</b>
</p>
