import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { parseFragment } from 'parse5';
import { findRepositoryRoot } from '@docs/project-config/app-registry';
import { PUGIXML_PAGE_MAP } from '../../scripts/importers/pugixml-1.16-page-map.mjs';
import { preservationMetrics } from '../../scripts/importers/import-pugixml-1.16.mjs';
const app = path.dirname(fileURLToPath(import.meta.url));
const root = findRepositoryRoot(app);
for (const [script, ...args] of [
  ['importers/import-pugixml-1.16.mjs', '--check'],
  [
    'validate-translated-content.mjs',
    '--project=pugixml',
    '--version=v1-16',
    '--target=ja',
    '--identifier-prefixes=xml_,xpath_,PUGIXML_,parse_,format_,encoding_,node_,status_',
  ],
]) {
  const result = spawnSync(process.execPath, [path.join(root, 'scripts', script), ...args], {
    cwd: root,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
const require = createRequire(import.meta.url),
  astroRequire = createRequire(require.resolve('astro/package.json'));
const { createMarkdownProcessor } = await import(astroRequire.resolve('@astrojs/markdown-remark'));
const processor = await createMarkdownProcessor({ smartypants: false });
let checked = 0;
for (const page of PUGIXML_PAGE_MAP) {
  const rendered = [];
  for (const lang of ['en', 'ja']) {
    const source = fs.readFileSync(
      path.join(app, 'src/content/docs/v1-16', lang, page.output),
      'utf8'
    );
    const body = source.slice(source.indexOf('---', 4) + 3).trimStart();
    rendered.push(
      preservationMetrics(parseFragment((await processor.render(body)).code).childNodes)
    );
  }
  if (JSON.stringify(rendered[0].codes) !== JSON.stringify(rendered[1].codes))
    throw new Error(`${page.output}: HTML内API参照を含む全コードが定本と一致しません`);
  checked += rendered[0].codes.length;
}
console.log(`pugixml HTML内APIを含む全コード: ${checked}ブロックを英日照合`);
