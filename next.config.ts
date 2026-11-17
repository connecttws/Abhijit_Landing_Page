import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    deviceSizes: [360, 480, 640, 750, 800],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1yei2z3i6k35z.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
