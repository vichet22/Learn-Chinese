// Basic Chinese words (pronouns, numbers, common verbs, etc.)
const basicWords = [
  // Pronouns
  {
    id: 1,
    character: "我",
    pinyin: "wǒ",
    meaning: "I, me",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=我",
    examples: [
      {
        character: "我是学生。",
        pinyin: "Wǒ shì xuéshēng.",
        meaning: "I am a student.",
      },
      {
        character: "请给我一杯水。",
        pinyin: "Qǐng gěi wǒ yì bēi shuǐ.",
        meaning: "Please give me a glass of water.",
      },
    ],
  },
  {
    id: 2,
    character: "你",
    pinyin: "nǐ",
    meaning: "you (singular)",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=你",
    examples: [
      {
        character: "你好吗？",
        pinyin: "Nǐ hǎo ma?",
        meaning: "How are you?",
      },
      {
        character: "你叫什么名字？",
        pinyin: "Nǐ jiào shénme míngzì?",
        meaning: "What's your name?",
      },
    ],
  },
  {
    id: 3,
    character: "他",
    pinyin: "tā",
    meaning: "he, him",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=他",
    examples: [
      {
        character: "他是我的朋友。",
        pinyin: "Tā shì wǒ de péngyǒu.",
        meaning: "He is my friend.",
      },
      {
        character: "他在学习中文。",
        pinyin: "Tā zài xuéxí Zhōngwén.",
        meaning: "He is learning Chinese.",
      },
    ],
  },
  {
    id: 4,
    character: "她",
    pinyin: "tā",
    meaning: "she, her",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=她",
    examples: [
      {
        character: "她是医生。",
        pinyin: "Tā shì yīshēng.",
        meaning: "She is a doctor.",
      },
      {
        character: "她喜欢跳舞。",
        pinyin: "Tā xǐhuān tiàowǔ.",
        meaning: "She likes to dance.",
      },
    ],
  },
  {
    id: 5,
    character: "它",
    pinyin: "tā",
    meaning: "it",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=它",
    examples: [
      {
        character: "它是一只猫。",
        pinyin: "Tā shì yì zhī māo.",
        meaning: "It is a cat.",
      },
      {
        character: "我喜欢它。",
        pinyin: "Wǒ xǐhuān tā.",
        meaning: "I like it.",
      },
    ],
  },
  {
    id: 6,
    character: "我们",
    pinyin: "wǒmen",
    meaning: "we, us",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=我们",
    examples: [
      {
        character: "我们是中国人。",
        pinyin: "Wǒmen shì Zhōngguó rén.",
        meaning: "We are Chinese.",
      },
      {
        character: "我们一起去吧。",
        pinyin: "Wǒmen yìqǐ qù ba.",
        meaning: "Let's go together.",
      },
    ],
  },
  {
    id: 7,
    character: "你们",
    pinyin: "nǐmen",
    meaning: "you (plural)",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=你们",
    examples: [
      {
        character: "你们好！",
        pinyin: "Nǐmen hǎo!",
        meaning: "Hello everyone!",
      },
      {
        character: "你们都是学生吗？",
        pinyin: "Nǐmen dōu shì xuéshēng ma?",
        meaning: "Are you all students?",
      },
    ],
  },
  {
    id: 8,
    character: "他们",
    pinyin: "tāmen",
    meaning: "they, them (male or mixed)",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=他们",
    examples: [
      {
        character: "他们在公园里。",
        pinyin: "Tāmen zài gōngyuán lǐ.",
        meaning: "They are in the park.",
      },
      {
        character: "他们是老师。",
        pinyin: "Tāmen shì lǎoshī.",
        meaning: "They are teachers.",
      },
    ],
  },
  {
    id: 9,
    character: "她们",
    pinyin: "tāmen",
    meaning: "they, them (female)",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=她们",
    examples: [
      {
        character: "她们是姐妹。",
        pinyin: "Tāmen shì jiěmèi.",
        meaning: "They are sisters.",
      },
      {
        character: "她们在唱歌。",
        pinyin: "Tāmen zài chànggē.",
        meaning: "They are singing.",
      },
    ],
  },
  {
    id: 10,
    character: "这",
    pinyin: "zhè",
    meaning: "this",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=这",
    examples: [
      {
        character: "这是什么？",
        pinyin: "Zhè shì shénme?",
        meaning: "What is this?",
      },
      {
        character: "这本书很有趣。",
        pinyin: "Zhè běn shū hěn yǒuqù.",
        meaning: "This book is very interesting.",
      },
    ],
  },
  {
    id: 11,
    character: "那",
    pinyin: "nà",
    meaning: "that",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=那",
    examples: [
      {
        character: "那是谁的手机？",
        pinyin: "Nà shì shéi de shǒujī?",
        meaning: "Whose phone is that?",
      },
      {
        character: "我喜欢那个。",
        pinyin: "Wǒ xǐhuān nàge.",
        meaning: "I like that one.",
      },
    ],
  },
  {
    id: 12,
    character: "什么",
    pinyin: "shénme",
    meaning: "what",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=什么",
    examples: [
      {
        character: "你想吃什么？",
        pinyin: "Nǐ xiǎng chī shénme?",
        meaning: "What do you want to eat?",
      },
      {
        character: "这是什么意思？",
        pinyin: "Zhè shì shénme yìsi?",
        meaning: "What does this mean?",
      },
    ],
  },
  {
    id: 13,
    character: "谁",
    pinyin: "shéi",
    meaning: "who",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=谁",
    examples: [
      {
        character: "谁是你的老师？",
        pinyin: "Shéi shì nǐ de lǎoshī?",
        meaning: "Who is your teacher?",
      },
      {
        character: "你在等谁？",
        pinyin: "Nǐ zài děng shéi?",
        meaning: "Who are you waiting for?",
      },
    ],
  },
  {
    id: 14,
    character: "哪里",
    pinyin: "nǎlǐ",
    meaning: "where",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=哪里",
    examples: [
      {
        character: "你来自哪里？",
        pinyin: "Nǐ láizì nǎlǐ?",
        meaning: "Where are you from?",
      },
      {
        character: "你的手机在哪里？",
        pinyin: "Nǐ de shǒujī zài nǎlǐ?",
        meaning: "Where is your phone?",
      },
    ],
  },
  {
    id: 15,
    character: "为什么",
    pinyin: "wèishénme",
    meaning: "why",
    partOfSpeech: "pron",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=为什么",
    examples: [
      {
        character: "你为什么学中文？",
        pinyin: "Nǐ wèishénme xué Zhōngwén?",
        meaning: "Why do you learn Chinese?",
      },
      {
        character: "为什么你不来？",
        pinyin: "Wèishénme nǐ bù lái?",
        meaning: "Why don't you come?",
      },
    ],
  },

  // Basic Verbs
  {
    id: 16,
    character: "是",
    pinyin: "shì",
    meaning: "to be",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=是",
    examples: [
      {
        character: "我是学生。",
        pinyin: "Wǒ shì xuéshēng.",
        meaning: "I am a student.",
      },
      {
        character: "这是我的书。",
        pinyin: "Zhè shì wǒ de shū.",
        meaning: "This is my book.",
      },
    ],
  },
  {
    id: 17,
    character: "有",
    pinyin: "yǒu",
    meaning: "to have",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=有",
    examples: [
      {
        character: "我有一本书。",
        pinyin: "Wǒ yǒu yì běn shū.",
        meaning: "I have a book.",
      },
      {
        character: "你有时间吗？",
        pinyin: "Nǐ yǒu shíjiān ma?",
        meaning: "Do you have time?",
      },
    ],
  },
  {
    id: 18,
    character: "去",
    pinyin: "qù",
    meaning: "to go",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=去",
    examples: [
      {
        character: "我去学校。",
        pinyin: "Wǒ qù xuéxiào.",
        meaning: "I go to school.",
      },
      {
        character: "你想去哪里？",
        pinyin: "Nǐ xiǎng qù nǎlǐ?",
        meaning: "Where do you want to go?",
      },
    ],
  },
  {
    id: 19,
    character: "来",
    pinyin: "lái",
    meaning: "to come",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=来",
    examples: [
      {
        character: "请来我家。",
        pinyin: "Qǐng lái wǒ jiā.",
        meaning: "Please come to my home.",
      },
      {
        character: "他明天来。",
        pinyin: "Tā míngtiān lái.",
        meaning: "He will come tomorrow.",
      },
    ],
  },
  {
    id: 20,
    character: "做",
    pinyin: "zuò",
    meaning: "to do, to make",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=做",
    examples: [
      {
        character: "你在做什么？",
        pinyin: "Nǐ zài zuò shénme?",
        meaning: "What are you doing?",
      },
      {
        character: "我喜欢做饭。",
        pinyin: "Wǒ xǐhuān zuò fàn.",
        meaning: "I like to cook.",
      },
    ],
  },

  // More basic verbs
  {
    id: 21,
    character: "看",
    pinyin: "kàn",
    meaning: "to look, to see, to watch",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=看",
    examples: [
      {
        character: "我喜欢看电影。",
        pinyin: "Wǒ xǐhuān kàn diànyǐng.",
        meaning: "I like to watch movies.",
      },
      {
        character: "你看见我的手机了吗？",
        pinyin: "Nǐ kànjiàn wǒ de shǒujī le ma?",
        meaning: "Have you seen my phone?",
      },
    ],
  },
  {
    id: 22,
    character: "听",
    pinyin: "tīng",
    meaning: "to listen, to hear",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=听",
    examples: [
      {
        character: "我喜欢听音乐。",
        pinyin: "Wǒ xǐhuān tīng yīnyuè.",
        meaning: "I like to listen to music.",
      },
      {
        character: "你听到那个声音了吗？",
        pinyin: "Nǐ tīng dào nàge shēngyīn le ma?",
        meaning: "Did you hear that sound?",
      },
    ],
  },
  {
    id: 23,
    character: "说",
    pinyin: "shuō",
    meaning: "to speak, to say",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=说",
    examples: [
      {
        character: "你说什么？",
        pinyin: "Nǐ shuō shénme?",
        meaning: "What did you say?",
      },
      {
        character: "我会说一点中文。",
        pinyin: "Wǒ huì shuō yìdiǎn Zhōngwén.",
        meaning: "I can speak a little Chinese.",
      },
    ],
  },
  {
    id: 24,
    character: "吃",
    pinyin: "chī",
    meaning: "to eat",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=吃",
    examples: [
      {
        character: "我想吃饭。",
        pinyin: "Wǒ xiǎng chī fàn.",
        meaning: "I want to eat.",
      },
      {
        character: "你吃早饭了吗？",
        pinyin: "Nǐ chī zǎofàn le ma?",
        meaning: "Have you eaten breakfast?",
      },
    ],
  },
  {
    id: 25,
    character: "喝",
    pinyin: "hē",
    meaning: "to drink",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=喝",
    examples: [
      {
        character: "我想喝水。",
        pinyin: "Wǒ xiǎng hē shuǐ.",
        meaning: "I want to drink water.",
      },
      {
        character: "你喜欢喝茶还是咖啡？",
        pinyin: "Nǐ xǐhuān hē chá háishì kāfēi?",
        meaning: "Do you like to drink tea or coffee?",
      },
    ],
  },
  {
    id: 26,
    character: "睡觉",
    pinyin: "shuìjiào",
    meaning: "to sleep",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=睡觉",
    examples: [
      {
        character: "我想睡觉。",
        pinyin: "Wǒ xiǎng shuìjiào.",
        meaning: "I want to sleep.",
      },
      {
        character: "你几点睡觉？",
        pinyin: "Nǐ jǐ diǎn shuìjiào?",
        meaning: "What time do you go to sleep?",
      },
    ],
  },
  {
    id: 27,
    character: "穿",
    pinyin: "chuān",
    meaning: "to wear, to put on",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=穿",
    examples: [
      {
        character: "今天你穿什么？",
        pinyin: "Jīntiān nǐ chuān shénme?",
        meaning: "What are you wearing today?",
      },
      {
        character: "天冷了，多穿点衣服。",
        pinyin: "Tiān lěng le, duō chuān diǎn yīfu.",
        meaning: "It's cold, wear more clothes.",
      },
    ],
  },
  {
    id: 28,
    character: "想",
    pinyin: "xiǎng",
    meaning: "to think, to want",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=想",
    examples: [
      {
        character: "我想你。",
        pinyin: "Wǒ xiǎng nǐ.",
        meaning: "I miss you.",
      },
      {
        character: "你想吃什么？",
        pinyin: "Nǐ xiǎng chī shénme?",
        meaning: "What do you want to eat?",
      },
    ],
  },
  {
    id: 29,
    character: "爱",
    pinyin: "ài",
    meaning: "to love",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=爱",
    examples: [
      {
        character: "我爱你。",
        pinyin: "Wǒ ài nǐ.",
        meaning: "I love you.",
      },
      {
        character: "我爱我的家人。",
        pinyin: "Wǒ ài wǒ de jiārén.",
        meaning: "I love my family.",
      },
    ],
  },
  {
    id: 30,
    character: "喜欢",
    pinyin: "xǐhuān",
    meaning: "to like",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=喜欢",
    examples: [
      {
        character: "我喜欢你。",
        pinyin: "Wǒ xǐhuān nǐ.",
        meaning: "I like you.",
      },
      {
        character: "你喜欢什么颜色？",
        pinyin: "Nǐ xǐhuān shénme yánsè?",
        meaning: "What color do you like?",
      },
    ],
  },

  // Basic adjectives
  {
    id: 31,
    character: "好",
    pinyin: "hǎo",
    meaning: "good",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=好",
    examples: [
      {
        character: "这个很好。",
        pinyin: "Zhège hěn hǎo.",
        meaning: "This is very good.",
      },
      {
        character: "你好吗？",
        pinyin: "Nǐ hǎo ma?",
        meaning: "How are you?",
      },
    ],
  },
  {
    id: 32,
    character: "坏",
    pinyin: "huài",
    meaning: "bad",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=坏",
    examples: [
      {
        character: "这个水果坏了。",
        pinyin: "Zhège shuǐguǒ huài le.",
        meaning: "This fruit has gone bad.",
      },
      {
        character: "他不是坏人。",
        pinyin: "Tā bú shì huài rén.",
        meaning: "He is not a bad person.",
      },
    ],
  },
  {
    id: 33,
    character: "大",
    pinyin: "dà",
    meaning: "big, large",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=大",
    examples: [
      {
        character: "这个房子很大。",
        pinyin: "Zhège fángzi hěn dà.",
        meaning: "This house is very big.",
      },
      {
        character: "我哥哥比我大三岁。",
        pinyin: "Wǒ gēge bǐ wǒ dà sān suì.",
        meaning: "My older brother is three years older than me.",
      },
    ],
  },
  {
    id: 34,
    character: "小",
    pinyin: "xiǎo",
    meaning: "small, little",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=小",
    examples: [
      {
        character: "这个房子很小。",
        pinyin: "Zhège fángzi hěn xiǎo.",
        meaning: "This house is very small.",
      },
      {
        character: "我有一只小狗。",
        pinyin: "Wǒ yǒu yì zhī xiǎo gǒu.",
        meaning: "I have a small dog.",
      },
    ],
  },
  {
    id: 35,
    character: "多",
    pinyin: "duō",
    meaning: "many, much",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=多",
    examples: [
      {
        character: "这里有很多人。",
        pinyin: "Zhèlǐ yǒu hěn duō rén.",
        meaning: "There are many people here.",
      },
      {
        character: "你有多少钱？",
        pinyin: "Nǐ yǒu duōshao qián?",
        meaning: "How much money do you have?",
      },
    ],
  },
  {
    id: 36,
    character: "少",
    pinyin: "shǎo",
    meaning: "few, little",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=少",
    examples: [
      {
        character: "这里人很少。",
        pinyin: "Zhèlǐ rén hěn shǎo.",
        meaning: "There are few people here.",
      },
      {
        character: "我吃得很少。",
        pinyin: "Wǒ chī de hěn shǎo.",
        meaning: "I eat very little.",
      },
    ],
  },
  {
    id: 37,
    character: "热",
    pinyin: "rè",
    meaning: "hot",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=热",
    examples: [
      {
        character: "今天很热。",
        pinyin: "Jīntiān hěn rè.",
        meaning: "Today is very hot.",
      },
      {
        character: "这个汤很热。",
        pinyin: "Zhège tāng hěn rè.",
        meaning: "This soup is very hot.",
      },
    ],
  },
  {
    id: 38,
    character: "冷",
    pinyin: "lěng",
    meaning: "cold",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=冷",
    examples: [
      {
        character: "今天很冷。",
        pinyin: "Jīntiān hěn lěng.",
        meaning: "Today is very cold.",
      },
      {
        character: "这个水很冷。",
        pinyin: "Zhège shuǐ hěn lěng.",
        meaning: "This water is very cold.",
      },
    ],
  },
  {
    id: 39,
    character: "高",
    pinyin: "gāo",
    meaning: "tall, high",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=高",
    examples: [
      {
        character: "这座山很高。",
        pinyin: "Zhè zuò shān hěn gāo.",
        meaning: "This mountain is very high.",
      },
      {
        character: "他很高。",
        pinyin: "Tā hěn gāo.",
        meaning: "He is very tall.",
      },
    ],
  },
  {
    id: 40,
    character: "矮",
    pinyin: "ǎi",
    meaning: "short (height)",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=矮",
    examples: [
      {
        character: "这棵树很矮。",
        pinyin: "Zhè kē shù hěn ǎi.",
        meaning: "This tree is very short.",
      },
      {
        character: "我比他矮。",
        pinyin: "Wǒ bǐ tā ǎi.",
        meaning: "I am shorter than him.",
      },
    ],
  },

  // Basic adverbs
  {
    id: 41,
    character: "很",
    pinyin: "hěn",
    meaning: "very",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=很",
    examples: [
      {
        character: "这个很好。",
        pinyin: "Zhège hěn hǎo.",
        meaning: "This is very good.",
      },
      {
        character: "我很喜欢你。",
        pinyin: "Wǒ hěn xǐhuān nǐ.",
        meaning: "I like you very much.",
      },
    ],
  },
  {
    id: 42,
    character: "太",
    pinyin: "tài",
    meaning: "too, extremely",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=太",
    examples: [
      {
        character: "这个太贵了。",
        pinyin: "Zhège tài guì le.",
        meaning: "This is too expensive.",
      },
      {
        character: "我太累了。",
        pinyin: "Wǒ tài lèi le.",
        meaning: "I am too tired.",
      },
    ],
  },
  {
    id: 43,
    character: "都",
    pinyin: "dōu",
    meaning: "all, both",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=都",
    examples: [
      {
        character: "我们都喜欢吃饭。",
        pinyin: "Wǒmen dōu xǐhuān chīfàn.",
        meaning: "We all like to eat.",
      },
      {
        character: "这些书我都看过了。",
        pinyin: "Zhèxiē shū wǒ dōu kàn guò le.",
        meaning: "I have read all these books.",
      },
    ],
  },
  {
    id: 44,
    character: "也",
    pinyin: "yě",
    meaning: "also, too",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=也",
    examples: [
      {
        character: "我也喜欢。",
        pinyin: "Wǒ yě xǐhuān.",
        meaning: "I also like it.",
      },
      {
        character: "他也去。",
        pinyin: "Tā yě qù.",
        meaning: "He is also going.",
      },
    ],
  },
  {
    id: 45,
    character: "不",
    pinyin: "bù",
    meaning: "not, no",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=不",
    examples: [
      {
        character: "我不知道。",
        pinyin: "Wǒ bù zhīdào.",
        meaning: "I don't know.",
      },
      {
        character: "他不喜欢吃鱼。",
        pinyin: "Tā bù xǐhuān chī yú.",
        meaning: "He doesn't like to eat fish.",
      },
    ],
  },
  {
    id: 46,
    character: "没",
    pinyin: "méi",
    meaning: "not, have not",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=没",
    examples: [
      {
        character: "我没有钱。",
        pinyin: "Wǒ méiyǒu qián.",
        meaning: "I don't have money.",
      },
      {
        character: "他没去。",
        pinyin: "Tā méi qù.",
        meaning: "He didn't go.",
      },
    ],
  },
  {
    id: 47,
    character: "在",
    pinyin: "zài",
    meaning: "at, in, on",
    partOfSpeech: "prep",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=在",
    examples: [
      {
        character: "我在家。",
        pinyin: "Wǒ zài jiā.",
        meaning: "I am at home.",
      },
      {
        character: "书在桌子上。",
        pinyin: "Shū zài zhuōzi shàng.",
        meaning: "The book is on the table.",
      },
    ],
  },
  {
    id: 48,
    character: "和",
    pinyin: "hé",
    meaning: "and, with",
    partOfSpeech: "conj",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=和",
    examples: [
      {
        character: "我和你一起去。",
        pinyin: "Wǒ hé nǐ yìqǐ qù.",
        meaning: "I will go with you.",
      },
      {
        character: "苹果和香蕉",
        pinyin: "píngguǒ hé xiāngjiāo",
        meaning: "apples and bananas",
      },
    ],
  },
  {
    id: 49,
    character: "的",
    pinyin: "de",
    meaning: "possessive particle",
    partOfSpeech: "part",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=的",
    examples: [
      {
        character: "我的书",
        pinyin: "wǒ de shū",
        meaning: "my book",
      },
      {
        character: "红色的衣服",
        pinyin: "hóngsè de yīfu",
        meaning: "red clothes",
      },
    ],
  },
  {
    id: 50,
    character: "了",
    pinyin: "le",
    meaning: "completed action particle",
    partOfSpeech: "part",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=了",
    examples: [
      {
        character: "我吃了饭。",
        pinyin: "Wǒ chī le fàn.",
        meaning: "I have eaten.",
      },
      {
        character: "他走了。",
        pinyin: "Tā zǒu le.",
        meaning: "He has left.",
      },
    ],
  },
  // Modal verbs and auxiliary verbs
  {
    id: 51,
    character: "会",
    pinyin: "huì",
    meaning: "can, will, to know how to",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=会",
    examples: [
      {
        character: "我会说中文。",
        pinyin: "Wǒ huì shuō Zhōngwén.",
        meaning: "I can speak Chinese.",
      },
      {
        character: "他会来吗？",
        pinyin: "Tā huì lái ma?",
        meaning: "Will he come?",
      },
    ],
  },
  {
    id: 52,
    character: "能",
    pinyin: "néng",
    meaning: "can, to be able to",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=能",
    examples: [
      {
        character: "你能帮我吗？",
        pinyin: "Nǐ néng bāng wǒ ma?",
        meaning: "Can you help me?",
      },
      {
        character: "我不能去。",
        pinyin: "Wǒ bù néng qù.",
        meaning: "I cannot go.",
      },
    ],
  },
  {
    id: 53,
    character: "可以",
    pinyin: "kěyǐ",
    meaning: "can, may, possible",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=可以",
    examples: [
      {
        character: "我可以进来吗？",
        pinyin: "Wǒ kěyǐ jìnlái ma?",
        meaning: "May I come in?",
      },
      {
        character: "这个可以吃吗？",
        pinyin: "Zhège kěyǐ chī ma?",
        meaning: "Can this be eaten?",
      },
    ],
  },
  {
    id: 54,
    character: "要",
    pinyin: "yào",
    meaning: "to want, to need",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=要",
    examples: [
      {
        character: "我要去北京。",
        pinyin: "Wǒ yào qù Běijīng.",
        meaning: "I want to go to Beijing.",
      },
      {
        character: "你要什么？",
        pinyin: "Nǐ yào shénme?",
        meaning: "What do you want?",
      },
    ],
  },
  {
    id: 55,
    character: "想",
    pinyin: "xiǎng",
    meaning: "to think, to want",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=想",
    examples: [
      {
        character: "我想你了。",
        pinyin: "Wǒ xiǎng nǐ le.",
        meaning: "I miss you.",
      },
      {
        character: "我想吃饭。",
        pinyin: "Wǒ xiǎng chī fàn.",
        meaning: "I want to eat.",
      },
    ],
  },

  // Conjunctions
  {
    id: 56,
    character: "和",
    pinyin: "hé",
    meaning: "and",
    partOfSpeech: "conj",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=和",
    examples: [
      {
        character: "我和你",
        pinyin: "wǒ hé nǐ",
        meaning: "you and me",
      },
      {
        character: "茶和咖啡",
        pinyin: "chá hé kāfēi",
        meaning: "tea and coffee",
      },
    ],
  },
  {
    id: 57,
    character: "但是",
    pinyin: "dànshì",
    meaning: "but, however",
    partOfSpeech: "conj",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=但是",
    examples: [
      {
        character: "我想去，但是我没有时间。",
        pinyin: "Wǒ xiǎng qù, dànshì wǒ méiyǒu shíjiān.",
        meaning: "I want to go, but I don't have time.",
      },
      {
        character: "他很聪明，但是很懒。",
        pinyin: "Tā hěn cōngmíng, dànshì hěn lǎn.",
        meaning: "He is smart, but lazy.",
      },
    ],
  },
  {
    id: 58,
    character: "因为",
    pinyin: "yīnwèi",
    meaning: "because",
    partOfSpeech: "conj",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=因为",
    examples: [
      {
        character: "因为下雨，所以我没去。",
        pinyin: "Yīnwèi xià yǔ, suǒyǐ wǒ méi qù.",
        meaning: "Because it was raining, I didn't go.",
      },
      {
        character: "我学中文因为我喜欢中国文化。",
        pinyin: "Wǒ xué Zhōngwén yīnwèi wǒ xǐhuān Zhōngguó wénhuà.",
        meaning: "I study Chinese because I like Chinese culture.",
      },
    ],
  },
  {
    id: 59,
    character: "所以",
    pinyin: "suǒyǐ",
    meaning: "so, therefore",
    partOfSpeech: "conj",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=所以",
    examples: [
      {
        character: "我很忙，所以我不能去。",
        pinyin: "Wǒ hěn máng, suǒyǐ wǒ bù néng qù.",
        meaning: "I'm very busy, so I can't go.",
      },
      {
        character: "他生病了，所以没来上课。",
        pinyin: "Tā shēngbìng le, suǒyǐ méi lái shàngkè.",
        meaning: "He got sick, so he didn't come to class.",
      },
    ],
  },
  {
    id: 60,
    character: "如果",
    pinyin: "rúguǒ",
    meaning: "if",
    partOfSpeech: "conj",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=如果",
    examples: [
      {
        character: "如果明天下雨，我就不去了。",
        pinyin: "Rúguǒ míngtiān xià yǔ, wǒ jiù bú qù le.",
        meaning: "If it rains tomorrow, I won't go.",
      },
      {
        character: "如果你有时间，我们一起去吧。",
        pinyin: "Rúguǒ nǐ yǒu shíjiān, wǒmen yìqǐ qù ba.",
        meaning: "If you have time, let's go together.",
      },
    ],
  },

  // Prepositions
  {
    id: 61,
    character: "在",
    pinyin: "zài",
    meaning: "at, in, on",
    partOfSpeech: "prep",
    category: "basic",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=在",
    examples: [
      {
        character: "我在家。",
        pinyin: "Wǒ zài jiā.",
        meaning: "I am at home.",
      },
      {
        character: "书在桌子上。",
        pinyin: "Shū zài zhuōzi shàng.",
        meaning: "The book is on the table.",
      },
    ],
  },
  {
    id: 62,
    character: "从",
    pinyin: "cóng",
    meaning: "from",
    partOfSpeech: "prep",
    category: "basic",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=从",
    examples: [
      {
        character: "从北京到上海",
        pinyin: "Cóng Běijīng dào Shànghǎi",
        meaning: "From Beijing to Shanghai",
      },
      {
        character: "从早上到晚上",
        pinyin: "Cóng zǎoshang dào wǎnshang",
        meaning: "From morning to evening",
      },
    ],
  },
  {
    id: 63,
    character: "对",
    pinyin: "duì",
    meaning: "to, towards",
    partOfSpeech: "prep",
    category: "basic",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=对",
    examples: [
      {
        character: "对不起",
        pinyin: "Duìbuqǐ",
        meaning: "Sorry",
      },
      {
        character: "他对我说",
        pinyin: "Tā duì wǒ shuō",
        meaning: "He said to me",
      },
    ],
  },
  {
    id: 64,
    character: "给",
    pinyin: "gěi",
    meaning: "to, for",
    partOfSpeech: "prep",
    category: "basic",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=给",
    examples: [
      {
        character: "给我",
        pinyin: "Gěi wǒ",
        meaning: "Give me",
      },
      {
        character: "我给你买了一本书",
        pinyin: "Wǒ gěi nǐ mǎi le yì běn shū",
        meaning: "I bought a book for you",
      },
    ],
  },
  {
    id: 65,
    character: "向",
    pinyin: "xiàng",
    meaning: "towards, to",
    partOfSpeech: "prep",
    category: "basic",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=向",
    examples: [
      {
        character: "向左转",
        pinyin: "Xiàng zuǒ zhuǎn",
        meaning: "Turn left",
      },
      {
        character: "向老师问好",
        pinyin: "Xiàng lǎoshī wènhǎo",
        meaning: "Say hello to the teacher",
      },
    ],
  },

  // Time expressions
  {
    id: 66,
    character: "现在",
    pinyin: "xiànzài",
    meaning: "now",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=现在",
    examples: [
      {
        character: "现在几点了？",
        pinyin: "Xiànzài jǐ diǎn le?",
        meaning: "What time is it now?",
      },
      {
        character: "我现在很忙。",
        pinyin: "Wǒ xiànzài hěn máng.",
        meaning: "I am very busy now.",
      },
    ],
  },
  {
    id: 67,
    character: "今天",
    pinyin: "jīntiān",
    meaning: "today",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=今天",
    examples: [
      {
        character: "今天天气很好。",
        pinyin: "Jīntiān tiānqì hěn hǎo.",
        meaning: "The weather is very good today.",
      },
      {
        character: "今天是星期一。",
        pinyin: "Jīntiān shì xīngqī yī.",
        meaning: "Today is Monday.",
      },
    ],
  },
  {
    id: 68,
    character: "明天",
    pinyin: "míngtiān",
    meaning: "tomorrow",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=明天",
    examples: [
      {
        character: "明天见！",
        pinyin: "Míngtiān jiàn!",
        meaning: "See you tomorrow!",
      },
      {
        character: "明天我要去北京。",
        pinyin: "Míngtiān wǒ yào qù Běijīng.",
        meaning: "Tomorrow I will go to Beijing.",
      },
    ],
  },
  {
    id: 69,
    character: "昨天",
    pinyin: "zuótiān",
    meaning: "yesterday",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=昨天",
    examples: [
      {
        character: "昨天我很忙。",
        pinyin: "Zuótiān wǒ hěn máng.",
        meaning: "I was very busy yesterday.",
      },
      {
        character: "昨天下雨了。",
        pinyin: "Zuótiān xià yǔ le.",
        meaning: "It rained yesterday.",
      },
    ],
  },
  {
    id: 70,
    character: "时间",
    pinyin: "shíjiān",
    meaning: "time",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=时间",
    examples: [
      {
        character: "我没有时间。",
        pinyin: "Wǒ méiyǒu shíjiān.",
        meaning: "I don't have time.",
      },
      {
        character: "时间过得真快。",
        pinyin: "Shíjiān guò de zhēn kuài.",
        meaning: "Time passes so quickly.",
      },
    ],
  },

  // Directional words
  {
    id: 71,
    character: "上",
    pinyin: "shàng",
    meaning: "up, above, on",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=上",
    examples: [
      {
        character: "在桌子上",
        pinyin: "Zài zhuōzi shàng",
        meaning: "On the table",
      },
      {
        character: "上学",
        pinyin: "shàng xué",
        meaning: "Go to school",
      },
    ],
  },
  {
    id: 72,
    character: "下",
    pinyin: "xià",
    meaning: "down, below, under",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=下",
    examples: [
      {
        character: "在桌子下",
        pinyin: "Zài zhuōzi xià",
        meaning: "Under the table",
      },
      {
        character: "下雨",
        pinyin: "xià yǔ",
        meaning: "To rain",
      },
    ],
  },
  {
    id: 73,
    character: "前",
    pinyin: "qián",
    meaning: "front, before, ahead",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=前",
    examples: [
      {
        character: "前门",
        pinyin: "qián mén",
        meaning: "Front door",
      },
      {
        character: "在我前面",
        pinyin: "Zài wǒ qiánmiàn",
        meaning: "In front of me",
      },
    ],
  },
  {
    id: 74,
    character: "后",
    pinyin: "hòu",
    meaning: "back, behind, after",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=后",
    examples: [
      {
        character: "后门",
        pinyin: "hòu mén",
        meaning: "Back door",
      },
      {
        character: "在我后面",
        pinyin: "Zài wǒ hòumiàn",
        meaning: "Behind me",
      },
    ],
  },
  {
    id: 75,
    character: "里",
    pinyin: "lǐ",
    meaning: "inside, internal",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=里",
    examples: [
      {
        character: "房子里",
        pinyin: "fángzi lǐ",
        meaning: "Inside the house",
      },
      {
        character: "在里面",
        pinyin: "Zài lǐmiàn",
        meaning: "Inside",
      },
    ],
  },
  {
    id: 76,
    character: "外",
    pinyin: "wài",
    meaning: "outside, external",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=外",
    examples: [
      {
        character: "在外面",
        pinyin: "Zài wàimiàn",
        meaning: "Outside",
      },
      {
        character: "外国人",
        pinyin: "wàiguó rén",
        meaning: "Foreigner",
      },
    ],
  },
  {
    id: 77,
    character: "左",
    pinyin: "zuǒ",
    meaning: "left",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=左",
    examples: [
      {
        character: "在左边",
        pinyin: "Zài zuǒbiān",
        meaning: "On the left",
      },
      {
        character: "左手",
        pinyin: "zuǒ shǒu",
        meaning: "Left hand",
      },
    ],
  },
  {
    id: 78,
    character: "右",
    pinyin: "yòu",
    meaning: "right",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=右",
    examples: [
      {
        character: "在右边",
        pinyin: "Zài yòubiān",
        meaning: "On the right",
      },
      {
        character: "右手",
        pinyin: "yòu shǒu",
        meaning: "Right hand",
      },
    ],
  },
  {
    id: 79,
    character: "旁边",
    pinyin: "pángbiān",
    meaning: "side, beside",
    partOfSpeech: "n",
    category: "basic",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=旁边",
    examples: [
      {
        character: "在我旁边",
        pinyin: "Zài wǒ pángbiān",
        meaning: "Beside me",
      },
      {
        character: "坐在旁边",
        pinyin: "Zuò zài pángbiān",
        meaning: "Sit beside",
      },
    ],
  },

  // Question words and particles
  {
    id: 80,
    character: "吗",
    pinyin: "ma",
    meaning: "question particle",
    partOfSpeech: "part",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=吗",
    examples: [
      {
        character: "你好吗？",
        pinyin: "Nǐ hǎo ma?",
        meaning: "How are you?",
      },
      {
        character: "你是学生吗？",
        pinyin: "Nǐ shì xuéshēng ma?",
        meaning: "Are you a student?",
      },
    ],
  },
  {
    id: 81,
    character: "呢",
    pinyin: "ne",
    meaning: "question particle",
    partOfSpeech: "part",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=呢",
    examples: [
      {
        character: "你呢？",
        pinyin: "Nǐ ne?",
        meaning: "And you?",
      },
      {
        character: "他在哪里呢？",
        pinyin: "Tā zài nǎlǐ ne?",
        meaning: "Where is he?",
      },
    ],
  },
  {
    id: 82,
    character: "吧",
    pinyin: "ba",
    meaning: "suggestion particle",
    partOfSpeech: "part",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=吧",
    examples: [
      {
        character: "我们走吧。",
        pinyin: "Wǒmen zǒu ba.",
        meaning: "Let's go.",
      },
      {
        character: "你是中国人吧？",
        pinyin: "Nǐ shì Zhōngguó rén ba?",
        meaning: "You're Chinese, right?",
      },
    ],
  },
  {
    id: 83,
    character: "了",
    pinyin: "le",
    meaning: "completed action particle",
    partOfSpeech: "part",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=了",
    examples: [
      {
        character: "我吃了饭。",
        pinyin: "Wǒ chī le fàn.",
        meaning: "I ate.",
      },
      {
        character: "他走了。",
        pinyin: "Tā zǒu le.",
        meaning: "He left.",
      },
    ],
  },
  {
    id: 84,
    character: "的",
    pinyin: "de",
    meaning: "possessive particle",
    partOfSpeech: "part",
    category: "basic",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=的",
    examples: [
      {
        character: "我的书",
        pinyin: "Wǒ de shū",
        meaning: "My book",
      },
      {
        character: "红色的衣服",
        pinyin: "Hóngsè de yīfu",
        meaning: "Red clothes",
      },
    ],
  },

  // Common adverbs
  {
    id: 85,
    character: "很",
    pinyin: "hěn",
    meaning: "very",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=很",
    examples: [
      {
        character: "很好",
        pinyin: "Hěn hǎo",
        meaning: "Very good",
      },
      {
        character: "很大",
        pinyin: "Hěn dà",
        meaning: "Very big",
      },
    ],
  },
  {
    id: 86,
    character: "非常",
    pinyin: "fēicháng",
    meaning: "extremely, very",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=非常",
    examples: [
      {
        character: "非常好",
        pinyin: "Fēicháng hǎo",
        meaning: "Extremely good",
      },
      {
        character: "非常感谢",
        pinyin: "Fēicháng gǎnxiè",
        meaning: "Thank you very much",
      },
    ],
  },
  {
    id: 87,
    character: "太",
    pinyin: "tài",
    meaning: "too, extremely",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=太",
    examples: [
      {
        character: "太好了",
        pinyin: "Tài hǎo le",
        meaning: "Great!",
      },
      {
        character: "太贵了",
        pinyin: "Tài guì le",
        meaning: "Too expensive",
      },
    ],
  },
  {
    id: 88,
    character: "真",
    pinyin: "zhēn",
    meaning: "really, truly",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=真",
    examples: [
      {
        character: "真好",
        pinyin: "Zhēn hǎo",
        meaning: "Really good",
      },
      {
        character: "真漂亮",
        pinyin: "Zhēn piàoliang",
        meaning: "Really beautiful",
      },
    ],
  },
  {
    id: 89,
    character: "还",
    pinyin: "hái",
    meaning: "still, yet, also",
    partOfSpeech: "adv",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=还",
    examples: [
      {
        character: "还有问题",
        pinyin: "Hái yǒu wèntí",
        meaning: "Still have questions",
      },
      {
        character: "我还要",
        pinyin: "Wǒ hái yào",
        meaning: "I still want",
      },
    ],
  },

  // More common verbs
  {
    id: 90,
    character: "开始",
    pinyin: "kāishǐ",
    meaning: "to begin, to start",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=开始",
    examples: [
      {
        character: "开始工作",
        pinyin: "Kāishǐ gōngzuò",
        meaning: "Start working",
      },
      {
        character: "电影开始了",
        pinyin: "Diànyǐng kāishǐ le",
        meaning: "The movie has started",
      },
    ],
  },
  {
    id: 91,
    character: "结束",
    pinyin: "jiéshù",
    meaning: "to end, to finish",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=结束",
    examples: [
      {
        character: "工作结束了",
        pinyin: "Gōngzuò jiéshù le",
        meaning: "Work has ended",
      },
      {
        character: "会议什么时候结束？",
        pinyin: "Huìyì shénme shíhou jiéshù?",
        meaning: "When does the meeting end?",
      },
    ],
  },
  {
    id: 92,
    character: "帮助",
    pinyin: "bāngzhù",
    meaning: "to help",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=帮助",
    examples: [
      {
        character: "请帮助我",
        pinyin: "Qǐng bāngzhù wǒ",
        meaning: "Please help me",
      },
      {
        character: "谢谢你的帮助",
        pinyin: "Xièxie nǐ de bāngzhù",
        meaning: "Thank you for your help",
      },
    ],
  },
  {
    id: 93,
    character: "需要",
    pinyin: "xūyào",
    meaning: "to need",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=需要",
    examples: [
      {
        character: "我需要帮助",
        pinyin: "Wǒ xūyào bāngzhù",
        meaning: "I need help",
      },
      {
        character: "你需要什么？",
        pinyin: "Nǐ xūyào shénme?",
        meaning: "What do you need?",
      },
    ],
  },
  {
    id: 94,
    character: "知道",
    pinyin: "zhīdào",
    meaning: "to know",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=知道",
    examples: [
      {
        character: "我知道",
        pinyin: "Wǒ zhīdào",
        meaning: "I know",
      },
      {
        character: "你知道吗？",
        pinyin: "Nǐ zhīdào ma?",
        meaning: "Do you know?",
      },
    ],
  },

  // Common adjectives
  {
    id: 95,
    character: "好",
    pinyin: "hǎo",
    meaning: "good",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=好",
    examples: [
      {
        character: "很好",
        pinyin: "Hěn hǎo",
        meaning: "Very good",
      },
      {
        character: "好人",
        pinyin: "Hǎo rén",
        meaning: "Good person",
      },
    ],
  },
  {
    id: 96,
    character: "坏",
    pinyin: "huài",
    meaning: "bad",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=坏",
    examples: [
      {
        character: "坏人",
        pinyin: "Huài rén",
        meaning: "Bad person",
      },
      {
        character: "这个水果坏了",
        pinyin: "Zhège shuǐguǒ huài le",
        meaning: "This fruit has gone bad",
      },
    ],
  },
  {
    id: 97,
    character: "新",
    pinyin: "xīn",
    meaning: "new",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=新",
    examples: [
      {
        character: "新衣服",
        pinyin: "Xīn yīfu",
        meaning: "New clothes",
      },
      {
        character: "新年",
        pinyin: "Xīnnián",
        meaning: "New Year",
      },
    ],
  },
  {
    id: 98,
    character: "旧",
    pinyin: "jiù",
    meaning: "old (not new)",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=旧",
    examples: [
      {
        character: "旧衣服",
        pinyin: "Jiù yīfu",
        meaning: "Old clothes",
      },
      {
        character: "旧书",
        pinyin: "Jiù shū",
        meaning: "Old book",
      },
    ],
  },
  {
    id: 99,
    character: "快",
    pinyin: "kuài",
    meaning: "fast, quick",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=快",
    examples: [
      {
        character: "很快",
        pinyin: "Hěn kuài",
        meaning: "Very fast",
      },
      {
        character: "快一点",
        pinyin: "Kuài yìdiǎn",
        meaning: "A bit faster",
      },
    ],
  },
  {
    id: 100,
    character: "慢",
    pinyin: "màn",
    meaning: "slow",
    partOfSpeech: "adj",
    category: "basic",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=慢",
    examples: [
      {
        character: "很慢",
        pinyin: "Hěn màn",
        meaning: "Very slow",
      },
      {
        character: "慢一点",
        pinyin: "Màn yìdiǎn",
        meaning: "A bit slower",
      },
    ],
  },

  // Additional basic words to reach 120 total
  {
    id: 101,
    character: "能",
    pinyin: "néng",
    meaning: "can, to be able to",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=能",
    examples: [
      {
        character: "我能说中文。",
        pinyin: "Wǒ néng shuō Zhōngwén.",
        meaning: "I can speak Chinese.",
      },
      {
        character: "你能帮我吗？",
        pinyin: "Nǐ néng bāng wǒ ma?",
        meaning: "Can you help me?",
      },
    ],
  },
  {
    id: 102,
    character: "会",
    pinyin: "huì",
    meaning: "can, know how to",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=会",
    examples: [
      {
        character: "我会游泳。",
        pinyin: "Wǒ huì yóuyǒng.",
        meaning: "I can swim.",
      },
      {
        character: "他会开车。",
        pinyin: "Tā huì kāichē.",
        meaning: "He can drive.",
      },
    ],
  },
  {
    id: 103,
    character: "想",
    pinyin: "xiǎng",
    meaning: "to want, to think",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=想",
    examples: [
      {
        character: "我想吃饭。",
        pinyin: "Wǒ xiǎng chīfàn.",
        meaning: "I want to eat.",
      },
      {
        character: "你想什么？",
        pinyin: "Nǐ xiǎng shénme?",
        meaning: "What are you thinking?",
      },
    ],
  },
  {
    id: 104,
    character: "知道",
    pinyin: "zhīdào",
    meaning: "to know",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=知道",
    examples: [
      {
        character: "我知道这个地方。",
        pinyin: "Wǒ zhīdào zhège dìfāng.",
        meaning: "I know this place.",
      },
      {
        character: "你知道吗？",
        pinyin: "Nǐ zhīdào ma?",
        meaning: "Do you know?",
      },
    ],
  },
  {
    id: 105,
    character: "觉得",
    pinyin: "juéde",
    meaning: "to feel, to think",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=觉得",
    examples: [
      {
        character: "我觉得很累。",
        pinyin: "Wǒ juéde hěn lèi.",
        meaning: "I feel very tired.",
      },
      {
        character: "你觉得怎么样？",
        pinyin: "Nǐ juéde zěnmeyàng?",
        meaning: "What do you think?",
      },
    ],
  },
  {
    id: 106,
    character: "喜欢",
    pinyin: "xǐhuān",
    meaning: "to like",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=喜欢",
    examples: [
      {
        character: "我喜欢音乐。",
        pinyin: "Wǒ xǐhuān yīnyuè.",
        meaning: "I like music.",
      },
      {
        character: "你喜欢什么？",
        pinyin: "Nǐ xǐhuān shénme?",
        meaning: "What do you like?",
      },
    ],
  },
  {
    id: 107,
    character: "爱",
    pinyin: "ài",
    meaning: "to love",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=爱",
    examples: [
      {
        character: "我爱你。",
        pinyin: "Wǒ ài nǐ.",
        meaning: "I love you.",
      },
      {
        character: "我爱我的家人。",
        pinyin: "Wǒ ài wǒ de jiārén.",
        meaning: "I love my family.",
      },
    ],
  },
  {
    id: 108,
    character: "给",
    pinyin: "gěi",
    meaning: "to give",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=给",
    examples: [
      {
        character: "请给我一杯水。",
        pinyin: "Qǐng gěi wǒ yì bēi shuǐ.",
        meaning: "Please give me a glass of water.",
      },
      {
        character: "我给你钱。",
        pinyin: "Wǒ gěi nǐ qián.",
        meaning: "I'll give you money.",
      },
    ],
  },
  {
    id: 109,
    character: "拿",
    pinyin: "ná",
    meaning: "to take, to hold",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=拿",
    examples: [
      {
        character: "请拿这本书。",
        pinyin: "Qǐng ná zhè běn shū.",
        meaning: "Please take this book.",
      },
      {
        character: "我拿不动。",
        pinyin: "Wǒ ná bù dòng.",
        meaning: "I can't carry it.",
      },
    ],
  },
  {
    id: 110,
    character: "放",
    pinyin: "fàng",
    meaning: "to put, to place",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=放",
    examples: [
      {
        character: "把书放在桌子上。",
        pinyin: "Bǎ shū fàng zài zhuōzi shàng.",
        meaning: "Put the book on the table.",
      },
      {
        character: "我把钥匙放在这里。",
        pinyin: "Wǒ bǎ yàoshi fàng zài zhèlǐ.",
        meaning: "I put the keys here.",
      },
    ],
  },
  {
    id: 111,
    character: "买",
    pinyin: "mǎi",
    meaning: "to buy",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=买",
    examples: [
      {
        character: "我想买一本书。",
        pinyin: "Wǒ xiǎng mǎi yì běn shū.",
        meaning: "I want to buy a book.",
      },
      {
        character: "你买了什么？",
        pinyin: "Nǐ mǎi le shénme?",
        meaning: "What did you buy?",
      },
    ],
  },
  {
    id: 112,
    character: "卖",
    pinyin: "mài",
    meaning: "to sell",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=卖",
    examples: [
      {
        character: "他卖水果。",
        pinyin: "Tā mài shuǐguǒ.",
        meaning: "He sells fruit.",
      },
      {
        character: "这里卖什么？",
        pinyin: "Zhèlǐ mài shénme?",
        meaning: "What do they sell here?",
      },
    ],
  },
  {
    id: 113,
    character: "开",
    pinyin: "kāi",
    meaning: "to open, to drive",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=开",
    examples: [
      {
        character: "请开门。",
        pinyin: "Qǐng kāimén.",
        meaning: "Please open the door.",
      },
      {
        character: "我会开车。",
        pinyin: "Wǒ huì kāichē.",
        meaning: "I can drive.",
      },
    ],
  },
  {
    id: 114,
    character: "关",
    pinyin: "guān",
    meaning: "to close",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=关",
    examples: [
      {
        character: "请关门。",
        pinyin: "Qǐng guānmén.",
        meaning: "Please close the door.",
      },
      {
        character: "商店关了。",
        pinyin: "Shāngdiàn guān le.",
        meaning: "The store is closed.",
      },
    ],
  },
  {
    id: 115,
    character: "走",
    pinyin: "zǒu",
    meaning: "to walk, to go",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=走",
    examples: [
      {
        character: "我们走吧。",
        pinyin: "Wǒmen zǒu ba.",
        meaning: "Let's go.",
      },
      {
        character: "他走得很快。",
        pinyin: "Tā zǒu de hěn kuài.",
        meaning: "He walks very fast.",
      },
    ],
  },
  {
    id: 116,
    character: "跑",
    pinyin: "pǎo",
    meaning: "to run",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=跑",
    examples: [
      {
        character: "我喜欢跑步。",
        pinyin: "Wǒ xǐhuān pǎobù.",
        meaning: "I like to run.",
      },
      {
        character: "他跑得很快。",
        pinyin: "Tā pǎo de hěn kuài.",
        meaning: "He runs very fast.",
      },
    ],
  },
  {
    id: 117,
    character: "站",
    pinyin: "zhàn",
    meaning: "to stand",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=站",
    examples: [
      {
        character: "请站起来。",
        pinyin: "Qǐng zhàn qǐlái.",
        meaning: "Please stand up.",
      },
      {
        character: "他站在那里。",
        pinyin: "Tā zhàn zài nàlǐ.",
        meaning: "He is standing there.",
      },
    ],
  },
  {
    id: 118,
    character: "坐",
    pinyin: "zuò",
    meaning: "to sit",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=坐",
    examples: [
      {
        character: "请坐。",
        pinyin: "Qǐng zuò.",
        meaning: "Please sit.",
      },
      {
        character: "我坐公交车。",
        pinyin: "Wǒ zuò gōngjiāochē.",
        meaning: "I take the bus.",
      },
    ],
  },
  {
    id: 119,
    character: "睡",
    pinyin: "shuì",
    meaning: "to sleep",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=睡",
    examples: [
      {
        character: "我想睡觉。",
        pinyin: "Wǒ xiǎng shuìjiào.",
        meaning: "I want to sleep.",
      },
      {
        character: "你睡得好吗？",
        pinyin: "Nǐ shuì de hǎo ma?",
        meaning: "Did you sleep well?",
      },
    ],
  },
  {
    id: 120,
    character: "起",
    pinyin: "qǐ",
    meaning: "to get up, to rise",
    partOfSpeech: "v",
    category: "basic",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=起",
    examples: [
      {
        character: "我早上六点起床。",
        pinyin: "Wǒ zǎoshang liù diǎn qǐchuáng.",
        meaning: "I get up at 6 AM.",
      },
      {
        character: "请起立。",
        pinyin: "Qǐng qǐlì.",
        meaning: "Please stand up.",
      },
    ],
  },
];

export default basicWords;
