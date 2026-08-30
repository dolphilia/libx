---
title: "szenergy/awesome-lidar"
description: "LIDARセンサー、データセット、点群処理、SLAM、シミュレーターの定本スナップショット"
licenseSource: "github-szenergy-awesome-lidar-readme-md"
---

# LIDARのAwesomeリスト <a id="awesome-lidar-"></a> [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

<img src="img/lidar02.svg" align="right" width="200" alt="LIDAR" />

> 優れたLIDARセンサーと応用例を厳選したリストです。

[LIDAR](https://en.wikipedia.org/wiki/Lidar)はレーザー光を用い、周囲をおよそcm単位の精度で計測するリモートセンシング技術です。取得データは通常、2次元または3次元の点集合である点群として扱われます。本リストはハードウェア、データセット、点群処理アルゴリズム、フレームワーク、シミュレーター等を収録します。

コントリビューションを歓迎します。[ガイドライン](https://github.com/szenergy/awesome-lidar/blob/35b8c40694f878a1710d3a1fecee7cbd73917301/contributing.md)を確認してください。

> **ヒント:**
> 別表示: [szenergy.github.io/awesome-lidar](https://szenergy.github.io/awesome-lidar/) 
>
> ソースコード: [github.com/szenergy/awesome-lidar](https://github.com/szenergy/awesome-lidar)

## 目次 <a id="contents"></a>

- [LIDARのAwesomeリスト](#awesome-lidar-)
  - [目次](#contents)
  - [表記規則](#conventions)
  - [メーカー](#manufacturers)
  - [データセット](#datasets)
  - [ライブラリ](#libraries)
  - [フレームワーク](#frameworks)
  - [アルゴリズム](#algorithms)
    - [基本マッチングアルゴリズム](#basic-matching-algorithms)
    - [セマンティックセグメンテーション](#semantic-segmentation)
    - [地面セグメンテーション](#ground-segmentation)
    - [自己位置推定・地図作成（SLAM）とLIDARオドメトリ・マッピング（LOAM）](#simultaneous-localization-and-mapping-slam-and-lidar-based-odometry-and-or-mapping-loam)
    - [物体検出・追跡](#object-detection-and-object-tracking)
    - [LIDARと他センサーのキャリブレーション](#lidar-other-sensor-calibration)
  - [シミュレーター](#simulators)
  - [関連Awesomeリスト](#related-awesome)
  - [その他](#others)

## 表記規則 <a id="conventions"></a>

- 次の ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube) バッジが付いた項目にはYouTube動画またはチャンネルがあります
- 次の ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar) バッジが付いた項目には科学論文または詳細説明があります
- 次の ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros) バッジが付いた項目は [`ROS 2`](https://docs.ros.org/) 対応です
- 次の ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github) バッジが付いた項目にはGitHubリポジトリまたは組織があり、スター数バッジ ![](https://img.shields.io/github/stars/szenergy/awesome-lidar?color=yellow&style=flat-square&logo=github) はリポジトリの人気度を示します


## メーカー <a id="manufacturers"></a>

- [Velodyne](https://velodynelidar.com/) - オスターとベルディンが、2023年2月10日から平等な合併を成功裏に完了した。ベルディンは機械式および固体状態LIDARメーカーであった。本社はアメリカ合衆国カリフォルニア州サンジョセにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/user/VelodyneLiDAR)
  - [ROS driver ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/ros-drivers/velodyne) ![](https://img.shields.io/github/stars/ros-drivers/velodyne?color=yellow&style=flat-square&logo=github)
  - [C++/Python library ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/valgur/velodyne_decoder) ![](https://img.shields.io/github/stars/valgur/velodyne_decoder?color=yellow&style=flat-square&logo=github)
- [Ouster](https://ouster.com/) - デジタルスピンLIDARを専門とするLIDARメーカー。オスターの本社はアメリカ合衆国サンフランシスコにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/Ouster-lidar)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/ouster-lidar) ![](https://img.shields.io/github/stars/ouster-lidar?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Livox](https://www.livoxtech.com/) - LIDARメーカー。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCnLpB5QxlQUexi40vM12mNQ)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Livox-SDK) ![](https://img.shields.io/github/stars/Livox-SDK?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [SICK](https://www.sick.com/ag/en/) - センサーおよび自動化メーカー。本社はドイツのワルディクにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/user/SICKSensors)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/SICKAG) ![](https://img.shields.io/github/stars/SICKAG?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Hokuyo](https://www.hokuyo-aut.jp/) - センサーおよび自動化メーカー。本社は日本の大阪にある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCYzJXC82IEy-h-io2REin5g)
- [Pioneer](http://autonomousdriving.pioneer/en/3d-lidar/) - MEMSミラーを用いたレーザースキャンLIDAR（3D-LIDAR）を専門とするLIDARメーカー。パイオニアの本社は日本の東京にある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/user/PioneerCorporationPR)
- [Luminar](https://www.luminartech.com/) - コンパクトで自動車用グレードのセンサーを専門とするLIDARメーカー。ルミナールの本社はアメリカ合衆国カリフォルニア州パロアルトにある。
  - [Vimeo channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://vimeo.com/luminartech)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/luminartech) ![](https://img.shields.io/github/stars/luminartech?color=yellow&style=flat-square&logo=github)
- [Hesai](https://www.hesaitech.com/) - ヘサイテクノロジーは、中国上海に設立されたLIDARメーカーである。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCG2_ffm6sdMsK-FX8yOLNYQ/videos)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/HesaiTechnology) ![](https://img.shields.io/github/stars/HesaiTechnology?color=yellow&style=flat-square&logo=github)
- [Robosense](http://www.robosense.ai/) - ロボセンス（スートンインノベーションテクノロジー株式会社）は、中国の深圳および北京に本社を置くLIDARセンサー、AIアルゴリズムおよびICチップセットメーカーである。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCYCK8j678N6d_ayWE_8F3rQ)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/RoboSense-LiDAR) ![](https://img.shields.io/github/stars/RoboSense-LiDAR?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [LSLIDAR](https://www.lslidar.com/) - XLiDAR（リーシン・インテリジェント・システム株式会社）は、中国深圳に本社を置くLIDARセンサーメーカーおよび完全ソリューションプロバイダーである。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/@lslidar2015)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Lslidar) ![](https://img.shields.io/github/stars/Lslidar?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Ibeo](https://www.ibeo-as.com/) - イーベオ・オートモーティブ・システム株式会社は、ドイツハーバルトに本社を置く自動車産業／環境検出レーザースキャナ／LIDARメーカーである。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/IbeoAutomotive/)
- [Innoviz](https://innoviz.tech/) - インノビズテクノロジー／固体状態LIDARを専門とする。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCVc1KFsu2eb20M8pKFwGiFQ)
- [Quanenergy](https://quanergy.com/) - クアンエネルギー・システム／固体状態および機械式LIDARセンサー／マッピング、産業自動化、輸送、セキュリティ分野におけるエンドツーエンドソリューションを提供。本社はアメリカ合衆国カリフォルニア州スニーヴェルにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/QuanergySystems)
- [Cepton](https://www.cepton.com/index.html) - セプトン（セプトンテクノロジー株式会社）／摩擦なし、ミラーなし設計を先駆け、自社開発のMMT（マイクロモーション技術）LIDAR技術を主導。本社はアメリカ合衆国カリフォルンシア州サンジョセにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCUgkBZZ1UWWkkXJ5zD6o8QQ)
- [Blickfeld](https://www.blickfeld.com/) - ブリッケルドは、自動運転およびIoT向けの固体状態LIDARメーカーであり、ドイツミュンヘンに本社を置く。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/BlickfeldLiDAR)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Blickfeld) ![](https://img.shields.io/github/stars/Blickfeld?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Neuvition](https://www.neuvition.com/) - ネウビションは、中国武江に本社を置く固体状態Lのメーカーである。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UClFjlekWJo4T5bfzxX0ZW3A)
- [Aeva](https://www.aeva.com/) - エーバーは、自動運転、消費電子、ヘルス、産業ロボットおよびセキュリティ向けのすべてのデバイスに次世代の認識技術を提供する。本社はアメリカ合衆国カリフォルニア州マウンテンビューにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/AevaInc)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/aevainc) ![](https://img.shields.io/github/stars/aevainc?color=yellow&style=flat-square&logo=github)
- [XenomatiX](https://www.xenomatix.com/) - ゼノマティクスは、マルチビームレーザー概念に基づく真正な固体状態LIDARセンサーを提供。ゼノマティクスの本社はベルギーのルーヴェンにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/@XenomatiXTruesolidstatelidar)
- [MicroVision](https://microvision.com/) - MEMSベースのレーザー束スキャン技術分野のパイオニアであり、自動車グレードLIDARセンサーの開発を主な焦点としている。ドイツハーバルトに本社を置く。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/user/mvisvideo)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/MicroVision-Inc) ![](https://img.shields.io/github/stars/MicroVision-Inc?color=yellow&style=flat-square&logo=github)
- [PreAct](https://www.preact-tech.com/) - プレアクのミッションは、自動車産業およびそれ以上の分野で人々の生活をより安全で効率的にするためである。本社はアメリカ合衆国オレゴン州ポートランドにある。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/@PreActTechnologies)
- [Pepperl+Fuchs](https://www.pepperl-fuchs.com/) - グローバルなテクノロジー企業で、マニューヘイム（ドイツ）に本社を置き、LiDARを含む革新的な自動化ソリューションおよびセンサ技術に特化している。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/pepperl-fuchs)
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/user/PepperlFuchsUSA)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PepperlFuchs) ![](https://img.shields.io/github/stars/PepperlFuchs?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Riegl](https://www.riegl.com/) - ライグはオーストリアに本社を置く3Dレーザースキャンシステムのメーカーである。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/@RIEGLLIDAR)
  - [GitHub organization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/riegllms) ![](https://img.shields.io/github/stars/riegllms?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
## データセット <a id="datasets"></a>

- [Ford Dataset](https://avdata.ford.com/) - このデータセットはタイムスタンプ付きで、すべてのセンサからの原始データ、校正値、姿勢トラジェクト、真の姿勢、および3Dマップを含む。データはロボットオペレーティングシステム（ROS）と互換性がある。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2003.07969.pdf)
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Ford/AVData) ![](https://img.shields.io/github/stars/Ford/AVData?color=yellow&style=flat-square&logo=github)
- [Audi A2D2 Dataset](https://www.a2d2.audi) - このデータセットには2Dセマンティックセグメンテーション、3Dポイントクラウド、3Dボックス、および車両バスデータが含まれている。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://www.a2d2.audi/content/dam/a2d2/dataset/a2d2-audi-autonomous-driving-dataset.pdf)
- [Waymo Open Dataset](https://waymo.com/open/) - このデータセットにはLiDARおよびカメラデータの独立したラベルが含まれており、単に投影されたものではない。
- [Oxford RobotCar](https://robotcar-dataset.robots.ox.ac.uk/) - オックスフォードロボットカーデータセットは、英国オックスフォードを1年以上にわたって繰り返し走行した100回以上のルートを含む。
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/ORIOxfordRoboticsInstitute)
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://robotcar-dataset.robots.ox.ac.uk/images/RCD_RTK.pdf)
- [EU Long-term Dataset](https://epan-utbm.github.io/utbm_robocar_dataset/) - このデータセットは、フランスのモンベルイアの中心部（長期データ）および郊外（環状道路データ）で、我々のロボカーモデル（もちろん人間運転モード）を用いて収集されたもので、車速はフランスの交通規則に従い50km/hに制限された。
- [NuScenes](https://www.nuscenes.org/) - 自動運転用の公開大規模データセット。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1903.11027.pdf)
- [Lyft](https://level5.lyft.com/dataset/) - フォード・フュージョン車両のファイリートによって収集された公開データセットで、LIDARおよびカメラを搭載している。
- [KITTI](http://www.cvlibs.net/datasets/kitti/raw_data.php) - LIDAR点群、位置情報、画像等を含む研究・評価用データセットです。 ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Semantic KITTI](http://semantic-kitti.org/) - セマンティックおよびパノプティックシーンセグメンテーション用のデータセット。
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=3qNOXvkpK4I)
- [CADC - Canadian Adverse Driving Conditions Dataset](http://cadcd.uwaterloo.ca/) - 自動運転における悪天候（雪天）下での公開大規模データセット。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2001.10117.pdf)
- [UofTPed50 Dataset](https://www.autodrive.utoronto.ca/uoftped50) - トロント大学の自律走行車データセット。GPS/IMU、3D LiDAR、モノクロカメラデータを含み、3D歩行者検出に利用可能。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1905.08758.pdf)
- [PandaSet Open Dataset](https://scale.com/open-datasets/pandaset) - Hesai＆Scaleが提供する公開大規模自動運転データセット。研究者が、実際の自律走行車の全センサセットを用いて、困難な都市走行状況を研究できる。
- [Cirrus dataset](https://developer.volvocars.com/open-datasets/cirrus/) A public datatset from non-uniform distribution of LIDAR scanning patterns with emphasis on long range. In this dataset Luminar Hydra LIDAR is used. The dataset is available at the Volvo Cars Innovation Portal.
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2012.02938.pdf)
- [USyd Dataset- The Univerisity of Sydney Campus- Dataset](http://its.acfr.usyd.edu.au/datasets/usyd-campus-dataset/) - 1.5年間、週ごとに大学のキャンパスおよび周辺地域で収集された長期的かつ大規模なデータセット。複数のセンサモダリティを含み、さまざまな環境条件をカバー。ROSと互換性がある。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://ieeexplore.ieee.org/document/9109704)
- [Brno Urban Dataset ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Robotics-BUT/Brno-Urban-Dataset) ![](https://img.shields.io/github/stars/Robotics-BUT/Brno-Urban-Dataset?color=yellow&style=flat-square&logo=github) - LIDAR点群、位置情報、画像等を含む研究・評価用データセットです。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://ieeexplore.ieee.org/document/9197277)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=wDFePIViwqY)
- [Argoverse ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://www.argoverse.org/) ![](https://img.shields.io/github/stars/argoai/argoverse-api?color=yellow&style=flat-square&logo=github) - LIDAR点群、位置情報、画像等を含む研究・評価用データセットです。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://openaccess.thecvf.com/content_CVPR_2019/papers/Chang_Argoverse_3D_Tracking_and_Forecasting_With_Rich_Maps_CVPR_2019_paper.pdf)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=DM8jWfi69zM)
- [Boreas Dataset](https://www.boreas.utias.utoronto.ca/) - ボレアスデータセットは、1年間の繰り返しルート走行により収集され、季節変化が顕著である。合計でボレアスは350km以上の走行データを含み、雨や重い雪などの悪天候状況を含む複数のシーケンスも含まれている。ボレアスデータ収集プラットフォームには、128チャンネルのVelodyne Alpha Prime LiDAR、360度のNavtechレーダー、およびApplanix POSLV GPS/IMUによる正確な真の姿勢が含まれる。
  - [Paper 📰](https://arxiv.org/abs/2203.10168)
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/utiasASRL/pyboreas) ![](https://img.shields.io/github/stars/utiasASRL/pyboreas?color=yellow&style=flat-square&logo=github)

## ライブラリ <a id="libraries"></a>

- [Point Cloud Library (PCL)](http://www.pointclouds.org/) - 人気の高度に並列化されたプログラミングライブラリで、多くの産業および研究用途に利用されている。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PointCloudLibrary/pcl) ![](https://img.shields.io/github/stars/PointCloudLibrary/pcl?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Open3D library](http://www.open3d.org/docs/release/) - Open3Dライブラリは3Dデータ処理および可視化アルゴリズムを含み、オープンソースであり、C++およびPythonをサポートしている。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/intel-isl/Open3D) ![](https://img.shields.io/github/stars/intel-isl/Open3D?color=yellow&style=flat-square&logo=github)
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCRJBlASPfPBtPXJSPffJV-w)
- [PyTorch Geometric ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1903.02428.pdf) - PyTorch向けの幾何学深層学習拡張ライブラリ。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/rusty1s/pytorch_geometric) ![](https://img.shields.io/github/stars/rusty1s/pytorch_geometric?color=yellow&style=flat-square&logo=github)
- [PyTorch3d](https://pytorch3d.org/) - PyT及3Dは、Facebook AI Research Computer Visionチームが開発・維持する3Dデータを扱うディープラーニングライブラリ。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/facebookresearch/pytorch3d) ![](https://img.shields.io/github/stars/facebookresearch/pytorch3d?color=yellow&style=flat-square&logo=github)
- [Kaolin](https://kaolin.readthedocs.io/en/latest/) - NVIDIA Technologiesがゲームおよびアプリ開発者向けに開発したPyTorchライブラリで、3Dディープラーニング研究を加速する。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/NVIDIAGameWorks/kaolin/) ![](https://img.shields.io/github/stars/NVIDIAGameWorks/kaolin?color=yellow&style=flat-square&logo=github)
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1911.05063.pdf)
- [PyVista](https://docs.pyvista.org/) - ビジュアライゼーション・ツールキットを用いた、スムーズなインターフェースによる3Dプロットとメッシュ解析
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/pyvista/pyvista) ![](https://img.shields.io/github/stars/pyvista/pyvista?color=yellow&style=flat-square&logo=github)
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://joss.theoj.org/papers/10.21105/joss.01450)
- [pyntcloud](https://pyntcloud.readthedocs.io/en/latest/) - Pyntcloudは、Python 3で3Dポイントクラウドを扱うためのライブラリで、Python科学スタックの力を活かしている
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/daavoo/pyntcloud) ![](https://img.shields.io/github/stars/daavoo/pyntcloud?color=yellow&style=flat-square&logo=github)
- [pointcloudset](https://virtual-vehicle.github.io/pointcloudset/) - 時間軸にわたって記録された大量のポイントクラウドデータの効率的な解析を可能にするPythonライブラリ
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/virtual-vehicle/pointcloudset) ![](https://img.shields.io/github/stars/virtual-vehicle/pointcloudset?color=yellow&style=flat-square&logo=github)
- [LAStools](https://rapidlasso.de/lastools/) - ポイントクラウド処理およびデータ圧縮に用いるC++ライブラリとコマンドラインツール
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/LAStools/LAStools) ![](https://img.shields.io/github/stars/LAStools/LAStools?color=yellow&style=flat-square&logo=github)

## フレームワーク <a id="frameworks"></a>

- [Autoware](https://www.autoware.ai/) - 自律走行車の学術的および研究分野での人気フレームワーク
  - [GitHub oragnization ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/autowarefoundation) ![](https://img.shields.io/github/stars/autowarefoundation?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://www.researchgate.net/profile/Takuya_Azumi/publication/327198306_Autoware_on_Board_Enabling_Autonomous_Vehicles_with_Embedded_Systems/links/5c9085da45851564fae6dcd0/Autoware-on-Board-Enabling-Autonomous-Vehicles-with-Embedded-Systems.pdf)
- [Baidu Apollo](https://apollo.auto/) - Apolloは、自律走行車の開発、テスト、展開を加速する人気フレーム及み
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/ApolloAuto/apollo) ![](https://img.shields.io/github/stars/ApolloAuto/apollo?color=yellow&style=flat-square&logo=github)
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/ApolloAuto)
- [ALFA Framework ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://ieeexplore.ieee.org/document/11024231) - 埋め込みプラットフォームおよびハードウェアアクセラレーションに焦点を当てた処理アルゴリズム開発用オープンソースフレームワーク
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github) ![](https://img.shields.io/github/stars/alfa-project/alfa-framework?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)](https://github.com/alfa-project/alfa-framework)

## アルゴリズム <a id="algorithms"></a>

### 基本マッチングアルゴリズム <a id="basic-matching-algorithms"></a>
- [Iterative closest point (ICP) ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=uzOCS_gdZuM) - 特徴マッチングアプリケーション（ICP）に必須のアルゴリズム
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/pglira/simpleICP) ![](https://img.shields.io/github/stars/pglira/simpleICP?color=yellow&style=flat-square&logo=github) - 点群間の対応付け・位置合わせを行う基本アルゴリズムまたは実装です。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/ethz-asl/libpointmatcher) ![](https://img.shields.io/github/stars/ethz-asl/libpointmatcher?color=yellow&style=flat-square&logo=github) - 点群間の対応付け・位置合わせを行う基本アルゴリズムまたは実装です。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://link.springer.com/content/pdf/10.1007/s10514-013-9327-2.pdf) - libpointmatcher: 実世界データセット上でICPのバリエーションを比較
- [Normal distributions transform ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=0YV4a2asb8Y) - 特徴マッチングに向けた最近の大規模並列アプローチ（NDT）
- [KISS-ICP ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=kMMH8rA1ggI) - 点対点ICPのための論文：適切に実施すればシンプルで正確かつ頑健な登録
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PRBonn/kiss-icp) ![](https://img.shields.io/github/stars/PRBonn/kiss-icp?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2209.15397.pdf)

### セマンティックセグメンテーション <a id="semantic-segmentation"></a>
- [RangeNet++ ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/milioto2019iros.pdf) - フルコンボリューションネットワークを用いた高速かつ正確なLiDARセマンティックセグメンテーション
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PRBonn/rangenet_lib) ![](https://img.shields.io/github/stars/PRBonn/rangenet_lib?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=uo3ZuLuFAzk)
- [PolarNet ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2003.14032.pdf) - オンラインLiDARポイントクラウドセマンティックセグメンテーションに向けた改善されたグリッド表現
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/edwardzhou130/PolarSeg) ![](https://img.shields.io/github/stars/edwardzhou130/PolarSeg?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=iIhttRSMqjE)
- [Frustum PointNets ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1711.08488.pdf) - RGB-Dデータから3Dオブジェクト検出を実現するFrustum PointNets
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/charlesq34/frustum-pointnets) ![](https://img.shields.io/github/stars/charlesq34/frustum-pointnets?color=yellow&style=flat-square&logo=github)
- [Study of LIDAR Semantic Segmentation](https://larissa.triess.eu/scan-semseg/) - LiDARポイントクラウドのスキャンベースセマンティックセグメンテーション：2020年の実験研究IV
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/abs/2004.11803)
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](http://ltriess.github.io/scan-semseg) ![](https://img.shields.io/github/stars/ltriess/scan-semseg?color=yellow&style=flat-square&logo=github)
- [LIDAR-MOS ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://www.ipb.uni-bonn.de/pdfs/chen2021ral-iros.pdf) - 3D LiDARデータにおける移動物体のセグメンテーション
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PRBonn/LiDAR-MOS) ![](https://img.shields.io/github/stars/PRBonn/LiDAR-MOS?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=NHvsYhk4dhw)
- [SuperPoint Graph ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1711.09869.pdf)- Large-scale Point Cloud Semantic Segmentation with Superpoint Graphs
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/loicland/superpoint_graph) ![](https://img.shields.io/github/stars/loicland/superpoint_graph?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=Ijr3kGSU_tU)
- [SuperPoint Transformer ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2306.08045.pdf)- Efficient 3D Semantic Segmentation with Superpoint Transformer
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/drprojects/superpoint_transformer) ![](https://img.shields.io/github/stars/drprojects/superpoint_transformer?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=2qKhpQs9gJw)
- [RandLA-Net ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1911.11236.pdf) - 大規模ポイントクラウドの効率的なセマンティックセグメンテーション
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/QingyongHu/RandLA-Net) ![](https://img.shields.io/github/stars/QingyongHu/RandLA-Net?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=Ar3eY_lwzMk)
- [Automatic labelling ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2108.13757.pdf) - データ融合を用いた都市ポイントクラウドの自動ラベル付け
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Amsterdam-AI-Team/Urban_PointCloud_Processing) ![](https://img.shields.io/github/stars/Amsterdam-AI-Team/Urban_PointCloud_Processing?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=qMj_WM6D0vI)

### 地面セグメンテーション <a id="ground-segmentation"></a>
- [Plane Seg ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/ori-drs/plane_seg) ![](https://img.shields.io/github/stars/ori-drs/plane_seg?color=yellow&style=flat-square&logo=github) - LIDAR点群から地面を抽出・分類する手法・実装・研究資料です。
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=YYs4lJ9t-Xo)
- [LineFit Graph ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://ieeexplore.ieee.org/abstract/document/5548059)- Line fitting-based fast ground segmentation for horizontal 3D LiDAR data
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/lorenwel/linefit_ground_segmentation) ![](https://img.shields.io/github/stars/lorenwel/linefit_ground_segmentation?color=yellow&style=flat-square&logo=github)
- [Patchwork ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2108.05560.pdf)- Region-wise plane fitting-based robust and fast ground segmentation for 3D LiDAR data 
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/LimHyungTae/patchwork) ![](https://img.shields.io/github/stars/LimHyungTae/patchwork?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=rclqeDi4gow)
- [Patchwork++ ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2207.11919.pdf)- Improved version of Patchwork. Patchwork++ provides pybinding as well for deep learning users
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/url-kaist/patchwork-plusplus-ros) ![](https://img.shields.io/github/stars/url-kaist/patchwork-plusplus-ros?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=fogCM159GRk)
- [GSeg3D ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/html/2603.04208v1) - LIDAR点群から地面を抽出・分類する手法・実装・研究資料です。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/dfki-ric/ground_segmentation) ![](https://img.shields.io/github/stars/dfki-ric/ground_segmentation?color=yellow&style=flat-square&logo=github)
  - [ROS2 integration ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/dfki-ric/ground_segmentation_ros2) ![](https://img.shields.io/github/stars/dfki-ric/ground_segmentation_ros2?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=GXLTOoJbOhQ)

### 自己位置推定・地図作成（SLAM）とLIDARオドメトリ・マッピング（LOAM） <a id="simultaneous-localization-and-mapping-slam-and-lidar-based-odometry-and-or-mapping-loam"></a>
- [LOAM J. Zhang and S. Singh ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://youtu.be/8ezyhTAEyHs) - LOAM：リアルタイムでのLiDARオドメトリーアンドマッピング
- [LeGO-LOAM ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/RobustFieldAutonomyLab/LeGO-LOAM) ![](https://img.shields.io/github/stars/RobustFieldAutonomyLab/LeGO-LOAM?color=yellow&style=flat-square&logo=github) - LIDARを用いた自己位置推定、オドメトリ、地図作成の手法・実装・研究資料です。
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=7uCxLUs9fwQ)
  - ROS 2 verison on different repo: [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/eperdices/LeGO-LOAM-SR) ![](https://img.shields.io/github/stars/eperdices/LeGO-LOAM-SR?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Cartographer ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/cartographer-project/cartographer) ![](https://img.shields.io/github/stars/cartographer-project/cartographer?color=yellow&style=flat-square&logo=github) - LIDARを用いた自己位置推定、オドメトリ、地図作成の手法・実装・研究資料です。 ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=29Knm-phAyI)
- [SuMa++ ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2019iros.pdf) - LiDARベースのセマンティックSLAM
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PRBonn/semantic_suma/) ![](https://img.shields.io/github/stars/PRBonn/semantic_suma?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://youtu.be/uo3ZuLuFAzk)
- [OverlapNet ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2020rss.pdf) - LiDARベースのSLAMにおけるループ閉じる処理
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PRBonn/OverlapNet) ![](https://img.shields.io/github/stars/PRBonn/OverlapNet?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=YTfliBco6aw)
- [LIO-SAM ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2007.00258.pdf) - スムージングとマッピングを用いた緊密に結合されたLiDARインертゥアルオドメトリ
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/TixiaoShan/LIO-SAM) ![](https://img.shields.io/github/stars/TixiaoShan/LIO-SAM?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=A0H8CoORZJU)
- [Removert ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](http://ras.papercept.net/images/temp/IROS/files/0855.pdf) - 多解像度レンジ画像を用いた静的ポイントクラウドマップ構築：削除後復元
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/irapkaist/removert) ![](https://img.shields.io/github/stars/irapkaist/removert?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=M9PEGi5fAq8)
- [RESPLE ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2504.11580) - LiDARベースオドメトリにおける再帰的スプライン推定
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/ASIG-X/RESPLE) ![](https://img.shields.io/github/stars/ASIG-X/RESPLE?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=3-xLRRT25ys)
- [KISS-SLAM ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/kiss2025iros.pdf) - KISS-SLAMは、シンプルで頑健かつ正確な3D LiDAR SLAMシステムであり、動作するだけのシンプルなシステムです
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PRBonn/kiss-slam) ![](https://img.shields.io/github/stars/PRBonn/kiss-slam?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [FAST-LIO2 ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2010.08196) - 高速LiDAR-インертゥアルオドメトリは、計算効率が高く頑健なLiDAR-インертゥアルオドメトリパッケージです
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/hku-mars/FAST_LIO/tree/ROS2) ![](https://img.shields.io/github/stars/hku-mars/FAST_LIO?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=2XNd7P6Qc2s)
- [MOLA ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://ingmec.ual.es/~jlblanco/papers/EMCEI_2024_Aguilar.pdf) - ローカリゼーションとマッピングを提供するモジュラーシステム。LiDARオドメトリ（LO）、LiDAR-インертゥアルオドメトリ（LIO）、SLAM、ローカリゼーションのみモード、地図参照を提供します
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/MOLAorg/mola) ![](https://img.shields.io/github/stars/MOLAorg/mola?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=sbakEOnsL6Y)

### 物体検出・追跡 <a id="object-detection-and-object-tracking"></a>
- [Learning to Optimally Segment Point Clouds ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/abs/1912.04976) - カーネギーマッケンジー大学の侯佩雲、デイビッド・ヘルド、デーバー・ラマナンによる。IEEE Robotics and Automation Letters, 2020.
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=wLxIAwIL870)
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/peiyunh/opcseg) ![](https://img.shields.io/github/stars/peiyunh/opcseg?color=yellow&style=flat-square&logo=github)
- [Leveraging Heteroscedastic Aleatoric Uncertainties for Robust Real-Time LiDAR 3D Object Detection ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1809.05590.pdf) - 風見ディ、ラルス・ローゼンバウム、ファビアン・ティム、クライス・ディエートマーラーによる。30th IEEE Intelligent Vehicles Symposium, 2019.
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=2DzH9COLpkU)
- [What You See is What You Get: Exploiting Visibility for 3D Object Detection ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1912.04986.pdf) - 侯佩雲、ジェイソン・ジグラー、デイビッド・ヘルド、デーバー・ラマナンによる、2019年
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=497OF-otY2k)
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/peiyunh/WYSIWYG) ![](https://img.shields.io/github/stars/peiyunh/WYSIWYG?color=yellow&style=flat-square&logo=github)
- [urban_road_filter ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://doi.org/10.3390/s22010194)-
Real-Time LIDAR-Based Urban Road and Sidewalk Detection for Autonomous Vehicles
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/jkk-research/urban_road_filter) ![](https://img.shields.io/github/stars/jkk-research/urban_road_filter?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=T2qi4pldR-E)
- [detection_by_tracker ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://www.semanticscholar.org/paper/3D-LIDAR-Multi-Object-Tracking-for-Autonomous-and-Rachman/bafc8fcdee9b22708491ea1293524ece9e314851) - 3D-LIDARによる自動運転用多対象トラッキング：都市道路環境における多対象検出とトラッキング、Autoware Universeにも使用
  - [GitHub ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://autowarefoundation.github.io/autoware.universe/main/perception/detection_by_tracker/) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=xSGCpb24dhI)

### LIDARと他センサーのキャリブレーション <a id="lidar-other-sensor-calibration"></a>

- [direct_visual_lidar_calibration](https://koide3.github.io/direct_visual_lidar_calibration/) - LIDARとカメラ等の他センサー間を較正する手法・実装です。
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/koide3/direct_visual_lidar_calibration) ![](https://img.shields.io/github/stars/koide3/direct_visual_lidar_calibration?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://staff.aist.go.jp/k.koide/assets/pdf/icra2023.pdf)
- [OpenCalib ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/PJLab-ADG/SensorsCalibration) ![](https://img.shields.io/github/stars/PJLab-ADG/SensorsCalibration?color=yellow&style=flat-square&logo=github) - LIDARとカメラ等の他センサー間を較正する手法・実装です。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/2205.14087)

## シミュレーター <a id="simulators"></a>
- [CoppeliaSim](https://www.coppeliarobotics.com/coppeliaSim) - クロスプラットフォームの汎用ロボットシミュレータ（以前はV-REPと呼ばれていた）
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/user/VirtualRobotPlatform)
- [OSRF Gazebo](http://gazebosim.org/) - OGREベースの汎用ロボットシミュレータ、ROS/ROS 2と互換性あり
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/osrf/gazebo) ![](https://img.shields.io/github/stars/osrf/gazebo?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [CARLA](https://carla.org/) - 自動車用途向けUnreal Engineベースのシミュレータ。Autoware、Baidu ApolloおよびROS/ROS 2と互換性あり
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/carla-simulator/carla) ![](https://img.shields.io/github/stars/carla-simulator/carla?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UC1llP9ekCwt8nEJzMJBQekg)
- [LGSVL / SVL](https://www.lgsvlsimulator.com/) - LIDARセンサーと点群データを再現・生成するシミュレーターです。 [suspend](https://www.svlsimulator.com/news/2022-01-20-svl-simulator-sunset)
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/lgsvl/simulator) ![](https://img.shields.io/github/stars/lgsvl/simulator?color=yellow&style=flat-square&logo=github)
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/c/LGSVLSimulator)
- [OSSDC SIM](https://github.com/OSSDC/OSSDC-SIM) - 自動車用途向けUnity Engineベースのシミュレータ。懸念されたLGSVLシミュレータに基づくが、積極的に開発中。Autoware、Baidu ApolloおよびROS/ROS 2と互換性あり
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/OSSDC/OSSDC-SIM) ![](https://img.shields.io/github/stars/OSSDC/OSSDC-SIM?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=fU_C38WEwGw)
- [AirSim](https://microsoft.github.io/AirSim) - ドローンおよび自動車向けUnreal Engineベースのシミュレータ。ROSと互換性あり
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/microsoft/AirSim) ![](https://img.shields.io/github/stars/microsoft/AirSim?color=yellow&style=flat-square&logo=github)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=gnz1X3UNM5Y)
- [AWSIM](https://tier4.github.io/AWSIM) - 自動車用途向けUnity Engineベースのシミュレータ。AutowareおよびROS 2と互換性あり
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/tier4/AWSIM) ![](https://img.shields.io/github/stars/tier4/AWSIM?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=FH7aBWDmSNA)

## 関連Awesomeリスト <a id="related-awesome"></a>
- [Awesome point cloud analysis ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Yochengliu/awesome-point-cloud-analysis#readme) ![](https://img.shields.io/github/stars/Yochengliu/awesome-point-cloud-analysis?color=yellow&style=flat-square&logo=github) 
- [Awesome robotics ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Kiloreux/awesome-robotics#readme) ![](https://img.shields.io/github/stars/Kiloreux/awesome-robotics?color=yellow&style=flat-square&logo=github)
- [Awesome robotics libraries ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/jslee02/awesome-robotics-libraries#readme) ![](https://img.shields.io/github/stars/jslee02/awesome-robotics-libraries?color=yellow&style=flat-square&logo=github)
- [Awesome ROS 2 ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/fkromer/awesome-ros2#readme) ![](https://img.shields.io/github/stars/fkromer/awesome-ros2?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Awesome artificial intelligence ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/owainlewis/awesome-artificial-intelligence#readme) ![](https://img.shields.io/github/stars/owainlewis/awesome-artificial-intelligence?color=yellow&style=flat-square&logo=github)
- [Awesome computer vision ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/jbhuang0604/awesome-computer-vision#readme) ![](https://img.shields.io/github/stars/jbhuang0604/awesome-computer-vision?color=yellow&style=flat-square&logo=github)
- [Awesome machine learning ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/josephmisiti/awesome-machine-learning#readme) ![](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning?color=yellow&style=flat-square&logo=github)
- [Awesome deep learning ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/ChristosChristofidis/awesome-deep-learning#readme) ![](https://img.shields.io/github/stars/ChristosChristofidis/awesome-deep-learning?color=yellow&style=flat-square&logo=github)
- [Awesome reinforcement learning ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/aikorea/awesome-rl/#readme) ![](https://img.shields.io/github/stars/aikorea/awesome-rl?color=yellow&style=flat-square&logo=github)
- [Awesome SLAM datasets ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/youngguncho/awesome-slam-datasets#readme) ![](https://img.shields.io/github/stars/youngguncho/awesome-slam-datasets?color=yellow&style=flat-square&logo=github)
- [Awesome electronics ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/kitspace/awesome-electronics#readme) ![](https://img.shields.io/github/stars/kitspace/awesome-electronics?color=yellow&style=flat-square&logo=github)
- [Awesome vehicle security and car hacking ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/jaredthecoder/awesome-vehicle-security#readme) ![](https://img.shields.io/github/stars/jaredthecoder/awesome-vehicle-security?color=yellow&style=flat-square&logo=github)
- [Awesome LIDAR-Camera calibration ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Deephome/Awesome-LiDAR-Camera-Calibration) ![](https://img.shields.io/github/stars/Deephome/Awesome-LiDAR-Camera-Calibration?color=yellow&style=flat-square&logo=github)
- [Awesome LiDAR Place Recognition ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/hogyun2/awesome-lidar-place-recognition) ![](https://img.shields.io/github/stars/hogyun2/awesome-lidar-place-recognition?color=yellow&style=flat-square&logo=github)
- [Awesome-LiDAR-MOS ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/neng-wang/Awesome-LiDAR-MOS) ![](https://img.shields.io/github/stars/neng-wang/Awesome-LiDAR-MOS?color=yellow&style=flat-square&logo=github) Moving Object Segmentation
- [Awesome-LiDAR-Visual-SLAM ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/sjtuyinjie/awesome-LiDAR-Visual-SLAM) ![](https://img.shields.io/github/stars/sjtuyinjie/awesome-LiDAR-Visual-SLAM?color=yellow&style=flat-square&logo=github)
- [Awesome LIDAR ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/szenergy/awesome-lidar) ![](https://img.shields.io/github/stars/szenergy/awesome-lidar?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)

## その他 <a id="others"></a>
- [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - LIDARの理解、変換、可視化、運用に役立つその他の資料です。 [scene color reconstruction](https://github.com/philipturner/scene-color-reconstruction)
- [Pointcloudprinter ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/marian42/pointcloudprinter) ![](https://img.shields.io/github/stars/marian42/pointcloudprinter?color=yellow&style=flat-square&logo=github) - LIDARの理解、変換、可視化、運用に役立つその他の資料です。
- [CloudCompare](https://cloudcompare.org/) - CloudCompareは、無料かつクロスプラットフォームのポイントクラウド編集ソフトウェアです
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/CloudCompare) ![](https://img.shields.io/github/stars/CloudCompare?color=yellow&style=flat-square&logo=github)
- [Pcx ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/keijiro/Pcx) ![](https://img.shields.io/github/stars/keijiro/Pcx?color=yellow&style=flat-square&logo=github) - LIDARの理解、変換、可視化、運用に役立つその他の資料です。
- [Bpy ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/uhlik/bpy) ![](https://img.shields.io/github/stars/uhlik/bpy?color=yellow&style=flat-square&logo=github) - LIDARの理解、変換、可視化、運用に役立つその他の資料です。
- [Semantic Segmentation Editor ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) ![](https://img.shields.io/github/stars/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor?color=yellow&style=flat-square&logo=github) - LIDARの理解、変換、可視化、運用に役立つその他の資料です。
- [3D Bounding Box Annotation Tool ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/walzimmer/3d-bat) ![](https://img.shields.io/github/stars/walzimmer/3d-bat?color=yellow&style=flat-square&logo=github) - LIDARの理解、変換、可視化、運用に役立つその他の資料です。
  - [Paper ![](https://img.shields.io/badge/paper-blue?style=flat-square&logo=semanticscholar)](https://arxiv.org/pdf/1905.00525.pdf)
  - [YouTube video ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/watch?v=gSGG4Lw8BSU)
- [Photogrammetry importer ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/SBCV/Blender-Addon-Photogrammetry-Importer) ![](https://img.shields.io/github/stars/SBCV/Blender-Addon-Photogrammetry-Importer?color=yellow&style=flat-square&logo=github) - LIDARの理解、変換、可視化、運用に役立つその他の資料です。
- [Foxglove](https://foxglove.dev/) - Foxglove Studioは、ロボット向け統合型可視化および診断ツールであり、ブラウザ上で利用可能またはLinux、Windows、macOSでのデスクトップアプリとしてダウンロード可能
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/foxglove/studio) ![](https://img.shields.io/github/stars/foxglove/studio?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/channel/UCrIbrBxb9HBAnlhbx2QycsA)
- [Lichtblick suite](https://github.com/lichtblick-suite) - Lichtblickは、Foxglove Studioのオープンソース代替ツールであり、ロボットデータの可視化および解析を行う
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/lichtblick-suite/lichtblick) ![](https://img.shields.io/github/stars/lichtblick-suite/lichtblick?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
- [Rerun](https://rerun.io/) - Rerunは、時系列意識型のマルチモーダルデータスタックと可視化に用いられるツールである
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/rerun-io/rerun) ![](https://img.shields.io/github/stars/rerun-io/rerun?color=yellow&style=flat-square&logo=github) ![](https://img.shields.io/badge/ROS-2-34aec5?style=flat-square&logo=ros)
  - [YouTube channel ![](https://img.shields.io/badge/youtube-red?style=flat-square&logo=youtube)](https://www.youtube.com/@rerundotio/videos)
- [MeshLab](https://www.meshlab.net/) - MeshLabは、3D三角メッシュおよびポイントクラウドの処理・編集に用いられるオープンソース・ポータブル・拡張可能なシステムである
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/cnr-isti-vclab/meshlab) ![](https://img.shields.io/github/stars/cnr-isti-vclab/meshlab?color=yellow&style=flat-square&logo=github)
- [CloudPeek](https://github.com/Geekgineer/CloudPeek) is a lightweight, c++ single-header, cross-platform point cloud viewer, designed for simplicity and efficiency without relying on heavy external libraries like PCL or Open3D.
  - [GitHub repository ![](https://img.shields.io/badge/github-black?style=flat-square&logo=github)](https://github.com/Geekgineer/CloudPeek) ![](https://img.shields.io/github/stars/Geekgineer/CloudPeek?color=yellow&style=flat-square&logo=github)
- [Which SLAM Algorithm Should I Choose?](https://www.slambotics.org/blog/which-slam-to-choose) Slambotics - LIDARの理解、変換、可視化、運用に役立つその他の資料です。

<img src="img/lidar02.svg" alt="LIDAR" />
<img src="https://raw.githubusercontent.com/szenergy/awesome-lidar/refs/heads/main/img/cc0.svg" align="center" width="400" alt="CC0" />
