'use client';

import { useAuth } from '@/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const { user, isLoading } = useAuth();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (isLoading) return;

		if (!user && pathname?.startsWith('/dashboard')) {
			router.replace('/login');
		}
	}, [user, isLoading, pathname, router]);

	return <>{children}</>;
};
