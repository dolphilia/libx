import { hash } from './editorial-utils.mjs';

// 混在した原文のライセンス表記や通知を、採用ライセンスを変えずに保持する。
export function provenanceNotesBySource(records, sources, readInput) {
  if (!Array.isArray(records)) throw new Error('原文出典通知の記録が不正です');
  const result = new Map();
  for (const record of records) {
    const source = sources.get(record.sourceId);
    if (
      !source ||
      result.has(record.sourceId) ||
      record.commitSha !== source.commitSha ||
      !record.reason?.trim() ||
      !Array.isArray(record.notes) ||
      !record.notes.length
    )
      throw new Error(`固定出典と原文通知が不一致: ${record.sourceId}`);
    const notes = [];
    for (const note of record.notes) {
      const evidence = note.evidence;
      const expectedHash =
        evidence?.documentPath === source.documentPath
          ? source.documentSha256
          : evidence?.documentPath === source.licensePath
            ? source.licenseSha256
            : undefined;
      if (
        !expectedHash ||
        evidence.sha256 !== expectedHash ||
        !Array.isArray(evidence.lines) ||
        evidence.lines.length !== 2 ||
        !Number.isSafeInteger(evidence.lines[0]) ||
        !Number.isSafeInteger(evidence.lines[1]) ||
        evidence.lines[0] < 1 ||
        evidence.lines[1] < evidence.lines[0] ||
        typeof note.text?.en !== 'string' ||
        !note.text.en.trim() ||
        typeof note.text?.ja !== 'string' ||
        !note.text.ja.trim()
      )
        throw new Error(`原文通知の入力・訳語が不正: ${record.sourceId}`);
      const raw = readInput(expectedHash), lines = raw.split(/\r?\n/);
      const excerpt = lines.slice(evidence.lines[0] - 1, evidence.lines[1]).join('\n');
      if (
        hash(raw) !== expectedHash ||
        evidence.lines[1] > lines.length ||
        !excerpt.trim() ||
        hash(excerpt) !== evidence.excerptHash
      )
        throw new Error(`原文通知の該当行が不一致: ${record.sourceId}`);
      notes.push(note.text);
    }
    result.set(record.sourceId, notes);
  }
  return result;
}
