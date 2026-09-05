import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  discoverApps,
  findRepositoryRoot,
} from '../../packages/project-config/src/app-registry.js';
import { runGroupWorkers } from './group-workers.js';
import { verifyGroupWorkerPackage } from './group-worker-package-integrity.js';

export function readGroupCIRequest(env = process.env, root = findRepositoryRoot()) {
  const action = env.WORKER_ACTION,
    group = env.WORKER_GROUP,
    expected = env.WORKER_EXPECTED_DEPLOYMENT;
  if (!['prepare', 'publish', 'rollback', 'reconcile'].includes(action))
    throw new Error('独立WorkerのCI操作が不正です');
  if (
    !/^[a-z0-9][a-z0-9-]*$/.test(group ?? '') ||
    !discoverApps(root).groups.some((g) => g.id === group)
  )
    throw new Error('独立WorkerのCIグループが不正です');
  if (
    expected !== 'none' &&
    !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(expected ?? '')
  )
    throw new Error('確認済みの基点deploymentを指定してください');
  const expectedPackage = env.WORKER_EXPECTED_PACKAGE_SHA || '';
  if (
    (expectedPackage && !/^[a-f0-9]{64}$/.test(expectedPackage)) ||
    (['publish', 'rollback'].includes(action) && !expectedPackage)
  )
    throw new Error('準備runで確認した梱包SHAを指定してください');
  const previous = env.WORKER_PREVIOUS_RUN || '',
    rollback = env.WORKER_ROLLBACK_RUN || '';
  if (
    [previous, rollback].some(
      (id) => id && (!/^[1-9][0-9]*$/.test(id) || !Number.isSafeInteger(Number(id)))
    )
  )
    throw new Error('引継ぎ元run IDが不正です');
  if (
    (Boolean(rollback) ||
      action === 'rollback' ||
      action === 'reconcile' ||
      (action === 'publish' && expected !== 'none')) &&
    !previous
  )
    throw new Error('直前の実行IDを指定してください');
  if (
    (action === 'rollback' && !rollback) ||
    (rollback && !['prepare', 'rollback'].includes(action))
  )
    throw new Error('復旧操作だけに復旧対象run IDを指定してください');
  return { action, group, expected, expectedPackage, previous, rollback };
}

export function readGroupCIArtifact(directory, group) {
  const metadata = JSON.parse(fs.readFileSync(path.join(directory, 'release-info.json'), 'utf8'));
  if (
    metadata.schemaVersion !== 1 ||
    metadata.group !== group ||
    !/^[a-f0-9]{64}$/.test(metadata.packageSha256) ||
    !/^[a-f0-9]{40}$/.test(metadata.commit)
  )
    throw new Error('引継ぎ梱包の記録が不正です');
  const pkg = {
    directory: path.resolve(directory, 'package'),
    packageSha256: metadata.packageSha256,
  };
  const verified = verifyGroupWorkerPackage({ ...pkg, includeRelease: true });
  if (verified.release.groupId !== group || verified.revision !== metadata.revision)
    throw new Error('引継ぎ梱包のグループまたはrevisionが一致しません');
  return { ...pkg, metadata };
}

export async function runGroupWorkersCI(
  command,
  { env = process.env, root = findRepositoryRoot() } = {}
) {
  if (!['validate', 'package', 'publish'].includes(command))
    throw new Error('CI補助操作が不正です');
  const request = readGroupCIRequest(env, root);
  if (command === 'validate') return request;
  const artifact = path.join(root, '.tmp/worker-artifact');
  const previousDirectory = path.join(root, '.tmp/previous-worker-artifact');
  if (command === 'package') {
    const previous = request.previous
      ? readGroupCIArtifact(previousDirectory, request.group)
      : undefined;
    if (!/^[a-f0-9]{40}$/.test(env.GITHUB_SHA ?? '')) throw new Error('CIコミットSHAが不正です');
    if (fs.existsSync(artifact)) throw new Error('今回の梱包先が既に存在します');
    fs.mkdirSync(artifact, { recursive: true });
    const directory = path.join(artifact, 'package');
    let result;
    try {
      if (request.action === 'reconcile') {
        fs.cpSync(previous.directory, directory, {
          recursive: true,
          errorOnExist: true,
          force: false,
        });
        result = verifyGroupWorkerPackage({ directory, packageSha256: previous.packageSha256 });
        result.packageSha256 = previous.packageSha256;
      } else if (request.rollback) {
        const target = readGroupCIArtifact(
          path.join(root, '.tmp/rollback-worker-artifact'),
          request.group
        );
        result = await runGroupWorkers([
          'rollback-package',
          `--target=${target.directory}`,
          `--target-sha=${target.packageSha256}`,
          `--previous=${previous.directory}`,
          `--previous-sha=${previous.packageSha256}`,
          `--destination=${directory}`,
        ]);
      } else {
        const args = [
          'package',
          `--group=${request.group}`,
          `--source=${path.join(root, '.tmp/group-outputs', request.group)}`,
          `--destination=${directory}`,
          '--preview',
        ];
        if (previous)
          args.push(`--previous=${previous.directory}`, `--previous-sha=${previous.packageSha256}`);
        result = await runGroupWorkers(args, { root });
      }
      if (request.expectedPackage && result.packageSha256 !== request.expectedPackage)
        throw new Error('確認済みの梱包SHAと再生成結果が一致しません');
      const metadata = {
        schemaVersion: 1,
        group: request.group,
        commit: env.GITHUB_SHA,
        revision: result.revision,
        packageSha256: result.packageSha256,
        action: request.action,
        previousRun: request.previous || null,
        rollbackRun: request.rollback || null,
      };
      fs.writeFileSync(
        path.join(artifact, 'release-info.json'),
        JSON.stringify(metadata, null, 2) + '\n'
      );
      readGroupCIArtifact(artifact, request.group);
      if (env.GITHUB_OUTPUT)
        fs.appendFileSync(env.GITHUB_OUTPUT, `package_sha=${metadata.packageSha256}\n`);
      return metadata;
    } catch (error) {
      fs.rmSync(artifact, { recursive: true, force: true });
      throw error;
    }
  }
  if (request.action === 'prepare') throw new Error('準備のみの要求では公開できません');
  const pkg = readGroupCIArtifact(artifact, request.group);
  if (env.WORKER_PACKAGE_SHA !== pkg.packageSha256)
    throw new Error('準備jobの外部SHAが一致しません');
  const state = path.join(root, '.tmp/worker-state');
  if (request.previous && !fs.existsSync(state))
    throw new Error('前回の配置記録が復元されていません');
  const args = [
    request.action === 'reconcile' ? 'reconcile' : 'publish',
    `--directory=${pkg.directory}`,
    `--sha=${pkg.packageSha256}`,
    `--state=${state}`,
  ];
  if (request.action !== 'reconcile') args.push(`--expected-deployment=${request.expected}`);
  const result = await runGroupWorkers(args, { root });
  fs.writeFileSync(path.join(state, 'ci-result.json'), JSON.stringify(result, null, 2) + '\n');
  return result;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    console.log(JSON.stringify(await runGroupWorkersCI(process.argv[2]), null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
