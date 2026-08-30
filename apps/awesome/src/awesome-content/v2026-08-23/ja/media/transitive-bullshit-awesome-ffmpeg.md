---
title: "transitive-bullshit/awesome-ffmpeg"
description: "transitive-bullshit/awesome-ffmpeg の正規スナップショット"
licenseSource: "github-transitive-bullshit-awesome-ffmpeg-readme-md"
---

# Awesome FFmpeg [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> [FFmpeg](http://ffmpeg.org) は、音声と動画の録画、変換、ストリーミングを行うクロスプラットフォームのソリューションです。

<p align="center">
  <img width="400" src="https://cdn.rawgit.com/transitive-bullshit/awesome-ffmpeg/master/ffmpeg-logo.svg">
</p>


## 目次

- [ドキュメント](#docs)
- [JavaScript](#javascript)
- [ネイティブ](#native)
- [モバイル](#mobile)
- [チュートリアル](#tutorials)
- [コミュニティ](#community)


## ドキュメント

FFmpeg の公式ドキュメントは、その機能の範囲と複雑さから、初心者には理解しにくいことで知られています。それでもリファレンスとしては非常に役立ちます。

- [FFmpeg.org](http://ffmpeg.org) - すべての出発点。
- [フィルター](https://ffmpeg.org/ffmpeg-filters.html) - FFmpeg の強力なフィルターチェーン（拡大縮小、切り抜き、連結、合成など）のドキュメント。FFmpeg で作業するときに最もよく参照するリンクの一つです。
- [man ページ](https://man.cx/ffmpeg) - FFmpeg の公式 man ページ。
- [Wiki とバグトラッカー](https://trac.ffmpeg.org) - 有用な情報が豊富です。
- [CLI フラグ](https://github.com/transitive-bullshit/ffmpeg-cli-flags/blob/master/readme.md) - FFmpeg の全コマンドラインフラグを網羅したリスト。実際の利用例で見かけた未知のフラグを調べるのに便利です。


## JavaScript

- [fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) - [FFmpeg](http://www.ffmpeg.org) の流れるような API。このリストから一つだけ使うなら、これがおすすめです。
- [ffmpeg-probe](https://github.com/transitive-bullshit/ffmpeg-probe) - メディアファイルの情報を取得する ffprobe のラッパー。
- [ffmpeg-concat](https://github.com/transitive-bullshit/ffmpeg-concat) - 洗練された OpenGL トランジションを使い、FFmpeg で複数の動画を連結。
- [editly](https://github.com/mifi/editly) - 滑らかなアニメーションとトランジションを備えた宣言的な動画編集ツール兼ライブラリ。
- [ffmpeg-generate-video-preview](https://github.com/transitive-bullshit/ffmpeg-generate-video-preview) - 動画から見栄えのよい画像ストリップまたは GIF プレビューを生成。
- [ffmpeg-extract-frame](https://github.com/transitive-bullshit/ffmpeg-extract-frame) - 動画から単一フレームを抽出。
- [ffmpeg-extract-frames](https://github.com/transitive-bullshit/ffmpeg-extract-frames) - FFmpeg を使って動画からスクリーンショットを抽出。
- [gif-extract-frames](https://github.com/transitive-bullshit/gif-extract-frames) - フレーム間の合成を含め、GIF からフレームを抽出。
- [ffmpeg-extract-audio](https://github.com/transitive-bullshit/ffmpeg-extract-audio) - メディアファイルから音声ストリームを抽出。
- [ffmpeg-on-progress](https://github.com/transitive-bullshit/ffmpeg-on-progress) - fluent-ffmpeg で進捗を堅牢に報告するユーティリティ。
- [ffmpeg.js](https://github.com/Kagami/ffmpeg.js) - Emscripten による FFmpeg の JavaScript 移植版。クライアント側で限定的に FFmpeg を利用できます。
- [ffmpeg-static](https://github.com/eugeneware/ffmpeg-static) - macOS、Linux、Windows 向けの静的 FFmpeg バイナリを提供。CI テストに便利です。
- [tangerine](https://github.com/niftylettuce/tangerine) - Node.js、FFmpeg、WebSockets、Lad を使うウェブカメラ配信サービス。
- [ffparser](https://github.com/NiKlimenko/FFParser) - 入力ストリームをフレーム単位で解析し、バッファとしてコードへ直接渡します。


## ネイティブ

- [ffmpeg-gl-transition](https://github.com/transitive-bullshit/ffmpeg-gl-transition) - 動画ストリーム間に GLSL トランジションを適用する FFmpeg フィルター（[gl-transitions](https://gl-transitions.com/)）。


## モバイル

- [simplest ffmpeg mobile](https://github.com/leixiaohua1020/simplest_ffmpeg_mobile) - Android と iOS 向けの FFmpeg サンプル。
- [ijkplayer](https://github.com/Bilibili/ijkplayer) - FFmpeg ベースの Android / iOS 動画プレーヤー。


## チュートリアル

- [1,000 行未満で動画プレーヤーを書く方法](http://dranger.com/ffmpeg)
- [苦労しながら学ぶ FFmpeg libav](https://github.com/leandromoreira/ffmpeg-libav-tutorial)
- [FFmpeg で OpenGL シェーダーを適用](https://nervous.io/ffmpeg/opengl/2017/01/31/ffmpeg-opengl) - [続編](https://nervous.io/ffmpeg/opengl/2017/05/15/ffmpeg-pbo-yuv)もあります。
- [初心者向け FFmpeg クックブック](https://github.com/talwrii/ffmpeg-cookbook)
- [動画自動化のための FFmpeg チートシート](https://github.com/rendi-api/ffmpeg-cheatsheet)


## コミュニティ

- [Stack Overflow](https://superuser.com/questions/tagged/ffmpeg)
- [メーリングリスト](https://www.ffmpeg.org/contact.html#MailingLists)
- [IRC](https://www.ffmpeg.org/contact.html#IRCChannels)


## 貢献

貢献を歓迎します。最初に[貢献ガイドライン](https://github.com/transitive-bullshit/awesome-ffmpeg/blob/a9c6f2d469b50ba46d630f0a22c24752641bdff0/contributing.md)をお読みください。


## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0)

法律で認められる範囲において、[Travis Fischer](https://github.com/transitive-bullshit) はこの作品に関するすべての著作権および関連する権利、隣接権を放棄しています。

私の OSS 活動を支援するには、<a href="https://twitter.com/transitive_bs">Twitter でフォローしてください <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="Twitter" height="24px" align="center"></a>
