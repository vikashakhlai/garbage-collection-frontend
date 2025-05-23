import { API_URL } from '@/config/api.config';
import { removesTokensStorage } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';
import axios from 'axios';
import Cookies from 'js-cookie';
import { errorCatch, getContentType } from './api.helpers';

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken');

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`;
	return config;
});

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;

		if (
			(error.response.status == 401 ||
				errorCatch(error) === 'Нет токена' ||
				errorCatch(error) === 'Токен не является строкой!') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await AuthService.getNewTokens();
				return instance.request(originalRequest);
			} catch (err) {
				if (errorCatch(err) === 'Нет токена') removesTokensStorage();
			}
		}
		throw error;
	}
);

export default instance;
