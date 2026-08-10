# ADR-0005: package exports境界と初期性能予算を採用する

- ステータス: 承認
- 日付: 2026-08-11
- 提案者: リポジトリ管理者
- 承認者: リポジトリ管理者
- 置換対象: なし
- 置換元: なし

## 背景

Vite aliasが共有パッケージの `src` を直接参照し、Astro 3系と5系が混在していた。また性能値は単回の参考測定だけで、比較対象と回帰予算がなかった。

## 決定

ワークスペース参照はpackage exportsだけを通す。Astroコンポーネントを持つ共有パッケージはAstro 5.7以降をpeer dependencyとする。読者性能はLighthouseの低速モバイル相当を3回測った中央値、管理者性能は所要時間と最大RSSの3回中央値を使う。初期予算は `config/performance-budgets.json` を正本とし、静的HTML、Starlight、直前のlibx測定値と比較する。

## 判断理由

公開境界と実行時所有が明確になり、実ページ表示と生成コストの回帰を同じ条件で検出できる。余裕のある初期予算から始めることでCIノイズを抑える。

## 検討した代替案

aliasを残す案はexports検証を迂回するため採用しない。性能を単回測定する案は外乱に弱く、予算を設けない案は回帰を自動検出できないため採用しない。

## 影響

比較用StarlightとLighthouseが開発依存に加わる。週次・手動CIは通常品質ゲートより長く実行される。

## 検証方法

テンプレートと全アプリをaliasなしでビルドし、`PERF_RUNS=3 pnpm perf` が予算内で完了することを確認する。

## 関連資料

- [性能測定ガイド](../guides/PERFORMANCE_MEASUREMENT_GUIDE.md)
- [正式原則](../spec/PROJECT_PRINCIPLES.md)
