// Nature and environment vocabulary
const natureWords = [
  // Natural elements
  {
    id: 701,
    character: "天空",
    pinyin: "tiānkōng",
    meaning: "sky",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=天空",
    examples: [
      {
        character: "天空很蓝。",
        pinyin: "Tiānkōng hěn lán.",
        meaning: "The sky is very blue.",
      },
      {
        character: "我喜欢看天空中的星星。",
        pinyin: "Wǒ xǐhuān kàn tiānkōng zhōng de xīngxing.",
        meaning: "I like to look at the stars in the sky.",
      },
    ],
  },
  {
    id: 702,
    character: "太阳",
    pinyin: "tàiyáng",
    meaning: "sun",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=太阳",
    examples: [
      {
        character: "太阳很大。",
        pinyin: "Tàiyáng hěn dà.",
        meaning: "The sun is very big.",
      },
      {
        character: "太阳出来了。",
        pinyin: "Tàiyáng chūlái le.",
        meaning: "The sun has come out.",
      },
    ],
  },
  {
    id: 703,
    character: "月亮",
    pinyin: "yuèliang",
    meaning: "moon",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=月亮",
    examples: [
      {
        character: "今晚的月亮很圆。",
        pinyin: "Jīnwǎn de yuèliang hěn yuán.",
        meaning: "The moon is very round tonight.",
      },
      {
        character: "我喜欢看月亮。",
        pinyin: "Wǒ xǐhuān kàn yuèliang.",
        meaning: "I like to look at the moon.",
      },
    ],
  },
  {
    id: 704,
    character: "星星",
    pinyin: "xīngxing",
    meaning: "star",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=星星",
    examples: [
      {
        character: "天空中有很多星星。",
        pinyin: "Tiānkōng zhōng yǒu hěn duō xīngxing.",
        meaning: "There are many stars in the sky.",
      },
      {
        character: "我喜欢数星星。",
        pinyin: "Wǒ xǐhuān shǔ xīngxing.",
        meaning: "I like to count stars.",
      },
    ],
  },
  {
    id: 705,
    character: "云",
    pinyin: "yún",
    meaning: "cloud",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=云",
    examples: [
      {
        character: "天空中有很多云。",
        pinyin: "Tiānkōng zhōng yǒu hěn duō yún.",
        meaning: "There are many clouds in the sky.",
      },
      {
        character: "那朵云像一只狗。",
        pinyin: "Nà duǒ yún xiàng yì zhī gǒu.",
        meaning: "That cloud looks like a dog.",
      },
    ],
  },
  {
    id: 706,
    character: "雨",
    pinyin: "yǔ",
    meaning: "rain",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=雨",
    examples: [
      {
        character: "今天下雨了。",
        pinyin: "Jīntiān xià yǔ le.",
        meaning: "It's raining today.",
      },
      {
        character: "我喜欢听雨声。",
        pinyin: "Wǒ xǐhuān tīng yǔshēng.",
        meaning: "I like to listen to the sound of rain.",
      },
    ],
  },
  {
    id: 707,
    character: "雪",
    pinyin: "xuě",
    meaning: "snow",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=雪",
    examples: [
      {
        character: "今天下雪了。",
        pinyin: "Jīntiān xià xuě le.",
        meaning: "It's snowing today.",
      },
      {
        character: "雪很白。",
        pinyin: "Xuě hěn bái.",
        meaning: "Snow is very white.",
      },
    ],
  },
  {
    id: 708,
    character: "风",
    pinyin: "fēng",
    meaning: "wind",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=风",
    examples: [
      {
        character: "今天风很大。",
        pinyin: "Jīntiān fēng hěn dà.",
        meaning: "The wind is very strong today.",
      },
      {
        character: "我喜欢春天的风。",
        pinyin: "Wǒ xǐhuān chūntiān de fēng.",
        meaning: "I like the spring breeze.",
      },
    ],
  },
  {
    id: 709,
    character: "雷",
    pinyin: "léi",
    meaning: "thunder",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=雷",
    examples: [
      {
        character: "我听到雷声了。",
        pinyin: "Wǒ tīng dào léishēng le.",
        meaning: "I heard thunder.",
      },
      {
        character: "雷很响。",
        pinyin: "Léi hěn xiǎng.",
        meaning: "The thunder is very loud.",
      },
    ],
  },
  {
    id: 710,
    character: "电",
    pinyin: "diàn",
    meaning: "electricity, lightning",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=电",
    examples: [
      {
        character: "我看到闪电了。",
        pinyin: "Wǒ kàn dào shǎndiàn le.",
        meaning: "I saw lightning.",
      },
      {
        character: "没有电了。",
        pinyin: "Méiyǒu diàn le.",
        meaning: "There's no electricity.",
      },
    ],
  },

  // Landscape
  {
    id: 711,
    character: "山",
    pinyin: "shān",
    meaning: "mountain",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=山",
    examples: [
      {
        character: "这座山很高。",
        pinyin: "Zhè zuò shān hěn gāo.",
        meaning: "This mountain is very high.",
      },
      {
        character: "我喜欢爬山。",
        pinyin: "Wǒ xǐhuān pá shān.",
        meaning: "I like to climb mountains.",
      },
    ],
  },
  {
    id: 712,
    character: "河",
    pinyin: "hé",
    meaning: "river",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=河",
    examples: [
      {
        character: "这条河很长。",
        pinyin: "Zhè tiáo hé hěn cháng.",
        meaning: "This river is very long.",
      },
      {
        character: "河水很清。",
        pinyin: "Hé shuǐ hěn qīng.",
        meaning: "The river water is very clear.",
      },
    ],
  },
  {
    id: 713,
    character: "湖",
    pinyin: "hú",
    meaning: "lake",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=湖",
    examples: [
      {
        character: "这个湖很大。",
        pinyin: "Zhège hú hěn dà.",
        meaning: "This lake is very big.",
      },
      {
        character: "我们在湖边野餐。",
        pinyin: "Wǒmen zài húbiān yěcān.",
        meaning: "We are having a picnic by the lake.",
      },
    ],
  },
  {
    id: 714,
    character: "海",
    pinyin: "hǎi",
    meaning: "sea, ocean",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=海",
    examples: [
      {
        character: "我喜欢看海。",
        pinyin: "Wǒ xǐhuān kàn hǎi.",
        meaning: "I like to look at the sea.",
      },
      {
        character: "海水是蓝色的。",
        pinyin: "Hǎishuǐ shì lánsè de.",
        meaning: "Seawater is blue.",
      },
    ],
  },
  {
    id: 715,
    character: "沙滩",
    pinyin: "shātān",
    meaning: "beach",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=沙滩",
    examples: [
      {
        character: "我喜欢在沙滩上散步。",
        pinyin: "Wǒ xǐhuān zài shātān shàng sànbù.",
        meaning: "I like to walk on the beach.",
      },
      {
        character: "这个沙滩很美。",
        pinyin: "Zhège shātān hěn měi.",
        meaning: "This beach is very beautiful.",
      },
    ],
  },
  {
    id: 716,
    character: "森林",
    pinyin: "sēnlín",
    meaning: "forest",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=森林",
    examples: [
      {
        character: "这片森林很大。",
        pinyin: "Zhè piàn sēnlín hěn dà.",
        meaning: "This forest is very big.",
      },
      {
        character: "森林里有很多动物。",
        pinyin: "Sēnlín lǐ yǒu hěn duō dòngwù.",
        meaning: "There are many animals in the forest.",
      },
    ],
  },
  {
    id: 717,
    character: "草",
    pinyin: "cǎo",
    meaning: "grass",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=草",
    examples: [
      {
        character: "草是绿色的。",
        pinyin: "Cǎo shì lǜsè de.",
        meaning: "Grass is green.",
      },
      {
        character: "我喜欢坐在草地上。",
        pinyin: "Wǒ xǐhuān zuò zài cǎodì shàng.",
        meaning: "I like to sit on the grass.",
      },
    ],
  },
  {
    id: 718,
    character: "花",
    pinyin: "huā",
    meaning: "flower",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=花",
    examples: [
      {
        character: "这朵花很漂亮。",
        pinyin: "Zhè duǒ huā hěn piàoliang.",
        meaning: "This flower is very beautiful.",
      },
      {
        character: "我喜欢红色的花。",
        pinyin: "Wǒ xǐhuān hóngsè de huā.",
        meaning: "I like red flowers.",
      },
    ],
  },
  {
    id: 719,
    character: "树",
    pinyin: "shù",
    meaning: "tree",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=树",
    examples: [
      {
        character: "这棵树很高。",
        pinyin: "Zhè kē shù hěn gāo.",
        meaning: "This tree is very tall.",
      },
      {
        character: "树上有很多鸟。",
        pinyin: "Shù shàng yǒu hěn duō niǎo.",
        meaning: "There are many birds in the tree.",
      },
    ],
  },
  {
    id: 720,
    character: "动物",
    pinyin: "dòngwù",
    meaning: "animal",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=动物",
    examples: [
      {
        character: "我喜欢看动物。",
        pinyin: "Wǒ xǐhuān kàn dòngwù.",
        meaning: "I like to watch animals.",
      },
      {
        character: "这个动物园有很多动物。",
        pinyin: "Zhège dòngwùyuán yǒu hěn duō dòngwù.",
        meaning: "This zoo has many animals.",
      },
    ],
  },

  // Weather
  {
    id: 721,
    character: "天气",
    pinyin: "tiānqì",
    meaning: "weather",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=天气",
    examples: [
      {
        character: "今天天气很好。",
        pinyin: "Jīntiān tiānqì hěn hǎo.",
        meaning: "The weather is very good today.",
      },
      {
        character: "我喜欢晴朗的天气。",
        pinyin: "Wǒ xǐhuān qínglǎng de tiānqì.",
        meaning: "I like clear weather.",
      },
    ],
  },
  {
    id: 722,
    character: "晴天",
    pinyin: "qíngtiān",
    meaning: "sunny day",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=晴天",
    examples: [
      {
        character: "今天是晴天。",
        pinyin: "Jīntiān shì qíngtiān.",
        meaning: "Today is a sunny day.",
      },
      {
        character: "晴天很适合出去玩。",
        pinyin: "Qíngtiān hěn shìhé chūqù wán.",
        meaning: "Sunny days are good for going out.",
      },
    ],
  },
  {
    id: 723,
    character: "阴天",
    pinyin: "yīntiān",
    meaning: "cloudy day",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=阴天",
    examples: [
      {
        character: "今天是阴天。",
        pinyin: "Jīntiān shì yīntiān.",
        meaning: "Today is a cloudy day.",
      },
      {
        character: "阴天可能会下雨。",
        pinyin: "Yīntiān kěnéng huì xià yǔ.",
        meaning: "It might rain on cloudy days.",
      },
    ],
  },
  {
    id: 724,
    character: "刮风",
    pinyin: "guā fēng",
    meaning: "to be windy",
    partOfSpeech: "v",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=刮风",
    examples: [
      {
        character: "今天刮风了。",
        pinyin: "Jīntiān guā fēng le.",
        meaning: "It's windy today.",
      },
      {
        character: "刮风的时候不要骑自行车。",
        pinyin: "Guā fēng de shíhou bùyào qí zìxíngchē.",
        meaning: "Don't ride a bicycle when it's windy.",
      },
    ],
  },
  {
    id: 725,
    character: "打雷",
    pinyin: "dǎ léi",
    meaning: "to thunder",
    partOfSpeech: "v",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=打雷",
    examples: [
      {
        character: "昨天晚上打雷了。",
        pinyin: "Zuótiān wǎnshang dǎ léi le.",
        meaning: "It thundered last night.",
      },
      {
        character: "打雷的时候我很害怕。",
        pinyin: "Dǎ léi de shíhou wǒ hěn hàipà.",
        meaning: "I'm scared when it thunders.",
      },
    ],
  },
  {
    id: 726,
    character: "闪电",
    pinyin: "shǎndiàn",
    meaning: "lightning",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=闪电",
    examples: [
      {
        character: "闪电很亮。",
        pinyin: "Shǎndiàn hěn liàng.",
        meaning: "Lightning is very bright.",
      },
      {
        character: "打雷时会有闪电。",
        pinyin: "Dǎ léi shí huì yǒu shǎndiàn.",
        meaning: "There is lightning when it thunders.",
      },
    ],
  },
  {
    id: 727,
    character: "台风",
    pinyin: "táifēng",
    meaning: "typhoon",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=台风",
    examples: [
      {
        character: "台风要来了。",
        pinyin: "Táifēng yào lái le.",
        meaning: "A typhoon is coming.",
      },
      {
        character: "台风很危险。",
        pinyin: "Táifēng hěn wēixiǎn.",
        meaning: "Typhoons are very dangerous.",
      },
    ],
  },
  {
    id: 728,
    character: "洪水",
    pinyin: "hóngshuǐ",
    meaning: "flood",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=洪水",
    examples: [
      {
        character: "洪水淹没了村庄。",
        pinyin: "Hóngshuǐ yānméi le cūnzhuāng.",
        meaning: "The flood submerged the village.",
      },
      {
        character: "大雨会引起洪水。",
        pinyin: "Dà yǔ huì yǐnqǐ hóngshuǐ.",
        meaning: "Heavy rain can cause floods.",
      },
    ],
  },
  {
    id: 729,
    character: "沙漠",
    pinyin: "shāmò",
    meaning: "desert",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=沙漠",
    examples: [
      {
        character: "沙漠里很热。",
        pinyin: "Shāmò lǐ hěn rè.",
        meaning: "It's very hot in the desert.",
      },
      {
        character: "沙漠里有骆驼。",
        pinyin: "Shāmò lǐ yǒu luòtuo.",
        meaning: "There are camels in the desert.",
      },
    ],
  },
  {
    id: 730,
    character: "草原",
    pinyin: "cǎoyuán",
    meaning: "grassland, prairie",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=草原",
    examples: [
      {
        character: "草原上有很多草。",
        pinyin: "Cǎoyuán shàng yǒu hěn duō cǎo.",
        meaning: "There is a lot of grass on the grassland.",
      },
      {
        character: "草原上有牛和羊。",
        pinyin: "Cǎoyuán shàng yǒu niú hé yáng.",
        meaning: "There are cattle and sheep on the grassland.",
      },
    ],
  },

  // More landscape features
  {
    id: 731,
    character: "瀑布",
    pinyin: "pùbù",
    meaning: "waterfall",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=瀑布",
    examples: [
      {
        character: "这个瀑布很高。",
        pinyin: "Zhège pùbù hěn gāo.",
        meaning: "This waterfall is very high.",
      },
      {
        character: "瀑布的声音很大。",
        pinyin: "Pùbù de shēngyīn hěn dà.",
        meaning: "The sound of the waterfall is very loud.",
      },
    ],
  },
  {
    id: 732,
    character: "岛",
    pinyin: "dǎo",
    meaning: "island",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=岛",
    examples: [
      {
        character: "这个岛很美。",
        pinyin: "Zhège dǎo hěn měi.",
        meaning: "This island is very beautiful.",
      },
      {
        character: "我们去岛上度假。",
        pinyin: "Wǒmen qù dǎo shàng dùjià.",
        meaning: "We are going to the island for vacation.",
      },
    ],
  },
  {
    id: 733,
    character: "洞穴",
    pinyin: "dòngxué",
    meaning: "cave",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=洞穴",
    examples: [
      {
        character: "这个洞穴很深。",
        pinyin: "Zhège dòngxué hěn shēn.",
        meaning: "This cave is very deep.",
      },
      {
        character: "洞穴里很黑。",
        pinyin: "Dòngxué lǐ hěn hēi.",
        meaning: "It's very dark in the cave.",
      },
    ],
  },
  {
    id: 734,
    character: "峡谷",
    pinyin: "xiágǔ",
    meaning: "canyon, gorge",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=峡谷",
    examples: [
      {
        character: "这个峡谷很深。",
        pinyin: "Zhège xiágǔ hěn shēn.",
        meaning: "This canyon is very deep.",
      },
      {
        character: "峡谷里有一条河。",
        pinyin: "Xiágǔ lǐ yǒu yì tiáo hé.",
        meaning: "There is a river in the canyon.",
      },
    ],
  },
  {
    id: 735,
    character: "火山",
    pinyin: "huǒshān",
    meaning: "volcano",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=火山",
    examples: [
      {
        character: "这座火山还在活动。",
        pinyin: "Zhè zuò huǒshān hái zài huódòng.",
        meaning: "This volcano is still active.",
      },
      {
        character: "火山喷发很危险。",
        pinyin: "Huǒshān pēnfā hěn wēixiǎn.",
        meaning: "Volcanic eruptions are very dangerous.",
      },
    ],
  },

  // Animals
  {
    id: 736,
    character: "鸟",
    pinyin: "niǎo",
    meaning: "bird",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=鸟",
    examples: [
      {
        character: "鸟在天上飞。",
        pinyin: "Niǎo zài tiān shàng fēi.",
        meaning: "Birds fly in the sky.",
      },
      {
        character: "这只鸟很漂亮。",
        pinyin: "Zhè zhī niǎo hěn piàoliang.",
        meaning: "This bird is very beautiful.",
      },
    ],
  },
  {
    id: 737,
    character: "鱼",
    pinyin: "yú",
    meaning: "fish",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=鱼",
    examples: [
      {
        character: "鱼在水里游。",
        pinyin: "Yú zài shuǐ lǐ yóu.",
        meaning: "Fish swim in water.",
      },
      {
        character: "这条鱼很大。",
        pinyin: "Zhè tiáo yú hěn dà.",
        meaning: "This fish is very big.",
      },
    ],
  },
  {
    id: 738,
    character: "昆虫",
    pinyin: "kūnchóng",
    meaning: "insect",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=昆虫",
    examples: [
      {
        character: "昆虫有六条腿。",
        pinyin: "Kūnchóng yǒu liù tiáo tuǐ.",
        meaning: "Insects have six legs.",
      },
      {
        character: "这种昆虫很罕见。",
        pinyin: "Zhè zhǒng kūnchóng hěn hǎnjiàn.",
        meaning: "This kind of insect is very rare.",
      },
    ],
  },
  {
    id: 739,
    character: "蛇",
    pinyin: "shé",
    meaning: "snake",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=蛇",
    examples: [
      {
        character: "蛇在草丛中爬行。",
        pinyin: "Shé zài cǎocóng zhōng páxíng.",
        meaning: "Snakes crawl in the grass.",
      },
      {
        character: "有些蛇有毒。",
        pinyin: "Yǒuxiē shé yǒudú.",
        meaning: "Some snakes are poisonous.",
      },
    ],
  },
  {
    id: 740,
    character: "熊",
    pinyin: "xióng",
    meaning: "bear",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=熊",
    examples: [
      {
        character: "熊喜欢吃蜂蜜。",
        pinyin: "Xióng xǐhuān chī fēngmì.",
        meaning: "Bears like to eat honey.",
      },
      {
        character: "熊猫是中国的国宝。",
        pinyin: "Xióngmāo shì Zhōngguó de guóbǎo.",
        meaning: "Pandas are China's national treasures.",
      },
    ],
  },

  // More animals
  {
    id: 741,
    character: "狼",
    pinyin: "láng",
    meaning: "wolf",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=狼",
    examples: [
      {
        character: "狼在森林里生活。",
        pinyin: "Láng zài sēnlín lǐ shēnghuó.",
        meaning: "Wolves live in forests.",
      },
      {
        character: "狼是群居动物。",
        pinyin: "Láng shì qúnjū dòngwù.",
        meaning: "Wolves are pack animals.",
      },
    ],
  },
  {
    id: 742,
    character: "老虎",
    pinyin: "lǎohǔ",
    meaning: "tiger",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=老虎",
    examples: [
      {
        character: "老虎是大型猫科动物。",
        pinyin: "Lǎohǔ shì dàxíng māokē dòngwù.",
        meaning: "Tigers are large feline animals.",
      },
      {
        character: "老虎很危险。",
        pinyin: "Lǎohǔ hěn wēixiǎn.",
        meaning: "Tigers are very dangerous.",
      },
    ],
  },
  {
    id: 743,
    character: "狮子",
    pinyin: "shīzi",
    meaning: "lion",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=狮子",
    examples: [
      {
        character: "狮子是草原之王。",
        pinyin: "Shīzi shì cǎoyuán zhī wáng.",
        meaning: "Lions are the kings of the grassland.",
      },
      {
        character: "雄狮有鬃毛。",
        pinyin: "Xióngshī yǒu zōngmáo.",
        meaning: "Male lions have manes.",
      },
    ],
  },
  {
    id: 744,
    character: "大象",
    pinyin: "dàxiàng",
    meaning: "elephant",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=大象",
    examples: [
      {
        character: "大象有长鼻子。",
        pinyin: "Dàxiàng yǒu cháng bízi.",
        meaning: "Elephants have long trunks.",
      },
      {
        character: "大象是陆地上最大的动物。",
        pinyin: "Dàxiàng shì lùdì shàng zuì dà de dòngwù.",
        meaning: "Elephants are the largest land animals.",
      },
    ],
  },
  {
    id: 745,
    character: "猴子",
    pinyin: "hóuzi",
    meaning: "monkey",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=猴子",
    examples: [
      {
        character: "猴子很聪明。",
        pinyin: "Hóuzi hěn cōngming.",
        meaning: "Monkeys are very smart.",
      },
      {
        character: "猴子喜欢吃香蕉。",
        pinyin: "Hóuzi xǐhuān chī xiāngjiāo.",
        meaning: "Monkeys like to eat bananas.",
      },
    ],
  },
  {
    id: 746,
    character: "长颈鹿",
    pinyin: "chángjǐnglù",
    meaning: "giraffe",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=长颈鹿",
    examples: [
      {
        character: "长颈鹿的脖子很长。",
        pinyin: "Chángjǐnglù de bózi hěn cháng.",
        meaning: "Giraffes have long necks.",
      },
      {
        character: "长颈鹿是世界上最高的动物。",
        pinyin: "Chángjǐnglù shì shìjiè shàng zuì gāo de dòngwù.",
        meaning: "Giraffes are the tallest animals in the world.",
      },
    ],
  },
  {
    id: 747,
    character: "鳄鱼",
    pinyin: "èyú",
    meaning: "crocodile",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=鳄鱼",
    examples: [
      {
        character: "鳄鱼生活在水里。",
        pinyin: "Èyú shēnghuó zài shuǐ lǐ.",
        meaning: "Crocodiles live in water.",
      },
      {
        character: "鳄鱼的牙齿很锋利。",
        pinyin: "Èyú de yáchǐ hěn fēnglì.",
        meaning: "Crocodiles have very sharp teeth.",
      },
    ],
  },
  {
    id: 748,
    character: "蝴蝶",
    pinyin: "húdié",
    meaning: "butterfly",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=蝴蝶",
    examples: [
      {
        character: "蝴蝶很漂亮。",
        pinyin: "Húdié hěn piàoliang.",
        meaning: "Butterflies are very beautiful.",
      },
      {
        character: "蝴蝶在花丛中飞舞。",
        pinyin: "Húdié zài huācóng zhōng fēiwǔ.",
        meaning: "Butterflies dance among the flowers.",
      },
    ],
  },
  {
    id: 749,
    character: "蜜蜂",
    pinyin: "mìfēng",
    meaning: "bee",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=蜜蜂",
    examples: [
      {
        character: "蜜蜂采蜜。",
        pinyin: "Mìfēng cǎi mì.",
        meaning: "Bees collect honey.",
      },
      {
        character: "蜜蜂的蜇痛很疼。",
        pinyin: "Mìfēng de zhē tòng hěn téng.",
        meaning: "Bee stings are very painful.",
      },
    ],
  },
  {
    id: 750,
    character: "自然",
    pinyin: "zìrán",
    meaning: "nature, natural",
    partOfSpeech: "n/adj",
    category: "nature",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=自然",
    examples: [
      {
        character: "我喜欢自然风景。",
        pinyin: "Wǒ xǐhuān zìrán fēngjǐng.",
        meaning: "I like natural scenery.",
      },
      {
        character: "这是自然现象。",
        pinyin: "Zhè shì zìrán xiànxiàng.",
        meaning: "This is a natural phenomenon.",
      },
    ],
  },
  // Additional words
  {
    id: 651,
    character: "生态",
    pinyin: "shēngtài",
    meaning: "ecology",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E7%94%9F%E6%80%81",
    examples: [
      {
        character: "这是生态的例句。",
        pinyin: "Zhè shì shēngtài de lìjù.",
        meaning: "This is an example sentence for ecology.",
      },
      {
        character: "我喜欢生态。",
        pinyin: "Wǒ xǐhuān shēngtài.",
        meaning: "I like ecology.",
      },
    ],
  },
  {
    id: 652,
    character: "环境",
    pinyin: "huánjìng",
    meaning: "environment",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E7%8E%AF%E5%A2%83",
    examples: [
      {
        character: "这是环境的例句。",
        pinyin: "Zhè shì huánjìng de lìjù.",
        meaning: "This is an example sentence for environment.",
      },
      {
        character: "我喜欢环境。",
        pinyin: "Wǒ xǐhuān huánjìng.",
        meaning: "I like environment.",
      },
    ],
  },
  {
    id: 653,
    character: "保护",
    pinyin: "bǎohù",
    meaning: "protect",
    partOfSpeech: "v",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E4%BF%9D%E6%8A%A4",
    examples: [
      {
        character: "这是保护的例句。",
        pinyin: "Zhè shì bǎohù de lìjù.",
        meaning: "This is an example sentence for protect.",
      },
      {
        character: "我喜欢保护。",
        pinyin: "Wǒ xǐhuān bǎohù.",
        meaning: "I like protect.",
      },
    ],
  },
  {
    id: 654,
    character: "污染",
    pinyin: "wūrǎn",
    meaning: "pollution",
    partOfSpeech: "n/v",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%B1%A1%E6%9F%93",
    examples: [
      {
        character: "这是污染的例句。",
        pinyin: "Zhè shì wūrǎn de lìjù.",
        meaning: "This is an example sentence for pollution.",
      },
      {
        character: "我喜欢污染。",
        pinyin: "Wǒ xǐhuān wūrǎn.",
        meaning: "I like pollution.",
      },
    ],
  },
  {
    id: 655,
    character: "气候",
    pinyin: "qìhòu",
    meaning: "climate",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%B0%94%E5%80%99",
    examples: [
      {
        character: "这是气候的例句。",
        pinyin: "Zhè shì qìhòu de lìjù.",
        meaning: "This is an example sentence for climate.",
      },
      {
        character: "我喜欢气候。",
        pinyin: "Wǒ xǐhuān qìhòu.",
        meaning: "I like climate.",
      },
    ],
  },
  {
    id: 656,
    character: "季节",
    pinyin: "jìjié",
    meaning: "season",
    partOfSpeech: "n",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E5%AD%A3%E8%8A%82",
    examples: [
      {
        character: "这是季节的例句。",
        pinyin: "Zhè shì jìjié de lìjù.",
        meaning: "This is an example sentence for season.",
      },
      {
        character: "我喜欢季节。",
        pinyin: "Wǒ xǐhuān jìjié.",
        meaning: "I like season.",
      },
    ],
  },
  {
    id: 657,
    character: "野生",
    pinyin: "yěshēng",
    meaning: "wild",
    partOfSpeech: "adj",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E9%87%8E%E7%94%9F",
    examples: [
      {
        character: "这是野生的例句。",
        pinyin: "Zhè shì yěshēng de lìjù.",
        meaning: "This is an example sentence for wild.",
      },
      {
        character: "我喜欢野生。",
        pinyin: "Wǒ xǐhuān yěshēng.",
        meaning: "I like wild.",
      },
    ],
  },
  {
    id: 658,
    character: "栖息",
    pinyin: "qīxī",
    meaning: "habitat",
    partOfSpeech: "n/v",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%A0%96%E6%81%AF",
    examples: [
      {
        character: "这是栖息的例句。",
        pinyin: "Zhè shì qīxī de lìjù.",
        meaning: "This is an example sentence for habitat.",
      },
      {
        character: "我喜欢栖息。",
        pinyin: "Wǒ xǐhuān qīxī.",
        meaning: "I like habitat.",
      },
    ],
  },
  {
    id: 659,
    character: "繁殖",
    pinyin: "fánzhí",
    meaning: "reproduce",
    partOfSpeech: "v",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E7%B9%81%E6%AE%96",
    examples: [
      {
        character: "这是繁殖的例句。",
        pinyin: "Zhè shì fánzhí de lìjù.",
        meaning: "This is an example sentence for reproduce.",
      },
      {
        character: "我喜欢繁殖。",
        pinyin: "Wǒ xǐhuān fánzhí.",
        meaning: "I like reproduce.",
      },
    ],
  },
  {
    id: 660,
    character: "灭绝",
    pinyin: "mièjué",
    meaning: "extinction",
    partOfSpeech: "n/v",
    category: "nature",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E7%81%AD%E7%BB%9D",
    examples: [
      {
        character: "这是灭绝的例句。",
        pinyin: "Zhè shì mièjué de lìjù.",
        meaning: "This is an example sentence for extinction.",
      },
      {
        character: "我喜欢灭绝。",
        pinyin: "Wǒ xǐhuān mièjué.",
        meaning: "I like extinction.",
      },
    ],
  }
];

export default natureWords;
