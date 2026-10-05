// Run unchanged content gates on strictly reconstructed review-era inputs.
// The deployed source is never edited; new source and note bytes are checked first.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { spawnSync, execFileSync } from 'node:child_process';
import { loadPresentationMaintenance } from './project-expansion/presentation-maintenance.mjs';
const root = process.cwd();
const relative = 'docs/notes/document-context-2026-10-04/PUBLICATION_BINDINGS.json';
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const hashFile = (file) => sha256(fs.readFileSync(file));
const safePath = (base, file) => {
  const resolved = path.resolve(base, file);
  assert(resolved.startsWith(base + path.sep));
  return resolved;
};
const errors = [];
const restore = loadPresentationMaintenance(
  root,
  [{ path: relative, sha256: 'ed918662c9ff58871abd092d5cab38881d03479764ae53e3e0061aac7a7594bb' }],
  { safePath, hashFile, sha256 },
  errors
);
assert.deepEqual(errors, []);
const manifest = JSON.parse(fs.readFileSync(relative));
fs.mkdirSync(path.join(root, '.tmp'), { recursive: true });
const temporary = fs.mkdtempSync(path.join(root, '.tmp/presentation-content-'));
try {
  const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' })
    .split('\0')
    .filter(Boolean);
  // Include the newly staged implementation as well as the existing frozen packet.
  for (const file of tracked) {
    const target = path.join(temporary, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(root, file), target);
  }
  const linkDependencies = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      if (['.git', '.tmp', 'dist', '.astro'].includes(entry.name)) continue;
      const source = path.join(directory, entry.name);
      if (entry.name === 'node_modules') {
        const target = path.join(temporary, path.relative(root, source));
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.symlinkSync(source, target, 'dir');
      } else if (entry.isDirectory()) linkDependencies(source);
    }
  };
  linkDependencies(root);
  for (const entry of manifest.files) {
    const original = restore({ path: entry.path, sha256: entry.before });
    assert.equal(typeof original, 'string');
    fs.writeFileSync(path.join(temporary, entry.path), original);
  }
  // LZ4 is a newly reviewed project and has no historical presentation restoration.
  const lz4Output = path.join(root, 'apps/lz4/dist');
  if (fs.existsSync(path.join(root, 'apps/lz4/check-content.mjs'))) {
    assert(fs.existsSync(lz4Output), 'Build LZ4 before checking its rendered content');
    fs.symlinkSync(lz4Output, path.join(temporary, 'apps/lz4/dist'), 'dir');
  }
  const rendered = process.argv.find((arg) => arg.startsWith('--rendered='))?.split('=')[1];
  assert(!rendered || ['fmt', 'spdlog'].includes(rendered));
  if (rendered) {
    const actual = path.join(root, 'apps', rendered, 'dist');
    assert(fs.existsSync(actual), 'Build the project before its rendered check');
    fs.symlinkSync(actual, path.join(temporary, 'apps', rendered, 'dist'), 'dir');
  }
  const args = rendered
    ? ['--filter=apps-' + rendered, 'run', 'check:rendered']
    : ['--recursive', '--if-present', 'run', 'check:content'];
  const result = spawnSync('pnpm', args, {
    cwd: temporary,
    stdio: 'inherit',
  });
  assert.equal(result.status, 0, 'Preserved content gates failed');
  console.log(
    `Presentation preservation and existing content gates passed: ${manifest.files.length} pages; no new semantic review`
  );
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
