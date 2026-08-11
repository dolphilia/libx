interface SearchHeading {
  text: string;
  slug: string;
}

interface SearchEntry {
  title: string;
  description: string;
  url: string;
  headings: SearchHeading[];
  anchors: string[];
  identifiers: string[];
  symbols?: { name: string; anchor: string }[];
  text: string;
}

interface SearchIndex {
  entries: SearchEntry[];
}

function normalize(value: string): string {
  return value.normalize('NFKC').toLocaleLowerCase();
}

export function searchEntries(entries: SearchEntry[], query: string) {
  const needle = normalize(query.trim());
  if (!needle) return [];
  return entries
    .flatMap((entry) => {
      const symbol = entry.symbols?.find((value) => normalize(value.name) === needle);
      const identifier =
        symbol?.name ?? entry.identifiers.find((value) => normalize(value) === needle);
      const heading = entry.headings.find((value) => normalize(value.text).includes(needle));
      const title = normalize(entry.title);
      const description = normalize(entry.description);
      const text = normalize(entry.text);
      const score = identifier
        ? 500
        : title === needle
          ? 450
          : title.includes(needle)
            ? 350
            : heading
              ? 300
              : description.includes(needle)
                ? 200
                : text.includes(needle)
                  ? 100
                  : 0;
      return score
        ? [
            {
              score,
              title: entry.title,
              detail: identifier ?? heading?.text ?? entry.description,
              url: `${entry.url}${identifier ? `#${symbol?.anchor ?? identifier}` : heading ? `#${heading.slug}` : ''}`,
            },
          ]
        : [];
    })
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
    .slice(0, 20);
}

export function initializeSearch(root: HTMLElement) {
  const dialog = root.querySelector<HTMLDialogElement>('[data-search-dialog]');
  const input = root.querySelector<HTMLInputElement>('[data-search-input]');
  const status = root.querySelector<HTMLElement>('[data-search-status]');
  const list = root.querySelector<HTMLOListElement>('[data-search-results]');
  let indexPromise: Promise<SearchIndex> | undefined;
  let active = -1;

  const load = () =>
    (indexPromise ??= fetch(root.dataset.indexUrl ?? '').then((response) => {
      if (!response.ok) throw new Error(String(response.status));
      return response.json() as Promise<SearchIndex>;
    }));

  const render = async () => {
    if (!input || !list || !status) return;
    try {
      const query = input.value;
      const results = searchEntries((await load()).entries, query);
      list.replaceChildren(
        ...results.map((result) => {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.href = result.url;
          link.textContent = result.title;
          const detail = document.createElement('small');
          detail.textContent = result.detail;
          link.append(detail);
          item.append(link);
          return item;
        })
      );
      status.textContent =
        query && !results.length ? (root.dataset.noResults ?? '').replace('{query}', query) : '';
      active = -1;
    } catch {
      status.textContent = root.dataset.error ?? 'Search error';
    }
  };

  root.addEventListener('docs-search:open', () => {
    if (!dialog?.open) dialog?.showModal();
    input?.focus();
    load().catch(() => undefined);
  });
  input?.addEventListener('input', render);
  dialog?.addEventListener('keydown', (event) => {
    const links = [...(list?.querySelectorAll('a') ?? [])];
    if (event.key === 'Escape') dialog?.close();
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp' && event.key !== 'Enter') return;
    if (event.key === 'Enter' && active >= 0) {
      event.preventDefault();
      links[active]?.click();
      return;
    }
    if (!links.length || event.key === 'Enter') return;
    event.preventDefault();
    active = (active + (event.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
    links.forEach((link, index) => link.toggleAttribute('aria-current', index === active));
    links[active]?.focus();
  });
}
