/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'garbage-collection-backend.onrender.com',
				port: '',
				pathname: '/**', // Разрешаем абсолютно все пути
			},
		],
	},
	reactStrictMode: false,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://garbage-collection.netlify.app/api/:path*',
			},
			// {
			// 	source: '/api/:path*',
			// 	destination: 'http://localhost:4200/api/:path*',
			// },
			{
				source: '/uploads/:path*',
				destination: 'https://garbage-collection.netlify.app/uploads/:path*',
			},
			// {
			// 	source: '/uploads/:path*',
			// 	destination: 'http://localhost:4200/uploads/:path*',
			// },
		];
	},
};

module.exports = nextConfig;
