import { useActions } from '@/hooks/useActions';
import cn from 'classnames';
import React from 'react';
import styles from './MainProfileButton.module.scss';

interface Props {
	className?: string;
}

export const MainProfileButton: React.FC<Props> = ({ className }) => {
	const { logout } = useActions();

	return (
		<button
			className={cn(className, styles.mainProfileButton)}
			onClick={() => logout()}
		>
			Выйти из аккаунта
		</button>
	);
};
