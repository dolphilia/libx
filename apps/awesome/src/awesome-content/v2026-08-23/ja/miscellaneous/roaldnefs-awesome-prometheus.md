---
title: "Awesome Prometheus"
description: "Prometheusを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-roaldnefs-awesome-prometheus-readme-md"
---

# Awesome Prometheus

Prometheusを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [公式リソース](#official-resources)
- [チュートリアル](#tutorials)
- [書籍](#books)
- [動画](#videos)
- [ポッドキャストとインタビュー](#podcasts-and-interviews)
- [プレゼンテーション](#presentations)
- [ブログ記事と意見](#blog-posts-and-opinions)
- [デプロイツール](#deployment-tools)
- [ダッシュボード](#dashboards)
- [エクスポーター](#exporters)
    - [データベース](#databases)
    - [ハードウェア関連](#hardware-related)
    - [HTTP](#http)
    - [ほかの監視システム](#other-monitoring-systems)
    - [その他](#miscellaneous)
- [Alertmanager](#alertmanager)
- [プロキシ](#proxies)
- [高可用性](#high-availability)
- [未分類](#uncategorized)

## 公式リソース

- [Website](https://prometheus.io/) - Prometheusプロジェクトの公式Webサイト。
- [GitHub repository](https://github.com/prometheus/prometheus) - Prometheusのソースコード、Issue議論、コラボレーション。
- [Documentation](https://prometheus.io/docs/introduction/overview/) - Prometheus公式ドキュメント。
- [Blog](https://prometheus.io/blog/) - Prometheus公式ブログ。
- [Official Prometheus demo](https://demo.do.prometheus.io) - [Prometheus repository](https://github.com/prometheus/demo-site)の構成を使用し毎日更新するCloud Alchemy Ansible rolesが管理する、Prometheus公式デモサイト。

## チュートリアル
- [Kubernetes monitoring with Prometheus, the ultimate guide](https://sysdig.com/blog/kubernetes-monitoring-prometheus/) - Mateo Burilloによる、PrometheusでKubernetesを監視する究極のガイド。
- [How To Install Prometheus using Docker on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-prometheus-using-docker-on-centos-7) - CentOS 7にDockerを使ってPrometheusをインストールする方法。
- [How to Use Prometheus to Monitor Your CentOS 7 Server](https://www.digitalocean.com/community/tutorials/how-to-use-prometheus-to-monitor-your-centos-7-server) - PrometheusでCentOS 7サーバーを監視する方法。
- [How To Add a Prometheus Dashboard to Grafana](https://www.digitalocean.com/community/tutorials/how-to-add-a-prometheus-dashboard-to-grafana) - GrafanaへPrometheusダッシュボードを追加する方法。
- [Instructions and example code for a Prometheus workshop](https://github.com/juliusv/prometheus_workshop) - Julius VolzによるPrometheusワークショップの手順とサンプルコード。
- [Checking if SSH is responding with Prometheus](https://www.robustperception.io/checking-if-ssh-is-responding-with-prometheus/) - Brian Brazilによる、Blackbox ExporterでSSHが応答しているか確認する方法。
- [Monitor your GitHub Repos with Docker and Prometheus](https://www.brianchristner.io/monitor-your-github-repos-with-docker/) - DockerとPrometheusでGitHubリポジトリを監視する。
- [Docker daemon metrics in Prometheus](https://medium.com/lucjuggery/docker-daemon-metrics-in-prometheus-7c359c7ff550) - Luc JuggeryによるPrometheusでのDockerデーモンメトリクス。
- [Prometheus Monitoring Tutorial (10 minutes)](https://pagertree.com/blog/prometheus-monitoring-tutorial) - Austin Millerによる、Grafana、AlertManager、PagerTreeを用いてPrometheus監視スタックを作る簡単なチュートリアル。
- [Prometheus-Basics](https://github.com/yolossn/Prometheus-Basics) - [yolossn](https://github.com/yolossn)による初心者向けPrometheus入門。
- [Setting up Prometheus Monitoring On a Kubernetes Cluster](https://spacelift.io/blog/prometheus-kubernetes) - James WalkerによるKubernetesクラスタでのPrometheus監視設定。

## 書籍
- [Monitoring with Prometheus](https://www.prometheusbook.com/) - James TurnbullによるPrometheus監視。
- [Prometheus: Up & Running](http://shop.oreilly.com/product/0636920147343.do) - Brian BrazilによるPrometheus: Up & Running。
- [Hands-On Infrastructure Monitoring with Prometheus](https://www.prombook.info/) - Brian Brazilのレビューを受けた、Joel BastosとPedro AraújoによるPrometheusを使う実践インフラ監視。

## 動画
- [PromCon Online 2020](https://www.youtube.com/playlist?list=PLoz-W_CUquUm0r6nxziK9B9LnmNntzctE) - PromCon Online、2020年7月14～16日。
- [PromCon 2019](https://www.youtube.com/playlist?list=PLoz-W_CUquUmIYKS97RBghcWumZIX2kvv) - PromCon Munich、2019年11月7～8日、PromCon EU 2019。
- [An Introduction to Systems & Service Monitoring with Prometheus](https://www.youtube.com/watch?v=5O1djJ13gRU) - GOTO 2019: Prometheusによるシステム・サービス監視の入門、Julius Volz。
- [Explain it Like I'm Five - What I Learned Teaching Observability to My Kids](https://vimeo.com/341142428) - Monitorama PDX、2019年、Dave Cadwallader。
- [Prometheus Deep Dive](https://www.youtube.com/watch?v=Me-kZi4xkEs) - KubeCon 2017、GitLab: Prometheus Deep Dive、Ben Kochie。
- [PromCon 2018](https://www.youtube.com/playlist?list=PLoz-W_CUquUlml1wBtQVBKErwoszt5B0h) - PromCon Munich、2018年8月9～10日。ミュンヘンでのPromCon 2018講演録画。
- [Prometheus Monitoring for Java Web Applications w o Modifying Source Code](https://www.youtube.com/watch?v=BjyI93c8ltA) - Devoxx Belgium、2017年11月7日、Fabian Stäber。
- [PromCon 2017](https://www.youtube.com/playlist\?list\=PLoz-W_CUquUlnvoEBbqChb7A0ZEZsWSXt) - PromCon Munich、2017年8月17～18日。ベルリンでのPromCon 2017講演録画。
- [Best Practices and Beastly Pitfalls](https://www.youtube.com/watch?v=_MNYuTNfTb4) - PromCon 2017: ベストプラクティスと危険な落とし穴、Julius Volz。
- [Counting with Prometheus](https://www.youtube.com/watch?v=67Ulrq6DxwA) - Cloud Native Con 2017、Prometheusでのカウント、Brian Brazil、Robust Perception。
- [Understanding and Extending Prometheus AlertManager](https://www.youtube.com/watch?v=jpb6fLQOgn4) - Cloud Native Con 2017、Prometheus AlertManagerの理解と拡張、Lee Calcote、SolarWinds。
- [Infrastructure and application monitoring using Prometheus](https://www.youtube.com/watch?v=5GYe_-qqP30) - Devoxx、2017年5月17日、Devoxx UK、Marco Pas。
- [Prometheus Monitoring for Java Developers](https://www.youtube.com/watch?v=jb9j_IYv4cU) - Devoxx Belgium、2016年11月8日、Fabian Stäber。
- [Prometheus: Design and Philosophy - why it is the way it is](https://www.youtube.com/watch?v=QgJbxCWRZ1s) - Docker、2016年10月14日、Julius Volz。
- [PromCon 2016](https://www.youtube.com/playlist?list=PLoz-W_CUquUlCq-Q0hy53TolAhaED9vmU) - PromCon Berlin、2016年8月25～26日。ベルリンでのPromCon 2016講演録画。
- [Prometheus: A Next Generation Monitoring System](https://www.youtube.com/watch?v=cwRmXqXKGtk) - FOSDEM 2016、2016年1月31日、Brian Brazil。
- [The Prometheus Time Series Database](https://www.youtube.com/watch?v=HbnGSNEjhUc) - PromCon 2016: Prometheus時系列データベース、Björn Rabenstein。
- [PromCon 2016: So You Want to Write an Exporter](https://www.youtube.com/watch?v=KXq5ibSj2qA) - PromCon 2016、エクスポーターを書きたいあなたへ、Brian Brazil。

## ポッドキャストとインタビュー
- [Prometheus on FLOSS Weekly 357](https://twit.tv/shows/floss-weekly/episodes/357) - FLOSS WeeklyのTWiT.tv番組でのJulius Volz。
- [Prometheus and Service Monitoring](https://changelog.com/podcast/168) - ChangelogポッドキャストでのJulius Volz。
- [Prometheus Monitoring with Brian Brazil](https://softwareengineeringdaily.com/2016/08/10/prometheus-monitoring-with-brian-brazil/) - Software Engineering DailyポッドキャストでのBrian Brazil。

## プレゼンテーション
- [Prometheus Overview](http://www.slideshare.net/brianbrazil/prometheus-overview) - Brian Brazilによる、監視におけるプロメテウス的理想。
- [System Monitoring with Prometheus](http://www.slideshare.net/brianbrazil/devops-ireland-systems-monitoring-with-prometheus) - ダブリンのDevops Ireland MeetupでのBrian Brazil。
- [OMG! Prometheus](https://www.dropbox.com/s/0l7kxhjqjbabtb0/prometheus%20site-ops%20preso.pdf?dl=0) - Fitbit Site OperationsのBenjamin StaffinがチームへPrometheusの導入根拠を説明する。
- [Deploying Prometheus](https://fosdem.org/2017/schedule/event/deploying_prometheus_at_wikimedia_foundation/attachments/slides/1773/export/events/attachments/deploying_prometheus_at_wikimedia_foundation/slides/1773/Prometheus_at_WMF_Fosdem_2017.pdf) - FOSDEM 2017でのWikiMedia Foundation、Filippo Giunchedi。

## ブログ記事と意見
- [Prometheus: Monitoring at SoundCloud](https://developers.soundcloud.com/blog/prometheus-monitoring-at-soundcloud) - Prometheusの概要とSoundCloudでの一次経験。
- [Monitor Docker Containers with Prometheus](http://5pi.de/2015/01/26/monitor-docker-containers-with-prometheus/) - Prometheusを使ったDockerコンテナ監視。
- [Prometheus and Kubernetes: A Perfect Match](https://www.weave.works/prometheus-kubernetes-perfect-match/) - シリーズ_Prometheus and Kubernetes_の第1回（全3回）。
- [Prometheus and Kubernetes: Deploying](https://www.weave.works/prometheus-kubernetes-deploying/) - シリーズ_Prometheus and Kubernetes_の第2回（全3回）。
- [Prometheus and Kubernetes: Monitoring Your Applications](https://www.weave.works/prometheus-and-kubernetes-monitoring-your-applications/) - シリーズ_Prometheus and Kubernetes_の第3回。
- [Robust Perception](https://www.robustperception.io/tag/prometheus/) - Brian BazilによるPrometheusについての複数ブログ記事。
- [Initial experiences with the Prometheus monitoring system](https://medium.com/@griggheo/initial-experiences-with-the-prometheus-monitoring-system-167054ac439c#.q565suk4h) - Grig GheorghiuによるPrometheusの初期使用経験。
- [Monitor your applications with Prometheus](http://blog.alexellis.io/prometheus-monitoring/) - Alex EllisによるPrometheusでのアプリケーション監視。
- [Practical Services Monitoring with Prometheus and Docker](https://web.archive.org/web/20221206045124/https://airtame.engineering/practical-services-monitoring-with-prometheus-and-docker-30abd3cf9603?gi=b81b1156b4d9) - Simon KPによるPrometheusとDockerを使う実用的なサービス監視。
- [Prometheus Blog Series (Part 1): Metrics and Labels](https://pierrevincent.github.io/2017/12/prometheus-blog-series-part-1-metrics-and-labels/) - Pierre Vincentによるシリーズ_Prometheus Blog Series_の第1回。
- [Prometheus Blog Series (Part 2): Metric types](https://pierrevincent.github.io/2017/12/prometheus-blog-series-part-2-metric-types/) - Pierre Vincentによるシリーズ_Prometheus Blog Series_の第2回。
- [Prometheus Blog Series (Part 3): Exposing and collecting metrics](https://pierrevincent.github.io/2017/12/prometheus-blog-series-part-3-exposing-and-collecting-metrics/) - Pierre Vincentによるシリーズ_Prometheus Blog Series_の第3回。
- [Prometheus Blog Series (Part 4): Instrumenting code in Go and Java](https://pierrevincent.github.io/2017/12/prometheus-blog-series-part-4-instrumenting-code-in-go-and-java/) - Pierre Vincentによるシリーズ_Prometheus Blog Series_の第4回。
- [Horizontal Pod Autoscaling in Kubernetes with Prometheus](https://livewyer.io/blog/2019/05/28/horizontal-pod-autoscaling/) - LouiseによるPrometheusを使うKubernetesの水平Pod自動スケーリング。
- [PromQL tutorial for beginners](https://medium.com/@valyala/promql-tutorial-for-beginners-9ab455142085) - Aliaksandr Valialkinによる初心者向けPromQLチュートリアル。
- [Prometheus storage: technical terms explained](https://medium.com/@valyala/prometheus-storage-technical-terms-for-humans-4ab4de6c3d48) - Aliaksandr Valialkinによる、利用者向けに説明したPrometheusストレージの技術用語。
- [Alerting issues with Alertmanager](https://ali.sattari.me/posts/2020/alerting-issues-with-alertmanager/) - [Ali Sattari](https://github.com/ali-sattari)によるAlertmanagerのアラートフラッピング・重複への対処。
- [Contributing to Prometheus](https://atibhiagrawal.medium.com/contributing-to-prometheus-2bf35bd28256) - Atibhi AgrawalによるPrometheusへの貢献。
- [Simple Prometheus queries for metrics inspection](https://mkaz.me/blog/2023/simple-prometheus-queries-for-metrics-inspection/) - Michal Kazmierczakによる、高カーディナリティのメトリクスを特定するのに役立つPromQLクエリーの概要。
- [Learn Prometheus](https://pagertree.com/learn/prometheus) - PagerTree LLCによるPrometheusの短期集中講座。

## デプロイツール
- [Ansitheus](https://github.com/ntk148v/ansitheus) - Prometheusエコシステムをコンテナ化、構成、デプロイするAnsibleプレイブック。_by ntk148v_。
- [Cloud Alchemy Ansible roles](https://github.com/cloudalchemy) - Prometheus、Alertmanager、Grafana、一般的なPrometheusエクスポーターを管理するAnsibleロール。
- [Ansible-prometheus](https://github.com/ernestas-poskus/ansible-prometheus) - node、snmp、blackboxなどのエクスポーター、alert manager、push gatewayを含むPrometheus監視システムをインストールするAnsibleプレイブック。_by Ernestas Poskus_。
- [Click-to-deploy Prometheus](https://github.com/GoogleCloudPlatform/click-to-deploy/tree/master/k8s/prometheus) - Google Cloud Marketplaceに掲載されるGoogle Click to Deploy Prometheusソリューションのソース。_by GoogleCloudPlatform_。
- [Prometheus Operator](https://github.com/coreos/prometheus-operator) - Prometheus Operatorは、Kubernetes上でPrometheusクラスタを作成、構成、管理する。_by CoreOS_。

## ダッシュボード
- [Grafana](https://prometheus.io/docs/visualization/grafana/) - Grafanaはオープンソースのメトリクス分析・可視化スイート。_tutorial by Prometheus_。
- [Prometheus Monitoring with Grafana](http://logz.io/blog/prometheus-monitoring/) - Grafanaを使うPrometheus監視。_tutorial by logz.io_。

## エクスポーター
以下のリストは、[Prometheus GitHub organization](https://github.com/prometheus)が保守するすべての公式Prometheusエクスポーターを含みます。非公式エクスポーターを含む完全なエクスポーター一覧は、[prometheus.io](https://prometheus.io/docs/instrumenting/exporters/)またはPrometheusエクスポーターのキュレーションリストである[exporterhub.io](https://exporterhub.io)を参照してください。

### データベース
- [Consul exporter](https://github.com/prometheus/consul_exporter) - Consulメトリクス向けエクスポーター。
- [Memcached exporter](https://github.com/prometheus/memcached_exporter) - MemcachedエクスポーターはMemcached統計を定期的にスクレイプする。
- [MySQL server exporter](https://github.com/prometheus/mysqld_exporter) - MySQLサーバーエクスポーターはMySQL統計を定期的にスクレイプする。

### ハードウェア関連
- [Node/system metrics exporter](https://github.com/prometheus/node_exporter) - Nodeエクスポーターはシステム統計を定期的にスクレイプする。

### HTTP
- [HAProxy exporter](https://github.com/prometheus/haproxy_exporter) - HAProxyエクスポーターはHAProxy統計を定期的にスクレイプする。

### ほかの監視システム
- [AWS CloudWatch exporter](https://github.com/prometheus/cloudwatch_exporter) - Amazon AWS CloudWatchメトリクス向けエクスポーター。
- [Collectd exporter](https://github.com/prometheus/collectd_exporter) - Collectdメトリクス向けエクスポーター。
- [Graphite exporter](https://github.com/prometheus/graphite_exporter) - Graphiteメトリクス向けエクスポーター。
- [InfluxDB](https://github.com/prometheus/influxdb_exporter) - InfluxDBメトリクス向けエクスポーター。
- [JMX exporter](https://github.com/prometheus/jmx_exporter) - JMXメトリクス向けエクスポーター。
- [SNMP exporter](https://github.com/prometheus/snmp_exporter) - SNMPメトリクス向けエクスポーター。
- [StatsD exporter](https://github.com/prometheus/statsd_exporter) - StatsDメトリクス向けエクスポーター。

### その他
- [Blackbox](https://github.com/prometheus/blackbox_exporter) - Blackboxエクスポーターは、HTTP、HTTPS、DNS、TCP、ICMPを介してエンドポイントのブラックボックスプロービングを可能にする。

## Alertmanager
- [Monitoring mixins](https://monitoring.mixins.dev) - コミュニティが管理するアラート、記録ルール、Grafanaダッシュボードのバンドル。
- [Awesome Prometheus Alerting Rules](https://github.com/samber/awesome-prometheus-alerts) - PrometheusアラートルールのAwesomeリスト。
- [Karma](https://github.com/prymitive/karma) - Prometheus Alertmanager向けアラートダッシュボード。

## プロキシ
- [Multi-prometheus proxy](https://github.com/matt-deboer/mpp) - セレクター戦略を使い、HA複製としてデプロイされた複数Prometheusインスタンスの集合のいずれかへ受信リクエストを転送する。
- [Promxy](https://github.com/jacksontj/promxy) - Prometheus HAペアのデータを重複排除する。
- [Trickster](https://github.com/tricksterproxy/trickster) - HTTPアプリケーション向けHTTPリバースプロキシ・キャッシュ、および時系列データベース向けダッシュボードクエリーアクセラレーター。
- [exporter_proxy](https://github.com/mrichar1/exporter_proxy) - TLSをサポートする、Prometheusエクスポーター用の小さく単純な純粋Python製リバースプロキシ。
- [PromQL Guard](https://github.com/kfdm/promql-guard) - Prometheus上に薄いプロキシを提供し、PromQLクエリーを検査・書き換え可能にする。共有Prometheusサーバー使用時でも、テナントは許可されたデータのみ閲覧できる。

## 高可用性
- [Cortex](https://github.com/cortexproject/cortex) - 水平スケール可能で高可用性、マルチテナント、長期運用向けPrometheus。
- [Thanos](https://github.com/thanos-io/thanos) - 長期保存機能を備えた高可用性Prometheusセットアップ。
- [M3DB](https://github.com/m3db/m3) - Prometheus向けのスケーラブルな長期リモートストレージ。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 費用対効果が高く、運用しやすいPrometheus向けリモートストレージ。

## 未分類
- [Prometheus Monitoring subreddit](https://www.reddit.com/r/PrometheusMonitoring/) - インターネット上のPrometheus関連リソースを集めるSubreddit。
- [PromCon](https://promcon.io/) - Prometheusカンファレンス。
