#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, sha256, tempDir } from './common.mjs';

const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const exclusions = readJson(path.join(notesDir, 'EXCLUSIONS.json'));
const normalizedDir = path.join(tempDir, '03-normalized');
const errors = [];
const included = lock.sources.filter((source) => source.status === 'included');
for (const source of included) {
  const output = path.join(normalizedDir, `${source.sourceId}.md`);
  if (!fs.existsSync(output)) {
    errors.push(`included source is missing canonical output: ${source.sourceId}`);
    continue;
  }
  const content = fs.readFileSync(output, 'utf8');
  if (!content.includes(`licenseSource: ${JSON.stringify(source.sourceId)}`)) {
    errors.push(`canonical output has incorrect licenseSource: ${source.sourceId}`);
  }
  if (/<!--[\s\S]*?-->/.test(content))
    errors.push(`canonical output contains unprocessed HTML comment: ${source.sourceId}`);
  if (/\]\((?:\.{1,2}\/|\/)[^)\s]*\)/m.test(content))
    errors.push(`canonical output contains unresolved relative Markdown link: ${source.sourceId}`);
  if (/\]\((?:javascript|data|file):/i.test(content))
    errors.push(`canonical output contains prohibited URL scheme: ${source.sourceId}`);
}
for (const source of lock.sources.filter((entry) => entry.status !== 'included')) {
  if (fs.existsSync(path.join(normalizedDir, `${source.sourceId}.md`))) {
    errors.push(`non-included source leaked into canonical output: ${source.sourceId}`);
  }
}
for (const exclusion of exclusions.exclusions) {
  const output = path.join(normalizedDir, `${exclusion.sourceId}.md`);
  if (!fs.existsSync(output)) continue;
  const sourcePath =
    exclusion.sourceId === 'sindresorhus-awesome-readme'
      ? path.join(tempDir, '01-source/responses/root-readme.md')
      : path.join(tempDir, '01-source/repositories', exclusion.sourceId);
  if (!fs.existsSync(sourcePath) && exclusion.sourceId !== 'sindresorhus-awesome-readme') continue;
  const original =
    exclusion.sourceId === 'sindresorhus-awesome-readme' ? fs.readFileSync(sourcePath, 'utf8') : '';
  const fragment = original.slice(0, original.indexOf('## Contents'));
  if (fragment && sha256(fragment) !== exclusion.fragmentSha256)
    errors.push(`exclusion hash does not match source: ${exclusion.sourceId}`);
  if (fragment && fs.readFileSync(output, 'utf8').includes(fragment))
    errors.push(`excluded fragment remains in canonical output: ${exclusion.sourceId}`);
}
if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Awesome canonical validation: OK (${included.length} outputs)`);
}
