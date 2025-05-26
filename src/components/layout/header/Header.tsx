'use client';

import { HeaderButton } from '@/components/ui/header-button/HeaderButton';

import { Car, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import { HeaderList } from './header-list/HeaderList';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({}) => {
	return (
		<header className={styles.headerContainer}>
			<nav className={styles.headerNavigation}>
				<Link href={'/'}>
					<Car className={styles.headerIcon} color='#4CAF50' strokeWidth={1} />
				</Link>
				<ul className={styles.headerNavigationList}>
					<li>
						<Link className={styles.headerNavigationListLink} href='/#service'>
							<span>Услуги</span>
						</Link>
					</li>
					<li>
						<Link
							className={styles.headerNavigationListLink}
							href='/#calculator'
						>
							<span>Цены</span>
						</Link>
					</li>
					<li>
						<Link className={styles.headerNavigationListLink} href='/#review'>
							<span>Отзывы</span>
						</Link>
					</li>
				</ul>
				<ul>
					<li className={styles.headerNavigationListPhone}>
						<span className={styles.headerNumber}>
							<Link href='tel:+375291234567'>+375291234567</Link>
						</span>
						<PhoneCall color='#4CAF50' />
					</li>
				</ul>
				<HeaderButton />
				<HeaderList />
			</nav>
		</header>
	);
};
