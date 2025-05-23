import React from 'react';
import styles from './GreenButton.module.scss';

interface Props {
	className?: string;
	title: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type?: any;
}

export const GreenButton: React.FC<Props> = ({ title, type }) => {
	return (
		<button type={type ? type : 'button'} className={styles.greenButton}>
			{title}
		</button>
	);
};
