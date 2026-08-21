---
title: "atblueprints/awesome-atproto"
description: "atblueprints/awesome-atproto の翻訳初稿（未検査）"
licenseSource: "github-atblueprints-awesome-atproto-readme-md"
---

<div align="center">
<img src="https://raw.githubusercontent.com/atblueprints/awesome-atproto/main/assets/logo.png" width="300px">

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
</div>

# Awesome ATProto 

> [AT Protocol](https://atproto.com/)は、オープンで分散型のネットワーク上にソーシャルアプリケーションを構築するための連合プロトコルです。

## 目次

* [AT Protocol](#at-protocol)
    * [リファレンス](#references)
    * [記事](#articles)
* [ブラウザー](#browsers)
* [プラットフォーム](#platforms)
    * [Bluesky](#bluesky)
* [ツール](#tools)
* [Lexicon](#lexicons)

## AT Protocol

### リファレンス

* [Glossary](https://atproto.com/guides/glossary) - AT Protocol用語のクイックリファレンス。
* [Lexicons, Pinned Posts, and Interoperability](https://docs.bsky.app/blog/pinned-posts) - Lexiconの進化と得られた教訓に関するポストモーテム。
* [Quick start guide to building applications on AT Protocol](https://atproto.com/guides/applications) - 基本的なATProtoアプリケーションを作るためのガイド。

### 記事

* [First impressions of Bluesky's AT Protocol](https://educatedguesswork.org/posts/atproto-firstlook/) - 分散型ソーシャルメディアアーキテクチャを作るという狙いに焦点を置いた、BlueskyのATProtoの詳細な分析。
* [Nostr and ATProto](https://shreyanjain.net/2024/07/05/nostr-and-atproto.html) - 二つの分散型ソーシャルメディアプロトコル、NostrとATProtoについて、起源、類似点、相違点を探る比較。
* [How decentralized is Bluesky really?](https://dustycloud.org/blog/how-decentralized-is-bluesky/) - 既存プロトコルとの比較により、Blueskyの分散化に関する主張とアーキテクチャ上の課題を批判的に検討する。
* [Reply on Bluesky and Decentralization](https://whtwnd.com/bnewbold.net/3lbvbtqrg5t2t) - Christine Lemmer-Webberによる、思慮深く広く読まれた「How decentralized is Bluesky really?」ブログ投稿への返信。
* [What is atproto.com good for?](https://bnewbold.net/2022/atproto_thoughts/) - 分散型ソーシャルメディアプロトコルとしてのATProtoについて、設計原則、アーキテクチャ上の課題、潜在的な制限を技術的に探究する。
* [The AT Protocol Architecture](https://hackernoon.com/the-at-protocol-architecture) - ATProtoのアーキテクチャ分析。
* [Notes on Running a Full-Network atproto Relay (July 2024)](https://whtwnd.com/bnewbold.net/entries/Notes%20on%20Running%20a%20Full-Network%20atproto%20Relay%20(July%202024)) - ATProtoリレーを運用した経験。

## ブラウザー

* [PDSls](https://pdsls.dev/) - ATProtoリポジトリーのブラウザー。
* [ATProto Browser](https://atproto-browser.vercel.app/) - ATProto URIのブラウザー。

## プラットフォーム

* [Bluesky](https://bsky.social) - 人気のソーシャルネットワークであり、主要なATProtoプラットフォーム。
* [Blue Place](https://place.blue/) - 大規模なリアルタイム共同キャンバス。
* [Bookhive](https://bookhive.buzz/) - Goodreadsの代替。
* [Frontpage](https://frontpage.fyi/) - 連合型リンクアグリゲーター。
* [GrayHaze](https://grayhaze.live/about) - ライブストリーミングサービス（alpha）。
* [Linkat](https://linkat.blue/) - Bluesky向けのリンクインバイオ。
* [Pastesphere](https://pastesphere.link/) - Pastebinの代替。
* [Picosky](https://psky.social/) - ATProtoのチャット用appview。
* [PinkSea](https://pinksea.art/) - お絵かきBBS。
* [recipe.exchange](https://recipe.exchange/) - 料理レシピの共有。
* [Skylights](https://skylights.my/) - 書評。
* [Smoke Signal](https://smokesignal.events/) - イベントの作成と管理。
* [Sparta Social](https://github.com/dblock/sparta-social) - 運動活動トラッカー（wip）。
* [TouchGrass](https://touchgrass.network) - 実生活、実際の友人、可搬性、相互運用性を重視した、ATProtoおよびActivityPub互換の意見を反映したソーシャルネットワーク。
* [Whitewind](https://whtwnd.com/) - 登録不要でATProtoを使用するMarkdownブログサービス。

### Bluesky

* [ClearSky](https://clearsky.app/) - Blueskyアカウントを探索するツール。
* [cleanfollow](https://cleanfollow-bsky.pages.dev/) - 非アクティブまたはブロック済みのアカウントを選んでフォロー解除する。
* [Handles directory](https://blue.mackuba.eu/directory/) - TLD別にハンドルをランク付けする。
* [Labellers](https://blue.mackuba.eu/labellers/) - 既知のラベラーのリスト。
* [BluSki account history](https://mocku.me/nt/#%23+BluSki+account+history//%23%23+Whose+history%3F//Let's+pick+a+rando+hot+poster+from+Discovery+feed+--//%60%60%60JavaScript/%2F%2F+downloading+Discovery+feed+posts/let+discoveryFeedPosts+=+(await+fetch(/++'https:%2F%2Fapi.bsky.app%2Fxrpc%2Fapp.bsky.feed.getFeed%3Ffeed=at:%2F%2Fdid:plc:z72i7hdynmk6r22z27h6tvur%2Fapp.bsky.feed.generator%2Fwhats-hot%26limit=100',/++%7B+headers:+%7B+'accept-language':+'en'+%7D+%7D).then(x+=%3E+x.json())).feed;//%2F%2F+sort+by+likes/let+topTextPost+=+discoveryFeedPosts/++.filter(p+=%3E+p.post.record.text+%26%26+!p.post.record.embed)/++.sort((p1,+p2)+=%3E+p2.post.likeCount+-+p1.post.likeCount)%5B0%5D;//%2F%2F+let's+see+all+the+info+now/let+hotAuthor+=+%7B/++...topTextPost.post.author,/++post:+%7B+...topTextPost.post,+...topTextPost.post.record,+post:+undefined,+record:+undefined,+author:+undefined+%7D/%7D;/%60%60%60//If+you're+after+specifc+handle,+specify+it+now.//%60%60%60JavaScript/let+bskyHandle+=+%2F%2F+'oyin.bo';+++++++%2F%2F++%3C--+like+this/++hotAuthor.handle;+//let+resolvedAccount+=++await+fetch(/++'https:%2F%2Fpublic.api.bsky.app%2Fxrpc%2Fapp.bsky.actor.getProfile%3Factor='+%2B+bskyHandle).then(x=%3Ex.json())/%60%60%60//%23%23+Finding+PDS+for+that+account//PDS,+personal+data+server+physically+stores+account's+data.+Usually+it's+one+of+a+couple+dozens+BluSki+servers+in+the+cloud.//By+tradition+they+get+Latin+mushroom+names.//Accounts+sometimes+shift+from+one+mushroom+to+another,+so+we+find+the+latest+most+actual+PDS.//%60%60%60JavaScript/let+plcEntries+=+await+fetch(%60https:%2F%2Fplc.directory%2F$%7BresolvedAccount.did%7D%2Flog%2Faudit%60).then(x+=%3E+x.json());+%2F%2F+full+account+registry/let+lastKnownPds+=+plcEntries.slice().reverse().map(x=%3Ex.operation%3F.services%3F.atproto_pds%3F.endpoint).filter(Boolean)%5B0%5D;+%2F%2F+last+PDS+operation+record/%60%60%60//%23%23+Downloading+the+history+in+CAR%2FCBOR+format//Account+history+is+a+public+service,+because+it's+used+in+distributing+BluSki+data+across+the+network.+The+file+can+be+anything+between+1-50Mb+depending+on+shitposting+power.//The+binary+CAR%2FCBOR+format+saves+storage+and+bandwith,+and+has+extra+funky+cryptographic+signatures+(of+which+no+normal+person+cares).//%60%60%60JavaScript/let+binarySnapshot+=+await+fetch(lastKnownPds+%2B+'%2Fxrpc%2Fcom.atproto.sync.getRepo%3Fdid='+%2B+resolvedAccount.did).then(x+=%3E+x.arrayBuffer());/binarySnapshot.byteLength.toLocaleString()/%60%60%60//%23%23+Extracting+useful+data+from+CAR%2FCBOR//There+are+libraries+for+that+in+every+programming+language.+Just+invoke+and+it'll+come.//%60%60%60JavaScript/import+%7B+readCAR+%7D+from+'https:%2F%2Funpkg.com%2Fcoldsky';/let+parsedRecords+=+await+readCAR(resolvedAccount.did,+binarySnapshot,+%7B+sleep:+600+%7D)/%60%60%60//%23+Finally,+useful+info!//Having+this+rich+history+of+shitposts,+replies,+likes+and+more,+we+are+ready+to+look+at+actual+stats.//%23%23+What+kind+of+activity+dominates%3F//%60%60%60SQL/SELECT+%5B$type%5D,+COUNT(*)/FROM+$4+GROUP+BY+%5B$type%5D/ORDER+BY+COUNT(*)+DESC/%60%60%60//%23%23+5+days+of+heaviest+shitpost//%60%60%60SQL/SELECT+TOP+5+createdAt-%3Esplit('T')-%3E%5B0%5D+as+date,+COUNT(*)/FROM+$4/++WHERE+%5B$type%5D+=+%22app.bsky.feed.post%22/++GROUP+BY+createdAt-%3Esplit('T')-%3E%5B0%5D/ORDER+BY+COUNT(*)+DESC/%60%60%60//%23%23+5+days+of+love:+more+likes+gifted+to+others//%60%60%60SQL/SELECT+TOP+5+createdAt-%3Esplit('T')-%3E%5B0%5D+as+date,+COUNT(*)/FROM+$4/++WHERE+%5B$type%5D+=+%22app.bsky.feed.like%22/++GROUP+BY+createdAt-%3Esplit('T')-%3E%5B0%5D/ORDER+BY+COUNT(*)+DESC/%60%60%60//%23%23+10+favourite+accounts//%60%60%60SQL/SELECT+TOP+10+subject-%3Euri-%3Esplit('at:%2F%2F')-%3E%5B1%5D-%3Esplit('%2F')-%3E%5B0%5D+as+did,+COUNT(*)+AS+likes/FROM+$4/++WHERE+%5B$type%5D+=+%22app.bsky.feed.like%22/++GROUP+BY+subject-%3Euri-%3Esplit('at:%2F%2F')-%3E%5B1%5D-%3Esplit('%2F')-%3E%5B0%5D/ORDER+BY+COUNT(*)+DESC/%60%60%60//%23%23+Who+are+these+people%3F//Account+history+file+refers+to+other+accounts+with+hexadecimal+DID,+which+as+you+see+above+isn't+that+readable.//No+sweat,+BluSki+has+a+service+to+resolve+DID+to+account+name%2Fhandle%2Finfo.+Here+you+go.//%60%60%60JavaScript/Promise.all($8.map(async+entry+=%3E+%7B/++const+profile+=+await+fetch('https:%2F%2Fpublic.api.bsky.app%2Fxrpc%2Fapp.bsky.actor.getProfile%3Factor='+%2B+entry.did).then(x+=%3E+x.json());/++return+%7B/++++did:+profile.did,+handle:+profile.handle,+displayName:+profile.displayName,/++++likesCount:+entry.likes,/++++postsCount:+profile.postsCount,/++++...profile/++%7D;/%7D))/%60%60%60//%23%23+10+accounts+getting+most+reply+traffic//%60%60%60SQL/SELECT+TOP+10+reply-%3Eparent-%3Euri-%3Esplit('at:%2F%2F')-%3E%5B1%5D-%3Esplit('%2F')-%3E%5B0%5D+as+did,+COUNT(*)+AS+replies/FROM+$4/++WHERE+%5B$type%5D+=+%22app.bsky.feed.post%22+AND+reply+AND+reply-%3Eparent-%3Euri/++GROUP+BY+reply-%3Eparent-%3Euri-%3Esplit('at:%2F%2F')-%3E%5B1%5D-%3Esplit('%2F')-%3E%5B0%5D/ORDER+BY+COUNT(*)+DESC+/%60%60%60//And+again,+with+names+and+extra.//%60%60%60JavaScript/Promise.all($10.map(async+entry+=%3E+%7B/++const+profile+=+await+fetch('https:%2F%2Fpublic.api.bsky.app%2Fxrpc%2Fapp.bsky.actor.getProfile%3Factor='+%2B+entry.did).then(x+=%3E+x.json());/++return+%7B/++++did:+profile.did,+handle:+profile.handle,+displayName:+profile.displayName,/++++repliesCount:+entry.replies,/++++postsCount:+profile.postsCount,/++++...profile/++%7D;/%7D))/%60%60%60//) - Blueskyアカウントを分析するための編集可能なノートブック。
* [Starter Packs](https://www.starterpacks.net/) - Blueskyのスターターパックとプロフィールを検索する。
* [PDS self-hosting](https://atproto.com/guides/self-hosting) - Bluesky PDSのセルフホスティングとは、より広いATProtoネットワークと連合できる独自のPersonal Data Serverを運用すること。
* [Bluesky-powered comments for any website](https://github.com/czue/bluesky-comments) - ウェブサイトへBlueskyコメントを簡単に埋め込む（[告知](https://www.coryzue.com/writing/bluesky-comments/)）。

Bluesky向けのツールは、より網羅的なツール・クライアント一覧である[Awesome Bluesky](https://github.com/notjuliet/awesome-bluesky)も確認してください。

## ツール

* [ATFile](https://github.com/ziodotsh/atfile) - ATmosphere上にファイルを保存・取得する。
* [ShopSavvy for Bluesky](https://github.com/shopsavvy/bluesky-shopsavvy) - AT Protocolスイート: リアルタイム価格検索向けのリアクティブなメンションボット、カスタムのお買い得情報フィード生成器、日次お買い得情報ポスター。

## Lexicon

Lexiconは、atprotoレコード、HTTPエンドポイント（XRPC）、イベントストリームメッセージを記述するためのスキーマ定義言語です。

以下に各プラットフォームのLexiconを示します:

* [ATFile](https://github.com/ziodotsh/lexicons/tree/main/blue/zio/atfile)
* [Bluemoji](https://github.com/aendra-rininsland/bluemoji/tree/main/schema/blue.moji)
* [Bluesky](https://github.com/bluesky-social/atproto/tree/main/lexicons/app/bsky)
* [Bookhive](https://github.com/nperez0111/bookhive/tree/main/lexicons)
* [Frontage](https://github.com/likeandscribe/frontpage/tree/main/lexicons/fyi/unravel/frontpage)
* [GrayHaze](https://github.com/hugeblank/grayhaze.live/tree/main/lexicons/live/grayhaze)
* [Linkat](https://github.com/mkizka/linkat/tree/main/lexicons/blue/linkat)
* [Pastesphere](https://github.com/echo8/pastesphere/tree/main/lexicons)
* [Picosky](https://github.com/psky-atp/appview/tree/main/lexicons/social/psky)
* [PinkSea](https://github.com/shinolabs/PinkSea/tree/master/PinkSea.Lexicons/com/shinolabs/pinksea)
* [place.blue](https://github.com/QuietImCoding/place.blue/tree/main/atproto/lexicons)
* [recipe.exchange](https://recipe.exchange/lexicons/)
* [Skylights](https://github.com/Gregoor/skylights/tree/main/web/lexicons)
* [Skymdb](https://github.com/safwanyp/skymdb/tree/main/domain/lexicons)
* [Smoke Signal](https://github.com/SmokeSignal-Events/lexicon)
* [Sparta Social](https://github.com/dblock/sparta-social/tree/main/lexicons)
* [Whitewind](https://github.com/whtwnd/whitewind-blog/tree/main/lexicons/com/whtwnd/blog) 

## コントリビュート

貢献を歓迎します。まず[コントリビューションガイドライン](https://github.com/atblueprints/awesome-atproto/blob/f9b748307b0247d2cdfbb1e1c6e9f9a4ec04966e/contributing.md)をお読みください。
