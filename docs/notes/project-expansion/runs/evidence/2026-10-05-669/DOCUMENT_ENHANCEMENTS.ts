// Original Doxygen tooltip text is retained in each document's .ttc records.
// This app-owned renderer connects those records to the original code links.
const initialized = new WeakSet<Element>();
function initializeTooltips() {
  const root = document.querySelector('.rapidjson-document');
  if (!root || initialized.has(root)) return;
  initialized.add(root);
  const records = new Map<string, string>();
  for (const record of root.querySelectorAll('.ttc')) {
    const target = record.querySelector<HTMLAnchorElement>('.ttname a');
    if (!target) continue;
    const text = [...record.children].map(e => e.textContent?.trim() ?? '').join('\n');
    if (!records.has(target.href)) records.set(target.href, text);
  }
  if (!records.size) return;
  const popup = document.createElement('div');
  popup.id = 'rapidjson-source-tooltip';
  popup.className = 'rapidjson-source-tooltip';
  popup.setAttribute('role', 'tooltip');
  popup.hidden = true;
  document.body.append(popup);
  let active: HTMLAnchorElement | null = null;
  const links = new Set<HTMLAnchorElement>();
  for (const link of root.querySelectorAll<HTMLAnchorElement>('.fragment a')) {
    if (records.has(link.href)) links.add(link);
  }
  function hide() {
    if (active) {
      const ids = (active.getAttribute('aria-describedby') ?? '').split(/\s+/)
        .filter(id => id && id !== popup.id);
      if (ids.length) active.setAttribute('aria-describedby', ids.join(' '));
      else active.removeAttribute('aria-describedby');
    }
    active = null;
    popup.hidden = true;
  }
  function show(link: HTMLAnchorElement) {
    hide();
    active = link;
    popup.textContent = records.get(link.href) ?? '';
    const ids = (link.getAttribute('aria-describedby') ?? '').split(/\s+/).filter(Boolean);
    link.setAttribute('aria-describedby', [...ids, popup.id].join(' '));
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    popup.style.maxWidth = `${Math.max(0, viewportWidth - 16)}px`;
    popup.hidden = false;
    const anchor = link.getBoundingClientRect();
    const bounds = popup.getBoundingClientRect();
    popup.style.left = `${Math.max(8, Math.min(anchor.left, viewportWidth - bounds.width - 8))}px`;
    const below = anchor.bottom + 8;
    const desiredTop = below + bounds.height <= viewportHeight - 8
      ? below : anchor.top - bounds.height - 8;
    popup.style.top = `${Math.max(8, Math.min(desiredTop, viewportHeight - bounds.height - 8))}px`;
  }
  for (const link of links) {
    link.addEventListener('focus', () => show(link));
    link.addEventListener('blur', hide);
    link.addEventListener('pointerenter', () => show(link));
    link.addEventListener('pointerleave', event => {
      if (!(event.relatedTarget instanceof Node && popup.contains(event.relatedTarget))
        && document.activeElement !== link) hide();
    });
  }
  popup.addEventListener('pointerleave', () => {
    if (document.activeElement !== active) hide();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  function repositionOrHide() {
    if (active && document.activeElement === active) show(active);
    else hide();
  }
  window.addEventListener('scroll', repositionOrHide, {passive: true});
  window.addEventListener('resize', repositionOrHide);
}
initializeTooltips();
document.addEventListener('astro:page-load', initializeTooltips);
