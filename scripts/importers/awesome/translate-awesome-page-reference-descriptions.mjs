#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { rootDir, snapshotVersion } from './common.mjs';

const file = process.argv.find((argument) => argument.endsWith('.md'));
const modelOption = process.argv.indexOf('--model');
const model = modelOption === -1 ? 'qwen3:8b' : process.argv[modelOption + 1];
const batchSizeOption = process.argv.indexOf('--batch-size');
const batchSize = batchSizeOption === -1 ? 1 : Number(process.argv[batchSizeOption + 1]);
const apply = process.argv.includes('--apply');

if (!file || !model || !Number.isInteger(batchSize) || batchSize < 1) {
  console.error(
    'usage: translate-awesome-page-reference-descriptions.mjs <category/file.md> --snapshot=<version> [--model MODEL] [--batch-size N] [--apply]'
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
    /(?:!?\[[^\]]*\](?:\([^\n)]+\)|\[[^\]\n]+\])|<[^>]+>|`[^`\n]+`|https?:\/\/[^\s)]+)/g,
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
  if (/⟦MARKDOWN_\d{4}⟧/.test(restored)) throw new Error('未知の保護記号が残りました');
  return restored;
}

function entryForLine(line, lineIndex) {
  if (!/^\s*[-*+]\s+/.test(line)) return null;
  const delimiterIndex = line.indexOf(' - ');
  if (delimiterIndex === -1) return null;
  const prefix = line.slice(0, delimiterIndex + 3);
  const description = line.slice(delimiterIndex + 3).trim();
  if (!description || /[ぁ-んァ-ヶ一-龠]/.test(description)) return null;
  const { protectedText, tokens } = protectMarkdown(description);
  const plain = protectedText.replace(/⟦MARKDOWN_\d{4}⟧/g, '');
  if (!/[A-Za-zА-Яа-я가-힣一-龥]{2}/.test(plain)) return null;
  return { lineIndex, prefix, description, protectedText, tokens };
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
            'オープンソース技術資料の日本語翻訳者です。英語、中国語、韓国語、ロシア語を含む各説明文を、省略や追加なく自然で正確な日本語へ翻訳してください。書名、製品名、ライセンス名、および⟦MARKDOWN_0000⟧形式の保護記号は変更せず、入力と同じ順序・件数の文字列だけを返してください。',
        },
        {
          role: 'user',
          content: `次の文書説明を日本語へ翻訳してください。\n${JSON.stringify(
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
      console.error(`参照形式説明を再試訳します (${attempt}/3): ${error.message}`);
    }
  }
  if (entries.length > 1) {
    const results = [];
    for (const entry of entries) results.push(...(await translateWithFallback([entry])));
    return results;
  }
  console.error(`参照形式説明を保留します: ${entries[0].description} (${lastError.message})`);
  return [{ ...entries[0], translated: entries[0].description }];
}

const lines = fs.readFileSync(targetPath, 'utf8').split('\n');
const pending = lines.map((line, lineIndex) => entryForLine(line, lineIndex)).filter(Boolean);
const translated = [];
for (let offset = 0; offset < pending.length; offset += batchSize) {
  translated.push(...(await translateWithFallback(pending.slice(offset, offset + batchSize))));
  console.log(`翻訳済み: ${Math.min(offset + batchSize, pending.length)}/${pending.length}`);
}
for (const entry of translated) lines[entry.lineIndex] = `${entry.prefix}${entry.translated}`;

console.log(`対象: ${pending.length}件`);
if (apply) {
  fs.writeFileSync(targetPath, lines.join('\n'));
  console.log(`更新: ${path.relative(rootDir, targetPath)}`);
} else {
  console.log('--apply未指定のため文書は変更していません');
}
