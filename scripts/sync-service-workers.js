import fs from 'node:fs/promises';
import { discoverApps } from '../packages/project-config/src/app-registry.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const sourcePath = path.join(scriptDir, 'service-worker', 'sidebar-sw.js');
async function discoverTargets() {
  const targets = [];
  for (const app of discoverApps(rootDir).apps) {
    const publicDir = path.join(app.directory, 'public');
    try {
      await fs.access(publicDir);
    } catch {
      continue;
    }
    targets.push({ kind: 'project', name: app.id, destination: path.join(publicDir, 'sw.js') });
  }
  const groups = [{ kind: 'template', baseDir: path.join(rootDir, 'templates') }];

  for (const group of groups) {
    const entries = await fs.readdir(group.baseDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const publicDir = path.join(group.baseDir, entry.name, 'public');
      try {
        await fs.access(publicDir);
        targets.push({
          kind: group.kind,
          name: entry.name,
          destination: path.join(publicDir, 'sw.js'),
        });
      } catch {
        // public/ を持たないワークスペースはService Worker同期の対象外。
      }
    }
  }

  return targets;
}

async function getRequestedTargets() {
  const targets = await discoverTargets();
  const projectArg = process.argv.find((arg) => arg.startsWith('--project='));
  const templateArg = process.argv.find((arg) => arg.startsWith('--template='));
  if (projectArg && templateArg) {
    throw new Error('Specify either --project or --template, not both.');
  }

  if (!projectArg && !templateArg) {
    return targets;
  }

  const kind = projectArg ? 'project' : 'template';
  const argument = projectArg ?? templateArg;
  const prefix = projectArg ? '--project=' : '--template=';
  const name = argument.slice(prefix.length).trim();
  const target = targets.find((candidate) => candidate.kind === kind && candidate.name === name);
  if (!target) {
    const expected = targets
      .filter((candidate) => candidate.kind === kind)
      .map((candidate) => candidate.name);
    throw new Error(`Unknown ${kind} "${name}". Expected one of: ${expected.join(', ')}`);
  }

  return [target];
}

async function main() {
  const source = await fs.readFile(sourcePath, 'utf8');
  const requestedTargets = await getRequestedTargets();

  await Promise.all(
    requestedTargets.map(async (target) => {
      await fs.writeFile(target.destination, source, 'utf8');
    })
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
