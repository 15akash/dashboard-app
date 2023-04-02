import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
	const chartData = {
		labels: ['Red', 'Blue', 'Yellow'],
		datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
				borderWidth: 1,
				// maxHeight: 160,
				borderColor: ['#FF6384', '#36A2EB', '#FFCE56']
			}
		],
		responsive: true,
		maintainAspectRatio: false
		// maintainAspectRation: true

		// legend: {
		// 	position: 'bottom'
		// }
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false
		// legend: {
		// 	position: 'bottom',
		// 	display: false
		// }
	};

	return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
