import React, { ReactNode } from 'react';
import styles from './card.module.scss';
import Flexbox from '../flexbox';

interface CardProps {
	className?: string;
	children: ReactNode;
	width?: string;
}

const Card = ({ className, children, ...props }: CardProps) => {
	return (
		<Flexbox className={`${styles['card']} ${className}`} {...props}>
			{children}
		</Flexbox>
	);
};

export default Card;
