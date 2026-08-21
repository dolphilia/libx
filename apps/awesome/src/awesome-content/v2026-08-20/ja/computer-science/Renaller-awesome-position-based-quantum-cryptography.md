---
title: "Renaller/awesome-position-based-quantum-cryptography"
description: "Renaller/awesome-position-based-quantum-cryptographyの正規スナップショット"
licenseSource: "github-Renaller-awesome-position-based-quantum-cryptography-readme-md"
---

# Awesome Position-Based Quantum Cryptography [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
位置ベース量子暗号（PBQC）に関する論文のキュレーション済みリストです。成長中のこの分野について、カテゴリ化されたコミュニティ主導の、常に最新の文献概観を構築することを目指します。

QPV = Quantum Position Verification

QPA = Quantum Position-based Authentication

PB-QKD = Position-based Quantum Key Distribution

## 目次

- [古典的な不可能性](#classical-impossibility)
- [最初のプロトコル](#first-protocols)
- [QPV への汎用攻撃](#universal-attacks-on-qpv)
- [QPV への汎用攻撃を回避する方法](#ways-around-the-universal-attacks-on-qpv)
- [予想される指数的下界](#conjectured-exponential-lower-bound)
- [量子位置ベース認証](#quantum-position-based-authentication)
- [NLQC の理解に向けて](#towards-understanding-nlqc)
- [実用化に向けて](#towards-practicality)
- [実験](#experiments)

## 古典的な不可能性

- [Position-based cryptography (2009)](https://doi.org/10.1007/978-3-642-03356-8_23) - 標準モデルにおける位置ベース暗号の古典的な不可能性を確立。限定記憶モデルでの可能性を探究します。

## 最初のプロトコル

- [Tagging systems (2006)](https://patents.google.com/patent/US20060022832A1/en) - 「量子タグ付け」という名称で QPV を導入。
- [Location-dependent communications using
quantum entanglement (2010)](https://doi.org/10.1103/PhysRevA.81.042319) - 学術文献に QPV を導入する一方で、無条件安全性を誤って主張。Bell 状態に基づく QPV を研究します。
- [Quantum location verification in noisy channels (2010)](https://doi.org/10.1109/GLOCOM.2010.5684009) - Bell 状態、GHZ 状態、エンタングルメントスワッピングに基づく QPV を研究。ノイズ・デコヒーレンスの影響を調べます。
- [Quantum tagging: Authenticating location via quantum information and relativistic signalling constraints (2011)](https://doi.org/10.1103/PhysRevA.84.012326) - BB84 QPV、$f$-routing、$f$-BB84 QPV とその変種など、異なる QPV プロトコル群を導入。それらの一部に対するエンタングルメントベース攻撃に言及します。

### BB84 QPV と一般化

- [Position-based quantum cryptography: Impossibility and constructions (2011)](https://doi.org/10.1137/130913687) - 非エンタングル状態攻撃に対する安全性を示します。
- [A monogamy-of-entanglement game with applications to device-independent quantum cryptography (2013)](https://doi.org/10.1088/1367-2630/15/10/103002) - 非エンタングル状態攻撃、並列反復、反復プロトコルに対する線形下界のタイトな上界を示します。
- [Practical position-based quantum cryptography (2015)](https://doi.org/10.1103/PhysRevA.92.052304) - 二つの入力基底がユニタリー $U$ で関係付けられる場合を考察。
- [A tight lower bound for the BB84-states quantum-position-verification protocol (2015)](https://arxiv.org/abs/1504.07171) - 古典通信を伴う攻撃に対する本質的にタイトな下界を与えます。
- [Loss-tolerant position-based quantum cryptography (2015)](https://doi.org/10.1103/PhysRevA.91.042337) - BB84 QPV をより多くの入力基底へ一般化し、その結果として優れた損失耐性を示します。BB84 QPV でのおとり状態・連続変数の利用も論じます。
- [Position-based quantum cryptography and catalytic computation (2016)](https://eprints.illc.uva.nl/id/eprint/2138/) - 第5章で BB84 QPV をより多くの入力基底へ独自に一般化。第4章でインターリーブされたユニタリーに基づく効率的なプロトコル攻撃を提示します。
- [Breaking simple quantum position verification protocols with little entanglement (2020)](https://arxiv.org/abs/2007.15808) - 入力基底が異なる角度で関係付けられる場合を考察し、角度に依存する次元依存攻撃を示します。特に Clifford 階層の外にある角度 $\pi/6$ は、6次元資源状態で攻撃できることを示します。
- [Single-qubit loss-tolerant quantum position verification protocol secure against entangled attackers (2023)](https://doi.org/10.1103/PhysRevLett.131.140802) - 損失率・誤り率に依存するプロトコルの安全領域をタイトに特徴付けます。
- [Security of a continuous-variable based quantum position verification protocol (2023)](https://arxiv.org/abs/2308.04166) - プロトコルを連続変数入力へ一般化し、損失・ノイズ率に依存する非エンタングル状態攻撃への安全性を示します。
- [Perfect cheating is impossible for single-qubit position verification (2024)](https://arxiv.org/abs/2406.20022) - 入力量子ビットが一様ランダムに選ばれた $\mathbb{C}^2$ 射影子の固有状態である一般化を考察。有限次元資源状態ではこのプロトコルを完全には攻撃できないことを示します。

### $f$-routing

- [The garden-hose model (2013)](https://doi.org/10.1145/2422436.2422455) - $f$-routing への攻撃を研究し、攻撃を計算量理論と結び付ける garden-hose 複雑性を導入。例えば任意の $f \in \mathsf{L}$（前処理あり）は効率的に攻撃できるなど、その結び付きに関する多くの初期結果を示します。
- [A single-qubit position verification protocol that is secure against multi-qubit attacks (2022)](https://doi.org/10.1038/s41567-022-01577-0) - 攻撃資源状態の次元に対するロバストな線形下界を示します。
- [Code-routing: A new attack on position verification (2023)](https://doi.org/10.22331/q-2023-08-09-1079) - $f$-routing への新しい攻撃を提示。攻撃を秘密分散方式・スパンプログラムへ結び付け、素数 $p$ に対して任意の $f \in \mathsf{Mod}_p\mathsf{L}$（前処理あり）が効率的に攻撃できることを示します。
- [Relating non-local quantum computation to information theoretic cryptography (2023)](https://doi.org/10.22331/q-2024-06-27-1387) - $f$-routing を、特に条件付き秘密開示など古典暗号の話題へ接続。任意の $f$ に対する攻撃の準指数的上界を示し、前処理ありでは $\mathsf{P}$ の外部と考えられるものの効率的に攻撃される $f$ を見つけます。
- [Rank lower bounds on non-local quantum computation (2024)](https://arxiv.org/abs/2402.18647) - 完全攻撃に対し、資源状態の Schmidt 階数に関する下界を提示。いくつかの具体的関数に対する線形下界を与えます。
- [Linear gate bounds against natural functions for position-verification (2024)](https://arxiv.org/abs/2402.18648) - 内積関数を攻撃するのに必要な量子ゲート・測定数へのロバストな線形下界を提示。

### $f$-BB84 QPV

- [Quantum position verification in the random oracle model (2014)](https://doi.org/10.1007/978-3-662-44381-1_1) - 高次元での QPV を慎重に考察し、ランダムオラクルモデルにおける無条件安全性を示します。
- [A single-qubit position verification protocol that is secure against multi-qubit attacks (2022)](https://doi.org/10.1038/s41567-022-01577-0) - 攻撃資源状態の次元に対するロバストな線形下界を示します。
- [Single-qubit loss-tolerant quantum position verification protocol secure against entangled attackers (2023)](https://doi.org/10.1103/PhysRevLett.131.140802) - 損失率・誤り率に依存するプロトコルの安全領域をタイトに特徴付けます。
- [Making existing quantum position verification protocols secure against arbitrary transmission loss (2023)](https://arxiv.org/abs/2312.12614) - QPV へ追加のコミットメント手順を導入し、$f$-BB84 QPV を含むプロトコル群では伝送損失が安全性と無関係になることを示します。$f$-BB84 は実用的な QPV プロトコルだと主張します。
- [Continuous-variable quantum position verification secure against entangled attackers (2024)](https://arxiv.org/abs/2404.14261) - $f$-BB84 QPV を連続変数入力へ一般化し、有限次元入力の場合と類似の安全性主張を示します。

### Bell QPV

- [Location-dependent communications using
quantum entanglement (2010)](https://doi.org/10.1103/PhysRevA.81.042319) - Bell 状態に基づく QPV を研究。無条件安全性を主張しましたが、後に誤りと判明しました。
- [Quantum location verification in noisy channels (2010)](https://doi.org/10.1109/GLOCOM.2010.5684009) - Bell 状態、GHZ 状態、エンタングルメントスワッピングに基づく QPV を研究。ノイズ・デコヒーレンスの影響を調べます。
- [Insecurity of position-based
quantum cryptography protocols against entanglement attacks (2011)](https://doi.org/10.1103/PhysRevA.83.012322) - 以前に安全と主張された QPV プロトコルの非安全性を証明し、エンタングルメント攻撃の根底にある一般原理を研究。Bell/GHZ 状態に基づく変種を研究し、Pauli $X$、$Y$、$Z$ 以外の固有状態の使用は、攻撃に1超の EPR ペアが必要なプロトコルにつながることを示します。
- [Loss-tolerant quantum secure positioning with weak laser sources (2016)](https://doi.org/10.1103/PhysRevA.94.032315) - 分離可能入力を持つプロトコルの版を研究。完全な損失耐性を証明し、おとり状態に基づく実用実装を研究します。
- [On the role of quantum communication and loss in attacks on quantum position verification (2022)](https://arxiv.org/abs/2208.04341) - 非エンタングル状態攻撃の成功確率に対する 3/4 の上界を証明。
- [Monogamy of highly symmetric states (2023)](https://arxiv.org/abs/2309.16655) - 本論文の結果は、非エンタングル状態攻撃の成功確率に $\ln(2) \approx 0.69$ の上界を含意します。

### その他のプロトコル

- [Practical position-based quantum cryptography (2015)](https://doi.org/10.1103/PhysRevA.92.052304) - インターリーブされたユニタリーに基づく、安全と予想されるプロトコルを提示。このプロトコルは後に効率的に破られました。
- [Quantum position verification in bounded-attack-frequency model (2016)](https://doi.org/10.1007/s11433-016-0234-0) - 証明者への入力情報到着時刻が同時でない BB84 QPV（どちら側が先に到着したかに基底を符号化）を考察。この設定での一般的なポートベース攻撃を論じます。
- [Practically secure quantum position verification (2021)](https://doi.org/10.1088/1367-2630/ac0755) - 当時の既存プロトコルを概観し、その要素を組み合わせて異なる変種を得ます。
- [Towards practical and error-robust quantum position verification (2021)](https://arxiv.org/abs/2106.12911) - SWAP テストに基づく新プロトコルを定義し、理論・実用の両面で研究。
- [Making existing quantum position verification protocols secure against arbitrary transmission loss (2023)](https://arxiv.org/abs/2312.12614) - QPV へ追加のコミットメント手順を導入し、プロトコル群において伝送損失が安全性と無関係になることを示します。

## QPV への汎用攻撃

- [Position-based quantum cryptography: Impossibility and constructions (2011)](https://doi.org/10.1137/130913687) - QPV を厳密に定義し、入力量子ビット数に対して二重指数個の事前共有 EPR ペアを使う、全ての QPV プロトコルへの一般攻撃を提示。
- [Simplified instantaneous non-local quantum computation with applications to position-based cryptography (2011)](https://doi.org/10.1088/1367-2630/13/9/093036) - 入力量子ビット数に対して指数個の事前共有 EPR ペアを使う、ポートベーステレポーテーションに基づく QPV 一般攻撃を提示。証明可能な線形下界を持つ QPV プロトコルも提示します。
- [Instantaneous non-local computation of low T-depth quantum circuits (2016)](https://doi.org/10.4230/LIPIcs.TQC.2016.9) - タスクユニタリーを Clifford+T ゲートへ回路分解した際の T ゲート数または T 深さに対して指数個の事前共有 EPR ペアを使う QPV 一般攻撃を提示。
- [Non-local computation of quantum circuits with small light cones (2022)](https://arxiv.org/abs/2203.10106) - タスクユニタリーの回路分解における幾何構造に基づく QPV 一般攻撃を提示。あるユニタリーのクラスでは既存の一般攻撃より効率的です。

### ユニタリーのクラスへの攻撃

- [Practical position-based quantum cryptography (2015)](https://doi.org/10.1103/PhysRevA.92.052304) - Clifford 階層の第2レベルなど、特定クラスに対する効率的攻撃を示します。
- [Bounds on instantaneous non-local quantum computation (2020)](https://doi.org/10.1109/TIT.2019.2950190) - 任意の2量子ビットユニタリーは $\log(1/\varepsilon)$ EPR ペアで誤差 $\varepsilon$ まで攻撃可能であり、任意のエルミート二部二値制御ユニタリーは1 EPR ペアで攻撃可能なことを示します。一般の二部二値制御ユニタリーのエンタングルメントエントロピーに対する対数下界を示します。

## QPV への汎用攻撃を回避する方法

- [Quantum tagging for tags containing secret classical data (2011)](https://doi.org/10.1103/PhysRevA.84.022335) - 検証者・証明者が秘密を事前共有する設定での QPV を考察。QKD により秘密を無期限に拡張して QPV が無条件に安全となることを示します。
- [Quantum position verification in the random oracle model (2014)](https://doi.org/10.1007/978-3-662-44381-1_1) - ランダムオラクルモデルにおける $f$-BB84 QPV の無条件安全性を示します。
- [Beating classical impossibility of position verification (2022)](https://doi.org/10.4230/LIPIcs.ITCS.2022.100) - LWE が量子困難である仮定から、古典的な入出力情報のみを持つ QPV プロトコルを構成。ランダムオラクルモデルでの無条件安全性を示します。

## 予想される指数的下界

- [Geometry of Banach spaces: A new route towards position based cryptography (2021)](https://doi.org/10.1007/s00220-022-04407-9) - 古典入力情報に依存する位相ユニタリー適用に基づく新プロトコルを提示。攻撃に関する正則性仮定の下での指数的下界と、未解決の Banach 空間幾何予想を条件とする指数的下界を示します。

## 量子位置ベース認証

- [Position-based quantum cryptography: Impossibility and constructions (2011)](https://doi.org/10.1137/130913687) - QPV から QPA、PB-QKD へ進む汎用的ですが非効率な構成を提示。
- [Quantum position verification in the random oracle model (2014)](https://doi.org/10.1007/978-3-662-44381-1_1) - $f$-BB84 QPV のランダムオラクルモデルにおいて、QPA・PB-QKD へのより効率的な拡張を提示。
- [Quantum Secure Key Exchange with Position-based Credentials (2025)](https://arxiv.org/abs/2506.03549) - QKD 内で認証を提供するための QPV 利用法を改善して分析。
 
## NLQC の理解に向けて

- [Quantum tasks in Minkowski space (2012)](https://doi.org/10.1088/0264-9381/29/22/224013) - QPV より一般的な量子タスクを考察。
- [Popescu-Rohrlich correlations imply efficient instantaneous nonlocal quantum computation (2016)](https://doi.org/10.1103/PhysRevA.94.022318) - 攻撃者が PR ボックスを共有する場合、線形量のエンタングルメントと線形回数の PR ボックス利用だけで任意のユニタリーを攻撃できることを示します。
- [Constraining the doability of relativistic quantum tasks (2019)](https://arxiv.org/abs/1909.05403) - ポートベース攻撃をより一般的な量子タスク・時空回路へ一般化。タスクの粗い因果構造が、非局所的に実行可能かを決める関連特性だと見いだします。
- [On the role of quantum communication and loss in attacks on quantum position verification (2022)](https://arxiv.org/abs/2311.00677) - 量子通信を伴う非エンタングル状態攻撃で破れる一方、古典通信攻撃には安全な任意の QPV プロトコルを、量子通信攻撃にも安全なものへ変換できることを示します。信号損失が十分大きければ、任意の QPV プロトコルは自明なテレポーテーション攻撃で効率的に攻撃できることも指摘します。
- [Complexity and entanglement in non-local computation and holography (2022)](https://doi.org/10.22331/q-2022-11-28-864) - 必要な攻撃資源量はタスクユニタリーのエンタングル部分により制御されると指摘。一方が古典入力情報であるタスクでは、攻撃に対して二重対数的（後に対数的へ改善）下界と指数的上界が成立することを示します。
- [Relating non-local quantum computation to information theoretic cryptography (2023)](https://doi.org/10.22331/q-2024-06-27-1387) - $f$-routing を介して NLQC を古典暗号のいくつかのプロトコルへ接続。
- [Time-constrained local quantum state discrimination (2023)](https://arxiv.org/abs/2311.00677) - 状態識別 QPV プロトコルへの非エンタングル状態の量子攻撃・古典攻撃の差を研究し、量子通信があれば完全識別できるがなければできない分離可能状態アンサンブルがあることなど、複数の結果を証明。
- [Security of position-based quantum cryptography limits Hamiltonian simulation via holography (2024)](https://doi.org/10.1007/JHEP08(2024)152) - QPV を Hamiltonian シミュレーションへ接続。QPV 攻撃への超線形下界を示せれば、一つの Hamiltonian が別のものをシミュレートするのに必要な資源への新たな基本下界が得られることを示します。
- [A complexity theory for non-local quantum computation (2025)](https://arxiv.org/abs/2505.23893) - 広範な異なる NLQC タスク間の関係を発見。$f$-routing と $f$-BB84 が等価であり、両者間に定数オーバーヘッドの帰着があることを含みます。

### ホログラフィーとの接続

- [Quantum tasks in holography (2019)](https://doi.org/10.1007/JHEP10(2019)233) - バルク内の QPV プロトコルには境界で等価なプロトコルが必要なことを指摘し、QPV を AdS/CFT 予想へ接続。境界での実装は、バルク QPV プロトコルを非局所的に実装する有効な攻撃となります。
- [Holographic scattering requires a connected entanglement wedge (2020)](https://doi.org/10.1007/JHEP08(2020)132) - QPV とホログラフィーの接続を深化させ、関連する境界領域間の相互情報量を推定。この論文の結果により、予想に基づく結果はすべての QPV プロトコルへの効率的攻撃をもたらし得ます。
- [Holography as a resource for non-local quantum computation (2022)](https://arxiv.org/abs/2210.13500) - 一つ上の論文の抜け穴を議論・補完。ホログラフィック CFT のシミュレーションに基づく攻撃を構成し、いくつかの仮定に基づき、任意の多項式複雑なユニタリーは効率的に攻撃できると主張します。


## 実用化に向けて

- [Loss-tolerant position-based quantum cryptography (2015)](https://doi.org/10.1103/PhysRevA.91.042337) - BB84 QPV をより多くの入力基底へ一般化し、優れた損失耐性を示します。おとり状態・連続変数の利用も論じます。
- [Loss-tolerant quantum secure positioning with weak laser sources (2016)](https://doi.org/10.1103/PhysRevA.94.032315) - 分離可能入力を伴う Bell QPV を研究。完全な損失耐性を証明し、おとり状態に基づく実用実装を研究します。
- [Towards practical and error-robust quantum position verification (2021)](https://arxiv.org/abs/2106.12911) - SWAP テストに基づく新プロトコルを定義し、理論・実用の両面で研究。実用上多用途かつロバストな特性を持つと主張します。
- [Single-qubit loss-tolerant quantum position verification protocol secure against entangled attackers (2023)](https://doi.org/10.1103/PhysRevLett.131.140802) - 損失率・誤り率に依存する BB84 QPV・$f$-BB84 QPV の安全領域をタイトに特徴付けます。
- [Security of a continuous-variable based quantum position verification protocol (2023)](https://arxiv.org/abs/2308.04166) - BB84 QPV を連続変数入力へ一般化し、損失・ノイズ率に依存する非エンタングル状態攻撃への安全性を示します。
- [Making existing quantum position verification protocols secure against arbitrary transmission loss (2023)](https://arxiv.org/abs/2312.12614) - QPV へ追加のコミットメント手順を導入し、$f$-BB84 QPV を含むプロトコル群で伝送損失を安全性と無関係にします。$f$-BB84 が実用的な QPV プロトコルだと主張します。
- [Towards practical quantum position verification (2023)](https://arxiv.org/abs/2309.10070) - 実用 QPV 実装の技術的ハードウェア詳細を掘り下げます。
- [Continuous-variable quantum position verification secure against entangled attackers (2024)](https://arxiv.org/abs/2404.14261) - $f$-BB84 QPV を連続変数入力へ一般化し、有限次元入力の場合と類似の安全性主張を示します。

## 実験

- [Towards experimental demonstration of quantum position verification using single photons (2025)](https://doi.org/10.1088/2058-9565/adf2da) - 光学マイクロキャビティ内の単一半導体量子ドットからの単一光子を用い、SWAP プロトコルで QPV を実証する最初の実験。
