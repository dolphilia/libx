#!/usr/bin/env node
import path from 'node:path';
import { notesDir, readJson, writeJsonAtomic } from './common.mjs';

const statePath = path.join(notesDir, 'DISCOVERY_STATE.json');
const state = readJson(statePath);
const successfullyVisited = new Set(
  state.visited.map((candidate) => candidate.repository.toLowerCase())
);
const unresolvedFailures = state.failures.filter(
  (failure) => !successfullyVisited.has(failure.repository.toLowerCase())
);
const depthFive = readJson(
  path.join(process.cwd(), '.tmp/document-import/awesome/02-inventory/depth-5-candidates.json')
);
if (depthFive.newCandidates.length !== 0)
  throw new Error('深さ5に未処理の新規候補があるため探索を完了できません');
const report = {
  schemaVersion: 1,
  snapshotVersion: state.snapshotVersion,
  finalizedAt: new Date().toISOString(),
  result: 'closed-under-current-link-rule',
  visited: state.visited.length,
  edges: state.edges.length,
  failed: unresolvedFailures.map((failure) => ({
    repository: failure.repository,
    disposition: 'excluded',
    reason: failure.error,
  })),
  depth: {
    one: readJson(
      path.join(
        process.cwd(),
        '.tmp/document-import/awesome/02-inventory/pilot-recursive-candidates.json'
      )
    ).candidates.length,
    two: readJson(
      path.join(process.cwd(), '.tmp/document-import/awesome/02-inventory/depth-2-candidates.json')
    ).newCandidates.length,
    three: readJson(
      path.join(process.cwd(), '.tmp/document-import/awesome/02-inventory/depth-3-candidates.json')
    ).newCandidates.length,
    four: readJson(
      path.join(process.cwd(), '.tmp/document-import/awesome/02-inventory/depth-4-candidates.json')
    ).newCandidates.length,
    five: depthFive.newCandidates.length,
  },
};
state.status = 'completed';
state.checkpoints.push({
  kind: 'discovery-closure',
  at: report.finalizedAt,
  visited: report.visited,
  edges: report.edges,
  failed: report.failed.length,
});
writeJsonAtomic(statePath, state);
writeJsonAtomic(path.join(notesDir, 'DISCOVERY_CLOSURE_REPORT.json'), report);
console.log(JSON.stringify(report, null, 2));
