import React from 'react';
import styles from './TopSellingProducts.module.scss';
import Card from '@/ui/foundations/card';
import CardHeader from '../card-header';
import Flexbox from '@/ui/foundations/flexbox';
import Image from 'next/image';
import { TopSellingData } from '@/ui/data/TopSelling';
import Typography from '@/ui/foundations/typography';

const TopSellingProducts = () => {
	return (
		<Card width="100%" className={styles['top-selling']}>
			<CardHeader heading="Top Selling Products" />
			<Flexbox direction="column" className={styles['top-selling--product-section']}>
				{TopSellingData.map((product, index) => {
					return (
						<Flexbox key={product.id} direction="column" className={styles['top-selling--product-section--item']}>
							<Flexbox gap={15} key={product.id}>
								<Image src={product.image} alt={product.id} />
								<Flexbox direction="column" gap={10} className={styles['top-selling--product-section--item--desc']}>
									<Typography type="body_15-400">{product.productName}</Typography>
									<Image src={product.stars} alt={product.productName} />
									<Typography el="h3">{product.price}</Typography>
								</Flexbox>
							</Flexbox>
							<div style={{ borderBottom: '1px solid #f1f1f1', width: '100%', margin: '22px 0' }}></div>
						</Flexbox>
					);
				})}
			</Flexbox>
			<Flexbox></Flexbox>
		</Card>
	);
};

export default TopSellingProducts;
