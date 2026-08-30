---
title: "compscilauren/awesome-git-hooks"
description: "compscilauren/awesome-git-hooks の定本スナップショット"
licenseSource: "github-compscilauren-awesome-git-hooks-readme-md"
---

<h1 align="center">
  <a href="https://git-scm.com/">
  <img width="455" src="https://github.com/compscilauren/awesome-git-hooks/blob/master/git-logo.png" alt="Awesome Git Hooks"></a><br>Awesome Git Hooks
</h1>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge-flat2.svg" alt="Awesome Lists"></a>
  <a href="https://github.com/CompSciLauren/awesome-git-hooks/blob/master/CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs welcome"></a>
</p>

# Awesome Git Hooks

> :anchor: Gitワークフロー中のタスクを自動化する、使いやすいGitフック。

Gitフックは、Gitコマンドの実行前後にトリガーされるタスクを自動化するために使えるカスタムスクリプトです。フックにはクライアント側とサーバー側の2つのグループがあります。クライアント側フックはコミットやマージなどの操作でトリガーされ、サーバー側フックはプッシュされたコミットの受信などネットワーク操作で実行されます。このリポジトリには、さまざまな目的に合わせて容易にカスタマイズできる多様なGitフックスクリプトと役立つリソースが含まれています。

:heavy_check_mark: インストール／ダウンロードは不要

:heavy_check_mark: コードは十分に文書化されています

:heavy_check_mark: すぐに使えます！使用したいコードをコピーして、.git/hooksフォルダーに貼り付けてください

貢献は常に歓迎します！[貢献ガイドライン](https://github.com/compscilauren/awesome-git-hooks/blob/417f78654fc5064afbfb14ce92fe8c281c33f3c9/CONTRIBUTING.md)をご覧ください。また、以下に欲しいスクリプトが見つからない場合は、リクエストするために[新しいissueを作成](https://github.com/CompSciLauren/awesome-git-hooks/issues/new?assignees=&labels=enhancement&template=new-git-hook-script-request.md&title=)できます。

## 目次

- [Gitフックスクリプト](#git-hook-scripts)
  - [commit-msg](#commit-msg)
  - [post-checkout](#post-checkout)
  - [post-update](#post-update)
  - [pre-commit](#pre-commit)
  - [prepare-commit-msg](#prepare-commit-msg)
  - [pre-push](#pre-push)
  - [pre-rebase](#pre-rebase)
  - [query-watchman](#query-watchman)
  - [update](#update)
- [クイックスタート](#quick-start)
- [ツール](#tools)
- [文書ガイド](#written-guides)
- [動画ガイド](#video-guides)

## Gitフックスクリプト

注: 各スクリプトの隣のアイコンは、記述言語を表します。

| icon                                                     | language |
| -------------------------------------------------------- | -------- |
| <img width="14" src="bash-icon.png" alt="Bash Icon">     | `bash`   |
| <img width="14" src="python-icon.png" alt="Python Icon"> | `python` |
| <img width="14" src="perl-icon.png" alt="Perl Icon">     | `perl`   |

### commit-msg

- [enforce-insert-issue-number](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/commit-msg-hooks/enforce-insert-issue-number.hook) - prepare-commit-msg/insert-issue-number.hookが生成したISSUE-\[#]文字列をユーザーが削除していないことを確認します。<img width="14" src="python-icon.png" alt="Python Icon">

### post-checkout

- [delete-pyc-files](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/post-checkout-hooks/delete-pyc-files.hook) - 新しいブランチをチェックアウトするたびに、すべての.pycファイルを削除します。<img width="14" src="python-icon.png" alt="Python Icon">
- [new-branch-alert](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/post-checkout-hooks/new-branch-alert.hook) - 新しいブランチを初めてチェックアウトしたときにメッセージを表示します。<img width="14" src="bash-icon.png" alt="Bash Icon">

### post-update

- [update-server-info](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/post-update-hooks/update-server-info.hook) - dumb transport（例: http）で使用するためにpack済みリポジトリを準備します。<img width="14" src="bash-icon.png" alt="Bash Icon">

### pre-commit

- [dotenvx](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/pre-commit-hooks/dotenvx.hook) - `.env`ファイルをコードへコミットすることを防ぎます。<img width="14" src="bash-icon.png" alt="Bash Icon">
- [format-code](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/pre-commit-hooks/format-code.hook) - コードをフォーマットするコマンドを実行し、フォーマット後に変更されたファイルを再追加します。<img width="14" src="bash-icon.png" alt="Bash Icon">
- [search-term](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/pre-commit-hooks/search-term.hook) - コード内で特定の用語が見つかった場合にコミットを失敗させます。<img width="14" src="bash-icon.png" alt="Bash Icon">
- [spell-check-md-files](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/pre-commit-hooks/spell-check-md-files.hook) - 拡張子.mdのファイルのスペルミスを確認します。<img width="14" src="bash-icon.png" alt="Bash Icon">
- [verify-name-and-email](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/pre-commit-hooks/verify-name-and-email.hook) - user.nameまたはuser.emailが正しくない場合にコミットを失敗させます。<img width="14" src="bash-icon.png" alt="Bash Icon">

### prepare-commit-msg

- [include-git-diff-name-status](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/prepare-commit-msg-hooks/include-git-diff-name-status.hook) - "Git status"出力の直前に、"Git diff --name-status -r"の出力をメッセージへ含めます。<img width="14" src="bash-icon.png" alt="Bash Icon">
- [insert-issue-number](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/prepare-commit-msg-hooks/insert-issue-number.hook) - コミットメッセージの先頭へissue番号を挿入します。<img width="14" src="python-icon.png" alt="Python Icon">

### pre-push

- [prevent-bad-push](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/pre-push-hooks/prevent-bad-push.hook) - ログメッセージが"WIP"（作業中）で始まるコミットのpushを防ぎます。<img width="14" src="bash-icon.png" alt="Bash Icon">

### pre-rebase

- [prevent-rebase](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/pre-rebase-hooks/prevent-rebase.hook) - すでに'next'ブランチへマージされたトピックブランチのrebaseを防ぎます。許可すると、すでに公開された履歴がrebaseされるためです。<img width="14" src="bash-icon.png" alt="Bash Icon">

### query-watchman

- [fsmonitor-watchman](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/query-watchman-hooks/fsmonitor-watchman.hook) - 指定時刻以降に変更されたすべてのファイルをstdoutへ出力します。<img width="14" src="perl-icon.png" alt="Perl Icon">

### update

- [update](https://github.com/CompSciLauren/awesome-git-hooks/blob/master/update-hooks/prevent-unannotated-tags.hook) - 注釈なしタグの流入をブロックします。<img width="14" src="bash-icon.png" alt="Bash Icon">

## クイックスタート

1. 任意のフックを選んでください。どこから始めるかわからない場合は、"verify-name-and-email"を試してください。
2. プロジェクトのフックフォルダー（.git/hooks）へ移動します。
3. その中にすでにファイルのリストがあるはずです。使用したい正確なコミットタイプ（例: "commit-msg"、"pre-rebase"、"pre-commit"など）という新規ファイルを作成してください。拡張子は付けないでください。

![create new file](https://raw.githubusercontent.com/compscilauren/awesome-git-hooks/417f78654fc5064afbfb14ce92fe8c281c33f3c9/create-new-file.gif)

4. 新しいファイルを開き、このリポジトリから選んだフックのコードを貼り付けます（例: [verify-name-and-email.hook](https://github.com/CompSciLauren/git-hooks/blob/master/pre-commit-hooks/verify-name-and-email.hook)）
5. ファイルを保存します。完了です。Gitフックが自動的にトリガーされます。

## ツール

- [Husky](https://github.com/typicode/husky) - 優れたユーザーインターフェースでGitフックを管理します。

- [Overcommit](https://github.com/sds/overcommit) - 完全に設定可能かつ拡張可能なGitフックマネージャー。

- [Git Build Hook Maven Plugin](https://github.com/rudikershaw/git-build-hook) - Mavenビルド中にGitフックと設定をインストールします。

- [CaptainHook](https://github.com/CaptainHookPhp/captainhook) - PHP開発者向けGitフックマネージャー。

- [pre-commit](https://github.com/pre-commit/pre-commit) - 多言語pre-commitフックを管理・保守するためのフレームワーク。

## 文書ガイド

- [Git hooks documentation at git-scm.com](https://git-scm.com/docs/githooks)

- [Git Pro book by Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)

- [An Introduction to Git Hooks](https://www.sitepoint.com/introduction-git-hooks/)

- [Atlassian Tutorial on Git Hooks](https://www.atlassian.com/ru/git/tutorials/git-hooks)

- [Easy Git hooks with husky](https://www.vojtechruzicka.com/githooks-husky/)

- [Git Hooked](https://www.javascriptjanuary.com/blog/git-hooked 'Git Hooked')

- [How To Use Git Hooks To Automate Development and Deployment Tasks](https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks)

- [Automate Your Workflow with Git Hooks](https://hackernoon.com/automate-your-workflow-with-git-hooks-fef5d9b2a58c)

- [Using JavaScript in Your Git Hooks](https://medium.com/@Sergeon/using-javascript-in-your-git-hooks-f0ce09477334 'Using JavaScript in Your Git Hooks')

- [An In-Depth Look at Git Hooks](https://dzone.com/articles/an-in-depth-look-at-git-hooks)

- [Git hooks and practical uses. Yes, even on Windows.](https://www.tygertec.com/git-hooks-practical-uses-windows/)

- [Automatically Manage Git Hooks with Direnv](https://knpw.rs/blog/direnv-git-hooks)

## 動画ガイド

- [Git Hooks Part 1 - Getting Started](https://www.youtube.com/watch?v=aB3eq52sZSU)

- [Git hooks and practical uses. Yes, even on Windows.](http://www.youtube.com/watch?feature=player_embedded&v=fMYv6-SZsSo&t=140s)

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)<br />この作品は<a rel="license" href="http://creativecommons.org/licenses/by/1.0/">Creative Commons Attribution 1.0 International License</a>の下でライセンスされています。
