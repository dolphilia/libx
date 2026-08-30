---
title: "passy/awesome-recursion-schemes"
description: "passy/awesome-recursion-schemes の正規スナップショット"
licenseSource: "github-passy-awesome-recursion-schemes-readme-md"
---

# Awesome Recursion Schemes [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> Recursion Scheme の学習と利用に役立つリソースを集めたリストです。

Recursion Scheme は、入れ子になったデータ構造の走査と再帰を自動化する、シンプルで合成可能な Combinator です。


## 目次

- [入門](#introductions)
- [記事](#articles)
- [論文](#papers)
- [発表](#presentations)
- [早見表](#cheat-sheets)
- [Podcast](#podcasts)
- [実装](#implementations)


## 入門

- [Awesome Recursion Schemes](https://github.com/passy/awesome-recursion-schemes) - Recursion Scheme の学習と利用に役立つリソース集です。
- [実践 Recursion Schemes](https://jtobin.io/practical-recursion-schemes) -
  Pattern Functor、Fixpoint、Anamorphism、Catamorphism、Paramorphism、
  Hylomorphism を、前提知識をほとんど必要とせず紹介します。
- [Recursion Scheme 入門](http://blog.sumtypeofway.com/an-introduction-to-recursion-schemes/) -
  Recursion Scheme をゼロから発見し、Edward Kmett のライブラリの
  小さなサブセットを実装する3部作です。
- [Algebra を理解する](https://www.schoolofhaskell.com/user/bartosz/understanding-algebras) -
  Bartosz Milewski が F-Algebra を解説し、Catamorphism の文脈で
  使用する方法を示します。
- [JavaScript と Flow の Recursion Scheme](https://medium.com/@JosephJnk/recursion-schemes-in-javascript-and-flow-with-static-land-recursision-schemes-97cf10599fb7) -
  関数型プログラミングの経験が少ない開発者向けに、JavaScript の
  Recursion Scheme と関連概念を紹介するシリーズです。

## 記事

- [Recursion Schemes：フィールドガイド（Redux）](http://comonad.com/reader/2009/recursion-schemes/) -
  コード例を添えたさまざまな Recursion Scheme の一覧です。
- [Catamorphism](https://wiki.haskell.org/Catamorphisms) - Haskell Wiki の定義です。
- [Catamorphism](https://www.schoolofhaskell.com/user/edwardk/recursion-schemes/catamorphisms) -
  Edward Kmett による School of Haskell のコード付き簡易定義です。
- [正方形を回転する](https://jtobin.io/rotating-squares) - Jared Tobin が Hylomorphism で Quadtree を回転します。
- [Recursion Schemes 第5部：こんにちは、Hylomorphism](http://blog.sumtypeofway.com/recursion-schemes-part-v/)
- [Promorphism、その前後](https://jtobin.io/promorphisms-pre-post) - Jared Tobin による Prepromorphism と Postpromorphism の実例です。
- [時間旅行する Recursion Scheme](https://jtobin.io/time-traveling-recursion) - Jared Tobin が例を通じて Histo と Futu を探ります。
- [Recursion Schemes 第4部：時間が肝心](http://blog.sumtypeofway.com/recursion-schemes-part-iv-time-is-of-the-essence/) - Histomorphism と Futumorphism に関する実践的な記事です。
- [早見表](https://github.com/sellout/recursion-scheme-talk/blob/master/cheat%20sheet.pdf) - さまざまな Recursion Scheme とその双対の地図です。
- [Visitor Pattern を修正する](http://logji.blogspot.co.uk/2012/02/correcting-visitor-pattern.html) - Visitor Pattern が Catamorphism で使う F-Algebra を実装することを Java で示します。
- [Scala の Recursion Scheme](https://free.cofree.io/2017/11/13/recursion/) - Fixpoint Combinator、Anamorphism、Catamorphism、Hylomorphism、Paramorphism、Apomorphism、Histomorphism、Dynamorphism、Futumorphism を紹介します。
- [Fold の中身：recursion-schemes の基本 Catamorphism](https://duplode.github.io/posts/whats-in-a-fold.html) - Fold の一般化として Catamorphism を紹介します。

### 実世界の Hylomorphism

Hylomorphism を適用して小さな実用問題を解く、Bartosz Milewski の記事です。

- [実世界で Hylomorphism を追跡する](https://bartoszmilewski.com/2017/12/29/stalking-a-hylomorphism-in-the-wild/) - Advent of Code 2017、Domino 課題
- [Hylomorphism の解禁](https://bartoszmilewski.com/2018/12/20/open-season-on-hylomorphisms/) - Advent of Code 2018、文字列比較課題

## 論文

- [Banana、Lens、Envelope、Barbed Wire による関数型プログラミング、1991、Meijer ほか](http://maartenfokkinga.github.io/utwente/mmf91m.pdf) -
  この分野の大部分の基礎になった原論文です。
- [ソートの双対性、2013、Hinze ほか](http://www.cs.ox.ac.uk/ralf.hinze/publications/Sorting.pdf) -
  多くの基本的なソートアルゴリズムが対として存在し、その対が
  Fold と Unfold の双対性から自然に生じることを示します。
- [Bialgebra と分配法則によるソート、2012、Hinze ほか](http://www.cs.ox.ac.uk/people/daniel.james/sorting/sorting.pdf) -
  Paramorphism と Apomorphism を使ってソートアルゴリズムを
  より効率的に実装する方法を示します。
- [ボイラープレートを捨てる：ジェネリックプログラミングの実践的設計パターン、2003、SPJ ほか](http://research.microsoft.com/en-us/um/people/simonpj/Papers/hmap/hmap.ps) -
  豊かな相互再帰データ型から構築されたデータ構造を走査するプログラムを
  記述するための設計パターンです。

## 発表

- [Tim Philip Williams のスライド集](http://www.timphilipwilliams.com/slides.html) -
  「Recursion Schemes by Example」と「Exotic Tools for Exotic Trades」は、
  多くの Recursion Scheme の簡潔な定義と実例を提供します。
- [構造化 Recursion Scheme を統一する](https://www.youtube.com/watch?v=9EGYSb9vov8) -
  Ralf Hinze、Nicolas Wu、Jeremy Gibbons による12分間の発表です。
- [Recursion Schemes](https://www.youtube.com/watch?v=Zw9KeP3OzpU) -
  London Haskell Meetup で Tim Williams が発表しました。
- [F-Algebra、または心配をやめて型システムを愛するようになった方法](https://www.youtube.com/watch?v=PK4SOaAGVfg) -
  NYC Haskell User's Group で Anthony Burzillo が発表しました。
- [Recursion Scheme のやさしい入門](https://www.youtube.com/watch?v=i5A2Amfcir8) -
  Lambdaconf 2016 で Jean Remi Desjardins が発表しました。
- [recursion-scheme-talk](https://github.com/sellout/recursion-scheme-talk) - Recursion Scheme に関するスライド集です。
- [Bracer：Coproduct と Recursion Scheme で実世界の言語を変換する](https://www.youtube.com/watch?v=5Kr7IykGMzU) - Patrick Thomson による、Coproduct と Recursion Scheme でプログラムを構造化する高度な講演です。
- [Recursion：関数型プログラミングが底に達する場所](https://www.youtube.com/watch?v=24UoRaoKLjM) - Greg Pfeil による、Haskell と Scala の再帰的 Fixpoint データ構造と Recursion Scheme の入門です。
- [Algebra によるプログラミング](https://www.youtube.com/watch?v=-98fR9VmLbQ) - Bartosz Milewski の記事を講演化し、LambdaCon で発表したものです。
- [Banana の皮をむく：第一原理からの Recursion Scheme](https://www.youtube.com/watch?v=XZ9nPZbaYfE&t=3s) - Zainab Ali が LambdaWorld で発表した入門講演です。

## 早見表

- [Morphisms のヒッチハイクガイド](https://ipfs.io/ipfs/QmTppu1VDAQWsdiyVSZX6qb8PErdpwzNP2oKfEhcgaBvWR/guide-to-morphisms.pdf) - 印刷可能な PDF を含む、さまざまな Morphism の概要です。

## Podcast

- [Magic Read Along](http://www.magicreadalong.com/) - Recursion Scheme が頻繁に登場する
  Category Theory の気軽な議論です。Histomorphism と Futumorphism を扱う[第
  33回](http://www.magicreadalong.com/episode/33)も含みます。
- [Scala Love](https://scala.love/) - Scala に関する Podcast で、
  [第2回](https://scala.love/happy-valentin/)に Recursion Scheme が登場します。
- [The Haskell Cast](https://www.haskellcast.com/) -
  [John Wiegley が出演する第13回](https://www.haskellcast.com/episode/013-john-wiegley-on-categories-and-compilers)に Recursion Scheme が登場します。

## 実装

- [recursion-schemes](https://github.com/ekmett/recursion-schemes/)：
  Haskell 向け - Edward Kmett による標準的な実装です。
- [Matryoshka](https://github.com/slamdata/matryoshka)：Scalaz を使う Scala 向け -
  Fixpoint データ構造の一般化された Fold、Unfold、Traversal です。
- [andyscott/droste](https://github.com/andyscott/droste)：Cats を使う Scala 向け -
  Fixpoint データ構造の一般化された Fold、Unfold、Traversal です。
- [recursion\_schemes](https://github.com/vmchale/recursion_schemes/)：
  Idris 向け。Edward Kmett の Haskell ライブラリを基にしています。
- [purescript-matryoshka](https://github.com/slamdata/purescript-matryoshka)：PureScript 向け -
  開発中の Matryoshka 移植版です。
- [recursion](https://github.com/vmchale/recursion)：ATS 向け - ATS による
  Recursion Scheme の実演です。
- [dada](https://github.com/sellout/dada)：Dhall 向け - Dhall の Recursion
  Scheme ライブラリです。
- [static-land-recursion-schemes](https://github.com/JosephJNK/static-land-recursion-schemes)：JavaScript／Flow 向け -
  [flow-static-land](https://github.com/gcanti/flow-static-land) のスタイルで記述されたデータ構造用 Scheme です。
- [Katalyst](https://github.com/aedans/Katalyst)：Kotlin 向け - 軽量な高 Kind 多相を使い、Matryoshka を再構想したものです。

## ライセンス

このコンテンツは [CC0](https://creativecommons.org/publicdomain/zero/1.0/) の下で
提供されています。
