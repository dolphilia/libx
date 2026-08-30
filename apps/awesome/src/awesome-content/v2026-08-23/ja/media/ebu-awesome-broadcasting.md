---
title: "ebu/awesome-broadcasting"
description: "放送制作に役立つオープンソースのツールと資料を分類した定本スナップショット"
licenseSource: "github-ebu-awesome-broadcasting-readme-md"
---

# 放送関連のAwesomeリスト <a id="awesome-broadcasting-"></a> [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
放送事業者に役立つ優れたオープンソース資料を厳選したリストです。

* [放送関連のAwesomeリスト](#awesome-broadcasting-)
  * [アニメーション・グラフィックス・映像送出](#animation-graphics--video-playout)
  * [時計・スタジオ画面](#clocks--studio-screens)
  * [コーデック](#codecs)
  * [コミュニケーション](#communication)
  * [コンパニオン画面](#companion-screens)
  * [コネクテッドTV](#connected-tvs)
  * [制御システム](#control-systems)
  * [分散メディア処理](#distributed-media-processing)
  * [文書管理](#documentation)
  * [DVB・Wi-Fi](#dvb--wifi)
  * [ハイブリッドラジオ](#hybrid-radio)
  * [LiveIP](#liveip)
  * [メディアプレーヤー](#media-players)
  * [メタデータ](#metadata)
  * [監視・品質管理](#monitoring--quality-control)
  * [マルチメディアコンテンツ処理](#multimedia-content-processing)
  * [ネットワーク・ストレージ試験](#network--storage-testing)
  * [NMOS](#nmos)
  * [ポッドキャスト](#podcasting)
  * [ラジオ制作](#radio-production)
  * [ランダウン自動化](#rundown-automation)
  * [SCTE-35・SCTE-104](#scte-35--scte-104)
  * [ソフトウェア無線](#software-defined-radio)
  * [ストリーミング](#streaming)
  * [字幕](#subtitling)
  * [映像制作](#video-production)
* [資料](#resources)
  * [ブログ](#blogs)
  * [Webサイト](#websites)
* [コントリビューション](#contributing)

## アニメーション・グラフィックス・映像送出 <a id="animation-graphics--video-playout"></a>

* [Aurena](https://github.com/thaytan/aurena) - 分散型メディア再生システム
* [Blender](https://projects.blender.org/blender/blender) [here](https://developer.blender.org/) - 放送用のアニメーション、グラフィックス、映像送出を支援するツールです。
* [Bridge](https://github.com/svt/bridge) - 次世代グラフィックス制御ソフトウェア（拡張対応）
* [caspar-obs-client](https://github.com/michalramus/caspar-obs-client) - CasparCGメディアサーバーとOBS Studioのシームレス統合を可能にするPython GUIアプリケーション
* [CasparCG](http://www.casparcg.com/) - 2006年から24時間連続放送で実証されたプロフェッショナルなグラフィックスおよび動画再生ソフトウェア
* [ffplayout](https://github.com/ffplayout/ffplayout) - RustとFFmpegをベースにしたフォルダまたはプレイリストからの再生
* [Macadam](https://github.com/Streampunk/macadam) [Electron](https://www.electronjs.org/) [Sevruga](https://github.com/Streampunk/sevruga) - 放送用のアニメーション、グラフィックス、映像送出を支援するツールです。
* [Nebula](https://github.com/nebulabroadcast) - メディア資産管理および放送自動化システム
* [NodeCG](https://www.nodecg.dev/) - Node.jsでブラウザ上で生成される放送グラフィックス
* [OGraf](https://github.com/ebu/ograf) - HTMLベースのグラフィックス用オープン仕様、ライブテレビおよび編集プロセスで使用
* [Open Playout Automation](https://github.com/jaskie/PlayoutAutomation) - CasparCGベースのMCR再生システム
* [ossia](https://ossia.io/) - 無料かつオープンソースのインターメディアシーケンサー
* [Sofie - TV Automation](https://github.com/Sofie-Automation/Sofie-TV-automation) - ニュースキャスト向けMOS駆動自動化システム（例：デバイス制御用の多くのライブラリを備えている）
* [SPX - Graphics Controller](https://github.com/TuomoKu/SPX-GC) - ライブ動画制作およびライブストリーム向けグラフィックス制御クライアント
* [StreamShapers - Ferryman](https://github.com/Streamshapers/StreamShapers-Ferryman) - WebアプリでLottie.JSONファイルまたはAdobe AfterEffectsからHTMLグラフィックスを生成
* [Studio TV Player](https://github.com/jaskie/StudioTVPlayer) - SDI、NDIおよびMPEG TS出力に対応するシンプルなTVスタジオプレイヤー

## 時計・スタジオ画面 <a id="clocks--studio-screens"></a>

* [OATIS](https://github.com/jamiehull/OATIS) - サーバーベースのスタジオクロックおよびタリーシステム（メッセージ、物理GPI、OSCトリガーに対応）
* [OnAirScreen](https://github.com/saschaludwig/OnAirScreen) - プロフェッショナルな放送環境向けのクロスプラットフォーム「OnAir Lamp」ソリューション
* [PiClock](https://github.com/simonhyde/PiClock) - カスタマイズ可能なネットワークベースのクロック、オンエア、マイクライブおよびその他のスタジオインジケータ表示
* [PiClock Advanced](https://github.com/ael/piclock_advanced) - PiRSClock-Fullの改良版（レイアウト変更、タイマー追加、ネットワーク機能を追加）
* [PiRSClock-Full](https://github.com/jdgwarren/pirsclockfull) - ラジオスタジオクロック（マイク、電話などスタジオインジケータを備えた）

## コーデック <a id="codecs"></a>

* [FLAC](https://www.xiph.org/flac/) - 無料無損失音声コーディング（一部の放送局が音声交換やストレージに使用）
* [Lame](https://lame.sourceforge.io/) - 高品質なMPEGオーディオレイヤー3（MP3）エンコーダー
* [opencore-amr](https://sourceforge.net/projects/opencore-amr/) - Androidオープンソースプロジェクトから抽出されたオーディオコードック、AACを含む
* [Opus](https://www.opus-codec.org/) - 完全にオープンで、ライセンス料無料であり、非常に柔軟なオーディオコードック
* [Turing Codec](https://github.com/bbc/turingcodec) - H.265/HEVC向けのオープンソースソフトウェアエンコーダー。高速かつ効率的な動画圧縮を実現
* [TwoLame](https://www.twolame.org/) - MPEGオーディオレイヤー2（MP2）エンコーダー

## コミュニケーション <a id="communication"></a>

* [Intercom Manager](https://github.com/Eyevinn/intercom-manager) [Intercom Frontend](https://github.com/Eyevinn/intercom-frontend) - 放送制作チームのインターカム通信を構成するための実装です。
* [DYI intercom](https://github.com/matiaspl/intercom) - 放送制作チームのインターカム通信を構成するための実装です。

## コンパニオン画面 <a id="companion-screens"></a>

* [dial-discovery-ios](https://github.com/bbc/dial-discovery-ios) - iOSプラットフォーム上でDIALプロトコルを用いてデバイスを発見するためのライブラリ
* [dvbcss-synckit-ios](https://github.com/bbc/dvbcss-synckit-ios) - TVと同期してフレーム精度で動作するiOS用のコンパニオンスクリーンアプリケーション向けライブラリ
* [dvbcss-synctiming](https://github.com/BBC/dvbcss-synctiming) - TVまたはコンパニオンが同期されている精度を測定するためのシステム
* [pydvbcss](https://github.com/BBC/pydvbcss) - 同期されたメディア再生に必要なDVBコンパニオンスクリーンおよびストリームプロトコルの実装

## コネクテッドTV <a id="connected-tvs"></a>

* [CPA Authorization Provider](https://github.com/ebu/cpa-auth-provider) [related repos](https://tech.ebu.ch/code) - コネクテッドTV向けアプリケーションや端末連携を支援します。
* [HbbPlayer](https://github.com/Samsung/HbbPlayer) - HbbTVおよびW3C規格に準拠したアプリケーション。URLからメディアを再生可能
* [TAL](http://bbc.github.io/tal/) - TVアプリケーションレイヤー（TAL）は、コネクテッドTVデバイス向けアプリケーションを構築するためのオープンソースライブラリ

## 制御システム <a id="control-systems"></a>

* [BUG](https://bbc.github.io/bug/) - ブロードキャストユニバーサルゲートウェイ - ブラウザから幅広いブロードキャストおよびネットワーク機器を制御
* [Bitfocus Companion](https://github.com/bitfocus/companion) [increasing amount of broadcast equipment](https://bitfocus.io/connections) - 放送設備やショー制御プロトコルを統合・操作するためのツールです。
* [Lawo EmberPlus](https://github.com/Lawo/ember-plus) - Ember Plus - ブロードキャスト制御システムとのインターフェースに用いるオープンプロトコル
* [MIDIMonster](https://github.com/cbdevnet/midimonster) - 一般的なショー制御プロトコル向けの軽量アダプタツール

## 分散メディア処理 <a id="distributed-media-processing"></a>

* [StormCV](https://github.com/sensorstorm/StormCV) - 画像・映像を分散処理するための基盤です。

## 文書管理 <a id="documentation"></a>

* [Kronekeeper](https://github.com/nick-prater/kronekeeper) - 放送設備に関する記録を管理するためのアプリケーションです。

## DVB・Wi-Fi <a id="dvb--wifi"></a>

* [DTT 2 IP](https://github.com/ebu/dtt2ip) - Wi-Fi室内カバー用のブロードキャストIP変換
* [DVB Inspector](https://sourceforge.net/projects/dvbinspector/) - オープンソースDVBアナライザ
* [DVBlast](https://www.videolan.org/projects/dvblast.html) - シンプルかつ強力なMPEG-2/TSデマルチプレックスおよびストリーミングアプリケーション
* [dvbshout](https://github.com/njh/dvbshout) - DVBオーディオをシャウトキャストサーバーまたはRTPストリームに送信するツール
* [Opencaster](https://github.com/aventuri/opencaster) - 無料かつオープンソースのMPEG2トランスポートストリームデータ生成およびパケット操作ツール
* [Project X](https://sourceforge.net/projects/project-x/) - DVBデマルチプレックスツール
* [ts2mpa](https://github.com/njh/ts2mpa) - MPEG Transport Stream（TS）からMPEG Audioを抽出するためのシンプルなツール
* [TSDuck](https://tsduck.github.io/) - MPEG/DVB Transport Streamのテスト、モニタリング、統合、デバッグなどに拡張可能なツールキット
* [WiFiBroadcast](https://befinitiv.wordpress.com/wifibroadcast-analog-like-transmission-of-live-video-data/) - アナログのようなライブビデオデータの送信

## ハイブリッドラジオ <a id="hybrid-radio"></a>

* [RadioDNS for Node.js](https://github.com/bbc/node-radiodns) - node.jsでRadioDNSの解決とサービス検索を行う
* [RadioDNS Manager](https://github.com/ebu/radiodns-manager) - ハイブリッドラジオサービスの管理プラットフォーム。例：RadioVIS、RadioEPGおよびサービスフォロイング
* [RadioTag.js](https://github.com/ebu/radiotag.js) - JavaScriptで構築されたRadioTagクライアントライブラリ
* [RadioVIS Demo](https://github.com/bbc/RadioVisDemo) - Pythonで構築されたRadioVISクライアントアプリケーション
* [RadioVIS Html Player](https://github.com/ebu/radiovis-html5player) - WebSocketを使用したRadioVISプレイヤー
* [RadioVIS Stomp Server](https://github.com/bbc/node-radiovis-stomp-server) - node.jsで書かれたRadioVIS STOMPサーバー

## LiveIP <a id="liveip"></a>
*IP経由の音声・映像伝送とストリーミング*

* [butt](https://danielnoethen.de/) - このツール（butt）を使用した放送は、マルチOS対応の使いやすいストリーミングツール。SHOUTcastおよびIcecastをサポート
* [Cool Mic](https://coolmic.net/) - Android向けのオーディオライブストリーミングIcecastソースクライアントアプリ
* [DarkIce](http://www.darkice.org/) - オーディオインターフェースから録音・エンコードを行い、ストリーミングサーバーに送信するライブオーディオストリーマ
* [EBU LIST](https://github.com/ebu/pi-list) - EBUメンバーがIPベースの設備を実装する際に支援するIPソフトウェアツールキット
* [Icecast](https://icecast.org/) - Ogg（VorbisおよびTheora）、Opus、WebMおよびMP3をサポートするストリーミングメディア（オーディオ／ビデオ）サーバー
* [IRIS Broadcast](https://github.com/IrisBroadcast/irisbroadcast.github.io/) - スウェーデンで設立された、プロフェッショナルラジオ放送向けオープンソースソフトウェアを公開するプロジェクト
* [Kamailio](http://www.kamailio.org/) - SIPサーバー（IP上でオーディオ貢献を実行するEBU ACIPでよく使用）
* [NMOS](#nmos) - AMWAネットワーキングメディアオープン規格およびオープンソース実装・ツールのリスト
* [OpenOB](https://jamesharrison.github.io/openob/) - Opusをベースとしたラジオ貢献リンクおよびスタジオ・トランスミッターリンクのオープンソースプロジェクト
* [PJSIP](https://www.pjsip.org/) - SIP、SDP、RTP、STUN、TURN、ICEを実装するオープンソースマルチメディアライブラリ
* [trx](https://www.pogo.org.uk/~mark/trx/) - Linuxからライブオーディオを放送するためのシンプルなツールセット
* [VideoIPath-Automation-Tool](https://github.com/SWR-MoIP/VideoIPath-Automation-Tool) - VideoIPathの設定ワークフローを自動化するためのPythonパッケージ

## メディアプレーヤー <a id="media-players"></a>

* [Dash.js](https://github.com/ebu/dash.js) - JavaScriptおよび準拠ブラウザを用いたMPEG DASHの再生に向けたリファレンスクライアント実装
* [GPAC](https://gpac.io/) - マルチメディアプレイヤー、パッケージングツールおよびその他のツール
* [IDJC](https://idjc.sourceforge.io/) - GTK+によるShoutcast/Icecastクライアント。主に2つのメディアプレイヤーを備えている。
* [Kodi](https://github.com/xbmc/xbmc) - デジタルメディア向けのソフトウェアメディアプレイヤーおよびエンターテインメントセンター
* [Media4DPlayer](https://github.com/ebu/media4Dplayer) - アクセシビリティに焦点を当てたHTML5プレイヤー
* [MPD](https://www.musicpd.org/) - 音楽再生に向けた柔軟で強力なサーバーサイドアプリケーション
* [mpg123](https://www.mpg123.de/) - 高速なコンソールMPEGオーディオプレイヤーおよびデコーダーライブラリ
* [Mixxx](https://mixxx.org/) - 無料でオープンソースのDJソフトウェア
* [Peaks.js](https://codeberg.org/chrisn/peaks.js) - ブラウザベースのオーディオ波形可視化
* [rx-player](https://github.com/canalplus/rx-player) - MPEG-DASHおよびSmoothStreamingをサポートするHTML5/JavaScript動画プレイヤー
* [VLC](https://www.vlc.org) - シンプルで高速かつ強力なメディアプレイヤー

## メタデータ <a id="metadata"></a>

* [BMXlib](https://github.com/ebu/bmx) - 放送メディアファイルの読み書きに必要なライブラリおよびユーティリティ。主にMXFファイルフォーマットをサポート。
* [EBUCore](https://github.com/ebu/ebucore) [EBUCore schema](https://tech.ebu.ch/docs/tech/tech3293.pdf) - 放送メディアのメタデータ、MXF、AAF、SDP、補助データを扱います。
* [jebu-core](https://github.com/mikrosimage/jebu-core) [EBU Tech 3293](https://tech.ebu.ch/publications/tech3293) [Audio Definition Model](https://tech.ebu.ch/publications/tech3364) - 放送メディアのメタデータ、MXF、AAF、SDP、補助データを扱います。
* [libadm](https://github.com/ebu/libadm) - オーディオ定義モデル（ITU-R BS.2-2076）を扱うC++11ライブラリ
* [libklvanc](https://github.com/stoth68000/libklvanc) - SDIおよびSMPTE ST 2110-40（CEA-708、AFD、SCTE-104など）から補助データを抽出するCライブラリ
* [MAJ API](https://github.com/AMWA-TV/maj) - MXFおよびAAFファイルの読み書きに必要な純粋Javaライブラリ
* [SDPoker](https://github.com/AMWA-TV/sdpoker) - SMPTE ST2110 SDPファイルのテスト用CLIツールおよびライブラリ
* [TV-Anytime](https://github.com/ebu/tvanytime) - TV-AnytimeスキーマのGitHubメンテナンスページ

## 監視・品質管理 <a id="monitoring--quality-control"></a>

* [a_Multiview](https://github.com/Bencosterton/a_MultiView) - HLSおよびYouTubeリンクを対象としたウェブベースのマルチビュー
* [BeaqleJS](https://github.com/HSU-ANT/beaqlejs) - 主観的なオーディオ品質評価に向けたブラウザベースの聴取テストを作成するためのフレームワーク
* [Jack Meter](https://github.com/njh/jackmeter) - JACK用のテキストコンソールベースのDPM（デジタルピークメーター）
* [Jmeters](http://kokkinizita.linuxaudio.org/linuxaudio/downloads/index.html) [EBU R 128](https://tech.ebu.ch/publications/r128) - 音声・映像・伝送の監視、測定、品質評価を行うためのツールです。
* [LTC-tools](https://github.com/x42/ltc-tools) - 線形タイムコード（LTC）を扱い、MIDIタイムコード（MTC）に変換するためのツールのコレクション
* [MediaConch](https://mediaarea.net/MediaConch) - Matroska、FFV1、およびPCMに対する実装チェック、ポリシーチェック、およびレポートツール
* [MediaInfo](https://mediaarea.net/en/MediaInfo) - 動画およびオーディオファイルの最も関連性の高い技術データおよびタグデータを統一的に表示するツール
* [MXF Inspect](https://github.com/Myriadbits/MXFInspect) - MXF（Material eXchange Format）ファイルの内部構造を表示するWindows用ツール
* [Pi Audio Monitor](https://github.com/martim01/pam) - ラズパイ用のオーディオモニタリング、S/PDIF、AES3、AES6、LivewireおよびRavennaに対応
* [Photon](https://github.com/Netflix/photon) - SMPTE相互運用マスター形式（IMF）標準の実装
* [QCTools](https://github.com/bavc/qctools) - 動画保存用の品質管理ツール、デジタル化された動画ファイルの分析に使用
* [Rotter](https://github.com/njh/rotter) - JACK用の放送記録／オーディオログゲージ
* [silan](https://github.com/x42/silan) - オーディオファイルの静音分析
* [SilentJack](https://github.com/njh/silentjack) - JACK用の死空／静音検出ツール
* [Sonic Visualiser](https://www.sonicvisualiser.org/) - 音楽オーディオファイルの内容を閲覧および分析するアプリケーション
* [VMAF](https://github.com/Netflix/vmaf) - 多手法融合に基づく視覚的動画品質評価
* [Wisual](https://github.com/MarcAntoine-Arnaud/wisual) - PSNR、SSIM、VQMなどに対応する視覚品質評価ウェブサービス

## マルチメディアコンテンツ処理 <a id="multimedia-content-processing"></a>

* [AvTranscoder](https://github.com/avTranscoder/avTranscoder) - FFmpeg/LibAVに基づくハイレベルAPIによるメディア再包装または変換、JavaおよびPython向けのバインディングを提供
* [Beam Coder](https://github.com/Streampunk/beamcoder) - Node.jsによるFFmpegのネイティブバインディング、プロミスおよびストリームを介した非同期処理に対応
* [Bento4](https://github.com/axiomatic-systems/Bento4) - フル機能のMP4形式およびMPEG DASH C++クラスライブラリとツール
* [Brave](https://github.com/bbc/brave) - 基本的なリアルタイムAVエディタ - クラウド上でライブオーディオおよび動画ストリームのプレビュー、ミックス、ルーティングを可能にする
* [Codem-isoboxer](https://github.com/Dash-Industry-Forum/codem-isoboxer) - 小さなブラウザベースのMPEG-4（ISOBMFF）パーサー
* [Dynamorse](https://github.com/Streampunk/node-red-contrib-dynamorse-core) - ITのスイス軍刀 - Node-REDメディアパイプラインビルダー、プロフェッショナルなメディア処理ノードを追加
* [EBU ADM Renderer](https://github.com/ebu/ebu_adm_renderer) [EBU Tech 3388](https://tech.ebu.ch/publications/tech3388) - 音声・映像の編集、変換、配信、信号処理を行うためのライブラリまたはアプリケーションです。
* [FFmbc](https://github.com/bcoudurier/FFmbc) - FFmpegを放送およびプロ用途向けにカスタマイズしたもの
* [FFmpeg](https://ffmpeg.org) - マルチプラットフォーム対応の音声・動画の録画、変換、配信ソリューション。SMPTE ST 2110をサポート。
* [Flowblade](https://github.com/jliljebl/flowblade) - マルチトラック非線形動画編集ソフト
* [GStreamer](https://gstreamer.freedesktop.org/) - メディア処理コンポーネントのグラフ構築用のライブラリ
* [Kelvinadon](https://github.com/Streampunk/kelvinadon) - Node.JSによる純粋JavaScriptモジュール。MXFファイルをJSONにストリーミングするためのモジュール。
* [KFR](https://www.kfrlib.com/) - 高速かつ現代的なC++DSPフレームワーク。DFT/FFT、音声リサンプリング、FIR/IIR、ビクワッド、EBU R 128。
* [L-SMASH](https://github.com/l-smash/l-smash/) - 厳密に仕様に準拠したISOBMFFライブラリ。DASHのマルチプレクシングを完全にサポート。
* [LibAV](https://github.com/libav/libav) - オープンソースの音声・動画処理ツール
* [libbw64](https://github.com/ebu/libbw64) - ヘッダーのみの放送用Wave 64（ITU-R BS.20808）C++11ライブラリ
* [libear](https://github.com/ebu/libear) - Recommendation ITU-R BS.2127に従ってADMコンテンツをレンダリングするC++11ライブラリ
* [Libebur128](https://github.com/jiixyj/libebur128) - EBU R 108による音量標準化を実装するライブラリ
* [Loudness Validator](https://github.com/mikrosimage/loudness_validator) - 音量の分析、可視化、補正を行うアプリケーションセット
* [MP4Box.js](https://github.com/gpac/mp4box.js) - ブラウザ（およびNodeJS）でMP4ファイルを処理するJavaScriptライブラリ
* [MXFLib](https://sourceforge.net/projects/mxflib/) - マルチプラットフォーム対応のC++ライブラリ。MXFファイルの読み書きを行う。
* [OBS-Studio](https://github.com/obsproject/obs-studio) - ライブ配信およびスクリーン記録用ソフトウェア
* [Open Broadcast Encoder](https://github.com/ob-encoder) - オープンソースコンポーネントから構成された放送エンコーダー
* [rgain3](https://github.com/chaudum/rgain3) - リプレイゲインの読み書きおよび計算を行うツールとPython3ライブラリ（Felix Krullによるオリジナルのフォーク）
* [rtmp](https://github.com/c-bata/rtmp) - GoによるAdobeのRTMP 1.0プロトコルのサーバ実装
* [Snowmix](https://sourceforge.net/projects/snowmix/) - ライブ動画ミキサー
* [SoX](https://sourceforge.net/projects/sox/) - 音声処理ソフトウェアのスイス軍刀
* [SVT Encore](https://github.com/svt/encore) - セルフホスト型の動画変換プラットフォーム、FFmpegを基盤として構成されたもの。
* [TuttleOFX](https://github.com/tuttleofx/TuttleOFX) - OpenFXプラグイン標準に基づくオープンソース画像処理フレームワーク。
* [UPipe](https://github.com/cmassiot/upipe/) - 主にマルチメディアプレイヤー、変換器、ストリーマーの核として設計されたもの。
* [VideoContext](https://github.com/bbc/videocontext) - HTML5/WebGLを用いた実験的なインタラクティブかつレスポンシブなウェブ動画作成ライブラリ。
* [Voctomix](https://github.com/voc/voctomix) - PythonおよびGStreamerを基盤としたカスタマイズ可能な会議録音・ミックス・ストリーミングソフトウェア。

## ネットワーク・ストレージ試験 <a id="network--storage-testing"></a>

* [BBC Media Storage Meter](https://sourceforge.net/projects/msmeter/) - ネットワーク接続型（プロフェッショナルメディア）ストレージのテスト用アプリケーション。
* [Fio](https://github.com/axboe/fio) - フレキシブルなI/Oテストツール
* [iPerf3](https://iperf.fr/) - TCP、UDPおよびSCTPネットワーク帯域測定ツール。
* [SMPTE 2110-20 Analyzer](https://github.com/ebu/smpte2110-analyzer) - SMPTE ST 2110に従って生成されたネットワークパケットを分析する分析ツール。
* [Wireshark dissector for TSL UMD protocol V3.1, V4](https://github.com/roddypratt/tslumd-wireshark) - TSL UMD（under-monitor display）プロトコルV3.1およびV4向けの分析ツール。
* [Wireshark dissectors for Video Routers](https://github.com/roddypratt/router_dissectors) - さまざまな動画ルーター／マトリクスプロトコル向けの分析ツール。
* [Examples of SMPTE ST 2110 pcap files](https://github.com/NEOAdvancedTechnology/ST2110_pcap_zoo)

## NMOS <a id="nmos"></a>

[Networked Media Open Specifications](https://specs.amwa.tv/nmos/)自体もオープンソースです。

* [AMWA NMOS Testing Tool](https://specs.amwa.tv/nmos-testing/) [JT-NM Tested](https://www.jt-nm.org/jt-nm-tested) - AMWA NMOS仕様のノード、レジストリ、制御、試験を実装するための資料またはツールです。
* [BBC NMOS Joint Reference Implementation](https://github.com/bbc/nmos-joint-ri) - Vagrantによるプロビジョニングで、IS-04/IS-05ノード、IS-04リジストリ、BCP-003-02認証サーバー、およびNMOSテストツールの4つの仮想マシンを構築するもの。
* [DELTACAST IP Virtual Card NMOS samples](https://github.com/deltacasttv/nmos-ipvc-samples) [nmos-cpp](https://github.com/sony/nmos-cpp) - AMWA NMOS仕様のノード、レジストリ、制御、試験を実装するための資料またはツールです。
* [Easy-NMOS](https://github.com/rhastie/easy-nmos) - 最小限のインストール手順でシンプルなNMOS環境を立ち上げられるスタートキット。このキットは、NMOSリジストリ、仮想NMOSノード、AMWA NMOSテストツールの3つのDockerコンテナから構成されている。
* [nmos-cpp](https://github.com/sony/nmos-cpp) - AMWA Networked Media Open SpecificationsのC++実装、NMOSリジストリとNMOSノードの構築ツールキットおよび例を含むもの。
* [nmos-device-control-mock](https://github.com/AMWA-TV/nmos-device-control-mock) - NMOSコントロール＆モニタリングセット（IS-12、BCP-008-01、BCP-008-02）をTypescriptで実装した仮想デバイス。
* [nmos-js](https://github.com/sony/nmos-js) - シンプルなブラウザベースのNMOSクライアント／コントローラー、IS-04リジストリブラウザおよびIS-05接続管理を備えたもの。
* [NVIDIA NMOS Docker](https://hub.docker.com/r/rhastie/nmos-cpp) - リジストリおよびコントローラーを含むDockerコンテナ、IS-04/05/08/07/09、BCP-003-01。
* [NVIDIA NMOS Library](https://github.com/NVIDIA/nvnmos) - (NvNmos) - NMOSノードをアプリケーションに追加するためのシンプルなC/C++ライブラリ。IS-04、IS-05、BCP-002-01、BCP-002-02、BCP-004-01などに対応。

## ポッドキャスト <a id="podcasting"></a>

* [AntennaPod](https://github.com/AntennaPod/AntennaPod) [antennapod.org](https://antennapod.org/) - ポッドキャストの再生、配信、公開、制作を支援するツールです。
* [Anytime Podcast Player](https://github.com/amugofjava/anytime_podcast_player) [anytimeplayer.app](https://anytimeplayer.app/) - ポッドキャストの再生、配信、公開、制作を支援するツールです。
* [Castopod](https://github.com/ad-aures/castopod) [castopod.org](https://castopod.org/) - ポッドキャストの再生、配信、公開、制作を支援するツールです。
* [gPodder](https://gpodder.github.io/) - メディアアグレゲーターおよびポッドキャストクライアント。
* [Podlove Publisher](https://github.com/podlove/podlove-publisher) - WordPress向けポッドキャストパブリッシャー。
* [Podlove Web Player](https://github.com/podlove/podlove-ui) - ポッドキャスト最適化された、HTML5ベースの動画および音声プレイヤー
* [Ultraschall](https://github.com/Ultraschall) [Reaper](https://www.reaper.fm/) [ultraschall.fm](https://ultraschall.fm/) - ポッドキャストの再生、配信、公開、制作を支援するツールです。

## ラジオ制作 <a id="radio-production"></a>

* [Airtime](https://github.com/sourcefabric/airtime) - ウェブベースのスケジュールを用いたリモート放送自動化用ラジオ管理アプリケーション
* [Ardour](https://ardour.org/) - デジタルオーディオワークステーション
* [Audacity](https://www.audacityteam.org/) - 音声の録音および編集に用いるクロスプラットフォームソフトウェア
* [AzuraCast](https://github.com/AzuraCast/AzuraCast) - セルフホスト型ウェブラジオ管理ツールセット
* [LibreTime](https://libretime.org/) - ラジオ放送および自動化プラットフォーム（Airtimeのフォーク）
* [Liquidsoap](https://github.com/savonet/liquidsoap) [documentation](https://www.liquidsoap.info/doc.html) - ラジオ番組の録音、編集、編成、送出を支援する制作ツールです。
* [OpenBroadcaster](https://www.openbroadcaster.com/) [Server and Player code here](https://github.com/openbroadcaster) - ラジオ番組の録音、編集、編成、送出を支援する制作ツールです。
* [RAAR](https://github.com/radiorabe/raar) - オーディオアーカイブの管理および閲覧を行うRubyアプリケーション
* [Rivendell](https://github.com/ElvishArtisan/rivendell) - 多数の言語に翻訳され、世界中で利用されている完全なラジオ放送自動化ソリューション

## ランダウン自動化 <a id="rundown-automation"></a>

* [OnTime](https://github.com/cpvalente/ontime) - ライブイベント向けウェブベースのタイムキーリングシステム（放送時計ビューを備える）
* [SuperConductor](https://github.com/SuperFlyTV/SuperConductor) - CasparCGサーバー、BMD ATEM、OBS Studio、vMix、OSC対応デバイス、HTTP（REST）対応デバイスなどへのランダウン/プレイアウト制御ソフトウェア

## SCTE-35・SCTE-104 <a id="scte-35--scte-104"></a>

* [threefive](https://github.com/superkabuki/threefive_is_scte35) - MPEGTS用のSCTE-35パーサーおよびエンコーダー
* [wireshark-scte](https://github.com/m1tk4/wireshark-scte) - Wireshark用のSCTE--104プロトコルディスセクタ
* [x9k3](https://github.com/superkabuki/x9k3) - アダプティブビットレートHLSセグメント生成およびSCTE-35インジェクタ

## ソフトウェア無線 <a id="software-defined-radio"></a>

* [GNU Radio](https://www.gnuradio.org/) - ソフトウェアラジオを実装するための信号処理ブロックを提供するソフトウェア開発キット
* [Gqrx SDR](https://www.gqrx.dk/) - オープンソースソフトウェア定義ラジオ受信機（SDR）
* [ODR-mmbTools](https://www.opendigitalradio.org) - CRC-mmbToolsのフォーク。ライブ放送、DAB+、関連データ、分散インフラ、SFNを追加
* [rtl-sdr](https://osmocom.org/projects/rtl-sdr/wiki/rtl-sdr) - Realtek RTL2832ベースのDVBドングルをSDR受信機に変換
* [welle.io](https://www.welle.io/) - DABおよびDAB+をサポートするオープンソースソフトウェア定義ラジオ（SDR）（airspyおよびrtlsdrに対応）

## ストリーミング <a id="streaming"></a>

* [Owncast](https://github.com/owncast/owncast) https://owncast.online/ - 自己ホストまたは分散型の映像ストリーミング基盤です。
* [PeerTube](https://github.com/Chocobozzz/PeerTube) https://joinpeertube.org/ - 自己ホストまたは分散型の映像ストリーミング基盤です。

## 字幕 <a id="subtitling"></a>

* [CCExtractor](https://ccextractor.sourceforge.net/about-ccextractor.html) - 動画ファイルを分析し、独立した字幕ファイルを生成するツール
* [EBU-TT-D Subtitling within dash.js](https://github.com/ebu/dash.js/tree/ebu-subtitling-dev) [dash.js](https://github.com/ebu/dash.js) - 字幕の抽出、生成、検証、変換、レンダリングを支援します。
* [EBU-TT-D W3C XML Schema](https://github.com/ebu/ebu-tt-d-xsd/) - EBU-TT-D XMLスキーマ（EBU Tech 3380の実装を支援）
* [EBU-TT Live Interoperability Toolkit](https://github.com/ebu/ebu-tt-live-toolkit) [EBU-TT Live](https://tech.ebu.ch/publications/tech3370) - 字幕の抽出、生成、検証、変換、レンダリングを支援します。
* [GStreamer TTML subtitling package](https://github.com/BBC-archive/gst-ttml-subtitles) - GStreamerパイプラインでEBU-TT-D（TTML）字幕を解析・表示するための手段
* [imscJS](https://github.com/sandflow/imscJS) - IMSC1テキストおよび画像プロファイルドキュメントをHTML5に変換表示するJavaScriptライブラリ
* [IRT EBU-TT-D Application Samples](https://github.com/IRT-Open-Source/irt-ebu-tt-d-application-samples) - EBU-TT-Dサンプルファイル、PNG画像およびmp4動画を用いた表示参照資料
* [Subtitle Edit](https://www.nikse.dk/SubtitleEdit) - 字幕の編集ツール
* [Subtitling Conversion Framework (SCF)](https://github.com/Irt-Open-Source/scf) - 字幕フォーマット変換用モジュール（EBU STLおよびEBU-TTファイルを含む）
* [Timed Text Toolkit (ttt)](https://github.com/skynav/ttt) - W3Cのタイムドキュメントマークアップ言語（TTML）をサポート・使用するツール
* [ttconv](https://github.com/sandflow/ttconv) - 字幕フォーマット変換ライブラリおよびコマンドラインツール。STL、SRT、TTML、SCC、TT-MLおよびWebVTTファイル間の変換を行う

## 映像制作 <a id="video-production"></a>

* [ATEM Tally Light with ESP8266](https://github.com/AronHetLam/ATEM_tally_light_with_ESP8266) - ESP8266 WiFiモジュールを使用したATEMスイッチャー向けのワイヤレスタリーライト、無制限のタリーユニットをサポート
* [AutoMix](https://github.com/InsanityRadio/automix/) - 視覚化されたラジオ向けのATEMビジュアルミックス向けウェブベースコントロール表面、自動カメラ切り替えを備えたもの
* [MOS-connection](https://github.com/Sofie-Automation/sofie-mos-connection) - MOSデバイスまたはNRCSとしてMOSメッセージングおよび接続を行うJavaScriptライブラリ
* [obs-shotlister](https://github.com/michalramus/obs-shotlister) - OBS Studioとの統合、LANウェブモニタリング、OSC対応のライブプロダクション用カメラショットキュー管理ツール
* [Open Lighting Architecture (OLA)](https://www.openlighting.org/ola/) - 照明業界向けの旅行アダプタ、DMX-512、IPおよびUSBを接続するもの
* [Q Light Controller+ (QLC+)](https://www.qlcplus.org/) - DMXまたはアナログ照明システム（ヘッド、ディマーなど）をマルチプラットフォームで制御するツール
* [QPrompt Teleprompter App](https://qprompt.app) - スタジオ用、タブレット用、ウェブカメラ、スマホ用の統合型テレプロモーターソフトウェア
* [TallyArbiter](https://tallyarbiter.com/) - スマホまたは低コストハードウェアを介して任意のカメラに接続可能なタリーフェースおよびタリーライト
* [TallyLights](https://github.com/michalramus/TallyLights) - TSL 3.1および5.0プロトコルをサポートするDIYタリーライト、WeMos D1 Miniマイコンをベースにしたもの
* [vMix-EmberPlus](https://github.com/mattlamb99/vMix-EmberPlus) - vMixとEmberPlusのゲートウェイ。LawoのVSMやEVSのCerebrumなどの任意のEmberPlusブロードキャストコントロールデバイスからvMixを制御可能
* [wifi-tally](https://github.com/wifi-tally/wifi-tally) - NodeMCU/ESP8266をベースにした安価なWiFi対応タリーライトシステム、複数の動画ミックスをサポート

# 資料 <a id="resources"></a>
放送技術の技能と知識を深めるための書籍、Webサイト、記事などの資料です。

## ブログ <a id="blogs"></a>

* [BBC News Labs](https://github.com/BBC-News-Labs) - BBC News Labsのオープンソースプロジェクト
* [BBC R&D](https://www.bbc.co.uk/rd) - BBC研究開発部門。週次ノートを確認
* [3D CineCast](http://3dcinecast.blogspot.com/) - 新しいメディア技術に関するキュレーション
* [Canal+](https://developers.canal-plus.com/) - CANAL+ オープンソースコミュニティ
* [IRT Lab](https://web.archive.org/web/20210830075332/https://lab.irt.de/) - すべてのデジタルオーディオビジュアルメディア技術に関する開発とデモを紹介するIRTブログ
* [The Netflix Tech Blog](https://netflixtechblog.com/) - Netflixのテクノロジーおよびテクノロジー関連の問題に焦点を当てたブログ

## Webサイト <a id="websites"></a>

# コントリビューション <a id="contributing"></a>
詳細は[CONTRIBUTING](https://github.com/ebu/awesome-broadcasting/blob/master/CONTRIBUTING.md)を参照してください。
