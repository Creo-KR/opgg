import { useApi } from '@/api/provider/api-provider';
import { getMatchDetail } from '@/api/summoner';
import { useSummonerContext } from '@/pages/summoners/[name]';
import { FC } from 'react';
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
              <p>{summoner.summonerName}</p>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default MatchListSummoner;
