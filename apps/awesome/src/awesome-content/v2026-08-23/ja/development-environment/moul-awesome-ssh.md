---
title: "moul/awesome-ssh"
description: "moul/awesome-ssh の定本スナップショット"
licenseSource: "github-moul-awesome-ssh-readme-md"
---

# Awesome SSH [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> *SSH* の[アプリ](#apps)、[ライブラリ](#libraries)、[リソース](#resources)を集めたキュレーションリスト。

<h2 align="center"><img src="https://raw.githubusercontent.com/moul/awesome-ssh/master/logo.jpg" width="400" /></h2>

[awesome](https://github.com/sindresorhus/awesome) リストという考え方に着想を得ています。

貢献したい場合は、[貢献ガイドライン](https://github.com/moul/awesome-ssh/blob/be9bfa2a474ef29aecdc54992ec7d5477f042aeb/CONTRIBUTING.md)をお読みください。

**私の[ブログ](https://manfred.life/) 🦄 を見るか、[Twitter](https://twitter.com/moul)で *hi* と声をかけてください。**

## 目次

- [アプリ](#apps)
  - [`.ssh/config`](#sshconfig)
  - [*SSH* プロトコルを使うツール](#tools-using-the-ssh-protocol)
  - [サーバー](#servers)
  - [ネットワーク](#network)
  - [マルチプレクサー](#multiplexers)
  - [SSH 鍵 / 認証](#ssh-keys--authentication)
  - [SSH エージェント](#ssh-agent)
  - [ツール](#tools)
  - [自動化](#automation)
  - [Web](#web)
  - [テスト / ハニーポット](#testing--honeypots)
  - [SSH の代替](#alternatives-to-ssh)
- [ライブラリ](#libraries)
- [リソース](#resources)
  - [チュートリアル](#tutorials)
  - [セキュリティ](#security)
  - [ドキュメント](#documentation)
  - [コミュニティ](#community)

## アプリ

### `.ssh/config`

* [`assh`](https://github.com/moul/assh) [![stars](https://img.shields.io/github/stars/moul/advanced-ssh-config.svg?style=social&label=stars)](https://github.com/moul/advanced-ssh-config) - 正規表現、別名、ゲートウェイ、include、動的ホスト名を *SSH* と `ssh-config` に追加する透過的なラッパー（ProxyCommand）。_以前の名称: `advanced-ssh-config`_
* [storm](https://github.com/emre/storm) [![stars](https://img.shields.io/github/stars/emre/storm.svg?style=social&label=stars)](https://github.com/emre/storm) - *SSH* を思いどおりに管理します。
* [ansible-ssh-config](https://github.com/gaqzi/ansible-ssh-config) [![stars](https://img.shields.io/github/stars/gaqzi/ansible-ssh-config.svg?style=social&label=stars)](https://github.com/gaqzi/ansible-ssh-config) - *Ansible* に `ssh_config` を管理させます。
* [ec2ssh](https://github.com/mirakui/ec2ssh) [![stars](https://img.shields.io/github/stars/mirakui/ec2ssh.svg?style=social&label=stars)](https://github.com/mirakui/ec2ssh) - *AWS EC2* 向けの `ssh_config` マネージャー。
* [ssh-config](https://github.com/dbrady/ssh-config) [![stars](https://img.shields.io/github/stars/dbrady/ssh-config.svg?style=social&label=stars)](https://github.com/dbrady/ssh-config) - `.ssh/config` ファイルの管理を支援するツール。

### *SSH* プロトコルを使うツール

* [scp](http://linux.die.net/man/1/scp) - *SSH* 上で安全にリモートファイルをコピーするユーティリティ。
* [rsync](https://rsync.samba.org) - *SSH* をサポートする高速な差分転送ユーティリティ。
* [sftp](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) - *SSH* 上のファイル転送プロトコル。
* [curl](http://curl.haxx.se) - データを転送するコマンドラインツール兼ライブラリ（`sftp` をサポート）。

### サーバー

* [sshportal](https://github.com/moul/sshportal) [![stars](https://img.shields.io/github/stars/moul/sshportal.svg?style=social&label=stars)](https://github.com/moul/sshportal) - シンプルで楽しく透過的な SSH（および Telnet）踏み台サーバー。
* [ssh2docker](https://github.com/moul/ssh2docker) [![stars](https://img.shields.io/github/stars/moul/ssh2docker.svg?style=social&label=stars)](https://github.com/moul/ssh2docker) - Docker コンテナー向けの *SSH* サーバー。
* [ssh-proxy](https://github.com/ml-tooling/ssh-proxy) [![stars](https://img.shields.io/github/stars/ml-tooling/ssh-proxy.svg?style=social&label=stars)](https://github.com/ml-tooling/ssh-proxy) - 任意のコンテナーへの SSH 接続をプロキシする、Docker 化された SSH 踏み台。
* [whosthere](https://github.com/FiloSottile/whosthere) [![stars](https://img.shields.io/github/stars/FiloSottile/whosthere.svg?style=social&label=stars)](https://github.com/FiloSottile/whosthere) - あなたが誰かを把握する *SSH* サーバー。`$ ssh whoami.filippo.io`。
* [sshfront](https://github.com/gliderlabs/sshfront) [![stars](https://img.shields.io/github/stars/gliderlabs/sshfront.svg?style=social&label=stars)](https://github.com/gliderlabs/sshfront) - プログラム可能な *SSH* フロントエンド。
* [ssh-chat](https://github.com/shazow/ssh-chat) [![stars](https://img.shields.io/github/stars/shazow/ssh-chat.svg?style=social&label=stars)](https://github.com/shazow/ssh-chat) - *SSH* 経由のチャット。
* [sshcommand](https://github.com/dokku/sshcommand) [![stars](https://img.shields.io/github/stars/dokku/sshcommand.svg?style=social&label=stars)](https://github.com/dokku/sshcommand) - *SSH* をアプリ専用のシンクライアントに変換します。
* [sshmuxd](https://github.com/joushou/sshmuxd) [![stars](https://img.shields.io/github/stars/joushou/sshmuxd.svg?style=social&label=stars)](https://github.com/joushou/sshmuxd) - `sshmux` フロントエンド。
* [x84](https://github.com/jquast/x84) [![stars](https://img.shields.io/github/stars/jquast/x84.svg?style=social&label=stars)](https://github.com/jquast/x84) - 現代的な *UTF-8* と旧来の *cp437* ネットワーク仮想端末向けの *python* `telnet`/`ssh` サーバー。*ami/x*、*teleguard*、*renegade*、*iniquity* などの古典的ソフトウェアの精神を受け継ぎます。
* [teleport](https://github.com/gravitational/teleport) [![stars](https://img.shields.io/github/stars/gravitational/teleport.svg?style=social&label=stars)](https://github.com/gravitational/teleport) - クラスターとチームのためのモダンな *SSH* サーバー。
* [ShellHub](https://github.com/shellhub-io/shellhub) [![stars](https://img.shields.io/github/stars/shellhub-io/shellhub.svg?style=social&label=stars)](https://github.com/shellhub-io/shellhub) - ファイアウォールと NAT の背後にあるあらゆる Linux デバイスへリモートアクセスするための *SSH* ゲートウェイ。

### ネットワーク

* [Mosh](https://mosh.mit.edu) - モバイル向けシェル。
* [sshfs](https://github.com/libfuse/sshfs) [![stars](https://img.shields.io/github/stars/libfuse/sshfs.svg?style=social&label=stars)](https://github.com/libfuse/sshfs) - *SSH* File Transfer Protocol を基盤とするファイルシステムクライアント。
* [ngrok](https://github.com/inconshreveable/ngrok) [![stars](https://img.shields.io/github/stars/inconshreveable/ngrok.svg?style=social&label=stars)](https://github.com/inconshreveable/ngrok) - localhost への観測可能なトンネル。
* [localtunnel](https://github.com/progrium/localtunnel) [![stars](https://img.shields.io/github/stars/progrium/localtunnel.svg?style=social&label=stars)](https://github.com/progrium/localtunnel) - localhost サーバーをインターネットに公開します。
* [sshuttle](https://github.com/sshuttle/sshuttle) [![stars](https://img.shields.io/github/stars/sshuttle/sshuttle.svg?style=social&label=stars)](https://github.com/sshuttle/sshuttle) - 簡易 *VPN* として動作する透過プロキシサーバー。`ssh` 経由で転送し、管理者権限を不要とします。*Linux* と *MacOS* で動作し、*DNS tunneling* をサポートします。
* [sshttp](https://github.com/stealth/sshttp) [![stars](https://img.shields.io/github/stars/stealth/sshttp.svg?style=social&label=stars)](https://github.com/stealth/sshttp) - *SSH*/*HTTP(S)* マルチプレクサー。変更なしで同じポートに Web サーバーと `sshd` を実行できます。
* [switcher](https://github.com/jamescun/switcher) [![stars](https://img.shields.io/github/stars/jamescun/switcher.svg?style=social&label=stars)](https://github.com/jamescun/switcher) - 同じポートで *SSH* と *HTTP(S)* を実行します。
* [sslh](https://github.com/yrutschle/sslh) [![stars](https://img.shields.io/github/stars/yrutschle/sslh.svg?style=social&label=stars)](https://github.com/yrutschle/sslh) - アプリケーションプロトコル・マルチプレクサー（例: *SSH* + *HTTPS*）。
* [tund](https://github.com/aphyr/tund) [![stars](https://img.shields.io/github/stars/aphyr/tund.svg?style=social&label=stars)](https://github.com/aphyr/tund) - *SSH* リバーストンネルデーモン。
* [autossh](http://www.harding.motd.ca/autossh/) - ネットワーク切断後に *SSH* セッションを自動的に再生成します。
* [wssh](https://github.com/aluzzardi/wssh) [![stars](https://img.shields.io/github/stars/aluzzardi/wssh.svg?style=social&label=stars)](https://github.com/aluzzardi/wssh) - *SSH* から WebSocket へのブリッジ。
* [docker-volume-sshfs](https://github.com/vieux/docker-volume-sshfs) [![stars](https://img.shields.io/github/stars/vieux/docker-volume-sshfs.svg?style=social&label=stars)](https://github.com/vieux/docker-volume-sshfs) - `sshfs` 用 Docker ボリュームプラグイン。
* [quicssh](https://github.com/moul/quicssh) [![stars](https://img.shields.io/github/stars/moul/quicssh.svg?style=social&label=stars)](https://github.com/moul/quicssh) - SSH 向け QUIC プロキシ。
* [sshpiper](https://github.com/tg123/sshpiper) [![stars](https://img.shields.io/github/stars/tg123/sshpiper.svg?style=social&label=stars)](https://github.com/tg123/sshpiper) - ssh scp に欠けているリバースプロキシ。
* [sshhub](https://sshhub.de) - Web サービス: ファイアウォール背後の SSH サーバーへアクセスします（ssh-teamviewer）。

### マルチプレクサー

* [tmux](https://tmux.github.io) - ターミナルマルチプレクサー。
* [clusterssh](https://github.com/duncs/clusterssh) [![stars](https://img.shields.io/github/stars/duncs/clusterssh.svg?style=social&label=stars)](https://github.com/duncs/clusterssh) - *SSH* によるクラスター管理。
* [tmux-cssh](https://github.com/dennishafemann/tmux-cssh) [![stars](https://img.shields.io/github/stars/dennishafemann/tmux-cssh.svg?style=social&label=stars)](https://github.com/dennishafemann/tmux-cssh) - *ClusterSSH* のように振る舞う `tmux`。
* [tm](https://github.com/Ganneff/tm) [![stars](https://img.shields.io/github/stars/Ganneff/tm.svg?style=social&label=stars)](https://github.com/Ganneff/tm) - `tmux` マネージャー / ヘルパー。
* [i2cssh](https://github.com/wouterdebie/i2cssh) [![stars](https://img.shields.io/github/stars/wouterdebie/i2cssh.svg?style=social&label=stars)](https://github.com/wouterdebie/i2cssh) - *iTerm2* 向けの `csshX` 風 *SSH* ツール。
* [ClusterSSH](http://sourceforge.net/projects/clusterssh/) - 単一のグラフィカルコンソールから複数の `xterm` ウィンドウを制御します。

### *SSH* 鍵 / 認証

* [authy-ssh](https://github.com/authy/authy-ssh) [![stars](https://img.shields.io/github/stars/authy/authy-ssh.svg?style=social&label=stars)](https://github.com/authy/authy-ssh) - *SSH* サーバー向けの簡単な *two-factor* 認証。
* [github-auth](https://github.com/chrishunt/github-auth) [![stars](https://img.shields.io/github/stars/chrishunt/github-auth.svg?style=social&label=stars)](https://github.com/chrishunt/github-auth) - GitHub ユーザー向けの *SSH* 鍵管理。
* [cipherhub](https://github.com/substack/cipherhub) [![stars](https://img.shields.io/github/stars/substack/cipherhub.svg?style=social&label=stars)](https://github.com/substack/cipherhub) - GitHub から簡単にインポートできる *SSH* 公開鍵に基づくメッセージ暗号化。
* [Slack notifications](http://www.ryanbrink.com/slack-ssh-session-notifications/) ([archived version](https://web.archive.org/web/20160505202303/http://www.ryanbrink.com/slack-ssh-session-notifications/)) - Slack 通知の設定ガイド（他のサービス向けにも変更可能）。
* [totp-ssh-fluxer](https://github.com/benjojo/totp-ssh-fluxer) [![stars](https://img.shields.io/github/stars/benjojo/totp-ssh-fluxer.svg?style=social&label=stars)](https://github.com/benjojo/totp-ssh-fluxer) - `sshd` ポートを 30 秒ごとに変える方法。
* [github-keygen](https://github.com/dolmen/github-keygen) [![stars](https://img.shields.io/github/stars/dolmen/github-keygen.svg?style=social&label=stars)](https://github.com/dolmen/github-keygen) - GitHub アカウント向けの安全な *SSH* 設定を簡単に作成します。
* [kr](https://github.com/KryptCo/kr) [![stars](https://img.shields.io/github/stars/dolmen/github-keygen.svg?style=social&label=stars)](https://github.com/KryptCo/kr) - Kryptonite をインストールしたペアリング済み携帯電話へアクセス要求をルーティングする Kr エージェント。
* [ServerAuth](https://serverauth.com) - サーバー間の SSH アクセスを自動同期します。
* [HIBA](https://github.com/google/hiba) [![stars](https://img.shields.io/github/stars/google/hiba.svg?style=social&label=stars)](https://github.com/google/hiba) - authorized_users ファイルを配布せずに、多数のマシンへのアクセスを集中管理します。

### *SSH* エージェント

* [ssh-ident](https://github.com/ccontavalli/ssh-ident) [![stars](https://img.shields.io/github/stars/ccontavalli/ssh-ident.svg?style=social&label=stars)](https://github.com/ccontavalli/ssh-ident) - プロジェクトごとに異なるエージェントと異なる鍵を `ssh` で扱います。
* [oh-my-zsh/plugins/ssh-agent](https://github.com/robbyrussell/oh-my-zsh) [![stars](https://img.shields.io/github/stars/robbyrussell/oh-my-zsh.svg?style=social&label=stars)](https://github.com/robbyrussell/oh-my-zsh) - `ssh-agent` の `zsh` プラグイン。
* [sshecret](https://github.com/thcipriani/sshecret) - 複数の鍵に向けた複数のエージェントを自動作成・管理します。

### ツール

* [xxh](https://github.com/xxh/xxh) [![stars](https://img.shields.io/github/stars/xxh/xxh.svg?style=social&label=stars)](https://github.com/xxh/xxh) - ssh を通じて、どこへ行ってもお気に入りのシェルを使えます。
* [sshrc](https://github.com/danrabinowitz/sshrc) [![stars](https://img.shields.io/github/stars/danrabinowitz/sshrc.svg?style=social&label=stars)](https://github.com/danrabinowitz/sshrc) - `.bashrc`、`.vimrc` などを `ssh` 時に持ち運べます。
* [kyrat](https://github.com/fsquillace/kyrat) [![stars](https://img.shields.io/github/stars/fsquillace/kyrat.svg?style=social&label=stars)](https://github.com/fsquillace/kyrat) - Linux と OSX で dotfiles を常に持ち運ぶ SSH ラッパースクリプト。
* [ssh-vault](https://github.com/ssh-vault/ssh-vault) [![stars](https://img.shields.io/github/stars/ssh-vault/ssh-vault.svg?style=social&label=stars)](https://github.com/ssh-vault/ssh-vault) - ssh 鍵を使ってファイルを暗号化 / 復号します。
* [ssh-ping](https://github.com/vaporup/ssh-tools) [![stars](https://img.shields.io/github/stars/vaporup/ssh-tools.svg?style=social&label=stars)](https://github.com/vaporup/ssh-tools) - ssh_config を使ってホストに到達可能か確認します。
* [SSHPry v2](https://github.com/nopernik/SSHPry2.0) [![stars](https://img.shields.io/github/stars/nopernik/SSHPry2.0.svg?style=social&label=stars)](https://github.com/nopernik/SSHPry2.0) - SSH 接続中クライアントの TTY を監視・制御します。
* [redial](https://github.com/taypo/redial) [![stars](https://img.shields.io/github/stars/taypo/redial?style=social)](https://github.com/taypo/redial) - Unix システム向けのターミナルベース SSH セッションマネージャー。

### 自動化

* [Ansible](https://github.com/ansible/ansible) [![stars](https://img.shields.io/github/stars/ansible/ansible.svg?style=social&label=stars)](https://github.com/ansible/ansible) - *SSH* 経由のアプリデプロイ、構成管理、オーケストレーション。
* [rtop](https://github.com/rapidloop/rtop) [![stars](https://img.shields.io/github/stars/rapidloop/rtop.svg?style=social&label=stars)](https://github.com/rapidloop/rtop) - *SSH* を基盤とした対話的なリモートシステム監視ツール。
* [DSH - Dancer's shell / distributed shell](https://www.netfort.gr.jp/~dancer/software/dsh.html.en) - 一つのコマンドラインから複数のリモートシェルコマンドを実行するラッパー。
* [parallel-ssh](https://github.com/ParallelSSH/parallel-ssh) [![stars](https://img.shields.io/github/stars/ParallelSSH/parallel-ssh.svg?style=social&label=stars)](https://github.com/ParallelSSH/parallel-ssh) - OpenSSH と関連ツールの並列版を提供します。
* [SSH Power Tool](https://code.google.com/p/sshpt/) - 事前共有鍵を使わずに複数サーバーで同時にコマンド実行・ファイルアップロードを行います。

### Web

* [Secure Shell chrome extension](https://chrome.google.com/webstore/detail/secure-shell/pnhechapfaindjhompbnflcldabbghjo?hl=en)
* [GateOne](https://github.com/liftoff/GateOne) [![stars](https://img.shields.io/github/stars/liftoff/GateOne.svg?style=social&label=stars)](https://github.com/liftoff/GateOne) - HTML5 ベースのターミナルエミュレーター兼 *SSH* クライアント。
* [KeyBox](https://github.com/skavanagh/KeyBox) [![stars](https://img.shields.io/github/stars/skavanagh/KeyBox.svg?style=social&label=stars)](https://github.com/skavanagh/KeyBox) - システムへの管理アクセスを集中管理する Web ベースの *SSH* コンソール。
* [Apache Guacamole](https://guacamole.incubator.apache.org/) - Apache Guacamole は HTML5 ベースのクライアントレス・リモートデスクトップゲートウェイです。VNC、RDP、SSH などの標準プロトコルをサポートします。
* [SSHmon](https://github.com/hpello/sshmon) [![stars](https://img.shields.io/github/stars/hpello/sshmon.svg?style=social&label=stars)](https://github.com/hpello/sshmon) - SSH 接続を監視し、ポートフォワーディングを確立するためのリアルタイム GUI。

### テスト / ハニーポット

* [ssh-hammer](https://github.com/shazow/ssh-hammer) [![stars](https://img.shields.io/github/stars/shazow/ssh-hammer.svg?style=social&label=stars)](https://github.com/shazow/ssh-hammer) - *SSH* 負荷テストツール。
* [kippo](https://github.com/desaster/kippo) [![stars](https://img.shields.io/github/stars/desaster/kippo.svg?style=social&label=stars)](https://github.com/desaster/kippo) - *SSH* ハニーポット。
* [cowrie](https://github.com/micheloosterhof/cowrie) [![stars](https://img.shields.io/github/stars/micheloosterhof/cowrie.svg?style=social&label=stars)](https://github.com/micheloosterhof/cowrie) - *SSH* ハニーポット（kippo ベース）。
* [sshmitm](http://linux.die.net/man/8/sshmitm) - *SSH* の中間者攻撃。
* [ssh-audit](https://github.com/arthepsy/ssh-audit) [![stars](https://img.shields.io/github/stars/arthepsy/ssh-audit.svg?style=social&label=stars)](https://github.com/arthepsy/ssh-audit) - *SSH* サーバー監査ツール。
* [sshesame](https://github.com/jaksi/sshesame) [![stars](https://img.shields.io/github/stars/jaksi/sshesame.svg?style=social&label=stars)](https://github.com/jaksi/sshesame) - すべての利用者を受け入れ、活動を記録する偽の SSH サーバー。


### *SSH* の代替

* [GoTTY](https://github.com/yudai/gotty) [![stars](https://img.shields.io/github/stars/yudai/gotty.svg?style=social&label=stars)](https://github.com/yudai/gotty) - ターミナルを Web アプリケーションとして共有します。
* [telnet](http://www.telnet.org/htm/faq.htm) - リモートコンピューターに接続してコマンドを発行するための、暗号化されないネットワークプロトコルとアプリケーション。
* [ttyd](https://github.com/tsl0922/ttyd) [![stars](https://img.shields.io/github/stars/tsl0922/ttyd.svg?style=social&label=stars)](https://github.com/tsl0922/ttyd) - Web 経由でターミナルを共有します。
* [rsh](https://en.wikipedia.org/wiki/Remote_Shell) - リモートコンピューターに接続してコマンドを発行する、暗号化されないネットワークプロトコルとアプリケーション。

## ライブラリ

* C/C++
  * [libssh](https://www.libssh.org) - *SSH* ライブラリ。
* Golang
  * [crypto/ssh](https://godoc.org/golang.org/x/crypto/ssh) - 組み込みの *SSH* クライアントおよびサーバーライブラリ。
  * [sftp](https://github.com/pkg/sftp) [![stars](https://img.shields.io/github/stars/pkg/sftp.svg?style=social&label=stars)](https://github.com/pkg/sftp) - go.crypto/ssh パッケージ向けの *SFTP* サポート。
  * [go-sshkit](https://github.com/shazow/go-sshkit) [![stars](https://img.shields.io/github/stars/shazow/go-sshkit.svg?style=social&label=stars)](https://github.com/shazow/go-sshkit) - Go で *SSH* サーバーとクライアントを構築するためのツールキット。
  * [Socker](https://github.com/cosiner/socker) [![stars](https://img.shields.io/github/stars/cosiner/socker.svg?style=social&label=stars)](https://github.com/cosiner/socker) - *SSH* の利用を簡潔にする Go 向けライブラリ。
  * [go-sshkeys](https://github.com/moul/go-sshkeys) - Golang の SSH 鍵操作ライブラリ。
* Java
  * [jsch](http://www.jcraft.com/jsch/) - 純粋な *java* で書かれた、*BSD* ライセンスの *SSH2* クライアントライブラリ。
* Javascript/Node.js
  * [ssh2](https://github.com/mscdex/ssh2) [![stars](https://img.shields.io/github/stars/mscdex/ssh2.svg?style=social&label=stars)](https://github.com/mscdex/ssh2) - *node.js* 用に純粋な *JavaScript* で書かれた *SSH2* クライアント／サーバーモジュール。
* Python
  * [paramiko](https://github.com/paramiko/paramiko) [![stars](https://img.shields.io/github/stars/paramiko/paramiko.svg?style=social&label=stars)](https://github.com/paramiko/paramiko) - ネイティブ *Python* *SSHv2* プロトコルライブラリ。
* Ruby
  * [net-ssh](https://github.com/net-ssh/net-ssh) [![stars](https://img.shields.io/github/stars/net-ssh/net-ssh.svg?style=social&label=stars)](https://github.com/net-ssh/net-ssh) - *SSH*（プロトコル 2）クライアントの純粋な *Ruby* 実装。

## リソース

### チュートリアル

* [How to use *SSH* to Connect to a Remote Server](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu)
* [Best practices](https://blog.0xbadc0de.be/archives/300)
* [Granting Temporary Access to Your Servers (Using Signed *SSH* Keys)](http://linux-audit.com/granting-temporary-access-to-servers-using-signed-ssh-keys/)
* [How to SSH login without a password](https://www.rosehosting.com/blog/ssh-login-without-password-using-ssh-keys/)
* [Gist: SSH Recipes](https://gist.github.com/mjalajel/beaa91a5f8d04ebb464c2c28da01406a) - 優れた ssh config ファイルを書くためのレシピ集。

### セキュリティ

* [01/14/2016](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-0777) - 整数オーバーフロー `CVE 2016 077[7-8]`。
* [Security/Guidelines/OpenSSH - MozillaWiki](https://wiki.mozilla.org/Security/Guidelines/OpenSSH) - `sshd\_config`（`6.7+`、`5.3` 用）。
* [Applied-Crypto-Hardening](https://github.com/BetterCrypto/Applied-Crypto-Hardening) [![stars](https://img.shields.io/github/stars/BetterCrypto/Applied-Crypto-Hardening.svg?style=social&label=stars)](https://github.com/BetterCrypto/Applied-Crypto-Hardening) - `sshd\_config`（`6.X` 用）。

### ドキュメント

* [man page](http://linux.die.net/man/1/ssh)
* [Specifications (OpenSSH)](http://www.openssh.com/specs.html)
* [Wikipedia article](https://en.wikipedia.org/wiki/Secure_Shell)

### コミュニティ

* [StackOverflow](http://stackoverflow.com/questions/tagged/ssh)
* [ServerFault](http://serverfault.com/questions/tagged/ssh)

## ライセンス

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[Manfred Touron](https://github.com/moul) はこの作品に関するすべての著作権および関連・隣接権を放棄しています。

