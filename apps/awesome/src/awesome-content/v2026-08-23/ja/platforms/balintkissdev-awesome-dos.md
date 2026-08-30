---
title: "balintkissdev/awesome-dos"
description: "balintkissdev/awesome-dos の定本スナップショット"
licenseSource: "github-balintkissdev-awesome-dos-readme-md"
---

# Awesome DOS [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

1980年代から1990年代初頭に普及した、IBM PC DOS や MS-DOS を含む x86 ベースのパーソナルコンピューター向けオペレーティングシステム群です。

[<img src="logo.svg" align="right" width="100">](https://github.com/balintkissdev/awesome-dos)

DOS アプリケーションの開発とシステム自体の学習に役立つ資料を厳選したリストです。コンパイラー、チュートリアル、動画、無料・有料書籍へのリンク、DOS オペレーティングシステムと DOS ゲームのソースコードを収録しています。このリストは情報を集約し、DOS プラットフォームでレトロプログラミングを始めたい人の出発点となることを目的としています。

## 目次

- [開発ツール](#development-tools)
- [チュートリアルとプログラミング資料](#tutorials-and-programming-resources)
- [書籍](#books)
- [動画](#videos)
- [ソースコード](#source-code)
  - [オープンソースの DOS オペレーティングシステム](#open-source-dos-operating-systems)
  - [オープンソースの DOS ライブラリ](#open-source-dos-libraries)
  - [オープンソースの DOS ゲーム](#open-source-dos-games)
- [ドライバーとエミュレーター](#drivers-and-emulators)

## 開発ツール

- [bcc - Bruce's C Compiler](https://gitlab.com/FreeDOS/devel/bcc) - tiny/small メモリーモデル用の 8086 アセンブラーを生成する、シンプルな C コンパイラー。
- [DJGPP](http://www.delorie.com/djgpp/) - Intel 80386 向けの DJ Delorie による完全な32ビット C/C++ 開発環境。Quake で使用されました。
- [GCC IA-16 toolchain](https://gitlab.com/tkchia/build-ia16/-/releases) - DJGPP の16ビット版に相当する GCC ベースのツールチェーン。16ビット（8086〜80286、別名 IA-16）DOS アプリケーションを開発でき、現在は TK Chia が保守しています。
- [Insight](https://www.bttr-software.de/products/insight/) - Borland Turbo 風 UI を備えた、リアルモード DOS プログラム向けの非常に小さなデバッガー。i80486 ディスアセンブラーと i8086 アセンブラーを搭載。
- [Open Watcom](https://web.archive.org/web/20220627162043/http://www.openwatcom.org/) - 以前は商用だった16・32ビット DOS および
  Windows 向け C/C++ 開発環境。現在の公式版は1.9で、GitHub フォークもあります。Doom I-II、Warcraft I-II、Duke Nukem 3D、Full Throttle、Dark Forces、Retro City Rampage で使用されました。
  - [ドキュメント](https://web.archive.org/web/20220630162351/http://www.openwatcom.org/doc.php)は、バージョン1.9とV2フォークの両方を扱ううえで非常に有用です。
  - [Arch Wiki ページ](https://wiki.archlinux.org/index.php/Open_Watcom)
- [Open Watcom V2](https://github.com/open-watcom/open-watcom-v2) - 活発に保守され、64ビット Windows と Linux に移植された GitHub フォーク。
- [Turbo C 2.01](http://www.doshaven.eu/wp-content/uploads/2014/08/tc201.zip) - Borland が1987年に初公開した C IDE とコンパイラー。
- [Turbo C++ 1.01](http://www.doshaven.eu/wp-content/uploads/2014/08/tcpp101.zip) - Borland が1991年に公開した C++ IDE とコンパイラー。
- [Turbo C++ 3.0](https://archive.org/details/tcc_20210425) - Borland が1992年に公開した C++ IDE とコンパイラー。
  - [オンライン版。](https://turboc.pages.dev/)
- [DIV Games Studio 2](https://archive.org/details/div2_iso) - 2D、Mode 7、3D の DOS ゲームを開発する IDE。1998年公開。
  - [オンライン版。](http://js.mikedx.co.uk/DIV1.html)
- [T3X](https://t3x.org/t3x/#t3x7) - Nils M. Holm による、小型で移植可能な手続き型・ブロック構造・再帰対応・ほぼ型なしで、ある程度オブジェクト指向のプログラミング言語。
- [SmallerC](https://github.com/alexfru/SmallerC.git) - Alexei A. Frounze による、リアル／プロテクトモード DOS プログラムを含む複数プラットフォーム向け実行ファイルを生成できる、移植可能なセルフホスト C コンパイラー。
- [Small-C Toolkit](https://github.com/humbertocsjr/Small-C.git) - K&R C コンパイラー、Make、リンカー、アセンブラーを備えた DOS（8086）向けセルフホスト Small-C Compiler Toolkit。Jim E. Hendrix が1982年に初公開。

### メモリーマネージャー

- [386MAX](https://github.com/sudleyplace/386MAX) - 386以上の CPU を搭載した DOS PC 向けメモリーマネージャー。[Qualitas が1992年に公開](https://winworldpc.com/product/386max/6x)し、2022年6月に GPL-3.0 でソースコードが GitHub 公開されました。

### DOS 向けスクリプト言語とインタープリター

- [DOjS](https://github.com/SuperIlu/DOjS) - MS-DOS、FreeDOS、または DOS ベースの Windows（95、98、ME）向け JavaScript プログラミング環境。
- [Lua for DOS](https://archive.org/details/lua5.3.5) - Intel 80486 上の MS-DOS 用にコンパイルされた Lua 5.3.5 のオンラインデモ。
- [Micropython for FreeDOS](https://github.com/pohmelie/micropython-freedos) - [micropython](https://github.com/micropython/micropython) 向け FreeDOS アドホックモジュール。
- [perldos](https://perldoc.perl.org/perldos) - DOS 向け Perl。
- [PythonD](http://www.caddit.net/pythond/) - マルチスレッド、ネットワーク、OpenGL を含む DOS 向け Python。

## チュートリアルとプログラミング資料

### 歴史

- [Brendan Byers による The Life of MS-DOS](https://b13rg.github.io/Life-of-MS-DOS/) - CP/M、Q-DOS/86-DOS、MS-DOS、PC-DOS を含む DOS 系譜の歴史。DOS オペレーティングシステムのタイムラインと系統図も掲載。

### コンパイル

- [Alexei A. Frounze による 80x86 16-bit Compiling How-to](http://alexfru.narod.ru/os/c16/c16.html) - Borland/Turbo C/C++ と Open Watcom の16ビットコンパイルチュートリアル。メモリーアドレス指定とメモリーモデルを詳しく解説。
- [Open Watcom による32ビット DOS 開発](http://tuttlem.github.io/2015/10/04/32bit-dos-development-with-open-watcom.html) - Open Watcom の32ビットコンパイルチュートリアル。
- [Chris Wellons による GCC で DOS COM ファイルをビルドする方法](https://nullprogram.com/blog/2014/12/09/) - DJGPP を使った DOS Defender のビルド工程。32ビット80386 COM 実行ファイルの作成が目的です。

### 全般

- [David Brackeen - C による256色 VGA プログラミング](https://web.archive.org/web/20240812211701/http://www.brackeen.com/vga/) - 1996年に書かれた、DOS 上でのグラフィックス作成を学ぶチュートリアルシリーズ。
- [Robert W. Oliver II による 640k Really is Enough for Anyone](https://blog.sourcerer.io/640k-really-is-enough-for-anyone-314f393ca5b8) - FreeDOS で Turbo C を動かし、ピクセルを移動させる短い記事。

- [Just keeping it real... old skool style - Scali's OpenBlog](https://scalibq.wordpress.com/2011/11/23/just-keeping-it-real-old-skool-style/) - Scali が CGA、EGA、VGA プログラミングへ取り組んだ過程を記したブログ記事。

- [Alex Russell's Dos Game Programming in C for Beginners](https://web.archive.org/web/20201112023702/http://www3.telus.net/alexander_russell/course/introduction.htm) - C の基礎、グラフィックス、アニメーション、入力処理、衝突判定を含む DOS ゲームプログラミングシリーズ。[バッファー入力処理](https://web.archive.org/web/20200203195410/http://www3.telus.net/alexander_russell/course/chapter_4.htm)のチュートリアルもあり、最終章には DOS 版 Break Out の完全なソースコードがあります。
- [The Artevida Game Programming Tutorials](http://web.archive.org/web/20201031021650/http://atrevida.comprenica.com/) - Kevin Matz による、C/C++ と 80x86 アセンブリーを使った DOS システムプログラミングと VGA の基礎を扱う書籍級の解説。未完のまま2001年以降放棄されています。
- [PC Game Programmer's Encyclopedia](https://web.archive.org/web/20201111164240/http://bespin.org/~qz/pc-gpe/) - アセンブリー、サウンド（Sound Blaster、Gravis UltraSound、PC Speaker、GameBlaster、Adlib）、入力、メモリー（EMS、XMS、DMA 転送）、PIT、VGA、SVGA、アルゴリズム、ファイル形式を扱うガイド集。
- [flipcode による The Art of Demomaking](http://web.archive.org/web/20190123060222/http://www.flipcode.com/archives/The_Art_of_Demomaking-Issue_02_Introduction_To_Computer_Graphics.shtml) - DOS のグラフィックスプログラミングを紹介する1999年のシリーズ。元サイトには1990年代後半〜2000年代初頭のゲームプログラミング記事もあります。
- [Programming MS-DOS with Power - DOS Programming, Undocumented DOS, and DOS Secrets](http://web.archive.org/web/20200626182822/http://www.fysnet.net/) - ディスク処理、割り込み、入力、サウンド、グラフィックスなどのシステムプログラミングチュートリアル。
- [Programmer's Heaven (InfoMagic)(March 1997) CD-ROM](http://discmaster.textfiles.com/view/4555/Programmer%27s%20Heaven%20%28InfoMagic%29%28March%201997%29.BIN%2Fmain.htm) - MS-DOS、ネットワーク、C、C++、Pascal、Visual Basic、Delphi、3D、PC Speaker、Soundblaster、Gravis Ultrasound、MIDI などのソースコードとファイル。

### DOS API

- [Digital Mars による bios.h ヘッダードキュメント](https://digitalmars.com/rtl/bios.html) - BIOS 操作へ直接アクセスするルーチン（ディスク、キーボード、プリンター、時刻、メモリー、シリアル、割り込み）の API ドキュメント。
- Digital Mars による dos.h ヘッダードキュメント [パート1](https://digitalmars.com/rtl/dos.html) [パート2](https://digitalmars.com/rtl/dos2.html) - DOS オペレーティングシステム自体と連携する関数の API ドキュメント。

### 割り込み

- [Ralph Brown's Interrupt List - HTML 版](https://web.archive.org/web/20201111162212/http://www.ctyme.com/rbrown.htm) - 既知の文書化済み・未文書化割り込み呼び出しを網羅し、検索、カテゴリー、割り込み番号から参照できます。
  - [Ralph Brown の Web サイト](https://web.archive.org/web/20201108093425/http://www.cs.cmu.edu/~ralf/files.html)

### メモリー

- [16ビット MS-DOS のメモリーモデルを振り返る](https://devblogs.microsoft.com/oldnewthing/20200728-00/?p=104012) - near／far ポインターを含むセグメントメモリーについての Raymond Chen による解説。

### 映像

- [標準ビデオモードの値](https://web.archive.org/web/20200214123701/http://www.columbia.edu/~em36/wpdos/videomodes.txt) - BIOS 割り込み番号、テキスト／ピクセル解像度、色数、ビデオメモリーアドレスを含む既知のビデオモード一覧。

#### CGA

- [Color Graphics Adapter: Notes](https://web.archive.org/web/20201112020351/https://www.seasip.info/VintagePC/cga.html) - IBM オリジナル CGA のハードウェア、メモリーマップ、レジスター I/O、互換ハードウェアを説明する文書。

#### VGA

- [VGA Hardware - OSDev wiki](https://wiki.osdev.org/VGA_Hardware) - NVidia や ATI を含む現代のグラフィックスカードにも関係する VGA カードのハードウェアガイド。
- [アセンブリーによるグラフィカルプログラミング（DOS）](http://web.archive.org/web/20201112040702/http://www.wagemakers.be/english/doc/vga) - 冒頭にテキスト、CGA、EGA、VGA、SVGA のビデオモード一覧も示す VGA プログラミングチュートリアル。
- [VGA programming lessons](http://joco.homeserver.hu/vgalessons/) - Pascal とアセンブリーによる VGA プログラミングチュートリアルシリーズ。

#### SVGA

- [Myles による DOS Super VGA / VESA programming notes](https://web.archive.org/web/20200724153658/http://www.faqs.org/faqs/pc-hardware-faq/supervga-programming/) - 冒頭に歴史、VESA VBE 規格の短い説明がある記事。残念ながらサンプルコードは Wayback Machine にもありません。
- [VESA Video Modes - OSDev wiki](https://wiki.osdev.org/Getting_VBE_Mode_Info) - VESA モードを照会するチュートリアル。
- [DJGPP VESA guide](http://www.delorie.com/djgpp/doc/ug/graphics/vesa.html.en) - VESA モードを照会するチュートリアル。
- [High-res high-speed VESA tutorial](https://web.archive.org/web/20200128180543/http://www.monstersoft.com/tutorial1/) - VESA モード（プロテクトまたはリアル）でのピクセル描画を含むチュートリアルシリーズ。
- [VESA 2.0 モードで描画する C コード例](https://web.archive.org/web/20200121065447/http://www.codenet.ru/progr/video/vesa20ex.php) - VESA モードで楕円を描くコードリスト。

### サウンド

- [Programming Sound Cards CD](http://discmaster.textfiles.com/browse/63/Programming%20Sound%20Cards.iso) - Adlib、Gravis、Pro-Audio、Roland、Sound Blaster 向けソースコードを収録した1995年の CD-ROM。各フォルダーの説明は[CD-ROM ケースの裏面](https://archive.org/details/programming-sound-cards/Programming%20Sound%20Cards_back.jpg)に掲載。

#### PC Speaker

- [Mark Feldman による Making some noise with the PC speaker!](https://web.archive.org/web/20150302161648/http://heim.ifi.uio.no/~inf3150/grupper/1/pcspeaker.html) - PIT を使って PC Speaker の周波数を生成する非常に短いチュートリアル。
- [Frequencies of Musical Notes](https://web.archive.org/web/20201129091353/https://pages.mtu.edu/~suits/notefreqs.html) - PC Speaker のパラメーター設定に使える周波数表。
- [Sound Programming with PC Speaker - A to Z of C 第23章](https://web.archive.org/web/20171115162742/http://guideme.itgo.com/atozofc/ch23.pdf) - ソースコードを含む「A to Z of C」の PC Speaker プログラミング章。

#### AdLib/OPL2

- [Yamaha YM3812 (OPL2) サウンドチップの Wikipedia 記事](https://en.wikipedia.org/wiki/Yamaha_YM3812) - 8-bit Guy の YouTube 動画と並ぶ、OPL2 サウンドチップを学ぶ最初の資料。
- [Tero Töttö による The Ad Lib Music Synthesizer Card Programming Guide](https://web.archive.org/web/20200427145810/http://www.vgmpf.com/Wiki/images/4/48/AdLib_-_Programming_Guide.pdf) - OPL2 の操作とレジスターのリファレンス。

#### Sound Blaster/OPL3

- [Programmer's Guide to the Yamaha YMF 262/OPL3 FM Music Synthesizer](https://web.archive.org/web/20200509082459/http://www.fit.vutbr.cz/~arnost/opl/opl3.html) - リバースエンジニアリングによる OPL3 リファレンス。
- [Ethan Brodsky による Sound Blaster 16 Programming Document 3.5](https://web.archive.org/web/20201130110457/http://homepages.cae.wisc.edu/~brodskye/sb16doc/sb16doc.html) - デジタル音声の録音と再生に使う Sound Blaster 16 DSP CT1341 チップのプログラミング。
  - [GameDev.net アーカイブ](https://web.archive.org/web/20180507161514/http://archive.gamedev.net/archive/reference/articles/article444.html)
- [Soundblaster Programming Information v0.90](https://web.archive.org/web/20191020222313/http://www.intel-assembler.it/portale/5/soundblaster-programming-information/sb-reference-for-programming-sound.asp) - Sound Blaster のモデルとレジスター一覧。

### その他

- [プロセッサー種類別 DOSBox サイクル数一覧](https://web.archive.org/web/20201112012244/https://www.alternatewars.com/Games/DOSBox/DOSBox.htm) - CPU 種類（IBM XT 88、286、386、486、Pentium I、Pentium II）に応じた適切な DOSBox サイクル数の設定表。DOS ゲームの想定実行環境を再現するときに便利です。

## 書籍

### 無料

- [Game Engine Black Book: Wolfenstein 3D - Fabien Sanglard](https://web.archive.org/web/20221226120420/https://fabiensanglard.net/b/gebbwolf3d.pdf) - IBM PC ハードウェア上の id Software 製 Wolfenstein 3D のゲームエンジン構造を Fabien Sanglard が解説。John Carcmack、Tom Hall、John Romero の序文を収録。
- [Game Engine Black Book: Doom - Fabien Sanglard](https://web.archive.org/web/20221225164613/https://fabiensanglard.net/b/gebbdoom.pdf) - Intel 486 とゲーム機移植版における id Software オリジナル Doom のゲームエンジン構造を Fabien Sanglard が解説。John Carcmack、Dave Taylor、John Romero の序文を収録。
- [A to Z of C - K. Joseph Wesley と R. Rajesh Jeba Anbiah による C/DOS プログラミング書](https://web.archive.org/web/20201109033646/http://guideme.itgo.com/atozofc/) - DOS 上の C プログラミングに関する非営利書籍。DOS システムプログラミングは第II部から始まります。
- [Michael Abrash's Graphics Programming Black Book Special Edition](https://www.drdobbs.com/parallel/graphics-programming-black-book/184404919) - Michael Abrash による Dr. Dobb's Journal のグラフィックスプログラミング記事と、Quake のグラフィックスサブシステムに関する成果のコレクション（[ミラー](https://web.archive.org/web/20201112020812/http://www.phatcode.net/res/224/files/html/index.html)）。

### 有料

- [Tricks of the Game-Programming Gurus - Andre Lamothe、John Ratcliff、Denise Tyler](https://www.amazon.com/Tricks-Game-Programming-Gurus-Andre-Lamothe/dp/0672305070/) - DOS ゲーム開発を始めるための包括的な書籍。キーボード、マウス、ジョイスティック入力、2D・3D VGA、レイキャスター、サウンドと音楽、ゲームアルゴリズム、割り込みサービスルーチン（ISR）、タイマー、AI、シリアルポートとヌルモデムによるネットワーク対戦、ツール、視差スクロール、最適化を扱います。
  - ライセンス上、貸出形式で利用できるオンライン図書館の電子書籍：[Open Library](https://openlibrary.org/books/OL1124792M/Tricks_of_the_game-programming_gurus)、[Internet Archive](https://archive.org/details/tricksofgameprog0000unse/page/n5/mode/2up)
- [More Tricks of the Game Programming Gurus - Greg Anderson](https://www.amazon.com/More-Tricks-Game-Programming-Gurus-Cd-Rom/dp/0672306972) - _Tricks of the Game Programming Gurus_ の続編。SVGA、Binary Space Partition（BSP）、UI、ボクセルグラフィックス、リアル／プロテクトモードのメモリー管理、高度なサウンド、デバッグ、最適化を扱います。
  - ライセンス上、貸出形式で利用できるオンライン図書館の電子書籍：[Open Library](https://openlibrary.org/works/OL19501825W/More_tricks_of_the_game-programming_gurus)、[Internet Archive](https://archive.org/details/moretricksofgame0000unse/page/n7/mode/2up)

## 動画

- [Why DOS Was (and Is) a Thing - FreeDOS](https://www.youtube.com/watch?v=3E5Hog5OnIM) - Unix から始まり、CPM、DOS 1.x〜6.x、Windows 3.1、Windows 95 を経て FreeDOS に至る歴史講演。
- [CGA Graphics - Not as bad as you thought! - 8-bit Guy](https://www.youtube.com/watch?v=niKblgZupOc) - IBM CGA システムの歴史と技術詳細。4色 RGBI と16色 Composite モードも解説。
- [How Oldschool Sound/Music worked - 8-bit Guy](https://www.youtube.com/watch?v=q_3d1x2VPxk) - PC Speaker、NES と Commodore 64 の FM シンセサイザー、AdLib と Sound Blaster の Yamaha OPL、PCM サンプル、MOD 音楽を扱う動画。
- [Let's Code - MS DOS - root42](https://www.youtube.com/playlist?list=PLGJnX2KGgaw2L7Uv5NThlL48G9y4rJx1X) - VGA、SoundBlaster、VGA Mode X を含む DOS プログラミングシリーズ。
- [LGR - Evolution of PC Audio - As Told by Secret of Monkey Island](https://www.youtube.com/watch?v=a324ykKV-7Y) - Secret of Monkey Island の導入曲を PC Speaker、IBM PCjr/Tandy、AdLib、Game Blaster、Roland LAPC-1/MT-32、Gravis Ultrasound、Roland SCC-1 MIDI、SB16 Waveblaster/AWE32、CD品質デジタル音声で再生して比較。
- [Porting Retro City Rampage to MS-DOS: From PS4 to 1.44MB Floppy](https://www.youtube.com/watch?v=kSKeWH4TY9Y) - Retro City Rampage を PlayStation 4 から DOS へ移植した Brian Provinciano の GDC 講演。最適化、割り込み、タイミング、PC Speaker、ジョイスティック、メモリー管理、固定小数点演算を扱います。
- [DOS Executables Explained - Nostalgia Nerd](https://www.youtube.com/watch?v=6j947U4xl5I) - `.COM`、`.BAT`、`.EXE` を含む DOS 実行ファイル形式の動画。
- [Why does DOS use 8.3 Filenames? - Nostalgia Nerd](https://www.youtube.com/watch?v=eGIyCD2_qA8) - DOS の8.3ファイル名制限、FAT、NTFS、VFAT、FatGo、`LFN.EXE` を扱う動画。
- [What is DOS Protected Mode? / DOS Extenders- Nostalgia Nerd](https://www.youtube.com/watch?v=XAyQLV5bbb0) - PC のメモリー構成、コンベンショナル／拡張メモリー、DPMI と DOS/4GW などのエクステンダーが必要な理由を説明。
- [MS-DOS has been Open-Sourced! We Build and Run it! - Dave's Garage](https://www.youtube.com/watch?v=BR6F0EdyulA) - 元 Microsoft 社員 David Plummer が MS-DOS 開発を語り、Microsoft が公開した MS-DOS 4.00 のソースをコンパイルします。

## ソースコード

### オープンソースの DOS オペレーティングシステム

- [MS-DOS](https://github.com/microsoft/MS-DOS) - Microsoft がオープンソース化した MS-DOS v1.25、v2.0、v4.0 のオリジナルソースコードリポジトリ。
- [FreeDOS](https://www.freedos.org/) - 古典的 DOS ゲーム、旧式業務ソフト、組み込みシステム開発に使えるオープンソースの DOS 互換 OS。MS-DOS で動くプログラムは FreeDOS でも動作するはずです。

### オープンソースの DOS ライブラリ

- [Allegro 4.2](https://github.com/liballeg/allegro5/tree/v4-2-3-1) - DOS、Windows、Linux 向けゲーム開発ライブラリ。4.2版は DOS に対応。
  - [Allegro 4.2.1 PDF ドキュメント。](https://download.tuxfamily.org/allegro/allegro-manual/4.2.1/allegro-manual-4.2.1.en.pdf)
- [LoveDOS](https://github.com/rxi/lovedos) - Lua で2D DOS ゲームを作るフレームワーク。LÖVE API のサブセットを基盤とします。
- [DOS-VGA-Game](https://github.com/marcomarrero/DOS-VGA-Game) - Marco A. Marrero がアセンブリーと Turbo Pascal で実装した DOS VGA／ハードウェアライブラリ。
- [DIGPAK sound drivers source code](https://github.com/jratcliff63367/digpak) - John W. Ratcliff が GitHub に公開した DIGPAK サウンドドライバーのオリジナルソース。

### オープンソースの DOS ゲーム

#### ソースコード付き Homebrew ゲーム

Homebrew DOS ゲームの全リスト：http://www.doshaven.eu

- [DOS Defender](https://github.com/skeeto/dosdefender-ld31) - Christopher Wellons が Ludum Dare #31 向けに作成した x86 リアルモード DOS の Asteroids クローン。
- [Dungeons of Noudar](https://github.com/TheFakeMontyOnTheRun/dungeons-of-noudar) - プロテクトモードの一人称2.5Dダンジョンクローラー。C++製で、ソフトウェアレンダリング、固定小数点演算、テスト、サウンド（PC Speaker、Adlib、OPL2LPT）を搭載。
- [Emeritus Pong](https://sourceforge.net/projects/empong/) - DOS、Windows、Linux 向け Pong クローン。DOS では PC Speaker を使用。
- [Floppy Bird](https://github.com/icebreaker/floppybird) - 16ビットアセンブリー製 Flappy Bird クローン。DOS プログラムではなく PC-Booter アプリですが、DOS 用 COM 実行ファイルもビルドできます。
- [George M. Tzoumas の MS-DOS ゲーム・ユーティリティ集](http://web.archive.org/web/20191225101138/http://cgi.di.uoa.gr/~geotz/dos/) - 主に Turbo Pascal、一部 C/C++ 製。Nibbles、Connect Four、Ms Pacman クローン、アーケード／プラットフォームゲーム2作を収録し、ra2 は Allegro 製。ユーティリティは Turbo Pascal 製で、ゲームシステムルーチン、ファイル／ディスク、TSR を含みます。
- [Gold Mine Run!](https://www.usebox.net/jjm/gold-mine-run/) - DJGPP を使って C で書かれたプラットフォーマー。
- [Gridfighter 3D](https://porta2note.itch.io/gridfighter-3d) - QuickBasic 製の1980年代風アーケードシューティング。Oculus Rift VR に対応した最初の既知の DOS ゲームでもあります。
  - [GitHub リポジトリ](https://github.com/porta2note/gridfighter3d)
- [Hangman](https://sourceforge.net/projects/hangman-dos/) - BASIC 製ハングマンクローン。80286以上で動作し EGA を使用。
- [Magenta's Maze](https://archive.org/details/MAGSMAZE) - 代数学を題材にした CGA グラフィックスの3D迷路ゲーム。
  - [ソースコードのダウンロード](http://www.doshaven.eu/downloads/537)
- [Mario](http://www.wieringsoftware.nl/mario/index.html) - Turbo Pascal 製 Super Mario Bros クローン。
- [NetHack](https://github.com/NetHack/NetHack) - 1987年に初公開され、複数プラットフォームで利用できるオリジナルの [NetHack](https://en.wikipedia.org/wiki/NetHack) ローグライクの後継。
- [Piskworks](https://github.com/berk76/piskworks) - C 製五目並べクローン。DOS、ZX Spectrum、ZX81、ZX80、APPLE1、AS400、Windows で動作。
- [Plutonium Caverns](https://github.com/jani-nykanen/plutonium-caverns) - C 製の見下ろし型パズルゲーム。Web 版は [Emscripten 移植の DOSBox](https://github.com/dreamlayers/em-dosbox) を使って HTML5 に埋め込み。オリジナル実行ファイルもダウンロードでき、Open Watcom でビルドできます。
- [Ptakovina](https://github.com/berk76/tetris) - C 製 Tetris クローン。DOS、Unix/Linux、ZX Spectrum、Windows で動作。
- [sudoku86](https://sourceforge.net/projects/sudoku86/) - C 製 Sudoku クローン。8086/8088 CPU、CGA／MCGA／VGA、マウスに対応。
- [Tetris](http://www.doshaven.eu/game/tetris/) - アセンブリー製 Tetris クローン。
  - [ソースコードのダウンロード](http://www.doshaven.eu/downloads/373)
- [Towers of Hanoi](https://github.com/sblendorio/hanoi-dos) - Turbo Pascal で書かれ、1996年に初公開された[ハノイの塔](https://en.wikipedia.org/wiki/Tower_of_Hanoi)パズルゲーム。
- [x86 pong](https://github.com/spacerace/x86-pong) - C 製テキストモード Pong クローン。PC-Booter と DOS の両方で動作。
- [zmiy](https://sourceforge.net/projects/zmiy/) - C 製テキストモード Snake クローン。8086 DOS で動作。

#### ソースコード付き Freeware ゲーム

- [Cyberdogs](https://web.archive.org/web/20190222022411/https://www.classicdosgames.com/game/Cyberdogs.html) - 傭兵として資金を稼ぐ見下ろし型2Dシューティング。Turbo Pascal 製で2人プレイ対応。
  - [ソースコードのダウンロード](https://web.archive.org/web/20180120123425/https://www.classicdosgames.com/files/source/dogs_src.zip)
  - [C-Dogs](https://en.wikipedia.org/wiki/C-Dogs) - Cyberdogs の続編。原作者 Ronny Wester はオリジナル C-Dogs のサイトを保守していませんが、[cdogs-sdl](https://congusbongus.itch.io/cdogs-sdl)など複数の移植版があります。

#### ソースコードが公開された商用ゲーム

- [Abuse](https://web.archive.org/web/20190801083909/https://www.classicdosgames.com/game/Abuse.html) - SF 横スクロールプラットフォームゲーム。革新的なカルトクラシックとされ、最大1280x1024の SVGA に対応。C 製で Lisp スクリプトエンジンを内蔵。
  - [ソースコードのダウンロード](https://web.archive.org/web/20160402141350/http://www.classicdosgames.com/files/source/abuse_pd.tgz)
- [Beneath a Steel Sky](https://web.archive.org/web/20200721064209/https://www.classicdosgames.com/game/Beneath_a_Steel_Sky.html) - ディストピアの未来を舞台にしたポイント＆クリック式アドベンチャー。アセンブリー製。
  - [ソースコードのダウンロード](https://web.archive.org/web/20200721083621/https://www.classicdosgames.com/files/source/sky-source.zip)
- [Catacomb](https://github.com/CatacombGames/Catacomb) - Softdisk（後の id Software）が開発した見下ろし型2Dシューティング。EGA/CGA 対応で Turbo Pascal とアセンブリー製。
- [Catacomb 3D](https://github.com/CatacombGames/Catacomb3D) - Softdisk（後の id Software）によるファンタジー一人称シューティング。レイキャスティングによる疑似3D、EGA に対応。C とアセンブリー製で Borland C++ 3.1 を使用。
- [Commander Keen in Keen Dreams](https://github.com/keendreams/keen) - id Software 開発の横スクロールプラットフォームゲーム。Keen 3 と Keen 4 の間に作られた（「Keen 3.5」とも呼ばれる）ものの広く公開されなかった作品。C とアセンブリー製。
- [Descent](https://github.com/videogamepreservation/descent) - 完全な真の3Dグラフィックスを初めて採用した SF FPS／宇宙シューティング。C とアセンブリー製。
- [Descent II](https://github.com/videogamepreservation/descent2) - Descent の続編。C とアセンブリー製。
- [Doom](https://github.com/id-Software/DOOM) - 火星で地獄の悪魔と戦う id Software 製 SF FPS。ライセンスされた DMX サウンドライブラリへの依存により DOS 固有コードは公開できず、整理された Linux ソースのみがあります。Heretic と Hexen には DMX 関連コードを除去したオリジナル DOS コードが含まれます。
- [Duke Nukem 3D](https://web.archive.org/web/20190304015745/https://www.classicdosgames.com/game/Duke_Nukem_3D.html) - 象徴的な Duke Nukem を主役とする Apogee 製 FPS。C 製で Watcom C/C++ 10.0 を使用。
  - [ソースコードのダウンロード](https://web.archive.org/web/20160403223736/http://www.classicdosgames.com/files/source/duke3dsource.zip)
- [Heretic](https://github.com/OpenSourcedGames/Heretic) - id Software の Doom エンジンで動くダークファンタジー FPS。
- [Hexen: Beyond Heretic](https://github.com/OpenSourcedGames/Hexen) - Heretic の間接的続編。
  - Heretic/Hexen のオリジナル [SourceForge リンク](https://sourceforge.net/projects/heretic/files/)heretic/hexenのため
- [Hovertank 3D](https://github.com/FlatRockSoft/Hovertank3D) - id Software が Catacomb 3D と Wolfenstein 3D より前に開発した FPS。レイキャスティングによる疑似3D。C とアセンブリー製。
- [Quake](https://github.com/id-Software/Quake) - 完全な3D世界を舞台にした id Software 製 FPS。C で書かれ、DOS 用には DJGPP でコンパイル。
  - [Quake Engine Code Review シリーズ](https://fabiensanglard.net/quakeSource/index.php) - Fabien Sanglard によるコード分析。
- [Rise of the Triad: Dark War](https://github.com/videogamepreservation/rott) - Apogee 製 FPS。Wolfenstein 3D の後継として開発された後、独立作品へ変更。大幅に改変した Wolfenstein 3D エンジンを使用し、C 製。
- [Sopwith](https://web.archive.org/web/20200131222432/http://davidlclark.com/page/sopwith) - David L. Clark が1984年に制作した横スクロールシューティング。Sopwith 複葉機を操縦し、敵機などを避けながら敵の建物を爆撃します。
  - [MaiZure's Projects - Decoded: Sopwith](https://web.archive.org/web/20201211175311/https://www.maizure.org/projects/decoded-sopwith/) - MaiZure によるコード分析。
- [Wolfenstein 3D](https://github.com/id-Software/wolf3d) - ナチス・ドイツの Castle Wolfenstein 刑務所を舞台にした id Software 製 FPS。レイキャスティングによる疑似3D。C とアセンブリー製。

## ドライバーとエミュレーター

### サウンドカードエミュレーター

- [SBEMU](https://github.com/crazii/SBEMU) - 現代の PCI ベース（オンボード／増設）サウンドカードを使い、純粋な DOS で Sound Blaster と OPL3 をエミュレートする TSR。リアルモードとプロテクトモードのゲームに対応。
- [VSB](https://github.com/Baron-von-Riedesel/VSBHDA) - SBEMU のフォーク。現代の PC ハードウェアでリアルモード／プロテクトモード両方の Sound Blaster エミュレーションを提供することを目指します。
