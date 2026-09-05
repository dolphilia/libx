---
title: "Awesome Software Engineering for Machine Learning"
description: "Software Engineering for Machine Learningを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-SE-ML-awesome-seml-readme-md"
---

# Awesome Software Engineering for Machine Learning

Software Engineering for Machine Learningを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [幅広い概観](#broad-overviews)
- [データ管理](#data-management)
- [モデル訓練](#model-training)
- [デプロイと運用](#deployment-and-operation)
- [社会的側面](#social-aspects)
- [ガバナンス](#governance)
- [ツール](#tooling)

## 幅広い概観

これらのリソースはあらゆる側面を扱います。
- [AI Engineering: 11 Foundational Practices](https://resources.sei.cmu.edu/asset_files/WhitePaper/2019_019_001_634648.pdf) ⭐
- [Best Practices for Machine Learning Applications](https://pdfs.semanticscholar.org/2869/6212a4a204783e9dd3953f06e103c02c6972.pdf)
- [Engineering Best Practices for Machine Learning](https://se-ml.github.io/practices/) ⭐
- [Hidden Technical Debt in Machine Learning Systems](https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf) 🎓⭐
- [Rules of Machine Learning: Best Practices for ML Engineering](https://developers.google.com/machine-learning/guides/rules-of-ml) ⭐
- [Software Engineering for Machine Learning: A Case Study](https://www.microsoft.com/en-us/research/publication/software-engineering-for-machine-learning-a-case-study/) 🎓⭐

## データ管理

機械学習で使うデータセットの管理方法。

- [A Survey on Data Collection for Machine Learning A Big Data - AI Integration Perspective_2019](https://deepai.org/publication/a-survey-on-data-collection-for-machine-learning-a-big-data-ai-integration-perspective) 🎓
- [Automating Large-Scale Data Quality Verification](http://www.vldb.org/pvldb/vol11/p1781-schelter.pdf) 🎓
- [Data management challenges in production machine learning](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/46178.pdf)
- [Data Validation for Machine Learning](https://mlsys.org/Conferences/2019/doc/2019/167.pdf) 🎓
- [How to organize data labelling for ML](https://www.altexsoft.com/blognp/datascience/how-to-organize-data-labeling-for-machine-learning-approaches-and-tools/)
- [The curse of big data labeling and three ways to solve it](https://aws.amazon.com/blogs/apn/the-curse-of-big-data-labeling-and-three-ways-to-solve-it/)
- [The Data Linter: Lightweight, Automated Sanity Checking for ML Data Sets](http://learningsys.org/nips17/assets/papers/paper_19.pdf) 🎓
- [The ultimate guide to data labeling for ML](https://www.cloudfactory.com/data-labeling-guide)

## モデル訓練

モデル訓練実験の整理方法。

- [10 Best Practices for Deep Learning](https://nanonets.com/blog/10-best-practices-deep-learning/#track-model-experiments)
- [Apples-to-apples in cross-validation studies: pitfalls in classifier performance measurement](https://dl.acm.org/doi/abs/10.1145/1882471.1882479) 🎓
- [Fairness On The Ground: Applying Algorithmic FairnessApproaches To Production Systems](https://scontent-amt2-1.xx.fbcdn.net/v/t39.8562-6/159714417_1180893265647073_4215201353052552221_n.pdf?_nc_cat=111&ccb=1-3&_nc_sid=ae5e01&_nc_ohc=6WFnNMmyp68AX95bRHk&_nc_ht=scontent-amt2-1.xx&oh=7a548f822e659b7bb2f58a511c30ee19&oe=606F33AD)🎓
- [How do you manage your Machine Learning Experiments?](https://medium.com/@hadyelsahar/how-do-you-manage-your-machine-learning-experiments-ab87508348ac)
- [Machine Learning Testing: Survey, Landscapes and Horizons](https://arxiv.org/pdf/1906.10742.pdf) 🎓
- [Nitpicking Machine Learning Technical Debt](https://matthewmcateer.me/blog/machine-learning-technical-debt/)
- [On Comparing Classifiers: Pitfalls to Avoid and a Recommended Approach](https://link.springer.com/article/10.1023/A:1009752403260) 🎓⭐
- [On human intellect and machine failures: Troubleshooting integrative machine learning systems](https://arxiv.org/pdf/1611.08309.pdf) 🎓
- [Pitfalls and Best Practices in Algorithm Configuration](https://www.jair.org/index.php/jair/article/download/11420/26488/) 🎓
- [Pitfalls of supervised feature selection](https://academic.oup.com/bioinformatics/article/26/3/440/213774) 🎓
- [Preparing and Architecting for Machine Learning](https://www.gartner.com/en/documents/3889770/preparing-and-architecting-for-machine-learning-2018-upd)
- [Preliminary Systematic Literature Review of Machine Learning System Development Process](https://arxiv.org/abs/1910.05528) 🎓
- [Software development best practices in a deep learning environment](https://towardsdatascience.com/software-development-best-practices-in-a-deep-learning-environment-a1769e9859b1)
- [Testing and Debugging in Machine Learning](https://developers.google.com/machine-learning/testing-debugging)
- [What Went Wrong and Why? Diagnosing Situated Interaction Failures in the Wild](https://www.microsoft.com/en-us/research/publication/what-went-wrong-and-why-diagnosing-situated-interaction-failures-in-the-wild/) 🎓

## デプロイと運用

本番環境でモデルをデプロイ・運用する方法。

- [Best Practices in Machine Learning Infrastructure](https://algorithmia.com/blog/best-practices-in-machine-learning-infrastructure)
- [Building Continuous Integration Services for Machine Learning](http://pages.cs.wisc.edu/~wentaowu/papers/kdd20-ci-for-ml.pdf) 🎓
- [Continuous Delivery for Machine Learning](https://martinfowler.com/articles/cd4ml.html) ⭐
- [Continuous Training for Production ML in the TensorFlow Extended (TFX) Platform](https://www.usenix.org/system/files/opml19papers-baylor.pdf) 🎓
- [Fairness Indicators: Scalable Infrastructure for Fair ML Systems](https://ai.googleblog.com/2019/12/fairness-indicators-scalable.html) 🎓
- [Machine Learning Logistics](https://mapr.com/ebook/machine-learning-logistics/)
- [Machine learning: Moving from experiments to production](https://blog.codecentric.de/en/2019/03/machine-learning-experiments-production/)
- [ML Ops: Machine Learning as an engineered disciplined](https://towardsdatascience.com/ml-ops-machine-learning-as-an-engineering-discipline-b86ca4874a3f)
- [Model Governance Reducing the Anarchy of Production](https://www.usenix.org/conference/atc18/presentation/sridhar) 🎓
- [ModelOps: Cloud-based lifecycle management for reliable and trusted AI](http://hummer.io/docs/2019-ic2e-modelops.pdf)
- [Operational Machine Learning](https://www.kdnuggets.com/2018/04/operational-machine-learning-successful-mlops.html)
- [Scaling Machine Learning as a Service](http://proceedings.mlr.press/v67/li17a/li17a.pdf)🎓
- [TFX: A tensorflow-based Production-Scale ML Platform](https://dl.acm.org/doi/pdf/10.1145/3097983.3098021?download=true) 🎓
- [The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction](https://research.google/pubs/pub46555/) 🎓
- [Underspecification Presents Challenges for Credibility in Modern Machine Learning](https://arxiv.org/abs/2011.03395) 🎓
- [Versioning for end-to-end machine learning pipelines](https://doi.org/10.1145/3076246.3076248) 🎓

## 社会的側面

効果的なコラボレーションと説明責任を確保するため、チーム・プロジェクトを組織する方法。

- [Data Scientists in Software Teams: State of the Art and Challenges](http://web.cs.ucla.edu/~miryung/Publications/tse2017-datascientists.pdf) 🎓
- [Machine Learning Interviews](https://github.com/chiphuyen/machine-learning-systems-design/blob/master/build/build1/consolidated.pdf)
- [Managing Machine Learning Projects](https://d1.awsstatic.com/whitepapers/aws-managing-ml-projects.pdf)
- [Principled Machine Learning: Practices and Tools for Efficient Collaboration](https://dev.to/robogeek/principled-machine-learning-4eho)

## ガバナンス
- [A Human-Centered Interpretability Framework Based on Weight of Evidence](https://arxiv.org/pdf/2104.13299.pdf) 🎓
- [An Architectural Risk Analysis Of Machine Learning Systems](https://berryvilleiml.com/docs/ara.pdf)
- [Beyond Debiasing](https://complexdiscovery.com/wp-content/uploads/2021/09/EDRi-Beyond-Debiasing-Report.pdf)
- [Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing](https://dl.acm.org/doi/pdf/10.1145/3351095.3372873) 🎓
- [Inherent trade-offs in the fair determination of risk scores](https://arxiv.org/abs/1609.05807) 🎓
- [Responsible AI practices](https://ai.google/responsibilities/responsible-ai-practices/) ⭐
- [Toward Trustworthy AI Development: Mechanisms for Supporting Verifiable Claims](https://arxiv.org/abs/2004.07213)
- [Understanding Software-2.0](https://dl.acm.org/doi/abs/10.1145/3453478) 🎓

## ツール

ツールは作業を容易にできます。

ここではオープンソースツール、または研究向けに実質的な無料パッケージを提供する商用プラットフォームだけを共有します。

- [Aim](https://aimstack.io) - オープンソースの実験追跡ツール。
- [Airflow](https://airflow.apache.org/) - ワークフローをプログラムで作成、スケジュール、監視する。
- [Alibi Detect](https://github.com/SeldonIO/alibi-detect) - 外れ値、敵対的サンプル、ドリフト検出に焦点を置くPythonライブラリ。
- [Archai](https://github.com/microsoft/archai) - ニューラルアーキテクチャ探索。
- [Data Version Control (DVC)](https://dvc.org/) - データ・ML実験管理ツール。
- [Facets Overview / Facets Dive](https://pair-code.github.io/facets/) - 機械学習データセットの理解を助ける堅牢な可視化。
- [FairLearn](https://fairlearn.github.io/) - 機械学習モデルの公平性を評価・改善するツールキット。
- [Git Large File System (LFS)](https://git-lfs.github.com/) - データセットなどの大きなファイルをGit内のテキストポインターに置き換える。
- [Great Expectations](https://github.com/great-expectations/great_expectations) - パイプライン統合を備えたデータ検証・テスト。
- [HParams](https://github.com/PetrochukM/HParams) - 機械学習プロジェクト向けの慎重な設定管理アプローチ。
- [Kubeflow](https://www.kubeflow.org/) - MLパイプラインを構築・実験したいデータサイエンティスト向けプラットフォーム。
- [Label Studio](https://github.com/heartexlabs/label-studio) - 標準化された出力形式を持つ複数種類のデータラベル付け・アノテーションツール。
- [LiFT](https://github.com/linkedin/LiFT) - LinkedInの公平性ツールキット。
- [MLFlow](https://mlflow.org/) - 実験、デプロイ、中央モデルレジストリを含むMLライフサイクルを管理する。
- [Model Card Toolkit](https://github.com/tensorflow/model-card-toolkit) - モデルドキュメント用のモデルカード生成を合理化・自動化する。
- [Neptune.ai](https://neptune.ai/) - データサイエンスプロジェクトへ組織化・コラボレーションをもたらす実験追跡ツール。
- [Neuraxle](https://github.com/Neuraxio/Neuraxle) - 深層学習プロジェクトのハイパーパラメーター調整・AutoML向けSklearn風フレームワーク。
- [OpenML](https://www.openml.org) - 機械学習のためのオープンで組織化されたオンラインエコシステムを構築する包括的な運動。
- [PyTorch Lightning](https://github.com/PyTorchLightning/pytorch-lightning) - 高性能AI研究向けの軽量PyTorchラッパー。ボイラープレートではなくモデルをスケールする。
- [REVISE: REvealing VIsual biaSEs](https://github.com/princetonvisualai/revise-tool) - 視覚データセット内のバイアスを自動検出する。
- [Robustness Metrics](https://github.com/google-research/robustness_metrics) - 分類モデルのロバスト性を評価する軽量モジュール。
- [Seldon Core](https://github.com/SeldonIO/seldon-core) - Kubernetes上で数千の本番機械学習モデルをパッケージ化、デプロイ、監視、管理するMLOpsフレームワーク。
- [Spark Machine Learning](https://spark.apache.org/mllib/) - 一般的な学習アルゴリズム・ユーティリティから成るSparkのMLライブラリ。
- [TensorBoard](https://www.tensorflow.org/tensorboard/) - TensorFlowの可視化ツールキット。
- [Tensorflow Extended (TFX)](https://www.tensorflow.org/tfx/) - 本番MLパイプラインをデプロイするエンドツーエンドプラットフォーム。
- [Tensorflow Data Validation (TFDV)](https://github.com/tensorflow/data-validation) - 機械学習データを探索・検証するライブラリ。Great Expectationsに似るがTensorflowデータ向け。
- [Weights & Biases](https://www.wandb.com/) - 実験追跡、モデル最適化、データセットバージョニング。

## 寄稿

寄稿を歓迎します！まず[寄稿ガイドライン](https://github.com/SE-ML/awesome-seml/blob/4206c9e6c39bef01f40b33d99c970fccb83b365b/contributing.md)を読んでください。
