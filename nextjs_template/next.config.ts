import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Since the repo is named example_website on GitHub, the base URL is /example_website/
  basePath: '/example_website',
  assetPrefix: '/example_website/',
};

export default nextConfig;
