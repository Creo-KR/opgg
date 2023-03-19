import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, FormEvent, useState } from 'react';
import serachInputStyle from './serach-input.style';

const SearchInput: FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [summonerNameInput, setSummonerNameInput] = useState('');

  function handleSearch(e: FormEvent) {
    router.push(`/summoners/${summonerNameInput}`);
    e.preventDefault();
  }

  return (
    <form css={serachInputStyle} onSubmit={handleSearch}>
      <input
        placeholder={t('header-input-placeholder')}
        value={summonerNameInput}
        onChange={e => setSummonerNameInput(e.target.value)}
      />
      <button></button>
    </form>
  );
};

export default SearchInput;
