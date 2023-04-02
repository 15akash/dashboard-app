export interface Icons {
	color: string | undefined;
	className?: any;
}

export interface MenuItem {
	id: string;
	iconName: any;
	displayName: string;
}

export interface IActionType {
	type: string;
	item: string | boolean;
}

export interface IProductSummary {
	id: string;
	image: string;
	numbers: string;
	desc: string;
}
