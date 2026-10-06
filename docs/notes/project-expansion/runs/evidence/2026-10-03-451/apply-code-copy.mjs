import fs from'node:fs';import path from'node:path';import assert from'node:assert/strict';
const root='/Users/dolphilia/github/libx',old='/private/tmp/libx-xxhash-conversion-trial-450',trial='/private/tmp/libx-xxhash-conversion-trial-451',ev=root+'/docs/notes/project-expansion/runs/evidence/2026-10-03-451',deps='/private/tmp/libx-spdlog-integration-20261003/apps/spdlog/node_modules';assert(!fs.existsSync(trial));fs.mkdirSync(ev,{recursive:true});fs.cpSync(old,trial,{recursive:true,filter:p=>!p.split('/').some(x=>['node_modules','dist','.astro'].includes(x))});fs.mkdirSync(trial+'/node_modules');for(const e of fs.readdirSync(deps)){if(['.astro','.vite','.cache'].includes(e))continue;fs.symlinkSync(path.join(deps,e),path.join(trial,'node_modules',e));}
fs.mkdirSync(trial+'/src/scripts',{recursive:true});fs.writeFileSync(trial+'/src/scripts/xxhash-code-copy.ts',`// Copy code lines only; Doxygen tooltip descriptions and rendered line numbers are not code.
export function fragmentCodeText(fragment: Element): string {
  return Array.from(fragment.querySelectorAll(':scope > .line')).map((line) => {
    const code = line.cloneNode(true) as Element;
    code.querySelectorAll('.lineno').forEach((number) => number.remove());
    return code.textContent ?? '';
  }).join('\\n');
}

function enhanceRawCode() {
  const japanese = document.documentElement.lang === 'ja';
  const label = japanese ? 'コードをコピー' : 'Copy code';
  const copied = japanese ? 'コピーしました' : 'Copied';
  const failed = japanese ? 'コピーできませんでした' : 'Copy failed';
  document.querySelectorAll('.xxhash-api-trial .fragment').forEach((fragment) => {
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
`,{flag:'wx'});
const layout=trial+'/src/layouts/DocLayout.astro';fs.appendFileSync(layout,"\n<script>\n  import '../scripts/xxhash-code-copy';\n</script>\n");fs.appendFileSync(trial+'/src/styles/global.css','\n.xxhash-code-copy { border:1px solid var(--sl-color-hairline-light); border-radius:0.25rem; padding:0.2rem 0.6rem; color:inherit; background:var(--sl-color-bg); cursor:pointer; font-size:0.75rem; line-height:1.4; }\n');
fs.copyFileSync('/private/tmp/libx-xxhash-code-copy-451.mjs',ev+'/apply-code-copy.mjs',fs.constants.COPYFILE_EXCL);console.log({trial});
