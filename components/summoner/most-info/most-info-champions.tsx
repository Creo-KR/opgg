import { useSummonerContext } from '@/pages/summoners/[name]';
import { getKDAClass, getWinRateClass } from '@/utils/convert';
import Trans from 'next-translate/Trans';
import { FC, useMemo } from 'react';
import mostInfoChampionsStyle from './most-info-champions.style';

const MostInfoChampions: FC = () => {
  const context = useSummonerContext();

  const champions = context.mostInfoDTO?.champions;

  const championsComponents = useMemo(() => {
    if (!champions) {
      return;
    }

    const sortedChampions = [...champions]?.sort((a, b) => b.games - a.games);
    return sortedChampions.map(champion => {
      const kda =
        Math.round(
          champion.kills + (champion.assists / champion.deaths) * 100
        ) / 100;

      const kdaClass = getKDAClass(kda);

      const winRate = Math.round((champion.wins / champion.games) * 100);

      const winRateClass = getWinRateClass(winRate);

      return (
        <li key={`champion-${champion.id}`}>
          <img src={champion.imageUrl} />
          <div className="col-1">
            <h3>{champion.name}</h3>
            <p className="cs">
              <Trans
                i18nKey="summoner-most-info-champion-cs"
                ns="common"
                values={{
                  cs: champion.cs,
                  per: Math.round((champion.cs / champion.games) * 10) / 10,
                }}
              />
            </p>
          </div>
          <div className="col-2">
            <p className={`kda ${kdaClass}`}>
              <Trans
                i18nKey="summoner-most-info-champion-kda"
                ns="common"
                values={{
                  kda,
                }}
              />
            </p>
            <p className="kda-detail">
              <Trans
                i18nKey="summoner-most-info-champion-kda-detail"
                ns="common"
                values={{
                  kills:
                    Math.round((champion.kills / champion.games) * 10) / 10,
                  deaths:
                    Math.round((champion.deaths / champion.games) * 10) / 10,
                  assists:
                    Math.round((champion.assists / champion.games) * 10) / 10,
                }}
              />
            </p>
          </div>
          <div className="col-3">
            <p className={`win ${winRateClass}`}>
              <Trans
                i18nKey="summoner-most-info-win"
                ns="common"
                values={{
                  winRate,
                }}
              />
            </p>
            <p className="games">
              <Trans
                i18nKey="summoner-most-info-champion-games"
                ns="common"
                values={{
                  games: champion.games,
                }}
              />
            </p>
          </div>
        </li>
      );
    });
  }, [champions]);
  return <ul css={mostInfoChampionsStyle}>{championsComponents}</ul>;
};

export default MostInfoChampions;
