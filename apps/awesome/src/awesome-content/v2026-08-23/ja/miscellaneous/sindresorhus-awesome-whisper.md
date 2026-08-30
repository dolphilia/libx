---
title: "sindresorhus/awesome-whisper"
description: "sindresorhus/awesome-whisper の定本スナップショット"
licenseSource: "github-sindresorhus-awesome-whisper-readme-md"
---

<div align="center">
	<br>
	<br>
	<div>
		<img src="media/logo.png" alt="Awesome Whisper">
		<br>
	</div>
	<br>
	<p>
		<a href="https://openai.com/research/whisper">Whisper</a> は <a href="https://openai.com">OpenAI</a> が開発した、オープンソースの AI 搭載音声認識システムです。
	</p>
	<br>
	<a href="https://awesome.re">
		<img src="https://awesome.re/badge-flat2.svg" alt="Awesome">
	</a>
	<br>
	<br>
	<br>
	<br>
	<br>
</div>

## 目次

- [公式](#official)
- [モデルの派生版](#model-variants)
- [アプリ](#apps)
- [Web アプリ](#web-apps)
- [CLI ツール](#cli-tools)
- [プレイグラウンド](#playgrounds)
- [パッケージ](#packages)
- [記事](#articles)
- [動画](#videos)
- [コミュニティ](#community)
- [サードパーティ API](#third-party-apis)
- [関連リスト](#related-lists)

## 公式

- [Introduction](https://openai.com/research/whisper)
- [Source code](https://github.com/openai/whisper)
- [White paper](https://cdn.openai.com/papers/whisper.pdf)

## モデルの派生版

- [Whisper.cpp](https://github.com/ggerganov/whisper.cpp) - C++ による Whisper の移植版。
	- [Bindings for many languages](https://github.com/ggerganov/whisper.cpp#bindings)
- [WhisperX](https://github.com/m-bain/whisperX) - 単語単位のタイムスタンプと話者ダイアライゼーションを備えた高速な自動話者認識を追加する。
- [faster-whisper](https://github.com/guillaumekln/faster-whisper) - CTranslate2 を用いる Whisper の高速な再実装。
- [Whisper JAX](https://github.com/sanchit-gandhi/whisper-jax) - TPU で最大 70 倍の高速化を実現する Whisper の JAX 実装。
- [whisper-timestamped](https://github.com/linto-ai/whisper-timestamped) - 単語単位のタイムスタンプと信頼度スコアを追加する。
- [whisper-openvino](https://github.com/zhuzilin/whisper-openvino) - OpenVINO 上で動作する Whisper。
- [whisper.tflite](https://github.com/usefulsensors/openai-whisper) - TensorFlow Lite 上で動作する Whisper。
- [Whisper variants](https://huggingface.co/models?other=whisper) - Hugging Face 上のさまざまな Whisper 派生版。
- [Whisper-AT](https://github.com/YuanGongND/whisper-at) - 音声に加え、非音声の音響イベントも認識できる Whisper。

## アプリ

- [Aiko](https://sindresorhus.com/aiko) - 音声文字起こし用 iOS・macOS アプリ。
- [MacWhisper](https://goodsnooze.gumroad.com/l/macwhisper) - 音声文字起こし用 macOS アプリ。（フリーミアム）
- [Whisper Memos](https://apps.apple.com/app/id6443658039) - 音声文字起こし用 iOS アプリ。（フリーミアム）
- [FourYou](https://apps.apple.com/app/id1671616134) - 音声日記用 iOS アプリ。
- [Jojo Transcribe](https://apps.apple.com/app/id1659864300) - 音声文字起こし用 macOS アプリ。
- [Buzz](https://github.com/chidiwilliams/Buzz) - 音声文字起こし・翻訳用 macOS アプリ。
- [WhisperScript](https://store.getwavery.com/l/whisperscript) - 音声文字起こし用 macOS アプリ。（フリーミアム・Electron）
- [Audio Podium](https://apps.apple.com/app/id6449008295) - 音声・動画管理用 macOS アプリ。
- [superwhisper](https://superwhisper.com) - グローバル音声文字起こし用 macOS メニューバーアプリ。
- [TypeWhisper](https://github.com/TypeWhisper/typewhisper-mac) - システム全体のディクテーションに対応する、macOS・Windows 向けローカル音声テキスト化。
- [Speech Note](https://github.com/mkiol/dsnote) - 音声文字起こし用 Linux アプリ。
- [FridayGPT](https://www.fridaygpt.app) - OpenAI API 搭載のディクテーション用 macOS アプリ。
- [EasyWhisper](https://easywhisper.io) - 音声文字起こし・話者ダイアライゼーション用 Windows・macOS アプリ。（フリーミアム）
- [Audio Note](https://audionote.app) - macOS・Windows 用のリアルタイム音声文字起こし。（フリーミアム・Electron）
- [Whisper](https://github.com/woheller69/whisperIME) - 文字起こし・翻訳用 Android アプリ。（FOSS）
- [VoiceInk](https://github.com/Beingpax/VoiceInk) - ディクテーション・文字起こし用 macOS アプリ。（FOSS）
- [Ito AI](https://github.com/heyito/ito) - Mac 向け AI 音声ディクテーション。（FOSS）
- [OpenSuperWhisper](https://github.com/Starmel/OpenSuperWhisper) - macOS 向けディクテーションアプリ。（FOSS）
- [Screenpipe](https://screenpi.pe) - AI 検索機能付きの 24 時間ローカル画面・音声録画。（FOSS）

## Web アプリ



### ホスト型

- [bigWav](https://bigwav.app) - 音声文字起こし・注釈ツール。
- [Free Podcast Transcription](https://freepodcasttranscription.com) - ブラウザー内でローカル実行する。
- [Gladia](https://www.gladia.io) - リアルタイム処理による文字起こし。
- [Whisper-Web](https://github.com/PierreMesure/whisper-web) - 複数言語用に最適化・ファインチューニングしたモデルを用いる WebGPU によるローカル文字起こし。（FOSS）

### セルフホスト型

- [Subs AI](https://github.com/abdeladim-s/subsai) - 字幕生成。
- [WaaS](https://github.com/schibsted/WAAS) - Whisper 用 GUI と API。
- [writeout.ai](https://github.com/beyondcode/writeout.ai) - 音声ファイルを文字起こし・翻訳する Laravel アプリ。
- [Meeper](https://github.com/pas1ko/meeper) - 会議や任意のブラウザータブ向けの文字起こし、要約など。（Chrome アプリ）

## CLI ツール

- [yt-whisper](https://github.com/m1guelpf/yt-whisper) - YouTube 字幕生成。
- [phonix](https://github.com/platisd/phonix) - 動画用キャプションを生成する。
- [whisper-standalone-win](https://github.com/Purfview/whisper-standalone-win) - Whisper と Faster Whisper 用のスタンドアロン Windows 実行ファイル。
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - CTranslate2 に基づきオリジナルと互換性のある Whisper コマンドラインツール。
- [insanely-fast-whisper-cli](https://github.com/ochen1/insanely-fast-whisper-cli) - いくつかの最適化により、実時間の約 30 倍に近い文字起こし速度を達成する。
- [whisper-diarization](https://github.com/MahmoudAshraf97/whisper-diarization) - 話者ダイアライゼーションを備える自動音声認識。
- [hns](https://github.com/primaprashant/hns) - 自動クリップボードコピー付き faster-whisper を使うオンデバイス音声テキスト化 CLI。

## プレイグラウンド

- [Hugging Faces](https://huggingface.co/spaces/openai/whisper) - Hugging Face 上で動作する Whisper デモ。([Source](https://huggingface.co/spaces/openai/whisper/tree/main))
- [Monster API](https://whisperui.monsterapi.ai) - Monster API 上で動作する Whisper デモ。([Source](https://github.com/saharmor/whisper-playground))
- [Web Whisper](https://whisper.r3d.red) - Pluja による Whisper デモ。([Source](https://codeberg.org/pluja/web-whisper))
- [YouTube Video Transcription](https://github.com/ArthurFDLR/whisper-youtube) - Colab 上で動作する。

## パッケージ

### JavaScript

- [use-whisper](https://github.com/chengsokdara/use-whisper) - React hook。

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

- [Discussions](https://github.com/openai/whisper/discussions)
- [Discord](https://discord.com/invite/openai)

## サードパーティ API

*Whisper を使用する API。*

- [Whisper+](https://www.oneai.com/speech-to-text) - 話者識別、カスタム語彙、要約、チャプター生成などの強力な機能を追加する Whisper モデルの拡張。
- [Replicate](https://replicate.com/openai/whisper) - Replicate 上で動作する Whisper を使用する。

## 関連リスト

- [awesome-chatgpt](https://github.com/sindresorhus/awesome-chatgpt) - ChatGPT リソース。
