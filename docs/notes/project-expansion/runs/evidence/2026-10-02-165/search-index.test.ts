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
    'manual/xpath.md', '/docs/pugixml', 'v1-16', 'ja'
  );
  for (const query of ['xpath_query', 'select_nodes', 'xml_node']) {
    assert.equal(searchEntries([entry], query)[0]?.url, '/docs/pugixml/v1-16/ja/manual/xpath/');
  }
  assert.ok(entry.text.includes('emphasis and strong'));
  assert.ok(!entry.text.includes('_emphasis_'));
});
