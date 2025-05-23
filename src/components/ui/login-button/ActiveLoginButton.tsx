import Link from 'next/link';
import React from 'react';
import styles from './ActiveLoginButton.module.scss';

interface Props {
	className?: string;
	isLoading: boolean;
}

export const ActiveLoginButtons: React.FC<Props> = ({ isLoading }) => {
	return (
		<div className={styles.activeLoginButtonsContainer}>
			<button
				className={`${styles.loginButton} ${styles.activeLoginButton}`}
				type='submit'
				disabled={isLoading}
			>
				Вход
			</button>
			<Link
				className={`${styles.loginButton} ${styles.activeLoginRegistrationButton}`}
				href={'/registration'}
				// type='submit'
				// disabled={isLoading}
			>
				Регистрация
			</Link>
		</div>
	);
};
