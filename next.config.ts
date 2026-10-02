import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/blog", destination: "/projects", permanent: true },
      { source: "/blog/:path*", destination: "/projects", permanent: true },
      { source: "/research", destination: "/projects", permanent: true },
      { source: "/services", destination: "/about", permanent: true },
      { source: "/startup", destination: "/projects", permanent: true },
      { source: "/contact", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
