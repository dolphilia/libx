import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  createWranglerGroupVersionClient,
  parseGroupVersionOutput,
} from '../../scripts/experimental/wrangler-group-versions.js';
const versionId = '11111111-1111-1111-1111-111111111111';
const deploymentId = '22222222-2222-2222-2222-222222222222';
const upload = {
  type: 'version-upload',
  version: 1,
  worker_name: 'libx-test',
  version_id: versionId,
  preview_url: 'https://11111111-libx-test.example.workers.dev',
};

test('CLI出力の型・Worker名・版IDを照合し、ログの文面から成功を推測しない', () => {
  const parsed = parseGroupVersionOutput(JSON.stringify(upload), {
    type: 'version-upload',
    service: 'libx-test',
  });
  assert.equal(parsed.versionId, versionId);
  for (const content of [
    'Successfully deployed',
    JSON.stringify({ ...upload, worker_name: 'other' }),
    JSON.stringify({ ...upload, version_id: 'bad' }),
    JSON.stringify(upload) + '\n' + JSON.stringify(upload),
    JSON.stringify({ ...upload, preview_url: 'https://example.test/' }),
  ])
    assert.throws(() =>
      parseGroupVersionOutput(content, { type: 'version-upload', service: 'libx-test' })
    );
  assert.deepEqual(
    parseGroupVersionOutput(
      JSON.stringify({
        type: 'version-deploy',
        version: 1,
        worker_name: 'libx-test',
        deployment_id: deploymentId,
      }),
      { type: 'version-deploy', service: 'libx-test' }
    ),
    { deploymentId }
  );
});

test('固定CLI版と引数配列で操作し、認証を引数へ含めず、記録を梱包外へ保存する', async (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-wrangler-client-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const directory = path.join(root, 'worker');
  fs.mkdirSync(directory);
  fs.writeFileSync(path.join(directory, 'wrangler.jsonc'), JSON.stringify({ name: 'libx-test' }));
  const calls = [];
  const client = createWranglerGroupVersionClient({
    accountId: 'b'.repeat(32),
    apiToken: 'test-only-token',
    workDirectory: path.join(root, 'operations'),
    execute: async (command, args, options) => {
      calls.push(args);
      assert.equal(command, 'pnpm');
      assert.equal(args[0], '--package=wrangler@4.129.0');
      assert.equal(
        args.some((arg) => arg.includes('test-only-token')),
        false
      );
      assert.equal(options.env.CLOUDFLARE_API_TOKEN, 'test-only-token');
      assert.notEqual(options.cwd, directory);
      assert.equal(
        fs.readFileSync(path.join(options.cwd, 'wrangler.jsonc'), 'utf8'),
        fs.readFileSync(path.join(directory, 'wrangler.jsonc'), 'utf8')
      );
      assert.equal(options.shell, undefined);
      assert.equal(options.env.WRANGLER_OUTPUT_FILE_PATH.startsWith(directory + path.sep), false);
      const output = args.includes('upload')
        ? upload
        : {
            type: 'version-deploy',
            version: 1,
            worker_name: 'libx-test',
            deployment_id: deploymentId,
          };
      fs.writeFileSync(options.env.WRANGLER_OUTPUT_FILE_PATH, JSON.stringify(output) + '\n');
    },
  });
  assert.equal((await client.upload(directory, 'a'.repeat(64))).versionId, versionId);
  assert.equal((await client.deploy(directory, versionId)).deploymentId, deploymentId);
  assert.deepEqual(calls[1].slice(3, 7), ['versions', 'deploy', versionId + '@100', '--yes']);
  assert.deepEqual(fs.readdirSync(directory), ['wrangler.jsonc']);
});

test('CLI失敗は再送せず、stdoutや認証情報を例外へ転記しない', async (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-wrangler-fail-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const directory = path.join(root, 'worker');
  fs.mkdirSync(directory);
  fs.writeFileSync(path.join(directory, 'wrangler.jsonc'), JSON.stringify({ name: 'libx-test' }));
  let calls = 0;
  const client = createWranglerGroupVersionClient({
    accountId: 'b'.repeat(32),
    apiToken: 'test-only-token',
    workDirectory: path.join(root, 'operations'),
    execute: async () => {
      calls++;
      throw new Error('sensitive stdout');
    },
  });
  await assert.rejects(client.deploy(directory, versionId), (error) => {
    assert.match(error.message, /未確定/);
    assert.equal(error.message.includes('sensitive stdout'), false);
    return true;
  });
  assert.equal(calls, 1);
});

test('CLIは未知・重複引数と基点省略をCloudflare接続前に拒否する', async () => {
  const { runGroupWorkers } = await import('../../scripts/experimental/group-workers.js');
  assert.match((await runGroupWorkers(['--help'])).help, /expected-deployment/);
  await assert.rejects(runGroupWorkers(['publish', '--unknown=value']), /未知/);
  await assert.rejects(runGroupWorkers(['verify', '--sha=a', '--sha=b']), /重複/);
  const options = [
    'publish',
    '--directory=/missing-package',
    '--sha=' + 'a'.repeat(64),
    '--state=/missing-state',
  ];
  await assert.rejects(runGroupWorkers(options), /expected-deployment/);
  await assert.rejects(
    runGroupWorkers([...options, '--expected-deployment=invalid']),
    /deployment ID/
  );
});
