// Travel and transportation vocabulary
const travelWords = [
  // Transportation
  {
    id: 301,
    character: "车",
    pinyin: "chē",
    meaning: "car, vehicle",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=车",
    examples: [
      {
        character: "我有一辆新车。",
        pinyin: "Wǒ yǒu yí liàng xīn chē.",
        meaning: "I have a new car.",
      },
      {
        character: "这辆车很漂亮。",
        pinyin: "Zhè liàng chē hěn piàoliang.",
        meaning: "This car is very beautiful.",
      },
    ],
  },
  {
    id: 302,
    character: "公共汽车",
    pinyin: "gōnggòng qìchē",
    meaning: "bus",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=公共汽车",
    examples: [
      {
        character: "我每天坐公共汽车上班。",
        pinyin: "Wǒ měitiān zuò gōnggòng qìchē shàngbān.",
        meaning: "I take the bus to work every day.",
      },
      {
        character: "公共汽车站在哪里？",
        pinyin: "Gōnggòng qìchē zhàn zài nǎlǐ?",
        meaning: "Where is the bus stop?",
      },
    ],
  },
  {
    id: 303,
    character: "地铁",
    pinyin: "dìtiě",
    meaning: "subway, metro",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=地铁",
    examples: [
      {
        character: "坐地铁很方便。",
        pinyin: "Zuò dìtiě hěn fāngbiàn.",
        meaning: "Taking the subway is very convenient.",
      },
      {
        character: "地铁站离这里很近。",
        pinyin: "Dìtiě zhàn lí zhèlǐ hěn jìn.",
        meaning: "The subway station is very close to here.",
      },
    ],
  },
  {
    id: 304,
    character: "出租车",
    pinyin: "chūzū chē",
    meaning: "taxi",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=出租车",
    examples: [
      {
        character: "我们坐出租车去机场吧。",
        pinyin: "Wǒmen zuò chūzū chē qù jīchǎng ba.",
        meaning: "Let's take a taxi to the airport.",
      },
      {
        character: "这辆出租车很干净。",
        pinyin: "Zhè liàng chūzū chē hěn gānjìng.",
        meaning: "This taxi is very clean.",
      },
    ],
  },
  {
    id: 305,
    character: "火车",
    pinyin: "huǒchē",
    meaning: "train",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=火车",
    examples: [
      {
        character: "我坐火车去北京。",
        pinyin: "Wǒ zuò huǒchē qù Běijīng.",
        meaning: "I'm taking the train to Beijing.",
      },
      {
        character: "火车站在哪里？",
        pinyin: "Huǒchē zhàn zài nǎlǐ?",
        meaning: "Where is the train station?",
      },
    ],
  },
  {
    id: 306,
    character: "飞机",
    pinyin: "fēijī",
    meaning: "airplane",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=飞机",
    examples: [
      {
        character: "我明天坐飞机去上海。",
        pinyin: "Wǒ míngtiān zuò fēijī qù Shànghǎi.",
        meaning: "I'm taking a plane to Shanghai tomorrow.",
      },
      {
        character: "这架飞机很大。",
        pinyin: "Zhè jià fēijī hěn dà.",
        meaning: "This airplane is very big.",
      },
    ],
  },
  {
    id: 307,
    character: "自行车",
    pinyin: "zìxíngchē",
    meaning: "bicycle",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=自行车",
    examples: [
      {
        character: "我喜欢骑自行车。",
        pinyin: "Wǒ xǐhuān qí zìxíngchē.",
        meaning: "I like to ride a bicycle.",
      },
      {
        character: "这辆自行车是新的。",
        pinyin: "Zhè liàng zìxíngchē shì xīn de.",
        meaning: "This bicycle is new.",
      },
    ],
  },
  {
    id: 308,
    character: "船",
    pinyin: "chuán",
    meaning: "boat, ship",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=船",
    examples: [
      {
        character: "我们坐船去海岛。",
        pinyin: "Wǒmen zuò chuán qù hǎidǎo.",
        meaning: "We're taking a boat to the island.",
      },
      {
        character: "那艘船很大。",
        pinyin: "Nà sōu chuán hěn dà.",
        meaning: "That ship is very big.",
      },
    ],
  },
  {
    id: 309,
    character: "票",
    pinyin: "piào",
    meaning: "ticket",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=票",
    examples: [
      {
        character: "我买了两张电影票。",
        pinyin: "Wǒ mǎi le liǎng zhāng diànyǐng piào.",
        meaning: "I bought two movie tickets.",
      },
      {
        character: "这张火车票多少钱？",
        pinyin: "Zhè zhāng huǒchē piào duōshao qián?",
        meaning: "How much is this train ticket?",
      },
    ],
  },
  {
    id: 310,
    character: "站",
    pinyin: "zhàn",
    meaning: "station, stop",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=站",
    examples: [
      {
        character: "下一站是哪里？",
        pinyin: "Xià yí zhàn shì nǎlǐ?",
        meaning: "Where is the next stop?",
      },
      {
        character: "火车站离这里很远。",
        pinyin: "Huǒchē zhàn lí zhèlǐ hěn yuǎn.",
        meaning: "The train station is far from here.",
      },
    ],
  },

  // Travel actions
  {
    id: 311,
    character: "旅行",
    pinyin: "lǚxíng",
    meaning: "to travel, trip",
    partOfSpeech: "v/n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=旅行",
    examples: [
      {
        character: "我喜欢旅行。",
        pinyin: "Wǒ xǐhuān lǚxíng.",
        meaning: "I like to travel.",
      },
      {
        character: "这次旅行很有趣。",
        pinyin: "Zhè cì lǚxíng hěn yǒuqù.",
        meaning: "This trip is very interesting.",
      },
    ],
  },
  {
    id: 312,
    character: "参观",
    pinyin: "cānguān",
    meaning: "to visit, tour",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=参观",
    examples: [
      {
        character: "我们参观了博物馆。",
        pinyin: "Wǒmen cānguān le bówùguǎn.",
        meaning: "We visited the museum.",
      },
      {
        character: "你想参观这座城市吗？",
        pinyin: "Nǐ xiǎng cānguān zhè zuò chéngshì ma?",
        meaning: "Do you want to tour this city?",
      },
    ],
  },
  {
    id: 313,
    character: "游览",
    pinyin: "yóulǎn",
    meaning: "to tour, visit",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=游览",
    examples: [
      {
        character: "我们游览了长城。",
        pinyin: "Wǒmen yóulǎn le Chángchéng.",
        meaning: "We toured the Great Wall.",
      },
      {
        character: "这个公园值得游览。",
        pinyin: "Zhège gōngyuán zhídé yóulǎn.",
        meaning: "This park is worth visiting.",
      },
    ],
  },
  {
    id: 314,
    character: "迷路",
    pinyin: "mílù",
    meaning: "to get lost",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=迷路",
    examples: [
      {
        character: "我在城市里迷路了。",
        pinyin: "Wǒ zài chéngshì lǐ mílù le.",
        meaning: "I got lost in the city.",
      },
      {
        character: "如果你迷路了，请打电话给我。",
        pinyin: "Rúguǒ nǐ mílù le, qǐng dǎ diànhuà gěi wǒ.",
        meaning: "If you get lost, please call me.",
      },
    ],
  },
  {
    id: 315,
    character: "预订",
    pinyin: "yùdìng",
    meaning: "to book, reserve",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=预订",
    examples: [
      {
        character: "我预订了一个房间。",
        pinyin: "Wǒ yùdìng le yí gè fángjiān.",
        meaning: "I booked a room.",
      },
      {
        character: "你需要提前预订机票。",
        pinyin: "Nǐ xūyào tíqián yùdìng jīpiào.",
        meaning: "You need to book flight tickets in advance.",
      },
    ],
  },

  // Places
  {
    id: 316,
    character: "酒店",
    pinyin: "jiǔdiàn",
    meaning: "hotel",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=酒店",
    examples: [
      {
        character: "这家酒店很舒服。",
        pinyin: "Zhè jiā jiǔdiàn hěn shūfu.",
        meaning: "This hotel is very comfortable.",
      },
      {
        character: "我们住在五星级酒店。",
        pinyin: "Wǒmen zhù zài wǔxīngjí jiǔdiàn.",
        meaning: "We're staying at a five-star hotel.",
      },
    ],
  },
  {
    id: 317,
    character: "机场",
    pinyin: "jīchǎng",
    meaning: "airport",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=机场",
    examples: [
      {
        character: "机场离市中心很远。",
        pinyin: "Jīchǎng lí shìzhōngxīn hěn yuǎn.",
        meaning: "The airport is far from the city center.",
      },
      {
        character: "我们需要提前两小时到机场。",
        pinyin: "Wǒmen xūyào tíqián liǎng xiǎoshí dào jīchǎng.",
        meaning: "We need to arrive at the airport two hours in advance.",
      },
    ],
  },
  {
    id: 318,
    character: "火车站",
    pinyin: "huǒchē zhàn",
    meaning: "train station",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=火车站",
    examples: [
      {
        character: "火车站在哪里？",
        pinyin: "Huǒchē zhàn zài nǎlǐ?",
        meaning: "Where is the train station?",
      },
      {
        character: "我们在火车站见面。",
        pinyin: "Wǒmen zài huǒchē zhàn jiànmiàn.",
        meaning: "Let's meet at the train station.",
      },
    ],
  },
  {
    id: 319,
    character: "地图",
    pinyin: "dìtú",
    meaning: "map",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=地图",
    examples: [
      {
        character: "你有这个城市的地图吗？",
        pinyin: "Nǐ yǒu zhège chéngshì de dìtú ma?",
        meaning: "Do you have a map of this city?",
      },
      {
        character: "我在看地图。",
        pinyin: "Wǒ zài kàn dìtú.",
        meaning: "I'm looking at the map.",
      },
    ],
  },
  {
    id: 320,
    character: "护照",
    pinyin: "hùzhào",
    meaning: "passport",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=护照",
    examples: [
      {
        character: "我的护照在哪里？",
        pinyin: "Wǒ de hùzhào zài nǎlǐ?",
        meaning: "Where is my passport?",
      },
      {
        character: "出国旅行需要护照。",
        pinyin: "Chūguó lǚxíng xūyào hùzhào.",
        meaning: "You need a passport for international travel.",
      },
    ],
  },

  // More transportation
  {
    id: 321,
    character: "摩托车",
    pinyin: "mótuōchē",
    meaning: "motorcycle",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=摩托车",
    examples: [
      {
        character: "他骑摩托车上班。",
        pinyin: "Tā qí mótuōchē shàngbān.",
        meaning: "He rides a motorcycle to work.",
      },
      {
        character: "这辆摩托车很快。",
        pinyin: "Zhè liàng mótuōchē hěn kuài.",
        meaning: "This motorcycle is very fast.",
      },
    ],
  },
  {
    id: 322,
    character: "电动车",
    pinyin: "diàndòngchē",
    meaning: "electric vehicle",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=电动车",
    examples: [
      {
        character: "电动车很环保。",
        pinyin: "Diàndòngchē hěn huánbǎo.",
        meaning: "Electric vehicles are very environmentally friendly.",
      },
      {
        character: "我买了一辆电动车。",
        pinyin: "Wǒ mǎi le yí liàng diàndòngchē.",
        meaning: "I bought an electric vehicle.",
      },
    ],
  },
  {
    id: 323,
    character: "高铁",
    pinyin: "gāotiě",
    meaning: "high-speed rail",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=高铁",
    examples: [
      {
        character: "我坐高铁去北京。",
        pinyin: "Wǒ zuò gāotiě qù Běijīng.",
        meaning: "I'm taking the high-speed rail to Beijing.",
      },
      {
        character: "高铁很快。",
        pinyin: "Gāotiě hěn kuài.",
        meaning: "High-speed rail is very fast.",
      },
    ],
  },
  {
    id: 324,
    character: "轮船",
    pinyin: "lúnchuán",
    meaning: "ship, steamship",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=轮船",
    examples: [
      {
        character: "我们坐轮船去香港。",
        pinyin: "Wǒmen zuò lúnchuán qù Xiānggǎng.",
        meaning: "We're taking a ship to Hong Kong.",
      },
      {
        character: "这艘轮船很大。",
        pinyin: "Zhè sōu lúnchuán hěn dà.",
        meaning: "This ship is very big.",
      },
    ],
  },
  {
    id: 325,
    character: "直升机",
    pinyin: "zhíshēngjī",
    meaning: "helicopter",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=直升机",
    examples: [
      {
        character: "直升机在空中飞。",
        pinyin: "Zhíshēngjī zài kōngzhōng fēi.",
        meaning: "The helicopter is flying in the air.",
      },
      {
        character: "这架直升机很快。",
        pinyin: "Zhè jià zhíshēngjī hěn kuài.",
        meaning: "This helicopter is very fast.",
      },
    ],
  },

  // Travel locations
  {
    id: 326,
    character: "机场",
    pinyin: "jīchǎng",
    meaning: "airport",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=机场",
    examples: [
      {
        character: "我们去机场接他。",
        pinyin: "Wǒmen qù jīchǎng jiē tā.",
        meaning: "We're going to the airport to pick him up.",
      },
      {
        character: "这个机场很大。",
        pinyin: "Zhège jīchǎng hěn dà.",
        meaning: "This airport is very big.",
      },
    ],
  },
  {
    id: 327,
    character: "车站",
    pinyin: "chēzhàn",
    meaning: "station",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=车站",
    examples: [
      {
        character: "车站在哪里？",
        pinyin: "Chēzhàn zài nǎlǐ?",
        meaning: "Where is the station?",
      },
      {
        character: "我们在车站见面。",
        pinyin: "Wǒmen zài chēzhàn jiànmiàn.",
        meaning: "Let's meet at the station.",
      },
    ],
  },
  {
    id: 328,
    character: "码头",
    pinyin: "mǎtou",
    meaning: "dock, pier",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=码头",
    examples: [
      {
        character: "船停在码头。",
        pinyin: "Chuán tíng zài mǎtou.",
        meaning: "The boat is docked at the pier.",
      },
      {
        character: "我们在码头等船。",
        pinyin: "Wǒmen zài mǎtou děng chuán.",
        meaning: "We're waiting for the boat at the dock.",
      },
    ],
  },
  {
    id: 329,
    character: "酒店",
    pinyin: "jiǔdiàn",
    meaning: "hotel",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=酒店",
    examples: [
      {
        character: "我们住在这家酒店。",
        pinyin: "Wǒmen zhù zài zhè jiā jiǔdiàn.",
        meaning: "We're staying at this hotel.",
      },
      {
        character: "这家酒店很舒服。",
        pinyin: "Zhè jiā jiǔdiàn hěn shūfu.",
        meaning: "This hotel is very comfortable.",
      },
    ],
  },
  {
    id: 330,
    character: "旅馆",
    pinyin: "lǚguǎn",
    meaning: "inn, hotel",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=旅馆",
    examples: [
      {
        character: "这家旅馆很便宜。",
        pinyin: "Zhè jiā lǚguǎn hěn piányi.",
        meaning: "This inn is very cheap.",
      },
      {
        character: "我们住在旅馆里。",
        pinyin: "Wǒmen zhù zài lǚguǎn lǐ.",
        meaning: "We're staying in the inn.",
      },
    ],
  },

  // Travel items
  {
    id: 331,
    character: "行李箱",
    pinyin: "xínglǐxiāng",
    meaning: "suitcase",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=行李箱",
    examples: [
      {
        character: "我的行李箱很重。",
        pinyin: "Wǒ de xínglǐxiāng hěn zhòng.",
        meaning: "My suitcase is very heavy.",
      },
      {
        character: "这个行李箱是红色的。",
        pinyin: "Zhège xínglǐxiāng shì hóngsè de.",
        meaning: "This suitcase is red.",
      },
    ],
  },
  {
    id: 332,
    character: "背包",
    pinyin: "bēibāo",
    meaning: "backpack",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=背包",
    examples: [
      {
        character: "我的背包里有很多东西。",
        pinyin: "Wǒ de bēibāo lǐ yǒu hěn duō dōngxi.",
        meaning: "There are many things in my backpack.",
      },
      {
        character: "这个背包很轻。",
        pinyin: "Zhège bēibāo hěn qīng.",
        meaning: "This backpack is very light.",
      },
    ],
  },
  {
    id: 333,
    character: "地图",
    pinyin: "dìtú",
    meaning: "map",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=地图",
    examples: [
      {
        character: "我看地图找路。",
        pinyin: "Wǒ kàn dìtú zhǎo lù.",
        meaning: "I'm looking at the map to find the way.",
      },
      {
        character: "这张地图很旧了。",
        pinyin: "Zhè zhāng dìtú hěn jiù le.",
        meaning: "This map is very old.",
      },
    ],
  },
  {
    id: 334,
    character: "指南针",
    pinyin: "zhǐnánzhēn",
    meaning: "compass",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=指南针",
    examples: [
      {
        character: "我用指南针找方向。",
        pinyin: "Wǒ yòng zhǐnánzhēn zhǎo fāngxiàng.",
        meaning: "I use a compass to find direction.",
      },
      {
        character: "这个指南针坏了。",
        pinyin: "Zhège zhǐnánzhēn huài le.",
        meaning: "This compass is broken.",
      },
    ],
  },
  {
    id: 335,
    character: "相机",
    pinyin: "xiàngjī",
    meaning: "camera",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=相机",
    examples: [
      {
        character: "我带相机去旅行。",
        pinyin: "Wǒ dài xiàngjī qù lǚxíng.",
        meaning: "I'm taking a camera on my trip.",
      },
      {
        character: "这个相机很贵。",
        pinyin: "Zhège xiàngjī hěn guì.",
        meaning: "This camera is very expensive.",
      },
    ],
  },

  // Travel verbs
  {
    id: 336,
    character: "出发",
    pinyin: "chūfā",
    meaning: "to set off, to start",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=出发",
    examples: [
      {
        character: "我们明天早上出发。",
        pinyin: "Wǒmen míngtiān zǎoshang chūfā.",
        meaning: "We're setting off tomorrow morning.",
      },
      {
        character: "他们已经出发了。",
        pinyin: "Tāmen yǐjīng chūfā le.",
        meaning: "They have already set off.",
      },
    ],
  },
  {
    id: 337,
    character: "到达",
    pinyin: "dàodá",
    meaning: "to arrive",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=到达",
    examples: [
      {
        character: "我们什么时候到达？",
        pinyin: "Wǒmen shénme shíhou dàodá?",
        meaning: "When will we arrive?",
      },
      {
        character: "飞机已经到达了。",
        pinyin: "Fēijī yǐjīng dàodá le.",
        meaning: "The plane has already arrived.",
      },
    ],
  },
  {
    id: 338,
    character: "检查",
    pinyin: "jiǎnchá",
    meaning: "to check, to inspect",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=检查",
    examples: [
      {
        character: "海关检查我的行李。",
        pinyin: "Hǎiguān jiǎnchá wǒ de xíngli.",
        meaning: "Customs is checking my luggage.",
      },
      {
        character: "请检查你的护照。",
        pinyin: "Qǐng jiǎnchá nǐ de hùzhào.",
        meaning: "Please check your passport.",
      },
    ],
  },
  {
    id: 339,
    character: "订",
    pinyin: "dìng",
    meaning: "to book, to reserve",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=订",
    examples: [
      {
        character: "我要订机票。",
        pinyin: "Wǒ yào dìng jīpiào.",
        meaning: "I want to book a flight ticket.",
      },
      {
        character: "你订了酒店吗？",
        pinyin: "Nǐ dìng le jiǔdiàn ma?",
        meaning: "Have you booked a hotel?",
      },
    ],
  },
  {
    id: 340,
    character: "换",
    pinyin: "huàn",
    meaning: "to change, to exchange",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=换",
    examples: [
      {
        character: "我要换钱。",
        pinyin: "Wǒ yào huàn qián.",
        meaning: "I want to exchange money.",
      },
      {
        character: "我们需要换车。",
        pinyin: "Wǒmen xūyào huàn chē.",
        meaning: "We need to change vehicles.",
      },
    ],
  },

  // Directions
  {
    id: 341,
    character: "东",
    pinyin: "dōng",
    meaning: "east",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=东",
    examples: [
      {
        character: "太阳从东方升起。",
        pinyin: "Tàiyáng cóng dōngfāng shēngqǐ.",
        meaning: "The sun rises from the east.",
      },
      {
        character: "我家在东边。",
        pinyin: "Wǒ jiā zài dōngbiān.",
        meaning: "My home is in the east.",
      },
    ],
  },
  {
    id: 342,
    character: "南",
    pinyin: "nán",
    meaning: "south",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=南",
    examples: [
      {
        character: "鸟儿飞向南方。",
        pinyin: "Niǎo'er fēi xiàng nánfāng.",
        meaning: "Birds fly towards the south.",
      },
      {
        character: "南边比较热。",
        pinyin: "Nánbiān bǐjiào rè.",
        meaning: "The south is relatively hot.",
      },
    ],
  },
  {
    id: 343,
    character: "西",
    pinyin: "xī",
    meaning: "west",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=西",
    examples: [
      {
        character: "太阳从西边落下。",
        pinyin: "Tàiyáng cóng xībiān luòxià.",
        meaning: "The sun sets in the west.",
      },
      {
        character: "我家在西边。",
        pinyin: "Wǒ jiā zài xībiān.",
        meaning: "My home is in the west.",
      },
    ],
  },
  {
    id: 344,
    character: "北",
    pinyin: "běi",
    meaning: "north",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=北",
    examples: [
      {
        character: "北方比较冷。",
        pinyin: "Běifāng bǐjiào lěng.",
        meaning: "The north is relatively cold.",
      },
      {
        character: "我们向北走。",
        pinyin: "Wǒmen xiàng běi zǒu.",
        meaning: "We're walking north.",
      },
    ],
  },
  {
    id: 345,
    character: "左",
    pinyin: "zuǒ",
    meaning: "left",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=左",
    examples: [
      {
        character: "向左转。",
        pinyin: "Xiàng zuǒ zhuǎn.",
        meaning: "Turn left.",
      },
      {
        character: "商店在左边。",
        pinyin: "Shāngdiàn zài zuǒbiān.",
        meaning: "The store is on the left.",
      },
    ],
  },
  {
    id: 346,
    character: "右",
    pinyin: "yòu",
    meaning: "right",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=右",
    examples: [
      {
        character: "向右转。",
        pinyin: "Xiàng yòu zhuǎn.",
        meaning: "Turn right.",
      },
      {
        character: "银行在右边。",
        pinyin: "Yínháng zài yòubiān.",
        meaning: "The bank is on the right.",
      },
    ],
  },
  {
    id: 347,
    character: "前",
    pinyin: "qián",
    meaning: "front, forward",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=前",
    examples: [
      {
        character: "向前走。",
        pinyin: "Xiàng qián zǒu.",
        meaning: "Walk forward.",
      },
      {
        character: "学校在前面。",
        pinyin: "Xuéxiào zài qiánmiàn.",
        meaning: "The school is ahead.",
      },
    ],
  },
  {
    id: 348,
    character: "后",
    pinyin: "hòu",
    meaning: "back, behind",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=后",
    examples: [
      {
        character: "公园在后面。",
        pinyin: "Gōngyuán zài hòumiàn.",
        meaning: "The park is behind.",
      },
      {
        character: "他站在我后面。",
        pinyin: "Tā zhàn zài wǒ hòumiàn.",
        meaning: "He is standing behind me.",
      },
    ],
  },
  {
    id: 349,
    character: "上",
    pinyin: "shàng",
    meaning: "up, above",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=上",
    examples: [
      {
        character: "鸟在天上飞。",
        pinyin: "Niǎo zài tiān shàng fēi.",
        meaning: "Birds fly in the sky.",
      },
      {
        character: "书在桌子上。",
        pinyin: "Shū zài zhuōzi shàng.",
        meaning: "The book is on the table.",
      },
    ],
  },
  {
    id: 350,
    character: "下",
    pinyin: "xià",
    meaning: "down, below",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=下",
    examples: [
      {
        character: "猫在桌子下面。",
        pinyin: "Māo zài zhuōzi xiàmiàn.",
        meaning: "The cat is under the table.",
      },
      {
        character: "我们往下走。",
        pinyin: "Wǒmen wǎng xià zǒu.",
        meaning: "We're going down.",
      },
    ],
  },
  // Additional travel words
  {
    id: 351,
    character: "旅游",
    pinyin: "lǚyóu",
    meaning: "travel, tourism",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=旅游",
    examples: [
      {
        character: "我喜欢旅游。",
        pinyin: "Wǒ xǐhuān lǚyóu.",
        meaning: "I like to travel.",
      },
      {
        character: "旅游很有趣。",
        pinyin: "Lǚyóu hěn yǒuqù.",
        meaning: "Travel is very interesting.",
      },
    ],
  },
  {
    id: 352,
    character: "旅行",
    pinyin: "lǚxíng",
    meaning: "trip, journey",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=旅行",
    examples: [
      {
        character: "我们计划旅行。",
        pinyin: "Wǒmen jìhuà lǚxíng.",
        meaning: "We plan to travel.",
      },
      {
        character: "旅行很愉快。",
        pinyin: "Lǚxíng hěn yúkuài.",
        meaning: "The trip is very pleasant.",
      },
    ],
  },
  {
    id: 353,
    character: "度假",
    pinyin: "dùjià",
    meaning: "vacation",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=度假",
    examples: [
      {
        character: "我要去度假。",
        pinyin: "Wǒ yào qù dùjià.",
        meaning: "I'm going on vacation.",
      },
      {
        character: "度假很放松。",
        pinyin: "Dùjià hěn fàngsōng.",
        meaning: "Vacation is very relaxing.",
      },
    ],
  },
  {
    id: 354,
    character: "景点",
    pinyin: "jǐngdiǎn",
    meaning: "scenic spot",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=景点",
    examples: [
      {
        character: "这个景点很美。",
        pinyin: "Zhège jǐngdiǎn hěn měi.",
        meaning: "This scenic spot is very beautiful.",
      },
      {
        character: "我们参观景点。",
        pinyin: "Wǒmen cānguān jǐngdiǎn.",
        meaning: "We visit scenic spots.",
      },
    ],
  },
  {
    id: 355,
    character: "导游",
    pinyin: "dǎoyóu",
    meaning: "tour guide",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=导游",
    examples: [
      {
        character: "导游很专业。",
        pinyin: "Dǎoyóu hěn zhuānyè.",
        meaning: "The tour guide is very professional.",
      },
      {
        character: "我们跟着导游。",
        pinyin: "Wǒmen gēnzhe dǎoyóu.",
        meaning: "We follow the tour guide.",
      },
    ],
  },
  {
    id: 356,
    character: "护照",
    pinyin: "hùzhào",
    meaning: "passport",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=护照",
    examples: [
      {
        character: "请出示护照。",
        pinyin: "Qǐng chūshì hùzhào.",
        meaning: "Please show your passport.",
      },
      {
        character: "我的护照在这里。",
        pinyin: "Wǒ de hùzhào zài zhèlǐ.",
        meaning: "My passport is here.",
      },
    ],
  },
  {
    id: 357,
    character: "签证",
    pinyin: "qiānzhèng",
    meaning: "visa",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=签证",
    examples: [
      {
        character: "我需要签证。",
        pinyin: "Wǒ xūyào qiānzhèng.",
        meaning: "I need a visa.",
      },
      {
        character: "签证申请很复杂。",
        pinyin: "Qiānzhèng shēnqǐng hěn fùzá.",
        meaning: "Visa application is very complicated.",
      },
    ],
  },
  {
    id: 358,
    character: "海关",
    pinyin: "hǎiguān",
    meaning: "customs",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=海关",
    examples: [
      {
        character: "通过海关。",
        pinyin: "Tōngguò hǎiguān.",
        meaning: "Go through customs.",
      },
      {
        character: "海关检查行李。",
        pinyin: "Hǎiguān jiǎnchá xíngli.",
        meaning: "Customs checks luggage.",
      },
    ],
  },
  {
    id: 359,
    character: "行李",
    pinyin: "xíngli",
    meaning: "luggage",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=行李",
    examples: [
      {
        character: "我的行李很重。",
        pinyin: "Wǒ de xíngli hěn zhòng.",
        meaning: "My luggage is very heavy.",
      },
      {
        character: "请拿好行李。",
        pinyin: "Qǐng ná hǎo xíngli.",
        meaning: "Please take care of your luggage.",
      },
    ],
  },
  {
    id: 360,
    character: "背包",
    pinyin: "bēibāo",
    meaning: "backpack",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=背包",
    examples: [
      {
        character: "我背着背包。",
        pinyin: "Wǒ bēizhe bēibāo.",
        meaning: "I'm carrying a backpack.",
      },
      {
        character: "背包很实用。",
        pinyin: "Bēibāo hěn shíyòng.",
        meaning: "Backpacks are very practical.",
      },
    ],
  },
  {
    id: 361,
    character: "地图",
    pinyin: "dìtú",
    meaning: "map",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=地图",
    examples: [
      {
        character: "我需要地图。",
        pinyin: "Wǒ xūyào dìtú.",
        meaning: "I need a map.",
      },
      {
        character: "地图很有用。",
        pinyin: "Dìtú hěn yǒuyòng.",
        meaning: "Maps are very useful.",
      },
    ],
  },
  {
    id: 362,
    character: "指南针",
    pinyin: "zhǐnánzhēn",
    meaning: "compass",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=指南针",
    examples: [
      {
        character: "指南针指向北方。",
        pinyin: "Zhǐnánzhēn zhǐxiàng běifāng.",
        meaning: "The compass points north.",
      },
      {
        character: "我带了指南针。",
        pinyin: "Wǒ dài le zhǐnánzhēn.",
        meaning: "I brought a compass.",
      },
    ],
  },
  {
    id: 363,
    character: "相机",
    pinyin: "xiàngjī",
    meaning: "camera",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=相机",
    examples: [
      {
        character: "我带了相机。",
        pinyin: "Wǒ dài le xiàngjī.",
        meaning: "I brought a camera.",
      },
      {
        character: "相机拍照很清楚。",
        pinyin: "Xiàngjī pāizhào hěn qīngchu.",
        meaning: "The camera takes very clear photos.",
      },
    ],
  },
  {
    id: 364,
    character: "照片",
    pinyin: "zhàopiàn",
    meaning: "photo",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=照片",
    examples: [
      {
        character: "我拍了很多照片。",
        pinyin: "Wǒ pāi le hěn duō zhàopiàn.",
        meaning: "I took many photos.",
      },
      {
        character: "这张照片很美。",
        pinyin: "Zhè zhāng zhàopiàn hěn měi.",
        meaning: "This photo is very beautiful.",
      },
    ],
  },
  {
    id: 365,
    character: "纪念品",
    pinyin: "jìniànpǐn",
    meaning: "souvenir",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=纪念品",
    examples: [
      {
        character: "我买了纪念品。",
        pinyin: "Wǒ mǎi le jìniànpǐn.",
        meaning: "I bought souvenirs.",
      },
      {
        character: "纪念品很有意义。",
        pinyin: "Jìniànpǐn hěn yǒu yìyì.",
        meaning: "Souvenirs are very meaningful.",
      },
    ],
  },
  {
    id: 366,
    character: "预订",
    pinyin: "yùdìng",
    meaning: "reservation",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=预订",
    examples: [
      {
        character: "我要预订房间。",
        pinyin: "Wǒ yào yùdìng fángjiān.",
        meaning: "I want to book a room.",
      },
      {
        character: "预订很重要。",
        pinyin: "Yùdìng hěn zhòngyào.",
        meaning: "Reservations are very important.",
      },
    ],
  },
  {
    id: 367,
    character: "取消",
    pinyin: "qǔxiāo",
    meaning: "cancel",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=取消",
    examples: [
      {
        character: "我要取消预订。",
        pinyin: "Wǒ yào qǔxiāo yùdìng.",
        meaning: "I want to cancel the reservation.",
      },
      {
        character: "航班被取消了。",
        pinyin: "Hángbān bèi qǔxiāo le.",
        meaning: "The flight was cancelled.",
      },
    ],
  },
  {
    id: 368,
    character: "延误",
    pinyin: "yánwù",
    meaning: "delay",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=延误",
    examples: [
      {
        character: "航班延误了。",
        pinyin: "Hángbān yánwù le.",
        meaning: "The flight is delayed.",
      },
      {
        character: "延误很麻烦。",
        pinyin: "Yánwù hěn máfan.",
        meaning: "Delays are very troublesome.",
      },
    ],
  },
  {
    id: 369,
    character: "安全",
    pinyin: "ānquán",
    meaning: "safety",
    partOfSpeech: "n/adj",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=安全",
    examples: [
      {
        character: "安全很重要。",
        pinyin: "Ānquán hěn zhòngyào.",
        meaning: "Safety is very important.",
      },
      {
        character: "这里很安全。",
        pinyin: "Zhèlǐ hěn ānquán.",
        meaning: "It's very safe here.",
      },
    ],
  },
  {
    id: 370,
    character: "保险",
    pinyin: "bǎoxiǎn",
    meaning: "insurance",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=保险",
    examples: [
      {
        character: "我买了旅行保险。",
        pinyin: "Wǒ mǎi le lǚxíng bǎoxiǎn.",
        meaning: "I bought travel insurance.",
      },
      {
        character: "保险很有用。",
        pinyin: "Bǎoxiǎn hěn yǒuyòng.",
        meaning: "Insurance is very useful.",
      },
    ],
  },
  // Additional words
  {
    id: 751,
    character: "旅程",
    pinyin: "lǚchéng",
    meaning: "journey",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%97%85%E7%A8%8B",
    examples: [
      {
        character: "这是旅程的例句。",
        pinyin: "Zhè shì lǚchéng de lìjù.",
        meaning: "This is an example sentence for journey.",
      },
      {
        character: "我喜欢旅程。",
        pinyin: "Wǒ xǐhuān lǚchéng.",
        meaning: "I like journey.",
      },
    ],
  },
  {
    id: 752,
    character: "探索",
    pinyin: "tànsuò",
    meaning: "explore",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%8E%A2%E7%B4%A2",
    examples: [
      {
        character: "这是探索的例句。",
        pinyin: "Zhè shì tànsuò de lìjù.",
        meaning: "This is an example sentence for explore.",
      },
      {
        character: "我喜欢探索。",
        pinyin: "Wǒ xǐhuān tànsuò.",
        meaning: "I like explore.",
      },
    ],
  },
  {
    id: 753,
    character: "冒险",
    pinyin: "màoxiǎn",
    meaning: "adventure",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E5%86%92%E9%99%A9",
    examples: [
      {
        character: "这是冒险的例句。",
        pinyin: "Zhè shì màoxiǎn de lìjù.",
        meaning: "This is an example sentence for adventure.",
      },
      {
        character: "我喜欢冒险。",
        pinyin: "Wǒ xǐhuān màoxiǎn.",
        meaning: "I like adventure.",
      },
    ],
  },
  {
    id: 754,
    character: "体验",
    pinyin: "tǐyàn",
    meaning: "experience",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E4%BD%93%E9%AA%8C",
    examples: [
      {
        character: "这是体验的例句。",
        pinyin: "Zhè shì tǐyàn de lìjù.",
        meaning: "This is an example sentence for experience.",
      },
      {
        character: "我喜欢体验。",
        pinyin: "Wǒ xǐhuān tǐyàn.",
        meaning: "I like experience.",
      },
    ],
  },
  {
    id: 755,
    character: "文化",
    pinyin: "wénhuà",
    meaning: "culture",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%96%87%E5%8C%96",
    examples: [
      {
        character: "这是文化的例句。",
        pinyin: "Zhè shì wénhuà de lìjù.",
        meaning: "This is an example sentence for culture.",
      },
      {
        character: "我喜欢文化。",
        pinyin: "Wǒ xǐhuān wénhuà.",
        meaning: "I like culture.",
      },
    ],
  },
  {
    id: 756,
    character: "风景",
    pinyin: "fēngjǐng",
    meaning: "scenery",
    partOfSpeech: "n",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E9%A3%8E%E6%99%AF",
    examples: [
      {
        character: "这是风景的例句。",
        pinyin: "Zhè shì fēngjǐng de lìjù.",
        meaning: "This is an example sentence for scenery.",
      },
      {
        character: "我喜欢风景。",
        pinyin: "Wǒ xǐhuān fēngjǐng.",
        meaning: "I like scenery.",
      },
    ],
  },
  {
    id: 757,
    character: "纪念",
    pinyin: "jìniàn",
    meaning: "commemorate",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E7%BA%AA%E5%BF%B5",
    examples: [
      {
        character: "这是纪念的例句。",
        pinyin: "Zhè shì jìniàn de lìjù.",
        meaning: "This is an example sentence for commemorate.",
      },
      {
        character: "我喜欢纪念。",
        pinyin: "Wǒ xǐhuān jìniàn.",
        meaning: "I like commemorate.",
      },
    ],
  },
  {
    id: 758,
    character: "回忆",
    pinyin: "huíyì",
    meaning: "memory",
    partOfSpeech: "n/v",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E5%9B%9E%E5%BF%86",
    examples: [
      {
        character: "这是回忆的例句。",
        pinyin: "Zhè shì huíyì de lìjù.",
        meaning: "This is an example sentence for memory.",
      },
      {
        character: "我喜欢回忆。",
        pinyin: "Wǒ xǐhuān huíyì.",
        meaning: "I like memory.",
      },
    ],
  },
  {
    id: 759,
    character: "放松",
    pinyin: "fàngsōng",
    meaning: "relax",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%94%BE%E6%9D%BE",
    examples: [
      {
        character: "这是放松的例句。",
        pinyin: "Zhè shì fàngsōng de lìjù.",
        meaning: "This is an example sentence for relax.",
      },
      {
        character: "我喜欢放松。",
        pinyin: "Wǒ xǐhuān fàngsōng.",
        meaning: "I like relax.",
      },
    ],
  },
  {
    id: 760,
    character: "享受",
    pinyin: "xiǎngshòu",
    meaning: "enjoy",
    partOfSpeech: "v",
    category: "travel",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E4%BA%AB%E5%8F%97",
    examples: [
      {
        character: "这是享受的例句。",
        pinyin: "Zhè shì xiǎngshòu de lìjù.",
        meaning: "This is an example sentence for enjoy.",
      },
      {
        character: "我喜欢享受。",
        pinyin: "Wǒ xǐhuān xiǎngshòu.",
        meaning: "I like enjoy.",
      },
    ],
  }
];

export default travelWords;
