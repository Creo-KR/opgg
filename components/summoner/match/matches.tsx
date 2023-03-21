import { GameInfo } from '@/models';
import { useSummonerContext } from '@/pages/summoners/[name]';
import { css } from '@emotion/react';
import { createContext, FC, useContext, useMemo, useState } from 'react';
import MatchHeader from './match-header';
import MatchList from './match-list/match-list';

const Matches: FC = () => {
  const context = useSummonerContext();
  const [tab, setTab] = useState('all');

  const games = useMemo(
    () =>
      context.matchesDTO?.games.filter(game => {
        if (tab === 'all') {
          return true;
        }

        if (tab === 'solo') {
          return game.gameType === '솔랭';
        }

        if (tab === 'free') {
          return game.gameType === '자유 5:5 랭크';
        }
      }) || [],
    [tab, context.matchesDTO]
  );

  return (
    <MatchContext.Provider value={{ tab, setTab, games }}>
      <div
        css={css`
          flex-grow: 1;
          margin-left: 10px;
        `}
      >
        <MatchHeader />
        <MatchList />
      </div>
    </MatchContext.Provider>
  );
};

interface MatchContext {
  tab: string;
  setTab: (v: string) => void;
  games: GameInfo[];
}
const MatchContext = createContext<MatchContext>({
  tab: 'all',
  setTab: () => {},
  games: [],
});

export function useMatchContext() {
  return useContext(MatchContext);
}

export default Matches;
