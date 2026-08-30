---
title: "tobiasvl/awesome-chip-8"
description: "tobiasvl/awesome-chip-8 の定本スナップショット"
licenseSource: "github-tobiasvl-awesome-chip-8-readme-md"
---

# Awesome CHIP-8 [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

[<img src="c8.png" align="right" width="100">](https://chip-8.github.io)

> 1970 年代の仮想コンピューターゲーム機

CHIP-8 の優れたリソース、ツール、ドキュメント、関連プロジェクト、オープンソース ROM の厳選リスト。

1977 年に作られた [CHIP-8](https://en.wikipedia.org/wiki/CHIP-8) は、元祖ファンタジーコンソールです。当初は COSMAC VIP キットコンピューター向けのゲーム開発を容易にするために設計され、数十年にわたり、新しく刺激的なプラットフォーム向けに何度も復活してきました。現在、CHIP-8 の実装を作ることは、エミュレーションを学ぶことに興味を持つ人にとっての通過儀礼となっています。

このリストへ追加する場合は、[貢献ガイドライン](https://github.com/tobiasvl/awesome-chip-8/blob/62cec4b6bee270b5de4745d3c107d4138875b212/CONTRIBUTING.md)を参照してください。

## 目次

* [コミュニティ](#community)
* [ドキュメント](#documentation)
* [エミュレーター・インタープリター開発](#emulatorinterpreter-development)
  * [テスト](#testing)
* [エミュレーター・インタープリター](#emulatorsinterpreters)
* [ソフトウェア開発](#software-development)
  * [ツール](#tools)
  * [ガイドとスニペット](#guides-and-snippets)
  * [ポストモーテム](#postmortems)
* [ゲーム](#games)

## コミュニティ

* [COSMAC Elf Group](https://groups.io/g/cosmacelf) - COSMAC VIP と CHIP-8 を含む COSMAC Elf、および RCA 1802 関連のあらゆる話題を議論するグループ。
* [#chip8 channel on the Emulation Development Discord server](https://discordapp.com/invite/Gf7cP3w) - CHIP-8 エミュレーター・インタープリター開発について話すチャット。
* [OctoJam](http://octojam.com/) - 毎年 10 月に開催される Octo 中心のゲームジャム。

## ドキュメント

* [Mastering CHIP-8](https://github.com/mattmikolay/chip-8/wiki/Mastering-CHIP%E2%80%908) - CHIP-8 命令セットの詳細な概要。
* [CHIP-8 Instruction Set](http://johnearnest.github.io/Octo/docs/chip8ref.pdf) - CHIP-8 命令のクイックチートシート。
* [CHIP-8 Instruction Set](https://github.com/mattmikolay/chip-8/wiki/CHIP%E2%80%908-Instruction-Set) - 包括的な命令・オペコード表。
* [CHIP-8 Technical Reference](https://github.com/mattmikolay/chip-8/wiki/CHIP%E2%80%908-Technical-Reference) - CHIP-8 インタープリターの動作概要。
* [CHIP-8 Extensions Reference](https://github.com/mattmikolay/chip-8/wiki/CHIP%E2%80%908-Extensions-Reference) - CHIP-8 の派生版と拡張のリスト。
* [Chip-8 on the COSMAC VIP](https://laurencescotford.com/chip-8-on-the-cosmac-vip-index/) - COSMAC VIP 上のオリジナル CHIP-8 インタープリターの詳細な逆アセンブルと分析。
* [HP48-Superchip](https://github.com/Chromatophore/HP48-Superchip) - HP48 電卓向けの CHIP48 と Super-CHIP、および CHIP-8 互換にするための変更を詳しく扱う。
* [Octo Extensions](http://johnearnest.github.io/Octo/docs/XO-ChipSpecification.html) - Octo の XO-CHIP 拡張仕様。

## エミュレーター・インタープリター開発

* [How to write an emulator (CHIP-8 interpreter)](http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/) - C/C++ で CHIP-8 インタープリターを開発するガイド。
* [Emulator 101: CHIP-8](http://www.emulator101.com/introduction-to-chip-8.html) - C で CHIP-8 逆アセンブラーとインタープリターを開発するガイド。
* [Chip 8 Instruction Scheduling and Frequency](https://jackson-s.me/2019/07/13/Chip-8-Instruction-Scheduling-and-Frequency.html) - COSMAC VIP 上の CHIP-8 命令のタイミング。
* [High-level guide to making a CHIP-8 emulator](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/) - コードを用いずに CHIP-8 インタープリターを開発するガイド。

### テスト

* [chip8-test-rom](https://github.com/corax89/chip8-test-rom) - corax89 の CHIP-8 テストプログラム。ほとんどの命令が正しく（Super-CHIP 準拠で）動作するか検証する。
* [CHIP-8 test suite](https://github.com/Timendus/chip8-test-suite) - Timendus のテストコレクション。改良版 corax89 テスト ROM、フラグ動作のテスト、CHIP-8 / Super-CHIP / XO-CHIP の特殊仕様テストを含む。
* [Delay timer test](https://github.com/mattmikolay/chip-8/tree/master/delaytimer) - ディレイタイマーの動作を確認するテストプログラム。
* [Random number test](https://github.com/mattmikolay/chip-8/tree/master/randomnumber) - 乱数生成の分布とマスクを確認するテストプログラム。

## エミュレーター・インタープリター

* [Octo](http://johnearnest.github.io/Octo/) - CHIP-8、Super-CHIP、XO-Chip のゲーム開発用 IDE。
* [Emma02](https://www.emma02.hobby-site.com/) - 初期 CHIP-8 インタープリターを実行した COSMAC VIP、Telmac 1800、ETI 660 を含む多くの旧式マイクロコンピューターのエミュレーター（これらのインタープリターもエミュレーターに含まれる）。
* [Super-Chip8x](https://github.com/Ersanio/Super-Chip8x) - SNES 用 CHIP-8 エミュレーター。
* [CHIP-8 console on FPGA](https://github.com/pwmarcz/fpga-chip8) - TinyFPGA BX チップ用 CHIP-8 エミュレーター。
* [Vinegar](http://benryves.com/bin/vinegar/) - TI-83（Plus）電卓用 CHIP-8/Super-CHIP インタープリター。
* [LowResNX](https://lowresnx.inutilis.com/topic.php?id=1648) - 別のレトロファンタジーコンソール内で BASIC を使ってプログラムされた CHIP-8 インタープリター・デバッガー。

## ソフトウェア開発

### ツール

* [Octo](http://github.com/johnearnest/Octo/) - プログラムのテスト環境と作成物を共有するツールを備えた、CHIP-8、Super-CHIP、XO-CHIP 用の高水準アセンブラー。
* [wernsey chip8](https://github.com/wernsey/chip8) - CHIP-8 アセンブラー・逆アセンブラー。
* [EZ-Bake Animator](http://beyondloom.com/tools/ezbake.html) - XOR 演算済みアニメーションを作るグラフィック準備ツール。
* [EZ-Writer](http://beyondloom.com/tools/ezwriter.html) - テキストを CHIP-8 スプライトへ変換するツール。
* [EZ-Pack](http://beyondloom.com/tools/ezpack.html) - 画像の分割・再パレット化ツール。
* [Chipify](http://johnearnest.github.io/Octo/tools/Chipify/) - モノラル WAV オーディオを XO-CHIP オーディオにフィルタリング・エンコードするスクリプト。
* [octofont](https://github.com/jdeeny/octofont/) - TrueType（ttf）フォントを CHIP-8 用 Octo コードに変換する。

### ガイドとスニペット

* [Octo manual](https://johnearnest.github.io/Octo/docs/Manual.html) - Octo のマニュアル。
* [A Beginner's Guide to Programming with Chip8](http://johnearnest.github.io/Octo/docs/BeginnersGuide.html) - Octo における CHIP-8 プログラミングの入門ガイド。
* [An Intermediate Guide to Game Development with Chip8](http://johnearnest.github.io/Octo/docs/IntermediateGuide.html) - Octo で Atari 2600 のゲーム「Outlaw」を CHIP-8 向けに再制作する。
* [Chip8 Programming Techniques](http://johnearnest.github.io/Octo/docs/Chip8%20Programming.html) - CHIP-8 向けのさまざまなプログラミングのヒント。
* [Octo Metaprogramming Cookbook](http://johnearnest.github.io/Octo/docs/MetaProgramming.html) - メタプログラミングに Octo のアセンブリディレクティブを使う方法。
* [Mastering SuperChip](http://johnearnest.github.io/Octo/docs/SuperChip.html) - CHIP-8 と Super-CHIP に互換なゲームの作り方、および Super-CHIP 固有の技法。
* [Adventures in Sorting](https://johnearnest.github.io/Octo/docs/Sorting.html) - Octo で CHIP-8 向けに効率的なソートアルゴリズムを実装する。
* [chip8-multiply](https://github.com/jdeeny/chip8-multiply) - Octo で書かれた CHIP-8 用の乗算ルーチン。

### ポストモーテム

特定ゲームの開発を、開発者が詳細に振り返るポストモーテム。

* [Inside Eaty the Alien](http://johnearnest.github.io/Octo/docs/EatyTheAlien.html)
* [Octopeg Post Mortem](http://www.awfuljams.com/octojam-ii/games/octopeg)
* [CosmacCalc: The COSMAC VIP's place in Spreadsheet History](https://abitoutofplace.wordpress.com/2015/05/02/cosmaccalc-the-cosmac-vip-s-place-in-spreadsheet-history/)
* [Inside Cave Explorer](http://johnearnest.github.io/Octo/docs/CaveExplorer.html)
* [Inside Black Rainbow](http://johnearnest.github.io/Octo/docs/BlackRainbow.html)
* [Postmortem: Mini Lights Out](https://tobiasvl.itch.io/mini-lights-out/devlog/102679/postmortem-mini-lights-out)

## ゲーム

* [CHIP-8 Archive](https://johnearnest.github.io/chip8Archive/) - すべてオンラインで遊べるパブリックドメイン（CC0）ゲームのコレクション。
* [A collection of CHIP-8 programs and documentation](https://github.com/mattmikolay/chip-8) - Matt Mikolay のゲーム、プログラム、ドキュメント。
