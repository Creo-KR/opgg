import { useApi } from '@/api/provider/api-provider';
import { getSummoner } from '@/api/summoner';
import Link from 'next/link';
import { FC } from 'react';
import searchAutoCompleteStyle from './search-auto-complete.style';

interface SearchAutoCompleteProps {
  summonerName: string;
}

const SearchAutoComplete: FC<SearchAutoCompleteProps> = ({ summonerName }) => {
  const api = useApi(getSummoner({ summonerName }));

  const summoner = api?.data.summoner;

  return summoner ? (
    <nav css={searchAutoCompleteStyle}>
      <Link href={`/summoners/${summonerName}`}>
        <img src={summoner.profileImageUrl} />
        <div>
          <h2>
            {summonerName.split(summonerName).map((part, index, arr) => (
              <>
                {part}
                {index < arr.length - 1 && (
                  <span className="highlight">{summonerName}</span>
                )}
              </>
            ))}
          </h2>
          <p>Level {summoner.level}</p>
        </div>
      </Link>
    </nav>
  ) : (
    <></>
  );
};

export default SearchAutoComplete;
