import { IService } from './service.type';

export interface IOrder {
	id: number;
	createdAt?: Date;
	updatedAt?: Date;
	status: 'pending' | 'rejected' | 'processed' | 'completed';
	totalPrice: number;
	phone: string;
	date: Date;
	time: string;
	address: string;
	distance: number;
	floor: number;
	comment: string;
	servicesIds?: number[];
	userIds?: number;
	services?: [
		{
			id: number;
			service: IService;
			createAt?: Date;
			updateAt?: Date;
			orderId: number;
			serviceId: number;
		}
	];
	Worker?: {
		firstName: string;
		lastName: string;
		middleName: string;
		phone: string;
	};
}

export interface ICreateOrder {
	totalPrice: number;
	phone: string;
	date: Date;
	time: string;
	address: string;
	distance: number;
	floor: number;
	comment: string;
	servicesIds: number[];
	service?: string;
}
