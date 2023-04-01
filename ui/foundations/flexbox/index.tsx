import React, { ReactNode } from 'react';

interface FlexboxProps {
	direction?: 'row' | 'column';
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
	children?: ReactNode;
	className?: string;
	onClick?: () => void;
}

const Flexbox = ({ direction = 'row', justifyContent = 'flex-start', alignItems = 'flex-start', children, onClick, className, ...props }: FlexboxProps) => {
	return (
		<div
			className={className}
			style={{
				display: 'flex',
				flexDirection: direction,
				justifyContent,
				alignItems
			}}
			onClick={onClick}
			{...props}>
			{children}
		</div>
	);
};

export default Flexbox;
