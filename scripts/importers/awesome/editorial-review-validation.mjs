import { analyze, hash } from './editorial-utils.mjs';
import matter from 'gray-matter';

export function covers(length, ranges) {
  if (!Array.isArray(ranges) || !ranges.length) return false;
  let end = 0;
  for (const range of [...ranges].sort((a, b) => a.start - b.start)) {
    if (
      !Number.isSafeInteger(range.start) ||
      !Number.isSafeInteger(range.end) ||
      range.start < 0 ||
      range.end <= range.start ||
      range.end > length ||
      range.start > end
    )
      return false;
    end = Math.max(end, range.end);
  }
  return end === length;
}
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const actions = new Set(['keep', 'rewrite', 'remove', 'relocate', 'textualize', 'needs-decision']);
export function validatedAnchorAliasUnits(aliases, analysis, markdown, lang) {
  const body = matter(markdown).content;
  const ids = new Set();
  const names = new Set();
  const errors = [];
  // 空の見出し内アンカーだけを構造比較から除外する。表示本文・リンクは除外しない。
  for (const alias of (aliases ?? []).filter((item) => item.lang === lang)) {
    const [open, close] = (alias.units ?? []).map((id) =>
      analysis.units.find((unit) => unit.id === id)
    );
    const fragment = open && close ? body.slice(open.start, close.end) : '';
    const valid =
      alias.reason &&
      alias.evidence &&
      typeof alias.id === 'string' &&
      // 絵文字付き旧見出しのslugに残る先頭/末尾VS16とハイフンを許可する。
      // 空要素・見出し内の位置・証拠の検査は通常の別名と同じく維持する。
      /^(?:\uFE0F-)?[\p{L}\p{N}_-]+(?:-\uFE0F)?$/u.test(alias.id) &&
      alias.units?.length === 2 &&
      open?.type === 'html' &&
      close?.type === 'html' &&
      close.start === open.end &&
      fragment === `<a id="${alias.id}"></a>` &&
      !names.has(alias.id) &&
      !ids.has(open.id) &&
      !ids.has(close.id) &&
      analysis.units.some(
        (unit) => unit.type === 'heading' && unit.start <= open.start && unit.end >= close.end
      );
    if (!valid) {
      errors.push(`${lang}: アンカー別名の根拠・位置・空要素が不正`);
      continue;
    }
    names.add(alias.id);
    ids.add(open.id);
    ids.add(close.id);
  }
  return { ids, errors };
}
export function validateReview(record, inputs) {
  const errors = [];
  const before = analyze(inputs.baselineEn);
  const en = analyze(inputs.en);
  const ja = analyze(inputs.ja);
  const units = new Map(before.units.map((u) => [u.id, u]));
  const outputs = {
    en: new Map(en.units.map((u) => [u.id, u])),
    ja: new Map(ja.units.map((u) => [u.id, u])),
  };
  const seen = new Set();
  const destinations = { en: new Set(), ja: new Set() };
  for (const decision of record.decisions ?? []) {
    if (!actions.has(decision.action) || decision.action === 'needs-decision')
      errors.push('未確定の判断');
    if (!decision.reason || !decision.evidence) errors.push('判断理由・原文証拠欠落');
    const baseline = (decision.units ?? [])
      .map((id) => {
        if (!units.has(id) || seen.has(id)) errors.push(`編集前単位の欠落・重複: ${id}`);
        seen.add(id);
        return units.get(id);
      })
      .filter(Boolean);
    if (!baseline.length) errors.push('判断に編集前単位がない');
    for (const lang of ['en', 'ja']) {
      const target = (decision.destinations?.[lang] ?? [])
        .map((id) => {
          if (!outputs[lang].has(id) || destinations[lang].has(id))
            errors.push(`行先の欠落・重複: ${lang}/${id}`);
          destinations[lang].add(id);
          return outputs[lang].get(id);
        })
        .filter(Boolean);
      if (['remove', 'relocate'].includes(decision.action)) {
        if (target.length) errors.push('除去ブロックに本文行先がある');
        if (decision.action === 'relocate' && !decision.provenanceEvidence)
          errors.push('移動先の出典・通知証拠がない');
      } else if (!target.length) errors.push(`保持する単位に行先がない: ${lang}`);
      if (
        decision.action === 'keep' &&
        lang === 'en' &&
        !same(
          baseline.map((u) => u.sha256),
          target.map((u) => u.sha256)
        )
      )
        errors.push('keep単位の英語が変更されている');
      const previousLinks = baseline.flatMap((u) => u.links);
      const nextLinks = target.flatMap((u) => u.links);
      if (!['remove', 'relocate'].includes(decision.action) && !same(previousLinks, nextLinks)) {
        const change = decision.linkChanges?.[lang];
        if (
          !change?.reason ||
          !same(change.before, previousLinks) ||
          !same(change.after, nextLinks)
        )
          errors.push(`無記録のURL変更: ${lang}/${decision.units}`);
      }
    }
  }
  for (const id of units.keys()) if (!seen.has(id)) errors.push(`編集前単位に行先がない: ${id}`);
  for (const addition of record.additions ?? []) {
    if (!addition.reason || !addition.evidence) errors.push('追加単位の根拠欠落');
    for (const lang of ['en', 'ja'])
      for (const id of addition.destinations?.[lang] ?? []) {
        if (!outputs[lang].has(id) || destinations[lang].has(id))
          errors.push(`追加行先が不正: ${lang}/${id}`);
        destinations[lang].add(id);
      }
  }
  for (const lang of ['en', 'ja'])
    for (const id of outputs[lang].keys())
      if (!destinations[lang].has(id)) errors.push(`成果物単位が無記録: ${lang}/${id}`);
  if (!same(en.links, ja.links)) errors.push('英日URL集合・順序不一致');
  if (
    !same(
      en.headings.map((h) => h.depth),
      ja.headings.map((h) => h.depth)
    )
  )
    errors.push('英日見出し階層不一致');
  const aliasUnits = {};
  for (const [lang, analysis] of [
    ['en', en],
    ['ja', ja],
  ]) {
    const result = validatedAnchorAliasUnits(record.anchorAliases, analysis, inputs[lang], lang);
    aliasUnits[lang] = result.ids;
    errors.push(...result.errors);
  }
  if (
    !same(
      en.units.filter((u) => !aliasUnits.en.has(u.id)).map((u) => u.type),
      ja.units.filter((u) => !aliasUnits.ja.has(u.id)).map((u) => u.type)
    )
  )
    errors.push('英日本文構造不一致');
  // 表示用トークンだけを明示した対応表で比較。プログラムのコードは厳密一致。
  const normalizeCode = (codes, lang) =>
    codes.map((c, index) => {
      const occurrence = codes.slice(0, index).filter((item) => item.type === 'inlineCode').length;
      const token = (record.displayTokens ?? []).find(
        (t) =>
          c.type === 'inlineCode' &&
          t[lang] === c.value &&
          t.positions?.[lang]?.includes(occurrence)
      );
      return token ? { ...c, value: token.id } : c;
    });
  for (const token of record.displayTokens ?? [])
    if (
      token.kind !== 'display-only' ||
      !token.id ||
      !token.reason ||
      !token.evidence ||
      !token.en ||
      !token.ja ||
      !Array.isArray(token.positions?.en) ||
      !Array.isArray(token.positions?.ja)
    )
      errors.push('表示トークン対応表の根拠不足');
  if (!same(normalizeCode(en.code, 'en'), normalizeCode(ja.code, 'ja')))
    errors.push('英日コード不一致');
  if (!same(before.code, en.code)) {
    if (
      !record.codeChanges?.reason ||
      !same(record.codeChanges.before, before.code) ||
      !same(record.codeChanges.after, en.code)
    )
      errors.push('無記録のコード消失・変更');
  }
  for (const [lang, analysis] of [
    ['en', en],
    ['ja', ja],
  ]) {
    if (analysis.metrics.h1 !== 1) errors.push(`${lang}: 単一H1ではない`);
    const h1 = analysis.headings.find((h) => h.depth === 1);
    const h1Unit = analysis.units.find((u) => u.type === 'heading' && u.lines[0] === h1?.line);
    let titleText = h1?.text;
    const body = matter(inputs[lang]).content;
    // 検証済みの空別名は表示タイトルを変えない。未記録・非空HTMLは除外しない。
    for (const unit of analysis.units)
      if (aliasUnits[lang].has(unit.id) && h1Unit?.start <= unit.start && h1Unit.end >= unit.end)
        titleText = titleText?.replace(body.slice(unit.start, unit.end), '');
    if (analysis.frontmatter.title !== titleText) errors.push(`${lang}: title/H1不一致`);
    if (!analysis.frontmatter.description?.trim()) errors.push(`${lang}: description欠落`);
    if (analysis.metrics.images) errors.push(`${lang}: 埋め込み画像・動画が残存`);
    if (analysis.headings.some((h) => !h.text.trim())) errors.push(`${lang}: 空見出し`);
    for (const unit of analysis.units) {
      if (
        unit.decorations?.length &&
        !(record.residualExceptions ?? []).some(
          (r) => r.lang === lang && r.units.includes(unit.id) && r.reason && r.evidence
        )
      )
        errors.push(`${lang}: 絵文字候補の保持根拠不足: ${unit.id}`);
    }
    if (analysis.metrics.manualTocCandidates) {
      const candidates = analysis.units.filter(
        (u) => u.type === 'listItem' && u.links.some((url) => url.startsWith('#'))
      );
      for (const unit of candidates)
        if (
          !(record.retainedAnchorLists ?? []).some(
            (r) => r.lang === lang && r.units.includes(unit.id) && r.reason && r.evidence
          )
        )
          errors.push(`${lang}: アンカー一覧の保持根拠がない: ${unit.id}`);
    }
  }
  if (en.frontmatter.licenseSource !== ja.frontmatter.licenseSource) errors.push('英日出典不一致');
  const review = record.review;
  if (
    review?.kind !== 'ai-content-review' ||
    !review.model ||
    !review.reviewedAt ||
    review.separatePass !== true
  )
    errors.push('編集後の別パスAI内容レビュー証拠不足');
  const required = {
    baselineEn: inputs.baselineEn,
    baselineJa: inputs.baselineJa,
    en: inputs.en,
    ja: inputs.ja,
  };
  if (inputs.raw !== undefined) required.raw = inputs.raw;
  for (const [key, content] of Object.entries(required)) {
    if (record.hashes?.[key] !== hash(content)) errors.push(`レビュー対象ハッシュが古い: ${key}`);
    if (!covers(content.length, review?.coverage?.[key])) errors.push(`未読範囲がある: ${key}`);
    if (
      !same(
        review?.reviewedUnits?.[key],
        analyze(content).units.map((u) => u.id)
      )
    )
      errors.push(`レビュー単位の確認範囲が不完全: ${key}`);
  }
  if (inputs.raw === undefined && !record.metadataEvidence?.checked)
    errors.push('metadata-only案内の根拠未確認');
  if (!Array.isArray(review?.findings) || !Array.isArray(review?.retainedEnglishReasons))
    errors.push('意味上の指摘・英語保持理由の記録欠落');
  for (const item of review?.findings ?? [])
    if (item.resolved !== true) errors.push('未解決の意味上の指摘');
  if (!record.anchorAudit?.checked || !record.provenanceAudit?.checked)
    errors.push('アンカー参照・出典表示の確認不足');
  if (!record.validation?.build?.passed || !record.validation?.preview?.passed)
    errors.push('ビルド・ローカル表示未検証');
  if (!record.validation?.html?.passed) errors.push('生成HTML未検証');
  if (
    record.validation?.hashes?.en !== hash(inputs.en) ||
    record.validation?.hashes?.ja !== hash(inputs.ja)
  )
    errors.push('表示検証対象ハッシュが古い');
  return errors;
}
