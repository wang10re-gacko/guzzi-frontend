import { NextComponentType } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';

interface Props extends AppProps {
  Component: NextComponentType & { getLayout?: (page: ReactElement) => ReactNode };
}

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);

  return (
    <>
      <Header />
      {getLayout(<Component {...pageProps} />)}
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
