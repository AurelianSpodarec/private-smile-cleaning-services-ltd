// Load the correct .env file based on the environment (NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: '/var/www/smile-cleaning/production/shared/.env' });
} else {
  require('dotenv').config({ path: '/var/www/smile-cleaning/staging/shared/.env' });
}

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
  // Other Next.js configurations can be added here
};

export default nextConfig;
