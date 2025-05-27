// Entertainment and hobbies vocabulary
const entertainmentWords = [
  // Entertainment
  {
    id: 1001,
    character: "电影",
    pinyin: "diànyǐng",
    meaning: "movie, film",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=电影",
    examples: [
      {
        character: "我喜欢看电影。",
        pinyin: "Wǒ xǐhuān kàn diànyǐng.",
        meaning: "I like to watch movies.",
      },
      {
        character: "这部电影很有趣。",
        pinyin: "Zhè bù diànyǐng hěn yǒuqù.",
        meaning: "This movie is very interesting.",
      },
    ],
  },
  {
    id: 1002,
    character: "电视",
    pinyin: "diànshì",
    meaning: "television, TV",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=电视",
    examples: [
      {
        character: "我喜欢看电视。",
        pinyin: "Wǒ xǐhuān kàn diànshì.",
        meaning: "I like to watch TV.",
      },
      {
        character: "这台电视很大。",
        pinyin: "Zhè tái diànshì hěn dà.",
        meaning: "This TV is very big.",
      },
    ],
  },
  {
    id: 1003,
    character: "音乐",
    pinyin: "yīnyuè",
    meaning: "music",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=音乐",
    examples: [
      {
        character: "我喜欢听音乐。",
        pinyin: "Wǒ xǐhuān tīng yīnyuè.",
        meaning: "I like to listen to music.",
      },
      {
        character: "这首音乐很好听。",
        pinyin: "Zhè shǒu yīnyuè hěn hǎotīng.",
        meaning: "This piece of music sounds very good.",
      },
    ],
  },
  {
    id: 1004,
    character: "歌",
    pinyin: "gē",
    meaning: "song",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=歌",
    examples: [
      {
        character: "我喜欢唱歌。",
        pinyin: "Wǒ xǐhuān chàng gē.",
        meaning: "I like to sing songs.",
      },
      {
        character: "这首歌很好听。",
        pinyin: "Zhè shǒu gē hěn hǎotīng.",
        meaning: "This song sounds very good.",
      },
    ],
  },
  {
    id: 1005,
    character: "跳舞",
    pinyin: "tiàowǔ",
    meaning: "to dance",
    partOfSpeech: "v",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=跳舞",
    examples: [
      {
        character: "我喜欢跳舞。",
        pinyin: "Wǒ xǐhuān tiàowǔ.",
        meaning: "I like to dance.",
      },
      {
        character: "她跳舞跳得很好。",
        pinyin: "Tā tiàowǔ tiào de hěn hǎo.",
        meaning: "She dances very well.",
      },
    ],
  },
  {
    id: 1006,
    character: "游戏",
    pinyin: "yóuxì",
    meaning: "game",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=游戏",
    examples: [
      {
        character: "我喜欢玩游戏。",
        pinyin: "Wǒ xǐhuān wán yóuxì.",
        meaning: "I like to play games.",
      },
      {
        character: "这个游戏很有趣。",
        pinyin: "Zhège yóuxì hěn yǒuqù.",
        meaning: "This game is very interesting.",
      },
    ],
  },
  {
    id: 1007,
    character: "运动",
    pinyin: "yùndòng",
    meaning: "sports, exercise",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=运动",
    examples: [
      {
        character: "我喜欢运动。",
        pinyin: "Wǒ xǐhuān yùndòng.",
        meaning: "I like to exercise.",
      },
      {
        character: "运动对身体很好。",
        pinyin: "Yùndòng duì shēntǐ hěn hǎo.",
        meaning: "Exercise is good for the body.",
      },
    ],
  },
  {
    id: 1008,
    character: "足球",
    pinyin: "zúqiú",
    meaning: "football, soccer",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=足球",
    examples: [
      {
        character: "我喜欢踢足球。",
        pinyin: "Wǒ xǐhuān tī zúqiú.",
        meaning: "I like to play soccer.",
      },
      {
        character: "他是足球运动员。",
        pinyin: "Tā shì zúqiú yùndòngyuán.",
        meaning: "He is a soccer player.",
      },
    ],
  },
  {
    id: 1009,
    character: "篮球",
    pinyin: "lánqiú",
    meaning: "basketball",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=篮球",
    examples: [
      {
        character: "我喜欢打篮球。",
        pinyin: "Wǒ xǐhuān dǎ lánqiú.",
        meaning: "I like to play basketball.",
      },
      {
        character: "他是篮球运动员。",
        pinyin: "Tā shì lánqiú yùndòngyuán.",
        meaning: "He is a basketball player.",
      },
    ],
  },
  {
    id: 1010,
    character: "网球",
    pinyin: "wǎngqiú",
    meaning: "tennis",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=网球",
    examples: [
      {
        character: "我喜欢打网球。",
        pinyin: "Wǒ xǐhuān dǎ wǎngqiú.",
        meaning: "I like to play tennis.",
      },
      {
        character: "他是网球运动员。",
        pinyin: "Tā shì wǎngqiú yùndòngyuán.",
        meaning: "He is a tennis player.",
      },
    ],
  },

  // Hobbies
  {
    id: 1011,
    character: "爱好",
    pinyin: "àihào",
    meaning: "hobby, interest",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=爱好",
    examples: [
      {
        character: "我有很多爱好。",
        pinyin: "Wǒ yǒu hěn duō àihào.",
        meaning: "I have many hobbies.",
      },
      {
        character: "你的爱好是什么？",
        pinyin: "Nǐ de àihào shì shénme?",
        meaning: "What are your hobbies?",
      },
    ],
  },
  {
    id: 1012,
    character: "读书",
    pinyin: "dúshū",
    meaning: "to read books",
    partOfSpeech: "v",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=读书",
    examples: [
      {
        character: "我喜欢读书。",
        pinyin: "Wǒ xǐhuān dúshū.",
        meaning: "I like to read books.",
      },
      {
        character: "读书使人明智。",
        pinyin: "Dúshū shǐ rén míngzhì.",
        meaning: "Reading makes people wise.",
      },
    ],
  },
  {
    id: 1013,
    character: "画画",
    pinyin: "huàhuà",
    meaning: "to draw, to paint",
    partOfSpeech: "v",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=画画",
    examples: [
      {
        character: "我喜欢画画。",
        pinyin: "Wǒ xǐhuān huàhuà.",
        meaning: "I like to draw.",
      },
      {
        character: "她画画画得很好。",
        pinyin: "Tā huàhuà huà de hěn hǎo.",
        meaning: "She draws very well.",
      },
    ],
  },
  {
    id: 1014,
    character: "摄影",
    pinyin: "shèyǐng",
    meaning: "photography",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=摄影",
    examples: [
      {
        character: "我喜欢摄影。",
        pinyin: "Wǒ xǐhuān shèyǐng.",
        meaning: "I like photography.",
      },
      {
        character: "这是我的摄影作品。",
        pinyin: "Zhè shì wǒ de shèyǐng zuòpǐn.",
        meaning: "This is my photography work.",
      },
    ],
  },
  {
    id: 1015,
    character: "旅游",
    pinyin: "lǚyóu",
    meaning: "to travel, tourism",
    partOfSpeech: "v/n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=旅游",
    examples: [
      {
        character: "我喜欢旅游。",
        pinyin: "Wǒ xǐhuān lǚyóu.",
        meaning: "I like to travel.",
      },
      {
        character: "旅游可以开阔眼界。",
        pinyin: "Lǚyóu kěyǐ kāikuò yǎnjiè.",
        meaning: "Traveling can broaden one's horizons.",
      },
    ],
  },
  {
    id: 1016,
    character: "钓鱼",
    pinyin: "diàoyú",
    meaning: "to fish",
    partOfSpeech: "v",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=钓鱼",
    examples: [
      {
        character: "我爸爸喜欢钓鱼。",
        pinyin: "Wǒ bàba xǐhuān diàoyú.",
        meaning: "My father likes to fish.",
      },
      {
        character: "周末我们去钓鱼吧。",
        pinyin: "Zhōumò wǒmen qù diàoyú ba.",
        meaning: "Let's go fishing on the weekend.",
      },
    ],
  },
  {
    id: 1017,
    character: "园艺",
    pinyin: "yuányì",
    meaning: "gardening",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=园艺",
    examples: [
      {
        character: "我奶奶喜欢园艺。",
        pinyin: "Wǒ nǎinai xǐhuān yuányì.",
        meaning: "My grandmother likes gardening.",
      },
      {
        character: "园艺是一种放松的方式。",
        pinyin: "Yuányì shì yì zhǒng fàngsōng de fāngshì.",
        meaning: "Gardening is a way to relax.",
      },
    ],
  },
  {
    id: 1018,
    character: "烹饪",
    pinyin: "pēngrèn",
    meaning: "cooking",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=烹饪",
    examples: [
      {
        character: "我喜欢烹饪。",
        pinyin: "Wǒ xǐhuān pēngrèn.",
        meaning: "I like cooking.",
      },
      {
        character: "烹饪是一门艺术。",
        pinyin: "Pēngrèn shì yì mén yìshù.",
        meaning: "Cooking is an art.",
      },
    ],
  },
  {
    id: 1019,
    character: "收藏",
    pinyin: "shōucáng",
    meaning: "to collect, collection",
    partOfSpeech: "v/n",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=收藏",
    examples: [
      {
        character: "我喜欢收藏邮票。",
        pinyin: "Wǒ xǐhuān shōucáng yóupiào.",
        meaning: "I like to collect stamps.",
      },
      {
        character: "这是我的收藏品。",
        pinyin: "Zhè shì wǒ de shōucáng pǐn.",
        meaning: "These are my collectibles.",
      },
    ],
  },
  {
    id: 1020,
    character: "下棋",
    pinyin: "xià qí",
    meaning: "to play chess",
    partOfSpeech: "v",
    category: "entertainment",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=下棋",
    examples: [
      {
        character: "我爷爷喜欢下棋。",
        pinyin: "Wǒ yéye xǐhuān xià qí.",
        meaning: "My grandfather likes to play chess.",
      },
      {
        character: "我们一起下棋吧。",
        pinyin: "Wǒmen yìqǐ xià qí ba.",
        meaning: "Let's play chess together.",
      },
    ],
  },
  // Additional entertainment words
  {
    id: 1021,
    character: "娱乐",
    pinyin: "yúlè",
    meaning: "entertainment",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=娱乐",
    examples: [
      {
        character: "这是一个娱乐节目。",
        pinyin: "Zhè shì yí gè yúlè jiémù.",
        meaning: "This is an entertainment program.",
      },
      {
        character: "我们需要一些娱乐活动。",
        pinyin: "Wǒmen xūyào yìxiē yúlè huódòng.",
        meaning: "We need some entertainment activities.",
      },
    ],
  },
  {
    id: 1022,
    character: "表演",
    pinyin: "biǎoyǎn",
    meaning: "performance, to perform",
    partOfSpeech: "n/v",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=表演",
    examples: [
      {
        character: "他的表演很精彩。",
        pinyin: "Tā de biǎoyǎn hěn jīngcǎi.",
        meaning: "His performance is wonderful.",
      },
      {
        character: "我们要表演一个节目。",
        pinyin: "Wǒmen yào biǎoyǎn yí gè jiémù.",
        meaning: "We are going to perform a program.",
      },
    ],
  },
  {
    id: 1023,
    character: "观众",
    pinyin: "guānzhòng",
    meaning: "audience",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=观众",
    examples: [
      {
        character: "观众很喜欢这个节目。",
        pinyin: "Guānzhòng hěn xǐhuān zhège jiémù.",
        meaning: "The audience really likes this program.",
      },
      {
        character: "今天有很多观众。",
        pinyin: "Jīntiān yǒu hěn duō guānzhòng.",
        meaning: "There are many audience members today.",
      },
    ],
  },
  {
    id: 1024,
    character: "节目",
    pinyin: "jiémù",
    meaning: "program, show",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=节目",
    examples: [
      {
        character: "这个节目很有趣。",
        pinyin: "Zhège jiémù hěn yǒuqù.",
        meaning: "This program is very interesting.",
      },
      {
        character: "电视节目开始了。",
        pinyin: "Diànshì jiémù kāishǐ le.",
        meaning: "The TV program has started.",
      },
    ],
  },
  {
    id: 1025,
    character: "演员",
    pinyin: "yǎnyuán",
    meaning: "actor, actress",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=演员",
    examples: [
      {
        character: "她是一个著名的演员。",
        pinyin: "Tā shì yí gè zhùmíng de yǎnyuán.",
        meaning: "She is a famous actress.",
      },
      {
        character: "这个演员演得很好。",
        pinyin: "Zhège yǎnyuán yǎn de hěn hǎo.",
        meaning: "This actor acts very well.",
      },
    ],
  },
  {
    id: 1026,
    character: "导演",
    pinyin: "dǎoyǎn",
    meaning: "director",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=导演",
    examples: [
      {
        character: "这个导演很有名。",
        pinyin: "Zhège dǎoyǎn hěn yǒumíng.",
        meaning: "This director is very famous.",
      },
      {
        character: "导演正在拍电影。",
        pinyin: "Dǎoyǎn zhèngzài pāi diànyǐng.",
        meaning: "The director is filming a movie.",
      },
    ],
  },
  {
    id: 1027,
    character: "剧院",
    pinyin: "jùyuàn",
    meaning: "theater",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=剧院",
    examples: [
      {
        character: "我们去剧院看戏。",
        pinyin: "Wǒmen qù jùyuàn kàn xì.",
        meaning: "We go to the theater to watch a play.",
      },
      {
        character: "这个剧院很大。",
        pinyin: "Zhège jùyuàn hěn dà.",
        meaning: "This theater is very big.",
      },
    ],
  },
  {
    id: 1028,
    character: "音响",
    pinyin: "yīnxiǎng",
    meaning: "sound system, audio",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=音响",
    examples: [
      {
        character: "音响效果很好。",
        pinyin: "Yīnxiǎng xiàoguò hěn hǎo.",
        meaning: "The sound effect is very good.",
      },
      {
        character: "请调大音响。",
        pinyin: "Qǐng tiáo dà yīnxiǎng.",
        meaning: "Please turn up the sound system.",
      },
    ],
  },
  {
    id: 1029,
    character: "舞台",
    pinyin: "wǔtái",
    meaning: "stage",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=舞台",
    examples: [
      {
        character: "演员在舞台上表演。",
        pinyin: "Yǎnyuán zài wǔtái shàng biǎoyǎn.",
        meaning: "The actors perform on the stage.",
      },
      {
        character: "舞台很漂亮。",
        pinyin: "Wǔtái hěn piàoliang.",
        meaning: "The stage is very beautiful.",
      },
    ],
  },
  {
    id: 1030,
    character: "票",
    pinyin: "piào",
    meaning: "ticket",
    partOfSpeech: "n",
    category: "entertainment",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=票",
    examples: [
      {
        character: "我买了两张电影票。",
        pinyin: "Wǒ mǎi le liǎng zhāng diànyǐng piào.",
        meaning: "I bought two movie tickets.",
      },
      {
        character: "票价很贵。",
        pinyin: "Piàojià hěn guì.",
        meaning: "The ticket price is very expensive.",
      },
    ],
  },
];

export default entertainmentWords;
