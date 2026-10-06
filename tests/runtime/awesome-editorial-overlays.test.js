import assert from 'node:assert/strict';
import test from 'node:test';
import {
  analyze,
  editorial,
  json,
  hash,
  save,
} from '../../scripts/importers/awesome/editorial-utils.mjs';
import {
  applyPatch,
  makePatch,
  regeneration,
  regeneratePair,
  assertEditorialPublic,
  assertFixedEditorialInput,
  normalizeEditorialCodeTokens,
} from '../../scripts/importers/awesome/editorial-overlays.mjs';
import path from 'node:path';
import fs from 'node:fs';
import { validateHtml } from '../../scripts/importers/awesome/editorial-html-validation.mjs';
import {
  covers,
  validateReview,
  validatedAnchorAliasUnits,
} from '../../scripts/importers/awesome/editorial-review-validation.mjs';

test('埋め込み媒体は描画ノードで検出し、コードとエスケープ文字列を除外する', () => {
  const examples = '# Examples\n\n`$("<img>")` と `![image](example.png)`\n\n```html\n<img src="example.png">\n<video></video>\n<iframe></iframe>\n![image](example.png)\n```\n\n&lt;img&gt; と \\![literal](example.png)\n';
  assert.equal(analyze(examples).metrics.images, 0);
  const rendered = examples + '\n![inline](one.png)\n\n![reference][media]\n\n[media]: two.png\n\n<div><IMG src="three.png"><video></video><iframe></iframe></div>\n\n- ![nested](four.png)\n';
  assert.equal(analyze(rendered).metrics.images, 6);
  assert.equal(analyze('# Heading <img src="five.png">\n').metrics.images, 1);
});

test('互換アンカーの構造例外は根拠のある空の見出し内別名だけを許す', () => {
  const markdown = '# Tools\n\n## 資料 <a id="resources"></a>\n';
  const analysis = analyze(markdown);
  const units = analysis.units.filter((u) => u.type === 'html').map((u) => u.id);
  const aliases = [{ lang: 'ja', id: 'resources', units, reason: '互換', evidence: '旧ID' }];
  const result = validatedAnchorAliasUnits(aliases, analysis, markdown, 'ja');
  assert.deepEqual([...result.ids], units);
  assert.deepEqual(result.errors, []);
  for (const invalid of [
    '# Tools\n\n<a id="resources"></a>\n',
    '# Tools\n\n## 資料 <a id="resources" href="https://example.org"></a>\n',
    '# Tools\n\n## 資料 <a id="resources">説明</a>\n',
  ]) {
    const parsed = analyze(invalid);
    const declaration = [
      { ...aliases[0], units: parsed.units.filter((u) => u.type === 'html').map((u) => u.id) },
    ];
    const check = validatedAnchorAliasUnits(declaration, parsed, invalid, 'ja');
    assert.equal(check.ids.size, 0);
    assert.ok(check.errors.length);
  }
  assert.ok(
    validatedAnchorAliasUnits([...aliases, ...aliases], analysis, markdown, 'ja').errors.length
  );
  assert.ok(
    validatedAnchorAliasUnits([{ ...aliases[0], evidence: '' }], analysis, markdown, 'ja').errors
      .length
  );
});

test('旧絵文字slugの端のVS16はハイフン付きの空アンカーだけを許す', () => {
  for (const [id, accepted] of [
    ['\uFE0F-tools', true],
    ['\uFE0F-middlewares', true],
    ['fixed-wing--planes-\uFE0F', true],
    ['flight-control-\uFE0F', true],
    ['tools\uFE0F', false],
    ['tools-\uFE0F\uFE0F', false],
    ['-tools', true],
    ['to\uFE0Fols', false],
    ['\uFE0Ftools', false],
    [' tools', false],
    ['to"ols', false],
    ['\u200D-tools', false],
  ]) {
    const markdown = `# Tools\n\n## 資料 <a id="${id}"></a>\n`;
    const parsed = analyze(markdown);
    const units = parsed.units.filter((u) => u.type === 'html').map((u) => u.id);
    const aliases = [{ lang: 'ja', id, units, reason: '旧IDの互換性', evidence: '旧見出しのslug' }];
    const result = validatedAnchorAliasUnits(aliases, parsed, markdown, 'ja');
    assert.equal(result.errors.length === 0, accepted, JSON.stringify(id));
    assert.equal(result.ids.size > 0, accepted, JSON.stringify(id));
  }
  const markdown = '# Tools\n\n## 資料 <a id="\uFE0F-tools">説明</a>\n';
  const parsed = analyze(markdown);
  const units = parsed.units.filter((u) => u.type === 'html').map((u) => u.id);
  const result = validatedAnchorAliasUnits(
    [{ lang: 'ja', id: '\uFE0F-tools', units, reason: '互換性', evidence: '旧ID' }],
    parsed,
    markdown,
    'ja'
  );
  assert.equal(result.ids.size, 0);
  assert.ok(result.errors.length);
});

test('表示トークンは記録した出現位置だけを正規化し、同名のコードと古い記録を保護する', () => {
  const sourceId = `fixture-display-${process.pid}`;
  const version = 'v-fixture';
  const file = path.join(editorial, version, `${sourceId}.json`);
  const content = 'fixture content';
  try {
    save(file, {
      hashes: { en: hash(content) },
      displayTokens: [
        {
          id: 'warning',
          kind: 'display-only',
          en: 'Warning',
          ja: '警告',
          reason: 'fixture',
          evidence: 'fixture',
          positions: { en: [0], ja: [0] },
        },
      ],
    });
    assert.deepEqual(
      normalizeEditorialCodeTokens(['Warning', 'Warning'], content, sourceId, version, 'en'),
      ['warning', 'Warning']
    );
    assert.throws(
      () => normalizeEditorialCodeTokens(['Warning'], content + 'changed', sourceId, version, 'en'),
      /判断記録が古い/
    );
  } finally {
    fs.rmSync(file, { force: true });
    fs.rmdirSync(path.dirname(file));
  }
});

test('タイトル照合は記録済みの空H1別名だけを除き、誤タイトルと非空HTMLを拒否する', () => {
  const content =
    '---\ntitle: Tools\ndescription: Tools\nlicenseSource: fixture\n---\n\n# Tools<a id="old-title"></a>\n';
  const analysis = analyze(content);
  const ids = analysis.units.map((u) => u.id);
  const aliases = ['en', 'ja'].map((lang) => ({
    lang,
    id: 'old-title',
    units: ids.slice(1),
    reason: '旧タイトルの互換性',
    evidence: 'fixture',
  }));
  const inputs = { baselineEn: content, baselineJa: content, en: content, ja: content };
  const record = {
    decisions: ids.map((id) => ({
      units: [id],
      action: 'keep',
      reason: 'fixture',
      evidence: 'fixture',
      destinations: { en: [id], ja: [id] },
    })),
    anchorAliases: aliases,
    hashes: Object.fromEntries(Object.keys(inputs).map((key) => [key, hash(content)])),
    metadataEvidence: { checked: true },
    review: {
      kind: 'ai-content-review',
      model: 'fixture',
      separatePass: true,
      reviewedAt: '2026-10-02T00:00:00Z',
      findings: [],
      retainedEnglishReasons: [],
      coverage: Object.fromEntries(
        Object.keys(inputs).map((key) => [key, [{ start: 0, end: content.length }]])
      ),
      reviewedUnits: Object.fromEntries(Object.keys(inputs).map((key) => [key, ids])),
    },
    anchorAudit: { checked: true },
    provenanceAudit: { checked: true },
    validation: {
      build: { passed: true },
      preview: { passed: true },
      html: { passed: true },
      hashes: { en: hash(content), ja: hash(content) },
    },
  };
  assert.deepEqual(validateReview(record, inputs), []);
  assert.ok(
    validateReview({ ...record, anchorAliases: [] }, inputs).includes('en: title/H1不一致')
  );
  for (const invalid of [
    content.replace('title: Tools', 'title: Other'),
    content.replace('</a>', 'Visible</a>'),
  ]) {
    const errors = validateReview(record, { ...inputs, en: invalid });
    assert.ok(errors.includes('en: title/H1不一致'));
  }
});

test('正当な全文レビュー記録は通過し、英日双方の無記録削除と古い証拠は通過しない', () => {
  const content =
    '---\ntitle: Tools\ndescription: Tools\nlicenseSource: fixture\n---\n\n# Tools\n\n- [One](https://example.org)\n';
  const inputs = { baselineEn: content, baselineJa: content, en: content, ja: content };
  const ids = analyze(content).units.map((u) => u.id);
  const record = {
    decisions: ids.map((id) => ({
      units: [id],
      action: 'keep',
      reason: 'fixture',
      evidence: 'fixture',
      destinations: { en: [id], ja: [id] },
    })),
    hashes: Object.fromEntries(Object.keys(inputs).map((key) => [key, hash(content)])),
    metadataEvidence: { checked: true },
    review: {
      kind: 'ai-content-review',
      model: 'fixture',
      separatePass: true,
      reviewedAt: '2026-10-01T00:00:00Z',
      findings: [],
      retainedEnglishReasons: [],
      coverage: Object.fromEntries(
        Object.keys(inputs).map((key) => [key, [{ start: 0, end: content.length }]])
      ),
      reviewedUnits: Object.fromEntries(Object.keys(inputs).map((key) => [key, ids])),
    },
    anchorAudit: { checked: true },
    provenanceAudit: { checked: true },
    validation: {
      build: { passed: true },
      preview: { passed: true },
      html: { passed: true },
      hashes: { en: hash(content), ja: hash(content) },
    },
  };
  assert.deepEqual(validateReview(record, inputs), []);
  const reduced = content.replace('- [One](https://example.org)\n', '');
  const errors = validateReview(record, { ...inputs, en: reduced, ja: reduced });
  assert.ok(errors.some((e) => e.includes('行先の欠落')));
  assert.ok(errors.some((e) => e.includes('ハッシュが古い')));
});

test('生成HTMLで目次・アンカー・出典の欠落と本文画像を検出する', () => {
  const html =
    '<article class="sl-markdown-content"><h1 id="title">Title</h1><h2 id="tools">Tools</h2><a href="#tools">Tools</a><aside class="document-provenance"><a href="https://source.example">Source</a><a href="https://license.example">License</a></aside></article><starlight-toc><a href="#tools">Tools</a></starlight-toc>';
  assert.deepEqual(validateHtml(html).errors, []);
  assert.ok(
    validateHtml(html.replace('id="tools"', 'id="changed"')).errors.some((e) =>
      e.includes('アンカー欠落')
    )
  );
  assert.ok(
    validateHtml(html.replace('<h1', '<img src="logo.png"><h1')).errors.some((e) =>
      e.includes('画像')
    )
  );
  assert.ok(
    validateHtml(html.replace('document-provenance', 'removed')).errors.some((e) =>
      e.includes('出典')
    )
  );
});

test('出典の著作権通知は本文の同名文字列で代用できない', () => {
  const source = {
    author: 'Contributors',
    copyrightNotice: 'Copyright 2024 Contributors',
    sourceUrl: 'https://source.example',
    licenseUrl: 'https://license.example',
  };
  const html =
    '<article class="sl-markdown-content"><h1 id="title">Title</h1><p>Copyright 2024 Contributors</p><aside class="document-provenance"><p>Contributors</p><p>Copyright 2024 Contributors</p><a href="https://source.example">Source</a><a href="https://license.example">License</a></aside></article>';
  assert.deepEqual(validateHtml(html, { licenseSource: source }).errors, []);
  const withoutNotice = html.replace('<p>Copyright 2024 Contributors</p><a href', '<a href');
  assert.ok(
    validateHtml(withoutNotice, { licenseSource: source }).errors.includes('出典の著作権通知欠落')
  );
});

test('記録した差分はコード・重複リンク・HTML・参照リンクを保全し、入力変化を拒否する', () => {
  const original =
    '# Topic\n\n## Contents\n\n- [Tools](#tools)\n\n## Tools\n\n- [One][tool] — `x=1`\n- [Two][tool] — `x=2`\n\n<table><tr><td><a href="https://example.org">Tool</a></td></tr></table>\n\n[tool]: https://example.org\n';
  const edited = original
    .replace('## Contents\n\n- [Tools](#tools)\n\n', '')
    .replace('# Topic', '# Example tools');
  const patch = makePatch(original, edited);
  assert.equal(applyPatch(original, patch), edited);
  assert.throws(() => applyPatch(original + '\n', patch), /入力不一致/);
  assert.throws(() => applyPatch(edited, patch), /入力不一致/);
  assert.throws(() => applyPatch(original, { ...patch, output: patch.input }), /出力不一致/);
  const analysis = analyze(edited);
  const items = analysis.units.filter((u) => u.type === 'listItem');
  assert.equal(items.length, 2);
  assert.notEqual(items[0].id, items[1].id);
  assert.equal(items[0].primaryLink, items[1].primaryLink);
  assert.ok(analysis.links.includes('https://example.org'));
  assert.deepEqual(
    analysis.code.map((c) => c.value),
    ['x=1', 'x=2']
  );
});

test('両版の代表入力は記録された編集成果物まで再現し、未記録の本文と固定入力の変化を拒否する', () => {
  const inventory = json(path.join(editorial, 'INVENTORY.json'));
  for (const version of ['v2026-08-20', 'v2026-08-23']) {
    const manifest = regeneration(version);
    assert.ok(manifest);
    const entry = inventory.entries.find(
      (e) => e.version === version && e.sourceId === 'sindresorhus-awesome-readme'
    );
    const output = regeneratePair(version, entry.sourceId);
    assert.equal(hash(output.en), entry.current?.en ?? entry.baseline.en);
    assert.equal(hash(output.ja), entry.current?.ja ?? entry.baseline.ja);
    assert.equal(assertEditorialPublic(output.en, entry.sourceId, version, 'en'), true);
    assert.throws(
      () => assertEditorialPublic(output.en + 'changed', entry.sourceId, version, 'en'),
      /未記録の編集/
    );
    assert.throws(() => assertFixedEditorialInput('changed', entry, version), /固定原文が変化/);
  }
});

test('二段階の編集差分は英日とも二度の再生成で一致し、途中の入力変化を拒否する', () => {
  const fixed = '# Tools\n\n- [Tool](https://example.org) — `x=1`\n';
  const existing = fixed.replace('# Tools', '# Existing tools');
  const edited = existing.replace('# Existing tools', '# Example tools');
  const corrections = makePatch(fixed, existing);
  const editorialPatch = makePatch(existing, edited);
  const translation = makePatch(existing, existing.replace('# Existing tools', '# ツール'));
  for (let pass = 0; pass < 2; pass++) {
    assert.equal(applyPatch(applyPatch(fixed, corrections), editorialPatch), edited);
    assert.equal(
      applyPatch(existing, translation),
      '# ツール\n\n- [Tool](https://example.org) — `x=1`\n'
    );
  }
  assert.throws(() => applyPatch(existing.replace('x=1', 'x=2'), editorialPatch), /入力不一致/);
});

test('全文範囲の穴と英日同時の項目削除、古いレビュー証拠を検出する', () => {
  assert.equal(
    covers(10, [
      { start: 0, end: 5 },
      { start: 5, end: 10 },
    ]),
    true
  );
  assert.equal(
    covers(10, [
      { start: 0, end: 4 },
      { start: 5, end: 10 },
    ]),
    false
  );
  assert.equal(covers(10, [{ start: 0, end: 11 }]), false);
  const before =
    '---\ntitle: Tools\ndescription: Tools\n---\n\n# Tools\n\n- [One](https://example.org/1)\n- [Two](https://example.org/2)\n';
  const after = before.replace('- [Two](https://example.org/2)\n', '');
  const errors = validateReview(
    { decisions: [], review: {} },
    { baselineEn: before, baselineJa: before, en: after, ja: after }
  );
  assert.ok(errors.some((e) => e.includes('編集前単位に行先がない')));
  assert.ok(errors.some((e) => e.includes('未読範囲')));
  assert.ok(errors.some((e) => e.includes('ハッシュが古い')));
});
