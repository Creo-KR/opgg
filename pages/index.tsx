import Title from '@/components/head/title';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Title title={t('home-title')} description={t('home-desc')} />
      <main>{t('home-desc')}</main>
    </>
  );
}
