'use client';

import React from 'react';

import Link from 'next/link';
import styles from './HeroButton.module.scss';

interface Props {
	className?: string;
}

export const HeroButton: React.FC<Props> = ({}) => {
	return (
		<Link href={'#faq'} className={styles.heroButton}>
			Подробнее
		</Link>
	);
	// return <button className={(className, styles.heroButton)}>Подробнее</button>;
};
