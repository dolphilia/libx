---
title: "davisonio/awesome-gif"
description: "GIFの作成、変換、最適化、再生、配信に使えるツール、ライブラリ、スクリプトをまとめた定本スナップショット"
licenseSource: "github-davisonio-awesome-gif-readme-md"
---

# GIFのAwesomeリスト <a id="awesome-gif"></a> [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> 優れた[GIF](https://en.wikipedia.org/wiki/GIF)資料を厳選したリストです。

Graphics Interchange Format（GIF）に関するツール、スクリプト、ライブラリ、サンプル、そのほかの資料をまとめています。

## 目次 <a id="contents"></a>


- [一般ツール](#general-tools)
- [ユーティリティ](#utilities)
- [ライブラリ](#libraries)
	- [C++](#c)
	- [C#](#c-sharp)
	- [Haxe](#haxe)
	- [Java](#java)
	- [JavaScript](#javascript)
	- [PHP](#php)
	- [Objective-C](#objective-c)
	- [Swift](#swift)
- [GUI](#gui)
- [ホスティング](#hosting)
- [オンラインツール](#online-tools)
- [コミュニティ](#community)
- [スクリプト](#scripts)
	- [フレームからGIFへ](#frames-to-gif)
	- [GIFからフレームへ](#gif-to-frames)
	- [高品質GIF](#high-quality-gif)
	- [GIFの最適化](#optimize-gif)
	- [非可逆GIF圧縮](#lossy-gif-compressor)
	- [動画からGIFを作成](#making-gif-from-video)
	- [シネマグラフ](#cinemagraphs)
	- [完全なループ](#perfect-loop)
	- [YouTube動画からGIFへ](#youtube-video-to-gif)
- [その他](#miscellaneous)

## 一般ツール <a id="general-tools"></a>

- [FFmpeg](https://www.ffmpeg.org)
- [ImageMagick](https://imagemagick.org/script/index.php)
- [GraphicsMagick](http://www.graphicsmagick.org/) - 通常はImageMagickより高速です。
- [MoviePy](https://zulko.github.io/moviepy/) - 動画編集用のPythonモジュール。

## ユーティリティ <a id="utilities"></a>

- [Gifgen](https://github.com/lukechilds/gifgen) - シンプルで高品質なGIFエンコード。
- [Gifify](https://github.com/jclem/gifify) - 画面録画をGIFへ変換。
- [Screengif](https://github.com/dergachev/screengif) - アニメーションGIFのスクリーンキャストを作成。
- [Gifline](https://github.com/zehfernandes/gifline) - メールへGIFを挿入するChrome拡張機能。
- [Tty2gif](https://github.com/z24/tty2gif) - スクリプトとその出力をバイナリ形式とGIF形式の両方で記録。
- [Gifit](https://github.com/takempf/GIFit) - YouTube動画からGIFを作るChrome拡張機能。
- [Ccapture.js](https://github.com/spite/ccapture.js) - HTML5 Canvasで作成したアニメーションをキャプチャー。
- [Kap](https://getkap.co/) - 画面をキャプチャーしてGIFへ書き出す、美しいオープンソースアプリ。
- [gifski](https://github.com/ImageOptim/gifski) - libimagequantを基盤とする高品質GIFエンコーダー。
- [Gifcurry](https://github.com/lettier/gifcurry) - Haskellで構築された、GIF制作者向けのオープンソースエディター。

## ライブラリ <a id="libraries"></a>

### C++ <a id="c"></a>

- [Gif-h](https://github.com/charlietangora/gif-h) - アニメーションGIFを作成するC++の単一ヘッダーライブラリ。
- [msf_gif](https://github.com/notnullnotvoid/msf_gif) - アニメーションGIFを作成するC／C++の単一ヘッダーライブラリ。

<h3 id="c-sharp">C#</h2>

- [dot-screencap](https://github.com/Speiser/dot-screencap) - 画面を録画してアニメーションGIFとして保存するシンプルなライブラリ。
- [WpfAnimatedGif](https://github.com/XamlAnimatedGif/WpfAnimatedGif) - WPFでアニメーションGIF画像を表示するシンプルなライブラリ。
- [XamlAnimatedGif](https://github.com/XamlAnimatedGif/XamlAnimatedGif) - XAMLアプリ（WPF、WinRT、Windows Phone）でアニメーションGIF画像を表示するシンプルなライブラリ。
- [AnimatedGif](https://github.com/mrousavy/AnimatedGif) - アニメーションGIFの読み込みと作成に使える高性能な.NETライブラリ。

### Haxe <a id="haxe"></a>

- [Gif](https://github.com/snowkit/gif) - Haxe用GIFエンコーダー。

### Java <a id="java"></a>

- [Android-gif-drawable](https://github.com/koral--/android-gif-drawable) - AndroidでアニメーションGIFを表示するViewとDrawable。
- [GifImageView](https://github.com/felipecsl/GifImageView) - アニメーションGIF画像を扱うAndroid ImageView。
- [Gif-animation](https://github.com/extrapixel/gif-animation) - GIFの再生と書き出しに使えるProcessingライブラリ。
- [Android-gif-encoder](https://github.com/nbadal/android-gif-encoder) - Android向けアニメーションGIFエンコーダー。

### JavaScript <a id="javascript"></a>

- [Gif.js](https://github.com/jnordberg/gif.js) - DOMからGIFを作成。
- [Omggif](https://github.com/deanm/omggif) - GIF 89aのエンコーダーとデコーダー。
- [Animated_GIF](https://github.com/sole/Animated_GIF) - アニメーションGIFを作成するJavaScriptライブラリ。
- [Gifffer](https://github.com/krasimir/gifffer) - アニメーションGIFの自動再生を防ぐJavaScriptライブラリ。
- [Gifplayer](https://github.com/rubentd/gifplayer) - アニメーションGIFを再生・停止するjQueryプラグイン。
- [node-gify](https://github.com/tj/node-gify) - FFmpegとgifsicleを使って動画をGIFへ変換するJavaScriptツール。
- [Gifencoder](https://github.com/eugeneware/gifencoder) - Node.js向けのサーバーサイド・アニメーションGIF生成器。

### PHP <a id="php"></a>

- [GifCreator](https://github.com/Sybio/GifCreator) - 複数画像からアニメーションGIFを作成するPHPクラス。
- [GifFrameExtractor](https://github.com/Sybio/GifFrameExtractor) - アニメーションGIFの全フレームを分離するPHPクラス。

### Objective-C <a id="objective-c"></a>

- [FLAnimatedImage](https://github.com/Flipboard/FLAnimatedImage) - FlipboardによるiOS向けGIFエンジン。

### Swift <a id="swift"></a>

- [SwiftyGif](https://github.com/alexiscreuzot/SwiftyGif) - 高性能で扱いやすいGIFエンジン。
- [Gifu](https://github.com/kaishin/gifu) - SwiftによるiOS向けアニメーションGIF対応。

## GUI <a id="gui"></a>

- [Qgifer](https://sourceforge.net/projects/qgifer/)

## ホスティング <a id="hosting"></a>

- [Imgur](https://imgur.com) - アップロードできる最大ファイルサイズは50MBです。

## オンラインツール <a id="online-tools"></a>

- [EzGif](https://ezgif.com/) - オンラインGIF作成・画像編集ツール。
- [Giflr](https://giflr.com/) - アニメーションGIFの作成やリミックスに使えるWebアプリ。
- [GIF Frame Extractor](https://giftoframes.org/) - アニメーションGIFを個別のフレームへオンラインで変換。

## コミュニティ <a id="community"></a>

- [Giphy.com](https://giphy.com)
- [/r/educationalgifs](https://www.reddit.com/r/educationalgifs/)

## スクリプト <a id="scripts"></a>

### フレームからGIFへ <a id="frames-to-gif"></a>

FFmpeg
```bash
ffmpeg -f image2 -i image%d.jpg animated.gif
```

ImageMagick
```bash
magick -delay 20 -loop 0 frames*.png animated.gif
```
GraphicsMagick、ImageMagick、FFmpeg用のBashスクリプト（```frames2gif.sh```）
```bash
#!/bin/bash
if [ $# -ne 5 ]; then
    echo "please provide the moviename and directory where to store the frames"
    echo "./frames2gif.sh [directory] [movie.mp4] [filename.gif] [gm|im|ffmpeg] [png|jpg]"
    exit 1
fi
    if [ "png" == "$5" ]; then
        suffix="png"
    else
        suffix="jpg"
    fi

    CONVERT=$(which magick)
    GM=$(which gm)
    FFMPEG=$(which ffmpeg)
    FFPROBE=$(which ffprobe)
    FPS=$($FFPROBE -show_streams -select_streams v -i "$2"  2>/dev/null | grep "r_frame_rate" | cut -d'=' -f2 | cut -d'/' -f1)
    echo "FPS: ${FPS}"
if [ "im" == "$4" ]; then # use imagemagick
    FPS=$(echo "1 / ${FPS} * 100" |bc -l)
    $CONVERT "$1/*.${suffix}"  -delay ${FPS} -loop 0 "$3"
elif [ "gm" == "$4" ]; then # use graphicsmagick
    FPS=$(echo "1 / ${FPS} * 100" |bc -l)
    $GM convert "$1/*.${suffix}"  -delay ${FPS} -loop 0 "$3"
else # use crappy gif-algorithm from ffmpeg
    $FFMPEG -f image2 -framerate ${FPS} -i "$1/%08d.${suffix}" "$3"
fi
```
[DeepDreamVideo](https://github.com/graphific/DeepDreamVideo)の[ソース](https://github.com/graphific/DeepDreamVideo/blob/master/frames2gif.sh)より。


### GIFからフレームへ <a id="gif-to-frames"></a>

```bash
ffmpeg -i video.mpg image%d.jpg
```
```bash
magick animated.gif -coalesce image%05d.png
```

### 高品質GIF <a id="high-quality-gif"></a>

FFmpegを使用。[こちらの記事](http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html)を基にしています。

- パレットを生成:

```bash
#!/bin/sh
start_time=30
duration=3
ffmpeg -y -ss $start_time -t $duration -i input.avi \
-vf fps=10,scale=320:-1:flags=lanczos,palettegen palette.png
```
- パレットを使ってGIFを出力:

```bash
#!/bin/sh
start_time=30
duration=3
ffmpeg -ss $start_time -t $duration -i input.avi -i palette.png -filter_complex \
"fps=10,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif
```

### GIFの最適化 <a id="optimize-gif"></a>

```bash
magick output.gif -layers Optimize output_optimized.gif
```

### 非可逆GIF圧縮 <a id="lossy-gif-compressor"></a>

```bash
./gifsicle -O3 --lossy=80 -o lossy-compressed.gif input.gif

```
[Lossy Gif](https://kornel.ski/lossygif)


### 動画からGIFを作成 <a id="making-gif-from-video"></a>

```python
from moviepy import VideoFileClip

clip = (VideoFileClip("input.avi")
        .subclipped((4,00.00),(5,00.00))
        .resized(0.3))
clip.write_gif("output.gif")

```

[記事](http://zulko.github.io/blog/2014/01/23/making-animated-gifs-from-video-files-with-python/#converting-a-video-excerpt-into-a-gif)

### シネマグラフ <a id="cinemagraphs"></a>

領域を静止させる方法

```python
from moviepy import VideoFileClip, vfx

clip = (VideoFileClip("input.avi")
        .subclipped((4,00.00),(5,00.00))
        .resized(0.3)
        .with_effects([vfx.FreezeRegion(outside_region=(170, 230, 380, 320))]))
clip.write_gif("output.gif", fps=15)
```

[記事](http://zulko.github.io/blog/2014/01/23/making-animated-gifs-from-video-files-with-python/#freezing-a-region)

```bash
ffmpeg \
-ss ${starttime} -t ${duration} -i ${vidfile}                         `# body of loop` \
-ss TODO ${starttime} MINUS ${duration} -t ${fadetime} -i ${vidfile}  `# lead-in for crossfade` \
-loop 1 -i ${stillfile}                                               `# masked still image` \
-filter_complex "
  [0:v]setpts=PTS-STARTPTS[vid];                                      `# speed adjustment - not needed here, so noop`
  color=white,scale=3840x2160,fade=in:st=0:d=${fadetime}[alpha];      `# crossfade alpha, double length ahead of speed change`
  [1:v][alpha]alphamerge[am];                                         `# apply alpha to lead-in`
  [am]setpts=PTS+(${duration}-${fadetime})/TB[layer2];                  `# speed adjustment and offset for lead-in`
  [vid][layer2]overlay[oo];                                           `# overlay for crossfade`
  [oo][2:v]overlay=shortest=1[out1];                                  `# overlay still image`
  [out1]crop=w=${cropfactor}*iw:h=${cropfactor}*ih:y=${yoffset}*ih,scale=${outputwidth}:-1, `# crop and scale`
  eq=gamma=${gamma}:contrast=${contrast}:saturation=${saturation},unsharp                   `# final adjustments`
" -an output.mp4
```

### 完全なループ <a id="perfect-loop"></a>

```python
from moviepy import VideoFileClip
from moviepy.video.tools.cuts import FramesMatches

clip = VideoFileClip("input.avi").resized(0.3)
scenes = FramesMatches.from_clip(clip, 10, 3)

selected_scenes = scenes.select_scenes(2, 1, 4, 0.5)
selected_scenes.write_gifs(clip.resized(width=450), "./outputs_directory")

```
[記事](http://zulko.github.io/blog/2015/02/01/extracting-perfectly-looping-gifs-from-videos-with-python-and-moviepy/)

### YouTube動画からGIFへ <a id="youtube-video-to-gif"></a>

- yt-dlpでダウンロードしてから変換します。

```bash
yt-dlp https://www.youtube.com/watch?v=V2XpsaLqXc8
```

[yt-dlp](https://github.com/yt-dlp/yt-dlp)

## その他 <a id="miscellaneous"></a>

- [Why is the GIF I created so slow?](https://superuser.com/questions/569924/why-is-the-gif-i-created-so-slow/569967) - ImageMagickを使ってGIFの速度に関する問題を解決します。

## 利用方法 <a id="use"></a>

このリストを活用する最善の方法は次のとおりです。

- [目次](#contents).
- <kbd>command</kbd> + <kbd>F</kbd>で内容を検索する。

## クレジット <a id="credits"></a>

[Craig Davison](https://davison.io)およびコントリビューターによるリストです。

[復元済みリスト](https://github.com/sindresorhus/awesome/issues/872)を基にしており、原作は[Ismail Baaj](https://ismailbaaj.fr)です。
