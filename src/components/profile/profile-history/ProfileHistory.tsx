import cn from 'classnames';
import React from 'react';
import { ProfileHistoryTable } from './profile-history-table/ProfileHistoryTable';
import styles from './ProfileHistory.module.scss';

interface Props {
	className?: string;
}

export const ProfileHistory: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(className, styles.profileHistoryContainer)}>
			<h2 className={styles.profileHistoryHeader}>История заказов</h2>
			<ProfileHistoryTable itemsPerPage={5} />
			{/* <ProfilePagination itemsPerPage={5} /> */}
		</div>
	);
};
