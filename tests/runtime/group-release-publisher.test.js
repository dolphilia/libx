import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { spawnSync } from 'node:child_process';
import { packageGroupWorkers } from '../../scripts/experimental/package-group-workers.js';
import { packageGroupRollback } from '../../scripts/experimental/package-group-rollback.js';
import {
  publishGroupRelease,
  reconcileGroupRelease,
} from '../../scripts/experimental/publish-group-release.js';
import { canonicalOutputPath } from '../../scripts/group-output.js';

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-publish-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const group = { id: 'docs', publicBase: '/docs/docs', memberIds: ['docs/a', 'docs/b'] };
  const makePackage = (label, content = 'first', previous) => {
    const source = path.join(root, `source-${label}`);
    const directory = path.join(root, `release-${label}`);
    const entries = [
      ['index.html', 'docs/a', 'entry'],
      ['404.html', 'docs/a', 'not found'],
      ['v1/en/a/index.html', 'docs/a', 'unchanged'],
      ['v1/en/b/index.html', 'docs/b', content],
      ['navigation/pages.json', 'group:docs', '[]'],
    ];
    const files = entries.map(([name, appId, body]) => {
      const target = path.join(source, name);
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.writeFileSync(target, body);
      return {
        path: name,
        canonical: canonicalOutputPath(name),
        appId,
        bytes: Buffer.byteLength(body),
        sha256: crypto.createHash('sha256').update(body).digest('hex'),
        contentType: name.endsWith('.html') ? 'text/html' : 'application/json',
      };
    });
    const release = packageGroupWorkers({
      manifest: { schemaVersion: 1, groupId: group.id, publicBase: group.publicBase, files },
      group,
      source,
      destination: directory,
      previous,
    });
    return { directory, packageSha256: release.packageSha256, release };
  };
  const units = new Map();
  const calls = [];
  let active = null;
  const driver = {
    async readActive() {
      return active;
    },
    async readUnit(service) {
      return units.get(service) ?? null;
    },
    async uploadUnit(unit) {
      assert.equal(units.has(unit.service), false, '既存の内容固定serviceを上書きしない');
      calls.push(`upload:${unit.owner}`);
      units.set(unit.service, { revision: unit.revision });
    },
    async verifyUnit(unit) {
      calls.push(`verify:${unit.owner}`);
    },
    async verifyRetainedAsset() {},
    async prepareRouter(release) {
      calls.push('prepare-router');
      return { versionId: crypto.randomUUID(), revision: release.revision };
    },
    async verifyRouter() {
      calls.push('verify-router');
    },
    async promoteRouter(groupId, candidate) {
      calls.push('promote-router');
      active = { ...candidate, deploymentId: crypto.randomUUID() };
    },
  };
  return {
    root,
    group,
    makePackage,
    driver,
    units,
    calls,
    get active() {
      return active;
    },
    set active(value) {
      active = value;
    },
    publish(pkg, expectedDeploymentId = active?.deploymentId ?? null) {
      return publishGroupRelease({
        ...pkg,
        stateDirectory: path.join(root, 'state'),
        expectedDeploymentId,
        driver,
      });
    },
  };
}

test('子を先に配置・照合し、入口を最後に切り替え、一子更新では他を再配置しない', async (t) => {
  const f = fixture(t);
  const first = f.makePackage('first');
  const result = await f.publish(first);
  assert.equal(result.status, 'published');
  assert.equal(result.uploaded.length, 3);
  assert.deepEqual(f.calls.slice(-3), ['prepare-router', 'verify-router', 'promote-router']);
  f.calls.length = 0;
  const second = f.makePackage('second', 'second', first);
  const updated = await f.publish(second);
  assert.equal(updated.uploaded.length, 1);
  assert.equal(updated.reused.length, 2);
  assert.deepEqual(
    f.calls.filter((c) => c.startsWith('upload:')),
    ['upload:docs/b']
  );
  assert.equal(f.active.revision, second.release.revision);
});

test('子の配置失敗と入口検査失敗では既存入口を維持し、配置済み単位は再利用する', async (t) => {
  const f = fixture(t);
  const first = f.makePackage('first');
  await f.publish(first);
  const before = structuredClone(f.active);
  const second = f.makePackage('second', 'second', first);
  const verifyUnit = f.driver.verifyUnit;
  f.driver.verifyUnit = async (unit) => {
    if (unit.owner === 'docs/b') throw new Error('unit verification failed');
  };
  await assert.rejects(f.publish(second), /unit verification/);
  assert.deepEqual(f.active, before);
  f.driver.verifyUnit = verifyUnit;
  const verifyRouter = f.driver.verifyRouter;
  f.driver.verifyRouter = async () => {
    throw new Error('router verification failed');
  };
  await assert.rejects(f.publish(second), /router verification/);
  assert.deepEqual(f.active, before);
  f.driver.verifyRouter = verifyRouter;
  const result = await f.publish(second);
  assert.equal(result.uploaded.length, 0);
  assert.equal(result.reused.length, 3);
});

test('同時公開をlockで拒否し、古い基点からの遅延公開も拒否する', async (t) => {
  const f = fixture(t);
  const pkg = f.makePackage('first');
  let release;
  let entered;
  const ready = new Promise((resolve) => {
    entered = resolve;
  });
  const pause = new Promise((resolve) => {
    release = resolve;
  });
  const original = f.driver.verifyRouter;
  f.driver.verifyRouter = async () => {
    entered();
    await pause;
  };
  const publishing = f.publish(pkg, null);
  await ready;
  await assert.rejects(f.publish(pkg, null), /lock/);
  const child = spawnSync(
    process.execPath,
    [
      '--input-type=module',
      '-e',
      `const { publishGroupRelease } = await import(process.argv[1]);
     try { await publishGroupRelease({ ...JSON.parse(process.argv[2]), driver: { readActive() { throw new Error('unexpected driver call'); } } }); process.exitCode = 2; }
     catch (error) { process.stdout.write(error.message); process.exitCode = error.message.includes('lock') ? 0 : 1; }`,
      new URL('../../scripts/experimental/publish-group-release.js', import.meta.url).href,
      JSON.stringify({
        directory: pkg.directory,
        packageSha256: pkg.packageSha256,
        stateDirectory: path.join(f.root, 'state'),
        expectedDeploymentId: null,
      }),
    ],
    { encoding: 'utf8', timeout: 10000 }
  );
  assert.equal(child.status, 0, child.stderr || child.stdout);
  assert.match(child.stdout, /lock/);
  release();
  await publishing;
  f.driver.verifyRouter = original;
  await assert.rejects(f.publish(pkg, null), /基点/);
});

test('照合中に別の公開が進んだ場合は入口を切り替えない', async (t) => {
  const f = fixture(t);
  const pkg = f.makePackage('first');
  f.driver.verifyRouter = async () => {
    f.active = { deploymentId: 'other', versionId: 'other', revision: '0'.repeat(64) };
  };
  await assert.rejects(f.publish(pkg, null), /基点/);
  assert.equal(f.calls.includes('promote-router'), false);
  assert.equal(f.active.deploymentId, 'other');
});

test('切替後の応答喪失は再送せず未確定を保持し、配置先の肯定的な証拠で解消する', async (t) => {
  const f = fixture(t);
  const pkg = f.makePackage('first');
  const promote = f.driver.promoteRouter;
  f.driver.promoteRouter = async (...args) => {
    await promote(...args);
    throw new Error('response lost');
  };
  await assert.rejects(f.publish(pkg), /response lost/);
  await assert.rejects(f.publish(pkg), /未確定/);
  assert.equal(f.calls.filter((c) => c === 'promote-router').length, 1);
  const actual = f.active;
  f.active = null;
  await assert.rejects(
    reconcileGroupRelease({
      stateDirectory: path.join(f.root, 'state'),
      groupId: f.group.id,
      driver: f.driver,
    }),
    /確定できません/
  );
  f.active = actual;
  const result = await reconcileGroupRelease({
    stateDirectory: path.join(f.root, 'state'),
    groupId: f.group.id,
    driver: f.driver,
  });
  assert.equal(result.status, 'published-after-reconciliation');
  assert.equal(result.active.versionId, actual.versionId);
});

test('配置済みserviceの内容不一致と梱包改変を入口切替前に拒否する', async (t) => {
  const f = fixture(t);
  const pkg = f.makePackage('first');
  const unit = pkg.release.units[0];
  f.units.set(unit.service, { revision: 'different' });
  await assert.rejects(f.publish(pkg), /単位が一致/);
  assert.equal(f.active, null);
  f.units.clear();
  f.driver.verifyUnit = async () => {
    fs.appendFileSync(path.join(pkg.directory, 'router/index.js'), '\n// changed');
  };
  await assert.rejects(f.publish(pkg), /変更/);
  assert.equal(f.calls.includes('prepare-router'), false);
});

test('復旧梱包も現在の基点を照合して入口を切り替え、旧単位を再利用する', async (t) => {
  const f = fixture(t);
  const first = f.makePackage('first');
  await f.publish(first);
  const oldDeployment = f.active.deploymentId;
  const second = f.makePackage('second', 'second', first);
  await f.publish(second);
  const directory = path.join(f.root, 'rollback');
  const restored = packageGroupRollback({
    target: first,
    previous: second,
    destination: directory,
  });
  const pkg = { directory, packageSha256: restored.packageSha256 };
  await assert.rejects(f.publish(pkg, oldDeployment), /基点/);
  const result = await f.publish(pkg);
  assert.equal(result.uploaded.length, 0);
  assert.equal(result.reused.length, 3);
  assert.equal(f.active.revision, first.release.revision);
});
