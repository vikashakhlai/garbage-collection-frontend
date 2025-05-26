import Field from '@/components/ui/form-elements/Field';
import { formatPhone } from '@/shared/regex';
import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

interface ILoginField {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	formState: FormState<any>;
	isPasswordRequired?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setValue: any;
}

const LoginField: FC<ILoginField> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
	setValue,
}) => {
	return (
		<>
			<Field
				{...register('phone', {
					required: 'Введите номер телефона',
				})}
				type='tel'
				placeholder='Номер телефона:'
				onChange={e => {
					setValue('phone', formatPhone(e.target.value));
				}}
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
