import { Champion, ChampionWinRate } from '@/models';
import { ApiRequest } from '../provider/api-provider';

interface GetMostInfoApiProps {
  summonerName: string;
}

export interface MostInfoDTO {
  champions: Champion[];
  recentWinRate: ChampionWinRate[];
}

export default ({
  summonerName,
}: GetMostInfoApiProps): ApiRequest<MostInfoDTO> => {
  return {
    method: 'get',
    path: `/api/summoner/${summonerName}/mostInfo`,
  };
};
