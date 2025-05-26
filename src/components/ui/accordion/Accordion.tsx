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
			<AccordionItem
				title='Через сколько приедет водитель?'
				text='После подтверждения вашего заказа водитель сразу приступает к вашему заказу. Время приезда зависит от расстояния между вами и водителем, обычно занимает не более 2-х часов.'
			/>
			<AccordionItem
				title='Куда вывозится мусор?'
				text='Мы сотрудничаем с лицензированными полигонами и перерабатывающими предприятиями. Часть отходов отправляется на рециклинг.'
			/>
			<AccordionItem
				title='Можно ли заказать вывоз мусора срочно?'
				text='Да! Доступен срочный вывоз в день обращения. Уточняйте детали у менеджера.'
			/>
		</div>
	);
};
