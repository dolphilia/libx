---
title: "Awesome Computational Geometry"
description: "Computational Geometryを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-atkirtland-awesome-computational-geometry-readme-md"
---

# Awesome Computational Geometry

Computational Geometryを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [アルゴリズムの可視化](#algorithm-visualizations)
- [書籍](#books)
- [ノート](#notes)
- [ライブラリ](#libraries)
- [会議](#conferences)
  - [純粋な計算幾何学](#strictly-computational-geometry)
  - [より広範な分野](#broader)
- [ジャーナル](#journals)
- [競技プログラミング](#competitive-programming)
- [コース](#courses)
  - [公開コース](#open-courses)
  - [大学コース](#university-courses)
- [その他](#miscellaneous)

## アルゴリズムの可視化

- [Convex Hull](https://visualgo.net/en/convexhull?slide=1) - 形状を含む最小の凸集合である凸包。
- [Convex Hull Algorithms](https://erencan-02.github.io/ConvexHullVisualizer/index.html) - gift wrapping、Graham's scan、quickhull、分割統治法、monotone chain、Chan's algorithmなど、多数の凸包アルゴリズムを可視化するウェブサイト。
- [Chan's Algorithm](http://sophiedasinger.github.io/Classwork/163proj/#viz) - 2次元または3次元の点集合の凸包を計算する、出力サイズに応じて最適なアルゴリズム。
- [Kirkpatrick's Point location](http://rkaneriya.github.io/point-location/) - 三角形分割を用い、O(n)空間とO(log n)クエリ時間で点位置を求めるデータ構造と手法。
- [Voronoi Diagrams](http://alexbeutel.com/webgl/voronoi.html) - 平面を、与えられた点集合に近い領域へ分割したもの。
- [Fortune's Algorithm](https://www.desmos.com/calculator/ejatebvup4) - O(n log n)時間、O(n)空間でボロノイ図を生成する走査線アルゴリズム。
- [k-d tree](https://web.archive.org/web/20250209182314/https://opendsa-server.cs.vt.edu/ODSA/AV/Development/kd-treeAV.html?selfLoggingEnabled=false&localMode=false&module=KDtree&JXOP-debug=true&JOP-lang=en&JXOP-code=java&scoringServerEnabled=false&threshold=1.0&points=0&required=False) - 最近傍探索などの検索を効率的に行うための、k次元空間の分割方法。
- [Configuration Space](https://www.youtube.com/watch?v=SBFwgR4K1Gk) - ロボットのような物体が取り得る構成の空間。
- [CGViz: Computational Geometry Interactive Visualizations](https://jes24.github.io/CGViz/) ([GitHub](https://github.com/JeS24/CGViz)) - 探索、教育、出力可能な視覚表現の作成を目的に設計された、多数のアルゴリズムを段階的に可視化するFOSSウェブアプリ。

## 書籍

- [Computational Geometry: Algorithms and Applications](https://www.amazon.com/Computational-Geometry-Applications-Mark-Berg/dp/3540779736) - Mark de Berg、Otfried Cheong、Marc van Kreveld、Mark Overmarsによる教科書（2008年）。
- [Computational Geometry in C](https://www.amazon.com/Computational-Geometry-Cambridge-Theoretical-Paperback/dp/0521649765) - Joseph O'Rourkeによる、コンピュータグラフィックス、ロボティクス、工学設計などで生じる幾何アルゴリズムの設計と実装への、広く読まれている入門書（1998年）。
- [Computational Geometry: An Introduction](https://www.amazon.com/Computational-Geometry-Introduction-Monographs-Computer/dp/0387961313) - Franco P. PreparataとMichael I. Shamosによる入門教科書（1993年）。
- [Algorithmic Geometry](https://www.amazon.com/Algorithmic-Geometry-Jean-Daniel-Boissonnat/dp/0521565294) - Jean-Daniel Boissonnat、Mariette Yvinec、Herve Bronnimanによる教科書（1998年）。
- [Discrete and Computational Geometry](https://www.amazon.com/Discrete-Computational-Geometry-Satyan-Devadoss/dp/0691145539) - 純粋数学の比較的新しい発展である離散幾何学と、応用主導のコンピュータサイエンスで新興の分野である計算幾何学の交わりを、包括的かつ親しみやすく紹介するSatyan L. DevadossとJoseph O'Rourkeの書籍（2011年）。
- [Interactive Computational Geometry - A taxonomic approach](http://www.clearviewtraining.com/interactive-computational.html) - Jim Arlowによる、Mathematicaを使った計算幾何学の基本アルゴリズムの対話的入門（2014年）。

## ノート

- [Lecture Notes](http://www.cs.umd.edu/~mount/754/Lects/754lects.pdf) - David Mountによるメリーランド大学のCMSC 754 Computational Geometryの講義ノート（2002年）。
- [Handbook of Discrete and Computational Geometry](https://www.csun.edu/~ctoth/Handbook/HDCG3.html) - Jacob E. Goodman、Joseph O'Rourke、Csaba D. Tóthによるハンドブック（2017年）。
- [Handbook of Computational Geometry](https://www.amazon.com/Handbook-Computational-Geometry-J-Sack-ebook/dp/B00QM3S1SC) - J. R. SackとJ. Urrutiaによる、計算幾何学の主要概念と結果の概観（1998年）。
- [Computing in Euclidean Geometry](https://www.amazon.com/Computing-Euclidean-Geometry-Lecture-Notes/dp/9810218761) - Ding-Zhu DuとFrank Hwangによる、計算ユークリッド幾何学分野の近年の発展を扱う調査と探索的記事の集成（1995年）。

## ライブラリ

- [CGAL](https://www.cgal.org/) - 効率的で信頼性の高い幾何アルゴリズムへC++ライブラリの形で容易にアクセスできるソフトウェアプロジェクト。このウェブサイトにはこれらのアルゴリズムの多くに関する解説もある。
- [Wykobi](http://www.wykobi.com/index.html) - 非常に効率的で堅牢、かつ使いやすいC++の2D/3D指向計算幾何学ライブラリ。
- [geometry3Sharp](https://github.com/gradientspace/geometry3Sharp) - 幾何計算のためのオープンソース、BoostライセンスのC#ライブラリ。
- [Computational Geometry Software Libraries](http://jeffe.cs.illinois.edu/compgeom/software.html) - Jeff Ericksonによる、UIUCの大規模な幾何ソフトウェアのコレクションとライブラリ。
- [The Stony Brook Algorithm Repository](http://www3.cs.stonybrook.edu/~algorith/major_section/1.6.shtml) - [The Algorithm Design Manual](https://www.amazon.com/Algorithm-Design-Manual-Steven-Skiena/dp/1848000693)に基づくアルゴリズムのリポジトリ。
- [Geometric Tools](https://www.geometrictools.com/index.html) - 数学、グラフィックス、画像解析、物理学の分野で計算するためのソースコードのライブラリ。いくつかの計算幾何学アルゴリズムを含む。
- [GeoLib](http://www.geolib.co.uk/) - C++、C#、Javaで利用できる高速かつ効率的な計算幾何学ライブラリ。
- [hull.js](https://github.com/AndriiHeonia/hull) - 点集合の凸包を構築するJavaScriptライブラリ。
- [S2 Geometry Library](https://github.com/google/s2geometry) - 幾何形状を操作するパッケージ。多くの幾何ライブラリとは異なり、S2は主に、平面の2D地図ではなく球面上に描かれた形状、すなわち球面幾何学を扱うよう設計されている。このため地理データの処理に特に適している。
- [Computational Geometry Unity Library](https://github.com/Habrador/Computational-geometry) - Unity向けの計算幾何学アルゴリズムのライブラリ。

## 会議

### 純粋な計算幾何学

- [Symposium on Computational Geometry](http://www.computational-geometry.org/) - 年次シンポジウム。
- [The Canadian Conference on Computational Geometry](http://www.cccg.ca/) - 計算幾何学と組合せ幾何学の分野における新たな成果の普及を目的とする年次国際イベント。通常は8月中旬のカナダの都市で開催される。
- [Japan Conference on Discrete and Computational Geometry, Graphs, and Games](http://www.alg.cei.uec.ac.jp/itohiro/JCDCGG/) - 2008年を除き1997年から毎年開催されている会議。

### より広範な分野

- [Symposium on Discrete Algorithms](https://www.siam.org/conferences/cm/conference/soda22) - ACM-SIAMによる年次開催の会議。
- [Annual ACM Symposium on Theory of Computing](http://acm-stoc.org/) - STOCはアルゴリズムと計算理論におけるすべての研究分野を扱う。
- [IEEE Symposium on Foundations of Computer Science](http://ieee-focs.org/) - IEEE Computer Society Technical Committee on the Mathematical Foundations of Computing（TCMF）が主催する旗艦会議で、理論計算機科学の幅広い分野を扱う。
- [Annual Allerton Conference on Communications, Control and Computing](http://allerton.csl.illinois.edu/) - 産業界、学界、政府から優れた人材を集め、通信、制御、コンピューティング分野のイノベーションを議論する。

## ジャーナル

- [arXiv](https://arxiv.org/list/cs.CG/recent) - 計算幾何学に関するarXivの最近の投稿。
- [Elsevier](https://www.journals.elsevier.com/computational-geometry) - 計算幾何学の理論的・応用的側面に関する研究の場。
- [Journal of Computational Geometry](https://jocg.org/index.php/jocg) - 計算幾何学のあらゆる側面における最高品質の独創的研究の出版に専念する国際オープンアクセスジャーナル。

## 競技プログラミング

- [HackerEarth](https://www.hackerearth.com/practice/notes/computational-geometry-i-1/) - 計算幾何学に関する記事集。
- [TopCoder](https://www.topcoder.com/community/data-science/data-science-tutorials/geometry-concepts-basic-concepts/) - 計算幾何学に関する記事集。
- [HackerRank](https://www.hackerrank.com/domains/mathematics/geometry) - 計算幾何学を用いるプログラミング問題集。
- [GeeksforGeeks](https://www.geeksforgeeks.org/geometric-algorithms/) - 幾何アルゴリズムでよく問われる多数の問題と一般的なトピックの実装・解説。

## コース

### 公開コース

- [MIT OCW](https://ocw.mit.edu/courses/mechanical-engineering/2-158j-computational-geometry-spring-2003/) - Nicholas PatrikalakisとTakashi Maekawaが2013年に教えたコース。
- [Udemy](https://www.udemy.com/course/mastering-computational-geometry-cpp/) - C++で計算幾何学アルゴリズムを実装するコース。
- [edX](https://www.edx.org/course/computational-geometry) - 計算幾何学のコース。
- [Brilliant](https://brilliant.org/practice/computational-geometry-intro/) - 計算幾何学の基本概念を扱う練習問題。

### 大学コース

- [Brown University](http://cs.brown.edu/courses/cs252/) - Roberto Tamassiaが2005年に教えたコース。
- [Washington University in St. Louis](http://www.cs.wustl.edu/~taoju/cse546/) - Tao Juが2017年に教えたコース。
- [The University of Maryland](http://www.cs.umd.edu/~mount/754/) - Dave Mountが2002年に教えたコース。
- [UC Santa Barbara](https://sites.cs.ucsb.edu/~suri/cs235/235.html) - Subhash Suriが2021年に教えたコース。
- [UIUC](https://jeffe.cs.illinois.edu/teaching/compgeom/) - Jeff Ericksonが2022年に教えたコース。
- [UC Berkeley](https://people.eecs.berkeley.edu/~jrs/274/) - Jonathan Shewchukが2019年に教えたコース。
- [Tufts](http://www.cs.tufts.edu/comp/163/) - Diane Souvaineが2022年に教えたコース。
- [KIT](https://i11www.iti.kit.edu/teaching/sommer2018/compgeom/index) - Tamara MchedlidzeとChih-Hung Liuが2018年に教えたコース。

## その他

- [The Open Problems Project](https://topp.openproblem.net/) - 計算幾何学および関連分野における重要な未解決問題を記録することを目的とするプロジェクト。
- [Wolfram](https://reference.wolfram.com/language/guide/GeometricComputation.html) - Wolfram言語に実装された計算幾何学アルゴリズムのドキュメント。
- [Matlab](https://www.mathworks.com/help/matlab/computational-geometry.html) - Matlabに実装された計算幾何学アルゴリズムのドキュメント。

## コントリビュート

貢献を歓迎します。[コントリビューションガイドライン](https://github.com/atkirtland/awesome-computational-geometry/blob/648b71adb024d8d8c0f7226e2d3dc2de0f65aafb/contributing.md)を参照してください。
