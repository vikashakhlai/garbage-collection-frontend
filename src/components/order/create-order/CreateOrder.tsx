import { MainWhiteContainer } from '@/components/ui/container/main-white-container/MainWhiteContainer';
import { MainHeader } from '@/components/ui/main-header/MainHeader';
import React from 'react';
import { CreateOrderForm } from './create-order-form/CreateOrderForm';

interface Props {
	className?: string;
}

export const CreateOrder: React.FC<Props> = ({}) => {
	return (
		<MainWhiteContainer>
			<MainHeader text='Оформление услуги' />
			<CreateOrderForm />
		</MainWhiteContainer>
	);
};
