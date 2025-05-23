import { MainWhiteContainer } from '@/components/ui/container/main-white-container/MainWhiteContainer';
import { MainHeader } from '@/components/ui/main-header/MainHeader';
import React from 'react';
import { CreateServiceForm } from './create-service-form/CreateServiceForm';

interface Props {
	className?: string;
}

export const CreateService: React.FC<Props> = ({}) => {
	return (
		// <section className={styles.createServiceContainer}>
		<MainWhiteContainer>
			<MainHeader text='Создание сервиса' />
			<CreateServiceForm />
		</MainWhiteContainer>
	);
};
