// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.hashnode.com',
          port: '',
        //   pathname: '/account123/**',
        },
      ],
    },
}