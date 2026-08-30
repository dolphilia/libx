---
title: "eleventigers/awesome-rxjava"
description: "eleventigers/awesome-rxjava の正規スナップショット"
licenseSource: "github-eleventigers-awesome-rxjava-readme-md"
---

# Awesome RxJava [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="http://reactivex.io/assets/Rx_Logo_S.png" align="right" width="100">](http://reactivex.io/)

> [RxJava](https://github.com/ReactiveX/RxJava) を使う際に役立つリソース

*[awesome](https://github.com/sindresorhus/awesome) リストに着想を得ています。*

## バインディング

* [RxAndroid](https://github.com/ReactiveX/RxAndroid) - Android 固有の RxJava バインディング。
* [RxBinding](https://github.com/JakeWharton/RxBinding) - プラットフォームとサポートライブラリの Android UI ウィジェット向け RxJava バインディング API。
* [rx-preferences](https://github.com/f2prateek/rx-preferences) - Android 向けのリアクティブな `SharedPreferences`。
* [RxPermissions](https://github.com/tbruyelle/RxPermissions) - RxJava を利用する Android M の実行時権限管理。
* [SQLBrite](https://github.com/square/sqlbrite) - SQLiteOpenHelper と ContentResolver の軽量ラッパー。クエリへリアクティブストリームの意味論を導入します。
* [Android-ReactiveLocation](https://github.com/mcharmas/Android-ReactiveLocation) - Google Play Service API を優れた RxJava Observable でラップし、定型コードを最小化する小型ライブラリ。
* [ReactiveNetwork](https://github.com/pwittchen/ReactiveNetwork) - RxJava Observable でネットワーク接続状態と Wi-Fi 信号強度の変化を監視する Android ライブラリ。
* [ReactiveSensors](https://github.com/pwittchen/ReactiveSensors) - RxJava Observable でハードウェアセンサーを監視する Android ライブラリ。
* [RxPalette](https://github.com/hzsweers/RxPalette) - Android の Palette ライブラリ向け RxJava バインディング。
* [rxjava-jdbc](https://github.com/davidmoten/rxjava-jdbc) - JDBC と RxJava Observable を使い、データベース呼び出しを効率的に実行・関数合成。
* [rxjava-file](https://github.com/davidmoten/rxjava-file) - NIO イベントを含むファイル向け RxJava Observable。
* [RxTuples](https://github.com/pakoito/RxTuples) - RxJava で使うシンプルなタプル。
* [RxAnimationBinding](https://github.com/blipinsk/RxAnimationBinding) - Android アニメーション向け RxJava バインディング API。

## ユーティリティ
* [RxJavaAsyncUtil](https://github.com/ReactiveX/RxJavaAsyncUtil) - RxJava 向け非同期ユーティリティ。
* [RxJavaJoins](https://github.com/ReactiveX/RxJavaJoins) - RxJava 向け Join 演算子。
* [RxJavaMath](https://github.com/ReactiveX/RxJavaMath) - RxJava 向け数学演算子。
* [RxJavaString](https://github.com/ReactiveX/RxJavaString) -
RxJava 向け文字列・バイト演算子。
* [RxJavaComputationExpressions](https://github.com/ReactiveX/RxJavaComputationExpressions) - RxJava 向け計算式。
* [rxjava-extras](https://github.com/davidmoten/rxjava-extras) - RxJava で使うユーティリティ。
* [RxActions](https://github.com/pakoito/RxActions) - RxJava で使うシンプルな ActionN 合成。
* [RxRelay](https://github.com/JakeWharton/RxRelay) - Observable と Action1 の両方として機能する RxJava 型。
* [Frodo](https://github.com/android10/frodo) - RxJava の Observable と Subscriber をログに記録する Android ライブラリ。
* [RxPartialApplication](https://github.com/pakoito/RxPartialApplication) - RxJava の FuncN と ActionN 向けのシンプルな部分適用。
* [RxCurrying](https://github.com/pakoito/RxCurrying) - RxJava の FuncN と ActionN 向けのシンプルなカリー化。
* [RxEither](https://github.com/eleventigers/rxeither) - RxJava 向け Either 型。
* [RxReplayingShare](https://github.com/JakeWharton/RxReplayingShare) - replay(1)、publish()、refCount() 演算子を組み合わせる RxJava Transformer。
* [RxFunctions](https://github.com/pakoito/RxFunctions) - RxJava で使う高度な関数合成。
* [rxlint](https://bitbucket.org/littlerobots/rxlint) - RxJava コード向けの Android lint ルール。
* [RxComprehensions](https://github.com/pakoito/RxComprehensions) - 連鎖した flatMap、concatMap、switchMap を抽象化して RxJava の定型コードを削減。

## テスト
* [assertj-rx](https://github.com/ribot/assertj-rx) - RxJava Observable 向け AssertJ アサーション。
* [rxpresso](https://github.com/novoda/rxpresso) - RxJava を使う Android アプリケーション向けの簡単な Espresso UI テスト。

## ガイド

* [RxJava-Android-Samples](https://github.com/kaushikgopal/RxJava-Android-Samples) - サンプルを通じて Android 向け RxJava を学習。
* [Intro-To-RxJava](https://github.com/Froussios/Intro-To-RxJava) - RxJava の包括的なチュートリアル。

## 記事

* [Rx のグリッチは実際には問題ではない](http://staltz.com/rx-glitches-arent-actually-a-problem.html) - グリッチとは Observable が発する一時的な不整合です。André Staltz が、実際には問題でない理由を考察します。
* [RxJava の repeatWhen と retryWhen を解説](http://blog.danlew.net/2016/01/25/rxjavas-repeatwhen-and-retrywhen-explained/) - `repeatWhen` と `retryWhen` は一見すると非常に分かりにくい演算子です。Dan Lew が詳しく解説します。
* [RxJava - Subject の問題](http://tomstechnicalblog.blogspot.co.uk/2016/03/rxjava-problem-with-subjects.html) - Thomas Nield が、`Subject` は万能薬ではない理由を説明します。

## ツール

* [RxMarbles](http://rxmarbles.com/) - Rx Observable の対話型ダイアグラム。

## コミュニティ

* [Google グループ](http://groups.google.com/d/forum/rxjava)
* [Stack Overflow](http://stackoverflow.com/search?q=rx-java)
* [Twitter の `@RxJava`](http://twitter.com/RxJava)
* [Gitter の `ReactiveX/RxJava`](https://gitter.im/ReactiveX/RxJava)
* [GitHub Issues](https://github.com/ReactiveX/RxJava/issues)

## ライセンス

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、[Jokubas Dargis](http://jokubasdargis.net/) はこの作品に関するすべての著作権および関連する権利、隣接権を放棄しています。
