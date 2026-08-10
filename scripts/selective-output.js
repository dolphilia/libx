import fs from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { copyDirRecursive } from './utils.js';

function createSiblingPath(directory, label) {
  const parent = path.dirname(directory);
  const name = path.basename(directory);
  return path.join(parent, `.${name}-${label}-${process.pid}-${randomUUID()}`);
}

function normalizeOutputPath(outputPath) {
  if (outputPath === '.' || outputPath === '') return '.';

  const normalized = path.normalize(outputPath);
  if (
    path.isAbsolute(normalized) ||
    normalized === '..' ||
    normalized.startsWith(`..${path.sep}`)
  ) {
    throw new Error(`出力先はdist内の相対パスである必要があります: ${outputPath}`);
  }
  return normalized;
}

function assertLandingDoesNotOwnReservedRoots(sourceDirectory, reservedRootNames) {
  for (const name of reservedRootNames) {
    if (fs.existsSync(path.join(sourceDirectory, name))) {
      throw new Error(`landingの出力が予約済みルートと衝突しています: ${name}`);
    }
  }
}

function clearLandingOwnedEntries(stageDirectory, reservedRootNames) {
  if (!fs.existsSync(stageDirectory)) return;

  for (const entry of fs.readdirSync(stageDirectory, { withFileTypes: true })) {
    if (reservedRootNames.has(entry.name)) continue;
    fs.rmSync(path.join(stageDirectory, entry.name), { recursive: true, force: true });
  }
}

function commitPreparedDirectory(currentDirectory, preparedDirectory) {
  const backupDirectory = createSiblingPath(currentDirectory, 'previous');
  const hadCurrentDirectory = fs.existsSync(currentDirectory);

  if (hadCurrentDirectory) {
    fs.renameSync(currentDirectory, backupDirectory);
  }

  try {
    fs.renameSync(preparedDirectory, currentDirectory);
  } catch (error) {
    if (hadCurrentDirectory && fs.existsSync(backupDirectory)) {
      fs.renameSync(backupDirectory, currentDirectory);
    }
    throw error;
  }

  if (hadCurrentDirectory) {
    fs.rmSync(backupDirectory, { recursive: true, force: true });
  }
}

/**
 * 既存の統合出力をステージへ複製し、選択した対象だけを置換してから一括で確定する。
 * prepareTargetはステージ上の出力だけを変更でき、例外時には現在のdistを維持する。
 */
export function integrateSelectiveOutputs({
  distDirectory,
  targets,
  reservedRootNames,
  prepareTarget,
}) {
  const normalizedReservedRoots = new Set(reservedRootNames);
  const stageDirectory = createSiblingPath(distDirectory, 'selective');

  try {
    if (fs.existsSync(distDirectory)) {
      fs.cpSync(distDirectory, stageDirectory, { recursive: true, force: true });
    } else {
      fs.mkdirSync(stageDirectory, { recursive: true });
    }

    for (const target of targets) {
      if (!fs.existsSync(target.srcDir)) {
        throw new Error(`ビルド出力が存在しません: ${target.srcDir}`);
      }

      const outputPath = normalizeOutputPath(target.outputPath);
      const stagedDestination =
        outputPath === '.' ? stageDirectory : path.join(stageDirectory, outputPath);

      if (target.isLanding) {
        assertLandingDoesNotOwnReservedRoots(target.srcDir, normalizedReservedRoots);
        clearLandingOwnedEntries(stageDirectory, normalizedReservedRoots);
      } else {
        fs.rmSync(stagedDestination, { recursive: true, force: true });
      }

      copyDirRecursive(target.srcDir, stagedDestination);
      prepareTarget?.(target, stagedDestination);
    }

    commitPreparedDirectory(distDirectory, stageDirectory);
  } catch (error) {
    fs.rmSync(stageDirectory, { recursive: true, force: true });
    throw error;
  }
}

/**
 * landing以外のサイトが所有するdist直下の予約名を返す。
 * 文書サイトはすべてdocs/以下、その他のサイトは各サイト名の下を所有する。
 */
export function collectReservedRootNames(targets) {
  const reserved = new Set();

  for (const target of targets) {
    if (target.isLanding) continue;
    const outputPath = normalizeOutputPath(target.outputPath);
    const [rootName] = outputPath.split(path.sep);
    if (rootName && rootName !== '.') reserved.add(rootName);
  }

  return reserved;
}
