import Link from 'next/link';
import React from 'react';
import styles from './ActiveRegistrationButtons.module.scss';

interface Props {
	className?: string;
	isLoading: boolean;
}

export const ActiveRegistrationButtons: React.FC<Props> = ({ isLoading }) => {
	return (
		<div className={styles.activeLoginButtonsContainer}>
			<button
				className={`${styles.loginButton} ${styles.activeLoginButton}`}
				type='submit'
				disabled={isLoading}
			>
				Регистрация
			</button>
			<Link
				className={`${styles.loginButton} ${styles.activeLoginRegistrationButton}`}
				href={'/login'}
			>
				Авторизация
			</Link>
		</div>
	);
};
