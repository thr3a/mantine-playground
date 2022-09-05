/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && '/mantine-playground',
  trailingSlash: true,
};

module.exports = nextConfig;
