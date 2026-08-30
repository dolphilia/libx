---
title: "Awesome Models"
description: "Modelsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-likedan-Awesome-CoreML-Models-readme-md"
---

# Awesome Models

Modelsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 画像 - メタデータ／テキスト
*画像データを入力として受け取り、画像に関する有用な情報を出力するモデルです。*
* **TextDetection** - Vision内蔵モデルを使ってリアルタイムにテキストを検出します。 [ダウンロード]() | [デモ](https://github.com/tucan9389/TextDetection-CoreML) | [参考資料](https://developer.apple.com/documentation/vision)
* **PhotoAssessment** - Core MLとMetalを使って写真を評価します。 [ダウンロード](https://github.com/yulingtianxia/PhotoAssessment/blob/master/PhotoAssessment-Sample/Sources/NIMANasnet.mlmodel) | [デモ](https://github.com/yulingtianxia/PhotoAssessment) | [参考資料](https://arxiv.org/abs/1709.05424)
* **PoseEstimation** - モバイル環境で画像から人間の姿勢を推定します。 [ダウンロード](https://github.com/edvardHua/PoseEstimationForMobile/tree/master/release) | [デモ](https://github.com/tucan9389/PoseEstimation-CoreML) | [参考資料](https://github.com/edvardHua/PoseEstimationForMobile)
* **MobileNet** - 画像内の主要な物体を検出します。 [ダウンロード](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [デモ](https://github.com/hollance/MobileNet-CoreML) | [参考資料](https://arxiv.org/abs/1704.04861)
* **Places CNN** - 寝室、森林、海岸など205カテゴリから画像の場面を検出します。 [ダウンロード](https://github.com/hollance/MobileNet-CoreML/raw/master/MobileNet.mlmodel) | [デモ](https://github.com/chenyi1989/CoreMLDemo) | [参考資料](http://places.csail.mit.edu/index.html)
* **Inception v3** - 画像内の主要な物体を検出します。 [ダウンロード](https://github.com/yulingtianxia/Core-ML-Sample/blob/master/CoreMLSample/Inceptionv3.mlmodel) | [デモ](https://github.com/yulingtianxia/Core-ML-Sample/) | [参考資料](https://arxiv.org/abs/1512.00567)
* **ResNet50** - 画像内の主要な物体を検出します。 [ダウンロード](https://github.com/ytakzk/CoreML-samples/blob/master/CoreML-samples/Resnet50.mlmodel) | [デモ](https://github.com/ytakzk/CoreML-samples) | [参考資料](https://arxiv.org/abs/1512.03385)
* **VGG16** - 画像内の主要な物体を検出します。 [ダウンロード](https://docs-assets.developer.apple.com/coreml/models/VGG16.mlmodel) | [デモ](https://github.com/alaphao/CoreMLExample) | [参考資料](https://arxiv.org/abs/1409.1556)
* **Car Recognition** - 車のブランドと車種を予測します。 [ダウンロード](https://github.com/likedan/Core-ML-Car-Recognition/blob/master/Convert/CarRecognition.mlmodel) | [デモ](https://github.com/ytakzk/CoreML-samples) | [参考資料](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)
* **YOLO** - 画像内にある物体の種類と位置を認識します。 [ダウンロード](https://github.com/hollance/YOLO-CoreML-MPSNNGraph/blob/master/TinyYOLO-CoreML/TinyYOLO-CoreML/TinyYOLO.mlmodel) | [デモ](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) | [参考資料](http://machinethink.net/blog/object-detection-with-yolo)
* **AgeNet** - 人物の顔写真から年齢を予測します。 [ダウンロード](https://drive.google.com/file/d/0B1ghKa_MYL6mT1J3T1BEeWx4TWc/view?usp=sharing) | [デモ](https://github.com/cocoa-ai/FacesVisionDemo) | [参考資料](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **GenderNet** - 人物の顔写真から性別を予測します。 [ダウンロード](https://drive.google.com/file/d/0B1ghKa_MYL6mYkNsZHlyc2ZuaFk/view?usp=sharing) | [デモ](https://github.com/cocoa-ai/FacesVisionDemo) | [参考資料](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)
* **MNIST** - 画像から手書き数字を予測します。 [ダウンロード](https://github.com/ph1ps/MNIST-CoreML/raw/master/MNISTPrediction/MNIST.mlmodel) | [デモ](https://github.com/ph1ps/MNIST-CoreML) | [参考資料](http://yann.lecun.com/exdb/mnist/)
* **EmotionNet** - 人物の顔写真から感情を予測します。 [ダウンロード](https://drive.google.com/file/d/0B1ghKa_MYL6mTlYtRGdXNFlpWDQ/view?usp=sharing) | [デモ](https://github.com/cocoa-ai/FacesVisionDemo) | [参考資料](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)
* **SentimentVision** - 画像から肯定的または否定的な感情を予測します。 [ダウンロード](https://drive.google.com/open?id=0B1ghKa_MYL6mZ0dITW5uZlgyNTg) | [デモ](https://github.com/cocoa-ai/SentimentVisionDemo) | [参考資料](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)
* **Food101** - 画像から食べ物の種類を予測します。 [ダウンロード](https://drive.google.com/open?id=0B5TjkH3njRqnVjBPZGRZbkNITjA) | [デモ](https://github.com/ph1ps/Food101-CoreML) | [参考資料](http://visiir.lip6.fr/explore)
* **Oxford102** - 画像から花の種類を検出します。 [ダウンロード](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [デモ](https://github.com/cocoa-ai/FlowersVisionDemo) | [参考資料](http://jimgoo.com/flower-power/)
* **FlickrStyle** - 画像の芸術的スタイルを検出します。 [ダウンロード](https://drive.google.com/file/d/0B1ghKa_MYL6meDBHT2NaZGxkNzQ/view?usp=sharing) | [デモ](https://github.com/cocoa-ai/StylesVisionDemo) | [参考資料](http://sergeykarayev.com/files/1311.3715v3.pdf)
* **RN1015k500** - 写真が撮影された場所を予測します。 [ダウンロード](https://s3.amazonaws.com/aws-bigdata-blog/artifacts/RN1015k500/RN1015k500.mlmodel) | [デモ](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) | [参考資料](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)
* **Nudity** - 画像をNSFW（ヌード）またはSFW（ヌードではない）に分類します。
 [ダウンロード](https://drive.google.com/open?id=0B5TjkH3njRqncDJpdDB1Tkl2S2s) | [デモ](https://github.com/ph1ps/Nudity-CoreML) | [参考資料](https://github.com/yahoo/open_nsfw)
* **TextRecognition (ML Kit)** - ML Kit内蔵モデルを使ってリアルタイムにテキストを認識します。 [ダウンロード]() | [デモ](https://github.com/tucan9389/TextRecognition-MLKit) | [参考資料](https://firebase.google.com/docs/ml-kit/ios/recognize-text)
* **ImageSegmentation** - カメラフレームまたは画像の各ピクセルを、事前定義されたクラスへ分割します。 [ダウンロード](https://developer.apple.com/machine-learning/models/) | [デモ](https://github.com/tucan9389/ImageSegmentation-CoreML) | [参考資料](https://github.com/tensorflow/models/tree/master/research/deeplab)
* **DepthPrediction** - 一枚の画像から奥行きを予測します。 [ダウンロード](https://developer.apple.com/machine-learning/models/) | [デモ](https://github.com/tucan9389/DepthPrediction-CoreML) | [参考資料](https://github.com/iro-cp/FCRN-DepthPrediction)

## 画像 - 画像
*画像を変換するモデルです。*
* **HED** - カラー画像から階層的なエッジを検出します。 [ダウンロード](https://github.com/s1ddok/HED-CoreML/blob/master/HED-CoreML/Models/HED_so.mlmodel) | [デモ](https://github.com/s1ddok/HED-CoreML) | [参考資料](http://dl.acm.org/citation.cfm?id=2654889)
* **AnimeScale2x** - バイキュービック拡大されたアニメ調の画像を処理します。 [ダウンロード](https://github.com/imxieyi/waifu2x-ios/blob/master/waifu2x/models/anime_noise0_model.mlmodel) | [デモ](https://github.com/imxieyi/waifu2x-ios) | [参考資料](https://arxiv.org/abs/1501.00092)

## テキスト - メタデータ／テキスト
*テキストデータを処理するモデルです。*
* **Sentiment Polarity** - 文から肯定的または否定的な感情を予測します。 [ダウンロード](https://github.com/cocoa-ai/SentimentCoreMLDemo/raw/master/SentimentPolarity/Resources/SentimentPolarity.mlmodel) | [デモ](https://github.com/cocoa-ai/SentimentCoreMLDemo) | [参考資料](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)
* **DocumentClassification** - ニュース記事を5カテゴリのいずれかに分類します。 [ダウンロード](https://github.com/toddkramer/DocumentClassifier/blob/master/Sources/DocumentClassification.mlmodel) | [デモ](https://github.com/toddkramer/DocumentClassifier) | [参考資料](https://github.com/toddkramer/DocumentClassifier/)
* **iMessage Spam Detection** - メッセージがスパムかどうかを検出します。 [ダウンロード](https://github.com/gkswamy98/imessage-spam-detection/blob/master/MessageClassifier.mlmodel) | [デモ](https://github.com/gkswamy98/imessage-spam-detection/tree/master) | [参考資料](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)
* **NamesDT** - DecisionTreeClassifierを使って性別を分類します。 [ダウンロード](https://github.com/cocoa-ai/NamesCoreMLDemo/blob/master/Names/Resources/NamesDT.mlmodel) | [デモ](https://github.com/cocoa-ai/NamesCoreMLDemo) | [参考資料](http://nlpforhackers.io/)
* **Personality Detection** - ユーザーの文書（文章）に基づいて性格を予測します。 [ダウンロード](https://github.com/novinfard/profiler-sentiment-analysis/tree/master/ios_app/ProfilerSA/ML%20Models) | [デモ](https://github.com/novinfard/profiler-sentiment-analysis/) | [参考資料](https://github.com/novinfard/profiler-sentiment-analysis/blob/master/dissertation-v6.pdf)
* **BERT for Question answering** - 質問応答向けBERTのSwift Core ML 3実装です。 [ダウンロード](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/BERTSQUADFP16.mlmodel) | [デモ](https://github.com/huggingface/swift-coreml-transformers#-bert) | [参考資料](https://github.com/huggingface/pytorch-transformers#run_squadpy-fine-tuning-on-squad-for-question-answering)
* **GPT-2** - OpenAI GPT-2によるテキスト生成（Core ML 3）です。 [ダウンロード](https://github.com/huggingface/swift-coreml-transformers/blob/master/Resources/gpt2-512.mlmodel) | [デモ](https://github.com/huggingface/swift-coreml-transformers#-gpt-2) | [参考資料](https://github.com/huggingface/pytorch-transformers)
## その他
* **Exermote** - iPhoneを右上腕に装着したときの運動を予測します。 [ダウンロード](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [デモ](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) | [参考資料](http://lausbert.com/2017/08/03/exermote/)
* **GestureAI** - 指定した場所とジャンルに基づいてアーティストを推薦します。 [ダウンロード](https://goo.gl/avdMjD) | [デモ](https://github.com/akimach/GestureAI-CoreML-iOS) | [参考資料](https://github.com/akimach/GestureAI-iOS/tree/master/GestureAI)
* **Artists Recommendation** - 指定した場所とジャンルに基づいてアーティストを推薦します。 [ダウンロード](https://github.com/agnosticdev/Blog-Examples/blob/master/UsingCoreMLtoCreateASongRecommendationEngine/Artist.mlmodel) | [デモ]() | [参考資料](https://www.agnosticdev.com/blog-entry/python/using-scikit-learn-and-coreml-create-music-recommendation-engine)
* **ChordSuggester** - 入力されたコード進行に基づいて、次に来る可能性が最も高いコードを予測します。 [ダウンロード](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/blob/main/MLChordSuggester.mlpackage.zip) | [デモ](https://github.com/carlosmbe/Mac-CoreML-Chord-Suggester/tree/main) | [参考資料](https://medium.com/@huanlui/chordsuggester-i-3a1261d4ea9e)

## 音声処理
* **Streaming ASR** – iOS向けリアルタイムストリーミング音声認識エンジンです。Fast ConformerとCTCを使い、完全にデバイス上で動作します。
  [ダウンロード](https://github.com/Otosaku/OtosakuStreamingASR-iOS/releases) | [デモ](https://github.com/Otosaku/OtosakuStreamingASR-iOS) | [参考資料](https://github.com/Otosaku/OtosakuStreamingASR-iOS)
* **Keyword Spotting (KWS)** – 軽量なCRNNアーキテクチャを使い、モバイル端末向けに最適化されたオンデバイスのキーワード検出エンジンです。
  [ダウンロード](https://github.com/Otosaku/OtosakuKWS-iOS/releases) | [デモ](https://github.com/Otosaku/OtosakuKWS-iOS) | [参考資料](https://github.com/Otosaku/OtosakuKWS-iOS)

# 可視化ツール
*Core MLモデルの可視化を支援するツールです。*
* [Netron](https://lutzroeder.github.io/Netron)

# 対応形式
*Core MLへ変換できるモデル形式と例の一覧です。*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# 注目コレクション
*Core MLへ変換できる機械学習モデルのコレクションです。*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Caffe形式のモデルを集めた大規模な一覧です。
* [TensorFlow Models](https://github.com/tensorflow/models) - TensorFlow向けモデルです。
* [TensorFlow Slim Models](https://github.com/tensorflow/models/tree/master/research/slim/README.md) - TensorFlowモデルの別のコレクションです。
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - MXNetモデルのコレクションです。

*Core MLへ変換できる個別の機械学習モデルです。変換の進展に合わせて一覧を更新します。*
* [LaMem](https://github.com/MiyainNYC/Visual-Memorability-through-Caffe) 画像の記憶されやすさを評価します。
* [ILGnet](https://github.com/BestiVictory/ILGnet) 画像の美的品質を評価します。
* [Colorization](https://github.com/richzhang/colorization) 深層ニューラルネットワークを使って自動的に色付けします。
* [Illustration2Vec](https://github.com/rezoo/illustration2vec) 指定したイラストからタグ群を推定し、意味特徴ベクトルを抽出します。
* [CTPN](https://github.com/tianzhi0549/CTPN) 自然画像内のテキストを検出します。
* [Image Analogy](https://github.com/msracver/Deep-Image-Analogy) 2枚の入力画像間で意味のある密な対応関係を見つけます。
* [iLID](https://github.com/twerkmeister/iLID) 発話言語を自動識別します。
* [Fashion Detection](https://github.com/liuziwei7/fashion-detection) 画像から衣服を検出します。
* [Saliency](https://github.com/imatge-upc/saliency-2016-cvpr) 画像内の顕著領域を予測する従来手法では、手設計の特徴量が使われてきました。
* [Face Detection](https://github.com/DolotovEvgeniy/DeepPyramid) 画像から顔を検出します。
* [mtcnn](https://github.com/CongWeilin/mtcnn-caffe) 顔検出と位置合わせを同時に行います。
* [deephorizon](https://github.com/scottworkman/deephorizon) 一枚の画像から地平線を推定します。

# コントリビューションとライセンス
* [ガイドを参照](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* MITライセンスで配布されています。詳細はLICENSEを参照してください。
