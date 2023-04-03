import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { LineChartData } from '@/ui/data/ChartData';
import Flexbox from '@/ui/foundations/flexbox';
import Typography from '@/ui/foundations/typography';
import styles from './LineChart.module.scss';

const LineChart = () => {
	return (
		<ResponsiveLine
			data={LineChartData}
			theme={{
				fontSize: 12,
				textColor: '#030229'
			}}
			margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
			colors={d => d.color}
			xScale={{ type: 'point' }}
			enableGridX={false}
			yFormat=" >-.2f"
			yScale={{
				type: 'linear',
				stacked: false,
				reverse: false,
				min: 0,
				max: 100
			}}
			curve="natural"
			axisTop={null}
			axisRight={null}
			tooltip={({ point }) => {
				return (
					<Flexbox direction="column" gap={3} alignItems="center" className={styles['tooltip']}>
						<Typography type="body_12-400" colorStyle="#fff" opacity={0.8}>
							Sales
						</Typography>
						<Typography type="body_16-600">{point.data.yFormatted}</Typography>
					</Flexbox>
				);
			}}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legendOffset: 36,
				legendPosition: 'middle'
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickValues: [0, 20, 40, 60, 80, 100],
				tickRotation: 0,
				legend: 'count',
				legendOffset: -40,
				legendPosition: 'middle'
			}}
			lineWidth={5}
			gridYValues={[0, 20, 40, 60, 80, 100]}
			pointSize={14}
			pointColor={{ theme: 'background' }}
			pointBorderWidth={3}
			pointBorderColor={{ from: 'serieColor' }}
			pointLabelYOffset={-12}
			enableArea={true}
			areaBlendMode="multiply"
			areaBaselineValue={0}
			areaOpacity={0.05}
			useMesh={true}
			legends={[
				{
					anchor: 'bottom-right',
					direction: 'column',
					justify: false,
					translateX: 100,
					translateY: 0,
					itemsSpacing: 0,
					itemDirection: 'left-to-right',
					itemWidth: 80,
					itemHeight: 20,
					itemOpacity: 0.75,
					symbolSize: 12,
					symbolShape: 'circle',
					symbolBorderColor: 'rgba(0, 0, 0, .5)',
					effects: [
						{
							on: 'hover',
							style: {
								itemBackground: 'rgba(0, 0, 0, .03)',
								itemOpacity: 1
							}
						}
					]
				}
			]}
		/>
	);
};

export default LineChart;
