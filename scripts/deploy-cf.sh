#!/usr/bin/env bash
# 构建 Cloudflare Pages 版本（根路径，无 basePath）并直接上传
# 用法：npm run deploy:cf
set -euo pipefail
cd "$(dirname "$0")/.."

export NEXT_PUBLIC_SITE_URL=https://ziwei.139t.cn

npm run build

npx wrangler pages deploy out \
  --project-name ziwei-doushu \
  --branch main \
  --commit-dirty=true

echo "✅ 已发布：https://ziwei.139t.cn/"
