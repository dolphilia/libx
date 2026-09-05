---
title: "Awesome JVM"
description: "JVMを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-deephacks-awesome-jvm-readme-md"
---

# Awesome JVM

JVMを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## バイトコード <a id="bytecode"></a>

*バイトコード操作・解析ツール*

* [asmtools](https://wiki.openjdk.java.net/display/CodeTools/asmtools) - Java .classファイルの生成に用いられるツールを開発するために使用される.
* [Byte Buddy](http://bytebuddy.net) - コンパイラの助けなしに、実行時においてJavaクラスを生成するコード生成ライブラリ.
* [Jitescript](https://github.com/qmx/jitescript) - BiteScriptに類似するバイトコード生成ライブラリ.

## ガベージコレクター <a id="garbage-collectors"></a>

*JVM向けガベージコレクター*

* [Azul Pauseless Garbage Collection](https://www.azul.com/files/wp_pgc_zing_v52.pdf) - Javaアプリケーションの継続的かつ中断のない動作を提供する.
* [Balanced GC](http://www.ibm.com/developerworks/websphere/techjournal/1108_sciampacone/1108_sciampacone.html) - IBM WebSphere Application Server V8におけるJava仮想マシンに搭載されたGCポリシー.
* [Epsilon GC](http://openjdk.java.net/jeps/318) - 制限された割り当て量を持つ完全にパッシブなGC実装および可能な限り低い実行時パフォーマンスオーバーヘッド.
* [G1](http://www.oracle.com/technetwork/java/javase/tech/g1-intro-jsp-135488.html) - Garbage-First Garbage Collector.
* [Shenandoah](http://openjdk.java.net/jeps/189) - Ultra-Low-Pause-Time Garbage Collector.
* [The Garbage Collection Handbook](http://gchandbook.org) - ハードウェアおよびソフトウェアの最新の進展によって生じたガベージコレクションの新たな課題を扱う書籍.
* [ZGC](http://mail.openjdk.java.net/pipermail/announce/2017-October/000237.html) - 遅延が低く、非常に大きなヒープに対応したガベージコレクタを最適化したもの.

## 負荷生成ツール <a id="load-tools"></a>

*協調欠落を避け、負荷生成と正確な測定を行うツール*

* [Gatling](http://gatling.io) - HTTPサーバーのテストに用いる、非同期かつブロッキングのないシナリオ駆動型の負荷テストツール.
* [wrk2](https://github.com/giltene/wrk2) - wrkにおける一定のスループットと正しい遅延記録のバリエーション.

## 言語 <a id="languages"></a>

*JVM上で動作する言語*
* [Ceylon](http://ceylon-lang.org/) - Red Hatが開発した、不可変性を強調した、オブジェクト指向、強型かつ静的であるプログラミング言語.
* [Clojure](http://clojure.org/) - Rich Hickeyが開発したLispの方言。動的型であり、関数型プログラミングを強調している.
* [Erjang](http://www.erjang.org) - JVMベースのErlang仮想マシン.
* [Eta](http://eta-lang.org/) - JVM上で純粋で、遅延評価であり、強型の関数型プログラミング言語.
* [Frege](https://github.com/Frege/frege) - Haskellの精神に従った純粋関数型プログラミ及言語.
* [gojava](https://github.com/sridharv/gojava) - Goパッケージ向けのJavaバインディング.
* [Golo](http://golo-lang.org/) - JVM上で実行されるプログラミング言語または言語処理系です。 `invokedynamic`
* [Groovy](http://www.groovy-lang.org/) - オプションで型付けされ、動的型である言語であり、静的型および静的コンパイル機能を備えている.
* [Java](http://www.oracle.com/technetwork/java/javase/overview/index.html) - 一般用途、並列、強型、クラスベースのオブジェクト指向言語。
* [JRuby](http://jruby.org) - Ruby言語のJVM上の実装
* [JPHP](https://github.com/jphp-group/jphp) - PHPによるJavaVMの実装
* [Jython](http://www.jython.org) - Javaプラットフォーム向けのPython
* [Kawa](http://www.gnu.org/software/kawa/) - リスプファミリーのプログラミング言語であるスケム言語への拡張
* [Kotlin](http://kotlinlang.org/) - JVM、Androidおよびブラウザ向けの静的型プログラミング言語
* [LuaJ](http://www.luaj.org/luaj/3.0/README.html) - 標準Java機能を活かした、LuaVMのJava中心実装
* [Nashorn](http://openjdk.java.net/projects/nashorn/) - Javaで構築された、ネイティブJVMを用いた軽量かつ高性能なJavaScriptランタイム
* [OCaml-Java](http://www.ocamljava.org/) - OCaml言語v4をサポート。純粋なJavaバイトコードを生成し、Javaとのシームレスな統合を実現
* [Rembulan](https://github.com/mjanicek/rembulan) - Rembulanは、純粋Javaで書かれたJVM向けLua 5.3の実装であり、最小限の依存関係を持つ
* [Renjin](http://www.renjin.org/) - 統計解析用のR言語のJVMベースインタプリタ
* [Scala](http://www.scala-lang.org/) - オブジェクト指向と関数型プログラミングの思想を統合した強力かつ静的型のプログラミング言語
* [Xtend](http://www.eclipse.org/xtend/) - Javaにコンパイルされる、柔軟で表現力の高いJavaの方言

## 機械学習 <a id="machine-learning"></a>
* [Deeplearning4j](https://deeplearning4j.org/) - オープンソース、分散型、JVM向けのディープラーニングライブラリ
* [H2O](https://www.h2o.ai/) - 高速な統計、機械学習および数学ランタイム
* [Smile](https://github.com/haifengl/smile) - 統計機械知能および学習エンジン

## メモリ・並行処理 <a id="memory-and-concurrency"></a>

*効率的なメモリ配置と並行アクセスのためのツール・データ構造*

* [Agera](https://github.com/google/agera) - GoogleによるAndroid向けの反応型プログラミング
* [Agrona](https://github.com/real-logic/Agrona) - ハイパフォーマンスアプリケーション開発においてよく必要なデータ構造とユーティリティメソッドを備えたライブラリ
* [Apache Arrow](http://arrow.apache.org/) - 列挙型メモリ内分析向けのハイパフォーマンスなクロスシステムデータレイヤー
* [bloofi](https://github.com/lemire/bloofi) - 多次元BloomフィルタのJava実装
* [Cap’n Proto](https://capnproto.org/) - 驚異的に高速なデータ交換フォーマットおよびベースドキャパシティのRPCシステム
* [caffeine](https://github.com/ben-manes/caffeine) - Java 8向けの高性能キャッシュライブラリ
* [Chronicle-Bytes](https://github.com/OpenHFT/Chronicle-Bytes) - 低レベルのメモリアクセスをラップするライブラリ
* [Chronicle-Queue](https://github.com/OpenHFT/Chronicle-Queue) - マイクロ秒メッセージングですべてをディスクに保存
* [Chronicle-Map](https://github.com/OpenHFT/Chronicle-Map) - 低遅延および/またはマルチプロセスアプリケーション向けのメモリ内キー値ストア
* [clj-ds](https://github.com/krukow/clj-ds) - Clojureのデータ構造をClojure以外での使用に適応した構造
* [colfer](https://github.com/pascaldekloe/colfer) - バイナリシリアライゼーションフォーマットとクラス生成器
* [commons-math](http://commons.apache.org/proper/commons-math) - 軽量で自立した数学および統計コンポーネントのライブラリ
* [CuckooFilter4J](https://github.com/MGunlogson/CuckooFilter4J) - 近似集合メンバークエリ用のBloomフィルタの代替
* [cyclops](https://github.com/aol/cyclops) - RxJava、Reactor、FunctionalJava、GuavaおよびJavaslangとの統合モジュール
* [Eclipse Collections](https://github.com/eclipse/eclipse-collections) - Java向けのコレクションフレームワーク
* [externalsortinginjava](https://github.com/lemire/externalsortinginjava) - 複数コアと外部メモリアルゴリズムを使って非常に大きなファイルをソート
* [failsafe](https://github.com/jhalterman/failsafe) - 軽量で依存関係のない、失敗処理を行うためのライブラリ
* [fasttuple](https://github.com/boundary/fasttuple) - オン・ヘッドおよびオフ・ヘッドメモリにおいて隣接して配置されたコレクション
* [fast-uuid](https://github.com/jchambers/fast-uuid) - UUIDを迅速かつ効率的にパースおよび書き出しできるJavaライブラリ
* [FlatBuffers](http://google.github.io/flatbuffers/) - C++、C#、Go、Java、JavaScript、PHP、Python向けの効率的なクロスプラットフォームシリアライゼーションライブラリ
* [geohash](https://github.com/davidmoten/geo) - 地理ハッシュ処理用のJavaユーティリティメソッド
* [gs-collections](https://github.com/goldmansachs/gs-collections) - ゴールドマン・サックスのコレクションフレームワーク
* [hollow](https://github.com/Netflix/hollow) - 小規模から中規模のメモリ内データセットを効果的に扱うためのJavaライブラリと包括的なツールセット
* [high-scale-lib](https://github.com/boundary/high-scale-lib) - Cliff Clickのハイスケールライブラリ
* [hppc](https://github.com/carrotsearch/hppc) - 高性能プリミティブコレクション
* [injector](https://github.com/belliottsmith/injector) - Java 用の新しい Executor です。
* [java-concurrent-hash-trie-map](https://github.com/romix/java-concurrent-hash-trie-map) - Scala collections から導入された並列 Trie ハッシュマップの Java ポートです。
* [java-hll](https://github.com/aggregateknowledge/java-hll) - HyperLogLog アルゴリズム用の Java ライブラリです。
* [JavaFastPFOR](https://github.com/lemire/JavaFastPFOR) - 整数の配列を非常に高速に圧縮および展開できるライブラリです。
* [java-string-similarity](https://github.com/tdebatty/java-string-similarity) - 文字列の類似性および距離測定、Levenshtein エディット距離やシブリンズ、Jaro-Winkler、最長共通部分列、コサイン類似性なども含みます。
* [JCTools](http://jctools.github.io/JCTools/) - JDK にまだ含まれていない並列データ構造です。
* [DSL-JSON](http://github.com/ngs-doo/dsl-json) - 高度なコンパイル時データバインディングを備えた高性能 JSON ライブラリです。
* [jsoniter](http://jsoniter.com/) - DLS-JSON のコピーとして、世界で最も速い JSON パーサーと主張しています。
* [jOOL](https://github.com/jOOQ/jOOL) - Java 8 ラムダのための便利な拡張機能です。
* [Koloboke](https://github.com/OpenHFT/Koloboke) - Java コレクションがメモリとパフォーマンスの最後のbreadcrumbまでをカバーしています。
* [LevelDB](https://github.com/dain/leveldb) - LevelDB の Java でのリライト（ポート）です。
* [lightweight_trie](https://github.com/bryanduxbury/lightweight_trie) - 非常にメモリ効率の高い Trie（ラディックスツリー）の実装です。
* [lmdbjni](https://github.com/deephacks/lmdbjni) - Cで書かれた超高速かつ超コンパクトなキー値埋め込みデータストア LMDB への Java API（HawtJNI）です。
* [lmdbjava](https://github.com/lmdbjava/lmdbjava) - Cで書かれた超高速かつ超コンパクトなキー値埋め込みデータストア LMDB への Java API（JNR）です。
* [low-gc-membuffers](https://github.com/cowtowncoder/low-gc-membuffers) - GCオーバヘッドを最小限に抑えるために、Direct ByteBuffers を使用するメモリ内円環バッファです。
* [lwjgl3](https://github.com/LWJGL/lwjgl3) - グラフィックス（OpenGL）、音声（OpenAL）、並列計算（OpenCL）アプリケーション開発に必要なネイティブAPIへのクロスプラットフォームアクセスを可能にするJavaライブラリです。
* [MapDB](http://www.mapdb.org) - オフヒープまたはディスク上にストレージをバックアップするコレクションです。
* [mph-table](https://github.com/indeedeng/mph-table) - 最小完全ハッシュテーブルは、効率的なスペース利用と高速読み取りを備えた不変のキー/値ストアです。
* [mug](https://google.github.io/mug/) - Google から生まれた、小さなゼロデプの関数ユーティリティライブラリです。
* [netty-buffers](http://netty.io/wiki/using-as-a-generic-library.html#wiki-h2-1) - jemalloc に類似したメモリバッファプールの実装です。
* [ObjectLayout](http://objectlayout.org) - レイアウト最適化されたJavaデータ構造パッケージ
* [ohc](https://github.com/snazy/ohc) - Apache Cassandra 3.0向けに開発されたJavaの大規模オフヒープキャッシュ
* [okio](https://github.com/square/okio) - CPUおよびメモリを節約するために巧妙な処理を行う現代的なJava IOライブラリ
* [onyx-java](https://github.com/onyx-platform/onyx-java) - OnyxプラットフォームのコアAPIをJavaに相当する形で再現することで、Onyxワークフローの各コンポーネントを対応
* [parquet](https://parquet.apache.org/) - Dremel論文に記載されたレコードの分解および組み立てアルゴリズムを使用するカラム型ストレージ形式
* [PauselessHashMap](https://github.com/giltene/PauselessHashMap) - java.util.HashMapと互換性のあるマップで、リサイズ時にputやgetがストールされない
* [pcollections](https://github.com/hrldcpr/pcollections) - 永続的なJavaコレクションライブラリ
* [protobuf](https://developers.google.com/protocol-buffers) - Googleのデータ交換フォーマット
* [Quasar](http://www.paralleluniverse.co/quasar/) - JVM向けの軽量スレッドとアクター
* [rtree](https://github.com/davidmoten/rtree) - Javaにおける反応性APIを備えた不変のメモリR-ツリーおよびR*-ツリーの実装
* [RTree2D](https://github.com/Sizmek/rtree2d) - RTree2Dは、平面および球面表面における最近傍および交差クエリを極めて高速に実行するためにSTR（Sort-Tile-Recursive）パッキングを用いた2次元不変R-ツリー
* [Reactive Streams](http://www.reactive-streams.org/) - 非ブロッキングバックプレスを用いたアシンコントストリーム処理の標準
* [Reactive Streams Utilities](https://github.com/lightbend/reactive-streams-utils) - Reactive Streams向けの未来の標準ユーティリティライブラリ
* [RoaringBitmap](https://github.com/RoaringBitmap/RoaringBitmap) - Javaにおけるより効率的なビットセットの圧縮
* [rollinghashjava](https://github.com/lemire/rollinghashjava) - Javaにおけるローリングハッシュ関数
* [Reactor](http://projectreactor.io/) - Java、Groovy、ClojureなどでのJVM上で反応性データアプリケーション
* [RxJava](https://github.com/ReactiveX/RxJava) - 可観測シーケンスを使用して、非同期およびイベントベースのプログラムを構成するためのライブラリ
* [SmoothieMap](https://github.com/OpenHFT/SmoothieMap) - java.util.Mapの実装で、putの最悪遅延がjava.util.HashMapよりも100倍以上小さい
* [Simple Binary Encoding](https://github.com/real-logic/simple-binary-encoding) - 高性能メッセージコーディング
* [splitmap](https://github.com/richardstartin/splitmap/) - 並列ビットマップの実装
* [DataSketches](https://datasketches.github.io/) - スタチカルなストリーミングアルゴリズムを扱うJavaソフトウェアライブラリ
* [stormpot](https://github.com/chrisvest/stormpot) - JVM用の高速オブジェクトプール
* [stream-lib](https://github.com/addthis/stream-lib) - すべてのイベントを保存できないストリームデータの要約に用いるJavaライブラリ
* [streamvbyte](https://github.com/lemire/streamvbyte) - StreamVByteコーデックを用いたCでの高速整数圧縮
* [TraneIO](http://trane.io/) - Future抽象の高パフォーマンス実装
* [transducers-java](https://github.com/cognitect-labs/transducers-java) - 入出力ソースのコンテキストに依存しない、合成可能なアルゴリズム変換
* [VarInt](https://github.com/bazelbuild/bazel/blob/master/src/main/java/com/google/devtools/build/lib/util/VarInt.java) - 依存関係なしの変動整数実装（Bazelによる）
* [vavr](http://www.vavr.io/) - Java 8以降向けの関数型ライブラリ
* [wire](https://github.com/square/wire) - AndroidおよびJava向けのシンプルで軽量なプロトコルバッファーズ
* [Zero-Allocation-Hashing](https://github.com/OpenHFT/Zero-Allocation-Hashing) - Javaで任意のバイト列をハッシュ化、プリミティブ配列、バッファ、CharSequenceなどすべてを含む

## メタプログラミング <a id="metaprogramming"></a>

*JVM向けパーサー、インタープリター、コンパイラー、ソース生成*

* [Antlr](http://www.antlr.org/) - 構造化テキストまたはバイナリファイルの読み取り、処理、実行、または変換を行うパーサー生成器
* [auto](https://github.com/google/auto) - Java向けのソースコード生成器のコレクション
* [Apache Calcite](http://calcite.apache.org/docs/) - 動的データ管理フレームワークおよびSQLパーサープラグイン
* [Checker Framework](http://types.cs.washington.edu/checker-framework/) - バグの検出またはその存在の確認を行うコンパイラプラグイン
* [compile-testing](https://github.com/google/compile-testing) - javacおよびアノテーションプロセッサ向けのテストツール
* [derive4j](https://github.com/derive4j/derive4j) - 代数データ型のコンストラクタ、パターンマッチング、モルフィズム、オプティクスおよびタイプクラス
* [error-prone](https://github.com/google/error-prone) - 一般的なJavaのミスをコンパイル時エラーとして検出
* [GHCVM](https://github.com/rahulmutt/ghcvm) - GHC HaskellをサポートするHaskellからJVMへのコンパイラ
* [Graal](http://openjdk.java.net/projects/graal/) - HotSpot仮想マシンと統合された、新しい実験的なJava用の即時コンパイラ
* [grappa](https://github.com/fge/grappa) - ParboiledのJava版。プリプロセッシングフェーズなしで文法を書く
* [immutables](http://immutables.github.io/) - シンプルで安全かつ一貫した値オブジェクトを生成する
* [javacc](https://javacc.java.net/) - Java で使用するパーサー生成器
* [javaparser](https://github.com/javaparser/javaparser) - Java 1.8 のパーサーおよび抽象構文木
* [JavaPoet](https://github.com/square/javapoet) - .java ソースファイルを生成する Java API
* [jparsec](https://github.com/jparsec/jparsec) - Haskell Parsec に似た純粋 Java によるミニパーサーの構築
* [JSweet](http://www.jsweet.org/) - Java から TypeScript/JavaScript へのトランスパイラ
* [MPS](https://www.jetbrains.com/mps/) - 拡張可能な DSL およびエディタの設計と開発
* [lombok](https://projectlombok.org/) - Java クラスに通常書かれるボイラープレートコードの量を減らす
* [parboiled](https://github.com/sirthias/parboiled) - パーサリング表現文法に基づく任意の入力テキストのパース
* [Sulong](https://github.com/graalvm/sulong) - Truffle と Graal を使って Java で書かれた LLVM IR インタプリタ
* [TeaVM](https://github.com/konsoletyper/teavm) - Java バイトコードから JavaScript への事前翻訳コンパイラ（トランスパイラ）
* [Truffle](https://github.com/graalvm/truffle) - 言語をシンプルなインタプリタとして実装するためのフレームワーク
* [Xtext](https://eclipse.org/Xtext/) - プログラミング言語および DSL の開発用フレームワーク

## ネイティブ連携 <a id="native"></a>

*Interconnecting JVM and native code* 

* [hawtjni](https://github.com/fusesource/hawtjni) - Eclipse SWT に使われる JNI 生成器を基にした JNI コード生成器
* [Java Grinder](https://github.com/mikeakohn/java_grinder) - Java バイトコードをマイクロコントローラアセンブリにコンパイル
* [j2v8](https://github.com/eclipsesource/j2v8) - Google の V8 JavaScript エンジン用の Java API
* [JavaCPP](https://github.com/bytedeco/javacpp) - JavaCPP は Java 内のネイティブ C++ への効率的なアクセスを提供
* [jnr-ffi](https://github.com/jnr/jnr-ffi) - 手動で JNI コードを書かずにネイティブライブラリをロード
* [jssembly](https://github.com/dvx/jssembly) - Java からネイティブアセンブリの実行
* [NuProcess](https://github.com/brettwooldridge/NuProcess) - Java 用の低オーバーヘッドかつブロッキングなしの I/O および外部プロセスの実行実装
* [Project Panama](http://openjdk.java.net/projects/panama/) - JVMとCプログラマが使うAPIの間の接続を強化する。

## ネットワーク <a id="network"></a>

*ネットワークプログラミング、パケット取得、監視、試験、耐障害性のツール*

* [Aeron](https://github.com/real-logic/Aeron) - 効率的かつ信頼性の高いUDPユニキャスト、UDPマルチキャスト、およびIPCメッセージの転送。
* [armeria](https://github.com/line/armeria) - Java 8、Netty 4.1、HTTP/2、Thriftに基づく非同期RPC/APIクライアント・サーバーライブラリ。
* [Chronicle-Network](https://github.com/OpenHFT/Chronicle-Network) - 高パフォーマンスネットワークライブラリ。
* [comcast](https://github.com/tylertreat/comcast) - 悪質なネットワーク接続をシミュレーションする。
* [gor](https://github.com/buger/gor) - リアルタイムでのHTTPトラフィックの再現。
* [gRPC](http://www.grpc.io/) - モバイルおよびHTTP/2を最優先にした、高パフォーマンスでオープンソースの一般RPCフレームワーク。
* [jRT](https://github.com/LatencyUtils/jRT) - Javaアプリケーションがソケットベースのリクエストに対して返答時間を測定する。
* [JXIO](https://github.com/accelio/JXIO) - AccelIO（Cライブラリ）上のJava API、ハードウェアアクセラレーションに最適化された高パフォーマンス非同期信頼性メッセージおよびRPCライブラリ。
* [K3PO](https://github.com/k3po/k3po) - 任意のネットワークトラフィックおよび行動を作成し、ネットワークエンドポイントが正しく動作しているかを検証する。
* [muxy](https://github.com/mefellows/muxy) - 現実世界の分散システムの障害をシミュレーションする。
* [Netty](http://netty.io/) - 高パフォーマンスプロトコルサーバーおよびクライアント向けの非同期イベント駆動ネットワークライブラリ。
* [okhttp](https://github.com/square/okhttp) - AndroidおよびJavaアプリケーション向けのHTTP＋HTTP/2クライアント。
* [one-nio](https://github.com/odnoklassniki/one-nio) - 高パフォーマンスJavaサーバーを構築するためのライブラリ。
* [proteus-java](https://github.com/netifi-proteus/proteus-java) - RSocketに基づくProteus Javaクライアント。
* [reactive-grpc](https://github.com/salesforce/reactive-grpc) - Reactive gRPCは、Reactive StreamsプログラミングライブラリとgRPCを使用するためのライブラリセット。
* [RSocket](http://rsocket.io/) - RSocketは、TCP、WebSockets、Aeronなどのバイトストリームトランスポートで使用できるバイナリプロトコル。
* [SimianArmy](https://github.com/Netflix/SimianArmy) - アプリケーションがランダムなインスタンス障害を耐えられるようにするためのリシリエンスツール。
* [pcap4j](https://github.com/kaitoy/pcap4j) - libpcapを使用してパケットをキャプチャし、作成し、送信するためのJavaライブラリ。
* [pig](https://github.com/rafael-santiago/pig) - Linuxのパケット作成ツール。
* [tcpdump](http://www.tcpdump.org/) - ネットワークトラフィックのキャプチャに用いるパケット分析ツール
* [tcpflow](https://github.com/simsong/tcpflow) - プロトコル分析やデバッグに便利なTCP接続フローのキャプチャ
* [tcpreplay](https://github.com/appneta/tcpreplay) - Pcapの編集および再実行ツール

## Nixツール <a id="nix-tools"></a>

*Useful *nix tools when profiling the JVM and interaction with the host environment*
* [atoptool](http://www.atoptool.nl/) - システムおよびプロセス活動のログ記録による長期分析、システム過負荷を強調
* [bcc](https://github.com/iovisor/bcc) - BPFに基づくLinuxのIO分析、ネットワーク、モニタリングなどに関するツール
* [Flame Graphs](http://www.brendangregg.com/flamegraphs.html) - プロファイルされたソフトウェアの可視化により、頻度の高いコードパスを迅速かつ正確に特定
* [ioping](https://github.com/koct9i/ioping) - シンプルなディスクI/O遅延測定ツール
* [javap](http://docs.oracle.com/javase/8/docs/technotes/tools/unix/javap.html) - クラスファイルをJavaバイトコードに反映するコードに分解
* [jhat](http://docs.oracle.com/javase/8/docs/technotes/tools/unix/jhat.html) - Javaヒープ分析ツール
* [jhsdb](https://docs.oracle.com/javase/9/tools/jhsdb.htm) - クラッシュしたJVMからのコアダンプの内容を分析するポストマートデバッガを起動
* [jinfo](http://docs.oracle.com/javase/8/docs/technotes/tools/unix/jinfo.html) - 指定プロセスの設定情報を表示
* [jstack](http://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstack.html) - 指定Javaプロセスのスレッドのスタックトレースを表示
* [jstat](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html) - JVM内のGCおよびコンパイラ統計をモニタリング
* [hwloc](http://linux.die.net/man/7/hwloc) - プロセッサの構造、コア数、ハイパースレッド数およびキャッシュサイズの構成を報告
* [likwid](https://github.com/RRZE-HPC/likwid) - IntelおよびAMDプロセッサのハードウェアパフォーマンスカウンタを読み取る
* [numactl](http://linux.die.net/man/8/numactl) - プロセスまたは共有メモリに対するNUMAポリシーを制御
* [oprofile](http://oprofile.sourceforge.net/news/) - 低負荷で利用しやすいインターフェースを備えたシステム全体のハードウェアパフォーマンスモニタリング
* [perf](https://perf.wiki.kernel.org/index.php/Main_Page) - Linuxでのパフォーマンスカウンタによるプロファイリング
* [perf-tools](https://github.com/brendangregg/perf-tools) - Linux perf_events（aka perf）およびftraceに基づくパフォーマンス分析ツール
* [sysdig](http://www.sysdig.org/) - 実行中のLinuxインスタンスからシステム状態および活動をキャプチャし、保存、フィルタリング、分析
* [sysstat](http://sebastien.godard.pagesperso-orange.fr) - Linux向けパフォーマンスモニタリングツール
* [taskset/process-affinity](https://www.glennklockwood.com/hpc-howtos/process-affinity.html) - プロセスのCPU親和性を取得または設定
* [tiptop](http://tiptop.gforge.inria.fr/) - topに似ているが、サイクルあたりの命令数（IPC）も表示

## プロファイラー <a id="profilers"></a>

*最適化に役立つプロファイル・トレース情報を提供するツール*

* [allocation-instrumenter](https://github.com/google/allocation-instrumenter) - Javaアグエントでバイトコードをリライトしてメモリ割り当て場所をインストルメント化
* [aprof](https://github.com/Devexperts/aprof) - Javaメモリ割り当てプロファイラー
* [async-profiler](https://github.com/jvm-profiling-tools/async-profiler) - AsyncGetCallTrace + perf_eventsを備えたJava用サンプリングCPUプロファイラー
* [BTrace](https://github.com/jbachorik/btrace) - Javaプラットフォーム向け安全かつ動的トレースツール
* [Byteman](http://byteman.jboss.org/) - Java向けトレース、モニタリング、テストツール
* [bytestacks](https://github.com/cl4es/bytestacks) - JVMのバイトコード実行をフレームグラフに変換
* [Chronon](http://chrononsystems.com) - あなたのすべてのJavaプログラムを記録し、任意のマシン上で再実行
* [GCeasy](http://gceasy.io/) - 機械学習を用いたガベージコレクションログ分析ツール。JVMのGCログに問題を自動検出し、解決策を提案
* [GCViewer](https://github.com/chewiebug/GCViewer) - GCViewerはverbose GC出力の可視化を行うツール
* [grav](https://github.com/epickrram/grav) - プロセス実行の可視化を支援するツールのコレクション
* [hawkshaw](https://github.com/jClarity/hawkshaw) - メモリやJVM問題の特定と、予測可能なVM動作の生成に役立つツール
* [HdrHistogram](http://hdrhistogram.github.io/HdrHistogram/) - サンプルデータ値の記録と分析をサポートするヒストグラム
* [hdrhistogram-metrics-reservoir](https://bitbucket.org/marshallpierce/hdrhistogram-metrics-reservoir) - HdrHistogramに基づくメトリクスリザーブの実装
* [HdrLogProcessing](https://github.com/nitsanw/HdrLogProcessing) - HDRヒストグラムログの操作用ユーティリティ
* [heapster](https://github.com/mariusae/heapster) - JVM向けプロダクション用ヒーププロファイリング
* [honest-profiler](https://github.com/RichardWarburton/honest-profiler) - 安全ポイントサンプリングバイアスのないJVMプロファイラー
* [jamm](https://github.com/jbellis/jamm) - 実際のオブジェクトメモリ使用量（JVMオーバヘッドを含む）を測定
* [Java Flight Recorder (JFR)](http://www.oracle.com/technetwork/java/javaseproducts/mission-control/java-mission-control-1998576.html) - Javaアプリケーションの実行中に収集する診断およびプロファイリングデータをほぼ性能負荷なしで取得するツール
* [java-sizeof](https://github.com/dweiss/java-sizeof) - Javaのメモリ消費量を推定するツール
* [jcstress](http://openjdk.java.net/projects/code-tools/jcstress/) - JVM、クラスライブラリ、ハードウェアにおける並列処理サポートの正確性に関する研究を支援する実験的なハーネスとテスト
* [jfr-flame-graph](https://github.com/chrishantha/jfr-flame-graph) - JFRメソッドプロファイリングサンプルをFlameGraph形式に変換するツール
* [jfr-report-tool](https://github.com/lhotari/jfr-report-tool) - Java Flight Recorderのダンプからレポートを作成するツール
* [jitwatch](https://github.com/AdoptOpenJDK/jitwatch) - Java HotSpot JITコンパイラのログを分析・可視化するツール
* [jitwatch-intellij](https://github.com/yole/jitwatch-intellij) - IntelliJ IDEA用のJITWatchプラグイン
* [jHiccup](http://www.azul.com/jhiccup/) - jHiccupは、アプリケーションの下位Javaランタイムプラットフォームに関連する遅延と停止を測定するオープンソースツール
* [jmh](http://openjdk.java.net/projects/code-tools/jmh/) - Javaおよびその他の言語で書かれたマイクロベンチマークはJVMをターゲットとしている
* [jmh-compare-gui](https://github.com/akarnokd/jmh-compare-gui) - JMH結果を比較するためのGUI
* [JOL](http://openjdk.java.net/projects/code-tools/jol/) - JVMにおける実際のオブジェクトレイアウトスキーム、フッツプリント、参照を分析するツール
* [JProfiler](https://www.ej-technologies.com/products/jprofiler/overview.html) - パフォーマンスボトルネックの解決、メモリリークの特定、スレッド問題の理解を支援するツール
* [JVMTI](https://docs.oracle.com/javase/8/docs/technotes/guides/jvmti/) - JVMで実行中のアプリケーションの状態を確認し、実行を制御するためのネイティブAPIを提供するツール
* [jvmtop](https://github.com/patric-r/jvmtop) - 機械のトップのような表示で、実行中のjvmをモニタリングする軽量コンソールアプリケーション
* [jvm-profiler](https://github.com/uber-common/jvm-profiler) - Hadoop/Spark JVMプロセスの分散方式で、さまざまなメトリクスとスタックトレースを収集するJavaアグエント
* [MAT](https://eclipse.org/mat/) - メモリリークの検出とメモリ消費量の削減を支援するJavaヒープアナライザ
* [leakcanary](https://github.com/square/leakcanary) - AndroidおよびJava向けのメモリリーク検出ライブラリ
* [metrics](http://metrics.dropwizard.io/) - 生産環境における重要なコンポーネントの動作を測定するツール
* [micrometer](https://github.com/micrometer-metrics/micrometer) - 最も人気のある監視ツール向けのアプリケーションメトリクスのファサード
* [osquery](https://osquery.io/) - osqueryは、オペレーティングシステムを高性能の関係データベースとして公開するインストルメンテーションフレームワーク
* [Overseer](http://www.peternier.com/projects/overseer/overseer.php) - Java向けの低レベルハードウェアモニタリングと管理
* [OpenTracing](http://opentracing.io/) - 分散トレース用のベンダー中立のオープンスタンダード
* [perf-map-agent](https://github.com/jrudolph/perf-map-agent) - JVMプログラムのCPU、メモリ、割当、ロック、トレース情報を収集・分析します。 `perf`
* [perfj](https://github.com/coderplay/perfj) - Linux perf による Java プログラムの使用
* [polarbear](https://github.com/Cue/polarbear) - OutOfMemoryError の発生原因を診断するツール
* [Riemann JVM Profiler](https://github.com/riemann/riemann-jvm-profiler) - Riemannサーバーに機能レベルプロファイリングのテレメトリを送信するJVMエージェント
* [statsd-jvm-profiler](https://github.com/etsy/statsd-jvm-profiler) - StatsDにプロファイリングデータを送信するJVMエージェント
* [Swiss Java Knife](https://github.com/aragozin/jvm-tools) - JVMトラブルシューティング、モニタリング、プロファイリングに必要なツールセット
* [Takipi](https://www.takipi.com/) - プロダクション環境でコードが破損するタイミングと原因を教えてくれる
* [Tracer](https://github.com/zalando/tracer) - カスタムトレースIDを管理し、分散システムを通過させる
* [YourKit](https://www.yourkit.com/) - 機能が豊富で使いやすく、オーバーヘッドが少ないプロファイラー
* [Zipkin](https://github.com/openzipkin/zipkin) - Twitterが開発した複数サービスのタイミングデータを収集する分散トレースシステム


## ランタイム管理 <a id="runtimes"></a>

*JVMランタイムプロセスを管理するツール*
* [Capsule](https://github.com/puniverse/capsule) - JVMアプリケーション向けのシンプルなパッケージングとデプロイ
* [CRaSH](http://www.crashub.org/) - Javaプラットフォームのシェル
* [Drip](https://github.com/ninjudd/drip) - パーソナライズされたJVMの起動を可能にし、持続的なJVMの負担を回避
* [HotswapAgent](https://github.com/HotswapProjects/HotswapAgent) - 実行時におけるクラスの再定義を行い、再デプロイプロセスをスキップ
* [jvmkill](https://github.com/airlift/jvmkill) - メモリ割り当てやスレッド作成が不可能になった場合にJVMを強制終了するエージェント
* [Nailgun](http://martiansoftware.com/nailgun/) - Nailgunは、コマンドラインからJavaプログラムを実行するためのクライアント、プロトコル、サーバー

## 仮想マシン <a id="virtual-machines"></a>

*JVM仕様またはその一部を実装する仮想マシン*
* [Avian](https://github.com/ReadyTalk/avian) - AOTコンパイルのオプションを備えた軽量かつ高移植性のJVM
* [Dalvik](https://source.android.com/devices/tech/dalvik/) - Androidアプリケーションおよび一部のシステムサービスで使用されるマネージドランタイム（ART）
* [DCEVM](http://dcevm.github.io) - Java HotSwap VMの改良により、実行時におけるクラスの再読み込みを無制限にサポート
* [HotSpot](http://openjdk.java.net/groups/hotspot/) - Oracle Corporationが維持・配布するHotSpot仮想マシン
* [IBM J9](http://www.ibm.com/developerworks/java/jdk/) - IBMが開発したJVM
* [Eclipse OpenJ9](https://github.com/eclipse/openj9) - Eclipse OpenJ9
* [J2ObjC](https://github.com/google/j2objc) - JavaソースコードからObjective-Cコードへの翻訳ツール。iOSネイティブアプリとAndroidネイティブアプリの間の共有コードを維持する
* [jvm.go](https://github.com/zxh0/jvm.go) - Goで書かれたJVM
* [ParparVM](https://github.com/codenameone/CodenameOne/tree/master/vm) - JVM仕様またはその一部を実装する仮想マシンです。 [Codename One](https://www.codenameone.com/)
* [MobiDevelop's RoboVM Fork](https://github.com/MobiVM/robovm) - iOS、Mac OSXおよびLinux向けのJVMバイナリコード用の事前コンパイラ
* [Zing](https://www.azul.com/products/zing/) - 大規模ヒープサイズにおいてJavaのガベージコレクションの停止を完全に除去する唯一のJVM
* [Zulu](https://www.azul.com/products/zulu/) - OpenJDKの唯一の認定マルチプラットフォームビルド：無料、100％オープンソースJava

# 資料 <a id="resources"></a>

## ドキュメント <a id="documentation"></a>

*JVM関連ドキュメント*
* [TCP Tracepoints](http://www.brendangregg.com/blog/2018-03-22/tcp-tracepoints.html) Linux bcc/BPF using tcplife by Brendan Gregg
* [Linux tracing workshop](https://github.com/goldshtn/linux-tracing-workshop) - BPFによるJVM監視、Linuxトレースツールワークショップ用の例と実践実験
* [JVM Anatomy Park](https://shipilev.net/jvm-anatomy-park/) - Aleksey Shipilёvによるミニポストシリーズ。各ポストは1つのテーマに深く掘り下げたもの。
* [Coordinated Omission problem](https://groups.google.com/forum/#!msg/mechanical-sympathy/icNZJejUHfE/BfDekfBEs_sJ) - Mechanical Sympathyに関するディスカッション
* [False sharing](http://mechanical-sympathy.blogspot.se/2011/07/false-sharing.html) - スレッドが、同じキャッシュラインを共有する独立した変数を変更する際に互いのパフォーマンスに影響を与える。Martin Thompson
* [The JVM specification](https://docs.oracle.com/javase/specs/jvms/se8/jvms8.pdf) - JVM仕様、バイトコード、メモリ、性能に関する技術文書です。
Java SE 8版のJVM仕様です。
* [The Java Memory Model](http://www.cs.umd.edu/~pugh/java/memoryModel/) - Javaメモリモデルに関する議論の出発点および情報の提供。
* [The JSR-133 Cookbook for Compiler Writers](http://gee.cs.oswego.edu/dl/jmm/cookbook.html) - JSR-1、33で指定された新しいJavaメモリモデル（JMM）を実装するための非公式ガイド
* [Garbage Collection Tuning Guide](http://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/) - HotSpot仮想マシンのガベージコレクションチューニングガイド
* [Safepoints](http://psy-lob-saw.blogspot.se/2014/03/where-is-my-safepoint.html) - 私のセーフポイントはどこにあるのか？Nitsan Wakart
* [Topics in High-Performance Messaging](https://www.informatica.com/downloads/1568_high_perf_messaging_wp/Topics-in-High-Performance-Messaging.htm) - 高性能メッセージングシステムにおける設計決定、経験、制約の説明
* [Top 10 Performance Mistakes](http://www.infoq.com/articles/top-10-performance-mistakes) - Martin Thompsonが生産環境で見たトップ10のパフォーマンス関連ミスの要約
* [The USE method](http://www.brendangregg.com/usemethod.html) - Utilization Saturation and Errors (USE)メソッドは、いかなるシステムのパフォーマンスを分析するための手法である。Brendan Gregg
* [An introduction to distributed systems](https://github.com/aphyr/distsys-class) - Kyle Kingsbury（Jepsenの著者）
* [Using JDK 9 Memory Order Modes](http://gee.cs.oswego.edu/dl/html/j9mm.html) - Javaコンカレントに詳しい専門プログラマー向けに、JDK 9で提供されたVarHandlesによるメモリオーダーモードについて。
* [CPU Utilization is Wrong](http://www.brendangregg.com/blog/2017-05-09/cpu-utilization-is-wrong.html) - CPU利用率のためのサイクルあたりのインストラクション数（IPC）を測定。Brendan Gregg。
* [Linux Load Averages: Solving the Mystery](http://www.brendangregg.com/blog/2017-08-08/linux-load-averages.html) - ブレンダン・グリッグ
* [What every programmer should know about solid-state drives](http://codecapsule.com/2014/02/12/coding-for-ssds-part-6-a-summary-what-every-programmer-should-know-about-solid-state-drives/) - Emmanuel Goossaert。
* [Quick Tips for Fast Code on the JVM](https://gist.github.com/djspiewak/464c11307cabc80171c90397d4ec34ef) - Daniel Spiewak。
## コミュニティ <a id="communities"></a>

*活発な議論の場*

* [concurrency-interest](http://altair.cs.oswego.edu/mailman/listinfo/concurrency-interest) - JSR-166のディスカッションリスト。
* [hotspot-compiler-dev](http://mail.openjdk.java.net/mailman/listinfo/hotspot-compiler-dev) - HotSpotバイトコードコンパイラの開発を扱う技術的な議論。
* [hotspot-dev](http://mail.openjdk.java.net/mailman/listinfo/hotspot-dev) - HotSpot開発メールリスト。
* [hotspot-gc-dev](http://mail.openjdk.java.net/mailman/listinfo/hotspot-gc-dev) - HotSpotガベージコレクタの開発を扱う技術的な議論。
* [mechanical-sympathy](https://groups.google.com/forum/#!forum/mechanical-sympathy) - 根本的なスタック/プラットフォームに配慮したコードの書き方と、その測定方法についてのディスカッション。
* [Performance Java User's Group](https://plus.google.com/u/0/communities/107178245817384004088/) - 専門的なJava*開発者*がシステムを次のレベルに引き上げたい場合向け。
* [Virtual Machine Meetup 2017](http://vmmeetup.github.io/2017/) - 管理言語実行に関する最新の研究および開発についてのディスカッションの場。

## メディア <a id="media"></a>

*JVM関連の動画、ポッドキャスト等*
* [FOSDEM 2018](https://fosdem.org/2018/schedule/track/free_java/) - FOSDEM 2018 フリージャバ開発ルーム。
* [JFokus 2018](https://www.youtube.com/playlist?list=PL2ekzZZrxVUkhrcMKuPMbiKoghc777plr) - GCエディション。シェナンドア、ZGC、ZING、フィバーズ、ファルコンなど。
* [G1 Garbage Collector in Java 8/9](http://nighthacking.com/g1-gc-with-kirk-pepperdine/) - Kirk Pepperdine。
* [Extreme Profiling: Digging Into Hotspots](https://youtu.be/7PkkxDaFDj8?list=PLKuh52zVrL6l6jzeSwNce77yLdfKmHAgD) - ニツァン・ワカート
* [Java vs. C Performance](http://www.infoq.com/presentations/java-vs-c-performance) - Cliff ClickによるJavaとCの性能比較講演
* [Why JNI is slow?](https://www.youtube.com/watch?v=LoyBTqkSkZk) - Cliff ClickによるJNIの性能解説
* [A Crash Course in Modern Hardware](https://www.youtube.com/watch?v=OFgxAFdxYAQ) - Cliff Clickによる現代ハードウェアの集中講義
* [Java Profiling from the Ground Up](https://www.youtube.com/watch?v=_6vJyciXkwo) - ニツァン・ワカート
* [The Illusion of Execution](https://www.youtube.com/watch?v=3g9R-RVIkOE) - ニツァン・ワカート
* [Mythbusting Modern Hardware to Gain 'Mechanical Sympathy'](https://www.youtube.com/watch?v=MC1EKLQ2Wmg) - マーティン・スミス
* [Designing for Performance](https://www.youtube.com/watch?v=fDGWWpHlzvw) - マーティン・スミス
* [How NOT to Measure Latency](https://www.youtube.com/watch?v=lJ8ydIuPFeU) - ギル・テネ
* [JVM Language Summit 2015](http://openjdk.java.net/projects/mlvm/jvmlangsummit/) - JVM言語サミット2015
* [JVM Language Summit 2016](https://www.youtube.com/playlist?list=PLX8CzqL3ArzUY6rQAQTwI_jKvqJxrRrP_) - JVM言語サミット2016
* [JVM Language Summit 2017](https://www.youtube.com/playlist?list=PLX8CzqL3ArzXJ2EGftrmz4SzS6NRr6p2n) - JVM言語サミット2017
* [Bits of advice for VM writers](https://www.youtube.com/watch?v=vzzABBxo44g) - Cliff ClickによるVM実装者向けの助言
* [Understanding Java garbage collection ...](https://www.youtube.com/watch?v=_e5hujoTkgY) - ギル・テネ
* [Faster Object Arrays](https://www.youtube.com/watch?v=bZuPTCaciLU) - ギル・テネがGOTOコンファレンスで
* [Java Memory Model Pragmatics](https://www.youtube.com/watch?v=TxqsKzxyySo) - アレクセイ・シピレフ
* [With GC Solved, What Else Makes a JVM Pause?](https://www.youtube.com/watch?v=Y39kllzX1P8) - ジョン・カスバートソン
* [JVM Mechanics](https://vimeo.com/120533011) - ダグラス・ハイワーカス
* [Give me 15 minutes and I'll change your view of Linux tracing](https://www.youtube.com/watch?v=GsMs3n8CB6g) - ブレンダン・グリッグ
* [Kernel Recipes 2017: Performance Analysis with BPF](https://www.slideshare.net/brendangregg/kernel-recipes-2017-performance-analysis-with-bpf) - ブレンダン・グリッグ
* [Shenandoah deep talk](https://shipilev.net/talks/vmm-Sep2017-shenandoah.pdf) - アレクセイ・シピレフがVirtual Machine Meetup 2017で行った、やや深めのシェナウッド講演
* [Shenandoah: The Garbage Collector That Could](https://www.youtube.com/watch?v=VCeHkcwfF9Q) - アレクセイ・シピレフ - Devoxx 2017/11
* [Analyzing and Debugging the Java HotSpot VM at the OS Level](https://www.youtube.com/watch?v=k7IX_diKCEo) - フォルカー・シモンス
* [Cliff Click podcast 2017/09/16](http://www.cliffc.org/blog/2017/09/16/programming-and-performance-intro/) - プログラミングとパフォーマンスの紹介
* [Cliff Click podcast 2017/09/16](http://www.cliffc.org/blog/2017/09/16/of-bugs-and-coding-styles/) - バグとコーディングスタイル
* [Cliff Click podcast 2017/09/18](http://www.cliffc.org/blog/2017/09/18/java-vs-cc-the-podcast/) - Java と C/C++ の違い
* [Cliff Click podcast 2017/09/21](http://www.cliffc.org/blog/2017/09/21/debugging-data-races/) - データレースのデバッグ
* [Cliff Click podcast 2017/09/24](http://www.cliffc.org/blog/2017/09/24/fast-bytecodes-for-funny-languages/) - 面白い言語向けの高速バイトコード
* [Cliff Click podcast 2017/09/28](http://www.cliffc.org/blog/2017/09/28/struct-of-arrays-vs-array-of-structs/) - 構造体の配列と配列の構造体
* [Cliff Click podcast 2017/10/04](http://www.cliffc.org/blog/2017/10/04/the-3-hardest-problems-in-programming/) - プログラミングにおける3つの難しい問題
* [Cliff Click podcast 2017/11/05](http://cliffc.org/blog/2017/11/05/modern-hardware-performance-cache-lines/) - 現代のハードウェア性能とキャッシュライン
* [Cliff Click podcast 2017/11/09](http://cliffc.org/blog/2017/11/09/queuing-in-practice/) - 実際のキューの設計
* [Which technique do programming language parsers and interpreters use?](https://www.quora.com/Which-technique-do-programming-language-parsers-and-interpreters-use/answer/Cliff-Click-1?srid=dZAx) - Cliff Clickによるパーサーとインタープリター技法の解説
* [Everything about Stack Traces and Heap Dumps](https://vimeo.com/233820012) - Andrei Pangin
* [Fast and safe production monitoring of JVM with BPF tools](http://s.sashag.net/velny17-jvm) - Sasha Goldshtein
* [The Future of the Linux Page Cache](https://www.youtube.com/watch?time_continue=1&v=xxWaa-lPR-8) - Matthew Wilcox

## 人物 <a id="people"></a>

*JVM内部の実践的で文書化されにくい知識・データを共有する人物*
* [Aleksey Shipilëv](http://shipilev.net/) - Oracle/Open JDK/Hotspot およびその他の Java 関連技術の開発
* [Andrey Breslav](https://twitter.com/abreslav) - JetBrains における Kotlin のリード言語設計者
* [Brian Goetz](https://twitter.com/BrianGoetz) - Oracle における Java 言語アーキテクト
* [Ben Christensen](https://twitter.com/benjchristensen) - Facebook、Netflix、Apple のエンジニアリング
* [Brendan Gregg](http://www.brendangregg.com) - クラウドパフォーマンス、カーネルエンジニア、スピーカー、著者
* [Charles Nutter](https://twitter.com/headius) - JRuby の関係者
* [Claes Redestad](https://twitter.com/cl4es) - Oracle での OpenJDK 関連の開発
* [Cliff Click](http://www.cliffc.org/blog/) - HotSpot サーバーコンパイラの創設者
* [Dave Dice](https://blogs.oracle.com/dave/) - Oracle 内のスケーラブルな同期研究グループの上級研究科学者
* [Dávid Karnok](http://akarnokd.blogspot.se/) - RxJavaのコミッターで、高度なRxJavaについてブログを書いている人物
* [Doug Lea](http://g.oswego.edu/) - Javaメモリモデルの著者
* [Gil Tene](https://twitter.com/giltene) - Azul Systems
* [Heinz Kabutz](https://twitter.com/heinzkabutz) - 250以上のJava専門家向けニュースレターの著者
* [Ivan Krylov](https://twitter.com/JohnWings) - JVMスペシャリスト
* [Jake Wharton](https://twitter.com/JakeWharton) - Square、Google、オープンソース開発者
* [John Rose](https://blogs.oracle.com/jrose/) - HotSpot開発者
* [Jonas Bonér](https://twitter.com/jboner) - Lightbendの創業者およびCTO
* [Lukas Eder](https://twitter.com/lukaseder) - ブログを書いている人物。JOOQの著者
* [Marcus Lagergren](https://twitter.com/lagergren) - Java言語チームの元メンバー
* [Mark Reinhold](https://twitter.com/mreinhold) - オラクルのJavaプラットフォームグループ首席アーキテクト
* [Martin Thompson](http://mechanical-sympathy.blogspot.se/) - 顔がパストなパフォーマンスのギャング
* [Martijn Verburg](https://twitter.com/karianna) - Javaチャンピオン
* [Kirk Pepperdine](https://twitter.com/javaperftuning) - 高性能および分散コンピューティング分野でほぼ20年間活動している人物
* [Nitsan Wakart](http://psy-lob-saw.blogspot.se/2014/03/where-is-my-safepoint.html) - Azul Systems
* [Norman Maurer](https://twitter.com/normanmaurer) - Netty開発者
* [Paul Phillips](https://twitter.com/contrarivariant) - 永遠に確立されたSLOC Scalaコンパイラ開発者
* [Per Liden](https://twitter.com/perliden) - オラクルでのHotSpot JVMの開発に携わっている人物
* [Peter Lawrey](https://twitter.com/PeterLawrey) - 競争優位性を実現するための高性能Javaシステムの革新的開発者
* [Rafael Winterhalter](https://twitter.com/rafaelcodes) - ByteBuddyの著者
* [Richard Warburton](https://twitter.com/RichardWarburto) - 開発者、スピーカー、著者。
* [Richard Startin](http://richardstartin.uk/) - パフォーマンスアナリスト、開発者、ブロガー。
* [Ron Pressler](https://twitter.com/pressron) - 並列宇宙。JVM向けのフィバーやコンティニュアのリーダー。
* [Stephen Colebourne](https://twitter.com/jodastephen) - Javaチャンピオン。時折ブロガーおよびスピーカー。JodaプロジェクトおよびJSR-310で最も知られている。
* [Todd L. Montgomery](https://twitter.com/toddlmontgomery) - 元CTO、元NASA研究者、ネットワークゲイク、メッセージングミドルウェア設計者。
* [Stéphane Maldini](https://twitter.com/smaldini) - PivotalでのProject Reactorリーダー。
* [Stuart Marks](https://twitter.com/stuartmarks) - ドクター・デプレカタ。Java/JDK/OpenJDK開発者
* [Vladimir Ivanov](https://twitter.com/iwan0www) - OracleでのHotSpot JVMをハッキング。
* [Viktor Klang](https://twitter.com/viktorklang) - Typesafe Inc.での副CTO。


# コントリビューション <a id="contributing"></a>

コントリビューションを歓迎します。

ガイドラインは[contributing.md](https://github.com/deephacks/awesome-jvm/blob/master/contributing.md)を参照してください。
