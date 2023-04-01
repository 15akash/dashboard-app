import '@/styles/globals.scss';
import Navigation from '@/ui/components/navigation';
import Flexbox from '@/ui/foundations/flexbox';
import MenuProvider from '@/ui/store/MenuProvider';
import type { AppProps } from 'next/app';
import styles from '../styles/Home.module.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MenuProvider>
			<Flexbox className={styles['app']}>
				<Flexbox className={styles['app--nav-con']}>
					<Navigation />
				</Flexbox>
				<Flexbox className={styles['app--page-content']}>
					<Component {...pageProps} />
				</Flexbox>
			</Flexbox>
		</MenuProvider>
	);
}
