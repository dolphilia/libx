---
title: "ZYSzys/awesome-captcha"
description: "ZYSzys/awesome-captcha の定本スナップショット"
licenseSource: "github-ZYSzys-awesome-captcha-readme-md"
---

# Awesome Captcha [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 優れた CAPTCHA ライブラリと CAPTCHA 解析ツールの厳選リスト。

[CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA) は、ユーザーが人間かどうかを判定するためにコンピューティングで用いられるチャレンジレスポンス型テストの一種です。


[English](https://github.com/ZYSzys/awesome-captcha/blob/51b13f4b94696ae0bc6e73e0184443f9b65a7a22/README.md) | [中文](https://github.com/ZYSzys/awesome-captcha/blob/51b13f4b94696ae0bc6e73e0184443f9b65a7a22/README-zh.md) | [Polish](https://github.com/ZYSzys/awesome-captcha/blob/51b13f4b94696ae0bc6e73e0184443f9b65a7a22/README-pl.md)

## 目次

- [ライブラリ](#libraries)
- [生成](#generation)
- [解析](#crack)
  - [一般](#general)
  - [中国語](#chinese)
- [ツール](#tools)
- [その他](#other)
- [メンテナー](#maintainers)


## ライブラリ

- [mewebstudio/captcha](https://github.com/mewebstudio/captcha) - Laravel 5 向け Captcha。
- [CGregwar/Captcha](https://github.com/Gregwar/Captcha) - PHP Captcha ライブラリ。
- [trekjs/captcha](https://github.com/trekjs/captcha) - Node.js 向け軽量・純粋 JavaScript Captcha。C/C++、ImageMagick、Canvas は不要。
- [patchca](https://code.google.com/archive/p/patchca) - Java で書かれたシンプルながら強力な CAPTCHA ライブラリ。
- [google/recaptcha](https://github.com/google/recaptcha) - Web サイトをスパム・不正利用から保護する無料サービス reCAPTCHA 用 PHP クライアントライブラリ。
- [ambethia/recaptcha](https://github.com/ambethia/recaptcha) - Ruby アプリ向け ReCaptcha ヘルパー。
- [anhskohbo/no-captcha](https://github.com/anhskohbo/no-captcha) - Laravel 向け No CAPTCHA reCAPTCHA。
- [lorien/captcha_solver](https://github.com/lorien/captcha_solver) - さまざまな CAPTCHA 解決サービス向けの汎用 Python API。


## 生成
- [captcha-api](https://captcha-api.akshit.me) - AI 搭載の、無料・高速・信頼性の高い Captcha API。
- [dchest/captcha](https://github.com/dchest/captcha) - Go パッケージ captcha は画像・音声 CAPTCHA の生成と検証を実装する。
- [lepture/captcha](https://github.com/lepture/captcha) - 音声・画像 CAPTCHA を生成する captcha ライブラリ。
- [lemonce/svg-captcha](https://github.com/lemonce/svg-captcha) - Node.js で SVG captcha を生成する。
- [DoubleSpout/ccap](https://github.com/DoubleSpout/ccap) - 他のライブラリやソフトウェアをインストールせず、C++ ライブラリ CImg を使って Node.js で captcha を生成する。
- [contra/captchagen](https://github.com/contra/captchagen) - Node.js 用 Captcha 生成。
- [jineshfrancs/CaptchaImageView](https://github.com/jineshfrancs/CaptchaImageView) - Captcha 画像を生成するカスタム ImageView。
- [mcxtzhang/SwipeCaptcha](https://github.com/mcxtzhang/SwipeCaptcha) - Android プラットフォーム向けスワイプ captcha。
- [mojocn/base64Captcha](https://github.com/mojocn/base64Captcha) - 数字、数値、英字、算術、音声、英数字 captcha をサポートする Golang base64-captcha。
- [koto-bank/kocaptcha](https://github.com/koto-bank/kocaptcha) - Rust で書かれた、単一 API エンドポイントを持つシンプルな captcha サービス。
- [Captcheck](https://captcheck.netsyms.com) - PHP 7・MySQL で書かれた軽量セルフホスト型 CAPTCHA サービス。Font-Awesome のアイコン選択肢を使用する。テキストのみのアクセシビリティモードとキーボードのみの操作をサポート。
- [Securimage](https://www.phpcaptcha.org) - オープンソースで無料の PHP Captcha スクリプト。
- [Lokno/click-captcha](https://github.com/Lokno/click-captcha) - 人間認証用の視覚的・クリックベース CAPTCHA。
- [ArgoZhang/SliderCaptcha](https://github.com/ArgoZhang/SliderCaptcha) - モバイル対応のスライダー captcha。


## 解析

### 一般
- [arunpatala/captcha](https://github.com/arunpatala/captcha) - torch を使った captcha 解析。
- [zakizhou/CAPTCHA](https://github.com/zakizhou/CAPTCHA) - TensorFlow で CAPTCHA の分類を実装する。
- [nladuo/captcha-break](https://github.com/nladuo/captcha-break) - opencv2、tesseract-ocr、機械学習アルゴリズムに基づく Captcha 解析。
- [ypwhs/captcha_break](https://github.com/ypwhs/captcha_break) - Keras を用いる CNN による Captcha 解析。
- [ptigas/simple-captcha-solver](https://github.com/ptigas/simple-captcha-solver) - Python によるシンプルな CAPTCHA ソルバー 🐍。
- [rickyhan/SimGAN-Captcha](https://github.com/rickyhan/SimGAN-Captcha) - トレーニングセットへ手動ラベル付けせずに captcha を解決する。
- [arunpatala/captcha.irctc](https://github.com/arunpatala/captcha.irctc) - 深層学習を用いて 98% の精度で irctc captcha を読み取る。
- [JackonYang/captcha-tensorflow](https://github.com/JackonYang/captcha-tensorflow) - TensorFlow・CNN モデルを用いる画像 Captcha 解決。
- [skyduy/CNN_keras](https://github.com/skyduy/CNN_keras) - CNN | Keras | CAPTCHA 認識（卷积神经网络、Keras框架、验证码识别）。
- [PatrickLib/captcha_recognize](https://github.com/PatrickLib/captcha_recognize) - 画像分割なしの画像認識 captcha。
- [zhengwh/captcha-svm](https://github.com/zhengwh/captcha-svm) - SVM を使いシンプルな captcha を解析する。
- [chxj1992/captcha_cracker](https://github.com/chxj1992/captcha_cracker) - CNN による captcha 解析。
- [chxj1992/slide_captcha_cracker](https://github.com/chxj1992/slide_captcha_cracker) - Canny アルゴリズムを用いるスライド captcha の解析ソリューション。
- [JasonLiTW/simple-railway-captcha-solver#english-version](https://github.com/JasonLiTW/simple-railway-captcha-solver#english-version) - captcha のスタイルを模倣するトレーニングセット生成器と CNN に基づくシンプルな captcha ソルバー。
- [lllcho/CAPTCHA-breaking](https://github.com/lllcho/CAPTCHA-breaking) - Captcha 解析。
- [ecthros/uncaptcha](https://github.com/ecthros/uncaptcha) - Google の音声 reCaptcha を 85% の精度で突破する。
- [dessant/buster](https://github.com/dessant/buster) - 人間とモンスター向け Captcha ソルバー拡張。
- [kerlomz/captcha_trainer](https://github.com/kerlomz/captcha_trainer) - CNN5/DenseNet+BLSTM/LSTM+CTC に基づき検証コード認識を実現する。モデル訓練専用。

### 中国語
- [burness/chinese_hand_write_rec](https://github.com/burness/tensorflow-101/tree/master/chinese_hand_write_rec/src) - 手書き中国語認識。
- [taosir/cnn_handwritten_chinese_recognition](https://github.com/taosir/cnn_handwritten_chinese_recognition) - 名前の通り、CNN による手書き中国語認識。
- [soloice/Chinese-Character-Recognition](https://github.com/soloice/Chinese-Character-Recognition) - MNIST 数字認識より複雑な課題である中国語文字認識に CNN を使用する方法を示す。
- [muchrooms/zheye](https://github.com/muchrooms/zheye) - Zhihu の倒立文字用中国語 captcha 認識プログラム。
- [aaronshan/12306-captcha](https://github.com/aaronshan/12306-captcha) - 深層学習を使い 12306 captcha を認識する。
- [nickliqian/cnn_captcha](https://github.com/nickliqian/cnn_captcha) - TensorFlow を用いる CNN で captcha を認識する。


## ツール

- [Tesseract](https://github.com/tesseract-ocr/tesseract) - Tesseract オープンソース OCR エンジン。
- [MotionCAPTCHA](https://github.com/wjcrowcroft/MotionCAPTCHA) - MotionCAPTCHA jQuery プラグイン。スパムを止め、形を描く。
- [Negative-captcha](https://github.com/subwindow/negative-captcha) - Rails でネガティブ captcha を作るプロセスを大幅に簡単にするプラグイン。
- [Django-simple-captcha](https://github.com/mbi/django-simple-captcha) - 任意の Django フォームへ captcha 画像を追加する、非常にシンプルかつ高度にカスタマイズ可能な Django アプリケーション。
- [Securimage](https://github.com/dapphp/securimage) - PHP CAPTCHA スクリプト。
- [Captcha_solver](https://github.com/lorien/captcha_solver) - Captcha 解決サービス向けの汎用 API。


## その他

- [VisualCaptcha](https://github.com/emotionLoop/visualCaptcha) - visualCaptcha の異なるすべてのバージョン・リポジトリーのコレクション。
- [Hashcash for PHP/JavaScript forms](https://github.com/007/hashcash-js) - proof-of-work に基づく、スパム対策用 captcha の代替。


## メンテナー

- [@ZYSzys](https://github.com/ZYSzys)


## 貢献

ぜひどうぞ。[contributing.md](https://github.com/ZYSzys/awesome-captcha/blob/51b13f4b94696ae0bc6e73e0184443f9b65a7a22/contributing.md) ファイルを確認するか、[issue を作成](https://github.com/ZYSzys/awesome-captcha/issues/new)してください。


## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律の許す限り、[ZYSzys](https://github.com/ZYSzys) はこの作品に関するすべての著作権および関連する権利・隣接権を放棄しています。
