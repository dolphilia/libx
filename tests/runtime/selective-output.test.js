import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {
  collectReservedRootNames,
  integrateSelectiveOutputs,
} from '../../scripts/selective-output.js';

async function createFixture(t) {
  const root = await fsPromises.mkdtemp(path.join(os.tmpdir(), 'libx-selective-output-'));
  t.after(() => fsPromises.rm(root, { recursive: true, force: true }));
  return {
    root,
    dist: path.join(root, 'dist'),
    landing: path.join(root, 'landing-dist'),
    sample: path.join(root, 'sample-dist'),
  };
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

test('landingだけの統合は文書サイトと他サイトを維持し、古いlanding出力を除去する', async (t) => {
  const fixture = await createFixture(t);
  writeFile(path.join(fixture.dist, 'docs/sample-docs/sentinel.txt'), 'docs-before');
  writeFile(path.join(fixture.dist, 'status/sentinel.txt'), 'site-before');
  writeFile(path.join(fixture.dist, 'old-language/index.html'), 'stale-landing');
  writeFile(path.join(fixture.dist, 'index.html'), 'old-landing');
  writeFile(path.join(fixture.landing, 'index.html'), 'new-landing');
  writeFile(path.join(fixture.landing, 'assets/new.css'), 'new-style');

  const allTargets = [
    { name: 'landing', isLanding: true, outputPath: '.', srcDir: fixture.landing },
    { name: 'sample-docs', outputPath: 'docs/sample-docs', srcDir: fixture.sample },
    { name: 'status', outputPath: 'status', srcDir: path.join(fixture.root, 'status-dist') },
  ];

  integrateSelectiveOutputs({
    distDirectory: fixture.dist,
    targets: [allTargets[0]],
    reservedRootNames: collectReservedRootNames(allTargets),
  });

  assert.equal(fs.readFileSync(path.join(fixture.dist, 'index.html'), 'utf8'), 'new-landing');
  assert.equal(
    fs.readFileSync(path.join(fixture.dist, 'docs/sample-docs/sentinel.txt'), 'utf8'),
    'docs-before'
  );
  assert.equal(
    fs.readFileSync(path.join(fixture.dist, 'status/sentinel.txt'), 'utf8'),
    'site-before'
  );
  assert.equal(fs.existsSync(path.join(fixture.dist, 'old-language')), false);
});

test('文書サイトだけの統合はlandingと他の文書サイトを変更しない', async (t) => {
  const fixture = await createFixture(t);
  writeFile(path.join(fixture.dist, 'index.html'), 'landing-before');
  writeFile(path.join(fixture.dist, 'docs/sample-docs/old.txt'), 'old-sample');
  writeFile(path.join(fixture.dist, 'docs/test-verification/sentinel.txt'), 'other-docs-before');
  writeFile(path.join(fixture.sample, 'index.html'), 'new-sample');

  integrateSelectiveOutputs({
    distDirectory: fixture.dist,
    targets: [
      {
        name: 'sample-docs',
        outputPath: 'docs/sample-docs',
        srcDir: fixture.sample,
      },
    ],
    reservedRootNames: new Set(['docs']),
  });

  assert.equal(fs.readFileSync(path.join(fixture.dist, 'index.html'), 'utf8'), 'landing-before');
  assert.equal(
    fs.readFileSync(path.join(fixture.dist, 'docs/sample-docs/index.html'), 'utf8'),
    'new-sample'
  );
  assert.equal(fs.existsSync(path.join(fixture.dist, 'docs/sample-docs/old.txt')), false);
  assert.equal(
    fs.readFileSync(path.join(fixture.dist, 'docs/test-verification/sentinel.txt'), 'utf8'),
    'other-docs-before'
  );
});

test('ステージ準備中に失敗した場合は現在のdistを変更しない', async (t) => {
  const fixture = await createFixture(t);
  writeFile(path.join(fixture.dist, 'index.html'), 'current');
  writeFile(path.join(fixture.landing, 'index.html'), 'candidate');

  assert.throws(
    () =>
      integrateSelectiveOutputs({
        distDirectory: fixture.dist,
        targets: [
          {
            name: 'landing',
            isLanding: true,
            outputPath: '.',
            srcDir: fixture.landing,
          },
        ],
        reservedRootNames: new Set(['docs']),
        prepareTarget() {
          throw new Error('simulated integration failure');
        },
      }),
    /simulated integration failure/
  );

  assert.equal(fs.readFileSync(path.join(fixture.dist, 'index.html'), 'utf8'), 'current');
  assert.deepEqual(
    fs.readdirSync(fixture.root).filter((name) => name.startsWith('.dist-selective-')),
    []
  );
});

test('landing出力が予約済みルートを含む場合は統合を拒否する', async (t) => {
  const fixture = await createFixture(t);
  writeFile(path.join(fixture.dist, 'docs/sample-docs/sentinel.txt'), 'current-docs');
  writeFile(path.join(fixture.landing, 'docs/collision.txt'), 'collision');

  assert.throws(
    () =>
      integrateSelectiveOutputs({
        distDirectory: fixture.dist,
        targets: [
          {
            name: 'landing',
            isLanding: true,
            outputPath: '.',
            srcDir: fixture.landing,
          },
        ],
        reservedRootNames: new Set(['docs']),
      }),
    /予約済みルートと衝突/
  );

  assert.equal(
    fs.readFileSync(path.join(fixture.dist, 'docs/sample-docs/sentinel.txt'), 'utf8'),
    'current-docs'
  );
});
