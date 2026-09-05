#!/usr/bin/env node
import { createAwesomeContentAccess, readAwesomeRouteManifest } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import Ajv2020 from 'ajv/dist/2020.js';
import { notesDir, readJson, rootDir, snapshotVersion, writeJsonAtomic } from './common.mjs';
import {
  deriveTopic,
  detectImportantStatus,
  detectIntroduction,
  normalizedSummary,
  normalizedTitle,
  validateNormalizedIntroduction,
} from './awesome-introduction-utils.mjs';

const version = snapshotVersion;
const writeBaseline = process.argv.includes('--write-baseline');
const refreshBaseline = process.argv.includes('--refresh-baseline');
const rebaseArgument = process.argv.find((argument) => argument.startsWith('--rebase-source-ids='));
const rebaseSourceIds = rebaseArgument
  ? new Set(rebaseArgument.slice('--rebase-source-ids='.length).split(',').filter(Boolean))
  : null;
const check = process.argv.includes('--check');
const manifestPath = path.join(notesDir, 'INTRODUCTION_NORMALIZATION.json');
const auditPath = path.join(notesDir, 'INTRODUCTION_AUDIT.json');
const schemaPath = path.join(
  rootDir,
  'docs/notes/document-import/awesome/schemas/introduction-normalization.schema.json'
);
const routes = readAwesomeRouteManifest({ root: rootDir, localized: false }).entries.filter(
  (entry) => entry.version === version
);
const missingReviewPath = path.join(notesDir, 'AWESOME_MISSING_LICENSE_REVIEW_RESULTS.json');
const metadataOnlyRepositories = new Set(
  fs.existsSync(missingReviewPath)
    ? readJson(missingReviewPath)
        .results.filter((entry) => entry.decision === 'metadata-only')
        .map((entry) => entry.repository.toLowerCase())
    : []
);
const content = createAwesomeContentAccess(version, rootDir);

function pagePath(entry, lang) {
  return content.pathFor(lang, `${entry.slug}.md`);
}

function languageEvidence(detected) {
  return {
    originalH1: detected.markdownH1,
    originalPrefixSha256: detected.prefixSha256,
    retainedSuffixSha256: detected.suffixSha256,
    boundaryKind: detected.boundaryKind,
    flags: detected.flags,
  };
}

function dispositions(flags) {
  const result = [];
  if (flags.includes('image')) result.push('exclude-images');
  if (flags.includes('badge')) result.push('exclude-badges');
  if (flags.includes('center-alignment')) result.push('exclude-center-alignment');
  if (flags.includes('layout-html')) result.push('exclude-layout-html');
  if (flags.includes('important-information-candidate'))
    result.push('summarize-important-information');
  return result.length ? result : ['replace-with-normalized-introduction'];
}

function buildManifest() {
  const entries = routes.map((entry) => {
    const enMarkdown = fs.readFileSync(pagePath(entry, 'en'), 'utf8');
    const jaMarkdown = fs.readFileSync(pagePath(entry, 'ja'), 'utf8');
    const en = detectIntroduction(enMarkdown);
    const ja = detectIntroduction(jaMarkdown);
    const topic = deriveTopic({
      sourceId: entry.sourceId,
      repository: entry.repository,
      detected: en,
    });
    const metadataOnly = metadataOnlyRepositories.has(entry.repository.toLowerCase());
    const importantStatus = detectImportantStatus(en);
    return {
      sourceId: entry.sourceId,
      repository: entry.repository,
      categoryId: entry.categoryId,
      slug: entry.slug,
      paths: {
        en: path.relative(rootDir, pagePath(entry, 'en')),
        ja: path.relative(rootDir, pagePath(entry, 'ja')),
      },
      topic,
      metadataOnly,
      confidence:
        en.boundaryKind === 'end-of-document' && en.body.length > 2000
          ? 'low'
          : ['contents-heading', 'rst-contents-directive'].includes(en.boundaryKind)
            ? 'high'
            : 'medium',
      importantStatus,
      evidence: { en: languageEvidence(en), ja: languageEvidence(ja) },
      normalized: {
        en: {
          title: normalizedTitle(topic, 'en', entry.sourceId),
          summary: normalizedSummary({
            topic,
            lang: 'en',
            sourceId: entry.sourceId,
            metadataOnly,
            importantStatus,
          }),
        },
        ja: {
          title: normalizedTitle(topic, 'ja', entry.sourceId),
          summary: normalizedSummary({
            topic,
            lang: 'ja',
            sourceId: entry.sourceId,
            metadataOnly,
            importantStatus,
          }),
        },
      },
      dispositions: dispositions([...en.flags, ...ja.flags]),
      reviewStatus: 'automated-evidence-approved',
      exception: null,
    };
  });
  return { schemaVersion: 1, snapshotVersion: version, entries };
}

function prefixHashes(languageEvidenceValue) {
  return new Set([
    languageEvidenceValue.originalPrefixSha256,
    ...(languageEvidenceValue.acceptedOriginalPrefixSha256 ?? []),
  ]);
}

function addHistoricalInheritance(manifest) {
  if (version !== 'v2026-08-20') return;
  const newerPath = path.join(
    rootDir,
    'docs/notes/document-import/awesome/snapshots/v2026-08-23/INTRODUCTION_NORMALIZATION.json'
  );
  if (!fs.existsSync(newerPath)) return;
  const newerById = new Map(readJson(newerPath).entries.map((entry) => [entry.sourceId, entry]));
  for (const entry of manifest.entries) {
    const newer = newerById.get(entry.sourceId);
    if (!newer || entry.metadataOnly !== newer.metadataOnly) continue;
    const localesMatch = ['en', 'ja'].every((lang) => {
      const currentPrefixes = prefixHashes(entry.evidence[lang]);
      const newerPrefixes = prefixHashes(newer.evidence[lang]);
      return (
        [...currentPrefixes].some((hash) => newerPrefixes.has(hash)) &&
        entry.evidence[lang].retainedSuffixSha256 === newer.evidence[lang].retainedSuffixSha256
      );
    });
    if (localesMatch && JSON.stringify(entry.normalized) === JSON.stringify(newer.normalized))
      entry.inheritsFrom = 'v2026-08-23';
  }
}

if (writeBaseline || refreshBaseline) {
  if (writeBaseline && fs.existsSync(manifestPath))
    throw new Error(`既存の判断記録を上書きしません: ${manifestPath}`);
  const manifest = buildManifest();
  if (refreshBaseline && fs.existsSync(manifestPath)) {
    const previous = readJson(manifestPath);
    const previousById = new Map(previous.entries.map((entry) => [entry.sourceId, entry]));
    for (const entry of manifest.entries) {
      const old = previousById.get(entry.sourceId);
      if (!old) continue;
      for (const lang of ['en', 'ja']) {
        const accepted = new Set(old.evidence[lang].acceptedOriginalPrefixSha256 ?? []);
        if (old.evidence[lang].originalPrefixSha256 !== entry.evidence[lang].originalPrefixSha256)
          accepted.add(old.evidence[lang].originalPrefixSha256);
        if (accepted.size) entry.evidence[lang].acceptedOriginalPrefixSha256 = [...accepted].sort();
      }
    }
  }
  addHistoricalInheritance(manifest);
  writeJsonAtomic(manifestPath, manifest);
  console.log(
    `Awesome introduction baseline${refreshBaseline ? ' refresh' : ''}: ${manifest.entries.length} entries (${version})`
  );
  process.exit(0);
}

if (rebaseSourceIds) {
  if (!fs.existsSync(manifestPath)) throw new Error(`判断記録がありません: ${manifestPath}`);
  const manifest = readJson(manifestPath);
  const selected = manifest.entries.filter((entry) => rebaseSourceIds.has(entry.sourceId));
  if (selected.length !== rebaseSourceIds.size)
    throw new Error('境界再固定対象に未知のsourceIdがあります');
  for (const entry of selected) {
    for (const lang of ['en', 'ja']) {
      const gitPath = entry.paths[lang];
      const source = execFileSync('git', ['show', `HEAD:${gitPath}`], {
        cwd: rootDir,
        encoding: 'utf8',
      });
      const detected = detectIntroduction(source);
      const currentDetected = detectIntroduction(fs.readFileSync(pagePath(entry, lang), 'utf8'));
      const accepted = new Set(entry.evidence[lang].acceptedOriginalPrefixSha256 ?? []);
      accepted.add(entry.evidence[lang].originalPrefixSha256);
      accepted.add(currentDetected.prefixSha256);
      entry.evidence[lang] = {
        ...languageEvidence(detected),
        retainedSuffixSha256: currentDetected.suffixSha256,
        ...(accepted.size ? { acceptedOriginalPrefixSha256: [...accepted].sort() } : {}),
      };
    }
    entry.confidence = ['contents-heading', 'rst-contents-directive'].includes(
      entry.evidence.en.boundaryKind
    )
      ? 'high'
      : 'medium';
  }
  writeJsonAtomic(manifestPath, manifest);
  console.log(`Awesome introduction boundary rebase: ${selected.length} entries (${version})`);
  process.exit(0);
}

if (!fs.existsSync(manifestPath)) throw new Error(`判断記録がありません: ${manifestPath}`);
const manifest = readJson(manifestPath);
const errors = [];
const ajv = new Ajv2020({ allErrors: true, strict: false });
const validateManifest = ajv.compile(readJson(schemaPath));
if (!validateManifest(manifest))
  errors.push(`判断記録schema違反: ${ajv.errorsText(validateManifest.errors)}`);
if (manifest.snapshotVersion !== version)
  errors.push(`判断記録snapshot不一致: ${manifest.snapshotVersion} != ${version}`);
const sourceIds = manifest.entries.map((entry) => entry.sourceId);
if (new Set(sourceIds).size !== sourceIds.length) errors.push('判断記録のsourceIdが重複しています');
if (manifest.entries.some((entry) => entry.confidence === 'low'))
  errors.push('低信頼度の境界判断が未解決です');
const counts = {
  total: manifest.entries.length,
  normalized: 0,
  exceptions: 0,
  metadataOnly: 0,
  flags: {},
};
for (const entry of manifest.entries) {
  if (entry.exception) counts.exceptions += 1;
  if (entry.metadataOnly) counts.metadataOnly += 1;
  for (const lang of ['en', 'ja']) {
    const pathname = pagePath(entry, lang);
    if (!fs.existsSync(pathname)) {
      errors.push(`${lang}文書がありません: ${entry.slug}`);
      continue;
    }
    const markdown = fs.readFileSync(pathname, 'utf8');
    const validationErrors = validateNormalizedIntroduction(markdown, entry.normalized[lang]);
    if (validationErrors.length) {
      errors.push(...validationErrors.map((message) => `${entry.slug} (${lang}): ${message}`));
    } else {
      counts.normalized += 1;
    }
    for (const flag of entry.evidence[lang].flags) {
      counts.flags[`${lang}:${flag}`] = (counts.flags[`${lang}:${flag}`] ?? 0) + 1;
    }
  }
}
const audit = {
  schemaVersion: 1,
  snapshotVersion: version,
  ...counts,
  expectedNormalized: manifest.entries.length * 2,
  unresolved: errors.length,
};
if (!check) writeJsonAtomic(auditPath, audit);
if (errors.length) {
  console.error(
    errors
      .slice(0, 100)
      .map((error) => `- ${error}`)
      .join('\n')
  );
  if (errors.length > 100) console.error(`- ほか${errors.length - 100}件`);
  process.exitCode = 1;
} else {
  if (
    check &&
    (!fs.existsSync(auditPath) || JSON.stringify(readJson(auditPath)) !== JSON.stringify(audit))
  ) {
    throw new Error(`監査記録が現状態と一致しません: ${auditPath}`);
  }
  console.log(
    `Awesome introduction audit: OK (${counts.normalized}/${manifest.entries.length * 2})`
  );
}
