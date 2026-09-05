#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { notesDir, readJson, rootDir, snapshotVersion, tempDir } from './common.mjs';
import { applyIntroductionDecision } from './awesome-introduction-utils.mjs';
import { createAwesomeContentAccess } from './app-ownership.mjs';

const version = snapshotVersion;
const check = process.argv.includes('--check');
const sourceIdsArgument = process.argv.find((argument) => argument.startsWith('--source-ids='));
const selectedSourceIds = sourceIdsArgument
  ? new Set(sourceIdsArgument.slice('--source-ids='.length).split(',').filter(Boolean))
  : null;
const manifestPath = path.join(notesDir, 'INTRODUCTION_NORMALIZATION.json');
if (!fs.existsSync(manifestPath)) throw new Error(`判断記録がありません: ${manifestPath}`);
const manifest = readJson(manifestPath);
const content = createAwesomeContentAccess(version, rootDir);
const normalizedRoot = path.join(tempDir, '03-normalized');
const changed = [];

function applyFile(pathname, decision, evidence) {
  if (!fs.existsSync(pathname)) throw new Error(`対象文書がありません: ${pathname}`);
  const before = fs.readFileSync(pathname, 'utf8');
  const after = applyIntroductionDecision(before, decision, evidence);
  if (before === after) return;
  changed.push(path.relative(rootDir, pathname));
  if (!check) {
    const temporary = `${pathname}.${process.pid}.tmp`;
    fs.writeFileSync(temporary, after);
    fs.renameSync(temporary, pathname);
  }
}

const selectedEntries = selectedSourceIds
  ? manifest.entries.filter((entry) => selectedSourceIds.has(entry.sourceId))
  : manifest.entries;
if (selectedSourceIds && selectedEntries.length !== selectedSourceIds.size) {
  const found = new Set(selectedEntries.map((entry) => entry.sourceId));
  throw new Error(
    `判断記録にないsourceIdがあります: ${[...selectedSourceIds].filter((id) => !found.has(id)).join(', ')}`
  );
}

for (const entry of selectedEntries) {
  for (const lang of ['en', 'ja']) {
    applyFile(
      content.pathFor(lang, `${entry.slug}.md`),
      entry.normalized[lang],
      entry.evidence[lang]
    );
  }
  const canonicalPath = path.join(normalizedRoot, `${entry.sourceId}.md`);
  if (fs.existsSync(canonicalPath)) {
    applyFile(canonicalPath, entry.normalized.en, entry.evidence.en);
  }
}

if (check && changed.length) {
  console.error(
    changed
      .slice(0, 100)
      .map((pathname) => `- 未適用: ${pathname}`)
      .join('\n')
  );
  if (changed.length > 100) console.error(`- ほか${changed.length - 100}件`);
  process.exitCode = 1;
} else {
  console.log(
    check
      ? `Awesome introduction normalization check: OK (${selectedEntries.length} entries)`
      : `Normalized Awesome introductions: ${changed.length} files (${selectedEntries.length} entries)`
  );
}
