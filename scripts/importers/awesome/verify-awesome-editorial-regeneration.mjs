#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { root, editorial, versions, json, save, hash } from './editorial-utils.mjs';
import { regeneratePair } from './editorial-overlays.mjs';

const inventory = json(path.join(editorial, 'INVENTORY.json'));
const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'awesome-editorial-replay-'));
const results = [];
try {
  for (const version of versions) {
    for (let pass = 1; pass <= 2; pass++) {
      const capture = path.join(directory, version, `pass-${pass}`);
      execFileSync(
        process.execPath,
        [
          'scripts/importers/awesome/import-awesome-lists.mjs',
          `--snapshot=${version}`,
          '--dry-run',
          `--editorial-capture=${capture}`,
        ],
        { cwd: root, stdio: 'pipe' }
      );
      const { replayEditorialImport } = await import('./editorial-overlays.mjs');
      for (const entry of inventory.entries.filter((e) => e.version === version)) {
        const raw = fs.readFileSync(path.join(capture, `${entry.sourceId}.md`), 'utf8');
        const en = replayEditorialImport(raw, entry.sourceId, version);
        const pair = regeneratePair(version, entry.sourceId);
        if (en !== pair.en) throw new Error(`再生成不一致: ${version}/${entry.sourceId}`);
        for (const lang of ['en', 'ja']) {
          const current = fs.readFileSync(path.join(root, entry.paths[lang]), 'utf8');
          if (pair[lang] !== current)
            throw new Error(`公開用本文不一致: ${version}/${entry.sourceId}/${lang}`);
          const output = path.join(directory, 'output', version, lang, `${entry.sourceId}.md`);
          fs.mkdirSync(path.dirname(output), { recursive: true });
          if (pass === 2 && fs.readFileSync(output, 'utf8') !== current)
            throw new Error('二度実行で差分発生');
          fs.writeFileSync(output, pair[lang]);
        }
        if (pass === 2)
          results.push({
            version,
            sourceId: entry.sourceId,
            en: hash(pair.en),
            ja: hash(pair.ja),
            passes: 2,
          });
      }
    }
  }
  save(path.join(editorial, 'REGENERATION_VERIFICATION.json'), {
    schemaVersion: 1,
    verifiedAt: new Date().toISOString(),
    status: 'passed',
    scope:
      '全実ファイル。固定原文をimport変換し、既存修正・後段差分を別領域で二度再生成。内容レビューとは別。',
    results,
  });
  console.log(
    `Awesome editorial regeneration: OK (${results.length} pairs, 2074 documents, 2 passes)`
  );
} finally {
  fs.rmSync(directory, { recursive: true, force: true });
}
