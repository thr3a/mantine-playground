/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: process.env.GITHUB_ACTIONS && '/mantine-cheatsheets',
  trailingSlash: true,
};

// module.exports = nextConfig;
export default nextConfig;
