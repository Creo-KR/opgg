import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { useMostInfoContext } from './most-info';
import mostInfoTabStyle from './most-info-tab.style';

const tabKeys = ['champion', 'recent'];

const MostInfoTab: FC = () => {
  const context = useMostInfoContext();
  const { t } = useTranslation('common');

  function handleChange(key: string) {
    context.setTab(key);
  }

  return (
    <nav css={mostInfoTabStyle}>
      <ul>
        {tabKeys.map(key => (
          <li key={`most-info-tab-${key}`}>
            <button
              onClick={() => handleChange(key)}
              className={key === context.tab ? 'active' : ''}
            >
              {t(`summoner-most-info-tab-${key}`)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MostInfoTab;
