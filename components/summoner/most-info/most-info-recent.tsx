import { useSummonerContext } from '@/pages/summoners/[name]';
import Trans from 'next-translate/Trans';
import { FC, useMemo } from 'react';
import mostInfoRecentStyle from './most-info-recent.style';

const MostInfoRecent: FC = () => {
  const context = useSummonerContext();

  const recentWinRate = context.mostInfoDTO?.recentWinRate;

  const recentWinRateComponents = useMemo(() => {
    if (!recentWinRate) {
      return;
    }

    const sortedRecentWinRate = [...recentWinRate]?.sort(
      (a, b) => b.wins + b.losses - (a.wins + a.losses)
    );
    return sortedRecentWinRate.map(championWinRate => {
      const winRate = Math.round(
        (championWinRate.wins /
          (championWinRate.wins + championWinRate.losses)) *
          100
      );

      return (
        <li key={`champion-${championWinRate.id}`}>
          <img src={championWinRate.imageUrl} />
          <h3>{championWinRate.name}</h3>
          <p className="win">
            <Trans
              i18nKey="summoner-most-info-win"
              ns="common"
              values={{
                winRate,
              }}
            />
          </p>
          <div className="games">
            <div
              className="wins"
              style={{
                width: `calc(${winRate}%)`,
              }}
            />
            <div
              className="losses"
              style={{
                width: `calc(${100 - winRate}%)`,
              }}
            />
            <Trans
              i18nKey="summoner-most-info-recent-games"
              ns="common"
              components={{
                wins: <span className="wins" />,
                losses: <span className="losses" />,
              }}
              values={{
                wins: championWinRate.wins,
                losses: championWinRate.losses,
              }}
            />
          </div>
        </li>
      );
    });
  }, [recentWinRate]);

  return <ul css={mostInfoRecentStyle}>{recentWinRateComponents}</ul>;
};

export default MostInfoRecent;
