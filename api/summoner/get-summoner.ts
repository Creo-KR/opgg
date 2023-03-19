import { Summoner } from '@/models';
import { ApiRequest } from '../provider/api-provider';

interface GetSummonerApiProps {
  summonerName: string;
}

export interface SummonerDTO {
  summoner: Summoner;
}

export default ({
  summonerName,
}: GetSummonerApiProps): ApiRequest<SummonerDTO> => {
  return {
    method: 'get',
    path: `/api/summoner/${summonerName}`,
  };
};
