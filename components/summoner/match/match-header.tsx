import { FC } from 'react';
import matchHeaderStyle from './match-header.style';
import MatchTab from './match-tab';
import MatchSummary from './summary/match-summary';

const MatchHeader: FC = () => {
  return (
    <section css={matchHeaderStyle}>
      <MatchTab />
      <MatchSummary />
    </section>
  );
};

export default MatchHeader;
