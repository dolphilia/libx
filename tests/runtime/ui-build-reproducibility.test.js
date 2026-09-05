import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import test from 'node:test';
import { parse } from 'parse5';

const repository = path.resolve(import.meta.dirname, '../..');

test('Astroの反復ビルドは同一HTMLを生成し、同一ラベルのDropdownもID・ARIA参照が重複しない', (t) => {
  const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'libx-ui-build-')));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.mkdirSync(path.join(root, 'src/pages'), { recursive: true });
  fs.symlinkSync(path.join(repository, 'node_modules'), path.join(root, 'node_modules'), 'dir');
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify({ name: 'ui-reproducibility-fixture', type: 'module', private: true })
  );
  fs.writeFileSync(
    path.join(root, 'astro.config.mjs'),
    "import {defineConfig} from 'astro/config';export default defineConfig({output:'static'});\n"
  );
  const components = path.join(root, 'src/components');
  fs.mkdirSync(components);
  fs.cpSync(
    path.join(repository, 'packages/ui/src/components/Dropdown'),
    path.join(components, 'Dropdown'),
    { recursive: true }
  );
  for (const file of ['instance-id.js', 'instance-id.d.ts'])
    fs.copyFileSync(
      path.join(repository, 'packages/ui/src/components', file),
      path.join(components, file)
    );
  const component = JSON.stringify('../components/Dropdown/Dropdown.astro');
  fs.writeFileSync(
    path.join(root, 'src/pages/index.astro'),
    `---\nimport Dropdown from ${component};\n---\n<html lang="en"><head><title>Repeated instances</title></head><body><Dropdown label="Same"><a href="#first">First</a></Dropdown><Dropdown label="Different"><a href="#second">Second</a></Dropdown><Dropdown label="Same"><a href="#third">Third</a></Dropdown></body></html>\n`
  );
  const build = () => {
    execFileSync('pnpm', ['exec', 'astro', 'build'], {
      cwd: root,
      stdio: 'pipe',
      timeout: 60000,
    });
    const html = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
    const elements = [];
    const walk = (node) => {
      if (node.tagName) elements.push(node);
      for (const child of node.childNodes ?? []) walk(child);
    };
    walk(parse(html));
    const attr = (node, name) => node.attrs.find((entry) => entry.name === name)?.value;
    const ids = elements.map((node) => attr(node, 'id')).filter(Boolean);
    assert.equal(ids.length, 6);
    assert.equal(new Set(ids).size, ids.length);
    const buttons = elements.filter((node) => attr(node, 'data-dropdown-button') !== undefined);
    assert.equal(buttons.length, 3);
    for (const button of buttons) {
      const menu = elements.find((node) => attr(node, 'id') === attr(button, 'aria-controls'));
      assert.ok(menu);
      assert.equal(attr(menu, 'aria-labelledby'), attr(button, 'id'));
    }
    return createHash('sha256').update(html).digest('hex');
  };
  assert.equal(build(), build());
});
