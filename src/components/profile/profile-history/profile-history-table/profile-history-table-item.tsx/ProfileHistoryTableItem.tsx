import { IOrder } from '@/types/order.types';
import { convertPostgreDate } from '@/utils/date/ConvertPostgreDate';
import cn from 'classnames';
import { CheckCircle2, Hourglass, XCircle } from 'lucide-react';
import React from 'react';
import styles from './ProfileHistoryTableItem.module.scss';

interface Props {
	className?: string;
	data: IOrder;
}

export const ProfileHistoryTableItem: React.FC<Props> = ({
	className,
	data,
}) => {
	return (
		<tr className={cn(className, styles.profileHistoryTableItemContainer)}>
			<td className='flex flex-col justify-center items-center'>
				{data && <span>{convertPostgreDate(data.date)}</span>}
				<span className={styles.profileHistoryTableItemTime}>{data.time}</span>
			</td>
			<td>{data.services && data?.services[0].service.name}</td>
			<td>{data.address}</td>
			<td>{data.totalPrice}</td>
			<td>{data.comment}</td>
			{data.isCompleted === true && (
				<td className='flex justify-center items-center gap-1'>
					<span>Обработан</span>
					<CheckCircle2 color='#4CAF50' />
				</td>
			)}
			{data.isCompleted === false && (
				<td className='flex justify-center items-center gap-1'>
					<span>Отменен</span>
					<XCircle color='red' />
				</td>
			)}
			{data.isCompleted === null && (
				<td className='flex justify-center items-center gap-1'>
					<span>Ожидание</span>
					<Hourglass color='#666666' />
				</td>
			)}
		</tr>
	);
};
