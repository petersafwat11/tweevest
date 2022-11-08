/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: "https://staging.api.tweevest.com",
    TOKEN: "f7129b85fb2f977b7fb5564ba064012b",
  },
};

module.exports = nextConfig;
