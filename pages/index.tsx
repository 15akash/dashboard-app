import { useMemo, useContext } from 'react';
import Flexbox from '@/ui/foundations/flexbox';
import styles from '../styles/Home.module.scss';
import DatePicker from '@/ui/components/date-picker';
import ProductSummary from '@/ui/components/product-summary';
import { saveIcon, salesIcon, stockIcon, jobIcon } from '@/ui/assets/dashboard-icons';
import DoughnutChart from '@/ui/components/doughnut-chart';
import Card from '@/ui/foundations/card';
import LineChart from '@/ui/components/line-chart';
import MenuContext from '@/ui/store/menu-context';
import CardHeader from '@/ui/components/card-header';
import TopSellingProducts from '@/ui/components/top-selling-products';
import RecentOrders from '@/ui/components/recent-orders';
import Typography from '@/ui/foundations/typography';

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
		<Flexbox direction="column" width="100%">
			<Flexbox direction="column" gap={30} className={styles['homepage']}>
				<Flexbox justifyContent="space-between" className={styles['homepage--header']}>
					<Typography type="h2">Dashboard</Typography>
					<Flexbox gap={15}>
						<DatePicker date="10-06-2021" />
						<DatePicker date="10-10-2023" />
					</Flexbox>
				</Flexbox>
				<div className={styles['homepage--summary']}>
					{productSummary.map(product => {
						return <ProductSummary key={product.id} {...product} />;
					})}
				</div>
			</Flexbox>
			<Flexbox gap={30} className={styles['charts']}>
				<Card className={styles['charts--linechart']}>
					<CardHeader heading="Reports" />
					<div style={{ width: '100%', position: 'absolute', height: '80%', bottom: '0' }}>
						<LineChart />
					</div>
				</Card>
				<Card className={styles['charts--doughnut']}>
					<CardHeader heading="Analytics" />
					<Flexbox direction="column" alignItems="center" className={styles['charts--doughnut-transactions']}>
						<Typography el="h1">80%</Typography>
						<Typography type="body_16-400" colorStyle="#030229" opacity={0.7}>
							Transactions
						</Typography>
					</Flexbox>
					<div style={{ width: '100%', position: 'absolute', height: '80%', right: '5px', bottom: '0' }}>
						<DoughnutChart />
					</div>
				</Card>
			</Flexbox>
			<div className={styles['product-details']}>
				<RecentOrders />
				<TopSellingProducts />
			</div>
		</Flexbox>
	);
}
