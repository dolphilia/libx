#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateTranslatedContent } from './content-validation.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);

function value(name) {
  return args.find((argument) => argument.startsWith(`${name}=`))?.slice(name.length + 1);
}

const project = value('--project');
if (!project) throw new Error('--project=<project-id> を指定してください');
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project)) throw new Error('不正なproject IDです');

const report = validateTranslatedContent({
  projectDir: path.join(rootDir, 'apps', project),
  version: value('--version'),
  targetLanguages: value('--target')?.split(',').filter(Boolean),
  identifierPrefixes: value('--identifier-prefixes')?.split(',').filter(Boolean) ?? [],
  allowMissing: args.includes('--allow-missing'),
});

if (args.includes('--json')) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`コンテンツ検査: ${report.project}（定本: ${report.sourceLanguage}）`);
  for (const [version, result] of Object.entries(report.versions)) {
    for (const [language, target] of Object.entries(result.targets)) {
      console.log(
        `${version}/${language}: 定本${result.sourceFiles}件、翻訳${target.files}件、欠落${target.missing}件、余分${target.extra}件`
      );
    }
  }
  console.log(`内部リンク: ${report.checkedLinks}件、エラー: ${report.errors.length}件`);
  for (const error of report.errors) console.error(`ERROR: ${error}`);
}

if (report.errors.length) process.exitCode = 1;
