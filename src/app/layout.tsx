import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.scss';
import Header from '@/components/base/header';
import Footer from '@/components/base/footer';
import FloatingParticles from '@/components/floatingParticles';
import ThemeToggle from '@/components/themeToggle';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ayuayuyu Portfolio ✦',
  description:
    'ayuayuyuのポートフォリオサイト - バックエンドエンジニアを目指す大学生',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <FloatingParticles />
        <ThemeToggle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
