'use client';

import { License } from '@/components/license/License';
import { useUserById } from '@/hooks/user/useUserById';
import { useParams } from 'next/navigation';

export default function LicensePage() {
	const params = useParams();
	const id = params.id;

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const { data } = useUserById(id);

	return <License data={data ? data : null} />;
}
