import cn from 'classnames';
import { Car } from 'lucide-react';
import React from 'react';
import { MainGreenContainer } from '../ui/container/main-green-container/MainGreenContainer';
import { MainHeader } from '../ui/main-header/MainHeader';
import styles from './About.module.scss';

interface Props {
	className?: string;
}

export const About: React.FC<Props> = ({}) => {
	return (
		// <section className={cn(className, styles.aboutContainer)}>
		<MainGreenContainer>
			<Car color='#4caf50' strokeWidth={1} className={styles.aboutIcon} />
			<MainHeader text='О нас' />
			<ul className={styles.aboutBlockList}>
				<li className={styles.aboutBlock}>
					<h3 className={styles.aboutBlockHeader}>Кто мы?</h3>
					<p className={styles.aboutText}>
						Чистый город – мы посредническая платформа между клиентами и
						специалистами по вывозу мусора, стремимся создать удобный и надежный
						сервис для всех участников процесса.
					</p>
				</li>
				<li className={styles.aboutBlock}>
					<h3 className={styles.aboutBlockHeader}>
						Как мы отбираем специалистов?
					</h3>
					<p className={styles.aboutText}>
						Наши грузчики и водители проходят анкетирование и собеседование
						перед тем, как попасть на платформу. Не каждый может быть одобрен –
						мы отбираем только ответственных и квалифицированных специалистов.
						Мы создаем максимально удобную платформу для быстрого оформления
						заказа, которая совершенствуется ежедневно.
					</p>
				</li>
				<li className={styles.aboutBlock}>
					<h3 className={styles.aboutBlockHeader}>Как происходит оплата?</h3>
					<p className={styles.aboutText}>
						Оплата за вывоз мусора осуществляется напрямую с грузчиками и
						водителями после успешного завершения работы. Все специалисты
						платформы находятся в статусе самозанятых. Наша платформа не несёт
						ответственности за качество выполнения услуги, но мы тщательно
						проверяем каждого подключенного специалиста. Мы стремимся предлагать
						только самых надежных и профессиональных исполнителей.
					</p>
				</li>
			</ul>

			<p className={cn(styles.aboutText, 'font-bold')}>
				С уважением, Администрация.
			</p>
			{/* </section> */}
		</MainGreenContainer>
	);
};
