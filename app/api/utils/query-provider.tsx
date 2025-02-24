'use client';

import useThemeStore from '@/store/theme-control';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NextTopLoader from 'nextjs-toploader';
interface QueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const QueryProvider = ({ children }: QueryProviderProps) => {
  const { theme } = useThemeStore();
  return (
    <QueryClientProvider client={queryClient}>
      <NextTopLoader
        color={`${theme === 'light' ? '#000' : '#fff'}`}
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={500}
      />
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
