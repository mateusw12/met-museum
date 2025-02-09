const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.metmuseum.org',
        port: '',
        pathname: '/CRDImages/**',
      },
    ],
  },
};

module.exports = nextConfig;
