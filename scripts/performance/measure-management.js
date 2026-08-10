import fs from 'node:fs/promises';
import path from 'node:path';
import { measureProcess, median } from './process-measurement.js';

const runs = Number(process.env.PERF_RUNS ?? 3);
const budgets = JSON.parse(await fs.readFile('config/performance-budgets.json', 'utf8')).management;
const cases = [
  ['selective-docs', 'pnpm', ['build:selective', '--projects=sample-docs']],
  ['selective-landing', 'pnpm', ['build:selective', '--projects=landing']],
  ['integrated-build', process.execPath, ['scripts/build-integrated.js', '--confirm']],
  [
    'large-sidebar',
    process.execPath,
    ['scripts/performance/large-sidebar-fixture.js', '--count=1000'],
  ],
];
const report = { measuredAt: new Date().toISOString(), runs, cases: {} };

for (const [name, command, args] of cases) {
  const samples = [];
  for (let run = 0; run < runs; run++) samples.push(await measureProcess(command, args));
  const result = {
    samples,
    medianDurationMs: median(samples.map((sample) => sample.durationMs)),
    medianPeakRssMb: median(samples.map((sample) => sample.peakRssMb)),
    budget: budgets[name],
  };
  report.cases[name] = result;
  if (
    result.medianDurationMs > budgets[name].durationMs ||
    result.medianPeakRssMb > budgets[name].peakRssMb
  ) {
    process.exitCode = 1;
  }
}

await fs.mkdir(path.resolve('.tmp/performance'), { recursive: true });
await fs.writeFile('.tmp/performance/management.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
