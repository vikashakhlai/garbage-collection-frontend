'use client';

import { MainWhiteContainer } from '@/components/ui/container/main-white-container/MainWhiteContainer';
import UploadField from '@/components/ui/form-elements/upload-fild/UploadField';
import { GreenButton } from '@/components/ui/green-button/GreenButton';
import { MainHeader } from '@/components/ui/main-header/MainHeader';
import { useUserProfile } from '@/hooks/user/useUserProfile';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// Интерфейс для данных формы
interface ILicenseInput {
	licenseImage: string;
}

interface Props {
	className?: string;
}

export const UploadLicense: React.FC<Props> = ({ className }) => {
	const { addLicenseAsync } = useUserProfile();

	const {
		handleSubmit,
		control, // control деструктурирован правильно
	} = useForm<ILicenseInput>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<ILicenseInput> = data => {
		addLicenseAsync(data);
	};

	return (
		<MainWhiteContainer className={className}>
			<MainHeader text='Загрузка прав' />
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Controller явно получает control из useForm */}
				<Controller
					control={control} // Передаем control явно
					name='licenseImage'
					defaultValue=''
					render={({ field: { onChange, value }, fieldState: { error } }) => (
						<UploadField
							onChange={onChange}
							value={value}
							error={error}
							folder='licenses'
							placeholder='Выберите изображение:'
						/>
					)}
				/>
				<GreenButton
					title='Загрузить права'
					type='submit'
					// disabled={!formState.isValid}
				/>
			</form>
		</MainWhiteContainer>
	);
};
