import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FC, FormEvent, useEffect, useState } from 'react';
import SearchAutoComplete from './search-auto-complete';
import SearchHistory, { pushHistory } from './search-history';
import serachInputStyle from './serach-input.style';

const illegalName = /[^A-zㄱ-힣0-9 ]/g;

const SearchInput: FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [summonerNameInput, setSummonerNameInput] = useState('');
  const [modal, setModal] = useState(false);

  function handleChange(value: string) {
    setSummonerNameInput(value.replace(illegalName, ''));
    setModal(true);
  }

  function handleSearch(e: FormEvent) {
    router.push(`/summoners/${summonerNameInput}`);
    pushHistory(summonerNameInput);
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
      {modal &&
        (summonerNameInput ? (
          <SearchAutoComplete summonerName={summonerNameInput || ''} />
        ) : (
          <SearchHistory />
        ))}
    </form>
  );
};

export default SearchInput;
