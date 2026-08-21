#!/usr/bin/env node
import path from 'node:path';
import {
  githubJson,
  githubRaw,
  gitRemoteHead,
  isoNow,
  notesDir,
  optionValue,
  readJson,
  sha256,
  tempDir,
  writeJsonAtomic,
} from './common.mjs';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const transport = optionValue(args, '--transport', 'git');
const limit = Number(optionValue(args, '--limit', '25'));
const inventoryPath = optionValue(
  args,
  '--inventory',
  path.join(tempDir, '02-inventory/direct-candidates.json')
);
const inspectionKind = optionValue(args, '--kind', 'direct-inspection');
const discoveryDepth = Number(optionValue(args, '--discovery-depth', inspectionKind === 'recursive-inspection' ? '1' : '1'));
if (!Number.isInteger(limit) || limit < 1 || limit > 25) throw new Error('--limit は1から25です');
if (!Number.isInteger(discoveryDepth) || discoveryDepth < 1) throw new Error('--discovery-depth は1以上の整数です');
if (!['direct-inspection', 'recursive-inspection'].includes(inspectionKind))
  throw new Error('--kind は direct-inspection または recursive-inspection です');
const inventory = readJson(inventoryPath);
const statePath = path.join(notesDir, 'DISCOVERY_STATE.json');
const state = readJson(statePath);
state.retryableFailures ??= [];
const retryableFailures = state.failures.filter((failure) =>
  /Could not resolve host|ENOTFOUND|network is unreachable/i.test(failure.error ?? '')
);
if (retryableFailures.length > 0) {
  state.retryableFailures.push(
    ...retryableFailures.map((failure) => ({ ...failure, retryableAt: isoNow() }))
  );
  state.failures = state.failures.filter((failure) => !retryableFailures.includes(failure));
}
const alreadyInspected = new Set(state.visited.map((item) => item.repository));
const alreadyFailed = new Set(state.failures.map((item) => item.repository));
state.queue = state.queue.filter((item) => !alreadyFailed.has(item.repository));
const batch = inventory.candidates
  .filter(
    (candidate) =>
      !alreadyInspected.has(candidate.repository) && !alreadyFailed.has(candidate.repository)
  )
  .slice(0, limit);
if (dryRun) {
  console.log(
    JSON.stringify(
      {
        action: `inspect ${inspectionKind} candidates`,
        count: batch.length,
        repositories: batch.map((item) => item.repository),
      },
      null,
      2
    )
  );
  process.exit(0);
}

const inspected = [];
const failures = [];
const transientFailures = [];
async function inspectCandidate(candidate) {
  try {
    const remote = transport === 'git' ? await gitRemoteHead(candidate.repository) : null;
    const repo = remote ? null : await githubJson(`/repos/${candidate.repository}`);
    const defaultBranch = remote?.defaultBranch ?? repo.default_branch;
    const commitSha =
      remote?.commitSha ??
      (await githubJson(`/repos/${candidate.repository}/commits/${defaultBranch}`)).sha;
    let readme = null;
    let readmePath = null;
    const readmeCandidates = remote ? ['README.md', 'readme.md', 'README.MD'] : [];
    if (!remote) {
      const response = await githubJson(`/repos/${candidate.repository}/readme?ref=${commitSha}`);
      readmeCandidates.push(response.path);
    }
    for (const candidatePath of readmeCandidates) {
      try {
        readme = await githubRaw(candidate.repository, commitSha, candidatePath);
        readmePath = candidatePath;
        break;
      } catch {}
    }
    const candidateFailures = [];
    if (!readme)
      candidateFailures.push({
        repository: candidate.repository,
        stage: 'readme',
        error: 'READMEを固定コミットで取得できません',
      });
    let licenseText = null;
    let licensePath = null;
    for (const candidatePath of [
      'LICENSE',
      'LICENSE.md',
      'license',
      'license.md',
      'COPYING',
      'COPYING.md',
    ]) {
      try {
        licenseText = await githubRaw(candidate.repository, commitSha, candidatePath);
        licensePath = candidatePath;
        break;
      } catch {}
    }
    const licenseSpdx = licenseText?.includes('MIT License')
      ? 'MIT'
      : licenseText?.includes('CC0 1.0 Universal')
        ? 'CC0-1.0'
        : licenseText?.includes('Creative Commons Attribution 4.0')
          ? 'CC-BY-4.0'
          : null;
    return {
      inspected: {
        ...candidate,
        discoveryDepth,
        defaultBranch,
        commitSha,
        archived: repo?.archived ?? null,
        licenseSpdx,
        licensePath,
        licenseSha256: licenseText ? sha256(licenseText) : null,
        readmePath,
        readmeSha256: readme ? sha256(readme) : null,
        byteLength: readme ? Buffer.byteLength(readme) : null,
        preliminaryStatus: readme && licenseText ? 'pending-license-review' : 'metadata-only',
        inspectedAt: isoNow(),
      },
      failures: candidateFailures,
    };
  } catch (error) {
    const failure = {
      repository: candidate.repository,
      stage: 'repository',
      error: String(error.message),
      rateLimitRemaining: error.rateLimitRemaining ?? null,
      rateLimitReset: error.rateLimitReset ?? null,
    };
    if (/Could not resolve host|ENOTFOUND|network is unreachable/i.test(failure.error)) {
      return { inspected: null, failures: [], transientFailures: [failure] };
    }
    return {
      inspected: null,
      failures: [failure],
      transientFailures: [],
    };
  }
}

for (let offset = 0; offset < batch.length; offset += 5) {
  const results = await Promise.all(batch.slice(offset, offset + 5).map(inspectCandidate));
  for (const result of results) {
    if (result.inspected) inspected.push(result.inspected);
    failures.push(...result.failures);
    transientFailures.push(...(result.transientFailures ?? []));
  }
}
const batchNumber =
  state.checkpoints.filter((item) => item.kind === inspectionKind).length + 1;
const reportPath = path.join(
  tempDir,
  '05-reports',
  `${inspectionKind}-${String(batchNumber).padStart(3, '0')}.json`
);
writeJsonAtomic(reportPath, { schemaVersion: 1, batchNumber, inspected, failures, transientFailures });
state.visited.push(...inspected);
state.failures.push(...failures);
state.retryableFailures.push(...transientFailures.map((failure) => ({ ...failure, retryableAt: isoNow() })));
state.queue = state.queue.filter(
  (item) =>
    !inspected.some((entry) => entry.repository === item.repository) &&
    !failures.some((entry) => entry.repository === item.repository)
);
state.checkpoints.push({
  kind: inspectionKind,
  batchNumber,
  at: isoNow(),
  inspected: inspected.length,
  failures: failures.length,
  transientFailures: transientFailures.length,
  output: path.relative(notesDir, reportPath),
});
const rateLimitFailure = failures.find(
  (failure) => failure.rateLimitRemaining === '0' && failure.rateLimitReset
);
if (rateLimitFailure) {
  state.status = 'paused-for-review';
  state.checkpoints.push({
    kind: 'rate-limit-pause',
    at: isoNow(),
    resumeAfter: new Date(Number(rateLimitFailure.rateLimitReset) * 1000).toISOString(),
  });
} else {
  state.status = 'in-progress';
}
const completedDirectCandidates = new Set([
  ...state.visited.map((item) => item.repository),
  ...state.failures.map((item) => item.repository),
]);
if (
  inventory.candidates.every((candidate) => completedDirectCandidates.has(candidate.repository)) &&
  !state.checkpoints.some((checkpoint) => checkpoint.kind === 'direct-candidate-inventory-complete')
) {
  state.checkpoints.push({
    kind: 'direct-candidate-inventory-complete',
    at: isoNow(),
    candidates: inventory.candidates.length,
    fixed: state.visited.length,
    failed: state.failures.filter((failure) => failure.stage === 'repository').length,
  });
}
writeJsonAtomic(statePath, state);
console.log(
  JSON.stringify(
    { batchNumber, inspected: inspected.length, failures: failures.length, reportPath },
    null,
    2
  )
);
