// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
        port: "",
        //   pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
        port: "",
        //   pathname: '/**',
      },
    ],
  },
};

export default withPlaiceholder(config);