// コンテンツコレクションの設定
import { defineCollection, z } from 'astro:content';

// ドキュメントコレクションのスキーマ定義
// - title: タイトル（必須）
// - description: 説明（オプション）
// - category: カテゴリ（オプション、指定しない場合はパスから自動取得）
// - categoryOrder: カテゴリの順序（オプション）
// - pubDate: 公開日（オプション）
// - updatedDate: 更新日（オプション）
// - author: 著者（オプション）
// - image: 画像（オプション）
// - tags: タグ（オプション）
// - draft: ドラフトフラグ（オプション、デフォルトはfalse）
// - order: 順序（オプション）
// - prev: 前のページへのリンク（オプション）
// - next: 次のページへのリンク（オプション）
// - licenseSource: ライセンス情報（オプション、指定しない場合はプロジェクトデフォルト使用）
// - customAttribution: カスタム帰属表示（オプション）
// - hideAttribution: 帰属表示を無効化（オプション）
const docsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  categoryOrder: z.number().optional(),
  pubDate: z.date().optional(),
  updatedDate: z.date().optional(),
  author: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional().default(false),
  order: z.number().optional(),
  prev: z.object({
    text: z.string(),
    link: z.string()
  }).optional(),
  next: z.object({
    text: z.string(),
    link: z.string()
  }).optional(),
  licenseSource: z.string().optional(),
  customAttribution: z.string().optional(),
  hideAttribution: z.boolean().optional().default(false),
});

// コレクションの定義
export const collections = {
  // docsコレクション
  'docs': defineCollection({
    schema: docsSchema
  }),
};
