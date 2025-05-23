import { UserOrder } from '@/components/order/user-order/UserOrder';
import ProtectedPage from '@/providers/AuthProvider/ProtectedPage';

export default function OrdersPage() {
	return (
		<ProtectedPage role='user'>
			<UserOrder />
		</ProtectedPage>
	);
}
