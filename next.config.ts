import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bim-consulting-ksa",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
