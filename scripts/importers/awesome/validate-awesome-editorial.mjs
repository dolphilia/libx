#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { root, editorial, json, jsonExists, blob } from './editorial-utils.mjs';
import { regeneratePair } from './editorial-overlays.mjs';
import { validateReview } from './editorial-review-validation.mjs';
import { readAwesomeRouteManifest, createAwesomeResolver } from './app-ownership.mjs';

const inventory = json(path.join(editorial, 'INVENTORY.json'));
const errors = [...inventory.inventoryErrors];
const routes = readAwesomeRouteManifest({ root });
const resolver = createAwesomeResolver(root);
const selected = process.argv
  .find((a) => a.startsWith('--source-id='))
  ?.slice('--source-id='.length);
const snapshot = process.argv.find((a) => a.startsWith('--snapshot='))?.slice('--snapshot='.length);
const entries = inventory.entries.filter(
  (e) => (!selected || e.sourceId === selected) && (!snapshot || e.version === snapshot)
);
if (!entries.length) throw new Error('検査対象がない');
if (!selected && !snapshot && routes.entries.length !== inventory.documents)
  errors.push('全件台帳と経路件数不一致');
let verified = 0;
for (const entry of entries) {
  const key = `${entry.version}/${entry.sourceId}`;
  const regenerated = regeneratePair(entry.version, entry.sourceId);
  const current = {};
  for (const lang of ['en', 'ja']) {
    const route = routes.entries.find(
      (r) => r.sourceId === entry.sourceId && r.version === entry.version && r.lang === lang
    );
    if (!route || path.relative(root, resolver.contentPath(route)) !== entry.paths[lang]) {
      errors.push(`${key}/${lang}: 経路不一致`);
      continue;
    }
    current[lang] = fs.readFileSync(path.join(root, entry.paths[lang]), 'utf8');
    if (current[lang] !== regenerated[lang])
      errors.push(`${key}/${lang}: 未記録の差分・再生成不一致`);
  }
  if (
    entry.status === 'verified' ||
    entry.status === 'content-reviewed' ||
    process.argv.includes('--require-complete')
  ) {
    const file = path.join(editorial, entry.version, `${entry.sourceId}.json`);
    if (!jsonExists(file)) {
      errors.push(`${key}: 内容レビュー記録なし (${entry.status})`);
      continue;
    }
    const record = json(file);
    const inputs = {
      baselineEn: blob(entry.baseline.en),
      baselineJa: blob(entry.baseline.ja),
      ...current,
    };
    if (entry.fixedInput) inputs.raw = blob(entry.fixedInput.sha256);
    errors.push(...validateReview(record, inputs).map((e) => `${key}: ${e}`));
    if (entry.status === 'verified') verified++;
  }
}
if (errors.length) {
  console.error(
    errors
      .slice(0, 40)
      .map((e) => `- ${e}`)
      .join('\n')
  );
  if (errors.length > 40) console.error(`ほか${errors.length - 40}件`);
  process.exitCode = 1;
} else
  console.log(
    `Awesome editorial validation: OK (${entries.length} pairs, ${verified} verified; 未レビューを完了扱いにしない)`
  );
