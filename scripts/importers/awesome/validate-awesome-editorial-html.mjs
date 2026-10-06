#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { readJsoncFile } from '../../jsonc-utils.js';
import { root, editorial, json, save, hash, storeBlob } from './editorial-utils.mjs';
import { validateHtml } from './editorial-html-validation.mjs';
import { createAwesomeResolver } from './app-ownership.mjs';

const inventory = json(path.join(editorial, 'INVENTORY.json'));
const resolver = createAwesomeResolver(root);
const configs = new Map(
  resolver.apps.map((a) => [
    a.id,
    readJsoncFile(path.join(a.directory, 'src/config/project.config.jsonc')),
  ])
);
const baseline = process.argv.includes('--baseline');
const selected = process.argv
  .find((a) => a.startsWith('--source-id='))
  ?.slice('--source-id='.length);
const snapshot = process.argv.find((a) => a.startsWith('--snapshot='))?.slice('--snapshot='.length);
const results = [];
const errors = [];
const byUrl = new Map();
for (const entry of inventory.entries)
  for (const lang of ['en', 'ja']) {
    const app = resolver.appForSource(entry.sourceId);
    const file = path.join(app.directory, 'dist', entry.version, lang, entry.slug, 'index.html');
    if (!fs.existsSync(file)) {
      errors.push(`生成HTML欠落: ${entry.version}/${entry.sourceId}/${lang}`);
      continue;
    }
    const html = fs.readFileSync(file, 'utf8');
    const markdown = fs.readFileSync(path.join(root, entry.paths[lang]), 'utf8');
    const frontmatter = matter(markdown).data;
    const config = configs.get(entry.owner);
    const licenseSource = config.licensing.sources.find((s) => s.id === frontmatter.licenseSource);
    const check = validateHtml(html, { ...frontmatter.toc, licenseSource });
    const result = {
      version: entry.version,
      sourceId: entry.sourceId,
      lang,
      sourceHash: hash(markdown),
      htmlHash: hash(html),
      url: `/docs/awesome/${entry.version}/${lang}/${entry.slug}/`,
      report: check.report,
      issues: check.errors,
    };
    results.push(result);
    byUrl.set(result.url, result);
  }
const references = [];
for (const result of results)
  for (const link of result.report.localLinks) {
    if (!link || (!link.startsWith('#') && !link.startsWith('/docs/awesome/'))) continue;
    const url = new URL(link, `https://local.invalid${result.url}`);
    if (!url.hash) continue;
    const target = byUrl.get(url.pathname.endsWith('/') ? url.pathname : url.pathname + '/');
    let anchor;
    try {
      anchor = decodeURIComponent(url.hash.slice(1));
    } catch {
      anchor = url.hash.slice(1);
    }
    references.push({
      from: result.url,
      to: url.pathname,
      anchor,
      resolved: target?.report.ids.includes(anchor) ?? false,
    });
    if (!target?.report.ids.includes(anchor) && target)
      target.issues.push(`参照元アンカー欠落: ${result.url}#${anchor}`);
  }
const chosen = results.filter(
  (r) => (!selected || r.sourceId === selected) && (!snapshot || r.version === snapshot)
);
if (!chosen.length) errors.push('対象HTMLなし');
if (baseline) {
  const file = path.join(editorial, 'HTML_BASELINE.json');
  if (fs.existsSync(file)) throw new Error('既存HTML基準を上書きできません');
  save(file, {
    checkedAt: new Date().toISOString(),
    status: errors.length ? 'incomplete' : 'inventoried-existing-issues',
    errors,
    references: storeBlob(JSON.stringify(references)),
    results: results.map(({ report, ...r }) => ({
      ...r,
      report: storeBlob(JSON.stringify(report)),
    })),
  });
  console.log(
    `Awesome HTML baseline: ${results.length} documents, ${results.filter((r) => r.issues.length).length} documents with existing issues, ${errors.length} missing outputs`
  );
} else {
  for (const r of chosen)
    errors.push(...r.issues.map((issue) => `${r.version}/${r.sourceId}/${r.lang}: ${issue}`));
  if (!errors.length)
    console.log(
      `Awesome editorial HTML validation: OK (${chosen.length} documents; links, toc, provenance, images)`
    );
}
if (errors.length) {
  console.error(errors.slice(0, 25).join('\n'));
  process.exitCode = 1;
}
