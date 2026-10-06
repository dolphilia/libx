import hashlib, html, json, pathlib, re
root=pathlib.Path.cwd(); ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-04-656';app=pathlib.Path('/private/tmp/libx-mdbook-astro-trial-655/apps/mdbook-trial')
prep=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-04-655/TRIAL_PREPARED_v2.json').read_text())
by_source={p['sourcePath']:p for p in prep['pages']}
summary=pathlib.Path('/private/tmp/libx-mdbook-trial-654/source/guide/src/SUMMARY.md').read_text()
nodes=[];part=None;stack=[];ordered=[];drafts=0
for line in summary.splitlines():
 if line.startswith('# '):
  title=line[2:]
  if title=='Summary':continue
  part={'title':title,'items':[],'part':True};nodes.append(part);stack=[];continue
 if re.match(r'^-{3,}$',line):part=None;stack=[];continue
 m=re.match(r'^( *)(?:- )?\[([^\]]+)\]\(([^)]*)\)$',line)
 if not m:continue
 level=len(m[1]);title=m[2];source=m[3]
 if source:
  p=by_source['guide/src/'+source];item={'title':title,'href':p['route'].rstrip('/'),'sourcePath':p['sourcePath']};ordered.append(p)
 else:item={'title':title,'draft':True};drafts+=1
 while stack and stack[-1][0]>=level:stack.pop()
 if stack:stack[-1][1].setdefault('items',[]).append(item)
 elif part:part['items'].append(item)
 else:nodes.append(item)
 stack.append((level,item))
assert len(ordered)==31 and len({p['sourcePath'] for p in ordered})==31 and drafts==1
notices='<p>Code demonstration runtime: fixed bundled mdBook 0.5.4 code (MPL-2.0), Ace (BSD-3-Clause), Highlight.js 10.1.1 (BSD-3-Clause) and Clipboard.js 2.0.4 (MIT). Original notices are preserved. <a href="/docs/mdbook-trial/mdbook-runtime/notices/ACE_LICENSE.txt">Ace notice</a> · <a href="/docs/mdbook-trial/mdbook-runtime/notices/HIGHLIGHT_LICENSE.txt">Highlight.js notice</a> · <a href="/docs/mdbook-trial/mdbook-runtime/notices/CLIPBOARD_LINKED_LICENSE.html">Clipboard.js linked MIT notice</a>. Math equations use the original external MathJax 2.7.1 runtime (Apache-2.0; <a href="/docs/mdbook-trial/mdbook-runtime/notices/MATHJAX_LICENSE.txt">notice</a>). This external runtime is versioned but not part of the fixed local source snapshot.</p>'
for i,p in enumerate(ordered):
 f=pathlib.Path(prep['workspace'])/p['file'];raw=f.read_text();assert hashlib.sha256(raw.encode()).hexdigest()==p['sha256'];_,fm,body=raw.split('---',2)
 fields={line.partition(': ')[0]:json.loads(line.partition(': ')[2]) for line in fm.strip().splitlines()}
 fields['order']=i+1;fields['documentContext'].append({'kind':'editorial','html':notices})
 if i:fields['prev']={'text':ordered[i-1]['sourcePath'].removeprefix('guide/src/'),'link':ordered[i-1]['route']}
 if i+1<len(ordered):fields['next']={'text':ordered[i+1]['sourcePath'].removeprefix('guide/src/'),'link':ordered[i+1]['route']}
 raw='---\n'+'\n'.join(k+': '+json.dumps(v,ensure_ascii=False) for k,v in fields.items())+'\n---'+body
 f.write_text(raw);p['sha256']=hashlib.sha256(raw.encode()).hexdigest()
(app/'src/data/mdbook-navigation.json').write_text(json.dumps(nodes,indent=2)+'\n')
nav=app/'src/lib/navigation.ts';raw=nav.read_text();(ev/'navigation.before.ts').write_text(raw);raw=raw.replace("import { generateRedirectUrl, getSidebarAsync }", "import { generateRedirectUrl }").replace('  sidebar: getSidebarAsync,','  async sidebar() { return mdbookNavigation; },');raw="import mdbookNavigation from '../data/mdbook-navigation.json';\n"+raw;nav.write_text(raw)
tree='''---
interface Item {title:string;href?:string;items?:Item[];draft?:boolean;part?:boolean;}
const {items,currentPath} = Astro.props as {items:Item[];currentPath:string};
---
<ul>
 {items.map(item => <li class:list={{part:item.part,draft:item.draft}}>
   {item.href ? <a href={item.href} aria-current={item.href === currentPath.replace(/\\/$/,'') ? 'page' : undefined}>{item.title}</a> : <span aria-disabled={item.draft ? 'true' : undefined}>{item.title}</span>}
   {item.items && <Astro.self items={item.items} currentPath={currentPath} />}
 </li>)}
</ul>
<style>
 ul{list-style:none;padding:0;margin:0}ul ul{padding-inline-start:1rem}li{margin:.3rem 0}a,span{display:block;padding:.25rem .35rem}a[aria-current="page"]{font-weight:700;background:var(--sl-color-gray-6);border-inline-start:3px solid currentColor}.part>span{font-weight:700;margin-top:.9rem}.draft{opacity:.6}
</style>
'''
(app/'src/components/MdBookNavigationTree.astro').write_text(tree)
(app/'src/components/MdBookSidebar.astro').write_text('''---
import MdBookNavigationTree from './MdBookNavigationTree.astro';
const {items,title,dir}=Astro.props;
---
<nav id="sidebar" aria-label={title} dir={dir}><h3>{title}</h3><MdBookNavigationTree items={items} currentPath={Astro.url.pathname} /></nav>
<style>nav{height:100%;overflow-y:auto;padding:.7rem;font-size:.9rem}h3{font-size:1rem;font-weight:700;margin-bottom:.5rem}</style>
''')
layout=app/'src/layouts/DocLayout.astro';s=layout.read_text();s=s.replace('GroupSidebar, Sidebar, TableOfContents','GroupSidebar, TableOfContents');s=s.replace("import MainLayout from './MainLayout.astro';","import MainLayout from './MainLayout.astro';\nimport Sidebar from '../components/MdBookSidebar.astro';");layout.write_text(s)
prep['pages']=ordered;prep['effectiveVersion']='656-runtime-and-original-navigation';prep['navigation']={'chapters':31,'draftEntries':1,'originalSummaryOrder':True,'hierarchyAndPartsPreserved':True};(ev/'TRIAL_PREPARED.json').write_text(json.dumps(prep,ensure_ascii=False,indent=2)+'\n')
(ev/'NAVIGATION_PREPARED.json').write_text(json.dumps({'status':'prepared-unverified','summarySha256':hashlib.sha256(summary.encode()).hexdigest(),'chapters':31,'draftEntries':1,'parts':['User guide','Reference guide'],'navigation':nodes,'sharedUiModified':False,'conversionGatePassed':False},indent=2)+'\n')
print('公式SUMMARY31章/階層/part/draft/前後リンクを試験アプリで復元')
