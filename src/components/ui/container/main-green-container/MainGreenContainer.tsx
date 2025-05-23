import React from 'react';
import styles from './MainGreenContainer.module.scss';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export const MainGreenContainer: React.FC<Props> = ({ children }) => {
	return <section className={styles.mainGreenContainer}>{children}</section>;
};
