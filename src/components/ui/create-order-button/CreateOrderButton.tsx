import cn from 'classnames';
import React from 'react';
import styles from './CreateOrderButton.module.scss';

interface Props {
	className?: string;
}

export const CreateOrderButton: React.FC<Props> = ({ className }) => {
	return (
		<button type='submit' className={cn(className, styles.createOrderButton)}>
			Оформить заказ
		</button>
	);
};
