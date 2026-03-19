#!/bin/bash
# 构建并修复 Tome 的 basePath bug

set -e

echo "🔨 Building..."
npm run build

echo "🔧 Fixing paths for GitHub Pages subpath..."
# 修复 logo 链接：href:"/" -> href:"/getbiji-docs-v3/"
sed -i '' 's|href:"/"|href:"/getbiji-docs-v3/"|g' out/assets/index-*.js

# 修复所有 JS 文件中的图片路径
for f in out/assets/*.js; do
  sed -i '' 's|/images/|/getbiji-docs-v3/images/|g' "$f"
done

echo "✅ Build complete! Ready to deploy."
echo ""
echo "To deploy, run:"
echo "  npx gh-pages -d out"
