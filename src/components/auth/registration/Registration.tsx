'use client';

import { ActiveRegistrationButtons } from '@/components/ui/registration-button/ActiveRegistrationButtons';
import { RegistrationChangeButton } from '@/components/ui/registration-button/change-button/RegistrationChangeButton';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { Suspense, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterInput } from '../login/login.interface';
import { useAuthRedirect } from '../useAuthRedirect';
import styles from './Registration.module.scss';
import RegistrationClientField from './RegistrationClientField';
import RegistrationWorkerField from './RegistrationWorkerField';

interface Props {
	className?: string;
}

export const Registration: React.FC<Props> = ({}) => {
	useAuthRedirect();
	const { isLoading } = useAuth();
	const { registration } = useActions();

	const [type, setType] = useState<'client' | 'worker'>('client');

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
		control,
		setValue,
	} = useForm<IRegisterInput>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<IRegisterInput> = data => {
		if (data.workTime) {
			registration({ ...data, type: type, workTime: +data.workTime });
		} else {
			registration({ ...data, type: type });
		}
		reset();
	};

	return (
		<Suspense fallback={<div>Loading registration form...</div>}>
			<section className={styles.registrationContainer}>
				<form
					className={styles.registrationForm}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h2 className={styles.registrationHeader}>Регистрация</h2>
					<RegistrationChangeButton setType={setType} type={type} />
					{type === 'client' && (
						<RegistrationClientField
							setValue={setValue}
							formState={formState}
							register={registerInput}
							control={control}
							isPasswordRequired
						/>
					)}
					{type === 'worker' && (
						<RegistrationWorkerField
							setValue={setValue}
							control={control}
							formState={formState}
							register={registerInput}
							isPasswordRequired
						/>
					)}

					<ActiveRegistrationButtons isLoading={isLoading} />
					<div className={styles.line}></div>
				</form>
			</section>
		</Suspense>
	);
};
