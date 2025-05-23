'use client';

import { useAuth } from '@/hooks/useAuth';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProtectedPage({
	children,
	role = 'user',
}: {
	children: React.ReactNode;
	role?: 'user' | 'admin';
}) {
	const { user } = useAuth();
	const router = useRouter();
	const pathname = usePathname();
	const [isClient, setIsClient] = useState(false);
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const [redirectPath, setRedirectPath] = useState('');

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient) return;

		if (role !== 'admin' && role !== 'user') return;

		// Проверка для админа
		if (role === 'admin' && user?.role !== 'admin') {
			setRedirectPath('/404');
			setShouldRedirect(true);
			return;
		}

		// Проверка для пользователя
		if (role === 'user' && !user) {
			setRedirectPath('/login');
			setShouldRedirect(true);
		}
	}, [isClient, user, role, pathname]);

	useEffect(() => {
		if (shouldRedirect && redirectPath && pathname !== redirectPath) {
			router.replace(redirectPath);
		}
	}, [shouldRedirect, redirectPath, pathname, router]);

	if (!isClient) {
		return null;
	}

	if (role !== 'admin' && role !== 'user') {
		return <>{children}</>;
	}

	if (role === 'admin' && user?.role === 'admin') {
		return <>{children}</>;
	}

	if (role === 'user' && user) {
		return <>{children}</>;
	}

	return null;
}
