import React from 'react';
import { MainHeader } from '../ui/main-header/MainHeader';
import styles from './Service.module.scss';
import { ServiceList } from './service-list/ServiceList';

interface Props {
	className?: string;
}

export const Service: React.FC<Props> = ({}) => {
	return (
		<section className={styles.serviceContainer} id='service'>
			<MainHeader text='Наши услуги' />
			<ServiceList />
		</section>
	);
};
