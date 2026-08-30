---
title: "Awesome Nginx Resources"
description: "Nginx Resourcesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-fcambus-nginx-resources-readme-md"
---

# Awesome Nginx Resources

Nginx Resourcesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## Nginx を理解する

- [Nginx のバージョン体系を理解する](https://www.f5.com/company/blog/nginx/nginx-1-18-1-19-released)
- [Nginx 作者へのインタビュー](https://web.archive.org/web/20180614224054/http://mindend.com/interview-with-the-creator-of-nginx/)
- [Apache の競合 NGINX の作者 Igor Sysoev へのインタビュー](https://freesoftwaremagazine.com/articles/interview_igor_sysoev_author_apaches_competitor_nginx/)
- [アプリケーションサーバーの前段に Nginx を置く理由](https://www.cambus.net/the-case-for-nginx-in-front-of-application-servers/)
- [Nginx 最適化：sendfile、tcp_nodelay、tcp_nopush を理解する](https://fv.gs/nginx-optimization-understanding-sendfile-tcp-nodelay-and-tcp-nopush-c55cdd276765)

## アーキテクチャ

- [The Architecture of Open Source Applications（第2巻）：nginx](https://aosabook.org/en/nginx.html)
- [Nginx Guts - Nginx の内部を解明する](https://web.archive.org/web/20220202145919/http://www.nginxguts.com/category/nginx/)
- [Nginx 探索の旅](https://www.nginx-discovery.com/)
- [Nginx の内部構造](https://www.slideshare.net/slideshow/nginx-internals/2028238)
- [NGINX の内側：パフォーマンスとスケールをどう設計したか](https://blog.nginx.org/blog/inside-nginx-how-we-designed-for-performance-scale)
- [NGINX のスレッドプール](https://www.f5.com/company/blog/nginx/thread-pools-boost-performance-9x)

## 設定

- [初心者ガイド](https://nginx.org/en/docs/beginners_guide.html)
- [変数のアルファベット順索引](https://nginx.org/en/docs/varindex.html)
- [Nginx で役立つ Rewrite](https://www.engineyard.com/blog/useful-rewrites-for-nginx/)
- [Nginx 設定入門](https://blog.martinfjordvald.com/nginx-primer/)
- [Nginx 入門2：Apache から Nginx へ](https://blog.martinfjordvald.com/nginx-primer-2-from-apache-to-nginx/)
- [Nginx 設定の継承モデルを理解する](https://blog.martinfjordvald.com/understanding-the-nginx-configuration-inheritance-model/)
- [Nginx HTTP サーバーのボイラープレート設定](https://github.com/h5bp/server-configs-nginx)
- [Nginx Boilerplate - 設定テンプレートと便利な必須スニペット集](https://github.com/nginx-boilerplate/nginx-boilerplate)
- [Apache と Nginx で OCSP Stapling を設定する方法](https://sslmate.com/blog/post/ocsp_stapling_in_apache_and_nginx)
- [NGINX Config - オンライン Nginx 設定ジェネレーター](https://www.digitalocean.com/community/tools/nginx)
- [開発者に便利な Nginx の機能](https://alex.dzyoba.com/blog/nginx-features-for-developers/)
- [運用者に便利な Nginx の機能](https://alex.dzyoba.com/blog/nginx-features-for-operators/)
- [NGINX 設定で避けるべき上位10の誤り](https://www.f5.com/company/blog/nginx/avoiding-top-10-nginx-configuration-mistakes)
- [Gixy - Nginx 設定の静的解析ツール](https://github.com/yandex/gixy) - 保守中のフォーク：[gixy-ng](https://github.com/dvershinin/gixy)、[gixy-next](https://github.com/MegaManSec/Gixy-Next)
- [Nginx 共通設定 - 汎用設定とスニペット](https://github.com/tldr-devops/nginx-common-configuration)

## セキュリティ

- [BunkerWeb - Nginx ベースの次世代オープンソース Web Application Firewall（WAF）](https://www.bunkerweb.io)

## チュートリアル

- [NGINX・NGINX Plus 管理者ガイド](https://docs.nginx.com/nginx/admin-guide/)
- [agentzh の Nginx チュートリアル](https://openresty.org/download/agentzh-nginx-tutorials-en.html)（[ソース](https://github.com/openresty/nginx-tutorials)）
- [nginx.conf スクリプティング入門](https://agentzh.org/misc/slides/nginx-conf-scripting/nginx-conf-scripting.html)
- [NGINX・NGINX Plus による負荷分散](https://www.f5.com/company/blog/nginx/load-balancing-with-nginx-plus)（[第2部](https://www.f5.com/company/blog/nginx/load-balancing-with-nginx-plus-part-2)）
- [高トラフィック負荷向けに Nginx を最適化する](https://blog.martinfjordvald.com/optimizing-nginx-for-high-traffic-loads/)
- [WebSocket プロキシとしての NGINX](https://www.f5.com/company/blog/nginx/websocket-nginx)
- [HTTP Keepalive 接続と Web パフォーマンス](https://www.f5.com/company/blog/nginx/http-keepalives-and-web-performance)
- [Nginx の CORS](https://enable-cors.org/server_nginx.html)
- [Nginx と Zopfli で事前圧縮コンテンツを配信する](https://www.cambus.net/serving-precompressed-content-with-nginx-and-zopfli/)
- [FreeBSD 上の Nginx](https://www.cambus.net/nginx-on-freebsd/)
- [NGINX・NGINX Plus で A/B テストを行う](https://www.f5.com/company/blog/nginx/performing-a-b-testing-nginx-plus)
- [Kernel TLS と SSL_sendfile() で NGINX の性能を改善する](https://www.f5.com/company/blog/nginx/improving-nginx-performance-with-kernel-tls)

## モジュール開発

- [公式開発ガイド](https://nginx.org/en/docs/dev/development_guide.html)
- [Nginx モジュール開発ガイド](https://www.evanmiller.org/nginx-modules-guide.html)
- [Nginx モジュール開発の高度なトピック](https://www.evanmiller.org/nginx-modules-guide-advanced.html)

## API

- [Telize - Nginx と Lua で構築した JSON IP・GeoIP REST API（IP 位置情報）](https://www.telize.com)
- [GIN - JSON-API フレームワーク](https://gin.io/)
- [Kong - マイクロサービスと API の管理レイヤー](https://github.com/kong/kong)

## ハック

- [Nginx JSON ハック](https://web.archive.org/web/20140921162448/http://www.gabrielweinberg.com/blog/2011/07/nginx-json-hacks.html)
- [Nginx.conf で環境変数を使う](https://web.archive.org/web/20170712003702/https://docs.apitools.com/blog/2014/07/02/using-environment-variables-in-nginx-conf.html)
- [Nginx 設定ファイル内で直接ログをローテーションする](https://www.cambus.net/log-rotation-directly-within-nginx-configuration-file/)
- [Nginx、syslog-ng、Redis によるリアルタイムピクセルトラッキング](https://benwilber.github.io/nginx/redis/syslog/pixel-tracking/2013/09/13/realtime-pixel-tracking-with-nginx-syslog-ng-and-redis.html)
- [Nginx の動的ログ形式](https://benwilber.github.io/nginx/syslog/logging/2015/08/26/dynamic-log-formats-in-nginx.html)
- [不要なリクエストを捕捉して遅延させる](https://github.com/p0pr0ck5/lua-resty-tarpit)
- [Nginx：キャッシュ、サムネイル生成、リバースプロキシを行う画像サーバー？](https://charlesleifer.com/blog/nginx-a-caching-thumbnailing-reverse-proxying-image-server-/)

## ヒント

- [Nginx にできるとは知らなかったこと](https://www.slideshare.net/slideshow/5-things-you-didnt-know-nginx-could-do/35181267)
- [Nginx gzip_comp_level の最適点を探す](https://mjanja.ch/2015/03/finding-the-nginx-gzip_comp_level-sweet-spot/)
- [Nginx ミラーリングのヒントとコツ](https://alex.dzyoba.com/blog/nginx-mirror/)

## Nginx + Lua

- [Nginx、Lua、そしてその先](https://agentzh.org/misc/slides/nginx-lua-and-beyond.pdf)
- [Lua で Nginx を限界まで引き上げる](https://blog.cloudflare.com/pushing-nginx-to-its-limit-with-lua/)
- [Lua 経由で Nginx に OAuth 対応を追加する](https://chairnerd.seatgeek.com/oauth-support-for-nginx-with-lua/)
- [Nginx 内で Lua を使って libdrizzle をスクリプト化する](https://agentzh.org/misc/slides/libdrizzle-lua-nginx.pdf)
- [Nginx と Lua](https://web.archive.org/web/20141223070856/http://devblog.mixlr.com/2012/09/01/nginx-lua/)
- [Lua で Nginx 認証モジュールを書く](https://www.stavros.io/posts/writing-an-nginx-authentication-module-in-lua/)
- [Nginx と Lua でクラウド上の TextRazor をスケールする](https://www.textrazor.com/blog/2013/03/scaling-textrazor-in-the-cloud-with-nginx-and-lua.html)
- [LSSO - OAuth バックエンドを備えた Lua + Nginx SSO システム](https://github.com/pirogoeth/lsso)
- [Lua と Redis を使って Nginx キャッシュ性能を測定する](https://charlesleifer.com/blog/measuring-nginx-cache-performance-using-lua-and-redis/)
- [nginx-lua - Alpine Linux、Amazon Linux、CentOS、Debian、Fedora、Ubuntu を基にした Lua 対応 Nginx 1.19+](https://github.com/fabiocicerchia/nginx-lua)

## Nginx + njs

- [njs スクリプト言語のリファレンスとサンプル](https://nginx.org/en/docs/njs/)
- [njs ユースケース集](https://github.com/f5devcentral/nginx-njs-usecases)
- [NGINX に組み込まれた JavaScript - njs 入門](https://www.bluedoa.com/javascript-embedded-on-nginx-getting-started-with-njs/)
- [JavaScript で Nginx 拡張を作成する](https://dev.to/metal3d/create-nginx-extensions-in-javascript-3310)
- [njs 0.7.7 で Nginx 設定をさらにモジュール化・再利用可能にする](https://www.f5.com/company/blog/nginx/make-nginx-config-even-more-modular-reusable-njs-0-7-7)
- [NGINX JavaScript モジュールによる診断ロギング](https://www.f5.com/company/blog/nginx/diagnostic-logging-nginx-javascript-module)
- [NGINX と njs でリクエストヘッダーを記録する方法](https://wildwolf.name/how-to-log-request-headers-with-nginx-and-njs/)
- [njs 経由で NGINX をオブジェクトストレージゲートウェイとして使う](https://blog.nginx.org/blog/using-nginx-as-object-storage-gateway)
- [NGINX と ACME、njs で HTTPS を簡単に導入する](https://steinkamp.us/posts/2023-08-10_easy-https-with-nginx)

## OpenResty

- [OpenResty - Nginx を拡張した高速 Web アプリサーバー](https://openresty.org/en/)
- [Lapis - OpenResty が動かす Lua・MoonScript 用 Web フレームワーク](https://leafo.net/lapis/)
- [OpenResty と Lua による Nginx 画像処理サーバー](https://leafo.net/posts/creating_an_image_server.html)
- [OpenResty イベントサーバーを構築する](https://github.com/cagerton/dropthat/)
- [SysAdvent 2014 - OpenResty、Nginx、Lua](https://sysadvent.blogspot.com/2014/12/day-22-largely-unappreciated.html)（[ソース](https://github.com/lusis/sysadvent-2014)）
- [Ceryx - 動的リバースプロキシ](https://www.sourcelair.com/blog/articles/75/ceryx-dynamic-nginx/)
- [OpenResty 入門](https://www.openmymind.net/An-Introduction-To-OpenResty-Nginx-Lua/)
- [Programming OpenResty（OpenResty 作者による執筆）](https://openresty.gitbooks.io/programming-openresty/content/)
- [VeryNginx - WAF、コントロールパネル、ダッシュボードを提供する Nginx ディストリビューション](https://github.com/alexazhou/VeryNginx)

## Tengine

- [Tengine Web Server](https://tengine.taobao.org)
- [OpenResty と Tengine の違い](https://github.com/openresty/openresty/issues/54)

## 講演

- [NGINX Conference 2019 動画](https://www.youtube.com/playlist?list=PLGz_X9w9raXflDvBv642YFqT0UTqQGFsH)
- [NGINX Conference 2018 動画](https://www.youtube.com/playlist?list=PLGz_X9w9raXe_Vc708VKvr5KJ4gnf1WxS)
- [NGINX Conference 2017 動画](https://www.youtube.com/playlist?list=PLGz_X9w9raXeT-z_rcZ9yF0kV5SENZ-yt)
- [NGINX Conference 2016 動画](https://www.youtube.com/playlist?list=PLGz_X9w9raXcOsB_dT26iu0BvbSxWYG1g)
- [NGINX Conference 2015 動画](https://www.youtube.com/playlist?list=PLGz_X9w9raXdED9BR6GQ61A6d3fBzjpbn)
- [NGINX Conference 2014 動画](https://www.youtube.com/playlist?list=PLGz_X9w9raXewvc6tjIGGFZ6DBKHEld3k)
- [NGINX User Summit 2014 - ライトニングトーク](https://www.youtube.com/playlist?list=PLGz_X9w9raXfTnRnI6Xl0LMhAKoTVVZv8)

## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Frederic Cambus](https://www.cambus.net) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
