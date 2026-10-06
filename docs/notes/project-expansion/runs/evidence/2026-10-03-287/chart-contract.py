from pathlib import Path
from html.parser import HTMLParser
import json,re,datetime,shutil
root=Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-03-287';app=Path('/private/tmp/libx-wren-trial-20261003-283/apps/wren-trial')
class Tables(HTMLParser):
 def __init__(self):super().__init__();self.tables=[];self.table=None;self.row=None;self.cell=None;self.bar=None
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='table':self.table={'class':d.get('class',''),'rows':[],'bars':[]}
  if self.table is not None:
   if t=='tr':self.row=[]
   if t in ['th','td']:self.cell={'kind':t,'text':''}
   if t=='div' and 'chart-bar' in d.get('class','').split():self.bar={'class':d['class'],'style':d['style'],'text':''}
 def handle_data(self,d):
  if self.cell is not None:self.cell['text']+=d
  if self.bar is not None:self.bar['text']+=d
 def handle_endtag(self,t):
  if t=='div' and self.bar is not None:self.table['bars'].append(self.bar);self.bar=None
  if t in ['th','td'] and self.cell is not None:self.cell['text']=' '.join(self.cell['text'].split());self.row.append(self.cell);self.cell=None
  if t=='tr' and self.row is not None:self.table['rows'].append(self.row);self.row=None
  if t=='table' and self.table is not None:self.tables.append(self.table);self.table=None
records=[]
for name in ['performance','syntax']:
 a=Tables();a.feed((ev.parent/'2026-10-03-282/rendered'/f'{name}.html').read_text());b=Tables();b.feed((app/f'dist/v0-4-0/en/docs/{name}/index.html').read_text());assert a.tables==b.tables,name;records.append({'page':name,'tables':a.tables,'tableGroupingCellKindsValuesBarStylesExact':True})
charts=records[0]['tables'];assert len(charts)==4 and sum(len(x['bars']) for x in charts)==21
(ev/'CHART_TABLE_CONTRACT.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed','tableCount':5,'chartCount':4,'barCount':21,'records':records},indent=2)+'\n')
shutil.copyfile(app/'src/styles/global.css',ev/'global.css');shutil.copyfile('/private/tmp/libx-wren-build-287.log',ev/'BUILD.log');shutil.copyfile(__file__,ev/'chart-contract.py')
(ev/'NATIVE_CHART_REVIEW.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed','browserTab':'41 closed','previewSession':'46976 stopped exit0','viewportReset':True,'desktop':{'width':1440,'documentWidth':1425,'chartWidth':736,'barCellWidth':606},'mobile':{'width':390,'documentWidth':375,'chartWidth':560,'barCellWidth':430,'scrollContainerWidth':327,'overflowX':'auto','nativeHorizontalScrollLeft':233,'lastValueVisible':'0.85s'},'bothViewports':{'chartRows':[6,3,6,6],'bars':21,'display':'inline-block','wrenBackground':'rgb(29, 81, 118)','othersBackground':'rgb(37, 99, 235)','relativeWidths':'all21 ratio equals source percentage within0.01CSSpx rounding; no min-width onbars'},'visualReview':'Desktop MethodCall/DeltaBlue andmobileMethodCall/DeltaBlue screenshots observed; mobilehorizontal scroll reveals longbarvalues. Other2charts computed/layout checked, not claimed screenshot reviewed. Historical caveats retained: best oftenruns, interpreterstartup excluded, old hardware/versions, LuaJITdisabled andenabled faster caveat.','scope':'Conversion trial only; no full41 semantic review/translation or formal publication.'},indent=2)+'\n')
print('5 tables / 4 charts / 21 bars exact')
