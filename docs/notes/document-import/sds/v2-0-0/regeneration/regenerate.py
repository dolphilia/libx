from pathlib import Path
import argparse,json,html,markdown,re
P=Path(__file__).resolve().parent.parent
args=argparse.ArgumentParser();args.add_argument('--output',required=True);o=Path(args.parse_args().output);assert markdown.__version__=='3.7'
r=json.loads((P/'regeneration/ROUTES.json').read_text());context=json.loads((P/'regeneration/CONTEXT.json').read_text())
for row in r['guides']+r['references']:
 raw=(P/row['input']).read_text()
 if row['id']=='02-reference/01-api-comments.md':
  intro='Original sds.c notice retained below. These are fixed-version upstream comments; identified inconsistencies require separate annotations before adoption.\n\n'
  assert raw.count(intro)==1;raw=raw.replace(intro,'')
 body='<pre><code>'+html.escape(raw)+'</code></pre>' if row.get('wholeCode') else markdown.markdown(raw,extensions=['fenced_code','tables','toc'])
 body=re.sub(r'<pre\b[^>]*>[\s\S]*?</pre>',lambda m:m[0].replace('\n','&#10;'),body)
 text='---\ntitle: '+json.dumps(row['titleEN'],ensure_ascii=False)+'\ndocumentId: '+json.dumps('sds:'+row['id'])+'\norder: '+str(int(Path(row['id']).name[:2]))+'\nlicenseSource: "sds-fixed"\ndocumentContext: '+json.dumps(context,ensure_ascii=False)+'\n---\n<div class="sds-document">\n'+body+'\n</div>\n'
 p=o/'en'/row['id'];p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text)
print('SDS English canonical replay:12 pages; full README8 units and4 English reference appendices.')
