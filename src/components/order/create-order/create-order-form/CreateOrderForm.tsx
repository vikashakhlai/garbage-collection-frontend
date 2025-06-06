'use client';

import { useServices } from '@/hooks/service/useServices';
import { useUserOrders } from '@/hooks/user/useUserOrders';
import cn from 'classnames';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CreateOrderFormField } from './create-order-form-field/CreateOrderFormField';
import { ICreateOrderInput } from './create-order.interface';
import styles from './CreateOrderForm.module.scss';

interface Props {
	className?: string;
}

export const CreateOrderForm: React.FC<Props> = ({ className }) => {
	const { createAsync } = useUserOrders();
	const { data: services } = useServices();

	const {
		register: registerInput,
		handleSubmit,
		formState,
		control,
		watch,
		setValue,
	} = useForm<ICreateOrderInput>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<ICreateOrderInput> = data => {
		// data.floor = Number(data.floor);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const res: any = {
			...data,
			weight: Number(data.weight),
			dimensions: Number(data.dimensions),
			hour: Number(data.hour),
			floor: data.floor ? Number(data.floor) : null,
			distance: data.distance ? Number(data.distance) : null,
			date: new Date(data.date),
			time: `${data.time.getHours()}:${data.time.getMinutes()}`,
			servicesIds: [Number(data.service)],
			totalPrice: 123,
		};

		delete res.service;

		createAsync(res);
	};

	const handleAddressChange = (newAddress: string) => {
		setValue('address', newAddress, { shouldValidate: true });
	};

	return (
		<form
			className={cn(className, styles.createOrderFormContainer)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<CreateOrderFormField
				onAddressChange={handleAddressChange}
				services={services ? services : []}
				formState={formState}
				register={registerInput}
				control={control}
				watch={watch}
				setValue={setValue}
			/>
		</form>
	);
};
