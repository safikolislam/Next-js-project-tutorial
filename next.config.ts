import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'www.gurufocus.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.who.int',
        pathname: '/**',
      },
    
    ],
  },
};

export default nextConfig;
