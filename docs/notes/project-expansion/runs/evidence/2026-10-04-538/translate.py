from pathlib import Path
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');p=w/'apps/xxhash/src/content/docs/v0-8-4/en/03-notices/library-root.md';s=p.read_text().replace('library-root — original notice','library-root — 原通知').replace('Original notice retained verbatim.','原通知を変更せず保持しています。').replace('Fixed original source','固定版の原文')
s+='''## 非公式の日本語訳

以下は内容理解のための非公式訳です。上記の英語の原通知を保持しており、この訳は原通知を置き換えるものではありません。

xxHashライブラリ。著作権 (c) 2012–2021 Yann Collet。すべての権利を留保します。

BSD 2条項ライセンス。

変更の有無にかかわらず、ソース形式およびバイナリ形式での再配布と使用は、次の条件を満たす場合に許可されます。

- ソースコードの再配布では、上記の著作権表示、この条件一覧、および以下の免責事項を保持する必要があります。
- バイナリ形式での再配布では、配布物に付属する文書またはその他の資料に、上記の著作権表示、この条件一覧、および以下の免責事項を再掲する必要があります。

このソフトウェアは、著作権者および貢献者によって「現状のまま」提供されます。商品性および特定目的への適合性に関する黙示の保証を含め、明示または黙示の一切の保証を否認します。

著作権者または貢献者は、このソフトウェアの使用に起因する直接損害、間接損害、付随的損害、特別損害、懲罰的損害、または結果的損害について、一切責任を負いません。これには、代替の物品またはサービスの調達、使用機会・データ・利益の喪失、事業の中断が含まれますが、これらに限定されません。損害がどのように生じたか、また契約、厳格責任、不法行為（過失その他を含む）など、どの責任理論に基づくかを問わず、そのような損害の可能性を知らされていた場合も同様です。
'''
p=r/'docs/notes/document-import/xxhash/v0-8-4/drafts/ja/library-root.reviewed-content.md';p.write_text(s)
