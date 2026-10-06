---
title: "Awesome Whisper"
description: "Whisperで音声を文字起こしするためのアプリ、Webインターフェース、CLIツール、ライブラリ、派生モデルと、記事・動画・APIサービスの一覧。"
licenseSource: "github-sindresorhus-awesome-whisper-readme-md"
---

# Awesome Whisper

Whisperは、OpenAIが開発したオープンソースの音声認識システムです。文字起こし用アプリ、Webインターフェース、CLIツール、ライブラリ、派生モデルに加え、導入の参考になる記事・動画やAPIサービスを探せます。

## 公式

- [Whisperの紹介](https://openai.com/research/whisper)
- [ソースコード](https://github.com/openai/whisper)
- [技術論文](https://cdn.openai.com/papers/whisper.pdf)

## モデルの派生版

- [Whisper.cpp](https://github.com/ggerganov/whisper.cpp) - C++ による Whisper の移植版。
	- [各言語向けのバインディング](https://github.com/ggerganov/whisper.cpp#bindings)
- [WhisperX](https://github.com/m-bain/whisperX) - 単語単位のタイムスタンプと話者ダイアライゼーションを備えた高速な自動話者認識を追加する。
- [faster-whisper](https://github.com/guillaumekln/faster-whisper) - CTranslate2 を用いる Whisper の高速な再実装。
- [Whisper JAX](https://github.com/sanchit-gandhi/whisper-jax) - TPU で最大 70 倍の高速化を実現する Whisper の JAX 実装。
- [whisper-timestamped](https://github.com/linto-ai/whisper-timestamped) - 単語単位のタイムスタンプと信頼度スコアを追加する。
- [whisper-openvino](https://github.com/zhuzilin/whisper-openvino) - OpenVINO 上で動作する Whisper。
- [whisper.tflite](https://github.com/usefulsensors/openai-whisper) - TensorFlow Lite 上で動作する Whisper。
- [Whisperの派生モデル](https://huggingface.co/models?other=whisper) - Hugging Face上のさまざまなWhisper派生モデル。
- [Whisper-AT](https://github.com/YuanGongND/whisper-at) - 発話に加え、発話以外の音響イベントも認識できるWhisper。

## アプリ

FOSSはフリー／オープンソースソフトウェアを指します。

- [Aiko](https://sindresorhus.com/aiko) - 音声文字起こし用 iOS・macOS アプリ。
- [MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) - 音声文字起こし用 macOS アプリ。（フリーミアム）
- [Whisper Memos](https://apps.apple.com/app/id6443658039) - 音声文字起こし用 iOS アプリ。（フリーミアム）
- [FourYou](https://apps.apple.com/app/id1671616134) - 音声日記用 iOS アプリ。
- [Jojo Transcribe](https://apps.apple.com/app/id1659864300) - 音声文字起こし用 macOS アプリ。
- [Buzz](https://github.com/chidiwilliams/Buzz) - 音声文字起こし・翻訳用 macOS アプリ。
- [WhisperScript](https://store.getwavery.com/l/whisperscript) - 音声文字起こし用 macOS アプリ。（フリーミアム・Electron）
- [Audio Podium](https://apps.apple.com/app/id6449008295) - 音声・動画管理用 macOS アプリ。
- [superwhisper](https://superwhisper.com) - システム全体で音声文字起こしを利用できるmacOSメニューバーアプリ。
- [TypeWhisper](https://github.com/TypeWhisper/typewhisper-mac) - システム全体の音声入力に対応する、macOS・Windows向けローカル文字起こし。
- [Speech Note](https://github.com/mkiol/dsnote) - 音声文字起こし用 Linux アプリ。
- [FridayGPT](https://www.fridaygpt.app) - OpenAI APIを利用するmacOS音声入力アプリ。
- [EasyWhisper](https://easywhisper.io) - 音声文字起こし・話者ダイアライゼーション用 Windows・macOS アプリ。（フリーミアム）
- [Audio Note](https://audionote.app) - macOS・Windows 用のリアルタイム音声文字起こし。（フリーミアム・Electron）
- [Whisper](https://github.com/woheller69/whisperIME) - 文字起こし・翻訳用 Android アプリ。（FOSS）
- [VoiceInk](https://github.com/Beingpax/VoiceInk) - macOSの音声入力・文字起こしアプリ。（FOSS）
- [Ito AI](https://github.com/heyito/ito) - Mac向けAI音声入力。（FOSS）
- [OpenSuperWhisper](https://github.com/Starmel/OpenSuperWhisper) - macOS向け音声入力アプリ。（FOSS）
- [Screenpipe](https://screenpi.pe) - 画面・音声を24時間・週7日ローカルで記録し、AI検索できるツール。（FOSS）

## Web アプリ

### ホスト型

- [bigWav](https://bigwav.app) - 音声文字起こし・注釈ツール。
- [Free Podcast Transcription](https://freepodcasttranscription.com) - ブラウザー内でローカルに動作。
- [Gladia](https://www.gladia.io) - リアルタイム処理による文字起こし。
- [Whisper-Web](https://github.com/PierreMesure/whisper-web) - 複数言語向けにファインチューニング・最適化したモデルを使用し、WebGPUでローカルに文字起こし。（FOSS）

### セルフホスト型

- [Subs AI](https://github.com/abdeladim-s/subsai) - 字幕生成。
- [WaaS](https://github.com/schibsted/WAAS) - Whisper 用 GUI と API。
- [writeout.ai](https://github.com/beyondcode/writeout.ai) - 音声ファイルを文字起こし・翻訳する Laravel アプリ。
- [Meeper](https://github.com/pas1ko/meeper) - 会議や任意のブラウザータブ向けの文字起こし、要約など。（Chrome アプリ）

## CLI ツール

- [yt-whisper](https://github.com/m1guelpf/yt-whisper) - YouTube 字幕生成。
- [phonix](https://github.com/platisd/phonix) - 動画用キャプションの生成。
- [whisper-standalone-win](https://github.com/Purfview/whisper-standalone-win) - Whisper と Faster Whisper 用のスタンドアロン Windows 実行ファイル。
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - CTranslate2 に基づきオリジナルと互換性のある Whisper コマンドラインツール。
- [insanely-fast-whisper-cli](https://github.com/ochen1/insanely-fast-whisper-cli) - 複数の最適化により、実時間の約30倍に近い文字起こし速度を実現。
- [whisper-diarization](https://github.com/MahmoudAshraf97/whisper-diarization) - 話者ダイアライゼーションを備える自動音声認識。
- [hns](https://github.com/primaprashant/hns) - faster-whisperを用いて端末上で文字起こしを行い、結果をクリップボードへ自動コピーするCLI。

## プレイグラウンド

- [Hugging Face](https://huggingface.co/spaces/openai/whisper) - Hugging Face上で動作するWhisperデモ。（[ソースコード](https://huggingface.co/spaces/openai/whisper/tree/main)）
- [Monster API](https://whisperui.monsterapi.ai) - Monster API上で動作するWhisperデモ。（[ソースコード](https://github.com/saharmor/whisper-playground)）
- [Web Whisper](https://whisper.r3d.red) - PlujaによるWhisperデモ。（[ソースコード](https://codeberg.org/pluja/web-whisper)）
- [YouTube Video Transcription](https://github.com/ArthurFDLR/whisper-youtube) - Colab上で動作。

## パッケージ

### JavaScript

- [use-whisper](https://github.com/chengsokdara/use-whisper) - Reactフック。

## 記事

- [Whispers of A.I.'s Modular Future](https://www.newyorker.com/tech/annals-of-technology/whispers-of-ais-modular-future) - 機械学習の未来は、適応性とアクセス性を備えたオープンソース音声文字起こしプログラムにある。
- [How to Run Whisper Speech Recognition Model](https://www.assemblyai.com/blog/how-to-run-openais-whisper-speech-recognition-model/) - モデルのインストール・実行方法と、Whisper を他モデルと比較する性能分析を解説する。
- [Create your own speech to text app using Flask](https://blog.paperspace.com/whisper-openai-flask-application-deployment/) - Whisper の音声テキスト化モデル、Gradient Notebook での実行デモ、Gradient Deployments を使用する Flask アプリの設定ガイドを紹介するチュートリアル。
- [Convert Podcasts to Text](https://betterprogramming.pub/openais-whisper-tutorial-42140dd696ee) - Whisper API を Python で音声テキスト化に使うチュートリアル。GPU の高速な文字起こしと高度な技術を紹介する。

## 動画

- [Open AI's Whisper is Amazing!](https://www.youtube.com/watch?v=OCBZtgQGt1I) - Whisper の紹介。
- [How to do Free Speech-to-Text Transcription Better Than Google Premium API](https://www.youtube.com/watch?v=msj3wuYf3d8) - チュートリアル。
- [Multilingual AI Speech Recognition Live App](https://www.youtube.com/watch?v=ywIyc8l1K1Q) - チュートリアル。

## コミュニティ

- [ディスカッション](https://github.com/openai/whisper/discussions)
- [Discord](https://discord.com/invite/openai)

## サードパーティ API

Whisperを利用するAPIサービス。

- [Whisper+](https://www.oneai.com/speech-to-text) - 話者識別、カスタム語彙、要約、チャプター生成機能を備えたWhisperモデルの拡張。
- [Replicate](https://replicate.com/openai/whisper) - Replicate上で動作するWhisperを利用。

## 関連リスト

- [awesome-chatgpt](https://github.com/sindresorhus/awesome-chatgpt) - ChatGPT関連資料。
