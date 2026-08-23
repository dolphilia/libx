#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {
  isoNow,
  notesDir,
  readJson,
  rootDir,
  sha256,
  tempDir,
  writeJsonAtomic,
} from './common.mjs';

const args = process.argv.slice(2);
const outputIndex = args.indexOf('--output');
const outputPath = path.resolve(
  outputIndex >= 0
    ? (args[outputIndex + 1] ?? '')
    : path.join(notesDir, 'AWESOME_MISSING_LICENSE_EVIDENCE_AUDIT.json')
);
const limitOption = args.find((argument) => argument.startsWith('--limit='));
const limit = limitOption ? Number(limitOption.slice('--limit='.length)) : Infinity;
const concurrencyOption = args.find((argument) => argument.startsWith('--concurrency='));
const concurrency = concurrencyOption
  ? Number(concurrencyOption.slice('--concurrency='.length))
  : 8;

if (outputIndex >= 0 && !args[outputIndex + 1]) {
  throw new Error('--outputにはJSONファイルを指定してください');
}
if (!(limit === Infinity || (Number.isInteger(limit) && limit > 0))) {
  throw new Error('--limitは1以上の整数です');
}
if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 16) {
  throw new Error('--concurrencyは1から16です');
}

const audit = readJson(path.join(notesDir, 'AWESOME_OVERVIEW_INTERNAL_LINK_AUDIT.json'));
const lock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const discovery = readJson(path.join(notesDir, 'DISCOVERY_STATE.json'));
const cacheRoot = path.join(tempDir, '06-license-evidence');
const lockByRepository = new Map(
  lock.sources.map((source) => [source.repository.toLowerCase(), source])
);
const discoveryByRepository = new Map(
  discovery.visited.map((source) => [source.repository.toLowerCase(), source])
);
const targets = audit.items
  .filter((item) => item.status !== 'bilingual-pages-available')
  .slice(0, limit);

const readmeCandidates = [
  'README.md',
  'readme.md',
  'Readme.md',
  'README.MD',
  'README',
  'readme',
  'README.markdown',
  'readme.markdown',
  'README.rst',
  'readme.rst',
];
const licenseCandidates = [
  'LICENSE',
  'LICENSE.md',
  'LICENSE.txt',
  'LICENSE.markdown',
  'LICENCE',
  'LICENCE.md',
  'LICENCE.txt',
  'license',
  'license.md',
  'license.txt',
  'licence',
  'licence.md',
  'licence.txt',
  'COPYING',
  'COPYING.md',
  'COPYRIGHT',
  'COPYRIGHT.md',
  '.github/LICENSE',
  '.github/LICENSE.md',
];

const licenseDefinitions = [
  {
    spdx: 'CC-BY-SA-3.0',
    patterns: [
      /CC[- ]BY[- ]SA[- ]3\.0/i,
      /Creative Commons Attribution-ShareAlike 3\.0/i,
      /creativecommons\.org\/licenses\/by-sa\/3\.0/i,
    ],
  },
  {
    spdx: 'CC-BY-SA-4.0',
    patterns: [
      /CC[- ]BY[- ]SA[- ]4\.0/i,
      /Creative Commons Attribution-ShareAlike 4\.0/i,
      /creativecommons\.org\/licenses\/by-sa\/4\.0/i,
    ],
  },
  {
    spdx: 'CC-BY-4.0',
    patterns: [
      /CC[- ]BY[- ]4\.0/i,
      /Creative Commons Attribution 4\.0/i,
      /creativecommons\.org\/licenses\/by\/4\.0/i,
    ],
  },
  {
    spdx: 'CC-BY-3.0',
    patterns: [
      /CC[- ]BY[- ]3\.0/i,
      /Creative Commons Attribution 3\.0/i,
      /creativecommons\.org\/licenses\/by\/3\.0/i,
    ],
  },
  {
    spdx: 'CC0-1.0',
    patterns: [
      /CC0(?:[- ]?1\.0)?/i,
      /Creative Commons Zero/i,
      /creativecommons\.org\/publicdomain\/zero\/1\.0/i,
    ],
  },
  {
    spdx: 'MIT',
    patterns: [
      /\bMIT License\b/i,
      /opensource\.org\/licenses\/MIT/i,
      /shields\.io\/badge\/license-MIT/i,
      /img\.shields\.io\/[^\s)]*license[^\s)]*-MIT/i,
    ],
  },
  {
    spdx: 'Apache-2.0',
    patterns: [
      /Apache License(?:,? Version)? 2\.0/i,
      /Apache License\s+Version 2\.0/i,
      /apache\.org\/licenses\/LICENSE-2\.0/i,
      /shields\.io\/badge\/license-Apache(?:--|%20| )2\.0/i,
    ],
  },
  {
    spdx: 'BSD-3-Clause',
    patterns: [/BSD 3-Clause/i, /BSD-3-Clause/i],
  },
  {
    spdx: 'BSD-2-Clause',
    patterns: [/BSD 2-Clause/i, /BSD-2-Clause/i],
  },
  {
    spdx: 'ISC',
    patterns: [/\bISC License\b/i, /opensource\.org\/licenses\/ISC/i],
  },
  {
    spdx: 'Unlicense',
    patterns: [/\bThe Unlicense\b/i, /unlicense\.org/i],
  },
  {
    spdx: 'GPL-3.0',
    patterns: [/GNU General Public License[^\n]{0,40}(?:version )?3/i, /GPL[- ]?3\.0/i],
  },
  {
    spdx: 'GPL-2.0',
    patterns: [/GNU General Public License[^\n]{0,40}(?:version )?2/i, /GPL[- ]?2\.0/i],
  },
  {
    spdx: 'GFDL',
    patterns: [/GNU Free Documentation License/i, /gnu\.org\/licenses\/(?:old-licenses\/)?fdl/i],
  },
];

function safeCachePath(repository, commitSha, documentPath) {
  const key = sha256(`${repository}\n${commitSha}\n${documentPath}`);
  return path.join(cacheRoot, repository.replace('/', '--'), `${key}.txt`);
}

async function fetchFixed(repository, commitSha, documentPath) {
  if (!/^[0-9a-f]{40}$/.test(commitSha ?? '')) return null;
  if (!documentPath || path.posix.isAbsolute(documentPath)) return null;
  const normalized = path.posix.normalize(documentPath.replace(/^\.\//, ''));
  if (normalized.startsWith('../')) return null;
  const cachePath = safeCachePath(repository, commitSha, normalized);
  const missingPath = `${cachePath}.missing`;
  if (fs.existsSync(cachePath)) return fs.readFileSync(cachePath, 'utf8');
  if (fs.existsSync(missingPath)) return null;
  const response = await fetch(
    `https://raw.githubusercontent.com/${repository}/${commitSha}/${normalized}`,
    { headers: { 'User-Agent': 'libx-awesome-license-auditor' } }
  );
  if (!response.ok) {
    if (response.status === 404) {
      fs.mkdirSync(path.dirname(missingPath), { recursive: true });
      fs.writeFileSync(missingPath, '404\n');
    }
    return null;
  }
  const text = await response.text();
  if (Buffer.byteLength(text) > 5 * 1024 * 1024) return null;
  fs.mkdirSync(path.dirname(cachePath), { recursive: true });
  fs.writeFileSync(cachePath, text);
  return text;
}

function linkedLicensePaths(readme, readmePath) {
  const results = new Set();
  const base = path.posix.dirname(readmePath);
  for (const match of readme.matchAll(/(?:!?)\[[^\]]*\]\(([^\s)]+)(?:\s+[^)]*)?\)/g)) {
    const raw = match[1].replace(/^<|>$/g, '');
    if (!/(?:licen[cs]e|copying|copyright)/i.test(raw)) continue;
    if (/^(?:https?:|mailto:|#)/i.test(raw)) continue;
    const resolved = path.posix.normalize(path.posix.join(base, raw));
    if (!resolved.startsWith('../')) results.add(resolved);
  }
  for (const match of readme.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)) {
    const raw = match[1];
    if (!/(?:licen[cs]e|copying|copyright)/i.test(raw)) continue;
    if (/^(?:https?:|mailto:|#)/i.test(raw)) continue;
    const resolved = path.posix.normalize(path.posix.join(base, raw));
    if (!resolved.startsWith('../')) results.add(resolved);
  }
  return [...results];
}

function detectLicenses(text) {
  return licenseDefinitions
    .filter((definition) => definition.patterns.some((pattern) => pattern.test(text)))
    .map((definition) => definition.spdx);
}

function readmeEvidence(readme) {
  const lines = readme.split(/\r?\n/);
  const matching = new Map();
  let licenseHeadingLevel = null;
  for (const [index, line] of lines.entries()) {
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      if (/\blicen[cs]e\b/i.test(heading[2])) licenseHeadingLevel = level;
      else if (licenseHeadingLevel !== null && level <= licenseHeadingLevel) {
        licenseHeadingLevel = null;
      }
    }
    const explicitDeclaration =
      /(?:licensed|released|distributed|made available) under|\blicen[cs]e (?:is|:)\b/i.test(line);
    const badgeOrLink =
      /(?:!?)\[[^\]]*(?:licen[cs]e|CC0|Creative Commons)[^\]]*\]\([^)]*(?:licen[cs]e|creativecommons|CC0|MIT|Apache|BSD|GPL|ISC|Unlicense)[^)]*\)/i.test(
        line
      ) || /<(?:a|img)\b[^>]*(?:licen[cs]e|creativecommons|CC0)[^>]*>/i.test(line);
    if (licenseHeadingLevel !== null || explicitDeclaration || badgeOrLink) {
      matching.set(index, {
        line: index + 1,
        kind:
          licenseHeadingLevel !== null
            ? 'license-section'
            : badgeOrLink
              ? 'license-badge-or-link'
              : explicitDeclaration
                ? 'license-declaration'
                : 'license-reference',
        text: line.trim().slice(0, 500),
      });
    }
  }
  return [...matching.values()].slice(0, 80);
}

function preferredLicense(detected) {
  for (const definition of licenseDefinitions) {
    if (detected.has(definition.spdx)) return definition.spdx;
  }
  return null;
}

function singleLicense(detected) {
  return detected.size === 1 ? [...detected][0] : null;
}

async function inspect(target) {
  const source = lockByRepository.get(target.repository);
  const discovered = discoveryByRepository.get(target.repository);
  const repository = source?.repository ?? discovered?.repository ?? target.repository;
  const commitSha = source?.commitSha ?? discovered?.commitSha ?? null;
  const recordedReadmePath = source?.documentPath ?? discovered?.readmePath ?? null;
  let readmePath = null;
  let readme = null;
  for (const candidate of [...new Set([recordedReadmePath, ...readmeCandidates].filter(Boolean))]) {
    const content = await fetchFixed(repository, commitSha, candidate);
    if (content !== null) {
      readmePath = candidate;
      readme = content;
      break;
    }
  }

  const readmeEvidenceItems = readme ? readmeEvidence(readme) : [];
  const documentCandidates = new Set(licenseCandidates);
  if (readme && readmePath) {
    const evidenceMarkdown = readmeEvidenceItems.map((evidence) => evidence.text).join('\n');
    for (const linked of linkedLicensePaths(evidenceMarkdown, readmePath)) {
      documentCandidates.add(linked);
    }
  }
  const documents = [];
  for (const candidate of documentCandidates) {
    const content = await fetchFixed(repository, commitSha, candidate);
    if (content === null) continue;
    const detected = detectLicenses(content.slice(0, 8000));
    documents.push({
      path: candidate,
      sha256: sha256(content),
      detectedLicenses: detected,
    });
  }

  const sectionDetected = new Set(
    detectLicenses(
      readmeEvidenceItems
        .filter((evidence) => evidence.kind === 'license-section')
        .map((evidence) => evidence.text)
        .join('\n')
    )
  );
  const otherReadmeDetected = new Set(
    detectLicenses(
      readmeEvidenceItems
        .filter((evidence) => evidence.kind !== 'license-section')
        .map((evidence) => evidence.text)
        .join('\n')
    )
  );
  const documentDetected = new Set(documents.flatMap((document) => document.detectedLicenses));
  const allDetected = new Set([...documentDetected, ...sectionDetected, ...otherReadmeDetected]);
  const documentLicense = singleLicense(documentDetected);
  const sectionLicense = singleLicense(sectionDetected);
  const otherReadmeLicense = singleLicense(otherReadmeDetected);
  const conflictingEvidence =
    documentDetected.size > 1 ||
    sectionDetected.size > 1 ||
    (!documentLicense && !sectionLicense && otherReadmeDetected.size > 1) ||
    (documentLicense && sectionLicense && documentLicense !== sectionLicense);
  const detectedLicense = conflictingEvidence
    ? null
    : (documentLicense ?? sectionLicense ?? otherReadmeLicense ?? preferredLicense(allDetected));
  const evidenceKind =
    documentDetected.size > 0
      ? 'license-document'
      : sectionDetected.size > 0 || otherReadmeDetected.size > 0
        ? 'readme-text-link-or-badge'
        : 'none';

  return {
    repository: target.repository,
    sourceUrl: target.sourceUrl,
    category: target.section,
    label: target.englishLabel,
    commitSha,
    readmePath,
    readmeSha256: readme ? sha256(readme) : null,
    recordedStatus: source?.status ?? 'discovery-failure',
    recordedLicenseSpdx: source?.licenseSpdx ?? discovered?.licenseSpdx ?? null,
    detectedLicenseSpdx: detectedLicense,
    detectedLicenses: [...allDetected],
    evidenceLicenses: {
      documents: [...documentDetected],
      readmeLicenseSection: [...sectionDetected],
      readmeOther: [...otherReadmeDetected],
    },
    conflictingEvidence,
    evidenceKind,
    readmeEvidence: readmeEvidenceItems,
    licenseDocuments: documents,
    auditDecision: conflictingEvidence
      ? 'conflicting-license-evidence-review-required'
      : detectedLicense
        ? 'license-evidence-found-review-required'
        : 'no-evidence-found',
  };
}

const results = new Array(targets.length);
let cursor = 0;
async function worker() {
  while (cursor < targets.length) {
    const index = cursor;
    cursor += 1;
    results[index] = await inspect(targets[index]);
  }
}
await Promise.all(Array.from({ length: Math.min(concurrency, targets.length) }, worker));

const byDetectedLicense = Object.fromEntries(
  [
    ...new Set(
      results.map((result) =>
        result.conflictingEvidence ? 'conflict' : (result.detectedLicenseSpdx ?? 'none')
      )
    ),
  ]
    .sort()
    .map((license) => [
      license,
      results.filter(
        (result) =>
          (result.conflictingEvidence ? 'conflict' : (result.detectedLicenseSpdx ?? 'none')) ===
          license
      ).length,
    ])
);
const report = {
  schemaVersion: 1,
  generatedAt: isoNow(),
  snapshot: audit.snapshot,
  policy: {
    fixedCommit:
      '概要スナップショットの探索時に固定したcommit SHAだけを検査し、上流の現在状態を過去スナップショットへ混在させない。',
    evidence:
      '独立ライセンス文書、READMEのLicense表記、Creative Commons URL、ライセンスバッジ画像・リンクを候補証拠として記録する。',
    decision:
      '文字列検出は収録許可の最終決定ではない。ライセンス種別、対象著作物、帰属・継承条件を確認してから本文収録へ進む。',
  },
  summary: {
    targetCount: targets.length,
    readmeRecoveredCount: results.filter((result) => result.readmePath).length,
    licenseCandidateCount: results.filter((result) => result.detectedLicenseSpdx).length,
    conflictingEvidenceCount: results.filter((result) => result.conflictingEvidence).length,
    noEvidenceFoundCount: results.filter((result) => result.detectedLicenses.length === 0).length,
    byDetectedLicense,
  },
  results,
};

writeJsonAtomic(outputPath, report);
console.log(JSON.stringify(report.summary, null, 2));
