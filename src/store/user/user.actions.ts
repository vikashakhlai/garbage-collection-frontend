import { errorCatch } from '@/api/api.helpers';
import { AuthService } from '@/services/auth/auth.service';
import { toastError } from '@/utils/toast-error';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';
import {
	IAuthResponse,
	IDataRegister,
	IPhoneTypePassword,
} from './user.interface';

//registration

export const registration = createAsyncThunk<IAuthResponse, IDataRegister>(
	'/auth/register',
	async (dto: IDataRegister, thunkApi) => {
		try {
			const response = await AuthService.register(dto);
			toastr.success('Регистрация', 'Успешная регистрация');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

//login
export const login = createAsyncThunk<IAuthResponse, IPhoneTypePassword>(
	'/auth/login',
	async ({ type, phone, password }, thunkApi) => {
		try {
			const response = await AuthService.login(type, phone, password);
			toastr.success('Вход', 'Успешный вход');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);

//logout
export const logout = createAsyncThunk('/auth/logout', async () => {
	await AuthService.logout();
});

//refresh
export const checkAuth = createAsyncThunk<IAuthResponse, IPhoneTypePassword>(
	'/auth/login/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === 'Нет токена') {
				toastError('Выход', 'Авторизация окончена, авторизуйтесь заново');
				thunkApi.dispatch(logout());
			}
			return thunkApi.rejectWithValue(error);
		}
	}
);
