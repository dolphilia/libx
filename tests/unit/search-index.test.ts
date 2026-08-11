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
