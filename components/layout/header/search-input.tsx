import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, FormEvent, useEffect, useState } from 'react';
import SearchAutoComplete from './search-auto-complete';
import serachInputStyle from './serach-input.style';

const SearchInput: FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [summonerNameInput, setSummonerNameInput] = useState('');
  const [modal, setModal] = useState(false);

  function handleChange(value: string) {
    setSummonerNameInput(value);
    setModal(true);
  }

  function handleSearch(e: FormEvent) {
    router.push(`/summoners/${summonerNameInput}`);
    e.preventDefault();
  }

  useEffect(() => {
    setModal(false);
    setSummonerNameInput('');
  }, [router.query]);

  return (
    <form css={serachInputStyle} onSubmit={handleSearch}>
      <input
        placeholder={t('header-input-placeholder')}
        value={summonerNameInput}
        onChange={e => handleChange(e.target.value)}
        onFocus={() => setModal(true)}
        onBlur={() => setTimeout(() => setModal(false), 100)}
      />
      <button></button>
      {summonerNameInput && modal && (
        <SearchAutoComplete summonerName={summonerNameInput || ''} />
      )}
    </form>
  );
};

export default SearchInput;
