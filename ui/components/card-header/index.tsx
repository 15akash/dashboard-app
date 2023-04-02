import { Menu } from '@/ui/assets/Menu';
import Flexbox from '@/ui/foundations/flexbox';
import React from 'react';

const CardHeader = ({ heading }: { heading: string }) => {
	return (
		<Flexbox justifyContent="space-between" width="100%" alignItems="center">
			<h3
				style={{
					fontWeight: '700',
					fontSize: '18px',
					lineHeight: '25px',
					color: '#000000',
					opacity: '0.7',
					margin: '0'
				}}>
				{heading}
			</h3>
			<Menu />
		</Flexbox>
	);
};

export default CardHeader;
