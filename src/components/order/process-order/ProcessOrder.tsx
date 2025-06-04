import { MainHeader } from '@/components/ui/main-header/MainHeader';
import React from 'react';
import { ProcessOrderTable } from './process-order-table/ProcessOrderTable';

interface Props {
	className?: string;
}

export const ProcessOrder: React.FC<Props> = ({ className }) => {
	return (
		<section className={className}>
			<MainHeader text='Список обработанных заказов' />
			<ProcessOrderTable itemsPerPage={5} />
		</section>
	);
};
