/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'js', 'ts', 'tsx', 'route.tsx', 'route.ts', 'css'],
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
