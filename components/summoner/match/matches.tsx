import { css } from '@emotion/react';
import { createContext, FC, useContext, useState } from 'react';
import MatchHeader from './match-header';

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

interface MatchContext {
  tab: string;
  setTab: (v: string) => void;
}
const MatchContext = createContext<MatchContext>({
  tab: 'all',
  setTab: () => {},
});

export function useMatchContext() {
  return useContext(MatchContext);
}

export default Matches;
