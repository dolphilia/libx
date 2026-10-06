import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';

const root = '/private/tmp/libx-ninja-import-20261003';
const deployment = process.argv[2];
const evidence = process.argv[3];
assert.ok(deployment && evidence && path.isAbsolute(deployment) && path.isAbsolute(evidence));
const commit = '068bfeb18b81f5098c669c04bd186605bc3a3834';
const require = createRequire(root + '/package.json');
const { verifyDeploymentArtifact } = await import(root + '/scripts/deployment-artifact.js');
const manifest = verifyDeploymentArtifact({ directory: deployment, commit });
const source = root + '/scripts/importers/check-ninja-rendered.mjs';
const original = fs.readFileSync(source, 'utf8');
let adapted = original.replace(
  "import { parse, parseFragment } from 'parse5';",
  'import { parse, parseFragment } from ' + JSON.stringify(require.resolve('parse5')) + ';'
);
assert.notEqual(adapted, original);
const htmlPath = "path.join(app, 'dist/v1-13-2',";
const assetPath = "path.join(app, 'dist/assets/ninja-COPYING.txt')";
assert.equal(adapted.split(htmlPath).length, 2);
assert.equal(adapted.split(assetPath).length, 2);
adapted = adapted.replace(htmlPath, 'path.join(' + JSON.stringify(deployment) + ", 'dist/docs/ninja/v1-13-2',");
adapted = adapted.replace(assetPath, 'path.join(' + JSON.stringify(deployment) + ", 'dist/docs/ninja/assets/ninja-COPYING.txt')");
const temp = '/private/tmp/libx-ninja-production-rendered-277.mjs';
fs.writeFileSync(temp, adapted);
const result = spawnSync(process.execPath, [temp, '--root=' + root, '--output=' + path.join(evidence, 'CI_NINJA_RENDERED.json')], { encoding: 'utf8', cwd: root });
fs.writeFileSync(path.join(evidence, 'CI_NINJA_RENDERED.log'), result.stdout + result.stderr, { flag: 'wx' });
assert.equal(result.status, 0, result.stderr || result.stdout);
fs.writeFileSync(path.join(evidence, 'CI_ARTIFACT_VERIFICATION.json'), JSON.stringify({
  checkedAt: new Date().toISOString(), status: 'passed', commit,
  files: manifest.files.length, deployment,
  originalChecker: source,
  originalCheckerSha256: crypto.createHash('sha256').update(original).digest('hex'),
  adaptation: 'Only parse5 resolution and rendered HTML/asset paths redirect to the actual CI archive. Every source/body/code/ID/link/TOC/provenance/reviewed app check is retained.',
  scope: 'Whole archive commit/inventory/bytes/hash and four complete Ninja articles. Existing article regression, actual HTTP delivery and browser UI remain separate.',
}, null, 2) + '\n', { flag: 'wx' });
console.log(JSON.stringify({ status: 'passed', files: manifest.files.length }));
