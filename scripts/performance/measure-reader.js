import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { median } from './process-measurement.js';

const runs = Number(process.env.PERF_RUNS ?? 3);
const budget = JSON.parse(await fs.readFile('config/performance-budgets.json', 'utf8')).reader;
const roots = {
  '/docs/': path.resolve('dist/docs'),
  '/starlight/': path.resolve('benchmarks/starlight/dist'),
};
const staticHtml =
  '<!doctype html><html lang="en"><meta name="viewport" content="width=device-width"><title>Static comparison</title><main><h1>Documentation fundamentals</h1><p>Minimal static HTML comparison.</p></main></html>';
const contentTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};

const server = http.createServer(async (request, response) => {
  if (request.url === '/static/') {
    response.setHeader('content-type', 'text/html');
    response.end(staticHtml);
    return;
  }
  const mapping = Object.entries(roots).find(([prefix]) => request.url?.startsWith(prefix));
  if (!mapping) return response.writeHead(404).end();
  const [prefix, root] = mapping;
  const relative = decodeURIComponent(request.url.slice(prefix.length)).replace(/^\/+/, '');
  let file = path.join(root, relative);
  if (request.url.endsWith('/')) file = path.join(file, 'index.html');
  try {
    const data = await fs.readFile(file);
    response.setHeader(
      'content-type',
      contentTypes[path.extname(file)] ?? 'application/octet-stream'
    );
    response.end(data);
  } catch {
    response.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });

const targets = {
  static: `http://127.0.0.1:${port}/static/`,
  starlight: `http://127.0.0.1:${port}/starlight/`,
  'libx-normal-ltr': `http://127.0.0.1:${port}/docs/sample-docs/v2/en/01-guide/01-getting-started/`,
  'libx-heavy-ltr': `http://127.0.0.1:${port}/docs/sample-docs/v2/en/06-performance/01-heavy-fixture/`,
  'libx-normal-rtl': `http://127.0.0.1:${port}/docs/sample-docs/v2/ar/01-guide/01-getting-started/`,
};
const selectedTargetNames = process.env.PERF_TARGETS?.split(',').filter(Boolean);
const report = {
  measuredAt: new Date().toISOString(),
  runs,
  conditions: 'Lighthouse simulated mobile, cold navigation',
  targets: {},
};

try {
  for (const [name, url] of Object.entries(targets)) {
    if (selectedTargetNames && !selectedTargetNames.includes(name)) continue;
    const samples = [];
    for (let run = 0; run < runs; run++) {
      const result = await lighthouse(url, {
        port: chrome.port,
        output: 'json',
        logLevel: 'error',
        onlyCategories: ['performance', 'accessibility'],
      });
      const summary = result.lhr.audits['resource-summary'].details.items.find(
        (item) => item.resourceType === 'total'
      );
      const accessibilityFailures = result.lhr.categories.accessibility.auditRefs
        .filter((reference) => result.lhr.audits[reference.id]?.score === 0)
        .map((reference) => reference.id);
      const accessibilityFailureDetails = accessibilityFailures.flatMap((id) =>
        (result.lhr.audits[id].details?.items ?? []).map((item) => ({
          id,
          selector: item.node?.selector,
          snippet: item.node?.snippet,
        }))
      );
      samples.push({
        lcpMs: Math.round(result.lhr.audits['largest-contentful-paint'].numericValue),
        cls: result.lhr.audits['cumulative-layout-shift'].numericValue,
        transferBytes: summary.transferSize,
        accessibilityScore: result.lhr.categories.accessibility.score,
        accessibilityFailures,
        accessibilityFailureDetails,
      });
    }
    report.targets[name] = {
      samples,
      median: {
        lcpMs: median(samples.map((sample) => sample.lcpMs)),
        cls: median(samples.map((sample) => sample.cls)),
        transferBytes: median(samples.map((sample) => sample.transferBytes)),
        accessibilityScore: median(samples.map((sample) => sample.accessibilityScore)),
      },
      ...(name.startsWith('libx-') ? { budget } : {}),
    };
    if (name.startsWith('libx-')) {
      const measured = report.targets[name].median;
      if (
        measured.lcpMs > budget.lcpMs ||
        measured.cls > budget.cls ||
        measured.transferBytes > budget.transferBytes ||
        measured.accessibilityScore < budget.accessibilityScore
      )
        process.exitCode = 1;
    }
  }
} finally {
  await chrome.kill();
  await new Promise((resolve) => server.close(resolve));
}

await fs.mkdir('.tmp/performance', { recursive: true });
await fs.writeFile('.tmp/performance/reader.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
