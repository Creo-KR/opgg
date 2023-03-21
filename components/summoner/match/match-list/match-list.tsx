import {
  default as WardBlueImage,
  default as WardRedImage,
} from '@/public/images/icon-ward-red.png';
import { getChampionName, getDiffTime } from '@/utils/convert';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useMemo, useState } from 'react';
import { useMatchContext } from '../matches';
import MatchListItem from './match-list-item';
import MatchListSummoner from './match-list-summoner';
import matchListStyle from './match-list.style';

const MatchList: FC = () => {
  const { games } = useMatchContext();
  const [load, setLoad] = useState({ loading: false, count: 4 });
  const { t } = useTranslation('common');

  const gameComponents = useMemo(() => {
    setLoad(load => ({ ...load, count: 4 }));
    return games.map(game => {
      const diffDate = getDiffTime(game.createDate * 1000);
      const minutes = Math.trunc(game.gameLength / 60);
      const result = minutes < 3 ? 'avoid' : game.isWin ? 'win' : 'loss';

      return (
        <li key={`match-${game.gameId}`} className={result}>
          <div className="col1">
            <h4 className="type">{game.gameType}</h4>
            <p className="create-date">
              {t('summoner-match-info-create-date', {
                amount: diffDate.amount,
                unit: t(`time-unit-${diffDate.unit}`),
              })}
            </p>
            <div className="divider" />
            <p className="result">
              {t(`summoner-match-info-result-${result}`)}
            </p>
            <p>
              {t('summoner-match-info-game-length', {
                m: minutes,
                s: game.gameLength % 60,
              })}
            </p>
          </div>
          <div className="col2">
            <div className="champion-icons">
              <div>
                <img className="champion" src={game.champion.imageUrl} />
              </div>
              <div className="spells">
                {game.spells.map((spell, index) => (
                  <img key={`spell-${index}`} src={spell.imageUrl} />
                ))}
              </div>
              <div className="perks">
                {game.peak.map((peak, index) => (
                  <img key={`perks-${index}`} src={peak} />
                ))}
              </div>
            </div>
            <p className="champion-name">{getChampionName(game.champion)}</p>
          </div>
          <div className="col3">
            <p className="kda">
              <Trans
                i18nKey="summoner-match-info-kda"
                ns="common"
                components={{
                  s1: <span className="s1" />,
                  s2: <span className="s2" />,
                  s3: <span className="s3" />,
                }}
                values={{
                  kill: game.stats.general.kill,
                  death: game.stats.general.death,
                  assist: game.stats.general.assist,
                }}
              />
            </p>
            <p className="score-wrap">
              <b>
                <Trans
                  i18nKey="summoner-match-info-score"
                  ns="common"
                  components={{ score: <span className="score" /> }}
                  values={{
                    score: game.stats.general.kdaString,
                  }}
                />
              </b>
            </p>
            {(game.stats.general.largestMultiKillString ||
              game.stats.general.opScoreBadge) && (
              <p className="labels">
                {game.stats.general.largestMultiKillString && (
                  <span className="kill">
                    {t(`label-${game.stats.general.largestMultiKillString}`)}
                  </span>
                )}
                {game.stats.general.opScoreBadge && (
                  <span className={game.stats.general.opScoreBadge}>
                    {t(`label-${game.stats.general.opScoreBadge}`)}
                  </span>
                )}
              </p>
            )}
          </div>
          <div className="col4">
            <p className="level">
              {t('summoner-match-info-level', { level: game.champion.level })}
            </p>
            <p className="cs">
              {t('summoner-match-info-cs', {
                cs: game.stats.general.cs,
                per: game.stats.general.csPerMin,
              })}
            </p>
            <p className="kill-percent">
              {t('summoner-match-info-kill-percent', {
                killPercent: game.stats.general.contributionForKillRate,
              })}
            </p>
          </div>
          <div className="items-wrap col5">
            <MatchListItem items={game.items} />
            <p className="items-ward">
              <img src={game.isWin ? WardRedImage.src : WardBlueImage.src} />
              {t('summoner-match-info-ward', {
                ward: game.stats.ward.visionWardsBought,
              })}
            </p>
          </div>
          <div className="summoner-wrap col6">
            <MatchListSummoner gameId={game.gameId} />
          </div>
        </li>
      );
    });
  }, [games]);

  const [observer, setObserver] = useState<IntersectionObserver | null>();
  useEffect(() => {
    function handleObserve(e: IntersectionObserverEntry[]) {
      setLoad(load => ({ ...load, count: load.count + 4 }));
    }

    setObserver(
      new IntersectionObserver(handleObserve, {
        threshold: 1,
      })
    );

    return () => observer?.disconnect();
  }, []);

  return (
    <section css={matchListStyle}>
      <ul>{gameComponents?.slice(0, load.count)}</ul>
      {observer && (
        <div className="obs" ref={div => div && observer.observe(div)} />
      )}
    </section>
  );
};

export default MatchList;
