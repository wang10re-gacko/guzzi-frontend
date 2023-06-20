import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import Head from 'next/head';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UIProvider from './components/UIProvider';

type Props = AppProps & {
  Component: NextComponentType & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

export default function App({ Component, pageProps }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  const dehydratedState: DehydratedState = pageProps.dehydratedState;

  const getLayout = Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);

  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <UIProvider>{getLayout(<Component {...pageProps} />)}</UIProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

function Header() {
  return (
    <Head>
      <title>거지방</title>
      <GlobalStyle />
    </Head>
  );
}
