---
title: Awesome LIDAR
description: >-
  LIDAR manufacturers, datasets, point cloud libraries, SLAM and segmentation
  algorithms, simulators, and visualization or annotation tools.
licenseSource: github-szenergy-awesome-lidar-readme-md
---
# Awesome LIDAR

LIDAR sensors and point cloud tools for robotics and autonomous driving, covering manufacturers, datasets, processing libraries, frameworks, algorithms, simulators, and visualization or annotation software.

[LIDAR](https://en.wikipedia.org/wiki/Lidar) uses laser light for remote sensing. The upstream introduction describes measurements of the surroundings with approximately centimeter accuracy and usually calls the resulting sets of 2D or 3D data points point clouds.

The upstream list offers an [alternate view](https://szenergy.github.io/awesome-lidar/) and its [source code](https://github.com/szenergy/awesome-lidar).

## Conventions

Video links, scientific papers or detailed descriptions, and repositories are identified by their link labels. “ROS 2 compatible” preserves the compatibility badges in the upstream list; see the [ROS 2 documentation](https://docs.ros.org/). Compatibility and development-status descriptions reflect the fixed source snapshot.

## Manufacturers

- [Velodyne](https://velodynelidar.com/) - Ouster and Velodyne completed their merger of equals on February 10, 2023. Velodyne was a mechanical and solid-state LIDAR manufacturer headquartered in San Jose, California, USA.
  - [YouTube channel](https://www.youtube.com/user/VelodyneLiDAR)
  - [ROS driver](https://github.com/ros-drivers/velodyne)
  - [C++/Python library](https://github.com/valgur/velodyne_decoder)
- [Ouster](https://ouster.com/) - LIDAR manufacturer specializing in digital-spinning LiDARs, headquartered in San Francisco, USA.
  - [YouTube channel](https://www.youtube.com/c/Ouster-lidar)
  - [GitHub organization](https://github.com/ouster-lidar) ROS 2 compatible.
- [Livox](https://www.livoxtech.com/) - LIDAR manufacturer.
  - [YouTube channel](https://www.youtube.com/channel/UCnLpB5QxlQUexi40vM12mNQ)
  - [GitHub organization](https://github.com/Livox-SDK) ROS 2 compatible.
- [SICK](https://www.sick.com/ag/en/) - Sensor and automation manufacturer headquartered in Waldkirch, Germany.
  - [YouTube channel](https://www.youtube.com/user/SICKSensors)
  - [GitHub organization](https://github.com/SICKAG) ROS 2 compatible.
- [Hokuyo](https://www.hokuyo-aut.jp/) - Sensor and automation manufacturer, headquartered in Osaka, Japan.
  - [YouTube channel](https://www.youtube.com/channel/UCYzJXC82IEy-h-io2REin5g)
- [Pioneer](http://autonomousdriving.pioneer/en/3d-lidar/) - LIDAR manufacturer specializing in MEMS mirror-based raster scanning LiDARs (3D-LiDAR), headquartered in Tokyo, Japan.
  - [YouTube channel](https://www.youtube.com/user/PioneerCorporationPR)
- [Luminar](https://www.luminartech.com/) - LIDAR manufacturer focusing on compact, automotive-grade sensors, headquartered in Palo Alto, California, USA.
  - [Vimeo channel](https://vimeo.com/luminartech)
  - [GitHub organization](https://github.com/luminartech)
- [Hesai](https://www.hesaitech.com/) - Hesai Technology is a LIDAR manufacturer founded in Shanghai, China.
  - [YouTube channel](https://www.youtube.com/channel/UCG2_ffm6sdMsK-FX8yOLNYQ/videos)
  - [GitHub organization](https://github.com/HesaiTechnology)
- [Robosense](http://www.robosense.ai/) - RoboSense (Suteng Innovation Technology Co., Ltd.) manufactures LIDAR sensors, AI algorithms, and IC chipsets and is based in Shenzhen and Beijing, China.
  - [YouTube channel](https://www.youtube.com/channel/UCYCK8j678N6d_ayWE_8F3rQ)
  - [GitHub organization](https://github.com/RoboSense-LiDAR) ROS 2 compatible.
- [LSLIDAR](https://www.lslidar.com/) - LSLiDAR (Leishen Intelligent System Co., Ltd.) manufactures LIDAR sensors and provides complete solutions, based in Shenzhen, China.
  - [YouTube channel](https://www.youtube.com/@lslidar2015)
  - [GitHub organization](https://github.com/Lslidar) ROS 2 compatible.
- [Ibeo](https://www.ibeo-as.com/) - Ibeo Automotive Systems GmbH manufactures environmental-detection laser scanners and LIDAR for the automotive industry, based in Hamburg, Germany.
  - [YouTube channel](https://www.youtube.com/c/IbeoAutomotive/)
- [Innoviz](https://innoviz.tech/) - Innoviz Technologies specializes in solid-state LIDARs.
  - [YouTube channel](https://www.youtube.com/channel/UCVc1KFsu2eb20M8pKFwGiFQ)
- [Quanenergy](https://quanergy.com/) - Quanenergy Systems offers solid-state and mechanical LIDAR sensors and end-to-end solutions for mapping, industrial automation, transportation, and security. Its headquarters are in Sunnyvale, California, USA.
  - [YouTube channel](https://www.youtube.com/c/QuanergySystems)
- [Cepton](https://www.cepton.com/index.html) - Cepton Technologies, Inc. develops frictionless, mirrorless LIDAR designs using its MMT (micro motion technology). Its headquarters are in San Jose, California, USA.
  - [YouTube channel](https://www.youtube.com/channel/UCUgkBZZ1UWWkkXJ5zD6o8QQ)
- [Blickfeld](https://www.blickfeld.com/) - Solid-state LIDAR manufacturer for autonomous mobility and IoT, based in München, Germany.
  - [YouTube channel](https://www.youtube.com/c/BlickfeldLiDAR)
  - [GitHub organization](https://github.com/Blickfeld) ROS 2 compatible.
- [Neuvition](https://www.neuvition.com/) - Solid-state LIDAR manufacturer based in Wujiang, China.
  - [YouTube channel](https://www.youtube.com/channel/UClFjlekWJo4T5bfzxX0ZW3A)
- [Aeva](https://www.aeva.com/) - Perception technology for automated driving, consumer electronics, health, industrial robotics, and security, based in Mountain View, California, USA.
  - [YouTube channel](https://www.youtube.com/c/AevaInc)
  - [GitHub organization](https://github.com/aevainc)
- [XenomatiX](https://www.xenomatix.com/) - Solid-state LIDAR sensors based on a multi-beam laser concept, headquartered in Leuven, Belgium.
  - [YouTube channel](https://www.youtube.com/@XenomatiXTruesolidstatelidar)
- [MicroVision](https://microvision.com/) - MEMS-based laser beam scanning technology focused on automotive-grade LIDAR sensors, located in Hamburg, Germany.
  - [YouTube channel](https://www.youtube.com/user/mvisvideo)
  - [GitHub organization](https://github.com/MicroVision-Inc)
- [PreAct](https://www.preact-tech.com/) - A company whose stated mission is to improve safety and efficiency in the automotive industry and beyond, headquartered in Portland, Oregon, USA.
  - [YouTube channel](https://www.youtube.com/@PreActTechnologies)
- [Pepperl+Fuchs](https://www.pepperl-fuchs.com/) - Global technology company specializing in automation solutions and sensor technologies such as LIDAR, based in Mannheim, Germany.
  - [YouTube channel](https://www.youtube.com/c/pepperl-fuchs)
  - [YouTube channel](https://www.youtube.com/user/PepperlFuchsUSA)
  - [GitHub organization](https://github.com/PepperlFuchs) ROS 2 compatible.
- [Riegl](https://www.riegl.com/) - Manufacturer of 3D laser scanning systems, based in Austria.
  - [YouTube channel](https://www.youtube.com/@RIEGLLIDAR)
  - [GitHub organization](https://github.com/riegllms) ROS 2 compatible.

## Datasets

- [Ford Dataset](https://avdata.ford.com/) - Time-stamped dataset containing raw data from all sensors, calibration values, pose trajectories, ground-truth poses, and 3D maps. Robot Operating System (ROS) compatible.
  - [Paper](https://arxiv.org/pdf/2003.07969.pdf)
  - [GitHub repository](https://github.com/Ford/AVData)
- [Audi A2D2 Dataset](https://www.a2d2.audi) - Dataset with 2D semantic segmentation, 3D point clouds, 3D bounding boxes, and vehicle bus data.
  - [Paper](https://www.a2d2.audi/content/dam/a2d2/dataset/a2d2-audi-autonomous-driving-dataset.pdf)
- [Waymo Open Dataset](https://waymo.com/open/) - Dataset with independently generated labels for LIDAR and camera data, rather than labels obtained simply through projection.
- [Oxford RobotCar](https://robotcar-dataset.robots.ox.ac.uk/) - Over 100 repetitions of a consistent route through Oxford, UK, captured over more than a year.
  - [YouTube channel](https://www.youtube.com/c/ORIOxfordRoboticsInstitute)
  - [Paper](https://robotcar-dataset.robots.ox.ac.uk/images/RCD_RTK.pdf)
- [EU Long-term Dataset](https://epan-utbm.github.io/utbm_robocar_dataset/) - Collected with a human-driven robocar equipped with up to eleven heterogeneous sensors in downtown Montbéliard, France, for long-term data and in a suburb for roundabout data. Vehicle speed was limited to 50 km/h in accordance with the French traffic rules cited in the upstream description.
- [NuScenes](https://www.nuscenes.org/) - Public large-scale dataset for autonomous driving.
  - [Paper](https://arxiv.org/pdf/1903.11027.pdf)
- [Lyft](https://level5.lyft.com/dataset/) - Public dataset collected by a fleet of Ford Fusion vehicles equipped with LIDAR and camera.
- [KITTI](http://www.cvlibs.net/datasets/kitti/raw_data.php) - Public dataset primarily focused on computer vision applications that also contains LIDAR point clouds. ROS 2 compatible.
- [Semantic KITTI](http://semantic-kitti.org/) - Dataset for semantic and panoptic scene segmentation.
  - [YouTube video](https://www.youtube.com/watch?v=3qNOXvkpK4I)
- [CADC - Canadian Adverse Driving Conditions Dataset](http://cadcd.uwaterloo.ca/) - Public large-scale autonomous-driving dataset for adverse weather, including snowy conditions.
  - [Paper](https://arxiv.org/pdf/2001.10117.pdf)
- [UofTPed50 Dataset](https://www.autodrive.utoronto.ca/uoftped50) - University of Toronto aUToronto self-driving-car dataset containing GPS/IMU, 3D LIDAR, and monocular camera data for 3D pedestrian detection.
  - [Paper](https://arxiv.org/pdf/1905.08758.pdf)
- [PandaSet Open Dataset](https://scale.com/open-datasets/pandaset) - Public large-scale autonomous-driving dataset from Hesai and Scale, covering challenging urban situations with the full sensor suite of a real self-driving car.
- [Cirrus dataset](https://developer.volvocars.com/open-datasets/cirrus/) - Public dataset emphasizing long-range LIDAR with non-uniform distributions of scanning patterns. Uses Luminar Hydra LIDAR and is available through the Volvo Cars Innovation Portal.
  - [Paper](https://arxiv.org/pdf/2012.02938.pdf)
- [USyd Dataset — University of Sydney Campus Dataset](http://its.acfr.usyd.edu.au/datasets/usyd-campus-dataset/) - Long-term, large-scale dataset recorded weekly over 1.5 years on the University of Sydney campus and surrounding areas. Includes multiple sensor modalities and various environmental conditions. ROS compatible.
  - [Paper](https://ieeexplore.ieee.org/document/9109704)
- [Brno Urban Dataset](https://github.com/Robotics-BUT/Brno-Urban-Dataset) - Navigation and localization dataset for self-driving cars and autonomous robots in Brno, Czechia.
  - [Paper](https://ieeexplore.ieee.org/document/9197277)
  - [YouTube video](https://www.youtube.com/watch?v=wDFePIViwqY)
- [Argoverse](https://www.argoverse.org/) - Dataset for autonomous-vehicle perception, including 3D tracking and motion forecasting, collected in Pittsburgh, Pennsylvania, and Miami, Florida, USA.
  - [Paper](https://openaccess.thecvf.com/content_CVPR_2019/papers/Chang_Argoverse_3D_Tracking_and_Forecasting_With_Rich_Maps_CVPR_2019_paper.pdf)
  - [YouTube video](https://www.youtube.com/watch?v=DM8jWfi69zM)
- [Boreas Dataset](https://www.boreas.utias.utoronto.ca/) - Collected by repeatedly driving a route over one year, capturing pronounced seasonal variation. Contains over 350 km of driving data, including rain and heavy snow. The sensor suite, described by the upstream list as unique and high quality, includes a 128-channel Velodyne Alpha Prime LIDAR, a 360-degree Navtech radar, and ground-truth poses from an Applanix POSLV GPS/IMU, described by the upstream list as accurate.
  - [Paper](https://arxiv.org/abs/2203.10168)
  - [GitHub repository](https://github.com/utiasASRL/pyboreas)

## Libraries

- [Point Cloud Library (PCL)](http://www.pointclouds.org/) - Highly parallel programming library with industrial and research applications.
  - [GitHub repository](https://github.com/PointCloudLibrary/pcl) ROS 2 compatible.
- [Open3D library](http://www.open3d.org/docs/release/) - Open-source library with 3D data processing and visualization algorithms, supporting C++ and Python.
  - [GitHub repository](https://github.com/intel-isl/Open3D)
  - [YouTube channel](https://www.youtube.com/channel/UCRJBlASPfPBtPXJSPffJV-w)
- [PyTorch Geometric](https://arxiv.org/pdf/1903.02428.pdf) - A geometric deep learning extension library for PyTorch.
  - [GitHub repository](https://github.com/rusty1s/pytorch_geometric)
- [PyTorch3d](https://pytorch3d.org/) - Library for deep learning with 3D data, written and maintained by the Facebook AI Research Computer Vision Team.
  - [GitHub repository](https://github.com/facebookresearch/pytorch3d)
- [Kaolin](https://kaolin.readthedocs.io/en/latest/) - PyTorch library from NVIDIA Technologies to accelerate 3D deep learning research for game and application developers.
  - [GitHub repository](https://github.com/NVIDIAGameWorks/kaolin/)
  - [Paper](https://arxiv.org/pdf/1911.05063.pdf)
- [PyVista](https://docs.pyvista.org/) - 3D plotting and mesh analysis through a streamlined interface for the Visualization Toolkit.
  - [GitHub repository](https://github.com/pyvista/pyvista)
  - [Paper](https://joss.theoj.org/papers/10.21105/joss.01450)
- [pyntcloud](https://pyntcloud.readthedocs.io/en/latest/) - Python 3 library for working with 3D point clouds using the Python scientific stack.
  - [GitHub repository](https://github.com/daavoo/pyntcloud)
- [pointcloudset](https://virtual-vehicle.github.io/pointcloudset/) - Python library for efficient analysis of large datasets of point clouds recorded over time.
  - [GitHub repository](https://github.com/virtual-vehicle/pointcloudset)
- [LAStools](https://rapidlasso.de/lastools/) - C++ library and command-line tools for point cloud processing and data compression.
  - [GitHub repository](https://github.com/LAStools/LAStools)

## Frameworks

- [Autoware](https://www.autoware.ai/) - Framework used in academic and research applications of autonomous vehicles.
  - [GitHub organization](https://github.com/autowarefoundation) ROS 2 compatible.
  - [Paper](https://www.researchgate.net/profile/Takuya_Azumi/publication/327198306_Autoware_on_Board_Enabling_Autonomous_Vehicles_with_Embedded_Systems/links/5c9085da45851564fae6dcd0/Autoware-on-Board-Enabling-Autonomous-Vehicles-with-Embedded-Systems.pdf)
- [Baidu Apollo](https://apollo.auto/) - Framework for developing, testing, and deploying autonomous vehicles.
  - [GitHub repository](https://github.com/ApolloAuto/apollo)
  - [YouTube channel](https://www.youtube.com/c/ApolloAuto)
- [ALFA Framework](https://ieeexplore.ieee.org/document/11024231) - An open-source framework for developing processing algorithms, with a focus on embedded platforms and hardware acceleration.
  - [GitHub repository](https://github.com/alfa-project/alfa-framework) ROS 2 compatible.

## Algorithms

### Basic matching algorithms

- [Iterative closest point (ICP)](https://www.youtube.com/watch?v=uzOCS_gdZuM) - Algorithm for feature matching (ICP), described by the upstream list as essential for this task.
  - [GitHub repository](https://github.com/pglira/simpleICP) - simpleICP implementations in C++, Julia, Matlab, Octave, and Python.
  - [GitHub repository](https://github.com/ethz-asl/libpointmatcher) - libpointmatcher, a modular library implementing the ICP algorithm.
  - [Paper](https://link.springer.com/content/pdf/10.1007/s10514-013-9327-2.pdf) - libpointmatcher: Comparing ICP variants on real-world data sets.
- [Normal distributions transform](https://www.youtube.com/watch?v=0YV4a2asb8Y) - Massively parallel approach to feature matching (NDT), described by the upstream list as more recent.
- [KISS-ICP](https://www.youtube.com/watch?v=kMMH8rA1ggI) - In Defense of Point-to-Point ICP – Simple, Accurate, and Robust Registration If Done the Right Way.
  - [GitHub repository](https://github.com/PRBonn/kiss-icp) ROS 2 compatible.
  - [Paper](https://arxiv.org/pdf/2209.15397.pdf)

### Semantic segmentation

- [RangeNet++](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/milioto2019iros.pdf) - Fully convolutional network for LIDAR semantic segmentation, described by the upstream list as fast and accurate.
  - [GitHub repository](https://github.com/PRBonn/rangenet_lib)
  - [YouTube video](https://www.youtube.com/watch?v=uo3ZuLuFAzk)
- [PolarNet](https://arxiv.org/pdf/2003.14032.pdf) - An Improved Grid Representation for Online LiDAR Point Clouds Semantic Segmentation.
  - [GitHub repository](https://github.com/edwardzhou130/PolarSeg)
  - [YouTube video](https://www.youtube.com/watch?v=iIhttRSMqjE)
- [Frustum PointNets](https://arxiv.org/pdf/1711.08488.pdf) - Frustum PointNets for 3D Object Detection from RGB-D Data.
  - [GitHub repository](https://github.com/charlesq34/frustum-pointnets)
- [Study of LIDAR Semantic Segmentation](https://larissa.triess.eu/scan-semseg/) - Scan-based Semantic Segmentation of LiDAR Point Clouds: An Experimental Study IV 2020.
  - [Paper](https://arxiv.org/abs/2004.11803)
  - [Project website](http://ltriess.github.io/scan-semseg)
- [LIDAR-MOS](https://www.ipb.uni-bonn.de/pdfs/chen2021ral-iros.pdf) - Moving Object Segmentation in 3D LIDAR Data
  - [GitHub repository](https://github.com/PRBonn/LiDAR-MOS)
  - [YouTube video](https://www.youtube.com/watch?v=NHvsYhk4dhw)
- [SuperPoint Graph](https://arxiv.org/pdf/1711.09869.pdf) - Large-scale Point Cloud Semantic Segmentation with Superpoint Graphs
  - [GitHub repository](https://github.com/loicland/superpoint_graph)
  - [YouTube video](https://www.youtube.com/watch?v=Ijr3kGSU_tU)
- [SuperPoint Transformer](https://arxiv.org/pdf/2306.08045.pdf) - Efficient 3D Semantic Segmentation with Superpoint Transformer
  - [GitHub repository](https://github.com/drprojects/superpoint_transformer)
  - [YouTube video](https://www.youtube.com/watch?v=2qKhpQs9gJw)
- [RandLA-Net](https://arxiv.org/pdf/1911.11236.pdf) - Efficient Semantic Segmentation of Large-Scale Point Clouds
  - [GitHub repository](https://github.com/QingyongHu/RandLA-Net)
  - [YouTube video](https://www.youtube.com/watch?v=Ar3eY_lwzMk)
- [Automatic labelling](https://arxiv.org/pdf/2108.13757.pdf) - Automatic labelling of urban point clouds using data fusion
  - [GitHub repository](https://github.com/Amsterdam-AI-Team/Urban_PointCloud_Processing)
  - [YouTube video](https://www.youtube.com/watch?v=qMj_WM6D0vI)

### Ground segmentation

- [Plane Seg](https://github.com/ori-drs/plane_seg) - ROS-compatible ground-plane segmentation library for fitting planes to LIDAR data.
  - [YouTube video](https://www.youtube.com/watch?v=YYs4lJ9t-Xo)
- [LineFit Graph](https://ieeexplore.ieee.org/abstract/document/5548059) - Line fitting-based fast ground segmentation for horizontal 3D LiDAR data
  - [GitHub repository](https://github.com/lorenwel/linefit_ground_segmentation)
- [Patchwork](https://arxiv.org/pdf/2108.05560.pdf) - Region-wise plane fitting-based robust and fast ground segmentation for 3D LiDAR data
  - [GitHub repository](https://github.com/LimHyungTae/patchwork)
  - [YouTube video](https://www.youtube.com/watch?v=rclqeDi4gow)
- [Patchwork++](https://arxiv.org/pdf/2207.11919.pdf) - Improved version of Patchwork with Python bindings for deep learning users.
  - [GitHub repository](https://github.com/url-kaist/patchwork-plusplus-ros) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=fogCM159GRk)
- [GSeg3D](https://arxiv.org/html/2603.04208v1) - Grid-based ground segmentation for LIDAR point clouds, designed for safety-critical robotics and autonomous driving and described by the upstream list as high precision.
  - [GitHub repository](https://github.com/dfki-ric/ground_segmentation)
  - [ROS 2 integration](https://github.com/dfki-ric/ground_segmentation_ros2) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=GXLTOoJbOhQ)

### Simultaneous localization and mapping SLAM and LIDAR-based odometry and or mapping LOAM

- [LOAM J. Zhang and S. Singh](https://youtu.be/8ezyhTAEyHs) - LOAM: Lidar Odometry and Mapping in Real-time.
- [LeGO-LOAM](https://github.com/RobustFieldAutonomyLab/LeGO-LOAM) - Lightweight, ground-optimized LIDAR odometry and mapping system for ROS-compatible unmanned ground vehicles (UGVs).
  - [YouTube video](https://www.youtube.com/watch?v=7uCxLUs9fwQ)
  - ROS 2 version in a separate repository: [GitHub repository](https://github.com/eperdices/LeGO-LOAM-SR) ROS 2 compatible.
- [Cartographer](https://github.com/cartographer-project/cartographer) - ROS-compatible system for real-time 2D and 3D simultaneous localization and mapping (SLAM) across multiple platforms and sensor configurations. ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=29Knm-phAyI)
- [SuMa++](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2019iros.pdf) - LiDAR-based semantic SLAM.
  - [GitHub repository](https://github.com/PRBonn/semantic_suma/)
  - [YouTube video](https://youtu.be/uo3ZuLuFAzk)
- [OverlapNet](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2020rss.pdf) - Loop closure for LIDAR-based SLAM.
  - [GitHub repository](https://github.com/PRBonn/OverlapNet)
  - [YouTube video](https://www.youtube.com/watch?v=YTfliBco6aw)
- [LIO-SAM](https://arxiv.org/pdf/2007.00258.pdf) - Tightly-coupled Lidar Inertial Odometry via Smoothing and Mapping.
  - [GitHub repository](https://github.com/TixiaoShan/LIO-SAM) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=A0H8CoORZJU)
- [Removert](http://ras.papercept.net/images/temp/IROS/files/0855.pdf) - Remove, then Revert: Static Point cloud Map Construction using Multiresolution Range Images.
  - [GitHub repository](https://github.com/irapkaist/removert)
  - [YouTube video](https://www.youtube.com/watch?v=M9PEGi5fAq8)
- [RESPLE](https://arxiv.org/pdf/2504.11580) - Recursive Spline Estimation for LiDAR-Based Odometry
  - [GitHub repository](https://github.com/ASIG-X/RESPLE) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=3-xLRRT25ys)
- [KISS-SLAM](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/kiss2025iros.pdf) - 3D LIDAR SLAM system described by the upstream list as simple, robust, and accurate.
  - [GitHub repository](https://github.com/PRBonn/kiss-slam) ROS 2 compatible.
- [FAST-LIO2](https://arxiv.org/pdf/2010.08196) - LiDAR-inertial odometry package described by the upstream list as computationally efficient and robust.
  - [GitHub repository](https://github.com/hku-mars/FAST_LIO/tree/ROS2) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=2XNd7P6Qc2s)
- [MOLA](https://ingmec.ual.es/~jlblanco/papers/EMCEI_2024_Aguilar.pdf) - Modular system for localization and mapping, offering LIDAR odometry (LO), LIDAR-inertial odometry (LIO), SLAM, localization-only modes, and georeferencing.
  - [GitHub repository](https://github.com/MOLAorg/mola) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=sbakEOnsL6Y)

### Object detection and object tracking

- [Learning to Optimally Segment Point Clouds](https://arxiv.org/abs/1912.04976) - By Peiyun Hu, David Held, and Deva Ramanan at Carnegie Mellon University. IEEE Robotics and Automation Letters, 2020.
  - [YouTube video](https://www.youtube.com/watch?v=wLxIAwIL870)
  - [GitHub repository](https://github.com/peiyunh/opcseg)
- [Leveraging Heteroscedastic Aleatoric Uncertainties for Robust Real-Time LiDAR 3D Object Detection](https://arxiv.org/pdf/1809.05590.pdf) - By Di Feng, Lars Rosenbaum, Fabian Timm, Klaus Dietmayer. 30th IEEE Intelligent Vehicles Symposium, 2019.
  - [YouTube video](https://www.youtube.com/watch?v=2DzH9COLpkU)
- [What You See is What You Get: Exploiting Visibility for 3D Object Detection](https://arxiv.org/pdf/1912.04986.pdf) - By Peiyun Hu, Jason Ziglar, David Held, Deva Ramanan, 2019.
  - [YouTube video](https://www.youtube.com/watch?v=497OF-otY2k)
  - [GitHub repository](https://github.com/peiyunh/WYSIWYG)
- [urban_road_filter](https://doi.org/10.3390/s22010194) - Real-Time LIDAR-Based Urban Road and Sidewalk Detection for Autonomous Vehicles.
  - [GitHub repository](https://github.com/jkk-research/urban_road_filter) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=T2qi4pldR-E)
- [detection_by_tracker](https://www.semanticscholar.org/paper/3D-LIDAR-Multi-Object-Tracking-for-Autonomous-and-Rachman/bafc8fcdee9b22708491ea1293524ece9e314851) - 3D LIDAR multi-object tracking for autonomous driving: multi-target detection and tracking under urban road uncertainties. Also used in Autoware Universe.
  - [Autoware Universe documentation](https://autowarefoundation.github.io/autoware.universe/main/perception/detection_by_tracker/) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=xSGCpb24dhI)

### LIDAR-other-sensor calibration

- [direct_visual_lidar_calibration](https://koide3.github.io/direct_visual_lidar_calibration/) - General-purpose, single-shot, target-less, automatic LiDAR-camera extrinsic calibration toolbox.
  - [GitHub repository](https://github.com/koide3/direct_visual_lidar_calibration) ROS 2 compatible.
  - [Paper](https://staff.aist.go.jp/k.koide/assets/pdf/icra2023.pdf)
- [OpenCalib](https://github.com/PJLab-ADG/SensorsCalibration) - Multi-sensor calibration toolbox for autonomous driving.
  - [Paper](https://arxiv.org/pdf/2205.14087)

## Simulators

- [CoppeliaSim](https://www.coppeliarobotics.com/coppeliaSim) - Cross-platform general-purpose robotic simulator (formerly known as V-REP).
  - [YouTube channel](https://www.youtube.com/user/VirtualRobotPlatform)
- [OSRF Gazebo](http://gazebosim.org/) - OGRE-based general-purpose robotic simulator, ROS/ROS 2 compatible.
  - [GitHub repository](https://github.com/osrf/gazebo) ROS 2 compatible.
- [CARLA](https://carla.org/) - Unreal Engine-based simulator for automotive applications. Compatible with Autoware, Baidu Apollo and ROS/ROS 2.
  - [GitHub repository](https://github.com/carla-simulator/carla) ROS 2 compatible.
  - [YouTube channel](https://www.youtube.com/channel/UC1llP9ekCwt8nEJzMJBQekg)
- [LGSVL / SVL](https://www.lgsvlsimulator.com/) - Unity Engine simulator for automotive applications, compatible with Autoware, Baidu Apollo, and ROS/ROS 2. Note: LG [suspended](https://www.svlsimulator.com/news/2022-01-20-svl-simulator-sunset) active development of SVL Simulator.
  - [GitHub repository](https://github.com/lgsvl/simulator)
  - [YouTube channel](https://www.youtube.com/c/LGSVLSimulator)
- [OSSDC SIM](https://github.com/OSSDC/OSSDC-SIM) - Unity Engine simulator for automotive applications, based on the suspended LGSVL simulator and described as actively developed at the time of the upstream text. Compatible with Autoware, Baidu Apollo, and ROS/ROS 2.
  - [GitHub repository](https://github.com/OSSDC/OSSDC-SIM) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=fU_C38WEwGw)
- [AirSim](https://microsoft.github.io/AirSim) - Unreal Engine-based simulator for drones and automotive. Compatible with ROS.
  - [GitHub repository](https://github.com/microsoft/AirSim)
  - [YouTube video](https://www.youtube.com/watch?v=gnz1X3UNM5Y)
- [AWSIM](https://tier4.github.io/AWSIM) - Unity Engine-based simulator for automotive applications. Compatible with Autoware and ROS 2.
  - [GitHub repository](https://github.com/tier4/AWSIM) ROS 2 compatible.
  - [YouTube video](https://www.youtube.com/watch?v=FH7aBWDmSNA)

## Related awesome

- [Awesome point cloud analysis](https://github.com/Yochengliu/awesome-point-cloud-analysis#readme)
- [Awesome robotics](https://github.com/Kiloreux/awesome-robotics#readme)
- [Awesome robotics libraries](https://github.com/jslee02/awesome-robotics-libraries#readme)
- [Awesome ROS 2](https://github.com/fkromer/awesome-ros2#readme) ROS 2 compatible.
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
- [Awesome-LiDAR-MOS](https://github.com/neng-wang/Awesome-LiDAR-MOS) - Moving object segmentation.
- [Awesome-LiDAR-Visual-SLAM](https://github.com/sjtuyinjie/awesome-LiDAR-Visual-SLAM)
- [Awesome LIDAR](https://github.com/szenergy/awesome-lidar) ROS 2 compatible.

## Others

- [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - Uses $5 Google Cardboard to replicate Microsoft HoloLens. Hosts research source code for [scene color reconstruction](https://github.com/philipturner/scene-color-reconstruction).
- [Pointcloudprinter](https://github.com/marian42/pointcloudprinter) - A tool to turn point cloud data from aerial lidar scans into solid meshes for 3D printing.
- [CloudCompare](https://cloudcompare.org/) - Free, cross-platform point cloud editor.
  - [GitHub repository](https://github.com/CloudCompare)
- [Pcx](https://github.com/keijiro/Pcx) - Point cloud importer/renderer for Unity.
- [Bpy](https://github.com/uhlik/bpy) - Point cloud importer, renderer, editor, and visualizer for Blender.
- [Semantic Segmentation Editor](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) - Point cloud and image semantic segmentation editor by Hitachi Automotive And Industry Laboratory, for point cloud annotation and labeling.
- [3D Bounding Box Annotation Tool](https://github.com/walzimmer/3d-bat) - 3D BAT: semi-automatic, web-based 3D annotation toolbox for full-surround, multimodal data streams, including point cloud annotation and labeling.
  - [Paper](https://arxiv.org/pdf/1905.00525.pdf)
  - [YouTube video](https://www.youtube.com/watch?v=gSGG4Lw8BSU)
- [Photogrammetry importer](https://github.com/SBCV/Blender-Addon-Photogrammetry-Importer) - Blender add-on for importing reconstruction results from several photogrammetry libraries.
- [Foxglove](https://foxglove.dev/) - Foxglove Studio is an integrated robotics visualization and diagnosis tool, available in a browser or as a desktop app for Linux, Windows, and macOS.
  - [GitHub repository](https://github.com/foxglove/studio) ROS 2 compatible.
  - [YouTube channel](https://www.youtube.com/channel/UCrIbrBxb9HBAnlhbx2QycsA)
- [Lichtblick suite](https://github.com/lichtblick-suite) - Lichtblick is an open-source alternative to Foxglove Studio for visualizing and analyzing robotics data.
  - [GitHub repository](https://github.com/lichtblick-suite/lichtblick) ROS 2 compatible.
- [Rerun](https://rerun.io/) - Tool for a time-aware multimodal data stack and visualizations.
  - [GitHub repository](https://github.com/rerun-io/rerun) ROS 2 compatible.
  - [YouTube channel](https://www.youtube.com/@rerundotio/videos)
- [MeshLab](https://www.meshlab.net/) - Open-source, portable, extensible system for processing and editing 3D triangular meshes and point clouds.
  - [GitHub repository](https://github.com/cnr-isti-vclab/meshlab)
- [CloudPeek](https://github.com/Geekgineer/CloudPeek) - Lightweight C++ single-header, cross-platform point cloud viewer designed for simplicity and efficiency, without heavy external libraries such as PCL or Open3D.
  - [GitHub repository](https://github.com/Geekgineer/CloudPeek)
- [Which SLAM Algorithm Should I Choose?](https://www.slambotics.org/blog/which-slam-to-choose) - Slambotics article on choosing a SLAM algorithm.
