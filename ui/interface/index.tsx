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
