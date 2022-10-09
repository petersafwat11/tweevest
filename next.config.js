/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL:"https://staging.api.tweevest.com",
    USERNAME: "tweevest-nextjs-server",
    PASSWORD: "vbpx8divic#caq*28y354c&wjhhzvx6t"
  },
}

module.exports = nextConfig
