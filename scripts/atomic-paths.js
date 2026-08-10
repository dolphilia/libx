import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';

function backupPathFor(targetPath) {
  return path.join(
    path.dirname(targetPath),
    `.${path.basename(targetPath)}-previous-${process.pid}-${randomUUID()}`
  );
}

/**
 * 準備済みのファイル・ディレクトリを一括で確定する。
 * 途中で失敗した場合は、確定済みの対象も含めて変更前へ戻す。
 */
export function commitPreparedPathsAtomically(changes, options = {}) {
  const records = changes.map(({ preparedPath, targetPath }) => ({
    preparedPath,
    targetPath,
    hadTarget: fs.existsSync(targetPath),
    backupPath: backupPathFor(targetPath),
    committed: false,
  }));
  const createdDirectories = new Set();

  for (const record of records) {
    if (!fs.existsSync(record.preparedPath)) {
      throw new Error(`準備済みパスが存在しません: ${record.preparedPath}`);
    }
    const missingDirectories = [];
    let current = path.dirname(record.targetPath);
    while (!fs.existsSync(current)) {
      missingDirectories.push(current);
      current = path.dirname(current);
    }
    fs.mkdirSync(path.dirname(record.targetPath), { recursive: true });
    missingDirectories.forEach((directory) => createdDirectories.add(directory));
  }

  try {
    for (const record of records) {
      if (record.hadTarget) fs.renameSync(record.targetPath, record.backupPath);
    }

    for (const [index, record] of records.entries()) {
      options.beforeCommit?.(record, index);
      fs.renameSync(record.preparedPath, record.targetPath);
      record.committed = true;
    }
  } catch (error) {
    for (const record of [...records].reverse()) {
      if (record.committed && fs.existsSync(record.targetPath)) {
        fs.rmSync(record.targetPath, { recursive: true, force: true });
      }
      if (record.hadTarget && fs.existsSync(record.backupPath)) {
        fs.renameSync(record.backupPath, record.targetPath);
      }
    }
    for (const directory of [...createdDirectories].sort(
      (left, right) => right.length - left.length
    )) {
      if (fs.existsSync(directory) && fs.readdirSync(directory).length === 0)
        fs.rmdirSync(directory);
    }
    throw error;
  }

  for (const record of records) {
    if (record.hadTarget) fs.rmSync(record.backupPath, { recursive: true, force: true });
  }
}
