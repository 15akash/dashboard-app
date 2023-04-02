import Flexbox from '@/ui/foundations/flexbox';
import React from 'react';
import styles from './DatePicker.module.scss';
import Image from 'next/image';
import downArrow from '@/ui/assets/dashboard-icons/down-arrow.svg';
import Typography from '@/ui/foundations/typography';

const DatePicker = ({ date }: { date: string }) => {
	return (
		<Flexbox gap={8} alignItems="center" className={styles['date-picker']}>
			<Typography type="body_14-600">{date}</Typography>
			<Image src={downArrow} alt="down-arrow" />
		</Flexbox>
	);
};

export default DatePicker;
