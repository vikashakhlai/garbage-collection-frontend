import { IOrder } from '@/types/order.types';
import { convertPostgreDate } from '@/utils/date/ConvertPostgreDate';
import cn from 'classnames';
import { CheckCircle2, Clock11, Hourglass, XCircle } from 'lucide-react';
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
			<td className={styles.orderTableItemAddress}>{data.address}</td>
			<td>{data.totalPrice}</td>
			<td>{data.comment}</td>
			{data.status === 'completed' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Выполнен</span>
					<CheckCircle2 color='#4CAF50' />
				</td>
			)}
			{data.status === 'pending' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Ожидание</span>
					<Hourglass color='#666666' />
				</td>
			)}
			{data.status === 'processed' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Обработан</span>
					<Clock11 color='brown' />
				</td>
			)}
			{data.status === 'rejected' && (
				<td className='flex justify-center items-center gap-1'>
					<span>Отменен</span>
					<XCircle color='red' />
				</td>
			)}
		</tr>
	);
};
