/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { CustomSelect } from '@/components/ui/form-elements/select/CustomSelect';
import { useServices } from '@/hooks/service/useServices';
import { FC, useEffect, useState } from 'react';
import { Controller, FormState, UseFormRegister } from 'react-hook-form';
import Field from '../ui/form-elements/Field';
import styles from './Calculator.module.scss';

interface ICalculatorField {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	setValue: any;
	watch: any;
	control: any;
}

const CalculatorField: FC<ICalculatorField> = ({
	register,
	formState: { errors },
	watch,
	setValue,
	control,
}) => {
	const [isDistanceNeeded, setIsDistanceNeeded] = useState(false);
	const [isFlat, setIsFlat] = useState(false);
	const { data: services } = useServices();

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const options = services?.map(el => ({
		value: el.id,
		label: el.name,
	}));

	return (
		<>
			{isMounted && (
				<Controller
					control={control}
					name='service'
					render={({ field, fieldState: { error } }) => (
						<CustomSelect
							field={field}
							options={options || []}
							placeholder='Выберите услугу'
							error={error}
						/>
					)}
					rules={{
						required: 'Выберите услугу',
					}}
				/>
			)}
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

			<h3 className={styles.calculatorFormHeader}>Дополнительные услуги:</h3>
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
				<label className={styles.checkInputText} htmlFor='cargo'>
					<input
						{...register('cargo', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						id='cargo'
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
				<label className={styles.checkInputText} htmlFor='furniture'>
					<input
						{...register('furniture', {
							// pattern: {
							// 	value: validPhone,
							// 	message: 'Please enter a valid phone',
							// },
						})}
						id='furniture'
						type='checkbox'
					/>
					Разборка мебели
				</label>
			</div>
		</>
	);
};

export default CalculatorField;
