---
title: Awesome Flying FPV
description: >-
  UAV airframes, power and flight control, radio and video links, telemetry,
  ground stations, computer vision, simulators, and supporting resources.
licenseSource: github-Matthias84-awesome-flying-fpv-readme-md
---
# Awesome Flying FPV

Explore free software and open hardware for multicopters, airplanes, flying wings, and UAV development. Resources cover airframes, power and flight control, radio and video links, telemetry, ground stations, computer vision, simulators, safety and security, legal information, and communities. The source favors established projects with active communities and significant legacy projects with modifications; it also includes selected commercial tools and supporting resources.

The source places responsibility on builders, mechanics, spotters, and pilots to avoid damage or injury to people and animals, follow local regulations, and understand where and how to fly with minimal risk to themselves and others. See [good airmanship](https://en.wikipedia.org/wiki/Airmanship).

The author notes the use of UAVs, including DIY aircraft, for surveillance and attacks in wars and military conflicts, and states that this collection is intended for peaceful research and learning about technology and nature, rather than killing people. The source links [stopkillerrobots.org](https://www.stopkillerrobots.org).

Descriptions of availability, development status, performance, and regulations follow the recorded upstream README.

## Airframes

UAV airframes depend on the aircraft type and intended use: racing speed, agility for acrobatic freestyle, heavy lifting for filming, or long-distance observation. These requirements affect the mechanisms, materials, and approach to DIY construction.

The source excludes spare parts, modifications, and extensions for commercial aircraft from this section.

Building a UAV from scratch can be challenging for beginners, particularly with limited time. The source suggests starting with an existing solution or kit with a manual, then trying modifications or custom builds after gaining experience and learning to avoid common pitfalls. See [My Raspberry Pi drone: the story so far by Matchstic](https://www.youtube.com/watch?v=ZCOlT_sz6Gs).

### Multicopters

Multicopters use materials ranging from aluminum and carbon profiles to CNC-cut parts and fully 3D-printed cases. Configurations range from two to eight rotors.

* [18650 Micro Foldable](https://www.printables.com/model/1081158-18650-micro-foldable-fpv-drone/) - 3D-printed microdrone with an 18-minute flight time reported in the source.
* [Sub 250g autonomous drone] - Minimal 3D-printed frame with Li-ion power and GPS. The source provides no URL.
* [JeNo 5.1"](https://github.com/WE-are-FPV/JeNo-5.1) - Carbon wide X-frame with accessories, described as modern in the source.
* [Goblin v3](https://www.printables.com/de/model/396395-goblin-fpv-drone) - 3D-printed frame with 4S power and a 16x16 AIO stack, 2023.
* [NanoLongRange](https://www.thingiverse.com/thing:4769576) - 3D-printed frame built mainly around an 18650 Li-ion cell and an all-in-one board for whoops, 2021.
  * [Discovery Edition](https://www.thingiverse.com/thing:5428365) - Optimized frame with an integrated battery holder, 2022.
  * [NanoLongRange 2](https://www.thingiverse.com/thing:4818009) - Slightly lighter frame with GPS, available in three variants, including support for 21700 cells, 2021.
* [NLR35](https://www.thingiverse.com/thing:5428923) - Lighter frame similar to NLR, but using a 21700 cell, 2022.
* [hefty](https://hackaday.com/2023/09/01/hefty-3d-printed-quadcopter-meets-nasty-end/) - Fully 3D-printed heavy quadcopter with custom-made motors, 2023.
* [Ultimate 3D printable Cinewhoop](https://www.thingiverse.com/thing:4502805) - 2020.
* [TinyTina](https://blog.prusaprinters.org/how-to-build-a-3d-printed-micro-drone_29310/) - 3D-printed whoop, 2018.
* [Heavy Lift Quadcopter Frame](https://www.thingiverse.com/thing:4089842) - CNC-cut carbon frame, 2020.
* [The CogniFly](https://thecognifly.github.io) - Robust frame for research, swarms, and indoor use, with a Raspberry Pi companion computer, 2021.
* [TBS Source One](https://github.com/tbs-trappy/source_one) - Carbon racing frame with five revisions, 2021.
* [TBS Source Two](https://www.team-blacksheep.com/products/prod:source_two_5in) - Carbon racing frame, 2019.
* [TBS Source Podracer](https://github.com/ps915/source_podracer) - 3D carbon racing frame, 2020.
* [TBS Source V](https://www.team-blacksheep.com/products/prod:source_v) - 5-inch carbon racing frame, 2021.
* [TBS Source X](https://github.com/ps915/source_x) - Carbon racing frame, 2019.
* [AESIR II](https://www.thingiverse.com/thing:4868250) - Modular, customizable frame using 3D and carbon construction, 2021.
* [Foldable Drone Frame](https://www.thingiverse.com/thing:2004357) - 3D-printed frame with a gimbal option, 2017.
* [OpenRC Quadcopter](https://www.thingiverse.com/thing:793425) - 3D-printed frame with a closed case, 2015.
* [Hovership MHQ2](https://www.thingiverse.com/thing:511668) - Foldable 3D-printed frame, 2014.
* [Crossfire 2](https://www.thingiverse.com/thing:234867) - Large 3D-printed quadcopter, 2014.
* [Spyda 500](https://www.thingiverse.com/thing:160607) - Large 3D-printed quadcopter, 2013.

### Fixed Wing / Planes <a id="fixed-wing--planes-️"></a>

Traditional RC aircraft use balsa wood and foil-covered wing ribs. Commercial models often use foam, which can be cut with CNC machines or lasers to form wing profiles. Fully 3D-printed aircraft can be glued together and reinforced with carbon rods. The source also describes a growing community around commercial 3D-printed models using lightweight PLA to save weight, including [Craycle Hobby](https://craycle.com/), [Eclipson airplanes](https://www.eclipson-airplanes.com/), [3D lab print](https://3dlabprint.com/product-category/printable-airplanes/), [Plane Print](https://www.planeprint.com/), [OWLplane](https://owlplane.com/), and [rc-jetprint.de](https://rc-jetprint.de/en/).

* [Titandynamics Tornado v2](https://titandynamics.aero/free/p/tornado-v2) - 3D-printed, modular, 1 m aircraft with two motors for carrying payloads.
* [Merlin V2](https://www.youtube.com/watch?v=HT0NLQdX7Ak) - 3D-printed, 2.5 m aircraft with two motors for carrying payloads, described in the source as efficient and suited to long-range flights.
* [HAWk Modular RC Wing Airplane v1](https://www.printables.com/de/model/422806-hawk-modular-rc-wing-airplane) - 3D-printed LW-PLA wing of “1 m++”, as specified in the source, in pusher or puller configurations, with a complete BOM and manual, 2023.
* [V-Tail Aircraft for Long Range FPV & Autonomous Missions - by AeroStuff FPV](https://www.youtube.com/watch?v=sTjXVeo_lpQ) - V-tail pusher aircraft with folded Depron panels for the body and wings.
* [Highly Modular Design -1 (HMD1)](https://forum.flitetest.com/index.php?threads/large-modular-uav-design.69987/) - 3D-printed ABS V-tail aircraft for research, 2022.
* [Ranger V2](https://craycle.com/product/ranger-v2-800-mm-3ch-trainer-stl-file/) - Pusher training aircraft under 1 m, 2022.
* [Berkik 3 wing](https://www.youtube.com/watch?v=ZA8fGOzJB10) - 1.3 m Depron wing, 2021.
* [LukiSegler](https://www.printables.com/de/model/76098-lukisegler-electric-rc-glider) - Glider, 2021.
* [SakhWing](https://www.thingiverse.com/thing:4547317) - Drak-like fixed-wing aircraft printed in PETG, 2020.
* [GemINIce](https://www.youtube.com/watch?v=PcScS4Cj_Iw&list=PLEH_vTrFddgP8bRQFMK_z8rwmRth60Fen) - Depron aircraft with two propellers, 2016.
* [Joywing](https://www.youtube.com/watch?app=desktop&v=X6hJCQNxVzs) - Simple racing wing, 2019.
* [Eclipson Model V](https://www.thingiverse.com/thing:4011218) - Commercial aircraft with wheels, built mainly with 3D printing, 2019.
* [Eclipson Model Y](https://www.thingiverse.com/thing:2752892) - Commercial aircraft with wheels, built mainly with 3D printing, 2018.
* [Northern Pike](https://www.thingiverse.com/thing:3040294) - 36-inch 3D-printed fixed-wing aircraft, 2018.
* [Moose](https://www.thingiverse.com/thing:3023606) - 1 m puller aircraft made of PLA, 2018.
* [Supernove](https://www.thingiverse.com/thing:2187747) - Jet-like RC pusher aircraft.
* [RC Flying Wing](https://www.thingiverse.com/thing:2044074) - 3D-printed pusher aircraft under 1 m, 2017.
* [GASB Three](https://www.thingiverse.com/thing:3605665) - 3D-printed fixed-wing aircraft, 2019.
* [GASB Two](https://www.thingiverse.com/thing:1831295) - 3D-printed fixed-wing jet with an electric ducted fan (EDF) instead of a conventional propeller, 2016.
* [GASB One](https://www.thingiverse.com/thing:1659724) - 80 cm 3D-printed fixed-wing aircraft developed through six revisions, 2016.
* [Red swan](https://www.thingiverse.com/thing:453090) - 1950 mm printed aircraft with wing ribs, a successor to the Red Duck model, 2014.
* [Le Fish glider](https://lefish.fandom.com/wiki/Building_Le_Fish#Plans) - Open-source aerobatic glider with many remixes, 2005.

### VTOLs

VTOL aircraft transition from a copter configuration to a gliding wing. The source describes easier takeoff and landing, at the cost of more complex mechanisms and slightly greater weight than fixed-wing aircraft.

* [Vorian tilt-rotor quad](https://rotorbuilds.com/build/35240) - Multi-material quadcopter with all four propellers able to tilt.
* [Squirrel design](https://jgkang1210.github.io/fsdrone) - Design combining a quadcopter and a bat-like membrane for gliding.
* [MiniHawk-VTOL v2.0](https://github.com/StephenCarlson/MiniHawk-VTOL) - 3D-printed aircraft with three propellers.
* [VTOL in 5 revisions](https://www.youtube.com/watch?v=gPEeCjVrTBw) - Aircraft made with 3D printing and foam, 2018.
  * [wing profile](https://www.printables.com/de/model/261434-vase-mode-wing) - Resulting wing profile, 3D-printed with LW-PLA.
* [bicopter kit](https://hackaday.com/2018/08/27/the-best-new-quad-is-a-bicopter/) - CNC-cut carbon kit, 2018.

## Batteries & Power Control

Commercial LiPo packs are common in RC aircraft; the source says they can be replaced with custom packs based on 18650 Li-ion cells. The onboard power bus supplies the ESC and flight controller directly, and these units offer 5 V outputs for other onboard equipment.

* 18650 LiIon packs
  * [Using Li-Ion Battery Pack for Long Range FPV Flying](https://oscarliang.com/li-ion-battery-long-range/) - 4S battery pack and background information, 2023.
  * [build a „LongRange“ Lithium Ion Battery](https://blog.seidel-philipp.de/diy-build-a-longrange-lithium-ion-battery/) - 4S, 3000 mAh battery pack, 2020.
  * [DIY FPV Goggle Battery Pack](https://nuxnik.com/diy-fpv-goggle-battery-pack/) - Battery pack for goggles, with a charge meter and a 3D-printed case, 2021.
  * [18650 spaceholder](https://www.printables.com/de/model/1181-18650-improved-spacerholder) - 3D-printed holder for easier cell packaging, 2023.
* Solar plane
  * [Solar Dragon - Solar Plane Might Be Able To Last Through The Night](https://hackaday.com/2022/08/06/solar-plane-might-be-able-to-last-through-the-night/) - Aircraft described in the source as having photovoltaic-covered wing ribs, 2022.
  * [rctestflight series](https://www.youtube.com/watch?v=1OGrDvInUAY) - Solar-cell-covered fixed-wing aircraft with an 8-hour, 30-minute flight, measurements, and background information. The source also links a [possible 24-hour flight](https://hackaday.com/2022/09/27/24-hours-of-le-airplanes/), 2022.
* [diyBMS v4](https://github.com/stuartpittaway/diyBMSv4) - Battery-management PCB and firmware for Li-ion packs.

## Motor Control <a id="motor-control-️"></a>

Brushless DC motors (BLDC) are commonly used for their power and precision. Each motor requires an electronic speed controller (ESC).

* [BLheli_S](https://github.com/bitdump/BLHeli) - ESC firmware with fine-grained control, described as popular in the source.
* [BlueJay](https://github.com/mathiasvr/bluejay) - BLHeli fork providing digital ESC firmware for brushless motors, with features such as custom melodies. Since 2020.
* [AM32-MultiRotor-ESC-FW](https://github.com/am32-firmware/AM32) - DSHOT and telemetry support, 2024.
* [MESC FOC ESC](https://github.com/davidmolony/MESC_FOC_ESC) - Open hardware and firmware for STM32-based ESCs.
* [ESC Configurator](https://github.com/stylesuxx/esc-configurator) - Web app for setting up BLHeli and Bluejay ESCs.
* [PIDtoolbox](https://github.com/bw1129/PIDtoolbox) - Tune PID settings to maximize the performance of a specific model.

## Flight Control <a id="flight-control-️"></a>

The source describes modern autopilot software as requiring STM32 F4/F7 boards and usually no longer supporting older boards such as NAZE32, CC3D, and legacy ArduPilot hardware. It says most projects are based on Baseflight or Cleanflight firmware and a desktop configurator.

* [INAV](https://github.com/light/inav) - GPS-based flight planning and autonomous flights for wings and copters.
* [betaflight](https://github.com/betaflight/betaflight) - Focus on racing and agility for wings and copters.
* [EmuFlight](https://github.com/emuflight/EmuFlight) - Focus on modern algorithms, as described in the source.
* [dRonin](https://github.com/d-ronin/dronin/) - Support for Openpilot and other target boards.
* [Ardupilot](https://ardupilot.org) - Ecosystem for professional and research use with wings, copters, and land or water vehicles. The source describes extensive information, experience, and possibilities, with greater complexity than INAV.
* [dRehmflight](https://github.com/nickrehm/dRehmFlight) - Firmware for VTOL aircraft and their transitions during flight. Teensy boards only.
* [Rotorflight](https://github.com/rotorflight/rotorflight) - Firmware for traditional single-rotor helicopters.
* [HPR-Rocket-Flight-Computer](https://github.com/SparkyVT/HPR-Rocket-Flight-Computer) - Firmware for high-speed rockets.
* [CleanFlight](https://github.com/cleanflight/cleanflight) - Legacy Baseflight fork, described as stalled in the source.
* [BaseFlight](https://github.com/multiwii/baseflight) - Legacy firmware from the era of Wii gyro hacks and 8-bit controllers, described in the source as the oldest and stalled.
* [QUICKSILVER firmware](https://github.com/BossHobby/QUICKSILVER)
* [Paparazzi UAV](https://github.com/paparazzi/paparazzi)
* [LibrePilot](https://github.com/librepilot/LibrePilot) - Described in the source as stalled since 2018.
* [madflight](https://github.com/qqqlab/madflight) - Firmware for Arduino-based target boards, with support for different sensors, 2024.
* [The Cube Autopilot](https://github.com/proficnc/The-Cube) - Flight-controller hardware such as Pixhawk 2.
* [Risc V Powering a 3D Printed Drone](https://www.youtube.com/watch?v=TJCeLOiP7lU) - RISC-V CPU experiments on a DIY quadcopter.

## RC Transmitters & Hand Controllers <a id="rc-transmitters--handcontroller"></a>

Radio-control transmitters (RC TX, on the operator side) use extension bays with the [JR/JR Lite form factor](https://github.com/pascallanger/DIY-Multiprotocol-TX-Module/blob/master/docs/Module_BG_4-in-1.md) and serial interfaces for different radio protocols. Most receivers (RX, on the aircraft side) use standard serial protocols such as Crossfire (CRSF) to communicate with the flight controller. Also see the ground-station section.

* [EdgeTX](https://github.com/EdgeTX/edgetx) - OpenTX successor, described as under active development in the source.
* [freedomTX](https://github.com/tbs-fpv/freedomtx) - OpenTX fork, described in the source as stalled since 2020.

* [OpenTX](https://github.com/opentx/opentx) - Firmware for popular handheld transmitters, with a desktop manager and sound packs.
* [inav-opentx-sounds](https://github.com/JyeSmith/inav-opentx-sounds) - Additional sounds for flight modes.
* [transmitter-sound-pack](https://inavfixedwinggroup.com/guides/transmitter-models/transmitter-sound-pack/) - INAV sounds and complete configurations for wings.
* [VTx](https://github.com/teckel12/VTx) - Reduced Betaflight Lua script for controlling only the VTX.
* [betaflight-tx-lua-scripts](https://github.com/Matze-Jung/betaflight-tx-lua-scripts) - Extended Betaflight Lua script.
* [opentx-lua-widgets](https://github.com/Matze-Jung/opentx-lua-widgets) - Additional UI widgets for displaying telemetry.
* [opentx-lua-running-graphs](https://github.com/Matze-Jung/opentx-lua-running-graphs) - Additional graph widgets.
* [OpenTX-Pong](https://github.com/SpechtD/OpenTX-Pong) - Simple game for a transmitter.
* [ELRS-Joystick-Control](https://github.com/kaack/elrs-joystick-control) - ELRS module connected directly to a GCS with joysticks.
* [Arduino Transmitter for ELRS](https://github.com/kkbin505/Arduino-Transmitter-for-ELRS) - Simple Arduino-based, gamepad-style handheld transmitter.
* [OpenAVRc](https://github.com/Ingwie/OpenAVRc_Hw) - Custom transmitter based on Arduino Mega2560 boards.
* [ER9X](http://www.er9x.com) - Alternative firmware for the 9XR handheld transmitter.

### Modules

Hardware and firmware for custom radio links. The source describes bidirectional links as typical, with transmitter and receiver sides.

* [Multi Module](https://github.com/pascallanger/DIY-Multiprotocol-TX-Module) - Support for protocols including FrSky, FlySky, Walkera, and Futaba.
* [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS) - ELRS for long range or lower latency. Supports flashing some existing hardware and commercial modules for 868/915 MHz or 2.4/5.8 GHz, as described in the source.
  * [ELRS Airport Firmware](https://github.com/ExpressLRS/ExpressLRS/pull/1904) - Bidirectional link for a more complex telemetry downlink.
* [mLRS](https://github.com/olliw42/mLRS) - MAVLink-compatible long-range system.
* [openLRSng](https://github.com/openLRSng/openLRSng) - Next generation of OpenLRS, described in the source as stalled since 2018.
* [Raven LRS](https://github.com/RavenLRS/raven) - LoRa-based system, 2019.
* [OpenSky](https://fishpepper.de/projects/opensky/) - Alternative firmware for FrSky modules, 2016.
* [DeviationTX](https://deviationtx.com/) - Alternative firmware for Walkera, 2016.

## VTX

Video transmitters (VTX) are analog or digital radio transmitters on the aircraft. They usually send video from the front camera for first-person view (FPV), but can also send other information or provide a bidirectional link to a ground station, including a control uplink. Also see the ground-station section.

* [OpenHD](https://github.com/OpenHD/Open.HD) - 2.4/5.8 GHz Wi-Fi hardware and SBCs on the aircraft and ground sides, providing a video and telemetry downlink and an optional control uplink. The source also describes development of a more efficient dedicated board. [Compare open digital links](https://openhd.gitbook.io/open-hd/general/openhd-vs-alternatives).
* [RubyFPV](https://rubyfpv.com) - 2.4/5.8 GHz Wi-Fi hardware and Raspberry Pis for a video and telemetry downlink and an optional control uplink. The source says no source code is provided, but a plugin system is available.
* [Wifibroadcast NG](https://github.com/svpcom/wifibroadcast) - 2.4/5.8 GHz Wi-Fi hardware and Raspberry Pis for a video and telemetry downlink.
* [wfb-ng on OpenIPC](https://github.com/OpenIPC/sandbox-fpv) - Wifibroadcast NG on OpenIPC-compatible CCTV modules, with telemetry and video feeds of 120 fps or 4k reported in the source. Commercial kits are listed from several vendors, including EMAX Wyvern Link and Runcam Wifilink.
* [DroneBridge](https://github.com/DroneBridge/DroneBridge) - Bidirectional link using 2.4 GHz Wi-Fi hardware, Raspberry Pis, ESP32, and an Android app. [Comparison with the other protocols](https://dronebridge.gitbook.io/docs/comparison).
* [EZ Wifibroadcast](https://github.com/rodizio1/EZ-WifiBroadcast) - Described in the source as the first and oldest Wi-Fi-based VTX setup.
* [hx-esp32-cam-fpv](https://github.com/RomanLut/hx-esp32-cam-fpv) - Low-cost ESPcam boards transmitting MJPEG frames.
* [wtfos](https://github.com/fpv-wtf/wtfos) - Rooting and modification of DJI FPV transmitters and receivers.
* [DigiView-SBC](https://github.com/fpvout/DigiView-SBC) - DJI HD signal reception, marked as alpha in 2021.
* [OpenVTx](https://github.com/OpenVTx/OpenVTx) - Free firmware for open-hardware analog VTX units.
* [VTX Power Measure](https://github.com/mrRobot62/vtx_power_measure) - Python scripting for the Immersion RF-Meter V2.

## Camera & Gimbals

Cameras supply the onboard video transmitter for a downlink, or record higher-quality footage as a DVR. See the VTX section for custom systems supporting different camera setups.

* [Gyroflow](https://github.com/gyroflow/gyroflow) - Smooth HD video recordings using IMU sensor data.
* [OpenHD on thermal cameras](https://openhd.gitbook.io/open-hd/hardware/cameras) - Read thermal-camera sensors using a Raspberry Pi.
* [TetraPI](https://github.com/bluegreen-labs/TetraPi) - Raspberry Pi-based multispectral camera module.
* [opentrack](https://github.com/opentrack/opentrack) - Input from the built-in trackers of FPV goggles or VR headsets.
* [RC Headtracker](https://github.com/dlktdr/HeadTracker) - Turn a camera gimbal as the goggles turn, using Arduino and Bluetooth.
* [STORM32BGC](https://github.com/olliw42/storm32bgc) - Firmware and a brushless gimbal controller.
* [Open Brushless Gimbal](https://www.thingiverse.com/thing:110731) - 2013.

## GPS <a id="gps-️"></a>

Global navigation systems such as GPS determine the aircraft’s current position. The source describes consumer GPS modules as inexpensive, with some allowing improved accuracy through real-time or post-processing.

* [GNSS SDR](https://gnss-sdr.org) - Software toolchain for processing GPS, “Baidu” (as named in the source), and GLONASS radio signals received by SDR hardware backends.
* [rtklib](https://www.rtklib.com) - Software toolchain for increasing GNSS accuracy through real-time or post-processing to eliminate interference. Works with signals recorded by SDR or some commercial GPS modules.
* [Vicon MavLink](https://github.com/bo-rc/ViconMAVLink) - Indoor positioning for a whole drone swarm using commercial optical systems.

## Sensors <a id="sensors-️"></a>

Compass, barometer, airspeed, and current sensors can improve position estimation or show system performance.

* [QLiteOSD](https://github.com/Qrome/QLiteOSD) - ESP32-based OSD for reading sensors without a flight controller.
* [3D Printed Drone Build - How to Wire OpenHD and Ultrasonic Abstacle Avoidance](https://www.youtube.com/watch?v=HNR1mqUDpoE) - Ultrasonic obstacle avoidance on a quadcopter, integrated with OpenHD.

See [Ardupilot - Optional hardware](https://ardupilot.org/copter/docs/common-optional-hardware.html) for further examples.

## Video Receivers

Goggles use module bays for different radio protocols or HDMI input. See the VTX section for custom systems supporting different camera setups.

* [DIY Homemade FPV Monitor](https://hackaday.io/project/160893-diy-homemade-fpv-monitor) - 5.8 GHz analog display with diversity reception.
* [FENIX-rx5808-pro-diversity](https://github.com/JyeSmith/FENIX-rx5808-pro-diversity) - Open-hardware 5.8 GHz analog module with diversity reception for goggles.
  * [rx5808 pro divesity](https://github.com/sheaivey/rx5808-pro-diversity)
* [rpi-rx5808-stream](https://github.com/xythobuz/rpi-rx5808-stream) - Raspberry Pi-based streaming server for 5.8 GHz analog video with diversity reception.

## Antennas and Trackers

Transmitters and receivers can use custom antenna configurations. Trackers support directional antennas, using multiple receivers with diversity or telemetry to point toward the aircraft. The source describes this as equipment for more advanced flights beyond visual line of sight (VLOS), unnecessary for novices. It also notes approaches using 4G to extend video and control links.

* [u360gts](https://github.com/raul-ortega/u360gts/) - 360° motorized tracker using F2/F3 controllers, with firmware, hardware, and a case, 2020.
* [AntTracker](https://github.com/zs6buj/AntTracker) - Servo-based tracker using F1, ESP8266, or ESP32 controllers, 2019.
* [open360tracker v2](https://www.thingiverse.com/thing:2568906) - Simplified design with all components in the moving head.
* [open360tracker](https://github.com/SamuelBrucksch/open360tracker) - 360° servo tracker, 2016.
  * [Amv-open360tracker](https://github.com/raul-ortega/amv-open360tracker) - Fork, 2016.
  * [Amv-open360tracker 36bit](https://github.com/ericyao2013/amv-open360tracker-32bits) - Fork, 2016.
* [Ghettostation Antenna Tracker](https://www.thingiverse.com/thing:547358) - Several forks, 2014.
* [DIY Helical Antenna For Long Range FPV](https://www.youtube.com/watch?v=aH0cW9XJ4D4) - 5.8 GHz helical directional antenna for analog goggles, with a 3D-printed skeleton.
* [Cloverleaf Antenna - Build Instructions](https://www.youtube.com/watch?v=JGm9ESx4yzE) - 5.8 GHz omnidirectional antenna for analog video transmission.

## Telemetry & Logs

Common serial protocols carry sensor values and control information. These can be recorded onboard as blackbox logs on an SD card in the flight controller, or sent to a transmitter or ground station. Logs help locate lost drones and debug or tune PID control and flight behavior.

* [MAVlink](https://github.com/mavlink/mavlink) - Extensible protocol for uses ranging from hobbyist to commercial UAVs.
* [Cyphal](https://opencyphal.org) - Formerly UAVCAN, described in the source as an industrial-only drone bus system.
* [YAMSPy](https://github.com/thecognifly/YAMSPy) - Read the MSP serial protocol with Python.
* [LuaTelemetry](https://github.com/teckel12/LuaTelemetry) - OpenTX/EdgeTX script rendering a live cockpit and map from a telemetry data stream.
* [betaflight-tx-lua-scripts](https://github.com/betaflight/betaflight-tx-lua-scripts) - Script for displaying telemetry and controlling settings such as the camera and VTX.
* [otxtelemetry](https://github.com/olliw42/otxtelemetry) - OpenTX/EdgeTX script adding MAVLink support.
* [INAV blackbox viewer](https://github.com/iNavFlight/blackbox-log-viewer) - Render sensor and motor values as a video OSD overlay.
* [INAV blackbox tools](https://github.com/iNavFlight/blackbox-tools) - Convert logs to CSV time-series files or a visual OSD overlay.
* [flightlog2x](https://github.com/stronnag/bbl2kml) - Convert INAV, OpenTX, and other blackbox logs to CSV, GPX, or KML, and render tracks and trajectories with different performance display styles. Separate [GUI](https://github.com/stronnag/fl2xui).
* [UAVLogViewer](https://github.com/ardupilot/uavlogviewer) - Web application for Ardupilot logs.
* [OSD-subtitles](https://github.com/kristjanbjarni/osd-subtitles) - Render blackbox logs as OSD subtitles for synchronized playback with a video file.
* [Dashware](http://www.dashware.net/dashware-download/) - Closed-source OSD rendering for blackbox logs.
* [PID-Analyzer](https://github.com/Plasmatree/PID-Analyzer) - Read blackbox logs and tune PID control variables.
* [openXsensor](https://github.com/openXsensor/openXsensor) - Convert and modify telemetry protocols.
* [OpenLog](https://github.com/sparkfun/OpenLog) - Blackbox data recorder using [blackbox](https://github.com/thenickdude/blackbox/) firmware. The source notes that this function is usually part of the main flight controller.

## Mission Control & Base Stations <a id="mission-control--basestation-️"></a>

Ground control stations (GCS) on laptops or tablets provide an overview of flight parameters and position for mission control during long-range or long-duration flights. See [Ardupilot.org - Choosing GCS](https://ardupilot.org/copter/docs/common-choosing-a-ground-station.html).

* [mwptools](https://github.com/stronnag/mwptools) - Waypoint mission planner, particularly for INAV, including INAV Radar and ADS-B sources.
* [APM Planner 2.0](https://ardupilot.org/planner2/) - MAVLink-compatible planner drawing on experience from MP and QGroundControl.
* [QGroundControl](https://github.com/mavlink/qgroundcontrol) - MAVLink support for desktop and mobile.
* [MissionPlanner](https://ardupilot.org/planner/index.html) - Waypoint mission planning, particularly for Ardupilot.
* [MAVProxy](https://ardupilot.org/mavproxy/) - Command-line and GUI mission planner, telemetry viewer, and processor.
* [BulletGCSS](https://github.com/danarrib/BulletGCSS) - GSM and MQTT for extended-range links.
* [Dreka GCS](https://github.com/Midgrad/Dreka) - GCS described in the source as new and limited, but with a more modern interface.

## Companion Computers & Integration

The flight controller handles real-time maneuver control, while companion computers provide resources for more complex data processing. See [Ardupilot.org - Companion Computers](https://ardupilot.org/dev/docs/companion-computers.html) and the digital VTX systems above.

* [öchìn CM4](https://github.com/ochin-space/ochin-CM4) - Raspberry Pi Compute Module carrier board for flight controllers.
* [APsync](https://ardupilot.org/dev/docs/apsync-intro.html) - MAVLink-focused OS for different SBCs.
* [RPanion](https://www.docs.rpanion.com/software/rpanion-server) - MAVLink-focused Raspberry Pi image.
* [ROS](https://github.com/ros/ros) - Robot Operating System for more complex, interactive flights.
* [DroneKit](https://github.com/dronekit/dronekit-python) - Cross-platform integration ecosystem, including a MAVLink radio link.

## Computer Vision

Computer vision processes live UAV images or recordings for aerial mapping and machine-learning-based flight planning. See [UAV Mapping Guidelines](https://uav-guidelines.openaerialmap.org/).

* [OpenDroneMap](https://www.opendronemap.org/) - Stitch photos into aerial imagery and calculate 3D models, among other uses.
* [OpenAerialMap](https://github.com/hotosm/OpenAerialMap/) - Share drone imagery for disaster response and other uses.
* [DroneDB](https://github.com/DroneDB/DroneDB) - Store and archive drone photos and aerial imagery.
* [OpenAthena](https://github.com/mkrupczak3/OpenAthena) - Automatic GCP detection using markers, as described in the source.
* [OpenMMS](https://www.openmms.org/) - Mobile mapping system that carries a laser scanner.
* [BANet](https://github.com/lironui/BANet) - Machine-learning segmentation of areas in aerial imagery.
* [AVCBet](https://github.com/lironui/ABCNet) - Machine-learning segmentation of areas in aerial imagery.
* [Faster](https://github.com/mit-acl/faster) - Machine learning to teach drones to avoid obstacles.
* [Fast-Planner](https://github.com/HKUST-Aerial-Robotics/Fast-Planner) - Teach drones to avoid obstacles along a route.
* [Autonomous Drone Dodges Obstacles Without GPS](https://hackaday.com/2021/11/03/autonomous-drone-dodges-obstacles-without-gps/) - Raspberry Pi-based computer vision, route planning, and obstacle avoidance.
* [Drone-net](https://github.com/chuanenlin/drone-net) - Machine-learning detection of quadcopters in photos and videos using YOLO v4.
* [Anti-UAV](https://github.com/ZhaoJ9014/Anti-UAV) - Machine-learning detection of quadcopters in IR and RGB videos.
* [Fire Detection UAV](https://github.com/AlirezaShamsoshoara/Fire-Detection-UAV-Aerial-Image-Classification-Segmentation-UnmannedAerialVehicle) - Machine learning to teach drones to detect fires.
* [DroneAid](https://github.com/Call-for-Code/DroneAid) - Machine-learning detection of people through emergency markers in disaster response.
* [AirPose](https://github.com/robot-perception-group/AirPose) - Machine-learning human pose estimation from a drone's perspective.
* [AruCo landing](https://github.com/radekholy24/aruco-landing) - Machine-learning ROS add-on for landing at marker positions.

## Complete Systems

Drones and toolchains designed for particular applications.

* [Sonora Medical Delivery Planes](https://www.peanutbuttertunaspoon.org) - Deliver medical kits to remote areas of Mexico using RC aircraft.
* [Guiness World record fastest drone build](https://www.youtube.com/watch?v=L_O45iEar4M) - Design and construction of a quadcopter rocket described in the source as a Guinness World Record build at 389 mph / 626 km/h. The source also links the similar [AOSHS5 build](https://www.youtube.com/watch?v=oG2GaSMlfdo), at 200 mph.
* [Guiness World record endurance drone build](https://www.youtube.com/watch?v=1lfVKcKQ5BI) - Large quadcopter with a 3-hour, 12-minute flight, described in the source as a Guinness World Record endurance build.
* [Arduino FPV Mini Drone](https://www.instructables.com/Make-a-Tiny-Arduino-Drone-With-FPV-Camera/) - Wood-framed mini quadcopter without BLDC motors, using a custom RF link built around MultiWII.
* [SearchWing](https://www.hs-augsburg.de/searchwing/de/willkommen/) - Search-and-rescue RC aircraft for visual inspection of large sea areas to rescue people from refugee boats at the EU sea border. Waterproof for landing beside the SAR mothership.
* [Dronecoria](https://dronecoria.org) - Heavy-lift wooden octocopter for dropping seeds.
* [Agilicious](https://agilicious.dev) - 3D-printed open-source hardware drone and ecosystem, particularly for research into agile, autonomous flight using computer vision, 2023.
* [Crazyflie](https://www.bitcraze.io/documentation/system/platform/) - Drone focused less on FPV, using custom modules and different technology for swarm control.
* [ESP-Drone](https://github.com/Circuit-Digest/ESP-Drone) - Quadcopter built around an ESP32 and PCB, without FPV, using custom Wi-Fi and brushed motors.
* [ESP32 Drone](https://hackaday.io/project/188578-esp32-drone) - Low-cost quadcopter using an ESP32 board without traditional FPV, 2022.
* [Wifree-copter](https://open-diy-projects.com/wifree-copter/) - 3D-printed copter described as easy in the source, using a Raspberry Pi for Wi-Fi remote control through an app, 2016.

## Security & Safety

### Simulators

Simulators let pilots practice with a handheld transmitter and learn to avoid common mistakes before damaging hardware. Other simulators test or benchmark autopilots in controlled environments.

The source describes consumer-friendly training simulators as mainly commercial, with options available for Linux and macOS: [Freerider Recarged](https://fpv-freerider.itch.io/fpv-freerider-recharged), [Liftoff](https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/), [DRL Sim](https://thedroneracingleague.com/drlsim/), and [Velocidrone](https://www.velocidrone.com/).

* [crrcsim](https://sourceforge.net/projects/crrcsim/) - RC aircraft simulator, 2018.
* [Picasim](https://github.com/Rowlhouse/PicaSim) - Closed-source RC aircraft simulator, a successor to SSS.
* FlightGear - Usually used for larger aircraft, but can be paired with a flight controller for simulation. Descriptions [from PaparazziUAV](https://wiki.paparazziuav.org/wiki/FlightGear) and [from Arduplane](https://ardupilot.org/dev/docs/simulation-2.html).
* [AirSim](https://github.com/microsoft/AirSim) - Microsoft simulator for algorithm testing.
* [jMAVSim](https://github.com/PX4/jMAVSim) - MAVLink simulator.
* [JSBsim](https://github.com/JSBSim-Team/jsbsim) - Bindings for Python and Matlab.
* [GAZEBOsim](https://github.com/gazebosim/gz-sim) - Multi-robot simulation.
* ROS supports simulation, as described [by PX4](https://docs.px4.io/master/en/ros/ros2_comm.html).

### Checklists <a id="checklists"></a> <a id="build-power-check"></a>

Malfunctions and drone accidents can cause serious damage. The source stresses a step-by-step protocol and documentation for every flight as mandatory to avoid unnecessary risks, including when an insurance claim may be needed.

### Checklists: Maiden Flight <a id="maiden-flight-check"></a>

* [iNav Pre-maiden Checklist](https://www.mrd-rc.com/tutorials-tools-and-testing/flight-controller-therapy/inav-pre-maiden-checklist-a-helpful-reminder-and-saver-of-foam/) - Fixed-wing pre-maiden checklist by Mr.D.

### Checklists: Regular Flights <a id="regular-flight-check"></a>

* [Ardupilot Copter Checklist](https://ardupilot.org/copter/docs/checklist.html).

### ID Systems

RC copters and aircraft share airspace with other pilots and can be hard to see. The source recommends sharing positions through transponder systems and notes that this also enables tracking of illegal maneuvers.

* ADS-B aircraft transmissions can be received with SDR hardware, including low-cost USB DVB-T receivers. They can be integrated through extensions such as [mwp-radar-view](https://github.com/stronnag/mwptools/wiki/mwp-Radar-View), the [Ardupilot ADS-B receiver](https://ardupilot.org/copter/docs/common-ads-b-receiver.html), or OpenHD. ADS-B is included in the MAVLink protocol and appears on most GCS systems, as described in the source. Positions can also be viewed through [adsb-exchange.com](https://globe.adsbexchange.com/).
* [INAV Radar](https://github.com/OlivierC-FR/ESP32-INAV-Radar) - LoRa radio and ESP32 for broadcasting positions and displaying them on an OSD.
* [FormationFlight](https://formationflight.org/getting-started/) - ESP32 Wi-Fi for broadcasting positions and telemetry and displaying them on an OSD.
* [SoftRF](https://github.com/Matthias84/awesome-flying-fpv/blob/2d1764ddf480e27f013efaab4b4be19047ada99c/hhttps:/github.com/lyusupov/SoftRF/wiki/Nano-Edition) - Nano edition, with support for FLARM and other systems.
* [Glidernet](https://www.glidernet.org) - Share FLARM and ADS-B positions online.
* [Opensky Network](https://opensky-network.org) - Share ADS-B positions online.
* [Stratux](https://github.com/stratux/stratux) - Share position and course through different radio transmitters.
* [ArduPilot RemoteID Transmitter](https://github.com/ArduPilot/ArduRemoteID) - FCC RemoteID with MAVLink and DroneCAN integration.
* [WiFi RID capture](https://github.com/sxjack/unix_rid_capture) - Capture remote identification signals with a sniffer.
* [Drone Detection and Tracking Using RF Identification Signals ](https://www.mdpi.com/1424-8220/23/17/7650) - Track DJI drones using Wi-Fi and the KISMET sniffer.

### Hacking & Hijacking

The source warns that radio links are inherently insecure and can be jammed easily.

* [RFUAV](https://github.com/kitoweeknd/RFUAV) - Radio-based drone detection and signal fingerprinting.
* [Drone Remote ID Monitoring System](https://github.com/cyber-defence-campus/RemoteIDReceiver) - Web frontend for mapping DJI drones through their RemoteID.
* [WTF WJI, UAV CTF?](https://ftp.fau.de/cdn.media.ccc.de/events/camp2023/h264-hd/camp2023-57063-eng-WTF_DJI_UAV_CTF_hd.mp4) - Felix Domke's cccamp23 talk on reverse engineering the DJI Mini 2 to bypass manufacturer limitations, including memory-dump analysis, cryptographic-key decryption, and radio analysis. Covers the DJI ecosystem and its [open-source components](https://www.dji.com/de/opensource).
* [Drone-ID Receiver for DJI OcuSync 2.0](https://github.com/RUB-SysSec/DroneSecurity) - Decode DJI radio transmissions, including DroneID and pilot location, using SDR and Python.
* [Debugging Microcontrollers ](https://media.ccc.de/v/camp2023-57321-debugging_microcontrollers) - Niklas Hauser's cccamp23 talk on the difficulties of debugging PX4 hardware microcontrollers running the NuttX RTOS.
* [5.8GHz video demodulation](https://www.youtube.com/watch?app=desktop&v=rl8ACNnjPFA) - Video demodulation using HackRF SDR.
* [GPS jamming](https://www.researchgate.net/publication/339824302_Effective_GPS_Jamming_Techniques_for_UAVs_Using_Low-Cost_SDR_Platforms) - GPS-jamming research using BladeRF SDR and GNU Radio to block satellite signals.
* [GPS spoofing](https://rnl.ae.utexas.edu/images/stories/files/papers/unmannedCapture.pdf) - Research into controlling other UAVs by faking satellite transmissions from the ground.
* [RemoteID Spammer/Spoofer](https://github.com/jjshoots/RemoteIDSpoofer) - ESP8266/NodeMCU-based drone RemoteID spoofer.
* [Accoustic drone tracking](https://www.youtube.com/watch?v=cSuV9xzcgXY&feature=youtu.be) - Paper by Fraunhofer IDMT.
* [Robot Vulnerability Database](https://github.com/aliasrobotics/RVD) - CVEs for semi-autonomous machines.

## Accessories <a id="accesoirs"></a>

3D printing can provide useful add-ons for equipment and models.

* [Delta 5 race timer](https://github.com/scottgchin/delta5_race_timer) - Trigger a lap counter using 5.8 GHz video signals.
  * [RotorHazard](https://github.com/RotorHazard/RotorHazard) - Successor with multiple nodes and a central Raspberry Pi server.
* [Capture The Flag for drones](https://github.com/SeekND/CaptureTheFlag) - Optical system simulating a flag for close-range team games.
* Gimbal protection
* Holders and stands
* Action-camera mounts
* Rotor guards

### Mobile Apps

Free mobile applications that the source identifies as useful. They are not necessarily open-source.

* [SpeedyBee](https://www.speedybee.com/speedy-bee-app/) - Flight-controller parameter settings and blackbox-log viewing for Betaflight, iNAV, and EmuFlight. [Android](https://play.google.com/store/apps/details?id=com.runcam.android.runcambf), [iOS](https://apps.apple.com/us/app/speedybee-app/id1150315028).
* [BLHeli_32](https://play.google.com/store/apps/details?id=org.blheli.BLHeli_32) - Configure BLHeli_32 ESCs.
* [FPV Video Channelsorter 5.8GHz](https://play.google.com/store/apps/details?id=florian.felix.flesch.fpvvideochannelsorter) - Sort channels for each pilot across the available frequencies.
* [UAV Forecast](https://www.uavforecast.com) - Weather forecasts, GPS satellites, solar activity (Kp), no-fly zones, and flight restrictions. [Android](https://play.google.com/store/apps/details?id=com.uavforecast), [iOS](https://apps.apple.com/us/app/uav-forecast/id1050023752).
* [Go FPV](https://play.google.com/store/apps/details?id=com.vertile.fpv3d) - UVC video-camera display and capture app built for DIY FPV goggles.

### Workbench

* [smoke stopper](https://oscarliang.com/smoke-stopper/) - Help avoid damage to components during assembly.
* [4AxisFoamCutter](https://github.com/rahulsarchive/4AxisFoamCutter) - Create aerodynamic wings from foam.

## Legal Information <a id="legal-information-️"></a>

Airspace laws and rules vary by country. The resources below retain the descriptions in the recorded README.

* [Luftfahrt Bundesamt](https://www.lba.de/DE/Drohnen/Drohnen_node.html) - Germany: Legal framework.
* [Deutsche Flugsicherung GmbH](https://www.dfs.de/homepage/de/drohnenflug/) - Germany: Tests and approvals.
* [Digitale Plattform Unbemannte Luftfahrt](https://www.dipul.de/homepage/de/) - Germany: Map platform, with the [Droniq App](https://play.google.com/store/apps/details?id=de.droniq.droniqapp&hl=de&gl=US) as an alternative.
* [Bundesnetzagentur](https://www.bundesnetzagentur.de/DE/Sachgebiete/Telekommunikation/Unternehmen_Institutionen/Frequenzen/Grundlagen/Frequenzplan/frequenzplan-node.html) - Germany: Permitted transmission frequencies and power levels.

* [Urząd Lotnictwa Cywilnego](https://drony.ulc.gov.pl) - Polish Civil Aviation Authority: License applications in Poland and the EU.
* [Bezzałogowe Statki Powietrzne](https://ulc.gov.pl/pl/drony) - Poland: Regulations concerning UAV operations.

## Communities <a id="communities-️"></a>

Communities provide places to share ideas and questions with UAV pilots, modders, and hackers.

* [Dronecode foundation](https://www.dronecode.org) - Home for MAVLink, QGroundControl, and PX4, and part of the Linux Foundation.
* [FPV Freedom Coalation](https://fpvfc.org/) - Keep drones modifiable and safe.
* [Deutscher Modellflieger Verband e.V.](https://www.dmfv.aero) - Germany: Events, local communities, insurance, and other services.
* [Deutscher Aero Club e.V.](https://www.daec.de) - Germany.

### Forums & Social Media

* [rcroups.com](https://rcroups.com) - The source says most projects offer support here.
* [diydrones.com](https://diydrones.com) - Groups covering projects, hardware, and countries.
* [rotorbuilds.com](https://rotorbuilds.com) - Recipes for custom builds.
* [openrcforums.com](https://openrcforums.com) - Community working on open models from earlier projects to the present described in the source.
* [Stackexchange Drones](https://drones.stackexchange.com/) - Stack Overflow-style Q&A for drone building.
* [reddit \\motorcopter](https://www.reddit.com/r/Multicopter/) - Multicopter flights, crashes, repairs, and custom modifications.
* [reddit \\RCPlanes](https://www.reddit.com/r/RCPlanes/) - The same range of topics, focused on RC aircraft.
* [OscarLiang.com](https://OscarLiang.com) - Blog covering builds, configurations, and knowledge, described as important in the source.
* [intofpv.com](https://intofpv.com) - Forum with information on FPV-related topics.
* [INAV fixed wing group](https://inavfixedwinggroup.com/) - Forum, blog, and builds for fixed-wing aircraft, particularly with INAV-compatible autopilots.
* [fpv-community.de](https://fpv-community.de) - Germany: Includes DIY builds.
* [RC-Network.de](https://RC-Network.de) - Germany: DIY builds, including boats and cars, with a [Wiki](https://wiki.rc-network.de/wiki/Hauptseite) described as extensive in the source.
* [kopterforum.de](https://kopterforum.de) - Germany: Includes DIY builds.

### Video Channels

* [Painless 360](https://www.youtube.com/c/Painless360) - UK: Builds, modifications, and configuration basics.
* [ArxangelRC](https://www.youtube.com/c/ArxangelRC) - BG: Builds, configurations, and some mapping.
* [Joshua Bardwell](https://www.youtube.com/c/JoshuaBardwell) - US: Copter builds and general tips. Slogan: “You gonna learn something today”.
* [PawelSpechalski](https://www.youtube.com/c/Pawe%C5%82Spychalski) - INAV core team, mainly copters. Slogan: “Happy Flying”.
* [Andrew Netwon](https://www.youtube.com/c/AndrewNewtonAustralia) - AU: Mainly aircraft reviews and building tips.
* [Mr. D - Falling with style](https://www.youtube.com/c/MrDFallingwithstyle) - UK: Darren, INAV.
* [CurryKitten](https://www.youtube.com/c/CurryKitten/) - Reviews, including OpenHD and ExpressLRS.
* [MarioFPV](https://www.youtube.com/channel/UCX2UiZjg485tDoq_Yl4Pysw) - OpenHD, RubyFPV, and WFG-NG experiments.
* [TreeOrbit](https://www.youtube.com/user/montreetormee) - OpenHD and RubyFPV experiments.
* [flitetest.com](https://flitetest.com) - TV show featuring unusual DIY builds.
* [Livyu FPV](https://www.youtube.com/c/LivyuFPV/videos) - Flight footage and repair videos for DIY drone electronics.
* [Adam G does FPV](https://www.youtube.com/c/AdamGdoesFPV) - Builds, modifications, and basics.
* [BLuefish](https://www.youtube.com/channel/UCmULLc8W-knTqiFqJgw3-FA) - Builds, INAV, and long-range flights.
