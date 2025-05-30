/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from '@/types/user.types';

export interface IUserState {
	phone: string;
	type: string;
	role: string;
	workerType: string | null;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IInitialState {
	user: IUserState | null | any;
	isLoading: boolean;
}

export interface IPhoneTypePassword {
	phone: string;
	type: string;
	password: string;
}

export interface IDataRegister {
	firstName: string;
	lastName: string;
	middleName: string;
	phone: string;
	gender: string;
	age: number;
	password: string;
	type: string;
	workerType?: string;
	lastWork?: string;
	workTime?: number;
	dimensions?: number;
}

export interface IAuthResponse extends ITokens {
	user: IUser;
}
