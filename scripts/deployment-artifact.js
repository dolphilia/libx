#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

function inventory(directory) {
  if (fs.lstatSync(directory).isSymbolicLink()) throw new Error('成果物にsymlinkは使用できません');
  const visit = (relative = '') =>
    fs
      .readdirSync(path.join(directory, relative), { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name, 'en'))
      .flatMap((entry) => {
        const name = relative ? `${relative}/${entry.name}` : entry.name;
        if (entry.isSymbolicLink() || (!entry.isFile() && !entry.isDirectory()))
          throw new Error(`成果物のファイル形式が不正です: ${name}`);
        if (entry.isDirectory()) return visit(name);
        const content = fs.readFileSync(path.join(directory, name));
        return [
          {
            path: name,
            bytes: content.length,
            sha256: crypto.createHash('sha256').update(content).digest('hex'),
          },
        ];
      });
  return visit();
}

function validateCommit(commit) {
  if (typeof commit !== 'string' || !/^[a-f0-9]{40}$/.test(commit))
    throw new Error('40桁のcommit SHAを指定してください');
}

export function packageDeploymentArtifact({ source, destination, commit }) {
  validateCommit(commit);
  source = path.resolve(source);
  destination = path.resolve(destination);
  if (destination === source || destination.startsWith(source + path.sep))
    throw new Error('成果物の内部に梱包先を置けません');
  if (fs.existsSync(destination)) throw new Error('梱包先が既に存在します');
  const files = inventory(source);
  if (!files.some((file) => file.path === 'index.html')) throw new Error('公開入口がありません');
  const manifest = { schemaVersion: 1, commit, files };
  try {
    fs.mkdirSync(destination, { recursive: true });
    fs.cpSync(source, path.join(destination, 'dist'), { recursive: true });
    fs.writeFileSync(
      path.join(destination, 'manifest.json'),
      JSON.stringify(manifest, null, 2) + '\n'
    );
    verifyDeploymentArtifact({ directory: destination, commit });
    return manifest;
  } catch (error) {
    fs.rmSync(destination, { recursive: true, force: true });
    throw error;
  }
}

export function verifyDeploymentArtifact({ directory, commit }) {
  validateCommit(commit);
  const manifestFile = path.join(directory, 'manifest.json');
  if (fs.lstatSync(manifestFile).isSymbolicLink()) throw new Error('目録にsymlinkは使用できません');
  const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
  if (manifest.schemaVersion !== 1 || manifest.commit !== commit)
    throw new Error('成果物のschemaまたはcommitが一致しません');
  if (!isDeepStrictEqual(manifest.files, inventory(path.join(directory, 'dist'))))
    throw new Error('検証済み成果物とファイル集合・内容が一致しません');
  if (!manifest.files.some((file) => file.path === 'index.html'))
    throw new Error('公開入口がありません');
  return manifest;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const value = (name) =>
      process.argv.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1);
    const directory = value('--directory');
    if (!directory) throw new Error('--directory=<成果物ディレクトリ>を指定してください');
    const args = { directory, commit: value('--commit') };
    const manifest = process.argv.includes('--verify')
      ? verifyDeploymentArtifact(args)
      : packageDeploymentArtifact({
          source: value('--source') ?? 'dist',
          destination: directory,
          commit: args.commit,
        });
    console.log(`公開成果物: ${manifest.files.length}ファイル、commit=${manifest.commit}、照合OK`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
