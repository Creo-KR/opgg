import { MostChampion } from '@/models';
import ChampionImage from '@/public/images/champion.png';
import { getChampionName } from '@/utils/convert';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { FC, useMemo } from 'react';
import matchSummaryChampionStyle from './match-summary-champion.style';

interface MatchSummaryChampionProps {
  champion?: Pick<
    MostChampion,
    'wins' | 'losses' | 'kills' | 'deaths' | 'assists' | 'imageUrl'
  > & { kda: number };
}

const MatchSummaryChampion: FC<MatchSummaryChampionProps> = ({ champion }) => {
  const { t } = useTranslation('common');

  const data = useMemo(() => {
    if (!champion) {
      return;
    }

    const winRate = Math.round(
      (champion.wins / (champion.wins + champion.losses)) * 100
    );

    const winRateClass = winRate >= 60 ? 'red' : '';

    const scoreClass = champion.kda >= 6 ? 'kda6' : '';

    return { winRate, winRateClass, scoreClass };
  }, [champion]);

  return champion && data ? (
    <div css={matchSummaryChampionStyle}>
      <img src={champion.imageUrl} />
      <div>
        <h3>{getChampionName(champion)}</h3>
        <div className="win-score">
          <p className="win">
            <Trans
              i18nKey="summoner-match-summary-champion-win"
              ns="common"
              components={{
                b: <b />,
                rate: <span className={data.winRateClass} />,
              }}
              values={{
                winRate: data.winRate,
                wins: champion.wins,
                losses: champion.losses,
              }}
            />
          </p>
          <div className="divider" />
          <p className={`score ${data.scoreClass}`}>
            {t('summoner-match-summary-champion-score', {
              score: champion.kda,
            })}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div css={matchSummaryChampionStyle}>
      <img {...ChampionImage} />
      <p className="none">{t('summoner-match-summary-champion-none')}</p>
    </div>
  );
};

export default MatchSummaryChampion;
