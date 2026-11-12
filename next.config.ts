import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1yei2z3i6k35z.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
