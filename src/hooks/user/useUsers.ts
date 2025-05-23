import { UserService } from '@/services/user.service';
import { toastError } from '@/utils/toast-error';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useUsers = () => {
	const queryData = useQuery('user list', () => UserService.getAllUsers(), {
		select: ({ data }) => data,
		onError: error => {
			toastError(error, 'Список пользователей');
		},
	});

	const { mutateAsync: confirmAsync } = useMutation(
		'check license user',
		(driverId: number) => UserService.confirmDriver(driverId),
		{
			onError: error => {
				toastError(error, 'Ошибка подтверждения');
			},
			onSuccess: () => {
				toastr.success('Подтверждение водителя', 'Водитель подтвержден');
				queryData.refetch();
			},
		}
	);

	const { mutateAsync: unConfirmAsync } = useMutation(
		'uncheck license user',
		(driverId: number) => UserService.unConfirmDriver(driverId),
		{
			onError: error => {
				toastError(error, 'Ошибка отклонения');
			},
			onSuccess: () => {
				toastr.success('Удаление водителя', 'Водитель отклонен');
				queryData.refetch();
			},
		}
	);

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: number) => UserService.deleteUser(userId),
		{
			onError: error => {
				toastError(error, 'Ошибка удаления');
			},
			onSuccess: () => {
				toastr.success('Удаление пользователя', 'Пользователь удален');
				queryData.refetch();
			},
		}
	);
	return useMemo(
		() => ({ ...queryData, deleteAsync, confirmAsync, unConfirmAsync }),
		[queryData, deleteAsync, confirmAsync, unConfirmAsync]
	);
};
