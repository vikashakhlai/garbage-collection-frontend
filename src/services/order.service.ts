import axios from '@/api/interceptors';
import { getOrdersUrl } from '@/config/api.config';
import { ICreateOrder, IOrder } from '@/types/order.types';

export const OrderService = {
	async getOrders() {
		return axios.get<IOrder[]>(getOrdersUrl(''));
	},
	async getWorkerProcessedOrders() {
		return axios.get<IOrder[]>(getOrdersUrl('worker/process'));
	},
	async getActiveOrders() {
		return axios.get<IOrder[]>(getOrdersUrl('active'));
	},
	async getUserOrders() {
		return axios.get<IOrder[]>(getOrdersUrl('user'));
	},

	async getUserActiveOrders() {
		return axios.get<IOrder[]>(getOrdersUrl('user/active'));
	},
	async getAllOrders() {
		return axios.get<IOrder[]>(getOrdersUrl(''));
	},

	async createOrder(data: ICreateOrder) {
		return axios.post(getOrdersUrl(''), data);
	},
	async completeOrder(orderId: number) {
		return axios.patch(getOrdersUrl(`complete-order/${orderId}`));
	},
	async pendingOrder(orderId: number) {
		return axios.patch(getOrdersUrl(`pending/${orderId}`));
	},
	async confirmOrder(orderId: number) {
		return axios.patch(getOrdersUrl(`confirm-order/${orderId}`));
	},
	async unCheckOrder(orderId: number) {
		return axios.patch(getOrdersUrl(`uncheck-order/${orderId}`));
	},
	async deleteOrder(id: number) {
		return axios.delete(getOrdersUrl(`${id}`));
	},
};
