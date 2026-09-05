---
title: "Awesome Scala Native"
description: "Scala Nativeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-tindzk-awesome-scala-native-readme-md"
---

# Awesome Scala Native

Scala Nativeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [Awesome Scala Native ](#awesome-scala-native-)
  - [目次](#contents)
  - [チュートリアルと例](#tutorials-and-examples)
  - [ビルドツール](#build-tools)
  - [関数型プログラミング](#functional-programming)
  - [ユニットテスト](#unit-tests)
  - [バインディング](#bindings)
  - [ファイル形式とパーサー](#file-formats-and-parsers)
  - [データベース](#databases)
  - [Web開発](#web-development)
  - [並行処理](#concurrency)
  - [ロギング](#logging)
  - [コンソール](#console)
  - [ロボティクス](#robotics)
  - [プログラム](#programs)
  - [インフラストラクチャ](#infrastructure)
  - [ライセンス](#licence)

## チュートリアルと例 <a id="tutorials-and-examples"></a>
* [最小限のScala Nativeプロジェクト向けGiter8テンプレート](https://github.com/scala-native/scala-native.g8) - 最小限のScala Nativeプロジェクト向け公式[Giter8](http://www.foundweekends.org/giter8/)テンプレート。
* [Hands on Scala Native](https://github.com/MasseGuillaume/hands-on-scala-native) - Ncursesを使った帯域幅モニター実装のチュートリアル。
* [Starter for Scala Native](https://github.com/GnaneshKunal/scala-native-starter) - カスタムCライブラリへリンクするScala Nativeプロジェクト。
* [Building C code using sbt-jni](https://github.com/nadavwr/scala-native-sbt-jni-example) - [sbt-jni](https://github.com/jodersky/sbt-jni)を使い、Scala NativeプロジェクトでCコードをコンパイルする例。
* [Example project with external dependencies](https://github.com/lihaoyi/scala-native-example-app) - 外部依存関係を使ってHTMLを生成し、テストスイートを実行するサンプルプロジェクト。
* [Starter for Gtk+ Projects](https://github.com/jokade/scalanative-gtk-seed.g8) - Scala Native GUIプロジェクト向け[Giter8](http://www.foundweekends.org/giter8/)テンプレート。[Gtk+](https://developer.gnome.org/gtk3/stable/index.html)を使用。
* [Modern systems programming with scala native](https://pragprog.com/titles/rwscala/modern-systems-programming-with-scala-native/) 書籍。
* [Write a simple CLI application in Scala Native](https://github.com/ItoYo16u/prettytable-native)
## ビルドツール <a id="build-tools"></a>
* [sbt](https://www.scala-sbt.org/) - Scalaの標準ビルドツール。
* [Mill](https://github.com/com-lihaoyi/mill) - [Bazel](https://www.bazel.build/)に着想を得て、単純さを追求するビルドツール。
* [Bloop](https://github.com/scalacenter/bloop) - 高速な開発ワークフロー向けのScalaビルドサーバー兼コマンドラインツール。
* [Seed](https://github.com/tindzk/seed) - Bloopベースのビルドツール。[Cargo](https://github.com/rust-lang/cargo)に着想を得て、ユーザー体験とクロスプラットフォームビルドに注力。

## 関数型プログラミング <a id="functional-programming"></a>
* [Shapeless](https://github.com/milessabin/shapeless) - ジェネリックプログラミング用ライブラリ。
* [Squants](https://github.com/typelevel/squants) - 量、単位、次元解析のためのDSL。
* [scalaz](https://github.com/scalaz/scalaz) - データ構造向けの型クラスとインスタンス。
* [nobox](https://github.com/xuwei-k/nobox) - ボックス化を伴わない不変プリミティブ配列ラッパー。
* [PPrint](https://github.com/lihaoyi/PPrint) - 値と型を見やすく出力。
* [SourceCode](https://github.com/lihaoyi/sourcecode) - Cの`__LINE__`に似たメタデータを提供するimplicit。
* [reactify](https://github.com/outr/reactify) - Scala向け関数型リアクティブプログラミングフレームワーク。
* [chimney](https://github.com/scalalandio/chimney) - 定型コード不要のデータ変換。
* [Quicklens](https://github.com/softwaremill/quicklens) - 深くネストしたcase classのフィールドを変更。
* [Cats](https://github.com/typelevel/cats) - Scalaにおける関数型プログラミングの抽象化。

## ユニットテスト <a id="unit-tests"></a>
* [µTest](https://github.com/lihaoyi/utest) - ユニットテスト用ライブラリ。
* [minitest](https://github.com/monix/minitest) - 軽量テストライブラリ。
* [scalaprops](https://github.com/scalaprops/scalaprops) - プロパティベーステスト用ライブラリ。
  * [scalaprops-shapeless](https://github.com/scalaprops/scalaprops-shapeless) - 任意のADTインスタンスを生成。
  * [scalaprops-cross-example](https://github.com/scalaprops/scalaprops-cross-example) - クロスプラットフォームの例。
* [ScalaCheck](https://github.com/typelevel/scalacheck) - Scala向けプロパティベーステスト。
* [ScalaTest](https://github.com/scalatest/scalatest) - テストライブラリ。
* [specs2](https://github.com/etorreborre/specs2) - Scala向けソフトウェア仕様。
* [Makeshift](https://github.com/nadavwr/makeshift) - ユニットテスト用ライブラリ。
* [MUnit](https://github.com/scalameta/munit) - 対応方法が明確なエラーと拡張可能なAPIを備えたScalaテストライブラリ。

## バインディング <a id="bindings"></a>
* [cmark](https://github.com/sparsetech/cmark-scala) - CommonMarkパーサーライブラリ[cmark](https://github.com/commonmark/cmark)のバインディング。
* [libuv](https://github.com/TimothyKlim/scala-native-libuv) - 非同期I/Oライブラリ[libuv](https://github.com/libuv/libuv)のバインディング。
* [SDL2 and OpenGL](https://github.com/regb/scalanative-graphics-bindings) - グラフィックスフレームワーク[SDL2](https://www.libsdl.org/)と[OpenGL](https://www.opengl.org)のバインディング。
* [Cocoa](https://github.com/jokade/scalanative-cocoa) - macOSグラフィックスフレームワーク[Cocoa](https://en.wikipedia.org/wiki/Cocoa_(API))のバインディング。
* [GNU Scientific Library](https://github.com/ruivieira/scala-gsl) - [GNU Scientific Library（GSL）](https://www.gnu.org/software/gsl)のバインディング。
* [BLAS](https://github.com/ekrich/sblas) - 線形代数ライブラリ[BLAS](http://www.netlib.org/blas/)のバインディング。
* [Gtk+](https://github.com/jokade/scalanative-gtk) - グラフィックスツールキット[GTK+](https://www.gtk.org/)のバインディング。
* [libsoup](https://github.com/jokade/scalanative-libsoup) - HTTPクライアント／サーバーライブラリ[libsoup](https://wiki.gnome.org/Projects/libsoup)のバインディング。
* [libui](https://github.com/lolgab/scalaui) - [libui](https://github.com/andlabs/libui)ベースのGUIフレームワーク。
* [GStreamer](https://github.com/jokade/scalanative-gstreamer) - マルチメディアフレームワーク[GStreamer](https://gstreamer.freedesktop.org)のバインディング。
* [Qt](https://github.com/jokade/scalanative-qt5) - [Qt](https://www.qt.io)のバインディング。
* [ncurses](https://github.com/edadma/ncurses) - [GNU Ncurses Library](https://www.gnu.org/software/ncurses/)のバインディング。
* [readline](https://github.com/edadma/readline) - [GNU Readline Library](https://www.gnu.org/software/readline/)のバインディング。
* [libsndfile](https://github.com/edadma/libsndfile) - サンプル音声処理用Cライブラリ[Libsndfile](https://tiswww.cwru.edu/php/chet/libsndfile/rltop.html)のバインディング。
* [libpng](https://github.com/edadma/libpng) - PNG読み書き用C参照ライブラリ[libpng](http://www.libpng.org/)のバインディング。
* [libcairo](https://github.com/edadma/libcairo) - 2DグラフィックスCライブラリ[Cairo](https://www.cairographics.org/)のバインディング。
* [cairo-xlib](https://github.com/edadma/cairo-xlib) - [Cairo](https://www.cairographics.org/) 2Dグラフィックスの[XLib Surfaces](https://www.cairographics.org/manual/cairo-XLib-Surfaces.html)バインディング。[XLib](https://www.x.org/releases/current/doc/libX11/libX11/libX11.html)のバインディングも含む。
* [libyaml](https://github.com/edadma/libyaml) - [LibYAML](https://pyyaml.org/wiki/LibYAML) Cライブラリのバインディング。[YAML](https://yaml.org/)を解析する。
* [iup](https://github.com/edadma/iup) - グラフィカルユーザーインターフェース構築用マルチプラットフォームツールキット[IUP](https://www.tecgraf.puc-rio.br/iup/)のバインディング。

## ファイル形式とパーサー <a id="file-formats-and-parsers"></a>
* [msgpack4z](https://github.com/msgpack4z/msgpack4z-native) - バイナリシリアライズ形式[MessagePack](https://msgpack.org/)の実装。
* [FastParse](https://github.com/com-lihaoyi/fastparse) - パーサーを定義・実行するライブラリ。
* [scalatags](https://github.com/com-lihaoyi/scalatags) - HTML／XMLの構築とレンダリング。
* [Pine](https://github.com/sparsetech/pine) - HTML／XMLの解析、操作、レンダリング。
* [scala-json](https://github.com/MediaMath/scala-json) - JSONパーサー。
* [uPickle](https://github.com/com-lihaoyi/upickle) - Scala向けのシンプル、高速、依存関係なしのJSON・バイナリ（MessagePack）シリアライズライブラリ。
* [toml-scala](https://github.com/sparsetech/toml-scala) - コーデック導出を備えた[TOML](https://github.com/toml-lang/toml)パーサー。
* [argonaut](https://github.com/argonaut-io/argonaut) - 純粋関数型JSONパーサーおよびライブラリ。
* [ScalaPB](https://github.com/scalapb/ScalaPB) - Scala向け[Protocol Buffer](https://developers.google.com/protocol-buffers/)コンパイラー。
  * [scalapb-argonaut](https://github.com/scalapb-json/scalapb-argonaut) - [Argonaut](http://argonaut.io)ベースのScalaPB向けJSON／Protocol Buffer変換器。
* [sconfig](https://github.com/ekrich/sconfig) - [HOCON](https://github.com/ekrich/sconfig/blob/master/docs/original/HOCON.md)パーサー。
* [squiggly](https://github.com/edadma/squiggly) - LiquidとHugoテンプレートに着想を得た、Scala向けクロスプラットフォーム・テンプレート言語。

## データベース <a id="databases"></a>
* [scala-native-jdbc](https://github.com/lolgab/scala-native-jdbc) - データベースアクセス層[JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity)のScala Native移植版。
* [SQLite4S](https://github.com/david-bouyssie/sqlite4s) - Javaライブラリ[Sqlite4java](https://bitbucket.org/almworks/sqlite4java)の移植版。SQLiteネイティブライブラリのバインディングを含む。
* [libpq4s](https://github.com/david-bouyssie/libpq4s) - 非同期PostgreSQL CライブラリlibpqのScalaラッパー。
* [skunk](https://github.com/typelevel/skunk) - ScalaとPostgres向けデータアクセスライブラリ。

## Web開発 <a id="web-development"></a>
* [Trail](https://github.com/sparsetech/trail) - ルーティングライブラリ。
* [sttp](https://github.com/softwaremill/sttp) - HTTPクライアントライブラリ。
* [snunit](https://github.com/lolgab/snunit) - NGINX UnitベースのScala Native HTTPサーバー。

## 並行処理 <a id="concurrency"></a>
* [scala-native-loop](https://github.com/scala-native/scala-native-loop) - Scala Native向けイベントループおよび非同期指向I/O。
* [castor](https://github.com/com-lihaoyi/castor) - Scala向け軽量・型付きActorライブラリ。

## ロギング <a id="logging"></a>
* [scribe](https://github.com/outr/scribe) - 高速でシンプルなロギングライブラリ。
* [slogging](https://github.com/jokade/slogging) - マクロベースで[Typesafe-logging](https://github.com/lightbend/scala-logging)および[SLF4J](https://www.slf4j.org/)互換のロギングライブラリ。

## コンソール <a id="console"></a>
* [fansi](https://github.com/com-lihaoyi/fansi) - [ANSIカラー文字列](https://en.wikipedia.org/wiki/ANSI_escape_code)を作成するライブラリ。
* [scopt](https://github.com/scopt/scopt) - コマンドライン引数パーサー。
* [scala-optparse-applicative](https://github.com/xuwei-k/optparse-applicative) - HaskellのCLI引数解析ライブラリ[optparse-applicative](https://hackage.haskell.org/package/optparse-applicative)の移植版。
* [scallop](https://github.com/scallop/scallop) - シンプルなScala CLI解析ライブラリ。
* [mainargs](https://github.com/com-lihaoyi/mainargs) - Scalaでコマンドライン引数を解析する小型・依存関係なしのライブラリ。
* [decline](https://github.com/bkirwi/decline) - Scala向けの合成可能なコマンドラインパーサー。

## ロボティクス <a id="robotics"></a>
* [Potassium](https://github.com/Team846/potassium) - ロボットソフトウェアを記述するフレームワーク。
* [WPILib](https://github.com/Team846/scala-native-wpilib) - [FIRST Robotics WPILibライブラリ](http://first.wpi.edu/FRC/roborio/release/docs/java/)の再実装。

## プログラム <a id="programs"></a>
* [sglgears](https://github.com/Milyardo/sglgears) - GLの[gears.c](https://github.com/JoakimSoderberg/mesademos/blob/master/src/xdemos/glxgears.c)の移植版。
* [k8s-cli](https://github.com/fsat/k8s-cli) - [Kubernetes](https://kubernetes.io/)リソースを生成するCLIツール。[Akka](https://akka.io/)、[Play Framework](https://www.playframework.com/)、[Lagom](https://www.lagomframework.com/)ベースのアプリケーションに対応。
* [Coursier](https://github.com/coursier/coursier) - Coursierの[`bootstrap`コマンド](https://get-coursier.io/docs/cli-native-bootstrap)でネイティブランチャーを生成。
* [fractals](https://github.com/Rusty-Bike/fractals) - 基本的なアニメーションに対応する自己相似フラクタル生成器。
## インフラストラクチャ <a id="infrastructure"></a>
* [Seed Docker image](https://hub.docker.com/r/tindzk/seed/tags) - [Seed](https://github.com/tindzk/seed)によるクロスプラットフォームビルド向けDockerイメージ。
* [scala-native-sbt-docker](https://github.com/ScalaWilliam/scala-native-sbt-docker) - Scala Nativeとsbt向けDockerイメージ。

## ライセンス <a id="licence"></a>
<a rel="licence" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg" /></a><br />本作品は<a rel="licence" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International Licence</a>の下でライセンスされています。
