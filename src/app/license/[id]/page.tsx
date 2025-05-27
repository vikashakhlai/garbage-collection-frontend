'use client';

import { License } from '@/components/license/License';
import { useUserById } from '@/hooks/user/useUserById';
import { useParams } from 'next/navigation';

export default function LicensePage() {
	const params = useParams();
	const id = params.id;
	console.log(id);
	const { data } = useUserById(id);

	return <License data={data ? data : null} />;
}
