// Read-only LZ4 content gate. AI review remains independent and hash-bound.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import matter from 'gray-matter';
import { parse, parseFragment } from 'parse5';

const implementationApp = path.dirname(fileURLToPath(import.meta.url));
const implementationRepo = path.resolve(implementationApp, '../..');
const { parseContentDocument } = await import(
  pathToFileURL(path.join(implementationRepo, 'scripts/content-validation.js'))
);
const { readJsoncFile } = await import(
  pathToFileURL(path.join(implementationRepo, 'scripts/jsonc-utils.js'))
);
const sha = (value) => crypto.createHash('sha256').update(value).digest('hex');
const hash = (p) => sha(fs.readFileSync(p));
const json = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
function files(dir, base = dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((x) => {
      const p = path.join(dir, x.name);
      assert(!x.isSymbolicLink(), 'symlink in checked input: ' + p);
      return x.isDirectory() ? files(p, base) : [path.relative(base, p)];
    })
    .sort();
}
const attr = (n, k) => n.attrs?.find((x) => x.name === k)?.value;
const find = (n, p) => [...(p(n) ? [n] : []), ...(n.childNodes ?? []).flatMap((x) => find(x, p))];
const text = (n) => (n.nodeName === '#text' ? n.value : (n.childNodes ?? []).map(text).join(''));
const article = (d) =>
  find(
    d,
    (n) => n.tagName === 'article' && (attr(n, 'class') ?? '').includes('sl-markdown-content')
  )[0];
function covered(role) {
  let lines = fs.readFileSync(role.absolute, 'utf8').split(/\r?\n/);
  if (lines.at(-1) === '') lines.pop();
  let end = 0;
  for (const [a, b] of [...role.coverage].sort((x, y) => x[0] - y[0])) {
    assert(
      Number.isInteger(a) && Number.isInteger(b) && a >= 1 && a <= end + 1 && b >= a,
      'review coverage gap: ' + role.path
    );
    end = Math.max(end, b);
  }
  assert(end >= lines.length, 'review coverage incomplete: ' + role.path);
}
export function checkContent({
  appRoot = implementationApp,
  evidenceRoot = implementationRepo,
} = {}) {
  appRoot = path.resolve(appRoot);
  evidenceRoot = path.resolve(evidenceRoot);
  const result = {
    status: 'failed',
    errors: [],
    counts: {},
    scope:
      'fixed source replay, full reviewed bytes, restoration chains, structure, real IDs, local links, original notices/license references',
    pending: [
      'browser display',
      'complete corresponding Libx source kit',
      'shared integration',
      'external HTTP/image availability',
    ],
  };
  const tracked = () =>
    Object.fromEntries(
      ['src/content/docs/v1-10-0', 'public/source/v1-10-0']
        .flatMap((dir) =>
          files(path.join(appRoot, dir)).map((p) => [
            dir + '/' + p,
            hash(path.join(appRoot, dir, p)),
          ])
        )
        .concat(
          ['package.json', 'src/config/project.config.jsonc'].map((p) => [
            p,
            hash(path.join(appRoot, p)),
          ])
        )
    );
  let before, temp;
  try {
    before = tracked();
    const evidence = (relative) => {
      assert(
        !path.isAbsolute(relative) && !relative.split(/[\\/]/).includes('..'),
        'unsafe evidence path'
      );
      return path.join(evidenceRoot, relative);
    };
    const verify = (ref) => {
      const p = evidence(ref.path);
      assert.equal(hash(p), ref.sha256, 'evidence hash: ' + ref.path);
      return p;
    };
    const notes = 'docs/notes/document-import/lz4/v1-10-0';
    const opid = json(evidence(notes + '/OPERATION_BINDING.json')).operationId;
    const snapshot = evidence(notes + '/OPERATION_SNAPSHOT.json');
    const op = fs.existsSync(snapshot)
      ? json(snapshot).operation
      : json(evidence('docs/notes/project-expansion/OPERATIONS.json')).operations.find(
          (x) => x.id === opid
        );
    assert.equal(op?.id, opid, 'operation snapshot binding mismatch');
    assert(op, 'operation missing');
    const bound = (p) => {
      const ref = op.artifacts.find((x) => x.path === p);
      assert(ref, 'unbound artifact: ' + p);
      return verify(ref);
    };
    const manifestPath = verify(op.reviewManifest),
      reviews = json(manifestPath);
    assert.equal(reviews.completedPages, 27);
    assert.equal(reviews.unreviewedPages, 0);
    const map = json(evidence(notes + '/CONTENT_MAP.json'));
    const lock = json(evidence(notes + '/CANONICAL_LOCK.json'));
    assert.equal(map.pages.length, 27);
    assert.equal(lock.pages.length, 27);
    assert.equal(reviews.pages.length, 27);
    const expected = reviews.pages.map((x) => x.id).sort();
    assert.equal(new Set(expected).size, 27);
    for (const lang of ['en', 'ja'])
      assert.deepEqual(
        files(path.join(appRoot, 'src/content/docs/v1-10-0', lang)),
        expected,
        'missing/extra content: ' + lang
      );
    const generator = bound(
      'docs/notes/project-expansion/runs/evidence/2026-10-05-802/generate-canonical.py'
    );
    temp = fs.mkdtempSync(path.join(os.tmpdir(), 'libx-lz4-content-check-'));
    const generated = spawnSync(
      process.env.LIBX_PYTHON ?? 'python3',
      [generator, '--root', evidenceRoot, '--stage', temp],
      { encoding: 'utf8' }
    );
    assert.equal(generated.status, 0, 'canonical generation: ' + generated.stderr);
    const generatedMap = json(path.join(temp, 'CANONICAL_MAP.json'));
    assert.equal(generatedMap.pages.length, 27);
    for (const p of generatedMap.pages) {
      const rel = p.canonicalPath.split('/en/')[1];
      assert(rel && expected.includes(rel));
      assert.equal(
        hash(path.join(appRoot, 'src/content/docs/v1-10-0/en', rel)),
        p.canonicalSha256,
        'canonical replay drift: ' + rel
      );
      assert.equal(hash(path.join(temp, 'en', rel)), p.canonicalSha256);
    }
    // Preserve every generated original and notice; extra source-kit files are allowed.
    for (const p of files(path.join(temp, 'source')))
      assert.equal(
        hash(path.join(appRoot, 'public/source/v1-10-0', p)),
        hash(path.join(temp, 'source', p)),
        'original/notice/archive drift: ' + p
      );
    const config = readJsoncFile(path.join(appRoot, 'src/config/project.config.jsonc'));
    assert.equal(config.licensing.sourceLanguage, 'en');
    assert.equal(config.licensing.showAttribution, true);
    const sources = new Map(config.licensing.sources.map((x) => [x.id, x]));
    assert.equal(sources.size, 27);
    const rights = json(
      evidence(
        'docs/notes/project-expansion/runs/evidence/2026-10-05-784/RIGHTS_AND_FULFILLMENT.json'
      )
    );
    const boundary = json(
      evidence('docs/notes/project-expansion/runs/evidence/2026-10-05-784/BOUNDARY.json')
    );
    assert.equal(boundary.files.length, 208);
    assert.equal(new Set(boundary.files.map((p) => p.path)).size, 208);
    const rendered = new Map();
    for (const lang of ['en', 'ja'])
      for (const id of expected) {
        const route = '/docs/lz4/v1-10-0/' + lang + '/' + id.replace(/\.md$/, '') + '/';
        const p = path.join(appRoot, 'dist/v1-10-0', lang, id.replace(/\.md$/, ''), 'index.html');
        assert(fs.existsSync(p), 'rendered page missing; build first: ' + route);
        const doc = parse(fs.readFileSync(p, 'utf8'));
        assert(article(doc));
        rendered.set(route, doc);
      }
    let anchorPairs = 0,
      localLinks = 0,
      maintenancePages = 0;
    for (const r of reviews.pages) {
      assert.equal(r.status, 'passed');
      assert.equal(r.method, 'ai-content-review');
      assert(r.separateReviewPass);
      const saved = json(verify(r.evidence));
      for (const [key, value] of Object.entries(saved))
        assert.deepEqual(r[key], value, 'manifest/review mismatch: ' + r.id);
      for (const k of ['source', 'canonical', 'translation']) {
        const p = verify(r[k]);
        covered({ ...r[k], absolute: p });
      }
      const row = map.pages.find((p) => p.canonicalPath.endsWith('/en/' + r.id));
      assert(row, 'map missing');
      assert.equal(row.sourceSha256, r.source.sha256);
      assert.equal(
        r.canonical.sha256,
        lock.pages.find((p) => p.canonicalPath === row.canonicalPath)?.canonicalSha256
      );
      const enPath = path.join(appRoot, 'src/content/docs/v1-10-0/en', r.id),
        jaPath = path.join(appRoot, 'src/content/docs/v1-10-0/ja', r.id);
      assert.equal(hash(enPath), r.canonical.sha256);
      assert.equal(hash(jaPath), r.translation.sha256, 'reviewed protected bytes drift: ' + r.id);
      if (r.priorFullReview) {
        maintenancePages++;
        const prior = json(verify(r.priorFullReview)),
          binding = json(bound(r.restorationProof));
        const p = binding.pages.find((p) => p.id === r.id);
        assert(p && p.inverseRestorationExact);
        assert.equal(p.after.sha256, r.translation.sha256);
        assert.equal(p.before.sha256, prior.translation.sha256);
        assert.equal(prior.status, 'passed');
        assert(prior.separateReviewPass);
        let restored = fs.readFileSync(verify(p.after), 'utf8');
        for (const c of [...p.changes].reverse()) {
          assert(['internal-language-href', 'editorial-status'].includes(c.kind));
          assert.equal(restored.split(c.new).length - 1, c.rawCount);
          restored = restored.replaceAll(c.new, c.old);
        }
        assert.equal(sha(restored), p.before.sha256);
        verify(p.before);
        assert.equal(r.limitedMaintenanceReview.status, 'passed');
      }
      const en = fs.readFileSync(enPath, 'utf8'),
        ja = fs.readFileSync(jaPath, 'utf8');
      const a = parseContentDocument(en, '.md', ['LZ4', 'LZ4F', 'LZ4HC']),
        b = parseContentDocument(ja, '.md', ['LZ4', 'LZ4F', 'LZ4HC']);
      const { documentContext: ec, ...ef } = a.frontmatter,
        { documentContext: jc, ...jf } = b.frontmatter;
      assert.deepEqual(ef, jf, 'non-translatable metadata drift: ' + r.id);
      const eSource = ec.find((x) => x.kind === 'source').html,
        jSource = jc.find((x) => x.kind === 'source').html;
      const hrefs = (s) => [...s.matchAll(/href="([^"]+)"/g)].map((x) => x[1]);
      const hashes = (s) => [...s.matchAll(/[a-f0-9]{40,64}/g)].map((x) => x[0]);
      assert.deepEqual(hrefs(eSource), hrefs(jSource));
      assert.deepEqual(hashes(eSource), hashes(jSource));
      for (const field of ['headings', 'code'])
        assert.deepEqual(a[field], b[field], 'protected ordered structure: ' + r.id + '/' + field);
      for (const field of ['inlineCode', 'images'])
        assert.deepEqual(
          [...a[field]].sort((x, y) => JSON.stringify(x).localeCompare(JSON.stringify(y))),
          [...b[field]].sort((x, y) => JSON.stringify(x).localeCompare(JSON.stringify(y))),
          'protected structure: ' + r.id + '/' + field
        );
      assert.deepEqual(b.unhandledDirectives, []);
      const route = (lang) => '/docs/lz4/v1-10-0/' + lang + '/' + r.id.replace(/\.md$/, '') + '/';
      const ed = article(rendered.get(route('en'))),
        jd = article(rendered.get(route('ja')));
      for (const id of b.anchors) {
        assert.equal(find(ed, (n) => attr(n, 'id') === id).length, 1, 'canonical actual ID: ' + id);
        assert.equal(find(jd, (n) => attr(n, 'id') === id).length, 1, 'Japanese actual ID: ' + id);
        anchorPairs++;
      }
      assert(a.anchors.every((id) => b.anchors.includes(id)));
      // AST text-node extraction is asymmetric inside HTML; compare decoded exact API sets.
      const body = (s) => s.slice(s.indexOf('\n---\n') + 5);
      const apis = (s) =>
        new Set(
          [
            ...text(parseFragment(body(s))).matchAll(
              /(?<![A-Za-z0-9_])LZ4(?:F|HC)?[A-Za-z0-9_]*(?![A-Za-z0-9_])/g
            ),
          ].map((x) => x[0])
        );
      const ea = apis(en),
        jaa = apis(ja);
      for (const api of ea) assert(jaa.has(api), 'decoded API absent: ' + r.id + '/' + api);
      const gm = generatedMap.pages.find((p) => p.path === row.sourcePath),
        source = sources.get(gm.licenseSource);
      assert(source);
      const fm = matter(ja).data;
      assert.equal(fm.licenseSource ?? config.licensing.defaultSource, gm.licenseSource);
      const right = rights.files.find((x) =>
        x.source.path.endsWith('/lz4-fixed/' + row.sourcePath)
      );
      assert(right);
      assert.equal(source.license, right.license);
      assert.equal(
        source.sourceUrl,
        'https://github.com/lz4/lz4/blob/' + map.commit + '/' + row.sourcePath
      );
      assert(source.licenseUrl.startsWith('/docs/lz4/source/v1-10-0/licenses/'));
      assert(
        fs.existsSync(path.join(appRoot, 'public', source.licenseUrl.slice('/docs/lz4/'.length)))
      );
      for (const lang of ['en', 'ja']) {
        const d = rendered.get(route(lang)),
          ar = article(d),
          foot = find(d, (n) => attr(n, 'class') === 'document-context-footer')[0];
        assert(foot);
        const live = fs.readFileSync(
          path.join(appRoot, 'src/content/docs/v1-10-0', lang, r.id),
          'utf8'
        );
        const sourcePart = matter(live).data.documentContext.find((x) => x.kind === 'source').html;
        const sourceText = text(parseFragment(sourcePart));
        assert(
          find(foot, (n) => n.tagName && text(n) === sourceText).length,
          'rendered source footer drift'
        );
        for (const n of find(ar, (n) => n.tagName === 'a' && attr(n, 'href')).concat(
          find(foot, (n) => n.tagName === 'a' && attr(n, 'href'))
        )) {
          const url = new URL(attr(n, 'href'), 'https://libx.invalid' + route(lang));
          if (url.origin !== 'https://libx.invalid' || !url.pathname.startsWith('/docs/lz4/'))
            continue;
          localLinks++;
          if (lang === 'ja')
            assert(!url.pathname.includes('/v1-10-0/en/'), 'Japanese href points to EN');
          const key = url.pathname.replace(/\/$/, '') + '/',
            target = rendered.get(key);
          if (target) {
            if (url.hash)
              assert(
                find(
                  target,
                  (n) =>
                    attr(n, 'id') === decodeURIComponent(url.hash.slice(1)) ||
                    attr(n, 'name') === decodeURIComponent(url.hash.slice(1))
                ).length,
                'local anchor absent'
              );
          } else
            assert(
              fs.existsSync(path.join(appRoot, 'public', url.pathname.slice('/docs/lz4/'.length))),
              'local source link absent'
            );
        }
      }
    }
    result.counts = {
      canonicalPages: 27,
      reviewedJapanesePages: 27,
      originalFilesChecked: boundary.files.length,
      renderedPages: 54,
      namedIdPairs: anchorPairs,
      localBodyAndFooterLinks: localLinks,
      limitedMaintenancePages: maintenancePages,
    };
    result.status = 'passed';
  } catch (error) {
    result.errors.push(error.message);
  } finally {
    if (temp) fs.rmSync(temp, { recursive: true, force: true });
    if (before) {
      try {
        assert.deepEqual(tracked(), before);
      } catch (error) {
        result.status = 'failed';
        result.errors.push('read-only invariant: ' + error.message);
      }
    }
  }
  return result;
}
if (path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const value = (name) => args.find((x) => x.startsWith(name + '='))?.slice(name.length + 1);
  assert(
    args.every(
      (x) => x === '--json' || x.startsWith('--app-root=') || x.startsWith('--evidence-root=')
    ),
    'unknown check argument'
  );
  const result = checkContent({
    appRoot: value('--app-root') ?? implementationApp,
    evidenceRoot: value('--evidence-root') ?? process.env.LIBX_EVIDENCE_ROOT ?? implementationRepo,
  });
  console.log(JSON.stringify(result, null, 2));
  if (result.status !== 'passed') process.exitCode = 1;
}
