---
title: "rossant/awesome-math"
description: "数学の学習・教育・研究・計算・形式証明資料を分野別に整理した定本スナップショット"
licenseSource: "github-rossant-awesome-math-readme-md"
---

# 数学のAwesomeリスト <a id="awesome-math"></a> [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Awesome Mathは、数学を学び、教え、研究・実践するための高品質な資料を厳選したリストです。純粋数学、応用数学、計算、形式証明、数学におけるAI活用を扱います。

大半の資料は無料でアクセスできます。有料資料は、広く評価され、特に有用で、代替が難しい場合に掲載されることがあります。アクセス制限は各項目に明記する方針です。

資料を提案する前に[コントリビューションガイドライン](https://github.com/rossant/awesome-math/blob/21066c9d58e470d5b9030755bf1cb4c77a786a91/CONTRIBUTING.md)を確認してください。

## 目次 <a id="contents"></a>



* [はじめに](#start-here)
    * [学習プラットフォーム](#learning-platforms)
    * [証明と問題解決](#proof-and-problem-solving)
    * [動画講座・シリーズ](#video-courses-and-series)
    * [質問と回答](#questions-and-answers)
    * [参考資料](#reference-works)
    * [総合講義ノート](#broad-course-notes)
* [数学一般](#general-mathematics)
* [基礎論と論理](#foundations-and-logic)
    * [論理学](#logic)
    * [集合論](#set-theory)
    * [型理論](#type-theory)
    * [圏論](#category-theory)
    * [形式数学と定理証明](#formal-mathematics-and-theorem-proving)
* [代数学](#algebra)
    * [抽象代数学](#abstract-algebra)
    * [線形代数学](#linear-algebra)
    * [群論](#group-theory)
    * [環論と体論](#ring-and-field-theory)
    * [可換代数学](#commutative-algebra)
    * [表現論](#representation-theory)
* [数論](#number-theory)
    * [代数的整数論](#algebraic-number-theory)
    * [解析的整数論](#analytic-number-theory)
* [組合せ論と離散数学](#combinatorics-and-discrete-mathematics)
    * [グラフ理論](#graph-theory)
* [幾何学と位相幾何学](#geometry-and-topology)
    * [微分幾何学](#differential-geometry)
    * [代数幾何学](#algebraic-geometry)
    * [一般位相](#general-topology)
    * [代数的位相幾何学](#algebraic-topology)
* [解析学](#analysis)
    * [実解析](#real-analysis)
    * [複素解析](#complex-analysis)
    * [関数解析](#functional-analysis)
    * [作用素論](#operator-theory)
    * [調和解析](#harmonic-analysis)
    * [測度論](#measure-theory)
* [微分方程式と力学系](#differential-equations-and-dynamical-systems)
    * [常微分方程式](#ordinary-differential-equations)
    * [偏微分方程式](#partial-differential-equations)
    * [エルゴード理論とカオス](#ergodic-theory-and-chaos)
* [確率論と統計学](#probability-and-statistics)
    * [確率論](#probability)
    * [確率過程](#stochastic-processes)
    * [統計学](#statistics)
    * [統計的学習](#statistical-learning)
    * [代数統計](#algebraic-statistics)
* [数値・計算数学](#numerical-and-computational-mathematics)
    * [数値解析](#numerical-analysis)
* [最適化・オペレーションズリサーチ・制御](#optimization-operations-research-and-control)
    * [制御理論](#control-theory)
* [数理物理学](#mathematical-physics)
* [学際数学](#interdisciplinary-mathematics)
    * [計算機科学のための数学](#mathematics-for-computer-science)
    * [機械学習のための数学](#mathematics-for-machine-learning)
    * [情報理論と符号理論](#information-and-coding-theory)
    * [数理ファイナンス](#mathematical-finance)
    * [数理生物学](#mathematical-biology)
    * [信号処理](#signal-processing)
* [数学の実践](#mathematical-practice)
    * [数学のためのAI](#ai-for-mathematics)
    * [数学ソフトウェアとツール](#mathematical-software-and-tools)
* [数学史と数学教育](#history-and-mathematics-education)
* [コミュニティと追加資料](#community-and-further-reading)
    * [学術誌と雑誌](#journals-and-magazines)
    * [ブログ](#blogs)
    * [会議とカンファレンス](#meetings-and-conferences)
    * [関連する厳選リスト](#related-curated-lists)



## はじめに <a id="start-here"></a>

### 学習プラットフォーム <a id="learning-platforms"></a>

* [Khan Academy](https://www.khanacademy.org/math) - 算数から微分積分まで、そしてそれ以上の無料かつ自習型の講義と練習問題。
* [Coursera](https://www.coursera.org/courses?query=mathematics&languages=en) - 大学および産業界の数学コース。コースによりアクセスや支払い方法が異なります。
* [MIT OpenCourseWare](https://ocw.mit.edu/search/?d=Mathematics&s=department_course_numbers.sort_coursenum) - マサチューセッツ工科大学（MIT）の無料コース資料（ノート、課題、試験）を含む、大学院および大学レベルの数学コース。
* [edX](https://www.edx.org/course/subject/math) - 大学および専門的な数学コース。コースにより見学や有料オプションが異なります。
* [Brilliant](https://brilliant.org/courses/#math-foundational) - 基礎数学、確率および関連する定量的分野における、インタラクティブかつ問題中心の講義。
* [WooTube](https://misterwootube.com/) - エディー・ウィーによる動画講義。中学校数学をテーマに、概念理解を重視。
* [Mathispower4u](https://mathispower4u.com/) - ジェームズ・ソウザによる、中学校数学から微分積分、線形代数、微分方程式、統計まで、9,000以上ある無料かつ字幕付き動画講義と解説例。
* [Mathigon](https://mathigon.org/) - 学校および大学初期の数学に関するインタラクティブなコース、活動、視覚的解説。
* [Ximera](https://ximera.osu.edu/) - オハイオ州立大学の無料インタラクティブ数学教科書。
* [Almost Fun](https://www.almostfun.org/lessons/) - 非営利組織による無料中高学校数学講義、練習問題、教師用リソース。
* [Oxford Mathematics](https://www.youtube.com/c/OxfordMathematics) - オックスフォード大学の講義および公開講演。高度なテーマについてのアクセス可能な解説を含む。
* [Math Academy](https://mathacademy.com/) - 有料のアダプティブプラットフォーム。4年生数学から大学レベルまで、診断テストとマスタリーベースのコースを提供。
* [OSSU Math](https://github.com/ossu/math) - 大学課程の数学要件に基づいた、プリリューディー順の無料自習カリキュラム。
* [Waterloo Open Math](https://open.math.uwaterloo.ca/) - ウォーターロー大学の無料大学レベルの教材（講義、練習問題、即時フィードバック）。
### 証明と問題解決 <a id="proof-and-problem-solving"></a>

* [Basic Concepts of Mathematics](https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp93727) - エリアス・ザコーン。
* [Book of Proof](https://richardhammack.github.io/BookOfProof/) - リチャード・ハマック（ヴァージニア共通大学）。
* [How to Prove It: A Structured Approach (3rd Edition)](https://www.cambridge.org/highereducation/books/how-to-prove-it/6D2965D625C6836CD4A785A2C843B3DA) - ダニエル・J・ヴェレマンによる有料教科書。

### 動画講座・シリーズ <a id="video-courses-and-series"></a>

* [Brandon Foltz](https://www.youtube.com/@BrandonFoltz) - 統計、確率、定量手法に関する動画コースおよび解説例。
* [StatQuest](https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw) - 統計、確率、機械学習の初級動画解説。
* [3Blue1Brown](https://www.youtube.com/@3blue1brown) - 微分積分、線形代数、微分方及方程式といった核心的な数学についての視覚的解説。
* [NPTEL](https://www.youtube.com/@iit) - インドの大学で開講される数学および関連技術科目を含む大学講義コース
* [Numberphile](https://www.youtube.com/@numberphile) - 数学の研究者たちが問題やアイデア、興味深い事実を語る人気数学動画
* [PatrickJMT](https://www.youtube.com/@patrickjmt) - 代数、微積分およびその他の大学入門科目に関する例題付き動画
* [Professor Leonard](https://www.youtube.com/@ProfessorLeonard) - 大学生向けのプレカレキュラス、微積分および微分方程式に関する完全な講義シリーズ
  * [Precalculus - College Algebra/Trigonometry](https://www.youtube.com/playlist?list=PLDesaqWTN6ESsmwELdrzhcGiRhk5DjwLP) - 完全なコースプレイリスト
  * [Calculus 1](https://www.youtube.com/playlist?list=PLF797E961509B4EB5) - 完全なコースプレイリスト
  * [Calculus 2](https://www.youtube.com/playlist?list=PLDesaqWTN6EQ2J4vgsN1HyBeRADEh4Cw-) - 完全なコースプレイリスト
  * [Calculus 3](https://www.youtube.com/playlist?list=PLDesaqWTN6ESk16YRmzuJ8f6-rnuy0Ry7) - 完全なコースプレイリスト
  * [Differential Equations](https://www.youtube.com/playlist?list=PLDesaqWTN6ESPaHy2QUKVaXNZuQNxkYQ_) - 完全なコースプレイリスト
  * [To The Point Math](https://www.youtube.com/playlist?list=PLDesaqWTN6ETc1ZwHWijCBcZ2gOvS2tTN) - 一般的な代数および微積分のトピックについての短いレビュー
* [MIT OpenCourseWare](https://www.youtube.com/@mitocw) - MITの講義記録および動画講義、包括的に数学コースを含む
* [Mathologer](https://www.youtube.com/@Mathologer) - レクリエーション数学および選択された高度なトピックに関する視覚的な動画
* [The Math District](https://themathdistrict.com/) - プリアリブレア、代数、幾何学、三角法、統計、微積分および技術数学をカバーする無料ガイドおよび動画

### 質問と回答 <a id="questions-and-answers"></a>

* [Mathematics Stack Exchange](https://math.stackexchange.com/) - 数学の問題や証明に関するコミュニティの質問と回答
* [MathOverflow](https://mathoverflow.net/) - 専門数学研究者たちの質問と回答

### 参考資料 <a id="reference-works"></a>

* [Mathematics Subject Classification 2020](https://msc2020.org/) - Mathematical ReviewsおよびzbMATHが維持する標準的な科目分類
* [Encyclopedia of Mathematics](https://encyclopediaofmath.org/wiki/Main_Page) - 数学の概念、定理、人物伝、応用を扱う参考記事集。
* [ProofWiki](https://proofwiki.org/wiki/Main_Page) - 数学の定義、補題、証明に関する協働リポジトリ
* [nLab](https://ncatlab.org/nlab/show/HomePage) - カテゴリ理論、ホモトピー理論、数学物理および関連分野における研究レベルのノートおよび解説
* [Wolfram Mathworld](https://mathworld.wolfram.com/) - 数学の定義、公式、恒等式と関連概念を収録した参考記事集。
* [The On-Line Encyclopedia of Integer Sequences](https://oeis.org) - 整数列の多様なコレクションを網羅した素晴らしい資料。1964年にN. J. A. Sloaneによって設立。
* [AIM Open Textbook Initiative](https://textbooks.aimath.org/) - アメリカ数学学会編集委員会がコースごとに整理し評価したオープン数学教科書。
* [AMS Open Math Notes](https://www.ams.org/open-math-notes) - アメリカ数学学会が運営する無料の講義ノート、教科書、研究論文。
* [OpenStax Mathematics](https://openstax.org/subjects/math) - リース大学による学校および初級大学数学向けの、同行レビューされたオープンライセンス教科書。
* [The Princeton Companion to Mathematics](https://press.princeton.edu/books/hardcover/9780691118802/the-princeton-companion-to-mathematics) - ティモシー・ゴーバーやジュネ・バーロー・グリーン、イマール・リーダーが編集した有料参考書。
* [Encyclopedia of Distances (4th Edition)](https://link.springer.com/book/10.1007/978-3-662-52844-0) - ミシェル・マリー・デザとエレナ・デザが編集した有料参考書。

* [Basics of Algebra, Topology, and Differential Calculus](https://www.cis.upenn.edu/~jean/math-deep.pdf) - ジャン・ガリエール（ペンシルベニア大学）
* [Multivariable Calculus](https://cain.math.gatech.edu/notes/calculus.html) - G. カイン、J. ヘルド（ジョージア工科大学）。
* [Wikibooks](https://en.wikibooks.org/wiki/Wikibooks:Mathematics_bookshelf) - オープン数学教科書および指導書をコミュニティが共同で作成したコレクション。
* [Online Mathematics Textbooks](https://cain.math.gatech.edu/textbooks/onlinebooks.html) - ジョージア工科大学で維持されている無料数学教科書の索引。
* [Trigonometry](https://www.mecmath.net/trig/index.html) - マイケル・コールラ。
* [The Math Behind Artificial Intelligence](https://www.freecodecamp.org/news/the-math-behind-artificial-intelligence-book) - ティアゴ・カペロ・モンテイロ（freeCodeCamp）。

### 総合講義ノート <a id="broad-course-notes"></a>

* [Evan Chen](https://web.evanchen.cc/coursework.html) - MIT。2012～2018年。組合せ数学、数論、特別講義代数、集合論、実解析、グラフ理論など。
* [Dexter Chua](https://dec41.user.srcf.net/notes/) - ハーバード大学。2013～2018年。解析、確率、線形代数、複素解析、数値解析、統計、最適化、代数トポロジー、量子場理論など。

## 数学一般 <a id="general-mathematics"></a>

* [Paul's Online Math Notes](https://tutorial.math.lamar.edu/) - ラマー大学のパウル・ダーウィンが提供する代数、微積分、微分方程式の無料ノート、例題、練習問題。
* [UBC CLP Calculus Textbooks](https://personal.math.ubc.ca/~CLP/) - 微分、積分、多変量、ベクトル解析を含む4講座の大学教科書、問題集、ソースファイルを無料提供。

## 基礎論と論理 <a id="foundations-and-logic"></a>

### 論理学 <a id="logic"></a>

* [Introduction to Logic](https://logic.stanford.edu/intrologic/homepage/index.html) - マイケル・ジェネセレット、エリック・J・カオ（スタンフォード大学）。
* [An Introduction to Formal Logic](https://www.fecundity.com/codex/forallx.pdf) - P.D. マグナス（アルバニー大学）。
* [forall x: Calgary (An Introduction to Formal Logic)](https://forallx.openlogicproject.org/) - P.D. マグナスとティム・バートンがアーロン・トーマス・ボルドゥクとリチャード・ザッハによってリミックスされたもの（オープンロジックプロジェクト）。
* [Computability - An introduction to recursive function theory](https://poincare.matf.bg.ac.rs/~zarkom/Book_Math__Cutland_Computability.pdf) - ニグエル・カートランド（ハルル大学）。
* [Language, Proof, and Logic, Second Edition](https://press.uchicago.edu/ucp/books/book/distributed/L/bo12734345.html) - デイブ・バーカー・プラマー、ジョン・バービス、ジョン・エチメンディによる教材の支払い
* [Mathematical Logic](https://www.mathematik.uni-muenchen.de/~schwicht/lehre.php) - ヘルムート・シュヴィンケンベルグ
* [Mathematical Logic](https://sgslogic.net/t20/notes/) - ステファン・G・シムプソン（ペンシルベニア州立大学）
* [Formal Logic](https://maude.sip.ucm.es/~miguelpt/papers/flogic.pdf) - ミゲル・パロミノ
* [Predictive Arithmetic](https://web.math.princeton.edu/~nelson/books/pa.pdf) - エドワード・ネルソン
* [Proofs and Concepts: the fundamentals of abstract mathematics](https://deductivepress.ca/dmorris/books/proofs+concepts) - ジョイ・モリス、デイブ・モリス
* [Mathematical Reasoning: Writing and Proof](https://www.tedsundstrom.com/mathematical-reasoning-3) - テッド・スンストロム
* [Logic and Proof](https://avigad.github.io/logic_and_proof/) - ジェームズ・アヴィガド、ロバート・Y・レーウ、フロリス・ヴァン・ドゥーン
* [QED - an interactive textbook](https://teorth.github.io/QED) - テレンス・タオ
* [Open Logic Textbook](https://builds.openlogicproject.org/) - 協働による努力。主な貢献者をリスト化 [here](https://openlogicproject.org/people/)。

### 集合論 <a id="set-theory"></a>

* [Sets, Relations, Functions](https://www.cosc.brocku.ca/~duentsch/papers/methprimer1.html) - イボ・ドンツェ、グンター・ゲディガ
* [An Introduction to Set Theory](https://www.math.toronto.edu/weiss/set_theory.pdf) - ウィリアム・A・R・ウェイス
* [Set Theory and Foundations of Mathematics](https://www.settheory.net/) - シルヴァン・ポワール
* [Set Theory on the Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/set-theory/) - 集合論に関するレビュー（歴史的文脈と参考文献を含む）

### 型理論 <a id="type-theory"></a>

* [Proofs and Types](https://www.paultaylor.eu/stable/prot.pdf) - ジャン＝ヨース・ギラード
* [Intuitionistic Type Theory](https://archive-pml.github.io/martin-lof/pdfs/Bibliopolis-Book-retypeset-1984.pdf) - ペル・マーティン・ロフ
* [Type Theory and Functional Programming](https://www.cs.kent.ac.uk/people/staff/sjt/TTFP/) - シモン・スミスン
* [Programming in Martin-Lof’s Type Theory](https://www.cse.chalmers.se/research/group/logic/book/book.pdf) - ベングト・ノルストロム、ケント・ペーターソン、ジャン・M・スミス
* [Homotopy Type Theory](https://hottheory.files.wordpress.com/2013/03/hott-online-611-ga1a258c.pdf) - ホモトピー型理論、ユニバーサル基礎、高次構造に関するオープン教材

### 圏論 <a id="category-theory"></a>

* [Introduction to Category Theory and Categorical Logic](https://www2.mathematik.tu-darmstadt.de/~streicher/CTCL.pdf) - トマス・ストリッカー
* [Category Theory](https://academic.oup.com/book/7134) - スティーブ・アワディによる教材の支払い
* [Category Theory](https://www.mathematik.uni-muenchen.de/~pareigis/Vorlesungen/04SS/Cats1.pdf) - B. Pareigis.
* [Category Theory for Computing Science](https://www.math.mcgill.ca/triples/Barr-Wells-ctcs.pdf) - Michael Barr, Charles Wells.
* [Toposes, Triples and Theories](https://www.tac.mta.ca/tac/reprints/articles/12/tr12.pdf) - Michael Barr, Charles Wells.
* [Abelian Categories](https://www.tac.mta.ca/tac/reprints/articles/3/tr3abs.html) - Peter Freyd.
* [Categories and Groupoids](https://www.tac.mta.ca/tac/reprints/articles/7/tr7abs.html) - P. J. Higgins.
* [Basic Concepts of Enriched Category Theory](https://www.tac.mta.ca/tac/reprints/articles/10/tr10abs.html) - G. M. Kelly.
* [Abstract and Concrete Categories: The Joy of Cats](https://www.tac.mta.ca/tac/reprints/articles/17/tr17abs.html) - Jiri Adamek, Horst Herrlich, George E. Strecker.
* [Seven Sketches in Compositionality: An Invitation to Applied Category Theory](https://arxiv.org/abs/1803.05316) - フォン・ブレンダンとスパイク・デイビッドI（MIT）
* [Category Theory in Context](https://math.jhu.edu/~eriehl/context/) - Emily Rie-uhl (Johns Hopkins University).

### 形式数学と定理証明 <a id="formal-mathematics-and-theorem-proving"></a>

* [Lean](https://lean-lang.org/) - 依存型理論に基づくオープンソースのインタラクティブな定理証明者およびプログラミング言語で、形式的な数学およびソフトウェア検証に使用される.
* [mathlib](https://github.com/leanprover-community/Mathlib4) - Lean 4向けのコミュニティが維持する数学ライブラリで、形式化された理論、証明技法、プログラミングインフラ、および生成されたドキュメンテーションを含む.
* [Mathematics in Lean](https://leanprover-community.github.io/mathematics_in_lean/) - Lean 4と数学ライブラリを学ぶ数学家向けの無料教科書（例題と演習問題を含む）.
* [Theorem Proving in Lean 4](https://lean-lang.org/theorem_proving_in_lean4/) - 依存型理論、命題、技法、帰納型、型クラス、およびLean 4での検証された証明の構築に関する無料公式教科書.
* [Natural Number Game](https://adam.math.hhu.de/#/g/leanprover-community/nng4) - 自然数に関する指導された演習を通じて定理証明を紹介するインタラクティブなLean 4ゲーム.
* [Isabelle](https://isabelle.in.tum.de/) - 一般目的のインタラクティブ定理証明者で、形式的な数学およびコンピュータサイエンスを表現するための高階論理および集合論環境を備える.
* [Archive of Formal Proofs](https://www.isa-afp.org/) - Isabelleの現在リリースに合わせて維持されている、Isabelle証明ライブラリ、例題、科学的開発の審査された収集.
* [Rocq Prover](https://rocq-prover.org/) - 機械的数学および検証されたソフトウェアに用いるオープンソースのインタラクティブ定理証明者および依存型プログラミング言語.
* [Mathematical Components](https://math-comp.github.io/) - 大規模形式化数学のためのRocqライブラリとツールで、代数および解析における重要な開発を含む.
* [Metamath](https://us.metamath.org/) - シンプルな基礎から構成された明示的で検証可能な証明を備えた最小の形式言語および証明検証者.
* [Courses Using Lean](https://leanprover-community.github.io/courses.html) - Leanまたは数学、論理、プログラミング、形式検証を用いる大学の講義を維持・フィルタ可能なインデックス。
* [Lean-related Conferences and Events](https://leanprover-community.github.io/events.html) - リーン、mathlib、形式化された数学に関する会議、ワークショップ、チュートリアルのカレンダーとアーカイブを維持。

## 代数学 <a id="algebra"></a>

* [Elementary Algebra 2e](https://openstax.org/books/elementary-algebra-2e/pages/1-introduction) - OpenStaxによる無料の1学期分の教科書（ウェブ版およびPDF版）を提供。実際の例、練習問題、章末の復習、解答キーを含む。

### 抽象代数学 <a id="abstract-algebra"></a>

* [A Course in Universal Algebra](https://www.math.uwaterloo.ca/~snburris/htdocs/ualg.html) - スタンリー・ブリスとH. P. サンカッパナヴァーによる普遍代数の修士課程教材の無料オンライン版。
* [Introduction to Modern Algebra](https://mathcs.clarku.edu/~djoyce/ma225/algebra.pdf) - デイビッド・ジョイス（クラーク大学）。
* [Algebraic Methods](https://feog.github.io/AA11.pdf) - フ・オッジエ．
* [Abstract Algebra: Theory and Applications](https://judsonbooks.org/abstract-algebra-theory-and-applications/) - トーマス・W・ジュディス。
* [Elements of Abstract and Linear Algebra](https://www.math.miami.edu/~ec/book/) - E.H. コンネル（ミアミ大学）。
* [Abstract Algebra: Harvard Extension](https://people.math.harvard.edu/~gross/) - ベンディクト・グロス。
* [Abstract Algebra: Harvard Extension Videos](https://www.youtube.com/playlist?list=PLA58AC5CABC1321A3) - ベンディクト・グロス。

### 線形代数学 <a id="linear-algebra"></a>

* [Fundamentals of Linear Algebra](https://personal.math.ubc.ca/~carrell/NB.pdf) - ジェームズ・B・カレル。
* [Linear Algebra](https://hefferon.net/linearalgebra/) - ジム・ヘファロン。
* [MIT OpenCourseWare Lectures on Linear Algebra (18.06) as Jupyter Notebooks](https://github.com/juanklopper/MIT_OCW_Linear_Algebra_18_06) - フアン・クロッパー。
* [A First Course in Linear Algebra](https://textbooks.aimath.org/textbooks/approved-textbooks/beezer/) - ロバート・A・ビーザー。
* [Linear Algebra](https://www.math.ucdavis.edu/~linear/) - デイビッド・チェンリー、トム・デントン、アンダウ・ワルドロン。
* [Introduction to Vectors and Tensors, Vol. 1: Linear and Multilinear Algebra](https://oaktrust.library.tamu.edu/items/42dbd71c-feb1-46ee-9115-5d39ddf9c1f6) - レイ・M・ボーン、C. C. ウェン。
* [Introduction to Vectors and Tensors, Vol. 2: Vector and Tensor Analysis](https://oaktrust.library.tamu.edu/items/9a44f676-51c4-4803-b01e-60c92d72550b) - レイ・M・ボーン、C. C. ウェン。
* [Introduction to Applied Linear Algebra](https://web.stanford.edu/~boyd/vmls/vmls.pdf) - ステファン・ボード（スタンフォード大学）、ライヴェン・ヴァンデンベルグ（UCLA）。
* [Linear Algebra Done Wrong](https://www.math.brown.edu/~treil/papers/LADW/LADW_2017-09-04.pdf) - セレジ・トレイル。
* [Immersive Linear Algebra](https://immersivemath.com/ila/index.html) - J. ストロム、K. アストロム、T. アケニン・モーラー。
* [Interactive Linear Algebra](https://textbooks.math.gatech.edu/ila/) - ダン・マーガリットとジョセフ・ラビノフ。
* [Linear Algebra Done Right](https://linear.axler.net/) - シェルドン・アクスラー。

### 群論 <a id="group-theory"></a>

* [Group Theory](https://www.jmilne.org/math/CourseNotes/GT.pdf) - J.S. ミルネ
* [Notes on Finite Group Theory](https://webspace.maths.qmul.ac.uk/p.j.cameron/notes/gt.pdf) - ピーター・J．ケミンズ．
* [Group Theory](https://birdtracks.eu/) - プレドラグ・クビトビッチ．

### 環論と体論 <a id="ring-and-field-theory"></a>

* [Foundations of Module and Ring Theory](https://www.math.uni-duesseldorf.de/~wisbauer/book.pdf) - ロバート・ウィスバーアー（ダッセルドルフ大学）．
* [An Introduction to Galois Theory](https://www.maths.gla.ac.uk/~ajb/course-notes.html) - アンダーフ・ベーカー（ガラス大学）．
* [Fields and Galois Theory](https://www.jmilne.org/math/CourseNotes/FT.pdf) - J.S. ミルネ
* [Galois Theory](https://mreid.warwick.ac.uk/MA3D5/) - マイルズ・リード．
* [Galois Theory](https://eclass.uoa.gr/modules/document/file.php/MATH594/Stewart%20Galois%204th%20edition.pdf) - イアン・ストゥアート．
* [Galois Theory](https://arxiv.org/pdf/2408.07499) - トム・リーンスター（エディンバラ大学）．
* [Surreal Numbers - How two ex-students turned on to pure mathematics and found total happiness](https://people.math.harvard.edu/~knill/teaching/mathe320_2015_fall/blog15/surreal1.pdf) - D. E. クヌース．
* [Surreal Numbers and Games](https://web.mit.edu/sp.268/www/2010/surreal.pdf) - コンウェイのサルーマ数に関する導入的なノートおよびその組合せゲーム理論との関連．
* [Conway names, the simplicity hierarchy and the surreal number tree](https://doi.org/10.4115/jla.v3i0.88) - フィリップ・エーリヒ．

### 可換代数学 <a id="commutative-algebra"></a>

* [The CRing Project](https://math.uchicago.edu/~amathew/cr.html) - 初等的な抽象代数学をもつ読者向けに、代数幾何の基礎を強調した可換代数を紹介するオープンソースの進行中の教科書．
* [Commutative Algebra Notes](https://sites.lsa.umich.edu/hochster/lecture-notes-from-course-and-seminars/) - メル・ホッケスターによる無料の大学院コースノート．コーエン＝マカウリー環、多重性、およびエタール写像などの高度なトピックを含む導入コースから始まる．

### 表現論 <a id="representation-theory"></a>

* [Lie Algebras](https://people.math.harvard.edu/~shlomo/docs/lie_algebras.pdf) - シュロモ・ステルンベルグ
* [Introduction to Representation Theory](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/) - パヴェル・エティングオフによるMITの無料コース．群および代数、カテゴリ、クイバーの表現に関する講義ノートおよび問題集．

## 数論 <a id="number-theory"></a>

* [Elementary Number Theory: Primes, Congruences, and Secrets](https://wstein.org/ent/ent.pdf) - ウィリアム・ストーン．
* [Elementary Number Theory](https://math.utoledo.edu/~codenth/Spring_13/3200/ENT-books/Elementary_Number_Theory-Clark.pdf) - W. エドウィン・クラーク（サウスフロリダ大学）．
* [A Course on Number Theory](https://webspace.maths.qmul.ac.uk/p.j.cameron/notes/nt.pdf) - ピーター・J．ケミンズ．
* [A Computational Introduction to Number Theory and Algebra](https://shoup.net/ntb/ntb-v2.pdf) - ヴィクトル・シュープ．
* [Yet Another Introductory Number Theory Textbook](https://www.poritz.net/jonathan/share/yaintt/) - ジョナサン・ア・ポリッツ．

### 代数的整数論 <a id="algebraic-number-theory"></a>

* [Introduction to Algebraic Number Theory](https://feog.github.io/ANT10.pdf) - フ・オッジエ．
* [Algebraic Number Theory](https://www.jmilne.org/math/CourseNotes/ANT.pdf) - J.S. ミルネ
* [Algebraic Number Theory Course Notes](https://sites.google.com/view/mattbakermath/publications) - マシュー・ベイカー（ジョージア工科大学）．

### 解析的整数論 <a id="analytic-number-theory"></a>

* [Analytic Number Theory](https://www.mathematik.uni-muenchen.de/~forster/v/ann/annth_all.pdf) - オット・フォスター（ミュンヘン大学）．
* [Analytic Number Theory](https://www2.math.uu.se/~ast10761/analtalt21/analtalt21.html) - アンドレアス・ストロムベルグソン（アップサラ大学）．

## 組合せ論と離散数学 <a id="combinatorics-and-discrete-mathematics"></a>

* [Basic Combinatorics](https://web.math.utk.edu/~cwagner/papers/comb.pdf) - カル・G．ワーガー（テネシー大学）．
* [Applied Combinatorics](https://appliedcombinatorics.org/appcomb/) - ミッチル・T．ケラー、ウィリアム・T．トロター．
* [Discrete Mathematics: An Open Introduction](https://open.umn.edu/opentextbooks/textbooks/394) - オスカー・レヴィンによる無料第4版大学レベルの教科書。調査活動、750以上の演習問題、解説とヒント、証明、グラフ理論、数え上げ、数列、離散構造についての解説が含まれる．
* [Notes on Combinatorics](https://webspace.maths.qmul.ac.uk/p.j.cameron/notes/comb.pdf) - ピーター・J．ケミンズ．
* [Analytic Combinatorics](https://algo.inria.fr/flajolet/Publications/book.pdf) - フィリップ・フラジョレ、ロバート・セドウィック．
* [generatingfunctionology](https://www2.math.upenn.edu/~wilf/DownldGF.html) - ヘルバート・ウィルフ．
* [A=B](https://www.math.upenn.edu/~wilf/AeqB.html) - マルコ・ペトコヴセク、ヘルバート・ウィルフ、ドロン・ゼイルバーアによる超幾何関数恒等式の証明アルゴリズムに関する研究．

### グラフ理論 <a id="graph-theory"></a>

* [Graph Theory: Lecture Notes](https://sites.psu.edu/griffinch/lecture_notes/) - クリスチャン・グリフィン．
* [Graph Theory](https://www.cs.unibo.it/babaoglu/courses/cas00-01/tutorials/GraphTheory.pdf) - レインハート・ディステル．
* [Graph Theory : Interactive Algorithm Visualizer | Graph Theory Learning Platform](https://learngraphtheory.org/) - ハジュードジュ・モハメド・イスラム．

## 幾何学と位相幾何学 <a id="geometry-and-topology"></a>

* [Fundamentals of Geometry](https://polly.phys.msu.ru/~belyaev/geometry.pdf) - オレグ・A．ベリャエフによる無料の幾何学教科書．
* [Euclid's Elements (David Joyce edition)](https://mathcs.clarku.edu/~djoyce/elements/elements.html) - デイビッド・ジョイスによる完全なウェブ版。図解、解説、参考文献が含まれる．
* [Euclid's Elements Redux](https://open.umn.edu/opentextbooks/textbooks/euclid-s-elements-redux) - ダニエル・カールハーンによるオープン教科書。ユークリッドを現代の解説と演習問題で紹介している．
* [Mathematical Illustrations](https://personal.math.ubc.ca/~cass/graphics/manual/) - ビル・カスメンによる明確な数学図形と図解を作成するためのガイド．
* [Byrne's Euclid](https://www.c82.net/euclid/) - オリバー・バイアのユークリッドの初六書に対する色分け表示のインタラクティブなウェブ版

### 微分幾何学 <a id="differential-geometry"></a>

* [Introduction to Differential Geometry](https://people.math.ethz.ch/~salamon/PREPRINTS/diffgeo.pdf) - ジョエル・W・ロビン、ディエトマール・A・サロモン
* [Notes on Differential Geometry and Lie Groups](https://www.cis.upenn.edu/~jean/gbooks/manif.html) - ジャン・ガリエール（ペンシルベニア大学）
* [Topics in Differential Geometry](https://www.mat.univie.ac.at/~michor/dgbook.pdf) - ペーター・W・ミッホル
* [Lectures on Differential Geometry](https://mysite.science.uottawa.ca/rossmann/Differential%20Geometry%20book_files/Diffgeo.pdf) - ウルフ・ロスマン
* [An Introduction to Riemannian Geometry](https://www.matematik.lu.se/matematiklu/personal/sigma/Riemann.pdf) - シグムンダール・グッドマンソン（ルン大学）
* [The Geometry and Topology of Three-Manifolds](https://www.slmath.org/publications/books/gt3m/) - W・スチュアート
* [Semi-Riemann Geometry and General Relativity](https://people.math.harvard.edu/~shlomo/docs/semi_riemannian_geometry.pdf) - シュロモ・ステルンベルグ
* [Discrete Differential Geometry](https://www.cs.cmu.edu/~kmcrane/Projects/DDG/paper.pdf) - ケネン・クレイン
* [Differential Geometry](https://ocw.mit.edu/courses/18-950-differential-geometry-fall-2008/) - 厳密な大学レベルのMIT OpenCourseWareコース。講義ノートと問題セットが曲、表面、湾曲度に焦点を当てている

### 代数幾何学 <a id="algebraic-geometry"></a>

* [A Brief Introduction to Algebraic Geometry](https://ksda.ccny.cuny.edu/PostedPapers/rickksda1107.pdf) - R.C. チューリン
* [Introduction to Algebraic Geometry](https://sites.lsa.umich.edu/idolga/lecture-notes/) - イゴル・V・ドロガチェフ
* [Foundations of Algebraic Geometry](https://math.stanford.edu/~vakil/216blog/FOAGjun1113public.pdf) - ラヴィ・ヴァキル
* [Algebraic Geometry](https://www.cis.upenn.edu/~jean/algeoms.pdf) - ジャン・ガリエール、ステファン・S・シャッツ（ペンシルベニア大学）
* [Algebraic Geometry](https://www.jmilne.org/math/CourseNotes/AG.pdf) - J.S. ミルネ
* [Algebraic Geometry](https://agag-gathmann.math.rptu.de/en/alggeom.php) - アンドレアス・ガッマン（RPTU）
* [The Stacks Project](https://stacks.math.columbia.edu/) - Aise Johan de Jong（コロンビア大学）によって維持されている

### 一般位相 <a id="general-topology"></a>

* [General Topology](https://www.rexresearch1.com/TopologyLibrary/GeneralTopologyWillard.pdf) - ステファン・ウィルード
* [Elementary Applied Topology](https://www.math.upenn.edu/~ghrist/notes.html) - ロバート・グリスト（UPenn）
* [Introduction to Topology](https://www.math.colostate.edu/~renzo/teaching/Topology10/Notes.pdf) - レノ・カヴァリエリのコロラド州立大学のトポロジー講義に関連する無料の導入ノート。学生によって編集されたもの。点集合トポロジー、コンパクト性、連結性、表面、オイラー特性、基本群を扱う
* [Introduction to Topology](https://math.bme.hu/~kalex/Teaching/Spring10/Topology/TopNotes_Spring10.pdf) - アレクサンダー・クロンヤ
* [General Topology](https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/Topo.pdf) - ピエール・シャピラ（ソルボン大学）
* [Elementary Topology Problem Textbook](https://www.pdmi.ras.ru/~olegviro/topoman/e-intro.html) - オレグ・ビロ
* [General Topology](https://web.math.ku.dk/~moller/e03/3gt/notes/gtnotes.pdf) - ジェスパー・M・モーラー

### 代数的位相幾何学 <a id="algebraic-topology"></a>

* [Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf) - アレン・ハッチャー
* [A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf) - J. P. マイ
* [Introduction to Algebraic Topology](https://www.math.muni.cz/~cadek/at/at.pdf) - マーティン・カデック
* [Algebra and Topology](https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/AlTo.pdf) - ピエール・シャピラ（ソルボン大学）
* [Lecture Notes in Algebraic Topology](https://bookstore.ams.org/view?ProductCode=GSM%2F35) - ジェームズ・F・ダビスおよびパウル・キルクによる教科書

## 解析学 <a id="analysis"></a>

### 実解析 <a id="real-analysis"></a>

* [Calculus Open Textbook](https://ocw.mit.edu/courses/res-18-001-calculus-fall-2023/) - ギルバート・ストラング（MIT OpenCourseWare）
* [Elementary Calculus: An Approach Using Infinitesimals](https://people.math.wisc.edu/~hkeisler/calc.html) - ケイスラー教授
* [An Introduction to Real Analysis](https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf) - ジョン・K・ハンター（カリフォルニア大学ダビス校）
* [Introduction to Real Analysis](https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF) - ウィリアム・F・トレンチ（テキサス州トリニティ大学）
* [Basic Analysis: Introduction to Real Analysis](https://www.jirka.org/ra/realanal.pdf) - ジリ・レブ
* [Elementary Real Analysis](https://textbooks.aimath.org/textbooks/approved-textbooks/thomson-bruckner-bruckner/) - ブライアン・S・スミス、ジュディス・B・ブロッカー、アンダウド・M・ブロッカー
* [Lecture Notes in Real Analysis](https://ms.mcmaster.ca/~sawyer/Publications/Real_Analysis.pdf) - エリク・T・サウワ（マクマスター大学）
* [Advanced Real Analysis](https://people.math.harvard.edu/~ctm/home/text/class/harvard/212a/19/html/index.html) - カーツ・T・マクミルン
* [Real Analysis for Graduate Students](https://r-bass.scholar.uconn.edu/) - リチャード・F・バス
* [Modern Real Analysis](https://www.math.purdue.edu/~torresm/pubs/Modern-real-analysis.pdf) - ウィリアム・P・ジマー（インディアナ大学）
* [Advanced Calculus](https://people.math.harvard.edu/~shlomo/docs/Advanced_Calculus.pdf) - リン・ルミス、シュロモ・ステルンベルグ
* [ Analysis of Functions of a Single Variable](https://spot.colorado.edu/~baggett/analysis.html) - ラウアレンス・バジェット
* [The Calculus of Functions of Several Variables](https://synechism.org/wp/the-calculus-of-functions-of-several-variables/) - ダン・スローティャ
* [A ProblemText in Advanced Calculus](https://web.pdx.edu/~erdman/PTAC/problemtext_pdf.pdf) - ジョン・M・エルダマン
* [Calculus and Linear Algebra. Vol. 1](https://quod.lib.umich.edu/s/spobooks/5597602.0001.001/--calculus-and-linear-algebra-vol-1-vectors-in-the-plane) - ウィルフレッド・カプラン、ドナルド・J・レーウィス
* [Calculus and Linear Algebra. Vol. 2](https://quod.lib.umich.edu/s/spobooks/5597602.0002.001) - ウィルフレッド・カプラン、ドナルド・J・レーウィス
* [Active Calculus](https://faculty.gvsu.edu/boelkinm/Home/Active_Calculus.html) - マット・ボーエルキンス
* [Supplements to the Exercises in Chapters 1-7 of Walter Rudin's "Principles of Mathematical Analysis"](https://math.berkeley.edu/~gbergman/ug.hndts/#Rudin) - ジョージ・M・バーグマン
* [Calculus Made Easy](https://calculusmadeeasy.org/) - シルヴァンス・P・スミス（1910）
* [Precalculus](https://stitz-zeager.com/szprecalculus07042013.pdf) - カル・スティッツ、ジェフ・ゼーゲル

### 複素解析 <a id="complex-analysis"></a>

* [Introduction to Complex Analysis](https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/complex.pdf) - マイケル・タイラー
* [An Introduction to Complex Analysis and Geometry](https://bookstore.ams.org/AMSTEXT/12) - ジョン・P・ダングロの教材費を支払う
* [A First Course in Complex Analysis](https://textbooks.aimath.org/textbooks/approved-textbooks/beck-marchesi-pixton-sabalka/) - マティアス・ベック、ゲルガル・マーシー、デニス・ピクトン、ルカス・サバルカ
* [A Guide to Complex Variables](https://www.cambridge.org/core/books/guide-to-complex-variables/13375E580A4064821DB12BEBB569186E) - スティーブン・G・クランツの教材費を支払う
* [Complex Analysis](https://personalpages.manchester.ac.uk/staff/charles.walkden/complex-analysis/) - チャールズ・ウォルデン
* [Complex Analysis](https://www.math.ku.dk/bibliotek/arkivet/noter/) - クリスチャン・ベルグ
* [Complex Variables](https://people.math.sc.edu/girardi/m7034/book/AshComplexVariablesWithHyperlinks.pdf) - R・B・アッシュ、W・P・ノビンガー
* [Complex Analysis](https://www.maths.lth.se/matematiklu/personal/olofsson/CompHT06.pdf) - クリスティア・ベンニュイツ
* [Complex Analysis](https://sites.math.washington.edu/~marshall/math_536/math536_spr12.html) - ドナルド・E・マーシャル
* [A Concise Course in Complex Analysis and Riemann Surfaces](https://gauss.math.yale.edu/~ws442/complex.pdf) - ウィルヘルム・スラッグ
* [Complex Analysis](https://cain.math.gatech.edu/winter99/complex.html) - G・ケイン（ジョージア・テック）
* [Complex Analysis](https://complex-analysis.com/) - ルイス・カルロス・ポンセ・カンプゥザノ

### 関数解析 <a id="functional-analysis"></a>

* [An Introduction to Functional Analysis](https://www.math.uwaterloo.ca/~lwmarcou/notes/pmath453.pdf) - ラウエンツ・W・マクス（ウォーターロー大学）
* [Functional Analysis: Lecture Notes](https://apps.math.msu.edu/PageSpace/pb/jeffrey-schenker/Teaching/920_Lecture_Notes.pdf) - ジェフ・シェンカー（ミシガン州立大学）
* [Functional Analysis](https://www.maths.lancs.ac.uk/~belton/www/notes/fa_notes.pdf) - アレクサンダー・C・R・ベルトン
* [Functional Analysis](https://math.ou.edu/~cremling/teaching/lecturenotes/fa-new/LN-I.pdf) - クリスチャン・レミング
* [Theory of Functions of a Real Variable](https://people.math.harvard.edu/~shlomo/docs/Real_Variables.pdf) - シュロモ・ステルンベルグ
* [Functional Analysis](https://spot.colorado.edu/~baggett/functional.html) - ラウアレンス・バジェット

### 作用素論 <a id="operator-theory"></a>

* [Lecture Notes on Operator Algebras](https://web.pdx.edu/~erdman/OpAlg/operator_algebras_pdf.pdf) - ジョン・M・エルドマンによる、ヒルベルト空間作用素、バナッハ環、スペクトル理論、C*環、コンパクト作用素、K理論に関する無料の修士課程ノート。

### 調和解析 <a id="harmonic-analysis"></a>

* [Harmonic Analysis Lecture Notes](https://arxiv.org/abs/0903.3845) - リチャード・S・ラーゲセン（イリノイ大学アーバナ・チャンプーン校）
* [Lecture Notes: Fourier Transform and its Applications](https://see.stanford.edu/materials/lsoftaee261/book-fall-07.pdf) - ブラッド・オースグッド
* [Mathematics of the Discrete Fourier Transform (DFT) with Audio Applications](https://ccrma.stanford.edu/~jos/mdft) - ジュリウス・O・スミス3世（スタンフォード大学）

### 測度論 <a id="measure-theory"></a>

* [An Introduction to Measure Theory](https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf) - テンセント・タオ（UCLA）
* [Lecture Notes in Measure Theory](https://www.math.chalmers.se/Math/Grundutb/GU/MMA110/A11/MeasureTheory.pdf) - クリスティア・ボレル
* [A Crash Course on the Lebesgue Integral and Measure Theory](https://github.gold-saucer.org/LebesgueIntegration/lebesgue.pdf) - スティーブ・チェン
* [Measure Theory](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf) - ジョン・K・ハンター（カリフォルニア大学ダビス校）
* [Measure and Integration](https://people.math.ethz.ch/~salamon/PREPRINTS/measure.pdf) - ディエトマール・A・サロモン（ETHツリッヒ）
* [Lecture Notes: Measure Theory](https://mathweb.ucsd.edu/~bdriver/DRIVER/) - ブルース・K・ドライバー

## 微分方程式と力学系 <a id="differential-equations-and-dynamical-systems"></a>

### 常微分方程式 <a id="ordinary-differential-equations"></a>

* [Ordinary Differential Equation](https://www.math.uni-bielefeld.de/~grigor/odelec2008.pdf) - アレクサンダー・グリゴリアン（ビーリーフeld大学）
* [Ordinary Differential Equations: Lecture Notes](https://www.cs.bgu.ac.il/~leonid/ode_bio_files/Ionascu_LectNotes.pdf) - ユーゲン・J・イオナスク
* [Differential Equations](https://users.math.msu.edu/users/gnagy/teaching/ade.pdf) - ガブリエル・ナギ
* [Ordinary Differential Equations and Dynamical Systems](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf) - ジェラルド・テスル
* [Elementary Differential Equations](https://digitalcommons.trinity.edu/mono/8/) - ウィリアム・F・トレント
* [Elementary Differential Equations With Boundary Value Problems](https://digitalcommons.trinity.edu/mono/9/) - ウィリアム・F・トレント
* [Notes on Diffy Qs: Differential Equations for Engineers](https://www.jirka.org/diffyqs/) - ジリ・レブ

### 偏微分方程式 <a id="partial-differential-equations"></a>

* [Notes on Partial Differential Equations](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) - ジョン・K・ハンター（カリフォルニア大学ダビス校）
* [Linear Methods of Applied Mathematics](https://harrell.math.gatech.edu/pde/ch1wr.html) - エヴァンス・M・ハレル2世、ジェームズ・V・ヘロッド（ジョージアテック）
* [Partial Differential Equations](https://math.berkeley.edu/~evans/evans_pcam.pdf) - ラウレンス・C・エヴァンスによる現代の偏微分方程式理論の簡潔な調査（解析的、質的、計算的視点から）

### エルゴード理論とカオス <a id="ergodic-theory-and-chaos"></a>

* [Chaos: Classical and Quantum](https://chaosbook.org/) - 動的システム、周期軌道、決定論的混沌、統計力学、量子混沌に関する維持されている技術書。

## 確率論と統計学 <a id="probability-and-statistics"></a>

### 確率論 <a id="probability"></a>

* [Harvard Statistics 110: Probability](https://stat110.hsites.harvard.edu/) - ジョー・ブリッツテインによる自由確率コース（教科書、講義動画、演習問題、およびオプションのedX版）
* [Introduction to Probability](https://chance.dartmouth.edu/teaching_aids/books_articles/probability_book/pdf.html) - チャールズ・M・グリント、J・ラウリ・スネル
* [Introduction to Probability](https://vfu.bg/en/e-Learning/Math--Bertsekas_Tsitsiklis_Introduction_to_probability.pdf) - ディミトリ・P・ベルテカス、ジョン・N・ツィシリス（MIT）
* [A Short Introduction to Probability](https://people.smp.uq.edu.au/DirkKroese/asitp.pdf) - ディク・P・クロース（クイーンズランド大学）
* [Probability: Theory and Examples](https://sites.math.duke.edu/~rtd/) - リック・ダート（5版）
* [Probability and Statistics Cookbook](https://github.com/mavam/stat-cookbook/releases/download/0.2.3/stat-cookbook.pdf) - マティアス・ヴァルティン（カリフォルニア大学バークレー校）
* [The Only Probability Cheatsheet You'll Ever Need](https://www.wzchen.com/probability-cheatsheet/) - ウィリアム・チェン
* [An Introduction to Probability and Random Processes](https://www.ellerman.org/Davids-Stuff/Maths/Rota-Baclawski-Prob-Theory-79.pdf) - ギアン・カルロ・ロータ、ケンネス・バクルスキー
* [Foundations of Constructive Probability Theory](https://arxiv.org/pdf/1906.01803.pdf) - チェン・ユエン・コク

### 確率過程 <a id="stochastic-processes"></a>

* [Research and Lecture Notes](https://fabricebaudoin.blog/) - ファブリス・バウドインによる確率論、微分幾何、ディリクレ空間に関する高度なノート
* [On Stochastic Processes](https://mathweb.tifr.res.in/lectures.html) - イト・ケイ（タタ基礎研究研究所）
* [Probability and Stochastic Processes with Applications](https://people.math.harvard.edu/~knill/teaching/math144_1994/probability.pdf) - オリバー・クニル（ハーバード大学）
* [Stochastic Processes](https://adembo.su.domains/math-136/nnotes.pdf) - アミール・デムボ（スタンフォード大学）
* [Lecture Notes on Stochastic Processes](https://www.mi.fu-berlin.de/wiki/pub/CompMolBio/MarkovKetten15/stochastic_processes_2011.pdf) - フランク・ノエ、ベティナ・ケーラー、ジャン・ヘンリク・プリンツ（フリーアクア大学ベルリン）
* [Introduction to Stochastic Processes - Lecture Notes](https://www.ma.utexas.edu/users/gordanz/notes/introduction_to_stochastic_processes.pdf) - ゴーラン・ジトコビッチ（テキサス大学）.
* [Applied Stochastic Processes in science and engineering](https://www.math.uwaterloo.ca/~mscott/Little_Notes.pdf) - マット・スコット（ウォータロウ大学）.
* [An Introduction to Stochastic Processes in Continuous Time](https://pub.math.leidenuniv.nl/~spieksmafm/colleges/sp-master/sp-hvz1.pdf) - フラーラ・スピーカスマ（ライデン大学）.
* [Markov Chains and Mixing Times](https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf) - デイビッド・A・レヴィン、ユヴァル・ペレス、エリザベス・L・ウィルマー.
* [Convergence of Stochastic Processes](https://link.springer.com/book/10.1007/978-1-4612-5254-2) - デイビッド・ポルダーによる教材（購入済）.

### 統計学 <a id="statistics"></a>

* [Lecture Notes on Statistical Theory](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat411/Notes/411notes.pdf) - レイン・マーティンによる大学院講義ノート（推定、尤度、仮説検定、ベイズ統計について、Rの例を含む）.
* [Introduction to Statistics and Data Analysis for Physicists](https://www-library.desy.de/preparch/books/vstatmp_engl.pdf) - ゲルハルト・ボーム、グンター・ゼッハ.
* [Lectures on Statistics](https://archive.math.arizona.edu/faris/stat.pdf) - ウィリアム・G・ファリスによる無料テキスト（推定、ベイズ手法、回帰、主成分分析、線形モデルについて）.
* [Theory of Statistics](https://mason.gmu.edu/~jgentle/books/MathStat.pdf) - ジェームズ・E・ゲンテルによる高度な、積極的に改訂されたテキスト（確率、統計モデル、推定、検定、漸近理論について）.
* [Theory of Statistics](https://archive.math.arizona.edu/jwatkins/notests.pdf) - ジョセフ・C・ワトキンスによる大学院講義ノート（測度ベースの確率、意思決定理論、推定、検定、階層モデルについて）.
* [UCLA Statistical Methods and Data Analytics](https://stats.oarc.ucla.edu/) - R、Stata、SAS、SPSS向けのチュートリアルと例題.
* [NIST Handbook of Statistical Methods](https://itl.nist.gov/div898/handbook/index.htm) - 科学者やエンジニアを対象とした実用的な統計学リソース.
* [Statistical Thinking for the 21st Century](https://statsthinking21.org/) - ラッセル・A・ポルダック.
* [Odds and Ends: Introducing Probability & Decision with a Visual Emphasis](https://jonathanweisberg.org/vip/) - ジョナサン・ウィスバーグ.
* [Seeing Theory](https://seeing-theory.brown.edu/) - ダニエル・クニン、ジンルー・グウ、タイラー・デ・デブリン、ダニエル・シアン.
* [Statistics Done Wrong](https://www.statisticsdonewrong.com/) - アレクス・レインハート.
* [All of Statistics: A Concise Course in Statistical Inference](https://link.springer.com/book/10.1007/978-0-387-21736-9) - ラリー・ワスマン.
* [OpenIntro Statistics](https://www.openintro.org/book/os/) - 大学の授業や自習向けの無料入門テキスト（データセット、実験、スライド、動画、演習問題、アクセス可能なPDFを含む）.

### 統計的学習 <a id="statistical-learning"></a>

* [An Introduction to Statistical Learning](https://www.statlearning.com/) - ゲーティー・ジェームズ、ダニエラ・ウィテン、テイバー・ハスティ、ロバート・ティブシラン.
* [The Elements of Statistical Learning](https://hastie.su.domains/ElemStatLearn/main.html) - テイバー・ハスティ、ロバート・ティブシラン、ジェローム・フリードマン.
* [Statistical Learning Theory](https://web.stanford.edu/class/cs229t/notes.pdf) - ペリー・リアン
* [Reinforcement Learning: An Introduction](https://mitpress.mit.edu/9780262039246/reinforcement-learning/) - リチャード・S・スutton、アンデュー・G・バートー（第2版）

### 代数統計 <a id="algebraic-statistics"></a>

* [Lectures on Algebraic Statistics](https://math.berkeley.edu/~bernd/owl.pdf) - マティアス・ドートン、ベルンド・ストルフェルス、セイツ・スルリヴァント
* [An Introduction to Algebraic Statistics](https://www3.diism.unisi.it/~chiantini/did/00Book.pdf) - クリスティアノ・ボッキ、ルカ・チェイアンティニ、アンソニー・V・ジェラミタ
* [Algebraic Statistics](https://tore.tuhh.de/dspace-cris-server/api/core/bitstreams/a0c378d5-ce8e-442a-8891-9e7f763b4279/content) - カルト＝ヘンツ・ツィマーーマン
* [Algebraic Statistics for Computational Biology](https://www.cambridge.org/core/books/algebraic-statistics-for-computational-biology/2E5CCE6BB6751EB7423EE3D2BF40EBFF) - リオール・パッチターとベルンド・ストルフェルスが編集した教材（有償）

## 数値・計算数学 <a id="numerical-and-computational-mathematics"></a>

### 数値解析 <a id="numerical-analysis"></a>

* [Introduction to Numerical Analysis](https://www.math.umd.edu/~dlevy/resources/notes.pdf) - ドロン・レヴィによる大学院生向けノート：根の探索、補間、近似、数値微分、および積分法
* [Numerical Analysis (Second Edition)](https://people.cs.uchicago.edu/~ridg/newna/natwo.pdf) - リドウェイ・スコットによる数値法の理論と実践に関する第2版無料教材
* [Lectures in Basic Computational Numerical Analysis](https://uknowledge.uky.edu/math_textbooks/1/) - ジェイ・M・マクドナッグによるケンタッキー大学のアーカイブ教材：微分方程式の計算手法に焦点
* [Advanced Numerical Methods and Their Applications to Industrial Problems: Adaptive Finite Element Methods](https://user.math.uni-bremen.de/schmi/SS04/YSU_Notes.pdf) - アルフレッド・シュミットとアーセン・ナリマニアンによる適応型有限要素法に関する専門ノート
* [Numerical Analysis for Engineers](https://ece.uwaterloo.ca/~dwharder/nm/) - ウォーターロー大学の工学用数値法に関する講義、課題、プロジェクト、MATLAB教材を含むコース
* [Advanced Linear Algebra: Foundations to Frontiers](https://www.cs.utexas.edu/users/flame/laff/alaff/frontmatter.html) - ロバート・ヴァン・デ・ゲインとマーガレット・マイアーズによる高度な数値線形代数アルゴリズムに関するオンライン教材
* [Fundamentals of Numerical Computation](https://fncbook.com/) - トビン・ドリスコールとリチャード・ブラウンによる、ジュリア、MATLAB、Python版を含む、線形システム、近似、根の探索、ODE、PDEの基本数値法を扱うオンライン教材

## 最適化・オペレーションズリサーチ・制御 <a id="optimization-operations-research-and-control"></a>

* [Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/) - ステファン・ボイドとライヴン・バンデルヘイによるスライド、演習問題、コード、コース資料を含む無料教材
* [Nonlinear Optimization](https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/) - 無料のMIT大学院コース：制約なしおよび制約あり最適化の解析的および計算的手法を扱う
* [CVXPY](https://www.cvxpy.org/) - 凸、幾何、準凸および関連最適化問題向けのオープンソースPythonモデリング言語

### 制御理論 <a id="control-theory"></a>

* [Feedback Systems: An Introduction for Scientists and Engineers](https://fbsbook.org/) - カール・J・アストロムとリチャード・M・マリーによる、モデリング、フィードバック、安定性、性能、状態フィードバック、制御設計に関する無料の大学院教科書。

## 数理物理学 <a id="mathematical-physics"></a>

* [Introduction to Continuum Mechanics](https://rbowen.engr.tamu.edu/) - レイ・M・ボーン
* [Mechanism of the Heavens (1831)](https://openlibrary.org/books/OL6970552M/Mechanism_of_the_heavens) - マリー・ソムベリーブ
* [Quantum Field Theory](https://davidtong.org/teaching/quantum-field-theory/) - デイビッド・トンのケンブリッジ大学の修士課程講義ノート、問題集、HTMLテキスト、録音講義：古典場、量子化、ディラック場、量子電磁気学

## 学際数学 <a id="interdisciplinary-mathematics"></a>

### 計算機科学のための数学 <a id="mathematics-for-computer-science"></a>

* [Mathematics for Computer Science](https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/) - 無料MIT OpenCourseWareコース：証明、離散構造、カウント、グラフ、モジュラー算術、離散確率を扱うオープンテキスト、動画、ノート、問題集、試験を含む
* [Algorithms and Complexity](https://www2.math.upenn.edu/~wilf/AlgComp3.html) - H. Wilf.
* [Lecture Notes on Optimization](https://people.eecs.berkeley.edu/~varaiya/papers_ps.dir/NOO.pdf) - Pravin Varaiya.
* [Information Theory, Inference, and Learning Algorithms](https://www.inference.org.uk/mackay/itila/book.html) - David J. C. MacKay.
* [The Chaos Textbook: Mathematics in the age of the computer](https://hypertextbook.com/chaos/) - Glenn Elert.

### 機械学習のための数学 <a id="mathematics-for-machine-learning"></a>

* [Mathematics for Machine Learning](https://mml-book.github.io/) - 機械学習を学ぶために必要な線形代数学、幾何学、微積分、確率、最適化に関する無料教科書.
* [Deep Learning: Foundations and Concepts](https://www.bishopbook.com/) - Christopher M. Bishop と Hugh Bishop による、現代の深層学習モデルおよび手法について確率ベースで解説した無料オンライン教科書.
* [Mathematics of Machine Learning](https://ocw.mit.edu/courses/18-657-mathematics-of-machine-learning-fall-2015/) - 機械学習の数学的および統計的基礎に関する無料MIT大学院コース（講義ノート、課題、問題セットの解説を含む）.
* [Probabilistic Machine Learning](https://probml.github.io/pml-book/) - Kevin Murphyによる入門書および高度な書籍。無料のドラフトPDF、コード、図、演習問題、教育リソースを提供。

### 情報理論と符号理論 <a id="information-and-coding-theory"></a>

* [Information Theory](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/) - エントロピー、情報源・通信路符号化、レート歪み、ガウス通信路、フィードバック、多ユーザー情報理論を扱う無料のMIT大学院コース。
* [Essential Coding Theory](https://ocw.mit.edu/courses/6-895-essential-coding-theory-fall-2004/) - 誤り訂正符号、ハミング空間、符号理論の代数面と計算量面を扱う無料のMIT大学院コース。
* [Error Correction Zoo](https://errorcorrectionzoo.org/) - 古典的、量子的およびハイブリッド誤り訂正符号に関する維持された参照データベース。定義、関係性、参照情報が含まれる。

### 数理ファイナンス <a id="mathematical-finance"></a>

* [Topics in Mathematics with Applications in Finance](https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/) - マサチューセッツ工科大学（MIT）による無料の大学本科コース。バインド数学、確率、ポートフォリオ手法、時系列、確率過程、定量金融を扱う。

### 数理生物学 <a id="mathematical-biology"></a>

* [Mathematical Biology](https://www.math.hkust.edu.hk/~machas/mathematical-biology.pdf) - ジェフリー・チャスノブ。

### 信号処理 <a id="signal-processing"></a>

* [Introduction to Signal Processing](https://ece.rutgers.edu/orfanidis) - Sophocles J. Orfanidis (Rutgers University).
* [Foundations of Signal Processing](https://www.fourierandwavelets.org/FSP_v1.1_2014.pdf) - Martin Vetterli, Jelena Kovace和Vivek K Goyal.
* [An Introduction to Statistical Signal Processing](https://ee.stanford.edu/~gray/sp.pdf) - Robert M. Gray, Lee D. Davisson.
* [Think DSP](https://greenteapress.com/wp/think-dsp/) - Allen B. Downey.

## 数学の実践 <a id="mathematical-practice"></a>

### 数学のためのAI <a id="ai-for-mathematics"></a>

この節では、AI支援による定理証明、形式化、数学的発見を扱います。機械学習で使われる数学を教える資料は「機械学習のための数学」に掲載しています。

* [LeanDojo v2](https://leandojo.org/leandojo.html) - Lean 4向けAI支援定理証明システムの訓練、評価、デプロイに用いるオープンソースフレームワークおよびベンチマークデータ。
* [miniF2F](https://github.com/facebookresearch/miniF2F) - 形式化されたオリンピック問題、高校問題、大学部問題の跨システムベンチマーク。自動定理証明システムの評価に用いる。
* [AlphaGeometry](https://github.com/google-deepmind/alphageometry) - 学習されたガイドと記号論理の組み合わせによる、オリンピック幾何問題に対する研究実装。
* [First Proof Project](https://1stproof.org/) - 数学におけるAIシステムの評価に用いる研究レベルの問題、評価手法、解、専門家のコメントを公開する独立プロジェクト。
* [Math AI Seminar](https://math.washington.edu/events/series/math-ai-seminar) - ワシントン大学における形式化、定理証明、数学AI、数学における機械学習応用に関する研究セミナー。多年度のイベントアーカイブを含む。
* [b=M²L](https://bm2l.github.io/) - バルセロナの数学と機械学習のコロキウム。数学と機械学習の相互作用についての、多年にわたる編集および録音された講演を含む。
* [AI for Mathematics and Theoretical Computer Science](https://simons.berkeley.edu/workshops/simons-institute-theory-computing-slmath-joint-workshop-ai-mathematics-theoretical) - シモンズ研究所およびSLMathのワークショップアーカイブ。証明補助、自動推論、機械学習、数学的発見に関する録音講演を含む。
* [Mathematics and AI](https://sites.math.washington.edu/~jarod/math583E-fall25.html) - ワシントン大学の2025年秋の修士課程講義。公開スライド、Leanの例、プロジェクト、読書資料が提供され、機械学習、形式化、自動形式化、数学的発見、倫理に関する内容を扱う。
* [AI-Assisted Mathematical Discovery](https://github.com/Nebius-Academy/ai-in-math-course) - オープンな13週間のコース。コードエージェント、機械学習、言語モデル、強化学習、実験的数学研究に関するノート、ノートブック、演習問題、事例研究を含む。

### 数学ソフトウェアとツール <a id="mathematical-software-and-tools"></a>

* [Symbolab](https://www.symbolab.com/) - ステップバイステップの解説、グラフ描画、計算機、練習ツールを備えたオンラインソルバー。一部の解説ステップや学習機能は有料プランが必要。
* [Desmos](https://www.desmos.com/calculator) - ブラウザベースのグラフ描画計算機。幾何学、表、統計、教室活動を含む。
* [Wolfram Alpha](https://www.wolframalpha.com/) - 表現式の評価、関数のプロット、構造化クエリへの回答を可能にする計算知識エンジン。一部の高度な機能は有料プランが必要。
* [Maxima](https://maxima.sourceforge.io/) - 無料のコンピュータ代数システム。記号および数値計算、プロット、スクリプトを提供。
* [SymPy](https://www.sympy.org/) - Pythonによる記号代数、微積分、方程式解法、行列、コード生成を支援するライブラリ。
* [SageMath](https://www.sagemath.org/) - 無料の数学ソフトウェア。Pythonを用いて、コンピュータ代数、数値計算、幾何学、統計、可視化を統合。
* [MathFlow](https://github.com/Nonanti/MathFlow) - C#による数学表現ライブラリ。記号計算（微分、簡約、方程式解法）を提供。
* [GeoGebra](https://www.geogebra.org/?lang=en) - 幾何学、グラフ、代数、スプレッドシート、統計、微積分をサポートするインタラクティブな数学ツールセット。
* [Macaulay2](https://macaulay2.com/) - 代数幾何学および可換代数学の研究用システム。専門的な計算パッケージを備える。
* [Singular](https://www.singular.uni-kl.de/) - 可換代数学、代数幾何学、特異理論における多項式計算を支援するコンピュータ代数システム。
* [GNU Octave](https://octave.org/) - 無料の環境。数値計算、線形代数学、プロット、MATLAB対応スクリプトを提供。
* [Magma](https://magma.maths.usyd.edu.au/magma/) - サブスクリプション型のコンピ連代数システム。代数学、数論、代数幾何学、組合せ数学の研究に適用。
* [Maple](https://www.maplesoft.com/products/Maple/) - 有料のコンピュータ代数および数値数学システム。記号計算、可視化、プログラミングを提供。
* [MATLAB](https://www.mathworks.com/products/matlab.html) - MathWorksによる有料の数値計算環境。
* [Wolfram Mathematica](https://www.wolfram.com/mathematica/) - 有料の技術計算システム。記号および数値数学、可視化、プログラミング、データ分析を提供。
* [Free Math](https://freemathapp.org) - 問題を自動的に解くことなく、デジタル数学の宿題を記録・整理・レビューするための無料オープンソースソフトウェア。
* [RunMat](https://github.com/runmat-org/runmat) - MATLAB構文の配列計算用の実行環境で、CPU/GPUの自動実行をサポート。
## 数学史と数学教育 <a id="history-and-mathematics-education"></a>

* [MacTutor History of Mathematics Archive](https://mathshistory.st-andrews.ac.uk/) - スタンフォード大学アーカイブの数学家たちの人物紹介、数学分野の歴史、タイムライン、機関、および関連資料。
* [NRICH](https://nrich.maths.org/) - カナダ大学の無料カリキュラム連動問題、調査、記事、および教師向けガイド。3歳から18歳までの学習者向け。

## コミュニティと追加資料 <a id="community-and-further-reading"></a>

### 学術誌と雑誌 <a id="journals-and-magazines"></a>

* [Quanta Magazine](https://www.quantamagazine.org/mathematics/) - 専門知識のない人々にも理解しやすいスタイルで、最新の研究発見を紹介。
* [Bulletin of the American Mathematical Society](https://www.ams.org/journals/bull/) - 現代数学研究に関する解説記事。特定の分野に詳しい専門家でない数学家にも洞察を与えるように書かれている。
* [Notices of the American Mathematical Society](https://www.ams.org/notices) - 学会の活動を公表し、産業、学術、研究に関する調査、報告、ニュース、発表、意見を掲載。
* [European Mathematical Society Magazine](https://euromathsoc.org/magazine) - マガジンには、会議やカンファレンスの発表、科学技術の現在のトレンドを示す記事、会員団体の報告など、多くの情報項目が掲載されている。
* [Mathematics Today by Institute of Mathematics and its Applications](https://ima.org.uk/publications/mathematics-today/) - 数学に関するニュース、意見、記事を提供し、読者を常に最新情報に保つ。
* [Crux Mathematicorum by Canadian Mathematical Society](https://cms.math.ca/publications/crux/) - 中等教育および大学レベルの学生向けの難問、およびオリンピックコーナーを含む。
* [Chalkdust Magazine](https://chalkdustmagazine.com/) - 数学に興味を持つ読者を対象とした独立したマガジン。無料の解説記事、インタビュー、パズル、ダウンロード可能な号を提供。

### ブログ <a id="blogs"></a>

* [BetterExplained](https://betterexplained.com/) - カーリッド・アザドによって維持されている。
* [ILoveMaths](https://ilovemaths.com/) - インドの6〜12年生向けの数学の授業と活動。
* [3Blue1Brown](https://www.3blue1brown.com/) - グラント・サンダーソンによる数学のアニメーション説明。
* [Math Is Fun](https://www.mathsisfun.com) - 学校数学向けの軽量な授業と参考ページ。

### 会議とカンファレンス <a id="meetings-and-conferences"></a>

* [MathsJam](https://mathsjam.com/) - 月に1回、地域で行われるレクリエーション数学とパズルの集まり、および英国での年次イベント。
* [Talking Maths in Public](https://talkingmathsinpublic.uk/) - 英国における数学コミュニケーション者向けの2年ごとのカンファレンス。
* [Bridges](https://www.bridgesmathart.org/) - 芸術、音楽、建築、文化における数学的関連性に関する年次カンファレンス。

### 関連する厳選リスト <a id="related-curated-lists"></a>

* [Theoretical Computer Science](https://github.com/mostafatouny/awesome-theoretical-computer-science) - 計算、複雑性、論理、アルゴリズム、暗号、および関連数学に関するキュレーションされたリソース。
* [Scientific Computing](https://github.com/nschloe/awesome-scientific-computing) - 数値解析、科学計算、メッシュ生成、ソルバー、可視化に関するキュレーションされたソフトウェア。
* [Optimization](https://github.com/ebrahimpichka/awesome-optimization) - 数学最適化および運営研究分野におけるコース、書籍、ノート、ソフトウェア。
* [Interactive Mathematics](https://github.com/ubavic/awesome-interactive-math) - インタラクティブな数学的説明や探索を構築するためのツールとライブラリ
* [AI for Mathematics](https://github.com/seewoo5/awesome-ai-for-math) - AIを活用した数学的推論、発見、形式証明および関連データセットをカバーする研究索引。各項目は独立したレビューを必要とする。
