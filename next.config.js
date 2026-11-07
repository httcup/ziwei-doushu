/** @type {import('next').NextConfig} */
// 静态导出：产物在 out/，可直接托管到 GitHub Pages / Cloudflare Pages
// GitHub Pages 部署在子路径（/ziwei-doushu）时设置 NEXT_PUBLIC_BASE_PATH=/ziwei-doushu
// Cloudflare Pages / 本地开发不设置，站点位于根路径
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  transpilePackages: ['lunar-javascript'],
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

module.exports = nextConfig;
