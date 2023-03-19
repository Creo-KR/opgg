export interface ImageObj {
  imageUrl: string;
}

export interface Champion extends ImageObj {
  level: number;
}

export interface FellowPlayer {
  champion: Champion;
  summonerId: string;
  summonerName: string;
}

export interface Team {
  players: FellowPlayer[];
  teamId: number;
}

export interface Summoner {
  ladderRank: LadderRank;
  leagues: League[];
  name: string;
  level: number;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
}

export type Tier =
  | 'Iron'
  | 'Bronze'
  | 'Gold'
  | 'Platinum'
  | 'Diamond'
  | 'Master'
  | 'Grandmaster'
  | 'Challenger';

export interface TierRank extends ImageObj {
  division: string;
  lp: number;
  name: '솔랭' | '자유 5:5 랭크';
  season: number;
  shortString: string;
  string: string;
  tier: Tier;
  tierDivision: Tier;
  tierRankPoint: number;
}

export interface League {
  hasResults: boolean;
  losses: number;
  tierRank: TierRank;
  wins: number;
}

export interface GameInfo {
  champion: Champion;
  createDate: number;
  gameId: string;
  gameLength: number;
  gameType: string;
  isWin: boolean;
  items: ImageObj[];
  mapInfo: MapInfo;
  mmr: number;
  needRenew: boolean;
  peak: string[];
  spells: ImageObj[];
  stats: GameInfoStats;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
}

export interface GameInfoStats {
  general: General;
  ward: Ward;
}

export interface General {
  assist: number;
  contributionForKillRate: string;
  cs: number;
  csPerMin: number;
  death: number;
  goldEarned: number;
  kdaString: string;
  kill: number;
  largestMultiKillString: string;
  opScoreBadge: string;
  totalDamageDealtToChampions: number;
}

export interface Ward {
  sightWardsBought: number;
  visionWardsBought: number;
}

export interface MapInfo extends ImageObj {
  mapId: number;
}

export interface Position {
  games: number;
  losses: number;
  position: string;
  positionName: string;
  wins: number;
}

export interface Summary {
  assists: number;
  deaths: number;
  kills: number;
  losses: number;
  wins: number;
}

export interface MostChampion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface ChampionWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface LadderRank {
  rank: number;
  rankPercentOfTop: number;
}
