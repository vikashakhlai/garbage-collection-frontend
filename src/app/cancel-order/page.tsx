import { CancelOrder } from '@/components/order/cancel-order/CancelOrder';
import ProtectedPage from '@/providers/AuthProvider/ProtectedPage';

export default function CancelOrderPage() {
	return (
		<ProtectedPage role='user'>
			<CancelOrder />
		</ProtectedPage>
	);
}
