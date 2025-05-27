import fs from 'fs';
import path from 'path';

// Define the final words to add to reach exactly 1000 words
const finalWords = {
  family: [
    { id: 351, character: "亲戚", pinyin: "qīnqi", meaning: "relatives", partOfSpeech: "n", category: "family" },
    { id: 352, character: "家庭", pinyin: "jiātíng", meaning: "family", partOfSpeech: "n", category: "family" },
    { id: 353, character: "血缘", pinyin: "xuèyuán", meaning: "blood relation", partOfSpeech: "n", category: "family" },
    { id: 354, character: "传统", pinyin: "chuántǒng", meaning: "tradition", partOfSpeech: "n", category: "family" },
    { id: 355, character: "团聚", pinyin: "tuánjù", meaning: "reunion", partOfSpeech: "n/v", category: "family" },
    { id: 356, character: "关爱", pinyin: "guān'ài", meaning: "care", partOfSpeech: "n/v", category: "family" },
    { id: 357, character: "责任", pinyin: "zérèn", meaning: "responsibility", partOfSpeech: "n", category: "family" },
    { id: 358, character: "孝顺", pinyin: "xiàoshùn", meaning: "filial piety", partOfSpeech: "adj/v", category: "family" },
    { id: 359, character: "教育", pinyin: "jiàoyù", meaning: "education", partOfSpeech: "n/v", category: "family" },
    { id: 360, character: "陪伴", pinyin: "péibàn", meaning: "accompany", partOfSpeech: "v", category: "family" }
  ],
  nature: [
    { id: 651, character: "生态", pinyin: "shēngtài", meaning: "ecology", partOfSpeech: "n", category: "nature" },
    { id: 652, character: "环境", pinyin: "huánjìng", meaning: "environment", partOfSpeech: "n", category: "nature" },
    { id: 653, character: "保护", pinyin: "bǎohù", meaning: "protect", partOfSpeech: "v", category: "nature" },
    { id: 654, character: "污染", pinyin: "wūrǎn", meaning: "pollution", partOfSpeech: "n/v", category: "nature" },
    { id: 655, character: "气候", pinyin: "qìhòu", meaning: "climate", partOfSpeech: "n", category: "nature" },
    { id: 656, character: "季节", pinyin: "jìjié", meaning: "season", partOfSpeech: "n", category: "nature" },
    { id: 657, character: "野生", pinyin: "yěshēng", meaning: "wild", partOfSpeech: "adj", category: "nature" },
    { id: 658, character: "栖息", pinyin: "qīxī", meaning: "habitat", partOfSpeech: "n/v", category: "nature" },
    { id: 659, character: "繁殖", pinyin: "fánzhí", meaning: "reproduce", partOfSpeech: "v", category: "nature" },
    { id: 660, character: "灭绝", pinyin: "mièjué", meaning: "extinction", partOfSpeech: "n/v", category: "nature" }
  ],
  dailyLife: [
    { id: 151, character: "习惯", pinyin: "xíguàn", meaning: "habit", partOfSpeech: "n", category: "daily life" },
    { id: 152, character: "生活", pinyin: "shēnghuó", meaning: "life", partOfSpeech: "n/v", category: "daily life" },
    { id: 153, character: "日常", pinyin: "rìcháng", meaning: "daily", partOfSpeech: "adj", category: "daily life" },
    { id: 154, character: "作息", pinyin: "zuòxī", meaning: "schedule", partOfSpeech: "n", category: "daily life" },
    { id: 155, character: "规律", pinyin: "guīlǜ", meaning: "regular", partOfSpeech: "adj/n", category: "daily life" },
    { id: 156, character: "安排", pinyin: "ānpái", meaning: "arrange", partOfSpeech: "v/n", category: "daily life" },
    { id: 157, character: "计划", pinyin: "jìhuà", meaning: "plan", partOfSpeech: "n/v", category: "daily life" },
    { id: 158, character: "准备", pinyin: "zhǔnbèi", meaning: "prepare", partOfSpeech: "v", category: "daily life" },
    { id: 159, character: "完成", pinyin: "wánchéng", meaning: "complete", partOfSpeech: "v", category: "daily life" },
    { id: 160, character: "休息", pinyin: "xiūxi", meaning: "rest", partOfSpeech: "v/n", category: "daily life" }
  ],
  food: [
    { id: 251, character: "营养", pinyin: "yíngyǎng", meaning: "nutrition", partOfSpeech: "n", category: "food" },
    { id: 252, character: "健康", pinyin: "jiànkāng", meaning: "healthy", partOfSpeech: "adj", category: "food" },
    { id: 253, character: "新鲜", pinyin: "xīnxiān", meaning: "fresh", partOfSpeech: "adj", category: "food" },
    { id: 254, character: "美味", pinyin: "měiwèi", meaning: "delicious", partOfSpeech: "adj", category: "food" },
    { id: 255, character: "口感", pinyin: "kǒugǎn", meaning: "taste", partOfSpeech: "n", category: "food" },
    { id: 256, character: "香味", pinyin: "xiāngwèi", meaning: "aroma", partOfSpeech: "n", category: "food" },
    { id: 257, character: "食材", pinyin: "shícái", meaning: "ingredients", partOfSpeech: "n", category: "food" },
    { id: 258, character: "烹饪", pinyin: "pēngrèn", meaning: "cooking", partOfSpeech: "n/v", category: "food" },
    { id: 259, character: "调料", pinyin: "tiáoliào", meaning: "seasoning", partOfSpeech: "n", category: "food" },
    { id: 260, character: "菜谱", pinyin: "càipǔ", meaning: "recipe", partOfSpeech: "n", category: "food" }
  ],
  travel: [
    { id: 751, character: "旅程", pinyin: "lǚchéng", meaning: "journey", partOfSpeech: "n", category: "travel" },
    { id: 752, character: "探索", pinyin: "tànsuò", meaning: "explore", partOfSpeech: "v", category: "travel" },
    { id: 753, character: "冒险", pinyin: "màoxiǎn", meaning: "adventure", partOfSpeech: "n/v", category: "travel" },
    { id: 754, character: "体验", pinyin: "tǐyàn", meaning: "experience", partOfSpeech: "n/v", category: "travel" },
    { id: 755, character: "文化", pinyin: "wénhuà", meaning: "culture", partOfSpeech: "n", category: "travel" },
    { id: 756, character: "风景", pinyin: "fēngjǐng", meaning: "scenery", partOfSpeech: "n", category: "travel" },
    { id: 757, character: "纪念", pinyin: "jìniàn", meaning: "commemorate", partOfSpeech: "v", category: "travel" },
    { id: 758, character: "回忆", pinyin: "huíyì", meaning: "memory", partOfSpeech: "n/v", category: "travel" },
    { id: 759, character: "放松", pinyin: "fàngsōng", meaning: "relax", partOfSpeech: "v", category: "travel" },
    { id: 760, character: "享受", pinyin: "xiǎngshòu", meaning: "enjoy", partOfSpeech: "v", category: "travel" }
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
    let newWordsString = '  // Additional words\n';
    newWords.forEach((word, index) => {
      newWordsString += `  {\n`;
      newWordsString += `    id: ${word.id},\n`;
      newWordsString += `    character: "${word.character}",\n`;
      newWordsString += `    pinyin: "${word.pinyin}",\n`;
      newWordsString += `    meaning: "${word.meaning}",\n`;
      newWordsString += `    partOfSpeech: "${word.partOfSpeech}",\n`;
      newWordsString += `    category: "${word.category}",\n`;
      newWordsString += `    image: "https://placehold.co/100x100/fff2e8/fa541c?text=${encodeURIComponent(word.character)}",\n`;
      newWordsString += `    examples: [\n`;
      newWordsString += `      {\n`;
      newWordsString += `        character: "这是${word.character}的例句。",\n`;
      newWordsString += `        pinyin: "Zhè shì ${word.pinyin} de lìjù.",\n`;
      newWordsString += `        meaning: "This is an example sentence for ${word.meaning}.",\n`;
      newWordsString += `      },\n`;
      newWordsString += `      {\n`;
      newWordsString += `        character: "我喜欢${word.character}。",\n`;
      newWordsString += `        pinyin: "Wǒ xǐhuān ${word.pinyin}.",\n`;
      newWordsString += `        meaning: "I like ${word.meaning}.",\n`;
      newWordsString += `      },\n`;
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
Object.entries(finalWords).forEach(([categoryName, words]) => {
  addWordsToCategory(categoryName, words);
});

console.log('Final batch update completed!');
