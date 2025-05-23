import { MainHeader } from '@/components/ui/main-header/MainHeader';
import React from 'react';
import { UserOrderTable } from './user-order-table/UserOrderTable';

interface Props {
	className?: string;
}

export const UserOrder: React.FC<Props> = ({ className }) => {
	return (
		<section className={className}>
			<MainHeader text='Список заказов' />
			<UserOrderTable itemsPerPage={5} />
		</section>
	);
};
