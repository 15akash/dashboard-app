import React from 'react';
import Card from '@/ui/foundations/card';
import { IProductSummary } from '@/ui/interface';
import Flexbox from '@/ui/foundations/flexbox';
import styles from './ProductSummary.module.scss';
import Image from 'next/image';

const ProductSummary = ({ image, numbers, id, desc }: IProductSummary) => {
	return (
		<Card className={styles['summary']}>
			<Image src={image} alt={id} />
			<Flexbox direction="column">
				<h1>{numbers}</h1>
				<p>{desc}</p>
			</Flexbox>
		</Card>
	);
};

export default ProductSummary;
