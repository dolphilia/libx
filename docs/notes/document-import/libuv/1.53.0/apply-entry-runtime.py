"""Correct template entry selection and reference category label for libuv only."""
from pathlib import Path
import argparse
p=argparse.ArgumentParser();p.add_argument('--repository',required=True);p.add_argument('--workspace',required=True);a=p.parse_args();app=Path(a.workspace)/'apps/libuv';f=app/'src/pages/index.astro';original=f.read_text();assert 'generateRedirectUrl' in original or 'navigation.homeLinks' in original
f.write_text("""---
import { getProjectConfig } from '@docs/project-config';
import { navigation } from '../lib/navigation';
const config = await getProjectConfig();
const version = config.versioning.versions.find((v) => v.isLatest) ?? config.versioning.versions[0];
if (!version) throw new Error('libuv requires a fixed documentation version');
const links = await navigation.homeLinks(config.language.default, version.id, config.paths.baseUrl);
return Astro.redirect(links.document);
---
""")
f=app/'src/pages/[version]/[lang]/index.astro';s=f.read_text();marker="  reference: lang === 'ja' ? 'リファレンス' : 'Reference',";needle="  guide: translate('docs.guide', lang),";assert needle in s
if marker not in s:s=s.replace(needle,needle+'\n'+marker)
f.write_text(s);print('libuv entry directs to latest fixed overview; bilingual Reference category label installed')
