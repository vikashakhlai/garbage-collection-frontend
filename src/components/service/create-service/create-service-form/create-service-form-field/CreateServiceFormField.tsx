/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Field from '@/components/ui/form-elements/Field';
import UploadField from '@/components/ui/form-elements/upload-fild/UploadField';
import { GreenButton } from '@/components/ui/green-button/GreenButton';
import dynamic from 'next/dynamic';
import React from 'react';
import { Controller, FormState, UseFormRegister } from 'react-hook-form';
// import { CustomSelect } from '../../../../ui/form-elements/select/CustomSelect';

interface ICreateServiceField {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
	control: any;
}

const CustomSelect = dynamic(
	() =>
		import('../../../../ui/form-elements/select/CustomSelect').then(
			mod => mod.CustomSelect
		),
	{
		ssr: false,
		loading: () => (
			<div className='select-loading-placeholder'>Загрузка...</div>
		),
	}
);

export const CreateServiceFormField: React.FC<ICreateServiceField> = ({
	formState: { errors },
	register,
	control,
}) => {
	const options = [
		{
			value: 'driver',
			label: 'Водитель',
		},
		{
			value: 'loader',
			label: 'Грузчик',
		},
	];
	return (
		<>
			<Field
				{...register('name', {
					required: 'Введите название услуги',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Название услуги:'
				error={errors.name}
			/>
			<Controller
				control={control}
				name='workerType'
				render={({ field, fieldState: { error } }) => (
					<CustomSelect
						field={field}
						options={options || []}
						// isMulti
						placeholder='Выберите тип работ'
						error={error}
					/>
				)}
				rules={{
					required: 'Выберите тип работ',
				}}
			/>
			<Field
				{...register('price', {
					required: 'Введите цену',
				})}
				placeholder='Цена:'
				error={errors.price}
			/>
			<Field
				{...register('description', {
					required: 'Введите описание услуги',
				})}
				placeholder='Описание услуги:'
				error={errors.description}
			/>

			<Controller
				control={control}
				name='image'
				defaultValue=''
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<UploadField
						onChange={onChange}
						error={error}
						folder='images'
						placeholder='Выберите изображение:'
					/>
				)}
			></Controller>
			<GreenButton title='Создать услугу' type='submit' />
			{/* <CreateOrderButton /> */}
		</>
	);
};
