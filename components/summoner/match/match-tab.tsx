import useTranslation from 'next-translate/useTranslation';
import { FC, useContext } from 'react';
import { MatchContext } from '../matches';
import matchRankTabStyle from './match-tab.style';

const tabKeys = ['all', 'solo', 'free'];

const MatchTab: FC = () => {
  const context = useContext(MatchContext);
  const { t } = useTranslation('common');

  function handleChange(key: string) {
    context.setTab(key);
  }

  return (
    <nav css={matchRankTabStyle}>
      <ul>
        {tabKeys.map(key => (
          <li key={`match-tab-${key}`}>
            <button
              onClick={() => handleChange(key)}
              className={key === context.tab ? 'active' : ''}
            >
              {t(`summoner-match-tab-${key}`)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MatchTab;
