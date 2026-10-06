from pathlib import Path
import json,hashlib
E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-04-658');W=Path('/private/tmp/libx-mdbook-astro-trial-655'); A=W/'apps/mdbook-trial'; p=A/'public/mdbook-runtime/document.css'; before=p.read_bytes()
css='''
/* Libx palette bridge: original light inline foreground #301900 and dark #c5c8c6.
   Bundled light syntax palette remains unchanged and retains its readable background. */
.mdbook-guide { --mdbook-inline-foreground: #301900; --mdbook-inline-background: #f6f7f6; --code-bg: #f6f7f6; }
html.dark .mdbook-guide { --mdbook-inline-foreground: #c5c8c6; --mdbook-inline-background: #282a2e; --code-bg: #282a2e; }
.mdbook-guide :not(pre) > code.hljs { color: var(--mdbook-inline-foreground); background: var(--mdbook-inline-background); }
.mdbook-guide pre > code.hljs:not(.editable) { color: #000; background: #f6f7f6; }
'''
p.write_text(before.decode()+css)
prep=json.loads((E/'TRIAL_PREPARED_v2.json').read_text())
for r in prep['pages']:
 p=W/r['file']; b=p.read_bytes();assert hashlib.sha256(b).hexdigest()==r['sha256'];s=b.decode(); old='Modern clipboard transport and icon-descendant button labels are Libx integration adaptations;'; new='Modern clipboard transport, icon-descendant button labels and shared-theme palette mapping are Libx integration adaptations;'; assert old in s; p.write_text(s.replace(old,new));r['sha256']=hashlib.sha256(p.read_bytes()).hexdigest()
(E/'TRIAL_PREPARED_v3.json').write_text(json.dumps(prep,indent=2)+'\n')
(E/'THEME_REPAIR.json').write_text(json.dumps({'reason':'Native dark observation showed white inline text on rgb246247246 background due undefined original --inline-code-color with shared UI specificity.','beforeSha256':hashlib.sha256(before).hexdigest(),'afterSha256':hashlib.sha256((A/'public/mdbook-runtime/document.css').read_bytes()).hexdigest(),'css':css,'scope':'trial app only; shared packages untouched','syntaxPalette':'original light syntax colours retained on original light background in both shared themes; Ace uses original separate theme switch','nativeVerified':False,'fullContentReviewPerformed':False},indent=2)+'\n')
