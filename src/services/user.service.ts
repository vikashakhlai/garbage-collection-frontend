import axios from '@/api/interceptors';
import { ILicenseInput } from '@/components/user/upload-license/upload-license.interface';
import { getUsersUrl } from '@/config/api.config';
import { IUser } from '@/types/user.types';

export const UserService = {
	async getAllUsers() {
		return axios.get<IUser[]>(getUsersUrl(''), {});
	},
	async getUserProfile() {
		return axios.get<IUser>(getUsersUrl('profile'));
	},
	async addLicense(data: ILicenseInput) {
		return axios.put(getUsersUrl('license'), data);
	},
	async unConfirmDriver(driverId: number) {
		return axios.patch(getUsersUrl(`unconfirm-driver/${driverId}`));
	},
	async confirmDriver(driverId: number) {
		return axios.patch(getUsersUrl(`confirm-driver/${driverId}`));
	},
	async deleteUser(id: number) {
		return axios.delete<string>(getUsersUrl(`:${id}`));
	},
};
