import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  copyTemplateDirectory,
  updateAstroConfig,
  updatePackageJson,
  updateProjectConfig,
  validateTemplate,
} from '../../scripts/create-project.js';

const testDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testDir, '..', '..');
const templateDir = path.join(repoRoot, 'templates', 'docs-site');

const requiredPaths = [
  'package.json',
  'astro.config.mjs',
  'src/config/project.config.jsonc',
  'src/content/docs/v1/en/01-guide/01-getting-started.mdx',
  'src/pages/index.astro',
  'src/pages/[version]/[lang]/[...slug].astro',
];

test('canonical documentation template has the required structure', () => {
  assert.equal(fs.existsSync(path.join(repoRoot, 'apps', 'project-template')), false);
  assert.deepEqual(validateTemplate('docs-site'), []);
  for (const relativePath of requiredPaths) {
    assert.equal(fs.existsSync(path.join(templateDir, relativePath)), true, relativePath);
  }

  const packageJson = JSON.parse(fs.readFileSync(path.join(templateDir, 'package.json'), 'utf8'));
  assert.equal(packageJson.name, 'template-docs-site');
  assert.equal(packageJson.private, true);

  const docLayout = fs.readFileSync(
    path.join(templateDir, 'src', 'layouts', 'DocLayout.astro'),
    'utf8'
  );
  assert.match(docLayout, /\^v\\d\+\(\?:-\\d\+\)\*\$/);

  const contentUtils = fs.readFileSync(
    path.join(repoRoot, 'packages', 'content-utils', 'src', 'content-utils.ts'),
    'utf8'
  );
  assert.match(contentUtils, /\\\.mdx\?\$/);
  assert.doesNotMatch(contentUtils, /endsWith\(['"]\.mdx['"]\)/);
});

test('canonical template can be copied and configured as an application', async (t) => {
  const temporaryRoot = await fsPromises.mkdtemp(path.join(os.tmpdir(), 'libx-docs-template-'));
  t.after(async () => fsPromises.rm(temporaryRoot, { recursive: true, force: true }));
  const generatedDir = path.join(temporaryRoot, 'generated-docs');

  copyTemplateDirectory(templateDir, generatedDir);
  updatePackageJson(generatedDir, 'generated-docs');
  updateAstroConfig(generatedDir);
  updateProjectConfig(generatedDir, {
    projectName: 'generated-docs',
    displayNameEn: 'Generated Docs',
    displayNameJa: '生成ドキュメント',
    descriptionEn: 'Generated documentation',
    descriptionJa: '生成されたドキュメント',
  });

  const packageJson = JSON.parse(fs.readFileSync(path.join(generatedDir, 'package.json'), 'utf8'));
  assert.equal(packageJson.name, 'apps-generated-docs');
  assert.match(packageJson.scripts.prebuild, /--projects=generated-docs/);
  assert.equal(fs.existsSync(path.join(generatedDir, 'node_modules')), false);
  assert.equal(fs.existsSync(path.join(generatedDir, '.astro')), false);
  assert.equal(fs.existsSync(path.join(generatedDir, 'dist')), false);

  const projectConfig = fs.readFileSync(
    path.join(generatedDir, 'src', 'config', 'project.config.jsonc'),
    'utf8'
  );
  assert.match(projectConfig, /"projectSlug": "generated-docs"/);
  assert.match(projectConfig, /"displayName": "Generated Docs"/);
});
