import { TierRank } from '@/models';
import { FC } from 'react';
import prevTierTagStyle from './prev-tier-tag.style';

interface PrevTierTagProps {
  tier: TierRank;
}

const PrevTierTag: FC<PrevTierTagProps> = ({ tier }) => {
  return (
    <li css={prevTierTagStyle}>
      <b>S{tier.season}</b> {tier.tier}
    </li>
  );
};

export default PrevTierTag;
