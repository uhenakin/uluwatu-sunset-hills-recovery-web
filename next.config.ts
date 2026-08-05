import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.1.106",
    "192.168.1.106:3001",
    "http://192.168.1.106:3001",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;