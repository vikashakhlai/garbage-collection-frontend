'use client';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { LogIn, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../Header.module.scss';

interface Props {
	className?: string;
}

export const HeaderList: React.FC<Props> = ({ className }) => {
	const { user } = useAuth();
	const { logout } = useActions();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return null;
	}

	return (
		<div className={className}>
			{user ? (
				<div className={styles.headerUserProfileContainer}>
					<Link href='/profile' className={styles.headerUserPhotoLink}>
						<Image
							src='/images/user.png'
							width={40}
							height={40}
							alt='User profile'
							className={styles.headerUserPhoto}
							priority
						/>
					</Link>
					<button
						onClick={() => logout()}
						className={styles.logoutButton}
						aria-label='Logout'
					>
						<LogOut
							className={styles.headerLogIn}
							color='#4CAF50'
							strokeWidth={1}
						/>
					</button>
				</div>
			) : (
				<Link href='/login' className={styles.loginLink}>
					<LogIn
						className={styles.headerLogIn}
						color='#4CAF50'
						strokeWidth={1}
					/>
				</Link>
			)}
		</div>
	);
};
