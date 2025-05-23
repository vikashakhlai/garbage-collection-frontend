'use client';

import { useServices } from '@/hooks/service/useServices';
import React from 'react';
import { ServiceListItem } from './service-list-item/ServiceListItem';
import styles from './ServiceList.module.scss';

interface Props {
	className?: string;
}

export const ServiceList: React.FC<Props> = ({}) => {
	const { data } = useServices();

	return (
		<ul className={styles.serviceListContainer}>
			{data ? data.map(el => <ServiceListItem key={el.id} data={el} />) : <></>}
			{/* <ServiceListItem
				text='Вывозим кирпич, бетон, отходы ремонта. Работаем с объемами 
от 1 м³. '
				headerText='Строительный мусор'
				imageUrl='/images/trash.png'
			/>
			<ServiceListItem
				text='Вывозим кирпич, бетон, отходы ремонта. Работаем с объемами 
от 1 м³. '
				headerText='Строительный мусор'
				imageUrl='/images/trash.png'
			/>
			<ServiceListItem
				text='Вывозим кирпич, бетон, отходы ремонта. Работаем с объемами 
от 1 м³. '
				headerText='Строительный мусор'
				imageUrl='/images/trash.png'
			/> */}
		</ul>
	);
};
