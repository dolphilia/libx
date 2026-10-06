from pathlib import Path
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');n=r/'docs/notes/document-import/xxhash/v0-8-4/drafts/ja'
intro='## 非公式の日本語訳\n\n以下は内容理解のための非公式訳です。上記の英語の原通知を保持しており、この訳は原通知を置き換えるものではありません。\n\n'
bsd=(n/'library-root.reviewed-content.md').read_text().split('BSD 2条項ライセンス。',1)[1]
gpl='''GPL v2ライセンス。

このプログラムは自由ソフトウェアです。Free Software Foundationが公表するGNU一般公衆利用許諾書の第2版、または任意に選択したそれ以降の版の条件に従い、再配布および変更を行うことができます。

このプログラムは役に立つことを期待して配布されていますが、一切の保証はありません。商品性や特定目的への適合性についての黙示の保証もありません。詳しくはGNU一般公衆利用許諾書を参照してください。

このプログラムとともにGNU一般公衆利用許諾書の写しを受け取っているはずです。受け取っていない場合は、Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA宛てに書面で連絡してください。
'''
contact='\n著者への連絡先として、原通知にはxxHashホームページとxxHashソースリポジトリのURLが示されています。\n'
texts={
'api-header':'xxHash — 非常に高速なハッシュアルゴリズム。ヘッダーファイル。著作権 (C) 2012–2023 Yann Collet。\n\nBSD 2条項ライセンス。'+bsd+contact,
'dispatch-c':'xxHash — 非常に高速なハッシュアルゴリズム。著作権 (C) 2020–2021 Yann Collet。\n\nBSD 2条項ライセンス。'+bsd+contact,
'dispatch-h':'xxHash — x86ベースの対象向けXXH3ディスパッチャー。著作権 (C) 2020–2024 Yann Collet。\n\nBSD 2条項ライセンス。'+bsd+contact,
'cli-header':'xxhsum — xxhashアルゴリズムのコマンドラインインターフェース。著作権 (C) 2013–2023 Yann Collet。\n\n'+gpl+contact,
'make-header':'multiconf.make。著作権 (C) Yann Collet。\n\n'+gpl,
'collision-header':'64ビットハッシュの総当たり衝突検査器。xxHashプロジェクトの一部。著作権 (C) 2019–2021 Yann Collet。\n\n'+gpl+contact,
'allcodecs-header':'dummy.c — 統合機能を検査するためだけの擬似ハッシュアルゴリズム。xxHashプロジェクトの一部。著作権 (C) 2020 Yann Collet。\n\n'+gpl+contact,
'cmake-header':'法律で認められる限り、著作者はこのソフトウェアに関するすべての著作権、関連する権利および著作隣接権を、世界中でパブリックドメインに捧げています。このソフトウェアは一切の保証なしに配布されます。\n\n詳細は原通知に示されたCC0 1.0のURLを参照してください。\n',
'spec-notice':'### 通知\n\n著作権 (c) Yann Collet。\n\nこの文書を、目的を問わず無償で複製・配布することを許可します。これには他の言語への翻訳、および文書集への収録が含まれます。ただし、著作権表示とこの通知を保持し、原文からの実質的な変更または削除を明確に示すことが条件です。この文書の配布に制限はありません。\n'}
for slug,t in texts.items():
 s=(w/f'apps/xxhash/src/content/docs/v0-8-4/en/03-notices/{slug}.md').read_text().replace('— original notice','— 原通知').replace('Original notice retained verbatim.','原通知を変更せず保持しています。').replace('Fixed original source','固定版の原文').replace('CC0 1.0 original conditions','CC0 1.0の原条件');p=n/f'{slug}.reviewed-content.md';assert not p.exists();p.write_text(s+intro+t)
