'use client';

import { ActiveLoginButtons } from '@/components/ui/login-button/ActiveLoginButton';
import { LoginChangeButton } from '@/components/ui/login-button/change-button/LoginChangeButton';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthRedirect } from '../useAuthRedirect';
import { ILoginInput } from './login.interface';
import styles from './Login.module.scss';
import LoginField from './LoginField';

interface Props {
	className?: string;
}

export const Login: React.FC<Props> = ({}) => {
	useAuthRedirect();
	const { isLoading } = useAuth();

	const [type, setType] = useState<'client' | 'worker'>('client');

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
		setValue,
	} = useForm<ILoginInput>({
		mode: 'onChange',
	});

	const { login } = useActions();

	// const loginClient = (data: any) => {};
	// const loginWorker = (data: any) => {};

	const onSubmit: SubmitHandler<ILoginInput> = data => {
		login({ ...data, type: type });
		reset();
	};

	return (
		<section className={styles.loginContainer}>
			<form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.loginHeader}>Вход</h2>
				<LoginChangeButton setType={setType} type={type} />
				<LoginField
					setValue={setValue}
					formState={formState}
					register={registerInput}
					isPasswordRequired
				/>
				<ActiveLoginButtons isLoading={isLoading} />
				<div className={styles.line}></div>
			</form>
		</section>
	);
};
