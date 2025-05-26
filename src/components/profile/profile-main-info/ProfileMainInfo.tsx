import { ConfirmMobileButton } from '@/components/ui/profile-button/confirm-mobile-button/ConfirmMobileButton';
import { MainProfileButton } from '@/components/ui/profile-button/main-profile-button/MainProfileButton';
import { useUserProfile } from '@/hooks/user/useUserProfile';
import cn from 'classnames';
import { Phone, User2, Wallet } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import styles from './ProfileMainInfo.module.scss';

interface Props {
	className?: string;
}

export const ProfileMainInfo: React.FC<Props> = ({ className }) => {
	const { data } = useUserProfile();

	return (
		<div className={cn(className, styles.profileMainContainer)}>
			<div className={styles.profileMainImageContainer}>
				<Image src={'/images/user.png'} width={1000} height={1000} alt='user' />
			</div>
			<h2 className={styles.profileMainHeader}>
				{data?.lastName.length ? data?.lastName : ''}{' '}
				{data?.firstName.length ? data.firstName : ''}{' '}
				{data?.middleName.length ? data.middleName : ''}
			</h2>
			<span className={styles.profileMainUserType}>
				{/* {data?.type.length
					? data.role !== 'admin'
						? data.type === 'client'
							? 'Клиент'
							: data?.workerType === 'driver'
							? 'Водитель'
							: 'Грузчик'
						: 'Неизвестный'
					: 'Администратор'} */}
				{data?.role.length && data.role === 'admin' && 'Администратор'}
				{data?.type.length &&
					data.role === 'user' &&
					data.type === 'client' &&
					'Клиент'}
				{data?.type.length &&
					data.role === 'user' &&
					data.type === 'worker' &&
					data.workerType === 'driver' &&
					'Водитель'}
				{data?.type.length &&
					data.role === 'user' &&
					data.type === 'worker' &&
					data.workerType === 'loader' &&
					'Грузчик'}
			</span>
			<div className={styles.profileMainLine}></div>
			<ul className={styles.profileMainList}>
				<li className={styles.profileMainListItem}>
					<Phone color='#4CAF50' />
					<span className={styles.profileMainListItemHeader}>Телефон:</span>
					<span className={styles.profileMainListItemText}>
						{data?.phone.length ? data.phone : '+375(29)123-12-22'}
					</span>
				</li>
				<li className={styles.profileMainListItem}>
					<User2 color='#4CAF50' />
					<span className={styles.profileMainListItemHeader}>Пол:</span>
					<span className={styles.profileMainListItemText}>
						{data?.gender.length
							? data.gender === 'male'
								? 'Мужской'
								: 'Женский'
							: 'Неизвестно'}
					</span>
				</li>
				<li className={styles.profileMainListItem}>
					<Wallet color='#4CAF50' />
					<span className={styles.profileMainListItemHeader}>
						Водительское удостоверение:
					</span>
					<ConfirmMobileButton
						isConfirm={data?.isConfirmDriver ? data.isConfirmDriver : false}
					/>
				</li>
			</ul>
			{/* <Link href={'/logout'}> */}
			<MainProfileButton />
			{/* </Link> */}
		</div>
	);
};
