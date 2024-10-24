import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Footer from '@/components/footer';
import Nav from './nav';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from '@/app/api/uploadthing/core';
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
          <main className="relative z-10 min-h-screen bg-black shadow-2xl">
            <NextSSRPlugin
              /**
               * The `extractRouterConfig` will extract **only** the route configs
               * from the router to prevent additional information from being
               * leaked to the client. The data passed to the client is the same
               * as if you were to fetch `/api/uploadthing` directly.
               */
              routerConfig={extractRouterConfig(ourFileRouter)}
            />
            {children}
            <div className="darkGradient h-6"></div>
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
