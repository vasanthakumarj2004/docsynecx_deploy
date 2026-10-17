/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'localhost',
    'localhost:3000',
    'localhost:3001',
    '127.0.0.1',
    '127.0.0.1:3000',
    '127.0.0.1:3001',
    '192.168.0.13',
    '192.168.0.13:3000',
    '192.168.0.13:3001',
    '192.168.47.49',
    '192.168.47.49:3000',
    '192.168.47.49:3001',
    '100.97.139.98',
    '100.97.139.98:3000',
    '100.97.139.98:3001',
  ],
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
