import { ItemInfo } from '@/models';
import { ApiRequest } from './provider/api-provider';

export interface ItemsDTO {
  type: 'item';
  version: string;
  data: Record<string, ItemInfo>;
  groups: [];
  tree: [];
}

export default (): ApiRequest<ItemsDTO> => {
  return {
    method: 'get',
    baseURL: 'http://ddragon.leagueoflegends.com',
    path: '/cdn/10.15.1/data/ko_KR/item.json',
  };
};
