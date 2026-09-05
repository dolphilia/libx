import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  packageDeploymentArtifact,
  verifyDeploymentArtifact,
} from '../../scripts/deployment-artifact.js';

const commit = 'a'.repeat(40);
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-artifact-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const source = path.join(root, 'source');
  const destination = path.join(root, 'bundle');
  fs.mkdirSync(source);
  fs.writeFileSync(path.join(source, 'index.html'), '<h1>Verified</h1>');
  fs.writeFileSync(path.join(source, '_headers'), '/*\n  X-Content-Type-Options: nosniff');
  return { root, source, destination };
}

test('検査済み公開物は別ジョブ相当のコピー後も設定ファイルを含め全バイトを照合する', (t) => {
  const f = fixture(t);
  const manifest = packageDeploymentArtifact({ ...f, commit });
  const downloaded = path.join(f.root, 'downloaded');
  fs.cpSync(f.destination, downloaded, { recursive: true });
  assert.deepEqual(verifyDeploymentArtifact({ directory: downloaded, commit }), manifest);
  assert.equal(manifest.files.length, 2);
  assert.throws(
    () => verifyDeploymentArtifact({ directory: downloaded, commit: 'b'.repeat(40) }),
    /commit/
  );
});

for (const change of ['modified', 'deleted', 'added']) {
  test(`成果物の${change}ファイルは公開前に検出する`, (t) => {
    const f = fixture(t);
    packageDeploymentArtifact({ ...f, commit });
    const file = path.join(f.destination, 'dist', change === 'added' ? 'extra.html' : 'index.html');
    if (change === 'deleted') fs.unlinkSync(file);
    else fs.writeFileSync(file, 'changed');
    assert.throws(
      () => verifyDeploymentArtifact({ directory: f.destination, commit }),
      /ファイル集合・内容/
    );
  });
}

test('symlinkと梱包先の重複を拒否し、元の公開物を保持する', (t) => {
  const f = fixture(t);
  fs.symlinkSync(path.join(f.source, 'index.html'), path.join(f.source, 'alias.html'));
  assert.throws(() => packageDeploymentArtifact({ ...f, commit }), /ファイル形式/);
  assert.equal(fs.existsSync(f.destination), false);
  fs.unlinkSync(path.join(f.source, 'alias.html'));
  packageDeploymentArtifact({ ...f, commit });
  assert.throws(() => packageDeploymentArtifact({ ...f, commit }), /既に存在/);
  assert.throws(
    () => packageDeploymentArtifact({ ...f, destination: path.join(f.source, 'nested'), commit }),
    /内部に/
  );
  assert.equal(fs.readFileSync(path.join(f.source, 'index.html'), 'utf8'), '<h1>Verified</h1>');
});
