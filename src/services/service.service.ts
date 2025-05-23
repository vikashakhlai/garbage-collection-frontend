import axios, { axiosClassic } from '@/api/interceptors';
import { getServicesUrl } from '@/config/api.config';
import { ICreateService, IService } from '@/types/service.type';

export const ServiceService = {
	async getAllServices() {
		return axiosClassic.get<IService[]>(getServicesUrl(''));
	},
	async getServices() {
		return axios.get<IService[]>(getServicesUrl(''));
	},
	async createService(data: ICreateService) {
		return axios.post(getServicesUrl(''), data);
	},
};
