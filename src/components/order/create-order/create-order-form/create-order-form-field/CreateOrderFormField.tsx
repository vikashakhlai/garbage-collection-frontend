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
}

export const CreateOrderFormField: React.FC<ICreateOrderField> = ({
	register,
	formState: { errors },
	services,
	control,
	watch,
	setValue,
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

			<Field
				{...register('date', {
					required: 'Введите дату',
				})}
				placeholder='Дата:'
				error={errors.date}
			/>
			<Field
				{...register('time', {
					required: 'Введите время',
				})}
				placeholder='Время заказа:'
				error={errors.time}
			/>
			<Field
				{...register('address', {
					required: 'Введите адрес',
				})}
				value={address}
				onChange={e => setAddress(e.target.value)}
				placeholder='Адрес:'
				error={errors.address}
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

			<LeafletMap onAddressChange={setAddress} />
			<div className={styles.selectContainer}>
				<label className={styles.selectFieldText}>
					<span>Комментарий:</span>
				</label>
				<textarea
					{...register('comment', {
						required: 'Укажите комментарий к заказу',
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
