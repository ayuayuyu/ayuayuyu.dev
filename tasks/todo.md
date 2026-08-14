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
