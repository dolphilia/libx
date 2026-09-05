#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawn, execFileSync, execFile } from 'node:child_process';
import { promisify } from 'node:util';
import {
  discoverApps,
  findRepositoryRoot,
  selectApps,
} from '../../packages/project-config/src/app-registry.js';
const exec = promisify(execFile);
const root = findRepositoryRoot();
const args = process.argv.slice(2);
const option = (name) => args.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1);
const output = option('--output');
const group = option('--group');
const projects = option('--projects') ?? (group ? undefined : 'awesome');
const runs = Number(option('--runs') ?? 1);
const scenarios = (option('--scenarios') ?? 'full,selective').split(',');
if (
  !scenarios.length ||
  scenarios.some((scenario) => !['full', 'selective'].includes(scenario)) ||
  new Set(scenarios).size !== scenarios.length
)
  throw new Error('--scenarios は full、selective、または full,selective を指定してください');
if (!output || fs.existsSync(output) || !Number.isInteger(runs) || runs < 1)
  throw new Error('新規の--output=<file>と正の--runsを指定してください');
const registry = discoverApps(root);
const selected = selectApps({ projects, group }, root);
const selectionArgument = group ? `--group=${group}` : `--projects=${projects}`;
const sites = fs
  .readdirSync(path.join(root, 'sites'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(root, 'sites', entry.name));
const appDirectories = [...registry.apps.map((app) => app.directory), ...sites];
const ignored = new Set(['node_modules', 'dist', '.astro', '.git', '.tmp', '.backups']);
function fingerprint() {
  const hash = crypto.createHash('sha256');
  const visit = (file) => {
    const stat = fs.lstatSync(file);
    if (stat.isSymbolicLink()) throw new Error(`計測入力のsymlink: ${file}`);
    if (stat.isDirectory()) {
      for (const entry of fs.readdirSync(file).sort())
        if (!ignored.has(entry) && !entry.endsWith('.tsbuildinfo')) visit(path.join(file, entry));
    } else {
      hash.update(path.relative(root, file));
      hash.update(fs.readFileSync(file));
    }
  };
  for (const name of [
    'apps',
    'sites',
    'packages',
    'scripts',
    'config',
    'templates',
    'package.json',
    'pnpm-lock.yaml',
    'pnpm-workspace.yaml',
  ])
    visit(path.join(root, name));
  return hash.digest('hex');
}
function disk(directory) {
  let bytes = 0,
    allocatedBytes = 0,
    files = 0;
  const visit = (target) => {
    try {
      const stat = fs.lstatSync(target);
      if (stat.isSymbolicLink()) return;
      if (stat.isDirectory())
        for (const entry of fs.readdirSync(target)) visit(path.join(target, entry));
      else {
        bytes += stat.size;
        allocatedBytes += stat.blocks * 512;
        files++;
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  };
  visit(directory);
  return { bytes, allocatedBytes, files };
}
function outputDisk() {
  const paths = [
    path.join(root, 'dist'),
    path.join(root, '.backups'),
    path.join(root, '.tmp/group-outputs'),
    ...appDirectories.flatMap((directory) => [
      path.join(directory, 'dist'),
      path.join(directory, '.astro'),
    ]),
    ...fs
      .readdirSync(root)
      .filter((name) => name.startsWith('.deployment-') || name.startsWith('.dist-'))
      .map((name) => path.join(root, name)),
  ];
  return paths.reduce((total, directory) => total + disk(directory).allocatedBytes, 0);
}
async function treeRss(pid) {
  const { stdout } = await exec('ps', ['-axo', 'pid=,ppid=,rss=']);
  const rows = stdout
    .trim()
    .split('\n')
    .map((line) => line.trim().split(/\s+/).map(Number));
  const family = new Set([pid]);
  let previous;
  do {
    previous = family.size;
    for (const [id, parent] of rows) if (family.has(parent)) family.add(id);
  } while (family.size !== previous);
  return rows.reduce((total, [id, , rss]) => total + (family.has(id) ? rss * 1024 : 0), 0);
}
function clean(directories) {
  for (const directory of directories)
    for (const name of ['dist', '.astro'])
      fs.rmSync(path.join(directory, name), { recursive: true, force: true });
}
async function measure(name, buildArgs, logFile) {
  const startingOutputDiskBytes = outputDisk();
  let peakOutputDiskBytes = startingOutputDiskBytes,
    peakTreeRssBytes = 0,
    samples = 0,
    samplingError;
  const descriptor = fs.openSync(logFile, 'w');
  const started = performance.now();
  const child = spawn('pnpm', buildArgs, { cwd: root, stdio: ['ignore', descriptor, descriptor] });
  let pending = Promise.resolve(),
    busy = false;
  const timer = setInterval(() => {
    if (busy) return;
    busy = true;
    pending = treeRss(child.pid)
      .then((rss) => {
        peakTreeRssBytes = Math.max(peakTreeRssBytes, rss);
        samples++;
      })
      .catch((error) => {
        samplingError = error.message;
      })
      .finally(() => {
        busy = false;
      });
  }, 100);
  const diskTimer = setInterval(() => {
    peakOutputDiskBytes = Math.max(peakOutputDiskBytes, outputDisk());
  }, 1000);
  let code;
  try {
    code = await new Promise((resolve, reject) => {
      child.once('error', reject);
      child.once('close', resolve);
    });
  } finally {
    clearInterval(timer);
    clearInterval(diskTimer);
    await pending;
    fs.closeSync(descriptor);
  }
  const durationMs = Math.round(performance.now() - started);
  peakOutputDiskBytes = Math.max(peakOutputDiskBytes, outputDisk());
  if (code !== 0) throw new Error(`${name}が失敗しました (${code}): ${logFile}`);
  if (samplingError || !samples || !peakTreeRssBytes)
    throw new Error(`RSSを測定できませんでした: ${samplingError}`);
  return {
    name,
    command: ['pnpm', ...buildArgs],
    durationMs,
    peakTreeRssBytes,
    rssSamples: samples,
    startingOutputDiskBytes,
    peakOutputDiskBytes,
    peakAdditionalOutputDiskBytes: peakOutputDiskBytes - startingOutputDiskBytes,
    integrated: disk(path.join(root, 'dist')),
    apps: Object.fromEntries(registry.apps.map((app) => [app.id, disk(app.outputDirectory)])),
    logFile: path.relative(root, logFile),
  };
}
// Fail before clearing caches if process-tree inspection is unavailable.
if ((await treeRss(process.pid)) <= 0) throw new Error('RSS計測に必要なpsを利用できません');
const inputFingerprint = fingerprint();
const report = {
  schemaVersion: 1,
  startedAt: new Date().toISOString(),
  gitHead: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(),
  inputFingerprint,
  runs,
  scenarios,
  conditions: {
    rssIntervalMs: 100,
    diskIntervalMs: 1000,
    clean:
      'target app/site dist and .astro removed before each case; generated source indexes and dependency caches retained',
    disk: 'allocated bytes of app/site outputs, .astro, integrated output, integration stages, and safety backups; pre-existing backups included in starting amount',
    publication:
      'CLI full build includes its safety backup; selective case preserves other existing public outputs',
  },
  samples: [],
};
fs.mkdirSync(path.dirname(output), { recursive: true });
const logDirectory = path.join(root, '.tmp/nested-app-migration');
fs.mkdirSync(logDirectory, { recursive: true });
for (let run = 1; run <= runs; run++) {
  for (const scenario of scenarios) {
    clean(scenario === 'full' ? appDirectories : selected.map((app) => app.directory));
    const name = `${scenario}-${run}`;
    console.log(`計測開始: ${name}`);
    const result = await measure(
      name,
      scenario === 'full' ? ['build', '--', '--confirm'] : ['build:selective', selectionArgument],
      path.join(
        logDirectory,
        `measurement-${path.basename(output, path.extname(output))}-${name}.log`
      )
    );
    report.samples.push(result);
    report.currentInputFingerprint = fingerprint();
    report.inputsUnchanged = report.currentInputFingerprint === inputFingerprint;
    fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
    console.log(
      `計測完了: ${name}: ${result.durationMs}ms, RSS ${(result.peakTreeRssBytes / 1024 / 1024).toFixed(1)} MiB`
    );
    if (!report.inputsUnchanged)
      throw new Error('計測中にソース入力が変化しました。結果を比較値として採用しないでください');
  }
}
report.completedAt = new Date().toISOString();
fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
