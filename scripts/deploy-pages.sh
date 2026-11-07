#!/usr/bin/env bash
# 构建 GitHub Pages 版本并发布到 gh-pages 分支
# 用法：npm run deploy:pages
set -euo pipefail
cd "$(dirname "$0")/.."

REMOTE="${REMOTE:-https://github.com/httcup/ziwei-doushu.git}"

export NEXT_PUBLIC_BASE_PATH=/ziwei-doushu
export NEXT_PUBLIC_SITE_URL=https://httcup.github.io/ziwei-doushu

npm run build

cd out
touch .nojekyll            # Pages 默认走 Jekyll，_next 下划线目录会被忽略
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name=httcup -c user.email=htt@163.com commit -qm "deploy: GitHub Pages $(date '+%Y-%m-%d %H:%M')"
git push -f "$REMOTE" gh-pages
echo "✅ 已发布：https://httcup.github.io/ziwei-doushu/"
