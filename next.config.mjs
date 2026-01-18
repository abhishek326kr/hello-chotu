/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'web.cultnest.com',
            },
        ],
    },
};

export default nextConfig;
