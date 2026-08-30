#!/usr/bin/env node
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
    'usage: translate-awesome-page-table-cells.mjs <category/file.md> --snapshot=<version> [--model MODEL] [--batch-size N] [--apply]'
  );
  process.exit(1);
}

const targetPath = path.join(
  rootDir,
  'apps/awesome/src/awesome-content',
  snapshotVersion,
  'ja',
  file
);
if (!fs.existsSync(targetPath)) {
  console.error(`日本語ページが見つかりません: ${file}`);
  process.exit(1);
}

function protectMarkdown(text) {
  const tokens = [];
  const protectedText = text.replace(
    /(?:!?\[[^\]]*\]\([^\s)]+(?:\s+"[^"]*")?\)|<[^>]+>|`[^`]+`|https?:\/\/[^\s)]+)/g,
    (token) => {
      const marker = `⟦MARKDOWN_${String(tokens.length).padStart(4, '0')}⟧`;
      tokens.push({ marker, token });
      return marker;
    }
  );
  return { protectedText, tokens };
}

function restoreMarkdown(text, tokens) {
  let restored = text.trim();
  for (const { marker, token } of tokens) {
    if (!restored.includes(marker)) throw new Error(`保護記号が失われました: ${marker}`);
    const parts = restored.split(marker);
    if (parts.length > 2) restored = `${parts.shift()}${marker}${parts.join('')}`;
    restored = restored.replaceAll(marker, token);
  }
  restored = restored.replace(/⟦MARKDOWN_\d{4}⟧/g, '');
  return restored.replace(/[ \t]+/g, ' ').trim();
}

function tableCells(line, lineIndex) {
  const pipeIndexes = [];
  for (let index = 0; index < line.length; index += 1) {
    if (line[index] === '|' && line[index - 1] !== '\\') pipeIndexes.push(index);
  }
  if (pipeIndexes.length < 2) return [];
  const boundaries = [...pipeIndexes];
  if (!/^\s*\|/.test(line)) boundaries.unshift(-1);
  if (!/\|\s*$/.test(line)) boundaries.push(line.length);
  if (boundaries.length < 3) return [];
  const cells = [];
  for (let index = 0; index < boundaries.length - 1; index += 1) {
    const start = boundaries[index] + 1;
    const end = boundaries[index + 1];
    const raw = line.slice(start, end);
    const text = raw.trim();
    if (!text || /^:?-{3,}:?$/.test(text) || /[ぁ-んァ-ヶ一-龠]/.test(text)) continue;
    const { protectedText, tokens } = protectMarkdown(text);
    const plain = protectedText.replace(/⟦MARKDOWN_\d{4}⟧/g, '');
    if (!/[A-Za-z]{3}/.test(plain)) continue;
    cells.push({ lineIndex, start, end, raw, text, protectedText, tokens });
  }
  return cells;
}

async function translateBatch(entries) {
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
            minItems: entries.length,
            maxItems: entries.length,
          },
        },
        required: ['translations'],
      },
      options: { temperature: 0.1, num_ctx: 8192, num_predict: 4096 },
      messages: [
        {
          role: 'system',
          content:
            '技術資料の英日翻訳者です。各Markdown表セルを情報の省略や追加なく、自然で正確な日本語へ翻訳してください。引用文の意味と語調を保ってください。固有名詞および⟦MARKDOWN_0000⟧形式の保護記号は一字も変更せず、同じ順序で残してください。入力と同じ順序・件数の文字列だけを返してください。',
        },
        {
          role: 'user',
          content: `次の表セルを日本語へ翻訳してください。\n${JSON.stringify(
            entries.map(({ protectedText }) => protectedText)
          )}`,
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`Ollama API: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  const parsed = JSON.parse(payload.message.content);
  if (parsed.translations.length !== entries.length) throw new Error('翻訳件数が一致しません');
  return entries.map((entry, index) => ({
    ...entry,
    translated: restoreMarkdown(parsed.translations[index], entry.tokens),
  }));
}

async function translateWithFallback(entries) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await translateBatch(entries);
    } catch (error) {
      lastError = error;
      console.error(`表セルを再試訳します (${attempt}/3): ${error.message}`);
    }
  }
  if (entries.length > 1) {
    console.error(`表セルを1件ずつ再処理します: ${lastError.message}`);
    const results = [];
    for (const entry of entries) results.push(...(await translateWithFallback([entry])));
    return results;
  }
  console.error(`表セルを保留します: ${entries[0].text} (${lastError.message})`);
  return [{ ...entries[0], translated: entries[0].text }];
}

const lines = fs.readFileSync(targetPath, 'utf8').split('\n');
const pending = lines.flatMap((line, lineIndex) => tableCells(line, lineIndex));
const translated = [];
for (let offset = 0; offset < pending.length; offset += batchSize) {
  translated.push(...(await translateWithFallback(pending.slice(offset, offset + batchSize))));
  console.log(`翻訳済み: ${Math.min(offset + batchSize, pending.length)}/${pending.length}`);
}

for (const [lineIndexText, entries] of Object.entries(Object.groupBy(translated, (entry) => entry.lineIndex))) {
  const lineIndex = Number(lineIndexText);
  let line = lines[lineIndex];
  for (const entry of entries.toSorted((left, right) => right.start - left.start)) {
    const leading = entry.raw.match(/^\s*/)[0];
    const trailing = entry.raw.match(/\s*$/)[0];
    line = `${line.slice(0, entry.start)}${leading}${entry.translated}${trailing}${line.slice(entry.end)}`;
  }
  lines[lineIndex] = line;
}

console.log(`対象: ${pending.length}セル`);
if (apply) {
  fs.writeFileSync(targetPath, lines.join('\n'));
  console.log(`更新: ${path.relative(rootDir, targetPath)}`);
} else {
  console.log('--apply未指定のため文書は変更していません');
}
