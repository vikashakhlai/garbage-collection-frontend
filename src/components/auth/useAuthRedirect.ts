'use client';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAuthRedirect = () => {
	const { user } = useAuth();
	const router = useRouter();
	// const searchParams = useSearchParams();
	// const redirect = searchParams.get('redirect') || '/profile';
	const redirect =
		typeof window !== 'undefined'
			? new URLSearchParams(window.location.search).get('redirect') ||
			  '/profile'
			: '/profile';

	useEffect(() => {
		if (user) router.push(redirect);
	}, [user, redirect, router]);
};
