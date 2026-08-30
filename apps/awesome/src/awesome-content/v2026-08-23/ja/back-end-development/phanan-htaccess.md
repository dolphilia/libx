---
title: "phanan/htaccess"
description: "phanan/htaccess の正規スナップショット"
licenseSource: "github-phanan-htaccess-readme-md"
---

<a id="htaccess-snippets"></a>
# .htaccessスニペット [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
便利な.htaccessスニペットを一か所にまとめたコレクションです。

> **注記:**
> `.htaccess`ファイルは、メインのサーバー設定ファイルを編集する権限がない場合に使います。メイン設定を使う場合より本質的に低速で複雑です。詳しくは[httpdドキュメントの解説](https://httpd.apache.org/docs/current/howto/htaccess.html)を参照してください。

> **警告:**
> 多くの場合はスニペットを`.htaccess`ファイルへ貼り付けるだけで十分ですが、調整が必要な場合もあります。自己責任で使用してください。

> **重要:**
> これらのスニペットはApache 2.4向けです。Apache 2.2を使っている場合は[`2.2`ブランチ](https://github.com/phanan/htaccess/tree/2.2)を確認してください。2.2から2.4の破壊的変更については、[アップグレード文書](https://httpd.apache.org/docs/2.4/upgrading.html)と[このIssue](https://github.com/phanan/htaccess/issues/2)を参照してください。

<a id="credits"></a>
## クレジット
ここでは、ウェブ上のさまざまな場所にある便利なスニペット（多くは[Apache Server Configs](https://github.com/h5bp/server-configs-apache)由来）を一か所に集めています。出典の明記に努めていますが、漏れがあるかもしれません。自分の成果物にクレジットが必要だと思われる場合は、ご連絡いただくかPRを送ってください。

<a id="table-of-contents"></a>
## 目次
- [書き換えとリダイレクト](#rewrite-and-redirection)
    - [wwwを強制](#force-www)
    - [汎用的にwwwを強制](#force-www-in-a-generic-way)
    - [非wwwを強制](#force-non-www)
    - [汎用的に非wwwを強制](#force-non-www-in-a-generic-way)
    - [HTTPSを強制](#force-https)
    - [プロキシ背後でHTTPSを強制](#force-https-behind-a-proxy)
    - [末尾スラッシュを強制](#force-trailing-slash)
    - [末尾スラッシュを削除](#remove-trailing-slash)
    - [単一ページをリダイレクト](#redirect-a-single-page)
    - [RedirectMatchでリダイレクト](#redirect-using-redirectmatch)
    - [単一ディレクトリのエイリアス](#alias-a-single-directory)
    - [パスをスクリプトへ割り当て](#alias-paths-to-script)
    - [サイト全体をリダイレクト](#redirect-an-entire-site)
    - [クリーンURLのエイリアス](#alias-clean-urls)
    - [URLをリダイレクト対象から除外](#exclude-url-from-redirection)
- [セキュリティ](#security)
    - [すべてのアクセスを拒否](#deny-all-access)
    - [自分以外のアクセスを拒否](#deny-all-access-except-yours)
    - [スパマー以外のアクセスを許可](#allow-all-access-except-spammers)
    - [隠しファイルとディレクトリへのアクセスを拒否](#deny-access-to-hidden-files-and-directories)
    - [バックアップとソースファイルへのアクセスを拒否](#deny-access-to-backup-and-source-files)
    - [ディレクトリ一覧を無効化](#disable-directory-browsing)
    - [画像の直リンクを無効化](#disable-image-hotlinking)
    - [特定ドメインの画像直リンクを無効化](#disable-image-hotlinking-for-specific-domains)
    - [ディレクトリをパスワード保護](#password-protect-a-directory)
    - [ファイルをパスワード保護](#password-protect-a-file-or-several-files)
    - [リファラーで訪問者をブロック](#block-visitors-by-referrer)
    - [特定のUser-Agentをブロック](#block-specific-user-agents)
    - [サイトのフレーム表示を防止](#prevent-framing-the-site)
    - [Content Security Policy（CSP）](#content-security-policy-csp)
    - [MIMEタイプスニッフィングを防止](#prevent-mime-type-sniffing)
    - [Referrer Policyを設定](#set-referrer-policy)
    - [Permissions Policyを設定](#set-permissions-policy)
    - [サーバー署名を削除](#remove-server-signature)
- [パフォーマンス](#performance)
    - [テキストファイルを圧縮](#compress-text-files)
    - [Expiresヘッダーを設定](#set-expires-headers)
    - [Cache-Controlヘッダーを設定](#set-cache-control-headers)
    - [eTagを無効化](#turn-etags-off)
- [その他](#miscellaneous)
    - [PHP変数を設定](#set-php-variables)
    - [カスタムエラーページ](#custom-error-pages)
    - [カスタムメンテナンスページ](#custom-maintenance-page)
    - [ダウンロードを強制](#force-downloading)
    - [ダウンロードを防止](#prevent-downloading)
    - [クロスドメインフォントを許可](#allow-cross-domain-fonts)
    - [CORSを有効化](#enable-cors)
    - [UTF-8を自動設定](#auto-utf-8-encode)
    - [カスタムMIMEタイプを設定](#set-custom-mime-types)
    - [別のPHPバージョンへ切り替え](#switch-to-another-php-version)
    - [WebP/AVIF画像を配信](#serve-webpavif-images)

<a id="rewrite-and-redirection"></a>
## 書き換えとリダイレクト
注: `mod_rewrite`がインストールされ、有効になっていることを前提とします。

<a id="force-www"></a>
### wwwを強制
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_HOST} ^example\.com [NC]
RewriteRule ^(.*)$ https://www.example.com/$1 [L,R=301,NC]
```

<a id="force-www-in-a-generic-way"></a>
### 汎用的にwwwを強制
``` apacheconf
RewriteCond %{HTTP_HOST} !^$
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteCond %{HTTPS}s ^on(s)|
RewriteRule ^ http%1://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```
これは_任意の_ドメインで機能します。[出典](https://stackoverflow.com/questions/4916222/htaccess-how-to-force-www-in-a-generic-way)

<a id="force-non-www"></a>
### 非wwwを強制
wwwと非wwwのどちらを使うべきかは[今も](https://www.sitepoint.com/domain-www-or-no-www/)[議論](https://devcenter.heroku.com/articles/apex-domains)が[続いて](https://yes-www.org/)[います](https://no-www.org/)。裸のドメインを好む場合は次の設定を使えます。
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.example\.com [NC]
RewriteRule ^(.*)$ https://example.com/$1 [L,R=301]
```

<a id="force-non-www-in-a-generic-way"></a>
### 汎用的に非wwwを強制
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.
RewriteCond %{HTTPS}s ^on(s)|off
RewriteCond http%1://%{HTTP_HOST} ^(https?://)(www\.)?(.+)$
RewriteRule ^ %1%3%{REQUEST_URI} [R=301,L]
```

<a id="force-https"></a>
### HTTPSを強制
``` apacheconf
RewriteEngine on
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

# Note: It’s also recommended to enable HTTP Strict Transport Security (HSTS)
# on your HTTPS website to help prevent man-in-the-middle attacks.
# See https://developer.mozilla.org/en-US/docs/Web/Security/HTTP_strict_transport_security
<IfModule mod_headers.c>
    # Remove "includeSubDomains" if you don't want to enforce HSTS on all subdomains
    Header always set Strict-Transport-Security "max-age=31536000;includeSubDomains"
</IfModule>
```

<a id="force-https-behind-a-proxy"></a>
### プロキシ背後でHTTPSを強制
サーバーの前段にTLS終端を行うプロキシがある場合に便利です。
``` apacheconf
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
```

<a id="force-trailing-slash"></a>
### 末尾スラッシュを強制
``` apacheconf
RewriteCond %{REQUEST_URI} /+[^\.]+$
RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]
```

<a id="remove-trailing-slash"></a>
### 末尾スラッシュを削除
このスニペットは、実在するディレクトリを除き、末尾がスラッシュのパスをスラッシュなしのパスへリダイレクトします。たとえば `https://www.example.com/blog/` を `https://www.example.com/blog` へ変換します。各ページに正規URLを設けることが[推奨](https://overit.com/blog/canonical-urls)されるため、SEOでも重要です。
``` apacheconf
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]
```
[Source](https://stackoverflow.com/questions/21417263/htaccess-add-remove-trailing-slash-from-url#27264788)

<a id="redirect-a-single-page"></a>
### 単一ページをリダイレクト
``` apacheconf
Redirect 301 /oldpage.html https://www.example.com/newpage.html
Redirect 301 /oldpage2.html https://www.example.com/folder/
```
[Source](https://css-tricks.com/snippets/htaccess/301-redirects/)

<a id="redirect-using-redirectmatch"></a>
### RedirectMatchでリダイレクト
``` apacheconf
RedirectMatch 301 /subdirectory(.*) https://www.newsite.com/newfolder/$1
RedirectMatch 301 ^/(.*).htm$ /$1.html
RedirectMatch 301 ^/200([0-9])/([^01])(.*)$ /$2$3
RedirectMatch 301 ^/category/(.*)$ /$1
RedirectMatch 301 ^/(.*)/htaccesselite-ultimate-htaccess-article.html(.*) /htaccess/htaccess.html
RedirectMatch 301 ^/(.*).html/1/(.*) /$1.html$2
RedirectMatch 301 ^/manual/(.*)$ https://www.php.net/manual/$1
RedirectMatch 301 ^/old-directory/(.*)$ /new-directory/$1
RedirectMatch 301 ^/z/(.*)$ https://static.askapache.com/$1
```
[Source](https://www.askapache.com/htaccess/301-redirect-with-mod_rewrite-or-redirectmatch.html#301_Redirects_RedirectMatch)

<a id="alias-a-single-directory"></a>
### 単一ディレクトリのエイリアス
``` apacheconf
RewriteEngine On
RewriteRule ^source-directory/(.*) /target-directory/$1 [R=301,L]
```

<a id="alias-paths-to-script"></a>
### パスをスクリプトへ割り当て
``` apacheconf
FallbackResource /index.fcgi
```
この例では、あるディレクトリに `index.fcgi` があり、そのディレクトリ内でファイル名やディレクトリ名として解決できないリクエストを `index.fcgi` へ送ります。`baz.foo/some/cool/path` を `baz.foo/index.fcgi`（`baz.foo` へのリクエストにも対応）で処理しながら、`baz.foo/css/style.css` などを維持したい場合に便利です。元のパスは、スクリプト環境に公開されるPATH_INFO環境変数から取得できます。

``` apacheconf
RewriteEngine On
RewriteRule ^$ index.fcgi/ [QSA,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.fcgi/$1 [QSA,L]
```
これはFallbackResourceディレクティブより効率が劣ります（`mod_rewrite`は`FallbackResource`だけを扱うより複雑なため）が、より柔軟です。

<a id="redirect-an-entire-site"></a>
### サイト全体をリダイレクト
``` apacheconf
Redirect 301 / https://newsite.com/
```
この方法ではリンクのパスを維持します。つまり`www.oldsite.com/some/crazy/link.html`は`www.newsite.com/some/crazy/link.html`になります。サイトを新しいドメインへ移転する場合に非常に便利です。[出典](https://css-tricks.com/snippets/htaccess/301-redirects/)

<a id="alias-clean-urls"></a>
### クリーンURLのエイリアス
このスニペットを使うと、`example.com/users` のような、`example.com/users.php` に代わるPHP拡張子なしの「クリーン」URLを利用できます。
``` apacheconf
RewriteEngine On
RewriteCond %{SCRIPT_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.php [NC,L]
```
[Source](https://www.abeautifulsite.net/access-pages-without-the-php-extension-using-htaccess/)

<a id="exclude-url-from-redirection"></a>
### URLをリダイレクト対象から除外
このスニペットはURLをリダイレクト対象から除外します。たとえばリダイレクト規則を設定しつつ、検索エンジンが想定どおりアクセスできるようrobots.txtだけを除外できます。
``` apacheconf
RewriteEngine On
RewriteRule ^robots.txt - [L]
```

<a id="security"></a>
## セキュリティ
<a id="deny-all-access"></a>
### すべてのアクセスを拒否
``` apacheconf
Require all denied
```

でも、これによりあなたのコンテンツからもアクセスが遮られます！したがって紹介するのは...

<a id="deny-all-access-except-yours"></a>
### 自分以外のアクセスを拒否
``` apacheconf
Require all denied
Require ip xxx.xxx.xxx.xxx
```
`xxx.xxx.xxx.xxx` is your IP. If you replace the last three digits with `0/12` for example, this will specify a range of IPs within the same network, thus saving you the trouble to list all allowed IPs separately. [Source](https://speckyboy.com/2013/01/08/useful-htaccess-snippets-and-hacks/)

もちろん、逆のバージョンもあります：

<a id="allow-all-access-except-spammers"></a>
### スパマー以外のアクセスを許可
``` apacheconf
Require all granted
Require not ip xxx.xxx.xxx.xxx
Require not ip xxx.xxx.xxx.xxy
```

<a id="deny-access-to-hidden-files-and-directories"></a>
### 隠しファイルとディレクトリへのアクセスを拒否
名前がドット`.`で始まる隠しファイルとディレクトリ（`.htaccess`、`.htpasswd`、`.git`、`.hg`など）は、ほぼ常に保護すべきです。
``` apacheconf
RewriteCond %{SCRIPT_FILENAME} -d [OR]
RewriteCond %{SCRIPT_FILENAME} -f
RewriteRule "(^|/)\." - [F]
```

代わりに「Not Found」エラーを返し、攻撃者へ手掛かりを与えない方法もあります。
``` apacheconf
RedirectMatch 404 /\..*$
```

<a id="deny-access-to-backup-and-source-files"></a>
### バックアップとソースファイルへのアクセスを拒否
これらのファイルはVi/Vimなどのテキスト／HTMLエディターが残す場合があり、公開されると重大なセキュリティリスクになります。
``` apacheconf
<FilesMatch "(\.(bak|config|dist|fla|inc|ini|log|psd|sh|sql|swp)|~)$">
    Require all denied
</FilesMatch>
```
[Source](https://github.com/h5bp/server-configs-apache)

<a id="disable-directory-browsing"></a>
### ディレクトリ一覧を無効化
``` apacheconf
Options All -Indexes
```

<a id="disable-image-hotlinking"></a>
### 画像の直リンクを無効化
``` apacheconf
RewriteEngine on
# Remove the following line if you want to block blank referrer too
RewriteCond %{HTTP_REFERER} !^$

RewriteCond %{HTTP_REFERER} !^https?://(.+\.)?example.com [NC]
RewriteRule \.(jpe?g|png|gif|bmp|webp|avif|svg|ico)$ - [NC,F,L]

# If you want to display a “blocked” banner in place of the hotlinked image,
# replace the above rule with:
# RewriteRule \.(jpe?g|png|gif|bmp|webp|avif|svg|ico) https://example.com/blocked.png [R,L]
```

<a id="disable-image-hotlinking-for-specific-domains"></a>
### 特定ドメインの画像直リンクを無効化
特定の悪質なサイトからの画像直リンクだけを無効にしたい場合があります。
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_REFERER} ^https?://(.+\.)?badsite\.com [NC,OR]
RewriteCond %{HTTP_REFERER} ^https?://(.+\.)?badsite2\.com [NC,OR]
RewriteRule \.(jpe?g|png|gif|bmp|webp|avif|svg|ico)$ - [NC,F,L]

# If you want to display a “blocked” banner in place of the hotlinked image,
# replace the above rule with:
# RewriteRule \.(jpe?g|png|gif|bmp|webp|avif|svg|ico) https://example.com/blocked.png [R,L]
```

<a id="password-protect-a-directory"></a>
### ディレクトリをパスワード保護
まず、システム内の任意の場所に`.htpasswd`ファイルを作成します。
``` bash
htpasswd -c /home/fellowship/.htpasswd boromir
```

次に、それを認証へ使用します。
``` apacheconf
AuthType Basic
AuthName "One does not simply"
AuthUserFile /home/fellowship/.htpasswd
Require valid-user
```

<a id="password-protect-a-file-or-several-files"></a>
### ファイルをパスワード保護
``` apacheconf
AuthName "One still does not simply"
AuthType Basic
AuthUserFile /home/fellowship/.htpasswd

<Files "one-ring.o">
Require valid-user
</Files>

<FilesMatch ^((one|two|three)-rings?\.o)$>
Require valid-user
</FilesMatch>
```

<a id="block-visitors-by-referrer"></a>
### リファラーで訪問者をブロック
特定のドメインをリファラーとして訪れたすべてのユーザーのアクセスを拒否します。
[Source](https://www.htaccess-guide.com/deny-visitors-by-referrer/)
``` apacheconf
RewriteEngine on
# Options +FollowSymlinks
RewriteCond %{HTTP_REFERER} somedomain\.com [NC,OR]
RewriteCond %{HTTP_REFERER} anotherdomain\.com
RewriteRule .* - [F]
```

<a id="block-specific-user-agents"></a>
### 特定のUser-Agentをブロック
特定のUser-Agentによるサイトへのアクセスを遮断します。スクレイパーや悪質なボットのブロックに便利です。
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_USER_AGENT} BadBot [NC,OR]
RewriteCond %{HTTP_USER_AGENT} EvilScraper [NC]
RewriteRule .* - [F,L]
```

<a id="prevent-framing-the-site"></a>
### サイトのフレーム表示を防止
特定のURIだけは許可しつつ、ウェブサイトが`iframe`タグ内へ埋め込まれることを防止します。
``` apacheconf
SetEnvIf Request_URI "/starry-night" allow_framing=true
Header set X-Frame-Options SAMEORIGIN env=!allow_framing
```

<a id="content-security-policy-csp"></a>
### Content Security Policy（CSP）
Content Security Policyヘッダーは、読み込みを許可する動的リソースを宣言し、クロスサイトスクリプティング（XSS）などのコードインジェクション攻撃を軽減します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'"
</IfModule>
```
用途に合わせてディレクティブを調整してください。利用可能な全ディレクティブは[CSPリファレンス](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)を参照してください。

<a id="prevent-mime-type-sniffing"></a>
### MIMEタイプスニッフィングを防止
ブラウザーがリソースのMIMEタイプを推測（スニッフィング）することを防ぎます。ブラウザーはサーバーの指定を信頼し、想定タイプと一致しないリソースをブロックします。
``` apacheconf
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
</IfModule>
```

<a id="set-referrer-policy"></a>
### Referrer Policyを設定
リクエストに含めるリファラー情報の量を制御します。完全なURLが外部サイトへ漏れるのを防ぎ、ユーザーのプライバシーを保護します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

<a id="set-permissions-policy"></a>
### Permissions Policyを設定
カメラ、マイク、位置情報など、サイトが利用できるブラウザー機能を制限します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()"
</IfModule>
```

<a id="remove-server-signature"></a>
### サーバー署名を削除
ApacheがHTTPヘッダーやエラーページでバージョン番号とOS情報を公開するのを防ぎます。
``` apacheconf
ServerSignature Off
```

<a id="performance"></a>
## パフォーマンス
<a id="compress-text-files"></a>
### テキストファイルを圧縮
``` apacheconf
<IfModule mod_deflate.c>

    # Force compression for mangled headers.
    # https://developer.yahoo.com/blogs/ydn/pushing-beyond-gzipping-25601.html
    <IfModule mod_setenvif.c>
        <IfModule mod_headers.c>
            SetEnvIfNoCase ^(Accept-EncodXng|X-cept-Encoding|X{15}|~{15}|-{15})$ ^((gzip|deflate)\s*,?\s*)+|[X~-]{4,13}$ HAVE_Accept-Encoding
            RequestHeader append Accept-Encoding "gzip,deflate" env=HAVE_Accept-Encoding
        </IfModule>
    </IfModule>

    # Compress all output labeled with one of the following MIME-types
    # (mod_filter is required for Apache 2.4)
    <IfModule mod_filter.c>
        AddOutputFilterByType DEFLATE application/atom+xml \
                                      application/javascript \
                                      application/json \
                                      application/rss+xml \
                                      application/x-font-ttf \
                                      application/x-web-app-manifest+json \
                                      application/xhtml+xml \
                                      application/xml \
                                      font/opentype \
                                      image/svg+xml \
                                      image/x-icon \
                                      text/css \
                                      text/html \
                                      text/plain \
                                      text/xml
    </IfModule>

</IfModule>
```
[Source](https://github.com/h5bp/server-configs-apache)


<a id="set-expires-headers"></a>
### Expiresヘッダーを設定
_Expires headers_ tell the browser whether they should request a specific file from the server or just grab it from the cache. It is advisable to set static content's expires headers to something far in the future.

ファイル名ベースのキャッシュバスティングでバージョンを管理していない場合は、CSSやJSなどのキャッシュ期間を1週間程度へ短縮することを検討してください。[出典](https://github.com/h5bp/server-configs-apache)
``` apacheconf
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresDefault                                      "access plus 1 month"

  # CSS
    ExpiresByType text/css                              "access plus 1 year"

  # Data interchange
    ExpiresByType application/json                      "access plus 0 seconds"
    ExpiresByType application/xml                       "access plus 0 seconds"
    ExpiresByType text/xml                              "access plus 0 seconds"

  # Favicon (cannot be renamed!)
    ExpiresByType image/x-icon                          "access plus 1 week"

  # HTML
    ExpiresByType text/html                             "access plus 0 seconds"

  # JavaScript
    ExpiresByType application/javascript                "access plus 1 year"

  # Manifest files
    ExpiresByType application/x-web-app-manifest+json   "access plus 0 seconds"

  # Media
    ExpiresByType audio/ogg                             "access plus 1 month"
    ExpiresByType image/gif                             "access plus 1 month"
    ExpiresByType image/jpeg                            "access plus 1 month"
    ExpiresByType image/png                             "access plus 1 month"
    ExpiresByType video/mp4                             "access plus 1 month"
    ExpiresByType video/ogg                             "access plus 1 month"
    ExpiresByType video/webm                            "access plus 1 month"

  # Web feeds
    ExpiresByType application/atom+xml                  "access plus 1 hour"
    ExpiresByType application/rss+xml                   "access plus 1 hour"

  # Web fonts
    ExpiresByType application/font-woff2                "access plus 1 month"
    ExpiresByType application/font-woff                 "access plus 1 month"
    ExpiresByType application/x-font-ttf                "access plus 1 month"
    ExpiresByType font/opentype                         "access plus 1 month"
    ExpiresByType image/svg+xml                         "access plus 1 month"
</IfModule>
```

<a id="set-cache-control-headers"></a>
### Cache-Controlヘッダーを設定
`Cache-Control` headers provide more fine-grained control over browser caching than Expires headers. You can use both together for maximum compatibility.
``` apacheconf
<IfModule mod_headers.c>
    # Cache CSS and JS for 1 year
    <FilesMatch "\.(css|js)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>

    # Cache images for 1 month
    <FilesMatch "\.(jpe?g|png|gif|webp|avif|svg|ico)$">
        Header set Cache-Control "max-age=2592000, public"
    </FilesMatch>

    # Cache fonts for 1 month
    <FilesMatch "\.(woff2?|ttf|otf)$">
        Header set Cache-Control "max-age=2592000, public"
    </FilesMatch>

    # Do not cache HTML
    <FilesMatch "\.(html|htm)$">
        Header set Cache-Control "no-cache, no-store, must-revalidate"
    </FilesMatch>
</IfModule>
```

<a id="turn-etags-off"></a>
### eTagを無効化
`ETag`ヘッダーを削除すると、キャッシュとブラウザーはファイルを検証できなくなり、`Cache-Control`と`Expires`ヘッダーに依存します。[出典](https://www.askapache.com/htaccess/apache-speed-etags.html)
``` apacheconf
<IfModule mod_headers.c>
    Header unset ETag
</IfModule>
FileETag None
```

<a id="miscellaneous"></a>
## その他

<a id="set-php-variables"></a>
### PHP変数を設定
``` apacheconf
php_value <key> <val>

# For example:
php_value upload_max_filesize 50M
php_value max_execution_time 240
```

<a id="custom-error-pages"></a>
### カスタムエラーページ
``` apacheconf
ErrorDocument 500 "Houston, we have a problem."
ErrorDocument 401 https://error.example.com/mordor.html
ErrorDocument 404 /errors/halflife3.html
```

<a id="custom-maintenance-page"></a>
### カスタムメンテナンスページ
特定のIPアドレスからのアクセスだけを許可し、その他すべてのトラフィックをメンテナンスページへリダイレクトします。
``` apacheconf
RewriteEngine on
RewriteCond %{REMOTE_ADDR} !^xxx\.xxx\.xxx\.xxx
RewriteCond %{REQUEST_URI} !/maintenance.html$ [NC]
RewriteCond %{REQUEST_URI} !\.(css|js|png|jpe?g|gif|svg|ico)$ [NC]
RewriteRule .* /maintenance.html [R=503,L]
```
メンテナンス中もアクセスできるよう、`xxx.xxx.xxx.xxx`を自分のIPアドレスへ置き換えてください。

<a id="force-downloading"></a>
### ダウンロードを強制
コンテンツを表示せず、ブラウザーにダウンロードさせたい場合があります。
``` apacheconf
<Files *.md>
    ForceType application/octet-stream
    Header set Content-Disposition attachment
</Files>
```

この陰には陽があるのです：

<a id="prevent-downloading"></a>
### ダウンロードを防止
コンテンツをダウンロードせず、ブラウザーに表示させたい場合があります。
``` apacheconf
<FilesMatch "\.(tex|log|aux)$">
    Header set Content-Type text/plain
</FilesMatch>
```

<a id="allow-cross-domain-fonts"></a>
### クロスドメインフォントを許可
CDNから配信されるウェブフォントは、[CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)のためFirefoxで動作しない場合があります。このスニペットで解決できます。
``` apacheconf
<IfModule mod_headers.c>
    <FilesMatch "\.(otf|ttc|ttf|woff|woff2)$">
        Header set Access-Control-Allow-Origin "*"
    </FilesMatch>
</IfModule>
```
[Source](https://github.com/h5bp/server-configs-apache/issues/32)

<a id="enable-cors"></a>
### CORSを有効化
サイトでCross-Origin Resource Sharing（CORS）を有効にし、他のドメインからサーバーへのリクエストを許可します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
```
特定のドメインに制限するには、`*` を `https://example.com` などのドメインへ置き換えます。

<a id="auto-utf-8-encode"></a>
### UTF-8を自動設定
テキストコンテンツは常にUTF-8でエンコードすべきです。
``` apacheconf
# Use UTF-8 encoding for anything served text/plain or text/html
AddDefaultCharset utf-8

# Force UTF-8 for a number of file formats
AddCharset utf-8 .atom .css .js .json .rss .vtt .xml
```
[Source](https://github.com/h5bp/server-configs-apache)

<a id="set-custom-mime-types"></a>
### カスタムMIMEタイプを設定
Apacheが標準では認識しないファイル形式にカスタムMIMEタイプを定義します。
``` apacheconf
AddType application/manifest+json .webmanifest
AddType application/wasm .wasm
AddType application/x-ndjson .ndjson
AddType text/vtt .vtt
```

<a id="switch-to-another-php-version"></a>
### 別のPHPバージョンへ切り替え
共有ホスティングでは複数のPHPバージョンがインストールされていることがあり、サイトごとに特定バージョンを使いたい場合があります。次のスニペットでPHPバージョンを切り替えます。

``` apacheconf
AddHandler application/x-httpd-php84 .php

# Alternatively, you can use AddType
AddType application/x-httpd-php84 .php
```

<a id="serve-webpavif-images"></a>
### WebP/AVIF画像を配信
元のjpg/pngと同じ名前のモダン形式画像（AVIFまたはWebP）があれば、代わりに配信します。ブラウザーが両方に対応する場合はAVIFを優先します。

``` apacheconf
RewriteEngine On

# Serve AVIF if supported and available
RewriteCond %{HTTP_ACCEPT} image/avif
RewriteCond %{DOCUMENT_ROOT}/$1.avif -f
RewriteRule (.+)\.(jpe?g|png)$ $1.avif [T=image/avif,E=accept:1]

# Otherwise, serve WebP if supported and available
RewriteCond %{HTTP_ACCEPT} image/webp
RewriteCond %{DOCUMENT_ROOT}/$1.webp -f
RewriteRule (.+)\.(jpe?g|png)$ $1.webp [T=image/webp,E=accept:1]
```
