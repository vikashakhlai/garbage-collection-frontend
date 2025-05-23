import Link from 'next/link';
import React from 'react';
import styles from './ProfileMenuItem.module.scss';
import { ProfileMenuItemIcon } from './profile-menu-item-icon/ProfileMenuItemIcon';

interface Props {
	className?: string;
	link: string;
	text: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
}

export const ProfileMenuItem: React.FC<Props> = ({ link, text, icon }) => {
	return (
		<li className='flex justify-center my-20'>
			<Link href={link || '/'} className={styles.profileMenuListItem}>
				<ProfileMenuItemIcon Icon={icon} />
				<span className={styles.profileMenuListItemHeader}>{text}</span>
			</Link>
		</li>
	);
};
