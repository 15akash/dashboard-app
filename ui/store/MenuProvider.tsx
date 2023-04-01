import { useReducer } from 'react';
import MenuContext from './menu-context';
import { IActionType } from '../interface';
import { useRouter } from 'next/router';

const defaultMenuState = {
	// activeMenu: useRouter().pathname.slice(1, useRouter().pathname.length) ?? 'dashboard',
	isMenuCollapsed: true
};

const menuReducer = (state: any, action: IActionType) => {
	if (action.type === 'TOGGLE_MENU') {
		return { ...state, isMenuCollapsed: action.item };
	}
	if (action.type === 'CHANGE_MENU') {
		return { ...state, activeMenu: action.item };
	}
	return defaultMenuState;
};

const MenuProvider = (props: any) => {
	const router = useRouter();
	const activeMenu = router.pathname.slice(1, router.pathname.length) ?? 'dashboard';
	console.log('active menu', activeMenu);
	const [menuState, dispatchMenuAction] = useReducer(menuReducer, defaultMenuState);
	const menuContext = {
		activeMenu: activeMenu,
		changeActiveMenu: (menu: string) => {
			dispatchMenuAction({ type: 'CHANGE_MENU', item: menu });
		},
		isMenuCollapsed: menuState.isMenuCollapsed,
		toggleMenu: (toggle: boolean) => {
			console.log('toggle', toggle);
			dispatchMenuAction({ type: 'TOGGLE_MENU', item: toggle });
		}
	};
	return <MenuContext.Provider value={menuContext}>{props.children}</MenuContext.Provider>;
};

export default MenuProvider;
