#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_FILE_LIMIT = 20_000;
const DEFAULT_WARN_RATIO = 0.6;
const DEFAULT_FAIL_RATIO = 0.9;
const DEFAULT_MAX_FILE_SIZE = 25 * 1024 * 1024;

export async function inspectDeploymentAssets(directory) {
  const summary = {
    fileCount: 0,
    totalBytes: 0,
    largestFile: null,
    extensions: {},
    forbiddenArtifacts: [],
  };

  async function visit(currentDirectory) {
    const entries = await fs.readdir(currentDirectory, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(currentDirectory, entry.name);
      if (entry.isDirectory()) {
        await visit(entryPath);
        continue;
      }
      if (!entry.isFile()) continue;

      const stat = await fs.stat(entryPath);
      const relativePath = path.relative(directory, entryPath);
      const extension = path.extname(entry.name).toLowerCase() || '(none)';
      summary.fileCount += 1;
      summary.totalBytes += stat.size;
      summary.extensions[extension] = (summary.extensions[extension] ?? 0) + 1;
      if (relativePath.endsWith('.json.gz') || relativePath.includes('pages/public/sidebar/')) {
        summary.forbiddenArtifacts.push(relativePath);
      }
      if (!summary.largestFile || stat.size > summary.largestFile.bytes) {
        summary.largestFile = { path: relativePath, bytes: stat.size };
      }
    }
  }

  await visit(directory);
  return summary;
}

export function evaluateDeploymentAssets(
  summary,
  {
    fileLimit = DEFAULT_FILE_LIMIT,
    warnRatio = DEFAULT_WARN_RATIO,
    failRatio = DEFAULT_FAIL_RATIO,
    maxFileSize = DEFAULT_MAX_FILE_SIZE,
  } = {}
) {
  if (!Number.isInteger(fileLimit) || fileLimit <= 0) {
    throw new Error('fileLimitは正の整数で指定してください。');
  }
  if (!(warnRatio > 0 && warnRatio < failRatio && failRatio <= 1)) {
    throw new Error('warnRatio < failRatio <= 1 となる正の比率を指定してください。');
  }

  const warnings = [];
  const errors = [];
  const warnAt = Math.floor(fileLimit * warnRatio);
  const failAt = Math.floor(fileLimit * failRatio);

  if (summary.fileCount >= failAt) {
    errors.push(`ファイル数 ${summary.fileCount} が安全上限 ${failAt} 以上です。`);
  } else if (summary.fileCount >= warnAt) {
    warnings.push(`ファイル数 ${summary.fileCount} が警告水準 ${warnAt} 以上です。`);
  }

  if (summary.largestFile && summary.largestFile.bytes > maxFileSize) {
    errors.push(
      `最大ファイル ${summary.largestFile.path} (${summary.largestFile.bytes} bytes) が上限 ${maxFileSize} bytes を超えています。`
    );
  }

  if (summary.forbiddenArtifacts?.length > 0) {
    errors.push(`不要なサイドバー成果物が含まれています: ${summary.forbiddenArtifacts.join(', ')}`);
  }

  return { fileLimit, warnAt, failAt, warnings, errors };
}

function readPositiveNumber(name, fallback) {
  const rawValue = process.env[name];
  if (rawValue === undefined) return fallback;
  const value = Number(rawValue);
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name}は正の数で指定してください。`);
  }
  return value;
}

function formatMiB(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MiB`;
}

async function main() {
  const targetDirectory = path.resolve(process.argv[2] ?? 'dist');
  const summary = await inspectDeploymentAssets(targetDirectory);
  const evaluation = evaluateDeploymentAssets(summary, {
    fileLimit: readPositiveNumber('DEPLOYMENT_FILE_LIMIT', DEFAULT_FILE_LIMIT),
    warnRatio: readPositiveNumber('DEPLOYMENT_WARN_RATIO', DEFAULT_WARN_RATIO),
    failRatio: readPositiveNumber('DEPLOYMENT_FAIL_RATIO', DEFAULT_FAIL_RATIO),
  });

  console.log(`デプロイ成果物: ${targetDirectory}`);
  console.log(
    `ファイル数: ${summary.fileCount} / ${evaluation.fileLimit} ` +
      `(警告 ${evaluation.warnAt}, 停止 ${evaluation.failAt})`
  );
  console.log(`合計容量: ${formatMiB(summary.totalBytes)}`);
  if (summary.largestFile) {
    console.log(
      `最大ファイル: ${summary.largestFile.path} (${formatMiB(summary.largestFile.bytes)})`
    );
  }
  console.log(
    `拡張子別: ${Object.entries(summary.extensions)
      .sort((left, right) => right[1] - left[1])
      .map(([extension, count]) => `${extension}=${count}`)
      .join(', ')}`
  );

  for (const warning of evaluation.warnings) console.warn(`警告: ${warning}`);
  for (const error of evaluation.errors) console.error(`エラー: ${error}`);
  if (evaluation.errors.length > 0) process.exitCode = 1;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
