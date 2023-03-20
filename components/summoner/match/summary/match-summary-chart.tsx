import { useSummonerContext } from '@/pages/summoners/[name]';
import { useTheme } from '@emotion/react';
import { FC, useLayoutEffect, useState } from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import matchSummaryChartStyle from './match-summary-chart.style';

interface MatchSummaryChartProps {
  wins: number;
  losses: number;
}

const MatchSummaryChart: FC<MatchSummaryChartProps> = props => {
  const c = useSummonerContext();
  const theme = useTheme();

  const [chartData, setChartData] = useState<{ name: string; value: number }[]>(
    []
  );

  useLayoutEffect(() => {
    if (!props) {
      return;
    }

    setChartData([
      { name: 'wins', value: props.wins },
      { name: 'losses', value: props.losses },
    ]);
  }, [props]);

  return props ? (
    <div css={matchSummaryChartStyle} className="statistics-chart">
      <p className="statistics-chart-text">
        <b>{Math.trunc((props.wins / (props.wins + props.losses)) * 100)}</b>%
      </p>
      <PieChart width={90} height={90}>
        <Pie
          data={chartData}
          dataKey="value"
          cx={40}
          cy={40}
          innerRadius={32}
          outerRadius={45}
          animationDuration={0}
          startAngle={-270}
        >
          {chartData?.map((data, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                data.name === 'wins' ? theme.colors.bluish : theme.colors.coral
              }
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  ) : (
    <></>
  );
};

export default MatchSummaryChart;
