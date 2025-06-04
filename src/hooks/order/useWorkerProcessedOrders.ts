import { OrderService } from '@/services/order.service';
import { toastError } from '@/utils/toast-error';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useWorkerProcessedOrders = () => {
	const queryData = useQuery(
		'worker order processed list',
		() => OrderService.getWorkerProcessedOrders(),
		{
			select: ({ data }) => data,
			onError: error => {
				toastError(error, 'Список заказов');
			},
		}
	);

	const { mutateAsync: confirmAsync } = useMutation(
		'success worker order',
		(orderId: number) => OrderService.confirmOrder(orderId),
		{
			onError: error => {
				toastError(error, 'Ошибка подтверждения заказа');
			},
			onSuccess: () => {
				toastr.success('Подтверждение заказа', 'Заказ успешно подтвержден');
				queryData.refetch();
				// push('/profile');
			},
		}
	);

	const { mutateAsync: completeAsync } = useMutation(
		'success worker order',
		(orderId: number) => OrderService.completeOrder(orderId),
		{
			onError: error => {
				toastError(error, 'Ошибка в заказе');
			},
			onSuccess: () => {
				toastr.success('Выполнение заказа', 'Заказ успешно выполнен');
				queryData.refetch();
				// push('/profile');
			},
		}
	);

	const { mutateAsync: pendingAsync } = useMutation(
		'pending worker order',
		(orderId: number) => OrderService.pendingOrder(orderId),
		{
			onError: error => {
				toastError(error, 'Ошибка в заказе');
			},
			onSuccess: () => {
				toastr.success('Заказ', 'Заказ успешно отменен');
				queryData.refetch();
				// push('/profile');
			},
		}
	);

	return useMemo(
		() => ({ ...queryData, confirmAsync, pendingAsync, completeAsync }),
		[queryData, confirmAsync, pendingAsync, completeAsync]
	);
};
