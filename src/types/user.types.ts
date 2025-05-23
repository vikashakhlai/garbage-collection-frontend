export interface IUser {
	id: number;
	createdAt: string;
	updatedAt: string;
	firstName: string;
	lastName: string;
	middleName: string;
	phone: string;
	role: string;
	gender: string;
	type: string;
	workerType?: string;
	lastWork?: string;
	workTime?: string;
	isConfirmDriver?: boolean;
	licenseImage?: string;
	password?: string | undefined;
}
