---
title: "Awesome Kustomize"
description: "Kustomizeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-DevOpsHiveHQ-awesome-kustomize-readme-md"
---

# Awesome Kustomize

Kustomizeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [概要](#overview)
- [プラグイン](#plugins)
  - [Generator](#generators)
  - [Transformer](#transformers)
  - [Validator](#validators)
- [ガイド](#guides)
  - [初級](#novice)
  - [中級](#intermediate)
  - [上級](#advanced)
  - [ヒントとコツ](#tips--tricks)
- [スニペット](#snippets)
- [その他](#misc)
- [関連リスト](#related-lists)

## 概要

Kustomize は独立したバイナリとして動作し、v1.14 以降の `kubectl` にも組み込まれています。**Helm Chart** のような既製アプリケーションとともに使用できます。また、ArgoCD、Flux などの各種 **GitOps** ツールと深く統合されています。

## プラグイン

Kustomize には `generator`、`transformer`、`validator` の3種類のプラグインがあります。

> 注記
>
> プラグイン開発者には、新しいプラグイン標準である
> [KRM Function](https://github.com/kubernetes-sigs/kustomize/blob/master/cmd/config/docs/api-conventions/functions-spec.md)への対応を強く推奨します。

### Generator

- [Secretize](https://github.com/bbl/secretize) - さまざまなソースから Kubernetes Secret を生成。Kubernetes Secret 向けの万能ナイフのようなツール（コンテナー化 KRM、Exec KRM、Exec）。
- [SopsSecretGenerator](https://github.com/goabout/kustomize-sopssecretgenerator/) - sops で暗号化したファイルから Secret を生成（Exec KRM、Exec）。
- [KSops](https://github.com/viaduct-ai/kustomize-sops) - sops で暗号化したファイルから Secret を生成（Exec）。
- [PolicyGenerator](https://github.com/open-cluster-management-io/policy-generator-plugin) - Open Cluster Management ポリシーを生成（Exec）。
- [KRMFfnBuiltin](https://github.com/kaweezle/krmfnbuiltin) - 組み込み Generator と Transformer を実行（Exec）。
- [Merger](https://github.com/aabouzaid/kustomize-plugin-merger) - スキーマなしの StrategicMerge で Kustomize のマージ戦略を拡張し、マニフェストを円滑に生成（コンテナー化 KRM、Exec KRM）。

### Transformer

- [HelmValuesTransformer](https://github.com/openinfradev/kustomize-helm-transformer) - HelmRelease CustomResource の値を変換。多数の HelmRelease 値を一つの Transformer ファイルで管理できます（Exec）。
- [TemplateTransformer](https://github.com/joshdk/template-transformer) - 組み込み Transformer をその場で実行する KRM Function 群を提供（コンテナー化 KRM、Exec KRM）。

### Validator

- [KubeconformValidator](https://github.com/aabouzaid/kustomize-kubeconformvalidator) - 組み込み Kubeconform を使って Kubernetes マニフェストを検証（コンテナー化 KRM、Exec KRM）。

## ガイド

📰 記事、📺 動画、🧪 ラボなど、レベルや種類別の Kustomize ガイド。

### 初級

- 📰 [Kustomize を使った Kubernetes オブジェクトの宣言的管理](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/) - Kustomize に関する Kubernetes 公式ドキュメントのタスク。
- 📰 [Kustomize で Kubernetes を設定](https://cloud.google.com/anthos-config-management/docs/concepts/kustomize) - Kustomize の開始、想定ユースケースの理解、他の Google Cloud ツールとともに使うリソースの発見に役立つガイド。
- 📺 [Kustomize で散らかった YAML を整理](https://www.youtube.com/watch?v=1fCAwFGX38U) - サービスや環境が増える中で、Kustomize が Kubernetes YAML ファイルの管理にどう役立つかを示す講演。
- 📺 [Kustomize：テンプレートなしの YAML でアプリをデプロイ](https://www.youtube.com/watch?v=ahMIBxufNR0) - デプロイをテンプレートなしの YAML で記述できる宣言的アプリケーション管理システム Kustomize の紹介。

### 中級

- 🧪 [ArgoCD GitOps チュートリアル - Kustomize の使用](https://redhat-scholars.github.io/argocd-tutorial/argocd-tutorial/03-kustomize.html) - GitOps での Kustomize 利用、構文、Kustomize 対応アプリのデプロイを扱うハンズオンラボ。
- 📰 [既製 Helm Chart を Kustomize でカスタマイズする3つの方法](https://tech.aabouzaid.com/2020/09/3-ways-to-customize-off-the-shelf-helm-charts-with-kustomize-kubernetes.html) - Kustomize と Helm を併用する3つの方法を扱うガイド。
- 📰 [Cluster API で Kustomize Component を使用](https://blog.scottlowe.org/2021/11/01/using-kustomize-components-with-cluster-api/) - Kustomize Component の分かりやすいユースケース。

### 上級

- 📰 [Kustomize の高度な機能](https://www.innoq.com/en/blog/advanced-kustomize-features/) - 5つ以上の高度な Kustomize 機能を扱うガイド。
- 📰 [Kubernetes Custom Resource の OpenAPI パッチ戦略を設定](https://tech.aabouzaid.com/2022/11/set-openapi-patch-strategy-for-kubernetes-custom-resources-kustomize.html) - CRD のパッチ戦略を制御するスキーマの提供方法を示すガイド。
- 📺 [クライアント側 Custom Resource で Kustomize をカスタマイズ](https://www.youtube.com/watch?v=YlFUv4F5PYc) - 一般的ながら固有性の高いアプリケーション要件へ対応するため、プラグインで Kustomize を拡張する方法を扱う講演。
- 📺 [YAML を自分のものに：プラグインで Kustomize を拡張](https://www.youtube.com/watch?v=Xoh_OpLoVtI) - Kustomize 外部プラグインを使って Custom Resource を作成する方法を示す講演。
- 📰 [KRM Function による Kustomize の強化](https://www.innoq.com/en/blog/kustomize-enhancement-with-krm-functions/) - KRM の概念と Kustomize プラグインでの利用法を詳しく扱うガイド。

### ヒントとコツ

- 📰 [Kustomize Base からマニフェストを削除](https://tech.aabouzaid.com/2021/05/delete-a-manifest-from-kustomize-base.html) - Kustomize Patch で名前付きマニフェストを削除する便利な方法。
- 📰 [単一リソースへ Kustomize 組み込み Transformer を適用](https://tech.aabouzaid.com/2022/04/apply-kustomize-builtin-transformers-on-a-single-resource.html) - 特定のリソースで内部 Transformer を使う方法。
- 📰 [コンテナー化 KRM Function へ追加データを渡す](https://tech.aabouzaid.com/2022/12/pass-extra-data-to-the-containerized-krm-function.html) - コンテナー化 KRM Function とデータを共有するさまざまな事例。


## スニペット

スニペットは、日常的な操作に役立つ Kustomize のユースケース別サンプルです。

- [Pod Security Context を追加](https://github.com/3deep5me/awesome-kustomize/blob/add-security-context-component/snippets/add-pod-security-context/kustomization.yaml) - Security Context が Pod 内のコンテナーへ追加されるようにします。

## その他

- [Asdf-kustomize](https://github.com/Banno/asdf-kustomize) - asdf バージョンマネージャー向け Kustomize プラグイン。


## 関連リスト

- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes) - 優れた Kubernetes リソースを厳選したリスト。
- [Awesome Kubectl plugins](https://github.com/ishantanu/awesome-kubectl-plugins) - 優れた Kubectl プラグインを厳選したリスト。
- [Awesome Helm](https://github.com/cdwv/awesome-helm) - 優れた Helm Chart とリソースを厳選したリスト。
