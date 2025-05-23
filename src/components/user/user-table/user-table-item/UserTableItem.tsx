'use client';

import Modal from '@/components/ui/modal/Modal';
import { useUsers } from '@/hooks/user/useUsers';
import { IUser } from '@/types/user.types';
import { getFirstCharacter } from '@/utils/get-first-character';
import cn from 'classnames';
import { CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './UserTableItem.module.scss';

interface Props {
	className?: string;
	data: IUser;
}

export const UserTableItem: React.FC<Props> = ({ className, data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	console.log(data);
	const { confirmAsync, unConfirmAsync } = useUsers();

	const handleConfirm = () => {
		confirmAsync(data.id);
	};

	const unCheckConfirm = () => {
		unConfirmAsync(data.id);
	};

	return (
		<tr className={cn(className, styles.cancelOrderTableItemContainer)}>
			{/* <td>{data.id && data.id}</td> */}
			<td className='flex flex-col justify-center items-center'>
				<span>{data.lastName && data.lastName}</span>
				<span>
					{data &&
						`${getFirstCharacter(data.firstName)}. ${getFirstCharacter(
							data.middleName
						)}.`}
				</span>
				{/* <span className={styles.cancelOrderTableItemTime}>{data.time}</span> */}
			</td>
			<td>{data.phone && data.phone}</td>
			<td>{data.gender && data.gender === 'male' ? 'Мужской' : 'Женский'}</td>
			<td>{data.type && data.type === 'worker' ? 'Работник' : 'Клиент'}</td>
			{data.workerType ? (
				<td>{data.workerType === 'driver' ? 'Водитель' : 'Грузчик'}</td>
			) : (
				<td>Не работает</td>
			)}
			{data.licenseImage ? (
				<td>
					<Link href={data.licenseImage} className={styles.link}>
						Права
					</Link>
				</td>
			) : (
				<td>
					<span>Нет прав</span>
				</td>
			)}

			{data.isConfirmDriver ? (
				<td className='flex flex-col items-center justify-center'>
					<button
						className={styles.cancelButton}
						onClick={() => setIsModalOpen(true)}
					>
						<XCircle />
						<span>Забрать</span>
						{/* <span>Подтвердить</span> */}
					</button>
					<Modal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						title='Подтверждение'
						actionFunction={unCheckConfirm}
					>
						<span>Вы действительно хотите отклонить права?</span>
					</Modal>
				</td>
			) : (
				<td className='flex flex-col items-center justify-center'>
					<button
						className={styles.confirmButton}
						onClick={() => setIsModalOpen(true)}
					>
						<CheckCircle2 />
						<span>Подтвердить</span>
						{/* <span>Подтвердить</span> */}
					</button>
					<Modal
						isOpen={isModalOpen}
						onClose={() => setIsModalOpen(false)}
						title='Подтверждение'
						actionFunction={handleConfirm}
					>
						<span>Вы действительно хотите подтвердить права?</span>
					</Modal>
				</td>
			)}
		</tr>
	);
};
