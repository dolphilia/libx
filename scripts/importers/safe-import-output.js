import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { commitPreparedPathsAtomically } from '../atomic-paths.js';

function isBelow(parent, candidate) {
  const relative = path.relative(parent, candidate);
  return relative !== '' && !relative.startsWith(`..${path.sep}`) && relative !== '..';
}

export function assertSafeImportTarget(targetPath, allowedRoot, expectedLanguage) {
  const resolvedTarget = path.resolve(targetPath);
  const resolvedAllowedRoot = path.resolve(allowedRoot);
  if (!isBelow(resolvedAllowedRoot, resolvedTarget)) {
    throw new Error(`出力先は許可ルート配下である必要があります: ${resolvedAllowedRoot}`);
  }
  if (path.basename(resolvedTarget) !== expectedLanguage) {
    throw new Error(
      `出力先は定本言語ディレクトリ ${expectedLanguage} で終わる必要があります: ${resolvedTarget}`
    );
  }
  return resolvedTarget;
}

export function hashFile(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

export function describePath(targetPath, basePath = targetPath) {
  if (!fs.existsSync(targetPath)) return [];
  const stat = fs.statSync(targetPath);
  if (stat.isFile()) {
    return [
      {
        path: path.relative(basePath, targetPath) || path.basename(targetPath),
        sha256: hashFile(targetPath),
      },
    ];
  }

  const records = [];
  for (const entry of fs
    .readdirSync(targetPath, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))) {
    const entryPath = path.join(targetPath, entry.name);
    if (entry.isDirectory()) records.push(...describePath(entryPath, basePath));
    if (entry.isFile()) {
      records.push({ path: path.relative(basePath, entryPath), sha256: hashFile(entryPath) });
    }
  }
  return records;
}

export function comparePathDescriptions(left, right) {
  const leftText = JSON.stringify(left);
  const rightText = JSON.stringify(right);
  return leftText === rightText;
}

export function prepareImportOutput({ targetPath, generate, validate, commitOptions }) {
  const targetParent = path.dirname(targetPath);
  fs.mkdirSync(targetParent, { recursive: true });
  const preparedPath = fs.mkdtempSync(
    path.join(targetParent, `.${path.basename(targetPath)}-prepared-`)
  );
  try {
    generate(preparedPath);
    validate(preparedPath);
    const before = describePath(targetPath);
    const after = describePath(preparedPath);
    commitPreparedPathsAtomically([{ preparedPath, targetPath }], commitOptions);
    return { before, after };
  } catch (error) {
    fs.rmSync(preparedPath, { recursive: true, force: true });
    throw error;
  }
}

export function prepareImportForCheck({ targetPath, generate, validate }) {
  const targetParent = path.dirname(targetPath);
  fs.mkdirSync(targetParent, { recursive: true });
  const preparedPath = fs.mkdtempSync(
    path.join(targetParent, `.${path.basename(targetPath)}-check-`)
  );
  try {
    generate(preparedPath);
    validate(preparedPath);
    const before = describePath(targetPath);
    const after = describePath(preparedPath);
    return { matches: comparePathDescriptions(before, after), before, after };
  } finally {
    fs.rmSync(preparedPath, { recursive: true, force: true });
  }
}
