'use client';

import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Footer from '@/components/footer';
import Nav from './nav';
import QueryProvider from './api/utils/query-provider';
import useThemeStore from '@/store/theme-control';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useThemeStore();
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${theme === 'light' ? 'bg-white' : 'bg-black'}`}
      >
        <QueryProvider>
          <Nav />
          <main
            className={`relative z-10 flex min-h-screen flex-col items-center overflow-x-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'} shadow-2xl`}
          >
            {children}
            <div className="darkGradient h-6"></div>
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
