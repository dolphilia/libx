// Local static Astro preview; compressed source archives are files, not HTTP encodings.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { preview } from 'astro';
import { findRepositoryRoot, resolveApp } from '../packages/project-config/src/app-registry.js';

export function archiveHandler(directory, base) {
  const root = fs.realpathSync(directory);
  const prefix = base.replace(/\/$/, '') + '/source/';
  return (request, response) => {
    const rawPath = (request.url ?? '/').split('?')[0];
    if (!rawPath.startsWith(prefix) || !rawPath.toLowerCase().endsWith('.tar.gz')) return false;
    const end = (status) => {
      response.statusCode = status;
      response.end();
      return true;
    };
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.setHeader('Allow', 'GET, HEAD');
      return end(405);
    }
    let relative;
    try {
      relative = decodeURIComponent(rawPath.slice(prefix.length));
    } catch {
      return end(400);
    }
    const segments = relative.split('/');
    if (segments.some((x) => !x || x === '.' || x === '..' || /[\\\0]/.test(x))) return end(400);
    let file = root;
    try {
      for (const segment of segments) {
        file = path.join(file, segment);
        if (fs.lstatSync(file).isSymbolicLink()) return end(400);
      }
      const stat = fs.statSync(file);
      if (!stat.isFile()) return end(404);
      response.setHeader('Content-Type', 'application/gzip');
      response.setHeader('Content-Disposition', `attachment; filename="${path.basename(file)}"`);
      response.setHeader('Content-Length', stat.size);
      response.setHeader('Cache-Control', 'no-store');
      response.setHeader('X-Content-Type-Options', 'nosniff');
      response.statusCode = 200;
      if (request.method === 'HEAD') response.end();
      else
        fs.createReadStream(file)
          .on('error', () => response.destroy())
          .pipe(response);
      return true;
    } catch (error) {
      if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return end(404);
      return end(500);
    }
  };
}

export async function startArchivePreview({ root, port = 4330 }) {
  // The Node server is exposed by this installed static preview implementation,
  // but is not part of Astro's documented public PreviewServer type. Fail closed
  // on another release instead of silently relying on an incompatible internal API.
  const require = createRequire(import.meta.url);
  const version = require('astro/package.json').version;
  if (version !== '5.7.12')
    throw new Error('Archive preview requires revalidation for Astro ' + version);
  const repository = findRepositoryRoot(root);
  const id = path.relative(path.join(repository, 'apps'), root).split(path.sep).join('/');
  const app = resolveApp(id, repository);
  const handle = archiveHandler(path.join(root, 'dist/source'), app.publicBase);
  const instance = await preview({ root, server: { host: '127.0.0.1', port } });
  const server = instance.server;
  if (!server?.listeners || !server?.removeListener) {
    await instance.stop();
    throw new Error('Static Astro HTTP server unavailable');
  }
  const original = server.listeners('request');
  if (original.length !== 1) {
    await instance.stop();
    throw new Error('Unexpected Astro request dispatcher');
  }
  for (const listener of original) server.removeListener('request', listener);
  server.on('request', (request, response) => {
    if (!handle(request, response)) original[0].call(server, request, response);
  });
  return instance;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  let port = 4330;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--') continue;
    if (args[i] === '--port') port = Number(args[++i]);
    else if (args[i] === '--host' && args[++i] === '127.0.0.1') continue;
    else throw new Error('Unsupported archive preview argument');
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid port');
  const instance = await startArchivePreview({ root: process.cwd(), port });
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => instance.stop());
  await instance.closed();
}
