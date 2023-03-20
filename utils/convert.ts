import { ImageObj } from '@/models';

export function getChampionName(champion?: ImageObj) {
  if (!champion) {
    return;
  }

  const split = champion.imageUrl.split('/');
  return split[split.length - 1].split('.')[0];
}
