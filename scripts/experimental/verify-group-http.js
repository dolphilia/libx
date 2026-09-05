import crypto from 'node:crypto';

export function groupVersionOrigin(previewUrl, service, versionId) {
  const url = new URL(previewUrl);
  const labels = url.hostname.split('.');
  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.port ||
    url.pathname !== '/' ||
    url.search ||
    url.hash ||
    labels.length !== 4 ||
    labels[0] !== `${versionId.slice(0, 8)}-${service}` ||
    labels[2] !== 'workers' ||
    labels[3] !== 'dev'
  )
    throw new Error('版とWorkerに対応するプレビューURLではありません');
  return url.origin;
}

/** Compare streamed public bodies with the verified manifest, without API credentials. */
export async function verifyGroupHttpFiles({
  origin,
  files,
  revision,
  fetcher = fetch,
  concurrency = 4,
}) {
  if (!Number.isSafeInteger(concurrency) || concurrency < 1 || concurrency > 8)
    throw new Error('HTTP照合の並列数が不正です');
  const base = new URL(origin);
  if (
    base.protocol !== 'https:' ||
    !base.hostname.endsWith('.workers.dev') ||
    base.username ||
    base.password
  )
    throw new Error('Workerプレビューのoriginを指定してください');
  let cursor = 0;
  let checked = 0;
  let bytes = 0;
  const run = async () => {
    for (let index = cursor++; index < files.length; index = cursor++) {
      const file = files[index];
      const url = new URL(file.url, base);
      if (
        url.origin !== base.origin ||
        !file.url.startsWith('/') ||
        !Number.isSafeInteger(file.bytes) ||
        file.bytes < 0
      )
        throw new Error('HTTP照合の経路が不正です');
      const response = await fetcher(url.href, {
        redirect: 'error',
        signal: AbortSignal.timeout(30000),
      });
      if (
        response.status !== 200 ||
        (revision && response.headers.get('X-Libx-Release') !== revision)
      ) {
        await response.body?.cancel();
        throw new Error(`公開応答が一致しません: ${file.url} (HTTP ${response.status})`);
      }
      const reader = response.body?.getReader();
      if (!reader) throw new Error(`公開本文がありません: ${file.url}`);
      const hash = crypto.createHash('sha256');
      let size = 0;
      try {
        for (let chunk = await reader.read(); !chunk.done; chunk = await reader.read()) {
          size += chunk.value.byteLength;
          if (size > file.bytes) throw new Error(`公開本文が期待サイズを超えました: ${file.url}`);
          hash.update(chunk.value);
        }
      } finally {
        await reader.cancel();
      }
      if (size !== file.bytes || hash.digest('hex') !== file.sha256)
        throw new Error(`公開本文のハッシュが一致しません: ${file.url}`);
      checked++;
      bytes += size;
    }
  };
  // Settle every in-flight read before letting a failed verification return.
  const outcomes = await Promise.allSettled(
    Array.from({ length: Math.min(concurrency, files.length) }, run)
  );
  const failure = outcomes.find((result) => result.status === 'rejected');
  if (failure) throw failure.reason;
  return { files: checked, bytes };
}
