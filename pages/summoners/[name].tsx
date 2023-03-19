import { getServerSideApi } from '@/api/provider/api-provider';
import { getSummoner, SummonerDTO } from '@/api/summoner';
import Title from '@/components/head/title';
import SummonerProfile from '@/components/summoner/summoner-profile';
import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async context => {
  const summonerName = context.query.name as string;
  const apiData = await getServerSideApi(
    getSummoner({
      summonerName,
    })
  );

  return { props: { summonerName, apiData } };
};

interface SummonerPageProps {
  summonerName: string;
  apiData: SummonerDTO;
}

const SummonerPage: NextPage<SummonerPageProps> = ({
  summonerName,
  apiData,
}) => {
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
      </main>
    </>
  );
};

export default SummonerPage;
