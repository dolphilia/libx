---
title: Awesome LIDAR
description: LIDARのメーカー、データセット、点群処理ライブラリ、SLAM・セグメンテーションのアルゴリズム、シミュレーター、可視化・注釈ツール。
licenseSource: github-szenergy-awesome-lidar-readme-md
---
# Awesome LIDAR

ロボットや自動運転で使うLIDARセンサーと点群処理ツールをまとめています。メーカー、データセット、処理ライブラリ、フレームワーク、アルゴリズム、シミュレーター、可視化・注釈ソフトウェアを探せます。

[LIDAR](https://en.wikipedia.org/wiki/Lidar)は、レーザー光を使うリモートセンシング技術です。上流の序文では、周囲をおよそセンチメートル単位の精度で測定し、得られる2Dまたは3Dの点の集合を通常は点群と呼ぶと説明されています。

上流リストには、[別の表示形式](https://szenergy.github.io/awesome-lidar/)と[ソースコード](https://github.com/szenergy/awesome-lidar)もあります。

## 表記規則 <a id="conventions"></a>

動画、論文・詳細資料、リポジトリはリンクのラベルで区別しています。「ROS 2対応」は上流リストの対応バッジを文章にしたものです。[ROS 2のドキュメント](https://docs.ros.org/)も参照できます。対応条件と開発状況は、固定された原文のスナップショットに基づきます。

## メーカー <a id="manufacturers"></a>

- [Velodyne](https://velodynelidar.com/) - OusterとVelodyneは2023年2月10日に対等合併を完了。Velodyneは機械式およびソリッドステートLIDARのメーカーで、本社は米国カリフォルニア州San Jose。
  - [YouTubeチャンネル](https://www.youtube.com/user/VelodyneLiDAR)
  - [ROSドライバー](https://github.com/ros-drivers/velodyne)
  - [C++/Pythonライブラリ](https://github.com/valgur/velodyne_decoder)
- [Ouster](https://ouster.com/) - デジタル回転式LiDARを専門とするメーカー。本社は米国San Francisco。
  - [YouTubeチャンネル](https://www.youtube.com/c/Ouster-lidar)
  - [GitHub組織](https://github.com/ouster-lidar) ROS 2対応。
- [Livox](https://www.livoxtech.com/) - LIDARメーカー。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCnLpB5QxlQUexi40vM12mNQ)
  - [GitHub組織](https://github.com/Livox-SDK) ROS 2対応。
- [SICK](https://www.sick.com/ag/en/) - センサーと自動化機器のメーカー。本社はドイツWaldkirch。
  - [YouTubeチャンネル](https://www.youtube.com/user/SICKSensors)
  - [GitHub組織](https://github.com/SICKAG) ROS 2対応。
- [Hokuyo](https://www.hokuyo-aut.jp/) - センサーと自動化機器のメーカー。本社は大阪。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCYzJXC82IEy-h-io2REin5g)
- [Pioneer](http://autonomousdriving.pioneer/en/3d-lidar/) - MEMSミラーによるラスタースキャン式LiDAR（3D-LiDAR）を専門とするメーカー。本社は東京。
  - [YouTubeチャンネル](https://www.youtube.com/user/PioneerCorporationPR)
- [Luminar](https://www.luminartech.com/) - 小型の車載グレードのセンサーを中心とするLIDARメーカー。本社は米国カリフォルニア州Palo Alto。
  - [Vimeoチャンネル](https://vimeo.com/luminartech)
  - [GitHub組織](https://github.com/luminartech)
- [Hesai](https://www.hesaitech.com/) - 中国Shanghaiで設立されたLIDARメーカーHesai Technology。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCG2_ffm6sdMsK-FX8yOLNYQ/videos)
  - [GitHub組織](https://github.com/HesaiTechnology)
- [Robosense](http://www.robosense.ai/) - RoboSense（Suteng Innovation Technology Co., Ltd.）によるLIDARセンサー、AIアルゴリズム、ICチップセットの開発・製造。中国ShenzhenとBeijingに拠点。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCYCK8j678N6d_ayWE_8F3rQ)
  - [GitHub組織](https://github.com/RoboSense-LiDAR) ROS 2対応。
- [LSLIDAR](https://www.lslidar.com/) - LSLiDAR（Leishen Intelligent System Co., Ltd.）によるLIDARセンサー製造と包括的なソリューション提供。中国Shenzhenに拠点。
  - [YouTubeチャンネル](https://www.youtube.com/@lslidar2015)
  - [GitHub組織](https://github.com/Lslidar) ROS 2対応。
- [Ibeo](https://www.ibeo-as.com/) - 自動車業界向けの環境検知用レーザースキャナーとLIDARを製造するIbeo Automotive Systems GmbH。ドイツHamburgに拠点。
  - [YouTubeチャンネル](https://www.youtube.com/c/IbeoAutomotive/)
- [Innoviz](https://innoviz.tech/) - ソリッドステートLIDARを専門とするInnoviz Technologies。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCVc1KFsu2eb20M8pKFwGiFQ)
- [Quanenergy](https://quanergy.com/) - Quanenergy Systemsによるソリッドステートおよび機械式LIDARセンサーと、地図作成、産業自動化、交通、セキュリティ向けの一貫したソリューション。本社は米国カリフォルニア州Sunnyvale。
  - [YouTubeチャンネル](https://www.youtube.com/c/QuanergySystems)
- [Cepton](https://www.cepton.com/index.html) - Cepton Technologies, Inc.が独自のMMT（micro motion technology）を用いて開発する、摩擦がなくミラーを使わないLIDAR設計。本社は米国カリフォルニア州San Jose。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCUgkBZZ1UWWkkXJ5zD6o8QQ)
- [Blickfeld](https://www.blickfeld.com/) - 自律モビリティとIoT向けのソリッドステートLIDARメーカー。ドイツMünchenに拠点。
  - [YouTubeチャンネル](https://www.youtube.com/c/BlickfeldLiDAR)
  - [GitHub組織](https://github.com/Blickfeld) ROS 2対応。
- [Neuvition](https://www.neuvition.com/) - 中国Wujiangを拠点とするソリッドステートLIDARメーカー。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UClFjlekWJo4T5bfzxX0ZW3A)
- [Aeva](https://www.aeva.com/) - 自動運転、家電、健康、産業ロボット、セキュリティ向けの認識技術。米国カリフォルニア州Mountain Viewに拠点。
  - [YouTubeチャンネル](https://www.youtube.com/c/AevaInc)
  - [GitHub組織](https://github.com/aevainc)
- [XenomatiX](https://www.xenomatix.com/) - 複数のレーザービームを使う方式のソリッドステートLIDARセンサー。本社はベルギーLeuven。
  - [YouTubeチャンネル](https://www.youtube.com/@XenomatiXTruesolidstatelidar)
- [MicroVision](https://microvision.com/) - 車載向けLIDARセンサーを中心とするMEMS式レーザービーム走査技術。ドイツHamburgに所在。
  - [YouTubeチャンネル](https://www.youtube.com/user/mvisvideo)
  - [GitHub組織](https://github.com/MicroVision-Inc)
- [PreAct](https://www.preact-tech.com/) - 自動車業界とその周辺で安全性と効率を高めることを使命に掲げる企業。本社は米国オレゴン州Portland。
  - [YouTubeチャンネル](https://www.youtube.com/@PreActTechnologies)
- [Pepperl+Fuchs](https://www.pepperl-fuchs.com/) - 自動化ソリューションとLIDARなどのセンサー技術を専門とするグローバル技術企業。ドイツMannheimに拠点。
  - [YouTubeチャンネル](https://www.youtube.com/c/pepperl-fuchs)
  - [YouTubeチャンネル](https://www.youtube.com/user/PepperlFuchsUSA)
  - [GitHub組織](https://github.com/PepperlFuchs) ROS 2対応。
- [Riegl](https://www.riegl.com/) - オーストリアに拠点を置く3Dレーザースキャンシステムのメーカー。
  - [YouTubeチャンネル](https://www.youtube.com/@RIEGLLIDAR)
  - [GitHub組織](https://github.com/riegllms) ROS 2対応。

## データセット <a id="datasets"></a>

- [Ford Dataset](https://avdata.ford.com/) - 全センサーの生データ、キャリブレーション値、位置・姿勢の軌跡、位置・姿勢の正解値、3D地図を含むタイムスタンプ付きデータセット。Robot Operating System（ROS）対応。
  - [論文・資料](https://arxiv.org/pdf/2003.07969.pdf)
  - [GitHubリポジトリ](https://github.com/Ford/AVData)
- [Audi A2D2 Dataset](https://www.a2d2.audi) - 2Dセマンティックセグメンテーション、3D点群、3Dバウンディングボックス、車両バスのデータを含むデータセット。
  - [論文・資料](https://www.a2d2.audi/content/dam/a2d2/dataset/a2d2-audi-autonomous-driving-dataset.pdf)
- [Waymo Open Dataset](https://waymo.com/open/) - LIDARとカメラそれぞれのデータに対して独立に生成されたラベルを含むデータセット。単純な投影によるラベルではない。
- [Oxford RobotCar](https://robotcar-dataset.robots.ox.ac.uk/) - 英国Oxfordの同一路線を、1年を超える期間に100回を超えて反復走行した記録。
  - [YouTubeチャンネル](https://www.youtube.com/c/ORIOxfordRoboticsInstitute)
  - [論文・資料](https://robotcar-dataset.robots.ox.ac.uk/images/RCD_RTK.pdf)
- [EU Long-term Dataset](https://epan-utbm.github.io/utbm_robocar_dataset/) - 最大11個の異種センサーを搭載した車両を人が運転して収集。フランスMontbéliardの中心部で長期データ、郊外でラウンドアバウトのデータを収録。車両速度は、原文が引用するフランスの交通規則に従い50 km/hに制限。
- [NuScenes](https://www.nuscenes.org/) - 自動運転向けの公開大規模データセット。
  - [論文・資料](https://arxiv.org/pdf/1903.11027.pdf)
- [Lyft](https://level5.lyft.com/dataset/) - LIDARとカメラを搭載したFord Fusionの車両群で収集した公開データセット。
- [KITTI](http://www.cvlibs.net/datasets/kitti/raw_data.php) - コンピュータービジョン用途を中心とし、LIDAR点群も含む公開データセット。ROS 2対応。
- [Semantic KITTI](http://semantic-kitti.org/) - シーンのセマンティックセグメンテーションとパノプティックセグメンテーション用のデータセット。
  - [YouTube動画](https://www.youtube.com/watch?v=3qNOXvkpK4I)
- [CADC - Canadian Adverse Driving Conditions Dataset](http://cadcd.uwaterloo.ca/) - 降雪を含む悪天候下の自動運転向け公開大規模データセット。
  - [論文・資料](https://arxiv.org/pdf/2001.10117.pdf)
- [UofTPed50 Dataset](https://www.autodrive.utoronto.ca/uoftped50) - トロント大学aUTorontoの自動運転車データセット。GPS/IMU、3D LIDAR、単眼カメラのデータを含み、3D歩行者検出に利用できる。
  - [論文・資料](https://arxiv.org/pdf/1905.08758.pdf)
- [PandaSet Open Dataset](https://scale.com/open-datasets/pandaset) - HesaiとScaleによる自動運転向け公開大規模データセット。実際の自動運転車に搭載したセンサー一式を使い、都市部の難しい走行状況を収録。
- [Cirrus dataset](https://developer.volvocars.com/open-datasets/cirrus/) - 不均一なLIDAR走査パターンの分布を含み、長距離計測を重視する公開データセット。Luminar Hydra LIDARを使用し、Volvo Cars Innovation Portalで提供。
  - [論文・資料](https://arxiv.org/pdf/2012.02938.pdf)
- [USyd Dataset — University of Sydney Campus Dataset](http://its.acfr.usyd.edu.au/datasets/usyd-campus-dataset/) - シドニー大学のキャンパスと周辺を、1.5年間にわたり毎週記録した長期・大規模データセット。複数のセンサー方式とさまざまな環境条件を含む。ROS対応。
  - [論文・資料](https://ieeexplore.ieee.org/document/9109704)
- [Brno Urban Dataset](https://github.com/Robotics-BUT/Brno-Urban-Dataset) - チェコBrnoにおける、自動運転車と自律ロボットの航法・自己位置推定用データセット。
  - [論文・資料](https://ieeexplore.ieee.org/document/9197277)
  - [YouTube動画](https://www.youtube.com/watch?v=wDFePIViwqY)
- [Argoverse](https://www.argoverse.org/) - 米国ペンシルベニア州Pittsburghとフロリダ州Miamiで収集した、自動運転車の認識用データセット。3D追跡と運動予測を含む。
  - [論文・資料](https://openaccess.thecvf.com/content_CVPR_2019/papers/Chang_Argoverse_3D_Tracking_and_Forecasting_With_Rich_Maps_CVPR_2019_paper.pdf)
  - [YouTube動画](https://www.youtube.com/watch?v=DM8jWfi69zM)
- [Boreas Dataset](https://www.boreas.utias.utoronto.ca/) - 同一路線を1年間にわたり反復走行し、顕著な季節変化を記録したデータセット。雨や大雪を含む350 km超の走行データを収録。原文が独自の高品質な構成と説明するセンサー群は、128チャネルのVelodyne Alpha Prime LIDARと360度のNavtechレーダーを含む。Applanix POSLV GPS/IMUによる位置・姿勢の正解値は、原文では高精度と説明される。
  - [論文・資料](https://arxiv.org/abs/2203.10168)
  - [GitHubリポジトリ](https://github.com/utiasASRL/pyboreas)

## ライブラリ <a id="libraries"></a>

- [Point Cloud Library (PCL)](http://www.pointclouds.org/) - 産業・研究用途に使われる高度に並列化されたプログラミングライブラリ。
  - [GitHubリポジトリ](https://github.com/PointCloudLibrary/pcl) ROS 2対応。
- [Open3Dライブラリ](http://www.open3d.org/docs/release/) - 3Dデータの処理と可視化のアルゴリズムを備えるオープンソースライブラリ。C++とPythonに対応。
  - [GitHubリポジトリ](https://github.com/intel-isl/Open3D)
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCRJBlASPfPBtPXJSPffJV-w)
- [PyTorch Geometric](https://arxiv.org/pdf/1903.02428.pdf) - PyTorch向けの幾何学的深層学習の拡張ライブラリ。
  - [GitHubリポジトリ](https://github.com/rusty1s/pytorch_geometric)
- [PyTorch3d](https://pytorch3d.org/) - Facebook AI Research Computer Vision Teamが開発・保守する、3Dデータの深層学習用ライブラリ。
  - [GitHubリポジトリ](https://github.com/facebookresearch/pytorch3d)
- [Kaolin](https://kaolin.readthedocs.io/en/latest/) - ゲーム・アプリ開発者向けに3D深層学習研究を高速化する、NVIDIA TechnologiesのPyTorchライブラリ。
  - [GitHubリポジトリ](https://github.com/NVIDIAGameWorks/kaolin/)
  - [論文・資料](https://arxiv.org/pdf/1911.05063.pdf)
- [PyVista](https://docs.pyvista.org/) - Visualization Toolkitの簡潔なインターフェースによる3D描画とメッシュ解析。
  - [GitHubリポジトリ](https://github.com/pyvista/pyvista)
  - [論文・資料](https://joss.theoj.org/papers/10.21105/joss.01450)
- [pyntcloud](https://pyntcloud.readthedocs.io/en/latest/) - Pythonの科学計算用ライブラリ群を使って3D点群を扱うPython 3ライブラリ。
  - [GitHubリポジトリ](https://github.com/daavoo/pyntcloud)
- [pointcloudset](https://virtual-vehicle.github.io/pointcloudset/) - 時系列で記録した大規模な点群データセットを効率的に解析するPythonライブラリ。
  - [GitHubリポジトリ](https://github.com/virtual-vehicle/pointcloudset)
- [LAStools](https://rapidlasso.de/lastools/) - 点群処理とデータ圧縮のためのC++ライブラリとコマンドラインツール。
  - [GitHubリポジトリ](https://github.com/LAStools/LAStools)

## フレームワーク <a id="frameworks"></a>

- [Autoware](https://www.autoware.ai/) - 自動運転車の学術・研究用途に使われるフレームワーク。
  - [GitHub組織](https://github.com/autowarefoundation) ROS 2対応。
  - [論文・資料](https://www.researchgate.net/profile/Takuya_Azumi/publication/327198306_Autoware_on_Board_Enabling_Autonomous_Vehicles_with_Embedded_Systems/links/5c9085da45851564fae6dcd0/Autoware-on-Board-Enabling-Autonomous-Vehicles-with-Embedded-Systems.pdf)
- [Baidu Apollo](https://apollo.auto/) - 自動運転車の開発、テスト、展開のためのフレームワーク。
  - [GitHubリポジトリ](https://github.com/ApolloAuto/apollo)
  - [YouTubeチャンネル](https://www.youtube.com/c/ApolloAuto)
- [ALFAフレームワーク](https://ieeexplore.ieee.org/document/11024231) - 組み込みプラットフォームとハードウェアアクセラレーションを重視する、処理アルゴリズム開発用のオープンソースフレームワーク。
  - [GitHubリポジトリ](https://github.com/alfa-project/alfa-framework) ROS 2対応。

## アルゴリズム <a id="algorithms"></a>

### 基本マッチングアルゴリズム <a id="basic-matching-algorithms"></a>

- [反復最近傍点法（ICP）](https://www.youtube.com/watch?v=uzOCS_gdZuM) - 特徴マッチング用のアルゴリズム（ICP）。上流リストでは、この用途に不可欠な手法と説明される。
  - [GitHubリポジトリ](https://github.com/pglira/simpleICP) - C++、Julia、Matlab、Octave、PythonによるsimpleICPの実装。
  - [GitHubリポジトリ](https://github.com/ethz-asl/libpointmatcher) - ICPアルゴリズムを実装するモジュール式ライブラリlibpointmatcher。
  - [論文・資料](https://link.springer.com/content/pdf/10.1007/s10514-013-9327-2.pdf) - 実世界のデータセットでICPの変種を比較するlibpointmatcherの論文。
- [正規分布変換（NDT）](https://www.youtube.com/watch?v=0YV4a2asb8Y) - 特徴マッチングに大規模並列処理を用いる手法（NDT）。上流リストでは、より新しい手法と説明される。
- [KISS-ICP](https://www.youtube.com/watch?v=kMMH8rA1ggI) - 点対点ICPによる位置合わせを扱う「In Defense of Point-to-Point ICP – Simple, Accurate, and Robust Registration If Done the Right Way」。
  - [GitHubリポジトリ](https://github.com/PRBonn/kiss-icp) ROS 2対応。
  - [論文・資料](https://arxiv.org/pdf/2209.15397.pdf)

### セマンティックセグメンテーション <a id="semantic-segmentation"></a>

- [RangeNet++](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/milioto2019iros.pdf) - 完全畳み込みネットワークを用いたLIDARのセマンティックセグメンテーション。原文では高速かつ高精度と説明される。
  - [GitHubリポジトリ](https://github.com/PRBonn/rangenet_lib)
  - [YouTube動画](https://www.youtube.com/watch?v=uo3ZuLuFAzk)
- [PolarNet](https://arxiv.org/pdf/2003.14032.pdf) - オンラインのLiDAR点群セマンティックセグメンテーションに用いる改良グリッド表現。
  - [GitHubリポジトリ](https://github.com/edwardzhou130/PolarSeg)
  - [YouTube動画](https://www.youtube.com/watch?v=iIhttRSMqjE)
- [Frustum PointNets](https://arxiv.org/pdf/1711.08488.pdf) - RGB-Dデータからの3D物体検出に用いるFrustum PointNets。
  - [GitHubリポジトリ](https://github.com/charlesq34/frustum-pointnets)
- [LIDARのセマンティックセグメンテーションの研究](https://larissa.triess.eu/scan-semseg/) - LiDAR点群のスキャンベースのセマンティックセグメンテーションを実験的に調べた研究。IV 2020。
  - [論文・資料](https://arxiv.org/abs/2004.11803)
  - [プロジェクトサイト](http://ltriess.github.io/scan-semseg)
- [LIDAR-MOS](https://www.ipb.uni-bonn.de/pdfs/chen2021ral-iros.pdf) - 3D LIDARデータの移動物体セグメンテーション。
  - [GitHubリポジトリ](https://github.com/PRBonn/LiDAR-MOS)
  - [YouTube動画](https://www.youtube.com/watch?v=NHvsYhk4dhw)
- [SuperPoint Graph](https://arxiv.org/pdf/1711.09869.pdf) - Superpoint Graphsを用いた大規模点群のセマンティックセグメンテーション。
  - [GitHubリポジトリ](https://github.com/loicland/superpoint_graph)
  - [YouTube動画](https://www.youtube.com/watch?v=Ijr3kGSU_tU)
- [SuperPoint Transformer](https://arxiv.org/pdf/2306.08045.pdf) - Superpoint Transformerによる効率的な3Dセマンティックセグメンテーション。
  - [GitHubリポジトリ](https://github.com/drprojects/superpoint_transformer)
  - [YouTube動画](https://www.youtube.com/watch?v=2qKhpQs9gJw)
- [RandLA-Net](https://arxiv.org/pdf/1911.11236.pdf) - 大規模点群の効率的なセマンティックセグメンテーション。
  - [GitHubリポジトリ](https://github.com/QingyongHu/RandLA-Net)
  - [YouTube動画](https://www.youtube.com/watch?v=Ar3eY_lwzMk)
- [自動ラベル付け](https://arxiv.org/pdf/2108.13757.pdf) - データ融合による都市の点群の自動ラベル付け。
  - [GitHubリポジトリ](https://github.com/Amsterdam-AI-Team/Urban_PointCloud_Processing)
  - [YouTube動画](https://www.youtube.com/watch?v=qMj_WM6D0vI)

### 地面セグメンテーション <a id="ground-segmentation"></a>

- [Plane Seg](https://github.com/ori-drs/plane_seg) - 地面の平面を抽出するROS対応のライブラリ。LIDARデータに平面を当てはめる。
  - [YouTube動画](https://www.youtube.com/watch?v=YYs4lJ9t-Xo)
- [LineFit Graph](https://ieeexplore.ieee.org/abstract/document/5548059) - 水平3D LiDARデータに直線を当てはめて高速に地面を抽出する手法。
  - [GitHubリポジトリ](https://github.com/lorenwel/linefit_ground_segmentation)
- [Patchwork](https://arxiv.org/pdf/2108.05560.pdf) - 3D LiDARデータの領域ごとに平面を当てはめる地面抽出手法。原文では頑健かつ高速と説明される。
  - [GitHubリポジトリ](https://github.com/LimHyungTae/patchwork)
  - [YouTube動画](https://www.youtube.com/watch?v=rclqeDi4gow)
- [Patchwork++](https://arxiv.org/pdf/2207.11919.pdf) - Patchworkの改良版。深層学習の利用者向けにPythonバインディングも提供。
  - [GitHubリポジトリ](https://github.com/url-kaist/patchwork-plusplus-ros) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=fogCM159GRk)
- [GSeg3D](https://arxiv.org/html/2603.04208v1) - 安全性が重要なロボットと自動運転向けに設計された、LiDAR点群のグリッドベースの地面抽出。原文では高精度と説明される。
  - [GitHubリポジトリ](https://github.com/dfki-ric/ground_segmentation)
  - [ROS 2連携](https://github.com/dfki-ric/ground_segmentation_ros2) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=GXLTOoJbOhQ)

### 自己位置推定・地図作成（SLAM）とLIDARオドメトリ・マッピング（LOAM） <a id="simultaneous-localization-and-mapping-slam-and-lidar-based-odometry-and-or-mapping-loam"></a>

- [LOAM J. Zhang and S. Singh](https://youtu.be/8ezyhTAEyHs) - リアルタイムのLIDARオドメトリと地図作成を扱うLOAM。
- [LeGO-LOAM](https://github.com/RobustFieldAutonomyLab/LeGO-LOAM) - ROS対応の無人地上車両（UGV）向けに、地面に着目して最適化した軽量なLIDARオドメトリ・地図作成システム。
  - [YouTube動画](https://www.youtube.com/watch?v=7uCxLUs9fwQ)
  - 別のリポジトリにあるROS 2版： [GitHubリポジトリ](https://github.com/eperdices/LeGO-LOAM-SR) ROS 2対応。
- [Cartographer](https://github.com/cartographer-project/cartographer) - 複数のプラットフォームとセンサー構成で、リアルタイムの2D・3D自己位置推定と地図作成（SLAM）を行うROS対応システム。ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=29Knm-phAyI)
- [SuMa++](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2019iros.pdf) - LiDARを用いたセマンティックSLAM。
  - [GitHubリポジトリ](https://github.com/PRBonn/semantic_suma/)
  - [YouTube動画](https://youtu.be/uo3ZuLuFAzk)
- [OverlapNet](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2020rss.pdf) - LIDARベースのSLAMにおけるループ閉じ込み。
  - [GitHubリポジトリ](https://github.com/PRBonn/OverlapNet)
  - [YouTube動画](https://www.youtube.com/watch?v=YTfliBco6aw)
- [LIO-SAM](https://arxiv.org/pdf/2007.00258.pdf) - 平滑化と地図作成による密結合のLiDAR・慣性オドメトリ。
  - [GitHubリポジトリ](https://github.com/TixiaoShan/LIO-SAM) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=A0H8CoORZJU)
- [Removert](http://ras.papercept.net/images/temp/IROS/files/0855.pdf) - 多解像度の距離画像を使い、除去してから復元する手順で静的な点群地図を構築する手法。
  - [GitHubリポジトリ](https://github.com/irapkaist/removert)
  - [YouTube動画](https://www.youtube.com/watch?v=M9PEGi5fAq8)
- [RESPLE](https://arxiv.org/pdf/2504.11580) - LiDARオドメトリのための再帰的スプライン推定。
  - [GitHubリポジトリ](https://github.com/ASIG-X/RESPLE) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=3-xLRRT25ys)
- [KISS-SLAM](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/kiss2025iros.pdf) - 原文が簡潔、頑健、高精度と説明する3D LIDAR SLAMシステム。
  - [GitHubリポジトリ](https://github.com/PRBonn/kiss-slam) ROS 2対応。
- [FAST-LIO2](https://arxiv.org/pdf/2010.08196) - 原文が計算効率に優れ頑健と説明するLiDAR・慣性オドメトリのパッケージ。
  - [GitHubリポジトリ](https://github.com/hku-mars/FAST_LIO/tree/ROS2) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=2XNd7P6Qc2s)
- [MOLA](https://ingmec.ual.es/~jlblanco/papers/EMCEI_2024_Aguilar.pdf) - 自己位置推定と地図作成のためのモジュール式システム。LIDARオドメトリ（LO）、LIDAR・慣性オドメトリ（LIO）、SLAM、自己位置推定のみのモード、地理参照に対応。
  - [GitHubリポジトリ](https://github.com/MOLAorg/mola) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=sbakEOnsL6Y)

### 物体検出・追跡 <a id="object-detection-and-object-tracking"></a>

- [Learning to Optimally Segment Point Clouds](https://arxiv.org/abs/1912.04976) - Carnegie Mellon UniversityのPeiyun Hu、David Held、Deva Ramananによる研究。IEEE Robotics and Automation Letters、2020年。
  - [YouTube動画](https://www.youtube.com/watch?v=wLxIAwIL870)
  - [GitHubリポジトリ](https://github.com/peiyunh/opcseg)
- [Leveraging Heteroscedastic Aleatoric Uncertainties for Robust Real-Time LiDAR 3D Object Detection](https://arxiv.org/pdf/1809.05590.pdf) - Di Feng、Lars Rosenbaum、Fabian Timm、Klaus Dietmayerによる研究。30th IEEE Intelligent Vehicles Symposium、2019年。
  - [YouTube動画](https://www.youtube.com/watch?v=2DzH9COLpkU)
- [What You See is What You Get: Exploiting Visibility for 3D Object Detection](https://arxiv.org/pdf/1912.04986.pdf) - Peiyun Hu、Jason Ziglar、David Held、Deva Ramananによる研究。2019年。
  - [YouTube動画](https://www.youtube.com/watch?v=497OF-otY2k)
  - [GitHubリポジトリ](https://github.com/peiyunh/WYSIWYG)
- [urban_road_filter](https://doi.org/10.3390/s22010194) - 自動運転車向けにLIDARで都市道路と歩道をリアルタイム検出する手法。
  - [GitHubリポジトリ](https://github.com/jkk-research/urban_road_filter) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=T2qi4pldR-E)
- [detection_by_tracker](https://www.semanticscholar.org/paper/3D-LIDAR-Multi-Object-Tracking-for-Autonomous-and-Rachman/bafc8fcdee9b22708491ea1293524ece9e314851) - 自動運転用の3D LIDAR複数物体追跡。都市道路の不確実な状況下で複数対象を検出・追跡し、Autoware Universeでも使用。
  - [Autoware Universeのドキュメント](https://autowarefoundation.github.io/autoware.universe/main/perception/detection_by_tracker/) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=xSGCpb24dhI)

### LIDARと他センサーのキャリブレーション <a id="lidar-other-sensor-calibration"></a>

- [direct_visual_lidar_calibration](https://koide3.github.io/direct_visual_lidar_calibration/) - 汎用・単発（single-shot）・ターゲット不要・自動のLiDAR・カメラ外部パラメーターキャリブレーションツール。
  - [GitHubリポジトリ](https://github.com/koide3/direct_visual_lidar_calibration) ROS 2対応。
  - [論文・資料](https://staff.aist.go.jp/k.koide/assets/pdf/icra2023.pdf)
- [OpenCalib](https://github.com/PJLab-ADG/SensorsCalibration) - 自動運転用の多センサーキャリブレーションツール。
  - [論文・資料](https://arxiv.org/pdf/2205.14087)

## シミュレーター <a id="simulators"></a>

- [CoppeliaSim](https://www.coppeliarobotics.com/coppeliaSim) - クロスプラットフォームの汎用ロボットシミュレーター。旧称V-REP。
  - [YouTubeチャンネル](https://www.youtube.com/user/VirtualRobotPlatform)
- [OSRF Gazebo](http://gazebosim.org/) - OGREベースの汎用ロボットシミュレーター。ROS/ROS 2対応。
  - [GitHubリポジトリ](https://github.com/osrf/gazebo) ROS 2対応。
- [CARLA](https://carla.org/) - 自動車用途のUnreal Engineベースのシミュレーター。Autoware、Baidu Apollo、ROS/ROS 2に対応。
  - [GitHubリポジトリ](https://github.com/carla-simulator/carla) ROS 2対応。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UC1llP9ekCwt8nEJzMJBQekg)
- [LGSVL / SVL](https://www.lgsvlsimulator.com/) - 自動車用途のUnity Engineベースのシミュレーター。Autoware、Baidu Apollo、ROS/ROS 2に対応。注意：LGはSVL Simulatorの継続的な開発を[停止](https://www.svlsimulator.com/news/2022-01-20-svl-simulator-sunset)。
  - [GitHubリポジトリ](https://github.com/lgsvl/simulator)
  - [YouTubeチャンネル](https://www.youtube.com/c/LGSVLSimulator)
- [OSSDC SIM](https://github.com/OSSDC/OSSDC-SIM) - 自動車用途のUnity Engineベースのシミュレーター。開発が停止したLGSVLを基盤とし、上流原文の執筆時点では積極的に開発中と説明される。Autoware、Baidu Apollo、ROS/ROS 2に対応。
  - [GitHubリポジトリ](https://github.com/OSSDC/OSSDC-SIM) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=fU_C38WEwGw)
- [AirSim](https://microsoft.github.io/AirSim) - ドローンと自動車向けのUnreal Engineベースのシミュレーター。ROS対応。
  - [GitHubリポジトリ](https://github.com/microsoft/AirSim)
  - [YouTube動画](https://www.youtube.com/watch?v=gnz1X3UNM5Y)
- [AWSIM](https://tier4.github.io/AWSIM) - 自動車用途のUnity Engineベースのシミュレーター。AutowareとROS 2に対応。
  - [GitHubリポジトリ](https://github.com/tier4/AWSIM) ROS 2対応。
  - [YouTube動画](https://www.youtube.com/watch?v=FH7aBWDmSNA)

## 関連Awesomeリスト <a id="related-awesome"></a>

- [Awesome point cloud analysis](https://github.com/Yochengliu/awesome-point-cloud-analysis#readme)
- [Awesome robotics](https://github.com/Kiloreux/awesome-robotics#readme)
- [Awesome robotics libraries](https://github.com/jslee02/awesome-robotics-libraries#readme)
- [Awesome ROS 2](https://github.com/fkromer/awesome-ros2#readme) ROS 2対応。
- [Awesome artificial intelligence](https://github.com/owainlewis/awesome-artificial-intelligence#readme)
- [Awesome computer vision](https://github.com/jbhuang0604/awesome-computer-vision#readme)
- [Awesome machine learning](https://github.com/josephmisiti/awesome-machine-learning#readme)
- [Awesome deep learning](https://github.com/ChristosChristofidis/awesome-deep-learning#readme)
- [Awesome reinforcement learning](https://github.com/aikorea/awesome-rl/#readme)
- [Awesome SLAM datasets](https://github.com/youngguncho/awesome-slam-datasets#readme)
- [Awesome electronics](https://github.com/kitspace/awesome-electronics#readme)
- [Awesome vehicle security and car hacking](https://github.com/jaredthecoder/awesome-vehicle-security#readme)
- [Awesome LIDAR-Camera calibration](https://github.com/Deephome/Awesome-LiDAR-Camera-Calibration)
- [Awesome LiDAR Place Recognition](https://github.com/hogyun2/awesome-lidar-place-recognition)
- [Awesome-LiDAR-MOS](https://github.com/neng-wang/Awesome-LiDAR-MOS) - 移動物体セグメンテーション。
- [Awesome-LiDAR-Visual-SLAM](https://github.com/sjtuyinjie/awesome-LiDAR-Visual-SLAM)
- [Awesome LIDAR](https://github.com/szenergy/awesome-lidar) ROS 2対応。

## その他 <a id="others"></a>

- [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - 5米ドルのGoogle CardboardでMicrosoft HoloLensを再現する取り組み。[シーンの色再構成](https://github.com/philipturner/scene-color-reconstruction)の研究用ソースコードも提供。
- [Pointcloudprinter](https://github.com/marian42/pointcloudprinter) - 航空LIDARの走査で得た点群を、3D印刷用のソリッドメッシュに変換するツール。
- [CloudCompare](https://cloudcompare.org/) - 無料でクロスプラットフォームの点群エディター。
  - [GitHubリポジトリ](https://github.com/CloudCompare)
- [Pcx](https://github.com/keijiro/Pcx) - Unity用の点群インポーターとレンダラー。
- [Bpy](https://github.com/uhlik/bpy) - Blender用の点群インポーター、レンダラー、エディター、可視化ツール。
- [Semantic Segmentation Editor](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) - Hitachi Automotive And Industry Laboratoryによる、点群と画像のセマンティックセグメンテーションエディター。点群への注釈とラベル付けに利用。
- [3D Bounding Box Annotation Tool](https://github.com/walzimmer/3d-bat) - 3D BAT：周囲全方向のマルチモーダルなデータストリームを扱う、半自動のWebベース3D注釈ツール。点群への注釈とラベル付けを含む。
  - [論文・資料](https://arxiv.org/pdf/1905.00525.pdf)
  - [YouTube動画](https://www.youtube.com/watch?v=gSGG4Lw8BSU)
- [Photogrammetry importer](https://github.com/SBCV/Blender-Addon-Photogrammetry-Importer) - 複数の写真測量ライブラリの再構成結果を取り込むBlenderアドオン。
- [Foxglove](https://foxglove.dev/) - ロボット向けの可視化・診断を統合するFoxglove Studio。ブラウザー、またはLinux、Windows、macOSのデスクトップアプリで利用可能。
  - [GitHubリポジトリ](https://github.com/foxglove/studio) ROS 2対応。
  - [YouTubeチャンネル](https://www.youtube.com/channel/UCrIbrBxb9HBAnlhbx2QycsA)
- [Lichtblick suite](https://github.com/lichtblick-suite) - ロボットデータの可視化・解析を行う、Foxglove Studioのオープンソース代替ツール。
  - [GitHubリポジトリ](https://github.com/lichtblick-suite/lichtblick) ROS 2対応。
- [Rerun](https://rerun.io/) - 時間を考慮したマルチモーダルなデータ基盤と可視化のためのツール。
  - [GitHubリポジトリ](https://github.com/rerun-io/rerun) ROS 2対応。
  - [YouTubeチャンネル](https://www.youtube.com/@rerundotio/videos)
- [MeshLab](https://www.meshlab.net/) - 3D三角メッシュと点群の処理・編集に使う、オープンソースで移植性と拡張性のあるシステム。
  - [GitHubリポジトリ](https://github.com/cnr-isti-vclab/meshlab)
- [CloudPeek](https://github.com/Geekgineer/CloudPeek) - 単一のC++ヘッダーで構成された、軽量でクロスプラットフォームの点群ビューアー。簡潔さと効率を重視し、PCLやOpen3Dのような大きな外部ライブラリに依存しない。
  - [GitHubリポジトリ](https://github.com/Geekgineer/CloudPeek)
- [どのSLAMアルゴリズムを選ぶべきか？](https://www.slambotics.org/blog/which-slam-to-choose) - SLAMアルゴリズムの選び方を扱うSlamboticsの記事。
