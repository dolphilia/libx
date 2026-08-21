#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { githubRepository, notesDir, readJson, sha256, tempDir, writeJsonAtomic } from './common.mjs';

const statePath = path.join(notesDir, 'DISCOVERY_STATE.json');
const state = readJson(statePath);
const decision = readJson(path.join(notesDir, 'ADMIN_DECISION.json'));
const candidateLimit =
  decision.decision === 'raise-limit' && Number.isInteger(decision.trigger?.limit)
    ? decision.trigger.limit
    : 1000;
const depth = Number(process.argv.find((argument) => argument.startsWith('--depth='))?.slice(8) ?? 3);
if (!Number.isInteger(depth) || depth < 3) throw new Error('--depth は3以上の整数です');
const previous = readJson(path.join(tempDir, `02-inventory/depth-${depth - 1}-candidates.json`));
const sourceRepositories = new Set(previous.newCandidates.map((candidate) => candidate.repository.toLowerCase()));
const cachePath = (candidate) =>
  path.join(tempDir, '01-source/recursive', candidate.repository.replace('/', '--'), candidate.readmePath);
const candidates = [];
const edges = [];
let sourceDocuments = 0;
let sourceDocumentsCached = 0;
for (const source of state.visited.filter((candidate) => sourceRepositories.has(candidate.repository.toLowerCase()) && candidate.readmePath)) {
  sourceDocuments += 1;
  const sourcePath = cachePath(source);
  if (!fs.existsSync(sourcePath)) continue;
  sourceDocumentsCached += 1;
  let heading = '';
  for (const line of fs.readFileSync(sourcePath, 'utf8').split(/\r?\n/)) {
    const headingMatch = line.match(/^#{1,6}\s+(.+)$/);
    if (headingMatch) heading = headingMatch[1];
    if (!/(related|more|other).*(awesome|list)|(awesome|list).*(related|more|other)/i.test(heading)) continue;
    for (const match of line.matchAll(/\[[^\]]+\]\((https?:\/\/[^\s)]+)(?:\s+[^)]*)?\)/g)) {
      const target = githubRepository(match[1]);
      if (!target || target.repository.toLowerCase() === source.repository.toLowerCase()) continue;
      candidates.push({ repository: target.repository, documentPathHint: target.path, url: match[1] });
      edges.push({ fromRepository: source.repository, toRepository: target.repository, heading, urlSha256: sha256(match[1]), discoveryDepth: depth });
    }
  }
}
const unique = [...new Map(candidates.map((candidate) => [candidate.repository.toLowerCase(), candidate])).values()].sort((a, b) => a.repository.localeCompare(b.repository));
const known = new Set(state.visited.map((candidate) => candidate.repository.toLowerCase()));
const failed = new Set(state.failures.map((candidate) => candidate.repository.toLowerCase()));
const newCandidates = unique.filter((candidate) => !known.has(candidate.repository.toLowerCase()) && !failed.has(candidate.repository.toLowerCase()));
const exceededGrowthLimit = newCandidates.length > previous.newCandidates.length * 2;
const exceededTotalLimit = state.visited.length + newCandidates.length > candidateLimit;
const report = { schemaVersion: 1, discoveryDepth: depth, sourceDocuments, sourceDocumentsCached, candidates: unique, newCandidates, edges };
writeJsonAtomic(path.join(tempDir, `02-inventory/depth-${depth}-candidates.json`), report);
state.edges.push(...edges.filter((edge) => !state.edges.some((existing) => existing.fromRepository === edge.fromRepository && existing.toRepository === edge.toRepository)));
state.checkpoints.push({ kind: `depth-${depth}-link-extraction`, at: new Date().toISOString(), sourceDocuments, sourceDocumentsCached, candidates: unique.length, newCandidates: newCandidates.length, candidateLimit, exceededGrowthLimit, exceededTotalLimit });
if (exceededGrowthLimit || exceededTotalLimit) state.status = 'paused-for-review';
writeJsonAtomic(statePath, state);
console.log(JSON.stringify({ candidates: unique.length, newCandidates: newCandidates.length, exceededGrowthLimit, exceededTotalLimit, status: state.status }, null, 2));
