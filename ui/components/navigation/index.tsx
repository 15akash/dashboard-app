import React, { useMemo, useContext } from 'react';
import styles from './Navigation.module.scss';
import Flexbox from '@/ui/foundations/flexbox';
import { Logo, Dashboard, Analytics, Invoice, Schedule, Calendar, Messages, Notification, Setting, Logout } from '@/ui/assets/menu-icons';
import Illustration from '../../assets/Illustration.svg';
import Image from 'next/image';
import { ProfilePhoto } from '@/ui/assets/ProfilePhoto';
import { MenuItem } from '@/ui/interface';
import MenuContext from '@/ui/store/menu-context';
import Link from 'next/link';
import Typography from '@/ui/foundations/typography';

const Navigation = () => {
	const menuCtx = useContext(MenuContext);

	const menuItems: MenuItem[] = useMemo(
		() => [
			{
				id: 'dashboard',
				iconName: <Dashboard className={styles['navigation--item--icons']} color={menuCtx.activeMenu == 'dashboard' ? '#605BFF' : undefined} />,
				displayName: 'Dashboard'
			},
			{ id: 'analytics', iconName: <Analytics color={menuCtx.activeMenu == 'analytics' ? '#605BFF' : undefined} />, displayName: 'Analytics' },
			{ id: 'invoice', iconName: <Invoice color={menuCtx.activeMenu == 'invoice' ? '#605BFF' : undefined} />, displayName: 'Invoice' },
			{ id: 'schedule', iconName: <Schedule color={menuCtx.activeMenu == 'schedule' ? '#605BFF' : undefined} />, displayName: 'Schedule' },
			{ id: 'calendar', iconName: <Calendar color={menuCtx.activeMenu == 'calendar' ? '#605BFF' : undefined} />, displayName: 'Calendar' },
			{ id: 'messages', iconName: <Messages color={menuCtx.activeMenu == 'messages' ? '#605BFF' : undefined} />, displayName: 'Messages' },
			{ id: 'notification', iconName: <Notification color={menuCtx.activeMenu == 'notification' ? '#605BFF' : undefined} />, displayName: 'Notification' },
			{ id: 'setting', iconName: <Setting color={menuCtx.activeMenu == 'setting' ? '#605BFF' : undefined} />, displayName: 'Settings' }
		],
		[menuCtx.activeMenu]
	);

	return (
		<Flexbox
			direction="column"
			justifyContent="space-between"
			className={menuCtx.isMenuCollapsed ? `${styles['navigation-mobile']} ${styles['navigation']}` : styles['navigation']}>
			<Flexbox direction="column" className={styles['navigation-logo-menu']}>
				<Flexbox direction={menuCtx.isMenuCollapsed ? 'column' : 'row'} gap={15} alignItems="center" justifyContent="center" className={styles['navigation--logo']}>
					<Logo />
					<Typography type="h4">Base</Typography>
				</Flexbox>
				{menuItems.map((item: MenuItem) => {
					return (
						<Link className={styles['navigation--item']} href={item.id === 'dashboard' ? '/' : `/${item.id}`} key={item.id}>
							<Flexbox onClick={() => menuCtx.changeActiveMenu(item.id)} alignItems="center">
								{item.iconName}
								{!menuCtx.isMenuCollapsed && (
									<Typography type="body_1-600" el="p" className={styles['navigation--item-text']} opacity={0.5}>
										{item.displayName}
									</Typography>
								)}
								{item.id === 'messages' && !menuCtx.isMenuCollapsed && (
									<Typography type="body_10-600" className={styles['navigation--item-count']}>
										49
									</Typography>
								)}
								<div className={menuCtx.activeMenu === item.id ? styles['navigation--active-icon'] : ''}></div>
							</Flexbox>
						</Link>
					);
				})}
			</Flexbox>
			<Flexbox justifyContent="center" direction="column" alignItems="center" gap={20} className={styles['navigation--bottom']}>
				{!menuCtx.isMenuCollapsed && <Image src={Illustration} style={{ margin: '0 auto', objectFit: 'contain', height: '150px' }} alt="illustration" />}
				<Flexbox
					direction={menuCtx.isMenuCollapsed ? 'column' : 'row'}
					className={styles['navigation--bottom-profile-section']}
					justifyContent="space-between"
					gap={15}
					alignItems="center">
					<ProfilePhoto />
					{!menuCtx.isMenuCollapsed && (
						<Flexbox direction="column">
							<Typography type="body_12-600">Easin Arafat</Typography>
							<Typography type="body_10-400" opacity={0.5}>
								Free Account
							</Typography>
						</Flexbox>
					)}
					<Flexbox
						onClick={() => {
							menuCtx.toggleMenu(!menuCtx.isMenuCollapsed);
						}}>
						<Logout className={styles['navigation--logout']} color={undefined} />
					</Flexbox>
				</Flexbox>
			</Flexbox>
		</Flexbox>
	);
};

export default Navigation;
