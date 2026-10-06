from pathlib import Path
import urllib.request,json,hashlib,difflib,datetime
r=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence');e=r/'2026-10-03-297'
def fetch(url):
 q=urllib.request.Request(url,headers={'User-Agent':'libx-docs-candidate-research','Accept':'application/vnd.github+json'});return urllib.request.urlopen(q,timeout=30).read()
u='https://api.github.com/repos/DaveGamble/cJSON/commits/v1.7.18';c=fetch(u);(e/'OLD_COMMIT.json').write_bytes(c);sha=json.loads(c)['sha'];records=[]
for n in ['README.md','LICENSE','CONTRIBUTORS.md']:
 url=f'https://raw.githubusercontent.com/DaveGamble/cJSON/{sha}/{n}';old=fetch(url);(e/('old-'+n)).write_bytes(old);new=(r/'2026-10-03-292'/n if n!='CONTRIBUTORS.md' else r/'2026-10-03-293'/n).read_bytes();diff=''.join(difflib.unified_diff(old.decode().splitlines(True),new.decode().splitlines(True),fromfile='v1.7.18/'+n,tofile='v1.7.19/'+n));(e/(n+'.diff')).write_text(diff);records.append({'file':n,'url':url,'oldSha256':hashlib.sha256(old).hexdigest(),'newSha256':hashlib.sha256(new).hexdigest(),'equal':old==new,'addedLines':sum(x.startswith('+') and not x.startswith('+++') for x in diff.splitlines()),'removedLines':sum(x.startswith('-') and not x.startswith('---') for x in diff.splitlines())})
(e/'MAINTENANCE.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'oldCommit':sha,'newCommit':'c859b25da02955fef659d658b8f324b5cde87be3','records':records,'scope':'All3selected guide/notice/contributors, not software implementation behavior. Review exact retained diffs before scoring maintenance.'},ensure_ascii=False,indent=2)+'\n');print(json.dumps(records))
