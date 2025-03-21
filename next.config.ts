import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Иногда Unsplash хранит изображения на этом поддомене
      }
    ],
  },
};

export default nextConfig;
