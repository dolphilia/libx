---
title: "Awesome VLM Architectures"
description: "VLM Architecturesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-gokayfem-awesome-vlm-architectures-readme-md"
---

# Awesome VLM Architectures

VLM Architecturesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

- [引用](#citation)
- [モデル](#models)
- [リリース年表](#release-timeline)
- [アーキテクチャ](#architectures)
- [重要な参考資料](#important-references)

## 引用 <a id="citation"></a>

このリポジトリが役立つ場合は、以下の情報で引用できます。個別モデルの主張には原論文も引用してください。このカタログは文献案内であり、原資料の代替ではありません。

[Gökay Aydoğan](https://www.researchgate.net/profile/Goekay-Aydogan-2)が[fal.ai](https://fal.ai)で作成・保守しています（[ORCID](https://orcid.org/0000-0002-2343-9433)、[gokay@fal.ai](mailto:gokay@fal.ai)）。

構成図は[図版クレジット](https://github.com/gokayfem/awesome-vlm-architectures/blob/74897b3aa1df6d5fb262ffc62972c822a15b36b2/assets/architectures/CREDITS.md)で個別に帰属を示し、[図版通知](https://github.com/gokayfem/awesome-vlm-architectures/blob/74897b3aa1df6d5fb262ffc62972c822a15b36b2/assets/architectures/FIGURE_NOTICE.md)記載の権利に従います。

<details>
<summary>📚 <i>BibTeX</i></summary>

```bibtex
@misc{aydogan2024awesomevlmarchitectures,
  author       = {Gökay Aydoğan},
  title        = {Awesome VLM Architectures},
  year         = {2024},
  howpublished = {\url{https://github.com/gokayfem/awesome-vlm-architectures}},
  note         = {GitHub repository, fal.ai},
  url          = {https://github.com/gokayfem/awesome-vlm-architectures}
}
```

</details>

## モデル <a id="models"></a>

すべてのアーキテクチャパネルはリリース日の新しい順です。同日公開のモデルは編集上のカタログ順を維持します。

<details>
<summary>🧭 <i>Chronological Model Index (155 architectures, newest first)</i></summary>

**2026:** [MODUS](#modus-decoder-only-any-to-any-multimodal-modeling) | [Argus-Unified](#argus-unified-economical-understanding-and-generation) | [Kimi K3](#kimi-k3-kimi-delta-attention-at-trillion-parameter-scale) | [Mage-VL](#mage-vl-codec-native-streaming-multimodality) | [Inkling](#inkling-relative-position-multimodal-mixture-of-experts) | [Hy-Embodied-VLM](#hy-embodied-vlm-sparse-moe-reasoning-for-physical-agents) | [MonkeyOCRv2](#monkeyocrv2-document-native-visual-text-pretraining) | [MiniMax M3](#minimax-m3-native-multimodality-with-sparse-long-context-attention) | [InternVideo3](#internvideo3-multimodal-contextual-reasoning-for-video-agents) | [Keye-VL 2.0](#keye-vl-20-sparse-attention-for-long-video-agents) | [Zamba2-VL](#zamba2-vl-hybrid-state-space-vision-language-modeling) | [Cosmos 3](#cosmos-3-omnimodal-world-modeling-with-mixture-of-transformers) | [Lance](#lance-unified-image-and-video-understanding-generation-and-editing) | [ZAYA1-VL](#zaya1-vl-vision-specialized-compressed-convolutional-attention) | [Falcon Perception](#falcon-perception-early-fusion-grounding-segmentation-and-ocr) | [GLM-5V-Turbo](#glm-5v-turbo-native-multimodal-agency) | [PLaMo 2.1-VL](#plamo-21-vl-lightweight-japanese-vision-language-modeling) | [EXAONE 4.5](#exaone-45-native-multimodal-pretraining-for-documents) | [BidirLM and BidirLM-Omni](#bidirlm-and-bidirlm-omni-causal-decoders-as-multimodal-encoders) | [Gemma 4](#gemma-4-open-weight-native-multimodal-models) | [Penguin-VL](#penguin-vl-efficient-vlms-with-llm-based-vision-encoders) | [Phi-4-Reasoning-Vision](#phi-4-reasoning-vision-compact-multimodal-reasoning) | [V-SONAR and V-LCM](#v-sonar-and-v-lcm-vision-language-modeling-in-concept-space) | [Qwen3.5](#qwen35-native-multimodal-hybrid-attention-models) | [Youtu-VL](#youtu-vl-unified-autoregressive-supervision-for-dense-vision) | [Kimi K2.5 and K2.6](#kimi-k25-and-k26-native-multimodal-agentic-moe) | [Step3-VL-10B](#step3-vl-10b-language-aligned-perception-with-16-token-compression)

**2025:** [ERNIE 5.0](#ernie-50-unified-autoregressive-omnimodal-mixture-of-experts) | [DeepSeek-OCR](#deepseek-ocr-visual-context-compression-through-deepencoder) | [PaddleOCR-VL](#paddleocr-vl-ultra-compact-multilingual-document-parsing) | [Qwen3-VL](#qwen3-vl-deepstack-vision-language-models) | [Step3](#step3-model-system-co-design-for-cost-effective-multimodal-intelligence) | [GLM-4.1V-Thinking](#glm-41v-thinking-general-purpose-multimodal-reasoning-through-curriculum-sampled-rl) | [ERNIE 4.5-VL](#ernie-45-vl-heterogeneous-modality-mixture-of-experts) | [MiMo-VL](#mimo-vl-multimodal-pretraining-with-mixed-on-policy-reinforcement-learning) | [BAGEL](#bagel-a-mixture-of-transformer-experts-for-unified-understanding-and-generation) | [Seed1.5-VL](#seed15-vl-sparse-moe-multimodal-understanding-and-agentic-reasoning) | [InternVL3 and InternVL3.5](#internvl3-and-internvl35-native-multimodal-pretraining-and-adaptive-resolution) | [Kimi-VL](#kimi-vl-native-resolution-vision-with-a-sparse-moe-decoder) | [Llama 4 Scout and Maverick](#llama-4-scout-and-maverick-native-multimodal-mixture-of-experts-models) | [Qwen2.5-Omni](#qwen25-omni-streaming-multimodal-perception-and-speech-generation) | [Gemma 3](#gemma-3-long-context-multimodality-with-efficient-interleaved-attention) | [Aya Vision](#aya-vision-multilingual-multimodality-through-cross-modal-model-merging) | [Phi-4-multimodal](#phi-4-multimodal-text-vision-and-speech-through-mixture-of-loras) | [SigLIP 2](#siglip-2-multilingual-vision-language-encoders-with-native-aspect-ratio-support) | [EVEv2](#evev2-improved-baselines-for-encoder-free-vision-language-models) | [Qwen2.5-VL](#qwen25-vl-enhanced-vision-language-capabilities-in-the-qwen-series) | [VideoLLaMA 3](#videollama-3-frontier-multimodal-foundation-models-for-image-and-video-understanding) | [UI-TARS](#ui-tars-pioneering-automated-gui-interaction-with-native-agents) | [MiniMax-01](#minimax-01-scaling-foundation-models-with-lightning-attention) | [MiniCPM-o-2.6](#minicpm-o-26-a-gpt-4o-level-mllm-for-vision-speech-and-multimodal-live-streaming) | [Eagle 2](#eagle-2-building-post-training-data-strategies-from-scratch-for-frontier-vision-language-models) | [Sa2VA](#sa2va-marrying-sam2-with-llava-for-dense-grounded-understanding-of-images-and-videos)

**2024:** [VideoChat-Flash](#videochat-flash-hierarchical-compression-for-long-context-video-modeling) | [OmniVLM](#omnivlm-a-token-compressed-sub-billion-parameter-vision-language-model-for-efficient-on-device-inference) | [Apollo](#apollo-an-exploration-of-video-understanding-in-large-multimodal-models) | [DeepSeek-VL2](#deepseek-vl2-mixture-of-experts-vision-language-models-for-advanced-multimodal-understanding) | [Maya](#maya-an-instruction-finetuned-multilingual-multimodal-model) | [InternVL 2.5](#internvl-25-expanding-performance-boundaries-of-open-source-multimodal-models-with-model-data-and-test-time-scaling) | [PaliGemma 2](#paligemma-2-a-family-of-versatile-vlms-for-transfer) | [ShowUI](#showui-vision-language-action-modeling-for-gui-agents) | [SmolVLM](#smolvlm-a-small-efficient-and-open-source-vision-language-model) | [AIMv2](#aimv2-multimodal-autoregressive-pre-training-of-large-vision-encoders) | [LLaVA-CoT](#llava-cot-let-vision-language-models-reason-step-by-step) | [LLM2CLIP](#llm2clip-powerful-language-model-unlocks-richer-visual-representation) | [Tarsier2](#tarsier2-advancing-large-vision-language-models-from-detailed-video-description-to-comprehensive-video-understanding) | [Janus and Janus-Pro](#janus-and-janus-pro-decoupled-visual-understanding-and-generation) | [ARIA](#aria-an-open-multimodal-native-mixture-of-experts-model) | [Emu3](#emu3-next-token-prediction-across-text-image-and-video) | [Molmo and PixMo](#molmo-and-pixmo-open-weights-open-data-and-grounded-pointing) | [Llama 3.2-Vision](#llama-32-vision-enhanced-multimodal-capabilities-built-on-llama-3) | [NVLM](#nvlm-open-frontier-class-multimodal-llms) | [Pixtral 12B](#pixtral-12b-a-cutting-edge-open-multimodal-language-model) | [VILA-U](#vila-u-fully-autoregressive-visual-understanding-and-generation) | [Qwen2-VL](#qwen2-vl-a-powerful-open-source-vision-language-model-for-image-and-video-understanding) | [EAGLE](#eagle-exploring-the-design-space-for-multimodal-llms-with-mixture-of-encoders) | [Show-o](#show-o-autoregressive-language-and-discrete-diffusion-vision-in-one-transformer) | [Idefics3-8B](#idefics3-8b-building-and-better-understanding-vision-language-models) | [Transfusion](#transfusion-next-token-text-prediction-and-continuous-image-diffusion) | [mPLUG-Owl3](#mplug-owl3-hyper-attention-for-long-image-sequences) | [VITA](#vita-towards-open-source-interactive-omni-multimodal-llm) | [LLaVA-OneVision](#llava-onevision-easy-visual-task-transfer) | [VILA²](#vila²-vila-augmented-vila) | [INF-LLaVA](#inf-llava-high-resolution-image-perception-for-multimodal-large-language-models) | [SlowFast-LLaVA](#slowfast-llava-a-strong-training-free-baseline-for-video-large-language-models) | [EVLM](#evlm-an-efficient-vision-language-model-for-visual-understanding) | [InternLM-XComposer-2.5](#internlm-xcomposer-25-a-versatile-large-vision-language-model-supporting-long-contextual-input-and-output) | [OMG-LLaVA](#omg-llava-bridging-image-level-object-level-pixel-level-reasoning-and-understanding) | [Cambrian-1](#cambrian-1-vision-centric-multimodal-llms) | [EVE](#eve-unveiling-encoder-free-vision-language-models) | [Ovis](#ovis-structural-visual-text-embedding-alignment) | [Parrot](#parrot-multilingual-visual-instruction-tuning) | [ConvLLaVA](#convllava-hierarchical-backbones-as-visual-encoder-for-large-multimodal-models) | [Phi-3-Vision and Phi-3.5-Vision](#phi-3-vision-and-phi-35-vision-compact-long-context-multimodal-reasoning) | [CogVLM2](#cogvlm2-enhanced-vision-language-models-for-image-and-video-understanding) | [Chameleon](#chameleon-mixed-modal-early-fusion-foundation-models) | [PaliGemma](#paligemma-a-versatile-and-transferable-3b-vision-language-model) | [xGen-MM (BLIP-3)](#xgen-mm-blip-3-an-open-source-framework-for-building-powerful-and-responsible-large-multimodal-models) | [MANTIS](#mantis-mastering-multi-image-understanding-through-interleaved-instruction-tuning) | [Moondream-next](#moondream-next-compact-vision-language-model-with-enhanced-capabilities) | [Idefics2](#idefics2) | [InternLM-XComposer2-4KHD](#internlm-xcomposer2-4khd-a-pioneering-large-vision-language-model-handling-resolutions-from-336-pixels-to-4k-hd) | [MM1](#mm1-methods-analysis-and-insights-from-multimodal-pre-training) | [DeepSeek-VL](#deepseek-vl-towards-real-world-vision-language-understanding) | [AnyGPT](#anygpt-unified-any-to-any-multimodal-modeling-with-discrete-tokens) | [SPHINX-X](#sphinx-x-scaling-data-and-parameters-for-a-family-of-multi-modal-large-language-models) | [LLaVA 1.6](#llava-16-llava-next-improved-reasoning-ocr-and-world-knowledge) | [MiniCPM-V](#minicpm-v-a-gpt-4v-level-mllm-on-your-phone) | [MouSi](#mousi-poly-visual-expert-vision-language-models) | [InternLM-XComposer2](#internlm-xcomposer2-mastering-free-form-text-image-composition-and-comprehension-in-vision-language-large-model) | [MoE-LLaVA](#moe-llava-mixture-of-experts-for-large-vision-language-models) | [moondream1 and moondream2](#moondream1-and-moondream2) | [FireLLaVA](#firellava) | [COSMO](#cosmo-contrastive-streamlined-multimodal-model-with-interleaved-pre-training)

**2023:** [TinyGPT-V](#tinygpt-v-efficient-multimodal-large-language-model-via-small-backbones) | [MobileVLM](#mobilevlm-a-fast-strong-and-open-vision-language-assistant-for-mobile-devices) | [Alpha-CLIP](#alpha-clip-a-clip-model-focusing-on-wherever-you-want) | [Nous-Hermes-2-Vision - Mistral 7B](#nous-hermes-2-vision---mistral-7b) | [SPHINX](#sphinx-the-joint-mixing-of-weights-tasks-and-visual-embeddings-for-multi-modal-large-language-models) | [Florence-2](#florence-2-a-deep-dive-into-its-unified-architecture-and-multi-task-capabilities) | [u-LLaVA](#u-llava-unifying-multi-modal-tasks-via-large-language-model) | [LLaVA-Plus](#llava-plus-learning-to-use-tools-for-creating-multimodal-agents) | [OtterHD](#otterhd-a-high-resolution-multi-modality-model) | [CoVLM](#covlm-composing-visual-entities-and-relationships-in-large-language-models-via-communicative-decoding) | [GLaMM](#glamm-pixel-grounding-large-multimodal-model) | [Fuyu-8B](#fuyu-8b-a-multimodal-architecture-for-ai-agents) | [PaLI-3 Vision Language Models](#pali-3-vision-language-models-smaller-faster-stronger) | [MiniGPT-v2](#minigpt-v2-large-language-model-as-a-unified-interface-for-vision-language-multi-task-learning) | [BakLLaVA](#bakllava) | [Ferret](#ferret-refer-and-ground-anything-anywhere-at-any-granularity) | [LLaVA 1.5](#llava-15-improved-baselines-with-visual-instruction-tuning) | [CogVLM](#cogvlm-visual-expert-for-pretrained-language-models) | [MetaCLIP](#metaclip-demystifying-clip-data) | [Qwen-VL](#qwen-vl-a-versatile-vision-language-model-for-understanding-localization-text-reading-and-beyond) | [IDEFICS](#idefics) | [BLIVA](#bliva-a-simple-multimodal-llm-for-better-handling-of-text-rich-visual-questions) | [KOSMOS-2](#kosmos-2-grounding-multimodal-large-language-models-to-the-world) | [LaVIN](#lavin-cheap-and-quick-efficient-vision-language-instruction-tuning-for-large-language-models) | [InstructBLIP](#instructblip-towards-general-purpose-vision-language-models-with-instruction-tuning) | [ImageBind](#imagebind-one-embedding-space-to-bind-them-all) | [LLaVA](#llava-large-language-and-vision-assistant---visual-instruction-tuning) | [MiniGPT-4](#minigpt-4-enhancing-vision-language-understanding-with-advanced-large-language-models) | [SigLIP](#siglip-sigmoid-loss-for-language-image-pre-training) | [OpenFlamingo](#openflamingo-an-open-source-framework-for-training-large-autoregressive-vision-language-models) | [PaLM-E](#palm-e-an-embodied-multimodal-language-model) | [KOSMOS-1](#kosmos-1-language-is-not-all-you-need-aligning-perception-with-language-models) | [BLIP-2](#blip-2-bootstrapping-language-image-pre-training-with-frozen-image-encoders-and-large-language-models)

**2022:** [MULTIINSTRUCT](#multiinstruct-improving-multi-modal-zero-shot-learning-via-instruction-tuning) | [PaLI](#pali-a-jointly-scaled-multilingual-language-image-model) | [Flamingo](#flamingo-a-visual-language-model-for-few-shot-learning) | [BLIP](#blip-bootstrapping-language-image-pre-training)

**2021:** [GLIP](#glip-grounded-language-image-pre-training) | [FROZEN](#frozen-multimodal-few-shot-learning-with-frozen-language-models) | [CLIP](#clip-contrastive-language-image-pre-training)

**2020:** [ViT](#vit-an-image-is-worth-16x16-words-transformers-for-image-recognition-at-scale)

</details>

## リリース年表 <a id="release-timeline"></a>

日付は確認できる最初の公式モデルリリースを使い、ない場合は論文のarXiv v1投稿または最初の技術報告を使います。同系列のポイントリリースは最初のアーキテクチャ公開へ統合し、同日項目はカタログ順を維持します。



<details>
<summary>🗓️ <i>Release Timeline (155 architectures, newest first)</i></summary>

| 日付 | アーキテクチャ | 特徴的な貢献 |
| --- | --- | --- |
| 2026-07-28 | MODUS | MODUSの特徴的なアーキテクチャ上の貢献 |
| 2026-07-28 | Argus-Unified | Argus-Unifiedの特徴的なアーキテクチャ上の貢献 |
| 2026-07-27 | Kimi K3 | Kimi K3の特徴的なアーキテクチャ上の貢献 |
| 2026-07-27 | Mage-VL | Mage-VLの特徴的なアーキテクチャ上の貢献 |
| 2026-07-15 | Inkling | Inklingの特徴的なアーキテクチャ上の貢献 |
| 2026-07-15 | Hy-Embodied-VLM | Hy-Embodied-VLMの特徴的なアーキテクチャ上の貢献 |
| 2026-07-11 | MonkeyOCRv2 | MonkeyOCRv2の特徴的なアーキテクチャ上の貢献 |
| 2026-06-11 | MiniMax M3 | MiniMax M3の特徴的なアーキテクチャ上の貢献 |
| 2026-06-10 | InternVideo3 | InternVideo3の特徴的なアーキテクチャ上の貢献 |
| 2026-06-09 | Keye-VL 2.0 | Keye-VL 2.0の特徴的なアーキテクチャ上の貢献 |
| 2026-06-02 | Zamba2-VL | Zamba2-VLの特徴的なアーキテクチャ上の貢献 |
| 2026-05-31 | Cosmos 3 | Cosmos 3の特徴的なアーキテクチャ上の貢献 |
| 2026-05-18 | Lance | Lanceの特徴的なアーキテクチャ上の貢献 |
| 2026-05-08 | ZAYA1-VL | ZAYA1-VLの特徴的なアーキテクチャ上の貢献 |
| 2026-05-03 | Falcon Perception | Falcon Perceptionの特徴的なアーキテクチャ上の貢献 |
| 2026-04-29 | GLM-5V-Turbo | GLM-5V-Turboの特徴的なアーキテクチャ上の貢献 |
| 2026-04-21 | PLaMo 2.1-VL | PLaMo 2.1-VLの特徴的なアーキテクチャ上の貢献 |
| 2026-04-09 | EXAONE 4.5 | EXAONE 4.5の特徴的なアーキテクチャ上の貢献 |
| 2026-04-02 | BidirLM and BidirLM-Omni | BidirLM and BidirLM-Omniの特徴的なアーキテクチャ上の貢献 |
| 2026-03-31 | Gemma 4 | Gemma 4の特徴的なアーキテクチャ上の貢献 |
| 2026-03-06 | Penguin-VL | Penguin-VLの特徴的なアーキテクチャ上の貢献 |
| 2026-03-04 | Phi-4-Reasoning-Vision | Phi-4-Reasoning-Visionの特徴的なアーキテクチャ上の貢献 |
| 2026-03-01 | V-SONAR and V-LCM | V-SONAR and V-LCMの特徴的なアーキテクチャ上の貢献 |
| 2026-02-16 | Qwen3.5 | Qwen3.5の特徴的なアーキテクチャ上の貢献 |
| 2026-01-27 | Youtu-VL | Youtu-VLの特徴的なアーキテクチャ上の貢献 |
| 2026-01-27 | Kimi K2.5 and K2.6 | Kimi K2.5 and K2.6の特徴的なアーキテクチャ上の貢献 |
| 2026-01-14 | Step3-VL-10B | Step3-VL-10Bの特徴的なアーキテクチャ上の貢献 |
| 2025-11-13 | ERNIE 5.0 | ERNIE 5.0の特徴的なアーキテクチャ上の貢献 |
| 2025-10-20 | DeepSeek-OCR | DeepSeek-OCRの特徴的なアーキテクチャ上の貢献 |
| 2025-10-16 | PaddleOCR-VL | PaddleOCR-VLの特徴的なアーキテクチャ上の貢献 |
| 2025-09-22 | Qwen3-VL | Qwen3-VLの特徴的なアーキテクチャ上の貢献 |
| 2025-07-25 | Step3 | Step3の特徴的なアーキテクチャ上の貢献 |
| 2025-07-01 | GLM-4.1V-Thinking | GLM-4.1V-Thinkingの特徴的なアーキテクチャ上の貢献 |
| 2025-06-30 | ERNIE 4.5-VL | ERNIE 4.5-VLの特徴的なアーキテクチャ上の貢献 |
| 2025-06-04 | MiMo-VL | MiMo-VLの特徴的なアーキテクチャ上の貢献 |
| 2025-05-20 | BAGEL | BAGELの特徴的なアーキテクチャ上の貢献 |
| 2025-05-11 | Seed1.5-VL | Seed1.5-VLの特徴的なアーキテクチャ上の貢献 |
| 2025-04-11 | InternVL3 and InternVL3.5 | InternVL3 and InternVL3.5の特徴的なアーキテクチャ上の貢献 |
| 2025-04-10 | Kimi-VL | Kimi-VLの特徴的なアーキテクチャ上の貢献 |
| 2025-04-05 | Llama 4 Scout and Maverick | Llama 4 Scout and Maverickの特徴的なアーキテクチャ上の貢献 |
| 2025-03-26 | Qwen2.5-Omni | Qwen2.5-Omniの特徴的なアーキテクチャ上の貢献 |
| 2025-03-12 | Gemma 3 | Gemma 3の特徴的なアーキテクチャ上の貢献 |
| 2025-03-04 | Aya Vision | Aya Visionの特徴的なアーキテクチャ上の貢献 |
| 2025-03-03 | Phi-4-multimodal | Phi-4-multimodalの特徴的なアーキテクチャ上の貢献 |
| 2025-02-20 | SigLIP 2 | SigLIP 2の特徴的なアーキテクチャ上の貢献 |
| 2025-02-08 | EVEv2 | EVEv2の特徴的なアーキテクチャ上の貢献 |
| 2025-01-26 | Qwen2.5-VL | Qwen2.5-VLの特徴的なアーキテクチャ上の貢献 |
| 2025-01-21 | VideoLLaMA 3 | VideoLLaMA 3の特徴的なアーキテクチャ上の貢献 |
| 2025-01-20 | UI-TARS | UI-TARSの特徴的なアーキテクチャ上の貢献 |
| 2025-01-14 | MiniMax-01 | MiniMax-01の特徴的なアーキテクチャ上の貢献 |
| 2025-01-12 | MiniCPM-o-2.6 | MiniCPM-o-2.6の特徴的なアーキテクチャ上の貢献 |
| 2025-01-10 | Eagle 2 | Eagle 2の特徴的なアーキテクチャ上の貢献 |
| 2025-01-07 | Sa2VA | Sa2VAの特徴的なアーキテクチャ上の貢献 |
| 2024-12-31 | VideoChat-Flash | VideoChat-Flashの特徴的なアーキテクチャ上の貢献 |
| 2024-12-16 | OmniVLM | OmniVLMの特徴的なアーキテクチャ上の貢献 |
| 2024-12-13 | Apollo | Apolloの特徴的なアーキテクチャ上の貢献 |
| 2024-12-13 | DeepSeek-VL2 | DeepSeek-VL2の特徴的なアーキテクチャ上の貢献 |
| 2024-12-10 | Maya | Mayaの特徴的なアーキテクチャ上の貢献 |
| 2024-12-05 | InternVL 2.5 | InternVL 2.5の特徴的なアーキテクチャ上の貢献 |
| 2024-12-04 | PaliGemma 2 | PaliGemma 2の特徴的なアーキテクチャ上の貢献 |
| 2024-11-26 | ShowUI | ShowUIの特徴的なアーキテクチャ上の貢献 |
| 2024-11-26 | SmolVLM | SmolVLMの特徴的なアーキテクチャ上の貢献 |
| 2024-11-21 | AIMv2 | AIMv2の特徴的なアーキテクチャ上の貢献 |
| 2024-11-15 | LLaVA-CoT | LLaVA-CoTの特徴的なアーキテクチャ上の貢献 |
| 2024-11-06 | LLM2CLIP | LLM2CLIPの特徴的なアーキテクチャ上の貢献 |
| 2024-11-05 | Tarsier2 | Tarsier2の特徴的なアーキテクチャ上の貢献 |
| 2024-10-17 | Janus and Janus-Pro | Janus and Janus-Proの特徴的なアーキテクチャ上の貢献 |
| 2024-10-08 | ARIA | ARIAの特徴的なアーキテクチャ上の貢献 |
| 2024-09-27 | Emu3 | Emu3の特徴的なアーキテクチャ上の貢献 |
| 2024-09-25 | Molmo and PixMo | Molmo and PixMoの特徴的なアーキテクチャ上の貢献 |
| 2024-09-25 | Llama 3.2-Vision | Llama 3.2-Visionの特徴的なアーキテクチャ上の貢献 |
| 2024-09-17 | NVLM | NVLMの特徴的なアーキテクチャ上の貢献 |
| 2024-09-11 | Pixtral 12B | Pixtral 12Bの特徴的なアーキテクチャ上の貢献 |
| 2024-09-06 | VILA-U | VILA-Uの特徴的なアーキテクチャ上の貢献 |
| 2024-08-29 | Qwen2-VL | Qwen2-VLの特徴的なアーキテクチャ上の貢献 |
| 2024-08-28 | EAGLE | EAGLEの特徴的なアーキテクチャ上の貢献 |
| 2024-08-22 | Show-o | Show-oの特徴的なアーキテクチャ上の貢献 |
| 2024-08-22 | Idefics3-8B | Idefics3-8Bの特徴的なアーキテクチャ上の貢献 |
| 2024-08-20 | Transfusion | Transfusionの特徴的なアーキテクチャ上の貢献 |
| 2024-08-09 | mPLUG-Owl3 | mPLUG-Owl3の特徴的なアーキテクチャ上の貢献 |
| 2024-08-09 | VITA | VITAの特徴的なアーキテクチャ上の貢献 |
| 2024-08-05 | LLaVA-OneVision | LLaVA-OneVisionの特徴的なアーキテクチャ上の貢献 |
| 2024-07-24 | VILA² | VILA²の特徴的なアーキテクチャ上の貢献 |
| 2024-07-23 | INF-LLaVA | INF-LLaVAの特徴的なアーキテクチャ上の貢献 |
| 2024-07-22 | SlowFast-LLaVA | SlowFast-LLaVAの特徴的なアーキテクチャ上の貢献 |
| 2024-07-19 | EVLM | EVLMの特徴的なアーキテクチャ上の貢献 |
| 2024-07-03 | InternLM-XComposer-2.5 | InternLM-XComposer-2.5の特徴的なアーキテクチャ上の貢献 |
| 2024-06-27 | OMG-LLaVA | OMG-LLaVAの特徴的なアーキテクチャ上の貢献 |
| 2024-06-24 | Cambrian-1 | Cambrian-1の特徴的なアーキテクチャ上の貢献 |
| 2024-06-17 | EVE | EVEの特徴的なアーキテクチャ上の貢献 |
| 2024-06-14 | Ovis | Ovisの特徴的なアーキテクチャ上の貢献 |
| 2024-06-04 | Parrot | Parrotの特徴的なアーキテクチャ上の貢献 |
| 2024-05-24 | ConvLLaVA | ConvLLaVAの特徴的なアーキテクチャ上の貢献 |
| 2024-05-21 | Phi-3-Vision and Phi-3.5-Vision | Phi-3-Vision and Phi-3.5-Visionの特徴的なアーキテクチャ上の貢献 |
| 2024-05-20 | CogVLM2 | CogVLM2の特徴的なアーキテクチャ上の貢献 |
| 2024-05-16 | Chameleon | Chameleonの特徴的なアーキテクチャ上の貢献 |
| 2024-05-14 | PaliGemma | PaliGemmaの特徴的なアーキテクチャ上の貢献 |
| 2024-05-06 | xGen-MM (BLIP-3) | xGen-MM (BLIP-3)の特徴的なアーキテクチャ上の貢献 |
| 2024-05-02 | MANTIS | MANTISの特徴的なアーキテクチャ上の貢献 |
| 2024-04-19 | Moondream-next | Moondream-nextの特徴的なアーキテクチャ上の貢献 |
| 2024-04-15 | Idefics2 | Idefics2の特徴的なアーキテクチャ上の貢献 |
| 2024-04-09 | InternLM-XComposer2-4KHD | InternLM-XComposer2-4KHDの特徴的なアーキテクチャ上の貢献 |
| 2024-03-14 | MM1 | MM1の特徴的なアーキテクチャ上の貢献 |
| 2024-03-08 | DeepSeek-VL | DeepSeek-VLの特徴的なアーキテクチャ上の貢献 |
| 2024-02-19 | AnyGPT | AnyGPTの特徴的なアーキテクチャ上の貢献 |
| 2024-02-08 | SPHINX-X | SPHINX-Xの特徴的なアーキテクチャ上の貢献 |
| 2024-01-30 | LLaVA 1.6 | LLaVA 1.6の特徴的なアーキテクチャ上の貢献 |
| 2024-01-30 | MiniCPM-V | MiniCPM-Vの特徴的なアーキテクチャ上の貢献 |
| 2024-01-30 | MouSi | MouSiの特徴的なアーキテクチャ上の貢献 |
| 2024-01-29 | InternLM-XComposer2 | InternLM-XComposer2の特徴的なアーキテクチャ上の貢献 |
| 2024-01-29 | MoE-LLaVA | MoE-LLaVAの特徴的なアーキテクチャ上の貢献 |
| 2024-01-20 | moondream1 and moondream2 | moondream1 and moondream2の特徴的なアーキテクチャ上の貢献 |
| 2024-01-05 | FireLLaVA | FireLLaVAの特徴的なアーキテクチャ上の貢献 |
| 2024-01-01 | COSMO | COSMOの特徴的なアーキテクチャ上の貢献 |
| 2023-12-28 | TinyGPT-V | TinyGPT-Vの特徴的なアーキテクチャ上の貢献 |
| 2023-12-28 | MobileVLM | MobileVLMの特徴的なアーキテクチャ上の貢献 |
| 2023-12-06 | Alpha-CLIP | Alpha-CLIPの特徴的なアーキテクチャ上の貢献 |
| 2023-11-28 | Nous-Hermes-2-Vision - Mistral 7B | Nous-Hermes-2-Vision - Mistral 7Bの特徴的なアーキテクチャ上の貢献 |
| 2023-11-13 | SPHINX | SPHINXの特徴的なアーキテクチャ上の貢献 |
| 2023-11-10 | Florence-2 | Florence-2の特徴的なアーキテクチャ上の貢献 |
| 2023-11-09 | u-LLaVA | u-LLaVAの特徴的なアーキテクチャ上の貢献 |
| 2023-11-09 | LLaVA-Plus | LLaVA-Plusの特徴的なアーキテクチャ上の貢献 |
| 2023-11-07 | OtterHD | OtterHDの特徴的なアーキテクチャ上の貢献 |
| 2023-11-06 | CoVLM | CoVLMの特徴的なアーキテクチャ上の貢献 |
| 2023-11-06 | GLaMM | GLaMMの特徴的なアーキテクチャ上の貢献 |
| 2023-10-17 | Fuyu-8B | Fuyu-8Bの特徴的なアーキテクチャ上の貢献 |
| 2023-10-13 | PaLI-3 Vision Language Models | PaLI-3 Vision Language Modelsの特徴的なアーキテクチャ上の貢献 |
| 2023-10-13 | MiniGPT-v2 | MiniGPT-v2の特徴的なアーキテクチャ上の貢献 |
| 2023-10-12 | BakLLaVA | BakLLaVAの特徴的なアーキテクチャ上の貢献 |
| 2023-10-11 | Ferret | Ferretの特徴的なアーキテクチャ上の貢献 |
| 2023-10-05 | LLaVA 1.5 | LLaVA 1.5の特徴的なアーキテクチャ上の貢献 |
| 2023-10-05 | CogVLM | CogVLMの特徴的なアーキテクチャ上の貢献 |
| 2023-09-28 | MetaCLIP | MetaCLIPの特徴的なアーキテクチャ上の貢献 |
| 2023-08-24 | Qwen-VL | Qwen-VLの特徴的なアーキテクチャ上の貢献 |
| 2023-08-22 | IDEFICS | IDEFICSの特徴的なアーキテクチャ上の貢献 |
| 2023-08-19 | BLIVA | BLIVAの特徴的なアーキテクチャ上の貢献 |
| 2023-06-26 | KOSMOS-2 | KOSMOS-2の特徴的なアーキテクチャ上の貢献 |
| 2023-05-24 | LaVIN | LaVINの特徴的なアーキテクチャ上の貢献 |
| 2023-05-11 | InstructBLIP | InstructBLIPの特徴的なアーキテクチャ上の貢献 |
| 2023-05-09 | ImageBind | ImageBindの特徴的なアーキテクチャ上の貢献 |
| 2023-04-17 | LLaVA | LLaVAの特徴的なアーキテクチャ上の貢献 |
| 2023-04-16 | MiniGPT-4 | MiniGPT-4の特徴的なアーキテクチャ上の貢献 |
| 2023-03-27 | SigLIP | SigLIPの特徴的なアーキテクチャ上の貢献 |
| 2023-03-14 | OpenFlamingo | OpenFlamingoの特徴的なアーキテクチャ上の貢献 |
| 2023-03-06 | PaLM-E | PaLM-Eの特徴的なアーキテクチャ上の貢献 |
| 2023-02-27 | KOSMOS-1 | KOSMOS-1の特徴的なアーキテクチャ上の貢献 |
| 2023-01-30 | BLIP-2 | BLIP-2の特徴的なアーキテクチャ上の貢献 |
| 2022-12-21 | MULTIINSTRUCT | MULTIINSTRUCTの特徴的なアーキテクチャ上の貢献 |
| 2022-09-14 | PaLI | PaLIの特徴的なアーキテクチャ上の貢献 |
| 2022-04-28 | Flamingo | Flamingoの特徴的なアーキテクチャ上の貢献 |
| 2022-01-28 | BLIP | BLIPの特徴的なアーキテクチャ上の貢献 |
| 2021-12-07 | GLIP | GLIPの特徴的なアーキテクチャ上の貢献 |
| 2021-06-25 | FROZEN | FROZENの特徴的なアーキテクチャ上の貢献 |
| 2021-01-05 | CLIP | CLIPの特徴的なアーキテクチャ上の貢献 |
| 2020-10-22 | ViT | ViTの特徴的なアーキテクチャ上の貢献 |

</details>



## アーキテクチャ <a id="architectures"></a>

### **MODUS: Decoder-Only Any-to-Any Multimodal Modeling** <a id="modus-decoder-only-any-to-any-multimodal-modeling"></a>

MODUSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2607.25948-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2607.25948) [![Project](https://img.shields.io/badge/Project-MODUS-blue?style=flat-square)](https://modus-multimodal.epfl.ch/)

Mingqiao Ye et al., EPFL<br>
**Released:** 2026-07-28


<p align="center">
  <img src="assets/architectures/modus-2026-arch.png" alt="MODUS: Decoder-Only Any-to-Any Multimodal Modeling architecture: Decoder-only any-to-any modeling across tokenized 1D and 2D modalities" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Decoder-only any-to-any modeling across tokenized 1D and 2D modalities. <a href="https://arxiv.org/abs/2607.25948">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MODUSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

MODUSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Argus-Unified: Economical Understanding and Generation** <a id="argus-unified-economical-understanding-and-generation"></a>

Argus-Unifiedの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2607.25527-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2607.25527)

Weiming Zhuang et al.<br>
**Released:** 2026-07-28


<p align="center">
  <img src="assets/architectures/argus-unified-2026-arch.png" alt="Argus-Unified: Economical Understanding and Generation architecture: Two-stage hybrid-token training for unified image understanding and generation" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Two-stage hybrid-token training for unified image understanding and generation. <a href="https://arxiv.org/abs/2607.25527">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Argus-Unifiedの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Argus-Unifiedの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 15.6、2,000。

</details>

### **Kimi K3: Kimi Delta Attention at Trillion-Parameter Scale** <a id="kimi-k3-kimi-delta-attention-at-trillion-parameter-scale"></a>

Kimi K3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 896。

[![arXiv](https://img.shields.io/badge/arXiv-2607.24653-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2607.24653) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/MoonshotAI/Kimi-K3) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/moonshotai/Kimi-K3)

Kimi Team, Moonshot AI<br>
**Released:** 2026-07-27


<p align="center">
  <img src="assets/architectures/kimi-k3-2026-arch.png" alt="Kimi K3: Kimi Delta Attention at Trillion-Parameter Scale architecture: Kimi Delta Attention, Stable LatentMoE, Attention Residuals, and MoonViT-V2" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Kimi Delta Attention, Stable LatentMoE, Attention Residuals, and MoonViT-V2. <a href="https://arxiv.org/abs/2607.24653">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Kimi K3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.8T、104B、93、24、16、896。

Kimi K3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 401M、1,048,576-。

</details>

### **Mage-VL: Codec-Native Streaming Multimodality** <a id="mage-vl-codec-native-streaming-multimodality"></a>

Mage-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2607.24904-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2607.24904) [![Project](https://img.shields.io/badge/Project-Mage--VL-blue?style=flat-square)](https://microsoft.github.io/Mage/)

Senqiao Yang et al., Microsoft Research<br>
**Released:** 2026-07-27


<p align="center">
  <img src="assets/architectures/mage-vl-2026-arch.png" alt="Mage-VL: Codec-Native Streaming Multimodality architecture: Codec-native streaming perception with an event gate and causal language decoder" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Codec-native streaming perception with an event gate and causal language decoder. <a href="https://arxiv.org/abs/2607.24904">Source paper</a>, PDF p. 8. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Mage-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 16×16-、75、560M、100M。

Mage-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3.5。

</details>

### **Inkling: Relative-Position Multimodal Mixture of Experts** <a id="inkling-relative-position-multimodal-mixture-of-experts"></a>

Inklingの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![Website](https://img.shields.io/badge/Official-Inkling-blue?style=flat-square)](https://thinkingmachines.ai/news/introducing-inkling/) [![Model Card](https://img.shields.io/badge/Model_Card-Inkling-blue?style=flat-square)](https://thinkingmachines.ai/model-card/inkling/) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/thinkingmachines/Inkling)

Thinking Machines Lab<br>
**Released:** 2026-07-15


> **Architecture figure:** The official Inkling model card contains no architecture figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Inklingの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 975B、41B、256。

Inklingの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 45T。

</details>

### **Hy-Embodied-VLM: Sparse-MoE Reasoning for Physical Agents** <a id="hy-embodied-vlm-sparse-moe-reasoning-for-physical-agents"></a>

Hy-Embodied-VLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.0。

[![arXiv](https://img.shields.io/badge/arXiv-2607.12894-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2607.12894) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/Tencent-Hunyuan/HY-Embodied) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/tencent/Hy-Embodied-VLM-1.0)

Tencent Robotics X, Hy Vision Team and Futian Laboratory<br>
**Released:** 2026-07-15


<p align="center">
  <img src="assets/architectures/hy-embodied-vlm-2026-arch.png" alt="Hy-Embodied-VLM: Sparse-MoE Reasoning for Physical Agents architecture: Self-evolving supervised fine-tuning, rejection sampling, and specialized reinforcement learning" width="820">
</p>
<p align="center"><sub><b>Figure 4.</b> Self-evolving supervised fine-tuning, rejection sampling, and specialized reinforcement learning. <a href="https://arxiv.org/abs/2607.12894">Source paper</a>, PDF p. 11. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Hy-Embodied-VLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.0、30B、3B、128、32K。

Hy-Embodied-VLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **MonkeyOCRv2: Document-Native Visual-Text Pretraining** <a id="monkeyocrv2-document-native-visual-text-pretraining"></a>

MonkeyOCRv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 17。

[![arXiv](https://img.shields.io/badge/arXiv-2607.11562-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2607.11562) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/Yuliang-Liu/MonkeyOCRv2)

Yuliang Liu et al.<br>
**Released:** 2026-07-11


<p align="center">
  <img src="assets/architectures/monkeyocrv2-2026-arch.png" alt="MonkeyOCRv2: Document-Native Visual-Text Pretraining architecture: Document-native pretraining through text generation and pixel reconstruction" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Document-native pretraining through text generation and pixel reconstruction. <a href="https://arxiv.org/abs/2607.11562">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MonkeyOCRv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

MonkeyOCRv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 113M、17、0.7B、11。

</details>

### **MiniMax M3: Native Multimodality with Sparse Long-Context Attention** <a id="minimax-m3-native-multimodality-with-sparse-long-context-attention"></a>

MiniMax M3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 109B。

[![arXiv](https://img.shields.io/badge/arXiv-2606.13392-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2606.13392) [![Website](https://img.shields.io/badge/Official-MiniMax_M3-blue?style=flat-square)](https://www.minimax.io/blog/minimax-m3) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/MiniMaxAI/MiniMax-M3)

MiniMax<br>
**Released:** 2026-06-11


<p align="center">
  <img src="assets/architectures/minimax-m3-2026-arch.png" alt="MiniMax M3: Native Multimodality with Sparse Long-Context Attention architecture: MiniMax Sparse Attention index and exact-attention branches" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> MiniMax Sparse Attention index and exact-attention branches. <a href="https://arxiv.org/abs/2606.13392">Source paper</a>, PDF p. 1. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MiniMax M3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

MiniMax M3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 109B。

</details>

### **InternVideo3: Multimodal Contextual Reasoning for Video Agents** <a id="internvideo3-multimodal-contextual-reasoning-for-video-agents"></a>

InternVideo3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2606.12195-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2606.12195)

Ziang Yan et al.<br>
**Released:** 2026-06-10


<p align="center">
  <img src="assets/architectures/internvideo3-2026-arch.png" alt="InternVideo3: Multimodal Contextual Reasoning for Video Agents architecture: InternVideo3 with multimodal multi-head latent attention across long contexts" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> InternVideo3 with multimodal multi-head latent attention across long contexts. <a href="https://arxiv.org/abs/2606.12195">Source paper</a>, PDF p. 7. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

InternVideo3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

InternVideo3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Keye-VL 2.0: Sparse Attention for Long-Video Agents** <a id="keye-vl-20-sparse-attention-for-long-video-agents"></a>

Keye-VL 2.0の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.0、256K。

[![arXiv](https://img.shields.io/badge/arXiv-2606.10651-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2606.10651)

Kwai Keye Team<br>
**Released:** 2026-06-09


<p align="center">
  <img src="assets/architectures/keye-vl-2-0-2026-arch.png" alt="Keye-VL 2.0: Sparse Attention for Long-Video Agents architecture: Four-stage curriculum extending Keye-VL from alignment to 256K context" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Four-stage curriculum extending Keye-VL from alignment to 256K context. <a href="https://arxiv.org/abs/2606.10651">Source paper</a>, PDF p. 8. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Keye-VL 2.0の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.0-30B、3B、30B、256K。

Keye-VL 2.0の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Zamba2-VL: Hybrid State-Space Vision-Language Modeling** <a id="zamba2-vl-hybrid-state-space-vision-language-modeling"></a>

Zamba2-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2606.00390-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2606.00390) [![Project](https://img.shields.io/badge/Official-Zamba2--VL-blue?style=flat-square)](https://www.zyphra.com/our-work/zamba2-vl)

Zyphra<br>
**Released:** 2026-06-02


<p align="center">
  <img src="assets/architectures/zamba2-vl-2026-arch.png" alt="Zamba2-VL: Hybrid State-Space Vision-Language Modeling architecture: Zamba2 hybrid state-space language backbone connected to a vision encoder" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Zamba2 hybrid state-space language backbone connected to a vision encoder. <a href="https://arxiv.org/abs/2606.00390">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Zamba2-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.2B、2.7B、7B、2。

Zamba2-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Cosmos 3: Omnimodal World Modeling with Mixture of Transformers** <a id="cosmos-3-omnimodal-world-modeling-with-mixture-of-transformers"></a>

Cosmos 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3。

[![arXiv](https://img.shields.io/badge/arXiv-2606.02800-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2606.02800) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/NVIDIA/cosmos) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/nvidia/cosmos3)

NVIDIA<br>
**Released:** 2026-05-31


<p align="center">
  <img src="assets/architectures/cosmos-3-2026-arch.png" alt="Cosmos 3: Omnimodal World Modeling with Mixture of Transformers architecture: Mixture-of-Transformers reasoner and generator with shared attention" width="820">
</p>
<p align="center"><sub><b>Figure 5.</b> Mixture-of-Transformers reasoner and generator with shared attention. <a href="https://arxiv.org/abs/2606.02800">Source paper</a>, PDF p. 11. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Cosmos 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3。

Cosmos 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、32B、20、3。

</details>

### **Lance: Unified Image and Video Understanding, Generation, and Editing** <a id="lance-unified-image-and-video-understanding-generation-and-editing"></a>

Lanceの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2605.18678-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2605.18678) [![Project](https://img.shields.io/badge/Project-Lance-blue?style=flat-square)](https://lance-project.github.io/)

Lance Team<br>
**Released:** 2026-05-18


<p align="center">
  <img src="assets/architectures/lance-2026-arch.png" alt="Lance: Unified Image and Video Understanding, Generation, and Editing architecture: Dual-expert sequence modeling for understanding and visual generation" width="820">
</p>
<p align="center"><sub><b>Figure 6.</b> Dual-expert sequence modeling for understanding and visual generation. <a href="https://arxiv.org/abs/2605.18678">Source paper</a>, PDF p. 9. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Lanceの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3B。

Lanceの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 128。

</details>

### **ZAYA1-VL: Vision-Specialized Compressed Convolutional Attention** <a id="zaya1-vl-vision-specialized-compressed-convolutional-attention"></a>

ZAYA1-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2605.08560-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2605.08560) [![Project](https://img.shields.io/badge/Official-ZAYA1--VL-blue?style=flat-square)](https://www.zyphra.com/our-work/zaya1-vl-8b) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/Zyphra/ZAYA1-VL-8B)

Zyphra<br>
**Released:** 2026-05-08


<p align="center">
  <img src="assets/architectures/zaya1-vl-2026-arch.png" alt="ZAYA1-VL: Vision-Specialized Compressed Convolutional Attention architecture: Visual routing, compressed convolutional attention, and a hybrid language backbone" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Visual routing, compressed convolutional attention, and a hybrid language backbone. <a href="https://arxiv.org/abs/2605.08560">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

ZAYA1-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、5-。

ZAYA1-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 140B、2.0。

</details>

### **Falcon Perception: Early-Fusion Grounding, Segmentation, and OCR** <a id="falcon-perception-early-fusion-grounding-segmentation-and-ocr"></a>

Falcon Perceptionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2603.27365-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2603.27365) [![Project](https://img.shields.io/badge/Project-Falcon_Perception-blue?style=flat-square)](https://vision.falcon.aidrc.tii.ae/) [![Release](https://img.shields.io/badge/Official-Release-blue?style=flat-square)](https://www.tii.ae/news/tii-launches-falcon-perception-new-multimodal-ai-model-helps-machines-see-and-understand-world)

Technology Innovation Institute<br>
**Released:** 2026-05-03


<p align="center">
  <img src="assets/architectures/falcon-perception-2026-arch.png" alt="Falcon Perception: Early-Fusion Grounding, Segmentation, and OCR architecture: Early-fusion perception Transformer with grounding, geometry, and segmentation pathways" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Early-fusion perception Transformer with grounding, geometry, and segmentation pathways. <a href="https://arxiv.org/abs/2603.27365">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Falcon Perceptionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Falcon Perceptionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 600M、300M、28、3。

</details>

### **GLM-5V-Turbo: Native Multimodal Agency** <a id="glm-5v-turbo-native-multimodal-agency"></a>

GLM-5V-Turboの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2604.26752-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2604.26752)

GLM-V Team<br>
**Released:** 2026-04-29


<p align="center">
  <img src="assets/architectures/glm-5v-turbo-2026-arch.png" alt="GLM-5V-Turbo: Native Multimodal Agency architecture: Multimodal multi-token prediction with image placeholders and shared Transformer blocks" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Multimodal multi-token prediction with image placeholders and shared Transformer blocks. <a href="https://arxiv.org/abs/2604.26752">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

GLM-5V-Turboの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

GLM-5V-Turboの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.。

</details>

### **PLaMo 2.1-VL: Lightweight Japanese Vision-Language Modeling** <a id="plamo-21-vl-lightweight-japanese-vision-language-modeling"></a>

PLaMo 2.1-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.1-、2B、8B。

[![arXiv](https://img.shields.io/badge/arXiv-2604.19324-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2604.19324)

Tommi Kerola et al., Preferred Networks<br>
**Released:** 2026-04-21


> **Architecture figure:** The PLaMo 2.1-VL paper contains application and data figures, but no model architecture diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

PLaMo 2.1-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.1-。

PLaMo 2.1-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **EXAONE 4.5: Native Multimodal Pretraining for Documents** <a id="exaone-45-native-multimodal-pretraining-for-documents"></a>

EXAONE 4.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.5。

[![arXiv](https://img.shields.io/badge/arXiv-2604.08644-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2604.08644)

Eunbi Choi et al., LG AI Research<br>
**Released:** 2026-04-09


<p align="center">
  <img src="assets/architectures/exaone-4-5-2026-arch.png" alt="EXAONE 4.5: Native Multimodal Pretraining for Documents architecture: Native-resolution vision encoding, projection, language decoding, and multi-token prediction" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Native-resolution vision encoding, projection, language decoding, and multi-token prediction. <a href="https://arxiv.org/abs/2604.08644">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

EXAONE 4.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.5、4.0。

EXAONE 4.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 256K。

</details>

### **BidirLM and BidirLM-Omni: Causal Decoders as Multimodal Encoders** <a id="bidirlm-and-bidirlm-omni-causal-decoders-as-multimodal-encoders"></a>

BidirLM and BidirLM-Omniの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2604.02045-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2604.02045) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/BidirLM) [![Release](https://img.shields.io/badge/Official-Release-blue?style=flat-square)](https://huggingface.co/blog/Nicolas-BZRD/bidirlm-release)

BidirLM Team<br>
**Released:** 2026-04-02


<p align="center">
  <img src="assets/architectures/bidirlm-and-bidirlm-omni-2026-arch.png" alt="BidirLM and BidirLM-Omni: Causal Decoders as Multimodal Encoders architecture: Specialist-backbone merging with frozen modality projection heads" width="820">
</p>
<p align="center"><sub><b>Figure 10.</b> Specialist-backbone merging with frozen modality projection heads. <a href="https://arxiv.org/abs/2604.02045">Source paper</a>, PDF p. 25. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

BidirLM and BidirLM-Omniの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

BidirLM and BidirLM-Omniの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Gemma 4: Open-Weight Native Multimodal Models** <a id="gemma-4-open-weight-native-multimodal-models"></a>

Gemma 4の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4。

[![arXiv](https://img.shields.io/badge/arXiv-2607.02770-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2607.02770) [![Releases](https://img.shields.io/badge/Official-Releases-blue?style=flat-square)](https://ai.google.dev/gemma/docs/releases) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/google/gemma-4)

Gemma Team, Google DeepMind<br>
**Released:** 2026-03-31


<p align="center">
  <img src="assets/architectures/gemma-4-2026-arch.png" alt="Gemma 4: Open-Weight Native Multimodal Models architecture: Aspect-preserving image resizing, patch pooling, and soft-token production" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Aspect-preserving image resizing, patch pooling, and soft-token production. <a href="https://arxiv.org/abs/2607.02770">Source paper</a>, PDF p. 16. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Gemma 4の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4、31B、26B、4B、12B、128K、256K。

Gemma 4の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Gemma 4の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Penguin-VL: Efficient VLMs with LLM-Based Vision Encoders** <a id="penguin-vl-efficient-vlms-with-llm-based-vision-encoders"></a>

Penguin-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2603.06569-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2603.06569) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/tencent-ailab/Penguin-VL) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/tencent/penguin-vl)

Boqiang Zhang, Lei Ke, Ruihan Yang, Qi Gao, Tianyuan Qu, Rossell Chen, Dong Yu, Leoweiliang<br>
**Released:** 2026-03-06


<p align="center">
  <img src="assets/architectures/penguin-vl-2026-arch.png" alt="Penguin-VL: Efficient VLMs with LLM-Based Vision Encoders architecture: An LLM-initialized vision encoder with priority-aware video-token compression" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> An LLM-initialized vision encoder with priority-aware video-token compression. <a href="https://arxiv.org/abs/2603.06569">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Penguin-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 0.6B、2B、8B。

Penguin-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Penguin-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Phi-4-Reasoning-Vision: Compact Multimodal Reasoning** <a id="phi-4-reasoning-vision-compact-multimodal-reasoning"></a>

Phi-4-Reasoning-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4-、15B。

[![arXiv](https://img.shields.io/badge/arXiv-2603.03975-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2603.03975) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/microsoft/Phi-4-reasoning-vision-15B) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/microsoft/Phi-4-reasoning-vision-15B)

Jyoti Aneja, Michael Harrison, Neel Joshi, Tyler LaBonte, John Langford, Eduardo Salinas<br>
**Released:** 2026-03-04


<p align="center">
  <img src="assets/architectures/phi-4-reasoning-vision-2026-arch.png" alt="Phi-4-Reasoning-Vision: Compact Multimodal Reasoning architecture: SigLIP2 vision encoding, cross-modal projection, mid-fusion, and language reasoning" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> SigLIP2 vision encoding, cross-modal projection, mid-fusion, and language reasoning. <a href="https://arxiv.org/abs/2603.03975">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Phi-4-Reasoning-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4-、15B、2、3,600。

Phi-4-Reasoning-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連コード: `<think>`、`<nothink>`。 値: 240。

Phi-4-Reasoning-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **V-SONAR and V-LCM: Vision-Language Modeling in Concept Space** <a id="v-sonar-and-v-lcm-vision-language-modeling-in-concept-space"></a>

V-SONAR and V-LCMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2603.01096-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2603.01096) [![OpenReview](https://img.shields.io/badge/ICLR-2026-8c1b13?style=flat-square)](https://openreview.net/forum?id=4LiX5ddGcU)

Yifu Qiu, Paul-Ambroise Duquenne, Holger Schwenk<br>
**Released:** 2026-03-01


<p align="center">
  <img src="assets/architectures/v-sonar-and-v-lcm-2026-arch.png" alt="V-SONAR and V-LCM: Vision-Language Modeling in Concept Space architecture: Visual-semantic alignment and concept-space prediction" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Visual-semantic alignment and concept-space prediction. <a href="https://arxiv.org/abs/2603.01096">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

V-SONAR and V-LCMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

V-SONAR and V-LCMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

V-SONAR and V-LCMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 80、1K。

</details>

### **Qwen3.5: Native Multimodal Hybrid-Attention Models** <a id="qwen35-native-multimodal-hybrid-attention-models"></a>

Qwen3.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、6。

[![Blog](https://img.shields.io/badge/Official-Qwen3.5-b31b1b?style=flat-square)](https://qwen.ai/blog?id=qwen3.5) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/QwenLM/Qwen3.6) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)

Qwen Team<br>
**Released:** 2026-02-16


> **Architecture figure:** Qwen3.5 has no public technical paper containing an architecture figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Qwen3.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、397B、17B。

Qwen3.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Qwen3.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 6、5。

</details>

### **Youtu-VL: Unified Autoregressive Supervision for Dense Vision** <a id="youtu-vl-unified-autoregressive-supervision-for-dense-vision"></a>

Youtu-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2601.19798-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2601.19798) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/TencentCloudADP/youtu-vl) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/tencent/Youtu-VL-4B-Instruct)

Tencent Youtu Lab<br>
**Released:** 2026-01-27


<p align="center">
  <img src="assets/architectures/youtu-vl-2026-arch.png" alt="Youtu-VL: Unified Autoregressive Supervision for Dense Vision architecture: Unified visual-text autoregressive supervision and dense-output decoding" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Unified visual-text autoregressive supervision and dense-output decoding. <a href="https://arxiv.org/abs/2601.19798">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Youtu-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Youtu-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Kimi K2.5 and K2.6: Native Multimodal Agentic MoE** <a id="kimi-k25-and-k26-native-multimodal-agentic-moe"></a>

Kimi K2.5 and K2.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、6。

[![arXiv](https://img.shields.io/badge/arXiv-2602.02276-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2602.02276) [![HuggingFace](https://img.shields.io/badge/HuggingFace-K2.6-blue?style=flat-square)](https://huggingface.co/moonshotai/Kimi-K2.6) [![Release](https://img.shields.io/badge/Official-K2.6-blue?style=flat-square)](https://www.kimi.com/blog/kimi-k2-6)

Kimi Team, Moonshot AI<br>
**Released:** 2026-01-27


<p align="center">
  <img src="assets/architectures/kimi-k2-5-and-k2-6-2026-arch.png" alt="Kimi K2.5 and K2.6: Native Multimodal Agentic MoE architecture: Agentic reinforcement-learning environments, rollout management, and training services" width="820">
</p>
<p align="center"><sub><b>Figure 10.</b> Agentic reinforcement-learning environments, rollout management, and training services. <a href="https://arxiv.org/abs/2602.02276">Source paper</a>, PDF p. 23. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Kimi K2.5 and K2.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、1T、32B、61、384。

Kimi K2.5 and K2.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 20、6、5、256K。

</details>

### **Step3-VL-10B: Language-Aligned Perception with 16× Token Compression** <a id="step3-vl-10b-language-aligned-perception-with-16-token-compression"></a>

Step3-VL-10Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 10B、1.8B、8B。

[![arXiv](https://img.shields.io/badge/arXiv-2601.09668-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2601.09668) [![Project](https://img.shields.io/badge/Project-Step3--VL--10B-blue?style=flat-square)](https://stepfun-ai.github.io/Step3-VL-10B/)

StepFun<br>
**Released:** 2026-01-14


> **Architecture figure:** The Step3-VL-10B report contains performance and RL figures, but no architecture diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Step3-VL-10Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 10B、2025、1.8B、2、16、8B。

Step3-VL-10Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 728×728、504×504。

</details>

### **ERNIE 5.0: Unified Autoregressive Omnimodal Mixture of Experts** <a id="ernie-50-unified-autoregressive-omnimodal-mixture-of-experts"></a>

ERNIE 5.0の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5.0、2.4T。

[![arXiv](https://img.shields.io/badge/arXiv-2602.04705-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2602.04705) [![Architecture](https://img.shields.io/badge/Official-Architecture-blue?style=flat-square)](https://ernie.baidu.com/blog/posts/ernie5.0/)

Baidu ERNIE Team<br>
**Released:** 2025-11-13


<p align="center">
  <img src="assets/architectures/ernie-5-0-2026-arch.png" alt="ERNIE 5.0: Unified Autoregressive Omnimodal Mixture of Experts architecture: Unified image understanding, image generation, and video generation objectives" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Unified image understanding, image generation, and video generation objectives. <a href="https://arxiv.org/abs/2602.04705">Source paper</a>, PDF p. 6. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

ERNIE 5.0の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5.0、3、2.4T。

ERNIE 5.0の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5.0、13、2025、2026、4。

</details>

### **DeepSeek-OCR: Visual Context Compression through DeepEncoder** <a id="deepseek-ocr-visual-context-compression-through-deepencoder"></a>

DeepSeek-OCRの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2510.18234-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2510.18234) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/deepseek-ai/DeepSeek-OCR) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/deepseek-ai/DeepSeek-OCR)

DeepSeek-AI<br>
**Released:** 2025-10-20


<p align="center">
  <img src="assets/architectures/deepseek-ocr-2025-arch.png" alt="DeepSeek-OCR: Visual Context Compression through DeepEncoder architecture: A SAM-CLIP DeepEncoder connected to a sparse language decoder" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> A SAM-CLIP DeepEncoder connected to a sparse language decoder. <a href="https://arxiv.org/abs/2510.18234">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

DeepSeek-OCRの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3B、570M、64、800。

DeepSeek-OCRの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

DeepSeek-OCRの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連参照: <https://arxiv.org/abs/2601.20552>、<https://github.com/deepseek-ai/DeepSeek-OCR-2>。 値: 2、27、2026。

</details>

### **PaddleOCR-VL: Ultra-Compact Multilingual Document Parsing** <a id="paddleocr-vl-ultra-compact-multilingual-document-parsing"></a>

PaddleOCR-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.5-0.3B、0.9B。

[![arXiv](https://img.shields.io/badge/arXiv-2510.14528-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2510.14528) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/PaddlePaddle/PaddleOCR) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/PaddlePaddle/PaddleOCR-VL)

PaddleOCR Team, Baidu<br>
**Released:** 2025-10-16


<p align="center">
  <img src="assets/architectures/paddleocr-vl-2025-arch.png" alt="PaddleOCR-VL: Ultra-Compact Multilingual Document Parsing architecture: Document layout analysis, compact VLM inference, instructions, and structured output" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Document layout analysis, compact VLM inference, instructions, and structured output. <a href="https://arxiv.org/abs/2510.14528">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

PaddleOCR-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 0.9B、4.5-0.3B、109。

PaddleOCR-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5、2026、1.6。

</details>

### **Qwen3-VL: DeepStack Vision-Language Models** <a id="qwen3-vl-deepstack-vision-language-models"></a>

Qwen3-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2511.21631-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2511.21631) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/QwenLM/Qwen3-VL) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/Qwen/qwen3-vl)

Qwen Team<br>
**Released:** 2025-09-22


<p align="center">
  <img src="assets/architectures/qwen3-vl-2025-arch.png" alt="Qwen3-VL: DeepStack Vision-Language Models architecture: Vision encoding, DeepStack injection, and dense or mixture-of-experts decoding" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Vision encoding, DeepStack injection, and dense or mixture-of-experts decoding. <a href="https://arxiv.org/abs/2511.21631">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Qwen3-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2B、4B、8B、32B、30B、235B、256K。

Qwen3-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Qwen3-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Step3: Model-System Co-Design for Cost-Effective Multimodal Intelligence** <a id="step3-model-system-co-design-for-cost-effective-multimodal-intelligence"></a>

Step3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 321B、38B。

[![arXiv](https://img.shields.io/badge/arXiv-2507.19427-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2507.19427) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/stepfun-ai/Step3) [![Website](https://img.shields.io/badge/Website-Step3-blue?style=flat-square)](https://chat.stepfun.com/research/en/step3)

StepFun<br>
**Released:** 2025-07-25


<p align="center">
  <img src="assets/architectures/step3-2025-arch.png" alt="Step3: Model-System Co-Design for Cost-Effective Multimodal Intelligence architecture: Attention-FFN disaggregation across attention and expert instances" width="820">
</p>
<p align="center"><sub><b>Figure 6.</b> Attention-FFN disaggregation across attention and expert instances. <a href="https://arxiv.org/abs/2507.19427">Source paper</a>, PDF p. 11. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Step3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 321B、38B。

Step3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **GLM-4.1V-Thinking: General-Purpose Multimodal Reasoning through Curriculum-Sampled RL** <a id="glm-41v-thinking-general-purpose-multimodal-reasoning-through-curriculum-sampled-rl"></a>

GLM-4.1V-Thinkingの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.、9B。

[![arXiv](https://img.shields.io/badge/arXiv-2507.01006-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2507.01006) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/zai-org/GLM-V) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/zai-org/GLM-4.1V-9B-Thinking)

GLM-V Team, Zhipu AI and Tsinghua University<br>
**Released:** 2025-07-01


<p align="center">
  <img src="assets/architectures/glm-4-1v-thinking-2025-arch.png" alt="GLM-4.1V-Thinking: General-Purpose Multimodal Reasoning through Curriculum-Sampled RL architecture: Native-resolution vision encoding, projection, decoding, and timestamped video tokens" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Native-resolution vision encoding, projection, decoding, and timestamped video tokens. <a href="https://arxiv.org/abs/2507.01006">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

GLM-4.1V-Thinkingの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.、9B、4-9B、0414。

GLM-4.1V-Thinkingの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連コード: `<think>`、`<answer>`。 値: 32K。

GLM-4.1V-Thinkingの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 220M、4.。

</details>

### **ERNIE 4.5-VL: Heterogeneous Modality Mixture-of-Experts** <a id="ernie-45-vl-heterogeneous-modality-mixture-of-experts"></a>

ERNIE 4.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.5-。

[![Website](https://img.shields.io/badge/Report-ERNIE_4.5-blue?style=flat-square)](https://ernie.baidu.com/blog/posts/ernie4.5/) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/PaddlePaddle/ERNIE) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/baidu/ernie-45)

Baidu ERNIE Team<br>
**Released:** 2025-06-30


> **Architecture figure:** ERNIE 4.5-VL has no public paper containing an extractable architecture figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

ERNIE 4.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.5-、424B、47B、28B、3B、4.5。

ERNIE 4.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **MiMo-VL: Multimodal Pretraining with Mixed On-Policy Reinforcement Learning** <a id="mimo-vl-multimodal-pretraining-with-mixed-on-policy-reinforcement-learning"></a>

MiMo-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.4T。

[![arXiv](https://img.shields.io/badge/arXiv-2506.03569-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2506.03569) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/XiaomiMiMo/MiMo-VL) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/XiaomiMiMo/mimo-vl)

Xiaomi MiMo Team<br>
**Released:** 2025-06-04


<p align="center">
  <img src="assets/architectures/mimo-vl-2025-arch.png" alt="MiMo-VL: Multimodal Pretraining with Mixed On-Policy Reinforcement Learning architecture: Native-resolution vision encoding, projection, and language decoding" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Native-resolution vision encoding, projection, and language decoding. <a href="https://arxiv.org/abs/2506.03569">Source paper</a>, PDF p. 6. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MiMo-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B。

MiMo-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.4T。

</details>

### **BAGEL: A Mixture-of-Transformer-Experts for Unified Understanding and Generation** <a id="bagel-a-mixture-of-transformer-experts-for-unified-understanding-and-generation"></a>

BAGELの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2505.14683-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2505.14683) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/ByteDance-Seed/Bagel) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/ByteDance-Seed/BAGEL-7B-MoT)

Chaorui Deng, Deyao Zhu, Kunchang Li, Chenhui Gou, Feng Li, Zeyu Wang, Shu Zhong, Weihao Yu, Xiaonan Nie, Ziang Song, Guang Shi, Haoqi Fan<br>
**Released:** 2025-05-20


<p align="center">
  <img src="assets/architectures/bagel-2025-arch.png" alt="BAGEL: A Mixture-of-Transformer-Experts for Unified Understanding and Generation architecture: Shared self-attention with understanding and generation Transformer experts" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Shared self-attention with understanding and generation Transformer experts. <a href="https://arxiv.org/abs/2505.14683">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

BAGELの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14B、7B、5-、2。

BAGELの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

BAGELの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 400M、500M、1.6B、100M、45M、20M、500K。

</details>

### **Seed1.5-VL: Sparse-MoE Multimodal Understanding and Agentic Reasoning** <a id="seed15-vl-sparse-moe-multimodal-understanding-and-agentic-reasoning"></a>

Seed1.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5-、532M、20B。

[![arXiv](https://img.shields.io/badge/arXiv-2505.07062-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2505.07062) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/ByteDance-Seed/Seed1.5-VL)

ByteDance Seed Team<br>
**Released:** 2025-05-11


<p align="center">
  <img src="assets/architectures/seed1-5-vl-2025-arch.png" alt="Seed1.5-VL: Sparse-MoE Multimodal Understanding and Agentic Reasoning architecture: Native-resolution vision encoding, adaptation, sparse MoE decoding, and timestamped video" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Native-resolution vision encoding, adaptation, sparse MoE decoding, and timestamped video. <a href="https://arxiv.org/abs/2505.07062">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Seed1.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5-、20B。

Seed1.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **InternVL3 and InternVL3.5: Native Multimodal Pretraining and Adaptive Resolution** <a id="internvl3-and-internvl35-native-multimodal-pretraining-and-adaptive-resolution"></a>

InternVL3 and InternVL3.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5。

[![arXiv](https://img.shields.io/badge/arXiv-2504.10479-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2504.10479) [![arXiv](https://img.shields.io/badge/arXiv-2508.18265-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2508.18265) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/OpenGVLab/InternVL) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/OpenGVLab/internvl35)

InternVL Team, OpenGVLab<br>
**Released:** 2025-04-11


> **Architecture figure:** The InternVL3 paper contains evaluation figures, but no definitive model architecture diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

InternVL3 and InternVL3.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

InternVL3 and InternVL3.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 26、2025、5。

</details>

### **Kimi-VL: Native-Resolution Vision with a Sparse MoE Decoder** <a id="kimi-vl-native-resolution-vision-with-a-sparse-moe-decoder"></a>

Kimi-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.8B、16B、128K。

[![arXiv](https://img.shields.io/badge/arXiv-2504.07491-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2504.07491) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/MoonshotAI/Kimi-VL) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/moonshotai/Kimi-VL-A3B-Instruct)

Kimi Team<br>
**Released:** 2025-04-10


<p align="center">
  <img src="assets/architectures/kimi-vl-2025-arch.png" alt="Kimi-VL: Native-Resolution Vision with a Sparse MoE Decoder architecture: MoonViT, multimodal projection, and a sparse mixture-of-experts decoder" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> MoonViT, multimodal projection, and a sparse mixture-of-experts decoder. <a href="https://arxiv.org/abs/2504.07491">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Kimi-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 16B、2.8B、2×2。

Kimi-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5.2T、4.4T、2T、0.1T、2.3T、8K、128K、2506。

Kimi-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Llama 4 Scout and Maverick: Native Multimodal Mixture-of-Experts Models** <a id="llama-4-scout-and-maverick-native-multimodal-mixture-of-experts-models"></a>

Llama 4 Scout and Maverickの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4、17B。

[![Model Card](https://img.shields.io/badge/Meta-Model_Card-blue?style=flat-square)](https://github.com/meta-llama/llama-models/blob/main/models/llama4/MODEL_CARD.md) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/meta-llama/llama-4)

Meta<br>
**Released:** 2025-04-05


> **Architecture figure:** The official Llama 4 model card describes the architecture in text and tables only.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Llama 4 Scout and Maverickの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4、109B、16、400B、128、17B、10M、1M。

Llama 4 Scout and Maverickの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 40T、22T、4。

</details>

### **Qwen2.5-Omni: Streaming Multimodal Perception and Speech Generation** <a id="qwen25-omni-streaming-multimodal-perception-and-speech-generation"></a>

Qwen2.5-Omniの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5-。

[![arXiv](https://img.shields.io/badge/arXiv-2503.20215-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2503.20215) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/QwenLM/Qwen2.5-Omni) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/Qwen/Qwen2.5-Omni-7B)

Qwen Team<br>
**Released:** 2025-03-26


<p align="center">
  <img src="assets/architectures/qwen2-5-omni-2025-arch.png" alt="Qwen2.5-Omni: Streaming Multimodal Perception and Speech Generation architecture: Thinker-Talker architecture for multimodal perception and streaming speech" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Thinker-Talker architecture for multimodal perception and streaming speech. <a href="https://arxiv.org/abs/2503.20215">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Qwen2.5-Omniの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5-。

Qwen2.5-Omniの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Gemma 3: Long-Context Multimodality with Efficient Interleaved Attention** <a id="gemma-3-long-context-multimodality-with-efficient-interleaved-attention"></a>

Gemma 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3、128K。

[![arXiv](https://img.shields.io/badge/arXiv-2503.19786-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2503.19786) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/google-deepmind/gemma) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/google/gemma-3-release)

Gemma Team<br>
**Released:** 2025-03-12


> **Architecture figure:** The Gemma 3 report contains examples and analysis charts, but no architecture diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Gemma 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3、1B、4B、12B、27B、400M、896×896、256。

Gemma 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3、2、1,024-、32K、128K。

Gemma 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2T、4T、12T、14T。

</details>

### **Aya Vision: Multilingual Multimodality through Cross-Modal Model Merging** <a id="aya-vision-multilingual-multimodality-through-cross-modal-model-merging"></a>

Aya Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2505.08751-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2505.08751) [![Website](https://img.shields.io/badge/Website-Aya_Vision-blue?style=flat-square)](https://cohere.com/blog/aya-vision) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/CohereLabs/aya-vision-8b)

Cohere Labs<br>
**Released:** 2025-03-04


> **Architecture figure:** The Aya Vision paper contains data and evaluation figures, but no model architecture diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Aya Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、32B、23。

Aya Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Phi-4-multimodal: Text, Vision, and Speech through Mixture-of-LoRAs** <a id="phi-4-multimodal-text-vision-and-speech-through-mixture-of-loras"></a>

Phi-4-multimodalの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4-。

[![arXiv](https://img.shields.io/badge/arXiv-2503.01743-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2503.01743) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/microsoft/Phi-4-multimodal-instruct)

Microsoft Phi Team<br>
**Released:** 2025-03-03


<p align="center">
  <img src="assets/architectures/phi-4-multimodal-2025-arch.png" alt="Phi-4-multimodal: Text, Vision, and Speech through Mixture-of-LoRAs architecture: Vision and audio encoders, projectors, and modality-specific LoRA routes" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Vision and audio encoders, projectors, and modality-specific LoRA routes. <a href="https://arxiv.org/abs/2503.01743">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Phi-4-multimodalの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4-、5.6-、460。

Phi-4-multimodalの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 200K、128K。

Phi-4-multimodalの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3.5、4。

</details>

### **SigLIP 2: Multilingual Vision-Language Encoders with Native-Aspect-Ratio Support** <a id="siglip-2-multilingual-vision-language-encoders-with-native-aspect-ratio-support"></a>

SigLIP 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2502.14786-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2502.14786) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/google-research/big_vision) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/google/siglip2)

Michael Tschannen, Alexey Gritsenko, Xiao Wang, Muhammad Ferjad Naeem, Ibrahim Alabdulmohsin, Nikhil Parthasarathy, Talfan Evans, Lucas Beyer, et al.<br>
**Released:** 2025-02-20


<p align="center">
  <img src="assets/architectures/siglip-2-2025-arch.png" alt="SigLIP 2: Multilingual Vision-Language Encoders with Native-Aspect-Ratio Support architecture: Combined contrastive, captioning, masked-prediction, and self-distillation objectives" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Combined contrastive, captioning, masked-prediction, and self-distillation objectives. <a href="https://arxiv.org/abs/2502.14786">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

SigLIP 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

SigLIP 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

SigLIP 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 10、12、109、90、2。

</details>

### **EVEv2: Improved Baselines for Encoder-Free Vision-Language Models** <a id="evev2-improved-baselines-for-encoder-free-vision-language-models"></a>

EVEv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/baaivision/EVE/blob/main/EVEv2/README.md)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/BAAI/EVE-7B-HD-v2.0)<br>
EVEv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/evev2-2025-arch.png" alt="EVEv2: Improved Baselines for Encoder-Free Vision-Language Models architecture: EVEv2.0 architecture: lossless patch embeddings and text tokens enter a unified decoder-only VLM whose attention, feed-forward, and normalization layers use modality-specific weights." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> EVEv2.0 architecture: lossless patch embeddings and text tokens enter a unified decoder-only VLM whose attention, feed-forward, and normalization layers use modality-specific weights. <a href="https://arxiv.org/abs/2502.06788">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

EVEv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、10M。
</details>

### **Qwen2.5-VL: Enhanced Vision-Language Capabilities in the Qwen Series** <a id="qwen25-vl-enhanced-vision-language-capabilities-in-the-qwen-series"></a>

Qwen2.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5-。

[![arXiv](https://img.shields.io/badge/Blog-Qwen%20Team%20Blog-b31b1b.svg?style=flat-square)](https://qwenlm.github.io/blog/qwen2.5-vl/)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/QwenLM/Qwen2.5-VL)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct)<br>
Qwen2.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/qwen2-5-vl-2025-arch.png" alt="Qwen2.5-VL: Enhanced Vision-Language Capabilities in the Qwen Series architecture: Qwen2.5-VL framework: a vision encoder processes native-resolution images and dynamic-FPS video into variable-length tokens for a Qwen2.5 language-model decoder with multimodal rotary position encoding." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Qwen2.5-VL framework: a vision encoder processes native-resolution images and dynamic-FPS video into variable-length tokens for a Qwen2.5 language-model decoder with multimodal rotary position encoding. <a href="https://arxiv.org/abs/2502.13923">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Qwen2.5-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5-、3B、7B、72B、18。
</details>

### **VideoLLaMA 3: Frontier Multimodal Foundation Models for Image and Video Understanding** <a id="videollama-3-frontier-multimodal-foundation-models-for-image-and-video-understanding"></a>

VideoLLaMA 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2501.13106-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.13106v1)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/DAMO-NLP-SG/VideoLLaMA3)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2501.13106)<br>
VideoLLaMA 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/videollama-3-2025-arch.png" alt="VideoLLaMA 3: Frontier Multimodal Foundation Models for Image and Video Understanding architecture: VideoLLaMA 3 pipeline with any-resolution vision tokenization and a differential frame pruner that compresses redundant video tokens before language-model processing." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> VideoLLaMA 3 pipeline with any-resolution vision tokenization and a differential frame pruner that compresses redundant video tokens before language-model processing. <a href="https://arxiv.org/abs/2501.13106">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

VideoLLaMA 3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、1、2、3、4、1-。
</details>

### **UI-TARS: Pioneering Automated GUI Interaction with Native Agents** <a id="ui-tars-pioneering-automated-gui-interaction-with-native-agents"></a>

UI-TARSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 10。

[![arXiv](https://img.shields.io/badge/arXiv-2501.12326-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.12326) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/bytedance/UI-TARS) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/bytedance-research/UI-TARS-7B-SFT)<br>
UI-TARSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/ui-tars-2025-arch.png" alt="UI-TARS: Pioneering Automated GUI Interaction with Native Agents architecture: UI-TARS architecture and capability overview, connecting visual GUI observations and interaction histories to perception, action, system-level reasoning, and learning from prior experience." width="820">
</p>
<p align="center"><sub><b>Figure 4.</b> UI-TARS architecture and capability overview, connecting visual GUI observations and interaction histories to perception, action, system-level reasoning, and learning from prior experience. <a href="https://arxiv.org/abs/2501.12326">Source paper</a>, PDF p. 14. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

UI-TARSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1、2、3、4、2-、7B、72B。
</details>

### **MiniMax-01: Scaling Foundation Models with Lightning Attention** <a id="minimax-01-scaling-foundation-models-with-lightning-attention"></a>

MiniMax-01の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 01、3.5-、4。

[![arXiv](https://img.shields.io/badge/arXiv-2501.08313-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.08313)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/MiniMax-AI/MiniMax-01)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/MiniMaxAI/MiniMax-VL-01)<br>
MiniMax-01の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/minimax-01-2025-arch.png" alt="MiniMax-01: Scaling Foundation Models with Lightning Attention architecture: MiniMax-Text-01 backbone architecture, interleaving Lightning Attention and softmax-attention transformer blocks with routed mixture-of-experts feed-forward layers." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> MiniMax-Text-01 backbone architecture, interleaving Lightning Attention and softmax-attention transformer blocks with routed mixture-of-experts feed-forward layers. <a href="https://arxiv.org/abs/2501.08313">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MiniMax-01の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 01、456、45.9、32、2、4。
MiniMax-01の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 01、694、100、2。

</details>

### **MiniCPM-o-2.6: A GPT-4o Level MLLM for Vision, Speech and Multimodal Live Streaming** <a id="minicpm-o-26-a-gpt-4o-level-mllm-for-vision-speech-and-multimodal-live-streaming"></a>

MiniCPM-o-2.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.6、8B。

[![arXiv](https://img.shields.io/badge/Blog-MiniCPM%20Team%20Blog-b31b1b.svg?style=flat-square)](https://openbmb.notion.site/MiniCPM-o-2-6-A-GPT-4o-Level-MLLM-for-Vision-Speech-and-Multimodal-Live-Streaming-on-Your-Phone-185ede1b7a558042b5d5e45e6b237da9)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/OpenBMB/MiniCPM-o)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/openbmb/MiniCPM-o-2_6)<br>
MiniCPM-o-2.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/minicpm-o-2-6-official-arch.png" alt="MiniCPM-o-2.6: A GPT-4o Level MLLM for Vision, Speech and Multimodal Live Streaming architecture: MiniCPM-o 2.6 end-to-end omni-modal streaming architecture, using time-division multiplexing to combine visual, audio, and query streams in a shared backbone with streaming speech decoding." width="820">
</p>
<p align="center"><sub><b>Official architecture diagram.</b> MiniCPM-o 2.6 end-to-end omni-modal streaming architecture, using time-division multiplexing to combine visual, audio, and query streams in a shared backbone with streaming speech decoding. <a href="https://huggingface.co/openbmb/MiniCPM-o-2_6">Primary source</a>. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MiniCPM-o-2.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.6、400M、300M、200M、5-7B。

MiniCPM-o-2.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連参照: <https://arxiv.org/abs/2604.27393>、<https://github.com/OpenBMB/MiniCPM-V>。 値: 4.5、2026。
</details>

### **Eagle 2: Building Post-Training Data Strategies from Scratch for Frontier Vision-Language Models** <a id="eagle-2-building-post-training-data-strategies-from-scratch-for-frontier-vision-language-models"></a>

Eagle 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2501.14818-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.14818)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/NVlabs/EAGLE)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/nvidia/Eagle2-9B)<br>
Eagle 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/eagle-2-2025-arch.png" alt="Eagle 2: Building Post-Training Data Strategies from Scratch for Frontier Vision-Language Models architecture: Eagle 2&#x27;s tiled mixture of vision encoders, combining SigLIP and ConvNeXt features through dynamic image splitting, feature concatenation, pixel shuffle, and an MLP connector to the LLM." width="820">
</p>
<p align="center"><sub><b>Figure 11.</b> Eagle 2&#x27;s tiled mixture of vision encoders, combining SigLIP and ConvNeXt features through dynamic image splitting, feature concatenation, pixel shuffle, and an MLP connector to the LLM. <a href="https://arxiv.org/abs/2501.14818">Source paper</a>, PDF p. 7. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

**Eagle 2** adopts a "diversity first, then quality" data strategy, beginning with a large, diverse pool of over 180 data sources, followed by rigorous filtering and selection. The architecture uses a tiled mixture of vision encoders (MoVE), specifically SigLIP and ConvNeXt-XXLarge, with image tiling to handle high resolutions.  Each image tile is encoded by channel-concatenated MoVE. The vision encoder outputs are concatenated and aligned with the LLM (Qwen2.5) via a simple MLP connector.  A three-stage training recipe is used: Stage 1 trains the connector to align modalities; Stage 1.5 trains the full model on a large, diverse dataset; and Stage 2 fine-tunes on a high-quality instruction-tuning dataset.  Crucially, *all* available visual instruction data is used in Stage 1.5, not just captioning/knowledge data.  Balanced data packing addresses limitations in existing open-source frameworks. The core contribution is the detailed data strategy.  This involves: (1) **Data Collection**: Building a highly diverse data pool (180+ sources) through both passive gathering (monitoring arXiv and Hugging Face) and proactive searching (addressing "bucket effect" via error analysis). (2) **Data Filtering**: Removing low-quality samples based on criteria like mismatched question-answer pairs, irrelevant image-question pairs, repeated text, and numeric formatting issues. (3) **Data Selection**: Choosing optimal subsets based on data source diversity, distribution, and K-means clustering on SSCD image embeddings to ensure balance across types (especially useful for chart data, etc.). (4) **Data Augmentation**: Mining information from input images through techniques like Chain-of-Thought (CoT) explanation generation, rule-based QA generation, and expanding short answers into longer ones. (5) **Data Formating:** remove unnecessary decorations. Training uses a three-stage approach:
Eagle 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1。
Eagle 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5、21.6M。
Eagle 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、4.6M。
</details>

### **Sa2VA: Marrying SAM2 with LLaVA for Dense Grounded Understanding of Images and Videos** <a id="sa2va-marrying-sam2-with-llava-for-dense-grounded-understanding-of-images-and-videos"></a>

Sa2VAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2501.04001-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.04001)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/magic-research/Sa2VA)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2501.04001)<br>
Sa2VAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/sa2va-2025-arch.png" alt="Sa2VA: Marrying SAM2 with LLaVA for Dense Grounded Understanding of Images and Videos architecture: Sa2VA model: text, prompts, images, and videos are encoded for an LLM, whose segmentation token is combined with SAM 2 features to decode image or video masks." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Sa2VA model: text, prompts, images, and videos are encoded for an LLM, whose segmentation token is combined with SAM 2 features to decode image or video masks. <a href="https://arxiv.org/abs/2501.04001">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Sa2VAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、91、93、72,000、2,000、1.5、665K、17K、22K、214K、100K、3.5K、0.6K、1.7K、37K。
</details>

### **VideoChat-Flash: Hierarchical Compression for Long-Context Video Modeling** <a id="videochat-flash-hierarchical-compression-for-long-context-video-modeling"></a>

VideoChat-Flashの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2501.00574-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.00574) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/OpenGVLab/VideoChat-Flash) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/OpenGVLab/VideoChat-Flash-Qwen2_5-2B_res448)<br>
VideoChat-Flashの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/videochat-flash-2025-arch.png" alt="VideoChat-Flash: Hierarchical Compression for Long-Context Video Modeling architecture: VideoChat-Flash framework with hierarchical video-token compression: shared encoders and connectors first compress clips, then the LLM performs video-level compression for long-context inference." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> VideoChat-Flash framework with hierarchical video-token compression: shared encoders and connectors first compress clips, then the LLM performs video-level compression for long-context inference. <a href="https://arxiv.org/abs/2501.00574">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

VideoChat-Flashの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、224、1、0.5M、2、3.5M、2.5M、3、1.1M、1.7M、0.7M、4、448、25、15、114,228、3,444,849。

</details>

### **OmniVLM: A Token-Compressed, Sub-Billion-Parameter Vision-Language Model for Efficient On-Device Inference** <a id="omnivlm-a-token-compressed-sub-billion-parameter-vision-language-model-for-efficient-on-device-inference"></a>

OmniVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 729、81、5-0.5B、400M。

[![arXiv](https://img.shields.io/badge/arXiv-2412.11475-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2412.11475)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/NexaAIDev/OmniVLM-968M)<br>
OmniVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/omnivlm-2024-arch.png" alt="OmniVLM: A Token-Compressed, Sub-Billion-Parameter Vision-Language Model for Efficient On-Device Inference architecture: OmniVLM architecture: a vision transformer feeds a reshape-based projector that compresses image tokens before they join text tokens in the Qwen2.5-0.5B-Instruct language model." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> OmniVLM architecture: a vision transformer feeds a reshape-based projector that compresses image tokens before they join text tokens in the Qwen2.5-0.5B-Instruct language model. <a href="https://arxiv.org/abs/2412.11475">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

OmniVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 91、729、93、81、1、400M、5-0.5B、2、3、81-、9.、1.。
</details>

### **Apollo: An Exploration of Video Understanding in Large Multimodal Models** <a id="apollo-an-exploration-of-video-understanding-in-large-multimodal-models"></a>

Apolloの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3B、7B。

[![arXiv](https://img.shields.io/badge/arXiv-2412.10360-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2412.10360)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://apollo-lmms.github.io/)<br>
Apolloの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/apollo-2024-arch.png" alt="Apollo: An Exploration of Video Understanding in Large Multimodal Models architecture: Apollo architecture: image and video encoders process N-frame clips, interpolated features are concatenated channel-wise, and a Perceiver resampler produces a fixed token set for the language model." width="820">
</p>
<p align="center"><sub><b>Figure 8.</b> Apollo architecture: image and video encoders process N-frame clips, interpolated features are concatenated channel-wise, and a Perceiver resampler produces a fixed token set for the language model. <a href="https://arxiv.org/abs/2412.10360">Source paper</a>, PDF p. 21. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Apolloの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、1.5B、3B、7B、32、3-、8-32。
or clips is sufficient for efficient token integration. Training Stages is also disscussed, concluding that progressively unfreezing the different components in different stages leads to superior model training dynamics. Finally, training the Video Encoder is discussed. The paper concludes that Finetuning video encoders on only video data further improves overall performance,
Apolloの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
Apolloの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **DeepSeek-VL2: Mixture-of-Experts Vision-Language Models for Advanced Multimodal Understanding** <a id="deepseek-vl2-mixture-of-experts-vision-language-models-for-advanced-multimodal-understanding"></a>

DeepSeek-VL2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2412.10302-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2412.10302)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/deepseek-ai/DeepSeek-VL2)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/spaces/deepseek-ai/deepseek-vl2-small)<br>
DeepSeek-VL2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/deepseek-vl2-2024-arch.png" alt="DeepSeek-VL2: Mixture-of-Experts Vision-Language Models for Advanced Multimodal Understanding architecture: DeepSeek-VL2 architecture: dynamic image tiling feeds a vision encoder and vision-language adapter whose image tokens join text tokens in a DeepSeek-MoE language model." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> DeepSeek-VL2 architecture: dynamic image tiling feeds a vision encoder and vision-language adapter whose image tokens join text tokens in a DeepSeek-MoE language model. <a href="https://arxiv.org/abs/2412.10302">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

DeepSeek-VL2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1、2、3、384、9、729、1152、196、14、210、1.0B、2.8B、4.5B、1.2M、70、30、12M、800B。

</details>

### **Maya: An Instruction Finetuned Multilingual Multimodal Model** <a id="maya-an-instruction-finetuned-multilingual-multimodal-model"></a>

Mayaの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2412.07112-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2412.07112)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/nahidalam/maya)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/maya-multimodal/maya)<br>
Mayaの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/maya-2024-arch.png" alt="Maya: An Instruction Finetuned Multilingual Multimodal Model architecture: Maya&#x27;s LLaVA-derived architecture, projecting multilingual SigLIP vision features into the embedding space of a multilingual language model for instruction following." width="820">
</p>
<p align="center"><sub><b>Figure 7.</b> Maya&#x27;s LLaVA-derived architecture, projecting multilingual SigLIP vision features into the embedding space of a multilingual language model for instruction following. <a href="https://arxiv.org/abs/2412.07112">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Mayaの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連コード: `Zv = g(Xv)`、`W`、`Hv`。 値: 1.5、23、8B、2-、35B、7,531、3、150K、10、2、558,000、7B、13B。
</details>

### **InternVL 2.5: Expanding Performance Boundaries of Open-Source Multimodal Models with Model, Data, and Test-Time Scaling** <a id="internvl-25-expanding-performance-boundaries-of-open-source-multimodal-models-with-model-data-and-test-time-scaling"></a>

InternVL 2.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.5、2.0、3.5-。

[![arXiv](https://img.shields.io/badge/arXiv-2412.05271-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2412.05271)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/OpenGVLab/InternVL)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/OpenGVLab/InternVL2_5-78B)<br>
InternVL 2.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/internvl-2-5-2024-arch.png" alt="InternVL 2.5: Expanding Performance Boundaries of Open-Source Multimodal Models with Model, Data, and Test-Time Scaling architecture: InternVL 2.5&#x27;s ViT-MLP-LLM architecture with pixel-unshuffle visual-token compression." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> InternVL 2.5&#x27;s ViT-MLP-LLM architecture with pixel-unshuffle visual-token compression. <a href="https://arxiv.org/abs/2412.05271">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

InternVL 2.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連コード: `nmax`、`r`。 値: 2.5、6B、300M、2-、1024、256、2.0、1、2、3。
</details>

### **PaliGemma 2: A Family of Versatile VLMs for Transfer** <a id="paligemma-2-a-family-of-versatile-vlms-for-transfer"></a>

PaliGemma 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、3B、10B、28B。

[![arXiv](https://img.shields.io/badge/arXiv-2412.03555-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2412.03555)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/google-research/big_vision/blob/main/big_vision/configs/proj/paligemma/README.md)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/collections/google/paligemma-2-release-67500e1e1dbfdd4dee27ba48)<br>
PaliGemma 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/paligemma-2-2024-arch.png" alt="PaliGemma 2: A Family of Versatile VLMs for Transfer architecture: PaliGemma 2 processes variable-resolution images with SigLIP, a linear projector, and Gemma 2." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> PaliGemma 2 processes variable-resolution images with SigLIP, a linear projector, and Gemma 2. <a href="https://arxiv.org/abs/2412.03555">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

PaliGemma 2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、2B、9B、27B、3B、10B、28B、1、50、10、3。
</details>

### **ShowUI: Vision-Language-Action Modeling for GUI Agents** <a id="showui-vision-language-action-modeling-for-gui-agents"></a>

ShowUIの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2B。

[![arXiv](https://img.shields.io/badge/arXiv-2411.17465-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2411.17465) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/showlab/ShowUI) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/showlab/ShowUI-2B)

Kevin Qinghong Lin, Linjie Li, Difei Gao, Zhengyuan Yang, Shiwei Wu, Zechen Bai, Weixian Lei, Lijuan Wang, Mike Zheng Shou<br>
**Released:** 2024-11-26


<p align="center">
  <img src="assets/architectures/showui-2024-arch.png" alt="ShowUI: Vision-Language-Action Modeling for GUI Agents architecture: UI-guided visual-token selection and interleaved action history" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> UI-guided visual-token selection and interleaved action history. <a href="https://arxiv.org/abs/2411.17465">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

ShowUIの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2B、33、1.4。

ShowUIの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 256K。

ShowUIの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **SmolVLM: A Small, Efficient, and Open-Source Vision-Language Model** <a id="smolvlm-a-small-efficient-and-open-source-vision-language-model"></a>

SmolVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2B、2.0。

[![arXiv](https://img.shields.io/badge/Blog-SmolVLM%20Blog-b31b1b.svg?style=flat-square)](https://huggingface.co/blog/smolvlm)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/huggingface/smollm)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct)<br>
SmolVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/smolvlm-official-arch.png" alt="SmolVLM: A Small, Efficient, and Open-Source Vision-Language Model architecture: SmolVLM&#x27;s SigLIP vision encoder, aggressive pixel-shuffle compression, and SmolLM2 language backbone." width="820">
</p>
<p align="center"><sub><b>Official architecture diagram.</b> SmolVLM&#x27;s SigLIP vision encoder, aggressive pixel-shuffle compression, and SmolLM2 language backbone. <a href="https://huggingface.co/blog/smolvlm">Primary source</a>. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

SmolVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3.1、8B、1.7B、9、1.。

SmolVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連参照: <https://huggingface.co/blog/smolvlm2>。 値: 20、2025、256M、500M、2.2B。
</details>

### **AIMv2: Multimodal Autoregressive Pre-training of Large Vision Encoders** <a id="aimv2-multimodal-autoregressive-pre-training-of-large-vision-encoders"></a>

AIMv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2411.14402-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2411.14402)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/apple/ml-aim)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/apple/aimv2-large-patch14-224)<br>
AIMv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/aimv2-2024-arch.png" alt="AIMv2: Multimodal Autoregressive Pre-training of Large Vision Encoders architecture: AIMv2&#x27;s prefix-attention vision encoder and joint autoregressive multimodal decoder." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> AIMv2&#x27;s prefix-attention vision encoder and joint autoregressive multimodal decoder. <a href="https://arxiv.org/abs/2411.14402">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

AIMv2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2B、300、3。
</details>

### **LLaVA-CoT: Let Vision Language Models Reason Step-by-Step** <a id="llava-cot-let-vision-language-models-reason-step-by-step"></a>

LLaVA-CoTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2411.10440-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2411.10440)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/PKU-YuanGroup/LLaVA-CoT)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/Xkev/Llama-3.2V-11B-cot)<br>
LLaVA-CoTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/llava-cot-2024-arch.png" alt="LLaVA-CoT: Let Vision Language Models Reason Step-by-Step architecture: LLaVA-CoT&#x27;s Best-of-N, stage-wise beam-search, and stage-wise retracing inference procedures." width="820">
</p>
<p align="center"><sub><b>Figure 4.</b> LLaVA-CoT&#x27;s Best-of-N, stage-wise beam-search, and stage-wise retracing inference procedures. <a href="https://arxiv.org/abs/2411.10440">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

LLaVA-CoTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3.2-。
</details>

### **LLM2CLIP: Powerful Language Model Unlocks Richer Visual Representation** <a id="llm2clip-powerful-language-model-unlocks-richer-visual-representation"></a>

LLM2CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2411.04997-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2411.04997)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/microsoft/LLM2CLIP)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/microsoft/LLM2CLIP-EVA02-B-16)<br>
LLM2CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/llm2clip-2024-arch.png" alt="LLM2CLIP: Powerful Language Model Unlocks Richer Visual Representation architecture: LLM2CLIP fine-tunes an LLM for caption discrimination before using it to train stronger CLIP representations." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> LLM2CLIP fine-tunes an LLM for caption discrimination before using it to train stronger CLIP representations. <a href="https://arxiv.org/abs/2411.04997">Source paper</a>, PDF p. 1. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

LLM2CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1、3、8B、2。
LLM2CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 15M、3M、103、12M、1B。
</details>

### **Tarsier2: Advancing Large Vision-Language Models from Detailed Video Description to Comprehensive Video Understanding** <a id="tarsier2-advancing-large-vision-language-models-from-detailed-video-description-to-comprehensive-video-understanding"></a>

Tarsier2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5。

[![arXiv](https://img.shields.io/badge/arXiv-2501.07888-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.07888) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/bytedance/tarsier) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/omni-research/Tarsier-7b)<br>
Tarsier2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


> **Architecture figure:** The paper contains capability, dataset, DPO-construction, and benchmark figures but inherits Qwen2-VL and provides no architecture overview; a training diagram would be misleading.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Tarsier2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 11、40、150K、15、585K。
</details>

### **Janus and Janus-Pro: Decoupled Visual Understanding and Generation** <a id="janus-and-janus-pro-decoupled-visual-understanding-and-generation"></a>

Janus and Janus-Proの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![Janus](https://img.shields.io/badge/arXiv-2410.13848-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2410.13848) [![Janus Pro](https://img.shields.io/badge/arXiv-2501.17811-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2501.17811)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/deepseek-ai/Janus)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/deepseek-ai/Janus-Pro-7B)<br>
DeepSeek-AI<br>
**Released:** 2024-10-17


<p align="center">
  <img src="assets/architectures/janus-and-janus-pro-2025-arch.png" alt="Janus and Janus-Pro: Decoupled Visual Understanding and Generation architecture: Janus-Pro decouples visual understanding and generation encoders around a shared autoregressive transformer." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Janus-Pro decouples visual understanding and generation encoders around a shared autoregressive transformer. <a href="https://arxiv.org/abs/2501.17811">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Janus and Janus-Proの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Janus and Janus-Proの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2025、1.5B、7B、90M、72M。
</details>

### **ARIA: An Open Multimodal Native Mixture-of-Experts Model** <a id="aria-an-open-multimodal-native-mixture-of-experts-model"></a>

ARIAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4-。

[![arXiv](https://img.shields.io/badge/arXiv-2410.05993-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2410.05993)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/rhymes-ai/Aria)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/blog/RhymesAI/aria)<br>
ARIAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


> **Architecture figure:** ARIA&#x27;s visual encoder, projection layer, and fine-grained MoE are described in prose and a configuration table; its only numbered model figure visualizes expert specialization, not architecture.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

ARIAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3.5B、3.9B、24.9B、66、2、6、438M、4-、1、6.4T、8K、400B、3、64K、4、20B。
ARIAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **Emu3: Next-Token Prediction across Text, Image, and Video** <a id="emu3-next-token-prediction-across-text-image-and-video"></a>

Emu3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B。

[![arXiv](https://img.shields.io/badge/arXiv-2409.18869-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2409.18869) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/baaivision/Emu3) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/collections/BAAI/emu3-66f4e64f70850ff358a2e60f)

Xinlong Wang, Xiaosong Zhang, Zhengxiong Luo, Quan Sun, Yufeng Cui, Jinsheng Wang, Fan Zhang, Yueze Wang, Zhen Li, Qiying Yu, Yingli Zhao, Yulong Ao, Xuebin Min, Tao Li, Boya Wu, et al.<br>
**Released:** 2024-09-27


<p align="center">
  <img src="assets/architectures/emu3-2024-arch.png" alt="Emu3: Next-Token Prediction across Text, Image, and Video architecture: A single next-token objective across text, image, and video tokens" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> A single next-token objective across text, image, and video tokens. <a href="https://arxiv.org/abs/2409.18869">Source paper</a>, PDF p. 1. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Emu3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Emu3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、0.2、0.8。

Emu3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Molmo and PixMo: Open Weights, Open Data, and Grounded Pointing** <a id="molmo-and-pixmo-open-weights-open-data-and-grounded-pointing"></a>

Molmo and PixMoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2409.17146-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2409.17146) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/allenai/molmo) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models_&_Data-blue?style=flat-square)](https://huggingface.co/collections/allenai/molmo-66f379e6fe3b8ef090a8ca19)

Matt Deitke, Christopher Clark, Sangho Lee, Rohun Tripathi, Yue Yang, Jae Sung Park, Mohammadreza Salehi, Niklas Muennighoff, Kyle Lo, Luca Soldaini, Jiasen Lu, et al.<br>
**Released:** 2024-09-25


<p align="center">
  <img src="assets/architectures/molmo-and-pixmo-2024-arch.png" alt="Molmo and PixMo: Open Weights, Open Data, and Grounded Pointing architecture: Vision encoding, multimodal connection, language decoding, and grounded pointing" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Vision encoding, multimodal connection, language decoding, and grounded pointing. <a href="https://arxiv.org/abs/2409.17146">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Molmo and PixMoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14、1B、7B、72B。

Molmo and PixMoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Molmo and PixMoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Llama 3.2-Vision: Enhanced Multimodal Capabilities Built on Llama 3** <a id="llama-32-vision-enhanced-multimodal-capabilities-built-on-llama-3"></a>

Llama 3.2-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3.2-、3、11B、90B。

[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/meta-llama/llama-models) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/meta-llama/Llama-3.2-11B-Vision)<br>
Llama 3.2-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


> **Architecture figure:** The official source describes the image encoder and cross-attention adapter in prose; benchmark tables and marketing artwork are not legitimate substitutes.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Llama 3.2-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連コード: `<|image|>`、`brave_search`、`wolfram_alpha`。 値: 3.2-、3、6B、2023、3.2。
</details>

### **NVLM: Open Frontier-Class Multimodal LLMs** <a id="nvlm-open-frontier-class-multimodal-llms"></a>

NVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.0、1-。

[![arXiv](https://img.shields.io/badge/arXiv-2409.11402-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2409.11402)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/NVIDIA/Megatron-LM/tree/NVLM-1.0)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/nvidia/NVLM-D-72B)<br>
NVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/nvlm-2024-arch.png" alt="NVLM: Open Frontier-Class Multimodal LLMs architecture: NVLM-X, NVLM-H, and NVLM-D share a dynamic-high-resolution visual pathway but integrate vision differently." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> NVLM-X, NVLM-H, and NVLM-D share a dynamic-high-resolution visual pathway but integrate vision differently. <a href="https://arxiv.org/abs/2409.11402">Source paper</a>, PDF p. 9. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

NVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連コード: `<tile_1>`。 値: 6B、5、6、1024、256、72B、2-、34B、1-、115M、40、40-。
</details>

### **Pixtral 12B: A Cutting-Edge Open Multimodal Language Model** <a id="pixtral-12b-a-cutting-edge-open-multimodal-language-model"></a>

Pixtral 12Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 12B、12-。

[![arXiv](https://img.shields.io/badge/arXiv-2410.07073-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2410.07073)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/huggingface/transformers/blob/main/docs/source/en/model_doc/pixtral.md)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/mistralai/Pixtral-12B-2409)<br>
Pixtral 12Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/pixtral-12b-2024-arch.png" alt="Pixtral 12B: A Cutting-Edge Open Multimodal Language Model architecture: Pixtral combines a variable-resolution vision encoder with a 128K-context multimodal decoder." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Pixtral combines a variable-resolution vision encoder with a 128K-context multimodal decoder. <a href="https://arxiv.org/abs/2410.07073">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Pixtral 12Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 12B、128K、91、93、12-。

Pixtral 12Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連参照: <https://mistral.ai/news/pixtral-large>、<https://mistral.ai/news/mistral-small-4/>。 値: 2024、4、2026。
</details>

### **VILA-U: Fully Autoregressive Visual Understanding and Generation** <a id="vila-u-fully-autoregressive-visual-understanding-and-generation"></a>

VILA-Uの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2409.04429-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2409.04429) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/mit-han-lab/vila-u)

VILA-U Team<br>
**Released:** 2024-09-06


<p align="center">
  <img src="assets/architectures/vila-u-2024-arch.png" alt="VILA-U: Fully Autoregressive Visual Understanding and Generation architecture: A shared visual tokenizer, autoregressive model, and modality decoders" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> A shared visual tokenizer, autoregressive model, and modality decoders. <a href="https://arxiv.org/abs/2409.04429">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

VILA-Uの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

VILA-Uの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Qwen2-VL: A Powerful Open-Source Vision-Language Model for Image and Video Understanding** <a id="qwen2-vl-a-powerful-open-source-vision-language-model-for-image-and-video-understanding"></a>

Qwen2-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/QwenLM/Qwen2-VL) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/collections/Qwen/qwen2-vl-66cee7455501d7126940800d)<br>
Bai, Jinze and Bai, Shuai and Yang, Shusheng and Wang, Shijie and Tan, Sinan and Wang, Peng and Lin, Junyang and Zhou, Chang and Zhou, Jingren<br>


<p align="center">
  <img src="assets/architectures/qwen2-vl-2024-arch.png" alt="Qwen2-VL: A Powerful Open-Source Vision-Language Model for Image and Video Understanding architecture: Qwen2-VL&#x27;s M-RoPE decomposes multimodal position encoding into temporal, height, and width components." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Qwen2-VL&#x27;s M-RoPE decomposes multimodal position encoding into temporal, height, and width components. <a href="https://arxiv.org/abs/2409.12191">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Qwen2-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 600M、20。
</details>

### **EAGLE: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders** <a id="eagle-exploring-the-design-space-for-multimodal-llms-with-mixture-of-encoders"></a>

EAGLEの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2408.15998-b31b1b.svg?style=flat-square)](https://arxiv.org/pdf/2408.15998) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/NVlabs/EAGLE) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/spaces/NVEagle/Eagle-X5-13B-Chat)<br>
Min Shi, Fuxiao Liu, Shihao Wang, Shijia Liao, Subhashree Radhakrishnan, De-An Huang, Hongxu Yin, Karan Sapra, Yaser Yacoob, Humphrey Shi, Bryan Catanzaro, Andrew Tao, Jan Kautz, Zhiding Yu, Guilin Liu<br>


<p align="center">
  <img src="assets/architectures/eagle-2024-arch.png" alt="EAGLE: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders architecture: EAGLE explores mixtures of vision experts and alternative fusion strategies for multimodal language models." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> EAGLE explores mixtures of vision experts and alternative fusion strategies for multimodal language models. <a href="https://arxiv.org/abs/2408.15998">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

EAGLEの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **Show-o: Autoregressive Language and Discrete-Diffusion Vision in One Transformer** <a id="show-o-autoregressive-language-and-discrete-diffusion-vision-in-one-transformer"></a>

Show-oの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2408.12528-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2408.12528) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/showlab/Show-o) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/showlab/show-o)

Show Lab<br>
**Released:** 2024-08-22


<p align="center">
  <img src="assets/architectures/show-o-2024-arch.png" alt="Show-o: Autoregressive Language and Discrete-Diffusion Vision in One Transformer architecture: Causal text attention and full-attention discrete image diffusion" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Causal text attention and full-attention discrete image diffusion. <a href="https://arxiv.org/abs/2408.12528">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Show-oの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Show-oの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **Idefics3-8B: Building and Better Understanding Vision-Language Models** <a id="idefics3-8b-building-and-better-understanding-vision-language-models"></a>

Idefics3-8Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B。

[![arXiv](https://img.shields.io/badge/arXiv-2408.12637-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2408.12637) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/spaces/HuggingFaceM4/idefics3)<br>
Hugo Laurençon, Andrés Marafioti, Victor Sanh, Léo Tronchon<br>


<p align="center">
  <img src="assets/architectures/idefics3-8b-2024-arch.png" alt="Idefics3-8B: Building and Better Understanding Vision-Language Models architecture: Idefics3 maps vision-encoder features into interleaved visual tokens consumed by an autoregressive language model." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Idefics3 maps vision-encoder features into interleaved visual tokens consumed by an autoregressive language model. <a href="https://arxiv.org/abs/2408.12637">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Idefics3-8Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、3.1、1.5、4、169、364、1820、13.7-。
</details>

### **Transfusion: Next-Token Text Prediction and Continuous Image Diffusion** <a id="transfusion-next-token-text-prediction-and-continuous-image-diffusion"></a>

Transfusionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2408.11039-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2408.11039)

Meta FAIR<br>
**Released:** 2024-08-20


<p align="center">
  <img src="assets/architectures/transfusion-2024-arch.png" alt="Transfusion: Next-Token Text Prediction and Continuous Image Diffusion architecture: A shared Transformer with autoregressive text and continuous image diffusion" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> A shared Transformer with autoregressive text and continuous image diffusion. <a href="https://arxiv.org/abs/2408.11039">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Transfusionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

Transfusionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、16。

</details>

### **mPLUG-Owl3: Hyper-Attention for Long Image Sequences** <a id="mplug-owl3-hyper-attention-for-long-image-sequences"></a>

mPLUG-Owl3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2408.04840-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2408.04840) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/X-PLUG/mPLUG-Owl) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Model-blue?style=flat-square)](https://huggingface.co/mPLUG/mPLUG-Owl3-7B-240728)

mPLUG-Owl Team<br>
**Released:** 2024-08-09


<p align="center">
  <img src="assets/architectures/mplug-owl3-2024-arch.png" alt="mPLUG-Owl3: Hyper-Attention for Long Image Sequences architecture: Vision encoding and Hyper-Attention blocks inside the language model" width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Vision encoding and Hyper-Attention blocks inside the language model. <a href="https://arxiv.org/abs/2408.04840">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

mPLUG-Owl3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

mPLUG-Owl3の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **VITA: Towards Open-Source Interactive Omni Multimodal LLM** <a id="vita-towards-open-source-interactive-omni-multimodal-llm"></a>

VITAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2408.05211-b31b1b.svg?style=flat-square)](https://arxiv.org/pdf/2408.05211) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/VITA-MLLM/VITA) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/VITA-MLLM)<br>
VITAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/vita-2024-arch.png" alt="VITA: Towards Open-Source Interactive Omni Multimodal LLM architecture: VITA unifies text, audio, image, and video inputs with state tokens, an LLM, and speech output." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> VITA unifies text, audio, image, and video inputs with state tokens, an LLM, and speech output. <a href="https://arxiv.org/abs/2408.05211">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

VITAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 300M、256、24-、25、2。
</details>

### **LLaVA-OneVision: Easy Visual Task Transfer** <a id="llava-onevision-easy-visual-task-transfer"></a>

LLaVA-OneVisionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2408.03326-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2408.03326) [![Website](https://img.shields.io/badge/🌐-Website-blue)](https://llava-vl.github.io/blog/2024-08-05-llava-onevision/) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2408.03326)<br>
Bo Li, Yuanhan Zhang, Dong Guo, Renrui Zhang, Feng Li, Hao Zhang, Kaichen Zhang, Yanwei Li, Ziwei Liu, Chunyuan Li<br>


<p align="center">
  <img src="assets/architectures/llava-onevision-2024-arch.png" alt="LLaVA-OneVision: Easy Visual Task Transfer architecture: LLaVA-OneVision extends the minimal LLaVA vision-encoder, projector, and LLM architecture to multiple visual signals." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> LLaVA-OneVision extends the minimal LLaVA vision-encoder, projector, and LLM architecture to multiple visual signals. <a href="https://arxiv.org/abs/2408.03326">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

LLaVA-OneVisionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、2-。

LLaVA-OneVisionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連参照: <https://arxiv.org/abs/2509.23661>、<https://github.com/EvolvingLMMs-Lab/LLaVA-OneVision-1.5>。 値: 28、2025、1.5、85M、26M、64B、16,000。
</details>

### **VILA²: VILA Augmented VILA** <a id="vila²-vila-augmented-vila"></a>

VILA²の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2407.17453-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2407.17453) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2407.17453)<br>
Yunhao Fang, Ligeng Zhu, Yao Lu, Yan Wang, Pavlo Molchanov, Jang Hyun Cho, Marco Pavone, Song Han, Hongxu Yin<br>


<p align="center">
  <img src="assets/architectures/vila-2024-arch.png" alt="VILA²: VILA Augmented VILA architecture: VILA² improves itself through generic model-in-the-loop recaptioning and specialist-model augmentation." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> VILA² improves itself through generic model-in-the-loop recaptioning and specialist-model augmentation. <a href="https://arxiv.org/abs/2407.17453">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

VILA²の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、8B、34B、6B。
</details>

### **INF-LLaVA: High-Resolution Image Perception for Multimodal Large Language Models** <a id="inf-llava-high-resolution-image-perception-for-multimodal-large-language-models"></a>

INF-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2407.16198-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2407.16198) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/WeihuangLin/INF-LLaVA) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2407.16198)<br>
Yiwei Ma, Zhibin Wang, Xiaoshuai Sun, Weihuang Lin, Qiang Zhou, Jiayi Ji, Rongrong Ji<br>


<p align="center">
  <img src="assets/architectures/inf-llava-2024-arch.png" alt="INF-LLaVA: High-Resolution Image Perception for Multimodal Large Language Models architecture: INF-LLaVA combines dual-perspective cropping, CLIP encoding, feature recombination, enhancement, and language reasoning." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> INF-LLaVA combines dual-perspective cropping, CLIP encoding, feature recombination, enhancement, and language reasoning. <a href="https://arxiv.org/abs/2407.16198">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

INF-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **SlowFast-LLaVA: A Strong Training-Free Baseline for Video Large Language Models** <a id="slowfast-llava-a-strong-training-free-baseline-for-video-large-language-models"></a>

SlowFast-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2407.15841-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2407.15841) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2407.15841)<br>
Mingze Xu, Mingfei Gao, Zhe Gan, Hong-You Chen, Zhengfeng Lai, Haiming Gang, Kai Kang, Afshin Dehghan<br>


<p align="center">
  <img src="assets/architectures/slowfast-llava-2024-arch.png" alt="SlowFast-LLaVA: A Strong Training-Free Baseline for Video Large Language Models architecture: SlowFast-LLaVA combines low-frame-rate spatial detail with high-frame-rate motion features." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> SlowFast-LLaVA combines low-frame-rate spatial detail with high-frame-rate motion features. <a href="https://arxiv.org/abs/2407.15841">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

SlowFast-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8、64。
</details>

### **EVLM: An Efficient Vision-Language Model for Visual Understanding** <a id="evlm-an-efficient-vision-language-model-for-visual-understanding"></a>

EVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2407.14177-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2407.14177) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2407.14177)<br>
Kaibing Chen, Dong Shen, Hanwen Zhong, Huasong Zhong, Kui Xia, Di Xu, Wei Yuan, Yifei Hu, Bin Wen, Tianke Zhang, Changyi Liu, Dewen Fan, Huihui Xiao, Jiahong Wu, Fan Yang, Size Li, Di Zhang<br>


<p align="center">
  <img src="assets/architectures/evlm-2024-arch.png" alt="EVLM: An Efficient Vision-Language Model for Visual Understanding architecture: EVLM injects hierarchical EVA2-CLIP features into the language model through gated cross-attention layers." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> EVLM injects hierarchical EVA2-CLIP features into the language model through gated cross-attention layers. <a href="https://arxiv.org/abs/2407.14177">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

EVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.4B、8、40、16、14B、1.0。
</details>

### **InternLM-XComposer-2.5: A Versatile Large Vision Language Model Supporting Long-Contextual Input and Output** <a id="internlm-xcomposer-25-a-versatile-large-vision-language-model-supporting-long-contextual-input-and-output"></a>

InternLM-XComposer-2.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.5、7B。

[![arXiv](https://img.shields.io/badge/arXiv-2407.03320-b31b1b.svg?style=flat-square)](https://arxiv.org/pdf/2407.03320) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/InternLM/InternLM-XComposer) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/spaces/Willow123/InternLM-XComposer)<br>
Pan Zhang, Xiaoyi Dong, Yuhang Zang, Yuhang Cao, Rui Qian, Lin Chen, Qipeng Guo, Haodong Duan, Bin Wang, Linke Ouyang, Songyang Zhang, Wenwei Zhang, Yining Li, Yang Gao, Peng Sun, Xinyue Zhang, Wei Li, Jingwen Li, Wenhai Wang, Hang Yan, Conghui He, Xingcheng Zhang, Kai Chen, Jifeng Dai, Yu Qiao, Dahua Lin, Jiaqi Wang<br>


<p align="center">
  <img src="assets/architectures/internlm-xcomposer-2-5-2024-arch.png" alt="InternLM-XComposer-2.5: A Versatile Large Vision Language Model Supporting Long-Contextual Input and Output architecture: InternLM-XComposer-2.5&#x27;s framework supports text, single and multiple images, and video inputs." width="820">
</p>
<p align="center"><sub><b>Figure 5.</b> InternLM-XComposer-2.5&#x27;s framework supports text, single and multiple images, and video inputs. <a href="https://arxiv.org/abs/2407.03320">Source paper</a>, PDF p. 6. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

InternLM-XComposer-2.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.5、2、2-、14、7B。
</details>

### **OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding** <a id="omg-llava-bridging-image-level-object-level-pixel-level-reasoning-and-understanding"></a>

OMG-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2406.19389-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2406.19389) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/lxtGH/OMG-Seg) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2406.19389)<br>
Tao Zhang, Xiangtai Li, Hao Fei, Haobo Yuan, Shengqiong Wu, Shunping Ji, Chen Change Loy, Shuicheng Yan<br>


<p align="center">
  <img src="assets/architectures/omg-llava-2024-arch.png" alt="OMG-LLaVA: Bridging Image-level, Object-level, Pixel-level Reasoning and Understanding architecture: OMG-LLaVA connects OMG-Seg visual tokens and prompts to an LLM that can decode segmentation outputs." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> OMG-LLaVA connects OMG-Seg visual tokens and prompts to an LLM that can decode segmentation outputs. <a href="https://arxiv.org/abs/2406.19389">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

OMG-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **Cambrian-1: Vision-Centric Multimodal LLMs** <a id="cambrian-1-vision-centric-multimodal-llms"></a>

Cambrian-1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1、8B、13B、34B。

[![arXiv](https://img.shields.io/badge/arXiv-2406.16860-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2406.16860) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/cambrian-mllm/cambrian)

Shengbang Tong, Ellis Brown, Penghao Wu, Sanghyun Woo, Manoj Middepogu, Sai Charitha Akula, Jihan Yang, Shusheng Yang, Adithya Iyer, Xichen Pan, Ziteng Wang, Rob Fergus, Yann LeCun, Saining Xie<br>
**Released:** 2024-06-24


<p align="center">
  <img src="assets/architectures/cambrian-1-2024-arch.png" alt="Cambrian-1: Vision-Centric Multimodal LLMs architecture: Spatial Vision Aggregation across multiple visual encoders and decoder layers" width="820">
</p>
<p align="center"><sub><b>Figure 8.</b> Spatial Vision Aggregation across multiple visual encoders and decoder layers. <a href="https://arxiv.org/abs/2406.16860">Source paper</a>, PDF p. 13. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Cambrian-1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1、3、1.5、2-。

Cambrian-1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.5M、7M。

Cambrian-1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7M、10M。

</details>

### **EVE: Unveiling Encoder-Free Vision-Language Models** <a id="eve-unveiling-encoder-free-vision-language-models"></a>

EVEの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 35M。

[![arXiv](https://img.shields.io/badge/arXiv-2406.11832-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2406.11832)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/baaivision/EVE)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/BAAI/EVE-7B-HD-v1.0)<br>
EVEの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/eve-2024-arch.png" alt="EVE: Unveiling Encoder-Free Vision-Language Models architecture: EVE combines patch embedding, a decoder-only backbone, patch alignment, and next-word prediction without a separate vision encoder." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> EVE combines patch embedding, a decoder-only backbone, patch alignment, and next-word prediction without a separate vision encoder. <a href="https://arxiv.org/abs/2406.11832">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

EVEの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連コード: `<CLS>`、`<SPL>`。 値: 7B、14、16M、33M、665K、1。
EVEの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 33M、1.5、665K。
</details>

### **Ovis: Structural Visual-Text Embedding Alignment** <a id="ovis-structural-visual-text-embedding-alignment"></a>

Ovisの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2405.20797-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2405.20797) [![Ovis 2.5](https://img.shields.io/badge/arXiv-2508.11737-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2508.11737) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/AIDC-AI/Ovis) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Ovis2.5-blue?style=flat-square)](https://huggingface.co/AIDC-AI/Ovis2.5-9B)

Alibaba International Digital Commerce<br>
**Released:** 2024-06-14


<p align="center">
  <img src="assets/architectures/ovis-2024-arch.png" alt="Ovis: Structural Visual-Text Embedding Alignment architecture: Visual-token probability distributions and structural visual embedding lookup" width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Visual-token probability distributions and structural visual embedding lookup. <a href="https://arxiv.org/abs/2405.20797">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Ovisの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、1.6。

Ovisの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 26、2025、5、1B、34B、15、2。

</details>

### **Parrot: Multilingual Visual Instruction Tuning** <a id="parrot-multilingual-visual-instruction-tuning"></a>

Parrotの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2406.02539-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2406.02539) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/AIDC-AI/Parrot)<br>
Hai-Long Sun, Da-Wei Zhou, Yang Li, Shiyin Lu, Chao Yi, Qing-Guo Chen, Zhao Xu, Weihua Luo, Kaifu Zhang, De-Chuan Zhan, Han-Jia Ye<br>


<p align="center">
  <img src="assets/architectures/parrot-2024-arch.png" alt="Parrot: Multilingual Visual Instruction Tuning architecture: PARROT aligns multilingual visual features through a projector, multilingual mixture of experts, and language model." width="820">
</p>
<p align="center"><sub><b>Figure 5.</b> PARROT aligns multilingual visual features through a projector, multilingual mixture of experts, and language model. <a href="https://arxiv.org/abs/2406.02539">Source paper</a>, PDF p. 6. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Parrotの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14、5-。
</details>

### **ConvLLaVA: Hierarchical Backbones as Visual Encoder for Large Multimodal Models** <a id="convllava-hierarchical-backbones-as-visual-encoder-for-large-multimodal-models"></a>

ConvLLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2405.15738-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2405.15738) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/alibaba/conv-llava) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/papers/2405.15738)<br>
Chunjiang Ge, Sijie Cheng, Ziming Wang, Jiale Yuan, Yuan Gao, Jun Song, Shiji Song, Gao Huang, Bo Zheng<br>


<p align="center">
  <img src="assets/architectures/convllava-2024-arch.png" alt="ConvLLaVA: Hierarchical Backbones as Visual Encoder for Large Multimodal Models architecture: ConvLLaVA uses a hierarchical ConvNeXt vision encoder to compress visual tokens between stages." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> ConvLLaVA uses a hierarchical ConvNeXt vision encoder to compress visual tokens between stages. <a href="https://arxiv.org/abs/2405.15738">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

ConvLLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 576。
</details>

### **Phi-3-Vision and Phi-3.5-Vision: Compact Long-Context Multimodal Reasoning** <a id="phi-3-vision-and-phi-35-vision-compact-long-context-multimodal-reasoning"></a>

Phi-3-Vision and Phi-3.5-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3-、4.2B、3.5-。

[![Technical Report](https://img.shields.io/badge/arXiv-2404.14219-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2404.14219) [![Official Release](https://img.shields.io/badge/Microsoft-Release-0078D4.svg?style=flat-square)](https://azure.microsoft.com/en-us/blog/new-models-added-to-the-phi-3-family-available-on-microsoft-azure/) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Phi_3.5_Vision-blue?style=flat-square)](https://huggingface.co/microsoft/Phi-3.5-vision-instruct)

Microsoft Phi Team<br>
**Released:** 2024-05-21


> **Architecture figure:** The cited Phi-3 report contains no Phi-3-Vision architecture diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Phi-3-Vision and Phi-3.5-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3-、3、128K、4.2B。

Phi-3-Vision and Phi-3.5-Visionの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3-、21、2024、3.5-、22。

</details>

### **CogVLM2: Enhanced Vision-Language Models for Image and Video Understanding** <a id="cogvlm2-enhanced-vision-language-models-for-image-and-video-understanding"></a>

CogVLM2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2408.16500-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2408.16500) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/THUDM/CogVLM2) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/collections/THUDM/cogvlm2-6645f36a29948b67dc4eef75)<br>
Wenyi Hong, Weihan Wang, Ming Ding, Wenmeng Yu, Qingsong Lv, Yan Wang, Yean Cheng, Shiyu Huang, Junhui Ji, Zhao Xue, Lei Zhao, Zhuoyi Yang, Xiaotao Gu, Xiaohan Zhang, Guanyu Feng, Da Yin, Zihan Wang, Ji Qi, Xixuan Song, Peng Zhang, Debing Liu, Bin Xu, Juanzi Li, Yuxiao Dong, Jie Tang<br>


<p align="center">
  <img src="assets/architectures/cogvlm2-2024-arch.png" alt="CogVLM2: Enhanced Vision-Language Models for Image and Video Understanding architecture: CogVLM2 processes high-resolution images and video frames through a ViT encoder, adapter, and visual-language decoder." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> CogVLM2 processes high-resolution images and video frames through a ViT encoder, adapter, and visual-language decoder. <a href="https://arxiv.org/abs/2408.16500">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

CogVLM2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **Chameleon: Mixed-Modal Early-Fusion Foundation Models** <a id="chameleon-mixed-modal-early-fusion-foundation-models"></a>

Chameleonの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2405.09818-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2405.09818) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/facebookresearch/chameleon) [![HuggingFace](https://img.shields.io/badge/HuggingFace-Models-blue?style=flat-square)](https://huggingface.co/facebook/chameleon-7b)

Chameleon Team<br>
**Released:** 2024-05-16


<p align="center">
  <img src="assets/architectures/chameleon-2024-arch.png" alt="Chameleon: Mixed-Modal Early-Fusion Foundation Models architecture: Mixed-modal early-fusion tokenization and autoregressive generation" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Mixed-modal early-fusion tokenization and autoregressive generation. <a href="https://arxiv.org/abs/2405.09818">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Chameleonの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、34B。

Chameleonの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4.4。

Chameleonの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **PaliGemma: A Versatile and Transferable 3B Vision-Language Model** <a id="paligemma-a-versatile-and-transferable-3b-vision-language-model"></a>

PaliGemmaの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2B、40。

[![arXiv](https://img.shields.io/badge/arXiv-2407.07726-b31b1b.svg?style=flat-square)](https://arxiv.org/pdf/2407.07726) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/google-research/big_vision/blob/main/big_vision/configs/proj/paligemma/README.md) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/spaces/big-vision/paligemma)<br>
Lucas Beyer, Andreas Steiner, André Susano Pinto, Alexander Kolesnikov, Xiao Wang, Daniel Salz, Maxim Neumann, Ibrahim Alabdulmohsin, Michael Tschannen, Emanuele Bugliarello, Thomas Unterthiner, Daniel Keysers, Skanda Koppula, Fangyu Liu, Adam Grycner, Alexey Gritsenko, Neil Houlsby, Manoj Kumar, Keran Rong, Julian Eisenschlos, Rishabh Kabra, Matthias Bauer, Matko Bošnjak, Xi Chen, Matthias Minderer, Paul Voigtlaender, Ioana Bica, Ivana Balazevic, Joan Puigcerver, Pinelopi Papalampidi, Olivier Henaff, Xi Xiong, Radu Soricut, Jeremiah Harmsen, Xiaohua Zhai<br>


<p align="center">
  <img src="assets/architectures/paligemma-2024-arch.png" alt="PaliGemma: A Versatile and Transferable 3B Vision-Language Model architecture: PaliGemma connects a SigLIP image encoder to a Gemma autoregressive decoder language model." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> PaliGemma connects a SigLIP image encoder to a Gemma autoregressive decoder language model. <a href="https://arxiv.org/abs/2407.07726">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

PaliGemmaの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3-、2B、30。
</details>

### **xGen-MM (BLIP-3): An Open-Source Framework for Building Powerful and Responsible Large Multimodal Models** <a id="xgen-mm-blip-3-an-open-source-framework-for-building-powerful-and-responsible-large-multimodal-models"></a>

xGen-MM (BLIP-3)の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3。

[![arXiv](https://img.shields.io/badge/arXiv-2408.08872-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2408.08872) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/collections/Salesforce/xgen-mm-1-models-and-datasets-662971d6cecbf3a7f80ecc2e)<br>
Le Xue, Manli Shu, Anas Awadalla, Jun Wang, An Yan, Senthil Purushwalkam, Honglu Zhou, Viraj Prabhu, Yutong Dai, Michael S Ryoo, Shrikant Kendre, Jieyu Zhang, Can Qin, Shu Zhang, Chia-Chih Chen, Ning Yu, Juntao Tan, Tulika Manoj Awalgaonkar, Shelby Heinecke, Huan Wang, Yejin Choi, Ludwig Schmidt, Zeyuan Chen, Silvio Savarese, Juan Carlos Niebles, Caiming Xiong, Ran Xu<br>


<p align="center">
  <img src="assets/architectures/xgen-mm-blip-3-2024-arch.png" alt="xGen-MM (BLIP-3): An Open-Source Framework for Building Powerful and Responsible Large Multimodal Models architecture: BLIP-3 feeds interleaved visual and text tokens through a scalable vision-token sampler into a pretrained language model." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> BLIP-3 feeds interleaved visual and text tokens through a scalable vision-token sampler into a pretrained language model. <a href="https://arxiv.org/abs/2408.08872">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

xGen-MM (BLIP-3)の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3、2。
</details>

### **MANTIS: Mastering Multi-Image Understanding Through Interleaved Instruction Tuning** <a id="mantis-mastering-multi-image-understanding-through-interleaved-instruction-tuning"></a>

MANTISの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2405.01483-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2405.01483) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/TIGER-AI-Lab/Mantis) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/TIGER-Lab/Mantis)<br>
Dongfu Jiang, Xuan He, Huaye Zeng, Cong Wei, Max Ku, Qian Liu, Wenhu Chen<br>


> **Architecture figure:** The paper contains capability examples, dataset statistics and illustrations, and case studies, none of which is a model architecture or system diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MANTISの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 721K、3、8B。
</details>

### **Moondream-next: Compact Vision-Language Model with Enhanced Capabilities** <a id="moondream-next-compact-vision-language-model-with-enhanced-capabilities"></a>

Moondream-nextの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.9B。

[![arXiv](https://img.shields.io/badge/Blog-Moondream%20Blog-b31b1b.svg?style=flat-square)](https://moondream.ai/)
[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/vikhyat/moondream)
[![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/vikhyatk/moondream-next)


> **Architecture figure:** The rolling model card and official repository provide implementation details but no legitimate architecture or system figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Moondream-nextの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.9B。
</details>

### **Idefics2** <a id="idefics2"></a>

Idefics2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、7B。

[![arXiv](https://img.shields.io/badge/arXiv-2405.02246-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2405.02246) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/HuggingFaceM4/idefics-8b)<br>
Idefics2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
<br>


<p align="center">
  <img src="assets/architectures/idefics2-2024-arch.png" alt="Idefics2 architecture: Idefics2 maps vision-encoder features into interleaved visual tokens consumed by an autoregressive language model." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Idefics2 maps vision-encoder features into interleaved visual tokens consumed by an autoregressive language model. <a href="https://arxiv.org/abs/2405.02246">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

Idefics2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、7B、2.5。
</details>

### **InternLM-XComposer2-4KHD: A Pioneering Large Vision-Language Model Handling Resolutions from 336 Pixels to 4K HD** <a id="internlm-xcomposer2-4khd-a-pioneering-large-vision-language-model-handling-resolutions-from-336-pixels-to-4k-hd"></a>

InternLM-XComposer2-4KHDの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 336、4K。

[![arXiv](https://img.shields.io/badge/arXiv-2404.06512v1-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2404.06512v1)<br>
Xiaoyi Dong, Pan Zhang, Yuhang Zang, Yuhang Cao, Bin Wang, Linke Ouyang, Songyang Zhang, Haodong Duan, Wenwei Zhang, Yining Li, Hang Yan, Yang Gao, Zhe Chen, Xinyue Zhang, Wei Li, Jingwen Li, Wenhai Wang, Kai Chen, Conghui He, Xingcheng Zhang, Jifeng Dai, Yu Qiao, Dahua Lin, Jiaqi Wang<br>


<p align="center">
  <img src="assets/architectures/internlm-xcomposer2-4khd-2024-arch.png" alt="InternLM-XComposer2-4KHD: A Pioneering Large Vision-Language Model Handling Resolutions from 336 Pixels to 4K HD architecture: InternLM-XComposer2-4KHD dynamically partitions high-resolution images into local patches while retaining a global thumbnail." width="820">
</p>
<p align="center"><sub><b>Figure 4.</b> InternLM-XComposer2-4KHD dynamically partitions high-resolution images into local patches while retaining a global thumbnail. <a href="https://arxiv.org/abs/2404.06512">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

InternLM-XComposer2-4KHDの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4K、336。
</details>

### **MM1: Methods, Analysis, and Insights from Multimodal Pre-training** <a id="mm1-methods-analysis-and-insights-from-multimodal-pre-training"></a>

MM1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2403.09611-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2403.09611) [![Project](https://img.shields.io/badge/Apple-Research-black?style=flat-square)](https://machinelearning.apple.com/research/mm1-methods-analysis-insights)

Brandon McKinzie, Zhe Gan, Jean-Philippe Fauconnier, Sam Dodge, Bowen Zhang, Philipp Dufter, Dhruti Shah, Xianzhi Du, Futang Peng, Floris Weers, Anton Belyi, Haotian Zhang, et al.<br>
**Released:** 2024-03-14


> **Architecture figure:** MM1 presents an architecture design space and ablations, but no definitive final-model diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MM1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3B、30B。

MM1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

MM1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

</details>

### **DeepSeek-VL: Towards Real-World Vision-Language Understanding** <a id="deepseek-vl-towards-real-world-vision-language-understanding"></a>

DeepSeek-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2403.05525-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2403.05525) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/deepseek-ai/DeepSeek-VL)

Haoyu Lu, Wen Liu, Bo Zhang, Bingxuan Wang, Kai Dong, Bo Liu, Jingxiang Sun, Tongzheng Ren, Zhuoshu Li, Hao Yang, Yaofeng Sun, Chengqi Deng, Hanwei Xu, Zhenda Xie, Chong Ruan<br>


<p align="center">
  <img src="assets/architectures/deepseek-vl-2024-arch.png" alt="DeepSeek-VL: Towards Real-World Vision-Language Understanding architecture: DeepSeek-VL trains its hybrid vision encoder, vision-language adaptor, and language model across three progressive stages." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> DeepSeek-VL trains its hybrid vision encoder, vision-language adaptor, and language model across three progressive stages. <a href="https://arxiv.org/abs/2403.05525">Source paper</a>, PDF p. 12. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

**DeepSeek-VL**: Employs a hybrid vision encoder architecture, fusing a **SigLIP-L encoder** for semantic understanding with a **SAM-B encoder** for high-resolution detail extraction. This allows for efficient processing of 1024x1024 images while capturing both global and fine-grained visual features. **A two-layer hybrid MLP adapter** then integrates these features with the DeepSeek LLM backbone. The model is pre-trained on a diverse dataset encompassing web screenshots, PDFs, OCR, charts, and knowledge-based content from sources like Common Crawl, Web Code, E-books, and arXiv articles. This pretraining is further refined using a curated instruction-tuning dataset based on real user scenarios and categorized into a comprehensive taxonomy covering recognition, conversion, analysis, reasoning, evaluation, and safety tasks. By combining this diverse data with its unique architecture and fusion strategies, DeepSeek-VL aims to deliver robust performance across a wide range of real-world vision-language applications.<br>
</details>

### **AnyGPT: Unified Any-to-Any Multimodal Modeling with Discrete Tokens** <a id="anygpt-unified-any-to-any-multimodal-modeling-with-discrete-tokens"></a>

AnyGPTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2402.12226-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2402.12226) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/OpenMOSS/AnyGPT)

OpenMOSS<br>
**Released:** 2024-02-19


<p align="center">
  <img src="assets/architectures/anygpt-2024-arch.png" alt="AnyGPT: Unified Any-to-Any Multimodal Modeling with Discrete Tokens architecture: Unified discrete sequence modeling across speech, text, image, and music" width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> Unified discrete sequence modeling across speech, text, image, and music. <a href="https://arxiv.org/abs/2402.12226">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

AnyGPTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

AnyGPTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 108,000-。

</details>

### **SPHINX-X: Scaling Data and Parameters for a Family of Multi-modal Large Language Models** <a id="sphinx-x-scaling-data-and-parameters-for-a-family-of-multi-modal-large-language-models"></a>

SPHINX-Xの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2402.05935-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2402.05935) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/alpha-vllm/llama2-accessory) [![Model](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/Alpha-VLLM/SPHINX)<br>
SPHINX-Xの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/sphinx-x-2024-arch.png" alt="SPHINX-X: Scaling Data and Parameters for a Family of Multi-modal Large Language Models architecture: SPHINX-X combines mixed visual experts, padded-tile skip tokens, high-resolution partitioning, and unified training." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> SPHINX-X combines mixed visual experts, padded-tile skip tokens, high-resolution partitioning, and unified training. <a href="https://arxiv.org/abs/2402.05935">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

SPHINX-Xの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **LLaVA 1.6: LLaVA-NeXT Improved reasoning, OCR, and world knowledge** <a id="llava-16-llava-next-improved-reasoning-ocr-and-world-knowledge"></a>

LLaVA 1.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5。

[![GitHub](https://badges.aleen42.com/src/github.svg)](https://llava-vl.github.io/blog/2024-01-30-llava-next/)<br>
LLaVA 1.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
<br>


<p align="center">
  <img src="assets/architectures/llava-1-6-official-arch.png" alt="LLaVA 1.6: LLaVA-NeXT Improved reasoning, OCR, and world knowledge architecture: LLaVA-NeXT&#x27;s AnyRes scheme partitions high-resolution images into a configurable grid of local views." width="820">
</p>
<p align="center"><sub><b>Official architecture diagram.</b> LLaVA-NeXT&#x27;s AnyRes scheme partitions high-resolution images into a configurable grid of local views. <a href="https://llava-vl.github.io/blog/2024-01-30-llava-next/">Primary source</a>. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

LLaVA 1.6の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5、1、32。
</details>

### **MiniCPM-V: A GPT-4V Level MLLM on Your Phone** <a id="minicpm-v-a-gpt-4v-level-mllm-on-your-phone"></a>

MiniCPM-Vの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2.5、3。

[![arXiv](https://img.shields.io/badge/arXiv-2408.01800-b31b1b.svg?style=flat-square)](https://arxiv.org/pdf/2408.01800) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/OpenBMB/MiniCPM-V) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/openbmb/MiniCPM-V-2_6)<br>
Yuan Yao, Tianyu Yu, Ao Zhang, Chongyi Wang, Junbo Cui, Hongji Zhu, Tianchi Cai, Haoyu Li, Weilin Zhao, Zhihui He, Qianyu Chen, Huarong Zhou, Zhensheng Zou, Haoye Zhang, Shengding Hu, Zhi Zheng, Jie Zhou, Jie Cai, Xu Han, Guoyang Zeng, Dahai Li, Zhiyuan Liu, Maosong Sun<br>


<p align="center">
  <img src="assets/architectures/minicpm-v-2024-arch.png" alt="MiniCPM-V: A GPT-4V Level MLLM on Your Phone architecture: MiniCPM-V combines a visual encoder, shared compression layer, language model, and adaptive high-resolution encoding." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> MiniCPM-V combines a visual encoder, shared compression layer, language model, and adaptive high-resolution encoding. <a href="https://arxiv.org/abs/2408.01800">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

MiniCPM-Vの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14、1024、64、96、2B、8B、2.5。

MiniCPM-Vの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 関連参照: <https://arxiv.org/abs/2509.18154>、<https://huggingface.co/openbmb/MiniCPM-V-4.6>、<https://github.com/OpenBMB/MiniCPM-V>。 値: 4.5、2025、4.6、2026、1B、400M、5-0.8B。
</details>

### **MouSi: Poly-Visual-Expert Vision-Language Models** <a id="mousi-poly-visual-expert-vision-language-models"></a>

MouSiの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2401.17221-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2401.17221) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/fudannlplab/mousi)<br>
MouSiの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/mousi-2024-arch.png" alt="MouSi: Poly-Visual-Expert Vision-Language Models architecture: MouSi integrates heterogeneous visual experts through a fusion network and projector into a language model." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> MouSi integrates heterogeneous visual experts through a fusion network and projector into a language model. <a href="https://arxiv.org/abs/2401.17221">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

MouSiの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 5、558K。
</details>

### **InternLM-XComposer2: Mastering Free-form Text-Image Composition and Comprehension in Vision-Language Large Model** <a id="internlm-xcomposer2-mastering-free-form-text-image-composition-and-comprehension-in-vision-language-large-model"></a>

InternLM-XComposer2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2401.16420-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2401.16420) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/InternLM/InternLM-XComposer) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/Willow123/InternLM-XComposer)<br>
InternLM-XComposer2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/internlm-xcomposer2-2024-arch.png" alt="InternLM-XComposer2: Mastering Free-form Text-Image Composition and Comprehension in Vision-Language Large Model architecture: InternLM-XComposer2 applies Partial-LoRA only to visual tokens while preserving language-only behavior." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> InternLM-XComposer2 applies Partial-LoRA only to visual tokens while preserving language-only behavior. <a href="https://arxiv.org/abs/2401.16420">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

InternLM-XComposer2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。
</details>

### **MoE-LLaVA: Mixture of Experts for Large Vision-Language Models** <a id="moe-llava-mixture-of-experts-for-large-vision-language-models"></a>

MoE-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2401.15947-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2401.15947) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/PKU-YuanGroup/MoE-LLaVA) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/LanguageBind/MoE-LLaVA)<br>
MoE-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/moe-llava-2024-arch.png" alt="MoE-LLaVA: Mixture of Experts for Large Vision-Language Models architecture: MoE-LLaVA routes multimodal tokens through sparse experts added to a vision-encoder, projector, and language-model backbone." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> MoE-LLaVA routes multimodal tokens through sparse experts added to a vision-encoder, projector, and language-model backbone. <a href="https://arxiv.org/abs/2401.15947">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

MoE-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **moondream1 and moondream2** <a id="moondream1-and-moondream2"></a>

moondream1 and moondream2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5。

[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/vikhyat/moondream) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/vikhyatk/moondream2)<br>
@vikhyatk


> **Architecture figure:** Official repository and model cards describe the implementation but provide no legitimate family architecture or system figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

moondream1 and moondream2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.6B、1.5、1.86B。
</details>

### **FireLLaVA** <a id="firellava"></a>

FireLLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 34B。

[![Model](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/fireworks-ai/FireLLaVA-13b)


> **Architecture figure:** A generic LLaVA diagram would not document FireLLaVA&#x27;s own contribution and should not be substituted.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

FireLLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 34B、588K。
</details>

### **COSMO: COntrastive Streamlined MultimOdal Model with Interleaved Pre-Training** <a id="cosmo-contrastive-streamlined-multimodal-model-with-interleaved-pre-training"></a>

COSMOの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2401.00849v1-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2401.00849v1) [![Website](https://img.shields.io/badge/Project-Website-blue?style=flat-square)](https://fingerrec.github.io/cosmo)

COSMOの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/cosmo-2024-arch.png" alt="COSMO: COntrastive Streamlined MultimOdal Model with Interleaved Pre-Training architecture: CosMo handles image and video inputs through a language model trained with contrastive and language-modeling objectives." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> CosMo handles image and video inputs through a language model trained with contrastive and language-modeling objectives. <a href="https://arxiv.org/abs/2401.00849">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

COSMOの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 128、14。
</details>

### **TinyGPT-V: Efficient Multimodal Large Language Model via Small Backbones** <a id="tinygpt-v-efficient-multimodal-large-language-model-via-small-backbones"></a>

TinyGPT-Vの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2312.16862v1-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2312.16862v1) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/DLYuanGod/TinyGPT-V) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/llizhx/TinyGPT-V)<br>
TinyGPT-Vの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/tinygpt-v-2023-arch.png" alt="TinyGPT-V: Efficient Multimodal Large Language Model via Small Backbones architecture: TinyGPT-V projects frozen visual-backbone and Q-Former outputs through two linear layers into Phi-2." width="820">
</p>
<p align="center"><sub><b>Figure 4.</b> TinyGPT-V projects frozen visual-backbone and Q-Former outputs through two linear layers into Phi-2. <a href="https://arxiv.org/abs/2312.16862">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

TinyGPT-Vの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、2.7。
</details>

### **MobileVLM: A Fast, Strong and Open Vision Language Assistant for Mobile Devices** <a id="mobilevlm-a-fast-strong-and-open-vision-language-assistant-for-mobile-devices"></a>

MobileVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14。

[![arXiv](https://img.shields.io/badge/arXiv-2312.16886-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2312.16886) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/meituan-automl/mobilevlm)<br>
MobileVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/mobilevlm-2023-arch.png" alt="MobileVLM: A Fast, Strong and Open Vision Language Assistant for Mobile Devices architecture: MobileVLM connects a visual encoder to MobileLLaMA through a lightweight downsample projector." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> MobileVLM connects a visual encoder to MobileLLaMA through a lightweight downsample projector. <a href="https://arxiv.org/abs/2312.16886">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

MobileVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14。
</details>

### **Alpha-CLIP: A CLIP Model Focusing on Wherever You Want** <a id="alpha-clip-a-clip-model-focusing-on-wherever-you-want"></a>

Alpha-CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2312.03818-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2312.03818) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/SunzeY/AlphaCLIP)

Alpha-CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/alpha-clip-2023-arch.png" alt="Alpha-CLIP: A CLIP Model Focusing on Wherever You Want architecture: Alpha-CLIP extends CLIP with an alpha channel that focuses visual encoding on a specified region." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Alpha-CLIP extends CLIP with an alpha channel that focuses visual encoding on a specified region. <a href="https://arxiv.org/abs/2312.03818">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

Alpha-CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
Alpha-CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 400M、5B。
</details>

### **Nous-Hermes-2-Vision - Mistral 7B** <a id="nous-hermes-2-vision---mistral-7b"></a>

Nous-Hermes-2-Vision - Mistral 7Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2-、2.5、400M。

[![Model](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/NousResearch/Nous-Hermes-2-Vision-Alpha)<br>
Nous-Hermes-2-Vision - Mistral 7Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


> **Architecture figure:** The card describes SigLIP integration and training data in prose but contains no legitimate architecture or system figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

Nous-Hermes-2-Vision - Mistral 7Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2-、2.5-、7B、400M、3B、220K、60K、150K、50K、2.5。
</details>

### **SPHINX: The Joint Mixing of Weights, Tasks, and Visual Embeddings for Multi-modal Large Language Models** <a id="sphinx-the-joint-mixing-of-weights-tasks-and-visual-embeddings-for-multi-modal-large-language-models"></a>

SPHINXの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2311.07575v1-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2311.07575v1) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/alpha-vllm/)
SPHINXの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/sphinx-2023-arch.png" alt="SPHINX: The Joint Mixing of Weights, Tasks, and Visual Embeddings for Multi-modal Large Language Models architecture: SPHINX jointly mixes tuning tasks, visual embeddings, and model weights in one multimodal architecture." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> SPHINX jointly mixes tuning tasks, visual embeddings, and model weights in one multimodal architecture. <a href="https://arxiv.org/abs/2311.07575">Source paper</a>, PDF p. 6. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

SPHINXの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、400M。
</details>

### **Florence-2: A Deep Dive into its Unified Architecture and Multi-Task Capabilities** <a id="florence-2-a-deep-dive-into-its-unified-architecture-and-multi-task-capabilities"></a>

Florence-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2311.06242-b31b1b.svg?style=flat-square)](https://arxiv.org/pdf/2311.06242) [![HuggingFace](https://img.shields.io/badge/🤗-Open%20In%20Spaces-blue.svg)](https://huggingface.co/spaces/gokaygokay/Florence-2)<br>
Bin Xiao, Haiping Wu, Weijian Xu, Xiyang Dai, Houdong Hu, Yumao Lu, Michael Zeng, Ce Liu, Lu Yuan<br>


<p align="center">
  <img src="assets/architectures/florence-2-2023-arch.png" alt="Florence-2: A Deep Dive into its Unified Architecture and Multi-Task Capabilities architecture: Florence-2 combines an image encoder and multimodality encoder-decoder through a unified task-prompt interface." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> Florence-2 combines an image encoder and multimodality encoder-decoder through a unified task-prompt interface. <a href="https://arxiv.org/abs/2311.06242">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary>

Florence-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。
</details>

### **u-LLaVA: Unifying Multi-Modal Tasks via Large Language Model** <a id="u-llava-unifying-multi-modal-tasks-via-large-language-model"></a>

u-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2311.05348-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2311.05348) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/OPPOMKLab/u-LLaVA)<br>
u-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/u-llava-2023-arch.png" alt="u-LLaVA: Unifying Multi-Modal Tasks via Large Language Model architecture: u-LLaVA unifies modality alignment with task-specific projectors, decoders, and patched downstream modules." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> u-LLaVA unifies modality alignment with task-specific projectors, decoders, and patched downstream modules. <a href="https://arxiv.org/abs/2311.05348">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

u-LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14、58K、23K。
</details>

### **LLaVA-Plus: Learning to Use Tools for Creating Multimodal Agents** <a id="llava-plus-learning-to-use-tools-for-creating-multimodal-agents"></a>

LLaVA-Plusの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2311.05437-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2311.05437) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/LLaVA-VL/LLaVA-Plus-Codebase)<br>
LLaVA-Plusの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/llava-plus-2023-arch.png" alt="LLaVA-Plus: Learning to Use Tools for Creating Multimodal Agents architecture: LLaVA-Plus retrieves skills, invokes tools, consumes their results, and generates a final response." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> LLaVA-Plus retrieves skills, invokes tools, consumes their results, and generates a final response. <a href="https://arxiv.org/abs/2311.05437">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

LLaVA-Plusの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **OtterHD: A High-Resolution Multi-modality Model** <a id="otterhd-a-high-resolution-multi-modality-model"></a>

OtterHDの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B。

[![arXiv](https://img.shields.io/badge/arXiv-2311.04219v1-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2311.04219v1) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/luodian/otter)

OtterHDの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


> **Architecture figure:** The paper&#x27;s figures cover demonstrations, benchmark construction, throughput, resolution, and loss; none is a legitimate architecture substitute.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

OtterHDの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B、2。
</details>

### **CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding** <a id="covlm-composing-visual-entities-and-relationships-in-large-language-models-via-communicative-decoding"></a>

CoVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2311.03354v1-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2311.03354v1)<br>
CoVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/covlm-2023-arch.png" alt="CoVLM: Composing Visual Entities and Relationships in Large Language Models Via Communicative Decoding architecture: CoVLM vision module and communication-token framework." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> CoVLM vision module and communication-token framework. <a href="https://arxiv.org/pdf/2311.03354">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

CoVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 97。
</details>

### **GLaMM: Pixel Grounding Large Multimodal Model** <a id="glamm-pixel-grounding-large-multimodal-model"></a>

GLaMMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2311.03356-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2311.03356) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/mbzuai-oryx/groundingLMM)<br>
Hanoona Rasheed, Muhammad Maaz, Sahal Shaji Mullappilly, Abdelrahman Shaker, Salman Khan, Hisham Cholakkal, Rao M. Anwer, Erix Xing, Ming-Hsuan Yang, Fahad S. Khan<br>


<p align="center">
  <img src="assets/architectures/glamm-2023-arch.png" alt="GLaMM: Pixel Grounding Large Multimodal Model architecture: GLaMM architecture for scene-, region-, and pixel-level grounding." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> GLaMM architecture for scene-, region-, and pixel-level grounding. <a href="https://arxiv.org/pdf/2311.03356">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

GLaMMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7.5、810。
</details>

### **Fuyu-8B: A Multimodal Architecture for AI Agents** <a id="fuyu-8b-a-multimodal-architecture-for-ai-agents"></a>

Fuyu-8Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B。

[![Link](https://img.shields.io/badge/https%3A%2F%2Fwww.adept.ai%2Fblog%2Ffuyu-8b?style=flat&label=Fuyu%208B
)](https://www.adept.ai/blog/fuyu-8b) [![Model](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/adept/fuyu-8b)<br>
Fuyu-8Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/fuyu-8b-official-arch.png" alt="Fuyu-8B: A Multimodal Architecture for AI Agents architecture: Fuyu-8B projects image patches directly into a decoder-only Transformer." width="820">
</p>
<p align="center"><sub><b>Official architecture diagram.</b> Fuyu-8B projects image patches directly into a decoder-only Transformer. <a href="https://www.adept.ai/blog/fuyu-8b">Primary source</a>. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

Fuyu-8Bの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 8B。
</details>

### **PaLI-3 Vision Language Models: Smaller, Faster, Stronger** <a id="pali-3-vision-language-models-smaller-faster-stronger"></a>

PaLI-3 Vision Language Modelsの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3、2B、3B。

[![arXiv](https://img.shields.io/badge/arXiv-2310.09199-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2310.09199) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/kyegomez/PALI3)<br>
PaLI-3 Vision Language Modelsの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/pali-3-vision-language-models-2023-arch.png" alt="PaLI-3 Vision Language Models: Smaller, Faster, Stronger architecture: PaLI-3 connects a contrastively pretrained SigLIP encoder to an encoder-decoder UL2 Transformer." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> PaLI-3 connects a contrastively pretrained SigLIP encoder to an encoder-decoder UL2 Transformer. <a href="https://arxiv.org/pdf/2310.09199">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

PaLI-3 Vision Language Modelsの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 3、2B、3B。
</details>

### **MiniGPT-v2: large language model as a unified interface for vision-language multi-task learning** <a id="minigpt-v2-large-language-model-as-a-unified-interface-for-vision-language-multi-task-learning"></a>

MiniGPT-v2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、2-。

[![arXiv](https://img.shields.io/badge/arXiv-2310.09478v3-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2310.09478v3)<br>
MiniGPT-v2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/minigpt-v2-2023-arch.png" alt="MiniGPT-v2: large language model as a unified interface for vision-language multi-task learning architecture: MiniGPT-v2 architecture with frozen ViT, token concatenation, projection, and LLaMA-2." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> MiniGPT-v2 architecture with frozen ViT, token concatenation, projection, and LLaMA-2. <a href="https://arxiv.org/pdf/2310.09478">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details><br>
<summary>ℹ️ <i>詳細情報</i></summary><br>

MiniGPT-v2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2-、7-、20M。
</details>

### **BakLLaVA** <a id="bakllava"></a>

BakLLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、1.5、2、13B。

[![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/skunkworksai/bakllava) [![Model](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/SkunkworksAI/BakLLaVA-1)


> **Architecture figure:** The official model card and repository describe a LLaVA-on-Mistral derivative but publish no model-specific architecture figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

BakLLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 7B、1.5、2、13B、600K、150K、558K、158K、450K、40K。
</details>

### **Ferret: Refer and Ground Anything Anywhere at Any Granularity** <a id="ferret-refer-and-ground-anything-anywhere-at-any-granularity"></a>

Ferretの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2310.07704v1-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2310.07704v1) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/apple/ml-ferret)<br>
Ferretの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/ferret-2023-arch.png" alt="Ferret: Refer and Ground Anything Anywhere at Any Granularity architecture: Ferret hybrid region representation, spatial-aware sampler, and complete model architecture." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Ferret hybrid region representation, spatial-aware sampler, and complete model architecture. <a href="https://arxiv.org/pdf/2310.07704">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

Ferretの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.1。
</details>

### **LLaVA 1.5: Improved Baselines with Visual Instruction Tuning** <a id="llava-15-improved-baselines-with-visual-instruction-tuning"></a>

LLaVA 1.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5。

[![arXiv](https://img.shields.io/badge/arXiv-2310.03744-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2310.03744)<br>
LLaVA 1.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/llava-1-5-2023-arch.png" alt="LLaVA 1.5: Improved Baselines with Visual Instruction Tuning architecture: LLaVA-1.5-HD grid-based encoding for arbitrary image resolutions." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> LLaVA-1.5-HD grid-based encoding for arbitrary image resolutions. <a href="https://arxiv.org/pdf/2310.03744">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

LLaVA 1.5の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5、11。
</details>

### **CogVLM: Visual Expert for Pretrained Language Models** <a id="cogvlm-visual-expert-for-pretrained-language-models"></a>

CogVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2311.03079v2-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2311.03079v2) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/thudm/cogvlm)<br>
CogVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/cogvlm-2023-arch.png" alt="CogVLM: Visual Expert for Pretrained Language Models architecture: CogVLM input pathway and visual-expert Transformer block." width="820">
</p>
<p align="center"><sub><b>Figure 4.</b> CogVLM input pathway and visual-expert Transformer block. <a href="https://arxiv.org/pdf/2311.03079">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

CogVLMの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1.5、40、2B、700M。
</details>

### **MetaCLIP: Demystifying CLIP Data** <a id="metaclip-demystifying-clip-data"></a>

MetaCLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2309.16671-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2309.16671) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/facebookresearch/MetaCLIP)<br>
MetaCLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


> **Architecture figure:** The paper contributes data curation rather than a model architecture; Figure 5 is a data-pipeline case study.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

MetaCLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 400。
</details>

### **Qwen-VL: A Versatile Vision-Language Model for Understanding, Localization, Text Reading, and Beyond** <a id="qwen-vl-a-versatile-vision-language-model-for-understanding-localization-text-reading-and-beyond"></a>

Qwen-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2308.12966-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2308.12966) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/qwenlm/qwen-vl)

Qwen-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/qwen-vl-2023-arch.png" alt="Qwen-VL: A Versatile Vision-Language Model for Understanding, Localization, Text Reading, and Beyond architecture: Qwen-VL visual-language architecture across pretraining, multitask pretraining, and supervised finetuning." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Qwen-VL visual-language architecture across pretraining, multitask pretraining, and supervised finetuning. <a href="https://arxiv.org/pdf/2308.12966">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

Qwen-VLの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **IDEFICS** <a id="idefics"></a>

IDEFICSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 80B、4。

[![Model](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/HuggingFaceM4/idefics-80b)


> **Architecture figure:** The official launch post and model card have capability and performance illustrations but no IDEFICS-specific architecture diagram.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

IDEFICSの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 80、4。
</details>

### **BLIVA: A Simple Multimodal LLM for Better Handling of Text-rich Visual Questions** <a id="bliva-a-simple-multimodal-llm-for-better-handling-of-text-rich-visual-questions"></a>

BLIVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2308.09936v3-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2308.09936v3) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/mlpc-ucsd/bliva)<br>
BLIVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/bliva-2023-arch.png" alt="BLIVA: A Simple Multimodal LLM for Better Handling of Text-rich Visual Questions architecture: BLIVA architecture with frozen image encoder, Q-Former, patch projection, and frozen LLM." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> BLIVA architecture with frozen image encoder, Q-Former, patch projection, and frozen LLM. <a href="https://arxiv.org/pdf/2308.09936">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

BLIVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **KOSMOS-2: Grounding Multimodal Large Language Models to the World** <a id="kosmos-2-grounding-multimodal-large-language-models-to-the-world"></a>

KOSMOS-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、1。

[![arXiv](https://img.shields.io/badge/arXiv-2306.14824-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2306.14824) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/microsoft/unilm/tree/master/kosmos-2) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/ydshieh/Kosmos-2)<br>
KOSMOS-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/kosmos-2-2023-arch.png" alt="KOSMOS-2: Grounding Multimodal Large Language Models to the World architecture: KOSMOS-2 system overview for multimodal grounding and referring." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> KOSMOS-2 system overview for multimodal grounding and referring. <a href="https://arxiv.org/pdf/2306.14824">Source paper</a>, PDF p. 1. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

KOSMOS-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、1、256。
</details>

### **LaVIN: Cheap and Quick: Efficient Vision-Language Instruction Tuning for Large Language Models** <a id="lavin-cheap-and-quick-efficient-vision-language-instruction-tuning-for-large-language-models"></a>

LaVINの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2305.15023v3-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2305.15023v3) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/luogen1996/lavin)<br>
LaVINの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/lavin-2023-arch.png" alt="LaVIN: Cheap and Quick: Efficient Vision-Language Instruction Tuning for Large Language Models architecture: LaVIN architecture and Mixture-of-Modality Adaptation mechanism." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> LaVIN architecture and Mixture-of-Modality Adaptation mechanism. <a href="https://arxiv.org/pdf/2305.15023">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

LaVINの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **InstructBLIP: Towards General-purpose Vision-Language Models with Instruction Tuning** <a id="instructblip-towards-general-purpose-vision-language-models-with-instruction-tuning"></a>

InstructBLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2305.06500v2-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2305.06500v2) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/salesforce/LAVIS/tree/main/projects/instructblip) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/hysts/InstructBLIP)<br>
InstructBLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/instructblip-2023-arch.png" alt="InstructBLIP: Towards General-purpose Vision-Language Models with Instruction Tuning architecture: InstructBLIP architecture with instruction-aware Q-Former and frozen LLM." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> InstructBLIP architecture with instruction-aware Q-Former and frozen LLM. <a href="https://arxiv.org/pdf/2305.06500">Source paper</a>, PDF p. 5. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

InstructBLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2、26、11。
</details>

### **ImageBind: One Embedding Space To Bind Them All** <a id="imagebind-one-embedding-space-to-bind-them-all"></a>

ImageBindの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2305.05665-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2305.05665) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/facebookresearch/imagebind)<br>
ImageBindの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/imagebind-2023-arch.png" alt="ImageBind: One Embedding Space To Bind Them All architecture: ImageBind aligns six modalities in one shared embedding space." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> ImageBind aligns six modalities in one shared embedding space. <a href="https://arxiv.org/pdf/2305.05665">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

ImageBindの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **LLaVA: Large Language and Vision Assistant - Visual Instruction Tuning** <a id="llava-large-language-and-vision-assistant---visual-instruction-tuning"></a>

LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2304.08485-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2304.08485) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/haotian-liu/LLaVA)

LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/llava-2023-arch.png" alt="LLaVA: Large Language and Vision Assistant - Visual Instruction Tuning architecture: LLaVA connects CLIP visual features to a language model through a learned projection." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> LLaVA connects CLIP visual features to a language model through a learned projection. <a href="https://arxiv.org/pdf/2304.08485">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

LLaVAの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4、158K。
</details>

### **MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models** <a id="minigpt-4-enhancing-vision-language-understanding-with-advanced-large-language-models"></a>

MiniGPT-4の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4。

[![arXiv](https://img.shields.io/badge/arXiv-2304.10592v2-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2304.10592v2) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/vision-cair/minigpt-4)<br>
MiniGPT-4の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/minigpt-4-2023-arch.png" alt="MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models architecture: MiniGPT-4 architecture with ViT, Q-Former, linear projection, and Vicuna." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> MiniGPT-4 architecture with ViT, Q-Former, linear projection, and Vicuna. <a href="https://arxiv.org/pdf/2304.10592">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

MiniGPT-4の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4、20,000、256、3,500。
</details>

### **SigLIP: Sigmoid Loss for Language Image Pre-Training** <a id="siglip-sigmoid-loss-for-language-image-pre-training"></a>

SigLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2303.15343-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2303.15343)<br>
Xiaohua Zhai, Basil Mustafa, Alexander Kolesnikov, Lucas Beyer<br>


> **Architecture figure:** The paper changes the training loss, not the encoder architecture; Figure 1 is a distributed loss-implementation mock-up.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

SigLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **OpenFlamingo: An Open-Source Framework for Training Large Autoregressive Vision-Language Models** <a id="openflamingo-an-open-source-framework-for-training-large-autoregressive-vision-language-models"></a>

OpenFlamingoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14、7B。

[![arXiv](https://img.shields.io/badge/arXiv-2308.01390-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2308.01390) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/mlfoundations/open_flamingo)<br>
OpenFlamingoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/openflamingo-2023-arch.png" alt="OpenFlamingo: An Open-Source Framework for Training Large Autoregressive Vision-Language Models architecture: OpenFlamingo-9B interleaved image-and-text system interface." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> OpenFlamingo-9B interleaved image-and-text system interface. <a href="https://arxiv.org/pdf/2308.01390">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

OpenFlamingoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 14、7-、7B、2B、64。
</details>

### **PaLM-E: An Embodied Multimodal Language Model** <a id="palm-e-an-embodied-multimodal-language-model"></a>

PaLM-Eの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2303.03378-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2303.03378) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://palm-e.github.io)<br>
PaLM-Eの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/palm-e-2023-arch.png" alt="PaLM-E: An Embodied Multimodal Language Model architecture: PaLM-E combines sensor encoders and a language model for embodied and visual-language tasks." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> PaLM-E combines sensor encoders and a language model for embodied and visual-language tasks. <a href="https://arxiv.org/pdf/2303.03378">Source paper</a>, PDF p. 1. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

PaLM-Eの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **KOSMOS-1: Language Is Not All You Need: Aligning Perception with Language Models** <a id="kosmos-1-language-is-not-all-you-need-aligning-perception-with-language-models"></a>

KOSMOS-1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1。

[![arXiv](https://img.shields.io/badge/arXiv-2302.14045-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2302.14045) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/microsoft/unilm)<br>
KOSMOS-1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/kosmos-1-2023-arch.png" alt="KOSMOS-1: Language Is Not All You Need: Aligning Perception with Language Models architecture: KOSMOS-1 multimodal input, embedding, language-model, and output overview." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> KOSMOS-1 multimodal input, embedding, language-model, and output overview. <a href="https://arxiv.org/pdf/2302.14045">Source paper</a>, PDF p. 1. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

KOSMOS-1の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 1、2B、400M、700M。
</details>

### **BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models** <a id="blip-2-bootstrapping-language-image-pre-training-with-frozen-image-encoders-and-large-language-models"></a>

BLIP-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。

[![arXiv](https://img.shields.io/badge/arXiv-2301.12597-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2301.12597) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/salesforce/LAVIS/tree/main/projects/blip2) [![Gradio](https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)](https://huggingface.co/spaces/Salesforce/BLIP2)<br>
BLIP-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
<br>


<p align="center">
  <img src="assets/architectures/blip-2-2023-arch.png" alt="BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models architecture: BLIP-2 bridges a frozen image encoder and frozen LLM through a two-stage Q-Former." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> BLIP-2 bridges a frozen image encoder and frozen LLM through a two-stage Q-Former. <a href="https://arxiv.org/pdf/2301.12597">Source paper</a>, PDF p. 1. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

BLIP-2の構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 2。
</details>

### **MULTIINSTRUCT: Improving Multi-Modal Zero-Shot Learning via Instruction Tuning** <a id="multiinstruct-improving-multi-modal-zero-shot-learning-via-instruction-tuning"></a>

MULTIINSTRUCTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2212.10773-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2212.10773) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/vt-nlp/multiinstruct)<br>
MULTIINSTRUCTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


> **Architecture figure:** Figures cover examples, task taxonomy, performance, and attention; the paper publishes no model-specific architecture figure.


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

MULTIINSTRUCTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **PaLI: A Jointly-Scaled Multilingual Language-Image Model** <a id="pali-a-jointly-scaled-multilingual-language-image-model"></a>

PaLIの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2209.06794-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2209.06794) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/google-research/big_vision)<br>
PaLIの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/pali-2022-arch.png" alt="PaLI: A Jointly-Scaled Multilingual Language-Image Model architecture: PaLI combines a scalable ViT with an encoder-decoder Transformer." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> PaLI combines a scalable ViT with an encoder-decoder Transformer. <a href="https://arxiv.org/pdf/2209.06794">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

PaLIの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 4、10、100、17B。
</details>

### **Flamingo: a Visual Language Model for Few-Shot Learning** <a id="flamingo-a-visual-language-model-for-few-shot-learning"></a>

Flamingoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2204.14198v2-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2204.14198v2)<br>
Flamingoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/flamingo-2022-arch.png" alt="Flamingo: a Visual Language Model for Few-Shot Learning architecture: Flamingo architecture for interleaved visual inputs and free-form text output." width="820">
</p>
<p align="center"><sub><b>Figure 3.</b> Flamingo architecture for interleaved visual inputs and free-form text output. <a href="https://arxiv.org/pdf/2204.14198">Source paper</a>, PDF p. 4. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

Flamingoの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **BLIP: Bootstrapping Language-Image Pre-training** <a id="blip-bootstrapping-language-image-pre-training"></a>

BLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2201.12086-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2201.12086) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/salesforce/BLIP)<br>
Junnan Li, Dongxu Li, Caiming Xiong, Steven Hoi<br>
<br>


<p align="center">
  <img src="assets/architectures/blip-2022-arch.png" alt="BLIP: Bootstrapping Language-Image Pre-training architecture: BLIP multimodal mixture-of-encoder-decoder architecture and training objectives." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> BLIP multimodal mixture-of-encoder-decoder architecture and training objectives. <a href="https://arxiv.org/pdf/2201.12086">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

BLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 12M。
</details>

### **GLIP: Grounded Language-Image Pre-training** <a id="glip-grounded-language-image-pre-training"></a>

GLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2112.03857-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2112.03857) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/microsoft/GLIP)<br>
GLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/glip-2021-arch.png" alt="GLIP: Grounded Language-Image Pre-training architecture: GLIP image and language encoders with deep fusion and word-region alignment." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> GLIP image and language encoders with deep fusion and word-region alignment. <a href="https://arxiv.org/pdf/2112.03857">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

GLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。
</details>

### **FROZEN: Multimodal Few-Shot Learning with Frozen Language Models** <a id="frozen-multimodal-few-shot-learning-with-frozen-language-models"></a>

FROZENの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 50。

[![arXiv](https://img.shields.io/badge/arXiv-2106.13884-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2106.13884)<br>
FROZENの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/frozen-2021-arch.png" alt="FROZEN: Multimodal Few-Shot Learning with Frozen Language Models architecture: FROZEN trains a vision encoder through a frozen language model." width="820">
</p>
<p align="center"><sub><b>Figure 2.</b> FROZEN trains a vision encoder through a frozen language model. <a href="https://arxiv.org/pdf/2106.13884">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

FROZENの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 50。
</details>

### **CLIP: Contrastive Language-Image Pre-training** <a id="clip-contrastive-language-image-pre-training"></a>

CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 400。

[![arXiv](https://img.shields.io/badge/arXiv-2103.00020-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2103.00020) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/openai/CLIP)<br>
CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/clip-2021-arch.png" alt="CLIP: Contrastive Language-Image Pre-training architecture: CLIP dual-encoder contrastive training and zero-shot classification approach." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> CLIP dual-encoder contrastive training and zero-shot classification approach. <a href="https://arxiv.org/pdf/2103.00020">Source paper</a>, PDF p. 2. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

CLIPの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 400。
</details>

### **ViT: An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale** <a id="vit-an-image-is-worth-16x16-words-transformers-for-image-recognition-at-scale"></a>

ViTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。

[![arXiv](https://img.shields.io/badge/arXiv-2010.11929v2-b31b1b.svg?style=flat-square)](https://arxiv.org/abs/2010.11929v2) [![GitHub](https://badges.aleen42.com/src/github.svg)](https://github.com/google-research/vision_transformer)<br>
ViTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。


<p align="center">
  <img src="assets/architectures/vit-2020-arch.png" alt="ViT: An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale architecture: ViT patch embedding, Transformer encoder, and classification-token architecture." width="820">
</p>
<p align="center"><sub><b>Figure 1.</b> ViT patch embedding, Transformer encoder, and classification-token architecture. <a href="https://arxiv.org/pdf/2010.11929">Source paper</a>, PDF p. 3. <a href="assets/architectures/FIGURE_NOTICE.md">Figure notice</a>.</sub></p>


<details>
<summary>ℹ️ <i>詳細情報</i></summary><br>

ViTの構造、学習方法、データ、モダリティ統合、設計上の特徴に関する要約です。 値: 300M、100。
</details>

## 重要な参考資料 <a id="important-references"></a>

- [Guide to Vision-Language Models (VLMs) by Görkem Polat](https://encord.com/blog/vision-language-models-guide/)
- [VLM Primer by Aman Chadha](https://aman.ai/primers/ai/VLM/#google_vignette)
- [Generalized Visual Language Models by Lilian Weng](https://lilianweng.github.io/posts/2022-06-09-vlm/)
