/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'async_hooks'];
    return config;
  },
};

export default nextConfig;
