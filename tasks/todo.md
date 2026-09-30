# UX向上 + 幾何学アニメーション背景

## 1. 動く幾何学背景（エンジニアらしい表現）

- [x] `src/components/base/geometricBackground/` を新設（client component / Canvas 2D）
  - [x] ブループリント風グリッド（CSS グラデーション、静的テクスチャ）
  - [x] ワイヤーフレーム多角形（三角/四角/六角）がゆっくり回転しながらドリフト
  - [x] 近接した図形どうしを線で結ぶ（ノードグラフ的な表現）
  - [x] ポインタ視差（depth ごとに追従量を変える）
- [x] テーマ追従: `--accent` / `--text-muted` を computed style から読み、`themechange` で再取得
- [x] パフォーマンス配慮
  - [x] devicePixelRatio は 2 で頭打ち
  - [x] `document.hidden` で rAF 停止
  - [x] `prefers-reduced-motion: reduce` なら 1 フレームだけ描いてループしない
  - [x] 図形数は画面面積からスケール（8〜22個）
- [x] 可読性: 中央を薄くする mask + テーマ別トークン `--geo-opacity` / `--geo-grid`
- [x] 重なり順: 背景 `z-index: 0` / `.pageShell` を `position: relative; z-index: 1`

## 2. UX 改善

- [x] スクロール進捗バー（`scrollProgress`、rAF スロットル・再レンダなし）
- [x] トップへ戻るボタン（`backToTop`）+ テーマトグルと重ならない固定ドックに集約
- [x] セクションのスクロールイン演出（`reveal`）
- [x] スキップリンク（キーボード操作で本文へ直接移動）
- [x] **ヘッダーが実際には追従していなかったのを修正**（下記レビュー参照）
- [x] fixed ヘッダー(70px)分のオフセットを `.layoutMain` に確保
- [x] `<main>` の入れ子を解消（layout.tsx と TopLayout/AboutLayout で二重）
- [x] ヘッダーの GitHub リンクを外部リンクとして正しく（`target` / `rel` / `aria-label` / 当たり判定 40px）
- [x] ハンバーガーメニューの a11y（`aria-expanded` / `aria-controls` / Escape / 外側クリックで閉じる）
- [x] メニューが画面右外にはみ出していたのを `right: 0` で修正
- [x] 進行中の SVG ハンバーガー移行の仕上げ（`.iconContainer` のスタイル欠落を補う）
- [x] カードの `:focus-within` をホバーと同等に
- [x] フッターの年を静的な 2025 からビルド時の年に

## 3. 検証

- [x] `npm run lint` — 警告なし
- [x] `npm run build` — 27 ページの静的書き出し成功
- [x] 書き出し HTML を確認（`opacity:0` の焼き込みなし / 構造・属性が意図どおり）
- [ ] ブラウザでの目視確認（ブラウザツールが使えなかったためユーザー側で `npm run dev`）

---

## レビュー

### 見つけた既存の不具合

**ヘッダーが `position: fixed` なのにスクロール追従していなかった。**
`.pageShell` が `container-type: inline-size` を持っており、これは
`contain: layout` を含む。レイアウト封じ込めが効いている要素は
「absolute / fixed 子孫の包含ブロック」になるため、内側の `position: fixed` は
ビューポート基準にならずスクロールで流れてしまう。
`ThemeToggle` を pageShell の外に出していたコメントから、同じ罠は一度踏まれていた模様。
→ `Header` も pageShell の外に出し、バーは全幅・中身だけ `max-width: 1200px` +
`padding-inline: 8%` で本文と左右を揃える構造に変更。
これに伴い `.layoutMain` にヘッダー分 70px のオフセットが必要になったので追加。

その他: ハンバーガーメニューが画面右にはみ出していた（`right: 0` 未指定）、
ヘッダーの GitHub リンクが外部リンク属性なし、アイコンのタップ領域が小さい。

### 設計判断

- **背景は Canvas + CSS の二層。** 方眼は動かす必要がないので CSS の静的テクスチャ、
  動く多角形とリンク線だけ Canvas。毎フレームの描画コストを最小に。
- **色は CSS 変数から読む。** `--accent` / `--text-muted` を `getComputedStyle` で取得し、
  `themechange` イベントと `prefers-color-scheme` の変化で再読み込み。
  色を JS 側に二重定義しない。
- **resize では図形を作り直さない。** モバイルは URL バーの伸縮で resize が頻発するため、
  作り直すと配置がリセットされてちらつく。位置のラップアラウンドだけで画面サイズに追従。
- **Reveal は framer-motion をやめて IntersectionObserver + CSS に。**
  framer-motion は初期状態 `opacity:0` を SSR HTML に焼き込むため、
  静的書き出しで JS が動かないと本文が全部見えなくなる。
  ref コールバック（＝JS 実行下、かつ描画前）で初めて hidden を付ける方式にして、
  JS なしなら最初から見えたままになるようにした。framer-motion は MenuList でのみ継続利用。
- **丸ボタンの見た目は `floating-button` mixin に集約。** テーマ切替とトップへ戻るで共有。

### 意図的にやらなかったこと

- **ヒーローセクションの追加。** 最初の画面が「About Me」の見出しから始まるのは
  もったいなく、新しい背景が最も映えるのもこの領域。ただしコンテンツ設計の判断なので
  勝手には入れていない。

### 目視で確認してほしい点

- ヘッダーのアバターを 60px → 52px に縮小（70px のバーに対して詰まりすぎていたため）
- ヘッダー内の要素が本文と左右で揃っているか（`padding-inline: 8%` に統一）
- 最初の見出しの上の余白（ヘッダー 70px + `.title` の `margin-top: 10%`）
- 背景の濃さ（`--geo-opacity` / `--geo-grid` で調整可能）

---

# About: History / Hobbies リデザイン（2026-08-15〜）

> マージ時に ignore 済みのローカル版が上書きされたため、会話ログに残っていた後半のみ復元。前半のチェックリストは消失。

- [x] 章ごとに `<section>` + 番号バッジ、レールは `.timeline::before` 1本（末尾はフェードして「継続中」を表現）
- [x] milestone = カード / event = 枠なしの行（テキスト位置はカード本文に揃える）/ current = NOW バッジ + アクセント枠
- [x] 直前と同じ年月の項目は日付を省略
- [x] 500px 以下のコンテナでは grid-template-areas で日付をノード右・本文の上へ移動
- [x] 見出し `Historys` → `History`、イラストレーション部の説明からタイトルと重複する 1 行目を削除

## Hobbies（A2 / A3）
- [x] `constants/hobbys.ts` に icon(SVG) / subtitle / tags / highlight を追加（emoji は廃止）
- [x] `constants/svgIcon.tsx` に線アイコン `Tv` / `Gamepad` を追加
- [x] カード: 色帯 + はみ出すアイコンタイル + タグ + ハイライト（dl）+ 本文。色は `--hobby` から color-mix で派生（light / dark 両対応）
- [x] hover: 傾き + 浮き + 枠色、アイコンが回転

## 検証
- [x] `npx tsc --noEmit` / `npm run lint` / `npm run build`
- [x] ヘッドレス Chrome で light / dark × 1280 / 390 を確認（390 は CDP の setDeviceMetricsOverride）

## Review（要点）
- ノードと日付の縦位置は「1 行目の中心」を Sass 変数で計算して揃えている（`$milestone-center` など）。カードの padding や line-height を変えるときはこの変数も一緒に変える
- 狭幅で日付を省略した行は、日付セルが消えても空の 1 行目との row-gap が残るので、ノードの margin-top にその分を足している
- 未対応: `--text-muted`（light: #7d7d7d）は白地で 4.1:1 と AA(4.5:1) に少し足りない

---

# 2026-09-30 History: 会社 → インターンシップ（サマー / 長期）

- [x] `layout.tsx` の `<html>` に `data-scroll-behavior="smooth"`（Next.js 16 の警告対応）
- [x] 章 `copanny`(会社) → `internship`(インターンシップ)。章に `groups` を持たせ、項目は `group` で振り分け
- [x] サマー: Safie アイデアソン / DMM Sprint_GO / フラー（サーバーサイド）/ SmartHR / Media Do、長期: 燈
- [x] リンクをユーザー指定の記事・募集ページに差し替え（Media Do はリンクなし）
- [x] グループ見出しはレール上のひし形 + 見出し（h4）、配下の項目タイトルは h5
- [x] PR #4 のコンフリクト解消: svgIcon は Hamburger と Tv/Gamepad を両方残し Flame を追加、hobbys は日本語タイトル + 英語サブタイトル、焚き火カードを新フォーマットに
