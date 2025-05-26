'use client';

import { useAuth } from '@/hooks/useAuth';
import cn from 'classnames';
import {
	ArrowLeft,
	ArrowRight,
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

	const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
		<button
			onClick={onClick}
			className='absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-green-600 p-1 text-white opacity-75 hover:opacity-100 focus:outline-none hover:cursor-pointer'
			aria-label='Previous slide'
		>
			<ArrowLeft size={12} />
		</button>
	);

	const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
		<button
			onClick={onClick}
			className='absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-green-600 p-1 text-white opacity-75 hover:opacity-100 focus:outline-none hover:cursor-pointer'
			aria-label='Next slide'
		>
			<ArrowRight size={12} />
		</button>
	);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		// slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
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
							{/* <ProfileMenuItem
								icon={Trash2}
								text='Отмена заказа'
								link='/cancel-order'
							/> */}
							<ProfileMenuItem
								icon={MessagesSquareIcon}
								text='Техническая поддержка'
								link='/support'
							/>
							<ProfileMenuItem icon={FileText} text='О нас' link='/about' />
							{/* <ProfileMenuItem
								icon={LucideTicketsPlane}
								text='Добавить права'
								link='/add-license'
							/> */}
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
