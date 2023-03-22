import { useApi } from '@/api/provider/api-provider';
import { getMatchDetail } from '@/api/summoner';
import { pushHistory } from '@/components/layout/header/search-history';
import { useSummonerContext } from '@/pages/summoners/[name]';
import Link from 'next/link';
import { FC, memo } from 'react';
import matchListSummonerStyle from './match-list-summoner.style';

interface MatchListItemProps {
  gameId: string;
}

const MatchListSummoner: FC<MatchListItemProps> = ({ gameId }) => {
  const { summonerName } = useSummonerContext();
  const api = useApi(getMatchDetail({ summonerName, gameId }));
  const detail = api?.data;

  return (
    <div className="summoners" css={matchListSummonerStyle}>
      {detail?.teams.map(team => (
        <ul key={`team-${team.teamId}`}>
          {team.players?.map(summoner => (
            <li
              className={`team-summoner ${
                summoner.summonerName === summonerName ? 'me' : ''
              }`}
              key={`summoner-${summoner.summonerId}`}
            >
              <img src={summoner.champion.imageUrl} />
              <Link
                onClickCapture={() => pushHistory(summoner.summonerName)}
                href={`/summoners/${summoner.summonerName}`}
              >
                {summoner.summonerName}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default memo(MatchListSummoner);
