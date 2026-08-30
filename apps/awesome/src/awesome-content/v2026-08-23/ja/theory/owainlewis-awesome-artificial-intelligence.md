---
title: "Awesome Artificial Intelligence"
description: "Artificial Intelligenceを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-owainlewis-awesome-artificial-intelligence-readme-md"
---

# Awesome Artificial Intelligence

Artificial Intelligenceを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 学ぶ

### 書籍

- [Artificial Intelligence: A Modern Approach](https://aima.cs.berkeley.edu/): 探索、推論、計画、学習、ロボティクスを含む古典的AIの幅広いリファレンス。
- [Reinforcement Learning: An Introduction](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf): SuttonとBartoによる強化学習の概念とアルゴリズムの基礎的解説。
- [Machine Learning Bookcamp](https://www.manning.com/books/machine-learning-bookcamp): Alexey Grigorevによる、機械学習システムの構築・デプロイを扱うプロジェクトベースの入門書。
- [Designing Machine Learning Systems](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/): Chip Huyenによるスケーラブルで保守可能な機械学習システム。
- [AI Engineering](https://www.oreilly.com/library/view/ai-engineering/9781098166298/): Chip Huyenによる基盤モデルを使ったアプリケーション構築。
- [Build a Large Language Model from Scratch](https://www.manning.com/books/build-a-large-language-model-from-scratch): Sebastian RaschkaとともにPyTorchでTransformerを実装。
- [Hands-On Large Language Models](https://www.llm-book.com/): Jay AlammarとMaarten Grootendorstによる視覚的・実践的ガイド。
- [LLM Engineer's Handbook](https://www.packtpub.com/en-us/product/llm-engineers-handbook-9781836200079): LLMOps、ファインチューニング、サービング、本番ワークフロー。
- [The 100-Page Language Models Book](https://www.thelmbook.com/): Andriy Burkovによる簡潔で技術的な入門書。
- [Deep Learning](https://www.deeplearningbook.org/): Ian Goodfellow、Yoshua Bengio、Aaron Courvilleによる数学的基礎。
- [Deep Learning: Foundations and Concepts](https://www.bishopbook.com/): Christopher BishopとHugh Bishopによる確率論に基づく解説。
- [Understanding Deep Learning](https://udlbook.github.io/udlbook/): Simon Princeによる理論、直感、実践ノートブック。
- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/): Dan JurafskyとJames Martinによる継続更新中のNLPリファレンス。

### コース

- [AI Engineer](https://aiengineer.co/): エージェント型コーディングと本番AIシステムの構築、テスト、出荷を扱う有料プログラム。
- [Hugging Face LLM Course](https://huggingface.co/learn/llm-course/chapter1/1): Transformer、ファインチューニング、データセット、現代的NLPツール。
- [Full Stack Deep Learning](https://fullstackdeeplearning.com/): AI製品を構築・出荷するライフサイクル全体。
- [Fast.ai Practical Deep Learning](https://course.fast.ai/): コード中心のディープラーニング入門。
- [Karpathy's Neural Networks: Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ): 第一原理からニューラルネットワークと言語モデルを構築。
- [Stanford CS336: Language Modeling from Scratch](https://cs336.stanford.edu/): データ準備から評価・デプロイまで言語モデルを構築。
- [MIT 6.S191: Introduction to Deep Learning](https://introtodeeplearning.com/): ディープラーニングの基礎と応用。
- [Google Generative AI Learning Path](https://www.cloudskillsboost.google/paths/118): 生成AIの概念とGoogle Cloudツールを扱う入門パス。
- [DeepLearning.AI Short Courses](https://learn.deeplearning.ai/): 現在の生成AIエンジニアリング技術に焦点を当てた短期コース。
- [Made With ML](https://madewithml.com/): 本番MLシステムの設計、開発、デプロイ、反復を扱うオープンコース。

### 基礎論文

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762): Transformerアーキテクチャを導入。
- [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361): モデル性能、データ、計算量の関係を調査。
- [Training Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556): 計算予算下でモデルサイズと学習データをどう拡大すべきかを示した。
- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165): 大規模なインコンテキスト学習を実証。
- [Retrieval-Augmented Generation](https://arxiv.org/abs/2005.11401): パラメトリック言語モデルと知識集約型タスクの外部検索を組み合わせた。
- [LoRA](https://arxiv.org/abs/2106.09685): パラメータ効率のよいモデルファインチューニングのための低ランク適応を導入。
- [Training Language Models to Follow Instructions with Human Feedback](https://arxiv.org/abs/2203.02155): InstructGPTで用いられる指示チューニングとRLHFの手法を確立。
- [ReAct](https://arxiv.org/abs/2210.03629): ツールを使う言語モデルエージェント向けに推論トレースと行動を組み合わせた。
- [Constitutional AI](https://arxiv.org/abs/2212.08073): 文書化された原則で有用かつ無害なAIアシスタントを学習する方法。
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290): 明示的な報酬モデリングなしに、選好整合を単純な分類目標として再定義。

## AIシステムを構築する

### ガイドとプレイブック

- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents): エージェントシステムの実践的パターンとトレードオフに関するAnthropicの解説。
- [A Practical Guide to Building Agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf): モデル、ツール、指示、オーケストレーション、ガードレールを扱うOpenAIのガイド。
- [Awesome DeepSeek Agent](https://github.com/deepseek-ai/awesome-deepseek-agent): Claude Code、Codex、Cline、OpenCode、Piを含むコーディングエージェントにモデルを統合するDeepSeek公式セットアップガイド。

### LLMアプリケーションエンジニアリング

- [OpenAI Cookbook](https://cookbook.openai.com/): 構造化出力、ツール利用、検索、評価などのLLMアプリケーションパターンのコード例。
- [Anthropic Prompt Engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview): 成功基準の定義、プロンプトのテスト、モデル挙動の改善技法。
- [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents): 長時間実行エージェントが利用できるコンテキストの選択、構造化、管理方法。
- [12-Factor Agents](https://github.com/humanlayer/12-factor-agents): 決定論的ソフトウェアを中心に制御可能なLLMアプリケーションを構築する実践原則。
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/): 生成AIアプリケーションの開発・デプロイにおけるリスクと緩和策。

### プロトコルと相互運用性

- [Model Context Protocol](https://modelcontextprotocol.io/specification/2026-07-28): AIアプリケーションを外部ツール、データソース、プロンプト、対話型アプリへ接続するオープン仕様。
- [Agent2Agent Protocol](https://a2a-protocol.org/latest/specification/): エージェント発見、タスク委譲、ストリーミング、非同期更新、クロスプラットフォーム通信のベンダー中立仕様。

### エージェントフレームワーク

- [Pydantic AI](https://ai.pydantic.dev/): Pydanticを中心にした型付きエージェント開発。
- [LangGraph](https://docs.langchain.com/oss/python/langgraph/overview): 長時間実行・ステートフルなエージェント向け低レベルオーケストレーション。
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/): ツール、ハンドオフ、ガードレール、トレーシング、エージェントオーケストレーション向け小規模SDK。
- [Google Agent Development Kit](https://google.github.io/adk-docs/): エージェントの開発・評価のためのGoogleフレームワーク。
- [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/): AutoGenとSemantic Kernelの後継で、エージェントおよびグラフベースワークフローを扱うMicrosoftのフレームワーク。

### 永続的・非同期的なエージェント

- [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents): 複数のコンテキストウィンドウをまたいで進行し、失敗から回復するエージェントのパターン。
- [Running Agents](https://openai.github.io/openai-agents-python/running_agents/): OpenAI Agents SDKにおけるライフサイクル、セッション、例外、永続実行のパターン。
- [Human-in-the-Loop](https://openai.github.io/openai-agents-python/human_in_the_loop/): エージェント状態を失わずにツール呼び出しを一時停止、検査、承認、却下、再開。
- [Gemini and Temporal Durable Agent](https://ai.google.dev/gemini-api/docs/temporal-example): エージェントワークフローにおける永続実行、再試行、人間の承認の具体的実装。

### 検索とデータ

- [LlamaIndex](https://docs.llamaindex.ai/): データ取り込み、索引化、検索、エージェントワークフロー。
- [Haystack](https://docs.haystack.deepset.ai/): 検索・生成AIアプリケーション向けモジュラー型パイプライン。
- [Docling](https://github.com/docling-project/docling): AIアプリケーション向け文書解析・変換。

### 評価と信頼性

- [Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents): タスクスイート、採点器、トランスクリプト、評価ハーネスを構築する実践的手法。
- [OpenAI Evals](https://github.com/openai/evals): 言語モデル・システム評価のオープンソースフレームワークとレジストリ。
- [Promptfoo](https://www.promptfoo.dev/docs/): テストケース、アサーション、モデル比較、LLMアプリケーションのレッドチーム検査。
- [Ragas](https://docs.ragas.io/): 検索・生成AIアプリケーションの評価と実験。

### デプロイと可観測性

- [Langfuse](https://langfuse.com/docs): LLMアプリケーション向けトレーシング、評価、プロンプト管理、メトリクス。
- [vLLM](https://docs.vllm.ai/): 言語モデルの推論・サービングエンジン。
- [LiteLLM](https://docs.litellm.ai/): 複数モデルプロバイダー向けモデルゲートウェイと統一インターフェイス。

## エージェント型ソフトウェアエンジニアリング

コーディングエージェントは、開発者による計画、実装、レビュー、テスト、デバッグを支援します。独立した能力比較については[SWE-bench](https://www.swebench.com/)と[Terminal-Bench](https://www.tbench.ai/leaderboard/terminal-bench/2.1)を参照してください。

### コーディングエージェント

- [Neo](https://github.com/owainlewis/neo): サブエージェント、スキル、サンドボックス化ツール、複数モデルプロバイダーを備える、オープンソースのワークフロー優先ターミナルコーディングエージェント。
- [Claude Code](https://code.claude.com/): フック、サブエージェント、スキル、リポジトリレベルの指示を備えるターミナルエージェント。
- [Codex CLI](https://github.com/openai/codex): サンドボックスと承認制御を備えるオープンソースのターミナルエージェント。
- [Gemini CLI](https://github.com/google-gemini/gemini-cli): Geminiを中心に構築され、拡張可能なツールを備えたオープンソースのターミナルエージェント。
- [Cursor CLI](https://cursor.com/cli): Cursorのエディタとクラウドワークフローに接続するターミナルエージェント。
- [GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-coding-agent): GitHub Issueから作業し、プルリクエストを作成する非同期エージェント。
- [Aider](https://aider.chat/): Git統合と幅広いモデル対応を備えるオープンソースのペアプログラマー。
- [OpenCode](https://opencode.ai/): クライアント・サーバーアーキテクチャを採るオープンソースでプロバイダー非依存のターミナルエージェント。
- [OpenHands](https://docs.all-hands.dev/): ソフトウェア開発エージェントをローカルまたはクラウドで実行するオープンソースプラットフォーム。
- [Cline](https://github.com/cline/cline): エディタ拡張、CLI、SDKとして利用できるオープンソースのコーディングエージェント。
- [Continue](https://www.continue.dev/): ソース管理下の設定を用いるIDE・CIワークフロー向けオープンソースコーディングエージェント。

[Build Your Own Coding Agent Like Pi](https://www.youtube.com/watch?v=QER-0DaC-Gk)では、エージェントループ、ツール、ファイルを中心に据えた最小限のGoハーネスの実装を解説します。

### エージェントスキルとワークフロー

- [Blueprint](https://github.com/owainlewis/blueprint/tree/main/skills): ソフトウェア変更の設計、実装、テスト、レビュー、出荷を行うための焦点を絞ったオープンソースのエージェントスキル集。

### ソフトウェアファクトリーとエージェントオーケストレーション

- [Harness Engineering](https://openai.com/index/harness-engineering/): コーディングエージェント、リポジトリ制約、自動チェック、人間による誘導を使うソフトウェア構築に関するOpenAIのフィールドレポート。
- [Codex Orchestration with Symphony](https://openai.com/index/open-source-codex-orchestration-symphony/): プロジェクト作業を分離・観測可能なコーディングエージェント実行に変えるリファレンスアーキテクチャ。
- [How We Built Our Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system): オーケストレーター・ワーカー、並列検索、評価、運用信頼性に関する本番環境の教訓。

[Factory](https://github.com/owainlewis/factory)は、GitリポジトリをまたいでPi、Codex、Claude Codeワーカーをスケジュール・調整する開発者プレビューのコントロールプレーンです。

## 貢献

提案を歓迎しますが、このリストは意図的に選別されています。Issueまたはプルリクエストを開く前に[貢献ガイド](https://github.com/owainlewis/awesome-artificial-intelligence/blob/ab1c3cceef8ab906586505a7a7a293f434280862/CONTRIBUTING.md)と[キュレーションポリシー](https://github.com/owainlewis/awesome-artificial-intelligence/blob/ab1c3cceef8ab906586505a7a7a293f434280862/CURATION.md)を読んでください。

提案するリソースは次を満たす必要があります。

- AIエンジニアリングを学ぶ・実践するソフトウェア開発者に役立つこと。
- 製品ホームページを超える技術的または実用的価値を提供すること。
- 基礎的かつ永続的な価値がある場合を除き、最新で保守されていること。
- 既存エントリーと意味のある違いがあること。
- 一次情報で裏付けられた事実に基づく説明であること。

そのリソースが解決する開発者の問題と、なぜ基準を満たすかを説明してください。既存エントリーと重複する場合は、実質的に優れている理由を説明します。リソースとの関係があれば開示してください。

コーディングエージェントとAIエンジニアリングの継続的な実践チュートリアルについては、[AI Engineer YouTube channel](https://www.youtube.com/@owainlewis/videos)を参照してください。
