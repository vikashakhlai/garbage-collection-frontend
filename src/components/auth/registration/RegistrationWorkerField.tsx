/* eslint-disable @typescript-eslint/no-explicit-any */
import Field from '@/components/ui/form-elements/Field';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { Controller, FormState, UseFormRegister } from 'react-hook-form';

interface IRegistrationField {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
	control: any;
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

const RegistrationWorkerField: FC<IRegistrationField> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
	control,
}) => {
	const options = [
		{ value: 'male', label: 'Мужской' },
		{ value: 'female', label: 'Женский' },
	];

	const workOptions = [
		{ value: 'driver', label: 'Водитель' },
		{ value: 'loader', label: 'Грузчик' },
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
				error={errors.middleName}
			/>
			<Field
				type='tel'
				{...register('phone', {
					required: 'Введите номер телефона',

					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Номер телефона:'
				error={errors.phone}
			/>
			<Field
				{...register('age', {
					required: 'Введите возраст',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
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
			<Controller
				control={control}
				name='workerType'
				render={({ field, fieldState: { error } }) => (
					<CustomSelect
						field={field}
						options={workOptions || []}
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
				{...register(
					'registrationPassword',
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
				error={errors.registrationPassword}
			/>
			<Field
				{...register('lastWorkPlace', {
					required: 'Введите место работы',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Предыдущее место работы:'
				error={errors.lastWorkPlace}
			/>

			<Field
				{...register('workTime', {
					required: 'Введите количество дней',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Сколько готовы работать дней в неделю:'
				error={errors.lastWorkPlace}
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

export default RegistrationWorkerField;
