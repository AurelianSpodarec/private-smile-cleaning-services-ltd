// Import dotenv
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config({ path: '/var/www/smile-cleaning/staging/shared/.env' });

// Your existing Next.js config
/** @type {import('next').NextConfig} */
const nextConfig = {
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
