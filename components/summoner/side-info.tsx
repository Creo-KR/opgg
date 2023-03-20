import { useSummonerContext } from '@/pages/summoners/[name]';
import { FC } from 'react';
import RankProfile from './rank-profile';

const SideInfo: FC = () => {
  const { summoner } = useSummonerContext();

  const soloLeague = summoner?.leagues.find(
    league => league.tierRank.name === '솔랭'
  );
  const freeLeague = summoner?.leagues.find(
    league => league.tierRank.name === '자유 5:5 랭크'
  );
  return (
    <section>
      <RankProfile league={soloLeague} name="솔랭" />
      <RankProfile league={freeLeague} name="자유 5:5 랭크" />
    </section>
  );
};

export default SideInfo;
