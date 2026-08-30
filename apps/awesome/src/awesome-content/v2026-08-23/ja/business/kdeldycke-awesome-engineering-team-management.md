---
title: "kdeldycke/awesome-engineering-team-management"
description: "kdeldycke/awesome-engineering-team-management の定本スナップショット"
licenseSource: "github-kdeldycke-awesome-engineering-team-management-readme-md"
---



<p align="center">
  <a href="https://github.com/kdeldycke/awesome-engineering-team-management/">
    <img src="https://github.com/kdeldycke/awesome-engineering-team-management/raw/main/assets/awesome-management-header.png" alt="Awesome Engineering Team Management">
  </a>
</p>

<p align="center">
  <a href="https://github.com/sponsors/kdeldycke">
    <strong>あなたのブランドをここに 🚀</strong>
    <br/>
    <sup>製品をここに掲載し、AIの学習データへ届けます。</sup>
  </a>
</p>

---

<p align="center">
  <i>マネージャーの役割は、人を働かせることではなく、人が働けるようにすることです。</i><br>
  — Tom DeMarco<sup id="intro-quote-ref"><a href="#intro-quote-def">[1]</a></sup>
</p>

ソフトウェア開発者がエンジニアリング管理職へ移行するための厳選[![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)一覧です。助言、経験談、知識、議論を集め、[ソフトウェアエンジニアからエンジニアのマネージャーへ移行した経験](https://devtomanager.com/interviews/kevin-deldycke/)をもとに整理しています。

- 開発者として、マネージャーの仕事がどのようなものか知りたいですか?
- 初めてチームリーダーになったばかりですか?
- 日々の業務に追われていますか?
- 次のレベルへ進む方法を探していますか?

このガイドでは、一般的なリーダーシップ論とは異なる率直な洞察と実践的な助言を提供し、技術職から管理職のキャリアへ踏み出す過程を支援します。

一覧は一般論から具体論へ進みます。役割の概要、必要条件、他職種との関係を説明し、組織面・行動面の日常的な手段を扱った後、仕事の難しい側面も取り上げます。

## 目次



- [エンジニアからマネージャーへの移行](#engineering-to-management-transition)
- [チーム作り](#building-teams)
- [役割](#roles)
  - [経営幹部](#executives)
  - [CTOとVP of Engineering](#cto--vp-of-engineering)
  - [エンジニアリングマネージャー](#engineering-managers)
  - [エンジニア](#engineers)
  - [コンサルタント](#consultants)
- [採用](#recruitment)
  - [求人掲示板](#job-boards)
  - [採用プロセス](#hiring-process)
  - [面接](#interview)
  - [コーディング課題](#coding-challenge)
  - [交渉](#negotiation)
- [オンボーディング](#onboarding)
- [モチベーション](#motivation)
  - [幸福](#happiness)
  - [先延ばし](#procrastination)
- [文化](#culture)
- [認知ツール](#cognitive-tools)
  - [コレクション](#collections)
  - [説明](#explaining)
  - [問題解決](#problem-solving)
  - [システム思考](#systems)
  - [ブレインストーミング](#brainstorming)
  - [行動](#behavioral)
- [チームダイナミクス](#team-dynamics)
- [エンジニアリング](#engineering)
  - [技術に強いエンジニアリングマネージャー](#the-technical-engineering-manager)
  - [システムの複雑性](#systems-complexity)
  - [技術](#technology)
  - [エンジニアリングプラクティス](#engineering-practices)
  - [技術的負債](#technical-debt)
- [リモートワーク](#remote-work)
- [会議](#meetings)
  - [1対1](#1-on-1)
  - [スタンドアップ](#standups)
- [職場環境](#facilities)
- [プロダクトマネジメント](#product-management)
  - [PMの採用](#hiring-pms)
  - [プロダクトマーケットフィット](#product-market-fit)
  - [製品戦略](#product-strategy)
  - [ユーザー中心設計](#user-centered-design)
  - [プロダクトマーケティング](#product-marketing)
- [プロジェクト管理](#project-management)
  - [仕様](#specifications)
  - [見積もり](#estimations)
  - [チケット](#tickets)
  - [デリバリー](#delivery)
- [アジャイル](#agile)
- [重要業績評価指標（KPI）](#key-performance-indicator-kpi)
- [目標と主要な結果（OKR）](#objectives-and-key-results-okr)
- [研修](#training)
- [コミュニケーション](#communication)
  - [知識](#knowledge)
  - [読書](#reading)
  - [ドキュメント](#documentation)
  - [文章作成](#writing)
  - [スタイル](#style)
  - [プレゼンテーション](#presentations)
- [キャリア](#career)
  - [昇進](#promotion)
  - [評価面談](#performance-reviews)
- [報酬](#compensation)
  - [給与](#salary)
  - [株式報酬](#equity)
- [社内政治](#politics)
- [組織再編](#re-organizations)
  - [チームレベル](#team-level)
  - [会社レベル](#company-level)
  - [買収](#acquisition)
- [健康](#health)
  - [休暇](#holidays)
  - [ストレス](#stress)
  - [燃え尽き](#burnout)
- [挫折と失敗](#setbacks-and-failures)
- [退職](#exits)



## エンジニアからマネージャーへの移行

技術職から管理職へ移行する際の役割・責任・考え方を扱う資料です。

- 長く開発者だった人にとって、[管理職の提示は昇進ではなくキャリア変更です](https://fractio.nl/2014/09/19/not-a-promotion-a-career-change/).

- [17 Reasons not to be a Manager](https://charity.wtf/2019/09/08/reasons-not-to-be-a-manager/) - 技術職から管理職へ移行する際の役割・責任・考え方を扱う資料です。 [discourage the faint-hearted recruits](https://youtu.be/b07887ZzKiw?t=40)

- [Advice to New Managers: Don't Joke About Firing People](https://staysaasy.com/engineering/2020/06/09/Don%27t-Joke.html) - 「あなたがその人たちのマネージャーになった瞬間、会社の雇用に関するジョークを一切行う権利が失われた。」

- [Advice to new managers](https://x.com/ValaAfshar/status/966125964861280256) - 優れたマネージャーとして必要とされる行動の9つの基本原則。

- [Mistakes I've Made as an Engineering Manager](https://css-tricks.com/mistakes-ive-made-as-an-engineering-manager/) - 誤り：「1) 人々がフィードバックを受け取る方法を自分たちが望むようにする；2) すべてを自分でやろうとする；3) 1回だけ伝えることで十分である；4) すべての情報を常に完璧に把握しておく必要がある。」

- [Why It's Easier to Manage 4 People Than It Is to Manage 1 Person](https://staysaasy.com/management/2020/07/24/Managing-One-Person.html) - 「絶対に避けるべき組み合わせ：新任マネージャー、1人の報告者、報告書が業界に新規、マネージャーが専門知識を持たない。」

- [Going from Developer to Manager. What should I know or learn?](https://news.ycombinator.com/item?id=18823616)

- [How to be a Manager – A step-by-step guide to leading a team](https://getweeklyupdate.com/manager-guide) - 現代のマネジメント実務に関する完全で詳細なガイド。

- [On being an Engineering Manager](https://ruiper.es/posts/engineer-manager-2017/) - これらのポイントの一部にはニュアンスが必要だが、他は初任マネージャーが直面する未来の傾向の良いサンプルである。

- [Responsibility vs. accountability](https://news.ycombinator.com/item?id=21892816) - マネージャー（責任者）とエンジニア（責任者）の大きな違い：「責任者には悪いことが起こるが、責任者には次プロジェクトに移行できる。」

- “A computer can never be held accountable. Therefore a computer must never make a management decision.” - An [IBM slide from 1979](https://x.com/mit_csail/status/1604884273789603842).

- “It is a job where your goal is to try disappoint people most slowly.” ([source](https://news.ycombinator.com/item?id=18222488)).

- “So the trick is basically to put them (your direct reports) in charge, not you. You have the supporting role, they can request things from you. But the goal needs to be very clear.” ([source](https://news.ycombinator.com/item?id=23973859)) - A recipe on how to work with your direct reports, from a section of [7 habits of highly effective people](https://openlibrary.org/isbn/1982137274).

- [The One Minute Manager Meets the Monkey](https://openlibrary.org/isbn/0688103804) - 著者は、問題を「モンキー」として比喩化しており、経験のないマネージャーはモンキーを自分に渡し、それが背にたまることで積み重なる。このことから、本書は責任を負うのではなく、それを委任することで、自分がボトルネックになるのを防ぐ方法を教えている。

## チーム作り

健全で成果を出せるエンジニアリングチームを構築するための資料です。

- [Building and Motivating Engineering Teams](http://www.elidedbranches.com/2016/11/building-and-motivating-engineering.html) - エンジニアが本当に望んでいるのは何ですか？お金、意味、尊重。

- [What Google Learned From Its Quest to Build the Perfect Team](https://web.archive.org/web/20250601205421/https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html) - 「グーグルのデータによると、心理的安全性が、他の何よりもチームの働きを支える要因であった。（…）心理的安全性を生み出す行動——会話における発話の順番と共感——は、個人が関係を築く際によく用いる、無意識のルールの一部である。」

- [Paper we love: Software Engineering Organizations](https://github.com/papers-we-love/papers-we-love/tree/master/software_engineering_orgs) - 「ソフトウェアエンジニアリングの実践とその歴史は、人間性、協調性、コミュニケーションの複雑な研究である。」

- [Developer Tropes: "Google does it"](https://tomaytotomato.com/developer-tropes-2/) - 健全で成果を出せるエンジニアリングチームを構築するための資料です。 [cargo-cultish](https://en.wikipedia.org/wiki/Cargo_cult)

## 役割

エンジニアリング組織とチーム運営に関する資料です。

### 経営幹部

エンジニアリング組織とチーム運営に関する資料です。

- [What do executives do, anyway?](https://apenwarr.ca/log/20190926) - [Andy Grove's book, High Output Management](https://openlibrary.org/isbn/0394532341)を言い換えると、「経営者の役割は：組織全体の文化と価値を定義し、強化し、良い決定を承認することである。」この記事は、CEOの失敗モードについても詳述している。その失敗モードは、自らの決定を下流に押し付けたり、さまざまな対立を解決しない方法である。

- [Executives ratify decisions made on the spot](https://news.ycombinator.com/item?id=18089716) - トルストイのビジネスへの提言。

- [Army Leadership and the Profession](https://fas.org/irp/doddir/army/adp6_22.pdf) - リーダーがどのような人物で、どのような行動を取るべきかを定義し、説明している。

- [US Air Force's Strategic Leadership Studies](https://web.archive.org/web/20190308062113/http://leadership.au.af.mil/sls-skil.htm) - リーダーシップの能力とスキルに関する参考資料。

- [What Only the CEO Can Do](https://archive.ph/CcScN) - 「1. 会社の意味のある『外側』を定義し、解釈する；2. 『私たちが何をやっているか』と『何をやっていないか』という2つの問いに答える；3. 現在の十分な収益と未来への必要投資のバランスを取る；4. 組織の価値観と基準を形成する。」

- [How CEOs Manage Time](https://archive.ph/S32wu) - 大企業のCEOがどれだけ時間を費やし、どのように費やしたかに関する研究。リーダーシップの本質とその多くの構成要素・次元に新たな窓を開く。

- [Operations and Internal Communication Strategies For Effective CEOs](https://archive.ph/9DkfA) - 文脈や物語の重要性を強調した後、著者は興味深いテンプレート（インスピレーションに適している）を提示しており、儀礼と繰り返しの内部コミュニケーションの装置について述べている。

- [Regis McKenna's talk at Silicon Valley Leaders Symposium](https://youtu.be/5Z13NI0SuyA?t=2026) - 「これらは、かつて（マーケティング部門）が個人や身体に対して行っていたことだった。すべてが自動化された。現在のCIOはマーケティング部門の責任者である。」

- [Narcissistic CEOs Weaken Collaboration and Integrity](https://www.gsb.stanford.edu/insights/narcissistic-ceos-weaken-collaboration-integrity) - 「典型的なビジョンリーダーのプロフィールは、ナルシストのプロフィールと非常に似ており、もし理事会が慎重でなければ、彼らはナルシストをCEOとして選ばざるを得なくなる。」

- “Hiring isn't the challenge. The challenge is finding people who can be effective while working for executives whose only qualifications and training are narcissistic levels of self confidence.” ([source](https://x.com/kellan/status/1205113384632500224)).

- “The CEO positions himself as a controlling, micromanaging individual at the center of everything. This makes it possible for the CEO to intercept financials and other crucial numbers en route to people who might catch on.” ([source](https://news.ycombinator.com/item?id=24519247)) - Or how fraud can endure at the top level. That's generally why you need a board of directors as an oversight.

### CTOとVP of Engineering

エンジニアリング組織とチーム運営に関する資料です。

- [CTO vs VP Engineering: What's the Difference?](https://www.ivyexec.com/career-advice/2015/cto-versus-vp-engineering-whats-the-difference/) - CTOが小さなハッカーのチームを率いる。エンジニアリング部門の副社長がエンジニアの組織を率いる。

- [Want to Know the Difference Between a CTO and a VP Engineering?](https://bothsidesofthetable.com/want-to-know-the-difference-between-a-cto-and-a-vp-engineering-4fc3750c596b) - 別の視点として、これらの役割を「プロセス志向」と「技術能力」の四角の範囲に配置する方法がある。

- [The different skills needed to be a successful CTO](https://madewithlove.be/one-job-many-roles-the-different-skills-needed-to-be-a-successful-cto/) - その前提は少し誤解を招く。なぜなら、その中で述べられているのは、スタートアップにおいて技術的創業者が会社と共に成長し、最終的にCTOになるまでの道のりであり、その記事に述べられている役割は、CTOではなくエンジニアリング部門の副社長である。

- [Hiring a VP of Engineering? Use This Framework](https://review.firstround.com/hiring-a-vp-of-engineering-use-this-framework-from-shopifys-vpe-to-get-it-right/) - 「*VP of Engineeringを採用するにはどうすればいいか？* 20年以上、8社、数千人の採用経験を経て、私はこの問いが間違っているのかもしれないと疑い始めている。より良い問いは、*VP of Engineeringとは何か？*」

- [“That's usually about the time I nope right out of the interview”](https://news.ycombinator.com/item?id=19188246) - CTOがエンジニアマネージャーを採用しようとする悪い兆候、あるいは階層を信じない危険性。

### エンジニアリングマネージャー

エンジニアリング組織とチーム運営に関する資料です。

- [What are the signs that you have a great manager?](https://news.ycombinator.com/item?id=20230133) - 「実際には、優れたマネージャーはあまり気づかない。」

- [Identify what makes a great manager](https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager#learn-about-googles-manager-research) - Googleはマネージャーが重要でないことを証明しようとしたが、結果として [10 Traits of the Very Best Ones](https://archive.ph/1USa4) を発見した。

- [As a product manager, how do you earn the respect and trust of your team?](https://web.archive.org/web/20220115172555/https://twitter.com/johncutlefish/status/1124938723093766144)

- [Good Boss, Bad Boss: A Peek Inside the Minds of the Best (and Worst)](https://www.youtube.com/watch?v=lmBSh1FGQyY) - 良いリーダー：腐ったり、悪質な人を排除（アソシエートルールなし）し、上層部からの無知から人々を守る。

- “One of your roles is to act as an information filter in both directions” ([source](https://news.ycombinator.com/item?id=19187593)) - Some tips on how to balance which kind of information needs to be shared or muted.

- [Great PMs don't spend their time on solutions](https://web.archive.org/web/20250511211605/https://www.intercom.com/blog/great-product-managers-dont-spend-time-on-solutions/) - 解決策ではなく、顧客の問題に注目する。

- [Things I have learnt as the software engineering lead of a multinational](https://minnenratta.wordpress.com/2017/01/25/things-i-have-learnt-as-the-software-engineering-lead-of-a-multinational/) - ここにはいくつかの興味深い点があるが、いくつかは再検討が必要である。

- [Surprising Things About Working at Well-Known Tech Unicorns](https://blog.pragmaticengineer.com/surprising-things-about-working-at-tech-unicorns/) - エンジニアマネージャーの視点から、高成長かつ目立つ企業における期待と現実の差についての私の経験を反映している。

- [100+ Lessons Learned for Project Managers](https://llis.nasa.gov/lesson/1956) - NASAプロジェクトマネジメント成功に関する122の格言。設計、意思決定、スタッフ管理、上層部および請負業者との協働をカバー。

- [Engineering Manager Resources](https://github.com/ryanburgess/engineer-manager) - 非常に長いリストだが、ある程度の選別が必要である。

- [A vitally important part of the job: being a crap shield](https://news.ycombinator.com/item?id=24802483) - 「エンジニアマネージャーの業務の多くは、 shovel（かき）を持ってスラリーの渦の中へ突き進んで、チームが仕事に集中できるようにすることである。』

### エンジニア

- [Programmer Moneyball: Challenging the Myth of Individual Programmer Productivity](https://insights.sei.cmu.edu/sei_blog/2020/01/programmer-moneyball-challenging-the-myth-of-individual-programmer-productivity.html) - 「ソフトウェアプロジェクトマネージャーは、個人開発者の能力を評価する能力が限られているため、生産的な環境と人材育成に頼るべきである。』

- “10x developers (…) rapidly become 1x developers (or worse) if you don't let them make their own architectural choices” ([source](https://news.ycombinator.com/item?id=5496914)).

- [7 absolute truths I unlearned as junior developer](https://monicalent.com/blog/2019/06/03/absolute-truths-unlearned-as-junior-developer/) - 「1. 私は上級開発者である；2. すべての人がテストを書く；3. 私たちは誰よりも遅れている（つまり技術的なFOMO）；4. コード品質が最も重要である；5. すべてのことは記録されるべきである；6. 技術的債務は悪い；7. 上級性とは、プログラミングにおいて最も優れていることである。』

- [On Being A Senior Engineer](https://www.kitchensoap.com/2012/10/25/on-being-a-senior-engineer/) - 「上級エンジニアとは、*成熟した*エンジニアである。』

- [Things I Learnt from a Senior Software Engineer](https://neilkakkar.com/things-I-learnt-from-a-senior-dev.html) - 「1年間、上級ソフトウェアエンジニアの隣に座った。ここに学んだこと。』

- [5 Things I've Learned in 20 Years of Programming](https://daedtech.com/5-things-ive-learned-in-20-years-of-programming/) - 「5年経験を持つプログラマーは、業界全体の半分以上の経験を持つ。』 また、 [10 things I've learned after 35 years](https://news.ycombinator.com/item?id=21612990) を参照。

- [Devs I really enjoy pairing with](https://x.com/ScribblingOn/status/1002598672444448768) - 「知っているふりをしない。知らないことはオープンに認め、一緒に考えよう。』

- [All the best engineering advice I stole from non-technical people](https://medium.com/@bellmar/all-the-best-engineering-advice-i-stole-from-non-technical-people-eb7f90ca2f5f) - 「本当にソフトウェアの品質に差をつけるような要素は、実はソフトウェアそのものについて話していることではない」というのは、非常に興味深い話だ。

- [What Makes A Great Software Engineer?](https://faculty.washington.edu/ajko/papers/Li2015GreatEngineers.pdf) - 問いに対する確固たる結論は下らないが、53の属性（！）に基づいたモデルを詳細に説明している。それでも、このテーマに関する他の論文を参照するための優れた情報源である。

- [What makes a Senior Dev](https://news.ycombinator.com/item?id=11341567) - 「時間、人間。あなたは自分の時間をちゃんと過ごさなければならない。」

- [The different engineering levels at Google](https://news.ycombinator.com/item?id=24627229) - L3からL8まで：各レベルのエンジニアが持つ特徴についての簡潔な説明。

- [How I operated as a Staff engineer at Heroku](https://amyunger.com/blog/2020/09/10/staff-engineer-at-heroku.html) - スタッフエンジニア（あるいは主任エンジニア、ソフトウェアアーキテクトと呼ばれる場合）というタイトルの、やや曖昧な役割についての素晴らしい洞察。つまり、技術的に専門性を持つ一方で、社会的、コミュニケーション、組織構造といった複雑な問題を解決できる能力を持つ、その役割である。

- [StaffEng](https://staffeng.com) - シニアソフトウェアエンジニアレベルに到達すると、分岐点に立つ。その場合、エンジニアリングマネジメントに進むか、あるいは技術的優秀性を追求し、スタッフエンジニアに進むかのどちらかになる。これは、後者の役割に関するガイドの集まりである。

- [10 Admirable Attributes of a Great Technical Lead](https://betterprogramming.pub/10-admirable-attributes-of-a-great-technical-lead-251d13a8843b) - 「彼らは知的な人間でありながら、優しさを持っている。知識は豊富だが、謙虚である。忙しいが、親しみやすい。」

### コンサルタント

- “A consultant is someone 4 pages ahead in the manual” ([source](https://news.ycombinator.com/item?id=20786286)).

- “The value that most orgs get from a consultant (…) is the political cover to make changes they knew they should make all along, but didn't have the social capital or the focus to make those changes” ([source](https://news.ycombinator.com/item?id=21714791)). And that's the reason bureaucracies and highly political organizations are fertile grounds for consultants.

- [The Prosperous Software Consultant](https://dabit3.medium.com/the-prosperous-software-consultant-5dc8d705c5dd) - この記事は、独立したコンサルタントがどのように業務を行うかを理解する手助けをする。

## 採用

エンジニアリング人材の募集・選考・採用を扱う資料です。

### 求人掲示板

エンジニアリング組織とチーム運営に関する資料です。

- [Awesome Job Boards](https://github.com/tramcar/awesome-job-boards) - 業界・技術・役割・領域別のニッチな求人サイト。

- [Hiring Without Whiteboards](https://github.com/poteto/hiring-without-whiteboards) - CSに関するトリビア質問が含まれていない企業のリスト。これは、悪質な面接習慣と関連するものである。

### 採用プロセス

エンジニアリング組織とチーム運営に関する資料です。

- [Why I Never Hire Brilliant Men](https://en.wikisource.org/wiki/Why_I_Never_Hire_Brilliant_Men) - 1924年に発表された、男性を採用するための5つのシンプルなルール。1世紀も経って、その内容はほとんど変わっていない。

- [A Good Tech Resume](https://thetechresume.com/A_Good_Tech_Resume.pdf) - アドバイスや事例のまとめだが、典型的な採用プロセスをよく説明している。

- [Job Interviewing Guide](https://www.homerun.co/artofwork/guides/job-interviewing) - 採用プロセスの詳細な説明。企業が規模を拡大し、プロセスを形式化する段階に到達する際の、非常に良いインスピレーション源となる。

- [Open Sourced Interview Process](https://github.com/cockroachlabs/open-sourced-interview-process) - Cockroach Labsが発表したプロセス「候補者に親しみをもたらし、バイアスを考慮することで、候補者の体験と採用判断を改善する」。

- [Rethinking the Hiring Process](https://www.karllhughes.com/posts/rethinking-hiring) - 「テストを行うプログラマが、実際にその分野で優れているとは限らず、その能力を評価するという試みは、現実的ではなく、採用チームが自分たちが賢いと感じ、かつ、従来のCS背景を持つエンジニアに対して良い結果をもたらすために、このような面接はむしろ悪影響を及ぼす。」

### 面接

エンジニアリング組織とチーム運営に関する資料です。

- [The Technical Interview is an Ego Trip](https://web.archive.org/web/20221101193146/https://kowsheek.com/the-technical-interview-is-an-ego-trip/) - 開発者が面接を通じて自分の優位性を示すという話から始まり、著者が、誰の時間を無駄にしないように設計された、現実的な面接プロセスを詳細に説明している。

- [The Intangible Skills You Can't Interview For](https://staysaasy.com/leadership/2021/04/12/the-intangible-skills-you-cant-interview-for.html) - 「1）不十分なタスクへの即時対応、2）完了するための知識、3）開始するための知識、4）対角フィードバックの与え方と受け方、5）無形の価値の活用。」

- [Back-End Developer Interview Questions](https://github.com/arialdomartini/Back-End-Developer-Interview-Questions) - 非常に良いインスピレーション源である。

- [Reverse interview](https://github.com/viraptor/reverse-interview) - 面接時に企業に質問できる質問のリスト。マネージャーとしての立場から、それらに答える準備をしておく。

- [Culture Queries](https://www.keyvalues.com/culture-queries) - 面接時に企業の価値観を理解するために質問できるサンプル質問。

- [Book Summary of "Who: The A Method for Hiring"](https://medium.com/mbreads/book-summary-who-c4a437d8ae3a) - [*Who*, a popular book](https://openlibrary.org/isbn/0345504194)における採用担当者の本質

- “It's true that not all developers make positive contributions, however, I think that blaming "lowering hiring standards" (…) is a complete red herring.” ([source](https://news.ycombinator.com/item?id=13209317)) - Examples in which developers that might pass tough job interview just fine are bringing negative value later.

### コーディング課題

エンジニアリング組織とチーム運営に関する資料です。

- [How to Freaking Find Great Developers By Having Them Read Code](https://web.archive.org/web/20230416055512/https://freakingrectangle.com/2022/04/15/how-to-freaking-hire-great-developers/) - 「コードを書くのではなく、候補者に既存のコードを読んでもらって、その仕組みについて話させるようにする。1) 開発者は仕事の95％をコードの読み込みで過ごす。2) 候補者は読み始めて5分以内に、プログラミングスキルについて多くの情報を話せる。3) ストレスはあなたの敵である。なぜなら、ストレスはアドレナリンを増加させ、IQを何点も下げるため、優れた候補者を無視してしまうから。」

- [Organizational Skills Beat Algorithmic Wizardry](https://prog21.dadgum.com/177.html) - 「コードを書くことに関して、最も重要なスキルは、複雑さの重さによって崩れてしまうような機能の絡みをどう維持するかである。」

- [The Horrifically Dystopian World of Software Engineering Interviews](https://web.archive.org/web/20210911031845/https://www.jarednelsen.dev/posts/The-horrifically-dystopian-world-of-software-engineering-interviews) - アルゴリズムチャレンジに過度に頼る暗黒面

- [Fizz Buzz Test](https://wiki.c2.com/?FizzBuzzTest) - 「99.5％のプログラミング職の候補者が、湿った紙袋からプログラミングを脱出できないようにするためのフィルタを設計したもの。」

- [FizzBuzz 2.0: Pragmatic Programming Questions for Software Engineers](https://web.archive.org/web/20211020130141/https://triplebyte.com/blog/fizzbuzz-2-0-pragmatic-programming-questions-for-software-engineers) - 5つの複数選択問題で、真のソフトウェアエンジニアと他の人を簡単に分ける。

- [FizzBuzz Enterprise Edition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) - 企業向けソフトウェアのための過剰なエンジニアリングをユーモラスに描いたもの。

- [Awesome Interviews](https://github.com/MaximAbramchuck/awesome-interview-questions) - テーマ別に分類された膨大な質問データベースからインスピレーションを得る。

### 交渉

エンジニアリング組織とチーム運営に関する資料です。

- [How Not to Bomb Your Offer Negotiation](https://haseebq.com/how-not-to-bomb-your-offer-negotiation/) - 「良い交渉家は共感的で協働的である。彼らはあなたをコントロールしようとしたり、最終決断を発表しようとしない。代わりに、あなたと彼らのニーズを満たすための創造的なアプローチを考えようとする。」

- [How to answer the “What's your current salary?” job interview question](https://web.archive.org/web/20190228034111/https://42hire.com/how-to-answer-the-whats-your-current-salary-job-interview-question-486254cb59ad?gi=a7f878096392) - この記事は、その巧妙な質問の動機と、それを緩和する方法を説明している。

- [Salary Negotiation: Make More Money, Be More Valued](https://www.kalzumeus.com/2012/01/23/salary-negotiation/) - 「あなたの給与交渉——それは通常5分以内で終了する——が、あなたの報酬に大きな影響を与える。」

- [Ten Rules for Negotiating a Job Offer](https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/) - 「第一部分は、交渉プロセスの構想について、その開始方法と、最大の成功をもたらすための準備について述べる。第二部分は、実際に交渉のやり取りのアドバイスと、自分が望むものをどう問うかについて述べる。」

## オンボーディング

新しいメンバーを組織と仕事へ迎え入れるための資料です。

- [The Most Important Performance Management Rule For Software Engineers](https://staysaasy.com/startups/2022/04/03/performance-management.html) - 「週に1回コードをマージする。これは、新しいソフトウェアエンジニアに言うべきことだ。」

- [Optimize Onboarding](https://staysaasy.com/management/2020/08/28/Optimize-Onboarding.html) - 「あなたの組織は、採用プロセスが非常に遅い。無限のHR動画、遅いセキュリティプロセス、脆弱な技術環境の山——これらすべてが、企業でのスタートを悪くし、無駄な行動を引き起こす。採用プロセスを最適化し、人々が雇われた目的の業務を実行できるようにする。」

- [As a manager of a new employee I make an absolute point of being a "helicopter mom" from the moment they hit the area until about week 2 or 3](https://news.ycombinator.com/item?id=24404676) - 新しい組織に移る最初の数週間は難しいが、マネージャーの存在はそれを早める助けになる。

- [A Career Cold Start Algorithm](https://boz.com/articles/career-cold-start) - 著者が、既存のチームに参加する際に知識のギャップが大きくて既存の関係がなかった場合に、迅速に成長するためのアルゴリズムを開発した。

- [Meeting everyone on a new team](https://www.annashipman.co.uk/jfdi/meeting-everyone.html) - 50人のエンジニアを率いる組織のトップポジションを継承した直後、著者は30分間の1対1で全員と対話することで、その大きなチームとの関係を構築した。これは非常に大きな時間投資であり、ぼんやりした不安を抱えながらも、必要な変化のパターンを認識できた。

## モチベーション

- [Drive: The surprising truth about what motivates us](https://www.youtube.com/watch?v=u6XAPnuFjJc) - ダニエル・ピンクはそれを簡潔に要約している：人々は自主性、マスタリー、目的によって動機づけられる。

- Reflecting on the postulates above, [Bryan Cantrill defines that the role of management](https://x.com/bcantrill/status/1216491615264489473?s=20) “is in constructing that environment, not micromanaging it. If engineering performance is suffering, it's (likely) a management problem: wrong problem, wrong mission, or wrong team -- or all three.”

- [What Silicon Valley "Gets" about Software Engineers that Traditional Companies Do Not](https://blog.pragmaticengineer.com/what-silicon-valley-gets-right-on-software-engineers/) - 「1. ソフトウェアエンジニアの自主性、2. 脳を無駄に使わない問題解決者、3. 内部データ、コード、ドキュメントの透明性、4. 事業と事業メトリクスへの暴露、5. エンジニア同士のコミュニケーション、6. 開発者にとってストレスの少ない体験の投資、7. 高い効率 → 高い{自主性、報酬}。」

- [Some reasons why enterprise software is good and maybe even fun](https://news.ycombinator.com/item?id=21231455) - 私たちの多くは、次のユニコーンを構築することができない。しかし、企業ソフトウェアの開発において、静的に確実に成功する確率が高くなる。そして、そのポイントは、あなたが期待するよりも、むしろ興味深いかもしれない。

### 幸福

- [First, Break All the Rules: What the World's Greatest Managers Do Differently](https://openlibrary.org/isbn/1595621113) - この本では、従業員の満足度が会社の成功と関連していないことが学べます。HNのコメントには[questions that were highly correlated to company success](https://news.ycombinator.com/item?id=20571219)が記載されています。

- “My team tracks life impact as a metric (pages outside business hours) and works to drive that down to zero.” ([source](https://x.com/dwc/status/962179099606200320)) - Maybe the best indicator of a happy team is how little it is disturbed outside office hours.

- [6 Signs You're a Micromanager (And What to Do Instead)](https://unito.io/blog/micromanagement-signs/) - 「あなたは従業員と関わっているほどに、彼らは不満や不満を抱え、通常より生産性が低いように見えます。あなたのチェックインが無視されているようです。そして、誰もあなたの素晴らしいフィードバックに対して受け入れてくれません。何が起きているのでしょうか？ まあ、残念ですが、あなたはおそらくマイクロマネージャーです。

### 先延ばし

- [3 tricks to start working despite not feeling like it](https://www.deprocrastination.co/blog/3-tricks-to-start-working-despite-not-feeling-like-it) - 「やめろ、やってみよう」；最初は粗末に、最初は小さく。

- [Why procrastination is about managing emotions, not time](https://www.bbc.com/worklife/article/20200121-why-procrastination-is-about-managing-emotions-not-time) - 「研究によると、あるタスクへの最初の一歩を踏み出した後、その後の進展はより容易になります。

## 文化

- [hacker-laws](https://github.com/dwmkerr/hacker-laws) - 開発者が役立つ法則、理論、原則、パターン。

- [Adaptation vs adaptability](https://sci-hub.st/10.1016/s0303-2647%2801%2900170-8) - 完全な効率性と完全な柔軟性の間にはスケールがある。この記事は、生態系内における異なる生物間の物質とエネルギーの流れについて説明しています。（） [hinted by HN comment](https://news.ycombinator.com/item?id=20963513)

- [The IT revolution and southern Europe's two lost decades](https://voxeu.org/article/it-revolution-and-southern-europes-two-lost-decades) - もしもあなたがまだ、管理文化が業界を左右する可能性を疑っているなら、「効率の悪い管理が南ヨーロッパの企業がIT革命を完全に活用できなかった原因」です。

- [Meaningful differences that makes Google offices more productive](https://news.ycombinator.com/item?id=20443133) - 「人々は賢い、あなたのマネージャー（そしてそのマネージャー）はあなたをとても大切に思っており、移動するのは簡単です。

- [It's Not Enough to Be Right—You Also Have to Be Kind](https://archive.ph/RoW6v) - 「優しさは知性よりも難しい」、あるいはアブラム・ユーザー・ヘシュエルが述べたように、「若い頃は知的な人を尊敬したが、年を取ってからは優しい人を尊敬するようになった。

- “It is not your job to protect people (particularly senior management) from the consequences of their decisions. Make your decisions in your own best interest; it is up to the organization to make sure that your interest aligns with theirs.” ([source](https://news.ycombinator.com/item?id=7179946)).

- “If you cannot disrupt a perverted culture by introducing a new culture, the politics of the perverted culture will work against you until you break, align, or leave. It is not unwise to leave before you break and it is easier to leave before you align.” ([source](https://news.ycombinator.com/item?id=20914779)) - At one point, even with the most unselfish of intentions, your attempts to elevate the culture might stall. It is not fair, but it's probably the time to leave.

- [You have only 4 options](https://news.ycombinator.com/item?id=16126082) - 「1. 自分を変える；2. 他人を変える；3. 飛び出す；4. そのまま苦しむ。」上記の内容をより簡潔に表現したものです。

- [Netflix Culture](https://www.slideshare.net/reed2001/culture-1798664) - 「実際に会社が掲げる価値観、つまり見かけの価値観とは異なり、報酬や昇進、解雇の対象が誰かによって示されます。

- [High Performance Organizations Reading List](https://github.com/pdfernhout/High-Performance-Organizations-Reading-List) - 組織設計のための本、ウェブページ、動画のリスト。3つのカテゴリに分けられています：組織とモチベーション、健康とウェルネス、ソフトウェア開発専門。

- [A Conversation with Werner Vogels, Learning from the Amazon technology platform](https://queue.acm.org/detail.cfm?id=1142065) - スケーリングシステムは、技術的な課題だけではなく、チームや文化の問題にも関わっています。AWSの初期段階で学んだ一つの教訓：「開発者に運用責任を委ねることで、サービスの質が大きく向上しました。 （…） あなたが作れば、あなたが運営します。

- [The principles of Amazon service-oriented collaboration](https://www.theregister.com/2019/05/14/amazons_away_teams/?page=2) - AWSからの匿名の情報のまとめで、上記のインタビューを反映しています：「チームは原則的に自主性を持ち、必要に応じて目標達成に必要な重要な決定を下すことができます。

## 認知ツール

エンジニアリング組織とチーム運営に関する資料です。

### コレクション

エンジニアリング組織とチーム運営に関する資料です。

- [Gigerenzer's simple rules](https://www.foundingfuel.com/article/gigerenzers-simple-rules/) - なぜ私たちはこのようなシンプルなヒューリスティクスに頼っているのか：「実際の世界では、論理的理性だけではうまくいきません。生態的理性が必要です—つまり、不安定で動的な環境において、私たちが望むものを得るために役立つ思考方法です。これは、私たちの直感を活かし、シンプルで頑健なルールを用いることによって実現されます。

- [The Best Way to Make Intelligent Decisions](https://fs.blog/mental-models/#military_and_war) - 109のモデルを集めたコレクション。

- [Mental Models I Find Repeatedly Useful](https://medium.com/@yegg/mental-models-i-find-repeatedly-useful-936f1cc405d#.qb3gkdmtk) - 大きなメンタルモデルのまとめ。本書の基礎となったものです。

- [Tools for better thinking](https://untools.co) - 🆓「問題解決、意思決定、システム理解を助けるための思考ツールとフレームワークのコレクション。

- [A Few Rules](https://www.collaborativefund.com/blog/a-few-rules/) - どこかで目にしたであろう、いくつかの知恵を形式化したリスト。

- [Awesome Concepts](https://github.com/lukasz-madon/awesome-concepts) - 法則、原則、メンタルモデル、認知バイアス。

- [UX Core](https://keepsimple.io/uxcore) - 105の認知バイアスについて、簡単な説明と、短く詳細な例を示す

### 説明

- [Hanlon's razor](https://en.wikipedia.org/wiki/Hanlon%27s_razor) - 「悪意をもって行動したとみなすべきでない。それ以上の説明が可能な無知であるならば。」私は [Occam's Razor](https://en.wikipedia.org/wiki/Occam%27s_razor) の一番好きな味であり、政治的な状況において過剰なパラノイアを和らげるための重要な戒律である。

- [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean) - あるいは、強い喜びと野心の期間が過ぎた後、徐々に元の普通の状態に戻っていくこと。

- [Locus of control](https://en.wikipedia.org/wiki/Locus_of_control) - 「人々が自分の人生の出来事の結果に対して、外部の力に支配されないという感覚を持っている程度」に関するフレームワーク。

### 問題解決

- [First principles and asking why](https://www.theengineeringmanager.com/growth/first-principles-and-asking-why/) - 「抽象的な思考能力は、私たちの判断力を弱める可能性がある。なぜなら、それらの抽象概念は、かつてほど真実ではないかもしれないからである。また、類推の思考能力も、同様に危険な進化の性質であり、二つの実際には関係のないものを比較して、前提を立てることを意味する。」 [Elon Musk explains it better](https://www.youtube.com/watch?v=NV3sBlRgzTI)。

- “People who excel at software design become convinced that they have a unique ability to understand any kind of system at all, from first principles, without prior training, thanks to their superior powers of analysis. Success in the artificially constructed world of software design promotes a dangerous confidence.” - A reminder of the needs of humility and recognition of limits in our industry, [from a panel on the Moral Economy of Tech](https://idlewords.com/talks/sase_panel.htm).

- [The Art of Powerful Questions - Catalyzing Insight, Innovation, and Action](https://www.betterevaluation.org/sites/default/files/the-art-of-powerful-questions.pdf) - 「リーダーは、問題解決のために報酬を受けているのではなく、創造的な思考を促進していると信じている。」

### システム思考

- [To Get Good, Go After The Metagame](https://commoncog.com/blog/to-get-good-go-after-the-metagame/) - 「十分に興味深いゲームには、それの上に存在するメタゲームがある。これは、ゲームについてのゲームである。しばしば『メタ』と呼ばれる。(...) メタは、単調な基礎知識を習得した後に得られるものである。しかし、現在のメタの状態を観察することで、あなたが学ばなければならない単調な基礎知識が明らかになる。」

### ブレインストーミング

- [Yes, and…](https://en.wikipedia.org/wiki/Yes,_and...) - 「即興コメディにおけるルール（…）。ビジネスやその他の組織においても、ブレインストーミングプロセスの効果を高め、効果的なコミュニケーションを促進し、アイデアの自由な共有を奨励する原則として用いられる。」

- [Strong Opinions, Weakly Held — a framework for thinking](https://medium.com/@ameet/strong-opinions-weakly-held-a-framework-for-thinking-6530d417e364) - 「直感に従って結論を導き、いかに不完全でも（これは「強い意見」の部分）。その後（これは「弱く保たれている」部分）自分を間違っていることを証明する。」

### 行動

- [Programmer Interrupted](http://blog.ninlabs.com/2013/01/programmer-interrupted/) - 開発者に中断を加えると、研究で示されるように、深刻な影響がある：1. 作業を再開するには15分必要；2. プログラマは1日で1回だけ、2時間の無断中断セッションを獲得する；3. 最も悪い中断のタイミング：編集、検索、理解の際に。

- “People make bad choices if they're mad or scared or stressed.” - [Disney's Frozen](https://web.archive.org/web/20250123004447if_/https://i.pinimg.com/originals/b5/17/97/b5179700050b96f91f63e086e053b5ee.jpg).

- [I coached CEOs, founders, VCs and other executive: These are the biggest takeaways](https://leowid.com/2019-2) - 抜粋：「私たちはすべて、大きな複雑な感情の袋であり、周囲を歩いている。権力とは、『ノー』を受け入れる能力である。焦点を管理する能力、時間の管理ではなく。」

- [Intellectual Humility Cheat Sheet](https://web.archive.org/web/20200526135036/https://images.squarespace-cdn.com/content/v1/53419b80e4b0cccdfc3bbcf8/1579371627532-SANUEQ1REPX09L8NE1XM/ke17ZwdGBToddI8pDm48kI9Q46LYBJG1wKj9b7EvhSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmWp-RWlGnWD_Yv5axNBE_gjfhPXbI2t7MOi3WVleCqN9URFC-c33mY-I6dtTBVWXC/ih-cheat-sheet-v2.jpg) - 「重要なことについて、自分の意見を変える準備ができており、いつなら変更すべきかを判断できる状態にあること。」

- [Avoiding Intellectual Phase Lock](https://books.google.com/books?id=__CnDwAAQBAJ&lpg=PT21&dq=intellectual%20phase%20lock%20Frank%20Dunnington&pg=PT21#v=onepage&q=intellectual%20phase%20lock%20Frank%20Dunnington&f=false) - 重要な結果を予想しすぎることで、人間は自然と微細な確認バイアスを導入する。IPLに対抗するため、無知なランダムな要素を導入して、システムを目的に合わせる試みを抑制することができる。つまり、自分を成功に騙すことを避ける。

- [The six ways to influence people](https://www.bakadesuyo.com/2013/06/robert-cialdini-influence/) - ビジネスプロフェッショナルを説得するための6つの普遍的な影響の原則：相互性、一貫性、社会的証明、人々に好意をもたらす、権威、および希少性。

- [On Bullshit](http://ruby.fgcu.edu/courses/twimberley/EnviroPhilo/bullshit.pdf) - この [HN comment](https://news.ycombinator.com/item?id=23147605) はこの概念を完璧に説明している。「嘘や詐欺とは異なり、嘘は目的のために使われるが、フランクファurtは、真実がそもそも重要でない場合の、潜在的に誤った発言を『バッスル』と定義した。バッスルは、自信、知性、説得力のある論理の『表面的な見せ方』を特徴としている。実際に真実かどうかは、それ以上ではない。」

## チームダイナミクス

チーム内の関係、協働、対立、意思決定に関する資料です。

- [How to Celebrate the Small Wins](https://web.archive.org/web/20190714235605/https://medium.dave-bailey.com/how-to-celebrate-the-small-wins-4a03004a1816?gi=90c401bc3fd1) - 私の学び：「ゆっくりと進むことの喜びを祝い、重要なマイルストーンを探索する。」

- [Team Leader Venn Diagram](https://larahogan.me/blog/team-leader-venn-diagram/) - 「責任の共有に関する共有理解を得るためのツール。」

- [When your coworker does great work, tell their manager](https://jvns.ca/blog/2020/07/14/when-your-coworker-does-great-work-tell-their-manager/) - 公開された見えない業務を強調することで、マネージャーは部下が行っている努力を認識できる。ただし、その場合、同僚に緊張をもたらす可能性もあるため、まず「それは大丈夫ですか？」と確認するべきである。

- [Eye Candy QA](https://techreflect.net/2020/01/05/eye-candy-qa-2005-2011/) - 著者のアップルでの勤務経験の再話：「ジョン・ルッチが私の上司だった。(...) ジョンは、私たちにすべてを共有してくれた。『チームに共有しないでください』というような情報も含めて。私たちは彼が信頼している人間だったため、それは自然なことだった。それは、あなたが何か大きなものに参加していると感じさせた。」あるいは、一部のオープンな秘密を共有することで、仲間との信頼を強化する理由。

- [The Apollo Syndrome](https://www.teamtechnology.co.uk/tt/t-articl/apollo.htm) - メリディス・ベリン博士が発見し、1981年の [book on Management Teams](https://openlibrary.org/isbn/1856178072) で公開された現象。非常に能力のある個人たちのチームが、集団的に不十分なパフォーマンスを示す可能性がある。

- [A conversation with Elon Musk about Starship](https://youtu.be/cIQ36Kt7UVg?t=203) - 非常に優れた貢献者を擁するチームでは、誰もが首席エンジニアである：あなたは現状を疑い、他の部門の制約を問うことが期待されます。こうした環境により、知的なエンジニアは、そもそも存在すべきでないものに最適化を施すという険悪なジレンマから逃れることができます。これはアポロ症候群の治療かもしれない。

- [Symptoms of Groupthink](https://web.archive.org/web/20210925184712/https://courses.washington.edu/psii101/Powerpoints/Symptoms%20of%20Groupthink.htm) - 過信、狭い視野、および一貫性の圧力は、グループを誤導させます。

- [It's Not Sabotage, They're Drowning](https://shermanonsoftware.com/2019/11/15/its-not-sabotage-theyre-drowning/) - ある程度の反発は、意図的な悪意の行為と解釈すべきではなく、人々が自分自身を救おうとして、救いの舟を沈めようとする行動であると捉えるべきです。

- “Community already exists, you just create a communication platform for it” ([source](https://news.ycombinator.com/item?id=21828666)) - Or why trying to create a community from the ground up might not be the right way of looking at things: a better and more subtle strategy would be to empowers the already existing channels and make them visible.

## エンジニアリング

管理職が技術・品質・複雑性を扱うための資料です。

### 技術に強いエンジニアリングマネージャー

You shouldn't spend your time coding. Leave that to the engineers: your value lies elsewhere now. But does that means you must forget all things technical? The answer is an astounding *NO*. Here are some arguments:

- [Do engineering managers need to be technical?](https://increment.com/teams/do-engineering-managers-need-to-be-technical/) - はい。「今後30年間のマネジメントトレンドを展望すると、いくつかのことは確実に見える：マネージャーは技術的であるべきであり、技術の定義は続けるだろう。」

- [If Your Boss Could Do Your Job, You're More Likely to Be Happy at Work](https://archive.ph/J2vlo#selection-1025.8-1025.64) - 「仕事の満足度に関わる要因として、職種、教育レベル、勤務年数、業界など多くの要因が重要であることは確かだが、それらの要因は、上司の技術的スキルと比べて、まったくもって重要性に及ばない。」

- “The best managers I met tended to be those that if the circumstance required it, could do the job of those two levels below.” ([source](https://news.ycombinator.com/item?id=23891984)) - Another way of putting it: managers needs domain knowledge and to know the work their reports do.

- “Over the years we have developed the policy that it is important for the supervisor to thoroughly know and understand the work of his group.” ([source](https://news.ycombinator.com/item?id=20683609)) - This quote is [from David Packard](https://openlibrary.org/isbn/0887307477) (HP co-founder), decades before current [management fad](https://en.wikipedia.org/wiki/Management_fad).

### システムの複雑性

エンジニアリング組織とチーム運営に関する資料です。

- [Second-system effect](https://en.wikipedia.org/wiki/Second-system_effect) - 「小さな、洗練された、成功したシステムの傾向は、過剰に設計された、膨らんだシステムに置き換わる。」

- [Living with Complexity, by Donald A. Norman](https://openlibrary.org/isbn/0262014866) - ここで学ぶのは、[Tesler's law of the conservation of complexity](https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity)に基づき、「システムの総合的な複雑性は一定である：人間の相互作用をシンプルにすれば、その背後にある隠れた複雑性は増加する。システムの一部をシンプルにすれば、その他の部分はより複雑になる」とテスラーが述べていること。

- [The Efficiency-Destroying Magic of Tidying Up](https://flocrivello.com/the-efficiency-destroying-magic-of-tidying-up/) - 「効率性は散漫に見えるが、美しさは効率性が低い傾向にある。」これは、時には単に [the messiness of the world](https://github.com/kdeldycke/awesome-falsehood) を受け入れることを思い出させる。

- [I try to optimize my code around reducing state, coupling, complexity and code, in that order](https://news.ycombinator.com/item?id=11042400) - システムの堅牢性を高めるために、どの優先順位を最初に取り上げるべきか、エンジニアの視点から述べたもの。

- [SpaceX's 5-Step design and manufacturing process](https://www.youtube.com/watch?v=t705r8ICkRw&t=13m30s) - 「1. 要件をもっと賢くする；2. 部分を削除する；3. 簡素化または最適化する；4. サイクル時間を短縮する；5. 自動化する。」 See [full transcript](https://news.ycombinator.com/item?id=28517976)。

### 技術

- [Choose Boring Technology](http://boringtechnology.club) - 「単に理解されている、という意味での『つまらない』。

- [Choose Well-known Technology](https://news.ycombinator.com/item?id=23445535) - 上記のアドバイスを言い換えたもの。「技術を選択する際には、1. あなたが熟知しており、すぐに生産性を発揮できるもの；2. 5〜7年後には確実に存在し、10〜15年後も続くもの；3. あなたが、次の15人のエンジニアを採用できると安心できるもの。」

- [Industry Data Models](https://web.archive.org/web/20220330034214/http://databaseanswers.org/data_models/) - バリー・ウィルズが25年間集めた、あらゆるビジネスプロセスを表すデータベーステンプレートの大きなリスト。

- “Lots of people make the mistake of thinking there's only two vectors you can go to improve performance, high or wide. High - throw hardware at the problem, on a single machine. Wide - add more machines. [There's a third direction you can go, I call it *going deep*.](https://news.ycombinator.com/item?id=8902739)”

- [You need to be this tall to use (micro) services](https://news.ycombinator.com/item?id=12509533) - ハイプを追うべきではない。まだ。マイクロサービスは、あるインフラと組織規模を超えて初めて価値をもたらす。これは、マイクロサービスを導入する前に注目すべきことのリスト。

- [LEGO blocks and organ transplants](https://www.johndcook.com/blog/2011/02/03/lego-blocks-and-organ-transplants/) - 「ソフトウェアコンポーネントをLEGOブロックに例えるのは、数十年にわたって続いてきた。(...) 2つのソフトウェアシステムを統合するのは、LEGOブロックを組み立てるのと比べて、心臓移植に近い。」

- “Software development is more akin to the product design and development phase of industrial production than to the manufacturing.” ([source](https://accu.org/bookreviews/1998/kloss_1668/)) - This quote is from a review of [*Superdistribution - Objects as Property on the Electronic Frontier*](https://openlibrary.org/isbn/0201502089), in which the creator of Objective-C was advocating in the 90's for a new economic framework that rewards creation of components in proportion to their use. But software production is not like manufacturing of widgets in a factory. [A (software) object is not an (hardware) widget](https://x.com/kdeldycke/status/1697974273623675254).

### エンジニアリングプラクティス

- [Software Engineering's Greatest Hits](https://www.youtube.com/watch?v=HrVtA-ue-x0) - 科学的方法がソフトウェア開発の実務と出会い、私が得た教訓：最も良い指標はコード行数の減少であり、10倍のエンジニアは存在しない、無駄な設定オプションが多い、ペアプログラミングはドメイン知識の移転に向けられ、ハッカソンは長期プロジェクトを生み出さない。

- [Code reviews at Google](https://github.com/google/eng-practices/blob/master/review/reviewer/speed.md#why-should-code-reviews-be-fast-why) - 「コードレビューはなぜ速いのか？(...) チームが製品を共同で作成する速度を最適化するため、個人がコードを書く速度を最適化するためではない。」

- [Google Engineering Practices](https://google.github.io/eng-practices/) - コードレビューの実施方法と提出方法を説明。

- [Embedded Rules of Thumb](https://embeddedartistry.com/blog/2018/04/26/embedded-rules-of-thumb/) - 埋め込みデバイス開発中に真実に近い概算を提供するためのガイドラインとヒューリスティクス。一般的なソフトウェアプロジェクトにも適用される。

- [How to Misuse Code Coverage](https://web.archive.org/web/20180508120159/http://www.testingeducation.org/BBST/foundations/Marick_coverage.pdf) - 「テストスイートの一部が、カバレッジが検出できるような弱さを持っているならば、カバレッジが検出できないような弱さも持っている可能性が高い。」つまり、カバレッジレポートの大きな価値は、あなたがテストスイートを書いた際に無意識に忘れてしまったことを教えてくれる（[source](https://news.ycombinator.com/item?id=28678098)）。

### 技術的負債

- [Tech Due Diligence Calculator](https://decodingvc.gitbooks.io/p9-startup-tech-due-diligence-calculator/content/) - テーマごとの質問リスト。技術やエンジニアリングチームの構築方法を理解するためのヒントであり、赤信号を強調するのに役立つ。

- [Technical Debt Is Like Tetris](https://web.archive.org/web/20190313164624/https://medium.com/@erichiggins/technical-debt-is-like-tetris-168f64d8b700) - 技術的負債の別の説明：「このような状況は、製品コードに技術的負債を生み出します。テトリスの内部にある埋もれたギャップは、技術的負債を表しています。（…）技術的負債を返済することで、競争力を維持し、ゲームに残ることができます。

- [Technical debt as a lack of understanding](https://daverupert.com/2020/11/technical-debt-as-a-lack-of-understanding/) - 「問題は『コードを理解に合わせて再構成しない』ことにあります。（…）組織的に、速度と人員の入れ替えにコストがかかる。優れた人材は、数回の無意味なやり取りの後に去ってしまいます。

- [The Framing of the Developer](https://www.amazingcto.com/develop-for-impact-not-for-backlog/) - バックログを中心としたフレームワークが、失敗は開発者のパフォーマンス不足に帰因され、成功はPMのビジョンの完全な実現として称賛されるという不均衡を生み出します。しかし「技術は貸し出しの銀行である」といえ、技術的負債は製品負債と呼ばれるべきです。「製品が機能を早く実現するために信用を借りたため、その返済として、時間を投資して整理する必要がある」というのです。」代替案は「現代の企業は、影響のフレームワークが必要です。この視点では、成功は影響によって定義されます。

- [Goodbye, Clean Code](https://overreacted.io/goodbye-clean-code/) - 「上司が、1対1の会話に私を招待し、丁寧に私の変更を元に戻すよう依頼しました。私は驚きました。古いコードはごみのような状態でしたが、私のコードはきれいでした！（…）今では、私の『リファクタリング』が2つの点で災難だったことに気づきました：そのコードを書いた人とは話さなかったこと、そして私のコードは要件変更の柔軟性を犠牲にして、重複を減らしたのです。

## リモートワーク

- [The Surprising Traits of Good Remote Leaders](https://www.bbc.com/worklife/article/20200827-why-in-person-leaders-may-not-be-the-best-virtual-ones) - 「長年、野心的な従業員が上層部に進出したのは、自信、知性、外向性によるものでしたが、オンラインではそれらだけでは足りません。なぜなら、それらは単に仮想リーダーシップに変換されないからです。（…）代わりに、組織性、信頼性、生産性を持つ従業員が仮想チームのリーダーシップを握ります。」 はこう述べています。「仮想環境では、『言う』ことから『やる』ことに重点が移ります。 [source paper](https://link.springer.com/article/10.1007/s10869-020-09698-0)

- [Things to look for when hiring remote workers](https://news.ycombinator.com/item?id=17022563) - 「1. 雇用する国における労働法に従う必要がある；2. 人をフルタイムで雇うには、多くの国でその国に法的実体を持つ必要がある；3. 私たちが最も関心を持つ国を優先する；4. 各チームで健康的な時差重なりを保つ。』

- [Managing Remote Teams - A Crash Course](http://klinger.io/post/180989912140/managing-remote-teams-a-crash-course) - リモートチームを立ち上げるための、簡単なルールとプロセスのまとめ。

- [GitLab's Guide to All-Remote](https://about.gitlab.com/company/culture/all-remote/guide/) - 「GitLabは世界で最も完全にリモートで運営されている企業です。」これはどういう意味か、そしてどのように機能しているか。

- [Asynchronous Communication: The Real Reason Remote Workers Are More Productive](https://web.archive.org/web/20250506052542/https://async.twist.com/asynchronous-communication/) - 「リモート勤務者は、オフィス勤務者よりも生産性が高い。

- [A guide to distributed teams](https://increment.com/teams/a-guide-to-distributed-teams/) - 高度に効果的な分散チームを構築するための、多くの要件のまとめ。

- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - リモート勤務に関するリソース。包括的に、求人サイト、コワーキングスペース、そして文化を採用している企業のリストを含む。

## 会議

効果的な会議、1対1、スタンドアップに関する資料です。

- [Dear Manager, You're Holding Too Many Meetings](https://archive.ph/1P4FQ) - 「会議を40％削減したことで、従業員の生産性は71％向上しました。これは、従業員がより自主性と権限を感じたためです。スケジュールが上司のものではなく、従業員自身がタスクリストを所有し、自己責任を負ったためです。

- [How to have great meetings, according to 200 scientific studies](https://qz.com/work/1713662/how-to-have-great-meetings-according-to-200-scientific-studies/) - 会議を正しく行うための道筋。

- [Wadge's Law (of Meetings)](https://billwadge.wordpress.com/2019/03/24/laws-of-the-universe-and-teaching/) - 「すべての公式会議の前に、小さな、限定的な、非公式な会議があり、その中で重要な決定が下されます。

### 1対1

エンジニアリング組織とチーム運営に関する資料です。

- “1on1s are the managers Swiss army knife” ([source](https://news.ycombinator.com/item?id=22341739)) - Another advice from the source: make them walk'n'talks.

- [Questions for our first 1:1](https://larahogan.me/blog/first-one-on-one-questions/) - マネージャーが持つ、高レベルの質問リスト。

- [1 on 1 Meeting Questions](https://github.com/VGraupera/1on1-questions) - 多くの質問が会話のスタートとして素晴らしいものであり、一部は明らかに悪いアイデアであるが、それでも非常にインスピレーションの源であり、慎重に選ぶべきである。

### スタンドアップ

エンジニアリング組織とチーム運営に関する資料です。

- [Your daily standups should be async. Here's why](https://web.archive.org/web/20200515171636/https://www.cadencework.com/blog/async-standups.html) - 「毎日、リアルタイムの会議はリモートチームにとって現実的ではない」というのは、最も現実的な理由であるかもしれない。

- [The Good, the Bad and the Ugly Standup](https://kristoff.it/blog/good-bad-ugly-standup/) - 著者は、スタンドアップの3種類の形式を経験した後、チームに合った1つに落ち着き、次のように結論づけた。「良い会議の細部は微妙であり、人工的な美しさの基準を追求することは、必要となる実験を阻害し、醜い均衡から改善を妨げる。

- [We Cancelled Standups and Let The Team Build. Here's What Happened…](https://www.usehaystack.io/blog/we-cancelled-standups-and-let-the-team-build-heres-what-happened) - 長時間の毎日のステータス更新会議（スタンドアップを装っている）に疲弊したチーム。このような偽のスタンドアップを削除することで、チームは再び前進した。

## 職場環境

エンジニアリング組織とチーム運営に関する資料です。

- [The impact of the 'open' workspace on human collaboration](https://sci-hub.st/https://royalsocietypublishing.org/doi/full/10.1098/rstb.2017.0239) - 開けた空間のオフィスは、直接的な協力の促進を減少させる

- [Noise, Cognitive Function, and Worker Productivity](https://joshuatdean.com/wp-content/uploads/2020/02/NoiseCognitiveFunctionandWorkerProductivity.pdf) - 10dBの増加は生産性を約5％低下させる

- [The Elves Leave Middle Earth – Sodas Are No Longer Free](https://steveblank.com/2009/12/21/the-elves-leave-middle-earth-%E2%80%93-soda%E2%80%99s-are-no-longer-free/) - 会社が無料のスイーツを提供をやめた。エンジニアたちは非常に不満を示したが、それはスイーツだけであって、彼らが負担できる範囲内だった。しかし、本当に提供されたのはスイーツではなかった。スイーツは、その会社の危機を示すカナリーマン、最も優れたエンジニアたちの離脱を引き起こした

## プロダクトマネジメント

製品の発見・戦略・設計とPM連携に関する資料です。

- “You're the broker for a lot of unstructured information and have to fend off all kinds of disruptive influences to land even close to where you're trying to go.” ([source](https://news.ycombinator.com/item?id=19050555))

- [Awesome Product Management](https://github.com/dend/awesome-product-management) - 参考文献。すべての欠落した要素は、以下に見つかる

- [Open Product Management](https://github.com/tron1991/open-product-management) - リソース、インタビュー、ケーススタディ、サンプル製品・プロジェクト、コミュニティ、オープンソースツール、製品マネジメントに関する無料・有料サービス。技術者向けにこの分野を学ぶためのもの

- [Things Many People Find Too Obvious To Have Told You Already](https://archive.ph/vH4D1) - 技術企業とその環境に関するヒューリスティクスの集合

- [The Heilmeier Catechism](https://www.darpa.mil/work-with-us/heilmeier-catechism) - DARPAが大きなリスクを取って大きな報酬を生み出す研究プログラムを評価するために用いた、シンプルな質問のセット

- [Akin's Laws of Spacecraft Design](https://web.archive.org/web/20250528080513/https://spacecraft.ssl.umd.edu/akins_laws.html) - 宇宙プログラム管理に関する多くの知見

- [How to exit vim, the Product Manager way](https://github.com/hakluke/how-to-exit-vim/blob/master/README.md#the-product-manager-way) - 基本的なレベルと経験的なレベルの比較についてのユーモアが混在した、その中には真実の成分も含まれている

### PMの採用

エンジニアリング組織とチーム運営に関する資料です。

- [What Everybody Ought To Know About The Product Manager Case Interview](http://www.venturegrit.com/what-everybody-ought-to-know-about-the-product-manager-case-interview/)

### プロダクトマーケットフィット

エンジニアリング組織とチーム運営に関する資料です。

- [I wasted \$40k on a fantastic startup idea](https://tjcx.me/posts/i-wasted-40k-on-a-fantastic-startup-idea/) - ユーザーが支払いたいと思うような製品を構築する話。ユーザーに価値を提供することは、慈善行為であり、会社に価値を提供することは、詐欺である。あなたの目標は、誰もが利益を得られるようなプラスサムの交換を構築すること。この教科書では、ビジネス計画は、このシンプルな質問から始まる：あなたはどのようにして自分と会社に価値を提供するか？

- [David Rusenko - How To Find Product Market Fit](https://www.youtube.com/watch?v=0LNQxT9LvM0) - 「ウェブリの開発が、今日のウェブ上で最も人気のあるウェブサイト作成・ホスティングサービスの一つとなった物語を詳細に説明している。」

- [Fundamentals of Product-Market Fit](https://www.holloway.com/s/rvc-fundamentals-of-product-market-fit) - 製品市場適合という概念の完全な概要：何が製品市場適合であり、それを測定する方法

### 製品戦略

エンジニアリング組織とチーム運営に関する資料です。

- [Sustainable Sources of Competitive Advantage](https://www.collaborativefund.com/blog/sustainable-sources-of-competitive-advantage/) - 競争他社よりも速く学習できる能力、顧客との共感力、より効果的なコミュニケーション、より多くの失敗を許容できる意志、より長い期間を待つ意志

- [Coglode: bite-size behavioral research analysis](https://www.coglode.com) - 主に行動洞察を用いて、製品、デザイン、計画の戦略と戦術を構築するためのもの

- [“Why does the tire company rate restaurants”](https://mobile.x.com/trevmckendrick/status/1218748974321954816) - 補完的ビジネスを調査するべきであるという、素晴らしい例

- [Laws of Tech: Commoditize Your Complement](https://www.gwern.net/Complement) - 前のアドバイスをさらに進めたもので、独占市場を統合するための積極的な戦略を詳細に説明している

- Windows Vista as a prime example of a [sacrificial lamb product](https://x.com/SwiftOnSecurity/status/851861076429991937): a massive unpopular re-architecture required to pave the way for future innovative release. That's the cautionary tale of why you should be ready for intense criticism and adversity, if by chance or fate your wander down the path of monumental changes in a business software.

- Talking about Vista, Microsoft found out following its unsuccessful launch that [the #1 bug predictor is not technical, it's organizational complexity](https://augustl.com/blog/2019/best_bug_predictor_is_organizational_complexity/).

- [Osborne effect](https://en.wikipedia.org/wiki/Osborne_effect) - 「顧客が、企業が未来の製品を急に発表した結果、現在のすぐ廃れてしまう製品の注文をキャンセルまたは延期するという社会的現象。」これは、急なマーケティング行動の価値である

- [Reverse Engineering A Successful Lifestyle Business](https://web.archive.org/web/20230129184848/http://www.toomas.net/2017/07/18/reverse-engineering-a-successful-lifestyle-business-heres-everything-ive-learned-from-reading-indiehackers-com/) - ライフスタイル起業家をターゲットにしているが、顧客関係、価格設定、製品マーケティングに関する参考書からの素晴らしい引用が満載

- [The Atlassian Syndrome](https://x.com/maikzumstrull/status/1309497246946406400) - あなたの組織は、Atlassianの製品に終着するだろう。「そのビジネスモデルは：1. 顧客および潜在顧客から要件リストを収集し、2. その製品がどんなに馬鹿げたものでも、すべての項目を満たすようにする」

- “Linear roadmaps are misleading” ([source](https://x.com/PavelASamsonov/status/1296818042928861184)).

### ユーザー中心設計

エンジニアリング組織とチーム運営に関する資料です。

- [The product roadmap is dead: welcome to the age of problem roadmaps](https://medium.com/product-managers-at-work/the-product-roadmap-is-dead-welcome-to-the-age-of-problem-roadmaps-7c7745ac8ae0) - 「あなたの問題に恋するのではなく、あなたの解決策に恋する」

- [Kasparov's Law](https://web.archive.org/web/20220120220730/https://curatedintelligence.wordpress.com/2017/10/20/kasparovs-law/) - 弱い人間＋機械 > 機械 > 強い人間

- [The Psychology of Design](https://growth.design/psychology/) - 認知バイアスや設計原則の広範なリスト。例とヒントを交えて、あなたの製品やUXを最適化するためのアドバイス

### プロダクトマーケティング

エンジニアリング組織とチーム運営に関する資料です。

- [Marketing for Engineers](https://github.com/LisaDziuba/Marketing-for-Engineers) - マーケティング活動の立ち上げや実務的なタスク解決に役立つリソースの多数

- [How the biggest consumer apps got their first 1,000 users](https://archive.ph/DggAq) - 世界で最も大きなアプリがどうやって始まったか：ユーザーに直接アプローチ（オンラインとオフライン）、FOMOや口コミを活用し、まずコミュニティを構築し、その後メディアに取り上げることで成長した

## プロジェクト管理

仕様、見積もり、進捗、デリバリーの管理に関する資料です。

仕様、見積もり、進捗、デリバリーの管理に関する資料です。

- [Let's have no managers, instead of managers with no engineering experience](https://medium.com/hackernoon/lets-have-no-managers-instead-of-managers-with-no-engineering-experience-e8b7cd29d398) - タイトルは誤解を招く。記事の主張は：すでにプロダクトマネージャーとスクラムマスターがいるなら、プロジェクトマネージャーは不要である

- [Best project management practices in 2018?](https://news.ycombinator.com/item?id=16377523) - 解決策は一つもない

- [Strategies for long Projects](http://benbrostoff.github.io/2019/09/28/long-projects.html) - 無限の無理な希望；日々の進捗記録；複利投資；時間予算の設定

- [Developers can't fix bad management](https://iism.org/article/developers-can-t-fix-bad-management-57) - 「なぜ多くのソフトウェアプロジェクトが失敗するのか？ソフトウェア開発は、既存の工場を運営するのではなく、新しい工場を作ることに近い。…ソフトウェア開発は、多くの未知の期間のタスクから成り立っている。この根本的に予測不可能な性質は、従来の管理手法の予測的計画に特に不適している。』

### 仕様

- “Walking on water and developing software from a specification are easy if both are frozen.” Edward V. Berard - [Essays on object-oriented software engineering](https://openlibrary.org/isbn/0132888955).

- [The art of destroying software](https://www.youtube.com/watch?v=Ed94CfxgsCA) - グレッグ・ユンが要件の変動に対して良い対応方法を説明した：最初からコードを削除できるように最適化し、コードの構造を設計して、そのどの部分も1週間分の開発量を超えないようにする。これにより、どの部分も1週間以内に再構築できるようになる。

- [Requirements volatility is the core problem of software engineering](https://stackoverflow.blog/2020/02/20/requirements-volatility-is-the-core-problem-of-software-engineering/) - 「まず、変化が避けられないということを受け入れる。…その結果、ソフトウェアは終了されない、ただ放棄されるだけである。…つまり、ソフトウェア製品は、まったく完璧に満足できるものはない。』

### 見積もり

エンジニアリング組織とチーム運営に関する資料です。

- [Don't (guess)timate your projects, forecast with confidence](https://www.reaktor.com/blog/forecasting-method/) - 「見積もりに多くの時間を費やすのは、その結果が有用に感じられるが、実際には非常に不正確で、ビジネスにとってほとんど価値をもたらさないことが多い。」最も良いのは測定と予測である。

- [Dear Startup: You have no idea how much that costs](http://kyleprifogle.com/dear-startup/) - 「何がどれくらいの期間かかるかについては、まったく分からない。」ここには [trick to handle expectation of unreasonable estimates](https://news.ycombinator.com/item?id=21069178) がある。

- [Escalation of commitment](https://en.wikipedia.org/wiki/Escalation_of_commitment) - つまり、損失コストのバイアス、またはなぜ悪いプロジェクトに無理に投資し続けるのかの合理的な説明

- [Who are you trying to impress with your deadlines?](https://archive.ph/9Hq7N) - 「ある企業では、その納期は絶対に変えられないものであり、納期を逸らすとほぼ火事に相当する。そのとき、問題が始まる。』

- [Apple Aperture: Senior QA](https://techreflect.net/2019/12/10/aperture-senior-qa-2004-2005/) - 納期に近づくプロジェクトの管理方法の誤り：「完成した機能を削除し、人々に怒りを向け、人々を精神的崩壊に至るまで働かせる。そして、彼らは素晴らしいアイデアを思いついた：他のチームから100人以上のエンジニアを強奪すれば、プロジェクトは魔法のように納期に間に合うだろう。』

- [Robert "Uncle Bob" Martin talk about professionalism in software development](https://youtu.be/LmRl0D-RkPU?t=3202) - 唯一の誠実な見積もりは「分からない」ということ。しかし、リスクの形状を示すような確率評価を構築できる。これはPERTと似ており、活動は [optimistic, pessimistic and most-likely time](https://en.wikipedia.org/wiki/Program_evaluation_and_review_technique#Time) で制限される。もしマネージャーが範囲を答えとして取らないなら、その罠に陥らないようにする。すでに可能な限り努力していると伝える。そしてマネージャーは、非常に異質な行動を取らなければならない：リスクを管理する。それがマネジメントである。

- [Why software projects take longer than you think: a statistical model](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html) - 「開発者が中央値を正確に評価するという直感が確認されたが、平均値は明らかに高い。』

- [Developers spend most of their time figuring the system out](https://lepiter.io/feenk/developers-spend-most-of-their-time-figuri-9q25taswlbzjc5rsufndeu0py/) - 「現在のシステムについて手描きされた図は、信念である。決定は決して信念に基づいてはならない。エンジニアリングでは決して。…ソフトウェアは非常に文脈に依存しているため、特定の問題を予測することはできない。問題のクラスだけを予測できる。」これがソフトウェアプロジェクトの見積もりが難しい理由である：開発者の主な活動は、システムがどのように構築されているかという前提を長期的に導き出すプロセスである。

- [Software effort estimation is mostly fake research](https://shape-of-code.com/2021/01/17/software-effort-estimation-is-mostly-fake-research/) - 「ナサのデータセットには93行（誤りではない、10のべき乗が欠けているわけではない）、COCOMOには63行、Desharnaisには81行、そして…中国データセットには499行がある。』

### チケット

- [There Are No Bugs, Just TODOs](https://almad.blog/essays/no-bugs-just-todos/) - 問題トラッカーは、所有権、並び順、状態、タスク分解、積極的な終了を物質化する必要がある。優先度、チケットタイプ、ソフトウェアバージョン、深刻度、長期タスクは反パターンである。

### デリバリー

- [How I ship projects at big tech companies](https://www.seangoedecke.com/how-to-ship/) - 「Shippingは、企業内の社会的構造である。つまり、プロジェクトが「送り出された」とは、あなたの会社の重要な人物たちがそれを「送り出された」と信じているときである。」これは、次のパフォーマンス評価サイクルの上層管理の視認性を最適化するために行われる、デリバリーの暗黒面である。

## アジャイル

- [The SAFe Delusion](https://safedelusion.com) - 関連する情報源から、偏見や関与のない視点で事実、証拠、意見を厳選してレビューし、意思決定者に情報に基づいた選択を促し、より良い結果をもたらす。

- [How Big Tech Runs Tech Projects and the Curious Absence of Scrum](https://newsletter.pragmaticengineer.com/p/project-management-in-tech) - この記事には、企業のステレオタイプ、資金調達モデル、主なエンジニアの役割、および中心的な手法についての興味深い表が含まれている。

- [Why do some developers at Google consider Agile development to be nonsense?](https://archive.ph/pSUhM) - 短期的な視点を重視するスクラムプロセスは、「特定の開発タイプに適しているように見える。特にコンサルティングや契約開発において、顧客が組織外にあり、開発を支払っているため、その顧客が開発を運営し、いつでも意思を変えることができる」という点である。それでも、Googleのエンジニアは、元の10項目のアグレッシブマニフェストに近い文化をすでに実践している。しかし、それだけである。

- [Story Points Revisited](https://web.archive.org/web/20250604004212/https://ronjeffries.com/articles/019-01ff/story-points/Index.html) - ストーリーポイントの発明者らが述べたように、ストーリーポイントはおそらく誤りである。

- [Detecting Agile Bullshit](https://web.archive.org/web/20250601171312/https://media.defense.gov/2018/Oct/09/2002049591/-1/-1/0/DIB_DETECTING_AGILE_BS_2018.10.05.PDF) - 米国国防総省が提示した、アグレッシブ開発が実際に使われているソフトウェアプロジェクトと、単にウォーターフォールまたはスパイラル開発をアグレッシブ衣で着用しているプロジェクトを区別するガイド。

- “The fundamental problem that drives most agile failures isn't in the team's execution, it's in the business' expectations. One side is signed up for incremental delivery, and one side is set up for a fixed scope and deadline and the result is misery.” ([source](https://news.ycombinator.com/item?id=20326074))

- [Failed #SquadGoals - Spotify doesn't use "the Spotify model" and neither should you](https://www.jeremiahlee.com/posts/failed-squad-goals/) - 「なぜうまくいかなかったか？1. マトリクス管理が間違った問題を解決した；2. チームの自主性に固執した；3. 協力が前提としてされた能力とされた；4. マイティカルな伝承が変更が難しいようになった。」

- [Recurring opinions or productive improvements — what agile teams actually discuss in retrospectives](https://link.springer.com/article/10.1007/s10664-016-9464-2) - 3年間のチームのリトロスペクティブ分析結果。厳しい結論：人々はすでに学んだことを忘れる傾向があり、自分たちが制御できない問題について無限に議論し続け、偏見に基づいた解釈や誤解に基づく意見を議論し続ける。

## 重要業績評価指標（KPI）

エンジニアリング組織とチーム運営に関する資料です。

- “Numerical goals set for other people, without a road map to reach the goal, have effects opposite to the effects sought.” - [W. Edwards Deming](https://openlibrary.org/isbn/0911379010)

- [SRE fundamentals: SLIs, SLAs and SLOs](https://cloudplatform.googleblog.com/2018/07/sre-fundamentals-slis-slas-and-slos.html) - もしクラウドサービス業界にいると、これらの指標は確かに優れたKPIである。

- [The 4 Worst Software Metrics Agitating Developers in 2019](https://www.gitclear.com/blog/the_4_worst_software_metrics_agitating_developers_in_2019) - ソフトウェアチームの出力に関する最悪のKPI：行数（Lines of Code）、コミット数、解決された問題数（＝「Shipping Velocity」）、コードの変更率（＝「効率」）。

## 目標と主要な結果（OKR）

エンジニアリング組織とチーム運営に関する資料です。

- [OKRs from a development team's perspective](https://archive.ph/dmASK) - OKRがバックログとどのように関連しているかについて。

- [Team Objectives – Overview](https://svpg.com/team-objectives-overview/) - OKRがあなたの会社でうまくいかない理由：1. まだ機能チームを使っているが、プロダクトチームに移行していない；2. マネージャーの目標と個人の目標が混同されている；3. 順位の決定において、リーダーが積極的な管理を放棄している。

- “One way in which I've seen OKRs used effectively is as a defense against the type of middle or upper manager who is constantly coming up with new ideas or tasks.” ([source](https://news.ycombinator.com/item?id=19550614)) - Or how OKRs can be weaponized to prevent top managers to mess with the (already established) schedule.

- [Why individual OKRs don't work for us](https://web.archive.org/web/20250218070530/https://hrblog.spotify.com/2016/08/15/our-beliefs) - Spotifyが個人のOKRの使用を終える決定。

- [Google's usage of OKRs](https://news.ycombinator.com/item?id=17492038) - OKRの評価は公開されているが、昇進には使われていない。それは、それほど真剣に取り上げられていなかった。

- [Awesome OKR](https://github.com/domenicosolazzo/awesome-okr) - 目標の測定と伝達に関するコンテンツは、非常に豊富にある。

## 研修

エンジニアリング組織とチーム運営に関する資料です。

- [Developers mentoring other developers: practices I've seen work well](https://blog.pragmaticengineer.com/developers-mentoring-other-developers/) - エンジニア同士のメンターシップの実践方法についての話。

- [What Medieval People Got Right About Learning](https://www.scotthyoung.com/blog/2019/06/07/apprenticeships/) - 「なぜアパレルツが教室より優れているか」。

- [Developer Roadmaps](https://roadmap.sh/roadmaps) - 💸 高レベルのガイドと、さまざまな実践やツールを学ぶための道筋。

## コミュニケーション

知識共有、文書、文章、発表を改善するための資料です。

知識共有、文書、文章、発表を改善するための資料です。

### 知識

エンジニアリング組織とチーム運営に関する資料です。

- [What senior engineers do: fix knowledge holes](http://www.mooreds.com/wordpress/archives/3232) - 「これは、シニアエンジニアの教科書的な定義である。問題を認識し、それを解決（徹底的に）、それを記録し、チームをレベルアップする。」

- [Chesterton's fence](https://en.wikipedia.org/wiki/Wikipedia:Chesterton%27s_fence) - 「何かを削除またはポリシーを変更する検討をしている場合、その項目が何の目的も目的も持っていないように見えるなら、まずその歴史を調査するべきである。」 ここでは、保守的なアプローチを採用したいとは思わないが、上記で述べた知識のギャップを埋めるために、それは必要である。

- [You're Not Managing a Team of Software Engineers, You're Managing a Team of Writers](https://medium.com/coaching-notes/youre-not-managing-a-team-of-software-engineers-you-re-managing-a-team-of-writers-b263d3a10cc7) - 因为ソフトウェアの書くことは「本質的に予測不可能で個人的な創造プロセスであり、確実性、予測可能性、一貫性を求める環境においては、その性質が矛盾する」ということ

### 読書

エンジニアリング組織とチーム運営に関する資料です。

- [How to Read a Paper](http://svr-sk818-web.cl.cam.ac.uk/keshav/papers/07/paper-reading.pdf) - 研究論文を読むための実用的かつ効率的な三段階の方法を示している

### ドキュメント

エンジニアリング組織とチーム運営に関する資料です。

- [What nobody tells you about documentation](https://www.divio.com/blog/documentation/) - ドキュメンテーションには4つの種類がある：チュートリアル、ハウツーガイド、説明、参照。それぞれに独自の構造と執筆方法がある

- [Flying Circus Platform - Disaster recovery](https://flyingcircus.io/doc/reference/security/disaster-recovery.html#disaster-recovery) - 24時間365日利用を目的とした重要なインフラは、 [Disaster Recovery Plan](https://en.wikipedia.org/wiki/Disaster_recovery)を必要とする。これは、予想される重大な障害についての概要を提供する文書と、システムおよびその運営チームがどのように対応するかを示す手順のセットである。ここにリンクされているものは、そのような文書の素晴らしい例であり、チームが最悪の事態に備えていることを強固な証拠としている

### 文章作成

エンジニアリング組織とチーム運営に関する資料です。

- [How to Write a Technical Paper](https://pdfs.semanticscholar.org/441f/ac7c2020e1c8f0d32adffca697bbb8a198a1.pdf) - 良い技術論文を書くためのガイドラインを、典型的なジャーナル発表の形で提示している

- [Learning Technical Writing Using the Engineering Method](https://www.cs.tufts.edu/~nr/pubs/learn.pdf) - 週に1回、執筆グループが集まる別のアプローチ。フィードバックや経験を収集するための面白いダイナミクスを提供している

- [Technical Writing Courses](https://developers.google.com/tech-writing) - このコースと学習リソースのコレクションは、あなたの技術ドキュメンテーションを向上させる目的を持っている。技術ドキュメンテ及の計画と執筆方法を学び、企業における技術ライターの役割についても学べる

- [Algorithm for writing a scientific manuscript](https://sci-hub.st/https://iubmb.onlinelibrary.wiley.com/doi/full/10.1002/bmb.20329) - 論文の準備と精緻化を導くプロセス

- [The Baldwin Formula for scientific writing: writing papers and reviews](https://people.clas.ufl.edu/jlichstein/files/Baldwin_Formula_for_writing_a_scientific_paper_and_reviewing_papers.pdf) - 科学論文を書く最も効率的な方法は、「実験を進めていながら書く」ことである

- [Ten simple rules for structuring papers](https://www.biorxiv.org/content/10.1101/088278v5.full.pdf) - 読者の情報消費の仕方を考慮し、論文の主なメッセージを伝えるために、10のシンプルなルールを提示している

- [Tips for Writing Technical Papers](https://cs.stanford.edu/people/widom/paper-writing.html) - もう一つのアドバイスセットで、技術論文におけるアルゴリズム改善の例を用いて説明している

- [Write an Excellent Programming Blog](https://speakerdeck.com/pycon2016/a-jesse-jiryu-davis-write-an-excellent-programming-blog) - 素晴らしいブログ記事を構成・スタイルで書くためのアドバイス

- [Notes on Technical Writing](https://mkaz.blog/misc/notes-on-technical-writing/) - ドキュメンテーションの執筆における「やるべきこと」と「やるべきでないこと」の効果的なリスト

### スタイル

エンジニアリング組織とチーム運営に関する資料です。

- [Please don't say just hello in chat](https://nohello.net/en/) - 適切に使用すれば、インタラクティブな書かれたメディアは、非同期コミュニケーションを可能にする

- [BLUF: The Military Standard That Can Make Your Writing More Powerful](https://www.animalz.co/blog/bottom-line-up-front/) - 「BLUFは軍事通信の略語で、「トップラインを最初に」を意味し、報告書やメールにおいて速さと明確性を強調するためのものである。

- [The Punctuation Guide](https://www.thepunctuationguide.com) - これらの特別な記号の使い方（そしてその理由）についてのシンプルな参考資料

### プレゼンテーション

- [It's time to start writing](https://alexnixon.github.io/2019/12/10/writing.html) - ジェフ・ベゾスのドットコム時代のアマゾンにおける「スライドプレゼンテーションの禁止」ポリシーについて、そして「これはスライドや読むことに関する話ではなく、思考に関する話である」ということ

- [Presentation Rules](https://web.archive.org/web/20220720230551/http://www.jilles.net/perma/2020/06/05/presentation-rules.html) - 退屈で効果のないプレゼンテーションを避け、メッセージを聴衆に届けるための16のルール

- [The Greatest Sales Deck I've Ever Seen](https://medium.com/the-mission/the-greatest-sales-deck-ive-ever-seen-4f4ef3391ba0) - 「1. 世界の大きな変化を名前をつける；2. 勝ちと負けがあることを示す；3. 未来の希望を誘う；4. 特徴を『魔法の贈り物』と呼ぶ；5. その物語が現実になる可能性を示す証拠を提示する。」

- [Some tips on public speaking](https://news.ycombinator.com/item?id=6199544) - 「もし出力の途中でブレーキをかけていると感じたら、それだけに止めてください。人々はその一時的な停止を、慎重な検討と知性として読み取るでしょう。」

## キャリア

エンジニアと管理職の成長・昇進・評価に関する資料です。

- [Work at different management levels](https://larahogan.me/blog/manager-levels/) - 管理の各レベルでの働き方の感覚を、進化した形で解体する

- [Levels of abstraction in engineering management](https://medium.com/@rvprabhu/levels-of-abstraction-in-engineering-management-6bac9410e89a) - マネージャー、マネージャーのマネージャー、組織の頭、機能の頭の間の違いについての別の視点

- [My questions for prospective employers (Director/VP roles)](https://jacobian.org/2019/apr/23/questions-for-employers-director-vp/) - 採用担当者として、あるいは上級管理職のポジションに応じて尋ねられる内容として、それらを準備しておく

- [Founder to CEO](https://docs.google.com/document/d/1ZJZbv4J6FZ8Dnb0JuMhJxTnwl-dwqx5xl0s65DE3wO8/) - 技術的創業者としてスタートアップに参加し、優れたチームを構築し、その後企業と共に成長することで、実務経験を積み、完全なCEOに成長することができる

- [How title, money and scope affect your fulfillment](https://x.com/shreyas/status/1268372416427786240) - 「優れた中堅職の人が職場を変える際、どの要素が重要か：1. 業務のタイトル 2. お金 3. 業務の範囲」

- [Amazon Wants to 'Win at Games.' So Why Hasn't It?](https://www.wired.com/story/amazon-wants-to-win-at-games-so-why-hasnt-it/) - 「どんなプロダクトマネージャーも、食料品から映画、ゲーム、Kindleまで、どんなビジネスでも移行できる。スキルセットは交換可能であり、ただ市場に特化した知識を学ぶだけである」

- “Since managers are not tied to a sector (in the way nurses or musicians are), the good ones tend to go where they are paid good money and the bad ones end up wreaking havoc where they are paid at least some money. That, also, is [Baumol](https://en.wikipedia.org/wiki/Baumol%27s_cost_disease) in action.” ([source](https://news.ycombinator.com/item?id=20448929)) - Explains how the pool of professional managers gets distributed into the various sectors of the economy.

### 昇進

エンジニアリング組織とチーム運営に関する資料です。

- [How do managers get stuck?](http://www.elidedbranches.com/2017/09/how-do-managers-get-stuck.html) - 次レベルへの昇進を阻む状況を特定する

- [The Evolution of Management: Transitioning up the ladder](https://queue.acm.org/detail.cfm?id=3350548) - 各管理レベルにおける道筋と期待を説明する

- [If management isn't a promotion, then engineering isn't a demotion](https://charity.wtf/2020/09/06/if-management-isnt-a-promotion-then-engineering-isnt-a-demotion/) - このエッセイは、なぜ管理が昇進として見なされ、その新たな権限と特権が暗黙の階層を生み出し、その結果として損失回避による悪影響が生じるかを解体する。最終的に、組織の文化を変えることが前進の唯一の道である

- [How to discipline overeager engineer](https://web.archive.org/web/20240914135841/https://workplace.stackexchange.com/questions/145709/how-to-discipline-overeager-engineer) - 優れた人材が昇進を求める。管理職は努力を認識しない。エンジニアが不満を抱き、管理職は彼を規制しようとする。両者の不器用さを示すケーススタディ

- “Most people realize by their 30s that prestige is a sucker's game” ([source](https://news.ycombinator.com/item?id=11833832)) - Do not chase promotion for the title only.

- [For all you future CTOs, consider your incentive schemes carefully](https://news.ycombinator.com/item?id=24463676) - 昇進制度がUberのエンジニアリングの優秀さを終わらせ、企業が官僚的な混乱へと変化を始めた原因を示す

- [How to get promoted](https://archive.ph/nlUrG) - 冷笑的な視点：「機会主義的なキャリアアドバイスは：OKRを無視し、決断の影響が測定される前にプロジェクトを切り替え、元気で楽観的に行動し、悪いニュースを、緩やかなシステム調整の要請として包装し、誰かを悪く見せないようにし、熱意を持って儀礼を行う、人員を増やして基準を超える、仕事の自発性を信じて、管理のトレンドに従い、急性の失敗を避け、これは本当に信じている」

### 評価面談

エンジニアリング組織とチーム運営に関する資料です。

- [Get your work recognized: write a brag document](https://jvns.ca/blog/brag-documents/) - 「素晴らしい仕事をしていると、人々が（またはべき！）その成果を自動的に認識し、昇進や給与の増加で報酬を与える」という考えがあるが、現実にはそれほど単純ではない

- [Incentive Pay Considered Harmful](https://www.joelonsoftware.com/2000/04/03/incentive-pay-considered-harmful/) - 「報酬（または報酬）は、職場ではまったく機能しない。（…）ほとんどのソフトウェアマネージャーは、既存の評価制度に従うしかない。もしもその立場にいるなら、チームを破壊する唯一の方法は、チーム内のすべてのメンバーに素晴らしい評価を与えることである」

- “If anything in your performance review is a surprise, then I have failed as a manager.” ([source](https://news.ycombinator.com/item?id=17249767)).

- “This is what I loved about working at Netflix. We didn't have performance reviews. It was assumed that your performance was good to excellent, otherwise you wouldn't be working there anymore. You had a constant feedback loop with your manager on performance, but nothing was ever formal.” ([source](https://news.ycombinator.com/item?id=23861960)).

- “The system a software developer works in shapes their performance so much more than individual differences.” ([source](https://news.ycombinator.com/item?id=21972033)).

## 報酬

給与・株式報酬と公正な報酬設計に関する資料です。

### 給与

- [levels.fyi](https://www.levels.fyi) - 💸 大手テック企業間の給与範囲、報酬表、福利厚生を比較

- [L8-L10 salaries at AWS](https://news.ycombinator.com/item?id=21823987) - \$M+の報酬パッケージがどのように見えるかという基準

- [Why new hires often get paid more than existing employees](https://web.archive.org/web/20250415095157/https://bloomberry.com/why-new-hires-often-get-paid-more-than-existing-employees/) - 「より高い給与を得るための最も効果的な方法は、新しい職場に移ることである」

- [Salaries never stay secrets forever. Hiding them only delays the inevitable.](https://news.ycombinator.com/item?id=2439478)

### 株式報酬

- “Never accept a lower salary in exchange for equity.” ([source](https://news.ycombinator.com/item?id=21868845))

- [On VC funding and huge growth](https://news.ycombinator.com/item?id=17448035) - 「スタートアップには退路戦略が必要である。（…）そのアイデアは、資金を迅速に調達し、補助的なサービスに経験豊富な人材を採用し、アプリケーションを構築して、IPOまで耐えられるようにし、IPO後の費用をすべて延期することである。この視点から、スタートアップに参加する唯一の理由は、将来の金銭的報酬である」

- [Equity Compensation](https://www.holloway.com/g/equity-compensation) - 株式オプション、RSU、職務の誘い、税金——詳細なリファレンス、数百のリソースを含み、基本から解説し、時間とともに改善可能な形で構成

- “Public RSUs for stock you can sell immediately on the open market are fantastic.” ([source](https://news.ycombinator.com/item?id=22386728)).

## 社内政治

組織内の権力、影響力、意思決定を理解するための資料です。

- [About corporate middle management](https://news.ycombinator.com/item?id=28336658) - 「大企業のマネージャーとして、あなたは調整者として期待されている。（…）あなたは摩擦を管理し、上位のメンバーを良い印象にさせるように努力しなければならない」

- “Politics is how a middle manager runs interference and creates distractions to make sure you can't see over, around, or through them, and that the people behind them closer to the money can't see you.” ([source](https://news.ycombinator.com/item?id=22808280)).

- [HiPPO FAQ](https://exp-platform.com/hippo/) - ヒッポとは「最も高額に報酬を支払われる人物の意見」という、機能不全な文化的な特徴であり、権力政治がデータを上回る状態を指す。

- [The Prince](https://en.wikipedia.org/wiki/The_Prince) - マキアベリの、リーダーとして名誉と権力を獲得するための考え。企業においてそのレベルの政治を採用することは、組織全体に毒性をもたらし、腐敗し、士気を損なう確実な道である。

- [The Gervais Principle](https://www.ribbonfarm.com/the-gervais-principle/) - *The Office*に基づく、管理階層に関する陰惨で、しかし興味深い考察。

- [The 48 Laws of Power](https://openlibrary.org/isbn/0140280197) - ロバート・グリーンによる。組織の政治的環境において、自分の背を守りながら効果的に行動する方法を教える。

- [7 Rules of Power](https://openlibrary.org/isbn/1637741227) - Jeffrey Pfeffer著。職場での成功だけを重視する場合に、[社内政治をどう立ち回るか](https://news.ycombinator.com/item?id=39084979)を説きます。

- [Selectorate theory](https://en.wikipedia.org/wiki/Selectorate_theory) - 「選挙理論では、3つのグループがリーダーに影響を与える。それらは、名目上の選挙者、実際の選挙者、そして勝利連合である。（…）リーダーが権力を維持するためには、その勝利連合を維持しなければならない。」

- [Circulation of elite](https://en.wikipedia.org/wiki/Circulation_of_elite) - 「政権の変更、革命などは、支配者が下から倒れることで起こるのではなく、一つのエリートが別のエリートに置き換わることで起こる。」

- [The Rules for Rulers](https://www.youtube.com/watch?v=rStL7niR7gs) - 「賢い支持者たちは、常に権力のバランスを監視し、連合の網が変化する中でリーダーが敗北の兆しを見せたら、すぐに忠誠を移す準備を整える。（…）可能な限りの忠誠を買収すべきである。なぜなら、すべての種類の独裁組織において、忠誠はすべてのものである。」

- “Playing the game well is now front and center” ([source](https://news.ycombinator.com/item?id=21925738)), or why the [key practices for achieving large professional goals](https://nodramadevops.com/2019/12/key-practices-for-achieving-large-professional-goals/) is missing the parts about office politics.

- [“Company I've worked for had manager who tried to ship features over the weekend with a ragtag team of developers who don't understand why that's a bad idea.”](https://news.ycombinator.com/item?id=22285123) - 管理職の「スカウト」戦術と、そのような管理職が企業に与える影響が、良い働き場を形成するかを決定する。

- [Making Nice or Faking Nice? Exploring Supervisors' Two-Faced Response to their Past Abusive Behavior](https://onlinelibrary.wiley.com.sci-hub.st/doi/10.1111/peps.12424) - 「高度に本物の指導者や組織環境を育成したい組織は、その指導者に、象徴的な倫理的アイデンティティにおいて低い（あるいは少なくとも高いとは言えない）人物を採用すべきである。」

- “The actual power wielded by a high level executive is usually inversely proportional to the size of the organization they manage.” (source: [comment](https://news.ycombinator.com/item?id=20260498) on [Why large companies are so difficult to rescue](https://news.ycombinator.com/item?id=20260114)).

- “Cutting costs gets you a raise. Delivering a big project is a path to promotion.” ([source](https://news.ycombinator.com/item?id=21230771))

- “You know your game fails when you read in the news about the feature you are supposed to have.” ([source](https://news.ycombinator.com/item?id=20220484)). A team learning about its roadmap at the same time of the general public is a sure sign something is wrong.

- “In a highly political environment there are two ways to create change, one is through overt manipulation, which is to collect political power to yourself and then exert it to enact change, and the other is covert manipulation, which is to enact change subtly enough that the political organism doesn't react. (sometimes called "triggering the antibodies").” ([source](https://news.ycombinator.com/item?id=5541517)).

- [Power Bends Light](https://honkathon.com/2019-08-18-power-bends-light/) - 「スタートアップの多くにおいて、多くのことは常に炎上しているが、それを受け入れれば、多くの良い点がある。その中で有名なのは、急速に成長するスタートアップにおいて、努力し、能力のある人間が、経営陣の一部の支持を得て、非常に短い期間で印象的なタイトル（あるいは少なくとも実質的な権限）を獲得できるということである。」

- “It's common to promote someone to just get rid of that person :) Sometimes promoting is just easier that firing.” ([source](https://news.ycombinator.com/item?id=21767734)).

- [US spy manual has tips for coping with toxic bosses](https://qz.com/work/1717297/how-to-cope-with-a-toxic-boss-according-to-a-us-spy-manual-from-wwii/) - 第二次世界大戦期の[Simple Sabotage Field Manual](https://archive.org/details/SimpleSabotageFieldManual)をもとに、嫌がらせや士気をくじく行動を見抜くための古典的な資料です。

- [4 Clues to Identify a Destructive Leader](https://www.tilt365.com/the-tilted-edge/blog/post/toxic-leadership-destructive-characteristics-examples) - 「1. 私はかなり重要な存在だ！ 2. これは私の責任ではない！ 3. 私の言うことをただやればいい！ 4. 信じてください、私は決して間違えません。」

- “The president of MIT told me that tenure was not about research, productivity, or merit. It was about office politics & being liked by your department.” ([source](https://threadreaderapp.com/thread/1494369809538195456.html)) - Contemplating to switch from the industry? The grass is not greener in academia. Given a significant size, any organization comes with its political game.

## 組織再編

チーム・会社の再編や買収に対応するための資料です。

チーム・会社の再編や買収に対応するための資料です。

### チームレベル

- [Why it's difficult to build teams in high growth organisations](https://jchyip.medium.com/why-its-difficult-to-build-teams-in-high-growth-organisations-e1aee8446337) - マネージャーが新入メンバーをチームに受け入れるための3つのアプローチを説明：1. 沈み込みか泳ぎ続ける；2. 分割・吸収；3. 吸収・分割。

- [Teams are like bread](https://blog.jessitron.com/2019/06/15/teams-are-like-bread/) - 上記で述べた「吸収・分割」戦略に共鳴：「一つのチームで魔法が盛んに働くなら、それを殺さないで、育て、成長させ、さらに強力なチームの源として残す。急いでいなくてもよい。」

- [Building a data team at a mid-stage startup: a short story](https://erikbern.com/2021/07/07/the-data-team-a-short-story.html) - データ駆動型企業の概念を整理しつつ、3人の小さなチームを拡大するマネージャーの物語。各ステップは技術パイプラインの進化と既存ステークホルダーとの関係性の変化をカバーしている。

- [If I Close My Data Centers, What About the People/Jobs Lost?](https://news.ycombinator.com/item?id=17329028) - F50のデータセンターが商業クラウドプロバイダーに移行するが、現在、遺産業務を行っている人々はどうなるか？答えは、再教育である。

- “This is the managerialist dream. To replace employees' judgement and competence with a process and management methodology. (…) It never works.” ([source](https://news.ycombinator.com/item?id=20881308)). And why the retraining answer above is the best one.

- [I've Built Multiple Growth Teams. Here's Why I Won't Do It Again.](https://conversionxl.com/blog/dont-build-growth-teams/) - 「確率について理解している人は少なく、多くの経営陣はデータの内容に関係なく、無関心である。」

### 会社レベル

- [The SaaS Org Chart](https://archive.ph/vOuLQ) - 組織が50人／125人／400人／1000人規模の段階ごとに持つべき構造と、その典型的な比率およびARR（年間収益）についての設計図。

- “If you have dealt with large, completely incompetent organizations and wondered how the hell they actually keep going - theres your answer. If built correctly it's genuinely difficult to mess things up.” ([source](https://news.ycombinator.com/item?id=20533922)). I.e. the structure of the organization is quintessential to its longevity.

- [A high-resilience org chart](https://jessitron.com/2021/05/26/a-high-resilience-org-chart/) - 「問題を解決する方法と、それを解決する方法を知っているなら、官僚的な組織がそれに対応できる。既知の範囲に従って行動すべきである。ソフトウェア開発であれば、生成活動である。高耐性の組織構造が必要である。ボックスは少なく、柔軟性を高めること。」

- [An Alternative Approach to Re-Orgs At Your Company](https://caseyaccidental.com/alternative-approach-re-orgs/) - 「再編成の失敗を繰り返さないために、チームが自らの進展を促すような、フィードバックをもとにした構造を設計することにした。これは、組織の構造が不十分であることを、根から示す試みである。しかし、これは企業の文化によって、限界があるかもしれないという注意喚起である。」

- “When everything is great success, people behind that success shadow the people who could make success in the future. (…) Netflix is great example of how to do big transition right. Netflix was in renting DVDs by mail business. When the decision to move to streaming was made, Netflix CEO did not allow managers who responsible for DVD renting business into meetings where the future was planned.” ([source](https://news.ycombinator.com/item?id=21395557)).

- [Speaking Truth to Power: Reflections on My Career at Microsoft](https://onezero.medium.com/speaking-truth-to-power-reflections-on-a-career-at-microsoft-90f80a449e36) - 30年間、極めて不適切な企業に勤務した著者が、謙虚な結論に至る：リーダーは、従業員の価値を体現すべきである。逆に、その価値を従業員に押し付けるべきではない。「トップの変化——スピーチ、トレーニング、ハッシュタグではなく——最も大きな文化的影響を与える。もし本当に持続可能な文化的変化を望むなら、以前の文化で成功した「作られた人間」をすべて撤去し、従業員に見せ、行動し、考え方が近い人材を昇進させるべきである。」

### 買収

エンジニアリング組織とチーム運営に関する資料です。

- [How the Digg team was acquihired](https://lethain.com/digg-acquihire/) - 全体のチームを取得する「アクイ・ハイア」は、再編成の一種と見なせる。その際、マネージャーは1〜2日間で大量の新しい雇用契約を交渉しなければならない。「アクイ・ハイアは『スター』を重視するため、もし上級リーダーで明確に進むことを拒否していないなら、さまざまな側面からプレッシャーが集まるだろう。」

## 健康

- [Good sleep, good learning, good life](https://supermemo.guru/wiki/Good_sleep,_good_learning,_good_life) - 休暇、ストレス、燃え尽きを含む健康管理の資料です。

### 休暇

- [Should we take a few long holidays, or lots of short ones?](http://timharford.com/2019/09/should-we-take-a-few-long-holidays-or-lots-of-short-ones/) - 短い休暇。「理由1：思い出は、休暇の長さではなく、体験の強さに依存する。理由2：業務の変更は創造性を刺激する。理由3：短い休暇を取る理由は、過度な疲労を防ぐために休息が必要であり、1つの長い休暇では十分でない。」

### ストレス

- [The Toxic Handler: Organizational Hero — and Casualty](https://www.companiesalive.com/toxichandlers-healthandhealing-lifecoaching-miami-leadershiptraining.htm) - 「毒のマネージャーとは、組織生活に固有の悲しみ、挫折、苦悩、怒りを自ら背負うマネージャーである。こうした人物は、組織のあらゆるレベルに見られるが、多くはトップに近い位置にいる。」

- [Manager Energy Drain](https://larahogan.me/blog/manager-energy-drain/) - 「マネージャーとしての疲労感をどう扱うか？1. カレンダーを整理する；2. 複雑で範囲の定義が不明なプロジェクトを委任する；3. いいえを言う。」

- [How Slack Harms Projects](https://www.silasreinagel.com/blog/2019/08/12/how-slack-harms-projects/) - 「誤った緊張感を誘発し、集中力を損なう、プロジェクトの優先順位を無視する、重要なビジネス文脈を削ぎ落とし、不十分に検討されたコミュニケーションを促進する。これを改善するには、[How to Use Slack and Not Go Crazy](https://pspdfkit.com/blog/2018/how-to-use-slack-and-not-go-crazy/)の記事を参照のこと。」

- [Examples of harassments](https://news.ycombinator.com/item?id=21856352) - 「嫉妬の強い上司が、自分が裏切られたか、軽視されたかと感じ、能力のある従業員をいじめ、追い出してしまった。そんな上司にならないように。」

### 燃え尽き

- [How shitty job crush your soul, then lead to burnout](https://news.ycombinator.com/item?id=7789438) - 「過労は非常に深刻な状況である。もし過労を極めれば、今後どんな素晴らしい職にも効果的に働き続けることが難しくなる。過労は身体的な怪我のように扱うべきだ。」

- “Burnout is caused by resentment. (…) No. Burnout is caused when you repeatedly make large amounts of sacrifice and or effort into high-risk problems that fail. It's the result of a negative prediction error in the nucleus accumbens. You effectively condition your brain to associate work with failure.” ([source](https://news.ycombinator.com/item?id=5630618)).

- [If You're So Successful, Why Are You Still Working 70 Hours a Week?](https://archive.ph/78aEf) - 「過労と過労の傾向は、私たちの職業、組織、そして私たち自身に関わる複雑な要因の組み合わせによって説明される。その中心にあるのは不安である。」

- [What Happens When Your Career Becomes Your Whole Identity](https://archive.ph/yqPAD) - 「高い成果、強い競争心、過労の文化が組み合わさり、多くの人々を職業的な閉じ込めと過労の『完璧な嵐』に巻き込む。」

- “In my experience extreme workaholism can often be a way to avoid or defer major life decisions that someone doesn't want to make or even consciously recognize. (…) Eventually the debt comes due but sometimes not until many decades later.” ([source](https://news.ycombinator.com/item?id=21900054))

- [Burnout From an Organizational Perspective](https://ssir.org/articles/entry/burnout_from_an_organizational_perspective) - 「軍の研究が、ストレス状態下での持続可能なパフォーマンスについて示しているように、リーダーは健康の擁護者であるべきであり、タスクマスターであるべきではない。」組織の毒性の症状と、マネージャーがチームからシステム的過労を防ぐ方法を説明する。

- [Avoiding burnout as an ambitious developer](https://stackoverflow.blog/2020/01/13/avoiding-burnout-as-an-ambitious-developer/) - 「ノーを言うことに意志を持つ；自分が望まないものを理解する；エネルギーのレベルを現実的に使う；未来の自分に優しくする。」

- [Psychology Today: How Programmers Can Avoid Burnout](https://www.psychologytoday.com/us/blog/dear-life-please-improve/202008/how-does-your-tech-job-burn-you-out) - 「ベテランのソフトウェア開発者は、次のように推奨する：1. 成長できる環境にある会社で働く；2. 転用可能なスキルを身につける；3. 創造性を発揮できる場を確保し、自分自身に集中し、オフになる時間を持つ；4. もちろん、最終的な選択肢として、自分のお金を確保して脱出することもある。」

- [Average tenure of a CISO is just 26 months due to high stress and burnout](https://www.zdnet.com/article/average-tenure-of-a-ciso-is-just-26-months-due-to-high-stress-and-burnout/) - 「今日のCISOの職務は、低予算、長時間労働、執行役員への権限の欠如、採用できる専門家数の減少、そして企業のインフラに対するサイバー攻撃への対策が不十分であるというストレス、新たに生じた脅威への継続的なプレッシャー、そして良い成果に対しては感謝がなく、失敗時にはすべての責任を負わされるという状況にある。」

## 挫折と失敗

- “What does not kill me makes me stronger”, Friedrich Nietzsche - Brutal, but with a grain of truth.

- “It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.” Charles Darwin - [A quote](https://quoteinvestigator.com/2014/05/04/adapt/) to tame the one above.

- [Early-career setback and future career impact](https://www.nature.com/articles/s41467-019-12189-3) - 「早期の失敗を経験した個人は、長期的には狭い勝利を経験した個人よりも系統的に優れたパフォーマンスを示す。」

- [Huge success in business is largely based on luck](https://theconversation.com/huge-success-in-business-is-largely-based-on-luck-new-research-130843) - 「マネジメント研究と教育は、ビジネス実務者を『無能からOK』へと導くための、指示的な理論に焦点を当てるべきであり、『良いから素晴らしい』へと進化する理論に焦点を当てるべきではない。」

- [How Complex Systems Fail](https://stuff.mit.edu/afs/athena/course/2/2.75/resources/random/How%20Complex%20Systems%20Fail.pdf) - 「失敗の性質、失敗の評価方法、失敗が近因に帰着される方法、そしてその結果としての患者安全に関する新たな理解についての短い論説。」



- [Normalization of deviance](https://danluu.com/wat/) - 「災害の原因となる要因が無意識に蓄積され、最終的に遅れて気づくまでに至るプロセスを調査する。これは他の分野では研究されているが、ソフトウェアエンジニアリングではまだ研究されていない。」



- [Steve Jobs explains - Why companies fail?](https://www.youtube.com/watch?v=B-fAinNDbQU&t=6s) - 「販売とマーケティングが製品中心の企業を支配する仕組みについて。」

- [The failure of Scaling Etsy](https://archive.ph/h07CR) - 「企業が技術的リーダーシップを欠いている場合：開発者は、コストの高いリファクタリングや過剰設計されたシステムに時間を費やし、ビジネスや製品と離れていく。」

## 退職

退職、引継ぎ、解雇、組織からの退出に関する資料です。

- [Why I Rejected My Manager](https://archive.ph/NxLVP) - 「今や、なぜ『人々はマネージャーを離れるのではなく、会社を離れる』という言葉があるのか、理解できた。」

- [Colleague is leaving. How to investigate what went wrong?](https://news.ycombinator.com/item?id=20786755) - 「ほとんどの場合、人は上司を辞めることになる。仕事や会社を辞めるわけではない。」そして、退職インタビューから本質的な洞察を得られるのはほとんどない理由。 ([source](https://news.ycombinator.com/item?id=20787874))

- “*People do get pissed off in clusters* is the best description of a team/company meltdown that I've ever seen.” ([source](https://news.ycombinator.com/item?id=19755001))



- “Something I've seen multiple times is that, when a VP leaves, a company will become a substantially worse place to work, and it will slowly dawn on people that the VP was doing an amazing job at supporting not only their direct reports, but making sure that everyone under them was having a good time.” ([source](https://danluu.com/wat/#fn:P))



- “Next time your favorite manager and tech lead quit the company, ask them why.” ([source](https://news.ycombinator.com/item?id=21767843)).

- “[Good business mafias form](https://archive.ph/9Osm2) when there's a group of people who all have to quit their job for reasons that are exogenous to their performance. In the case of Paypal, it was an acquisition; at Tiger Management, a few years of underperformance; at Drexel Burnham Lambert, an indictment. In Reliance's case, the core group of early employees fled the port of Aden due to unrest and the withdrawal of the British.” ([source](https://archive.ph/WCxsu)) - And why mass exodus might be an opportunity for great new ventures.

- “It was my experience that no single departure had any effect. Mass departures did, trends did, but one person never did, even when that person was a founder.” ([source](https://news.ycombinator.com/item?id=4324615)).

- [As an Employee, You Are Disposable](https://nelson.cloud/as-an-employee-you-are-disposable/) - 「仕事や会社に好意を持ち続けるのは問題ない。ただ、従業員として自分が使い捨てられているという理解を持つべきだ。」また：「これは新しい話ではない。もし、あなたの会社に大きな株式を所有していないなら、あなたがその会社に忠誠をもつ理由をよく見直し、その会社があなたに忠誠をもっているかどうかを確認すべきだ。」 ([source](https://news.ycombinator.com/item?id=40943681)).

- [P.T.'s Hidden Meaning](https://www.youtube.com/watch?v=yr4RvdREwl8) - ヒデオ・コジマが、NDAを回避し、コナミでの混乱を語るため、プレイ可能なプレーティアを創造的に使用した事例。しかし、これは影響力があり、人気のあるゲームデザイナーである場合にのみ有効である。

- [Management Challenges for the 21st Century - Managing Oneself](https://www.thecompleteleader.org/sites/default/files/imce/Managing%20Oneself_Drucker_HBR.pdf) - 「今日、経営者たちの『中年危機』についての話は多くなっているが、それはほとんどがうんざりである。45歳になると、ほとんどの経営者は自分のキャリアの頂点に達しており、それを知っている。」第Ⅴ段落では、知識労働者が自分自身を管理し、人生の後半を計画する必要性が説明されている。

## コントリビューション

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/kdeldycke/awesome-engineering-team-management/blob/065e30c43f20006bc40d7c50ea6fc7e0d265779d/.github/contributing.md)をご確認ください。

## 脚注

[ヘッダー画像](https://github.com/kdeldycke/awesome-engineering-team-management/blob/main/assets/awesome-management-header.png)は、[2017年11月撮影の写真](https://unsplash.com/photos/6dDHofabCQ8)を[Werner Du plessis](https://unsplash.com/@werner01)が加工したものです。



<a name="intro-quote-def">[1]</a>: [*Peopleware: Productive Projects and Teams, 1987*, page 34](https://openlibrary.org/isbn/0321934113) (Addison-Wesley Professional, 3rd edition, 2013). [[↑]](#intro-quote-ref)
