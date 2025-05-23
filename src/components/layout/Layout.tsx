/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import styles from './Layout.module.scss';

import type { FC, PropsWithChildren } from 'react';

export type ReactFC<Props extends Record<PropertyKey, unknown> = {}> = FC<
	PropsWithChildren<Props>
>;

const Layout: ReactFC = ({ children }) => {
	return (
		<div className={styles.layoutContainer}>
			<div className={styles.content}>
				<Header />
				{children}
			</div>
			<Footer className={styles.center} />
		</div>
	);
};

export default Layout;
