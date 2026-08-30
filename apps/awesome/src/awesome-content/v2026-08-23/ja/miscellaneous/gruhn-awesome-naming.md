---
title: "Awesome Naming"
description: "Namingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-gruhn-awesome-naming-readme-md"
---

# Awesome Naming

Namingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [コンピューターグラフィックス](#computer-graphics)
- [データ構造とアルゴリズム](#data-structures-and-algorithms)
- [デザインパターンとアンチパターン](#design-patterns-and-anti-patterns)
- [関数](#functions)
- [ITセキュリティ](#it-security)
- [機械学習と人工知能](#machine-learning-and-artificial-intelligence)
- [プログラミング言語とプログラミング言語理論](#programming-languages-and-programming-language-theory)
- [理論計算機科学](#theoretical-computer-science)
- [ツール、アプリケーション、ライブラリ、フレームワーク](#tools-applications-libraries-frameworks)
- [ユーザーインターフェース設計](#user-interface-design)
- [その他](#other)

---

## コンピューターグラフィックス

- [Gift wrapping algorithm](https://en.wikipedia.org/wiki/Gift_wrapping_algorithm) - 点の集合を包む最小形状を構築するアルゴリズム。

## データ構造とアルゴリズム

- [Backtracking](https://de.wikipedia.org/wiki/Backtracking) - 探索空間をたどって行き止まりに達したら、最後の分岐点まで*足跡*を戻り、別の道を試す。
- [Brute force](https://en.m.wikipedia.org/wiki/Brute-force_search) - 暴力は実際にはほぼ常に解決策だが、あまり賢いものではない。
- [Greedy algorithm](https://en.wikipedia.org/wiki/Greedy_algorithm) - 過去や将来の判断を深く考えず、現在最も良さそうな選択肢を常に選んで解を見つけるアルゴリズム。
- [Hill climbing](https://en.wikipedia.org/wiki/Hill_climbing) - 解の丘陵状の「地形」のどこかから出発し、丘の頂上に達するまで最も急な上り方向へ進む。ただし、より高い丘を見逃す可能性がある。
- [Israeli Queue](https://rapidapi.com/blog/israeli-queues-exploring-a-bizarre-data-structure/) - A type of priority queue and a reference to the infamously unorganized queues in Israel. Here items can *cut in line* when they *have already waiting friends*.
- [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) - 指定上限までのすべての素数を見つける古代のアルゴリズム。素数でない数を、ふるいで不要物をこすように系統的に除外する。
- [Simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing) - An optimization algorithm inspired by the metallurgical process of annealing, where slowly cooling a heated material allows it to settle into a low-energy, globally optimal state.
- [Stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) - パンケーキの積み重ねのように、このデータ構造では上からのみ項目を追加・削除できる。
- [Tree](https://en.wikipedia.org/wiki/Tree_(data_structure)) - 階層的に編成されたデータ構造。_root_項目から他の項目が_nodes_と_leaves_へと_branch out_する。木の集合はしばしば*forest*と呼ばれる。
- [Queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) - このデータ構造では、項目は列に並ぶように常に末尾へ追加され、先頭から削除される。

## デザインパターンとアンチパターン

- [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern) - 既存クラスのインターフェースを自身のインターフェースで包み、互換性のないインターフェースを持つクラスを連携可能にする。
- [Decorator](https://en.wikipedia.org/wiki/Decorator_pattern) - Adds new responsibilities to an object by wrapping it in a layer of additional behavior, just as you can decorate a room without changing its walls.
- [Facade](https://en.wikipedia.org/wiki/Facade_pattern) - Analogous to a facade in architecture, a facade is an object that serves as a front-facing interface masking more complex underlying structure.
- [God object](https://en.wikipedia.org/wiki/God_object) - 単一オブジェクトが知りすぎ、または行いすぎるアンチパターン。神のように全知全能である。
- [Promise](https://en.wikipedia.org/wiki/Futures_and_promises) - A representation of a result that is available in the future, unless there are errors. Like in reality, promises are broken sometimes.
- [Shotgun surgery](https://en.wikipedia.org/wiki/Shotgun_surgery) - A programming antipattern where, in a single change, you wildly add code everywhere in your codebase.
- [Spaghetti Code](https://en.wikipedia.org/wiki/Spaghetti_code) - 絡み合い、追いにくい構造を持つプログラム。

## 関数

- [fold](https://en.wikipedia.org/wiki/Fold_(higher-order_function)) - 毛布を畳むように、コレクションを反復し、各ステップで現在項目とすでに畳まれたすべてを結合する関数。
- [munch](https://hackage.haskell.org/package/base-4.19.0.0/docs/Text-ParserCombinators-ReadP.html#v:munch) - 満たされるまで入力ストリームを貪欲に消費するパーサー関数。
- [trampoline](https://clojuredocs.org/clojure.core/trampoline) - 自身が関数を返す関数を連続して実行する。_returns_して跳ね返るトランポリン上の子どものようなもの。
- [zip](https://hackage.haskell.org/package/base-4.12.0.0/docs/Prelude.html#v:zip) - ジッパーのかみ合う歯のように、二つのリストをペアの一つのリストへ併合する。

## ITセキュリティ

- [Backdoor](https://en.wikipedia.org/wiki/Backdoor_(computing)) - コンピューターシステムの通常認証を迂回する手段。
- [Canary](https://en.wikipedia.org/wiki/Stack_canary) - A secret value placed on the stack to detect buffer overflow attacks. If it has been altered, danger is near — just like a canary in a coal mine that warns miners of toxic gas.
- [Computer virus](https://en.wikipedia.org/wiki/Computer_virus) - 生物ウイルスの振る舞いに似て、他のコンピュータープログラムへ_infecting_して自己複製するプログラム。
- [Cyber hygiene](https://digitalguardian.com/blog/what-cyber-hygiene-definition-cyber-hygiene-benefits-best-practices-and-more) - システムの健全性を保ち、オンラインセキュリティを改善するためにユーザーが取るべき手順と実践。
- [Honeypot](https://en.wikipedia.org/wiki/Honeypot_(computing)) - 魅力的な標的に見せかけつつ、実際には攻撃者の検知・そらしに役立つシステムの一部。
- [Phishing](https://en.wikipedia.org/wiki/Phishing) - 機密情報を「釣る」ためにおとりを使うことを指す。
- [Phoning home](https://en.wikipedia.org/wiki/Phoning_home) - When a system (e.g. stolen computer) secretly reports back to a third party other than the current possessor. The name is a reference to the movie E.T.
- [Sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) - 悪意のあるコードを含む可能性のある未検証プログラムをテストする、安全で隔離された環境。
- [Spear phishing](https://en.wikipedia.org/wiki/Phishing#Spear_phishing) - A targeted, personal phishing attack to trick a specific individual or organization into believing that they are legitimate
- [Trojan horse](https://en.wikipedia.org/wiki/Trojan_horse_(computing)) - 真の意図についてユーザーを誤導するマルウェア。この用語は欺瞞的なトロイの木馬という古代ギリシャの物語に由来する。

## 機械学習と人工知能

- [Attention](https://en.wikipedia.org/wiki/Attention_(machine_learning)) - 人間が最も重要なものへ注意を向けるように、モデルが入力中の最も関連性の高い部分へ選択的に焦点を当てられる仕組み。
- [Confusion matrix](https://en.wikipedia.org/wiki/Confusion_matrix) - 分類器の「混乱」、すなわち実際には正しくないのに正しい予測をしたと思った頻度を表形式で要約するもの。
- [Decision boundary](https://en.wikipedia.org/wiki/Decision_boundary) - A boundary dividing the space of possible data points. Here you decide, everything on this side is SPAM, everything on that side is not.
- [Dropout](https://en.wikipedia.org/wiki/Dropout_(neural_networks)) - Randomly disabling neurons during training to prevent overfitting. Like a sports team that improves by practicing with random members absent.
- [Gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) - 勾配を反復計算して最急降下方向へ移動することでコスト関数を最小化する。
- [Hallucination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) - 学習データによって正当化されないように見えるAIの自信に満ちた応答。
- [Training](https://en.wikipedia.org/wiki/Training,_validation,_and_test_data_sets) - 機械が望む内容を学ぶまで、多数の例を見せる過程。

## プログラミング言語とプログラミング言語理論

- [Choreographic programming](https://en.wikipedia.org/wiki/Choreographic_programming) - A programming paradigm where programs are compositions of interactions among multiple concurrent participants.
- [Clojure](https://clojure.org/) - **closures**を広く用いる関数型言語。ただしJava仮想マシン上で動くため**j**を含む。
- [C++](https://en.wikipedia.org/wiki/C%2B%2B#External_links) - Although C was certainly a bad name, C++ was quite clever. The iconic increment operator **++** indicates that **C++** is the successor.
- [Garbage Collector](https://en.m.wikipedia.org/wiki/Garbage_collection_(computer_science)) - 使われなくなったメモリーのごみを見つけて再利用しようとするプログラムの一部。
- [Lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation) - 絶対に必要になるまで評価を保留し、その後は二度と評価しない評価戦略。
- [Syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar) - Syntax that makes the language "sweeter" for human use. Usually a shorthand for common operations that can also be expressed in a more verbose form.

## ユーザーインターフェース設計

- [Bento layout](https://www.saasframe.io/blog/the-bento-layout-trend) - 弁当箱の仕切りに似たグリッドベースのレイアウト。
- [Breadcrumb](https://en.wikipedia.org/wiki/Breadcrumb_(navigation)) - プログラム、文書、ウェブサイト内での位置を追跡できるナビゲーション補助。用語は童話_Hansel and Gretel_を参照する。
- [Carousel](https://www.nngroup.com/articles/designing-effective-carousels/) - 自身へ戻るループを持つアニメーションスライドショーの一種。
- [Clipboard](https://en.wikipedia.org/wiki/Clipboard_(computing)) - 作業中の_files_を一時的に置く場所（コピー＆ペーストバッファ）。
- [Desktop](https://en.wikipedia.org/wiki/Desktop_metaphor) - 文書や文書フォルダーなどのオブジェクトを置ける、ユーザーの机の比喩的な天板。
- [Hamburger button](https://en.wikipedia.org/wiki/Hamburger_button) - メニューを切り替えるボタン。関連するアイコンがハンバーガーに似ている。
- [Optimistic UI](https://uxplanet.org/optimistic-1000-34d9eefe4c05) - User interfaces that assume expensive operations will complete successfully, thereby improving the perceived performance.
- [Scrolling](https://en.wikipedia.org/wiki/Scrolling) - 画面内容は個別ページを持つ本というより、連続した羊皮紙の巻物、すなわちスクロールに近い。
- [Toast notification](https://en.wikipedia.org/wiki/Pop-up_notification) - トースターから出るトーストのように、画面端へ短時間ポップアップして自動で消える小さなメッセージ。

## 理論計算機科学

- [Busy Beaver](https://en.wikipedia.org/wiki/Busy_beaver) - 他のアルゴリズムが追随できないほど途方もなく大きな数を出力するチューリングマシン。
- [Clique problem](https://en.wikipedia.org/wiki/Clique_problem) - 友人関係を持つ人々のネットワークで相互の友人グループを見つける問題。より一般には完全部分グラフを見つける問題。
- [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) - ごく単純な要素から驚くほど複雑なものが生じる様子を示すゲーム世界。
- [Oracle](https://en.wikipedia.org/wiki/Oracle_machine) - 停止問題のような決定不能な質問にも魔法のように答えを出すブラックボックス。
- [Pumping lemma](https://en.wikipedia.org/wiki/Pumping_lemma) - 一部の形式言語では、十分に長い任意の文字列は部分文字列の繰り返しで_pumped_でき、結果も同じ形式言語に留まるという事実。

## ツール、アプリケーション、ライブラリ、フレームワーク

- [bubblewrap](https://github.com/containers/bubblewrap) - システムの保護層を形成するサンドボックスツール。
- [caffeinate](https://www.theapplegeek.co.uk/blog/caffeinate) - MacOSを「スリープ」させないためのターミナルアプリ。
- [clooney](https://github.com/GoogleChromeLabs/clooney) - A JavaScript library implementing the actor model for concurrent computation. The term is a reference to George Clooney, who is also an actor.
- [CockroachDB](https://web.archive.org/web/20150514123425/http://www.wired.co.uk/news/archive/2014-07/22/cockroachdb) - ゴキブリのように障害耐性と回復力があると売り出されるデータベースアプリケーション。
- [corrosion](https://github.com/corrosion-rs/corrosion) - 金属を文字通り錆へ変える過程であると同時に、C++をRustへ「変える」ツール。
- [git bayesect](https://hauntsaninja.github.io/git_bayesect.html) - Like `git bisect` but can cope with flaky tests using Baysian inferance.
- [go-brrr](https://github.com/molecule-man/go-brrr) - Pure Go implementation of the *br*otli compression algorithm . Also a reference to the [go brrr meme](https://en.wiktionary.org/wiki/go_brrr).
- [horcrux](https://github.com/jesseduffield/horcrux) - Splits a file into encrypted fragments that only together can be decrypted again. In the Harry Potter universe, Horcruxes are fragments of a person's soul. To kill the person, all fragments must be destroyed.
- [Puppeteer](https://github.com/puppeteer/puppeteer) - ブラウザー自動化ライブラリ。ブラウザーが人形なら、これは人形遣い。
- [Safari](https://en.wikipedia.org/wiki/Safari_(web_browser)) - Appleが開発したウェブブラウザー。
- [tldr](https://tldr.sh/) - 実用例を備えた簡略化されたmanページ。
- [Uglify](https://github.com/mishoo/UglifyJS) - JavaScriptミニファイア。コードを読みやすく美しくするものをすべて除去して小さくする。
- [uppy](https://github.com/transloadit/uppy) - A dog-themed uploader component. The name is a blend of _upload_ and _puppy_. It even comes with a crash recovery plugin called _Golden Retriever_.
- [Webpack](https://webpack.js.org/) - JavaScriptや他の*web*アセット向けバンドラー。短く説明的で、少し韻も踏む名前。
- [yarn](https://yarnpkg.com/) - NodeJSの依存関係マネージャー。

## その他

- [a11y, i18n, k8s, ...](https://en.wikipedia.org/wiki/Numeronym) - 長い語について最初と最後の文字を残し、間に省略文字数を書く略記。
- [ACID vs. BASE](https://www.johndcook.com/blog/2009/07/06/brewer-cap-theorem-base/) - Acronyms describing competing database ideologies (aka. SQL vs. NoSQL). Note that acid and base are also opposites in chemistry.
- [Bottleneck](https://en.wikipedia.org/wiki/Bottleneck#Computing) - スループット／性能を大きく制限し、理想的には除去すべきネットワーク／アプリケーションの中心部分。
- [Brick](https://en.m.wikipedia.org/wiki/Brick_(electronics)) - デバイスがひどく破損し、実質的にレンガになる状態。
- [camelCase, snake_case, kebab-case](https://en.wikipedia.org/wiki/Letter_case#Use_within_programming_languages) - Different case styles where the name illustrates its appearance.
- [Code golf](https://en.wikipedia.org/wiki/Code_golf) - 可能な限り少ない文字でプログラムを書くこと。ゴルフ選手が最少打数で勝とうとするのと同じ。
- [Cookie licking](https://devblogs.microsoft.com/oldnewthing/20091201-00/?p=15843) - E.g., claiming a GitHub issue, then not working on it.
- [Easter egg](https://en.wikipedia.org/wiki/Easter_egg_(media)) - イースターエッグ探しに由来する、特にビデオゲーム内の隠し機能。
- [Firmware](https://en.wikipedia.org/wiki/Firmware) - _software_と_hardware_の間にある_ware_。
- [Floating point number](https://floating-point-gui.de/formats/fp/) - This representation can encode numbers at very different magnitudes with a limited amount of digits by letting the radix point _float_ instead of being fixed in place.
- [Framework](https://en.wikipedia.org/wiki/Software_framework) - ソフトウェアアーキテクチャでは（実際の建築と同じく）、構築の土台となる基本構造を提供し、その後の開発を導き制約する。
- [Glue Code](https://en.wikipedia.org/wiki/Glue_code) - Jenga and LEGO bricks don't share the same interface, but you can always glue them together.
- [Great Firewall of China](https://en.wikipedia.org/wiki/Great_Firewall) - Chinas controversial internet censorship system and a reference to the Great Wall of China.
- [Heartbeat](https://en.wikipedia.org/wiki/Heartbeat_(computing)) - 脈拍のように、システムがまだ生存・機能していることを確認するために送る周期信号。
- [Heisenbug](https://en.wikipedia.org/wiki/Heisenbug) - A bug that seems to disappear or change when one tries to study it. It's a pun on Werner Heisenberg, who discovered that the act of observing quantum systems inevitably alters their state.
- [Hydra](https://computer-dictionary-online.org/definitions-h/hydra-code) - A bug that, when an attempt to fix it is made, introduces multiple new bugs. It's a bug that cannot be fixed.
- [Magic](https://en.wikipedia.org/wiki/Magic_(programming)) - 魔法のプログラム／コード片は仕事をしているが、誰も方法を知らない。現実と同様、魔法は実際には存在せず、理解した時点でもはや魔法ではない。
- [Process starvation](https://en.wikipedia.org/wiki/Starvation_(computer_science)) - A problem where a process is perpetually denied resources to do its work.
- [Technical debt](https://en.wikipedia.org/wiki/Technical_debt) - 今日取った近道に伴う将来コスト。金融債務のように蓄積し、最終的には多くの場合利息付きで返済しなければならない。
- [Time travel debugging](https://en.wikipedia.org/wiki/Time_travel_debugging) - Stepping back in time through source code to understand execution and sometimes even to change history.
- [Tree shaking](https://en.wikipedia.org/wiki/Tree_shaking) - 依存関係ツリーを揺らし、不要な部分がすべて落ちて、すっきりしたツリーを得ること。
- [Unfair enumeration](https://www.youtube.com/watch?v=CvLsVfq6cks&t=835s) - A program that outputs all even numbers and then all odd numbers generates an unfair enumeration of the natural numbers because some numbers are never reached.
- [Yoda condition](https://eslint.org/docs/latest/rules/yoda) - `if ("red" === color) {`を`if (color === "red") {`の代わりに書くこと。「赤が色と等しいなら」と読め、スター・ウォーズのヨーダの話し方に似るため。
