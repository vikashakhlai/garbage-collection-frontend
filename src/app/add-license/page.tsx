import { UploadLicense } from '@/components/user/upload-license/UploadLicense';
import ProtectedPage from '@/providers/AuthProvider/ProtectedPage';

export default function AddLicense() {
	return (
		<ProtectedPage role='user'>
			<UploadLicense />
		</ProtectedPage>
	);
}
