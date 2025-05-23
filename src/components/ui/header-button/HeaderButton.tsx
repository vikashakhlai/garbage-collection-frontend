'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './HeaderButton.module.scss';

interface Props {
	className?: string;
}

export const HeaderButton: React.FC<Props> = ({}) => {
	const { push } = useRouter();
	return (
		<button className={styles.button} onClick={() => push('/create-order')}>
			Сделать заказ
		</button>
	);
};
