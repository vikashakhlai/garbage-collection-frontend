import Field from '@/components/ui/form-elements/Field';
import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

interface ILoginField {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	formState: FormState<any>;
	isPasswordRequired?: boolean;
}

const LoginField: FC<ILoginField> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('phone', {
					required: 'Введите номер телефона',
					// pattern: {
					// 	value: validPhone,
					// 	message: 'Please enter a valid phone',
					// },
				})}
				placeholder='Номер телефона:'
				error={errors.phone}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Введите пароль',
								minLength: {
									value: 6,
									message: 'Минимальное количество 6 символов!',
								},
						  }
						: {}
				)}
				placeholder='Пароль:'
				type='password'
				error={errors.password}
			/>
		</>
	);
};

export default LoginField;
