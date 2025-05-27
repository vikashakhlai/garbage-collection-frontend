/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { CreateOrderButton } from '@/components/ui/create-order-button/CreateOrderButton';
import Field from '@/components/ui/form-elements/Field';

import { CustomSelect } from '@/components/ui/form-elements/select/CustomSelect';
import LeafletMap from '@/components/ui/map/Map';
import { formatPhone } from '@/shared/regex';
import { IService } from '@/types/service.type';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, FormState, UseFormRegister } from 'react-hook-form';
import styles from './CreateOrderFormField.module.scss';

interface ICreateOrderField {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired?: boolean;
	services: IService[];
	control: any;
	watch: any;
	setValue: any;
	onAddressChange: any;
}

export const CreateOrderFormField: React.FC<ICreateOrderField> = ({
	register,
	formState: { errors },
	services,
	control,
	watch,
	setValue,
	onAddressChange,
}) => {
	// const { data } = useServices();
	const [address, setAddress] = useState<string>('');
	const [coordinates, setCoordinates] = useState<[number, number]>([
		55.751244, 37.618423,
	]);

	const options = services?.map(el => ({
		value: el.id,
		label: el.name,
	}));

	return (
		<>
			<Controller
				control={control}
				name='service'
				render={({ field, fieldState: { error } }) => (
					<CustomSelect
						field={field}
						options={options || []}
						// isMulti
						placeholder='Выберите услугу'
						error={error}
					/>
				)}
				rules={{
					required: 'Выберите услугу',
				}}
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

			{/* <Field
				{...register('date', {
					required: 'Введите дату',
				})}
				placeholder='Дата:'
				type='date'
				error={errors.date}
			/> */}

			<Controller
				control={control}
				name='date'
				rules={{ required: 'Дата обязательна' }}
				render={({ field, fieldState: { error } }) => (
					<div className='text-left'>
						<label className={styles.fieldText}>Введите дату:</label>
						<DatePicker
							selected={field.value}
							onChange={date => field.onChange(date)}
							dayClassName={date =>
								date.getDate() === field.value?.getDate()
									? '!bg-green-500 !text-white rounded-full'
									: 'hover:bg-green-100'
							}
							calendarClassName='border-2 border-green-200'
							showPopperArrow={false}
							className={styles.fieldInput}
							dateFormat='dd.MM.yyyy'
							showYearDropdown
							dropdownMode='select'
							// className={`border rounded p-2 w-full ${
							// 	error ? 'border-red-500' : 'border-gray-300'
							// }`}
						/>
						{error && (
							<p className='text-red-500 text-sm mt-1'>{error.message}</p>
						)}
					</div>
				)}
			/>

			<Controller
				name='time'
				control={control}
				rules={{ required: 'Пожалуйста, укажите время' }}
				render={({ field, fieldState: { error } }) => (
					<div className='datepicker-wrapper text-left'>
						<label className={styles.fieldText}>Введите время:</label>
						<DatePicker
							{...field}
							selected={field.value}
							onChange={date => field.onChange(date)}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={15}
							dateFormat='HH:mm'
							timeFormat='HH:mm'
							className={`custom-time-input ${error ? 'error' : ''}`}
							placeholderText='Выберите время'
						/>
						{error && <span className='error-message'>{error.message}</span>}
					</div>
				)}
			/>

			{/* <Field
				{...register('time', {
					required: 'Введите время',
				})}
				placeholder='Время заказа:'
				type='time'
				error={errors.time}
			/> */}

			{/* <Field
				{...register('address', {
					required: 'Введите адрес',
				})}
				value={address}
				onChange={e => setAddress(e.target.value)}
				placeholder='Адрес:'
				error={errors.address}
			/> */}
			<Field
				{...register('address', {
					required: 'Введите адрес',
				})}
				placeholder='Адрес:'
				error={errors.address}
				onChange={e => {
					setValue('address', e.target.value, { shouldValidate: true });
				}}
			/>

			<Field
				{...register('distance', {
					required: 'Введите расстояние',
				})}
				placeholder='Расстояние за городом (км):'
				error={errors.distance}
			/>
			<Field
				{...register('floor', {
					required: 'Введите количество этажей',
				})}
				placeholder='Этажей без лифта:'
				error={errors.floor}
			/>

			<LeafletMap onAddressChange={onAddressChange} />
			<div className={styles.selectContainer}>
				<label className={styles.selectFieldText}>
					<span>Комментарий:</span>
				</label>
				<textarea
					{...register('comment', {
						// required: 'Укажите комментарий к заказу',
					})}
					className={styles.commentField}
				/>
			</div>
			<div className={styles.priceContainer}>
				<h4 className={styles.priceHeader}>Итоговая цена:</h4>
				<span className={styles.priceText}>123 BYN</span>
			</div>
			<CreateOrderButton />
		</>
	);
};
