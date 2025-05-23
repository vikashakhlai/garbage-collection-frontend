import cn from 'classnames';
import React from 'react';
import styles from './CalculatorButton.module.scss';

interface Props {
	className?: string;
}

export const CalculatorButton: React.FC<Props> = ({ className }) => {
	return (
		<button className={cn(className, styles.calculatorButton)}>
			Рассчитать
		</button>
	);
};
