import { visit } from 'unist-util-visit';

const OVERVIEW_PATH_PATTERN =
  /(?:^|\/)awesome-content\/(v[^/]+)\/([a-z-]+)\/overview\/sindresorhus-awesome\.mdx?$/i;

function githubRepository(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  if (!['github.com', 'www.github.com'].includes(parsed.hostname.toLowerCase())) return null;

  const [owner, repository] = parsed.pathname.split('/').filter(Boolean);
  return owner && repository ? `${owner}/${repository}`.toLowerCase() : null;
}

function isExternalUrl(url) {
  return /^https?:\/\//i.test(url);
}

function markExternalListLinks(tree) {
  visit(tree, 'listItem', (listItem) => {
    visit(listItem, 'link', (link) => {
      if (!isExternalUrl(link.url)) return;

      const data = (link.data ??= {});
      const hProperties = (data.hProperties ??= {});
      const className = Array.isArray(hProperties.className)
        ? hProperties.className
        : hProperties.className
          ? [hProperties.className]
          : [];

      if (!className.includes('awesome-external-link')) {
        className.push('awesome-external-link');
      }
      hProperties.className = className;
    });
  });
}

/**
 * Awesome概要にある収録済みリポジトリへのGitHubリンクを、同じ版・言語のlibxページへ変換する。
 */
export function remarkAwesomeInternalLinks(options = {}) {
  const { baseUrl = '/docs/awesome', routes = [] } = options;
  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const routeByVersionLanguageAndRepository = new Map(
    routes.map((route) => [
      `${route.version}:${route.lang}:${route.repository.toLowerCase()}`,
      route.slug.replace(/^\/+|\/+$/g, ''),
    ])
  );

  return function transformer(tree, file) {
    const filePath = file.history?.[0] ?? file.path ?? '';
    const match = filePath.replaceAll('\\', '/').match(OVERVIEW_PATH_PATTERN);
    if (!match) return;

    const [, version, lang] = match;

    visit(tree, 'link', (node) => {
      const repository = githubRepository(node.url);
      if (!repository) return;

      const slug = routeByVersionLanguageAndRepository.get(`${version}:${lang}:${repository}`);
      if (!slug) return;

      node.url = `${normalizedBase}/${version}/${lang}/${slug}/`;
    });

    markExternalListLinks(tree);
  };
}

export default remarkAwesomeInternalLinks;
