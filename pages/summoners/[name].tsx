import { getServerSideApi } from '@/api/provider/api-provider';
import {
  getMatches,
  getSummoner,
  MatchesDTO,
  SummonerDTO,
} from '@/api/summoner';
import Title from '@/components/head/title';
import Matches from '@/components/summoner/matches';
import SideInfo from '@/components/summoner/side-info';
import SummonerProfile from '@/components/summoner/summoner-profile';
import { Summoner } from '@/models';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import useTranslation from 'next-translate/useTranslation';
import { createContext, useContext } from 'react';

export const getServerSideProps: GetServerSideProps<
  SummonerPageProps
> = async context => {
  const summonerName = context.query.name as string;
  const summonerDTO = await getServerSideApi(
    getSummoner({
      summonerName,
    })
  );
  const matchesDTO = await getServerSideApi(
    getMatches({
      summonerName,
    })
  );

  return {
    props: {
      summonerName,
      summonerDTO: summonerDTO.data,
      matchesDTO: matchesDTO.data,
    },
  };
};

interface SummonerPageProps {
  summonerName: string;
  summonerDTO: SummonerDTO;
  matchesDTO: MatchesDTO;
}

const SummonerPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ summonerName, summonerDTO, matchesDTO }) => {
  const { t } = useTranslation('common');
  const summoner = summonerDTO?.summoner;
  const wins = summoner?.leagues?.[0].wins;
  const losses = summoner?.leagues?.[0].losses;
  const description = t('summoner-desc', {
    summonerName,
    level: summoner?.level,
    wins,
    losses,
    percent: Math.trunc((wins / (wins + losses)) * 100),
  });

  return (
    <SummonerContext.Provider value={{ summonerName, summoner, matchesDTO }}>
      <Title title={summonerName} description={description} />
      <main>
        <SummonerProfile />
        <div className="flex inner">
          <SideInfo />
          <Matches />
        </div>
      </main>
    </SummonerContext.Provider>
  );
};
interface SummonerContext {
  summonerName: string;
  summoner?: Summoner;
  matchesDTO?: MatchesDTO;
}

const SummonerContext = createContext<SummonerContext>({ summonerName: '' });

export function useSummonerContext() {
  return useContext(SummonerContext);
}

export default SummonerPage;
