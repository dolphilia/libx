import { unified } from 'unified';
import remarkParse from 'remark-parse';

const parser = unified().use(remarkParse);

function matchesRecordedLink(originalUrl, link, source) {
  if (link.originalUrl === undefined) return originalUrl === link.url;
  if (
    typeof link.originalUrl !== 'string' ||
    !/^\.{1,2}\//.test(link.originalUrl) ||
    originalUrl !== link.originalUrl ||
    !/^[\w.-]+\/[\w.-]+$/.test(source.repository ?? '')
  ) return false;

  // 相対参照の元表記と、同じ固定コミット内の解決先を両方検証する。
  const prefix = `https://github.com/${source.repository}/blob/${source.commitSha}/`;
  const resolved = new URL(link.originalUrl, prefix + source.documentPath).href;
  return resolved.startsWith(prefix) && resolved === link.url;
}

// 出典・帰属リンクを、固定入力の該当行と解決先の証拠付きで共通出典へ移す。
export function attributionLinksBySource(records, sources, readInput) {
  if (!Array.isArray(records)) throw new Error('出典帰属リンクの記録が不正です');
  const result = new Map();
  for (const record of records) {
    const source = sources.get(record.sourceId);
    if (
      !source ||
      result.has(record.sourceId) ||
      record.commitSha !== source.commitSha ||
      record.documentPath !== source.documentPath ||
      record.rawHash !== source.documentSha256 ||
      !record.reason ||
      !record.links?.length
    )
      throw new Error(`固定原文と帰属リンクが不一致: ${record.sourceId}`);
    const raw = readInput(record.rawHash);
    const tree = parser.parse(raw);
    const definitions = new Map();
    const nodes = [];
    const visit = (node) => {
      nodes.push(node);
      if (node.type === 'definition') definitions.set(node.identifier, node.url);
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
    for (const link of record.links) {
      if (
        !/^https?:\/\//.test(link.url ?? '') ||
        !link.label?.en?.trim() ||
        !link.label?.ja?.trim() ||
        !Array.isArray(link.evidenceLines) ||
        link.evidenceLines.length !== 2 ||
        !Number.isSafeInteger(link.evidenceLines[0]) ||
        !Number.isSafeInteger(link.evidenceLines[1]) ||
        link.evidenceLines[0] < 1 ||
        link.evidenceLines[1] < link.evidenceLines[0] ||
        !nodes.some((node) =>
          ['link', 'linkReference'].includes(node.type) &&
          matchesRecordedLink(
            node.type === 'link' ? node.url : definitions.get(node.identifier),
            link,
            source
          ) &&
          node.position.start.line >= link.evidenceLines[0] &&
          node.position.end.line <= link.evidenceLines[1]
        )
      )
        throw new Error(`原文に帰属リンクの証拠がありません: ${record.sourceId}`);
    }
    result.set(
      record.sourceId,
      record.links.map(({ url, label }) => ({ url, label }))
    );
  }
  return result;
}
