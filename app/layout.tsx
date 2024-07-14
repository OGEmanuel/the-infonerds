import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Nav from './nav';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} bg-black`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
