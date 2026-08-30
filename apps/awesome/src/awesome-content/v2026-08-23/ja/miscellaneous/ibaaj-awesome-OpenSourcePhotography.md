---
title: "ibaaj/awesome-OpenSourcePhotography"
description: "写真・動画向けの自由・オープンソースソフトウェア、ライブラリ、機材連携、制作資料をまとめた定本スナップショット"
licenseSource: "github-ibaaj-awesome-OpenSourcePhotography-readme-md"
---

# オープンソース写真のAwesomeリスト <a id="awesome-opensourcephotography"></a>
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

写真向けの優れた自由・オープンソースソフトウェアとライブラリ、および動画用ツールのリストです。さらに多くの素晴らしいリストは[awesome](https://github.com/sindresorhus/awesome)をご覧ください。


- [一般](#general)
- [カメラファームウェア改造](#camera-firmware-mods)
- [ライブラリ](#libraries)
	- [Canon](#canon)
	- [GoPro](#gopro)
	- [Sony](#sony)
- [ユーティリティ](#utilities)
- [アナログ写真](#analogue-photography)
- [RAW画像現像](#raw-image-developers)
- [HDR専用ソフトウェア](#hdr-specific-software)
- [パノラマ合成](#panorama-stitching)
- [写真整理](#photo-organizers)
- [EXIF編集](#exif-editors)
- [写真ダウンロード](#photo-downloaders)
- [カメラテザー撮影](#camera-tetherers)
- [モニター色補正](#monitor-color-correction)
- [360度画像](#360-images)
- [代替画像ビューアー](#alternative-image-viewers)
- [便利なGIMP改造・スクリプト](#useful-gimp-mods-or-scripts)
- [コミュニティ](#communities)
- [素材](#resources)
- [動画](#video)
	- [一般ツール](#general-tools)
	- [コンポジットソフトウェア](#compositing-software)
	- [動画ライブラリ](#video-libraries)
- [スクリプト](#scripts)
	- [動画からパノラマへ](#video-to-panorama)

## 一般 <a id="general"></a>

- [GIMP](http://www.gimp.org/) - 画像操作の万能ツール。
- [PhotoFlow](https://github.com/aferrero2707/PhotoFlow) - RAW画像現像を含む、非破壊方式の写真レタッチプログラム。
- [ImageMagick](http://www.imagemagick.org/) - 画像の変更・操作に使うコマンドラインユーティリティ群。
- [GraphicsMagick](http://www.graphicsmagick.org/) - 通常はImageMagickより高速です。

## カメラファームウェア改造 <a id="camera-firmware-mods"></a>

- [CHDK](http://chdk.wikia.com/wiki/CHDK) - Canonカメラ向けのCanon Hack Development Kit。
- [Magic Lantern](http://magiclantern.fm/) - Canon DSLRカメラの機能を拡張するソフトウェア。
- [Autoexec Hack](https://github.com/KonradIT/autoexechack) - GoProカメラ向けハック集。
- [PTool Firmware Manipulation Tool](http://www.gh1-hack.info/) - Panasonic製カメラの動画記録パラメーターを変更。
- [Nikon Hacker](https://nikonhacker.com/wiki/Main_Page) - Nikonカメラ向けのNikon PatchとNikon Emulatorという2つのソフトウェア。
- [Xiaomi Yi Autoexec](https://github.com/PJanisio/Xiaomi_Yi_autoexec) - Xiaomi Yiカメラ向けautoexecスクリプトと改造のコレクション。

## ライブラリ <a id="libraries"></a>

- [LibGphoto2](https://github.com/gphoto/libgphoto2) - デジタルカメラへのアクセスと遠隔操作に使うC API。Java、Python、C#など多数のバインディングがあります。

### Canon <a id="canon"></a>

- [OfxCanon](https://github.com/roxlu/ofxCanon) - Canon EDSK向けのOpenFrameworksアドオン。
- [Edsdk4j](https://github.com/kritzikratzi/edsdk4j) - Java向けCanon SDK。

### GoPro <a id="gopro"></a>
- [GoPro](https://github.com/kschzt/gopro) - Node.jsからGoPro Hero 3カメラを操作するAPI。
- [GoPro](https://github.com/DenisCarriere/gopro) - GoPro Hero 4向けPython API。
- [GoPro](https://github.com/joshvillbrandt/goprohero) - HTTP経由でGoPro HERO3、HERO3+、HERO4カメラと通信できるPythonライブラリとCLI。
- [GoPro.Hero](https://github.com/r1pper/GoPro.Hero) - GoPro HEROへアクセスして操作する軽量なC#ライブラリ。

### Sony <a id="sony"></a>

- [SonyPy](https://github.com/storborg/sonypy) - Sony Camera Remote API向けPythonモジュール。

## ユーティリティ <a id="utilities"></a>

- [Timelapse-sony](https://github.com/ThibaudM/timelapse-sony) - 「Ctrl with Smartphone」モードまたはNFC接続でタイムラプスを作成するAndroidアプリ。
- [Remoteyourcam-usb](https://github.com/crazymaik/remoteyourcam-usb) - Android端末からUSB経由でCanonまたはNikonのDSLRカメラを操作。
- [digiCamControl](https://github.com/dukus/digiCamControl) - DSLRカメラを遠隔操作するオープンソースソフトウェア。

## アナログ写真 <a id="analogue-photography"></a>

- [Digitaltruth](https://www.digitaltruth.com/devchart.php) - フィルム現像チャート。

## RAW画像現像 <a id="raw-image-developers"></a>

- [Darktable](http://www.darktable.org/) - オープンソースの写真ワークフローアプリケーション兼RAW現像ソフト。
- [RawTherapee](http://rawtherapee.com/) - クロスプラットフォームのRAW画像処理プログラム。
- [Photivo](http://photivo.org/photivo/start?redirect=1) - RAW画像とビットマップ画像を16ビット精度で扱うマルチプラットフォーム写真処理ソフト。
- [Raw Studio](https://github.com/rawstudio/rawstudio) - デジタルカメラのRAW画像を読み込み、操作します。
- [UFRaw](http://ufraw.sourceforge.net/) - デジタルカメラのRAW画像を読み込み、操作するユーティリティ。
- [DCRaw](http://www.cybercom.net/~dcoffin/dcraw/) - Linuxでデジタル写真のRAWデータをデコード。
- [Lightzone](http://lightzoneproject.org/) - Windows、Mac、Linux向けのオープンソース・デジタル暗室ソフトウェア。
- [Fotoxx](http://www.kornelix.com/fotoxx.html) - 写真やそのほかの画像を編集するLinuxプログラム。

## HDR専用ソフトウェア <a id="hdr-specific-software"></a>
- [Luminance](https://github.com/LuminanceHDR/LuminanceHDR) - HDR画像制作の完全なワークフロー。
- [QPSFTMO](http://theplaceofdeadroads.blogspot.com/2006/07/qpfstmo-hdr-tone-mapping-gui-for-linux_04.html) - Linux向けHDRトーンマッピングGUI。
- [PFS Tools](http://pfstools.sourceforge.net/) - HDR画像と動画フレームの読み込み、書き込み、操作に使うコマンドラインプログラム群。

## パノラマ合成 <a id="panorama-stitching"></a>

- [Hugin](http://hugin.sourceforge.net/) - 扱いやすいクロスプラットフォームのパノラマ画像ツールチェーン。
- [Panorama Tools](http://www.panoramatools.com/) - 複数の素材画像を再投影・合成し、さまざまな没入型パノラマを作るフレームワーク。

## 写真整理 <a id="photo-organizers"></a>

- [Shotwell](http://yorba.org/shotwell/) - GNOME 3向け写真管理ソフト。
- [DigiKam/ShowFoto](http://www.digikam.org/drupal/about?q=about/overview) - KDE／GNOMEデスクトップ向けのオープンソース写真管理ソフト。
- [GPhoto](http://www.gphoto.org/) - デジタルカメラから写真をダウンロードできるプログラムとライブラリのフレームワーク。
- [Lychee](http://lychee.electerious.com/) - 自分のサーバーで実行し、写真を管理・共有できる、見た目がよく扱いやすい写真管理システム。
- [Simple Gallery](https://github.com/SimpleMobileTools/Simple-Gallery/) - 標準Androidギャラリーに似た写真・動画ビューアー。ファイルのコピー、移動、名前変更、削除、共有に対応します。
- [Leaf Pic](https://github.com/HoraApps/LeafPic/) - Material Designを採用したAndroid向け代替ギャラリー。
- [A Photo Manager](https://github.com/k3b/APhotoManager/) - Android上のローカル写真を管理します。ギャラリー、フォトマップによるジオタグ、タグ、検索、並べ替え、表示、コピー、削除、送信などに対応します。
- [PhotoPrism](https://photoprism.org/) - 個人の写真コレクションを閲覧、整理、共有するためのサーバーベースアプリケーション。

## EXIF編集 <a id="exif-editors"></a>
- [ExifTool](http://owl.phy.queensu.ca/~phil/exiftool/) - 画像、音声、動画のメタデータを読み込み、書き込み、操作するプログラム。
- [Exiv2](https://github.com/Exiv2/exiv2/)  - Exif、IPTC、XMP、ICC画像メタデータの読み込み、書き込み、削除、変更に使うC++ライブラリとコマンドラインユーティリティ。

## 写真ダウンロード <a id="photo-downloaders"></a>

- [Rapid Photo Downloader](http://www.damonlynch.net/rapid/index.html) - Linuxデスクトップ向けの写真・動画ダウンローダー。

## カメラテザー撮影 <a id="camera-tetherers"></a>

- [Entangle](http://entangle-photo.org/) - コンピューターから完全に制御したデジタルカメラで写真を撮影するGUI。

## モニター色補正 <a id="monitor-color-correction"></a>

- [Hughski](http://www.hughski.com/index.html)
- [DisplayCal](http://displaycal.net/) - オープンソースのディスプレイ較正・特性評価ソフトウェア。

## 360度画像 <a id="360-images"></a>

- [Open360viewer](https://github.com/TheGreyDiamond/open360viewer) - オープンソースの360度メディアビューアー。


## 代替画像ビューアー <a id="alternative-image-viewers"></a>

- [Geeqie](http://geeqie.sourceforge.net/) - Unix系OS向けの画像ビューアー兼画像整理プログラム。
- [FEH](http://feh.finalrewind.org/) - X11画像ビューアー。

## 便利なGIMP改造・スクリプト <a id="useful-gimp-mods-or-scripts"></a>

- [GIMP Plugin Registry](http://registry.gimp.org/)
- [Cinepaint](http://sourceforge.net/projects/cinepaint/files/CinePaint/) - GIMPを基にした、映画のビットマップフレームを描画・レタッチするプログラム。

## コミュニティ <a id="communities"></a>
- [Flickr Open Source Photography Group](https://www.flickr.com/groups/83823859@N00/)
- [/r/FOSSPhotography](http://reddit.com/r/fossphotography) - Reddit上の写真向け自由・オープンソースソフトウェアのコミュニティ。
- [Open Source Photography Community on Google+](https://plus.google.com/u/0/communities/110647644928874455108)
- [Open Source Photography Group on Facebook](https://www.facebook.com/groups/326042310770868/)
- [Open Source Photography Sub on Reddit](https://www.reddit.com/r/opensourcephotography)
- [Open Source Photography Group on 500px](https://500px.com/groups/open-source-photography)
- [PIXLS.US](https://pixls.us) - 自由ソフトウェアのツールを使った高品質な写真のチュートリアル、ワークフロー、作品紹介に特化したコミュニティ。

## 素材 <a id="resources"></a>
- [Unsplash.com](https://unsplash.com/) - Unsplash Licenseで[ライセンス](https://medium.com/unsplash/the-unsplash-license-f6fb7de5c95a)された、自由に利用できる高解像度写真（[CC0から変更](https://medium.com/unsplash/why-we-moved-from-the-creative-commons-zero-license-to-the-unsplash-license-598f76386489)）。
- [Pexels.com](https://pexels.com/) - Creative Commons Zero（CC0）で[ライセンス](https://www.pexels.com/photo-license/)された、ロイヤリティフリーの高解像度ストック写真。
- [Pixabay.com](https://pixabay.com/) - Creative Commons Zero（CC0）で[ライセンス](https://pixabay.com/en/service/faq/)された、ロイヤリティフリーのストック写真と動画。
- [Shutterography.com](https://www.shutterography.com) - 無料写真。

## 動画 <a id="video"></a>

### 一般ツール <a id="general-tools"></a>

- [FFmpeg](https://www.ffmpeg.org/) - 音声と動画の記録、変換、ストリーミングに対応する完全なクロスプラットフォームソリューション。
- [Virtualdub](http://www.virtualdub.org/) - 基本的な編集とエンコードに使える無料の動画ツール。

### コンポジットソフトウェア <a id="compositing-software"></a>

- [Natron](https://github.com/MrKepzie/Natron) - 映画・テレビのポストプロダクションで使われる最先端ツールと同じ原理を基にした、ノードベースのコンポジター。
- [ButtleOFX](https://github.com/buttleofx/ButtleOFX) - シンプルで扱いやすいオープンソースのコンポジットソフトウェア。
- [Blender](https://www.blender.org/) - 動画編集ツールを備えたオープンソース3Dグラフィックスソフトウェア。
- [Shotcut](https://github.com/mltframework/shotcut) - 無料でオープンソースのクロスプラットフォーム動画エディター。

### 動画ライブラリ <a id="video-libraries"></a>

- [OpenFX](http://openfx.sourceforge.net/) - 2D視覚効果向けのオープンプラグインAPI。
- [TuttleOFX](https://github.com/tuttleofx/TuttleOFX) - OpenFXプラグイン形式を基盤とする画像処理フレームワーク。
- [Vid.stab](https://github.com/georgmartius/vid.stab) - FFmpegとTranscodeへ組み込める動画手ぶれ補正ライブラリ。
- [Frei0r](https://github.com/dyne/frei0r) - 無料で移植可能な動画プラグインの大規模なコレクション。

## スクリプト <a id="scripts"></a>

### 動画からパノラマへ <a id="video-to-panorama"></a>

[FFmpeg](https://www.ffmpeg.org/)と[Hugin](http://hugin.sourceforge.net/)を使用します。

```bash
#!/bin/bash
mkdir -p /tmp/images
ffmpeg -i video.avi -r 5 -qscale 3  tmp/images/image-%3d.jpg
pto_gen -o tmp/hugin.pto tmp/images/*.jpg
cpfind --multirow -o tmp/hugin.pto tmp/hugin.pto
cpclean -o tmp/hugin.pto tmp/hugin.pto
linefind -o tmp/hugin.pto tmp/hugin.pto
autooptimiser -a -l -s -m -o tmp/hugin.pto tmp/hugin.pto
pano_modify -o tmp/hugin.pto --center --fov=AUTO --canvas=70% tmp/hugin.pto
pto2mk -o tmp/hugin.mk -p tmp/output tmp/hugin.pto
make -f tmp/hugin.mk all
```

![license](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)
