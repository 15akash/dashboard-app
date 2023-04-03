import React from 'react';
import { MenuItem } from '../interface';

interface IMenuContext {
	activeMenu: string;
	// changeActiveMenu: (menu: string) => void;
	isMenuCollapsed: boolean;
	toggleMenu: (toggle: boolean) => void;
}

const MenuContext = React.createContext<IMenuContext>({
	activeMenu: '',
	// changeActiveMenu: (menu: string) => {},
	isMenuCollapsed: true,
	toggleMenu: (toggle: boolean) => {}
});

export default MenuContext;
