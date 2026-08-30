---
title: "unixorn/awesome-zsh-plugins"
description: "Zshプラグイン、フレームワーク、テーマ、チュートリアルを用途別にまとめた一覧"
licenseSource: "github-unixorn-awesome-zsh-plugins-readme-md"
---

# awesome-zsh-plugins

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

## Status

[![License](https://img.shields.io/github/license/unixorn/awesome-zsh-plugins.svg)](https://opensource.org/license/BSD-3-Clause)
![Awesomebot](https://github.com/unixorn/awesome-zsh-plugins/actions/workflows/awesomebot.yml/badge.svg)
![Contributors](https://img.shields.io/github/contributors/unixorn/awesome-zsh-plugins.svg)
[![GitHub last commit](https://img.shields.io/github/last-commit/unixorn/awesome-zsh-plugins/main.svg)](https://github.com/unixorn/awesome-zsh-plugins)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/unixorn/awesome-zsh-plugins/)

ZSHのフレームワーク、プラグイン、チュートリアルおよびテーマを集めたコレクションで、さまざまな素晴らしいリストコレクションをインスピレーションとしています。



## Table of Contents

- [Disclaimer](#disclaimer)
- [Frameworks](#frameworks)
  - [alf](#alf)
  - [ansible-role-zsh](#ansible-role-zsh)
  - [ant-zsh](#ant-zsh)
  - [antibody](#antibody)
  - [antidote](#antidote)
  - [antigen-hs](#antigen-hs)
  - [antigen](#antigen)
  - [awesome-lazy-zsh](#awesome-lazy-zsh)
  - [ax-zsh](#ax-zsh)
  - [deer](#deer)
  - [dotzsh](#dotzsh)
  - [fresh](#fresh)
  - [gh-source](#gh-source)
  - [lazy.zsh](#lazyzsh)
  - [miniplug](#miniplug)
  - [oh-my-zsh](#oh-my-zsh)
  - [pms](#pms)
  - [prezto](#prezto)
  - [pumice](#pumice)
  - [rac](#rac)
  - [rat](#rat)
  - [ryzshrc](#ryzshrc)
  - [sheldon](#sheldon)
  - [shellx](#shellx)
  - [shplug](#shplug)
  - [thefly](#thefly)
  - [toasty](#toasty)
  - [usepkg](#usepkg)
  - [uz](#uz)
  - [x-cmd](#x-cmd)
  - [xc-manager](#xc-manager)
  - [yazt](#yazt)
  - [yzsh](#yzsh)
  - [zap](#zap)
  - [zapack](#zapack)
  - [zcomet](#zcomet)
  - [zeesh](#zeesh)
  - [zef](#zef)
  - [zert](#zert)
  - [zgem](#zgem)
  - [zgen](#zgen)
  - [zgenom](#zgenom)
  - [zilsh](#zilsh)
  - [zim](#zim)
  - [Zinit](#zinit)
  - [zinit-4](#zinit-4)
  - [zit](#zit)
  - [zlugin](#zlugin)
  - [znap](#znap)
  - [zoppo](#zoppo)
  - [zpacker](#zpacker)
  - [zpico](#zpico)
  - [zplug](#zplug)
  - [zpm](#zpm)
  - [zr](#zr)
  - [zshing](#zshing)
  - [zsh-dot-plugin](#zsh-dot-plugin)
  - [zsh-mgr](#zsh-mgr)
  - [zsh-unplugged.](#zsh-unplugged)
  - [zshPlug](#zshplug)
  - [ztanesh](#ztanesh)
  - [ztheme](#ztheme)
  - [ztupide](#ztupide)
  - [zulu](#zulu)
  - [zush 🦥 - Mid-Performance ZSH Configuration](#zush----mid-performance-zsh-configuration)
  - [Performance](#performance)
- [Setups](#setups)
  - [oh-my-zsh](#oh-my-zsh-1)
  - [Raw ZSH](#raw-zsh)
  - [zgenom](#zgenom-1)
  - [zinit](#zinit-1)
- [Prerequisites](#prerequisites)
- [Tutorials](#tutorials)
  - [Generic ZSH](#generic-zsh)
  - [Antigen](#antigen-1)
  - [Oh-My-Zsh](#oh-my-zsh-2)
  - [Prezto](#prezto-1)
  - [Zgen](#zgen-1)
  - [Zinit (né zplugin)](#zinit-n%C3%A9-zplugin)
  - [ZSH on Windows](#zsh-on-windows)
    - [superconsole - Windows-only](#superconsole---windows-only)
- [Plugins](#plugins)
- [Completions](#completions)
- [Themes](#themes)
- [Fonts](#fonts)
- [Installation](#installation)
  - [Antigen](#antigen-2)
  - [dotzsh](#dotzsh-1)
  - [Oh-My-Zsh](#oh-my-zsh-3)
  - [Prezto](#prezto-2)
  - [Zgen](#zgen-2)
  - [Zgenom](#zgenom-2)
  - [zplug](#zplug-1)
  - [zpm](#zpm-1)
- [Writing New Plugins and Themes](#writing-new-plugins-and-themes)
- [Other Resources](#other-resources)
  - [ZSH Tools](#zsh-tools)
  - [Other Useful Lists](#other-useful-lists)
  - [Other References](#other-references)
- [Thanks](#thanks)



*貢献する前に、[Contributing Guidelines](https://github.com/unixorn/awesome-zsh-plugins/blob/a215557d4df2fb88f92924964c056cee4ae38373/Contributing.md)を読んでください。*

## Disclaimer

私は、リストに含まれる項目に埋め込まれた悪意あるコードを追加しないよう最大限の努力をしましたが、リスト内のすべての項目のソースコードを一つずつ確認する時間は持てません。_このリストの項目を使用する際は、自らの責任でお願いします_。

このリストは著作権所有者および貢献者によって「現状のまま」提供されています。
明示的または暗黙的な保証（販売性や特定の目的への適合性を含む）は一切除外されます。いかなる場合にも、著作権所有者または貢献者が、このソフトウェアの使用により発生する直接的、間接的、偶発的、特別な、例示的または結果的な損害（代替商品またはサービスの購入、使用、データまたは利益の喪失、または事業の中断を含む）について、いかなる責任を負わないものとします。これは契約、厳密な責任、または違法行為（無過失またはその他の原因を含む）によるものであっても、このソフトウェアの使用により発生した場合であっても、その可能性を知らされていたとしても同様です。

## Frameworks

これらのフレームワークは、ZSHの設定をカスタマイズするのをより容易にします。

### [alf](https://github.com/psyrendust/alf)
![GitHub last commit](https://img.shields.io/github/last-commit/psyrendust/alf) ![GitHub Repo stars](https://img.shields.io/github/stars/psyrendust/alf)

**Alf** は ZSH 用の、非常に高速かつカスタマイズ可能なフレームワークです。これは [Prezto](https://github.com/sorin-ionescu/prezto) および [Antigen](https://github.com/zsh-users/antigen) をモデルにしながら、 [Oh-My-Zsh](https://ohmyz.sh) を内部で利用しており、標準的なデフォルト設定、エイリアス、関数、自動補完、自動更新、インストール可能なプロンプトテーマおよびプラグインを提供します。

### [ansible-role-zsh](https://github.com/viasite-ansible/ansible-role-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/viasite-ansible/ansible-role-zsh) ![GitHub Repo stars](https://img.shields.io/github/stars/viasite-ansible/ansible-role-zsh)

**ansible-role-zsh** はゼロ知識インストールを実現する Ansible ロールです。bundles の管理には [antigen](https://github.com/zsh-users/antigen)、そして [oh-my-zsh](https://github.com/unixorn/awesome-zsh-plugins/blob/a215557d4df2fb88f92924964c056cee4ae38373/ohmyz.sh) を使用します。条件付きで bundles を読み込むことができます。デフォルトでは、powerlevel9k テーマ、自動提案、文法ハイライト、そして [fzf-widgets](https://github.com/ytet5uy4/fzf-widgets) および [fzf-marks](https://github.com/urbainvaes/fzf-marks) を含んでいます。完全にカスタマイズ可能です。

### [ant-zsh](https://github.com/anthraxx/ant-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/anthraxx/ant-zsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/anthraxx/ant-zsh)

**Ant-zsh** は特別なカスタマイズニーズに最適化された、軽量かつシンプルな ZSH の設定環境です。プラグイン、テーマ、および基本的な便利なセットアップを含んでいます。

### [antibody](https://github.com/getantibody/antibody)
![GitHub last commit](https://img.shields.io/github/last-commit/getantibody/antibody)
 ![GitHub Repo stars](https://img.shields.io/github/stars/getantibody/antibody)

**Antibody** は Golang で書かれたより速くシンプルな [antigen](https://github.com/zsh-users/antigen) です。詳細は [http://getantibody.github.io/](http://getantibody.github.io/) で確認できます。

### [antidote](https://getantidote.github.io/)
![GitHub last commit](https://img.shields.io/github/last-commit/mattmc3/antidote)
 ![GitHub Repo stars](https://img.shields.io/github/stars/mattmc3/antidote)

**Antidote** はパフォーマンスを考慮したからこそ設計された ZSH プラグインマネージャーです。

それは並列処理を行うため速いだけでなく、ZSHの設定に含めることが可能な超高速の静的プラグインファイルを生成します。

ZSHで本質的に書かれており、よくテストされており、[Antibody](https://github.com/getantibody/antibody)が終えたところから続きます。

[use-omz](https://github.com/getantidote/use-omz)は、抗毒剤と共に[Oh-My-ZSH](https://github.com/ohmyzsh/ohmyzsh)の簡単な使用を可能にします。

### [antigen-hs](https://github.com/Tarrasch/antigen-hs)
![GitHub last commit](https://img.shields.io/github/last-commit/Tarrasch/antigen-hs)
 ![GitHub Repo stars](https://img.shields.io/github/stars/Tarrasch/antigen-hs)

**antigen-hs** は [antigen](https://github.com/zsh-users/antigen) の代替であり、 `zsh` セッションの起動時に低いオーバヘッドで最適化されています。プラグインの自動クローンを提供します。

### [antigen](https://github.com/zsh-users/antigen)
![GitHub last commit](https://img.shields.io/github/last-commit/zsh-users/antigen)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zsh-users/antigen)

**抗原**は、シェル（ZSH）のプラグインを簡単に管理できるようにする、小さな機能セットであり、これを「バンドル」と呼ぶ。この概念は、典型的なvim+pathogen設定におけるバンドルとほぼ同じである。AntigenはZSHに対して、Vundleが`vim`に対して持つものである。Antigenはoh-my-zshのテーマやプラグインを読み込み、自動的にそれらをクローンしてくれる。

### [awesome-lazy-zsh](https://github.com/AmJaradat01/awesome-lazy-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/AmJaradat01/awesome-lazy-zsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/AmJaradat01/awesome-lazy-zsh)

**Awesome-Lazy-ZSH**は、プラグインとテーマの管理に用いる簡易かつカスタマイズ可能なZSH設定ツールである。使いやすいCLIインターフェースにより、あなたのターミナル環境を簡素化し、.zshrcの設定を効果的に管理できる。
特徴

- Plugin Management: Install and manage plugins easily.
- Theme Customization: Apply a variety of Zsh themes.
- Backup and Restore: Safeguard your .zshrc configurations.
- Interactive CLI: User-friendly setup options.
- Dependency Management: Automatically checks for Git, Node.js, and Homebrew.

### [ax-zsh](https://github.com/alexbarton/ax-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/alexbarton/ax-zsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/alexbarton/ax-zsh)

**Ax-ZSH**はZSH用のモジュール型設定システムである。適切なデフォルト設定を提供し、プラグインによって拡張可能である。

**Ax-ZSH**は[Powerlevel10k](https://github.com/romkatv/powerlevel10k)やその他の拡張機能、特に[oh-my-zsh](https://ohmyz.sh/)との互換性を持つプラグインと良好に統合される。

### [deer](https://github.com/ArtixLabs/deer)
![GitHub last commit](https://img.shields.io/github/last-commit/ArtixLabs/deer)
 ![GitHub Repo stars](https://img.shields.io/github/stars/ArtixLabs/deer)

シンプルなZSHプラグインマネージャー

### [dotzsh](https://github.com/dotphiles/dotzsh)
![GitHub last commit](https://img.shields.io/github/last-commit/dotphiles/dotzsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/dotphiles/dotzsh)

**Dotzsh**はプラットフォームやバージョンに依存しないように設計されています。ZSHの古いバージョンで実行する場合、一部の機能が失われる可能性がありますが、問題なく順滑に動作し、異なるOSのマシン間で同じ設定を共有できるようになります。

### [fresh](https://github.com/freshshell/fresh)
![GitHub last commit](https://img.shields.io/github/last-commit/freshshell/fresh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/freshshell/fresh)

**fresh**は、アリアス、関数など、シェル設定を他のファイルから自分の設定ファイルに読み込むためのツールです。ackrcやgitconfigなどのファイルにも対応しています。これはあなたのドットファイル向けの [Bundler](https://bundler.io)と言えます。

### [gh-source](https://github.com/Yarden-zamir/gh-source)
![GitHub last commit](https://img.shields.io/github/last-commit/Yarden-zamir/gh-source) ![GitHub Repo stars](https://img.shields.io/github/stars/Yarden-zamir/gh-source)

**gh-source**は、プラグインマネージャーを好まない人々向けのプラグインマネージャーです。GitHubからプラグインをダウンロードし、インストールするためのシンプルなシェル関数です。これは `zsh`と組み合わせて使用されるように設計されていますが、どのシェルとも動作します。

### [lazy.zsh](https://github.com/stanleyndachi/lazy.zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/stanleyndachi/lazy.zsh) ![GitHub Repo stars](https://img.shields.io/github/stars/stanleyndachi/lazy.zsh)

**lazy.zsh** で、あなたの `.zshrc` は唯一の真実のソースになります。同じ設定を、同じ構成を使ってどこでも再現できます。フレームワークは不要、自動読み込みは不要、隠れた動作は不要です。**lazy.zsh** はプラグインのインストール、更新、追跡を担当し、あなたがプラグインがいつ、どのように読み込まれるかを完全に制御できます。

### [miniplug](https://sr.ht/~yerinalexey/miniplug)
![GitHub last commit](https://img.shields.io/github/last-commit/yerinalexey/miniplug) ![GitHub Repo stars](https://img.shields.io/github/stars/yerinalexey/miniplug)

**miniplug** は ZSH 用のミニマリズムなプラグインマネージャです。

- No crashes or double plugin loading when re-sourcing `.zshrc`
- Unlike other frameworks, Miniplug does not pollute your `$PATH`
- Only does the bare minimum for managing plugins

### [oh-my-zsh](https://ohmyz.sh/)
![GitHub last commit](https://img.shields.io/github/last-commit/ohmyzsh/ohmyzsh) ![GitHub Repo stars](https://img.shields.io/github/stars/ohmyzsh/oh-my-zsh)

**oh-my-zsh** は、あなたの ZSH 設定を管理するためのコミュニティが中心となるフレームワークです。120以上のオプションプラグイン（rails, `git`, macOS, `hub`, `capistrano`, `brew`, `ant`, MacPorts など）を提供し、120以上のテーマで朝の時間を彩り、コミュニティからの最新アップデートを簡単に追跡できる自動更新ツールも備えています。

### [pms](https://github.com/JoshuaEstes/pms)
![GitHub last commit](https://img.shields.io/github/last-commit/JoshuaEstes/pms)
 ![GitHub Repo stars](https://img.shields.io/github/stars/JoshuaEstes/pms)

PMS は、セットアップ時間を短縮し、生産性を高めるためにシェルを管理する方法を提供します。テーマ（シェルの見た目を変更）、プラグイン（シェルに機能を追加）、ドットファイル管理に対応しています。

PMSフレームワークは、異なるシェルで同じフレームワークを使用できるようにしています。個人用のラップトップではZSHを使用し、リモートサーバーでは`bash`を使用してください。`fish`を試してみませんか？それでは、さまざまなシェルを試してみてください。

### [prezto](https://github.com/sorin-ionescu/prezto)
![GitHub last commit](https://img.shields.io/github/last-commit/sorin-ionescu/prezto)
 ![GitHub Repo stars](https://img.shields.io/github/stars/sorin-ionescu/prezto)

**Prezto**は、ZSHのコマンドラインインターフェース環境に、合理的なデフォルト設定、エイリアス、関数、自動補完、プロンプトテーマを追加します。いくつかの[prezto](https://github.com/sorin-ionescu/prezto)用のプラグインは、[https://github.com/belak/prezto-contrib](https://github.com/belak/prezto-contrib)にあります。

### [pumice](https://github.com/ryutamaki/pumice)
![GitHub last commit](https://img.shields.io/github/last-commit/ryutamaki/pumice)
 ![GitHub Repo stars](https://img.shields.io/github/stars/ryutamaki/pumice)

**Pumice**はZSH用の軽量プラグインマネージャです。

### [rac](https://github.com/lomarco/rac)
![GitHub last commit](https://img.shields.io/github/last-commit/lomarco/rac)
  ![GitHub Repo stars](https://img.shields.io/github/stars/lomarco/rac)

ZSHのほとんどのプラグインマネージャは、膨らんでいます。それらはあまりにも多くのことを試みています——依存関係グラフ、遅延ロード、設定の注入——その結果、シェルの動作を遅くしています。

現実は、ほとんどのユーザーがこれらの機能の80％さえ使わないということです。 `rac`は意図的に最小限に抑えられています。すべての機能は **プラグインのダウンロード** と **プラグインの更新** にすぎません。

### [rat](https://github.com/gotokazuki/rat-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/gotokazuki/rat-zsh)
  ![GitHub Repo stars](https://img.shields.io/github/stars/gotokazuki/rat-zsh)

ZSH用の軽量で高速かつ再現可能なプラグインマネージャー。 🐭 と 🦀 で作成 — マジックはなく、重いフレームワークもありません。

機能 🐭✨

- 🚀 Simple setup
  - Install with a single curl line
  - Just add one eval line in .zshrc to start using it
- ⚙️ Configurable and reproducible
  - Simple TOML-based configuration
  - Automatic plugin load order control
- 🐙 GitHub integration
  - Fetches plugins from GitHub repositories
  - Supports branches, tags, and commits
  - Handles Git submodules automatically
- ⚡️ Lightweight and fast
  - Parallel plugin sync
  - Built in Rust 🦀
- 🔄 Seamless updates
  - Self-upgrade
  -Plugin sync

### [ryzshrc](https://github.com/ryzshrc/ryzshrc)
![GitHub last commit](https://img.shields.io/github/last-commit/ryzshrc/ryzshrc)
  ![GitHub Repo stars](https://img.shields.io/github/stars/ryzshrc/ryzshrc)

**ryzshrc** は、 [Oh My Zsh](https://ohmyz.sh/) に似たスマートかつ革新的なプラグインマネージャーであり、プロフェッショナルでカッコイイ機能を提供することで、あなたのターミナル体験を向上させます。効率的なシェル管理、洗練されたテーマ、強力なプラグインを提供することで、生産性を高めます。開発者にとって、現代的で知能的なターミナル操作方法として最適です

### [sheldon](https://github.com/rossmacarthur/sheldon)
![GitHub last commit](https://img.shields.io/github/last-commit/rossmacarthur/sheldon)
  ![GitHub Repo stars](https://img.shields.io/github/stars/rossmacarthur/sheldon)

**sheldon**は、高速かつ構成可能なシェルプラグインマネージャーです。

- It can manage:
  - Any `git` repository.
    - Branch/tag/commit support.
    - Extra support for GitHub repositories.
    - Extra support for Gists.
  - Arbitrary remote files, simply specify the URL.
  - Local plugins, simply specify the directory path.
- Highly configurable install methods using [handlebars](http://handlebarsjs.com/) テンプレートの仕組み
- Super-fast parallel installation.
- Configuration file using [TOML](https://github.com/toml-lang/toml) 構文
- Uses a lock file for much faster loading of plugins.

### [shellx](https://github.com/0ghny/shellx)

複数のシェルに適用可能なスクリプト/プラグインローダー、包括 `ZSH`。

- Has a "plugins" system that allows you to do things like installing a package, cloning a repository, export variables, run commands. And cross-shell compatible.
- Has an unified way of configuring shells, it uses one of many approaches to standardize home folder with a set of predefined files and folders. it defines a `~/bin` folder between others that is auto-included in `PATH`, so it helps you to use always same approach on all your systems.
- Having different plugins in different folders, which allows loading certain folders in certain environments to load variables or any other special configurations. It also allows you to clone other users plugins easily.
- It provides a minimal set of libraries and binaries bundled inside which offers a set of functions/aliases/etc. based on SH/BASH (compatible with other shells) to use in plugins contexts to do certain stuff easily.

### [shplug](https://github.com/dtrugman/shplug)
![GitHub last commit](https://img.shields.io/github/last-commit/dtrugman/shplug)
 ![GitHub Repo stars](https://img.shields.io/github/stars/dtrugman/shplug)

**shplug**はシェル環境を簡単に管理できる仕組みです。`bash`と`zsh`の両方に対応し、`git`リポジトリを使って複数マシン間で環境を同期できます。

### [thefly](https://github.com/joknarf/thefly)
![GitHub last commit](https://img.shields.io/github/last-commit/joknarf/thefly) ![GitHub Repo stars](https://img.shields.io/github/stars/joknarf/thefly)

**TheFly** は `bash`/`zsh`/`ksh` プラグインマネージャーおよび環境テレポートツール

シェル環境とプラグインをすべての場所（ホスト/ユーザー）で利用可能にします

### [toasty](https://github.com/CosmicToast/toasty-zsh)
![GitHub last commit](https://img.shields.io/github/last-commit/CosmicToast/toasty-zsh) ![GitHub Repo stars](https://img.shields.io/github/stars/CosmicToast/toasty-zsh)

**Toasty** は ZSH 用のフレームワークで、管理を容易にすることを目的として作られています

### [usepkg](https://github.com/gynamics/zsh-usepkg)
![GitHub last commit](https://img.shields.io/github/last-commit/gynamics/zsh-usepkg) ![GitHub Repo stars](https://img.shields.io/github/stars/gynamics/zsh-usepkg)

**Usepkg** は最小限の宣言型 ZSH プラグインマネージャーです

Supports:
- fetch & load plugin(s) with declared methods
- list, check, reload, update & remove plugin(s) with commands

Dependencies:
- `zsh`
- gnu coreutils
- `git` (optional, if you want to clone git repositories from internet)
- `curl` (optional, if you want to fetch a script file by url)

Pros:
- extremely simple and light, but enough to use.
- compared to similar packages like `zplug`, it has a much simpler configuration grammar.


### [uz](https://github.com/maxrodrigo/uz)
![GitHub last commit](https://img.shields.io/github/last-commit/maxrodrigo/uz)
 ![GitHub Repo stars](https://img.shields.io/github/stars/maxrodrigo/uz)

**uz** は ZSH 用のマイクロプラグインマネージャーです

### [x-cmd](https://github.com/x-cmd/x-cmd)
![GitHub last commit](https://img.shields.io/github/last-commit/x-cmd/x-cmd)
 ![GitHub Repo stars](https://img.shields.io/github/stars/x-cmd/x-cmd)

**x-cmd** は POSIX シェルと awk を使用して実装されたツールセットである。サイズが非常に小さく、多くの興味深い機能を提供している。ここに、マイルストーンデモを示す。 https://x-cmd.com/

Tools Provided by x-cmd:
  - [Wrappers for Common Commands (e.g., cd, ip, ps, tar, apt, brew)](https://x-cmd.com/mod/zuz): これらのラップされたコマンドは、ネイティブコマンドに比べてより知能が高く、使いやすくなっています
  - [Lightweight Package Management Tool](https://x-cmd.com/pkg/): 我々はシェルとawkを用いて軽量なパッケージ管理ツールを実装しました。これにより、jq、7za、bat、nvim、python、node、goなど、一般的なソフトウェアツールを迅速に取得できます
  - [CLI for Useful Websites (e.g., github.com, cht.sh)](https://x-cmd.com/mod/cht): これらのAPIをシェルとawkでラップし、日常使用やスクリプト内で対応するサービスを取得できるようにしています
  - [AI Tools](https://x-cmd.com/mod/openai): ChatGPT、Gemini、Jina.aiなどへのCLIを提供し、異なるアプリケーションシナリオに応じたショートカットコマンドをラップしています。例えば、 `@gemini` はGemini AIとの会話に、 `@zh` は指定されたコンテンツやコマンド結果をAIで翻訳する際に使用できます

### [xc-manager](https://github.com/Rakosn1cek/XC-Manager)
![GitHub last commit](https://img.shields.io/github/last-commit/Rakosn1cek/XC-Manager)
 ![GitHub Repo stars](https://img.shields.io/github/stars/Rakosn1cek/XC-Manager)

**XC-Manager** は Zsh 本体に内蔵されたコマンドのvaultであり、一時的なシェル履歴と永続的なエイリアスの間のギャップを埋めるために設計されている。複雑なワンライナーに説明を付けて保存し、インタラクティブな TUI を通じてそれを呼び出すことができる。

XC-Manager が提供する機能:
  - **コマンドのvault化**：履歴から直接、テーマごとに分類されたvault（例：仕事、システム管理者、メディア）に任意のコマンドを保存できる。
  - **FZF TUI**：強固でTTY対応の `fzf`インターフェースを用いて、vaultに保存されたコマンドを即座に検索・実行できる。
  - **エイリアスの昇格**：頻繁に使用されるvault内のコマンドを、手動で設定ファイルを編集せずに、永続的なシステムエイリアスに昇格できる。
  - **グローバル検索**：すべてのvaultファイルを同時に検索し、特定のフラグや複雑なパイプ文字列を特定できる。

### [yazt](https://github.com/bashelled/yazt)
![GitHub last commit](https://img.shields.io/github/last-commit/bashelled/yazt)
 ![GitHub Repo stars](https://img.shields.io/github/stars/bashelled/yazt)

**Yazt** はシンプルなZSHテーママネージャであり、ほぼすべての環境と互換性がある。プラグインにプロンプトを適用したり、2つのテーマを組み合わせたりできるだけでなく、わずかな変更を加えることで、 `bash`でも使用可能になる。

### [yzsh](https://github.com/yunielrc/yzsh)
![GitHub last commit](https://img.shields.io/github/last-commit/yunielrc/yzsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/yunielrc/yzsh)

**yzsh**は、プラグイン、テーマ、関数、エイリアスおよび環境変数の管理に使うシンプルなZSHフレームワークです。

### [zap](https://github.com/zap-zsh/zap)
![GitHub last commit](https://img.shields.io/github/last-commit/zap-zsh/zap)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zap-zsh/zap)

**:zap:zap**は、最小限のZSHプラグインマネージャです。

### [zapack](https://github.com/aiya000/zsh-zapack)
![GitHub last commit](https://img.shields.io/github/last-commit/aiya000/zsh-zapack)
 ![GitHub Repo stars](https://img.shields.io/github/stars/aiya000/zsh-zapack)

**zapack**は、基本的で高速な最小限のZSHプラグインローダです。

### [zcomet](https://github.com/agkozak/zcomet)
![GitHub last commit](https://img.shields.io/github/last-commit/agkozak/zcomet)
 ![GitHub Repo stars](https://img.shields.io/github/stars/agkozak/zcomet)

**zcomet**は、キャッシュを使わずプロンプトに到達するまでに驚くほど短時間で進む最小限のZSHプラグインマネージャです（ベンチマークを参照）。プラグインのロードと更新（`git`リポジトリに保存されたもの）に加え、遅延ロードされたプラグイン（起動時間をさらに短縮）やコードスニペットのダウンロードとソースをサポートしています。

### [zeesh](https://github.com/zeekay/zeesh)
![GitHub last commit](https://img.shields.io/github/last-commit/zeekay/zeesh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zeekay/zeesh)

**Zeesh**は、プラットフォームを越えたZSHフレームワークです。[oh-my-zsh](http://ohmyz.sh/)に似ていますが、互換性はありません。モジュールベースのプラグインアーキテクチャを持ち、拡張が容易です。豊富なデフォルト設定を備えていますが、可能な限り軽量であるように設計されています。

### [zef](https://github.com/declnix/zef)
![GitHub last commit](https://img.shields.io/github/last-commit/declnix/zef)
 ![GitHub Repo stars](https://img.shields.io/github/stars/declnix/zef)

ニックスで構築された宣言型zshのプラグインマネージャー。50ミリ秒未満の冷スタートを目標としており、nvfにインスパイアされたもので、もしシェル設定のすべてがビルド時に既知であれば、実行時は薄いシェイム（シーム）として扱えるという考えに基づいている。

### [zert](https://github.com/oxcl/zert)
![GitHub last commit](https://img.shields.io/github/last-commit/oxcl/zert)
 ![GitHub Repo stars](https://img.shields.io/github/stars/oxcl/zert)

**zert** は、シンプルな考えに基づいて構築された純粋な ZSH プラグインマネージャーです。プラグインは、あなたの `.zshrc` に直接宣言され、正確なコミットにピン留めされ、どのマシンでも再現可能になるように設計されています。これは、Node プロジェクトに対して `npm` が実現していることと同様です。

設定ファイルを維持する必要なし。プラグインの追加に覚える必要のあるサブコマンドもなし。外部ツールもなし。ただZSH、`git`、および`curl`だけ。

機能

* **Inline, declarative syntax** — declare plugins directly in `.zshrc`. No separate config file, no add command.
* **Lockfile-based reproducibility** — `zert.lock` pins every plugin to an exact `git` commit SHA. Commit it. Share it. Reproduce it anywhere.
* **Parallel installs** — clones multiple plugins simultaneously using `git clone --filter=tree:0` for minimal bandwidth.
* **Sequential, ordered loading** — plugins are sourced in exactly the order you declare them. Always.
* **Zero external UI dependencies** — real-time progress bars and spinners built entirely from ANSI escape codes.
* **Self-managing** — Zert updates itself with `zert update zert`, managed as a first-class plugin.
* **Oh-My-Zsh / Prezto compatibility** — load OMZ libs and Prezto modules without installing either framework.*

### [zgem](https://github.com/qoomon/zgem)
![GitHub last commit](https://img.shields.io/github/last-commit/qoomon/zgem)
 ![GitHub Repo stars](https://img.shields.io/github/stars/qoomon/zgem)

**zgem** は ZSH 用のプラグインマネージャーで、 `git`、HTTP およびローカルファイルからプラグインやテーマの読み込みと更新をサポートしています。

### [zgen](https://github.com/tarjoilija/zgen)
![GitHub last commit](https://img.shields.io/github/last-commit/tarjoilija/zgen)
 ![GitHub Repo stars](https://img.shields.io/github/stars/tarjoilija/zgen)

**Zgen は現在積極的にメンテナンスされていません**。代わりに、 [zgenom](https://github.com/jandamm/zgenom) フォールドを推奨します。これは積極的にメンテナンスされており、新しい機能やバグ修正が継続的に行われています。

**Zgen** は、 [Antigen](https://github.com/zsh-users/antigen) をインスピレーションとして受けた軽量な ZSH プラグインマネージャーでした。目的は、シェルの起動時に最小限の負荷をかけることでした。なぜなら、誰も待つことを好まないからです。

### [zgenom](https://github.com/jandamm/zgenom)
![GitHub last commit](https://img.shields.io/github/last-commit/jandamm/zgenom)
 ![GitHub Repo stars](https://img.shields.io/github/stars/jandamm/zgenom)

ZSH用の軽量プラグインマネージャーで、 [zgen](https://github.com/tarjoilija/zgen)をベースにしたフォークであり、より多くの機能とバグフィックスを提供しつつ、完全にバックワード互換性を保っている.

新しいターミナルセッション時に読み込みを速く保つために、 `zgenom`は静的 `init.zsh`ファイルを生成し、そのファイルはただあなたのプラグインをソースし、あなたの `fpath`に追加するだけである.

これにより、シェルセッションの起動ごとに時間のかかる処理（プラグインの確認や更新など）を実行せずに済み、起動時間を短縮できます。ただし、プラグイン一覧を更新した場合は、`zgenom reset`で初期化スクリプトを手動更新してから、その内容を`.zshrc`へ反映する必要があります。

Zgenomは [oh-my-zsh](http://ohmyz.sh/)と [prezto](https://github.com/sorin-ionescu/prezto)に適合するプラグインおよびテーマを読み込み、あなたのプラグインリストに追加したプラグインに対して自動的に `git clone`を行う。

### [zilsh](https://github.com/zilsh/zilsh)
![GitHub last commit](https://img.shields.io/github/last-commit/zilsh/zilsh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zilsh/zilsh)

**zilsh** は、強力なユーザーをより引きつけ、vim-pathogen のシンプルなアプローチを追いかける ZSH の設定システムである。

### [zim](https://github.com/zimfw/zimfw)
![GitHub last commit](https://img.shields.io/github/last-commit/zimfw/zimfw)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zimfw/zimfw)

**Zim** は、驚くほど速く、モジュール拡張をサポートする ZSH の設定フレームワークである。

### [Zinit](https://github.com/zdharma-continuum/zinit)
![GitHub last commit](https://img.shields.io/github/last-commit/zdharma-continuum/zinit) ![GitHub Repo stars](https://img.shields.io/github/stars/zdharma-continuum/zinit)

**Zinit** は、革新的であり、おそらく（Turbo のおかげで）最も速いプラグインマネージャーであり、以下の機能をサポートしている。

- Turbo mode – 80% faster ZSH startup! for example: instead of 200 ms, it'll be 40 ms
- Completion management (selectively disable and enable completions)
- Snippets (↔ regular files downloaded via-URL, e.g.: scripts) and through them Oh My Zsh and Prezto plugins support (→ low overhead)
- Annexes (↔ Zinit extensions)
- Reports (from the plugin loads – plugins are no longer black boxes)
- Plugin unloading (allows e.g.: dynamic theme switching)
- `bindkey` capturing and remapping
- packages
- Clean `fpath` (the array `$fpath` is not being used to add completions and autoload functions, hence it stays concise, not bloated)
- Services ↔ a single-instance, background plugins
- Also, in general: all the mechanisms from the ZSH Plugin Standard – Zinit is a reference implementation of the standard.

このプロジェクトは非常に活発である——現在は 3100 以上のコミットがある。

### [zinit-4](https://github.com/psprint/Zinit-4)
![GitHub last commit](https://img.shields.io/github/last-commit/psprint/Zinit-4)
 ![GitHub Repo stars](https://img.shields.io/github/stars/psprint/Zinit-4)

これは [original author](https://github.com/psprint) から来た Zinit 4 であり、かつて GitHub から [Zinit](https://github.com/zdharma-continuum/zinit) リポジトリを削除した人物である。これにより、コミュニティが運営する [zdharma-continuum](https://github.com/zdharma-continuum) オーガニゼーションが誕生し、psprint のすべての ZSH プロジェクトが再び活性化された。@zdharma-continuum フォールクからの主な革新は以下の通りである：

- AppImage distribution (release link),
- Action complete – press `Alt-Shift-A` and `Alt-Shift-C` to complete plugin names and ice modifiers,
- Themes – set `$ZITHEM`E to one of default, blue and gold to set a color set to use for Zinit 4 messages,
- New ice `build` which is equivalent of three other ices: `null`, `configure` and `make install` and simply builds the project from sources, with support for autotools/CMake/Meson/Scons.

これらの変更が最も目立つが、それ以外にも存在する（例：以前にビルドされたプロジェクトからのライブラリを用いてコンパイルできるようにする／`$ZPFX`）。

### [zit](https://github.com/thiagokokada/zit)
![GitHub last commit](https://img.shields.io/github/last-commit/thiagokokada/zit)
 ![GitHub Repo stars](https://img.shields.io/github/stars/thiagokokada/zit)

**zit** は ZSH 用のプラグインマネージャーである。極めてシンプルである理由は、プラグインマネージャーとしての最低限の機能を実装しているためである：ユーザーが `git` リポジトリ（および `git` リポジトリのみ、そのための名前）からプラグインをインストールし、ソースプラグインを取得し、それらを更新できるようにしている。複雑な機能（削除されたプラグインのクリーンアップ、インストールされたプラグインの自動コンパイル、oh-my-zsh／prezto／その他の ZSH フレームワークのエイリアス、バイナリのビルド、`$PATH` の操作など）は実装していない。

### [zlugin](https://github.com/DrgnFireYellow/zlugin)
![GitHub last commit](https://img.shields.io/github/last-commit/DrgnFireYellow/zlugin)
 ![GitHub Repo stars](https://img.shields.io/github/stars/DrgnFireYellow/zlugin)

**zlugin** は非常に軽量な ZSH プラグインマネージャーである。

### [znap](https://github.com/marlonrichert/zsh-snap)
![GitHub last commit](https://img.shields.io/github/last-commit/marlonrichert/zsh-snap) ![GitHub Repo stars](https://img.shields.io/github/stars/marlonrichert/zsh-snap)

**:zap:Znap**は、理解しやすい軽量なZSHプラグインマネージャー兼`git`リポジトリマネージャーです。ZSHプラグイン向けに最適化されていますが、汎用の`git`リポジトリ管理ツールとしても使えます。

Znap は：

- Make any prompt appear instantly. Reduce your startup time from ~200ms to ~40ms with just one command.
- Asynchronously compile your plugins and functions.
- Cache those expensive `eval $(commands)`.
- Clone or pull multiple repos in parallel.
- Re-clone all your repos without you having to re-enter them.
- Multi-repo management
- Automatic `compinit` and `bashinit` - you no longer need them in your `.zshrc`, znap will do them automatically as needed.

### [zoppo](https://github.com/zoppo/zoppo)
![GitHub last commit](https://img.shields.io/github/last-commit/zoppo/zoppo)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zoppo/zoppo)

**Zoppo** は ZSH 用の不完全な構成フレームワークである。イタリア語の言葉として、「chi va con lo zoppo, impara a zoppicare」ということわざがある。私たちが足が不自由な人との道を歩んでいたことに気づき、今後は自分自身も不自由な状態になるだろうと理解した。

### [zpacker](https://github.com/happyslowly/zpacker)
![GitHub last commit](https://img.shields.io/github/last-commit/happyslowly/zpacker)
 ![GitHub Repo stars](https://img.shields.io/github/stars/happyslowly/zpacker)

**Zpacker** は軽量の ZSH プラグインおよびテーマ管理フレームワークです。

### [zpico](https://github.com/thornjad/zpico)
![GitHub last commit](https://img.shields.io/github/last-commit/thornjad/zpico)
 ![GitHub Repo stars](https://img.shields.io/github/stars/thornjad/zpico)

**zpico** は極めて小さな ZSH パッケージマネージャーです。飾り付けも無く、膨張もありません。100％ZSHコードでわずか2kBであり、ZSH環境における完全なパッケージ管理を提供します。

ZSH用のパッケージマネージャーは多くありますが、ほとんどが膨張しており、遅い、あるいは過剰な要件を持っています。さらに、何年も前に放置されたものも多数あります。zpicoは、最も優れたものになることを目的としていません。むしろ、機能性と極めて小さい、高速なサイズのバランスを取ることを目指しています。

### [zplug](https://github.com/zplug/zplug)
![GitHub last commit](https://img.shields.io/github/last-commit/zplug/zplug)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zplug/zplug)

**:hibiscus: Zplug** は次世代のZSHプラグインマネージャーです。

- Can manage everything
  - ZSH plugins/UNIX commands on [GitHub](https://github.com) および [Bitbucket](https://bitbucket.org)
  - Gist files ([gist.github.com](https://gist.github.com/discover))
  - Externally managed plugins e.g., [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) および [prezto](https://github.com/sorin-ionescu/prezto) プラグイン/テーマ
  - Binary artifacts on [GitHub Releases](https://help.github.com/articles/about-releases/)
  - Local plugins
  - etc. (you can add your [own sources](https://github.com/zplug/zplug/blob/master/doc/guide/External-Sources.md)!)
- Super-fast parallel installation/update
- Support for lazy-loading
- Branch/tag/commit support
- Post-update, post-load hooks
- Dependencies between packages
- Unlike [antigen](https://github.com/zsh-users/antigen), ZSHプラグインファイル（`*.plugin.zsh`）は不要
- Interactive interface ([fzf](https://github.com/junegunn/fzf), [peco](https://github.com/peco/peco), [zaw](https://github.com/zsh-users/zaw) など)
- Cache mechanism for reducing [the startup time](https://github.com/zplug/zplug#vs)

### [zpm](https://github.com/zpm-zsh/zpm)
![GitHub last commit](https://img.shields.io/github/last-commit/zpm-zsh/zpm)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zpm-zsh/zpm)

**zpm**（ZSHプラグインマネージャー）は、[ZSH](http://www.zsh.org/)用のプラグインマネージャーであり、命令型と宣言型のアプローチを組み合わせています。初回実行時には、`zpm`が複雑な論理を実行し、キャッシュを生成します。その後はキャッシュのみを使用するため、このフレームワークは非常に高速になります。

- Fastest plugin manager (Really, after the first run, `zpm` will not be used at all)
- Support for async loading
- Dependencies between packages
- **zpm** runs on Linux, macOS, FreeBSD and Android.
- **zpm** plugins are compatible with [oh-my-zsh](http://ohmyz.sh/).

### [zr](https://github.com/jedahan/zr)
![GitHub last commit](https://img.shields.io/github/last-commit/jedahan/zr)
 ![GitHub Repo stars](https://img.shields.io/github/stars/jedahan/zr)

**zr** は Rust で書かれた、シンプルで速い ZSH プラグインマネージャーであり、`cargo install zr` で簡単にインストールできる。

### [zshing](https://github.com/zakariaGatter/zshing)
![GitHub last commit](https://img.shields.io/github/last-commit/zakariaGatter/zshing)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zakariaGatter/zshing)

**zshing** は Vundle/Vim に類似した ZSH のプラグインマネージャーであり、あなたに...

- Keep track of and configure your plugins right in your `~/.zshrc`
- Install ZSH plugins
- Update ZSH plugins
- Search by name all available ZSH Plugins
- Clean unused plugins up
- Run the above actions in a *single command*
- Manages the **Source Plugins** of your installed Plugins

### [zsh-dot-plugin](https://github.com/DuckzCantFly/zsh-dot-plugin)
![GitHub last commit](https://img.shields.io/github/last-commit/DuckzCantFly/zsh-dot-plugin) ![GitHub Repo stars](https://img.shields.io/github/stars/DuckzCantFly/zsh-dot-plugin)

**zsh-dot-plugin** は、わずかに約21行のコードで、あなたの `.zshrc` をカスタマイズします。 [zsh-unplugged](https://github.com/mattmc3/zsh_unplugged) に基づいています。

### [zsh-mgr](https://github.com/amt911/zsh-mgr)
![GitHub last commit](https://img.shields.io/github/last-commit/amt911/zsh-mgr)
 ![GitHub Repo stars](https://img.shields.io/github/stars/amt911/zsh-mgr)

zsh用のシンプルなプラグインマネージャー。特徴：

- Auto-updates all plugins.
- Auto-updates itself.
- Configurable time interval for both auto-updaters.

### [zsh-unplugged](https://github.com/mattmc3/zsh_unplugged).
![GitHub last commit](https://img.shields.io/github/last-commit/mattmc3/zsh_unplugged)
 ![GitHub Repo stars](https://img.shields.io/github/stars/mattmc3/zsh_unplugged)

**zsh-unplugged** は極めて小さなプラグインマネージャーです。TLDR; ZSHのプラグインには、大きな膨らんだプラグインマネージャーは必要ありません。シンプルな約20行の関数で十分かもしれません。

### [zshPlug](https://github.com/Atlas34/zshPlug)
![GitHub last commit](https://img.shields.io/github/last-commit/Atlas34/zshPlug)
 ![GitHub Repo stars](https://img.shields.io/github/stars/Atlas34/zshPlug)

**zshPlug** は、[zap](https://github.com/zap-zsh/zap)に基づいて構築された極めてシンプルなプラグインマネージャーです。

### [ztanesh](https://github.com/miohtama/ztanesh)
![GitHub last commit](https://img.shields.io/github/last-commit/miohtama/ztanesh)
 ![GitHub Repo stars](https://img.shields.io/github/stars/miohtama/ztanesh)

**Ztanesh** は、ztaneshプロジェクトが提供する設定により、UNIXコマンドライン体験と生産性を向上させることが目的です。そのツールは、シェルをより強力で使いやすいものにします。

### [ztheme](https://github.com/SkyyySi/ztheme)
![GitHub last commit](https://img.shields.io/github/last-commit/SkyyySi/ztheme)
 ![GitHub Repo stars](https://img.shields.io/github/stars/SkyyySi/ztheme)

**ztheme** はZSH用の小さな高速テーマエンジンです。

### [ztupide](https://github.com/mpostaire/ztupide)
![GitHub last commit](https://img.shields.io/github/last-commit/mpostaire/ztupide)
 ![GitHub Repo stars](https://img.shields.io/github/stars/mpostaire/ztupide)

**ztupide** はシンプルで高速な ZSH プラグインマネージャーです。 `zcompile` と非同期読み込みを活用して、シェルの起動時間を短縮します.

### [zulu](https://github.com/zulu-zsh/zulu)
![GitHub last commit](https://img.shields.io/github/last-commit/zulu-zsh/zulu)
 ![GitHub Repo stars](https://img.shields.io/github/stars/zulu-zsh/zulu)

**Zulu** は ZSH 5 以降向けの環境マネージャーで、コードを書かずにシェルの管理を簡単に行うことを目指しています.

- Easily manage your shell environment without editing files.
- Create aliases, functions and environment variables, and have them available to you at the next shell startup.
- Add and remove directories from `$path`, `$fpath` and `$cdpath` with simple commands.
- Install packages, plugins and themes easily, and have them available to you immediately.

### [zush](https://github.com/shyndman/zush) 🦥 - Mid-Performance ZSH Configuration
![GitHub last commit](https://img.shields.io/github/last-commit/shyndman/zush)
 ![GitHub Repo stars](https://img.shields.io/github/stars/shyndman/zush)

**zush** はパフォーマンスに配慮した ZSH の設定で、完全な機能を維持しながら 200ms 未満の起動時間を実現しています.

特徴：

- Instant Prompts - Basic prompt appears immediately, full prompt loads after ~129ms
- Plugin Management - Simple `zushp user/repo` command to install GitHub plugins
- Lazy Loading - Tools like `nvm`, `pyenv`, `cargo` load only when needed
- Auto-compilation - All ZSH files compiled with `zcompile` for faster loading
- Smart Caching - Environment changes cached for instant startup

### Performance

さまざまなフレームワークのパフォーマンス比較のタイミングは、以下の場所で見つけることができます。

- [rossmacarthur/zsh-plugin-manager-benchmark](https://github.com/rossmacarthur/zsh-plugin-manager-benchmark) - 最も人気のあるZSHフレームワークのパフォーマンスベンチマーク（インストール時間およびロード時間）を含む
- [pm-perf-test](https://github.com/z-shell/pm-perf-test) - 複数のZSHフレームワークに対するパフォーマンステストを実行するためのツール

## Setups

このセクションは完全なセットアップドロップインについてです。これらはフレームワークではなく、単なるプラグインやテーマでもありません。

### oh-my-zsh

- [master-oogway](https://github.com/tomershay100/master-oogway) - 完全なzsh環境 — dragon promptテーマ、gitエイリアス、fuzzy-finder関数、および25のオプションプラグイン — が、独立したgitリポジトリとして配布されています

### Raw ZSH

- [KronuZSH](https://github.com/Kronuz/KronuZSH) - 意見をもつ、完全なZSH設定 — 既存のフレームワークにソースを追加するためのプラグインではなく、標準的なZSHの実行ファイルをインストールし、シェルオプション、履歴、補完、キーバインディング、プラグイン、プロンプトをすべて管理する設定です

### zgenom

- [zsh-quickstart-kit](https://github.com/unixorn/zsh-quickstart-kit) - ZSHとを組み合わせるためのシンプルなクイックスタート。これはZSHを自動的にで設定し、カスタム（簡単にカスタマイズ可能）なプラグインコレクションを読み込み、定期的に自身、プラグイン、およびクイックスタートキットを自動更新します [zgenom](https://github.com/jandamm/zgenom) [zgenom](https://github.com/jandamm/zgenom)

### zinit

- [ZPWR](https://github.com/MenkeTechnologies/zpwr) - [Zinit](https://github.com/zdharma-continuum/zinit)に基づいた極めて強力なカスタムターミナル環境で、最大の速度を実現。全ターミナル設定フレームワークを含む、`zsh`、`tmux`、`fzf`、`vim`およびspacemacs設定を含む。これには以下が含まれます：

- 12.9k+ tab completions
- 1.9k+ aliases
- 330+ git aliases
- 400+ zpwr subcommands
- 2.8k functions
- 175+ zpwr environment variables
- 175+ perl, python, bash, ZSH scripts
- 2.8k line README.md
- 50k+ LOC
- 1 line install

## Prerequisites

Macにいる場合、各OSアップデートに付随する `zsh`は通常、非常に古くなっています。それを更新するために `brew install zsh`を使用できます。

ここに紹介されている多くのテーマは、ブランチアイコンなどを表示するため特別な文字を用いています。あなたのターミナルプログラムで [Nerd Font](https://github.com/ryanoasis/nerd-fonts)またはPowerlineに対応したフォントを使用しないと、その場所に不自然で壊れた箱が表示されます。

ネルドフォントやパワーラインに対応したフォントの良いソースをいくつかご紹介します

- [Awesome Terminal Fonts](https://github.com/gabrielelana/awesome-terminal-fonts) - いくつかの美しいモノスペースアイコンを含むフォントファミリー
- [Cascadia Code](https://github.com/microsoft/cascadia-code) - MicrosoftのCascadia Code
- [Commit Mono](https://commitmono.com) - 中立的なプログラミングフォント
- [Fantasque Awesome Font](https://github.com/ztomer/fantasque_awesome_powerline) - Font-Awesome、Octoicons、Powerline-Glyphsをパッチした、美しいモノスペースフォント
- [Fira Mono](https://github.com/mozilla/Fira) - MozillaのFiraフォントファミリー
- [Hack](http://sourcefoundry.org/hack/) - ソースコードおよびターミナル用途に設計された、Powerlineに対応したフォント
- [Input Mono](https://input.djr.com/) - コード用に設計されたフォントファミリー。モノスペースおよび比例フォントを提供し、Powerlineのグリフを含む
- [Iosevka](https://be5invis.github.io/Iosevka/) - Iosevkaは、[Pragmata Pro](http://www.fsd.it/fonts/pragmatapro.htm)、M+および[PF DIN Mono](https://www.myfonts.com/fonts/parachute/pf-din-mono/)をインスピレーションとして、プログラミングに最適なオープンソースのスリムモノスペースsans-serifおよびslab-serifフォントです
- [Monaspace](https://github.com/githubnext/monaspace) - Monaspaceは5つの互換性のあるフォントファミリーで構成されており、それぞれが3つの異なるフォーマットにパッケージ化されています。すべてを並列でインストール可能です。それぞれのファミリー名はファミリーとフォーマットによって異なります
- [Monoid](http://larsenwork.com/monoid/) - Monoidはカスタマイズ可能で、15pxのラインハイターレベルでのビットマップのような鋭さを備え、低解像度ディスプレイでも最適化されている。
- [Mononoki](https://madmalik.github.io/mononoki/) - MononokiはMatthias Tellenが作成した、コードフォーマットを強化するフォントです
- [More Nerd Fonts](https://www.nerdfonts.com/font-downloads) - Nerd Fontsをダウンロードするための別のサイト
- [Nerd fonts](https://github.com/ryanoasis/nerd-fonts) - 20以上のパッチされたフォント（1,700以上のバリエーション）と、Powerline、devicons、vim-devicons向けのFontForgeフォントパッチPythonスクリプトを含むコレクション。Droid Sans、Meslo、AnonymousPro、ProFont、Inconsoltaなど多数を含みます。これらは`brew`でインストール可能です — `brew tap homebrew/cask-fonts && brew install --cask fontname`を実行
- [Powerline patched font collection](https://github.com/powerline/fonts) - 数 dozenのフォントをPowerlineグリフを含むようにパッチしたコレクション
- [Spacemono](https://github.com/googlefonts/spacemono) - Googleの新しいオリジナルモノスペースディスプレイフォントファミリー
- [Victor Mono](https://rubjo.github.io/victor-mono/) - Victor Monoは、半連結カーソルイタリック、シンボルリガチャー（!=、->>、=>、===、<=、>=、++）およびラテン、キリル、ギリシャ文字を備えた無料のプログラミングフォントです

新しいフォントを検討している場合は、 [www.codingfont.com](https://www.codingfont.com/) をチェックしてください。これはプログラミング用フォントをブレットスタイルのトーナメントで提示し、2つの選択肢の中から最も良いものを選んでいくことで最終的なフォントに到達できるようにしています

## Tutorials

### Generic ZSH

- [A Beautifully Productive Terminal Experience](https://mikebuss.com/2014/02/02/a-beautiful-productive-terminal-experience/) - [iTerm 2](https://www.iterm2.com/#/section/home)、[ZSH](https://en.wikipedia.org/wiki/Z_shell)、[Prezto](https://github.com/sorin-ionescu/prezto)、[Tmux](https://tmux.github.io)、[Tmuxinator](https://github.com/tmuxinator/tmuxinator)を組み合わせたチュートリアルで、極めて生産的な開発者ワークフローを構築します
- [A Guide to ZSH Completion With Examples](https://thevaluable.dev/zsh-completion-guide-examples/) - ZSHの自動補完設定についての説明と例を示す
- [adamnorwood-zsh](https://github.com/adamnorwood/adamnorwood-zsh/) - [oh-my-posh](https://ohmyposh.dev/)に基づくミニマリズムかつ読みやすいZSH設定
- [Arch Linux's ZSH introduction](https://wiki.archlinux.org/index.php/zsh) -  実際にはArchまたはLinuxに特化したものではありません
- [GH](https://github.com/gustavohellwig/gh-zsh) - Debian/UbuntuベースのLinuxでZSHをセットアップ。[Powerlevel10k](https://github.com/romkatv/powerlevel10k)、[zsh-completions](https://github.com/zsh-users/zsh-completions)、[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)、[fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting/)、その他をインストールします
- [How To Make an Awesome Custom Shell with ZSH](https://linuxstans.com/how-to-make-an-awesome-custom-shell-with-zsh/) - ZSHシェルのインストールと設定に関する初心者向けチュートリアル
- [commandlinepoweruser.com](https://commandlinepoweruser.com/) - Wes BosによるZSHおよびoh-my-zshに関する動画
- [Profiling ZSH](https://ellie.wtf/notes/profiling-zsh) - ZSHの設定をプロファイリングしてスタートアップ時間を最適化する良い記事
- [rs-example](https://github.com/al-jshen/zshplug-rs-example) - RustプログラムがZSHからのコマンドを受信・処理する例プラグイン
- [Why ZSH is Cooler than your Shell](https://www.slideshare.net/jaguardesignstudio/why-zsh-is-cooler-than-your-shell-16194692) - Slideshareでのプレゼンテーション
- [zephyr](https://github.com/mattmc3/zephyr) - ZephyrはZshの標準機能を活用して、デフォルトのオプション、補完、キーバインディング、履歴など、より良い設定を構築
- [ZSH for Humans](https://github.com/romkatv/zsh4humans) - ZSHの即時使える構成で、実用性を高めることを目的とした、プラグインを厳選した一貫したセット。完成品のように感じられるよう、DIYスタートキットではなく、まとまった構成になっている。
- [ZSH Pony](https://github.com/mika/zsh-pony) - フレームワークを使わずにZSHをカスタマイズする方法を解説。
- [ZSH tips by Christian Schneider](http://strcat.de/zsh/#tipps) - Christian SchneiderによるZSHの詳細なヒント一覧。
- [ZSH Setup by Easy-Cloud-in](https://github.com/Easy-Cloud-in/zsh-setup) - Oh My Poshテーマ、必須プラグイン、高度な検索機能を備えた強力なZsh環境構築。このリポジトリは、現代的な機能と美しさを自動で設定するスクリプトを提供。DebianまたはUbuntuベースのシステムが必要。
- [ZSH Unplugged](https://github.com/mattmc3/zsh_unplugged) - フレームワークを使わずにプラグインを簡単に使えるようにするための良いリソース。

### Antigen

- [belak/zsh-utils](https://github.com/belak/zsh-utils) - シンプルで摩擦が少なく、複雑さの低いZSHプラグインセット。
- [mgdm.net/weblog/zsh-antigen/](https://mgdm.net/weblog/zsh-antigen/) - Michael Macleanによるoh-my-zshからantigenへの切り替えに関する記事。
- [Oh-my-zsh is the Disease and Antigen is the Vaccine](https://joshldavis.com/2014/07/26/oh-my-zsh-is-a-disease-antigen-is-the-vaccine/) - Josh DavisによるAntigenの紹介。

### Oh-My-Zsh

- [Configuration to use Hyper.js as a ZSH terminal with a Windows Subsystem Linux on windows 10, with Oh My Zsh and the Powerlevel10k theme](https://github.com/jkergal/hyperjs-wsl-zsh-powerlevel10k-config-on-windows/) - WSL上でOh-My-ZSHを動かすための手順。
- [Getting started with oh-my-zsh](https://medium.com/@dienbui/using-oh-my-zsh-f65be6460d3f) - Dien Buiによるoh-my-zshの初心者向けガイド
- [How to Install and Configure Z Shell in Ubuntu](https://github.com/profpan396/how-to-install-and-configure-zshell) - Amar Panの記事は、ZSHのインストールと設定プロセス、テーマの変更、時間短縮のオートサジェストプラグインの有効化について詳しく説明。
- [iTerm2 + Oh-My-ZSH: Supercharge Your Mac Terminal](https://catalins.tech/improve-mac-terminal) - Catalin PitによるmacOS上でOh-My-ZSHを始めるチュートリアル。
- [Learn Zsh in 80 Minutes macOS](https://www.youtube.com/watch?v=MSPu-lYF-A8) - Karl HadwenによるmacOS上でOh My Zshを使うための初心者ガイド
- [Oh-My-Zsh! A Work of CLI Magic](https://medium.com/wearetheledger/oh-my-zsh-made-for-cli-lovers-installation-guide-3131ca5491fb) - Michiel MuldersによるUbuntuでのインストールガイド
- [One Key Linux Setup](https://github.com/miracleyoo/one-key-linux-setup) - ubuntu専用のシンプル構成。`zsh`, `oh-my-zsh`, `tmux`, `python`のサポートおよびその他のパッケージのセットアップ。
- [Speeding Up My ZSH Shell](https://scottspence.com/posts/speeding-up-my-zsh-shell) - OMZを使ってZSHを高速化するための簡易ガイド

### Prezto

- [A Beautifully Productive Terminal Experience](https://mikebuss.com/2014/02/02/a-beautiful-productive-terminal-experience) - Mike BussによるPrezto, [Tmux](https://tmux.github.io) & Tmuxinatorの使用に関するブログ記事。
- [Migrate from Oh-My-Zsh to Prezto](http://jeromedalbert.com/migrate-from-oh-my-zsh-to-prezto/) - Jerome DalbertによるPreztoへの移行に関するブログ記事。

### Zgen

- [rad-shell](https://github.com/brandon-fryslie/rad-shell) - 非常に機能豊かで、高速なシェルセットアップ。[ZSH](http://www.zsh.org/), [Prezto](https://github.com/sorin-ionescu/prezto), [Zgen](https://github.com/tarjoilija/zgen)によって実現。

### Zinit (né zplugin)

- [BlaCk-Void-Zsh](https://github.com/black7375/BlaCk-Void-Zsh) - Awesome, customizable Zsh Starter Kit 。Powerline、統合、一部のターミナルでの天気と画像閲覧を含む。 :crystal_ball: :stars: :stars: [fzf](https://github.com/junegunn/fzf)
- [zinit-configs](https://github.com/zdharma-continuum/zinit-configs) - 現実世界の設定ファイル（実質的に`.zshrc`ファイルのコレクション）で、[zinit](https://github.com/zdharma-continuum/zinit)の呼び出しを保持。

### ZSH on Windows

#### [superconsole](https://github.com/alexchmykhalo/superconsole) - Windows-only

- `ConEmu`/`zsh` out-of-the-box configured to restore previously opened tabs and shell working directories after `ConEmu` restart
- Choose between clean and inherited environment when starting new SuperConsole sessions
- Custom colorful scheme, colorful output for various commands
- `MSYS2` included, `zsh` and necessary software preinstalled, uses zsh-grml-config
- Uses [Antigen](https://github.com/zsh-users/antigen) ZSHテーマと設定管理用
- Enabled number of ZSH plugins to activate completion, highlighting and history for most comfortable use
- Git-for-Windows repo with proper `git` and `git lfs` support for `MSYS2` environment is configured, `git` client already installed.
- `ssh-agent` for `git` works out-of-box, add your keys to `ConEmu/msys64/ConEmu/msys64/home/user/.ssh` dir
- Non-blocking ZSH prompt status updates thanks to [agkozak-zsh-prompt](https://github.com/agkozak/agkozak-zsh-prompt)
- Command-not-found handler customized for `MSYS2` suggests what package to install
- Sets up `nano` as main editor, enables `nano` syntax highlighting
- Custom helper scripts added to `ConEmu/msys64/3rdparty`

## Plugins

- [1password](https://github.com/agpenton/1password-zsh-plugin) - [1Password](https://1password.com/)機能を追加。`opswd`コマンドが`op`コマンドをラップし、サービス名を引数として受け取り、そのサービスのパスワードをクリップボードにコピー。
- [256color](https://github.com/chrissicool/zsh-256color) - 256色をサポートするターミナル環境を強化。選択された`TERM`環境変数を確認し、ncursesのterminfoで256色が利用可能かどうかをチェック。結果として、256色対応ターミナルが可能になる。
- [abbr-path](https://github.com/felixgravila/zsh-abbr-path) - 一部のoh-my-fishテーマから`theme_title_use_abbreviated_path`パラメータの機能を追加。
- [abbr-preview](https://github.com/cohml/zsh-abbr-preview) - タイプ中に[abbr](https://github.com/olets/zsh-abbr)の略語をプレビュー。
- [abbr](https://github.com/olets/zsh-abbr) - スペースキーを押下時にインラインで展開される略語の自動展開を管理。fishシェルにインスパイアされた。
- [abbr](https://github.com/yachtida/zsh-abbr-plugin) - ZSH向けの軽量略語展開 — [fish](https://fishshell.com)にインスパイアされ、高速性を重視。
- [abbrev-alias](https://github.com/momo-lab/zsh-abbrev-alias) - `vim`の略語展開に類似した機能を提供。
- [actiona](https://github.com/matthieusb/act) - コマンドラインから[actiona](https://github.com/Jmgr/actiona)スクリプトを呼びやすくなるようにする。タブ補完を含む。
- [activate-py-environment](https://github.com/se-jaeger/zsh-activate-py-environment) - ディレクトリを移動する際に、自動的に検知・アクティブ化されるPython環境（`poetry`, `virtualenv`, `conda`）。
- [adguard-helper](https://github.com/MohamedElashri/adguard-helper) - [AdGuard VPN CLI](https://github.com/AdguardTeam/AdGuardVPNCLI)とのインタラクションを簡素化。複雑なフラグやコマンドを覚える必要を減らすため、より直感的なインターフェースを提供。
- [adonisjs](https://github.com/baliestri/adonisjs.plugin.zsh) - コマンドの部分をスキップするためのプラグイン。 `node` `ace`
- [agent-history](https://github.com/aaronbronow/agent-history) - ZSHショートカットで、ターミナル内で最近のAIコードセッションを再開。
- [ai-cmd](https://github.com/kylesnowschwartz/zsh-ai-cmd) - 自然言語からシェルコマンドへ変換。ghost textプレビューを提供。`curl`, [`jq`](https://stedolan.github.io/jq/)、およびAnthropic APIキーが必要。
- [ai-cmd](https://github.com/shanemcd/ai-cmd) - 自然言語からシェルコマンドを生成。LLMsを介して[Claude Code](https://docs.anthropic.com/en/docs/claude-code)または[Ollama](https://ollama.ai/)を使用。
- [ai-commands](https://github.com/muePatrick/zsh-ai-commands) - GPT (gpt-4-turbo-preview)にCLIコマンドの要求を送り、記述されたターゲットアクションを達成するように依頼する
- [airpods-battery](https://github.com/louis-thevenet/zsh-airpods-battery/) - BluetoothでAirPodsを検索し、そのバッテリー残量を`$RPROMPT`に格納する
- [aish](https://github.com/chr15m/aish) - OpenAIが提供する即時シェルスクリプトソリューションを、プロンプト内に直接提供
- [alacritty](https://github.com/casonadams/alacritty-shell) - [alacritty](https://github.com/alacritty/alacritty/wiki/Color-schemes)のカラーリングスケームを制御
- [alehouse](https://github.com/sticklerm3/alehouse) - [brew](https://brew.sh)コマンドの短いエイリアスを含み、`betterbrew`にインスパイアされたもの
- [alias-finder](https://github.com/akash329d/zsh-alias-finder) - 既にエイリアスを定義したコマンドを使用した際に、そのエイリアスを表示。過去に定義したエイリアスを覚えるのに役立つ。純粋なZSHスクリプトで記述されているため高速化されている
- [alias-maker](https://github.com/MefitHp/alias-maker) - コマンドラインからエイリアスを簡単に作成・管理できる
- [alias-tips](https://github.com/djui/alias-tips) - 一度定義したエイリアスを覚えるために用いる[oh-my-zsh](https://ohmyz.sh/)プラグイン
- [allclear](https://github.com/givensuman/zsh-allclear) - あなたが`cd`ににログインした際に、ターミナルをクリアする `$HOME`
- [allergen](https://github.com/stanislas/allergen) - Antigenと併用できるカスタムZSHプラグインのコレクション
- [almostontop](https://github.com/Valiev/almostontop) - シェル内で新しいコマンドを実行する前に、以前のコマンド出力を常にクリア。[alwaysontop](https://github.com/swirepe/alwaysontop)プラグイン（`bash`で提供）にインスパイアされたもの
- [alt-and-select](https://github.com/raisty/alt-and-select) - `alt-c`（コピー）、`alt-`v（ペースト）、`alt-x`（カット）のキーボードショートカットを、`copy-region-as-kill`、`yank`、`kill-region`のコマンドにバインド。実行コマンドを`alt-shift-X`にリマップする
- [ansible](https://github.com/sparsick/ansible-zsh) - [Ansible](https://www.ansible.com/)用のプラグイン
- [ansimotd](https://github.com/yuhonas/zsh-ansimotd) - ログインシェルが開始された際に、古いスタイルのカッコイイANSIアートを表示
- [ansiweather](https://github.com/fcambus/ansiweather) - ターミナル内に天気を表示。ANSIカラーとユニコード記号を使用
- [antidote-use-omz](https://github.com/getantidote/use-omz) - [oh-my-zsh](https://ohmyz.sh/)と[antidote](https://getantidote.github.io/)の使用をスムーズにできる
- [antigen-git-rebase](https://github.com/smallhadroncollider/antigen-git-rebase) - Antigen/ZSHスクリプトで`git`のリベースを支援
- [anyframe](https://github.com/mollifier/anyframe) - ZSH用の`peco`/`percol`/`fzf`のラッパープラグイン
- [apache2](https://github.com/voronkovich/apache2.plugin.zsh) - Apache2の管理用エイリアスと関数を追加
- [apparix](https://github.com/micans/apparix) - ディレクトリブックマークを提供し、ブックマークへのジャンプ、サブディレクトリのタブ補完、遠隔ディレクトリ一覧などもサポート
- [apple-touchbar](https://github.com/zsh-users/zsh-apple-touchbar) - MacBook Proのタッチバーを[iTerm 2](https://iterm2.com)に追加
- [appup](https://github.com/Cloudstek/zsh-plugin-appup) - 現在のディレクトリ（例：アプリケーション）にまたはが存在する場合、、、、コマンドを追加。ただしく を実行して、コード作成を開始！ `start` `stop` `up` `down` `docker-compose.yml` `Vagrantfile` `up`
- [apt](https://github.com/GeoLMg/apt-zsh-plugin) - `apt`パッケージマネージャーを持つディストリビューション向け。欠落しているプログラムのインストールを自動で提供
- [arc-prompt](https://github.com/dkryaklin/arc-zsh-plugin) - Arc VCSプロンプト統合：ブランチ表示、ステータスキャッシュ、操作モード検出、agnosterテーマサポート、エイリアスサポート
- [arc-search](https://github.com/michaelsousajr/zsh-arc-search) - Arcブラウザをターミナルから直接使用して、迅速な検索を実行。検索語句にURLエンコード機能を備える
- [arc](https://github.com/anton-rudeshko/zsh-arc) - Yandexバージョン管理システム用のエイリアスを追加
- [arch-aptstyle](https://github.com/MRoldL001/arch-aptstyle) - Debian/Ubuntuスタイルの`apt`コマンドラッパーを提供し、それらのディストリビューションからarchに移行するユーザーに適している。完全な機能を実現するには、`yay`または`paru`が必要。
- [archlinux (fourdim)](https://github.com/fourdim/zsh-archlinux) - Arch Linux上で`pacman`にヘルパー関数を定義
- [archlinux (junker)](https://github.com/Junker/zsh-archlinux) - oh-my-zshの[archlinux](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/archlinux)プラグインに基づいており、ヘルパー関数とエイリアスを定義
- [arduino](https://github.com/raghur/zsh-arduino) - Arduinoスケッチのビルド、アップロード、モニタリングをコマンドラインから実行するためのスクリプトを追加。[`jq`](https://stedolan.github.io/jq/)が必要。
- [artisan](https://github.com/jessarcher/zsh-artisan) - Laravelのプラグイン（ZSH用）で、プロジェクトツリーのどこからでもを実行可能にし、タブ補完を提供 `artisan` `artisan`
- [asciidoctor](https://github.com/sparsick/asciidoctor-zsh) - AsciiDoctor用のプラグイン
- [asdf (kiurchv)](https://github.com/kiurchv/asdf.plugin.zsh) - 拡張可能なバージョンマネージャー[asdf](https://github.com/asdf-vm/asdf)への統合と補完。Ruby、Node.js、Elixir、Erlangなどに対応。
- [asdf (zimfw)](https://github.com/zimfw/asdf) - [asdf](https://github.com/asdf-vm/asdf)を初期化し、まだインストールされていない場合は`git`を使ってインストール。また、[direnv](https://github.com/asdf-community/asdf-direnv)プラグインを使用している場合は、shimsをスキップする（プラグイン[pro-tips](https://github.com/asdf-community/asdf-direnv/#pro-tips)が提案）。
- [asdf-direnv](https://github.com/redxtech/zsh-asdf-direnv) - [asdf](https://github.com/asdf-vm/asdf)および[direnv](https://github.com/asdf-community/asdf-direnv)への統合と補完
- [asdf-prompt](https://github.com/CurryEleison/zsh-asdf-prompt) - プロンプト内で使える関数を提供し、現在のツールバージョンの情報表示を実現
- [ask-opencode](https://github.com/andreacasarin/zsh-ask-opencode) - OpenCode AIをシェルに統合し、自然言語を使ってシェルコマンドを生成できる。 `Ctrl+O`を押すと、コマンドライン内のテキストを最適化されたシェルコマンドに変換できる
- [ask](https://github.com/Licheam/zsh-ask) - ChatGPT APIのフロントエンドとして機能し、ZSHシェルからChatGPTに直接アクセスできる。 `cURL`と`jq`のみで操作可能
- [assistant](https://github.com/tarball0/zsh-assistant) - コマンドに関する質問にollamaを使って回答
- [assume-role](https://github.com/weizard/assume-role) - AWS IAMロールを簡単に仮想できる。補完機能を提供
- [async](https://github.com/mafredri/zsh-async) - ZSHで非同期タスクを実行するためのライブラリ。外部ツールを必要とせず、複数の非同期ジョブを実行できる。ユニークなジョブを強制し（同じジョブの複数インスタンスが実行されない）、現在実行中のすべてのジョブをクリアできる。また、複数のワーカー（それぞれが独自のジョブを持つ）を作成できる。
- [atom-plugin](https://github.com/CorradoRossi/oh-my-zsh-atom-plugin) - [Sublime](https://github.com/valentinocossar/sublime)プラグインに基づき、[Atom](https://atom.io)から[iTerm 2](https://iterm2.com)でファイルやフォルダを起動できる。
- [atuin](https://github.com/ellie/atuin) - 既存のシェル履歴をSQLiteデータベースに置き換え、コマンドの追加コンテキストを記録。さらに、Atuinサーバーを介して、マシン間で履歴をオプションかつ完全に暗号化して同期できる。
- [aur-install](https://github.com/redxtech/zsh-aur-install) - AURからパッケージをインストールするための小さなプラグイン。
- [auto-color-ls](https://github.com/gretzky/auto-color-ls) - `colorls`でディレクトリを自動リスト表示。
- [auto-fu.zsh](https://github.com/hchbaw/auto-fu.zsh) - 自動的に単語補完とリスト選択。元はy.fujiiによるincr-0.2.zsh（y-fujii at mimosa-pudica.net）。
- [auto-ls (commanda-panda)](https://github.com/commanda-panda/zsh-auto-ls) - 上でまたはが存在する場合、自動的に実行。 `ls` `color-ls` `cd`
- [auto-ls (desyncr)](https://github.com/desyncr/auto-ls) - 新しいディレクトリにcdした際に自動的に`ls`を実行。
- [auto-notify](https://github.com/MichaelAquilina/zsh-auto-notify) - 長時間実行されたタスクが完了した際に自動的に通知を送信。
- [auto-nvm](https://github.com/manlao/zsh-auto-nvm) - 指定されたディレクトリにnodeバージョンを自動的に切り替える。
- [auto-pnpm-use](https://github.com/brunomacedo/zsh-auto-pnpm-use) - 指定されたディレクトリの`.nvmrc`または`.npmrc`に記載されたnodeバージョンを自動的に読み込む。
- [auto-venv (skylor0tang)](https://github.com/Skylor-Tang/auto-venv) - 現在のディレクトリまたはその親ディレクトリにPythonの仮想環境を自動的に有効化。
- [autocomplete](https://github.com/marlonrichert/zsh-autocomplete) - 入力中に補完を自動的にリスト表示し、選択・挿入に直感的なキーバインディングを提供。
- [autodark (cravend)](https://github.com/cravend/autodark) - ユーザーが指定したライトとダークテーマを切り替え。macOSでのみ動作。
- [autodark (vbwx)](https://github.com/vbwx/zsh-autodark) - ダークモードが有効になっている場合、別のTerminalプロファイルに切り替える（macOS限定）。
- [autodotenv](https://github.com/nocttuam/autodotenv) - ディレクトリにファイルが含まれている場合、そのディレクトリにで読み込む際に変数をロードするよう促す。 `cd` `.env`
- [autoenv-extended](https://github.com/zpm-zsh/autoenv) - [zsh-autoenv](https://github.com/Tarrasch/zsh-autoenv)プラグインの拡張バージョン。
- [autoenv](https://github.com/hyperupcall/autoenv) - ディレクトリベースの環境。
- [autofix](https://github.com/deXterbed/zsh-autofix) - コマンドが失敗した場合、その`stderr`をキャプチャし、ローカルの[Ollama](https://ollama.com)モデルにフィックスを依頼。その結果はghost-textとして表示され、`Tab`で承認できる。成功時には静的。
- [autojump](https://github.com/wting/autojump) - `cd`コマンドはコマンドラインからディレクトリを簡単にナビゲートできるようにする。最適な結果を得るにはautojump-zshをインストールする。
- [automated-actions](https://github.com/Fynardo/zsh-automated-actions) - [automated-actions](https://github.com/app-sre/automated-actions)CLIのためのエイリアスを提供。
- [autopair](https://github.com/hlissner/zsh-autopair) - ZSHでマッチングするブレーカーを自動的に閉じ、削除、スキップするプラグイン。ZSH 5.0.2以降でのみテスト済み。
- [autoquoter](https://github.com/ianthehenry/zsh-autoquoter) - 特定のコマンドの引数に自動的に引用符を付加する`zle`ウィジェット（"zshプラグイン"）。
- [autosuggestions-plugin](https://github.com/jumbojett/zsh-autosuggestions-plugin) - 🐟 ZSHにおける[Fish](https://fishshell.com/)スタイルの自動補完。
- [autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) - ZSH向けの[Fish](https://fishshell.com/)風の高速かつ非侵襲的な自動補完。
- [autoswitch-virtualenv](https://github.com/MichaelAquilina/zsh-autoswitch-virtualenv) - ディレクトリを移動する際にPythonの仮想環境やpipenvを自動的に切り替えるZSHプラグイン。[pipenv](https://pypi.org/project/pipenv/)および[poetry](https://python-poetry.org/)プロジェクトを自動的に検出。
- [autoupdate-antibody](https://github.com/spikespaz/autoupdate-antibody-zsh) - [autoupdate-antigen](https://github.com/unixorn/autoupdate-antigen.zshplugin)のforkで、[Antibody](https://getantibody.github.io)プラグインマネージャーに適用され、静的ロードとの協調が可能に。
- [autoupdate-antigen](https://github.com/unixorn/autoupdate-antigen.zshplugin) - は自動更新機能を持たず、のようには動作しない。このプラグインはの自動更新を追加し、および設定ファイルにロードされたバンドルの両方を対象とする。 [Antigen](https://github.com/zsh-users/antigen) [oh-my-zsh](https://ohmyz.sh/) `antigen` `antigen`
- [autoupdate-oh-my-zsh-plugins](https://github.com/TamCore/autoupdate-oh-my-zsh-plugins) - は非コアプラグインの自動更新を行わない。このプラグインはディレクトリ内のリポジトリの自動更新を実行。 [oh-my-zsh](https://ohmyz.sh/) `git` `$ZSH_CUSTOM`
- [autovenv (linnnus)](https://github.com/linnnus/autovenv) - 仮想環境が存在するディレクトリの親ディレクトリに入った際に、自動的にPython仮想環境を有効化。
- [autovenv (snovra-dev)](https://github.com/snovra-dev/zsh-autovenv) - 仮想環境が存在するディレクトリの親ディレクトリに入った際に、自動的にPython仮想環境を有効化。
- [aws-cli-mfa](https://github.com/joepjoosten/aws-cli-mfa-oh-my-zsh) - sweharrisの[aws-cli-mfa](https://github.com/sweharris/aws-cli-mfa)をベースにしたAWS CLI MFAプラグイン。プロファイルに`mfa_device`を指定できる。
- [aws-mfa](https://github.com/FreebirdRides/oh-my-zsh-aws-mfa) - AWS MFAを使用するためのプラグイン。
- [aws-plugin](https://github.com/pookey/zsh-aws-plugin) - `aws`コマンドにヘルパー関数を追加。mfaおよび`assume-role`のヘルパーを含む。
- [aws-upload](https://github.com/borracciaBlu/aws-upload-zsh) - 生産性を`aws-upload`で高める。
- [aws-vault (blimmer)](https://github.com/blimmer/zsh-aws-vault) - [aws-vault](https://github.com/99designs/aws-vault)用のプラグイン。タブ補完を含む。
- [aws-vault (zsh-contrib)](https://github.com/zsh-contrib/zsh-aws) - [aws-vault](https://github.com/99designs/aws-vault)とper-window AWSプロファイルのサポートを`tmux`に統合。
- [aws-vault-profiles](https://github.com/jonscheiding/zsh-plugin-aws-vault-profiles) - [aws-vault](https://github.com/99designs/aws-vault)の使用を`$AWS_PROFILE`環境変数と統合するためのプラグイン。
- [aws](https://github.com/apachler/zsh-aws) - オリジナルの [oh-my-zsh](https://ohmyz.sh/) [aws](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/aws) からフォークされた。 `awscli` の補完機能およびAWSプロファイルの管理・プロンプトに表示するためのいくつかのユーティリティを含む。
- [aws2](https://github.com/drgr33n/oh-my-zsh_aws2-plugin) - [awscli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)バージョン2の補完サポートを提供し、AWSプロファイルの管理およびプロンプト表示に必要ないくつかのユーティリティを提供。
- [awsmultiaccount](https://github.com/acidix/zsh-awsmultiaccount) - AWSのプロファイルと、マルチアカウント組織内のロールの仮想化を管理。AWSプロファイルの切り替えや、異なるアカウントでのOrganizationAccountAccessRoleの仮想化を簡単に行うためのヘルパー関数を提供。 `aws` cliと [jq](https://stedolan.github.io/jq/)を要する
- [awsp](https://github.com/suonto/awsp-zsh-plugin) - ZSH用のAWSプロファイル管理。oh-my-zshの [aws](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/aws/aws.plugin.zsh)プラグインをインスピレーションとして作成。現在アクティブなAWSプロファイルの詳細を表示。
- [awsssh](https://github.com/raisedadead/zsh-awsssh) - リスト、選択し、 `ssh` にEC2インスタンスに接続。
- [awsume](https://github.com/Sordie/AWSume) - 現在の [awsume](https://github.com/trek10inc/awsume) プロファイルの表示を可能にするプラグイン。
- [azcli](https://github.com/dmakeienko/azcli) - Azure cliツールの使用を支援。
- [azure-keyvault](https://github.com/milespossing/Azure-Keyvault-Zsh) - CLIからAzure KeyVaultの操作を簡潔に。
- [azure-subscription](https://github.com/dmakeienko/azure-subscription-prompt) - 現在のAzureサブスクリプションとテナントに関する情報を表示。
- [banner](https://github.com/drkhsh/zsh-banner) - セッション開始時にANSI/ASCIIアートを表示。
- [baseballfunfacts](https://github.com/richardmoyer/baseballfunfacts) - シェルにランダムなベースボール関連の「面白い事実」を表示。 `fortune` と `cowsay` がインストールされている必要がある。
- [bash-quote](https://github.com/jtprog/bash-quote) - Bash.imからランダムな引用を取得。
- [bash](https://github.com/chrissicool/zsh-bash) - ZSHをBashとより互換性を持つようにする。sourceコマンドを再定義し、 の動作に近づける。また、 の補完を有効にする。 `bash` `bash`
- [bat](https://github.com/fdellwing/zsh-bat) - [bat](https://github.com/sharkdp/bat) ユーザー向けにいくつかのヘルパーエイリアスを追加。
- [battery_state](https://github.com/Jactry/zsh_battery_state) - 右プロンプトにバッテリー状態を表示。
- [bd](https://github.com/Tarrasch/zsh-bd) - 特定のディレクトリに戻るが、 `cd ../../..` を行わない。
- [bepoptimist](https://github.com/sheoak/zsh-bepoptimist/) フランス語の [bépo](http://bepo.fr/wiki/Accueil) キーボード向けにviモードをリマップ。
- [better-chmod](https://github.com/Balzabu/zsh-better-chmod) - `bchmod` コマンド（およびオプションの `chmod` の置き換え）を追加。シンボリックおよび八進数の権限フォーマットを受け入れ、入力検証と色付き出力を提供。
- [bitbucket-git-helpers](https://github.com/unixorn/bitbucket-git-helpers.plugin.zsh) - ヘルパースクリプトを追加して、BitbucketのPRを作成したり、現在のブランチにディレクトリを開くことができる。
- [bitwarden (casonadams)](https://github.com/casonadams/bitwarden-cli) - [Bitwarden](https://bitwarden.com/download/) CLIのフュージーファインダー。 [fzf](https://github.com/junegunn/fzf) を使用。 [jq](https://stedolan.github.io/jq/) を要する。
- [bitwarden (game4move78)](https://github.com/Game4Move78/zsh-bitwarden) - [bitwarden](https://bitwarden.com/) セッションの管理を行う関数を追加。
- [bitwarden (kalsowerus)](https://github.com/kalsowerus/zsh-bitwarden) - ウィジェットを開き、あなたの バンクアイテムを表示。アイテムを選択すると、ユーザー名またはパスワードがシェルに書き込まれるか、クリップボードにコピーされる。 、 および を要する。 [fzf](https://github.com/junegunn/fzf) [Bitwarden](https://bitwarden.com/) [fzf](https://github.com/junegunn/fzf) `jq` `bitwarden`
- [blackbox](https://github.com/StackExchange/blackbox) - Stack Exchangeが開発した、キー/認証情報を安全に `git` リポジトリに保存するツール。
- [bob](https://github.com/wintermi/zsh-bob) - [bob](https://github.com/MordechaiHadad/bob) を用いたクロスプラットフォームかつ使いやすいNeovimバージョンマネージャーのプラグイン。
- [bofh](https://github.com/fundor333/bofh) - ランダムなbofhの運命を表示する関数を追加。
- [bol](https://github.com/ikhurramraza/bol) - ターミナルを開いたときにランダムな引用を表示。
- [boss-docker](https://github.com/bossjones/boss-docker-zsh-plugin) - macOSで `docker` を管理。
- [boss-git](https://github.com/bossjones/boss-git-zsh-plugin) - `git` 用のいくつかの便利なエイリアスを追加。
- [branch-manager](https://github.com/elstgav/branch-manager) - `git` ブランチの管理を行うプラグイン。
- [brave](https://github.com/troykelly/oh-my-zsh-brave) - [Brave](https://brave.com) プロファイルの管理。このプラグインにより、braveコマンドにプロファイル名を付けて、特定のユーザーのプロファイルでBraveブラウザを起動できます。また、プロファイル名の補完を実装しており、完全なプロファイル名を手動で入力する必要がなくなる。
- [brew (rhuang2014)](https://github.com/rhuang2014/brew) - [Homebrew](https://brew.sh/) パッケージマネージャー用のスタンドアローンプラグイン。
- [brew (wintermi)](https://github.com/wintermi/zsh-brew) - [Homebrew](https://brew.sh/) パッケージマネージャー用のシンプルプラグイン。
- [brew-install](https://github.com/marceloclp/zsh-brew-install) - WSLで [brew](https://brew.sh) をインストールおよびロード。
- [brew-switcher](https://github.com/fielding/zsh-brew-switcher) - Apple Silicon Macで現在アクティブなアーキテクチャ（arm64またはx86_64）に基づき、Homebrewのインストールを自動的に切り替える。
- [browse-commit](https://github.com/adolfoabegg/browse-commit) - コマンドラインから任意のコミットを開くことができる。
- [bruse](https://github.com/aubreypwd/zsh-plugin-bruse) - パッケージの異なるバージョンを簡単に `brew link` できるようにする。
- [btrfs-snapper](https://github.com/crisis1er/zsh-btrfs-snapper) - openSUSE Tumbleweedでbtrfsファイルシステムの管理およびsnapperスナップショット制御を行うプラグイン。ネイティブツールにはない、強化されたコマンド、セーフティガード、フィルタービューを提供。
- [bumblebee](https://github.com/Niverton/zsh-bumblebee-plugin) - コマンドラインに `optirun` を前置するかどうかを切り替えるプラグイン。
- [bw](https://github.com/begris/bw-zsh-plugin) - [Bitwarden](https://bitwarden.com) に保存された認証情報をフォーマットし、Bitwarden [CLI](https://bitwarden.com/download/) から簡単にアクセスできるようにする。各アクション前に有効なセッションを取得しようとするため、事前に明示的なログインは不要。
- [bws](https://github.com/elogiclab/zsh-bws) - [Bitwarden](https://bitwarden.com) センテットマネージャーからシークレットを取得する際の簡易化と改善。
- [c](https://github.com/sebastiangraz/c) - いくつかの `git` ショートカットを追加。
- [calc (arzzen)](https://github.com/arzzen/calc.plugin.zsh) - ZSH用の計算機。
- [calc (sam-programs)](https://github.com/Sam-programs/zsh-calc) - 数学計算を前接語なしで実行できるようにする
- [calibre-zaw-source](https://github.com/junkblocker/calibre-zaw-source) - [Calibre - E-book management](https://calibre-ebook.com/) ソース for [zaw](https://github.com/zsh-users/zaw)
- [caniuse](https://github.com/walesmd/caniuse.plugin.zsh) - ZSH に [Can I Use](https://caniuse.com) のサポートを追加
- [caper-bush](https://github.com/kobylinski/caper-bush) - Gitのタブ補完をAIを使って、ステージされた変更の簡潔で文脈に適した要約を生成することで強化。OpenAIキーが必要であり、`jq` および `yq` を要求する
- [careful_rm](https://github.com/MikeDacre/careful_rm) - `rm` のラッパーで、ゴミ箱／リサイクルと有用な警告を追加
- [case](https://github.com/rtuin/zsh-case) - ZSHプラグインで、出力のケースを切り替えられる2つのアリア `tolower` および `toupper` を追加
- [ccline](https://github.com/jianshuo/ccline) - zshプロンプトに思考をタイプする — コマンドも前接語も不要 — そしてClaudeまたはCodexから答えを取得。答えにシェルコマンドが含まれている場合、一度確認して実行する
- [ccusage](https://github.com/hydai/zsh-ccusage) - リアルタイムAI使用コストを、`ccusage` CLIツールから直接ターミナルプロンプトに表示
- [cd-gitroot](https://github.com/mollifier/cd-gitroot) - ZSHプラグインで、`cd` を `git` リポジトリのルートディレクトリに設定
- [cd-ls](https://github.com/zshzoo/cd-ls) - `ls`を自動的に `cd`後にインストールします。
- [cd-reminder](https://github.com/bartboy011/cd-reminder) - 指定されたディレクトリに移動する際のリマインダーを表示 `cd`
- [cd-reporoot](https://github.com/P4Cu/cd-reporoot) - ZSHプラグインで、現在のリポジトリチェックアウトのルートディレクトリに `cd` を追加
- [cd-ssh](https://github.com/jeffwalter/zsh-plugin-cd-ssh) - 誤って したときに にサーバーを接続 `ssh` `cd`
- [cdbk](https://github.com/MikeDacre/cdbk) - ZSHプラグインで、簡単に名前付きディレクトリを作成できるようにする — 任意のディレクトリへのショートカットを提供
- [cdc](https://github.com/evanthegrayt/cdc) - ユーザーが定義したディレクトリリストのサブディレクトリに移動する際のディレクトリ変更を容易にする。タブ補完、セッション履歴、`pushd`、`popd` および `dirs` の同等機能を含む
- [cdh](https://github.com/johncassol/cdh) - ユーザーが訪れたディレクトリの履歴を管理・ナビゲートできるようにする。ディレクトリ履歴ファイルを維持し、この履歴と相互作用するための複数のコマンドを提供
- [cdhist](https://github.com/joknarf/cdhist) - cd history/subdir/locatedirナビゲーション。シンプルなcd履歴、aliasビルトイン を追加して 履歴を追加、既に訪れたディレクトリに迅速に切り替え可能、、 または を使用して任意のディレクトリに迅速にcd `cd` `cd` `locate` `mlocate` `plocate`
- [cdr](https://github.com/willghatch/zsh-cdr) - ZSH用の`cdr`の簡単な設定。
- [change-case](https://github.com/mtxr/zsh-change-case) - コマンドライン内で大文字と小文字の間を迅速に切り替えるためのプラグイン。:sunglasses:
- [cheatsheet](https://github.com/0b10/cheatsheet) - 簡単にチートシートを表示・作成・編集できるプラグイン
- [check-deps](https://github.com/zpm-zsh/check-deps) - ZSHプラグイン向けのヘルパーで、必要な依存関係のインストール方法を表示できるようにする。Debian（およびUbuntuのような派生）やArch（およびその派生）、Node.js、ZSHプラグインに対応。[zpm](https://github.com/zpm-zsh/zpm) フレームワークを使用している場合に有効
- [chgo](https://github.com/sbfaulkner/chgo-plugin-zsh) - `chruby` のクローンで、複数のGoバージョンの切り替えを容易にしたバージョン
- [claude-code-shell](https://github.com/ArielTM/zsh-claude-code-shell) - 自然言語コメントを [Claude Code](https://claude.ai/claude-code) を使ってシェルコマンドに翻訳
- [claude-shell](https://github.com/myk-org/claude-shell) - Claude AIを用いて知能あるシェル補助を提供。自然言語コマンド翻訳、コマンド説明、エラー修正、知能ある履歴検索、およびKittyターミナル統合による高度なスクロールバック分析の7つの強力な機能を提供
- [claude](https://github.com/HundredAcreStudio/zsh-claude) - ZSH用のClaude AIによるAIパワーコマンド提案と説明。シンプルなキーバインディングで知能あるシェルコマンドヘルプを取得。自然言語を実行可能なシェルコマンドに変換、または複雑なコマンドの詳細な説明を取得 — すべてClaude AI統合でターミナル内に直接表示
- [clean-history](https://github.com/Automaat/zsh-clean-history) - 知能あるZSH履歴クリーンアッププラグイン。類似度分析により、誤字や失敗したコマンドを自動的に削除。失敗したコマンドが成功したコマンドに類似している場合を削除し、稀なコマンドが一般的な変体に類似している場合を検出、コマンドの成功／失敗を自動的にキャプチャ、類似度閾値と行動を調整し、クリーン前にバックアップを作成
- [clean-project](https://github.com/wwilsman/zsh-clean-project) - プロジェクトからファイルを削除（デフォルトで自動）する。`.DS_Store` および `Thumbs.db` ファイルがディレクトリを混在させないために有用
- [cleanzip](https://github.com/Xeferis/cleanzip) - データが含まれるべきでないzipファイルを作成するのに役立つ
- [cleanzsh](https://github.com/diegoos/cleanzsh) - 軽量テーマ。ユーザー、現在のディレクトリ、Gitブランチ、実行バージョン（Ruby、Node、Python、PHP、Bun）にデコレーターを含む。コンパクトなNerd Fontアイコンを提供
- [clipboard](https://github.com/zpm-zsh/clipboard) - システムクリップボードにアクセスできるクロスプラットフォームヘルパー関数を追加。macOS、X11（およびWayland）およびCygwinで動作
- [cmd-status](https://github.com/BlaineEXE/zsh-cmd-status) - コマンドの状態を報告（リターンコードおよび実行時間）
- [cmdtime](https://github.com/tom-auger/cmdtime) - [timer](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/timer) プラグインからフォークされたターミナルプロンプトにコマンドの実行時間を表示
- [code-review](https://github.com/xorkevin/code-review-zsh) - `git difftool` を `git merge-base target_branch base_branch` および `target_branch` で起動
- [code-stats](https://gitlab.com/code-stats/code-stats-zsh) - キーボード入力の回数をカウントし、統計を [Code::Stats](https://codestats.net/) にログ出力
- [codex](https://github.com/tom-doerr/zsh_codex) - OpenAIの強力なCodex AIをコマンドラインで使用できるようにする
- [coffee-time](https://github.com/gakimball/zsh-coffee-time) - `caf` アリアを追加。これは `caffeinate -dims` を実行する。追加のフラグはすべてを保持する：システム、ドライブ、ディスプレイ
- [color-logging](https://github.com/p1r473/zsh-color-logging) - プッシュブレットおよびプッシュオーバーへの通知を含む非常に使いやすいログライブラリを提供。`cat` および `ls` などのツールを色分けし、色のライブラリを提供
- [colored-man-pages-mod](https://github.com/zuxfoucault/colored-man-pages_mod) - [ohmyzsh/ohmyzsh/plugins/colored-man-pages](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/colored-man-pages/colored-man-pages.plugin.zsh) からフォークされた。`man` の出力を色分け
- [colored-man-pages-plus](https://github.com/diverdale/colored-man-pages-plus) - `man` ページを役割に基づいて意味的に色分け。カスタム真色テーマ、OSC-8リンク、自動光/暗検出を提供
- [colored-man-pages](https://github.com/ael-code/zsh-colored-man-pages) - `man` ページを色分け
- [colorize-functions](https://github.com/Freed-Wu/zsh-colorize-functions) - ZSHにおける関数を色付けします
- [colorize](https://github.com/zpm-zsh/colorize) - さまざまなプログラムの出力を色付けします
- [colorls](https://github.com/Kallahan23/zsh-colorls) - いくつかの便利なショートカットを色付き関数に定義します
- [colors (Tarrasch)](https://github.com/Tarrasch/zsh-colors) - CLIからテキストを色付けしやすくします。 `red foo` だけでは動作します
- [colors (zpm-zsh)](https://github.com/zpm-zsh/colors) - ZSHにおける強化された色付き表示
- [command-execution-timer](https://github.com/olets/command-execution-timer) - インタラクティブシェルコマンドの実行時間を表示します
- [command-not-found (freed-wu)](https://github.com/Freed-Wu/zsh-command-not-found) - コマンドが見つからない場合、インストールすべきパッケージを `command-not-found` パッケージを使って提案します
- [command-not-found (tarrasch)](https://github.com/Tarrasch/zsh-command-not-found) - [oh-my-zsh](https://ohmyz.sh) の [command-not-found](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/command-not-found) プラグインのミラーなので、oh-my-zshのすべてを含めなくてもよい
- [command-note](https://github.com/KKRainbow/zsh-command-note.plugin) - 複雑なコマンドを記録し、それについてコメントを付加します
- [command-time](https://github.com/popstas/zsh-command-time) - ZSHおよび における長時間のコマンドの実行時間を表示します。 ビルトインに似ていますが、ユーザー＋システム時間 ≥ のときのみ出力します [powerlevel9k](https://github.com/bhilburn/powerlevel9k) `REPORTTIME` `REPORTTIME`
- [communism](https://github.com/victoria-riley-barnett/Communism/) - 1日1回、マーカーの引用を表示します
- [compe](https://github.com/tamago324/compe-zsh) - [nvim-compe](https://github.com/hrsh7th/nvim-compe) に対する補完を追加します
- [conda (themysciradata)](https://github.com/ThemysciraData/conda.plugin.zsh) - [conda](https://conda.io) 用のプロンプトセグメントといくつかのベース関数のエイリアスを追加します
- [conda (wardhanisukoco)](https://github.com/wardhanisukoco/zsh-plugin-conda/) - 自動的に を読み込み、テーマで使用する バージョンを検出するための関数を提供します `conda` `conda`
- [conda-init](https://github.com/commiyou/conda-init-zsh-plugin) - 環境変数を整理し、 [conda](https://conda.io) が `tmux` を壊さないようにします
- [condaenv](https://github.com/saravanabalagi/zsh-plugin-condaenv) - 現在の 環境名を返す 関数を提供します `condaenv_prompt_info` `conda`
- [confer](https://github.com/SleepyBag/zsh-confer) - プログラムの設定ファイルを自動的に検索し、例えば `conf vim` で設定ファイルを編集できるようにします `vim`
- [containers](https://github.com/redxtech/zsh-containers) - インストールされたものに基づき、 [podman](https://podman.io) と [docker](https://docker.com) のコマンド間のエイリアスとより良い互換性を提供します
- [copy-pasta](https://github.com/ChrisPenner/copy-pasta) - GUIのように、ターミナル内でファイルをコピー・ペーストできます
- [copyzshell](https://github.com/rutchkiwi/copyzshell) - 別のマシンに `ssh` を使ってシェル設定をコピー・ペーストできるZSHプラグインです
- [cordova](https://github.com/andredestro/cordova-zsh-plugin) - [Apache Cordova](https://cordova.apache.org/) コマンドに、gitスタイルのショートカット（gco, gcbなど）をインスピレーションから得た便利なエイリアスを提供します
- [cowsay](https://github.com/phucisstupid/cowsay.zsh) - ターミナルを開くたびに、 `cowsay` でジョークを表示します
- [crash](https://github.com/molovo/crash) - ZSHにおける適切なエラーハンドリング、例外、try/catchを追加します
- [crayon-syntax](https://github.com/gsemet/crayon-syntax-zsh) - ZSHのシンタックスハイライト（Crayon Plugin for Wordpress用）
- [create-ai-memory](https://github.com/rambaarde/create-ai-memory) - AIコードCLI向けの持続的でエージェントに依存しないセッションメモリ；Claude Code、Codex、Gemini、Cursor、opencodeのZSH起動器にプロファイル、プロジェクト、セッションコンテキストをMarkdownのフォルダとして読み込みます
- [cros-auto-notify](https://github.com/D3STY/cros-auto-notify-zsh) - 長時間実行されたタスクが完了したときに自動的に通知を送信します。macOSおよびLinux（ `hterm-notify` がインストールされている場合）で動作します
- [crystal](https://github.com/veelenga/crystal-zsh) - [Crystal](https://github.com/crystal-lang/crystal) 用のプラグインです
- [ctrl-z](https://github.com/Zile995/zsh-ctrl-z) - [fzf](https://github.com/junegunn/fzf) を使って、ZSHのプロンプトから一時停止したバックグラウンドジョブを視覚的に閲覧・再開・終了できます
- [cvideo](https://github.com/aubreypwd/zsh-plugin-cvideo) - `ffmpeg` を使って、動画を迅速に圧縮します
- [cwebp](https://github.com/adi-li/zsh-cwebpb) - JPG、PNG、GIF、BMP、TIFFなどの一般的な画像フォーマットを、Googleの `cwebp` ツールを使って一括でWebPフォーマットに変換します
- [cycle-fav-dirs](https://github.com/cibinmathew/cycle-fav-dirs) - お気に入りのディレクトリを順に切り替えます
- [cycle-jobs](https://github.com/aemonge/zsh-cycle-jobs) - ZSH Cycle Jobs Pluginは、単一のキーボードショートカットでバックグラウンドジョブを順に切り替えることで、ターミナルワークフローを強化するシンプルで強力なツールです。開発者やシステム管理者が複数のバックグラウンドプロセスを頻繁に扱う場合に特に有用です
- [czhttpd](https://github.com/jsks/czhttpd) - 99.9%純ZSHで書かれたシンプルなHTTPサーバーです
- [databricks](https://github.com/SlavaYakovenko/zsh-databricks) - Zsh向けに便利なエイリアスとプロファイル管理を備えたDatabricks CLI統合を強化します
- [dce](https://github.com/Onnokh/zsh-dce) - dockerコンテナに迅速に移動できるようにし、現在のフォルダコンテキストを失わないようにします
- [ddev](https://github.com/voronkovich/ddev.plugin.zsh) - [ddev](https://github.com/drud/ddev) ツールを用いてPHP開発環境を構築するためのZSHプラグインです
- [declare-zsh](https://github.com/z-shell/declare-zsh) - コマンドの 用のパーサーです。これにより、コマンドラインから に対して以下の操作が可能です：プラグインの有効化・無効化、スニペットの追加・削除です [zinit](https://github.com/zdharma-continuum/zinit) `.zshrc` `.zshrc`
- [deepx](https://github.com/GetAmbush/deepx-zsh-plugin) - ワークフローと生活の質を向上させるための便利で楽しいコマンドのコレクションです
- [deer](https://github.com/Vifon/deer) - ZSH用のファイルナビゲーターで、 [ranger](https://ranger.github.io/) に強くインスピレーションを受けたものです
- [def](https://github.com/thevinter/def) - 任意のディレクトリでデフォルトコマンドを指定して実行できます
- [defer](https://github.com/romkatv/zsh-defer) - コマンドの実行を、 が他の作業を終え、ユーザー入力の待ち受け中になるまで遅らせる。その意図は、段階的に を起動することにある。これは における Turbo モードと同様の動作をする。 `zsh` `zsh` `zsh` [zinit](https://github.com/zdharma-continuum/zinit)
- [deja-vu](https://github.com/justyntemme/zsh-deja-vu) - 実行されたディレクトリに基づいてコマンド履歴をログ記録し、取得する。過去数週前にプロジェクトフォルダ内で実行した複雑な `docker` または `git` コマンドを忘れずに。
- [delete-prompt](https://github.com/aoyama-val/zsh-delete-prompt) - 現在の行内のプロンプトテキストを削除する ZSH ウィジェット。ウェブサイトや README から貼り付けたコマンドを実行する際に便利。先頭にアルファベット・数字以外の文字とスペースが検出されると、プロンプトと判断される。
- [deno (cowboyd)](https://github.com/cowboyd/zsh-deno) - 便利な [deno](https://deno.land/) アライアスと設定。
- [deno (tricked-dev)](https://github.com/Tricked-dev/deno-zsh-plugin) - deno が既にインストールされていない場合、起動時に自動的に [deno](https://deno.land/) を `$HOME/.deno` にインストール。
- [depot-tools](https://github.com/kuoe0/zsh-depot-tools) - chromium depot_toolsをインストールするためのシンプルな[oh-my-zsh](https://ohmyz.sh/)プラグイン。このプラグインをインストールすると、すべてのchromium depot_toolsが自動的に`$PATH`に追加されます。
- [dev](https://github.com/sbfaulkner/dev-plugin-zsh) - Shopify の内部開発ツールの軽量バージョンを提供
- [dietpi](https://github.com/unixorn/dietpi.plugin.zsh) - を実行中のマシンにログインした際に、 にユーティリティを追加（かつ、 で自動的に実行できるアライアスを含む）。 [dietpi](https://dietpi.com) `$PATH` `sudo` [dietpi](https://dietpi.com)
- [diff-so-fancy](https://github.com/z-shell/zsh-diff-so-fancy) - [diff-so-fancy](https://github.com/so-fancy/diff-so-fancy)を自動的にインストールし、ZSHおよび`git`で使用可能にします。
- [ding](https://github.com/jessetipton/ding) - 長時間実行されるシェルコマンドが終了した際に、通知音を再生。
- [diractions](https://github.com/AdrieanKhisbe/diractions) - 短い論理名または記憶に残る名前をディレクトリにマッピングし、それらに迅速にアクセスしたり、そのディレクトリ内で操作を行うことができる。
- [dirbrowse](https://github.com/giovannilupi/dirbrowse/) - における プラグインのカスタマイズバージョン。 [dirbrowse](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dircycle) [oh-my-zsh](https://ohmyz.sh)
- [dircolors-solarized (joel-porquet)](https://github.com/joel-porquet/zsh-dircolors-solarized) - Solarized dircolors プラグイン。暗いまたは明るいターミナル背景に対応。
- [dircolors-solarized (pinelibg)](https://github.com/pinelibg/dircolors-solarized-zsh) - [Solarized Color Theme for GNU ls](https://github.com/seebi/dircolors-solarized) を有効にする。
- [directory-history](https://github.com/tymm/zsh-directory-history) - ZSH 用のディレクトリごとの履歴。ディレクトリに敏感な前後ナビゲーションおよび部分文字列検索を実装。
- [direnv](https://github.com/ptavares/zsh-direnv) - [direnv](https://github.com/direnv/direnv.git) をインストールおよびロードするためのプラグイン。[zsh-pyenv](https://github.com/mattberther/zsh-pyenv) にインスパイアされた。
- [dirrc](https://github.com/gmatheu/shell-plugins) - あなたが に移動したディレクトリにある場合、 を実行。 `.dirc` `cd`
- [dirstack](https://github.com/gepoch/oh-my-zsh-dirstack) - 1行に dirstack の情報を表示するプラグイン。
- [diskfree](https://github.com/alex-crouch/zsh-diskfree/) - ディスク上の空き容量をプロンプトに表示。
- [doas (anatolykopyl)](https://github.com/anatolykopyl/doas-zsh-plugin) - 現在または前回のコマンドの前に `doas` を簡単にプレフィックスするため、 `ESC` を2回押下。
- [doas (senderman)](https://github.com/Senderman/doas-zsh-plugin) - 現在または前回のコマンドの前に `doas` を簡単にプレフィックスするため、 `ESC` を2回押下。
- [docker-aliases](https://github.com/webyneter/docker-aliases) - 日常的に使える `Docker` アライアス。
- [docker-compose](https://github.com/sroze/docker-compose-zsh-plugin) - プロンプトに `docker` コンテナのステータスを表示。
- [docker-helpers](https://github.com/unixorn/docker-helpers.zshplugin) - `docker` ヘルプスクリプトのコレクション。
- [docker-machine](https://github.com/asuran/zsh-docker-machine) - ZSH 用の docker-machine プラグイン。
- [docker-run](https://github.com/rawkode/zsh-docker-run) - コマンドを「自然に」再開する。我々がコンテナを扱います。
- [dogesh](https://github.com/keithhamilton/oh-my-dogesh) - Dogification プラグイン。
- [doppler](https://github.com/lsdcapital/zsh-doppler) - 環境変数から現在の [Doppler](https://doppler.com) プロジェクトと設定をシェルプロンプトに表示。
- [dot-up](https://github.com/toku-sa-n/zsh-dot-up) - `...`, `....`, `.....` など、親ディレクトリへ移動するための `cd` コマンドに変換。
- [dotbare](https://github.com/kazhala/dotbare) - [fzf](https://github.com/junegunn/fzf) を活用したインタラクティブな dotfile 管理。
- [dotfiles](https://github.com/vladmyr/dotfiles-plugin) - 複数マシン間で dotfile を同期するための `git`。
- [dotpyvenv](https://github.com/jeanpantoja/dotpyvenv) - あなたが に移動したディレクトリにある場合、以前 virtualenv で作成した名前が の python ビルド環境に自動的に切り替える。 `.pyvenv` `cd`
- [download](https://github.com/aubreypwd/zsh-plugin-download) - `aria2c` を使用してファイルをダウンロードするためのヘルパー。
- [dropbox](https://github.com/zpm-zsh/dropbox) - ZSH用の [dropbox](https://www.dropbox.com/) プラグインで、 `dropbox-cli` と `dropbox-uploader` コマンドを提供します。
- [drupal](https://github.com/yhaefliger/zsh-drupal) - 一般的なタスクにアライアスを追加し、 `drush` に対してタブ補完も提供。 [Artisan](https://github.com/jessarcher/zsh-artisan) にインスパイアされた。
- [dune-quotes](https://github.com/brokendisk/dune-quotes) - ランダムな Dune クォート生成プラグイン。
- [dune.zsh](https://github.com/bitpeppr/dune.zsh) - 広範な Dune クォートのプールからランダムにクォートを表示するプラグイン。
- [duration](https://github.com/rtakasuke/zsh-duration) - 実行時間がユーザー設定可能な閾値を超えた場合、コマンドの実行時間の表示。
- [dwim](https://github.com/oknowton/zsh-dwim) - 次に何をしたいかを予測する。コントロール-U キーを押下すると、現在または前回のコマンドラインを、次に実行したいコマンドに置き換える。
- [easy-motion](https://github.com/IngoHeimbach/zsh-easy-motion) - [vim-easymotion](https://github.com/easymotion/vim-easymotion) の ZSH パート。
- [ec2ssh](https://github.com/h3poteto/zsh-ec2ssh) - EC2インスタンスの一覧を表示し、でインスタンスにログインできるようにする。 `ssh`
- [edit-select](https://github.com/Michael-Matta1/zsh-edit-select) - ZSHコマンドラインにフルテキストエディタの体験を提供：コピー、カット、ペースト、取り消し／再実行、タイプによる置換、およびネイティブなX11/Waylandクリップボード統合。Shift+アローおよびマウス選択に対応。
- [editing-workbench](https://github.com/commiyou/zsh-editing-workbench) - 適切で複雑なコマンドライン編集（例：インクリメンタルヒストリーウォード補完）を追加。
- [edward cli](https://github.com/matthieusb/zsh-edward) - に対するスマート補完とエイリアスを追加。 [edward CLI micro-service launcher](https://github.com/yext/edward)
- [elixir](https://github.com/gusaiani/elixir-oh-my-zsh) - Elixir、IEX、Mix、KiexおよびPhoenix向けのショートカットを追加。
- [emacs (cowboyd)](https://github.com/cowboyd/zsh-emacs) - gitのコミットメッセージの編集などのCLI操作においてEmacsをデフォルトに設定し、便利なエイリアスを構築。
- [emacs (flinner)](https://github.com/Flinner/zsh-emacs) - Emacsのデーモン機能を使用し、ユーザーがTerminal経由の接続または同じホスト上のXフレームで開いたフレームを迅速に開けるようにする。 `ssh`
- [emoji-cli](https://github.com/b4b4r07/emoji-cli) - コマンドラインでのエモジ補完。 :scream:
- [emoji-fzf](https://github.com/pschmitt/emoji-fzf.zsh) - 優れたに向けたカスタマイズ可能なZSHプラグイン。これはに強くインスパイアされている。 [emoji-fzf](https://github.com/noahp/emoji-fzf) [emoji-cli](https://github.com/b4b4r07/emoji-cli)
- [emojis](https://github.com/MichaelAquilina/zsh-emojis) - 便利な変数に多数のASCIIアートエモジを環境に追加。
- [enhancd](https://github.com/b4b4r07/enhancd) - ユーザーが訪れたすべてのディレクトリを記憶し、パス名解決に使用するシンプルなツール。これは、コマンドを強化するもの。 `cd`
- [ensure-kube-context](https://github.com/do-i-need-a-username/ensure-kube-context) - さまざまなKubernetesコマンド（例：、、など）にフラグを確実に渡す。 `--context` `kubectl` `cilium` `stern`
- [env-secrets](https://github.com/singular0/zsh-env-secrets) - 安全なストレージバックエンドからシークレットを自動取得し、シェル起動時に環境変数としてエクスポート。これにより、センシティブな情報がテキストファイルに保存される必要がなくなる。およびmacOSのキーチェーンと互換。 `pass`
- [envrc](https://github.com/fabiogibson/envrc-zsh-plugin) - ディレクトリ内にあるファイルが存在する場合、環境変数を自動的に読み込み・アンロード。 `.envrc`
- [escape-backtick](https://github.com/bezhermoso/zsh-escape-backtick) - "`"を2回タップすると、エスケープされたバックティックを迅速に挿入。
- [ev](https://github.com/emhat098/ev) - evはZSH／プラグインで、コマンド補完を進化させたもの。プロンプトの下に選択可能な提案リストを表示し、タイプを続けるごとに深くなる（コマンド→サブコマンド→フラグ）。必要に応じて、ナビゲーション可能なリスト（ゴーストテキスト以外）としての代替として使用。、、およびその他のCLIサブコマンドも対応。 [Oh My Zsh](https://ohmyz.sh/) [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions) `git` `gh` `docker`
- [evalcache](https://github.com/mroth/evalcache) - バイナリ初期化コマンド（例：）の出力をキャッシュし、シェル起動時間を短縮する。新しいシェルセッションごとに再実行するのではなく、キャッシュから読み込む。 `eval "$(hub alias -s)"`
- [evil-registers](https://github.com/zsh-vi-more/evil-registers) - ZLE `vi`コマンドを拡張し、およびエディタの名前付きレジスタやシステム選択、クリップボードにリモートアクセスできるようにする。 `vim` `nvim`
- [exa (DarrinTisdale)](https://github.com/DarrinTisdale/zsh-aliases-exa) - （現代的なの代替）を拡張するエイリアスを有効化。 [exa](https://github.com/ogham/exa) `ls`
- [exa (mohamedelashri)](https://github.com/MohamedElashri/exa-zsh) - （現代的なの代替）に対するエイリアスを追加。 [exa](https://github.com/ogham/exa) `ls`
- [exa (ptavares)](https://github.com/ptavares/zsh-exa) - をインストールおよびロード。 [exa](https://github.com/ogham/exa.git)
- [exa (ritchies)](https://github.com/RitchieS/zsh-exa/) - の使用を簡単にするためのエイリアスを追加。 [exa](https://github.com/ogham/exa.git)
- [exa (todie)](https://github.com/todie/exa.plugin.zsh) - （現代的なの代替）に対する統合と補完。 [exa](https://github.com/ogham/exa) `ls`
- [exa (zap-zsh)](https://github.com/zap-zsh/exa) - 一般的なコマンドをoverrideし、を使用するようにする。 [ogham/exa](https://github.com/ogham/exa)
- [exa (zplugin)](https://github.com/zplugin/zsh-exa) - をに置き換える。 `ls` [ogham/exa](https://github.com/ogham/exa)
- [exa (zshell)](https://github.com/z-shell/zsh-exa) - をに置き換える。 `ls` [ogham/exa](https://github.com/ogham/exa)
- [exa-ls (zpm-zsh)](https://github.com/zpm-zsh/ls) - ls用のZshプラグイン。
- [exa-ls](https://github.com/birdhackor/zsh-exa-ls-plugin) - エイリアスを追加し、をおよびの代替として使用できるようにする。 [exa](https://github.com/ogham/exa) `ls` `tree`
- [execution-time](https://github.com/gwangyi/execution-time) - コマンドの実行時間を自動的に計算。実行時間が指定された閾値を超えた場合、コマンド名（arg0）、実行時間、終了コードを通知。通知はOSCエスケープシーケンス（OSC 9およびOSC 777）で行われ、iTerm2、Windows Terminal、Kitty、WezTerm、foot、urxvtなどの現代的なターミナルエミュレーターがネイティブにサポートしており、システム通知または外部コマンド（で構成）を表示。背景で非同期に実行される。 `ET_NOTIFY_COMMAND`
- [exercism](https://github.com/fabiokiatkowski/exercism.plugin.zsh) - 向けのプラグイン。 [exercism.io](http://exercism.io/)
- [expand-ealias](https://github.com/zigius/expand-ealias.plugin.zsh) - スペースキーで特定のエイリアスを展開。
- [expand-space](https://github.com/spqw/zsh-alias-expand-space) - スペースキーを押下時にコマンド位置のエイリアスを展開。 `zsh`
- [expand](https://github.com/MenkeTechnologies/zsh-expand) - スペースキーで通常のエイリアス、グローバルエイリアス、誤ったスペルやフレーズ、グロブ、履歴展開、$パラメータを展開。
- [expander](https://github.com/ianthehenry/zsh-expander) - ウィジェットで、カスタムエクスパンダーを作成し、で選択できるようにする。 `zle` [fzf](https://github.com/junegunn/fzf)
- [explain-shell (brokentoaster)](https://github.com/brokentoaster/zsh-explainshell) - 現在のコマンドラインをで検索するためにを使用。 `lynx` [explainshell.com](https://explainshell.com)
- [explain-shell (gmatheu)](https://github.com/gmatheu/shell-plugins) - 上でコマンドを開く。 [explainshell.com](https://explainshell.com)
- [extend-history](https://github.com/xav-b/zsh-extend-history) - 履歴に各コマンドの終了コードを追加してコマンド履歴を拡張。
- [ez-cmd](https://github.com/akgarhwal/ez-cmd) - 一般的なコマンドラインタスクを簡単で使いやすいショートカットとエイリアスで簡略化・効率化。
- [ez-compinit](https://github.com/mattmc3/ez-compinit) - をラップし、への呼び出しをキューに並べ、実際の呼び出しをあなたの終了時に実行するイベントに接続。これにより、を早期に呼び出すメリットを得ながら、そのデメリットを回避できる。 `compinit` `compdef` `compinit` `.zshrc` `compinit`
- [eza (clavelm)](https://github.com/clavelm/eza-omz-plugin) - `ls`を[eza-community/eza](https://github.com/eza-community/eza)に置き換える。
- [eza (mohamedelashri)](https://github.com/MohamedElashri/eza-zsh) - [eza](https://github.com/eza-community/eza)へのエイリアスを追加する。これは、`ls`の現代的な代替品である。
- [eza (twopizza9621536)](https://github.com/twopizza9621536/zsh-eza) - `ls`を[eza-community/eza](https://github.com/eza-community/eza)に置き換える。
- [eza (z-shell)](https://github.com/z-shell/zsh-eza) - `ls`を[eza-community/eza](https://github.com/eza-community/eza)に置き換える。
- [eza (zsh-contrib)](https://github.com/zsh-contrib/zsh-eza) - CatppuccinとRose Pineテーマ、スマートなデフォルト設定、フルエイリアスサポートを備えた[eza](https://github.com/eza-community/eza)用のプラグイン。
- [eza-ls](https://github.com/birdhackor/zsh-eza-ls-plugin) - [eza](https://github.com/eza-community/eza)が`ls`および`tree`の代替として動作できるようにエイリアスを追加する。
- [f-shortcuts](https://github.com/zpm-zsh/f-shortcuts) - `F1`から`F12`キーまでを用いたショートカットツールバーを作成する。
- [fancy-ctrl-z](https://github.com/mdumitru/fancy-ctrl-z) - 内のバージョンを別にしたバージョンなので、他のフレームワークのユーザーがすべてのをインポートする必要がない。 [oh-my-zsh](http://ohmyz.sh/) [oh-my-zsh](https://ohmyz.sh)
- [fast-alias-tips](https://github.com/decayofmind/zsh-fast-alias-tips) - 定義したエイリアスを忘れてしまった場合でも思い出せるようにする。[djui/alias-tips](https://github.com/djui/alias-tips)から移植された。[sei40kr/zsh-fast-alias-tips](https://github.com/sei40kr/zsh-fast-alias-tips)のアクティブなフォーク。
- [fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting) - `zsh-users/zsh-syntax-highlighting`を最適化・改善。より速い応答時間、切り替え可能なハイライトテーマを提供。
- [fastcache](https://github.com/QuarticCat/zsh-fastcache) - コマンド出力のキャッシュを実施し、シェルの起動時間を短縮する。
- [fauna](https://github.com/manojuppala/zsh-fauna) - 新しいターミナルを開いたり、zshを再起動したときに、絶滅・絶滅危惧種の動物をテーマにしたカラフルな高品質ANSIアートを表示する。野生生物保護について、1回のターミナルセッションごとに学べる！
- [fav](https://github.com/ddnexus/fav) - ZSH/[fzf](https://github.com/junegunn/fzf)プラグイン。重要なディレクトリの名前付きお気に入りを簡単に追加・呼び出せるようにする。
- [favorite-directories](https://github.com/seletskiy/zsh-favorite-directories) - お気に入りのディレクトリへの高速ジャンプ。
- [fd-plugin](https://github.com/MohamedElashri/fd-zsh) - [fd](https://github.com/sharkdp/fd)へのエイリアスを追加する。これは、`find`の現代的な代替品である。
- [fd](https://github.com/aubreypwd/zsh-plugin-fd) - [fzf](https://github.com/junegunn/fzf)を使ってディレクトリをブラウズできるようにする。
- [ffexport](https://github.com/Pakrohk/ffexport.plugin.zsh) - 軽量でZSH本体と統合されたビデオエクスポートマネージャー — プロファイル駆動の[FFmpeg](https://www.ffmpeg.org)エクスポート、持続的なZSHタブ補完、プロファイルのインポート/エクスポート、InstagramおよびYouTubeワークフロー向けの安全なデフォルト設定。
- [figures](https://github.com/zpm-zsh/figures) - ZSH用のユニコード記号。
- [firebase (rmrs)](https://github.com/rmrs/firebase-zsh) - プロンプトに、`firebase.json`ファイル（＝"firebaseプロジェクト"）を持つディレクトリにいることを示すインジケーターを追加する。
- [firebase (seqi)](https://github.com/Seqi/firebase-zsh) - Firebaseプロジェクトディレクトリまたはサブディレクトリにいるとき、現在の作業プロジェクトまたはプロジェクトエイリアスを表示する。
- [fishysave](https://github.com/dariogliendo/fishysave.zsh) - 関数やエイリアスをターミナルセッションから直接保存・更新できる。
- [fixnumpad-osx](https://github.com/zackintosh/fixnumpad-osx.plugin.zsh) - AppleキーボードのナンプットキーがZSHで認識されるようにする。
- [flow-cli](https://github.com/Data-Wise/flow-cli) - ADHD対応ZSHワークフローツール。10秒で作業を開始し、`work`でドーパミンの成果を追跡し、`win`で集中を維持。Git、R、Quarto、Claude Code向けのスマートディスパッチャを含む。 `dash`
- [flow-plugin](https://github.com/sandstorm/oh-my-zsh-flow-plugin) - このプラグインは、TYPO3 Flow配布版のすべてのサブディレクトリ内で`flow`コマンドを提供する。
- [flutter-zsh-shortcuts](https://github.com/dizzpy/flutter-zsh-shortcuts) - flutterコマンドへのクリーンなエイリアスを追加する。
- [fnm (dominik-schwabe)](https://github.com/dominik-schwabe/zsh-fnm) - [Fast Node Manager (fnm)](https://github.com/Schniz/fnm)が欠落している場合にインストールおよびロードする。
- [fnm (sukkaw)](https://github.com/SukkaW/zsh-fnm) - Node.jsバージョンマネージャー[`fnm`](https://fnm.vercel.app)への強化を提供する。
- [fnm (wintermi)](https://github.com/wintermi/zsh-fnm) - 高速かつシンプルなNode.jsバージョンマネージャー[fnm](https://github.com/Schniz/fnm)のヘルププラグイン。
- [forgit](https://github.com/wfxr/forgit) - fuzzy finder を活用した用のユーティリティツール。 `git` [fzf](https://github.com/junegunn/fzf)
- [fuckmit](https://github.com/mingeme/zsh-fuckmit) - AIを活用したのコミットメッセージ生成ツールコマンドラインツールに便利なエイリアスと関数を提供する。 [fuckmit](https://github.com/mingeme/fuckmit) `git`
- [functional](https://github.com/Tarrasch/zsh-functional) - ZSHの高階関数。
- [fuzzy-nav](https://github.com/claw-h/fuzzy-nav) - 高速かつ状態を保持したTerminal User Interface（TUI）ディレクトリナビゲーターおよびファイルブラウザ。ZSH本体にネイティブに組み込まれており、`fzf`および`fd`によって駆動される。
- [fuzzy-search-and-edit](https://github.com/seletskiy/zsh-fuzzy-search-and-edit) - ファイルのふつう検索を行い、一致した行に即座にファイルを開くZSH用のプラグイン。
- [fuzzy-wd](https://github.com/spodin/zsh-fuzzy-wd) - directoriesに[WD](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/wd)プラグインを適用した場合のふつう検索を追加する。
- [fz](https://github.com/changyuheng/fz) - [z](https://github.com/rupa/z)のタブ補完にふつう検索をスムーズに追加し、過去のディレクトリ履歴間を簡単に移動できるようにする。
- [fzf (gimbo)](https://github.com/gimbo/fzf.zsh) - [fzf](https://github.com/junegunn/fzf)をZSHで使うためのヘルパー。[brew.sh](https://brew.sh)が必要。
- [fzf (scaryrawr)](https://github.com/scaryrawr/fzf.zsh) - [fzf](https://github.com/junegunn/fzf)に、[PatrickF1/fzf.fish](https://github.com/PatrickF1/fzf.fish)にインスパイアされたキーバインディングを追加する。
- [fzf (unixorn)](https://github.com/unixorn/fzf-zsh-plugin/) - [fzf](https://github.com/junegunn/fzf)の履歴およびファイル検索を有効にする。
- [fzf (zsh-contrib)](https://github.com/zsh-contrib/zsh-fzf) - [fzf](https://github.com/junegunn/fzf)に美しいCatppuccinおよびRose Pineカラーテーマを設定し、ファイルおよびディレクトリ選択のキーバインディングを追加し、好むエディタおよびファイルマネージャーを接続する。これにより、ふつう検索が最初からナチュラルに感じられるようになる。
- [fzf-copyq-clipboard](https://github.com/magidc/fzf-copyq-clipboard-zsh-plugin) - へのサポートを追加する。 [fzf](https://github.com/junegunn/fzf) [CopyQ](https://hluk.github.io/CopyQ/)
- [fzf-dir-navigator](https://github.com/KulkarniKaustubh/fzf-dir-navigator) - ZSH用の、[fzf](https://github.com/junegunn/fzf)を活用した便利で使いやすいディレクトリナビゲーションプラグイン。ユーザーはどこからでも、どこへでもディレクトリに移動できるようになり、かつ最近訪問したディレクトリの履歴を維持できる。さらに、シェルセッション内でディレクトリ間をホットキーで移動できる。
- [fzf-fasd](https://github.com/wookayin/fzf-fasd) - [fzf](https://github.com/junegunn/fzf)と[fasd](https://github.com/clvv/fasd)を統合 --- `z`のタブ補完を`fzf`のフュージー検索で実現！
- [fzf-finder](https://github.com/leophys/zsh-plugin-fzf-finder) - [fzf](https://github.com/junegunn/fzf)と（オプションで）[bat](https://github.com/sharkdp/bat)および[fd](https://github.com/sharkdp/fd)との間で、カッコイイ検索キーバインディングを提供するプラグイン。`find`および`cat`にフォールバック。ローカルディレクトリツリー内のファイルを検索。
- [fzf-git-worktree](https://github.com/banyan/zsh-fzf-git-worktree) - `git`のワークツリーを[fzf](https://github.com/junegunn/fzf)と統合して管理。
- [fzf-history-search](https://github.com/joshskidmore/zsh-fzf-history-search) - `Ctrl+R`を[fzf](https://github.com/junegunn/fzf)ドリブンの履歴検索に置き換える。日時を含む履歴を表示。
- [fzf-it](https://github.com/micakce/fzf-it) - 任意のコマンドをインタラクティブにし、[fzf](https://github.com/junegunn/fzf)の機能でラップする。
- [fzf-marks](https://github.com/urbainvaes/fzf-marks) - `bash`および`zsh`内のブックマークを作成・移動・削除するための小さなスクリプト。フュージー検索機能[fzf](https://github.com/junegunn/fzf)を使用。
- [fzf-nav](https://github.com/ivomac/zsh-fzf-nav) - [fzf](https://github.com/junegunn/fzf)を用いてインタラクティブなファイル／ディレクトリナビゲーターを定義。複数のナビゲーションモード、Git統合、カスタマイズ可能なアクションを提供。
- [fzf-packagemanager](https://github.com/goarano/zsh-fzf-packagemanager) - 様々なパッケージマネージャーを使ってツールをインストールするためのコマンドを追加。[fzf](https://github.com/junegunn/fzf)をサポート。`apt`、`brew`および`dnf`をサポート。
- [fzf-pass](https://github.com/smeagol74/zsh-fzf-pass) - [fzf](https://github.com/junegunn/fzf)および[pass](https://www.passwordstore.org/)を用いてパスワードの処理を改善。
- [fzf-plugin](https://github.com/Atlas34/fzf-plugin) - [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)の[fzf](https://github.com/junegunn/fzf)プラグインを抽出し、他のプラグインマネージャーとの容易な利用を可能にする。
- [fzf-prezto](https://github.com/lildude/fzf-prezto) - Preztoプラグインが[fzf](https://github.com/junegunn/fzf)がインストールされた場所を検出し、自動補完およびキーバインディングを有効にする。このプラグインはPreztoの`zstyle`設定オプションとして動作。
- [fzf-tab-widgets](https://github.com/tom-power/fzf-tab-widgets) - [fzf-tab](https://github.com/Aloxaf/fzf-tab)にウィジェットを追加。
- [fzf-tab](https://github.com/Aloxaf/fzf-tab) - ZSHのデフォルト補完選択メニューを[fzf](https://github.com/junegunn/fzf)に置き換える。
- [fzf-tools](https://github.com/happycod3r/fzf-tools) - `alias`、`find`、`ls`、`man`、`printenv`といったコマンドに機能、エイリアス、キーバインディングを提供。これらは、コマンドラインワークフローを強化するために、デフォルトで[fzf](https://github.com/junegunn/fzf)をフィルタリングするように設計されており、ファイルの迅速な検索、履歴からのコマンド実行、多数のサポートされたタイプのスクリプトの実行、`git`のコミットをブラウズできるようになる。
- [fzf-utils](https://github.com/redxtech/zsh-fzf-utils) - パスワードの処理およびパス内の検索に[fzf](https://github.com/junegunn/fzf)を提供。
- [fzf-widgets](https://github.com/ytet5uy4/fzf-widgets) - [fzf](https://github.com/junegunn/fzf)にいくつかのZLEウィジェットを追加。
- [fzfsh](https://github.com/ethan605/fzfsh) - 、、、およびにプラグインを追加。 [fzf](https://github.com/junegunn/fzf) `chezmoi` `docker` `git` `kubectl` `pass`
- [fzy](https://github.com/aperezdc/zsh-fzy) - 特定のフュージーマッチング操作に[fzy](https://github.com/jhawthorn/fzy)を使用するプラグイン。
- [gcloud (johnstonskj)](https://github.com/johnstonskj/zsh-gcloud-plugin) - あなたの`$PATH`にgcloud SDKを追加。
- [gcloud (wintermi)](https://github.com/wintermi/zsh-gcloud) - インストールされたgcloud SDKを検出し、その場所にあるzshファイルおよびzsh補完ファイルをソース。
- [gcloud-project](https://github.com/avivl/gcloud-project) - Google Cloudプロジェクトの簡単な選択。
- [gdbm](https://github.com/zdharma-continuum/zgdbm) - GDBMをプラグインとして追加。
- [gentoo](https://github.com/MattiaG-afk/gentoo-ohmyzsh) - Gentoo Linuxとの作業に必要なエイリアスおよび関数を追加。
- [geometry-datetime](https://github.com/desyncr/geometry-datetime) - [Geometry](https://github.com/geometry-zsh/geometry)の日時プラグイン。あなたのプロンプトに`date`（Unixコマンド）の日時を表示。
- [geometry-hydrate](https://github.com/jedahan/geometry-hydrate) - [Geometry](https://github.com/geometry-zsh/geometry)プラグインで、水分補給を忘れないようにリマインダーを表示。
- [geometry-npm-package-version](https://github.com/drager/geometry-npm-package-version) - 現在のフォルダのnpmパッケージバージョンを表示する[Geometry](https://github.com/geometry-zsh/geometry)プラグイン。
- [geometry-rust-version](https://github.com/drager/geometry-rust-version) - 現在のフォルダのRustバージョンを表示する[Geometry](https://github.com/geometry-zsh/geometry)プラグイン。`.rs`または`Cargo.toml`が存在する場合に適用。
- [get-jquery](https://github.com/voronkovich/get-jquery.plugin.zsh) - jQueryライブラリを[code.jquery.com](https://code.jquery.com)から高速ダウンロードするプラグイン。
- [ghost-zeus](https://github.com/fontno/ghost_zeus) - 通常のrailsコマンドと[zeus](https://github.com/burke/zeus)を使用できるようにする。
- [ghq-gh-wiki-clone](https://github.com/shmokmt/ghq-gh-wiki-clone) - `ghq get`／`ghq clone`がリポジトリを取得した後、自動的にそのGitHub Wiki（ページがある場合）を、そのリポジトリの.subdirectoryにクローンするZSHプラグイン。
- [ghq-worktree](https://github.com/liquidcatmofu/zsh-ghq-worktree) - `ghq`、[fzf](https://github.com/junegunn/fzf)、および`git worktree`を統合し、複数リポジトリ開発時のコンテキスト切り替えコストを最小化。
- [gimbo-git](https://github.com/gimbo/gimbo-git.zsh) - [oh-my-zsh](https://ohmyz.sh/) [git plugin](https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/git/git.plugin.zsh) アリアの一部を、いくつかの新しいアリア、およびいくつかの便利な関数を追加したものです。
- [gimme](https://github.com/folixg/gimme-ohmyzsh-plugin) - [Go](https://golang.org/)のインストールを[gimme](https://github.com/travis-ci/gimme/)で管理。
- [git-acp](https://github.com/MenkeTechnologies/zsh-git-acp) - 現在のコマンドラインをコミットメッセージとして取り込み、一キーで`git pull`、`git add`、`git commit`および`git push`を実行。
- [git-add-remote](https://github.com/caarlos0/git-add-remote) - あなたの`git`フォークにアップストリームリモートを簡単に追加。
- [git-aliases (mdumitru)](https://github.com/mdumitru/git-aliases) - 内のバージョンを別にしたバージョンなので、他のフレームワークのユーザーがすべてのをインポートする必要がない。 [oh-my-zsh](http://ohmyz.sh/) [oh-my-zsh](https://ohmyz.sh)
- [git-aliases (peterhurford)](https://github.com/peterhurford/git-aliases.zsh) - よく使われる`git`コマンドの組み合わせに対して、非常に便利なエイリアスを多数作成。
- [git-aliases (remino)](https://github.com/remino/omz-plugin-git-aliases) - すべての`git xyz`コマンドを`gxyz`にエイリアス。また、`g`を`git`にエイリアス。
- [git-arc](https://github.com/jlduran/git-arc-oh-my-zsh-plugin) - [git-arc](https://github.com/freebsd/freebsd-src/tree/main/tools/tools/git)、FreeBSD開発ツールにエイリアスおよび関数を追加。
- [git-branches](https://github.com/Schroefdop/git-branches) - 長く書かなければならないブランチ名をタイプせずに、切り替え可能な`git`ブランチのメニューを作成。
- [git-clean-branch](https://github.com/gobriansteele/git-clean-branch) - 死んだ `git` ブランチをクリーンアップします
- [git-cleanbranches](https://github.com/wu9o/ohmyzsh-cleanbranches) - 安全に削除できるすべての `git` ブランチを検出するための、強力な統合クリーンアップツール。 [fzf](https://github.com/junegunn/fzf) を使用します
- [git-commit-prefixer](https://github.com/dvigo/git-commit-prefixer) - `git` コミットメッセージに設定可能なプレフィックスとオプションのアイコンを追加（スタイル、アイコンテーマ、インタラクティブ選択をサポート）
- [git-commit-shortcuts](https://github.com/ashsajal1/git-commit-shortcuts) - 標準化された `git` コミットメッセージの作成に、エモジープレフィックスと一貫したフォーマットを提供するショートカットを提供します
- [git-complete-urls](https://github.com/rapgenic/zsh-git-complete-urls) - リモートの補完（例： ）に、クリップボードにあるURLを含めるように 補完を強化します `git` `git clone`
- [git-extra-commands](https://github.com/unixorn/git-extra-commands) - 追加の `git` ヘルプスクリプトをプラグインとしてパッケージ化しています。
- [git-flow-avh](https://github.com/nekofar/zsh-git-flow-avh) - `git-flow` コマンドに短いエイリアスを追加します
- [git-fuzzy](https://github.com/bigH/git-fuzzy) - `git` に依存するCLIインターフェースです。 [fzf](https://github.com/junegunn/fzf) を大きく活用しています
- [git-gen](https://github.com/sharif3271/git-gen) - `git` ブランチの大量削除および作成操作を処理します
- [git-graph](https://github.com/Maks0u/git-graph) - 美しく表示する `git` グラフを追加します
- [git-is-clean](https://github.com/aubreypwd/zsh-plugin-git-is-clean) - この関数は、あなたの `git` リポジトリが汚れているかどうかを判定し、その結果を true または false として返します
- [git-it-on](https://github.com/peterhurford/git-it-on.zsh) - GitHub で現在のブランチにフォルダを開く機能を追加します
- [git-lfs](https://github.com/nekofar/zsh-git-lfs) - `git-lfs` コマンドに短いエイリアスを追加します
- [git-patch](https://github.com/marvinroman/oh-my-zsh-git-patch-plugin) - oh-my-zsh の `git` プラグインにカスタム関数とアリアを追加します。
- [git-plugin (dark-kitt)](https://github.com/dark-kitt/zsh-git-plugin) - 現在のディレクトリと ブランチを表示する インテグレーションを提供します `git` `git`
- [git-plugin (rcruzper)](https://github.com/rcruzper/zsh-git-plugin) - `git` にいくつかの関数を追加します
- [git-plugin-cheatsheet](https://github.com/rhorno/oh-my-zsh-git-plugin-cheatsheet) - `git` oh-my-zsh プラグインから利用可能なエイリアスと関数を表示します
- [git-prompt-enhanced](https://github.com/LFabre/zsh-git-prompt-enhanced) - `git` リポジトリに関するより詳細な情報を提供します
- [git-prompt-useremail](https://github.com/mroth/git-prompt-useremail) - `git` user.email に関するリマインダーを追加します
- [git-prompt-watcher](https://github.com/shields/git-prompt-watcher) - git ステータスが変更されたときに、リアルタイムでリポジトリファイルを監視する `fswatch` を使ってプロンプトを自動的に更新します
- [git-prune (diazod)](https://github.com/diazod/git-prune) - すべてのローカル リポジトリにマージされているブランチや、リモートのオリジン リポジトリにマージされたブランチを削除できます `git` `git`
- [git-prune (seinh)](https://github.com/Seinh/git-prune) - `git` リポジトリ内のマージ済みブランチを削除するためのプラグインを簡略化します
- [git-scripts](https://github.com/packruler/zsh-git-scripts) - `git-squash-branch` および `git-remove-merged` コマンドを追加します
- [git-secret](https://github.com/sobolevn/git-secret) - プライベートデータを `git` リポジトリ内に保存するためのbashツールです
- [git-smart-commands](https://github.com/seletskiy/zsh-git-smart-commands) - よく使われる の使い方を効率化するための追加 コマンドを追加します `git` `git`
- [git-smart-commends-wrapper](https://github.com/jelek21/omz-git-smart-commands) - [git-smart-commands](https://github.com/seletskiy/zsh-git-smart-commands) を [oh-my-zsh](https://ohmyz.sh) プラグインシステムに適合させるようにラップします
- [git-status](https://github.com/AyoubMounim/zsh-git-status/) - 現在の `git` リポジトリに関する情報をもとに、関数を公開する。
- [git-switch-branch-skim](https://github.com/okhiroyuki/zsh-git-switch-branch-skim) - `git` ブランチを [skim](https://github.com/lotabout/skim) で切り替えます
- [git-sync](https://github.com/caarlos0-graveyard/zsh-git-sync) - GitHub リポジトリの同期とクリーンアップを行う ZSH プラグインです `git`
- [git-to-jj](https://github.com/elithrar/zsh-git-to-jj) - [Jujutsu](https://github.com/jj-vcs/jj)（つまり `jj`）のパーソンを、 `git` コマンドを使用する中で段階的に学習を支援します
- [git-worktree (alexiszamanidis)](https://github.com/alexiszamanidis/zsh-git-worktree) - シンプルさと生産性を高めるために、いくつかの `git worktree` 操作をラップ。 [fzf](https://github.com/junegunn/fzf) ツールを含みます
- [git-worktree (trthomps)](https://github.com/trthomps/git-worktree-zsh-plugin) - bare リポジトリをサポートした強化された `git worktree` 管理。このプラグインは `git` ワークツリーに対して便利なコマンドを提供し、複数のブランチを同時に扱うことを容易にします
- [git-worktree-manager](https://github.com/tmbtech/zsh-git-worktree-manager) - 複数のブランチを同時に扱う際の `git` ワークツリーの管理を容易にします。ワークフローをスムーズにします
- [git-worktrees](https://github.com/egyptianbman/zsh-git-worktrees) - `git` ワークツリーをより機能的にする。タブ補完を含みます
- [git-wt](https://github.com/fingergohappy/git-wt) - ZSHネイティブの `git` ワークツリーワークフロープラグインです
- [git](https://github.com/davidde/git) - 標準の [oh-my-zsh](https://ohmyz.sh/) `git` プラグインの置き換え。多くの便利なエイリアスと関数を提供。このプラグインが標準プラグインを置き換える理由は、いくつかの不整合があり、いくつかのポピュラーなコマンドが直感的でないためです。このプラグインはエイリアスを一貫性を持たせています
- [gitbutler](https://github.com/batuhan0sanli/gitbutler-omz) -[GitButler](https://gitbutler.com/) — CLIエイリアス、Git保護シールド、標準OMZテーマおよびPowerlevel10k向けプロンプト統合のプラグインです
- [gitcd (SukkaW)](https://github.com/SukkaW/zsh-gitcd) - `git clone` リポジトリと `cd` を結果のディレクトリに追加するコマンドを追加します
- [gitcd (viko16)](https://github.com/viko16/gitcd.plugin.zsh) - それをクローンした後、自動的に `cd` に `git` ワークディレクトリに移動します
- [gitfast](https://github.com/tevren/gitfast-zsh-plugin) - [oh-my-zsh](https://ohmyz.sh/) の `gitfast` プラグインへの更新されたフォーク。
- [gitgo](https://github.com/ltj/gitgo) - GitHub/GitLabリポジトリをコマンドラインからブラウザで開く（macOSのみ）
- [github-folders](https://github.com/buzuloiu/zsh-github-folders) - GitHubのチェックアウトを自動で整理します
- [github](https://github.com/shakir-abdo/zsh-github-plugin) - オリジナルの [GitHub plugin](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/github) が [oh-my-zsh](https://ohmyz.sh/) に埋め込まれたフォーク。
- [gitignore](https://github.com/voronkovich/gitignore.plugin.zsh) - `.gitignore` ファイルを作成するプラグイン
- [gitio (denysdovhan)](https://github.com/denysdovhan/gitio-zsh) - ZSHプラグインで [git.io](https://git.io) を使ってGitHubの短縮URLを生成
- [gitio (nicolodiamante)](https://github.com/nicolodiamante/gitio) - [git.io](https://git.io/) を使って `git` のURLを短縮
- [gitsync](https://github.com/washtubs/gitsync) - 複数のマシンで同じリポジトリを開発する一人開発者のためのワークフローを改善するZSHプラグイン
- [goenv (bbenne10)](https://github.com/bbenne10/goenv) - Pythonのvirtualenvwrapperのように `$GOPATH` を管理
- [goenv (cda0)](https://github.com/CDA0/zsh-goenv/) - `goenv` のインストール、更新、ロードを行うプラグイン
- [goenv (heyvito)](https://github.com/heyvito/goenv.zsh) - 現在のディレクトリにある `.goenv` ファイルを自動的に読み込み、 `GOPRIVATE` 環境変数を設定
- [going_places](https://github.com/or17191/going_places) - シェルの場所リストの作成・使用・維持を支援するプラグイン
- [golang](https://github.com/wintermi/zsh-golang) - Goプログラミング言語のツールチェーンに必要なツールを追加
- [golinks](https://github.com/slessans/oh-my-zsh-golinks-plugin) - ターミナルからgolinksを起動
- [gpg-agent](https://github.com/axtl/gpg-agent.zsh) - macOSでGPGエージェントをSSHエージェントとして動作させるために適切な設定を行うプラグイン
- [gpg-crypt](https://github.com/Czocher/gpg-crypt) - ファイルやディレクトリを場所にそのまま暗号化・復号するZSHプラグイン
- [gpg](https://github.com/marvinroman/oh-my-zsh-gpg-plugin) - `gpg` を使うための便利なエイリアスを追加
- [gpt](https://github.com/antonjs/zsh-gpt) - コマンドラインからChatGPTを問い合わせる機能を有する
- [grep2awk](https://github.com/joepvd/grep2awk) - `grep` コマンドを `awk` コマンドに変換するZLEウィジェット
- [grunt-plugin](https://github.com/clauswitt/zsh-grunt-plugin) - `grunt` の補完を追加
- [gsh](https://github.com/cjayross/gsh) - `git` 用のヘルプ関数のコレクション
- [gtm-terminal-plugin](https://github.com/git-time-metric/gtm-terminal-plugin) - [git time metrics](https://github.com/git-time-metric/gtm) 用のターミナルプラグイン
- [gtr](https://github.com/Zocker1999NET/zsh-gtr) - リリースのタグ付けを迅速に実行するため、タグ名 **release-YYYY-MM-DD-HH-MM*- とヘッドライン **Release YYYY-MM-DD HH:MM** を使用 `git`
- [guish](https://github.com/gcarrarom/oh-my-guish) - ユーティリティ関数とエイリアスのコレクション
- [gumsible](https://github.com/Lowess/gumsible-oh-my-zsh-plugin) - [Molecule](https://molecule.readthedocs.io/) のラッパープラグイン
- [gunstage](https://github.com/LucasLarson/gunstage) - 少なくとも8つの方法で `git` リポジトリ内のファイルをステージ外にできる。これは `git add` を取り消すためのコマンドラインシェルプラグインです
- [gvm (dgnest)](https://github.com/dgnest/zsh-gvm-plugin) - ZSH 用の `gvm`（Goバージョンマネージャー）プラグイン。
- [gvm (yerinle)](https://github.com/yerinle/zsh-gvm) - `gvm`（Groovy enVironment Manager）の補完を提供
- [hab](https://github.com/alexdesousa/hab) - 新しいディレクトリに移動した際に、ファイル `.envrc` に定義されたOS環境変数を自動的に読み込み
- [hacker-quotes](https://github.com/oldratlee/hacker-quotes) - ターミナルを開いたときにランダムなハッカーの引用を表示
- [haiku](https://github.com/alesr/oh-my-zsh-haiku-plugin) - ターミナルが開いている間、24時間ごとに1回、仕事と生活のバランスやストレス管理を促進する俳句を表示
- [halfpipe](https://github.com/raimo/zsh-halfpipe) - シェルパイプラインを編集し、その出力をリアルタイムで更新。正規表現を迅速に修正し、ネットワークリクエストに保存
- [hanami](https://github.com/davydovanton/hanami-zsh) - [hanami](http://hanamirb.org) プロジェクト用のZSHプラグイン
- [hangul](https://github.com/gomjellie/zsh-hangul) - 英語を入力するはずなのに、韓国語（hangul）が入力された場合、自動的に英語に修正します。英語をタイプするべきなのに韓国語がタイプされた場合、自動的に修正します
- [harnessd](https://github.com/stump-wtf/zsh-harnessd) - 長時間実行されるコマンド（エージェントCLI、REPL、ウォッチャーなど）を、Linuxでは （）やmacOSでは によって監視された離脱した セッションで生き延びさせる小さなプラグイン `tmux` `systemd` `--user` `launchd`
- [hbt](https://github.com/lzambarda/hbt) - 過去のコマンド使用に基づくヒューリスティックなZSH提案システム
- [hebzsh](https://github.com/admons/hebzsh) - ヘブライ語で入力されたコマンドが見つからない場合、US英語キーボードの配置と同様にコマンドを翻訳し、再試行
- [help](https://github.com/Freed-Wu/zsh-help) - `--help` で実行されたコマンドの出力を色分け
- [hints](https://github.com/joepvd/zsh-hints) - 編集バッファの下にグローバルやパラメータフラグなどの補完不可情報を表示
- [hipchat](https://github.com/robertzk/hipchat.zsh) - シェルからHipChatメッセージを送信
- [hist-delete](https://github.com/p1r473/zsh-hist-delete-fzf/) - zsh の [fzf](https://github.com/junegunn/fzf) Ctrl+R ヒストリーセアッチの項目を削除。
- [hist](https://github.com/marlonrichert/zsh-hist) - ZSHの履歴を編集できるようにし、コマンドラインから離れることがない。
- [histdb](https://github.com/larkery/zsh-histdb) - 履歴をSQLiteデータベースに保存。[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)と統合可能。
- [historikeeper](https://github.com/stiliajohny/historikeeper) - データベースに履歴を記録。
- [history-enquirer](https://github.com/zthxxx/zsh-history-enquirer) - よりインタラクティブな履歴検索を実現し、マルチライン選択メニューを提供。Node.jsが必要。
- [history-filter](https://github.com/MichaelAquilina/zsh-history-filter) - 成功しなかったコマンドを履歴から除外するためのパターンを指定できる。特に、セレクト情報が記録されないのを防ぐのに有効。
- [history-here](https://github.com/leonjza/history-here) - `^G`をバインドし、現在のシェル履歴ファイルの場所を迅速に切り替えられる。
- [history-on-success](https://github.com/nyoungstudios/zsh-history-on-success) - 同じ間違いを繰り返さないために、失敗したコマンドをzsh履歴ファイルからフィルタリング。Dean Scarffの[blog post](https://scarff.id.au/blog/2019/zsh-history-conditional-on-command-success/)に基づく。
- [history-popup](https://github.com/lcrespom/oh-my-zsh-history-popup) - `PageUp`キーをキャプチャし、`dialog`を使って履歴のポップアップメニューを開き、ユーザーがそれをインタラクティブにナビゲートし、履歴行を選択してプロンプトに戻すことができる。
- [history-search-multi-word](https://github.com/zdharma-continuum/history-search-multi-word) - ZSH用のハイライト付き、複数語履歴検索ツール。Ctrl-Rにバインド。高度な機能（例：履歴項目を履歴のトップに昇格）を提供。
- [history-substring-search](https://github.com/zsh-users/zsh-history-substring-search) - `zsh-syntax-highlighting`の後にロードしなければ、両方とも動作しない。キーを関数にバインドする必要があり、詳細はREADME.mdに記載。
- [history-sync (vitobotta)](https://github.com/vitobotta/zsh-history-sync/) - 複数のコンピュータ間でZSHの履歴を同期する。`git`プライベートリポジトリを使用。`openssl`で履歴を暗号化。
- [history-sync (wulfgarpro)](https://github.com/wulfgarpro/history-sync) - [oh-my-zsh](https://ohmyz.sh/)用のプラグイン。[GPG](https://www.gnupg.org/)で暗号化された、インターネットで同期されるZSH履歴を提供。`git`を使用。
- [history](https://github.com/b4b4r07/zsh-history) - SQLでクエリ可能な履歴を拡張。
- [histree](https://github.com/fuba/histree-zsh) - [histree-core](https://github.com/fuba/histree-core)と統合し、ディレクトリ認識を含む強化されたコマンド履歴ログを提供。
- [hitokoto](https://github.com/derry96/hitokoto) - [hitokoto.cn](https://hitokoto.cn/)からランダムな引用を表示。
- [homeassistant-cli](https://github.com/frosit/zsh-plugin-homeassistant-cli) - IPアドレス操作の補完および（設定）ヘルパーを提供。[Home Assistant Command-line interface (hass-cli)](https://github.com/home-assistant/home-assistant-cli)。かつ、[Home Assistant](https://home-assistant.io/)インスタンスとのコマンドラインインタラクションを可能にする。
- [homebrew](https://github.com/digitalraven/omz-homebrew) - oh-my-zshに組み込まれたものに補完するための、[homebrew](https://brew.sh)プラグイン。oh-my-zshが有効になっても安全に動作できる。
- [hooks](https://github.com/willghatch/zsh-hooks) - 欠落しているホックを追加する（プラグインや個人使用用）。
- [host-switch](https://github.com/LockonS/host-switch) - 開発中に異なる`/etc/hosts`ファイルを切り替えしやすくする。
- [how2](https://github.com/yizhixiaokong/how2) - [oh-my-zsh](https://ohmyz.sh/)プラグインのエイリアス、関数、ドキュメントを迅速に確認。タブ補完を提供。
- [hub-ci-zsh-plugin](https://github.com/raymondjcox/hub-ci-zsh-plugin) - ZSHテーマに`hub`ci-statusを追加するシンプルプラグイン。
- [hub](https://github.com/soraliu/zsh-hub) - ZSH用のフォークモデルプラグイン。
- [hypnosnek](https://github.com/josephcourtney/hypnosnek) - `python`環境を管理するためのシンプルユーティリティ。p10k統合。
- [igit](https://github.com/ytakahashi/igit) - を使ってインタラクティブなコマンドを実行。 `git` [fzf](https://github.com/junegunn/fzf)
- [incsearch](https://github.com/aoyama-val/zsh-incsearch) - ZSH向けより親しみやすい`vim`モード。現在の行内のインクリメンタル検索でカーソルを移動。
- [ing](https://github.com/rummik/zsh-ing) - 簡潔な`ping`出力。
- [instant-repl](https://github.com/jandamm/instant-repl.zsh) - 現在のZSHセッション内の任意のコマンドに対してREPLをアクティブ化。
- [interactive-cd](https://github.com/changyuheng/zsh-interactive-cd) - Fish風のインタラクティブタブ補完。`cd`用。
- [iosctl](https://github.com/obayer/iosctl) - 実行中のシミュレータのApp、Data、Logに迅速にアクセス。
- [ipip](https://github.com/SukkaW/zsh-ipip) - [IPIP](https://en.ipip.net)用のプラグイン。
- [ipnav](https://github.com/clebertmarctyson/oh-my-zsh-ipnav) - IPアドレス操作のための便利なエイリアスと補完を提供。[ip-navigator-cli](https://github.com/clebertmarctyson/ip-navigator-cli)。
- [iterm-tab-color](https://github.com/bernardop/iterm-tab-color-oh-my-zsh) - iTerm2でのタブカラーを設定する関数を追加。現在のワーキングディレクトリや実行中のコマンドに基づいて自動的にカラーを変更できる。
- [iterm-tab-colors](https://github.com/tysonwolker/iterm-tab-colors) - 現在のワーキングディレクトリに基づいてiTerm2のタブカラーを自動的に変更。
- [iterm-tmux-color-tabs](https://github.com/remino/omz-plugin-iterm2-tmux-color-tabs) - iTerm2で開かれる新しい`tmux`タブは、デフォルトまたは指定されたパレットの次の色を持つ。
- [iterm-touchbar](https://github.com/iam4x/zsh-iterm-touchbar) - MacBookPro TouchBarにiTerm2のフィードバックを表示（現在のディレクトリ、gitブランチとステータス）。
- [iterm2-colors](https://github.com/shayneholmes/zsh-iterm2colors) - iTerm2のカラー設定をコマンドラインから管理。
- [iterm2-shell-integration](https://github.com/gnachman/iterm2-shell-integration) - iTerm2とのシェル統合とユーティリティ。
- [iterm2-tabs](https://github.com/gimbo/iterm2-tabs.zsh) - iTerm2のタブの色とタイトルを設定。
- [iterm2](https://github.com/laggardkernel/zsh-iterm2) - iTerm2のZSH統合スクリプトをZSHプラグインにパッケージ化し、$HOMEディレクトリを汚染せず、時間増加はわずか2ms程度。
- [iwd](https://github.com/zshzoo/iwd) - `$PWD`に類似したこのZSHプラグインは、セッションの開始点に戻るための初期ワーキングディレクトリを`$IWD`に保存する。
- [jabba](https://github.com/2m/zsh-jabba) - [jabba](https://github.com/shyiko/jabba)のJavaバージョンマネージャー向けのシェル統合コードと補完を追加します
- [jap](https://github.com/philipstuessel/jap) - ターミナル自動化フレームワーク
- [java-zsh-plugin](https://github.com/Xetius/java-zsh-plugin) - `setjdk`コマンドを追加し、JDKの異なるバージョン間の切り替えを容易にします
- [javaVersions](https://github.com/miguefl/javaVersions) - 1つのコマンドで異なるJavaバージョンを切り替えます
- [jdk-switch](https://github.com/LockonS/jdk-switch) - JDKバージョンの切り替えをサポート。macOSおよびLinuxで動作します
- [jenkins](https://github.com/tomplex/jenkins-zsh) - ZSH向けのJenkinsプラグイン。優れたJIRAプラグインに強くインスパイアされています
- [jenv-lazy](https://github.com/shihyuho/zsh-jenv-lazy) - ZSH向けのjEnvのラグレードロードプラグイン
- [jhipster](https://github.com/jhipster/jhipster-oh-my-zsh-plugin) - [jHipster](https://www.jhipster.tech/)向けのコマンドを追加します
- [jira-plus](https://github.com/gerges/oh-my-zsh-jira-plus) - コマンドラインからJIRAチケットを作成します
- [jirarc](https://github.com/aoantov/jirarc) - 繰り返し実行される[Jira-cli](https://github.com/ankitpokhrel/jira-cli)コマンドのショートカットを提供します
- [jj](https://github.com/rkh/zsh-jj) - [jujitsu](https://github.com/jj-vcs/jj)VCSへのサポートを追加します
- [journal](https://github.com/onurhanak/zsh-journal) - 実行したシェルコマンドにメモを付けることができます。後から見返す際に、ワンライナーが実際に何をしていたかを思い出せるようになります
- [jq](https://github.com/reegnz/jq-zsh-plugin) - インタラクティブに[jq](https://stedolan.github.io/jq/)式を構築できます。また、[gojq](https://github.com/itchyny/gojq)もサポート。[fzf](https://github.com/junegunn/fzf)が必要です
- [jrgit](https://github.com/jrocha-dev/ohmyzsh-plugin-jrgit) - Gitユーザー体験をスムーズにし、関連機能を提供します。これには、`git`のインストールと設定、Git LFSによる大ファイルの処理、diff出力の改善、および認証情報やキーの安全な管理が含まれます
- [jumper](https://github.com/thestuckster/jumper) - 現在のパスを保存し、他のパスに迅速に移動できるようにします
- [just-let-me-edit-my-files](https://github.com/asapelkin/zsh-just-let-me-edit-my-files) - 誤って読み取り不可ファイルを開いた場合、編集器を`sudo`で再起動できます
- [k](https://github.com/supercrabtree/k) - ZSHでのディレクトリ一覧に`git`ステータスデコレーションを追加します
- [k3d](https://github.com/dwaynebradley/k3d-oh-my-zsh-plugin) - [k3d](https://k3d.io/)向けのエイリアスとタブ補完を追加します
- [k9s](https://github.com/acidix/zsh-k9s) - 向けのインタラクティブセレクタを提供します `$KUBECONFIG` [k9s](https://k9scli.io/)
- [kctl](https://github.com/yzdann/kctl) - `kubectl`向けのヘルプエイリアスを追加します
- [kill-node](https://github.com/vmattos/kill-node) - ZSHプラグインで`node`プロセスファミリーを終了します
- [kitsunebook](https://github.com/d12frosted/kitsunebook.plugin.zsh) - KitsuneBook向けの[oh-my-zsh](https://ohmyz.sh)プラグイン
- [kittyback](https://github.com/pickle-slime/kittyback) - `kitty`ターミナルエミュレーターの背景画像を自動的に更新および変更します
- [kiwi](https://github.com/fruitydog/kiwi.zsh-theme) - 犬をテーマにした、`git`ステータスおよび最後のコマンドの終了ステータスデコレーターを含みます
- [konsole-theme-changer](https://github.com/rocknrollMarc/zsh-konsole-theme-changer) - ZSHからkonsoleのテーマを切り替えます
- [kube-aliases](https://github.com/Dbz/kube-aliases) - `kubectl`の操作をより快適にするための関数とエイリアスを追加します
- [kube-ctx-manager](https://github.com/NotHarshhaa/kube-ctx-manager) - kubectlのプロフェッショナルユーザー向けのスマートシェルプラグイン — フュージコンテキスト切り替え、自動提案エイリアス、およびプロダクション環境用のセーフガードがターミナルに組み込まれています
- [kube-ps1](https://github.com/jonmosco/kube-ps1) - ZSHプラグインで`kubectl`の現在のコンテキストとネームスペースを追加します
- [kubecolor (devopstales)](https://github.com/devopstales/zsh-kubecolor) - `kubecolor`コマンドのエイリアスを追加します
- [kubecolor (droctothorpe)](https://github.com/droctothorpe/kubecolor) - `kubectl get events -w`の出力を簡略化し、色分けします
- [kubecolor (trejo08)](https://github.com/trejo08/kubecolor-zsh) - `kubectl`からの色分け出力を表示します。ヘルパー関数も含まれます
- [kubeconfig-mgr](https://github.com/yhlooo/zsh-kubeconfig-mgr) - 複数のkubeconfigファイルの管理を容易にします
- [kubectl-config-switcher](https://github.com/chmouel/kubectl-config-switcher/) - 環境変数を用いて、内の設定ファイルを切り替えます `~/.kube` `KUBECTL`
- [kubectl-prompt](https://github.com/superbrothers/zsh-kubectl-prompt) - ZSHプロンプトにkubectlの現在のコンテキストとネームスペースの情報を表示します。`ZSH_KUBECTL_CONTEXT`、`ZSH_KUBECTL_NAMESPACE`、`ZSH_KUBECTL_PROMPT`、`ZSH_KUBECTL_USER`という変数を生成し、プロンプトのカスタマイズに使用できます
- [kubectl](https://github.com/mattbangert/kubectl-zsh-plugin) - `kubectl`を管理するZSHプラグイン
- [kubectlenv](https://github.com/rafalmasiarek/oh-my-zsh-kubectlenv-plugin) - 複数の`kubectl`バージョン間の切り替えを容易にします
- [kubectx (ptavares)](https://github.com/ptavares/zsh-kubectx) - [kubectx](https://github.com/ahmetb/kubectx)をインストールおよびロードします
- [kubectx (unixorn)](https://github.com/unixorn/kubectx-zshplugin) - [kubectx](https://github.com/ahmetb/kubectx)および`kubens`を自動的にインストールします
- [kubernetes](https://github.com/Dbz/zsh-kubernetes) - [kubernetes](https://kubernetes.io)のヘルパー関数およびエイリアスを追加します
- [lacrimae](https://github.com/caIamity/lacrimae) - chantのコレクションから1行を表示します
- [lacy](https://github.com/lacymorrow/lacy) - 自然言語とシェルコマンドを検出し、それに応じて処理をルートします。コマンドは通常通り実行され、質問はAIアグエント（Claude Code、Gemini、OpenCode、Codex）に送られます。入力ごとにリアルタイムで色のインジケーターと最初の語の文法ハイライトが更新されます。また、Bash 4以降に対応しています。
- [lando (joshuabedford)](https://github.com/JoshuaBedford/lando-zsh) - [Lando](https://docs.lando.dev)内でCLIを利用できるようにする、エイリアス関数のコレクションです。'lando'とタイプする必要なく、直接アクセスできます。
- [lando (mannuel)](https://github.com/mannuel/lando-alias-zsh) - さまざまな[Lando](https://docs.lando.dev/basics/usage.html#default-commands/)コマンドに対するエイリアスを追加します。
- [laradock-workspace](https://github.com/rluders/laradock-workspace-zsh) - [Laradock](http://laradock.io/)のワークスペースにインターフェースを提供します。
- [laravel (baliestri)](https://github.com/baliestri/laravel.plugin.zsh) - コマンドを実行する際、コマンドや、を実行する際のコマンドの実行時に、コマンドをスキップするプラグインです。 `php` `artisan` `./sail` `./vendor/bin/sail` `sail`
- [laravel (crazybooot)](https://github.com/crazybooot/laravel-zsh-plugin) - [Laravel](https://laravel.com/) 5、5.1、5.2および5.3向けのショートカットを追加します。
- [laravel-au](https://github.com/Saleh7/laravel-au-zsh-plugin) - [Laravel](https://laravel.com/) 6向けのエイリアスを追加します。
- [laravel-sail](https://github.com/ariaieboy/laravel-sail) - `sail`コマンド向けのショートカットを追加します。
- [laravelx](https://github.com/rsthegeek/oh-my-zsh-laravelx) - よく使われる[Laravel](https://laravel.com/docs)コマンドに対するいくつかのエイリアスを追加します。
- [last-pwd](https://github.com/itssimmons/zsh-lastpwd) - 最後にいたディレクトリを記憶し、次回ターミナルを開くときにそれを復元します。
- [last-working-dir-tmux](https://github.com/Curly-Mo/last-working-dir-tmux) - グローバルにおよび[tmux](https://github.com/tmux/tmux)セッションごとに最後に使われたワークディレクトリを追跡し、新しいシェルに自動的に移動します。
- [last-working-directory](https://github.com/mdumitru/last-working-dir) - [oh-my-zsh](http://ohmyz.sh/)内のバージョンをコピーしたものです。最後に使われたワークディレクトリを追跡し、新しいシェルに自動的に移動します。
- [lazy-load](https://github.com/goarano/zsh-lazy-load) - 実際に必要になったときにのみタブ補完をロードします。
- [lazyload](https://github.com/qoomon/zsh-lazyload) - コマンドを遅延ロードし、ZSHの起動時間を速くします。
- [learn](https://github.com/MenkeTechnologies/zsh-learn) - MySQL/MariadBに保存し、検索およびクイズできる学習データのコレクションです。
- [lesaint-git](https://github.com/lesaint/lesaint-git) - `git`に適合するフレームワーク向けの[oh-my-zsh](https://ohmyz.sh)に代替するプラグインです。
- [lesaint-mvn](https://github.com/lesaint/lesaint-mvn) - [oh-my-zsh](https://ohmyz.sh)向けのMavenプラグインです。
- [life-progress](https://github.com/bGZo/life-progress) - あなたの生活進捗を日、週、月、年齢で表示します。
- [liferay](https://github.com/david-gutierrez-mesa/liferay-zsh) - [liferay](https://github.com/liferay/liferay-portal)開発用のスクリプトを追加します。
- [line-bisect](https://github.com/Hoid/line-bisect) - 現在のコマンドを左または右に1キーでバイセクトすることで、ターミナル内のカーソルを移動できます。
- [linkfile](https://github.com/JaumeRF/linkfile-zsh) - お気に入りのディレクトリにショートカットを追加します。
- [linus-rants](https://github.com/bhayward93/Linus-rants-ZSH) - ターミナルを開くときにランダムなLinus Torvaldsの発言を表示します。
- [listbox](https://github.com/gko/listbox) - シェル向けのリストボックス要素です。
- [llm-replace](https://github.com/m3at/zsh-llm-replace) - LLMをシェルに統合し、迅速なコマンド生成を可能にします。`curl`および`jq`が必要です。
- [llm-suggestions (slasyz)](https://github.com/slasyz/zsh-llm-suggestions) - プロンプトを開き、LLMにシェルコマンドの提案を依頼し、その中から選択して実行します。
- [llm-suggestions (stefanheule)](https://github.com/stefanheule/zsh-llm-suggestions) - プロンプトに英語で何かをタイプし、定義可能なキーを押下すると、LLMがコマンドラインを生成します。
- [locate-sublime-projects-cli](https://github.com/david-treblig/locate-sublime-projects-cli) - [Sublime Text](https://www.sublimetext.com)プロジェクトの検索を行い、Sublimeで開きます。
- [logout-user](https://github.com/pressdarling/logout-user) - 別のmacOSユーザーのセッションをログアウトするための関数を提供します。
- [loremipsum](https://github.com/pfahlr/zsh_plugin_loremipsum) - コマンドラインでロレム・イプシムテキストを生成します。データは[lipsum.com](https://www.lipsum.com)から取得します。
- [ls (twopizza9621536)](https://github.com/TwoPizza9621536/zsh-ls) - さらにいくつかの`ls`向けのエイリアスを追加します。
- [ls (zpm-zsh)](https://github.com/zpm-zsh/ls) - `ls`の出力を色分けします。
- [lsd (tankeryang)](https://github.com/tankeryang/zsh-lsd) - `ls`および`tree`コマンドを[lsd](https://github.com/Peltoche/lsd)に置き換えます。
- [lsd (wintermi)](https://github.com/wintermi/zsh-lsd) - `ls`および`tree`コマンドを[lsd](https://github.com/Peltoche/lsd)にオーバーライドします。
- [lsd (z-shell)](https://github.com/z-shell/zsh-lsd) - `ls`を[lsd](https://github.com/Peltoche/lsd)に置き換えます。
- [lumberjack](https://github.com/molovo/lumberjack) - Lumberjackはシェルスクリプト用のログ出力インターフェースです。
- [lumen](https://github.com/thangduonghuu/lumen) - ZSH向けの決定論的なコマンド提案 — インラインで、オンデマンドで、AIのリターンが不要です。
- [lux](https://github.com/pndurette/zsh-lux) - macOSの明るいモードと暗いモード、iTerm 2、Visual Studio Codeなどのアイテムおよびアプリケーションを、`lux`コマンドで切り替えられるZSHプラグインです。高度にカスタマイズ可能：設定可能な変数で含まれるアイテムを設定できます。高度に拡張可能：関数でアイテムを追加できます。テーマ設定に使用できる`macos_is_dark`ヘルパー関数を含んでいます。
- [mac-packaging](https://github.com/Temikus/mac-packaging) - 企業向けMacパッケージングに使用される、一般的な関数のセットです。 [Munki](https://www.munki.org/munki/)
- [macos (joow)](https://github.com/joow/macos) - macOS向けのZSHプラグインです。
- [macos (zshzoo)](https://github.com/zshzoo/macos) - macOSユーザー向けのZSHの便利機能です。
- [macos-autoproxy](https://github.com/SukkaW/zsh-osx-autoproxy) - macOSのシステム設定に基づいてプロキシ環境変数を設定します
- [macos-theme](https://github.com/gakimball/zsh-macos-theme) - テーマコマンドを追加し、macOSでの明るいモードと暗いモードを切り替えることができます。 [lux](https://github.com/pndurette/zsh-lux)プラグインが必要です
- [mage2docker](https://github.com/lukaszolszewski/mage2docker) - DockerとMagento 2との連携を容易にし、Magento 2のコンテナ上でよく使われるコマンド（キャッシュクリーン、アップグレード設定、DIコンパイルなど）を高速化・簡素化します
- [magebox](https://github.com/JCombee/oh-my-zsh-magebox) - [magebox](https://magebox.dev/) — Magento 2およびMageOS向けの現代的な開発環境 — へのサポートを追加。aliases、キャッシュクリア補助、プロンプトステータス表示、および`magebox`CLI用のキャッシュ済みタブ補完を提供します
- [magento-2](https://github.com/dambrogia/oh-my-zsh-plugin-magento-2) - `m2`コマンドを実行するための関数を追加し、タブ補完を追加します
- [magic-enter](https://github.com/zshzoo/magic-enter) - Enterキーを魔法のようにするため、ZSHコマンドをバインドします
- [manydots-magic](https://github.com/knu/zsh-manydots-magic) - `...'==`../..'などをエミュレートするためのzleのチューニング
- [markedit](https://github.com/zakariaGatter/MarkEdit) - マークを設定し、既存のマークに自動補完で編集します
- [markgate](https://github.com/zakariaGatter/MarkGate) - ディレクトリをマークできるようにし、そのディレクトリに直接ジャンプできます
- [matecito](https://github.com/uvallasciani/matecito-zsh) - 言語と国を検出し、地元の著者からの引用をあなたの母語で表示します。シンプルでオフライン、ノイズなし
- [maven-plugin](https://github.com/KyleChamberlin/zsh_maven_plugin) - [oh-my-zsh](https://ohmyz.sh/) mavenプラグインのフォーク
- [media-sync](https://github.com/redxtech/zsh-media-sync) - 2つの`rclone`間のメディアをコピーするためのプラグイン
- [mend](https://github.com/Rakosn1cek/mend) - ディストリビューションに依存しないアシスタントで、失敗したコマンドを回復し、欠落したライブラリやPGPキーを処理し、ハードウェアに特化したパッケージの推奨を提供します
- [mercurial](https://github.com/hcgraf/zsh-mercurial) - [oh-my-zsh](https://ohmyz.sh)から抽出されたため、oh-my-zshの他の部分を使わずに使用できます
- [mfunc](https://github.com/hlohm/mfunc) - 設定ファイルに追加しなくても、即座に定義できる永続関数を提供します。これらの関数は削除するまで永続的に利用可能です。AIの助けで大幅に更新されましたが、実際のテストはほとんど行われていません。ご自身の責任で使用してください
- [mise (cowboyd)](https://github.com/cowboyd/zsh-mise) - にシェルシムを追加。非インタラクティブシェル（例：Emacs exec-path-from-shell）でもツールが利用可能になります [mise](https://mise.jdx.dev/) `$PATH`
- [mise (wintermi)](https://github.com/wintermi/zsh-mise) - [mise](https://mise.jdx.dev/)（以前はrtxと呼ばれていました）という高速なマルチ言語バージョンマネージャーにプラグインを提供し、`nvm`、`nodenv`、`rbenv`、`rvm`、`chruby`、`pyenv`などといったツールを置き換えます
- [mkarch](https://github.com/0xRZ/mkarch) - 複数の圧縮形式でアーカイブを作成できるZSHプラグイン
- [mkcd](https://github.com/azizoid/zsh-mkcd) - canonical && ヘルパーを提供するコマンドを提供します `mkcd` `mkdir` `cd`
- [mkcd](https://github.com/marvinroman/oh-my-zsh-mkcd-plugin) - ディレクトリを作成し、成功した場合にその後 `cd` に移動できるようにします
- [mlir](https://github.com/oowekyala/mlir-zsh-plugin) - [MLIR](https://mlir.llvm.org/)開発者向けに、タブ補完と出力の色付けを提供します `mlir-opt`
- [mode-switch.CLI](https://github.com/Gyumeijie/mode-switch.CLI) - コマンドラインを通常モードと`vi`モードの間で切り替えるZSHプラグイン
- [monorepo-plugin](https://github.com/zilongqiu/monorepo-zsh-plugin) - monorepo管理用のZSHプラグイン
- [monthrename](https://github.com/NotTheDr01ds/zsh-plugin-monthrename) - ファイル名に月名を数字に変換します
- [more-hooks-for-git](https://github.com/capsulescodes/more-hooks-for-git) - `git add`、`git diff`および`git status`向けに追加のハンドルを提供します
- [mouse-status](https://github.com/gryffyn/mouse-status) - ステータスコードに基づいてマウスの色を変更し、libratbagを使用します
- [msf](https://github.com/sathish09/zsh_plugins/tree/master/msf) - [Metasploit](https://www.metasploit.com/)ハンドラー用のプラグインで、ハンドラーの開始を簡単に行えます
- [multi-evalcache](https://github.com/rwwiv/multi-evalcache) - 複数回のevalロードをキャッシュして起動時間を改善。[mroth/evalcache](https://github.com/mroth/evalcache)にインスパイアされています
- [mvn-contexts](https://github.com/artemy/zsh-mvn-contexts) - `maven`の設定間の高速切り替えを可能にします
- [mycli](https://github.com/remino/omz-plugin-mycli-alias) - ログインパス付きの[`mycli`](https://www.mycli.net)のエイリアスを追加します
- [mylocation](https://github.com/fALKENdk/mylocation) - IPアドレスに基づいて現在の位置を表示するプラグインを提供します
- [myservice](https://github.com/jarlor/zsh-myservice) - カスタムsystemdサービスやDockerコンテナの管理をより便利にすることを目的としたプラグイン。このプラグインは、コマンドラインからカスタムサービスやDockerコンテナのリストや状態を確認できるユーザフレンドリーなコマンドを提供します
- [mysql-colorize](https://github.com/zpm-zsh/mysql-colorize) - `mysql`テーブルに色を追加します
- [mysql-login](https://github.com/remino/omz-plugin-mysql-alias) - MySQLのログインパス付きのエイリアスを追加します
- [mysql](https://github.com/voronkovich/mysql.plugin.zsh) - `mysql`を扱うためのいくつかの関数を追加します
- [n](https://github.com/gretzky/n.zsh) - プロジェクト環境に基づいてnodeバージョンを自動切り替えします [n](https://github.com/tj/n)
- [namelink](https://github.com/jthat/zsh-namelink) - ファイルシステムエントリ（通常はシンボリックリンク）のセット内のエントリを、指定されたディレクトリハッシュ内の対応するエントリに自動同期するマッピングを提供します
- [navi](https://github.com/icatalina/zsh-navi-plugin/) - [navi](https://github.com/denisidoro/navi)向けのプラグインを提供します
- [navigation-tools](https://github.com/zdharma-continuum/zsh-navigation-tools) - `htop`のようなkill、ディレクトリブックマークブラウザ、複数語のインクリメンタル履歴検索など、さらに多くの機能を追加します
- [nerd-font-check](https://github.com/delorenj/nerd-font-check) - 存在しない場合、[Nerd Fonts](https://www.nerdfonts.com/font-downloads)を[brew](https://brew.sh/)でインストールするオプションを提供します
- [new-file-from-template](https://github.com/zpm-zsh/new-file-from-template) -  テンプレートからファイルを生成する
- [newvwp](https://github.com/aubreypwd/zsh-plugin-newvwp) - Valetを使用して新しいWordPressサイトを起動
- [nhl-schedule](https://github.com/Matt561/zsh-nhl-schedule) - NHLのスケジュールを取得して表示
- [nice-exit-code](https://github.com/bric3/nice-exit-code) - エクスポートステータスコードを人間が読みやすい文字列に変換
- [nix-shell](https://github.com/chisui/zsh-nix-shell) - ZSHをデフォルトのシェルとして使用できる `nix-shell`環境用のプラグイン
- [nlsh](https://github.com/PsychArch/nlsh) - シェルと自然言語でやり取りできる。複数のLLMプロバイダー（OpenAI API対応）をサポート。X.aiのGrokもサポート
- [nnvm](https://github.com/torifat/nnvm) - `.nvmrc` に基づいてノードバージョンを自動的に切り替える。[n](https://github.com/tj/n) が必要。
- [no-ps2](https://github.com/romkatv/zsh-no-ps2) - このプラグインを使用すると、入力が不完全な場合、Enterキーを押すと改行が挿入されます。PS2は不要！
- [nobility](https://github.com/Twilight4/nobility) - 自動補完やプリフィルを活用した、パエンテストのワークフローを整理したシェルモジュールのコレクション。ノートの管理、無限のコピー＆ペースト、命令編集の煩雑さから解放されます
- [node-env-installer](https://github.com/shiro-saber/node-env-installer) - 現在のプロジェクト用に、 `nvm` を使って新しいバージョンとモジュールをインストール
- [node-path](https://github.com/andyrichardson/zsh-node-path) - 現在のディレクトリの `npm` binを、 `$PATH` に自動追加
- [node](https://github.com/srijanshetty/node.plugin.zsh) - Srijan ShettyによるZSH用Node.jsプラグイン。 の補完をキャッシュし、 が存在すれば自動読み込み `nvm` `nvm`
- [nodenv (c-uo)](https://github.com/C-uo/zsh-nodenv) - 作業ディレクトリに `nodenv` を探して見つかったら読み込み
- [nodenv (jsahlen)](https://github.com/jsahlen/nodenv.plugin.zsh) - `nodenv` とその補完をシェルに自動読み込み
- [nodenv (mattberther)](https://github.com/mattberther/zsh-nodenv) - `nodenv` をインストール、更新、読み込み。 [zsh-rbenv](https://github.com/Meroje/zsh-rbenv)をインスピレーションに受けて作成
- [nodo](https://github.com/nicolodiamante/nodo) - このプラグインは、iCloudストレージを埋めてしまう ディレクトリを防ぐために、ディレクトリを同期解除するか、あるいは選択されたルートディレクトリ内のすべての ディレクトリを削除することで、さらにスペースを節約できます。これは、複数の ツリーを持つプロジェクトを整理する際に特に有効です `node_modules` `node_modules` `node_modules`
- [nohup](https://github.com/micrenda/zsh-nohup) - 現在のコマンドに `nohup` を追加するため、 `Ctrl-H` を押します
- [noreallyjustfuckingstopalready](https://github.com/eventi/noreallyjustfuckingstopalready) - macOSユーザーは、macOSのバージョンでDNSキャッシュをフラッシュするコマンドを特定する際に感じる苦痛を知っています。このプラグインはその不快さを解消します
- [nota](https://github.com/0x61nas/nota.zsh) - ノートのリストを管理するシンプルなプラグイン
- [notenote](https://github.com/DrgnFireYellow/notenote/) - ノートを簡単に取るための機能
- [notes (aperezdc)](https://github.com/aperezdc/zsh-notes) - [terminal_velocity](https://www.seanh.cc/terminal_velocity/)をインスピレーションに受けて、ディレクトリ内の [Markdown](https://en.wikipedia.org/wiki/Markdown) テキストファイルのセットを作成・アクセスするための高速インターフェースを提供
- [notes (chipsenkbeil)](https://github.com/chipsenkbeil/zsh-notes) - ZSHで迅速なノート編集体験を提供
- [notify (luismayta)](https://github.com/luismayta/zsh-notify) - ZSH用の通知機能。自動依存関係のインストールとr2d2音声をサポート
- [notify (marzocchi)](https://github.com/marzocchi/zsh-notify) - macOSおよびLinuxでZSH用のプラグイン。コマンドが非ゼロの終了ステータスを返すか、30秒以上かかって完了した場合、ターミナルアプリがバックグラウンドにあるか、またはコマンドのタブが無効の場合にデスクトップ通知を表示
- [npm (trystan2k)](https://github.com/trystan2k/zsh-npm-plugin) - `npm` アライアスを追加。Oh-My-Zshの [npm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/npm) プラグインに基づく
- [npm (zfben)](https://github.com/zfben/zsh-npm) - `n` を `npm` アライアスとして、 `noglob` プレフィックスなどを使って利用。Oh-My-Zshの [npm](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/npm) プラグインに基づく
- [npms](https://github.com/torifat/npms) - npmスクリプトをインタラクティブに使うために、 をベースにしたユーティリティ。 および が必要 [fzf](https://github.com/junegunn/fzf) [fzf](https://github.com/junegunn/fzf) [jq](https://stedolan.github.io/jq/)
- [nvim-appname](https://github.com/mehalter/zsh-nvim-appname) - 複数のNeovim設定を `NVIM_APPNAME` で管理。利用可能なフラグ、Neovimアプリケーション、およびNeovimの引数/フラグの完全なタブ補完を提供。neovim v0.9以降が必要
- [nvim-switcher](https://github.com/dacarey/zsh-nvim-switcher)- `nvim` ディストリビューション（例： [Lazyvim](https://www.lazyvim.org/)、 [kickstart](https://github.com/nvim-lua/kickstart.nvim)、または自作設定）の切り替えを管理
- [nvm-auto-use (jrr997)](https://github.com/jrr997/zsh-nvm-auto-use) - 現在のディレクトリに基づき、Node.jsバージョンを [nvm](https://github.com/nvm-sh/nvm) で自動管理
- [nvm-auto-use (martvdmoosdijk)](https://github.com/martvdmoosdijk/zsh-nvm-auto-use) - が検知されたときに、 でNode.jsバージョンを自動切り替え `nvm use` `.nvmrc`
- [nvm-auto-use (tomsquest)](https://github.com/tomsquest/nvm-auto-use.zsh) - ファイルが存在するディレクトリに入ると、 が指定したNode.jsバージョンを自動的に呼び出す `nvm use` `.nvmrc` `nvm`
- [nvm-deferred](https://github.com/davidparsson/zsh-nvm-deferred) - `nvm` oh-my-zshプラグインの読み込みを [zsh-defer](https://github.com/romkatv/zsh-defer) で遅延して、シェル起動を速くする
- [nvm-lazy](https://github.com/davidparsson/zsh-nvm-lazy) - oh-my-zshの**nvm*プラグインの遅延読み込みプラグイン。複数のバイナリ/エントリポイントの遅延読み込みをサポート。デフォルトは 、 および `nvm` `nvm` `node` `npm`
- [nvm-pnpm-auto-switch](https://github.com/spencerbeggs/zsh-nvm-pnpm-auto-switch) - ディレクトリを変更する際に、Node.jsバージョン（ `nvm` を使用）とpnpmパッケージマネージャーのバージョン（ `corepack` を使用）を自動的に切り替え
- [nvm-x](https://github.com/seebeen/zsh-nvm-x) - `nvm` を管理するZSHプラグイン。拡張ヘルパーと改善されたワークフローを提供
- [nvm](https://github.com/lukechilds/zsh-nvm) - `nvm` をインストール、更新、読み込みするZSHプラグイン
- [oath](https://github.com/alexdesousa/oath) - 2FA認証の6桁トークンを管理。これは [using oathtool for 2 step verification](https://www.cyberciti.biz/faq/use-oathtool-linux-command-line-for-2-step-verification-2fa/)に関するこの記事に強くインスピレーションを受けた
- [oh-my-gpt](https://github.com/vicotrbb/oh-my-gpt) - OpenAIのGPTモデルに直接ターミナルからアクセスできる使いやすいインターフェースを提供。クエリを送信、ファイルを分析し、さまざまなタスクにAIによるサポートを受けることができます
- [oh-my-matrix](https://github.com/amstrad/oh-my-matrix) - あなたのターミナルをマトリクスに変える
- [oh-my-posh-manager](https://github.com/wintermi/zsh-oh-my-posh) - oh-my-poshのテーマエンジンを管理し、デフォルトのpowerline風テーマを提供する.
- [oh-my-tmux-manager](https://github.com/unixorn/awesome-zsh-plugins/blob/a215557d4df2fb88f92924964c056cee4ae38373/omt-manager) - `tmux`の設定を簡単に管理できます。
- [ohmyai](https://github.com/briques/ohmyai-zsh) - Zsh向けのAIによるコマンド提案。何をしたいかを入力し、ショートカットキーを押すだけで、OpenAIからシェルコマンドの提案を受ける.
- [ollama](https://github.com/plutowang/zsh-ollama-command) - OLLAMA AIモデルを [fzf](https://github.com/junegunn/fzf) に統合し、ユーザーの入力要件に基づいて知能的なコマンド提案を行う.
- [omz-full-autoupdate](https://github.com/Pilaton/OhMyZsh-full-autoupdate) - [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) のプラグインとテーマを自動で更新する.
- [omz-git](https://github.com/aeons/omz-git) - [Oh-My-ZSH](https://ohmyz.sh/) の [git](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git) プラグインをスタンドアローン形式にリパッケージした.
- [omz-themes-standalone](https://github.com/zshzoo/omz-themes-standalone) - [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) のテーマを提供するが、それ以外のすべてのものを必要としない. [Oh-My-ZSH](https://ohmyz.sh/)
- [op](https://github.com/zsh-contrib/zsh-op) - seamless [1Password](https://1password.com/) CLI統合。1Passwordから環境変数やSSHキーを管理し、自動キャッシュ、高速なシェル起動、設定駆動型ワークフローを実現する.
- [open-create-projects](https://github.com/marcossegovia/open-create-projects) - JetBrainsでプロジェクトを開く／作成する.
- [open-pr](https://github.com/caarlos0/zsh-open-pr) - コマンドラインからプルリクエストを開くZSHプラグイン.
- [opencode (mskadu)](https://github.com/mskadu/zsh-opencode-plugin) - [opencode](https://opencode.ai/) AIコーディングエージェントのサポートを追加する.
- [opencode (verlihirsh)](https://github.com/verlihirsh/zsh-opencode-plugin) - シェルコマンドを検索する必要がなくなる。ただ、英語で何をしたいかを説明し、Tabキーを押すだけで、必要な正確なコマンドを取得できる.
- [openshift-origin](https://github.com/ryanswart/openshift-origin-zsh-plugin) - よく使われるOpenShift Origin (oc)のアクションにいくつかのショートカットを追加する.
- [opera-gx](https://github.com/troykelly/oh-my-zsh-opera-gx) - Opera GXを特定のユーザープロフィールで起動できるように、`opgx` コマンドを実行し、プロフィール名を指定する。このプラグインはプロフィール名の自動補完も実装している.
- [opp](https://github.com/hchbaw/opp.zsh) - Vimのテキストオブジェクト風のZSH機能を提供する.
- [opt-path](https://github.com/jreese/zsh-opt-path) - `~/opt`のサブパスを自動的に`$PATH`に追加できます。
- [org-hopper](https://github.com/hjdarnel/org-hopper/) - GitHub CLIを [fzf](https://github.com/junegunn/fzf) でラップ。特定のGitHub組織内のリポジトリ間を迅速に切り替えられ、ローカルコピーが存在しない場合は、事前に定義された場所にクローンできる.
- [orthocal](https://github.com/darthtrevino/omz-orthocal) - ZSHプロンプトに、今日の正教会の聖日、聖人、禁食、聖書読みの情報を [Orthocal.info](https://orthocal.info/) APIを使って表示する.
- [osx-dev](https://github.com/marshallmick007/osx-dev-zsh-plugin) - このプラグインはmacOSインストールに伴うさまざまなサーバープログラムのメンテナンスに必要なコマンドを追加する.
- [osx](https://github.com/mwilliammyers/plugin-osx) - いくつかの一般的なmacOS関連のエイリアスと関数を追加する.
- [paci](https://github.com/iloginow/zsh-paci) - Arch Linuxパッケージマネージャー向けのプラグイン.
- [pack](https://github.com/fourdim/zsh-pack/) - ZSHでソースコードをパッケージ化する.
- [package-any-node](https://github.com/zdharma-continuum/zsh-package-any-node) - 任意のNodeモジュールをプラグインディレクトリ内に簡単にインストールし、自動的に [Bin-Gem-Node](https://github.com/zdharma-continuum/z-a-bin-gem-node) annexによって生成されたシェルフォワーダースクリプト（i.e.: フォワーダー）を介してそのバイナリを公開する.
- [packer](https://github.com/BreakingPitt/zsh-packer) - Hashicorp [packer](https://www.packer.io/) 用のエイリアスと自動補完を追加する.
- [pantheon-terminal-notify](https://github.com/deyvisonrocha/pantheon-terminal-notify-zsh-plugin) - 長時間実行されるコマンドに対してバックグラウンド通知を提供。Elementary OS Freyaに対応。
- [passwordless-history](https://github.com/jgogstad/passwordless-history) - パスワードがコマンドライン履歴に記録されないようにする.
- [paste-guard](https://github.com/stefanoamorelli/zsh-paste-guard) - 貼り付けられたコマンドを検出し、実行前に確認フレーズを要求することで、クリップボードインジェクション攻撃（MITRE ATT&CK T1204.004）を防止する。確認は `/dev/tty` から読み取られるため、攻撃者が確認をパラメータに埋め込むことはできない.
- [path-ethic](https://github.com/sha1n/path-ethic) - `$PATH` を簡単にかつ効率的に管理できるようにする。既存の `.zshrc`, `.zprofile` には影響を与えないが、既存環境の上に追加する.
- [patina](https://github.com/michel-kraemer/zsh-patina) - Rustで書かれた、非常に高速なZSHのシンタックスハイライト器.
- [pctl](https://github.com/ytet5uy4/pctl) - プロキシプロキシの環境変数を切り替える機能を提供する.
- [peco-history](https://github.com/jimeh/zsh-peco-history) - `ctrl+R` を押すと、シェル履歴をPecoで検索できる.
- [penmux](https://github.com/mfulz/zsh-penmux) - パーセントテストセッションに使用するためのセッションマネージャープラグイン。報告書に使用するためのターミナルセッションを追跡するのに適している.
- [pentest](https://github.com/jhwohlgemuth/oh-my-zsh-pentest-plugin) - 怠惰なパーセントテスト実行者向けのエイリアスと関数を提供する.
- [penv](https://github.com/Nhqml/penv-zsh-plugin) - Pythonの仮想環境を に保存し管理する。リスト、アクティブ化（シェルおよびディレクトリレベル）、作成、削除、環境がアクティブ化された理由を説明するためのサブコマンドをサポート。これにより、 と を に置き換えることが容易になる. `uv` `~/.local/share/py-venv/` `pyenv` `poetry` `uv`
- [per-directory-history](https://github.com/jimhester/per-directory-history) - ZSHのディレクトリごとの履歴とグローバル履歴を提供し、それらの間を `^G` で切り替えることができる.
- [percol](https://github.com/robturtle/percol.plugin.zsh) - ヒストリをインタラクティブかつインクリメンタルに検索／バックグラウンドジョブを継続するための [percol](https://github.com/mooz/percol) を使用する.
- [perlbrew](https://github.com/tfiala/zsh-perlbrew/) - インストールされていない場合は [perlbrew](https://perlbrew.pl/) をインストールし、シェルに初期化する.
- [pew](https://github.com/shosca/zsh-pew) - [pew](https://github.com/berdario/pew) を使ってPythonのvirtualenvを設定・管理し、ディレクトリを移動するたびに自動的にvirtualenvを切り替える.
- [pg](https://github.com/caarlos0-graveyard/zsh-pg) - [PostgreSQL](https://www.postgresql.org/) との作業に必要なユーティリティ関数を追加する.
- [pgconnect](https://github.com/ruslan-korneev/pgconnect-zsh) - PostgreSQLデータベースの管理と接続を `pgcli` と [fzf](https://github.com/junegunn/fzf) を使って、スムーズなコマンドライン体験を提供する.
- [ph-marks](https://github.com/lainiwa/ph-marks) - ターミナルからpornhubの動画をブックマークする
- [php-version-rcfile-switcher](https://github.com/xellos866/php-version_rcfile-switcher) - ディレクトリ内にrcファイルがある場合、自動的にphpバージョンを切り替える（[php-version](https://github.com/wilmoore/php-version)を使用）
- [php-version-switcher](https://github.com/Akollade/php-version-switcher.plugin.zsh) - `.php-version`ファイルが見つかった場合、phpバージョンを変更する
- [phpcs](https://github.com/voronkovich/phpcs.plugin.zsh) - [PHP code sniffer](https://github.com/squizlabs/PHP_CodeSniffer)用のプラグイン
- [phpunit](https://github.com/voronkovich/phpunit.plugin.zsh) - [PHPUnit](https://phpunit.de/)用のプラグイン
- [pi](https://github.com/nearsyh/pi-zsh-plugin) - シェル内の`:`コマンドを`pi -p`呼び出しにマッピングし、各シェルにパーソナルな`pi`セッションファイルを保持して継続性を確保
- [pins](https://github.com/mehalter/zsh-pins) - ディレクトリをピン留めするプラグイン。タブ補完付きのCLIフォルダブックマークマネージャーのようなもの
- [pip-app](https://github.com/sharat87/pip-app) - Pythonアプリケーションを異なるPython virtualenvにインストールできるようにし、システム上の他のPython要件と衝突しないようにする
- [pip-env](https://github.com/iboyperson/zsh-pipenv) - プロジェクトに入る際に自動的にをアクティブにする [pipenv](https://pipenv.readthedocs.io/en/latest/) `pipenv`
- [pipe](https://github.com/pipe-felipe/zsh-pipe-plugin) - 強力なZSHプラグインで**ディストリビューション間のシステム更新**と**クリーンアップ**（`apt`、`dnf`、`pacman`、`zypper`、`homebrew`などに対応）、Dockerコンテナ/ボリューム管理、開発環境の強化を提供。複数のLinuxディストリビューションでのシステムメンテナンスを、直感的なコマンドで簡易化。シンプルな設定システムで拡張可能 — 詳細はプロジェクトREADMEを参照
- [pipenv (owenstranathan)](https://github.com/owenstranathan/pipenv.zsh) - ディレクトリ内にPipfileがある場合、自動的に**pipenv**をアクティブにする。`pipenv`補完を含む
- [pipenv (sudosubin)](https://github.com/sudosubin/zsh-pipenv) - `pipenv`の`$PATH`を有効にし、補完を追加
- [pipx](https://github.com/thuandt/zsh-pipx) - [pipx](https://github.com/pypa/pipx)の補完を提供
- [pjfzf](https://github.com/K021/pjfzf) - [fzf](https://github.com/junegunn/fzf)をベースにしたプロジェクトディレクトリナビゲーター。ベースディレクトリを登録し、頻度ベースのソートとファイルプレビューでサブディレクトリをナビゲート
- [pkenv](https://github.com/ptavares/zsh-pkenv) - [pkenv](https://github.com/iamhsa/pkenv.git)をインストールおよびロード
- [plenv](https://github.com/TwoPizza9621536/zsh-plenv) - perlの[plenv](https://github.com/tokuhirom/plenv)バージョンマネージャー（jenvに基づく）向けのプラグイン
- [plugin-ibtool](https://github.com/rgalite/zsh-plugin-ibtool) - ibtoolショートカットを追加してローカル化されたXIBファイルを生成
- [plugin-rails](https://github.com/paraqles/zsh-plugin-rails) - Rails向けのZSHプラグイン
- [plugin-vscode](https://github.com/wuotr/zsh-plugin-vscode) - macOS、Windows、Linux用のテキストエディタ[Visual Studio Code](https://code.visualstudio.com/download)向けのプラグイン
- [plugin](https://github.com/darrenbutcher/plugin) - テンプレートからカスタム[oh-my-zsh](https://ohmyz.sh)プラグインを作成。非常にoh-my-zsh中心であり、他のフレームワークと動作するようにするには生成されたプラグインを編集する必要がある
- [pnpm (baliestri)](https://github.com/baliestri/pnpm.plugin.zsh) - 多くのよく使われる[pnpm](https://pnpm.io/)コマンドに便利なエイリアスを追加。タブ補完を含む
- [pnpm (bgowers)](https://github.com/bgowers/omz-pnpm) - 実際にタイプする[pnpm](https://pnpm.io/)コマンドに小さなエイリアスを追加し、タブ補完を提供
- [pnpm (leizhenpeng)](https://github.com/Leizhenpeng/zsh-plugin-pnpm) - よく使われる[pnpm](https://pnpm.io/)コマンドに便利なエイリアスを追加
- [pnpm (mat2ja)](https://github.com/mat2ja/pnpm.plugin.zsh) - より良い[pnpm](https://pnpm.io/)エイリアス
- [pnpm (ntnyq)](https://github.com/ntnyq/omz-plugin-pnpm) - よく使われる[pnpm](https://pnpm.io/)コマンドに便利なエイリアスを追加
- [pnpm-pick](https://github.com/rschaufler/zsh-pnpm-pick) - [pnpm](https://pnpm.io/)ワークスペース内の任意のパッケージからスクリプトをファジー選択し、コマンドをプロンプトにロード — 編集可能、履歴に記録され、ターミナルのタイトルに表示される
- [poetry (darvid)](https://github.com/darvid/zsh-poetry) - ディレクトリに入ると自動的に[Poetry](https://poetry.eustace.io/)が作成したPython virtualenvをアクティブ化および非アクティブ化
- [poetry (murku)](https://github.com/murku/omz_poetry_plugin) - よく使われる[Poetry](https://poetry.eustace.io/)コマンドのエイリアスを追加
- [poetry (sudosabin)](https://github.com/sudosubin/zsh-poetry) - poetryの`$PATH`と補完を有効化
- [popman](https://github.com/jdsee/popman) - 長いコマンドを組み立てている途中で、manページを確認したいことがあるよね？popmanは、タイプ中のコマンドに対して即座にmanページを開き、元の場所に戻ってコマンドを続けるようにするため、コマンドライン体験をスムーズで効率的にする
- [popular.zsh](https://github.com/sajjadRabiee/popular-zsh) - 最もよく使うZSHコマンドをブックマーク、テンプレート、再実行できるように`padd`、`p`、`pls`を使用。AES-256-CBC暗号化されたシークレットプレースホルダー、`paddh`による履歴キャプチャ、タブ補完、エクスポート/インポート（GitHubリポジトリから直接インポートも可能）
- [portal](https://github.com/anasouardini/portal/) - パスに直接アクセスするための、全パスを書く必要がない、複数のターミナルセッションを開く必要がない、ファイルシステム検索をしない、非常に基本的なスクリプト。に強くインスピレーションを得ている [fzf](https://github.com/junegunn/fzf) [Z](https://github.com/rupa/z)
- [posh-git-bash](https://github.com/lyze/posh-git-sh) - プロンプトに`git`ステータスを表示
- [powerlens](https://github.com/luyangkk/powerlens) - 右プロンプトにリアルタイムシステムメトリクスを表示。電力、バッテリー、CPU、CPU温度、ファン速度、メモリ、ネットワークI/Oのデコレーターを含む
- [ppsmon](https://github.com/mzpqnxow/ppsmon) - `/sys/class/net/$interface/`からパケット送信率を読み取り、現在の率をRAMバックされたファイルシステムに保存し、シェルプロンプトで簡単に表示できる。Linux専用（`/sys`を使用）
- [pr-cwd](https://github.com/zpm-zsh/pr-cwd) - 現在の作業ディレクトリをグローバル変数として作成。プラグインは[jocelynmallon/zshmarks](https://github.com/jocelynmallon/zshmarks)と統合されている
- [pr-eol](https://github.com/zpm-zsh/pr-eol) - プロンプトにEOL記号を表示
- [pr-exec-time](https://github.com/zpm-zsh/pr-exec-time) - 最後に実行したコマンドの実行時間を表示できる変数を追加
- [pr-git](https://github.com/zpm-zsh/pr-git) - 現在の作業ディレクトリのステータス情報をグローバル変数として作成し、プロンプトに表示できるようにする `git`
- [pr-is-root](https://github.com/zpm-zsh/pr-is-root) - rootとして実行する際に、カスタムプロンプトで使える環境変数を設定
- [pr-jobs](https://github.com/zpm-zsh/pr-jobs) - 環境変数を生成し、カスタムプロンプトでバックグラウンドジョブの情報を表示できるようにします。
- [pr-node](https://github.com/zpm-zsh/pr-node) - 環境変数を設定し、カスタムプロンプトでNode.jsの情報を表示できるようにします。
- [pr-return](https://github.com/zpm-zsh/pr-return) - ZSH用のプラグインで、最後に実行したコマンドの終了状態を表示します。
- [pr-user](https://github.com/zpm-zsh/pr-user) - グローバル変数を生成し、プロンプト内で使用できるようにします。
- [presenter-mode](https://github.com/idadzie/zsh-presenter-mode) - プレゼンテーション中にエイリアスを展開します。また、ターミナルウィンドウのコントラストを向上させ、視認性を高めます。
- [pretty-time (sindresorhus)](https://github.com/sindresorhus/pretty-time-zsh) - 秒を人間が読みやすい文字列に変換：165392 → 1d 21h 56m 32s。
- [pretty-time (zpm-zsh)](https://github.com/zpm-zsh/pretty-time) - 秒を人間が読みやすい文字列に変換します。
- [prettyping](https://github.com/unixorn/prettyping) - 標準のpingツールにラッパーを追加し、出力の美しさ、色、コンパクトさ、読みやすさを向上させます。
- [prezto-last-working-dir](https://github.com/JoniVanderheijden/prezto-last-working-dir) - 最後に使用されたワーキングディレクトリを記録し、新しいシェルで自動的にそのディレクトリに移動します（ただし、開始ディレクトリが `$HOME` でない場合を除く）。 `lwd` のエイリアスを含みます。
- [print-alias](https://github.com/brymck/print-alias) - コマンドラインでエイリアスを使用した際に、エイリアスが展開されたコマンドを表示します。
- [printc](https://github.com/philFernandez/printc) - RGB空間内の任意の色を表示できるようにし、シンプルな `printc` コールで実現します。
- [printdocker](https://github.com/elvitin/printdocker-zsh-plugin) - [docker](https://docker.com) オブジェクトを美しく表示します。
- [profile-secrets](https://github.com/gmatheu/shell-plugins) - APIトークン、パスワードなど、センシティブな変数を終端の初期ファイルに安全に保持します。gpgを使用してファイルを暗号化・復号します。
- [proj-jumper](https://github.com/Kikolator/proj-jumper) - 軽量なZSHプラグインで、1つの開発ルートの下にあるすべてのプロジェクトフォルダに直接移動できます。そのルートが取り外し可能なドライブにある場合に最適です。
- [project (gko)](https://github.com/gko/project) - ローカルおよびGitHub（プライベートまたは公開リポジトリ）にNode.js/Python/Rubyプロジェクトを作成します。
- [project (voronkovich)](https://github.com/voronkovich/project.plugin.zsh) - プロジェクトを管理するためのプラグイン。
- [project-aliases](https://github.com/dvigo/project-aliases) — ZSHにプロジェクトごとのエイリアスを自動的にロード・アンロードします。
- [projen](https://github.com/p6m7g8/p6-zsh-projen-plugin) - [projen](https://github.com/projen/projen) 用のエイリアスを追加します。
- [prompt-dir-perms](https://github.com/xPMo/zsh-prompt-dir-perms) - 現在のディレクトリの権限を表示するセグメントを生成し、ZSHプロンプトに使用できます。
- [prompt-generator](https://github.com/the10thWiz/zsh-prompt-generator) - カスタムテーマを生成します。一部の生成テーマはpowerline対応フォントが必要です。
- [proxy-plugin (escalate)](https://github.com/escalate/oh-my-zsh-proxy-plugin) - プロキシシェル環境設定を迅速に有効・無効にします。
- [proxy-plugin (xooooooooox)](https://github.com/xooooooooox/zsh-proxy) - シェル環境内のプロキシ設定を管理します。
- [proxy](https://github.com/SukkaW/zsh-proxy) - 一部のパッケージマネージャーおよびソフトウェアのプロキシ設定を設定します。
- [psgrep](https://github.com/voidzero/omz-plugin-psgrep/) - `ps grep` が自身のプロセスを `ps aux | grep` の結果から隠すようにします。
- [pump](https://github.com/fab1o/pump-zsh) - カスタムエイリアス、関数、テーマを提供し、あなたのターミナルワークフローを強化します。 [jq](https://stedolan.github.io/jq/)、 [gum](https://github.com/charmbracelet/gum)、 [glow](https://github.com/charmbracelet/glow) および [GitHub CLI](https://cli.github.com/) が必要です。
- [purge-history-secrets](https://github.com/jotasixto/purge-history-secrets) - ZSHの履歴を定期的にスキャンし、秘密情報を発見した場合に削除します。 が必要です。 [gitleaks](https://github.com/gitleaks/gitleaks) [jq](https://jqlang.github.io/jq/)
- [pwp](https://github.com/ttkalcevic/pwp) - ターミナルプロンプトに現在のワーキングパスを表示し、現在のワーキングディレクトリとその親ディレクトリをリスト表示します。さらに、親ディレクトリに簡単に移動できるカスタムコマンド '..' を提供します。
- [pycalc (alalik)](https://github.com/alalik/pycalc) - `=` キーをZSHシェル内で強力なPythonベースの電卓に変換します。
- [pycalc (peibozhao)](https://github.com/peibozhao/pycalc) - ZSH電卓でPython構文を使用します。
- [pyenv (mattberther)](https://github.com/mattberther/zsh-pyenv) - zsh-rbenvにインスピレーションを得ています。 `pyenv` のインストール、更新、ロードを行い、追加機能を提供します。
- [pyenv (twopizza9621536)](https://github.com/TwoPizza9621536/zsh-pyenv) - oh-my-zshの[pyenv](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/pyenv)プラグインにrbenvおよびjenvプラグインからの変更を加えたもの。
- [pyenv (xlshiz)](https://github.com/xlshiz/pyenv-zsh-plugin) - 現在のシェルに [pyenv](https://github.com/pyenv/pyenv) をロードし、 `pyenv_prompt_info` 関数を通じてプロンプト情報を提供します。また、可用であれば [pyenv-virtualenv](https://github.com/pyenv/pyenv-virtualenv) をロードします。
- [pyenv-lazy-load](https://github.com/erikced/zsh-pyenv-lazy-load) - ZSHで`pyenv`を遅延読み込みするためのプラグイン。
- [pyenv-lazy](https://github.com/davidparsson/zsh-pyenv-lazy) - を遅延ロードします。最初に が呼び出されたとき、最初の が実行されます。 [pyenv](https://github.com/pyenv/pyenv) `eval "$(pyenv init -)"` `pyenv`
- [pyvenv-fast](https://github.com/ACmyles/pyvenv-fast) - 1コマンドでPython `venv` を起動します。 [dotpyvenv](https://github.com/jeanpantoja/dotpyvenv) と併用するため設計されています。
- [q (cal2195)](https://github.com/cal2195/q) - ZSHシェルに `vim` ライクのマクロレジスタを追加します。
- [q (tomsquest)](https://github.com/tomsquest/q.plugin.zsh) - [Q](https://github.com/y0ssar1an/q)、Dirty Debugging Toolのための一時ファイルをタイル/削除します。
- [qiime2](https://github.com/misialq/zsh-qiime2) - [Quiime 2](https://qiime2.org/) を扱うために関数とエイリアスを追加します。
- [qqq](https://github.com/mejistus/zsh-plugin-qqq) - 現在のターミナルをカラフルな回転ASCIIドーナツに変換し、その下に中央に配置された5行のASCII日時を表示します。
- [quiet-accept-zle](https://github.com/AdrieanKhisbe/zsh-quiet-accept-line) - タイプしたZSHコマンドを実行する際に、新しいプロンプトや履歴エントリーをトリガーせず、出力が表示されないようします。
- [quoter](https://github.com/pxgamer/quoter-zsh) - 新しいターミナルセッションを開くときにランダムな引用を表示する
- [quotify](https://github.com/dpretet/zsh-quotify) - 開始時に、私たちのペアが提供する励ましのコーディング引用を表示する
- [qwy](https://github.com/Ryooooooga/qwy) - ZSHのフュージー補完プラグイン
- [randeme](https://github.com/ex-surreal/randeme) - 各セッションにランダムなテーマを選択する。選ばれたテーマに不満がある場合は、 `randeme_rm` を実行して、そのテーマを再び表示しないようにできる
- [random-quotes](https://github.com/vkolagotla/zsh-random-quotes) - ランダムな引用や事実を表示する
- [ranger (niziL)](https://github.com/NiziL/ranger.plugin.zsh) - [ranger](https://github.com/ranger/ranger) のプロンプト要素を提供。環境変数が未設定なら何も表示せず、1に等しい場合は何かを表示し、それ以上の場合には別の何かを表示する `RANGER_LEVEL`
- [ranger (rc2dev)](https://github.com/rc2dev/ranger-zshz) - [zsh-z](https://github.com/agkozak/zsh-z) を [ranger](https://github.com/ranger/ranger) に統合する
- [ranger-autojump](https://github.com/fdw/ranger-autojump) - [autojump](https://github.com/wting/autojump) のサポートを [ranger](https://github.com/ranger/ranger) コンソールファイルマネージャーに追加する
- [ranger-zoxide](https://github.com/fdw/ranger-zoxide) - [zoxide](https://github.com/ajeetdsouza/zoxide) のサポートを [ranger](https://github.com/ranger/ranger) コンソールファイルマネージャーに追加する
- [raspberry-temp](https://github.com/cfunkz/zsh-raspberry-temp-plugin) - Raspberry Piの温度を `rpi-temp` アリアを使って測定する
- [raspberryPi4Temperature](https://github.com/KidesLeo/RaspberryPi4TemperaturePromptPlugin) - Raspberry Piの温度をスペースプロンプトセグメントに表示する
- [razer-status-code](https://github.com/michaelmcallister/razer-status-code) - 最後に実行されたコマンドの状態に基づいて、あなたの [Razer Mouse](https://openrazer.github.io/) の色を変える。 [OpenRazer](https://openrazer.github.io) ライントドライバーが必要
- [rbenv (elliottcable)](https://github.com/ELLIOTTCABLE/rbenv.plugin.zsh) - `rbenv` プラグインのより高速なフォーク（ [oh-my-zsh](https://ohmyz.sh/) から）
- [rbenv (jsahlen)](https://github.com/jsahlen/rbenv.plugin.zsh) - オリジナル [oh-my-zsh](https://ohmyz.sh/) `rbenv` プラグインに基づいた変体
- [rbenv (meroje)](https://github.com/Meroje/zsh-rbenv) - [https://github.com/lukechilds/zsh-nvm/](https://github.com/lukechilds/zsh-nvm/) にインスパイアされ、Ruby `rbenv` 環境との作業をより容易にする
- [rc-files](https://github.com/0b10/rc-files) - さまざまなrcファイルの編集にショートカット関数を追加する
- [recall](https://github.com/mango-tree/zsh-recall) - コマンド履歴の使用をより簡単にする
- [redis](https://github.com/z-shell/redis) - [redis-server](https://redis.io/) を `redis.conf` 配置ファイルに向けた実行を行う。これは、 [zdharma/zredis](https://github.com/z-shell/zredis) プラグインと組み合わせて、シェル間で変数を共有するために使える
- [redo](https://github.com/joknarf/redo) - `Ctrl-R` と `ESC+/` を置き換えるためのインタラクティブな履歴メニューを追加する
- [reentry-hook](https://github.com/RobSis/zsh-reentry-hook) - 作業ディレクトリが削除され再作成された場合に、再びそのディレクトリに戻るためのプラグイン
- [release-fetcher](https://github.com/Game4Move78/zsh-release-fetcher) - 最新リリースを取得し、署名されたタグの識別性を信頼しているかを確認する
- [reload](https://github.com/aubreypwd/zsh-plugin-reload) - あなたの `.zshrc` を迅速に再読み込みできる機能を追加
- [reminder](https://github.com/AlexisBRENON/oh-my-zsh-reminder) - すべてのプロンプトの上にリマインダーを表示するプラグイン
- [replace-multiple-dots](https://github.com/momo-lab/zsh-replace-multiple-dots) - `...` を `../..` に変換する
- [require](https://github.com/aubreypwd/zsh-plugin-require) - `require commandname` を追加し、（ [brew](https://brew.sh) がインストールされている場合）それがあらかじめインストールされていない場合は自動的に `brew install commandname` を実行する
- [revolver](https://github.com/molovo/revolver) - ZSHスクリプト用の進行中のスピンナー
- [riddle-me](https://github.com/vkolagotla/zsh-riddle-me) - ランダムなパズルを表示する
- [ripz](https://github.com/jedahan/ripz) - あなたのアライアスを思い出させ、それを使ってもらうようにする。 [ripgrep](https://github.com/BurntSushi/ripgrep) に依存する
- [robo](https://github.com/shengyou/robo-zsh-plugin) - [Robo](https://github.com/consolidation/robo/) 用の ZSH プラグイン
- [rockz](https://github.com/aperezdc/rockz) - VirtualZに基づくLua + LuaRocksの仮想環境マネージャー
- [ros2-env](https://github.com/Butakus/ros2-env) - [ROS 2](https://github.com/ros2) 環境とワークスペースの管理
- [ros2-supercharged](https://github.com/danlil240/ros2-supercharged) - 3つの優れたROS 2シェルプロジェクトから最も良いアイデアを集めた、一つの統合された現代的なzshプラグイン。 [fzf](https://github.com/junegunn/fzf) ワークスペースセレクタ、起動ファイルピッカー、colconエラーブラウザ、ドメイン管理、プロンプトセグメント、名前付きワークスペースレジストリ（rosws）、ワークスペースごとのディストロ＋オーバーレイチェイン、どこからでもビルド可能なcbと実際のcolcon argcomplete補完を含む
- [rose-pine-man](https://github.com/const-void/rose-pine-man) - `man` ページをカラーリングする
- [rtm-reminder](https://github.com/aranel616/rtm-reminder-zsh) - 各コマンド実行後に緊急な [Remember The Milk](https://www.rememberthemilk.com/) 作業を表示する。シンプルで非侵襲的で、テラミナル専用。
- [run-scripts](https://github.com/Aireck2/zsh-run-scripts) - `package.json` からスクリプトを実行する
- [rura](https://github.com/kiki-ki/rura) - ディレクトリを保存し、ジャンプできるシンプルなZSHプラグイン
- [rust (betterfetch)](https://github.com/betterfetch/zsh-plugin-rust) - RustのCargo、Rustc、Rustupツールとの作業に便利なエイリアスを提供する
- [rust (cowboyd)](https://github.com/cowboyd/zsh-rust) - あなたの [rust](https://www.rust-lang.org/) ツールチェーンを設定し、すでにインストールされていない場合に [rustup](https://rustup.rs) をインストール
- [rust (juici)](https://github.com/Juici/zsh-rust-completions) - Rust用のZSH補完定義
- [rust (wintermi)](https://github.com/wintermi/zsh-rust) - [rust](https://www.rust-lang.org/) ツールチェーン向けのプラグイン
- [rvm](https://github.com/johnhamelink/rvm-zsh) - [rvm](https://github.com/rvm/rvm)を開始し、ユーザーの`$PATH`にアクセス可能なrubygemバイナリ（例：compass）を追加する.
- [safe-kubectl](https://github.com/benjefferies/safe-kubectl) - 定義された秒数後に最後のコマンドから経過した後、現在のコンテキストを警告して、の実行時に安全を確保する. [kubectl](https://kubernetes.io/docs/reference/kubectl/) `kubectl`
- [safe-paste](https://github.com/oz/safe-paste) - 安全なペーストプラグイン。Conrad Irwinの[bracketed-paste](https://cirw.in/blog/bracketed-paste)ブログ記事を参照。
- [safe-rm](https://github.com/mattmc3/zsh-safe-rm) - 安全な-機能を追加し、がファイルをOSのゴミ箱に移動させ、永久削除しないようにする. `rm` `rm`
- [safe-venv-auto](https://github.com/mavwolverine/zsh-safe-venv-auto) - 信頼できない環境にさらされないよう、ディレクトリをナビゲートする際に自動的にPythonの仮想環境を有効・無効にし、セキュリティに配慮したZSHプラグイン。
- [sail](https://github.com/Razzaghnoori/Sailor/) - [sail](https://laravel.com/docs/10.x/sail)にための便利なエイリアスを追加する.
- [saml2aws-auto](https://github.com/devndive/zsh-saml2aws-auto) - 複数のAWSプロファイル（例：開発、プレプロダクション、本番環境）を使用する場合、現在導出されているプロファイルとトークンが有効かどうかを確認できる。
- [saml2aws](https://github.com/onyxraven/zsh-saml2aws) - [saml2aws](https://github.com/Versent/saml2aws)のサポートを追加する。
- [sandboxd](https://github.com/benvan/sandboxd) - 必要なときにのみ設定コマンド（例：など）を実行することで、およびシェルの起動を高速化する。 `.zshrc` `eval "$(rbenv init -)"`
- [saneopt](https://github.com/willghatch/zsh-saneopt) - ZSHオプションの適切なデフォルト値。[vim-sensible](https://github.com/tpope/vim-sensible)の精神に従う。
- [sb-upgrade](https://github.com/redxtech/zsh-sb-upgrade) - シードボックス上のアプリを自動的に更新するスクリプト。
- [scad](https://github.com/MicahElliott/scad) - Docker/Podman（SCAD）用のシェルカラーメニュー。[docker](https://www.docker.com/) / [podman](https://podman.io)エイリアスと関数を定義。これらのエイリアスは、管理コマンドによる新しいスタイルの組織と呼び出しを採用しており、従来の「ランダムな単独コマンド」に比べて非常に分かりやすい。`docker`と[GRC](https://github.com/garabik/grc)が必要。 [jq](https://github.com/jqlang/jq)
- [schroot](https://github.com/fshp/schroot.plugin.zsh) - 現在の`chroot`名をプロンプトに表示する。
- [sdkman](https://github.com/ptavares/zsh-sdkman) - [sdkman](https://github.com/sdkman)をインストールし、補完とエイリアスを追加する。
- [sealion](https://github.com/xyproto/sealion) - リマインダーを設定し、プロンプトが更新されるときにターミナルに表示する。
- [search-directory-history](https://github.com/cmaahs/search-directory-history) - [per-directory-history](https://github.com/jimhester/per-directory-history)プラグインで作成されたディレクトリごとの履歴を複雑に検索できる。
- [sed-sub](https://github.com/MenkeTechnologies/zsh-sed-sub) - 現在のコマンドラインにグローバル検索・置換を行うためのキーバインディングを追加する。
- [seedee](https://github.com/joknarf/seedee) - コマンドラインから矢印キーを使って、ディレクトリや訪問履歴をインタラクティブにナビゲートできる。
- [select-history-skim](https://github.com/okhiroyuki/zsh-select-history-skim) 履歴を[skim](https://github.com/lotabout/skim)で検索できる。
- [select-with-lf](https://github.com/chmouel/zsh-select-with-lf) - ユーザーがファイルまたはディレクトリを選択できるようにする[lf](https://github.com/gokcehan/lf)。
- [select](https://github.com/z-shell/zsh-select) - 複数のターミナル検索リストを提供し、近似マッチとユニークモードをサポート。
- [selector](https://github.com/joknarf/selector) - 選択メニューを作成しやすいようにする。
- [send](https://github.com/robertzk/send.zsh) - 一命令で`git add`、`git commit`、`git push`を実行し、より高速な`git`ワークフローを実現。
- [sensei-git](https://github.com/aswitalski/oh-my-zsh-sensei-git-plugin) - 多くの`git`エイリアスとヘルパーシェル関数を追加する。
- [senv](https://github.com/joepvd/senv) - センシティブな環境変数の存在をプロンプトに表示する。
- [session-sauce](https://github.com/ChrisPenner/session-sauce) - すべてのプロジェクトのtmuxセッション作成と管理用の[fzf](https://github.com/junegunn/fzf)インターフェース。
- [setenv](https://github.com/kalpakrg/setenv) - ディレクトリを変更したときにスクリプトを実行する。
- [setpath](https://github.com/mys721tx/set_path) - あなたの`fpath`と`$PATH`にいくつかのローカルパスを追加する。
- [shelf](https://github.com/ecmma/shelf) - mnemonicsを使って、任意のファイルをブックマークし、直接アクセスできるユーティリティ。
- [shell-fns](https://github.com/Hdoc1509/shell-fns) - `git`、`neovim`、`npm`、`pip`の拡張機能を含む。
- [shell-ng](https://github.com/joknarf/shell-ng) - [joknarf](https://github.com/joknarf/)の他のいくつかのプラグイン（[selector](https://github.com/joknarf/selector)、[nerdp](https://github.com/joknarf/nerdp)、[redo](https://github.com/joknarf/redo)、[seedee](https://github.com/joknarf/seedee)、[complete-ng](https://github.com/joknarf/complete-ng)）を統合。
- [shell-proxy](https://github.com/caesar0301/zsh-shell-proxy) - これは純粋なユーザースペースプログラムであり、Python3と`zsh`で書かれたシェルプロキシ設定ツール。
- [shellcolor](https://github.com/SaltedBlowfish/zsh-shellcolor) - 現在のディレクトリに`.shellcolor`があるかどうかに基づき、ターミナルの背景色を変更する。
- [shellfirm](https://github.com/kaplanelad/shellfirm) - Shellfirmは、危険なコマンドを実行する前に追加の承認ステップを必要としないようにするための便利なユーティリティ。危険パターンが検出されると、すぐに小さなプロンプトチャレンジが表示され、あなたの行動を確認する。
- [shellsense](https://github.com/venopyX/shellsense) - AIを活用したZSHプラグイン。強力な機能とAIによる能力により、あなたのターミナル体験を向上させる。Pythonで開発されたShellSenseは、さまざまなタスクのためのスムーズなワークフローを提供し、ターミナルをより効率的でユーザーに親しみやすいものにしている。
- [shift-select](https://github.com/jirutka/zsh-shift-select) - EmacsのシフトセレクトモードをZSHに導入する。コマンドラインでShiftを使ってテキストを選択する。多くのテキストエディタやブラウザ、その他GUIアプリと同様。
- [shortcuts](https://github.com/fairy-root/Zsh-Shortcuts-Plugin) - あなたのターミナルの生産性を向上させるために、[oh-my-zsh](https://ohmyz.sh/)用のShortcutsプラグインを活用。コマンドショートカットを強力な機能で簡単に管理できる。
- [show-git-user](https://github.com/luisprgr/zsh-show-git-user) - 同じマシン上で複数のユーザーで作業が必要な場合、現在アクティブなユーザー名をプロンプトに表示する。 `git` `git`
- [show-path](https://github.com/redxtech/zsh-show-path) - 関数を提供し、`$PATH`行を一行ずつ表示する。
- [shui](https://github.com/kud/shui) - ZSH用の流動的なターミナルUI — シェルのためのデザインシステム。
- [simpleserver](https://github.com/sathish09/zsh_plugins/tree/master/simpleserver) - プラグインで簡単に python `SimpleHTTPServer` と `SimpleHTTPSServer` を開始できます。
- [singularityenv](https://github.com/saravanabalagi/zsh-plugin-singularityenv) - 現在の singularity 環境名を返す `singularityenv_prompt_info` 関数を提供します。
- [skaffold](https://github.com/todie/skaffold.plugin.zsh) - zigl での [skaffold](https://skaffold.dev) ローカル kubernetes 開発環境の統合と補完を提供します。
- [skim (casonadams)](https://github.com/casonadams/skim.zsh) - [skim](https://github.com/lotabout/skim) がインストールされている場所を検出し、その場で fuzzy 自動補完とキーバインディングを有効にします。
- [skim (hackerchai)](https://github.com/hackerchai/skim-zsh) - [skim](https://github.com/lotabout/skim) のサポートを追加します。
- [slugify](https://github.com/lashoun/slugify) - ファイル名とディレクトリをウェブに適したフォーマットに変換します。
- [slurm](https://github.com/galhar/slurm) - インタラクティブな [SLURM](https://slurm.schedmd.com) ジョブを実行するための便利なコマンドを提供します。
- [smart-cd](https://github.com/dbkaplun/smart-cd) - chpwd 後に `ls` と `git status` を実行します。
- [smart-command-not-found](https://github.com/rami-shalhoub/Smart-command-not-found) - コマンドが見つからない場合、すべてのオプションを表示します。
- [smart-files](https://github.com/vxfemboy/zsh-smart-files) - ファイルパスに対して視覚的なフィードバックを提供し、必要に応じて自動的にディレクトリを作成します。パスの状態（存在、新規、または権限拒否）に基づき、色で強調し、ディレクトリ作成を自動的に処理します。
- [smart-history](https://github.com/lstasi/zsh-smart-history-plugin) - あなたの最近の ZSH ヒストリを Ollama で駆動したコマンド提案に変換します。
- [smart-insert](https://github.com/lgdevlop/zsh-smart-insert) - [`fd`](https://github.com/sharkdp/fd)、[`rg`](https://github.com/BurntSushi/ripgrep)、[`fzf`](https://github.com/junegunn/fzf) を使ってファイルとコンテンツを検索するためのインタラクティブなウィジェットを提供します。結果を直接シェルに挿入し、オプションのコマンドプレフィックスを付加できます。
- [smartcache](https://github.com/QuarticCat/zsh-smartcache) - コマンド出力のキャッシュを実施し、シェルの起動時間を短縮します。
- [smartinput](https://github.com/momo-lab/zsh-smartinput) - ブレケットやクォートをタイプすると、対応する終端ブレケットやクォートが自動的に追加されます。
- [smile](https://github.com/fundor333/smile) - ランダムなスマイルを表示する関数を追加します。
- [snap-list](https://github.com/crisis1er/zsh-snap-list) - openSUSE Tumbleweed で `sudo snapper list` をサポートするヘルパー関数を提供します。
- [snap-new](https://github.com/crisis1er/zsh-snap-new) - raw `snapper` コマンドを、14スケナリオのテーブルがデスクトップの説明を事前に埋め込み、あなたが行うことの種類（標準 vs 重要）を推奨するようにしたガイド付きフローに置き換えます。実行前にディスク使用量を確認し、既存のスナップショットコンテキストを表示し、確認を求めます。--cleanup-algorithm timeline は常に設定されます — それを忘れないでください。
- [snap-rollback](https://github.com/crisis1er/zsh-snap-rollback) - Native `snapper rollback` は安全チェックなしで即時実行されます。このプラグインはガイド付きフロー、スナップショットサマリー、二重確認、ドライランモード、およびリブートのリマインダーを追加します。
- [snippets](https://github.com/willghatch/zsh-snippets) - コマンドラインスニペットの展開。
- [snr](https://github.com/raisedadead/zsh-snr) - 最初のコマンドの選択された出力を次のコマンドに渡します。
- [solarized-man](https://github.com/zlsun/solarized-man) - [Oh-My-ZSH](https://ohmyz.sh/) のプラグイン colored-man-pages の改良版で、終端の [solarized dark](https://github.com/altercation/solarized/blob/master/iterm2-colors-solarized/Solarized%20Dark.itermcolors) テーマに最適化されています。
- [some-peco](https://github.com/MoeBensu/zsh-some-peco/) - [peco](https://github.com/peco/peco) によるコマンドライン体験を強化します。つまり、迅速なディレクトリナビゲーションと履歴検索を提供します。
- [sops-crypt](https://github.com/chaosimpact/sops-crypt) - Mozilla SOPS 用のプラグインで、現在のディレクトリとサブディレクトリ内のファイルのワンクリック暗号化と復号を提供します。
- [spaceship-ocm](https://github.com/iamkirkbater/spaceship-ocm-plugin) - OpenShift Cluster Manager (ocm) の設定をクエリし、接続されている環境を表示します。終端に [NerdFont](https://www.nerdfonts.com/font-downloads) をインストールしている必要があります。
- [spack](https://github.com/Game4Move78/zsh-spack) - [Spack](https://github.com/spack/spack) 生成モジュールのロード／アンロードに必要なユーティリティアリーズと関数を含んでいます。これは `module` コマンドを使用しているため、 `spack load` よりも効率的です。
- [ssh-agent](https://github.com/sdiebolt/zsh-ssh-agent) - `ssh-agent` が既に実行されていない場合、自動的に起動します。
- [ssh-connect](https://github.com/gko/ssh-connect) - シンプルな `ssh` マネージャー。
- [ssh-host](https://github.com/obolientsev/ssh-host) - SSH を [fzf](https://github.com/junegunn/fzf) で管理します。
- [ssh-plugin](https://github.com/paraqles/zsh-plugin-ssh) - `ssh` 用のプラグイン。
- [ssh-quickconnect](https://github.com/breda/zsh-ssh-quickconnect) - あなたの `ssh` 設定ファイルと `known_hosts` ファイルからホストに迅速に接続できるシンプルなユーティリティ。
- [ssh-warrior](https://github.com/OfferPi/ssh-warrior) - 接続中のホストに応じて、ターミナルの背景色を自動的に変更します。OSC 11 / OSC 111 エスケープシーケンスをサポートするターミナル（Kitty、iTerm2、Alacritty、GNOME Terminal など）が必要です。 `ssh`
- [sshinfo](https://github.com/SckyzO/zsh-sshinfo) - 接続前に解決された SSH 接続詳細（最終ホスト名、ポート、ユーザー、プロキシなど）を表示します。これは、SSH 設定を確認する際に特に役立ち、アリーズ、プロキシ、複数の設定ファイルを含む複雑な構成では特に重要です。
- [sshpky](https://github.com/jeffzhangc/sshpky_zsh_plugin) - `$ZSH_CUSTOM` フォルダ内の git リポジトリを自動的に更新します。
- [sshukh](https://github.com/anatolykopyl/sshukh-zsh-plugin) - サーバーに した際に、あなたの ファイルを自動的に更新します。 `known_hosts` `ssh`
- [startcache](https://github.com/rndjams/zsh-startcache) - 遅い `eval "$(tool init)"` コマンドの出力をキャッシュし、シェル起動時間を短縮します。また、 `compinit` の fpath-string の無効化をタイムベースのステレートに置き換えます。設定により、110ms–1180ms のシェル起動時間を節約します。
- [startify](https://github.com/NorthIsMirror/zsh-startify) - 最近使用した `vim` ファイル、shell-util ファイル、アクティブ `tmux` セッション、最近実行された `git` コマンドなど、多くの情報を表示します。
- [startup-timer](https://github.com/paulmelnikow/zsh-startup-timer) - シェルが起動するのにかかる時間を表示します。
- [stashy](https://github.com/MisterRios/stashy) - `git stash` を使いやすくするプラグイン。
- [statify](https://github.com/vladmrnv/statify) - 基本的な統計分析を行うプラグイン。
- [sublime](https://github.com/valentinocossar/sublime) - 公式 [Sublime](https://www.sublimetext.com/) プラグイン for [Oh My Zsh](https://ohmyz.sh/) と同様ですが、すでに開いている Sublime ウィンドウにファイルを開きます。
- [sudo (hcgraf)](https://github.com/hcgraf/zsh-sudo) - プラグインをから抽出したスタンドアローン版。emacs-modeまたはvi-commandモードで*ESC-ESC-を押すことで、現在または前のコマンドの前にを切り替えます。 `sudo` [oh-my-zsh](https://ohmyz.sh/) `sudo`
- [sudo (none9632)](https://github.com/none9632/zsh-sudo/) - -をタイプすることで、現在のコマンドにをプレフィックスとして追加します。 `sudo` `ESC` `ESC`
- [sudo-previous-current](https://github.com/chmouel/zsh-sudo-previous-current) - 現在の行または前のコマンドに`sudo`を追加します。現在のカーソル位置をできるだけ維持するように試み、あなたの作業フローを妨げません。
- [suffix-alias](https://github.com/srijanshetty/zsh-suffix-alias) - ZSHのサフィックスアライアスを使って、シェル内で直接ファイルを開きます。
- [sussysh](https://github.com/sussynuggetz/sussysh-zsh) - xiong-chiamiovに基づいています。
- [svn-n-zsh](https://github.com/khrt/svn-n-zsh-plugin) - 標準の [oh-my-zsh](https://ohmyz.sh/) [svn](https://subversion.apache.org/) プラグインのリワード。
- [switch-git](https://github.com/robin-mbg/switch-git) - `git`リポジトリ間の簡単な切り替え。ただ`sgr <some part of you repo's name>`をタイプし、Enterを押すだけで完了します。
- [symfony (voronkovich)](https://github.com/voronkovich/symfony.plugin.zsh) - [Symfony](https://symfony.com/)用のZSHプラグイン。
- [syntax-highlighting-filetypes](https://github.com/trapd00r/zsh-syntax-highlighting-filetypes) - ZSHのシンタックスハイライトにdircolorsをリアルタイムで適用。
- [syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) - ZSHプロンプトにシンタックスハイライトを追加します。これは、[zsh-users/zsh-history-substring-search](https://github.com/zsh-users/zsh-history-substring-search)を*前に*ロードする必要があります。それにより、両方とも動作しなくなります。
- [sys-diver](https://github.com/ToruIwashita/sys-diver-zsh) - ディレクトリ変更やエディタ起動に、コマンドをタイプせずにキー操作のみで実行するためのZSHプラグイン。
- [sysadmin-util](https://github.com/skx/sysadmin-util) - sysadmins向けのスクリプトコレクション。Steve Kempのもの。
- [system-clipboard](https://github.com/kutsan/zsh-system-clipboard) - ZLE（ZSHラインエディタ）のクリップボード操作に、`vi`エミュレーションキーマップ向けのキーバインディングを追加します。Linux、macOSおよびAndroid（Termux経由）で動作します。
- [system-update](https://github.com/cnlee1702/zsh-system-update) - [oh-my-zsh](https://ohmyz.sh/)用のスマートで効率的なシステム更新プラグイン。APTパッケージ、Conda環境、pipインストールを、知的なキャッシュにより更新時間を最小化します。
- [systemd](https://github.com/le0me55i/zsh-systemd) - `systemd`に多くのエイリアスを追加します。
- [t3-shortcuts](https://github.com/murat-yasar/zsh-t3-shortcuts) - TYPO3プロジェクトでの作業に必要なショートカット。TYPO3プロジェクトディレクトリ間の迅速なナビゲーションコマンドを提供します。
- [t32](https://github.com/chrissicool/zsh-t32) - Lauterbach Trace32ツールセット向けのプラグイン。t32ツールセットを実行するためのフォントを自動登録し、必要な環境変数を設定します。
- [tab-title (p1r473)](https://github.com/p1r473/tab-title/) - [tmux](https://github.com/tmux/tmux/wiki)および[screen](https://www.gnu.org/software/screen/manual/screen.html)のペインとウィンドウの名前を変更します。
- [tab-title (trystan2k)](https://github.com/trystan2k/zsh-tab-title) - 現在のディレクトリまたは実行中のプロセスに基づいて、ターミナルタブのタイトルを設定します。[termsupport.zsh](https://github.com/ohmyzsh/ohmyzsh/blob/master/lib/termsupport.zsh)からフォークされたものです。
- [tailf](https://github.com/rummik/zsh-tailf) - 新しい改行をプレフィックスに代わり、終端の改行を追加する`tailf`関数を追加します。
- [take](https://github.com/amyreese/zsh-take) - からを再現します。 `take` [oh-my-zsh](https://ohmyz.sh/)
- [tasko](https://github.com/knid/tasko) - [TaskWarrior](https://github.com/GothenburgBitFactory/taskwarrior)タスクに注釈を追加できます。
- [telepresence](https://github.com/alexgervais/telepresence-ps1) - 現在の[Telepresence](https://www.telepresence.io/)接続状態とコンテキストをZSHプロンプトに追加します。
- [temperatures](https://github.com/groberth/temperatures-zsh) - 軽量で依存関係のないプラグイン。Raspberry Pi向けに設計されたが、すべてのLinuxシステムで動作する。ZSHプロンプトにマシンのCPU（オプションでGPU）の温度を直接表示します。 `/sys/class/thermal/`
- [tempit](https://github.com/idirxv/tempit) - 一時ディレクトリの作成・管理・ナビゲーションを簡単に実行します。一時ディレクトリを失わずに、持続的なトラッキングシステムを提供します。
- [terminal-aliases](https://github.com/dvir-levy/terminal-aliases) - `terraform`、`git`などに便利なエイリアスを追加します。
- [terminal-app](https://github.com/the8/terminal-app.zsh) - 新しいmacOS El Capitan Terminal.app機能との統合用のプラグイン。
- [terminal-title](https://github.com/AnimiVulpis/zsh-terminal-title) - ターミナルウィンドウにタイトルをつけるために使用できる`set-term-title`関数を追加します。
- [terminal-workload-report](https://github.com/LockonS/terminal-workload-report) - ターミナル経由で実行されたコマンドの数を計算・表示するプラグイン。
- [termux](https://github.com/zpm-zsh/termux) - [Termux](https://termux.com/)との互換性を追加します。
- [terraform (hanjunlee)](https://github.com/hanjunlee/terraform-oh-my-zsh-plugin) - 現在の[terraform](https://www.terraform.io/)ワークスペースをプロンプトに追加します。
- [terraform (jsporna)](https://github.com/jsporna/terraform-zsh-plugin) - オリジナルの[oh-my-zsh](https://ohmyz.sh/)プラグインにエイリアスとタブ補完を追加。ワークスペース（デフォルトでない場合）をプロンプトに追加します。
- [terraform (macunha1)](https://github.com/macunha1/zsh-terraform) - [terraform](https://terraform.io/)、タブ補完、ヘルパー関数を追加して、terraformワークスペースをプロンプトに表示します。
- [terraform (ptavares)](https://github.com/ptavares/zsh-terraform) - エイリアス、関数、タブ補完を追加。また、[terraform-docs](https://github.com/terraform-docs/terraform-docs)、[tfsec](https://github.com/aquasecurity/tfsec)、[tflint](https://github.com/terraform-linters/tflint)をインストールします。
- [terraform (thuandt)](https://github.com/thuandt/zsh-terraform) - [terraform](https://terraform.io/)に便利なエイリアスを追加し、`terraform`および`terragrunt`の補完を追加します。
- [terragrunt](https://github.com/hanjunlee/terragrunt-oh-my-zsh-plugin) - の薄いラッパーとしてのプラグイン。追加のツールを提供します。 [Terragrunt](https://github.com/gruntwork-io/terragrunt) [Terraform](https://terraform.io/)
- [tfaws](https://github.com/jmischler72/tfaws) - AWSとTerraform間のコンテキスト切り替えを簡略化。AWS SSOログインを自動化し、`.awsprofile`ファイルを使ってプロファイルを自動切り替え、Terraformワークスペース/フォルダをプロファイルにリンクします。
- [tfenv](https://github.com/CDA0/zsh-tfenv) - をインストール、更新、ロードします。 `tfenv` [zsh-pyenv](https://github.com/mattberther/zsh-pyenv)
- [tfswitch](https://github.com/ptavares/zsh-tfswitch) - [tfswitch](https://github.com/warrensbox/terraform-switcher)をインストールおよびロードします。
- [tgenv](https://github.com/ptavares/zsh-tgenv) - [tgenv](https://github.com/cunymatthieu/tgenv.git)をインストールおよびロードします。`tgenv`の手動更新関数を含んでいます。
- [tgswitch](https://github.com/ptavares/zsh-tgswitch) - [tgswitch](https://github.com/warrensbox/tgswitch)をインストールし、ロードする.
- [thefuck](https://github.com/laggardkernel/thefuck) - キャッシュをサポートした[thefuck](https://github.com/nvbn/thefuck)のロード（以前のコマンドを修正するツール）により、ロード時間を劇的に短縮する.
- [theia-dev-tools](https://github.com/taPublic/zsh-theia-dev-tools) - [theia-ide](https://github.com/theia-ide/theia)との作業に便利な関数を提供する.
- [tig](https://github.com/MenkeTechnologies/zsh-tig-plugin) - [tig](https://github.com/jonas/tig)にいくつかの高度なバインディングを追加し、また`tig-pick`スクリプトを提供する.
- [time-tracker](https://github.com/mike-fam/time-tracker-plugin) - 複数のリポジトリ間の`git`ブランチでの時間消費を自動的に追跡。異なるプロジェクトとブランチでの時間配分を理解したい開発者に最適.
- [timewarrior (ianmkenney)](https://github.com/ianmkenney/timewarrior_zsh_completion) - [timewarrior](https://timewarrior.net/)時間追跡アプリケーション用のタブ補完を提供する.
- [timewarrior (svenXY)](https://github.com/svenXY/timewarrior) - [timewarrior](https://timewarrior.net/)、時間追跡アプリケーションへのサポートを追加する.
- [tinted-shell](https://github.com/tinted-theming/tinted-shell) - シェルのデフォルトANSIカラーを変更できるスクリプトを追加するが、最も重要なのは、シェルの256カラー空間のカラー17から21まで（ターミナルがサポートしている場合）を提供すること。これにより、シェルの元の明るいカラー（例：明るい緑はまだ緑）を維持しつつ、[Vim](https://www.vim.org)などのアプリケーションに追加のbase16カラーを提供できる。
- [tipz](https://github.com/molovo/tipz) - あなたが実行したコマンドにaliasがある場合、そのaliasを表示する。これは[alias-tips](https://github.com/djui/alias-tips)と同様の動作をする。
- [title](https://github.com/zpm-zsh/title) - ターミナルウィンドウのタイトルを設定できるようにする。
- [titles](https://github.com/jreese/zsh-titles) - [tmux](https://tmux.github.io)およびxterm互換ターミナル向けの自動ウィンドウとタブタイトルを提供。
- [tm](https://github.com/kjhaber/tm.zsh) - 新しい[tmux](https://tmux.github.io)セッションの作成、既存セッションへの接続、セッション間の切り替え、アクティブセッションのリスト表示を簡素化する。
- [tmux (zpm-zsh)](https://github.com/zpm-zsh/tmux) - [tmux](https://tmux.github.io)用のプラグイン。
- [tmux (zsh-contrib)](https://github.com/zsh-contrib/zsh-tmux) - [tmux](https://tmux.github.io)用のプラグイン。実行中のコマンドに基づくウィンドウタイトルの自動更新、実行中のコマンド名の表示、ジョブ参照（fg, %1）を実際のコマンド名に変換し、タイトルの自動切り詰め（最大20文字）を提供。
- [tmux-auto-title](https://github.com/mbenford/zsh-tmux-auto-title) - 現在のフォアグラウンドコマンドをウィンドウ/パネルのタイトルに自動的に設定。
- [tmux-rename](https://github.com/sei40kr/zsh-tmux-rename) - [tmux](https://tmux.github.io)ウィンドウの自動リネーム。
- [tmux-sessionizer](https://github.com/nikevsoft/tmux-sessionizer) - ThePrimeagenで見られる[tmux](https://tmux.github.io)セッション管理。
- [tmux-simple](https://github.com/TBSliver/zsh-plugin-tmux-simple) - ZSHと併用するためのシンプルな[tmux](https://tmux.github.io)プラグイン。
- [tmux-ssh-syncing](https://github.com/alberti42/tmux-ssh-syncing) - `tmux`のウィンドウ名をアクティブな`ssh`セッションと同期します。このプラグインは、同じウィンドウ内にあるアクティブな[`tmux`](https://tmux.github.io)セッションのリモートホストを反映するよう、`ssh`ウィンドウ名を動的に更新します。すべての`ssh`セッションが閉じられると元のウィンドウ名を復元します。
- [tmux-vim-integration](https://github.com/jsahlen/tmux-vim-integration.plugin.zsh) - 実行中の`vim`（またはNeoVim）セッションから、隣接する[tmux](https://tmux.github.io)パネルからファイルを開く。
- [tmux-zsh-vim-titles](https://github.com/MikeDacre/tmux-zsh-vim-titles) - `tmux`、ZSH、Vim/NVIMのための統合ターミナルタイトルを提供。モジュラー。
- [tmuxrepl](https://github.com/csurfer/tmuxrepl) - R-EP-L [tmux](https://tmux.github.io)セッションをZSHで簡単に使うためのシンプルなプラグイン。
- [todotxt](https://github.com/Neluji/omz-todotxt) - [todo.sh](https://github.com/benignoc/alfred-todotxt/)のアリアを追加する。
- [toggl](https://github.com/natterstefan/toggl-zsh-plugin) - で追跡された総労働時間の表示用のコマンドを追加する。 `toggl-week` [toggl.com](https://toggl.com)
- [toggle-command-prefix](https://github.com/xPMo/zsh-toggle-command-prefix) - コマンドにプレフィックスを付けるためのウィジェットを追加。デフォルトではAlt+sをバインディングし、コマンドに`sudo`をプレフィックスする。
- [toolbox](https://github.com/paxcoder/zsh-toolbox) - [homebrew](https://brew.sh)プラグインを自動的に更新。起動時およびアリア設定時に有効/無効の通知を許可する。
- [touchplus](https://github.com/raisedadead/zsh-touchplus) - ファイルを作成する際に`touch`を用いてパスを含める。
- [traista](https://github.com/exaluc/traista) - 最後に実行したコマンドのステータスをステータスデコレーションとカラーリングで表示。ダークターミナルテーマと組み合わせるとより良い。 `git`
- [travis](https://github.com/denolfe/zsh-travis) - 存在する場合、現在のリポジトリの[Travis CI](https://www.travis-ci.com/)ページを開く。
- [tre](https://github.com/redxtech/zsh-tre) - [tre](https://github.com/dduan/tre#editor-aliasing)の使用を簡単にする。
- [tsm](https://github.com/RobertAudi/tsm) - [tmux](https://tmux.github.io)セッションマネージャーを追加。
- [tumult](https://github.com/unixorn/tumult.plugin.zsh) - macOS向けのツールを追加。
- [ubuntualiases](https://github.com/GuilleDF/zsh-ubuntualiases) - Ubuntu 16のアリア。
- [ugit](https://github.com/Bhupesh-V/ugit) - 最後の`git`操作を元に戻す。
- [uncloudium](https://github.com/Talon1024/omz-uncloudium) - Google Chrome Web Storeからcrxファイルをダウンロードするためのヘルパースクリプトを追加。
- [undo-dir](https://github.com/allisnulll/zsh-undo-dir) - 現在のワーキングディレクトリの変更を元に戻すおよび再実行。
- [undollar](https://github.com/zpm-zsh/undollar) - ターミナルプロンプトの先頭にあるドル記号を削除。
- [unique-id](https://github.com/z-shell/zsh-unique-id) - 実行中のZshellセッションを識別するためのユニークな番号を、シェル変数`$ZUID_ID`に提供。このユニークな番号に加えて、ユニークなコード名もシェル変数`$ZUID_CODENAME`に提供される。たとえば、ログをファイル`.../mylog-${ZUID_CODENAME}.log`に保存する場合、2つの異なるZshellが同時に同じファイルに書き込まないよう保証できる。
- [unix-simple](https://github.com/redxtech/zsh-unix-simple) - unixのシンプルさを示すグラフィックを表示するコマンド。
- [unraid](https://github.com/donbuehl/zsh-unraid) - Unraidサーバーをコマンドラインから直接管理するための便利なアリアと関数を追加する。
- [unwrap](https://github.com/foxleigh81/unwrap-zsh-plugin) - ディレクトリを削除する際にその中身を削除せず、そのディレクトリの親ディレクトリに移動させる機能を提供します
- [up (cjayross)](https://github.com/cjayross/up) - ディレクトリを階層的に上に移動するためのシンプルな方法
- [up (peterhurford)](https://github.com/peterhurford/up.zsh) - 複数レベル上に移動するための「上」のコマンドを追加します `cd`
- [up-dir](https://github.com/sgpthomas/zsh-up-dir) - `ctrl-h`をディレクトリの上に移動するためのキーにバインドし、いくつかのディレクトリ上に移動する際にコマンドを入力しなくても簡単に移動できるようにします
- [update-zsh](https://github.com/AndrewHaluza/zsh-update-plugin) - カスタム [oh-my-zsh](https://ohmyz.sh/) プラグインのアップデート。oh-my-zsh フレームワークのみで動作。
- [url-highlighter](https://github.com/ascii-soup/zsh-url-highlighter) - ZSHの文法ハイライト器に搭載されたプラグインで、URLが「良好」なステータスを返す場合に緑色、そうでない場合に赤色に表示します。URLのタイプミスを確認するのに便利です
- [usb](https://github.com/NiziL/usb.plugin.zsh) - USBドライブのマウントとアンマウントを迅速に実行できる、小さなプラグイン
- [uv-env](https://github.com/matthiasha/zsh-uv-env) - 現在のディレクトリに基づき、自動的に仮想環境を [uv](https://github.com/astral-sh/uv) でアクティブ化します
- [uvenv](https://github.com/vincentto13/uvenv.plugin.zsh) - オリジナルの [oh-my-zsh](https://ohmyz.sh/) `venv` モジュールの機能を拡張します
- [v](https://github.com/teaVeloper/v) - 高速ファイル検索を囲むエディタです
- [vagrant-box-wrapper](https://github.com/evanthegrayt/vagrant-box-wrapper) - [vagrant](https://www.vagrantup.com/)のラッパープラグインで、ボックスディレクトリの外側から `vagrant` コマンドを呼び出すことができます。このプラグインには、複数のボックスを管理するための追加コマンドと、カスタムタブ補完も含まれています
- [valet (A909M)](https://github.com/A909M/valet-zsh-plugin) - Debian/Ubuntuで [Laravel Valet](https://laravel.com/docs/valet) および [Valet Linux](https://cpriego.github.io/valet-linux/) をサポート。知的な補完、便利なエイリアス、ユーティリティ関数を提供し、ローカル開発ワークフローをスムーズにします
- [valet (NasirNobin)](https://github.com/NasirNobin/zsh-valet/) - プロジェクトのルートから `.valetphprc` を読み込み、自動的にそのPHPバージョンに切り替えます
- [vanilli.sh](https://github.com/yous/vanilli.sh) - シェル設定の軽量なスタートポイントです
- [vapor](https://github.com/notf0und/zsh-vapor) - Laravel [vapor](https://github.com/laravel/vapor-cli) プラグインで、プロジェクトツリーのどこからでも `vapor` を実行できるようになります。自動補完もサポート！
- [vcshr](https://github.com/aubreypwd/zsh-plugin-vcshr) - vcshユーザー向けに、GitHubリポジトリを `vcsh` で自動インストールできるようにするプラグインです。など、 `~/.zshrc` などにも対応します
- [velocity](https://github.com/rahulsalvi/velocity-python) - ZSHおよび [tmux](https://tmux.github.io) 用のPowerlineベースのテーマ要素です
- [venv-lite](https://github.com/gimbo/venv-lite.zsh) - 非常に軽量な [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) のクローン。ほぼ [pyenv](https://github.com/pyenv/pyenv) を使用するように設計されています（ただし、使用する必要はありません）。そして、 [`venv` module](https://docs.python.org/3/library/venv.html) に基づいているため、（作成）は Python >= 3.3 でのみ動作します
- [venv-wrapper](https://github.com/glostis/venv-wrapper) - 仮想環境の管理を容易にするZSH関数を提供します `venv`
- [venv](https://github.com/lucasheartcliff/venv) - 現在のディレクトリに ファイルへのパスがあるたびに、自動的に を実行します `source venv/bin/activate` `venv/bin/activate`
- [venvs](https://github.com/pawnhearts/venvs) - Python仮想環境の自動切り替え。プロジェクトフォルダ（`~/myproject/venv`）およびグローバルフォルダ（例：`~/.virtualenvs`）の両方をサポートします
- [vi-increment](https://github.com/zsh-vi-more/vi-increment) - `vim` に似たインクリメント／デクリメント操作を追加します
- [vi-mode (jeffreytse)](https://github.com/jeffreytse/zsh-vi-mode) - 💻 ZSH用のより良い、フレンドリーな `vi`(`vim`) モードプラグインです
- [vi-mode (nyquase)](https://github.com/Nyquase/vi-mode) - 追加の `vi` ライクの機能を提供します
- [vi-mode (sinetoami)](https://github.com/sinetoami/vi-mode) - ZSHにさらに `vi` に似た機能を追加します
- [vi-motions](https://github.com/zsh-vi-more/vi-motions) - 追加の動きとテキストオブジェクト（引用符や括弧内のテキストおよびコマンド）を追加します
- [vi-quote](https://github.com/zsh-vi-more/vi-quote) - 動きに対して引用または非引用を操作する操作を追加します
- [viexchange](https://github.com/okapia/zsh-viexchange) - バッファ内の2つの場所の間のテキストを簡単に交換できる `vi` モードプラグイン。vim-exchangeに似ています
- [vim-mode](https://github.com/softmoth/zsh-vim-mode) - フレンドリーな `vi` モードバインドを追加し、基本的なEmacsキーやインクリメンタル検索、モード表示などを提供します
- [vim-plugin](https://github.com/nviennot/zsh-vim-plugin) - カーソルが特定の行にあるファイルを開くために `vim filename:123` を使用できるようにします
- [vimman](https://github.com/yonchu/vimman) - ZSH における と同じように プラグインのマニュアル（ヘルプ）を表示します `vim` `man`
- [vimto](https://github.com/laurenkt/zsh-vimto) - 改善されたZSH `vi` モード（bindkey -v）プラグイン
- [virtualenv-mod](https://github.com/mattcl/virtualenv-mod) - virtualenv ZSHプラグインの [oh-my-zsh](https://ohmyz.sh) 用の改良版です
- [virtualenv-prompt](https://github.com/tonyseek/oh-my-zsh-virtualenv-prompt) - 上流の [oh-my-zsh](https://ohmyz.sh/) からフォークされたvirtualenvプラグイン。[oh-my-zsh](https://ohmyz.sh) サブテーマでの仮想環境プロンプトのカスタマイズをサポートします
- [virtualz](https://github.com/aperezdc/virtualz) - Adam Breneckiの をインスピレーションとして作られたPython マネージャー。 用にvirtualenvwrapperを置き換えます [virtualenv](https://virtualenv.pypa.io/en/latest/) [Virtualfish](https://github.com/adambrenecki/virtualfish) [Fish shell](http://fishshell.com/)
- [virtuozzo-plugin](https://github.com/TamCore/virtuozzo-zsh-plugin) - [oh-my-zsh](https://ohmyz.sh/) プラグインで、[virtuozzo](https://docs.virtuozzo.com/master/index.html) バレメタル仮想化システムをサポートします
- [visit](https://github.com/justinpchang/visit) - 高速ナビゲーションを実現するカスタムプラグインです
- [vivi](https://github.com/rufevean/vivi) - Googleの [Gemini](https://gemini.google.com) ランゲージモデル（LLM）機能をあなたのターミナルに直接統合します。クエリを送信し、AI生成の解決策を受信できるようになります。すべてターミナル内で実行可能です。このプラグインはセッションコンテキストをサポートし、受信したコマンドを動的に実行できます
- [vivid](https://github.com/ryanccn/vivid-zsh) - `LSCOLORS` と [vivid](https://github.com/sharkdp/vivid) を使いやすくします
- [vivid](https://github.com/zsh-contrib/zsh-vivid) - [vivid](https://github.com/sharkdp/vivid) インテグレーション用のプラグインで、テーマをサポートした `LS_COLORS` を生成・エクスポートします
- [volta (cowboyd)](https://github.com/cowboyd/zsh-volta) - [Volta](https://volta.sh)のNode.jsツールチェーンマネージャーをスムーズにインストール・設定します
- [volta](https://github.com/ri7nz/zsh-volta) - [Volta: JS Toolchains as Code](https://github.com/volta-cli/volta)をインストールし、読み込みます
- [vox](https://github.com/andrewbonnington/vox.plugin.zsh) - macOS向けの軽量かつ機能豊富なオーディオプレイヤーを制御するプラグイン [oh-my-zsh](https://ohmyz.sh/) [VOX](https://vox.rocks/)
- [vsc](https://github.com/davidtong/vsc.plugin.zsh) - macOS向けの[Visual Studio Code](https://code.visualstudio.com/)プラグイン
- [vscode (kasperhesthaven)](https://github.com/kasperhesthaven/vscode) - 複数のシステムで[Visual Studio Code](https://code.visualstudio.com/)をより簡単に開くためのシンプルプラグイン
- [vscode (qianxinfeng)](https://github.com/qianxinfeng/zsh-vscode) - [Visual Studio Code](https://code.visualstudio.com/)のプラグイン
- [vscode-shell-integration](https://github.com/tolkonepiu/vscode-shell-integration-zsh-plugin) - VS Codeのターミナルで作業しているときに、自動的に[VS Code shell integration](https://code.visualstudio.com/docs/terminal/shell-integration)を有効にします
- [vterm](https://github.com/randomphrase/vterm-zsh-plugin) - のシェルセッションから直接のコマンドを実行できます `emacs` [vterm](https://github.com/vterm/vterm)
- [vtex](https://github.com/xdigu/zsh-vtex) - [vtex](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-command-reference#default-commands)のCLIコマンドにヘルパーエイリアスを追加します
- [wakatime (sobolevn)](https://github.com/sobolevn/wakatime-zsh-plugin) - ターミナル内で使用した[time](https://wakatime.com/)の支出を追跡。プロジェクトごとの統計も表示します
- [wakatime (wbingli)](https://github.com/wbingli/zsh-wakatime) - ZSHでコマンドの自動時間計測を[wakatime](https://wakatime.com/)で実行
- [warhol](https://github.com/unixorn/warhol.plugin.zsh) - [grc](https://github.com/garabik/grc)でコマンドの色分けを設定します
- [warp-claude-tab](https://github.com/akexorcist/zsh-warp-claude-tab) - ZSHプラグインとClaude Codeアグリントが、新しい[Warp](https://www.warp.dev/)ターミナルタブを開き、事前にClaude Codeセッションをロード — セッション間のタスクの渡し方をコピー＆ペーストなしで行うのに最適
- [warrior](https://github.com/OfferPi/zsh-warrior) - 自然言語をZSHコマンドに変換するためのローカル大規模言語モデル（[Ollama](https://ollama.com/)）を使用
- [watch](https://github.com/enrico9034/zsh-watch-plugin) - 現在または前回のコマンドにwatchをプレフィックスするため、を押下してください `CTRL + W`
- [watson.zsh](https://github.com/bcho/Watson.zsh) - [watson](https://github.com/TailorDev/Watson)のタイムマネジメントシステム向けのプラグイン
- [wd](https://github.com/mfaerevaag/wd) - Warpディレクトリは、ZSHでカスタムディレクトリにジャンプできるようにします。なぜなら、頻繁にアクセスされるフォルダや長いパスを持つ場合、は効率的ではありませんから `cd` `cd`
- [web-search (anant-mishra1729)](https://github.com/Anant-mishra1729/web-search/) - Google、Bing、Wiki、YouTube、Yahoo、Duck Duck Go、GitHub、Stack Overflowなど、さまざまなサービスからコマンドラインで検索できるエイリアスを追加します
- [web-search (sinetoami)](https://github.com/sinetoami/web-search) - CLIから直接Bing、Google、Yahoo、Duckduckgoの検索を実行するコマンドを追加します
- [web-search (yabanahano)](https://github.com/Yabanahano/web-search) - Google、Wiki、Bing、YouTubeなど、人気サービスからの検索にエイリアスを追加します
- [welcome-banner](https://github.com/joshuadanpeterson/zsh-welcome-banner) - ランダムな引用文を表示するログインバナーを表示します
- [westchange](https://github.com/TomiVidal99/westchange) - ディレクトリ間の迅速な切り替えを可能にします。_requires [fzf](https://github.com/junegunn/fzf)
- [which-jspm](https://github.com/zkuzmic/which-jspm/) - 現在のディレクトリに存在するロックファイルを検知した場合、プロンプトの末尾に`npm`、`yarn`または`pnpm`を追加します
- [whisp](https://github.com/jaacob/whisp) - OpenAIのWhisper CLIツールに、一貫性と便利な機能を追加します。これにより、音声ファイルのテキスト変換を効率的に行え、作業の重複を防ぎます
- [whobrokemycode](https://github.com/cameronbroe/whobrokemycode) - ファイル内の特定の行が最後に変更された場所を`git blame`でハイライトします
- [window-title](https://github.com/olets/zsh-window-title) - ターミナルウィンドウに情報的なタイルを追加します
- [windows-title](https://github.com/mdarocha/zsh-windows-title) - ターミナルウィンドウのタイトルを現在のディレクトリと最後に実行されたコマンドで動的に更新します
- [wordle](https://github.com/zechris/zwordle) - ZSH向けのWordle、タブ補完付き
- [workon](https://github.com/bryanculver/workon.plugin.zsh) - プロジェクト間の移動を簡単に行うためのユーティリティ
- [worktree](https://github.com/jspears/worktree) - `git worktree`をラップする関数を追加します
- [wpm](https://github.com/btror/wpm) - ターミナル内でタイピングスピードをテストし、WPM、正確性などを追跡。結果は手軽なJSON形式で保存され、簡単に追跡できます
- [wsl](https://github.com/florentinl/omz-wsl) - ZSH内でWSL内で実行している場合に、作業をしやすくするためのヘルパー関数を追加します
- [wsl2-ssh-pageant](https://github.com/antoinemartin/wsl2-ssh-pageant-oh-my-zsh-plugin) - WSLで保存されたYubikeyのGPGキーを使用します。これは、[wsl2-ssh-pageant repo](https://github.com/BlackReloaded/wsl2-ssh-pageant)の指示をZSHプラグインとしてパッケージ化しています
- [xdg-basedirs](https://github.com/krahlos/xdg-basedirs) - XDGベースディレクトリを[XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/)に従って設定します。このプラグインにより、ユーザーのデータ、キャッシュ、設定ファイルの保存環境が適切に構成されます
- [xxh (ninagrosse)](https://github.com/ninagrosse/xxh-plugin-zsh-ohmyzsh) - [xxh](https://github.com/xxh/xxh)向けのプラグインで、[xxh-plugin-prerun-cli-tools](https://github.com/ninagrosse/xxh-plugin-prerun-cli-tools)が必要です
- [xxh (roman-geraskin)](https://github.com/roman-geraskin/xxh-plugin-zsh-zshrc) - 向けのプラグインで、あなたのをリモートホストにコピーし、でソースします [xxh-shell-zsh](https://github.com/xxh/xxh-shell-zsh) `~/.zshrc` [xxh-shell-zsh](https://github.com/xxh/xxh-shell-zsh)
- [yadm](https://github.com/juanrgon/yadm-zsh) - ローカルの`yadm`設定変更がある場合、警告を表示します
- [yapipenv](https://github.com/AnonGuy/yapipenv.zsh) - がそのディレクトリに存在する場合、自動的にそのディレクトリの環境を有効にします `pip` `pipenv`
- [yazi-mount](https://github.com/splixx05/zsh-yazi-mount) - USBパーティションを`udisksctl`でマウントし、[yazi](https://github.com/sxyazi/yazi)で開き、その後アンマウントします — 安全で、クリーンで、ユーザーフレンドリーです
- [yazi-zoxide](https://github.com/fdw/yazi-zoxide-zsh) - 向けのこのプラグインは、ただ一つのショートカットを追加しますが、との魔法を展開します。引数なしで、はただyaziを開きます。ディレクトリを引数として指定した場合、はそのディレクトリで開かれます。しかし、他の何らかの引数を指定した場合、がその引数で呼び出され、がその場所で開かれます [zsh](https://www.zsh.org) [Zoxide](https://github.com/ajeetdsouza/zoxide) [yazi](https://github.com/sxyazi/yazi/) `y` `yazi` `zoxide` `yazi`
- [yeoman](https://github.com/edouard-lopez/yeoman-zsh-plugin) - エドワールド・ロペスの [Yeoman](http://yeoman.io/) プラグイン for [oh-my-zsh](https://ohmyz.sh/)、yeoman バージョン ≥1.0 と互換（オプションとコマンド自動補完を含む）
- [you-should-use](https://github.com/MichaelAquilina/zsh-you-should-use) - ZSH プラグインで、あなたが定義したアライアスを使うことを思い出させます
- [youtube-dl-aliases](https://github.com/katrinleinweber/oh-my-zsh-youtube-dl-aliases) - YouTube から動画をダウンロードするための `yt` アライアスを追加します
- [youtube-dl](https://github.com/joow/youtube-dl) - [youtube-dl](https://youtube-dl.org/) 用のシンプルなプラグインです
- [yup](https://github.com/redxtech/zsh-yup) - `yarn`/`npm` プロジェクト内のすべての依存関係をアップグレードするためのヘルパー関数を追加します.
- [z.lua](https://github.com/skywind3000/z.lua) - あなたの習慣を学習して、より速くナビゲートできるコマンドラインツール。Windows および POSIX シェルに対応し、さまざまな改善を加えた の代替品。10倍速く および autojump より、3倍速く よりです [z.sh](https://github.com/rupa/z) [fasd](https://github.com/whjvenyl/fasd) [z.sh](https://github.com/rupa/z)
- [zabb](https://github.com/Mellbourn/zabb) - `zabb` は、ディレクトリの短くて覚えやすい略語を特定するコマンドで、それを [z](https://github.com/ajeetdsouza/zoxide) が無矛盾にジャンプできるようにします
- [zabrze](https://github.com/Ryooooooga/zabrze) - ZSH のアブリエーション展開プラグイン
- [zapmarks](https://github.com/iliutaadrian/zapmarks) - 最もよく使うコマンドラインブックマークに迅速にアクセス。複雑なコマンドを簡単に保存、検索、実行できます
- [zaw-src-package-managers](https://github.com/GeneralD/zaw-src-package-managers) - いくつかのパッケージマネージャー向けの [zaw](https://github.com/zsh-users/zaw) のオプションソース: [rubygem](https://rubygems.org/) (ruby), [pypi](https://pypi.python.org/pypi) (python), [clib](https://github.com/clibs/clib) (C), [appstore](https://github.com/mas-cli/mas) (Mac App Store) および [homebrew](https://brew.sh/) (Mac CUI App)
- [zaw](https://github.com/zsh-users/zaw) - ZSH の anything.el に似たウィジェット
- [zbrowse](https://github.com/zdharma-continuum/zbrowse) - シェル作業を行うとき、多くの場合 `echo $variable` が複数回呼び出されます（ループの結果を確認するなど）。ZBrowse では、単に `Ctrl-B` を押すだけで、ZBrowse – Zshell 変数ブラウザが呼び出されます
- [zce](https://github.com/hchbaw/zce.zsh) - Vim の EasyMotion または Emacs の ace-jump-mode に相当する ZSH の機能
- [zconvey](https://github.com/zdharma-continuum/zconvey) - 他の ZSH セッションにコマンドを送信できるようにします。これにより、すべてのアクティブな ZSH セッションに `cd $PWD` を実行できます
- [zed](https://github.com/eendroroy/zed-zsh) - zigzag に ZSH プラグインとしてインストールできるシンプルなラッパー [z](https://github.com/rupa/z)
- [zellij (jaeheonji)](https://github.com/jaeheonji/zsh-zellij-plugin) - [zellij](https://github.com/zellij-org/zellij) を使う環境を提供。requires [tmux](https://github.com/tmux/tmux)。著者が廃止。現在は [supported natively](https://zellij.dev/documentation/integration.html#autostart-on-shell-creation) に置き換えられています
- [zellij (tranzystorek-io)](https://codeberg.org/tranzystorekk/zellij.zsh) - 自動的に終端のマルチプレクサとして [zellij](https://github.com/zellij-org/zellij) を起動する環境を提供します.
- [zeno](https://github.com/yuki-yano/zeno.zsh) - fuzzy completion およびユーティリティプラグインで、[Deno](https://deno.land/) が駆動しています
- [zenplash](https://github.com/Chivier/zenplash) - ユーザーのディレクトリに保存されたテンプレートからファイルを作成します
- [zenv](https://github.com/janitha/zenv) - ディレクトリごとに隔離された作業シェル環境（`direnv` に似ているが、新しいシェルインスタンスを使用してよりクリーンな隔離を提供）
- [zero](https://github.com/arlimus/zero.zsh) - ゼロはプラグインおよびテーマの両方です。インストール方法については GitHub ページを参照してください。`git` および `hg` のステータスデコレーターを含みます
- [zeza](https://github.com/duggum/zeza) - [eza](https://github.com/eza-community/eza) を管理・カスタマイズするツール。非常にカラフルな `ls` の代替品です
- [zflai](https://github.com/zdharma-continuum/zflai) - ZSH 用の高速ログフレームワーク
- [zfzf](https://github.com/b0o/zfzf) - ZSH 用の [fzf](https://github.com/junegunn/fzf) ファイル選択ツールで、ディレクトリ階層を迅速にナビゲートできます
- [zgen-compinit-tweak](https://github.com/seletskiy/zsh-zgen-compinit-tweak) - すべてのロードが で完了後に が1回だけ実行されるようにします `compinit` [zgen](https://github.com/tarjoilija/zgen)
- [zgenom-ext-eval](https://github.com/jandamm/zgenom-ext-eval/) - [zgenom](https://github.com/jandamm/zgenom) 用のインラインプラグイン作成拡張
- [zhooks](https://github.com/agkozak/zhooks) - ZSH ホック配列の内容や定義されたホック関数のコードを表示します。デバッグに便利です
- [zi-rbenv](https://github.com/z-shell/zi-rbenv) - `rbenv` を使用する場合、非常に速く読み込みされます（[zi](https://github.com/z-shell/zi/) を使用時）
- [zimfw-extras](https://github.com/PatTheMav/zimfw-extras) - [zimfw](https://github.com/zimfw/zimfw) 用のカスタム追加機能。zimfw プラグインにパッケージされています
- [zinfo_line](https://github.com/kmhjs/zinfo_line) - ZSH テーマにより多くの情報を提供します
- [zinit-annex-bin-gem-node](https://github.com/zdharma-continuum/zinit-annex-bin-gem-node) - [zinit](https://github.com/zdharma-continuum/zinit) 拡張機能で、`$PATH` を変更せずにバイナリを公開し、Ruby ゲームやNodeモジュールをインストールし、それらのバイナリを簡単に公開し、関連するプラグインまたはスニペットが更新されたときにゲームとモジュールを更新します
- [zinit-annex-default-ice](https://github.com/zdharma-continuum/zinit-annex-default-ice) - ユーザーが複数の zinit コマンドに対してアクティブな ices を定義できるようにします
- [zinit-annex-man](https://github.com/zdharma-continuum/zinit-annex-man) - すべてのプラグインおよびスニペットの man ページを生成する [Zinit](https://github.com/zdharma-continuum/zinit) 拡張機能
- [zinit-annex-meta-plugins](https://github.com/zdharma-continuum/zinit-annex-meta-plugins) - 1つのラベル（[zinit](https://github.com/zdharma-continuum/zinit) だけ）で、複数のプラグインをインストールできます
- [zinit-annex-patch-dl](https://github.com/zdharma-continuum/zinit-annex-patch-dl) - [zinit](https://github.com/zdharma-continuum/zinit) 拡張機能で、提供された `dl` および `patch` zinit ices を使ってファイルをダウンロードし、パッチを適用します
- [zinit-annex-readurl](https://github.com/zdharma-continuum/zinit-annex-readurl) - ウェブページにURLがホストされているファイルの最新バージョンを自動的にダウンロードする関数を追加します
- [zinit-annex-rust](https://github.com/zdharma-continuum/zinit-annex-rust) - プラグインディレクトリ内に Rust および cargo パッケージをインストールする [zinit](https://github.com/zdharma-continuum/zinit) 拡張機能
- [zinit-annex-submods](https://github.com/z-shell/z-a-submods) - プラグインまたはスニペット内の追加サブモジュールをインストールおよび管理できる [zinit](https://github.com/zdharma-continuum/zinit) 拡張機能
- [zinit-annex-test](https://github.com/NorthIsMirror/z-a-test) - プラグインまたはスニペットのインストールおよび更新後にテスト（例：make test）を実行する [zinit](https://github.com/zdharma-continuum/zinit) 拡張機能
- [zinit-annex-unscope](https://github.com/zdharma-continuum/zinit-annex-unscope) - GitHub API を使用して、ユーザー名を指定せずに [zinit](https://github.com/zdharma-continuum/zinit) のプラグインをインストールできるようにします
- [zinit-console](https://github.com/z-shell/zinit-console) - A セミグラフィカル（curses）コンソール for the [zinit](https://github.com/zdharma-continuum/zinit) プラグインマネージャー。
- [zinsults](https://github.com/ahmubashshir/zinsults) - コマンドが失敗した場合に、侮辱的なメッセージを表示します.
- [zjump](https://github.com/qoomon/zjump) - ZSHのディレクトリナビゲーションを簡素化；既に訪問したディレクトリ、親ディレクトリ、またはサブフォルダにジャンプします.
- [zledit](https://github.com/Piotr1215/zledit) - ZSHコマンドライン上の任意のトークンにファジーでジャンプする。オーバーレイヒント、プレビューパネル、および場所に即した編集を提供。 [fzf](https://github.com/junegunn/fzf) が必要です.
- [zlitefetch](https://github.com/ippee/zlitefetch) - 軽量なシステム情報プラグイン.
- [zload](https://github.com/mollifier/zload) - ZSH関数のホットリロード。開発を迅速に可能にします.
- [zlong_alert](https://github.com/kevinywlui/zlong_alert.zsh) - `notify-send` を使用し、長時間（デフォルト：15秒）かかるコマンドが完了したときにベルを鳴らして知らせます.
- [zman](https://github.com/mattmc3/zman) - [fzf](https://github.com/junegunn/fzf) を使ってZSHマニュアルを迅速に閲覧できます.
- [znotify](https://github.com/rudeigerc/znotify) - 他のサービスに通知を送るためのシンプルなプラグイン.
- [znvm](https://github.com/Ajnasz/znvm) - ZSH 用の [Node.js](https://nodejs.org) バージョンマネージャーで、[nvm.sh](https://github.com/nvm-sh/nvm) に類似ですが速い
- [zoc](https://github.com/TomerG2/zoc) - OpenShift `oc` ログインとトークンの再新を高速化します.
- [zoxide](https://github.com/ajeetdsouza/zoxide) - `cd` に似た高速な代替品で、あなたの習慣を学習します.
- [zplug-blame](https://github.com/jkcdarunday/zplug-blame) - 各プラグインの読み込みにかかった時間を表示する [zplug](https://github.com/zplug/zplug) 用の特別なプラグイン.
- [zpy](https://github.com/AndydeCleyre/zpy) - Python環境、依存関係、および隔離されたアプリのインストールを管理。ZSHフロントエンドで [uv](https://github.com/astral-sh/uv) または [pip-tools](https://github.com/jazzband/pip-tools) を使用します.
- [zredis-cmd](https://github.com/z-shell/zredis-cmd) - [zredis](https://github.com/zdharma-continuum/zredis) プラグインが行う変数共有を利用して、リモートコマンド実行を実現します.
- [zredis](https://github.com/zdharma-continuum/zredis) - [Redis](https://redis.io/) データベースサポートを追加。 `database_key` <-> `shell_variable` のバインディングを提供。すべてのデータ型をサポートします.
- [zservice-py3http](https://github.com/z-shell/zservice-py3http) - 標準ライブラリのPython 3のhttpサーバーから指定されたディレクトリを提供します.
- [zsh-dev-navigator](https://github.com/dvigo/zsh-dev-navigator) - 単一コマンドで開発ディレクトリに迅速に移動できる、極めてシンプルなZSHプラグインです.
- [zsh-expand](https://github.com/MenkeTechnologies/zsh-expand) - スペースキーで通常のアライアス、グローバルアライアス、誤ったスペルやフレーズを展開。標準的な展開（グロブ、コマンド/プロセス置換、 `=command expansion`、履歴展開、 `$parameters`）もデフォルトで展開されますが、無効にできるようにしています.
- [zsh-hookie-projects](https://github.com/aemonge/zsh-hookie-projects) - 言語に依存しないプロジェクト検出。スマートなホック、PowerLevel10k統合、知能的なパス短縮。100以上のプロジェクトタイプを自動検出。カスタマイズ可能なon_project/off_projectホックを提供。スマート `cd` コマンドでプロジェクトルートへ移動し、美しい `hookie_dir` セグメントがパスを短縮（例： `~/projects/my-app` → `~/p/my-app`）します。多言語開発者向けに、プロジェクト認識を備えたシールドの動作を実現します.
- [zsh-in-docker](https://github.com/deluan/zsh-in-docker) - ZSH + [oh-my-zsh](https://ohmyz.sh/) のインストールを開発コンテナに自動化。Alpine、Ubuntu、Debian、CentOSまたはAmazon Linuxで動作します.
- [zsh-llm-assist](https://github.com/championswimmer/zsh-llm-assist) - Gemini CLI、Codex、Claude CodeまたはOpenCodeを使用して、英語の自然な表現からシェルコマンドの提案、およびシェルコマンドから自然な表現への説明を提供します.
- [zsh-make-completion](https://github.com/pksublime/zsh-make-completion) - zsh用の `make` タブ補完を正しく実装。 `make -qp` を使ってマケファイルデータベースを完全に展開し、 `$(eval $(call ...))` で生成されたターゲットを含めます。結果はディレクトリごとにキャッシュされ、Makefileが変更されたら自動的に無効になります.
- [zsh-not-vim](https://github.com/redxtech/zsh-not-vim) - ユーザーが `vim` に入っていないことを忘れていたことに自動的にユーザーを恥じさせる関数を提供します.
- [zsh-pkg-update-nag](https://github.com/madisonrickert/zsh-pkg-update-nag) - 新しいシェル開始時（4時間ごとに1回まで）に、Homebrewのフォーマー/カスク、 `npm -g`、 `uv tool`、RubyGemsのグローバルパッケージのアップデートをチェックし、すべてを1つの `Y/n/s` 確認でアップグレードを提案します.
- [zsh-select](https://github.com/z-shell/zsh-select) - 選択リストを表示します。これは `selecta` に似ていますが、表示にはcursesライブラリを使用しており、 [fzf](https://github.com/junegunn/fzf) と比較すると、主な違いは近似マッチングによるもので、ファジーマッチングではありません.
- [zsh-vi-man](https://github.com/TunaCuma/zsh-vi-man) - zsh viモード用のスマートmanページ検索。コマンドまたはオプションの上に `Shift-K` を押すと、サブコマンド、オプションジャンプ、複合オプション、パイプサポートをスマートに検出しながら、そのmanページを開きます.
- [zsh-watch](https://github.com/Thearas/zsh-watch) - alias と補完をサポートするシンプルな `watch`
- [zsh-z (agkozak)](https://github.com/agkozak/zsh-z) - 頻繁に訪れたディレクトリに迅速にジャンプします。 `z.sh` のネイティブZSH版（ `awk`、 `sed`、 `sort`、 `date` を使用せず）です.
- [zsh-z (ptavares)](https://github.com/ptavares/zsh-z) - [z](https://github.com/rupa/z.git) をインストールおよびロードします.
- [zshange_directory_recent](https://github.com/Kjeldgaard/zshange_directory_recent) - 最近のディレクトリに移動します。[fzf]( https://github.com/junegunn/fzf) が必要です.
- [zshcp](https://github.com/michaelsousajr/zshcp) - ZSH用の軽量で直感的なクリップボード管理プラグイン。コマンドラインワークフローを簡単にコピー・ペースト操作で強化します.
- [zshmarks](https://github.com/jocelynmallon/zshmarks) - Bashmarks（Todd Werthによる）のシンプルなコマンドラインブックマークプラグインを [oh-my-zsh](https://ohmyz.sh) に移植したものです.
- [zshrc-sync](https://github.com/Skylor-Tang/zshrc-sync) - `.zshrc` の変更を検出し、 `zsh` が終了したときにGitHubにプッシュします.
- [zshrc](https://github.com/freak2geek/zshrc) - プロジェクトスコープからローカル `.zshrc` ファイルをロードします.
- [zshrpg](https://github.com/aliervo/zshrpg) - [rpg-cli](https://github.com/facundoolano/rpg-cli/) をZSHと完全に統合するためのラッパーです.
- [zsnapac](https://github.com/johnramsden/zsh-zsnapac) - アーキタイプLinuxでZFSの前後アップグレード時のスナップショットを取るためのプラグインです.
- [zsnapshot](https://github.com/zdharma-continuum/zsnapshot) - 現在のZSH状態をファイルにダンプし、後でそのスナップショットファイルをソースで復元できるようにするコマンドを追加します.
- [ztouch](https://github.com/mjrafferty/ztouch) - macOSのタッチバーに、最近の履歴コマンド、ディレクトリスタック、モード間のサイクル、ユーザーがマッピングできるコマンドの制御を追加します.
- [ztrace](https://github.com/zdharma-continuum/ztrace) - コマンドの出力をキャッチし、その出力を再利用し、履歴コンテンツと結合できるようにします。
- [zui](https://github.com/zdharma-continuum/zui) - ZSHユーザーインターフェースライブラリ – CGI+DHTMLのような高速TUIアプリケーション開発がZSHで可能
- [zypper-short](https://github.com/justanotherinternetguy/zypper-short) - OpenSuse Tumbleweedのパッケージマネージャー向けプラグイン、`zypper`。

## Completions

これらのプラグインは、追加の機能やエイリアスを加えずにタブ補完を追加します

- [1password-op](https://github.com/unixorn/1password-op.plugin.zsh) - 1Passwordの[op](https://developer.1password.com/docs/cli/get-started/)コマンドラインツールの自動補完を読み込む
- [aider](https://github.com/hmgle/aider-zsh-complete) - [aider](https://aider.chat/)のタブ補完
- [aircrack](https://github.com/Doc0x1/Aircrack-Zsh-Completions) - `airbase-ng`、`aircrack-ng`、`airdecap-ng`、`airdecloak-ng`、`aireplay-ng`、`airmon-ng`、`airodump-ng`、`airolib-ng`、`airserv-ng`、`airtun-ng`、`airventriloquist-ng`の補完を追加
- [alembic](https://github.com/datumbrain/oh-my-zsh-alembic) - SQLAlchemyのデータベースマイグレーションツール[Alembic](https://alembic.sqlalchemy.org/)の補完を追加。ワークフローの高速化を支援するヘルパー関数、コマンドエイリアス、ステータス概要関数を含む
- [aliyun](https://github.com/thuandt/zsh-aliyun) - [Aliyun CLI](https://github.com/aliyun/aliyun-cli)の補完を追加
- [ansible-server](https://github.com/viasite-ansible/zsh-ansible-server) - [viasite-ansible/ansible-server](https://github.com/viasite-ansible/ansible-server)の補完
- [antibody](https://github.com/sinetoami/antibody-completion) - このプラグインは[Antibody](https://github.com/getantibody/antibody)プラグインマネージャーの補完を提供
- [appspec](https://github.com/perlpunk/App-AppSpec-p5) - YAML仕様からBashおよびZSHの補完を生成
- [argc-completions](https://github.com/sigoden/argc-completions) - [argc](https://github.com/sigoden/argc)および[jq](https://github.com/stedolan/jq)を使用してZSHのタブ補完を追加
- [atuin](https://github.com/marcelohmdias/zsh-atuin) - [Atuin](https://github.com/atuinsh/atuin)シェル履歴システムのタブ補完
- [audogombleed.sh](https://github.com/i-love-coffee-i-love-tea/audogombleed.sh) - 宣言的な構文を使って補完ファイルを生成するのを簡単にする。コードを書かずに、迅速に実行可能。
- [autopkg-zsh-completion](https://github.com/fuzzylogiq/autopkg-zsh-completion) - autopkgの補完
- [aws_manager completions](https://github.com/EslamElHusseiny/aws_manager_plugin) - `aws_manager`CLIの補完を追加
- [aws-completions](https://github.com/eastokes/aws-plugin-zsh) - `awscli`でAWSのプロファイル/リージョンを管理し、プロンプトに表示するための補完サポートを追加
- [bash-completions-fallback](https://github.com/3v1n0/zsh-bash-completions-fallback) - native ZSHの補完がなければ、`bash`コマンドの補完をサポート
- [batect](https://github.com/batect/batect-zsh-completion/) - [batect](https://batect.dev/)ビルドシステムのタブ補完を追加
- [berkshelf-completions](https://github.com/berkshelf/berkshelf-zsh-plugin) - berkshelfのタブ補完を追加
- [better-npm-completion](https://github.com/lukechilds/zsh-better-npm-completion) - `npm`のより良いタブ補完
- [bio](https://github.com/yamaton/zsh-completions-bio/) - バイオインフォマティクスツールの補完
- [bitbake](https://github.com/antznin/zsh-bitbake) - [bitbake](https://git.openembedded.org/bitbake)の補完
- [bosh (krujos)](https://github.com/krujos/bosh-zsh-autocompletion) - [BOSH](https://github.com/cloudfoundry/bosh)の自動補完を追加
- [bosh (thomasmitchell)](https://github.com/thomasmitchell/bosh-complete) - [BOSH](https://github.com/cloudfoundry/bosh)のタブ補完
- [brew-completions](https://github.com/z-shell/brew-completions) - ZSHおよびの下でを制御する [Homebrew Shell Completion](https://docs.brew.sh/Shell-Completion) [ZI](https://github.com/z-shell/zi/)
- [brew-services](https://github.com/vasyharan/zsh-brew-services) - [homebrew](https://brew.sh)サービス向けの補完プラグイン
- [buidler](https://github.com/gonzalobellino/buidler-zsh) - NomicLabs Buidlerツールの補完および便利なエイリアスを追加
- [bw](https://github.com/CupricReki/zsh-bw-completion) - [Bitwarden](https://bitwarden.com/)の補完を追加
- [cabal (d12frosted)](https://github.com/d12frosted/cabal.plugin.zsh) - cabalの自動補完を追加
- [cabal (ehamberg)](https://github.com/ehamberg/zsh-cabal-completion) - cabalのタブ補完を追加
- [carapace-bin](https://github.com/rsteube/carapace-bin) - マルチシェル・マルチコマンド向けの引数補完器
- [cargo](https://github.com/MenkeTechnologies/zsh-cargo-completion) - オリジナルのoh-my-zsh cargo補完のすべての機能を提供し、`cargo search`を介して`cargo add`内のリモートcratesに対応
- [carthage](https://github.com/squarefrog/zsh-carthage) - [Carthage](https://github.com/Carthage/Carthage)と利用できる補完およびエイリアスを提供
- [cf-zsh-autocomplete](https://github.com/norman-abramovitz/cf-zsh-autocomplete-plugin) - すべての[Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/)コマンドの自動補完を追加
- [chezmoi](https://github.com/mass8326/zsh-chezmoi) - [chezmoi](https://www.chezmoi.io/)の補完およびエイリアスを追加。あなたが`git`エイリアスを持っているかどうかを検出し、それに応じて`chezmoi`エイリアスを生成する。
- [claude-code-zsh-completion](https://github.com/1160054/claude-code-zsh-completion) - AnthropicのClaude Code CLIの補完を追加。セッション、MCPサーバー、エージェント、モデル、プラグインは、固定リストではなく、あなたの設定から補完され、`--resume`は各セッションに最初のプロンプトをラベル付け。120以上の言語に翻訳。
- [claudecode-completion](https://github.com/wbingli/zsh-claudecode-completion) - [Claude Code CLI](https://github.com/anthropics/claude-code)の最小限かつ常に最新のzsh補完
- [click-completion](https://github.com/click-contrib/click-completion) - [Click](http://click.pocoo.org/)の自動補完サポートを追加。タブ補完中にオプションやコマンドのヘルプを表示。
- [cod](https://github.com/dim-an/cod) - `bash`/`fish`/`zsh`向けの補完デモン。`--help`で何かを実行すると、即座に補完関数を生成。
- [codeception](https://github.com/shengyou/codeception-zsh-plugin) - Codeceptionテストフレームワークのコマンド補完を追加
- [codex](https://github.com/pressdarling/codex-zsh-plugin) - OpenAIの[codex](https://github.com/openai/codex)ツール向けのVibe-codedタブ補完。バックグラウンドで補完を生成し、シェル起動を遅延させない。macOSでの使い勝手を向上させる機能を含む。
- [comonicon](https://github.com/Roger-luo/ComoniconZSHCompletion.jl) - [comonicon](https://github.com/Roger-luo/Comonicon.jl) 用のタブ補完機能
- [complete-lastf](https://github.com/chougousui/complete-lastf) - 最近変更されたファイルまたはディレクトリを選択できるタブ補完を追加
- [complete-mac](https://github.com/vitkabele/complete-mac) - macOS `ioreg`, `lsmp`, `scselect`, `system_profiler` および `tmutil` コマンドに補完を追加します
- [complete-ng](https://github.com/joknarf/complete-ng) - ZSH の複数選択出力をインタラクティブな選択メニューに置き換え、メニュー内でディレクトリをブラウズし、メニューからファイルを直接表示・編集
- [completion-sync](https://github.com/BronzeDeer/zsh-completion-sync) - 動的に `FPATH` または `XDG_DATA_DIRS` に追加された補完を自動的に読み込み
- [completions (clarketm)](https://github.com/clarketm/zsh-completions) - これには zsh-users[completions](https://github.com/zsh-users/zsh-completions), zchee の [completions](https://github.com/zchee/zsh-completions), nilsonholger の [osx-zsh-completions](https://github.com/nilsonholger/osx-zsh-completions) およびその他のカスタム補完が含まれる
- [completions (northismirror)](https://github.com/NorthIsMirror/zsh-completions) - ZSH 用の追加補完
- [completions (zchee)](https://github.com/zchee/zsh-completions) - もう一つのタブ補完コレクション
- [completions (zsh-users)](https://github.com/zsh-users/zsh-completions) - ZSH 用の追加補完コレクション
- [conda](https://github.com/conda-incubator/conda-zsh-completion) - [conda](http://conda.pydata.org/) 用の ZSH タブ補完
- [copilot](https://github.com/scaryrawr/copilot.zsh) - [GitHub Copilot CLI](https://github.com/features/copilot/cli/) 用の補完を追加
- [cpan](https://github.com/MenkeTechnologies/zsh-cpan-completion) - `cpan install word<tab>` および `cpanm install <tab>` にリモート CPAN パッケージ名を補完
- [cross-compiler](https://github.com/Freed-Wu/zsh-completions-for-cross-compilers) - クロスコンパイルでは、x86_64-w64-mingw32-gcc、x86_64-linux-android32-clang、arm-none-eabi-gcc など多くのツールが存在する。このプラグインはそれらに ZSH 補完を提供
- [ctop](https://github.com/gantsign/zsh-plugins/tree/master/ctop) - [ctop](https://github.com/bcicen/ctop) 用のタブ補完機能
- [dagger](https://github.com/jygastaud/dagger-oh-my-zsh) - dagger 用の補完
- [dbic](https://github.com/lejeunerenard/dbic-migration-env) - DBIx::Class::Migration のスクリプトおよび Dancer 用の環境変数を自動的に設定
- [ddc](https://github.com/Shougo/ddc-zsh) - [ddc](https://github.com/Shougo/ddc.vim) 用のタブ補完を追加
- [deno](https://github.com/marcelohmdias/zsh-deno) - [deno](https://deno.com/) 用のタブ補完機能
- [deoplete](https://github.com/zchee/deoplete-zsh) - [deoplete.nvim](https://github.com/Shougo/deoplete.nvim) 用の ZSH 補完
- [docker (chr-fritz)](https://github.com/chr-fritz/docker-completion.zshplugin) - **Docker for Mac** から直接 `docker` の ZSH タブ補完を読み込み
- [docker (felixr)](https://github.com/felixr/docker-zsh-completion) - `docker` 用のタブ補完を追加
- [docker (greymd)](https://github.com/greymd/docker-zsh-completion) - `docker` および `docker-compose` 用のタブ補完を追加
- [dotnet](https://github.com/MenkeTechnologies/zsh-dotnet-completion) - Dotnet 用のタブ補完
- [dropbox](https://github.com/zpm-zsh/dropbox) - Zsh 用の dropbox プラグインで `dropbox-cli` および `dropbox-uploader` コマンドを提供
- [drush_zsh_completion](https://github.com/webflo/drush_zsh_completion) - Drush 用の ZSH アウトプット補完
- [duell](https://github.com/jcxavier/oh-my-zsh-duell) - [duell](https://github.com/gameduell/duell) 用の ZSH プラグイン
- [efibootmgr](https://github.com/wehlando/efibootmgr-zsh-completion) - `efibootmgr` 用のタブ補完機能
- [elm](https://github.com/kraklin/elm.plugin.zsh) - [elm](https://elm-lang.org/) 用のタブ補完
- [etcdctl](https://github.com/sheax0r/etcdctl-zsh) - etcdctl のタブ補完を追加
- [expressvpn](https://github.com/tk7r/zsh-expressvpn) - [expressVPN](https://www.expressvpn.com/support/vpn-setup/app-for-linux/) クライアント用のタブ補完を追加
- [extract (le0me55i)](https://github.com/le0me55i/zsh-extract) - archive ファイルを引数に受け取り、そのアーカイブファイルを抽出する extract 関数を定義し、多くのアーカイブファイル形式をサポート
- [extract (thetic)](https://github.com/thetic/extract) - oh-my-zsh extract プラグインのフォーク
- [fancy-completions](https://github.com/z-shell/zsh-fancy-completions) - さまざまな補完ツール、ライブラリ、統合を提供
- [flatpak](https://github.com/bilelmoussaoui/flatpak-zsh-completion) - [Flatpak](https://docs.flatpak.org/en/latest/using-flatpak.html) 用のタブ補完機能
- [fluxcd](https://github.com/l-umaca/omz-fluxcd-plugin) - [FluxCD command line](https://fluxcd.io/flux/cmd/) ツールのタブ補完を追加、かつ最も一般的な flux コマンドの一部にアライアスを追加
- [fly-zsh-autocomplete](https://github.com/Sbodiu-pivotal/fly-zsh-autocomplete-plugin) - すべての [Concourse CLI](https://concourse-ci.org/fly.html) コマンドに対する自動補完オプションを追加します。
- [fnm](https://github.com/zap-zsh/fnm) - Fast Node Manager [fnm](https://github.com/Schniz/fnm) 用のタブ補完を追加
- [fvm](https://github.com/olrtg/zsh-fvm) - [Flutter Version Manager (FVM)](https://fvm.app/) 用のタブ補完を追加
- [fzf-gcloud](https://github.com/mbhynes/fzf-gcloud) - Google Cloud SDK `gcloud` CLI コマンドをすべてナビゲート・プレビューするためのファジー補完
- [fzf-rg](https://github.com/ppcamp/zsh-fzf-rg) - [fzf](https://github.com/junegunn/fzf), [bat](https://github.com/sharkdp/bat) および [ripgrep](https://github.com/BurntSushi/ripgrep) を使ってターミナルに機能を追加
- [fzf-tab-completion](https://github.com/lincheney/fzf-tab-completion) - ZSH向けのタブ補完を追加、`bash`およびGNU Readlineを使用するアプリケーションにも対応。
- [fzf-zsh-completions](https://github.com/chitoku-k/fzf-zsh-completions) - トリガーシーケンス（デフォルトは）により発動可能な、および向けのファジー補完。 [fzf](https://github.com/junegunn/fzf) [ZSH](https://www.zsh.org/) `**`
- [fzshell](https://github.com/mnowotnik/fzshell) - ユーザーが事前に定義したソースからファジー補完を取得。
- [gardenctl](https://github.com/holgerkoser/gardenctl) - [Gardener](https://github.com/gardener/gardenctl-v2)コマンドラインインターフェースへのタブ補完、および一般的なgardenctlコマンドの一部のエイリアス。
- [gcloud (littleq0903)](https://github.com/littleq0903/gcloud-zsh-completion) - Google Cloud SDK向けの補完を追加。
- [gcloud (wintermi)](https://github.com/wintermi/zsh-gcloud) - Google Cloud Command Line Interface（[gcloud](https://cloud.google.com/cli) CLI）の補完を追加。
- [gem](https://github.com/MenkeTechnologies/zsh-gem-completion) - OMZ gem補完のすべての機能を提供するが、同時に`gem install <tab>`が`gem search`の出力からリモートgemを補完できるようにする。
- [gentoo](https://github.com/gentoo/zsh-completion) - Gentooツールの多くがアップストリームに補完スクリプトを提供していないため、ZSH補完を提供。
- [git-annex](https://github.com/Schnouki/git-annex-zsh-completion) - ほとんどのgit-annexコマンドへのタブ補完を提供。
- [git-flow](https://github.com/bobthecow/git-flow-completion) - [git-flow](http://github.com/nvie/gitflow)向けのZSH補完を提供。
- [git-fzf](https://github.com/alexiszamanidis/zsh-git-fzf) - `git`操作を簡便かつ効率的に実行するZSHプラグイン。補完機能を含み、[fzf](https://github.com/junegunn/fzf)のサポートも提供。
- [git-profiles](https://github.com/baliestri/git-profiles.plugin.zsh) - 1つの`.gitconfig`ファイル内で複数のgitユーザーを管理。
- [git-recent-branches](https://github.com/Zacharyjlo/git-recent-branches) - 最近チェックアウトされたブランチを確認・表示・チェックアウトする際に便利に。
- [git-user-switch](https://github.com/dipodidae/zsh-plugin-git-user-switch) - 複数のGitHubユーザーアカウントの切り替えを可能に。SSH設定およびGitHub CLI（gh）認証を自動的に更新。
- [github-cli](https://github.com/sudosubin/zsh-github-cli) - GitHub CLI向けのタブ補完を提供。
- [gitlab-runner](https://github.com/pseyfert/zsh-gitlab-runner-completion) - gitlab-ci-multi-runner向けのZSH補完。
- [gradle-completion (gradle)](https://github.com/gradle/gradle-completion) - gradle向けのBashおよびZSH補完。
- [gradle-completion (ninrod)](https://github.com/ninrod/gradle-zsh-completion) - gradle向けのZSH補完。
- [grid5000](https://github.com/pmorillon/grid5000-zsh-plugin) - Grid 5000プラグイン - テーマおよび自動補完を追加。
- [gstreamer](https://github.com/CraigCarey/gstreamer-tab) - [GStreamer](https://gstreamer.freedesktop.org/)向けのタブ補完。
- [gulp (akoenig)](https://github.com/akoenig/gulp.plugin.zsh) - Z-Shell（ZSH）でgulp.jsタスクの自動補完を提供。
- [gulp (srijanshetty)](https://github.com/srijanshetty/gulp-autocompletion-zsh) - gulp向けの自動補完。
- [hashlink](https://github.com/tong/zsh.plugin.hashlink) - [https://hashlink.haxe.org/](https://hashlink.haxe.org/)向けの補完。
- [haskell](https://github.com/coot/zsh-haskell) - `cabal`、`ghc`および`ghc-pkgs`コマンドへの補完を追加。
- [haxelib](https://github.com/tong/zsh.plugin.haxelib) - haxelib向けの補完。
- [hledger](https://github.com/belegaps/omz-hledger-plugin) - 強力なダブルエントリ会計ツール[hledger](https://hledger.org/)向けのエイリアスおよび補完を提供。
- [inshellisense](https://github.com/microsoft/inshellisense) - シェル向けのIDEスタイルの自動補完を提供。これは、600以上のコマンドラインツールをサポートするターミナル本体のランタイムであり、inshellisenseはWindows、Linux、MacOSでの`bash`、`fish`、`zsh`、`pwsh`をサポート。
- [ipfs](https://github.com/hellounicorn/zsh-ipfs) - [Interplanetary File System](https://ipfs.tech)向けの補完。
- [jenv](https://github.com/cmuench/zsh-jenv) - [jEnv](https://github.com/jenv/jenv)向けのタブ補完。
- [joe](https://github.com/corvofeng/joe-completion) - [joe](https://github.com/karan/joe) gitignoreエディタへの補完を追加。
- [jtool-completion](https://github.com/beaugalbraith/jtool-completion) - jtool向けのZSH補完。
- [justfile](https://github.com/JBarberU/zsh-justfile) - [just](https://github.com/casey/just)向けのタブ補完を追加。
- [jx](https://github.com/haysclark/zsh-jx) - Jenkins-X CLI向けのタブ補完を追加。
- [kafka](https://github.com/Dabz/kafka-zsh-completions) - Apache [kafka](https://kafka.apache.org)向けの補完。
- [keybase](https://github.com/rbirnie/oh-my-zsh-keybase) - [keybase](https://book.keybase.io/docs/cli)向けの補完。
- [kind](https://github.com/TomerFi/zsh-kind)- [kind](https://kind.sigs.k8s.io/)向けのタブ補完をロード。
- [kitty](https://github.com/redxtech/zsh-kitty) - [kitty](https://sw.kovidgoyal.net/kitty/)ターミナルエミュレータ向けの補完。
- [kompose](https://github.com/gantsign/zsh-plugins/tree/master/kompose) - [Kompose](http://kompose.io/)向けのタブ補完を追加。
- [kubeadm](https://github.com/gantsign/zsh-plugins/tree/master/kubeadm) - [kubeadm](https://kubernetes.io/docs/reference/setup-tools/kubeadm/)向けのタブ補完を追加。
- [kubectl (chrishrb)](https://github.com/chrishrb/zsh-kubectl) - [kubectl](https://github.com/kubernetes/kubectl)の補完を自動的にロード。
- [kubectl-fzf](https://github.com/bonnefoa/kubectl-fzf) - 高速かつ強力な [fzf](https://github.com/junegunn/fzf)-パワーの自動補完機能を提供する `kubectl`.
- [kubectl-plugin](https://github.com/MartinSimango/kubectl-plugin_completion) - の補完スクリプトを生成し、プラグインのサブコマンドに対応した の自動補完機能を拡張する. `kubectl` `kubectl`
- [kustomize](https://github.com/ralgozino/oh-my-kustomize) - [kustomize](https://kustomize.io/)に対するタブ補完を追加する.
- [lazycomplete](https://github.com/rsteube/lazycomplete) - シェル補完スクリプトのラズリロード（遅延読み込み）を実現する.
- [lets-cli](https://github.com/lets-cli/lets-zsh-plugin) - [lets](https://github.com/lets-cli/lets) CLIタスクランナーの自動補完を追加する.
- [llm-cli-autocomplete-tool](https://github.com/duoyuncloud/zsh-llm-cli-autocomplete-tool) - 高度なAI搭載ZSHプラグイン。LoRAファインチューニング、ナビゲート可能なUI、および [Ollama](https://ollama.com)の統合を備える.
- [llm](https://github.com/eliyastein/llm-zsh-plugin) - [LLM CLI tool](https://llm.datasette.io/)に対するタブ補完を追加する.
- [ls-go](https://github.com/MohamedElashri/ls-go-zsh) - [ls-go](https://github.com/acarl005/ls-go)に便利なエイリアスをいくつか追加する.
- [mac](https://github.com/scriptingosx/mac-zsh-completions) - macOS用コマンドおよび第三者ツール向けの補完ファイル.
- [macos](https://github.com/danydodson/zsh-completions) - 選択されたOSXコマンドの補完。このリポジトリの主な目的は、品質の高い自動補完（例：条件付きフラグを意識した選択肢の提示や選択）および最新かつ機能が整った自動補完を提供することである.
- [mcfly](https://github.com/cantino/mcfly) - デフォルトのCtrl-Rシェル履歴検索を、作業ディレクトリや最近実行されたコマンドの文脈を考慮した知能型検索エンジンに置き換える。McFlyの提案は、小型ニューラルネットワークによりリアルタイムで優先順位付けされる.
- [mill](https://github.com/carlosedp/mill-zsh-completions) - Scalaの [Mill](http://mill-build.com/)ビルドツールに対するタブ補完.
- [miniconda](https://github.com/cmuench/zsh-miniconda) - [miniconda](https://docs.conda.io/en/latest/miniconda.html)に対するタブ補完を追加する.
- [misc-completions](https://github.com/syohex/zsh-misc-completions) - UNIXおよびPerlコマンドに対する補完をさらに追加する.
- [mooseX-App](https://github.com/perlpunk/MooseX-App-Plugin-ZshCompletion) - Perlモジュール `MooseX::App`の補完生成ツール.
- [more-completions](https://github.com/MenkeTechnologies/zsh-more-completions) - 13500のZSH補完！多くは--help出力およびmanページ出力のパースを実行したPythonスクリプトによって生成されたため、品質は様々。アーキテクチャプレフィックス補完は `architecture_src`ディレクトリに含まれる.
- [msfvenom](https://github.com/Green-m/msfvenom-zsh-completion) - Metasploitに対するタブ補完.
- [mx-honey](https://github.com/mukel/mx-honey) - Graalプロジェクト開発用のコマンドラインツール [mx](https://github.com/graalvm/mx)の補完を提供。通常のワークフローの発見を容易にし、便利なエイリアスを提供する. `build unittest benchmark ...`
- [myincr](https://github.com/gaojunbin/zsh-myincr/) - 自動提案とインクリメントにより、貼り付けを高速化する.
- [nestcli](https://github.com/behradkhodayar/nestcli-zsh) - [Nest.js CLI](https://github.com/nestjs/nest-cli)に対するタブ補完を提供する.
- [newman](https://github.com/selop/newman-autocomplete) - [Newman CLI](https://github.com/postmanlabs/newman)の自動補完を提供する.
- [ngrok](https://github.com/bostonaholic/ngrok.plugin.zsh) - [ngrok](https://ngrok.com)およびその補完をシェルに自動読み込みする.
- [nix](https://github.com/spwhitt/nix-zsh-completions) - [nix](https://nixos.org/nix/), [NixOS](https://nixos.org/), および [NixOps](https://nixos.org/nixops/)向けの補完ファイル.
- [node-ace](https://github.com/romch007/node-ace-zsh-completion) - `node ace`向けの補完を提供する.
- [nova](https://github.com/rbirnie/oh-my-zsh-nova) - novaに対する自動補完を提供する.
- [npm-run](https://github.com/akoenig/npm-run.plugin.zsh) - `npm run`に対する自動補完をサポートする.
- [npm-scripts-autocomplete](https://github.com/grigorii-zander/zsh-npm-scripts-autocomplete) - 現在のディレクトリ内の `package.json`に含まれるスクリプトから自動補完の提案を表示する。 `npm`および `yarn`と互換性がある.
- [nx](https://github.com/jscutlery/nx-completion) - [nx](https://nx.dev)向けの補完。 [`jq`](https://stedolan.github.io/jq/)が必要.
- [oh-my-update](https://github.com/utox39/oh-my-update) - [oh-my-zsh](https://ohmyz.sh/)内のプラグインを更新する.
- [okta](https://github.com/sirhc/okta.plugin.zsh) - [`aws-okta`](https://github.com/segmentio/aws-okta)および [okta-awscli](https://github.com/jmhale/okta-awscli)コマンドに対するコマンドライン補完を提供する.
- [ollama](https://github.com/Katrovsky/zsh-ollama-completion) - Ollama AIモデル管理用のタブコマンド補完を提供する.
- [op](https://github.com/sirhc/op.plugin.zsh) - [1Password](https://1password.com/)の [op](https://1password.com/downloads/command-line/)コマンドラインツールに対するタブ補完を追加する.
- [openstack](https://github.com/florentinl/openstack-zsh-plugin) - [OpenStack](https://www.openstack.org/)の管理用の関数およびエイリアスを追加する.
- [osx-zsh-completions](https://github.com/nilsonholger/osx-zsh-completions) - macOS用の特定コマンド（例： `launchctl`）に対するタブ補完を追加する.
- [packer](https://github.com/wakeful/zsh-packer) - [packer](https://packer.io)に対するタブ補完を追加する.
- [pagerduty](https://github.com/jedelson-pagerduty/pagerduty-omz-plugin) - PagerDuty [cli]( https://github.com/martindstone/pagerduty-cli)の補完を追加する.
- [pandoc-completion](https://github.com/srijanshetty/zsh-pandoc-completion) - Pandoc補完プラグイン.
- [parallels](https://github.com/benclark/parallels-zsh-plugin) - Parallels Desktop向けの補完を追加する.
- [pass-zsh-completion](https://github.com/ninrod/pass-zsh-completion) - ZSH 用に [pass](https://www.passwordstore.org/) コマンドの補完を簡単に取得できるコンビニエンスリポジトリ。
- [pip-completion](https://github.com/srijanshetty/zsh-pip-completion) - pipの自動補完プラグイン。
- [pipenv (AlexGascon)](https://github.com/AlexGascon/pipenv-oh-my-zsh) - pipenv の最も一般的なコマンドに対するエイリアスを有効にします
- [pipenv (gangleri)](https://github.com/gangleri/pipenv) - `pipenv` に対する補完を提供します
- [pmy](https://github.com/relastle/pmy) - 一般用途のコンテキスト認識 ZSH 補完エンジン（[fzf](https://github.com/junegunn/fzf) によって駆動）
- [pnpm-completions](https://github.com/michakfromparis/zsh-pnpm-completions) - `pnpm` に対するタブ補完（`package.json` スクリプト補完、リアルタイム npm レジストリ検索、ワークスペースサポート、およびオプションのコマンドエイリアスを含む）
- [poetry](https://github.com/fourdim/zsh-poetry) - [poetry](https://python-poetry.org/) に対するタブ補完
- [prettier](https://github.com/sambergo/zsh-prettier-completion/) - [prettier](https://prettier.io/.) に対するタブ補完
- [pytest-fzf](https://github.com/jszczepaniak/zsh-pytest-fzf) - pytest テストを [fzf](https://github.com/junegunn/fzf) で選択し、ターミナルに挿入できるようにします
- [python-args-completion](https://github.com/mejistus/python-args-completion) - argparse モジュールで定義された Python スクリプトのコマンドライン引数に対する自動補完を提供します
- [python-module-completion](https://github.com/UshioA/zsh-python-module-completion) - python -m コマンドに対する知能のあるタブ補完（階層的なモジュールナビゲーションとスマートプロジェクト検出を含む）
- [quickjump](https://github.com/fikovnik/zsh-quickjump) - 最近のファイルとディレクトリに対する [skim](https://github.com/lotabout/skim) のタブ補完を [fasd](https://github.com/whjvenyl/fasd) で提供します
- [racket completion](https://github.com/racket/shell-completion) - [Racket](http://racket-lang.org) に対する補完を提供します
- [rake-completion](https://github.com/unixorn/rake-completion.zshplugin) - rakefile のターゲットに対する高速タブ補完を追加します
- [rancher](https://github.com/go/rancher-zsh-completion) - Rancher CLI に対する補完を追加します
- [rg](https://github.com/pressdarling/rg-zsh-plugin) - [ripgrep](https://github.com/BurntSushi/ripgrep)、すなわち驚くほど速いファイルおよびテキスト検索バイナリに対する補完を提供します
- [rhoas](https://github.com/craicoverflow/rhoas-zsh-plugin) - [rhoas](https://developers.redhat.com/products/red-hat-openshift-streams-for-apache-kafka/overview) に対する補完を追加します
- [rustup](https://github.com/pkulev/zsh-rustup-completion) - Rustup に対するタブ補完を提供します
- [s3cmd](https://github.com/FFKL/s3cmd-zsh-plugin) - [s3cmd](https://s3tools.org/s3cmd) に対するタブ補完を追加します
- [salesforce-cli](https://github.com/wadewegner/salesforce-cli-zsh-completion) - Salesforce CLI 用の ZSH コマンド補完。[jq](https://stedolan.github.io/jq/) が必要です
- [saml2aws](https://github.com/sirhc/saml2aws.plugin.zsh) - [saml2aws](https://github.com/Versent/saml2aws) に対する補完を追加します
- [sdkman (matthieusb)](https://github.com/matthieusb/zsh-sdkman) - [sdkman](https://sdkman.io/) に対するタブ補完を追加します
- [sdkman (yongxingzhao)](https://github.com/yongxingzhao/zsh-sdkman) - [sdkman](https://sdkman.io/) に対するタブ補完を追加します
- [sfdx-autocomplete](https://github.com/jayree/sfdx-autocomplete-plugin) - Salesforce [sfdx](https://developer.salesforce.com/tools/salesforcecli) 用の自動補完プラグイン
- [skate-actions](https://github.com/mjmccull0/skate-actions) - [skate](https://github.com/charmbracelet/skate) パーソナルキー値ストアに対するタブ補完
- [speedtest](https://github.com/Yash-Singh1/zsh-plugin-speedtest) - speedtest [cli](https://www.speedtest.net/insights/blog/introducing-speedtest-cli/) に対するタブ補完
- [spring-boot-plugin](https://github.com/linux-china/oh-my-zsh-spring-boot-plugin) - [spring-boot](http://projects.spring.io/spring-boot/) コマンドに対する自動補完を追加します
- [ssh (sunlei)](https://github.com/sunlei/zsh-ssh) - `ssh` に対するより良いホスト補完
- [ssh (zpm-zsh)](https://github.com/zpm-zsh/ssh) - `ssh` に対するホスト補完を追加します
- [ssh-agent (bobsoppe)](https://github.com/bobsoppe/zsh-ssh-agent) - `ssh-agent` を管理します
- [ssh-agent (hkupty)](https://github.com/hkupty/ssh-agent) - 自動的に `ssh-agent` を起動して、ご希望の認証情報を `ssh` 接続に設定および読み込みします
- [ssh-agent (twfksh)](https://github.com/twfksh/zsh-ssh-agent) - ZSH で SSH エージェントを管理するためのブloat なしのユーティリティプラグイン。このプラグインは、新しいターミナルセッションが開始された際に自動的に `ssh-agent` を開始および管理します。zsh-ssh-agent を実行した後、キーを `ssh-add` する必要は一度だけです。残りはプラグインが自動的に処理します
- [ssh-config-suggestions](https://github.com/yngc0der/zsh-ssh-config-suggestions)- から の補完を読み込みます `ssh` `~/.ssh/config`
- [supabase](https://github.com/Taimoor-Tariq/zsh-supabase) - [supabase cli](https://supabase.com/docs/guides/cli/getting-started) に対するタブ補完
- [symfony (Akollade)](https://github.com/Akollade/symfony.plugin.zsh) - [Symfony](https://symfony.com/) に対する補完を追加します。これには `bin/console` および `sf` コマンドを含みます
- [symfony-complete](https://github.com/voronkovich/symfony-complete.plugin.zsh) - [Symfony](https://symfony.com/doc/current/components/console.html) に基づく CLI アプリケーションのユニバーサル補完：`composer`、`php-cs-fix`、`bin/console`、`artisan`、`php-cs-fixer` など。これはサブコマンドおよび GNU スタイルオプション（`--help`）に対する自動補完をサポートします
- [tailscale (heroeslament)](https://github.com/HeroesLament/zsh-tailscale-plugin) - [tailscale](https://www.tailscale.com/) に対するタブ補完およびエイリアス
- [tailscale (hsrzq)](https://github.com/hsrzq/PluginForTailscale) - [tailscale](https://www.tailscale.com/) に対するタブ補完。macOS でのみ動作します
- [tailscale-ssh](https://github.com/Seraphin-/zsh-tailscale-ssh) - tailscale のステータスに基づいたホスト補完を提供します。マジックDNSのサフィックスが存在する場合、自動的に削除します
- [talosctl](https://github.com/RusMephist/talosctl-zsh-plugin) - [Talos Linux](https://www.talos.dev/v1.6/introduction/what-is-talos/) に対するタブ補完
- [task](https://github.com/targendaz2/taskfile) - [Task](https://taskfile.dev/) に対するタブ補完
- [taskbook](https://github.com/mastern2k3/taskbook-zsh-plugin) - taskbook のタスク番号に対する自動補完
- [terragrunt](https://github.com/jkavan/terragrunt-oh-my-zsh-plugin) - [Terragrunt](https://github.com/gruntwork-io/terragrunt) へのタブ補完機能を提供します。
- [test-kitchen](https://github.com/pelletiermaxime/test-kitchen-zsh-plugin) - [Test Kitchen](https://github.com/test-kitchen/test-kitchen) への補完を追加します。
- [tinygo](https://github.com/sago35/tinygo-autocmpl) - [tinygo](https://tinygo.org/) へのタブ補完を追加します。
- [tio](https://github.com/JBarberU/zsh-tio) - tio へのタブ補完を追加します。
- [tmux pane words](https://gist.github.com/blueyed/6856354) - あなたの [tmux](https://tmux.github.io) パネルから単語を補完するためのキーバインディングを提供します
- [tofu](https://github.com/marknefedov/oh-my-zsh-tofu) - `tofu` へのタブ補完を自動読み込みします。
- [tshark](https://github.com/Yoswell/zsh_tshark_autocomplete) - [TShark](https://tshark.dev/) へのタブ補完を追加します。これはディスプレイフィルタ（`-Y`）および抽出フィールド（`-e`）に対して深層、プロトコル認識、階層構造を理解した自動補完を提供します。従来のシェル補完は、平坦なプロトコル名や静的オプションを提案するのみですが、このツールは TShark フィールドの内部構造を理解しています。
- [tugboat](https://github.com/DimitriSteyaert/Zsh-tugboat) - [tugboat](https://github.com/petems/tugboat) コマンドへの自動補完を追加します。
- [umake](https://github.com/zlsun/umake) - Ubuntu umake へのタブ補完機能を提供します。
- [url-httplink](https://github.com/Valodim/zsh-_url-httplink) - ZSH の \_urls 補完を拡張し、HTML ページから URL を補完できるようにします。
- [uv](https://github.com/lipov3cz3k/zsh-uv) - [uv](https://github.com/astral-sh/uv) へのタブ補完機能を提供します。
- [vert.x](https://github.com/davidafsilva/vert.x-omz-plugin) - [vertx](https://vertx.io/) コマンドへの自動補完機能を提供します。
- [vorpal](https://github.com/VorpalBlade/vorpal-zsh-completions) - いくつかのアップストリームが死んでいるプロジェクトの補完を追加します。其中包括 [duperemove](https://github.com/markfasheh/duperemove), [optimus-manager](https://github.com/Askannz/optimus-manager) および [pacutils](https://github.com/andrewgregory/pacutils)。
- [web-open](https://github.com/AndrewHaluza/zsh-web-open) - ウェブページを開くためのエイリアスを追加します。Ubuntu 20 でのみ動作します。
- [web-search](https://github.com/GowayLee/zsh_web_search) - 指定された検索エンジンでデフォルトブラウザで検索を実行します。
- [wsl-notify](https://github.com/masonc15/wsl-notify-zsh) - コマンドが15秒以上かかる場合に [wsl-notify-send](https://github.com/stuartleeks/wsl-notify-send) を使用して通知します。Windows 用のみ。
- [xcode](https://github.com/keith/zsh-xcode-completions) - いくつかのXcode コマンドラインツールの補完 - `genstrings`, `nm`, `plutil`, `xcode-select`, `xcodebuild`, `xcrun`, `simctl`, `strings`, `swift-demangle`, `swift` および `lipo`。
- [yabai](https://github.com/Amar1729/yabai-zsh-completions) - macOS [yabai](https://github.com/koekeishiya/yabai/) タイル型ウィンドウマネージャーに補完を追加します
- [yarn-extra-completion](https://github.com/BuonOmo/yarn-extra-completion) - [lukechilds/zsh-better-npm-completion](https://github.com/lukechilds/zsh-better-npm-completion) にインスパイアされています。
- [yarn](https://github.com/g-plane/zsh-yarn-autocompletions) - `yarn add`, `yarn remove`, `yarn upgrade`, `yarn why` および `yarn run` への自動補完を追加します。
- [yt-dlp](https://github.com/clavelm/yt-dlp-omz-plugin) - [yt-dlp](https://github.com/yt-dlp/yt-dlp) へのタブ補完機能を提供します。
- [zenquotes](https://github.com/aminelch/zenquotes) - [zenquotes.io](https://zenquotes.io) からランダムな引用を表示します。
- [zoxide](https://github.com/jnooree/zoxide-zsh-completion) - [zoxide](https://github.com/ajeetdsouza/zoxide) へのタブ補完機能を提供します。
- [zpacman](https://github.com/Yttehs-HDX/zsh-zpacman/) - [zpacman](https://github.com/Yttehs-HDX/zpacman.git) へのタブ補完を追加します。

## Themes

- [021011](https://github.com/guesswhozzz/021011.zsh-theme) - 極めてシンプル。VS Code に1つの `git` マーカーを含みます。
- [0i0](https://github.com/0i0/0i0.zsh-theme) - ダークなターミナルウィンドウに最適化されており、nerdfont `git` ステータスデコレーションを使用します。
- [14degree](https://github.com/saims0n/14degree-zsh-theme/) - `git`, `virtualenv` および `rvm` ステータスデコレーションを含みます。
- [1999](https://github.com/DTan13/zsh1999) - パワーライン風のテーマ。`git` ステータスデコレーション、ネットワークおよびバッテリーのステータスを含みます。
- [7eth](https://github.com/chokri/zsh-theme) - 極めてシンプルなテーマで、`git` ステータスのデコレーターを含みます。
- [a](https://github.com/chammanganti/a-zsh-theme) - シンプルなテーマで、現在のディレクトリと `git` ステータスデコレーターを含みます。
- [abbr (theme)](https://github.com/PhilsLab/abbr-zsh-theme) - 現在のディレクトリパスの簡略版を表示し、Pythonの仮想環境、Rustバージョン、`git` ステータス、および最後のコマンドの終了コードを表示します。ダークな背景ではデフォルトで良好な表示ですが、色は簡単にカスタマイズ可能です。
- [abhiyan](https://github.com/abhiyandhakal/abhiyan.zsh/) - セグメント化されたプロンプト。`git` ブランチ、ステージ済みファイル数、ステージ未済ファイル数、未追跡ファイル数、ユーザー名、現在の作業ディレクトリ、および時間のデコレーターを含みます。Powerline互換フォントが必要です。
- [absolute](https://github.com/NelsonBrandao/absolute) - 非常にクリーンなテーマで、`git` ステータス、`node` バージョン、および最後のコマンドの終了コードのデコレーターを含みます。
- [abzt](https://github.com/stentibbing/abzt-zsh-theme) - 無駄な要素を一切含まないテーマで、`git` ステータスとディレクトリ情報のデコレーターを含みます。nerdfontが必要です。
- [acenoster](https://github.com/himdek/Acenoster-ZSH-Theme) - 多目的なテーマで、非常に詳細な `git` および `mercurial` のサポートを提供。また、AWS プロファイル名、仮想環境名（存在する場合）、バックグラウンドタスク数、現在のディレクトリ、かつ前コマンドの終了コード（非ゼロの場合）のデコレーターを含みます。
- [achab](https://github.com/niotna/antoinechab-theme) - 現在のフォルダパス、現在のユーザー、現在の `git` ブランチのデコレーターを含みます。デコレーターの色は簡単にカスタマイズ可能です。
- [adamdodev](https://github.com/adamdodev/adamdodev-zsh-theme) - `git` ステータス、AWS プロファイル名、Azure サービスプライマリー名、kubernetes コンテキスト、terraform ワークスペース、最後のコマンドの終了ステータス、および現在の作業ディレクトリのデコレーターを含みます。
- [adhde](https://github.com/Senderman/adhde-zsh-theme) - user@host、現在のディレクトリ、`git` ステータス、最後のコマンドのステータスおよび日時をデコレーターとして含みます。
- [adlee](https://github.com/adlee-was-taken/oh-my-zsh-osx/blob/master/adlee.zsh-theme) - macOS テーマ。Powerline 互換フォントが必要です。
- [adoz](https://github.com/unixorn/awesome-zsh-plugins/blob/a215557d4df2fb88f92924964c056cee4ae38373/daviosoo/adoz-zsh-theme) - 紫色と青のトーンに焦点を当てたミニマリズムテーマ。Adoz はシンプルで現代的なプロンプトを提供し、重要な情報を表示しつつ、スリムなデザインを維持します。環境変数を設定することで非常にカスタマイズ可能です。user@hostname、現在のディレクトリ、タイムスタンプ、`git` ステータスのデコレーターを含みます。
- [af-magic-dynamic](https://github.com/rslavin/af-magic-dynamic) - [af-magic](https://github.com/andyfleming/oh-my-zsh/blob/master/themes/af-magic.zsh-theme)の動的パス短縮を施した改良版。
- [afaq](https://github.com/afaq1337/afaq.zsh-theme) - ホスト名、ローカルIPアドレス、現在の作業ディレクトリ、現在時刻、`git`の状態、Pythonの仮想環境をデコレートした2行テーマ。
- [aflah-bhari](https://github.com/AflahB/aflah-bhari-zsh-theme) - oh-my-zshに含まれる[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)テーマの改良版。
- [aftermath](https://github.com/schanur/aftermath) - シェル内で実行した各コマンドの後に、良いサマリーを表示。
- [agitnoster](https://github.com/dbestevez/agitnoster-theme) - [agnoster](https://gist.github.com/3712874)テーマ（[Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh)および[bash-git-prompt](https://github.com/magicmonty/bash-git-prompt)に含まれる）に基づき、`git`の状態に関する詳細情報を表示。
- [agkozak](https://github.com/agkozak/agkozak-zsh-prompt) - 3つの非同期メソッドを使用し、ZSHプロンプトの反応性を維持しながら、`git`の状態やSSH接続、終了コード、`vi`モードのインジケーター、および簡略化された`PROMPT_DIRTRIM`スタイルのパスを表示。非常にカスタマイズ可能。CygwinおよびMSYS2でも非同期処理が可能。
- [agnopro](https://github.com/arhafizi/agnopro-zsh-theme) - 高性能かつ機能豊かなZSHテーマ。文脈を知的に表示し、Agnosterをインスピレーションとして採用し、開発者向けの追加機能を備えている。現在のディレクトリ、Node.jsバージョン、Go言語バージョン、.Netバージョン、`git`の状態、AWSプロファイル、user@host、バックグラウンドジョブ、Python環境をデコレート。
- [agnoster (fcamblor)](https://github.com/fcamblor/oh-my-zsh-agnoster-fcamblor) - Solarized [Agnoster](https://gist.github.com/agnoster/3712874)変体に`git`の状態情報を追加。Unicodeフォントが必要で、[solarized](https://github.com/altercation/solarized)ターミナルと最適化。
- [agnoster (fseguin)](https://github.com/fsegouin/oh-my-zsh-agnoster-mod-theme) - [agnoster](https://gist.github.com/agnoster/3712874)変体に右側プロンプトを備える。
- [agnoster-gentoo](https://github.com/r7l/agnoster-gentoo-zsh-theme) - Gentoo風の[Agnoster ZSH Theme](https://github.com/agnoster/agnoster-zsh-theme)で、user@hostnameおよび`git`の状態をデコレート。Unicodeフォントと良好に動作。
- [agnoster-j](https://github.com/apjanke/agnosterj-zsh-theme) - の色方案、や他のVCSツール、Unicode対応フォントに最適化。前コマンドの実行状態、user@hostname、の状態、作業ディレクトリ、rootとして実行中か、バックグラウンドジョブが実行中か、その他情報をデコレート。 [solarized](https://ethanschoonover.com/solarized/) `git` `git`
- [agnoster-mod](https://github.com/fsegouin/oh-my-zsh-agnoster-mod-theme) - [Agnoster](https://gist.github.com/agnoster/3712874)変体に右プロンプトを備える。
- [agnoster-multiline](https://github.com/mxkrsv/agnoster-multiline) - に基づくテーマ。現在のディレクトリおよびの状態をデコレート。Powerlineおよびの文字を含むフォントが必要。Linuxのttysでは非ASCII文字を自動的に無効化。 [Agnoster](https://github.com/agnoster/agnoster-zsh-theme) `git` `git`
- [agnoster-plus](https://github.com/jiahut/agnoster-plus.zsh-theme) - [Agnoster](https://gist.github.com/agnoster/3712874)変体で、[Solarized Dark](https://github.com/altercation/solarized/blob/master/iterm2-colors-solarized/Solarized%20Dark.itermcolors)ターミナルの色方案に最適化。`git`の状態を表示。
- [agnoster-refresh](https://github.com/fusion94/Agnoster-refresh) - [Agnoster](https://gist.github.com/agnoster/3712874)変体にバッテリーおよびオンライン状態を表示。
- [agnoster-repopath](https://github.com/ivanfurlan/agnoster-repopath-theme) - [Agnoster](https://github.com/agnoster/agnoster-zsh-theme)および[Passion](https://github.com/ChesterYue/ohmyzsh-theme-passion)テーマに基づく。プロンプトに`git`および`mercurial`の状態、現在時刻、前コマンドの実行時間のデコレートを含む。
- [agnoster-timestamp-newline](https://github.com/DylanDelobel/agnoster-timestamp-newline-zsh-theme) - [Agnoster](https://gist.github.com/agnoster/3712874)変体にタイムスタンプと改行を追加。
- [agnoster](https://gist.github.com/agnoster/3712874) - Solarizedターミナル色方案に最適化。`git`のデコレート、user@host、作業ディレクトリ、前コマンドの終了状態、root権限の有無を表示。Powerline対応フォントが必要。
- [agnosterAfro](https://github.com/afrozalm/agnosterAfro) - [Powerline](https://github.com/Lokaltog/vim-powerline)および[Agnoster](https://gist.github.com/agnoster/3712874)テーマに基づき、[agnosterzak](https://github.com/zakaziko99/agnosterzak-ohmyzsh-theme)をインスピレーションとして採用。
- [agnosterzak](https://github.com/zakaziko99/agnosterzak-ohmyzsh-theme) - [Agnoster](https://gist.github.com/agnoster/3712874)に基づき、バッテリー寿命、日時、`git`の状態、現在のディレクトリ、ユーザーおよびホスト情報を表示。
- [ai-candy](https://github.com/SihaoLiu/ai-candy) - AI支援開発者向けの反応性の高い[oh-my-zsh](https://github.com/ohmyzsh)テーマ。コンテナ、仮想マシン、裸マシン間で作業する開発者に最適。OS、カーネル情報、`ssh`セッション、`git`の状態、GitHub統合、AIツールの状態、スマートキャッシュをデコレート。
- [ai-hayasaka](https://github.com/aeghost/ai-hayasaka-zsh-theme) - ミニマリストテーマで、現在のディレクトリ、Ruby環境、Python仮想環境をデコレート。 `git`
- [air](https://github.com/Ivan-Kuzmichev/air) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [akzsh](https://github.com/awkimball/akzsh) - ダークターミナルテーマと良好に動作。`git`のデコレートを含む。
- [al-magic](https://github.com/Alustrat/al-magic/) - oh-my-zshの[af-magic](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/af-magic.zsh-theme)テーマをクローンし、プロンプトの右側に時間を追加。
- [alarangeiras](https://github.com/alarangeiras/alarangeiras-zsh-theme/) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [ale](https://github.com/alepimentel/ale-zsh) - finoテーマに基づく。`git`、`virtualenv`、`node`の状態をデコレート。
- [alesrosina](https://github.com/alesrosina/oh-my-zsh-alesrosina-theme) - `git`情報、現在のディレクトリ、前コマンドの返却状態をデコレート。
- [alien-minimal](https://github.com/eendroroy/alien-minimal) - ミニマリストZSHテーマで、`git`の状態を表示。
- [alien](https://github.com/eendroroy/alien) - Powerline風のZSHテーマで、のデコレートおよび前コマンドの終了コードを表示。他のプロンプトよりも速い。なぜなら、のデコレートをバックグラウンドプロセスで非同期に決定するため。 `git` `git`
- [almel](https://github.com/Ryooooooga/almel) - [agnoster](https://github.com/agnoster/agnoster-zsh-theme)をインスピレーションとして、Rustで書かれたテーマ。`git`の状態、user@host、前コマンドの終了状態、作業ディレクトリをデコレート。
- [aloy (garethclews)](https://github.com/garethclews/aloy) - subnixrのから導入された「magic enter」を含む lenaテーマのフォーク。Enterを押すだけで、追加コマンドなしに、有用な、および現在の作業ディレクトリ情報を表示。 [@elenapan's](https://github.com/elenapan/dotfiles) [minimal](https://github.com/subnixr/minimal) `ls` `git`
- [aloy (karetsu)](https://github.com/karetsu/aloy) - subnixrのから導入された「magic enter」を含む lena ZSHテーマのフォーク。さらに情報を追加。Enterを押すだけで、追加コマンドなしに、有用な、および現在の作業ディレクトリ情報を表示。 [@elenapan's](https://github.com/elenapan/dotfiles) [minimal](https://github.com/subnixr/minimal) `ls` `git`
- [alp](https://github.com/zrut747/alp/) - シンプルなテーマで、現在のディレクトリ、root状態、ユーザー名、ホストをデコレート。
- [alpha](https://github.com/Republic-Of-Lunar/alpha-zsh-theme) - ユーザー名@ホスト名および現在のディレクトリをデコレート。
- [alpharized](https://github.com/NicoSantangelo/Alpharized) - [solarized](http://ethanschoonover.com/solarized)のダークターミナルに最適化されたバージョン。[avit theme](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/avit.zsh-theme)の改良版。
- [amoyly](https://github.com/Br1an6/amoyly.zsh-theme) - [Agnoster](https://gist.github.com/agnoster/3712874)をベースにした、洗練された読みやすいテーマ。
- [amplify](https://github.com/clintfoster/ohmyzsh-theme-amplify) - ミニマリストテーマで、AWS Amplify環境およびの状態をデコレート。- - テーマの改良版で、より良いサポート。 `git` [andy](https://github.com/andymcguinness/andys-theme) [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme) `git`
- [antoinechab](https://github.com/antoinechab/antoinechab-theme) - `git`の状態、ユーザー名、時間、現在のディレクトリをデコレート。
- [antsy](https://github.com/jeffmhubbard/antsy-zsh-theme) - `git`のブランチおよび状態、仮想環境、終了状態、ジョブ数、viモードインジケーターをデコレート。
- [aofxta](https://github.com/aofxta/aofxta.zsh-theme/) - 前回のコマンド実行時間、`git` の情報、現在のディレクトリ、現在の時刻を表示するデコレーターを含みます。
- [ap2](https://github.com/aungphyo-dev/ap2.zsh) - シンプルなテーマで、時刻、OS、現在のディレクトリ、`git` の状態、前回のコマンドの終了状態をデコレーターで表示。
- [aperiodic](https://github.com/piccobit/aperiodic-zsh-theme) - `git`デコレーター、ユーザー名、ホスト名、rootかどうか、アクティブなPython仮想環境、現在のRubyインタープリタ、最後のコマンドの視覚的および数値的な状態、パワーマネジメント状態、時刻と日付を表示。
- [aphrodite](https://github.com/win0err/aphrodite-terminal-theme) - 視覚的なノイズのないシンプルなテーマ。必要な情報のみを表示：現在のユーザー名、ホスト名、作業ディレクトリ、`git`ブランチ（存在する場合）。ダークおよびホワイトのターミナルとも良好に見える。
- [aplos](https://github.com/sunquan1991/aplos) - シンプルなZSHプロンプトで、作業ディレクトリ、ローカル情報、リモート情報、時刻および終了コードを表示。 `git` `git`
- [apollo](https://github.com/mjrafferty/apollo-zsh-theme) - 高度にカスタマイズ可能で、互換性があり、パフォーマンスの高いZSHテーマ。機能をモジュールで有効化。
- [aporia](https://github.com/fr3on/aporia) - 開発者たちが最先端のターミナル環境を求める人向けに設計されたテーマ。非ブロッキングバックグラウンドワーカー（zle -F）による即時ターミナル反応性、Go、Rust、Python、Node、Ruby、PHP、Java、C++のプロジェクト検出、Gitのスタッシュ追跡、仮想環境およびDocker用の専用セグメント、Ghost-Textの自動補完およびリアルタイムシンタックスハイライトを内蔵。
- [appa](https://github.com/givensuman/appa-zsh-theme) - omzの[refined](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/refined.zsh-theme)に基づいたシンプルなテーマ。[Nerd Font](https://github.com/ryanoasis/nerd-fonts)が必要。
- [apple (aramirol)](https://github.com/aramirol/apple-zsh-custom-themes) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)に基づき、`vcs`状態デコレーターを含む。色は、あなたの`.zshrc`内の変数を設定することでカスタマイズ可能。
- [apple (bjrowlett2)](https://github.com/bjrowlett2/apple-zsh-theme) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [arael](https://github.com/aknackd/zsh-themes) - [gallifrey](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/gallifrey.zsh-theme)のフォーク。
- [archcraft](https://github.com/mrx04programmer/ZshTheme-ArchCraft) - 緑色のテーマで、ダーク背景に最適化。`git`状態デコレーターを含む。
- [archie](https://github.com/dcavalcante/archie) - Arch LinuxをインスピレーションとしたZSHテーマ。[norm](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/norm.zsh-theme)テーマに基づく。
- [archmocha](https://github.com/mikkurogue/archmocha/) - [catpucchin](https://github.com/JannoTjarks/catppuccin-zsh) の一部をモチャ風にしたテーマ（アーキテクチャ Linux バージョン）。ユーザー@ホスト名、現在のディレクトリ、`git` の状態をデコレーターで表示。
- [arctic-glow](https://github.com/Etto48/arcticglow-zsh-theme) - [agnoster](https://gist.github.com/3712874) に基づいたテーマ。`git` の状態、Python ビルド環境、現在のディレクトリ、ユーザー名、オペレーティングシステムをデコレーターで表示。
- [arity](https://github.com/hybras/Arity-Zsh-Theme) - 読みやすさと一目で概観できるように設計されたシンプルなテーマ。パスと`git`デコレーターを含む。
- [arrow-minimal](https://github.com/maxim-usikov/arrow-minimal.zsh-theme) - シンプルなZSHテーマで、`git`デコレーターを提供。
- [arrow](https://github.com/milon/arrow-zsh-theme) - シンプルなテーマで、`git` ステータスデコレーションを含む。
- [asciigit](https://github.com/cemsbr/asciigit) - ASCIIのみのテーマで、特別な文字を含まないフォントを使いたい`git`ユーザー向け。
- [astral](https://github.com/xwmx/astral) - ダーク背景に最適化されたテーマで、zen モードをサポート。zsh-users の [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) プラグインと良好に連携。前回のコマンドの実行時間、実行時刻、終了状態、マシン名、現在のパス、`ssh` の状態、`git` の状態をデコレーターで表示。
- [astro](https://github.com/iplaces/astro-zsh-theme) - `ys`および[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#robbyrussell)テーマに基づく。
- [async](https://github.com/mje-nz/zsh-themes) - 現在のディレクトリ、`git`状態、最後のコマンドがエラーコードを返した場合の返値、バックグラウンドジョブの数、長時間実行コマンドの実行時間、現在のPython仮想環境を表示。
- [aterminal](https://github.com/guiferpa/aterminal) - プロンプトにNode.js、NPM、Docker、Go、Python、ElixirおよびRubyの情報を表示。
- [aub](https://github.com/FraSharp/aub) - `git`および`hg`状態、`username`に関するデコレーターを、`host`に表示。
- [australis](https://github.com/Kimitzuni/australis-theme) - 軽量テーマで、情報および現在のディレクトリに関するデコレーターを提供。プラグイン（から）が必要。 `git` `git` [oh-my-zsh](https://github.com/ohmyzsh)
- [avil](https://github.com/avil13/avil-zsh-theme) - ミニマリズムテーマで、`git`のデコレーターを含む。
- [avit-d2k](https://github.com/fdaciuk/avit-da2k) - oh-my-zshの[avit](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/avit.zsh-theme)テーマに基づき、わずかな変更を加えたもの。
- [avit-mod](https://github.com/zlsun/avit-mod) - oh-my-zshの[avit](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/avit.zsh-theme)テーマの改良版。
- [avoleo](https://github.com/flameleo11/avoleo-zsh-theme) - 各コマンドに日時プロンプトと履歴内のコマンド番号を提供。さらに、現在のパスに応じて、特別な記号'⠾'および'⡶'を使用して`git`情報を表示。また、Gnome-Terminalのデフォルトカラーパレットに基づくカスタムカラーをサポート。
- [aws](https://github.com/chiemerieezechukwu/aws-zsh-theme) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#robbyrussell)に基づき、追加のデコレーターで、あなたの`$AWS_PROFILE`が設定されているときにそれを表示。
- [backbone](https://github.com/42LM/backbone-zsh-prompt) - 極めてシンプルな1ファイルプロンプト。高速で、道路の走りを連想させるMEEP！MEEP。`git`状態および現在のディレクトリのデコレーターを含む。
- [baddcafe](https://github.com/dimgatz98/Baddcafe_zsh_theme) - 動的にシステム情報を提供。`git` の状態、CPU 使用率、メモリ使用率、バッテリー残量、ローカルおよびグローバル IP アドレス、現在の時刻、現在のディレクトリ、前回実行コマンドの終了状態をデコレーターで表示。
- [bahman](https://github.com/bahmanworld/bahman-zsh-theme) - [Nerd Font](https://github.com/ryanoasis/nerd-fonts)が必要。`git`状態デコレーターを備える。
- [banana](https://github.com/sorcererxw/banana-zsh-theme) - `git`状態デコレーターおよび現在のディレクトリを含む。
- [bandit](https://github.com/Holger-Will/zsh_bandit) - Powerlineのバリエーションの一つ。
- [bar (anki-code)](https://github.com/anki-code/shell-prompt-theme-bar) - [p10k](https://github.com/romkatv/powerlevel10k)のシンプルな設定。
- [bar (xp-bar)](https://github.com/xp-bar/zsh-bar-theme) - ユーザー名、ホスト名、pwd、`git`状態デコレーター、3回の水を飲むための時計を表示。
- [barion](https://github.com/SEbbaDK/barion) - 高速にコンパイルされたプロンプトで、コンパクトな`git`状態概要を提供。Powerlineに似ている。[Crystal](https://crystal-lang.org/)が必要。
- [base](https://github.com/Rodr1goTavares/based-zsh-theme) - 開発者やシステム管理者がリモートサーバー、VPS、VPN で頻繁に作業するためのシンプルかつ機能的な ZSH テーマ。公開IPアドレス、`git` の状態、現在のディレクトリをデコレーターで表示。
- [bash](https://github.com/starseekist/bash-zsh-theme) - デフォルトの`bash`プロンプトに似ている。
- [bashi](https://github.com/eli-oat/bashi) - Ahmet Sülekの [Flat UI Terminal](https://github.com/ahmetsulek/flat-terminal) サブテーマおよびPasquale D'Silvaの [Saturn Terminal](https://github.com/psql/saturn-colors) サブテーマに最適化されています。
- [bashlover](https://github.com/Vu0811/bashlover) - ZSHシェルの強力な機能を評価しつつ、かつての `bash` シェルのようなシンプルかつ古典的なインターフェースを好む人々向けに設計されています。 `git` の情報、user@host、現在の作業ディレクトリのデコレーターを含んでいます。
- [bashplus](https://github.com/Elagoht/BashPlusZshTheme) - デフォルトの `bash` プロンプトのカラーリングされた再現版。 `virtualenv` および `git` のステータスにデコレーターを含んでいます。
- [bastard](https://github.com/jsundqvist/bastard.zsh-theme) - [gitster](https://github.com/zimfw/gitster) サブテーマの改良版を [ZIM](https://github.com/zimfw/zimfw) 用に作成したものです。
- [bearable](https://github.com/JanmanX/bearable-zsh) - ダークなターミナル背景と良好に動作します。
- [bearings](https://github.com/liamg/bearings) - 高速でシンプルで、極めてカスタマイズ可能なシェルプロンプト。現在のディレクトリ、 `git` ステータス、前回のコマンドの終了コード、前回のコマンドの実行時間、バックグラウンドジョブ、ユーザー名のデコレーターを含んでいます。
- [bedbugs](https://github.com/justino/zsh-theme-bedbugs) - [Agnoster](https://gist.github.com/agnoster/3712874) にインスピレーションを得たマルチラインプロンプト。 `git` ステータス情報、バックグラウンドジョブ数、作業ディレクトリ、ユーザー名、ホスト名、Python virtualenv（存在する場合）、前回コマンドの色付き返値、root/userのシンボルにデコレーターを含んでいます。
- [beer](https://github.com/tcnksm/oh-my-zsh-beer-theme) - [cloud](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/cloud.zsh-theme) にインスピレーションを得たもので、ビールアイコンを採用しています。
- [bender](https://github.com/specious/bender) - Git統合を備えた華やかな2行プロンプト。
- [berghain](https://github.com/meshkinyar/berghain.zsh-theme) - ミニマリストなテーマ。前回実行されたコマンドの終了コードおよび `git` ステータスのデコレーターを含んでいます。
- [bernkastel](https://github.com/JamesLaverack/bernkastel) - [ys](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/ys.zsh-theme) に基づいたテーマ。Kubernetesコンテキスト、現在のディレクトリ、前回コマンドの終了ステータス、 `git` ステータスのデコレーターを含んでいます。
- [better-robbyrussell](https://github.com/ymulenll/oh-my-zsh-better-robbyrussell) - oh-my-zsh の [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme) テーマの改良版で、オリジナルのシンプルさを維持しつつ、AWS プロファイルの認識を追加。AWS プロファイル、`git` ブランチの表示（オプションで切り詰め）、ディレクトリパス、および最後に実行したコマンドの終了ステータスをデコレート。
- [bgnoster](https://github.com/vvvvv/bgnoster.zsh-theme) - [Agnoster](https://gist.github.com/agnoster/3712874) にUnicodeシンボルを内蔵したバリエーション。
- [bigshrimp](https://github.com/taksyon/BigShrimp-zsh-theme) - 明瞭で簡潔なテーマ。ユーザー名@ホスト、現在のディレクトリ、 `git` ステータスのデコレーターを含んでいます。
- [bigyls](https://github.com/Bigyls/Bigyls-zsh-theme) - [lpha3cho](https://github.com/sdcampbell/lpha3cho-Oh-My-Zsh-theme-for-pentesters) に基づいたテーマ。日付、時刻、IPアドレス、 `git` ステータス、プラグイン、現在のディレクトリのデコレーターを含んでいます。
- [bira](https://github.com/zimfw/bira) - Oh-My-ZSHの [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme) サブテーマのフォーク。作業ディレクトリ、ユーザー名@ホスト、 `git` ステータス情報、Python [venv](https://docs.python.org/3/library/venv.html)、前回コマンドがエラーを起こした場合のステータスコードのデコレーターを含んでいます。
- [birame](https://github.com/maniat1k/birame) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme) に基づいたテーマ。
- [biraskull](https://github.com/Shahryar-Pirooz/biraSkull.zsh-theme) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme) に基づいており、rootステータスおよび `git` ステータスのデコレーターを含んでいます。
- [biratime](https://github.com/vemonet/biratime) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme) サブテーマに基づいていますが、プロンプトにユーザー名ではなく日付を表示しています。
- [birav2](https://github.com/shahid64/birav2-theme) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme) に基づいており、 `git`、 `rvm`、 `virtualenv` ステータスのデコレーターを含んでいます。
- [black-Void](https://github.com/black7375/BlaCk-Void-Zsh) - アカウント情報、rootユーザー、SSH使用、ディレクトリ移動、書き込み許可、VCS情報のデコレーターを含んでいます。
- [blackrain](https://github.com/ginfuru/zsh-blackrain) - 別の `git` に意識したテーマ。
- [blaze](https://github.com/danieltodor/blaze) - powerlineに視覚的に類似しており、 `make` および `g++` を必要とします。 [Nerd Font](https://github.com/ryanoasis/nerd-fonts) をターミナルに設定すると最適に動作します。現在のディレクトリ、前回コマンドの実行時間、前回コマンドの終了ステータス、 `git` ステータス情報、日付、時刻、ユーザー名、ホスト名のデコレーターを含んでいます。カスタムセグメントで拡張可能です。
- [blazux](https://github.com/blazux/omz-theme) - `git` ステータスのデコレーターおよび前回コマンドの終了ステータスを示すスマイル／悲しみの表情インジケーターを含んでいます。
- [blinks (max13ft)](https://github.com/max13fr/blinks.zsh-theme) - oh-my-zsh の [blink](https://github.com/max13fr/blinks.zsh-theme) テーマに mercury のサポートを追加。
- [blinks-xfan](https://github.com/ixfan/blinks-xfan) - 既存のテーマ [blinks](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/blinks.zsh-theme) に基づいたテーマ。
- [bliss](https://github.com/joshjon/bliss-zsh) - 色を注入しつつワークスペースを圧迫しない、繊細なテーマ。 [bliss iTerm](https://github.com/joshjon/bliss-iterm) カラースキームと [bliss dircolors](https://github.com/joshjon/bliss-dircolors) と併用されるように設計されています。 `git` ステータスのデコレーターを含んでいます。
- [blox](https://github.com/yardnsm/blox-zsh-theme) - シンプルで高速なZSHテーマ。必要な情報を表示します。ブロック構成で構成されており、各ブロックは \[square brackets\] で囲まれており、ブロックを追加するには関数を作成するだけです。
- [bluebird](https://github.com/bedirisinghe/bluebird-prompt) - 軽量なZSHプロンプトで、クリーンなPowerlineスタイルデザインとNerd Fontサポートを備えています。ユーザー名、現在のディレクトリ、 `git` ブランチのデコレーターを含んでいます。
- [bluehigh](https://github.com/hiroppy/bluehigh.zsh-theme) - ミニマリストなテーマ。 `git` の情報を表示します。
- [bluelines](https://github.com/apbarrero/bluelines) - 明瞭で青いテーマ。
- [bluo](https://github.com/varunpbardwaj/bluo) - [bullet-train](https://github.com/caiogondim/bullet-train.zsh) または [powerlevel10k](https://github.com/romkatv/powerlevel10k) に似たカラフルなプロンプトセグメント。 `git` ステータスのデコレーターを含んでいます。
- [boban](https://github.com/TheEdgeOfRage/boban-zsh) - [Agnoster](https://github.com/agnoster/agnoster-zsh-theme) に基づいたPowerlineスタイルのファイル。ユーザー@ホスト名、 `git` ステータス、現在の作業ディレクトリ、Python venv、AWSプロファイル、 `$KUBECONFIG`、Terraformワークスペース、前回実行コマンドの終了ステータスのデコレーターを含んでいます。正しく表示するために [Nerd Font](https://github.com/ryanoasis/nerd-fonts) を必要とします。
- [bogo](https://github.com/cubasepp/zsh-bogo-theme) - [zeta](https://github.com/skylerlee/zeta-zsh-theme) にインスピレーションを得たもの。 `git` およびRubyバージョンのデコレーターを含んでいます。
- [boom](https://github.com/the0neWhoKnocks/zsh-theme-boom) - マルチラインテーマ。暗い背景で最も良好に動作します。
- [born-in-the-purple](https://github.com/LeonardMH/born-in-the-purple) - 紫色のテーマ。 [Pure](https://github.com/sindresorhus/pure) にインスピレーションを得たシンプルなテーマ。
- [bouni](https://github.com/Bouni/bouni-zsh-theme) - ユーザー@ホスト、現在のディレクトリ、アクティブなPython virtualenv、 `git` ステータスのデコレーターを含んでいます。
- [boxy](https://github.com/evil-tim/boxy-zsh-theme) - ソーライズドターミナルカラーと良好に動作します。 `username@hostname`、現在のディレクトリ、 `git` ステータス、前回コマンドの返値コード、前回コマンドが実行された時間のデコレーターを含んでいます。
- [braundo](https://github.com/Braundo/braundo-zsh-theme) - ユーザー名、現在のディレクトリ、 `git` ステータス、タイムスタンプを含むシンプルなテーマ。
- [bref](https://github.com/mpostaire/bref-zsh-prompt) - シンプルなプロンプト。 `git` ステータスを非同期で表示するデコレーター、 `ssh` セッションがリモートである場合の通知、バッテリーのレベル、バックグラウンドジョブの数を含んでいます。
- [bright-catpuccin](https://github.com/Tailung42/bright_catppuccin_zsh_theme) - 活き活きとした、現代的なZSHプロンプト。美しいCatppuccin Mochaパレットに基づき、明るい色の雰囲気を備えています。`git`のステータス、Python `venv`、Conda環境、スマートなパスの切り詰め、長時間実行されるコマンドの実行時間、オプションのユーザー名@ホスト名、スマートなパスの切り詰め、バックグラウンドジョブ、コマンドの終了ステータスを含むデコレーターを備えています。
- [brisa](https://github.com/ambrisolla/oh-my-zsh-brisa-theme) - マルチラインテーマ。[fino-time](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/fino-time.zsh-theme)に基づいており、ユーザー名、ホスト、現在のディレクトリ、および`git`のステータスをデコレートしています。
- [bronze](https://github.com/reujab/bronze) - マルチシェルに対応したカスタマイズ可能なパワーライン風プロンプト。Goで書かれたアイコンを備えています。[nerd-fonts](https://github.com/ryanoasis/nerd-fonts)が必要です。
- [brs](https://github.com/evenhold/brs-zsh-theme) - プロンプトに現在の音楽を表示。`audtool`を用いています。
- [bruh](https://github.com/haze/bruh) - `git`のステータスデコレートを含む。
- [bryce-robbyrussell](https://github.com/Bryan-Cee/bryce-robbyrussell) - Catppuccinの[powerline](https://github.com/Lokaltog/vim-powerline)および[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#robbyrussell)テーマにインスピレーションを受けています。
- [bttf-color](https://github.com/yasuhiroki/bttf-color-zsh) - BTTFカラーテーマ。`git`のステータスをデコレートしています。
- [bubblegum](https://github.com/ice-bear-forever/bubblegum-zsh) - 極めてシンプルで明るいピンクテーマ。三角形のグリフと現在の作業ディレクトリを含み、それ以外は一切ありません。最もクリーンなシェルを残します。
- [bubblified (hohmannr)](https://github.com/hohmannr/bubblified) - [agnoster](https://github.com/agnoster/agnoster-zsh-theme)にインスピレーションを受けています。[nerdfonts](https://github.com/ryanoasis/nerd-fonts)と組み合わせて最も効果的です。
- [bubblified (varaki)](https://github.com/varaki/bubblified-varaki.zsh-theme) - [bubblified (hohmannr)](https://github.com/hohmannr/bubblified)に基づいており、rootになると色が変化します。ユーザー@ホストおよび現在のディレクトリを表示するデコレーターを備えています。
- [buddha](https://github.com/BuddhaDom/zsh-buddha) - `git`のステータス、現在のディレクトリ、最後に実行されたコマンドの終了ステータス、ユーザー名@ホスト名をデコレートしています。
- [buddy](https://github.com/hieudnm/zsh-buddy-theme) - マルチ言語対応の拡張システムを備え、1730〜1830時のオーバーティムーリマインダー、`git`のステータス、時間、仮想環境情報、OS検出、70以上の時間とコマンドに応じたコンテキストメッセージを含みます。
- [bullet-train](https://github.com/caiogondim/bullet-train.zsh) - Powerline Vimプラグインにインスピレーションを受けており、関連性がある情報のみを表示することを目指しています。
- [bunnyruni.min](https://github.com/mikeumus/bunnyruni.min) - [@jopcode's](https://github.com/jopcode) [bunnyruni](https://github.com/jopcode/oh-my-zsh-bunnyruni-theme) ZSHテーマ。時間とディレクトリのみを表示するように変更されています。
- [bunnyruni](https://github.com/jopcode/oh-my-zsh-bunnyruni-theme) - シンプルで、クリーンで、美しいテーマ。
- [bureau-env](https://github.com/angus-lherrou/bureau-env) - Oh-My-Zshの[Bureau](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bureau.zsh-theme)テーマを改良し、Python仮想環境ラベルを`git`ブロックの左側に追加しています。
- [bureau-parrot](https://github.com/BenjaminGuzman/bureau-parrot) - [bureau](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/bureau.zsh-theme)に基づいており、`git`のデコレーターを含みます。
- [bureau](https://github.com/isqua/bureau) - 明確で情報量の多い2行プロンプト。大規模リポジトリ向けに最適化された`git`のステータスを含みます。
- [burn](https://github.com/Xatra1/burn) - ユーザー@ホスト名および現在のディレクトリをデコレートしています。
- [buster](https://github.com/grantbuster/buster_zsh_theme) - WSL2とよく相性が良い。Oh-My-ZshのFoxおよびJonathanテーマに基づいています。
- [cactus](https://github.com/welksonramos/cactus) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [cafeconbits](https://github.com/ricard-ferrero/cafeconbits-zsh-theme) - シンプルなテーマ。コーヒーカップのアイコンを備えています。`git`のステータス、現在のディレクトリ、最後のコマンドの終了ステータスをデコレートしています。
- [calma](https://github.com/luislve17/calma) - ダークな背景に最適な極めてシンプルなテーマ。現在のディレクトリの切り詰め、`git`情報、時間、最後のコマンドの終了ステータスをデコレートしています。
- [candy-fantasy](https://github.com/fffelix-huang/candy-fantasy) - [Candy Kingdowm](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/candy-kingdom.zsh-theme)テーマの改良版。
- [candy-light](https://git.sr.ht/~nicolairuckel/oh-my-zsh-candy-light) - キャンディテーマのライトバージョン。
- [capsule](https://github.com/42LM/capsule) - シンプルな1ファイルのターミナルプロンプト。完全にカスタマイズ可能です。表示はカプセル（`TIMER` > `DIR` > `GIT` > `GIT ACTION`）に分けられています。
- [carriage-return](https://github.com/treyssatvincent/carriage-return.zsh-theme) - omzの[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)に改行を追加したものです。
- [catppuccin-powerlevel10k-themes](https://github.com/tolkonepiu/catppuccin-powerlevel10k-themes) - [Powerlevel10k](https://github.com/romkatv/powerlevel10k)テーマは[**Catppuccin**](https://catppuccin.com/)のカラーパレットにインスピレーションを受けており、複数スタイルで提供され、すべてのCatppuccinパレット（**🌻 Latte**, **🪴 Frappé**, **🌺 Macchiato**, **🌿 Mocha**）をサポートしています。
- [catpuccin-kali](https://github.com/Robinx0/catpuccin-kali-theme.zsh-theme) - oh-my-posh catpuccinテーマにインスピレーションを受けており、ユーザー名@ホスト名、現在のディレクトリ、`git`のステータスをデコレートしています。
- [catpuccin](https://github.com/JannoTjarks/catppuccin-zsh) - 極めてシンプルなテーマ。現在のディレクトリ、最後のコマンドの終了ステータス、`git`のステータスをデコレートしています。
- [cayun](https://github.com/comeacrossyun/ys-cayun.zsh-theme) - 現在のPythonバージョンと`git`のデコレーションをプロンプトに表示します。
- [celestialorb](https://github.com/celestialorb/zsh-theme) - @celestialorbによるPowerline風テーマ。`git`のステータスをデコレートし、Kubernetesクラスタ情報（存在する場合）、現在のAWSプロファイルとリージョン、アクティブな仮想環境を表示します。
- [cezhanne](https://github.com/gambardellawill/cezshanne) - 極めてシンプルなZSHテーマ。`git`のステータスをデコレートしています。[Nerd Font](https://www.nerdfonts.com)が必要です。
- [cf-ps1](https://github.com/mdan16/cf-ps1) - プロンプトに現在のfoundationおよびorganizationとspaceの情報を表示します。 [Cloud Foundry](https://www.cloudfoundry.org/)
- [ch4rli3](https://github.com/ch4rli3kop/ch4rli3.zsh-theme) - 軽量でシンプルなテーマ。
- [chaffee](https://github.com/jasonchaffee/chaffee.zsh-theme) - sorinに基づいており、現在のJava、Scala、Go、Node、Python、Rubyのバージョンを表示しています。
- [chaos](https://github.com/kusamaxi/chaos-zsh) - dogenpunkおよびsmtテーマにインスピレーションを受けており、ユーザーおよびPython開発者向けに最適化されています。のステータス、Python仮想環境、バックグラウンドジョブ、最後のコマンドのエラー状態、ユーザー@ホスト名、現在のディレクトリをデコレートしています。エモジを備えたフォントが必要です。 `git` `git`
- [chaotic-beef](https://github.com/ARtoriouSs/chaotic-beef-zsh-theme) - Oh-My-Zsh向けに極めて小さく、何も不要な要素を含まない美しいテーマ。`git`のステータスをデコレートしています。
- [charged](https://github.com/robwierzbowski/charged-zsh-theme) - ZSHプロンプト。[solarized](https://github.com/altercation/solarized)のダークターミナルテーマに最適化されています。
- [cheeky](https://github.com/kampanosg/zsh-cheeky-prompt) - 鶏のエモジを含み、現在のディレクトリ、`git`情報、現在のGCPクラスタおよびプロジェクトをデコレートしています。
- [chello](https://github.com/Abdalla981/chello) - ダークな背景に適したテーマ。[autojump](https://github.com/wting/autojump)、[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)および[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)に依存する。
- [chi](https://github.com/akinjide/chi) - macOSで使用するiTerm 2ユーザー向けのZSHテーマ。
- [chill](https://github.com/JKerboeuf/chill.zsh-theme) - 現在の作業ディレクトリ、最後のコマンドの終了状態および`git`の状態を表示する装飾を備える。
- [chinipage](https://github.com/andresemartinez/chinipage-zsh-theme) - 簡潔なテーマで、`git`の装飾を含む。powerline対応フォントと[git-prompt](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git-prompt)プラグインが必要。
- [chrisandrew.cl](https://github.com/chrisandrewcl/chrisandrew.cl.zsh-theme) - `git`の装飾を含む。powerline対応のターミナルフォントが必要。
- [cinnabar](https://github.com/nvillapiano/zsh-theme---cinnabar) - タイムスタンプ、大きな行の改行、gitブランチおよび状態を表示。
- [clarity](https://github.com/nbitmage/clarity.zsh) - シンプルさと拡張性を設計したテーマ。
- [classic](https://github.com/freakinu/classic-zsh-theme) - クラシックなUnixテーマで、ユーザー名、ホスト、現在のディレクトリおよび`git`の状態を装飾。
- [classyTouch](https://github.com/yarisgutierrez/classyTouch_oh-my-zsh) - 簡潔でクリーンなテーマで、`git`をサポート。
- [classyTouchName](https://github.com/dylanroman03/classyTouchName) - [classyTouch](https://github.com/yarisgutierrez/classyTouch_oh-my-zsh)にインスパイアされたテーマ。ダークな背景でより良く動作。`git`の状態装飾を含む。
- [clean (akz92)](https://github.com/akz92/clean) - 簡潔なZSHテーマ。
- [clean (brandonRoehl)](https://github.com/BrandonRoehl/zsh-clean) - [pure](https://github.com/sindresorhus/pure)のミニマリズムバリアント。Pureはクリーンではない、クリーンはPureではない。
- [clean (patr1ot)](https://github.com/Patr1ot/clean.zsh-theme) - 上流の[clean](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#clean)をフォークし、ホスト情報が追加されたテーマ。
- [cleansh](https://github.com/diegoos/cleansh) - ミニマリズムで、`git`、Ruby、nodeおよびPythonバージョンの状態装飾を含む。標準フォントと互換性がある。
- [clearance](https://github.com/H00N24/clearance-theme-oh-my-zsh) - ミニマリズムテーマで、`git`、nix-shellおよびvirtualenvの状態装飾を含む。
- [clipper](https://github.com/Robert-96/clipper) - ミニマリズムZSHテーマで、をサポート。pwd、最後のコマンドの終了状態コードおよびの状態とブランチの装飾を含む。 `git` `git`
- [cloudy](https://github.com/Huvik/Cloudy) - ミニマリズムなクラウドZSHテーマ。
- [clover](https://github.com/tzing/clover.zsh-theme) - [zeta](https://github.com/skylerlee/zeta-zsh-theme)および[pure](https://github.com/sindresorhus/pure)にインスパイアされたテーマ。
- [cmder-wsl](https://github.com/szyminson/cmder-wsl-zsh) - `cmder`の設定ファイルで、quakeモードでZSHと変更された[Agnoster](https://gist.github.com/agnoster/3712874)テーマで動作を調整。
- [cmder](https://github.com/potasiyam/cmder-zsh-theme) - Cmder（Windows向け人気ターミナルエミュレータ）のテーマに合わせたZSHテーマ。`node`および`git`の状態装飾を含む。
- [cn](https://github.com/shinqcn/cn-zsh/) - `username`、`directory`および`git`の状態装飾を含む。
- [cobalt-spark](https://github.com/azhuchkov/cobalt-spark) - コンパクトでノイズの少ないテーマ。日常的なターミナル作業中に目立たないよう設計。簡略化されたパスとGit状態、virtualenv、ネストされたシェル、バックグラウンドジョブの簡潔なインジケータを含む。
- [cobalt2](https://github.com/wesbos/Cobalt2-iterm) - Wes BosによるZSHおよびiTerm 2用のCobalt 2テーマ。
- [cobalt2git](https://github.com/alexeimun/cobalt2git) - Cobalt 2テーマに`git`拡張を追加。
- [codemachine](https://github.com/CodeMonkeyMike/ZshTheme-CodeMachine) - `git`情報の装飾、ログイン状態（`ssh`）の確認、最後のコマンドのリターンコードを表示。
- [coffeenostor](https://github.com/CoffeeVector/coffeenostor-zsh-theme) - [agnoster](https://gist.github.com/3712874)に基づき、viモードの右プロンプトをpowerlineスタイルで表示（`--INSERT--`および`--NORMAL--`）。
- [collon](https://github.com/lambdalisue/collon.zsh) - 軽量テーマで、`git`の状態装飾、cwd、時間、ホスト、最後のコマンドの終了状態を含む。特別なフォントは不要。
- [colorbira](https://github.com/CristianCantoro/colorbira-zsh-theme) - ホストごとのプロンプトカラーを可能にし、`rvm`、`virtualenv`および`git`情報を表示。
- [common](https://github.com/jackharrisonsherlock/common) - シンプルでクリーンでミニマリズムなプロンプト。現在の作業ディレクトリ、ホスト名、AWS vault role、バックグラウンドジョブ、現在のSHA、最後のコマンドの終了コード、および`git`のブランチと状態を表示。
- [comxtohr](https://github.com/comxtohr/comxtohr-zsh-iterm-theme) - ダークな背景に最適化されたカラフルテーマ。
- [coolmelon](https://github.com/omkarpai/coolmelon-zsh-theme/) - ユーザー@ホスト、時間、現在のディレクトリ、nodeバージョンおよび`git`情報を装飾。
- [cordial](https://github.com/stevelacy/cordial-zsh-theme) - gitおよびnpmをサポートするクリーンで効果的なZSHテーマ。
- [cr](https://github.com/cruzrovira/cr-zsh-theme) - ディレクトリ、時間、ホスト名、最後のコマンドの終了状態、および`git`の状態装飾を含む。
- [cramin](https://github.com/FelipeCRamos/craminzsh) - GitHubプラグインをサポートするミニマリズムインターフェース。[hyperzsh](https://github.com/tylerreckart/hyperzsh)に基づく。
- [cravend](https://github.com/cravend/theme) - `hostname`の装飾（アクティブな`ssh`セッションのみ）および`git`の状態装飾を含む。
- [crème fraîche](https://github.com/koenwoortman/creme-fraiche-zsh-theme) - ライトなターミナル背景で最も効果を発揮。`git`および`vi`モードの状態装飾を含む。
- [croque](https://github.com/Ryooooooga/croque) - powerlineにインスパイアされたテーマで、OS、ユーザー@ホスト、情報、ユーザー名、現在のディレクトリおよび最後のコマンドの終了状態を装飾。 `git` `git`
- [cryo-long](https://github.com/cryocaustik/cryo-long-zsh-theme) - [cryo](https://github.com/cryocaustik/cryo-zsh-theme/)のバリエーションで、ホスト名および現在のディレクトリの装飾を追加。
- [cryo](https://github.com/cryocaustik/cryo-zsh-theme) - オリジナルのoh-my-zshテーマのスタンドアローンクローンで、日時を追加。
- [cryptic](https://github.com/thederpykrafter/cryptic.zsh-theme) - [aphrodite-terminal-theme](https://github.com/win0err/aphrodite-terminal-theme)に基づく。現在のディレクトリ、`git`の状態、時間、ユーザー名、ホスト名およびバーチャル環境の装飾を含む。
- [cute](https://github.com/dogrocker/oh-my-zsh-powerline-cute-theme) - macOS用oh-my-zshシェルテーマ。Powerline Vimプラグインに基づくかわいいエモジを採用。
- [cxzh](https://github.com/MakeWorkSimple/cxzh.zsh-theme) - ダーク背景に最適化され、`git` の状態をデコレーターで表示。
- [cybensis](https://github.com/cybensis/cybensis-zsh-theme) - [af-magic](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/af-magic.zsh-theme)に基づく。 `git`情報、 `hg`情報、Pythonのvirtualenvに関する装飾を含む。
- [cypher-ruby](https://github.com/ston1x/cypher-ruby) - [cypher](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/cypher.zsh-theme)に似ているが、アクティブなRubyバージョンを含む。
- [czsh](https://github.com/Cellophan/czsh) - [ZSH](https://en.wikipedia.org/wiki/Z_shell)と [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)、そして [agnoster](https://github.com/agnoster/agnoster-zsh-theme)テーマをコンテナに収めたもの。
- [daily-emoji](https://github.com/huytran-wq/zsh-daily-emoji-theme/) - 週の日付に応じて、各コマンドの開始にランダムなエモジを表示。
- [daily](https://github.com/ghlin/zsh-theme-daily) - `git`および`ssh`ステータスデコレーションを含む。
- [daivasmara](https://github.com/Daivasmara/daivasmara.zsh-theme) - リラックスしたテーマ。現在のディレクトリ（必要に応じて切り詰め）および `git`情報の装飾を備えている。時間から最後のコミットまでの経過も表示。
- [dalailahner](https://github.com/dalailahner/dalailahner.zsh-theme) - シンプルなテーマで、`git` の状態、VCS 状態（[Bart Trojanowski's zsh prompt](http://www.jukie.net/bart/blog/pimping-out-zsh-prompt) に基づく）、ユーザー名、現在のディレクトリをデコレーターで表示。Steve Losh の [Prose](https://github.com/sjl/oh-my-zsh/blob/master/themes/prose.zsh-theme) テーマに基づく。
- [damino](https://github.com/njdom24/Damino-Zsh-Theme) - シンプルな powerline 風テーマで、`git` をデコレーターで表示。
- [dangerroom](https://github.com/abbreviatedman/dangerroom) - 情報的で、シンプルであり、最も重要なのはX-Menテーマ。 `git`ステータス、作業ディレクトリ、親ディレクトリ、 `vim`モードの装飾を含む。
- [dango](https://github.com/ann-kilzer/annkilzer.zsh-theme) - 現在のディレクトリおよび `git`ステータスの装飾を含む。
- [danielparks](https://github.com/danielparks/danielparks-zsh-theme) - ダーク背景に最適化。`git` の状態、ユーザー@ホスト（`ssh` セッション中）、前回コマンドの成功／失敗、作業ディレクトリ、Python ビルド環境、前回コマンドの実行時間、および `root` として実行中かどうかをデコレーターで表示。
- [daniloheraclio](https://github.com/daniloheraclio/daniloheraclio-zsh-theme) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)テーマにインスピレーションを得ている。 `git`および最後のコマンドの終了ステータスの装飾を備えている。正しく表示するにはnerdfontが必要。
- [dark-modern](https://github.com/d-exclaimation/vscode-dark-modern.zsh-theme) - `git`の状態および現在のディレクトリへのデコレーターを含む。
- [darkblood-modular](https://github.com/InAnimaTe/darkblood-modular) - 人気のある [darkblood](https://github.com/BinaryMuse/oh-my-zsh/blob/binarymuse/themes/darkblood.zsh-theme)テーマのこのバージョンは、モジュール化およびいくつかの新機能を備えたほぼ完全なリライトにより強化された。
- [darksoku](https://github.com/TooSchoolForCool/darksoku-zsh-theme) - `ys`および [astro](https://github.com/iplaces/astro-zsh-theme)テーマに基づく。
- [dbern](https://github.com/dbernhard-0x7CD/zsh-dbern-theme) - バッテリー状態および負荷平均の装飾を含む。
- [delta (asavoy)](https://github.com/asavoy/delta-zsh-theme) - 分散を減らすためのシンプルなZSHテーマ。iTermの色設定ファイルを含む。
- [delta (dongri)](https://github.com/dongri/delta-zsh-theme) - もう一つのシンプルなテーマ。内蔵された `git`ステータスを備える。
- [delta-prompt](https://github.com/cusxio/delta-prompt) - シンプルなZSHプロンプト。
- [devj121](https://github.com/cjeonguk/devj121-zsh-theme) - `git`装飾にブランチの絵文字を含む。
- [dexter](https://github.com/shvenkat/zsh-theme-dexter) - 右側に重点を置いたテーマ（そのための名前）。
- [dfrx](https://github.com/Dofoerix/Dfrx-Prompt-Theme) - Oh-My-Poshテーマ。現在のディレクトリ、最後のコマンドの実行時間、ルートステータス、時間の装飾を含む。
- [dino](https://github.com/OdilonDamasceno/dino-zsh-theme) - node、golang、flutter、lua、pythonおよびjavaの装飾を含む。また `git`装飾も含む。nerdfontsが必要。
- [dissonance](https://github.com/RyanScottLewis/theme-dissonance-zsh) - カスタム `LSCOLORS` および `LS_COLORS` 設定ファイルを提供し、ダークおよびライトのターミナルテーマともに動作。
- [diy-ys](https://github.com/aprilnops/zsh-theme) - [ys](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/ys.zsh-theme)テーマのバリエーション。ホスト名や時間は含まれない。
- [djkakaroto](https://github.com/djkakaroto/theme-zsh/) - `git`ステータス装飾を含み、すべてのフォントに対応。
- [dkniffin](https://github.com/dkniffin/zsh-theme) - `ruby`バージョンおよび `git`ステータスを含む。
- [dmx](https://github.com/domix/dmx.zsh-theme) - 暗いターミナルウィンドウに最適化。
- [do-you-even-nix](https://github.com/miche1e/do-you-even-nix) - シンプルな電線のようなテーマで、 [nix](https://nixos.org) のパワーを増強します。ユーザー名@ホスト名、現在のディレクトリ、 `git` の状態、nixシェルかどうか、および現在のディレクトリにflake.nixまたはshell.nixファイルがあるかどうかを表示するデコレーターを含みます。
- [domixgit](https://github.com/tariqdomi/ohmyzsh-domixgit) - `git`ステータスおよび現在のディレクトリの装飾を備えたプロンプト。
- [dongri](https://github.com/dongri/dongri.zsh-theme) - シンプルなテーマで、デフォルトブランチと現在のブランチを表示。
- [doodleshell](https://github.com/cdodd/doodleshell-zsh-theme) - ミニマリストなテーマで、`git`、`terraform` および `aws` のステータスデコレーションを含む。
- [doom](https://github.com/CMOISDEAD/doom-zsh) - Doom風。Powerlineに似た見た目。カスタマイズ可能なセグメント、 `git`ステータス、 `rust`、 `Node.js`、 `python`、 `ruby`バージョンの装飾を備える。
- [dp](https://github.com/davidparsson/zsh-dp-theme) - 低コントラストテーマ。現在のgitブランチ、リポジトリが汚れているかどうか、 `$PYENV_VERSION`の値を表示。
- [dr4kk0nnys_v2](https://github.com/Dr4kk0nnys/Dr4kk0nnys_theme_ohmyzsh_v2/) - ダークな背景に適したテーマで、 `git` の状態をデコレートします。
- [dracula](https://github.com/dracula/zsh) - Atom、Alfred、Chrome DevTools、iTerm 2、Sublime Text、Textmate、Terminal.app、Vim、Xcode、ZSH向けのダークテーマ。
- [dragon (jeop10)](https://github.com/jeop10/dragon) - kali linuxにインスピレーションを得ている。 `git`ステータスおよび作業ディレクトリの装飾を含む。
- [dragon (sabertaximi)](https://github.com/sabertazimi/dragon-zsh-theme) - ミニマリズムを採用。 `git`ステータス情報を含む。
- [drkat](https://github.com/katrinaalaimo/drkat-zsh-theme) - [Powerline](https://github.com/powerline/powerline)に似た雰囲気。ディレクトリ、`git`ステータス、ホスト名の装飾を含む。
- [droolmaw](https://github.com/isuke/droolmaw) - に似たカスタマイズ可能なプロンプト。が必要。ユーザー名、現在のディレクトリ、ディレクトリパス、日時、作者、ステータス、言語バージョン、かつ最後のコマンド実行結果に基づくカスタマイズ可能なメッセージを含む。 [Powerline](https://github.com/powerline/powerline) [Nerd Font](https://github.com/ryanoasis/nerd-fonts) `git` `git` `mise`
- [droolscar](https://github.com/isuke/droolscar) - [Powerline](https://github.com/powerline/powerline)のバリエーション。
- [dtheme](https://github.com/OlukaDenis/DTheme) - ソーライズドテキストカラーと`git`に最適化されたテーマ。Unicodeフォントと組み合わせると最も効果的。
- [duckster](https://github.com/ducky/duckster) - [gitster](https://github.com/shashankmehta/dotfiles/blob/master/thesetup/zsh/.oh-my-zsh/custom/themes/gitster.zsh-theme)ZSHテーマのフォークで、より新鮮なデザイン。
- [ducula](https://github.com/janjoswig/Ducula) - Draculaプロジェクトにインスピレーションを得たテーマ。`git`ステータス装飾、ユーザー名とホスト名の略称、仮想環境、現在の作業ディレクトリ、最後のコマンドの返却ステータス、および時間の装飾を含む。
- [dustmod](https://github.com/bmihaila/dustmod) - oh-my-zsh内の[dst](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/dst.zsh-theme)テーマから派生したテーマ。
- [dwep](https://github.com/dwep1337/dwep-zsh-theme) - ユーザー名@ホスト名、現在のディレクトリ、`git`ステータスの装飾を含む。
- [dyzsh](https://github.com/daotoyi/dyzsh-zsh-theme) - [astro](https://github.com/iplaces/astro-zsh-theme)に基づくテーマ。`git`ブランチ＆ハッシュ、現在のディレクトリ、ユーザー、ホストおよび時間の装飾を含む。
- [earthshaker](https://github.com/remusearthshaker/earthshaker.zsh) - 開発者に暖かさ、控えめな力、そして接地した美しさを好む人々向けのミニマリズムと自然なデザインのZSHテーマ。現在のディレクトリ、`git`ステータス、ユーザー名@ホスト名の装飾を含む。
- [easytocloud](https://github.com/easytocloud/oh-my-easytocloud) - [agnoster](https://github.com/agnoster/agnoster-zsh-theme)に基づくテーマ。AWS環境、`git`ステータス、ユーザー名、現在のディレクトリの装飾を含む。
- [eckig](https://github.com/fouladi/eckig) - UTF-8アイコンを用いたミニマリズムテーマ。`git`ステータス装飾と時計を含む。
- [efritas](https://github.com/erikfritas/efritas) - ユーザー名、ホスト名、`venv`、`rvm`、`git`ステータス装飾を含む。
- [eggshausted](https://github.com/inutano/eggshausted) - エラーメッセージが頻繁に表示される人々向けの`git`対応テーマ。
- [elagoht](https://github.com/Elagoht/Elagoht.zsh-theme) - ユーザー@ホスト名、現在のディレクトリ、仮想環境、`git`ステータス、`ssh`セッションでの実行状態、かつ最後のコマンドの実行時間の装飾を含む。
- [elessar](https://github.com/fjpalacios/elessar-theme) - `git`対応テーマで、[gitster](https://github.com/shashankmehta/dotfiles/blob/master/thesetup/zsh/.oh-my-zsh/custom/themes/gitster.zsh-theme)に基づく。Powerline対応フォントが必要。
- [elsa](https://github.com/faycito/elsa) - ルートステータス、pwd、`git`ステータス装飾を含む。
- [emojeer](https://github.com/lxynox/emojeer-ohmyzsh) - エモジーフレンドリー[oh-my-zsh](https://ohmyz.sh/)テーマ。
- [emoji](https://github.com/meiokubo-zz/emoji.zsh-theme) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)oh-my-zshテーマに基づき、`git`プロンプトシンボルをエモジに置き換えて、より明確な表示を実現。
- [emojify](https://github.com/retro49/emojify) - プロンプトに異なるタイプのエモジを表示するテーマ。`git`ステータス、現在のディレクトリ、ユーザー@ホスト名の装飾を含む。
- [emojirussell](https://github.com/Bergiu/emojirussell) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)oh-my-zshテーマに基づき、現在の作業ディレクトリ、最後のコマンドの終了ステータス、`git`ブランチおよびステータスのステータス装飾を含む。
- [endless-dog](https://github.com/qwelyt/endless-dog) - grml-zsh-configを模倣したoh-my-zsh互換テーマ。
- [enlightenment](https://github.com/w33tmaricich/enlightenment) - `git`ステータス、`vi`モードインジケーター、かつ最後のコマンド実行時間の装飾を含む。
- [enormous](https://github.com/leighmcculloch/zsh-theme-enormous) - テอรミナルに非常に多くのスペースを消費する。
- [erfan](https://github.com/ekm507/erfan-zsh-theme) - [af-magic](https://github.com/andyfleming/oh-my-zsh)と[macovsky](https://github.com/championswimmer/oh-my-zsh/blob/master/themes/macovsky.zsh-theme)テーマの組み合わせ。`git`と`virtualenv`ステータス装飾を含む。
- [eriner](https://github.com/zimfw/eriner) - Powerlineにインスピレーションを得た[agnoster](https://github.com/agnoster/agnoster-zsh-theme)プロンプトテーマのZimフォーク。`git`ステータス装飾を含む。
- [es6](https://github.com/suissa/oh-my-zsh-theme-es6) - `git`ステータスと現在のディレクトリへのパスの切り詰めを装飾する。
- [escape](https://github.com/fesmjke/escape/) - `git`情報、ユーザー名、時間、現在のディレクトリ、かつ最後のコマンドの終了ステータスの装飾を含む。
- [eubw](https://github.com/eptaccio/eubw-oh-my-zsh-theme) - シンプルな`git`情報を持つテーマ。
- [eucalyptus](https://github.com/relastle/eucalyptus) - ミニマリズムのviモードユーザー向けのシンプル1行テーマ。[agnoster](https://github.com/agnoster/agnoster-zsh-theme)および[powerlevel9k](https://github.com/bhilburn/powerlevel9k)にインスピレーションを得た。`git`ステータスインジケーター、`vi`モードインジケーター、現在のディレクトリ、現在のパスを含む。
- [even-more-emojis](https://github.com/odunlop/even-more-emojis) - [emoji](https://github.com/meiokubo-zz/emoji.zsh-theme)に追加されたエモジと情報のカスタマイズバージョン。`git`ステータス、現在のディレクトリ、かつ最後のコマンドの終了ステータスの装飾を含む。
- [excess](https://github.com/davydovanton/excess.zsh-theme) - シンプルなZSHカラーテーマ。
- [eyerelax](https://github.com/code-brewer/EyeRelax-zsh-theme) - ミニマリズムテーマで、`git`ステータス、venv/anaconda環境、最後のコマンドの実行時間、現在のディレクトリの装飾を含む。
- [ez-pz](https://github.com/mangosmoothie/ez-pz) - ミニマリズムテーマで、`git`ステータス装飾を含み、[bureau](https://github.com/isqua/bureau)にインスピレーションを得たテーマ。
- [fall](https://github.com/jottenlips/seasonal-zshthemes) - ミニマリズムテーマで、フォールアイコンを用いる。`git`ステータス装飾を含む。
- [fattyarrow](https://github.com/sohnryang/fattyarrow) - ダーク背景に最適化されたシンプルなZSHプロンプト。
- [fbi](https://github.com/bateman/fbi-zsh-theme) - Powerlineにインスピレーションを得た[Bureau](https://github.com/isqua/bureau)のフォーク。`nvm`環境、`git`ステータス、ユーザー@ホスト名、現在のディレクトリの装飾を含む。
- [fdT2K](https://github.com/FDT2k/FDT2K-theme)- [agnoster](https://github.com/agnoster/agnoster-zsh-theme)に基づき、仮想環境、最後のコマンドステータス、`nvm`、`docker machine`および`git`、`hg`および`bzr`ステータス装飾をプリセットしたテーマ。
- [fe80](https://github.com/fe80/fe80.zsh-theme) - `git`情報、現在のディレクトリ、ユーザー@ホスト名、時間、かつ最後のコマンドの返却コード（非ゼロの場合）の装飾を含む。
- [feder](https://github.com/samfeder/mac-themes/blob/master/feder.zsh-theme) - シンプルで、クリーンで、互換性があり、意味のあるテーマ。Linux、Unix、WindowsでのANSIカラーでテスト済み。
- [felipec](https://github.com/felipec/zsh-prompt-felipec) - シンプルなテーマで、現在のディレクトリ、`git`の状態、最後のコマンドの終了コード、およびルート状態にデコレーターを備えている.
- [filthy](https://github.com/molovo/filthy) - 非常にクリーンなZSHプロンプト。GitHubリポジトリ内にある場合に、パスとのルートへのデコレーター、の状態、最後に実行されたコマンドの終了状態に基づくプロンプト文字、および最後に実行されたコマンドの実行時間などを含む. `git` `git` `git`
- [firefoxic](https://github.com/firefoxic/firefoxic-zsh-theme/) - [Bureau](https://github.com/isqua/bureau)のフォークで、nodeと`git`のデコレーターに調整を加えたもの.
- [fish (raniconduh)](https://github.com/Raniconduh/zshfish) - ZSHテーマで、デフォルトの`fish`シェルテーマに似ている。`git`の状態にデコレーターを備えている.
- [fish (sbfkcel)](https://github.com/sbfkcel/oh-my-zsh-theme) - シンプルなテーマで、`git`の状態、現在のディレクトリ、ユーザー名にデコレーターを備えている.
- [fishbone++](https://github.com/EYH0602/Fishbonepp) - [oh-my-fish](https://github.com/oh-my-fish/oh-my-fish)テーマのfishboneと[oh-my-zsh](https://github.com/ohmyzsh)テーマの[typewritten](https://github.com/reobin/typewritten)に影響を受けたテーマ。現在のディレクトリ、`git`の状態、最後のコマンドの終了状態にデコレーターを備えている.
- [fishy-lite](https://github.com/sudorook/fishy-lite) - オリジナルの[fishy](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#fishy)テーマ（oh-my-zsh）のフォークで、不要な部分を削除し、読み込み速度を向上させたもの。バッテリー表示と`git`の状態表示を含み、プロンプトの右側に有効化可能.
- [fishy2](https://github.com/akinjide/fishy2) - ZSHテーマで、[original fishy](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#fishy)にインスパイアされたもの.
- [fluent-git](https://github.com/RobertKozak/fluent-git) - 最後のコマンドの実行時間、エラーコード、ホスト名、ユーザー名、`git`の状態、Kubernetesクラスタと名前空間、パスとSSH接続状態を表示する.
- [flux](https://github.com/jmg-duarte/flux-zsh) - シンプルで無駄のないテーマで、`git`の状態にデコレーターを備えている.
- [forerunner](https://github.com/OpenReplyDE/zsh-forerunner) - [powerlevel9k](https://github.com/bhilburn/powerlevel9k)にカスタム設定。`git`の状態にデコレーターを備えている.
- [fortuity](https://github.com/VGamezz19/oh-my-zsh-fortuity-theme) - 最後のコマンドの状態、`git`情報、現在のディレクトリを表示する.
- [frank](https://github.com/ronmackley/frank-theme) - フレンクは要点を簡潔に、読みやすく1行で表示する。重要な情報だけを伝え、それ以外は一切言わない.
- [friendly-fiesta](https://github.com/bruino/friendly-fiesta) - [terminal-party](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/terminalparty.zsh-theme)テーマのフォーク.
- [frisk-arrow](https://github.com/BakeRolls/frisk-arrow) - [frisk](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/frisk.zsh-theme) oh-my-zshテーマに基づいたテーマ.
- [frisk-red](https://github.com/aishsingh/zsh/tree/master/frisk-red) - oh-my-zshから導入された[frisk](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/frisk.zsh-theme)テーマの赤色バージョン.
- [fritz](https://github.com/fritzccc/fritz-zsh-theme) - ダークな背景に適したテーマ。`git`の状態にデコレーターを備えている.
- [frlo](https://github.com/fiorillo/frlo) - コンピュータのホスト名を使って、（希望される）ユニークな3色テーマを生成し、プロンプトに表示することで、すぐにどのマシンにログインしているかを確認できる.
- [funkyberlin](https://github.com/Ottootto2010/funkyberlin-zsh-theme) - カラフルな2行テーマで、`git`と`svn`に対応している.
- [funkydrac](https://github.com/warshanks/funkydrac) - 複数のDracula風のomzテーマ（[funky](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/funky.zsh-theme)に基づく）と、[oh-my-posh](https://github.com/JanDeDobbeleer/oh-my-posh)テーマ（[alien](https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/themes/aliens.omp.json)に基づく）.
- [furio](https://github.com/hectorpalmatellez/furio-theme) - [Cloud](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/cloud.zsh-theme) oh-my-zshテーマのフォーク。色とエモジが異なる.
- [furry-umbrella](https://github.com/kb10uy/zsh-theme-furry-umbrella) - カラフルなテーマ。ダークな背景に特に適している.
- [gabriel2m](https://github.com/gabriel2m/gabriel2m-oh-my-zsh-theme) - シンプルなテーマで、現在のディレクトリと`git`の状態にデコレーターを備えている.
- [gaia](https://github.com/gcaracuel/gaia.zsh-theme) - 元々は[Bureau](https://github.com/isqua/bureau)のフォークで、プロンプトにKubernetes、virtualenv、rbenv、Javaバージョンなどの仮想環境情報を追加。`git`の状態統合を含む.
- [gal](https://github.com/x6r/gal) - シンプルなテーマで、[gallois](https://github.com/ohmyzsh/ohmyzsh/commits/master/themes/gallois.zsh-theme)に基づいている.
- [gallifrey-war](https://github.com/cdubos-fr/gallifrey-war) - [gallifrey](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#gallifrey)にインスパイアされたもの。`git`情報、user@host、現在のディレクトリにデコレーターを備えている.
- [gallium](https://github.com/RickConsole/gallium) - [gal](https://github.com/x6r/gal)と[gallois](https://github.com/ohmyzsh/ohmyzsh/commits/master/themes/gallois.zsh-theme)にインスパイアされたシンプルテーマ。`username@host`、現在のディレクトリ、`git`の状態にデコレーターを備えている.
- [garden](https://github.com/fecat233/garden) - ダークなターミナル背景に適しており、`git`の状態にデコレーターを備えている.
- [garrett](https://github.com/chauncey-garrett/zsh-prompt-garrett) - 必要な情報が、必要なときに表示されるプリズトプロンプト.
- [gawaine](https://github.com/nicolaracco/gawaine.zsh-theme) - ニコラ・ラッコのテーマ。`rvm`と`git`プラグインが必要。
- [gbt](https://github.com/jtyr/gbt) - Go Bullet Trainは、Bullet Trainと[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)にインスパイアされた非常にカスタマイズ可能なプロンプトビルダーで、非常に高速に動作する。多くの異なるステータスカーを含む。[prompt-forwarding](https://github.com/jtyr/gbt#prompt-forwarding)機能により、ユーザーが定義したプロンプトをリモートマシンに転送し、SSHですべてのマシン（Docker、Kubectl、Vagrant、MySQL、Screenなど）において同じように見えるプロンプトを実現できる。ただし、リモートマシンにインストールする必要はない。
- [gcloud-prompt](https://github.com/ocadaruma/zsh-gcloud-prompt) - プロンプトに現在のgcloud設定を表示する.
- [gentoo](https://github.com/ikelos/gentoo-zsh-theme) - oh-my-zshの`gentoo`テーマを、omzユーザー以外に別リポジトリに分離したもの.
- [geometry](https://github.com/geometry-zsh/geometry) - 極めてシンプルなZSHテーマで、任意の関数を左プロンプトまたは（非同期）右プロンプトに即座に追加できる.
- [geometryHostInfo](https://github.com/Fuzen-py/GeometryHostInfo) - [geometry](https://github.com/geometry-zsh/geometry)テーマにホスト情報の追加を実施している.
- [gerry](https://github.com/GerryLarios/gerry-prompt) - [bureau](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#bureau)に基づき、`git`の状態、現在の時刻、ユーザー名、ホスト名、現在のディレクトリにデコレーターを備えている.
- [get-to-work](https://github.com/Diogo13Antunes/Get_To_Work) - シンプルなデザインで、`git`の状態、仮想環境、時刻にデコレーターを備えている.
- [gg](https://github.com/YourBrightSmile/ggZshTheme) - 時刻と`git`の状態にデコレーターを備えている.
- [ghoti](https://github.com/lonr/ghoti) - `fish-shell`のデフォルトプロンプトを模倣。`git`のデコレーターを備えている.
- [gianu-alternative](https://github.com/zbentzinger/gianu-alternative-theme) - [OMZ Gianu](https://github.com/ohmyzsh/ohmyzsh/blob/61dd3682e69aa990a8a3589c5c61ea2e1edf8312/themes/gianu.zsh-theme)の代替テーマで、権限に基づいてプロンプトを変更。`git`の状態と現在のディレクトリにデコレーターを備えている。
- [gideon](https://github.com/userhiren/oh-my-zsh-gideon-theme) - [avit](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/avit.zsh-theme)をインスピレーションとして、`git`のデコレーション、IPアドレス、ホスト名およびパスを含む。
- [gimbo](https://github.com/gimbo/gimbo.zsh-theme) - 機能が豊富で、少しのエイジング（見た目）とコンテキストに応じた追加行を備えた[purepower](https://github.com/romkatv/dotfiles-public/blob/master/.purepower)の変種。`git`のステータスデコレーション、履歴番号、ユーザー名/ホスト名のコンテキスト、ディレクトリのステータス、失敗した最後のコマンドのステータス、および存在する場合のPythonのvirtualenv名を含む。
- [gimme](https://github.com/nralbrecht/gimmezsh) - ZSH用のシンプルなテーマで、`git`の統合を実現。[gitsome](https://github.com/mtully/gitsome)のテーマをインスピレーションとしている。
- [girazz](https://github.com/mdentremont/girazz) - gnzhテーマへの修正で、右側のプロンプトに`vi`モードを追加。
- [git-kali](https://github.com/Green0wl/zsh-git-kali-prompt) - をベースに、のステータス、ユーザー名@ホスト名、現在のディレクトリのデコレーションを含む。 [An informative `git` prompt for kali](https://github.com/olivierverdier/zsh-git-prompt) `git`
- [git-prompt (awgn)](https://github.com/awgn/git-prompt) - 速い`git`プロンプト（ZSH用）で、`bash`、`zsh`および`fish`に対応。
- [git-prompt (olivierverdier)](https://github.com/olivierverdier/zsh-git-prompt) - 現在の`git`リポジトリに関する情報を表示。特にブランチ名、リモートブランチとの差異、ステージされたまたは変更されたファイル数など。
- [git-prompt (woefe)](https://github.com/woefe/git-prompt.zsh) - 速く、カスタマイズ可能で、純粋なシェル、非同期の`git`対応プロンプト（ZSH用）で、Olivier Verdierの[zsh-git-prompt](https://github.com/olivierverdier/zsh-git-prompt)を強くインスピレーションとしており、fishシェルの"Informative VCS"プロンプトに非常に類似。
- [git-prompt-kit](https://github.com/olets/git-prompt-kit) - 機能豊富で、高性能なGit対応ZSHプロンプト（テーマ）を最小限のコードで構築できるカスタマイズ可能なコンポーネントセット。
- [git-simple](https://github.com/ZakharEl/git-simple-theme) - 詳細な`git`ステータスデコレーションを含むシンプルなテーマ。
- [git-venv-prompt](https://github.com/walkingshamrock/zsh-git-venv-prompt) - Zshプロンプトに、現在のPythonのvirtual環境およびGitステータス（非同期）に関する情報を追加。Gitステータスの非同期更新はzsh-asyncを使用し、virtual環境はプロンプトの2行目で表示。
- [gitbash](https://github.com/eddieantonio/gitbash-zsh-theme/) - [Git for Windows](https://gitforwindows.org/)のデフォルトプロンプトを模倣。`git`ステータス、ユーザー@ホスト、現在のディレクトリのデコレーションを含む。
- [github](https://github.com/Debdut/github.zsh-theme/) - GitHub風のテーマ。現在のディレクトリ（切り詰め）、ホスト名、`git`ステータスのデコレーションを表示。ライトおよびダークモードを含み、macOSおよびLinuxでのシステム設定を検知。
- [gitneko](https://github.com/gynamics/zsh-gitneko/) - neko `(^>ω<^)`プロンプトを備え、`git`ステータス情報を含む。
- [gitprompt.sh](https://github.com/danieldietrich/gitprompt.sh) - およびに対応。256色対応。ステータスおよび現在のディレクトリのデコレーションを含む。 `bash` `git` `git`
- [gitsome](https://github.com/mtully/gitsome) - `git`情報を持つ非常にシンプルなプロンプト。[Flat Terminal](https://github.com/ahmetsulek/flat-terminal)の色スケールに最適化。
- [gitstatus](https://github.com/kimyvgy/gitstatus-zsh-theme) - コマンドおよび`git`ステータスデコレーションを表示。
- [gitster (shashankmehta)](https://github.com/shashankmehta/dotfiles/blob/master/thesetup/zsh/.oh-my-zsh/custom/themes/gitster.zsh-theme) - リポジトリにいる場合、リポジトリのルートフォルダからの場所を表示。リポジトリにいない場合、ホームディレクトリからの相対パスを表示。 `git` `git` `git` `~`
- [gitster (zimfw)](https://github.com/zimfw/gitster) - shashankmehtaの[gitster](https://github.com/shashankmehta/dotfiles/blob/master/thesetup/zsh/.oh-my-zsh/custom/themes/gitster.zsh-theme)プロンプトテーマのZim fork
- [gitsterv2](https://github.com/xakraz/gisterv2-zsh-theme) - オリジナルの[gitster](https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes#gitster)テーマからフォーク。
- [gk3000](https://github.com/gk3000/gk3000-oh-my-zsh-theme) - `git`ステータスデコレーションおよび現在のディレクトリへのフルパスを含む。
- [glider](https://github.com/MrRedacted/zsh-glider) - [strug](https://github.com/triplepointfive/oh-my-zsh/blob/master/themes/strug.zsh-theme)をベースに、`git`ステータス、ユーザー名、ホスト名および現在のディレクトリのデコレーションを含む。
- [glimmer](https://github.com/martnu/glimmer) - `git`ブランチ、時間、ユーザー@ホストのデコレーションを含む。
- [gn-z11](https://github.com/xxidbr9/zsh_GN-z11-theme) - `git`ステータスおよび最後のコマンドの終了ステータスのデコレーションを含む。
- [gndx](https://github.com/gndx/gndx-zsh-theme) - `git`ステータス、ホスト名、ディレクトリおよび最後のコマンド終了ステータスのデコレーションを含む。
- [gnrnzh](https://github.com/PaoloneM/gnrnzh-zsh-theme) - oh-my-zshから[gnzh.zsh-theme](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/gnzh.zsh-theme)のカスタマイズ。
- [gocilla](https://github.com/goranvasic/gocilla-iterm-zsh) - iTerm 2およびZSH用のテーマ。`git`ステータス、ユーザー@ホスト、パスおよび日付のデコレーションを含む。
- [golden-prompt](https://github.com/Goldeneye128/golden-prompt) - fish風の機能を組み込んだシンプルプロンプトで、`git`ステータスおよび現在のディレクトリのデコレーションを含む。
- [goprompt (erniebrodeur)](https://github.com/erniebrodeur/goprompt) - ZSH用のコンパクトな2行プロンプト。現在のディレクトリ、`git`状態、ユーザー、オプションのSSHホスト、ローカル時間のデコレーションを含み、全幅のターミナルを維持。
- [goprompt (NonLogicalDev)](https://github.com/NonLogicalDev/shell.async-goprompt) - 非常に速い。切り詰められた現在のディレクトリ、最後のコマンドの実行時間および終了ステータス、vimモードのインジケータ、`git`情報、日時および親プロセス名のデコレーションを含む。
- [gops](https://github.com/noxer/gops) - 速いpowerline風プロンプト。`git`ステータス、現在のディレクトリ、ルートステータスのデコレーションを含む。
- [gorchak](https://github.com/evgenygorchakov/oh-my-zsh-gorchak-theme/) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#robbyrussell)および[af-magic](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#af-magic)をインスピレーションとしている。`git`情報およびNode.jsバージョンのデコレーションを含む。
- [gozilla-lite](https://github.com/jannik-el/gozilla-lite) - の標準的なテーマをベースに。現在のディレクトリ、ブランチ、右側プロンプトにリアルタイムのステータスを含む。 [oh-my-zsh](https://ohmyz.sh) [gozilla](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#gozilla) `git` `git`
- [grayt](https://github.com/evanthegrayt/grayt-zsh-theme) - シンプルで情報量の多いテーマ。`git`のデコレーションおよび最後のコマンドの返却ステータスを含む。
- [green-lambda](https://github.com/Ishidawg/minimal-green-lambda) - ミニマリストなLambdaテーマ。`git`のデコレーションを含む。
- [greencastle](https://github.com/GustavGroenborg/greencastle-zsh-theme/) - 非常に長いブランチ名をサポートし、プロンプトを大きく切り詰めずに表示できるミニマリズムテーマ。[jonathan theme](https://github.com/thlorenz/oh-my-zsh/blob/master/themes/jonathan.zsh-theme)および[robby russel theme](https://github.com/thlorenz/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme)をインスピレーションとしている。現在のディレクトリ、`git`情報、最後のコマンドの終了ステータスのデコレーションを含む。
- [greenclean](https://github.com/dmicha16/greenclean) - [akz92/clean](https://github.com/akz92/clean)のフォークで、少しの緑色と右側の恒久的な時計を追加。
- [griffin](https://github.com/GriffinLedingham/griffin.zsh-theme) - ミニマリスト。`git`ステータスデコレーションを含む。
- [grs](https://github.com/gersontpc/zsh-theme-grs) - `git`ステータス、ユーザーIDおよび作業ディレクトリのデコレーションを含む。
- [gruvbox (hgaiser)](https://github.com/hgaiser/gruvbox-zsh) - [gruvbox](https://github.com/morhetz/gruvbox) `vim`プラグインから色を設定。
- [gruvbox (sbugzu)](https://github.com/sbugzu/gruvbox-zsh) - [agnoster](https://gist.github.com/agnoster/3712874)に基づき、同様の色を [gruvbox](https://github.com/morhetz/gruvbox) `vim` プラグインから使用しています。
- [guezwhoz](https://github.com/guesswhozzz/guezwhoz-zshell) - ミニマリスト。`git`ステータスデコレーションを含む。
- [gugulenok](https://github.com/gugulen0k/gugulenok/) - ダークモードとライトモードの両方を備え、`git`のステータス、時間、現在ディレクトリのデコレーターを含みます。
- [guri](https://github.com/victorfsf/guri) - シンプルで高速なOh-My-Zshテーマ。[Pure](https://github.com/sindresorhus/pure)のデザインに基づいています。
- [gus](https://github.com/gusye1234/Gus-zsh-theme/) - 変更可能な一時テーマ。コンダ、`git`情報、現在ディレクトリのデコレーターを含みます。
- [hackersaurus](https://github.com/bhilburn/hackersaurus) - `git`のステータスと前回実行コマンドの終了コードをプロンプトに埋め込んだテーマ。[powerlevel9k](https://github.com/bhilburn/powerlevel9k)と関連しています。
- [halfeld](https://github.com/IgorHalfeld/halfeld-zsh-theme) - ミニマリズムテーマで、`git`のデコレーターを含む。
- [halil](https://github.com/5m0k3r/zsh-themes) - oh-my-zshの[amuse](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/amuse.zsh-theme)テーマのフォーク。
- [hana-matcha](https://github.com/arturoalviar/hana-matcha-zsh-theme) - 最初の文字が「花（hana）」という漢字。これは「フラワー」という意味。テーマはDSA Hanaというキーキャップセットにインスピレーションを得ています。[hana atom](https://github.com/arturoalviar/hana-matcha-syntax)テーマとよく相性が良い。`git`のステータスデコレーションを含みます。
- [handy](https://github.com/hanleylee/handy) - カラフルで軽量なテーマ。ルートステータス、`git`ステータス、現在ディレクトリ、`user@hostname`のデコレーションを表示します。
- [hanpen](https://github.com/kojole/hanpen.zsh-theme) - `git`のブランチとステータス、前回コマンドの終了コード、前回コマンドの実行時間が`ZSH_THEME_HANPEN_CMD_MAX_EXEC_TIME`を超える場合に表示します。
- [hapin](https://github.com/hanamiyuna/hapin-zsh-theme/blob/master/hapin.zsh-theme) - オキシデに基づき、`git`のステータスデコレーションと現在ユーザー/ホスト情報を含みます。
- [happy-coding](https://github.com/lexhuismans/happy-coding/) - [passion](https://github.com/ChesterYue/ohmyzsh-theme-passion)の簡易版。時間、`git`ブランチ、前回コマンドの実行時間、前回コマンドの終了ステータスのデコレーターを含みます。
- [hcompact](https://github.com/fusion809/zsh-theme) - 時間、OS（Linuxの場合にディストリビューションも含む）、ディレクトリ、rootとして実行中かどうかを表示します。
- [headline](https://github.com/Moarram/headline) - Gitのステータス情報を含むレスポンス性のあるZSHテーマ。プロンプトの上に色付きの線を表示します。
- [heapbytes](https://github.com/heapbytes/heapbytes-zsh) - 現在ディレクトリ、VPN接続時にtun0 IP、VPN接続でない場合のwlan IP、`git`情報のデコレーターを含みます。
- [heart](https://github.com/gko/heart) - ライト背景用のハートテーマ。
- [hedroed-bureau](https://github.com/Hedroed/hedroed-bureau.zsh-theme) - [bureau](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#bureau)に基づき、`git`ステータスデコレーションと`npm`ステータスを追加。
- [helb](https://github.com/helb/helb.zshtheme) - Gentooの古い`bash`テーマを大まかに基にしています。`git`情報、直前のコマンドの戻り値を表示し、一般ユーザー（`$`）とroot（`#`）でユーザー名の色とプロンプト文字を変えます。
- [hematite](https://github.com/bigdave/hematite) - タイムに応じて実際に有用なステータスデコレーションのみを表示するミニマリストなプロンプト。
- [hex](https://github.com/hectorBrown/hex-zsh) - およびに基づいており、そのうちのはに基づいています。現在ディレクトリ、ステータス情報、アクティブなPython virtualenv、前回実行コマンドの終了ステータスのデコレーターを含みます。Powerline対応フォントが必要です。 [bira](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#bira) [gruvbox](https://github.com/sbugzu/gruvbox-zsh) [agnoster](https://gist.github.com/agnoster/3712874) `git`
- [hexagon](https://github.com/diogoazevedos/hexagon) - ミニマリストなZSHテーマ。[geometry](https://github.com/geometry-zsh/geometry)に基づいています。
- [hfulldate](https://github.com/fusion809/zsh-theme) - 時間、日付、OS（Linuxの場合にディストリビューションも含む）、ディレクトリ、rootとして実行中かどうかを表示します。
- [hhktony](https://github.com/hhktony/hhktony.zsh-theme) - RobbyRussellテーマにインスピレーションを得たプロンプト。SSH接続ステータスを表示します。
- [hietan](https://github.com/Hietan/Hietan_ZshTheme) - 現在ディレクトリ、日時、`git`ステータス、前回実行コマンドの終了値のデコレーターを含みます。[Nerd Font](https://github.com/ryanoasis/nerd-fonts)が必要です。
- [hijack](https://github.com/thegodheehee/hijack-zsh) - ユーザー@ホスト名、現在ディレクトリ、`git`情報のデコレーターを含みます。
- [hina](https://github.com/ucpr/hina) - `golang`で書かれたテーマ。`git`ステータスデコレーションとKubernetesコンテキストを含みます。
- [hip-fellow](https://github.com/haitaim/hip-fellow) - `git`ステータスデコレーションを含み、標準フォントと互換性があります。
- [hipstersmoothie-p9x](https://github.com/hipstersmoothie/PowerlevelHipstersmoothie) - [powerlevel9k](https://github.com/bhilburn/powerlevel9k)のバリエーション。
- [ho-my-zsh](https://github.com/Mboukhal/hoMyZsh_theme) - 現在のディレクトリと`git`情報の装飾を含む。
- [hoffish](https://github.com/emilHof/hoffish-zsh-theme) - [agnoster](https://github.com/agnoster/agnoster-zsh-theme)テーマと[fish](https://fishshell.com/)シェルが子にZSHテーマを持つ場合の想定。`git`ステータス、現在ディレクトリまでの短縮パス、rootステータス、前回コマンドの終了ステータス、アクティブなPython virtualenvのデコレーターを含みます。Powerlineフォントと[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)、[shrink-path](https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/shrink-path/shrink-path.plugin.zsh)プラグインが必要です。
- [hogbal](https://github.com/hogbal/hogbal.zsh-theme) - ダークな背景と256色のターミナルプログラムで最も効果的です。`virtualenv`、`git`情報、`username@hostname`、現在ディレクトリのデコレーターを含みます。
- [home](https://github.com/sheerun/home) - かわいいと短い1行テーマで、安心感をもたらします。
- [hometown](https://github.com/olets/hometown-prompt) - 機能豊かで高速な`git`対応ZSHテーマ。ユーザー、ホスト、時間、現在の作業ディレクトリとその親、Gitリポジトリ内の詳細なGitステータスをセグメントとして含みます。
- [honukai-iterm](https://github.com/oskarkrawczyk/honukai-iterm-zsh) - Honukaiテーマとoh-my-zshおよびiTerm 2の色。
- [hoozeeth](https://github.com/hooay233/Hoozeeth) - ミニマリストなテーマ。ユーザー@ホスト名、日時、現在の作業ディレクトリのデコレーターを含みます。
- [horizontal](https://github.com/nuimk/horizontal) - 水平分離線を備えた2行プロンプト。
- [hornix](https://github.com/fusion809/zsh-theme) - 時間と日付、OS（Linuxの場合にディストリビューションも含む）、ディレクトリ、rootとして実行中かどうかを表示します。
- [horse-sh](https://github.com/emileswarts/horse-sh) - 非常にミニマリズムなブラウン／レッドZSHテーマ。
- [htb](https://github.com/ibyf0r3ns1cs/zsh-htb-theme) - HackTheBoxのpwnboxにインスピレーションを得たテーマ。ユーザー@ホスト、IPアドレス、現在ディレクトリのデコレーターを含みます。
- [hub](https://gist.github.com/hub23/c226b1c77446e099f7684b0d21c6b22a) - シンプルで洗練されたデザイン。実行された最後のコマンドのリターンコードを表示。
- [humbled](https://github.com/saravanabalagi/zsh-theme-humbled) - シンプルで謙虚なテーマ。左寄せの `condaenv`、`virtualenv` および `git` ステータスを含む。[condaenv](https://github.com/saravanabalagi/zsh-plugin-condaenv) プラグインが必要。
- [hyper](https://github.com/willmendesneto/hyper-oh-my-zsh) - ハイパーカスタム・テルミナルテーマと連携。`git` ステータスの装飾を含む。
- [hyperzsh](https://github.com/tylerreckart/hyperzsh) - 複雑な情報は一切表示せず、現在のブランチとリポジトリの状態を簡潔に表示。
- [iamskok](https://github.com/iamskok/iamskok.zsh-theme) - ダークな背景に最適。
- [iay](https://github.com/aaqaishtyaq/iay) - Rustで書かれた `{ba,z}sh` プロンプト。現在のディレクトリと `git` ステータスの装飾を含む。
- [ice](https://github.com/Lenart12/ice.zsh-theme) - 非常に軽く改良された [bureau](https://github.com/isqua/bureau) テーマと [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme) の組み合わせ。
- [ichirei](https://github.com/ichirei/ichirei.zsh-theme) - カラフル。`git` ステータス、時間、現在のディレクトリの装飾を含む。[Nerd Font](https://github.com/ryanoasis/nerd-fonts) が必要。
- [icicle](https://github.com/JamesConlan96/Icicle) - `git` ステータスの装飾と、rootとして実行されているかどうかを含む。
- [igeek](https://github.com/Saleh7/igeek-zsh-theme) - 新しいテルミナルセッション開始時にシステム情報を表示。
- [iggy](https://github.com/eugenk/zsh-prompt-iggy) - 非常に楽しい、Powerlineスタイルの、`git` にのみ対応する **prezto 限定** テーマ。
- [igorsilva](https://github.com/igor9silva/igorsilva-zsh-theme) - 現在のディレクトリ、カスタマイズ可能な区切り文字、現在のブランチ、`git` ステータスの装飾を表示。
- [iguanidae](https://github.com/btd1337/iguanidae-zsh-theme) - `git`、`nvm` および `venv` の装飾を含む。
- [illusion](https://github.com/shabane/illusion) - ユーザー名、現在の作業ディレクトリ、`git` ステータス、最後のコマンドの状態の装飾を含む。
- [illuvia-gitster](https://github.com/lopezator/lluvia-gitster) - [ergenekonyigit/lambda-gitster](https://github.com/ergenekonyigit/lambda-gitster) のフォーク。スペースの改善と新しいアイコンを含む。`git` ステータス情報を含む。
- [imp](https://github.com/igormp/Imp) - [zork](https://github.com/Bash-it/bash-it/wiki/Themes#zork) をベースにし、ダーク背景に最適化。
- [imranic](https://github.com/alimranahmed/zsh-imranic-themes) - ミニマリズムを採用。`git` ステータス、Python virtualenv、rvm Rubyバージョン、condaバージョン、kubeステータス、現在のディレクトリの装飾を含む。
- [infernus](https://github.com/jshiell/infernus-zsh-theme) - ミニマリズムを採用。ダーク背景に特に適している。
- [infinite](https://github.com/The-Infinitys/zsh-infinite) - 高度にカスタマイズ可能で動的であるZSHテーマ。Rustで書かれており、InfiniteはZSHプロンプトの外観を管理する強力なCLIツールを提供し、動的コンテンツ、高度な色付け、ユニークな視覚的セパレータを可能にする。
- [infoline](https://github.com/hevi9/infoline-zsh-theme) - シンプルなテーマ。`git` ステータス、バックグラウンドジョブ、リモートホスト、その他情報を表示。
- [integral](https://github.com/Readf0x/integral-prompt) - 数学風デザイン。時間、現在のディレクトリ、`git` ステータスの装飾を含む。
- [inthedeepspace](https://github.com/alionapermes/inthedeepspace/) - [intheloop](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#user-content-intheloop) をベースにし、[vim-deep-space](https://github.com/tyrannicaltoucan/vim-deep-space) にインスパイアされたテーマ。
- [intheloop-powerline](https://github.com/zyphrus/intheloop-powerline) - [intheloop](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/intheloop.zsh-theme) テーマを拡張し、Powerlineフォントを使用する。
- [itg](https://github.com/itsthatguy/itg.zsh-theme) - itsthatguyのテーマ。
- [itlbv](https://github.com/itlbv/itlbv-ohmyzsh-theme) - ミニマリズム。`git` ステータスと現在のディレクトリの装飾を含む。
- [ittecture](https://github.com/ittecture/ittecture-omz-theme) - 現在のディレクトリと`git`情報の装飾を含む。
- [ivabus](https://github.com/ivabus/ivabus-zsh-theme) - GitHub Codespacesプロンプトにインスパイアされたテーマ。`git` ステータス、ユーザー名、現在のディレクトリの装飾を含む。
- [ivy](https://github.com/ivyhjk/ohmyzsh-theme-ivy) - ダーク背景に最適。ユーザー@ホスト、`git` ステータス、時間の装飾を含む。[obraun](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#obraun) テーマに基づく。
- [jacobin](https://github.com/Jsharkc/jacobin-zsh-theme) - efinedおよびysテーマに基づき、`git` ステータスの装飾を含む。オプションのiterm2カラーパレットを含む。
- [jake](https://github.com/JakeHuneau/Jake.zsh-theme) - 時間、現在のディレクトリ、`git` ブランチ情報（ブランチ名と未プッシュ変更がある場合の赤い＋）を表示。
- [jam](https://github.com/jesusangelm/Jam-Zsh-Theme) - ダーク背景に最適化。`git` ステータスと`rvm` ステータスを含む。
- [jax](https://github.com/jhammerberg/jax-theme) Powerlineに似たデザイン。現在のディレクトリと現在のユーザーの装飾を含む。
- [jc](https://github.com/jclementex/jc-zsh-theme) - ダークテルミナル背景に最適。`git` ステータス情報を含む。
- [jcl](https://github.com/jasonlewis/jcl-zsh-theme) - `ys` テーマに弱くインスパイアされたテーマ。
- [jeff](https://github.com/jbaranski/jeff-zsh-theme) - [bira](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#bira) をベースにし、ユーザー@ホスト、時間、現在のディレクトリ、`git` ステータスの装飾を含む。
- [jerome](https://github.com/jeromescuggs/jerome-theme) - [dieter](https://github.com/jeromescuggs/jerome-theme) テーマに基づくカラフルテーマだが、ホスト名は黄色。`git` 装飾を含む。
- [jhleeeme](https://github.com/JHLeeeMe/JHLeeeMe-Zsh-Theme) - `git` および Python virtualenv ステータスの装飾、ユーザー、pwd、時間、システム名を含む。
- [jmsp](https://github.com/juacu7340/jmsp.zsh-theme) - シンプルさとSSHの有用性に焦点。`git` ステータスと現在のディレクトリの装飾を含む。
- [jmtech](https://github.com/jmaaltech/jmtech-zsh-theme) - カスタマイズ可能な色と記号。 ステータス、最後のコマンドの終了状態、 シグネチャ情報とタイムスタンプの装飾を含む。 が必要。 ステータスアイコンの表示に。 `git` `gpg` [Nerd Font](https://github.com/ryanoasis/nerd-fonts) `git`
- [jnooree](https://github.com/jnooree/jnooree-zsh-theme) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme) テーマから色を採用したミニマリズムテーマ。`git` ステータス、非デフォルトユーザーとして実行されているかどうか、現在の作業ディレクトリの装飾を含む。
- [joje](https://github.com/joje6/joje.zsh-theme) - `git`の状態および現在のディレクトリへのデコレーターを含む。
- [jon](https://github.com/Jon-Schneider/jon.zsh-theme) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme)の色を採用した簡易版[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)
- [jovial](https://github.com/zthxxx/jovial) - ホスト、ユーザー、パス、開発環境、`git`ブランチ、および現在アクティブな`python`の仮想環境のデコレーターを表示
- [jpegleg](https://github.com/jpegleg/zshrc) - ダークブロードテーマに似ており、タイムスタンプと`git`のデコレーターを含む
- [js-magic](https://github.com/JSextonn/js-magic) - [af-magic](https://github.com/andyfleming/oh-my-zsh/blob/master/themes/af-magic.zsh-theme)の簡易版。現在の作業ディレクトリと`git`のステータスデコレーターを含む
- [judgedim](https://github.com/judgedim/oh-my-zsh-judgedim-theme) - ミニマリストなプロンプト
- [just-another](https://github.com/supertassu/another-theme) - SSHで別のマシンに接続されたときのホスト名を表示する、ただのテーマ
- [just-around-the-corner](https://github.com/DevinLeamy/just-around-the-corner) - クリスマスまであと何日かをカウント。`git`のステータスデコレーターを含む
- [jwalter](https://github.com/jeffwalter/zsh-jwalter) - Powerlineスタイルのテーマで、`git`、`svn`、`npm`、`rvm`およびネットワーク認識を含む。Powerline対応のターミナルフォントが必要
- [jyumpp](https://github.com/Jyumpp/jyumpp-zsh-theme) - Powerlevel 10Kの設定ファイルとインストーラ
- [kali-like](https://github.com/clamy54/kali-like-zsh-theme) - Kali LinuxのデフォルトZSHテーマにインスパイアされた。ユーザー@ホスト、現在のディレクトリ、`git`情報のデコレーターを含む
- [kali](https://github.com/h4ck3r0/kali-theme) - `git`デコレーターを含む
- [kalsowerus](https://github.com/kalsowerus/kalsowerus.zsh-theme) - カラフルなPowerline風マルチラインテーマ。`git`のステータス、ディレクトリ、最後のコマンドの終了ステータス、`nvm`情報のデコレーターを含む
- [karu](https://github.com/zaari/karu) - ミニマリストな1行ZSHプロンプト
- [kawaii](https://github.com/LeonidPilyugin/kawaii-oh-my-zsh/) - ターミナルと仮想コンソールモードをサポート。ユーザー名、ディレクトリ、最後のコマンドの終了ステータス、タイムスタンプ、`git`のステータスのデコレーターを含む
- [keloran](https://github.com/Keloran/keloran.zsh-theme) - 他のテーマからいくつかの機能を採用したテーマ
- [kenton](https://github.com/notnek/zsh-theme) - ダーク背景に最適化されたテーマ。`git`ステータス情報を含む。
- [kerneldiego](https://github.com/KernelDiego/kerneldiego-zsh-theme) - クリーンなボックススタイルレイアウト、Git統合、生産性と視覚的明瞭性を示すカラフルプロンプトインジケーターを備えたミニマリストなZshテーマ
- [kevin](https://github.com/KevinParnell/Kevin-zsh) - カラフルなテーマ。iTerm 2のカラーパレットを採用
- [kgzsh](https://github.com/Kashugoyal/kgzsh) - `git`のステータスデコレーターを含む。ダークな背景に良好に表示される
- [kido](https://github.com/KidoThunder/kido-zsh-theme) - `ys`および`robbyrussell`テーマに基づく。最後のコマンドの終了コード、Python仮想環境、VCSステータスのデコレーターを含む
- [kimwz](https://github.com/kimwz/kimwz-oh-my-zsh-theme) - ミニマリストなテーマ
- [kinda-fishy](https://github.com/folixg/kinda-fishy-theme) - Fishyテーマに基づいているが、短縮されたディレクトリではなくフルパスを表示し、`ssh`セッションおよびDockerコンテナではユーザー@マシンのみを表示
- [kindahv](https://github.com/kshnkvn/kindahv-zsh-theme) - クリーンなZSHテーマでコマンド実行時間の追跡を実現
- [kiss](https://github.com/rileytwo/kiss) - oh-my-zsh、VSCode、iTerm2、Neovim、RStudio向けのシンプルテーマ。`git`のステータスデコレーターを含む
- [kketcham](https://github.com/prototype27/kketcham) - `git`情報に美しい色を施したテーマ
- [ko](https://github.com/JoshBenn/KoTheme-for-Oh-My-Zsh/) - `git`の状態および現在のディレクトリへのデコレーターを含む。
- [kote](https://github.com/wendygaoyuan/kote-zsh-theme) - ダークな背景に最適。`git`のステータスデコレーターを含む
- [kotterstep](https://github.com/sorenvonsarvort/kotterstep-zsh-theme) - ダークなターミナル向けに設計された2行テーマ。`git`のデコレーターを含む
- [krak3n](https://github.com/krak3n/zsh-theme) - Go言語のバージョンと現在の`git`ブランチを表示
- [kraken](https://github.com/KrakenTheme/kraken-zsh) - ZSH用のダークテーマ。
- [ksposh](https://github.com/KSposh/ksposh-zsh-theme) - Python仮想環境、`git`情報、現在のディレクトリ、ユーザー名のデコレーターを含む
- [kumavis](https://github.com/kumavis/kumavis-zsh-theme) - Agnosterのフォークでソーライズドターミナルに最適化。Powerline対応フォントが必要
- [kw](https://github.com/Kwpolska/kw.zsh-theme) - カラフルなテーマ。`git`および`hg`のステータス情報を含み、ホスト名にホスト固有の色を追加できる
- [kyuu](https://github.com/arturoalviar/kyuu-zsh-theme) - 最初の文字が九(kyuu)、数字9であるシンプルテーマ。主色は青でマグネタのアクセント。`git`のステータスデコレーターを含む
- [lacerate](https://github.com/Petrushevsky-A/Lacerate-zsh-theme) - `git`、`hg`およびPython `venv`のステータスのデコレーターを含むミニマリストテーマ
- [laconic](https://github.com/Saka7/laconic.zsh-theme) - `git`のステータスと現在のディレクトリのデコレーターを含むシンプルテーマ
- [lagnoda](https://github.com/jashezan/lagnoda) [agnoster](https://gist.github.com/agnoster/3712874)および`lambda`テーマにインスパイアされた。ユーザー@ホスト、現在のディレクトリ、`git`、`hg`、または`bzr`のステータス、現在の仮想環境、最後のコマンドの終了ステータス、現在のAWSプロファイルのデコレーターを含む
- [lagune](https://github.com/noplay/lagune) - ミニマリストなZSHテーマ
- [lambda (cdimascio)](https://github.com/cdimascio/lambda-zsh-theme) -  [lambda](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/lambda.zsh-theme)テーマにインスパイアされた。`git`のステータスデコレーターを含む
- [lambda (halfo)](https://github.com/halfo/lambda-mod-zsh-theme/) - A ZSHテーマが、unicode対応のフォントとターミナルアプリケーションを使用する `git`ユーザー向けに最適化されています。
- [lambda-blazinggit](https://github.com/zalefin/lambda-blazinggit) - 高速かつ詳細な `git`情報が含まれています。[Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)および[gitstatus](https://github.com/romkatv/gitstatus)プラグインが必要です。
- [lambda-gitster](https://github.com/ergenekonyigit/lambda-gitster) - 簡潔なプロンプトで `git`情報を表示しています。
- [lambda-minimal](https://github.com/sohnryang/lambda-minimal-theme) - ラムダに基づくシンプルなテーマで、`git`ステータスと仮想環境情報を含んでいます。
- [lambda-mod](https://github.com/halfo/lambda-mod-zsh-theme) - シンプルなZSHテーマで、`git`の使用に最適化されています。
- [lambda-p](https://github.com/paimanbandi/lambda-p) - [lambda mod](https://github.com/halfo/lambda-mod-zsh-theme)および[Lambda V](https://github.com/vkaracic/lambdav-zsh-theme)テーマにインスパイアされたテーマ。`git`ステータスの装飾を含んでいます。
- [lambda-pure](https://github.com/marszall87/lambda-pure) - 簡潔なZSHテーマで、[pure](https://github.com/sindresorhus/pure)に基づき、Node.jsバージョンの装飾を追加しています。
- [lambda-v](https://github.com/vkaracic/lambdav-zsh-theme) - ラムダとフィシーテーマの組み合わせ。`git`ステータスの装飾を含んでいます。
- [lambda-zen](https://github.com/seamile/lambda-zen) - [lambda mod theme](https://github.com/halfo/lambda-mod-zsh-theme)にインスパイアされ、グラフィカルな`git`ステータス装飾を備えています。
- [lambder](https://github.com/avillen/zsh-theme-lambder) - `git`ステータス装飾を含み、ダークなターミナルテーマと組み合わせると最適です。
- [laniksj](https://github.com/LanikSJ/laniksj-zsh-theme) - ダークな背景に最適です。優れた`ys`テーマおよび[Honukai ZSH Theme](https://github.com/oskarkrawczyk/honukai-iterm-zsh)に基づいており、rootステータスおよび`git`ステータス装飾を表示しています。
- [larn](https://github.com/tourcoder/larn.zsh-theme) - クリーンでカスタマイズ可能なoh my zshテーマでGit統合を備え、ダークターミナルに設計されています。色鮮やかなプロンプトに、`git`ブランチおよびステータスインジケータ、現在のディレクトリ、ファイルおよびディレクトリの別々の`ls`カラーを含んでいます。
- [lazyprodigy](https://github.com/drewlustro/lazyprodigy-zsh-theme) - ダークターミナルに最適化されており、ローカルおよびリモートシステム向けのバリエーションを備えています。
- [lcars](https://github.com/lgulliver/lcars-zsh-theme) - スターフレック：ザ・ネクストジェネレーションLCARSをインスパイアしたOh My Zshテーマ。現代的なpowerlineスタイルセグメントと本物のカラーパレットを備えています。`git`ステータス、時間、パス、OSおよびバッテリー充電レベルの装飾を含んでいます。
- [leafia](https://github.com/Ghostrick/leafia-prompt) - Leafy preztoテーマで、`git`ステータス情報を表示しています。
- [lean](https://github.com/miekg/lean) - [pure](https://github.com/sindresorhus/pure)にインスパイアされたテーマ。`git`ステータス情報、最後のコマンドの終了ステータス、最後のコマンドの実行時間の装飾を備えています。
- [leon](https://github.com/prince-an/Leon_zshTheme) - ライトな背景に最適です。`git`ステータス、時間、ユーザー@ホスト、作業ディレクトリ、最後のコマンドの終了ステータスの装飾を含んでいます。
- [less-noise](https://github.com/ablil/less-noise) - 簡潔なテーマで、`git`ステータス、現在のディレクトリ、現在の時間を装飾しています。
- [leverage](https://github.com/gschnall/leverage) - [minimal](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/minimal.zsh-theme)に基づき、色と追加の`¬`文字を使用し、コマンドラインプロンプトと出力の間をより明確にしています。
- [lewis](https://github.com/lewisflude/oh-my-lewis) - ブラック、ホワイト、レッドのテーマ。`git`ステータス情報を表示しています。
- [lgbt](https://github.com/nautilor/lgbt.zsh-theme) - カラフルなテーマで、現在のディレクトリおよび`git`ステータスの装飾を備えています。
- [lgbtq](https://github.com/PhoenixSmaug/zsh-lgbtq-themes) - あなたのターミナルに用意されたlgbtqテーマのコレクションです。
- [light](https://github.com/InfinityUniverse0/light-zsh) - ライトな背景に最適です。ユーザー@ホスト、`git`ステータス、現在のディレクトリの装飾を含んでいます。
- [lightbulb](https://github.com/lightbulb703/lightbulb-zsh-theme) - カーネル、OSバージョン、稼働時間、`git`の装飾を含んでいます。
- [lighthaus](https://github.com/lighthaus-theme/zsh) - [Lighthaus](https://github.com/lighthaus-theme/lighthaus)テーマに相応しいプロンプト。`git`情報、GitHub/GitLabロゴを表示し、変更が発生した際にその変更を表示します。
- [lila](https://github.com/raphaelivan/lila-zsh-theme) - 簡潔なテーマで、ダークなターミナル背景に最適です。
- [lilith](https://github.com/aknackd/zsh-themes) - [gallifrey](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/gallifrey.zsh-theme)および[hyperzsh](https://github.com/tylerreckart/hyperzsh)の改良版。
- [lime](https://github.com/yous/lime) - シンプルで簡単にカスタマイズ可能なZSHテーマ。
- [limpide](https://github.com/shooteram/limpide) - [miloshadzic](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#miloshadzic)テーマの改良版で、親ディレクトリおよび現在のディレクトリを表示しています。
- [linear](https://github.com/MrYazdan/zsh-linear-theme) - Powerlineに似たテーマ。`git`ステータス、Pythonvirtualenv、現在のディレクトリ、現在の時間を含むセグメントを備えています。
- [link](https://github.com/kylegl/link-zsh-theme) - 簡潔なテーマ。`git`ステータスおよび最後のコマンド終了装飾を含んでいます。
- [linuxero](https://github.com/andreshincapier/linuxero) - 簡潔なテーマ。rootステータス、現在のディレクトリ、`git`ステータス、現在のRuby rvm環境、現在のPython virtualenvの装飾を含んでいます。
- [liquidprompt](https://github.com/nojhan/liquidprompt) - フル機能かつ細心の注意をもって設計されたアダプティブプロンプト。必要なときに必要な情報を表示します。必要なときに必要なものを表示し、変化を認識することで時間を節約し、不満を減らします。
- [lish](https://github.com/bashelled/lish) - カジュアルなテーマ。粗さのない、スムーズなデザイン。`git`、ユーザー@ホスト、最後のコマンド終了ステータス、現在のディレクトリ、現在の時間、rootステータスの装飾を含んでいます。
- [litmus](https://github.com/dceoy/litmus-zsh-theme) - 接続に応じた色：ローカルセッションではプロンプトがシアン、SSHではマグエンテになります。常にどこにいるかを把握できます。datetime、`git`ステータス、rootステータスインジケータ、最後のコマンドの終了ステータス、ユーザー@ホストの装飾を含んでいます。
- [liver](https://github.com/RenoirTan/liver.zsh-theme) - カラフルなテーマで、`git`ステータス、ユーザー、ホスト、現在および現在のリポジトリルートまでの相対パスの装飾を含んでいます。
- [llama](https://github.com/PsychoLlama/llama.zsh-theme) - 洗練されたラマのための簡潔なテーマ。
- [logico](https://github.com/logico/logico-zsh-theme) - `git`の装飾を備えています。リモートステータスとviモードのインジケータを表示しています。
- [lone-star](https://github.com/designfrontier/lonestar-zsh-theme/blob/master/lone-star.zsh-theme) - スインダー・ソルハスの純テーマに基づくテキサス風テーマ。
- [longsilvern](https://github.com/long263/longsilvern-zsh-theme) - `git`およびコンパクトな`pwd`の装飾を含んでいます。
- [lorond](https://github.com/lorond/zsh-lorond/) - [af-magic](https://github.com/andyfleming/oh-my-zsh/blob/master/themes/af-magic.zsh-theme)のコンパクトバージョン。`git`ステータスを含み、標準フォントと互換性がある。
- [lperezp](https://github.com/lperezp/lperezp-zsh-theme) - ユーザー@ホスト名、`git`ステータス、現在のディレクトリ、および実行された最後のコマンドの終了ステータスをデコレートしたバージョン。
- [lpha3cho](https://github.com/sdcampbell/lpha3cho-Oh-My-Zsh-theme-for-pentesters) - pentester向けに改良された[intheloop](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/intheloop.zsh-theme)テーマ。日時、IPアドレスを含み、pentestログに使用可能。
- [luceast](https://github.com/LucEast/luceast-zsh-theme) - `git`に最適化。ユーザー名、ホスト、時間、作業ディレクトリのデコレーションを含む。
- [luckycoding](https://github.com/ZitherPeng/oh-my-zsh-luckycoding-theme) - [robbyrussell](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/robbyrussell.zsh-theme)テーマに基づき、`git`デコレーションと最後のコマンドの終了コードを含む。
- [ludvig](https://github.com/daviludvig/ludvig-theme-zsh) - ミニマリスト。`git`ステータス、現在のディレクトリ、現在時刻、最後のコマンドの終了ステータスをデコレート。
- [ludwigws](https://github.com/LudwigWS/my-zsh-theme) - [lambda-mod](https://github.com/halfo/lambda-mod-zsh-theme)テーマのバリエーション。`git`デコレーションを含み、powerline互換のターミナルフォントが必要。
- [luke](https://github.com/xueguangl23/luke_zsh_theme) - `git`デコレーションを含む。[frisk](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/frisk.zsh-theme)のoh-my-zshテーマに基づく。
- [lukerandall-extended](https://github.com/mpyw/oh-my-zsh-lukerandall-extended) - [lukerandall](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/lukerandall.zsh-theme)テーマの拡張バージョン。`git`ステータスと最後のコマンドの実行状態をデコレート。
- [lunachar](https://codeberg.org/ar-mo/armans-zsh-themes) - ミニマリストテーマ。
- [macos](https://github.com/alejandromume/macos-zsh-theme) - `git`のステータスデコレートを含む。
- [mad](https://github.com/MartinWie/ohmyzsh-theme-mad) - `git`ステータスと最後のコマンドの実行時間のデコレーションを含む。
- [madas](https://github.com/utauyo/madas-zsh-theme) - af-magicにインスパイアされたテーマ。`git`ステータス、ユーザー@ホスト、最後のコマンドが失敗したかをデコレート。
- [magento](https://github.com/cmuench/zsh-magento-cloud/blob/main/zsh-magento-cloud.plugin.zsh) - Magento Cloud Command Line Interface ([magento-cloud CLI](https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/dev-tools/cloud-cli.html?lang=en)) の補完を追加。
- [magicmace](https://github.com/zimfw/magicmace) - xeroのZSHプロンプトと[eriner's prompt](https://github.com/zimfw/eriner)にインスパイアされたテーマ。アクティブなpython `venv`のステータスコード、最後のコマンドの終了ステータス、短縮された作業ディレクトリ、`git`ステータスデコレーションを含む。
- [magico](https://github.com/IOsonoTAN/magico) - IOsonoTANのmagicoテーマ。
- [magpie](https://github.com/wdjcodes/magpie) - ミニマリストテーマ。現在ののルートからの相対パスをカスタムロジックで表示。時間、現在のディレクトリ、ユーザー@ホスト名、ステータスをデコレート。 `git` `git`
- [mainnika](https://github.com/mainnika/zsh-theme-mainnika/) - 最後のコマンドの終了ステータスと1分、5分、15分の負荷平均をデコレート。
- [maivana](https://github.com/nylo-andry/zsh-themes) - `kubectl`コンテキスト、`git`ステータスデコレーションを含む。
- [majemoji](https://github.com/metalogica/majemoji) - 各セッションのプロンプトにランダムなエモジを追加。`git`ステータスデコレーションを含む。
- [malev](https://github.com/mvinan/malev-zsh-theme) - ミニマリストと通常のバリエーションを含む。ホスト名、ディレクトリ、`git`ステータス、最後のコマンドの終了ステータスをデコレート。
- [mantis](https://github.com/dann254/mantis-zsh-theme) - ミニマリストテーマ。`git`ステータスと情報デコレーションを含む。
- [materialshell](https://github.com/carloscuesta/materialshell) - あなたのシェルに良いコントラストと重要な部分での色の強調を備えた[material design](https://material.io/guidelines/style/color.html)テーマ。目に優しいデザインを意識。
- [matrix](https://github.com/pot-code/matrix-zsh-theme) - [powerlevel9k](https://github.com/bhilburn/powerlevel9k)テーマのバリエーション。マトリクス映画シリーズに似たデザイン。`git`ステータスデコレーションを含む。
- [matter](https://github.com/mrobillard/matter-zsh-theme) - `git`ステータス、AWS vault role、バックグラウンドジョブ、最後のコマンドの終了コード、ホスト名を表示。
- [mau](https://github.com/vichargrave/mau) - 猫のトーンを加えたZSHテーマ。`git`ステータスデコレーションを含む。[kphoen](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/kphoen.zsh-theme)および[smt](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/smt.zsh-theme)テーマに基づく。
- [mbolis](https://github.com/mbolis/mbolis-zsh-theme) - `git`デコレーションを含み、rootユーザーの場合プロンプト色を変更。アクティブなジョブ、[jenv](https://github.com/jenv/jenv)統合を含む。
- [mdmini](https://github.com/MarioDena/MDmini) - `git`および`ssh`ステータスデコレーションを含む。
- [meganerd](https://github.com/meganerd/meganerd-zsh/) - jonathanにインスパイアされたテーマ。`git`ステータス、ユーザー@ホスト名、現在のディレクトリ、時間、最後のコマンドの終了ステータスをデコレート。
- [megaprompt](https://github.com/willghatch/zsh-megaprompt) - キーボードモード、所有者情報、その他コンテキスト情報を含むマキマリズムプロンプト。プロンプト文字はλ。[hooks](https://github.com/willghatch/zsh-hooks)プラグインが必要。
- [metalmajor](https://github.com/deblauwetom/metalmajor-zsh-theme) - `git`ステータスデコレーションを含み、最後のコマンドの終了コードが非ゼロの場合に表示。
- [mexassi](https://github.com/Mexassi/mexassi-zsh-theme) - `/sys/class/power_supply`フォルダを確認し、システムがラップトップかデスクトップかを判断。acpiコマンドでバッテリーのパーセンテージを読み取り、プロンプトに表示。`git`デコレーションを含む。
- [mh-fzj](https://github.com/mh-firouzjaah/mh-fzj-oh-my-zsh-theme-v1) - `rvm`および`git`ステータスデコレーションを含む。
- [michaelpass](https://github.com/michaelpass/michaelpass.zsh-theme) - POSIX対応のクロスプラットフォーム[alanpeabody](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/alanpeabody.zsh-theme)モジュール。便利なタイムスタンプと完全なgit/rubyサポートを提供。
- [michelebira](https://github.com/mortinger91/michelebira) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme)テーマのバリエーション。`git`ステータス、ユーザー名、現在のディレクトリ、最後のコマンドの返却コードをデコレート。
- [midin](https://github.com/xlshiz/midin) - ダークなターミナル背景に適したプロンプト。`git`ステータスデコレーションを含む。
- [mike-was-here](https://github.com/leguim-repo/mike-was-here-theme/) - ミニマリスト。`git`ステータスデコレーションを含む。
- [milight](https://github.com/frodoslaw/milight-zsh) - ミニマリストなZSHプロンプト。`git`ステータス表示を含み、ダークなターミナル背景と最適。
- [mindful-space](https://github.com/syndbg/mindful-space-zsh-theme) - スペースを意識したZSHテーマ。
- [minima](https://github.com/Brolly0204/zsh-minima) - `git`、`node`、`golang`、`yarn`、`php`、`docker`および`python`ステータスデコレーションを含む。
- [minimal (glsorre)](https://github.com/glsorre/minimal/) - ZSHの最小限の非同期テーマ。[Fira Code](https://github.com/tonsky/FiraCode)フォントと[Solarized Light](https://ethanschoonover.com/solarized)ターミナルテーマとの組み合わせに最適化されています。
- [minimal (subnixr)](https://github.com/subnixr/minimal) - 極小だが機能が豊富なテーマ。
- [minimal-improved](https://github.com/gdsrosa/minimal_improved) - ダークなターミナル向けテーマ。右側のプロンプトに`git`の装飾を含む。
- [minimal-os](https://github.com/nkurata/zsh-theme) - ヘルプが可能な `git` ステータスとシステム固有のデコレーターを備えたミニマリズムのプロンプト。
- [minimal-terminal](https://github.com/Lissy93/minimal-terminal-prompt) - ユーザー名@ホスト、現在のディレクトリ、 `git` の情報、および最後のコマンドの終了コードを表示するデコレーターを含みます。
- [minimal2](https://github.com/PatTheMav/minimal2) - 極小で拡張性の高いZSHテーマ。[subnixr's original](https://github.com/subnixr/minimal)からフォークされ、[Zimfw](https://github.com/zimfw/zimfw)に適応された。
- [minimalx](https://github.com/lknix/zsh-theme-minimalx) - oh-my-zshのkoloテーマを参考にしています。
- [mint](https://github.com/FalconLee1011/mint-zsh-theme) - 現在のディレクトリにデコレーターを含み、ラップトップかデスクトップいずれの環境でも動作し、`git`ステータスを提供します。
- [mira](https://github.com/mbStavola/mira) - タイム情報付きかつ開始プロンプトを簡略化したmodified [bira](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#bira)
- [mirage](https://github.com/robin-pfeiffer/ohmyzsh-mirage-theme/) - `git`ステータスのプロンプト装飾、最後のコマンドの終了コード、`sudo`タイムスタンプファイルの存在確認、および現在アクティブなPythonの仮想環境を表示
- [miramare](https://github.com/franbach/oh-my-deepin-miramare) - `git`のステータスデコレーションを含む。[Deepin Terminal](https://www.deepin.org/en/original/deepin-terminal/)と組み合わせると最も効果的。
- [misa](https://github.com/misalabs/misa.zsh-theme) - ミサラブズのZSHテーマ。
- [mixed](https://github.com/dekermendzhy/mixed-zsh-theme) - 暗い背景に最適化されています。
- [mnml](https://github.com/mnml-theme/prompt) - ミニマムなテーマで`git`の状態にデコレーターを含む。
- [mocha-fusion](https://github.com/saeed0xf/mocha-fusion) - [catpuccin](https://catppuccin.com/)に基づいています。`git`、現在のディレクトリおよびユーザー名@ホストのデコレーターを含みます。
- [mochi](https://github.com/mochidaz/zsh-themes) - シンプルなテーマで、rustのmain関数に似たデザインを採用。`git`と`hg`のステータスデコレーションを含む。
- [mochi2](https://github.com/mochidaz/zsh-themes) - 極簡的なテーマ。`git`および`hg`のステータスデコレーションを含む。
- [modern-dark-pro-capsule](https://github.com/dvigo/modern-dark-pro-capsule-ohmyzsh) - プレミアムな現代的なダークモード最適化ZSHテーマ。カプセル型のステータスセグメントを備えています。ZSHの実行タイマー、リモート同期ステータス、開発者用アイコンを含みます。
- [modern-dark-pro](https://github.com/dvigo/modern-dark-pro-ohmyzsh) - プレミアムな現代的なダークモード最適化ZSHテーマ。VS CodeおよびJetBrainsのカラーパレットをインスピレーションとして作成。ZSHの実行タイマー、リモート同期状態、開発者用アイコンを含む。
- [modern](https://github.com/BadRat-in/zsh-modern-theme) - 明るいまたは暗いターミナルテーマに自動で適応します。このテーマは、Gitの統合、コマンド実行時間、そして美しいレインボーディレクトリパスを備えた簡潔で情報量の多いプロンプトを提供します。
- [moderno](https://github.com/obrassard/moderno-zsh) - シンプルで現代的なZSHテーマ。Oh-My-ZSHの[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)テーマをインスピレーションとして作成。`git`のステータス装飾を含む。
- [modesty](https://github.com/saravanabalagi/zsh-theme-modesty) - シンプルで控えめなZSHテーマ。`condaenv`、`virtualenv`および`git`のステータス装飾を、右寄せで整然と表示。[condaenv](https://github.com/saravanabalagi/zsh-plugin-condaenv)プラグインが必要。
- [molokai-powerline](https://github.com/prikhi/molokai-powerline-zsh) - [agnoster](https://gist.github.com/agnoster/3712874)に基づく。
- [momoyo](https://github.com/momoyo-droid/momoyo-zsh-theme) - パワーラインに似た雰囲気。`git`ステータス、ユーザー名、作業ディレクトリのためのデコレーションを含む。
- [monsi](https://github.com/rafa-wine/monsi_oh-my-zsh_theme) - `git`のステータス、最後のコマンドの終了ステータスおよび現在のディレクトリをデコレーターとして含む。
- [moon-lite](https://github.com/anotherlusitano/moon-light) - 極限のシンプルさ。`git`のステータス、現在のディレクトリ、最後に実行したコマンドの終了ステータスのデコレーターを含む。
- [moonbloom](https://github.com/moonbloom-theme/zsh) - ターミナルエミュレータの色のテーマに合わせて適応します。現在のディレクトリと`git`のステータスにデコレーターを提供します。
- [moonline](https://github.com/kagamilove0707/moonline.zsh) - 極めてシンプルでありながら、拡張が容易なプロンプト。
- [moux](https://github.com/gagbo/moux) - ダークなターミナルの背景と良好に動作し、`git`の装飾を`RPROMPT`に含む。
- [msys2](https://github.com/water-logger/MSYS2-Theme/) - MSYS2を参考にした。ユーザー@ホスト、`git`ステータスおよび現在のディレクトリに対してデコレーターを提供。
- [mu](https://github.com/seamile/mu-zsh-theme) - 複数の `git` ステータスの表示を改善します。[lambda mod theme](https://github.com/halfo/lambda-mod-zsh-theme) を参考にしています。電源線に適合するフォントが必要です。
- [multi-shell-repo-prompt](https://github.com/dotcode/multi-shell-repo-prompt) - 現在は [Git](https://git-scm.com/) および [Mercurial](https://www.mercurial-scm.org/) において、[ZSH](https://en.wikipedia.org/wiki/Zsh) および [bash](https://en.wikipedia.org/wiki/Bash_%28Unix_shell%29) にも対応しています。
- [multiline](https://github.com/jan-auer/zsh-multiline) - パワーライン風のテーマ（[agnoster](https://github.com/agnoster/agnoster-zsh-theme)に基づく）
- [muslim](https://github.com/nksoff/muslim) - シンプルで最小限のZSHプロンプトテーマ。
- [musy](https://github.com/tonyke-bot/musy-zsh-theme) - ミューズテーマを参考にした。 `git`ステータスのデコレーションを含む。
- [my](https://github.com/fabiendelpierre/my-zsh-theme/) - [kolo](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#kolo)の変体。
- [myzsh](https://github.com/MaxUlysse/myzsh) - マキス・ガルシアのmyzshテーマ。
- [mzt](https://github.com/honbey/mzt) - `LS_COLORS`を設定し、`diff`を色付けし、`git`のステータスと現在の作業ディレクトリの装飾を含む。
- [n1ghtfall](https://github.com/reorientate/n1ghtfall) - ダークテーマで、現在のディレクトリとユーザー@ホスト名に対してデコレーターを提供。
- [nablaman](https://github.com/kokkonisd/nablaman-zsh-theme) - [powerlevel10k](https://github.com/romkatv/powerlevel10k) と類似です。最後のコマンドの終了状態、ユーザー@ホスト名、`git` の状態および現在のディレクトリを含むデコレータを提供します。ダークなターミナルテーマと組み合わせると最も効果的です。
- [nanika](https://github.com/justforuse/nanika-zsh-theme/) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#robbyrussell)の最適化された変体。`git`ステータスの装飾を含む。
- [nanofish](https://github.com/tweekmonster/nanofish) - ナノテックテーマに魚風のディレクトリプロンプトを追加。
- [nbrylevv](https://github.com/nbrylevv/nbrylevv-zsh-theme) - ミニマリズムテーマでテキスト`git`ステータス装飾を含む。
- [nctu](https://github.com/leovincentseles/nctu.zsh-theme) - 軽量テーマでスピードを重視。`git`ステータス装飾を含む。
- [neewbie](https://github.com/neewbee/neewbee.zsh-theme) - ミニマムテーマで`git`装飾を含む。[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#robbyrussell)に基づく。
- [neo++](https://gitlab.com/migoa/neo) - 上記のものよりもシンプルで、直感的で、クラスタリングが少ない。
- [neon-potato](https://github.com/algosuna/neon-potato) - カラフルでミニマリズムテーマ。`git`装飾を含む。
- [neon](https://github.com/sahariko/neon) - 美しくミニマムなZSHテーマで`git`装飾を含む。
- [nerdish](https://gitlab.com/nyarla/zsh-theme-nerdish) - ZSH用プロンプトテーマで[Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)を使用。
- [nerdp](https://github.com/joknarf/nerdp) - Nerd powerlineスタイルプロンプト。[Nerd Font](https://github.com/ryanoasis/nerd-fonts)が必要。`git`ステータス、ユーザー名@ホスト名、現在のディレクトリ、Python virtualenv、ファイルシステム使用量チェック、1分間CPU負荷、可用メモリ、時間の装飾を含む。
- [nerdps1](https://github.com/joknarf/nerdps1) - powerlineに似たスタイル。[Nerd Font](https://github.com/ryanoasis/nerd-fonts)が必要。ユーザー名@ホスト名、`git`情報、切り詰められた現在ディレクトリ、Python virtualenv、最後のコマンドの終了ステータス、時間の装飾を含む。
- [nescalante](https://github.com/nescalante/zsh-theme) - ダークテールバックグラウンドに最適化。`git`装飾を含む。
- [netmask](https://github.com/swomf/netmask-zsh-theme) - Termux向けテーマ。IPアドレス、現在ディレクトリのフルパス、`git`ステータス、Python virtual environmentの装飾を含む。
- [neurosimple](https://github.com/davidsierradz/neurosimple-oh-my-zsh-theme) - `git`装飾と`vi`モードインジケータを含む。
- [newt](https://github.com/softmoth/zsh-prompt-newt) - Fat & fastテーマ – 内部と外部の両面に美しいデザイン。セグメントが適切にスタイル化されている。極めてカスタマイズ可能。`git`、ユーザー名、実行時間、ディレクトリ、バックグラウンドジョブ、編集モードの装飾を含む。
- [newton](https://github.com/sebastienfilion/zsh.newton) - `git`ステータスと外部IPアドレスの装飾を含む。
- [nextbike](https://github.com/meierjan/nextbike-zsh-theme) - 非常に基本的なテーマでmacOSの自転車アイコンを表示。
- [nidoranarion](https://git.sr.ht/~nicolairuckel/nidoranarion) - カラフルで、`git`ステータス装飾を表示。
- [nikitakot](https://github.com/nikitakot/nikitakot-oh-my-zsh-theme) - 小さなシンプルなoh-my-zshテーマ。現在ディレクトリと2ディレクトリ後、`git`と`nodejs`ステータス装飾を表示。
- [ninik](https://github.com/NimaNikfar/ninik-zsh-theme) - [agnoster](https://github.com/agnoster/agnoster-zsh-theme)と[ubunly](https://github.com/alejandromume/ubunly-zsh-theme)にインスパイアされたテーマ。OS、現在ディレクトリ、Python virtualenv、`git`ステータスの装飾を含む。[Nerd Font](https://github.com/ryanoasis/nerd-fonts)またはPowerline-patchedフォントが必要。
- [niotna](https://github.com/niotna/niotna-theme) - `git`ステータスと現在ディレクトリの装飾を含む。カスタマイズ可能な色を提供。
- [nknu](https://github.com/aanc/oh-my-zsh-nknu-theme) - シンプルなoh-my-zshテーマ。
- [nmaxcom](https://github.com/nmaxcom/nmaxcom-zsh-theme) - ミニマリズムZSHテーマで`git`ステータス装飾を含む。
- [node](https://github.com/skuridin/oh-my-zsh-node-theme) - oh-my-zshのNode.jsテーマ。他のプラグインマネージャーとの利用を容易にするために分離された。
- [nodeys](https://github.com/marszall87/nodeys-zsh-theme) - ysテーマに基づき、NVMプラグインからNode.jsバージョンを追加。
- [noon](https://github.com/silky/noon.zsh-theme) - ライトとダークのバリエーションを備え、`git`情報を表示。
- [nord](https://github.com/TyWR/Nord-zsh) - `git`ステータス装飾を含み、アクティブなconda環境を表示。
- [normanius](https://github.com/normanius/normanius-zsh-theme) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme)から派生。`git`ステータス、`user@host`、Python `virtualenv`、Ruby `rvm`バージョンの装飾を含む。
- [nothing](https://github.com/eendroroy/nothing) - 非常に速く、シンプルで、ほとんど何も含んでいないため。
- [nova](https://github.com/body20002/nova) - `git`ステータス装飾を含む。`LS_COLORS`と`LSCOLORS`設定を上書き。
- [nox](https://github.com/kbrsh/nox) - ダークテーマで現在の作業ディレクトリとgitステータスを表示。
- [nt9](https://github.com/lenguyenthanh/nt9-oh-my-zsh-theme) - クリーンで、分散を避け、に焦点を当てた開発テーマ。現在ディレクトリがルート（またはがリポジトリ外の場合）に対して相対パス、最後のコミットからの時間、現在のSHA、ブランチ、ブランチ状態を表示。 `git` `git` `~` `git`
- [nunorc](https://github.com/nunorc/nunorc.zsh-theme) - ミニマリズムテーマでダーク背景に良好な表示。`git`、`mercurial`、`svn`ステータス装飾を含む。
- [nuqle](https://github.com/Nuqlear/nuqlezsh.zsh-theme) - preztoおよびoh-my-zsh向けのシンプルテーマ。
- [nuts](https://github.com/rafaelsq/nuts.zsh-theme) - ミニマリズムテーマで`git`ステータス装飾と時間を含む。
- [oblong](https://github.com/Ansimorph/oblong) - シンプルな`bash`インスパイアテーマで[gitster](https://github.com/shashankmehta/dotfiles/blob/master/thesetup/zsh/.oh-my-zsh/custom/themes/gitster.zsh-theme)と[basher](https://gitlab.com/Spriithy/basher)に基づく。ユーザーがrootかどうか、最後のコマンドの終了ステータス、`git`ブランチとそのクリーン/ディープな状態を表示するステータス装飾を含む。
- [odie](https://github.com/masterodie/zsh-theme-odie/) - ダーク背景に良好に表示。`git`ステータス、Python virtualenv、`vi`モードステータス装飾を含む。
- [odin](https://github.com/tylerreckart/odin) - Odinは`git`風のZSHテーマ。
- [odra](https://github.com/ErikBenavides/odra.zsh-theme) - カラフルで、ダーク背景に良好に表示。`git`ステータス、現在ディレクトリ、ユーザー名、最後のコマンドの終了ステータスの装飾を含む。
- [oh-flowers](https://github.com/Flower7C3/oh-flowers-zsh-theme) - マルチラインテーマで`git`装飾を含む。
- [oh-my-git](https://github.com/arialdomartini/oh-my-git) - BashおよびZSH向けの意見のあるプロンプト。
- [oh-my-posh](https://ohmyposh.dev/) - ZSHに特化したものではないが、非常に便利でZSHと互換性があります。プロンプトの設定をすべてのシェルで同じにできます。
- [oh-my-via](https://github.com/badouralix/oh-my-via) - ZSH用のテーマで、主にVIAサーバー上で使用されていた歴史的なテーマを派生させています。
- [ohelm](https://github.com/devopsguy/ohelm-zsh-theme) - 現在のディレクトリ、`git`ステータス、最後のコマンドのexitatusおよび`kubectl`コンテキストに対するデコレーターを含む。
- [ohh IP](https://github.com/Ohh-Raven/ohh_IP) - CTF向けのテーマ。IPアドレスおよび`git`ステータス向けのデコレーターを含む。
- [ohmypc](https://github.com/joselpadronc/OhMyPC) - ダークモードのターミナルウィンドウと良好に動作します。`git`の装飾を含みます。
- [om](https://github.com/sirshikher/zsh-om) - 極小テーマ。暗い背景と互換性があり、`git`ステータスの装飾を含む。
- [omszt](https://github.com/MU001999/omszt) - ミニマリズムテーマで、`git`のデコレーターを含む。
- [omuse](https://github.com/ouuan/omuse-zsh-theme) - オーマーZSHに基づいた [amuse](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/amuse.zsh-theme)。 `git`のステータス、時間、絶対パス、RAM使用量、前コマンドの実行時間、および前コマンドの終了ステータスの装飾を備えています。
- [ooh-matron](https://github.com/hulleyrob/ohmyzsh-theme-ooh-matron) - 最後のコマンドの終了状態、ユーザー名@ホスト名、IPアドレス、および`git`状態を表示するリアルタイムプロンプトにデコレータを備えています。
- [operator](https://github.com/nivv/operator-theme) - シンプルで洗練されたテーマ、[Menlo for Powerline](https://github.com/abertsch/Menlo-for-Powerline).と最もよく動作します。
- [ortiz (andres-ortizl)](https://github.com/andres-ortizl/ortiz-zsh-theme) - [eriner](https://github.com/zimfw/eriner)のブランチで、コマンド間の間隔とk8sコンテキストにデコレーションを追加。
- [ortiz (guezwhoz)](https://github.com/guesswhozzz/guezwhoz-zsh-theme) - [eriner](https://github.com/zimfw/eriner)の簡易なフォークで、`git`ステータス、`kubectl`コンテキストおよび経過時間の装飾を備えています。
- [osx2](https://github.com/RizkiIqbal02/zsh-theme-custom) - アーキーフォートに基づく。ミニマリズム。現在のディレクトリにデコレーターを含む。
- [otter](https://github.com/OtterArkar/otter-zsh/) - オットーテーマのテーマで、`git`ステータス、ユーザー@ホストおよび現在のディレクトリのデコレーターを備えています。
- [owczarczak](https://github.com/ThemysciraData/owczarczak.zsh-theme) - bira、dieterおよび[fino-time](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/fino-time.zsh-theme)を参考にしています。`venv`およびvcsのステータスデコレーションを含みます。
- [owi](https://github.com/owitech/zsh-theme/) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [owiewestside](https://github.com/owenstranathan/owiewestside.zsh-theme) - `git`のステータスおよびvirtualenv情報が含まれています。
- [oxide](https://github.com/dikiaap/dotfiles/blob/master/.oh-my-zsh/themes/oxide.zsh-theme) - 極めてシンプルで暗いZSHテーマ。
- [ozono](https://github.com/sfabrizio/ozono-zsh-theme) - 🌏 OZ0NO - 清潔なZSHを深呼吸しよう。
- [p9k-theme-pastel](https://github.com/iboyperson/p9k-theme-pastel) - [powerlevel10k](https://github.com/romkatv/powerlevel10k)プロンプト用のテーマで、簡潔さを強調しつつ重要な情報を伝えるもの。
- [pacmandoh](https://github.com/pacmandoh/omz-theme-pacmandoh) - コマンドラインをスリーマンなテーマで強化します。`git`の統合、権限フィードバック、Python環境のサポート、動的プロンプトをすべて1つにまとめ、単一のインストールスクリプトでカスタマイズ可能。
- [pad](https://github.com/eproxus/pad.zsh-theme) - 簡潔でカラフルなoh-my-zshのテーマ。
- [page](https://github.com/SLIB53/page-zsh-theme) - VCSサポート付きのシンプルなテーマ。プロンプトには現在の作業ディレクトリの1レベル分、ブランチ、および色分けされたカーブ状の太い矢印が表示されます。
- [palenight (jenssegers)](https://github.com/jenssegers/palenight.zsh-theme) - ホスト情報の表示を可能にし、`git`ブランチの装飾を含む。
- [palenight (rhklite)](https://github.com/rhklite/palenight_zsh_theme) - プロンプトにアイコンを含めて、詳細な `git`のステータス情報を表示します。
- [panda](https://github.com/davymai/oh-my-zsh-panda-theme) - `git`および`root`のステータスデコレーションを含みます。暗い背景に最適です。
- [papercolor](https://github.com/erikschreier/PaperColor-themes) - ZSH、`vim`および`tmux`用の色の設定。`git`のステータス装飾を含む。
- [paramour](https://github.com/espeon/paramour) - シンプルで洗練されたデザイン。`git`ステータス、ユーザー名、時間、現在のディレクトリ、ユーザー名にデコレーターを備えています。ターミナルに[Nerd Font](https://github.com/ryanoasis/nerd-fonts)が必要です。
- [paroape](https://github.com/ParoaPe/ParoaPe-zsh-theme) - [lpha3cho](https://github.com/sdcampbell/lpha3cho-Oh-My-Zsh-theme-for-pentesters)に基づく
- [parrot](https://github.com/trabdlkarim/parrot-zsh-theme) - パルトOSのbashテーマに基づいています。ユーザー@ホスト、`git`情報、最後のコマンドの終了状態、時間、現在のディレクトリに対してデコレータを含みます。
- [passion](https://github.com/ChesterYue/ohmyzsh-theme-passion) - 現在の時刻、`git`状態、最後に実行されたコマンドのミリ秒単位の実行時間、およびそのコマンドの終了状態を表示します。macOSでcoreutilsが必須です。
- [pastel](https://github.com/iboyperson/pastel) - [sugar-free](https://github.com/cbrock/sugar-free)にインスパイアされたZSHテーマ。`git`の装飾を含む。
- [paulmanjarres](https://github.com/paul-manjarres/paulmanjarres-zsh-theme) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)、 [agnoster](https://gist.github.com/agnoster/3712874) および [nuts](https://github.com/rafaelsq/nuts.zsh-theme) をベースにし、現在のディレクトリ、 `git` の状態、および時間のデコレーターを含みます。
- [pawsh](https://github.com/SergioBonatto/pawsh-zsh-theme) - Pawshは、日本のネコ文化をインスピレーションとして作ったoh-my-zsh向けの非常にかわいいzshテーマです。あなたのプロンプトが可愛い猫の顔（ᓚᘏᗢ）になります。その猫の顔の色は、コマンドの状態（気分）によって変化します。ルート状態、前回実行したコマンドの終了状態に基づくプロンプトの色変更、現在のディレクトリ、Pythonの仮想環境、`vi`-モードの表示、`git`の状態、および現在の時刻を表示するデコレーターが含まれています。
- [paxton](https://github.com/p1xt4n/ohmyzsh-theme-paxton) - パワーラインにインスパイアされた。 `git` ブランチ、時間、最後のコマンドの終了状態、現在のディレクトリに関するセグメントを含む。パワーラインに適合するフォントが必要。
- [pbdevflow](https://github.com/pbarovsky/pbdevflow) - [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)と組み合わせて使用するため設計・最適化されています。現在のディレクトリ、`git`の状態およびユーザー名に関するデコレーターを含みます。
- [pbsegments](https://github.com/pbarovsky/pbsegments) -[oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)用のシンプルで視覚的に魅力的なカスタムテーマ。清潔でセグメントベースのプロンプトを採用し、読みやすさと使いやすさを最適化しています。`git`のステータス、現在のディレクトリ、ユーザー名を表示するデコレータを含んでいます。
- [pecodez](https://github.com/pecodez/pecodez-zsh-theme) - 暗いターミナル向けに最適化されています。 `snyk` バージョン、`node` バージョン、AWSプロファイル、kubernetesコンテキストおよび `git` ステータスにデコレーターを備えています。
- [pedantic](https://github.com/nemeshnorbert/pedantic-zsh-theme) - カスタマイズ可能な色と出力。詳細な `git`情報、ルート状態、最後のコマンドの終了状態、ユーザー@ホスト、現在のディレクトリ、および時刻に関するデコレーターを含む。
- [pentest-report](https://github.com/sikumy/ohmy-pentest-report) - ペネトレーションテスター向けに設計された、シンプルで効率的なプロンプトです。監査やペネトレーションテスト中の日常作業を円滑にします。現在の日時、IPアドレス、現在のディレクトリ、直前に実行したコマンドの結果をリアルタイムで表示します。
- [persi](https://github.com/persiliao/persi-zsh-theme) - `git`、ホスト名、現在のディレクトリのデコレーターを含む。ライトおよびダーク背景ともに動作する。
- [phalanx](https://github.com/d-danilov/phalanx-zsh-theme) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)およびPure Shellテーマの精神を踏まえた、極限のシンプルテーマ。
- [phi φ](https://github.com/LasaleFamine/phi-zsh-theme) - ZSH向けのシンプルで洗練されたテーマ。[Lambda (Mod) ZSH](https://github.com/halfo/lambda-mod-zsh-theme)テーマをインスピレーションとして作成されたもの。
- [pi](https://github.com/tobyjamesthomas/pi) - ミニマムなテーマで、`git`ステータスのデコレーターを備える。
- [piboy](https://github.com/sflems/piboy-zsh-theme) - シンプルで洗練されたマルチラインテーマ。色分けされたタイムスタンプ、`git`およびシンタックスハイライト、さらにrootテーマを強調したテーマを含む。
- [pickaxe](https://github.com/mikhaben/pickaxe-zsh-theme) - `user@host`、現在のディレクトリ、現在の時刻、conda環境、nodeバージョン、`git`ステータスのデコレーターを含む。
- [pico](https://github.com/PicoGeyer/zsh-pico-prompt) - [zap-prompt](https://github.com/zap-zsh/zap-prompt)から改良されたシンプルプロンプト。`git`情報、user@hostname、現在の作業ディレクトリのデコレーターを備える。
- [pifabs](https://github.com/pifabs/pifabs-zsh-theme) - ミニマムなテーマで、`git`ステータス、ユーザー名、ホスト、作業ディレクトリのデコレーターを備える。
- [pixelwave](https://github.com/arcnms/pixelwave) - スリムで明るく、カラフルなテーマ。古いスクールのピクセル風と現代的なハイカラーレンダリングを融合。虹色の「ピクセルバー」、ネオン色のアイデンティティライン（lolcatによる）、フルパス、そして簡潔な`git`ステータスを表示。
- [plain-ui](https://github.com/purveshpatel511/plain-ui) - ミニマリズムを追求しているが、`git`ステータスのデコレーターを備える。
- [plain](https://github.com/jimeh/plain.zsh-theme) - ZSH向けのシンプルで基本的なテーマ。基本的な`git`情報を表示。
- [planet](https://github.com/borb/planet-zsh) - [steef](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/steeef.zsh-theme)の簡易版。[oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)から派生したもの。
- [plankton](https://github.com/tobiaseichert/plankton-zsh-theme) - シンプルで、無駄のないテーマ。
- [plantyhoe](https://github.com/totoroot/plantyhoe.zsh-theme) - 植物とアップルへの愛をもとにしたミニマリズムテーマ。`git`ステータスのデコレーターを備える。
- [platypus](https://github.com/fdv/platypus) - Platypusは、Frédéric de Villamilが使用するoh-my-zsh向けのシンプルで便利なテーマ。
- [playful](https://github.com/indulge/playful-zsh) - フォントなしで動作する2行テーマエンジン。17の切り替え可能なパレットを備え、`ls`および補完リストを再色指定。`git`ステータス、コマンド実行時間、現在のディレクトリ、virtualenv、バックグラウンドジョブ、月のフェーズ、フェスティバル日バナー、毎日の詩カードを含む。256色のターミナルで動作可能（特別なフォント不要）。
- [pog7x](https://github.com/pog7x/pog7x-zsh-theme) - ユニコード対応。`git`情報、現在のディレクトリ、最後のコマンドの終了ステータスと実行時間、時刻、virtualenv、nvm、rvm、rust、go、kubernetes context、elixirのデコレーターを含む。
- [pointer](https://github.com/gpinkard/pointer-zsh-theme) - 現在のディレクトリ、最後のコマンドの返却ステータス、`git`現在のブランチを表示。
- [polyglot](https://github.com/agkozak/polyglot) - `zsh`、`bash`、`ksh93`、`mksh`、`pdksh`、`dash`、およびbusybox `ash`向けの動的プロンプト。基本的なASCII記号（可能な限り色を用いる）で、ユーザー名、ローカルまたはリモート `ssh`セッション、短縮パス、`git`ブランチとステータス、最後のコマンドの終了ステータス（非ゼロの場合）、`virtualenv`で作成された仮想環境、`venv`、`pipenv`、`poetry`、または`conda`を含む。
- [poncho](https://github.com/RainyDayMedia/oh-my-zsh-poncho) - RDMのoh-my-zshカスタムテーマ。
- [pond](https://github.com/notreallycheeks/pond-zsh-theme) - パステルグリーンとブルーの落ち着いた2行oh-my-zshテーマ。
- [poor-programmer](https://github.com/vishaltelangre/poor-programmer.zsh-theme) - プログラマー向けテーマ。`git`ステータス、rubyバージョン、プロジェクトパスを含む。
- [power](https://github.com/snakypy/zshpower) - Python開発者向けに最適化。`git`および`pyenv`ステータスのデコレーター、ユーザー名、ホストを含む。他のプラグインやフォントのインストールを試みるため、インストール前にその説明を読むことを推奨。
- [powerbash](https://github.com/erikschreier/powerbash-zsh) - ダークターミナル背景と良好に動作。`git`ステータスのデコレーターを含む。
- [powerless](https://github.com/martinrotter/powerless) - powerlineをインスピレーションとして作られた、極限のシンプルなpure ZSHプロンプト。
- [powerlevel10k](https://github.com/romkatv/powerlevel10k) - powerlevel9kのZSHテーマの高速再実装。同じ設定オプションを与えられた場合、powerlevel9kと同様のプロンプトを生成するが、速い。 [powerlevel9k](https://github.com/bhilburn/powerlevel9k)
- [powerlevel9k](https://github.com/bhilburn/powerlevel9k) - Powerlevel9kはZSH向けのテーマで、[Powerline Fonts](https://github.com/powerline/fonts)を使用する。vanilla ZSHまたはZSHフレームワーク（[Oh-My-Zsh](https://github.com/ohmyzsh/ohmyzsh)、[Prezto](https://github.com/sorin-ionescu/prezto)、[Antigen](https://github.com/zsh-users/antigen)、[many others](https://github.com/bhilburn/powerlevel9k/wiki/Install-Instructions)）と併用可能。
- [powerlevelHipstersmoothie](https://github.com/hipstersmoothie/PowerlevelHipstersmoothie) - [powerlevel9k](https://github.com/bhilburn/powerlevel9k)の拡張プラグイン。
- [powerline (brucehsu)](https://github.com/brucehsu/oh-my-zsh-powerline-theme) - powerlineの2行バージョン。情報用の1行と入力用の1行。
- [powerline (jeremy)](https://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme) - powerlineテーマの別のアプローチ。非常に設定可能だが、少なくとも256色対応のターミナルとpowerline対応のフォントが必要。
- [powerline-cute](https://github.com/dogrocker/oh-my-zsh-powerline-cute-theme) - [bullet-train](https://github.com/caiogondim/bullet-train.zsh)をベースにしている。
- [powerline-go](https://github.com/justjanne/powerline-go) - golangで書かれた美しい低遅延プロンプト。`git`および`hg`ステータスのデコレーター、最後に実行されたコマンドの終了ステータス、現在のPython virtualenv、シェル内かどうか、そして拡張が容易。 [nix](https://nixos.org/)
- [powerline-hs](https://github.com/rdnetto/powerline-hs) - Haskellで書かれた[Powerline](https://github.com/powerline/powerline)のクローン。元の実装よりはるかに高速であり、シェルの反応性を著しく向上させる。
- [powerline-pills](https://github.com/lucasqueiroz/powerline-pills-zsh) - Rubyで書かれており、powerline文字を使用して有用な情報を含むpillをシミュレート。
- [powerline-shell (b-ryan)](https://github.com/b-ryan/powerline-shell) - Bash、ZSH、Fish、tcsh向けの美しいかつ有用なプロンプトジェネレーター。`git`、`svn`、`fossil`、`hg`のデコレーター、Python virtualenv情報、最後のコマンドの終了ステータスを含む。
- [powerline-shell (banga)](https://github.com/b-ryan/powerline-shell) - Bash、ZSH、Fish向けの[powerline](https://github.com/Lokaltog/vim-powerline)風プロンプト。`git`/`svn`/`hg`/`fossil`ブランチ、最後のコマンドの終了ステータス、現在のディレクトリへの短縮パス、現在のPython virtualenvを表示し、カスタマイズ・拡張が容易。
- [powerline-train](https://github.com/sherubthakur/powerline-train) - powerlineのバリエーション。
- [powerline](https://github.com/carlcarl/powerline-zsh) - [Powerline](https://github.com/Lokaltog/vim-powerline)風プロンプト。[powerline-bash](https://github.com/milkbikis/powerline-bash)をベースにしている。virtualenv、`git`ステータス情報、最後に実行されたコマンドの終了コードを表示。
- [powermore](https://github.com/primejade/powermore-zsh) - [powerless](https://github.com/martinrotter/powerless)からフォークされた。シンプルなプロンプトで、`git`ステータスと現在のディレクトリを表示。
- [powerzeesh](https://github.com/sevaho/Powerzeesh) - PowerlineベースのZSHテーマ。簡潔さを追求しており、関連性のある情報のみを表示し、速度と見た目を最適化。[Agnoster](https://github.com/agnoster/agnoster-zsh-theme)および[Powerline](https://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme)にインスピレーションを得ている。
- [pre](https://github.com/leandromatos/pre-theme) - Sublime Text、Terminal、iTerm 2およびZSH向けのテーマコレクション。
- [predawn-shell](https://github.com/jamiewilson/predawn-shell) - ダークテอรミナルテーマに最適化されたテーマ。
- [pretty](https://github.com/TomasTomecek/pretty-git-prompt) - Rustで書かれたプロンプト。`git`の状態、ブランチ、タグ（現在のコミットに指す）、変更ファイル、新たに追加されたファイル、ステージされたファイル、衝突ファイルの数、ストッシュ内のファイル数をデコレート。
- [prezto_powerline](https://github.com/davidjrice/prezto_powerline) - prezto用のPowerline。Git情報およびRVMバージョンを表示。
- [prezto-cloud-prompt](https://github.com/klaude/prezto-cloud-prompt) - oh-my-zshのクラウドプロンプトのprezto版。
- [prezto-lambda](https://github.com/nixolas1/prezto-lambda) - Lambdaテーマ（prezto用）。
- [princess](https://github.com/mellypop/princess) - [abhiyan.zsh](https://github.com/abhiyandhakal/abhiyan.zsh)をモデルにしたテーマ。おそらく少しすぎるピンクと、おそらくあまりにも少ないエモジを含む。現在のディレクトリと`git`のステータスをデコレート。
- [probe](https://github.com/probe2k/probe_zsh) - `git`のステータスデコレートを含む。
- [prompt_blocks](https://github.com/MiloradFilipovic/promptblocks) - 極めてシンプルなNode.js + Gitテーマ。`git`のステータス、Nodeバージョン、現在のディレクトリをデコレート。
- [prompt_j2](https://github.com/malinoskj2/prompt_j2) - 動的エキストステータスインジケータを備え、状況に応じて2行に変更してコンテキストを表示できる。
- [prompt-powerline](https://github.com/Valodim/zsh-prompt-powerline) - 比較的重いZSHプロンプト。人気のある同名`vim`プラグインのPowerlineフォントに基づいている。ダーク背景に最適である。
- [prompt](https://github.com/nathanblair/prompt) - 軽量で一貫したプロンプト。`sh`、`dash`、`ash`、`zsh`、`pwsh`に適用可能。`git`のステータスデコレートを含む。
- [promptor](https://github.com/MickaelBlet/Promptor) - Powerlineにインスピレーションを得たプロンプト。`git`のステータス、ユーザー名、ホスト名、ワークディレクトリ、時間のデコレートを含む。
- [promptus](https://github.com/willeccles/promptus) - シンプルでミニマリズムを追求し、任意のシェルでプロンプトを統一できるC言語によるシェルプロンプトプログラム。エキストステータスおよびワークディレクトリのデコレートを含む。
- [pronto (arzezak)](https://github.com/arzezak/pronto) - 非常にシンプルなプロンプト。現在のディレクトリと`git`情報をデコレート。
- [pronto (jthat)](https://github.com/jthat/zsh-pronto) - シンプルで高速なテーマ。`git`のデコレートとタイム情報を持つ。
- [prowpt](https://github.com/alpaca-honke/prowpt) - シンプルで軽量かつカスタマイズ可能なPowerline風プロンプト。`git`情報、ユーザー名、ホスト名、現在のディレクトリ、最後のコマンドのエキストステータスをデコレート。
- [ps1.py](https://github.com/jwodder/ps1.py) - `git`のステータス、トリムされたディレクトリ、`chroot`および`virtualenv`プロンプトのデコレートを含む。
- [pumpkane](https://github.com/ColinZeDev/pumpkane-oh-my-zsh-theme) - 明瞭性、美しさ、生産性を重視した現代的でカラフルで情報豊かなテーマ。動的カラー、`git`ステータス統合、時間ベースカラー、オプションのニックネーム表示を備える。
- [punctual](https://github.com/dannynimmo/punctual-zsh-theme) - 簡単にカスタマイズ可能。[spaceship](https://github.com/denysdovhan/spaceship-prompt)に影響を受けている。
- [pure-agnoster](https://github.com/yourfin/pure-agnoster) - [pure](https://github.com/sindresorhus/pure)と[agnoster](https://gist.github.com/3712874)のマッシュアップ。`git`のデコレートを含み、ダークおよびライトテอรミナル背景とも良好に動作。
- [pure](https://github.com/sindresorhus/pure) - 美しく、ミニマリズムを重視し、高速なZSHプロンプト。`git`のステータスデコレートを含み、最後のコマンドが失敗した場合にプロンプトが赤くなる。リモートセッションまたはコンテナ内ではユーザー名とホスト名、プロセスが実行中では現在のフォルダとコマンドをデコレート。
- [purify (banminkyoz)](https://github.com/banminkyoz/purify) - シンプルで、高速で、カッコいいプロンプト。
- [purify (kyoz)](https://github.com/kyoz/purify) - 清潔で活気のあるテーマ。ダーク背景に最適。`git`のステータスデコレートを含む。
- [purity](https://github.com/petermbenjamin/purity) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)テーマおよび[pure](https://github.com/sindresorhus/pure)プロンプトにインスピレーションを得ている。
- [purpleblood](https://github.com/HFMorais/oh-my-zsh-purpleblood-theme/) - [darkblood](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/darkblood.zsh-theme)に基づく。`username@host`、`git`のステータス、現在のディレクトリをデコレート。
- [purr](https://github.com/mubinben/purr-zsh-theme) - 現在のディレクトリと`git`ステータスのデコレーターを備える。
- [purs](https://github.com/xcambar/purs) - で書かれた、非常にシンプルな風プロンプト。 [pure](https://github.com/sindresorhus/pure) [Rust](https://www.rust-lang.org/)
- [pustelto](https://github.com/Pustelto/shell_theme) - [Spaceship](https://github.com/denysdovhan/spaceship-prompt)テーマにインスピレーションを得たカラフルテーマ。`git`のデコレートを含む。
- [pwn](https://github.com/gh05t-4/pwn-theme) - ユーザー@ホスト、`git`および`hg`のステータス、Rubyバージョン、Pythonの仮想環境、現在のワークディレクトリをデコレート。
- [pyhack](https://github.com/williamcanin/pyhack) - ダークテอรミナルテーマと良好に動作。Pythonバージョン、Pythonパッケージバージョン（pyproject.toml）および`git`の現在のブランチ情報を表示。
- [qi3ber2](https://github.com/nichus/qi3ber2) - ダークマルチラインテーマ。`git`、ロード平均、最後のコマンドのエキストステータスをデコレート。
- [qoomon](https://github.com/qoomon/zsh-theme-qoomon) - ダーク背景に最適化。`git`情報を含む。テーマリポジトリにはiTerm 2およびTerminalのカラーリング設定も含まれる。
- [quantum](https://github.com/calebephrem/quantum-zsh) - スピード、スタイル、シェルの優位性を追求したスムーズでダイナミックなZSHテーマ。Gitに深く浸かっているか、あるいは単にテอรミナルでリラックスしているかに関わらず、Quantumはあなたのフローに適応する。
- [quewui](https://github.com/kauefontes/oh-my-quewui) - ダークテอรミナルテーマに最適化されたシンプルで清潔なテーマ。現在の時間、ユーザー、ディレクトリ、`git`のステータスをデコレート。
- [quietline](https://github.com/qwreey/quietline) - ヘッドラインテーマにインスピレーションを得たシンプルなテーマ。`git`のステータス、ユーザー@ホスト、現在のディレクトリをデコレート。
- [r](https://github.com/rafalkaron/r-zsh-theme) - シンプルで情報豊かなZSHテーマ。
- [r3nic1e](https://github.com/r3nic1e/r3nic1e) - [Agnoster](https://github.com/agnoster/agnoster-zsh-theme)変体。バッテリー状態、`git/hg`状態、時間、Kubernetesのコンテキストおよび名前空間、最後のコマンドの非ゼロエキストステータス、日付をデコレート。Powerlineフォントが必要。
- [rabbit](https://github.com/Hera-Moon/My-rabbit-Zsh-Theme) - に最適化。Unicodeに対応するテอรミナルアプリケーションが必要。のステータス、現在のワークディレクトリ、現在の仮想環境をデコレート。 `git` `git`
- [racotecnic](https://github.com/elboletaire/zsh-theme-racotecnic) - af-magic と posh-git をベースにしています。
- [radius](https://github.com/erikcc02/radius-zsh-theme) - `git` のステータス、ユーザー名、ホスト名、ディレクトリの装飾を含み、さらに [desk](https://github.com/jamesob/desk) のサポートを提供しています。
- [rafiki](https://github.com/akabiru/rafiki-zsh) - ZSH テルミナルにエモジを追加します。
- [ramiel](https://github.com/aknackd/zsh-themes) - [node](https://github.com/skuridin/oh-my-zsh-node-theme) のフォークです。
- [random-emoji-robbyrussell](https://github.com/parwatcodes/random-emoji-robbyrussell) - [random-emoji](https://gist.github.com/oshybystyi/2c30543cd48b2c9ecab0) と `robbyrussell` のテーマをベースにしています。
- [random-emoji](https://gist.github.com/oshybystyi/2c30543cd48b2c9ecab0) - ランダムなエモジ。
- [raspberrysh](https://github.com/MaxMalinowski/raspberrysh) - `git`、Python、時間、現在のホストとパスの装飾を含みます。
- [raytek](https://github.com/Raytek/raytek-zsh-theme) - シンプルでカラフルなテーマで、`git` のステータス装飾を提供しています。
- [raz](https://github.com/razman786/ohmyzsh-theme-raz) - ミニマムなプロンプトで、`git` のステータス装飾を含みます。
- [rb](https://github.com/rberenguel/rb-zsh-theme) - Powerline スタイルのテーマで、[Agnoster](https://gist.github.com/agnoster/3712874) をベースにし、`git` およびソーライズドテルミナルに最適化されています。Powerline 互換のフォントが必要です。
- [rbjorklin](https://github.com/rbjorklin/rbjorklin-zsh-theme) - ソーライズドテルミナルカラーに最適化されており、`git` のステータス装飾を含みます。
- [redfox](https://github.com/saeed0xf/terminal-themes) - 現在のディレクトリとフォックスアイコンの装飾を含みます。
- [redline](https://github.com/DrissTM/redline.zsh-theme) - ミニマムなテーマ。`git` のステータス、時間、ユーザーを含みます。
- [refined-flower](https://github.com/idaMakelaWork/refined-flower) - エモジを扱えるテルミナルプログラムが必要です。`git` のステータス装飾を含みます。
- [reggae](https://github.com/nmercado1986/zsh-reggae-theme) - ステータス装飾で色分けされたプロンプトにより、多くの情報をコンパクトに表示します。
- [rei](https://github.com/arturoalviar/rei-zsh-theme) - 最初の文字が「零（rei）」、数字0を含むシンプルなテーマ。`git` のステータス装飾を提供しています。
- [remiii](https://github.com/Remiii/remiii.zsh-theme) - [Agnoster](https://github.com/agnoster/agnoster-zsh-theme) をベースにし、[solarized](https://github.com/altercation/solarized) テルミナルテーマに最適化されています。
- [remolueoend](https://github.com/remolueoend/remolueoend.zsh-theme) - [Agnoster](https://github.com/agnoster/agnoster-zsh-theme) をベースにし、エモジを使って `git` のコンテキストを追跡します。ただし、[Prezto](https://github.com/sorin-ionescu/prezto) でのみ動作します。
- [renanborgez](https://github.com/renanborgez/ohmyzsh-theme-renanborgez) - 暗い背景に最適です。`nvm` および `git` の情報を装飾しています。
- [rho](https://github.com/andrii-rieznik/rho-zsh-theme) - ミニマムなテーマ。`git` のステータス、ホスト名、現在のディレクトリを装飾しています。
- [ribbon](https://github.com/pyjamafish/ribbon-prompt) - Powerline に似たテーマ。Python の `virtualenv` 装飾を提供しています。
- [rie](https://github.com/andrii-rieznik/rie-zsh-theme) - ミニマムなテーマで、ユーザー名、`git` のステータス、現在のディレクトリを装飾しています。
- [rigel](https://github.com/othiagos/rigel-zsh-theme/) - `git` の情報、user@hostname、現在のディレクトリの装飾を含みます。
- [rio](https://github.com/foxit64/zsh-theme-rio) - ミニマムなテーマで、`git` のステータスと現在のディレクトリを装飾しています。
- [risbow](https://github.com/waddupp00/risbow) - 零（rei）をモチーフにした ZSH テーマで、ロルカットのようなレインボー効果を提供しています。 [risto](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/risto.zsh-theme)
- [ritz](https://github.com/Ritzier/ritz.zsh-theme) - 時間、現在のディレクトリ、`git` のステータス、終了ステータス、前回実行コマンドの使用時間の装飾を含みます。
- [river](https://github.com/revir/river-zsh-config) - 暗いテーマで `git` の情報を含みます。
- [rkj-logik](https://github.com/logik93/rkj-logik.zsh-theme) - omzの[rkj](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/rkj.zsh-theme)をベースに、user@host、現在のディレクトリ、時間と日付のデコレーターを含む。
- [rkj-with-conda](https://github.com/cain986/rkj-with-conda-zsh-theme) - omzの[rkj](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/rkj.zsh-theme)をベースにし、conda環境と`git`のステータスのデコレーターを追加。
- [robbyolivier](https://github.com/YuyeQingshan/robbyolivier) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme) テーマおよび [zsh-git-prompt](https://github.com/olivierverdier/zsh-git-prompt) プロジェクトのアイデアをベースにしています。
- [robbyrussell-fullpath](https://github.com/toytag/robbyrussell-fullpath.zsh-theme) - オリジナルの[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)に、プロンプトにフルパスを含む。
- [robbyrussell-plus](https://github.com/jackjyq/robbyrussell-plus-zsh-theme) - [robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme) をベースにし、ホスト名の装飾を追加しています。
- [robbyrussell-WIP](https://github.com/ecbrodie/robbyrussell-WIP-theme) - `robbyrussell` テーマに、**WIP** コミットを示す出力を装飾しています。
- [rocket](https://github.com/Alexandresl/rocket-zsh-theme) - ミニマムなテーマで、`git` および `hg` のステータス装飾を含みます。
- [rougarou](https://github.com/RougarouTheme/rougarou-zsh) - 暗いテーマです。
- [rounded](https://github.com/daniilty/rounded-zsh-theme) - 現在のディレクトリと `git` のステータス装飾を含みます。
- [roundy](https://github.com/nullxception/roundy) - 速い、かわいい、丸いテーマ。`git` のステータス、現在のディレクトリ、前回実行コマンドの実行時間の装飾を含みます。[Nerd Font](https://github.com/ryanoasis/nerd-fonts) および Unicode をサポートするテルミナルアプリケーションが必要です。
- [rs](https://github.com/sam-621/rs-zsh-theme) - `git` の装飾を含みます。Unicode をサポートするテルミナルが必要です。
- [rufus](https://github.com/runarsf/rufus-zsh-theme) - 暗い背景に最適化されています。
- [rummik](https://github.com/rummik/zsh-theme) - @rummik のテーマ。プログレスバーに [psmin](https://gitlab.com/zick.kim/zsh/zsh-psmin) および `git` のステータス情報を提供します。
- [russtone](https://github.com/russtone/prompt-russtone) - [pure](https://github.com/sindresorhus/pure)と[sorin](https://github.com/sorin-ionescu/prezto)をインスピレーションとしており、`git`ステータスのデコレーターを含む。
- [ruweird](https://github.com/ruweird/ruweird.zsh-theme) - ミニマリズム。`git`ステータスと現在のディレクトリのデコレーターを備え、最後のコマンドの終了コードがゼロでない場合、傘と雨dropおよび終了コードを表示。
- [rwahasugui](https://github.com/rafawhs/rwahasugui.zsh-theme/) - `git`情報、現在の時刻、現在の作業ディレクトリ、アクティブなPython virtualenvを含むデコレーターを備える。
- [ryner](https://github.com/DoctorRyner/ryner-zsh-theme) - カラフルなテーマで、`git`デコレーターと現在のディレクトリを含む。
- [rzh](https://github.com/patwhatev/rzh) - emojiで`git`ステータスを表すテーマ。
- [s1ck3r](https://github.com/pseifer/s1ck3r) - スリムで一時的かつスペース効率の高いテーマ。`vi`モード、権限の上昇、最後のコマンドの終了ステータス、バックグラウンドジョブが実行中かどうか、作業ディレクトリ、`git`ステータスのデコレーターを含む。
- [s1ck94](https://github.com/zimfw/s1ck94) - S1cK94による（最初に廃止され、現在は消滅した）ミニマムプロンプトのフォーク。ユーザーがrootかどうか、バックグラウンドジョブの状態、viモード、最後のコマンドの終了ステータス、`git`ステータスのデコレーターを表示。
- [s7c](https://github.com/Samega7Cattac/s7c.zsh-theme) - ダークな背景と良好に動作。`git`ステータスのデコレーターを含む。
- [sailormoon](https://github.com/Domanowska/zshSailorMoonThemes) - サイラー・ムーンテーマをテーマとして集めたもの。
- [samshell](https://github.com/samuelb/samshell) - ミニマリズムのZSHテーマで、`git`、KubernetesおよびPython virtualenvのデコレーターを備える。
- [saraiva](https://github.com/ruisaraiva19/saraiva-theme) - `git`ステータスのデコレーターを含み、ダークなターミナル背景に良好に動作。
- [sashimi](https://github.com/simonmader17/sashimi-zsh-theme) - `git`ステータスおよび最後のコマンドの終了ステータスのデコレーターを含む。
- [saturn](https://github.com/gantoreno/saturn-prompt) - スペースと宇宙を愛する人向けのソフトでミニマリズムなプロンプト。クールなemojiと高度にカスタマイズ可能なプロンプト要素（アイコン、色、時刻フォーマットなど）を備える。
- [savior](https://github.com/Savecoders/Savior-zsh-theme) - 現在のディレクトリ、最後のコマンドの終了ステータス、`git`ステータスのデコレーターを備えたミニマリズムテーマ。
- [schminitz-v2](https://github.com/mashdots/schminitz-v2) - `git`ステータス、`user@host`情報、最後のコマンドの終了ステータス、rootとして実行中かどうかのデコレーターを表示。
- [schminitz](https://gist.github.com/schminitz/9931af23bbb59e772eec) - コマンドを使用時に、がバックグラウンドで実行されているかを表示。 `vim` `:sh`
- [scythe](https://github.com/kostoskistefan/scythe) - Powerlineを想起させるテーマ。`git`、最後のコマンドの終了ステータス、ディレクトリのデコレーターを含む。
- [sdt](https://github.com/sdlea/omz-theme-sdt) - 現在のディレクトリと`git`ステータスのデコレーターを備える。
- [searocket](https://github.com/dk949/searocket/) - [spaceship](https://github.com/denysdovhan/spaceship-prompt)のスリムバージョン。作業ディレクトリ、最後のコマンドの終了コード、ユーザー、バックグラウンドジョブ、`bun`、`d`、elm、go、nodejs、python、zigおよび`git`ステータスのデコレーターを備える。`D`ビルドチェーンが必要。
- [seashell](https://github.com/jottenlips/seasonal-zshthemes) - 海をテーマにしたミニマリズムテーマ。`git`ステータスのデコレーターを含む。
- [seeker](https://github.com/tonyseek/oh-my-zsh-seeker-theme) - このテーマは多くの特別なUnicode文字を使用して華やかにしているが、適切にサポートされていないフォントでは問題が生じる可能性がある。
- [seltzer](https://github.com/GrantSeltzer/seltzer.zsh-theme) - ダイエットテーマをインスピレーションとしており、色分けで情報を提供。
- [senpai](https://github.com/hiroru/senpai-zsh) - DevOps向けのクリーンプロンプトテーマ。`git`ステータス、Kubernetesコンテキスト、AWSプロファイル、GCPプロジェクト、Azureアクティブクラウドを含むデコレーターを備える。
- [sensa](https://github.com/miccou/sensa-theme) - `git`ステータス、GitHubユーザー名、現在のディレクトリのデコレーターを含む。
- [sentinelx](https://github.com/Robinx0/sentinelX-theme) - パーソナルテストおよびリッドチーム向けに最適化された軽量かつ高精度なZshテーマ。長時間実行されるセキュリティツールのリアルタイムな状況認識とプロセス追跡を提供。`git`ステータス、リアルタイムプロセススピナー、VPNステータス、rootステータス、最後のコマンドの実行時間のデコレーターを含む。
- [sepshell](https://github.com/sepehr/sepshell) - 古いtaybaltテーマに基づいたクリーンでミニマリズムなZSHテーマ。`git`のバイス/マージ/リベースモードとカスタマイズ可能なプロンプトシンボルを備える。
- [serenity](https://github.com/ars2062/serenity-zsh-theme) - コマンドライン上にソフトな色のボックスで重要なコンテキスト情報を表示するミニマリズムテーマ。Unicodeセパレーターを使用してクリーンかつ表現力のあるデザインを実現。rootステータス、ユーザー名、ホスト名、ホストIPアドレス、`git`ステータス、現在のディレクトリのデコレーターを備える。
- [seti_UX](https://github.com/ginfuru/iTerm-Seti_UX) - iTerm 2の色方案に対応したシンプルなoh-my-zsh互換テーマ。
- [sfz](https://github.com/mreinhardt/sfz-prompt.zsh) - lean promptの進化であり、pureのリライトである。
- [shades of purple](https://github.com/nmcc1212/shades-of-purple-windows-terminal/) - Windows Terminal向けの紫のテーマで、[powerline](https://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme)を彷彿とさせる。
- [shadow](https://github.com/agentshadow/shadow-zsh-theme) - `git`ステータス、ディレクトリ、ホスト名、ユーザー名、時刻のデコレーターを含む。
- [shayan](https://github.com/shayanh/shayan-zsh-theme) - シンプルなテーマで、`git`ステータスの装飾を提供します。
- [shelby](https://github.com/athul/shelby) - 純粋な`golang`で書かれた高速、軽量かつミニマリズムなプロンプト。最後のコマンドの終了ステータス、`git`ステータス、現在の作業ディレクトリのデコレーターを備える。
- [shellder](https://github.com/simnalamburt/shellder) - `git`ブランチデコレーターを備えたミニマリズムテーマ。Powerline互換フォントが必要。
- [shichi](https://github.com/arturoalviar/shichi-zsh-theme) - 最初の文字が七（shichi/nana）で、数字7を表すシンプルなテーマ。主色は赤で、アクセント色は黄色。`git`ステータスのデコレーターを含む。
- [shiftys](https://github.com/shifty0g/shiftys-zsh-theme/) - kaliテーマのチューティングバージョン。
- [shiko](https://github.com/regarager/shiko-prompt) - VCS情報と現在のディレクトリのデコレーターを備えたミニマリズムプロンプト。
- [shini](https://github.com/bashelled/shini) - 小さなテーマで、小さな情報を表示。ディレクトリ、ユーザー名、ホスト名、時刻、`git`のデコレーターを含む。
- [shinkansen](https://github.com/MRZ07/shinkansen.zsh-theme) - 高速でカスタマイズ可能かつ拡張しやすいテーマ。アクティブなvirtualenv内のPythonバージョン、`chruby`を使用している場合の現在のRubyバージョン、現在のNode.jsバージョン、現在のJavaバージョン、現在のGoバージョン、`chperl`を使用している場合の現在のPerlバージョン、現在のElixirバージョン、`git`ステータス、時刻、現在のディレクトリ、最後のコマンドの終了コードおよび実行時間、オプションのカスタムメッセージを含む。Powerline互換フォントが必要。
- [shirnschall](https://github.com/shirnschall/shirnschall-zsh-theme) - `git`ステータスおよび`user@hostname`のデコレーターを含む。
- [shiro (arturDobrowolski)](https://github.com/ArturDobrowolski/shiro-zsh-theme) - 現在のディレクトリ、`git`の状態、および最後に実行したコマンドの終了状態と実行時間に関するデコレーターを含む。
- [shiro (shirozuki)](https://github.com/shirozuki/shiro-zsh-theme) - 現在のディレクトリ、`git`の状態および最後に実行したコマンドの実行時間と終了状態に関するデコレーターを含む。
- [shocm](https://github.com/ericvanjohnson/shocm-zsh-themes) - [sixlive](https://github.com/sixlive/sixlive-zsh-theme)からフォークされた。`git`のデコレーターを備えている
- [short-ys](https://github.com/OREOmini/short-ys-zsh-theme) - [ys](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/ys.zsh-theme)テーマに基づいている。`git`および`hg`ステータスデコレーターを含む
- [shrikant](https://github.com/shr1k4nt/shrikant_zsh_theme) - `git`デコレーターを含む
- [shrug](https://github.com/to-var/shrug-zsh-theme) - [beer-theme](https://github.com/tcnksm/oh-my-zsh-beer-theme)にインスパイアされ、`git`ステータスおよび現在のディレクトリのデコレーターを含む
- [shuttle](https://github.com/Pandademic/Shuttle/) - `golang`で書かれた。OS、ユーザー、現在のディレクトリ、および最後に実行されたコマンドの終了コードに関するデコレーターを備えている
- [siegerts](https://github.com/siegerts/zsh-theme) - 右プロンプトに`git`ステータスデコレーターを含む
- [silver](https://github.com/reujab/silver) - マルチシェル対応でカスタマイズ可能な、Powerline風プロンプト。[Agnoster](https://github.com/agnoster/agnoster-zsh-theme)に強くインスパイアされた。[bronze](https://github.com/reujab/bronze)のRust版。[Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)が必要。非常にカスタマイズ可能で、`git`ステータスデコレーターを含む
- [simpalt](https://github.com/m-lima/simpalt) - 情報豊かな小型フットプリントテーマ。[Agnoster](https://github.com/agnoster/agnoster-zsh-theme)に基づいている
- [simpl](https://github.com/MrNeoTr1n0/simplzshell) - エレガンスとシンプルさを重視したミニマリズムテーマ。ルートステータス、現在のディレクトリ、および`git`ステータスのデコレーターを含む
- [simple (drNoob13)](https://github.com/drNoob13/SimpleZshTheme/) - Pythonの仮想環境、 `git` の状態、現在のディレクトリのデコレーターを含みます。
- [simple (pavdmyt)](https://github.com/pavdmyt/simple-oh-my-zsh-theme) - ミニマリズムテーマ。[robbyrussel](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#robbyrussell)に基づいており、iTermのウィンドウタイトルバーにgitステータス情報を埋め込むことで、プロンプトにスペースを使用しない `git`
- [simple (rkitover)](https://github.com/rkitover/sh-prompt-simple) - シンプルで軽量で見た目も良いプロンプト。MSYS2、Cygwin、WSLなどの非常に遅いシェルでも高速に動作する。現在の環境（ディストリビューション、OSなど）の短名、ブランチ（チェックアウト中）、および最後のコマンドの終了ステータス（成功時は緑のチェックマーク、非ゼロ終了時は赤いXマーク）のデコレーターを表示する `git` `git`
- [simple (savecoders)](https://github.com/Savecoders/simpleTheme-zsh-theme) - シンプルでミニマリズムテーマ。`git`、`username`および実行ステータスのデコレーターを含む
- [simple (tourcoder)](https://github.com/tourcoder/simple.zsh-theme) - ミニマリズムプロンプト。`git`ステータスデコレーターを含む
- [simple (yhiraki)](https://github.com/yhiraki/zsh-simple-prompt) - ミニマリズムプロンプト。特別なフォントを必要としない
- [simple-agnoster](https://github.com/iwat/simple-agnoster.zsh-theme) - Powerlineにインスパイアされたシンプルテーマ。`git`デコレーターを含む
- [simple-chack](https://github.com/chack93/simple-chack.zsh-theme) - ソーライズドテールカラー設定と良好に連携。`git`ステータスデコレーターを含む
- [simple-git](https://github.com/BazaJayGee66/simple-git-theme) - ミニマリズムテーマ。[gitstatus](https://github.com/kimyvgy/gitstatus-zsh-theme)にインスパイアされ、`git`デコレーターを含む
- [simple-headless](https://github.com/H3xaChad/zsh-simple-headless-theme) - 極めてシンプルなASCIIのみのプロンプトで、必要な情報を表示します。現在のディレクトリへの短縮パス、Python仮想環境、Nodeバージョン、ユーザー名@ホスト名、 `git` の情報をデコレートします。
- [simple-yet-beautiful](https://github.com/mathiasmoeller/simple-yet-beautiful-zsh-theme) - ミニマリズムテーマ。`git`ステータスおよび`user@host`プロンプトデコレーターを含む
- [simple-zsh-catppuccin](https://github.com/ezswan/simple-zsh-catppuccin) - [Catppuccin Mocha](https://catppuccin.com/)カラーパレットに基づき、[Dracula](https://github.com/dracula/zsh)テーマの基礎からアダプテッド。このテーマは、gitステータス、時刻表示、コンテキスト、ディレクトリ情報に対応するシンプルかつ機能的なプロンプトを備え、ezswanが発見したヘキサデシマルカラー対応を追加している
- [simplezsh](https://github.com/fr0zn/simplezsh) - ミニマムテーマ。`git`情報表示を含む
- [simply-perfect](https://github.com/SetOfAllSets/simply-perfect-zsh-theme/) - PowerlineおよびBullettrainに似たテーマ。 `git` の状態、現在のディレクトリ、最後のコマンドの終了状態、現在の時間、ユーザー名をデコレートします。
- [sinon](https://github.com/k-kinzal/oh-my-zsh-sinon-theme) - k-kinzalのsinonテーマ。`git`ステータスデコレーターを含む
- [sit](https://github.com/svensen/sit.zsh-theme) - ミニマリストテーマで、及、最後のコマンドの終了状態とパスに関するデコレーターを含む。 `git`
- [sixlive](https://github.com/sixlive/sixlive-zsh-theme) - このテーマはユニークなディレクトリ一覧を備えている。`git`プロジェクト内では、ディレクトリ表示が現在のリポジトリルートに限定される
- [sk9](https://github.com/skeiter9/sk9-zsh) - Skeiter9のZSHテーマ
- [skeletor-syntax](https://github.com/ramonmcros/skeletor-syntax) - Atom、PrismおよびZSH向けテーマコレクション。He-Man and the Masters of the UniverseのSkeletorにインスパイアされた
- [skiff](https://github.com/xiaoshihou514/skiff) - 軽量ZSHテーマ。`git`ステータスおよび現在のディレクトリデコレーターを備える
- [skill (asafaeirad)](https://github.com/ASafaeirad/oh-my-zsh-skill-theme) - 作業ディレクトリ、 `git` 作業ブランチ、作業ディレクトリの状態、トラッキングブランチの状態をデコレートします。
- [skill (frontendmonster)](https://github.com/frontendmonster/oh-my-zsh-skill-theme) - ダークテールに最適化。`git`ステータスデコレーターを表示する
- [skondrashov](https://github.com/sergkondr/skondrashov-zsh-theme) - ミニマリスト。`git`の状態、現在のkubernetesコンテキストおよび現在のAWSプロファイルに関するデコレーターを含む。
- [skull](https://github.com/tahadostifam/skull-zsh) - `git`ステータス、Python仮想環境およびRuby `rvm`ステータスデコレーターを含む
- [sleeplessmind](https://github.com/godbout/sleeplessmind-zsh-theme) - [gitster](https://github.com/shashankmehta/dotfiles/blob/master/thesetup/zsh/.oh-my-zsh/custom/themes/gitster.zsh-theme)および[odin](https://github.com/tylerreckart/odin)にインスパイアされたZSHテーマ
- [slick](https://github.com/nbari/slick) - [pure](https://github.com/sindresorhus/pure)、[purs](https://github.com/xcambar/purs)および[zsh-efgit-prompt](https://github.com/ericfreese/zsh-efgit-prompt)にインスパイアされた。インストールには`cargo`が必要
- [slimline](https://github.com/mengelbrecht/slimline) - ミニマムで高速かつエレガンスなZSHプロンプト。正しい情報、正しいタイミングで表示する
- [sm](https://github.com/blyndusk/sm-theme) - ミニマリズムテーマ。`git`ステータスデコレーターを含む
- [smail](https://github.com/nimacpp/themes-zsh) - `git` の状態、現在のディレクトリ、最後のコマンドの終了状態をデコレートします。
- [small-terminal-diy](https://github.com/Sokkam/small-terminal-diy-theme) - [ys](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/ys.zsh-theme)テーマの変形版（[oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)）
- [smelly](https://github.com/Vicfs/smelly-theme/) - Pythonの`venv`および`git`ステータス用のミニマリズムプロンプト
- [smiley](https://github.com/gsamokovarov/smiley.zsh-theme) - 幸せと悲しみの表情を含むプロンプト
- [snowflake](https://github.com/angelina-tsuboi/snowflake-zsh-theme) - ダークテーマと調和する美しい、シンプルで整ったZSHテーマ。涼しげな色調を採用。
- [sobole](https://github.com/sobolevn/sobole-zsh-theme) - 古い趣味にインスパイアされたミニマリズムテーマ。冗長な特徴、エモジ、フィンガースピンナーや他の視覚的なノイズは一切ない。明るいモードと暗いモードを備える。
- [softblobby](https://github.com/gsalami00/softblobby/) - ユニコーン、ピンク、パープルを愛する人のためのテーマ。`git`情報、現在ディレクトリ、時間、ユーザー名のデコレーターを含む。
- [solarized-powerline (houjunchen)](https://github.com/houjunchen/solarized-powerline) - ZSH用のソーライズドパワーラインスタイルテーマ。
- [solarized-powerline (KuoE0)](https://github.com/KuoE0/oh-my-zsh-solarized-powerline-theme) - ソーライズドパワーラインスタイルの変形版。
- [solarizsh](https://github.com/paddykontschak/Solarizsh) - robbyrussellのoh-my-zshテーマの色修正。[solarized](https://github.com/altercation/solarized)ターミナルと互換性を持つようにする。
- [sorin-modified-dark](https://github.com/hrmeetsingh/sorin-modified-dark) - [sorin](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#sorin)に基づく。ミニマリズムで、`git`ステータスおよび現在ディレクトリのデコレーターを追加。
- [spaceship](https://github.com/denysdovhan/spaceship-prompt) - `git`、`nvm`、rvm/rbenv/chruby、python、`ssh`など、有用なステータスデコレーターを含むテーマ。
- [spaceshit](https://github.com/claudiosanches/spaceshit-zsh-theme) - [spaceship](https://github.com/denysdovhan/spaceship-prompt)の美しさとミニマリズムセットのスピードを融合。現在ディレクトリ、`git`ステータス、コマンド実行時間、色分けされた成功／エラー記号のデコレーターを含む。
- [spectere](https://github.com/Spectere/spectere-omz-theme) - パワーライン風。現在ディレクトリ、ルートステータス、`user@hostname`、`git`ステータスのデコレーターを含む。
- [spowerline](https://mbauhardt.github.io/spowerline/) - Scalaで書かれたテーマ。[Agnoster](https://github.com/agnoster/agnoster-zsh-theme)、[tmux](https://tmux.github.io)パワーライン、vimパワーライン、vimステータスプラグインにインスパイアされた。
- [spyrhoo](https://github.com/FajarKim/spyrhoo-zsh-theme) - 時刻、`git`、現在ディレクトリのデコレーターを含む。
- [ssfprompt](https://github.com/hugoh/zsh-ssfprompt) - シンプルでスリムで速い。`ssh`、virtualenv、vcsのデコレーターを含む。
- [staples](https://github.com/dersam/staples) - [bureau](https://github.com/isqua/bureau)に基づき、SSHで接続されている場合に`user@host`を表示。
- [starboy](https://github.com/prdpx7/Starboy) - シンプルなテーマ。
- [starship (wintermi)](https://github.com/wintermi/zsh-starship) - スターシッププロンプトを使用するためのシンプルなプラグイン。パワーラインテーマも併用可能。
- [starship](https://starship.rs/) - ミニマリズム、高速、極めてカスタマイズ可能。
- [starship2k](https://github.com/2KAbhishek/starship2k) - パワーラインサポート、複数言語、マルチラインプロンプトを含む。`git`ステータスのデコレーターを含む。
- [statusline](https://github.com/el1t/statusline) - 必要なときに情報セグメントを提供するレスポンシブZSHテーマ。
- [steef (danihodovic)](https://github.com/danihodovic/steeef) - steeefテーマのスタンドアローンリポジトリ。このリポジトリの目的は、steeefテーマを使用する際にoh-my-zshに依存しないようにすること。AntibodyなどのZSHプラグインマネージャーはoh-my-zshを使わずにテーマを使用できる。
- [steef (zelongguo)](https://github.com/ZelongGuo/steeef) - [zimfw steef theme](https://github.com/zimfw/steeef)に基づく。ユーザー名@ホスト名、python venv、`git`ステータス、現在ディレクトリのデコレーターを含む。[git-info](https://github.com/zimfw/git-info)が必要。
- [steef (zimfw)](https://github.com/zimfw/steeef) - [steeef's](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/steeef.zsh-theme)テーマのカスタマイズ可能なバージョン。
- [steeple](https://github.com/erwanjugand/steeple-zsh-theme) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [stellachar](https://codeberg.org/ar-mo/armans-zsh-themes) - ミニマリズム、パステルカラー。
- [stigmata](https://github.com/VLtim43/stigmata.zsh-theme) - ユーザー@ホストおよび現在ディレクトリのデコレーターを含む。
- [sublime](https://github.com/pjmp/sublime) - サブリム、クリーン、ミニマリズムなZSHテーマで、`git`ステータスのデコレーターを含む。
- [sugar-free](https://github.com/cbrock/sugar-free) - [Pure](https://github.com/sindresorhus/pure)および[Candy](https://github.com/BinaryMuse/oh-my-zsh/blob/binarymuse/themes/candy.zsh-theme)テーマに基づく。
- [sukeesh](https://github.com/sukeesh/sukeesh-zsh-theme) - `git`ステータスのデコレーターを含む。ダークターミナル背景に特に適している。
- [sulfurium](https://github.com/Sulfurium/zsh-theme) - sulfuriumOSの公式ZSHテーマ。
- [sunrise-ruby](https://github.com/ston1x/sunrise-ruby) - [sunrise](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/sunrise.zsh-theme)に似ているが、アクティブなRubyバージョンを含む。
- [sunrise](https://github.com/tech8i/zsh_sunrise) - バッテリー状態、現在ディレクトリ、日時をデコレート。
- [superkolo](https://github.com/Minipada/superkolo) - [kolo](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/kolo.zsh-theme)テーマに日時とステータスを追加。
- [susi](https://github.com/carcruz/susi-zsh-iterm) - `git`ステータスのデコレーターおよびそれに伴うiTerm2のカラーパレットを含む。
- [svs](https://github.com/SvS30/svs-theme) - クリーンで分散を避けたテーマ。`git`ステータスおよび現在パスのデコレーターを含む。
- [sy](https://github.com/ttttmr/sy-zsh-theme) - [ys](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/ys.zsh-theme)に基づき、`git`ステータスのデコレーターを含む。
- [t2colorful](https://github.com/AmirhosseinAbutalebi/t2colorful-oh.my.zsh) - `git`情報、現在ディレクトリ、前回コマンドの終了ステータス、現在時刻のデコレーターを含む。
- [t2er](https://github.com/t2er/t2er-zsh-theme) - ミニマリズムテーマで、`git`のデコレーターを含む。
- [tabaf](https://github.com/bvc3at/tabaf-zsh-theme) - 暗い背景に最適化された極小ZSHテーマ。
- [tarcadia](https://github.com/Tarcadia/tarcadia-zsh-theme) - [jonathan](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/jonathan.zsh-theme)に基づいています。現在のディレクトリと`git`のステータスに向けたデコレーターを含みます。
- [taw-ys-venv](https://github.com/BrokeDudeAbula/taw-ys-venv) - ユーザー名、現在のディレクトリ、`git`情報、現在のPython `venv`を表す2行のプロンプト付き。[AzarAI-TOP/taw-ys-zsh-theme](https://github.com/AzarAI-TOP/taw-ys-zsh-theme)に基づく。
- [tcr](https://github.com/tulioribeiro/zsh-tcr-theme) - 極簡的なテーマ。現在のディレクトリのデコレーターを表示し、`git`ステータス情報と`nvm`バージョンを表示します。
- [teajay](https://github.com/Teajey/teajey-zsh-theme) - murilassoおよびfishyテーマから派生。`git`ステータス、現在のディレクトリへのパス（最も関連性の高い部分のみを表示するために折りたたまれる）、および実行された最後のコマンドの終了コードを含むデコレータを提供。
- [temeraf](https://github.com/filiptoma/temeraf-zsh) - ミニマリストなテーマで、`git`のステータス、タイムスタンプおよび最後の終了ステータスにデコレーションを施した。
- [tepig-ys](https://github.com/thingerpig/tepig-ys.zsh-theme) - `git`のステータスデコレーションとconda/virtualenvのステータスを含む。
- [termux](https://github.com/rooted-cyber/Termux-zsh-theme) - ミニマリストテーマ。
- [thayne](https://github.com/tmccombs/thayne.zsh-theme) - 最後のコマンドの終了状態、1秒以上かかる場合の実行時間、現在時刻、現在のディレクトリ、`git`状態を含むデコレータが提供されています。[Nerd Font](https://github.com/ryanoasis/nerd-fonts)が必要です。
- [the-time-lord](https://github.com/jhwhite/the-time-lord) - [gallifrey](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/gallifrey.zsh-theme)に基づいたテーマ。
- [theme-line](https://github.com/yw9381/oh-my-zsh_theme_line) - カラフルなテーマで`git`ステータスを表示。
- [themer](https://github.com/MrRedacted/zsh-themer) - 複数の色のテーマが用意されており、`git`ステータスデコレーターが含まれます。また、`.zsh-theme`ファイル内に複数のアイコンから選択可能です。[strug](https://github.com/triplepointfive/oh-my-zsh/blob/master/themes/strug.zsh-theme)に基づいています。
- [theozera](https://github.com/theogandara/zsh-theme) - `git` の状態、現在のディレクトリの短縮表示、最後のコマンドの終了状態をデコレートします。
- [theta-async](https://github.com/jesec/zsh_theme_theta-async) - [theta](https://github.com/eendroroy/theta)の非同期バージョン。VCSのステータス情報を含む。
- [theta](https://github.com/eendroroy/theta) - `git`および`hg`のステータスデコレーションを含み、Java、Python、Ruby、Node、GoおよびElixirのバージョン情報を提供します。
- [theto](https://github.com/heyvito/theto-zsh-theme) - 単純なテーマ。[Nerd Fonts](https://nerdfonts.com/)が必要であり、`vi`モードのステータスと`git`のデコレーションを含む。
- [thetraveler](https://github.com/bassopenguin/thetraveler) - アンラーヴァーを参考にし、`git`の状態を記号で表示します。
- [thm](https://github.com/thm-unix/thm-zshtheme) - 仮想環境、現在のディレクトリ、`git`の状態に向けたデコレーターを含む。
- [thnikk](https://github.com/thnikk/zsh-theme-thnikk) - [spaceship](https://github.com/denysdovhan/spaceship-prompt)テーマの最小構成版。
- [thygod](https://github.com/Thy-GoD/thy-god-zsh-theme) - [gnzh](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/gnzh.zsh-theme)および[bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme)をベースにした。 `git`ステータスデコレーターを含み、コマンドが失敗した場合にプロンプトを赤い十字に変更する。
- [thyme (chenhao-ye)](https://github.com/chenhao-ye/thyme) - 殻に使う調味料。[bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme)、[gnzh](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/gnzh.zsh-theme)、[bullet-train](https://github.com/caiogondim/bullet-train.zsh/blob/master/bullet-train.zsh-theme)に基づく。
- [thyme (kawamurakazushi)](https://github.com/kawamurakazushi/thyme) - シンプルなテーマで、`git`ステータスの装飾を提供します。
- [toledo](https://github.com/mmatongo/toledo) - シンプルでミニマリストなテーマ。`git`ステータスのデコレーションをサポート。Vue 2と3で動作します。 `zsh` `bash` `dash` `yash`
- [tonni4](https://github.com/AndreyPuzanov/tonni4-zsh-theme) - 時間と`git`ステータスのデコレータを含む。
- [topan](https://github.com/fudyartanto/topan-theme-oh-my-zsh) - `git`の情報を含む；暗い背景に最適です。
- [torim](https://github.com/Aggrathon/torim) - [sorin](https://github.com/zimfw/sorin)、[asciiship](https://github.com/zimfw/asciiship)および[mh](https://github.com/ohmyzsh/ohmyzsh/wiki/themes#mh)のテーマを参考にしています。user@hostname（ `ssh`でアクセスしたとき）のデコレータ、現在の作業ディレクトリへのパスの切り詰め、rootとして実行されているかどうか、失敗した場合の最後に実行されたコマンドのエラーコード、現在の時刻、長時間実行されるコマンドの実行時間、現在の仮想環境、および`git`の状態を含みます。
- [tq](https://github.com/kitian616/tq-zsh-theme) - `git`のステータス、時間の表示を行い、Powerlineに適合したフォントが必要です。
- [traffic](https://github.com/fcce/traffic-zsh-theme) - ZSH用のダークテーマ。
- [trajan](https://github.com/denisinla/trajan-zsh-theme) - ZSH用のダークテーマ。
- [transient](https://github.com/olets/zsh-transient-prompt) - zshのコマンドラインに一時的なプロンプトを追加する——つまり、現在のコマンドラインのプロンプトを過去のコマンドラインのプロンプトと区別する。たとえば、過去のプロンプトには、文脈情報の表示を少なくする必要があるかもしれない。あるいは、過去のコマンドをプロンプトの前に付けるのではなく、それぞれの行に配置して、選択やコピーをしやすくする場合もある。詳細は [zsh-transient-prompt.olets.dev](https://zsh-transient-prompt.olets.dev/) で。
- [trinity](https://github.com/de-luca/Trinity) - [geometry](https://github.com/geometry-zsh/geometry)に基づいたシンプルなテーマ。`git`の装飾を含む。
- [trios](https://github.com/MrEchoFi/trios-zsh-theme) - パエンテスター、サイバーエクスパート、CTFプレイヤー向けの極小サイバーパンクZSHプロンプト。六角形のbulletセグメント、電気ブルーのハイライト、色分けされたコマンドエコー——成功は青、エラーは赤。Nerd Fontは不要。
- [tron](https://github.com/iDoTron/tron-zsh-theme) - 最後のコマンドの実行状態、作業ディレクトリ、時間、ユーザー@ホスト、および実行結果のデコレーションを含む。 `git`
- [troopert](https://github.com/TrooperT/Troopert-theme/) - `git`のステータス、非ゼロの場合の最後の返却コード、完全なパスワード、および`$RPROMPT`のカスタマイズ可能な表示を含むデコレーターが提供されます。
- [tsotra](https://github.com/nylo-andry/zsh-themes) - 極小主義テーマ。`git`ステータス、k8sコンテキスト、および`rvm`ステータス向けのデコレーターを含む。
- [turs](https://github.com/eikendev/turs) - 速い、最小限の [Purs](https://github.com/xcambar/purs)風のプロンプト。
- [tvline](https://github.com/thvitt/tvline) - [agnoster](https://gist.github.com/agnoster/3712874)テーマから派生し、Powerlineフォントの強化を追加します。
- [twilight](https://github.com/Henryws/twilight-prompt) - 極めてシンプルだが、最後のコマンドの終了状態、`git`ステータスおよび`user@hostname`装飾を含む。
- [type0](https://github.com/MikereDD/type0_zsh-theme) - yarisgutierrezによる[classyTouch](https://github.com/yarisgutierrez/classyTouch_oh-my-zsh)を参考にした。`git`のデコレーションを含む。
- [typedark](https://github.com/BonnyAD9/TypeDark) - [ZSH Syntax Highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)で動作します。
- [typewritten](https://github.com/reobin/typewritten) - シンプルで情報量の少ないテーマで、重要な部分に余白を残す。非同期 `git` デコレーションの更新を高速化する。
- [ubunly](https://github.com/alejandromume/ubunly-zsh-theme) - Kali Linux コンソールを模倣。注：このテーマは多くのキーを再割り当てし、ZSHの多くのオプションを設定しており、テーマはそれらをそのままにすべきである。
- [ubuntu-ish](https://github.com/Thesola10/zsh-ubuntu-ish) - デフォルトのDebian/Ubuntu `bash` プロンプトを模倣。
- [ubuntu-with-vitamins](https://github.com/ureesoriano/zsh-ubuntu-with-vitamins-zim-theme) - デフォルトのUbuntuプロンプトを模倣しているが、`git` デコレーションを追加。
- [ubuntu](https://github.com/janstuemmel/zsh-ubuntu-theme) - シンプルなテーマで、`git` ステータスデコレーションを含む。
- [ultima](https://github.com/egorlem/ultima.zsh-theme) - ミニマリストで、`git` ステータスと現在のディレクトリデコレーターを含む。
- [ultimate](https://github.com/b4b4r07/ultimate) - ミニマリストなテーマで、`git` ステータス、vimモードインジケータ、短縮パスのデコレーターを含む。
- [ultimator](https://github.com/Ultimator14/ultimator-zsh-theme) - [Agnoster](https://gist.github.com/agnoster/3712874) 風のテーマ。現在のディレクトリ、`user@host`、Python virtualenv、バックグラウンドジョブ、最後のコマンドの終了ステータス、および`git` ステータス情報を含むデコレーター。[zsh-git-prompt](https://github.com/Ultimator14/zsh-git-prompt) プラグインとNerdfontsが必要。
- [ulyssesys](https://github.com/UlyssesZh/ulyssesys) - 現在のディレクトリまでのフルパス、最後のコマンドの終了コード、`git` ステータスのデコレーターを含む。
- [unicorn](https://github.com/juliuscaesar/unicorn) - ルートステータス、virtualenv、nvm、rvm、現在のディレクトリ、時間、現在のディレクトリ、エモジ情報のデコレーターを含む。をインスピレーションとしている。 `git` [wild cherry](https://github.com/mashaal/wild-cherry)
- [unit-1](https://github.com/nerdbude/Unit-1) - ミニマリストなテーマでITWTBカラーを採用。
- [userandnode](https://github.com/timhilton/userandnode) - シンプルなテーマで、ユーザー名、nodeバージョン、現在のディレクトリ、および`git`情報のデコレーターを含む。
- [valuca](https://github.com/keyaedisa/Valuca) - [ducula](https://github.com/janjoswig/Ducula)の変種。バックグラウンドジョブステータス、ユーザー名、ホスト名、virtualenv、現在のディレクトリ、最後のコマンドの終了コード、`git`情報、現在の時間を含むデコレーターを含む。
- [vanan](https://github.com/avano/vanan.zsh-theme) - あなたのターミナルに詳細な`git`情報を追加。また、`vi`モードおよび最後に実行されたコマンドのステータスのデコレーターも含む。
- [vaporwave](https://github.com/notreallycheeks/vaporwave-zsh-theme) - カラフルなテーマで、`git`ステータス、Python virtualenv、最後のコマンドの終了ステータス、時間のデコレーターを含む。
- [vehemence](https://github.com/H1N1-dev/vehemence-zsh) - `pwd`、`user@host`、`tty`、時間、最後のコマンドの終了コード、`git`ステータスのデコレーターを含む。
- [velvet](https://github.com/dor133/velvet-zsh-theme) - `git`ステータス、ユーザー名、現在のディレクトリ、最後のコマンドの終了コード、時間のデコレーターを含む。
- [vercel](https://github.com/vercel/zsh-theme) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [vertepommes](https://github.com/TheRojam/vertepommes-theme) - ysに基づいている。VCSステータス、ユーザー名、現在のディレクトリのデコレーターを含む。
- [vinhnx](https://github.com/vinhnx/vinhnx.zsh-theme) - [mgutz](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/mgutz.zsh-theme)から改良されたテーマ。[Solarized](https://github.com/altercation/solarized)カラーパレットを使用すると、非常に美しい。
- [vitesse](https://github.com/rafaeldellaquila/zsh-vitesse-theme/blob/master/img/preview.png) - VS Codeの[Vitesse](https://github.com/antfu/vscode-theme-vitesse)テーマをインスピレーションとしている。`git`ステータスデコレーターを含む。
- [voidy](https://github.com/rwejdling/voidy) - [lambda](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/lambda.zsh-theme)および[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)テーマから要素を借りて、プロンプトの右側にアクティブな[aws-vault](https://github.com/99designs/aws-vault)プロファイルを追加。
- [vszambon-ocean](https://github.com/vzambon/vszambon_ocean-zsh-theme) - 現在のディレクトリ、`git`ステータス、日/夜アイコン、`docker`コンテナ内での実行状態、および日時を含むデコレーターを含む。
- [vtex](https://github.com/charleseduardome/oh-my-zsh-vtex) - `git`ステータス、現在のディレクトリ、[VTEX](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-command-reference#default-commands)アカウント、VTEXワークスペースのデコレーターを含む。
- [vulcan](https://github.com/Bruceboy/vulcan-zsh-theme) - シンプルなテーマで、デフォルトの`bash`テーマに似ている。`git`デコレーターを含む。
- [wade](https://github.com/wadehammes/wade.zsh-theme) - 人気のZSHテーマ[Agnoster](https://gist.github.com/agnoster/3712874)と[Fishy](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/fishy.zsh-theme)をマッシュアップし、視覚的に調整したテーマ。
- [wang-iterm](https://github.com/0532/wang-iterm-zsh) - 0532テーマに基づいている。
- [warm-colours](https://github.com/BastionAtackDev/Warm-Colours.zsh-theme/) - user@host、現在のディレクトリ、datetimeのデコレーターを含む。
- [warm-springs](https://github.com/brtmax/warm-springs) - 温かみがあり、地味なZSHテーマ。Sonomaの[Warm Springs farm](https://www.mazzocco.com/Our-Story/Vineyards/Warm-Springs-Ranch)の画像をインスピレーションとしている。
- [warmblood](https://github.com/D42H5/warmblood) - [darkblood](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/darkblood.zsh-theme)に基づいている。`git`情報、user@hostname、現在のディレクトリのデコレーターを含む。
- [weakline](https://github.com/vihrom/weakline) - Goで書かれた、非常に高速で軽量かつ現代的なプロンプト。`git`ステータス、現在のディレクトリ、Python virtual environmentのデコレーターを含む。
- [whale](https://github.com/whalesea520/whale-zsh-theme) - ワイルドテーマの高速再実装。
- [whales](https://github.com/lbergelson/zsh_whales_theme) - `git`ステータス、Javaバージョン、最後のコマンドの返却ステータス、ディレクトリのデコレーターを含む。
- [wild-cherry](https://github.com/mashaal/wild-cherry) - ZSH、iTerm 2、Sublime、Atom、& Mouにインスピレーションを受けて作られた物語風のテーマ。
- [windows](https://github.com/juliavallina/windows-zsh-theme/) - Windows Command Promptをインスピレーションとしている。現在のディレクトリのデコレーターを含む。
- [winline](https://github.com/khuei/winline) - Greg Hurrellの[prompt](https://github.com/wincent/wincent/blob/master/aspects/dotfiles/files/.zshrc)の非同期バージョン。`git`ステータス、最後のコマンドの実行時間、現在のディレクトリ、ネストされたシェル、ルートステータスのデコレーターを含む。
- [wkentaro](https://github.com/wkentaro/wkentaro.zsh-theme) - Pythonユーザー向けのシンプルなテーマ。virtualenvおよび`git`ステータスデコレーターを含む。
- [work-line](https://github.com/afnizarnur/work-line) - 良いエモジを含むテーマ。
- [workbench](https://github.com/u8slvn/oh-my-zsh-workbench-theme) - `git`ステータスデコレーター、作業ディレクトリ、最後のコマンドの終了ステータス、現在の`virtualenv`を含む。
- [wormwood](https://github.com/ann-kilzer/annkilzer.zsh-theme) - 最後のコマンドの終了ステータス、現在のディレクトリ、`git`ステータスのデコレーターを含む。
- [x](https://github.com/tharindu899/x-theme) - カスタマイズ可能なバナーを含む
- [xandermute](https://github.com/SoYoureAWaffleMan/xandermute-oh-my-zsh-theme/) - ミニマリズムテーマ。`git`と現在のディレクトリの装飾を含む。
- [xavi](https://github.com/onthedock/xavi.zsh-theme) - [gnzh](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/gnzh.zsh-theme)テーマの改良版。`git`ステータスと現在のディレクトリにエモジ装飾を含む。
- [xbira](https://github.com/ITAxReal/xbira) - [bira](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/bira.zsh-theme)に基づくテーマ。`git`ステータス、ユーザー@ホスト名、最後のコマンドの終了ステータス、および現在のディレクトリにデコレーターを含む。
- [xlk-simple](https://github.com/xuelingkang/xlk-simple-zsh-theme) - シンプルなテーマ。`git`装飾を含む。
- [xm](https://github.com/Shiaoming/xm) - ダークなターミナル向けテーマ。`git`装飾を含む。
- [xor](https://github.com/xor3n/xor-zsh-theme) - 自己説明的にミニマリズムで「機能が少ない」と述べており、`git`装飾を含む。
- [xremix](https://github.com/xremix/oh-my-zsh-xremix-theme) - oh-my-zshのシェルテーマで、Jreeseテーマプラグインに基づく。
- [xris47](https://github.com/ivan-ristovic/xris47.zsh-theme) - 高速、シンプルで洗練されたテーマ。[tmux](https://github.com/tmux/tmux/wiki)と[vim-airline](https://github.com/vim-airline/vim-airline)とで最も効果を発揮。
- [xxf](https://gist.github.com/xfanwu/18fd7c24360c68bab884) - 現在の`git`コミットの短縮ハッシュとメッセージを表示。
- [yairshefi](https://github.com/yaireclipse/yairshefi-ohmyzsh-theme) - プロンプトを改行で分離したミニマリズムテーマ。[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)テーマに基づく。
- [yazpt](https://github.com/jakshin/yazpt) - クリーンで速い、見た目が良いZSHプロンプトテーマ。Git/Subversion/TFVCステータス情報を丁寧に組み込み、Oh My Zshなどの人気プラグインマネージャーと統合され、カスタマイズや拡張が容易。
- [yechen](https://github.com/liyechen/yechen.zsh-theme) - ミニマリズムテーマ。`git`ステータス装飾を含む。
- [yeet](https://github.com/jeetelongname/Yeet-theme) - ミニマリズムプロンプト。`git`ステータス装飾を含む。
- [yellow peach](https://github.com/tomorrowbye/yellow-peach-theme) - クリーンでミニマリズムなデザイン。`user@hostname`、`git`ステータス、現在のディレクトリ、現在の時刻にデコレーターを含む。
- [yellow-sea-diamonds](https://github.com/jimratliff/yellow-sea-diamonds-zsh-theme) - `git`ステータス、現在のディレクトリ、アクティブなPython仮想環境、最後のコマンドの終了ステータスにデコレーターを含む。
- [yindev](https://github.com/menyinch/yindev-zsh-theme) - `gndx`の変種。`git`ステータスと現在のディレクトリにデコレーターを含む。
- [ykali](https://github.com/JeffreyYAJ/ykali-zsh) - 新しいZSHセッションごとに変更可能なバナーを表示。ユーザー名、ホスト名、現在のディレクトリ、wlan0 IP、`git`情報にデコレーターを含む。
- [ykmam](https://github.com/julienvanderkluft/ykmam-zsh-theme/blob/master/ykmam.zsh-theme) - [ys](https://github.com/cristiancavalli/ys-zsh-custom-theme)テーマから改良され、ダーク背景に最適化されたテーマ。
- [ys-cluster](https://github.com/AndiH/oh-my-zsh-ys-cluster-theme) - [ys](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/ys.zsh-theme)の変種。大規模クラスタ向けのバッチ提出システムとの対応をサポート。Slurm、LSF / IBM Spectrum LSF、PBSをサポート。
- [ys](https://github.com/cristiancavalli/ys-zsh-custom-theme) - ダーク背景に最適化されたクリーンでシンプルで、意味のあるテーマ。
- [ysm](https://github.com/hanbinpro/ysm-zsh-theme) - シンプルなZSHテーマ。`git`ステータス情報を含む。
- [ysr](https://github.com/raykle/ysr-zsh-theme) - [ys](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/ys.zsh-theme)に基づくテーマ。`git`ステータス装飾を含む。
- [yuki](https://github.com/yuki-torii/yuki-zsh-theme) - ダークに最適化されたZSHテーマ。
- [yuni](https://github.com/skippyr/yuni) - macOSのデフォルトZSHテーマの現代的なバージョン。オリジナルテーマが欠落していた開発者向け機能を追加。最後のコマンドの終了コード、ユーザー名、ホスト名、短縮された現在のディレクトリパス、アクティブなブランチ、権限デコレーター：正常ユーザーなら`%`、rootなら`#`、現在のディレクトリを変更できない権限がある場合は`[!]`を表示。macOS 14 Sonoma以降で動作。
- [yuyuko](https://github.com/hylwxqwq/yuyuko.zsh-theme) - [ys](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/ys.zsh-theme)のフォーク。[yuyuko.vim](https://github.com/hylwxqwq/yuyuko.vim)にインスパイアされた。
- [yyl-ys](https://github.com/yunyuliu/yyl-ys.zsh-theme) - コンダとvenvのステータスを含む。
- [yz50](https://github.com/lacanlale/yz50-zsh) - カラフルなテーマ。[robbyrussell](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/robbyrussell.zsh-theme)と[crunch](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/crunch.zsh-theme)テーマに基づく。`git`ステータス装飾を含む。
- [z4rr3t](https://github.com/inimicus/z4rr3t) - sindresorhusの[pure](https://github.com/sindresorhus/pure)テーマに基づく。
- [za-prompt](https://github.com/babarot/za-prompt) - 高速、ミニマリズムで高度にカスタマイズ可能なテーマ。viモードサポートと`git`ステータス、カスタマイズ可能なパス、最後のコマンドの終了コードのデコレーターを含む。
- [zap-robbyrussell](https://github.com/devadathanmb/zap-robbyrussell) - OMZ robbyrussellテーマ。[zap](https://github.com/zap-zsh/zap)との互換性を追加してパッチされた。
- [zcmder](https://github.com/bwpge/zcmder) - [Cmder](https://cmder.app/)にインスパイアされ、`git`情報、現在のディレクトリ、rootステータスにデコレーターを含む。
- [zcraft](https://github.com/cpea2506/zcraft) - ミニマリズムテーマ。`git`ステータス、最後のコマンドの終了ステータス、最後のコマンドの実行時間にデコレーターを含む。
- [zeit](https://github.com/zeit/zeit.zsh-theme) - ダーク背景に最適化されたテーマ。`git`ステータス情報を含む。
- [zelda](https://github.com/SuperKnerdBros/zelda.zsh-theme) - ゼルダにインスパイアされたテーマ。`git`ステータス装飾を含む。
- [zemm-blinks](https://github.com/aranasaurus/zemm-blinks.zsh-theme) - oh-my-zsh [blinks](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/blinks.zsh-theme)のカスタマイズ版。Mercurialサポートとその他の変更を含む。
- [zemoji](https://github.com/therzka/zemoji) - [wild-cherry]( https://github.com/mashaal/wild-cherry/tree/master/zsh)に基づく。終了ステータス、`virtualenv`、`nvm`、`rvm`、`git`ステータス装飾を含む。
- [zen (cybardev)](https://github.com/cybardev/zen.zsh) - ミニマリズムテーマ。`*NIX`システム向け。最後のコマンドの実行時間、現在のディレクトリ、VCSステータス情報を含むデコレーターを含む。
- [zen (TheCrazyGM)](https://github.com/TheCrazyGM/zen) - クリーンで情報的でカスタマイズ可能なOh-My-Zshテーマ。端末を混雑させずに重要な情報を提供。Python開発者を想定して設計され、SSH検出、詳細なGitステータス情報、コマンド実行時間の追跡といったスマートな機能を含む。
- [zenith (husniadil)](https://github.com/husniadil/zenith-oh-my-zsh-theme) - 効率性と美しさを重視したクリーンで現代的なZshテーマ。コールトーンのカラーパレットと直感的なGitステータスインジケーターを備え、ターミナルワークフローをスムーズで分散なしに維持。色分けされた`git`ステータス、最後のコマンドの終了ステータス、コンパクトなディレクトリディスプレイのデコレーターを含む。
- [zero (arlimus)](https://github.com/arlimus/zero.zsh) - ゼロのテーマとプラグイン。明るいおよび暗いターミナル背景に対応したバリエーションが用意されている。
- [zero (shirozuki)](https://github.com/shirozuki/zero-zsh-theme) - シンプルなプロンプトで、`git`の状態、現在のディレクトリ、終了状態、および最後に実行されたコマンドの実行時間にデコレーターを適用。
- [zeroastro](https://github.com/zeroastro/zeroastro-zsh-theme) - 暗い背景に最適化されており、`git`の状態にデコレーターを含む。
- [zerocake](https://github.com/ZeroPoke/ZeroCake.zsh-theme) - 暗い背景に特に効果がある。
- [zest](https://github.com/hash-bang/zsh-theme-zest) - ZSH用の実用的なテーマ。[zsh2000](https://github.com/consolemaverick/zsh2000)、[agnoster](https://gist.github.com/agnoster/3712874)および[powerline](https://github.com/jeremyFreeAgent/oh-my-zsh-powerline-theme)のテーマに影響を受けている。
- [zeta](https://github.com/skylerlee/zeta-zsh-theme) - ユーザー名、`git`の状態情報、マシン名、現在の作業ディレクトリ、そして最後のコマンドの成功／失敗状態にデコレーターを表示。
- [zhiyin](https://github.com/AmyangXYZ/zhiyin-zsh-theme) - ユーザー@ホスト、現在の作業ディレクトリ、`git`の状態情報へのデコレーターを含む。
- [zido](https://github.com/SidonieBouthors/zido-zsh-theme) - `git`の状態および現在のディレクトリへのデコレーターを含む。
- [zigbar](https://github.com/dbushell/zigbar) - Zigで記述されたテーマ。`git`の状態および現在のディレクトリへのデコレーターを含む。[Nerd Font](https://www.nerdfonts.com/font-downloads)が必要。
- [zinc](https://gitlab.com/robobenklein/zinc) - 非常に高速で、純粋なZSH、混合非同期プロンプト。[Powerlevel9k](https://github.com/bhilburn/powerlevel9k)および[Agnoster](https://github.com/agnoster/agnoster-zsh-theme)のテーマにインスピレーションを受け、拡張性と設定の自由度が非常に高い。[zsh-async](https://github.com/mafredri/zsh-async)を使用して非同期セグメントをサポート。
- [zish](https://github.com/RubixDev/zish/) - `fish`シェルのデフォルト外観に基づく。
- [zlambda](https://github.com/wdhg/zlambda) - ミニマリズムを採用しており、特別なフォント要件なしに`git`のデコレーターを含む。
- [zodiac](https://github.com/adamalsen/zsh-zodiac) - 現在の年に対応する動物のエモジを含む。
- [zoo](https://github.com/salamantos/zoo_sh) - カジュアルなテーマで動物エモジを採用。現在のディレクトリ、時間、`git`の状態にデコレーターを含む。
- [zp](https://github.com/Karitham/zp) - 高速プロンプト。`zig`で記述。`git`の状態および現在のディレクトリのデコレーターを含む。
- [zprompts](https://github.com/z-shell/zprompts) - オリジナルの`zsh`テーマサブシステムを使用するテーマ（プロンプト）。
- [zqt](https://github.com/ladychili/zqt-zsh-theme) - oh-my-zshの[maran](https://github.com/ohmyzsh/ohmyzsh/blob/master/themes/maran.zsh-theme)テーマの改良版。
- [zsh1999](https://github.com/DTan13/zsh1999) - ネットワーク接続、バッテリー、`git`の状態にデコレーターを含む。
- [zsh2000](https://github.com/consolemaverick/zsh2000) - Powerlineに似たテーマで、`rvm`プロンプト、`git`の状態とブランチ、現在時刻、ユーザー名、ホスト名、pwd、終了状態、rootとして実行中か、バックグラウンドジョブの状態を表示。
- [zsh313](https://github.com/amirali313/zsh313-theme) - ミニマムなテーマで`git`の状態にデコレーターを含む。
- [zshcomrade](https://github.com/landongn/zshcomrade) - ZSHテーマ、仲間！`git`の状態にデコレーターを含む。
- [zshify](https://github.com/nrjdalal/zshify) - ミニマムな1コマンドインストールでプロンプトをカスタマイズできる。[npx](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)が必要。
- [zshiggy](https://github.com/malouro/zshiggy) - `git`の状態、`node.js`のバージョンへのデコレーターを含む。
- [zshred](https://github.com/redxtech/zshred) - 現在のディレクトリ、`git`のデコレーター、最後のコマンドの終了状態、実行時間の表示。
- [zskai](https://github.com/dinizgab/zskai-theme) - Monokaiに基づくシンプルなテーマ。ユーザー@ホスト、時間、`git`の状態、現在の作業ディレクトリへのデコレーターを含む。
- [zunder](https://github.com/Warbacon/zunder-prompt) - シンプルで高速なZSHプロンプト。[gitstatus](https://github.com/romkatv/gitstatus)に基づく。
- [zwsh](https://github.com/naens/zwsh) - ZSH用のZpm3/Wordstarモード／テーマ。
- [zys](https://github.com/ZYSzys/zys-zsh-theme) - [Agnoster](https://github.com/agnoster/agnoster-zsh-theme)に類似しており、文脈に応じて情報を表示するように設計されており、Powerlineの美学を採用。
- [zzshell](https://github.com/thezzisu/zzshell) - デフォルトの[Oh-My-Zsh](http://ohmyz.sh/)テーマにインスピレーションを受けた。終了コードと`git`の状態デコレーターを表示。Powerlineフォントは不要。

## Fonts

ここに挙げられたテーマの一部はパワーラインに対応したフォントを必要とします。以下にいくつかご紹介します

- [Awesome Terminal Fonts](https://github.com/gabrielelana/awesome-terminal-fonts) - いくつかの良いモノスペースアイコンを含むフォントファミリー。
- [Fantasque Awesome Font](https://github.com/ztomer/fantasque_awesome_powerline) - 良いモノスペースフォント。Font-Awesome、Octoicons、Powerline-Glyphsでパッチされている。
- [Fantasque-sans](https://github.com/belluzj/fantasque-sans) - 別のPowerline対応フォント。
- [Hack](https://sourcefoundry.org/hack/) - 別のPowerline対応フォントで、特にソースコード用に設計された。
- [Input Mono](https://store.typenetwork.com/foundry/djr/series/input?family=input-mono) - コード用に特別に設計されたフォントファミリー。モノスペースおよび比例フォントを提供し、Powerlineのアイコンを含む。
- [Iosevka](https://github.com/be5invis/Iosevka) - コーダー向けフォント。コードから構築された。非常にカスタマイズ可能。
- [Maple](https://github.com/subframe7536/maple-font) - オープンソースのモノスペースフォントで、Nerd Font対応。コーディングの流れをスムーズにすることを目的とした。
- [Monoid](https://larsenwork.com/monoid/) - Monoidはカスタマイズ可能で、15pxのラインハイターレベルでのビットマップのような鋭さを備え、低解像度ディスプレイでも最適化されている。
- [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts) - 20以上のパッチされたフォント（2,000以上のバリエーション）と、Powerline、Font Awesome、Octicons、Devicons、Vim Devicons向けのFontForgeフォントパッチスクリプトのコレクション。含まれる：Droid Sans、Meslo、Source Code、AnonymousPro、Hack、ProFont、Inconsolata、その他多数。
- [Powerline patched font collection](https://github.com/powerline/fonts) - 数十のフォントをパッチし、Powerlineアイコンを含むフォントのコレクション。
- [SFMono Nerd Font Ligaturized](https://github.com/shaunsingh/SFMono-Nerd-Font-Ligaturized) - macOSのSFMonoフォントの事前パッチされたOpenTypeバージョン。連字とNerd Fontsをサポート。
- [Terminus](http://files.ax86.net/terminus-ttf/) - テルミナスのTTFバージョンで、パワーライン文字を含む

## Installation

私は、すでに好むZSHフレームワークを持っている場合以外に、[zgenom](https://github.com/jandamm/zgenom)を推奨します。これは、プラグインリストを変更した際にのみロードスクリプトを生成するため、シェルセッションの開始時に最小の負荷をかけ、そのロードスクリプトは開始時にソースされ、毎回再計算されるのではなくなります。

### [Antigen](https://github.com/zsh-users/antigen)

これらのプラグインのほとんどは、.zshrcファイルに`antigen bundle githubuser/reponame`を追加することでインストールできます。次回`zsh`を開始するときに、Antigenは自動的にそのプラグインをクローンします。テストのため、実行中のZSHに`antigen bundle githubuser/reponame`を追加することもできます。その後、それをあなたの`.zshrc`に追加できます。

### [dotzsh](https://github.com/dotphiles/dotzsh)

1. Clone new plugins into `.zsh.local/modules`
2. Load the plugin module in `.zshrc`
3. Open a new ZSH terminal window or tab

### [Oh-My-Zsh](http://ohmyz.sh/)

1. `cd ~/.oh-my-zsh/custom/plugins`
2. `git clone repo`
3. Add the repo to your plugin list

### [Prezto](https://github.com/sorin-ionescu/prezto)

1. Clone the plugin into your prezto modules directory
2. Add the plugin to your `.zpreztorc` file
3. Open a new terminal window or tab

### [Zgen](https://github.com/tarjoilija/zgen)

Zgenは積極的にメンテナンスされていません。私は、[Zgenom](https://github.com/jandamm/zgenom)のフォークに切り替えることを推奨します。

### [Zgenom](https://github.com/jandamm/zgenom)

これらのプラグインのほとんどは、`zgenom load githubuser/reponame`を`.zshrc`ファイル内の、ほかの`zgenom load`呼び出しを記述している関数に追加することでインストールできます。

Zgenom は、あなたが `zgenom save` を実行するときに、プラグインリポジトリを自動的にクローンします。

### [zplug](https://github.com/zplug/zplug)

これらのプラグインのほとんどは、`zplug "githubuser/reponame"`を`.zshrc`ファイルに追加することでインストールできます。

### [zpm](https://github.com/zpm-zsh/zpm)

これらのプラグインのほとんどは、`zpm load "githubuser/reponame"`を`.zshrc`ファイルに追加することでインストールできます。

## Writing New Plugins and Themes

新しいプラグインおよびテーマを書くためのいくつかの推奨事項を、私は [here](https://github.com/unixorn/awesome-zsh-plugins/blob/main/Writing_Plugins_and_Themes.md) で記載しています。

もっと詳細な [Zsh Plugin Standard](https://zdharma-continuum.github.io/Zsh-100-Commits-Club/Zsh-Plugin-Standard.html)もあります。

## Other Resources

### ZSH Tools

- [argcomplete](https://github.com/kislyuk/argcomplete) - Pythonの `argparse` モジュールを使用するプログラム向けのタブ補完を生成
- [carapace](https://github.com/rsteube/carapace) - Bash、Elvish、Fish、Oil、Powershell、XonshおよびZSH向けの補完生成ツール。注意：このツールは自動的に補完を生成するものではなく、明示的に実行しなければ、コマンドの補完は生成されません
- [cgen](https://github.com/acristoffers/cgen) - 1つのYAMLファイルからFish、Bash、およびZSHのシェル補完とman-pagesを生成。それぞれのシェルに別々の補完ファイルを手書きする必要がなくなる
- [completion-generator](https://github.com/RobSis/zsh-completion-generator) - プログラムのヘルプテキストからオプションリストを読み取り、自動的に補完関数を生成しようと試みる。ただし、これは自動的に行われず、明示的に生成器を呼び出して補完スクリプトを作成する必要があります
- [completion-generators](https://github.com/zetlen/zsh-completion-generators) - ツール名とその補完スクリプト出力コマンドの表を持ち、毎回読み込み時にその表をチェックし、あなたの `$PATH` に含まれるすべてのツールについて補完コマンドを実行し、その出力をファイル `toolnam`e に保存します。もしこのリポジトリのパスが `$fpath` に含まれているなら、補完は即座に動作します
- [complgen](https://github.com/adaszko/complgen) - manページやEBNFのような文法からBash/Fish/ZSH向けの補完スクリプトを生成。生成された独立したスクリプトは、ターゲットシェルのみが存在すれば十分です
- [crazy-complete](https://github.com/crazy-complete/crazy-complete) - すべてのプログラムにシェル内の自動補完を提供することで、ユーザー体験と生産性を向上させるべきです。 `crazy-complete` は、この課題を解決するために、堅牢で信頼性の高い自動補完スクリプトを生成します
- [manpage-completion-generator](https://github.com/umlx5h/zsh-manpage-completion-generator) - manページからZSH補完を生成。 [create_manpage_completions.py](https://github.com/fish-shell/fish-shell/blob/master/share/tools/create_manpage_completions.py) が必要で、これはfishシェルによってインストールされます
- [oclif completion generator](https://github.com/MunifTanjim/oclif-plugin-completion) - 補完が欠落しているコマンドに対して補完スクリプトを生成
- [oh-plugin](https://github.com/mbergo/oh-plugin) - をタイプすることで、 のプラグインをインストールする手助けをします [oh-my-zsh](https://ohmyz.sh) `oh-plugin install repository_address`
- [rust-zsh-plugin-cli](https://github.com/johnstonskj/rust-zsh-plugin-cli) - このツールは、関数トラッキングによるクリーンなアンロード、オプションのエイリアスサポート、自動ロード関数、およびshellcheckとshellspecのCI/CDワークフローを含むベストプラクティスを組み込んだZshプラグインをスケルトン化します。最小、シンプル、または完全なテンプレートから選択し、プラグインの複雑さに合わせて使用できます
- [shell-color-prompt-tool](https://github.com/kyletimmermans/shell-color-prompt-tool) - `ZSH` または `bash` にカスタムプロンプトを作成する手助けをします
- [shellSpec](https://github.com/shellspec/shellspec) - dash、bash、ksh、ZSHおよびすべてのPOSIXシェル向けのフル機能BDDユニットテストフレームワーク
- [shtab](https://github.com/iterative/shtab) - Python CLIアプリケーション向けのシェルタブ補完スクリプトを自動生成。 `zsh`、`bash` および `tcsh` をサポート
- [smucd](https://github.com/pro555161rblxs/smucd) - フィズなタイプミス許容のcd置き換えで、インタラクティブな選択UIを提供
- [zargparse](https://github.com/ctil/zargparse) - `argparse` を使っているスクリプトを渡すと、その場のディレクトリにZSH補完を書き出します
- [zcolors](https://github.com/marlonrichert/zcolors) - あなたの`$LS_COLORS`を使用して、`git`およびZSHプロンプト、補完、[ZSH syntax highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)に対して一貫したテーマを生成する。
- [zsh-ai-completions](https://github.com/iloveitaly/zsh-ai-completions) - AIによるZSH補完
- [zsh-bench](https://github.com/romkatv/zsh-bench) - インタラクティブZSHのベンチマーク。インタラクティブ `zsh` のユーザーが見える遅延（入力遅延、コマンド遅延など）を測定します
- [zshdb](https://github.com/rocky/zshdb) - ZSHのデバッガ
- [zshelldoc](https://github.com/zdharma-continuum/zshelldoc) - シェルスクリプト向けのDoxygen。ZSHおよびBashスクリプトを解析し、関数リスト、呼び出し木、エクスポート変数リストなど、AsciiDocドキュメントを出力します
- [zunit](https://github.com/zunit-zsh/zunit) - ZSH向けの強力なユニットテストフレームワーク

### Other Useful Lists

- [awesome-devenv](https://github.com/jondot/awesome-devenv) - 素晴らしいツール、リソース、開発環境のワークフローヒントを収録したリスト
- [awesome-sysadmin](https://github.com/n1trux/awesome-sysadmin) - 素晴らしいオープンソースシステム管理者リソースを収録したリスト
- [Terminals Are Sexy](https://github.com/k4m4/terminals-are-sexy) - CLI愛好家向けの素晴らしいリスト

他の便利なawesome-*リストは [awesome collection](https://github.com/sindresorhus/awesome)で見つけることができます。

### Other References

- [Complete Zsh Terminal Customization Guide](https://github.com/mostafa447/zsh-guide) - Zsh、Oh My Zsh、およびPowerlevel10kテーマを使ってターミナルを変化させるための包括的なガイド — DNFベースおよびAPTベースのディストリビューションをカバー
- The [ZSH Reference Card](http://www.bash2zsh.com/zsh_refcard/refcard.pdf) かつ [zsh-lovers site](https://grml.org/zsh/zsh-lovers.html) は欠かせない。
- [Mastering ZSH](https://github.com/rothgar/mastering-zsh) 基礎から始まり、高度なZSHの使用方法やカスタマイズ、実用例を示す素晴らしいチュートリアルです。

## Thanks

過去に貢献してくれたすべての皆さんに感謝します。あなたの協力のおかげでこのリストがここまで完成しているのです。

<a href="https://github.com/unixorn/awesome-zsh-plugins/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=unixorn/awesome-zsh-plugins" />
</a>

[contributors-img](https://contributors-img.web.app)で作成しました。
