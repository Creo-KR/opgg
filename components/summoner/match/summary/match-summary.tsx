import { useSummonerContext } from '@/pages/summoners/[name]';
import Trans from 'next-translate/Trans';
import { FC, useMemo } from 'react';
import MatchSummaryChart from './match-summary-chart';
import matchSummaryStyle from './match-summary.style';

const MatchSummary: FC = () => {
  const context = useSummonerContext();
  const summary = context.matchesDTO?.summary;

  const kda =
    (summary &&
      Math.round(((summary.kills + summary.assists) / summary.deaths) * 100) /
        100) ||
    0;

  const contributionForKillRate = useMemo(() => {
    if (!context.matchesDTO?.games) {
      return 0;
    }

    const sum = context.matchesDTO?.games.reduce((prev, curr) => {
      return prev + parseInt(curr.stats.general.contributionForKillRate);
    }, 0);

    return Math.round(sum / context.matchesDTO?.games.length);
  }, [context.matchesDTO?.games]);

  const kdaClass =
    kda >= 5 ? 'kda5' : kda >= 4 ? 'kda4' : kda >= 3 ? 'kda3' : '';

  return summary ? (
    <div css={matchSummaryStyle}>
      <div className="statistics">
        <p className="statistics-games">
          <Trans
            i18nKey="summoner-match-summary-games"
            ns="common"
            values={{
              games: summary.wins + summary.losses,
              wins: summary.wins,
              losses: summary.losses,
            }}
          />
        </p>
        <div className="statistics-info">
          <MatchSummaryChart />
          <div className="statistics-scores">
            <p className="statistics-score-detail">
              <Trans
                i18nKey="summoner-match-summary-scores"
                ns="common"
                components={{ b: <b />, red: <b className="red" /> }}
                values={{
                  kills: summary.kills,
                  deaths: summary.deaths,
                  assists: summary.assists,
                }}
              />
            </p>
            <p className={`statistics-kda ${kdaClass}`}>
              <Trans
                i18nKey="summoner-match-summary-kda"
                ns="common"
                components={{
                  kda: <b />,
                  kda1: <span />,
                  kill: <span className="red" />,
                }}
                values={{
                  kda,
                  killPercent: contributionForKillRate,
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  ) : (
    <></>
  );
};

export default MatchSummary;
