import { createHash } from 'node:crypto';

const instances = new WeakMap();

/** Request-local counters avoid both random markup and cross-request state. */
export function allocateInstanceId(requestScope, identity) {
  const key = createHash('sha256').update(identity).digest('hex').slice(0, 16);
  let counts = instances.get(requestScope);
  if (!counts) {
    counts = new Map();
    instances.set(requestScope, counts);
  }
  const occurrence = counts.get(key) ?? 0;
  counts.set(key, occurrence + 1);
  return `${key}-${occurrence}`;
}
