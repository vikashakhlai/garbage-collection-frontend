import { OrderService } from '@/services/order.service';
import { toastError } from '@/utils/toast-error';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useOrders = () => {
	const queryData = useQuery('order list', () => OrderService.getOrders(), {
		select: ({ data }) => data,
		onError: error => {
			toastError(error, 'Список заказов');
		},
	});

	const activeOrders = useQuery(
		'active orders list',
		() => OrderService.getActiveOrders(),
		{
			select: ({ data }) => data,
			onError: error => {
				toastError(error, 'Список заказов');
			},
		}
	);

	const { mutateAsync: confirmAsync } = useMutation(
		'confirm order',
		(orderId: number) => OrderService.confirmOrder(orderId),
		{
			onError: error => {
				toastError(error, 'Ошибка подтверждения заказа');
			},
			onSuccess: () => {
				toastr.success('Подтверждение заказа', 'Заказ успешно подтвержден');
				queryData.refetch();
				activeOrders.refetch();
				// push('/profile');
			},
		}
	);
	const { mutateAsync: deleteAsync } = useMutation(
		'delete order',
		(orderId: number) => OrderService.deleteOrder(orderId),
		{
			onError: error => {
				toastError(error, 'Ошибка удаления заказа');
			},
			onSuccess: () => {
				toastr.success('Удаление заказа', 'Заказ успешно удален');
				queryData.refetch();
				// push('/profile');
			},
		}
	);

	return useMemo(
		() => ({ ...queryData, deleteAsync, activeOrders, confirmAsync }),
		[queryData, deleteAsync, activeOrders, confirmAsync]
	);
};
