---
title: "Awesome Vagrant"
description: "VagrantのBox、プロビジョニング、プラグイン、ツール、ウェブ・プロキシサービス、学習資料、構築済み環境を案内します。"
licenseSource: "github-iJackUA-awesome-vagrant-readme-md"
---

# Awesome Vagrant

Vagrantのドキュメント、Box、プロビジョニング用スクリプト、プラグイン、ツール、ウェブ・プロキシサービス、チュートリアル、書籍、構築済みの開発環境を探せます。対応環境、版番号、サービスの有料・無料の記述は固定原文時点の情報です。

## 公式リソース

* [Vagrant サイト](https://www.vagrantup.com/) - インストール手順、公式マニュアル、ドキュメント。
* [GitHub リポジトリ](https://github.com/hashicorp/vagrant) - ソースコード、Issueでの議論、共同開発。

## Box

OSのBoxの入手先。

* [Vagrantbox.es](http://www.vagrantbox.es/) - GitHubのプルリクエストを通じてコミュニティが保守するBoxのリスト。原文では利用可能な全Boxを集めた最大のリストと説明。
* [Vagrant Cloud](https://app.vagrantup.com/boxes/search) - 設定の共有、Boxの配布・検索。非公開での共同作業と共有を行う有料機能も収録。
* [Cloud Images Ubuntu.com](https://cloud-images.ubuntu.com/vagrant/) - 原文で「クリーン」と説明される公式Ubuntuクラウドイメージ。
* [Opscode の Base Box](https://github.com/chef/bento#current-baseboxes) - CentOS、Fedora、Debian、FreeBSD、Ubuntu。
* [Puppet Labs Vagrant Boxes](http://puppet-vagrant-boxes.puppetlabs.com/) - 各種Puppetプロジェクト向けのBox。
* [Cloudsmith](https://cloudsmith.io) - Vagrantなどのリポジトリに対応する、フルマネージドのパッケージ管理SaaS。

## プロビジョニング

* [利用可能な組み込みプロビジョニング機能の一覧](https://www.vagrantup.com/docs/provisioning) - 公式ドキュメント。
* [Vaprobash](http://fideloper.github.io/Vaprobash/index.html) - Vagrantのプロビジョニング用Bashスクリプト。

## 注目プラグイン

これらのプラグインは `vagrant plugin install MODULE-NAME` でインストールできます。

* [GitHub Wiki の利用可能な Vagrant プラグイン一覧](https://github.com/hashicorp/vagrant/wiki/Available-Vagrant-Plugins)。
* [vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest) - VirtualBoxの版に合わせてGuest Additionsを自動更新。
* [vagrant-hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater) - ホストの /etc/hosts ファイルにエントリーを追加。
* [vagrant-cachier](http://fgrehm.viewdocs.io/vagrant-cachier/) - 似た構成のVM間で、apt-getやnpmなどのパッケージキャッシュを共有。
* [vagrant-host-shell](https://github.com/phinze/vagrant-host-shell) - VM起動時にホスト上でコマンドを実行するVagrantプロビジョナー。
* [vagrant-ansible-local](https://github.com/jaugustin/vagrant-ansible-local) - ゲストVM内からAnsibleプレイブックを使ってVMをプロビジョニング。
* [sahara](https://github.com/jedi4ever/sahara) - ソフトウェアスタックを試しながら、VMの状態をコミット・ロールバック。
* [vagrant-registration](https://github.com/projectatomic/adb-vagrant-registration) - Red Hat Enterprise Linuxなど、サブスクリプション制のシステムを更新するため、Vagrantゲストに登録（register）・登録解除（unregister）機能を追加。
* [vagrant-service-manager](https://github.com/projectatomic/vagrant-service-manager) - [Atomic Developer Bundle（ADB）](https://github.com/projectatomic/adb-atomic-developer-bundle)の機能とサービスへのアクセス。
* [vagrant-scp](https://github.com/invernizzi/vagrant-scp) - SCP経由でVagrant VMにファイルをコピー。

## ヘルパー／ツール

* [Packer](https://www.packer.io/) - 単一のソース設定から複数プラットフォーム向けの同一マシンイメージを作成。複数プロバイダーへ移植可能で、原文ではインフラの迅速なデプロイ用と説明。
* [T.A.D.S. boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Vagrantで本番環境をローカルに再現し、Docker Swarm環境を作成・開発・デプロイするひな形。
* [Veewee](https://github.com/jedi4ever/veewee) - 独自のVagrantベースBox、KVM、仮想マシンイメージを繰り返し構築するツール。
* [ZSHシェル用Vagrantプラグイン](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#vagrant) - コマンド、タスク名、Box名の自動補完と組み込みドキュメント。
* [CLI Vagrant Manager](https://github.com/MunGell/vgm) - 複数のVagrant Boxを管理するコマンドラインツール。

## デスクトップツール

* [Vagrant Manager](http://vagrantmanager.com/) - OS X向け。

## Web サービス

自動プロビジョニングスクリプト付きのVagrantfileを生成します。

* [Phansible](http://phansible.com/) - PHPプロジェクト向けのAnsibleプレイブック生成を支援するインターフェース。
* [PuPHPet](https://puphpet.com/) - PHPに限らないウェブ開発用の仮想マシンを設定するGUI。
* [Protobox](http://getprotobox.com/) - PuPHPetに似たツール。YAML設定の独自インストーラーで、仮想マシンにインストールするすべてのソフトウェアを制御。
* [Rove](http://rove.io/) - 一般的なVagrant構成をあらかじめ生成するサービス。

## プロキシサービス

ローカルウェブサーバーをプロキシして、インターネットへ公開するサービスです。

* [Vagrant Share](https://www.vagrantup.com/docs/share/) - Vagrant環境を世界中の人と共有。
* [nip.io](http://nip.io) - 任意のIPアドレスにワイルドカードDNSを提供するドメイン名。
* [ngrok](https://ngrok.com/) - NATやファイアウォールの内側にあるローカルサーバーをインターネットへ公開するトンネル。原文では安全なトンネルと説明。
* [serveo](https://serveo.net/) - クライアントをインストールせずにローカルサーバーをインターネットへ公開。
* [proxylocal.com](http://proxylocal.com) - ローカルウェブサーバーをプロキシしてインターネットへ公開。
* [localtunnel.me](https://localtunnel.github.io/www/) - 公開アクセス可能な一意のURLを割り当て、すべてのリクエストをローカルウェブサーバーへ転送。
* [portmap.io](https://portmap.io/) - 原文では無料と説明される、OpenVPNベースのポート転送。

## チュートリアル

* [Vagrant 入門](http://www.thisprogrammingthing.com/2013/getting-started-with-vagrant/)（This Programming Thing）。
* [Vagrant 入門 - 開発サーバーのデプロイとプロビジョニングを自動化する](http://stdout.in/en/post/getting_started_with_vagrant_automated_dev_servers_deploy_and_provisioning)
* [PhpStorm で高度な Vagrant 機能を扱う](http://confluence.jetbrains.com/display/PhpStorm/Working+with+Advanced+Vagrant+features+in+PhpStorm)
* [Vagrant Shareで仮想マシンをウェブ上に共有する](https://scotch.io/tutorials/sharing-your-virtual-machine-on-the-web-with-vagrant-share)。
* [プログラミングコミュニティが選んだ Vagrant 学習リソース](https://hackr.io/tutorials/learn-vagrant)
* [Classpert の Vagrant オンライン講座](https://classpert.com/vagrant) - 無料・有料のVagrantオンライン講座。

## 書籍

* [Vagrant: Up and Running](https://www.amazon.com/Vagrant-Running-Virtualized-Development-Environments/dp/1449335837)（Mitchell Hashimoto）。
* [Vagrant CookBook](https://leanpub.com/vagrantcookbook)（Erika Heidi）。
* [Pro Vagrant](https://www.amazon.com/Pro-Vagrant-Wlodzimierz-Gajda/dp/1484200748/)（Wlodzimierz Gajda）。
* [Creating Development Environments with Vagrant（Vagrantによる開発環境の作成）](http://shop.oreilly.com/product/9781849519182.do)／[第2版](http://shop.oreilly.com/product/9781784397029.do)（Michael Peacock）
* [Vagrant Virtual Development Environment Cookbook（Vagrant仮想開発環境のレシピ集）](http://shop.oreilly.com/product/9781784393748.do)（Chad Thompson）

## 構築済み環境<a id="人気の構築済み環境"></a>

* [Vagrantpress](https://github.com/vagrantpress/vagrantpress) - WordPressサイトを作成・変更するための開発環境。
* [Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV) - WordPress開発向けのオープンソースVagrant設定。
* [Joomla-Vagrant](https://github.com/joomlatools/joomlatools-vagrant)。
* [VDD](https://www.drupal.org/project/vdd) - VagrantによるDrupal開発。
* [Drupal VM](https://www.drupalvm.com/) - VagrantとAnsibleで構築した、ローカルDrupal開発用VM。
* [Try Yii2](https://github.com/iJackUA/try-yii2) - Vagrant VMとAnsibleのプロビジョニングでYii2を試せる、構築済みの仮想サーバー実験環境。
* [Laravel4-Vagrant](https://github.com/bryannielsen/Laravel4-Vagrant) - PHP 5.5を備えたUbuntu 12.04のVagrant仮想マシンでLaravel 4を実行。
* [Vagrant 上の Ansible による OpenStack](https://github.com/openstack-ansible/openstack-ansible)。
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - Ubuntu 16.04 LTS、PHP 7、Nginx、複数のデータベースを基盤とするLaravel開発用の公式Vagrant Box。
* [Scotch Box](https://scotch.io/bar-talk/announcing-scotch-box-2-0-our-dead-simple-vagrant-lamp-stack-improved) - Ubuntu 14.04 LTSを基に、[LAMP](https://en.m.wikipedia.org/wiki/LAMP_%28software_bundle%29)スタックと追加機能を備えたVagrant Box。
