import React, { useCallback, useContext, useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Flexbox from '@/ui/foundations/flexbox';
import MenuContext from '@/ui/store/menu-context';

const LineChart = () => {
	const menuCtx = useContext(MenuContext);
	Chart.register(...registerables);
	const chartData = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				borderWidth: 1,
				width: 100
			}
		]
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true
			}
		}
	};

	// const getChart = useCallback(() => , [menuCtx.isMenuCollapsed]);1
	return <Line data={chartData} options={options} />;
};

export default LineChart;
