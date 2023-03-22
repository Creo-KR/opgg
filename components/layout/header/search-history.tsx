import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import searchHistoryStyle from './search-history.style';

const storageKey = 'search-history';

const SearchHistory: FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currSummonerName = router.query?.name as string;
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, [currSummonerName]);

  return history.length ? (
    <nav css={searchHistoryStyle}>
      <h3>{t('search-history')}</h3>
      <ul>
        {history.map((name, index) => (
          <li key={`history-${index}`}>
            <Link onClick={() => pushHistory(name)} href={`/summoners/${name}`}>
              {name}
            </Link>
            <button
              onClickCapture={e => {
                setHistory(removeHistory(name));
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </nav>
  ) : (
    <></>
  );
};

export function getHistory(): string[] {
  const historyString = window.localStorage.getItem(storageKey) || '[]';
  return JSON.parse(historyString);
}

export function pushHistory(summonerName: string) {
  const newHistory = [
    summonerName,
    ...getHistory()
      .slice(0, 9)
      .filter(name => name !== summonerName),
  ];
  window.localStorage.setItem(storageKey, JSON.stringify(newHistory));
  return newHistory;
}

export function removeHistory(summonerName: string) {
  const newHistory = [...getHistory().filter(name => name !== summonerName)];
  window.localStorage.setItem(storageKey, JSON.stringify(newHistory));
  return newHistory;
}

export default SearchHistory;
