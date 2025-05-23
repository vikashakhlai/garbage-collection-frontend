import { FC } from 'react';

import logoImage from '@/assets/images/quiz.svg';

import { siteName, titleMerge } from '@/config/seo.config';
import Head from 'next/head';
import { usePathname, useSearchParams } from 'next/navigation';
import { ISeo } from './meta.interface';

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const asPath = `${pathname}${
		searchParams.toString() ? `?${searchParams.toString()}` : ''
	}`;
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp='headLine'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							// content={onlyText(description, 152)}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={titleMerge(title)} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:image' content={image || logoImage} />
						<meta property='og:site_name' content={siteName} />
						<meta
							property='og:description'
							// content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
