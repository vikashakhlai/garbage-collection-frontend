import React from 'react';
import styles from './GreenButton.module.scss';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
	className?: string;
	title: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	type?: any;
}

export const GreenButton: React.FC<Props> = ({ title, type, onClick }) => {
	return (
		<button
			type={type ? type : 'button'}
			className={styles.greenButton}
			onClick={onClick}
		>
			{title}
		</button>
	);
};
