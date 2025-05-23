import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import styles from './Footer.module.scss';

interface Props {
	className?: string;
}

export const Footer: React.FC<Props> = ({}) => {
	return (
		<footer className={styles.footerContainer}>
			<ul className={styles.footerList}>
				<li>
					<ul className={styles.footerListInfo}>
						<li className={styles.footerListInfoItem}>
							<h4 className={styles.footerListInfoItemHeaderText}>
								© 2012 - 2024 «ООО Компани» Вывоз мусора по Минску
							</h4>
						</li>
						<li className={styles.footerListInfoItem}>
							<MapPin />
							<span className={styles.footerListInfoItemText}>
								г. Минск, ул. Первомайская д.14
							</span>
						</li>
						<li className={styles.footerListInfoItem}>
							<Phone />
							<span className={styles.footerListInfoItemText}>
								+375291234567
							</span>
						</li>
						<li className={styles.footerListInfoItem}>
							<Mail />
							<span className={styles.footerListInfoItemText}>
								user@mail.ru
							</span>
						</li>
					</ul>
				</li>
				<li>
					<nav>
						<ul className={styles.footerListNavigationList}>
							<li className={styles.footerListNavigationListItem}>Услуги</li>
							<li className={styles.footerListNavigationListItem}>Цены</li>
							<li className={styles.footerListNavigationListItem}>Отзывы</li>
							<li className={styles.footerListNavigationListItem}>
								Вход в систему
							</li>
						</ul>
					</nav>
				</li>
				<li>
					<ul className={styles.footerListSocial}>
						<li>
							<Image
								src={'/icons/viber.svg'}
								className={styles.viberIcon}
								alt='viber'
								color='#fff'
								width={60}
								height={60}
							/>
						</li>
						<li>
							<Image
								src={'/icons/whatsapp.svg'}
								className={styles.whatsAppIcon}
								alt='whatsapp'
								color='#fff'
								width={60}
								height={60}
							/>
						</li>
						<li>
							<Image
								src={'/icons/telegram.svg'}
								className={styles.telegramIcon}
								alt='telegram'
								color='#fff'
								width={60}
								height={60}
							/>
						</li>
					</ul>
				</li>
			</ul>
		</footer>
	);
};
