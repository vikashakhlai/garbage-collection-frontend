import React from 'react';
import styles from './MainWhiteContainer.module.scss';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export const MainWhiteContainer: React.FC<Props> = ({ children }) => {
	return <section className={styles.mainWhiteContainer}>{children}</section>;
};
