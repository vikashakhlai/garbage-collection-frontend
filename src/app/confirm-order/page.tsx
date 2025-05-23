import { ConfirmOrder } from '@/components/order/confirm-order/ConfirmOrder';
import ProtectedPage from '@/providers/AuthProvider/ProtectedPage';

export default function ConfirmOrderPage() {
	return (
		<ProtectedPage role='user'>
			<ConfirmOrder />;
		</ProtectedPage>
	);
}
