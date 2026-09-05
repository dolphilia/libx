---
title: "Awesome Dotfiles"
description: "Dotfilesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-webpro-awesome-dotfiles-readme-md"
---

# Awesome Dotfiles

Dotfilesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 記事

<a id="introductions"></a>
### 入門

- [Getting started with dotfiles][4], [Lars Kappert][5]
- [Getting started with dotfiles][6], [Dries Vints][7]
- [Managing your dotfiles][8], [Lars Kappert][5]
- [Dotfiles Are Meant to Be Forked][9], [Zach Holman][10]
- [Dotfile discovery][11], [Wynn Netherland][12]
- [I do Dotfiles!][13], [Jogendra][14]

<a id="tutorials"></a>
### チュートリアル

- [Setting up a new (OS X) development machine: Part 3 - Dotfiles and custom SSH config][15]
- [Setting Up a Mac Dev Machine From Zero to Hero With Dotfiles][16]
- [Using Git and GitHub to manage your dotfiles][17]
- [conf.d like directories for zsh/bash dotfiles][18]
- [Managing your dotfiles][19]
- [The best way to store your dotfiles: A bare Git repository][20]
- [Dotfiles Management][21]

<a id="shell-startup"></a>
### シェルの起動

- [Shell startup scripts][22]
- [Zsh/Bash startup files loading order][23]

<a id="using-specific-tools"></a>
### 特定ツールの使用

- [Using GNU Stow to manage your dotfiles][24]
- [Managing Dotfile Symlinks with GNU Stow][25]
- [Dotfiles and dev tools provisioned by Ansible][26]

<a id="find-dotfiles-repos"></a>
## dotfilesリポジトリを探す

優れたdotfilesリポジトリが数多く公開されており、それぞれに参考となる工夫が含まれています。[GitHubで「dotfiles」を検索][27]すると一覧できます。

関連情報:

- [Googleで「dotfiles」を検索][28]
- [Arch Linuxのコレクション][29]
- ヒント: [path:\*\*/.gitconfig][30]のように、GitHubでファイル名を検索できます。

<a id="example-dotfiles-repos"></a>
## dotfilesリポジトリの例

人気があり、よく保守され、共同開発されているdotfilesリポジトリとフレームワークを集めています。dotfilesだけを収録するプロジェクトのほか、独自のdotfilesを簡単に追加できるものや、dotfilesとプラグインを管理するスクリプトを含むものがあります。

<a id="bash"></a>
### Bash

| 名前                          | 説明                                         | 主な対象                                                                                                                     |
| :---------------------------- | :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [Bash it][31]                 | コミュニティ製Bashフレームワーク             | 自動補完、テーマ、エイリアス、独自関数を備えた構造的なフレームワーク                                                       |
| [Mathias’s dotfiles][32]      | macOS向けの実用的なハッカー既定設定          | \~/.macosを含む🔧 .files。macOS向けの実用的なハッカー既定設定                                                               |
| [webpro's dotfiles][33]       | macOS用dotfiles                              | Bash、Homebrew、Brew Cask、Git、Node.js、Hammerspoon                                                                        |
| [rootbeersoup's dotfiles][34] | Bash、Vim、macOSを手軽に設定                 | `curl \| sh`インストーラーとMakefileにより、常設・一時設定のどちらも移植性の高い手軽なセットアップを提供                    |

<a id="zsh"></a>
### Zsh

| 名前                       | 説明                                                                                                                | 主な対象                                                                                                                                         |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [Nick Khan's dotfiles][35] | ZshとHomebrewでmacOS環境を設定する個人用dotfiles。実際に使うものだけを収録                                         | Zsh、Git（エイリアス付き）、Visual Studio Code、Ghostty、シェルエイリアス、実用的なmacOS既定設定、独自CLIスクリプトなど                          |
| [thoughtbot dotfiles][36]  | Vim、Zsh、Git、tmuxの設定ファイル集                                                                                 | Zsh、Vim、tmux、Git、Homebrew。[rcm][37]を使用                                                                                                   |
| [oh-my-zsh][38]            | Zsh設定を管理するコミュニティ主導のフレームワーク                                                                  | Zsh設定を管理するオープンソースのコミュニティ主導フレームワーク                                                                                 |
| [Prezto][39]               | Zsh用設定フレームワーク                                                                                             | 実用的な既定値、エイリアス、関数、自動補完、プロンプトテーマでCLI環境を強化                                                                     |
| [Dries's dotfiles][40]     | macOS向けdotfilesの簡潔な構成                                                                                       | Zsh、Oh My Zsh、macOS、Homebrew、Mackup                                                                                                          |
| [holman does dotfiles][41] | トピック指向でフォークしやすいdotfiles                                                                             | Zsh、Git、Vim、Homebrew、macOS、モジュール化されたトピックディレクトリとブートストラップスクリプト                                               |
| [Kevin's dotfiles][42]     | Python開発者向けmacOS用dotfiles                                                                                    | Zsh、Python、Neovim、VS Code、Homebrew、macOS既定設定とセキュリティ設定                                                                          |
| [sobolevn's dotfiles][43]  | 開発者が快適に使うためのdotfiles                                                                                   | macOS、Zsh、Brew、VS Code、Codespaces、Python、Node、Elixir                                                                                       |
| [yutkat's dotfiles][44]    | CIでテストと起動速度計測を行う、よく保守されたdotfiles                                                            | Arch／Ubuntu／Fedora Linuxで動作するZsh、Neovim、WezTerm、SwayWM                                                                                  |
| [Luke's voidrice][45]      | LARBSで配置する個人用dotfiles                                                                                      | Zsh、Vim／Neovim、zsf                                                                                                                            |
| [2KAbhishek's dots2k][46]  | マルチプラットフォーム対応の拡張可能なdotfiles                                                                   | CLIツールを中心に、各プラットフォーム（Windows／Mac／Android）、エディター、ウィンドウマネージャー向け拡張を提供                                |
| [Zim][47]                  | モジュール式でカスタマイズ可能な高速Zshフレームワーク                                                            | 速度を損なわず、プラグインマネージャー、便利なモジュール、多様なテーマをまとめたZsh設定フレームワーク                                            |

<a id="fish"></a>
### Fish

| 名前                  | 説明                                                  | 主な対象                                                                         |
| :-------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------------- |
| [oh-my-fish][48]      | Fish Shellフレームワーク                              | シェルを拡張・変更するパッケージをインストールするための基盤                     |
| [Paul's dotfiles][49] | PaulによるFish、Bash、Gitなどの設定ファイル           | Fish、macOS、Homebrew、独自シェル関数                                            |

<a id="ansible"></a>
### Ansible

| 名前                    | 説明                                         | 主な対象                                                                        |
| :---------------------- | :------------------------------------------- | :------------------------------------------------------------------------------ |
| [.dots][50]             | Ansible対応へ刷新・強化したdotfiles          | Ansibleによるデスクトップのセットアップ、設定、保守の完全自動化                 |
| [Mac Dev Playbook][51]  | AnsibleによるMacのセットアップと設定         | Homebrew、dotfiles、アプリ、OS設定を含むmacOS開発マシン一式のセットアップ        |
| [sloria's dotfiles][52] | Ansibleロールとして提供されるdotfiles        | 1コマンドでローカル開発環境一式を構築                                           |

<a id="tools"></a>
## ツール

- [Ansible][53] - 非常に簡潔な構成管理、アプリケーション配置、タスク実行、マルチノードオーケストレーションエンジン。
- [chezmoi][54] - 複数マシンのdotfilesを安全に管理。
- [dotbot][55] - dotfilesを初期構築するツール。
- [dotdrop][56] - dotfilesを一度保存し、あらゆる環境へ配置。
- [dotly][57] - macOS、Linux、WSL向けのモジュール式Zshベースdotfilesフレームワーク。
- [DotState][58] - プロファイル、自動バックアップ、対話型ターミナルUIを備えたGitベースのdotfilesマネージャー。
- [dotter][59] - Rust製のdotfilesマネージャー兼テンプレートツール。
- [dots][60] - 複数OSで異なるウィンドウマネージャーを素早く設定できる、独自方針を持つdotfilesジェネレーター。
- [Fisher][61] - Fish用パッケージマネージャー。
- [fresh][62] - ほかの人のシェル設定（エイリアス、関数など）を自分の設定ファイルから読み込み、dotfilesを最新に保つツール。
- [GNU Stow][63] - ファイルシステム上の別々のディレクトリにあるソフトウェア／データパッケージを、同じ場所へインストールされたように見せるシンボリックリンク管理ツール。
- [home-manager][64] - Nixを使ってユーザー環境を管理。
- [homeshick][65] - Bash製のGit dotfiles同期ツール。
- [homesick][66] - Gitベースのdotfilesリポジトリをクローンし、シンボリックリンクで管理。
- [lnk][67] - 追加設定を必要としないGitネイティブなdotfiles管理。
- [mackup][68] - アプリケーション設定を同期（macOS／Linux）。
- [OpenBoot][69] - 対話型TUIからHomebrewパッケージ、dotfiles、シェル設定、macOS環境設定を取得・復元するMac開発環境マネージャー。
- [rcm][37] - rcファイル（dotfiles）の管理。
- [rotz][70] - Rust製の完全クロスプラットフォーム対応dotfilesマネージャー兼開発環境ブートストラップツール。
- [themer][71] - dotfilesから各開発ツールのテーマを管理・生成。
- [toml-bombadil][72] - dotfilesをテンプレート化して管理。
- [Tuckr][73] - グループ、フック、配置検証を備えた、クロスプラットフォーム対応Stow形式のdotfilesマネージャー。
- [xdg-ninja][74] - $HOMEに不要なファイルやディレクトリがないか検査するシェルスクリプト。
- [yadm][75] - 共有Gitリポジトリと追加機能を使い、複数コンピューターにまたがるファイル集合を管理するツール。
- [yolk][76] - コメントによるインラインテンプレート機能を備え、未配置の状態でもファイルを有効に保てるdotfilesマネージャー。

<a id="macos"></a>
### macOS

- [dockutil][77] - Dock項目を管理するコマンドラインツール。
- [mas][78] - Mac App Storeのコマンドラインインターフェース。

<a id="miscellaneous"></a>
## その他

- [dotfiles.github.io][79] - GitHub上のdotfilesに関する非公式ガイド。
- [Filesystem Hierarchy Standard][80] - Linuxディストリビューションのディレクトリ構造と内容を定める標準。
- [XDG Base Directory Specification][81] - [要約][82]
- [A lesson in shortcuts][83] - 「隠し」ファイルや「ドット」ファイルという発想が生まれた経緯をRob Pikeが解説した記事（元はGoogle+へ投稿）。

<a id="related-lists"></a>
## 関連リスト

- [Awesome Dev Env][84] - 優れた開発環境を構築するツール、資料、ワークフローのヒントを厳選した一覧。
- [Awesome Fish][85] - Fishシェル用のパッケージ、プロンプト、資料を厳選した一覧。
- [Awesome Shell][86] - コマンドライン用フレームワーク、ツールキット、ガイド、便利ツールを厳選した一覧。
- [Awesome Sysadmin][87] - システム管理者向けの優れたオープンソース資料を厳選した一覧。
- [Awesome Zsh Plugins][88] - Oh My Zsh、Antigen、Preztoで利用できるZshプラグイン一覧。
- [Terminals Are Sexy][89] - CLI愛好者向けのターミナルフレームワーク、プラグイン、資料を厳選した一覧。

<a id="archiveabandoned-projects"></a>
## アーカイブ済み／放棄されたプロジェクト

- [antigen][90]
- [bashdot][91]
- [Bashstrap][92]
- [battleschool][93]
- [Bork][94]
- [Cider][95]
- [dev-setup][96]
- [dotbare][97]
- [dotfiles][98]
- [dotstow][99]
- [Eduardo's dotfiles][100]
- [ellipsis][101]
- [emplace][102]
- [kody][103]
- [macOS Defaults][104]
- [osxc][105]
- [Pearl][106]
- [rkalis's dotfiles][107]
- [vcsh][108] ([article][109], [article][110])
- [YADR][111]
- [Zero.sh][112]

<a id="license"></a>
## ライセンス

[![CC0][114]][113]

法律で認められる範囲において、[Lars Kappert][115]はこの作品に関するすべての著作権および関連する権利を放棄しています。

[1]: https://awesome.re
[2]: https://awesome.re/badge.svg
[3]: https://github.com/sindresorhus/awesome
[4]: https://www.webpro.nl/articles/getting-started-with-dotfiles
[5]: https://github.com/webpro
[6]: https://driesvints.com/blog/getting-started-with-dotfiles/
[7]: https://github.com/driesvints
[8]: https://www.webpro.nl/articles/managing-your-dotfiles
[9]: https://zachholman.com/2010/08/dotfiles-are-meant-to-be-forked/
[10]: https://zachholman.com
[11]: https://wynnnetherland.com/journal/dotfiles-discovery/
[12]: https://wynnnetherland.com
[13]: https://jogendra.dev/i-do-dotfiles
[14]: https://jogendra.dev
[15]: https://mattstauffer.com/blog/setting-up-a-new-os-x-development-machine-part-3-dotfiles-rc-files-and-ssh-config/
[16]: https://code.tutsplus.com/setting-up-a-mac-dev-machine-from-zero-to-hero-with-dotfiles--net-35449t
[17]: https://blog.smalleycreative.com/using-git-and-github-to-manage-your-dotfiles/
[18]: https://chr4.org/posts/2014-09-10-conf-dot-d-like-directories-for-zsh-slash-bash-dotfiles/
[19]: https://www.anishathalye.com/2014/08/03/managing-your-dotfiles/
[20]: https://www.atlassian.com/git/tutorials/dotfiles
[21]: https://mitxela.com/projects/dotfiles_management
[22]: https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html
[23]: https://shreevatsa.wordpress.com/2008/03/30/zshbash-startup-files-loading-order-bashrc-zshrc-etc/
[24]: http://brandon.invergo.net/news/2012-05-26-using-gnu-stow-to-manage-your-dotfiles.html
[25]: https://spin.atomicobject.com/manage-dotfiles-gnu-stow/
[26]: http://palcu.blogspot.com/2014/06/dotfiles-and-dev-tools-provisioned-by.html
[27]: https://github.com/search?q=dotfiles&type=Repositories
[28]: https://www.google.nl/search?q=dotfiles
[29]: https://wiki.archlinux.org/index.php/Dotfiles
[30]: https://github.com/search?type=code&q=path%3A**%2F.gitconfig
[31]: https://github.com/Bash-it/bash-it
[32]: https://github.com/mathiasbynens/dotfiles
[33]: https://github.com/webpro/dotfiles
[34]: https://github.com/darrylabbate/dotfiles
[35]: https://github.com/nicksp/dotfiles/
[36]: https://github.com/thoughtbot/dotfiles
[37]: https://github.com/thoughtbot/rcm
[38]: https://ohmyz.sh
[39]: https://github.com/sorin-ionescu/prezto
[40]: https://github.com/driesvints/dotfiles
[41]: https://github.com/holman/dotfiles
[42]: https://github.com/kdeldycke/dotfiles
[43]: https://github.com/sobolevn/dotfiles
[44]: https://github.com/yutkat/dotfiles
[45]: https://github.com/LukeSmithxyz/voidrice
[46]: https://github.com/2KAbhishek/dots2k
[47]: https://github.com/zimfw/zimfw
[48]: https://github.com/oh-my-fish/oh-my-fish
[49]: https://github.com/paulirish/dotfiles
[50]: https://github.com/Addvilz/dots
[51]: https://github.com/geerlingguy/mac-dev-playbook
[52]: https://github.com/sloria/dotfiles
[53]: https://www.ansible.com
[54]: https://github.com/twpayne/chezmoi
[55]: https://github.com/anishathalye/dotbot
[56]: https://github.com/deadc0de6/dotdrop
[57]: https://github.com/CodelyTV/dotly
[58]: https://github.com/serkanyersen/dotstate
[59]: https://github.com/SuperCuber/dotter
[60]: https://github.com/ulises-jeremias/dotfiles
[61]: https://github.com/jorgebucaran/fisher
[62]: https://freshshell.com
[63]: http://www.gnu.org/software/stow/
[64]: https://github.com/nix-community/home-manager
[65]: https://github.com/andsens/homeshick
[66]: https://github.com/technicalpickles/homesick
[67]: https://github.com/yarlson/lnk
[68]: https://github.com/lra/mackup
[69]: https://github.com/openbootdotdev/openboot
[70]: https://github.com/volllly/rotz
[71]: https://github.com/mjswensen/themer
[72]: https://github.com/oknozor/toml-bombadil
[73]: https://github.com/RaphGL/Tuckr
[74]: https://github.com/b3nj5m1n/xdg-ninja
[75]: https://github.com/yadm-dev/yadm
[76]: https://github.com/elkowar/yolk
[77]: https://github.com/kcrawford/dockutil
[78]: https://github.com/mas-cli/mas
[79]: https://dotfiles.github.io/
[80]: https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard
[81]: https://specifications.freedesktop.org/basedir/basedir-spec-latest.html
[82]: https://wiki.archlinux.org/title/XDG_Base_Directory
[83]: https://web.archive.org/web/20180827160401/https://plus.google.com/+RobPikeTheHuman/posts/R58WgWwN9jp
[84]: https://github.com/jondot/awesome-devenv
[85]: https://github.com/jorgebucaran/awsm.fish
[86]: https://github.com/alebcay/awesome-shell
[87]: https://github.com/awesome-foss/awesome-sysadmin
[88]: https://github.com/unixorn/awesome-zsh-plugins
[89]: https://github.com/k4m4/terminals-are-sexy
[90]: http://antigen.sharats.me
[91]: https://github.com/bashdot/bashdot
[92]: https://github.com/barryclark/bashstrap
[93]: https://github.com/spencergibb/battleschool
[94]: https://github.com/mattly/bork
[95]: https://github.com/msanders/cider
[96]: https://github.com/donnemartin/dev-setup
[97]: https://github.com/kazhala/dotbare
[98]: https://github.com/jbernard/dotfiles
[99]: https://github.com/clayrisser/dotstow
[100]: https://github.com/eduardolundgren/dotfiles
[101]: https://github.com/ellipsis/ellipsis
[102]: https://web.archive.org/web/20260430004416/https://github.com/tversteeg/emplace
[103]: https://github.com/jh3y/kody
[104]: https://github.com/kevinSuttle/macOS-Defaults
[105]: http://osxc.github.io
[106]: https://github.com/pearl-core/pearl
[107]: https://github.com/rkalis/dotfiles
[108]: https://github.com/RichiH/vcsh
[109]: https://blog.tfnico.com/2014/03/managing-dot-files-with-vcsh-and-myrepos.html
[110]: https://www.kunxi.org/blog/2014/02/manage-dotfiles-using-vcsh-and-mr/
[111]: https://github.com/skwp/dotfiles
[112]: https://github.com/zero-sh/zero.sh
[113]: https://creativecommons.org/publicdomain/zero/1.0/
[114]: https://licensebuttons.net/p/zero/1.0/88x31.png
[115]: https://www.webpro.nl
