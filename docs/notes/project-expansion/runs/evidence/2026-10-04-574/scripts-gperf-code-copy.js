/** Enhance only functional examples after SEC2; leave the original GPL chapter intact. */
export function enhanceGperfCodeExamples(root = document) {
  const labels = root.documentElement.lang === 'ja'
    ? { copy: 'コードをコピー', copied: 'コピーしました', failed: 'コピーできませんでした' }
    : { copy: 'Copy code', copied: 'Copied', failed: 'Could not copy code' };
  const content = root.querySelector('.gperf-original');
  const boundary = content?.querySelector('a[name="SEC2"]');
  if (!content || !boundary) return;
  for (const pre of content.querySelectorAll('pre')) {
    if (!(boundary.compareDocumentPosition(pre) & Node.DOCUMENT_POSITION_FOLLOWING)) continue;
    if (pre.dataset.gperfCopyEnhanced) continue;
    const frame = root.createElement('div');
    frame.className = 'docs-code-frame gperf-code-frame';
    const toolbar = root.createElement('div');
    toolbar.className = 'docs-code-toolbar';
    const button = root.createElement('button');
    button.type = 'button';
    button.className = 'docs-code-copy gperf-code-copy';
    button.textContent = labels.copy;
    button.setAttribute('aria-label', labels.copy);
    const status = root.createElement('span');
    status.className = 'gperf-copy-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    toolbar.append(button, status);
    frame.append(toolbar);
    pre.replaceWith(frame);
    frame.append(pre);
    pre.dataset.gperfCopyEnhanced = 'true';
    let timer;
    button.addEventListener('click', async () => {
      clearTimeout(timer);
      button.disabled = true;
      try {
        await navigator.clipboard.writeText(pre.textContent ?? '');
        button.textContent = labels.copied;
        status.textContent = labels.copied;
      } catch {
        button.textContent = labels.failed;
        status.textContent = labels.failed;
      } finally {
        button.disabled = false;
        timer = setTimeout(() => {
          button.textContent = labels.copy;
          status.textContent = '';
        }, 2000);
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => enhanceGperfCodeExamples(), { once: true });
} else {
  enhanceGperfCodeExamples();
}
document.addEventListener('astro:page-load', () => enhanceGperfCodeExamples());
