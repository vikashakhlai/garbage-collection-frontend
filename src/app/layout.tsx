import Layout from '@/components/layout/Layout';
import { TypeComponentAuthFields } from '@/providers/AuthProvider/auth.types';
import { MainProvider } from '@/providers/MainProvider';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
} & TypeComponentAuthFields) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<MainProvider>
					<Layout>{children}</Layout>
				</MainProvider>
			</body>
		</html>
	);
}
