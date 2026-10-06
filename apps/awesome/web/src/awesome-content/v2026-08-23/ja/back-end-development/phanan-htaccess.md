---
title: "Awesome .htaccess Snippets"
description: "Apache 2.4の.htaccess設定例。URLの書き換え、アクセス制御、応答ヘッダー、キャッシュ、ファイル配信。"
licenseSource: "github-phanan-htaccess-readme-md"
---

# Awesome .htaccess Snippets

Apache 2.4の.htaccess設定例を、URLの書き換えとリダイレクト、アクセス制御、応答ヘッダー、キャッシュ、ファイル配信の用途別にまとめています。

> `.htaccess`ファイルは、主要なサーバー設定を編集できない場合に使います。主要な設定ファイルを使う方法より遅く、設定も複雑になります。詳しくは[httpdの使い方](https://httpd.apache.org/docs/current/howto/htaccess.html)を参照してください。

> 通常はスニペットを`.htaccess`ファイルへ追加すれば使えますが、状況によって変更が必要です。これらの例は自己責任で使用してください。

> これらの例はApache 2.4向けです。Apache 2.2では[`2.2`ブランチ](https://github.com/phanan/htaccess/tree/2.2)を使用してください。[アップグレード文書](https://httpd.apache.org/docs/2.4/upgrading.html)と[互換性を失う変更についてのIssue](https://github.com/phanan/htaccess/issues/2)も参照してください。

## 書き換えとリダイレクト <a id="rewrite-and-redirection"></a>
注：`mod_rewrite`がインストールされ、有効になっていることを前提とします。

### www付きURLへの統一 <a id="force-www"></a><a id="wwwを強制"></a>
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_HOST} ^example\.com [NC]
RewriteRule ^(.*)$ https://www.example.com/$1 [L,R=301,NC]
```

### www付きURLへの統一（汎用版） <a id="force-www-in-a-generic-way"></a><a id="汎用的にwwwを強制"></a>
``` apacheconf
RewriteCond %{HTTP_HOST} !^$
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteCond %{HTTPS}s ^on(s)|
RewriteRule ^ http%1://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```
任意のドメインで使える設定です。[出典](https://stackoverflow.com/questions/4916222/htaccess-how-to-force-www-in-a-generic-way)

### wwwなしURLへの統一 <a id="force-non-www"></a><a id="非wwwを強制"></a>
記録された原文は、www付きドメインとwwwなしドメインについての議論として[SitePoint](https://www.sitepoint.com/domain-www-or-no-www/)、[Heroku](https://devcenter.heroku.com/articles/apex-domains)、[yes-www](https://yes-www.org/)、[no-www](https://no-www.org/)を挙げています。次の例はwwwなしのドメインを使います。
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.example\.com [NC]
RewriteRule ^(.*)$ https://example.com/$1 [L,R=301]
```

### wwwなしURLへの統一（汎用版） <a id="force-non-www-in-a-generic-way"></a><a id="汎用的に非wwwを強制"></a>
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_HOST} ^www\.
RewriteCond %{HTTPS}s ^on(s)|off
RewriteCond http%1://%{HTTP_HOST} ^(https?://)(www\.)?(.+)$
RewriteRule ^ %1%3%{REQUEST_URI} [R=301,L]
```

### HTTPSへの統一 <a id="force-https"></a><a id="httpsを強制"></a>
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

### プロキシの背後でのHTTPSへの統一 <a id="force-https-behind-a-proxy"></a><a id="プロキシ背後でhttpsを強制"></a>
サーバーの前段にTLS終端を行うプロキシがある場合の設定例です。
``` apacheconf
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
```

### 末尾のスラッシュの追加 <a id="force-trailing-slash"></a><a id="末尾スラッシュを強制"></a>
``` apacheconf
RewriteCond %{REQUEST_URI} /+[^\.]+$
RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]
```

### 末尾のスラッシュの削除 <a id="remove-trailing-slash"></a><a id="末尾スラッシュを削除"></a>
実在するディレクトリを除き、末尾がスラッシュのパスをスラッシュなしのパスへリダイレクトします。たとえば`https://www.example.com/blog/`を`https://www.example.com/blog`へ変換します。各ページに正規URLを設けることが[推奨](https://overit.com/blog/canonical-urls)されるため、SEOでも重要です。
``` apacheconf
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [R=301,L]
```
[出典](https://stackoverflow.com/questions/21417263/htaccess-add-remove-trailing-slash-from-url#27264788)

### 単一ページのリダイレクト <a id="redirect-a-single-page"></a><a id="単一ページをリダイレクト"></a>
``` apacheconf
Redirect 301 /oldpage.html https://www.example.com/newpage.html
Redirect 301 /oldpage2.html https://www.example.com/folder/
```
[出典](https://css-tricks.com/snippets/htaccess/301-redirects/)

### RedirectMatchによるリダイレクト <a id="redirect-using-redirectmatch"></a><a id="redirectmatchでリダイレクト"></a>
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
[出典](https://www.askapache.com/htaccess/301-redirect-with-mod_rewrite-or-redirectmatch.html#301_Redirects_RedirectMatch)

### 単一ディレクトリのリダイレクト <a id="alias-a-single-directory"></a><a id="単一ディレクトリのエイリアス"></a>
``` apacheconf
RewriteEngine On
RewriteRule ^source-directory/(.*) /target-directory/$1 [R=301,L]
```

### パスからスクリプトへの割り当て <a id="alias-paths-to-script"></a><a id="パスをスクリプトへ割り当て"></a>
``` apacheconf
FallbackResource /index.fcgi
```
この例では、あるディレクトリに`index.fcgi`ファイルがあり、そのディレクトリ内でファイル名やディレクトリ名として解決できないリクエストを`index.fcgi`スクリプトへ送ります。`baz.foo/some/cool/path`を`baz.foo/index.fcgi`（`baz.foo`へのリクエストにも対応）で処理しながら、`baz.foo/css/style.css`などを維持したい場合に使えます。元のパスは、スクリプト環境に公開されるPATH_INFO環境変数から取得できます。

``` apacheconf
RewriteEngine On
RewriteRule ^$ index.fcgi/ [QSA,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.fcgi/$1 [QSA,L]
```
この方法はFallbackResourceディレクティブより効率が劣ります（`mod_rewrite`は`FallbackResource`だけを扱うより複雑なため）が、より柔軟です。

### サイト全体のリダイレクト <a id="redirect-an-entire-site"></a><a id="サイト全体をリダイレクト"></a>
``` apacheconf
Redirect 301 / https://newsite.com/
```
サイトを新しいドメインへ移転するときにURLのパスを維持します。`www.oldsite.com/some/crazy/link.html`は`www.newsite.com/some/crazy/link.html`になります。[出典](https://css-tricks.com/snippets/htaccess/301-redirects/)

### 「クリーン」URLの割り当て <a id="alias-clean-urls"></a><a id="クリーンurlのエイリアス"></a>
PHP拡張子なしの「クリーン」URLを使う設定例です。たとえば`example.com/users`を`example.com/users.php`に代わるURLとして使います。
``` apacheconf
RewriteEngine On
RewriteCond %{SCRIPT_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.php [NC,L]
```
[出典](https://www.abeautifulsite.net/access-pages-without-the-php-extension-using-htaccess/)

### URLをリダイレクト対象から除外 <a id="exclude-url-from-redirection"></a>
URLをリダイレクト対象から除外する設定例です。たとえばリダイレクト規則を設定しつつ、検索エンジンが想定どおりアクセスできるようrobots.txtだけを除外できます。
``` apacheconf
RewriteEngine On
RewriteRule ^robots.txt - [L]
```

## セキュリティ <a id="security"></a>
### すべてのアクセスを拒否 <a id="deny-all-access"></a>
``` apacheconf
Require all denied
```

この設定では自分自身もコンテンツへアクセスできなくなります。次のIPアドレスによる設定例を参照してください。

### 自分以外のアクセスを拒否 <a id="deny-all-access-except-yours"></a>
``` apacheconf
Require all denied
Require ip xxx.xxx.xxx.xxx
```
`xxx.xxx.xxx.xxx`は自分のIPアドレスを表します。記録された原文では、許可するアドレスを個別に列挙せずIPアドレスの範囲を指定する方法として、末尾の3桁を`0/12`へ置き換える例を挙げています。実際の範囲はCIDRのプレフィックス長で決まるため、自分のローカルネットワークと一致するとは限りません。[Require ip](https://httpd.apache.org/docs/2.4/mod/mod_authz_host.html#require)を参照してください。[出典](https://speckyboy.com/2013/01/08/useful-htaccess-snippets-and-hacks/)

次の例は特定のIPアドレスを除外することを意図したものです。

### スパマー以外のアクセスを許可 <a id="allow-all-access-except-spammers"></a>
``` apacheconf
Require all granted
Require not ip xxx.xxx.xxx.xxx
Require not ip xxx.xxx.xxx.xxy
```

編集注記：記録された原文の例を変更せずに掲載しています。このままでは有効なApache 2.4の除外規則になりません。認可用コンテナなしで複数のRequireディレクティブを並べるとRequireAnyとして扱われ、そこで否定ディレクティブは許可されません。例を使用する前に、許可と除外の条件をRequireAll内へまとめてください。[Apacheの認可ドキュメント](https://httpd.apache.org/docs/2.4/mod/mod_authz_core.html#require)を参照してください。

### 隠しファイルとディレクトリへのアクセスを拒否 <a id="deny-access-to-hidden-files-and-directories"></a>
名前がドット`.`で始まる隠しファイルとディレクトリは、通常は保護すべきです。たとえば`.htaccess`、`.htpasswd`、`.git`、`.hg`などです。
``` apacheconf
RewriteCond %{SCRIPT_FILENAME} -d [OR]
RewriteCond %{SCRIPT_FILENAME} -f
RewriteRule "(^|/)\." - [F]
```

代わりに「Not Found」エラーを返し、攻撃者へ手掛かりを与えない方法もあります。
``` apacheconf
RedirectMatch 404 /\..*$
```

### バックアップファイルとソースファイルへのアクセスを拒否 <a id="deny-access-to-backup-and-source-files"></a><a id="バックアップとソースファイルへのアクセスを拒否"></a>
Vi/Vimなどのテキスト／HTMLエディターがこれらのファイルを残すことがあり、公開されると重大なセキュリティリスクになります。
``` apacheconf
<FilesMatch "(\.(bak|config|dist|fla|inc|ini|log|psd|sh|sql|swp)|~)$">
    Require all denied
</FilesMatch>
```
[出典](https://github.com/h5bp/server-configs-apache)

### ディレクトリ一覧の表示を無効化 <a id="disable-directory-browsing"></a><a id="ディレクトリ一覧を無効化"></a>
``` apacheconf
Options All -Indexes
```

### 画像の直リンクを無効化 <a id="disable-image-hotlinking"></a>
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

### 特定ドメインからの画像の直リンクを無効化 <a id="disable-image-hotlinking-for-specific-domains"></a><a id="特定ドメインの画像直リンクを無効化"></a>
特定のドメインからの画像の直リンクをブロックします。
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_REFERER} ^https?://(.+\.)?badsite\.com [NC,OR]
RewriteCond %{HTTP_REFERER} ^https?://(.+\.)?badsite2\.com [NC,OR]
RewriteRule \.(jpe?g|png|gif|bmp|webp|avif|svg|ico)$ - [NC,F,L]

# If you want to display a “blocked” banner in place of the hotlinked image,
# replace the above rule with:
# RewriteRule \.(jpe?g|png|gif|bmp|webp|avif|svg|ico) https://example.com/blocked.png [R,L]
```

### ディレクトリのパスワード保護 <a id="password-protect-a-directory"></a><a id="ディレクトリをパスワード保護"></a>
まず、システム内の任意の場所に`.htpasswd`ファイルを作成します。
``` bash
htpasswd -c /home/fellowship/.htpasswd boromir
```

次に、そのファイルを認証に使います。
``` apacheconf
AuthType Basic
AuthName "One does not simply"
AuthUserFile /home/fellowship/.htpasswd
Require valid-user
```

### 単一または複数ファイルのパスワード保護 <a id="password-protect-a-file-or-several-files"></a><a id="ファイルをパスワード保護"></a>
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

### リファラーによる訪問者のブロック <a id="block-visitors-by-referrer"></a><a id="リファラーで訪問者をブロック"></a>
特定のドメインをリファラーとして訪れたすべてのユーザーのアクセスを拒否します。
[出典](https://www.htaccess-guide.com/deny-visitors-by-referrer/)
``` apacheconf
RewriteEngine on
# Options +FollowSymlinks
RewriteCond %{HTTP_REFERER} somedomain\.com [NC,OR]
RewriteCond %{HTTP_REFERER} anotherdomain\.com
RewriteRule .* - [F]
```

### 特定のUser-Agentのブロック <a id="block-specific-user-agents"></a><a id="特定のuser-agentをブロック"></a>
特定のUser-Agentによるサイトへのアクセスをブロックします。スクレイパーや悪質なボットをブロックするために使えます。
``` apacheconf
RewriteEngine on
RewriteCond %{HTTP_USER_AGENT} BadBot [NC,OR]
RewriteCond %{HTTP_USER_AGENT} EvilScraper [NC]
RewriteRule .* - [F,L]
```

### サイトのフレーム埋め込みを制限 <a id="prevent-framing-the-site"></a><a id="サイトのフレーム表示を防止"></a>
`iframe`内への埋め込みを同一オリジンに制限します。この例では、指定したURIに対して制限を付けません。SAMEORIGINの挙動は[X-Frame-Optionsのリファレンス](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options)を参照してください。
``` apacheconf
SetEnvIf Request_URI "/starry-night" allow_framing=true
Header set X-Frame-Options SAMEORIGIN env=!allow_framing
```

### Content Security Policy（CSP） <a id="content-security-policy-csp"></a>
Content Security Policyヘッダーは、読み込みを許可する動的リソースを宣言し、クロスサイトスクリプティング（XSS）などのコードインジェクション攻撃を軽減します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'"
</IfModule>
```
用途に合わせてディレクティブを調整してください。利用可能な全ディレクティブは[CSPのリファレンス](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)を参照してください。

### MIMEタイプの推測を防ぐ <a id="prevent-mime-type-sniffing"></a><a id="mimeタイプスニッフィングを防止"></a>
サーバーが指定したコンテンツタイプを使い、MIMEタイプの推測を防ぎます。スクリプトやスタイルシートのリクエストでは、想定されたMIMEタイプと一致しない応答をブラウザーがブロックします。[X-Content-Type-Optionsのリファレンス](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)を参照してください。
``` apacheconf
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
</IfModule>
```

### Referrer Policyの設定 <a id="set-referrer-policy"></a><a id="referrer-policyを設定"></a>
リクエストに含めるリファラー情報の量を制御します。完全なURLが外部サイトへ漏れるのを防ぎ、ユーザーのプライバシーを保護します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### Permissions Policyの設定 <a id="set-permissions-policy"></a><a id="permissions-policyを設定"></a>
カメラ、マイク、位置情報など、サイトが利用できるブラウザー機能を制限します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Permissions-Policy "camera=(), microphone=(), geolocation=(), interest-cohort=()"
</IfModule>
```

### サーバー署名の非表示 <a id="remove-server-signature"></a><a id="サーバー署名を削除"></a>
エラーページなど、サーバーが生成するページのサーバー署名を表示しない設定です。この設定はHTTP応答のServerヘッダーを制御しません。ServerヘッダーはServerTokensが別に制御します。[Apacheのディレクティブのドキュメント](https://httpd.apache.org/docs/2.4/mod/core.html#serversignature)を参照してください。
``` apacheconf
ServerSignature Off
```

## パフォーマンス <a id="performance"></a>
### テキストファイルの圧縮 <a id="compress-text-files"></a><a id="テキストファイルを圧縮"></a>
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
[出典](https://github.com/h5bp/server-configs-apache)

### Expiresヘッダーの設定 <a id="set-expires-headers"></a><a id="expiresヘッダーを設定"></a>
Expiresヘッダーは、特定のファイルをサーバーへ要求するか、キャッシュから取得するかをブラウザーへ伝えます。静的コンテンツの有効期限には、十分先の日付を設定することが推奨されます。

ファイル名によるキャッシュバスティングでバージョンを管理していない場合は、CSSやJSなどのキャッシュ期間を1週間程度へ短縮することを検討してください。[出典](https://github.com/h5bp/server-configs-apache)
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

### Cache-Controlヘッダーの設定 <a id="set-cache-control-headers"></a><a id="cache-controlヘッダーを設定"></a>
`Cache-Control`ヘッダーは、Expiresヘッダーより細かくブラウザーのキャッシュを制御できます。互換性を高めるために両方を併用できます。
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

### ETagを無効化 <a id="turn-etags-off"></a>
`ETag`ヘッダーを削除すると、エンティティタグに基づく検証が無効になります。`Cache-Control`と`Expires`ヘッダーでキャッシュの挙動を設定してください。[出典](https://www.askapache.com/htaccess/apache-speed-etags.html)
``` apacheconf
<IfModule mod_headers.c>
    Header unset ETag
</IfModule>
FileETag None
```

## その他 <a id="miscellaneous"></a>

### PHP変数の設定 <a id="set-php-variables"></a><a id="php変数を設定"></a>
``` apacheconf
php_value <key> <val>

# For example:
php_value upload_max_filesize 50M
php_value max_execution_time 240
```

### 独自のエラーページ <a id="custom-error-pages"></a><a id="カスタムエラーページ"></a>
``` apacheconf
ErrorDocument 500 "Houston, we have a problem."
ErrorDocument 401 https://error.example.com/mordor.html
ErrorDocument 404 /errors/halflife3.html
```

### 独自のメンテナンスページ <a id="custom-maintenance-page"></a><a id="カスタムメンテナンスページ"></a>
記録された原文は、特定のIPアドレスからのアクセスを許可するメンテナンスページの設定例として紹介しています。条件には、メンテナンスページと列挙された拡張子の配信ファイルを除外する指定もあります。編集注記：コードは変更せず掲載しています。R=503は503応答を返し、書き換え先を破棄するため、指定されたメンテナンスページへのリダイレクトやそのページの配信は行いません。独自の503ページを表示するには、ErrorDocumentなどでエラー応答を別途設定してください。[ApacheのRewriteRuleフラグのドキュメント](https://httpd.apache.org/docs/2.4/rewrite/flags.html#flag_r)を参照してください。
``` apacheconf
RewriteEngine on
RewriteCond %{REMOTE_ADDR} !^xxx\.xxx\.xxx\.xxx
RewriteCond %{REQUEST_URI} !/maintenance.html$ [NC]
RewriteCond %{REQUEST_URI} !\.(css|js|png|jpe?g|gif|svg|ico)$ [NC]
RewriteRule .* /maintenance.html [R=503,L]
```
メンテナンス中もアクセスできるよう、`xxx.xxx.xxx.xxx`を自分のIPアドレスへ置き換えてください。

### ダウンロードを強制 <a id="force-downloading"></a>
コンテンツを表示せず、ブラウザーにダウンロードさせたい場合の設定例です。
``` apacheconf
<Files *.md>
    ForceType application/octet-stream
    Header set Content-Disposition attachment
</Files>
```

次の例は、ダウンロードではなく表示を求める設定です。

### ダウンロードを防ぐ <a id="prevent-downloading"></a><a id="ダウンロードを防止"></a>
コンテンツをダウンロードせず、ブラウザーに表示させたい場合の設定例です。
``` apacheconf
<FilesMatch "\.(tex|log|aux)$">
    Header set Content-Type text/plain
</FilesMatch>
```

### クロスドメインでのフォントの利用を許可 <a id="allow-cross-domain-fonts"></a><a id="クロスドメインフォントを許可"></a>
記録された原文では、CDNから配信されるウェブフォントが[CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)のためFirefoxで読み込めない場合があると説明しています。この例は、列挙したフォント形式へのクロスオリジンリクエストを許可します。
``` apacheconf
<IfModule mod_headers.c>
    <FilesMatch "\.(otf|ttc|ttf|woff|woff2)$">
        Header set Access-Control-Allow-Origin "*"
    </FilesMatch>
</IfModule>
```
[出典](https://github.com/h5bp/server-configs-apache/issues/32)

### CORSの有効化 <a id="enable-cors"></a><a id="corsを有効化"></a>
サイトでCross-Origin Resource Sharing（CORS）を有効にし、他のドメインからサーバーへのリクエストを許可します。
``` apacheconf
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
```
特定のドメインに制限するには、`*`を`https://example.com`などのドメインへ置き換えます。

### UTF-8エンコーディングの設定 <a id="auto-utf-8-encode"></a><a id="utf-8を自動設定"></a>
列挙したテキスト形式の文字エンコーディングをUTF-8に設定します。
``` apacheconf
# Use UTF-8 encoding for anything served text/plain or text/html
AddDefaultCharset utf-8

# Force UTF-8 for a number of file formats
AddCharset utf-8 .atom .css .js .json .rss .vtt .xml
```
[出典](https://github.com/h5bp/server-configs-apache)

### 独自のMIMEタイプの設定 <a id="set-custom-mime-types"></a><a id="カスタムmimeタイプを設定"></a>
Apacheが標準では認識しないファイル形式に、カスタムMIMEタイプを定義します。
``` apacheconf
AddType application/manifest+json .webmanifest
AddType application/wasm .wasm
AddType application/x-ndjson .ndjson
AddType text/vtt .vtt
```

### 別のPHPバージョンへの切り替え <a id="switch-to-another-php-version"></a><a id="別のphpバージョンへ切り替え"></a>
共有ホスティングでは複数のPHPバージョンが用意されている場合があります。次の例では、ホスティングのハンドラー設定を使い、サイトのPHPバージョンを選択します。

``` apacheconf
AddHandler application/x-httpd-php84 .php

# Alternatively, you can use AddType
AddType application/x-httpd-php84 .php
```

### WebP/AVIF画像の配信 <a id="serve-webpavif-images"></a><a id="webpavif画像を配信"></a>
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
