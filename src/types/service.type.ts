export interface IService {
	id: number;
	createAt?: Date;
	updateAt?: Date;
	name: string;
	description: string;
	image: string;
	workerType: string;
	price: number;
}

export interface ICreateService {
	name: string;
	description: string;
	image: string;
	workerType: string;
	price: number;
}
