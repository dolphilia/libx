import fs from 'node:fs';
import path from 'node:path';

const rows = JSON.parse(fs.readFileSync(new URL('../../meta/pages.json', import.meta.url)));
const aliases = {
  '7.-Flush-policy': 'Flush-policy',
  '1.1.-Thread-Safety': 'Thread-Safety',
  '3.-Custom-formatting': 'Custom-formatting',
  '6.-Asynchronous-logging': 'Asynchronous-logging',
};
const targets = new Map(rows.map((row) => [row.name.replace(/\.md$/, ''), row.slug]));
const japaneseFragments = {
  'Sinks#implementing-your-own-sink': '#独自のsinkの実装',
};
const fixedCommit = '79524ddd08a4ec981b7fea76afd08ee05f83755d';

export default function spdlogLinks() {
  return (tree, file) => {
    const filename = file.history[0]?.replaceAll('\\', '/');
    const language = filename?.match(/\/v1-17-0\/(en|ja)\//)?.[1];
    const row = rows.find((candidate) => filename?.endsWith('/' + candidate.slug + '.md'));
    if (!row || !language) return;
    let active = false;
    const children = [];
    for (const node of tree.children) {
      if (node.type === 'html' && node.value.includes('<div data-spdlog-source-body=')) {
        active = true;
        continue;
      }
      if (active && node.type === 'html' && node.value.trim() === '</div>') {
        active = false;
        continue;
      }
      if (active) children.push(node);
    }
    const changes = [];
    function visit(node) {
      if (node.type === 'link') {
        const match = node.url.match(
          /^(?:https?:\/\/github.com\/gabime\/spdlog\/wiki\/)?([^/#]+)(#.*)?$/
        );
        if (match) {
          let name = decodeURIComponent(match[1]).replace(/\.md$/, '');
          name = aliases[name] ?? name;
          let fragment = match[2] ?? '';
          if (targets.has(name)) {
            if (language === 'ja') fragment = japaneseFragments[name + fragment] ?? fragment;
            const to = `/docs/spdlog/v1-17-0/${language}/01-guide/${targets.get(name)}/${fragment}`;
            changes.push({ from: node.url, to });
            node.url = to;
          }
        }
        if (
          row.name === 'README.md' &&
          ['include/spdlog', 'example/CMakeLists.txt', 'bench/bench.cpp'].includes(node.url)
        ) {
          const from = node.url;
          node.url = `https://github.com/gabime/spdlog/${from === 'include/spdlog' ? 'tree' : 'blob'}/${fixedCommit}/${from}`;
          changes.push({
            from,
            to: node.url,
            reason: 'Original repository-relative source at fixed software commit',
          });
        }
        if (node.url.startsWith('/gabime/spdlog/')) {
          const from = node.url;
          node.url = 'https://github.com' + from;
          changes.push({ from, to: node.url, reason: 'Original GitHub-origin absolute path' });
        }
      }
      for (const child of node.children ?? []) visit(child);
    }
    for (const node of children) visit(node);
    const out = path.resolve('meta/ast', language, row.slug + '.json');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(
      out,
      JSON.stringify({ language, source: row, children, changes }, null, 2) + '\n'
    );
  };
}
