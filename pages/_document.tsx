import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class GuzziDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            as="font"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.7/dist/web/static/pretendard-dynamic-subset.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
