import { Team } from '@/models';
import { ApiRequest } from '../provider/api-provider';

interface GetMatchDetailApiProps {
  summonerName: string;
  gameId: string;
}

export interface MatchDetailDTO {
  gameId: string;
  teams: Team[];
}

export default ({
  summonerName,
  gameId,
}: GetMatchDetailApiProps): ApiRequest<MatchDetailDTO> => {
  return {
    method: 'get',
    path: `/api/summoner/${summonerName}/matchDetail/${gameId}`,
  };
};
