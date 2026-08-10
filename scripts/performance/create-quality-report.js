import fs from 'node:fs/promises';

const [reader, management] = await Promise.all([
  fs.readFile('.tmp/performance/reader.json', 'utf8').then(JSON.parse),
  fs.readFile('.tmp/performance/management.json', 'utf8').then(JSON.parse),
]);
const lines = [
  '# libx quality report',
  '',
  `- Generated: ${new Date().toISOString()}`,
  '- Link integrity: `pnpm check:links`',
  '- Configuration and licensing integrity: `pnpm check:integrity`',
  '- Accessibility and reader performance: Lighthouse simulated mobile',
  '',
  '## Reader performance',
  '',
  '| Target | LCP (ms) | CLS | Transfer (bytes) | Accessibility |',
  '| --- | ---: | ---: | ---: | ---: |',
];
for (const [name, result] of Object.entries(reader.targets)) {
  const value = result.median;
  lines.push(
    `| ${name} | ${value.lcpMs} | ${value.cls.toFixed(4)} | ${value.transferBytes} | ${value.accessibilityScore} |`
  );
}
lines.push(
  '',
  '## Administrator performance',
  '',
  '| Case | Duration (ms) | Peak RSS (MB) |',
  '| --- | ---: | ---: |'
);
for (const [name, result] of Object.entries(management.cases)) {
  lines.push(`| ${name} | ${result.medianDurationMs} | ${result.medianPeakRssMb} |`);
}
lines.push('');
await fs.writeFile('.tmp/performance/quality-report.md', `${lines.join('\n')}\n`);
console.log(lines.join('\n'));
