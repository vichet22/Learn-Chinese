import fs from 'fs';
import path from 'path';

// Define the path to the core1000 directory
const core1000Dir = path.join(process.cwd(), 'src', 'data', 'core1000');

// Function to count words in a file
function countWordsInFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    // Count occurrences of "id:" in the file
    const matches = fileContent.match(/id:/g);
    return matches ? matches.length : 0;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return 0;
  }
}

// Get all JavaScript files in the core1000 directory
try {
  const files = fs.readdirSync(core1000Dir).filter(file => file.endsWith('.js') && file !== 'index.js' && file !== 'countWords.js');
  
  let totalWords = 0;
  
  // Count words in each file
  files.forEach(file => {
    const filePath = path.join(core1000Dir, file);
    const wordCount = countWordsInFile(filePath);
    totalWords += wordCount;
    
    // Extract category name from filename
    const categoryName = file.replace('.js', '').replace(/([A-Z])/g, ' $1').trim();
    console.log(`${categoryName}: ${wordCount} words`);
  });
  
  console.log(`\nTotal words: ${totalWords}`);
  console.log(`Words needed to reach 1000: ${1000 - totalWords}`);
} catch (error) {
  console.error('Error reading directory:', error.message);
}
