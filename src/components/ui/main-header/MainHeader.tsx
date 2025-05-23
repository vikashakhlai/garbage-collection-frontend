import React from 'react';
import styles from './MainHeader.module.scss';

interface Props {
	className?: string;
	text: string;
}

export const MainHeader: React.FC<Props> = ({ text }) => {
	return <h2 className={styles.mainHeader}>{text}</h2>;
};
