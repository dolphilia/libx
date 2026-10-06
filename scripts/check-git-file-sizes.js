#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

// GitHub通常Gitの警告・拒否水準。配信成果物の容量検査とは別に実施する。
const warnBytes = 50 * 1024 * 1024;
const limitBytes = 100 * 1024 * 1024;
const args = process.argv.slice(2);
if (args.some((arg) => !['--staged', '--json'].includes(arg))) {
  console.error('使い方: node scripts/check-git-file-sizes.js [--staged] [--json]');
  process.exit(2);
}

const root = execFileSync('git', ['rev-parse', '--show-toplevel'], {
  encoding: 'utf8',
}).trim();
const git = (parameters, input) =>
  execFileSync('git', parameters, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    input,
  });
const files = [];
if (args.includes('--staged')) {
  // 作業ツリーのサイズではなく、indexに保存されたblobのサイズを検査する。
  const entries = git(['ls-files', '--stage', '-z'])
    .split('\0')
    .filter(Boolean)
    .map((entry) => {
      const separator = entry.indexOf('\t');
      const [mode, oid, stage] = entry.slice(0, separator).split(' ');
      return { mode, oid, stage, path: entry.slice(separator + 1) };
    });
  if (entries.some((entry) => entry.stage !== '0')) {
    console.error('未解決のマージ競合があります。index検査を中止します。');
    process.exit(2);
  }
  const blobs = entries.filter((entry) => entry.mode !== '160000');
  if (blobs.length) {
    const sizes = git(
      ['cat-file', '--batch-check=%(objecttype) %(objectsize)'],
      `${blobs.map((entry) => entry.oid).join('\n')}\n`
    )
      .trim()
      .split('\n');
    blobs.forEach((entry, index) => {
      const [type, size] = sizes[index].split(' ');
      if (type !== 'blob' || !/^\d+$/.test(size)) {
        throw new Error(`indexのblobを読み取れません: ${entry.path}`);
      }
      files.push({ path: entry.path, bytes: Number(size) });
    });
  }
} else {
  // 追跡済みファイルとignoreされていない未追跡ファイルだけを対象にする。
  const candidates = new Set(
    git(['ls-files', '--cached', '--others', '--exclude-standard', '-z'])
      .split('\0')
      .filter(Boolean)
  );
  for (const file of candidates) {
    let stat;
    try {
      stat = fs.lstatSync(path.join(root, file));
    } catch (error) {
      if (error.code === 'ENOENT') continue; // 削除済みファイル
      throw error;
    }
    if (stat.isFile()) files.push({ path: file, bytes: stat.size });
  }
}
files.sort((a, b) => b.bytes - a.bytes || a.path.localeCompare(b.path));
const summary = {
  mode: args.includes('--staged') ? 'index' : 'working-tree',
  fileCount: files.length,
  totalBytes: files.reduce((total, file) => total + file.bytes, 0),
  warnBytes,
  limitBytes,
  largestFile: files[0] ?? null,
  warnings: files.filter((file) => file.bytes > warnBytes && file.bytes <= limitBytes),
  errors: files.filter((file) => file.bytes > limitBytes),
};
if (args.includes('--json')) {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(`${summary.mode}: ${summary.fileCount}ファイルを検査`);
  for (const [label, list] of [
    ['警告', summary.warnings],
    ['超過', summary.errors],
  ]) {
    for (const file of list) {
      console.log(`${label}: ${(file.bytes / 1024 / 1024).toFixed(2)} MiB ${file.path}`);
    }
  }
  console.log(`警告 ${summary.warnings.length}件 / 100 MiB超過 ${summary.errors.length}件`);
}
process.exitCode = summary.errors.length ? 1 : 0;
