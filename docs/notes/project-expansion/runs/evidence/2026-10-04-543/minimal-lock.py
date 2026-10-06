from pathlib import Path
import re,json
w=Path('/private/tmp/libx-xxhash-integration-20261004');p=w/'pnpm-lock.yaml';s=p.read_text();assert '  apps/xxhash:'not in s;deps=json.loads((w/'apps/xxhash/package.json').read_text())['dependencies'];b=re.search(r'^  apps/spdlog:\n(.*?)(?=^  \S|\Z)',s,re.M|re.S).group(1);rows=re.findall(r'^      ([^\n]+):\n(.*?)(?=^      \S|\Z)',b,re.M|re.S);found={k.strip("'"):(k,v)for k,v in rows};out='  apps/xxhash:\n    dependencies:\n'
for k,v in deps.items():
 key,body=found[k];assert re.search(r'^        specifier: (.+)$',body,re.M).group(1)==v;out+='      '+key+':\n'+body
out=out.rstrip()+'\n\n';assert '\n  apps/zlib:'in s;p.write_text(s.replace('  apps/zlib:',out+'  apps/zlib:',1));print('added pinned importer only',len(out.splitlines()),'lines')
