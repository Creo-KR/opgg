import { Summoner } from '@/models';
import Trans from 'next-translate/Trans';
import { FC } from 'react';
import PrevTierTag from './prev-tier-tag';
import summonerProfileStyle from './summoner-profile.style';

interface SummonerProfileProps {
  summoner: Summoner;
}

const SummonerProfile: FC<SummonerProfileProps> = props => {
  return (
    <section css={summonerProfileStyle}>
      <ul className="prev-tier-list">
        {props.summoner.previousTiers.map(tier => (
          <PrevTierTag key={`prev-tier-${tier.season}`} tier={tier} />
        ))}
      </ul>
      <div className="profile-wrap">
        <div className="profile-image-wrap">
          <img className="profile-image" src={props.summoner.profileImageUrl} />
          <img
            className="profile-image-border"
            src={props.summoner.profileBorderImageUrl}
          />
          <p className="profile-level">{props.summoner.level}</p>
        </div>
        <div className="profile-info">
          <h1>{props.summoner.name}</h1>
          <p>
            <Trans
              i18nKey="summoner-ladder-rank"
              ns="common"
              components={{ b: <b /> }}
              values={{
                rank: props.summoner.ladderRank.rank.toLocaleString(),
                percent: props.summoner.ladderRank.rankPercentOfTop,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummonerProfile;
