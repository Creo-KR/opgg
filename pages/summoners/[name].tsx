import { getServerSideApi } from '@/api/provider/api-provider';
import { getSummoner, SummonerDTO } from '@/api/summoner';
import Title from '@/components/head/title';
import SideInfo from '@/components/summoner/side-info';
import SummonerProfile from '@/components/summoner/summoner-profile';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

export const getServerSideProps: GetServerSideProps<
  SummonerPageProps
> = async context => {
  const summonerName = context.query.name as string;
  const api = await getServerSideApi(
    getSummoner({
      summonerName,
    })
  );

  return { props: { summonerName, apiData: api.data } };
};

interface SummonerPageProps {
  summonerName: string;
  apiData: SummonerDTO;
}

const SummonerPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ summonerName, apiData }) => {
  const summoner = apiData?.summoner;
  const wins = summoner?.leagues?.[0].wins;
  const losses = summoner?.leagues?.[0].losses;
  const description = `${summonerName} / Lv. ${
    summoner?.level
  } / ${wins}승 ${losses}패 승률 ${Math.trunc(
    (wins / (wins + losses)) * 100
  )}%`;

  return (
    <>
      <Title title={summonerName} description={description} />
      <main>
        <SummonerProfile summoner={summoner} />
        <div className="flex">
          <SideInfo />
        </div>
      </main>
    </>
  );
};

export default SummonerPage;
