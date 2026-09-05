#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { discoverApps, findRepositoryRoot } from '../packages/project-config/src/app-registry.js';
import { collectGroupPages } from '../packages/project-config/src/group-pages.js';

const types = {
  '.html': 'text/html; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function fileIn(root, relative) {
  const segments = relative.split('/').filter(Boolean);
  if (segments.some((segment) => segment === '.' || segment === '..' || /[\\\0]/.test(segment)))
    throw new Error('不正な公開パスです');
  let file = root;
  for (const segment of segments) {
    file = path.join(file, segment);
    try {
      if (fs.lstatSync(file).isSymbolicLink()) throw new Error('symlinkは配信しません');
    } catch (error) {
      if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return null;
      throw error;
    }
  }
  return file;
}

export function validatePreviewOutput(root, directory, groupId) {
  const registry = discoverApps(root);
  const groups = groupId
    ? registry.groups.filter((group) => group.id === groupId)
    : registry.groups;
  if (groupId && !groups.length) throw new Error(`未知のグループ: ${groupId}`);
  const required = new Set(groupId ? [] : ['index.html']);
  for (const group of groups) {
    const catalog = collectGroupPages(
      group,
      registry.apps.filter((app) => app.groupId === group.id)
    );
    const base = group.publicBase.slice(1);
    required.add(`${base}/index.html`);
    required.add(`${base}/404.html`);
    for (const page of catalog.pages) {
      required.add(`${page.url.slice(1)}index.html`);
      required.add(`${base}/navigation/${page.version}/${page.lang}.json`);
      required.add(`${base}/navigation/${page.version}/${page.lang}/index.html`);
      required.add(`${base}/search/${page.version}/${page.lang}.json`);
    }
  }
  for (const relative of required) {
    const file = fileIn(directory, relative);
    if (!file || !fs.statSync(file).isFile())
      throw new Error(`プレビュー出力が不足しています: ${relative}。先に統合ビルドしてください。`);
  }
  return groupId ? groups[0].publicBase + '/' : '/';
}

/** Serve the integrated public tree without rewriting HTML or crossing app scopes. */
export function createPreviewServer(directory) {
  if (fs.lstatSync(directory).isSymbolicLink()) throw new Error('配信rootにsymlinkは使えません');
  const root = fs.realpathSync(directory);
  return http.createServer((request, response) => {
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      response.end();
      return;
    }
    try {
      const rawPath = (request.url ?? '/').split('?')[0];
      if (!rawPath.startsWith('/') || rawPath.startsWith('//')) throw new Error('不正なURL');
      const pathname = decodeURIComponent(rawPath);
      let file = fileIn(root, pathname);
      if (file && fs.statSync(file).isDirectory()) {
        if (!rawPath.endsWith('/')) {
          response.writeHead(308, {
            Location:
              rawPath +
              '/' +
              (request.url.includes('?') ? '?' + request.url.split('?').slice(1).join('?') : ''),
          });
          response.end();
          return;
        }
        file = fileIn(root, pathname + 'index.html');
      }
      let status = 200;
      if (!file || !fs.statSync(file).isFile()) {
        status = 404;
        const segments = pathname.split('/').filter(Boolean);
        file = null;
        while (segments.length) {
          const candidate = fileIn(root, segments.join('/') + '/404.html');
          if (candidate && fs.statSync(candidate).isFile()) {
            file = candidate;
            break;
          }
          segments.pop();
        }
        file ??= fileIn(root, '404.html');
      }
      if (!file || !fs.statSync(file).isFile()) {
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end(request.method === 'HEAD' ? undefined : 'Not Found');
        return;
      }
      response.writeHead(status, {
        'Content-Type': types[path.extname(file)] ?? 'application/octet-stream',
        'Content-Length': fs.statSync(file).size,
      });
      if (request.method === 'HEAD') response.end();
      else
        fs.createReadStream(file)
          .on('error', () => response.destroy())
          .pipe(response);
    } catch {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(request.method === 'HEAD' ? undefined : 'Bad Request');
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log('pnpm preview [--group=<id>] [--port=8080]');
    console.log(
      '統合distを検証し、127.0.0.1で配信します。例: --group=awesome。先に全体またはグループをビルドしてください。'
    );
    process.exit(0);
  }
  const unknown = args.filter((arg) => arg !== '--' && !/^--(?:group|port)=/.test(arg));
  if (unknown.length) {
    console.error(`未知の引数: ${unknown.join(', ')}`);
    process.exit(1);
  }
  try {
    const value = (name) =>
      process.argv.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1);
    const root = findRepositoryRoot(path.dirname(fileURLToPath(import.meta.url)));
    const directory = path.join(root, 'dist');
    const port = Number(value('--port') ?? 8080);
    if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('portは1〜65535です');
    const entry = validatePreviewOutput(root, directory, value('--group'));
    const server = createPreviewServer(directory);
    server.on('error', (error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
    server.listen(port, '127.0.0.1', () =>
      console.log(`統合プレビュー: http://127.0.0.1:${port}${entry}`)
    );
    for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close());
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
