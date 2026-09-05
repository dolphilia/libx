# 独立Workerプレビューの初回配信候補

このメモは配信対象の確認用。2026-09-05に利用者が初回9 Worker配信を承認し、[配信CI 33959850978](https://github.com/dolphilia/libx/actions/runs/33959850978)を起動した。初回はaccount ID空値、設定後の2回目はAPI読取HTTP 403で停止した（[1回目](./worker-preview-first-attempt.json)、[2回目](./worker-preview-second-attempt.json)）。利用者のtoken設定後、3回目はAPI読取を通過し、Node版が固定Wranglerの必要版を満たさずCLI段階で停止した（[3回目](./worker-preview-third-attempt.json)）。配信済み版の記録はなく、publish jobのNode版を修正して再開する。承認済みPagesプレビューは配信・HTTP照合済み。

- コミット: `c9bb3ffe7c4172d3294fbac4ac482b64879b656b`
- ブランチ: `codex/quality/nested-app-groups`
- 準備CI: [33958974958](https://github.com/dolphilia/libx/actions/runs/33958974958)
- 成果物: [9967394646](https://github.com/dolphilia/libx/actions/runs/33958974958/artifacts/9967394646)
- 確認済み梱包SHA-256: `07b2c21ce9dda7e8a149f26cfa90def36ef58301d11fa021ea694ecd3b91d3ac`
- 配信先アカウント: 既存GitHub `preview` environmentの `CLOUDFLARE_ACCOUNT_ID`。値自体は未参照。
- 入口Worker: `libx-preview-705db0603fd54314`。workers.devと版プレビューを有効化。
- 配信内容: Awesomeの既存URL `/docs/awesome/` 以下。独自ドメインのroute設定なし。
- 初回の基点: `none`。既存Workerや未記録版がある場合は停止する。

## 配信単位

| 所有者 | Worker名 | 公開ファイル数 |
| --- | --- | --- |
| `awesome/community` | `libx-b58140cea83f-8cff9a0ee45d38d3d6c989ae` | 533 |
| `awesome/creative` | `libx-027b2b3ff1e8-94ee39c003c18cc8884bfeb1` | 157 |
| `awesome/languages` | `libx-97efcdf029e1-dc32a40285ea7642909c8dd5` | 303 |
| `awesome/overview` | `libx-ec01ddf83c95-ba753007f9e1ab71d55dcdf0` | 21 |
| `awesome/science` | `libx-b0af1f27b8e9-413ed65c86f2b7f1c35b3b41` | 287 |
| `awesome/systems` | `libx-db8049038ff2-50272feff4f83f10fab3a1b4` | 393 |
| `awesome/web` | `libx-a9c09e906339-b0a9333df2d76e9a4270cd2a` | 439 |
| `group:awesome` | `libx-b825c338ed15-ebe463ae3d558994a98b86e2` | 17 |

## 操作と確認

同じブランチのコミットが変わっていないことを確認し、既存workflowを `workers-publish`、`worker_group=awesome`、`worker_expected_deployment=none`、上記 `worker_package_sha`、前回・復旧run指定なしで実行する。再生成結果のSHAが確認値と異なる場合はCloudflareへの配置前に停止する。

子Workerを順に配置・HTTP照合し、入口候補を照合してから入口を有効化する。配置記録をartifactへ保存し、配信後に既存URL・HEAD・別名・404・資産取得を確認する。既存Pagesやmain、本番ドメインの切替はこの操作に含めない。

一子更新・部分失敗・復旧の外部検証は次の段階であり、この初回成果物の検証だけで完了扱いにしない。

## 確認結果

unit 27件・runtime 207件が全件成功。通常品質CIで統合ビルド・smoke・成果物予算も成功。ZIPハッシュをGitHub API・アップロードログと照合し、準備ログの外部SHAを用いて梱包2,171ファイル・174,594,684 bytesの全パス・サイズ・SHA-256を検証した。

[CI記録](./worker-ci-success.json)、[成果物検証記録](./worker-ci-prepared-package.json)を参照。
