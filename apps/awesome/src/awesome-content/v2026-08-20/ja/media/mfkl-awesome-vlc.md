---
title: "mfkl/awesome-vlc"
description: "mfkl/awesome-vlc の定本スナップショット"
licenseSource: "github-mfkl-awesome-vlc-readme-md"
---

# Awesome VLC [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [<img src="https://cdn.worldvectorlogo.com/logos/vlc.svg" align="right" alt="VLC" width="128">](https://github.com/mfkl/awesome-vlc)

> [VLC](https://www.videolan.org/vlc/) は、ほとんどのマルチメディアファイル、DVD、オーディオ CD、VCD、さまざまなストリーミングプロトコルを再生できる、無料かつオープンソースのクロスプラットフォームマルチメディアプレーヤー兼フレームワークです。

VLC と LibVLC に関する優れたリソースの一覧です。

## 目次

- [ドキュメント](#docs)
- [VLC ネイティブプラグイン](#vlc-native-plugins)
- [VLC lua 拡張機能](#vlc-lua-extensions)
- [アプリ](#apps)
- [バインディング](#bindings)
- [チュートリアル](#tutorials)
- [電子書籍](#ebook)
- [コミュニティ](#community)

## ドキュメント

- [videolan.org](https://www.videolan.org/) - すべてが始まる場所。
- [LibVLC API docs](https://videolan.videolan.me/vlc/group__libvlc.html) - LibVLC エンジンのドキュメント。C API。
- [Wiki](https://wiki.videolan.org/) - 優れた情報がたくさんあります。
- [Code & Bug tracker](https://code.videolan.org/videolan/vlc/-/issues) - 最近 Trac から移行され、バグと機能リクエストに関する貴重な情報を多く含みます。
- [CLI flags](https://wiki.videolan.org/VLC_command-line_help) - すべての VLC コマンドラインフラグの包括的な一覧。実際に見かける未知のフラグを調べるのに非常に役立ちます。

## VLC ネイティブプラグイン

- [vlc-pause-click-plugin](https://github.com/nurupo/vlc-pause-click-plugin) - マウスクリックで動画を一時停止・再生する VLC プラグイン。
- [vlc-tip-plugin](https://github.com/aklexel/vlc-tip-plugin) - TIP（translate it, please）は、動画を見ながら言語を学ぶのに役立つ VLC メディアプレーヤー向けプラグイン。
- [vlc-bittorrent](https://github.com/johang/vlc-bittorrent) - VLC 向け bittorrent プラグイン。
- [vlc-plugin-marker](https://github.com/nemosharma6/vlc-plugin-marker) - マーカープラグインは動画の重要な区間をマークする機能を提供します。動画全体から探し直すことなく、後でこれらの区間を表示できます。
- [vlc-win10smtc](https://github.com/spmn/vlc-win10smtc) - VLC Media Player を Windows 10 System Media Transport Controls（SMTC）と統合するプラグイン。
- [vlc-mixer](https://github.com/lachie/vlc-mixer) - Zig で書かれたオーディオミキサー VLC プラグイン。

## VLC web と lua 拡張機能

- [VideoLAN addons website](https://addons.videolan.org/browse/) - VideoLAN アドオンウェブサイト。
- [vlc-delete](https://github.com/surrim/vlc-delete) - ハードディスクから動画を削除する VLC 拡張機能。
- [TraktForVLC](https://github.com/XaF/TraktForVLC) - VLC で視聴しているものを trakt.tv へ自動記録します。
- [playlist-youtube-vlc](https://github.com/Abstraxt-AA/playlist-youtube-vlc) - Youtube プレイリストを解析する Lua プラグイン。
- [vlc-super-skipper](https://github.com/Trevelopment/vlc-super-skipper) - オープニングとエンディングシーケンスを自動でスキップします。
- [vlc-mcp-server](https://github.com/piebro/vlc-mcp-server) - VLC HTTP API と LLM を使い、自然言語で映画を再生・操作する MCP（Model Context Protocol）サーバー。
- [vlc-auto-dir-enqueue-prev-next](https://github.com/eltoro0815/vlc-auto-dir-enqueue-prev-next) - ファイルの再生開始時に、同じディレクトリの前後トラックを VLC プレイリストへ自動追加します。

## アプリ

- [VLC desktop](https://code.videolan.org/videolan/vlc) - Linux/Windows（Qt）と macOS（Cocoa）で動作するオリジナルのデスクトップアプリ。
- [VLC iOS](https://code.videolan.org/videolan/vlc-ios) - VLC の iOS/tvOS プラットフォーム向け公式移植版。
- [VLC Android](https://code.videolan.org/videolan/vlc-android) - Android、Android TV、ChromeOS 向け VLC。
- [VLC Benchmark (Beta)](https://code.videolan.org/videolan/vlc-bench) - VLC に基づく動画デコード・レンダリングのベンチマークツール。

## バインディング

- [VLCKit](https://code.videolan.org/videolan/VLCKit) - Objective-C による macOS、iOS、iPadOS、tvOS 向け libvlc バインディング。
- [libvlcjni](https://code.videolan.org/videolan/vlc-android/-/tree/master/libvlc) - Android プラットフォーム向け libvlc バインディング。
- [vlc-unity](https://code.videolan.org/videolan/vlc-unity) - VLC 向け Unity3D 統合。
- [python-vlc](https://github.com/oaubert/python-vlc) - Python vlc バインディング。
- [vlcj](https://github.com/caprica/vlcj) - vlc メディアプレーヤー（デスクトップ）用 Java フレームワーク。
- [LibVLCSharp](https://github.com/videolan/libvlcsharp) - LibVLC 向けクロスプラットフォーム .NET/Mono バインディング。
- [libvlc-go](https://github.com/adrg/libvlc-go) - libVLC 向け Go バインディングと高水準メディアプレーヤーインターフェース。
- [libvlcpp](https://code.videolan.org/videolan/libvlcpp/) - libvlc 向け C++ バインディング。
- [vlc.js (beta)](https://code.videolan.org/jbk/vlc.js) - LibVLC 向け WebAssembly サポート。
- [flutter_vlc_player](https://github.com/solid-software/flutter_vlc_player) - LibVLC 向け Flutter バインディング。
- [dart_vlc](https://github.com/alexmercerind/dart_vlc) - libvlc 向け Dart バインディング。
- [WebChimera.js](https://github.com/RSATom/WebChimera.js) - libvlc 向け Electron バインディング。
- [libvlc-zig](https://github.com/kassane/libvlc-zig) - libVLC 向け Zig バインディング。

## チュートリアル

- [HLS Record tutorial](https://mfkl.github.io/hls/2018/10/10/How-to-record-HLS-stream-with-LibVLCSharp-and-.NET-Core.html) - LibVLCSharp と .NET Core で HLS ストリームを録画する方法。
- [RTSP mosaic tutorial](https://mfkl.github.io/libvlc/rtsp/xamarin/forms/2018/12/05/crossplatform-RTSP-mosaic-views-with-libvlcsharp.html) - LibVLCSharp を使うクロスプラットフォーム RTSP モザイクビュー。
- [MediaElement tutorial](https://doumer.me/vlc-media-player-in-xamarinforms-alternative-avplayer-andmediaplayer) - Xamarin Forms の VLC Media Player コントロール。
- [LibVLC LLM Skill](https://github.com/mfkl/libvlc-skill) - VLC メディアプレーヤーの基盤であるマルチメディアフレームワーク、libvlc API（3.x と 4.x の両方）に関する深い知識を AI コーディングアシスタントへ与える Claude Code プラグイン。
## 電子書籍

- [The Good Parts of LibVLC](https://mfkl.gumroad.com/l/libvlc-good-parts) - VideoLAN 非営利組織とオープンソース LibVLC 開発者 SDK に関する最初の電子書籍。

## コミュニティ

- [Stack Overflow - LibVLC](https://stackoverflow.com/questions/tagged/libvlc) - Stack Overflow 上の LibVLC。
- [Stack Overflow - VLC](https://stackoverflow.com/questions/tagged/vlc) - Stack Overflow 上の VLC。
- [Mailing Lists](https://www.videolan.org/support/lists.html) - VideoLAN 開発者メーリングリスト。
- [IRC](https://wiki.videolan.org/Contact_VideoLAN/#IRC) - VideoLAN IRC 情報。
- [Forum](https://forum.videolan.org/) - 公式 VideoLAN フォーラム。
- [LibVLC Discord](https://discord.gg/3h3K3JF) - 公式 LibVLC コミュニティ Discord サーバー。
- [Twitter](https://twitter.com/videolan) - 公式 VideoLAN Twitter アカウント。
- [Reddit](https://www.reddit.com/r/vlc) - Reddit 上の非公式 VLC コミュニティ。

## 貢献

[貢献](https://github.com/mfkl/awesome-vlc/blob/cccfe5e59dcc7082c91efa38800338b2765bdbf1/contributing.md)を歓迎します！
