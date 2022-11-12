/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://staging.api.tweevest.com",
  },
};

module.exports = nextConfig;
