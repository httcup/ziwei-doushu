/**
 * 站点根地址。部署时在 .env.local 里配置 NEXT_PUBLIC_SITE_URL（见 .env.example）；
 * 未配置时用本机开发地址，避免 fork 部署后把 sitemap、canonical 指向别人的域名。
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

/** 只取域名部分，用于界面上展示（如分享卡底部） */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');

/**
 * 子路径前缀。GitHub Pages 项目站点部署在 /<repo> 下，构建时注入；
 * Cloudflare Pages / 本地开发为空字符串。
 * 仅用于原生 <a href> 这类不会被 Next 自动加前缀的地方。
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
