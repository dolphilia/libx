import fs from 'node:fs';
import path from 'node:path';
import { root, editorial, hash, json, jsonExists, storeBlob, blob } from './editorial-utils.mjs';

export function makePatch(before, after) {
  let start = 0;
  while (start < before.length && start < after.length && before[start] === after[start]) start++;
  let suffix = 0;
  while (
    suffix < before.length - start &&
    suffix < after.length - start &&
    before[before.length - 1 - suffix] === after[after.length - 1 - suffix]
  )
    suffix++;
  return {
    input: storeBlob(before),
    output: storeBlob(after),
    start,
    deleteLength: before.length - start - suffix,
    insert: storeBlob(after.slice(start, after.length - suffix)),
  };
}
export function applyPatch(input, patch) {
  if (hash(input) !== patch.input)
    throw new Error(`編集差分の入力不一致: ${hash(input)} != ${patch.input}`);
  if (
    !Number.isSafeInteger(patch.start) ||
    !Number.isSafeInteger(patch.deleteLength) ||
    patch.start < 0 ||
    patch.deleteLength < 0 ||
    patch.start + patch.deleteLength > input.length
  )
    throw new Error('編集差分の範囲が不正');
  const output =
    input.slice(0, patch.start) +
    blob(patch.insert) +
    input.slice(patch.start + patch.deleteLength);
  if (hash(output) !== patch.output) throw new Error('編集差分の出力不一致');
  return output;
}
const manifests = new Map();
export function regeneration(version) {
  const file = path.join(editorial, 'overlays', version, 'REGENERATION.json');
  if (!fs.existsSync(file)) return null;
  const stat = fs.statSync(file);
  const cached = manifests.get(file);
  if (cached?.mtimeMs === stat.mtimeMs && cached?.size === stat.size) return cached.value;
  const value = json(file);
  manifests.set(file, { mtimeMs: stat.mtimeMs, size: stat.size, value });
  return value;
}
function entryFor(version, sourceId) {
  const manifest = regeneration(version);
  if (!manifest) return null;
  const entry = manifest.entries.find((e) => e.sourceId === sourceId);
  if (!entry) throw new Error(`再生成台帳にない取得元: ${version}/${sourceId}`);
  return entry;
}
export function editorialStages(version, sourceId) {
  const file = path.join(editorial, 'overlays', version, `${sourceId}.json`);
  return fs.existsSync(file) ? json(file) : { en: [], ja: [] };
}
export function assertFixedEditorialInput(original, source, version) {
  const entry = entryFor(version, source.sourceId);
  if (entry && entry.fixedInput !== hash(original))
    throw new Error(`固定原文が変化: ${version}/${source.sourceId}`);
}
export function replayEditorialImport(input, sourceId, version) {
  const entry = entryFor(version, sourceId);
  if (!entry) return null;
  let output = applyPatch(input, entry.existingEnglishCorrections);
  for (const stage of editorialStages(version, sourceId).en) output = applyPatch(output, stage);
  return output;
}
export function regeneratePair(version, sourceId) {
  const entry = entryFor(version, sourceId);
  if (!entry) throw new Error(`再生成基盤未作成: ${version}`);
  const en = replayEditorialImport(blob(entry.existingEnglishCorrections.input), sourceId, version);
  let ja = blob(entry.existingJapanese);
  const stages = editorialStages(version, sourceId);
  for (const stage of stages.ja) ja = applyPatch(ja, stage);
  if ((stages.en.length || stages.ja.length) && stages.correspondingEnglish !== hash(en))
    throw new Error(`日本語の対応英語ハッシュが古い: ${version}/${sourceId}`);
  return { en, ja };
}
// 公開用生成と旧序文生成は、厳密に再現した成果物だけを受け入れる。
export function assertEditorialPublic(input, sourceId, version, lang) {
  if (!entryFor(version, sourceId)) return false;
  const output = regeneratePair(version, sourceId)[lang];
  if (hash(input) !== hash(output))
    throw new Error(`未記録の編集または古い生成物: ${version}/${sourceId}/${lang}`);
  return true;
}
export function publicPath(entry, lang) {
  return path.join(root, entry.paths[lang]);
}

export function normalizeEditorialCodeTokens(tokens, content, sourceId, version, lang) {
  const file = path.join(editorial, version, `${sourceId}.json`);
  if (!jsonExists(file)) return tokens;
  const record = json(file);
  if (!record.displayTokens?.length) return tokens;
  if (record.hashes?.[lang] !== hash(content))
    throw new Error(`表示トークンの判断記録が古い: ${version}/${sourceId}/${lang}`);
  return tokens.map((value, index) => {
    const token = record.displayTokens.find(
      (t) =>
        t.kind === 'display-only' &&
        t.reason &&
        t.evidence &&
        t[lang] === value &&
        t.positions?.[lang]?.includes(index)
    );
    return token ? token.id : value;
  });
}
