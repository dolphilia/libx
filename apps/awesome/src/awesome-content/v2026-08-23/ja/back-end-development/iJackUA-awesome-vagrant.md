---
title: "iJackUA/awesome-vagrant"
description: "iJackUA/awesome-vagrant の正規スナップショット"
licenseSource: "github-iJackUA-awesome-vagrant-readme-md"
---

# Awesome Vagrant
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/iJackUA/awesome-vagrant?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) [![ビルド状態](https://api.travis-ci.org/iJackUA/awesome-vagrant.svg?branch=master)](https://travis-ci.org/iJackUA/awesome-vagrant)

Vagrant の優れたリソース、プラグイン、チュートリアル、その他の便利なものを集めたリストです。


## 公式リソース

* [Vagrant サイト](https://www.vagrantup.com/) - インストール手順、公式マニュアル、ドキュメントです。
* [GitHub リポジトリ](https://github.com/hashicorp/vagrant) - ソースコード、Issue の議論、共同開発です。


## Box

*OS の Box はどこで見つかるでしょうか？*

* [Vagrantbox.es](http://www.vagrantbox.es/) - 利用可能なすべての Box を集めた最大のリストで、GitHub の Pull Request を通じてコミュニティが保守しています。
* [Vagrant Cloud](https://app.vagrantup.com/boxes/search) - 設定の共有、Box の配布・検索を行います（非公開での共同作業と共有を行う有料機能もあります）。
* [Cloud Images Ubuntu.com](https://cloud-images.ubuntu.com/vagrant/) - 「クリーン」な公式 Ubuntu Cloud Image です。
* [Opscode の Base Box](https://github.com/chef/bento#current-baseboxes) - CentOS、Fedora、Debian、FreeBSD、Ubuntu です。
* [Puppet Labs Vagrant Boxes](http://puppet-vagrant-boxes.puppetlabs.com/) - さまざまな Puppet プロジェクトで使用するために提供される Box です。
* [Cloudsmith](https://cloudsmith.io) - Vagrant リポジトリなどに対応する、フルマネージドのパッケージ管理 SaaS です。

## プロビジョニング

* [利用可能な組み込み Provisioning Provider の一覧](https://www.vagrantup.com/docs/provisioning) - 公式ドキュメントです。
* [Vaprobash](http://fideloper.github.io/Vaprobash/index.html) - Vagrant Provisioning 用 Bash Script です。


## 注目プラグイン

*これらのモジュールは `vagrant plugin install MODULE-NAME` コマンドでインストールできます。*

* [GitHub Wiki の利用可能な Vagrant プラグイン一覧](https://github.com/hashicorp/vagrant/wiki/Available-Vagrant-Plugins)。
* [vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest) - VirtualBox Guest Additions を VB のバージョンに合わせて自動更新します。
* [vagrant-hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater) - ホストシステムの /etc/hosts ファイルにエントリーを追加します。
* [vagrant-cachier](http://fgrehm.viewdocs.io/vagrant-cachier/) - 似た VM Instance 間で共通のパッケージ（apt-get、npm など）キャッシュを共有します。
* [vagrant-host-shell](https://github.com/phinze/vagrant-host-shell) - VM の起動時にホスト上でコマンドを実行する Vagrant Provisioner です。
* [vagrant-ansible-local](https://github.com/jaugustin/vagrant-ansible-local) Guest VM から直接 Ansible Playbook を使って VM をプロビジョニングできます。
* [sahara](https://github.com/jedi4ever/sahara) - VM の状態を簡単に管理します（ソフトウェアスタックを試しながら Commit／Rollback できます）。
* [vagrant-registration](https://github.com/projectatomic/adb-vagrant-registration) - Red Hat Enterprise Linux のようなサブスクリプションモデルのシステムで更新するため、Vagrant Guest に「register」と「unregister」機能を追加します。
* [vagrant-service-manager](https://github.com/projectatomic/vagrant-service-manager) - [Atomic Developer Bundle（ADB）](https://github.com/projectatomic/adb-atomic-developer-bundle)が提供する機能とサービスへ簡単にアクセスできるようにします。
* [vagrant-scp](https://github.com/invernizzi/vagrant-scp) - SCP 経由で Vagrant VM にファイルをコピーします。

## ヘルパー／ツール

* [Packer](https://www.packer.io/) - 単一のソース設定から複数プラットフォーム向けの同一 Machine Image を作成するツールです。複数 Provider に移植可能なインフラを迅速にデプロイできます。
* [T.A.D.S. boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Vagrant で本番環境をローカルに再現し、Docker Swarm 環境を作成、開発、デプロイするためのボイラープレートです。
* [Veewee](https://github.com/jedi4ever/veewee) - 独自の Vagrant Base Box、KVM、仮想 Machine Image を簡単かつ繰り返し構築するツールです。
* [ZSH Shell 用 Vagrant プラグイン](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#vagrant) - コマンド、タスク名、Box 名、組み込みドキュメントを自動補完します。
* [CLI Vagrant Manager](https://github.com/MunGell/vgm) - 複数の Vagrant Box を管理するシンプルなコマンドラインツールです。

## デスクトップツール

* OS X 用 [Vagrant Manager](http://vagrantmanager.com/)Mac OSで使用可能。

## Web サービス

*自動プロビジョニングスクリプト付きの Vagrantfile を生成します。*

* [Phansible](http://phansible.com/) - PHP ベースのプロジェクト向け Ansible Playbook の生成を支援する、使いやすいインターフェースです。
* [PuPHPet](https://puphpet.com/) - <s>PHP</s> Web 開発用の仮想 Machine をセットアップするシンプルな GUI です。
* [Protobox](http://getprotobox.com/) - PuPHPet に似ていますが、仮想 Machine にインストールするすべてを制御するため、YAML 設定形式の独自インストーラーを使います。
* [Rove](http://rove.io/) - 一般的な Vagrant ビルドをあらかじめ生成できるサービスです。

## プロキシサービス

*ローカル Web サーバーをプロキシし、インターネットへ公開します。*

* [Vagrant Share](https://www.vagrantup.com/docs/share/) - Vagrant 環境を世界中の誰とでも共有できます。
* [nip.io](http://nip.io) - 任意の IP アドレスにワイルドカード DNS を提供する魔法のようなドメイン名です。
* [ngrok](https://ngrok.com/) - NAT や Firewall の内側にあるローカルサーバーをインターネットへ公開する安全な Tunnel を作成します。
* [serveo](https://serveo.net/) - クライアントをインストールせず、ローカルサーバーをインターネットへ公開します！
* [proxylocal.com](http://proxylocal.com) - ローカル Web サーバーをプロキシしてインターネットへ公開します。
* [localtunnel.me](https://localtunnel.github.io/www/) - ローカルで動作する Web サーバーへのすべてのリクエストをプロキシする、一意で公開アクセス可能な URL を割り当てます。
* [portmap.io](https://portmap.io/) - OpenVPN ベースの無料 Port Forwarding ソリューションです。

## チュートリアル

* [Vagrant 入門](http://www.thisprogrammingthing.com/2013/getting-started-with-vagrant/)（This Programming Thing）。
* [Vagrant 入門 - 開発サーバーのデプロイとプロビジョニングを自動化する](http://stdout.in/en/post/getting_started_with_vagrant_automated_dev_servers_deploy_and_provisioning)
* [PhpStorm で高度な Vagrant 機能を扱う](http://confluence.jetbrains.com/display/PhpStorm/Working+with+Advanced+Vagrant+features+in+PhpStorm)
* [Vagrant Share で仮想 Machine を Web 上に共有する](https://scotch.io/tutorials/sharing-your-virtual-machine-on-the-web-with-vagrant-share)。
* [プログラミングコミュニティが選んだ Vagrant 学習リソース](https://hackr.io/tutorials/learn-vagrant)
* [Classpert の Vagrant オンライン講座](https://classpert.com/vagrant) 無料・有料の Vagrant オンライン講座一覧です。

## 書籍

* [Vagrant：Up and Running](https://www.amazon.com/Vagrant-Running-Virtualized-Development-Environments/dp/1449335837)（Mitchell Hashimoto）。
* [Vagrant CookBook](https://leanpub.com/vagrantcookbook)（Erika Heidi）。
* [Pro Vagrant](https://www.amazon.com/Pro-Vagrant-Wlodzimierz-Gajda/dp/1484200748/)（Wlodzimierz Gajda）。
* [Vagrant で開発環境を作成する](http://shop.oreilly.com/product/9781849519182.do)／[第2版](http://shop.oreilly.com/product/9781784397029.do)（Michael Peacock）
* [Vagrant 仮想開発環境 Cookbook](http://shop.oreilly.com/product/9781784393748.do)（Chad Thompson）

## 人気の構築済み環境

* [Vagrantpress](https://github.com/vagrantpress/vagrantpress) - WordPress サイトを作成・変更するための開発環境です。
* [Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV) - WordPress 開発に重点を置いたオープンソース Vagrant 設定です。
* [Joomla-Vagrant](https://github.com/joomlatools/joomlatools-vagrant)。
* [VDD](https://www.drupal.org/project/vdd) - Vagrant Drupal Development です。
* [Drupal VM](https://www.drupalvm.com/) - Vagrant + Ansible で構築された、ローカル Drupal 開発用 VM です。
* [Try Yii2](https://github.com/iJackUA/try-yii2) - Vagrant VM + Ansible Provisioning で Yii2 を試せる、完成済みの仮想 Server Playground です。
* [Laravel4-Vagrant](https://github.com/bryannielsen/Laravel4-Vagrant) - PHP 5.5 を備えた Ubuntu 12.04 Vagrant Virtual Machine 内で Laravel 4 を実行します。
* [Vagrant 上の Ansible による OpenStack](https://github.com/openstack-ansible/openstack-ansible)。
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Ubuntu 16.04 LTS、PHP 7、Nginx、複数のデータベースプラットフォームを基にした、Laravel 開発用の公式 Vagrant Box です。
* [Scotch Box](https://scotch.io/bar-talk/announcing-scotch-box-2-0-our-dead-simple-vagrant-lamp-stack-improved) - Ubuntu 14.04 LTS を基に、[LAMP](https://en.m.wikipedia.org/wiki/LAMP_%28software_bundle%29) Stack と便利な追加機能を備えたシンプルな Vagrant Box です。


## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Ievgen Kuzminov](http://stdout.in/) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
