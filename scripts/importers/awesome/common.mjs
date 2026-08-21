import crypto from 'node:crypto';
import { execFile } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

export const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
export const notesDir = path.join(rootDir, 'docs/notes/document-import/awesome');
export const tempDir = path.join(rootDir, '.tmp/document-import/awesome');
export const snapshotVersion = 'v2026-08-20';

export function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

export function isoNow() {
  return new Date().toISOString();
}

export function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function writeJsonAtomic(file, value) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, `${JSON.stringify(value, null, 2)}\n`);
  fs.renameSync(temporary, file);
}

export function optionValue(args, name, fallback) {
  const equal = args.find((argument) => argument.startsWith(`${name}=`));
  if (equal) return equal.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] && !args[index + 1].startsWith('--')
    ? args[index + 1]
    : fallback;
}

export function githubRepository(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname !== 'github.com') return null;
    const [owner, repository, ...rest] = parsed.pathname.split('/').filter(Boolean);
    if (
      !owner ||
      !repository ||
      rest.some((part) => ['issues', 'pull', 'discussions', 'actions'].includes(part))
    ) {
      return null;
    }
    return {
      repository: `${owner}/${repository.replace(/\.git$/, '')}`,
      path: rest.join('/') || null,
    };
  } catch {
    return null;
  }
}

export async function githubJson(endpoint) {
  const response = await fetch(`https://api.github.com${endpoint}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'libx-awesome-importer',
      ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
    },
  });
  if (!response.ok) {
    const error = new Error(`GitHub API ${endpoint}: ${response.status}`);
    error.githubStatus = response.status;
    error.rateLimitRemaining = response.headers.get('x-ratelimit-remaining');
    error.rateLimitReset = response.headers.get('x-ratelimit-reset');
    throw error;
  }
  return response.json();
}

export async function githubRaw(repository, commitSha, documentPath) {
  if (!/^[0-9a-f]{40}$/.test(commitSha)) throw new Error('固定コミットSHAが不正です');
  if (!documentPath || path.isAbsolute(documentPath) || documentPath.split('/').includes('..')) {
    throw new Error('文書パスが不正です');
  }
  const response = await fetch(
    `https://raw.githubusercontent.com/${repository}/${commitSha}/${documentPath}`,
    { headers: { 'User-Agent': 'libx-awesome-importer' } }
  );
  if (!response.ok)
    throw new Error(`Raw document ${repository}/${documentPath}: ${response.status}`);
  const contentLength = Number(response.headers.get('content-length') ?? 0);
  if (contentLength > 5 * 1024 * 1024) throw new Error('文書サイズが5 MiB上限を超えています');
  const text = await response.text();
  if (Buffer.byteLength(text) > 5 * 1024 * 1024)
    throw new Error('文書サイズが5 MiB上限を超えています');
  return text;
}

export async function gitRemoteHead(repository) {
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository)) {
    throw new Error('リポジトリIDが不正です');
  }
  const { stdout } = await execFileAsync(
    'git',
    ['ls-remote', '--symref', `https://github.com/${repository}.git`, 'HEAD'],
    {
      timeout: 30_000,
    }
  );
  const output = stdout;
  const branch = output.match(/^ref:\s+refs\/heads\/(.+)\s+HEAD$/m)?.[1];
  const commitSha = output.match(/^([0-9a-f]{40})\s+HEAD$/m)?.[1];
  if (!branch || !commitSha) throw new Error(`HEADを解決できません: ${repository}`);
  return { defaultBranch: branch, commitSha };
}
