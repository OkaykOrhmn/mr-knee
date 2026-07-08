import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.70.176",'10.28.118.229'],
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.blob.vercel-storage.com',   // matches any subdomain
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
