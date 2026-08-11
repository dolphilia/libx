import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const count = Number(process.argv.find((arg) => arg.startsWith('--count='))?.split('=')[1] ?? 1000);
const root = path.resolve('.tmp/performance-large-sidebar');
const docsDir = path.join(root, 'v1/en/01-guide');
await fs.rm(root, { recursive: true, force: true });
await fs.mkdir(docsDir, { recursive: true });

await Promise.all(
  Array.from({ length: count }, async (_, index) => {
    const order = String(index + 1).padStart(4, '0');
    const extension = index % 2 === 0 ? 'md' : 'mdx';
    await fs.writeFile(
      path.join(docsDir, `${order}-page.${extension}`),
      `---\ntitle: Page ${order}\norder: ${index + 1}\n---\n\nFixture content.\n`
    );
  })
);

const files = await fs.readdir(docsDir);
const items = await Promise.all(
  files.map(async (file) => {
    const parsed = matter(await fs.readFile(path.join(docsDir, file), 'utf8'));
    return { title: parsed.data.title, href: `/v1/en/guide/${file.replace(/\.mdx?$/, '')}` };
  })
);
items.sort((a, b) => a.href.localeCompare(b.href));
await fs.writeFile(
  path.join(root, 'sidebar-en-v1.json'),
  JSON.stringify([{ title: 'Guide', items }])
);
console.log(`Large sidebar fixture: ${items.length} documents`);
