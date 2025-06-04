'use client';

import cn from 'classnames';
import React from 'react';
import Slider from 'react-slick';

import { MainHeader } from '../ui/main-header/MainHeader';
import styles from './Review.module.scss';
import { ReviewItem } from './review-item/ReviewItem';

interface Props {
	className?: string;
}

export const Review: React.FC<Props> = ({ className }) => {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					swipe: false,
					adaptiveHeight: true,
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className={cn(className, styles.reviewContainer)} id='review'>
			<MainHeader text='Отзывы' />
			<ul className={`${styles.reviewList} slider-container`}>
				{/* <ul className={`${styles.reviewList} slider-container w-[1066px]`}> */}
				<Slider {...settings}>
					<ReviewItem />
					<ReviewItem />
					<ReviewItem />
					<ReviewItem />
					<ReviewItem />
					<ReviewItem />
					<ReviewItem />
					<ReviewItem />
				</Slider>
			</ul>
		</section>
	);
};
