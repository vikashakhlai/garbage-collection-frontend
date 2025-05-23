import { NextPage } from 'next';

export type TypeRoles = {
	isOnlyAdmin?: boolean;
	isOnlyUser?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles;

export type TypeComponentAuthFields = {
	children: React.ReactNode;
	Component?: {
		isOnlyUser?: boolean;
		isOnlyAdmin?: boolean;
	};
};
