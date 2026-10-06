import assert from 'node:assert/strict';
import test from 'node:test';
import { extractSearchEntry } from '../../scripts/build-search-index.js';
import { searchEntries } from '../../packages/ui/src/scripts/search-client.js';

test('search index extracts page, heading, explicit anchor, and API symbol', () => {
  const entry = extractSearchEntry(
    `---\ntitle: API\ndescription: Functions\n---\n\n## <a id="pdf-LUA_OPADD"></a>\`LUA_OPADD\`\n\nAdds values.`,
    '03-api/page.md',
    '/docs/demo',
    'v1',
    'en'
  );

  assert.equal(entry.url, '/docs/demo/v1/en/03-api/page/');
  assert.deepEqual(entry.symbols, [{ name: 'LUA_OPADD', anchor: 'pdf-LUA_OPADD' }]);
  assert.equal(entry.headings[0].slug, 'pdf-LUA_OPADD');
});

test('exact API symbol ranks first and links to its real anchor', () => {
  const results = searchEntries(
    [
      {
        title: 'Other',
        description: 'Mentions lua_absindex',
        url: '/other/',
        headings: [],
        anchors: [],
        identifiers: [],
        text: 'lua_absindex',
      },
      {
        title: 'C API',
        description: '',
        url: '/api/',
        headings: [],
        anchors: ['lua_absindex'],
        identifiers: ['lua_absindex'],
        symbols: [{ name: 'lua_absindex', anchor: 'lua_absindex' }],
        text: '',
      },
    ],
    'lua_absindex'
  );

  assert.equal(results[0].url, '/api/#lua_absindex');
  assert.equal(results[0].score, 500);
});

test('snake case API identifiers remain searchable in prose and code', () => {
  const entry = extractSearchEntry(
    '---\ntitle: XPath\n---\nUse `xpath_query` and **select_nodes**.\n\n```cpp\nxml_node node;\n```\n_emphasis_ and __strong__',
    'manual/xpath.md',
    '/docs/pugixml',
    'v1-16',
    'ja'
  );
  for (const query of ['xpath_query', 'select_nodes', 'xml_node']) {
    assert.equal(searchEntries([entry], query)[0]?.url, '/docs/pugixml/v1-16/ja/manual/xpath/');
  }
  assert.ok(entry.text.includes('emphasis and strong'));
  assert.ok(!entry.text.includes('_emphasis_'));
});

test('GLFW Doxygen symbols target real local anchors and mentions cannot invent fragments', () => {
  const reference = extractSearchEntry(
    '---\ntitle: Reference\n---\n<a href="/docs/glfw/v1/ja/ref/#ga123">glfwInit</a>\n<a class="anchor" id="ga123"></a>\n<h2>glfwInit()</h2>',
    'ref.md',
    '/docs/glfw',
    'v1',
    'ja'
  );
  const guide = extractSearchEntry(
    '---\ntitle: Guide\n---\nCall `glfwInit()`. <a href="/docs/glfw/v1/ja/ref/#ga123">glfwInit</a>',
    'guide.md',
    '/docs/glfw',
    'v1',
    'ja'
  );
  assert.deepEqual(reference.symbols, [{ name: 'glfwInit', anchor: 'ga123' }]);
  assert.deepEqual(guide.identifiers, []);
  const results = searchEntries([guide, reference], 'glfwInit');
  assert.equal(results[0].url, '/docs/glfw/v1/ja/ref/#ga123');
  assert.equal(results[1].url, '/docs/glfw/v1/ja/guide/');
});

test('pugixml API identifiers link to fixed source anchors', () => {
  const entry = extractSearchEntry(
    '---\ntitle: XPath\n---\n<span id="source-xpath_query"></span> Use `xpath_query`.',
    'manual/xpath.md',
    '/docs/pugixml',
    'v1-16',
    'ja'
  );
  assert.deepEqual(entry.symbols, [{ name: 'xpath_query', anchor: 'source-xpath_query' }]);
  assert.equal(
    searchEntries([entry], 'xpath_query')[0].url,
    '/docs/pugixml/v1-16/ja/manual/xpath/#source-xpath_query'
  );
});

test('search headings match Markdown emphasis, duplicate slugs, and exclude code comments', () => {
  const entry = extractSearchEntry(
    '---\ntitle: Doc\n---\n### 数値**for**ループ\n## Title\n## Title\n```toml\n# not a heading\n```',
    'doc.md',
    '/docs/demo',
    'v1',
    'ja'
  );
  assert.deepEqual(entry.headings, [
    { text: '数値forループ', slug: '数値forループ' },
    { text: 'Title', slug: 'title' },
    { text: 'Title', slug: 'title-1' },
  ]);
});
