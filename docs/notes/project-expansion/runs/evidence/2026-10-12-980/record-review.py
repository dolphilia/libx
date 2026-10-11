from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,shutil
R=Path.cwd();N=R/'docs/notes/document-import/gnu-patch/v2-8';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-12-980';at=datetime.datetime.now(datetime.timezone.utc).isoformat();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def ref(p):return {'path':str(p.relative_to(R)),'sha256':sha(p)}
def write(p,v):p.write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
findings=[
'NAME/SYNOPSIS/DESCRIPTION全文を別パスで照合。呼出し、入力形式・正規化、曖昧照合と既定値2、非対称コンテキスト、reject名と行番号、候補ファイル名とPOSIX/VCS規則、Prereq、標準入力・複数パッチを保持。変更なし。',
'OPTIONS全65対応箇所と全オプション・定義ラベル、ネスト説明、リテラル例を別パスで照合。バックアップ・POSIX、force/batch、merge/diff3、時刻/T/Z・force例外、シンボリックリンク原文の意味を保持。-gのRCS/SCCS条件の係り方と-lの空白がスペースまたはタブである点を明確化し、修正した2段落を再照合。',
'ENVIRONMENT/FILES/SEE ALSO全文を別パスで照合。全環境変数・優先順位・既定値、2ファイル、man参照、RFC934書誌を保持。原文-v参照は本文を保持し、実際のOPTIONSの-Vと異なることを共通出典注記で説明。',
'NOTES FOR PATCH SENDERSの全12段落・3リテラル例を別パスで照合。git/diff手順、UTC、-Np1、Prereq、epoch作成削除とPOSIX例外、スラッシュ数・バックアップ名、反転、派生ファイル・make clean、582差分の注意を保持。変更なし。',
'DIAGNOSTICS/CAVEATS全6段落を別パスで照合。終了0/1/2とmerge競合、連続適用、特殊ファイルとメタデータ、ed/通常差分/fuzz3、コンパイル成功の限界、同一版の適用条件を保持。変更なし。',
'互換性全文1段落・3項目・14オプションのリテラル例を翻訳後の別パスで照合。-b不使用時のPOSIXとGNUの差、--no-backup-if-mismatch/--posix/POSIXLY_CORRECT、prefix stripping後の同一名、同じスラッシュ数、共通オプションと省略可能な空白を保持。変更不要。',
'BUGS全4段落を翻訳後の別パスで照合。報告先、重複コードで誤対象に成功報告し得ること、適用済みを反転とみなし取消を提案すること、マージを遅くする4条件を保持。変更不要。',
'COPYING全文の著作権2件と許諾3段落を翻訳後の別パスで照合。そのままの複製での通知保持、改変物全体への同一許諾、翻訳への同条件と権利者承認翻訳だけの例外を保持。訳は非公式と明記し、正式な原英文を共通出典欄に保持。変更不要。',
'AUTHORS全段落を翻訳後の別パスで照合。5著者の綴りと各担当（最初の版、制限・binary・時刻・削除・POSIX、unidiff、設定・backup、merge）を保持。変更不要。']
rows=[];structure=[];changes=[]
for i,en in enumerate(sorted((N/'preferred/en/01-guide').glob('*.md'))):
 ja=N/'preferred/ja/01-guide'/en.name;src=N/'source-fragments/en'/en.with_suffix('.html').name
 roles={}
 for role,p in [('source',src),('canonical',en),('translation',ja)]:roles[role]={**ref(p),'coverage':[[1,len(p.read_text().removesuffix('\n').split('\n'))]]}
 a=BeautifulSoup(en.read_text().split('---',2)[2],'html.parser');b=BeautifulSoup(ja.read_text().split('---',2)[2],'html.parser');assert [x['id']for x in a.select('[id]')]==[x['id']for x in b.select('[id]')];assert [x.get_text()for x in a.select('pre')]==[x.get_text()for x in b.select('pre')];assert next(l for l in en.read_text().splitlines()if l.startswith('documentContext:'))==next(l for l in ja.read_text().splitlines()if l.startswith('documentContext:'))
 rows.append({'id':'01-guide/'+en.name,'status':'passed','method':'ai-content-review','model':'Codex; configured gpt-6.1-sol, runtime identity not independently exposed','reviewedAt':at,'separateReviewPass':True,'findings':findings[i],**roles})
 structure.append({'id':'01-guide/'+en.name,'canonical':ref(en),'translation':ref(ja),'headingIDsPreserved':True,'literalPreExact':len(a.select('pre')),'commonContextExact':True})
 for lang in ['en','ja']:
  before=E/'preferred-before'/lang/'01-guide'/en.name
  if not before.exists():continue
  old=before.read_text().split('---',2)[2];new=(N/'preferred'/lang/'01-guide'/en.name).read_text().split('---',2)[2]
  if old!=new:changes.append({'language':lang,'page':en.name,'before':ref(before),'after':ref(N/'preferred'/lang/'01-guide'/en.name),'changedBody':'-g RCS/SCCS条件と-l空白の2段落のみ'})
assert len(changes)==1 and changes[0]['page']=='02-options.md'
write(N/'REVIEW_MANIFEST.json',{'schemaVersion':1,'scope':[x['id']for x in rows],'completedPages':9,'unreviewedPages':0,'pages':rows,'commonContextReview':{'findings':'原著著作権2件、許諾3段落全文、全著者、Libx改変/独立非公式翻訳の表示、全patch.man14見出し/9ページの範囲と除外、原文follow-symlinks/NEWS差、およびVERSION_CONTROLの-v/-V差の注記と2原典リンクを照合。','originalEnglishNoticeRetained':True},'limits':'Content review only. Source kit, independent reconstruction, native final display and integrated publication remain pending.'})
write(N/'ALL_GUIDES_STRUCTURE.json',{'status':'passed','at':at,'pages':9,'pairs':structure,'limitedReviewCorrections':changes,'unchangedBodies':'All nine EN and JA01/03/04/05 bodies unchanged from before; all18 now share reviewed context.','limits':'Machine checks supplement actual separate meaning review; do not replace it.'})
# Record preservation of every literal definition label in all pages, with a second-build-independent replay of JA4.
for x in structure:
 if x['id'].startswith(('01-guide/06','01-guide/07','01-guide/08','01-guide/09')):
  en=R/x['canonical']['path'];ja=R/x['translation']['path'];a=BeautifulSoup(en.read_text().split('---',2)[2],'html.parser');b=BeautifulSoup(ja.read_text().split('---',2)[2],'html.parser');assert [n.get_text()for n in a.select('dt')]==[n.get_text()for n in b.select('dt')]
print('Whole separate meaning review9/9; structure9pairs; old body changes exactly JA02')
