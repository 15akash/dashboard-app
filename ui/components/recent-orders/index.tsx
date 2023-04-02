import styles from './RecentOrders.module.scss';
import Card from '@/ui/foundations/card';
import React from 'react';
import CardHeader from '../card-header';

const RecentOrders = () => {
	return (
		<Card width="100%" className={styles['recent-orders']}>
			<CardHeader heading="Recent Orders" />
		</Card>
	);
};

export default RecentOrders;
