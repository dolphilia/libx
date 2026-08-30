---
title: "Awesome Web Security"
description: "Web Securityを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-qazbnm456-awesome-web-security-readme-md"
---

# Awesome Web Security

Web Securityを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 {#contents}

- [Digests](#digests)
- [Forums](#forums)
- [Introduction](#intro)
  - [XSS](#xss---cross-site-scripting)
  - [Prototype Pollution](#prototype-pollution)
  - [CSV Injection](#csv-injection)
  - [SQL Injection](#sql-injection)
  - [Command Injection](#command-injection)
  - [ORM Injection](#orm-injection)
  - [FTP Injection](#ftp-injection)
  - [XXE](#xxe---xml-external-entity)
  - [CSRF](#csrf---cross-site-request-forgery)
  - [Clickjacking](#clickjacking)
  - [SSRF](#ssrf---server-side-request-forgery)
  - [Web Cache Poisoning](#web-cache-poisoning)
  - [Relative Path Overwrite](#relative-path-overwrite)
  - [Open Redirect](#open-redirect)
  - [SAML](#saml)
  - [Upload](#upload)
  - [Rails](#rails)
  - [AngularJS](#angularjs)
  - [ReactJS](#reactjs)
  - [SSL/TLS](#ssltls)
  - [Webmail](#webmail)
  - [NFS](#nfs)
  - [AWS](#aws)
  - [Azure](#azure)
  - [Fingerprint](#fingerprint)
  - [Sub Domain Enumeration](#sub-domain-enumeration)
  - [Crypto](#crypto)
  - [Web Shell](#web-shell)
  - [OSINT](#osint)
  - [DNS Rebinding](#dns-rebinding)
  - [Deserialization](#deserialization)
  - [OAuth](#oauth)
  - [JWT](#jwt)
- [Evasions](#evasions)
  - [XXE](#evasions-xxe)
  - [CSP](#evasions-csp)
  - [WAF](#evasions-waf)
  - [JSMVC](#evasions-jsmvc)
  - [Authentication](#evasions-authentication)
- [Tricks](#tricks)
  - [CSRF](#tricks-csrf)
  - [Clickjacking](#tricks-clickjacking)
  - [Remote Code Execution](#tricks-rce)
  - [XSS](#tricks-xss)
  - [SQL Injection](#tricks-sql-injection)
  - [NoSQL Injection](#tricks-nosql-injection)
  - [FTP Injection](#tricks-ftp-injection)
  - [XXE](#tricks-xxe)
  - [SSRF](#tricks-ssrf)
  - [Web Cache Poisoning](#tricks-web-cache-poisoning)
  - [Header Injection](#tricks-header-injection)
  - [URL](#tricks-url)
  - [Deserialization](#tricks-deserialization)
  - [OAuth](#tricks-oauth)
  - [Others](#tricks-others)
- [Browser Exploitation](#browser-exploitation)
- [PoCs](#pocs)
  - [Database](#pocs-database)
- [Cheetsheets](#cheetsheets)
- [Tools](#tools)
  - [Auditing](#tools-auditing)
  - [Command Injection](#tools-command-injection)
  - [Reconnaissance](#tools-reconnaissance)
    - [OSINT](#tools-osint)
    - [Sub Domain Enumeration](#tools-sub-domain-enumeration)
  - [Code Generating](#tools-code-generating)
  - [Fuzzing](#tools-fuzzing)
  - [Scanning](#tools-scanning)
  - [Penetration Testing](#tools-penetration-testing)
  - [Offensive](#tools-offensive)
    - [XSS](#tools-xss)
    - [SQL Injection](#tools-sql-injection)
    - [Template Injection](#tools-template-injection)
    - [XXE](#tools-xxe)
    - [CSRF](#tools-csrf)
    - [SSRF](#tools-ssrf)
  - [Leaking](#tools-leaking)
  - [Detecting](#tools-detecting)
  - [Preventing](#tools-preventing)
  - [Proxy](#tools-proxy)
  - [Webshell](#tools-webshell)
  - [Disassembler](#tools-disassembler)
  - [Decompiler](#tools-decompiler)
  - [DNS Rebinding](#tools-dns-rebinding)
  - [Others](#tools-others)
- [Social Engineering Database](#social-engineering-database)
- [Blogs](#blogs)
- [Twitter Users](#twitter-users)
- [Practices](#practices)
  - [Application](#practices-application)
  - [AWS](#practices-aws)
  - [XSS](#practices-xss)
  - [ModSecurity / OWASP ModSecurity Core Rule Set](#practices-modsecurity)
- [Community](#community)
- [Miscellaneous](#miscellaneous)

## ダイジェスト {#digests}

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - [Trail of Bits](https://www.trailofbits.com/)によって書かれました。
- [Hacker101](https://www.hacker101.com/) - [hackerone](http://web.archive.org/web/20200630164946/https://www.hackerone.com/start-hacking)によって書かれました。
- [Infosec Newbie](https://www.sneakymonkey.net/2017/04/23/infosec-newbie/) - [Mark Robinson](https://www.sneakymonkey.net/)によって書かれました。
- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings/) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。
- [The Daily Swig - Web security digest](https://portswigger.net/daily-swig) - [PortSwigger](https://portswigger.net/)によって書かれました。
- [The Magic of Learning](https://bitvijays.github.io/) - [@bitvijays](http://web.archive.org/web/20230519134723/https://bitvijays.github.io/aboutme.html)によって書かれました。
- [Web Application Security Zone by Netsparker](https://www.netsparker.com/blog/web-security/) - [Netsparker](https://www.netsparker.com/)によって書かれました。
- [tl;dr sec](https://tldrsec.com/) - 週間トップセキュリティツール、ブログ記事、セキュリティ研究のまとめ。

## フォーラム {#forums}

- [Dark Reading](https://www.darkreading.com/Default.asp) - 情報セキュリティコミュニティを結びつける。
- [HackDig](http://en.hackdig.com/) - ハイクオリティのウェブセキュリティ記事をハッカー向けに掘り下げます。
- [Phrack Magazine](https://www.phrack.org/) - ハッカーたちが書いた、ハッカーたちのために書かれたサイト。
- [Security Weekly](https://securityweekly.com/) - セキュリティパッドキャストネットワーク
- [The Hacker News](https://thehackernews.com/) - 深刻なレベルでのセキュリティ。
- [The Register](https://www.theregister.co.uk/) - ITが支えている手を噛む。

<a name="intro"></a>
## はじめに {#introduction}

<a name="xss"></a>
### XSS - Cross-Site Scripting

- [C.XSS Guide](https://excess-xss.com/) - [@JakobKallin](https://github.com/JakobKallin)と[Irene Lobo Valbuena](https://www.linkedin.com/in/irenelobovalbuena/)が執筆しました。
- [Cross-Site Scripting – Application Security – Google](https://www.google.com/intl/sw/about/appsecurity/learning/xss/) - [Google](https://www.google.com/)によって書かれました。
- [H5SC](https://github.com/cure53/H5SC) - [@cure53](https://github.com/cure53)によって書かれました。
- [THE BIG BAD WOLF - XSS AND MAINTAINING ACCESS](https://www.paulosyibelo.com/2018/06/the-big-bad-wolf-xss-and-maintaining.html) - [Paulos Yibelo](https://www.paulosyibelo.com/)によって書かれた
- [AwesomeXSS](https://github.com/s0md3v/AwesomeXSS) - [@s0md3v](https://github.com/s0md3v)によって書かれました。
- [XSS.png](https://github.com/LucaBongiorni/XSS.png) - @jackmasaによって書かれました。
- [PayloadsAllTheThings - XSS Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XSS%20Injection) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。
- [payloadbox/xss-payload-list](https://github.com/payloadbox/xss-payload-list) - [@payloadbox](https://github.com/payloadbox)によって執筆されました。
- [Laravel Content Security Policy: Complete Implementation Guide](https://blog.shakiltech.com/laravel-content-security-policy-guide/) - Laravelにおけるコンテンツセキュリティポリシーの実装ガイド — nonceのライフサイクル、ViteおよびLivewireの統合、違反報告、および事前実施チェックリスト、[@itxshakil](https://github.com/itxshakil)による。

<a name="prototype-pollution"></a>
### Prototype Pollution

- [Prototype pollution attack in NodeJS application](https://github.com/HoLyVieR/prototype-pollution-nsec18/blob/master/paper/JavaScript_prototype_pollution_attack_in_NodeJS.pdf) - [@HoLyVieR](https://github.com/HoLyVieR)によって執筆されました。
- [Real-world JS - 1](https://blog.p6.is/Real-World-JS-1/) - [@po6ix](https://twitter.com/po6ix)によって執筆されました。
- [Exploiting prototype pollution – RCE in Kibana (CVE-2019-7609)](https://research.securitum.com/prototype-pollution-rce-kibana-cve-2019-7609/) - [@securitymb](https://twitter.com/securitymb)によって執筆されました。

<a name="csv-injection"></a>
### CSV Injection

- [CSV Injection -> Meterpreter on Pornhub](https://news.webamooz.com/wp-content/uploads/bot/offsecmag/147.pdf) - [Andy](https://blog.zsec.uk/)によって執筆されました。
- [The Absurdly Underestimated Dangers of CSV Injection](https://georgemauer.net/2017/10/07/csv-injection.html) - [George Mauer](https://georgemauer.net/)によって執筆されました。
- [PayloadsAllTheThings - CSV Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSV%20Injection) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。

<a name="sql-injection"></a>
### SQL Injection

- [SQL Injection Cheat Sheet](https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/) - [@netsparker](https://twitter.com/netsparker)によって執筆されました。
- [SQL Injection Pocket Reference](https://websec.ca/kb/sql_injection) - [@LightOS](https://twitter.com/LightOS)によって執筆されました。
- [SQL Injection Wiki](https://sqlwiki.netspi.com/) - [NETSPI](https://www.netspi.com/)によって執筆されました。
- [PayloadsAllTheThings - SQL Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SQL%20Injection) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。
- [payloadbox/sql-injection-payload-list](https://github.com/payloadbox/sql-injection-payload-list) - [@payloadbox](https://github.com/payloadbox)によって執筆されました。

<a name="command-injection"></a>
### Command Injection

- [Potential command injection in resolv.rb](https://github.com/ruby/ruby/pull/1777) - [@drigg3r](https://github.com/drigg3r)によって執筆されました。
- [PayloadsAllTheThings - Command Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Command%20Injection) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。
- [payloadbox/command-injection-payload-list](https://github.com/payloadbox/command-injection-payload-list) - [@payloadbox](https://github.com/payloadbox)によって執筆されました。

<a name="orm-injection"></a>
### ORM Injection

- [HQL : Hyperinsane Query Language (or how to access the whole SQL API within a HQL injection ?)](https://www.synacktiv.com/ressources/hql2sql_sstic_2015_en.pdf) - [@_m0bius](https://twitter.com/_m0bius)によって執筆されました。
- [HQL for pentesters](https://blog.h3xstream.com/2014/02/hql-for-pentesters.html) - [@h3xstream](https://twitter.com/h3xstream/)によって執筆されました。
- [ORM Injection](https://www.slideshare.net/simone.onofri/orm-injection) - [Simone Onofri](https://onofri.org/)によって執筆されました。
- [ORM2Pwn: Exploiting injections in Hibernate ORM](https://www.slideshare.net/0ang3el/orm2pwn-exploiting-injections-in-hibernate-orm) - [Mikhail Egorov](https://0ang3el.blogspot.tw/)によって執筆されました。

<a name="ftp-injection"></a>
### FTP Injection

- [Advisory: Java/Python FTP Injections Allow for Firewall Bypass](http://blog.blindspotsecurity.com/2017/02/advisory-javapython-ftp-injections.html) - [Timothy Morgan](https://plus.google.com/105917618099766831589)が執筆。
- [SMTP over XXE − how to send emails using Java's XML parser](https://shiftordie.de/blog/2017/02/18/smtp-over-xxe/) - [Alexander Klink](https://shiftordie.de/)によって執筆されました。

<a name="xxe"></a>
### XXE - XML eXternal Entity

- [XXE](https://phonexicum.github.io/infosec/xxe.html) - [@phonexicum](https://twitter.com/phonexicum)によって執筆されました。
- [PayloadsAllTheThings - XXE Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XXE%20Injection) - さまざまな貢献者によって執筆されました。
- [XML external entity (XXE) injection](https://portswigger.net/web-security/xxe) - [portswigger](https://portswigger.net/)が執筆。
- [XML Schema, DTD, and Entity Attacks](https://www.vsecurity.com/download/publications/XMLDTDEntityAttacks.pdf) - [Timothy D. Morgan](https://twitter.com/ecbftw)とOmar Al Ibrahimによって執筆されました。
- [payloadbox/xxe-injection-payload-list](https://github.com/payloadbox/xxe-injection-payload-list) - [@payloadbox](https://github.com/payloadbox)によって執筆されました。

<a name="csrf"></a>
### CSRF - Cross-Site Request Forgery

- [Wiping Out CSRF](https://medium.com/@jrozner/wiping-out-csrf-ded97ae7e83f) - [@jrozner](https://medium.com/@jrozner)によって執筆されました。
- [PayloadsAllTheThings - CSRF Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSRF%20Injection) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。

<a name="clickjacking"></a>
### Clickjacking

- [Clickjacking](https://www.imperva.com/learn/application-security/clickjacking/) - [Imperva](https://www.imperva.com/)によって執筆されました。
- [X-Frame-Options: All about Clickjacking?](https://github.com/cure53/Publications/blob/master/xfo-clickjacking.pdf?raw=true) - [Mario Heiderich](https://www.slideshare.net/x00mario)によって書かれた

<a name="ssrf"></a>
### SSRF - Server-Side Request Forgery

- [SSRF bible. Cheatsheet](https://docs.google.com/document/d/1v1TkWZtrhzRLy0bYXBcdLUedXGb9njTNIJXa3u9akHM/edit) - [Wallarm](https://wallarm.com/)が執筆。
- [PayloadsAllTheThings - Server-Side Request Forgery](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Request%20Forgery) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。

<a name="web-cache-poisoning"></a>
### Web Cache Poisoning

- [Practical Web Cache Poisoning](https://portswigger.net/blog/practical-web-cache-poisoning) - [@albinowax](https://twitter.com/albinowax)が執筆。
- [PayloadsAllTheThings - Web Cache Deception](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Web%20Cache%20Deception) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。

<a name="relative-path-overwrite"></a>
### Relative Path Overwrite

- [Large-scale analysis of style injection by relative path overwrite](https://blog.acolyer.org/2018/05/28/large-scale-analysis-of-style-injection-by-relative-path-overwrite/) - [The Morning Paper](https://blog.acolyer.org/)によって執筆されました。
- [MBSD Technical Whitepaper - A few RPO exploitation techniques](https://www.mbsd.jp/Whitepaper/rpo.pdf) - [Mitsui Bussan Secure Directions, Inc.](https://www.mbsd.jp/)によって執筆されました。

<a name="open-redirect"></a>
### Open Redirect

- [Open Redirect Vulnerability](https://s0cket7.com/open-redirect-vulnerability/) - [s0cket7](https://s0cket7.com/)によって執筆されました。
- [PayloadsAllTheThings - Open Redirect](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Open%20Redirect) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。
- [payloadbox/open-redirect-payload-list](https://github.com/payloadbox/open-redirect-payload-list) - [@payloadbox](https://github.com/payloadbox)によって執筆されました。

<a name="saml"></a>
### Security Assertion Markup Language (SAML)

- [How to Hunt Bugs in SAML; a Methodology - Part I](https://epi052.gitlab.io/notes-to-self/blog/2019-03-07-how-to-test-saml-a-methodology/) - [epi](https://epi052.gitlab.io/notes-to-self/)によって執筆されました。
- [How to Hunt Bugs in SAML; a Methodology - Part II](https://epi052.gitlab.io/notes-to-self/blog/2019-03-13-how-to-test-saml-a-methodology-part-two/) - [epi](https://epi052.gitlab.io/notes-to-self/)によって執筆されました。
- [How to Hunt Bugs in SAML; a Methodology - Part III](https://epi052.gitlab.io/notes-to-self/blog/2019-03-16-how-to-test-saml-a-methodology-part-three/) - [epi](https://epi052.gitlab.io/notes-to-self/)によって執筆されました。
- [PayloadsAllTheThings - SAML Injection](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/SAML%20Injection) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。

<a name="upload"></a>
### Upload

- [File Upload Restrictions Bypass](https://www.exploit-db.com/docs/english/45074-file-upload-restrictions-bypass.pdf) - [Haboob Team](https://www.exploit-db.com/author/?a=9381)によって執筆されました。
- [PayloadsAllTheThings - Upload Insecure Files](https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Upload%20Insecure%20Files) - [@swisskyrepo](https://github.com/swisskyrepo)によって執筆されました。

<a name="rails"></a>
### Rails

- [Rails Security - First part](https://hackmd.io/s/SkuTVw5O-) - [@qazbnm456](https://github.com/qazbnm456)によって執筆されました。
- [Official Rails Security Guide](https://guides.rubyonrails.org/security.html) - [Rails team](https://rubyonrails.org/)によって執筆されました。
- [Rails SQL Injection](https://rails-sqli.org) - [@presidentbeef](https://github.com/presidentbeef)によって執筆されました。
- [Zen Rails Security Checklist](https://github.com/brunofacca/zen-rails-security-checklist) - [@brunofacca](https://github.com/brunofacca)によって執筆されました。

<a name="angularjs"></a>
### AngularJS

- [DOM based Angular sandbox escapes](https://blog.portswigger.net/2017/05/dom-based-angularjs-sandbox-escapes.html) - [@garethheyes](https://twitter.com/garethheyes)によって書かれた
- [XSS without HTML: Client-Side Template Injection with AngularJS](https://blog.portswigger.net/2016/01/xss-without-html-client-side-template.html) - [Gareth Heyes](https://www.blogger.com/profile/10856178524811553475)によって執筆されました。

<a name="reactjs"></a>
### ReactJS

- [XSS via a spoofed React element](http://danlec.com/blog/xss-via-a-spoofed-react-element) - [Daniel LeCheminant](http://danlec.com/)によって執筆されました。

<a name="ssl-tls"></a>
### SSL/TLS

- [SSL & TLS Penetration Testing](https://www.aptive.co.uk/blog/tls-ssl-security-testing/) - [APTIVE](https://www.aptive.co.uk/)によって執筆されました。
- [Practical introduction to SSL/TLS](https://github.com/Hakky54/mutual-tls-ssl) - [@Hakky54](https://github.com/Hakky54)によって執筆されました。
- [State of TLS on the public web](https://securemonk.io/insights/state-of-tls) - 数千台のスキャン済みホストを対象としたリアルタイムデータ調査：プロトコルの採用状況、TLSとヘッダーの成熟ギャップ、ECDSAがRSAと並行して採用される現象、証明書の有効期間とCA/Bフォーラム47日スケジュールの関係、およびOCSPスタッピングの終焉。各読み込み時にスキャンデータから図表を再計算。

<a name="webmail"></a>
### Webmail

- [Why mail() is dangerous in PHP](https://blog.ripstech.com/2017/why-mail-is-dangerous-in-php/) - [Robin Peraglie](https://www.ripstech.com/)によって執筆されました。

<a name="nfs"></a>
### NFS

- [NFS | PENETRATION TESTING ACADEMY](https://pentestacademy.wordpress.com/2017/09/20/nfs/?t=1&cn=ZmxleGlibGVfcmVjc18y&refsrc=email&iid=b34422ce15164e99a193fea0ccc7a02f&uid=1959680352&nid=244+289476616) - [PENETRATION ACADEMY](https://pentestacademy.wordpress.com/)によって執筆されました。

<a name="aws"></a>
### AWS

- [PENETRATION TESTING AWS STORAGE: KICKING THE S3 BUCKET](https://rhinosecuritylabs.com/penetration-testing/penetration-testing-aws-storage/) - ドゥイート・ホーンスティンから[Rhino Security Labs](https://rhinosecuritylabs.com/)で執筆されました。
- [AWS PENETRATION TESTING PART 1. S3 BUCKETS](https://www.virtuesecurity.com/aws-penetration-testing-part-1-s3-buckets/) - [VirtueSecurity](https://www.virtuesecurity.com/)によって執筆
- [AWS PENETRATION TESTING PART 2. S3, IAM, EC2](https://www.virtuesecurity.com/aws-penetration-testing-part-2-s3-iam-ec2/) - [VirtueSecurity](https://www.virtuesecurity.com/)によって執筆
- [Misadventures in AWS](https://labs.f-secure.com/blog/misadventures-in-aws) - Christian Demkoによって執筆

<a name="azure"></a>
### Azure

- [Cloud Security Risks (Part 1): Azure CSV Injection Vulnerability](https://rhinosecuritylabs.com/azure/cloud-security-risks-part-1-azure-csv-injection-vulnerability/) - [@spengietz](https://twitter.com/spengietz)によって執筆
- [Common Azure Security Vulnerabilities and Misconfigurations](https://rhinosecuritylabs.com/cloud-security/common-azure-security-vulnerabilities/) - [@rhinobenjamin](https://twitter.com/rhinobenjamin)によって執筆

<a name="fingerprint"></a>
### Fingerprint

<a name="sub-domain-enumeration"></a>
### Sub Domain Enumeration

- [A penetration tester’s guide to sub-domain enumeration](https://blog.appsecco.com/a-penetration-testers-guide-to-sub-domain-enumeration-7d842d5570f6) - [Bharath](https://blog.appsecco.com/@yamakira_)によって執筆
- [The Art of Subdomain Enumeration](https://blog.sweepatic.com/art-of-subdomain-enumeration/) - [Patrik Hudak](https://blog.sweepatic.com/author/patrik/)によって執筆

<a name="crypto"></a>
### Crypto

- [Applied Crypto Hardening](https://bettercrypto.org/) - [The bettercrypto.org Team](https://bettercrypto.org/)によって執筆
- [What is a Side-Channel Attack ?](https://www.csoonline.com/article/3388647/what-is-a-side-channel-attack-how-these-end-runs-around-encryption-put-everyone-at-risk.html) - [J.M Porup](https://www.csoonline.com/author/J.M.-Porup/)によって執筆

<a name="web-shell"></a>
### Web Shell

- [Hacking with JSP Shells](https://blog.netspi.com/hacking-with-jsp-shells/) - [@_nullbind](https://twitter.com/_nullbind)によって執筆
- [Hunting for Web Shells](https://www.tenable.com/blog/hunting-for-web-shells) - [Jacob Baines](https://www.tenable.com/profile/jacob-baines)によって執筆

<a name="osint"></a>
### OSINT

- [Hacking Cryptocurrency Miners with OSINT Techniques](https://medium.com/@s3yfullah/hacking-cryptocurrency-miners-with-osint-techniques-677bbb3e0157) - [@s3yfullah](https://medium.com/@s3yfullah)によって執筆
- [OSINT x UCCU Workshop on Open Source Intelligence](https://www.slideshare.net/miaoski/osint-x-uccu-workshop-on-open-source-intelligence) - [Philippe Lin](https://www.slideshare.net/miaoski)によって執筆
- [102 Deep Dive in the Dark Web OSINT Style Kirby Plessas](https://www.youtube.com/watch?v=fzd3zkAI_o4) - [@kirbstr](https://twitter.com/kirbstr)によって提示
- [The most complete guide to finding anyone’s email](https://www.blurbiz.io/blog/the-most-complete-guide-to-finding-anyones-email) - [Timur Daudpota](https://www.blurbiz.io/)によって執筆

<a name="dns-rebinding"></a>
### DNS Rebinding

- [Attacking Private Networks from the Internet with DNS Rebinding](https://medium.com/@brannondorsey/attacking-private-networks-from-the-internet-with-dns-rebinding-ea7098a2d325) - [@brannondorsey](https://medium.com/@brannondorsey)によって執筆
- [Hacking home routers from the Internet](https://medium.com/@radekk/hackers-can-get-access-to-your-home-router-1ddadd12a7a7) - [@radekk](https://medium.com/@radekk)によって執筆

<a name="deserialization"></a>
### Deserialization

- [What Do WebLogic, WebSphere, JBoss, Jenkins, OpenNMS, and Your Application Have in Common? This Vulnerability.](https://foxglovesecurity.com/2015/11/06/what-do-weblogic-websphere-jboss-jenkins-opennms-and-your-application-have-in-common-this-vulnerability/) - [@breenmachine](https://twitter.com/breenmachine)によって執筆
- [.NET Roulette: Exploiting Insecure Deserialization in Telerik UI](https://www.youtube.com/watch?v=--6PiuvBGAU) - [@noperator](https://twitter.com/noperator)によって執筆
- [Attacking .NET deserialization](https://www.youtube.com/watch?v=eDfGpu3iE4Q) - [@pwntester](https://twitter.com/pwntester)によって執筆
- [How to exploit the DotNetNuke Cookie Deserialization](https://pentest-tools.com/blog/exploit-dotnetnuke-cookie-deserialization/) - [CRISTIAN CORNEA](https://pentest-tools.com/blog/author/pentest-cristian/)によって書かれた
- [HOW TO EXPLOIT LIFERAY CVE-2020-7961 : QUICK JOURNEY TO POC](https://www.synacktiv.com/en/publications/how-to-exploit-liferay-cve-2020-7961-quick-journey-to-poc.html) - [@synacktiv](https://twitter.com/synacktiv)によって書かれた
- [Altus iX Developer XAML Deserialization RCE](https://0day-rubbish.com/blog/altus-ix-developer-xaml-rce) - SCADA HMIエンジニアリングIDEにおけるXAMLデシリアライズRCE（CVSS 7.3）の根本原因分析および再現可能なPoC、影響を受けるバージョンおよび自立したexploitスクリプトを、[0day Rubbish](https://github.com/Exploit-Garbage/0day-Rubbish)が公開

<a name="oauth"></a>
### OAuth

- [What is going on with OAuth 2.0? And why you should not use it for authentication.](https://medium.com/securing/what-is-going-on-with-oauth-2-0-and-why-you-should-not-use-it-for-authentication-5f47597b2611) - [@damianrusinek](https://medium.com/@damianrusinek)によって書かれた
- [Introduction to OAuth 2.0 and OpenID Connect](https://pragmaticwebsecurity.com/courses/introduction-oauth-oidc.html) - [@PhilippeDeRyck](https://twitter.com/PhilippeDeRyck)によって書かれた

<a name="jwt"></a>
### JWT

- [Hardcoded secrets, unverified tokens, and other common JWT mistakes](https://r2c.dev/blog/2020/hardcoded-secrets-unverified-tokens-and-other-common-jwt-mistakes/) - [@ermil0v](https://twitter.com/ermil0v)によって書かれた

## 回避手法 {#evasions}

<a name="evasions-xxe"></a>
### XXE

- [Bypass Fix of OOB XXE Using Different encoding](https://twitter.com/SpiderSec/status/1191375472690528256) - [@SpiderSec](https://twitter.com/SpiderSec)によって書かれた

<a name="evasions-csp"></a>
### CSP

- [CSP: bypassing form-action with reflected XSS](https://labs.detectify.com/2016/04/04/csp-bypassing-form-action-with-reflected-xss/) - [Detectify Labs](https://labs.detectify.com/)によって書かれた
- [TWITTER XSS + CSP BYPASS](https://www.paulosyibelo.com/2017/05/twitter-xss-csp-bypass.html) - [Paulos Yibelo](https://www.paulosyibelo.com/)によって書かれた
- [Neatly bypassing CSP](https://lab.wallarm.com/how-to-trick-csp-in-letting-you-run-whatever-you-want-73cb5ff428aa) - [Wallarm](https://wallarm.com/)が執筆。
- [Evading CSP with DOM-based dangling markup](https://portswigger.net/blog/evading-csp-with-dom-based-dangling-markup) - [portswigger](https://portswigger.net/)が執筆。
- [GitHub's CSP journey](https://githubengineering.com/githubs-csp-journey/) - [@ptoomey3](https://github.com/ptoomey3)によって書かれた
- [GitHub's post-CSP journey](https://githubengineering.com/githubs-post-csp-journey/) - [@ptoomey3](https://github.com/ptoomey3)によって書かれた
- [Any protection against dynamic module import?](https://github.com/w3c/webappsec-csp/issues/243) - [@shhnjk](https://twitter.com/@shhnjk)によって書かれた

<a name="evasions-waf"></a>
### WAF

- [Airbnb – When Bypassing JSON Encoding, XSS Filter, WAF, CSP, and Auditor turns into Eight Vulnerabilities](https://buer.haus/2017/03/08/airbnb-when-bypassing-json-encoding-xss-filter-waf-csp-and-auditor-turns-into-eight-vulnerabilities/) - [@Brett Buerhaus](https://twitter.com/bbuerhaus)によって書かれた
- [How to bypass libinjection in many WAF/NGWAF](https://medium.com/@d0znpp/how-to-bypass-libinjection-in-many-waf-ngwaf-1e2513453c0f) - [@d0znpp](https://medium.com/@d0znpp)によって書かれた
- [Web Application Firewall (WAF) Evasion Techniques](https://medium.com/secjuice/waf-evasion-techniques-718026d693d8) - [@secjuice](https://twitter.com/secjuice)によって書かれた
- [Web Application Firewall (WAF) Evasion Techniques #2](https://medium.com/secjuice/web-application-firewall-waf-evasion-techniques-2-125995f3e7b0) - [@secjuice](https://twitter.com/secjuice)によって書かれた

<a name="evasions-jsmvc"></a>
### JSMVC

- [JavaScript MVC and Templating Frameworks](https://www.slideshare.net/x00mario/jsmvcomfg-to-sternly-look-at-javascript-mvc-and-templating-frameworks) - [Mario Heiderich](https://www.slideshare.net/x00mario)によって書かれた

<a name="evasions-authentication"></a>
### 認証 {#authentication}

- [Trend Micro Threat Discovery Appliance - Session Generation Authentication Bypass (CVE-2016-8584)](https://blog.malerisch.net/2017/04/trend-micro-threat-discovery-appliance-session-generation-authentication-bypass-cve-2016-8584.html) - によって書かれた','およびによって書かれた [@malerisch](https://twitter.com/malerisch) [@steventseeley](https://twitter.com/steventseeley)

## テクニック {#tricks}

<a name="tricks-csrf"></a>
### CSRF

- [Exploiting CSRF on JSON endpoints with Flash and redirects](https://blog.appsecco.com/exploiting-csrf-on-json-endpoints-with-flash-and-redirects-681d4ad6b31b) - [@riyazwalikar](https://blog.appsecco.com/@riyazwalikar)によって書かれた
- [Neat tricks to bypass CSRF-protection](https://zhuanlan.zhihu.com/p/32716181) - [Twosecurity](https://twosecurity.io/)によって書かれた
- [Stealing CSRF tokens with CSS injection (without iFrames)](https://github.com/dxa4481/cssInjection) - [@dxa4481](https://github.com/dxa4481)によって書かれた
- [Cracking Java’s RNG for CSRF - Javax Faces and Why CSRF Token Randomness Matters](https://blog.securityevaluators.com/cracking-javas-rng-for-csrf-ea9cacd231d2) - [@rramgattie](https://blog.securityevaluators.com/@rramgattie)によって書かれた
- [If HttpOnly You Could Still CSRF… Of CORS you can!](https://medium.com/@_graphx/if-httponly-you-could-still-csrf-of-cors-you-can-5d7ee2c7443) - [@GraphX](https://twitter.com/GraphX)によって書かれた

<a name="tricks-clickjacking"></a>
### Clickjacking

- [Clickjackings in Google worth 14981.7$](https://medium.com/@raushanraj_65039/google-clickjacking-6a04132b918a) - [@raushanraj_65039](https://medium.com/@raushanraj_65039)によって書かれた

<a name="tricks-rce"></a>
### Remote Code Execution

- [DRUPAL 7.X SERVICES MODULE UNSERIALIZE() TO RCE](https://www.ambionics.io/blog/drupal-services-module-rce) - [Ambionics Security](https://www.ambionics.io/)によって書かれた
- [Exploiting Node.js deserialization bug for Remote Code Execution](https://opsecx.com/index.php/2017/02/08/exploiting-node-js-deserialization-bug-for-remote-code-execution/) - [OpSecX](https://opsecx.com/index.php/author/ajinabraham/)によって書かれた
- [GitHub Enterprise Remote Code Execution](https://bounty.github.com/researchers/iblue.html) - [@iblue](https://github.com/iblue)によって書かれた
- [How I Chained 4 vulnerabilities on GitHub Enterprise, From SSRF Execution Chain to RCE!](https://blog.orange.tw/2017/07/how-i-chained-4-vulnerabilities-on.html) - [Orange](https://blog.orange.tw/)が執筆
- [How we exploited a remote code execution vulnerability in math.js](https://capacitorset.github.io/mathjs/) - [@capacitorset](https://github.com/capacitorset)によって書かれた
- [$36k Google App Engine RCE](https://sites.google.com/site/testsitehacking/-36k-google-app-engine-rce) - [Ezequiel Pereira](https://sites.google.com/site/testsitehacking/)が執筆した.
- [Poor RichFaces](https://codewhitesec.blogspot.com/2018/05/poor-richfaces.html) - [CODE WHITE](https://www.code-white.com/)によって書かれた
- [Remote Code Execution on a Facebook server](https://blog.scrt.ch/2018/08/24/remote-code-execution-on-a-facebook-server/) - [@blaklis_](https://twitter.com/blaklis_)によって書かれた
- [Evil Teacher: Code Injection in Moodle](https://blog.ripstech.com/2018/moodle-remote-code-execution/) - [RIPS Technologies](https://www.ripstech.com/)によって書かれた
- [WebLogic RCE (CVE-2019-2725) Debug Diary](https://paper.seebug.org/910/) - Badcode@Knownsec 404 Team によって書かれた
- [What Do WebLogic, WebSphere, JBoss, Jenkins, OpenNMS, and Your Application Have in Common? This Vulnerability.](https://foxglovesecurity.com/2015/11/06/what-do-weblogic-websphere-jboss-jenkins-opennms-and-your-application-have-in-common-this-vulnerability/) - [@breenmachine](https://twitter.com/@breenmachine)によって書かれた
- [CVE-2019-1306: ARE YOU MY INDEX?](https://www.thezdi.com/blog/2019/10/23/cve-2019-1306-are-you-my-index) - [@yu5k3](https://twitter.com/yu5k3)によって書かれた

<a name="tricks-xss"></a>
### XSS

- [DON'T TRUST THE DOM: BYPASSING XSS MITIGATIONS VIA SCRIPT GADGETS](https://www.blackhat.com/docs/us-17/thursday/us-17-Lekies-Dont-Trust-The-DOM-Bypassing-XSS-Mitigations-Via-Script-Gadgets.pdf) - [Sebastian Lekies](https://twitter.com/slekies), [Krzysztof Kotowicz](https://twitter.com/kkotowicz), and [Eduardo Vela](https://twitter.com/sirdarckcat) によって書かれた
- [ECMAScript 6 from an Attacker's Perspective - Breaking Frameworks, Sandboxes, and everything else](https://www.slideshare.net/x00mario/es6-en) - [Mario Heiderich](https://www.slideshare.net/x00mario)によって書かれた
- [How I found a $5,000 Google Maps XSS (by fiddling with Protobuf)](https://medium.com/@marin_m/how-i-found-a-5-000-google-maps-xss-by-fiddling-with-protobuf-963ee0d9caff#.u50nrzhas) - [@marin_m](https://medium.com/@marin_m)によって書かれた
- [Query parameter reordering causes redirect page to render unsafe URL](https://hackerone.com/reports/293689) - [kenziy](https://hackerone.com/kenziy)によって書かれた
- [Uber XSS via Cookie](https://zhchbin.github.io/2017/08/30/Uber-XSS-via-Cookie/) - [zhchbin](https://zhchbin.github.io/)によって書かれた
- [Stored XSS on Facebook](https://opnsec.com/2018/03/stored-xss-on-facebook/) - [Enguerran Gillier](https://opnsec.com/)によって書かれた
- [DOM XSS – auth.uber.com](http://stamone-bug-bounty.blogspot.tw/2017/10/dom-xss-auth14.html) - [StamOne_](https://stamone-bug-bounty.blogspot.tw/)によって書かれた
- [Another XSS in Google Colaboratory](https://blog.bentkowski.info/2018/09/another-xss-in-google-colaboratory.html) - [Michał Bentkowski](https://blog.bentkowski.info/)が執筆。
- [XSS in Google Colaboratory + CSP bypass](https://blog.bentkowski.info/2018/06/xss-in-google-colaboratory-csp-bypass.html) - [Michał Bentkowski](https://blog.bentkowski.info/)が執筆。
- [</script> is filtered ?](https://twitter.com/strukt93/status/931586377665331200) - [@strukt93](https://twitter.com/strukt93)によって書かれた
- [XSS-Auditor — the protector of unprotected and the deceiver of protected.](https://medium.com/bugbountywriteup/xss-auditor-the-protector-of-unprotected-f900a5e15b7b) - [@terjanq](https://medium.com/@terjanq)によって書かれた
- [XSS without parentheses and semi-colons](https://portswigger.net/blog/xss-without-parentheses-and-semi-colons) - [@garethheyes](https://twitter.com/garethheyes)によって書かれた
- [Upgrade self XSS to Exploitable XSS an 3 Ways Technic](https://www.hahwul.com/2019/11/upgrade-self-xss-to-exploitable-xss.html) - [HAHWUL](https://www.hahwul.com/)によって書かれた
- [Exploiting XSS with 20 characters limitation](https://jlajara.gitlab.io/posts/2019/11/30/XSS_20_characters.html) - [Jorge Lajara](https://jlajara.gitlab.io/)によって書かれた
- [$20000 Facebook DOM XSS](https://vinothkumar.me/20000-facebook-dom-xss/) - [@vinodsparrow](https://twitter.com/vinodsparrow)によって書かれた

<a name="tricks-sql-injection"></a>
### SQL Injection

- [GitHub Enterprise SQL Injection](https://blog.orange.tw/2017/01/bug-bounty-github-enterprise-sql-injection.html) - [Orange](https://blog.orange.tw/)が執筆
- [SQL injection in an UPDATE query - a bug bounty story!](http://zombiehelp54.blogspot.jp/2017/02/sql-injection-in-update-query-bug.html) - [Zombiehelp54](https://zombiehelp54.blogspot.jp/)によって書かれた
- [Making a Blind SQL Injection a little less blind](https://medium.com/@tomnomnom/making-a-blind-sql-injection-a-little-less-blind-428dcb614ba8) - [TomNomNom](https://twitter.com/TomNomNom)によって書かれた
- [Red Team Tales 0x01: From MSSQL to RCE](https://www.tarlogic.com/en/blog/red-team-tales-0x01/) - [Tarlogic](https://www.tarlogic.com/en/cybersecurity-blog/)によって書かれた
- [MySQL Error Based SQL Injection Using EXP](https://www.exploit-db.com/docs/english/37953-mysql-error-based-sql-injection-using-exp.pdf) - [@osandamalith](https://twitter.com/osandamalith)によって書かれた
- [SQL INJECTION AND POSTGRES - AN ADVENTURE TO EVENTUAL RCE](https://pulsesecurity.co.nz/articles/postgres-sqli) - [@denandz](https://github.com/denandz)によって書かれた

<a name="tricks-nosql-injection"></a>
### NoSQL Injection

- [GraphQL NoSQL Injection Through JSON Types](https://www.petecorey.com/blog/2017/06/12/graphql-nosql-injection-through-json-types/) - [Pete](https://www.petecorey.com/work/)によって書かれた

<a name="tricks-ftp-injection"></a>
### FTP Injection

- [XML Out-Of-Band Data Retrieval](https://media.blackhat.com/eu-13/briefings/Osipov/bh-eu-13-XML-data-osipov-slides.pdf) - [@a66at](https://twitter.com/a66at)およびAlexey Osipovが執筆
- [XXE OOB exploitation at Java 1.7+](http://lab.onsec.ru/2014/06/xxe-oob-exploitation-at-java-17.html) - [Ivan Novikov](http://lab.onsec.ru/)が執筆

<a name="tricks-xxe"></a>
### XXE

- [Evil XML with two encodings](https://mohemiv.com/all/evil-xml/) - [Arseniy Sharoglazov](https://mohemiv.com/)が執筆
- [Automating local DTD discovery for XXE exploitation](https://www.gosecure.net/blog/2019/07/16/automating-local-dtd-discovery-for-xxe-exploitation) - [Philippe Arteau](https://twitter.com/h3xstream)が執筆
- [Exploiting XXE with local DTD files](https://mohemiv.com/all/exploiting-xxe-with-local-dtd-files/) - [Arseniy Sharoglazov](https://twitter.com/_mohemiv)が執筆
- [Forcing XXE Reflection through Server Error Messages](https://blog.netspi.com/forcing-xxe-reflection-server-error-messages/) - [Antti Rantasaari](https://blog.netspi.com/author/antti-rantasaari/)が執筆
- [Pre-authentication XXE vulnerability in the Services Drupal module](https://www.synacktiv.com/ressources/synacktiv_drupal_xxe_services.pdf) - [Renaud Dubourguais](https://twitter.com/_m0bius)が執筆
- [What You Didn't Know About XML External Entities Attacks](https://2013.appsecusa.org/2013/wp-content/uploads/2013/12/WhatYouDidntKnowAboutXXEAttacks.pdf) - [Timothy D. Morgan](https://twitter.com/ecbftw)が執筆
- [XML Out-Of-Band Data Retrieval](https://media.blackhat.com/eu-13/briefings/Osipov/bh-eu-13-XML-data-osipov-slides.pdf) - Timur YunusovおよびAlexey Osipovが執筆
- [XXE in WeChat Pay Sdk ( WeChat leave a backdoor on merchant websites)](https://seclists.org/fulldisclosure/2018/Jul/3) - [Rose Jackcode](https://twitter.com/codeshtool)が執筆
- [XXE OOB exploitation at Java 1.7+ (2014)](http://lab.onsec.ru/2014/06/xxe-oob-exploitation-at-java-17.html) - FTPプロトコルによる情報漏洩 - [Ivan Novikov](https://twitter.com/d0znpp/)が執筆
- [XXE OOB extracting via HTTP+FTP using single opened port](https://skavans.ru/en/2017/12/02/xxe-oob-extracting-via-httpftp-using-single-opened-port/) - [skavans](https://skavans.ru/)が執筆

<a name="tricks-ssrf"></a>
### SSRF

- [A New Era of SSRF - Exploiting URL Parser in Trending Programming Languages!](https://www.blackhat.com/docs/us-17/thursday/us-17-Tsai-A-New-Era-Of-SSRF-Exploiting-URL-Parser-In-Trending-Programming-Languages.pdf) - [Orange](https://blog.orange.tw/)が執筆
- [SSRF in https://imgur.com/vidgif/url](https://hackerone.com/reports/115748) - [aesteral](https://hackerone.com/aesteral)が執筆
- [SSRF Tips](http://blog.safebuff.com/2016/07/03/SSRF-Tips/) - [xl7dev](http://blog.safebuff.com/)が執筆
- [PHP SSRF Techniques](https://medium.com/secjuice/php-ssrf-techniques-9d422cb28d51) - [@themiddleblue](https://medium.com/@themiddleblue)が執筆
- [SSRF in Exchange leads to ROOT access in all instances](https://hackerone.com/reports/341876) - [@0xacb](https://twitter.com/0xacb)が執筆
- [Into the Borg – SSRF inside Google production network](https://opnsec.com/2018/07/into-the-borg-ssrf-inside-google-production-network/) - [opnsec](https://opnsec.com/)が執筆
- [Piercing the Veil: Server Side Request Forgery to NIPRNet access](https://medium.com/bugbountywriteup/piercing-the-veil-server-side-request-forgery-to-niprnet-access-c358fd5e249a) - [Alyssa Herrera](https://medium.com/@alyssa.o.herrera)が執筆
- [All you need to know about SSRF and how may we write tools to do auto-detect](https://www.auxy.xyz/web%20security/2017/07/06/all-ssrf-knowledge.html) - [@Auxy233](https://twitter.com/Auxy233)が執筆
- [AWS takeover through SSRF in JavaScript](https://10degres.net/aws-takeover-through-ssrf-in-javascript/) - [Gwen](https://10degres.net/)が執筆しました。

<a name="tricks-web-cache-poisoning"></a>
### Web Cache Poisoning

- [Bypassing Web Cache Poisoning Countermeasures](https://portswigger.net/blog/bypassing-web-cache-poisoning-countermeasures) - [@albinowax](https://twitter.com/albinowax)が執筆。
- [Cache poisoning and other dirty tricks](https://lab.wallarm.com/cache-poisoning-and-other-dirty-tricks-120468f1053f) - [Wallarm](https://wallarm.com/)が執筆。

<a name="tricks-header-injection"></a>
### Header Injection

- [Java/Python FTP Injections Allow for Firewall Bypass](http://blog.blindspotsecurity.com/2017/02/advisory-javapython-ftp-injections.html) - [Timothy Morgan](https://plus.google.com/105917618099766831589)が執筆。

<a name="tricks-url"></a>
### URL

- [[dev.twitter.com] XSS](https://blog.blackfan.ru/2017/09/devtwittercom-xss.html) - [Sergey Bobrov](https://blog.blackfan.ru/)が執筆。
- [Phishing with Unicode Domains](https://www.xudongz.com/blog/2017/idn-phishing/) - [Xudong Zheng](https://www.xudongz.com/)が執筆。
- [Some Problems Of URLs](https://noncombatant.org/2017/11/07/problems-of-urls/) - [Chris Palmer](https://noncombatant.org/about/)が執筆。
- [Unicode Domains are bad and you should feel bad for supporting them](https://www.vgrsec.com/post20170219.html) - [VRGSEC](https://www.vgrsec.com/)が執筆。

<a name="tricks-deserialization"></a>
### Deserialization

- [ASP.NET resource files (.RESX) and deserialisation issues](https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2018/august/aspnet-resource-files-resx-and-deserialisation-issues/) - [@irsdl](https://twitter.com/irsdl)が執筆。

<a name="tricks-oauth"></a>
### OAuth

- [Facebook OAuth Framework Vulnerability](https://www.amolbaikar.com/facebook-oauth-framework-vulnerability/) - [@AmolBaikar](https://twitter.com/AmolBaikar)が執筆。

<a name="tricks-others"></a>
### その他 {#others}

- [Inducing DNS Leaks in Onion Web Services](https://github.com/epidemics-scepticism/writing/blob/master/onion-dns-leaks.md) - [@epidemics-scepticism](https://github.com/epidemics-scepticism)が執筆。
- [Stored XSS, and SSRF in Google using the Dataset Publishing Language](https://s1gnalcha0s.github.io/dspl/2018/03/07/Stored-XSS-and-SSRF-Google.html) - [@signalchaos](https://twitter.com/signalchaos)が執筆。
- [How I hacked Google’s bug tracking system itself for $15,600 in bounties](https://medium.com/free-code-camp/messing-with-the-google-buganizer-system-for-15-600-in-bounties-58f86cc9f9a5) - [@alex.birsan](https://medium.com/@alex.birsan)が執筆。
- [Some Tricks From My Secret Group](https://www.leavesongs.com/SHARE/some-tricks-from-my-secret-group.html) - [phithon](https://www.leavesongs.com/)が執筆。

## ブラウザー攻撃 {#browser-exploitation}

### フロントエンド（SOP回避、URL偽装など） {#frontend-like-sop-bypass-url-spoofing-and-something-like-that}

- [IE11 Information disclosure - local file detection](https://www.facebook.com/ExploitWareLabs/photos/a.361854183878462.84544.338832389513975/1378579648872572/?type=3&theater) - ジェームズ・リーが執筆。
- [JSON hijacking for the modern web](https://blog.portswigger.net/2016/11/json-hijacking-for-modern-web.html) - [portswigger](https://portswigger.net/)が執筆。
- [SOP bypass / UXSS – Stealing Credentials Pretty Fast (Edge)](https://www.brokenbrowser.com/sop-bypass-uxss-stealing-credentials-pretty-fast/) - [Manuel](https://twitter.com/magicmac2000)が執筆。
- [Особенности Safari в client-side атаках](https://bo0om.ru/safari-client-side) - [Bo0oM](https://bo0om.ru/author/admin)が執筆。
- [How do we Stop Spilling the Beans Across Origins?](https://docs.google.com/document/d/1cbL-X0kV_tQ5rL8XJ3lXkV-j0pt_CfTu5ZSzYrncPDc/) - [aaj at google.com](mailto:aaj@google.com)と[mkwst at google.com](mailto:mkwst@google.com)が執筆。
- [Setting arbitrary request headers in Chromium via CRLF injection](https://blog.bentkowski.info/2018/06/setting-arbitrary-request-headers-in.html) - [Michał Bentkowski](https://blog.bentkowski.info/)が執筆。
- [I’m harvesting credit card numbers and passwords from your site. Here’s how.](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5) - [David Gilbertson](https://hackernoon.com/@david.gilbertson)によって書かれた
- [The inception bar: a new phishing method](https://jameshfisher.com/2019/04/27/the-inception-bar-a-new-phishing-method/) - [jameshfisher](https://jameshfisher.com/)によって書かれた
- [Bypassing Mobile Browser Security For Fun And Profit](https://www.blackhat.com/docs/asia-16/materials/asia-16-Baloch-Bypassing-Browser-Security-Policies-For-Fun-And-Profit-wp.pdf) - [@rafaybaloch](https://twitter.com/@rafaybaloch)によって書かれた
- [The Cookie Monster in Your Browsers](https://speakerdeck.com/filedescriptor/the-cookie-monster-in-your-browsers) - [@filedescriptor](https://twitter.com/filedescriptor)によって書かれた
- [The world of Site Isolation and compromised renderer](https://speakerdeck.com/shhnjk/the-world-of-site-isolation-and-compromised-renderer) - [@shhnjk](https://twitter.com/shhnjk)によって書かれた
- [Sending arbitrary IPC messages via overriding Function.prototype.apply](https://hackerone.com/reports/188086) - [@kinugawamasato](https://twitter.com/kinugawamasato)によって書かれた
- [Take Advantage of Out-of-Scope Domains in Bug Bounty Programs](https://ahussam.me/Take-Advantage-of-Out-of-Scope-Domains-in-Bug-Bounty/) - [@Abdulahhusam](https://twitter.com/Abdulahhusam)によって書かれた

### バックエンド（ブラウザー実装の中核、主にC/C++部分） {#backend-core-of-browser-implementation-and-often-refers-to-c-or-c-part}

- [Attacking JavaScript Engines - A case study of JavaScriptCore and CVE-2016-4622](https://www.phrack.org/papers/attacking_javascript_engines.html) - [phrack@saelo.net](mailto:phrack@saelo.net)によって書かれた
- [Exploiting a V8 OOB write.](https://halbecaf.com/2017/05/24/exploiting-a-v8-oob-write/) - [@halbecaf](https://twitter.com/halbecaf)によって書かれた
- [SSD Advisory – Chrome Turbofan Remote Code Execution](https://blogs.securiteam.com/index.php/archives/3379) - [SecuriTeam Secure Disclosure (SSD)](https://blogs.securiteam.com/)によって書かれた
- [Look Mom, I don't use Shellcode - Browser Exploitation Case Study for Internet Explorer 11](https://labs.bluefrostsecurity.de/files/Look_Mom_I_Dont_Use_Shellcode-WP.pdf) - [@moritzj](https://twitter.com/moritzj)によって書かれた
- [PUSHING WEBKIT'S BUTTONS WITH A MOBILE PWN2OWN EXPLOIT](https://www.zerodayinitiative.com/blog/2018/2/12/pushing-webkits-buttons-with-a-mobile-pwn2own-exploit) - [@wanderingglitch](https://twitter.com/wanderingglitch)によって書かれた
- [A Methodical Approach to Browser Exploitation](https://blog.ret2.io/2018/06/05/pwn2own-2018-exploit-development/) - [RET2 SYSTEMS, INC](https://blog.ret2.io/)によって書かれた
- [CVE-2017-2446 or JSC::JSGlobalObject::isHavingABadTime.](https://doar-e.github.io/blog/2018/07/14/cve-2017-2446-or-jscjsglobalobjectishavingabadtime/) - [Diary of a reverse-engineer](https://doar-e.github.io/)によって書かれた
- [Breaking UC Browser](https://habr.com/en/company/drweb/blog/452076/) - [Доктор Веб](https://www.drweb.ru/)によって書かれた
- [Three roads lead to Rome](http://blogs.360.cn/360safe/2016/11/29/three-roads-lead-to-rome-2/) - [@holynop](https://twitter.com/holynop)によって書かれた
- [CLEANLY ESCAPING THE CHROME SANDBOX](https://theori.io/research/escaping-chrome-sandbox) - [@tjbecker_](https://twitter.com/tjbecker_)によって書かれた

## PoCs

<a name="pocs-database"></a>
### データベース {#database}

- [awesome-cve-poc](https://github.com/qazbnm456/awesome-cve-poc) - [@qazbnm456](https://github.com/qazbnm456)によってキュレーションされたCVE PoCリスト
- [js-vuln-db](https://github.com/tunz/js-vuln-db) - [@tunz](https://github.com/tunz)によってJavaScriptエンジンのCVEとPoCの収集
- [Some-PoC-oR-ExP](https://github.com/coffeehb/Some-PoC-oR-ExP) - 各種の脆弱性PoC、Expの収集または作成 by [@coffeehb](https://github.com/coffeehb)
- [uxss-db](https://github.com/Metnew/uxss-db) - [@Metnew](https://github.com/Metnew) による UXSS CVE と PoC のコレクション
- [SPLOITUS](https://sploitus.com/) - [@i_bo0om](https://twitter.com/i_bo0om) によるエクスプロイトとツール検索エンジン
- [Exploit Database](https://www.exploit-db.com/) - [Offensive Security](https://www.offensive-security.com/) によるエクスプロイト、シェルコード、セキュリティ論文の最終アーカイブ

## チートシート {#cheetsheets}

- [Capture the Flag CheatSheet](https://github.com/uppusaikiran/awesome-ctf-cheatsheet) - [@uppusaikiran](https://github.com/uppusaikiran) による執筆
- [XSS Cheat Sheet - 2018 Edition](https://leanpub.com/xss) - [@brutelogic](https://twitter.com/brutelogic) による執筆

## ツール {#tools}

<a name="tools-auditing"></a>
### 監査 {#auditing}

- [A2SV](https://github.com/hahwul/a2sv) - [@hahwul](https://github.com/hahwul) による SSL バグ自動スキャンツール
- [prowler](https://github.com/Alfresco/prowler) - [@Alfresco](https://github.com/Alfresco)によるAWSセキュリティ評価、監査、強化ツール。
- [slurp](https://github.com/hehnope/slurp) - [@hehnope](https://github.com/hehnope) による S3 バケットのセキュリティ評価ツール

<a name="tools-command-injection"></a>
### Command Injection

- [commix](https://github.com/commixproject/commix) - [@commixproject](https://github.com/commixproject) によるオールインワンOSコマンドインジェクションおよびエクスプロイトツール

<a name="tools-reconnaissance"></a>
### 偵察 {#reconnaissance}

<a name="tools-osint"></a>
#### OSINT - Open-Source Intelligence

- [Censys](https://censys.io/) - [University of Michigan](https://umich.edu/) によるコンピュータサイエンティストがインターネットのデバイスとネットワークについて質問できる検索エンジン
- [FOCA](https://github.com/ElevenPaths/FOCA) - [ElevenPaths](https://www.elevenpaths.com/index.html) による FOCA（ドキュメントのメタデータや隠された情報を特定するツール）
- [FOFA](https://fofa.so/?locale=en) - [BAIMAOHUI](https://baimaohui.net/) によるサイバー空間検索エンジン
- [gitrob](https://github.com/michenriksen/Gitrob) - [@michenriksen](https://github.com/michenriksen) による GitHub オーガナイゼーション向けリコンツール
- [GSIL](https://github.com/FeeiCN/GSIL) - [@FeeiCN](https://github.com/FeeiCN) による GitHub センシティブ情報の漏洩
- [NSFOCUS](https://nti.nsfocus.com/) - NSFOCUS GLOBAL による THREAT INTELLIGENCE PORTAL
- [raven](https://github.com/0x09AL/raven) - [@0x09AL](https://github.com/0x09AL) による LinkedIn 情報収集ツール（ペントエストで組織の従業員情報を収集可能）
- [Shodan](https://www.shodan.io/) - [@shodanhq](https://twitter.com/shodanhq) による世界初のインターネット接続デバイス検索エンジン
- [SpiderFoot](https://www.spiderfoot.net/) - [@binarypool](https://twitter.com/binarypool) によるオープンソースフットプリントおよび情報収集ツール
- [urlscan.io](https://urlscan.io/) - [@heipei](https://twitter.com/heipei) によるウェブサイトとそのリソースを分析するサービス
- [xray](https://github.com/evilsocket/xray) - [@evilsocket](https://github.com/evilsocket) による公開ネットワークからのリコン、マッピングおよびOSINT収集ツール
- [ZoomEye](https://www.zoomeye.org/) - [@zoomeye_team](https://twitter.com/zoomeye_team) によるサイバースペース検索エンジン
- [Databases - start.me](https://start.me/p/QRENnO/databases) - [@technisette](https://twitter.com/technisette) によるOSINT研究に使えるさまざまなデータベース
- [peoplefindThor](https://peoplefindthor.dk/) - [postkassen](mailto:postkassen@oejvind.dk?subject=peoplefindthor.dk%20comments) によるFacebook上の人物の検索の簡単な方法
- [tinfoleak](https://github.com/vaguileradiaz/tinfoleak) - [@vaguileradiaz](https://github.com/vaguileradiaz) によるTwitterのインテリジェンス分析に最適なオープンソースツール
- [Photon](https://github.com/s0md3v/Photon) - [@s0md3v](https://github.com/s0md3v) によるOSINT用の驚異的な高速クロールツール
- [ReconDog](https://github.com/s0md3v/ReconDog) - [@s0md3v](https://github.com/s0md3v) によるリコンナイス・スイスアーマー・キナス
- [espi0n/Dockerfiles](https://github.com/espi0n/Dockerfiles) - [@espi0n](https://github.com/espi0n) によるさまざまなOSINTツールのDockerファイル
- [Raccoon](https://github.com/evyatarmeged/Raccoon) - [@evyatarmeged](https://github.com/evyatarmeged) によるリコンナイスおよび脆弱性スキャンに最適な高性能攻撃セキュリティツール
- [Social Mapper](https://github.com/SpiderLabs/social_mapper) - Jacob Wilkin(Greenwolf) によるソーシャルメディアのエnumerationおよび相関ツール [@SpiderLabs](https://github.com/SpiderLabs)
- [Marshall Extensions](https://github.com/bad-antics/marshall-extensions) - [@bad-antics](https://github.com/bad-antics) によるマーシャルプライバシーブラウザのOSINTおよびセキュリティ拡張機能、リコンナイスおよびセキュリティテストプラグインを提供
- [OpenBuckets](https://openbuckets.io/) - 任意のプロバイダーの誤設定公開クラウドストレージバケットを検索する検索エンジン
- [OSINT Projects](https://osintprojects.com) - WHOIS/RDAP、DNS、IP地理位置、SSL証明書の検査および証明書透明性のサブドメイン発見を支援する無料ウェブツール

<a name="tools-sub-domain-enumeration"></a>
#### Sub Domain Enumeration

- [AQUATONE](https://github.com/michenriksen/aquatone) - [@michenriksen](https://github.com/michenriksen) によるドメインフライオーバーツール
- [Certificate Search](https://crt.sh/) - 識別子（ドメイン名、組織名など）、証明書の指紋（SHA-1またはSHA-256）またはcrt.sh IDを入力して、証明書を検索するツール [@crtsh](https://github.com/crtsh)
- [Certificate Transparency](https://github.com/google/certificate-transparency) - グーグルの証明書透明性プロジェクトがSSL証明書システムのいくつかの構造的欠陥を修正 [@google](https://github.com/google)
- [domain_analyzer](https://github.com/eldraco/domain_analyzer) - 任意のドメインのセキュリティを分析するツール：可能な限りすべての情報を収集する [@eldraco](https://github.com/eldraco)
- [EyeWitness](https://github.com/ChrisTruncer/EyeWitness) - EyeWitnessはウェブサイトのスクリーンショットを撮影し、サーバーヘッダー情報を提供し、可能な場合にデフォルトの認証情報を特定するように設計されている [@ChrisTruncer](https://github.com/ChrisTruncer)
- [GSDF](https://github.com/We5ter/GSDF) - GoogleSSLdomainFinder というドメイン検索ツール [@We5ter](https://github.com/We5ter)
- [subDomainsBrute](https://github.com/lijiejie/subDomainsBrute) - ペンテストに使えるシンプルかつ高速なサブドメインブートストラスツール [@lijiejie](https://github.com/lijiejie)
- [VirusTotal domain information](https://www.virustotal.com/en/documentation/searching/#getting-domain-information) - [VirusTotal](https://www.virustotal.com/) によるドメイン情報の検索
- [Sublist3r](https://github.com/aboul3la/Sublist3r) - Sublist3rは、ペンテスト担当者向けのマルチスレッドサブドメインリスト生成ツールである [@aboul3la](https://github.com/aboul3la)．

<a name="tools-code-generating"></a>
### コード生成 {#code-generating}

- [VWGen](https://github.com/qazbnm456/VWGen) - 脆弱性のあるWebアプリケーション生成ツール by [@qazbnm456](https://github.com/qazbnm456)．

<a name="tools-fuzzing"></a>
### Fuzzing

- [charsetinspect](https://github.com/hack-all-the-things/charsetinspect) - マルチバイト文字セットを検査し、特定のユーザー定義プロパティを持つ文字を検出するスクリプト by [@hack-all-the-things](https://github.com/hack-all-the-things)．
- [IPObfuscator](https://github.com/OsandaMalith/IPObfuscator) - IPアドレスをDWORD形式に変換するシンプルなツール by [@OsandaMalith](https://github.com/OsandaMalith)．
- [wfuzz](https://github.com/xmendez/wfuzz) - Webアプリケーションブートストラッパー by [@xmendez](https://github.com/xmendez)．
- [domato](https://github.com/google/domato) - DOMファッズツール by [@google](https://github.com/google)．
- [FuzzDB](https://github.com/fuzzdb-project/fuzzdb) - ブラックボックスアプリケーションの故障注入およびリソース発見に用いる攻撃パターンとプリミティブの辞書．
- [dirhunt](https://github.com/Nekmo/dirhunt) - サイトのディレクトリ構造を検索・分析するための最適化されたウェブクロールツール by [@nekmo](https://github.com/Nekmo)．
- [ssltest](https://www.ssllabs.com/ssltest/) - 公開インターネット上の任意のSSLウェブサーバーの設定を深層分析するオンラインサービス．提供元： [Qualys SSL Labs](https://www.ssllabs.com)．
- [fuzz.txt](https://github.com/Bo0oM/fuzz.txt) - 危険なファイルの一覧 by [@Bo0oM](https://github.com/Bo0oM)．
- [wayparam](https://github.com/aleff-github/wayparam) - ウェブアプリケーションの過去のURLをウェイバックCDXAPIから取得し、ファッズ用に標準化されたパラメータ付きURLを出力する、クロスプラットフォームのPythonCLIツール by [@aleff-github](https://github.com/aleff-github)．

<a name="tools-scanning"></a>
### スキャン {#scanning}

- [JoomlaScan](https://github.com/drego85/JoomlaScan) - Joomla CMSにインストールされたコンポーネントを特定するための無料ソフトウェア。Joomscanの灰の上に構築されたもの by [@drego85](https://github.com/drego85)．
- [wpscan](https://github.com/wpscanteam/wpscan) - WPScanは、ブラックボックス方式でWordPressの脆弱性をスキャンするツール by [@wpscanteam](https://github.com/wpscanteam)．
- [WAScan](https://github.com/m4ll0k/WAScan) - オープンソースのウェブアプリケーションセキュリティスキャナーで、「ブラックボックス」手法を使用し、 [@m4ll0k](https://github.com/m4ll0k) によって開発された．
- [Nuclei](https://github.com/projectdiscovery/nuclei) - Nucleiは、テンプレートに基づく設定可能なターゲットスキャンの高速ツールであり、拡張性と使いやすさが非常に高い by [@projectdiscovery](https://github.com/projectdiscovery)．
- [Vigolium](https://github.com/vigolium/vigolium) - 高精度の脆弱性スキャナーで、アグエントAIとネイティブなスピード、モジュラリティ、正確性を融合しており、 [@j3ssie](https://github.com/j3ssie) によって維持されている．
- [ZAP by Checkmarx](https://zaproxy.org) - ZAPコアチームが維持するオープンソースのウェブアプリケーションセキュリティスキャナー．
- [Fray](https://github.com/dalisecurity/fray) - OWASPカテゴリにわたる6,300以上のパラメータ、AI支援された回避エンジン、27チェックの調査パイプライン、OWASP強化診断を備えたオープンソースWAF回避およびセキュリティテストツールセット by [@dalisecurity](https://github.com/dalisecurity)．
- [Trust Scan](https://github.com/undeadlist/trust-scan) - 脅威インテリジェンス（URLhaus、PhishTank、Spamhaus）と40以上のスキャンおよびフィッシングパターン検出を組み合わせたURLセキュリティスキャナー by [@undeadlist](https://github.com/undeadlist)．
- [ZeroTrust](https://github.com/sattyamjjain/zerotrust) - プライバシーを最優先とするChrome拡張機能で、ウェブサイトのセキュリティをデバイス上で分析し、HTTPS、フィッシング、悪意のあるスクリプト、クッキー準拠などのシグナルから信頼スコアを生成する、WebGPUを用いたオンデバイスAIによるもの by [@sattyamjjain](https://github.com/sattyamjjain)．
- [SecuriTool](https://securitool.js.org/) - Web監査、JWT攻撃・デコード、CVE検索、CSP評価、メールセキュリティ検査、サブドメイン検査など、29種のクライアント側Webセキュリティツールを集めた無料サービス。100%クライアント側で動作するプライバシー重視のオープンソースツールで、[@ReplikanteK](https://github.com/ReplikanteK)が開発。

<a name="tools-penetration-testing"></a>
### ペネトレーションテスト {#penetration-testing}

- [Burp Suite](https://portswigger.net/burp/) - Burp Suiteは、 [portswigger](https://portswigger.net/).によって提供されるウェブアプリケーションのセキュリティテストを行う統合プラットフォームです.
- [Astra](https://github.com/flipkart-incubator/astra) - REST APIの自動セキュリティテストによる [@flipkart-incubator](https://github.com/flipkart-incubator).
- [aws_pwn](https://github.com/dagrz/aws_pwn) - AWSのパッチテスト用のツール集による [@dagrz](https://github.com/dagrz).
- [grayhatwarfare](https://buckets.grayhatwarfare.com/) - 公開されたバケットによる [grayhatwarfare](https://www.grayhatwarfare.com/).
- [TIDoS-Framework](https://github.com/theInfectedDrake/TIDoS-Framework) - 偵察・OSINTから脆弱性分析までを扱う包括的なWebアプリケーション監査フレームワーク。[@_tID](https://github.com/theInfectedDrake)が開発。
- [numasec](https://github.com/FrancescoStabile/numasec) - AI駆動のパッチテストプラットフォームで、OWASPトップ10をカバーする10のエージェントと38の脆弱性スキャナーを統合管理している [@FrancescoStabile](https://github.com/FrancescoStabile).
- [ARS3NAL](https://github.com/inflictx/Arsenal) - オフライン優先、セルフホスト型のパッチテストおよびバグバウンティアーツ：検索可能なパラメータ、クリックで生成されるコマンドジェネレーター、GTFOBins、ワードリスト、内蔵されたCyberChef、リバースシェル、各脆弱性ごとのチェックリスト、ライブな静的デモを備えたもの — [@inflictx](https://github.com/inflictx).
- [Darkmoon](https://github.com/ASCIT31/Dark-Moon) - オープンソースの自律AIパッチテストプラットフォームで、MarkdownプレイブックとMCPを介してウェブ、クラウド、アクティブディレクトリ、Kubernetesにわたる80以上の攻撃ツールを統合管理し、各発見に対して証拠トレースを提供している [@ASCIT31](https://github.com/ASCIT31).

<a name="tools-offensive"></a>
### 攻撃 {#offensive}

<a name="tools-xss"></a>
#### XSS - Cross-Site Scripting

- [xssor2](https://github.com/evilcos/xssor2) - XSS'OR - JavaScriptでハッキングする [@evilcos](https://github.com/evilcos).
- [XSStrike](https://github.com/s0md3v/XSStrike) - XSStrikeはXSSのパラメータをフュージングおよびブートフォースするプログラムであり、またWAFを検出・回避できる [@s0md3v](https://github.com/s0md3v).
- [beef](https://github.com/beefproject/beef) - ブラウザエクスプロイトフレームワークプロジェクトによる [beefproject](https://beefproject.com).
- [JShell](https://github.com/s0md3v/JShell) - XSSでJavaScriptシェルを取得する [@s0md3v](https://github.com/s0md3v).
- [csp evaluator](https://csper.io/evaluator) - コンテンツセキュリティポリシーを評価するツールによる [Csper](https://csper.io).

<a name="tools-sql-injection"></a>
#### SQL Injection

- [sqlmap](https://github.com/sqlmapproject/sqlmap) - 自動SQLインジェクションおよびデータベース奪取ツール.

<a name="tools-template-injection"></a>
#### Template Injection

- [tplmap](https://github.com/epinna/tplmap) - サーバーサイドテンプレートインジェクションの検出およびエクスプロイトツールによる [@epinna](https://github.com/epinna).

<a name="tools-xxe"></a>
#### XXE

- [dtd-finder](https://github.com/GoSecure/dtd-finder) - ローカルDTDをリストアップし、それらを用いてXXEパラメータを生成する [@GoSecure](https://github.com/GoSecure).

<a name="tools-csrf"></a>
#### Cross Site Request Forgery

- [XSRFProbe](https://github.com/0xInfection/XSRFProbe) - [@0xInfection](https://github.com/0xinfection)による主要なCSRF監査・悪用ツールキット。

<a name="tools-ssrf"></a>
#### Server-Side Request Forgery

- [Open redirect/SSRF payload generator](https://tools.intigriti.io/redirector/) - オープンリダイレクト／SSRFパラメータ生成ツールによる [intigriti](https://www.intigriti.com/).

<a name="tools-leaking"></a>
### 情報漏えい {#leaking}

- [CSS-Keylogging](https://github.com/maxchehab/CSS-Keylogging) - Chrome拡張機能とExpressサーバーで、CSSのキーログ機能を悪用する [@maxchehab](https://github.com/maxchehab).
- [DVCS-Pillage](https://github.com/evilpacket/DVCS-Pillage) - ウェブにアクセス可能なGIT、HGおよびBZRリポジトリを [@evilpacket](https://github.com/evilpacket) でパルルする.
- [dvcs-ripper](https://github.com/kost/dvcs-ripper) - ウェブにアクセス可能な（分散型）バージョン管理システム：SVN/GIT/HG...を [@kost](https://github.com/kost) でリップする.
- [gitleaks](https://github.com/zricethezav/gitleaks) - 全リポジトリの履歴を検索し、セレクトやキーを特定する [@zricethezav](https://github.com/zricethezav) による.
- [GitMiner](https://github.com/UnkL4b/GitMiner) - GitHub上のコンテンツを高度に掘り下げて分析するツール [@UnkL4b](https://github.com/UnkL4b) による.
- [HTTPLeaks](https://github.com/cure53/HTTPLeaks) - ウェブサイトがHTTPリクエストを漏らすすべての可能性を [@cure53](https://github.com/cure53) で検出する.
- [pwngitmanager](https://github.com/allyshka/pwngitmanager) - パエンテスター向けのGitマネージャ [@allyshka](https://github.com/allyshka) による.
- [snallygaster](https://github.com/hannob/snallygaster) - HTTPサーバー上の秘密ファイルをスキャンするツール [@hannob](https://github.com/hannob) による.
- [LinkFinder](https://github.com/GerbenJavado/LinkFinder) - JavaScriptファイル内のエンドポイントを特定するPythonスクリプト [@GerbenJavado](https://github.com/GerbenJavado) による.
- [keyFinder](https://github.com/momenbasel/keyFinder) - Chrome拡張機能で、10の攻撃面において80以上の検出パターンとシャノンエントロピー分析を用いて、APIキー、トークン、認証情報の漏洩をパッシブにスキャンする [@momenbasel](https://github.com/momenbasel) による.

<a name="tools-detecting"></a>
### 検知 {#detecting}

- [bXSS](https://github.com/LewisArdern/bXSS) - bXSSは、 [cure53.de/m](https://cure53.de/m) から導入されたシンプルなブレインXSSアプリケーションであり、 [@LewisArdern](https://github.com/LewisArdern) によって作成された.
- [malware-jail](https://github.com/HynekPetrak/malware-jail) - 半自動JavaScriptマルウェア分析、デオブフィケーションおよびペイロード抽出用のサンドボックス [@HynekPetrak](https://github.com/HynekPetrak) による.
- [repo-supervisor](https://github.com/auth0/repo-supervisor) - コード内のセキュリティ構成ミスをスキャンし、パスワードや秘密情報を検索する.
- [retire.js](https://github.com/RetireJS/retire.js) - JavaScriptライブラリの脆弱性がある使用を検出するスキャナー [@RetireJS](https://github.com/RetireJS) による.
- [sqlchop](https://sqlchop.chaitin.cn/) - SQLインジェクション検出エンジン [chaitin](https://chaitin.com) による.
- [xsschop](https://xsschop.chaitin.cn/) - XSS検出エンジン [chaitin](https://chaitin.com) による.
- [OpenRASP](https://github.com/baidu/openrasp) - 百度（Baidu）が積極的に維持しているオープンソースRASPソリューション。コンテキスト認識アルゴリズムにより、ほぼゼロの誤検出を達成。また、サーバー負荷が高いため、パフォーマンスは3％未満の低下を観測している。
- [GuardRails](https://github.com/apps/guardrails) - GitHubアプリでプルリクエストにセキュリティフィードバックを提供する。

<a name="tools-preventing"></a>
### 防御 {#preventing}

- [js-xss](https://github.com/leizongmin/js-xss) - 信頼できないHTMLをクリーンアップ（XSS防止）し、白リストで指定された設定を使用する [@leizongmin](https://github.com/leizongmin) による.
- [Acra](https://github.com/cossacklabs/acra) - クライアントサイドのSQLデータベース暗号化エンジン、強力な選択暗号、SQLインジェクション防止および侵入検知を実現 [@cossacklabs](https://www.cossacklabs.com/) による.
- [DOMPurify](https://github.com/cure53/DOMPurify) - DOMのみを使用し、非常に高速かつ非常に耐性のあるXSSクリーンアップツール（HTML、MathML、SVG対応） [Cure53](https://cure53.de/) による.
- [Csper](https://csper.io) - コンテンツセキュリティポリシーの構築・評価・監視ツールセットで、クロスサイトスクリプティングを防止・検出する [Csper](https://csper.io) による.
- [UUSEC WAF](https://github.com/Safe3/uusec-waf/) - オープンソースのウェブアプリケーションファイアウォールおよびAPIセキュリティゲートウェイ、 [UUCORP](https://github.com/Safe3/) によって維持されている。
- [BunkerWeb](https://www.bunkerweb.io) - nginxに構築された次世代オープンソースWebアプリケーションファイアウォール。[Bunkerity](https://github.com/bunkerity)が維持している。
- [FCaptcha](https://github.com/WebDecoy/FCaptcha) - 行動分析、視覚AIアグエント検出、ヘッドレスブラウザのフィンガープリント、SHA-256プローブオブワークを備えたセルフホスト型CAPTCHA。[WebDecoy](https://github.com/WebDecoy)が維持している。
- [Pompelmi](https://github.com/pompelmi/pompelmi) - Node.js向けのプロセス内ファイルアップロードセキュリティミドルウェア。不信任アップロードをストレージ前にスキャンし、マルウェア、MIMEスポーフ、危険なアーカイブを検出。[pompelmi](https://github.com/pompelmi)が維持している。
- [WebDecoy](https://github.com/WebDecoy/wordpress-plugin) - ゼロ設定のWordPress用ボット検出プラグイン。WebDriver検出、ヘッドレスブラウザフィンガープリント、行動分析、SHA-256プローブオブワークを組み合わせている。[WebDecoy](https://github.com/WebDecoy)が維持している。
- [CrowdSec](https://www.crowdsec.net/) - Goで書かれたオープンソース協働IPS。訪問者の行動を分析し、運営者コミュニティ間で脅威シグナルを共有。[CrowdSec](https://github.com/crowdsecurity)が維持している。
- [Laravel CSP Generator](https://csp-generator.shakiltech.com) - Laravel向けのインタラクティブなコンテンツセキュリティポリシー作成ツール。非ネーム付きのPHPミドルウェアと違反報告を出力。[@itxshakil](https://github.com/itxshakil)が開発している。
- [verifyfetch](https://github.com/hamzaydia/verifyfetch) - SRIハッシュを使用したブラウザ側のインテグリティ検証と大容量ファイルのリサブスクライブダウンロード。CDNの侵害やサプライチェーン攻撃に対抗。[@hamzaydia](https://github.com/hamzaydia)が開発している。

<a name="tools-proxy"></a>
### プロキシ {#proxy}

- [Charles](https://www.charlesproxy.com/) - HTTPプロキシ／HTTPモニタ／リバースプロキシ。開発者が自機とインターネット間のすべてのHTTPおよびSSL／HTTPS通信を確認できるようにする。
- [mitmproxy](https://github.com/mitmproxy/mitmproxy) - [@mitmproxy](https://github.com/mitmproxy)が開発した、パーソナルテストやソフトウェア開発者向けのTLS対応インターセプティングHTTPプロキシ。

<a name="tools-webshell"></a>
### Webshell

- [reverse-shell](https://github.com/lukechilds/reverse-shell) - リバースシェルとしてのサービス。[@lukechilds](https://github.com/lukechilds)が提供している。
- [Reverse-Shell-Manager](https://github.com/WangYihang/Reverse-Shell-Manager) - Terminalを介したリバースシェルマネージャー。[@WangYihang](https://github.com/WangYihang)が提供している。
- [webshell](https://github.com/tennc/webshell) - [@tennc](https://github.com/tennc)が開発したウェブシェルオープンソースプロジェクト。
- [Webshell-Sniper](https://github.com/WangYihang/Webshell-Sniper) - Terminalでウェブサイトを管理するツール。[@WangYihang](https://github.com/WangYihang)が提供している。
- [Weevely](https://github.com/epinna/weevely3) - 武器化されたウェブシェル。[@epinna](https://github.com/epinna)が開発している。
- [nano](https://github.com/s0md3v/nano) - PHPシェルをコードゴルフで作成したシリーズ。[@s0md3v](https://github.com/s0md3v)が開発している。
- [PhpSploit](https://github.com/nil0x42/phpsploit) - 完全機能のC2フレームワーク。悪意あるPHPワンライナーによりウェブサーバーに静かに残存。[@nil0x42](https://github.com/nil0x42)が開発している。

<a name="tools-disassembler"></a>
### 逆アセンブラー {#disassembler}

- [Iaitō](https://github.com/hteso/iaito) - radare2逆エンジニアリングフレームワーク向けのQtおよびC++GUI。[@hteso](https://github.com/hteso)が開発している。
- [plasma](https://github.com/plasma-disassembler/plasma) - Plasmaはx86/ARM/MIPS向けのインタラクティブディアサムブラ。[@plasma-disassembler](https://github.com/plasma-disassembler)が開発している。
- [radare2](https://github.com/radare/radare2) - Unix風の逆エンジニアリングフレームワークおよびコマンドラインツール。[@radare](https://github.com/radare)が開発している。

<a name="tools-decompiler"></a>
### デコンパイラー {#decompiler}

- [CFR](https://www.benf.org/other/cfr/) - 別のJavaデコンパイラ。[@LeeAtBenf](https://twitter.com/LeeAtBenf)が開発している。

<a name="tools-dns-rebinding"></a>
### DNS Rebinding

- [DNS Rebind Toolkit](https://github.com/brannondorsey/dns-rebind-toolkit) - DNSリバインドエクスプロイトのためのフロントエンドJavaScriptフレームワーク。 [@brannondorsey](https://github.com/brannondorsey) によるDNSリバインドエクスプロイト開発を支援。
- [dref](https://github.com/mwrlabs/dref) - DNSリバインドエクスプロイトフレームワーク。Drefは [@mwrlabs](https://github.com/mwrlabs) によるDNSリバインドを実行。
- [Singularity of Origin](https://github.com/nccgroup/singularity) - 攻撃サーバーのDNS名のIPアドレスをターゲットマシンのIPアドレスに再結合し、ターゲットマシン上の脆弱ソフトウェアをエクスプロイトするために攻撃ペイロードを提供するための必要なコンポーネントを含む。 [@nccgroup](https://github.com/nccgroup) による。
- [Whonow DNS Server](https://github.com/brannondorsey/whonow) - 攻撃を即座に実行できる悪意のあるDNSサーバー。 [@brannondorsey](https://github.com/brannondorsey) による。

<a name="tools-others"></a>
### その他 {#others-1}

- [CyberChef](https://github.com/gchq/CyberChef) - Cyber Swiss Army Knife - エンクリプション、エンコーディング、圧縮およびデータ分析を行うウェブアプリ - [@GCHQ](https://github.com/gchq) による。
- [Dnslogger](https://wiki.skullsecurity.org/index.php?title=Dnslogger) - DNSログゲージ。 [@iagox86](https://github.com/iagox86) による。
- [cefdebug](https://github.com/taviso/cefdebug) - CEFデバッガーに接続するための最小コード。 [@taviso](https://github.com/taviso) による。
- [ctftool](https://github.com/taviso/ctftool) - インタラクティブなCTF探索ツール。 [@taviso](https://github.com/taviso) による。
- [ntlm_challenger](https://github.com/b17zr/ntlm_challenger) - HTTPチャレンジメッセージにおけるNTLMをパース。 [@b17zr](https://github.com/b17zr) による。

## ソーシャルエンジニアリングデータベース {#social-engineering-database}

- [haveibeenpwned](https://haveibeenpwned.com/) - データ漏洩によってアカウントが侵害されたかどうかを確認。 [Troy Hunt](https://www.troyhunt.com/) による。
- [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - あなたのメールアドレスまたはドメインがインフォスティーラーマルウェアによって侵害されたかどうかを確認。 [Hudson Rock](https://www.hudsonrock.com/) によって維持されている。

## ブログ {#blogs}

- [BRETT BUERHAUS](https://buer.haus/) - アプリケーションセキュリティに関する脆弱性の報告および自由な話題。
- [Broken Browser](https://www.brokenbrowser.com/) - ブラウザの脆弱性に関する楽しい実験。
- [James Kettle](http://albinowax.skeletonscribe.net/) - [PortSwigger Web Security](https://portswigger.net/) の研究責任者。
- [leavesongs](https://www.leavesongs.com/) - 中国の優れたウェブパルスティングエンジニア。
- [n0tr00t](https://www.n0tr00t.com/) - ~# n0tr00t セキュリティチーム。
- [OpnSec](https://opnsec.com/) - Open Mind Security!
- [Orange](https://blog.orange.tw/) - 台湾の優れたウェブパルスティングエンジニア。
- [Scrutiny](https://datarift.blogspot.tw/) - Dhiraj Mishraによるウェブブラウザによるインターネットセキュリティ。
- [RIPS Technologies](https://blog.ripstech.com/tags/security/) - PHPの脆弱性に関するレポート。
- [0Day Labs](https://blog.0daylabs.com/) - バグバウントとチャレンジの解説書が素晴らしい
- [Blog of Osanda](https://osandamalith.com/) - セキュリティ研究と逆エンジニアリング

## Twitterユーザー {#twitter-users}

- [@cure53berlin](https://twitter.com/cure53berlin) - [Cure53](https://cure53.de/)はドイツのセキュリティ企業
- [@filedescriptor](https://twitter.com/filedescriptor) - 活動的なパルセントレーターはツイートを頻繁にし、有用な記事を書いている
- [@garethheyes](https://twitter.com/garethheyes) - 英語のウェブパルセントレーター
- [@h3xstream](https://twitter.com/h3xstream/) - セキュリティ研究者。ウェブセキュリティ、暗号、パルセント、静的解析に興味があるが、最も尊敬するのはsamyである
- [@HackwithGitHub](https://twitter.com/HackwithGithub) - ハッカーとパルセントレーター向けのオープンソースハッキングツールを紹介する取り組み
- [@hasegawayosuke](https://twitter.com/hasegawayosuke) - 日本語のJavaScriptセキュリティ研究者
- [@kinugawamasato](https://twitter.com/kinugawamasato) - 日本語のウェブパルセントレーター
- [@XssPayloads](https://twitter.com/XssPayloads) - JavaScriptの不思議な使い方の世界とそれ以上のもの
- [@shhnjk](https://twitter.com/shhnjk) - ウェブとブラウザのセキュリティ研究者

## 実践 {#practices}

<a name="practices-application"></a>
### アプリケーション {#application}

- [SELinux Game](https://selinuxgame.org/) - SELinuxを学ぶには、パズルを解いてスキルを身につけよう。『[@selinuxgame](https://twitter.com/selinuxgame)』が執筆
- [BadLibrary](https://github.com/SecureSkyTechnology/BadLibrary) - 訓練用の脆弱なウェブアプリケーション - 『[@SecureSkyTechnology](https://github.com/SecureSkyTechnology)』が執筆
- [Hackxor](https://hackxor.net/) - 現実的なウェブアプリケーションハッキングゲーム - 『[@albinowax](https://twitter.com/albinowax)』が執筆
- [OWASP Juice Shop](https://github.com/juice-shop/juice-shop) - おそらく最も現代的で高度な不正なウェブアプリケーション - 『[@bkimminich](https://github.com/bkimminich)』と『[@owasp_juiceshop](https://twitter.com/owasp_juiceshop)』チームが執筆
- [Portswigger Web Security Academy](https://portswigger.net/web-security) - 無料のトレーニングとラボ - 『[PortSwigger](https://portswigger.net/)』が執筆
- [OopsSec Store](https://github.com/kOaDT/oss-oopssec-store) - 意図的に脆弱なEコマースアプリケーション（Next.jsで構築） - 『[@kOaDT](https://github.com/kOaDT)』が執筆
- [The Next.js security-headers pitfall](https://poszo.com/security/nextjs-headers-pitfall) - 正しいように見えるNext.jsのheaders()ブロックがルート特定ルールを上書きしたり、最終的なCDNレスポンスと異なる場合を示す。インベントリ、マージ、プレビュー、デプロイルート確認、ロールバックのワークフローを含む

<a name="practices-aws"></a>
### AWS

- [FLAWS](http://flaws.cloud/) - Amazon AWS CTFチャレンジ - 『[@0xdabbad00](https://twitter.com/0xdabbad00)』が執筆
- [CloudGoat](https://github.com/RhinoSecurityLabs/cloudgoat) - Rhino Security Labsの「設計上脆弱」AWSインフラセットツール - 『[@RhinoSecurityLabs](https://github.com/RhinoSecurityLabs)』が執筆

<a name="practices-xss"></a>
### XSS

- [alert(1) to win](https://alf.nu/alert1) - XSSのシリーズチャレンジ - [@steike](https://twitter.com/steike)が執筆した.
- [prompt(1) to win](http://prompt.ml/) - 2014年夏に開催された複雑な16段階XSSチャレンジ（＋4の隠しレベル） - [@cure53](https://github.com/cure53)が執筆した.
- [XSS Challenges](http://xss-quiz.int21h.jp/) - XSSのシリーズチャレンジ - yamagata21が執筆した.
- [XSS game](https://xss-game.appspot.com/) - Google XSSチャレンジ - Googleが執筆した.

<a name="practices-modsecurity"></a>
### ModSecurity / OWASP ModSecurity Core Rule Set

- [ModSecurity / OWASP ModSecurity Core Rule Set](https://www.netnea.com/cms/apache-tutorials/) - ModSecurityおよびCore Rule Setのインストール、設定、チューニングに関するチュートリアルシリーズ - [@ChrFolini](https://twitter.com/ChrFolini)が執筆した.

## コミュニティ {#community}

- [Reddit](https://www.reddit.com/r/websecurity/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/security)

## その他 {#miscellaneous}

- [A glimpse into GitHub's Bug Bounty workflow](https://githubengineering.com/githubs-bug-bounty-workflow/) - [@gregose](https://github.com/gregose)が執筆した.
- [awesome-bug-bounty](https://github.com/djadmin/awesome-bug-bounty) - 利用可能なバグバウンティおよび公開プログラム、および報告書の包括的なキュレーションリスト - [@djadmin](https://github.com/djadmin)が執筆した.
- [Brute Forcing Your Facebook Email and Phone Number](https://pwndizzle.blogspot.jp/2014/02/brute-forcing-your-facebook-email-and.html) - [PwnDizzle](https://pwndizzle.blogspot.jp/)が執筆した.
- [bug-bounty-reference](https://github.com/ngalongc/bug-bounty-reference) - バグの性質に分類されたバグバウンティ報告書のリスト - [@ngalongc](https://github.com/ngalongc)が執筆した.
- [Cybersecurity Campaign Playbook](https://www.belfercenter.org/publication/cybersecurity-campaign-playbook) - [Belfer Center for Science and International Affairs](https://www.belfercenter.org/)が執筆した.
- [EQGRP](https://github.com/x0rz/EQGRP) - [@x0rz](https://github.com/x0rz)が解読したeqgrp-auction-file.tar.xzのコンテンツ.
- [Google VRP and Unicorns](https://sites.google.com/site/bughunteruniversity/behind-the-scenes/presentations/google-vrp-and-unicorns) - [Daniel Stelter-Gliese](https://www.linkedin.com/in/daniel-stelter-gliese-170a70a2/)が執筆した.
- [Infosec_Reference](https://github.com/rmusser01/Infosec_Reference) - 情報セキュリティの参考書で「あまり良くない」ものではない - [@rmusser01](https://github.com/rmusser01)が執筆した.
- [Internet of Things Scanner](http://iotscanner.bullguard.com/) - 自宅にあるインターネット接続デバイスがShodanで公開されているかを確認する - [BullGuard](https://www.bullguard.com/)が執筆した.
- [notes](https://github.com/ChALkeR/notes) - [@ChALkeR](https://github.com/ChALkeR)が書いた一部の公開ノート.
- [Pentest + Exploit dev Cheatsheet wallpaper](https://i.imgur.com/Mr9pvq9.jpg) - パッチテストおよびエクスプロイト開発のキャッチシート.
- [The Definitive Security Data Science and Machine Learning Guide](https://www.covert.io/the-definitive-security-datascience-and-machinelearning-guide/) - JASON TROSが執筆した.
- [$7.5k Google services mix-up](https://sites.google.com/site/testsitehacking/-7-5k-Google-services-mix-up) - [Ezequiel Pereira](https://sites.google.com/site/testsitehacking/)が執筆した.
- [The Bug Hunters Methodology v2.1](https://docs.google.com/presentation/d/1VpRT8dFyTaFpQa9jhehtmGaC7TqQniMSYbUdlHN6VrY/edit?usp=sharing) - [@jhaddix](https://twitter.com/jhaddix)が執筆した.
- [How I exploited ACME TLS-SNI-01 issuing Let's Encrypt SSL-certs for any domain using shared hosting](https://labs.detectify.com/2018/01/12/how-i-exploited-acme-tls-sni-01-issuing-lets-encrypt-ssl-certs-for-any-domain-using-shared-hosting/) - [@fransrosen](https://twitter.com/fransrosen)が執筆した.
- [TL:DR: VPN leaks users’ IPs via WebRTC. I’ve tested seventy VPN providers and 16 of them leaks users’ IPs via WebRTC (23%)](https://voidsec.com/vpn-leak/) - [voidsec](https://voidsec.com/)が執筆しました。
- [Be careful what you copy: Invisibly inserting usernames into text with Zero-Width Characters](https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66) - [@umpox](https://medium.com/@umpox)が執筆しました。
- [Escape and Evasion Egressing Restricted Networks](https://www.optiv.com/blog/escape-and-evasion-egressing-restricted-networks) - [Chris Patten, Tom Steele](mailto:info@optiv.com)が執筆しました。
- [Domato Fuzzer's Generation Engine Internals](https://www.sigpwn.io/blog/2018/4/14/domato-fuzzers-generation-engine-internals) - [sigpwn](https://www.sigpwn.io/)が執筆しました。
- [CSS Is So Overpowered It Can Deanonymize Facebook Users](https://www.evonide.com/side-channel-attacking-browsers-through-css3-features/) - [Ruslan Habalov](https://www.evonide.com/)が執筆しました。
- [Introduction to Web Application Security](https://www.slideshare.net/nragupathy/introduction-to-web-application-security-blackhoodie-us-2018) - [@itsC0rg1](https://twitter.com/itsC0rg1)、[@jmkeads](https://twitter.com/jmkeads)および[@matir](https://twitter.com/matir)が執筆しました。
- [Finding The Real Origin IPs Hiding Behind CloudFlare or TOR](https://www.secjuice.com/finding-real-ips-of-origin-servers-behind-cloudflare-or-tor/) - [Paul Dannewitz](https://www.secjuice.com/author/paul-dannewitz/)が執筆しました。
- [How I could have stolen your photos from Google - my first 3 bug bounty writeups](https://blog.avatao.com/How-I-could-steal-your-photos-from-Google/) - [@gergoturcsanyi](https://twitter.com/gergoturcsanyi)が執筆しました。
- [An example why NAT is NOT security](https://0day.work/an-example-why-nat-is-not-security/) - [@0daywork](https://twitter.com/@0daywork)が執筆しました。
- [Alexa Top 1 Million Security - Hacking the Big Ones](https://slashcrypto.org/data/itsecx2018.pdf) - [@slashcrypto](https://twitter.com/slashcrypto)が執筆しました。
- [Hacking with a Heads Up Display](https://segment.com/blog/hacking-with-a-heads-up-display/) - [David Scrobonia](https://segment.com/blog/authors/david-scrobonia/)が執筆しました。
- [WEB APPLICATION PENETRATION TESTING NOTES](https://techvomit.net/web-application-penetration-testing-notes/) - [Jayson](https://techvomit.net/)が執筆しました。
- [List of bug bounty writeups](https://pentester.land/list-of-bug-bounty-writeups.html) - [Mariem](https://pentester.land/)が執筆しました。
- [The bug bounty program that changed my life](https://10degres.net/the-bug-bounty-program-that-changed-my-life/) - [Gwen](https://10degres.net/)が執筆しました。
- [Why Facebook's api starts with a for loop](https://dev.to/antogarand/why-facebooks-api-starts-with-a-for-loop-1eob) - [@AntoGarand](https://twitter.com/AntoGarand)が執筆しました。
- [Implications of Loading .NET Assemblies](https://threatvector.cylance.com/en_us/home/implications-of-loading-net-assemblies.html) - [Brian Wallace](https://threatvector.cylance.com/en_us/contributors/brian-wallace.html)が執筆しました。
- [WCTF2019: Gyotaku The Flag](https://westerns.tokyo/wctf2019-gtf/wctf2019-gtf-slides.pdf) - [@t0nk42](https://twitter.com/t0nk42)が執筆しました。
- [How we abused Slack's TURN servers to gain access to internal services](https://www.rtcsec.com/2020/04/01-slack-webrtc-turn-compromise/) - [@sandrogauci](https://twitter.com/sandrogauci)が執筆しました。
- [DOS File Path Magic Tricks](https://medium.com/walmartlabs/dos-file-path-magic-tricks-5eda7a7a85fa) - [@clr2of8](https://medium.com/@clr2of8)が執筆しました。
- [How I got my first big bounty payout with Tesla](https://medium.com/heck-the-packet/how-i-got-my-first-big-bounty-payout-with-tesla-8d28b520162d) - [@cj.fairhead](https://medium.com/@cj.fairhead)が執筆しました。
- [Grokking Web Application Security](https://www.manning.com/books/grokking-web-application-security) - マーカル・マクドナルド（マンニング）によるウェブアプリケーションセキュリティの基礎を実践的に学ぶ導入書
- [htb-writeups](https://github.com/momenbasel/htb-writeups) - [@momenbasel](https://github.com/momenbasel)による75以上のウェブチャレンジ（XSS、SQLi、SSTI、SSRF、デシリアライズなど）を網羅したハッキングボックスの詳細解説集

## 行動規範 {#code-of-conduct}

このプロジェクトは [Contributor Code of Conduct](https://github.com/qazbnm456/awesome-web-security/blob/34d1ca64f4cb82d2f5cac28af27f0bf52b684e3c/code-of-conduct.md) でリリースされています。このプロジェクトに参加することにより、その条項に従うことを同意します。

## ライセンス {#license}

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

可能な限り法に従って、 [Boik Su](https://x.com/boik_su) はこの作品に関するすべての著作権および関連または隣接する権利を放棄しました。
