import { ImageObj } from '@/models';

export function getChampionName(champion?: ImageObj) {
  if (!champion) {
    return;
  }

  const split = champion.imageUrl.split('/');
  return split[split.length - 1].split('.')[0];
}

export function getKDAClass(kda: number) {
  return kda >= 5 ? 'kda5' : kda >= 4 ? 'kda4' : kda >= 3 ? 'kda3' : '';
}

export function getWinRateClass(winRate: number) {
  return winRate >= 60 ? 'red' : '';
}
