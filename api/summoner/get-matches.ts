import { Champion, GameInfo, Position, Summary } from '@/models';
import { ApiRequest } from '../provider/api-provider';

interface GetMatchesApiProps {
  summonerName: string;
}

export interface MatchesDTO {
  champions: Champion[];
  games: GameInfo[];
  positions: Position;
  summary: Summary;
}

export default ({
  summonerName,
}: GetMatchesApiProps): ApiRequest<MatchesDTO> => {
  return {
    method: 'get',
    path: `/api/summoner/${summonerName}/matches`,
  };
};
