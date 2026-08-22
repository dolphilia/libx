---
title: "eozer/awesome-snmp"
description: "eozer/awesome-snmp の定本スナップショット"
licenseSource: "github-eozer-awesome-snmp-readme-md"
---


# Awesome SNMP [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Awesome lint](https://github.com/eozer/awesome-snmp/actions/workflows/awesome-lint.yml/badge.svg)](https://github.com/eozer/awesome-snmp/actions/workflows/awesome-lint.yml)

[Simple Network Management Protocol (SNMP)](https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol) は、IPネットワーク上の管理対象デバイスに関する情報を収集・整理し、その情報を変更してデバイスの動作を変えるためのインターネット標準プロトコルです。

優れたSNMPライブラリ、ツール、その他のリソースを厳選したリストです。貢献を歓迎します！

## 目次
- [ライブラリ](#libraries)
  - [C/C++](#cc)
  - [C#](#c)
  - [Erlang](#erlang)
  - [Go](#go)
  - [Java](#java)
  - [JavaScript](#javascript)
  - [Lua](#lua)
  - [PHP](#php)
  - [Python](#python)
  - [Ruby](#ruby)
  - [Rust](#rust)
- [ツール](#tools)
  - [CLI](#clis)
  - [GUI](#guis)
- [出版物](#publications)
  - [書籍](#books)
  - [RFC](#rfcs)
  - [チュートリアル](#tutorials)
- [公開サーバー](#public-servers)
- [MIBリポジトリ](#mib-repositories)
- [その他](#miscellaneous)

## ライブラリ
_SNMPアプリケーションの開発に役立ちます。_

### C/C++
- [net-snmp](http://www.net-snmp.org/) - SNMPプロトコル（v1、v2c、v3、およびAgentXサブエージェントプロトコル）の利用と導入のためのソフトウェアスイート。Pythonバインディングも含みます。
- [SNMP++](https://www.agentpp.com/api/cpp/snmp_pp.html) - HPによるBSDライセンスのSNMP実装。SNMP v1/2c/v3、スレッドセーフなど多くの機能に対応します。
- [AGENT++](https://www.agentpp.com/api/cpp/agent_pp.html) - SNMPエージェント開発向けに、SNMP v1/2c/3の完全な3バージョン対応プロトコルエンジンとディスパッチャーを提供するAGENT++ C++フレームワーク。Apacheライセンスです。
- [AgentX++](https://www.agentpp.com/api/cpp/agentx_pp.html) - AGENT++へAgentXマスターおよびサブエージェント対応を追加する、AgentXプロトコル（RFC 2741）の完全な実装を提供するC++フレームワーク（`Commercial`）。
- [openSNMP](https://sourceforge.net/projects/opensnmp/) - BSDライセンスのマルチスレッドSNMPv3実装。

### C#
- [C# SNMP Library](https://github.com/lextudio/sharpsnmplib) - SNMP標準を幅広くサポートし、最新の.NETプラットフォームを対象とする、豊富なマネージャー／エージェント例を備えたMITライセンスの.NET用SNMPライブラリ。
- [SNMP Pro](https://pro.sharpsnmp.com) - エンタープライズMIB対応を追加する商用拡張。
- [SnmpSharpNet](https://github.com/rqx110/SnmpSharpNet) - C#で書かれたSimple Network Management Protocol（SNMP）用.NETライブラリ。プロトコルバージョン1、2、3を実装しています。

### Erlang
- [Erlang/OTP SNMP](https://www.erlang.org/doc/apps/snmp/users_guide.html) - Erlang/Open Telecom Platform開発環境のコンポーネントとしてSNMP開発機能が含まれています。

### Go
- [gosnmp/gosnmp](https://github.com/gosnmp/gosnmp) - Goで書かれたSNMPライブラリ。Get、GetNext、GetBulk、Walk、BulkWalk、Set、Trapsを提供し、IPv4/IPv6とSNMP v1/v2c/v3に対応します。
- [sleepinggenius2/gosmi](https://github.com/sleepinggenius2/gosmi) - Go言語のMIBパーサー。
- [posteo/go-agentx](https://github.com/posteo/go-agentx) - AgentXプロトコルを純粋なGoで実装したライブラリ。

### Java
- [SNMP4J](https://www.agentpp.com/api/java/snmp4j.html) - Java™向けのエンタープライズクラスで、無償かつオープンソースの最新SNMP v1/2c/v3実装。
- [SNMP4J-Agent](https://www.agentpp.com/api/java/snmp4jagent.html) - SNMPエージェント（コマンドレスポンダー）開発用に、コアSNMP4J API上へ構築されたJava™ API。
- [joeSNMP](https://sourceforge.net/projects/joesnmp/) - LGPLで公開されているオープンソースのJava SNMPクラスライブラリ。
- [Westhawk's SNMP](https://snmp.westhawk.co.uk/) - SNMP v1/v2c/v3で利用できるオープンソースJavaライブラリ。トラップ、認証、プライバシーをサポートし、認証プロトコルとしてMD5とSHA1を提供します。
- [mibble](https://github.com/cederberg/mibble) - Java向けのオープンソースSNMP MIB（またはSMI）パーサーライブラリ。

### JavaScript
- [node-net-snmp](https://github.com/markabrahams/node-net-snmp) - Simple Network Management Protocol（SNMP）のJavaScript実装。バージョン1、2c、3を実装します。
- [node-snmp-native](https://github.com/calmh/node-snmp-native) - Node.js向けネイティブJavaScript SNMPライブラリ。
- [node-snmpjs](https://github.com/joyent/node-snmpjs) - Node.jsのSNMPエージェントおよび管理アプリケーション向けツールキット。
- [snmp-node](https://github.com/neias/snmp-node) - Node.js向けネイティブJavaScript SNMPライブラリ。

### Lua
- [luasnmp](https://github.com/hleuwer/luasnmp) - net-snmpライブラリのLuaバインディング。

### PHP
- [php.net/SNMP](https://www.php.net/manual/en/book.snmp.php) - net-snmpライブラリをラップするPHP用SNMP拡張。
- [FreeDSx/SNMP](https://github.com/FreeDSx/SNMP) - 純粋なPHP製SNMPライブラリ。
- [opensolutions/OSS_SNMP](https://github.com/opensolutions/OSS_SNMP) - SNMP、MIB、OIDを嫌う人のためのPHP SNMPライブラリ！

### Python
- [pysnmp](https://github.com/lextudio/pysnmp) - 2-clause BSD licenseで配布される、純粋なPython製のオープンソースかつ無償のv1/v2c/v3 SNMPエンジン実装。
  - このプロジェクトは[元のリポジトリ](https://github.com/etingof/pysnmp)から派生しています。
- [pysmi](https://github.com/lextudio/pysmi) - SNMP SMI MIBパーサーの純粋なPython実装。
  - このプロジェクトは[元のリポジトリ](https://github.com/etingof/pysmi)から派生しています。
- [gufo_snmp](https://github.com/gufolabs/gufo_snmp) - 非同期・同期の両モードに対応する高速Python SNMPクライアントライブラリ。PyO3ラッパーを用いてRustで実装された、高効率なBERパーサーとソケットI/O向けの明快なPython APIで構成されます。プロジェクトのライフサイクルはまだ初期段階に見えますが、使いやすく、特に多数のデバイスへ問い合わせる場合は___非常に___高速です。![GitHub last commit](https://img.shields.io/github/last-commit/gufolabs/gufo_snmp)
- [net-snmp Python bindings](http://www.net-snmp.org/wiki/index.php/Python_Bindings) - Net-SNMP 5.4以降には「python」サブディレクトリにPythonバインディングが含まれますが、既定ではビルドされません。![GitHub last commit](https://img.shields.io/github/last-commit/net-snmp/net-snmp)
- [easysnmp](https://github.com/easysnmp/easysnmp) - ライブラリへよりPythonらしいインターフェースをもたらすことを目指した[net-snmp Python bindings](http://www.net-snmp.org/wiki/index.php/Python_Bindings)のフォーク。![GitHub last commit](https://img.shields.io/github/last-commit/easysnmp/easysnmp)
- [puresnmp](https://github.com/exhuma/puresnmp) - 依存関係のない純粋なPython 3製SNMPv2ライブラリ。![GitHub last commit](https://img.shields.io/github/last-commit/exhuma/puresnmp)
- [snimpy](https://github.com/vincentbernat/snimpy) - SNMPクエリを構築するための簡潔なインターフェースを提供するPythonベースのツール。![GitHub last commit](https://img.shields.io/github/last-commit/vincentbernat/snimpy)
- [python-netsnmpagent](https://github.com/pief/python-netsnmpagent) - Pythonでnet-snmpサブエージェントを作成できるパッケージ。![GitHub last commit](https://img.shields.io/github/last-commit/pief/python-netsnmpagent)
- [hnmp](https://github.com/trehn/hnmp) - ネットワークスイッチ、ルーター、プリンターなどSNMP対応デバイスからのデータ取得と処理を容易にする高レベルPythonライブラリ。![GitHub last commit](https://img.shields.io/github/last-commit/trehn/hnmp)
- [aiosnmp](https://github.com/hh-h/aiosnmp) - asyncioで使用する非同期SNMPクライアントPythonパッケージ。SNMP v2cのみ対応します。![GitHub last commit](https://img.shields.io/github/last-commit/hh-h/aiosnmp)
- [robotframework-snmplibrary](https://github.com/kontron/robotframework-snmplibrary) - SNMPをテストするためのRobot Frameworkテストライブラリ。![GitHub last commit](https://img.shields.io/github/last-commit/kontron/robotframework-snmplibrary)
- [Scapy](https://github.com/secdev/scapy) - パケット操作プログラム兼ライブラリ。SNMPパケットを構築・解析するための[モジュール](https://github.com/secdev/scapy/blob/master/scapy/layers/snmp.py)があります。![GitHub last commit](https://img.shields.io/github/last-commit/secdev/scapy)

### Ruby
- [ruby-netsnmp](https://github.com/swisscom/ruby-netsnmp) - Ruby用SNMPライブラリ（v1、v2c、v3）。

### Rust
- [snmp-parser](https://github.com/rusticata/snmp-parser) - nomパーサーコンビネーターフレームワークを使ってRustで書かれたSNMPパーサー。
- [davedufresne/modern_snmp](https://github.com/davedufresne/modern_snmp) - SNMPv3向けの純粋なRust製ライブラリ。このリポジトリにはsnmp_mp（SNMPv3 Message Processing）とsnmp_usm（SNMPv3用User-based Security Model（USM）の実装）crateが含まれます。
- [Svedrin/sunt](https://github.com/Svedrin/sunt) - Rustで書かれたSNMPエージェントの実装。

__[⬆ トップへ戻る](#contents)__


## ツール
_SNMPをより簡単に扱うためのツールです。_

### CLI
- [net-snmp tools](http://www.net-snmp.org/) - ここに掲載するアプリケーションはnet-snmpの一部です。
  - [encode_keychange](http://www.net-snmp.org/docs/man/encode_keychange.html) - SNMPv3用のKeyChange文字列を生成します。
  - [snmptranslate](http://www.net-snmp.org/docs/man/snmptranslate.html) - MIB OID名を数値形式とテキスト形式の間で変換します。
  - [snmpget](http://www.net-snmp.org/docs/man/snmpget.html) - SNMP GETリクエストを使ってネットワークエンティティと通信します。
  - [snmpgetnext](http://www.net-snmp.org/docs/man/snmpgetnext.html) - SNMP GETNEXTリクエストを使ってネットワークエンティティと通信します。
  - [snmpbulkget](http://www.net-snmp.org/docs/man/snmpbulkget.html) - SNMP GETBULKリクエストを使ってネットワークエンティティと通信します。
  - [snmpwalk](http://www.net-snmp.org/docs/man/snmpwalk.html) - SNMP GETNEXTリクエストを使って管理値のサブツリーを取得します。
  - [snmpbulkwalk](http://www.net-snmp.org/docs/man/snmpbulkwalk.html) - SNMP GETBULKリクエストを使って管理値のサブツリーを取得します。
  - [snmpset](http://www.net-snmp.org/docs/man/snmpset.html) - SNMP SETリクエストを使ってネットワークエンティティと通信します。
  - [snmptest](http://www.net-snmp.org/docs/man/snmptest.html) - SNMPリクエストを使ってネットワークエンティティと通信します。
  - [snmptable](https://net-snmp.sourceforge.io/docs/man/snmptable.html) - SNMPテーブルを取得し、表形式で表示します。
  - [snmpdelta](https://net-snmp.sourceforge.io/docs/man/snmpdelta.html) - SNMP Counter値の差分を監視します。
  - [snmpusm](http://www.net-snmp.org/docs/man/snmpusm.html) - SNMPv3のUser-based-securityユーザーテーブルを操作します。
  - [snmpvacm](http://www.net-snmp.org/docs/man/snmpvacm.html) - SNMPv3のView-based-access-control-module設定テーブルを操作します。
  - [snmpstatus](https://net-snmp.sourceforge.io/docs/man/snmpstatus.html) - ネットワークエンティティから所定の管理情報を取得します。
  - [snmpnetstat](https://net-snmp.sourceforge.io/docs/man/snmpnetstat.html) - SNMP経由でネットワークエンティティのネットワーク状態と設定情報を表示します。
  - [snmpdf](http://www.net-snmp.org/docs/man/snmpdf.html) - SNMPから収集した情報を使用し、Unixのdfツールのようにディスク情報を表示します。
  - [snmptrap](http://www.net-snmp.org/docs/man/snmptrap.html) - SNMP TRAPまたはINFORM通知メッセージを送信します。
  - [snmpinform](http://www.net-snmp.org/docs/man/snmptrap.html) - INFORM通知メッセージを送信します。snmpinformコマンドは機能的にsnmptrap -Ciと同じです。
  - [snmptrapd](http://www.net-snmp.org/docs/man/snmptrapd.html) - SNMP TRAPまたはINFORMを待ち受け、ログ記録や処理を行うSNMPデーモン。
  - [traptoemail](https://net-snmp.sourceforge.io/docs/man/traptoemail.html) - SNMPトラップをメールへ変換するsnmptrapdハンドラースクリプト。
  - [net-snmp-config](https://net-snmp.sourceforge.io/docs/man/net-snmp-config.html) - インストール済みのnet-snmpライブラリとバイナリに関する情報を返します。
  - [snmpconf](https://net-snmp.sourceforge.io/docs/man/snmpconf.html) - SNMP設定ファイルを作成・変更します。
  - [fixproc](https://net-snmp.sourceforge.io/docs/man/fixproc.html) - 指定したアクションを実行してプロセスを修復します。
  - [snmpd](http://www.net-snmp.org/docs/man/snmpd.html) - 指定したホストへのSNMPリクエストに応答するSNMPエージェント。
  - [mib2c](https://net-snmp.sourceforge.io/docs/man/mib2c.html) - MIB構造をCコードなど別の形式へ変換できるMIB変換ユーティリティ。
  - [mib2c-update](https://net-snmp.sourceforge.io/docs/man/mib2c-update.html) - 更新されたmib2cコードへカスタムコードをマージするスクリプト。
- [SNMP4JCLT](https://www.agentpp.com/tools/snmp4jclt.html) - SNMP4J Command Line Tool（CLT）を使用し、IPv4またはv6ベースのUDP、TCP、TLSv1,2トランスポートで対象へSNMPv1/v2c/v3リクエストとトラップを送信します（`Commercial`）。
- [libsmi tools](https://www.ibr.cs.tu-bs.de/projects/libsmi/) - libsmi上に構築され、libsmiディストリビューションへ統合されたアプリケーションとsh/awkスクリプト。
  - [smilint](https://www.ibr.cs.tu-bs.de/projects/libsmi/smilint.html) - MIBまたはPIBモジュールの構文エラーと一定範囲の意味を検査します。SMIv1/v2形式のMIBモジュールとSPPI PIBモジュールに対応します。
  - [smidump](https://www.ibr.cs.tu-bs.de/projects/libsmi/smidump.html) - MIB/PIBコンパイラー。モジュールの内容をSMIv1、SMIv2、SMIng、SPPI、Import Trees、Type Definition Trees、OID Node Trees、MOSY Style、JIDM仕様に基づくCORBA IDL定義など多様な形式で出力できます。
  - [smidiff](https://www.ibr.cs.tu-bs.de/projects/libsmi/smidiff.html) - MIBモジュールの2つのリビジョンを解析し、旧版から新版への変更を分析するツール。
  - [smiquery](https://www.ibr.cs.tu-bs.de/projects/libsmi/smiquery.html) - MIB/PIBクエリ用フロントエンド。コマンドラインから個別の項目を問い合わせられます。
  - [smistrip](https://www.ibr.cs.tu-bs.de/projects/libsmi/smistrip.html) - RFCやInternet Draftなどの文書からMIBおよびPIBモジュールを抽出できる簡潔なshell/awkスクリプト。
- [snmpsim](https://github.com/etingof/snmpsim) - 2-clause BSD licenseで配布される、純粋なPython製のオープンソースかつ無償のSNMPエージェントシミュレーター実装。
- [snmpfwd](https://github.com/etingof/snmpfwd) - 組み込みSNMPメッセージルーターを備え、アプリケーションレベルのプロキシとして動作するSNMP Proxy Forwarder。一般的な用途は、アプリケーションレベルのファイアウォール、またはSNMPv1/SNMPv2cエンティティへのSNMPv3アクセス（およびその逆）を可能にするプロトコル変換器です。
- [snmpclitools](https://github.com/etingof/snmpclitools) - 純粋なPythonで書かれたコマンドラインSNMPツール集。著名なNet-SNMP版を模倣し、snmpget.py、snmpset.py、snmpwalk.py、snmpbulkwalk.py、snmptrap.py、snmptranslate.pyを含みます。詳細は[こちら](https://snmplabs.thola.io/snmpclitools/)を参照してください。
- [snmpwn](https://github.com/hatlord/snmpwn) - SNMPv3のユーザー列挙・攻撃ツール。
- [trapperkeeper](https://github.com/dropbox/trapperkeeper) - SNMPトラップを取り込み、表示するためのツールスイート。snmptrapdの代替となり、既存のステートフル監視ソリューションを補完するよう設計されています。
- [SNMP Trap Translator](http://www.snmptt.org/) - Net-SNMP / UCD-SNMPのsnmptrapdプログラム（www.net-snmp.org）で使用する、Perl製SNMPトラップハンドラーSNMPTT（SNMP Trap Translator）。
  - [snmptt](http://www.snmptt.org/docs/snmptt.shtml) - Net-SNMP / UCD-SNMPのsnmptrapdプログラム（www.net-snmp.org）で使用するPerl製SNMPトラップハンドラー。Linux、Unix、Windowsに対応します。
  - [snmpttconvert](http://www.snmptt.org/docs/snmpttconvert.shtml) - 一部ベンダーが提供する、HP OpenviewユーティリティでHP Openviewへインポート可能なファイルを、snmpttで使用する形式へ変換する簡潔なPerlスクリプト。
  - [snmpttconvertmib](http://www.snmptt.org/docs/temp/snmpttconvertmib.shtml) - MIBファイルを読み、TRAP-TYPE（v1）またはNOTIFICATION-TYPE（v2）定義をsnmpttが読める設定ファイルへ変換するPerlスクリプト。
- [prometheus/snmp_exporter](https://github.com/prometheus/snmp_exporter) - Prometheusが取り込める形式でSNMPデータを公開するための推奨エクスポーター。
- [trailofbits/onesixtyone](https://github.com/trailofbits/onesixtyone) - 高速SNMPスキャナー。
- [SECFORCE/SNMP-Brute](https://github.com/SECFORCE/SNMP-Brute) - 高速なSNMPブルートフォース、列挙、CISCO設定ダウンロード、パスワード解析スクリプト。
- [hatlord/snmpwn](https://github.com/hatlord/snmpwn) - SNMPv3ユーザー列挙・攻撃ツール。
- [zabbix-tools/mib2zabbix](https://github.com/zabbix-tools/mib2zabbix) - SNMP MIBファイル内のOIDツリーから、Zabbix v3 TemplateをXML形式で生成するPerlスクリプト。
- [OIDrage](https://github.com/patrickscottbest/OIDrage) - 任意のsnmpwalk出力を基にする軽量なスタンドアロンSNMPd模倣サーバー。数千台のサーバーのモックへ容易に拡張できます。

### GUI
- [tkmib](http://www.net-snmp.org/) - SNMP向けの対話型Perl/TkグラフィカルMIBブラウザー。
- [agentpp/MIB Designer](https://www.agentpp.com/tools/mibdesigner.html) - MIB Designerを使ってSMI仕様を作成、編集、管理、探索します（`Commercial`）。
- [agentpp/MIB Explorer Pro](https://www.agentpp.com/tools/mibexplorer.html) - MIB Explorerを使ってSNMPv1/2c/3エンティティを参照、設定、テストとデバッグ、監視、検出します。
- [sharpsnmp/SNMP Pro](https://www.sharpsnmp.com/) - VS Code内のクロスプラットフォームMIB Designer/Compiler/Browser、v1/v2c/v3の完全対応、MIB/SMI v1・v2対応、エミュレーター、AIツール向けMCPブリッジを備えた最新SNMP製品群。商用およびオープンソースの.NETライブラリも含まれます。
- [paessler/snmptester](https://www.paessler.com/tools/snmptester) - SNMP監視設定における通信またはデータの問題を見つけるため、SNMPの動作をデバッグできるWindows用ツール。
- [ireasoning/MIB Browser](http://ireasoning.com/mibbrowser.shtml) - 標準MIB、独自MIB、さらに一部の不正な形式のMIBを読み込めます。SNMPリクエストを発行してエージェントのデータを取得したり、エージェントを変更したりできます。個人利用は無料です。
- [ireasoning/SNMP Agent Simulator](http://ireasoning.com/snmpsimulator.shtml) - SNMPv1/v2c/v3エージェントをシミュレートできる、Javaベースの無料SNMP Agent Simulatorアプリケーション。
- [Visual SNMP](https://github.com/sisraell/VisualSNMP) - SNMPエージェントへのアクセスをテストする簡潔なツール。現在は機能に一部制限があるものの、SNMPGETとSNMPWALKに対応しています。
- [muonics/Online MIB validator](http://www.muonics.com/Tools/smicheck.php) - MIB Smithy SDKを基にした無料オンラインMIB/PIBバリデーター。
- [toni-moreno/snmpcollector](https://github.com/toni-moreno/snmpcollector) - Web管理インターフェースを備えた高機能な汎用オープンソースSNMPデータコレクター。SNMPプロトコルに対応する任意のデバイスからデータを取得する設定を簡素化し、結果をInfluxDBバックエンドへ送ることを主目的とします。
- [Unbrowse SNMP](https://www.unleashnetworks.com/products/unbrowse-snmp.html) - 難解なMIBファイルを分かりやすいGUI表示へコンパイルし、デバイス上のMIB変数の取得・設定、snmpwalkダンプのインポート、トラップ受信、カウンターのグラフ化などを行えるツール。
- [TWSNMP FK](https://github.com/twsnmp/twsnmpfk) - ネットワークマッピング、ポーリング、AI分析を備えたWindowsおよびMac OS向け超軽量SNMPマネージャー。


__[⬆ トップへ戻る](#contents)__


## 出版物
_ハウツー、チュートリアル、ブログ記事、ドキュメント、書籍。_

### 書籍
- [The Networknomicon, or SNMP Mastery by Abdul Alhazred and Michael W. Lucas](https://mwl.io/nonfiction/networking#networknomicon) - Simple Network Management Protocol、すなわちSNMPにより、虚空から古代の標準を呼び出せます。SNMPはネットワークとサーバーの秘密を暴き、不注意なら、それらを名状しがたい悪夢へ再構成します。さらに現代コンピューティングの根底に広がる、異質で広大な次元へ未熟な脳をさらします。
- [SNMP Mastery by Michael W. Lucas](https://mwl.io/nonfiction/networking#snmp) - SNMP、Simple Network Management Protocol――1つの略語に4つの嘘？
- [SNMP MIB Handbook by Larry Walsh](https://www.amazon.com/SNMP-MIB-Handbook-Larry-Walsh/dp/0981492207) - SNMP MIBの開発、利用、診断に関する必携ガイド。
- [Mauro, D. and Schmidt, K., 2005. Essential SNMP: Help for System and Network Administrators. " O'Reilly Media, Inc.".](https://www.amazon.com/Essential-SNMP-System-Network-Administrators-ebook/dp/B0043EWUZ2) - Essential SNMPは商用・オープンソースの両パッケージを取り上げ、OID、MIB、コミュニティ文字列、トラップなどの要素を詳しく解説します。5つの新章と全体にわたるさまざまな更新を収録しています。
- [Snmp, Snmpv2, Snmpv3, and Rmon 1 and 2 by William Stallings](https://www.amazon.com/Snmp-Snmpv2-Snmpv3-William-Stallings/dp/0201485346) - ネットワーク管理者、マネージャー、設計者に向けた、SNMPベースのネットワークおよびインターネットワーク管理についての簡潔で焦点を絞った実践ガイド。
- [Perkins, D. and McGinnis, E., 1997. Understanding SNMP MIBs (p. 528). Englewood Cliffs: Prentice Hall PTR.](https://www.amazon.com/Understanding-SNMP-MIBs-David-Perkins/dp/0134377087) - SNMP MIBの記述に関する、初の完全かつ実践的な内部者向けガイド。

### RFC
- [rfc1098](https://tools.ietf.org/rfc/rfc1098.txt) - Simple Network Management Protocol（バージョン1）。
- [rfc1155](https://tools.ietf.org/rfc/rfc1155.txt) - 管理情報の構造と識別。
- [rfc2578](https://tools.ietf.org/rfc/rfc2578.txt) - 管理情報構造バージョン2（SMIv2）。
- [rfc2741](https://tools.ietf.org/rfc/rfc2741.txt) - Agent Extensibility（AgentX）Protocolバージョン1。
- [rfc2742](https://tools.ietf.org/rfc/rfc2742.txt) - 拡張可能なSNMPエージェント用管理対象オブジェクトの定義。
- [rfc3410](https://tools.ietf.org/rfc/rfc3410.txt) - インターネット標準管理フレームワークの概要と適用可能性に関する声明。
- [rfc3411](https://tools.ietf.org/rfc/rfc3411.txt) - Simple Network Management Protocol（SNMP）管理フレームワークを記述するアーキテクチャ。
- [rfc3412](https://tools.ietf.org/rfc/rfc3412.txt) - Simple Network Management Protocol（SNMP）のメッセージ処理とディスパッチ。
- [rfc3413](https://tools.ietf.org/rfc/rfc3413.txt) - Simple Network Management Protocol（SNMP）アプリケーション。
- [rfc3414](https://tools.ietf.org/rfc/rfc3414.txt) - Simple Network Management Protocol（SNMPv3）バージョン3のUser-based Security Model（USM）。
- [rfc3415](https://tools.ietf.org/rfc/rfc3415.txt) - Simple Network Management Protocol（SNMP）のView-based Access Control Model（VACM）。
- [rfc3416](https://tools.ietf.org/rfc/rfc3416.txt) - Network Management Protocol（SNMP）プロトコル操作のバージョン2。
- [rfc3417](https://tools.ietf.org/rfc/rfc3417.txt) - Simple Network Management Protocol（SNMP）のトランスポートマッピング。
- [rfc3418](https://www.ietf.org/rfc/rfc3418.txt) - Simple Network Management Protocol（SNMP）のManagement Information Base（MIB）。
- [rfc3584](https://tools.ietf.org/rfc/rfc3584.txt) - インターネット標準Network Management Frameworkのバージョン1、2、3の共存。
- [rfc3826](https://tools.ietf.org/rfc/rfc3826.txt) - SNMP User-based Security ModelのAdvanced Encryption Standard（AES）暗号アルゴリズム。
- [rfc4088](https://tools.ietf.org/rfc/rfc4088.txt) - Simple Network Management Protocol（SNMP）のUniform Resource Identifier（URI）スキーム。
- [rfc5343](https://www.rfc-editor.org/rfc/rfc5343.txt) - Simple Network Management Protocol（SNMP）のContext EngineID Discovery。
- [rfc5590](https://www.rfc-editor.org/rfc/rfc5590.txt) - Simple Network Management Protocol（SNMP）のトランスポートサブシステム。
- [rfc5591](https://www.rfc-editor.org/rfc/rfc5591.txt) - Simple Network Management Protocol（SNMP）のトランスポートサブシステム。
- [rfc5592](https://www.rfc-editor.org/rfc/rfc5592.txt) - Simple Network Management Protocol（SNMP）のSecure Shell Transport Model。
- [rfc7630](https://www.rfc-editor.org/rfc/rfc7630.txt) - SNMPv3用User-based Security Model（USM）のHMAC-SHA-2認証プロトコル。

### チュートリアル
- [net-snmp tutorials](http://www.net-snmp.org/wiki/index.php/Tutorials) - SNMPプロトコルの基礎からnet-snmpライブラリを使ったSNMPアプリケーションやエージェントの実装まで、さまざまなチュートリアルを掲載するWikiページ。

__[⬆ トップへ戻る](#contents)__

## 公開サーバー
- [snmp.ireasoning.com](http://ireasoning.com/pubtest.php) - テスト目的で利用できる無料の公開SNMPエージェント。

__[⬆ トップへ戻る](#contents)__


## MIBリポジトリ
- [hsnodgrass/snmp_mib_archive](https://github.com/hsnodgrass/snmp_mib_archive) - 3,000を超える固有のSNMP MIBのアーカイブ。
- [kcsinclair/mibs](https://github.com/kcsinclair/mibs) - SNMPで使用される別のMIBコレクション。全一覧を確認するにはリポジトリをcloneしてください。
- [mibdepot.com](http://www.mibdepot.com) - SNMPコミュニティ向け無料サービス。MIB辞書と、12,000を超えるSNMP MIBおよび1,800,000を超えるMIBオブジェクト定義を収録した業界独自の検索エンジンを提供します。
- [oid-info.com](http://oid-info.com) - Object Identifier（OID）に関する情報を収集し、その情報を表示、更新、検索するツールを提供するOIDリポジトリ。
- [michaelfmcnamara.com](https://blog.michaelfmcnamara.com/mibs/) - Michael McNamaraが手作業で厳選したMIB一覧。
- [snmplink.org/OnLineMIB](http://www.snmplink.org) - 組み込みMIBビューアーでMIB一式のドキュメントを表示するウェブサイト。
  - [OnLineMIB/Standards](http://www.snmplink.org/OnLineMIB/Standards/) - 標準（ATM Forum、IANA、RFC）― RFC1065-5324。
  - [OnLineMIB/Cisco](http://www.snmplink.org/OnLineMIB/Cisco/) - Cisco。
  - [OnLineMIB/Juniper](http://www.snmplink.org/OnLineMIB/Juniper/) - Juniper。
  - [OnLineMIB/Extreme](http://www.snmplink.org/OnLineMIB/Extreme/) - Extreme。
  - [OnLineMIB/Brocade](http://www.snmplink.org/OnLineMIB/Brocade/) - Brocade。
- [oidview.com/mibs](http://www.oidview.com/mibs/detail.html) - さまざまなベンダーによる7,000を超える固有のMIBを収録するリポジトリ。

__[⬆ トップへ戻る](#contents)__


## その他
_このリストに属するものの、分類が難しい項目。_

- [SNMPLink.org](http://snmplink.org/) - SNMP、MIB（Management Information Base）、ネットワーク管理、ネットワーク監視に関するリンクと情報を提供します。
- [SNMPTools.net](https://www.snmptools.net/) - SNMPアプリケーション、ツールキット、ゲートウェイ、シミュレーター、MIBブラウザーなどに関するリンクと情報を提供します。

__[⬆ トップへ戻る](#contents)__

## 貢献
まず[貢献ガイドライン](https://github.com/eozer/awesome-snmp/blob/eecb6b92a02b310fa8a46bb12c17643fdfee7f61/contributing.md)に簡単に目を通してください。すべての貢献者に感謝します。
