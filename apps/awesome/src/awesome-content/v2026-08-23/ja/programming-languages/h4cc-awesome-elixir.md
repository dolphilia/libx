---
title: "Awesome Elixir"
description: "Elixirを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-h4cc-awesome-elixir-readme-md"
---

# Awesome Elixir

Elixirを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## アクター <a id="actors"></a>
*アクターに関するElixirライブラリと資料です。*
* [alf](https://github.com/antonmi/ALF) - フローベースのアプリケーション層フレームワーク
* [bpe](https://github.com/spawnproc/bpe) - Erlangで構築されたビジネスプロセスエンジン。（[Doc](https://bpe.n2o.dev)）
* [pooler](https://github.com/seth/pooler) - OTPプロセスプールアプリケーション
* [poolex](https://github.com/general-CbIC/poolex) - 純粋なElixirプールマネージャー
* [spawn](https://github.com/eigr/spawn) - Elixirポリグロットアクターサービスネットワーク

## アルゴリズムとデータ構造 <a id="algorithms-and-data-structures"></a>
*アルゴリズムとデータ構造に関するElixirライブラリと資料です。*

* [aja](https://github.com/sabiwara/aja) - 高性能な永続ベクトルと順序付きマップ
* [array](https://github.com/takscape/elixir-array) - Erlangの配列に対するElixirラッパーライブラリ
* [aruspex](https://github.com/dkendal/aruspex) - Aruspexは、純粋にElixirで書かれた設定可能な制約解決器
* [bimap](https://github.com/mkaput/elixir-bimap) - 純粋なElixirによる[bidirectional maps](https://en.wikipedia.org/wiki/Bidirectional_map)およびマルチマップの実装
* [bitmap](https://github.com/hashd/bitmap-elixir) - 純粋なElixirによる[bitmaps](https://en.wikipedia.org/wiki/Bitmap)の実装
* [blocking_queue](https://github.com/joekain/BlockingQueue) - BlockingQueueは、GenServerとして実装されたシンプルなキューであり、作成時に固定長を設定する
* [bloomex](https://github.com/gmcabrita/bloomex) - スケーラブルなブロームフィルタの純粋Elixir実装
* [clope](https://github.com/ayrat555/clope) - CLOPE：取引データ用の高速かつ効果的なクラスタリングアルゴリズムに対するElixir実装
* [Closure Table](https://github.com/florinpatrascu/closure_table) - Elixir用のクロージャーテーブル - 複雑な階層を保存および操作するためのシンプルなソリューション。メモリ内およびEctoアダプタを提供。
* [combination](https://github.com/seantanly/elixir-combination) - Enumerableコレクションから組み合わせと順列を生成するElixirライブラリ
* [conrex](https://github.com/NAISorg/conrex) - 地形または等時線マップ用のCONRECアルゴリズムのElixir実装
* [count_buffer](https://github.com/camshaft/count_buffer) - 大量のカウンターをバッファリングし、定期的にフラッシュする
* [cuckoo](https://github.com/gmcabrita/cuckoo) - 純粋なElixirによる[Cuckoo Filters](https://www.cs.cmu.edu/%7Edga/papers/cuckoo-conext2014.pdf)の実装
* [cuid](https://github.com/duailibe/cuid) - 水平スケーリングと順序付き検索性能に最適化された衝突耐性ID、Elixirで書かれた
* [data_morph](https://hex.pm/packages/data_morph) - データからElixir構造体を作成する
* [dataframe](https://github.com/JordiPolo/dataframe) - PythonのPandasまたはRのdata.frame()に類似した機能を提供するパッケージ
* [datastructures](https://github.com/meh/elixir-datastructures) - データ構造との作業を行うためのプロトコル、実装、ラッパーのコレクション
* [def_memo](https://github.com/os6sense/DefMemo) - メモ化マクロ（defmemo）：GenServerバックイングストアを使用したElixir用のメモ化マクロ
* [dlist](https://github.com/stocks29/dlist) - Elixirにおけるデック（Deque）の実装
* [eastar](https://github.com/herenowcoder/eastar) - A* グラフのパス探索を純粋な Elixir で実装
* [ecto_materialized_path](https://github.com/asiniy/ecto_materialized_path) - Ecto モデルにおける木構造、階層構造および祖先関係
* [ecto_state_machine](https://github.com/asiniy/ecto_state_machine) - Elixir で実装された有限状態マシンパターンが Ecto に採用
* [elistrix](https://github.com/tobz/elistrix) - 遅延や障害に対する耐性を提供するライブラリ。アプリケーションが遅延または失敗したサービスの不安定な世界から隔離できるようにする。
* [emel](https://github.com/mrdimosthenis/emel) - Elixir で書かれたシンプルかつ機能的な機械学習ライブラリ
* [erlang-algorithms](https://github.com/aggelgian/erlang-algorithms) - 人気のあるデータ構造とアルゴリズムの実装
* [exconstructor](https://github.com/appcues/exconstructor) - Elixir で外部データを簡単に扱える構造コンストラクタを生成するライブラリ
* [exfsm](https://github.com/awetzel/exfsm) - シンプルな Elixir ライブラリで静的有限状態マシンを定義
* [exmatrix](https://github.com/a115/exmatrix) - ExMatrix は、並列計算における行列乗算のテストに元々開発された、行列操作を行う小さなライブラリ
* [exor_filter](https://github.com/mpope9/exor_filter) - xor_filters 用の NIF。『Bloom および Cuckoo フィルタより速く、小さい』
* [ezcryptex](https://github.com/stocks29/ezcryptex) - Cryptex の上に構築された薄いラッパー
* [flow](https://github.com/dashbitco/flow) - GenStage 上の計算並列フロー
* [fnv](https://github.com/asaaki/fnv.ex) - Fowler–Noll–Vo ハッシュ関数の純粋 Elixir 実装
* [fsm](https://github.com/sasa1977/fsm) - 有限状態マシンを機能型データ構造として実装
* [fuse](https://github.com/jlouis/fuse) - このアプリケーションは Erlang 用の所謂「回路ブレーカー」を実装しています
* [gen_fsm](https://github.com/pavlos/gen_fsm) - 一般化された有限状態マシン - OTP の gen_fsm をラップした Elixir ライブラリ
* [graphex](https://github.com/stocks29/graphex) - Elixir でタスクグラフの構成と実行を行うライブラリ
* [graphmath](https://github.com/crertel/graphmath) - Elixir 等で 2D および 3D 数学を実行するライブラリ
* [hash_ring_ex](https://github.com/reset/hash-ring-ex) - Elixir 用の一貫性のあるハッシュリングの実装
* [hypex](https://github.com/whitfin/hypex) - HyperLogLog の高速 Elixir 実装
* [indifferent](https://github.com/vic/indifferent) - Elixir のマップ／リスト／タプルに対する無関心なアクセス（カスタムキー変換を含む）
* [isaac](https://github.com/arianvp/elixir-isaac) - Isaac は ISAAC（高速暗号用乱数生成器）用の Elixir モジュールです
* [jumper](https://github.com/whitfin/jumper) - Elixir におけるジャンプコンシステントハッシュ（NIFなし）
* [key2value](https://github.com/okeuday/key2value) - Erlang の2通りアソシエイティブマップ
* [lfsr](https://github.com/pma/lfsr) - バイナリガロス線形フィードバックシフトレジスタの Elixir 実装
* [loom](https://github.com/asonge/loom) - δ-CRDT をサポートするCRDTライブラリ
* [luhn](https://github.com/ma2gedev/luhn_ex) - Elixir におけるルーンアルゴリズム
* [lz4](https://github.com/szktty/erlang-lz4) - Erlang 用の LZ4 バインディング（高速データ圧縮）
* [machinery](https://github.com/joaomdmoura/machinery) - 構造体用のステートマシンライブラリ。Phoenix と組み合わせて即時使用可能
* [mason](https://github.com/spacepilots/mason) - マップを構造体に変換する。たとえば REST API とのインターフェースでレスポンスから構造体を作成する際に役立ちます
* [matrex](https://github.com/versilov/matrex) - CBLAS を使用した C 実装による、Elixir/Erlang 用の高速マトリクスライブラリ
* [merkle_tree](https://github.com/yosriady/merkle_tree) - Elixir におけるメルクハッシュツリー実装
* [minmaxlist](https://github.com/seantanly/elixir-minmaxlist) - `Enum.min_by/2`、`Enum.max_by/2`および`Enum.min_max_by/2`を拡張したElixirライブラリ。結果を1つではなくリストとして返すよう実装。
* [mmath](https://github.com/dalmatinerdb/mmath) - バイナリ上の数値「配列」に対して数学演算を行うライブラリ
* [monadex](https://github.com/rob-brown/MonadEx) - Elixir パイプラインをモンアドでアップグレード
* [murmur](https://github.com/gmcabrita/murmur) - 非暗号用ハッシュアルゴリズム Murmur3 の純 Elixir 実装
* [nary_tree](https://github.com/medhiwidjaja/nary_tree) - 一般のn進木データ構造の Elixir 実装
* [natural_sort](https://github.com/DanCouper/natural_sort) - Elixir による文字列リストの自然ソート実装
* [navigation_tree](https://github.com/gutschilla/elixir-navigation-tree) - ナビゲーションツリーの表現と、そのからHTMLを生成するヘルパー関数を提供
* [parallel_stream](https://github.com/beatrichartz/parallel_stream) - Elixir における並列ストリーム実装
* [paratize](https://github.com/seantanly/elixir-paratize) - 並列処理（実行）をサポートし、ワーカー数とタイムアウトを設定できる便利なElixirライブラリ
* [parex](https://github.com/StevenJL/parex) - 並列実行（Parex）は、複数（遅い）プロセスを並列に実行するためのElixirモジュールです。
* [qcomplex](https://github.com/q60/complex) - 複素数およびそれらの数学演算を実装するElixirライブラリです。
* [qex](https://github.com/princemaple/elixir-queue) - `:queue`をラップし、APIを改善し、`Inspect`、`Collectable`および`Enumerable`プロトコルを実装。
* [qrational](https://github.com/q60/rational) - 有理数およびそれらの数学演算を実装するElixirライブラリです。
* [ratio](https://github.com/Qqwy/elixir-rational) - 有理数を追加し、通常の算術演算で使用できるようにし、浮動小数点数と有理数の間の変換をサポートします。
* [red_black_tree](https://github.com/SenecaSystems/red_black_tree) - Elixirにおける赤黒木（Red-Black tree）の実装です。
* [remodel](https://github.com/stavro/remodel) - Elixir用のマップ構造を変換するプレゼンター用パッケージです。
* [rendezvous](https://github.com/timdeputter/Rendezvous) - Elixirにおけるリズヴェ（Rendezvous）または最高ランダムウェイト（HRW）ハッシュアルゴリズムの実装です。
* [rock](https://github.com/ayrat555/rock) - ElixirにおけるROCK：カテゴリ属性用の堅牢なクラスタリングアルゴリズムの実装です。
* [sfmt](https://github.com/jj1bdx/sfmt-erlang/) - Erlang向けのSIMD指向の高速メルセンヌツイスター（SFMT）です。
* [simhash](https://github.com/UniversalAvenue/simhash-ex) - SiphashとN-gramを用いたSimhashの実装です。
* [sleeplocks](https://github.com/whitfin/sleeplocks) - Elixir/Erlang向けのBEAM対応スピンロックです。
* [sorted_set](https://github.com/SenecaSystems/sorted_set) - Elixir向けのソート済みセット（Sorted Sets）です。
* [spacesaving](https://github.com/rozap/spacesaving) - 「スペースセービング」アルゴリズムを用いたストリームにおけるdistinct要素の推定です。
* [structurez](https://github.com/hamiltop/structurez) - Elixirにおけるデータ構造の実験場です。
* [supermemo](https://github.com/edubkendo/supermemo) - Elixirによる[Supermemo 2 algorithm](https://www.supermemo.com/english/ol/sm2.htm)の実装
* [tfidf](https://github.com/OCannings/tf-idf) - Elixirにおける項頻度・逆文書頻度（term frequency–inverse document frequency）の実装です。
* [the_fuzz](https://github.com/smashedtoatoms/the_fuzz) - 模糊文字マッチングアルゴリズ的実装です。
* [tinymt](https://github.com/jj1bdx/tinymt-erlang/) - Erlang向けのミニメルセンヌツイスター（TinyMT）です。
* [trie](https://github.com/okeuday/trie) - Erlang向けのTrieの実装です。
* [witchcraft](https://github.com/expede/witchcraft) - Elixir向けの一般的な代数構造と関数です。
* [zipper_tree](https://github.com/Dkendal/zipper_tree) - 可変arityの木構造と、Elixir向けのzipperです。

## アプリケーション <a id="applications"></a>
*アプリケーションに関するElixirライブラリと資料です。*
* [Caddishouse](https://github.com/caddishouse/reader) - Phoenix/LiveView を使ってクラウドストレージアカウントに接続するウェブベースのドキュメントリーダー
* [CaptainFact](https://github.com/CaptainFact/captain-fact-api) - リアルタイムで協働できる動画事実検証プラットフォーム。（[Docs](https://captainfact.io/)）
* [chat](https://github.com/synrc/chat) - N2O をベースにしたミニテキストチャットサンプル
* [Consolex](https://github.com/sivsushruth/consolex) - Consolex は、任意のMixプロジェクトにウェブベースのコンソールを接続できるツール
* [dragonfly_server](https://github.com/cloud8421/dragonfly-server) - Elixir アプリでドラゴンフライの画像を提供
* [exchat](https://github.com/tony612/exchat) - Elixir、Phoenix および React（redux）で作成されたスラックのようなアプリ
* [Exon](https://github.com/tchoutri/Exon) - Elixirで開発された「物の管理ツール」。あなたの物を管理・記録するためのシンプルなAPIを提供。（[Docs](https://hexdocs.pm/exon/readme.html)）
* [ExShop](https://github.com/authentic-pixels/ex-shop) - Phoenix フレームワークで作成されたデジタル商品販売サイトおよびブログ
* [Harpoon](https://github.com/aschiavon91/harpoon) - PhoenixとLiveViewを使用したWebhook受信/検査アプリ。これは基本的に[webhook.site](https://github.com/h4cc/awesome-elixir/blob/6f1dc0b67ed44e405a6d31303ba42f4f47cbe0d9/htts:/webhook.site)の簡易版。
* [Igthorn](https://github.com/cinderella-man/igthorn) - 暗号通貨取引プラットフォーム／取引ボット（管理画面付き）
* [Lynx](https://github.com/clivern/lynx) - 高速・安全・信頼性の高い Terraform バックエンド、数分でセットアップ
* [majremind](https://bitbucket.org/Anwen/majremind) - あなたのサーバーの最新状態を把握する、自動で更新が必要なサーバーを通知する自前管理データベース
* [medex](https://github.com/xerions/medex) - 医療検査 - 健康チェックのコールバック登録とその状態をHTTPで表現するアプリケーション
* [medusa_server](https://github.com/IcaliaLabs/medusa_server) - Elixirで書かれたシンプルなCowboy Webサーバー。画像をスタックするためのもの。（[Docs](https://hexdocs.pm/medusa/0.2.0/api-reference.html)）
* [Nvjorn](https://github.com/tchoutri/Nvjorn) - Elixir で Poolboy を使って書かれたマルチプロトコルネットワークサービスモニタリングツール
* [Phoenix Battleship](https://github.com/bigardone/phoenix-battleship) - Elixir、Phoenix フレームドローム、React および Redux を使って作成された、昔のゲーム
* [Phoenix Toggl](https://github.com/bigardone/phoenix-toggl) - Elixir、Phoenix フレームワーク、React および Redux で作成された Toggl の敬意を表す作品
* [Phoenix Trello](https://github.com/bigardone/phoenix-trello) - Elixir、Phoenix フレームワーク、React および Redux で作成された Trello の敬意を表す作品
* [Plural](https://github.com/pluralsh/plural) - Airflow および Airbyte などのオープンソースアプリケーションを、2コマンドで自社クラウドアカウントにデプロイ。サーバー側は Elixir および Phoenix フレームワーク、フロントエンドは React で構成
* [poxa](https://github.com/edgurgel/poxa) - Pusher ライブラリと互換性のあるオープン Pusher 実装
* [Queerlink](https://github.com/Queertoo/Queerlink) - Elixir で書かれたシンプルで効率的なURL短縮サービス
* [RemoteRetro](https://github.com/stride-nyc/remote_retro) - Elixir/Phoenix/Reactで構築された、アグレートリトロスペクティブを実施するリアルタイムアプリケーション。（[remoteretro.org](https://remoteretro.org)）
* [Sprint Poker](https://github.com/elpassion/sprint-poker) - アジャイルチーム向けオンライン見積もりツール、Elixir ラング、Phoenix フレームワーク、React を使用
* [Startup Job](https://github.com/tsurupin/job_search) - Elixir/Phoenix および React/Redux でウェブサイトからスクレイピングされたスタートアップ求人を検索するアンダーバーマンプロジェクト
* [Tai](https://github.com/fremantle-capital/tai) - 合成可能でリアルタイムな暗号通貨市場データおよび取引実行ツールキット
* [tty2048](https://github.com/lexmag/tty2048) - Elixirで書かれたターミナルベースの2048ゲーム
* [uai_shot](https://github.com/sergioaugrod/uai_shot) - Elixir、Phoenixフレームワーク、Phaserを使用したマルチプレイヤー船ゲーム
* [utils](https://github.com/q60/utils) - TODOリスト、URL短縮、コードビン、ピエチャートといった便利なツールを備えたウェブサイト。PhoenixフレームワークでElixirで構築。
* [workbench](https://github.com/fremantle-industries/workbench) - アイデアから実行まで — グローバルに分散されたクラスタ上で取引操作を管理

## 人工知能 <a id="artificial-intelligence"></a>
*人工知能に関するElixirライブラリと資料です。*

* [AshAI](https://github.com/ash-project/ash_ai) - Ashアプリケーション向けのAIおよびLLMツールキット。MCPサーバー、MCP開発ツール、ベクトル埋め込み、チャットインターフェースなど。
* [Axon](https://github.com/elixir-nx/axon) - Nxを活用したニューラルネットワーク
* [Beaver](https://github.com/beaver-lodge/beaver) - BeaverはElixirおよびZigで構築されたLLVM/MLIRツールキット
* [ExLLama](https://github.com/noizu-labs-ml/ex_llama) - Elixir／Erlang向けのLlamaCpp NIF拡張。（[Docs](https://hexdocs.pm/ex_llama/ExLLama.html)）
* [Exnn](https://github.com/zampino/exnn) - G.SherによるElixirで構築された進化型ニューラルネットワークフレームワーク。（[Docs](http://zampino.github.io/exnn/)）
* [GenAI](https://github.com/noizu-labs-ml/genai) - ジェニム、アンソリック、オープンAI、ミストラモデルに対応した基本的なチャット完了機能を備えた拡張可能な生成AI完了APIワッパー。（[Docs](https://hexdocs.pm/genai/GenAI.html)）
* [Jido](https://github.com/agentjido/jido) - Elixir向けの自律アグエントフレームワーク。分散型自律行動と動的ワークフローを設計。
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 訓練された古典MLモデルをゼロ依存のネイティブElixirコードにトランスパイルするCLIツール
* [Neat-Ex](https://gitlab.com/onnoowl/Neat-Ex) - NEATアルゴリズムのElixir実装。（[Docs](https://hexdocs.pm/neat_ex/Neat.html)）
* [Noizu-OpenAi](https://github.com/noizu-labs/elixir-openai) - オープンAIライブラリ向けのElixirAPI。（[Docs](https://hexdocs.pm/noizu_labs_open_ai/api-reference.html)）
* [Nx](https://github.com/elixir-nx/nx) - Elixir向けの多次元配列（テンソル）および数値定義
* [ReqLLM](https://github.com/agentjido/req_llm) - 100以上のLLMプロバイダーとモデルをサポートするLLMクライアント
* [Runhyve](https://runhyve.app) - RunhyveはFreeBSD上でbhyveを用いた完全な仮想マシンマネージャー。Elixirで構築され、Phoenixフレームドワークを使用。
* [simple_bayes](https://github.com/fredwu/simple_bayes) - Elixirで書かれたシンプルなベイズ／ナイブベイズ実装
* [Synapses](https://mrdimosthenis.github.io/Synapses/?elixir) - ニューラルネットワーク向けの軽量ライブラリ
* [Weaviate](https://github.com/noizu-labs-ml/elixir-weaviate) - Weaviateクライアントおよび記録を宣言するためのマクロ。（[Docs](https://hexdocs.pm/noizu_weaviate/api-reference.html)）

## 音声 <a id="audio-and-sounds"></a>
*音声に関するElixirライブラリと資料です。*

* [erlaudio](https://github.com/asonge/erlaudio) - ErlangのPortAudioバインディング
* [ex_alsa](https://github.com/dulltools/ex_alsa) - ElixirのALSAバインディング
* [ex_jack](https://github.com/dulltools/ex_jack) - ElixirのJACKバインディング
* [firmata](https://github.com/entone/firmata) - このパッケージはFirmataプロトコルを実装しています
* [synthex](https://github.com/bitgamma/synthex) - 信号合成ライブラリ

## 認証 <a id="authentication"></a>
*認証に関するElixirライブラリと資料です。*

* [aeacus](https://github.com/zmoshansky/aeacus) - シンプルかつ設定可能な識別情報／パスワード認証モジュール（Ecto/Phoenixと互換）
* [apache_passwd_md5](https://github.com/kevinmontuori/Apache.PasswdMD5) - Apache/APRスタイルのパスワードハッシュ
* [aws_auth](https://github.com/bryanjos/aws_auth) - Elixir用AWS署名バージョン4のサインライブラリ
* [basic_auth](https://github.com/CultivateHQ/basic_auth) - ElixirのプラグにHTTP基本認証を簡単に追加するプラグ
* [coherence](https://github.com/smpallen99/coherence) - コアレスは、Phoenix向けの完全機能かつ設定可能な認証システム。（[Docs](https://hexdocs.pm/coherence/Coherence.html)）
* [doorman](https://github.com/BlakeWilliams/doorman) - Elixirの認証をシンプルかつ柔軟に実現するツール
* [elixir_auth_google](https://github.com/dwyl/elixir-auth-google) - Elixir/PhoenixアプリにGoogle OAuth認証（「Googleでログイン」）を追加する最も簡単な方法
* [ex_aws_msk_iam_auth](https://github.com/BigThinkcode/ex_aws_msk_iam_auth) - AWSマネージドストリーミングfor Apache Kafka (MSK)のIAM認証プラグインfor Broadway Kafka
* [goth](https://github.com/peburrows/goth) - Google Cloud APIを介したサーバー間アプリケーション向けOAuth 2.0ライブラリ
* [guardian](https://github.com/ueberauth/guardian) - Elixirアプリケーションとの使用に適した認証フレームワーク。（[Docs](https://hexdocs.pm/guardian/Guardian.html)）
* [guardian_db](https://github.com/ueberauth/guardian_db) - Guardianに拡張された機能で、アプリケーションのデータベース内のトークンを追跡し、再生を防止します。([Docs](https://hexdocs.pm/guardian_db/readme.html)).
* [guardian_redis](https://github.com/alexfilatov/guardian_redis) - GuardianのDB用のRedisリポジトリ。([Docs](https://hexdocs.pm/guardian_redis/readme.html)).
* [htpasswd](https://github.com/kevinmontuori/Apache.htpasswd) - ElixirでのApache htpasswdファイルの読み書き
* [mojoauth](https://github.com/mojolingo/mojo-auth.ex) - ElixirでのMojoAuth実装
* [oauth2](https://github.com/scrogson/oauth2) - Elixir向けOAuth 2.0クライアントライブラリ
* [oauth2_facebook](https://github.com/chrislaskey/oauth2_facebook) - Elixir向けFacebook OAuth2プロバイダー
* [oauth2_github](https://github.com/chrislaskey/oauth2_github) - Elixir向けGitHub OAuth2プロバイダー
* [oauth2cli](https://github.com/mgamini/oauth2cli-elixir) - Elixir向けシンプルなOAuth2クライアント
* [oauth2ex](https://github.com/parroty/oauth2ex) - Elixir向け別のOAuth 2.0クライアントライブラリ
* [oauther](https://github.com/lexmag/oauther) - Elixir向けOAuth 1.0実装
* [passwordless_auth](https://github.com/madebymany/passwordless_auth) - Elixir向けシンプルなパスワードなしログインまたは2段階/複数段階認証
* [phauxth](https://github.com/riverrun/phauxth) - Phoenix 1.3およびその他のPlugベースアプリ向け認証ライブラリ
* [phoenix_client_ssl](https://github.com/jshmrtn/phoenix-client-ssl) - Phoenixおよびその他のPlugベースアプリ向けクライアントSSL認証プラグ
* [pow](https://github.com/danschultzer/pow) - 強固でモジュール化され、拡張可能なユーザー認証システム ([Website](https://powauth.com) - [Doc](https://hex.pm/packages/pow)).
* [samly](https://github.com/handnot2/samly) - SAML SPのSSOを簡単に行う ([Doc](https://hexdocs.pm/samly/readme.html)).
* [sesamex](https://github.com/khusnetdinov/sesamex) - 5分で簡単かつ柔軟な認証ソリューション！
* [sigaws](https://github.com/handnot2/sigaws) - AWSの署名V4の署名および検証用のライブラリ ([Doc](https://hexdocs.pm/sigaws/Sigaws.html)).
* [ueberauth](https://github.com/ueberauth/ueberauth) - PlugベースのWebアプリケーション向けElixir認証システム
* [ueberauth_auth0](https://hex.pm/packages/ueberauth_auth0) - Auth0を使用してユーザーを認証するためのUeberauth戦略
* [ueberauth_cas](https://github.com/marceldegraaf/ueberauth_cas) - 中央認証サービス戦略（Überauth）
* [ueberauth_facebook](https://github.com/ueberauth/ueberauth_Facebook) - ÜberauthにおけるFacebook OAuth2戦略
* [ueberauth_foursquare](https://github.com/borodiychuk/ueberauth_foursquare) - ÜberauthにおけるFoursquare OAuth2戦略
* [ueberauth_github](https://github.com/ueberauth/ueberauth_github) - ÜberauthにおけるGitHub戦略
* [ueberauth_google](https://github.com/ueberauth/ueberauth_google) - Über及時認証戦略
* [ueberauth_identity](https://github.com/ueberauth/ueberauth_identity) - Überauthにおけるシンプルなユーザー名/パスワード戦略
* [ueberauth_line](https://github.com/alexfilatov/ueberauth_line) - ÜberauthにおけるLINE戦略
* [ueberauth_microsoft](https://github.com/swelham/ueberauth_microsoft) - ÜberauthにおけるMicrosoft戦略
* [ueberauth_slack](https://github.com/ueberauth/ueberauth_slack) - ÜberauthにおけるSlack戦略
* [ueberauth_twitter](https://github.com/ueberauth/ueberauth_twitter) - ÜberauthにおけるTwitter戦略
* [ueberauth_vk](https://github.com/sobolevn/ueberauth_vk) - Überauthにおける[vk.com](https://vk.com)戦略.
* [ueberauth_weibo](https://github.com/he9qi/ueberauth_weibo) - Überauthにおける[Weibo](https://weibo.com)OAuth2戦略.
* [zachaeus](https://github.com/railsmechanic/zachaeus) - 非対称暗号を用いたシンプルなライセンスシステム

## 認可 <a id="authorization"></a>
*認可に関するElixirライブラリと資料です。*

* [authorize](https://github.com/jfrolich/authorize) - ルールベースの認可、高度な認可ルール用
* [bodyguard](https://github.com/schrockwell/bodyguard) - Phoenixアプリケーション向けの柔軟な認可ライブラリ
* [canada](https://github.com/jarednorman/canada) - 宣言型許可ルールを用いた親しみやすいインターフェースを提供するシンプルな認可ライブラリ
* [canary](https://github.com/cpjk/canary) - Elixirアプリケーション向けの認可ライブラリで、現在のユーザーがアクセスできるリソースを制限します。([Docs](https://hexdocs.pm/canary/api-reference.html)).
* [speakeasy](https://github.com/coryodaniel/speakeasy) - Absinthe GraphQLをBodyguardで駆動したミドルウェアベースの認証および認可
* [terminator](https://github.com/MilosMosovsky/terminator) - データベースベースの認可（ACL）で、必要な権限を要求するためのカスタムDSLルールを提供。([Docs](https://hexdocs.pm/terminator/readme.html)).

## ビヘイビアとインターフェース <a id="behaviours-and-interfaces"></a>
*ビヘイビアとインターフェースに関するElixirライブラリと資料です。*

* [connection](https://github.com/fishcakez/connection) - 接続プロセスのための接続行動。APIはGenServer APIのスーパーセットである。
* [gen_state_machine](https://github.com/antipax/gen_state_machine) - gen_statemに対するElixirのラッパー
* [stockastic](https://github.com/shanewilton/stockastic) - シンプルなElixirのStockfighter APIラッパー

## ベンチマーク <a id="benchmarking"></a>
*ベンチマークに関するElixirライブラリと資料です。*

* [beamchmark](https://github.com/membraneframework/beamchmark) - EVMパフォーマンスを測定するツール
* [benchee](https://github.com/PragTob/benchee) - Elixirでの簡単で拡張可能なベンチマーク機能
* [benchfella](https://github.com/alco/benchfella) - Elixir向けのベンチマークツール
* [bmark](https://github.com/joekain/bmark) - Elixir用ベンチマークツール

## BitTorrent <a id="bittorrent"></a>
*BitTorrentに関するElixirライブラリと資料です。*

* [bento](https://github.com/folz/bento) - 非常に高速かつ正確な、純Elixir製のBencodeライブラリ
* [tracker_request](https://github.com/alehander42/tracker_request) - BitTorrentトラッカーのリクエストとレスポンスを処理するライブラリ
* [wire](https://github.com/alehander42/wire) - ElixirでBitTorrentピアのワイヤプロトコルメッセージをエンコード・デコードするライブラリ

## BSON <a id="bson"></a>
*BSONに関するElixirライブラリと資料です。*

* [BSONMap](https://github.com/Nebo15/bsoneach) - BSONファイル内の各ドキュメントに対して関数を適用し、メモリ消費量が低いElixirパッケージ
* [cyanide](https://github.com/ispirata/cyanide) - Elixir向けのBSONエンコード／デコードライブラリ

## ビルドツール <a id="build-tools"></a>
*ビルドツールに関するElixirライブラリと資料です。*

* [active](https://github.com/synrc/active) - ファイルシステムの変更による再コンパイルと再読み込み
* [coffee_rotor](https://github.com/HashNuke/coffee_rotor) - RotorプラグインによるCoffeeScriptファイルのコンパイル
* [dismake](https://github.com/jarednorman/dismake) - Mixコンパイラがmakeを実行
* [etude](https://github.com/exstruct/etude) - Erlang/Elixir向けの並列計算のコアコンパイラ
* [Exscript](https://github.com/liveforeverx/exscript) - Elixirのescriptライブラリ
* [mad](https://github.com/synrc/mad) - 小型で高速なRebarの代替ツール
* [pc](https://github.com/blt/port_compiler) - Rebar3用のポートコンパイラ
* [reaxt](https://github.com/awetzel/reaxt) - ElixirアプリケーションへのReactテンプレートを導入し、サーバーでレンダリングを行う
* [rebar3_abnfc_plugin](https://github.com/surik/rebar3_abnfc_plugin) - Rebar3 abnfcコンパイラ
* [rebar3_asn1_compiler](https://github.com/pyykkis/rebar3_asn1_compiler) - Rebar3でASN.1モジュールをコンパイルするプラグイン
* [rebar3_auto](https://github.com/vans163/rebar3_auto) - ファイル変更時に自動でコンパイル・再読み込みを行うRebar3プラグイン
* [rebar3_diameter_compiler](https://github.com/carlosedp/rebar3_diameter_compiler) - Rebar3プロジェクトでdiameter .diaファイルをコンパイル
* [rebar3_eqc](https://github.com/kellymclaughlin/rebar3-eqc-plugin) - Erlang QuickCheck プロパティの実行を可能にする rebar3 プラグイン
* [rebar3_exunit](https://github.com/processone/rebar3_exunit) - rebar3 ビルドツールから Elixir ExUnit テストを実行するプラグイン
* [rebar3_idl_compiler](https://github.com/sebastiw/rebar3_idl_compiler) - Rebar3 を使って Erlang IDL ファイルをコンパイルするプラグイン
* [rebar3_live](https://github.com/pvmart/rebar3_live) - rebar3 のライブプラグイン
* [rebar3_neotoma_plugin](https://github.com/zamotivator/rebar3_neotoma_plugin) - rebar3 neotoma (パーサー表現文法) コンパイラ
* [rebar3_protobuffs](https://github.com/benoitc/rebar3_protobuffs) - Basho から取得した protobuffs を使って rebar3 protobuffs プロバイダー
* [rebar3_run](https://github.com/tsloughter/rebar3_run) - 1つのシンプルなコマンドでリリースを実行
* [rebar3_yang_plugin](https://github.com/surik/rebar3_yang_plugin) - rebar3 yang コンパイラ
* [reltool_util](https://github.com/okeuday/reltool_util) - Erlang の reltool ユーティリティ機能アプリケーション
* [relx](https://github.com/erlware/relx) - Erlang 用のリリースアセンブラー
* [remix](https://github.com/AgilionApps/remix) - ファイル変更時に Mix コードの自動再コンパイル
* [rotor](https://github.com/HashNuke/rotor) - Elixir 用のシンプルなビルドシステム
* [sass_elixir](https://github.com/zamith/sass_elixir) - Elixir プロジェクト向けの sass プラグイン

## キャッシュ <a id="caching"></a>
*キャッシュに関するElixirライブラリと資料です。*

* [cachex](https://github.com/whitfin/cachex) - Elixir 用の機能豊かなキャッシュライブラリ
* [con_cache](https://github.com/sasa1977/con_cache) - ConCache は ETS をベースとしたキー/バリューストレージ
* [elixir_locker](https://github.com/tsharju/elixir_locker) - Locker は Erlang の locker ライブラリを Elixir でラップしたライブラリで、いくつかの便利なライブラリを提供し、locker の使用を少し簡単にする
* [jc](https://github.com/jr0senblum/jc) - パブリッシュ/サブスクリプション、JSONクエリ、一貫性をサポートするメモリ内かつ分散可能なキャッシュ
* [lru_cache](https://github.com/arago/lru_cache) - シンプルな LRU キャッシュ、ETS を使って実装
* [memoize](https://github.com/melpon/memoize) - 関数を簡単にキャッシュできるメモ化マクロ
* [nebulex](https://github.com/cabol/nebulex) - Elixir 用の高速で柔軟かつ拡張可能な分散およびローカルキャッシュライブラリ
* [request_cache_plug](https://github.com/MikaAK/request_cache_plug) - PhoenixのコントローラーまたはGraphQLリゾルバーにおけるリクエストのキャッシュを簡単に扱える機能。JSONのエンコード／デコードをスキップすることで、大幅なスピードアップが可能。
* [stash](https://github.com/whitfin/stash) - シンプルで高速かつ使いやすいキー／バリューストア。

## チャット <a id="chatting"></a>
*チャットに関するElixirライブラリと資料です。*

* [alice](https://github.com/alice-bot/alice) - Elixir用のSlackボットフレームワーク。
* [chatty](https://github.com/alco/chatty) - 基本的なIRCクライアントで、ボットの開発に特に役立つ。
* [cog](https://github.com/operable/cog) - Cogはオープンなチャットオペスプラットフォームで、安全かつ協働できるコマンドラインをチャットウィンドウ内に提供。
* [ExGram](https://github.com/rockneurotiko/ex_gram) - Telegramボットを構築するためのライブラリ。低レベルのメソッドやモデルを使用するか、または組み込みの強い意見を持つフレームワークを使用できます。([Docs](https://hexdocs.pm/ex_gram/readme.html)).
* [ExIrc](https://github.com/bitwalker/exirc) - Elixirプロジェクト向けのIRCクライアントアダプタ。
* [ExMustang](https://github.com/techgaun/ex_mustang) - シンプルで無知なSlackボットと、応答用のコレクション。
* [Guri](https://github.com/elvio/guri) - チャットメッセージを使ってタスクを自動化。
* [hedwig](https://github.com/hedwig-im/hedwig) - Elixir向けのXMPPクライアント/ボットフレームワーク。([Docs](https://hexdocs.pm/hedwig/readme.html)).
* [kaguya](https://github.com/Luminarys/Kaguya) - 小さな、強力でモジュラリティの高いIRCボット。
* [slacker](https://github.com/koudelka/slacker) - Slackチャットサービス向けのボットライブラリ。
* [yocingo](https://github.com/Yawolf/yocingo) - 自作のTelegramボットを作成できる。

## クラウド基盤と管理 <a id="cloud-infrastructure-and-management"></a>
*クラウド基盤と管理に関するElixirライブラリと資料です。*

* [aws](https://github.com/aws-beam/aws-elixir) - Elixir向けのAWSクライアント。
* [Batteries Included](https://github.com/batteries-included/batteries-included) - 自動化／UI駆動型Kubernetesのセルフホストプラットフォーム。ElixirとGolangで構成され、すべてのUIはPhoenix Live Viewで構築。
* [Bonny](https://github.com/coryodaniel/bonny) - Kubernetes Operator開発フレームワーク。
* [Cloudi](http://cloudi.org/) - CloudIは、ソフトリアルタイム取引が必要なバックエンドサーバー処理タスクに適している。
* [discovery](https://github.com/undeadlabs/discovery) - Consulでサービスの自動発見を行うOTPアプリケーション。
* [erlcloud](https://github.com/erlcloud/erlcloud) - Erlang向けのクラウドコンピューティングライブラリ（Amazon EC2、S3、SQS、SimpleDB、Mechanical Turk、ELB）。([Docs](https://hexdocs.pm/erlcloud/)).
* [ex_aws](https://github.com/CargoSense/ex_aws) - AWSクライアント。Dynamo、Kinesis、Lambda、SQS、S3をサポート。
* [ex_riak_cs](https://github.com/ayrat555/ex_riak_cs) - Riak CS APIクライアント。
* [fleet_api](https://github.com/jordan0day/fleet-api) - Fleet（CoreOS）APIのシンプルなラッパー。etcdトークンまたは直接のノードURLで使用可能。
* [Gandi](https://github.com/Ahamtech/elixir-Gandi) - Leasewebインフラストラクチャ向けのGandiラッパー。
* [IElixir](https://github.com/pprzetacznik/IElixir) - Elixirプログラミング言語用のJupyterのカーネル
* [k8s](https://github.com/coryodaniel/k8s) - KubernetesElixirクライアント（CRD対応、マルチクラスタ対応、プラグイン認証、カスタマイズ可能なミドルウェア）
* [Kazan](https://github.com/obmarg/kazan) - KubernetesElixirクライアント（k8sオープンAPI仕様から生成）
* [Kubereq](https://github.com/mruoss/kubereq) - ReqをベースにしたKubernetesクライアント
* [Kubex](https://github.com/ingerslevio/kubex) - Elixirで書かれた純ElixirのKubernetesクライアントおよび統合
* [Leaseweb](https://github.com/Ahamtech/elixir-leaseweb) - Leasewebインフラストラクチャ向けElixirのラッパー
* [libcluster](https://github.com/bitwalker/libcluster) - Elixirアプリケーションにおける自動クラスタ形成および修復。([Docs](https://hexdocs.pm/libcluster/readme.html)).
* [nodefinder](https://github.com/okeuday/nodefinder) - Erlangの自動ノード発見戦略
* [nomad](https://github.com/sashaafm/nomad) - クラウドに移植可能なElixirおよびフェノックスアプリケーションを作成。一度書くことでどこでも使える。
* [sidejob](https://github.com/basho/sidejob) - Erlang向け並列ワーカーおよび容量制限ライブラリ
* [sidetask](https://github.com/PSPDFKit-labs/sidetask) - SideTaskは、Bashoのsidejobライブラリを用いたTask.Supervisorの代替で、並列処理と容量制限を提供
* [skycluster](https://github.com/Nebo15/skycluster) - Elixir／Erlangアプリケーション向け自動Erlangクラスタ形成、メッセージングおよび管理。Kubernetesと統合。
* [vercel](https://github.com/Bounceapp/elixir-vercel) - VercelのAPI向けElixirラッパー

## コード解析 <a id="code-analysis"></a>
*コード解析に関するElixirライブラリと資料です。*

* [belvedere](https://github.com/nirvana/belvedere) - CircleCIとのElixir統合例
* [coverex](https://github.com/alfert/coverex) - Elixir向けカバレッジレポート
* [credo](https://github.com/rrrene/credo) - コード一貫性とElixirの学習を重視した静的コード分析ツール。([Docs](https://hexdocs.pm/credo/Credo.html)).
* [DepViz](https://depviz.jasonaxelson.com/) - 開発者が自プロジェクトにおけるElixirの再コンパイルを理解しやすいようにするための視覚ツール。([Code](https://github.com/axelson/dep_viz/)).
* [dialyxir](https://github.com/jeremyjh/dialyxir) - DialyzerのElixirプロジェクトでの使用を簡易化するMixタスク。([Docs](https://hexdocs.pm/dialyzex/Mix.Tasks.Dialyzer.html)).
* [ex_check](https://github.com/karolsluszniak/ex_check) - Elixirプロジェクトで全てのコード分析およびテストツールを効率的に実行する1つのツール
* [excellent_migrations](https://github.com/Artur-Sulej/excellent_migrations) - データベースマイグレーションにおける危険な操作を検出
* [excoveralls](https://github.com/parroty/excoveralls) - coveralls.ioとの統合をもつElixir向けカバレッジレポートツール
* [exprof](https://github.com/parroty/exprof) - Elixir向けシンプルなコードプロファイラー（eprofを使用）
* [int_set](https://github.com/Cantido/int_set) - 正の整数を扱う効率的な無順序データ構造

## コマンドラインアプリ <a id="command-line-applications"></a>
*コマンドラインアプリに関するElixirライブラリと資料です。*

* [elementtui](https://codeberg.org/edwinvanl/elementtui) - ターミナルユーザーインターフェース（TUI）を作成するためのライブラリ
* [ex_cli](https://github.com/tuvistavie/ex_cli) - Elixir向けの使いやすいCLIアプリ
* [ex_prompt](https://github.com/behind-design/ex_prompt) - コマンドラインアプリケーションにインタラクティブ性を簡単に追加するためのヘルパーパッケージ
* [firex](https://github.com/msoedov/firex) - Elixirモジュールから自動的にコマンドラインインターフェース（CLI）を生成するためのライブラリ
* [getopt](https://github.com/jcomellas/getopt) - Erlang向けのコマンドラインオプションパーサー
* [loki](https://github.com/khusnetdinov/loki) - インタラクティブなコマンドラインアプリケーションを作成するためのライブラリ
* [optimus](https://github.com/savonarola/optimus) - Elixir向けのコマンドラインオプションパーサーで、[clap.rs](https://clap.rs/)にインスパイアされています.
* [owl](https://github.com/fuelen/owl) - Elixirでコマンドラインユーザーインターフェースを書くためのツールキット
* [phoenix-cli](https://phoenix-cli.github.io/) - Phoenixフレームワーク向けのコマンドラインインターフェース（Railsコマンドのような）
* [progress_bar](https://github.com/henrik/progress_bar) - コマンドラインの進行バーとスピンナー
* [prompt](https://github.com/silbermm/prompt) - Elixirでコマンドラインアプリケーションを構築するためのツールキット
* [ratatouille](https://github.com/ndreynolds/ratatouille) - Elixir向けのTUI（テキストUI）キット
* [scribe](https://github.com/codedge-llc/scribe) - Elixirの構造体やマップのテーブルをきれいに表示する。hirbにインスピレーションを得た。
* [table_rex](https://github.com/djm/table_rex) - 表示用に設定可能なASCIIスタイルのテーブルを生成する。
* [tabula](https://github.com/aerosol/tabula) - Ectoクエリ結果やマップのリストをASCIIテーブルできれいに表示（GitHub Markdown/OrgMode）。

## 設定 <a id="configuration"></a>
*設定に関するElixirライブラリと資料です。*

* [confex](https://github.com/Nebo15/confex) - 実行時における環境設定を読み取るための、使いやすいヘルパーモジュール。
* [configparser_ex](https://github.com/easco/configparser_ex) - Pythonのconfigparserライブラリが扱うファイルの種類に同じように対応するElixirパーサー。
* [conform](https://github.com/bitwalker/conform) - Elixirアプリケーション向けの簡単なリリース設定。
* [dotenv](https://github.com/avdi/dotenv_elixir) - dotenvのElixir版。
* [enux](https://github.com/massivefermion/enux) - 実行時に環境変数、JSON、JSONCファイルからアプリケーションの設定変数を読み込み、検証し、ドキュメント化し、環境に注入するためのユーティリティパッケージ。
* [figaro](https://github.com/trestrantham/ex_figaro) - Elixirプロジェクト向けのシンプルな設定。
* [figaro_elixir](https://github.com/KamilLelonek/figaro-elixir) - Elixir向けの環境変数マネージャー。
* [hush](https://github.com/gordalina/hush) - 実行時およびリリースモードで構成を読み込み・挿入し、複数のプロバイダーをサポート。
* [hush_aws_secrets_manager](https://github.com/gordalina/hush_aws_secrets_manager) - hush 用の AWS Secrets Manager プロバイダー。
* [hush_gcp_secret_manager](https://github.com/gordalina/hush_gcp_secret_manager) - hush 用の Google Secret Manager プロバイダー。
* [mahaul](https://github.com/emadalam/mahaul) - Elixir での環境変数を強化。コンパイル時アクセス保証、デフォルト値、フォールバック、アプリの事前起動検証をサポート。
* [skogsra](https://github.com/gmtprime/skogsra) - OS環境変数とアプリケーション設定オプションを簡単に管理するためのライブラリ。
* [sweetconfig](https://github.com/d0rc/sweetconfig) - アプリケーションのどこからでもYAML構成ファイルを読み取る。
* [weave](https://gitlab.com/gt8/open-source/elixir/weave) - KubernetesおよびDocker Swarmと互換性のあるJIT構成ローダー。

## 暗号 <a id="cryptography"></a>
*暗号に関するElixirライブラリと資料です。*

* [aescmac](https://github.com/kleinernik/elixir-aes-cmac) - ElixirにおけるAES CMAC ([RFC 4493](https://tools.ietf.org/html/rfc4493)).
* [cipher](https://github.com/rubencaro/cipher) - Elixir用の暗号ライブラリ。任意のバイナリを暗号化／復号。
* [cloak](https://github.com/danielberkompas/cloak) - CloakによりEctoと暗号化の使用が容易になります。([Docs](https://hexdocs.pm/cloak/readme.html)).
* [comeonin](https://github.com/riverrun/comeonin) - Elixir向けのパスワードハッシュ（argon2、bcrypt、pbkdf2_sha512）ライブラリ。([https://hexdocs.pm/comeonin/api-reference.html](https://hexdocs.pm/comeonin/api-reference.html)).
* [crypto_rsassa_pss](https://github.com/potatosalad/erlang-crypto_rsassa_pss) - Erlang用のRSASSA-PSS公開鍵暗号署名アルゴリズム。
* [elixir_tea](https://github.com/keichan34/elixir_tea) - ElixirでのTEA実装。
* [ex_bcrypt](https://github.com/manelli/ex_bcrypt) - Elixir用のOpenBSD bcryptパスワードハッシュアルゴリズムのラッパー。
* [ex_crypto](https://github.com/ntrepid8/ex_crypto) - Elixir 用の Erlang `crypto` および `public_key` モジュールのラッパー。多くの暗号関数に対して適切なデフォルト値を提供し、それらの使用を簡単にする。([Docs](https://hexdocs.pm/ex_crypto/readme.html))
* [exgpg](https://github.com/rozap/exgpg) - Elixirからgpgを使用する。
* [nimble_totp](https://github.com/dashbitco/nimble_totp) - 2FA用のタイムベースワンタイムパスワード（TOTP）の実装を可能にする。
* [ntru_elixir](https://github.com/alisinabh/ntru_elixir) - Elixir用のlibntruラッパー。後量子暗号システム。
* [pot](https://github.com/yuce/pot) - Google Authenticatorと互換性のあるワンタイムパスワードを生成するErlangライブラリ。
* [rsa](https://github.com/trapped/elixir-rsa) - `public_key` 用の Elixir の暗号ラッパー
* [rsa_ex](https://github.com/anoskov/rsa-ex) - RSA鍵を扱うためのライブラリ。
* [siphash-elixir](https://github.com/whitfin/siphash-elixir) - ElixirでのSipHashハッシュファミリーの実装。
* [tea_crypto](https://github.com/keichan34/tea_crypto_erl) - Tiny Encryption Algorithm（TEA）の実装。

## CSV <a id="csv"></a>
*CSVに関するElixirライブラリと資料です。*

* [cesso](https://github.com/meh/cesso) - Elixir用のCSV処理ライブラリ。
* [csv](https://github.com/beatrichartz/csv) - Elixir用のCSVデコードおよびエンコードライブラリ。
* [csv2sql](https://github.com/Arp-G/csv2sql) - CSVからデータベースへの高速かつ完全自動化されたインポートツール
* [csvlixir](https://github.com/jimm/csvlixir) - Elixir用のCSV読み書きアプリケーション
* [ecsv](https://github.com/erpuno/ecsv) - Elixir用のlibcsvベースの高速ストリームパーサー
* [nimble_csv](https://github.com/plataformatec/nimble_csv) - Elixir用のシンプルかつ高速なCSVパーサーとダンプライブラリ

## データ可視化 <a id="data-visualization"></a>
*データ可視化に関するElixirライブラリと資料です。*

* [plox](https://github.com/gridpoint-com/plox) - PhoenixおよびLiveView用のサーバー側レンダリングSVGグラフコンポーネント
* [tucan](https://github.com/pnezis/tucan) - VegaLiteに基づくElixir用のプロットライブラリ
* [vega_lite](https://github.com/livebook-dev/vega_lite) - Vega-Lite用のElixirバインディング

## 日付と時刻 <a id="date-and-time"></a>
*日付と時刻に関するElixirライブラリと資料です。*

* [block_timer](https://github.com/adamkittelson/block_timer) - :timer.apply_afterおよび:timer.apply_intervalとブロックを使用するためのマクロ
* [calendar](https://github.com/lau/calendar) - CalendarはElixir用の日付と時刻ライブラリ
* [calendarific](https://github.com/Bounceapp/elixir-calendarific) - Calendarificは祝日API Calendarificをラップしたライブラリ
* [calixir](https://github.com/rengel-de/calixir) - CalixirはLispのカレンダーソフトウェアcalendrica-4.0をElixirに移植したもの
* [chronos](https://github.com/nurugger07/chronos) - Elixir用の日付時刻ライブラリ
* [cocktail](https://github.com/peek-travel/cocktail) - iCalendarイベントに基づくElixir用の日付繰り返しライブラリ
* [cronex](https://github.com/jbernardo95/cronex) - 監視ツリーにマウントできるCronのようなシステム
* [crontab](https://github.com/jshmrtn/crontab) - Cron表現のパーサー、コンポーザーおよび日付候補検索ツール
* [emojiclock](https://github.com/nathanhornby/emojiclock-elixir) - 指定した時刻に応じたエモジ時計を提供するElixirモジュール
* [ex_ical](https://github.com/fazibear/ex_ical) - ICalendarのパーサー
* [filtrex](https://github.com/rcdilorenzo/filtrex) - クライアントから複雑なSQL風フィルタを実行・検証するためのライブラリ（例：スマートフィルタ）
* [good_times](https://github.com/DevL/good_times) - 表現力があり使いやすい日時関数
* [jalaali](https://github.com/jalaali/elixir-jalaali) - Elixir用のジャラリカレンダー実装
* [milliseconds](https://github.com/davebryson/elixir_milliseconds) - ミリ秒を扱うためのシンプルなライブラリ。Elixirで日付をパース、検証、操作、表示する。
* [moment](https://github.com/atabary/moment) - Elixirで日付をパース、検証、操作、表示する。
* [open_hours](https://github.com/hopsor/open_hours) - ビジネス時間に基づく時間計算。
* [quantum](https://github.com/quantum-elixir/quantum-core) - Elixirアプリケーション向けのクロン風ジョブスケジューラ。
* [repeatex](https://github.com/rcdilorenzo/repeatex) - 繰り返し日付を自然言語でパースする。
* [timelier](https://github.com/ausimian/timelier) - Elixir向けのクロン風スケジューラ。
* [timex](https://github.com/bitwalker/timex) - Elixir向けに使いやすい日付と時刻モジュール。
* [timex_interval](https://github.com/atabary/timex-interval) - Timexに基づいたElixir向け日時間隔ライブラリ。
* [tzdata](https://github.com/lau/tzdata) - Elixirにおける時区データベース。

## デバッグ <a id="debugging"></a>
*デバッグに関するElixirライブラリと資料です。*

* [beaker](https://github.com/hahuang65/beaker) - Elixir向けの統計とメトリクスライブラリ。
* [booter](https://github.com/eraserewind/booter) - Elixirアプリケーションを段階的に起動する。
* [dbg](https://github.com/fishcakez/dbg) - Elixir向けの分散トレース。
* [eflame](https://github.com/proger/eflame) - Erlang向けのフレームグラフプロファイラー。
* [eper](https://github.com/massemanet/eper) - Erlangのパフォーマンスとデバッグツール。
* [ether](https://github.com/maarek/ether) - EtherはElixirをErlangデバッガーに接続するための機能を提供する。
* [ex_debug_toolbar](https://github.com/kagux/ex_debug_toolbar) - Phoenixプロジェクト向けのデバッギングツールバー。コードをインタラクティブにデバッグし、リクエストに関するログ、タイムライン、データベースクエリなど、有用な情報を表示。
* [exrun](https://github.com/liveforeverx/exrun) - レート制限付きで、マクロベースのインターフェースを持つElixir向けの分散トレース。
* [extrace](https://github.com/redink/extrace) - Recon TraceのElixir用ラッパー。
* [git_hooks](https://github.com/qgadrian/elixir_git_hooks) - ElixirプロジェクトにGitホックを追加する。
* [inspector](https://github.com/marciol/inspector) - シンプルな1行モジュールで、より親しみやすいデバッグ体験を提供する。
* [observer_cli](https://github.com/zhongwencool/observer_cli) - コマンドライン上で Elixir と Erlang のノードを可視化。プロダクションシステムのデバッグを支援する。
* [quaff](https://github.com/qhool/quaff) - Debug モジュールは、Erlang グラフィカルデバッガー内で Elixir コードを実行するためのシンプルなヘルパーインターフェースを提供する。
* [rexbug](https://github.com/nietaki/rexbug) - Erlang の生産性に配慮したトレースデバッガの Elixir 用ラッパー `redbug`
* [visualixir](https://github.com/koudelka/visualixir) - リモート BEAM ノード向けのプロセス可視化ツール。

## デプロイ <a id="deployment"></a>
*デプロイに関するElixirライブラリと資料です。*

* [akd](https://github.com/annkissam/akd) - Capistrano に似た、設定が可能で簡単な Elixir 部署自動化フレームワーク。
* [ansible-elixir-stack](https://github.com/HashNuke/ansible-elixir-stack) - 1コマンドでサーバーにセットアップ・デプロイ。Phoenix アプリケーションに優れたサポートを提供。
* [bootleg](https://github.com/labzero/bootleg) - Elixir 用のシンプルなデプロイとサーバー自動化。
* [bottler](https://github.com/rubencaro/bottler) - Bottler は、リリースの生成、サーバーへの配布、インストール、そしてプロダクション環境への本番展開を支援するツールのコレクション。
* [edeliver](https://github.com/boldpoker/edeliver) - Elixir および Erlang 用のデプロイツール。
* [elixir-on-docker](https://github.com/CrowdHailer/elixir-on-docker) - クラウド環境向けにクラスタアプリケーションを開発するためのプロジェクトテンプレート。
* [exdm](https://github.com/joeyates/exdm) - mix タスクを使って Elixir アプリケーションをデプロイ。
* [exreleasy](https://github.com/miros/exreleasy) - Elixir アプリケ及のリリースに最適化された、シンプルで Mix と互換性のあるツール。
* [gatling](https://github.com/hashrocket/gatling) - git から exrm リリースを作成し、サーバー上で自動的に起動・アップグレードを行う mix タスクのコレクション。
* [Gigalixir](https://www.gigalixir.com) - Elixir 用の完全機能の PaaS。クラスタリング、ホットアップグレード、リモートコンソール/オブザーバーをサポート。無料で試用可能（クレジットカード不要）。
* [heroku-buildpack-elixir](https://github.com/HashNuke/heroku-buildpack-elixir) - Heroku に Elixir アプリケーションをデプロイするための Heroku ビルドパック。

## ドキュメント <a id="documentation"></a>
*ドキュメントに関するElixirライブラリと資料です。*

* [bureaucrat](https://github.com/api-hogs/bureaucrat) - テストから Phoenix API ドキュメントを生成。
* [ex_doc](https://github.com/elixir-lang/ex_doc) - ExDoc は、Elixir プロジェクトのドキュメントを生成するツール。
* [ex_doc_dash](https://github.com/JonGretar/ExDocDash) - ExDoc 用のフォーマッターで、Dash.app 用のドキュメントセットを生成。
* [hexdocset](https://github.com/yesmeck/hexdocset) - hex ドキュメントを Dash.app のドキュメントセットフォーマットに変換。
* [inch-ci](http://inch-ci.org/) - Ruby および Elixir 用のドキュメントバッジ。
* [maru_swagger](https://github.com/falood/maru_swagger) - maru API に Swagger に準拠したドキュメントを追加。
* [phoenix_api_docs](https://github.com/smoku/phoenix_api_docs) - フェノックスフレームワークにおけるコントローラーとテストからAPIブループリントドキュメントを生成する
* [phoenix_swagger](https://github.com/xerions/phoenix_swagger) - フェノックスフレームワークへのスワッグ統合を提供する
* [xcribe](https://github.com/brainn-co/xcribe) - スワッグ（OpenAPI）またはAPIブループリント仕様を使用してテストからAPIドキュメントを生成する

## ドメイン固有言語 <a id="domain-specific-language"></a>
*ドメイン固有言語に関するElixirライブラリと資料です。*

* [Absinthe Graphql](https://github.com/absinthe-graphql/absinthe) - 完全に機能するGraphQLライブラリ
* [absinthe_gen](https://github.com/sashman/absinthe_gen) - アブシスのスケルトンジェネレータ
* [JSON-LD.ex](https://github.com/marcelotto/jsonld-ex) - [JSON-LD](http://www.w3.org/TR/json-ld/) の標準を [RDF.ex](https://github.com/marcelotto/rdf-ex) に実装したもの
* [RDF.ex](https://github.com/marcelotto/rdf-ex) - [RDF](https://www.w3.org/TR/rdf11-primer/) のデータモデルを Elixir で実装したもの
* [SPARQL.ex](https://github.com/marcelotto/sparql-ex) - [SPARQL](http://www.w3.org/TR/sparql11-overview/) の標準を Elixir で実装したもの

## ECMAScript <a id="ecmascript"></a>
*ECMAScriptに関するElixirライブラリと資料です。*

* [elixirscript](https://github.com/elixirscript/elixirscript/) - ElixirからJavaScriptへのトランスコンパイラ
* [estree](https://github.com/bryanjos/elixir-estree) - Elixirで実装されたスパイダーモンキーパーサーAPI
* [phoenix_gon](https://github.com/khusnetdinov/phoenix_gon) - フェノックス環境またはコントローラー変数をJavaScriptに問題なく渡すことができる
* [phoenix_routes_js](https://github.com/khusnetdinov/phoenix_routes_js) - フェノックスルートヘルパーをJavaScriptコードおよびブラウザコンソールで使用可能にする

## メール <a id="email"></a>
*メールに関するElixirライブラリと資料です。*

* [bamboo](https://github.com/thoughtbot/bamboo) - 合成可能でテスト可能かつアダプタベースのメールライブラリ。フェノックスでのレンダリングを標準でサポートし、開発時に送信メールをプレビューできるプラグインを提供する
* [burnex](https://github.com/Betree/burnex) - バーナーメール（一時アドレス）検出機能
* [echo](https://github.com/zmoshansky/echo) - メタ通知システム；エコーは通知設定を確認し、通知を送信する
* [ex_postmark](https://github.com/KamilLelonek/ex_postmark) - Elixirでテンプレートメールを送信するためのポストマーカードアダプタ
* [gen_smtp](https://github.com/Vagabond/gen_smtp) - 汎用的なElixirSMTPサーバーとクライアントで、コールバックモジュールを介して拡張可能
* [gmail](https://github.com/craigp/elixir-gmail) - Elixir向けのシンプルなGmail REST APIクライアント
* [mail](https://github.com/DockYard/elixir-mail) - Elixirで構築されたRFC2820実装、合成性を重視した設計
* [mailer](https://github.com/antp/mailer) - シンプルなSMTPメール送信機能
* [mailibex](https://github.com/awetzel/mailibex) - Elixirに含まれるメール関連実装（dkim、spf、dmark、mimemail、smtp）を含むライブラリ
* [mailman](https://github.com/kamilc/mailman) - Mailmanは、あなたのElixirアプリケーション内でメールを明確に定義するための方法を提供する
* [pop3mail](https://hex.pm/packages/pop3mail) - インボックスからメール（添付ファイルを含む）をコマンドラインまたはElixirAPIでダウンロードするためのPOP3クライアント
* [ravenx](https://github.com/acutario/ravenx) - Elixirアプリケーション向けの通知送信ライブラリ
* [smoothie](https://github.com/jfrolich/smoothie) - メールテンプレートのスムーズなインラインスタイルと、HTMLからプレーンテキストバージョンを生成します
* [swoosh](https://github.com/swoosh/swoosh) - SMTP、Sendgrid、Mandrill、Mailgun、Postmarkなど多数のサービスに対応したアダプタを使って、Elixirでメール（添付ファイル付き）を簡単に作成・配信・テストできます。また、Phoenixとのマイルボックスプレビュー統合も提供しています

## 組み込みシステム <a id="embedded-systems"></a>
*組み込みシステムに関するElixirライブラリと資料です。*

* [nerves](http://nerves-project.org) - Elixir で埋め込みソフトウェアを書くためのフレームワーク

## エンコードと圧縮 <a id="encoding-and-compression"></a>
*エンコードと圧縮に関するElixirライブラリと資料です。*

* [ex_rlp](https://github.com/exthereum/ex_rlp) - EthereumのRLP（再帰長前綴）エンコーディングをElixirで実装
* [huffman](https://github.com/tyre/huffman) - Elixirにおけるハフマン符号化と復号

## エラーと例外処理 <a id="errors-and-exception-handling"></a>
*エラーと例外処理に関するElixirライブラリと資料です。*

* [AppSignal Elixir](https://github.com/appsignal/appsignal-elixir) - Elixir 用の公式 [AppSignal](https://appsignal.com/) パッケージ
* [elixir_error_message](https://github.com/MikaAK/elixir_error_message) - システム内のエラーを予測可能でJSONやログに簡単に表示できるためのシンプルなエラーヘルパー
* [exceptional](https://github.com/expede/exceptional) - 成功経路プログラミングと例外処理のためのヘルパー
* [happy](https://github.com/vic/happy) - Elixirの `with` 形式への成功経路プログラミングの代替案
* [OK](https://github.com/CrowdHailer/OK) - 結果モナドを用いたエラーハンドリングで、シンプルで強力な `with`構文と成功経路パイプ演算子を提供
* [sentry-elixir](https://github.com/getsentry/sentry-elixir) - Elixir 用の公式 [Sentry](https://sentry.io/) クライアント

## イベント処理 <a id="eventhandling"></a>
*イベント処理に関するElixirライブラリと資料です。*

* [cizen](https://gitlab.com/cizen/cizen) - サガのコレクションを使って、高スケーラビリティ、監視性、拡張性を持つアプリケーションを構築できます
* [event_bus](https://github.com/mustafaturan/event_bus) - トピックフィルタリングと内蔵イベントストア、イベントウォッチャーを備えたシンプルなイベントバス実装
* [goldrush](https://github.com/DeadZen/goldrush) - Erlang/OTPアプリケーション向けの高速かつ小型のイベント処理と監視
* [reaxive](https://github.com/alfert/reaxive) - Reaxive は、[Elm](http://elm-lang.org) および Reactive Extensions にインスパイアされた反応型イベント処理ライブラリ
* [wait_for_it](https://github.com/jvoegele/wait_for_it) - 並列処理の同期を簡単かつ便利に実現するための機能を提供

## サンプルと興味深いもの <a id="examples-and-funny-stuff"></a>
*サンプルと興味深いものに関するElixirライブラリと資料です。*

* [butler_cage](https://github.com/keathley/butler_cage) - Nick Cageの面白い写真を表示するButlerプラグイン
* [butler_tableflip](https://github.com/keathley/butler_tableflip) - Butlerでテーブルをひっくり返す
* [changelog.com](https://github.com/thechangelog/changelog.com) - changelog.comをPhoenix 1.4で構築したCMS
* [coderplanets.com](https://github.com/coderplanets/coderplanets_server) - coderplanets.comのGraphQL API（Phoenix 1.4とAbsintheで構築）
* [dice](https://github.com/stocks29/dice) - Elixirでサイコロを振る
* [elixir_koans](https://github.com/elixirkoans/elixir-koans) - [Elixir koans](http://elixirkoans.io/) は、Elixir プログラミング言語に始めることを楽しく、簡単にできる方法
* [ex_iss](https://github.com/cryptobird/ex_iss) - このパッケージは、ISSの現在位置、乗組員、その場所を通過する時間などの情報にアクセスするためのOpen Notify APIとのインターフェースを提供します
* [feedx](https://github.com/erneestoc/feedx) - 現在のアプリケーションにソーシャルフィード機能を追加。OTPのアンブレラアプリケーションの例（3アプリ）を示す。Thin Phoenixコントローラー付き
* [harakiri](https://github.com/rubencaro/harakiri) - ヘルプアプリケーションが自分自身を終了するようにする。
* [hello_phoenix](https://github.com/bigardone/phoenix-react-redux-template) - Phoenix、ReactおよびReduxを用いたSPA向けアプリケーションテンプレート。
* [hexpm](https://github.com/hexpm/hexpm) - Phoenix 1.3で構築されたhexパッケージマネージャーサイトのソースコード。
* [koans](https://github.com/dojo-toulouse/elixir-koans) - elixir-koansを使ってElixirを学ぶ。
* [lolcat](https://github.com/restartr/ex-lolcat) - busyloop/lolcatのクローンだが、アニメーションや元の機能の一部をサポートしていない。
* [magnetissimo](https://github.com/sergiotapia/magnetissimo) - すべての人気あるトレントサイトをインデックスし、ローカルデータベースに保存するウェブアプリケーション。
* [oop](https://github.com/wojtekmach/oop) - ElixirにおけるOOP。
* [phoenix-chat-example](https://github.com/dwyl/phoenix-chat-example) - 完全初心者向けに、Phoenixでチャットアプリを構築するステップバイステップの例／チュートリアル。テスト、ドキュメント、デプロイまでカバー。Phoenix `1.5.3`。
* [phoenix-ecto-encryption-example](https://github.com/dwyl/phoenix-ecto-encryption-example) - Phoenix 1.4アプリでEcto Typesを使ってデータを透明に暗号化／復号する方法を示す包括的な例／チュートリアル。
* [phoenix-flux-react](https://github.com/fxg42/phoenix-flux-react) - Phoenix Channels、GenEvents、ReactおよびFluxを使った実験。
* [phoenix-liveview-counter-tutorial](https://github.com/dwyl/phoenix-liveview-counter-tutorial) - 初心者向けステップバイステップチュートリアル：Phoenix `1.5.3` および LiveView `0.14.1` でリアルタイムカウンターを構築
* [phoenix-todo-list-tutorial](https://github.com/dwyl/phoenix-todo-list-tutorial) - 完全初心者向けに、PhoenixからゼロからTodoリストを構築するステップバイステップチュートリアル。Phoenix `1.5.3`。
* [real world example app](https://github.com/gothinkster/elixir-phoenix-realworld-example-app) - Elixir / Phoenix での [RealWorld.io](https://realworld.io/) バックエンド仕様の実装 — Medium のクローン
* [rollex](https://gitlab.com/olhado/rollex) - Prattパーサーアルゴリズムを用いたElixirライブラリでダイスのロールを計算する。
* [rubix](https://github.com/YellowApple/Rubix) - 非常にシンプル（かつほとんど機能しない）なElixir用Rubyランナー。
* [stranger](https://github.com/cazrin/stranger) - Elixir Phoenixアプリで、ランダムに選ばれた他人と匿名でチャットできる。
* [tilex](https://github.com/hashrocket/tilex) - HashrocketのTILウェブサイトのソースコード（Phoenix 1.3で構築）。
* [weather](https://github.com/tacticiankerala/elixir-weather) - Elixirを使って構築されたコマンドライン型天気アプリ。

## 機能フラグとトグル <a id="feature-flags-and-toggles"></a>
*機能フラグとトグルに関するElixirライブラリと資料です。*

* [ConfigCat](https://github.com/configcat/elixir-sdk) - ConfigCatホスト型機能フラグサービス向けのElixir SDK。
* [flippant](https://github.com/sorentwo/flippant) - Elixir世界における機能フラッピング。
* [fun_with_flags](https://github.com/tompave/fun_with_flags) - RedisまたはEctoを使用して永続化し、ETSキャッシュで高速化し、PubSubで分散キャッシュのブーストを行う機能切り替えライブラリ。PhoenixおよびPlug向けの管理WebUIを提供。
* [molasses](https://github.com/securingsincity/molasses) - RedisまたはSQL（Ectoを使用）をバックエンドとして使う機能切り替えライブラリ。

## フィード <a id="feeds"></a>
*フィードに関するElixirライブラリと資料です。*

* [atomex](https://github.com/Betree/atomex) - ATOMフィードビルダーで、標準適合性、セキュリティ、拡張性に重点を置いている。
* [feeder](https://github.com/michaelnisi/feeder) - RSSおよびATOMフィードのパース。
* [feeder_ex](https://github.com/manukall/feeder_ex) - RSSフィードパーサー。シンプルなフィードエラーワッパー。
* [feedme](https://github.com/umurgdk/elixir-feedme) - Erlangのxmerl XMLパーサーをベースにしたRSS/ATOMパーサー。

## ファイルとディレクトリ <a id="files-and-directories"></a>
*ファイルとディレクトリに関するElixirライブラリと資料です。*

* [Belt](https://bitbucket.org/pentacent/belt/) - SFTP、S3、ファイルシステムストレージをサポートする拡張可能なファイルアップロードライブラリ。
* [dir_walker](https://github.com/pragdave/dir_walker) - DirWalkerは、1つ以上のディレクトリツリーを深さ優先で遅延的に走査し、順次ファイル名を返す。
* [elixgrep](https://github.com/bbense/elixgrep) - ファイルコレクションに対してHadoopスタイルのMap/Reduce操作を行うためのフレームワーク。
* [ex_guard](https://github.com/slashmili/ex_guard) - ExGuardは、ファイルシステムの変更イベントを処理するためのmixコマンド。
* [ex_minimatch](https://github.com/gniquil/ex_minimatch) - ツリーを走査せずにパスをグローバル。
* [exfile](https://github.com/keichan34/exfile) - ElixirおよびPlugでファイルアップロードの処理、永続化、処理を行う。
* [exfswatch](https://github.com/falood/exfswatch) - __fs__に基づいたファイル変更監視のラッパー。
* [eye_drops](https://github.com/rkotze/eye_drops) - ファイル変更を監視し、対応するコマンドを実行する、カスタマイズ可能なmixタスク。
* [format_parser.ex](https://github.com/ahtung/format_parser.ex) - ファイルのタイプとフォーマットを特定するElixirライブラリ。
* [fs](https://github.com/synrc/fs) - Erlangのファイルシステムリスナー。
* [fwatch](https://github.com/ryo33/fwatch-ex) - __fs__に基づいたコールバックベースのファイル監視。
* [ivcu](https://github.com/elixir-ivcu/ivcu) - ファイルバリデーション、変換、アップロード。
* [librex](https://github.com/ricn/librex) - LibreOfficeを使用してオフィスドキュメントを他のフォーマットに変換するElixirライブラのライブラリ。
* [Radpath](https://github.com/lowks/Radpath) - PythonのEnhpathをインスピレーションとして作られたElixirのパスライブラリ。
* [sentix](https://github.com/whitfin/sentix) - fswatchに基づくElixirのプラットフォームを越えたファイル監視。
* [sizeable](https://github.com/arvidkahl/sizeable) - ファイルサイズを人間が読みやすい形に変換するElixirライブラリ。
* [waffle](https://github.com/elixir-waffle/waffle) - Elixir用の柔軟なファイルアップロードおよび添付ライブラリ
* [zarex](https://github.com/ricn/zarex) - Elixir用のファイル名のセイフティ処理

## フォーム <a id="forms"></a>
*フォームに関するElixirライブラリと資料です。*

* [forms](https://github.com/spawnproc/forms) - Erlang ビジネスドキュメント生成ツール

## フレームワーク部品 <a id="framework-components"></a>
*フレームワーク部品に関するElixirライブラリと資料です。*

* [absinthe_plug](https://github.com/absinthe-graphql/absinthe_plug) - Absinthe用のPlugサポート
* [access pass](https://github.com/AppDoctorIo/accesspass) - Phoenix で使用またはそれ以外で使用できる認証フレームワーク。Addict に類似しているが、API 使用に特化している。([Docs](https://hexdocs.pm/access_pass/api-reference.html#content))
* [addict](https://github.com/trenpixster/addict) - Phoenixフレームワーク用のユーザー認証
* [airbrake_plug](https://github.com/romul/airbrake_plug) - Plugスタックやその他の部分でエラーをAirbrakeに報告
* [Backpex](https://github.com/naymspace/backpex) - Phoenix LiveView アプリケーション向けの高度にカスタマイズ可能な管理パネル。([Docs](https://hexdocs.pm/backpex/), [Demo](https://backpex.live/))
* [better_params](https://github.com/sheharyarn/better_params) - ウェブアプリケーション向けにリクエストパラメータをよりクリーンに扱うElixir Plug
* [blaguth](https://github.com/lexmag/blaguth) - Plugアプリケーションでの基本的なアクセス認証
* [commanded](https://github.com/slashdotdash/commanded) - コマンド・クエリ責務分離（CQRS）アプリケーション向けのコマンド処理ミドルウェア
* [cors_plug](https://github.com/mschae/cors_plug) - ElixirのプラグがリクエストにCORSヘッダーを追加し、プリフライトリクエスト（OPTIONS）に対応
* [corsica](https://github.com/whatyouhide/corsica) - Elixir用のCORSリクエスト処理ライブラリ
* [crudex](https://github.com/bitgamma/crudex) - PhoenixおよびEcto向けのCRUDユーティリティ
* [dayron](https://github.com/inaka/Dayron) - REST API リクエストに応じて動作する、`Ecto.Repo` に類似したリポジトリ
* [ex_admin](https://github.com/smpallen99/ex_admin) - ExAdminはElixirおよびPhoenixフレームワーク向けの自動管理パッケージ
* [exdjango](https://github.com/nicksanders/exdjango) - Djangoとの作業に必要ないくつかのElixirライブラリ
* [exrecaptcha](https://github.com/adanselm/exrecaptcha) - Elixirアプリケーション向けのシンプルなreCaptcha表示・検証コード
* [filterable](https://github.com/omohokcoj/filterable) - Rails has_scopeをインスピレーションとして、Phoenixフレームワーク向けのシンプルなクエリパラメータフィルタリング
* [graphql_parser](https://github.com/graphql-elixir/graphql_parser) - [libgraphqlparser](https://github.com/graphql/libgraphqlparser) への Elixir のバインディング
* [http_router](https://github.com/sugar-framework/elixir-http-router) - アプリケーション開発やコードの整理を支援する各種マクロを備えたHTTPルーター
* [kerosene](https://github.com/elixirdrops/kerosene) - EctoおよびPhoenix向けのページネーション
* [live_vue](https://github.com/Valian/live_vue) - Phoenix LiveViewおよびVue向けの端末から端末までの一貫した反応性
* [mellon](https://github.com/sajmoon/mellon) - Plugアプリケーション向けの認証モジュール
* [multiverse](https://github.com/Nebo15/multiverse) - APIリクエスト/レスポンスゲートウェイを介してバージョン互換性レイヤーを追加できるPlug
* [params](https://github.com/vic/params) - Ectoを使用してパラメータ構造を強制・検証する。Railsのstrong parametersに類似。
* [phoenix_ecto](https://github.com/phoenixframework/phoenix_ecto) - PhoenixとEctoの統合。
* [phoenix_haml](https://github.com/chrismccord/phoenix_haml) - Phoenix用のHamlテンプレートエンジン。
* [phoenix_html](https://github.com/phoenixframework/phoenix_html) - Phoenix.HTML関数によるHTML文字列やテンプレートの処理。
* [phoenix_html_sanitizer](https://github.com/elixirstatus/phoenix_html_sanitizer) - Phoenix用のHTMLスニファイザーの統合。
* [phoenix_html_simplified_helpers](https://github.com/ikeikeikeike/phoenix_html_simplified_helpers) - Phoenix.HTML用のいくつかのヘルパー（truncate、time_ago_in_words、number_with_delimiter）。
* [phoenix_linguist](https://github.com/jxs/phoenix_linguist) - PhoenixとLinguistを統合したプロジェクト。プラグインとビューヘルパーを提供。しかし、このプロジェクトは廃止されている。最終コミットは2015年であり、CIはElixir 1.0.3を実行している。
* [phoenix_live_reload](https://github.com/phoenixframework/phoenix_live_reload) - Phoenix向けのライブリロード機能を提供。
* [phoenix_meta_tags](https://github.com/hlongvu/phoenix_meta_tags) - ウェブサイトにメタタグを生成。
* [phoenix_pubsub_postgres](https://github.com/opendrops/phoenix-pubsub-postgres) - Phoenixアプリ向けのPostgreSQL PubSubアダプタ。
* [phoenix_pubsub_rabbitmq](https://github.com/pma/phoenix_pubsub_rabbitmq) - PhoenixのPubSub層向けのRabbitMQアダプタ。
* [phoenix_pubsub_redis](https://github.com/phoenixframework/phoenix_pubsub_redis) - Phoenixフレームワーク向けのRedis PubSubアダプタ。
* [phoenix_pubsub_vernemq](https://github.com/larshesel/phoenix_pubsub_vernemq) - Phoenixフレームワーク向けのVerneMQ MQTT pubsubアダプタ。
* [phoenix_slime](https://github.com/slime-lang/phoenix_slime) - Phoenix向けのSlimテンプレートサポート。
* [phoenix_storybook](https://github.com/phenixdigital/phoenix_storybook) - あなたのPhoenixコンポーネントに使えるプラグイン式のストーリーボード。
* [phoenix_svg](https://github.com/jsonmaur/phoenix-svg) - PhoenixでインラインSVGを使用。
* [phoenix_token_auth](https://github.com/manukall/phoenix_token_auth) - Phoenix向けのトークン認証ソリューション。APIやシングルページアプリに有用。
* [phoenix_turnstile](https://github.com/jsonmaur/phoenix-turnstile) - Cloudflare TurnstileとCAPTCHAをPhoenixで使用するためのコンポーネントとヘルパー。
* [phx_component_helpers](https://github.com/cblavier/phx_component_helpers) - ボイラープレートなしで拡張可能なlive_components。
* [plug](https://github.com/elixir-lang/plug) - ウェブアプリ間のコンポジブルモジュールの仕様と便利な機能。
* [plug_accesslog](https://github.com/mneudert/plug_accesslog) - アクセスログの記録用のプラグイン
* [plug_and_play](https://github.com/henrik/plug_and_play) - 少ないコードでプラグインアプリを構築できる設定
* [plug_auth](https://github.com/bitgamma/plug_auth) - 認証に関連するプラグインのコレクション
* [plug_canonical_host](https://github.com/remiprev/plug_canonical_host) - すべてのリクエストが一つのcanonicalホストから提供されるようにするプラグイン
* [plug_checkup](https://github.com/ggpasqualino/plug_checkup) - アプリにシンプルなヘルスチェックを追加するプラグイン
* [plug_cloudflare](https://github.com/c-rack/plug_cloudflare) - mod_cloudflareをインスピレーションとして、CloudflareのCF-Connecting-IP HTTPヘッダーをPlug.Connのremote_ipフィールドにパースするプラグイン
* [plug_forward_peer](https://github.com/awetzel/plug_forwarded_peer) - RFC7239に従ってX-Forwarded-ForまたはForwardedヘッダーを読み取り、conn.remote_ipにルートクライアントIPを埋め込む非常にシンプルなプラグイン
* [plug_fprof](https://github.com/obmarg/plug_fprof) - リクエストにfprofトレースを追加するプラグインで、簡単にプロファイリングが可能になる
* [plug_heartbeat](https://github.com/whatyouhide/plug_heartbeat) - ハートビートリクエストへの応答を行うプラグ及
* [plug_jwt](https://github.com/bryanjos/plug_jwt) - JWT認証を行うプラグイン
* [plug_password](https://github.com/azranel/plug_password) - シンプルなクッキーベース認証を追加するプラグイン
* [plug_rails_cookie_session_store](https://github.com/cconstantin/plug_rails_cookie_session_store) - Railsと互換性のあるプラグインセッションストア
* [plug_redirect_https](https://github.com/stocks29/plug_redirect_https) - リバースプロキシの後ろでHTTPリクエストをHTTPSリクエストにリダイレクトするプラグイン
* [plug_require_header](https://github.com/DevL/plug_require_header) - HTTPヘッダーの要求と抽出および欠落したものを処理する
* [plug_response_header](https://github.com/c-rack/plug_response_header) - HTTPレスポンスヘッダーの簡単な操作
* [plug_ribbon](https://github.com/stnly/plug_ribbon) - 開発環境においてウェブアプリケーションにリボンを挿入するプラグイン
* [plug_secex](https://github.com/techgaun/plug_secex) - Phoenix/Elixirアプリケーションをより安全にするためにさまざまなHTTPヘッダーを追加するプラグイン
* [plug_session_memcached](https://github.com/gutschilla/plug-session-memcached) - Elixirのプラグイン用の非常にシンプルなmemcachedセッションストア
* [plug_sigaws](https://github.com/handnot2/plug_sigaws) - Phoenix/Plug ルート向けの AWS Signature V4 認証保護 ([Docs](https://hexdocs.pm/plug_sigaws/PlugSigaws.html))
* [plug_statsd](https://github.com/jeffweiss/plug_statsd) - 自動的にタイミングとカウントメトリクスをstatsdに送信するプラグイン
* [pluggable](https://github.com/mruoss/pluggable) - 自作のトークンを使って `plug` に似たパイプラインを構築（ `%Plug.Conn{}` ではなく）
* [plugs](https://github.com/sugar-framework/plugs) - ウェブアプリケーション向けのプラグインミドルウェアのコレクション
* [plugsnag](https://github.com/jarednorman/plugsnag) - Elixirのplug向けのBugsnag通知者
* [raygun](https://github.com/cobenian/raygun) - バグをキャプチャしRaygunに送信
* [react_phoenix](https://github.com/geolessel/react-phoenix) - PhoenixビューでReact.jsコンポーネントをレンダリング。インストールの容易さとBrunchとの互換性に焦点を当てる
* [recaptcha](https://github.com/samueljseay/recaptcha) - Elixirアプリケーション向けのシンプルなreCaptcha 2ライブラリ
* [resin](https://github.com/Frost/resin) - Resinは、すべてのリクエストに設定可能な遅延を追加するplugであり、プロダクション環境ではその機能が無効になる
* [revision_plate_ex](https://github.com/KazuCocoa/revision_plate_ex) - Plugアプリケーションとミドルウェアでエンドポイントの返却結果にアプリケーションのREVISIONを提供
* [rummage_ecto](https://github.com/Excipients/rummage_ecto) - Ectoクエリの検索、ソート、ページネーションを行うための設定可能なフレームワーク
* [rummage_phoenix](https://github.com/Excipients/rummage_phoenix) - Phoenixでモデルの検索、ソート、ページネーションを行うためのサポートフレームワーク（HTML対応）
* [scaffold](https://github.com/gausby/scaffold) - Gitリポジトリからテンプレートを取得して新しいプロジェクトを作成するためのmixタスク
* [scrivener](https://github.com/drewolson/scrivener) - Ectoクエリのページネーション
* [scrivener_headers](https://github.com/doomspork/scrivener_headers) - ScrivenerとHTTPヘッダーを使ってAPIレスポンスのページネーションをサポートするヘルパー
* [scrivener_html](https://github.com/mgwidmann/scrivener_html) - Scrivenerのページ構造と連携したヘルパーで、さまざまなCSSフレームワーク向けのHTML出力を作成しやすい
* [sentinel](https://github.com/britton-jb/sentinel) - Phoenix向けの認証フレームワーク。Guardianにルーティングやその他の基本機能を追加
* [surface](https://github.com/msaraiva/surface) - Phoenix向けのサーバーサイドレンダリング用のコンポーネントライブラリ
* [torch](https://github.com/infinitered/torch) - TorchはPhoenixアプリ向けの迅速な管理画面生成ツール。ジェネレーターを使用することで、コードの維持性を確保する
* [trailing_format_plug](https://github.com/mschae/trailing_format_plug) - Elixirアプリケーション向けの古いAPIをサポートするrails風のフォーマットを用いたプラグイン
* [turn_the_page](https://hex.pm/packages/turn_the_page) - Elixirアプリケーション向けの高速でシンプルかつ軽量なページネーションシステム
* [webassembly](https://github.com/herenowcoder/webassembly) - Elixir向けのWebDSL
* [weebo](https://github.com/stevenschobert/weebo) - Elixir向けのXML-RPCパーサー/フォーマッター。データ型マッピングに完全なサポートを提供

## フレームワーク <a id="frameworks"></a>
*フレームワークに関するElixirライブラリと資料です。*

* [Ash Framework](https://github.com/ash-project/ash) - Elixir向けの宣言型・リソース中心のアプリケーションフレームワーク
* [exelli](https://github.com/pigmej/exelli) - Elli向けのElixirラッパー。便利な構文糖を備える
* [Flowbite](https://flowbite.com/docs/getting-started/phoenix/) - Tailwind CSSで構築されたオープンソースUIコンポーネントライブラリ。Phoenix/Elixirと互換性がある
* [Hologram](https://github.com/bartblast/hologram) - ElixirのクライアントサイドコードをスマートにJavaScriptに変換するフルスタックElixirウェブフレームワーク
* [kitto](https://github.com/kittoframework/kitto) - インタラクティブなダッシュボード向けのフレームワーク
* [n2o](https://github.com/synrc/n2o) - 分散型アプリケーションサーバー
* [nitro](https://github.com/synrc/nitro) - Nitrogenと互換性のあるウェブフレームワーク
* [Petal Components](https://github.com/petalframework/petal_components) - HEEXのコンポーネントセットで、Phoenix開発者が美しいウェブアプリを簡単に構築できるようにする
* [phoenix](https://github.com/phoenixframework/phoenix) - リアルタイム機能を備えた、完全に機能的で障害に強いアプリケーションをターゲットとしたElixirウェブフレームワーク
* [placid](https://github.com/slogsdon/placid) - Elixirで構築された、高度にスケーラブルかつ障害に強いHTTP APIを構築するためのRESTツールキット
* [rackla](https://github.com/AntonFagerberg/rackla) - ElixirにおけるAPIゲートウェイ
* [relax](https://github.com/AgilionApps/relax) - [jsonapi.org](http://jsonapi.org)サーバーのシンプルなElixir実装。
* [rest](https://github.com/synrc/rest) - タイプ付きJSONを備えたマイクロ-RESTフレームワーク
* [RIG](https://github.com/Accenture/reactive-interaction-gateway) - 状態のないマイクロサービス向けに、低遅延かつインタラクティブなユーザー体験を提供
* [sugar](https://github.com/sugar-framework/sugar) - Elixir向けのモジュラリーフレームワーク
* [trot](https://github.com/hexedpackets/trot) - Elixir向けのウェブマイクロフレームワーク


## ゲーム <a id="games"></a>
*ゲームに関するElixirライブラリと資料です。*

* [Binbo](https://github.com/DOBRO/binbo) - Erlangで書かれたチェス表現（[Bitboards](https://www.chessprogramming.org/Bitboards)を使用）で、ゲームサーバー上で使用可能。
* [ECSx](https://hexdocs.pm/ecsx/initial_setup.html) - エンティティ・コンポーネント・システムフレームワークで、バトルシップゲームをチュートリアルとして提供（[read more on Dockyard blog](https://dockyard.com/blog/2023/07/06/ecsx-a-new-approach-to-game-development-in-elixir)）。
* [entice](https://github.com/entice/entice) - 分散型エンティティ・コンポーネート・システムフレームワーク。自作のMMORPGサーバーを提供する。
* [mines](https://github.com/kevlar1818/mines) - ターミナル上で実行されるマインスイーパーのクローン
* [pictionary](https://github.com/Arp-G/pictionary) - マルチプレイヤーの予想と描画ゲーム（[skribbl.io](https://skribbl.io/)クローン）。
* [rayex](https://github.com/shiryel/rayex) - ゲームプログラミング用のRaylibのElixirバインディング
* [Rovex](https://github.com/emadb/rovex) - Elixirで実装されたマーズローバーの kata を、基本的なマルチプレイヤーゲームに変換したもの
* [vim_snake](https://github.com/theanht1/vim_snake) - Phoenixフレームワークで構築された、Vimスタイルのキーバインディングを備えた古典的なマルチプレイヤー蛇ゲーム

## 位置情報 <a id="geolocation"></a>
*位置情報に関するElixirライブラリと資料です。*

* [distance_api_matrix](https://github.com/C404/distance-matrix-api) - Google距離マトリクスAPIを介して距離と方向の計算を提供
* [geo](https://github.com/bryanjos/geo) - Elixir 用の GIS 関数のコレクション
* [geocalc](https://github.com/yltsrc/geocalc) - 経度/緯度ポイント間の距離、方位などを計算
* [geocoder](https://github.com/knrz/geocoder) - シンプルで効率的な地理コード/逆地理コード（内部キャッシュ付き）
* [geohash](https://github.com/polmuz/elixir-geohash) - GeoHash のエンコード／デコードライブラリ
* [geohash_nif](https://github.com/wstucco/geohash_nif/) - GeoHash エンコード／デコードライブラリを NIF として実装した drop-in リプレース
* [geohax](https://github.com/evuez/geohax) - GeoHash のエンコード／デコードと隣接領域の探索
* [geoip](https://github.com/navinpeiris/geoip) - 指定されたIPアドレス、ホスト名または`Plug.Conn`に対して地理位置を検索。
* [geolix](https://github.com/mneudert/geolix) - MaxMind GeoIP2 データベースの読み取り／デコード
* [geonames](https://github.com/pareeohnos/geonames-elixir) - GeoNames API へのシンプルな Elixir ワッパー
* [ip2location](https://github.com/nazipov/ip2location-elixir) - IP2Location データベース用の Elixir ライブラリ
* [ipgeobase](https://github.com/sergey-chechaev/elixir_ipgeobase) - IP アドレスからロシアおよびウクライナの都市を特定し、他の国については国を特定
* [proj](https://github.com/CandyGumdrop/proj) - OSGeo の PROJ.4 を使用した Elixir 用の座標変換ライブラリ
* [segseg](https://github.com/pkinney/segseg_ex) - セグメント間の交差分類および計算
* [srtm](https://github.com/adriankumpf/srtm) - NASA シャトルレーダー地形調査ミッションからの標高データの位置情報の照合
* [topo](https://github.com/pkinney/topo) - 2つの幾何学的オブジェクト間の空間関係を計算する Elixir 用の幾何学ライブラリ
* [wheretz](https://github.com/UA3MQJ/wheretz) - 地理座標による時区の照合を行う Ruby グラムの Elixir バージョン

## GUI <a id="gui"></a>
*GUIに関するElixirライブラリと資料です。*

* [scenic](https://github.com/boydm/scenic) - ポータブルな2DUIフレームワーク。

## ハードウェア <a id="hardware"></a>
*ハードウェアに関するElixirライブラリと資料です。*

* [elixir-circuits](https://github.com/elixir-circuits) - ElixirによるハードウェアI/Oインターフェース（GPIO、I2C、SPIなど）へのアクセス（旧バージョン[elixir_ale](https://github.com/fhunleth/elixir_ale)）。
* [nerves](https://github.com/nerves-project/nerves) - ラズベリーパイやベーグルブラックなどのプラットフォーム向けファームウェアを構築するためのフレームワーク。

## HTML <a id="html"></a>
*Libraries and implementations working with HTML (for xml tools please go to the [XML](#xml) section).*

* [floki](https://github.com/philss/floki) - CSS 選択子を用いた検索を可能にするシンプルな HTML パーサー
* [html_sanitize_ex](https://github.com/rrrene/html_sanitize_ex) - Elixir 用の HTML サニタイザー
* [meseeks](https://github.com/mischov/meeseeks#html) - CSSまたはXPathセレクタを使ってHTMLおよびXMLからデータを解析・抽出するライブラリ
* [modest_ex](https://github.com/f34nk/modest_ex) - HTML 文字列に対してパイプ可能な変換を行うライブラのための CSS 選択子を用いたライブラリ、たとえば find()、prepend()、append()、replace() など
* [myhtmlex](https://github.com/Overbryd/myhtmlex) - lexborisov の myhtml の Elixir/Erlang バインディング
* [readability](https://github.com/keepcosmos/readability) - 読みやすさは、記事を抽出・キュレーションするための機能です。
* [texas](https://gitlab.com/dgmcguire/texas) - テキサスは、サーバーサイドレンダリングとサーバーサイドの仮想DOMの差分/パッチ処理を使ってクライアントを更新するための強力な抽象化です。
* [tidy_ex](https://github.com/f34nk/tidy_ex) - ElixirによるHTMLツールの祖 [http://www.html-tidy.org](http://www.html-tidy.org)へのバインディング。
* [vnu-elixir](https://github.com/angelikatyborska/vnu-elixir) - Elixirによる [Nu HTML Checker](https://validator.w3.org/nu/)クライアント。HTML、CSS、SVGのバリデーションを提供。

## HTTP <a id="http"></a>
*HTTPに関するElixirライブラリと資料です。*

* [Ace](https://github.com/CrowdHailer/Ace) - HTTPウェブサーバーとクライアント、HTTP1とHTTP2をサポートしています。
* [cauldron](https://github.com/meh/cauldron) - Elixir上で動作するHTTP/SPDYサーバーとしてのライブラリです。
* [Crawler](https://github.com/fredwu/crawler) - Elixirで構築された高性能なウェブクロールツールです。
* [Crawly](https://github.com/oltarasenko/crawly) - Elixir向けの高レベルウェブクロールおよびスクレイピングフレームワークです。
* [elli](https://github.com/knutin/elli) - ElliはErlangアプリケーション内で実行できるウェブサーバーで、HTTP APIを公開できます。
* [etag_plug](https://github.com/sascha-wolf/etag_plug) - シンプルで使いやすい浅いETagプラグインです。
* [explode](https://github.com/pkinney/explode) - PlugおよびPhoenixベースのアプリケーションで標準HTTP/JSONエラーレスポンスを返すための簡単なユーティリティです。
* [exvcr](https://github.com/parroty/exvcr) - Elixir向けのHTTPリクエスト/レスポンス記録ライブラリで、VCRにインスパイアされています。
* [finch](https://github.com/sneako/finch) - パフォーマンスに焦点を当てたHTTPクライアントで、MintとNimblePoolに基づいて構築されています。
* [fuzzyurl](https://github.com/gamache/fuzzyurl.ex) - URLのパース、構成、ワイルドカードマッチングを行うElixirライブラリ。また、[Ruby](https://github.com/gamache/fuzzyurl.rb)および[JavaScript](https://github.com/gamache/fuzzyurl.js)にも提供。
* [gun](https://github.com/ninenines/gun) - Erlang/OTP上で動作するHTTP/1.1、HTTP/2およびWebsocketクライアントです。
* [hackney](https://github.com/benoitc/hackney) - Erlangで書かれたシンプルなHTTPクライア特です。
* [http](https://github.com/slogsdon/http) - Elixir向けのHTTPサーバーです。
* [http_digex](https://github.com/techgaun/http_digex) - 基本的なディジェストHTTP認証ヘッダーを作成するためのモジュールです。
* [http_proxy](https://github.com/KazuCocoa/http_proxy) - マルチポートHTTPプロキシです。
* [httpoison](https://github.com/edgurgel/httpoison) - hackneyをベースにしたElixir向けのもう一つのHTTPクライアントです。
* [httpotion](https://github.com/myfreeweb/httpotion) - ibrowseをベースにしたElixir向けの魅力的なHTTPクライアントです。
* [ivar](https://github.com/swelham/ivar) - HTTPoisonのラッパーを軽量に実装し、HTTPリクエストの構築をフロントと組み合わせて行えるように提供します。
* [lhttpc](https://github.com/talko/lhttpc) - Erlangで実装された軽量なHTTP/1.1クライアントです。
* [mint](https://github.com/ericmj/mint) - Elixir 用の機能的な HTTP クライアント。HTTP/1 および HTTP/2 をサポート。
* [mnemonic_slugs](https://github.com/devshane/mnemonic_slugs) - Elixir での記憶に残る、頭に残るスラグ生成器。
* [mochiweb](https://github.com/mochi/mochiweb) - MochiWeb は、軽量 HTTP サーバーを構築するための Erlang ライブラリ。
* [neuron](https://github.com/uesteibar/neuron) - Elixir 用の GraphQL クライアント。
* [plug_wait1](https://github.com/wait1/plug_wait1) - wait1 プロトコル用の Plug アダプタ。
* [raxx](https://github.com/CrowdHailer/raxx) - HTTP ウェブサーバー、フレームワークおよびクライアント向けのインターフェース。
* [req](https://github.com/wojtekmach/req) - Elixir 用の、すべての機能を内包した HTTP クライアント。
* [river](https://github.com/peburrows/river) - 軽量かつ高速な HTTP/2 クライア特。
* [scrape](https://github.com/Anonyfox/elixir-scrape) - 簡単にウェブサイト、記事、RSS/Atom フィードをスクレイピングできる。
* [sparql_client](https://github.com/marcelotto/sparql_client) - Elixir向けの[SPARQL protocol](https://www.w3.org/TR/sparql11-protocol/)クライアント。
* [SpiderMan](https://github.com/feng19/spider_man) - Elixir 用の、Broadway に基づく高速かつ高レベルのウェブスクレイピング・スクレイピングフレームワーク。
* [tesla](https://github.com/teamon/tesla) - ミドルウェアおよび複数アダプタをサポートする HTTP クライアント ライブラリ。
* [Tube](https://github.com/narrowtux/Tube) - 純 Elixir の WebSocket クライアント ライブラリ。
* [uri_query](https://github.com/shhavel/uri_query) - Elixir でネストされた GET パラメータおよび配列値を URI エンコードする。
* [uri_template](https://github.com/pezra/ex-uri-template) - Elixir 用の RFC6570 に準拠した URI テンプレートプロセッサ。
* [web_socket](https://github.com/slogsdon/plug-web-socket) - Plug アプリケーション向けに、WebSockets を簡単に導入できる、独立したライブラリの探索。
* [webdriver](https://github.com/stuart/elixir-webdriver) - WebDriver プロトコル クライアントの実装。現在は PhantomJS、FireFox、ChromeDriver およびリモート webdriver サーバー（例：Selenium）をサポート。
* [yuri](https://github.com/kemonomachi/yuri) - URI を表すためのシンプルな構造体。

## 画像 <a id="images"></a>
*画像に関するElixirライブラリと資料です。*

* [alchemic_avatar](https://github.com/zhangsoledad/alchemic_avatar) - 文字列からレターアバターを生成する Elixir ライブラリ。
* [artifact](https://github.com/doomspork/artifact) - Elixir でのファイルアップロードおよび即時処理。
* [bump](https://github.com/evanfarrar/ex_bump) - 純 Elixir による BMP ファイルライター。
* [chunky_svg](https://github.com/mmmries/chunky_svg) - SVGでものを描くためのライブラリ
* [cloudex](https://github.com/smeevil/cloudex) - CloudexはElixirのライブラリで、画像ファイルまたはURLをCloudinaryにアップロードできる
* [eikon](https://github.com/tchoutri/Eikon) - JPEGファイルに対してEXIFタグおよびサムネイルデータを読み取るElixirのライブラリ
* [elixir_exif](https://github.com/sschneider1207/ElixirExif) - JPEGファイルからEXIFタグおよびサムネイルデータをパースするElixirのライブラリ
* [ex_image_info](https://github.com/rNoz/ex_image_info) - 画像（バイナリ）をパースし、各画像フォーマットのサイズ、検出されたMIMEタイプ、全体の有効性を取得するElixirのライブラ特
* [exexif](https://github.com/pragdave/exexif) - JPEGファイルからTIFFおよびEXIFメタデータを抽出する純Elixirのライブラリ
* [exfavicon](https://github.com/ikeikeikeike/exfavicon) - faviconsを発見するためのElixirのライブラリ
* [gi](https://github.com/LangPham/gi) - GraphicsMagickコマンドラインのElixirのラッパー
* [identicon](https://github.com/rbishop/identicon) - 5x5のアイデンティコンを生成するためのElixirのライブラリ
* [image64](https://hex.pm/packages/image64) - base64エンコードされた画像を扱うためのツール
* [imagineer](https://github.com/SenecaSystems/imagineer) - Elixirで画像をパースする
* [imgex](https://github.com/ianwalter/imgex) - imgix URLを生成するためのElixirの非公式クライアントライブラリ
* [mogrify](https://github.com/route/mogrify) - ImageMagickコマンドラインのElixirのラッパー
* [png](https://github.com/yuce/png) - PNG画像を作成するための純Erlangのライブラリ。現在は8ビットおよび16ビットのRGB、RGB＋アルファ、インデックス、グレースケール、グレースケール＋アルファの画像を作成できる
* [thumbnex](https://github.com/talklittle/thumbnex) - 画像および動画スクリーンショットからサムネイルを作成する
* [thumbor_client](https://github.com/globocom/thumbor-client-ex) - Thumbor向けのクライアント

## 計測／監視 <a id="instrumenting--monitoring"></a>
*計測／監視に関するElixirライブラリと資料です。*

* [app_optex](https://github.com/sashman/app_optex) - AppOptics API向けのクライアント。メトリクスとタグをAppOpticsのタイムシリーズサービスに送信する
* [appsignal-elixir](https://github.com/appsignal/appsignal-elixir/) - Elixirアプリケーションからのエラーおよびパフォーマンスデータを収集し、[AppSignal](https://appsignal.com/)に送信。
* [elixometer](https://github.com/pinterest/elixometer) - exometerに対する軽量なElixirのラッパー
* [erlang-metrics](https://github.com/benoitc/erlang-metrics) - Erlangにおけるさまざまなメトリクスシステムへの汎用インターフェース
* [exometer](https://github.com/Feuerlabs/exometer) - Erlangにおける基本的なメトリクスオブジェクトとプローブの振る舞い
* [folsom_ddb](https://github.com/dalmatinerdb/folsom_ddb) - ダルマティンDBバックエンドでフォルソムメトリクスを保存
* [graphitex](https://github.com/msoedov/graphitex) - Elixir向けのグラフティ/カーボンクライアント
* [instream](https://github.com/mneudert/instream) - Elixir向けのインフラスDBドライバー
* [instrumental](https://github.com/undeadlabs/instrumental-ex) - Elixir向けの[Instrumental](https://instrumentalapp.com/)クライアント。
* [newrelic.ex](https://github.com/romul/newrelic.ex) - Elixir/Phoenixアプリケーションからのメトリクスを収集し、[NewRelic](https://newrelic.com/)に送信。
* [prom_ex](https://github.com/akoutmos/prom_ex) - すべての愛用Elixirライブラリ向けのプロメテウスメトリクスおよびグラファナダッシュボード
* [prometheus](https://github.com/deadtrickster/prometheus.erl) - [Prometheus.io](https://prometheus.io)によるエラントのモニタリングシステムおよび時系列データベースクライアント
* [prometheus-ecto](https://github.com/deadtrickster/prometheus-ecto) - プロメテウス.ex向けのエクソ儀器（Ecto用）
* [prometheus-phoenix](https://github.com/deadtrickster/prometheus-phoenix) - プロメテウス.ex向けのフェノックス儀器
* [prometheus-plugs](https://github.com/deadtrickster/prometheus-plugs) - プロメテウス.ex向けのプラグ儀器およびエクスポート
* [prometheus.ex](https://github.com/deadtrickster/prometheus.ex) - Elixir向けの[Prometheus.io](https://prometheus.io)モニタリングシステムおよび時系列データベースクライアント
* [prometheus_process_collector](https://github.com/deadtrickster/prometheus_process_collector) - プロセスメトリクスの現在状態をエクスポートするプロメテウスコレクタ。CPU、メモリ、ファイルディスクリプタ使用量およびネイティブスレッド数、プロセス開始および起動時間などを含む。
* [spandex](https://github.com/spandex-project/spandex) - Datadog APM向けに開発されたプラットフォームに依存しないトレースライブラリ
* [telemetry](https://github.com/beam-telemetry/telemetry) - メトリクスおよびインストルメンテーション向けの動的ディスパッチングライブラリ
* [wobserver](https://github.com/shinyscorpion/wobserver) - ウェブベースのメトリクス、モニタリング、およびオブザーバー

## JSON <a id="json"></a>
*JSONに関するElixirライブラリと資料です。*

* [exjson](https://github.com/guedes/exjson) - Elixir向けのJSONパーサーおよびジェネレーター
* [ja_serializer](https://github.com/AgilionApps/ja_serializer) - Elixir向けのJSONAPI.orgシリアライズ
* [jason](https://github.com/michalmuskala/jason) - 純Elixirによる高速JSONパーサーおよびジェネレーター
* [jazz](https://github.com/meh/jazz) - ElixirでJSONを扱うためのもう一つのライブラリ
* [joken](https://github.com/bryanjos/joken) - JSONウェブトークンの暗号化およびデコード
* [jose](https://github.com/potatosalad/erlang-jose) - ErlangおよびElixir向けのJSONオブジェクト署名および暗号化（JOSE）
* [json](https://github.com/cblage/elixir-json) - Elixir向けのネイティブJSONライブラリ
* [json_pointer](https://github.com/xavier/json_pointer) - RFC 6901 が定める JSON ドキュメント内の特定の値を識別するための文字列構文の実装
* [json_stream_encoder](https://github.com/TreyE/json_stream_encoder) - Elixir における JSON をストリーミングで出力するストリーミングエンコーダー JsonStreamEncoder
* [json_web_token_ex](https://github.com/garyf/json_web_token_ex) - JSON ワーク・トークン (JWT) スタンドアードトラック (RFC 7519) の Elixir 対応実装
* [jsonapi](https://github.com/jeregrine/jsonapi) - データモデルを[JSONAPI Documents](http://jsonapi.org/format/)にレンダリングするプロジェクト。
* [jsonc](https://github.com/massivefermion/jsonc) - [jsonc](https://komkom.github.io/jsonc-playground)（JSONのスーパーセット）を扱うためのユーティリティ。
* [jsx](https://github.com/talentdeficit/jsx) - Erlang で JSON を消費・生成・操作するアプリケーション
* [jwalk](https://github.com/jr0senblum/jwalk) - Erlang における JSON の表現を扱うためのヘルパーモジュール
* [jwtex](https://github.com/mschae/jwtex) - [JWT tokens](http://jwt.io/)をエンコードおよびデコードするライブラリ。
* [poison](https://github.com/devinus/poison) - Poison は Elixir 用の新しい JSON ライブラリで、高速性を重視しつつ、シンプルさ、完全性、正確性を犠牲にせずに設計されている
* [tiny](https://github.com/whitfin/tiny) - Elixir 用の小さく、高速で完全に準拠した JSON パーサー
* [world_json](https://github.com/camshaft/world_json_ex) - elixir/erlang 用の topojson の国および州/都道府県コレクション

## 言語 <a id="languages"></a>
*言語に関するElixirライブラリと資料です。*

* [Elchemy](https://github.com/wende/elchemy) - Elm プログラミング言語のコードを Elixir に変換するコンパイラ
* [lighthouse_scheme](https://github.com/jwhiteman/lighthouse-scheme) - Elixir で構築された小さな Lisp 風の言語とインタラクティブな REPL
* [Monkey](https://github.com/fabrik42/writing_an_interpreter_in_elixir) - js 風の Monkey プログラミング言語のインタープリタと REPL の Elixir 対応実装

## 字句解析 <a id="lexical-analysis"></a>
*字句解析に関するElixirライブラリと資料です。*

* [abnf_parsec](https://github.com/princemaple/abnf_parsec) - ABNF の入力とパーサーの出力
* [ex_abnf](https://github.com/marcelog/ex_abnf) - Elixir における ABNF 文法のパーサー
* [lex_luthor](https://github.com/jamesotron/lex_luthor) - LexLuthor は Elixir で構築されたレキサーモジュールで、マクロを使って再利用可能なレキサーモジュールを生成する

## ロギング <a id="logging"></a>
*ロギングに関するElixirライブラリと資料です。*

* [bunyan](https://github.com/bunyan-logger/bunyan) - Bunyan: Elixir のログ出力ライブラリ
* [ecto_dev_logger](https://github.com/fuelen/ecto_dev_logger) - Ecto クエリ用の代替ログ出力ライブラリでデバッグを支援
* [exlager](https://github.com/khia/exlager) - Erlang の lager との Elixir のバインディング
* [gelf_logger](https://github.com/jschniper/gelf_logger) - ログバックエンドでグレイログ拡張ログフォーマット (GELF) メッセージを生成する
* [honeybadger](https://github.com/honeybadger-io/honeybadger-elixir) - ログおよびカスタムイベントを[Honeybadger](https://www.honeybadger.io/)に送信。
* [json_logger](https://github.com/LeeroyDing/json_logger) - JSON ロガーは Elixir のログを JSON フォーマットで出力するログバックエンド
* [lager](https://github.com/basho/lager) - basho.com が開発した Erlang/OTP 用のログフレームワーク
* [lager_logger](https://github.com/PSPDFKit-labs/lager_logger) - ラガーバックエンドで、すべてのログメッセージをElixirのLoggerに転送する
* [logfmt](https://github.com/jclem/logfmt-elixir) - ログフォーマットはログフォーマットスタイルのログラインをエンコードおよびデコードするモジュール
* [logger_logstash_backend](https://github.com/marcelog/logger_logstash_backend) - ElixirのLoggerのバックエンドで、ログをLogstashのUDP入力に送信する
* [logglix](https://github.com/pragmaticivan/logglix) - エラーをLogglyへ投稿するためのElixir Loggerバックエンド
* [logster](https://github.com/navinpeiris/logster) - PhoenixおよびPlugアプリケーション向けに、Logrageをインスピレーションとして設計された、簡単にパース可能な1行ログ
* [metrix](https://github.com/rwdaigle/metrix) - アプリケーションのカスタムメトリクスをstdoutにログ出力し、Libratoやその他の後続プロセスで使用
* [mstore](https://github.com/dalmatinerdb/mstore) - MStoreはErlangで構築された実験的なメトリクスストアであり、主な機能はopen、new、getおよびputである
* [quiet_logger](https://github.com/Driftrock/quiet_logger/pull/1) - ヘルスチェックログを抑制するためのシンプルなプラグ（例：Kubernetesを使用する場合）
* [rogger](https://github.com/duartejc/rogger) - ElixirのLoggerでログメッセージをRabbitMQに公開する
* [rollbax](https://github.com/elixir-addicts/rollbax) - 例外の追跡およびログ記録を[Rollbar](https://rollbar.com/)に実施。
* [slack_logger_backend](https://github.com/craigp/slack_logger_backend) - エラーログをSlackに投稿するためのElixir Loggerのバックエンド
* [syslog](https://github.com/Vagabond/erlang-syslog) - syslog(3)を介してsyslogと相互作用するErlangポートドライバー
* [timber](https://github.com/timberio/timber-elixir) - 構造化ログプラットフォーム；原始的なテキストログを豊かな構造化イベントに変換
* [youtrack_logger_backend](https://github.com/unifysell/youtrack_logger_backend) - [YouTrack](https://www.jetbrains.com/youtrack/)（JetBrainsが開発した問題トラッカー）にメッセージを投稿するログバックエンド

## マクロ <a id="macros"></a>
*マクロに関するElixirライブラリと資料です。*

* [anaphora](https://github.com/sviridov/anaphora-elixir) - AnaphoraはElixir向けの指し示しマクロコレクションである。指し示しマクロとは、マクロに提供されたフォームから意図的に変数（通常はit）をキャプチャするマクロである
* [apix](https://github.com/liveforeverx/apix) - Elixir関数をAPIに変換するためのシンプルな規則とDSL。その後のドキュメンテーションやバリデーションに使用可能
* [backports](https://github.com/leifg/backports) - Elixir 1.1および1.2で新たに追加された関数を使用する
* [crudry](https://github.com/gabrielpra1/crudry) - CrudryはPhoenixのコンテキストおよびAbsintheのリゾルバーにおけるCRUDをDRY化するためのElixirライブラリである
* [eventsourced](https://github.com/slashdotdash/eventsourced) - 機能的でイベントベースのドメインモデルを構築する
* [expat](https://github.com/vic/expat) - Elixirのライブラリ間で再利用可能かつ組み合わせ可能なパターンを提供する
* [guardsafe](https://github.com/DevL/guardsafe) - 守備文脈で安全に使用できるコードに展開されるマクロ
* [kwfuns](https://github.com/RobertDober/lab42_defkw) - キーワードパラメータに基づく構文を持つ関数を作成するためのマクロ
* [lineo](https://github.com/camshaft/lineo) - パーストランスフォームによる正確な行番号の取得
* [matcha](https://github.com/christhekeele/matcha) - Elixirの`:ets`クエリおよび関数呼び出しトレースに用いる、第一クラスのマッチ規格
* [mdef](https://github.com/pragdave/mdef) - Elixirで複数の関数ヘッドを簡単に定義
* [named_args](https://github.com/mgwidmann/named_args) - Elixirにおける名前付き引数スタイルのサポート
* [ok_jose](https://github.com/vic/ok_jose) - `{:ok,_}`、`{:error,_}`のタプルまたはカスタムパターンにマッチするElixir関数をパイプする
* [opus](https://github.com/zorbash/opus) - プラグイン可能なビジネスロジックコンポーネントのフレームワーク
* [pathex](https://github.com/hissssst/pathex) - ゼロ依存、高速な関数レンズ
* [pattern_tap](https://github.com/mgwidmann/elixir-pattern_tap) - パイプ演算子を使用する際のパターンマッチにアクセスするマクロ
* [pipe_here](https://github.com/vic/pipe_here) - 任意の引数位置に値をパイプで渡す
* [pipes](https://github.com/batate/elixir-pipes) - Elixirパイプ演算子とのより柔軟な組み合わせを可能にするマクロ
* [pit](https://github.com/vic/pit) - パイプ内で値が流れている際に変換を行う
* [rebind](https://github.com/camshaft/rebind) - Erlang用の再バインドパーストランスフォーム
* [rulex](https://github.com/awetzel/rulex) - Elixirのパターンマッチを用いたシンプルなルールハンドラー
* [shorter_maps](https://github.com/meyercm/shorter_maps) - ~Mシグイルによるマップの短縮表記。`~M{id name} ~> %{id: id, name: name}`。
* [then](https://github.com/bardoor/then) - after関数コールバックを簡単に設定する方法
* [typed_struct](https://github.com/ejpcmac/typed_struct) - 型を指定して構造体を定義するためのElixirライブラリ（ボイラープレートコードを書かず）
* [typed_structor](https://github.com/elixir-typed-structor/typed_structor) - 型を簡単に定義して構造体を定義するためのライブラリ
* [unsafe](https://github.com/whitfin/unsafe) - Elixir関数に安全でない(!)バインディングを簡単に生成

## Markdown <a id="markdown"></a>
*Markdownに関するElixirライブラリと資料です。*

* [cmark](https://github.com/asaaki/cmark.ex) - Elixir NIF（Cによる）CommonMarkパーサー（CommonMark仕様に従う）
* [discount](https://github.com/asaaki/discount.ex) - Elixir NIF（Markdownパーサー：discount）
* [earmark](https://github.com/pragdave/earmark) - Elixir用のMarkdownパーサー
* [Markdown](https://github.com/devinus/markdown) - 完全にホエドンライブラリへのNIFバインディングで実装
* [Pandex](https://github.com/filterkaapi/pandex) - 軽量なElixirのPandocラッパー。Markdown、CommonMark、HTML、Latex、HTML、HTML5、opendocument、rtf、texttile、asciidocを互いに変換

## その他 <a id="miscellaneous"></a>
*その他に関するElixirライブラリと資料です。*

* [address_us](https://github.com/smashedtoatoms/address_us) - US住所を各部分に分割するためのライブラリ
* [AlloyCI](https://github.com/AlloyCI/alloy_ci) - AlloyCIはElixirで書かれた継続的統合、デプロイ、デリバリーのコアディレクターであり、GitLab CI Runnerの実行者としての機能を活用して、パイプラインを準備・実行する
* [Apex](https://github.com/bjro/apex) - Elixir用の素晴らしいプリントライブラリ
* [AtomVM](https://github.com/bettio/AtomVM) - AtomVMはESP32やSTM32などの埋め込みデバイス上でElixir/Erlangコードを実行できる
* [bupe](https://github.com/milmazz/bupe) - EPUB生成と解析ライブラリ
* [charm](https://github.com/tomgco/elixir-charm) - ANSIテキストキャラクタを用いて色やカーソル位置を表示
* [codec-beam](https://github.com/hkgumbs/codec-beam) - HaskellからErlangVMバイトコードを生成
* [Countries](https://github.com/SebastianSzturo/countries) - ISO 3166標準のすべての国に関する多様な有用な情報が収録されたコレクション
* [countriex](https://github.com/navinpeiris/countriex) - ISO 316及のすべての国に関する多様な情報を含む純Elixirの国データプロバイダー
* [cubdb](https://github.com/lucaong/cubdb) - CubDBはElixir言語で書かれた埋め込みキーバリューデータベースであり、ローカルに実行され、スキーマなしで、1つのファイルにバックアップされている
* [dye](https://github.com/Kabie/dye) - ターミナル出力の色付けを行うためのライブラリ
* [dynamic_compile](https://github.com/okeuday/dynamic_compile) - 文字列入力からErlangモジュールをコンパイル・ロード
* [ecto_autoslug_field](https://github.com/sobolevn/ecto_autoslug_field) - Ectoモデルに自動的にスラッグを生成
* [egaugex](https://github.com/Brightergy/egaugex) - egaugeデバイスからのリアルタイムデータを取得・解析するクライアント
* [elixir-browser](https://github.com/tuvistavie/elixir-browser) - Elixir用のブラウザ検出ライブラリ
* [epub_cover_extractor](https://github.com/zelazna/epub_cover_extractor) - EPUBファイルからカバーを抽出
* [erlang_term](https://github.com/okeuday/erlang_term) - Erlang項のメモリ上のサイズを提供し、保存場所を無視
* [ex2ms](https://github.com/ericmj/ex2ms) - Elixir関数を`ets`に使用可能なマッチ規格に変換する
* [ex_azure_speech](https://github.com/ex-azure/ex_azure_speech) - Microsoft Azure Speech Service向けのElixir SDK実装
* [ex_phone_number](https://github.com/socialpaymentsbv/ex_phone_number) - 電話番号のフォーマット、標準化、検証
* [ex_rated](https://github.com/grempe/ex_rated) - APIやその他の用途に対するシンプルで柔軟なレート制限
* [exfcm](https://github.com/Hajto/ExFCM) - Firebase Cloud Messages への投稿用のシンプルなラッパー
* [exisbn](https://github.com/solar05/exisbn) - ISBN の検証とフォーマット用のライブラリ
* [exldap](https://github.com/jmerriweather/exldap) - Elixir から LDAP を扱うためのモジュール
* [exlibris](https://github.com/pragdave/exlibris) - ランダムなライブラリ関数を集めたコレクション
* [expool](https://github.com/whitfin/expool) - Elixir での並列タスクに使う小さなプロセスプーリングライブラリ
* [exprint](https://github.com/parroty/exprintf) - Elixir 用の printf / sprintf ライブラリ、:io.format へのラッパーとして動作
* [expyplot](https://github.com/MaxStrange/expyplot) - matplotlib.pyplot を使った可視化/グラフ描画ライブラリの Elixir インターフェース
* [exquisite](https://github.com/meh/exquisite) - Elixir 用の LINQ 風の match_spec 生成
* [exsync](https://github.com/falood/exsync) - もう一つの Elixir 再読み込みライブラリ
* [funnel](https://github.com/chatgris/funnel) - ElasticSearch の percolation をベースにしたストリーミング Elixir API
* [gen_task](https://github.com/Nebo15/gen_task) - クラシック GenStage でエラーを封じ込めて回復するための汎用タスク行動
* [gimei_ex](https://github.com/ma2gedev/gimei_ex) - gimei ライブラリの Elixir 版
* [growl](https://github.com/zachallett/growl) - growl 通知システムへのシンプルなラッパー
* [hammer](https://github.com/ExHammer/hammer) - Redis を含むプラグイン可能なストレージバックエンドを備えたレート制御ライブラリ
* [html_entities](https://github.com/martinsvalin/html_entities) - Elixir で文字列内の HTML エンティティをデコードするためのモジュール
* [huex](https://github.com/xavier/huex) - Philips Hue に接続された照明に使う Elixir クライアント
* [indicado](https://github.com/thisiscetin/indicado) - 依存関係のない Elixir 用の技術指標ライブラリ
* [japan_municipality_key](https://github.com/hykw/japan_municipality_key) - 日本地方自治体キーを変換するための Elixir ライブラリ
* [Jisho-Elixir](https://github.com/nbw/jisho_elixir) - Jisho.org のオンライン日本語辞書向け API ラッパー。単語、記号、またはタグで検索可能（ドキュメントを参照）
* [keys1value](https://github.com/okeuday/keys1value) - Erlang のセットアソシエイティブマップ（キーのリスト用）
* [licensir](https://github.com/unnawut/licensir) - プロジェクトにインストールされたパッケージのすべてのライセンスを一覧表示するMixタスク
* [mixgraph](https://github.com/sivsushruth/mixgraph) - Hexパッケージ用のインタラクティブな依存関係プロットツール
* [mixstar](https://github.com/ma2gedev/mix-star) - MixStarがあなたのプロジェクトに依存しているGitHubリポジトリ
* [netrc](https://github.com/ma2gedev/netrcex) - Elixirで実装されたnetrcファイルを読み込む
* [notifier](https://hex.pm/packages/notifier) - デスクトップ通知用のプラグインアーキテクチャ
* [onetime](https://github.com/ryo33/onetime-elixir) - Elixir用の一時的なキー値ストア
* [pact](https://github.com/BlakeWilliams/pact) - Elixirにおけるより良い依存性注入により、コードとテストをシンプルに
* [passbook](https://github.com/Bounceapp/ex_passbook) - Apple Wallet（.pkpass）ファイルを作成するElixirライブラリ
* [phone](https://github.com/fcevado/phone) - 電話番号から有用な情報を取得するパーサー
* [porcelain](https://github.com/alco/porcelain) - PorcelainはElixirから外部OSプロセスを起動・通信するためのより合理的なアプローチを実装
* [presentex](https://github.com/Cobenian/Presentex) - ElixirベースのHTML/JavaScriptによるプレゼンテーションフレームワーク
* [quarantine](https://github.com/leorog/quarantine) - Quarantineは機能切り替え用の小さなOTPアプリケーション
* [ratekeeper](https://github.com/whitered/ratekeeper) - レート制限とレート制限付きアクションスケジューラ
* [ratx](https://github.com/liveforeverx/ratx) - Erlangアプリケーション向けのレート制限とオーバーロード保護
* [reprise](https://github.com/herenowcoder/reprise) - Elixir用の簡易なモジュール再読み込み
* [spawndir](https://github.com/jtmoulia/spawndir) - ファイルシステムからプロセスをスパーン
* [spotify_ex](https://github.com/jsncmgs1/spotify_ex) - Spotify Web API用のElixirラッパー
* [std_json_io](https://github.com/hassox/std_json_io) - JSONを介してIOサーバーの管理と通信を行うアプリケーション
* [url_unroller](https://github.com/semanticart/url_unroller) - ElixirによるシンプルなURL展開（短縮URLの解消）
* [vessel](https://github.com/whitfin/vessel) - ElixirのMapReduceがHadoop Streamingとの統合
* [weighted_random](https://github.com/JohnJocoo/weighted_random) - 重み付きランダム選択

## ネイティブ実装関数 <a id="native-implemented-functions"></a>
*ネイティブ実装関数に関するElixirライブラリと資料です。*

* [hsnif](https://github.com/urbanserj/hsnif) - Erlang NIFライブラリをHaskellで書くことができるツール
* [nifty](https://github.com/rossjones/nifty) - NIFを書く際に必要なテンプレートを設定するための補助スクリプト
* [Rustler](https://github.com/hansihe/Rustler) - ErlangまたはElixir向けに安全にRustでNIFを書くためのライブラリ。セグフォが発生しない

## 自然言語処理（NLP） <a id="natural-language-processing-nlp"></a>
*自然言語処理（NLP）に関するElixirライブラリと資料です。*

* [gibran](https://github.com/abitdodgy/gibran) - Gibranは、[WordsCounted](https://github.com/abitdodgy/words_counted)（自然言語処理ツール）のElixir版であり、テキストから有用な統計情報を抽出する
* [Paasaa](https://github.com/minibikini/paasaa) - Elixir向けの自然言語検出
* [Petrovich](https://github.com/petrovich/petrovich_elixir) - Elixirでロシア語の名前（初め、最後、中間）を変形するライブラリ
* [Tongue](https://github.com/dannote/tongue) - Nakatani Shuyoの自然言語検出器をElixirに移植したもの
* [Woolly](https://github.com/pjhampton/woolly) - WoollyはElixir向けのテキストマイニングおよび自然言語処理API

## ネットワーク <a id="networking"></a>
*ネットワークに関するElixirライブラリと資料です。*

* [asn](https://github.com/ephe-meral/asn) - IPからAS、ASNにマッピングできる
* [chatter](https://github.com/dbeck/chatter_ex) - UDPマルチキャストとTCPを組み合わせたセキュアなメッセージブロードキャスト
* [download](https://github.com/asiniy/download) - インターネットからファイルを簡単にダウンロードできる
* [eio](https://github.com/falood/eio) - engine.ioのElixirサーバー
* [ExPcap](https://github.com/cobenian/expcap) - Elixirで書かれたPCAPパーサー
* [Firezone](https://github.com/firezone/firezone) - Linux向けのオープンソースVPNサーバーおよびエグリッジファイアウォール。WireGuardをベースに構築。Firezoneは設定が簡単（すべての依存関係がChef Omnibusでバンドルされている）、安全で、パフォーマンスが高く、自前でホスト可能
* [FlyingDdns](https://gitlab.com/timopallach/FlyingDdns) - Elixirで書かれたdynDNSサーバー
* [hades](https://github.com/fklement/hades) - Elixirで書かれたNMAPのラッパー
* [mac](https://github.com/ephe-meral/mac) - IEEEに従って与えられた16進数のMACアドレスからベンダーを特定できる
* [pool](https://github.com/slogsdon/pool) - Elixir向けのソケット受付プール
* [reagent](https://github.com/meh/reagent) - reagentはElixir向けのソケット受付プール
* [sise](https://github.com/aytchell/sise) - シンプルで使いやすいSSDPクライアント
* [sockerl](https://github.com/Pouriya-Jahanbakhsh/sockerl) - SockerlはTCPプロトコル向けの高度なErlang/Elixirソケットライブラリであり、サーバー、クライアント、クライアント接続プールの実装に必要な高速かつ便利で使いやすいAPIを提供する.
* [socket](https://github.com/meh/elixir-socket) - Elixir向けのソケットラッピング.
* [sshkit](https://github.com/bitcrowd/sshkit.ex) - ErlangのSSHアプリケーションに基づいた、1つ以上のサーバー上でタスクを実行するElixir用ツールキット.
* [torex](https://github.com/alexfilatov/torex) - シンプルなTor接続ライブラリ.
* [tunnerl](https://github.com/surik/tunnerl) - SOCKS4およびSOCKT5プロキシサーバー.
* [wifi](https://github.com/gausby/wifi) - ElixirでローカルWi-Fiネットワークを操作するための各種ユーティリティ関数.
* [wpa_supplicant](https://github.com/fhunleth/wpa_supplicant.ex) - Elixir向けのwpa_supplicantインターフェース.

## オフィス <a id="office"></a>
*オフィスに関するElixirライブラリと資料です。*

* [elixlsx](https://github.com/xou/elixlsx) - XLSXファイルを出力するライブラリ.
* [excellent](https://github.com/leifg/excellent) - Elixir向けのOpenXL（Excel 2000）パーサー.
* [xlsxir](https://github.com/kennellroxco/xlsxir) - ISO 8601形式の日付をサポートするXLSXファイルパーサー。データはErlangのTermストレージ（ETS）テーブルに抽出され、さまざまな関数を通じてアクセスされる.

## ORMとデータマッピング <a id="orm-and-datamapping"></a>
*ORMとデータマッピングに関するElixirライブラリと資料です。*

* [amnesia](https://github.com/meh/amnesia) - Mnesia向けのElixirラッパー.
* [arbor](https://github.com/coryodaniel/arbor) - Ectoによる隣接リストおよび木構造の走査.
* [arc_ecto](https://github.com/stavro/arc_ecto) - Arc.EctoはArcとEctoとの統合を提供する.
* [atlas](https://github.com/chrismccord/atlas) - Elixir向けのオブジェクト・リレーションシップ・マッパー（ORM）.
* [barrel_ex](https://github.com/jxub/barrel_ex) - Elixirで書かれた[Barrel-db](https://barrel-db.org/)の分散ドキュメント指向データベースのRESTクライアント
* [Bolt.Sips](https://github.com/florinpatrascu/bolt_sips) - Boltプロトコルを使用したElixir向けのNeo4jドライバー.
* [boltun](https://github.com/bitgamma/boltun) - PostgresのLISTEN/NOTIFYメカニズムからの通知をコールバック実行に変換する.
* [caylir](https://github.com/mneudert/caylir) - Cayley向けのElixirドライバー.
* [comeonin_ecto_password](https://github.com/vic/comeonin_ecto_password) - Comeoninを使用して暗号化されたパスワードを保存するためのEctoのカスタム型.
* [couchdb_connector](https://github.com/locolupo/couchdb_connector) - ErlangベースのJSONドキュメントデータベースCouchDBとの接続用のコンネクタ.
* [database_url](https://github.com/s-m-i-t-a/database_url) - データベースURLをパースし、Ecto用のキーワードリストを返す。
* [datomex](https://github.com/edubkendo/datomex) - Datomic REST API 用の Elixir ドライバー
* [ddb_client](https://github.com/dalmatinerdb/ddb_client) - DalmatinerDB クライアント
* [defql](https://github.com/fazibear/defql) - SQL を体として Elixir 関数を作成
* [dexts](https://github.com/meh/dexts) - ディスク上の Elixir テームストレージ、dest ワッパー
* [diver](https://github.com/novabyte/diver) - Jinterface と Asynchbase Java クライアントを使用した Erlang/Elixir 用の HBase ドライバー
* [dproto](https://github.com/dalmatinerdb/dproto) - DalmatinerDB 用のプロトコル
* [dqe](https://github.com/dalmatinerdb/dqe) - DalmatinerDB クエリエンジン
* [ecto](https://github.com/elixir-ecto/ecto) - Elixir 用のデータベースラッパーおよび言語統合クエリ
* [ecto_anon](https://github.com/WTTJ/ecto_anon) - Ecto スキーマ内でデータの匿名化を直接処理するためのシンプルな方法
* [ecto_cassandra](https://github.com/cafebazaar/ecto-cassandra) - Ecto 用の Cassandra DB アダプタ
* [ecto_enum](https://github.com/gjaldon/ecto_enum) - Ecto に enum をモデルにサポートする拡張
* [ecto_facade](https://github.com/azranel/ecto_facade) - 読み書きを異なるデータベースに分離できる Ecto フェイサイド
* [ecto_factory](https://hex.pm/packages/ecto_factory) - Ecto スキーマに基づいて構造を簡単に生成
* [ecto_fixtures](https://github.com/DockYard/ecto_fixtures) - Ecto を使用する Elixir アプリケーション用のフィクスチャ
* [ecto_lazy_float](https://github.com/joshdholtz/ecto-lazy-float) - Ecto.LazyFloat - バイナリや整数を受け入れる Ecto.Float
* [ecto_list](https://github.com/popo63301/ecto_list) - Ecto によるシンプルな順序モデル管理
* [ecto_migrate](https://github.com/xerions/ecto_migrate) - Ecto 自動マイグレーションライブラリ。初期および更新マイグレーションの生成と実行を可能にする
* [ecto_mnesia](https://github.com/Nebo15/ecto_mnesia) - Mnesia Erlang テームデータベース用の Ecto アダプタ
* [ecto_ordered](https://github.com/zovafit/ecto-ordered) - 順序モデルをサポートする Ecto 拡張
* [ecto_paging](https://github.com/Nebo15/ecto_paging) - Ecto 用のカーソルベースのページネーション
* [ecto_psql_extras](https://github.com/pawurb/ecto_psql_extras) - Ecto PostgreSQLデータベースパフォーマンスインサイト
* [ecto_rut](https://github.com/sheharyarn/ecto_rut) - シンプルで強力なEctoショートカットで開発を簡略化・加速
* [ecto_shortcuts](https://github.com/MishaConway/ecto_shortcuts) - Ectoにおけるよく使う操作のショートカット
* [ecto_shortuuid](https://github.com/gpedic/ecto_shortuuid) - Ectoの型で、[ShortUUIDs](https://github.com/gpedic/ex_shortuuid)のサポートを追加する
* [ecto_validation_case](https://github.com/danielberkompas/ecto_validation_case) - Ectoモデルバリデーションテストを簡易に。shoulda matchersにやや影響を受けたが、シンプルに設計。
* [ecto_watch](https://github.com/cheerfulstoic/ecto_watch) - PostgreSQLから直接データベース変更の通知を簡単に取得できる機能。
* [ectophile](https://github.com/gjaldon/ectophile) - Ecto拡張により、モデルにファイルアップロードを即座にサポート。
* [elastic](https://github.com/radar/elastic) - HTTPotionに軽量ラッパーを施し、Elastic Searchとの通信を容易に。
* [elastix](https://github.com/werbitzky/elastix) - Elixirで書かれたシンプルなElastic RESTクライアント。
* [eredis](https://github.com/Nordix/eredis) - Erlang用Redisクライアント。
* [erlastic_search](https://github.com/tsloughter/erlastic_search) - ErlangアプリでElastic SearchのRESTインターフェースと通信。
* [esqlite](https://github.com/mmzeeman/esqlite) - Erlang用SQLite NIF。
* [eternal](https://github.com/whitfin/eternal) - ETSテーブルを安全かつ簡単に永遠に保持できる機能。
* [ets_map](https://github.com/antipax/ets_map) - ETSテーブ-ルをバックアップにしたマップのようなインターフェース（Map/Access/Enumerable/Collectable）を提供するElixirパッケージ。
* [eventstore](https://github.com/slashdotdash/eventstore) - PostgreSQLを持久化として使用するElixirで書かれたCQRSイベントストア。
* [ex_bitcask](https://github.com/JonGretar/ExBitcask) - BashoのBitcask Key/ValueストアをElixirでラップしたパッケージ。
* [ex_sider](https://github.com/ephe-meral/ex_sider) - Redisデータ構造にマップ・リスト・セットインターフェースを提供（Redixを使用しているが、設定可能）。
* [exleveldb](https://github.com/skovsgaard/exleveldb) - BashoのeleveldbモジュールをElixirでラップしたパッケージ。
* [exnumerator](https://github.com/KamilLelonek/exnumerator) - Elixirでシンプルな定義により、どのデータベースにも適用可能なEnumerable型を提供。
* [exredis](https://github.com/artemeff/exredis) - Elixir用Redisクライアント。
* [exseed](https://github.com/seaneshbaugh/exseed) - Ectoを用いてデータベースシーディングを行うためのシンプルなDSLを提供するElixirライブラリ。
* [exsolr](https://github.com/dcarneiro/exsolr) - Elixirで書かれたSolrのラッパー
* [extreme](https://github.com/exponentially/extreme) - アグリゲートによって生成されたイベントの永続化に[Eventstore](https://geteventstore.com)を使用するElixirライブラリ（CQRS）
* [exts](https://github.com/meh/exts) - ElixirのTermストレージ、etsラッパー
* [github_ecto](https://github.com/wojtekmach/github_ecto) - GitHub API用のEctoアダプタ
* [inquisitor](https://github.com/dockyard/inquisitor) - Ecto用の合成クエリビルダー
* [isn](https://github.com/Frost/isn) - postgreSQLの拡張機能用のEct-タイプ
* [kalecto](https://github.com/lau/calecto) - KalendsとEctoの接続ツールで日時を保存
* [kvs](https://github.com/synrc/kvs) - Erlangの抽象用語データベース
* [level](https://github.com/gausby/level) - ElixirのレベルでGoogleのLevelデータストアとの操作に必要な各種ヘルパー関数とデータ型を実装
* [libsqlex](https://github.com/danawanb/libsqlex) - Elixir用のLibsqlドライバー
* [mariaex](https://github.com/xerions/mariaex) - Elixir用のMariaDB/MySQLドライバー
* [memento](https://github.com/sheharyarn/memento) - ElixirでのシンプルなMnesiaインターフェース
* [moebius](https://github.com/robconery/moebius) - ElixirとPostgreSQL向けの関数型クエリツール
* [mongo](https://github.com/checkiz/elixir-mongo) - Elixir用のMongoDBドライバー
* [mongodb](https://github.com/ericmj/mongodb) - Elixir用のMongoDBドライバー
* [mongodb_driver](https://github.com/zookzook/elixir-mongodb-driver) - MongoDBの最新バージョンに対応し、豊富な機能を備えたMongoDBドライバーの代替
* [mongodb_ecto](https://github.com/michalmuskala/mongodb_ecto) - Ecto用のMongoDBアダプタ
* [mysql](https://github.com/mysql-otp/mysql-otp) - MySQL/OTP – Erlang/OTP用のMySQLドライバー
* [mysqlex](https://github.com/tjheeta/mysqlex) - mysql-otpライブラリをEctoと互換性を持つようにラッパー
* [neo4j_sips](https://github.com/florinpatrascu/neo4j_sips) - Elixir用のNeo4jドライバー
* [neo4j_sips_models](https://github.com/florinpatrascu/neo4j_sips_models) - Neo4j.Sips Elixirドライバー向けの最小限のモデルサポート
* [panoramix](https://github.com/gameanalytics/panoramix) - Elixir 用の Apache Druid クライアント
* [paper_trail](https://github.com/izelnakri/paper_trail) - Ecto 用のデータベース内のすべての変更を追跡・記録するプラグイン
* [pillar](https://github.com/sofakingworld/pillar) - Clickhouse 用の HTTP 基盤のクライアント
* [postgrex](https://github.com/elixir-ecto/postgrex) - Elixir 用の PostgreSQL ドライバー
* [ravix](https://github.com/YgorCastor/ravix) - Elixir 用の RavenDB ドライバー
* [ravix-ecto](https://github.com/YgorCastor/ravix-ecto) - Ecto 用の RavenDB Ravix ドライバー アダプタ
* [rediscl](https://github.com/akdilsiz/elixir-rediscl) - 接続プーリングとパイプクエリビルダーを備えた最小限の Redis クライアント
* [redix](https://github.com/whatyouhide/redix) - 高速でパイプ化された、頑健な Redis ドライバー（Elixir 用）
* [redo](https://github.com/heroku/redo) - Heroku 用のパイプ化 Redis クライアント（Erlang 用）
* [rethinkdb](https://github.com/hamiltop/rethinkdb-elixir) - JSON プロトコルを使用した純 Elixir の ReThinkDB クライアント
* [riak](https://github.com/drewkerrigan/riak-elixir-client) - Elixir で書かれた Riak クライアント
* [riak_ecto](https://github.com/pma/riak_ecto) - Ecto 用の Riak アダプタ
* [shards](https://github.com/cabol/shards) - Erlang/Elixir ETS テーブル向けの透明かつ即時対応のシャードサポート
* [sql_dust](https://github.com/bettyblocks/sql_dust) - 魔術的な Elixir SQL ダストを使って（複雑な）SQL クエリを生成
* [sqlite_ecto](https://github.com/jazzyb/sqlite_ecto) - Ecto 用の SQLite3 アダプタ
* [ssdb_elixir](https://github.com/lidashuang/ssdb-elixir) - パフォーマンスに重点を置いた Elixir 用の ssdb クライアント
* [tds](https://github.com/livehelpnow/tds) - Elixir 用の MSSQL / TDS データベースドライバー
* [tds_ecto](https://github.com/livehelpnow/tds_ecto) - Ecto 用の MSSQL / TDS アダプタ
* [timex_ecto](https://github.com/bitwalker/timex_ecto) - Ecto で Timex デートタイムを使用するためのアダプタ
* [tirexs](https://github.com/Zatvobor/tirexs) - Elasticsearch エンジンへの JSON 基盤のリクエストを構築するための Elixir スタイルの DSL
* [triplex](https://github.com/ateliware/triplex) - Elixirアプリケーション向けのPostgreSQLスキーマベースのデータベースマルチテナント
* [triton](https://github.com/blitzstudios/triton) - Xandraに構築された純ElixirのCassandra ORM
* [udpflux](https://github.com/timbuchwaldt/udpflux) - 意見をもつInfluxDB UDPのみクライアント
* [walex](https://github.com/cpursley/walex) - ElixirにおけるPostgreSQL変更データキャプチャ(CDC)イベントリスナー
* [xandra](https://github.com/lexhide/xandra) - Elixirでネイティブに構築されたCassandraドライバーで、速度・シンプルさ・堅牢性を重視
* [yar](https://github.com/dantswain/yar) - Elixir向けのもう一つのRedisクライアント

## OTP <a id="otp"></a>
*OTPに関するElixirライブラリと資料です。*

* [core](https://github.com/fishcakez/core) - 選択的に受信するOTPプロセス向けのライブラリ
* [erlexec](https://github.com/saleyn/erlexec) - Erlang/OTPからOSプロセスを実行および制御
* [immortal](https://github.com/danielberkompas/immortal) - Immortalは、健全なOTPアプリケーションを構築しやすくするための小さなヘルパーモジュールのコレクション
* [libex_config](https://github.com/reset/libex-config) - OTPアプリケーション設定にアクセスするためのヘルパー

## パッケージ管理 <a id="package-management"></a>
*パッケージ管理に関するElixirライブラリと資料です。*

* [Hex](https://hex.pm/) - Erlangエコシステム向けのパッケージマネージャー
* [rebar3_hex](https://github.com/hexpm/rebar3_hex) - rebar3向けのHex.pmプラグイン

## PDF <a id="pdf"></a>
*PDFに関するElixirライブラリと資料です。*

* [chromic_pdf](https://github.com/bitcrowd/chromic_pdf) - ChromeのDevTools APIを用いたPDF生成クライアント（HTMLからPDF）
* [gutenex](https://github.com/SenecaSystems/gutenex) - Elixir向けのネイティブPDF生成
* [pdf2htmlex](https://github.com/ricn/pdf2htmlex) - PDFドキュメントをテキストやフォーマットを失わずに美しいHTMLファイルに変換
* [pdf_generator](https://github.com/gutschilla/elixir-pdf-generator) - Elixirプロジェクトで使用するwkhtmltopdfまたはpuppeteer（HTMLからPDF）のシンプルラッパー
* [puppeteer_pdf](https://github.com/coletiv/puppeteer-pdf) - Elixirプロジェクトで使用するpuppeteer（HTMLからPDF）のもう一つのラッパー

## プロトコル <a id="protocols"></a>
*プロトコルに関するElixirライブラリと資料です。*

* [borsh](https://github.com/alexfilatov/borsh) - Elixirにおける[BORSH](https://borsh.io)バイナリシリアライザの実装
* [elixir_radius](https://github.com/bearice/elixir-radius) - ElixirでのRADIUSプロトコル
* [ex_hl7](https://github.com/jcomellas/ex_hl7) - Health Level 7（HL7）は、電子的に健康関連データをモデル化および転送するためのプロトコル
* [ex_marshal](https://github.com/gaynetdinov/ex_marshal) - Elixirで実装されたRuby Marshal形式
* [exprotobuf](https://github.com/bitwalker/exprotobuf) - Elixir における Protocol Buffers、使いやすい。
* [grpc-elixir](https://github.com/tony612/grpc-elixir) - Elixir での gRPC の実装。
* [message_pack](https://github.com/mururu/msgpack-elixir) - Elixir における MessagePack の実装。
* [msgpax](https://github.com/lexmag/msgpax) - Elixir における MessagePack (de)シリアル化の実装。
* [protox](https://github.com/ahamez/protox) - Elixir における Protocol Buffers の実装。
* [riffed](https://github.com/pinterest/riffed) - Apache Thrift に適した Elixir バインディングを提供。
* [Sippet](https://github.com/balena/elixir-sippet) - SIP プロトコルをミドルウェアとして使うための Elixir ライブラリ。
* [SMPPEX](https://github.com/savonarola/smppex) - Elixir で SMPP 3.4 プロトコルとフレームワークを実装。

## キュー <a id="queue"></a>
*キューに関するElixirライブラリと資料です。*

* [adap](https://github.com/awetzel/adap) - 情報システム間のデータストリームを作成し、Elixir のマッチングルールに基づいてデータをクエリ、拡張、変換。
* [amqp](https://github.com/pma/amqp) - Langohr をベースにした、シンプルな Elixir の RabbitMQ クライアントラッパー。
* [broadway](https://github.com/dashbitco/broadway) - Elixir による並列かつ多段階のデータインゴージングとデータ処理。
* [conduit](https://github.com/conduitframework/conduit) - メッセージキューとの作業に適したフレームワーク。SQS および AMQP 用のアダプタと、再利用可能なメッセージパターン用のプラグを備えている。
* [cspex](https://github.com/costaraphael/cspex) - シンプルで OTP に準拠した、Elixir の CSP チャネルの実装。
* [dbus](https://github.com/aforward/sadbus) - Redis を使ってマイクロサービス間でデータを共有するための、無知なメッセージバス。
* [ecto_job](https://github.com/mbuhot/ecto_job) - Ecto、PostgreSQL、GenStage を使って構築された、トランザクショナルなジョブキュー。
* [elixir_nsq](https://github.com/wistia/elixir_nsq) - Elixir 用の NSQ クライアントライブラリ。
* [elixir_talk](https://github.com/jsvisa/elixir_talk) - Elixir 用の beanstalkd クライアント。
* [enm](https://github.com/basho/enm) - enm は、nanomsg C ライブラリをラップする Erlang ポートドライバー。
* [exdisque](https://github.com/mosic/exdisque) - [Disque](https://github.com/antirez/disque)（メモリ内、分散ジョブキュー）のElixirクライアント
* [exq](https://github.com/akira/exq) - Elixir 用のジョブ処理ライブラリ（Resque/Sideki-qi と互換）。
* [exrabbit](https://github.com/d0rc/exrabbit) - Elixir 用の RabbitMQ バインディングと DSL。
* [faktory_worker](https://github.com/opt-elixir/faktory_worker) - 著者によるSidekiqの開発者による多言語ジョブ処理システム[Faktory](https://contribsys.com/faktory/)を扱うElixirライブラリ
* [flume](https://github.com/scripbox/flume) - GenStageとRedisをバックアップとして持つ、非常に高速なジョブ処理システム
* [gen_rmq](https://github.com/meltwater/gen_rmq) - RabbitMQのコンシューマーとパブリッシャーを作成するために使うための行動セット
* [heapq](https://github.com/takscape/elixir-heapq) - Elixirにおけるヒープベースの優先度キューの実装
* [honeycomb](https://github.com/Hentioe/honeycomb) - 一時的なタスクの結果を集めるためのスケジューリングシステム
* [honeydew](https://github.com/koudelka/honeydew) - HoneydewはElixir用のワーカーポールライブラリ
* [kaffe](https://github.com/spreedly/kaffe) - Elixir用のKafkaクライアントライブラリ
* [mqs](https://github.com/synrc/mqs) - RabbitMQクライアントライブラリ、ルーティングキー、MQ上のRPCその他
* [oban](https://github.com/sorentwo/oban) - Elixirと現代的なPostgreSQLを活用した、頑健な非同期ジョブプロセッサ
* [opq](https://github.com/fredwu/opq) - Elixirでシンプルな、メモリ内のキューとワーカーポール、レート制限
* [pqueue](https://github.com/okeuday/pqueue) - Erlangにおける優先度キューの実装
* [que](https://github.com/sheharyarn/que) - Mnesiaを使ったシンプルなバックグラウンドジョブ処理
* [queuex](https://github.com/falood/queuex) - 複数のバックエンドをサポートする優先度キュー
* [RBMQ](https://github.com/Nebo15/rbmq) - RabbitMQプロダクタとコンシューマをスパニングするためのシンプルなAPI
* [Rihanna](https://github.com/samphilipd/rihanna) - Elixir向けの、高性能なPostgreSQLベースのジョブキュー
* [stream_weaver](https://hex.pm/packages/stream_weaver) - ストリームを扱うためのライブラリ
* [task_bunny](https://github.com/shinyscorpion/task_bunny) - RabbitMQをメッセージバックエンドとして使うElixirで書かれたバックグラウンド処理アプリケーション
* [verk](https://github.com/edgurgel/verk) - VerkはRedisをバックアップとして持つジョブ処理システム。Sidekiq/Resqueと同じジョブ定義を使用しています
* [work_queue](https://github.com/pragdave/work_queue) - Elixirにおける、グリーンコンシューマモデルのシンプルな実装

## QUIC <a id="quic"></a>
*QUICに関するElixirライブラリと資料です。*

* [quicer](https://github.com/emqx/quic) - QUICプロトコルのErlangライブラリ

## リリース管理 <a id="release-management"></a>
*リリース管理に関するElixirライブラリと資料です。*

* [changex](https://github.com/Gazler/changex) - GITログから自動的に変更ログを生成
* [distillery](https://github.com/bitwalker/distillery) - Erlang VM向けのリリースパッケージング機能の純Elixir実装
* [eliver](https://github.com/glasnoster/eliver) - Elixirパッケージ向けのインタラクティブな意味論的バージョン管理
* [expublish](https://github.com/tfiedlerdejanze/expublish) - Elixirパッケージ向けの意味論的リリースバージョン管理とベストプラクティスを自動化
* [relex](https://github.com/yrashk/relex) - Erlang/Elixirリリースアセンブラー
* [renew](https://github.com/Nebo15/renew) - MixタスクでDockerコンテナに構築されるMixプロジェクトを作成
* [versioce](https://github.com/mpanarin/versioce) - あなたのMixプロジェクト向けに拡張可能なバージョンアップと変更ログ生成

## RESTとAPI <a id="rest-and-api"></a>
*RESTとAPIに関するElixirライブラリと資料です。*

* [accent](https://github.com/sticksnleaves/accent) - JSON APIキーのケース変換を処理するPlug
* [detergent](https://github.com/devinus/detergent) - ErlangのSOAPライブラリをエマルスifying
* [detergentex](https://github.com/r-icarus/detergentex) - WSDL/SOAPサービスを呼び出すために使用されるDetergent ErlangライブラリへのElixirバインディング
* [maru](https://github.com/falood/maru) - GrapeのElixir版でREST風APIを作成
* [mazurka](https://github.com/exstruct/mazurka) - ハイパーメディアAPIツールキット
* [plug_rest](https://github.com/christopheradams/plug_rest) - ハイパーメディアウェブアプリケーション向けのREST行動とPlugルーター
* [signaturex](https://github.com/edgurgel/signaturex) - API向けのシンプルなキー/シークレットベースの認証
* [SOAP client](https://github.com/elixir-soap/soap) - HTTPoisonをベースにしたHexドキュメント化されたSOAPクライアント
* [urna](https://github.com/meh/urna) - UrnaはCauldronを囲むシンプルなDSLでRESTサービスを実装
* [versionary](https://github.com/sticksnleaves/versionary) - Elixir PlugおよびPhoenix向けのAPIバージョン管理

## 検索 <a id="search"></a>
*検索に関するElixirライブラリと資料です。*

* [algoliax](https://github.com/WTTJ/algoliax) - Elixirで使用可能なAlgoliaライブラリ（Ectoスキーマと併用可能）
* [elasticlunr](https://github.com/heywhy/ex_elasticlunr) - Elixir環境で使用可能な小型の全文検索ライブラリ
* [elasticsearch](https://github.com/infinitered/elasticsearch-elixir) - Elixir向けのシンプルでシンプルなElasticsearchライブラリ
* [elasticsearch_elixir_bulk_processor](https://github.com/sashman/elasticsearch_elixir_bulk_processor) - Elasticsearchへの効率的で柔軟なデータ挿入方法
* [giza_sphinxsearch](https://github.com/Tyler-pierce/giza_sphinxsearch) - Sphinx Searchに適合するManticoreとの互換性を持つクライアント

## セキュリティ <a id="security"></a>
*セキュリティに関するElixirライブラリと資料です。*

* [ca](https://github.com/synrc/ca) - 証明書機関
* [clamxir](https://github.com/ramortegui/clamxir) - Elixir用のClamAVのラッパー
* [code_signing](https://github.com/benknowles/code_signing) - Ed25519署名によるBEAMファイルの署名と検証
* [Ockam](https://github.com/ockam-network/ockam) - クラウドサービスおよび他のデバイスと安全に、プライベートに、信頼性を持って通信できるデバイスを構築しやすいツール、プログラミングライブラリ、インフラストラクチャ。[Docs](https://www.ockam.io/learn/concepts/)。
* [pwned](https://github.com/thiamsantos/pwned) - パスワードが盗まれているかを確認
* [safetybox](https://github.com/aforward/safetybox) - Elixir向けのセキュリティ指向のヘルパー関数
* [site_encrypt](https://github.com/sasa1977/site_encrypt) - Let's Encryptによる統合認証（Elixirで構築されたサイト向け）
* [sobelow](https://github.com/nccgroup/sobelow) - Phoenixフレームワーク向けのセキュリティ指向の静的解析
* [ssl_verify_fun](https://github.com/deadtrickster/ssl_verify_fun.erl) - Erlang用のSSL検証関数のコレクション

## SMS <a id="sms"></a>
*SMSに関するElixirライブラリと資料です。*

* [exsms](https://hex.pm/packages/exsms) - 送信用のトランザクショナルSMSを送信するElixirライブラリ（Sendinblue、mailjet、msg91、textlocalをサポート）

## 静的ページ生成 <a id="static-page-generation"></a>
*静的ページ生成に関するElixirライブラリと資料です。*

* [blogit](https://github.com/meddle0x53/blogit) - GitリポジトリにMarkdownファイルを含むものを元にブログを生成するOTPアプリケーション
* [coil](https://github.com/badosu/coil) - ミニマリズムを採用した静的コンテンツエンジン
* [glayu](https://github.com/pablomartinezalvarez/glayu) - 中規模サイト向けの静的サイトジェネレーター
* [NimblePublisher](https://github.com/dashbitco/nimble_publisher) - Markdownとシンタックスハイライトをサポートする、ミニマリズムのファイルシステムベースのパブリッシャー
* [pardall_markdown](https://github.com/alfredbaudisch/pardall_markdown) - 反応型パブリッシングフレームワーク、ファイルシステムベースでMarkdown、ネストされた階層、即時コンテンツ再構築をサポート
* [phoenix_pages](https://github.com/jsonmaur/phoenix-pages) - Phoenixアプリにブログ、ドキュメンテーション、その他静的ページを追加
* [serum](https://github.com/Dalgona/Serum) - Elixirで書かれたシンプルな静的ウェブサイトジェネレーター

## 統計 <a id="statistics"></a>
*統計に関するElixirライブラリと資料です。*

* [descriptive_statistics](https://github.com/pusewicz/descriptive_statistics) - Elixir向けの記述統計
* [mtx](https://github.com/synrc/mtx) - MTXはヒストグラム、メータ、カウンター、ゲージ、タイミングキーのトラッキングを可能にするフロントエンドAPIを提供
* [numerix](https://github.com/safwank/Numerix) - 統計、線形代数、機械学習に偏った有用な数学関数のコレクション
* [simple_stat_ex](https://github.com/Tyler-pierce/simplestatex) - Ectoと互換性のある、時間帯ごとの簡単な統計記録用ライブラリ
* [statistics](https://github.com/msharp/elixir-statistics) - Elixir向けの基本的な統計関数

## テンプレート <a id="templating"></a>
*テンプレートに関するElixirライブラリと資料です。*

* [bbmustache](https://github.com/soranoba/bbmustache) - Erlang/OTP用のバイナリパターンマッチベースのMustacheテンプレートエンジン
* [calliope](https://github.com/nurugger07/calliope) - Elixir用のHAMLパーサー
* [eml](https://github.com/zambal/eml) - ElixirでHTMLマークアップを書く・操作するためのライブラリ
* [exgen](https://github.com/rwdaigle/exgen) - Elixirプロジェクトを迅速に生成するためのテンプレートライブラリ
* [expug](https://github.com/rstacruz/expug) - Elixir用のPugテンプレート
* [mustache](https://github.com/schultyy/Mustache.ex) - Elixir用のMustacheテンプレート
* [mustachex](https://github.com/jui/mustachex) - Elixir用の論理なしテンプレート（Mustache）
* [slime](https://github.com/slime-lang/slime) - Elixirでスリム風テンプレートをレンダリングするためのライブラリ
* [sneeze](https://github.com/JuneKelly/sneeze) - Elixirデータ構造をHTMLにレンダリング。[hiccup](https://github.com/weavejester/hiccup)にインスパイアされた。
* [taggart](https://github.com/ijcd/taggart) - ElixirにおけるHTMLをコードとして扱う
* [templates](https://github.com/sugar-framework/templates) - ウェブアプリケーションにテンプレート機能を追加するためのヘルパーライブラリ
* [temple](https://github.com/mhanberg/temple) - ElixirおよびPhoenix向けのHTMLDSL

## テスト <a id="testing"></a>
*テストに関するElixirライブラリと資料です。*

* [amrita](https://github.com/josephwilk/amrita) - Elixir向けの丁寧で礼儀正しく、非常に優れたテストフレームワーク
* [apocryphal](https://github.com/coryodaniel/apocryphal) - ExUnit向けのSwaggerベースのドキュメント駆動開発
* [blacksmith](https://github.com/batate/blacksmith) - Elixir向けのデータ生成フレームワーク
* [blitzy](https://github.com/benjamintanweihao/blitzy) - ElixirによるシンプルなHTTP負荷テストツール
* [bypass](https://github.com/pspdfkit-labs/bypass) - Bypassはカスタムプラグを持つ仮のHTTPサーバーを迅速に作成するためのツール
* [chaperon](https://github.com/polleverywhere/chaperon) - Elixirで書かれたHTTPサービスのパフォーマンスおよび負荷テストフレームドワーク
* [chemistry](https://github.com/genericlady/chemistry) - Elixir向けのテストフレームワーク
* [cobertura_cover](https://github.com/PSPDFKit-labs/cobertura_cover) - `mix test --cover`ファイルからCoberturaプラグインに適合するcoverage.xmlを生成する
* [definject](https://github.com/definject/definject) - Elixir向けの非侵襲的な依存関係インジェクタ
* [double](https://github.com/sonerdy/double) - テスト時にグローバルモジュールを上書きせずにスタブ依存関係を作成する
* [ecto_it](https://github.com/xerions/ecto_it) - Ecto プラグインでデフォルト設定をもつリポジトリ。さまざまな Ecto プラグインとデータベースの組み合わせをテストするためのもの。
* [efrisby](https://github.com/FabioBatSilva/efrisby) - Erlang 用の REST API テストフレームワーク。
* [efx](https://github.com/bravobike/efx) - 非同期テスト可能な効果を宣言的に記述するためのライブラリ。
* [elixir-auto-test](https://github.com/joaothallis/elixir-auto-test) - inotify-tools を使ってファイルが保存されたときにテストを実行。
* [espec](https://github.com/antonmi/espec) - Elixir 用の RSpec にインスパイアされた BDD テストフレームワーク。
* [espec_phoenix](https://github.com/antonmi/espec_phoenix) - Phoenix フレームワーク用の ESPEC。
* [ex_integration_coveralls](https://github.com/yeshan333/ex_integration_coveralls) - Elixirランタイムシステムのコード行レベルのカバレッジ分析用ライブラリ。統合テストのカバレッジを評価する際に使用できる。[Introduction article](https://github.com/yeshan333/explore_ast_app/blob/main/examples/README.md)。
* [ex_machina](https://github.com/thoughtbot/ex_machina) - Elixir 用の柔軟なテストファクトリ。Ecto および Ect的関連をそのままサポート。
* [ex_spec](https://github.com/drewolson/ex_spec) - ExUnit 用の BDD 風の構文。
* [ex_unit_fixtures](https://github.com/obmarg/ex_unit_fixtures) - ExUnit テスト用のモジュール依存関係を定義するためのライブラリ。
* [ex_unit_notifier](https://github.com/navinpeiris/ex_unit_notifier) - ExUnit 用のデスクトップ通知。
* [excheck](https://github.com/parroty/excheck) - Elixir 用の性質ベーステストライブラリ（QuickCheck 風）。
* [exkorpion](https://github.com/wesovilabs/exkorpion) - Elixir 開発者向けの BDD ライブラリ。
* [factory_girl_elixir](https://github.com/sinetris/factory_girl_elixir) - Ruby の factory_girl を Elixir に最小限実装したもの。
* [fake_server](https://github.com/bernardolins/fake_server) - FakeServer は HTTP サーバーであり、レスポンスをシミュレートし、外部 API のテストを容易にする。
* [faker](https://github.com/igas/faker) - Faker は純粋な Elixir ライブラリで、偽データを生成するもの。
* [faker_elixir](https://github.com/GesJeremie/faker-elixir) - FakerElixir は、あなたに偽データを生成する Elixir パッケージ。
* [fqc](https://github.com/project-fifo/fqc) - FiFo Quickcheck ヘルパー、EQC を実行するためのヘルパーのセット。
* [gimei](https://github.com/KazuCocoa/elixir-gimei) - Gimei は純粋な Elixir ライブラリで、日本語の偽データを生成するもの。
* [hound](https://github.com/HashNuke/hound) - 統合テストおよびブラウザ自動化を書くための Elixir ライブラリ。
* [hypermock](https://github.com/stevegraham/hypermock) - HTTP リクエストのスタブおよび期待値を定義する Elixir ライブラリ。
* [ignorant](https://github.com/campezzi/ignorant) - フィールドの存在を確認しつつ値を無視する部分的な`Map`比較
* [katt](https://github.com/for-GET/katt) - KATT (Klarna API Testing Tool)はErlang用のHTTPベースのAPIテストツールです
* [kovacs](https://github.com/antp/kovacs) - シンプルなExUnitテストランナー
* [markdown_test](https://github.com/MainShayne233/markdown_test) - マークダウンファイル内のElixirコードをテストできるライブラリ
* [meck](https://github.com/eproxus/meck) - Erlang用のモックライブラリ
* [mecks_unit](https://github.com/archan937/mecks_unit) - (非同期)ExUnitテスト内でモジュール関数をエレガントにモックするための[meck](https://github.com/eproxus/meck)パッケージ
* [mix_erlang_tasks](https://github.com/alco/mix-erlang-tasks) - Mixを使用するErlangプロジェクトで共通のタスク
* [mix_eunit](https://github.com/dantswain/mix_eunit) - MixでEUnitテストを実行するタスク
* [mix_test_interactive](https://github.com/influxdata/mix_test_interactive) - mix testのウォッチモードに対応したインタラクティブなテストランナー
* [mix_test_watch](https://github.com/lpil/mix-test.watch) - ファイルを保存したたびにElixirプロジェクトのテストを自動実行
* [mixunit](https://github.com/talentdeficit/mixunit) - Mixベースのプロジェクト向けのEUnitタスク
* [mneme](https://github.com/zachallaun/mneme) - 自身を更新できるアサーション、すなわちスナップショットまたは承認テスト
* [mock](https://github.com/jjh42/mock) - Elixir用のモックライブラリ
* [mockery](https://github.com/appunite/mockery) - 非同期テストに使えるシンプルなモックライブラリ
* [mockingbird](https://github.com/Driftrock/mockingbird) - HTTPリクエストを含むコードをテストするためのヘルパーのセット
* [mox](https://github.com/dashbitco/mox) - Elixir向けのモックと明示的な契約
* [patch](https://github.com/ihumanable/patch) - Elixir向けのエргノミックなモック
* [pavlov](https://github.com/sproutapp/pavlov) - Elixirプロジェクト向けのBDDフレームワーク
* [plug_test_helpers](https://github.com/xavier/plug_test_helpers) - Plugs向けのシンプルなテストDSL
* [ponos](https://github.com/klarna/ponos) - PonosはErlangアプリケーションで、柔軟な負荷生成APIを公開しています
* [power_assert](https://github.com/ma2gedev/power_assert_ex) - Elixirにおけるパワーアサート。各表現の評価結果を表示します
* [propcheck](https://github.com/alfert/propcheck) - Elixir向けのプロパティベースのテスト
* [proper](https://github.com/manopapad/proper) - PropEr (ERlang向けプロパティベーステストツールPROPerty-based testing tool for ERlang)は、QuickCheckをインスピレーションとして受け継いだオープンソースのErlang向けプロパティベーステストツールです.
* [setup_tag](https://github.com/vic/setup_tag) - タグを付加した関数を簡単に組み合わせて、テストコンテキストを構築できます.
* [shouldi](https://github.com/batate/shouldi) - ネストされたコンテキストを備えたElixir向けテストライブラリで、読みやすさと使いやすさが優れています.
* [stream_data](https://github.com/whatyouhide/stream_data) - 純Elixirによるデータ生成およびプロパティベーステストライブラリです.
* [test_selector](https://github.com/DefactoSoftware/test_selector) - Phoenixアプリケーションで正しい要素を選択できるようにする、テスト補助ツールのセットです.
* [test_that_json](https://github.com/facto/test_that_json) - Elixirのテストニーズに応じたJSONアサートと補助関数です.
* [toxiproxy_ex](https://github.com/Jcambass/toxiproxy_ex) - 耐性テストツールToxiproxy向けのAPIクライアントです.
* [tuco_tuco](https://github.com/stuart/tuco_tuco) - TucoTucoは、ウェブブラウザを実行し、アプリケーションとのユーザーインタラクションをシミュレートすることで、ウェブアプリケーションのテストを支援します.
* [Walkman](https://github.com/derekkraan/walkman) - 現実世界からテストを隔離するツールで、RubyのVCRをインスピレーションとしています.
* [wallaby](https://github.com/keathley/wallaby) - Wallabyは、ユーザーインタラクションを並列でシミュレートし、ブラウザを管理することでウェブアプリケーションのテストを支援します.
* [white_bread](https://github.com/meadsteve/white-bread) - Gherkin構文を使用したElixirにおけるストーリーベースのBDDです.

## テキストと数値 <a id="text-and-numbers"></a>
*テキストと数値に関するElixirライブラリと資料です。*

* [abacus](https://github.com/narrowtux/abacus) - Elixirで数学式を評価します.
* [base58](https://github.com/jrdnull/base58) - Elixir向けのBase58のエンコード／デコードです.
* [base58check](https://github.com/gjaldon/base58check) - Elixir向けのBase5及チェックエンコード／デコード（ビットコイン用）です.
* [base62](https://github.com/igas/base62) - 純ElixirによるBase62エンコーダ／デコーダです.
* [bencode](https://github.com/gausby/bencode) - Elixir向けのBencodeエンコーダおよびデコーダです。入力にinfoディクショナリが見つかった場合、デコーダはそのinfoディクショナリのチェックサム値を返します.
* [bencoder](https://github.com/alehander42/bencoder) - Elixirにおけるbencodeです.
* [bitcoinex](https://github.com/RiverFinancial/bitcoinex) - Elixir向けのビットコインユーティリティです.
* [brcpfcnpj](https://github.com/williamgueiros/Brcpfcnpj) - ブラジルの文書（CPF/CNPJ）向けの数値フォーマットおよびバリデーションです.
* [caustic](https://github.com/agro1986/caustic) - Elixir向けの暗号通貨ライブラリ（ビットコイン、イーサリアム、その他ブロックチェーンを含む）。暗号、数論（素数、合同式）、および一般数学ライブラリを含み、探索的数学に使用できます。
* [ccc](https://github.com/Joe-noh/ccc) - キャラクターコード変換ツール
* [chinese_translation](https://github.com/tyrchen/chinese_translation) - ウィキペディアデータに基づき、繁体字と簡体字を相互に変換し、漢字をピンイン（またはトーンを含む/含まないスラグ）に変換
* [cidr](https://github.com/c-rack/cidr-elixir) - Elixir用のクラスレスドメインルーティング（CIDR）
* [cirru_parser](https://github.com/Cirru/parser.ex) - Elixir用のCirruパーサー
* [colorful](https://github.com/Joe-noh/colorful) - Elixir用のCUI上の文字を装飾するマクロ
* [colors](https://github.com/lidashuang/colors) - Elixirで書かれたカラーツール
* [convertat](https://github.com/whatyouhide/convertat) - Elixir用の任意の基数間の変換ライブラリ
* [curtail](https://github.com/seankay/curtail) - HTMLタグ安全な文字列の切り取り
* [custom_base](https://github.com/igas/custom_base) - Elixirで任意の基数変換をカスタマイズできるようにする
* [decimal](https://github.com/ericmj/decimal) - Elixir用の任意精度小数演算
* [eden](https://github.com/jfacorro/Eden) - [EDN](https://github.com/edn-format/edn) エンコーダー/デコーダー
* [elixilorem](https://github.com/mgamini/elixilorem) - Elixir用のローマン・イプスム生成ツール
* [elixir-range-extras](https://github.com/lnikkila/elixir-range-extras) - Elixir用の範囲ユーティリティ：定時ランダムサンプリングと集合演算
* [elixir_bencode](https://github.com/AntonFagerberg/elixir_bencode) - Elixirで実装されたBencode
* [erldn](https://github.com/marianoguerra/erldn) - [EDN](https://github.com/edn-format/edn) フォーマットパーサー（Erlangプラットフォーム用）
* [event_source_encoder](https://github.com/chatgris/event_source_encoder) - EventSourceに準拠したデータのエンコード
* [ex_brace_expansion](https://github.com/gniquil/ex_brace_expansion) - sh/bashで知られるブレース展開をElixirに実装
* [ex_cldr](https://github.com/kipcole9/cldr) - CldrはUnicode連合の共通ローカルデータリポジトリ（CLDR）向けのElixirライブラリ
* [ex_pression](https://github.com/balance-platform/ex_pression) - ユーザー入力式の評価
* [ex_rfc3966](https://github.com/marcelog/ex_rfc3966) - Elixir用のRFC3966に準拠したTel URIパーサー
* [ex_rfc3986](https://github.com/marcelog/ex_rfc3986) - RFC3986 URI/URL パーサー
* [ex_uc](https://github.com/carturoch/ex_uc) - Elixir 用の拡張可能な単位変換ライブラリ
* [exmoji](https://github.com/mroth/exmoji) - Elixir/Erlang 用のエモジエンコードのスイス軍刀
* [expletive](https://github.com/xavier/expletive) - Elixir 用のプロフィニティフィルターライブラリ
* [expr](https://github.com/Rob-bie/Expr) - Elixir 用の数学式のパースおよび評価ライブラリ
* [haikunator](https://github.com/knrz/Haikunator) - Heroku風の記憶に残るランダムな名前を生成し、アプリケーションやその他の場所で使用可能にします
* [hashids](https://github.com/alco/hashids-elixir) - Hashids は、逆変換可能なマッピングにより数値識別子を暗号化します
* [hexate](https://github.com/rjsamson/hexate) - Elixir向けのシンプルな16進エンコード／デコードモジュール
* [inet_cidr](https://github.com/cobenian/inet_cidr) - Elixir 用のクラスレスドメインルーティング（CIDR）で、:inet と互換性があり、IPv4 および IPv6 をサポート
* [inflex](https://github.com/nurugger07/inflex) - Elixir 用のインフィルターライブラリ
* [kitsune](https://github.com/edubkendo/kitsune) - Elixir 用のデータ表現の変換ライブラリ
* [ltsvex](https://github.com/ma2gedev/ltsvex) - Elixir での LTSV パーサーの実装
* [mbcs](https://github.com/woxtu/elixir-mbcs) - erlang-mbcs のラッパー。このモジュールは文字エンコーディング変換の関数を提供します
* [mimetype_parser](https://github.com/camshaft/mimetype_parser) - ミメタイプのパース
* [minigen](https://github.com/mrdimosthenis/minigen) - Erlang エコシステム向けのランダムデータ生成器
* [monetized](https://github.com/theocodes/monetized) - お金の扱いと保存に用いる軽量なソリューション
* [money](https://github.com/liuggio/money) - Fowler のお金パターンをより安全かつ簡単かつ楽しい形で扱う
* [mt940](https://github.com/my-flow/mt940) - Elixir 用の MT940（標準構造の SWIFT 顧客明細メッセージ）パーサー
* [namor](https://github.com/jsonmaur/namor) - ランダムな URL に適したスラグを生成する名前生成器
* [nanoid](https://github.com/railsmechanic/nanoid) - NanoID の Elixir バージョン、安全で URL に適した一意識別子生成器
* [near_api](https://github.com/alexfilatov/near_api) - Elixir における [NEAR](https://near.org) API - NEAR ブロックチェーンプラットフォーム上のDApp開発用のライブラリ
* [neotomex](https://github.com/jtmoulia/neotomex) - [PEG](http://bford.info/packrat/) の実装で、快適なElixir DSLを備える
* [number](https://github.com/danielberkompas/number) - Numberは、意図的に名前を付けたElixirのライブラリで、数値をさまざまなフォーマットに変換する関数を提供しています。
* [numero](https://github.com/alisinabh/numero) - Elixirにおける、英語以外のUTF-8数字を変換するマイクロライブラリ。
* [palette](https://github.com/lpil/palette) - Elixirで文字列を色付けするための便利なライブラリ。
* [pinyin](https://github.com/lidashuang/pinyin) - Elixir向けの中国語ピンインライブラリ。
* [porterstemmer](https://github.com/frpaulas/porterstemmer) - Elixirにおけるポーター・ストーマー。
* [pretty_hex](https://github.com/polsab/pretty_hex) - Elixirにおけるバイナリのヘキサデシマルダンプライブラリ。
* [quickrand](https://github.com/okeuday/quickrand) - 高速な乱数生成。
* [RandomStringGenerator](https://github.com/caioceccon/random_string_generator) - 指定された文字パターンに基づいてランダムな文字列を生成するためのモジュール。
* [ref_inspector](https://github.com/elixytics/ref_inspector) - Elixirにおけるリファラーパーサーライブラリ。URLから情報を取得する。
* [remove_emoji](https://github.com/guanting112/elixir_remove_emoji) - Elixirにおけるエモジーテキストのクリーンアップ。任意のエモジーシンボルを削除できる。
* [secure_random](https://github.com/patricksrobertson/secure_random.ex) - RubyのSecureRandomへの愛を模倣した、ランダムなBase64文字列を生成するための便利なライブラリ。
* [sentient](https://github.com/dantame/sentient) - AFINN-111語リストに基づくシンプルな感情分析。
* [shortuuid](https://github.com/gpedic/ex_shortuuid) - 簡潔で曖昧さのない、URLに安全なUUIDを生成。
* [simetric](https://github.com/lexmag/simetric) - Elixir向けの文字列類似度メトリクス。
* [slugger](https://github.com/h4cc/slugger) - Sluggerは、URLやファイル名に使えるスラッグを指定された文字列から生成できる。
* [smile](https://github.com/danigulyas/smile) - スラックメッセージなどに使われるエモジーマッパーをエモジーキャラクターに変換するための小さなライブラリ。
* [stemmer](https://github.com/fredwu/stemmer) - Elixirにおける英語（ポーター2）のストーマー実装。
* [tau](https://github.com/FranklinChen/tau) - 有名な数学定数、タウ（τ = 6.2831...）を提供。
* [tomlex](https://github.com/zamith/tomlex) - Elixir向けのTOMLパーサー。
* [transformer](https://github.com/ByeongUkChoi/transformer) - 柔軟な型変換を実現する軽量ライブラリ。
* [ua_inspector](https://github.com/elixytics/ua_inspector) - `piwik/device-detector` に似たユーザーエージェントパーサー用のライブラリ
* [ua_parser2](https://github.com/nazipov/ua_parser2-elixir) - ua-parser2のElixir向けポート。ユーザーエージェント解析用ライブラリ。
* [unique_names_generator](https://github.com/jongirard/unique_names_generator) - 生成されたランダムかつ一意の名前を提供。
* [unit_fun](https://github.com/meadsteve/unit_fun) - Elixirで数値量を扱う際に、型安全を高めるために数値に単位を追加する機能を試みる。
* [uuid](https://github.com/zyro/elixir-uuid) - Elixir向けUUID生成ツールおよびユーティリティ。
* [uuid_erl](https://github.com/okeuday/uuid) - Erlang用のUUID生成。
* [veritaserum](https://github.com/uesteibar/veritaserum) - afinn-165、エモジ、一部の改良をもとにした感情分析。

## サードパーティAPI <a id="third-party-apis"></a>
*サードパーティAPIに関するElixirライブラリと資料です。*

* [airbrake](https://github.com/romul/airbrake-elixir) - Airbrake向けのElixir通知ライブラリ。
* [airbrakex](https://github.com/fazibear/airbrakex) - Airbrakeサービス向けのElixirクライアント。
* [amazon_product_advertising_client](https://github.com/zachgarwood/elixir-amazon-product-advertising-client) - Amazon Product Advertising API向けのE及リクライアント。
* [apns](https://github.com/chvanikoff/apns4ex) - Apple Push Notifications Service向けのElixirクライアントライブラリ。
* [asanaficator](https://github.com/trenpixster/asanaficator) - Asana API向けのシンプルなElixirラッパー。Tentacatに基づく。
* [askimet_ex](https://github.com/mijailr/askimet_ex) - Askimet反スパムサービス向けのElixirクライアント。
* [assembla_api](https://github.com/Assembla/ex_assembla_api) - Assembla API向けのElixirクライアント。
* [balalaika_bear](https://github.com/ayrat555/balalaika_bear) - シンプルなVK APIクライアント（Elixir向け）。
* [balanced](https://github.com/bryanjos/balanced-elixir) - Balanced APIクライアント（Elixir向け）。
* [bandwidth](https://github.com/bandwidthcom/elixir-bandwidth) - Bandwidthアプリケーションプラットフォーム向けのElixirクライアントライブラリ。
* [bing_translator](https://github.com/ikeikeikeike/bing_translator) - Bingの翻訳API向けのシンプルなElixirインターフェース。
* [bitmex](https://github.com/nobrick/bitmex) - BitMEXクライアントライブラリ（Elixir向け）。
* [bitpay](https://github.com/bitpay/elixir-client) - bitpay.comに接続するためのElixirのコアライブラリ。
* [cashier](https://github.com/swelham/cashier) - 複数の決済プロバイダーに共通のインターフェースを提供する決済ゲートウェイ。
* [chargebeex](https://github.com/WTTJ/chargebeex) - Chargebee API 用の Elixir クライアント
* [cleverbot](https://github.com/BlakeWilliams/Elixir-Cleverbot) - Cleverbot API に対する Elixir でのシンプルな実装
* [coinbase](https://github.com/gregpardo/coinbase-elixir) - Coinbase API v1 用の非公式クライアント
* [commerce_billing](https://github.com/joshnuss/commerce_billing) - 複数のゲートウェイ（例：Bogus および Stripe）をサポートする Elixir 用の支払い処理ライブラリ
* [conekta](https://github.com/echavezNS/conekta-elixir) - Conekta API 用の E-lixir ワッパー
* [correios_cep](https://github.com/prodis/correios-cep-elixir) - 郵便局（Correios）データベースから郵便番号でブラジルの住所を検索。HTML パーサーは不要。
* [currently](https://github.com/chatgris/currently) - Trello に現在割り当てられているカードを表示するツール
* [darkskyx](https://github.com/techgaun/darkskyx) - Darksky.com（旧：forecast.io）API 用の Elixir クライアント
* [digitalocean](https://github.com/lukeed/elixir-digitalocean) - Digital Ocean API v2 用の Elixir ワッパー
* [digoc](https://github.com/kevinmontuori/digoc) - Digital Ocean API v2 用の Elixir クライアント
* [diplomat](https://github.com/peburrows/diplomat) - [Google Cloud Datastore](https://cloud.google.com/datastore/) クライアント
* [dnsimple](https://github.com/dnsimple/dnsimple-elixir) - DNSimple API v2 用の Elixir クライアント
* [docker](https://github.com/hexedpackets/docker-elixir) - Docker Remote API 用の Elixir クライアント
* [dockerex](https://github.com/hisea/dockerex) - SSL/TLS 認証に対応した軽量 Docker Remote API クライアント
* [dogstatsd](https://github.com/adamkittelson/dogstatsd-elixir) - [DogStatsd](https://www.datadoghq.com/) 用のElixir クライアント
* [dpd_client](https://github.com/knewter/dpd_client) - DPD サービス用の API クライアント
* [dropbox](https://github.com/ammmir/elixir-dropbox) - Dropbox Core API 用の Elixir クライアント
* [dublin_bus_api](https://github.com/carlo-colombo/dublin-bus-api) - ダブリンバスサービスのリアルタイム乗務情報（RTPI）へのアクセス
* [edgarex](https://github.com/rozap/edgarex) - EDGAR からSECの提出資料を取得するためのElixirインターフェース
* [elixir_authorizenet](https://github.com/marcelog/elixir_authorizenet) - Authorize.Net販売者API用の非公式クライアント
* [elixir_ipfs_api](https://github.com/zabirauf/elixir-ipfs-api) - IPFS（InterPlanetary File System）API 用の Elixir クライアント
* [elixirfm](https://github.com/jrichocean/Elixirfm) - Last.fm API 用の Elixir ワッパー
* [elixtagram](https://github.com/zensavona/elixtagram) - Elixir用のInstagram APIクライアント
* [ethereumex](https://github.com/exthereum/ethereumex) - Ethereumブロックチェーン用のElixir JSON-RPCクライアント
* [everex](https://github.com/jwarlander/everex) - Elixir用のEvernote APIクライアント
* [everyoneapi](https://github.com/knewter/everyoneapi) - EveryoneAPI.com用のAPIクライアント
* [ex_changerate](https://github.com/81dr/ex_changerate) - Elixir 用の [exchangerate.host](https://exchangerate.host) API クライアント
* [ex_codeship](https://github.com/securingsincity/ex_codeship) - Codeship用のAPIクライアント
* [ex_twilio](https://github.com/danielberkompas/ex_twilio) - Elixir用のTwilio APIクライイント
* [ex_twiml](https://github.com/danielberkompas/ex_twiml) - Elixir内でTwilio統合用のTwiMLを生成
* [exdesk](https://github.com/deadkarma/exdesk) - Desk.com API用のElixirライブラリ
* [exfacebook](https://github.com/oivoodoo/exfacebook) - Ruby koala gemと同様の方法で書かれたElixir用のFacebook API
* [exgenius](https://github.com/jeffweiss/exgenius) - (未ドキュメント化) Rap Genius API用のElixirライブラリ
* [exgravatar](https://github.com/scrogson/exgravatar) - Gravatar URLを生成するElixirモジュール
* [exgrid](https://github.com/bradleyd/exgrid) - SendgridのAPIとやり取り
* [exjira](https://github.com/mattweldon/exjira) - JIRA用のElixirライブラリ
* [explay](https://github.com/sheharyarn/explay) - Elixir用の非公式Google Play API
* [extwitter](https://github.com/parroty/extwitter) - Elixir用のTwitterクライアントライブラリ
* [exurban](https://github.com/oscar-lopez/exurban) - UrbanAirship API用のElixirラッパー
* [facebook](https://github.com/mweibel/facebook.ex) - Elixirで書かれたFacebook Graph APIラッパー
* [feedlex](https://github.com/essenciary/feedlex) - Feedly RSSリーダー用のElixirクライアント
* [fluent_client](https://github.com/trustatom-oss/elixir-fluent-client) - シンプルなfluentdクライアント
* [forcex](https://github.com/jeffweiss/forcex) - Force.com REST API用のElixirライブラリ
* [forecast_io](https://github.com/r-icarus/forecast_io) - Forecast.IO API 用のシンプルなラッパー
* [gcmex](https://github.com/dukex/gcmex) - Google Cloud Messaging 用の Elixir クライアントライブラリ
* [google-cloud](https://github.com/GoogleCloudPlatform/elixir-google-api) - このリポジトリには Google API との相互作用に必要なすべてのクライアントライブラリが含まれています
* [google_sheets](https://github.com/GrandCru/GoogleSheets) - CSV形式のGoogleスプレッドシートデータを取得・ポーリングするためのElixirライブラリ
* [govtrack](https://github.com/walterbm/govtrack-elixir) - [govtrack.us](https://www.govtrack.us/developers) API に対するシンプルなElixir ワッパー
* [gringotts](https://github.com/aviabird/gringotts) - Elixir および Phoenix フレームワーク向けの完全な支払いライブラリ。Ruby世界の [ActiveMerchant](https://github.com/activemerchant/active_merchant) に類似
* [honeywell](https://github.com/jeffutter/honeywell-elixir) - Honeywell Lyric、Roundおよび水漏れ・凍結検知デバイスAPI用のクライアント
* [kane](https://github.com/peburrows/kane) - [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/overview) クライアント
* [keenex](https://github.com/bryanjos/keenex) - Keen.io API クライアント
* [link_shrinkex](https://github.com/jonahoffline/link_shrinkex) - GoogleのURL短縮APIを用いて短いURLを作成・取得するためのElixirライブラリ
* [m2x](https://github.com/attm2x/m2x-elixir) - AT&T M2X 用のElixir クライアント。ネットワーク接続機械間（M2M）デバイスおよびIoT向けのクラウドベースの完全管理型時系列データストレージサービス。（[Erlang Version](https://github.com/attm2x/m2x-erlang)）
* [mailchimp](https://github.com/duartejc/mailchimp) - MailChimp API v3用の基本的なElixirラッパー
* [mailgun](https://github.com/chrismccord/mailgun) - Elixir用のMailgunクライアント
* [mandrill](https://github.com/slogsdon/mandrill-elixir) - Elixir用のMandrillラッパー
* [marvel](https://github.com/bryanjos/marvel) - Marvel API用のCLIおよびElixir APIクライアント
* [mexpanel](https://github.com/blendmedia/mexpanel) - Mixpanel HTTP API用のE及リブラリ
* [mixpanel](https://github.com/michihuber/mixpanel_ex) - Mixpanel HTTP API用のE及リブラリ
* [mixpanel_data_client](https://github.com/jeregrine/mixpanel_data_client) - MixpanelデータエクスポートAPIとの相互作用用のクライアント
* [mmExchangeRate](https://github.com/Arkar-Aung/mmExchangeRate) - ミャンマーバンクのAPIを基にしたシンプルな為替チェックと計算ツール
* [nacha](https://github.com/RiverFinancial/nacha) - 米国ACH送金用のNACHAファイルの生成・パースに必要なElixirライブラリ
* [nadia](https://github.com/zhyu/nadia) - Telegram Bot API用のElixirによるラッパー
* [omise](https://github.com/omise/omise-elixir) - Omise用のElixirクライアントライブラリ
* [opbeat](https://github.com/teodor-pripoae/opbeat) - Opbeat用のElixirクライアント
* [pagexduty](https://github.com/ride/pagexduty) - Pagerduty用のElixirクライアント
* [parsex](https://github.com/maarek/ParsEx) - ParsExは、Parse.comのRESTフルAPIと通信するためのElixirのHTTPクライアントです
* [particle](https://github.com/jeffutter/particle-elixir) - Particle IoTプラットフォームのHTTP API向けのElixirクライアントです
* [pathway](https://github.com/novabyte/pathway) - Erlang/Elixir 用の [Trak.io](http://trak.io/) REST API クライアント
* [pay](https://github.com/era/pay) - PayPalおよびその他の支払いソリューションに対応するElixirのライブラリです
* [pay_pal](https://github.com/zensavona/paypal) - PayPalのREST APIを扱うためのE及ライブラリです
* [pigeon](https://github.com/codedge-llc/pigeon) - iOSおよびAndroidのプッシュ通知を送信するためのHTTP2準拠のラッパーです
* [pocketex](https://github.com/essenciary/pocketex) - Pocketex は、Pocket の「読むのを後回し」サービス [getpocket.com](https://getpocket.com/) 用のElixir クライアント
* [pusher](https://github.com/edgurgel/pusher) - PusherのREST APIにアクセスするためのElixirライブラリです
* [qiniu](https://github.com/tony612/qiniu) - Qiniu向けのElixir SDKです
* [random_user_api](https://hex.pm/packages/random_user_api) - 別のシンプルなrandomuser.me APIクライアントです
* [reap](https://github.com/Raynes/reap) - Reapは、refheap APIとやり取りするためのシンプルなElixirライブラリです
* [reddhl](https://github.com/MonkeyIsNull/reddhl) - Redditおよびそのさまざまなサブレッドから、見出しとリンクを取得するためのツールです
* [redtube](https://github.com/kkirsche/Redtube_Elixir) - Redtube APIをElixirで書かれたラッパーです
* [reporter](https://github.com/KazuCocoa/simple_app_reporter_ex) - Reporterは、アプリレビューの報告を行うためのシンプルなアプリレビューライブラリです。AppStoreおよびGooglePlayに対応しています
* [riemann](https://github.com/koudelka/elixir-riemann) - Elixir 用の [Riemann](http://riemann.io/) クライアント
* [rs_twitter](https://github.com/radzserg/rstwitter) - Elixir向けの低レベルのTwitterクライアントです
* [semver](https://github.com/lee-dohm/semver) - semver.org準拠のバージョン文字列を扱うためのユーティリティです
* [sendgrid](https://github.com/alexgaribay/sendgrid_elixir) - SendGridを使って、組み立て可能な、トランザクショナルなメールを送信します
* [shopify](https://github.com/nsweeting/shopify) - Shopify APIに簡単にアクセスできます
* [sift_ex](https://github.com/C404/sift_ex) - Elixir向けのSiftscience APIライブラリです
* [simplex](https://github.com/adamkittelson/simplex) - Amazon SimpleDB APIとやり取りするためのElixirライブラリです
* [slack](https://github.com/BlakeWilliams/Elixir-Slack) - Slackのリアルタイムメッセージングクライアント（Elixir版）です
* [sparkpost](https://github.com/SparkPost/elixir-sparkpost) - SparkPostを使ってメールを送信するためのElixirライブラリです
* [statix](https://github.com/lexmag/statix) - StatsDプロトコルでアプリのメトリクスを公開する
* [stripity_stripe](https://github.com/robconery/stripity-stripe) - [Stripe](https://stripe.com/) 用のElixir ライブラリ
* [tagplay](https://github.com/tagplay/elixir-tagplay) - Tagplay API用のElixirクライアント
* [telegex](https://github.com/telegex/telegex) - Elixirで書かれたTelegramボットフレームワークおよびAPIクライアント
* [telephonist](https://github.com/danielberkompas/telephonist) - Twilio呼び出し用のElixirのステートマシン
* [tentacat](https://github.com/edgurgel/tentacat) - GitHub API用のシンプルなElixirラッパー
* [tg_client](https://github.com/ccsteam/ex-telegram-client) - Telegram-CLIと通信するElixirラッパー
* [tradehub](https://github.com/anhmv/tradehub-elixir) - Tradehubブロックチェーン用のElixirクライアントライブラリ
* [traitify_elixir](https://github.com/traitify/traitify_elixir) - Traitify開発者API用のElixirクライアントライブラリ
* [ui_faces](https://github.com/katgironpe/ui_faces) - UIFaces APIクライアント（Elixirアプリケーション用）
* [unsplash-elixir](https://github.com/waynehoover/unsplash-elixir) - Unsplash用のElixirライブラリ
* [vultr](https://github.com/avitex/elixir-vultr) - Vultr API用のシンプルラッパー
* [xe](https://github.com/paulodiniz/xe) - 通貨のリアルタイム変換
* [zanox](https://github.com/rafaelss/zanox) - Zanox API

## 翻訳と国際化 <a id="translations-and-internationalizations"></a>
*翻訳と国際化に関するElixirライブラリと資料です。*

* [exkanji](https://github.com/ikeikeikeike/exkanji) - ひらがな、カタカナ、ローマ字、漢字の間の変換を行うElixirライブラリ。Mecabを使用する。
* [exromaji](https://github.com/ikeikeikeike/exromaji) - ひらがな、カタカナ、ローマ字の間の変換を行うElixirライブラリ
* [free PO editor](https://pofile.net/free-po-editor) - POファイルの翻訳ツール
* [getatrex](https://github.com/alexfilatov/getatrex) - Elixir/Phoenixプロジェクト用のGettextロケールの自動翻訳ツール（Google翻訳を使用）
* [gettext](https://github.com/elixir-lang/gettext) - Elixir用の国際化およびローカライズサポート
* [linguist](https://github.com/change/linguist) - Elixir用の国際化ライブラリ
* [parabaikElixirConverter](https://github.com/Arkar-Aung/ParabaikElixirConverter) - ParabaikElixirConverterはParabaikコンバーターのElixir版であり、UnicodeとZawgyi-Oneの相互変換を行うことができる。
* [trans](https://github.com/belaustegui/trans) - PostgreSQLのJSONBデータ型を活用したモデル内の埋め込み翻訳を管理するElixir用のライブラリ

## ユーティリティ <a id="utilities"></a>
*ユーティリティに関するElixirライブラリと資料です。*

* [ar2ecto](https://github.com/aforward/ar2ecto) - ActiveRecordからEctoに移行を支援するMixタスクのセットであるAr2ecto
* [async_with](https://github.com/fertapric/async_with) - Elixirの"with"に追加されたモジュールで、すべての文を並列で実行できるようにする
* [crutches](https://github.com/mykewould/crutches) - Elixirの標準ライブラリを補完するためのユーティリティライブラリ
* [deppie](https://github.com/whitfin/deppie) - Elixirの最も魅力的な非推奨ログライブラリ
* [dot-notes](https://github.com/whitfin/dot-notes-elixir) - マップやリストに対するシンプルなドット／ブレット記法のパーサー／変換機能
* [dress](https://github.com/veelenga/dress) - 標準出力（stdout）を華やかにしてくれるCLIアプリ
* [erlang-history](https://github.com/ferd/erlang-history) - Erlangのシェルに履歴機能を追加するためのハック
* [erlsh](https://github.com/proger/erlsh) - システムシェル、パス、外部プログラムとの相互作用に関わる関数とポートのファミリー
* [erlware_commons](https://github.com/erlware/erlware_commons) - Erlangの追加標準ライブラリ
* [ex_progress](https://github.com/acj/ex_progress) - 多数のタスクおよびサブタスクの進行状況を追跡するためのライブラリ
* [exjprop](https://github.com/stocks29/exjprop) - ElixirでさまざまなソースからJavaプロパティファイルを読み取るためのライブラリ
* [fitex](https://github.com/timdeputter/FitEx) - FitExはマクロモジュールで、関数定義に少しの甘えを提供する
* [global](https://github.com/mgwidmann/global) - Erlang の `:global` モジュールのラッパー
* [mandrake](https://github.com/mbasso/mandrake) - Elixirに新たな魔法をもたらす関数型プログラミングライブラリ
* [mnemonix](https://github.com/christhekeele/mnemonix) - キー／バリューストアへの統一インターフェース
* [once_more](https://github.com/vegris/once_more) - シンプルなリトライ機能で、合成可能なバックオフ戦略を提供
* [pachka](https://github.com/vegris/pachka) - Elixirアプリケーション向けのメッセージバッチングライブラリ
* [plasm](https://github.com/facto/plasm) - PlasmはEctoの合成可能なクエリツールで、.count、.random、.first、.last、.find、.inserted_before、.inserted_afterなど、高度な関数を含む
* [plugmap](https://github.com/nerdslabs/plugmap) - PlugmapはPlug/Phoenixフレームワーク向けのサイトマップ生成ライブラリ
* [pubsub](https://github.com/simonewebdesign/elixir_pubsub) - ビジネスロジックプロセスにおける通信負担を軽減するために、発行・購読メカニズムを実装した発行・購読ユーティリティライブラリ
* [PubSubx](https://github.com/sonic182/pub_subx) - ElixirのGenServerとRegistryをベースにしたシンプルなpublish-subscribeシステムで、動的なトピック、プロセス監視、自動サブスクリプション管理が可能。
* [quark](https://github.com/robot-overlord/quark) - 一般的な関数型プログラミングの慣習：コンビネータ、カーリング、部分適用を提供するライブラリ。
* [retry](https://github.com/safwank/ElixirRetry) - 線形リトライ、指数バックオフ、待ち時間の可合成デリーズをサポートするシンプルなElixirマクロ。
* [sips_downloader](https://github.com/DavsX/SipsDownloader) - ElixirSipsのエピソードおよびすべてのファイルをダウンロードするためのElixirモジュール。
* [sitemap](https://github.com/ikeikeikeike/sitemap) - SitemapはElixirでSitemapsを生成する最も簡単な方法。
* [sitemapper](https://github.com/tomtaylor/sitemapper) - 高速かつストリームベースのXML Sitemap生成器。
* [uef-lib](https://github.com/DOBRO/uef-lib) - ユーティリティなErlang関数ライブラリで、リスト、バイナリ、マップ、数値、日付時刻の操作に必要なモジュールを提供。特定のケース（例：ファイルI/O操作やバイナリ変換）においてパフォーマンスを最適化した関数も含まれる。
* [vert.x](https://github.com/PharosProduction/ExVertx) - TCPソケットを用いたVert.xサービスとのElixirイベントバスブリッジ。

## バリデーション <a id="validations"></a>
*バリデーションに関するElixirライブラリと資料です。*

* [bankster](https://github.com/railsmechanic/bankster) - Elixir向けのIBANアカウント番号およびBICの検証ライブラリ。
* [ex_gtin](https://github.com/kickinespresso/ex_gtin) - GS1規格に基づくGTINコードの検証ライブラド。
* [ex_nric](https://github.com/falti/ex_nric) - シンガポールの国際登録身分証（NRIC）番号の検証。
* [exop](https://github.com/madeinussr/exop) - 事前定義された契約に基づいてビジネスロジックを封じ込めるおよびパラメータの検証を行うライブラリ。
* [form](https://github.com/synrc/form) - フォームの設計と検証を提供するライブラリ。
* [goal](https://github.com/martinthenth/goal) - LiveViewsおよびJSON/HTMLコントローラー向けのパラメータ検証ライブラリ（Ectoに基づく）。
* [is](https://github.com/bydooweedoo/is) - ネスト構造をサポートする、高速かつ拡張性があり使いやすいデータ構造検証ライブラリ。
* [jeaux](https://github.com/zbarnes757/jeaux) - 軽量で使いやすいスキーマ検証ライブラリ。
* [optimal](https://github.com/albert-io/optimal) - キーワードリストオプションのスキーマベース検証ライブラリ。
* [shape](https://github.com/prio/shape) - Prismatic Schemeに基づくElixir向けデータ検証ライブラリ。
* [skooma](https://github.com/bcoop713/skooma) - データ構造の記述と検証を行うシンプルなデータ検証ライブラリ。
* [to_atom_in](https://github.com/JohnJocoo/to_atom_in) - 文字列とアトムを安全にセットに変換するユーティリティ。
* [uk_postcode](https://github.com/KushalP/uk_postcode) - UKの郵便番号を解析・検証するライブラリ
* [vex](https://github.com/CargoSense/vex) - Elixir用の拡張可能なデータ検証ライブラリ

## バージョン管理 <a id="version-control"></a>
*バージョン管理に関するElixirライブラリと資料です。*

* [gitex](https://github.com/awetzel/gitex) - Git オブジェクトストレージのElixir実装だが、他のストレージやトピックとの同じ意味を実現することを目指す

## 動画 <a id="video"></a>
*動画に関するElixirライブラリと資料です。*

* [ffmpex](https://github.com/talklittle/ffmpex) - FFmpegのコマンドライン用ラッパー
* [silent_video](https://github.com/talklittle/silent_video) - GIFや動画を静止画に変換し、モバイル再生に最適化

## WebAssembly <a id="webassembly"></a>
*WebAssemblyに関するElixirライブラリと資料です。*

* [lumen](https://github.com/lumen/lumen) - WebAssembly向けに設計された代替BEAM実装
* [wasmex](https://github.com/tessi/wasmex/) - ElixirからWebAssembly/WASMバイナリを実行

## XML <a id="xml"></a>
*Libraries and implementations working with XML (for html tools please go to the [HTML](#html) section).*

* [elixir-map-to-xml](https://github.com/gunnar2k/elixir-map-to-xml) - ElixirのマップをXMLドキュメントに変換
* [elixir-xml-to-map](https://github.com/homanchou/elixir-xml-to-map) - XML文字列からElixirのマップデータ構造を作成
* [erlsom](https://github.com/willemdj/erlsom) - ErlsomはErlangでXMLドキュメントを解析・生成するライブラリ
* [exmerl](https://github.com/pwoolcoc/exmerl) - xmerl用のElixirラッパー
* [exml](https://github.com/expelledboy/exml) - xmerlのXPathに対応した最もシンプルなElixirラッパー
* [exoml](https://github.com/Overbryd/exoml) - XMLをツリー構造にデコード・エンコードするモジュール
* [fast_xml](https://github.com/processone/fast_xml) - 高速なExpatベースのErlang XML解析ライブラリ
* [meeseeks](https://github.com/mischov/meeseeks#xml) - CSSまたはXPathセレクタを使ってHTMLおよびXMLからデータを解析・抽出するライブラリ
* [quinn](https://github.com/nhu313/Quinn) - Elixir用のXML解析ライブラリ
* [saxy](https://github.com/qcam/saxy) - SaxyはElixirで高速かつ標準適合性に焦点を当てたXML解析・エンコーダー
* [sweet_xml](https://github.com/awetzel/sweet_xml) - XMLをシンプルかつ効果的にクエリ
* [xml_builder](https://github.com/joshnuss/xml_builder) - Elixir用のXML生成ライブラリ
* [xmlrpc](https://github.com/ewildgoose/elixir-xml_rpc) - クライアントおよびサーバー用のXML-RPCのエンコード・デコードを行うライブラリ

## YAML <a id="yaml"></a>
*YAMLに関するElixirライブラリと資料です。*

* [fast_yaml](https://github.com/processone/fast_yaml) - 高速YAMLはlibyaml "C"ライブラリのErlang用ラッパー
* [yamerl](https://github.com/yakaz/yamerl) - Erlangで書かれたYAML 1.2パーサー
* [yaml_elixir](https://github.com/KamilLelonek/yaml-elixir) - Elixir向けのネイティブErlang実装に基づくYAMLパーサー
* [ymlr](https://github.com/ufirstgroup/ymlr) - Elixir向けのYAMLエンコーダー
* [yomel](https://github.com/Joe-noh/yomel) - Elixir向けのlibyamlインターフェース

# 資料 <a id="resources"></a>
Elixir開発の技術と知識を高める書籍、Webサイト、記事などの資料です。

## 書籍 <a id="books"></a>
*書籍に関するElixirライブラリと資料です。*

* [Adopting Elixir](https://pragprog.com/book/tvmelixir/adopting-elixir) - Elixirを企業に導入するための、Elixirを構築し、大規模に成功活用した人々が実際の戦略を提供する書籍。アプリケーションの概念からプロダクションまで必要なすべての情報を網羅（2017）
* [Async Elixir](https://github.com/Arp-G/async-elixir) - このインタラクティブなLivebookで、Elixirの並列処理とプロセスの世界に深く入り込んでみよう
* [Craft GraphQL APIs in Elixir with Absinthe](https://pragprog.com/book/wwgraphql/craft-graphql-apis-in-elixir-with-absinthe) - Web APIをGraphQLにアップグレードし、ユーザーに柔軟なクエリを提供し、コードを簡素化するための宣言型構造を活用（2017）
* [Elixir Cookbook](https://www.packtpub.com/application-development/elixir-cookbook) - Paulo A Pereiraがテーマ別に分類したレシピ集（2015）
* [Elixir do zero à concorrência](https://www.casadocodigo.com.br/products/livro-elixir) - （ポルトガル語）Tiago DaviがElixirによる関数型および並列プログラミングの導入を紹介（2014）
* [Elixir in Action](https://www.manning.com/books/elixir-in-action) - Saša JurićがElixirでプロダクション対応システムを構築するための概要から詳細な解説（2及）
* [Elixir in Action, Second Edition](https://www.manning.com/books/elixir-in-action-second-edition) - Elixir 1.7向けに改訂・更新された『Elixir in Action 第2版』は、スケーラビリティ、障害耐性、高可用性に関連する実用的な問題にElixirを適用する方法を教える（2019）
* [Elixir in Action, Third Edition](https://www.manning.com/books/elixir-in-action-third-edition) - Elixir 1.14向けに完全に更新されたこの权威書は、スケーラビリティ、障害耐性、高可用性の問題をどのように解決するかを明らかにする（2023）
* [Elixir Succinctly](https://www.syncfusion.com/ebooks/elixir-succinctly) - Elixirとその生態系の基本を学ぶための短い書籍
* [Engineering Elixir Applications](https://pragprog.com/titles/beamops/engineering-elixir-applications/) - _(現在ベータ版)_ サブタイトルに示されているように、本書はソフトウェアデリバリーの各段階を確実に進めるために必要な技術とスキルを探索する。
* [Erlang and Elixir for Imperative Programmers](https://leanpub.com/erlangandelixirforimperativeprogrammers) - Wolfgang Loderが機能型概念の文脈でErlangとElixirを紹介（2016）
* [Erlang in Anger](http://www.erlang-in-anger.com/) - Fred Hebertが「戦時におけるErlang医師」としての行動を示す小さなガイド（2014）
* [Functional Web Development with Elixir, OTP, and Phoenix](https://pragprog.com/book/lhelph/functional-web-development-with-elixir-otp-and-phoenix) - Web開発を根本的に新しい視点で考えるための強力な新しい技術への扉を開く（2017）
* [Getting Started - Elixir](https://github.com/potatogopher/elixir-getting-started) - ElixirのGetting StartedチュートリアルのPDF、MOBI、EPUBファイル（2016）
* [Hands-on Elixir & OTP: Cryptocurrency trading bot](https://www.elixircryptobot.com) - 現実世界のプロジェクトを作成することでElixirとOTPを学びたいですか？『Hands-on *Elixir & OTP: Cryptocurrency trading bot*』では、興味深いソフトウェアプロジェクトに取り組んで、重要な抽象概念と基本原則を反復的に改善しながら学びます（2021）
* [Introducing Elixir ](http://shop.oreilly.com/product/0636920030584.do) - Simon St. LaurentとJ. David Eisenbergが提供する、コード例と演習が豊富なElixirの初歩的な導入（2013）
* [Learn Functional Programming with Elixir](https://pragprog.com/book/cdc-elixir/learn-functional-programming-with-elixir) - Elixirのトレインに命令的な意識で乗ってはいけません！機能言語を最大限に活用するには、機能的に考える必要があります（2017）.
* [Metaprogramming Elixir: Write Less Code, Get More Done (and Have Fun!)](https://pragprog.com/book/cmelixir/metaprogramming-elixir) - Chris McCordが2015年に提示した、Elixirのメタプログラミング機能を活用してコードを改善するための詳しい解説.
* [Phoenix for Rails Developers](http://www.phoenixforrailsdevelopers.com) - Rails開発者が既存の知識を活かしてフェニックスを学ぶことができる方法を示した書籍。Elvio Vicosa（2017）.
* [Phoenix in Action](https://manning.com/books/phoenix-in-action) - 既存のウェブ開発スキルを踏まえ、フェニックスの独自の利点と、必要なだけのElixirを学ぶ書籍。Geoffrey Lessel（2017）.
* [Phoenix Inside Out](https://shankardevy.com/phoenix-book/) - このシリーズの目的は、自信を持ってフェニックスを扱える開発者になることです。3つの編集版があり、フェニックスに新しく入りたい開発者の多様なニーズに対応しています.
* [Programming Elixir 1.6](https://pragprog.com/titles/elixir16/) - Dave Thomasによる、Elixirを使った関数型プログラミングと並行プログラミングの入門書（2014年）
* [Programming Phoenix 1.4](https://pragprog.com/titles/phoenix14/) - Chris McCord、José Valim、Bruce Tateによる、フェニックスフレームワークでウェブアプリケーションを構築するための決定的なガイド（2015）.
* [The Beam Book](https://happi.github.io/theBeamBook/) - ErlangランタイムシステムERTSおよび仮想マシンBEAMについての説明.
* [The Little Elixir & OTP Guidebook](https://www.manning.com/books/the-little-elixir-and-otp-guidebook) - Benjamin Tan Wei Hao（2014）による、小さなプロジェクトから中規模プロジェクトまでを経てElixirとOTPを学ぶ書籍.
* [The Phoenix LiveView Cookbook](https://www.liveviewcookbook.com/) - フェニックスライブビューの電子書籍で、よくある問題を解決するための試行錯誤されたレシピを収録しています.
* [Études for Elixir](https://www.oreilly.com/library/view/etudes-for-elixir/9781491917640/) - J. David Eisenberg（2013）によるElixirでプログラミングする練習問題のコレクション（[Github Repo](https://github.com/oreillymedia/etudes-for-elixir)）

## チートシート <a id="cheat-sheets"></a>
*チートシートに関するElixirライブラリと資料です。*

* [benjamintanweihao/elixir-cheatsheets](https://github.com/benjamintanweihao/elixir-cheatsheets/) - GenServerとSupervisorのクイックリファレンス.
* [elixir-lang/elixir](https://hexdocs.pm/elixir/main/enum-cheat.html) - Enumのクイックリファレンス.

## コミュニティ <a id="community"></a>
*コミュニティに関するElixirライブラリと資料です。*

* [#elixir-lang](http://webchat.freenode.net/?channels=elixir-lang) - FreenodeのIRCチャンネル #elixir-lang.
* [Elixir Forum](https://elixirforum.com/) - すべてのElixirに関するディスカッションフォーラム。
* [elixir-lang-core](https://groups.google.com/d/forum/elixir-lang-core) - Elixirコア開発用のメールリスト。質問や一般ディスカッションは"talk"を用いてください.
* [elixir-lang-talk](https://groups.google.com/d/forum/elixir-lang-talk) - Elixirの公式メールリスト（質問やディスカッション用）.
* [ElixirSlack](https://elixir-slackin.herokuapp.com/) - Elixirのスラックコミュニティ.

## エディター <a id="editors"></a>
*エディターに関するElixirライブラリと資料です。*

* [Alchemist](https://github.com/tonini/alchemist.el) - エマックスにElixirツールを統合する方法.
* [Alchemist-Server](https://github.com/tonini/alchemist-server) - エディタやIDEに依存しないバックグラウンドサーバーでElixirmixプロジェクトの情報を提供します.
* [Alchemist.vim](https://github.com/slashmili/alchemist.vim) - ElixirツールをVimに統合する方法。
* [Atom](https://atom.io/packages/language-elixir) - Atom における Elixir の言語サポート
* [atom-elixir](https://github.com/msaraiva/atom-elixir) - Elixir 用の Atom パッケージ
* [atom-iex](https://github.com/indiejames/atom-iex) - Atom で IEx セッションを実行
* [elixir-ls](https://github.com/JakeBecker/elixir-ls) - Elixir 用のフロントエンドに依存しない IDE「スマートネス」サーバー。JSON 基盤の「Language Server Protocol」標準を実装し、VS Code のデバッガプロトコルを用いてデバッガサポートを提供
* [elixir-tmbundle](https://github.com/elixir-lang/elixir-tmbundle) - Elixir 用の TextMate および SublimeText バンディュ
* [elixir_generator](https://github.com/jadercorrea/elixir_generator.vim) - Vim プラグインで Elixir モジュールおよびテストファイルを1コマンドで生成
* [ElixirSublime](https://github.com/vishnevskiy/ElixirSublime) - SublimeText 3 用の Elixir プラグインでコード補完とリントを提供
* [Jetbrains](https://github.com/KronicDeth/intellij-elixir) - IntelliJ IDEA、RubyMine、WebStorm、PhpStorm、PyCharm、AppCode、Android Studio、0xDBE 用の Elixir サポート
* [mix.nvim](https://github.com/brendalf/mix.nvim) - Neovim 用の Mix ワッパープラグイン
* [Notepad++](https://github.com/Hades32/elixir-udl-npp) - Notepad++ での Elixir の文法強調表示
* [Nova Elixir](https://github.com/stollcri/elixir.novaextension) - Nova での Elixir ファイル（.ex、.exs、.eex）の文法強調表示およびコード補完
* [nvim](https://github.com/dm1try/nvim) - Elixir でプラグインを書くための Neovim ホスト
* [phoenix-snippets](https://github.com/phoenixframework-Brazil/phoenix-snippets) - Atom 用の Phoenix シンプト
* [vim-elixir](https://github.com/elixir-lang/vim-elixir) - Elixir 用の Vim 設定ファイル
* [vim-ex_test](https://github.com/moofish32/vim-ex_test) - Thoughtbots vim-rspec をベースにした Vim テストランナー
* [vim-mix-format](https://github.com/mhinz/vim-mix-format) - VimおよびNeovim用のAsync `mix format`
* [vscode-elixir](https://github.com/mat-mcloughlin/vscode-elixir) - Visual Studio Code での Elixir サポート
* [vscode-elixir-ls](https://github.com/JakeBecker/vscode-elixir-ls) - ElixirLS によって駆動された VS Code での E及言語サポートおよびデバッガ

## ニュースレター <a id="newsletters"></a>
*ニュースレターに関するElixirライブラリと資料です。*

* [Elixir Digest](http://elixirdigest.net) - Elixir および Phoenix に関する最新記事を配信する週刊ニュースレター
* [Elixir Merge](https://elixirmerge.com) - 毎日配信されるニュースレター。各号には2つのキュレーションされた更新（記事、チュートリアル、動画、ポッドキャスト）を、読みやすいフォーマットで提供
* [Elixir Radar](http://plataformatec.com.br/elixir-radar) - Plataformatec が週に1回メールで発行する「公式」Elixir ニュースレター
* [ElixirWeekly](https://elixirweekly.net) - Elixirコミュニティのニュースレター。簡単に見落としがちな内容を、[ElixirStatus](http://elixirstatus.com) およびウェブ上で共有

## その他のAwesomeリスト <a id="other-awesome-lists"></a>
*Other amazingly awesome lists can be found at [jnv/lists](https://github.com/jnv/lists#lists-of-lists) or [bayandin/awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness#awesome-awesomeness).*

* [Awesome Elixir and CQRS](https://github.com/slashdotdash/awesome-elixir-cqrs) - Elixirにおけるコマンド・クエリ責務分離（CQRS）とイベントソーシングの優れた資料をまとめたリスト
* [Awesome Elixir by LibHunt](https://elixir.libhunt.com) - ElixirとErlangのパッケージおよびリソースを厳選したリスト
* [Awesome Erlang](https://github.com/drobakowski/awesome-erlang) - Erlangのライブラリ、リソース、そして素晴らしいものたちを厳選したリスト
* [Curated Elixir Resources](https://hackr.io/tutorials/learn-elixir) - トップに推奨されるElixirのリソースを集めたコレクション
* [Erlang Bookmarks](https://github.com/0xAX/erlang-bookmarks) - Erlang開発者向けのリンク集

## ポッドキャスト <a id="podcasts"></a>
*ポッドキャストに関するElixirライブラリと資料です。*

* [Elixir Fountain](https://soundcloud.com/elixirfountain) - Elixir Fountainポッドキャスト
* [Elixir Mix](https://devchat.tv/elixir-mix/) - Elixir・ミックス ポッドキャスト
* [Elixir Outlaws](https://elixiroutlaws.com) - Elixir Outlawsポッドキャスト
* [Elixir Talk](https://soundcloud.com/elixirtalk) - Elixir Talkポッドキャスト
* [Thinking Elixir](https://podcast.thinkingelixir.com) - シンキング・Elixir ポッドキャスト

## 読み物 <a id="reading"></a>
*読み物に関するElixirライブラリと資料です。*

* [Discover Elixir & Phoenix](https://www.ludu.co/course/discover-elixir-phoenix/) - Elixir言語とフェニックスフレームワークを教えるオンラインコース
* [Elixir Cheat-Sheet](http://media.pragprog.com/titles/elixir/ElixirCheat.pdf) - エンドリクサのキャッチシート（アンドリ・ハント＆デイブ・トーマスによる）
* [Elixir Code Smells](https://github.com/lucasvegi/Elixir-Code-Smells) - Elixir専用のコードの匂い（code smells）をリストアップしたカタログ。この言語で開発されたソフトウェアの品質を損なう可能性がある。
* [Elixir Functional Programming](https://github.com/kblake/functional-programming) - Elixir言語を使って関数型プログラミングを紹介するための資料
* [Elixir Refactorings](https://github.com/lucasvegi/Elixir-Refactorings) - Elixirで開発されたコードのリファクタリング戦略をリストアップしたカタログ。コードの再設計と品質向上を促進する。
* [Elixir School](https://elixirschool.com/) - Elixirプログラミング言語のレッスン
* [Elixir Tab](https://github.com/efexen/elixir-tab) - Elixirのコアライブラリを学ぶために使えるChrome拡張機能
* [Elixir vs Ruby | How Switching To Elixir Made Our Team Better](https://foxbox.com/blog/elixir-vs-ruby/) - Elixirをルビより選ぶべきタイミングと理由を詳細に説明した長文記事
* [Learn With Me: Elixir](https://inquisitivedeveloper.com/tag/lwm-elixir/) - 私がElixirを学ぶシリーズ。あなたも一緒に学べる。
* [The Little Schemer in Elixir](https://github.com/jwhiteman/a-little-elixir-goes-a-long-way) - 『Little Schemer』の演習とアルゴリズムをElixirに移植したもの
* [xElixir](https://github.com/exercism/xelixir) - Elixirにおけるエクササイズ（練習問題）

## スクリーンキャスト <a id="screencasts"></a>
*スクリーンキャストに関するElixirライブラリと資料です。*

* [Alchemist Camp](https://alchemist.camp) - アルケミスト・キャンプは、プロジェクトベースの無料Elixir学習動画を多数提供しています
* [Confreaks (Elixir)](http://confreaks.tv/tags/40) - Elixir関連のカンファレンス講演
* [Curso de Elixir de 0 a 100](https://www.youtube.com/watch?v=-K74G9nlzSY&list=PLMLox3fRb_I4_4-DnU3yS_EglDAuVpeEg) - スペイン語で無料提供されるElixirの完全コース
* [Elixir for Programmers](https://codestool.coding-gnome.com/courses/elixir-for-programmers) - 機能的・並列・信頼性のある（そして楽しい！）、デイブ・トーマスが指導する講義
* [Elixir Foundation](https://www.youtube.com/playlist?list=PLjQo0sojbbxXc4aWg5i2umjv7U8YDoHQT) - 実際の例を構築しながらElixirを学ぶ。GenServer、Agentsなど、多くのElixirの基本要素がどのように動作するかを学ぶ
* [Elixir Sips](http://elixirsips.com/) - Elixir学習用の短い動画
* [ElixirCasts.io](https://elixircasts.io/) - Elixirとフェニックスを学ぶためのシンプルな動画
* [ExCasts](https://excasts.com) - すべてのスキルレベルに合わせたElixirとフェニックスの動画
* [Kamil Skowron](https://www.youtube.com/c/kamilskowron) - YouTubeチャンネルで関数型プログラミングを推進し、実践的なElixirプログラミング動画（例：『Hands-on Elixir & OTP: Cryptocurrency trading bot』シリーズ）を公開
* [LearnElixir.tv](https://www.learnelixir.tv/) - 初心者向け、詳細でステップバイステップの動画
* [LearnPhoenix.tv](https://www.learnphoenix.tv/) - フェニックスを使って、高速で信頼性の高いウェブアプリを構築する方法を学ぶ
* [Meet Elixir](https://www.pluralsight.com/courses/meet-elixir) - ジョセ・ヴァリムがElixirの機能や概念を解説する動画

## スタイルガイド <a id="styleguides"></a>
*スタイルガイドに関するElixirライブラリと資料です。*

* [christopheradams/elixir_style_guide](https://github.com/christopheradams/elixir_style_guide) - Elixirのコミュニティが運営するスタイルガイド
* [lexmag/elixir-style-guide](https://github.com/lexmag/elixir-style-guide) - Elixirの意見を反映したスタイルガイド
* [rrrene/elixir-style-guide](https://github.com/rrrene/elixir-style-guide) - [Credo](https://github.com/rrrene/credo) でチェックされたスタイルガイド

## Webサイト <a id="websites"></a>
*Webサイトに関するElixirライブラリと資料です。*

* [30 Days of Elixir](https://github.com/seven1m/30-days-of-elixir) - 30の練習問題を通じてElixir言語を学ぶ
* [BEAM Community](http://beamcommunity.github.io/) - 分散システムから、堅牢なサーバー、そしてErlangVMにおける言語設計まで
* [Benjamin Tan - Learnings & Writings](http://benjamintan.io/blog/tags/elixir/) - 主にElixirに関する投稿を構成するブログ
* [Elixir Career](https://elixir.career/) - Elixir開発者向けの求人掲載サイトとElixir開発者のコミュニティ
* [Elixir Examples](http://elixir-examples.github.io/) - Elixirプログラミング言語の小さな例のコレクション
* [Elixir Flashcards](https://elixircards.co.uk/) - フラッシュカードは知識を向上させるための強力な手段です。Elixircardsは、手作りでプロフェッショナルに印刷されたElixir向けフラッシュカードです。
* [Elixir Github Repository](https://github.com/elixir-lang/elixir) - プロジェクトリポジトリ
* [Elixir Github Wiki](https://github.com/elixir-lang/elixir/wiki) - プロジェクトのWikiで、多くの有用な情報が収録されています
* [Elixir Online Courses list - Classpert](https://classpert.com/elixir-programming) - Classpertオンラインコース検索から選ばれたElixirオンラインコース一覧（一部は無料）
* [Elixir Quiz](http://elixirquiz.github.io/) - 週間のプログラミング問題でElixirを学習しましょう
* [Elixir Recipes](http://elixir-recipes.github.io/) - Elixirにおけるよくある問題とその解決パターンのコレクション
* [ElixirLibs](https://elixirlibs.com) - Elixir向けのライブラリを厳選したリスト
* [Hashrocket Today I Learned - Elixir](https://til.hashrocket.com/elixir) - HashrocketチームによるElixirに関する短い投稿
* [How I start - Elixir](http://howistart.org/posts/elixir/1) - José ValimによるElixirの説明と紹介
* [Learning Elixir](http://learningelixir.joekain.com/) - プロフェッショナルなソフトウェアエンジニアがElixirを学ぶためのブログ

# 貢献 <a id="contributing"></a>
詳細は[CONTRIBUTING](https://github.com/h4cc/awesome-elixir/blob/master/.github/CONTRIBUTING.md)を確認してください。
