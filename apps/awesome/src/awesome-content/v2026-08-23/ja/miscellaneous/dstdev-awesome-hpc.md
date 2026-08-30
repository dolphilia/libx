---
title: "dstdev/awesome-hpc"
description: "dstdev/awesome-hpcの正規スナップショット"
licenseSource: "github-dstdev-awesome-hpc-readme-md"
---

# Awesome HPC [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

エンジニアと管理者向けの高性能計算ツールおよびリソースです。

[高性能計算（HPC）](https://en.wikipedia.org/wiki/Supercomputer)は、科学、工学、ビジネスの大規模問題を解決するため、一般的なデスクトップコンピューターやワークステーションよりはるかに高い性能を実現するよう計算能力を集約する実践を、最も広い意味で指します。

## 目次
<details>
  <summary><b>（クリックして展開）</b></summary>
  
- [プロビジョニング](#provisioning)
- [ワークロードマネージャー](#workload-managers)
- [パイプライン](#pipelines)
- [アプリケーション](#applications)
- [コンパイラー](#compilers)
- [MPI](#mpi)
- [並列計算](#parallel-computing)
- [ベンチマーク](#benchmarking)
- [その他](#miscellaneous)
- [パフォーマンス](#performance)
- [並列シェル](#parallel-shells)
- [コンテナー](#containers)
- [環境管理](#environment-management)
- [可視化](#visualization)
- [並列ファイルシステム](#parallel-filesystems)
- [プログラミング言語](#programming-languages)
- [監視](#monitoring)
- [ジャーナル](#journals)
- [ポッドキャスト](#podcasts)
- [ブログ](#blogs)
- [カンファレンス](#conferences)
- [ウェブサイト](#websites)
- [ユーザーグループ](#user-groups)

</details>

## プロビジョニング
- [Grendel](https://grendel.readthedocs.io/) - HPC Linuxクラスター向けベアメタルプロビジョニングシステム（[ソースコード](https://github.com`ubccr/grendel)) `GPL-3`。
- [XCat](https://xcat.org/) - あらゆる規模のクラスターをデプロイ・管理するツールキット（[ソースコード](https://github.com/xcat2/xcat-core)）`EPL-1.0`。
- [Warewulf](https://warewulf.hpcng.org/) - 大規模なベアメタル／仮想システムクラスター向けの、ステートレス・ディスクレスなコンテナーOSプロビジョニングシステム（[ソースコード](https://github.com/hpcng/warewulf)）`BSD-3`。
- [Rocks](http://www.rocksclusters.org/) - Linuxクラスター開発用Linuxディストリビューション。`other`
- [Cobbler](https://cobbler.github.io/) - ネットワークインストール環境をすばやく設定できるLinuxインストールサーバー（[ソースコード](https://github.com/cobbler/cobbler)）`GPL-2.0`。
- [Base Command Manager](https://docs.nvidia.com/base-command-manager/index.html) - 異種クラスターをすばやく構築・管理できる管理者向けツール。`Proprietary`
- [Scyld](https://www.penguinsolutions.com/computing/products/software/scyld-clusterware/) - 1990年代にNASAで初めて開発されたBeowulfクラスターの継続的発展に基づき開発されたScyld Clusterware。`Proprietary`
- [BlueBanquise](https://bluebanquise.com) - PythonとAnsibleで構築した、オープンソースのクラスター展開・管理スタック（[ソースコード](https://github.com/bluebanquise/bluebanquise)）`MIT`。

## ワークロードマネージャー
- [Slurm](https://slurm.schedmd.com/documentation.html) - 無料でオープンソースのジョブスケジューラー（[ソースコード](https://github.com/SchedMD/slurm)）`OSS`。
- [LSF](https://www.ibm.com/products/hpc-workload-management) - IBMが開発したジョブスケジューラーおよびワークロード管理ソフトウェア。`Proprietary`
- [Moab](https://adaptivecomputing.com/moab-hpc-suite/) - モアブは仕事負荷管理およびジョブスケジューラ `other`.
- [Torque](https://en.wikipedia.org/wiki/TORQUE) - トーチは仕事負荷管理およびジョブスケジューラ `other`.
- [OpenLava](https://en.wikipedia.org/wiki/OpenLava) - オープンラヴァは仕事負荷管理およびジョブスケジューラ `other`.
- [UGE/SGE](https://en.wikipedia.org/wiki/Univa_Grid_Engine) - HPC向けワークロード管理エンジンであるUniva Grid Engine。`Proprietary`
- [Volcano](https://volcano.sh/) - Kubernetes上に構築したバッチシステム。`Apache-2.0`
- [Maui](https://www.mhpcc.hpc.mil/) - マウイは仕事負荷管理およびジョブスケジューラ `other`.
- [Kube Batch](https://github.com/kubernetes-sigs/kube-batch) - AI/ML、BigData、HPCなどの高性能ワークロード向けKubernetesバッチスケジューラー。`Apache-2.0`
- [OpenPBS](https://www.openpbs.org/) - 高性能計算（HPC）環境のジョブスケジューリングとワークロード管理を最適化するOpenPBS®ソフトウェア（[ソースコード](https://github.com/openpbs/openpbs)）`other`。

## パイプライン
- [Nextflow](https://nextflow.io) - データ駆動の計算パイプライン。`Apache-2.0`
- [Cromwell](https://cromwell.readthedocs.io/en/stable/) - シンプルさとスケーラビリティを重視して設計した科学ワークフローエンジン（[ソースコード](https://github.com/broadinstitute/cromwell)）`BSD-3`。
- [Pegasus](https://pegasus.isi.edu/) - 幅広い計算基盤上で科学ワークフローをマッピング・実行するための設定可能なシステム（[ソースコード](https://github.com/pegasus-isi/pegasus)）`Apache-2.0`。

## アプリケーション
- [Spack](https://spack.io) - 複数のバージョン、設定、プラットフォーム、コンパイラーをサポートする柔軟なパッケージマネージャー（[ソースコード](https://github.com/spack/spack)）`other`。
- [EasyBuild](https://easybuild.io/) - ソフトウェアを容易にビルドするEasyBuild（[ソースコード](https://github.com/easybuilders/easybuild)）`GPL-2`。

## コンパイラー
- [Nvidia](https://developer.nvidia.com/hpc-compilers) - OpenACCを備えるFortran、C/C++向けNVIDIA HPCコンパイラースイート。`Proprietary`
- [Portland Group](https://www.pgroup.com/index.htm) - 現在はNVIDIA HPC SDKに統合されている、Fortran、C/C++向けPortland Groupコンパイラー。`Proprietary`
- [Intel](https://software.intel.com/content/www/us/en/develop/tools/oneapi/all-toolkits.html#hpc-kit) - HPC分野で使う多数の言語コンパイラーを提供するIntelコンパイラースイート。`Proprietary`
- [Cray](https://bluewaters.ncsa.illinois.edu/cray-compiler) - AMD Interlagos命令セットを対象に設計・最適化したコンパイラースイート。`Proprietary`
- [GNU](https://gcc.gnu.org/) - 多数の言語を対象とするGNU Compiler Collection（[ソースコード](https://gcc.gnu.org/git.html)）`GPL-3`。
- [LLVM](https://llvm.org/) - モジュール型コンパイラーとツールチェーンの集合であるLLVMプロジェクト（[ソースコード](https://github.com/llvm/llvm-project)）`OSS`。

## MPI
- [OpenMPI](https://www.open-mpi.org/) - MPI-3.1標準のオープンソース実装（[ソースコード](https://github.com/open-mpi/ompi)）`BSD`。
- [MPICH](https://www.mpich.org/) - 高性能で広く移植可能なMPI-3.1標準の実装（[ソースコード](https://github.com/pmodels/mpich)）`other`。
- [MVAPICH](https://mvapich.cse.ohio-state.edu/) - オハイオ州立大学が開発したMPI-3.1標準のオープンソース実装。`BSD`
- [Intel-MPI](https://www.intel.com/content/www/us/en/developer/tools/oneapi/mpi-library.html) - Intelコンパイラースイートに含まれるIntelのMPI-3.1実装。`other`

## 並列計算
- [ArrayFire](https://arrayfire.org/docs/index.htm) - 並列アーキテクチャ向けソフトウェア開発を単純化する汎用テンソルライブラリ。`other`
- [OpenMP](https://www.openmp.org/) - マルチプラットフォームの共有メモリ型マルチプロセッシングプログラミングをサポートするアプリケーションプログラミングインターフェース。`other`

## ベンチマーク
- [OSU Benchmarks](https://mvapich.cse.ohio-state.edu/benchmarks/) - オハイオ州立大学が開発したMPI向けベンチマークツール集。`other`
- [Intel MPI Benchmarks](https://software.intel.com/content/www/us/en/develop/articles/intel-mpi-benchmarks.html) - Intel MPIで使うためにIntelが開発したベンチマークセット。`other`
- [HPCC Systems](https://hpccsystems.com/) - ビッグデータ処理・分析向けのオープンソース大規模並列計算プラットフォーム、HPCC Systems（[ソースコード](https://github.com/hpcc-systems/HPCC-Platform)）`other`。
- [LINPACK](https://www.netlib.org/linpack/) - HPCのベンチマークに有用な線形システム解法向け効率的なFortranサブルーチンセット。`other`
- [IOzone](https://www.iozone.org/) - ファイルシステムベンチマークツール。`OSS`
- [IOR](https://www.vi4io.org/tools/benchmarks/ior) - Interleaved or Randomは、並列ファイルシステムのテストに有用なベンチマークツール。`other`
- [MDtest](https://www.vi4io.org/tools/benchmarks/mdtest) - ファイルシステムのメタデータ性能を評価するMPIベースのアプリケーション。`other`
- [FIO](https://fio.readthedocs.io/en/latest/fio_doc.html) - カーネルのAIOアクセスライブラリに依存する高度なディスクベンチマーク、Flexible I/O（[ソースコード](https://git.kernel.dk/cgit/fio/)）`GPL-2`。
- [elbencho](https://github.com/breuner/elbencho) - GPUをサポートする、ファイル・オブジェクト・ブロック向け分散ストレージベンチマーク。`GPL-3`

## その他
- [OpenOnDemand](https://openondemand.org/) - 計算研究者と学生が任意のデバイスから容易にアクセスできるようにし、リモート計算リソースを効率よく利用することを助けます（[ソースコード](https://github.com/OSC/openondemand.org)）`MIT`。
- [Open XDMod](https://open.xdmod.org) - 高性能計算リソースの管理を促進するオープンソースツール（[ソースコード](https://github.com/ubccr/xdmod/)）`LGPL-3`。
- [Coldfront](https://coldfront.readthedocs.io/en/latest/) - HPCリソースの管理、報告、科学的影響の測定を行う中央ポータルを提供するために設計されたオープンソースリソース割り当てシステム（[ソースコード](https://github.com/ubccr/coldfront)）`GPL-3`。
- [Pavilion2](https://pavilion2.readthedocs.io/) - HPCシステム向けテストを実行・分析するPython 3（3.6+）ベースのフレームワーク（[ソースコード](https://github.com/hpc/pavilion2)）`other`。
- [Reframe](https://reframe-hpc.readthedocs.io/en/stable/) - HPCシステム向けのポータブルな回帰テストとベンチマークを作成・実行する強力なPythonフレームワーク。（[ソースコード](https://github.com/reframe-hpc/reframe)）`BSD-3`。
- [OLCF Test Harness](https://olcf.github.io/olcf-test-harness/) - アプリケーション、ツール、その他のシステムソフトウェアのテスト自動化を助けるOLCF Test Harness（OTH）（[ソースコード](https://github.com/olcf/olcf-test-harness)）`other`。
- [GoSlmailer](https://github.com/CLIP-HPC/goslmailer) - Slack、Mattermost、Teamsなどへ通知を送れるSlurm向けドロップイン通知配信ソリューション。

## パフォーマンス
- [TotalView](https://totalview.io/products/totalview) - HPCアプリケーション向けデバッグツール。`Proprietary`
- [Tau](https://www.cs.uoregon.edu/research/tau/home.php) - Fortran、C、C++、UPC、Java、Pythonで書かれた並列プログラムの性能分析向け、可搬性のあるプロファイリング・トレースツールキットTAU Performance System®。`other`
- [Valgrind](https://www.valgrind.org/) - メモリーリークを特定するためにプログラムをプロファイルするよう設計されたツール（[ソースコード](https://sourceware.org/git/?p=valgrind.git)）`GPL-2`。
- [Paraver](https://tools.bsc.es/paraver) - CEPBA-Toolsツールキットの一部である、非常に柔軟なデータブラウザー。`other`
- [PAPI](http://icl.cs.utk.edu/papi) - 性能分析ツールであるPerformance Application Programming Interface（PAPI）（[ソースコード](https://bitbucket.org/icl/papi/src/master/)）`other`。

## 並列シェル
- [pdsh](https://linux.die.net/man/1/pdsh) - 複数ホストに対して端末コマンドを並列実行するpdsh（[ソースコード](https://github.com/chaos/pdsh)）`GPL-2`。
- [ClusterShell](https://clustershell.readthedocs.io/en/latest/intro.html) - スケーラブルなクラスター管理用Pythonフレームワーク（[ソースコード](https://github.com/cea-hpc/clustershell)）`LGPL-2.1`。

## コンテナー
- [Apptainer](https://apptainer.org) - オープンソースのコンテナーシステム（[ソースコード](https://github.com/apptainer/apptainer)）`BSD`。
- [Charliecloud](https://hpc.github.io/charliecloud/) - 高性能計算（HPC）センター向けのユーザー定義ソフトウェアスタック（UDSS）を提供します（[ソースコード](https://github.com/hpc/charliecloud)）`Apache-2.0`。
- [Docker](https://www.docker.com/) - コンテナーと呼ばれるパッケージでソフトウェアを提供するため、OSレベル仮想化を使うPaaS製品群。`other`
- [uDocker](https://indigo-dc.github.io/udocker/) - root権限なしで、バッチまたは対話システム上の単純なDockerコンテナーを実行する基本的なユーザーツール（[ソースコード](https://github.com/indigo-dc/udocker)）`Apache-2.0`。
- [Shifter](https://www.nersc.gov/research-and-development/user-defined-images/) - HPC向けLinuxコンテナー（[ソースコード](https://github.com/NERSC/shifter)）`other`。
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - コンテナー仕様ファイルを簡単に生成するオープンソースツール。`Apache-2.0`
- [Scarus](https://github.com/eth-cscs/sarus) - HPC向けOCI互換コンテナーエンジン。`BSD`
- [Singularity HPC](https://singularity-hpc.readthedocs.io) - Singularity Registry HPC（shpc）はコンテナーをモジュールとしてインストールできます（[ソースコード](https://github.com/singularityhub/singularity-hpc)）`MPL 2.0`。

## 環境管理
- [Lmod](https://lmod.readthedocs.io/en/latest/) - Luaに基づきTCLモジュールを読み取り、ソフトウェア階層をサポートする環境モジュールシステムLmod（[ソースコード](https://github.com/TACC/Lmod)）`other`。
- [Environment Modules](https://modules.readthedocs.io/en/latest/) - ユーザー環境を動的に変更するEnvironment Modules（[ソースコード](https://github.com/cea-hpc/modules)）`GPL-2`。
- [Anaconda](https://www.anaconda.com/) - 計算科学で使うPythonおよびRディストリビューション。`other`
- [Mamba](https://mamba.readthedocs.io/en/latest/) - C++で実装し直したcondaパッケージマネージャーMamba（[ソースコード](https://github.com/mamba-org/mamba)）`BSD`。

## 可視化
- [Visit](https://visit-dav.github.io/visit-website/) - メッシュベース科学データ向けの可視化・データ分析ツールVisIt（[ソースコード](https://github.com/visit-dav/visit)）`BSD-3`。
- [Paraview](https://www.paraview.org/) - Visualization Toolkit（VTK）を基盤とするオープンソース・マルチプラットフォームのデータ分析・可視化アプリケーションParaView（[ソースコード](https://github.com/Kitware/ParaView)）`BSD-3`。

## 並列ファイルシステム
- [GPFS](https://www.ibm.com/docs/en/gpfs/4.1.0.4?topic=guide-introducing-general-parallel-file-system) - IBMが開発した高性能クラスター型ファイルシステムソフトウェア。`Proprietary`
- [Quobyte](https://www.quobyte.com/storage-for/high-performance-computing-hpc?gclid=EAIaIQobChMI-fv1pfKG8wIV5x6tBh367Q5CEAAYASABEgJTgPD_BwE) - 高性能ファイルシステム。`Proprietary`
- [Ceph](https://ceph.io/en/) - 分散オブジェクト、ブロック、ファイルストレージプラットフォームCeph（[ソースコード](https://github.com/ceph/ceph)）`other`。
- [Weka](https://www.weka.io/) - HPC向けに設計されたファイルシステム。`Proprietary`
- [Lustre/Exascaler](https://www.lustre.org/) - スケーラビリティ、高性能、高可用性のために設計したオープンソース分散並列ファイルシステムソフトウェアプラットフォームLustre（[ソースコード](https://git.whamcloud.com/fs/lustre-release.git)）`other`。
- [BeeGFS](https://www.beegfs.io/c/) - 性能を重視し、使いやすさ、簡単なインストール・管理のために設計した、ハードウェア非依存のPOSIX並列ファイルシステム。`Proprietary`
- [OrangeFS](http://www.orangefs.org/) - Linuxクラスター向け次世代並列ファイルシステムOrangeFS（[ソースコード](https://github.com/waltligon/orangefs)）`other`。
- [MooseFS](https://moosefs.com/) - Core Technologyが開発したオープンソース・POSIX準拠分散ファイルシステムMoose File System（[ソースコード](https://github.com/moosefs/moosefs)）`GPL-2.0`。

## プログラミング言語
- [Julia](https://julialang.org/) - 技術計算向けの高レベル・高性能な動的言語。`MIT`
- [Futhark](https://futhark-lang.org/) - ML系の純粋関数型データ並列プログラミング言語。`isc`
- [Chapel](https://chapel-lang.org/) - 大規模な生産的並列計算のために設計したプログラミング言語。`Apache-2.0`

## 監視
### Prometheusベース
- [Slurm Exporter](https://github.com/treydock/prometheus-slurm-exporter) - Slurmの性能指標向けPrometheusエクスポーター。`GPL-3.0`
- [Slurm Exporter](https://github.com/ubccr/slurm-exporter) - Rest APIを使うPrometheus向けSlurm Exporter。`GPL-3.0`
- [Infiniband Exporter](https://github.com/treydock/infiniband_exporter) - InfiniBandスイッチとHCAからカウンターを収集するInfiniBandエクスポーター。`Apache-2.0`
- [Cgroup Exporter](https://github.com/treydock/cgroup_exporter) - cgroupからメトリクスを生成します。`Apache-2.0`
- [Cgroup Exporter](https://github.com/phpHavok/cgroups_exporter) - cgroupレベルのメトリクス向けPrometheusエクスポーター。`unknown`
- [GPFS Exporter](https://github.com/treydock/gpfs_exporter) - GPFSファイルシステムからメトリクスを収集するGPFSエクスポーター。`Apache-2.0`
- [Lustre Exporter](https://github.com/GSI-HPC/lustre_exporter) - Lustre並列ファイルシステムで使うPrometheusエクスポーター。`GPL-3.0`
- [DCGM Exporter](https://github.com/NVIDIA/dcgm-exporter) - DCGMを活用するPrometheus向けNVIDIA GPUメトリクスエクスポーター。`Apache-2.0`

## ジャーナル
- [Journal of Super Computing](https://www.springer.com/journal/11227) - 高性能コンピューター設計、分析、利用に関する国際ジャーナル。

## ポッドキャスト
- [This week in HPC](https://www.intersect360.com/media/podcasts/) - 毎週、Intersect360 ResearchのCEO Addison SnellとHPCwire編集者Tiffany Traderが、その週の主要なHPCニュースを分析します。
- [Exascaler Project](https://www.exascaleproject.org/podcast/) - ECPのLet's Talk Exascaleポッドキャストは、能力と持続可能性を備えたエクサスケール計算エコシステムを実現する人々に舞台裏で話を聞きます。
- [@HPCpodcast](https://insidehpc.com/category/resources/hpc-podcast/) - Shahin KhanとDoug Blackが、スーパーコンピューティング技術とそれを形作るアプリケーション、市場、方針について議論します。

## ブログ
- [HPCWire](https://www.hpcwire.com/) - 1987年以降、世界最速のコンピューターとその運用者を取材しています。
- [InsideHPC](https://insidehpc.com/) - ベンダー、エンドユーザー、HPC戦略担当者を結び、HPC-AIコミュニティを包括的かつ洞察深く扱うことで知られるグローバル出版物。
- [The Next Platform](https://www.nextplatform.com/category/hpc/) - 大企業、スーパーコンピューターセンター、ハイパースケールデータセンター、パブリッククラウドにおけるハイエンド計算を深く扱います。
- [The Register HPC](http://www.theregister.co.uk/data_centre/hpc/) - 世界で約4,000万人の読者に届く、主導的で信頼されるグローバルなオンライン企業技術ニュース媒体。
- [HPC at Dell](http://hpcatdell.com) - Dellによる高性能計算のナレッジベース記事。

## カンファレンス

- [Pearc](https://pearc.acm.org/) - 高度研究計算における実践と経験。
- [Supercomputing (SC)](https://supercomputing.org/) - 高性能計算、ネットワーキング、ストレージ、分析の国際会議。
- [Supercomputing International (ISC)](https://www.isc-hpc.com/) - 高性能計算、ネットワーキング、ストレージ、分析の国際会議。
- [CCGrid](https://dl.acm.org/conference/ccgrid) - クラスター、クラウド、インターネット計算に関するIEEE/ACM国際シンポジウム。
- [IEEE-HPEC](https://ieee-hpec.org/) - IEEE高性能組み込み計算。
- [Hot Chips](https://hotchips.org) - 高性能マイクロプロセッサーと関連回路に関する半導体業界の主要会議。
- [Hot Interconnects](https://hoti.org) - あらゆる規模の相互接続ネットワーク向けソフトウェアアーキテクチャと実装に関するIEEE会議。
- [ESSA](https://sites.google.com/view/essa-2024/) - 極限規模ストレージ・分析ワークショップ。
- [IEEE-IPDPS](https://www.ipdps.org/) - IEEE国際並列・分散処理シンポジウム。
- [ESPM2 Workshop](http://nowlab.cse.ohio-state.edu/espm2/) - 極限規模プログラミングモデル・ミドルウェア国際ワークショップ。
- [LCI Workshops](https://linuxclustersinstitute.org/workshops/) - Linux Clusters Institute（LCI）は、世界の高性能計算コミュニティに対し、計算クラスターの展開・使用について教育と高度技術研修を提供します。
- [HPC Carpentry](https://www.hpc-carpentry.org/) - 高性能計算の基本技能を教えます。

## ウェブサイト

- [Top500](https://top500.org) - TOP500プロジェクトは、世界の非分散型コンピューターシステムのうち最も強力な500台を順位付けし、詳細を示します。

## ユーザーグループ
- [MVAPICH](https://mug.mvapich.cse.ohio-state.edu/) - MUGカンファレンスは、MVAPICHライブラリーの使用について知識を議論・共有するため、すべての参加者（ユーザー、システム管理者、研究者、エンジニア、学生）に開かれたフォーラムを提供します。
- [Slurm](https://slurm.schedmd.com/slurm_ug_agenda.html) - 年次Slurmユーザーグループ会議。

## 貢献

貢献ガイドラインは[contributing.md](https://github.com/dstdev/awesome-hpc/blob/e4a7e9c85a5fba70a86b31c191213caf5425f953/contributing.md)にあります。
