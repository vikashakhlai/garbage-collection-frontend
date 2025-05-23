import Link from 'next/link';
import React from 'react';
import styles from './ActiveHeroButton.module.scss';

interface Props {
	className?: string;
}

export const ActiveHeroButton: React.FC<Props> = ({}) => {
	return (
		<Link href={'#calculator'} className={styles.activeHeroButton}>
			Рассчитать стоимость
		</Link>
	);
};
