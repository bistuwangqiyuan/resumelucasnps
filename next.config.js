/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // For Netlify static export
        remotePatterns: [],
    },
};

module.exports = nextConfig;
