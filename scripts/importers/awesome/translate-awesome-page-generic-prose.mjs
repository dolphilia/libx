#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import fs from 'node:fs';
import matter from 'gray-matter';
import { rootDir, snapshotVersion } from './common.mjs';

const file = process.argv.find((argument) => argument.endsWith('.md'));
const allPages = process.argv.includes('--all-pages');
const modelOption = process.argv.indexOf('--model');
const model = modelOption === -1 ? 'qwen3:8b' : process.argv[modelOption + 1];
const batchSizeOption = process.argv.indexOf('--batch-size');
const batchSize = batchSizeOption === -1 ? 8 : Number(process.argv[batchSizeOption + 1]);
const apply = process.argv.includes('--apply');

if (
  (!file && !allPages) ||
  (file && allPages) ||
  !model ||
  !Number.isInteger(batchSize) ||
  batchSize < 1
) {
  console.error(
    'usage: translate-awesome-page-generic-prose.mjs (<category/file.md> | --all-pages) --snapshot=<version> [--model MODEL] [--batch-size N] [--apply]'
  );
  process.exit(1);
}

const content = createAwesomeContentAccess(snapshotVersion, rootDir);

const genericPattern =
  /(?:遊び方、テーマ、勝利条件に関する概要です|(?:記事|書籍)に関する学習資料の概要です|に関するライブラリと資料です|に関する年次報告書、調査、標準化組織、または関連資源です)/;

function protectMarkdown(text) {
  const tokens = [];
  const protectedText = text.replace(
    /(?:!?\[[^\]]*\]\([^\s)]+(?:\s+"[^"]*")?\)|!?\[[^\]]*\]\[[^\]]+\]|<[^>]+>|`[^`]+`|https?:\/\/[^\s)]+)/g,
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
  if (/⟦MARKDOWN_\d{4}⟧/.test(restored)) {
    throw new Error('未解決のMarkdown保護記号があります');
  }
  return restored;
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
      options: { temperature: 0.1, num_ctx: 16384, num_predict: 8192 },
      messages: [
        {
          role: 'system',
          content:
            '技術文書の英日翻訳者です。各Markdown段落を情報の省略や追加なく自然で正確な日本語へ翻訳してください。行数、改行、引用記号 >、箇条書き記号、強調記号、および⟦MARKDOWN_0000⟧形式の保護記号は一字も変更せず、同じ位置に残してください。入力と同じ順序・件数の文字列だけを返してください。',
        },
        {
          role: 'user',
          content: `次の英語Markdown段落を日本語へ翻訳してください。\n${JSON.stringify(
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
    const midpoint = Math.ceil(entries.length / 2);
    return [
      ...(await translateWithFallback(entries.slice(0, midpoint))),
      ...(await translateWithFallback(entries.slice(midpoint))),
    ];
  }
  throw lastError;
}

async function translateFile(targetFile) {
  const englishPath = content.pathFor('en', targetFile);
  const japanesePath = content.pathFor('ja', targetFile);
  if (!fs.existsSync(englishPath) || !fs.existsSync(japanesePath)) {
    throw new Error(`英日ページがそろっていません: ${targetFile}`);
  }
  const englishMarkdown = fs.readFileSync(englishPath, 'utf8');
  const japaneseMarkdown = fs.readFileSync(japanesePath, 'utf8');
  const englishParsed = matter(englishMarkdown);
  const japaneseParsed = matter(japaneseMarkdown);
  const englishBlocks = englishParsed.content.split(/(\n{2,})/);
  const japaneseBlocks = japaneseParsed.content.split(/(\n{2,})/);
  if (englishBlocks.length !== japaneseBlocks.length) {
    throw new Error(
      `英日段落数が一致しません: ${targetFile}: en=${englishBlocks.length}, ja=${japaneseBlocks.length}`
    );
  }

  const pending = japaneseBlocks.flatMap((text, index) => {
    if (index % 2 === 1 || !genericPattern.test(text)) return [];
    return [{ index, text: englishBlocks[index] }];
  });
  if (!pending.length) return 0;

  for (let offset = 0; offset < pending.length; offset += batchSize) {
    const translated = await translateWithFallback(pending.slice(offset, offset + batchSize));
    for (const entry of translated) japaneseBlocks[entry.index] = entry.text;
    console.log(
      `${targetFile}: 翻訳済み ${Math.min(offset + batchSize, pending.length)}/${pending.length}`
    );
  }

  if (apply) {
    const contentOffset = japaneseMarkdown.indexOf(japaneseParsed.content);
    fs.writeFileSync(
      japanesePath,
      `${japaneseMarkdown.slice(0, contentOffset)}${japaneseBlocks.join('')}`
    );
  }
  return pending.length;
}

const targetFiles = allPages
  ? content
      .files('ja')
      .filter((targetFile) =>
        genericPattern.test(fs.readFileSync(content.pathFor('ja', targetFile), 'utf8'))
      )
  : [file];

let translatedCount = 0;
for (const targetFile of targetFiles) translatedCount += await translateFile(targetFile);
console.log(`対象: ${targetFiles.length}ページ、${translatedCount}段落`);
if (!apply) {
  console.log('--apply未指定のため文書は変更していません');
} else {
  console.log('更新完了');
}
