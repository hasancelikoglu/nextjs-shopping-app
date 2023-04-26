/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["static.nike.com"],
	},
};

module.exports = nextConfig;
