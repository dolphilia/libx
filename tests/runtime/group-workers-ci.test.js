import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  readGroupCIRequest,
  readGroupCIArtifact,
  runGroupWorkersCI,
} from '../../scripts/experimental/group-workers-ci.js';
import { canonicalOutputPath } from '../../scripts/group-output.js';

function fixture(t) {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-worker-ci-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (name, value) => {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, typeof value === 'string' ? value : JSON.stringify(value));
  };
  write('apps/example/group.config.jsonc', {
    schemaVersion: 1,
    name: { en: 'Example' },
    entry: 'overview',
    order: ['overview', 'web'],
  });
  for (const child of ['overview', 'web']) {
    write(`apps/example/${child}/package.json`, { name: `apps-example-${child}` });
    write(`apps/example/${child}/astro.config.mjs`, 'export default {};');
    write(`apps/example/${child}/src/config/project.config.jsonc`, {
      paths: { projectSlug: child },
      versioning: { versions: [{ id: 'v1', name: 'Version 1' }] },
    });
  }
  const files = [
    ['index.html', 'example/overview'],
    ['404.html', 'example/overview'],
    ['v1/en/web/index.html', 'example/web'],
    ['navigation/pages.json', 'group:example'],
  ].map(([name, appId]) => {
    write(`.tmp/group-outputs/example/site/${name}`, name);
    return {
      path: name,
      canonical: canonicalOutputPath(name),
      appId,
      bytes: Buffer.byteLength(name),
      sha256: crypto.createHash('sha256').update(name).digest('hex'),
      contentType: name.endsWith('.html') ? 'text/html' : 'application/json',
    };
  });
  write('.tmp/group-outputs/example/manifest.json', {
    schemaVersion: 1,
    groupId: 'example',
    publicBase: '/docs/example',
    files,
  });
  const env = {
    WORKER_ACTION: 'prepare',
    WORKER_GROUP: 'example',
    WORKER_EXPECTED_DEPLOYMENT: 'none',
    GITHUB_SHA: 'a'.repeat(40),
    GITHUB_OUTPUT: path.join(root, 'outputs'),
  };
  return { root, env, artifact: path.join(root, '.tmp/worker-artifact') };
}

test('CIはグループ・基点・引継ぎID・復旧指定の矛盾を事前拒否する', (t) => {
  const f = fixture(t);
  assert.equal(readGroupCIRequest(f.env, f.root).action, 'prepare');
  for (const changes of [
    { WORKER_GROUP: '../other' },
    { WORKER_ACTION: 'unknown' },
    { WORKER_PREVIOUS_RUN: '1;echo bad' },
    { WORKER_ACTION: 'reconcile' },
    { WORKER_ACTION: 'rollback', WORKER_PREVIOUS_RUN: '1' },
    { WORKER_ROLLBACK_RUN: '2' },
    {
      WORKER_ACTION: 'publish',
      WORKER_EXPECTED_DEPLOYMENT: '11111111-1111-1111-1111-111111111111',
    },
  ])
    assert.throws(() => readGroupCIRequest({ ...f.env, ...changes }, f.root));
});

test('CIが実際の所有目録から梱包し、外部SHA不一致では公開へ進まない', async (t) => {
  const f = fixture(t);
  const metadata = await runGroupWorkersCI('package', f);
  assert.equal(readGroupCIArtifact(f.artifact, 'example').packageSha256, metadata.packageSha256);
  assert.equal(
    fs.readFileSync(f.env.GITHUB_OUTPUT, 'utf8'),
    `package_sha=${metadata.packageSha256}\n`
  );
  await assert.rejects(
    runGroupWorkersCI('publish', {
      root: f.root,
      env: {
        ...f.env,
        WORKER_ACTION: 'publish',
        WORKER_EXPECTED_PACKAGE_SHA: metadata.packageSha256,
        WORKER_PACKAGE_SHA: '0'.repeat(64),
      },
    }),
    /外部SHA/
  );
  await assert.rejects(runGroupWorkersCI('package', f), /既に存在/);
});

test('未確定照合用CIは前回の梱包を再生成せず検証して引き継ぐ', async (t) => {
  const f = fixture(t);
  const before = await runGroupWorkersCI('package', f);
  const previous = path.join(f.root, '.tmp/previous-worker-artifact');
  fs.cpSync(f.artifact, previous, { recursive: true });
  fs.rmSync(f.artifact, { recursive: true });
  const after = await runGroupWorkersCI('package', {
    root: f.root,
    env: {
      ...f.env,
      WORKER_ACTION: 'reconcile',
      WORKER_PREVIOUS_RUN: '1',
      GITHUB_SHA: 'b'.repeat(40),
    },
  });
  assert.equal(after.packageSha256, before.packageSha256);
  assert.equal(after.revision, before.revision);
  const metadata = JSON.parse(fs.readFileSync(path.join(f.artifact, 'release-info.json')));
  metadata.group = 'other';
  fs.writeFileSync(path.join(f.artifact, 'release-info.json'), JSON.stringify(metadata));
  assert.throws(() => readGroupCIArtifact(f.artifact, 'example'), /不正/);
});

test('確認済み梱包SHAと異なる再生成結果は外部操作前に破棄する', async (t) => {
  const f = fixture(t);
  await assert.rejects(
    runGroupWorkersCI('package', {
      root: f.root,
      env: { ...f.env, WORKER_ACTION: 'publish', WORKER_EXPECTED_PACKAGE_SHA: '0'.repeat(64) },
    }),
    /確認済みの梱包SHA/
  );
  assert.equal(fs.existsSync(f.artifact), false);
});
