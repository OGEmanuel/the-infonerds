import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Footer from '@/components/footer';
import Nav from './nav';
import QueryProvider from './api/utils/query-provider';

export const metadata: Metadata = {
  title: 'TheInfoNerds',
  description: 'Information and Entertainment Personified.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-black`}>
        <QueryProvider>
          <Nav />
          <main className="relative z-10 flex min-h-screen flex-col items-center bg-black shadow-2xl">
            {children}
            <div className="darkGradient h-6"></div>
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
