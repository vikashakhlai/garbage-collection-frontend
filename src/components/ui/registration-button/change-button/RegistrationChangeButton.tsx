import React from 'react';
import styles from './RegistrationChangeButton.module.scss';

interface Props {
	className?: string;
	type: string;
	setType: React.Dispatch<React.SetStateAction<'client' | 'worker'>>;
}

export const RegistrationChangeButton: React.FC<Props> = ({
	className,
	type,
	setType,
}) => {
	return (
		<div className={className}>
			<button
				className={`${styles.changeButton} ${styles.clientButton} ${
					type === 'client' ? styles.active : ''
				}`}
				type='button'
				onClick={() => setType('client')}
			>
				Клиент
			</button>
			<button
				className={`${styles.changeButton} ${styles.workerButton} ${
					type === 'worker' ? styles.active : ''
				}`}
				type='button'
				onClick={() => setType('worker')}
			>
				Рабочий
			</button>
		</div>
	);
};
