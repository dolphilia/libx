import assert from 'node:assert/strict';
import test from 'node:test';
import { remarkAwesomeInternalLinks } from '../../scripts/plugins/remark-awesome-internal-links.js';

const routes = [
  {
    version: 'v2026-08-20',
    lang: 'en',
    repository: 'sindresorhus/awesome-nodejs',
    slug: 'platforms/sindresorhus-awesome-nodejs',
  },
  {
    version: 'v2026-08-20',
    lang: 'ja',
    repository: 'sindresorhus/awesome-nodejs',
    slug: 'platforms/sindresorhus-awesome-nodejs',
  },
];

function link(url) {
  return { type: 'link', url, children: [{ type: 'text', value: 'link' }] };
}

test('Awesome概要の収録済みGitHubリンクを同じ言語のlibxページへ変換する', () => {
  for (const lang of ['ja', 'en']) {
    const included = link('https://github.com/sindresorhus/awesome-nodejs#readme');
    const external = link('https://github.com/0pandadev/awesome-windows#readme');
    const tree = { type: 'root', children: [included, external] };
    const transform = remarkAwesomeInternalLinks({ routes });

    transform(tree, {
      path: `/repo/apps/awesome/src/awesome-content/v2026-08-20/${lang}/overview/sindresorhus-awesome.md`,
    });

    assert.equal(
      included.url,
      `/docs/awesome/v2026-08-20/${lang}/platforms/sindresorhus-awesome-nodejs/`
    );
    assert.equal(external.url, 'https://github.com/0pandadev/awesome-windows#readme');
  }
});

test('対応言語のページがない場合はGitHubリンクを維持する', () => {
  const untranslated = link('https://github.com/busterc/awesome-cordova#readme');
  const transform = remarkAwesomeInternalLinks({ routes });

  transform(
    { type: 'root', children: [untranslated] },
    {
      path: '/repo/apps/awesome/src/awesome-content/v2026-08-20/ja/overview/sindresorhus-awesome.md',
    }
  );

  assert.equal(untranslated.url, 'https://github.com/busterc/awesome-cordova#readme');
});

test('概要以外のページではGitHubリンクを変更しない', () => {
  const included = link('https://github.com/sindresorhus/awesome-nodejs#readme');
  const transform = remarkAwesomeInternalLinks({ routes });

  transform(
    { type: 'root', children: [included] },
    {
      path: '/repo/apps/awesome/src/awesome-content/v2026-08-20/ja/platforms/example.md',
    }
  );

  assert.equal(included.url, 'https://github.com/sindresorhus/awesome-nodejs#readme');
});
