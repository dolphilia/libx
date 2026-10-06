#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { inventory, readLedger, validateLedger, updateLedger, report } from './ledger.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const directory = 'docs/notes/project-expansion';
const [command, ...args] = process.argv.slice(2);
try {
  if (command === 'check') {
    const errors = validateLedger(root, readLedger(root));
    for (const error of errors) console.error(error);
    console.log(`運用台帳検査: エラー${errors.length}件`);
    if (errors.length) process.exitCode = 1;
  } else if (command === 'report') {
    const output = report(root, readLedger(root));
    const target = path.join(root, directory, 'REPORT.md');
    if (args.includes('--check')) {
      if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== output) throw new Error('REPORT.mdが台帳・実ファイルと一致しません');
    } else fs.writeFileSync(target, output);
  } else if (command === 'inventory') {
    console.log(JSON.stringify(args.flatMap((relative) => inventory(root, relative)), null, 2));
  } else if (command === 'update') {
    // パッチは全台帳と期待リビジョン・期待入力ハッシュを持つ。ロックを勝手に解除しない。
    const patch = JSON.parse(fs.readFileSync(args[0], 'utf8'));
    if (!patch.expectedInputs?.length) throw new Error('期待入力ハッシュが必要です');
    updateLedger(root, directory, patch.name, patch.expectedRevision, patch.expectedInputs, () => patch.document);
  } else throw new Error('使い方: node scripts/project-expansion/manage.mjs check|report [--check]|inventory <相対パス...>|update <patch.json>');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
