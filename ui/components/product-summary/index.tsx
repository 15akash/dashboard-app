import React from 'react';
import Card from '@/ui/foundations/card';
import { IProductSummary } from '@/ui/interface';
import Flexbox from '@/ui/foundations/flexbox';
import styles from './ProductSummary.module.scss';
import Image from 'next/image';
import Typography from '@/ui/foundations/typography';

const ProductSummary = ({ image, numbers, id, desc }: IProductSummary) => {
	return (
		<Card className={styles['summary']}>
			<Image src={image} alt={id} />
			<Flexbox direction="column">
				<Typography type="h3" el="h3">
					{numbers}
				</Typography>
				<Typography type="body_14-400">{desc}</Typography>
			</Flexbox>
		</Card>
	);
};

export default ProductSummary;
