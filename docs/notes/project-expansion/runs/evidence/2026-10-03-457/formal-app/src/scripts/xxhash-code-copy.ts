// Copy code lines only; Doxygen tooltip descriptions and rendered line numbers are not code.
export function fragmentCodeText(fragment: Element): string {
  return Array.from(fragment.querySelectorAll(':scope > .line')).map((line) => {
    const code = line.cloneNode(true) as Element;
    code.querySelectorAll('.lineno').forEach((number) => number.remove());
    return code.textContent ?? '';
  }).join('\n');
}

function enhanceRawCode() {
  const japanese = document.documentElement.lang === 'ja';
  const label = japanese ? 'コードをコピー' : 'Copy code';
  const copied = japanese ? 'コピーしました' : 'Copied';
  const failed = japanese ? 'コピーできませんでした' : 'Copy failed';
  document.querySelectorAll('.xxhash-api .fragment').forEach((fragment) => {
    if (fragment.parentElement?.classList.contains('xxhash-code-frame')) return;
    if (!fragment.querySelector(':scope > .line')) return;
    const frame = document.createElement('div');
    frame.className = 'docs-code-frame xxhash-code-frame';
    const toolbar = document.createElement('div');
    toolbar.className = 'docs-code-toolbar';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'xxhash-code-copy';
    button.textContent = label;
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-live', 'polite');
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(fragmentCodeText(fragment));
        button.textContent = copied;
      } catch {
        button.textContent = failed;
      }
      window.setTimeout(() => { button.textContent = label; }, 2500);
    });
    toolbar.append(button);
    fragment.before(frame);
    frame.append(toolbar, fragment);
  });
}
enhanceRawCode();
document.addEventListener('astro:page-load', enhanceRawCode);
