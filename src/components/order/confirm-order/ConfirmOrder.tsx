import { MainHeader } from '@/components/ui/main-header/MainHeader';
import React from 'react';
import { ConfirmOrderTable } from './confirm-order-table/ConfirmOrderTable';

interface Props {
	className?: string;
}

export const ConfirmOrder: React.FC<Props> = ({ className }) => {
	return (
		<section className={className}>
			<MainHeader text='Список заказов' />
			<ConfirmOrderTable itemsPerPage={5} />
		</section>
	);
};
