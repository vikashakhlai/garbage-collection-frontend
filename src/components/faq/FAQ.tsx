import cn from 'classnames';
import Link from 'next/link';
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
			<span className={styles.faqText}>Не нашли ответ? Звоните: </span>
			<span className={styles.faqText}>
				<Link href='tel:+375291234567' className={styles.faqTextLink}>
					+375 (12) 345-67-89
				</Link>
			</span>
			<Accordion />
		</section>
	);
};
