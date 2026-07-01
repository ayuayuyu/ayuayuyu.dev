import type { Metadata } from 'next';
import { Poppins, Geist_Mono, Tsukimi_Rounded } from 'next/font/google';
import '../styles/globals.scss';
import Header from '@/components/base/header';
import Footer from '@/components/base/footer';
import ThemeToggle from '@/components/base/themeToggle';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// 日本語フォント。CJK は巨大なので preload は無効化し、swap で待たせない
const tsukimiRounded = Tsukimi_Rounded({
  variable: '--font-tsukimi',
  weight: ['400', '500', '700'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'ayuayuyu Portfolio',
  description: 'ayuayuyuのポートフォリオサイト - 気ままに過ごしている大学生',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // フォントの CSS 変数は :root(html) で font-family から参照するため、
    // next/font のクラスは html 側に付与する（body に付けると :root から参照できない）。
    // data-theme は描画前スクリプトで意図的に付与するため suppressHydrationWarning。
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} ${tsukimiRounded.variable}`}
    >
      <body>
        {/* テーマ復元: 描画前に保存済みの選択を html へ反映し、チラつき(FOUC)を防ぐ */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}`,
          }}
        />
        <div className="pageShell">
          <Header />
          <main className="layoutMain">{children}</main>
          <Footer />
        </div>
        {/* 画面右下の固定フローティングトグル（pageShell 外＝ビューポート基準） */}
        <ThemeToggle />
      </body>
    </html>
  );
}
