import { getContentType } from '@/api/api.helpers';
import { axiosClassic } from '@/api/interceptors';
import { getAuthUrl } from '@/config/api.config';
import { IAuthResponse, IDataRegister } from '@/store/user/user.interface';
import Cookies from 'js-cookie';
import {
	removesTokensStorage,
	saveTokensStorage,
	saveToStorage,
} from './auth.helper';

export const AuthService = {
	async login(type: string, password: string, phone: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('login'),
			{ password, phone, type }
		);
		if (response.data.accessToken) saveToStorage(response.data);

		return response;
	},
	async logout() {
		removesTokensStorage();
		localStorage.removeItem('user');
	},

	async register(data: IDataRegister) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('register'),
			data
		);

		if (response.data.accessToken) {
			saveToStorage(response.data);
			const data = {
				accessToken: response.data.accessToken,
				refreshToken: response.data.refreshToken,
			};
			saveTokensStorage(data);
		}

		return response;
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken');
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		);
		if (response.data.accessToken) saveToStorage(response.data);

		return response;
	},
};
