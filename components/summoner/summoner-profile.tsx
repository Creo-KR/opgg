import { useSummonerContext } from '@/pages/summoners/[name]';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import PrevTierTag from './prev-tier-tag';
import summonerProfileStyle from './summoner-profile.style';

const SummonerProfile: FC = () => {
  const { summoner } = useSummonerContext();
  return summoner ? (
    <section css={summonerProfileStyle}>
      <div className="inner">
        <ul className="prev-tier-list">
          {summoner.previousTiers.map(tier => (
            <PrevTierTag key={`prev-tier-${tier.season}`} tier={tier} />
          ))}
        </ul>
        <div className="profile-wrap">
          <div className="profile-image-wrap">
            <img className="profile-image" src={summoner.profileImageUrl} />
            <img
              className="profile-image-border"
              src={summoner.profileBorderImageUrl}
            />
            <p className="profile-level">{summoner.level}</p>
          </div>
          <div className="profile-info">
            <h1>{summoner.name}</h1>
            <p>
              <Trans
                i18nKey="summoner-ladder-rank"
                ns="common"
                components={{ b: <b /> }}
                values={{
                  rank: summoner.ladderRank.rank.toLocaleString(),
                  percent: summoner.ladderRank.rankPercentOfTop,
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default SummonerProfile;
