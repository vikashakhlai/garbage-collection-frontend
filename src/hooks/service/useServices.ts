import { ServiceService } from '@/services/service.service';
import { ICreateService } from '@/types/service.type';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useServices = () => {
	const { push } = useRouter();

	const queryData = useQuery(
		'service list',
		() => ServiceService.getAllServices(),
		{
			select: ({ data }) => data,
			onError: error => {
				toastError(error, 'Список услуг');
			},
		}
	);

	const { mutateAsync: createAsync } = useMutation(
		'create service',
		(data: ICreateService) => ServiceService.createService(data),
		{
			onError: error => {
				toastError(error, 'Ошибка создания услуги');
			},
			onSuccess: () => {
				toastr.success('Создание услуги', 'Услуга успешно создана');
				queryData.refetch();
				push('/profile');
			},
		}
	);

	return useMemo(
		() => ({ ...queryData, createAsync }),
		[queryData, createAsync]
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
