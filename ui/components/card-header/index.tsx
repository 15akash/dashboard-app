import { Menu } from '@/ui/assets/Menu';
import Flexbox from '@/ui/foundations/flexbox';
import Typography from '@/ui/foundations/typography';
import React from 'react';

const CardHeader = ({ heading }: { heading: string }) => {
	return (
		<Flexbox justifyContent="space-between" width="100%" alignItems="center">
			<Typography type="body_18-700">{heading}</Typography>
			<Menu />
		</Flexbox>
	);
};

export default CardHeader;
