#!/usr/bin/env node
import { createAwesomeContentAccess } from './app-ownership.mjs';
import fs from 'node:fs';
import matter from 'gray-matter';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import { rootDir, snapshotVersion } from './common.mjs';

const apply = process.argv.includes('--apply');
const content = createAwesomeContentAccess(snapshotVersion, rootDir);

function localLinks(markdown) {
  const parsed = matter(markdown);
  const contentOffset = markdown.indexOf(parsed.content);
  const tree = unified().use(remarkParse).parse(parsed.content);
  const links = [];

  function visit(node) {
    if (
      (node.type === 'link' || node.type === 'image') &&
      typeof node.url === 'string' &&
      !/^(?:https?|ftp):\/\//i.test(node.url) &&
      node.position
    ) {
      links.push({
        type: node.type,
        url: node.url,
        start: contentOffset + node.position.start.offset,
        end: contentOffset + node.position.end.offset,
      });
    }
    for (const child of node.children ?? []) visit(child);
  }

  visit(tree);
  return links;
}

const changed = [];
const skipped = [];

for (const file of content.files('ja')) {
  const englishPath = content.pathFor('en', file);
  if (!fs.existsSync(englishPath)) continue;
  const english = fs.readFileSync(englishPath, 'utf8');
  const japanese = fs.readFileSync(content.pathFor('ja', file), 'utf8');
  const expected = localLinks(english);
  const actual = localLinks(japanese);
  if (
    JSON.stringify(expected.map(({ url }) => url)) === JSON.stringify(actual.map(({ url }) => url))
  ) {
    continue;
  }
  if (
    expected.length !== actual.length ||
    expected.some((link, index) => link.type !== actual[index].type)
  ) {
    skipped.push(`${file}: en=${expected.length}, ja=${actual.length}`);
    continue;
  }

  const replacements = actual.flatMap((link, index) => {
    const expectedUrl = expected[index].url;
    if (link.url === expectedUrl) return [];
    const nodeSource = japanese.slice(link.start, link.end);
    const relativeIndex = nodeSource.indexOf(link.url);
    if (relativeIndex === -1) {
      throw new Error(`リンク先の位置を解決できません: ${file}: ${link.url}`);
    }
    return [
      {
        start: link.start + relativeIndex,
        end: link.start + relativeIndex + link.url.length,
        value: expectedUrl,
      },
    ];
  });
  let output = japanese;
  for (const replacement of replacements.sort((left, right) => right.start - left.start)) {
    output = `${output.slice(0, replacement.start)}${replacement.value}${output.slice(replacement.end)}`;
  }
  if (apply) fs.writeFileSync(content.pathFor('ja', file), output);
  changed.push(`${file}: ${replacements.length}`);
}

console.log(
  `Awesome local link repair: ${changed.length} pages${apply ? ' updated' : ' would change'}, ${skipped.length} skipped`
);
for (const entry of changed) console.log(`- ${entry}`);
for (const entry of skipped) console.log(`- skipped: ${entry}`);
