import { parse } from 'parse5';

const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value;
const hasClass = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name);
function walk(node, callback) {
  callback(node);
  for (const child of node.childNodes ?? []) walk(child, callback);
}
export function inspectHtml(html) {
  const document = parse(html);
  const ids = new Set();
  const duplicates = [];
  const localLinks = [];
  const tocLinks = [];
  const headings = [];
  const images = [];
  const provenanceLinks = [];
  const languageLinks = [];
  let article;
  let provenance = false;
  let provenanceText = '';
  let lang;
  walk(document, (node) => {
    if (node.tagName === 'html') lang = attr(node, 'lang');
    const id = attr(node, 'id');
    if (id) {
      if (ids.has(id)) duplicates.push(id);
      ids.add(id);
    }
    if (hasClass(node, 'sl-markdown-content')) article = node;
    if (hasClass(node, 'document-provenance')) {
      provenance = true;
      walk(node, (child) => {
        if (child.tagName === 'a') provenanceLinks.push(attr(child, 'href'));
        if (child.nodeName === '#text') provenanceText += child.value;
      });
    }
    if (node.tagName === 'starlight-toc')
      walk(node, (child) => {
        if (child.tagName === 'a') tocLinks.push(attr(child, 'href'));
      });
    if (node.tagName === 'a' && /\/v\d{4}-\d{2}-\d{2}\/\w+\//.test(attr(node, 'href') ?? ''))
      languageLinks.push(attr(node, 'href'));
  });
  function contentWalk(node) {
    if (hasClass(node, 'document-provenance') || hasClass(node, 'navigation-container')) return;
    if (/^h[1-6]$/.test(node.tagName ?? ''))
      headings.push({ depth: Number(node.tagName[1]), id: attr(node, 'id') });
    if (['img', 'video', 'iframe', 'picture'].includes(node.tagName))
      images.push(attr(node, 'src') ?? node.tagName);
    if (node.tagName === 'a') localLinks.push(attr(node, 'href'));
    for (const child of node.childNodes ?? []) contentWalk(child);
  }
  if (article) contentWalk(article);
  const missingAnchors = [...localLinks, ...tocLinks]
    .filter((url) => url?.startsWith('#') && url.length > 1)
    .filter((url) => {
      try {
        return !ids.has(decodeURIComponent(url.slice(1)));
      } catch {
        return true;
      }
    });
  return {
    article: Boolean(article),
    ids: [...ids],
    duplicates,
    localLinks,
    tocLinks,
    headings,
    images,
    provenance,
    provenanceLinks,
    provenanceText,
    lang,
    languageLinks,
    missingAnchors,
  };
}
export function validateHtml(html, { minLevel = 2, maxLevel = 3, maxItems, licenseSource } = {}) {
  const report = inspectHtml(html);
  const errors = [];
  if (!report.article) errors.push('本文article欠落');
  if (!report.provenance || report.provenanceLinks.length < 2)
    errors.push('出典欄または出典・ライセンスリンク欠落');
  if (
    licenseSource &&
    (!report.provenanceLinks.includes(licenseSource.sourceUrl) ||
      !report.provenanceLinks.includes(licenseSource.licenseUrl))
  )
    errors.push('出典リンクが設定と不一致');
  if (licenseSource?.author && !report.provenanceText.includes(licenseSource.author))
    errors.push('出典の著作者が設定と不一致');
  if (
    licenseSource?.copyrightNotice &&
    !report.provenanceText.includes(licenseSource.copyrightNotice)
  )
    errors.push('出典の著作権通知欠落');
  for (const link of licenseSource?.attributionLinks ?? [])
    if (!report.provenanceLinks.includes(link.url)) errors.push('出典の帰属リンク欠落');
  for (const note of licenseSource?.provenanceNotes ?? [])
    if (!report.provenanceText.includes(report.lang === 'ja' ? note.ja : note.en))
      errors.push('出典の原文通知欠落');
  if (report.headings.filter((h) => h.depth === 1).length !== 1) errors.push('単一H1ではない');
  if (report.images.length) errors.push('本文に埋め込み画像・動画残存');
  if (report.duplicates.length) errors.push(`重複ID: ${report.duplicates.join(', ')}`);
  if (report.missingAnchors.length)
    errors.push(`リンク先アンカー欠落: ${report.missingAnchors.join(', ')}`);
  const expectedToc = report.headings
    .filter((h) => h.depth >= minLevel && h.depth <= maxLevel)
    .slice(0, maxItems)
    .map((h) => `#${h.id}`);
  const actualToc = [...new Set(report.tocLinks)];
  if (JSON.stringify(actualToc) !== JSON.stringify(expectedToc))
    errors.push('自動目次と本文対象見出しが不一致');
  return { report, errors };
}
