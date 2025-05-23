import { CreateOrder } from '@/components/order/create-order/CreateOrder';
import ProtectedPage from '@/providers/AuthProvider/ProtectedPage';

export default function CreateOrderPage() {
	return (
		<ProtectedPage role='user'>
			<CreateOrder />
		</ProtectedPage>
	);
}
