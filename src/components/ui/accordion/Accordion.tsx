import cn from 'classnames';
import React from 'react';
import { AccordionItem } from './accordion-item/AccordionItem';
import styles from './Accordion.module.scss';

interface Props {
	className?: string;
}

export const Accordion: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(className, styles.accordionContainer)}>
			<AccordionItem
				title='Как оформить заказ?'
				text='Оформить заказ вы можете через личный кабинет пройдя регистрацию, так и без регистрации, наш сервис сразу посчитает стоимость услуги.'
			/>
		</div>
	);
};
