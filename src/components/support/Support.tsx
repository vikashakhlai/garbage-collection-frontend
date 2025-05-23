import { Headphones } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { MainGreenContainer } from '../ui/container/main-green-container/MainGreenContainer';
import { MainHeader } from '../ui/main-header/MainHeader';
import styles from './Support.module.scss';

interface Props {
	className?: string;
}

export const Support: React.FC<Props> = ({}) => {
	return (
		<MainGreenContainer>
			{/* <section className={cn(className, styles.supportContainer)}> */}
			<Headphones className={styles.supportIcon} color='#4caf50' />
			<MainHeader text='Техническая поддержка' />
			<p className={styles.supportText}>
				Если у вас есть вопросы по работе платформы, наш отдел технической
				поддержки ответит вам в ближайшее время.
			</p>
			<h3 className={styles.supportListHeader}>Контакты для связи:</h3>
			<ul className={styles.supportList}>
				<li className={styles.supportListItem}>
					{/* <Phone /> */}
					<span className={styles.supportListItemHeader}>Номер телефона:</span>
					<Link href={''}>
						<span className={styles.supportListItemText}>
							+375(29)122-16-09
						</span>
					</Link>
				</li>
				<li className={styles.supportListItem}>
					{/* <Phone /> */}
					<span className={styles.supportListItemHeader}>Viber:</span>
					<Link href={''}>
						<span className={styles.supportListItemText}>
							+375(29)122-16-09
						</span>
					</Link>
				</li>
				<li className={styles.supportListItem}>
					{/* <Phone /> */}
					<span className={styles.supportListItemHeader}>WhatsApp:</span>
					<Link href={''}>
						<span className={styles.supportListItemText}>
							+375(29)122-16-09
						</span>
					</Link>
				</li>
				<li className={styles.supportListItem}>
					{/* <Image
						src={'/icons/telegram.svg'}
						className={styles.telegramIcon}
						alt='telegram'
						width={60}
						height={60}
					/> */}
					<span className={styles.supportListItemHeader}>Telegram:</span>
					<Link href={''} className={styles.supportListItemLink}>
						<span className={styles.supportListItemText}>
							+375(29)122-16-09
						</span>
					</Link>
				</li>
			</ul>
			{/* </section> */}
		</MainGreenContainer>
	);
};
