import React from 'react';
import styles from './TopSellingProducts.module.scss';
import Card from '@/ui/foundations/card';
import CardHeader from '../card-header';

const TopSellingProducts = () => {
	return (
		<Card width="100%" className={styles['top-selling']}>
			<CardHeader heading="Top Selling Products" />
		</Card>
	);
};

export default TopSellingProducts;
