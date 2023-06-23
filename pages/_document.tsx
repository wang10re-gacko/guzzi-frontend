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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
