'use client';

import Modal from '@/components/ui/modal/Modal';
import { useOrders } from '@/hooks/order/useOrders';
import { IOrder } from '@/types/order.types';
import { convertPostgreDate } from '@/utils/date/ConvertPostgreDate';
import cn from 'classnames';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import styles from './CancelOrderTableItem.module.scss';

interface Props {
	className?: string;
	data: IOrder;
}

export const CancelOrderTableItem: React.FC<Props> = ({ className, data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { confirmAsync } = useOrders();

	const handleConfirm = () => {
		// alert('Действие выполнено!');
		// toastr.success('Заказ', 'Заказ успешно отменен');
		confirmAsync(data.id);
	};

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
			<td className='flex flex-col items-center justify-center'>
				<button
					className={styles.cancelButton}
					onClick={() => setIsModalOpen(true)}
				>
					<Trash2 />
					<span>Отменить</span>
				</button>
				<Modal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
					title='Подтверждение'
					actionFunction={handleConfirm}
				>
					<span>Вы действительно хотите отменить заказ?</span>
				</Modal>
			</td>
		</tr>
	);
};
