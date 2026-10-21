/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // @bettercms-ai/richtext ships TypeScript source
  transpilePackages: ['@bettercms-ai/richtext'],
  // @bettercms-ai/sdk lazily imports these Node modules on server-only paths; the browser bundle never reaches them
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback = { ...config.resolve.fallback, "dns/promises": false, "fs/promises": false }
    return config
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
