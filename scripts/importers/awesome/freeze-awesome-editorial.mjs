#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { editorial, versions, json, save, blob, hash, root } from './editorial-utils.mjs';
import { makePatch } from './editorial-overlays.mjs';

const capturePrefix = process.argv
  .find((a) => a.startsWith('--capture-prefix='))
  ?.slice('--capture-prefix='.length);
if (!capturePrefix)
  throw new Error('--capture-prefix=/tmp/awesome-editorial-raw- を指定してください');
const inventory = json(path.join(editorial, 'INVENTORY.json'));
if (inventory.inventoryErrors.length) throw new Error('棚卸しのエラーを先に解消してください');
for (const version of versions) {
  const file = path.join(editorial, 'overlays', version, 'REGENERATION.json');
  if (fs.existsSync(file)) throw new Error(`既存差分を上書きできません: ${file}`);
}
for (const version of versions) {
  const records = inventory.entries.filter((e) => e.version === version);
  const file = path.join(editorial, 'overlays', version, 'REGENERATION.json');
  const entries = records.map((entry) => {
    const generated = fs.readFileSync(
      path.join(`${capturePrefix}${version}`, `${entry.sourceId}.md`),
      'utf8'
    );
    const en = blob(entry.baseline.en);
    const ja = blob(entry.baseline.ja);
    // 開始後のユーザー編集を無条件で基準へ戻さない。
    for (const lang of ['en', 'ja'])
      if (hash(fs.readFileSync(path.join(root, entry.paths[lang]))) !== entry.baseline[lang])
        throw new Error(`棚卸し後に本文が変更: ${entry.sourceId}/${lang}`);
    return {
      sourceId: entry.sourceId,
      fixedInput: entry.fixedInput?.sha256 ?? null,
      existingEnglishCorrections: makePatch(generated, en),
      existingJapanese: hash(ja),
      historicalDrift: entry.importDrift,
      classification: entry.importDrift
        ? entry.importDrift.message.startsWith('冒頭断片ハッシュ')
          ? 'existing-prefix-corrections'
          : 'existing-retained-body-corrections'
        : generated === en
          ? 'unchanged'
          : 'existing-normalization-or-publication-corrections',
      reason:
        '固定import変換の出力と開始時のGit本文の厳密差分。旧序文・既存修正・内部リンク化を保存。今回の内容レビュー合格を意味しない。',
    };
  });
  save(file, {
    schemaVersion: 1,
    version,
    createdAt: new Date().toISOString(),
    stages: [
      'pinned-upstream',
      'existing-import-transform',
      'existing-English-corrections',
      'editorial-English',
    ],
    japaneseStages: ['frozen-existing-Japanese', 'editorial-Japanese'],
    entries,
  });
  console.log(`${version}: ${entries.length}組の再現用差分を保存`);
}
