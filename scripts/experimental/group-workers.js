#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  discoverApps,
  findRepositoryRoot,
} from '../../packages/project-config/src/app-registry.js';
import { readGroupWorkerContract } from './group-worker-contract.js';
import { packageGroupWorkers } from './package-group-workers.js';
import { packageGroupRollback } from './package-group-rollback.js';
import { verifyGroupWorkerPackage } from './group-worker-package-integrity.js';
import { createCloudflareGroupDriver } from './cloudflare-group-driver.js';
import { publishGroupRelease, reconcileGroupRelease } from './publish-group-release.js';

const specifications = {
  package: ['group', 'source', 'destination', 'previous', 'previous-sha', 'preview'],
  'rollback-package': ['target', 'target-sha', 'previous', 'previous-sha', 'destination'],
  verify: ['directory', 'sha'],
  status: ['directory', 'sha', 'state'],
  publish: ['directory', 'sha', 'state', 'expected-deployment'],
  reconcile: ['directory', 'sha', 'state'],
};
const help = `独立Worker配信の実験用CLI（統合Pagesとは別の配信先）
node scripts/experimental/group-workers.js <操作> --key=value
  package --group=awesome --source=.tmp/group-outputs/awesome --destination=<新規梱包先> --preview
          [--previous=<旧梱包> --previous-sha=<外部SHA-256>]
  rollback-package --target=<復旧対象梱包> --target-sha=<SHA> --previous=<現在梱包> --previous-sha=<SHA> --destination=<新規梱包先>
  verify --directory=<梱包> --sha=<外部SHA-256>
  status --directory=<梱包> --sha=<外部SHA-256> --state=<永続状態ディレクトリ>
  publish --directory=<梱包> --sha=<外部SHA-256> --state=<永続状態ディレクトリ> --expected-deployment=<確認済みID|none>
  reconcile --directory=<梱包> --sha=<外部SHA-256> --state=<永続状態ディレクトリ>
status / publish / reconcileはCLOUDFLARE_ACCOUNT_IDとCLOUDFLARE_API_TOKENを環境から読みます。
公開前にstatusの基点を確認し、全CI公開経路を同じグループ単位で直列化してください。
梱包時のSHAは出力結果から別途保存し、同じ梱包ディレクトリから期待値を読み直さないでください。`;

export async function runGroupWorkers(args, { root } = {}) {
  if (!args.length || args.includes('--help')) return { help };
  const [command, ...rest] = args;
  if (!specifications[command]) throw new Error('未知の操作です。--helpで確認してください');
  const options = {};
  for (const arg of rest) {
    const match = /^--([a-z-]+)(?:=(.+))?$/.exec(arg);
    if (
      !match ||
      !specifications[command].includes(match[1]) ||
      Object.hasOwn(options, match[1]) ||
      (match[1] !== 'preview' && !match[2]) ||
      (match[1] === 'preview' && match[2])
    )
      throw new Error(`不正・重複または未知の引数です: ${arg}`);
    options[match[1]] = match[2] ?? true;
  }
  const required = (...names) => {
    for (const name of names) if (!options[name]) throw new Error(`--${name}を指定してください`);
  };
  const previous = () => {
    if (!options.previous && !options['previous-sha']) return undefined;
    required('previous', 'previous-sha');
    return { directory: path.resolve(options.previous), packageSha256: options['previous-sha'] };
  };
  const summary = (result) => ({
    revision: result.revision,
    packageSha256: result.packageSha256,
    units: result.units.length,
    retainedAssets: result.retainedAssets.length,
  });
  if (command === 'package') {
    required('group', 'source', 'destination');
    const group = discoverApps(root ?? findRepositoryRoot()).groups.find(
      (group) => group.id === options.group
    );
    if (!group) throw new Error('グループが見つかりません');
    const source = path.resolve(options.source);
    const manifest = JSON.parse(fs.readFileSync(path.join(source, 'manifest.json'), 'utf8'));
    const delivery = readGroupWorkerContract();
    if (options.preview) {
      delivery.unit.config.preview_urls = true;
      delivery.router.config.preview_urls = true;
      delivery.router.config.workers_dev = true;
    }
    return summary(
      packageGroupWorkers({
        manifest,
        group,
        source: path.join(source, 'site'),
        destination: options.destination,
        previous: previous(),
        delivery,
      })
    );
  }
  if (command === 'rollback-package') {
    required('target', 'target-sha', 'previous', 'previous-sha', 'destination');
    return summary(
      packageGroupRollback({
        target: { directory: path.resolve(options.target), packageSha256: options['target-sha'] },
        previous: previous(),
        destination: options.destination,
      })
    );
  }
  required('directory', 'sha');
  const pkg = { directory: path.resolve(options.directory), packageSha256: options.sha };
  if (command === 'verify') return verifyGroupWorkerPackage(pkg);
  required('state');
  // Validate the mutation's base before reading credentials or contacting Cloudflare.
  if (command === 'publish') {
    required('expected-deployment');
    if (
      options['expected-deployment'] !== 'none' &&
      !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(
        options['expected-deployment']
      )
    )
      throw new Error('確認済みdeployment IDかnoneを指定してください');
  }
  const stateDirectory = path.resolve(options.state);
  const driver = createCloudflareGroupDriver({
    ...pkg,
    stateDirectory,
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    apiToken: process.env.CLOUDFLARE_API_TOKEN,
  });
  const release = verifyGroupWorkerPackage({ ...pkg, includeRelease: true }).release;
  if (command === 'status') {
    const active = await driver.readActive(release.groupId);
    return active
      ? {
          deploymentId: active.deploymentId,
          versionId: active.versionId,
          revision: active.revision,
        }
      : { deploymentId: null };
  }
  if (command === 'reconcile')
    return reconcileGroupRelease({ stateDirectory, groupId: release.groupId, driver });
  return publishGroupRelease({
    ...pkg,
    stateDirectory,
    expectedDeploymentId:
      options['expected-deployment'] === 'none' ? null : options['expected-deployment'],
    driver,
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const result = await runGroupWorkers(process.argv.slice(2));
    console.log(result.help ?? JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
