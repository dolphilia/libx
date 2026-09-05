#!/usr/bin/env node
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildDeployment } from './deployment-builder.js';
import { confirmAction, createBackup } from './safety-utils.js';
import * as logger from './logger.js';
logger.useUnifiedConsole();
const args = process.argv.slice(2);
if (args.includes('--help')) {
  console.log('pnpm build -- [--confirm] [--reuse] [--dry-run] [--local]');
  console.log(
    '全app・全グループ・landingを生成し、検証後に統合します。--reuseは入力と出力が一致する成果物だけを再利用します。'
  );
  process.exit(0);
}
const unknown = args.filter(
  (arg) => !['--', '--confirm', '--reuse', '--dry-run', '--local'].includes(arg)
);
if (unknown.length) {
  console.error(`未知の引数: ${unknown.join(', ')}`);
  process.exit(1);
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dryRun = args.includes('--dry-run');
try {
  const confirmed = await confirmAction({
    message: '既存のdistをバックアップし、検証済み統合出力へ切り替えます',
    autoConfirm: args.includes('--confirm'),
    dryRun,
    logger,
  });
  if (confirmed) {
    let backup;
    if (!dryRun && fs.existsSync(path.join(root, 'dist')))
      backup = createBackup(path.join(root, 'dist'), {
        rootDir: root,
        scenario: 'build-integrated',
        logger,
      });
    const result = await buildDeployment({
      root,
      full: true,
      local: args.includes('--local'),
      dryRun,
      reuse: args.includes('--reuse'),
    });
    console.log('統合ビルド:', JSON.stringify(result));
    if (backup) console.log(`移行前出力のバックアップ: ${backup}`);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
