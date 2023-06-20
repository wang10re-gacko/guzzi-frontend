import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import Head from 'next/head';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';
import UIProvider from './components/UIProvider';
import ReactQueryProvider from './components/ReactQueryProvider';

type Props = AppProps & {
  Component: NextComponentType & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);

  return (
    <>
      <Header />
      <ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
        <UIProvider>{getLayout(<Component {...pageProps} />)}</UIProvider>
      </ReactQueryProvider>
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
