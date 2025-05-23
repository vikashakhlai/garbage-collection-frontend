export interface ILoginInput {
	phone: string;
	password: string;
}

export interface IRegisterInput {
	firstName: string;
	lastName: string;
	middleName: string;
	phone: string;
	gender: string;
	password: string;
	type: string;
	workerType?: string;
	lastWork?: string;
	workTime?: number;
}
