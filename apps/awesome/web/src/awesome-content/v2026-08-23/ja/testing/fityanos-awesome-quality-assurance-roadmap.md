---
title: "Awesome Quality Assurance Roadmap"
description: "Quality Assurance Roadmapを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-fityanos-awesome-quality-assurance-roadmap-readme-md"
---

# Awesome Quality Assurance Roadmap

Quality Assurance Roadmapを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [はじめに](#introduction)
- [テスト計画書のサンプル](#test-plan-sample)
- [ロードマップ](#the-road-map)
- [助言](#advices)

## はじめに

テストはあらゆる製品ライフサイクルに不可欠な段階です。食品、自動車、ソフトウェアの生産ラインを問わず、成果物は期待どおりであり、製品を作った目的のニーズを満たさなければなりません。

ソフトウェアの構成要素がどのように動作・統合するかをしっかり理解し、物事を壊す技能を身に付けることは、QAエンジニアにとって必須のスキルセットです。ソフトウェアテストは、ソフトウェアを調査し、望ましくないシナリオにつながる意図しない振る舞いを見つける技術です。

以下に、学習を始める際に必要となるQAとソフトウェアテストの学習曲線への道筋を示します。

## テスト計画書のサンプル

QAチームが作成すべき最も重要な文書の一つがテスト計画書です。これがなければ、チームは基準、開始点、あるいはさまざまなテスト種別をいつ実施すべきかさえ分からずに行動することになり、納品全体を危険にさらし、品質の悪いコードを提供する原因になります。

テスト計画書のセクションと内容はプロジェクトや納品の性質によって異なります。そのため、添付のテスト計画書PDFは、あらゆるソフトウェアテストの納品目的に使える一般的なものと見なされています。

添付PDFは、ダウンロード用の[test_plan_sample.pdf](https://github.com/anas-qa/Quality-Assurance-Road-Map/blob/master/Test_Plan_Sample.pdf)で確認できます。

## ロードマップ

![QA Engineer Road Map 2022](https://i.imgur.com/cM9cM8T.png)
![QA Engineer Road Map 2022](https://i.imgur.com/meodAKp.png)

## 助言

- 失敗することを見ていないテストコードを信用してはいけません。

- ソフトウェアテストを理解し、自動化へすぐ飛びつかないでください。個人的には、自動化を冗長な作業を効率化する手段と分類しています。テスト基準を適切に設計してから、自動化して前述の成果を実現してください。

- 自動化は、手作業で書かれたテストを文書化し、コードを読みやすく、理解しやすく、再利用可能にするよう設計することに過ぎません。

- テストコードが実際に何かをテストしていることを確認してください。

- テストコード自体がテストを必要とするべきではありません。

- 200~OKが常に問題ないとは限りません。テスト中にサーバーステータスだけへ依存しないでください。認可されていないAPI呼び出しで200ステータスが返ることは、ソフトウェアセキュリティを危険にさらします。

## 貢献

貢献方法の詳細は[contributing.md](https://github.com/fityanos/awesome-quality-assurance-road-map/blob/master/contributing.md)を参照してください。
