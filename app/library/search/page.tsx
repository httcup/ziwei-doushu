/**
 * /library/search?q=xxx — 搜索结果页
 *
 * 静态导出（GitHub Pages / Cloudflare Pages）下页面无法在构建期读取
 * searchParams，故这里只留 metadata 与 Suspense 外壳，
 * 实际取参与渲染交给客户端组件 SearchClient。
 */

import { Suspense } from 'react';
import SearchClient from './SearchClient';

export const metadata = {
  title: '搜索 · 古籍原典库',
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div style={{ background: 'var(--bg-page)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--tx-3)', fontSize: '13px', letterSpacing: '0.2em' }}>
          搜索中…
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
