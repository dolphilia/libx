import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import Ajv2020 from 'ajv/dist/2020.js';
import { createAwesomeResolver } from '../../scripts/importers/awesome/app-ownership.mjs';

import {
  applyIntroductionDecision,
  deriveTopic,
  detectIntroduction,
  normalizedTitle,
  validateNormalizedIntroduction,
} from '../../scripts/importers/awesome/awesome-introduction-utils.mjs';

const frontmatter = '---\ntitle: "Old"\ndescription: "Old description"\n---\n\n';
const root = path.resolve(import.meta.dirname, '../..');

function decisionFor(topic = 'Node.js') {
  return {
    title: normalizedTitle(topic, 'en', 'fixture'),
    summary: `A curated collection of resources and projects focused on ${topic}.`,
  };
}

test('Markdown、日本語、RSTの目次を序文境界として検出する', () => {
  const fixtures = [
    ['# Awesome Node.js\n\nLogo and badges\n\n## Contents\n\n- Item\n', 'contents-heading'],
    ['# Awesome Node.js\n\n紹介\n\n## 索引\n\n- 項目\n', 'contents-heading'],
    [
      'Awesome SQLAlchemy\n==================\n\n.. contents:: **Table of Contents**\n\nLibraries\n---------\n',
      'rst-contents-directive',
    ],
    [
      '# Awesome Canvas\n\n## Contributing\n\nText\n\n## Summary\n\n- [Canvas](#canvas)\n',
      'contents-heading',
    ],
    [
      '# Awesome Android\n\nSponsor\n\n# Content\n\n- [Libraries](#libraries)\n',
      'contents-heading',
    ],
  ];
  for (const [body, kind] of fixtures) {
    const detected = detectIntroduction(`${frontmatter}${body}`);
    assert.equal(detected.boundaryKind, kind);
    assert.match(detected.suffix, /(?:Contents|Content|Summary|索引|contents::)/i);
  }
});

test('H1欠損・HTML中央揃え・画像・長い序文を分類する', () => {
  const detected = detectIntroduction(
    `${frontmatter}<div align="center"><img src="logo.png"></div>\n${'Long introduction. '.repeat(120)}\n\n## Resources\n`
  );
  for (const flag of [
    'missing-markdown-h1',
    'image',
    'center-alignment',
    'layout-html',
    'long-introduction',
  ]) {
    assert.ok(detected.flags.includes(flag), flag);
  }
});

test('正規化はfrontmatterと序文だけを変え、境界以降のハッシュを保持して冪等である', () => {
  const source = `${frontmatter}<h1 align="center">Awesome Node.js</h1>\n\n![Logo](logo.png)\n\n## Contents\n\n- [Packages](#packages)\n\n## Packages\n\n- Example\n`;
  const before = detectIntroduction(source);
  const decision = decisionFor();
  const evidence = {
    originalPrefixSha256: before.prefixSha256,
    retainedSuffixSha256: before.suffixSha256,
  };
  const normalized = applyIntroductionDecision(source, decision, evidence);
  const after = detectIntroduction(normalized);

  assert.equal(after.suffixSha256, before.suffixSha256);
  assert.deepEqual(validateNormalizedIntroduction(normalized, decision), []);
  assert.equal(applyIntroductionDecision(normalized, decision, evidence), normalized);
});

test('判断記録後に序文または保持本文が変わった入力を拒否する', () => {
  const source = `${frontmatter}# Awesome Node.js\n\nOld intro.\n\n## Contents\n\n- Item\n`;
  const detected = detectIntroduction(source);
  const evidence = {
    originalPrefixSha256: detected.prefixSha256,
    retainedSuffixSha256: detected.suffixSha256,
  };
  assert.throws(
    () =>
      applyIntroductionDecision(
        source.replace('Old intro.', 'Changed intro.'),
        decisionFor(),
        evidence
      ),
    /冒頭断片ハッシュが一致しません/
  );
  assert.throws(
    () => applyIntroductionDecision(source.replace('- Item', '- Changed'), decisionFor(), evidence),
    /保持本文ハッシュが一致しません/
  );
});

test('装飾H1や告知見出しを題名にせず、安全なリポジトリ名へフォールバックする', () => {
  const cases = [
    ['# [![Awesome][badge]][link] Resources\n\n## List\n', 'Groovy'],
    ['# Deprecated! This list will no longer be updated.\n\n## Contents\n', 'Watchos'],
    ['<h1>‍ Awesome VLM Architectures</h1>\n\n## Contents\n', 'VLM Architectures'],
  ];
  const repositories = [
    'kdabir/awesome-groovy',
    'yenchenlin/awesome-watchos',
    'gokayfem/awesome-vlm-architectures',
  ];
  for (let index = 0; index < cases.length; index += 1) {
    const [body, expected] = cases[index];
    assert.equal(
      deriveTopic({
        sourceId: `fixture-${index}`,
        repository: repositories[index],
        detected: detectIntroduction(`${frontmatter}${body}`),
      }),
      expected
    );
  }
});

test('版別判断記録はschema、件数、パス、タイトル規則、継承条件を満たす', () => {
  const schema = JSON.parse(
    fs.readFileSync(
      path.join(
        root,
        'docs/notes/document-import/awesome/schemas/introduction-normalization.schema.json'
      ),
      'utf8'
    )
  );
  const validate = new Ajv2020({ allErrors: true, strict: false }).compile(schema);
  for (const [snapshot, expected] of [
    ['v2026-08-20', 365],
    ['v2026-08-23', 672],
  ]) {
    const manifest = JSON.parse(
      fs.readFileSync(
        path.join(
          root,
          'docs/notes/document-import/awesome/snapshots',
          snapshot,
          'INTRODUCTION_NORMALIZATION.json'
        ),
        'utf8'
      )
    );
    assert.equal(validate(manifest), true, JSON.stringify(validate.errors));
    assert.equal(manifest.entries.length, expected);
    assert.equal(new Set(manifest.entries.map((entry) => entry.sourceId)).size, expected);
    const resolver = createAwesomeResolver(root);
    for (const entry of manifest.entries) {
      assert.equal(entry.confidence === 'low', false, entry.sourceId);
      assert.match(entry.normalized.en.title, /^Awesome(?:\s|リスト)/, entry.sourceId);
      assert.match(entry.normalized.ja.title, /^Awesome(?:\s|リスト)/, entry.sourceId);
      for (const lang of ['en', 'ja']) {
        const prefix = `apps/awesome/src/awesome-content/${snapshot}/${lang}/`;
        assert.ok(entry.paths[lang].startsWith(prefix), entry.paths[lang]);
        const moduleKey = `/src/awesome-content/${snapshot}/${lang}/${entry.paths[lang].slice(prefix.length)}`;
        const currentPath = resolver.contentPath({ sourceId: entry.sourceId, moduleKey });
        assert.ok(fs.existsSync(currentPath), currentPath);
      }
    }
  }
});
