#!/usr/bin/env node
import path from 'node:path';
import {
  notesDir,
  readJson,
  reproducibleLicenseIds,
  writeJsonAtomic,
} from './common.mjs';

const apply = process.argv.includes('--apply');
const auditPath = path.join(notesDir, 'AWESOME_MISSING_LICENSE_EVIDENCE_AUDIT.json');
const overridesPath = path.join(notesDir, 'AWESOME_MISSING_LICENSE_REVIEW_OVERRIDES.json');
const outputPath = path.join(notesDir, 'AWESOME_MISSING_LICENSE_REVIEW_RESULTS.json');
const lockPath = path.join(notesDir, 'SOURCES.lock.json');
const decisionsPath = path.join(notesDir, 'LICENSE_DECISIONS.json');
const discoveryPath = path.join(notesDir, 'DISCOVERY_STATE.json');
const audit = readJson(auditPath);
const overrides = new Map(
  readJson(overridesPath).overrides.map((entry) => [entry.repository, entry])
);
const lock = readJson(lockPath);
const decisions = readJson(decisionsPath);
const discovery = readJson(discoveryPath);
const lockByRepository = new Map(
  lock.sources.map((source) => [source.repository.toLowerCase(), source])
);
const discoveryByRepository = new Map(
  discovery.visited.map((source) => [source.repository.toLowerCase(), source])
);
function evidenceFor(result, licenseSpdx) {
  const document = result.licenseDocuments.find((item) =>
    item.detectedLicenses.includes(licenseSpdx)
  );
  if (document) return { path: document.path, sha256: document.sha256, kind: 'license-document' };
  if (result.readmePath && result.readmeSha256) {
    return {
      path: result.readmePath,
      sha256: result.readmeSha256,
      kind: 'readme-license-section-link-or-badge',
    };
  }
  return null;
}

const results = audit.results.map((result) => {
  const override = overrides.get(result.repository);
  const licenseSpdx = override?.licenseSpdx ?? result.detectedLicenseSpdx;
  const evidence = licenseSpdx ? evidenceFor(result, licenseSpdx) : null;
  let decision = 'metadata-only';
  let rationale = '固定コミットで一覧本文に適用されるライセンス証拠を確認できない。';
  if (!result.readmePath || !result.readmeSha256) {
    rationale = '固定コミットのREADME本文を取得できないため、本文収録は行わない。';
  } else if (override && evidence) {
    decision = 'include-full-text';
    rationale = override.rationale;
  } else if (licenseSpdx && reproducibleLicenseIds.has(licenseSpdx) && evidence) {
    decision = 'include-full-text';
    rationale = `${evidence.kind}で${licenseSpdx}を確認し、固定ハッシュへ結び付けた。`;
  } else if (licenseSpdx === 'GPL-3.0' || licenseSpdx === 'GFDL') {
    rationale = `${licenseSpdx}の継承・文書条件を現行サイトで満たす実装が未整備のため、本文は複製しない。`;
  } else if (result.conflictingEvidence) {
    rationale = '相互に矛盾するライセンス証拠があり、手動判定で解消していない。';
  }
  return {
    repository: result.repository,
    category: result.category,
    label: result.label,
    commitSha: result.commitSha,
    readmePath: result.readmePath,
    readmeSha256: result.readmeSha256,
    licenseSpdx,
    licenseEvidence: evidence,
    decision,
    rationale,
  };
});

const report = {
  schemaVersion: 1,
  generatedAt: '2026-08-23',
  policy: {
    fullText:
      '固定READMEと再現可能なライセンス証拠があり、現行の出典表示で条件を満たせる場合だけ英語本文を収録する。',
    metadataOnly:
      '証拠なし、README取得不能、または未対応のコピーレフト条件では本文を複製せず、概要由来の案内ページだけを収録する。',
  },
  summary: {
    targetCount: results.length,
    includeFullTextCount: results.filter((result) => result.decision === 'include-full-text')
      .length,
    metadataOnlyCount: results.filter((result) => result.decision === 'metadata-only').length,
  },
  results,
};
writeJsonAtomic(outputPath, report);

if (apply) {
  for (const result of results.filter((item) => item.decision === 'include-full-text')) {
    const discovered = discoveryByRepository.get(result.repository);
    if (!discovered) throw new Error(`探索記録がありません: ${result.repository}`);
    let source = lockByRepository.get(result.repository);
    if (!source) {
      const sourceId = `github-${discovered.repository.replace('/', '-')}-${result.readmePath.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      source = {
        sourceId,
        parentSourceId: 'sindresorhus-awesome-readme',
        discoveryDepth: 1,
        repository: discovered.repository,
        defaultBranch: discovered.defaultBranch,
        commitSha: discovered.commitSha,
        documentPath: result.readmePath,
        documentSha256: result.readmeSha256,
        licenseSpdx: result.licenseSpdx,
        licensePath: result.licenseEvidence.path,
        licenseSha256: result.licenseEvidence.sha256,
        retrievedAt: audit.generatedAt,
        status: 'included',
        decisionId: `license-${sourceId}`,
        normalizerVersion: 'awesome-importer-v2-readme-license-evidence',
      };
      lock.sources.push(source);
      lockByRepository.set(result.repository, source);
    } else {
      Object.assign(source, {
        documentPath: result.readmePath,
        documentSha256: result.readmeSha256,
        licenseSpdx: result.licenseSpdx,
        licensePath: result.licenseEvidence.path,
        licenseSha256: result.licenseEvidence.sha256,
        status: 'included',
        normalizerVersion: 'awesome-importer-v2-readme-license-evidence',
      });
    }
    Object.assign(discovered, {
      readmePath: result.readmePath,
      readmeSha256: result.readmeSha256,
      licenseSpdx: result.licenseSpdx,
      licensePath: result.licenseEvidence.path,
      licenseSha256: result.licenseEvidence.sha256,
      preliminaryStatus: 'included',
    });
    decisions.decisions = decisions.decisions.filter(
      (decision) => decision.decisionId !== source.decisionId
    );
    decisions.decisions.push({
      decisionId: source.decisionId,
      sourceId: source.sourceId,
      commitSha: source.commitSha,
      licenseSpdx: result.licenseSpdx,
      status: 'included',
      rationale: result.rationale,
      decidedBy: 'repository-administrator',
      decidedAt: audit.generatedAt,
    });
  }
  const includedRepositories = new Set(
    results
      .filter((result) => result.decision === 'include-full-text')
      .map((result) => result.repository)
  );
  discovery.failures = discovery.failures.filter(
    (failure) => !includedRepositories.has(failure.repository.toLowerCase())
  );
  lock.sources.sort((left, right) => left.sourceId.localeCompare(right.sourceId));
  decisions.decisions.sort((left, right) => left.decisionId.localeCompare(right.decisionId));
  writeJsonAtomic(lockPath, lock);
  writeJsonAtomic(decisionsPath, decisions);
  writeJsonAtomic(discoveryPath, discovery);
}

console.log(JSON.stringify({ ...report.summary, applied: apply }, null, 2));
