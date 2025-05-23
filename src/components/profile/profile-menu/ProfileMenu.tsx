'use client';

import { useAuth } from '@/hooks/useAuth';
import cn from 'classnames';
import {
	ClipboardEdit,
	FilePlus,
	FileText,
	ListTodo,
	LucideTicketsPlane,
	MessagesSquareIcon,
	Trash2,
	Users2,
} from 'lucide-react';
import React from 'react';
import Slider from 'react-slick';
import styles from './ProfileMenu.module.scss';
import { ProfileMenuItem } from './profile-menu-item/ProfileMenuItem';

interface Props {
	className?: string;
}

export const ProfileMenu: React.FC<Props> = ({ className }) => {
	const { user } = useAuth();

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		// slidesToShow: 4,
		slidesToScroll: 1,
	};

	return (
		<div className={cn(className, styles.profileMenuContainer)}>
			<h2 className={styles.profileMenuHeader}>Меню профиля</h2>
			{user?.role === 'admin' ? (
				<div className='slider-container w-[560px] m-auto'>
					<ul>
						<Slider {...settings}>
							<ProfileMenuItem
								icon={FilePlus}
								text='Создать услугу'
								link='/manage/create-service'
							/>
							<ProfileMenuItem
								icon={ListTodo}
								text='Список заказов'
								link='/manage/orders'
							/>
							<ProfileMenuItem
								icon={Users2}
								text='Список пользователей'
								link='/manage/users'
							/>
							<ProfileMenuItem
								icon={Trash2}
								text='Отмена заказа'
								link='/cancel-order'
							/>
							<ProfileMenuItem
								icon={MessagesSquareIcon}
								text='Техническая поддержка'
								link='/support'
							/>
							<ProfileMenuItem icon={FileText} text='О нас' link='/about' />
							<ProfileMenuItem
								icon={LucideTicketsPlane}
								text='Добавить права'
								link='/add-license'
							/>
						</Slider>
					</ul>
				</div>
			) : (
				<div className='slider-container w-[560px] m-auto'>
					<ul>
						<Slider {...settings}>
							{user?.type && user.type === 'client' ? (
								<ProfileMenuItem
									icon={ClipboardEdit}
									text='Заказать услугу'
									link='/create-order'
								/>
							) : null}
							{user?.type && user.type === 'client' ? (
								<ProfileMenuItem
									icon={Trash2}
									text='Отмена заказа'
									link='/cancel-order'
								/>
							) : null}
							{user?.role === 'user' ? (
								user.type === 'worker' ? (
									<ProfileMenuItem
										icon={ListTodo}
										text='Список заказов'
										link='/confirm-order'
									/>
								) : (
									<ProfileMenuItem
										icon={ListTodo}
										text='Список заказов'
										link='/orders'
									/>
								)
							) : (
								<ProfileMenuItem
									icon={ListTodo}
									text='Список заказов'
									link='/manage/orders'
								/>
							)}

							<ProfileMenuItem
								icon={MessagesSquareIcon}
								text='Техническая поддержка'
								link='/support'
							/>
							<ProfileMenuItem icon={FileText} text='О нас' link='/about' />
							{user?.workerType && user.workerType === 'driver' ? (
								<ProfileMenuItem
									icon={LucideTicketsPlane}
									text='Добавить права'
									link='/add-license'
								/>
							) : null}
						</Slider>
					</ul>
				</div>
			)}
		</div>
	);
};
