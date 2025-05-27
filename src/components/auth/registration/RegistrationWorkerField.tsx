/* eslint-disable @typescript-eslint/no-explicit-any */
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
	watch: any;
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
	setValue,
	watch,
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
					valueAsNumber: true,
					validate: value => {
						if (value < 1) return 'Минимально 1 день';
						if (value > 7) return 'Максимально 7 дней';
						return true;
					},
				})}
				type='number'
				placeholder='Сколько готовы работать дней в неделю:'
				error={errors.workTime}
			/>
			{watch('workerType') === 'driver' && (
				<>
					<Field
						placeholder='Максимальные габариты:'
						{...register('dimensions', {
							required: 'Введите максимальные габариты',
						})}
						type='range'
						min='0.4'
						max='8.2'
						step='0.3'
						onChange={e => {
							const value = e.target.value;
							setValue('dimensions', value);
						}}
					/>
					<div className='flex gap-1 font-bold'>{watch('dimensions')} м.</div>
				</>
			)}

			<Field
				{...register('checkProcessing', {
					required: 'Данный пункт обязателен!',
				})}
				placeholder='Я согласен(на) на обработку Персональных данных.'
				type='checkbox'
				error={errors.checkProcessing}
			/>
			<Field
				{...register('checkConditions', {
					required: 'Данный пункт обязателен!',
				})}
				placeholder='Я принимаю условия договора оферты.'
				type='checkbox'
				error={errors.checkConditions}
			/>
		</>
	);
};

export default RegistrationWorkerField;
