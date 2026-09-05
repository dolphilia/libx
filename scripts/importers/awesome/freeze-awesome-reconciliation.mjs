#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {
  notesDir,
  notesRootDir,
  optionValue,
  readJson,
  rootDir,
  sha256,
  writeJsonAtomic,
} from './common.mjs';

const args = process.argv.slice(2);
const check = args.includes('--check');
const historicalCommit = optionValue(
  args,
  '--historical-commit',
  'e3c18a8a545bcee1cfcb4c581fb718545effedd8'
);
const expansionCommit = optionValue(
  args,
  '--expansion-commit',
  'd851c454eb65b5d199564b3d8112658cb6416855'
);
const candidateVersion = optionValue(args, '--snapshot', 'v2026-08-23');
// This prefix belongs to the frozen historical Git commits, not today's worktree.
const contentBase = 'apps/awesome/src/awesome-content/v2026-08-20';
const outputPath = path.join(notesRootDir, 'migration', 'CURRENT_STATE_INVENTORY.json');

function git(args) {
  return execFileSync('git', args, { cwd: rootDir, encoding: 'utf8' }).trimEnd();
}

const contentAccess = createAwesomeContentAccess('v2026-08-20', rootDir);
function currentMarkdown(language) {
  return contentAccess
    .files(language)
    .map((file) => {
      const content = fs.readFileSync(contentAccess.pathFor(language, file));
      return { path: file, bytes: content.length, sha256: sha256(content) };
    })
    .sort((left, right) => left.path.localeCompare(right.path));
}

function commitMarkdown(commit, language) {
  const prefix = `${contentBase}/${language}/`;
  const names = git(['ls-tree', '-r', '--name-only', commit, '--', `${contentBase}/${language}`])
    .split('\n')
    .filter((name) => name.endsWith('.md'));
  return names.map((name) => {
    const content = execFileSync('git', ['show', `${commit}:${name}`], {
      cwd: rootDir,
      encoding: null,
      maxBuffer: 16 * 1024 * 1024,
    });
    return { path: name.slice(prefix.length), bytes: content.length, sha256: sha256(content) };
  });
}

function aggregate(files) {
  return sha256(files.map((file) => `${file.path}\0${file.sha256}\0${file.bytes}\n`).join(''));
}

function summarize(files) {
  return {
    count: files.length,
    bytes: files.reduce((total, file) => total + file.bytes, 0),
    aggregateSha256: aggregate(files),
    files,
  };
}

function lockSummary(lock) {
  const statuses = Object.groupBy(lock.sources, (source) => source.status);
  const retrieved = lock.sources
    .map((source) => source.retrievedAt)
    .filter(Boolean)
    .sort();
  return {
    declaredVersion: lock.snapshot?.version ?? lock.snapshotVersion ?? null,
    sha256: sha256(`${JSON.stringify(lock, null, 2)}\n`),
    sourceCount: lock.sources.length,
    statuses: Object.fromEntries(
      Object.entries(statuses)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([status, sources]) => [status, sources.length])
    ),
    earliestRetrievedAt: retrieved.at(0) ?? null,
    latestRetrievedAt: retrieved.at(-1) ?? null,
  };
}

const currentEnglish = currentMarkdown('en');
const currentJapanese = currentMarkdown('ja');
const historicalEnglish = commitMarkdown(historicalCommit, 'en');
const historicalJapanese = commitMarkdown(historicalCommit, 'ja');
const currentLock = readJson(path.join(notesDir, 'SOURCES.lock.json'));
const historicalLockText = git([
  'show',
  `${historicalCommit}:docs/notes/document-import/awesome/SOURCES.lock.json`,
]);
const historicalLock = JSON.parse(historicalLockText);
const worktree = git(['status', '--porcelain=v1']).split('\n').filter(Boolean);

const inventory = {
  schemaVersion: 1,
  generatedOn: '2026-08-28',
  repositoryHead: git(['rev-parse', 'HEAD']),
  historicalCompletionCommit: historicalCommit,
  expansionCommit,
  candidateVersion,
  decision: {
    status: 'accepted',
    reason:
      '365/365完成点と672/365拡張点はいずれも2026-08-23のコミットとして固定され、現在のロックにそれより後のretrievedAtがないことを確認した。',
  },
  worktree,
  current: {
    lock: lockSummary(currentLock),
    en: summarize(currentEnglish),
    ja: summarize(currentJapanese),
    enOnlyPaths: currentEnglish
      .map((file) => file.path)
      .filter((file) => !new Set(currentJapanese.map((item) => item.path)).has(file)),
  },
  historical: {
    lock: lockSummary(historicalLock),
    en: summarize(historicalEnglish),
    ja: summarize(historicalJapanese),
  },
};

const latestRetrievedAt = inventory.current.lock.latestRetrievedAt;
if (latestRetrievedAt && latestRetrievedAt >= '2026-08-24T00:00:00.000Z') {
  inventory.decision.status = 'rejected';
  inventory.decision.reason = `2026-08-23より後の取得記録が含まれます: ${latestRetrievedAt}`;
}

if (check) {
  if (!fs.existsSync(outputPath)) throw new Error(`現状インベントリがありません: ${outputPath}`);
  const existing = readJson(outputPath);
  const comparableExisting = { ...existing, worktree: inventory.worktree };
  if (JSON.stringify(comparableExisting) !== JSON.stringify(inventory)) {
    throw new Error('現状インベントリが現在の入力と一致しません');
  }
  console.log(`Awesome reconciliation inventory: OK (${candidateVersion})`);
} else {
  writeJsonAtomic(outputPath, inventory);
  console.log(`Awesome reconciliation inventory: ${outputPath}`);
  console.log(
    JSON.stringify(
      {
        decision: inventory.decision,
        current: {
          lock: inventory.current.lock,
          en: inventory.current.en.count,
          ja: inventory.current.ja.count,
          enOnly: inventory.current.enOnlyPaths.length,
        },
        historical: {
          lock: inventory.historical.lock,
          en: inventory.historical.en.count,
          ja: inventory.historical.ja.count,
        },
      },
      null,
      2
    )
  );
}
