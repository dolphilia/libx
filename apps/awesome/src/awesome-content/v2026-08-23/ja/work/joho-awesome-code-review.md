---
title: "joho/awesome-code-review"
description: "joho/awesome-code-review の正規スナップショット"
licenseSource: "github-joho-awesome-code-review-readme-md"
---

<img src="https://raw.githubusercontent.com/joho/awesome-code-review/1887c2a5c78650474c1d13193ea3d38f23d98212/Awesome Code Review.png" alt="Awesome Code Review" />

# Awesome Code Review [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> [コードレビュー](https://en.wikipedia.org/wiki/Code_review)に関連するツール、記事、書籍、その他のリソースの厳選リスト。

コードレビューとは、コンピューターのソースコードを体系的に検査することです（ピアレビューとも呼ばれます）。

## 目次

- [Awesome Code Review ![Awesome](https://github.com/sindresorhus/awesome)](#awesome-code-review-)
- [目次](#contents)
- [学術論文](#academic-papers)
- [記事](#articles)
- [書籍](#books)
- [講演とポッドキャスト](#talks-and-podcasts)
- [ツール](#tools)
- [コントリビュート](#contribute)
- [ライセンス](#license)

## 学術論文 <a id="academic-papers"></a>

- [An experiment to assess the cost-benefits of code inspections in large scale software development (Porter, Siy, Toman & Votta, 1997)](http://laser.cs.umass.edu/courses/cs521-621.Fall10/documents/PorterSiyetal.pdf) 多段階レビューや会議によるコードレビューなど、当時のさまざまなレビュー手法を検証した初期の論文。オフラインで一回、2人のレビュアーによるレビューでも大部分の効果が得られることを示した。
- [Anywhere, anytime code inspections: using the Web to remove inspection bottlenecks in large-scale software development (Perpich, Perry, Porter, Votta & Wade, 1997)](https://dl.acm.org/citation.cfm?id=253234) 遠い将来、コードをレビューする最善の方法はWorld Wide Web上になるだろうと論じた。
- [Characteristics of Useful Code Reviews: An Empirical Study at Microsoft (Bosu, Greiler, Bird, 2015)](https://www.michaelagreiler.com/wp-content/uploads/2019/02/Characteristics-Of-Useful-Comments.pdf) 開発者がどのコードレビューコメントを有用だと考えるかの理解に焦点を当てた、大規模な質的・量的研究の結果を報告。
- [Code Reviewing in the Trenches: Understanding Challenges, Best Practices, and Tool Needs (MacLeod, Greiler, Storey, Bird, Czerwonka, 2018)](https://www.michaelagreiler.com/wp-content/uploads/2019/03/Code-Reviewing-in-the-Trenches-Understanding-Challenges-Best-Practices-and-Tool-Needs.pdf) Microsoftの開発者900人以上を対象に、コードレビュープロセス、実施する動機、遭遇する落とし穴とベストプラクティスを調べた大規模研究。
- [Design and Code Inspections to Reduce Errors in Program Development (Fagan, 2002)](https://link.springer.com/chapter/10.1007/978-3-642-59412-0_35) 特に各参加者の役割を定義した、より形式的なプロセスによって、レビュー中のエラー検出率を大幅に高める。
- [Helping Developers Help Themselves: Automatic Decomposition of Code Review Changes (Barnett et al. 2015)](http://research.microsoft.com/pubs/238937/barnett2015hdh.pdf)（[the morning paperによる要約](https://blog.acolyer.org/2015/06/26/helping-developers-help-themselves-automatic-decomposition-of-code-review-changes/)）大きな差分を小さな差分へ自動分割し、より良いレビューにつなげる研究。
- [Modern Code Review: A Case Study at Google](https://sback.it/publications/icse2018seip.pdf) Googleにおけるコードレビューの仕組みを示す研究。
- [Work Practices and Challenges in Pull-Based Development (Gousios et al. 2015)](https://sback.it/publications/icse2016b.pdf)（[the morning paperによる要約](https://blog.acolyer.org/2015/06/23/work-practices-and-challenges-in-pull-based-development/)）GitHubのPull Requestが実際にどのように使われているかを調べたフィールド研究。

## 記事 <a id="articles"></a>

- [8 Tips for Great Code Reviews](https://kellysutton.com/2018/10/08/8-tips-for-great-code-reviews.html) より良いコードレビュープロセスのための基本ルール。
- [A Better Code Review](https://www.giladpeleg.com/blog/better-code-review/) コードレビューの有用なパターンとアンチパターン集。
- [A Zen Manifesto for Effective Code Reviews](https://medium.freecodecamp.org/a-zen-manifesto-for-effective-code-reviews-e30b5c95204a) 効果的なコードレビューを行うための、提出者とレビュアー向けの実践的なヒント。
- [Brian Guthrie's Feature Branching Rant](https://twitter.com/bguthrie/status/937750796334174209) 「社内」のコードレビュー慣行に関連して、GitHubのオープンソース優先モデルの長所と短所を論じるTwitterスレッド。
- [Building an Inclusive Code Review Culture](https://blog.plaid.com/building-an-inclusive-code-review-culture/) 協力と学習の文化を確かなものにするためのガイドライン。
- [Code Review: Create The Culture, Learn The Best Practices](https://codingsans.com/blog/code-review) 技術リーダーによるコードレビューのヒントとベストプラクティス。
- [Code Review Etiquette](https://css-tricks.com/code-review-etiquette/) コードレビューで前向きな関わりを促すためのヒント。
- [Code Review Guidelines for Humans](https://phauer.com/2018/code-review-guidelines/) コードレビューをする側・受ける側のためのガイドライン。
- [Code Reviews: Just Do It](https://blog.codinghorror.com/code-reviews-just-do-it/) 2006年にソフトウェアのピアレビューを提唱した影響力のある記事。
- [Code Reviews at Google are lightweight and fast](https://www.michaelagreiler.com/code-reviews-at-google/) Googleにおけるコードレビューのベストプラクティスとプロセスの詳細。
- [Code Review Review is the Manager's Job](https://hecate.co/blog/code-review-review-is-the-managers-job) コードレビューを確実かつ適切に行う責任を管理職が負うべき理由。
- [Comments During Code Reviews](https://medium.com/@otarutunde/comments-during-code-reviews-2cb7791e1ac7) コードレビュー中に良いコメントを書く方法。
- [Designing Awesome Code Reviews](https://medium.com/unpacking-trunk-club/designing-awesome-code-reviews-5a0d9cd867e3) コードレビュープロセスを能動的に設計するための原則。
- [Effective Code Reviews Without the Pain](https://www.developer.com/tech/article.php/3579756/Effective-Code-Reviews-Without-the-Pain.htm) コードレビューを効果的に行う方法を説明した、もう一つの2006年の古典。
- [Feedback Ladders: How We Encode Code Reviews at Netlify](https://www.netlify.com/blog/2020/03/05/feedback-ladders-how-we-encode-code-reviews-at-netlify/) 個々のレビュー指摘がどの程度対応可能かをレビュアーが分類するための有用な枠組み。
- [How Code Reviews work at Microsoft](https://www.michaelagreiler.com/code-reviews-at-microsoft-how-to-code-review-at-a-large-software-company/) Microsoftのコードレビュープロセスを詳しく分析。
- [How I review code](https://engineering.tumblr.com/post/170040992289/how-i-review-code) Tumblrのエンジニアによる、Pull Requestをより良くレビューするための個人的な助言。
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) GoogleのEngineering Practices文書から、Googleのエンジニアがコードレビューを行う方法を詳しく説明。
- [How to Do Code Reviews Like a Human](https://mtlynch.io/human-code-reviews-1/) コードレビューを技術的プロセスだけでなく社会的プロセスとしても扱う技法。
- [Modern Code Reviews](https://rethought.se/research/modern-code-reviews/) 学術論文に分類してもよい内容だが、側面や文脈ごとにコードレビューの証拠を概観し、多数の論文へリンクするWebサイト。
- [On Code Review](https://medium.com/@schrockn/on-code-reviews-b1c7c94d868c) 元Facebookエンジニアによる、コードレビューのツールと個人的要素についての短い記事。
- [Pull Requests: How to Get and Give Good Feedback](https://kickstarter.engineering/pull-requests-how-to-get-and-give-good-feedback-f573469f0c44) コードレビュープロセスの双方、すなわちレビュアーとレビュー対象者への助言。
- [Ship Small Diffs](https://blog.skyliner.io/ship-small-diffs-741308bec0d1) 大きな変更より小さな変更をレビューする方がよい理由。
- [Stacked Pull Requests: Keeping GitHub Diffs Small](https://graysonkoonce.com/stacked-pull-requests-keeping-github-diffs-small/) 大きなPRを分割し、レビューへの参加を増やす段階的手順。
- [The Art of Humanizing Pull Requests](https://blog.usejournal.com/the-art-of-humanizing-pull-requests-prs-b520588eb345) Pull Requestを介したコードレビューの人間的側面を扱う絵文字豊富なガイド。
- [Towards Productive Technical Discussions](https://cate.blog/2018/07/03/towards-productive-technical-discussions/) コードレビューの議論をより生産的な方向へ進めるための具体的な質問と行動。
- [Unlearning Toxic Behaviors in a Code Review Culture](https://medium.com/@sandya.sankarram/unlearning-toxic-behaviors-in-a-code-review-culture-b7c295452a3c) 悪い例を通じてPull Requestの方法を示す実践ガイド。
- [Why I changed the way I think about Code Quality](https://medium.freecodecamp.org/why-i-changed-the-way-i-think-about-code-quality-88c5d8d57e68) コード品質がコードだけの問題ではない理由。

## 書籍 <a id="books"></a>

- [Best Kept Secrets of Peer Code Review](https://www.goodreads.com/book/show/1563457.Best_Kept_Secrets_of_Peer_Code_Review) コードレビューの実践に関する10本のエッセイをまとめた古い書籍。異なる著者が同じ領域を扱うため一部重複がある。
- [Handbook of Walkthroughs, Inspections, and Technical Reviews](https://www.amazon.com/Handbook-Walkthroughs-Inspections-Technical-Reviews/dp/0932633196) より形式的なウォークスルーを扱う古い書籍だが、レビューにおける駆け引きと集団力学もよく取り上げている。
- [Peer Reviews in Software: A Practical Guide](https://www.amazon.com/Peer-Reviews-Software-Practical-Guide/dp/0201734850) コードレビュー手法としての形式的コードインスペクションに関する実践ガイド。
- [Software Inspection: An Industry Best Practice](https://www.amazon.com/Software-Inspection-Industry-Best-Practice/dp/0818673400) コードレビュー手法に関する論文集。
- [Ultimate Guide to Code Reviews](https://www.codacy.com/ebooks/guide-to-code-reviews) 開発者アンケートに基づく、Codacy提供のコードレビュー手法電子書籍。
- [What to Look for in a Code Review](https://leanpub.com/whattolookforinacodereview) レビュー中にコーディングのアンチパターンを見つける方法を扱う、JetBrains提供の電子書籍。

## 講演とポッドキャスト <a id="talks-and-podcasts"></a>

- [Code Reviews: Honesty, Kindness, Inspiration: Pick Three - Jacob Stoebel RubyConf 2017](http://confreaks.tv/videos/rubyconf2017-code-reviews-honesty-kindness-inspiration-pick-three) 元の作者への思いやりを保ちながら効果的なコードレビューを行う方法。
- [Goldilocks and the Three Code Reviews - Vaidehi Joshi RedDot Ruby Conf 2017](https://confreaks.tv/videos/reddotrubyconf2017-goldilocks-and-the-three-code-reviews) 影響のある事項へ集中し、適切な量のコードレビューを見つける方法。
- [Implementing a Strong Code-Review Culture - Derek Prior Railsconf 2015](https://www.youtube.com/watch?v=PJjmw9TRB7s) チームへ健全なコードレビュー文化を根付かせる方法。
- [Michaela Greiler on Code Reviews - SE Radio 2020](https://www.se-radio.net/2020/02/episode-400-michaela-greiler-on-code-reviews/) Software Engineering RadioポッドキャストでMichaela Greilerがコードレビューの重要性と実施方法を語る。

## ツール <a id="tools"></a>

- [Axolo](https://www.axolo.co) GitHub／GitLabとSlackの統合。Pull Request／Merge Requestごとに一時チャンネルを作成。
- [Crucible](https://www.atlassian.com/software/crucible) Atlassianのオンプレミス型コードレビューツール。
- [Gerrit](https://www.gerritcodereview.com/) Googleを起源とするオープンソースGitコードレビューツール。
- [GitHub](https://github.com) Gitホスティングサービスであり、「Pull Request」の先駆け。
- [Gitpod](https://gitpod.io) ブラウザー内の完全なIDEでPull Requestをコードレビュー。
- [LGTM](https://lgtm.com) セキュリティ脆弱性とコード品質問題を検出する、GitHubおよびBitbucketのPull Request向け自動Gitコードレビュー。
- [Phabricator](https://www.phacility.com/phabricator/) Facebookを起源とするオープンソースGit／Mercurial／SVNコードレビューツール。
- [PullNotifier](https://www.pullnotifier.com/) GitHubとSlackを使う開発チームのPull Request可視性と全体的な生産性を向上。
- [PullRequest](https://www.pullrequest.com/) GitHub Pull Request向けのサービスとしてのコードレビュー。
- [Reviewable](https://reviewable.io/) GitHub Pull Request上に構築されたコードレビューツール。
- [Review Board](https://www.reviewboard.org/) SCMやプラットフォームに依存しないオープンソースレビューツール。
- [Sider](https://sider.review/) GitHub向け自動コードレビューサービス。
- [Softagram](https://softagram.com/) Pull Request、Merge Request（GitLab）、パッチセット（Gerrit）向けのコード変更自動可視化と依存関係分析。
- [SonarCloud](https://sonarcloud.io) Azure DevOps、Bitbucket、GitHubリポジトリのコードスメル、バグ、脆弱性を検出。
- [Upsource](https://www.jetbrains.com/upsource/) JetBrainsのオンプレミス型Git／Mercurial／Perforce／SVNコードレビューツール。
- [Viezly](https://viezly.com) Pull Requestの可視化と変更間の強化されたナビゲーションを備えたコードレビューサービス。

## コントリビュート <a id="contribute"></a>

コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/joho/awesome-code-review/blob/1887c2a5c78650474c1d13193ea3d38f23d98212/contributing.md)をお読みください。

## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0)

法律で認められる限り、[John Barton](https://johnbarton.co)は本作品に関するすべての著作権および
関連する権利または隣接権を放棄しています。
