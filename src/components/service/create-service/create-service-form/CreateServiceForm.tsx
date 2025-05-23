'use client';

import { useServices } from '@/hooks/service/useServices';
import cn from 'classnames';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreateServiceFormField } from './create-service-form-field/CreateServiceFormField';
import { ICreateServiceInput } from './create-service.interface';
import styles from './CreateServiceForm.module.scss';

interface Props {
	className?: string;
}

export const CreateServiceForm: React.FC<Props> = ({ className }) => {
	// const { isLoading } = useAuth();
	// const { createAsync } = useUserOrders();
	const { createAsync } = useServices();

	const {
		register: registerInput,
		handleSubmit,
		formState,
		control,
	} = useForm<ICreateServiceInput>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<ICreateServiceInput> = data => {
		const res = {
			...data,
			price: Number(data.price),
		};
		// data.floor = Number(data.floor);

		createAsync(res);
		// reset()
	};

	return (
		<form
			className={cn(className, styles.createOrderFormContainer)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<CreateServiceFormField
				control={control}
				formState={formState}
				register={registerInput}
			/>
		</form>
	);
};
