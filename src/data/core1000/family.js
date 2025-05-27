// Family and relationships vocabulary
const familyWords = [
  // Family members
  {
    id: 601,
    character: "家",
    pinyin: "jiā",
    meaning: "home, family",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=家",
    examples: [
      {
        character: "我的家在北京。",
        pinyin: "Wǒ de jiā zài Běijīng.",
        meaning: "My home is in Beijing.",
      },
      {
        character: "我爱我的家。",
        pinyin: "Wǒ ài wǒ de jiā.",
        meaning: "I love my family.",
      },
    ],
  },
  {
    id: 602,
    character: "父母",
    pinyin: "fùmǔ",
    meaning: "parents",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=父母",
    examples: [
      {
        character: "我的父母住在上海。",
        pinyin: "Wǒ de fùmǔ zhù zài Shànghǎi.",
        meaning: "My parents live in Shanghai.",
      },
      {
        character: "我爱我的父母。",
        pinyin: "Wǒ ài wǒ de fùmǔ.",
        meaning: "I love my parents.",
      },
    ],
  },
  {
    id: 603,
    character: "爸爸",
    pinyin: "bàba",
    meaning: "father, dad",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=爸爸",
    examples: [
      {
        character: "我爸爸是医生。",
        pinyin: "Wǒ bàba shì yīshēng.",
        meaning: "My father is a doctor.",
      },
      {
        character: "爸爸，我爱你。",
        pinyin: "Bàba, wǒ ài nǐ.",
        meaning: "Dad, I love you.",
      },
    ],
  },
  {
    id: 604,
    character: "妈妈",
    pinyin: "māma",
    meaning: "mother, mom",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=妈妈",
    examples: [
      {
        character: "我妈妈是老师。",
        pinyin: "Wǒ māma shì lǎoshī.",
        meaning: "My mother is a teacher.",
      },
      {
        character: "妈妈，我爱你。",
        pinyin: "Māma, wǒ ài nǐ.",
        meaning: "Mom, I love you.",
      },
    ],
  },
  {
    id: 605,
    character: "儿子",
    pinyin: "érzi",
    meaning: "son",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=儿子",
    examples: [
      {
        character: "他有一个儿子。",
        pinyin: "Tā yǒu yí gè érzi.",
        meaning: "He has a son.",
      },
      {
        character: "我的儿子今年五岁。",
        pinyin: "Wǒ de érzi jīnnián wǔ suì.",
        meaning: "My son is five years old this year.",
      },
    ],
  },
  {
    id: 606,
    character: "女儿",
    pinyin: "nǚ'ér",
    meaning: "daughter",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=女儿",
    examples: [
      {
        character: "她有一个女儿。",
        pinyin: "Tā yǒu yí gè nǚ'ér.",
        meaning: "She has a daughter.",
      },
      {
        character: "我的女儿很漂亮。",
        pinyin: "Wǒ de nǚ'ér hěn piàoliang.",
        meaning: "My daughter is very beautiful.",
      },
    ],
  },
  {
    id: 607,
    character: "哥哥",
    pinyin: "gēge",
    meaning: "older brother",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=哥哥",
    examples: [
      {
        character: "我有一个哥哥。",
        pinyin: "Wǒ yǒu yí gè gēge.",
        meaning: "I have an older brother.",
      },
      {
        character: "我的哥哥比我大三岁。",
        pinyin: "Wǒ de gēge bǐ wǒ dà sān suì.",
        meaning: "My older brother is three years older than me.",
      },
    ],
  },
  {
    id: 608,
    character: "弟弟",
    pinyin: "dìdi",
    meaning: "younger brother",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=弟弟",
    examples: [
      {
        character: "我有一个弟弟。",
        pinyin: "Wǒ yǒu yí gè dìdi.",
        meaning: "I have a younger brother.",
      },
      {
        character: "我的弟弟今年十岁。",
        pinyin: "Wǒ de dìdi jīnnián shí suì.",
        meaning: "My younger brother is ten years old this year.",
      },
    ],
  },
  {
    id: 609,
    character: "姐姐",
    pinyin: "jiějie",
    meaning: "older sister",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=姐姐",
    examples: [
      {
        character: "我有一个姐姐。",
        pinyin: "Wǒ yǒu yí gè jiějie.",
        meaning: "I have an older sister.",
      },
      {
        character: "我的姐姐在北京工作。",
        pinyin: "Wǒ de jiějie zài Běijīng gōngzuò.",
        meaning: "My older sister works in Beijing.",
      },
    ],
  },
  {
    id: 610,
    character: "妹妹",
    pinyin: "mèimei",
    meaning: "younger sister",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=妹妹",
    examples: [
      {
        character: "我有一个妹妹。",
        pinyin: "Wǒ yǒu yí gè mèimei.",
        meaning: "I have a younger sister.",
      },
      {
        character: "我的妹妹很可爱。",
        pinyin: "Wǒ de mèimei hěn kě'ài.",
        meaning: "My younger sister is very cute.",
      },
    ],
  },
  {
    id: 611,
    character: "爷爷",
    pinyin: "yéye",
    meaning: "paternal grandfather",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=爷爷",
    examples: [
      {
        character: "我的爷爷今年八十岁了。",
        pinyin: "Wǒ de yéye jīnnián bāshí suì le.",
        meaning: "My grandfather is eighty years old this year.",
      },
      {
        character: "我爷爷很喜欢下棋。",
        pinyin: "Wǒ yéye hěn xǐhuān xià qí.",
        meaning: "My grandfather likes to play chess.",
      },
    ],
  },
  {
    id: 612,
    character: "奶奶",
    pinyin: "nǎinai",
    meaning: "paternal grandmother",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=奶奶",
    examples: [
      {
        character: "我的奶奶很会做饭。",
        pinyin: "Wǒ de nǎinai hěn huì zuò fàn.",
        meaning: "My grandmother is good at cooking.",
      },
      {
        character: "我奶奶很疼我。",
        pinyin: "Wǒ nǎinai hěn téng wǒ.",
        meaning: "My grandmother loves me very much.",
      },
    ],
  },
  {
    id: 613,
    character: "外公",
    pinyin: "wàigōng",
    meaning: "maternal grandfather",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=外公",
    examples: [
      {
        character: "我的外公住在上海。",
        pinyin: "Wǒ de wàigōng zhù zài Shànghǎi.",
        meaning: "My maternal grandfather lives in Shanghai.",
      },
      {
        character: "我外公很健康。",
        pinyin: "Wǒ wàigōng hěn jiànkāng.",
        meaning: "My maternal grandfather is very healthy.",
      },
    ],
  },
  {
    id: 614,
    character: "外婆",
    pinyin: "wàipó",
    meaning: "maternal grandmother",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=外婆",
    examples: [
      {
        character: "我的外婆很慈祥。",
        pinyin: "Wǒ de wàipó hěn cíxiáng.",
        meaning: "My maternal grandmother is very kind.",
      },
      {
        character: "我外婆会讲很多故事。",
        pinyin: "Wǒ wàipó huì jiǎng hěn duō gùshì.",
        meaning: "My maternal grandmother can tell many stories.",
      },
    ],
  },
  {
    id: 615,
    character: "叔叔",
    pinyin: "shūshu",
    meaning: "uncle (father's younger brother or male friend)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=叔叔",
    examples: [
      {
        character: "这是我的叔叔。",
        pinyin: "Zhè shì wǒ de shūshu.",
        meaning: "This is my uncle.",
      },
      {
        character: "我叔叔给我买了礼物。",
        pinyin: "Wǒ shūshu gěi wǒ mǎi le lǐwù.",
        meaning: "My uncle bought me a gift.",
      },
    ],
  },

  // Relationships
  {
    id: 616,
    character: "朋友",
    pinyin: "péngyou",
    meaning: "friend",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=朋友",
    examples: [
      {
        character: "他是我的好朋友。",
        pinyin: "Tā shì wǒ de hǎo péngyou.",
        meaning: "He is my good friend.",
      },
      {
        character: "我有很多朋友。",
        pinyin: "Wǒ yǒu hěn duō péngyou.",
        meaning: "I have many friends.",
      },
    ],
  },
  {
    id: 617,
    character: "男朋友",
    pinyin: "nán péngyou",
    meaning: "boyfriend",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=男朋友",
    examples: [
      {
        character: "他是我的男朋友。",
        pinyin: "Tā shì wǒ de nán péngyou.",
        meaning: "He is my boyfriend.",
      },
      {
        character: "我的男朋友很帅。",
        pinyin: "Wǒ de nán péngyou hěn shuài.",
        meaning: "My boyfriend is very handsome.",
      },
    ],
  },
  {
    id: 618,
    character: "女朋友",
    pinyin: "nǚ péngyou",
    meaning: "girlfriend",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=女朋友",
    examples: [
      {
        character: "她是我的女朋友。",
        pinyin: "Tā shì wǒ de nǚ péngyou.",
        meaning: "She is my girlfriend.",
      },
      {
        character: "我的女朋友很漂亮。",
        pinyin: "Wǒ de nǚ péngyou hěn piàoliang.",
        meaning: "My girlfriend is very beautiful.",
      },
    ],
  },
  {
    id: 619,
    character: "丈夫",
    pinyin: "zhàngfu",
    meaning: "husband",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=丈夫",
    examples: [
      {
        character: "他是我的丈夫。",
        pinyin: "Tā shì wǒ de zhàngfu.",
        meaning: "He is my husband.",
      },
      {
        character: "我的丈夫是医生。",
        pinyin: "Wǒ de zhàngfu shì yīshēng.",
        meaning: "My husband is a doctor.",
      },
    ],
  },
  {
    id: 620,
    character: "妻子",
    pinyin: "qīzi",
    meaning: "wife",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=妻子",
    examples: [
      {
        character: "她是我的妻子。",
        pinyin: "Tā shì wǒ de qīzi.",
        meaning: "She is my wife.",
      },
      {
        character: "我的妻子很漂亮。",
        pinyin: "Wǒ de qīzi hěn piàoliang.",
        meaning: "My wife is very beautiful.",
      },
    ],
  },

  // More family members
  {
    id: 621,
    character: "祖父",
    pinyin: "zǔfù",
    meaning: "paternal grandfather",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=祖父",
    examples: [
      {
        character: "我的祖父今年八十岁了。",
        pinyin: "Wǒ de zǔfù jīnnián bāshí suì le.",
        meaning: "My grandfather is eighty years old this year.",
      },
      {
        character: "我的祖父住在农村。",
        pinyin: "Wǒ de zǔfù zhù zài nóngcūn.",
        meaning: "My grandfather lives in the countryside.",
      },
    ],
  },
  {
    id: 622,
    character: "祖母",
    pinyin: "zǔmǔ",
    meaning: "paternal grandmother",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=祖母",
    examples: [
      {
        character: "我的祖母很会做饭。",
        pinyin: "Wǒ de zǔmǔ hěn huì zuò fàn.",
        meaning: "My grandmother is good at cooking.",
      },
      {
        character: "我的祖母很疼爱我。",
        pinyin: "Wǒ de zǔmǔ hěn téng'ài wǒ.",
        meaning: "My grandmother loves me very much.",
      },
    ],
  },
  {
    id: 623,
    character: "外祖父",
    pinyin: "wàizǔfù",
    meaning: "maternal grandfather",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=外祖父",
    examples: [
      {
        character: "我的外祖父是医生。",
        pinyin: "Wǒ de wàizǔfù shì yīshēng.",
        meaning: "My maternal grandfather is a doctor.",
      },
      {
        character: "我的外祖父很健康。",
        pinyin: "Wǒ de wàizǔfù hěn jiànkāng.",
        meaning: "My maternal grandfather is very healthy.",
      },
    ],
  },
  {
    id: 624,
    character: "外祖母",
    pinyin: "wàizǔmǔ",
    meaning: "maternal grandmother",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=外祖母",
    examples: [
      {
        character: "我的外祖母很喜欢唱歌。",
        pinyin: "Wǒ de wàizǔmǔ hěn xǐhuān chànggē.",
        meaning: "My maternal grandmother likes to sing.",
      },
      {
        character: "我的外祖母住在城市里。",
        pinyin: "Wǒ de wàizǔmǔ zhù zài chéngshì lǐ.",
        meaning: "My maternal grandmother lives in the city.",
      },
    ],
  },
  {
    id: 625,
    character: "姑姑",
    pinyin: "gūgu",
    meaning: "father's sister, aunt",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=姑姑",
    examples: [
      {
        character: "我的姑姑很漂亮。",
        pinyin: "Wǒ de gūgu hěn piàoliang.",
        meaning: "My aunt is very beautiful.",
      },
      {
        character: "姑姑给我买了礼物。",
        pinyin: "Gūgu gěi wǒ mǎi le lǐwù.",
        meaning: "Aunt bought me a gift.",
      },
    ],
  },
  {
    id: 626,
    character: "伯伯",
    pinyin: "bóbo",
    meaning: "father's elder brother, uncle",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=伯伯",
    examples: [
      {
        character: "我的伯伯在银行工作。",
        pinyin: "Wǒ de bóbo zài yínháng gōngzuò.",
        meaning: "My uncle works in a bank.",
      },
      {
        character: "伯伯家有一只狗。",
        pinyin: "Bóbo jiā yǒu yì zhī gǒu.",
        meaning: "Uncle's family has a dog.",
      },
    ],
  },
  {
    id: 627,
    character: "婶婶",
    pinyin: "shěnshen",
    meaning: "wife of father's younger brother, aunt",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=婶婶",
    examples: [
      {
        character: "我的婶婶很漂亮。",
        pinyin: "Wǒ de shěnshen hěn piàoliang.",
        meaning: "My aunt is very beautiful.",
      },
      {
        character: "婶婶做的菜很好吃。",
        pinyin: "Shěnshen zuò de cài hěn hǎochī.",
        meaning: "The food my aunt cooks is very delicious.",
      },
    ],
  },
  {
    id: 628,
    character: "舅舅",
    pinyin: "jiùjiu",
    meaning: "mother's brother, uncle",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=舅舅",
    examples: [
      {
        character: "我的舅舅住在上海。",
        pinyin: "Wǒ de jiùjiu zhù zài Shànghǎi.",
        meaning: "My uncle lives in Shanghai.",
      },
      {
        character: "舅舅给我买了新衣服。",
        pinyin: "Jiùjiu gěi wǒ mǎi le xīn yīfu.",
        meaning: "Uncle bought me new clothes.",
      },
    ],
  },
  {
    id: 629,
    character: "姨妈",
    pinyin: "yímā",
    meaning: "mother's sister, aunt",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=姨妈",
    examples: [
      {
        character: "我的姨妈很关心我。",
        pinyin: "Wǒ de yímā hěn guānxīn wǒ.",
        meaning: "My aunt cares about me very much.",
      },
      {
        character: "姨妈家有三个孩子。",
        pinyin: "Yímā jiā yǒu sān gè háizi.",
        meaning: "Aunt's family has three children.",
      },
    ],
  },
  {
    id: 630,
    character: "表哥",
    pinyin: "biǎogē",
    meaning: "older male cousin (mother's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=表哥",
    examples: [
      {
        character: "我的表哥比我大三岁。",
        pinyin: "Wǒ de biǎogē bǐ wǒ dà sān suì.",
        meaning: "My cousin is three years older than me.",
      },
      {
        character: "表哥在美国留学。",
        pinyin: "Biǎogē zài Měiguó liúxué.",
        meaning: "My cousin is studying in the United States.",
      },
    ],
  },
  {
    id: 631,
    character: "表姐",
    pinyin: "biǎojiě",
    meaning: "older female cousin (mother's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=表姐",
    examples: [
      {
        character: "我的表姐很漂亮。",
        pinyin: "Wǒ de biǎojiě hěn piàoliang.",
        meaning: "My cousin is very beautiful.",
      },
      {
        character: "表姐在大学教书。",
        pinyin: "Biǎojiě zài dàxué jiāoshū.",
        meaning: "My cousin teaches at a university.",
      },
    ],
  },
  {
    id: 632,
    character: "表弟",
    pinyin: "biǎodì",
    meaning: "younger male cousin (mother's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=表弟",
    examples: [
      {
        character: "我的表弟很聪明。",
        pinyin: "Wǒ de biǎodì hěn cōngming.",
        meaning: "My cousin is very smart.",
      },
      {
        character: "表弟喜欢打篮球。",
        pinyin: "Biǎodì xǐhuān dǎ lánqiú.",
        meaning: "My cousin likes to play basketball.",
      },
    ],
  },
  {
    id: 633,
    character: "表妹",
    pinyin: "biǎomèi",
    meaning: "younger female cousin (mother's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=表妹",
    examples: [
      {
        character: "我的表妹今年十岁。",
        pinyin: "Wǒ de biǎomèi jīnnián shí suì.",
        meaning: "My cousin is ten years old this year.",
      },
      {
        character: "表妹喜欢唱歌。",
        pinyin: "Biǎomèi xǐhuān chànggē.",
        meaning: "My cousin likes to sing.",
      },
    ],
  },
  {
    id: 634,
    character: "堂哥",
    pinyin: "tánggē",
    meaning: "older male cousin (father's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=堂哥",
    examples: [
      {
        character: "我的堂哥在北京工作。",
        pinyin: "Wǒ de tánggē zài Běijīng gōngzuò.",
        meaning: "My cousin works in Beijing.",
      },
      {
        character: "堂哥是一名医生。",
        pinyin: "Tánggē shì yì míng yīshēng.",
        meaning: "My cousin is a doctor.",
      },
    ],
  },
  {
    id: 635,
    character: "堂姐",
    pinyin: "tángjiě",
    meaning: "older female cousin (father's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=堂姐",
    examples: [
      {
        character: "我的堂姐结婚了。",
        pinyin: "Wǒ de tángjiě jiéhūn le.",
        meaning: "My cousin got married.",
      },
      {
        character: "堂姐有一个可爱的女儿。",
        pinyin: "Tángjiě yǒu yí gè kě'ài de nǚ'ér.",
        meaning: "My cousin has a cute daughter.",
      },
    ],
  },
  {
    id: 636,
    character: "堂弟",
    pinyin: "tángdì",
    meaning: "younger male cousin (father's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=堂弟",
    examples: [
      {
        character: "我的堂弟在上高中。",
        pinyin: "Wǒ de tángdì zài shàng gāozhōng.",
        meaning: "My cousin is in high school.",
      },
      {
        character: "堂弟很喜欢踢足球。",
        pinyin: "Tángdì hěn xǐhuān tī zúqiú.",
        meaning: "My cousin likes to play soccer.",
      },
    ],
  },
  {
    id: 637,
    character: "堂妹",
    pinyin: "tángmèi",
    meaning: "younger female cousin (father's side)",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=堂妹",
    examples: [
      {
        character: "我的堂妹很可爱。",
        pinyin: "Wǒ de tángmèi hěn kě'ài.",
        meaning: "My cousin is very cute.",
      },
      {
        character: "堂妹喜欢画画。",
        pinyin: "Tángmèi xǐhuān huàhuà.",
        meaning: "My cousin likes to draw.",
      },
    ],
  },
  {
    id: 638,
    character: "侄子",
    pinyin: "zhízi",
    meaning: "brother's son, nephew",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=侄子",
    examples: [
      {
        character: "我的侄子今年五岁。",
        pinyin: "Wǒ de zhízi jīnnián wǔ suì.",
        meaning: "My nephew is five years old this year.",
      },
      {
        character: "侄子很聪明。",
        pinyin: "Zhízi hěn cōngming.",
        meaning: "My nephew is very smart.",
      },
    ],
  },
  {
    id: 639,
    character: "侄女",
    pinyin: "zhínǚ",
    meaning: "brother's daughter, niece",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=侄女",
    examples: [
      {
        character: "我的侄女很可爱。",
        pinyin: "Wǒ de zhínǚ hěn kě'ài.",
        meaning: "My niece is very cute.",
      },
      {
        character: "侄女喜欢唱歌。",
        pinyin: "Zhínǚ xǐhuān chànggē.",
        meaning: "My niece likes to sing.",
      },
    ],
  },
  {
    id: 640,
    character: "外甥",
    pinyin: "wàisheng",
    meaning: "sister's son, nephew",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=外甥",
    examples: [
      {
        character: "我的外甥很调皮。",
        pinyin: "Wǒ de wàisheng hěn tiáopí.",
        meaning: "My nephew is very naughty.",
      },
      {
        character: "外甥喜欢玩游戏。",
        pinyin: "Wàisheng xǐhuān wán yóuxì.",
        meaning: "My nephew likes to play games.",
      },
    ],
  },
  {
    id: 641,
    character: "外甥女",
    pinyin: "wàishengnǚ",
    meaning: "sister's daughter, niece",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=外甥女",
    examples: [
      {
        character: "我的外甥女很漂亮。",
        pinyin: "Wǒ de wàishengnǚ hěn piàoliang.",
        meaning: "My niece is very beautiful.",
      },
      {
        character: "外甥女喜欢跳舞。",
        pinyin: "Wàishengnǚ xǐhuān tiàowǔ.",
        meaning: "My niece likes to dance.",
      },
    ],
  },

  // Family relationships
  {
    id: 642,
    character: "婚姻",
    pinyin: "hūnyīn",
    meaning: "marriage",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=婚姻",
    examples: [
      {
        character: "他们的婚姻很幸福。",
        pinyin: "Tāmen de hūnyīn hěn xìngfú.",
        meaning: "Their marriage is very happy.",
      },
      {
        character: "婚姻需要经营。",
        pinyin: "Hūnyīn xūyào jīngyíng.",
        meaning: "Marriage needs to be worked on.",
      },
    ],
  },
  {
    id: 643,
    character: "结婚",
    pinyin: "jiéhūn",
    meaning: "to get married",
    partOfSpeech: "v",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=结婚",
    examples: [
      {
        character: "他们去年结婚了。",
        pinyin: "Tāmen qùnián jiéhūn le.",
        meaning: "They got married last year.",
      },
      {
        character: "我想明年结婚。",
        pinyin: "Wǒ xiǎng míngnián jiéhūn.",
        meaning: "I want to get married next year.",
      },
    ],
  },
  {
    id: 644,
    character: "离婚",
    pinyin: "líhūn",
    meaning: "to divorce",
    partOfSpeech: "v",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=离婚",
    examples: [
      {
        character: "他们去年离婚了。",
        pinyin: "Tāmen qùnián líhūn le.",
        meaning: "They divorced last year.",
      },
      {
        character: "离婚对孩子有影响。",
        pinyin: "Líhūn duì háizi yǒu yǐngxiǎng.",
        meaning: "Divorce affects children.",
      },
    ],
  },
  {
    id: 645,
    character: "恋爱",
    pinyin: "liàn'ài",
    meaning: "to be in love",
    partOfSpeech: "v",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=恋爱",
    examples: [
      {
        character: "他们正在恋爱。",
        pinyin: "Tāmen zhèngzài liàn'ài.",
        meaning: "They are in love.",
      },
      {
        character: "恋爱是一种美好的感觉。",
        pinyin: "Liàn'ài shì yì zhǒng měihǎo de gǎnjué.",
        meaning: "Being in love is a wonderful feeling.",
      },
    ],
  },
  {
    id: 646,
    character: "怀孕",
    pinyin: "huáiyùn",
    meaning: "to be pregnant",
    partOfSpeech: "v",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=怀孕",
    examples: [
      {
        character: "她怀孕三个月了。",
        pinyin: "Tā huáiyùn sān gè yuè le.",
        meaning: "She has been pregnant for three months.",
      },
      {
        character: "怀孕期间要注意休息。",
        pinyin: "Huáiyùn qījiān yào zhùyì xiūxi.",
        meaning: "During pregnancy, you should pay attention to rest.",
      },
    ],
  },
  {
    id: 647,
    character: "生孩子",
    pinyin: "shēng háizi",
    meaning: "to give birth",
    partOfSpeech: "v",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=生孩子",
    examples: [
      {
        character: "她昨天生孩子了。",
        pinyin: "Tā zuótiān shēng háizi le.",
        meaning: "She gave birth yesterday.",
      },
      {
        character: "生孩子很辛苦。",
        pinyin: "Shēng háizi hěn xīnkǔ.",
        meaning: "Giving birth is very hard.",
      },
    ],
  },
  {
    id: 648,
    character: "养育",
    pinyin: "yǎngyù",
    meaning: "to raise, to bring up",
    partOfSpeech: "v",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=养育",
    examples: [
      {
        character: "父母养育孩子很辛苦。",
        pinyin: "Fùmǔ yǎngyù háizi hěn xīnkǔ.",
        meaning: "It's hard for parents to raise children.",
      },
      {
        character: "他们养育了三个孩子。",
        pinyin: "Tāmen yǎngyù le sān gè háizi.",
        meaning: "They raised three children.",
      },
    ],
  },
  {
    id: 649,
    character: "继父",
    pinyin: "jìfù",
    meaning: "stepfather",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=继父",
    examples: [
      {
        character: "他的继父对他很好。",
        pinyin: "Tā de jìfù duì tā hěn hǎo.",
        meaning: "His stepfather is very good to him.",
      },
      {
        character: "继父也是父亲。",
        pinyin: "Jìfù yě shì fùqin.",
        meaning: "A stepfather is also a father.",
      },
    ],
  },
  {
    id: 650,
    character: "继母",
    pinyin: "jìmǔ",
    meaning: "stepmother",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=继母",
    examples: [
      {
        character: "她的继母很关心她。",
        pinyin: "Tā de jìmǔ hěn guānxīn tā.",
        meaning: "Her stepmother cares about her very much.",
      },
      {
        character: "继母也是母亲。",
        pinyin: "Jìmǔ yě shì mǔqin.",
        meaning: "A stepmother is also a mother.",
      },
    ],
  },
  // Additional words
  {
    id: 351,
    character: "亲戚",
    pinyin: "qīnqi",
    meaning: "relatives",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E4%BA%B2%E6%88%9A",
    examples: [
      {
        character: "这是亲戚的例句。",
        pinyin: "Zhè shì qīnqi de lìjù.",
        meaning: "This is an example sentence for relatives.",
      },
      {
        character: "我喜欢亲戚。",
        pinyin: "Wǒ xǐhuān qīnqi.",
        meaning: "I like relatives.",
      },
    ],
  },
  {
    id: 352,
    character: "家庭",
    pinyin: "jiātíng",
    meaning: "family",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E5%AE%B6%E5%BA%AD",
    examples: [
      {
        character: "这是家庭的例句。",
        pinyin: "Zhè shì jiātíng de lìjù.",
        meaning: "This is an example sentence for family.",
      },
      {
        character: "我喜欢家庭。",
        pinyin: "Wǒ xǐhuān jiātíng.",
        meaning: "I like family.",
      },
    ],
  },
  {
    id: 353,
    character: "血缘",
    pinyin: "xuèyuán",
    meaning: "blood relation",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E8%A1%80%E7%BC%98",
    examples: [
      {
        character: "这是血缘的例句。",
        pinyin: "Zhè shì xuèyuán de lìjù.",
        meaning: "This is an example sentence for blood relation.",
      },
      {
        character: "我喜欢血缘。",
        pinyin: "Wǒ xǐhuān xuèyuán.",
        meaning: "I like blood relation.",
      },
    ],
  },
  {
    id: 354,
    character: "传统",
    pinyin: "chuántǒng",
    meaning: "tradition",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E4%BC%A0%E7%BB%9F",
    examples: [
      {
        character: "这是传统的例句。",
        pinyin: "Zhè shì chuántǒng de lìjù.",
        meaning: "This is an example sentence for tradition.",
      },
      {
        character: "我喜欢传统。",
        pinyin: "Wǒ xǐhuān chuántǒng.",
        meaning: "I like tradition.",
      },
    ],
  },
  {
    id: 355,
    character: "团聚",
    pinyin: "tuánjù",
    meaning: "reunion",
    partOfSpeech: "n/v",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E5%9B%A2%E8%81%9A",
    examples: [
      {
        character: "这是团聚的例句。",
        pinyin: "Zhè shì tuánjù de lìjù.",
        meaning: "This is an example sentence for reunion.",
      },
      {
        character: "我喜欢团聚。",
        pinyin: "Wǒ xǐhuān tuánjù.",
        meaning: "I like reunion.",
      },
    ],
  },
  {
    id: 356,
    character: "关爱",
    pinyin: "guān'ài",
    meaning: "care",
    partOfSpeech: "n/v",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E5%85%B3%E7%88%B1",
    examples: [
      {
        character: "这是关爱的例句。",
        pinyin: "Zhè shì guān'ài de lìjù.",
        meaning: "This is an example sentence for care.",
      },
      {
        character: "我喜欢关爱。",
        pinyin: "Wǒ xǐhuān guān'ài.",
        meaning: "I like care.",
      },
    ],
  },
  {
    id: 357,
    character: "责任",
    pinyin: "zérèn",
    meaning: "responsibility",
    partOfSpeech: "n",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E8%B4%A3%E4%BB%BB",
    examples: [
      {
        character: "这是责任的例句。",
        pinyin: "Zhè shì zérèn de lìjù.",
        meaning: "This is an example sentence for responsibility.",
      },
      {
        character: "我喜欢责任。",
        pinyin: "Wǒ xǐhuān zérèn.",
        meaning: "I like responsibility.",
      },
    ],
  },
  {
    id: 358,
    character: "孝顺",
    pinyin: "xiàoshùn",
    meaning: "filial piety",
    partOfSpeech: "adj/v",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E5%AD%9D%E9%A1%BA",
    examples: [
      {
        character: "这是孝顺的例句。",
        pinyin: "Zhè shì xiàoshùn de lìjù.",
        meaning: "This is an example sentence for filial piety.",
      },
      {
        character: "我喜欢孝顺。",
        pinyin: "Wǒ xǐhuān xiàoshùn.",
        meaning: "I like filial piety.",
      },
    ],
  },
  {
    id: 359,
    character: "教育",
    pinyin: "jiàoyù",
    meaning: "education",
    partOfSpeech: "n/v",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E6%95%99%E8%82%B2",
    examples: [
      {
        character: "这是教育的例句。",
        pinyin: "Zhè shì jiàoyù de lìjù.",
        meaning: "This is an example sentence for education.",
      },
      {
        character: "我喜欢教育。",
        pinyin: "Wǒ xǐhuān jiàoyù.",
        meaning: "I like education.",
      },
    ],
  },
  {
    id: 360,
    character: "陪伴",
    pinyin: "péibàn",
    meaning: "accompany",
    partOfSpeech: "v",
    category: "family",
    image: "https://placehold.co/100x100/fff2e8/fa541c?text=%E9%99%AA%E4%BC%B4",
    examples: [
      {
        character: "这是陪伴的例句。",
        pinyin: "Zhè shì péibàn de lìjù.",
        meaning: "This is an example sentence for accompany.",
      },
      {
        character: "我喜欢陪伴。",
        pinyin: "Wǒ xǐhuān péibàn.",
        meaning: "I like accompany.",
      },
    ],
  }
];

export default familyWords;
