import { League } from '@/models';
import UnrankedImage from '@/public/images/unranked.png';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import rankProfileStyle from './rank-profile.style';

interface RankProfileProps {
  league?: League;
  name: string;
}

const RankProfile: FC<RankProfileProps> = ({ league, name }) => {
  const { t } = useTranslation('common');
  return (
    <div css={rankProfileStyle}>
      {league ? (
        <img className="rank-image" src={league?.tierRank.imageUrl} />
      ) : (
        <img className="rank-image unranked" {...UnrankedImage} />
      )}
      <div className="rank-info">
        <h3>{league?.tierRank.name || name}</h3>
        {league ? (
          <>
            <p className="rank-games">
              <Trans
                i18nKey="summoner-rank-games"
                ns="common"
                components={{ b: <b /> }}
                values={{ games: league.wins + league.losses }}
              />
            </p>
            <p className="rank-tier">{league.tierRank.tierDivision}</p>
            <p className="rank-lp">
              <Trans
                i18nKey="summoner-rank-lp"
                ns="common"
                components={{ b: <b /> }}
                values={{
                  lp: league.tierRank.lp,
                  wins: league.wins,
                  losses: league.losses,
                }}
              />
            </p>
            <p className="rank-lp">
              <Trans
                i18nKey="summoner-rank-lp2"
                ns="common"
                values={{
                  percent: Math.trunc(
                    (league.wins / (league.wins + league.losses)) * 100
                  ),
                }}
              />
            </p>
          </>
        ) : (
          <p className="unranked">{t('summoner-unranked')}</p>
        )}
      </div>
    </div>
  );
};

export default RankProfile;
