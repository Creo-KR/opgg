import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import matchRankTabStyle from './match-tab.style';
import { useMatchContext } from './matches';

const tabKeys = ['all', 'solo', 'free'];

const MatchTab: FC = () => {
  const context = useMatchContext();
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
