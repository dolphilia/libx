#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDeployment } from './deployment-builder.js';
import * as logger from './logger.js';
logger.useUnifiedConsole();
const args = process.argv.slice(2);
if (args.includes('--help')) {
  console.log(
    'pnpm build:selective --projects=<id,...> | --group=<id> [--reuse] [--dry-run] [--local]'
  );
  console.log(
    '例: --projects=awesome/web、--group=awesome。projectsとgroupは同時に指定できません。未変更の子は検証済み出力を使い、不足時は補完します。'
  );
  process.exit(0);
}
const unknown = args.filter(
  (arg) =>
    !['--', '--reuse', '--dry-run', '--local'].includes(arg) && !/^--(?:projects|group)=/.test(arg)
);
if (unknown.length) {
  console.error(`未知の引数: ${unknown.join(', ')}`);
  process.exit(1);
}
const value = (name) => args.find((arg) => arg.startsWith(`${name}=`))?.slice(name.length + 1);
try {
  if (!value('--projects') && !value('--group'))
    throw new Error('--projects=<id,...> または --group=<id> を指定してください。');
  const result = await buildDeployment({
    root: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'),
    projects: value('--projects'),
    group: value('--group'),
    local: args.includes('--local'),
    dryRun: args.includes('--dry-run'),
    reuse: args.includes('--reuse'),
  });
  console.log('選択的統合ビルド:', JSON.stringify(result));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
