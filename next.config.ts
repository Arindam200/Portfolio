// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/**
 * @type {import('next').NextConfig}
 */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "cdn.hashnode.com",
        port: "",
      },
      {
        protocol: "https" as const,
        hostname: "dev-to-uploads.s3.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default withPlaiceholder(config);
