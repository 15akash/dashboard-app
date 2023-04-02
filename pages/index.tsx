import { useMemo, useContext, useCallback } from 'react';
import Flexbox from '@/ui/foundations/flexbox';
import styles from '../styles/Home.module.scss';
import DatePicker from '@/ui/components/date-picker';
import ProductSummary from '@/ui/components/product-summary';
import { saveIcon, salesIcon, stockIcon, jobIcon } from '@/ui/assets/dashboard-icons';
import DoughnutChart from '@/ui/components/doughnut-chart';
import Card from '@/ui/foundations/card';
import LineChart from '@/ui/components/line-chart';
import MenuContext from '@/ui/store/menu-context';

export default function Home() {
	const menuCtx = useContext(MenuContext);
	const productSummary = useMemo(
		() => [
			{ id: 'save', numbers: '178+', image: saveIcon, desc: 'Save Products' },
			{ id: 'stock', numbers: '20+', image: stockIcon, desc: 'Stock Products' },
			{ id: 'sales', numbers: '190+', image: salesIcon, desc: 'Sales Products' },
			{ id: 'job', numbers: '12+', image: jobIcon, desc: 'Job Application' }
		],
		[]
	);

	return (
		<>
			<Flexbox direction="column" gap={30} className={styles['homepage']}>
				<Flexbox justifyContent="space-between" className={styles['homepage--header']}>
					<h1>Dashboard</h1>
					<Flexbox gap={15}>
						<DatePicker date="10-06-2021" />
						<DatePicker date="10-10-2023" />
					</Flexbox>
				</Flexbox>
				<Flexbox width="100%" alignItems="center" gap={30}>
					{productSummary.map(product => {
						return <ProductSummary key={product.id} {...product} />;
					})}
				</Flexbox>
			</Flexbox>
			<Flexbox gap={30} className={styles['charts']}>
				<Card className={styles['linechart']}>
					<div style={{ width: '100%', position: 'absolute', height: '80%', bottom: '0' }}>
						<LineChart />
					</div>
				</Card>
				<Card className={styles['doughnut']}>
					<div style={{ width: '90%', position: 'absolute', height: '80%' }}>
						<DoughnutChart />
					</div>
				</Card>
			</Flexbox>
		</>
	);
}
