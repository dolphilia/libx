from pathlib import Path
import hashlib,json,zipfile,shutil,datetime
E=Path(__file__).parent
W=Path('/private/tmp/libx-rapidjson-formal-853')
R=Path('/Users/dolphilia/github/libx')
Q=Path('/private/tmp/libx-rapidjson-source-rebuild-856-repaired/workspace')
rel=Path('apps/rapidjson/src/config/project.config.jsonc')
old=(W/rel).read_bytes();assert old.count(b'"2016-08-25"')==1
new=old.replace(b'"2016-08-25"',b'"2016-08-25T12:00:00Z"')
sha=lambda b:hashlib.sha256(b).hexdigest()
Z=Path('apps/rapidjson/public/source/v1-1-0/source.zip')
before=(W/Z).read_bytes()
with zipfile.ZipFile(W/Z) as z: members={n:z.read(n) for n in z.namelist()}
k='workspace/'+str(rel);assert members[k]==old
components=json.loads(members['SOURCE_COMPONENTS.json'])
members[k]=new
row=next(x for x in components['files'] if x['path']==k);assert row['sha256']==sha(old);row['sha256']=sha(new)
members['SOURCE_COMPONENTS.json']=(json.dumps(components,ensure_ascii=False,indent=2)+'\n').encode()
assert len(members)==2090
for x in components['files']:assert sha(members[x['path']])==x['sha256']
with zipfile.ZipFile(W/Z,'w',zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for n,b in members.items():
  info=zipfile.ZipInfo(n,date_time=(2026,10,6,0,0,0));info.compress_type=zipfile.ZIP_DEFLATED;info.external_attr=0o644<<16;z.writestr(info,b)
for base in [W,R,Q]:
 (base/rel).write_bytes(new)
 if base!=W:shutil.copy2(W/Z,base/Z)
(Q.parent/'SOURCE_COMPONENTS.json').write_bytes(members['SOURCE_COMPONENTS.json'])
out={'status':'passed-source-member-repair','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'change':'RapidJSON app release date uses midday UTC so JST and CI America/Los_Angeles both render 2016-08-25; fixed release day unchanged. Shared VersionSelector unchanged.','configBefore':sha(old),'configAfter':sha(new),'sourceZIPBefore':sha(before),'sourceZIPAfter':sha((W/Z).read_bytes()),'members':len(members),'changedZIPMembers':[k,'SOURCE_COMPONENTS.json'],'otherMembersByteIdentical':2088,'bodyAndReviewChanges':0,'priorEvidence':'856 preserved; source ZIP SHA and config SHA superseded only by this bound delta. Render/build verification pending.'}
(E/'DATE_SOURCE_DELTA.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'members':len(members),'archiveSha256':out['sourceZIPAfter'],'configAfter':out['configAfter']}))
