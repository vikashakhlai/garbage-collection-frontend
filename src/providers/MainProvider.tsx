'use client';

import { store } from '@/store/store';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { TypeComponentAuthFields } from './AuthProvider/auth.types';

import { AuthProvider } from './AuthProvider/AuthProvider';
import ReduxToast from './ReduxToast';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export const MainProvider: React.FC<TypeComponentAuthFields> = ({
	children,
}) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReduxToast />
				<AuthProvider>{children}</AuthProvider>
			</QueryClientProvider>
		</Provider>
	);
};
