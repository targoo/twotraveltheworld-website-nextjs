import createMDX from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import { withPigment } from '@pigment-css/nextjs-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withNextIntl(withPigment(withMDX(nextConfig)));
