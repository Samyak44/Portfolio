/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: process.env.DEPLOY_ENV === 'gh-pages' ? '/Portfolio' : '',
  images: {
    unoptimized: true,
  },
  turbopack: {},
  webpack: (config, { isServer }) => {
    // Ensure React is resolved as a singleton to prevent multiple instances
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      };
    }
    return config;
  },
}

module.exports = nextConfig
