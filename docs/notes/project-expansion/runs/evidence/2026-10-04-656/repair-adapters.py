from pathlib import Path
import json,hashlib,re
E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-04-656')
W=Path('/private/tmp/libx-mdbook-astro-trial-655')
A=W/'apps/mdbook-trial'
sha=lambda b:hashlib.sha256(b).hexdigest()
p=A/'src/components/MdBookRuntime.astro'; old=p.read_bytes()
extra='''
<script is:inline>
// Libx integration: modern clipboard transport; original visible/editor text selection unchanged.
document.addEventListener('click', async event => {
  const button = event.target.closest?.('.mdbook-guide .clip-button');
  if (!button || !navigator.clipboard?.writeText) return;
  event.preventDefault(); event.stopImmediatePropagation();
  const tip = button.firstChild;
  try {
    await navigator.clipboard.writeText(playground_text(button.closest('pre'), false));
    tip.innerText = 'Copied!';
  } catch {
    tip.innerText = 'Clipboard error!';
  }
  button.className = 'clip-button tooltipped';
}, true);
// Original handler reads e.target.title; icon descendants have no title.
document.addEventListener('click', event => {
  const button = event.target.closest?.('.mdbook-guide .buttons button');
  if (button?.title) button.setAttribute('aria-label', button.title);
});
</script>
'''
p.write_text(old.decode()+extra)
nav=json.loads((A/'src/data/mdbook-navigation.json').read_text())
def flatten(items):
 out=[]
 for x in items:
  if x.get('href'): out.append(x)
  out+=flatten(x.get('items',[]))
 return out
items=flatten(nav); titles={x['href'].removeprefix('/docs/mdbook-trial'):x['title'] for x in items}
prep=json.loads((E/'TRIAL_PREPARED_v2.json').read_text()); changes=[]
for page in prep['pages']:
 p=W/page['file']; before=p.read_bytes(); s=before.decode()
 def replace(m):
  obj=json.loads(m.group(2)); obj['text']=titles[obj['link']]
  return m.group(1)+': '+json.dumps(obj,ensure_ascii=False)
 s=re.sub(r'^(prev|next): (\{[^\n]+\})$',replace,s,flags=re.M)
 note=' Modern clipboard transport and icon-descendant button labels are Libx integration adaptations; original code/editor text selection is retained.'
 s=s.replace('Original notices are preserved.', 'Original notices are preserved.'+note)
 p.write_text(s); page['sha256']=sha(p.read_bytes())
 changes.append({'path':str(p.relative_to(W)),'before':sha(before),'after':page['sha256']})
(E/'TRIAL_PREPARED_v3.json').write_text(json.dumps(prep,indent=2)+'\n')
(E/'ADAPTER_REPAIRS.json').write_text(json.dumps({'status':'applied-native-check-pending','runtime':{'path':str(A/'src/components/MdBookRuntime.astro'),'before':sha(old),'after':sha((A/'src/components/MdBookRuntime.astro').read_bytes())},'changes':changes,'originalExtractedFunctionsUnmodified':True,'clipboard':'navigator.clipboard.writeText transport; exact original playground_text(pre,false); legacy fallback if API unavailable','aria':'current button.title after original handler instead of event.target.title','pagination':'official SUMMARY titles used; 60 links unchanged','fullContentReviewPerformed':False},indent=2)+'\n')
