import { execSync } from "node:child_process";
import type { NextConfig } from "next";

function gitRev() {
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "local";
  }
}

const nextConfig: NextConfig = {
  output: "export",
  env: { NEXT_PUBLIC_REV: gitRev() },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
