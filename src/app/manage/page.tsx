import { CreateService } from '@/components/service/create-service/CreateService';
import ProtectedPage from '@/providers/AuthProvider/ProtectedPage';

export default function ManagePage() {
	return (
		<ProtectedPage role='user'>
			<CreateService />
		</ProtectedPage>
	);
}
