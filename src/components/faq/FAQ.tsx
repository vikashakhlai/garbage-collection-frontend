import cn from 'classnames';
import React from 'react';
import { Accordion } from '../ui/accordion/Accordion';
import { MainHeader } from '../ui/main-header/MainHeader';
import styles from './FAQ.module.scss';

interface Props {
	className?: string;
}

export const FAQ: React.FC<Props> = ({ className }) => {
	return (
		<section className={cn(className, styles.faqContainer)} id='faq'>
			<MainHeader text='Ответы на частые вопросы' />
			<span className={styles.faqText}>
				Не нашли ответ? Звоните: +375 (XX) XXX-XX-XX
			</span>
			<Accordion />
		</section>
	);
};
