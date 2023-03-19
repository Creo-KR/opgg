import CommonHead from '@/components/head/common';
import i18nConfig from '@/next.config';
import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default function Document(props: DocumentProps) {
  const currentLocale =
    props.__NEXT_DATA__.query.locale || i18nConfig.defaultLocale;

  return (
    <Html lang={currentLocale as string}>
      <Head>
        <CommonHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
