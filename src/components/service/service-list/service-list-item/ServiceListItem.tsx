import { IService } from '@/types/service.type';
import Image from 'next/image';
import React from 'react';
import styles from './ServiceListItem.module.scss';

interface Props {
	className?: string;
	// headerText: string;
	// text: string;
	// imageUrl: string;
	data: IService;
}

export const ServiceListItem: React.FC<Props> = ({
	data,
	// headerText,
	// text,
	// imageUrl,
}) => {
	return (
		<li className={styles.serviceListItemContainer}>
			<Image
				className={styles.serviceListItemImage}
				src={data.image}
				alt='service_image'
				width={1000}
				height={1000}
			/>
			<h4 className={styles.serviceListItemHeader}>{data.name}</h4>
			<span className={styles.serviceListItemText}>{data.description}</span>
		</li>
	);
};
