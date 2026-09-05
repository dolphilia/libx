#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { rootDir, snapshotVersion } from './common.mjs';

const file = process.argv.find((argument) => argument.endsWith('.md'));
const modelOption = process.argv.indexOf('--model');
const model = modelOption === -1 ? 'qwen3:8b' : process.argv[modelOption + 1];
const batchSizeOption = process.argv.indexOf('--batch-size');
const batchSize = batchSizeOption === -1 ? 4 : Number(process.argv[batchSizeOption + 1]);
const apply = process.argv.includes('--apply');

if (!file || !model || !Number.isInteger(batchSize) || batchSize < 1) {
  console.error(
    'usage: translate-awesome-page-rst-link-labels.mjs <category/file.md> --snapshot=<version> [--model MODEL] [--batch-size N] [--apply]'
  );
  process.exit(1);
}

const targetPath = createAwesomeContentAccess(snapshotVersion, rootDir).pathFor('ja', file);
if (!fs.existsSync(targetPath)) {
  console.error(`日本語ページが見つかりません: ${file}`);
  process.exit(1);
}

const japanesePattern = /[ぁ-んァ-ヶ一-龠]/;
const linkPattern = /`([^`\n]+?)\s+<((?:https?|ftp):\/\/[^>]+)>`_/g;
const lines = fs.readFileSync(targetPath, 'utf8').split('\n');
const entries = [];

for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
  for (const match of lines[lineIndex].matchAll(linkPattern)) {
    const label = match[1].trim();
    if (label === 'Meta' || japanesePattern.test(label) || !/[A-Za-z]{3}/.test(label)) continue;
    entries.push({
      lineIndex,
      start: match.index,
      original: match[0],
      label,
      target: match[2],
    });
  }
}

function protectLabel(label) {
  return label;
}

function restoreLabel(label) {
  return label.trim();
}

async function translateBatch(batch) {
  const response = await fetch('http://127.0.0.1:11434/api/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      model,
      stream: false,
      think: false,
      format: {
        type: 'object',
        properties: {
          translations: {
            type: 'array',
            items: { type: 'string' },
            minItems: batch.length,
            maxItems: batch.length,
          },
        },
        required: ['translations'],
      },
      options: { temperature: 0.1, num_ctx: 8192, num_predict: 4096 },
      messages: [
        {
          role: 'system',
          content:
            '公開データセット一覧の英日翻訳者です。データセット名と短い説明を、省略や追加なく自然で正確な日本語へ翻訳してください。固有の製品名、組織名、略語、数値、末尾の[...]は変更せず、入力と同じ順序・件数の文字列だけを返してください。',
        },
        {
          role: 'user',
          content: `次のRSTリンク表示文を日本語へ翻訳してください。\n${JSON.stringify(
            batch.map(({ label }) => protectLabel(label))
          )}`,
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`Ollama API: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  const parsed = JSON.parse(payload.message.content);
  if (parsed.translations.length !== batch.length) throw new Error('翻訳件数が一致しません');
  return batch.map((entry, index) => ({
    ...entry,
    translated: restoreLabel(parsed.translations[index]),
  }));
}

async function translateWithFallback(batch) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await translateBatch(batch);
    } catch (error) {
      lastError = error;
      console.error(`RSTリンク表示文を再試訳します (${attempt}/3): ${error.message}`);
    }
  }
  if (batch.length > 1) {
    console.error(`RSTリンク表示文を1件ずつ再処理します: ${lastError.message}`);
    const results = [];
    for (const entry of batch) results.push(...(await translateWithFallback([entry])));
    return results;
  }
  console.error(`RSTリンク表示文を保留します: ${batch[0].label} (${lastError.message})`);
  return [{ ...batch[0], translated: batch[0].label }];
}

const translated = [];
for (let offset = 0; offset < entries.length; offset += batchSize) {
  translated.push(...(await translateWithFallback(entries.slice(offset, offset + batchSize))));
  console.log(`翻訳済み: ${Math.min(offset + batchSize, entries.length)}/${entries.length}`);
}

for (const entry of [...translated].reverse()) {
  const replacement = `\`${entry.translated} <${entry.target}>\`_`;
  lines[entry.lineIndex] =
    lines[entry.lineIndex].slice(0, entry.start) +
    replacement +
    lines[entry.lineIndex].slice(entry.start + entry.original.length);
}

console.log(`対象: ${entries.length}件`);
if (apply) {
  fs.writeFileSync(targetPath, lines.join('\n'));
  console.log(`更新: ${path.relative(rootDir, targetPath)}`);
} else {
  console.log('--apply未指定のため文書は変更していません');
}
