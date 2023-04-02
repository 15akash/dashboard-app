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

	return (
		<ResponsiveLine
			data={data}
			margin={{ top: 20, right: 30, bottom: 50, left: 30 }}
			colors={d => d.color}
			xScale={{ type: 'point' }}
			enableGridX={false}
			yScale={{
				type: 'linear',

				// min: 'auto'
				max: 'auto',
				stacked: true,
				reverse: false
			}}
			yFormat=" >-.2f"
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
			areaOpacity={0.1}
			useMesh={true}
			sliceTooltip={({ slice }) => {
				console.log('slice', slice);
				return <div style={{ background: 'white', padding: '9px 12px', border: '1px solid black' }}></div>;
			}}
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
