const assert = require('node:assert/strict');
const esc = (s) =>
  s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
function renderMan(source) {
  const man = source,
    lines = man.split(/\r?\n/),
    out = [],
    mapping = [];
  let para = [],
    term = false,
    dl = false;
  const flush = () => {
      if (para.length) {
        out.push((dl ? '<dd>' : '<p>') + para.join(' ') + (dl ? '</dd>' : '</p>'));
        para = [];
      }
    },
    endDL = () => {
      if (dl) {
        out.push('</dl>');
        dl = false;
      }
    };
  const decode = (s) =>
    s
      .replace(/\\f[BRIP]/g, '')
      .replace(/\\-/g, '-')
      .replace(/\\&/g, '')
      .replace(/\\\(co/g, '©');
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (!l) {
      mapping.push({ line: i + 1, role: 'blank' });
      continue;
    }
    if (l.startsWith('.\\"')) {
      mapping.push({ line: i + 1, role: 'original-generation-comment' });
      continue;
    }
    const m = l.match(/^\.(\w+)\s*(.*)$/);
    if (m) {
      const [, k, v] = m;
      mapping.push({ line: i + 1, role: 'macro', macro: k });
      if (k === 'TH') {
        out.push('<h1>GNU gperf 3.3 — CLI (April 2025)</h1>');
        continue;
      }
      if (['SH', 'SS'].includes(k)) {
        flush();
        endDL();
        out.push(
          '<' +
            (k === 'SH' ? 'h2' : 'h3') +
            '>' +
            esc(v.replace(/^"|"$/g, '')) +
            '</' +
            (k === 'SH' ? 'h2' : 'h3') +
            '>'
        );
        continue;
      }
      if (['PP', 'HP', 'IP', 'br'].includes(k)) {
        flush();
        endDL();
        continue;
      }
      if (k === 'TP') {
        flush();
        if (!dl) {
          out.push('<dl>');
          dl = true;
        }
        term = true;
        continue;
      }
      if (['B', 'I'].includes(k)) {
        const value = esc(decode(v));
        if (term) {
          out.push('<dt><code>' + value + '</code></dt>');
          term = false;
        } else
          para.push(
            '<' +
              (k === 'B' ? 'strong' : 'em') +
              '>' +
              value +
              '</' +
              (k === 'B' ? 'strong' : 'em') +
              '>'
          );
        continue;
      }
      throw Error('Unsupported macro ' + k + ' at ' + (i + 1));
    }
    mapping.push({ line: i + 1, role: term ? 'definition-term' : 'text' });
    const value = esc(decode(l));
    if (term) {
      out.push('<dt><code>' + value + '</code></dt>');
      term = false;
    } else para.push(value);
  }
  flush();
  endDL();
  assert(!term);
  const cli = out.join('\n');
  assert(!/\\(?:f|\-|&|\(co)/.test(cli));
  return { html: cli, mapping };
}
module.exports = { renderMan };
