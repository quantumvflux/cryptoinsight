/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ hostname: "assets.coingecko.com" }],
  },
};

module.exports = nextConfig;
