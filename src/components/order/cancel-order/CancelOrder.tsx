import { MainHeader } from '@/components/ui/main-header/MainHeader';
import cn from 'classnames';
import React from 'react';
import styles from './CancelOrder.module.scss';
import { CancelOrderTable } from './cancel-order-table/CancelOrderTable';

interface Props {
	className?: string;
}

export const CancelOrder: React.FC<Props> = ({ className }) => {
	return (
		<section className={cn(className, styles.cancelOrderContainer)}>
			<MainHeader text='Список активных заказов' />
			<CancelOrderTable itemsPerPage={5} />
		</section>
	);
};
