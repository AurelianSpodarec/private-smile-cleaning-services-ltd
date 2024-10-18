import dotenv from 'dotenv';
import remarkGfm from 'remark-gfm';

import rehypePrism from '@mapbox/rehype-prism';
import nextMDX from '@next/mdx';

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
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
