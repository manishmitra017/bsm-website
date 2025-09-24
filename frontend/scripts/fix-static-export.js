#!/usr/bin/env node
/**
 * Post-build script to fix Next.js static export directory structure issues
 *
 * Problem: Next.js creates both page.html and page/ directory for routes with assets
 * Solution: Copy page.html to page/index.html for proper static hosting
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

// Pages that need directory index.html files
const pagesWithDirectories = [
  'sponsorship',
  // Add other pages here if they have similar issues
];

console.log('🔧 Fixing static export directory structure...');

pagesWithDirectories.forEach(pageName => {
  const htmlFile = path.join(outDir, `${pageName}.html`);
  const dirPath = path.join(outDir, pageName);
  const indexFile = path.join(dirPath, 'index.html');

  if (fs.existsSync(htmlFile) && fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory()) {
    if (!fs.existsSync(indexFile)) {
      fs.copyFileSync(htmlFile, indexFile);
      console.log(`✅ Created ${pageName}/index.html`);
    } else {
      console.log(`⏭️  ${pageName}/index.html already exists`);
    }
  } else {
    console.log(`⚠️  Skipping ${pageName} - missing files or directory`);
  }
});

console.log('✨ Static export structure fixed!');