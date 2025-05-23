import { LucideIcon } from 'lucide-react';
import styles from './ProfileMenuItemIcon.module.scss';

interface IconComponentProps {
	Icon: LucideIcon;
	size?: number;
	className?: string;
}

export const ProfileMenuItemIcon = ({
	Icon,
	size = 24,
	className = '',
}: IconComponentProps) => {
	return (
		<Icon
			size={size}
			className={`${styles.profileMenuListItemIcon} ${className}`}
			color='#4CAF50'
			strokeWidth={1}
		/>
	);
};
