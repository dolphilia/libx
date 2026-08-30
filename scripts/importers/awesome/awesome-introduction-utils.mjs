import crypto from 'node:crypto';
import matter from 'gray-matter';

export function sha256Text(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

export function normalizeNewlines(value) {
  return value.replace(/\r\n?/g, '\n');
}

function isContentsHeading(line) {
  return /^#{1,6}\s+(?:table\s+of\s+contents|contents|目次|索引|toc|index)(?:\s|<|$)/i.test(
    line.trim()
  );
}

function isSetextContentsHeading(lines, index) {
  return (
    /^(?:table\s+of\s+contents|contents|目次|索引|toc|index)\s*$/i.test(lines[index].trim()) &&
    /^\s*(?:=+|-+)\s*$/.test(lines[index + 1] ?? '')
  );
}

function isTocLikeHeading(lines, index) {
  const match = lines[index].trim().match(/^#{1,6}\s+(.+)$/);
  if (!match) return false;
  const label = plainText(match[1]).replace(/\s+/g, ' ').trim();
  if (!/^(?:content|summary|内容)$/i.test(label)) return false;
  const firstContentLine = lines
    .slice(index + 1)
    .find((line) => line.trim() && !/^\s*<a\b[^>]*>\s*<\/a>\s*$/i.test(line));
  return /^\s*(?:[-*+] |\d+\.\s+).*\]\(#[^)]+\)/.test(firstContentLine ?? '');
}

function isSubstantiveListLine(line) {
  if (!/^\s*(?:[-*+] |\d+\.\s+)/.test(line)) return false;
  return !/(?:shields\.io|badge(?:\.svg|s\/)|awesome\.re\/badge)/i.test(line);
}

export function detectIntroduction(markdown) {
  const parsed = matter(normalizeNewlines(markdown));
  const body = parsed.content.replace(/^\n+/, '');
  const lines = body.split('\n');
  let boundaryLine = -1;
  let boundaryKind = 'end-of-document';

  for (let index = 0; index < lines.length; index += 1) {
    if (
      isContentsHeading(lines[index]) ||
      isSetextContentsHeading(lines, index) ||
      isTocLikeHeading(lines, index)
    ) {
      boundaryLine = index;
      boundaryKind = 'contents-heading';
      break;
    }
    if (/^\.\.\s+contents::/i.test(lines[index].trim())) {
      boundaryLine = index;
      boundaryKind = 'rst-contents-directive';
      break;
    }
  }
  if (boundaryLine < 0) {
    for (let index = 0; index < lines.length; index += 1) {
      if (/^##\s+/.test(lines[index])) {
        boundaryLine = index;
        boundaryKind = 'first-h2';
        break;
      }
    }
  }
  if (boundaryLine < 0) {
    for (let index = 0; index < lines.length; index += 1) {
      if (isSubstantiveListLine(lines[index]) || /^\s*<(?:table|dl)\b/i.test(lines[index])) {
        boundaryLine = index;
        boundaryKind = /^\s*</.test(lines[index]) ? 'first-data-html' : 'first-list';
        break;
      }
    }
  }

  const prefixLines = boundaryLine < 0 ? lines : lines.slice(0, boundaryLine);
  const suffixLines = boundaryLine < 0 ? [] : lines.slice(boundaryLine);
  const prefix = `${prefixLines.join('\n').trim()}${prefixLines.join('\n').trim() ? '\n' : ''}`;
  const suffix = suffixLines.join('\n').replace(/^\n+/, '').trimEnd();
  const markdownH1 = [...body.matchAll(/^#\s+(.+)$/gm)].map((match) => match[1].trim());
  const htmlH1 = [...prefix.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) =>
    plainText(match[1])
  );
  const imageAlts = [...prefix.matchAll(/(?:alt=["']([^"']+)["']|!\[([^\]]+)\])/gi)]
    .map((match) => match[1] ?? match[2])
    .filter(Boolean);
  const flags = [];
  if (markdownH1.length === 0) flags.push('missing-markdown-h1');
  if (markdownH1.length > 1) flags.push('multiple-markdown-h1');
  if (/!\[[^\]]*\]\(|<img\b|<picture\b/i.test(prefix)) flags.push('image');
  if (/shields\.io|badge(?:\.svg|s\/)|badgen\.net|awesome\.re\/badge/i.test(prefix))
    flags.push('badge');
  if (/align\s*=\s*["']?center|text-align\s*:\s*center/i.test(prefix))
    flags.push('center-alignment');
  if (/<\/?(?:div|p|table|h[1-6]|details|summary|picture|a|sup|sub)\b/i.test(prefix))
    flags.push('layout-html');
  if (/^\s*(?:[-*+] |\d+\.\s+)/m.test(prefix)) flags.push('intro-list');
  if (/\[[^\]]+\]\([^)]+\)/.test(prefix)) flags.push('intro-link');
  if (prefix.length > 2000) flags.push('long-introduction');
  if (boundaryKind === 'end-of-document') flags.push('no-structural-boundary');
  if (
    /(?:\bwarning\b|\bcaution\b|deprecated|archived|no longer (?:maintained|updated|supported)|unmaintained|obsolete|end[ -]of[ -]life|read[ -]only)/i.test(
      plainText(prefix)
    )
  )
    flags.push('important-information-candidate');

  return {
    data: parsed.data,
    body,
    prefix,
    suffix,
    boundaryKind,
    markdownH1,
    htmlH1,
    imageAlts,
    flags: [...new Set(flags)].sort(),
    prefixSha256: sha256Text(prefix),
    suffixSha256: sha256Text(suffix),
  };
}

export function plainText(value) {
  let result = normalizeNewlines(String(value));
  result = result.replace(/\[!\[[^\]]*\]\([^)]*\)\]\([^)]*\)/g, '');
  result = result.replace(/\[!\[[^\]]*\]\[[^\]]*\]\[[^\]]*\]/g, '');
  result = result.replace(/!\[([^\]]*)\]\[[^\]]*\]/g, '$1');
  result = result.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1');
  result = result.replace(/\[([^\]]+)\]\[[^\]]*\]/g, '$1');
  result = result.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  result = result.replace(/<[^>]+>/g, ' ');
  result = result.replace(/[`*_~]/g, ' ');
  result = result.replace(/&amp;/gi, '&').replace(/&nbsp;/gi, ' ');
  result = result.replace(/&#39;|&apos;/gi, "'").replace(/&quot;/gi, '"');
  result = result.replace(/:[a-z0-9_+-]+:/gi, ' ');
  result = result.replace(/[\p{Extended_Pictographic}\p{Cf}\uFE0F]/gu, ' ');
  return result.replace(/\s+/g, ' ').trim();
}

function repositoryTopic(repository) {
  const basename = repository.split('/').at(-1) ?? repository;
  const words = basename
    .replace(/^awesome[-_.]?/i, '')
    .replace(/[-_.]+awesome$/i, '')
    .replace(/[-_.]+/g, ' ')
    .trim();
  return words
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      if (
        /^(?:api|aws|css|db|devops|dns|html|iam|ios|iot|ipfs|java|js|jvm|ml|npm|php|sql|ssh|ui|ux)$/i.test(
          word
        )
      )
        return word.toUpperCase().replace(/^IOS$/, 'iOS');
      if (/^nodejs$/i.test(word)) return 'Node.js';
      if (/^macos$/i.test(word)) return 'macOS';
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    })
    .join(' ');
}

export function deriveTopic({ sourceId, repository, detected }) {
  if (sourceId === 'sindresorhus-awesome-readme') return 'Lists';
  const introductoryH1 = [...detected.prefix.matchAll(/^#\s+(.+)$/gm)].map((match) =>
    match[1].trim()
  );
  const setextH1 = [...detected.prefix.matchAll(/^(.+)\n=+\s*$/gm)].map((match) => match[1].trim());
  const candidates = [
    ...introductoryH1,
    ...setextH1,
    ...detected.htmlH1,
    ...detected.imageAlts.filter((value) => /awesome/i.test(value)),
  ];
  for (const raw of candidates) {
    let value = plainText(raw)
      .replace(/\(https?:\/\/[^)]+\)/gi, '')
      .replace(/\b(?:build|coverage|license|chat|status)\b.*$/i, '')
      .replace(/\s*[|–—:]\s*(?:build|coverage|license|status).*$/i, '')
      .trim();
    if (!value || /^(?:contents|table of contents|目次|index)$/i.test(value)) continue;
    value = value
      .replace(/^the\s+awesome\s+/i, '')
      .replace(/^awesome\s*[-:–—]?\s*/i, '')
      .replace(/\s*[-:–—]?\s*awesome$/i, '')
      .replace(/^awesome[-_.]/i, '')
      .replace(/^[^\p{L}\p{N}.+#]+/u, '')
      .replace(/^awesome\s*[-:–—]?\s*/i, '')
      .replace(/[^\p{L}\p{N}).+#]+$/u, '')
      .replace(/\s+/g, ' ')
      .trim();
    const generic =
      /^(?:a note on repo awesomeness|about|badge|basics?|community|contribute|contributing|deprecated|education|getting started|intro|introduction|libraries|links|lists?|list badge|official|overview|projects?|related project|resources?|summary|syntax|talks|tips|tools?|usage)$/i.test(
        value
      );
    const announcement =
      /(?:check out my|deprecated|no longer|will no longer|this list|repo awesomeness)/i.test(
        value
      );
    if (!generic && !announcement && value.length >= 2 && value.length <= 100) return value;
  }
  return repositoryTopic(repository) || 'Resources';
}

export function normalizedTitle(topic, lang, sourceId) {
  if (sourceId === 'sindresorhus-awesome-readme')
    return lang === 'ja' ? 'Awesomeリスト' : 'Awesome Lists';
  return `Awesome ${topic}`.replace(/\s+/g, ' ').trim();
}

export function normalizedSummary({ topic, lang, sourceId, metadataOnly, importantStatus = null }) {
  if (sourceId === 'sindresorhus-awesome-readme') {
    return lang === 'ja'
      ? '技術、科学、ビジネス、文化など、幅広い分野のAwesomeリストを集めたディレクトリです。'
      : 'A curated directory of Awesome lists spanning technology, science, business, culture, and more.';
  }
  if (metadataOnly) {
    return lang === 'ja'
      ? `Awesome ${topic}の収録案内です。このスナップショットでは上流本文を転載していません。`
      : `An index entry for the Awesome ${topic} list. The upstream content is not reproduced in this snapshot.`;
  }
  const summary =
    lang === 'ja'
      ? `${topic}を扱う資料や関連プロジェクトをまとめたAwesomeリストです。`
      : `A curated collection of resources and projects focused on ${topic}.`;
  if (importantStatus === 'archived-or-unmaintained') {
    return lang === 'ja'
      ? `${summary} 上流ではアーカイブ済み、または更新終了と案内されています。`
      : `${summary} The upstream list is archived or no longer maintained.`;
  }
  return summary;
}

export function detectImportantStatus(detected) {
  return /(?:deprecated|archived|no longer (?:maintained|updated|supported)|unmaintained|obsolete|end[ -]of[ -]life|read[ -]only)/i.test(
    plainText(detected.prefix)
  )
    ? 'archived-or-unmaintained'
    : null;
}

function replaceFrontmatterValue(frontmatter, key, value) {
  const line = `${key}: ${JSON.stringify(value)}`;
  const pattern = new RegExp(`^${key}:.*$`, 'm');
  if (pattern.test(frontmatter)) return frontmatter.replace(pattern, line);
  return frontmatter.replace(/\n---\s*$/, `\n${line}\n---`);
}

export function applyIntroductionDecision(markdown, languageDecision, languageEvidence) {
  const normalized = normalizeNewlines(markdown);
  const closing = normalized.indexOf('\n---', 3);
  if (!normalized.startsWith('---\n') || closing < 0)
    throw new Error('frontmatterを検出できません');
  let frontmatter = normalized.slice(0, closing + 4);
  const bodyStart = closing + 4;
  const current = detectIntroduction(normalized);
  const desiredPrefix = `# ${languageDecision.title}\n\n${languageDecision.summary}\n`;
  const alreadyNormalized = current.prefix === desiredPrefix;
  const acceptedPrefixes = new Set([
    languageEvidence.originalPrefixSha256,
    ...(languageEvidence.acceptedOriginalPrefixSha256 ?? []),
  ]);
  if (!alreadyNormalized && !acceptedPrefixes.has(current.prefixSha256)) {
    throw new Error(`冒頭断片ハッシュが一致しません: ${current.prefixSha256}`);
  }
  if (current.suffixSha256 !== languageEvidence.retainedSuffixSha256) {
    throw new Error(
      `保持本文ハッシュが一致しません: ${current.suffixSha256} != ${languageEvidence.retainedSuffixSha256}`
    );
  }
  frontmatter = replaceFrontmatterValue(frontmatter, 'title', languageDecision.title);
  frontmatter = replaceFrontmatterValue(frontmatter, 'description', languageDecision.summary);
  const body = current.suffix ? `${desiredPrefix}\n${current.suffix}\n` : `${desiredPrefix}`;
  return `${frontmatter}\n\n${body}`.replace(/\n{3,}$/, '\n');
}

export function validateNormalizedIntroduction(markdown, languageDecision) {
  const parsed = matter(normalizeNewlines(markdown));
  const body = parsed.content.replace(/^\n+/, '');
  const expected = `# ${languageDecision.title}\n\n${languageDecision.summary}\n`;
  const errors = [];
  if (!body.startsWith(expected)) errors.push('本文が正規化済みタイトル・概要で開始していません');
  if (parsed.data.title !== languageDecision.title) errors.push('frontmatter titleが一致しません');
  if (parsed.data.description !== languageDecision.summary)
    errors.push('frontmatter descriptionが一致しません');
  const intro = detectIntroduction(markdown);
  const introductoryH1 = [...intro.prefix.matchAll(/^#\s+(.+)$/gm)];
  if (introductoryH1.length !== 1)
    errors.push(`frontmatter直後のMarkdown H1が1個ではありません: ${introductoryH1.length}`);
  if (/!\[[^\]]*\]\(|<img\b|<picture\b/i.test(intro.prefix)) errors.push('序文に画像があります');
  if (/align\s*=\s*["']?center|text-align\s*:\s*center/i.test(intro.prefix))
    errors.push('序文に中央揃えがあります');
  if (/<\/?(?:div|p|table|h[1-6]|details|summary|picture)\b/i.test(intro.prefix))
    errors.push('序文にレイアウトHTMLがあります');
  return errors;
}
