import type { NextConfig } from 'next';

// Static site (no server needed): `next build` writes everything to out/, ready for Vercel, GitHub Pages, etc.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
