---
title: "Awesome AI in Finance"
description: "AI in Financeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-georgezouq-awesome-ai-in-finance-readme-md"
---

# Awesome AI in Finance

AI in Financeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [エージェント](#agents)
- [LLM](#llms)
- [スキル](#skills)
- [MCPサーバー](#mcp-servers)
  - [市場データ](#market-data)
  - [取引執行](#trading-execution)
  - [調査・分析](#research--analysis)
- [論文](#papers)
- [コース・書籍](#courses--books)
- [戦略・研究](#strategies--research)
  - [時系列データ](#time-series-data)
  - [ポートフォリオ管理](#portfolio-management)
  - [高頻度取引](#high-frequency-trading)
  - [イベント駆動](#event-drive)
  - [暗号資産戦略](#crypto-currencies-strategies)
  - [テクニカル分析](#technical-analysis)
  - [宝くじ・ギャンブル](#lottery--gamble)
  - [裁定取引](#arbitrage)
- [データソース](#data-sources)
- [研究ツール](#research-tools)
- [取引システム](#trading-system)
- [テクニカル分析ライブラリ](#ta-lib)
- [取引所API](#exchange-api)
- [記事](#articles)
- [その他](#others)

## エージェント

- 🌟🌟 [nofx](https://github.com/NoFxAiOS/nofx) - マルチエクスチェンジのAI取引プラットフォームで、マルチAI競争による自己進化とリアルタイムダッシュボードを備える
- [TradingAgents](https://github.com/TauricResearch/TradingAgents) - マルチエージェントLLM金融取引フレームワーク
- 🌟 [FinRobot](https://github.com/AI4Finance-Foundation/FinRobot) - LLMを用いた金融分析用オープンソースAIエージェントプラットフォーム
- [AgentFund](https://github.com/RioBot-Grind/agentfund) - Baseブロックチェーン上でマイルストーンベースのエスクローを用いたAIエージェント向けデジタルコラボレーションプラットフォーム
- 🌟 [ATLAS](https://github.com/chrisworsey55/atlas-gic) - 25エージェントによる自己改善AI取引システム。Karpathyスタイルの自動調査、ダーウィン選択、自律エージェント生成、マルチコートメタ重み付けを備える
- [InvicTrade](https://invictrade.com) - 74％の過去の勝率を有するAI取引シグナル。伝説的な投資家が採用した戦略を多モデルAIインテリジェンスで統合
- [OpenFinClaw](https://github.com/cryptoSUN2049/openFinclaw) - AIネイティブな一人ハーフファンドプラットフォーム。専門エージェントチームが自然言語を60秒以内に定量戦略に変換。米国/香港/中国/暗号資産市場対応、自己進化戦略パイプライン、コミュニティリーダボードを備える
- [Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) - 戦略生成、バックテスト、ポートフォリオ分析、研究洞察を提供するマルチエージェント金融研究ワークスペース
- [TraceArena](https://github.com/tonyhyworld/TraceArena) - 証拠連携行動、決定論的シミュレーション決済、再現可能なリプレイを備えたオープンソースランタイム。ブローカー接続なし
- [ProfitPlay Agent Arena](https://github.com/jarvismaximum-hue/profitplay-starter) - AIエージェントがリアルタイムでBTC/ETH/SOL予測ゲームに競い合うオープン予測市場アリーナ。PythonおよびNode.js SDK、9市場、REST＋WebSocket API
- [oracle3](https://github.com/YichengYang-Ethan/oracle3) - Kalshi、Polymarket、Solana DFlowでの予測市場取引エージェント。Wang変換価格とアリバイト戦略を備える
- [stock-analysis](https://github.com/AdvancingTitans/stock-analysis) - AIエージェント向け証拠駆動市場リカップCLI。A/HK/US株、ファンド、ポートフォリオに対してMarkdownレポートとJSON証拠パックを生成
- [Cod3x](https://www.cod3x.org/) - コードなしでマルチエージェント取引戦略を構築できるプラットフォーム。チャート描画エージェント、イベント駆動自動化、完全な実行透明性を備える

- [Pineify](https://pineify.app/) - AI支援取引ツールキット。Pine Script、MQL5、cTrader向けコードエージェントを含み、金融研究、戦略最適化、バックテスト分析を提供

## LLM

- 🌟🌟🌟 [Nof1](https://thenof1.com/) - AIの投資能力を測るベンチマーク。各モデルは実際の市場で、同じプロンプトと入力データを用いて$10,000の現実の資金を獲得
- 🌟 [AI Hedge Fund](https://github.com/virattt/ai-hedge-fund) - AIを用いて取引決定を行うことの可能性を検討する
- 🌟🌟 [MarS](https://github.com/microsoft/MarS) - 生成型基礎モデルを用いた金融市場シミュレーションエンジン
- 🌟🌟 [Financial Statement Analysis with Large Language Models](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4835311) - GPT-4は、将来の収益変動の予測、有用なナラティブインサイトの生成、さらにはシャープ比およびアルファが優れた取引戦略を生み出し、LLMが金融意思決定において潜在的な中心的な役割を果たすことを示している
- [FinRpt](https://arxiv.org/abs/2511.07322) - 株式調査レポート生成用データセット、評価システム、LLMベースマルチエージェントフレームワーク
- [PIXIU](https://github.com/chancefocus/PIXIU) - 金融大規模言語モデル、136Kのインストラクションサンプルデータセット、包括的な評価ベンチマークを提供するオープンソースリソース
- [FinGPT](https://github.com/AI4Finance-Foundation/FinGPT) - LLMと金融分野におけるNLPに興味を持つすべての人々のためのプレイグラウンドを提供
- [MACD + RSI + ADX Strategy (ChatGPT-powered) by TradeSmart](https://www.tradingview.com/script/GxkUyJKW-MACD-RSI-ADX-Strategy-ChatGPT-powered-by-TradeSmart/ ) - チャットGPTにトレードに最も人気のある指標を尋ね、その結果をすべて採用した
- [A ChatGPT trading algorithm delivered 500% returns in stock market. My breakdown on what this means for hedge funds and retail investors](https://www.reddit.com/r/ChatGPT/comments/13duech/a_chatgpt_trading_algorithm_delivered_500_returns/)
- [Use chatgpt to adjust strategy parameters](https://twitter.com/0xUnicorn/status/1663413848593031170)
- [Hands-on LLMs: Train and Deploy a Real-time Financial Advisor](https://github.com/iusztinpaul/hands-on-llms) - Falcon 7BとCometLLMを用いて、リアルタイムの金融アドバイザーチャットボットを訓練・デプロイ
- [ChatGPT Strategy by OctoBot](https://blog.octobot.online/trading-using-chat-gpt) - 技術指標に基づいて、どの暗号資産をトレードすべきかをChatGPTで決定
- [LLMs Meet Finance](https://arxiv.org/abs/2504.13125) - Open FinLLM Leaderboardにおける金融タスクにQwen2.5およびDeepSeek-R1を適応させる3段階のファインチューニングパイプライン（SFT → DPO → シンセティックデータRL）と、金融分野におけるタスク間の移行およびデータスケーリング法に関する発見
- [MMESGBench](https://github.com/Zhanglei1103/MMESGBench) - 現実世界のESG報告書の理解および複雑な推論を評価する最初のマルチモーダルベンチマーク；45ドキュメントにわたる933の専門家が検証した質問・回答ペア（テキスト／テーブル／チャートの証拠を含む）および1ページ、複数ページ、回答できない質問（ACM MM 2025）
- [ESGenius](https://github.com/ANGEL-NTU/ESGenius) - 環境・社会・ガバナンス（ESG）および持続可能性に関するLLMの評価を目的とした最初のベンチマーク；1,136の専門家が検証した多選問題と、カスタムソースコーパスを含む、50のLLMをゼロショットおよびRAGで評価（EMNLP 2025）

## スキル

- [XVARY Stock Research](https://github.com/xvary-research/claude-code-stock-analysis-skill) — 投資調査・分析・記録・コンプライアンスを支援するエージェントスキルです。 関連コード: `/analyze`、`/score`、`/compare`。
- [CFA Institute Bias Detection](https://github.com/CFA-Institute-RPC/skills/tree/main/skills/bias-detection) - 投資分析におけるバイアス検出用のClaudeスキル。Apache 2.0。
- [Ethical Capital Skills](https://github.com/ethicalcapital/skills) - 投資調査、スクリーニング、コンプライアンス、マーケティングプロセスに適用可能なClaudeスキル。
- [Trading Ledger](https://github.com/cruisekkk/trading-ledger) - トレードジャーナル作成用のClaudeスキル：ユーザーのNotionデータベースに登録する入場時のテーマ、計画、感情を記録し、週次レビューで決定の評価を行う（MIT）。

## MCPサーバー

AIアシスタント（Claude、Cursor、VS Code Copilotなど）を金融データや取引APIへ直接接続する、オープンソースの[Model Context Protocol](https://modelcontextprotocol.io/)サーバーです。

### 市場データ

- [atilaahmettaner/tradingview-mcp](https://github.com/atilaahmettaner/tradingview-mcp) - 株式、暗号資産、外為、ファイナンスの分野におけるリアルタイム市場データ、技術分析、スクリーニング、バックテストを提供する30以上のツール。
- [dgunning/edgartools](https://github.com/dgunning/edgartools) - SEC EDGARの11のMCPツール——すべての提出書類（10-K、10-Q、8-K、S-1）に対応、APIキー不要；1,800以上のSmitheryインストール。
- [financial-datasets/mcp-server](https://github.com/financial-datasets/mcp-server) - 収益計算書、貸借対照表、キャッシュフロー、株価、市場ニュースへの構造化アクセスを提供するFinancial Datasets API。
- [guangxiangdebizi/FinanceMCP](https://github.com/guangxiangdebizi/FinanceMCP) - Tushare（中国A株、ファンド、債券、マクロ）とBinance（暗号資産）を統合し、LLMの金融データアクセスを実現。
- [TickDB/tickdb-unified-realtime-marketdata-api](https://github.com/TickDB/tickdb-unified-realtime-marketdata-api) - 外為、米国／香港／中国株式、暗号資産における統合されたリアルタイムおよび歴史データを提供する13のツール。
- [massive-com/mcp_massive](https://github.com/massive-com/mcp_massive) - Polygon.ioのプロフェッショナルクラスのリアルタイムおよび歴史データ（株式、外為、暗号資産、オプション）。
- [Alex2Yang97/yahoo-finance-mcp](https://github.com/Alex2Yang97/yahoo-finance-mcp) - Yahoo Finance MCP：株価、財務データ、オプションチェーン、市場ニュース。
- [zwldarren/akshare-one-mcp](https://github.com/zwldarren/akshare-one-mcp) - 中国株式市場向けのAKShare API：過去価格、リアルタイム価格、財務報告、ニュース。
- [alphavantage/alpha_vantage_mcp](https://github.com/alphavantage/alpha_vantage_mcp) - **公式** Alpha Vantage MCPサーバー：株式、外為、暗号資産、オプション、ETFのリアルタイムおよび歴史データ。
- [imbenrabi/Financial-Modeling-Prep-MCP-Server](https://github.com/imbenrabi/Financial-Modeling-Prep-MCP-Server) - 250以上のFinancial Modeling Prep APIツール：財務データ、技術指標、内部取引、SEC提出書類、業績発表、暗号資産。
- [kukapay/crypto-indicators-mcp](https://github.com/kukapay/crypto-indicators-mcp) - クリプトコインの技術分析指標（MACD、RSI、ボリンジャーバンド）をCCXT経由でAIトレーディングエージェントに提供
- [stefanoamorelli/fred-mcp-server](https://github.com/stefanoamorelli/fred-mcp-server) - 米国連邦準備制度経済データ（FRED）MCPサーバー：80万以上の経済指標時系列にアクセス

### 取引執行

- [alpacahq/alpaca-mcp-server](https://github.com/alpacahq/alpaca-mcp-server) - **公式** アルパカMCPサーバー：米国株式、ETF、オプション、および仮想通貨に対する自然言語によるトレード
- [krakenfx/kraken-cli](https://github.com/krakenfx/kraken-cli) - **公式** クラケンAIネイティブCLI：スポット取引、ポートフォリオ管理、市場データに内蔵されたMCPサポート
- [ariadng/metatrader-mcp-server](https://github.com/ariadng/metatrader-mcp-server) - メタトレーダー5へのMCPブリッジ：外国為替およびファイナンス市場における自然言語による取引実行とリアルタイムポジション追跡
- [mcpdotdirect/evm-mcp-server](https://github.com/mcpdotdirect/evm-mcp-server) - 60以上のEVM対応ネットワーク向け22ツールMCPサーバー：トークンバランス、スマートコントラクト、DeFi操作
- [okx/agent-trade-kit](https://github.com/okx/agent-trade-kit) - **公式** OKX MCPサーバー：スポット、永続取引、およびファイナンス取引のAIエージェントによるトレードと完全な注文管理
- [rcontesti/IB_MCP](https://github.com/rcontesti/IB_MCP) - インタラクティブ・ブローカーTWS/Gateway MCPサーバー：150市場にわたるリアルタイムトレードおよび市場アクセス
- [QuantConnect/mcp-server](https://github.com/QuantConnect/mcp-server) - **公式** クアンタコンネクトMCPサーバー：Pythonによるトレード戦略の作成、クラウドバックテストの実行、リアルタイムアルゴリズムのデプロイ
- [koreainvestment/open-trading-api](https://github.com/koreainvestment/open-trading-api) - **公式** 韓国投資・証券オープンAPI：MCPおよびLLM統合による韓国株式市場トレード

### 調査・分析

- [mnemox-ai/tradememory-protocol](https://github.com/mnemox-ai/tradememory-protocol) - オープンソースメモリMCP：AIトレーディングエージェント向け3層アーキテクチャ（原始メモリ→パターン反射→戦略進化）
- [wshobson/maverick-mcp](https://github.com/wshobson/maverick-mcp) - 個人用株式分析MCPサーバー：技術指標、業績カレンダー、オプションフロー、および内部取引
- [stefanoamorelli/sec-edgar-mcp](https://github.com/stefanoamorelli/sec-edgar-mcp) - AIアシスタント向け直接SEC EDG及アクセス：10-K、10-Q、8-K提出書類および内部取引データ

## 論文

- [The Theory of Speculation L. Bachelier, 1900](http://www.radio.goldseek.com/bachelier-thesis-theory-of-speculation-en.pdf) - 株式市場の動きを決定する影響要因は
- [Brownian Motion in the Stock Market Osborne, 1959](http://m.e-m-h.org/Osbo59.pdf) - 普通株式価格は統計的均衡における決定の集合と見なせる
- [An Investigation into the Use of Reinforcement Learning Techniques within the Algorithmic Trading Domain, 2015](http://www.doc.ic.ac.uk/teaching/distinguished-projects/2015/j.cumming.pdf)
- [A Deep Reinforcement Learning Framework for the Financial Portfolio Management Problem](https://arxiv.org/pdf/1706.10059.pdf)
- [Reinforcement Learning for Trading, 1994](http://papers.nips.cc/paper/1551-reinforcement-learning-for-trading.pdf)
- [Dragon-Kings, Black Swans and the Prediction of Crises Didier Sornette](https://arxiv.org/pdf/0907.4290.pdf) - 広範な状況下における多様なシステムにおけるイベントサイズ分布におけるパワーロール
- [Financial Trading as a Game: A Deep Reinforcement Learning Approach](https://arxiv.org/pdf/1807.02787.pdf) - 深層強化学習は、このようなトレードエージェントの端末までまで学習を行うためのフレームワークを提供する
- [Machine Learning for Trading](https://cims.nyu.edu/~ritter/ritter2017machine.pdf) - 報酬関数の適切な選択により、強化学習技術はリスク回避ケースを成功裏に処理できる
- [Ten Financial Applications of Machine Learning, 2018](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3197726) - スライドではいくつかの重要な金融MLアプリケーションが紹介されている
- [FinRL: A Deep Reinforcement Learning Library for Automated Stock Trading in Quantitative Finance, 2020](https://arxiv.org/abs/2011.09607) - DRLライブラリFinRLを紹介し、初心者に定量金融への理解を深め、自らの株式トレード戦略を開発できるようにする
- [Deep Reinforcement Learning for Automated Stock Trading: An Ensemble Strategy, 2020](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3690996) - 深層強化学習を用いたアンサンブル戦略を提案し、投資リターンを最大化することで株式取引戦略を学習する。

## コース・書籍・ブログ

- 🌟 [QuantResearch](https://github.com/letianzj/QuantResearch) - 金融AI・定量分析を学ぶコース、書籍、実践資料です。 [参照](https://letianzj.github.io/)
- [NYU: Overview of Advanced Methods of Reinforcement Learning in Finance](https://www.coursera.org/learn/advanced-methods-reinforcement-learning-finance/home/welcome)
- [Udacity: Artificial Intelligence for Trading](https://www.udacity.com/course/ai-for-trading--nd880)
- [AI in Finance](https://cfte.education/) - フィンテックオンライン学習。
- [The Automation Ahead](https://github.com/CFA-Institute-RPC/The-Automation-Ahead) - CFAインスティテートが提供する生成AIを用いた投資ワークフローの例。
- [Advanced-Deep-Trading](https://github.com/Rachnog/Advanced-Deep-Trading) - 『金融機械学習の進展』書籍に基づく実験。
- [Advances in Financial Machine Learning](https://www.amazon.com/Advances-Financial-Machine-Learning-Marcos-ebook/dp/B079KLDW21/ref=sr_1_1?s=books&ie=UTF8&qid=1541717436&sr=1-1) - 実際の投資問題を解決するための高度な機械学習ソリューションの活用。
- [Build Financial Software with Generative AI](https://www.manning.com/books/build-financial-software-with-generative-ai?ar=false&lpse=B&) - ChatGPTやCopilotといった生成AIツールを用いて、金融ソフトウェアを実際に構築する方法についての書籍。
- [Financial AI in Practice](https://www.manning.com/books/financial-ai-in-practice) - 規制に適合した利益をもたらす金融アプリケーションの開発についての書籍。
- [Investing for Programmers](https://www.manning.com/books/investing-for-programmers) - Pythonと生成AIを用いて、ポートフォリオの最適化、市場分析、データ駆動型投資決定を行う方法についての書籍。
- [Mastering Python for Finance](https://github.com/jamesmawm/mastering-python-for-finance-second-edition) - 『マスタリング・Python・フォーリン・セカンド・エディション』のソースコード。
- [MLSys-NYU-2022](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - NYU Tandonにおける2022年の金融機械学習コースのスライド、スクリプト、資料。
- [Train and Deploy a Serverless API to predict crypto prices](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - このチュートリアルでは、あなたが富を築くMLシステムを構築するわけではありません。しかし、MLOpsフレームワークとツールをマスターし、大量の実験を組み合わせることで、その道へ進むことができるようになります。
- [KeepRule](https://keeprule.com) - バフェット、ムンガー、ダリオなど26の偉大な投資家から学んだAIを活用した投資ディスクリンプラットフォーム。

## 戦略・研究

### 時系列データ

価格・出来高をテクニカル分析指標で処理する資料・実装です。

- 🌟🌟 [stockpredictionai](https://github.com/borisbanushev/stockpredictionai) - 株価の動向を予測するための完全なプロセス。
- 🌟 [Personae](https://github.com/Ceruleanacg/Personae) - 定量取引に用いる深層強化学習と監督学習の環境を実装。
- 🌟 [Ensemble-Strategy](https://github.com/AI4Finance-LLC/Deep-Reinforcement-Learning-for-Automated-Stock-Trading-Ensemble-Strategy-ICAIF-2020) - 自動株式取引に用いる深層強化学習。
- [FinRL](https://github.com/AI4Finance-LLC/FinRL-Library) - 定量金融における自動株式取引に用いる深層強化学習ライブラリ。
- [AutomatedStockTrading-DeepQ-Learning](https://github.com/sachink2010/AutomatedStockTrading-DeepQ-Learning) - 自動取引ロボットとしての深層Q学習強化学習エージェントモデルを構築。
- [tf_deep_rl_trader](https://github.com/miroblog/tf_deep_rl_trader) - 取引環境(OpenAI Gym) + PPO(TensorForce)。
- [trading-gym](https://github.com/6-Billionaires/trading-gym) - 短期取引自体のエピソードを用いてトレーニングする取引エージェント。
- [trading-rl](https://github.com/Kostis-S-Z/trading-rl) - 価格トレーリングを用いた金融取引における深層強化学習。
- [deep_rl_trader](https://github.com/miroblog/deep_rl_trader) - トレーディング環境(OpenAI Gym) + DDQN (Keras-RL)。
- [Quantitative-Trading](https://github.com/Ceruleanacg/Quantitative-Trading) - 定量トレードを実装する論文とコード。
- [gym-trading](https://github.com/hackthemarket/gym-trading) - 強化学習アルゴリズムによるトレードモデルの環境。
- [zenbrain](https://github.com/carlos8f/zenbrain) - マシンラーニングボット向けのフレームワーク。
- [DeepLearningNotes](https://github.com/AlphaSmartDog/DeepLearningNotes) - 定量分析におけるマシンラーニング。
- [stock_market_reinforcement_learning](https://github.com/kh-kim/stock_market_reinforcement_learning) - Kerasを用いた深層強化学習による株価トレーディングOpenAI Gym環境。
- [Chaos Genius](https://github.com/chaos-genius/chaos_genius) - 異常値／異常検出および原因分析にマシンラーニングを活用した分析エンジン。
- [mlforecast](https://github.com/Nixtla/mlforecast) - スケーラブルなマシンラーニングベースの時系列予測。
- [patternity](https://github.com/quantium-ai/patternity) - 株価予測を目的とした決定論的アルゴリズム、過去データにおけるパターン認識に焦点。
- [Quantium Research](https://github.com/quantium-ai/research) - 珍しい定量手法を探索する研究実験。

### ポートフォリオ管理

- [Deep-Reinforcement-Stock-Trading](https://github.com/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading) - ポートフォリオ管理向け軽量な深層強化学習フレームワーク。
- [qtrader](https://github.com/filangel/qtrader) - ポートフォリオ管理における強化学習。
- [PGPortfolio](https://github.com/ZhengyaoJiang/PGPortfolio) - 金融ポートフォリオ管理問題に対する深層強化学習フレームワーク。
- [DeepDow](https://github.com/jankrepl/deepdow) - 深層学習を用いたポートフォリオ最適化。
- [ml-quant-trading](https://github.com/initial-d/ml-quant-trading) - マスク認識多因子モデル、MLベースライン、ポートフォリオ最適化、ベクトル化バックテストに向けたPyTorch研究スタック。
- [skfolio](https://github.com/skfolio/skfolio) - scikit-learnをベースにしたポートフォリオ最適化用Pythonライブラリ。

### 高頻度取引

- [High-Frequency-Trading-Model-with-IB](https://github.com/jamesmawm/High-Frequency-Trading-Model-with-IB) - Interactive Brokers APIを用いたペアトレードと平均戻りを活用したハイフリーファイティングモデル。
- 🌟 [SGX-Full-OrderBook-Tick-Data-Trading-Strategy](https://github.com/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy) - フルオーダーボックデータを用いたデータサイエンスアプローチ（マシンラーニング）によるハイフリーファイティング戦略のソリューション。
- [HFT_Bitcoin](https://github.com/ghgr/HFT_Bitcoin) - ビットコイン取引所におけるハイフリーファイティングの分析。

### イベント駆動

- 🌟🌟 [stockpredictionai](https://github.com/borisbanushev/stockpredictionai) - 株価動向予測の完全プロセス。
- 🌟 [trump2cash](https://github.com/maxbbraun/trump2cash) - トランプのツイートをもとにした株価取引ロボット

### 暗号資産戦略

- [LSTM-Crypto-Price-Prediction](https://github.com/SC4RECOIN/LSTM-Crypto-Price-Prediction) - LSTM-RNNを用いた暗号通貨市場の価格動向予測をもとにした取引
- [tforce_btc_trader](https://github.com/lefnire/tforce_btc_trader) - TensorForce Bitcoin取引ロボット
- [Tensorflow-NeuroEvolution-Trading-Bot](https://github.com/SC4RECOIN/Tensorflow-NeuroEvolution-Trading-Bot) - 暗号資産の取引と遺伝的進化を繰り返す集団モデル
- [gekkoga](https://github.com/gekkowarez/gekkoga) - Gekkoを用いた取引戦略最適化の遺伝アルゴリズム
- [Gekko_ANN_Strategies](https://github.com/markchen8717/Gekko_ANN_Strategies) - Gekko取引ロボット用の人工神経ネットワーク（ANN）戦略
- [gekko-neuralnet](https://github.com/zschro/gekko-neuralnet) - Gekko用の神経ネットワーク戦略
- [bitcoin_prediction](https://github.com/llSourcell/bitcoin_prediction) - YouTubeでシラージ・ラバルが発表した「ビットコイン予測」のコード
- [DeepAlpha](https://github.com/stefanoviana/deepalpha) - XGBoost、LightGBM、CatBoostの3モデルMLアンサンブルによるAI駆動型暗号資産取引ロボット（CCXTを用いた12取引所、ウォーキングフォワードで検証）

### テクニカル分析

- [QTradeX](https://github.com/squidKid-deluxe/QTradeX-Algo-Trading-SDK) - アルゴリズム取引ロボットの設計・バックテスト・最適化・デプロイに用いる強力で柔軟なPythonフレームワーク
- [quant-trading](https://github.com/je-suis-tm/quant-trading) - Pythonによる定量的取引戦略
- [Gekko-Bot-Resources](https://github.com/cloggy45/Gekko-Bot-Resources) - Gekkoロボットのリソース
- [gekko_tools](https://github.com/tommiehansen/gekko_tools) - Gek-ko戦略、ツールなど
- [gekko RSI_WR](https://github.com/zzmike76/gekko) - Gekko RSI_WR戦略
- [gekko HL](https://github.com/mounirlabaied/gekko-strat-hl) - 下落ピークを計算し、取引を行う
- [EthTradingAlgorithm](https://github.com/Philipid3s/EthTradingAlgorithm) - Python 3.5とZipLineライブラリを用いたイーサリアム取引アルゴリズム
- [gekko_trading_stuff](https://github.com/thegamecat/gekko-trading-stuff) - 素晴らしい暗号資産取引プラットフォーム
- [forex.analytics](https://github.com/mkmarek/forex.analytics) - 遺伝アルゴリズムを用いたOHLCデータセット上の技術分析を行うNode.jsネイティブライブラリ
- [Bitcoin_MACD_Strategy](https://github.com/VermeirJellen/Bitcoin_MACD_Strategy) - ビットコインMACDクロスオーバー取引戦略のバックテスト
- [crypto-signal](https://github.com/CryptoSignal/crypto-signal) - Bittrex、Binance、GDAXなどへの自動暗号資産取引および技術分析（TA）ロボット
- [Gekko-Strategies](https://github.com/xFFFFF/Gekko-Strategies) - gekko取引ボット用の戦略とバックテスト結果およびいくつかの便利なツール
- [gekko-gannswing](https://github.com/johndoe75/gekko-gannswing) - ギャンのスウィングトレード戦略（Gekko取引ボット用）
- [Chartscout](https://chartscout.io) - パターン認識アルゴリズムを用いたリアルタイムの暗号資産チャートパターン検出と自動アラート
* [MarginSafe.ai](https://marginsafe.ai) - 内在価値とウィックオフタイミングに特化したAI株価分析プラットフォーム
- [Wickra](https://github.com/wickra-lib/wickra) - OHLCデータ上で500以上の技術分析指標をネイティブライブラリで計算。ストリーミング優先。Rustコア＋Python、Node.js、WASMおよびC ABI（C/C++/C#/Go/Java/R）バインディング

### 宝くじ・ギャンブル

- [LotteryPredict](https://github.com/chengstone/LotteryPredict) - 確率的な予測問題へ機械学習を適用する実装です。

### 裁定取引

- [ArbitrageBot](https://github.com/BatuhanUsluel/ArbitrageBot) - ビットテックスおよびポロニエックスでの運用中のアリバイトボット
- [r2](https://github.com/bitrinjani/r2) - Node.js + TypeScriptで構成された自動アリバイト取引システム
- [cryptocurrency-arbitrage](https://github.com/manu354/cryptocurrency-arbitrage) - 暗号資産のアリバイト機会計算ツール。800以上の通貨と50の市場を対象
- [bitcoin-arbitrage](https://github.com/maxme/bitcoin-arbitrage) - ビットコインアリバイト機会検出器
- [blackbird](https://github.com/butor/blackbird) - 長/短の市場中立戦略

## データソース

#### 伝統的市場

- 🌟 [Quandl](https://www.quandl.com/tools/api) - 数百の出版社から無料APIで数百万の金融・経済データを取得
- [yahoo-finance](https://github.com/lukaszbanasiak/yahoo-finance) - Yahoo!ファイナンスから株価データを取得するPythonモジュール
- [Tushare](https://github.com/waditu/tushare) - ツーシャーは中国株の歴史データをスクレイピングするためのユーティリティ
- [Congressional Stock Brain](https://congressionalstockbrain.com) - 米国株価規制情報の重要度をAIで評価する無料ツール。委員会の重み付け、タイミング分析、537名の情報が追跡
- [Financial Data](https://financialdata.net/) - 株式市場および金融データAPI
- [FinanceKit MCP](https://github.com/vdalhambra/financekit-mcp) - 株価、技術分析、暗号資産データ、リスクメトリクス、ポートフォリオ分析を提供するMCPサーバー。基本データにはAPIキー不要
- [Tapetide](https://tapetide.com) - インド市場データAPIおよびNSE/BSE株式、金融データ、スクリーニング、機関取引のためのMCPサーバー
- [FXMacroData](https://fxmacrodata.com) - 中央銀行発表、政策金利、インフレ、雇用、GDP、リリースカレンダー、18通貨のMCPアクセスを含むマクロ経済および為替データAPI
- [StockAInsights](https://stockainsights.com) - SEC提出書類からAIによる抽出を用いた機関レベルの財務諸表API。XBRLではなく、国内および海外提出者（20-F、6-K、4及）をカバー。四半期および年度データを標準化
- [13F Insight](https://13finsight.com) - AIによる13F SEC提出書類トラッカー。ヘッジファンドおよび機関投資家のポートフォリオ変更をモニタリングし、スマートマネーの動きアラートと過去の保有比較を提供
- [ValueRay](https://www.valueray.com/api) - 株式およびETFに関する技術的、定量的および感情データ。リスクメトリクス、同業者パーセンタイル、市場状況シグナルを含む。AI/LLMエージェント向けに最適化されている。
- [BenchGecko](https://benchgecko.ai) - AI経済トレーキングプラットフォーム。市場キャップ、資金調達、AIバブル指数、企業評価、コンピュートサプライチェーンデータを提供。
- [FilingFirehose](https://filingfirehose.com) - SEC EDGAR JSON API。分類された8-K、アクティブな13D/Gタグ、ATM発行検出、ホストされたMCPアクセスを提供。

#### 暗号資産

- [BitBank.nz](https://bitbank.nz) - AIによる暗号資産の予測および予測API。70以上の暗号資産ペアに対して機械学習モデルを用いる。
- [CryptoInscriber](https://github.com/Optixal/CryptoInscriber) - リアルタイムの暗号資産取引履歴データブロッター。任意の暗号資産取引所からリアルタイムの歴史取引データをダウンロード可能。
- [CoinPulse](https://github.com/soutone/coinpulse-python) - 暗号資産ポートフォリオの追跡用Python SDK。リアルタイム価格、P/L計算、バックテスト、価格アラートを提供。無料プラン：1時間25リクエスト。
- [Gekko-Datasets](https://github.com/xFFFFF/Gekko-Datasets) - Gekko取引ボットデータセットのダンプ。SQLite形式の履歴ファイルをダウンロードして使用可能。
- [Frostbyte Crypto API](https://agent-gateway-kappa.vercel.app) - 無料のリアルタイム暗号資産価格データAPI。BTC、ETH、SOL、20以上のトークンをサポート。基本エンドポイントにはサインアップやAPIキー不要。価格、24時間変動、市場キャップ、取引量を含むJSONレスポンス。
- [CoinPaprika API](https://api.coinpaprika.com) - 無料の暗号資産市場データAPI。7,000以上のコインの価格、取引量、市場キャップ、OHLCVを提供。APIキー不要。AIエージェント統合用MCPサーバーを含む。
- [DexPaprika API](https://api.dexpaprika.com) - 無料のDEXおよびDeFiデータAPI — すべてのチェーンでリアルタイムのプールデータ、トークン価格、OHLCV、取引履歴を提供。APIキー不要、レート制限なし。AIエージェント統合用MCPサーバーを含む。
- [Philidor](https://docs.philidor.io/docs) - 9プロトコルおよび6チェーンにおける700以上のヴァルトのインスティチューショナルグレードDeFiリスクスコアリング。REST APIおよびMCPサーバー（Claude、Cursor、Windsurf）。決定論的0～10リスクスコア、階層（プライム／コア／エッジ）、ポートフォリオ分析、オラクルモニタリング。APIキー不要。
- [PreReason](https://www.prereason.com) - AIエージェント向けに最適化された事前分析された金融市場要約。BTCオンチェーン、マクロ（FEDのバランスシート、M2、Treasury利回り）、クロス資産相関をカバーする17要約。リターン状況分類、トレンドシグナル、信頼度スコアをマーカード形式で提供。
- [Satoshi API](https://github.com/Bortlesboat/bitcoin-api) - ビットコインの手数料インテリジェンスAPI。手数料見積もり、メモリプール分析、ブロックデータ、マイニング統計を含む108エンドポイント。自分でホスト可能、Apache 2.0ライセンス。
- [Sharpe](https://www.sharpe.ai/docs/free-api) - AIエージェントが利用可能な暗号資産市場インテリジェンスAPIおよびMCPサーバー。資金調達、デリバティブ、アリバード、ナラティブ、リストイン、ニュースをカバー。
- [TBD Predict](https://github.com/ego-protocol/tbd-vote-cli) - ソラナベースの意見予測市場。人間の意見を対象としたもので、エージェントCLIおよびAGENTS.md仕様によりAIエージェントが認証し、意見キャンペーンをリストアップし、JSON形式のコマンドでベットを下すことができる。

#### ニュースデータ

- [WorldMonitor](https://github.com/koala73/worldmonitor) - 市場分析に利用できるニュースデータソースです。

#### オルタナティブデータ

- [Adanos Market Sentiment API](https://api.adanos.org/docs/) - AI金融エージェント向けの市場感情API。Reddit、X/Twitter、ニュース、Polymarket予測市場をカバーし、ブズ、感情、トレンド、比較シグナルを提供。
- [Pizzint](https://www.pizzint.watch/) - ペンタゴンピザインデックス（PizzINT）は、ペンタゴン周辺のピザ屋での異常な活動をリアルタイムで可視化するツール。過去のデータから、夜間の高テンポ作業および報道の発生と一致するシグナルを強調。

#### 予測市場

- [Parsec API](https://docs.parsecapi.com) - Polymarket、Kalshi、Opinion、Limitless、PredictFunを含む各市場で標準化されたデータ、実行、リアルタイムストリームを統合する予測市場インフラ。AIエージェント取引用MCPサーバーを提供。無料プランが豊富。
- [PolyMind](https://polyminds.netlify.app/) - リアルタイムPolymarket取引アラート。複数AIによる分析（Groq、Claude、Gemini）を活用。ウェールベット、取引量急増、協調するウォレット、12種類のシグナルを追跡。無料プランあり。

## 研究ツール

- [DDScore](https://www.ddscore.ai/for-investor/) - プライベート企業資料に対するAI支援による初回調査。12の次元で構造化された0～100スコアと書面報告を生成し、関連する主張を現在の公開情報と照合。アナリストの判断をサポート。投資アドバイスや完全な調査の代替ではない。
- [Synthical](https://synthical.com) - AIによる協働環境（研究用）
- 🌟🌟 [TensorTrade](https://github.com/tensortrade-org/tensortrade) - 強化学習を活用した効率的な取引
- [ML-Quant](https://www.ml-quant.com/) - ArXiv（sanity）、SSRN、RePec、ジャーナル、ポッドキャスト、ビデオ、ブログから量的リソースを取得
- [JAQS](https://github.com/quantOS-org/JAQS) - オープンソースの量的戦略研究プラットフォーム
- [pyfolio](https://github.com/quantopian/pyfolio) - Pythonによるポートフォリオおよびリスク分析
- [alphalens](https://github.com/quantopian/alphalens) - 予測（アルファ）株式ファクターのパフォーマンス分析
- [empyrical](https://github.com/quantopian/empyrical) - 一般的な金融リスクおよびパフォーマンスメトリクス。Ziplineおよびpyfolioで使用
- [zvt](https://github.com/zvtvz/zvt) - ゼロベクトルトレーダー
- [CongressionalStockBrain](https://congressionalstockbrain.com) - 米国株式取引法（U.S. STOCK Act）の議会公表情報を取り込み、レジリエンスでスコアリングされたシグナルをレジリエンス投資家向けに変換するAIツール
- [WalletLens](https://walletlens.live) - マルチ資産ポートフォリオトラッカー。AIによる洞察、技術分析、リアルタイム価格、ローカル優先データストレージを備える
- [FN2](https://fn2.ai) - 投資家向けAI市場アナリティクス：パーソナライズされた毎日要約、深層株式調査、ウォッチリストおよび業績を監視するスケジュールされたエージェント。無料プランあり
- [WFGY](https://github.com/onestardao/WFGY) – Open source framework for debugging and stress testing LLM agents and RAG pipelines. Includes a 16 mode failure map and long-horizon stress tests that are useful for financial research agents.
- [ChainPulse](https://github.com/Bortlesboat/chainpulse) - AIによるビットコインネットワークインテリジェンスCLI。mempool、手数料、ブロック、マイニング分析に関する自然言語クエリに対応
- [CRNG](https://github.com/brotto/crng) - コンティンジェンシーRNG：実際の市場における肥満尾（K=5-220）およびボラティリティクラスタリングを考慮した乱数生成。実市場メトリクスの86％を再現（NumPyは14％）を達成。規制検知機能を備える
- [Chart Library](https://chartlibrary.io) - 視覚チャートパターン検索エンジン。スクリーンショットをアップロードまたはティッカー＋日付を入力して、過去の10個の類似チャートパターンを検索し、その次に何が起こったかを確認。2400万以上の埋め込み、19,000以上のシンボル、REST API＋MCPサーバー
- [Coinugget](https://coinugget.com) - 暗号通貨取引者のためのリアルタイムRSIシグナル、価格行動およびボリュームの急上昇ダッシュボード。無料で、登録不要
- [QuantLink](https://www.quantlink.ai) - AIによる米国株式調査ターミナル。SECの公表資料に基づく深層調査エージェント、基本および技術的株式フィルター、バックテスト、インスティチューショナル13F保有分析、内部取引（Form 及）活動、議会取引監視（STOCK Act公表）を含む。無料プランあり
- [NeuPortal](https://neuportal.ai) - AIによる予測責任実験室：すべての予測はイベント前でロックされ、ビットコインタイムスタンプ（OpenTimestamps）で記録され、予測市場でのBrierスコアで公開された予測と比較される

## 取引システム

For Back Test & Live trading

### 伝統的市場

**System**

- [the0](https://github.com/alexanderwanyoike/the0) - アルゴリズム取引ボット向けのセルフホスト型実行エンジン。Python、TypeScript、Rust、C++、C#、Scala、Haskellをサポート。各ボットは隔離されたコンテナ内で、スケジュールまたはストリーミング実行を行う
- 🌟🌟🌟 [OpenBB](https://github.com/OpenBB-finance/OpenBB) - AIによるオープンソース研究および分析ワークスペース
- 🌟🌟 [zipline](https://github.com/quantopian/zipline) - Pythonによるアルゴリズム取引ライブラリ
- 🌟 [TradingView](http://tradingview.com/) - リアルタイム情報と市場洞察を取得
- [rqalpha](https://github.com/ricequant/rqalpha) - 拡張可能で交換可能なPythonアルゴリズムバックテスト・トレードフレームワーク
- [backtrader](https://github.com/backtrader/backtrader) - トレード戦略用Pythonバックテストライブラリ
- [kungfu](https://github.com/taurusai/kungfu) - Kungfu Masterトレードシステム
- [finclaw](https://github.com/NeuZhou/finclaw) - AIネイティブな定量トレードエンジン（484アルファファクター、遺伝アルゴリズムによる戦略進化、ウォーキングフォワードバックテスト、ペーパーテスト）．A株、暗号資産、AIエージェント統合用MCPサーバーをサポート
- [lean](https://github.com/QuantConnect/Lean) - 戦略研究・バックテスト・リアルトレードを容易に実行できるアルゴリズムトレードエンジン

**Combine & Rebuild**

- [pylivetrader](https://github.com/alpacahq/pylivetrader) - Pythonによるリアルトレード実行ライブラリ（Ziplineインターフェース）
- [CoinMarketCapBacktesting](https://github.com/JimmyWuMadchester/CoinMarketCapBacktesting) - コイントレード戦略用バックテストフレームワーク

### 暗号資産

- [zenbot](https://github.com/DeviaVir/zenbot) - Node.jsとMongoDBを用いたコマンドライン暗号資産トレードボット
- [bot18](https://github.com/carlos8f/bot18) - Zenbotによるハイフリーケンス暗号資産トレードボット
- [magic8bot](https://github.com/magic8bot/magic8bot) - Node.jsとMongoDBを用いた暗号資産トレ連ボット
- [catalyst](https://github.com/enigmampc/catalyst) - Pythonで構成された暗号資産用アルゴリズムトレードライブラリ
- [QuantResearchDev](https://github.com/mounirlabaied/QuantResearchDev) - 定量研究開発者およびトレーダー向けオープンソースプロジェクト
- [MACD](https://github.com/sudoscripter/MACD) - Zenbot MACD自動トレードシステム
- [abu](https://github.com/bbfamily/abu) - Pythonベースの定量トレードシステム

#### プラグイン

- [CoinMarketCapBacktesting](https://github.com/JimmyWuMadchester/CoinMarketCapBacktesting) - コイントレード戦略用バックテストフレームワーク（btおよびQuantopian Zipline）のテスト
- [Gekko-BacktestTool](https://github.com/xFFFFF/Gekko-BacktestTool) - Gekkoトレードボットのバッチバックテスト、インポート、戦略パラメータ最適化

## テクニカル分析ライブラリ

- [pandas_talib](https://github.com/femtotrader/pandas_talib) - Python Pandasによる技術分析指標の実装
- [finta](https://github.com/peerchemist/finta) - Python-Pandasで実装された一般的な金融技術指標（70以上）
- [tulipnode](https://github.com/TulipCharts/tulipnode) - Tulip指標の公式Node.jsラッパー。100以上の技術分析オーバーレイおよび指標関数を提供
- [techan.js](https://github.com/andredumas/techan.js) - D3をベースにした可視化、技術分析およびチャート（キャンドルストック、OHLC、インジケーター）ライブラリ

## 取引所API

実市場で利用するためのAPI・実装です。

- [Trade It](https://docs.tradeit.app/mcp) - ロビンホード、Eトレード、シュワブ、ウェブール、パブリック、タスイトレード、コインベース、クラーケンなど、一般的なブローカーでの取引用MCP
- [IbPy](https://github.com/blampe/IbPy) - インタラクティブ・ブローカーズオンライン取引システム向けのPython API
- [HuobiFeeder](https://github.com/mmmaaaggg/HuobiFeeder) - HUOBIPRO取引所との接続により、ABAT取引プラットフォームのバックテスト分析およびリアルタイム取引に市場データ・歴史データを取得
- [ctpwrapper](https://github.com/nooperpudd/ctpwrapper) - 上海商品取引所CTP API
- [PENDAX](https://github.com/CompendiumFi/PENDAX-SDK) - FTX、FTXUS、OKX、バイビットなど、暗号資産取引所向けのトレーディング・データAPIおよびウェブソケット用JavaScript SDK

### フレームワーク

- [tf-quant-finance](https://github.com/google/tf-quant-finance) - 取引戦略の実装・検証を支援するフレームワークです。

### 可視化

- [playground](https://github.com/tensorflow/playground) - ニューラルネットワークを実験的に扱う
- [netron](https://github.com/lutzroeder/netron) - ディープラーニングおよびマシンラーニングモデルの可視化ツール
- [KLineChart](https://github.com/liihuu/KLineChart) - 高度にカスタマイズ可能なプロフェッショナルな軽量金融チャート

### Gym環境

- 🌟 [TradingGym](https://github.com/Yvictor/TradingGym) - 強化学習エージェントの訓練用トレーディングおよびバックテスト環境
- [TradzQAI](https://github.com/kkuette/TradzQAI) - 強化学習エージェント向けのトレーディング環境、バックテストおよび訓練
- [btgym](https://github.com/Kismuz/btgym) - スケーラブルでイベント駆動型であり、ディープラーニングに最適なバックテストライブラリ
- [TraderHarness](https://github.com/HephaestLab/TraderHarness) - LLMトレーディングエージェント向けの汚染に強いA株バックテスト環境。タイムポイントマスク、エンティティ／日付の匿名化、フィンガープリント再現、トラジェクト（SFT）エクスポートを備えている

## 記事

- [The-Economist](https://github.com/nailperry-zd/The-Economist) - ザ・エコノミスト
- [nyu-mlif-notes](https://github.com/wizardforcel/nyu-mlif-notes) - NYUの金融分野における機械学習ノート
- [Using LSTMs to Turn Feelings Into Trades](https://www.quantopian.com/posts/watch-our-webinar-buying-happiness-using-lstms-to-turn-feelings-into-trades-now?utm_source=forum&utm_medium=twitter&utm_campaign=sentiment-analysis)

## その他

- [zipline-tensorboard](https://github.com/jimgoo/zipline-tensorboard) - TensorBoardをジンズのダッシュボードとして利用
- [gekko-quasar-ui](https://github.com/H256/gekko-quasar-ui) - Quasarフレームワークを用いたgekko取引ボットのUIポート
- [Floom](https://github.com/FloomAI/Floom) - 開発者向けAIゲートウェイ兼マーケットプレイスで、製品へのAI機能統合を支援します。
- [LendTrain](https://www.lendtrain.com) - Claude Code向けのAIネイティブの住宅ローンリファインプラグイン。リアルタイムの機関価格、州別閉鎖費用、FHAストリーム/VA IRRRLの検出、規制適合性を提供。MCP（モデルコンテキストプロトコル）を用いてLLMとリアルタイムの住宅ローン価格を接続
- [Registry Broker](https://github.com/hashgraph-online/hashnet-mcp-js) - Virtuals Protocol、NANDA、MCPおよびその他の登録機関を対象としたAIエージェントインデックス。トレーディングエージェントの発見に利用
- [KeepRule](https://keeprule.com) - 26人の偉大な投資家（バフェット、ムンガー、ダリオを含む）の選ばれた原則に基づくAIによる投資ディスクリンを追跡するプラットフォーム。トレーダーが合理的な意思決定を維持するのを支援
- [Philidor](https://docs.philidor.io/docs) - AIアグエント向けDeFiリスクインフラ：MCPサーバーとREST APIによるヴァルトリスクスコア、ポートフォリオ分析、due diligence。APIキー不要。700以上のヴァルト、9プロトコル、6チェーン。
- [Hindsight](https://hindsight.vectorize.io) - VectorizeによるAIアグエント向け最先端長期記憶。オープンソースで自己ホスト可能。LangChain、CrewAI、MCPなどとの統合あり。セッション間の金融取引アグエントに持続的な記憶を提供。

#### その他のリソース

- 🌟🌟🌟 [Stock-Prediction-Models](https://github.com/huseinzol05/Stock-Prediction-Models) - Stock-Prediction-Models、株価予測用機械学習およびディープラーニングモデルを収集。取引ボットおよびシミュレーションを含む。
- 🌟🌟 [Financial Machine Learning](https://github.com/firmai/financial-machine-learning) - 実用的な金融機械学習（FinML）ツールとアプリケーションの厳選リスト。このコレクションは主にPythonで構成。
- 🌟 [Awesome-Quant-Machine-Learning-Trading](https://github.com/grananqvist/Awesome-Quant-Machine-Learning-Trading) - 機械学習を重視したクォント／アルゴリズムトレードリソース。
- [awesome-quant](https://github.com/wilsonfreitas/awesome-quant) - クォント（定量金融）向けに極めて素晴らしいライブラリ、パッケージ、リソースの厳選リスト。
- [FinancePy](https://github.com/domokane/FinancePy) - 金融デリバティブ（固定収益、株式、外為、信用デリバティブ）の価格設定およびリスク管理に特化したPython金融ライブラリ。
- [Explore Finance Service Libraries & Projects](https://kandi.openweaver.com/explore/financial-services#Top-Authors) - kandiで厳選されたフィンテック人気・新規ライブラリ、トップ著者、トレンドプロジェクトキット、ディスカッション、チュートリアルおよび学習リソースを探索。
- [AgentMarket](https://agentmarket.cloud) - AIアグエント向けB2Aマーケットプレイス。189件のリストアップ、2800万件以上の実際のエネルギーデータ、LangChain/MCP統合。
- [MeterCall](https://metercall.ai/?v=f&src=github) — 1つのメートル付きAPIゲートウェイ。2100万以上のエンドポイント（決済、SMS、AI、CRM、政府データ）。無料プラン；呼び出しごとに料金。
