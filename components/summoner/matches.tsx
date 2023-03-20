import { css } from '@emotion/react';
import { createContext, FC, useState } from 'react';
import MatchHeader from './match/match-header';

interface MatchContext {
  tab: string;
  setTab: (v: string) => void;
}
export const MatchContext = createContext<MatchContext>({
  tab: 'all',
  setTab: () => {},
});

const Matches: FC = () => {
  const [tab, setTab] = useState('all');

  return (
    <MatchContext.Provider value={{ tab, setTab }}>
      <div
        css={css`
          flex-grow: 1;
          margin-left: 10px;
        `}
      >
        <MatchHeader />
      </div>
    </MatchContext.Provider>
  );
};

export default Matches;
