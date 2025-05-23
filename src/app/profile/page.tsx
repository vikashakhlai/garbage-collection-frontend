import { Profile } from '@/components/profile/Profile';
import ProtectedPage from '@/providers/AuthProvider/ProtectedPage';

export default function ProfilePage() {
	return (
		<ProtectedPage role='user'>
			<Profile />
		</ProtectedPage>
	);
}

export const metadata = {
	title: 'Профиль пользователя',
};
