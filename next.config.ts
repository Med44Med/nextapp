import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/bacup-9d661.appspot.com/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ]
  },
};

export default nextConfig;
