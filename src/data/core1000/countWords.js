// Count words in each category
import basicWords from './basicWords.js';
import dailyLifeWords from './dailyLife.js';
import foodWords from './food.js';
import travelWords from './travel.js';
import educationWords from './education.js';
import healthWords from './health.js';
import familyWords from './family.js';
import natureWords from './nature.js';
import shoppingWords from './shopping.js';
import numbersAndColors from './numbers.js';
import entertainmentWords from './entertainment.js';

// Count words in each category
const basicCount = basicWords.length;
const dailyLifeCount = dailyLifeWords.length;
const foodCount = foodWords.length;
const travelCount = travelWords.length;
const educationCount = educationWords.length;
const healthCount = healthWords.length;
const familyCount = familyWords.length;
const natureCount = natureWords.length;
const shoppingCount = shoppingWords.length;
const numbersCount = numbersAndColors.length;
const entertainmentCount = entertainmentWords.length;

// Calculate total
const totalCount = basicCount + dailyLifeCount + foodCount + travelCount + 
                  educationCount + healthCount + familyCount + natureCount + 
                  shoppingCount + numbersCount + entertainmentCount;

// Log counts
console.log('Basic Words:', basicCount);
console.log('Daily Life Words:', dailyLifeCount);
console.log('Food Words:', foodCount);
console.log('Travel Words:', travelCount);
console.log('Education Words:', educationCount);
console.log('Health Words:', healthCount);
console.log('Family Words:', familyCount);
console.log('Nature Words:', natureCount);
console.log('Shopping Words:', shoppingCount);
console.log('Numbers & Colors:', numbersCount);
console.log('Entertainment Words:', entertainmentCount);
console.log('Total Words:', totalCount);
