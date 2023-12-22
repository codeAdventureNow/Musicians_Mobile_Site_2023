/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-media2.fl.yelpcdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
