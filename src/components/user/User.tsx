import React from 'react';
import { MainHeader } from '../ui/main-header/MainHeader';
import { UserTable } from './user-table/UserTable';
import styles from './User.module.scss';

interface Props {
	className?: string;
}

export const User: React.FC<Props> = ({}) => {
	return (
		<section className={styles.userContainer}>
			<MainHeader text='Список пользователей' />
			<UserTable itemsPerPage={5} />
		</section>
	);
};
