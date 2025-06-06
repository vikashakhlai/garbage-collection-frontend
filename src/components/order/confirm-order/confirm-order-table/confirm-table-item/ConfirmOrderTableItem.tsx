'use client';

import Modal from '@/components/ui/modal/Modal';
import { useOrders } from '@/hooks/order/useOrders';
import { useAuth } from '@/hooks/useAuth';
import { IOrder } from '@/types/order.types';
import { convertPostgreDate } from '@/utils/date/ConvertPostgreDate';
import cn from 'classnames';
import { CheckCircle } from 'lucide-react';
import React, { useState } from 'react';
import styles from './ConfirmOrderTableItem.module.scss';

interface Props {
	className?: string;
	data: IOrder;
}

export const ConfirmOrderTableItem: React.FC<Props> = ({ className, data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { user } = useAuth();
	const { confirmAsync } = useOrders();

	const handleConfirm = () => {
		confirmAsync(data.id);
		// alert('Действие выполнено!');
		// toastr.success('Заказ', 'Заказ успешно отменен');
	};

	return (
		<tr className={cn(className, styles.cancelOrderTableItemContainer)}>
			<td className='flex flex-col justify-center items-start'>
				<span>{convertPostgreDate(data.date)}</span>
				<span className={styles.cancelOrderTableItemTime}>{data.time}</span>
			</td>
			<td>{data.services && data?.services[0].service.name}</td>
			<td className={styles.orderTableItemAddress}>{data.address}</td>
			<td>{data.totalPrice ? `${data.totalPrice} руб.` : '0 руб.'}</td>
			<td>{data.distance ? `${data.distance} км.` : '0 км.'}</td>
			<td>{data.dimensions ? `${data.dimensions} м.` : '0 м.'}</td>
			<td>{data.weight ? `${data.weight} кг.` : '0 кг.'}</td>
			<td>{data.comment ? data.comment : '-'}</td>
			{data?.services &&
				data?.services[0].service.workerType == user?.workerType && (
					<td className='flex flex-col items-center justify-center'>
						<button
							className={styles.cancelButton}
							onClick={() => setIsModalOpen(true)}
						>
							<CheckCircle />
							<span>Подтвердить</span>
						</button>

						<Modal
							isOpen={isModalOpen}
							onClose={() => setIsModalOpen(false)}
							title='Подтверждение'
							actionFunction={handleConfirm}
						>
							<span>Вы действительно хотите подтвердить заказ?</span>
						</Modal>
					</td>
				)}
		</tr>
	);
};
