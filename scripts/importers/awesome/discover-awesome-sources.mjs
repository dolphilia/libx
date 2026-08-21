#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  githubRepository,
  notesDir,
  optionValue,
  readJson,
  sha256,
  tempDir,
  writeJsonAtomic,
} from './common.mjs';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const input = path.resolve(
  optionValue(args, '--input', path.join(tempDir, '01-source/responses/root-readme.md'))
);
const output = path.resolve(
  optionValue(args, '--output', path.join(tempDir, '02-inventory/direct-candidates.json'))
);
if (!input.startsWith(`${tempDir}${path.sep}`))
  throw new Error('入力はAwesome一時領域配下である必要があります');
if (!output.startsWith(`${tempDir}${path.sep}`))
  throw new Error('出力はAwesome一時領域配下である必要があります');
const markdown = fs.readFileSync(input, 'utf8');
const candidates = new Map();
const nonGithub = new Set();
let category = null;
let inContents = false;
for (const line of markdown.split(/\r?\n/)) {
  if (line === '## Contents') {
    inContents = true;
    continue;
  }
  if (!inContents) continue;
  const heading = line.match(/^##\s+(.+)$/);
  if (heading) category = heading[1];
  for (const match of line.matchAll(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)(?:\s+[^)]*)?\)/g)) {
    const [, label, rawUrl] = match;
    const url = rawUrl.replace(/[.,;:]$/, '');
    const github = githubRepository(url);
    if (github) {
      if (github.repository === 'sindresorhus/awesome') continue;
      const existing = candidates.get(github.repository) ?? {
        repository: github.repository,
        url,
        documentPathHint: github.path,
        sourceUrlSha256: sha256(url),
        occurrences: [],
      };
      existing.occurrences.push({ category, label });
      candidates.set(github.repository, existing);
    } else if (url.startsWith('http')) {
      nonGithub.add(new URL(url).hostname);
    }
  }
}
const inventory = {
  schemaVersion: 1,
  source: 'sindresorhus-awesome-readme',
  inputSha256: sha256(markdown),
  candidates: [...candidates.values()].sort((a, b) => a.repository.localeCompare(b.repository)),
  nonGithubHosts: [...nonGithub].sort(),
};
const report = {
  directGithubRepositories: inventory.candidates.length,
  uniqueNonGithubHosts: inventory.nonGithubHosts.length,
  output,
};
if (dryRun) {
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}
writeJsonAtomic(output, inventory);
const statePath = path.join(notesDir, 'DISCOVERY_STATE.json');
const state = readJson(statePath);
state.status = 'in-progress';
state.queue = inventory.candidates.map((candidate) => ({
  ...candidate,
  parentSourceId: inventory.source,
  discoveryDepth: 1,
}));
state.checkpoints.push({
  kind: 'direct-candidate-inventory',
  at: new Date().toISOString(),
  inputSha256: inventory.inputSha256,
  candidateCount: inventory.candidates.length,
});
writeJsonAtomic(statePath, state);
console.log(JSON.stringify(report, null, 2));
