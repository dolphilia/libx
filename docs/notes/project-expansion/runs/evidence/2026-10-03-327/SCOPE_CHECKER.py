from pathlib import Path
import json,hashlib,re,datetime
root=Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-03-327';src=ev/'source/zlib-1.3.2';fetch=json.loads((ev/'FETCH.json').read_text());records=[]
adopt={'zlib.h':'公式README/FAQ/man頁が全APIの文書と指定。宣言・全原コメント・型・定数・条件付きmacro等を全2057行採録。','zconf.h':'公開型・構成ヘッダー。zlib.hが必須includeする全551行の原典付録。','README':'固定版115行全体、導入/環境/原通知/参照を保持。','FAQ':'固定版44問/371行全体。外部/参考例への参照は削らない。','zlib.3':'固定1.3.2概要man頁149行全体、通知/作者を含む。','LICENSE':'原22行の許諾/免責全文を保持。'}
refs={'INDEX':'配布物の全構成と文書位置の根拠。','ChangeLog':'固定1.3.2差分・履歴確認。','Makefile.in':'READMEのbuild参照と公開header配置。','CMakeLists.txt':'公開headerリストとビルド設定参照。','examples/README.examples':'別冊使用例・独立プログラム一覧。','test/example.c':'README/FAQの試験プログラム参照。ソフトウェア実装をAPI本文へ新規執筆しない。','test/minigzip.c':'README/FAQの試験プログラム参照。','examples/zpipe.c':'public-domain表示の独立使用例。別冊HTMLの説明本文と区別。今回APIマニュアルの正式境界には含めない。'}
for f in fetch['entries']:
 p=f['path'].removeprefix('zlib-1.3.2/');b=(src/p).read_bytes();assert hashlib.sha256(b).hexdigest()==f['sha256']
 if p in adopt:classification='adopt';why=adopt[p]
 elif p=='examples/zlib_how.html':classification='reference-not-for-translation';why='独立した使用例別冊にはCC BY-ND4.0が明示され、翻訳公開は条件に適合しない。本体zlib licenseで上書きせず、FAQの原外部参照だけを保持。API全体を削る対応ではない。'
 elif p in refs:classification='reference';why=refs[p]
 elif p=='zlib.3.pdf':classification='exclude-duplicate';why='全man頁zlib.3の別形式。元原典保存し、man頁本文は全149行採録する。'
 elif p.startswith('doc/'):classification='exclude-independent-document';why='RFC形式仕様/アルゴリズム/CRC論文など独立文書。対象は公式READMEで指定された公開API全マニュアルであり、これらの別マニュアルを一部切り出さない。原API/FAQからの仕様参照は維持。'
 elif p.startswith('contrib/'):classification='exclude-third-party-software';why='FAQ41/42で本体外/各項目個別licenseと明示された第三者ソフトウェア。API文書の必要章ではない。'
 else:classification='exclude-software-or-build';why='実装/テスト/例プログラム/プラットフォーム構築設定等。公開API全説明はzlib.hとして公式指定されており、ソフトウェア全体を翻訳する対象ではない。原資料は固定入力証拠に保持。'
 records.append({**f,'relativePath':p,'classification':classification,'reason':why})
assert len(records)==254
scope='zlib1.3.2公式公開APIマニュアルzlib.h全文（宣言/全原コメント/型/定数/条件macro含む）、必須zconf.h原典付録、同版README・FAQ全44問・zlib.3概要man頁・原LICENSE全文。実装から不足文書を生成しない。'
now=datetime.datetime.now(datetime.timezone.utc).isoformat();base={'status':'passed','checkedAt':now,'scope':scope,'archive':fetch['expectedOfficialSHA256'],'all254InputHashesRechecked':True,'officialDocumentationMapping':'README9–10、FAQ44–47、zlib.3 SYNOPSIS/DESCRIPTIONが全API文書をzlib.hと指定。配布物には1.3.2のAPI生成HTML/生成器はなく、別冊how.htmlのみ。独自説明の新規生成をせず原comment/宣言を変換対象とする。','apiHeaderVersion':'1.3.2','webManual':'外部manual.htmlは1.3.1。正式入力でなく差分参照の証拠。1.3.2と再ラベルしない。','counts':{c:sum(r['classification']==c for r in records) for c in set(r['classification'] for r in records)},'files':records}
(ev/'ZLIB_SOURCE_BOUNDARY.json').write_text(json.dumps(base,ensure_ascii=False,indent=2)+'\n')
rights={'status':'passed','checkedAt':now,'scope':scope,'primaryNotices':['LICENSE全文22行','README内原通知','zlib.h先頭全文原通知','zconf.hの原通知とzlib.h条件参照','zlib.3のAUTHORS AND LICENSE全文、R.P.C.Rodgers原credit'],'faq':'文書専用license本文は未発見。ユーザー方針で固定本体zlib licenseを注釈付き適用。元FAQ22/23はlicenseをzlib.h参照、FAQ41/42でcontrib別licenseと明示。','annotation':'FAQに文書専用ライセンスの表記が確認できないため、ソフトウェア本体のzlib Licenseを文書にも適用する運用判断で掲載しています。原通知・免責全文へリンクし、非公式の日本語訳・変換変更を明示します。','fulfilment':['全掲載ページに公式配布物版/URL/SHA256/原典fileを表示','著者・原通知全文/免責保持、翻訳変更/非公式表示を本文別に付す','原ヘッダーは全文原典付録で不変保持。コンパイル用の変更ソフトウェアを配布したとは表示しない。FAQ24の改変ソフトウェアに関する説明も原文のまま保持','FAQにfallback注釈を必須表示、原通知全文リンク','man頁著者R.P.C.Rodgers creditは保持','third-party/contrib条件やND指定を本体licenseで上書きしない'],'specificExcludedGuide':{'file':'examples/zlib_how.html','license':'CC BY-ND4.0','noticeLines':[543,548],'primaryLegalCodeURL':'https://creativecommons.org/licenses/by-nd/4.0/legalcode.en','primaryRead':'Section1(a) translation is Adapted Material; Section2(a)(1)(B) allows production/reproduction but not sharing adaptations; Section3(a) also prohibits sharing adaptations','decision':'別冊使用例の翻訳公開は対象外。本文を削って改変許諾を推測することも、本体license適用も行わない。別冊を対象にするには権利者による翻訳公開許可または互換licenseの新原典が必要。問い合わせの送信は行わない。'},'codeExampleDistinction':'examples/zpipe.c先頭はpublicdomain宣言。これを根拠にhow.htmlの注釈本文までpublicdomainと扱わない。','contentReview':'license/境界判断でありzlib.h全2057行の内容reviewは未実施'}
(ev/'ZLIB_RIGHTS_DECISION.json').write_text(json.dumps(rights,ensure_ascii=False,indent=2)+'\n')
measures=[]
for name in adopt:
 b=(src/name).read_bytes();s=b.decode();measures.append({'file':name,'lines':len(s.splitlines()),'whitespaceTokensIncludingCode':len(s.split()),'sha256':hashlib.sha256(b).hexdigest()})
(ev/'ZLIB_SCOPE_MEASUREMENTS_PARTIAL.json').write_text(json.dumps({'status':'partial','checkedAt':now,'sourceMeasurements':measures,'totalWhitespaceTokensIncludingCode':sum(x['whitespaceTokensIncludingCode'] for x in measures),'notProseOnlyWords':True,'remaining':'API全項目の独立数え上げ、複雑な条件付き構文/参照の全文確認、通常/最大/難しい変換試験後の担当・初回/更新工数見積もり。測定だけでworkload passへしない。'},ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'scope':scope,'counts':base['counts'],'tokens':sum(x['whitespaceTokensIncludingCode'] for x in measures)},ensure_ascii=False,indent=2))
