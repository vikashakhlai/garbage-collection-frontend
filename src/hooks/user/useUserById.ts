import { UserService } from '@/services/user.service';
import { toastError } from '@/utils/toast-error';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

export const useUserById = (userId: number) => {
	const queryData = useQuery(
		'one user',
		() => UserService.getUserById(userId),
		{
			select: ({ data }) => data,
			onError: error => {
				toastError(error, 'Получение пользователя');
			},
		}
	);

	return useMemo(() => ({ ...queryData }), [queryData]);
};
