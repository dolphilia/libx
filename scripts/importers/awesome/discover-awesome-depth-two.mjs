#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { githubRepository, notesDir, readJson, sha256, tempDir, writeJsonAtomic } from './common.mjs';

const statePath = path.join(notesDir, 'DISCOVERY_STATE.json');
const state = readJson(statePath);
const firstDepth = readJson(path.join(tempDir, '02-inventory/pilot-recursive-candidates.json'));
const firstDepthRepositories = new Set(firstDepth.candidates.map((candidate) => candidate.repository.toLowerCase()));
const cachePath = (candidate) =>
  path.join(tempDir, '01-source/recursive', candidate.repository.replace('/', '--'), candidate.readmePath);
const candidates = [];
const edges = [];
for (const source of state.visited.filter(
  (candidate) => firstDepthRepositories.has(candidate.repository.toLowerCase()) && candidate.readmePath
)) {
  const sourcePath = cachePath(source);
  if (!fs.existsSync(sourcePath)) continue;
  const markdown = fs.readFileSync(sourcePath, 'utf8');
  let heading = '';
  for (const line of markdown.split(/\r?\n/)) {
    const matchedHeading = line.match(/^#{1,6}\s+(.+)$/);
    if (matchedHeading) heading = matchedHeading[1];
    if (!/(related|more|other).*(awesome|list)|(awesome|list).*(related|more|other)/i.test(heading))
      continue;
    for (const match of line.matchAll(/\[[^\]]+\]\((https?:\/\/[^\s)]+)(?:\s+[^)]*)?\)/g)) {
      const target = githubRepository(match[1]);
      if (!target || target.repository.toLowerCase() === source.repository.toLowerCase()) continue;
      candidates.push({ repository: target.repository, documentPathHint: target.path, url: match[1] });
      edges.push({
        fromRepository: source.repository,
        toRepository: target.repository,
        heading,
        urlSha256: sha256(match[1]),
        discoveryDepth: 2,
      });
    }
  }
}
const unique = [...new Map(candidates.map((candidate) => [candidate.repository.toLowerCase(), candidate])).values()]
  .sort((left, right) => left.repository.localeCompare(right.repository));
const known = new Set(state.visited.map((candidate) => candidate.repository.toLowerCase()));
const permanentFailure = new Set(state.failures.map((candidate) => candidate.repository.toLowerCase()));
const newCandidates = unique.filter(
  (candidate) => !known.has(candidate.repository.toLowerCase()) && !permanentFailure.has(candidate.repository.toLowerCase())
);
const report = {
  schemaVersion: 1,
  discoveryDepth: 2,
  sourceDocuments: state.visited.filter(
    (candidate) => firstDepthRepositories.has(candidate.repository.toLowerCase()) && candidate.readmePath
  ).length,
  sourceDocumentsCached: state.visited.filter(
    (candidate) => firstDepthRepositories.has(candidate.repository.toLowerCase()) && candidate.readmePath && fs.existsSync(cachePath(candidate))
  ).length,
  candidates: unique,
  newCandidates,
  edges,
};
writeJsonAtomic(path.join(tempDir, '02-inventory/depth-2-candidates.json'), report);
state.edges.push(
  ...edges.filter(
    (edge) => !state.edges.some((existing) => existing.fromRepository === edge.fromRepository && existing.toRepository === edge.toRepository)
  )
);
const exceededGrowthLimit = newCandidates.length > firstDepth.candidates.length * 2;
const exceededTotalLimit = state.visited.length + newCandidates.length > 1000;
state.checkpoints.push({
  kind: 'depth-2-link-extraction',
  at: new Date().toISOString(),
  sourceDocuments: report.sourceDocuments,
  sourceDocumentsCached: report.sourceDocumentsCached,
  candidates: unique.length,
  newCandidates: newCandidates.length,
  exceededGrowthLimit,
  exceededTotalLimit,
});
if (exceededGrowthLimit || exceededTotalLimit) state.status = 'paused-for-review';
writeJsonAtomic(statePath, state);
console.log(JSON.stringify({ candidates: unique.length, newCandidates: newCandidates.length, exceededGrowthLimit, exceededTotalLimit }, null, 2));
