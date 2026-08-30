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
    'usage: translate-awesome-page-rst.mjs <category/file.md> --snapshot=<version> [--model MODEL] [--batch-size N] [--apply]'
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

function protectRst(text) {
  const tokens = [];
  const protectedText = text.replace(
    /(?:``[^`\n]+``|`[^`\n]+`_{1,2}|https?:\/\/[^\s)]+|(?<![\w`])(?:[A-Za-z][\w.-]*)_{1,2}(?!\w)|__[A-Za-z][\w.-]*__|:[A-Za-z][\w-]*:)/g,
    (token) => {
      const marker = `⟦RST_${String(tokens.length).padStart(4, '0')}⟧`;
      tokens.push({ marker, token });
      return marker;
    }
  );
  return { protectedText, tokens };
}

function restoreRst(text, tokens) {
  let restored = text.trim();
  for (const { marker, token } of tokens) {
    if (!restored.includes(marker)) throw new Error(`保護記号が失われました: ${marker}`);
    const parts = restored.split(marker);
    if (parts.length > 2) restored = `${parts.shift()}${marker}${parts.join('')}`;
    restored = restored.replaceAll(marker, token);
  }
  if (/⟦RST_\d{4}⟧/.test(restored)) throw new Error('未知の保護記号が残りました');
  return restored;
}

function translatableLine(lines, lineIndex) {
  const line = lines[lineIndex];
  const trimmed = line.trim();
  if (!trimmed || lineIndex < 5) return null;
  if (/^[=.-]{3,}$/.test(trimmed)) return null;
  if (/^\.\.(?:\s|$)/.test(trimmed) || /^:[\w-]+:/.test(trimmed)) return null;
  if (/^https?:\/\/\S+$/.test(trimmed)) return null;
  if (/^(?:\*\s+)?https?:\/\/\S+$/.test(trimmed)) return null;
  if (/^(?:`[^`]+`|[A-Za-z][\w.-]*)_$/.test(trimmed)) return null;
  if (lineIndex + 1 < lines.length && /^[=.-]{3,}$/.test(lines[lineIndex + 1].trim())) {
    return null;
  }
  const prefix = line.match(/^\s*(?:[-*+]\s+)?/)?.[0] ?? '';
  const body = line.slice(prefix.length);
  const { protectedText, tokens } = protectRst(body);
  const plain = protectedText.replace(/⟦RST_\d{4}⟧/g, '');
  if (!/[A-Za-z]{3}/.test(plain)) return null;
  return { lineIndex, prefix, body, protectedText, tokens };
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
            'SQLAlchemy技術資料の英日翻訳者です。各RST本文行を省略や追加なく自然で正確な日本語へ翻訳してください。製品名、API名、SQLAlchemy、Python、および⟦RST_0000⟧形式の保護記号は変更せず、入力と同じ順序・件数の文字列だけを返してください。',
        },
        {
          role: 'user',
          content: `次のRST本文行を日本語へ翻訳してください。\n${JSON.stringify(
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
    translated: restoreRst(parsed.translations[index], entry.tokens),
  }));
}

async function translateWithFallback(entries) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await translateBatch(entries);
    } catch (error) {
      lastError = error;
      console.error(`RST行を再試訳します (${attempt}/3): ${error.message}`);
    }
  }
  if (entries.length > 1) {
    console.error(`RST行を1件ずつ再処理します: ${lastError.message}`);
    const results = [];
    for (const entry of entries) results.push(...(await translateWithFallback([entry])));
    return results;
  }
  console.error(`RST行を保留します: ${entries[0].body} (${lastError.message})`);
  return [{ ...entries[0], translated: entries[0].body }];
}

const lines = fs.readFileSync(targetPath, 'utf8').split('\n');
const pending = lines.map((_, lineIndex) => translatableLine(lines, lineIndex)).filter(Boolean);
const translated = [];
for (let offset = 0; offset < pending.length; offset += batchSize) {
  translated.push(...(await translateWithFallback(pending.slice(offset, offset + batchSize))));
  console.log(`翻訳済み: ${Math.min(offset + batchSize, pending.length)}/${pending.length}`);
}
for (const entry of translated) lines[entry.lineIndex] = `${entry.prefix}${entry.translated}`;

console.log(`対象: ${pending.length}行`);
if (apply) {
  fs.writeFileSync(targetPath, lines.join('\n'));
  console.log(`更新: ${path.relative(rootDir, targetPath)}`);
} else {
  console.log('--apply未指定のため文書は変更していません');
}
