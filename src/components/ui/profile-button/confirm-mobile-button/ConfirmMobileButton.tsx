import cn from 'classnames';
import { Ban, CheckCircle } from 'lucide-react';
import React from 'react';
import styles from './ConfirmMobileButton.module.scss';

interface Props {
	className?: string;
	isConfirm: boolean;
}

export const ConfirmMobileButton: React.FC<Props> = ({
	className,
	isConfirm = false,
}) => {
	return (
		<button className={cn(className, styles.ConfirmMobileButton)}>
			{isConfirm ? <CheckCircle color='#4CAF50' /> : <Ban color='red' />}
		</button>
	);
};
