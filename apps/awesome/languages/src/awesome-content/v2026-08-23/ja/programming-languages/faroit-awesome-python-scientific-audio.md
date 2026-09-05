---
title: "Awesome Python for Scientific Audio"
description: "Python for Scientific Audioを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-faroit-awesome-python-scientific-audio-readme-md"
---

# Awesome Python for Scientific Audio

Python for Scientific Audioを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

* [音響関連パッケージ](#audio-related-packages)
    - [読み書き](#read-write)
    - [変換・汎用 DSP](#transformations---general-dsp)
    - [特徴抽出](#feature-extraction)
    - [データ拡張](#data-augmentation)
    - [音声処理](#speech-processing)
    - [環境音](#environmenta)
    - [知覚モデル・聴覚モデル](#perceptial-models---auditory-models)
    - [音源分離](#source-separation)
    - [音楽情報検索](#music-information-retrieval)
    - [深層学習](#deep-learning)
    - [記号音楽・MIDI・音楽学](#symbolic-music---midi---musicology)
    - [リアルタイムアプリケーション](#realtime-applications)
    - [Web Audio](#web-audio)
    - [音響データセットとデータローダー](#audio-related-apis-and-datasets)
    - [音響プラグインのラッパー](#wrappers-for-audio-plugins)
* [チュートリアル](#tutorials)
* [書籍](#books)
* [学術論文](#scientific-papers)
* [その他の資料](#other-resources)
* [関連リスト](#related-lists)
* [貢献](#contributing)
* [ライセンス](#license)


<a id="audio-related-packages"></a>
## 音響関連パッケージ

- パッケージ総数: 67

<a id="read-write"></a>
#### 読み書き

* [audiolazy](https://github.com/danilobellini/audiolazy) [:octocat:](https://github.com/danilobellini/audiolazy) [:package:](https://pypi.python.org/pypi/audiolazy/) - Python向け表現的なデジタル信号処理（DSP）パッケージ。
* [audioread](https://github.com/beetbox/audioread) [:octocat:](https://github.com/beetbox/audioread) [:package:](https://pypi.python.org/pypi/audioread/) - GStreamer、Core Audio、MAD、FFmpeg を横断して音声をデコード。
* [mutagen](https://mutagen.readthedocs.io/) [:octocat:](https://github.com/quodlibet/mutagen) [:package:](https://pypi.python.org/pypi/mutagen) - さまざまなフォーマットの音声メタデータの読み書き。
* [pyAV](http://docs.mikeboers.com/pyav/) [:octocat:](https://github.com/mikeboers/PyAV) - FFmpeg または Libav を Python らしく扱えるバインディング。
* [pyfar](https://pyfar.readthedocs.io) [:octocat:](https://github.com/pyfar/pyfar) [:package:](https://pypi.org/project/pyfar/) - [pyfar.io](https://pyfar.readthedocs.io/en/stable/modules/pyfar.io.html)モジュールで音声ファイル、SOFAファイル、COMSOLデータを読み書き。
* [(Py)Soundfile](http://pysoundfile.readthedocs.io/) [:octocat:](https://github.com/bastibe/PySoundFile) [:package:](https://pypi.python.org/pypi/SoundFile) - libsndfile、CFFI、NumPyに基づくライブラリ。
* [pySox](https://github.com/rabitt/pysox) [:octocat:](https://github.com/rabitt/pysox) [:package:](https://pypi.python.org/pypi/pysox/) - soxに対するラッパー。
* [stempeg](https://github.com/faroit/stempeg) [:octocat:](https://github.com/faroit/stempeg) [:package:](https://pypi.python.org/pypi/stempeg/) - STEMSマルチストリーム音声の読み書き。
* [tinytag](https://github.com/devsnd/tinytag) [:octocat:](https://github.com/devsnd/tinytag) [:package:](https://pypi.python.org/pypi/tinytag/) - MP3、OGG、FLACおよびWaveファイルの音楽メタデータの読み取り。

<a id="transformations---general-dsp"></a>
#### 変換・汎用 DSP

* [acoustics](http://python-acoustics.github.io/python-acoustics/) [:octocat:](https://github.com/python-acoustics/python-acoustics/) [:package:](https://pypi.python.org/pypi/acoustics) - 音響学者向けの便利なツール。
* [AudioTK](https://github.com/mbrucher/AudioTK) [:octocat:](https://github.com/mbrucher/AudioTK) - DSPフィルタツールボックス（多くのフィルタを提供）。
* [AudioTSM](https://audiotsm.readthedocs.io/) [:octocat:](https://github.com/Muges/audiotsm) [:package:](https://pypi.python.org/pypi/audiotsm/) - 実時間音声の時間スケール調整プロシージャ。
* [Gammatone](https://github.com/detly/gammatone) [:octocat:](https://github.com/detly/gammatone) - ガマトーンフィルタバンクの実装。
* [pyFFTW](http://pyfftw.github.io/pyFFTW/) [:octocat:](https://github.com/pyFFTW/pyFFTW) [:package:](https://pypi.python.org/pypi/pyFFTW/) - FFTW(3)に対するラッパー。
* [NSGT](https://grrrr.org/research/software/nsgt/) [:octocat:](https://github.com/grrrr/nsgt) [:package:](https://pypi.python.org/pypi/nsgt) - 非定常ガーボー変換、定常Q変換。
* [matchering](https://github.com/sergree/matchering) [:octocat:](https://github.com/sergree/matchering) [:package:](https://pypi.org/project/matchering/) - 自動化されたリファレンス音声のマスタリング。
* [MDCT](https://github.com/nils-werner/mdct) [:octocat:](https://github.com/nils-werner/mdct) [:package:](https://pypi.python.org/pypi/mdct) - MDCT変換。
* [pydub](http://pydub.com) [:octocat:](https://github.com/jiaaro/pydub) [:package:](https://pypi.python.org/pypi/mdct) - 音声をシンプルで使いやすいハイレベルインターフェースで操作。
* [pyfar](https://pyfar.readthedocs.io) [:octocat:](https://github.com/pyfar/pyfar) [:package:](https://pypi.org/project/pyfar/) - [pyfar.dsp](https://pyfar.readthedocs.io/en/stable/modules/pyfar.dsp.html)モジュールで音響信号に最適化された一般DSPおよびフィルタ処理を行う。
* [pytftb](http://tftb.nongnu.org) [:octocat:](https://github.com/scikit-signal/pytftb) - MATLAB Time-Frequency Toolboxの実装。
* [pyroomacoustics](https://github.com/LCAV/pyroomacoustics) [:octocat:](https://github.com/LCAV/pyroomacoustics) [:package:](https://pypi.python.org/pypi/pyroomacoustics) - 音響空間シミュレーション（RIR生成器）
* [PyRubberband](https://github.com/bmcfee/pyrubberband) [:octocat:](https://github.com/bmcfee/pyrubberband) [:package:](https://pypi.python.org/pypi/pyrubberband/) - [rubberband](http://breakfastquay.com/rubberband/) をラップしてピッチシフトおよびタイムストレッチを行うためのツール
* [PyWavelets](http://pywavelets.readthedocs.io) [:octocat:](https://github.com/PyWavelets/pywt) [:package:](https://pypi.python.org/pypi/PyWavelets) - Pythonにおける離散小波変換
* [Resampy](http://resampy.readthedocs.io) [:octocat:](https://github.com/bmcfee/resampy) [:package:](https://pypi.python.org/pypi/resampy) - サンプルレート変換
* [SFS-Python](http://www.sfstoolbox.org) [:octocat:](https://github.com/sfstoolbox/sfs-python) [:package:](https://pypi.python.org/pypi/sfs/) - 音響場合成ツールボックス
* [sound_field_analysis](https://appliedacousticschalmers.github.io/sound_field_analysis-py/) [:octocat:](https://github.com/AppliedAcousticsChalmers/sound_field_analysis-py) [:package:](https://pypi.org/project/sound-field-analysis/) - 球面マイクロフォン配列で記録された音場データの解析、可視化、処理
* [STFT](http://stft.readthedocs.io) [:octocat:](https://github.com/nils-werner/stft) [:package:](https://pypi.python.org/pypi/stft) - ショートタイムフーリエ変換用のスタンドアローンパッケージ

<a id="feature-extraction"></a>
#### 特徴抽出

* [aubio](http://aubio.org/) [:octocat:](https://github.com/aubio/aubio) [:package:](https://pypi.python.org/pypi/aubio) - C言語で書かれた特徴抽出器、Pythonインターフェース付き
* [audioFlux](https://github.com/libAudioFlux/audioFlux) [:octocat:](https://github.com/libAudioFlux/audioFlux) [:package:](https://pypi.python.org/pypi/audioflux) - 音声および音楽分析、特徴抽出用のライブラリ
* [audiolazy](https://github.com/danilobellini/audiolazy) [:octocat:](https://github.com/danilobellini/audiolazy) [:package:](https://pypi.python.org/pypi/audiolazy/) - リアルタイム音声処理ライブラリ（一般用途）
* [essentia](http://essentia.upf.edu) [:octocat:](https://github.com/MTG/essentia) - 音楽関連の低レベルおよび高レベル特徴抽出器、C++ベース、Pythonバインディングを含む
* [python_speech_features](https://github.com/jameslyons/python_speech_features) [:octocat:](https://github.com/jameslyons/python_speech_features) [:package:](https://pypi.python.org/pypi/python_speech_features) - ASR用の共通音声特徴
* [pyYAAFE](https://github.com/Yaafe/Yaafe) [:octocat:](https://github.com/Yaafe/Yaafe) - YAAFE特徴抽出器のPythonバインディング
* [speechpy](https://github.com/astorfi/speechpy) [:octocat:](https://github.com/astorfi/speechpy) [:package:](https://pypi.python.org/pypi/speechpy) - 音声処理および認識用のライブラリ、現在は主に特徴抽出
* [spafe](https://github.com/SuperKogito/spafe) [:octocat:](https://github.com/SuperKogito/spafe) [:package:](https://pypi.org/project/spafe/) - 音声ファイルから特徴を抽出するためのPythonライブラリ

<a id="data-augmentation"></a>
#### データ拡張

* [audiomentations](https://github.com/iver56/audiomentations) [:octocat:](https://github.com/iver56/audiomentations) [:package:](https://pypi.org/project/audiomentations/) - 音声データの拡張
* [muda](https://muda.readthedocs.io/en/latest/) [:octocat:](https://github.com/bmcfee/muda) [:package:](https://pypi.python.org/pypi/muda) - 音楽データの拡張
* [pydiogment](https://github.com/SuperKogito/pydiogment) [:octocat:](https://github.com/SuperKogito/pydiogment) [:package:](https://pypi.org/project/pydiogment/) - 音声データの拡張

<a id="speech-processing"></a>
#### 音声処理

* [aeneas](https://www.readbeyond.it/aeneas/) [:octocat:](https://github.com/readbeyond/aeneas/) [:package:](https://pypi.python.org/pypi/aeneas/) - MFCC+DTWに基づく強制対応ツール、35以上の言語対応
* [deepspeech](https://github.com/mozilla/DeepSpeech) [:octocat:](https://github.com/mozilla/DeepSpeech) [:package:](https://pypi.org/project/deepspeech/) - 事前訓練済み自動音声認識
* [gentle](https://github.com/lowerquality/gentle) [:octocat:](https://github.com/lowerquality/gentle) - Kaldiに基づく強制アライメントツール
* [Parselmouth](https://github.com/YannickJadoul/Parselmouth) [:octocat:](https://github.com/YannickJadoul/Parselmouth) [:package:](https://pypi.org/project/praat-parselmouth/) - [Praat](http://www.praat.org)の音声分析、合成、操作ソフトウェアへのPythonインターフェース
* [persephone](https://persephone.readthedocs.io/en/latest/) [:octocat:](https://github.com/persephone-tools/persephone) [:package:](https://pypi.org/project/persephone/) - 音素の自動トランスクリプションツール
* [pyannote.audio](https://github.com/pyannote/pyannote-audio) [:octocat:](https://github.com/pyannote/pyannote-audio) [:package:](https://pypi.org/project/pyannote-audio/) - 話者分離（Speaker Diarization）用のニューラルブリッジ
* [pyAudioAnalysis](https://github.com/tyiannak/pyAudioAnalysis)² [:octocat:](https://github.com/tyiannak/pyAudioAnalysis) [:package:](https://pypi.python.org/pypi/pyAudioAnalysis/) - 特徴抽出、分類、分離
* [py-webrtcvad](https://github.com/wiseman/py-webrtcvad) [:octocat:](https://github.com/wiseman/py-webrtcvad) [:package:](https://pypi.python.org/pypi/webrtcvad/) - WebRTC音声活動検出器へのインターフェース
* [pypesq](https://github.com/vBaiCai/python-pesq) [:octocat:](https://github.com/vBaiCai/python-pesq) - PESQスコア計算用のラッパー
* [pystoi](https://github.com/mpariente/pystoi) [:octocat:](https://github.com/mpariente/pystoi) [:package:](https://pypi.org/project/pystoi) - 短期的目標理解性測定（STOI）
* [visqol-python](https://github.com/talker93/visqol-python) [:octocat:](https://github.com/talker93/visqol-python) [:package:](https://pypi.org/project/visqol-python/) - GoogleのViSQOL音声品質メトリクス（MOS-LQO）のポート（Bazelなしでインストール可能）
* [PyWorldVocoder](https://github.com/JeremyCCHsu/Python-Wrapper-for-World-Vocoder) [:octocat:](https://github.com/JeremyCCHsu/Python-Wrapper-for-World-Vocoder) - MoriseのWorld Vocoder用のラッパー
* [Montreal Forced Aligner](https://montrealcorpustools.github.io/Montreal-Forced-Aligner/) [:octocat:](https://github.com/MontrealCorpusTools/Montreal-Forced-Aligner) - Kaldi（HMM）に基づく強制アライメントツール（英語対応、その他は訓練可能）
* [SIDEKIT](http://lium.univ-lemans.fr/sidekit/) [:package:](https://pypi.python.org/pypi/SIDEKIT/) - 話者および言語識別
* [SpeechRecognition](https://github.com/Uberi/speech_recognition) [:octocat:](https://github.com/Uberi/speech_recognition) [:package:](https://pypi.python.org/pypi/SpeechRecognition/) - 多くのASRエンジンおよびAPIへのラッパー（オンラインおよびオフライン）

<a id="environmental-sounds"></a>
#### 環境音

* [sed_eval](http://tut-arg.github.io/sed_eval) [:octocat:](https://github.com/TUT-ARG/sed_eval) [:package:](https://pypi.org/project/sed_eval/) - 音声イベント検出評価ツールボックス

<a id="perceptial-models---auditory-models"></a>
#### 知覚モデル・聴覚モデル

* [cochlea](https://github.com/mrkrd/cochlea) [:octocat:](https://github.com/mrkrd/cochlea) [:package:](https://pypi.python.org/pypi/cochlea/) - 内耳モデル
* [Brian2](http://briansimulator.org/) [:octocat:](https://github.com/brian-team/brian2) [:package:](https://pypi.python.org/pypi/Brian2) - スピッキングニューラルネットワークシミュレータ（内耳モデルを含む）
* [Loudness](https://github.com/deeuu/loudness) [:octocat:](https://github.com/deeuu/loudness) - 観測された音量、ZwickerおよびMoore/Glasbergモデルを含む
* [pyloudnorm](https://www.christiansteinmetz.com/projects-blog/pyloudnorm) [:octocat:](https://github.com/csteinmetz1/pyloudnorm) - 音声の音量メーターおよび正規化、ITU-R BS.1770-4を実装
* [Sound Field Synthesis Toolbox](http://www.sfstoolbox.org) [:octocat:](https://github.com/sfstoolbox/sfs-python) [:package:](https://pypi.python.org/pypi/sfs/) - 音響場合成ツールボックス

<a id="source-separation"></a>
#### 音源分離

* [commonfate](https://github.com/aliutkus/commonfate) [:octocat:](https://github.com/aliutkus/commonfate) [:package:](https://pypi.python.org/pypi/commonfate) - Common Fateモデルと変換
* [NTFLib](https://github.com/stitchfix/NTFLib) [:octocat:](https://github.com/stitchfix/NTFLib) - スパースベータ-divergenceテンソル分解
* [NUSSL](https://interactiveaudiolab.github.io/project/nussl.html) [:octocat:](https://github.com/interactiveaudiolab/nussl) [:package:](https://pypi.python.org/pypi/nussl) - DSP手法と深層学習手法を含む包括的なソース分離フレームワーク
* [NIMFA](http://nimfa.biolab.si) [:octocat:](https://github.com/marinkaz/nimfa) [:package:](https://pypi.python.org/pypi/nimfa) - 非負マトリクス分解のいくつかのバリエーション

<a id="music-information-retrieval"></a>
#### 音楽情報検索

* [Catchy](https://github.com/jvbalen/catchy) [:octocat:](https://github.com/jvbalen/catchy) - コルパス分析ツール：コンピューターホック発見用
* [chord-detection](https://github.com/sevagh/chord-detection) [:octocat:](https://github.com/sevagh/chord-detection) - チャード検出およびキー推定アルゴリズム
* [Madmom](https://madmom.readthedocs.io/en/latest/) [:octocat:](https://github.com/CPJKU/madmom) [:package:](https://pypi.python.org/pypi/madmom) - ビート検出、オンセット検出、チャード認識に強い焦点を置いたMIRパッケージ
* [mir_eval](http://craffel.github.io/mir_eval/) [:octocat:](https://github.com/craffel/mir_eval) [:package:](https://pypi.python.org/pypi/mir_eval) - 多様なMIRタスクに共通する評価スコア。また、bss_evalの実装も含まれる
* [msaf](http://pythonhosted.org/msaf/) [:octocat:](https://github.com/urinieto/msaf) [:package:](https://pypi.python.org/pypi/msaf) - 音楽構造分析フレームワーク
* [librosa](http://librosa.github.io/librosa/) [:octocat:](https://github.com/librosa/librosa) [:package:](https://pypi.python.org/pypi/librosa) - 一般の音声および音楽分析

<a id="deep-learning"></a>
#### 深層学習

* [Kapre](https://github.com/keunwoochoi/kapre) [:octocat:](https://github.com/keunwoochoi/kapre) [:package:](https://pypi.python.org/pypi/kapre) - Keras用音声プリプロセッサ
* [TorchAudio](https://github.com/pytorch/audio) [:octocat:](https://github.com/pytorch/audio) - PyTorch用音声ローダー
* [nnAudio](https://github.com/KinWaiCheuk/nnAudio) [:octocat:](https://github.com/KinWaiCheuk/nnAudio) [:package:](https://pypi.org/project/nnAudio/) - PyTorchにおける1Dコネクションネットワークを用いた高速音声処理

<a id="symbolic-music---midi---musicology"></a>
#### 記号音楽・MIDI・音楽学

* [Music21](http://web.mit.edu/music21/) [:octocat:](https://github.com/cuthbertLab/music21) [:package:](https://pypi.python.org/pypi/music21) - コンピュータ支援音楽学のためのツールキット
* [Mido](https://mido.readthedocs.io/en/latest/) [:octocat:](https://github.com/olemb/mido) [:package:](https://pypi.python.org/pypi/mido) - リアルタイムMIDIワッパー
* [mingus](https://github.com/bspaans/python-mingus) [:octocat:](https://github.com/bspaans/python-mingus) [:package:](https://pypi.org/project/mingus) - MIDIファイルおよび再生をサポートする高度な音楽理論と記譜パッケージ
* [Pretty-MIDI](http://craffel.github.io/pretty-midi/) [:octocat:](https://github.com/craffel/pretty-midi) [:package:](https://pypi.python.org/pypi/pretty-midi) - MIDIデータを扱うための便利で直感的なユーティリティ関数

<a id="realtime-applications"></a>
#### リアルタイムアプリケーション

* [Jupylet](https://github.com/nir/jupylet) [:octocat:](https://github.com/nir/jupylet) - 減算、加算、FM、サンプルベースの音声合成
* [PYO](http://ajaxsoundstudio.com/software/pyo/) [:octocat:](https://github.com/belangeo/pyo) - リアルタイム音声DSPエンジン
* [python-sounddevice](https://github.com/spatialaudio/python-sounddevice) [:octocat:](http://python-sounddevice.readthedocs.io) [:package:](https://pypi.python.org/pypi/sounddevice) - NumPyとのリアルタイム音声I/Oを提供するPortAudioワッパー
* [ReTiSAR](https://github.com/AppliedAcousticsChalmers/ReTiSAR) [:octocat:](https://github.com/AppliedAcousticsChalmers/ReTiSAR) - ストリーミングまたはIRベースの高次球面マイクロフォン配列信号のバイナーリング

<a id="web-audio"></a>
#### Web Audio

* [TimeSide (Beta)](https://github.com/Parisson/TimeSide/tree/dev) [:octocat:](https://github.com/Parisson/TimeSide/tree/dev) - 高レベルの音声分析、画像処理、変換、ストリーミングおよびラベル付け。

<a id="audio-dataset-and-dataloaders"></a>
#### 音響データセットとデータローダー

* [beets](http://beets.io/) [:octocat:](https://github.com/beetbox/beets) [:package:](https://pypi.python.org/pypi/beets) - 音楽ライブラリマネージャーおよび [MusicBrainz](https://musicbrainz.org/) タグ付けツール。
* [musdb](http://dsdtools.readthedocs.io) [:octocat:](https://github.com/sigsep/sigsep-mus-db) [:package:](https://pypi.python.org/pypi/musdb) - MUSDB18データセットの解析と処理。
* [medleydb](http://medleydb.readthedocs.io) [:octocat:](https://github.com/marl/medleydb) - [medleydb](http://medleydb.weebly.com/) 音声＋注釈の解析。
* [Soundcloud API](https://github.com/soundcloud/soundcloud-python) [:octocat:](https://github.com/soundcloud/soundcloud-python) [:package:](https://pypi.python.org/pypi/soundcloud) - [Soundcloud API](https://developers.soundcloud.com/) のラッパー。
* [Youtube-Downloader](http://rg3.github.io/youtube-dl/) [:octocat:](https://github.com/rg3/youtube-dl) [:package:](https://pypi.python.org/pypi/youtube_dl) - YouTube動画（および音声）のダウンロード。
* [audiomate](https://github.com/ynop/audiomate) [:octocat:](https://github.com/ynop/audiomate) [:package:](https://pypi.python.org/pypi/audiomate/) - 多様な音声データセットの読み込み。
* [mirdata](https://mirdata.readthedocs.io/en/latest/) [:octocat:](https://github.com/mir-dataset-loaders/mirdata) [:package:](https://pypi.python.org/pypi/mirdata) - 音楽情報検索（MIR）データセットの共通読み込みツール。
<a id="wrappers-for-audio-plugins"></a>
#### 音響プラグインのラッパー

* [VamPy Host](https://code.soundsoftware.ac.uk/projects/vampy-host) [:package:](https://pypi.python.org/pypi/vamp) - コンパイルされたvampプラグインのインターフェース。

<a id="tutorials"></a>
## チュートリアル

* [Whirlwind Tour Of Python](https://jakevdp.github.io/WhirlwindTourOfPython/) [:octocat:](https://github.com/jakevdp/WhirlwindTourOfPython ) - 研究者や開発者向けのPython基本を速いペースで紹介したチュートリアル。
* [Introduction to Numpy and Scipy](http://www.scipy-lectures.org/index.html) [:octocat:](https://github.com/scipy-lectures/scipy-lecture-notes) - 高い評価を得たチュートリアルで、科学的Pythonエコシステムの大部分をカバー。
* [Numpy for MATLAB® Users](https://docs.scipy.org/doc/numpy/user/numpy-for-matlab-users.html) - スイッチャー向けの同等のPython関数の概要。
* [MIR Notebooks](http://musicinformationretrieval.com/) [:octocat:](https://github.com/stevetjoa/stanford-mir) - 音楽情報検索（MIR）用のインストラクショナルiPythonノートブックのコレクション。
* [Selected Topics in Audio Signal Processing]( https://github.com/spatialaudio/selected-topics-in-audio-signal-processing-exercises) - iPythonノートブック形式の練習問題。
* [Live-coding a music synthesizer](https://www.youtube.com/watch?v=SSyQ0kRHzis) リアルな音を再現するためのSoundDeviceライブラリの使用方法を示すライブコーディング動画。 [Code](https://github.com/cool-RR/python_synthesizer)。
* [pyfar examples](https://pyfar-gallery.readthedocs.io/en/latest/examples_gallery.html) - 音響研究用のPythonパッケージ（pyfar）の紹介および例。

<a id="books"></a>
## 書籍

* [Python Data Science Handbook](https://github.com/jakevdp/PythonDataScienceHandbook) - Jake Vanderplas, エキセレントな書籍および付属チュートリアルノートブック。
* [Fundamentals of Music Processing](https://www.audiolabs-erlangen.de/fau/professor/mueller/bookFMP) - Meinard Müller, Python練習問題を含む。

<a id="scientific-papers"></a>
## 学術論文

* [Python for audio signal processing](http://eprints.maynoothuniversity.ie/4115/1/40.pdf) - ジョン・C・グローバー、ヴィクトル・ラザリニおよびジョセフ・ティモニー、2011年リズンアフター会議。
* [librosa: Audio and Music Signal Analysis in Python](http://conference.scipy.org/proceedings/scipy2015/pdfs/brian_mcfee.pdf)、[Video](https://www.youtube.com/watch?v=MhOdbtPhbLU) - ブライアン・マッキー、コールン・ラフェル、ダウェン・リアン、ダニエル・P・W・エリス、マット・マヴィカ、エリック・バテンベルグ、オリオル・ニエト、Scipy 2015。
* [pyannote.audio: neural building blocks for speaker diarization](https://arxiv.org/abs/1911.01255)、 [Video](https://www.youtube.com/watch?v=37R_R82lfwA) - ヘル・ブレディン、ユイ・ルイ、ルイ・マヌエル・コリア、グレゴリー・ジェリー、パヴェル・コルシュノフ、マーヴィン・ラーチン、ディエゴ・フュステス、ハディエン・ティユックス、ワシム・ボアズィ、マリー・フィリップ・ギル、ICASSP 2020

<a id="other-resources"></a>
## その他の資料

* [Coursera Course](https://www.coursera.org/learn/audio-signal-processing) -  オーディオ信号処理、バルセロナのUPFおよびスタンフォード大学によるPythonベースのコース。
* [Digital Signal Processing Course](http://dsp-nbsphinx.readthedocs.io/en/nbsphinx-experiment/index.html) - ロストック大学のマスターコース資料（大学の教材）に多くのPython例が含まれている。
* [Slack Channel](https://mircommunity.slack.com) - 音楽情報検索コミュニティ。

<a id="related-lists"></a>
## 関連リスト

[PythonInMusic](https://wiki.python.org/moin/PythonInMusic) という既存リストがありますが、更新されておらず、科学用途にはあまり関係しない特殊用途のパッケージが多数含まれています。[Awesome-Python](https://github.com/vinta/awesome-python) は Python パッケージの大規模な厳選リストですが、音響分野のセクションはごく小規模です。

<a id="contributing"></a>
## 貢献

貢献をいつでも歓迎します。まず[貢献ガイドライン](https://github.com/faroit/awesome-python-scientific-audio/blob/ab30574501d101bf08e1220ca293bfa7ddf103f9/CONTRIBUTING.md)をご覧ください。

ライブラリがこのリストにふさわしいか判断できない場合、プルリクエストを開いたままにすることがあります。👍 を付けて投票できます。

<a id="license"></a>
## ライセンス

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
