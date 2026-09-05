import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';

const sha256 = (content) => crypto.createHash('sha256').update(content).digest('hex');
const sealName = 'package-manifest.json';

function inventory(directory) {
  directory = path.resolve(directory);
  for (let current = directory; ; current = path.dirname(current)) {
    if (fs.lstatSync(current).isSymbolicLink())
      throw new Error('梱包内容にsymlinkは使用できません');
    if (path.dirname(current) === current) break;
  }
  const visit = (relative = '') =>
    fs
      .readdirSync(path.join(directory, relative), { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name, 'en'))
      .flatMap((entry) => {
        const name = relative ? `${relative}/${entry.name}` : entry.name;
        if (entry.isSymbolicLink() || (!entry.isDirectory() && !entry.isFile()))
          throw new Error(`梱包内容のファイル形式が不正です: ${name}`);
        if (entry.isDirectory()) return visit(name);
        if (name === sealName) return [];
        const content = fs.readFileSync(path.join(directory, name));
        return [{ path: name, bytes: content.length, sha256: sha256(content) }];
      });
  return visit();
}

export function sealGroupWorkerPackage({ directory, revision }) {
  if (!/^[a-f0-9]{64}$/.test(revision)) throw new Error('リリース識別子が不正です');
  const target = path.join(directory, sealName);
  if (fs.existsSync(target)) throw new Error('梱包目録が既に存在します');
  const files = inventory(directory);
  if (!files.some((file) => file.path === 'release.json'))
    throw new Error('リリース目録がありません');
  const content = JSON.stringify({ schemaVersion: 1, revision, files }, null, 2) + '\n';
  fs.writeFileSync(target, content, { flag: 'wx' });
  const packageSha256 = sha256(content);
  verifyGroupWorkerPackage({ directory, packageSha256 });
  return packageSha256;
}

/** The expected digest must come from the packaging result, not from this directory. */
export function verifyGroupWorkerPackage({ directory, packageSha256, includeRelease = false }) {
  if (!/^[a-f0-9]{64}$/.test(packageSha256))
    throw new Error('梱包時の外部ハッシュを指定してください');
  const files = inventory(directory);
  const content = fs.readFileSync(path.join(directory, sealName));
  if (sha256(content) !== packageSha256) throw new Error('梱包目録のハッシュが一致しません');
  const manifest = JSON.parse(content);
  if (manifest.schemaVersion !== 1 || !isDeepStrictEqual(files, manifest.files))
    throw new Error('梱包内容が欠損・追加・変更されています');
  const releaseBytes = fs.readFileSync(path.join(directory, 'release.json'));
  if (sha256(releaseBytes) !== manifest.files.find((file) => file.path === 'release.json')?.sha256)
    throw new Error('照合中にリリース目録が変更されました');
  const release = JSON.parse(releaseBytes);
  if (release.revision !== manifest.revision) throw new Error('リリース識別子が一致しません');
  return {
    revision: manifest.revision,
    files: files.length,
    bytes: files.reduce((sum, file) => sum + file.bytes, 0),
    ...(includeRelease ? { release } : {}),
  };
}
