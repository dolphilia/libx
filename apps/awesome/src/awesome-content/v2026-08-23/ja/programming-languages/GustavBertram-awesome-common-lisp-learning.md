---
title: "GustavBertram/awesome-common-lisp-learning"
description: "GustavBertram/awesome-common-lisp-learning の正規スナップショット"
licenseSource: "github-GustavBertram-awesome-common-lisp-learning-readme-md"
---

# Awesome Common Lisp Learning [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<div align="center">
  <img src="https://raw.githubusercontent.com/GustavBertram/awesome-common-lisp-learning/2bcbbc47a9bce0dfbf5dd81d97f94d1d8360ae11/LISP_logo_mid.png">
</div>

このリストはCommon Lispを学ぶためのリソース、特に作者が役立つと感じたものに焦点を当てています。

ほかの話題に焦点を当てたAwesome Common Lispリストもあります。
- [ライブラリ](https://github.com/CodyReichert/awesome-cl)
  - [厳選ライブラリ](https://github.com/vindarel/curated-awesome-cl) - 上記のリストからフォークして更新。
- [ソフトウェア](https://github.com/azzamsa/awesome-cl-software)

コントリビューションを歓迎します。詳細は[コントリビューションガイドライン](https://github.com/GustavBertram/awesome-common-lisp-learning/blob/2bcbbc47a9bce0dfbf5dd81d97f94d1d8360ae11/contributing.md)をお読みください。

## 目次

- [使い方](#how-to-use)
- [Lisp環境](#lisp-environments)
- [オンラインリファレンス](#online-references)
- [オンライン書籍](#online-books)
- [オフライン書籍](#offline-books)
- [オンラインコミュニティ](#online-community)
- [ライブラリ管理](#library-management)
- [Common Lisp実装](#common-lisp-implementations)
- [謝辞](#credit)

## 使い方 <a id="how-to-use"></a>
1. Lisp環境を入手する。
2. [The Common Lisp Hyperspec](http://www.lispworks.com/documentation/common-lisp.html).
3. 自分に合ったレベルのLisp書籍をダウンロードして読み進める。例を入力し、コードを試す。別の書籍へ切り替えても構わない。
4. [Exercism](https://exercism.org/tracks/common-lisp).
5. 行き詰まったらオンラインコミュニティを探し、[賢い質問をする](http://www.catb.org/esr/faqs/smart-questions.html)。
6. [Quicklisp](https://www.quicklisp.org/beta/).
7. いずれ、使用しているLisp実装のマニュアルを読む。

## Lisp環境 <a id="lisp-environments"></a>
Lisp実装を直接実行することもできますが、編集環境を使うと作業が容易になります。
- パッケージ済み環境
  - [Portacle](https://shinmera.github.io/portacle/) - 移植可能なマルチプラットフォームCommon Lisp環境。少しカスタマイズしたEmacsにSLIME、SBCL（人気のCommon Lisp実装）、Quicklisp、Gitを同梱。インストール不要で、すぐ簡単に始められる。
  - [Lispbox](https://common-lisp.net/project/lispbox/) - IDE（Emacs + SLIME）、Common Lisp実装（Clozure Common Lisp）、ライブラリ管理ツール（Quicklisp）をWindows、macOS、Linux向けアーカイブとしてまとめたもの。Practical Common Lispで[紹介された](http://www.gigamonkeys.com/book/lather-rinse-repeat-a-tour-of-the-repl.html)「Lisp in a Box」の後継。
  - [Lispworks Personal Edition](http://www.lispworks.com/downloads/) - 一部制限のある、LispWorks Lisp向け非Emacs系IDE。
  - [Allegro Common Lisp](https://franz.com/products/allegrocl/) - 無料の[Express Edition](https://franz.com/downloads/clp/survey) IDEと、[YouTubeのトレーニング動画](https://www.youtube.com/channel/UCN36UrxtyNBJPaG0kmBJNRw)を提供。
- 上級ユーザー向け
  - [Articulate Common Lisp](http://articulate-lisp.com) - Lisp環境を組み立てるためのHOWTO。[有用なライブラリ](http://articulate-lisp.com/project/abcs.html)と[プロジェクト構成](http://articulate-lisp.com/project/new-project.html)の情報も掲載。
  - 経験豊富な[Emacs](https://www.gnu.org/software/emacs/)ユーザーなら、[SLIME](https://common-lisp.net/project/slime/)と[対応するCommon Lisp実装](https://common-lisp.net/project/slime/doc/html/Platforms.html#Platforms)をインストールすればよい。詳細は[SLIMEマニュアル](https://common-lisp.net/project/slime/doc/html/)を参照。
  - The Common Lisp Cookbookには、[実装のインストール](https://lispcookbook.github.io/cl-cookbook/getting-started.html)について、[Roswell](https://github.com/roswell/roswell/wiki)のような実装管理ツールやDockerを使う方法など、さらに詳しい情報がある。

## オンラインリファレンス <a id="online-references"></a>
- [The Common Lisp Hyperspec (CLHS)](http://www.lispworks.com/documentation/common-lisp.html) - Common Lispにおける*決定版の*言語リファレンス。今すぐブックマークしよう。
  - [第7章](http://www.lispworks.com/documentation/HyperSpec/Body/07_.htm) - Common Lisp Object System（CLOS）を扱う。
- [The ANSI Common Lisp Standard Draft](http://cberr.us/tech_writings/notes/common_lisp_standard_draft.html) - ANSI INCITS 226-1994（旧ANSI X3.226-1994）規格の最終草案。
  - 草案は無料だが、規格書は有料。
  - 公式規格とほぼ同じで、CLHSよりこちらを好む人もいる。
- [The Common Lisp Cookbook](http://lispcookbook.github.io/cl-cookbook/) - 便利なLispレシピ集。CL情報を扱うほかのオンライン情報源一覧も収録。
- [Common Lisp the Language (2nd Edition) by Guy L. Steele](https://www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.html) - ANSI標準化直前のCommon Lisp言語を説明する。リファレンスとしては使用しないこと。
  - [Cliki on CLtL2](https://cliki.net/Getting+Started) - [LOOP](http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node235.html#SECTION003000000000000000000)と[FORMAT](http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html)について、CLHSより有用な説明があるとしている。
  - [Stack Overflow on CLtL2](https://stackoverflow.com/questions/108537/what-are-the-main-differences-between-cltl2-and-ansi-cl) - 洞察や着想にはCLtL2、プログラミング時にはCLHSを使うことを勧める人もいる。
  - [CLtL2とANSI Common Lisp仕様の相違点一覧](http://linuxfinances.info/info/commonlisp.html#AEN9679)
  - [第28章](https://www.cs.cmu.edu/Groups/AI/html/cltl/clm/node260.html#SECTION003200000000000000000) - Common Lisp Object Systemを扱う。

## オンライン書籍 <a id="online-books"></a>
無料でオンライン閲覧できる書籍を、概ね基礎から上級の順に掲載します。
- [Common Lisp: A Gentle Introduction to Symbolic Computation by David S. Touretzky](http://www.cs.cmu.edu/~dst/LispBook/) - プログラミング初心者向けの優れた入門書。[DTRACE](http://www.cs.cmu.edu/~dst/Lisp/dtrace/)や[SDRAW](http://www.cs.cmu.edu/~dst/Lisp/sdraw/)など、非常に便利なユーティリティのコードを収録。
- [Common Lisp: An interactive approach by Stuart C. Shapiro](https://www.cse.buffalo.edu/~shapiro/Commonlisp/) - 主に演習を通じて学ぶ教科書。
- [Practical Common Lisp by Peter Seibel](http://www.gigamonkeys.com/book/) - 経験豊富なプログラマー向けの優れた入門書で、CLがほかの言語と異なる点を最初から強調している。
- [Common Lisp Koans](https://github.com/google/lisp-koans) - 厳密には書籍ではないが、言語学習を助ける公案集。
- [On Lisp by Paul Graham](http://www.paulgraham.com/onlisp.html) - 中級程度の経験を持つLispプログラマー向けの優れた書籍。
- [Let Over Lambda by Doug Hoyte](https://letoverlambda.com) - Lispマクロに関する上級書。
  - 最初の6章をオンラインで閲覧できる。
  - [Comments on Let Over Lambda](https://www.reddit.com/r/lisp/comments/3actsc/let_over_lambda/) - 本書を読む前にOn Lispへ慣れておくべきで、序盤の進行が遅いと複数の人が助言している。
  - [クロージャーの章](https://letoverlambda.com/index.cl/guest/chap2.html) - 複数の自明でない例を通じ、この機能の力を示す。
- [Paradigms of Artificial Intelligence Programming by Peter Norvig](https://github.com/norvig/paip-lisp) - Lispの興味深い応用を多数収録するが、現在ではAIの良いリファレンスではない。

## オフライン書籍 <a id="offline-books"></a>
購入するか図書館から借りる必要がある書籍です。
- [Land of Lisp by Conrad Barski, MD](http://landoflisp.com) - 漫画を使い、ゲームを書きながら学ぶ楽しいLisp入門書。
  - [電子書籍](https://www.nostarch.com/lisp.htm).
  - LOOPマクロの一部は`for x for y...`と書かれているが、`for x from 0 for y...`へ変えるとSBCLで動作する。
  - [正誤表](http://landoflisp.com/errata.html).
  - 大部分は楽しく比較的簡単だが、第18章あたりから難しくなる。後半の章で新しく導入される内容はあまり多く感じられないため、その時点で別の書籍へ移ることを勧める。
  - 第13、19、20章のWebサーバー例はCLISPでのみ動作し、HTMLを正しく描画するにはHTTPレスポンスヘッダーを追加する必要がある。
- [ANSI Common Lisp by Paul Graham](http://www.paulgraham.com/acl.html) - リファレンスとして有用で、CLOSを扱い、複数のサンプルプログラム実装を収録。
  - [第1章](http://lib.store.yahoo.net/lib/paulgraham/acl1.txt)と[第2章](http://lib.store.yahoo.net/lib/paulgraham/acl2.txt)のプレーンテキスト版をオンラインで閲覧できる。
- [Common Lisp Recipes by Edmund Weitz](http://weitz.de/cl-recipes/) - Common Lispパターンの優れたコレクション。
- [Object-Oriented Programming in Common Lisp by Sonya E. Keene](https://www.amazon.com/Object-Oriented-Programming-COMMON-LISP-Programmers/dp/0201175894) - CLOSを詳しく説明し、サンプルアプリケーションで使い方を示す。
- [The Art of the Metaobject Protocol by Gregor Kiczales, Jim des Rivieres, and Daniel G. Bobrow](https://www.amazon.com/Art-Metaobject-Protocol-Gregor-Kiczales/dp/0262610744/) - CLOS Metaobject Protocol（MOP）を解説。
  - [第5章と第6章（オンラインで閲覧可能）](http://metamodular.com/CLOS-MOP/) - Robert Strandhによる、CLOS向けメタオブジェクトプロトコル拡張仕様。
    - [現代的なパブリックドメインCLOS MOP仕様](https://clos-mop.hexstreamsoft.com/)が後継となっている。Jean-Philippe Paradis（[Hexstream](https://github.com/Hexstream)）によるもの。
  - [Adam Tornhill on AMOP](http://www.adamtornhill.com/reviews/amop.htm) - Practical Common Lisp、Object-Oriented Programming in Common Lisp、AMOPの順に読むことを推奨。

## オンラインコミュニティ <a id="online-community"></a>
- [Cliki](http://cliki.net) - Common Lisp Wiki。CL全般に関する優れたリソース。[Getting Started](http://cliki.net/Getting+Started)ページと幅広い[Lisp書籍](http://cliki.net/Lisp%20books)一覧を備える。
- #clschool、#lisp、#ccl、#sbcl、[その他のルーム](https://www.cliki.net/IRC)は、[Libera.Chat](https://libera.chat/)ネットワーク上でCommon Lispを学ぶのに適した場所。（[Freenodeは避けるべき。](https://gist.github.com/joepie91/df80d8d36cd9d1bde46ba018af497409)）
- [Lisp Subreddit](http://www.reddit.com/r/lisp/) - 活発なコミュニティで、サイドバーに多数の有用なリンクとリファレンス文書がある。
  - [Common Lisp Subreddit](https://www.reddit.com/r/Common_Lisp) - Common Lisp向けSubreddit。
- [Exercism's Common Lisp track](https://exercism.org/tracks/common-lisp) - 実践を通じて言語を学び、コードレビューを受け、他の人と解決策を議論する優れた方法。
- [Lisp Discord server](https://discord.gg/7tSq5EaA6Z) - Lisp向けDiscord。Common Lisp専用チャンネルがあり、質問にも快く答えてくれる。


## ライブラリ管理 <a id="library-management"></a>
これら自体はライブラリではありませんが、ほかのライブラリを探してインストールするのに役立ちます。
- [Quicklisp](https://www.quicklisp.org/beta) - Lispライブラリ向けパッケージ管理プラットフォーム。
- [Quickdocs](http://quickdocs.org) - Quicklisp内プロジェクトのドキュメント。
- [State of the Common Lisp Ecosystem, 2015](http://borretti.me/article/common-lisp-sotu-2015) - 使うべきライブラリと、その理由を説明する記事。
- [Articulate Common Lisp](http://articulate-lisp.com/project/abcs.html) - 有用なライブラリをいくつか掲載。


## Common Lisp実装 <a id="common-lisp-implementations"></a>
一般的なCL実装とそのマニュアルをアルファベット順に掲載します。特記がない限り、これらは自由ソフトウェア実装です。Clikiの[自由ソフトウェアCommon Lisp実装](https://www.cliki.net/Common%20Lisp%20implementation)一覧も参照してください。
- [Allegro Common Lisp (ACL)](https://franz.com/products/allegrocl/) - 商用だが、無料の[Express Edition](https://franz.com/downloads/clp/survey)がある。
  - [ACLマニュアル](https://franz.com/support/documentation/)
  - [YouTubeのトレーニング動画](https://www.youtube.com/channel/UCN36UrxtyNBJPaG0kmBJNRw)
- [CLISP](https://clisp.sourceforge.io)
  - [CLISPマニュアル](https://clisp.sourceforge.io/impnotes.html)
- [Clozure Common Lisp (CCL)](https://ccl.clozure.com)
  - [CCLマニュアル](https://ccl.clozure.com/manual/)
- [Carnegie Mellon University Common Lisp (CMUCL)](https://www.cons.org/cmucl/)
  - [CMUCLマニュアルとその他の有用な情報](https://www.cons.org/cmucl/doc/index.html)
- [Embeddable Common Lisp (ECL)](https://common-lisp.net/project/ecl/)
  - [ECLマニュアル](https://common-lisp.net/project/ecl/static/manual/)
- [LispWorks](http://www.lispworks.com/products/index.html) - 商用だが、前述のとおり軽微な制限付きの[Personal Edition](http://www.lispworks.com/downloads/index.html)がある。
  - [LispWorksマニュアル](http://www.lispworks.com/documentation/index.html)
- [Steel Bank Common Lisp (SBCL)](http://www.sbcl.org) - 作者個人のお気に入り。
  - [SBCLマニュアル](http://www.sbcl.org/manual/index.html)
- [Scieneer Common Lisp (SCL)](http://web.archive.org/web/20171014210404/http://www.scieneer.com/scl/) - 商用のLinux／Unix実装だが、無制限の無料評価版および非商用利用版がある。
  - [SCLマニュアル](http://web.archive.org/web/20171014210404/http://www.scieneer.com/scl/doc/)

## 謝辞 <a id="credit"></a>
情報の多くは、[Rainer JoswigによるCommon Lisp学習についてのStack Overflow回答](https://stackoverflow.com/a/7224914/1005039)と、現在は閉鎖されたStack Overflow Documentsサイトから得ました。[ClikiのGetting Started](https://cliki.net/Getting%20Started)ページも非常に役立ちました。
