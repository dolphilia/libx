import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { canonicalOutputPath } from '../group-output.js';
import { readGroupWorkerContract } from './group-worker-contract.js';
import { validateRetainedGroupAssets } from './group-retained-assets.js';

const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const compare = (a, b) => a.localeCompare(b, 'en');

/** Experimental: derive immutable delivery units from the existing output ownership. */
export function createGroupReleaseCatalog({
  manifest,
  group,
  delivery = readGroupWorkerContract(),
  retainedAssets = [],
}) {
  if (
    manifest.schemaVersion !== 1 ||
    manifest.groupId !== group.id ||
    manifest.publicBase !== group.publicBase ||
    !Array.isArray(manifest.files) ||
    !Array.isArray(group.memberIds) ||
    !group.memberIds.length ||
    new Set(group.memberIds).size !== group.memberIds.length
  )
    throw new Error('グループと出力所有目録が一致しません');
  const base = group.publicBase;
  if (
    !base.startsWith('/') ||
    base.endsWith('/') ||
    canonicalOutputPath(base.slice(1)) !== base.slice(1)
  )
    throw new Error('公開baseが不正です');
  const owners = new Map([...group.memberIds, `group:${group.id}`].map((owner) => [owner, []]));
  const paths = new Set();
  const urls = new Set();
  for (const file of manifest.files) {
    if (
      !owners.has(file.appId) ||
      canonicalOutputPath(file.path) !== file.canonical ||
      !/^[a-f0-9]{64}$/.test(file.sha256) ||
      !Number.isSafeInteger(file.bytes) ||
      file.bytes < 0 ||
      typeof file.contentType !== 'string' ||
      !file.contentType
    )
      throw new Error(`出力所有レコードが不正です: ${file.path}`);
    const url = `${base}/${file.canonical === './' ? '' : file.canonical}`;
    if (paths.has(file.path) || urls.has(url))
      throw new Error(`公開URLの所有が重複しています: ${url}`);
    paths.add(file.path);
    urls.add(url);
    owners.get(file.appId).push({
      path: file.path,
      url,
      sha256: file.sha256,
      bytes: file.bytes,
      contentType: file.contentType,
    });
  }
  if (!paths.has('index.html') || !paths.has('404.html'))
    throw new Error('グループ入口または404がありません');
  const units = [...owners.entries()]
    .sort(([a], [b]) => compare(a, b))
    .map(([owner, files]) => {
      if (!files.length) throw new Error(`所有者の出力がありません: ${owner}`);
      files.sort((a, b) => compare(a.path, b.path));
      // Include the public base and owner: bytes alone do not define a delivery unit.
      const revision = hash(
        JSON.stringify({
          owner,
          publicBase: base,
          files,
          delivery: delivery.unit,
          wranglerVersion: delivery.wranglerVersion,
          packagerSha256: delivery.packagerSha256,
        })
      );
      return {
        owner,
        revision,
        binding: `UNIT_${hash(owner).slice(0, 16).toUpperCase()}`,
        service: `libx-${hash(owner).slice(0, 12)}-${revision.slice(0, 24)}`,
        bytes: files.reduce((sum, file) => sum + file.bytes, 0),
        files,
      };
    });
  if (new Set(units.map((unit) => unit.service)).size !== units.length)
    throw new Error('配信先識別子が衝突しました');
  const payload = {
    schemaVersion: 2,
    groupId: group.id,
    publicBase: base,
    delivery: structuredClone(delivery),
    units,
    retainedAssets: validateRetainedGroupAssets(retainedAssets, base, units),
  };
  return { ...payload, revision: hash(JSON.stringify(payload)) };
}

/** Verify the complete composed site, including extras and symlink ancestors. */
export function verifyGroupReleaseSource({ catalog, directory }) {
  const expected = new Map(
    catalog.units.flatMap((unit) => unit.files.map((file) => [file.path, file]))
  );
  const root = path.resolve(directory);
  for (let current = root; ; current = path.dirname(current)) {
    if (fs.lstatSync(current).isSymbolicLink())
      throw new Error(`配信元にsymlinkは使用できません: ${current}`);
    if (path.dirname(current) === current) break;
  }
  let count = 0;
  const visit = (relative = '') => {
    for (const entry of fs.readdirSync(path.join(root, relative), { withFileTypes: true })) {
      const name = relative ? `${relative}/${entry.name}` : entry.name;
      if (entry.isSymbolicLink() || (!entry.isFile() && !entry.isDirectory()))
        throw new Error(`配信元のファイル形式が不正です: ${name}`);
      if (entry.isDirectory()) {
        visit(name);
        continue;
      }
      const record = expected.get(name);
      const content = fs.readFileSync(path.join(root, name));
      if (!record || record.bytes !== content.length || record.sha256 !== hash(content))
        throw new Error(`配信元が所有目録と一致しません: ${name}`);
      count++;
    }
  };
  visit();
  if (count !== expected.size) throw new Error('配信元のファイルが欠損しています');
  return { files: count, bytes: catalog.units.reduce((sum, unit) => sum + unit.bytes, 0) };
}
