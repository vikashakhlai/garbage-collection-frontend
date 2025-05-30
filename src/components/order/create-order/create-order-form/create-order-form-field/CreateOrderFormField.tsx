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
	const [isDistanceNeeded, setIsDistanceNeeded] = useState(false);
	const [isFlat, setIsFlat] = useState(false);

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
			<Field
				placeholder='Введите массу груза (кг):'
				{...register('weight', {
					required: 'Введите массу груза',
				})}
				type='range'
				min='100'
				max='1500'
				step='100'
				onChange={e => {
					const value = e.target.value;
					setValue('weight', value);
				}}
			/>
			{watch('weight') === '100' && (
				<div className='flex gap-1 font-bold'>До {watch('weight')} кг.</div>
			)}
			{watch('weight') === '1500' && (
				<div className='flex gap-1 font-bold'>Свыше {watch('weight')} кг.</div>
			)}
			{watch('weight') !== '1500' && watch('weight') !== '100' && (
				<div className='flex gap-1 font-bold'>{watch('weight')} кг.</div>
			)}

			<Field
				placeholder='Часы работы:'
				{...register('hour', {
					required: 'Введите часы',
					validate: value => {
						const num = Number(value);
						return num % 2 === 0 || 'Число должно быть кратным 2';
					},
				})}
				type='range'
				min='2'
				max='24'
				step='2'
				onChange={e => {
					const value = e.target.value;
					setValue('hour', value);
				}}
			/>
			<div className='flex gap-1 font-bold'>{watch('hour')} часа/ов</div>

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
				{...register('flat', {
					required: 'Введите расстояние',
				})}
				placeholder='Квартира:'
				error={errors.flat}
			/>
			<Field
				{...register('entrance', {
					required: 'Введите расстояние',
				})}
				placeholder='Подъезд:'
				error={errors.entrance}
			/>
			<LeafletMap onAddressChange={onAddressChange} />

			{isDistanceNeeded && (
				<Field
					{...register('distance', {
						required: 'Введите расстояние',
					})}
					type='number'
					placeholder='Расстояние за городом (км):'
					error={errors.distance}
				/>
			)}
			{isFlat && (
				<Field
					{...register('floor', {
						required: 'Введите количество этажей',
					})}
					placeholder='Этажей без лифта:'
					type='number'
					error={errors.floor}
				/>
			)}

			<div className='flex gap-1'>
				<label className={styles.checkInputText}>
					<input
						{...register('forCity', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						type='checkbox'
						checked={isDistanceNeeded}
						onChange={e => {
							setIsDistanceNeeded(e.target.checked);
							setValue('distance', '');
						}}
					/>
					<span>Работа за городом</span>
				</label>
			</div>
			<div className='flex gap-1'>
				<label className={styles.checkInputText}>
					<input
						{...register('isFlat', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						type='checkbox'
						checked={isFlat}
						onChange={e => {
							setIsFlat(e.target.checked);
							setValue('floor', '');
						}}
					/>
					<span>Не работает лифт</span>
				</label>
			</div>

			<div className='flex gap-1'>
				<label className={styles.checkInputText} htmlFor='isHeavy'>
					<input
						{...register('isHeavy', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						id='isHeavy'
						type='checkbox'
					/>
					<div className='flex items-center justify-center gap-1'>
						<span>Груз тяжелее 20 кг</span>
						<span className={styles.checkInputSecondText}>
							(За единицу груза)
						</span>
					</div>
				</label>
			</div>
			<div className='flex gap-1'>
				<label className={styles.checkInputText} htmlFor='isDisassembly'>
					<input
						{...register('isDisassembly', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						id='isDisassembly'
						type='checkbox'
					/>
					Разборка мебели
				</label>
			</div>

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
