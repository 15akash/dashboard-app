import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const DoughnutChart = () => {
	const data = [
		{
			id: 'sale',
			label: 'Sale',
			value: 268
		},
		{
			id: 'distribute',
			label: 'Distribute',
			value: 100
		},
		{
			id: 'return',
			label: 'Return',
			value: 138
		}
	];

	return (
		<ResponsivePie
			data={data}
			margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
			innerRadius={0.85}
			cornerRadius={45}
			startAngle={0}
			endAngle={300}
			activeOuterRadiusOffset={8}
			colors={['#5893ff', '#FFD66B', '#FF8F6B']}
			borderWidth={20}
			borderColor={{
				from: 'color',
				modifiers: [['darker', 0]]
			}}
			arcLinkLabelsTextColor="#333333"
			arcLinkLabelsOffset={8}
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: 'color' }}
			arcLabelsRadiusOffset={0.45}
			enableArcLabels={false}
			enableArcLinkLabels={false}
			padAngle={0}
			arcLabelsTextColor={{
				from: 'color',
				modifiers: [['darker', 1.9]]
			}}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					size: 4,
					padding: 1,
					stagger: true
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: 'rgba(255, 255, 255, 0.3)',
					rotation: -45,
					lineWidth: 6,
					spacing: 10
				}
			]}
			fill={[
				{
					match: {
						id: 'ruby'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'c'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'go'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'python'
					},
					id: 'dots'
				},
				{
					match: {
						id: 'scala'
					},
					id: 'lines'
				},
				{
					match: {
						id: 'lisp'
					},
					id: 'lines'
				},
				{
					match: {
						id: 'elixir'
					},
					id: 'lines'
				},
				{
					match: {
						id: 'javascript'
					},
					id: 'lines'
				}
			]}
			legends={[
				{
					anchor: 'bottom',
					direction: 'row',
					justify: false,
					translateX: 0,
					translateY: 56,
					itemsSpacing: 0,
					itemWidth: 100,
					itemHeight: 18,
					itemTextColor: '#999',
					itemDirection: 'left-to-right',
					itemOpacity: 1,
					symbolSize: 18,
					symbolShape: 'circle',
					effects: [
						{
							on: 'hover',
							style: {
								itemTextColor: '#000'
							}
						}
					]
				}
			]}
		/>
	);
};

export default DoughnutChart;
