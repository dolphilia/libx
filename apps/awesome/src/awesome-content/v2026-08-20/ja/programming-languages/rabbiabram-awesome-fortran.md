---
title: "rabbiabram/awesome-fortran"
description: "rabbiabram/awesome-fortran の定本スナップショット"
licenseSource: "github-rabbiabram-awesome-fortran-readme-md"
---

# Awesome Fortran [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://api.travis-ci.org/rabbiabram/awesome-fortran.svg?branch=master)](https://travis-ci.org/rabbiabram/awesome-fortran)
優れた Fortran フレームワーク、ライブラリ、ソフトウェアの厳選リスト。@Wolg による [awesome-swift](https://github.com/Wolg/awesome-swift) に着想を得ています。

- [Awesome Fortran](#awesome-fortran)
	- [関数型ライブラリ](#functional-libraries)
	- [グラフィックスライブラリ](#graphics-libraries)
	- [数学ライブラリ](#math-libs)
	- [JSON 操作](#json-manipulation)
	- [XML 操作](#xml-manipulation)
	- [日付・時刻操作](#date-and-time-manipulation)
	- [テスト](#testing)
	- [エンコード・デコード](#encoding-decoding)
  - [移植性の実現](#portability-enabling)
  - [コマンドライン解析](#command-line-parsing)
  - [コンパイル・ビルド](#compiling-and-building)
  - [プリプロセッサー](#preprocessor)
  - [フォーマット](#formatting)
  - [自動ドキュメント](#automatic-documentation)
  - [計算流体力学](#computational-fluid-dynamics)
  - [Docker](#docker)
  - [Web](#web)
- [リソース](#resources)
  - [Fortran Web サイト](#fortran-websites)
	- [Fortran 動画](#fortran-videos)
- [その他の Awesome リスト](#other-awesome-lists)
- [貢献](#contributing)

## 関数型ライブラリ
* [Functional Fortran](https://github.com/wavebitscientific/functional-fortran) - モダン Fortran 向け関数型プログラミング。


## グラフィックスライブラリ
*グラフ、グラフィックス、GUI 向けライブラリ*

* [DISLIN](https://www.mps.mpg.de/dislin/) - 高水準のグラフ・ユーザーインターフェースライブラリ。
* [f90gl](https://math.nist.gov/f90gl/) - OpenGL 向け公式 NIST Fortran 90 バインディングのパブリックドメイン実装。
* [F03GL](http://www-stone.ch.cam.ac.uk/pub/f03gl/index.xhtml) - GLU・GLUT ツールキットとともに利用する、OpenGL ライブラリ向け Fortran 2003 インターフェース。
* [gtk-fortran](https://github.com/vmagnin/gtk-fortran/wiki) - [GTK+](https://www.gtk.org/) を使い GUI を構築するクロスプラットフォームライブラリ。[Glade](https://glade.gnome.org/) RAD ツールとの組み合わせで非常に便利。
* [PGPLOT](https://www.astro.caltech.edu/~tjp/pgplot/) - クロスプラットフォームの科学グラフ作成ライブラリ。
* [VTKFortran](https://github.com/szaghi/VTKFortran) - VTK 標準に準拠するデータの読み書きを行う純粋な Fortran（2003+）ライブラリ。

## 数学ライブラリ
*計算その他の数学操作向けライブラリ。*

* [BLAS](http://www.netlib.org/blas/) - ベクトル・行列乗算など基本線形代数操作を行うライブラリ公開のためのアプリケーションプログラミングインターフェース標準。
* [CERNLIB](http://cernlib.web.cern.ch/cernlib/) - CERN 中央コンピューターで保守・提供される、汎用ライブラリ・モジュールの大規模コレクション。ソース・オブジェクトコード形式の両方を提供。
* [EISPACK](http://www.netlib.org/eispack/) - FORTRAN で書かれた、行列の固有値・固有ベクトルを数値計算するソフトウェアライブラリ。
* [FGSL](https://www.lrz.de/services/software/mathematik/gsl/fortran/index.html) - [GNU scientific library](https://www.lrz.de/services/software/mathematik/gsl/) 向けの移植可能なオブジェクトベース Fortran インターフェース。
* [IMSL](https://www.imsl.com/products/imsl-fortran-libraries) - 高性能コンピューティング向け商用数学・統計ライブラリの標準、IMSL Fortran Numerical Library。
* [Lis](https://www.ssisc.org/lis/index.en.html) - 線形系反復ソルバーのライブラリ。
* [NAG Fortran Library](https://www.nag.co.uk/content/nag-library-fortran) - 多様な用途で使うため専門家が作成し、数百の完全に文書化・テスト済みルーチンを持つ、利用可能な数学・統計アルゴリズムの最大級コレクション。
* [netCDF](https://github.com/Unidata/netcdf-fortran) - 配列指向科学データの作成、アクセス、共有をサポートする、自己記述・マシン非依存のデータ形式とソフトウェアライブラリセット。
* [OpenBLAS](https://github.com/xianyi/OpenBLAS) - 利用可能な最速級のオープンソース BLAS ライブラリ。Intel MKL とほぼ同等の速度。

## JSON 操作
*Fortran 言語で JSON データを操作するライブラリ。*

* [FSON](https://github.com/josephalevin/fson) - Fortran 95 JSON パーサー。
* [json-fortran](https://github.com/jacobwilliams/json-fortran) - Fortran 2008 JSON API。

## XML 操作
*Fortran 言語で XML データを操作するライブラリ。*

* [fox](https://github.com/andreww/fox) - Fortran XML ライブラリ。
* [xml-fortran](https://sourceforge.net/projects/xml-fortran/) - XML ファイルの読み書きのための完全 Fortran ソリューション。

## 日付・時刻操作
*Fortran 言語で日付・時刻を操作するライブラリ。*

* [datetime-fortran](https://github.com/wavebitscientific/datetime-fortran) - Python の datetime ライブラリをモデルとする Fortran 2003 の日付・時刻操作ライブラリ。

## テスト
*コードベースのテストとテストデータ生成向けライブラリ。*

* [FRUIT](https://sourceforge.net/projects/fortranxunit/) - FORTRAN 95 で書かれた FORTRAN Unit Test Framework。
* [Ftunit](http://flibs.sourceforge.net/ftnunit.html) - Arjen Markus による Fortran ユニットテストフレームワーク。
* [pFUnit](https://sourceforge.net/projects/pfunit/) - NASA・NGC TASC 開発者による MPI 拡張付き Fortran ユニットテストフレームワーク。並列コード・オブジェクト指向設計を使用。
* [Vegetables](https://gitlab.com/everythingfunctional/vegetables) - より健全なコードベースには野菜を食べよう。

## エンコード・デコード
*Fortran 言語でデータをエンコード・デコードするライブラリ。*

* [BeFoR64](https://github.com/szaghi/BeFoR64) - Fortran 初心者向け Base64 エンコード・デコードライブラリ。モダン（2003+）Fortran プロジェクト向け base64 エンコード・デコードの KISS ライブラリ。

## 移植性の実現
*コードの移植性を実現するライブラリ。*

* [PENF](https://github.com/szaghi/PENF) - コードの移植性を確保する純粋な Fortran（2003+）ライブラリ。

## コマンドライン解析
*コマンドライン解析とユーザーインターフェース構築向けライブラリ。*

* [FLAP](https://github.com/szaghi/FLAP) - Fortran 初心者向けコマンドライン引数パーサー。モダン（2003+）Fortran プロジェクト向けに優れた CLI を簡単に構築する KISS ライブラリ。
* [options.f90](https://github.com/cngilbreth/optionsf90) - モダン Fortran 向けオプション・入力処理。

## コンパイル・ビルド
*Fortran プロジェクトをコンパイル・ビルドするライブラリ。*

* [FoBiS](https://github.com/szaghi/FoBiS) - Fortran 初心者向けビルドシステム。モダン Fortran プロジェクトを自動ビルドする KISS ツール。

## プリプロセッサー
*条件付きコンパイル、コード簡素化用マクロ、追加ソースファイルの取り込み、テンプレートシステム向けライブラリ。*

* [Blockit/PyF95++](http://blockit.sourceforge.net/) - コード（または任意のテキストファイル）を入れ子ブロックへブロック解析するための、かなりシンプルな Python フレームワーク。BlockIt は Fortran 95/2003 言語向けテンプレート機能と一部言語拡張を作成するために使用済み。
* [PreForM](https://github.com/szaghi/PreForM) - Fortran 初心者向けプリプロセッサー。

## フォーマット
*Fortran ソースコードをフォーマット・スタイルチェックするツール。*

* [ffmt](https://github.com/sbryngelson/ffmt) - Fypp、Doxygen、OpenACC/OpenMP ディレクティブに対応する高速・設定可能な Fortran フォーマッター。Rust 製で pip 経由インストール可能。

## 自動ドキュメント
*ドキュメント構築用ライブラリ。*

* [FORD](https://github.com/cmacmackin/ford) - モダン Fortran プログラム向け自動ドキュメント生成器。

## 計算流体力学
*CFD 計算向けライブラリ*

* [MFC](https://github.com/MFlowCode/MFC) - OpenACC による GPU 高速化を備えるエクサスケール多相圧縮性流れソルバー。2025 Gordon Bell Prize 最終候補。
* [OFF](https://github.com/szaghi/OFF/tree/testing) - オープンソース有限体積流体力学コード。

## Docker

* [Unoficial Image](https://hub.docker.com/r/baekjoon/onlinejudge-fortran/) - @baekjoon 提供の Docker イメージ。

## Web

* [Fortran Machine](https://github.com/mapmeld/fortran-machine) - Fortran 90 で書かれた MVC Web スタック。

# リソース
Fortran 開発スキル・知識を向上する書籍、Web サイト、記事などのさまざまなリソース。

## Fortran Web サイト

* [The Fortran Company](https://www.fortran.com/) - FORTRAN プログラミング言語のホームページ。
* [Fortran Dev](https://fortrandev.wordpress.com/) - Fortran 開発ブログ。
* [Fortran WIKI](http://fortranwiki.org/fortran/show/HomePage) - Fortran プログラミング言語・科学計算のあらゆる側面を議論するオープンな場。

## Fortran 動画

* [GNU FORTRAN Lesson 1](https://www.youtube.com/watch?v=qUy8M10uZRU) - Fortran プログラミング言語に関する動画。

# その他の Awesome リスト

その他の素晴らしいリストは [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) リストで見つけられます。

# 貢献

貢献を歓迎します。リストへ新しいフレームワーク、ライブラリ、ソフトウェアを追加するには、プルリクエストを送信するか Issue を作成してください。過去 6 か月以内に更新されていない、または素晴らしくないプロジェクトは送信しないでください。
