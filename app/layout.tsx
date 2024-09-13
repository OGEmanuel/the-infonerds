import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Footer from '@/components/footer';
import Nav from './nav';

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
        <Nav />
        <main className="relative z-10 min-h-screen bg-black shadow-2xl">
          {children}
          <div className="darkGradient h-6"></div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
