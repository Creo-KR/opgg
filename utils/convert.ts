import { ImageObj } from '@/models';
import moment, { MomentInput } from 'moment';

export function getChampionName(champion?: ImageObj) {
  if (!champion) {
    return;
  }

  const split = champion.imageUrl.split('/');
  return split[split.length - 1].split('.')[0];
}

export function getItemId(item?: ImageObj) {
  return getChampionName(item);
}

export function getKDAClass(kda: number) {
  return kda >= 5 ? 'kda5' : kda >= 4 ? 'kda4' : kda >= 3 ? 'kda3' : '';
}

export function getWinRateClass(winRate: number) {
  return winRate >= 60 ? 'red' : '';
}

const units = {
  m: 60,
  h: 60 * 60,
  d: 60 * 60 * 24,
  w: 60 * 60 * 24 * 7,
  M: 60 * 60 * 24 * 7 * 30,
  y: 60 * 60 * 24 * 7 * 30 * 12,
};

export function getDiffTime(time: MomentInput) {
  const now = moment();
  const diffSeconds = now.diff(time, 's');

  if (diffSeconds > units.y) {
    return { amount: now.diff(time, 'y'), unit: 'y' };
  }
  if (diffSeconds > units.M) {
    return { amount: now.diff(time, 'M'), unit: 'M' };
  }
  if (diffSeconds > units.w) {
    return { amount: now.diff(time, 'w'), unit: 'w' };
  }
  if (diffSeconds > units.d) {
    return { amount: now.diff(time, 'd'), unit: 'd' };
  }
  if (diffSeconds > units.h) {
    return { amount: now.diff(time, 'h'), unit: 'h' };
  }
  if (diffSeconds > units.m) {
    return { amount: now.diff(time, 'm'), unit: 'm' };
  }
  return { amount: diffSeconds, unit: 's' };
}
