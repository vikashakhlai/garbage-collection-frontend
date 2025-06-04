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
			<td className='flex flex-col justify-center items-start'>
				<span>{convertPostgreDate(data.date)}</span>
				<span className={styles.cancelOrderTableItemTime}>{data.time}</span>
			</td>
			<td>{data.services && data?.services[0].service.name}</td>
			<td className={styles.orderTableItemAddress}>{data.address}</td>
			<td>{data.totalPrice ? `${data.totalPrice} руб.` : '0 руб.'}</td>
			<td>{data.comment ? data.comment : '-'}</td>
			{data.Worker ? (
				<>
					<td className='flex flex-col items-start justify-center'>
						<span>{data.Worker.lastName}</span>
						<span>
							{getFirstCharacter(data.Worker.firstName)}.{' '}
							{getFirstCharacter(data.Worker.middleName)}.
						</span>
					</td>
					<td>{data.Worker.phone}</td>
				</>
			) : (
				<>
					<td>-</td>
					<td>-</td>
				</>
			)}
			{data.status === 'completed' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Выполнен</span>
				</td>
			)}
			{data.status === 'pending' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Ожидание</span>
				</td>
			)}
			{data.status === 'processed' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Обработан</span>
				</td>
			)}
			{data.status === 'rejected' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Отменен</span>
				</td>
			)}
		</tr>
	);
};
