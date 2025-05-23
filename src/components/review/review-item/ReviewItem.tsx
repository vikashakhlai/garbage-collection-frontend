import cn from 'classnames';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import styles from './ReviewItem.module.scss';

interface Props {
	className?: string;
}

export const ReviewItem: React.FC<Props> = ({ className }) => {
	return (
		<li className={cn(className, styles.reviewItemContainer)}>
			<div className={styles.reviewItemPhotoContainer}>
				<Image
					className={styles.reviewItemPhoto}
					src={'/images/user.png'}
					width={1000}
					height={1000}
					alt='review_user'
				/>
			</div>
			<span className={styles.reviewItemUserName}>Иван Иванов</span>
			<ul className={styles.starList}>
				<li>
					<Star color='#FFE638' fill='#FFE638' />
				</li>
				<li>
					<Star color='#FFE638' fill='#FFE638' />
				</li>
				<li>
					<Star color='#FFE638' fill='#FFE638' />
				</li>
				<li>
					<Star color='#FFE638' fill='#FFE638' />
				</li>
				<li>
					<Star color='#FFE638' fill='#FFE638' />
				</li>
			</ul>
			<div className={styles.line}></div>
			<span className={styles.reviewItemText}>
				Заказал срочный вывоз строительного мусора после ремонта. Приехали через
				1,5 часа! Грузчики быстро все погрузили, даже помогли разобрать старую
				мебель. Цена полностью соответствовала тому, что озвучили по телефону.
				Буду рекомендовать вашу компанию!
			</span>
		</li>
	);
};
