/** Validate shared navigation before creating links. The DOM renderer uses textContent. */
export function validateGroupNavigation(value, { baseUrl, version, lang, revision }) {
  if (
    !value ||
    value.schemaVersion !== 1 ||
    value.version !== version ||
    value.lang !== lang ||
    (revision !== undefined && value.revision !== revision) ||
    !Array.isArray(value.items)
  ) {
    throw new Error('Invalid group navigation');
  }
  const prefix = `${baseUrl}/${version}/${lang}/`;
  const seen = new Set();
  let count = 0;
  const walk = (items, depth) => {
    if (depth > 16 || !Array.isArray(items)) throw new Error('Invalid navigation depth');
    for (const item of items) {
      if (++count > 20000 || !item || typeof item.title !== 'string' || (!item.href && !item.items))
        throw new Error('Invalid navigation item');
      if (item.href !== undefined) {
        if (typeof item.href !== 'string' || !item.href.startsWith(prefix))
          throw new Error('Invalid navigation URL');
        const url = new URL(item.href, 'https://libx.invalid');
        const normalized = url.pathname.replace(/\/$/, '');
        if (
          url.origin !== 'https://libx.invalid' ||
          !url.pathname.startsWith(prefix) ||
          url.search ||
          /[\\\0]/.test(item.href) ||
          seen.has(normalized)
        )
          throw new Error('Invalid or duplicate navigation URL');
        for (const segment of url.pathname.split('/')) {
          const decoded = decodeURIComponent(segment);
          if (decoded === '.' || decoded === '..' || /[/\\\0]/.test(decoded))
            throw new Error('Invalid navigation segment');
        }
        seen.add(normalized);
      }
      if (item.items !== undefined) walk(item.items, depth + 1);
    }
  };
  walk(value.items, 0);
  return value;
}
