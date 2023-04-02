import React from 'react';
// import { ResponsiveLine } from '@nivo/line';
import { ResponsiveLine } from '@nivo/line';

const LineChart = () => {
	const data = [
		{
			id: 'norway',
			color: '#31aaed',
			data: [
				{
					x: 'plane',
					y: 31
				},
				{
					x: 'helicopter',
					y: 11
				},
				{
					x: 'boat',
					y: 75
				},
				{
					x: 'train',
					y: 95
				},
				{
					x: 'subway',
					y: 41
				},
				{
					x: 'bus',
					y: 55
				},
				{
					x: 'car',
					y: 19
				},
				{
					x: 'moto',
					y: 47
				},
				{
					x: 'bicycle',
					y: 90
				},
				{
					x: 'horse',
					y: 75
				},
				{
					x: 'skateboard',
					y: 85
				},
				{
					x: 'others',
					y: 90
				}
			]
		}
	];

	const styles = {
		fontFamily: 'sans-serif',
		textAlign: 'center',
		background: '#333',
		padding: '30px'
	};

	const theme = {
		axis: {
			textColor: '#eee',
			fontSize: '14px',
			tickColor: '#eee'
		},
		grid: {
			stroke: '#888',
			strokeWidth: 1
		}
	};

	return (
		<ResponsiveLine
			data={data}
			theme={{
				fontSize: 12,
				textColor: '#030229'
			}}
			margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
			colors={d => d.color}
			xScale={{ type: 'point' }}
			enableGridX={false}
			yScale={{
				type: 'linear',
				stacked: false,
				reverse: false,
				min: 0,
				max: 100,
				clamp: true,
				nice: true
			}}
			// yFormat=" >-.1f"
			curve="natural"
			axisTop={null}
			axisRight={null}
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
