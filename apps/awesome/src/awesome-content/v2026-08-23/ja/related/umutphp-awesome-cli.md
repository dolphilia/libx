---
title: "umutphp/awesome-cli"
description: "umutphp/awesome-cli の定本スナップショット"
licenseSource: "github-umutphp-awesome-cli-readme-md"
---

# Awesome CLI

Awesome CLI は、[Awesome](https://github.com/sindresorhus/awesome) リストをたどるための見栄えのよいコマンドライン・インターフェースを提供するシンプルなコマンドラインツールです。

![AWESOME CLI](https://raw.githubusercontent.com/umutphp/awesome-cli/fb83c2f82052482b6ef3cd837b24f49a1566ae04/assets/images/awesome-cli-banner.png)

![Build](https://github.com/umutphp/awesome-cli/workflows/Test%20&%20Build/badge.svg) ![WOSPM Checker](https://github.com/umutphp/awesome-cli/workflows/WOSPM%20Checker/badge.svg)

---




- [Introduction](#introduction)
- [How To Use](#how-to-use)
  - [Interactive Mode](#interactive-mode)
  - [Random Mode](#random-mode)
  - [Surprise Mode](#surprise-mode)
- [How To Install](#how-to-install)
  - [Basic](#basic)
  - [Build as binary](#build-as-binary)
  - [Download and use official binary](#download-and-use-official-binary)
  - [CLI Options](#cli-options)
  - [Sample Execution](#sample-execution)
- [How To Contribute](#how-to-contribute)


---

## Introduction

この CLI はルートリポジトリである [sindresorhus/awesome](https://github.com/sindresorhus/awesome) から始まり、選択に応じて最終的なリポジトリまで案内します。リポジトリの Readme ファイルを取得して解析し、選択リストを作成します。そのため、CLI には動作するネットワークが必要です :)。また、Readme ファイルの内容をキャッシュするためにファイルキャッシュを使います。ホームフォルダー直下の ".awesomecache" という名前のキャッシュフォルダーで確認できます。

![Avesome-cli Sample](https://raw.githubusercontent.com/umutphp/awesome-cli/fb83c2f82052482b6ef3cd837b24f49a1566ae04/assets/images/awesome-cli.gif)

## How To Use

### Interactive Mode

awesome-cli を対話的に使うには、オプションを指定せずに実行します。"↓ ↑ → ←" ボタンを使い、カテゴリーとリポジトリを順にたどれます。選択内容は [surprise mode](#surprise-mode) で使うため保存されます。

```bash
> $ awesome-cli
Use the arrow keys to navigate: ↓ ↑ → ← 
? Select from 'Awesome' list: 
  ▸ Platforms
    Programming Languages
    Front-End Development
    Back-End Development
    Computer Science
    Big Data
    Theory
    Books
    Editors
↓   Gaming
```

### Random Mode

"random" オプションを使うと、ランダムなカテゴリーの配下にあるランダムな awesome リポジトリへ移動できます。

```bash
> $ awesome-cli random
awesome-cli Version 0.3.0
✔ Programming Languages
✔ Eta
✔ Community
✔ IRC
https://kiwiirc.com/client/irc.freenode.net/#eta-lang
```

### Surprise Mode

"surprise" オプションを使うと、awesome-cli は [interactive mode](#interactive-mode) でのこれまでの選択を使い、ランダムなリポジトリを見つけます。

```bash
> $ awesome-cli surprise
awesome-cli Version 0.3.0
✔ Back-End Development
✔ Docker
✔ Videos
✔ From Local Docker Development to Production Deployments
https://www.youtube.com/watch?v=7CZFpHUPqXw
```

## How To Install

### Basic

次の手順に従ってください。

```bash
> $ git clone git@github.com:umutphp/awesome-cli.git
> $ cd awesome-cli
> $ go run main.go
```

### Build as binary

次の手順に従ってください。

```bash
> $ git clone git@github.com:umutphp/awesome-cli.git
> $ cd awesome-cli
> $ sudo go build -o /usr/local/bin/awesome-cli .
> $ awesome-cli
```

### Download and use official binary

[latest release](https://github.com/umutphp/awesome-cli/releases/latest) のページにアクセスし、対応する zip をダウンロードして展開します。zip ファイル内のバイナリーを使用できます。

```bash
> $ cp /path/to/zip/extract/awesome-cli /usr/local/bin/awesome-cli
> $ awesome-cli
```

### CLI Options

CLI はオプションを指定しなければ対話モードで動作します。ただし、以下に示すオプションを指定して呼び出すこともできます。

```bash
> $ awesome-cli help
awesome-cli Version 0.6.0

Options of awesome-cli:
  help      To print this screen.
  random    To go to a random awesome content.
  surprise  To go to a surprise awesome content according to your previos choices.
  profile   To see your previous choices.
  reset     To clean your choices to start from the beginning.
  update    Update awesome-cli to the latest version.
```

### Sample Execution

```bash
> $ awesome-cli random
awesome-cli Version 0.2.0
✔ Platforms
✔ Linux
✔ Applications
✔ Gedit
https://wiki.gnome.org/Apps/Gedit
```

## How To Contribute
 [CONTRIBUTING](https://github.com/umutphp/awesome-cli/blob/fb83c2f82052482b6ef3cd837b24f49a1566ae04/CONTRIBUTING.md) ファイルの手順に従い、[CODE_OF_CONDUCT](https://github.com/umutphp/awesome-cli/blob/fb83c2f82052482b6ef3cd837b24f49a1566ae04/CODE_OF_CONDUCT) に注意してください。
