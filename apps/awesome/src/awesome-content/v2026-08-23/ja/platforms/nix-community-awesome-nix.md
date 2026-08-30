---
title: "Awesome Nix"
description: "Nixを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-nix-community-awesome-nix-readme-md"
---

# Awesome Nix

Nixを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

* [リソース](#resources)
    * [学習](#learning)
    * [探索](#discovery)
* [インストールメディア](#installation-media)
* [チャンネル履歴](#channel-history)
* [デプロイツール](#deployment-tools)
* [仮想化](#virtualisation)
* [コマンドラインツール](#command-line-tools)
* [開発](#development)
* [DevOps](#devops)
* [プログラミング言語](#programming-languages)
    * [Arduino](#arduino)
    * [Clojure](#clojure)
    * [Crystal](#crystal)
    * [Elixir](#elixir)
    * [Elm](#elm)
    * [Gleam](#gleam)
    * [Haskell](#haskell)
    * [Haxe](#haxe)
    * [Julia](#julia)
    * [Lean](#lean)
    * [Node.js](#nodejs)
    * [OCaml](#ocaml)
    * [PHP](#php)
    * [PureScript](#purescript)
    * [Python](#python)
    * [Ruby](#ruby)
    * [Rust](#rust)
    * [Scala](#scala)
    * [Zig](#zig)
* [NixOSモジュール](#nixos-modules)
* [NixOS設定エディター](#nixos-configuration-editors)
* [オーバーレイ](#overlays)
* [ディストリビューション](#distributions)
* [コミュニティ](#community)

## リソース

### 学習

* [NixでRustサービスを構築する](https://fasterthanli.me/series/building-a-rust-service-with-nix) - NixでRustアプリケーションを作成する方法を詳しく扱うブログシリーズ。
* [Explainix](https://zaynetro.com/explainix) - Nix構文を視覚的に説明します。
* [Nixの学び方](https://ianthehenry.com/posts/how-to-learn-nix/) - Let's Playのような形式で、知られざるソフトウェアのドキュメントを扱います。
* [Nix - A One Pager](https://code.tvl.fyi/about/nix/nix-1p) - Nix言語を1ページで紹介します。
* [nix-book](https://saylesss88.github.io) - NixOSの堅牢化と設定に関する包括的なガイド。
* [Nix from First Principles: Flake Edition](https://tonyfinn.com/blog/nix-from-first-principles-flake-edition/) - Nixの機能とFlakeの利用、Nixによる開発を短時間で学べる現代的な入門。
* [Nix in 100 Seconds](https://www.youtube.com/watch?v=FJVFXsNzYZQ) - FireshipがNixを100秒で紹介するYouTube動画。
* [Nix Notes](https://github.com/noteed/nix-notes) - 同じ仮想マシンイメージへ寄与する、Nixについての短いメモのコレクション。
* [Nix Pills](https://nixos.org/guides/nix-pills/) - 例を使った最良の学習方法。
* [Nix Shorts](https://github.com/alper/nix-shorts) - Nixの使い方に関する短いメモ集。Nix Flakes向けに更新されています。
* [Nix Starter Config](https://github.com/Misterio77/nix-starter-configs) - NixOSとhome-managerを始めるための簡潔なNix Flakeテンプレート集。
* [nix.dev](https://nix.dev/) - Nixエコシステムを使って物事を進める開発者向けの方針を明確にしたガイド。
* [NixOS & Flakes Book](https://github.com/ryan4yin/nixos-and-flakes-book) - 初心者向けの非公式で方針を明確にしたNixOS・Flakes解説書。
* [NixOS Asia Tutorial Series](https://nixos.asia/en/tutorial) - Nix Flakes、NixOS、home-managerなどの使い方を扱う高レベルなチュートリアルシリーズ。
* [NixOS in Production](https://leanpub.com/nixos-in-production) - PDF形式の無料（任意額支払い）書籍。
* [Unofficial NixOS test driver manual](https://applicative.systems/nixos-test-driver-manual/) - クイックスタートガイドとベストプラクティスを備えた、方針を明確にした非公式NixOSテストドライバーマニュアル。
* [Official Nix manual](https://nix.dev/manual/nix/stable/) - Nix公式マニュアルの最新安定版。リファレンスガイドとしての利用に最適で、更新が提供されると反映されます。
* [Official NixOS manual](https://nixos.org/manual/nixos/stable/) - NixOS公式マニュアルの最新安定版。チュートリアルとリファレンスガイドを兼ね、更新が提供されると反映されます。
* [Official Nixpkgs manual](https://nixos.org/manual/nixpkgs/stable/) - Nixpkgs公式リファレンスマニュアルの最新安定版。更新が提供されると反映されます。
* [Tour of Nix](https://nixcloud.io/tour/) - Nix言語の構造を学べるオンライン対話型チュートリアル。
* [Wombat's Book of Nix](https://mhwombat.codeberg.page/nix-book/) - NixとFlakeについての書籍相当の入門。
* [Zero to Nix](https://zero-to-nix.com/) - 初心者がすぐに学び始められるようDeterminate Systemsが作成した、Nixとその概念を扱うFlake中心のガイド。

### 探索

* [Home Manager Option Search](https://home-manager-options.extranix.com/) - 2,000を超えるHome Managerの全オプションを検索し、使い方を確認できます。

* [Nix Package Versions](https://lazamar.co.uk/nix-versions/) - チャンネルで提供されたパッケージの全バージョンと、それをダウンロードできるリビジョンを検索します。
* [Nix Software](https://nixsoftware.org/en/) - 使いやすいパッケージ検索。ロゴ、スクリーンショット、カテゴリ、多言語翻訳に対応します。
* [nix-search-tv](https://github.com/3timeslazy/nix-search-tv) - Nixpkgs、Home Managerなどのパッケージとオプションを対象にしたCLIファジーファインダー。
* [Noogle](https://noogle.dev/) - 型やその他の属性に基づいて関数を検索できるNix API検索エンジン。
* [NüschtOS Search](https://github.com/NuschtOS/search) - 簡潔で高速な静的ページ型NixOSオプション検索。
* [Searchix](https://searchix.ovh/) - NixOS、Darwin、Home ManagerのNixパッケージとオプションを検索します。

## インストールメディア

* [nix-installer-scripts](https://github.com/dnkmmr69420/nix-installer-scripts) - 公式インストーラーを実行しつつ、SELinux用fcontextの追加や、誤ってアンインストールしないよう既定プロファイル外へNixをインストールするなどの調整も行います。
* [nix-installer](https://github.com/DeterminateSystems/nix-installer) - Nix公式インストールスクリプトに代わる方針を明確にしたツール。
* [nixos-anywhere](https://github.com/nix-community/nixos-anywhere) - SSH経由でどこにでもNixOSをインストールします。
* [nixos-generators](https://github.com/nix-community/nixos-generators) - NixOS設定から、VirtualBox VM、Azureイメージ、インストールISOなど複数種類のイメージを構築します。
* [nixos-infect](https://github.com/elitak/nixos-infect) - 稼働中のNixOS以外のLinuxホストをNixOSへ置き換えます。
* [nixos-up](https://github.com/samuela/nixos-up) - インストールISOから利用できる非常に簡単なNixOSインストーラー。

## チャンネル履歴

* [`npc`](https://github.com/samestep/npc) - Nixpkgsチャンネル履歴を表示・二分探索するCLI。
* [Nix Infra Status](https://status.nixos.org) - 各Nixチャンネルの経過時間と現在のGitコミットを取得します。
* [Nix Review Tools Reports](https://malob.github.io/nix-review-tools-reports/) - 主要なHydra jobsetについて、問題のある依存関係（ビルド失敗を最も多く引き起こす依存関係）を示すレポート。

* [nixpkgs PR tracker](https://nixpk.gs/pr-tracker.html) - PRがすでにチャンネルへ入ったかを追跡します。

## デプロイツール

* [bento](https://github.com/rapenne-s/bento/) - NixOSフリート（サーバーとワークステーション）を最新に保つKISSなデプロイツール。
* [Clan](https://clan.lol) - シークレットの組み込み対応と、分散ネットワークを管理するモジュールシステムを備えたP2Pデプロイツール。
* [Colmena](https://github.com/nix-community/colmena) - NixOpsとmorphを模した、簡潔でステートレスなNixOSデプロイツール。
* [comin](https://github.com/nlewo/comin) - Gitリポジトリから継続的にpullするデプロイツール。
* [deploy-rs](https://github.com/serokell/deploy-rs) - 簡潔なマルチプロファイルNix Flakeデプロイツール。
* [krops](https://cgit.krebsco.de/krops/about/) - NixOSシステムをリモートまたはローカルへデプロイする軽量ツールキット。
* [KubeNix](https://github.com/hall/kubenix) - Nixを使うKubernetesリソースビルダー。
* [KuberNix](https://github.com/saschagrunert/kubernix) - Nixパッケージによる単一依存関係のKubernetesクラスター。
* [morph](https://github.com/DBCDK/morph) - 既存のNixOSホストを管理するツール。
* [Nixery](https://github.com/tazjin/nixery) - Nixを介してその場でイメージを構築するDocker互換コンテナレジストリ。
* [Nixinate](https://github.com/MatthewCroughan/nixinate) - SSH経由で既存のNixOSホストを管理するapp出力を提供するNix Flakeライブラリ。
* [Nixlets](https://gitlab.com/TECHNOFAB/nixlets) - Nixだけを使うHelmのようなツール。内部でKubenixを使用します。
* [NixOps](https://github.com/NixOS/nixops) - AWS、Hetznerなどに対応するNix公式デプロイツール。
* [pushnix](https://github.com/arnarg/pushnix) - NixOS設定をpushし、SSHを使って再ビルドを開始する簡潔なCLIユーティリティ。
* [terraform-nixos](https://github.com/nix-community/terraform-nixos) - NixOSのデプロイ用に設計されたTerraformモジュール集。
* [terranix](https://terranix.org) - NixとNixOSモジュールシステムを使ってTerraformコードを記述します。

## 仮想化

* [agent-sandbox.nix](https://github.com/archie-judd/agent-sandbox.nix) - Linuxではbubblewrap、macOSではsandbox-execを使い、任意のパッケージ（AIコーディングエージェントなど）を宣言的にサンドボックス化します。
* [extra-container](https://github.com/erikarvstedt/extra-container) - コマンドラインから宣言的なNixOSコンテナを実行します。
* [microvm](https://github.com/microvm-nix/microvm.nix) - NixOSベースのMicroVM。
* [nixos-shell](https://github.com/Mic92/nixos-shell) - Nixを使う簡潔なヘッドレスVM設定（Vagrantに類似）。

## コマンドラインツール

* [alejandra](https://github.com/kamadorueda/alejandra) - 速度と一貫性を重視した、方針を明確にしたNixコードフォーマッター。
* [angrr](https://github.com/linyinfeng/angrr) - Auto Nix GC Roots Retention。シンボリックリンク先の更新時刻に基づいて自動GC rootを削除します。
* [comma](https://github.com/nix-community/comma) - あらゆるバイナリをすばやく実行します。`nix run`と`nix-index`を組み合わせます。
* [deadnix](https://github.com/astro/deadnix) - Nixファイルのデッドコードをスキャンします。
* [devenv](https://github.com/cachix/devenv) - 開発用shell環境を迅速かつ再現可能に作成するNixベースのツール。
* [dix](https://github.com/manic-systems/dix) - Diff Nix。Nix関連の要素を比較する超高速ツール。
* [manix](https://github.com/mlvzk/manix) - Nixpkgs、NixOS、Home Managerの設定オプションと関数ドキュメントを検索します。
* [nh](https://github.com/nix-community/nh) - `nix`、`nixos-rebuild`、`home-manager`、nix-darwin CLIの出力を、`dix`と`nix-output-monitor`を活用して改善します。
* [nix-alien](https://github.com/thiagokokada/nix-alien) - パッチ未適用のバイナリをNix／NixOS上で簡単に実行します。
* [nix-diff](https://github.com/Gabriella439/nix-diff) - 2つのNix derivationが異なる理由を説明するツール。
* [nix-du](https://github.com/symphorien/nix-du) - Nix storeの空き容量を増やすために削除すべきgc-rootを可視化します。
* [nix-index](https://github.com/nix-community/nix-index) - 特定のファイルを含むNixパッケージをすばやく特定します。
* [nix-init](https://github.com/nix-community/nix-init) - ハッシュの事前取得、依存関係推論、ライセンス検出などを使ってURLからNixパッケージを生成します。
* [nix-melt](https://github.com/nix-community/nix-melt) - ranger風のflake.lockビューアー。
* [nix-output-monitor](https://github.com/maralorn/nix-output-monitor) - derivationのビルド時に有用なグラフと統計を生成するツール。
* [nix-prefetch](https://github.com/msteen/nix-prefetch) - ソースチェックサム更新用の汎用ツール。
* [nix-tree](https://github.com/utdemir/nix-tree) - Nix derivationの依存関係グラフを対話的に参照します。
* [nixfmt](https://github.com/NixOS/nixfmt) - 統一スタイルを容易に適用するためのNixコードフォーマッター。
* [nixos-cli](https://github.com/nix-community/nixos-cli) - ユーザー体験の向上を重視した、一般的なNixOSツール向けの設定可能な統合CLI。
* [nixpkgs-hammering](https://github.com/jtojnar/nixpkgs-hammering) - Nixpkgsパッケージ式向けの方針を明確にしたリンター。
* [nurl](https://github.com/nix-community/nurl) - リポジトリURLからNix fetcher呼び出しを生成します。
* [nvd](https://git.sr.ht/~khumba/nvd) - 2つのstore path間でパッケージバージョンを比較します。再ビルド時にNixOS generationを比較する場合に特に便利です。
* [optnix](https://git.sr.ht/~watersucks/optnix) - Nixモジュールシステム向けの端末ベースオプション検索。
* [statix](https://github.com/oppiliappan/statix) - Nixコードのアンチパターンを検査・修正するリンター兼フィクサー。

## 開発

* [Arion](https://github.com/hercules-ci/arion) - Nix／NixOSの支援を受けて`docker-compose`を実行します。
* [attic](https://github.com/zhaofengli/attic) - マルチテナント対応Nix Binary Cache。
* [cached-nix-shell](https://github.com/xzfc/cached-nix-shell) - キャッシュを使い、2回目以降のshellをすばやく開く`nix-shell`代替。
* [Cachix](https://www.cachix.org) - ホスト型バイナリキャッシュサービス。オープンソースプロジェクトは無料です。
* [compose2nix](https://github.com/aksiksi/compose2nix) - Docker ComposeプロジェクトからNixOS設定を生成します。
* [Conflake](https://ratson.github.io/conflake/) - `flake.nix`向けの、必要な機能を内蔵し、ファイルを自動読込する規約ベース設定フレームワーク。
* [Devbox](https://github.com/jetify-com/devbox) - 即時利用でき、移植可能で予測可能な開発環境。
* [devshell](https://github.com/numtide/devshell) - Nix未経験者も導入できるよう、追加機能とtoml設定オプションを備えた`mkShell`。
* [dream2nix](https://github.com/nix-community/dream2nix) - 他のビルドシステムからNixへパッケージを自動変換するフレームワーク。
* [flake-edit](https://github.com/a-kenji/flake-edit) - 自動followと更新機能を使い、CLIから直接Flake入力を編集します。
* [flake-utils-plus](https://github.com/gytis-ivaskevicius/flake-utils-plus) - NixOS Flakeを容易に設定する軽量なNixライブラリFlake。
* [flake-utils](https://github.com/numtide/flake-utils) - Flakeの記述を支援する純粋なNix製Flakeユーティリティ関数。
* [flake.parts](https://github.com/hercules-ci/flake-parts) - Flake向けの最小限のNixモジュールフレームワーク。Flakeをモジュールへ分割し、コミュニティモジュールを利用できます。
* [flakelight](https://github.com/nix-community/flakelight) - ボイラープレートの最小化を目指すモジュール式Flakeフレームワーク。
* [flox](https://github.com/flox/flox) - 開発環境の管理・共有、パッケージプロジェクト、成果物の公開をどこからでも行えます。
* [gitignore.nix](https://github.com/hercules-ci/gitignore.nix) - 最も高機能で使いやすい`.gitignore`統合。
* [haumea](https://github.com/nix-community/haumea) - ファイル階層と可視性をサポートする、従来のプログラミング言語に似たNix言語向けファイルシステムベースのモジュールシステム。
* [lorri](https://github.com/nix-community/lorri/) - direnvを拡張する、開発向けの大幅に改善された`nix-shell`。
* [make-shell](https://github.com/nicknovitski/make-shell) - `mkShell`とモジュールを組み合わせた、`pkgs.mkShell`関数のモジュール式でほぼドロップイン可能な代替。
* [MCP-NixOS](https://github.com/utensils/mcp-nixos) - NixOSパッケージ、オプション、Home Manager、nix-darwin設定について正確な情報をAIアシスタントへ提供するMCPサーバー。
* [namaka](https://github.com/nix-community/namaka) - haumeaを基にしたNix向けスナップショットテスト。
* [nil](https://github.com/oxalica/nil) - Nixでの記述を支援する増分解析対応Nix言語サーバー。
* [niv](https://github.com/nmattia/niv/) - パッケージ固定を使うNixプロジェクト向けの簡単な依存関係管理。
* [nix2container](https://github.com/nlewo/nix2container) - Nixによる効率的なコンテナ構築ワークフロー。
* [nix-direnv](https://github.com/nix-community/nix-direnv) - direnv環境自動ローダー向けの高速でFlake準拠の設定ローダー。
* [nix-health](https://github.com/juspay/nix-health) - Nixインストールの状態を検査するプログラム。各プロジェクトは独自の状態検査を`flake.nix`で設定することもできます。
* [nix-oci](https://github.com/Dauliac/nix-oci) - nix2containerで最小かつ再現可能なOCIコンテナを構築するflake-partsモジュール。
* [nix-update](https://github.com/Mic92/nix-update) - Nixパッケージのバージョン／ソースハッシュを更新します。
* [nixd](https://github.com/nix-community/nixd) - Nixライブラリを基にしたNix言語サーバー。
* [nixpkgs-review](https://github.com/Mic92/nixpkgs-review) - NixpkgsのPull Requestが正しくビルドされることを確認する最良のツール。
* [Nixtest](https://gitlab.com/TECHNOFAB/nixtest) - スナップショット・単体テスト対応、JUnit生成などを備えたNix向けテストフレームワーク。
* [npins](https://github.com/andir/npins) - Nixプロジェクトで各種依存関係を扱う簡潔なツール。Nivに着想を得ており、同様の機能を持ちます。
* [pog](https://github.com/jpetrucciani/pog) - Bashスクリプトの新しく強力な作成方法。開発者によるCLI作成方法を変える強力なNixライブラリです。
* [pre-commit-hooks.nix](https://github.com/cachix/git-hooks.nix) - コミット時およびCI上でリンター／フォーマッターを実行します。
* [rnix-lsp](https://github.com/nix-community/rnix-lsp) - Nix向けの構文検査対応言語サーバー。
* [robotnix](https://github.com/nix-community/robotnix) - Android（AOSP）イメージ向けの宣言的で再現可能なビルドシステム。
* [services-flake](https://github.com/juspay/services-flake) - Nix Flake向けのNixOS風サービス設定フレームワーク。
* [Snowfall Lib](https://github.com/snowfallorg/lib) - 方針を持つファイル構造を課すことでNix Flakeを簡単に管理できるライブラリ。
* [templates](https://github.com/nix-community/templates) - Nix Flakeを使う多数の言語向けプロジェクトテンプレート。
* [treefmt-nix](https://github.com/numtide/treefmt-nix) - 単一の`.nix`ファイルから一つのコマンドでプロジェクトの全ファイルを整形できるフォーマッター。

## DevOps

* [Nix GitLab CI](https://gitlab.com/TECHNOFAB/nix-gitlab-ci) - すべてのNixパッケージへ完全にアクセスし（キャッシュを含む）、純粋なNixでGitLab CIパイプラインを定義します。
* [nixidy](https://github.com/arnarg/nixidy) - NixとArgo CDによるKubernetes GitOps。
* [Standard](https://github.com/divnix/std) - 大規模プロジェクトのNixコードを整理する、方針を明確にしたNix Flakesフレームワーク。DevOpsシナリオ向けの使いやすいCLI／TUIを備えます。

## プログラミング言語

### Arduino

* [nixduino](https://github.com/boredom101/nixduino) - Arduinoスケッチのビルドを支援するNixベースのツール。

### Clojure

* [clj-nix](https://github.com/jlesquembre/clj-nix) - Clojureプロジェクト向けNixヘルパー関数。

### Crystal

* [crystal2nix](https://github.com/nix-community/crystal2nix) - `shard.lock`をNix式へ変換します。

### Elixir

* [deps_nix](https://github.com/code-supply/deps_nix) - Mix依存関係をNix derivationへ変換します。

### Elm

* [elm2nix](https://github.com/cachix/elm2nix) - `elm.json`をNix式へ変換します。

### Gleam

* [nix-gleam](https://github.com/arnarg/nix-gleam) - Gleamアプリケーション向け汎用Nixビルダー。

### Haskell

* [cabal2nix](https://github.com/NixOS/cabal2nix) - CabalファイルをNixビルド式へ変換します。
* [haskell-flake](https://github.com/srid/haskell-flake) - Haskell開発向けの`flake-parts` Nixモジュール。
* [haskell.nix](https://github.com/input-output-hk/haskell.nix) - Nixpkgs向けの代替Haskell基盤。
* [nix-haskell-mode](https://github.com/matthewbauer/nix-haskell-mode) - Emacs上でHaskellを自動設定します。
* [nixkell](https://github.com/pwm/nixkell) - Nixとdirenvを使うHaskellプロジェクトテンプレート。

### Haxe
* [haxix](https://github.com/MadMcCrow/haxix) - Haxe／Heaps.ioプロジェクトをビルドするNix Flake。
* [kebab](https://github.com/bwkam/kebab) - Nix向けHaxeパッケージ。

### Julia

* [Manifest2Nix.jl](https://codeberg.org/aniva/Manifest2Nix.jl) - 事前コンパイルにより、再現可能なJuliaのビルドと実験を作成するNixライブラリ。

### Lean

* [lean4-nix](https://github.com/lenianiva/lean4-nix) - Lean 4向けNix Flakeビルドと`lake2nix`。

### Node.js

* [Napalm](https://github.com/nix-community/napalm) - 軽量npmレジストリを使い、Nixでnpmパッケージをビルドします。
* [node2nix](https://github.com/svanderburg/node2nix) - `package.json`（または`package-lock.json`）から、ファイルとして保存するNix式を生成します。
* [npmlock2nix](https://github.com/nix-community/npmlock2nix) - 主にWebプロジェクト向けに、`package-lock.json`からメモリー内でNix式を生成します。

### OCaml

* [opam2nix](https://github.com/timbertson/opam2nix) - opamパッケージからNix式を生成します。

### PHP

* [composer-plugin-nixify](https://github.com/stephank/composer-plugin-nixify) - Nixパッケージ化を支援するComposerプラグイン。
* [composer2nix](https://github.com/svanderburg/composer2nix) - ComposerパッケージをビルドするNix式を生成します。
* [composition-c4](https://github.com/fossar/composition-c4) - `composer.lock`からComposerパッケージをビルドします（IFDを使用）。
* [nix-phps](https://github.com/fossar/nix-phps) - 古く保守されていないPHPバージョンを含むFlake（CI利用を想定）。
* [nix-shell](https://github.com/loophp/nix-shell/) - PHP開発向けNix shell。

### PureScript

* [Easy PureScript Nix](https://github.com/justinwoo/easy-purescript-nix) - PureScriptなどのツールをNixで容易に使うためのプロジェクト。
* [purs-nix](https://github.com/purs-nix/purs-nix) - Nixを使うPureScriptプロジェクト管理向けのCLI・ライブラリ。プロジェクト内で使えるNix APIと、開発プロセス管理用CLIを提供します。

### Python

* [poetry2nix](https://github.com/nix-community/poetry2nix) - [Poetry](https://python-poetry.org/)の`poetry.lock`からPythonパッケージを直接ビルドします。変換工程は不要です。
* [uv2nix](https://github.com/pyproject-nix/uv2nix) - [`uv` workspaces](https://docs.astral.sh/uv/concepts/projects/workspaces/)を純粋なNix derivationへ変換します。

### Ruby

* [Bundix](https://github.com/nix-community/bundix) - Bundlerで管理するアプリケーション向けのNix式を生成します。
* [ruby-nix](https://github.com/inscapist/ruby-nix) - Nixで再現可能なRuby／Bundlerアプリ環境を生成します。

### Rust

* [cargo2nix](https://github.com/cargo2nix/cargo2nix) - 細粒度キャッシュ、開発用shell、Nix・Rust統合。
* [crane](https://github.com/ipetkov/crane) - 成果物の増分キャッシュを使ってCargoプロジェクトをビルドするNixライブラリ。
* [fenix](https://github.com/nix-community/fenix) - Nix向けRustツールチェーンとRust analyzer nightly。
* [naersk](https://github.com/nix-community/naersk) - `Cargo.lock`からRustパッケージを直接ビルドします。変換工程は不要です。
* [nix-cargo-integration](https://github.com/90-008/nix-cargo-integration) - Cargoプロジェクトを簡単かつ手軽に統合できるライブラリ。
* [rust-nix-templater](https://github.com/90-008/rust-nix-templater) - Rustプロジェクト向けNixビルド・開発ファイルを生成します。

### Scala

* [sbt-derivation](https://github.com/zaninime/sbt-derivation) - buildGoModuleに似たsbt向けmkDerivation。

### Zig

* [zig2nix](https://github.com/Cloudef/zig2nix) - Zigプロジェクトのパッケージ化、ビルド、実行用Flake。
* [zon2nix](https://github.com/nix-community/zon2nix) - `build.zig.zon`内の依存関係をNix式へ変換します。

## NixOSモジュール

* [base16.nix](https://github.com/SenchoPens/base16.nix) - [base16](https://github.com/chriskempson/base16)配色でプログラムをテーマ設定するFlake方式。mustacheテンプレートにも対応します。
* [Home Manager](https://github.com/nix-community/home-manager) - NixOSと同じようにユーザー設定を管理します。
* [impermanence](https://github.com/nix-community/impermanence) - 再起動後も保持するファイルとディレクトリを選択できます。
* [musnix](https://github.com/musnix/musnix) - NixOSでリアルタイム音声処理を行います。
* [nix-bitcoin](https://github.com/fort-nix/nix-bitcoin) - セキュリティを重視した、上位層プロトコル対応Bitcoinノード向けモジュールとパッケージ。
* [nix-darwin](https://github.com/nix-darwin/nix-darwin) - NixOSと同じようにmacOS設定を管理します。
* [nix-mineral](https://github.com/cynicsketch/nix-mineral) - NixOSを手軽かつ適切に堅牢化します。
* [nix-topology](https://github.com/oddlama/nix-topology) - NixOS設定からインフラストラクチャーとネットワークの図を直接生成します。
* [NixOS hardware](https://github.com/NixOS/nixos-hardware) - さまざまなハードウェア向けに設定を最適化するNixOSプロファイル。
* [NixOS-WSL](https://github.com/nix-community/NixOS-WSL) - Windows Subsystem for LinuxでNixOSを実行するモジュール。
* [Nixvim](https://github.com/nix-community/nixvim) - NixモジュールとNixpkgsで構築されたパッケージ済みNeovimディストリビューション。
* [nvf](https://github.com/NotAShelf/nvf) - Nix向けの移植可能でモジュール式のNeovim設定フレームワーク。
* [Self Host Blocks](https://github.com/ibizaman/selfhostblocks) - NixOSモジュールを基にし、ベストプラクティスへ注力したモジュール式サーバー管理。
* [Simple Nixos Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - NixOSモジュールで管理される完全なメールサーバー。
* [Stylix](https://github.com/nix-community/stylix) - NixOS向けのシステム全体の配色・タイポグラフィー設定。

## NixOS設定エディター

### デスクトップアプリ

* [Nix Software Center](https://github.com/snowfallorg/nix-software-center) - Nixパッケージをインストール・管理します。RustとGTKによるデスクトップアプリ。
* [NixOS Configuration Editor](https://github.com/snowfallorg/nixos-conf-editor) - NixOS設定のグラフィカルエディター。RustとGTKによるデスクトップアプリ。

### Webインターフェース

* [MyNixOS](https://mynixos.com/) - Nix Flake用グラフィカルエディター。NixOSとNix home-managerの設定・モジュールを作成・管理します。Nixファイルをインポートできないため、NixエディターというよりNixジェネレーターです。

## オーバーレイ

* [awesome-nix-hpc](https://github.com/freuk/awesome-nix-hpc) - High Performance Computingパッケージセット。
* [neovim-nightly-overlay](https://github.com/nix-community/neovim-nightly-overlay) - 毎日更新されるNeovim nightlyパッケージ。
* [nixpkgs-firefox-darwin](https://github.com/bandithedoge/nixpkgs-firefox-darwin) - 自動更新されるmacOS向けFirefoxバイナリパッケージ。
* [nixpkgs-mozilla](https://github.com/mozilla/nixpkgs-mozilla) - RustツールチェーンとFirefoxを含むMozillaのオーバーレイ。
* [nixpkgs-wayland](https://github.com/nix-community/nixpkgs-wayland) - 最新開発版のWaylandパッケージ。
* [NUR](https://github.com/nix-community/NUR/) - Nix User Repositories。すべてのオーバーレイの中心で、ユーザーリポジトリへのアクセスと属性によるパッケージのインストールを可能にします。
* [rust-overlay](https://github.com/oxalica/rust-overlay) - バイナリ配布されたRustツールチェーンの純粋で再現可能なNixオーバーレイ。
* [System Manager](https://github.com/numtide/system-manager) - Nix上に構築された、NixOS以外のLinux向けシステム設定ツール。
* [zig-overlay](https://github.com/mitchellh/zig-overlay) - Zigコンパイラーをパッケージ化するNix Flake。Zigが公式にビルドしたバイナリをミラーし、ソースからビルドしません。

## ディストリビューション

* [nixbsd](https://github.com/nixos-bsd/nixbsd) - FreeBSDカーネルを使うNixOSフォーク。
* [NixNG](https://github.com/nix-community/NixNG) - NixOSに似たGNU/Linuxディストリビューション。コンテナと軽量性への注力が主な違いです。
* [SnowflakeOS](https://snowflakeos.org/) - 初心者の使いやすさと簡単な操作を重視したNixOSベースのLinuxディストリビューション。

## コミュニティ

* [#nix:nixos.org](https://matrix.to/#/#nix:nixos.org)
* [Libera.Chatの#nixos](https://web.libera.chat/?nick=Guest?#nixos)
* [Discord - Nix/Nixos（非公式）](https://discord.com/invite/BMUCQx6)
* [Discourse](https://discourse.nixos.org/) - Nix関連の話題について支援を得たり議論したりするのに最適な場所。
* [NixCon](https://nixcon.org/) - Nix・NixOSの貢献者と利用者向けに毎年開かれるコミュニティカンファレンス。
* [Wiki（公式）](https://wiki.nixos.org/wiki/Main_Page)
* [Wiki（非公式）](https://nixos.wiki/wiki/Main_Page)
