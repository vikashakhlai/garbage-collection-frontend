import cn from 'classnames';
import { CalendarClock, ThumbsUp, WalletIcon } from 'lucide-react';
import React from 'react';
import { MainHeader } from '../ui/main-header/MainHeader';
import styles from './Advantage.module.scss';

interface Props {
	className?: string;
}

export const Advantage: React.FC<Props> = ({ className }) => {
	return (
		<section className={cn(className, styles.advantageContainer)}>
			<MainHeader text='Преимущества' />
			<ul className={styles.advantageList}>
				<li className={styles.advantageListItem}>
					<WalletIcon
						className={styles.advantageListItemIcon}
						color='#4CAF50'
						strokeWidth={0.25}
					/>
					<span className={styles.advantageListItemHeader}>
						Низкая стоимость услуг
					</span>
				</li>
				<li className={styles.advantageListItem}>
					<ThumbsUp
						className={styles.advantageListItemIcon}
						color='#4CAF50'
						strokeWidth={0.25}
					/>
					<span className={styles.advantageListItemHeader}>
						Высокое качество
					</span>
				</li>
				<li className={styles.advantageListItem}>
					<CalendarClock
						className={styles.advantageListItemIcon}
						color='#4CAF50'
						strokeWidth={0.25}
					/>
					<span className={styles.advantageListItemHeader}>
						Быстрая обработка заказов
					</span>
				</li>
			</ul>
		</section>
	);
};
