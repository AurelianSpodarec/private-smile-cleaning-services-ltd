// Import dotenv
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config({ path: '/var/www/smile-cleaning/staging/shared/.env' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/account',
        destination: '/account/bookings',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
