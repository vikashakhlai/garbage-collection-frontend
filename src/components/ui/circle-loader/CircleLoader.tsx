import React from 'react';
import styles from './CircleLoader.module.scss';

interface Props {
	className?: string;
}

export const CircleLoader: React.FC<Props> = ({}) => {
	return <div className={styles.loadingSpinner}></div>;
};
