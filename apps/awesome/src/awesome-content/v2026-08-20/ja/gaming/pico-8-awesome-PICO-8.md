---
title: "Awesome PICO-8"
description: "PICO-8を扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-pico-8-awesome-PICO-8-readme-md"
---

# Awesome PICO-8

PICO-8を扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [コミュニティ](#community)
- [デモシーン](#demoscene)
- [リソース](#resources)
- [チュートリアル](#tutorials)
- [ツール](#tools)
- [ライブラリ](#libraries)
- [アセット](#assets)
- [テキストエディターの言語サポート](#text-editors-language-support)
- [ハック](#hacks---undocumented-pico-8-features)
- [ハードウェア](#hardware)
- [記事・投稿](#articles--posts)
- [トーク](#talks)
- [クローン](#clones)
- [コントリビュート](#i-want-to-contribute)
- [ライセンス](#license)

### コミュニティ

- [Lexaloffle](https://www.lexaloffle.com)
  - [Blog](https://www.lexaloffle.com/bbs/?uid=1)
  - [PICO-8](https://www.lexaloffle.com/pico-8.php)
  - [Forum/BBS](https://www.lexaloffle.com/bbs/?cat=7)
  - [Twitter](https://twitter.com/lexaloffle)
  - [BlueSky](https://bsky.app/profile/lexaloffle.bsky.social)
  - [Mastodon](http://mastodon.social/@zep)
  - [Facebook](https://www.facebook.com/lexaloffle/)
  - [Youtube](https://www.youtube.com/user/lexaloffletv)
- [Subreddit](https://www.reddit.com/r/pico8/)
- [#pico8 on Twitter](https://twitter.com/hashtag/pico8)
- [#pico8 on BlueSky](https://bsky.app/hashtag/pico8)
- [#pico8 on Mastodon](https://mastodon.social/tags/pico8)
- [#pico8 on Freenode](https://webchat.freenode.net/?randomnick=1&channels=#pico8&prompt=1)
- [Pico-8 Console News](https://twitter.com/pico8console)
- [Pico-8 Wiki](https://pico-8.wikia.com/wiki/Pico-8_Wikia)
- [Slack Team](https://slofile.com/slack/pico-8) - PICO-8 Slack チャット。
- [Discord Server](https://discord.gg/EwQ86eq) - PICO-8 Discord チャット。

### デモシーン

- [Pico-8 demos on Demozoo](https://demozoo.org/platforms/81/) 
- [Pico-8 demos on Pouet](https://www.pouet.net/prodlist.php?platform%5B%5D=PICO-8) 
- [Article with demoscene effects code](https://medium.com/swlh/creativity-through-limitation-pico-8-fantasy-console-175294e13332) 
- [Pico-8 demos on Youtube](https://www.youtube.com/results?search_query=pico+8+demoscene) 

### リソース

- [Official Manual](https://www.lexaloffle.com/pico-8.php?page=manual) - pico-8.txt のプレースホルダーダンプ！（適切なマニュアルは近日公開）。
- [PicoZine #1](https://sectordub.itch.io/pico-8-fanzine-1), [#2](https://sectordub.itch.io/pico-8-fanzine-2), [#3](https://sectordub.itch.io/pico-8-fanzine-3) and [#4](https://sectordub.itch.io/-pico-8-zine-4) - PICO-8 Zine は PICO-8 ユーザーがユーザーのために作った48ページの同人誌です。
- [Going from Lua 5.2 to PICO-8's Lua](https://gist.github.com/josefnpat/bfe4aaa5bbb44f572cd0) - Lua に習熟した人が Lua と PICO-8 の Lua の制限・相違を理解するための文書。
- [Cheat Sheet (printable)](https://ztiromoritz.github.io/pico-8-spick/) - 印刷可能な簡略チートシート。ドイツ語・英語版があります。
- [Cheat Sheet (wallpaper)](https://www.lexaloffle.com/bbs/?tid=28207) - デスクトップ壁紙用に強化した印刷可能なチートシート。

### チュートリアル

- [Music Tracker Tutorial Series](https://www.youtube.com/playlist?list=PLjZAika8vyZkyOjoCp0EbHeIFZ8MLlhvg) - PICO-8 で音を作る。
- [Tron Lightcycle game from scratch](https://youtu.be/ZuaLuMhwcc8) - ゲームをゼロから書く PICO-8 の簡単な入門。
- [A PICO-8 Spaceshooter in 16 GIFs](https://ztiromoritz.github.io/pico-8-shooter/) - Spaceshooter ゲームを段階的に書く画面キャプチャ。
- [Token optimization](https://github.com/seleb/PICO-8-Token-Optimizations) - トークン節約のヒントとコツ。
- [Tweetjam, BBS thread](https://www.lexaloffle.com/bbs/?tid=3726) - ツイートに収まるコードのカード（楽しいテクニックを学ぶのに有用）。
- [Sample code on the BBS](https://www.lexaloffle.com/bbs/?search=sample+code) - 検索精度は100%ではありませんが、将来のコードで再利用できるよいテクニックが含まれます。
- [Newgrounds Medals Tutorial](https://github.com/Bigaston/pico-8-newgrounds-tutorial) - PICO-8 ゲームに Newgrounds Medals を追加する小さなチュートリアル。
- [Binary save system](https://ultiman3rd.wordpress.com/2018/02/01/pico-8-binary-save-system/) - 各種データ型をサポートするカスタムゲーム保存システム。
- [Lazy Devs Breakout](https://youtube.com/playlist?list=PLea8cjCua_P0qjjiG8G5FBgqwpqMU7rBk&si=CaivHwqC6uYjJA21) - [roguelikes](https://youtube.com/playlist?list=PLea8cjCua_P3LL7J1Q9b6PJua0A-96uUS&si=ZYrBbZMJr9ABHsnA)、[shmups](https://youtube.com/playlist?list=PLea8cjCua_P3Sfq4XJqNVbd1vsWnh7LZd&si=bKKGy-2IKwcTQxeF)などの段階的動画。

### ツール

- [Sprite Editor](https://www.lexaloffle.com/bbs/?tid=51270) - キーボードのみで使う8x8ピクセルアートツール。
- [pico2png](https://github.com/briacp/pico2png) - perl 製スプライトシート抽出ツール。
- [Spritesheets and tools for the PICO-8 Palette](https://www.reddit.com/r/pico8/comments/3jhmni/spritesheets_and_tools_for_the_pico8_palette/) - PICO-8 パレットを使う作品、アセット、ツールのまとめ。
- [Pico8Utils](https://github.com/josefnpat/pico8utils) - .p8 ファイルを扱う、unix 哲学に基づく lua スクリプト集。
- [picotool](https://github.com/dansanderson/picotool) - Pico-8 ゲームファイル操作用ツールと Python ライブラリ。
- [p8dl - Carts Downloader - Python](https://github.com/franciscod/p8dl) - カートリッジを正しいフォルダーへダウンロード（config.txt を確認）。
- [Pico-8 Carts Downloader - Bash ](https://github.com/kikookoubis/pico-8-carts-bash-downloader) - BBS からカートリッジをダウンロードし、メタデータに従って改名。
- [p8 responsive webplayer transform](https://github.com/benwiley4000/pico8-responsive-webplayer-transform) - HTML エクスポートページをレスポンシブにする Python スクリプト。
- [Color Palette](https://www.romanzolotarev.com/pico-8-color-palette/) - Web 向け Hex・RGB カラーコード。
- [PICO-8 font](https://www.lexaloffle.com/bbs/?tid=3760) - [RhythmLynx](https://www.lexaloffle.com/bbs/?uid=11704)によるフォント。
- [P8Coder](https://github.com/movAX13h/P8Coder) - pico-8 カートリッジ（p8）の lua コードを P8Coder で書いたコードに置き換えるプログラミングツール。
- [picoDeploy](https://github.com/torch2424/picoDeploy) - Pico-8 carts をデスクトップ（Electron）・モバイル（Ionic）のスタンドアロンアプリとしてデプロイ。
- [pico8Grunt](https://github.com/TeamNoComplyGames/pico8Grunt) - gruntjs を使用する pico8 ゲームのビルドシステム。
- [PICO-EC](https://github.com/JoebRogers/PICO-EC) - PICO-8 ファンタジーコンソール用の小さな scene-entity-component ライブラリ。
- [p8](https://github.com/jozanza/p8) - 依存関係マネージャー兼ビルドツール。コード・スプライト共有、`require()` 依存関係、保存時の carts 自動リロードを提供。外部コードエディターと [MoonScript](https://moonscript.org/)をサポート。
- [MIDI to PICO-8](https://github.com/andmatand/midi-to-pico8) - MIDI ファイルを PICO-8 音楽へ変換するツール。
- [midi2pico](https://github.com/gamax92/midi2pico) - MIDI から PICO-8 への変換器。
- [Denote](https://bikibird.itch.io/denote) - MIDI ファイルを SFX データに変換するインタラクティブな Web ベースツール。
- [Custom template](https://www.lexaloffle.com/bbs/?tid=31000) - フルスクリーンとマウスの問題を修正し、見栄えもよいシンプルでクリーンなテンプレート。
- [Fillp Tool](https://seansleblanc.itch.io/pico-8-fillp-tool) - fillp パターン生成のための簡単な補助ツール。
- [Depict](https://bikibird.itch.io/depict) - 画像を PICO-8 カラーのディザ画像に変換し、最大128 x 128へ縮小。
- [picoCAD](https://johanpeitz.itch.io/picocad) - ローポリ3Dモデルを構築・テクスチャリングする PICO-8 プログラム。
- [pico8-deploy](https://github.com/tducasse/pico8-deploy) - PICO-8 プロジェクトを itch.io へ簡単にエクスポート・デプロイする方法。
- [yap8b](https://github.com/Enerccio/yap8b) - 複数のソースファイルから pico carts を作るビルドツール。
- [TS-PICO-8](https://github.com/tmountain/pico-8-typescript) - TypeScript で PICO-8 ゲームを作成。
- [Shrinko8](https://github.com/thisismypassport/shrinko8) - Pico-8 コードを積極的に縮小するミニファイア。リンターなども含みます。
- [jspicl](https://github.com/jspicl/jspicl) - JavaScript または TypeScript で PICO-8 ゲームを書き、ライブリロードで変更を即座に確認。

### ライブラリ

- [pico-test](https://github.com/jozanza/pico-test) - PICO-8 テストフレームワーク。
- [Lib-Pico8](https://github.com/clowerweb/Lib-Pico8) - 便利な共通関数からなる Pico-8 ライブラリ。
- [pico8-missing-builtins](https://github.com/adamscott/pico8-missing-builtins) - pico8 に Lua の組込み関数を提供。
- [Pico-Kit](https://github.com/outkine/pico-kit) - Pico-8 を始めやすくする、主張を持つヘルパー集。OOP、よりよいデバッグ、物理を追加。
- [PICO-Tween](https://github.com/JoebRogers/PICO-Tween) - Robert Penner の easing 関数に着想を得た、PICO-8 ファンタジーコンソール用 tweening/easing 関数の小さなライブラリ。
- [parens-8](https://codeberg.org/wellspring-labs/parens-8) - 小さな Lua インタープリター／VM で Lua のトークン上限を回避。
- [p8-canvas](https://codeberg.org/wellspring-labs/p8-canvas) - 高性能な無限キャンバス／テクスチャライブラリ。
- [pico8-physics](https://github.com/jamesedge/pico8-physics) - 8つのデモを備えた Pico8 による Box2d 実装。
- [SCUMM-8](https://github.com/Liquidream/scumm-8) - ポイント＆クリック型クラシックアドベンチャー作成用 SCUMM エンジンのデメイク。
  
### アセット
- [midilib](https://www.lexaloffle.com/bbs/?cat=7#tag=midilib) - カスタム SFX 楽器。

### テキストエディターの言語サポート

- Visual Studio Code: [pico8-ls](https://github.com/japhib/pico8-ls) - PICO-8 の Lua 方言向けの完全な言語サポートを提供する PICO-8 Language Server。
- Atom: [language-pico8](https://atom.io/packages/language-pico8)
- Sublime: [Sublime PICO-8](https://packagecontrol.io/packages/PICO-8) - Sublime Text エディター用 PICO-8 プラグイン（カラースキーム、フォント、ビルドシステム、コード補完、スニペットなど）。
- Vim: [vim-pico8-syntax](https://github.com/justinj/vim-pico8-syntax)
- Emacs: [pico8-mode](https://github.com/Kaali/pico8-mode)
- Visual Studio Code / NeoVim / JetBrains / Others： [pico8-definitions](https://github.com/ahai64/pico8-definitions) - PICO-8 言語サポートを提供する sumneko/lua 向けアドオン。

### プログラミングフォント

[pico-8 programming fonts](https://github.com/juanitogan/p8-programming-fonts)の導入に関心があるかもしれません。pico-8 のカスタム文字と各種フォント（ビットマップおよび通常のアンチエイリアスフォント）をサポートします。[BBS スレッドはこちら](https://www.lexaloffle.com/bbs/?tid=28975)。

フォントのインストール方法:

* **Linux:** ファイルを ~/.fonts にコピーし、`sudo fc-cache -f -v` を実行
* **Windows:** ファイルを c:/windows/fonts/ にコピー

### ハック - 非文書化 PICO-8 機能

- [Mouse](https://www.lexaloffle.com/bbs/?tid=3549) - マウス座標の取得方法（デモ付き）。
- [p8keyboard.js](https://github.com/dppc/p8keyboard.js) - Pico-8 向け JavaScript「キーボードアダプター」。ブラウザー上で実行される Pico-8 プログラムへ ASCII 文字を送信。
- [SFX Modifications](https://www.lexaloffle.com/bbs/?tid=3561) - メモリーを変更することでのみ適用できる4つのエフェクト（デモ付き）。
- [Tracker State/Audio Memory Locations](https://www.lexaloffle.com/bbs/?pid=10719#p10719) - 再生中の音声データへアクセス・変更する方法。

### ハードウェア

- [GameShell](https://www.clockworkpi.com/) - レトロゲームをプレイ・改造し、DIY の新しい端末を作れるモジュール式携帯ゲーム機。GameShell 上で PICO-8 を動かす方法は[GameShell Docs](https://github.com/clockworkpi/GameShellDocs/wiki/Running-PICO-8-on-the-GameShell)を確認。
- [PocketChip](https://shop.pocketchip.co/) - どこでもプレイとコーディングができるよう設計された携帯機。pico-8 が公式サポート。[PoketChip version of pico-8](https://www.lexaloffle.com/bbs/?tid=34009)

### 記事・投稿

- [Indie Retro News](https://www.indieretronews.com/2015/10/pico-8-8-bit-fantasy-console-from.html) - [@ABrugsch](https://twitter.com/ABrugsch)による PICO-8 の優れた入門。

### トーク

- [Sharing the love](https://www.youtube.com/watch?v=AmMYWD2Zbso) - PICO-8 でゲームを作る。linux conf au 2017 - Hobart, Australia

### クローン
- [TIC-80 by Nesbox](https://nesbox.itch.io/tic) - HTML 5、Windows、Linux 32/64bit、Android、MacOSX で利用できる Tiny Computer。
- [PicoLove](https://github.com/picolove/picolove) - LÖVE による Pico-8 再実装。
- [LIKO-12](https://github.com/RamiLego4Game/LIKO-12) - 96kb RAM を持つ、LÖVE で作られたオープンソースのファンタジーコンピューター。
- [Pikuseru](https://github.com/PikuseruConsole/pikuseru) - 純粋な Rust [Core] によるオープンソースファンタジーコンソール。
- [tac08](https://0xcafed00d.itch.io/tac08-rg350) - RG350 携帯ゲーム機で動く、Pico-8 ファンタジーコンソールのランタイム部分のエミュレーション。
- [LowRes NX](https://lowresnx.inutilis.com/) - IOS、MacOS、Windows、Linux、GameShell で利用できるファンタジーコンソール（BASIC コード対応）。
- [BeetPx](https://beetpx.dev/) - PICO-8 から大きな影響を受けた、ピクセルアートのブラウザーゲーム向け TypeScript フレームワーク。

### コントリビュートしたい！

素晴らしい！:smiley:

まず[コントリビューションガイドライン](https://github.com/pico-8/awesome-PICO-8/blob/b241be1389db79d3ae83c9dafb0c3f2628e4aa64/CONTRIBUTING.md)を読んでください。

### ライセンス

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律上可能な限り、[Felipe Bueno](https://twitter.com/felipebueno)はこの作品に関するすべての著作権および関連・隣接する権利を放棄しています。

詳細は[LICENSE](https://github.com/pico-8/awesome-PICO-8/blob/b241be1389db79d3ae83c9dafb0c3f2628e4aa64/LICENSE)を参照してください。
