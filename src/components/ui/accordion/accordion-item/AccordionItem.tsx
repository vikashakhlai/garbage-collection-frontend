'use client';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import styles from './AccordionItem.module.scss';

interface Props {
	title: string;
	text: string;
}

export const AccordionItem: React.FC<Props> = ({ title, text }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.accordionContainer}>
			<div className={styles.accordionMain} onClick={() => setIsOpen(!isOpen)}>
				<h4 className={styles.accordionHeader}>{title}</h4>
				<span className={isOpen ? styles.iconOpen : styles.iconClosed}>
					<ChevronDown color='#4CAF50' />
				</span>
			</div>
			<div
				className={`${styles.accordionContent} ${
					isOpen ? styles.open : styles.closed
				}`}
			>
				<span className={styles.accordionText}>{text}</span>
			</div>
		</div>
	);
};
