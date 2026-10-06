#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const allowedRoot = path.join(rootDir, 'apps/lua/src/content/docs/v5-5-1');

function optionValue(args, name, fallback) {
  const equals = args.find((argument) => argument.startsWith(`${name}=`));
  if (equals) return equals.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] && !args[index + 1].startsWith('--')
    ? args[index + 1]
    : fallback;
}

function joinJapaneseInline(parts) {
  return parts.reduce((result, part) => {
    const value = part.trim();
    if (!value) return result;
    if (!result) return value;
    const noSpace =
      /[（「『【［｛]$/.test(result) ||
      /^[）：、。，．！？；：」』】］｝]/.test(value) ||
      /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]$/u.test(result) ||
      /^[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(value) ||
      (/`$/.test(result) && /^[）：、。，．！？；：]/.test(value)) ||
      (/[（]$/.test(result) && /^`/.test(value));
    return `${result}${noSpace ? '' : ' '}${value}`;
  }, '');
}

export function collapseDefinitionItems(source) {
  const lines = source.split('\n');
  const output = [];

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (!/^- \*\*.+\*\*/.test(line) || !/^\s*$/.test(lines[index + 1] ?? 'x')) {
      output.push(line);
      continue;
    }

    const fragments = [];
    let cursor = index + 1;
    let valid = true;
    while (cursor < lines.length) {
      const candidate = lines[cursor];
      if (/^\s*$/.test(candidate)) {
        cursor++;
        continue;
      }
      const continuation = candidate.match(/^  (.*)$/);
      if (!continuation) break;
      if (/^(?:[-*+] |\d+\. |```|~~~)/.test(continuation[1])) {
        valid = false;
        break;
      }
      fragments.push(continuation[1]);
      cursor++;
    }

    if (!valid || fragments.length === 0) {
      output.push(line);
      continue;
    }

    const suffix = joinJapaneseInline(fragments);
    output.push(`${line}${/^[：]/.test(suffix) ? '' : ' '}${suffix}`);
    index = cursor - 1;
  }

  return output.join('\n');
}

export function removeGeneratedSourceNotice(source) {
  const match = source.match(/^(---\n[\s\S]*?\n---\n\n)(> [^\n]+)(\n\n)/);
  if (!match) return source;
  const notice = match[2];
  const isKnownNotice =
    /^> このページは/.test(notice) &&
    /https:\/\/www\.lua\.org\/(?:manual\/5\.5\/manual\.html|bugs\.html|ftp\/lua-5\.5\.1\.tar\.gz)/.test(
      notice
    ) &&
    /libx向け/.test(notice);
  return isKnownNotice ? `${match[1]}${source.slice(match[0].length)}` : source;
}

function listMarkdownFiles(directory) {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .flatMap((entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory()
        ? listMarkdownFiles(entryPath)
        : entry.isFile() && entry.name.endsWith('.md')
          ? [entryPath]
          : [];
    })
    .sort();
}

export function runCli(args = process.argv.slice(2)) {
  const language = optionValue(args, '--language', 'ja');
  if (!/^[a-zA-Z0-9-]+$/.test(language) || language === 'en') {
    throw new Error(`翻訳言語として扱えません: ${language}`);
  }
  const targetRoot = path.resolve(allowedRoot, language);
  if (!targetRoot.startsWith(`${allowedRoot}${path.sep}`) || !fs.existsSync(targetRoot)) {
    throw new Error(`Lua翻訳ディレクトリがありません: ${targetRoot}`);
  }

  const checkOnly = args.includes('--check');
  const dryRun = args.includes('--dry-run');
  const changed = [];
  for (const filePath of listMarkdownFiles(targetRoot)) {
    const before = fs.readFileSync(filePath, 'utf8');
    const after = collapseDefinitionItems(removeGeneratedSourceNotice(before));
    if (before === after) continue;
    changed.push(path.relative(targetRoot, filePath));
    if (!checkOnly && !dryRun) fs.writeFileSync(filePath, after);
  }

  if (checkOnly && changed.length) {
    throw new Error(`Lua翻訳の書式が未正規化です:\n${changed.join('\n')}`);
  }
  console.log(
    `${dryRun ? 'dry-run: ' : ''}Lua翻訳書式: ${changed.length}ファイル${checkOnly ? '（差分なし）' : ''}`
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    runCli();
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
