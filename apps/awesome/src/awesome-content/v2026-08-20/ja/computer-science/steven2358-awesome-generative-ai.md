---
title: "Awesome Generative AI"
description: "Generative AIを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-steven2358-awesome-generative-ai-readme-md"
---

# Awesome Generative AI

Generative AIを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [おすすめの読み物](#recommended-reading)
- [テキスト](#text)
- [コーディング](#coding)
- [エージェント](#agents)
- [画像](#image)
- [動画](#video)
- [音声](#audio)
- [その他](#other)
- [学習資料](#learning-resources)
- [その他のリスト](#more-lists)

## おすすめの読み物

- [How Large Language Models Will Transform Science, Society, and AI](https://hai.stanford.edu/news/how-large-language-models-will-transform-science-society-and-ai) - GPT-3モデルの能力と制限、および社会への潜在的な影響についての概要記事。アレクス・タムキンとディープ・ガングリリによる、2021年2月5日。
- [Generative AI: A Creative New World](https://www.sequoiacap.com/article/generative-ai-a-creative-new-world/) - 生成AI業界の包括的な検討。歴史的視点と業界生態系の深層分析を提供。ソニア・ホング、パト・グレイディおよびGPT-3による、2022年9月19日。
- [A Coming-Out Party for Generative A.I., Silicon Valley's New Craze](https://www.nytimes.com/2022/10/21/technology/generative-ai.html) - 生成AIの台頭、特にスタビル・ディフィュージョン画像生成器の成功と関連する議論についての記事。ニューヨーク・タイムズ、2022年10月21日。
- [AI's New Creative Streak Sparks a Silicon Valley Gold Rush](https://www.wired.com/story/ais-new-creative-streak-sparks-a-silicon-valley-gold-rush/) - 生成AIスタートアップにおける高揚と投資の増加、さまざまな業界がその応用可能性を探求しているという記事。ウィアード、2022年10月27日。
- [ChatGPT Heralds an Intellectual Revolution](https://www.wsj.com/articles/artificial-intelligence-generative-ai-chatgpt-kissinger-84512912) - ヘンリー・キッシンガー、エリク・スコット、ダニエル・ハッテンローチによる意見記事。ウォール・ストリート・ジャーナル、2023年2月24日。

### 主要な出来事

- [OpenAI API](https://openai.com/blog/openai-api/) - GPT-3をベースにしたテキストからテキストの一般用途AIモデル向けのOpenAI APIの発表。OpenAIブログ、2020年6月11日。
- [GitHub Copilot](https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/) - Copilot、新しいAIペアプログラマーとしての発表。コードをより良く書けるように支援する。GitHubブログ、2021年6月29日。
- [DALL·E 2](https://openai.com/blog/dall-e-2/) - DALL·E 2の公開発表、高解像度を備えた高度な画像生成システムで、画像生成能力が拡張され、さまざまな安全対策が導入された。OpenAIブログ、2022年4月6日。
- [Stable Diffusion Public Release](https://stability.ai/news-updates/stable-diffusion-public-release) - Stable Diffusionの公開発表、広範なインターネットスクラップに基づくAI画像生成モデルで、Creative ML OpenRAIL-Mライセンスのもとで提供。Stable Diffusionブログ、2022年8月22日。
- [ChatGPT](https://openai.com/blog/chatgpt/) - ChatGPTの発表、フォローアップ質問に答える、誤りを認める、誤った前提を挑戦し、不適切なリクエストを拒否するように訓練された会話モデル。OpenAIブログ、2022年11月30日。
- [Bing Search](https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing-and-edge-your-copilot-for-the-web/) - マイクロソフトが、次世代OpenAIモデルを搭載した新しい検索エンジンBingの発表。マイクロソフトブログ、2023年2月7日。
- [LLaMA](https://ai.meta.com/blog/large-language-model-llama-meta-ai/) - Llama LLM、メタが開発した基礎的な650億パラメータの大規模言語モデル。メタ、2023年2月23日。#opensource
- [GPT-4](https://openai.com/research/gpt-4) - GPT-4、大規模マルチモーダルモデルの発表。OpenAIブログ、2023年3月14日。
- [DALL·E 3](https://openai.com/index/dall-e-3/) - DALL·E 3画像生成器の発表。OpenAIブログ、2023年9月20日。
- [Sora](https://openai.com/research/video-generation-models-as-world-simulators) - Sora、大規模動画生成モデルの発表。OpenAI、2024年2月15日。

## テキスト

### モデル

- [OpenAI API](https://openai.com/api/) - OpenAIのAPIは、自然言語、コーディング、画像生成、音声、エージェント開発など、GPTモデルにアクセスを提供。
- [Gopher](https://deepmind.google/blog/language-modelling-at-scale-gopher-ethical-considerations-and-retrieval/) - デープマインドが開発した2800億パラメータの言語モデルであるGopher。
- [OPT](https://huggingface.co/facebook/opt-350m) - フェイスブックが開発したオープン・プリエンテッド・トランスフォーマー（OPT）は、デコーダのみの事前学習済みトランスフォーマーのシリーズである。 [Announcement](https://ai.meta.com/blog/democratizing-access-to-large-scale-language-models-with-opt-175b/).
- [Bloom](https://huggingface.co/docs/transformers/model_doc/bloom) - ハッギング・フェイスが開発した、GPT-3に類似したモデルで、46の言語と13のプログラミング言語に訓練された。#opensource
- [Llama](https://www.llama.com/) - メタのオープンソース大規模言語モデル。#opensource
- [Claude](https://claude.ai/) - クラウド、アンソリックから提供されるAIアシスタントとの対話。
- [Vicuna-13B](https://lmsys.org/blog/2023-03-30-vicuna/) - オープンソースのチャットボット。LLaMAをユーザーが共有した会話データでフィンチューリングによって訓練された。#オープンソース
- [Mistral](https://mistral.ai/en/models) - Mistral AIが提供するオープンウェイトLLM。#オープンソース
- [Grok](https://grok.x.ai/) - xAIが開発したLLMで、[open source](https://github.com/xai-org/grok-1)およびオープンウェイトを備える。 #opensource
- [Qwen](https://qwenlm.github.io/) - アリババクラウドが独自に開発したLLMシリーズ。 [#opensource](https://github.com/QwenLM/Qwen)
- [DeepSeek](https://huggingface.co/deepseek-ai) - デープシーカイが開発したオープンソースLLMシリーズ。 [#opensource](https://github.com/deepseek-ai)
- [MiniMax](https://www.minimax.io/) - テキスト、スピーチ、動画、音楽生成用のマルチモーダルファウンデーションモデル
- [Kimi K2](https://github.com/moonshotai/Kimi-K2) - Moonshot AIが開発したオープンソースのMoE言語モデルシリーズ。アジェンターチャレンジ向け。#オープンソース
- [GLM](https://github.com/zai-org/GLM-5) - Z.aiが開発したオープンソースのMoE言語モデルシリーズ。アジェンターチャレンジ向け。#オープン及時

### チャットボット

- [ChatGPT](https://chatgpt.com/) - OpenAIが開発したChatGPTは、会話形式で相互作用する大規模言語モデルである。
- [Copilot](https://copilot.microsoft.com/) - マイクロソフトが提供する日常的なAIパートナー。
- [Gemini](https://gemini.google.com/) - Google Deepmindが開発したマルチモーダル大規模言語モデルシリーズ。
- [Meta AI](https://www.meta.ai/) - Meta AIアシスタント。タスク実行、AI生成画像、質問への回答が可能。Llama LLMをベースに構築。
- [DeepSeek](https://www.deepseek.com/) - DeepSeekのオープンソース言語モデルを活用したチャットボットインターフェース。#オープンソース
- [Character.AI](https://character.ai/) - Character.AIでは、キャラクターを作成し、それと会話できるようになります。
- [Pi](https://pi.ai) - パーソナライズされたAIプラットフォーム。デジタルアシスタントとして利用可能。
- [Qwen](https://chat.qwenlm.ai/) - Qwenチャットボット。画像生成、ドキュメント処理、ウェブ検索統合、動画理解などに対応。
- [Le Chat](https://chat.mistral.ai/) - Mistral AIの言語モデルを活用したチャットインターフェース。
- [Kimi](https://www.kimi.com/) - Moonshot AIが開発したAIアシスタント。チャット、深層調査、コーディング、マルチエージェント機能を備えている。
- [Z.ai](https://chat.z.ai/) - Z.aiが開発したAIチャットボットおよびエージェントプラットフォーム。GLMモデルファミリーをベースに構築。

### カスタムインターフェース

- [LibreChat](https://librechat.ai/) - リブレチャットは、アシスタントAI向けの無料かつオープンソースのチャットインターフェースである。 [#opensource](https://github.com/danny-avila/LibreChat).
- [Chatbot UI](https://www.chatbotui.com/) - オープンソースのチャットGPT UI。 [#opensource](https://github.com/mckaywrigley/chatbot-ui).

### 検索エンジン

- [Perplexity AI](https://www.perplexity.ai/) - AIを活用した検索ツール。
- [Exa](https://exa.ai/) - 言語モデルを活用した検索。
- [Phind](https://phind.com/) - AIベースの検索エンジン。
- [You.com](https://you.com/) - AIを活用した検索エンジン。ユーザーにカスタマイズされた検索体験を提供しつつ、データを100％プライベートに保持。
- [Komo](https://komo.ai/) - AIによる検索エンジン

### ローカル検索エンジン

- [privateGPT](https://github.com/zylon-ai/private-gpt) - インターネット接続なしで、LLMの力を活かしてあなたのドキュメントに質問を投げましょう
- [quivr](https://github.com/QuivrHQ/quivr) - すべてのファイルをドロップし、LLMと埋め込み技術を活用した生成AIの第二の脳でチャットできます

### 執筆支援

- [Jasper](https://www.jasper.ai/) - 人工知能でコンテンツ作成を速くできます
- [Compose AI](https://www.compose.ai/) - Compose AIは、Chrome拡張機能でAIによる自動補完により、作業時間を40％削減します
- [Rytr](https://rytr.me/) - Rytrは、高品質なコンテンツを作成するためのAI執筆アシスタントです
- [wordtune](https://www.wordtune.com/) - 個人用執筆アシスタント
- [HyperWrite](https://hyperwriteai.com/) - HyperWriteは、アイデアから最終稿まで、自信を持って書くことができ、作業を速く進めます
- [Moonbeam](https://www.gomoonbeam.com/) - 短時間でより良いブログを書けます
- [copy.ai](https://www.copy.ai/) - AIを活用して、より良いマーケティングコピーとコンテンツを作成できます
- [ChatSonic](https://writesonic.com/chat) - テキストと画像の作成を可能にするAIアシスタント
- [Anyword](https://anyword.com/) - AnywordのAI執筆アシスタントは、誰でも効果的なコピーを生成します
- [Hypotenuse AI](https://www.hypotenuse.ai/) - 数語のキーワードからオリジナルで深い洞察のある記事、商品説明、SNSコピーを作成できます
- [Lavender](https://www.lavender.ai/) - Lavenderメールアシスタントは、より多くの返信を短時間で得られます
- [Lex](https://lex.page/) - 人工知能が組み込まれたワードプロセッサで、より速く書くことができます
- [Jenni](https://jenni.ai/) - Jenniは、アイデアと執筆時間を数時間節約する究極の執筆アシスタントです
- [QuillBot](https://quillbot.com) - AIによる言い換えツール
- [Postwise](https://postwise.ai/) - AIを活用して、ツイートを作成し、投稿をスケジュールし、フォロワーを増やします
- [Copysmith](https://copysmith.ai/) - 企業向け・電子商取引向けのAIコンテンツ作成ソリューション
- [Humanize-Text](https://github.com/lynote-ai/humanize-text) - 多言語リライトパイプラインとステップバイステップの例を備えたAIテキスト人間化ツール。#opensource

### ChatGPT拡張機能

- [WebChatGPT](https://chromewebstore.google.com/detail/webchatgpt-chatgpt-with-i/lpfemeioodjbpieminkklglpmhlngfcn) - ウェブ上の関連結果をChatGPTのプロンプトに追加します。
- [GPT for Sheets and Docs](https://workspace.google.com/marketplace/app/gpt_for_sheets_and_docs/677318054654) - Google SheetsおよびGoogle Docs向けのChatGPT拡張機能。
- [YouTube Summary with ChatGPT](https://chromewebstore.google.com/detail/youtube-summary-with-chat/nmmicjeknamkfloonkhhcjmomieiodli) - ChatGPTを使ってYouTube動画を要約します。
- [AI Prompt Genius](https://chromewebstore.google.com/detail/ai-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo) - ChatGPT向けの最適なプロンプトを発見・共有・インポート・利用し、チャット履歴をローカルに保存します。
- [ShareGPT](https://sharegpt.com/) - あなたのChatGPTの会話の共有と、他人が共有した会話の探索。
- [Merlin](https://www.getmerlin.in/) - すべてのウェブサイト向けのChatGPT Plus拡張機能。
- [Jetwriter](https://jetwriter.ai/) - Chrome、デスクトップ、モバイル向けのAI執筆アシスタント。
- [ChatGPT for Jupyter](https://github.com/TiesdeKok/chat-gpt-jupyter-extension) - ChatGPTを活用したさまざまなヘルパー関数をJupyter NotebookおよびJupyter Labに追加します。
- [editGPT](https://www.editgpt.app/) - chatGPT内でコンテンツを簡単に校正・編集・変更履歴を追跡します。
- [Forefront](https://www.forefront.ai/) - より良いChatGPT体験。
- [ChatGPT for Sheets, Docs, Slides, Forms](https://workspace.google.com/marketplace/app/gpt_for_sheets_docs_forms_slides/466607203252) - Google Sheets、Google Docs、Google Slides、Google Forms向けのChatGPT拡張機能。
- [GPT for Gmail](https://workspace.google.com/marketplace/app/gpt_for_gmail_ai_email_assistant_gemini/899305976589) - Gmail向けのAIメールアシスタント。

### 生産性

- [ChatPDF](https://www.chatpdf.com/) - どんなPDFともチャットできます。
- [Mem](https://mem.ai/) - Memは世界初のAIを活用したパーソナライズされたワークスペースです。創造性を高め、日常的な業務を自動化し、自動的に整理されます。
- [Taskade](https://www.taskade.com/) - Taskade AIでタスク、ノート、構造化されたリスト、マインドマップをアウトラインします。
- [Notion AI](https://www.notion.so/product/ai) - より良い、より効率的なノートやドキュメントを書きます。
- [Nekton AI](https://nekton.ai) - AIでワークフローを自動化します。シンプルな言語でワークフローのステップを説明してください。
- [Limitless](https://www.limitless.ai/) - アプリケーション間およびオプションのウェアラブルで過去のやり取りを検索し、会話や会議を記録・要約・生成するAIメモアシスタント。
- [NotebookLM](https://notebooklm.google/) - Google Geminiを活用したオンラインの研究・ノートツールで、ドキュメントとインタラクションします。
- [Open Notebook](https://www.open-notebook.ai) - ノートブックLMのオープンソース実装で、より柔軟性と機能性を備える。 [#opensource](https://github.com/lfnovo/open-notebook)
- [Screenpipe](https://github.com/screenpipe/screenpipe) - AIを活用したスクリーンおよびオーディオ活動の記録ツール。AI検索、自動化、ローカルLLM対応。#opensource

### 会議支援

- [Otter.ai](https://otter.ai/) - 会議のアシスタントで、音声を録音し、ノートを書くだけでなく、スライドを自動的にキャプチャし、要約を生成する
- [Cogram](https://www.cogram.com/) - Cogramは、仮想会議中に自動的にノートを取って、アクションアイテムを特定する
- [Sybill](https://www.sybill.ai/) - Sybillは、トランスクリプトと感情に基づく洞察を組み合わせることで、営業会話の要約を生成し、次ステップ、課題、関心事の領域を含む
- [Loopin AI](https://www.loopinhq.com/) - Loopinは、AIを使って会議を録音・トランスクリプト・要約するだけでなく、カレンダーに自動で会議ノートを整理できる協働型会議スペース
- [Read AI](https://www.read.ai/) - どこでも使えるAIコピロートで、会議、メール、メッセージを要約し、コンテンツの発見や推奨により生産性を高める
- [Fireflies.ai](https://fireflies.ai) - チームのすべての会話のトランスクリプト、要約、検索、分析を行う

### 学術

- [Elicit](https://elicit.org/) - Elicitは、文献レビューなどの研究ワークフローを自動化するために、言語モデルを活用する
- [genei](https://www.genei.io/) - 学術論文を数秒で要約し、研究時間の80％を節約する
- [Explainpaper](https://www.explainpaper.com/) - 学術論文をより効率的に読む方法。論文をアップロードし、わかりにくいテキストをハイライトし、説明を受ける
- [Consensus](https://consensus.app/search/) - ConsensusはAIを用いて科学的研究資料から答えを検索する検索エンジン
- [scite](https://scite.ai/) - 科学論文の発見と評価を行うプラットフォーム
- [SciSpace](https://scispace.com/) - 科学文献を理解するAI研究アシスタント
- [STORM](https://storm.genie.stanford.edu/) - トピックを調査し、引用を含む長文レポートを生成する、LLMを活用した知識整理システム。 [#opensource](https://github.com/stanford-oval/storm/)
- [alphaXiv](https://www.alphaxiv.org) - arXivの論文をディスカッションし、発見し、読む
- [ASReview](https://asreview.nl/) - システマティックレビューを支援するオープンソースAIツールで、研究者に大量の学術文献を効率的にフィルタリングできる。 [#opensource](https://github.com/asreview/asreview)
- [Local Deep Research](https://github.com/LearningCircuit/local-deep-research) - 学術資料、ウェブ、プライベートドキュメントを検索するための深層研究ツールで、ローカルまたはクラウドのLLMを活用。 [#opensource](https://github.com/LearningCircuit/local-deep-research)
- [Rayyan](https://www.rayyan.ai/) - AIを活用した、協働的なスクリーニングとデータ管理ツールを備えた、系統的文献レビュー管理プラットフォーム

### リーダーボード

- [Arena](https://arena.ai/) - UC Berkeley SkyLabの研究者たちが運営する、オープンなAIベンチマークのコラボレーションプラットフォーム
- [Artificial Analysis](https://artificialanalysis.ai/) - Artificial Analysisは、AIモデルとホスティングプロバイダーの選定に役立つ、客観的なベンチマークと情報提供
- [imgsys](https://imgsys.org/rankings) - fal.aiによる生成画像モデルの競技場
- [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - アプリ間での使用頻度に基づいて言語モデルをランキング・分析
- [SEAL LLM Leaderboard](https://labs.scale.com/leaderboard) - 専門家が運営するLLMベンチマークと更新されたAIモデルランキング
- [LLM Stats](https://llm-stats.com/) - ベンチマーク、価格、スピード、コンテキストウィンドウを比較する

### その他のテキスト生成

- [EmailTriager](https://www.emailtriager.com/) - AIを活用して、バックグラウンドでメールの返信を自動的に作成します。
- [AI Poem Generator](https://www.aipoemgenerator.org) - AI詩生成器は、テキストプロンプトをもとに、どんなテーマにも美しいリズムの詩を書きます。

## コーディング

### コーディング支援

- [GitHub Copilot](https://github.com/features/copilot) - GitHub Copilotは、OpenAI Codexを活用して、リアルタイムでエディタ内にコードや関数の提案を行います。
- [OpenAI Codex](https://platform.openai.com/docs/guides/code/) - OpenAIが開発した自然言語をコードに変換するAIシステム。
- [Ghostwriter](https://blog.replit.com/ai) - replitによるAIパワードペアプログラミングツール。
- [Amazon Q](https://aws.amazon.com/q/) - AWSが提供する生成AIを搭載したアシスタントで、質問に答える、コードを書く、タスクを自動化するなどサポートします。
- [tabnine](https://www.tabnine.com/) - 全行・全関数のコード補完で、コード作成を速くします。
- [Stenography](https://stenography.dev/) - 自動コードドキュメンテーション。
- [Mintlify](https://mintlify.com/) - AIを活用したドキュメンテーション作成ツール。
- [AI2sql](https://www.ai2sql.io/) - AI2sqlにより、エンジニアや非エンジニアも、SQLを知らなくても、効率的でエラーのないSQLクエリを簡単に作成できます。
- [Qodo](https://www.qodo.ai/) - IDE、プルリクエスト、セキュリティ向けのAIによるアグエントワークフローを備えたAIコードレビューツール。
- [PR-Agent](https://github.com/The-PR-Agent/pr-agent) - AIを活用したプルリクエスト分析、フィードバック、提案などを行うツール。
- [TurboPilot](https://github.com/ravenscroftj/turbopilot) - llama.cppのライブラリを活用した、4GBのRAMで60億パラメータのSalesforce Codegenモデルを実行する、セルフホスト型のCopilotのクローン。
- [GPT-Code UI](https://github.com/ricklamers/gpt-code-ui) - OpenAIのChatGPTコードインタプリタのオープンソース実装。#opensource
- [Open Interpreter](https://github.com/openinterpreter/open-interpreter) - ローカルで実行するOpenAIのコードインタプリタ。
- [Continue](https://www.continue.dev/) - オープンソースAIコードアシスタント。任意のモデルと任意のコンテキストを接続し、IDE内でカスタムな自動補完やチャット体験を構築できる。 [#opensource](https://github.com/continuedev/continue)
- [RooCode](https://github.com/RooCodeInc/Roo-Code) - VS Codeに直接統合されたLLMを活用した自律的なコーディングエージェント。 [#opensource](https://github.com/RooCodeInc/Roo-Code)
- [Windsurf](https://windsurf.com/) - AIネイティブなIDEで、開発プロセス全体にわたってコード編集と高度なAI支援を統合。
- [Plandex](https://github.com/plandex-ai/plandex) - 複雑なタスクに適したオープンソース、ターミナルベースのAIプログラミングエンジン。 [#opensource](https://github.com/plandex-ai/plandex)
- [Jupyter AI](https://github.com/jupyterlab/jupyter-ai) - Jupyter NotebookおよびJupyterLabに搭載された、100以上のLLM（含むOllamaおよびGPT4Allのローカルホストモデル）をサポートするオープンソースかつカスタマイズ可能なAIアシスタント。#opensource
- [DataLine](https://dataline.app) - AI駆動のデータ分析および可視化ツール。 [#opensource](https://github.com/RamiAwar/dataline)
- [v0](https://v0.dev) - ReactおよびNext.js向けのプロンプト駆動UI生成、プロダクション対応のコンポーネントを作成。
- [Lovable](https://lovable.dev) - 対話型フルスタックアプリ生成、アイデアをデプロイ可能なコードに変換。
- [aider](https://aider.chat/) - ターミナル上でAIによるペアプログラミングを実現し、複数のLLMプロバイダーをサポート。 [#opensource](https://github.com/paul-gauthier/aider)
- [Kilo](https://kilo.ai/) - VS Code、JetBrains、CLI向けのオープンソースAIコードアシスタント。 [#opensource](https://github.com/Kilo-Org/kilocode)

### 開発者向けツール

- [Cohere](https://cohere.com/) - Cohereは、高度な大規模言語モデルおよびNLPツールへのアクセスを提供します。
- [Haystack](https://haystack.deepset.ai/) - 言語モデルを用いたNLPアプリケーション（例：エージェント、意味論検索、質問応答）の開発フレームワーク
- [LangChain](https://langchain.com/) - 言語モデルを駆動するアプリケーションを開発するためのフレームワーク
- [gpt4all](https://github.com/nomic-ai/gpt4all) - コード、ストーリー、対話など、大量の清潔なアシスタントデータを学習したチャットボット
- [LLM App](https://github.com/pathwaycom/llm-app) - リアルタイムで大規模言語モデルを活用できるデータパイプラインを構築するためのオープンソースPythonライブラリ
- [LMQL](https://lmql.ai/) - 大規模言語モデル向けのクエリ言語
- [LlamaIndex](https://www.llamaindex.ai/) - 外部データ上での大規模言語モデルアプリケーション開発に用いるデータフレームワーク
- [Phoenix](https://phoenix.arize.com/) - Arizeによるノートブック環境で実行可能な、機械学習の可視化ツール。LLM、CV、テーブルモデルの監視と最適化
- [Cursor](https://cursor.com/) - パワフルAIを活用したペアプログラミングに特化した、未来のIDEであるCursor
- [SymbolicAI](https://github.com/ExtensityAI/symbolicai) - 大規模言語モデルを核としてアプリケーションを構築するためのニューロン・シンボリックフレームワーク
- [Vanna.ai](https://vanna.ai/) - SQL生成および関連機能をサポートするオープンソースPython RAGフレームワーク。 [#opensource](https://github.com/vanna-ai/vanna)
- [Portkey](https://portkey.ai/) - 大規模言語モデルの監視、キャッシュ、管理を一括で行うフルスタックLLMOpsプラットフォーム
- [agenta](https://github.com/agenta-ai/agenta) - プロンプトエンジニアリング、評価、デプロイを一貫して行うオープンソースの端到端LLMOpsプラットーン。#opensource
- [Together AI](https://www.together.ai/) - AIモデルのトレーニング、ファインチューニング、推論を高速かつ低コストで、プロダクション規模で実行
- [Gitingest](https://gitingest.com/) - 任意のGitリポジトリをコードベースのシンプルなテキスト要約に変換し、その要約を任意のLLMに渡すことができる。 [#opensource](https://github.com/cyclotruc/gitingest)
- [Repomix](https://repomix.com/) - コードベースをAIが扱いやすいフォーマットにパッケージ化する。 [#opensource](https://github.com/yamadashy/repomix)
- [llama.cpp](https://github.com/ggml-org/llama.cpp) - MetaのLLaMAモデル（その他）の推論を純粋なC/C++で実行。#opensource
- [bitnet.cpp](https://github.com/microsoft/BitNet) - マイクロソフトが開発した1ビットLLMの公式推論フレームワーク。 [#opensource](https://github.com/microsoft/BitNet)
- [OpenRouter](https://openrouter.ai/) - LLM向けの一元化インターフェース。[#opensource](https://github.com/OpenRouterTeam)
- [Ludwig](https://github.com/ludwig-ai/ludwig) - カスタムAIモデル（LLMやその他のディープニューラルネットワーク）を構築するための低コードフレームワーク。[#opensource](https://github.com/ludwig-ai/ludwig)
- [Unsloth](https://unsloth.ai) - LLMのファインチューニングに用いるPythonライブラリ。[#opensource](https://github.com/unslothai/unsloth).
- [OpenLIT](https://github.com/openlit/openlit) - OpenTelemetryにネイティブに統合されたオープンソースGenAIおよびLLM可視化プラットフォーム。トレースとメトリクスを含む。#opensource
- [Helicone AI](https://helicone.ai/) - AIアプリケーションのログ、モニタリング、デバッグを可能にするオープンソースLLM可視化プラットフォーム。[#opensource](https://github.com/Helicone/helicone)
- [Wren AI](https://www.getwren.ai/oss) - テキストからSQLへ、およびセマンティックレイヤーを備えたオープンソースの生成BIエージェント。[#opensource](https://github.com/Canner/WrenAI)
- [Cleanlab](https://cleanlab.ai/tlm/) - LLM出力におけるホラクションの検出とスコアリングを行うAPI
- [Opik](https://github.com/comet-ml/opik) - LLMアプリケーションのトレース、評価、モニタリングを行うオープンソースプラットフォーム。[#opensource](https://github.com/comet-ml/opik)
- [Langfuse](https://langfuse.com/) - トレース、評価、プロンプト管理、メトリクスを提供するオープンソースLLMエンジニアリングプラットフォーム。[#opensource](https://github.com/langfuse/langfuse)
- [MLflow](https://mlflow.org/) - ML実験の追跡、モデルおよびプロンプトの評価、モデルのデプロイ、LLM可視化を提供するオープンソースプラットフォーム。[#opensource](https://github.com/mlflow/mlflow)
- [rehydra](https://github.com/rehydra-ai/rehydra-sdk) - LLMにプロンプトを送信する前に、PIIをローカルで匿名化し、レスポンスをスムーズに再構成するゼロトラストSDK
- [Agentset](https://agentset.ai/) - RAGおよびエージェントアプリケーションの構築と評価を行うオープンソースプラットフォーム。[#opensource](https://github.com/agentset-ai/agentset)
- [Manifest](https://manifest.build) - コスト効率の高いモデルにリクエストをルートするオープンソースLLMルーター。使用制限とモデルベンチマークを提供。[#opensource](https://github.com/mnfst/manifest)
- [ai-i18n](https://github.com/i18n-actions/ai-i18n) - LLM（Claude、GPT、Ollama）を用いて、自動的にi18nローカリゼーションファイルを翻訳するGitHubアクション。#opensource
- [Groq](https://groq.com/) - カスタムLPUハードウェアを活用したオープンソースLLMのクラウド推論API
- [Model Context Protocol](https://modelcontextprotocol.io/) - AIモデルを外部ツールやデータソースに接続するためのオープン標準。[MCP Registry](https://registry.modelcontextprotocol.io/) [#opensource](https://github.com/modelcontextprotocol/modelcontextprotocol)
- [Steel Browser](https://github.com/steel-dev/steel-browser) - AIエージェント向けのオープンソースブラウザのサンドボックスおよび自動化インフラ。セッション管理、スクリーンショット、PDF、プロキシ、ボット防止ツールを含む。#opensource
- [Bifrost](https://github.com/maximhq/bifrost) - 1000以上のモデルに対応するオープンソースLLMゲートウェイ。ルーティング、負荷分散、ガードレール、可視化を備えている。#opensource

### プレイグラウンド

- [OpenAI Playground](https://platform.openai.com/playground) - リソース、チュートリアル、APIドキュメント、動的な例を探索
- [Google AI Studio](https://aistudio.google.com/) - ジェミンと実験モデルを使ってプロトタイピングできるウェブベースツール
- [GitHub Models](https://github.com/marketplace/models) - AIモデルを検索し、実験して生成AIアプリケーションを開発

### ローカルLLM配備

- [Ollama](https://github.com/ollama/ollama) - ローカルに大規模言語モデルをすぐに開始
- [Open WebUI](https://github.com/open-webui/open-webui) - 拡張性があり、機能豊かでユーザーに親しみやすい、完全にオフラインで動作するセルフホストAIプラットフォーム。#opensource
- [Jan](https://jan.ai/) - MistralやLlama2のようなLLMを自分のコンピュータ上でローカル・オフラインで実行するか、またはリモートAIAPIに接続する。[#opensource](https://github.com/janhq/jan)
- [Msty](https://msty.ai/) - ローカルおよびオンラインAIモデルに使えるシンプルかつ強力なインターフェース
- [PyGPT](https://pygpt.net/) - チャット、視覚、エージェント、画像生成、ツール、コマンド、音声制御など、個人用デスクトップAIアシスタント。#opensource
- [LLM](https://llm.datasette.io/) - リモートおよびローカルのLarge Language Modelsとのインタラクションを行うCLIツールおよびPythonライブラリ。[#opensource](https://github.com/simonw/llm)
- [LM Studio](https://lmstudio.ai) - あなたのコンピュータ上でローカルLLMをダウンロードして実行
- [RunThisLLM](https://runthisllm.com) - あなたのハードウェア上で実行可能なLLMを確認
- [Harbor](https://github.com/av/harbor) - 1コマンドでローカルLLMバックエンド、UI、サポートサービスを実行できるコンテナ化ツールキット。#opensource
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile-ai) - iOSおよびAndroidでインターネットに接続なしで、ローカルにLLM、視覚モデル、Stable Diffusionを実行できるReact Nativeアプリ。#opensource

## エージェント

### 自律エージェント

- [Auto-GPT](https://github.com/Significant-Gravitas/AutoGPT) - GPT-4を完全に自律的に実現するオープンソースの実験的アプローチ
- [babyagi](https://github.com/yoheinakajima/babyagi) - AIを活用したタスク管理システム
- [AgentGPT](https://github.com/reworkd/AgentGPT) - ブラウザ上で自律AIエージェントを構築、設定、デプロイ
- [GPT Engineer](https://github.com/AntonOsika/gpt-engineer) - 何を構築したいかを指定すると、AIが確認を求めてから構築を行う
- [GPT Prompt Engineer](https://github.com/mshumer/gpt-prompt-engineer) - 自動プロンプトエンジニアリング。プロンプトを生成・テスト・評価し、最適なものを選出
- [MetaGPT](https://github.com/FoundationAgents/MetaGPT) - マルチエージェントフレームワーク：1行の要件からPRD、設計、タスク、リポジトリを返す
- [AutoGen](https://github.com/microsoft/autogen) - AutoGenは、複数のエージェントが相互に会話してタスクを解決するようにLLMアプリケーションを開発できるフレームワーク
- [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot) - 開発者が実装を監視しながら、スケーラブルなアプリをゼロから作成できる開発ツール
- [Devin](https://devin.ai/) - Cognition Labsによる自律AIソフトウェアエンジニア
- [OpenHands](https://github.com/OpenHands/OpenHands) - 自主的にソフトウェアエンジニアリングの複雑さをナビゲートできるエージェント。#opensource
- [Davika](https://github.com/stitionai/devika) - AIエージェントによるソフトウェアエンジニア。#opensource
- [n8n](https://n8n.io/) - AI機能とビジネスプロセス自動化を統合したワークフロー自動化プラットフォーム。
- [Sauna](https://www.sauna.ai) - コンテキストの積み重ねを考慮したAIアシスタント。あなたの好みを学び、隠れたパターンを検知し、脳のコンテキストを補完し、積極的に行動する。
- [Claude Code](https://code.claude.com) - Anthropicのエージェントコードツール。あなたのターミナルに存在し、アイデアをコードに変換するのをサポートする。
- [Gemini CLI](https://geminicli.com) - Geminiの力をあなたのターミナルに直接導入するオープンソースAIエージェント。[#opensource](https://github.com/google-gemini/gemini-cli)
- [OpenCode](https://opencode.ai) - オープンソースAIコーディングエージェント。[#opensource](https://github.com/anomalyco/opencode)
- [Mastra](https://mastra.ai) - AIエージェント、ワークフロー、アプリケーションの構築に用いるTypeScriptフレームワーク。[#opensource](https://github.com/mastra-ai/mastra)
- [OpenClaw](https://openclaw.ai) - 自分のデバイス上で実行できる個人AIアシスタント。[#opensource](https://github.com/openclaw/openclaw)
- [moltbook](https://www.moltbook.com) - AIエージェントのソーシャルネットワーク。
- [AgentMail](https://www.agentmail.to) - AIエージェントのメールインボックス。
- [Openwork](https://openwork.bot) - AIエージェントが互いに雇い合い、仕事に取り組み、結果を検証し、トークンを獲得する。
- [Agent Skills](https://agentskills.io) - AIエージェント向けに再利用可能な機能や専門知識をパッケージ化するためのオープンフォーマットおよびリファレンスSDK。[#opensource](https://github.com/agentskills/agentskills)
- [PraisonAI](https://github.com/MervinPraison/PraisonAI) - ワークフロー、ツール統合、記憶を持つマルチエージェントAIシステムを構築するためのフレームワーク。#opensource
- [Hermes Agent](https://hermes-agent.nousresearch.com) - メモリ、メッセージインテグレーション、サンドボックスされたツール実行を備えた自己改善型個人エージェント。[#opensource](https://github.com/NousResearch/hermes-agent)
- [OpenAgents](https://github.com/openagents-org/openagents) - WebSocket、gRPC、HTTP、MCP、A2AをサポートするオープンソースAIエージェントネットワーク構築プラットフォーム。#opensource
- [Dorothy](https://github.com/Charlie85270/Dorothy) - 複数のAI CLIエージェントを同時にオーケストレーションするオープンソースデスクトップアプリ。自動化とカンバン管理を備える。#opensource
- [Hive](https://github.com/aden-hive/hive) - 自動生成グラフ、進化ループ、MCP統合を備えたオープンソースマルチエージェントフレームワーク。#opensource

### カスタムアシスタント

- [Poe](https://poe.com/) - Poeは多様なボットへのアクセスを提供する。
- [GPT Builder](https://chatgpt.com/gpts/editor) - GPTベースのアシスタントを作成するアシスタント。

## 画像

### モデル

- [DALL·E 2](https://openai.com/dall-e-2/) - OpenAIのDALL·E 2は、自然言語による説明から現実的な画像や芸術を生成できる新しいAIシステム。
- [Stable Diffusion](https://huggingface.co/CompVis/stable-diffusion-v1-4) - Stability AIのStable Diffusionは、テキストから画像を生成する最先端のテキスト-to-画像モデル。#opensource
- [Midjourney](https://www.midjourney.com/) - Midjourneyは、新たな思考の媒体を探求し、人類の創造力を拡張する独立した研究ラボ。
- [Imagen](https://imagen.research.google/) - GoogleのImagenは、極めて現実的な画像と深い言語理解を備えたテキスト-to-等差モデル。
- [Make-A-Scene](https://ai.meta.com/blog/greater-creative-control-for-ai-image-generation/) - MetaのMake-A-Sceneは、マルチモーダル生成AI手法で、ユーザーがテキスト説明と自由なスケッチで自らのビジョンを描き、創造的な制御を手にできるようにする。
- [DragGAN](https://github.com/XingangPan/DragGAN) - Drag Your GAN：生成画像空間上の点ベース操作のインタラクティブな手法。
- [Flux](https://github.com/black-forest-labs/flux) - ブラックフォレスト・ラボスのテキスト-to-画像モデルで、高品質な写実的な出力が可能。#オープンソース

### サービス

- [Craiyon](https://www.craiyon.com/) - Craiyon（かつてはDALL-E mini）は、テキストプロンプトから画像を描くことができるAIモデルです。
- [DreamStudio](https://stability.ai/dreamstudio) - DreamStudioは、ステイブリーディフュージョン画像生成モデルを使用して画像を作成するための使いやすいインターフェースです。
- [Artbreeder](https://www.artbreeder.com/) - Artbreederは、協働や探索を容易にすることでユーザーの創造性を高める新しいタイプの創造ツールです。
- [Magic Eraser](https://magicstudio.com/magiceraser/) - 画像から不要なものを数秒で削除できます。
- [Imagine by Magic Studio](https://magicstudio.com/imagine) - Magic Studioによるツールで、頭の中にあるものをただ説明するだけで表現できます。
- [Alpaca](https://www.getalpaca.io/) - Stable Diffusion Photoshopプラグイン。
- [Patience.ai](https://www.patience.ai/) - Patience.aiは、Stability.AIが開発した最先端AIであるステイブリーディフュージョンを使って画像を作成するアプリです。
- [GenShare](https://www.genshare.io/) - 数秒で無料でアートを生成。作成したものを所有し、共有できます。マルチメディア生成スタジオで、デザインと創造を民主化しています。
- [Playground](https://playground.com/) - Playgroundは無料で使えるオンラインAI画像生成ツールです。アート、SNS投稿、プレゼンテーション、ポスター、動画、ロゴなど、さまざまなコンテンツを作成できます。
- [modyfi](https://www.modyfi.com/) - ブラウザベースのデザインプラットフォームで、AIによる画像生成、アニメーション、リアルタイム協働が可能。
- [PhotoRoom](https://www.photoroom.com/) - スマホだけを使って製品やポートレート画像を作成できます。背景を削除し、背景を変更して製品を紹介できます。
- [Photo AI](https://photoai.com/ai-avatars) - 独自のAI生成アバターを作成できます。
- [ClipDrop](https://clipdrop.co/) - 写真スタジオなしでプロフェッショナルなビジュアルを作成。[stability.ai](https://stability.ai/)
- [Lensa](https://prisma-ai.com/lensa) - Stable Diffusionを用いたパーソナライズされたアバター生成を含む、すべての画像編集アプリです。
- [RunDiffusion](https://rundiffusion.com/) - クラウドベースのワークスペースでAI生成アートを作成できます。
- [Ideogram](https://ideogram.ai/) - テキストから画像を生成するプラットフォームで、創造的な表現がよりアクセス可能になります。
- [Bing Image Creator](https://www.bing.com/images/create) - 安全機能付きのDALLE·3ベースのテキ-ト-画像生成器。
- [KREA](https://www.krea.ai/) - あなたのスタイルやコンセプト、製品について知っているAIで、高品質なビジュアルを生成できます。
- [Nightcafe](https://creator.nightcafe.studio/) - NightCafe Creatorは、複数のAIアート生成方法を備えたAIアート生成アプリです。
- [Leonardo AI](https://leonardo.ai/) - プロジェクトに必要なプロクオリティのビジュアル資産を、驚くほど高品質・高速・スタイルに応じて作成できます。
- [Recraft](https://www.recraft.ai/) - オリジナルの画像、ベクターアート、イラスト、アイコン、3Dグラフィックを簡単に生成・反復できるAIツール
- [Reve Image](https://reve.com/) - プロンプトへの適合性、美しさ、タイプグラフィックにおいて優れた性能を発揮する、根本から訓練されたモデル
- [Magnific](https://www.magnific.com/) - 画像生成、背景除去、クリエイティブテンプレートを含むAI設計ツール
- [FigureLabs](https://www.figurelabs.ai/) - テキスト説明やスケッチから、出版用のベクターフォーマットの科学図をAIで生成するツール

### グラフィックデザイン

- [Brandmark](https://brandmark.io/) - ロゴ設計用のAIツール
- [Gamma](https://gamma.app/) - フォーマットやデザイン作業なしで、美しいプレゼンテーションやウェブページを作成
- [Microsoft Designer](https://designer.microsoft.com/) - 一瞬で素晴らしいデザインを生成
- [Napkin](https://www.napkin.ai/) - テキストから図、チャート、情報図をAIで生成するツール

### 画像ライブラリ

- [Lexica](https://lexica.art/) - スタビルディフィュージョン検索エンジン
- [OpenArt](https://openart.ai/) - 1000万以上のプロンプトを検索し、スタビルディフィュージョン、DALL·E 2などを用いてAIアートを生成
- [PromptHero](https://prompthero.com/) - スタビルディフィュージョン、チャットGPT、ミッドジョーニーなど、モデル向けのプロンプトを検索
- [PromptBase](https://promptbase.com/) - トッププロンプトエンジニアが作成したプロンプトを検索。あなたのオリジナルプロンプトを販売できます

### モデルライブラリ

- [Civitai](https://civitai.com/) - コミュニティが運営するAIモデル共有ツール
- [Stable Diffusion Models](https://rentry.org/sdmodels) - rentry.org上のスタビルディフィュージョンチェックポイントの包括的なリスト

### Stable Diffusion資料

- [Stable Horde](https://stablehorde.net/) - スタビルディフィュージンの作業者を構成する、協働による分散型クラスタ
- [DiffusionDB](https://diffusiondb.com/) - スタビルディフィュージョン用のすべての公開アプリ、開発ツール、ガイド、プラグインの一覧。 [Airtable version](https://airtable.com/shr0HlBwbw3nZ8Ht3/tblxOCylXV8ynh7ti).
- [PublicPrompts](https://publicprompts.art/) - スタビルディフィュージョン向けの無料プロンプトのコレクション
- [Hugging Face Diffusion Models Course](https://github.com/huggingface/diffusion-models-class) - [@huggingface](https://github.com/huggingface) による拡散モデルオンラインコースのPython資料。
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI) - スタビルディフィュージョンワークフローの構築と実行に使うノードベースのインターフェース。 [#opensource](https://github.com/comfyanonymous/ComfyUI)

## 動画

- [Runway](https://runwayml.com/) - 魔法のようなAIツール、リアルタイム協働、精密編集など。次世代コンテンツ作成ソリューション
- [Synthesia](https://www.synthesia.io/) - 数分でテキストから動画を作成
- [Colossyan](https://www.colossyan.com/) - 学習・開発に特化した動画作成ツール。AIアバターを用いて、複数言語で教育動画を作成
- [Fliki](https://fliki.ai/) - 数分でAI音声を活用したテキストから動画・音声コンテンツを作成
- [Pictory](https://pictory.ai/) - Pictoryの強力なAIにより、テキストからプロクオリティの動画を作成・編集が可能になります
- [Pika](https://pika.art/) - アイデアから動画まで、あなたの創造性を動きに変えるプラットフォーム
- [HeyGen](https://app.heygen.com/) - スクリプトをカスタマイのAIアバターで話す動画に数分で変換
- [Luma Dream Machine](https://lumalabs.ai/app) - テキストや画像から高速に高品質でリアルな動画を生成するAIモデル
- [KLING AI](https://kling.ai/) - 創造的な画像と動画を生成するツール
- [Hailuo AI](https://hailuoai.video/) - AIによるテキスト-to-動画生成器
- [Google Flow](https://labs.google/fx/tools/flow) - Googleが開発したVeoをベースにしたAI映像制作ツール
- [Seedance 2.0](https://seed.bytedance.com/en/seedance2_0) - Niobotics ByteDanceが開発した画像-to-動画およびテキスト-to-動画モデル
- [MaxVideoAI](https://maxvideoai.com/examples) - 複数のAI動画モデルで動画を生成・比較できるワークスペース
- [HyperFrames](https://hyperframes.heygen.com/) - AIエージェントがHTML、CSS、JavaScriptを書くことで動画を生成するためのフレームワーク。 [#opensource](https://github.com/heygen-com/hyperframes)

### アバター

- [D-ID](https://www.d-id.com/) - ボタンひとつで話すアバターを作成・インタラクションが可能
- [HeyGen](https://app.heygen.com/) - スクリプトをカスタマイのAIアバターで話す動画に数分で変換
- [Affogato](https://affogato.ai/) - TikTok、Reels、Shorts向けのAI生成商品動画広告を作成

### アニメーション

- [Autodesk Flow Studio](https://www.autodesk.com/products/flow-studio) - CGキャラクターを現実映像にアニメーションし、合成するためのAI駆動ツール。

## 音声

### 音声合成

- [Eleven Labs](https://elevenlabs.io/) - AI音声生成器
- [Resemble AI](https://www.resemble.ai/) - テキスト-to-スピーキング用のAI音声生成器および音声クローン
- [WellSaid](https://www.wellsaid.io/) - リアルタイムでテキストを音声に変換
- [TorToiSe](https://github.com/neonbjb/tortoise-tts) - 質の高いマルチボイステキスト-to-音声システム。#opensource
- [Bark](https://github.com/suno-ai/bark) - トランスフォーマーベースのテキスト-to-音声モデル。#opensource
- [TTS WebUI](https://github.com/rsxdalv/TTS-WebUI) - WebUIによる複数のテキスト-to-音声、音楽生成、音声ツールの実行。#opensource

### 音声認識

- [Whisper](https://openai.com/index/whisper/) - 大規模な弱い監督を用いた強固な音声認識。 [#opensource](https://github.com/openai/whisper)
- [Wispr Flow](https://wisprflow.ai/) - Flowは、コンピュータ上のアプリケーションに適用可能なスムーズな音声入力で文章作成を速くします
- [Vibe Transcribe](https://thewh1teagle.github.io/vibe/) - 音声と動画の転記を簡単に実行できる一括ソリューション。 [#opensource](https://github.com/thewh1teagle/vibe)
- [whisper.cpp](https://github.com/ggml-org/whisper.cpp) - OpenAIのWhisperモデルをC/C++で実装したポート。#opensource
- [whisper-ctranslate2](https://github.com/Softcatala/whisper-ctranslate2) - オリジナルOpenAIクライアントと互換性のあるWhisperCLIクライアント。CTranslate2を使用して推論を高速化。 [#opensource](https://github.com/Softcatala/whisper-ctranslate2)
- [NeMo](https://github.com/NVIDIA-NeMo/Speech) - NVIDIAが開発したオープンソースフレームワーク。自動話音認識およびテキスト-to-スピーキングを含むスピーキングAIシステムの構築に利用可能。#opensource
- [Parakeet](https://huggingface.co/collections/nvidia/parakeet-asr-659711f49d1469e51546e021) - NVIDIAが提供するオープンソース話音認識モデルのファミリー。ストリーミングおよび多言語バリアントを含む。#opensource

### 音楽

- [Harmonai](https://www.harmonai.org/) - 私たちのコミュニティが開発したオープンソース生成オーディオツール。誰もが音楽制作をよりアクセスしやすく、楽しく体験できるようにする。
- [Mubert](https://mubert.com/) - コンテンツクリエイター、ブランド、開発者向けのライセンスフリー音楽エコシステム。
- [MusicLM](https://google-research.github.io/seanet/musiclm/examples/) - Google Researchが開発した、テキスト説明から高品質音楽を生成するモデル。
- [AudioCraft](https://audiocraft.metademolab.com/) - Metaが提供する生成オーディオ向けの統合コードベース。音楽にはMusicGen、音声にはAudioGenを含む。#opensource
- [Stable Audio](https://stability.ai/stable-audio) - Stable Audioは、Stability AIが開発した音楽およびサウンドエフェクト生成の最初の製品。
- [AIVA](https://www.aiva.ai/) - AIベースの音楽生成アシスタント。250以上のスタイルから選択可能。
- [Suno AI](https://suno.com/) - 誰もが素晴らしい音楽を作れる。楽器は不要。ただ、想像力があればよい。あなたの心から音楽へ。
- [Udio](https://www.udio.com/) - 世界と共有できる音楽の発見・創造・共有を可能にする。

## その他

- [PromptBase](https://promptbase.com/) - DALL·E、GPT-3、Midjour-ney、Stable Diffusion向けの質の高いプロンプトを購入・販売できるマーケットプレイス。
- [This Image Does Not Exist](https://thisimagedoesnotexist.com/) - 画像が人間によって作られたか、AIによって作られたかを判断できる能力をテスト。
- [Have I Been Trained?](https://haveibeentrained.com/) - 人気AIアートモデルのトレーニングに使用されたかどうかを確認できるツール。
- [AI Dungeon](https://aidungeon.io/) - AIが物語を現実に変えるように、あなたが直接操作（そして主演）するテキストベースアドベンチャーゲーム。
- [Clickable](https://www.clickable.so/) - AIを使って広告を数秒で生成。すべてのマーケティングチャネルに適した、美しくブランドに忠実で高変換率の広告。
- [Scale Spellbook](https://scale.com/genai-platform) - Scale Spellbookを使って大規模言語モデルアプリを構築・比較・デプロイ。
- [Scenario](https://www.scenario.com/) - AIで生成されたゲーム資産。
- [Teleprompter](https://github.com/danielgross/teleprompter) - あなたの会議に搭載された、AIによる音声認識と魅力的な引用提案を自動生成するデバイス内AI。
- [FinChat](https://finchat.io/) - AIを活用して、公開企業や投資家に関する質問に回答を生成するFinChat。
- [Morpher AI](https://morpher.com/ai) - Morpher AIは、どの市場にも適用可能なリアルタイム分析と洞察を提供。
- [Whimsical AI](https://whimsical.com/ai) - GPTを活用したマインドマップ、フローチャート、および視覚ツールで、アイデアの迅速な開発とプロセスの整理を実現
- [Selfies with Sama](https://selfies-with-sama.vost.ai) - 現実の億万長者と写真を撮る！

## 学習資料

- [Learn Prompting](https://learnprompting.org/) - 人工知能とのコミュニケーションについての無料オープンソースコース
- [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide) - プロンプトエンジニアリングのガイドとリソース
- [ChatGPT prompt engineering for developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) - イーサ・フルフォード（OpenAI）とアンダンド・ング（DeepLearning.AI）による短いコース
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - OpenAI APIの使用例とガイド
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) - 大規模言語モデルからより良い結果を得るための戦略と戦術
- [PromptPerfect](https://promptperfect.jina.ai/) - プロンプトエンジニアリング用ツール
- [Anthropic courses](https://github.com/anthropics/courses) - Anthropicの教育コース
- [Build a Large Language Model (From Scratch)](https://www.manning.com/books/build-a-large-language-model-from-scratch) - 自分で動作するLLMを構築するためのガイド、セバスチャン・ラシュカ著
- [Prompt Engineering for Vision Models](https://www.deeplearning.ai/short-courses/prompt-engineering-for-vision-models/) - 自然言語、境界ボックス、セグメンテーションマスク、座標点など、画像を用いたコンピュータビジョンモデルへのプロンプト設定についての無料DeepLearning.AI短いコース
- [Build a Reasoning Model (From Scratch)](https://www.manning.com/books/build-a-reasoning-model-from-scratch) - ゼロから動作する推論モデルを構築するためのガイド、セバスチャン・ラシュカ著
- [Build an AI Agent (From Scratch)](https://www.manning.com/books/build-an-ai-agent-from-scratch) - ツール、記憶、計画、マルチエージェントシステムを用いてAIエージェントを構築するための書籍
- [Build a DeepSeek Model (From Scratch)](https://www.manning.com/books/build-a-deepseek-model-from-scratch) - DeepSeekスタイルのLLMアーキテクチャ、トレーニング、ディストリル方法を実装するための書籍
- [AI Governance](https://www.manning.com/books/ai-governance) - 生成AIシステムにおける統制、リスク、適合性、セキュリティ、プライバシー、監視に関する書籍
- [AnimatedLLM](https://animatedllm.github.io/) - 大規模言語モデルがどのように動作するかを説明するインタラクティブな可視化。 [#opensource](https://github.com/kasnerz/animated-llm)
- [Transformer Explainer](https://poloclub.github.io/transformer-explainer/) - トランスフォーマーベースのLLMがどのように動作するかをインタラクティブに可視化。ブラウザ内でライブGPT-2モデルを実行。 [#opensource](https://github.com/poloclub/transformer-explainer)

## その他のリスト

- [Tools and Resources for AI Art](https://pharmapsychotic.com/tools.html) - [@pharmapsychotic](https://twitter.com/pharmapsychotic) が提供する、生成AI向けのGoogle Colabノートブックの大きなリスト。
- [The Generative AI Application Landscape](https://twitter.com/sonyatweetybird/status/1584580362339962880) - 生成AIエコシステムをマップした情報図解。 [Sonya Huang](https://twitter.com/sonyatweetybird) によるセクオイーカパルのもの。
- [Startups - @builtwithgenai](https://airtable.com/shr6nfE9FOHp17IjG/tblL3ekHZfkm3p6YT) - [@builtwithgenai](https://twitter.com/builtwithgenai) によるAirtableリスト。
- [The Generative AI Index](https://airtable.com/shrH4REIgddv8SzUo/tbl5dsXdD1P859QLO) - [Scale Venture Partners](https://www.scalevp.com/generative-ai) によるAirtableリスト。
- [Generative AI for Games](https://twitter.com/gwertz/status/1593268767269670912) - ゲーム向け生成AI開発企業の市場マップ。 [a16z](https://a16z.com/) によるもの。
- [Generative Deep Art](https://github.com/filipecalegario/awesome-generative-ai) - 芸術用途向けの生成ディープラーニングツール、作品、モデルなど、厳選されたリスト。 [@filipecalegario](https://github.com/filipecalegario/)
- [GPT-3 Demo](https://gpt3demo.com/) - GPT-3の例、デモ、アプリ、展示、NLP用途事例を紹介
- [GPT-4 Demo](https://gpt4demo.com/) - GPT-4アプリケーションと用途事例
- [The Generative AI Landscape](https://github.com/ai-collection/ai-collection) - 素晴らしい生成AIアプリケーションのコレクション
- [Molecular design](https://github.com/AspirinCode/papers-for-molecular-design-using-DL) - 生成AIと深層学習を用いた分子設計のリスト
- [Open LLMs](https://github.com/eugeneyan/open-llms) - 商業利用可能なオープンLLMのリスト
- [Awesome Music AI](https://github.com/steven2358/awesome-music-ai) - AIによる音楽の作成・生成・分析に使えるツールの厳選リスト
- [Awesome AI Market Maps](https://github.com/joylarkin/Awesome-AI-Market-Maps) - 2026年、2025年、2024年のAI市場マップを厳選したリスト。 [Joy Larkin](https://twitter.com/joy)
- [Awesome RAG Production](https://github.com/Yigtwxx/Awesome-RAG-Production) - プロダクションRAGシステムの構築に使えるツールおよびリソースの厳選リスト

### ChatGPT関連リスト

- [Awesome ChatGPT](https://github.com/humanloop/awesome-chatgpt) - ChatGPTおよびGPT-3向けの素晴らしいツール、デモ、ドキュメントを厳選したリスト。 [@jordn](https://github.com/jordn).
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) - ChatGPTモデルと併用できるプロンプトの例を収録したコレクション
- [FlowGPT](https://flowgpt.com/) - 最適なプロンプトでワークフローを強化します
- [ChatGPT Prompts for Data Science](https://github.com/travistangvh/ChatGPT-Data-Science-Prompts) - ChatGPT用の有用なデータサイエンスプロンプトのリポジトリ
- [Awesome ChatGPT](https://github.com/sindresorhus/awesome-chatgpt) - ChatGPT用のもう一つの素晴らしいリスト
