import styles from './RecentOrders.module.scss';
import Card from '@/ui/foundations/card';
import React, { useMemo } from 'react';
import CardHeader from '../card-header';
import Flexbox from '@/ui/foundations/flexbox';
import Typography from '@/ui/foundations/typography';
import { orderHeading, recentOrdersData } from '@/ui/data/RecentOrders';
import Image from 'next/image';

const RecentOrders = () => {
	return (
		<Card width="100%" className={styles['recent-orders']}>
			<CardHeader heading="Recent Orders" />
			<div className={styles['recent-orders--heading']}>
				{orderHeading.map(header => {
					return (
						<Flexbox alignItems="center" gap={10} key={header.name}>
							<Typography type="body_12-400">{header.name}</Typography>
							{header.icon && <Image src={header.icon} alt={header.name} />}
						</Flexbox>
					);
				})}
			</div>
			<div className={styles['recent-orders--table']}>
				{recentOrdersData.map(order => {
					return (
						<>
							<Typography type="body_12-400">{order.trackingNo}</Typography>
							<Flexbox gap={10} alignItems="center">
								<Image src={order.prodImg} alt={order.trackingNo} />
								<Typography type="body_12-400">{order.productName}</Typography>
							</Flexbox>
							<Typography type="body_12-400">{order.price}</Typography>
							<Flexbox className={styles['recent-orders--table--order']}>
								<Typography type="body_12-400" colorStyle="#26C0E2">
									{order.totalOrder}
								</Typography>
							</Flexbox>
							<Typography type="body_12-400">{order.totalAmount}</Typography>
						</>
					);
				})}
			</div>
		</Card>
	);
};

export default RecentOrders;
