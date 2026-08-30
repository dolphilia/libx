---
title: "hkirat/awesome-chess"
description: "hkirat/awesome-chess の正規スナップショット"
licenseSource: "github-hkirat-awesome-chess-readme-md"
---

# Awesome Chess [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

インターネット上で利用できるチェス関連の資料を厳選したリストです。

*[awesome](https://github.com/sindresorhus/awesome) リストに着想を得ています。完全版の [awesome](https://github.com/sindresorhus/awesome) リストもご覧ください。*

### 貢献
最初に[貢献ガイドライン](https://github.com/hkirat/awesome-chess/blob/master/CONTRIBUTING.md#contribution-guidelines)を確認してください。

目次
---
 - [書籍](#books)
 - [FEN パーサー](#fen-parsers)
 - [手の検証器](#move-validators)
 - [ボット](#bots)
 - [ウェブサイト](#websites)
 - [盤面](#boards)
 - [棋譜表記](#board-notations)
 - [駒](#pieces)
 - [講演](#talks)

書籍
---
*チェスについて読む書籍。*

 - [Chess Problems](https://kairavacademydotcom.files.wordpress.com/2013/06/john-thursby-75-chess-problems.pdf) - チェス問題集。
 - [Chess strategy](http://www.gutenberg.org/cache/epub/5614/pg5614-images.html) - Edward Lasker によるチェス戦略書の HTML 版。
 - [Sicilian Dragon](http://www.chesscity.com/PDF/Sicilian_Dragon_Black_Attacks_ssd.pdf) - 黒番向けの攻撃計画。

FEN パーサー
---
*Forsyth–Edwards Notation（FEN）は、チェスの特定の盤面配置を記述する標準表記です。*

 - [tlehman の fenparser](https://github.com/tlehman/fenparser) - Python で書かれた Forsyth-Edwards Notation パーサー。
 - [ucarion の fen](https://github.com/ucarion/fen) - 適切なエラー処理を備えた Rust 製 Forsyth-Edwards Notation パーサー。
 - [andyherbert の fen-diagram](https://github.com/andyherbert/fen-diagram) - Forsyth-Edwards Notation を使ってチェス盤図を生成する JavaScript。

ボット
---
*ボットは、ユーザーと対戦する人工知能を用いたアルゴリズムです。*

 - [latrunculorum](https://github.com/benwr/latrunculorum) - Python 製のシンプルなチェスボット。
 - [Chessbot](https://github.com/jfabeel/Chessbot) - Java で書かれたボット。

手の検証器
---
*検証器は、指し手が正当かを確認するためのツールです。*

 - [chess.js](https://github.com/jhlywa/chess.js) - チェス検証向けに構造化されたコード。
 - [npm chess package](https://www.npmjs.com/package/chess) - 代数式表記を基に、盤面配置を検証して可能な指し手一覧を生成するチェスエンジン。
 - [Chessnut](https://github.com/cgearhart/Chessnut.git) - Python で書かれたシンプルなチェス盤モデル。FEN の解析と、各 FEN 表現に対する合法手一覧の生成機能を提供します。

ウェブサイト
---
*人々がチェスをプレイできるプラットフォームを含みます。*

 - [multiplayerchess.com](http://multiplayerchess.com) - チェス対局を実現するシンプルな単一ページアプリケーション。
 - [lichess.org](http://en.lichess.org/) - インターネット上で最も成熟したチェス対局プラットフォームの一つ。オープンソースで、毎日の問題と他の対局を観戦できるテレビ機能を備えています。
 - [chess24.com](https://chess24.com/en/play/chess) - 優れたチュートリアルでチェスを学び、対局できます。
 - [chessbase.com](http://play.chessbase.com/js/apps/playchess/) - 高機能なチェス対局用単一ページアプリケーション。
 - [chess.com](http://www.chess.com/) - 500万人以上のユーザーとチェスを学び、対局できます。
 - [chesscademy.com](https://www.chesscademy.com/) - 動画視聴、問題演習、対局をすべて無料で提供（Khan Academy に似た仕組み）。
 - [chesstempo.com](http://chesstempo.com) - オンラインのチェス戦術訓練サイト。
 - [chessprogramming.wikispaces.com](https://chessprogramming.wikispaces.com/) - コンピューターにチェスを指させるプログラミング情報のリポジトリ。
 - [freechess.org](http://freechess.org/) - Free Internet Chess Server（FICS）は、最古級のインターネットチェスサーバーです。ほぼすべてのデバイス、OS、ウェブブラウザー向けに多数のクライアントアプリがあります。

盤面
---
*盤面の描画処理をカプセル化するツールです。*

 - [Chessboard.js](https://github.com/oakmac/chessboardjs/) - 独立した JavaScript チェス盤。
 - [chess-board](https://github.com/laat/chess-board) - チェスの配置を表示する Web Component。FEN 文字列を入力として盤面を描画します。
 - [jchess](https://github.com/bmarini/jchess) - チェス対局を解析・表示する jQuery ベースの JavaScript ライブラリ。現在は FEN と PGN を入力に取ります。
 - [Chessboard-js](https://github.com/caustique/chessboard-js) - レスポンシブでモバイルファーストな JavaScript チェス盤ライブラリ。

棋譜表記
---
*盤面の性質をテキスト形式で表す方法です。[チェス表記のチュートリアル](http://chess.eusa.ed.ac.uk/Chess/Rules/notation.html)。*

 - [FEN](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation) - FEN の「レコード」は、ASCII 文字だけを使った1行のテキストで特定の局面を定義します。
 - [PNG](http://www6.chessclub.com/help/PGN-spec) - PGN は「人間が容易に読み書きでき、コンピュータープログラムが容易に解析・生成できる」よう構成されています。
 - その他の表記
 	- [代数式チェス表記](https://en.wikipedia.org/wiki/Algebraic_notation_(chess))
 	- [ICCF 数字式表記](https://en.wikipedia.org/wiki/ICCF_numeric_notation) - 国際通信チェス連盟の全対局で使われる公式表記。
 	- [Smith チェス表記](http://www6.chessclub.com/chessviewer/smith.html)
 	- [記述式表記](https://en.wikipedia.org/wiki/Descriptive_notation)

駒
---
*さまざまなチェス駒の画像を入手するためのツールを含みます。*

 - [3D のらせん型駒](https://www.thingiverse.com/thing:470700)
 - [Wikipedia の駒](https://commons.wikimedia.org/wiki/Category:PNG_chess_pieces/Standard_transparent)
 - [Unicode のチェス駒](https://en.wikipedia.org/wiki/Chess_symbols_in_Unicode)
 - [flaticons のアイコン](http://www.flaticon.com/search/chess)
 - [thenounproject のアイコン](https://thenounproject.com/search/?q=chess)

講演
---
*チェスに関する講演。*

 - [チェスの熟達を理解する](https://www.youtube.com/watch?v=fPopQaY7Og4) - Jennifer Shahade によるチェス熟達の理解に関する講演。
 - [チェスが学習を変革する方法](https://www.youtube.com/watch?v=A3yDvM8aplY) - Cody Pomeranz による、チェスが学習を変革する方法についての講演。
 - [逆向きに考えて問題を解く](https://www.youtube.com/watch?v=v34NqCbAA1c) - Maurice Ashley による逆向き問題解決についての講演
 - [Chess Life](https://www.youtube.com/watch?v=lgCSo1Txw3c)
 - [チェスが退屈な理由](https://www.youtube.com/watch?v=7EuxVOgrEig) - Bobby Fischer によるチェスが退屈な理由についての講演
 - [Chess Peeps](https://www.youtube.com/watch?v=p027ysBt0_M)
