import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { collectAnchors, checkFile } from '../../scripts/check-markdown-links.js';

test('HTML id and named anchors are checked with exact case and duplicate headings remain valid', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-markdown-anchor-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const file = path.join(dir, 'page.md');
  fs.writeFileSync(
    file,
    [
      '# Heading',
      '# Heading',
      '<span class="anchor" id="source-PUGIXML_API"></span>',
      "<a name='legacy'></a>",
      '<!-- <span id="comment"></span> -->',
      '`<span id="inline-code"></span>`',
      '```html',
      '<span id="fenced-code"></span>',
      '```',
      '<pre><code>&lt;span id="escaped-code"&gt;</code></pre>',
      '[explicit](#source-PUGIXML_API) [named](#legacy) [duplicate](#heading-1)',
      '[wrong case](#source-pugixml_api) [missing](#absent)',
    ].join('\n')
  );
  const anchors = collectAnchors(file);
  assert.ok(anchors.has('source-PUGIXML_API'));
  assert.ok(anchors.has('legacy'));
  for (const invalid of ['comment', 'inline-code', 'fenced-code', 'escaped-code'])
    assert.ok(!anchors.has(invalid));
  assert.deepEqual(
    checkFile(file).map((x) => x.target),
    ['#source-pugixml_api', '#absent']
  );
});
