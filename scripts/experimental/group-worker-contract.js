import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

/** Snapshot once: packaging must use the same code/config that was hashed. */
export function readGroupWorkerContract() {
  const read = (name) => fs.readFileSync(path.join(import.meta.dirname, name), 'utf8');
  const common = {
    compatibility_date: '2026-09-05',
    compatibility_flags: ['nodejs_compat'],
    workers_dev: false,
    preview_urls: false,
    observability: { enabled: true },
  };
  return {
    schemaVersion: 1,
    wranglerVersion: '4.129.0',
    unit: {
      entrypoint: 'AssetDelivery',
      source: read('group-assets-worker.js'),
      config: {
        ...common,
        main: 'index.js',
        assets: { directory: './assets', binding: 'ASSETS', html_handling: 'none' },
      },
    },
    router: {
      source: read('group-router.js'),
      bootstrap:
        'import catalog from "./routes.json";\nimport { createGroupRouter } from "./group-router.js";\nexport default createGroupRouter(catalog);\n',
      config: { ...common, main: 'index.js' },
    },
    packagerSha256: crypto
      .createHash('sha256')
      .update(read('package-group-workers.js'))
      .digest('hex'),
  };
}
