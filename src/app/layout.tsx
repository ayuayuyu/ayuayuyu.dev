import type { Metadata } from 'next';
import { Poppins, Geist_Mono } from 'next/font/google';
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
    <html lang="ja">
      <body className={`${poppins.variable} ${geistMono.variable}`}>
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
