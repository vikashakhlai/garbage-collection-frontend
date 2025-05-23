/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import Field from '../ui/form-elements/Field';
import styles from './Calculator.module.scss';

interface ICalculatorField {
	register: UseFormRegister<any>;
	formState: FormState<any>;
}

const CalculatorField: FC<ICalculatorField> = ({
	register,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				{...register('carType', {
					required: 'Введите тип машины',
				})}
				placeholder='Тип машины:'
				error={errors.carType}
			/>
			<Field
				{...register('hour', {
					required: 'Введите фрахт',
				})}
				placeholder='Фрахт (часы работы):'
				error={errors.hour}
			/>
			<Field
				{...register('distance', {
					required: 'Введите расстояние',
				})}
				placeholder='Расстояние за городом (км):'
				error={errors.distance}
			/>
			<h3 className={styles.calculatorFormHeader}>Дополнительные услуги:</h3>
			<Field
				{...register('floor', {
					required: 'Введите количество этажей',
				})}
				placeholder='Этажей без лифта:'
				error={errors.floor}
			/>
			{/* <div className='flex gap-1 mt-[30px]'>
				<input
					{...register('driver', {
						// pattern: {
						// 	value: validPhone,
						// 	message: 'Please enter a valid phone',
						// },
					})}
					id='driver'
					type='checkbox'
				/>
				<label className={styles.checkInputText} htmlFor='driver'>
					Водитель
				</label>
			</div> */}
			<div className='flex gap-1'>
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
				<label className={styles.checkInputText} htmlFor='cargo'>
					Груз тяжелее 20 кг
				</label>
			</div>
			<div className='flex gap-1'>
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
				<label className={styles.checkInputText} htmlFor='furniture'>
					Разборка мебели
				</label>
			</div>
			<div className='flex gap-1'>
				<input
					{...register('forCity', {
						// pattern: {
						// 	value: validPhone,
						// 	message: 'Please enter a valid phone',
						// },
					})}
					id='forCity'
					type='checkbox'
				/>
				<label className={styles.checkInputText} htmlFor='forCity'>
					Работа за городом
				</label>
			</div>
		</>
	);
};

export default CalculatorField;
