const fs = require('fs');
const path = require('path');

function fixUnescapedEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix single quotes (apostrophes) in JSX text content - must be between > and <
    const singleQuotePattern = />([^<]*?)'([^<]*?)</g;
    let match;
    while ((match = singleQuotePattern.exec(content)) !== null) {
      const beforeQuote = match[1];
      const afterQuote = match[2];
      
      // Skip if it's already escaped or is a specific pattern we want to preserve
      if (!beforeQuote.includes('&apos;') && !beforeQuote.includes('&#39;')) {
        const newContent = `>${beforeQuote}&apos;${afterQuote}<`;
        content = content.replace(match[0], newContent);
        modified = true;
      }
    }

    // Fix double quotes in JSX text content - must be between > and <
    const doubleQuotePattern = />([^<]*?)"([^<]*?)</g;
    content = content.replace(doubleQuotePattern, (match, before, after) => {
      // Skip if it's already escaped or in attributes
      if (before.includes('&quot;') || before.includes('&#34;')) return match;
      return `>${before}&quot;${after}<`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function walk(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

// Find all .tsx files in src directory
const srcDir = path.join(__dirname, 'src');
const tsxFiles = findTsxFiles(srcDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixUnescapedEntities(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);