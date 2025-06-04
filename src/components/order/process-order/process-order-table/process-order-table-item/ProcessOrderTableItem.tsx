'use client';

import Modal from '@/components/ui/modal/Modal';
import { useWorkerProcessedOrders } from '@/hooks/order/useWorkerProcessedOrders';
import { useAuth } from '@/hooks/useAuth';
import { IOrder } from '@/types/order.types';
import { convertPostgreDate } from '@/utils/date/ConvertPostgreDate';
import cn from 'classnames';
import { CheckCircle, XCircle } from 'lucide-react';
import React, { useState } from 'react';
import styles from './ProcessOrderTableItem.module.scss';

interface Props {
	className?: string;
	data: IOrder;
}

export const ProcessOrderTableItem: React.FC<Props> = ({ className, data }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isPendingModalOpen, setIsPendingModalOpen] = useState(false);
	const { user } = useAuth();
	const { pendingAsync, completeAsync } = useWorkerProcessedOrders();

	const handleConfirm = () => {
		completeAsync(data.id);
	};

	const handlePendingConfirm = () => {
		pendingAsync(data.id);
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
			<td>{data.comment ? data.comment : '-'}</td>
			{data?.services &&
				data?.services[0].service.workerType == user?.workerType && (
					<>
						<td className='flex flex-col items-center justify-center'>
							<button
								className={styles.cancelButton}
								onClick={() => setIsPendingModalOpen(true)}
							>
								<XCircle />
								<span>Отменить</span>
							</button>
							<Modal
								isOpen={isPendingModalOpen}
								onClose={() => setIsPendingModalOpen(false)}
								title='Подтверждение'
								actionFunction={handlePendingConfirm}
							>
								<span>Вы действительно хотите отменить заказ?</span>
							</Modal>
						</td>
						<td className='flex flex-col items-center justify-center'>
							<button
								className={styles.cancelButton}
								onClick={() => setIsModalOpen(true)}
							>
								<CheckCircle />
								<span>Завершить</span>
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
					</>
				)}
		</tr>
	);
};
