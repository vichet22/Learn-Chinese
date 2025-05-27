// Core 1000 Word List index file
import basicWords from "./basicWords";
import dailyLifeWords from "./dailyLife";
import foodWords from "./food";
import travelWords from "./travel";
import educationWords from "./education";
import healthWords from "./health";
import familyWords from "./family";
import natureWords from "./nature";
import shoppingWords from "./shopping";
import numbersAndColors from "./numbers";
import entertainmentWords from "./entertainment";
import businessWords from "./business";
import technologyWords from "./technology";
import emotionsWords from "./emotions";
import timeWeatherWords from "./timeWeather";
import colorsShapesWords from "./colorsShapes";
import bodyHealthWords from "./bodyHealth";

// Combine all word categories
const core1000WordList = [
  ...basicWords,
  ...dailyLifeWords,
  ...foodWords,
  ...travelWords,
  ...educationWords,
  ...healthWords,
  ...familyWords,
  ...natureWords,
  ...shoppingWords,
  ...numbersAndColors,
  ...entertainmentWords,
  ...businessWords,
  ...technologyWords,
  ...emotionsWords,
  ...timeWeatherWords,
  ...colorsShapesWords,
  ...bodyHealthWords,
];

export default core1000WordList;
