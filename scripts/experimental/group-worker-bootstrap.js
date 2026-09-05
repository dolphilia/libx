import crypto from 'node:crypto';

// Initial deployment serves no document and has no bindings. The verified release
// is uploaded as a later version and promoted only after the usual checks.
export function groupWorkerBootstrap(config) {
  const source =
    'export default { fetch() { return new Response("Release not activated", { status: 503, headers: { "Cache-Control": "no-store" } }); } };\n';
  const initialConfig = {
    name: config.name,
    main: 'index.js',
    compatibility_date: config.compatibility_date,
    compatibility_flags: config.compatibility_flags ?? [],
    workers_dev: config.workers_dev,
    preview_urls: true,
  };
  const revision = crypto
    .createHash('sha256')
    .update(JSON.stringify({ source, config: initialConfig }))
    .digest('hex');
  return { source, config: initialConfig, revision };
}
