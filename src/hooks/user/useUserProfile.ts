import { ILicenseInput } from '@/components/user/upload-license/upload-license.interface';
import { UserService } from '@/services/user.service';
import { toastError } from '@/utils/toast-error';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

export const useUserProfile = () => {
	const { push } = useRouter();

	const queryData = useQuery(
		'get user profile',
		() => UserService.getUserProfile(),
		{
			select: ({ data }) => data,
			onError: error => {
				toastError(error, 'Профиль пользователя');
			},
		}
	);

	const { mutateAsync: addLicenseAsync } = useMutation(
		'add license',
		(data: ILicenseInput) => UserService.addLicense(data),
		{
			onError: error => {
				toastError(error, 'Ошибка лицензии');
			},
			onSuccess: () => {
				toastr.success('Добавление лицензии', 'Лицензия успешно добавлена');
				queryData.refetch();
				push('/profile');
			},
		}
	);

	return useMemo(
		() => ({ ...queryData, addLicenseAsync }),
		[queryData, addLicenseAsync]
	);
};
