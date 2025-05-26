'use client';

import { useOrders } from '@/hooks/order/useOrders';
import { useAuth } from '@/hooks/useAuth';
import { IOrder } from '@/types/order.types';
import cn from 'classnames';
import { useState } from 'react';
import styles from './ConfirmOrderTable.module.scss';
import { ConfirmOrderTableItem } from './confirm-table-item/ConfirmOrderTableItem';

interface Props {
	className?: string;
	itemsPerPage: number;
}

export const ConfirmOrderTable: React.FC<Props> = ({
	className,
	itemsPerPage,
}) => {
	const { activeOrders } = useOrders();
	const { user } = useAuth();

	const orders: IOrder[] =
		user.workerType &&
		activeOrders.data?.filter(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(el: any) => el.services[0].service.workerType === user.workerType
		);

	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = activeOrders.data
		? Math.ceil(activeOrders.data.length / itemsPerPage)
		: 1;

	const getPages = () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		let pages: any[] = [];
		if (totalPages <= 5) {
			pages = Array.from({ length: totalPages }, (_, i) => i + 1);
		} else {
			if (currentPage <= 3) {
				pages = ['first', 1, 2, 3, 4, 5, 'next'];
			} else if (currentPage >= totalPages - 2) {
				pages = [
					'first',
					totalPages - 4,
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages,
					'next',
				];
			} else {
				pages = [
					'first',
					currentPage - 2,
					currentPage - 1,
					currentPage,
					currentPage + 1,
					currentPage + 2,
					'next',
				];
			}
		}
		return pages;
	};

	return (
		<>
			<table className={cn(className, styles.cancelOrderTable)}>
				<tbody className='flex flex-col gap-1'>
					{orders ? (
						orders
							.slice(
								(currentPage - 1) * itemsPerPage,
								currentPage * itemsPerPage
							)
							.map((item, index) => (
								<ConfirmOrderTableItem key={index} data={item} />
							))
					) : (
						<></>
					)}
				</tbody>
			</table>
			<div className={styles.profilePaginationList}>
				{getPages().map((page, index) => (
					<button
						key={index}
						onClick={() => {
							if (page === 'first') setCurrentPage(1);
							else if (page === 'next')
								setCurrentPage(Math.min(currentPage + 1, totalPages));
							else setCurrentPage(page);
						}}
						className={
							currentPage === page
								? `${styles.active} ${styles.profilePaginationListNumber}`
								: `${styles.profilePaginationListNumber} ${
										page === 'first' && styles.NextPrevButtons
								  } ${page === 'next' && styles.NextPrevButtons}`
						}
					>
						{page === 'first'
							? 'В начало'
							: page === 'next'
							? 'Следующая'
							: page}
					</button>
				))}
			</div>
			{/* <div className={styles.line}></div> */}
		</>
	);
};
