const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/registration', // Redirect the root URL to /registration
        permanent: true, // Set to true if you want a permanent (301) redirect
      },
    ];
  },
};

module.exports = nextConfig;
