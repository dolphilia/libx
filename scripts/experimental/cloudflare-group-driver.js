import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { groupWorkerBootstrap } from './group-worker-bootstrap.js';
import { verifyGroupWorkerPackage } from './group-worker-package-integrity.js';
import {
  createCloudflareGroupStateReader,
  verifyGroupWorkerConfiguration,
} from './cloudflare-group-state.js';
import { createWranglerGroupVersionClient } from './wrangler-group-versions.js';
import { groupVersionOrigin, verifyGroupHttpFiles } from './verify-group-http.js';

const digest = (value) => crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');

/** Connect the release orchestrator to Cloudflare. No action runs on import. */
export function createCloudflareGroupDriver({
  directory,
  packageSha256,
  accountId,
  apiToken,
  stateDirectory,
  reader,
  client,
  verifyHttp = verifyGroupHttpFiles,
}) {
  directory = path.resolve(directory);
  const seal = () => verifyGroupWorkerPackage({ directory, packageSha256, includeRelease: true });
  const { release } = seal();
  stateDirectory = path.resolve(stateDirectory);
  if (stateDirectory === directory || stateDirectory.startsWith(directory + path.sep))
    throw new Error('配置記録を梱包内へ保存できません');
  for (let parent = stateDirectory; ; parent = path.dirname(parent)) {
    if (fs.existsSync(parent) && fs.lstatSync(parent).isSymbolicLink())
      throw new Error('配置記録の保存先にsymlinkは使用できません');
    if (path.dirname(parent) === parent) break;
  }
  const receipts = path.join(stateDirectory, 'receipts');
  fs.mkdirSync(receipts, { recursive: true });
  if (fs.lstatSync(receipts).isSymbolicLink()) throw new Error('配置記録の保存先が不正です');
  reader ??= createCloudflareGroupStateReader({ accountId, apiToken });
  client ??= createWranglerGroupVersionClient({
    accountId,
    apiToken,
    workDirectory: path.join(stateDirectory, 'operations'),
    wranglerVersion: release.delivery.wranglerVersion,
  });
  const configFor = (name) =>
    JSON.parse(fs.readFileSync(path.join(directory, name, 'wrangler.jsonc'), 'utf8'));
  const routerConfig = configFor('router');
  const configs = new Map(release.units.map((unit) => [unit.service, configFor(unit.service)]));
  for (const config of [...configs.values(), routerConfig]) {
    if (
      config.preview_urls !== true ||
      config.routes ||
      config.route ||
      config.account_id ||
      config.env
    )
      throw new Error('外部検証用のプレビュー設定を指定してください');
  }
  if (routerConfig.workers_dev !== true)
    throw new Error('検証入口のworkers.devを有効にしてください');
  const receiptPath = (service, versionId) => {
    if (!/^libx-[a-z0-9-]+$/.test(service) || (versionId && !/^[a-f0-9-]{36}$/i.test(versionId)))
      throw new Error('配置記録の識別子が不正です');
    return path.join(receipts, `${service}${versionId ? '-' + versionId : ''}.json`);
  };
  const load = (service, versionId) => {
    const file = receiptPath(service, versionId);
    if (!fs.existsSync(file)) return null;
    if (fs.lstatSync(file).isSymbolicLink()) throw new Error('配置記録にsymlinkは使用できません');
    const value = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (
      value.service !== service ||
      value.accountId !== accountId ||
      (versionId && value.versionId !== versionId)
    )
      throw new Error('配置記録の対象が一致しません');
    groupVersionOrigin(value.previewUrl, service, value.versionId);
    return value;
  };
  const save = (receipt, isRouter = false) => {
    const target = receiptPath(receipt.service, isRouter ? receipt.versionId : undefined);
    fs.writeFileSync(target, JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
  };
  const matchReceipt = (remote, receipt) => {
    if (
      !remote ||
      remote.versionId !== receipt.versionId ||
      remote.revision !== receipt.revision ||
      remote.scriptEtag !== receipt.scriptEtag
    )
      throw new Error(`配置済み版と記録が一致しません: ${receipt.service}`);
  };
  const checkConfig = (remote, receipt, config) => {
    matchReceipt(remote, receipt);
    if (digest(config) !== receipt.configSha256)
      throw new Error('配置済み設定と梱包の記録が一致しません');
    verifyGroupWorkerConfiguration(remote.details, config);
  };
  const bootstrapDirectory = path.join(stateDirectory, 'bootstrap');
  fs.mkdirSync(bootstrapDirectory, { recursive: true });
  if (fs.lstatSync(bootstrapDirectory).isSymbolicLink())
    throw new Error('初期作成記録の保存先が不正です');
  const bootstrapPath = (service) => path.join(bootstrapDirectory, `${service}.json`);
  const loadBootstrap = (service) => {
    const file = bootstrapPath(service);
    if (!fs.existsSync(file)) return null;
    if (fs.lstatSync(file).isSymbolicLink()) throw new Error('初期作成記録が不正です');
    const receipt = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (receipt.accountId !== accountId || receipt.service !== service)
      throw new Error('初期作成記録の対象が一致しません');
    return receipt;
  };
  const readReleaseActive = async (service) => {
    const active = await reader.readActive(service);
    const bootstrap = loadBootstrap(service);
    if (active && bootstrap && active.versionId === bootstrap.versionId) {
      matchReceipt(active, bootstrap);
      const config = service === routerConfig.name ? routerConfig : configs.get(service);
      const expected = groupWorkerBootstrap(config);
      if (bootstrap.revision !== expected.revision) throw new Error('初期作成コードが一致しません');
      verifyGroupWorkerConfiguration(active.details, expected.config);
      return null;
    }
    return active;
  };
  const ensureInitialized = async (service, workerDirectory, config) => {
    if (await reader.readActive(service)) {
      const visible = await readReleaseActive(service);
      if (visible) {
        const receipt = load(
          service,
          service === routerConfig.name ? visible.versionId : undefined
        );
        if (!receipt) throw new Error('記録のない既存Workerを初期化できません');
        matchReceipt(visible, receipt);
      }
      return;
    }
    if (loadBootstrap(service) || (await reader.readVersions(service)).length)
      throw new Error('初期作成の状態が未確定です');
    seal();
    const created = await client.initialize(workerDirectory);
    const remote = await reader.readVersion(service, created.versionId);
    const expected = groupWorkerBootstrap(config);
    if (remote.revision !== expected.revision) throw new Error('初期作成版が一致しません');
    verifyGroupWorkerConfiguration(remote.details, expected.config);
    const receipt = {
      accountId,
      service,
      versionId: remote.versionId,
      revision: remote.revision,
      scriptEtag: remote.scriptEtag,
    };
    fs.mkdirSync(bootstrapDirectory, { recursive: true });
    fs.writeFileSync(bootstrapPath(service), JSON.stringify(receipt, null, 2) + '\n', {
      flag: 'wx',
    });
    matchReceipt(await reader.readActive(service), receipt);
  };
  const upload = async (service, workerDirectory, revision, config, isRouter = false) => {
    seal();
    await ensureInitialized(service, workerDirectory, config);
    const uploaded = await client.upload(workerDirectory, revision);
    const origin = groupVersionOrigin(uploaded.previewUrl, service, uploaded.versionId);
    seal();
    const remote = await reader.readVersion(service, uploaded.versionId);
    if (remote.revision !== revision) throw new Error('アップロードしたrevisionが一致しません');
    verifyGroupWorkerConfiguration(remote.details, config);
    const receipt = {
      schemaVersion: 1,
      accountId,
      service,
      versionId: uploaded.versionId,
      revision,
      scriptEtag: remote.scriptEtag,
      previewUrl: origin,
      configSha256: digest(config),
      packageSha256,
    };
    save(receipt, isRouter);
    return receipt;
  };
  const checkGroup = (groupId) => {
    if (groupId !== release.groupId) throw new Error('公開対象グループが一致しません');
  };
  const readActive = async (groupId) => {
    checkGroup(groupId);
    const active = await readReleaseActive(routerConfig.name);
    if (active === null) return null;
    const receipt = load(routerConfig.name, active.versionId);
    if (!receipt) throw new Error('稼働中の入口に対応する配置記録がありません');
    matchReceipt(active, receipt);
    return {
      deploymentId: active.deploymentId,
      versionId: active.versionId,
      revision: active.revision,
    };
  };
  return {
    readActive,
    async readUnit(service) {
      const active = await readReleaseActive(service);
      if (active === null) return null;
      const receipt = load(service);
      if (!receipt) throw new Error(`配置記録のない既存Workerは再利用できません: ${service}`);
      matchReceipt(active, receipt);
      return active;
    },
    async uploadUnit(unit, workerDirectory) {
      if (workerDirectory !== path.join(directory, unit.service) || !configs.has(unit.service))
        throw new Error('単位の配置元が一致しません');
      if (await readReleaseActive(unit.service)) throw new Error('既存単位を上書きできません');
      let receipt = load(unit.service);
      if (!receipt) {
        if (
          (await reader.readVersions(unit.service)).some(
            (version) => version.id !== loadBootstrap(unit.service)?.versionId
          )
        )
          throw new Error('記録のないアップロード済み版があります');
        receipt = await upload(
          unit.service,
          workerDirectory,
          unit.revision,
          configs.get(unit.service)
        );
      } else {
        const remote = await reader.readVersion(unit.service, receipt.versionId);
        if (receipt.revision !== unit.revision)
          throw new Error('再開する単位のrevisionが一致しません');
        checkConfig(remote, receipt, configs.get(unit.service));
      }
      // No automatic mutation retry. If this response is lost, the next read can
      // positively confirm this recorded immutable version rather than reupload it.
      await client.deploy(workerDirectory, receipt.versionId);
    },
    async verifyUnit(unit, deployed) {
      const receipt = load(unit.service);
      if (!receipt || receipt.revision !== unit.revision)
        throw new Error('照合する単位の記録がありません');
      checkConfig(deployed, receipt, configs.get(unit.service));
      await verifyHttp({
        origin: receipt.previewUrl,
        files: unit.files.map((file) => ({ ...file, url: `${release.publicBase}/${file.path}` })),
      });
      matchReceipt(await reader.readActive(unit.service), receipt);
    },
    async verifyRetainedAsset(asset, deployed) {
      const receipt = load(asset.service);
      if (!receipt || receipt.revision !== asset.revision)
        throw new Error('保持アセットの配置記録がありません');
      matchReceipt(deployed, receipt);
      await verifyHttp({ origin: receipt.previewUrl, files: [{ ...asset, url: asset.assetPath }] });
      matchReceipt(await reader.readActive(asset.service), receipt);
    },
    async prepareRouter(candidateRelease, routerDirectory) {
      if (
        candidateRelease.revision !== release.revision ||
        routerDirectory !== path.join(directory, 'router')
      )
        throw new Error('入口の配置元が一致しません');
      return upload(routerConfig.name, routerDirectory, release.revision, routerConfig, true);
    },
    async verifyRouter(candidateRelease, candidate) {
      if (candidateRelease.revision !== release.revision)
        throw new Error('入口の照合対象が一致しません');
      const receipt = load(routerConfig.name, candidate.versionId);
      if (!receipt || receipt.revision !== release.revision)
        throw new Error('入口候補の配置記録がありません');
      checkConfig(
        await reader.readVersion(routerConfig.name, candidate.versionId),
        receipt,
        routerConfig
      );
      await verifyHttp({
        origin: receipt.previewUrl,
        revision: release.revision,
        files: [...release.units.flatMap((unit) => unit.files), ...(release.retainedAssets ?? [])],
      });
    },
    async promoteRouter(groupId, candidate, base) {
      checkGroup(groupId);
      const current = await readActive(groupId);
      if ((current?.deploymentId ?? null) !== (base?.deploymentId ?? null))
        throw new Error('公開直前に基点が変更されました');
      const receipt = load(routerConfig.name, candidate.versionId);
      if (!receipt || receipt.revision !== release.revision)
        throw new Error('入口候補の記録が一致しません');
      seal();
      await client.deploy(path.join(directory, 'router'), candidate.versionId);
    },
  };
}
