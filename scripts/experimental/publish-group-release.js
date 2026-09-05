import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { verifyGroupWorkerPackage } from './group-worker-package-integrity.js';

function writeJson(target, value) {
  const temporary = `${target}.${crypto.randomUUID()}.tmp`;
  try {
    fs.writeFileSync(temporary, JSON.stringify(value, null, 2) + '\n', { flag: 'wx' });
    fs.renameSync(temporary, target);
  } finally {
    fs.rmSync(temporary, { force: true });
  }
}

function openState(directory, groupId) {
  directory = path.resolve(directory);
  for (let parent = directory; ; parent = path.dirname(parent)) {
    if (fs.existsSync(parent) && fs.lstatSync(parent).isSymbolicLink())
      throw new Error('公開状態の保存先にsymlinkは使用できません');
    if (path.dirname(parent) === parent) break;
  }
  fs.mkdirSync(directory, { recursive: true });
  const root = path.join(directory, crypto.createHash('sha256').update(groupId).digest('hex'));
  fs.mkdirSync(root, { recursive: true });
  if (fs.lstatSync(root).isSymbolicLink()) throw new Error('公開状態の保存先が不正です');
  const lock = path.join(root, 'lock');
  try {
    fs.mkdirSync(lock);
  } catch (error) {
    if (error.code === 'EEXIST')
      throw new Error('同じグループの公開が実行中、または未解消のlockがあります');
    throw error;
  }
  return { root, close: () => fs.rmdirSync(lock) };
}

async function readActive(driver, groupId) {
  const active = await driver.readActive(groupId);
  if (
    active !== null &&
    (!active ||
      typeof active.deploymentId !== 'string' ||
      !active.deploymentId ||
      typeof active.versionId !== 'string' ||
      !active.versionId ||
      !/^[a-f0-9]{64}$/.test(active.revision))
  )
    throw new Error('配置先の現在状態が不正です');
  return structuredClone(active);
}

const matches = (active, expected) =>
  ['deploymentId', 'versionId', 'revision'].every(
    (key) => (active?.[key] ?? null) === (expected?.[key] ?? null)
  );

/**
 * Orchestrates a single writer. The driver owns actual deployment and verification.
 * A shared stateDirectory serializes local processes; remote CI must also serialize
 * every writer to this group. This does not supply a cross-host Cloudflare CAS API.
 */
export async function publishGroupRelease({
  directory,
  packageSha256,
  stateDirectory,
  expectedDeploymentId,
  driver,
}) {
  if (
    expectedDeploymentId !== null &&
    (typeof expectedDeploymentId !== 'string' || !expectedDeploymentId)
  )
    throw new Error('基点deployment IDを明示してください（初回はnull）');
  const verified = verifyGroupWorkerPackage({ directory, packageSha256, includeRelease: true });
  const release = verified.release;
  const state = openState(stateDirectory, release.groupId);
  const pending = path.join(state.root, 'pending.json');
  let journal;
  let promotionStarted = false;
  const save = () => writeJson(pending, journal);
  const finish = (status) => {
    journal.status = status;
    writeJson(path.join(state.root, `${journal.id}.json`), journal);
    fs.unlinkSync(pending);
    return journal;
  };
  try {
    if (fs.existsSync(pending))
      throw new Error('未確定の公開記録があります。配置先の状態を照合してください');
    const base = await readActive(driver, release.groupId);
    if ((base?.deploymentId ?? null) !== expectedDeploymentId)
      throw new Error('公開基点が変更されています');
    journal = {
      schemaVersion: 1,
      id: crypto.randomUUID(),
      groupId: release.groupId,
      revision: release.revision,
      packageSha256,
      base,
      status: 'staging',
      uploaded: [],
      reused: [],
      candidate: null,
    };
    save();
    for (const unit of release.units) {
      let deployed = await driver.readUnit(unit.service);
      if (!deployed) {
        await driver.uploadUnit(unit, path.join(directory, unit.service));
        deployed = await driver.readUnit(unit.service);
        journal.uploaded.push(unit.service);
      } else {
        journal.reused.push(unit.service);
      }
      if (!deployed || deployed.revision !== unit.revision)
        throw new Error(`配置先の単位が一致しません: ${unit.service}`);
      await driver.verifyUnit(unit, deployed, path.join(directory, unit.service));
      save();
    }
    // Old service dependencies must exist before the new entry point can reference them.
    for (const asset of release.retainedAssets ?? []) {
      const deployed = await driver.readUnit(asset.service);
      if (!deployed || deployed.revision !== asset.revision)
        throw new Error(`保持アセットの配置先がありません: ${asset.service}`);
      await driver.verifyRetainedAsset(asset, deployed);
    }
    // Recheck the sealed input after uploads, before producing the entry point.
    verifyGroupWorkerPackage({ directory, packageSha256 });
    journal.candidate = await driver.prepareRouter(release, path.join(directory, 'router'));
    if (!journal.candidate?.versionId || journal.candidate.revision !== release.revision)
      throw new Error('入口候補の識別子が一致しません');
    journal.status = 'prepared';
    save();
    await driver.verifyRouter(release, journal.candidate);
    if (!matches(await readActive(driver, release.groupId), base))
      throw new Error('入口の切替前に公開基点が変更されました');
    journal.status = 'promoting';
    save();
    promotionStarted = true;
    await driver.promoteRouter(release.groupId, journal.candidate, base);
    const active = await readActive(driver, release.groupId);
    if (active?.versionId !== journal.candidate.versionId || active.revision !== release.revision)
      throw new Error('入口の切替結果が未確定です');
    journal.active = active;
    return finish('published');
  } catch (error) {
    if (journal) {
      // No automatic retry or rollback after an ambiguous promotion response.
      journal.failure = error.message;
      if (promotionStarted) {
        journal.status = 'unresolved';
        save();
      } else {
        finish('failed-before-promotion');
      }
    }
    throw error;
  } finally {
    state.close();
  }
}

/** Reconcile only positive evidence of the intended version becoming active. */
export async function reconcileGroupRelease({ stateDirectory, groupId, driver }) {
  const state = openState(stateDirectory, groupId);
  try {
    const pending = path.join(state.root, 'pending.json');
    const journal = JSON.parse(fs.readFileSync(pending, 'utf8'));
    if (journal.groupId !== groupId || !journal.candidate?.versionId)
      throw new Error('自動照合できる入口候補がありません');
    const active = await readActive(driver, groupId);
    if (active?.versionId !== journal.candidate.versionId || active.revision !== journal.revision)
      throw new Error('公開結果を確定できません。未確定記録を保持します');
    journal.active = active;
    journal.status = 'published-after-reconciliation';
    writeJson(path.join(state.root, `${journal.id}.json`), journal);
    fs.unlinkSync(pending);
    return journal;
  } finally {
    state.close();
  }
}
