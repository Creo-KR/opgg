import { useSummonerContext } from '@/pages/summoners/[name]';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import matchSummaryPositionStyle from './match-summary-position.style';

import PositionAdcImage from '@/public/images/icon-mostposition-adc.png';
import PositionJngImage from '@/public/images/icon-mostposition-jng.png';
import PositionMidImage from '@/public/images/icon-mostposition-mid.png';
import PositionSupImage from '@/public/images/icon-mostposition-sup.png';
import PositionTopImage from '@/public/images/icon-mostposition-top.png';
import Trans from 'next-translate/Trans';

const mapper = {
  TOP: {
    image: PositionTopImage,
  },
  JNG: {
    image: PositionJngImage,
  },
  MID: {
    image: PositionMidImage,
  },
  ADC: {
    image: PositionAdcImage,
  },
  SUP: {
    image: PositionSupImage,
  },
};

const MatchSummaryPosition: FC = () => {
  const context = useSummonerContext();
  const { t } = useTranslation('common');

  const positions = [...(context.matchesDTO?.positions || [])]?.sort(
    (a, b) => b.games - a.games
  );

  const totalGames =
    positions?.reduce((prev, curr) => prev + curr.games, 0) || 0;
  return positions ? (
    <div css={matchSummaryPositionStyle}>
      <h3>{t('summoner-match-summary-position')}</h3>
      <ul>
        {positions.map(position => (
          <li key={`position-${position.position}`}>
            <img src={mapper[position.position].image.src} />
            <div>
              <h4>{t(`position-${position.position}`)}</h4>
              <div className="flex">
                <p className="pick">
                  <Trans
                    i18nKey="summoner-match-summary-position-pick"
                    ns="common"
                    components={{ b: <b />, blue: <span className="blue" /> }}
                    values={{
                      percent: Math.round((position.games / totalGames) * 100),
                    }}
                  />
                </p>
                <div className="divider" />
                <p>
                  <Trans
                    i18nKey="summoner-match-summary-position-win"
                    ns="common"
                    components={{ b: <b /> }}
                    values={{
                      percent: Math.round(
                        (position.wins / (position.wins + position.losses)) *
                          100
                      ),
                    }}
                  />
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default MatchSummaryPosition;
