'use client';

import { useUserOrders } from '@/hooks/user/useUserOrders';
import cn from 'classnames';
import React from 'react';
import { ProfileHistory } from './profile-history/ProfileHistory';
import { ProfileMainInfo } from './profile-main-info/ProfileMainInfo';
import { ProfileMenu } from './profile-menu/ProfileMenu';
import styles from './Profile.module.scss';

interface Props {
	className?: string;
}

export const Profile: React.FC<Props> = ({ className }) => {
	// const { data } = useUsers();
	const { data } = useUserOrders();
	console.log(data);

	return (
		<section className={cn(className, styles.profileContainer)}>
			<ProfileMainInfo />
			<div className={styles.profileInfoContainer}>
				<ProfileMenu />
				<ProfileHistory />
			</div>
		</section>
	);
};
