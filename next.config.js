/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */

const nextConfig = {
  reactStrictMode: false,

  // Puppeteer/Chromium 相关包不进行 bundle（Vercel serverless 需要）
  serverExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],

  // 👇 移除了 turbopack 配置（@svgr/webpack 在 Turbopack 下兼容性差）
  // 👇 移除了 output: 'standalone'（Vercel 不需要，反而可能出问题）

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
