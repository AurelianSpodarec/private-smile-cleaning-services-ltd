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
