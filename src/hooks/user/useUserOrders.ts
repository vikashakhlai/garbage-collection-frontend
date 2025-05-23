import { OrderService } from '@/services/order.service';
import { ICreateOrder } from '@/types/order.types';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useUserOrders = () => {
	const { push } = useRouter();

	const queryData = useQuery(
		'user order list',
		() => OrderService.getUserOrders(),
		{
			select: ({ data }) => data,
			onError: error => {
				toastError(error, 'Список заказов');
			},
		}
	);

	const activeOrders = useQuery(
		'user active order list',
		() => OrderService.getUserActiveOrders(),
		{
			select: ({ data }) => data,
			onError: error => {
				toastError(error, 'Список заказов');
			},
		}
	);

	const { mutateAsync: createAsync } = useMutation(
		'create user order',
		(data: ICreateOrder) => OrderService.createOrder(data),
		{
			onError: error => {
				toastError(error, 'Ошибка создания заказа');
			},
			onSuccess: () => {
				toastr.success('Создание заказа', 'Заказ успешно создан');
				queryData.refetch();
				push('/profile');
			},
		}
	);

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user order',
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
		() => ({ ...queryData, activeOrders, createAsync, deleteAsync }),
		[queryData, activeOrders, createAsync, deleteAsync]
	);

	// const { mutateAsync: updateAsync } = useMutation(
	// 	'delete user',
	// 	(userId: number) => UserService.deleteUser(userId),
	// 	{
	// 		onError: error => {
	// 			toastError(error, 'Ошибка удаления');
	// 		},
	// 		onSuccess: () => {
	// 			toastr.success('Удаление пользователя', 'Пользователь удален');
	// 			queryData.refetch();
	// 		},
	// 	}
	// );

	// return useMemo(
	// 	() => ({ ...queryData, deleteAsync }),
	// 	[queryData, deleteAsync]
	// );
};
