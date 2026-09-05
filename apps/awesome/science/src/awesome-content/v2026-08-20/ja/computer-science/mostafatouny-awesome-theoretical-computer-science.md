---
title: "Awesome Theoretical Computer Science"
description: "Theoretical Computer Scienceを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-mostafatouny-awesome-theoretical-computer-science-readme-md"
---

# Awesome Theoretical Computer Science

Theoretical Computer Scienceを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [概説](#broad_intros)
  - [講義ノート](#broad_intros_lecture_notes) | [講義動画プレイリスト](#broad_intros_lecture_videos_playlists) | [書籍](#broad_intros_books) | [ハンドブック](#broad_intros_handbooks)
- [計算理論](#theory_of_computation)
  - [入門](#theory_of_computation_introductory)
    - [講義ノート](#theory_of_computation_introductory_lecture_notes) | [MOOC](#theory_of_computation_introductory_mooc) | [書籍](#theory_of_computation_introductory_books) | [パズルと問題集](#theory_of_computation_introductory_puzzles_and_problem_sets)
  - [計算複雑性](#theory_of_computation_computational_complexity)
    - [入門](#theory_of_computation_computational_complexity_introductory)
      - [講義動画プレイリスト](#theory_of_computation_computational_complexity_introductory_lecture_videos_playlists) | [講義ノート](#theory_of_computation_computational_complexity_introductory_lecture_notes) | [書籍](#theory_of_computation_computational_complexity_introductory_books) | [大規模リスト](#theory_of_computation_computational_complexity_introductory_big_lists)
    - [通信複雑性](#theory_of_computation_computational_complexity_communication_complexity)
      - [講義ノート](#theory_of_computation_computational_complexity_communication_complexity_lecture_notes) | [書籍](#theory_of_computation_computational_complexity_communication_complexity_books)
    - [回路複雑性](#theory_of_computation_computational_complexity_circuit_complexity)
      - [書籍](#theory_of_computation_computational_complexity_circuit_complexity_books)
    - [量子複雑性](#theory_of_computation_computational_complexity_quantum_complexity)
      - [講義動画プレイリスト](#theory_of_computation_computational_complexity_quantum_complexity_lecture_videos_playlists) | [講義ノート](#theory_of_computation_computational_complexity_quantum_complexity_lecture_notes)
    - [証明複雑性](#theory_of_computation_computational_complexity_proof_complexity)
      - [講義ノート](#theory_of_computation_computational_complexity_proof_complexity_lecture_notes)
  - [計算可能性理論](#theory_of_computation_computability_theory)
    - [書籍](#theory_of_computation_computability_theory_books)
      - [入門](#theory_of_computation_computability_theory_books_introductory) | [上級](#theory_of_computation_computability_theory_books_advanced) | [モノグラフ](#theory_of_computation_computability_theory_books_monograph)
- [論理学](#logic)
  - [計算複雑性](#logic_computational_complexity)
    - [書籍](#logic_computational_complexity_books)
- [プログラミング言語理論](#programming_language_theory)
  - [基礎](#programming_language_theory_basics)
    - [講義ノート](#programming_language_theory_basics_lecture_notes) | [書籍](#programming_language_theory_basics_books)
  - [入門](#programming_language_theory_introductory)
    - [書籍](#programming_language_theory_introductory_books)
  - [形式検証](#programming_language_theory_formal_verification)
    - [講義ノート](#programming_language_theory_formal_verification_lecture_notes) | [書籍](#programming_language_theory_formal_verification_books)
  - [型理論](#programming_language_theory_type_theory)
    - [講義ノート](#programming_language_theory_type_theory_lecture_notes) | [書籍](#programming_language_theory_type_theory_books)
  - [関数型プログラミング](#programming_language_theory_functional_programming)
    - [講義ノート](#programming_language_theory_functional_programming_lecture_notes)
- [アルゴリズム](#algorithms)
  - [一般](#algorithms_general)
    - [講義動画](#algorithms_general_lecture_videos) | [講義ノート](#algorithms_general_lecture_notes) | [書籍](#algorithms_general_books)
  - [下界](#algorithms_lower_bounds)
    - [講義動画プレイリスト](#algorithms_lower_bounds_lecture_videos_playlists) | [書籍](#algorithms_lower_bounds_books)
  - [ランダム化と確率](#algorithms_randomization__probability)
    - [講義ノート](#algorithms_randomization__probability_lecture_notes)
  - [近似](#algorithms_approximation)
    - [講義ノート](#algorithms_approximation_lecture_notes) | [書籍](#algorithms_approximation_books)
  - [パラメータ化](#algorithms_parameterized)
    - [講義動画プレイリスト](#algorithms_parameterized_lecture_videos_playlist) | [書籍](#algorithms_parameterized_books)
  - [学習拡張](#algorithms_learning-augmented)
    - [講義ノート](#algorithms_learning-augmented_lecture_notes) | [大規模リスト](#algorithms_learning-augmented_big_list)
- [情報理論・符号理論](#informationcoding_theory)
  - [講義ノート](#informationcoding_theory_lecture_notes)
- [暗号理論](#cryptography)
  - [書籍](#cryptography_books)
- [機械学習理論](#machine_learning_theory)
  - [講義ノート](#machine_learning_theory_lecture_notes) | [書籍](#machine_learning_theory_books) | [その他](#machine_learning_theory_other)
- [ゲーム理論](#game_theory)
  - [講義ノート](#game_theory_lecture_notes) | [書籍](#game_theory_books)
- [数学と論理](#math_and_logic)
  - [一般](#math_and_logic_general)
    - [講義動画プレイリスト](#math_and_logic_general_lecture_videos_playlist) | [書籍](#math_and_logic_general_books) | [講義ノート](#math_and_logic_general_lecture_notes)
  - [理論計算機科学の道具箱](#math_and_logic_tcs_toolkit)
    - [講義動画プレイリスト](#math_and_logic_tcs_toolkit_lecture_videos_playlists) | [講義ノート](#math_and_logic_tcs_toolkit_lecture_notes) | [書籍](#math_and_logic_tcs_toolkit_books)
  - [離散数学](#math_and_logic_discrete_mathematics)
    - [一般](#math_and_logic_discrete_mathematics_general)
      - [講義ノート](#math_and_logic_discrete_mathematics_general_lecture_notes) | [書籍](#math_and_logic_discrete_mathematics_general_books) | [MOOC](#math_and_logic_discrete_mathematics_general_mooc)
    - [確率的方法](#math_and_logic_discrete_mathematics_probabilistic_method)
      - [講義ノート](#math_and_logic_discrete_mathematics_probabilistic_method_lecture_notes) | [講義動画プレイリスト](#math_and_logic_discrete_mathematics_probabilistic_method_lecture_videos_playlist) | [書籍](#math_and_logic_discrete_mathematics_probabilistic_method_books)
    - [グラフ理論](#math_and_logic_discrete_mathematics_graph_theory)
      - [講義動画プレイリスト](#math_and_logic_discrete_mathematics_graph_theory_lecture_videos_playlist)
    - [その他](#math_and_logic_discrete_mathematics_other)
- [物理学](#physics)
  - [講義ノート](#physics_lecture_notes) | [書籍](#physics_books) | [モノグラフ](#physics_monographs)
- [哲学](#philosophy)
  - [講義ノート](#philosophy_lecture_notes) | [書籍](#philosophy_books) | [論文](#philosophy_papers)
- [サーベイとモノグラフ](#surveys__monographs)
- [コミュニティ](#community)
  - [会議とワークショップ](#community_conferences__workshops)
    - [集約サイト](#community_conferences__workshops_aggregators) | [開催中](#community_conferences__workshops_live) | [アーカイブ](#community_conferences__workshops_archived)
  - [雑誌とニュースレター](#community_magazines__newsletter)
  - [学会・団体](#community_associations)
  - [ブログ](#community_blogs)
    - [集約サイト](#community_blogs_aggregators) | [厳選記事・エッセイ](#community_blogs_selected_posts_and_essays)
  - [求人](#community_jobs)
  - [オンラインコミュニティ](#community_online_communities)
- [その他](#other)
  - [ポッドキャスト](#other_podcasts) | [一般向け科学](#other_popular_science) | [チートシート](#other_cheat_sheets)
- [関連リスト](#related_lists)

---

# 概説<a name=broad_intros></a>
## 講義ノート<a name=broad_intros_lecture_notes></a>
- [Barak. Introduction to TCS](https://introtcs.org/public/index.html) - 理論計算機科学の概説を学ぶための講義ノート。
## 講義動画プレイリスト<a name=broad_intros_lecture_videos_playlists></a>
- [Yanofsky. Theoretical Computer Science](https://www.youtube.com/playlist?list=PLCqUsBXxq16yBaN_hpo7dY2l9N-ZLtI-X) - 大学院レベルの計算理論の導入
- [Anil Ada. Great Ideas in Theoretical Computer Science. CMU](https://www.youtube.com/playlist?list=PLKzLTB8HeSUIuln-o1mbXfTr8HmIhiGEg) - 理論的コンピュータサイエンスにおける選ばれた重要なテーマについての講義シリーズ
- [O'Donnell. Great Ideas in Theoretical Computer Science. CMU](https://www.youtube.com/playlist?list=PLm3J0oaFux3aafQm568blS9blxtA_EWQv) - 理論的コンピュータサイエンスにおける選ばれた重要なテーマについての講義シリーズ
## 書籍<a name=broad_intros_books></a>
- [Wigderson. Mathematics and Computation: A Theory Revolutionizing Technology and Science](https://www.math.ias.edu/files/Book-online-Aug0619.pdf) - 複雑性理論の包括的な調査で、この分野の洞察と課題を強調。重要なモデル、概念、結果の背後にある考えと動機を説明する。
- [Moore & Mertens. The Nature of Computation](http://nature-of-computation.org/) - マゼンとゲームの複雑性、理論および実務における最適化、ランダムアルゴリズム、インタラクティブプローフ、偽ランダム性、マルコフ連鎖とフェーズ転移、そして量子コンピューティングについての調査。アクセスしやすい説明を提供する
## ハンドブック<a name=broad_intros_handbooks></a>
- [Atallah & Blanton. Algorithms and Theory of Computation Handbook: General Concepts and Techniques](https://www.routledge.com/Algorithms-and-Theory-of-Computation-Handbook-Volume-1-General-Concepts/Atallah-Blanton/p/book/9781138113930) - 理論計算機科学の概説を広く参照できるハンドブック。
- [Atallah & Blanton. Algorithms and Theory of Computation Handbook: Special Topics and Techniques](https://www.routledge.com/Algorithms-and-Theory-of-Computation-Handbook-Volume-2-Special-Topics/Atallah-Blanton/p/book/9780367384845) - 理論計算機科学の概説を広く参照できるハンドブック。
- [Handbook of Theoretical Computer Science. Volume A: Algorithms and Complexity](https://mitpress.mit.edu/books/handbook-theoretical-computer-science-volume) - 理論計算機科学の概説を広く参照できるハンドブック。
- [Handbook of Theoretical Computer Science. Volume B: Formal Methods and Semantics](https://mitpress.mit.edu/books/handbook-theoretical-computer-science-2-vol-set) - 理論計算機科学の概説を広く参照できるハンドブック。
# 計算理論<a name=theory_of_computation></a>
## 入門<a name=theory_of_computation_introductory></a>
### 講義ノート<a name=theory_of_computation_introductory_lecture_notes></a>
- [Watrous. Introduction to The Theory of Computing](https://cs.uwaterloo.ca/~watrous/ToC-notes/) - 大学院レベルの計算理論の導入
### MOOC<a name=theory_of_computation_introductory_mooc></a>
- [Intro to Theoretical Computer Science](https://www.udacity.com/course/intro-to-theoretical-computer-science--cs313) - 理論的コンピュータサイエンスにおける基本的な概念、例えばNP完全性、そしてそれらが困難なアルゴリズ及問題の解決にどう影響するかを教えている。
- [Computability, Complexity & Algorithms. Georgia Institute of Technology](https://www.udacity.com/course/computability-complexity-algorithms--ud061) - 計算の大きな基本的な問いに焦点を当て、アルゴリズムの力と限界を理解することで、現実のコンピュータを賢く、速く、安全に設計するためのツールを構築できるようになることを説明する。
### 書籍<a name=theory_of_computation_introductory_books></a>
- [Sipser. Introduction to Theory of Computation](https://www.cengage.com/c/introduction-to-the-theory-of-computation-3e-sipser/9781133187790/) - 大学院生向けの計算理論の導入としての標準的な教科書。
- [Hopcroft, Motwani & Ullman. Introduction to Automata Theory, Languages, and Computation](https://www.pearson.com/us/higher-education/program/Hopcroft-Introduction-to-Automata-Theory-Languages-and-Computation-3rd-Edition/PGM64331.html) - 自動機、言語、計算理論のテーマについての大学院レベルの入門教科書。
### パズルと問題集<a name=theory_of_computation_introductory_puzzles_and_problem_sets></a>
- [Zhu & Ko. Problem Solving in Automata, Languages, and Complexity](https://onlinelibrary.wiley.com/doi/book/10.1002/0471224642) - 計算理論の理解を深める問題集。
## 計算複雑性<a name=theory_of_computation_computational_complexity></a>
### 入門<a name=theory_of_computation_computational_complexity_introductory></a>
#### 講義動画プレイリスト<a name=theory_of_computation_computational_complexity_introductory_lecture_videos_playlists></a>
- [O'Donnell. Undergrad Complexity Theory. Fall 2019 (15-455)](https://www.youtube.com/playlist?list=PLm3J0oaFux3YL5vLXpzOyJiLtqLp6dCW2) ([Homework](https://www.cs.cmu.edu/~odonnell/15455-s17/)) - 計算理論を学ぶための講義動画。
- [O'Donnell. Graduate Complexity Theory](https://www.youtube.com/playlist?list=PLm3J0oaFux3b8Gg1DdaJOzYNsaXYLAOKH) - 複雑性理論の研究を始めるために知られていることの大部分をカバーしている。
#### 講義ノート<a name=theory_of_computation_computational_complexity_introductory_lecture_notes></a>
- [Rudich & Wigderson. Computational Complexity Theory](http://www.ams.org/books/pcms/010/) - IAS/パーキー・シティ・マスティクス・インスティテュートの夏学校で行われた計算複雑性に関する3週間の講義。テーマには、帰約、下限、平均ケース複雑性、ランダム性、インタラクティブプローフシステム、確率的にチェック可能な証明、量子コンピューティング、および証明複雑性が含まれる。
#### 書籍<a name=theory_of_computation_computational_complexity_introductory_books></a>
- [Arora & Barak. Computational Complexity: A Modern Approach](https://theory.cs.princeton.edu/complexity/book.pdf) - 優れた標準的な教科書で、研究生および研究者向けの計算複雑性理論の調査。
- [Goldreich. Computational Complexity: A Conceptual Perspective](http://www.wisdom.weizmann.ac.il/~oded/cc-book.html) - 研究生向けの計算複雑性理論の導入で、複雑性理論の概念の背後にある考えを強調。
- [Goldreich. P, NP, and NP-Completeness: The Basics of Computational Complexity](http://www.wisdom.weizmann.ac.il/~oded/bc-book.html) - 計算複雑性のいくつかの基本的なアイデア、例えばNP完全性やP vs NPについて非常に優しく導入する。
- [Ogihara & Hemaspaandra. The Complexity Theory Companion](https://www.springer.com/gp/book/9783540674191) - 計算複雑性理論の最も興味深い技術のいくつかについて、アクセスしやすく、アルゴリズムに焦点を当て、研究中心の、最新のガイド。
- [Papadimitriou. Computational Complexity](https://www.pearson.com/us/higher-education/program/Papadimitriou-Computational-Complexity/PGM94583.html) - コンピュータアルゴリズムの性能と限界を研究するための知識体系。取り上げられているテーマには、帰約とNP完全性、暗号とプロトコル、ランダムアルゴリズム、最適化問題の近似可能性、回路複雑性、P=NP問題の構造的側面、並列計算、および多項式階層がある。
#### 大規模リスト<a name=theory_of_computation_computational_complexity_introductory_big_lists></a>
- [Complexity Zoo](https://complexityzoo.net/) - 計算理論の資料を集約したリソース。
### 通信複雑性<a name=theory_of_computation_computational_complexity_communication_complexity></a>
#### 講義ノート<a name=theory_of_computation_computational_complexity_communication_complexity_lecture_notes></a>
- [Mark Bun. CS591 Communication Complexity](https://cs-people.bu.edu/mbun/courses/591_F19/) - 研究生向けのコースで、この分野の基本的な成果と技術、および一部の研究の先端的な問題を紹介。テーマには、通信モデルと通信複雑性のゾーン、情報と通信、クエリから通信への昇格、および応用がある。
#### 書籍<a name=theory_of_computation_computational_complexity_communication_complexity_books></a>
- [Rao & Yehudayoff. Communication Complexity and Applications](https://www.cambridge.org/core/books/communication-complexity/5F44993E3B2597174B71D3F21E748443) - 通信複雑性分野の非常に優れた、読みやすい入門教科書。
### 回路複雑性<a name=theory_of_computation_computational_complexity_circuit_complexity></a>
#### 書籍<a name=theory_of_computation_computational_complexity_circuit_complexity_books></a>
- [Jukna. Boolean Function Complexity: Advances and Frontiers](https://www.springer.com/gp/book/9783642245077) - 現代的な教科書で、回路複雑性を調査する。
- [Clote & Kranakis. Boolean Functions and Computation Models](https://www.springer.com/gp/book/9783540594369) - 回路複雑性、論理関数、および計算モデルについての導入
### 量子複雑性<a name=theory_of_computation_computational_complexity_quantum_complexity></a>
#### 講義動画プレイリスト<a name=theory_of_computation_computational_complexity_quantum_complexity_lecture_videos_playlists></a>
- [Uni Paderborn. Quantum Complexity Theory. Winter 2020](https://www.youtube.com/playlist?list=PLZGjbQcY0aI7Yqwbwp-lsf1tTPyvkQG6h) - ボソンサンプリング、量子インタラクティブプローフ、量子メルリンアーツなどのテーマを扱う、修士課程レベルの講義
#### 講義ノート<a name=theory_of_computation_computational_complexity_quantum_complexity_lecture_notes></a>
- [Henry Yuen. The Complexity of Entanglement. Fall 2020](https://www.henryyuen.net/fall2020/complexity_of_entanglement_notes.pdf) - 計算理論を学ぶための講義ノート。 関連資料: [class](https://www.henryyuen.net/classes/fall2020/)。
### 証明複雑性<a name=theory_of_computation_computational_complexity_proof_complexity></a>
#### 講義ノート<a name=theory_of_computation_computational_complexity_proof_complexity_lecture_notes></a>
- [Robert Robere. Proof Complexity: Algorithms and Lower Bounds](https://www.cs.mcgill.ca/~robere/comp598/index.html) - 現代の証明複雑性についての導入、計算複雑性および最適化におけるアルゴリズムとの関連を強調
## 計算可能性理論<a name=theory_of_computation_computability_theory></a>
### 書籍<a name=theory_of_computation_computability_theory_books></a>
#### 入門<a name=theory_of_computation_computability_theory_books_introductory></a>
- [Cutland. Computability: An Introduction to Recursive Function Theory](https://www.cambridge.org/highereducation/books/computability/E8F085FDBECB8280F7723D71C1D2EE1C) - 直感的に、計算可能な関数の概念を説明する：値を効果的または自動的に計算できる関数。
- [Cooper. Computability Theory](https://www.routledge.com/Computability-Theory/Cooper-Cooper/p/book/9781584882374) - 現代の計算可能性理論、手法、結果についての簡潔で包括的かつ信頼性の高い導入。
- [Davis. Computability and Unsolvability](https://www.amazon.com/Computability-Unsolvability-Prof-Martin-Davis/dp/0486614719) - この古典的なテキストでは、ダビス博士が高度な大学院レベルで計算可能性について明確に導入しており、専門家や非専門家に共に適した内容を提供している。
#### 上級<a name=theory_of_computation_computability_theory_books_advanced></a>
- [Soare. Recursively Enumerable Sets and Degree](https://www.springer.com/gp/book/9783540666813) - r.e.次数の理論についての完全な解説。定義、結果、証明は常に明確に説明され、形式的な提示の前に導入され、証明は驚くほど明確かつ簡潔に記述されている。
- [Odifreddi. Classical Recursion Theory: The Theory of Functions and Sets of Natural Numbers](https://archive.org/details/classicalrecursi0000odif) - 古典的な再帰理論についての素晴らしい紹介。再帰理論に興味があるすべての人にとって強く推薦される。
#### モノグラフ<a name=theory_of_computation_computability_theory_books_monograph></a>
- [Copeland, Posy & Shagrir (editors). Computability: Turing, Gödel, Church, and Beyond](https://mitpress.mit.edu/books/computability) - コンピュータサイエンティスト、数学家、哲学者が、計算可能性の概念的基礎および最近の理論的発展について議論している。
# 論理学<a name=logic></a>
## 計算複雑性<a name=logic_computational_complexity></a>
### 書籍<a name=logic_computational_complexity_books></a>
- [Pudlák. Logical Foundations of Mathematics and Computational Complexity: A Gentle Introduction](https://www.springer.com/gp/book/9783319001180) - 論理学と計算複雑性を体系的に扱う書籍。
# プログラミング言語理論<a name=programming_language_theory></a>
## 基礎<a name=programming_language_theory_basics></a>
### 講義ノート<a name=programming_language_theory_basics_lecture_notes></a>
- [Cambridge Foundations of CS](https://www.cl.cam.ac.uk/teaching/2425/FoundsCS/materials.html) - プログラミングを教えるとともに、コンピュータサイエンスのいくつかの基本原則、特にアルゴリズム設計を紹介する。
### 書籍<a name=programming_language_theory_basics_books></a>
- Structure and Interpretation of Computer Programs - [MIT OCW](https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/pages/syllabus/), [HTML book](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html), [Byford's playlist](https://www.youtube.com/playlist?list=PL7BcsI5ueSNFPCEisbaoQ0kXIDX9rR5FF), [Javascript book](https://github.com/source-academy/sicp?tab=readme-ov-file), [Python book](https://wizardforcel.gitbooks.io/sicp-in-python/content/index.html), [Berkeley for self-study](https://romanbird.github.io/sicp/#e682e189-1f90-4713-9dfe-35c92b7d1cdf), and [Berkeley 2024](https://cs61a.org/) - プログラミング言語理論を体系的に扱う書籍。
## 入門<a name=programming_language_theory_introductory></a>
### 書籍<a name=programming_language_theory_introductory_books></a>
- [Pierce. Software Foundations. Pennsylvania](https://softwarefoundations.cis.upenn.edu/) - 信頼性のあるソフトウェアの数学的根拠についての広範な導入シリーズ。これは、Coq証明補助システムの証明スクリプトから構成されている。特定のバックグラウンドを仮定せず、幅広い読者に向けられている。
## 形式検証<a name=programming_language_theory_formal_verification></a>
### 講義ノート<a name=programming_language_theory_formal_verification_lecture_notes></a>
- [UW CSE505 18au Principles of PL](https://sites.google.com/cs.washington.edu/cse-505-18au/home) - プログラミング言語について鋭く考えるための技術、いくつかの興味深いプログラムを書くこと、そしてさまざまな設計のトレードオフについて議論する。
### 書籍<a name=programming_language_theory_formal_verification_books></a>
- [Chlipala. Formal Reasoning About Programs](http://adam.chlipala.net/frap) - Coq証明補助システムによる機械検証証明と、プログラムの正しさについての形式的推論のアプローチを紹介する書籍。
- [Lean Proof Assistant](https://lean-lang.org/documentation/) - Lean 証明補助システム。
## 型理論<a name=programming_language_theory_type_theory></a>
### 講義ノート<a name=programming_language_theory_type_theory_lecture_notes></a>
- [Martin-Löf. Intuitionistic Type Theory](https://raw.githubusercontent.com/michaelt/martin-lof/master/pdfs/Bibliopolis-Book-retypeset-1984.pdf) - 1980年6月、パドゥアで行われたタイプ理論講義のノート。Giovanni Sambinによる。
### 書籍<a name=programming_language_theory_type_theory_books></a>
- [Bengt. Programming in Martin-Löf's Type Theory](https://www.cse.chalmers.se/research/group/logic/book/book.pdf) - 本書は、計算科学の視点から、異なるタイプ理論（タイプ理論、多変数集合および単変数集合、部分集合）を説明している。
- [The Univalent Foundations Program Institute for Advanced Study. Homotopy Type Theory: Univalent Foundations of Mathematics](https://homotopytypetheory.org/book) - 本書は、ユニバーサル基礎の基本を初めて体系的に説明し、この新しい推論スタイルの例を収集しているが、読者に形式論理を知らせるか、学ばせるか、あるいはコンピュータ証明補助システムを用いる必要はない。
## 関数型プログラミング<a name=programming_language_theory_functional_programming></a>
### 講義ノート<a name=programming_language_theory_functional_programming_lecture_notes></a>
- [Helsinki. Haskell MOOC](https://haskell.mooc.fi) - Haskellプログラミング言語を使った関数型プログラミングのオンラインコースおよびライブインタラクティブなTelegramコミュニティ。
- [Cornell. Functional Programming in Ocaml](https://www.cs.cornell.edu/courses/cs3110/2024sp) - OCamlを用いたデータ構造と関数型プログラミングの現代的なコース。
# アルゴリズム<a name=algorithms></a>
## 一般<a name=algorithms_general></a>
### 講義動画<a name=algorithms_general_lecture_videos></a>
- [Demaine/Ku/Soloman. Introduction to Algorithms. MIT](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) - 基本的なアルゴリズムとデータ構造についての初級コース。—Erik自身が追加。
- [Demaine/Devadas/Lynch. Design and Analysis of algorithms. MIT](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/) - アルゴリズムとデータ構造に関する2回目のコース。— エリク自身が追加！
- [Erik Demaine. Advanced Data Structures. MIT](https://ocw.mit.edu/courses/6-851-advanced-data-structures-spring-2012/) - データ構造における主要な成果と現在の研究の方向について述べている。
### 講義ノート<a name=algorithms_general_lecture_notes></a>
- [Arora. Advanced Algorithm Design](https://www.cs.princeton.edu/courses/archive/fall15/cos521/) - 特にランダム性、近似、高次元幾何学といった考え方が使われており、不確実性を扱い、大規模データの処理、解けない問題の扱い、ヒューリスティックなアプローチなどについて述べている。
### 書籍<a name=algorithms_general_books></a>
- [Knuth. The Art of Computer Programming](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming) - ドナルド・クヌースによるアルゴリズムの設計と解析に関する伝説的なシリーズ。
## 下界<a name=algorithms_lower_bounds></a>
### 講義動画プレイリスト<a name=algorithms_lower_bounds_lecture_videos_playlists></a>
- [Demaine. Algorithmic Lower Bounds: Fun with Hardness Proofs](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-890-algorithmic-lower-bounds-fun-with-hardness-proofs-fall-2014/) - 効率的に解けない問題を証明するための実用的なアプローチを取る講義。
### 書籍<a name=algorithms_lower_bounds_books></a>
- [Demaine, Gasarch & Hajiaghayi. Computers and Intractability: A Guide to Algorithmic Lower Bounds](https://hardness.mit.edu/) - ゲリーとジョンソンの『コンピュータと非解不可能性：NP完全性へのガイド』の続編。新たに取り上げたトピックには、パラメータ化複雑性、近似の下限、他のハードネス仮定（ETH、3SUM予想、APSP予想、UGC、その他）、オンラインアルゴリズム、ストリーミングアルゴリズ、多項式パリティ論理、並列性などが含まれる。
- [Demaine. Games, Puzzles, and Computation](https://www.routledge.com/Games-Puzzles-and-Computation/Hearn-Demaine/p/book/9781568813226) - ゲームやパズルが計算モデルとして強力な手段であることを示しており、計算についての新たな考え方が提供されている。
## ランダム化と確率<a name=algorithms_randomization__probability></a>
### 講義ノート<a name=algorithms_randomization__probability_lecture_notes></a>
- [Mary Wootters. Randomized Algorithms and Probabilistic Analysis. Stanford](https://web.stanford.edu/class/archive/cs/cs265/cs265.1232/) - 確率解析の基本的なツールと、それらを用いてランダムプロセスやアルゴリズムの行動を理解するための応用。理論的基礎に重点を置いているが、機械学習やデータ分析、ネットワーク、システムにおける応用についても述べる。テーマには、尾の境界、確率的手法、マーカーチェーン、マーティンゲル、ランダムグラフ、メトリック埋め込み、ランダムウォークの解析などがある。
- [Koutsoupias. Probability and Computing. Oxford](https://www.cs.ox.ac.uk/people/elias.koutsoupias/pc2018-19/) - コンピュータサイエンスにおける確率的手法の紹介。
- Harvey. [First](https://www.cs.ubc.ca/~nickhar/Book1.pdf) and [Second](https://www.cs.ubc.ca/~nickhar/Book2.pdf) Course in Randomized Algorithms. Columbia. - アルゴリズム理論を学ぶための講義ノート。
- [Lee. Randomized Algorithms and Probabilistic Analysis. Washington.](https://homes.cs.washington.edu/~jrl/teaching/cse525sp19/) - テーマには、離散確率、高次元幾何学と統計、情報とエントロピー、マーカーチェーンと均衡への収束がある。
- [Aspnes. Notes on Randomized Algorithms](https://www.cs.yale.edu/homes/aspnes/classes/469/notes.pdf) - ミツネマッハァー＆アップファルス、およびモトワニ＆ラグヴァンの標準書への補足ノート。
## 近似<a name=algorithms_approximation></a>
### 講義ノート<a name=algorithms_approximation_lecture_notes></a>
- [Chekuri. Approximation Algorithmis Illinois](https://courses.engr.illinois.edu/cs583/fa2021/) - 結果と技術の広範な紹介であり、基本的な問題と広く適用可能なツールに重点を置いている。さらに高度で専門的なトピックも含まれる。
- [Dinitz. Approximation Algorithms. Johns Hopkins](https://www.cs.jhu.edu/~mdinitz/classes/ApproxAlgorithms/Spring2021/) - グリーディー、ローカルサーチ、動的計画法、ランダム化丸め、ツリー埋め込み、半定数計画法を含む。
- [Gupta & Ravi. Approximation Algorithms. CMU](http://www.cs.cmu.edu/afs/cs/academic/class/15854-f05/www/) - 凸計画法に基づく、ランダム性、メトリック手法を含む。
### 書籍<a name=algorithms_approximation_books></a>
- [Williamson & Shmoys. The Design of Approximation Algorithms](https://www.designofapproxalgs.com/) - グリーディー、ローカルサーチアルゴリズム、動的計画法、線形および半定数計画法、ランダム化を含む。
- [Du & Ko. Design and Analysis of Approximation Algorithms](https://u.pcloud.link/publink/show?code=XZpzNWXZSCkVs6BKd5RzyNhoRzfJCJoaqSok) - 手法に焦点を当てたアプローチにより、統一的な視点を提供。研究論文から詳細なアルゴリズム、証明、分析、例、応用が含まれる。
- [Vijay Vazirani. Approximation Algorithms](https://u.pcloud.link/publink/show?code=XZgHNWXZkdvT8L18drSSgLP9vqBIDmbPreD7)
## パラメータ化<a name=algorithms_parameterized></a>
### 講義動画プレイリスト<a name=algorithms_parameterized_lecture_videos_playlist></a>
- [Parametarized Algorithms by Warsaw](https://www.youtube.com/playlist?list=PLzdZSKerwrXpr6hWq1s63a42YbkocAK1Q)
### 書籍<a name=algorithms_parameterized_books></a>
- Fedor Fomin. Parametrized Algorithms - Modern comprehensive explanation of recent tools and techniques with exercises, for graduate students.
## 学習拡張<a name=algorithms_learning-augmented></a>
### 講義ノート<a name=algorithms_learning-augmented_lecture_notes></a>
- [Indyk & Daskalakis. Learning-augmented Algorithms. MIT](https://stellar.mit.edu/S/course/6/sp19/6.890/materials.html)
### 大規模リスト<a name=algorithms_learning-augmented_big_list></a>
- [Algorithms with Predictions](https://algorithms-with-predictions.github.io/)
# 情報理論・符号理論<a name=informationcoding_theory></a>
## 講義ノート<a name=informationcoding_theory_lecture_notes></a>
- [Madhu Sudan. Essential Coding Theory](http://people.seas.harvard.edu/~madhusudan/courses/Spring2020/) - 情報理論と符号理論を学ぶための講義ノート。
- Scott Aaronson. Quantum Information Science. [Part I](https://www.scottaaronson.com/qclec.pdf) & [Part II](https://www.scottaaronson.com/qisii.pdf) - 情報理論と符号理論を学ぶための講義ノート。
# 暗号理論<a name=cryptography></a>
## 書籍<a name=cryptography_books></a>
- [Lindell. Tutorials on the Foundations of Cryptography](https://link.springer.com/book/10.1007/978-3-319-57048-8) - 経験豊富な研究者向けの高度なチュートリアル。
- [Goldreich. Modern Cryptography, Probabilistic Proofs and Pseudorandomness](https://www.wisdom.weizmann.ac.il/~oded/book1.html) - 暗号、証明、ランダム性の相互に関連する分野への紹介。
- [Goldreich. Randomized Methods in Computation](http://www.wisdom.weizmann.ac.il/~oded/rnd.html) - 現在のコースの目的は、学生がいくつかのランダム化手法に慣れることである。
# 機械学習理論<a name=machine_learning_theory></a>
## 講義ノート<a name=machine_learning_theory_lecture_notes></a>
- [Blum. An Introduction to the Theory of Machine Learning. TTIC](https://home.ttic.edu/~avrim/MLT20/) - 機械学習の基本理論およびデータから一般化するプロセス。
- [Telgarsky. Deep Learning Theory. Illinois](https://mjt.cs.illinois.edu/dlt/) - 単純な証明に焦点を当て、文献に記載されている内容を簡略化し、i.i.d.データ上で二値分類において低テスト誤差を達成するための標準（通常はReLU）の前向きネットワークの古典的アプローチを扱う。
- [Vaughan. CS260: Machine Learning Theory](http://www.jennwv.com/courses/F11.html) - 一般的な機械学習アルゴリズムの理論的基礎に関する包括的な概観。
- [Livni. COS 511 Theoretical Machine Learning. Princeton](https://www.cs.princeton.edu/~rlivni/cos511/cos511.html) - 学習モデルとして提案されたさまざまなモデルを形式的に定義し、研究する。本講義では、統計的、計算的およびオンライン学習モデルを提示し、比較する。また、今日までに広く使用されている機械学習における最も成功したアルゴリズムのいくつかを提示し、厳密に分析する。
- [Moitra. Theoretical Foundations for Deep Learning. MIT](https://people.csail.mit.edu/moitra/408b.html) - 深層学習の理論的基礎を探索し、以下のテーマに焦点を当てる：(1) 近似：深層ネットワークが表現できる関数の種類は何か、そして深層が表現力の向上を確実に保証するか？(2) 最適化：実際の問題で解決したいすべての最適化問題は非凸である。このような問題を分析するためのフレームワークは何か？(3) 最悪ケース分析を超える：深層ネットワークは最悪ケースデータを記憶できるが、なぜ現実世界のデータ上で良好な一般化が可能なのか？
- [Arora. Overcoming Intractability in Machine Learning](https://www.cs.princeton.edu/courses/archive/spring15/cos598D/) - 機械学習における多くの問題は形式的に計算不可能（例：NP困難）であるが、実際にはヒューリスティックによって解決される。このような問題に対して、証明可能な保証（実行時間、解の品質）を持つアルゴリズムを設計できるか？
## 書籍<a name=machine_learning_theory_books></a>
- [Vazirani & Kearns. An Introduction to Computational Learning Theory](https://mitpress.mit.edu/books/introduction-computational-learning-theory) - 計算効率の観点に焦点を当て、計算学習理論におけるいくつかの中心的なテーマを紹介する。
- [Shalev-Shwartz. Understanding Machine Learning: From Theory to Algorithms](https://www.cambridge.org/core/books/understanding-machine-learning/3059695661405D25673058E43C8BE2A6) - 機械学習の基本的な思想と、それらを実用的なアルゴリズムに変換するための数学的導出を広く理論的に説明する。
## その他<a name=machine_learning_theory_other></a>
- [Blum. Intro Machine Learning Theory](https://www.cs.cmu.edu/~avrim/Talks/mlt.pdf).
- [Blum, et.al. Machine Learning, Game Theory, and Mechanism Design for a Networked World](https://www.cs.cmu.edu/~mblum/search/AGTML35.pdf).
- [Agrawal & Jaiswal. When Machine Learning Meets AI and Game Theory](https://cs229.stanford.edu/proj2012/AgrawalJaiswal-WhenMachineLearningMeetsAIandGameTheory.pdf).
# ゲーム理論<a name=game_theory></a>
## 講義ノート<a name=game_theory_lecture_notes></a>
- [Tim Roughgarden. Complexity Theory, Game Theory, and Economics: The Barbados Lectures](https://arxiv.org/abs/1801.00734) - 二重目的を持つミニコースノート：(i) 複雑性理論が経済学およびゲーム理論におけるいくつかの障壁を明らかにした方法を説明する；(ii) ゲーム理論の問題が新しいかつ興味深い複雑性理論（特に最近のいくつかの突破）を生み出した方法を示す。
- [Eva Tardos. Algorithmic Game Theory](http://www.cs.cornell.edu/courses/cs6840/2012sp/) - アルゴリズ及的思考とゲーム理論、あるいはより一般的に経済学の概念を組み合わせる。本講義では、この交差点におけるさまざまなテーマを研究する。講義の前提知識は数学的思考のみである。
- [Chekuri. Topics in Algorithms: Algorithmic Game Theory](https://chekuri.cs.illinois.edu/teaching/spring2008/agt.htm) - 大学院レベルの概説：オークション、ゲームおよび市場における均衡の存在と計算、アルゴリズムメカニズム設計、アンarchyの価格と安定の価格、ネットワークおよび電子商取引に関連するゲーム。重点は概念的アイデアおよびアルゴリズム的側面にある。ゲーム理論や経済学の知識は前提として求められない。
- [Penna. Algorithmic Game Theory](https://ml2.inf.ethz.ch/courses/agt/) - 本講義では、ゲーム理論のアルゴリズム的側面について議論する。例えば、ゲーム理論の一般導入、オークション、メカニズム、中央制御の最適解と自発的代理者の均衡のコストの比較、および均衡を計算するアルゴリズムと複雑性について。
- [Brown. Resources list for game theory](http://cs.brown.edu/courses/cs1951k/lectures/) - これらのノートは、スタンフォード大学のティム・ラウガーデンのCS 364AおよびCS 364B講義ノートおよび関連動画、およびジェイソン・ハートラインの「メカニズム設計と近似」教科書に基づいて largely 作成された。
- [Fang. Advanced Topics in Machine Learning and Game Theory](https://feifang.info/advanced-topics-in-machine-learning-and-game-theory-fall-2021/) - Fangによる、機械学習とゲーム理論の交差領域を扱う大学院レベルの講義です。
- [Xu. Topics in Learning and Game Theory](http://www.haifeng-xu.com/cs6501sp21/index.htm) - Xuによる、機械学習とゲーム理論の接点にあるトピックを扱う大学院レベルの講義です。
- [Tim Roughgarden. Foundations of Blockchains](https://timroughgarden.github.io/fob21/) - ゲーム理論を学ぶための講義ノート。 関連資料: [Lecture Videos](https://www.youtube.com/playlist?list=PLEGCF-WLh2RLOHv_xUGLqRts_9JxrckiA)。
## 書籍<a name=game_theory_books></a>
- [Apt & Grädel. Lectures in Game Theory for Computer Scientists](https://www.cambridge.org/us/academic/subjects/computer-science/programming-languages-and-applied-logic/lectures-game-theory-computer-scientists) - ゲームは相互作用のための数学的モデルであり、コンピュータサイエンスの多くのタスクはゲーム理論の観点から表現できる。
- [Eva Tardos & et.al. Algorithmic Game Theory](https://www.cambridge.org/core/books/algorithmic-game-theory/0092C07CA8B724E1B1BE2238DDD66B38#fndtn-information) - 均衡、メカニズム設計および組合せオークションのためのアルゴリズム的手法に関する基本的な章を経て、インセンティブおよび価格、コスト共有、情報市場および暗号・セキュリティといったゲーム理論の重要な応用に関する章へと続く。
# 数学と論理<a name=math_and_logic></a>
## 一般<a name=math_and_logic_general></a>
### 講義動画プレイリスト<a name=math_and_logic_general_lecture_videos_playlist></a>
- [Demaine, Abel & Chapman. Mathematics for Computer Science](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/) - コンピュータ科学者向けの離散数学の初心者向け導入書。 - [Companion Textbook 2015](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/readings/MIT6_042JS15_textbook.pdf)
### 書籍<a name=math_and_logic_general_books></a>
- [Knuth, Graham & Patashnik. Concrete Mathematics: A Foundation for Computer Science](https://www.pearson.com/us/higher-education/product/Graham-Concrete-Mathematics-A-Foundation-for-Computer-Science-2nd-Edition/9780134389981.html) - クヌースの名作『コンピュータプログラミングの芸術』の数学的準備部分を拡張したものだが、プレゼンテーションのスタイルはよりゆったりしており、個々のテーマがより深く扱われている。
- [Aho & Ullman. Foundations of Computer Science](http://i.stanford.edu/~ullman/focs.html) - コンピュータサイエンスの数学的アプローチによる古典的な導入。
- [Tu Delft. Delftse Foundations of Computation](https://books.open.tudelft.nl/home/catalog/book/211) - 理論的コンピュータサイエンスの1四分の一の導入コース向けの教科書。論理、証明技術、集合論を含む。前提知識は基本的なプログラミングのみである。
- [Eck & Critchlow. Foundations of Computation](https://math.hws.edu/FoundationsOfComputation/) - 理論的コンピュータサイエンスの1学期コース向け。前提知識は初級的なプログラミングのみである。論理、集合、関数（離散数学）、オートマトン、形式言語、文法（上級コース）を含む。
- [Comprehensive Mathematics for Computer Scientists](https://www.springer.com/series/5517) - 数学のテーマとそのコンピュータサイエンスへの関連性についてのシリーズ
- [Krantz. Handbook of Logic and Proof Techniques for Computer Science](https://www.maa.org/press/maa-reviews/handbook-of-logic-and-proof-techniques-for-computer-science) - 専門のコンピュータサイエンス研究者向けに、数学論理についてのアクセスしやすい参考書として提供されている
- [Makinson. Sets, Logic and Maths for Computing](https://www.springer.com/gp/book/9783030422172) - 初年度および第二年度のコンピュータサイエンスを学ぶ学生が最も必要な内容を丁寧に選別した書籍
- [Yves Nievergelt. Logic, Mathematics, and Computer Science: Modern Foundations with Practical Applications](https://www.springer.com/gp/book/9781493932221) - 低学年大学生向けに、論理、証明、集合、数論を紹介し、基礎を強調。形式証明の完全な詳細と導出を提供
- [Lacona. LOGIC: Lecture Notes for Philosophy, Mathematics, and Computer Science](https://link.springer.com/book/10.1007/978-3-030-64811-4) - 論理の初歩的な大学教育および早期の修士課程に適した書籍
- [Ben-Ari. Mathematical Logic for Computer Science](https://www.springer.com/gp/book/9781447141280) - 意味論的テーブルは理論的に確実であり、理解しやすいので使用されている
- [Jeremy Kun. A Programmer's Introduction to Mathematics](https://pimbook.org/) - プログラミングやソフトウェアの知識を活かして数学を教える
- [Vince. Foundation Mathematics for Computer Science: A Visual Approach](https://www.springer.com/gp/book/9783030420772) - 数理の幅広いテーマを提供し、コンピュータサイエンスの大学レベルのコースの基礎を築く。数の体系とデジタルコンピュータとの関連性から始まり、微分積分まで終える
- [Oberguggenberger & Ostermann. Analysis for Computer Scientists: Foundations, Methods, and Algorithms](https://www.springer.com/gp/book/9783319911540) - 数学解析へのアルゴリズム的アプローチを提示し、モデリングと解析の応用に焦点を当てる
### 講義ノート<a name=math_and_logic_general_lecture_notes></a>
- [Paluszynski. Calculus for Computer Scientists](https://www.math.uni.wroc.pl/~mpal/academic/2013/lecture_notes.pdf) - 大学レベルのコンピュータサイエンス学生向けの微分積分講義ノート
## 理論計算機科学の道具箱<a name=math_and_logic_tcs_toolkit></a>
### 講義動画プレイリスト<a name=math_and_logic_tcs_toolkit_lecture_videos_playlists></a>
- [O'Donnell. CS Theory Toolkit](https://www.youtube.com/playlist?list=PLm3J0oaFux3ZYpFLwwrlv_EHH9wtH6pnX) - コンピュータ科学理論における論文の読み方や研究を行うために必要な数学／CSのトピックの多くを扱っている - あるいは： [bilibili](https://www.bilibili.com/video/BV1Ry4y1e7zR)
- [Madhur Tulsiani. Mathematical Toolkit](https://home.ttic.edu/~madhurt/courses/toolkit2021/index.html) - 理論計算機科学に必要な数学と論理を学ぶための講義動画。
- [Harsha & Strivastava. Toolkit for Theoretical Computer Science. Tata Institute](https://www.tifr.res.in/~prahladh/teaching/2020-21/toolkit/)
### 講義ノート<a name=math_and_logic_tcs_toolkit_lecture_notes></a>
- [Gregory Valiant. The Modern Algorithmic Toolbox. Stanford](https://web.stanford.edu/class/cs168/) - ハッシュ、次元削減、線形および凸計画法、勾配降下および回帰、サンプリングと推定、圧縮センシング、線形代数的手法（主成分分析、特異値分解、スペクトル技術）、微分プライバシーの導入をカバー
- [Zhou. A Theorist's Toolkit. Illinois](https://yuanz.web.illinois.edu/teaching/B609fa16/) - コンピュータサイエンス理論の読解および研究に必要な多くの数学・コンピュータサイエンスのテーマをカバー
- [O'Donnell. A Theorist's Toolkit. CMU](https://www.cs.cmu.edu/~odonnell/toolkit13/) - コンピュータサイエンス理論の読解および研究に必要な多くの数学・コンピュータサイエンスのテーマをカバー
- [Arora. Thinking Like a Theorist. Princeton](https://www.cs.princeton.edu/courses/archive/fall07/cos597D/Site/lectopics.html) - コンピュータサイエンス理論の読解および研究に必要な多くの数学・コンピュータサイエンスのテーマをカバー
- [Arora. A Theorist's Toolkit. Princeton](https://www.cs.princeton.edu/courses/archive/fall02/cs597D/) - 理論的コンピュータサイエンスの研究を行う第一・第二年生を主対象とした書籍。確率的、代数学的、組合せ的、アルゴリズム的手法を紹介する
- [Kelner. Topics in Theoretical Computer Science: An Algorithmist's Toolkit. MIT](https://ocw.mit.edu/courses/18-409-topics-in-theoretical-computer-science-an-algorithmists-toolkit-fall-2009/) - 現代アルゴリズム設計に広く適用可能な幾何学的手法を紹介
- [Maji & Valiant. Theoretical Computer Science Toolkit. Purdue](https://www.cs.purdue.edu/homes/hmaji/teaching/Spring%202023/CS-58500-Spring-2023.html)
### 書籍<a name=math_and_logic_tcs_toolkit_books></a>
- [Jukna. Extremal Combinatorics](https://web.vu.lt/mif/s.jukna/EC_Book_2nd/index.html) - 理論的コンピュータサイエンスにおける応用を意識した組合せ的手法を記述。主に複雑性に焦点を当てる
## 離散数学<a name=math_and_logic_discrete_mathematics></a>
### 一般<a name=math_and_logic_discrete_mathematics_general></a>
#### 講義ノート<a name=math_and_logic_discrete_mathematics_general_lecture_notes></a>
- [Aspnes. Notes on Discrete Mathematics](https://www.cs.yale.edu/homes/aspnes/classes/202/notes.pdf) - イリノイ大学のCPSC 202a「コンピュータサイエンスのための数学的ツール」2017年秋学期の講義ノート
- [Halpern. CS 2802: Discrete Structures - Honors. 2020. Cornell](https://www.cs.cornell.edu/courses/cs2802/2020fa/cs2802-20f-notes.html) - 理論計算機科学に必要な数学と論理を学ぶための講義ノート。 関連資料: [Homework](https://www.cs.cornell.edu/courses/cs2802/2020fa/cs2802-20f-homework.html)。
#### 書籍<a name=math_and_logic_discrete_mathematics_general_books></a>
- [Rosen. Handbook of Discrete and Combinatorial Mathematics](https://www.taylorfrancis.com/books/handbook-discrete-combinatorial-mathematics-kenneth-rosen-douglas-shier-wayne-goddard/e/10.1201/9781315156484) - 離散数学のほぼすべてのテーマと、コンピューティングおよび通信工学への関連性についての包括的な調査
- [Rosen. Discrete Mathematics and Its Applications](https://www.mheducation.com/highered/product/discrete-mathematics-applications-rosen/M9780073383095.html) - 高校生でも理解可能な標準的な離散数学教科書
- [Rosenberg & Trystram. Understand Mathematics, Understand Computing: Discrete Mathematics That All Computing Students Should Know](https://www.springer.com/gp/book/9783030583750) - 離散数学の計算への実用的、概念的および方法論的な理解を読者に与える
- [Gries & Schneider. A Logical Approach to Discrete Math](https://www.springer.com/gp/book/9780387941158) - 論理を初学者に教える方法を変えることを試みる。論理を孤立した分野として教えるのではなく、基本的なツールとして捉え、その使い方を示す
#### MOOC<a name=math_and_logic_discrete_mathematics_general_mooc></a>
- [Introduction to Discrete Mathematics for Computer Science. UC San-Diego](https://www.coursera.org/specializations/discrete-mathematics) - 理論計算機科学に必要な数学と論理を学べるオンライン講座。
### 確率的方法<a name=math_and_logic_discrete_mathematics_probabilistic_method></a>
#### 講義ノート<a name=math_and_logic_discrete_mathematics_probabilistic_method_lecture_notes></a>
- [Yufei. Probabilistic Methods in Combinatorics. MIT](https://ocw.mit.edu/courses/18-226-probabilistic-methods-in-combinatorics-fall-2022/pages/syllabus/) and [Yufei's Graph Theory book](https://yufeizhao.com/gtacbook/) - 理論計算機科学に必要な数学と論理を学ぶための講義ノート。
#### 講義動画プレイリスト<a name=math_and_logic_discrete_mathematics_probabilistic_method_lecture_videos_playlist></a>
- [Luke Postle. Probablistic Methods. Waterloo](https://www.youtube.com/playlist?list=PL2BdWtDKMS6nRF72s3TOGyBqXwMVHYiLU)
#### 書籍<a name=math_and_logic_discrete_mathematics_probabilistic_method_books></a>
- [Alon & Spencer. The Probabilistic Method](https://www.wiley.com/en-us/The+Probabilistic+Method%2C+4th+Edition-p-9781119061953) - 組み合わせ論における確率的手法の研究者向けの標準参考書。理論コンピュータサイエンスとの関連も示す
### グラフ理論<a name=math_and_logic_discrete_mathematics_graph_theory></a>
#### 講義動画プレイリスト<a name=math_and_logic_discrete_mathematics_graph_theory_lecture_videos_playlist></a>
- [Graph Theory by Waterloo](https://www.youtube.com/playlist?list=PL2BdWtDKMS6mplieDd_vls0TBX9Fq2jht)
### その他<a name=math_and_logic_discrete_mathematics_other></a>
- [Mariconda & Tonolo. Discrete Calculus: Methods for Counting](https://www.springer.com/gp/book/9783319030371) - 理論計算機科学に必要な数学と論理の主要な話題と研究成果を学ぶための資料。
# 物理学<a name=physics></a>
## 講義ノート<a name=physics_lecture_notes></a>
- [Arora. The Computational Universe](https://www.cs.princeton.edu/courses/archive/spring11/cos116/lectures.php) - 物理学と計算理論を学ぶための講義ノート。
## 書籍<a name=physics_books></a>
- [Feynman. Feynman And Computation: Exploring The Limits Of Computers](https://www.taylorfrancis.com/books/feynman-computation-anthony-hey/e/10.1201/9780429500459)
- Feynman’s Course on Computation - See also Preskill's update 40 years later [here](https://arxiv.org/abs/2106.10522)
## モノグラフ<a name=physics_monographs></a>
- [Susskind. Three Lectures on Complexity and Black Holes](https://link.springer.com/book/10.1007/978-3-030-45109-7) - 物理学と計算理論を体系的に扱う書籍。
# 哲学<a name=philosophy></a>
## 講義ノート<a name=philosophy_lecture_notes></a>
- [6.893 Philosophy and Theoretical Computer Science. MIT](https://stellar.mit.edu/S/course/6/fa11/6.893/index.html) - 計算・数学・論理の哲学を学ぶための講義ノート。
## 書籍<a name=philosophy_books></a>
- [Knuth. Things a Computer Scientist Rarely Talks About](https://web.stanford.edu/group/cslipublications/cslipublications/site/1575863278.shtml) - 信仰と科学の関係性についての一般的な説明
- [Floyd & Bokulich. Philosophical Explorations of the Legacy of Alan Turing: Turing 100](https://www.springer.com/gp/book/9783319532783) - チューリングの科学史および科学哲学における位置
## 論文<a name=philosophy_papers></a>
- [Aaronson. Why Should Philosophers Care About Computational Complexity Theory](https://www.scottaaronson.com/papers/philos.pdf) - 計算複雑性理論が数学的知識の性質や他の哲学的問題に対する新たな視点をもたらすことを主張している
- [Aharonov & Vazirani, Is Quantum Mechanics Falsifiable? A Computational Perspective on the Foundations of Quantum Mechanics](https://www.researchgate.net/publication/227171743_Is_Quantum_Mechanics_Falsifiable_A_computational_perspective_on_thefoundations_of_Quantum_Mechanics) - 量子力学が高複雑性領域において通常の科学的枠組みを拡張することで検証可能であることを説明している
- [Walter Dean. Computational Complexity Theory and the Philosophy of Mathematics](https://academic.oup.com/philmat/article/27/3/381/5613215) - 哲学的数学の従来の問いに対して複雑性理論の重要性を強調しつつ、いくつかの新たな問いを抽出している
- [Stanford Encyclopedia of Philosophy. Computational Complexity Theory](https://plato.stanford.edu/entries/computational-complexity/) - 複雑性理論の基礎と、コンピュータサイエンスの哲学、数学の哲学、認識論への潜在的な意義
- [Philip Davis. Toward a Philosophy of Computation](https://www.jstor.org/stable/40247755) - 世界の数学化およびコンピュータ化に関する哲学的意義
# サーベイとモノグラフ<a name=surveys__monographs></a>
- [Sommaruga & Strahm. Turing’s Revolution: The Impact of His Ideas about Computability](https://link.springer.com/book/10.1007/978-3-319-22156-4) - 歴史的、技術的および哲学的な論文の収集
- [Harry Lewis. Ideas That Created the Future: Classic Papers of Computer Science ](https://mitpress.mit.edu/9780262045308/ideas-that-created-the-future/) - アリストテレスからライプニッツ、ノルベルト・ウィナー、ゴードン・マーカーまで、コンピュータサイエンスの進化を示す思想家たちの代表的な論文
- [Building Bridges I](https://rd.springer.com/book/10.1007/978-3-540-85221-6), [Building Bridges II](https://link.springer.com/book/10.1007/978-3-662-59204-5), [Fete of Combinatorics and Computer Science](https://link.springer.com/book/10.1007/978-3-642-13580-4) - 理論計算機科学を体系的に扱う書籍。
- [Fortnow & Homer. A Short History of Computational Complexity](https://www.researchgate.net/profile/Lance-Fortnow/publication/220530495_A_Short_History_of_Computational_Complexity/links/0deec52bd7ab603fef000000/A-Short-History-of-Computational-Complexity.pdf) - 計算複雑性の歴史的概観
- [Goldreich. Providing Sound Foundations for Cryptography: On the Work of Shafi Goldwasser and Silvio Micali](http://www.wisdom.weizmann.ac.il/~oded/sst.html) - シャフィとシルビオの素晴らしい研究の意義を説明し、その研究が暗号学の基礎に与えた影響を述べている
# コミュニティ<a name=community></a>
## 会議とワークショップ<a name=community_conferences__workshops></a>
### 集約サイト<a name=community_conferences__workshops_aggregators></a>
- [Hermann's Conferences in TCS](https://www.lix.polytechnique.fr/~hermann/conf.php) - TCS会議が一つの表にまとめられたもの
- [CS Theory Events Aggregator](https://cstheory-events.org/) - コンピュータ理論ワークショップおよび学校の情報集約サイト
- [Theory Announcements](https://dmatheorynet.blogspot.com/) - DMANETは離散数学およびアルゴリズムに関する会議、ワークショップ、セミナーなどに情報を広めている
- [Salamon's List](https://cstheory.stackexchange.com/a/7901/57686) - 選ばれた会議
### 開催中<a name=community_conferences__workshops_live></a>
- [Simons' Institute](https://simons.berkeley.edu/) - 理論コンピュータサイエンスコミュニティ全体にわたって影響力と参加を最大化するためのプログラム、イベント、ワークショップ
- [TCS+](https://www.youtube.com/user/TCSplusSeminars) - 理論コンピ連絡のオンラインセミナー。目標は、可能な限り広い層に魅力的な講演を提供すること
- [CMU Theory](https://www.youtube.com/channel/UCWFp4UWNiOv71j0sPbdNiqw) - コンピュータサイエンスにおける基本的な問題についての数学的解釈を目指し、その理解をもとにより優れたアルゴリズム、プロトコル、システムを設計し、効率的な計算の内在的な制限を明らかにする。
### アーカイブ<a name=community_conferences__workshops_archived></a>
- [Turing Laureates Lectures](https://www.youtube.com/playlist?list=PLn0nrSd4xjjYCkOxtYqozyDuwt-4sC2L6) and [Turing Laureates Interviews](https://www.youtube.com/playlist?list=PLn0nrSd4xjjaSLBSzmno-3Ods6FJE9nlO) - 理論計算機科学コミュニティに関する会議・ワークショップ情報。
- [Computational Complexity](https://www.youtube.com/channel/UCzBw287tly0c2lE6a-9XymA) - ワークショップの収集。
## 雑誌とニュースレター<a name=community_magazines__newsletter></a>
- [EATCS Bulletin](https://eatcs.org/index.php/on-line-issues) - 調査、チュートリアル、会議報告、イベント、未解決問題とその解決策、博士論文、そして興味深い寄稿。
- [SIGACT News](https://dl.acm.org/loi/sigact) - ACMの公式な理論コンピュータサイエンスニュースフィード。
- [Foundations and Trends in Theoretical Computer Science](https://www.nowpublishers.com/TCS) - 論文に掲載されるのは、理論のリーダーが執筆した単著で、テーマのチュートリアル的解説、研究の振り返り、および最先端の調査論文が該当する。
- [Quanta Magazine](https://www.quantamagazine.org/tag/computational-complexity) - 分野における突破的な成果を、専門家でない読者にも理解しやすいスタイルで記述。
## 学会・団体<a name=community_associations></a>
- [ACM's SIGACT](https://sigact.org/)
- [European Association of TCS](https://www.eatcs.org/)
## ブログ<a name=community_blogs></a>
### 集約サイト<a name=community_blogs_aggregators></a>
- [Theory of Computing Blog Aggregator](https://theory.report/) - 理論コンピュータサイエンス（TCS）に関連するすべてのブログをアグレゲートしたブログ。
### 厳選記事・エッセイ<a name=community_blogs_selected_posts_and_essays></a>
- [Omer Reingold. The Practice of Theory Research](https://omereingold.wordpress.com/cs-163-the-practice-of-theory-research/) - 研究手法に関するコースで、研究の「どうやって」を行うかに焦点を当て、コンピュータサイエンス理論研究に共通する研究実践を強調。
- [Omer Reingold. TOC: a Personal Perspective (2021)](https://theorydish.blog/2021/04/15/toc-a-personal-perspective-2021/) - 「TOC: a Scientific Perspective（1996）」が25周年を迎えることを祝い、TCSが数学ほど深くない、あるいはコンピュータサイエンスほど有用でないという批判に注目。
- [Blum. You and Your Research: An Advice to a Beginning Graduate Student](https://www.cs.cmu.edu/~mblum/research/pdf/grad.html) - 理論コンピュータサイエンス界で非常に人気のある人物であるマヌエル・ブルムが、若手研究者向けに研究のアドバイスを提供。
- [Dijkstra. The Three Golden Rules for Successful Scientific Research](https://link.springer.com/chapter/10.1007%2F978-1-4612-5695-3_58) - 科学的リサーチにおいて成功するための3つのルールについてのノート。
- [Goldreich. Essays and Opinions](http://www.wisdom.weizmann.ac.il/~oded/essays.html) - オデッド・ゴールドリッヒによる個人的なエッセイ。TCSおよびそのコミュニティにおける概念的なメッセージが非常に独特。
- [Barak. Advice for The Budding Theorist](https://windowsontheory.org/2015/11/03/advice-for-the-budding-theorist/) - 理論コンピュータサイエンスに興味があるすべての人へのアドバイス。
- [Barak. Surveys For Students](https://thmatters.wordpress.com/surveys/) - 高校生、大学院生、さらには研究者向けの調査資料。
- [Barak. Non-technical or Less-technical Writings and Talks](https://www.boazbarak.org/informal/) - 技術的に未熟な読者を意識した投稿。
- [Lipton & Regan](https://rjlipton.wpcomstaging.com/2022/01/26/a-list-of-most-theory-blogs/) - コンピュータサイエンスにおける理論分野のブログ一覧。
- [Karp. A Personal View of Computer Science at Berkeley](https://www2.eecs.berkeley.edu/bears/CS_Anniversary/karp-talk.html) - カープのエッセイ：1968年にカリフォルニア大学バークレー校のコンピュータサイエンスは問題があった。2つの部門が独立してプログラムを開発しており、彼の個人的な回想。
- [Hamming. You and Your Research](https://www.cs.virginia.edu/~robins/YouAndYourResearch.html) - なぜ科学者の中には、大きな貢献をした人が少なく、長期間にわたって忘れ去られる人が多いのか？この講演はハミングが学んだことについて述べる。
- [Weinberg. Four Golden Lessons](https://www.nature.com/articles/426389a) - スティーブン・ウィンバーグが学生や研究者に贈る教え。
- [Princeton's Companion. Advice to a Young Mathematician](http://assets.press.princeton.edu/chapters/gowers/gowers_VIII_6.pdf) - 5人の寄稿者が、数学と研究の人生経験をもとに、自分が始めた頃に受けたいと思っていたアドバイスを述べる。
- [Terry. Career Advice](https://terrytao.wordpress.com/career-advice/) - 数学における学術職業に関するさまざまなアドバイスの集まり。そのアドバイスが最も関連性を持つキャリア段階にroughly分類されている。
- [Igor Pak. How to Start a Paper](https://igorpak.wordpress.com/2022/10/26/how-to-start-a-paper/) - なぜ、あなたの論文の物語を導くための概念的な序論を紹介すべきか。
## 求人<a name=community_jobs></a>
- [Rubinstein & Weinberg. Research Masters in TCS](https://www.cs.princeton.edu/~smattw/masters/masters.html) - TCSにおけるマスター課程のリスト。
- [CS Theory Jobs](https://cstheory-jobs.org) - TCSの求人情報。
- [Yaroslavtsev. Hires spreadsheet 2022](http://grigory.us/blog/posts/) - 2022年の理論分野の採用に関する情報収集を目的とした、共同編集されたスプレッドシート。
## オンラインコミュニティ<a name=community_online_communities></a>
- [TCS Stack Exchange](https://cstheory.stackexchange.com/) - 理論計算機科学コミュニティについて交流できるオンラインコミュニティ。
- [TCS Subreddit](https://www.reddit.com/r/theoreticalcs)- 理論計算機科学のSubreddit。
# その他<a name=other></a>
## ポッドキャスト<a name=other_podcasts></a>
- Lex Fridman - [Donald Knuth 1](https://www.youtube.com/watch?v=2BdBfsXbST8) | [Donald Knuth 2](https://www.youtube.com/watch?v=EE1R8FYUJm0) | [Silvio Micali](https://www.youtube.com/watch?v=zNdhgOk4-fE) | [Richard Karp](https://www.youtube.com/watch?v=KllCrlfLuzs) | [Scott Aaronson 1](https://www.youtube.com/watch?v=uX5t8EivCaM) | [Scott Aaronson 2](https://www.youtube.com/watch?v=nAMjv0NAESM)
- [Berkeley in the 80s](https://www.youtube.com/playlist?list=PLUFeA6y-5sFmXMJv2uAmMig3Urgfkg_2O) - berkeleyの著名人物へのインタビュー。
- [Simons' Theory Shorts](https://www.youtube.com/playlist?list=PLgKuh-lKre134Psz9KECgjuwJ47l3IvqW) - 理論計算の分野に向けた、短くアクセスしやすい動画の集合。
- [ACM ByteCast](https://www.youtube.com/playlist?list=PLn0nrSd4xjjbCHzgtvc9HDRU80HHaD0Lr) - 研究者、実務家、そして研究と実務の交差点に立つイノベーターたちが、自らの経験や教訓、未来へのビジョンを共有するもの。
## 一般向け科学<a name=other_popular_science></a>
- [The Legacy of Alan Turing: Pushing the Boundaries of Computation (Volume 18, Issue 3, Spring 2012). ACM, XRDS](https://dl.acm.org/toc/xrds/2012/18/3) - ACMの学生誌の理論計算特別号。
- [Fortnow. The Golden Ticket: P, NP, and the Search for the Impossible](https://goldenticket.fortnow.com) - P-NP問題の非技術的な紹介。その豊かな歴史と、私たちがコンピュータを使って行うすべてのアルゴリズム的影響について。
- [Ausiello. The Making of a New Science: A Personal Journey Through the Early Years of Theoretical Computer Science](https://link.springer.com/book/10.1007/978-3-319-62680-2) - 人々の物語。多様な背景と性格を持つ先駆者たちが新しい分野を創出した物語。
- [Aaronson. Quantum Computing Since Democritus](https://assets.cambridge.org/97805211/99568/frontmatter/9780521199568_frontmatter.pdf) - 古代のデモクリトスから始まり、論理、集合論、計算可能性と複雑性理論、量子計算、暗号、量子状態の情報量、そして量子力学の解釈まで、驚くべき多様なテーマをカバーしている。
- [Deutsch. The Fabric of Reality: The Science of Parallel Universes and Its Implications](http://www.daviddeutsch.org.uk/books/the-fabric-of-reality/) - 『The Fabric of Reality』は、現代科学と科学哲学の最も深い考えを真剣に取り上げることで得られる、驚くべき統合性と理性と希望を備えた世界観を提示している。
- [Papadimitriou. Turing: A Novel About Computation](https://mitpress.mit.edu/books/turing-novel-about-computation) - チューリングの世界における計算、星交わる恋人たちに語られたインタラクティブチュートリアルプログラム、小説。
- [Teuscher. Alan Turing: Life and Legacy of a Great. Springer](https://link.springer.com/book/10.1007/978-3-662-05642-4) - チューリングの人生、研究活動、遺産をカバーするエッセイの集合。
- [Petzold. The Annotated Turing: A Guided Tour Through Alan Turing's Historic Paper on Computability and the Turing Machine](http://www.charlespetzold.com/AnnotatedTuring/) - アラン・チューリングの計算可能性とチューリングマシンに関する歴史的な論文へのガイドツアー。
- [Shasha & Lazere. Out of their Minds: The Lives and Discoveries of 15 Great Computer Scientists](https://www.springer.com/gp/book/9780387982694) - 時代の偉大な科学者たちに、彼らのインスピレーション、発見、個人的な興味についてのインタビュー。
## チートシート<a name=other_cheat_sheets></a>
- [TCS Cheat Sheet](https://www.cosy.sbg.ac.at/~held/teaching/aads/TCS-cheat_sheet.pdf) - 理論計算機科学の要点をまとめた早見表。
- [Useful Inequalities Cheat Sheet](http://www.lkozma.net/inequalities_cheat_sheet/)
# 関連リスト<a name=related_lists></a>
- [Algorithms](https://github.com/tayllan/awesome-algorithms).
- [Mathematics](https://github.com/rossant/awesome-math) - 関連分野の資料を集めたリスト。
- [nLab](https://ncatlab.org/nlab/show/mathematics) & [Gratzer](https://github.com/jozefg/learn-tt) - 関連分野の資料を集めたリスト。
- [Cryptography](https://github.com/sobolevn/awesome-cryptography).
- [Quantum Computing](https://github.com/desireevl/awesome-quantum-computing).
- [Math](https://github.com/ossu/math)と[CS](https://github.com/ossu/computer-science)は、[Open Source Society University](https://github.com/ossu)によるカリキュラム。
