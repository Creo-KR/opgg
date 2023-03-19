import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { FC } from 'react';

interface TitleProps {
  title: string;
  description?: string;
}

const Title: FC<TitleProps> = ({ title, description }) => {
  const { t } = useTranslation('common');
  const formattedTitle = `${title} ${t('title-suffix')}`;
  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta name="title" content={formattedTitle} />
        <meta name="description" content={description || title} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:description" content={description || title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
};

export default Title;
