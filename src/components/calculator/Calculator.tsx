'use client';

import cn from 'classnames';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CalculatorButton } from '../ui/calculator-button/CalculatorButton';
import { MainHeader } from '../ui/main-header/MainHeader';
import { ICalculateInput } from './calculator.interface';
import styles from './Calculator.module.scss';
import CalculatorField from './CalculatorField';

interface Props {
	className?: string;
}

export const Calculator: React.FC<Props> = ({ className }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [summary, setSummary] = useState(0);

	const { register: registerInput, formState } = useForm<ICalculateInput>({
		mode: 'onChange',
	});

	return (
		<section
			className={cn(className, styles.calculatorContainer)}
			id='calculator'
		>
			<MainHeader text='Расчет стоимости вывоза мусора' />
			<form className={styles.calculatorForm}>
				<h3 className={styles.calculatorFormHeader}>Основные параметры:</h3>
				<CalculatorField formState={formState} register={registerInput} />
				<h3 className={cn(styles.calculatorFormCountHeader)}>Итого:</h3>
				<span className={cn(styles.calculatorFormCountText, 'text-left block')}>
					{summary} BYN
				</span>
				<CalculatorButton />
			</form>
		</section>
	);
};
