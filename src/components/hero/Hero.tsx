import Image from 'next/image';
import React from 'react';
import { ActiveHeroButton } from '../ui/hero-button/active-hero-button/ActiveHeroButton';
import { HeroButton } from '../ui/hero-button/HeroButton';
import styles from './Hero.module.scss';

interface Props {
	className?: string;
}

export const Hero: React.FC<Props> = ({}) => {
	return (
		<section className={styles.heroBlock}>
			<Image
				className={styles.heroImage}
				src={'/images/hero.png'}
				width={1000}
				height={1000}
				alt='hero_image'
			/>
			<div className={styles.heroBlockContent}>
				<h1 className={styles.heroBlockHeader}>Вывозим мусор быстро</h1>
				<span className={styles.heroBlockText}>
					Работаем по всему Минску и Минской области
				</span>
				<ul className={styles.heroBlockContentList}>
					<li>
						<ActiveHeroButton />
					</li>
					<li>
						<HeroButton />
					</li>
				</ul>
			</div>
		</section>
	);
};
