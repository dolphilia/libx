#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// API応答全体には環境変数も含まれるため、公開・復旧に必要な項目だけを保存する。
export function productionSnapshot(project, { commit, baseline } = {}) {
  if (project.name !== 'libx' || project.production_branch !== 'main')
    throw new Error('Pagesのprojectまたはproduction branchが想定と異なります');
  const deployment = project.canonical_deployment;
  if (
    !deployment ||
    deployment.environment !== 'production' ||
    deployment.latest_stage?.status !== 'success' ||
    !/^[a-f0-9-]{36}$/.test(deployment.id)
  )
    throw new Error('成功済みの本番デプロイを確認できません');
  const url = new URL(deployment.url);
  if (url.origin !== `https://${deployment.id.slice(0, 8)}.libx.pages.dev`)
    throw new Error('本番デプロイURLが想定と異なります');
  const deployedCommit = deployment.deployment_trigger?.metadata?.commit_hash;
  if (commit && (!/^[a-f0-9]{40}$/.test(commit) || deployedCommit !== commit))
    throw new Error('公開済みの本番commitが候補と一致しません');
  if (baseline && baseline.deployment.id !== deployment.id)
    throw new Error('準備後に本番デプロイが変更されました');
  return {
    schemaVersion: 1,
    observedAt: new Date().toISOString(),
    project: project.name,
    productionBranch: project.production_branch,
    domains: project.domains,
    subdomain: project.subdomain,
    deployment: {
      id: deployment.id,
      url: url.origin,
      commit: deployedCommit,
      createdOn: deployment.created_on,
    },
  };
}

export async function readProductionProject({ account, token, fetchImpl = fetch }) {
  if (!/^[a-f0-9]{32}$/.test(account || '') || !token)
    throw new Error('Cloudflareのaccount IDとAPI tokenが必要です');
  const response = await fetchImpl(
    `https://api.cloudflare.com/client/v4/accounts/${account}/pages/projects/libx`,
    {
      headers: { Authorization: `Bearer ${token}` },
      redirect: 'error',
      signal: AbortSignal.timeout(30_000),
    }
  );
  if (!response.ok) throw new Error(`Pages project取得失敗: HTTP ${response.status}`);
  const data = await response.json();
  if (data.success !== true || !data.result) throw new Error('Pages project取得失敗');
  return data.result;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.some((arg) => !/^--(output|commit|baseline)=.+$/.test(arg)))
      throw new Error('未対応の引数です');
    const value = (key) =>
      args
        .find((arg) => arg.startsWith(`--${key}=`))
        ?.split('=')
        .slice(1)
        .join('=');
    const output = value('output');
    if (!output) throw new Error('--outputが必要です');
    const baseline = value('baseline');
    const snapshot = productionSnapshot(
      await readProductionProject({
        account: process.env.CLOUDFLARE_ACCOUNT_ID,
        token: process.env.CLOUDFLARE_API_TOKEN,
      }),
      {
        commit: value('commit'),
        baseline: baseline ? JSON.parse(fs.readFileSync(baseline, 'utf8')) : undefined,
      }
    );
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, JSON.stringify(snapshot, null, 2) + '\n', { flag: 'wx' });
    console.log(JSON.stringify(snapshot));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
