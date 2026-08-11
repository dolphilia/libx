import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { validateTranslatedContent } from '../../scripts/content-validation.js';

function createProject() {
  const projectDir = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-content-validation-'));
  fs.mkdirSync(path.join(projectDir, 'src/config'), { recursive: true });
  fs.writeFileSync(
    path.join(projectDir, 'src/config/project.config.jsonc'),
    JSON.stringify({
      paths: { baseUrlPrefix: '/docs', projectSlug: 'fixture' },
      language: {
        default: 'en',
        supported: ['en', 'ja'],
        displayNames: { en: 'English', ja: '日本語' },
      },
      translations: {
        en: { displayName: 'Fixture', displayDescription: '', categories: {} },
        ja: { displayName: 'フィクスチャ', displayDescription: '', categories: {} },
      },
      versioning: {
        versions: [{ id: 'v1', name: 'Version 1', date: '2026-01-01', isLatest: true }],
      },
      licensing: {
        sourceLanguage: 'en',
        defaultSource: 'fixture',
        showAttribution: true,
        sources: [
          {
            id: 'fixture',
            name: 'Fixture',
            author: 'Fixture',
            license: 'MIT',
            licenseUrl: 'https://example.com/license',
            sourceUrl: 'https://example.com/source',
          },
        ],
      },
    })
  );
  return projectDir;
}

function writePage(projectDir, language, relativePath, body) {
  const filePath = path.join(projectDir, 'src/content/docs/v1', language, relativePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, body);
}

const sourceOne = `---
title: One
description: Source
licenseSource: fixture
---

# One

See [two](/docs/fixture/v1/en/two/#target).

~~~c
int value = 1;
~~~
`;

const sourceTwo = `---
title: Two
description: Source
licenseSource: fixture
---

<a id="target"></a>

# Two
`;

test('翻訳0件と部分翻訳を欠落許容モードで扱う', (t) => {
  const projectDir = createProject();
  t.after(() => fs.rmSync(projectDir, { recursive: true, force: true }));
  writePage(projectDir, 'en', 'one.md', sourceOne);
  writePage(projectDir, 'en', 'two.md', sourceTwo);

  const empty = validateTranslatedContent({ projectDir, version: 'v1', allowMissing: true });
  assert.equal(empty.missing.length, 2);
  assert.deepEqual(empty.errors, []);

  writePage(
    projectDir,
    'ja',
    'one.md',
    sourceOne.replace('title: One', 'title: 一').replace('description: Source', 'description: 翻訳')
  );
  const partial = validateTranslatedContent({ projectDir, version: 'v1', allowMissing: true });
  assert.equal(partial.missing.length, 1);
  assert.deepEqual(partial.errors, []);
});

test('全件翻訳はMarkdown表記差を許容し、不変要素を比較する', (t) => {
  const projectDir = createProject();
  t.after(() => fs.rmSync(projectDir, { recursive: true, force: true }));
  writePage(projectDir, 'en', 'one.md', sourceOne);
  writePage(projectDir, 'en', 'two.md', sourceTwo);
  writePage(
    projectDir,
    'ja',
    'one.md',
    `---
title: 一
description: 翻訳
licenseSource: fixture
---

# 一

[二][two]を参照します。

\`\`\`c
int value = 1;
\`\`\`

[two]: /docs/fixture/v1/ja/two/#target
`
  );
  writePage(
    projectDir,
    'ja',
    'two.md',
    sourceTwo.replace('title: Two', 'title: 二').replace('# Two', '# 二')
  );

  const report = validateTranslatedContent({ projectDir, version: 'v1' });
  assert.equal(report.missing.length, 0);
  assert.deepEqual(report.errors, []);
});

test('余分な翻訳と壊れたアンカーを検出する', (t) => {
  const projectDir = createProject();
  t.after(() => fs.rmSync(projectDir, { recursive: true, force: true }));
  writePage(projectDir, 'en', 'one.md', sourceOne);
  writePage(projectDir, 'en', 'two.md', sourceTwo);
  writePage(
    projectDir,
    'ja',
    'one.md',
    sourceOne.replace('/en/two/#target', '/ja/two/#missing').replace('title: One', 'title: 一')
  );
  writePage(projectDir, 'ja', 'two.md', sourceTwo.replace('title: Two', 'title: 二'));
  writePage(projectDir, 'ja', 'extra.md', sourceTwo);

  const report = validateTranslatedContent({ projectDir, version: 'v1' });
  assert.ok(report.errors.some((error) => error.includes('余分な翻訳')));
  assert.ok(report.errors.some((error) => error.includes('アンカーがありません')));
});
