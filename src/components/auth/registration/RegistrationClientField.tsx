/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Field from '@/components/ui/form-elements/Field';
import { formatPhone } from '@/shared/regex';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Controller, FormState, UseFormRegister } from 'react-hook-form';

interface IRegistrationField {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
	control: any;
	setValue: any;
}

const CustomSelect = dynamic(
	() =>
		import('../../../components/ui/form-elements/select/CustomSelect').then(
			mod => mod.CustomSelect
		),
	{
		ssr: false,
		loading: () => (
			<div className='select-loading-placeholder'>Загрузка...</div>
		),
	}
);

const RegistrationClientField: FC<IRegistrationField> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
	control,
	setValue,
}) => {
	const options = [
		{ value: 'male', label: 'Мужской' },
		{ value: 'female', label: 'Женский' },
	];

	return (
		<>
			<Field
				{...register('lastName', {
					required: 'Введите фамилию',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Фамилия:'
				error={errors.lastName}
			/>
			<Field
				{...register('firstName', {
					required: 'Введите имя',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Имя:'
				error={errors.firstName}
			/>
			<Field
				{...register('middleName', {
					required: 'Введите отчество',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Отчество:'
				error={errors.patronymic}
			/>
			<Field
				{...register('phone', {
					required: 'Введите номер телефона',
				})}
				type='tel'
				placeholder='Номер телефона:'
				onChange={e => {
					setValue('phone', formatPhone(e.target.value));
				}}
				error={errors.phone}
			/>
			<Field
				{...register('age', {
					required: 'Введите возраст',
					valueAsNumber: true,
					validate: value => {
						if (value < 18) return 'Минимальный возраст: 18';
						if (value > 100) return 'Максимальный возраст: 100';
						return true;
					},
				})}
				type='number'
				placeholder='Возраст:'
				error={errors.age}
			/>
			<Controller
				control={control}
				name='gender'
				render={({ field, fieldState: { error } }) => (
					<CustomSelect
						field={field}
						options={options || []}
						// isMulti
						placeholder='Выберите пол'
						error={error}
					/>
				)}
				rules={{
					required: 'Выберите пол',
				}}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Введите пароль',
								minLength: {
									value: 6,
									message: 'Минимальное количество 6 символов!',
								},
						  }
						: {}
				)}
				placeholder='Пароль:'
				type='password'
				error={errors.password}
			/>
			<Field
				{...register('checkProcessing', {
					required: 'Данный пункт обязателен!',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Я согласен(на) на обработку Персональных данных.'
				type='checkbox'
				error={errors.checkProcessing}
			/>
			<Field
				{...register('checkConditions', {
					required: 'Данный пункт обязателен!',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Я принимаю условия договора оферты.'
				type='checkbox'
				error={errors.checkConditions}
			/>
		</>
	);
};

export default RegistrationClientField;
