import { createContext, FC, useContext, useState } from 'react';
import MostInfoChampions from './most-info-champions';
import MostInfoRecent from './most-info-recent';
import MostInfoTab from './most-info-tab';
import mostInfoStyle from './most-info.style';

const MostInfo: FC = () => {
  const [tab, setTab] = useState('champion');

  return (
    <MostInfoContext.Provider value={{ tab, setTab }}>
      <section css={mostInfoStyle}>
        <MostInfoTab />
        {tab === 'champion' ? <MostInfoChampions /> : <MostInfoRecent />}
      </section>
    </MostInfoContext.Provider>
  );
};

interface MostInfoContext {
  tab: string;
  setTab: (v: string) => void;
}
const MostInfoContext = createContext<MostInfoContext>({
  tab: 'all',
  setTab: () => {},
});

export function useMostInfoContext() {
  return useContext(MostInfoContext);
}

export default MostInfo;
