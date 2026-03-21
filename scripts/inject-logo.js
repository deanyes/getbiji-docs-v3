import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { resolve, join, relative, dirname } from 'path';
import { pathToFileURL } from 'url';

const outDir = resolve('out');

// P0-fix#1: 用动态 import 替代字符串匹配解析配置
let config;
try {
  const configPath = pathToFileURL(resolve('tome.config.js')).href;
  config = (await import(configPath)).default;
} catch (e) {
  // P2-fix#6: 错误不再静默吞掉
  console.error('Failed to load tome.config.js:', e.message);
  process.exit(1);
}

const showLogo = config.showLogo !== false;
// P0-fix#2: 从配置读取 accent 颜色，不再硬编码
const accentColor = config.theme?.accent || '#1a1a1a';
// 从配置读取 basePath，用于修正侧边栏链接
const basePath = config.basePath || '/';

if (!showLogo) {
  console.log('Logo disabled.');
  process.exit(0);
}

if (!existsSync(join(outDir, 'logo.svg'))) {
  console.log('No logo.svg found.');
  process.exit(0);
}

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...findHtmlFiles(full));
    } else if (entry.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

// 根据 HTML 文件相对 outDir 的深度，计算 logo.svg 的相对路径
function getLogoRelPath(htmlFile) {
  const dir = dirname(relative(outDir, htmlFile));
  if (dir === '.') return './logo.svg';
  const depth = dir.split('/').length;
  return '../'.repeat(depth) + 'logo.svg';
}

function buildSnippet(logoRelPath) {
  return `
<style>
  :root {
    --ac: ${accentColor} !important;
  }
  /* Tome sidebar: aside > a[href="/"] 是站点标题链接（无 class，纯 inline style） */
  aside > a[href="/"] {
    display: flex !important;
    align-items: center !important;
    gap: 8px !important;
  }
  .tome-site-logo {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 4px;
  }
</style>
<script>
  (function() {
    var accentColor = ${JSON.stringify(accentColor)};
    var basePath = ${JSON.stringify(basePath)};

    // P1-fix#3: 用 MutationObserver 替代 setInterval(50ms)，只在变化时修正
    function applyAccent() {
      document.documentElement.style.setProperty('--ac', accentColor, 'important');
    }
    applyAccent();

    // 构建时已根据文件深度计算好相对路径，不再依赖运行时 getBasePath()
    var logoUrl = new URL(${JSON.stringify(logoRelPath)}, document.baseURI).href;

    function findSidebarLink() {
      return document.querySelector('aside a[href]');
    }

    // 修正侧边栏顶部链接的 href，从 '/' 改成 basePath
    function fixSidebarLink() {
      if (basePath === '/') return;
      var link = document.querySelector('aside > a[href="/"]');
      if (link) {
        link.setAttribute('href', basePath);
      }
    }

    function injectLogo() {
      var link = findSidebarLink();
      if (!link || link.querySelector('.tome-site-logo')) return;
      link.classList.add('tome-site-name-link');
      var img = document.createElement('img');
      img.src = logoUrl;
      img.alt = 'Logo';
      img.className = 'tome-site-logo';
      link.prepend(img);
    }

    // 单一 MutationObserver 同时处理 accent 颜色修正、logo 注入和侧边栏链接修正
    new MutationObserver(function() {
      applyAccent();
      injectLogo();
      fixSidebarLink();
    }).observe(document.documentElement, { childList: true, subtree: true });

    // 首次尝试注入（DOM 可能已就绪）
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() { injectLogo(); fixSidebarLink(); });
    } else {
      injectLogo();
      fixSidebarLink();
    }
  })();
</script>
`;
}

const htmlFiles = findHtmlFiles(outDir);
let count = 0;
for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf-8');
  if (html.includes('tome-site-logo')) continue;
  const logoRelPath = getLogoRelPath(file);
  const snippet = buildSnippet(logoRelPath);
  html = html.replace('</head>', snippet + '</head>');
  writeFileSync(file, html, 'utf-8');
  count++;
}
console.log('Injected logo into ' + count + ' HTML files.');
