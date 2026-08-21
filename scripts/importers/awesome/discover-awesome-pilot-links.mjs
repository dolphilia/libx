#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  githubRepository,
  notesDir,
  readJson,
  sha256,
  tempDir,
  writeJsonAtomic,
} from './common.mjs';

const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const statePath = path.join(notesDir, 'DISCOVERY_STATE.json');
const state = readJson(statePath);
const candidates = [];
const edges = [];
for (const source of lock.sources.filter((entry) => entry.status === 'included')) {
  const sourcePath =
    source.sourceId === 'sindresorhus-awesome-readme'
      ? path.join(tempDir, '01-source/responses/root-readme.md')
      : path.join(tempDir, '01-source/repositories', source.sourceId, source.documentPath);
  const markdown = fs.readFileSync(sourcePath, 'utf8');
  let heading = '';
  for (const line of markdown.split(/\r?\n/)) {
    const matchHeading = line.match(/^#{1,6}\s+(.+)$/);
    if (matchHeading) heading = matchHeading[1];
    if (!/(related|more|other).*(awesome|list)|(awesome|list).*(related|more|other)/i.test(heading))
      continue;
    for (const match of line.matchAll(/\[[^\]]+\]\((https?:\/\/[^\s)]+)(?:\s+[^)]*)?\)/g)) {
      const repository = githubRepository(match[1]);
      if (!repository || repository.repository === source.repository) continue;
      const target = {
        repository: repository.repository,
        documentPathHint: repository.path,
        url: match[1],
      };
      candidates.push(target);
      edges.push({
        from: source.sourceId,
        toRepository: target.repository,
        heading,
        urlSha256: sha256(target.url),
      });
    }
  }
}
const unique = [
  ...new Map(candidates.map((candidate) => [candidate.repository, candidate])).values(),
].sort((a, b) => a.repository.localeCompare(b.repository));
writeJsonAtomic(path.join(tempDir, '02-inventory/pilot-recursive-candidates.json'), {
  schemaVersion: 1,
  candidates: unique,
  edges,
});
state.edges = [
  ...state.edges,
  ...edges.filter(
    (edge) =>
      !state.edges.some(
        (existing) => existing.from === edge.from && existing.toRepository === edge.toRepository
      )
  ),
];
state.checkpoints.push({
  kind: 'pilot-recursive-link-extraction',
  at: new Date().toISOString(),
  includedSources: lock.sources.filter((entry) => entry.status === 'included').length,
  candidates: unique.length,
});
writeJsonAtomic(statePath, state);
console.log(
  JSON.stringify(
    {
      sources: lock.sources.filter((entry) => entry.status === 'included').length,
      recursiveCandidates: unique.length,
    },
    null,
    2
  )
);
