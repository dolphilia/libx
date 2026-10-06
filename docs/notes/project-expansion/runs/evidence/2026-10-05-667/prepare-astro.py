import pathlib,json,subprocess,tarfile,io,shutil,hashlib
root=pathlib.Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-667';work=pathlib.Path('/private/tmp/libx-rapidjson-astro-trial-667');base=pathlib.Path('/private/tmp/libx-jq-footer-integration-20261004');commit='6e0dbef265ff6ebadf58a7437564a7d07ffeb296';assert not work.exists();work.mkdir()
blob=subprocess.check_output(['git','-C',str(base),'archive',commit,'templates/docs-site','packages','scripts','package.json','pnpm-workspace.yaml','pnpm-lock.yaml'])
with tarfile.open(fileobj=io.BytesIO(blob)) as t:t.extractall(work,filter='data')
app=work/'apps/rapidjson-trial';app.parent.mkdir();shutil.copytree(work/'templates/docs-site',app);shutil.rmtree(app/'src/content/docs');(app/'node_modules').symlink_to(base/'apps/jq/node_modules',target_is_directory=True);(work/'node_modules').symlink_to(base/'node_modules',target_is_directory=True)
p=app/'src/config/project.config.jsonc';s=p.read_text();import re
config=json.loads(re.sub(r'("(?:\\.|[^"\\])*")|//[^\n]*',lambda m:m[1] or '',s));config['paths']={'baseUrlPrefix':'/docs','projectSlug':'rapidjson-trial','siteUrl':'https://libx.dev'};config['language']['supported']=['en'];config['language']['default']='en'
config['translations']['en']={'displayName':'RapidJSON conversion trial','displayDescription':'Unpublished fixed-source trial; translation and full content review incomplete','categories':{'docs':'Documentation'}};config['versioning']['versions']=[{'id':'v1-1-0','name':'1.1.0 trial','date':'2016-08-25','isLatest':True}]
config['licensing']={'defaultSource':'rapidjson-fixed','showAttribution':True,'sourceLanguage':'en','sources':[{'id':'rapidjson-fixed','name':'RapidJSON 1.1.0 fixed source','author':'THL A29 Limited and Milo Yip','license':'MIT with original component exceptions','licenseUrl':'/docs/rapidjson-trial/notices/LICENSE.txt','sourceUrl':'https://github.com/Tencent/rapidjson/tree/f54b0e47a08782a6131cc3d60f94d038fa6e0a51'}]};p.write_text(json.dumps(config,indent=2)+'\n')
p=app/'package.json';pkg=json.loads(p.read_text());pkg['name']='apps-rapidjson-trial';pkg['description']='Unpublished RapidJSON complete source conversion trial';pkg['scripts']['prebuild']='libx-docs-prepare --projects=rapidjson-trial';p.write_text(json.dumps(pkg,indent=2)+'\n')
(app/'astro.config.mjs').write_text("import {defineDocsConfig} from '@docs/config';\nconst config=defineDocsConfig({site:'https://libx.dev',base:'/docs/rapidjson-trial',rootDir:import.meta.dirname});\nexport default {...config,markdown:{...config.markdown,smartypants:false}};\n")
m=json.loads((ev/'CONVERSION_MAP.json').read_text());out=pathlib.Path(m['workspace']);gen=pathlib.Path('/private/tmp/libx-rapidjson-screening-664/generated/html');notes={n['file']:n['footerEditorialNote'] for n in m['recordedNotes']};rows=[]
for i,r in enumerate(m['records'],1):
 from html.parser import HTMLParser
 class Title(HTMLParser):
  def __init__(self):super().__init__();self.active=False;self.text=''
  def handle_starttag(self,t,a):
   if t=='title':self.active=True
  def handle_endtag(self,t):
   if t=='title':self.active=False
  def handle_data(self,d):
   if self.active:self.text+=d
 title=Title();title.feed((gen/r['generated']).read_text());name=title.text.replace('RapidJSON: ','').strip() or r['generated']
 context=[{'kind':'source','html':'<p>RapidJSON 1.1.0; fixed commit f54b0e47a08782a6131cc3d60f94d038fa6e0a51. Copyright (C) 2015 THL A29 Limited and Milo Yip. <a href="/docs/rapidjson-trial/notices/LICENSE.txt">Full original licence and component notices</a>. Unpublished Libx presentation trial; translation and full semantic review incomplete.</p><p>文書専用ライセンスの表記が確認できないため、ソフトウェア本体のMIT Licenseを文書にも適用する運用判断で掲載しています。</p>'}]
 if r['generated'] in notes:context.append({'kind':'editorial','html':'<p>'+notes[r['generated']]+'</p>'})
 f=app/'src/content/docs/v1-1-0/en'/ (r['slug']+'.md');f.parent.mkdir(parents=True,exist_ok=True);f.write_text('---\ntitle: '+json.dumps(name,ensure_ascii=False)+'\ndocumentId: '+json.dumps('rapidjson:'+r['generated'])+'\norder: '+str(i)+'\nlicenseSource: "rapidjson-fixed"\ndocumentContext: '+json.dumps(context,ensure_ascii=False)+'\n---\n\n'+(out/(r['slug']+'.html')).read_text().replace('\n','&#10;')+'\n');rows.append({'file':str(f.relative_to(work)),'generated':r['generated'],'slug':r['slug'],'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
shutil.copytree(out/'assets',app/'public/assets/v1-1-0');(app/'public/notices').mkdir();shutil.copyfile(root/'docs/notes/project-expansion/runs/evidence/2026-10-05-664/LICENSE.txt',app/'public/notices/LICENSE.txt');css=app/'src/styles/global.css';css.write_text(css.read_text()+'\n.rapidjson-document .fragment{overflow-x:auto;font-family:monospace;}\n.rapidjson-document .fragment .line{white-space:pre;}\n.rapidjson-document .ttc{display:none;}\n')
(ev/'ASTRO_PREPARED.json').write_text(json.dumps({'status':'prepared-not-built','workspace':str(work),'app':str(app),'templateCommit':commit,'documents':len(rows),'sourceListingPages':33,'assets':m['assets'],'rows':rows,'limitation':'Initial structural-build trial; original tooltip behavior/full CSS not implemented or certified. No JA/fullreview/adoption.'},indent=2)+'\n');print('prepared',len(rows))
