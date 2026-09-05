import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const executeFile = promisify(execFile);
const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;

export function parseGroupVersionOutput(content, { type, service }) {
  const records = content
    .split('\n')
    .filter((line) => line.trim())
    .map((line) => JSON.parse(line));
  const matches = records.filter((record) => record.type === type);
  if (matches.length !== 1 || matches[0].version !== 1 || matches[0].worker_name !== service)
    throw new Error('Wranglerの操作結果が欠損・重複または別Workerです');
  const result = matches[0];
  if (type === 'version-upload') {
    if (!uuid.test(result.version_id)) throw new Error('アップロード版IDが不正です');
    let previewUrl = null;
    if (result.preview_url) {
      const url = new URL(result.preview_url);
      if (
        url.protocol !== 'https:' ||
        !url.hostname.endsWith('.workers.dev') ||
        url.username ||
        url.password
      )
        throw new Error('プレビューURLが不正です');
      previewUrl = url.href;
    }
    return { versionId: result.version_id, previewUrl };
  }
  if (type !== 'version-deploy' || !uuid.test(result.deployment_id))
    throw new Error('deployment IDが不正です');
  return { deploymentId: result.deployment_id };
}

/** Thin CLI transport. Callers must verify the package and serialize all writers. */
export function createWranglerGroupVersionClient({
  accountId,
  apiToken,
  workDirectory,
  wranglerVersion = '4.129.0',
  execute = executeFile,
}) {
  if (
    !/^[a-f0-9]{32}$/i.test(accountId) ||
    typeof apiToken !== 'string' ||
    !apiToken ||
    !/^\d+\.\d+\.\d+$/.test(wranglerVersion)
  )
    throw new Error('Cloudflare接続情報またはWrangler版が不正です');
  workDirectory = path.resolve(workDirectory);
  fs.mkdirSync(workDirectory, { recursive: true });
  const run = async (directory, args, type) => {
    directory = path.resolve(directory);
    if (workDirectory === directory || workDirectory.startsWith(directory + path.sep))
      throw new Error('操作記録を封印済みWorker内部へ保存できません');
    let configuration = path.join(directory, 'wrangler.jsonc');
    const config = JSON.parse(fs.readFileSync(configuration, 'utf8'));
    if (!/^libx-[a-z0-9-]+$/.test(config.name) || config.name.length > 63)
      throw new Error('libx試作のWorker名を指定してください');
    const operation = path.join(workDirectory, crypto.randomUUID());
    fs.mkdirSync(operation);
    const input = path.join(operation, 'worker');
    fs.cpSync(directory, input, { recursive: true, errorOnExist: true, force: false });
    configuration = path.join(input, 'wrangler.jsonc');
    const output = path.join(operation, 'output.jsonl');
    try {
      await execute(
        'pnpm',
        [
          `--package=wrangler@${wranglerVersion}`,
          'dlx',
          'wrangler',
          ...args,
          '--config',
          configuration,
        ],
        {
          cwd: input,
          env: {
            ...process.env,
            CI: 'true',
            CLOUDFLARE_ACCOUNT_ID: accountId,
            CLOUDFLARE_API_TOKEN: apiToken,
            WRANGLER_SEND_METRICS: 'false',
            WRANGLER_OUTPUT_FILE_PATH: output,
            WRANGLER_LOG_PATH: path.join(operation, 'wrangler.log'),
          },
          timeout: 600000,
          maxBuffer: 8 * 1024 * 1024,
        }
      );
    } catch {
      // Do not print stdout/stderr or retry a mutation whose result is uncertain.
      throw new Error(`Wrangler操作が失敗または未確定です: ${type}。記録: ${operation}`);
    }
    if (!fs.existsSync(output)) throw new Error(`Wranglerの操作記録がありません: ${operation}`);
    return {
      ...parseGroupVersionOutput(fs.readFileSync(output, 'utf8'), { type, service: config.name }),
      operation,
    };
  };
  return {
    async upload(directory, revision) {
      if (!/^[a-f0-9]{64}$/.test(revision)) throw new Error('リリース識別子が不正です');
      return run(
        directory,
        ['versions', 'upload', '--message', `libx-release:${revision}`],
        'version-upload'
      );
    },
    async deploy(directory, versionId) {
      if (!uuid.test(versionId)) throw new Error('公開版IDが不正です');
      return run(directory, ['versions', 'deploy', `${versionId}@100`, '--yes'], 'version-deploy');
    },
  };
}
