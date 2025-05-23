import React from 'react';
import { MainHeader } from '../ui/main-header/MainHeader';
import { OrderTable } from './order-table/OrderTable';

interface Props {
	className?: string;
}

export const Order: React.FC<Props> = ({ className }) => {
	return (
		<section className={className}>
			<MainHeader text='Список заказов' />
			<OrderTable itemsPerPage={5} />
		</section>
	);
};
