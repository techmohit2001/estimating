const fs = require('fs');
const path = require('path');

const GTM_HEAD_SCRIPT = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-54457B54');</script>
<!-- End Google Tag Manager -->`;

const GTM_BODY_NOSCRIPT = `<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54457B54"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

function findHTMLFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHTMLFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const outDir = path.join(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error('❌ Error: out directory does not exist. Please run "npm run build" first.');
  process.exit(1);
}

// Find all HTML files
const htmlFiles = findHTMLFiles(outDir);

if (htmlFiles.length === 0) {
  console.warn('⚠️  Warning: No HTML files found in out directory.');
  process.exit(0);
}

let injectedCount = 0;

htmlFiles.forEach(filePath => {
  let html = fs.readFileSync(filePath, 'utf8');
  let needsUpdate = false;

  // Check if GTM HEAD script is already injected (check for the script tag, not just GTM ID)
  const hasHeadScript = html.includes('googletagmanager.com/gtm.js?id=GTM-54457B54');
  
  // Check if GTM BODY noscript is already injected
  const hasBodyNoscript = html.includes('googletagmanager.com/ns.html?id=GTM-54457B54');

  // Inject GTM script in head (after <head> tag) if missing
  if (!hasHeadScript) {
    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head>\n${GTM_HEAD_SCRIPT}`);
      needsUpdate = true;
    } else if (html.includes('<head')) {
      // Handle <head> with attributes (e.g., <head lang="en">)
      html = html.replace(/<head([^>]*)>/, `<head$1>\n${GTM_HEAD_SCRIPT}`);
      needsUpdate = true;
    }
  }

  // Inject GTM noscript in body (after <body> tag) if missing
  if (!hasBodyNoscript && html.includes('<body')) {
    html = html.replace(/<body([^>]*)>/, `<body$1>\n${GTM_BODY_NOSCRIPT}`);
    needsUpdate = true;
  }

  if (needsUpdate) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Injected GTM into ${path.relative(outDir, filePath)}`);
    injectedCount++;
  } else {
    console.log(`✓ GTM already exists in ${path.relative(outDir, filePath)}`);
  }
});

console.log(`\n✅ GTM injection completed: ${injectedCount} files updated, ${htmlFiles.length} total files`);

