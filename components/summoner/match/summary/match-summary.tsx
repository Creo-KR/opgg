import { MostChampion } from '@/models';
import { useSummonerContext } from '@/pages/summoners/[name]';
import { getChampionName, getKDAClass } from '@/utils/convert';
import Trans from 'next-translate/Trans';
import { FC, useMemo } from 'react';
import { useMatchContext } from '../matches';
import MatchSummaryChampion from './match-summary-champion';
import MatchSummaryChart from './match-summary-chart';
import MatchSummaryPosition from './match-summary-position';
import matchSummaryStyle from './match-summary.style';

const MatchSummary: FC = () => {
  const { tab } = useMatchContext();
  const context = useSummonerContext();

  const data = useMemo(() => {
    if (!context.matchesDTO?.games) {
      return;
    }

    const games = context.matchesDTO?.games.filter(game => {
      if (tab === 'all') {
        return true;
      }

      if (tab === 'solo') {
        return game.gameType === '솔랭';
      }

      if (tab === 'free') {
        return game.gameType === '자유 5:5 랭크';
      }
    });

    const sum = games.reduce(
      (prev, curr) => {
        curr.isWin ? prev.wins++ : prev.losses++;
        prev.kills += curr.stats.general.kill;
        prev.deaths += curr.stats.general.death;
        prev.assists += curr.stats.general.assist;
        prev.contributionForKillRate += parseInt(
          curr.stats.general.contributionForKillRate
        );

        const name = getChampionName(curr.champion);

        if (name) {
          const prevChampion = prev.champions[name];

          prev.champions[name] = {
            imageUrl: curr.champion.imageUrl,
            wins: (curr.isWin ? 1 : 0) + (prevChampion?.wins || 0),
            losses: (curr.isWin ? 0 : 1) + (prevChampion?.losses || 0),
            kills: curr.stats.general.kill + (prevChampion?.kills || 0),
            deaths: curr.stats.general.death + (prevChampion?.deaths || 0),
            assists: curr.stats.general.assist + (prevChampion?.assists || 0),
            kda: 0,
          };
          prev.champions[name].kda =
            Math.round(
              ((prev.champions[name].kills + prev.champions[name].assists) /
                prev.champions[name].deaths) *
                100
            ) / 100;
        }

        return prev;
      },
      {
        games: 0,
        wins: 0,
        losses: 0,
        kills: 0,
        deaths: 0,
        assists: 0,
        contributionForKillRate: 0,
        champions: {} as Record<
          string,
          Pick<
            MostChampion,
            'wins' | 'losses' | 'kills' | 'deaths' | 'assists' | 'imageUrl'
          > & { kda: number }
        >,
      }
    );

    const kda =
      Math.round(((sum.kills + sum.assists) / sum.deaths) * 100) / 100 || 0;

    const kdaClass = getKDAClass(kda);

    const killRate = Math.round(sum.contributionForKillRate / games.length);

    const sortedChampion = Object.entries(sum.champions).sort(
      (a, b) => b[1].kda - a[1].kda
    );

    return {
      ...sum,
      games: games.length,
      kda,
      kdaClass,
      killRate,
      sortedChampion,
    };
  }, [tab, context.matchesDTO?.games]);

  return data ? (
    <div css={matchSummaryStyle}>
      <div className="statistics">
        <p className="statistics-games">
          <Trans
            i18nKey="summoner-match-summary-games"
            ns="common"
            values={{
              games: data.games,
              wins: data.wins,
              losses: data.losses,
            }}
          />
        </p>
        <div className="statistics-info">
          <MatchSummaryChart wins={data.wins} losses={data.losses} />
          <div className="statistics-scores">
            <p className="statistics-score-detail">
              <Trans
                i18nKey="summoner-match-summary-scores"
                ns="common"
                components={{ b: <b />, red: <b className="red" /> }}
                values={{
                  kills: Math.round((data.kills / data.games) * 10) / 10,
                  deaths: Math.round((data.deaths / data.games) * 10) / 10,
                  assists: Math.round((data.assists / data.games) * 10) / 10,
                }}
              />
            </p>
            <p className={`statistics-kda ${data.kdaClass}`}>
              <Trans
                i18nKey="summoner-match-summary-kda"
                ns="common"
                components={{
                  kda: <b />,
                  kda1: <span />,
                  kill: <span className="red" />,
                }}
                values={{
                  kda: data.kda,
                  killPercent: data.killRate,
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="champion">
        <ul>
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={`champion-${index}`}>
              <MatchSummaryChampion
                champion={data.sortedChampion?.[index]?.[1]}
              />
            </li>
          ))}
        </ul>
      </div>
      <MatchSummaryPosition />
    </div>
  ) : (
    <></>
  );
};

export default MatchSummary;
