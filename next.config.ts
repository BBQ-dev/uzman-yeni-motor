import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Bagajı hafifleten komut
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;