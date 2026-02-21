import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../styles/globals.scss';
import Header from '@/components/base/header';
import Footer from '@/components/base/footer';
import FloatingParticles from '@/components/floatingParticles';
import ThemeToggle from '@/components/themeToggle';
import WelcomeScreen from '@/components/welcomeScreen';

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
  description: 'ayuayuyuのポートフォリオサイト - 気ままに過ごしている大学生',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <WelcomeScreen />
        <FloatingParticles />
        <ThemeToggle />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
