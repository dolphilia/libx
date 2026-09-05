#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { rootDir, snapshotVersion } from './common.mjs';

const file = process.argv.find((argument) => argument.endsWith('.md'));
const modelOption = process.argv.indexOf('--model');
const model = modelOption === -1 ? 'qwen3:8b' : process.argv[modelOption + 1];
const batchSizeOption = process.argv.indexOf('--batch-size');
const batchSize = batchSizeOption === -1 ? 4 : Number(process.argv[batchSizeOption + 1]);
const apply = process.argv.includes('--apply');
const htmlBlockquotes = process.argv.includes('--html-blockquotes');

if (!file || !model || !Number.isInteger(batchSize) || batchSize < 1) {
  console.error(
    'usage: translate-awesome-page-prose.mjs <category/file.md> --snapshot=<version> [--model MODEL] [--batch-size N] [--html-blockquotes] [--apply]'
  );
  process.exit(1);
}

const targetPath = createAwesomeContentAccess(snapshotVersion, rootDir).pathFor('ja', file);
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

function isTranslatableProse(block) {
  const trimmed = block.trim();
  if (!trimmed || /[ぁ-んァ-ヶ一-龠]/.test(trimmed)) return false;
  if (!/[A-Za-z]{3}/.test(trimmed)) return false;
  const lines = trimmed.split('\n');
  if (lines.some((line) => /^(?:#{1,6}\s|```|~~~|[-*+]\s|\d+\.\s|\||>|<|\[[^\]]+\]:)/.test(line)))
    return false;
  if (lines.some((line) => /^(?:=+|-+)\s*$/.test(line))) return false;
  return true;
}

async function translateBatch(entries) {
  const prepared = entries.map(({ index, text }) => {
    const { protectedText, tokens } = protectMarkdown(text);
    return { index, protectedText, tokens };
  });
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
            '技術文書の英日翻訳者です。各段落を情報の省略や追加なく、自然で正確な日本語へ翻訳してください。書名、製品名、固有名詞、および⟦MARKDOWN_0000⟧形式の保護記号は一字も変更せず同じ位置に残してください。入力と同じ順序・件数の文字列だけを返してください。',
        },
        {
          role: 'user',
          content: `次の英語段落を日本語へ翻訳してください。\n${JSON.stringify(
            prepared.map(({ protectedText }) => protectedText)
          )}`,
        },
      ],
    }),
  });
  if (!response.ok) throw new Error(`Ollama API: ${response.status} ${await response.text()}`);
  const payload = await response.json();
  const parsed = JSON.parse(payload.message.content);
  if (parsed.translations.length !== entries.length) throw new Error('翻訳件数が一致しません');
  return prepared.map(({ index, tokens }, offset) => ({
    index,
    text: restoreMarkdown(parsed.translations[offset], tokens),
  }));
}

async function translateWithFallback(entries) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await translateBatch(entries);
    } catch (error) {
      lastError = error;
      console.error(`段落を再試訳します (${attempt}/3): ${error.message}`);
    }
  }
  if (entries.length > 1) {
    console.error(`段落を1件ずつ再処理します: ${lastError.message}`);
    const results = [];
    for (const entry of entries) results.push(...(await translateWithFallback([entry])));
    return results;
  }
  console.error(`段落を保留します: ${entries[0].text} (${lastError.message})`);
  return entries;
}

const markdown = fs.readFileSync(targetPath, 'utf8');
const parsed = matter(markdown);
const contentOffset = markdown.indexOf(parsed.content);
const prefix = markdown.slice(0, contentOffset);
const blocks = htmlBlockquotes ? parsed.content.split('\n') : parsed.content.split(/(\n{2,})/);
const blockquotePrefixes = new Map();
const pending = blocks
  .map((text, index) => {
    if (!htmlBlockquotes) return { index, text };
    const match = text.match(/^(>\s.*?<br>)(.+)$/);
    if (!match || !/[A-Za-z]{3}/.test(match[2]) || /[ぁ-んァ-ヶ一-龠]/.test(match[2])) {
      return { index, text: '' };
    }
    blockquotePrefixes.set(index, match[1]);
    return { index, text: match[2] };
  })
  .filter(({ text, index }) =>
    htmlBlockquotes ? Boolean(text) : index % 2 === 0 && isTranslatableProse(text)
  );

for (let offset = 0; offset < pending.length; offset += batchSize) {
  const translated = await translateWithFallback(pending.slice(offset, offset + batchSize));
  for (const entry of translated) {
    blocks[entry.index] = htmlBlockquotes
      ? `${blockquotePrefixes.get(entry.index)}${entry.text}`
      : entry.text;
  }
  console.log(`翻訳済み: ${Math.min(offset + batchSize, pending.length)}/${pending.length}`);
}

console.log(`対象: ${pending.length}段落`);
if (apply) {
  fs.writeFileSync(targetPath, `${prefix}${blocks.join(htmlBlockquotes ? '\n' : '')}`);
  console.log(`更新: ${path.relative(rootDir, targetPath)}`);
} else {
  console.log('--apply未指定のため文書は変更していません');
}
