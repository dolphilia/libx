---
title: "margaretmz/awesome-tensorflow-lite"
description: "margaretmz/awesome-tensorflow-lite の正規スナップショット"
licenseSource: "github-margaretmz-awesome-tensorflow-lite-readme-md"
---

<p align="center">
    <img src="https://raw.githubusercontent.com/margaretmz/awesome-tensorflow-lite/d20e763afa1912a82056a75f2a97fa1d97c10e79/images/awesome-tflite.png" alt="awesome tflite" width="500">
</p>


<a id="awesome-tensorflow-lite"></a>
# Awesome TensorFlow Lite [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Twitter](https://img.shields.io/badge/Twitter-%40margaretmz-blue)](https://twitter.com/margaretmz)

[TensorFlow Lite](https://www.tensorflow.org/lite) は、TensorFlowモデルをモバイルおよびエッジデバイス上で実行できるよう変換・最適化するツール群です。現在、40億台を超えるデバイスで稼働しています。TensorFlow 2.xでは、tf.Kerasでモデルを学習し、.tflite形式へ簡単に変換してデプロイできます。また、モデル集から学習済みTensorFlow Liteモデルをダウンロードすることもできます。

TensorFlow Liteモデル、サンプルアプリ、便利なツール、学習資料をまとめたリストです。
* コミュニティがTensorFlow Liteで構築したものを紹介する
* すべてのサンプルを一覧できるようにする
* 知識と学習資料を共有する

貢献する場合は、[こちらのガイドライン](https://github.com/margaretmz/awesome-tensorflow-lite/blob/d20e763afa1912a82056a75f2a97fa1d97c10e79/CONTRIBUTING.md)に従ってPRを送信してください。


 <a id="contents"></a>
 ## 目次
- [過去のお知らせ](#past-announcements)
- [サンプル付きモデル](#models-with-samples)
  - [コンピュータービジョン](#computer-vision)
    - [分類](#classification)
    - [検出](#detection)
    - [セグメンテーション](#segmentation)
    - [スタイル変換](#style-transfer)
    - [生成](#generative)
    - [姿勢推定](#post-estimation)
    - [その他](#other)
  - [テキスト](#text)
  - [音声](#speech)
  - [推薦](#recommendation)
  - [ゲーム](#game)
- [モデル集](#model-zoo)
  - [TensorFlow Liteモデル](#tensorflow-lite-models)
  - [TensorFlowモデル](#tensorflow-models)
- [アイデアと着想](#ideas-and-inspiration)
- [ML Kitのサンプル](#ml-kit-examples)
- [プラグインとSDK](#plugins-and-sdks)
- [便利なリンク](#helpful-links)
- [学習資料](#learning-resources)
  - [ブログ記事](#blog-posts)
  - [書籍](#books)
  - [動画](#videos)
  - [ポッドキャスト](#podcasts)
  - [MOOCs](#moocs)

<a id="past-announcements"></a>
## 過去のお知らせ
TensorFlow Liteの過去の機能発表です。
* [Announcement of the new converter](https://groups.google.com/a/tensorflow.org/d/msg/tflite/Z_h7706dt8Q/sNrjPj4yGgAJ) - [MLIR](https://medium.com/tensorflow/mlir-a-new-intermediate-representation-and-compiler-framework-beba999ed18d)ベースであり、マスクR-CNNやモバイルBERTなど、新しいモデルクラスの変換を可能にし、変換中の機能制御フローとエラーハンドリングをより改善します。夜間ビルドで既に有効になっています\.
* [Android Support Library](https://github.com/tensorflow/tflite-support/tree/master/tensorflow_lite_support/java) - モバイル開発をより容易にします（[Android](https://github.com/tensorflow/examples/blob/master/lite/examples/image_classification/android/EXPLORE_THE_CODE.md)サンプルコード）.
* [Model Maker](https://www.tensorflow.org/lite/guide/model_maker) - 数行のコードで、カスタム[image & text](https://github.com/tensorflow/examples/tree/master/tensorflow_examples/lite/model_maker)分類モデルを作成できます。以下にコミュニティが提供したアイコン分類チュートリアルをご覧ください.
* [On-device training](https://blog.tensorflow.org/2019/12/example-on-device-model-personalization.html) - ついに到着！現在は画像分類用の転移学習に限定されていますが、非常に良いスタートです。公式の[Android](https://github.com/tensorflow/examples/blob/master/lite/examples/model_personalization/README.md)サンプルコードと、コミュニティから提供された別のサンプルコード（[Blog](https://aqibsaeed.github.io/on-device-activity-recognition) | [Android](https://github.com/aqibsaeed/on-device-activity-recognition)）をご覧ください.
* [Hexagon delegate](https://github.com/tensorflow/tensorflow/blob/master/tensorflow/lite/g3doc/performance/hexagon_delegate.md) - Hexagon Delegateを使用して、モバイルおよびエッジデバイスでのモデル推論を高速化する方法について。また、ブログ記事 [Accelerating TensorFlow Lite on Qualcomm Hexagon DSPs](https://blog.tensorflow.org/2019/12/accelerating-tensorflow-lite-on-qualcomm.html)もご確認ください.
* [Model Metadata](https://www.tensorflow.org/lite/convert/metadata) - モデル記述の標準を提供し、同時に[Code Gen and Android Studio ML Model Binding](https://www.tensorflow.org/lite/inference_with_metadata/codegen)を可能にします.

<a id="models-with-samples"></a>
## サンプル付きモデル
アプリ／デバイス実装と参考資料を備えたTensorFlow Liteモデルです。
注: MediaPipeの学習済みTensorFlow Liteモデルも含みます。MediaPipeの有無にかかわらず実装できます。

<a id="computer-vision"></a>
### コンピュータービジョン

<a id="classification"></a>
#### 分類

| Task                            | Model                                                                                                                                                             | App \| Reference                                                                                                                                                                                                                                                                                                                                                                                                       | Source             |
| ------------------------------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------       | -------------------|
| Classification                  | MobileNetV1 ([download](https://storage.googleapis.com/download.tensorflow.org/models/tflite/mobilenet_v1_1.0_224_quant_and_labels.zip))                          | [Android](https://github.com/tensorflow/examples/tree/master/lite/examples/image_classification/android) \| [iOS](https://github.com/tensorflow/examples/tree/master/lite/examples/image_classification/ios) \| [Raspberry Pi](https://github.com/tensorflow/examples/tree/master/lite/examples/image_classification/raspberry_pi) \| [Overview](https://www.tensorflow.org/lite/models/image_classification/overview) | tensorflow.org     |
| Classification                  | MobileNetV2                                                                                                                                                       | Recognize Flowers on Android [Codelab](https://codelabs.developers.google.com/codelabs/recognize-flowers-with-tensorflow-on-android/#0) \| [Android](https://github.com/tensorflow/examples/tree/master/lite/codelabs/flower_classification/android)                                                                                                                                                                   | TensorFlow team    |
| Classification                  | MobileNetV2                                                                                                                                                       | Skin Lesion Detection [Android](https://github.com/AakashKumarNain/skin_cancer_detection/tree/master/demo)                                                                                                                                                                                                                                                                                                             | Community          |
| Classification                  | MobileNetV2                                                                                                                                                       | American Sign Language Detection \| [Colab Notebook](https://colab.research.google.com/drive/1xsunX7Qj_XWBZwcZLyjsKBg4RI0DNo2-?usp=sharing) \| [Android](https://github.com/sayannath/American-Sign-Language-Detection)                                                                                                                                                                                                                                                                                                       | Community          |
| Classification                  | CNN + Quantisation Aware Training                                                                                                                                                       | Stone Paper Scissor Detection [Colab Notebook](https://colab.research.google.com/drive/1Wdso2N_76E8Xxniqd4C6T1sV5BuhKN1o?usp=sharing) \| [Flutter](https://github.com/sayannath/American-Sign-Language-Detection)                                                                                                                                                                                                                                                                                                            | Community          |
| Classification                  | EfficientNet-Lite0 ([download](https://github.com/margaretmz/icon-classifier/blob/master/ml-code/icons-50.tflite))                                                | Icon Classifier [Colab & Android](https://github.com/margaretmz/icon-classifier) \| [tutorial 1](https://medium.com/swlh/icon-classifier-with-tflite-model-maker-9263c0021f72) \| [tutorial 2](https://medium.com/@margaretmz/icon-classifier-android-app-1fc0b727f761)                                                                                                                                                | Community          |

<a id="detection"></a>
#### 検出
| Task | Model | App \| Reference | Source |
| -|-|-|-|
| Object detection                | Quantized COCO SSD MobileNet v1 ([download](https://storage.googleapis.com/download.tensorflow.org/models/tflite/coco_ssd_mobilenet_v1_1.0_quant_2018_06_29.zip)) | [Android](https://github.com/tensorflow/examples/tree/master/lite/examples/object_detection/android) \| [iOS](https://github.com/tensorflow/examples/tree/master/lite/examples/object_detection/ios) \| [Overview](https://www.tensorflow.org/lite/models/object_detection/overview#starter_model)                                                                                                                     | tensorflow.org     |
| Object detection                | YOLO                                                                                                                                                              | [Flutter](https://blog.francium.tech/real-time-object-detection-on-mobile-with-flutter-tensorflow-lite-and-yolo-android-part-a0042c9b62c6) \| [Paper](https://arxiv.org/abs/1506.02640)    | Community          |
| Object detection                             | [YOLOv5](https://tfhub.dev/neso613/lite-model/yolo-v5-tflite/tflite_model/1)     | [Yolov5 Inference ](https://github.com/neso613/yolo-v5-tflite-model)  | Community   |
| Object detection                | MobileNetV2 SSD ([download](https://github.com/google/mediapipe/tree/master/mediapipe/models/ssdlite_object_detection.tflite))                                    | [Reference](https://github.com/google/mediapipe/blob/master/mediapipe/models/object_detection_saved_model/README.md)                                                                                                                                                                                                                                                                                                   | MediaPipe          |
| Object detection                | MobileDet ([Paper](https://arxiv.org/abs/2004.14525))                                    | [Blog post (includes the TFLite conversion process)](https://sayak.dev/mobiledet-optimization/)                                                                                                                                                                                                                                                                                                   | MobileDet is from University of Wisconsin-Madison and Google and the blog post is from the Community          |
| License Plate detection         | SSD MobileNet [(download)](https://github.com/ariG23498/Flutter-License/blob/master/assets/detect.tflite)                                                         | [Flutter](https://github.com/ariG23498/Flutter-License)                                                                                                                                                                                                                                                                                                                                                                | Community          |
| Face detection                  | BlazeFace ([download](https://github.com/google/mediapipe/tree/master/mediapipe/models/face_detection_front.tflite))                                              | [Paper](https://sites.google.com/corp/view/perception-cv4arvr/blazeface)                                                                                                                                                                                                                                                                                                                                               | MediaPipe          |
| Face Authentication                  | [FaceNet](https://arxiv.org/pdf/1503.03832.pdf)                                            | [Flutter](https://github.com/sayannath/Face-Authentication-App)                                                                                                                                                                                                                                                                                                                                               | Community          |
| Hand detection & tracking       | Palm detection & hand landmarks ([download](https://github.com/google/mediapipe/tree/master/mediapipe/models#hand-detection-and-tracking))                        | [Blog post](https://mediapipe.page.link/handgoogleaiblog) \| [Model card](https://mediapipe.page.link/handmc) \|  [Android](https://github.com/supremetech/mediapipe-demo-hand-detection)                                                                                                                                                                                                                                                                                                         | MediaPipe & Community         |

<a id="segmentation"></a>
#### セグメンテーション
| Task | Model | App \| Reference | Source |
| -|-|-|-|
| Segmentation                    | DeepLab V3 ([download](https://storage.googleapis.com/download.tensorflow.org/models/tflite/gpu/deeplabv3_257_mv_gpu.tflite))                                     | [Android & iOS](https://github.com/tensorflow/examples/tree/master/lite/examples/image_segmentation/) \| [Overview](https://www.tensorflow.org/lite/models/segmentation/overview) \| Flutter [Image](https://github.com/kshitizrimal/Flutter-TFLite-Image-Segmentation) \| [Realtime](https://github.com/kshitizrimal/tflite-realtime-flutter) \| [Paper](https://arxiv.org/abs/1706.05587)                            | tf.org & Community |
| Segmentation                    | Different variants of [DeepLab V3 models](https://github.com/tensorflow/models/blob/master/research/deeplab/g3doc/model_zoo.md)                                   |  Models on [TF Hub](https://tfhub.dev/s?module-type=image-segmentation&publisher=sayakpaul) with Colab Notebooks                                                                                                                                                                                                                                                                                                       | Community          |
| Segmentation                    | [DeepLab V3 model](https://tfhub.dev/tensorflow/lite-model/deeplabv3/1/metadata/2?lite-format=tflite)                                   |  [Android](https://github.com/farmaker47/Update_image_segmentation) \| [Tutorial](https://farmaker47.medium.com/use-camerax-with-image-segmentation-android-project-d8656f35cea3)                                                                                                                                                                                                                                                                                                      | Community          |
| Hair Segmentation               | [Download](https://github.com/google/mediapipe/tree/master/mediapipe/models/hair_segmentation.tflite)                                                             | [Paper](https://sites.google.com/corp/view/perception-cv4arvr/hair-segmentation)                                                                                                                                                                                                                                                                                                                                       | MediaPipe          |

<a id="style-transfer"></a>
#### スタイル変換
| Task | Model | App \| Reference | Source |
| -|-|-|-|
| Style transfer                  | [Arbitrary image stylization](https://github.com/tensorflow/magenta/tree/master/magenta/models/arbitrary_image_stylization)                                       | [Overview](https://www.tensorflow.org/lite/models/style_transfer/overview) \| [Android](https://github.com/tensorflow/examples/tree/master/lite/examples/style_transfer/android) \| [Flutter](https://github.com/PuzzleLeaf/flutter_tflite_style_transfer)                                                                                                                                                             | tf.org & Community |
| Style transfer                  | Better-quality style transfer models in .tflite                                                                                                                   |  Models on [TF Hub](https://tfhub.dev/sayakpaul/lite-model/arbitrary-image-stylization-inceptionv3/dr/predict/1) with Colab Notebooks                                                                                                                                                                                                                                                                                  | Community          |
| Video Style Transfer            | Download: <br> [Dynamic range models](https://tfhub.dev/sayakpaul/lite-model/arbitrary-image-stylization-inceptionv3-dynamic-shapes/dr/transfer/1))               | [Android](https://github.com/farmaker47/video_style_transfer) \| [Tutorial](https://medium.com/@farmaker47/android-implementation-of-video-style-transfer-with-tensorflow-lite-models-9338a6d2a3ea)                                                                                                                                                                                                                    | Community          |
| Segmentation & Style transfer   | DeepLabV3 & Style Transfer [models](https://github.com/margaretmz/segmentation-style-transfer/tree/master/ml)                                                     | [Project repo](https://github.com/margaretmz/segmentation-style-transfer)  \| [Android](https://github.com/margaretmz/segmentation-style-transfer/tree/master/android) \| [Tutorial](https://medium.com/google-developer-experts/image-background-stylizer-part-1-project-intro-d68c4547e7e3)                                                                                                                          | Community          |
<a id="generative"></a>
#### 生成
| Task | Model | App \| Reference | Source |
| -|-|-|-|
| GANs                            | [U-GAT-IT](https://github.com/taki0112/UGATIT) (Selfie2Anime)                                                                                                     | [Project repo](https://github.com/margaretmz/selfie2anime-with-tflite) \| [Android](https://github.com/margaretmz/selfie2anime-with-tflite/tree/master/android) \| [Tutorial](https://medium.com/google-developer-experts/selfie2anime-with-tflite-part-1-overview-f97500800ffe)                                                                                                                                       | Community          |
| GANs                            | [White-box CartoonGAN](https://github.com/SystemErrorWang/White-box-Cartoonization) ([download](https://tfhub.dev/sayakpaul/lite-model/cartoongan/dr/1))          | [Project repo](https://github.com/margaretmz/Cartoonizer-with-TFLite) \| [Android](https://github.com/margaretmz/Cartoonizer-with-TFLite/tree/master/android) \| [Tutorial](https://blog.tensorflow.org/2020/09/how-to-create-cartoonizer-with-tf-lite.html)                                                                                                                                                           | Community          |
| GANs - Image Extrapolation | Boundless on [TF Hub](https://tfhub.dev/sayakpaul/lite-model/boundless-quarter/dr/1)                                                     | [Colab Notebook](https://colab.research.google.com/github/sayakpaul/Adventures-in-TensorFlow-Lite/blob/master/Boundless_TFLite.ipynb)  \| [Original Paper](https://arxiv.org/pdf/2003.06792v2.pdf)                                                                                                                           | Community          |
<a id="post-estimation"></a>
#### 姿勢推定
| Task | Model | App \| Reference | Source |
| -|-|-|-|
| Pose estimation                 | Posenet ([download](https://storage.googleapis.com/download.tensorflow.org/models/tflite/posenet_mobilenet_v1_100_257x257_multi_kpt_stripped.tflite))             | [Android](https://github.com/tensorflow/examples/tree/master/lite/examples/posenet/android) \| [iOS](https://github.com/tensorflow/examples/tree/master/lite/examples/posenet/ios) \| [Overview](https://www.tensorflow.org/lite/models/pose_estimation/overview)                                                                                                                                                      | tensorflow.org     |
| Pose Classification based Video Game Control             | MoveNet Lightning ([download](https://github.com/NSTiwari/Video-Game-Control-using-Pose-Classification-and-TensorFlow-Lite/blob/main/movenet_lightning.tflite))             | [Project Repository](https://github.com/NSTiwari/Video-Game-Control-using-Pose-Classification-and-TensorFlow-Lite)                                                                                                                                               | Community     |


<a id="other"></a>
#### その他
| Task | Model | App \| Reference | Source |
| -|-|-|-|
| Low-light image enhancement   | [Models on TF Hub](https://tfhub.dev/sayakpaul/mirnet-fixed/1)                                                     | [Project repo](https://github.com/sayakpaul/MIRNet-TFLite)  \| [Original Paper](https://arxiv.org/pdf/2003.06792v2.pdf) \| [Flutter](https://github.com/sayannath/MIRNet-Flutter)|                                                                                                                           | Community          |
| OCR                             |[Models on TF Hub](https://tfhub.dev/tulasiram58827/lite-model/keras-ocr/dr/2)     | [Project Repository](https://github.com/tulasiram58827/ocr_tflite)  | Community


<a id="text"></a>
### テキスト
| Task                | Model                                                                                                                           | Sample apps                                                                                                                                                                                                                                       | Source             |
| ------------------- |---------------------------------------------------------------------------------------------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| Question & Answer   | DistilBERT                                                                                                                      | [Android](https://github.com/huggingface/tflite-android-transformers/blob/master/bert)                                                                                                                                                            | Hugging Face       |
| Text Generation     | GPT-2 / DistilGPT2                                                                                                              | [Android](https://github.com/huggingface/tflite-android-transformers/blob/master/gpt2)                                                                                                                                                            | Hugging Face       |
| Text Classification | [Download](https://storage.googleapis.com/download.tensorflow.org/models/tflite/text_classification/text_classification.tflite) | [Android](https://github.com/tensorflow/examples/tree/master/lite/examples/text_classification/android) \|[iOS](https://github.com/khurram18/TextClassafication) \| [Flutter](https://github.com/am15h/tflite_flutter_plugin/tree/master/example) | tf.org & Community |
| Text Detection                  | CRAFT Text Detector ([Paper](https://arxiv.org/pdf/1904.01941))                          |[Download](https://github.com/tulasiram58827/craft_tflite/blob/main/models/craft_float_800.tflite?raw=true) \| [Project Repository](https://github.com/tulasiram58827/craft_tflite/)  \| [Blog1-Conversion to TFLite](https://tulasi.dev/craft-in-tflite) \| [Blog2-EAST vs CRAFT](https://sayak.dev/optimizing-text-detectors/) \| [Models on TF Hub](https://tfhub.dev/tulasiram58827/lite-model/craft-text-detector/dr/1)   \| Android (Coming Soon)                                 | Community          |
| Text Detection                  | EAST Text Detector ([Paper](https://arxiv.org/abs/1704.03155))                          |[Models on TF Hub](https://tfhub.dev/sayakpaul/lite-model/east-text-detector/dr/1) \| [Conversion and Inference Notebook](https://colab.research.google.com/github/sayakpaul/Adventures-in-TensorFlow-Lite/blob/master/EAST_TFLite.ipynb)  | Community          |

<a id="speech"></a>
### 音声
| Task               | Model                              | App \| Reference                                                                      | Source       |
| ------------------ |------------------------------------| ------------------------------------------------------------------------------------- | ------------ |
| Speech Recognition | DeepSpeech                         | [Reference](https://github.com/mozilla/DeepSpeech/tree/master/native_client/java)     | Mozilla      |
| Speech Recognition | CONFORMER                          | [Inference](https://github.com/neso613/ASR_TFLite)  [Android](https://github.com/windmaple/tflite-asr) | Community |
| Speech Synthesis   | Tacotron-2, FastSpeech2, MB-Melgan | [Android](https://github.com/TensorSpeech/TensorflowTTS/tree/master/examples/android) | TensorSpeech |
| Speech Synthesis(TTS)   | Tacotron2, FastSpeech2, MelGAN, MB-MelGAN, HiFi-GAN, Parallel WaveGAN | [Inference Notebook](https://github.com/tulasiram58827/TTS_TFLite/blob/main/End_to_End_TTS.ipynb)      \| [Project Repository](https://github.com/tulasiram58827/TTS_TFLite/)  | Community  |

<a id="recommendation"></a>
### 推薦
| Task               | Model                              | App \| Reference                                                                      | Source       |
| ------------------ |------------------------------------| ------------------------------------------------------------------------------------- | ------------ |
| On-device Recommendation | [Dual-Encoder](https://github.com/tensorflow/examples/tree/master/lite/examples/recommendation/ml)                 | [Android](https://github.com/tensorflow/examples/tree/master/lite/examples/recommendation/android) \| [iOS](https://github.com/zhuzilin/on-device_recommendation_tflite) \| [Reference](https://blog.tensorflow.org/2020/09/introduction-to-tflite-on-device-recommendation.html)     | tf.org & Community      |

<a id="game"></a>
### ゲーム
| Task               | Model                              | App \| Reference                                                                      | Source       |
| ------------------ |------------------------------------| ------------------------------------------------------------------------------------- | ------------ |
| Game agent | Reinforcement learning                 | [Flutter](https://github.com/windmaple/planestrike-flutter) \| [Tutorial](https://windmaple.medium.com/)     | Community      |



<a id="model-zoo"></a>
## モデル集

<a id="tensorflow-lite-models"></a>
### TensorFlow Liteモデル
These are the TensorFlow Lite models that could be implemented in apps and things:
* [MobileNet](https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet/README.md) - 事前学習済みのMobileNet v2およびv3モデル.
* TensorFlow Lite models
  * [TensorFlow Lite models](https://www.tensorflow.org/lite/models) - 公式AndroidおよびiOSのサンプルコードを提供しています.
  * [Pretrained models](https://www.tensorflow.org/lite/guide/hosted_models) - 量子化および浮動小数点バリアントを提供しています.
  * [TensorFlow Hub](https://tfhub.dev/) - 「モデル形式 = TFLite」と設定することで、TensorFlow Liteモデルを検索できます.

<a id="tensorflow-models"></a>
### TensorFlowモデル
These are TensorFlow models that could be converted to .tflite and then implemented in apps and things:
* [TensorFlow models](https://github.com/tensorflow/models/tree/master/official) - 公式TensorFlowモデル.
* [Tensorflow detection model zoo](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md) - COCO、KITTI、AVA v2.1、iNaturalist Speciesデータセットで事前学習済みです.

<a id="ideas-and-inspiration"></a>
## アイデアと着想
* [E2E TFLite Tutorials](https://github.com/ml-gde/e2e-tflite-tutorials) - このリポジトリをチェックして、アプリアイデアやチュートリアルプロジェクトのサポートを受けてください。プロジェクトが完了したら、TensorFlow Liteモデル、サンプルコード、チュートリアルのリンクがこの素晴らしいリストに追加されます.

<a id="ml-kit-examples"></a>
## ML Kitのサンプル
[ML Kit](https://developers.google.com/ml-kit) is a mobile SDK that brings Google's ML expertise to mobile developers.
* 2019-10-01 [ML Kit Translate demo](https://codelabs.developers.google.com/codelabs/mlkit-android-translate/#0) - Material Design [Android](https://github.com/googlecodelabs/mlkit-android/tree/master/translate)（Kotlin）サンプルを用いたチュートリアル - FirebaseのML Kitで、ライブカメラからのテキスト認識・分類・言語識別を行う.
* 2019-03-13 [Computer Vision with ML Kit - Flutter In Focus](https://youtu.be/ymyYUCrJnxU).
* 2019-02-09 [Flutter + MLKit: Business Card Mail Extractor](https://medium.com/flutter-community/flutter-mlkit-8039ec66b6a)  - ブログ記事に含まれる[Flutter](https://github.com/DaemonLoki/Business-Card-Mail-Extractor)サンプルコード.
* 2019-02-08 [From TensorFlow to ML Kit: Power your Android application with machine learning](https://speakerdeck.com/jinqian/from-tensorflow-to-ml-kit-power-your-android-application-with-machine-learning) - [Android](https://github.com/xebia-france/magritte)（Kotlin）サンプルコードを含む講演.
* 2018-08-07 [Building a Custom Machine Learning Model on Android with TensorFlow Lite](https://medium.com/over-engineering/building-a-custom-machine-learning-model-on-android-with-tensorflow-lite-26447e53abf2).
* 2018-07-20 [ML Kit and Face Detection in Flutter](https://flatteredwithflutter.com/ml-kit-and-face-detection-in-flutter/).
* 2018-07-27 [ML Kit on Android 4: Landmark Detection](https://medium.com/google-developer-experts/exploring-firebase-mlkit-on-android-landmark-detection-part-four-5e86b8deac3a).
* 2018-07-28 [ML Kit on Android 3: Barcode Scanning](https://medium.com/google-developer-experts/exploring-firebase-mlkit-on-android-barcode-scanning-part-three-cc6f5921a108).
* 2018-05-31 [ML Kit on Android 2: Face Detection](https://medium.com/google-developer-experts/exploring-firebase-mlkit-on-android-face-detection-part-two-de7e307c52e0).
* 2018-05-22 [ML Kit on Android 1: Intro](https://medium.com/google-developer-experts/exploring-firebase-mlkit-on-android-introducing-mlkit-part-one-98fcfedbeee0).

<a id="plugins-and-sdks"></a>
## プラグインとSDK
* [Edge Impulse](https://www.edgeimpulse.com/) - クラウド上でエッジデバイス用のTensorFlow Liteモデルを訓練するための[@EdgeImpulse](https://twitter.com/EdgeImpulse)が作成されました.
* [MediaPipe](https://github.com/google/mediapipe) - Google AIが提供するクロスプラットフォーム（モバイル、デスクトップ、エッジTPU）AIパイプライン。（PM [Ming Yong](https://twitter.com/realmgyong)）| [MediaPipe examples](https://mediapipe.readthedocs.io/en/latest/examples.html).
* [Coral Edge TPU](https://coral.ai/) - Googleのエッジハードウェア．[Coral Edge TPU examples](https://coral.ai/examples/).
* [TensorFlow Lite Flutter Plugin](https://github.com/am15h/tflite_flutter_plugin/) - FlutterアプリでのTensorFlow Liteインタープリタのアクセスと推論を実行するためのDart APIを提供。[tflite_flutter on pub.dev](https://pub.dev/packages/tflite_flutter).

<a id="helpful-links"></a>
## 便利なリンク
* [Netron](https://github.com/lutzroeder/netron) - モデルを可視化するためのツール
* [AI benchmark](http://ai-benchmark.com/tests.html) - スマートフォン上でコンピュータビジョンモデルをベンチマークするためのウェブサイト
* [Performance measurement](https://www.tensorflow.org/lite/performance/measurement) - AndroidおよびiOS上でモデルのパフォーマンスを測定する方法
* [Material design guidelines for ML](https://material.io/collections/machine-learning/patterns-for-machine-learning-powered-features.html) - 機械学習を活用した機能を設計する方法。良い例： [ML Kit Showcase App](https://github.com/firebase/mlkit-material-android)。
* [The People + AI Guide book](https://pair.withgoogle.com/) - 人間中心のAI製品を設計する方法を学ぶ
* [Adventures in TensorFlow Lite](https://github.com/sayakpaul/Adventures-in-TensorFlow-Lite) - TensorFlow Liteにおける非自明な変換プロセスおよび一般の探索を示すリポジトリ
* [TFProfiler](https://github.com/iglaweb/TFProfiler) - AndroidベースのアプリでTensorFlow Liteモデルのプロファイリングおよびスマートフォンでのパフォーマンス測定を行う
* [TensorFlow Lite for Microcontrollers](https://www.tensorflow.org/lite/microcontrollers)
* [TensorFlow Lite Examples - Android](https://github.com/dailystudio/tensorflow-lite-examples-android) - TensorFlow公式ウェブサイトに含まれるすべてのTensorFlow Lite Android例をリファクタリング・リライトしたリポジトリ
* [Tensorflow-lite-kotlin-samples](https://github.com/SunitRoy2703/Tensorflow-lite-kotlin-samples) - Kotlinで実装された異なる種類の [example apps](https://www.tensorflow.org/lite/examples) の実装を示すTensorFlow Lite Android例アプリのコレクション


<a id="learning-resources"></a>
## 学習資料
Interested but not sure how to get started? Here are some learning resources that will help you whether you are a beginner or a practitioner in the field for a while.

<a id="blog-posts"></a>
### ブログ記事

* 2021-11-09 [On-device training in TensorFlow Lite](https://blog.tensorflow.org/2021/11/on-device-training-in-tensorflow-lite.html)
* 2021-09-27 [Optical character recognition with TensorFlow Lite: A new example app](https://blog.tensorflow.org/2021/09/blog.tensorflow.org202109optical-character-recognition.html)
* 2021-06-16 [https://blog.tensorflow.org/2021/06/easier-object-detection-on-mobile-with-tf-lite.html](https://blog.tensorflow.org/2021/11/on-device-training-in-tensorflow-lite.html)
* 2020-12-29 [YOLOv3 to TensorFlow Lite Conversion](https://medium.com/analytics-vidhya/yolov3-to-tensorflow-lite-conversion-4602cec5c239) - Nitin Tiwariによって作成
* 2020-04-20 [What is new in TensorFlow Lite](https://blog.tensorflow.org/2020/04/whats-new-in-tensorflow-lite-from-devsummit-2020.html) - Khanh LeVietによって作成
* 2020-04-17 [Optimizing style transfer to run on mobile with TFLite](https://blog.tensorflow.org/2020/04/optimizing-style-transfer-to-run-on-mobile-with-tflite.html) - Khanh LeVietおよびLuiz Gustavo Martinsによって作成
* 2020-04-14 [How TensorFlow Lite helps you from prototype to product](https://blog.tensorflow.org/2020/04/how-tensorflow-lite-helps-you-from-prototype-to-product.html) -  Khanh LeVietによって作成
* 2019-11-08 [Getting  Started with ML on MCUs with TensorFlow](https://blog.particle.io/2019/11/08/particle-machine-learning-101/) -  Brandon Satromによって作成
* 2019-08-05 [TensorFlow Model Optimization Toolkit — float16 quantization halves model size](https://blog.tensorflow.org/2019/08/tensorflow-model-optimization-toolkit_5.html) - TensorFlowチームによって作成
* 2018-07-13 [Training and serving a real-time mobile object detector in 30 minutes with Cloud TPUs](https://blog.tensorflow.org/2018/07/training-and-serving-realtime-mobile-object-detector-cloud-tpus.html) - Sara Robinson、Aakanksha Chowdhery、およびJonathan Huangによって作成
* 2018-06-11 - [Why the Future of Machine Learning is Tiny](https://petewarden.com/2018/06/11/why-the-future-of-machine-learning-is-tiny/) - Pete Wardenによって作成
* 2018-03-30 - [Using TensorFlow Lite on Android](https://blog.tensorflow.org/2018/03/using-tensorflow-lite-on-android.html)） - Laurence Moroneyによって作成

<a id="books"></a>
### 書籍
* 2021-12-01 [AI and Machine Learning On-Device Development](https://learning.oreilly.com/library/view/ai-and-machine/9781098101732/) （早期アクセス） - Laurence Moroneyによって作成（[@lmoroney](https://twitter.com/lmoroney)）
* 2020-10-01 [AI and Machine Learning for Coders](https://learning.oreilly.com/library/view/ai-and-machine/9781492078180/) - Laurence Moroneyによって作成（[@lmoroney](https://twitter.com/lmoroney)）
* 2020-04-06 [Mobile Deep Learning with TensorFlow Lite, ML Kit and Flutter](https://www.packtpub.com/product/mobile-deep-learning-with-tensorflow-lite-ml-kit-and-flutter/9781789611212): 実世界のスケーラブルなプロジェクトを構築して、AndroidおよびiOS（[GitHub](https://github.com/PacktPublishing/Mobile-Deep-Learning-Projects)）上で端末から端末までをカバーするニューラルネットワークを実装する - Anubhav Singh（[@xprilion](https://github.com/xprilion)）とRimjhim Bhadani（[@Rimjhim28](https://github.com/Rimjhim28)）による。
* 2020-03-01 Raspberry Pi for Computer Vision ([Complete Bundle](https://www.pyimagesearch.com/raspberry-pi-for-computer-vision) | [TOC](https://www.pyimagesearch.com/2019/04/05/table-of-contents-raspberry-pi-for-computer-vision/)) - PyImageSearchチームによる：Adrian Rosebrock（[@PyImageSearch](https://twitter.com/PyImageSearch)）、David Hoffman、Asbhishek Thanki、Sayak Paul（[@RisingSayak](https://twitter.com/RisingSayak)）、およびDavid Mcduffee。
* 2019-12-01 [TinyML](http://shop.oreilly.com/product/0636920254508.do) - Pete Warden（[@petewarden](https://twitter.com/petewarden)）とDaniel Situnayake（[@dansitu](https://twitter.com/dansitu)）による。
* 2019-10-01 [Practical Deep Learning for Cloud, Mobile, and Edge](https://www.practicaldeeplearning.ai/) - Anirudh Koul（[@AnirudhKoul](https://twitter.com/AnirudhKoul)）、Siddha Ganju（[@SiddhaGanju](https://twitter.com/SiddhaGanju)）、およびMeher Kasam（[@MeherKasam](https://twitter.com/MeherKasam)）による。

<a id="videos"></a>
### 動画
* 2021-10-06 [Contributing to TensorFlow Lite with Sunit Roy](https://youtu.be/sZayUoWW6nE) （Hacktoberfest 2021）
* 2020-07-25 [Android ML by Hoi Lam](https://youtu.be/m_bEh8YifnQ) （GDG Kolkata メートアップ）。
* 2020-04-01 [Easy on-device ML from prototype to production](https://youtu.be/ALxWJoh_BHw) （TF Dev Summit 2020）。
* 2020-03-11 [TensorFlow Lite: ML for mobile and IoT devices](https://youtu.be/27Zx-4GOQA8) （TF Dev Summit 2020）。
* 2019-10-31 [Keynote - TensorFlow Lite: ML for mobile and IoT devices](https://youtu.be/zjDGAiLqGk8).
* 2019-10-31 [TensorFlow Lite: Solution for running ML on-device](https://youtu.be/0SpZy7iouFU).
* 2019-10-31 [TensorFlow model optimization: Quantization and pruning](https://youtu.be/3JWRVx1OKQQ).
* 2019-10-29 [Inside TensorFlow: TensorFlow Lite](https://youtu.be/gHN0jDbJz8E).
* 2018-04-18 [TensorFlow Lite for Android (Coding TensorFlow)](https://youtu.be/JnhW5tQ_7Vo).

<a id="podcasts"></a>
### ポッドキャスト
* 2020-08-08 [Talking Machine Learning with Hoi Lam](https://anchor.fm/talkingwithapples/episodes/Talking-Machine-Learning-with-Hoi-Lam-eiaj7v).

<a id="moocs"></a>
### MOOC
* [Introduction to TensorFlow Lite](https://www.udacity.com/course/intro-to-tensorflow-lite--ud190) - Daniel Situnayake（@dansitu）によるUdacityコース、Paige Bailey（[@DynamicWebPaige](https://twitter.com/DynamicWebPaige)）、およびJuan Delgadoによる。
* [Device-based Models with TensorFlow Lite](https://www.coursera.org/learn/device-based-models-tensorflow) - Laurence Moroney（[@lmoroney](https://twitter.com/lmoroney)）によるCourseraコース。
* [The Future of ML is Tiny and Bright](https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning) - ハーバード大学とGoogleが共同で開発したedXコースシリーズ。講師：Vijay Janapa Reddi、Laurence Moroney、およびPete Warden。
