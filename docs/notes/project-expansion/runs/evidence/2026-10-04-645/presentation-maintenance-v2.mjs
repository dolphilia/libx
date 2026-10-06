import fs from 'node:fs';
import matter from 'gray-matter';

// An explicit, hash-pinned bridge preserves a past content review after a
// presentation-only migration. It never refreshes the old review or CAS inputs.
export function loadPresentationMaintenance(root, references, helpers, errors) {
  const { safePath, hashFile, sha256 } = helpers;
  const entries = [];
  const readPinned = (record) => {
    const target = safePath(root, record.path);
    if (hashFile(target) !== record.sha256) throw new Error(`保守証拠のハッシュ失効: ${record.path}`);
    return fs.readFileSync(target, 'utf8');
  };
  const normalizePolicy = (text) => text
    .replace(/(?:ユーザーが承認した|ユーザー承認済みの|承認された|承認済みの)運用方針(?:に基づき|に従い)|ユーザー承認に基づき/g, 'Libxの運用方針に基づき')
    .replace(/Under the (?:user-approved|approved) operating policy|Under user approval/gi, 'Under Libx’s operating policy');
  for (const reference of references ?? []) {
    try {
      const manifest = JSON.parse(readPinned(reference));
      if (manifest.schemaVersion !== 1 || manifest.kind !== 'libx-source-notes-footer-migration') throw new Error('未対応の保守変換');
      const migration = JSON.parse(readPinned(manifest.migration));
      const validation = JSON.parse(readPinned(manifest.validation));
      if (validation.issues.length || validation.checkedPages !== migration.files || validation.reconstructedBodies !== migration.files) throw new Error('保守検証が未完了');
      if (!readPinned(manifest.build).includes('[build] Complete!') || !/fail 0/.test(readPinned(manifest.runtimeTests))) throw new Error('ビルド・回帰証拠が未完了');
      const documents = new Map(migration.records.map(record => [record.path, record]));
      const prepared = [];
      for (const entry of manifest.files) {
        if (entry.kind === 'historical-policy') {
          if (!/^docs\/(plans\/CONTINUOUS_DOCUMENT_PROJECT_EXPANSION_PLAN\.md|notes\/project-expansion\/POLICY\.json)$/.test(entry.path)) throw new Error('履歴参照の範囲外');
          const originalText = readPinned(entry.snapshot);
          if (sha256(originalText) !== entry.before) throw new Error('履歴ハッシュが不一致');
          prepared.push({ ...entry, originalText });
          continue;
        }
        const current = fs.readFileSync(safePath(root, entry.path), 'utf8');
        if (sha256(current) !== entry.after) throw new Error(`保守後のファイルが変更された: ${entry.path}`);
        let originalText;
        if (entry.kind === 'document-context') {
          const record = documents.get(entry.path);
          if (!record || record.before !== entry.before || record.after !== entry.after) throw new Error('文書保守の対応が不一致');
          const body = current.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '');
          if (sha256(body) !== record.bodyAfter) throw new Error('保守後本文の不一致');
          let restored = body;
          for (const note of record.notes) {
            if (normalizePolicy(note.original) !== note.normalized) throw new Error('許可された運用表現以外の変更');
            restored = restored.slice(0, note.start) + note.original + restored.slice(note.start);
          }
          if (sha256(restored) !== record.bodyBefore) throw new Error('元の本文を復元できない');
          originalText = entry.frontmatterBefore + restored;
          const data = structuredClone(matter(current).data);
          if (sha256(JSON.stringify(data.documentContext)) !== entry.contextSha256) throw new Error('移動注記が不一致');
          delete data.documentContext;
          if (JSON.stringify(data) !== JSON.stringify(matter(entry.frontmatterBefore).data)) throw new Error('配置以外のFrontmatter変更');
        } else if (entry.kind === 'presentation-source') {
          const allowed = /^(?:packages\/(?:ui\/src\/components\/DocumentProvenance\.astro|content-utils\/src\/content-schema\.ts)|(?:templates\/docs-site|apps\/[^/]+)\/src\/(?:layouts\/DocLayout\.astro|pages\/\[version\]\/\[lang\]\/\[\.\.\.slug\]\.astro)|scripts\/sync-docs-layouts\.js|tests\/runtime\/document-provenance-contract\.test\.js)$/;
          if (!allowed.test(entry.path) || entry.path.startsWith('apps/awesome/')) throw new Error('表示用ファイルの範囲外');
          originalText = readPinned(entry.snapshot);
        } else throw new Error('不明な保守変換種別');
        if (sha256(originalText) !== entry.before) throw new Error(`変更前のファイルハッシュが不一致: ${entry.path}`);
        prepared.push({ ...entry, originalText });
      }
      const documentPaths = prepared.filter(entry => entry.kind === 'document-context').map(entry => entry.path);
      if (documentPaths.length !== migration.files || new Set(documentPaths).size !== migration.files ||
          documentPaths.some(file => !documents.has(file))) throw new Error('保守ページ集合に欠落・重複');
      entries.push(...prepared);
    } catch (error) { errors.push(`表示保守: ${error.message}`); }
  }
  return (record, mode = 'current') => entries.find(entry =>
    entry.path === record.path && entry.before === record.sha256 &&
    (entry.kind === 'historical-policy' ? mode === 'history' : mode === 'current')
  )?.originalText;
}
