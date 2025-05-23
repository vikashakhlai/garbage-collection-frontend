'use client';

import { IOrder } from '@/types/order.types';
import { convertPostgreDate } from '@/utils/date/ConvertPostgreDate';
import { getFirstCharacter } from '@/utils/get-first-character';
import cn from 'classnames';
import React from 'react';
import styles from './UserOrderTableItem.module.scss';

interface Props {
	className?: string;
	data: IOrder;
}

export const UserOrderTableItem: React.FC<Props> = ({ className, data }) => {
	return (
		<tr className={cn(className, styles.cancelOrderTableItemContainer)}>
			<td className='flex flex-col justify-center items-center'>
				<span>{convertPostgreDate(data.date)}</span>
				<span className={styles.cancelOrderTableItemTime}>{data.time}</span>
			</td>
			<td>{data.services && data?.services[0].service.name}</td>
			<td>{data.address}</td>
			<td>{data.totalPrice}</td>
			<td>{data.comment}</td>
			{data.Worker ? (
				<>
					<td className='flex flex-col items-center justify-center'>
						<span>{data.Worker.lastName}</span>
						<span>
							{getFirstCharacter(data.Worker.firstName)}.{' '}
							{getFirstCharacter(data.Worker.middleName)}.
						</span>
					</td>
					<td>{data.Worker.phone}</td>
				</>
			) : null}
			{data.isCompleted === true && (
				<td className='flex justify-center items-center gap-1'>
					<span>Обработан</span>
				</td>
			)}
			{data.isCompleted === false && (
				<td className='flex justify-center items-center gap-1'>
					<span>Отменен</span>
				</td>
			)}
			{data.isCompleted === null && (
				<td className='flex justify-center items-center gap-1'>
					<span>Ожидание</span>
				</td>
			)}
		</tr>
	);
};
