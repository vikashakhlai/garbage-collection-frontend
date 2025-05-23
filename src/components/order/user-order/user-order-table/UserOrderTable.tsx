'use client';

import { useUserOrders } from '@/hooks/user/useUserOrders';
import cn from 'classnames';
import { useState } from 'react';
import styles from './UserOrderTable.module.scss';
import { UserOrderTableItem } from './user-order-table-item/UserOrderTableItem';

interface Props {
	className?: string;
	itemsPerPage: number;
}

export const UserOrderTable: React.FC<Props> = ({
	className,
	itemsPerPage,
}) => {
	const { data } = useUserOrders();
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 1;

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
					{data ? (
						data
							.slice(
								(currentPage - 1) * itemsPerPage,
								currentPage * itemsPerPage
							)
							.map((item, index) => (
								<UserOrderTableItem key={index} data={item} />
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
