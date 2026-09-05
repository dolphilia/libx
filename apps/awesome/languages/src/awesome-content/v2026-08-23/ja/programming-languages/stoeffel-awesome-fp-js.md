---
title: "Awesome FP JS"
description: "FP JSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-stoeffel-awesome-fp-js-readme-md"
---

# Awesome FP JS

FP JSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

##### 目次

* [ライブラリ](#libraries)
  * [データ構造](#data-structures)
  * [代数的データ型](#algebraic-data-types)
  * [レンズ](#lenses)
* [JavaScriptへコンパイルされる関数型言語](#functional-languages-that-compile-to-javascript)
* [プログラミングツール](#programming-tools)
* [資料](#resources)
  * [書籍](#books)
  * [記事](#articles)
  * [動画](#videos)
  * [サンプルと演習](#examples-and-exercises)
* [コミュニティ](#community)
* [貢献](#contribution)

<a id="tags"></a>
##### タグ
各項目には次のタグが付く場合があります。タグの意味を満たすかどうかを示すため、先頭に「+」または「-」を付けます。「-」タグは、用途に合うライブラリを絞り込む助けになる場合にだけ記載します。たとえば、型を確認したいTypeScriptユーザーには`-TS`が役立ちますが、`-CT`は多くの場合あまり役立ちません。

* __CT__. 圏論。Haskell、Scalaなど、圏論を基礎とする関数型言語のライブラリから着想を得ているように見えるライブラリです。
* __TS__. TypeScript。TypeScriptの型定義を備えたライブラリです。

<a id="libraries"></a>
## ライブラリ

* [Ramda](https://github.com/ramda/ramda) – JavaScript向けの実用的な関数型ライブラリ。関数型プログラミングに特化し、関数パイプラインを構築しやすく、ユーザーのデータを変更しないよう設計されています。+TS
* [Ramda Adjunct](https://github.com/char0n/ramda-adjunct) ラムダのコミュニティが維持する拡張ライブラリ。
* [Ramda-extension](https://github.com/tommmyy/ramda-extension) - Ramda関数だけで構成された、ポイントフリースタイルのユーティリティ関数集。
* [Rambda](https://github.com/selfrefactor/rambda) - ラムダより10kB未満で高速な代替ライブラリ。
* [Rambdax](https://github.com/selfrefactor/rambdax) - ラムダの拡張バージョン
* [Folktale](http://folktale.origamitower.com/) – JavaScript向け関数型プログラミングの標準ライブラリ。2020年中にはTypeScript対応が予定されています。-TS
* [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) – [Lodash](https://github.com/lodash/lodash)のインスタンスをラップし、不変、自動カリー化、イテレーターファースト、データラストのメソッドを生成します。+TS
* [iterflow](https://github.com/gv-sh/iterflow) - TypeScript向けの強力なイテレータユーティリティ。統計演算、ウィンドウ処理、遅延評価をサポート。+TS
* [functional.js](https://github.com/functionaljs/functional-js) – 軽量なJavaScript関数型プログラミングライブラリ。カリー化やポイントフリー／tacitプログラミングを支援します。
* [101](https://github.com/tjmehta/101) – シンプルでモジュール化された現代的なJavaScriptユーティリティライブラリ。vanilla JavaScriptメソッドとの良好な互換性を確保。-TS
* [fnuc](https://github.com/algesten/fnuc) – CoffeeScript（およびJavaScript）向けの関数型プログラミングライブラリ。関数合成や高階関数を支援します。
* [barely-functional](https://github.com/cullophid/barely-functional) – 非常に小さい（2.7kb）関数型プログラミングライブラリ。ネイティブのES5/6操作を使用します。-TS
* [bluebird-promisell](https://github.com/zhangchiqing/bluebird-promisell) - Promise向けの実用的な関数型プログラミングライブラリ。
* [prelude.ls](http://gkz.github.io/prelude-ls/) – ハスケルのPreludeモジュールに若干基づいた、機能指向のユーティリティライブラリ。-TS
* [preludejs](https://github.com/alanrsoares/prelude-js) - JavaScript向けの本格的な関数型プログラミングライブラリ。-TS
* [1-liners](https://github.com/1-liners/1-liners) – 機能が極めてシンプルなツール。愛と注意を込めて手作りされた、シンプルな機能ユーティリティセット。-TS
* [fn-curry](https://github.com/thunklife/fn-curry) – 関数をカーリングするためのシンプルな関数。
* [curry](https://github.com/thisables/curry) – function bind構文を使って関数をカーリングする。
* [compose-function](https://github.com/stoeffel/compose-function) – 小さな関数から新しい関数を構成する。
* [functionize](https://github.com/paldepind/functionize) – 非関数型ライブラリを関数型ライブラリへ変換するための関数集。
* [lambdajs](https://github.com/loop-recur/lambdajs) – 関数型スタイルで実装された完全なECMAScript API。
* [fp-dom](https://github.com/fp-dom/) – DOMを関数型スタイルで扱います。
* [react-on-lambda](https://github.com/sultan99/react-on-lambda) - ReactにおけるJSXを関数（カーリング、合成など）で置き換える
* [trifl](https://github.com/algesten/trifl) – 単方向データフローと仮想DOMを備えた関数型ユーザーインターフェースライブラリ。
* [funcy](https://github.com/bramstein/funcy) – JavaScriptへ関数型パターンマッチングを追加する実験。_Experimental_ :triangular_flag_on_post:
* [date-fp](https://github.com/cullophid/date-fp) – JavaScriptの日付操作用の関数型ユーティリティライブラリ。すべての関数は純粋かつ自動カリー化され、対象の日付オブジェクトを変更しません。
* [js-joda](https://github.com/js-joda/js-joda) – ISO 8601カレンダーに基づく、シンプルでドメイン指向のクリーンなAPIを提供する不変の日時ライブラリ。
* [\_part\_](https://github.com/AutoSponge/_part_) – ネイティブメソッドを部分適用関数として提供することで、関数型プログラミングを促進するマイクロライブラリ
* [claire](https://github.com/robotlolita/claire) – プロパティベースのテストライブラリでコードの不変性と振る舞いを明確に指定できる
* [FPO.js](https://github.com/getify/fpo) – Kyle Simpson（getify）によるJavaScript向けの関数型ライブラリ。名前付き引数スタイルのメソッドをサポート。
* [Javascript Parser Combinator](https://github.com/d-plaindoux/parsec) – HaskellのParsecをインスピレーションとして作られたJavaScriptパーサーコンビネータ
* [fun-task](https://github.com/rpominov/fun-task) – JavaScriptで非同期コードを管理するための抽象。タスクはプロミスに似ているが、タスクは計算を表すことができる一方、プロミスは計算の結果を表すだけである。Flow型定義を同梱。
* [most](https://github.com/cujojs/most) – 超高速なリアクティブプログラミング。値とイベントのストリーム上で非同期操作を構成する際に、副作用や可変共有状態に伴う多くの危険を回避できます。
* [zen-signals](https://github.com/joaomilho/zen-signals) – ☯ 最もシンプルなシグナルライブラリ
* [funfix](https://github.com/funfix/funfix) – FunfixはJavaScript、TypeScriptおよびFlowでの関数型プログラミングに用いる型クラスとデータ型のライブラリ。+CT, +TS.
* [pico-lambda](https://github.com/trainyard/pico-lambda) - 配列や文字列などを関数型スタイルで扱う、ネイティブメソッドベースの640バイトのライブラリ。-TS.
* [pareto-js](https://github.com/concretesolutions/pareto.js/) - JavaScript向けの非常に小さく、直感的で高速な関数型ユーティリティライブラリ。-TS.
* [fpEs](https://github.com/TeaEntityLab/fpEs/) - 基本的な関数型プログラミングとパターンマッチング/サムタイプとMonadIO/RxおよびOptionalのシンプルな使用を提供する小さなライブラリ。-TS.
* [Creed](http://blog.briancavalier.com/creed/) – 高度な機能を備えた、洗練された非同期処理：コルーチン、プロミス、ES2015のイテレーター、fantasy-land。-TS.
* [TGrid](https://github.com/samchon/tgrid) - グリッドコンピューティングフレームワーク、[TSTL](https://github.com/samchon/tstl)のネットワークおよびスレッド拡張。RFC（リモート関数呼び出し）をサポート。+TS.
* [Ferrum](https://github.com/adobe/ferrum) – イテレータライブラリで、オブジェクトをイテレート可能なものとしてサポートし、遅延評価と`pipe()`を実装。JavaScriptにRustのTraits／HaskellのType Classesを実現。-TS.
* [fp-ts](https://gcanti.github.io/fp-ts/) - TypeScriptにおけるタイプ付き関数プログラミング。+CT, +TS.
* [iter-tools](https://github.com/iter-tools/iter-tools) - 同期および非同期のイテレート処理に用いる豊かなツールセット。+TS.
* [remeda](https://remedajs.com/) Ramdaに近い関数ライブラリだが、TypeScriptで記述されているため、型の扱いがより優れている。+TS.
* [futil-js](https://github.com/smartprocure/futil-js) - lodash/fpのようなライブラリの一部として考えられる関数ユーティリティのコレクションだが、何らかの理由で含まれていない。
* [rubico](https://github.com/a-synchronous/rubico) - 🏞 非同期関数構文[a]
* [rocket-pipes](https://github.com/darky/rocket-pipes) - ポワーピプ、PromiseおよびMaybeやEitherといった人気FPライブラリから導入されたADTを連鎖的に処理。+TS
* [omg-curry](https://github.com/Debdut/omg-curry) - 包括的なカーリングライブラリ。演算子カーリング、関数カーリング、デカーリング、無限カーリングを含む。
* [lfi](https://github.com/TomerAberbach/lfi) - 遅延評価と並列処理をサポートする、同期、非同期、並列イテレーションを可能にするイテレータライブラリ。
* [ts-multimethod](https://github.com/darky/ts-multimethod) - ClojureのマルチメソッドにインスパイアされたTypeScriptのマルチメソッド。+TS
* [ts-fp-di](https://github.com/darky/ts-fp-di) - Node.jsのAsyncLocalStorageに基づく、Tiny TypeScriptの関数型DI。+TS
* [effect-ts](https://github.com/Effect-TS/core) – TypeScriptにおける完全な関数効果システムと豊かな標準ライブラリ。+TS
* [qio](https://github.com/tusharmath/qio) – 型安全かつ関数型、パフォーマンスに優れ、法則的に設計されたデータ構造。Nodeおよびブラウザにおける効果を含むコードの実用的な問題を解決。+TS
* [Ditox.js](https://github.com/mnasyrov/ditox) - モジュラーなアプリケーションの構築に用いる強力な依存関係注入コンテナ。+TS
* [RxEffects](https://github.com/mnasyrov/rx-effects) - RxJSを用いたリアクティブな状態・エフェクト管理。+TS
* [fxts](https://github.com/marpple/FxTS) - 遅延評価と並列処理。+TS
* [ts-belt](https://mobily.github.io/ts-belt/) - TypeScriptにおける関数プログラミングに最適化された高速で現代的かつ実用的なユーティリティライブラリ。（remedaのようなデータ中心アプローチを採用しているが、remeda、ramda、rambda、lodash/fpよりも。） [faster](https://mobily.github.io/ts-belt/benchmarks/v3.7.0/macbook-air-2020)
* [fp-multik](https://github.com/lulldev/fp-multik) - JS/TSの軽量値マルチメソッドユーティリティ
* [true-myth](https://github.com/true-myth/true-myth) TypeScriptにおける安全かつ自然なnullおよびエラー処理のためのライブラリ。`Maybe`および`Result`型をサポートし、関数スタイルおよび伝統的なメソッド呼び出しスタイルの両方をサポート。
* [ts-pattern](https://github.com/gvergnaud/ts-pattern) - TypeScriptにおける包括的なパターンマッチングライブラリ。スマートな型推論を備えている。パターンマッチングはFP言語から導入されたコード分岐技術である。
* [hyogwa](https://github.com/ENvironmentSet/hyogwa) - 自然な 🌿 フォームがTypeScriptに適合する；**シンプルなTypeScriptコード**をそのまま書くだけでOKです。
* [Verticalize](https://github.com/laurentpayot/verticalize) - パイプ演算子に見える、非常に軽量な関数。
* [PureEval](https://github.com/PureEval/PureEval) - 強力なJavaScriptの関数型プログラミングツールセット、ユーティリティ関数と抽象データ構造を含む。
* [context-fp](https://github.com/darky/context-fp) - 極小の関数型プログラミングコンテキスト、すなわち依存性注入。+TS
* [klubok](https://github.com/darky/klubok) - テストが大量に必要になる場合に用意された、簡単にモックできるパイプ。+TS
* [fp-filters](https://github.com/Oaxoa/fp-filters) - 130以上にわたるよく使われるフィルタ関数のコレクション。関数型プログラミングスタイルで書かれており、軽量な直接インポートが可能。ESモジュールおよびCommonJSをサポート。100％ユニットテスト済み。+TS
* [tinyeffect](https://github.com/Snowflyt/tinyeffect) - 代数的効果を用いて、一貫した方法で副作用を処理するための、非常に小さなTypeScriptライブラリ。+TS

<a id="data-structures"></a>
### データ構造

用途に合ったデータ構造を使い、高性能な関数型コードを書きましょう。

* [Icepick](https://github.com/aearly/icepick) 凍結されたJavaScriptオブジェクトを永続的な不変コレクションとして扱うためのユーティリティ。
* [Immutable.js](https://github.com/facebook/immutable-js) – 不変な永続データコレクション。
* [Immer](https://github.com/mweststrate/immer) – Immerは、コピーオンウイトメカニズムに基づく不変状態を提供する、非常に小さなパッケージ。+TS
* [Mori](https://github.com/swannodette/mori) – ClojureScriptの永続データ構造とサポートAPIを、シンプルなJavaScriptで使いやすいように提供。
* [Baobab](https://github.com/Yomguithereal/baobab) – カーソルを用いた、永続的かつオプションで不変なデータツリー。
* [immutable-sequence.js](https://github.com/qiao/immutable-sequence.js) –  JavaScriptにおける不変シーケンスの高性能実装、に基づく。 [Finger Trees](https://github.com/qiao/fingertree.js)
* [Timm](http://guigrpa.github.io/timm/) – 読み込みが速く、書き込みも許容される不変性のヘルパー。
* [Lazy.js](https://github.com/dtao/lazy.js) – 遅延評価エンジンを内蔵したユーティリティライブラリ。柔軟性を保ちながら、必要最小限の処理だけを行うことを目指す。
* [DerivableJS](https://github.com/ds300/derivablejs) – JavaScriptおよびTypeScript向けの関数型反応状態。DerivableJSは、あなたの状態の各部分の関係性について、洗練された宣言的表現を可能にします。+TS
* [imlazy](https://github.com/benji6/imlazy) – ES2015のイテレーションプロトコルを用いて、遅延イテラブルを作成・操作するためのライブラリ。
* [collectable](https://github.com/frptools/collectable) – 現代のJavaScriptおよびTypeScriptアプリケーション向けの、非常に高速な不変データ構造。+TS
* [List](https://github.com/funkia/list) - 非常に高速な不変リストで、包括的な関数APIを提供。設計は[seamlessly integrate with Ramda](https://github.com/funkia/list#seamless-ramda-integration)に基づく。
* [prelude.ts](https://github.com/emmanueltouzery/prelude.ts) - 不変な永続コレクション、OptionやEitherといった関数型構造、およびコンビネータ。TypeScriptで実装されているが、JavaScriptにも対応。+CT, +TS.
* [TSTL](https://github.com/samchon/tstl) - C++ STL (Standard Template Library) は TypeScript で実装されている。関数型プログラミングのルールに従った STL コンテナ、イテレータ、アルゴリズム、ファンクタが提供されている。+TS.

<a id="algebraic-data-types"></a>
### 代数的データ型

独自の仕組みを毎回作り直す代わりに、数学の法則を活用しましょう。代数的に！

* [Fantasy Land](https://github.com/fantasyland/fantasy-land) – ライブラリではなく、ライブラリが遵守すべきモナドの法則を定義した仕様。
* [Static Land](https://github.com/rpominov/static-land) – Fantasy Land に類似した仕様だが、インスタンスメソッドではなく静的メソッドに基づいている。
* [immutable-ext](https://github.com/DrBoolean/immutable-ext) – [Immutable.js](https://github.com/facebook/immutable-js) 用の FantasyLand の拡張。
* [daggy](https://github.com/puffnfresh/daggy) – タグ付きコンストラクタを作成するためのライブラリ。
* [Sanctuary](https://github.com/plaid/sanctuary) – Sanctuary により、nullチェックをせずに安全なコードを書くことが可能になる。+CT, +TS.
* [monet.js](http://cwmyers.github.io/monet.js/) – モナドやその他の便利な関数を豊富に提供することで、関数型プログラミングを支援するライブラリ。+CT, +TS.
* [union-type](https://github.com/paldepind/union-type) – JavaScript で連合型（union types）を定義および使用するための小さなライブラリ。
* [freeky](https://github.com/DrBoolean/freeky) – Free monads のコレクション。
* [Fluture](https://github.com/Avaq/Fluture) – Future ライブラリで、制御ユーティリティが含まれており、高性能かつエラーメッセージが優れている。
* [fantasy-combinators](https://github.com/fantasyland/fantasy-combinators) – 共通のコンビネータのコレクション。
* [fantasy-birds](https://github.com/fantasyland/fantasy-birds) – Haskell パッケージ Data.Aviary.Birds のポート。すべてのコンビネータニーズに応えるためのもの。
* [crocks](https://github.com/evilsoft/crocks) – 人気のある代数データ型のコレクション。主な目的は、各型間の共通インターフェースを整備し、実行開始に必要なすべてのヘルパー関数を提供すること。-TS.
* [kudo-js](https://github.com/blitzritz/kudojs) - JavaScript で関数型プログラミングスタイルのコードを書くために、代数データ型とヘルパー関数を提供する小さなユーティリティライブラリ。
* [purify](https://github.com/gigobyte/purify) - TypeScript 用の関数型プログラミングライブラリで、ADT（代数データ型）に焦点を当てている。+CT, +TS.
* [MojiScript](https://github.com/joelnet/MojiScript)- JavaScript エンジンとの100％互換性を保つように設計された、非同期を第一に考え、意見をもつ関数型言語。
* [Pratica](https://github.com/rametta/pratica) - 実用的で生産性の高い開発者向けに、信頼性の高いコードを迅速に配布するために必要な、シンプルで小さなFPデータ型。+CT, +TS.
* [Tifi](https://github.com/mobily/tifi) - Tifi は TypeScript での関数型プログラミング用のライブラリ。`undefined` と `null` の共存問題を解決する。OCaml/Reason のオプションデータ型用のユーティリティにインスピレーションを得ている。+CT, +TS.
* [sweet-monads](https://github.com/JSMonk/sweet-monads) - 人気のあるモナド（例：`Either` および `Maybe`）と、遅延イテレータのコレクション。
* [NeverThrow](https://github.com/supermacro/neverthrow) - このパッケージは、成功（）または失敗（）を表す 型を含んでいる。 `Result` `Ok` `Err`

<a id="lenses"></a>
### レンズ

* [lenses](https://github.com/DrBoolean/lenses) – 合成可能な [kmett](https://github.com/ekmett/lens) スタイルのレンズ
* [optics](https://github.com/flunc/optics) – プロファンクター光学（レンズ、プライズム、iso）
* [ramda-lens](https://github.com/ramda/ramda-lens) – :ram: :mag_right: レンズライブラリ（ラムダベース）
* [fantasy-lenses](https://github.com/fantasyland/fantasy-lenses) – 合成可能で不変なゲッターとセッター。（プロファンクターレント WIP）
* [nanoscope](https://github.com/5outh/nanoscope) – ドットサポート付きのレンズ
* [partial.lenses](https://github.com/calmm-js/partial.lenses) – パーシャルレントはJavaScript用の包括的かつ高性能な光学ライブラリ
* [shades](https://github.com/jamesmcnamara/shades) – リズドのインスピレーションを受けたJavaScript向けレント風ライブラリ

<a id="functional-languages-that-compile-to-javascript"></a>
## JavaScriptへコンパイルされる関数型言語

* [ClojureScript](https://github.com/clojure/clojurescript) – [Clojure](http://clojure.org/)、不変な持続データ構造を持つホストLispをJavaScriptにコンパイル
* [Elm](http://elm-lang.org/) – 宣言的にウェブブラウザベースのグラフィカルユーザーインターフェースを作成するための型安全な関数型プログラミング言語。ハスケルで実装。
* [Fable](http://fable.io/) - [F#](http://fsharp.org)を読みやすいJavaScriptにコンパイル
* [PureScript](http://www.purescript.org/) – JavaScriptにコンパイルされる小さな強型プログラミング言語
* [Idris](http://www.idris-lang.org/) – 一般目的の純関数プログラミング言語（依存型を備える）
* [GHCJS](https://github.com/ghcjs/ghcjs) – [Haskell](https://www.haskell.org/)をJavaScriptにコンパイルするコンパイラ（GHCベース）
* [ElixirScript](https://github.com/bryanjos/elixirscript) – [Elixir](http://elixir-lang.org/)の一部をJavaScriptにコンパイル。拡張性と保守性を重視した動的関数型言語を構築するための言語。
* [Js\_of\_ocaml](http://ocsigen.org/js_of_ocaml/) – [OCaml](http://ocaml.org/)のバイナリコードをJavaScriptにコンパイルし、ブラウザ上でOCamlプログラムを実行可能にする
* [Reason](https://reasonml.github.io) – ReasonはOCaml、ML言語の高度な表現力を持つ方言であり、型推論と静的型チェックを備えた新しいインターフェース
* [ReScript](https://rescript-lang.org/) – （以前は [Bucklescript](https://rescript-lang.org/bucklescript-rebranding) と呼ばれていた）ReScriptは、最高品質のシンプルで読みやすく、パフォーマンスの高いJavaScriptコードにコンパイルされる型安全な言語
* [Scala.js](http://www.scala-js.org/) – [Scala](http://www.scala-lang.org/)をJavaScriptにコンパイル
* [LiveScript](http://gkz.github.io/LiveScript/) – LiveScriptはJavaScriptに直接マッピングしており、繰り返しのボイラープレートを避けた表現的なコードを書ける
* [Quack](https://github.com/quack/quack) - PHPおよびJSをターゲットとする多パラダイムプログラミング言語（段階的およびダック型）
* [ion](https://github.com/ion-lang/ion) - バズなしJS
* [RamdaScript](https://github.com/yosbelms/ramdascript) - ラムダJS上で意見をもつJavaScriptにコンパイルされるLisp
* [RacketScript](https://github.com/vishesh/racketscript) – ラケットスクリプトはJavaScriptとラケットのエコシステムを活かし、それらの間の相互運用性をシンプルでスムーズなものにすることを目指しています
* [Koka](https://www.microsoft.com/en-us/research/project/koka/) – Kokaは、JavaScriptのような構文を用いて純粋な値と副作用をもつ計算を分離する関数指向プログラミング言語です
* [TypeScript](https://www.typescriptlang.org/) - TypeScriptはJavaScriptの型付きスーパーセットであり、純粋なJavaScriptにコンパイルされます
* [Gleam](https://gleam.run) - Gleamは、ErlangおよびJavaScriptにコンパイルされる、型付き関数型言語です

<a id="programming-tools"></a>
## プログラミングツール

* [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp) - 関数型プログラミング向けのESLintルール
* [4.5](https://github.com/TylorS/4.5) – 関数型アサーションライブラリ。JavaScriptにおいて関数スタイルのAPIや実践を好む場合、このライブラリはラグレとモノイド的な関数型アサーションでその課題を解決することを目指しています
* [hm-def](https://github.com/xodio/hm-def) – JavaScriptにおける実行時型チェックをHindley-Milnerのシグネチャで実現
* [ftor](https://github.com/kongware/ftor) - パラメトリック多相と行多相、暗黙のランク2型、Scottエンコーディングによる代数的データ型をサポートする、拡張可能な実行時型チェック兼関数型デバッグツール

<a id="resources"></a>
## 資料

<a id="books"></a>
### 書籍

* [Professor Frisby’s Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide) – これは、世界で最も人気のある関数型プログラミング言語であるJavaScriptを用いて、関数型パラダイムの一般について書かれた書籍です。現実世界の例を通じて直感を構築する実用的な導入書であり、強くおすすめされます。 [Brian Lonsdorf](https://twitter.com/drboolean) (2016)
* [Functional-Light JavaScript](https://github.com/getify/functional-light-js) – この書籍は、JavaScriptに適用可能な関数型プログラミング（FP）の基本原則を探索します。しかし、この書籍が他のものと異なるのは、すべての重い用語を避けながらこれらの原則にアプローチしている点です。
* [JavaScript Allongé](https://leanpub.com/javascriptallongesix), 「Six」版。関数についての説明はできるだけ少なく、しかしそれほど少なくない。そして、強力な組み合わせ子とデコレーターへと進んでいきます。基礎となる書籍。 [Reginald Braithwaite](https://github.com/raganwald) (2016)
* [Functional Programming in JavaScript](https://www.manning.com/books/functional-programming-in-javascript) JavaScript開発者に、拡張性、モジュラリティ、再利用性、テスト性、パフォーマンスを向上させる関数型技術を教えます。具体的な例と専門用語を避けた説明を通じて、関数型プログラミングを現実の開発タスクに適用する方法を学びます。Luis Atencio (2016)
* [Eloquent JavaScript](http://eloquentjavascript.net/). JavaScriptを用いた現代的なプログラミング導入書。Marijn Haverbeke (2014)
* [Functional JavaScript](http://shop.oreilly.com/product/0636920028857.do) JavaScriptの関数型プログラミングサポートを用いて、コードが美しく、安全で、理解しやすくテストしやすいように教えます。 [Michael Fogus](https://github.com/fogus) (2013)
* [Grokking Simplicity](https://www.manning.com/books/grokking-simplicity) 関数型プログラミングを第一原理から教えます。すべてのコード例にJavaScriptを使用し、現実世界のシナリオを用います。 [Eric Normand](https://github.com/ericnormand) (2019)
* [scriptum](https://github.com/kongware/scriptum/blob/master/README.md) - シンプルな関数型プログラミングライブラリと、その基盤にあるオンラインコース

<a id="articles"></a>
### 記事

* [FP Concepts in JavaScript](https://medium.com/@collardeau/intro-to-functional-programming-concepts-in-javascript-b0650773139c) – JavaScriptにおける関数型プログラミング概念の導入。Ramdaを用いて、合成、ポイントフリースタイル、ファンクターといった概念を、最もシンプルな例を通じて教えます
* [Functional programming with JavaScript](http://stephen-young.me.uk/2013/01/20/functional-programming-with-javascript.html) – JavaScriptにおける関数型プログラミングの別の導入書。特に、関数の適用による計算、無状態、副作用の回避という3つのテーマに焦点を当てています。
* [A gentle introduction to functional JavaScript](http://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-intro/) – JavaScriptにおける関数型プログラミングを4回にわたって解説するシリーズで、関数型プログラミングがどれほど話題になっているかを理解できるようにします.
* [Functors from first principle - explained with JS](https://dev.to/snird/functors-from-first-principle-37lh) - JavaScriptを用いてファンクター（functor）の概念を説明します.
* [Why Curry Helps](https://hughfdjackson.com/javascript/why-curry-helps/) – カーリング（currying）を使って再利用可能で宣言的なコードを書く方法についての短い概説.
* [Favoring Curry](http://fr.umio.us/favoring-curry/) - Ramdaを用いたカーリングの実用的な応用について紹介します.
* [Functional Mumbo Jumbo – ADTs](http://blog.jenkster.com/2016/06/functional-mumbo-jumbo-adts.html) – 代数的データ型（Algebraic Data Types）について、初心者向けに解説します.
* [JavaScript and Type Thinking](https://medium.com/@yelouafi/javascript-and-type-thinking-735edddc388d) – JavaScriptのコードを論理的に考えるための「型の思考（_type thinking_）」について学びます。代数的データ型は、プログラムのエンティティを論理的に考えるための概念的基盤として紹介されます.
* [Lazy, composable, and modular JavaScript](https://codewords.recurse.com/issues/four/lazy-composable-and-modular-javascript) – ES6の4つの新機能——イテラブル、ジェネレーター、アロー関数、for-of——を、高階関数、関数合成、遅延評価と組み合わせ、よりクリーンでモジュール性の高いJavaScriptコードを書きます.
* [Why Ramda](http://fr.umio.us/why-ramda/) – 関数型プログラミングに慣れていない人にとっては、Ramdaはまったく役に立たないように見えますが、実際には、純関数型プログラミング言語で当たり前になっているコーディングスタイルを提供しており、関数の合成によって複雑な論理を簡単に構築できるようになります.
* [Monads in JavaScript](https://curiosity-driven.org/monads-in-javascript) – JavaScriptにおけるモナド（Monad）設計パターンについての紹介です.
* [A Monad in Practicality: First-Class Failures](https://web.archive.org/web/20241118045403/https://robotlolita.me/articles/2013/a-monad-in-practicality-first-class-failures/) – JavaScriptにおける特定のモナド構造の実用的な応用例を紹介します：シンプルな失敗ケースを `Maybe` モナドで処理し、より複雑なシナリオを `Either` モナドまたは `Validation` アプリケイティブファンクターでモデル化します.
* [Functional programming](https://glebbahmutov.com/blog/tags/functional/) – Gleb BahmutovによるJavaScriptにおける関数型プログラミングのさまざまな側面に関する多くの記事.
* [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon) – 関数型プログラミング世界の専門用語をJavaScriptで解説します.
* [Data Structures in JavaScript](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/) – JavaScriptでさまざまなデータ構造を再実装するブログ記事シリーズで、その利点と欠点をよりよく理解できます.
* [So You Want to be a Functional Programmer](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536) - JavaScriptとElmにおける関数型プログラミングの簡単でわかりやすい紹介、例を含む.
* [Functional Programming for JavaScript People](https://medium.com/@chetcorcos/functional-programming-for-javascript-people-1915d8775504) - Chet Corcosによる関数型プログラミングパターンの完全な紹介で、多くのJavaScriptの例を提供します.
* [Introduction to Immutable.js and Functional Programming Concepts](https://auth0.com/blog/intro-to-immutable-js/) - Facebookの人気ライブラリImmutable.jsにおける関数型データ構造とその用途についての概説です.
* [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) - @ericelliottによる関数型の原則と用語の簡単な紹介です.
* [Composing Software](https://medium.com/javascript-scene/the-rise-and-fall-and-rise-of-functional-programming-composable-software-c2d91b424c8c) - @ericelliottによるJavaScript ES6+からゼロから学ぶ関数型プログラミングおよび合成ソフトウェア技術に関する記事シリーズです.
* [Anonymous Recursion in JavaScript](https://dev.to/simov/anonymous-recursion-in-javascript) - JavaScriptにおける匿名再帰を実装するための短くわかりやすい記事です.
* [Functional Composition in Javascript](https://joecortopassi.com/articles/functional-composition-in-javascript/) – JavaScriptにおける関数の合成方法についての段階的な説明です。
* [Functional Programming Principles in Javascript](https://medium.freecodecamp.org/functional-programming-principles-in-javascript-1b8fc6c3563f) - 純粋関数、不変性、第一級オブジェクト、高階関数といった関数型プログラミングの概念を学ぶための実践的なコード例
* [Basic Monads in Javascript](https://dev.to/rametta/basic-monads-in-javascript-3el3) - JavaScriptにおけるMaybeとEitherの2つの簡単なモナドについての紹介
* [F# for JavaScript Devs](https://dev.to/rametta/f-for-js-devs-2b88) - F#とJavaScriptの類似点を紹介
* [A practical guide to writing more functional Javascript](https://medium.com/@nadeesha/a-practical-guide-to-writing-more-functional-javascript-db49409f71) - 命令型JavaScriptをより宣言型かつ関数型のJavaScriptに変換するためのステップバイステップガイド
* [You don't (may not) need loops ➿](https://github.com/you-dont-need/You-Dont-Need-Loops) - ループは初心者プログラマが最初に学ぶ構文の一つだが、ソフトウェア開発プロセスにおいて多くの問題を引き起こす可能性があり、多くのケースでは回避できる

<a id="videos"></a>
### 動画

* [Classroom Coding with Prof. Frisby](https://www.youtube.com/watch?v=h_tkIpwbsxY&list=PLK_hdtAJ4KqX0JOs_KMAmUNTNMRYhWEaC) – ReactとJavaScriptにおける関数型プログラミングを使って「実用的」なウェブアプリケーションを構築するシリーズ
* [Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA) – Underscore.jsは関数型プログラミングライブラリであると主張しているが、本当にそうなのでしょうか？
* [Functional programming patterns for the non-mathematician](https://www.youtube.com/watch?v=AvgwKjTPMmM) – ファンクター、アプリケイティブ、モナドの実用的な使用例について学ぶ
* [Pure JavaScript](https://vimeo.com/49384334) – Christian Johansenが、ループを離れて関数を抽象単位として採用することで、プログラミングスキルを大きく向上させる方法を紹介
* [Functional programming in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84) - Mattias Petter JohanssonによるYouTubeチャンネル「FunFunFunction」のシリーズで、JavaScriptにおける関数型プログラミングの普及について特化した内容を提供
* [Functional Programming in TypeScript](https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo) - Typescriptで関数型プログラミングを学び、Sahand Javidと共にfp-tsのようなライブラリを作成する、初心者向けのYouTubeプレイリスト
* [Anjana Vakil: Learning Functional Programming with JavaScript - JSUnconf 2016](https://www.youtube.com/watch?v=e-5obm1G_FY) - JavaScriptにおける関数型プログラミングのシンプルでわかりやすい導入
* [Functional Programming Basics In ES6](https://www.youtube.com/watch?v=FYXpOjwYzcs) - ES6を使ったJavaScript関数型プログラミングの包括的な入門
* [JavaScript Programmers Should Learn Algebraic Data Types -- May 2018 -- UtahJS Lehi](https://www.youtube.com/watch?v=B0VoyujJWIE) - Seth HouseがJavaScript開発者にADT（代数データ型）がどのように役立つかを説明

<a id="examples-and-exercises"></a>
### サンプルと演習

* [FPJS-Class](https://github.com/loop-recur/FPJS-Class) – JavaScriptを介して関数型プログラミングを学ぶ
* [functional-javascript-workshop](https://github.com/timoxley/functional-javascript-workshop) – このワークショップの目的は、短く、本質的で、慣用的なJavaScriptを使って解決可能な現実的な問題を提示することにより、JavaScriptの基本的な関数型プログラミング機能を教えることである
* [functional-frontend-architecture](https://github.com/paldepind/functional-frontend-architecture) – 関数型フロントエンドフレームワーク。Ramda + union-type-js + Flyd + Snabbdomに基づく
* [cube-composer](https://github.com/sharkdp/cube-composer) – 関数型プログラミングにインスピレーションを受けて作られたパズルゲーム。
* [FP Youtube Search](https://github.com/jaysoo/example-fp-youtube-search) – ReactJS、Redux、FP概念を用いたYouTube検索アプリ
* [Hardcore Functional Programming in JavaScript](https://frontendmasters.com/courses/functional-javascript/) – 最先端のコンピュータサイエンス研究における技術を応用して、JavaScriptで実際の問題を解決する方法を学び、関数型プログラミングをステップバイステップで体験し、モナド、ファンクター、モノイド、アプリケイティブといった抽象インターフェースを使ってWebアプリケーションの構築方法を実際に見せる（_commercial_）
* [Escape from Callback Mountain](https://github.com/justsml/escape-from-callback-mountain) - Promiseベースの関数型JavaScriptの設計とリファクタリングに関するヒント。主な利点は読みやすさ、テスト可能性、再利用可能性である。MIT.
* [Learn Rx](http://reactivex.io/learnrx/) – 関数型リアクティブプログラミングの5つの基本要素を紹介するインタラクティブな練習シリーズ： `map`、`filter`、`concatAll`、`reduce`、および`zip`関数。
* [Holdem Evaluator](https://github.com/laberin/holdem-eval) - もう一つのホールドエム評価器、ラムダの関数スタイルで

<a id="community"></a>
## コミュニティ

<a id="related-lists"></a>
### 関連リスト

* [Awesome FRP JS](https://github.com/stoeffel/awesome-frp-js) – JavaScriptにおける関数型リアクティブプログラミングの選りすぐりのリスト。
* [lucasviola/Awesome Functional Programming](https://github.com/lucasviola/awesome-functional-programming) – 関数型プログラミングの理論や学習資料に関する素晴らしいリソース。
* [xgrommx/Awesome Functional Programming](https://github.com/xgrommx/awesome-functional-programming) – 関数型プログラミングに関する多くの記事と、多くのプログラミング言語向けの関数型ライブラリの大きなリスト。
* [Functional Programming Resources In JavaScript](https://github.com/busypeoples/functional-programming-javascript)
* [tk-learning-center/Functional Programming Learning Path](https://github.com/tk-learning-center/functional-programming-learning-path) - 関数型プログラミングの学習経路。

<a id="talk"></a>
### チャット

* [Functional Programming Slack channel](https://fpslack.com/) – JavaScriptをはじめとする多くの関数型プログラミングに関するチャネルを備えたコミュニティ。


<a id="contribution"></a>
## 貢献

:star: 提案とPRを歓迎します！ :star:

最初に[コントリビューションガイドライン](https://github.com/stoeffel/awesome-fp-js/blob/f70c4c7906c1cad07bc143d899fee3f782bfcba7/contributing.md)をお読みください。

<a id="license"></a>
## ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Christoph Hermann](http://stoeffel.github.io/) は本作品に関するすべての著作権および関連する権利を放棄しています。
