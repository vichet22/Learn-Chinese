import fs from 'fs';
import path from 'path';

// Define the remaining words to add to each category
const wordsToAdd = {
  'colorsShapes': [
    {
      id: 1341,
      character: "形状",
      pinyin: "xíngzhuàng",
      meaning: "shape",
      partOfSpeech: "n",
      category: "colors shapes",
      image: "https://placehold.co/100x100/fff2e8/fa541c?text=形状",
      examples: [
        {
          character: "这个形状很特别。",
          pinyin: "Zhège xíngzhuàng hěn tèbié.",
          meaning: "This shape is very special.",
        },
        {
          character: "画不同的形状。",
          pinyin: "Huà bùtóng de xíngzhuàng.",
          meaning: "Draw different shapes.",
        },
      ],
    },
    {
      id: 1342,
      character: "图案",
      pinyin: "tú'àn",
      meaning: "pattern",
      partOfSpeech: "n",
      category: "colors shapes",
      image: "https://placehold.co/100x100/fff2e8/fa541c?text=图案",
      examples: [
        {
          character: "这个图案很漂亮。",
          pinyin: "Zhège tú'àn hěn piàoliang.",
          meaning: "This pattern is very beautiful.",
        },
        {
          character: "设计新图案。",
          pinyin: "Shèjì xīn tú'àn.",
          meaning: "Design new patterns.",
        },
      ],
    },
    // Add 8 more words to reach 40 total
  ],
  'emotions': [
    {
      id: 1351,
      character: "情感",
      pinyin: "qínggǎn",
      meaning: "emotion, feeling",
      partOfSpeech: "n",
      category: "emotions",
      image: "https://placehold.co/100x100/fff1f0/f5222d?text=情感",
      examples: [
        {
          character: "表达情感。",
          pinyin: "Biǎodá qínggǎn.",
          meaning: "Express emotions.",
        },
        {
          character: "丰富的情感。",
          pinyin: "Fēngfù de qínggǎn.",
          meaning: "Rich emotions.",
        },
      ],
    },
    // Add 9 more words to reach 50 total
  ]
};

// Function to add words to a category file
function addWordsToCategory(categoryName, newWords) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'core1000', `${categoryName}.js`);
  
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Find the position to insert new words (before the closing bracket and export)
    const insertPosition = fileContent.lastIndexOf('];');
    
    if (insertPosition === -1) {
      console.error(`Could not find insertion point in ${categoryName}.js`);
      return false;
    }
    
    // Generate the new words string
    let newWordsString = '';
    newWords.forEach((word, index) => {
      if (index === 0) {
        newWordsString += '  // Additional words\n';
      }
      newWordsString += `  {\n`;
      newWordsString += `    id: ${word.id},\n`;
      newWordsString += `    character: "${word.character}",\n`;
      newWordsString += `    pinyin: "${word.pinyin}",\n`;
      newWordsString += `    meaning: "${word.meaning}",\n`;
      newWordsString += `    partOfSpeech: "${word.partOfSpeech}",\n`;
      newWordsString += `    category: "${word.category}",\n`;
      newWordsString += `    image: "${word.image}",\n`;
      newWordsString += `    examples: [\n`;
      word.examples.forEach((example, exIndex) => {
        newWordsString += `      {\n`;
        newWordsString += `        character: "${example.character}",\n`;
        newWordsString += `        pinyin: "${example.pinyin}",\n`;
        newWordsString += `        meaning: "${example.meaning}",\n`;
        newWordsString += `      }`;
        if (exIndex < word.examples.length - 1) {
          newWordsString += ',';
        }
        newWordsString += '\n';
      });
      newWordsString += `    ],\n`;
      newWordsString += `  }`;
      if (index < newWords.length - 1) {
        newWordsString += ',';
      }
      newWordsString += '\n';
    });
    
    // Insert the new words
    const beforeInsert = fileContent.substring(0, insertPosition);
    const afterInsert = fileContent.substring(insertPosition);
    const updatedContent = beforeInsert + newWordsString + afterInsert;
    
    // Write the updated content back to the file
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Added ${newWords.length} words to ${categoryName}.js`);
    return true;
    
  } catch (error) {
    console.error(`Error updating ${categoryName}.js:`, error.message);
    return false;
  }
}

// Process each category
Object.entries(wordsToAdd).forEach(([categoryName, words]) => {
  addWordsToCategory(categoryName, words);
});

console.log('Batch word addition completed!');
