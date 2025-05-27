import { useUsers } from '@/hooks/user/useUsers';
import { IUser } from '@/types/user.types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MainWhiteContainer } from '../ui/container/main-white-container/MainWhiteContainer';
import { GreenButton } from '../ui/green-button/GreenButton';
import { MainHeader } from '../ui/main-header/MainHeader';
import styles from './License.module.scss';

interface Props {
	className?: string;

	data: IUser | null;
}

export const License: React.FC<Props> = ({ className, data }) => {
	const { confirmAsync } = useUsers();
	const { push } = useRouter();

	const imagePath =
		data && data.licenseImage
			? `https://garbage-collection-backend.onrender.com${data.licenseImage}`
			: '';
	return (
		<MainWhiteContainer className={className}>
			<MainHeader text='Водительские права' />
			{data ? (
				<>
					<Image
						className={styles.licenseImage}
						src={data.licenseImage ? imagePath : ''}
						width={1000}
						height={1000}
						alt='license'
					/>
					<GreenButton
						title='Подтвердить права'
						onClick={() => {
							confirmAsync(data.id);
							push('/profile');
						}}
					/>
				</>
			) : (
				<span>Нет данных по данному пользователю</span>
			)}
		</MainWhiteContainer>
	);
};
