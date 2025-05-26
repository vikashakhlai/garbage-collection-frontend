'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

interface Props {
	className?: string;
}

export const Footer: React.FC<Props> = ({}) => {
	// const { user } = useAuth();

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
							<Link
								className={styles.footerListInfoItemLink}
								href='https://maps.app.goo.gl/oFavY1dK8LitnxWL9'
								target='_blank'
							>
								<MapPin />
								<span className={styles.footerListInfoItemText}>
									г. Минск, ул. Первомайская д.14
								</span>
							</Link>
						</li>
						<li className={styles.footerListInfoItem}>
							<Link
								href='tel:+375291234567'
								className={styles.footerListInfoItemLink}
							>
								<Phone />
								<span className={styles.footerListInfoItemText}>
									+375291234567
								</span>
							</Link>
						</li>
						<li className={styles.footerListInfoItem}>
							<Link
								href='mailto:user@mail.ru'
								className={styles.footerListInfoItemLink}
							>
								<Mail />
								<span className={styles.footerListInfoItemText}>
									user@mail.ru
								</span>
							</Link>
						</li>
					</ul>
				</li>
				<li>
					<nav>
						<ul className={styles.footerListNavigationList}>
							<li className={styles.footerListNavigationListItem}>
								<Link href='#services'>Услуги</Link>
							</li>
							<li className={styles.footerListNavigationListItem}>
								<Link href='#calculator'>Цены</Link>
							</li>
							<li className={styles.footerListNavigationListItem}>
								<Link href='#review'>Отзывы</Link>
							</li>
							<li className={styles.footerListNavigationListItem}>
								{/* {user !== null ? (
									<Link href='/logout'>Выход из системы</Link>
								) : (
									<Link href='/login'>Вход в систему</Link>
								)} */}
								<Link href='/login'>Вход в систему</Link>
							</li>
						</ul>
					</nav>
				</li>
				<li>
					<ul className={styles.footerListSocial}>
						<li>
							<Link href='https://www.viber.com/ru/'>
								<Image
									src={'/icons/viber.svg'}
									className={styles.viberIcon}
									alt='viber'
									color='#fff'
									width={60}
									height={60}
								/>
							</Link>
						</li>
						<li>
							<Link href='https://www.whatsapp.com/?lang=ru_RU'>
								<Image
									src={'/icons/whatsapp.svg'}
									className={styles.whatsAppIcon}
									alt='whatsapp'
									color='#fff'
									width={60}
									height={60}
								/>
							</Link>
						</li>
						<li>
							<Link href='https://web.telegram.org/k/'>
								<Image
									src={'/icons/telegram.svg'}
									className={styles.telegramIcon}
									alt='telegram'
									color='#fff'
									width={60}
									height={60}
								/>
							</Link>
						</li>
					</ul>
				</li>
			</ul>
		</footer>
	);
};
