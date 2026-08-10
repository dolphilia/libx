import { spawn } from 'node:child_process';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

function descendants(rows, rootPid) {
  const selected = new Set([rootPid]);
  let changed = true;
  while (changed) {
    changed = false;
    for (const row of rows) {
      if (selected.has(row.ppid) && !selected.has(row.pid)) {
        selected.add(row.pid);
        changed = true;
      }
    }
  }
  return selected;
}

async function readTreeRss(pid) {
  try {
    const { stdout } = await execFileAsync('ps', ['-axo', 'pid=,ppid=,rss=']);
    const rows = stdout
      .trim()
      .split('\n')
      .map((line) => line.trim().split(/\s+/).map(Number))
      .filter((parts) => parts.length === 3)
      .map(([rowPid, ppid, rss]) => ({ pid: rowPid, ppid, rss }));
    const selected = descendants(rows, pid);
    return rows.filter((row) => selected.has(row.pid)).reduce((sum, row) => sum + row.rss, 0);
  } catch {
    return 0;
  }
}

export async function measureProcess(command, args, options = {}) {
  const started = performance.now();
  const child = spawn(command, args, {
    cwd: options.cwd ?? process.cwd(),
    env: { ...process.env, ...options.env },
    stdio: options.verbose ? 'inherit' : 'ignore',
  });
  let peakRssKb = 0;
  const timer = setInterval(async () => {
    peakRssKb = Math.max(peakRssKb, await readTreeRss(child.pid));
  }, 50);

  const exitCode = await new Promise((resolve, reject) => {
    child.once('error', reject);
    child.once('exit', (code) => resolve(code ?? 1));
  });
  clearInterval(timer);
  peakRssKb = Math.max(peakRssKb, await readTreeRss(child.pid));
  if (exitCode !== 0) throw new Error(`${command} ${args.join(' ')} exited with ${exitCode}`);
  return {
    durationMs: Math.round(performance.now() - started),
    peakRssMb: Math.round((peakRssKb / 1024) * 10) / 10,
  };
}

export function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}
