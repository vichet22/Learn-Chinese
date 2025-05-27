// Health and body vocabulary
const healthWords = [
  // Body parts
  {
    id: 501,
    character: "头",
    pinyin: "tóu",
    meaning: "head",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=头",
    examples: [
      {
        character: "我的头很痛。",
        pinyin: "Wǒ de tóu hěn tòng.",
        meaning: "My head hurts.",
      },
      {
        character: "他摇摇头。",
        pinyin: "Tā yáoyao tóu.",
        meaning: "He shook his head.",
      },
    ],
  },
  {
    id: 502,
    character: "眼睛",
    pinyin: "yǎnjing",
    meaning: "eye",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=眼睛",
    examples: [
      {
        character: "她有一双漂亮的眼睛。",
        pinyin: "Tā yǒu yì shuāng piàoliang de yǎnjing.",
        meaning: "She has a pair of beautiful eyes.",
      },
      {
        character: "我的眼睛很累。",
        pinyin: "Wǒ de yǎnjing hěn lèi.",
        meaning: "My eyes are tired.",
      },
    ],
  },
  {
    id: 503,
    character: "鼻子",
    pinyin: "bízi",
    meaning: "nose",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=鼻子",
    examples: [
      {
        character: "他的鼻子很高。",
        pinyin: "Tā de bízi hěn gāo.",
        meaning: "His nose is very high (prominent).",
      },
      {
        character: "我的鼻子不舒服。",
        pinyin: "Wǒ de bízi bù shūfu.",
        meaning: "My nose is uncomfortable.",
      },
    ],
  },
  {
    id: 504,
    character: "嘴",
    pinyin: "zuǐ",
    meaning: "mouth",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=嘴",
    examples: [
      {
        character: "请闭上嘴。",
        pinyin: "Qǐng bì shàng zuǐ.",
        meaning: "Please close your mouth.",
      },
      {
        character: "他的嘴很大。",
        pinyin: "Tā de zuǐ hěn dà.",
        meaning: "His mouth is very big.",
      },
    ],
  },
  {
    id: 505,
    character: "耳朵",
    pinyin: "ěrduo",
    meaning: "ear",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=耳朵",
    examples: [
      {
        character: "我的耳朵听不清楚。",
        pinyin: "Wǒ de ěrduo tīng bù qīngchu.",
        meaning: "My ears can't hear clearly.",
      },
      {
        character: "兔子有长耳朵。",
        pinyin: "Tùzi yǒu cháng ěrduo.",
        meaning: "Rabbits have long ears.",
      },
    ],
  },
  {
    id: 506,
    character: "手",
    pinyin: "shǒu",
    meaning: "hand",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=手",
    examples: [
      {
        character: "请洗手。",
        pinyin: "Qǐng xǐ shǒu.",
        meaning: "Please wash your hands.",
      },
      {
        character: "他的手很大。",
        pinyin: "Tā de shǒu hěn dà.",
        meaning: "His hands are very big.",
      },
    ],
  },
  {
    id: 507,
    character: "脚",
    pinyin: "jiǎo",
    meaning: "foot",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=脚",
    examples: [
      {
        character: "我的脚很痛。",
        pinyin: "Wǒ de jiǎo hěn tòng.",
        meaning: "My foot hurts.",
      },
      {
        character: "他的脚很大。",
        pinyin: "Tā de jiǎo hěn dà.",
        meaning: "His feet are very big.",
      },
    ],
  },
  {
    id: 508,
    character: "腿",
    pinyin: "tuǐ",
    meaning: "leg",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=腿",
    examples: [
      {
        character: "我的腿很酸。",
        pinyin: "Wǒ de tuǐ hěn suān.",
        meaning: "My legs are sore.",
      },
      {
        character: "他的腿很长。",
        pinyin: "Tā de tuǐ hěn cháng.",
        meaning: "His legs are very long.",
      },
    ],
  },
  {
    id: 509,
    character: "肚子",
    pinyin: "dùzi",
    meaning: "stomach, belly",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=肚子",
    examples: [
      {
        character: "我的肚子疼。",
        pinyin: "Wǒ de dùzi téng.",
        meaning: "My stomach hurts.",
      },
      {
        character: "他的肚子很大。",
        pinyin: "Tā de dùzi hěn dà.",
        meaning: "His belly is very big.",
      },
    ],
  },
  {
    id: 510,
    character: "背",
    pinyin: "bèi",
    meaning: "back",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=背",
    examples: [
      {
        character: "我的背很痛。",
        pinyin: "Wǒ de bèi hěn tòng.",
        meaning: "My back hurts.",
      },
      {
        character: "他背着书包。",
        pinyin: "Tā bèi zhe shūbāo.",
        meaning: "He carries a backpack.",
      },
    ],
  },

  // Health conditions
  {
    id: 511,
    character: "生病",
    pinyin: "shēngbìng",
    meaning: "to get sick",
    partOfSpeech: "v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=生病",
    examples: [
      {
        character: "我生病了。",
        pinyin: "Wǒ shēngbìng le.",
        meaning: "I am sick.",
      },
      {
        character: "如果你生病了，应该去看医生。",
        pinyin: "Rúguǒ nǐ shēngbìng le, yīnggāi qù kàn yīshēng.",
        meaning: "If you are sick, you should see a doctor.",
      },
    ],
  },
  {
    id: 512,
    character: "疼",
    pinyin: "téng",
    meaning: "to hurt, pain",
    partOfSpeech: "v/n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=疼",
    examples: [
      {
        character: "我的头很疼。",
        pinyin: "Wǒ de tóu hěn téng.",
        meaning: "My head hurts a lot.",
      },
      {
        character: "你哪里疼？",
        pinyin: "Nǐ nǎlǐ téng?",
        meaning: "Where does it hurt?",
      },
    ],
  },
  {
    id: 513,
    character: "感冒",
    pinyin: "gǎnmào",
    meaning: "to catch a cold",
    partOfSpeech: "v/n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=感冒",
    examples: [
      {
        character: "我感冒了。",
        pinyin: "Wǒ gǎnmào le.",
        meaning: "I have a cold.",
      },
      {
        character: "天冷了，小心感冒。",
        pinyin: "Tiān lěng le, xiǎoxīn gǎnmào.",
        meaning: "It's cold, be careful not to catch a cold.",
      },
    ],
  },
  {
    id: 514,
    character: "发烧",
    pinyin: "fāshāo",
    meaning: "to have a fever",
    partOfSpeech: "v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=发烧",
    examples: [
      {
        character: "我发烧了。",
        pinyin: "Wǒ fāshāo le.",
        meaning: "I have a fever.",
      },
      {
        character: "孩子发烧了，应该去医院。",
        pinyin: "Háizi fāshāo le, yīnggāi qù yīyuàn.",
        meaning: "The child has a fever and should go to the hospital.",
      },
    ],
  },
  {
    id: 515,
    character: "咳嗽",
    pinyin: "késou",
    meaning: "to cough",
    partOfSpeech: "v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=咳嗽",
    examples: [
      {
        character: "我一直在咳嗽。",
        pinyin: "Wǒ yìzhí zài késou.",
        meaning: "I've been coughing continuously.",
      },
      {
        character: "这个药可以止咳。",
        pinyin: "Zhège yào kěyǐ zhǐ ké.",
        meaning: "This medicine can stop coughing.",
      },
    ],
  },

  // Medical care
  {
    id: 516,
    character: "医生",
    pinyin: "yīshēng",
    meaning: "doctor",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=医生",
    examples: [
      {
        character: "我需要去看医生。",
        pinyin: "Wǒ xūyào qù kàn yīshēng.",
        meaning: "I need to see a doctor.",
      },
      {
        character: "这位医生很有经验。",
        pinyin: "Zhè wèi yīshēng hěn yǒu jīngyàn.",
        meaning: "This doctor is very experienced.",
      },
    ],
  },
  {
    id: 517,
    character: "护士",
    pinyin: "hùshi",
    meaning: "nurse",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=护士",
    examples: [
      {
        character: "护士给我量了体温。",
        pinyin: "Hùshi gěi wǒ liáng le tǐwēn.",
        meaning: "The nurse took my temperature.",
      },
      {
        character: "这家医院的护士很友好。",
        pinyin: "Zhè jiā yīyuàn de hùshi hěn yǒuhào.",
        meaning: "The nurses at this hospital are very friendly.",
      },
    ],
  },
  {
    id: 518,
    character: "医院",
    pinyin: "yīyuàn",
    meaning: "hospital",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=医院",
    examples: [
      {
        character: "医院在哪里？",
        pinyin: "Yīyuàn zài nǎlǐ?",
        meaning: "Where is the hospital?",
      },
      {
        character: "这家医院很大。",
        pinyin: "Zhè jiā yīyuàn hěn dà.",
        meaning: "This hospital is very big.",
      },
    ],
  },
  {
    id: 519,
    character: "药",
    pinyin: "yào",
    meaning: "medicine",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=药",
    examples: [
      {
        character: "我需要买药。",
        pinyin: "Wǒ xūyào mǎi yào.",
        meaning: "I need to buy medicine.",
      },
      {
        character: "这个药很苦。",
        pinyin: "Zhège yào hěn kǔ.",
        meaning: "This medicine is very bitter.",
      },
    ],
  },
  {
    id: 520,
    character: "健康",
    pinyin: "jiànkāng",
    meaning: "health, healthy",
    partOfSpeech: "n/adj",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=健康",
    examples: [
      {
        character: "健康很重要。",
        pinyin: "Jiànkāng hěn zhòngyào.",
        meaning: "Health is very important.",
      },
      {
        character: "他很健康。",
        pinyin: "Tā hěn jiànkāng.",
        meaning: "He is very healthy.",
      },
    ],
  },

  // More body parts
  {
    id: 521,
    character: "心脏",
    pinyin: "xīnzàng",
    meaning: "heart",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=心脏",
    examples: [
      {
        character: "心脏在左边。",
        pinyin: "Xīnzàng zài zuǒbiān.",
        meaning: "The heart is on the left side.",
      },
      {
        character: "他的心脏很强壮。",
        pinyin: "Tā de xīnzàng hěn qiángzhuàng.",
        meaning: "His heart is very strong.",
      },
    ],
  },
  {
    id: 522,
    character: "肺",
    pinyin: "fèi",
    meaning: "lung",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=肺",
    examples: [
      {
        character: "吸烟对肺不好。",
        pinyin: "Xīyān duì fèi bù hǎo.",
        meaning: "Smoking is bad for the lungs.",
      },
      {
        character: "他的肺有问题。",
        pinyin: "Tā de fèi yǒu wèntí.",
        meaning: "He has a problem with his lungs.",
      },
    ],
  },
  {
    id: 523,
    character: "胃",
    pinyin: "wèi",
    meaning: "stomach",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=胃",
    examples: [
      {
        character: "我的胃不舒服。",
        pinyin: "Wǒ de wèi bù shūfu.",
        meaning: "My stomach is uncomfortable.",
      },
      {
        character: "他的胃很好。",
        pinyin: "Tā de wèi hěn hǎo.",
        meaning: "His stomach is very good.",
      },
    ],
  },
  {
    id: 524,
    character: "肝",
    pinyin: "gān",
    meaning: "liver",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=肝",
    examples: [
      {
        character: "喝酒对肝不好。",
        pinyin: "Hē jiǔ duì gān bù hǎo.",
        meaning: "Drinking alcohol is bad for the liver.",
      },
      {
        character: "他的肝有问题。",
        pinyin: "Tā de gān yǒu wèntí.",
        meaning: "He has a problem with his liver.",
      },
    ],
  },
  {
    id: 525,
    character: "肌肉",
    pinyin: "jīròu",
    meaning: "muscle",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=肌肉",
    examples: [
      {
        character: "他的肌肉很发达。",
        pinyin: "Tā de jīròu hěn fādá.",
        meaning: "His muscles are very developed.",
      },
      {
        character: "锻炼可以增强肌肉。",
        pinyin: "Duànliàn kěyǐ zēngqiáng jīròu.",
        meaning: "Exercise can strengthen muscles.",
      },
    ],
  },
  {
    id: 526,
    character: "骨头",
    pinyin: "gǔtou",
    meaning: "bone",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=骨头",
    examples: [
      {
        character: "他的骨头很硬。",
        pinyin: "Tā de gǔtou hěn yìng.",
        meaning: "His bones are very hard.",
      },
      {
        character: "我的骨头疼。",
        pinyin: "Wǒ de gǔtou téng.",
        meaning: "My bones hurt.",
      },
    ],
  },
  {
    id: 527,
    character: "皮肤",
    pinyin: "pífū",
    meaning: "skin",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=皮肤",
    examples: [
      {
        character: "她的皮肤很好。",
        pinyin: "Tā de pífū hěn hǎo.",
        meaning: "Her skin is very good.",
      },
      {
        character: "保护皮肤很重要。",
        pinyin: "Bǎohù pífū hěn zhòngyào.",
        meaning: "Protecting the skin is very important.",
      },
    ],
  },
  {
    id: 528,
    character: "血",
    pinyin: "xuè",
    meaning: "blood",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=血",
    examples: [
      {
        character: "他的血是红色的。",
        pinyin: "Tā de xuè shì hóngsè de.",
        meaning: "His blood is red.",
      },
      {
        character: "我的手在流血。",
        pinyin: "Wǒ de shǒu zài liú xuè.",
        meaning: "My hand is bleeding.",
      },
    ],
  },
  {
    id: 529,
    character: "神经",
    pinyin: "shénjīng",
    meaning: "nerve",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=神经",
    examples: [
      {
        character: "他的神经很敏感。",
        pinyin: "Tā de shénjīng hěn mǐngǎn.",
        meaning: "His nerves are very sensitive.",
      },
      {
        character: "这会伤害神经。",
        pinyin: "Zhè huì shānghài shénjīng.",
        meaning: "This will damage the nerves.",
      },
    ],
  },
  {
    id: 530,
    character: "大脑",
    pinyin: "dànǎo",
    meaning: "brain",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=大脑",
    examples: [
      {
        character: "大脑很复杂。",
        pinyin: "Dànǎo hěn fùzá.",
        meaning: "The brain is very complex.",
      },
      {
        character: "学习对大脑有好处。",
        pinyin: "Xuéxí duì dànǎo yǒu hǎochu.",
        meaning: "Learning is good for the brain.",
      },
    ],
  },

  // More health conditions
  {
    id: 531,
    character: "头痛",
    pinyin: "tóutòng",
    meaning: "headache",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=头痛",
    examples: [
      {
        character: "我有头痛。",
        pinyin: "Wǒ yǒu tóutòng.",
        meaning: "I have a headache.",
      },
      {
        character: "这个药可以治头痛。",
        pinyin: "Zhège yào kěyǐ zhì tóutòng.",
        meaning: "This medicine can treat headaches.",
      },
    ],
  },
  {
    id: 532,
    character: "牙痛",
    pinyin: "yátòng",
    meaning: "toothache",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=牙痛",
    examples: [
      {
        character: "我有牙痛。",
        pinyin: "Wǒ yǒu yátòng.",
        meaning: "I have a toothache.",
      },
      {
        character: "牙痛很难受。",
        pinyin: "Yátòng hěn nánshòu.",
        meaning: "Toothaches are very uncomfortable.",
      },
    ],
  },
  {
    id: 533,
    character: "过敏",
    pinyin: "guòmǐn",
    meaning: "allergy",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=过敏",
    examples: [
      {
        character: "我对花粉过敏。",
        pinyin: "Wǒ duì huāfěn guòmǐn.",
        meaning: "I am allergic to pollen.",
      },
      {
        character: "过敏会引起皮肤发红。",
        pinyin: "Guòmǐn huì yǐnqǐ pífū fāhóng.",
        meaning: "Allergies can cause skin redness.",
      },
    ],
  },
  {
    id: 534,
    character: "腹泻",
    pinyin: "fùxiè",
    meaning: "diarrhea",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=腹泻",
    examples: [
      {
        character: "我有腹泻。",
        pinyin: "Wǒ yǒu fùxiè.",
        meaning: "I have diarrhea.",
      },
      {
        character: "这个药可以治腹泻。",
        pinyin: "Zhège yào kěyǐ zhì fùxiè.",
        meaning: "This medicine can treat diarrhea.",
      },
    ],
  },
  {
    id: 535,
    character: "便秘",
    pinyin: "biànmì",
    meaning: "constipation",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=便秘",
    examples: [
      {
        character: "我有便秘。",
        pinyin: "Wǒ yǒu biànmì.",
        meaning: "I have constipation.",
      },
      {
        character: "多喝水可以预防便秘。",
        pinyin: "Duō hē shuǐ kěyǐ yùfáng biànmì.",
        meaning: "Drinking more water can prevent constipation.",
      },
    ],
  },
  {
    id: 536,
    character: "失眠",
    pinyin: "shīmián",
    meaning: "insomnia",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=失眠",
    examples: [
      {
        character: "我有失眠。",
        pinyin: "Wǒ yǒu shīmián.",
        meaning: "I have insomnia.",
      },
      {
        character: "压力会导致失眠。",
        pinyin: "Yālì huì dǎozhì shīmián.",
        meaning: "Stress can cause insomnia.",
      },
    ],
  },
  {
    id: 537,
    character: "抑郁",
    pinyin: "yìyù",
    meaning: "depression",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=抑郁",
    examples: [
      {
        character: "他有抑郁症。",
        pinyin: "Tā yǒu yìyù zhèng.",
        meaning: "He has depression.",
      },
      {
        character: "抑郁需要治疗。",
        pinyin: "Yìyù xūyào zhìliáo.",
        meaning: "Depression needs treatment.",
      },
    ],
  },
  {
    id: 538,
    character: "焦虑",
    pinyin: "jiāolǜ",
    meaning: "anxiety",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=焦虑",
    examples: [
      {
        character: "我感到焦虑。",
        pinyin: "Wǒ gǎndào jiāolǜ.",
        meaning: "I feel anxious.",
      },
      {
        character: "考试前我很焦虑。",
        pinyin: "Kǎoshì qián wǒ hěn jiāolǜ.",
        meaning: "I am very anxious before exams.",
      },
    ],
  },
  {
    id: 539,
    character: "疲劳",
    pinyin: "píláo",
    meaning: "fatigue",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=疲劳",
    examples: [
      {
        character: "我感到疲劳。",
        pinyin: "Wǒ gǎndào píláo.",
        meaning: "I feel fatigued.",
      },
      {
        character: "工作太多会导致疲劳。",
        pinyin: "Gōngzuò tài duō huì dǎozhì píláo.",
        meaning: "Too much work can cause fatigue.",
      },
    ],
  },
  {
    id: 540,
    character: "中风",
    pinyin: "zhòngfēng",
    meaning: "stroke",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=中风",
    examples: [
      {
        character: "他中风了。",
        pinyin: "Tā zhòngfēng le.",
        meaning: "He had a stroke.",
      },
      {
        character: "高血压会增加中风的风险。",
        pinyin: "Gāo xuèyā huì zēngjiā zhòngfēng de fēngxiǎn.",
        meaning: "High blood pressure increases the risk of stroke.",
      },
    ],
  },

  // Medical specialists
  {
    id: 541,
    character: "牙医",
    pinyin: "yáyī",
    meaning: "dentist",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=牙医",
    examples: [
      {
        character: "我需要去看牙医。",
        pinyin: "Wǒ xūyào qù kàn yáyī.",
        meaning: "I need to see a dentist.",
      },
      {
        character: "这位牙医很有经验。",
        pinyin: "Zhè wèi yáyī hěn yǒu jīngyàn.",
        meaning: "This dentist is very experienced.",
      },
    ],
  },
  {
    id: 542,
    character: "外科医生",
    pinyin: "wàikē yīshēng",
    meaning: "surgeon",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=外科医生",
    examples: [
      {
        character: "他是一名外科医生。",
        pinyin: "Tā shì yì míng wàikē yīshēng.",
        meaning: "He is a surgeon.",
      },
      {
        character: "外科医生需要很稳定的手。",
        pinyin: "Wàikē yīshēng xūyào hěn wěndìng de shǒu.",
        meaning: "Surgeons need very steady hands.",
      },
    ],
  },
  {
    id: 543,
    character: "内科医生",
    pinyin: "nèikē yīshēng",
    meaning: "internist",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=内科医生",
    examples: [
      {
        character: "她是一名内科医生。",
        pinyin: "Tā shì yì míng nèikē yīshēng.",
        meaning: "She is an internist.",
      },
      {
        character: "内科医生治疗内部疾病。",
        pinyin: "Nèikē yīshēng zhìliáo nèibù jíbìng.",
        meaning: "Internists treat internal diseases.",
      },
    ],
  },
  {
    id: 544,
    character: "眼科医生",
    pinyin: "yǎnkē yīshēng",
    meaning: "ophthalmologist",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=眼科医生",
    examples: [
      {
        character: "我需要去看眼科医生。",
        pinyin: "Wǒ xūyào qù kàn yǎnkē yīshēng.",
        meaning: "I need to see an ophthalmologist.",
      },
      {
        character: "眼科医生检查我的眼睛。",
        pinyin: "Yǎnkē yīshēng jiǎnchá wǒ de yǎnjing.",
        meaning: "The ophthalmologist examines my eyes.",
      },
    ],
  },
  {
    id: 545,
    character: "皮肤科医生",
    pinyin: "pífūkē yīshēng",
    meaning: "dermatologist",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=皮肤科医生",
    examples: [
      {
        character: "我需要去看皮肤科医生。",
        pinyin: "Wǒ xūyào qù kàn pífūkē yīshēng.",
        meaning: "I need to see a dermatologist.",
      },
      {
        character: "皮肤科医生治疗皮肤问题。",
        pinyin: "Pífūkē yīshēng zhìliáo pífū wèntí.",
        meaning: "Dermatologists treat skin problems.",
      },
    ],
  },

  // Medical procedures
  {
    id: 546,
    character: "手术",
    pinyin: "shǒushù",
    meaning: "surgery",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=手术",
    examples: [
      {
        character: "他需要做手术。",
        pinyin: "Tā xūyào zuò shǒushù.",
        meaning: "He needs to have surgery.",
      },
      {
        character: "手术很成功。",
        pinyin: "Shǒushù hěn chénggōng.",
        meaning: "The surgery was very successful.",
      },
    ],
  },
  {
    id: 547,
    character: "检查",
    pinyin: "jiǎnchá",
    meaning: "examination, check-up",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=检查",
    examples: [
      {
        character: "我需要做健康检查。",
        pinyin: "Wǒ xūyào zuò jiànkāng jiǎnchá.",
        meaning: "I need to have a health check-up.",
      },
      {
        character: "医生检查我的心脏。",
        pinyin: "Yīshēng jiǎnchá wǒ de xīnzàng.",
        meaning: "The doctor examines my heart.",
      },
    ],
  },
  {
    id: 548,
    character: "注射",
    pinyin: "zhùshè",
    meaning: "injection",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=注射",
    examples: [
      {
        character: "我需要打一针注射。",
        pinyin: "Wǒ xūyào dǎ yì zhēn zhùshè.",
        meaning: "I need to get an injection.",
      },
      {
        character: "护士给我注射疫苗。",
        pinyin: "Hùshi gěi wǒ zhùshè yìmiáo.",
        meaning: "The nurse gives me a vaccine injection.",
      },
    ],
  },
  {
    id: 549,
    character: "输血",
    pinyin: "shūxuè",
    meaning: "blood transfusion",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=输血",
    examples: [
      {
        character: "他需要输血。",
        pinyin: "Tā xūyào shūxuè.",
        meaning: "He needs a blood transfusion.",
      },
      {
        character: "输血可以救命。",
        pinyin: "Shūxuè kěyǐ jiùmìng.",
        meaning: "Blood transfusions can save lives.",
      },
    ],
  },
  {
    id: 550,
    character: "治疗",
    pinyin: "zhìliáo",
    meaning: "treatment",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=治疗",
    examples: [
      {
        character: "他正在接受治疗。",
        pinyin: "Tā zhèngzài jiēshòu zhìliáo.",
        meaning: "He is receiving treatment.",
      },
      {
        character: "这种治疗很有效。",
        pinyin: "Zhè zhǒng zhìliáo hěn yǒuxiào.",
        meaning: "This treatment is very effective.",
      },
    ],
  },
  // Additional health words
  {
    id: 551,
    character: "康复",
    pinyin: "kāngfù",
    meaning: "recovery, rehabilitation",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=康复",
    examples: [
      {
        character: "他正在康复中。",
        pinyin: "Tā zhèngzài kāngfù zhōng.",
        meaning: "He is recovering.",
      },
      {
        character: "康复训练很重要。",
        pinyin: "Kāngfù xùnliàn hěn zhòngyào.",
        meaning: "Rehabilitation training is very important.",
      },
    ],
  },
  {
    id: 552,
    character: "预防",
    pinyin: "yùfáng",
    meaning: "prevention",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=预防",
    examples: [
      {
        character: "预防疾病。",
        pinyin: "Yùfáng jíbìng.",
        meaning: "Prevent diseases.",
      },
      {
        character: "预防胜于治疗。",
        pinyin: "Yùfáng shèng yú zhìliáo.",
        meaning: "Prevention is better than cure.",
      },
    ],
  },
  {
    id: 553,
    character: "诊断",
    pinyin: "zhěnduàn",
    meaning: "diagnosis",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=诊断",
    examples: [
      {
        character: "医生的诊断。",
        pinyin: "Yīshēng de zhěnduàn.",
        meaning: "The doctor's diagnosis.",
      },
      {
        character: "诊断结果。",
        pinyin: "Zhěnduàn jiéguǒ.",
        meaning: "Diagnosis results.",
      },
    ],
  },
  {
    id: 554,
    character: "症状",
    pinyin: "zhèngzhuàng",
    meaning: "symptoms",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=症状",
    examples: [
      {
        character: "感冒的症状。",
        pinyin: "Gǎnmào de zhèngzhuàng.",
        meaning: "Cold symptoms.",
      },
      {
        character: "描述症状。",
        pinyin: "Miáoshù zhèngzhuàng.",
        meaning: "Describe the symptoms.",
      },
    ],
  },
  {
    id: 555,
    character: "体检",
    pinyin: "tǐjiàn",
    meaning: "physical examination",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=体检",
    examples: [
      {
        character: "定期体检。",
        pinyin: "Dìngqī tǐjiàn.",
        meaning: "Regular physical examination.",
      },
      {
        character: "体检报告。",
        pinyin: "Tǐjiàn bàogào.",
        meaning: "Physical examination report.",
      },
    ],
  },
  {
    id: 556,
    character: "急救",
    pinyin: "jíjiù",
    meaning: "first aid",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=急救",
    examples: [
      {
        character: "学习急救知识。",
        pinyin: "Xuéxí jíjiù zhīshi.",
        meaning: "Learn first aid knowledge.",
      },
      {
        character: "急救车来了。",
        pinyin: "Jíjiù chē lái le.",
        meaning: "The ambulance is here.",
      },
    ],
  },
  {
    id: 557,
    character: "传染",
    pinyin: "chuánrǎn",
    meaning: "infection, contagious",
    partOfSpeech: "n/v/adj",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=传染",
    examples: [
      {
        character: "这种病会传染。",
        pinyin: "Zhè zhǒng bìng huì chuánrǎn.",
        meaning: "This disease is contagious.",
      },
      {
        character: "防止传染。",
        pinyin: "Fángzhǐ chuánrǎn.",
        meaning: "Prevent infection.",
      },
    ],
  },
  {
    id: 558,
    character: "抗生素",
    pinyin: "kàngshēngsù",
    meaning: "antibiotic",
    partOfSpeech: "n",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=抗生素",
    examples: [
      {
        character: "服用抗生素。",
        pinyin: "Fúyòng kàngshēngsù.",
        meaning: "Take antibiotics.",
      },
      {
        character: "抗生素治疗。",
        pinyin: "Kàngshēngsù zhìliáo.",
        meaning: "Antibiotic treatment.",
      },
    ],
  },
  {
    id: 559,
    character: "保健",
    pinyin: "bǎojiàn",
    meaning: "health care",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=保健",
    examples: [
      {
        character: "注意保健。",
        pinyin: "Zhùyì bǎojiàn.",
        meaning: "Pay attention to health care.",
      },
      {
        character: "保健食品。",
        pinyin: "Bǎojiàn shípǐn.",
        meaning: "Health food.",
      },
    ],
  },
  {
    id: 560,
    character: "养生",
    pinyin: "yǎngshēng",
    meaning: "health preservation",
    partOfSpeech: "n/v",
    category: "health",
    image: "https://placehold.co/100x100/fff1f0/f5222d?text=养生",
    examples: [
      {
        character: "养生之道。",
        pinyin: "Yǎngshēng zhī dào.",
        meaning: "The way of health preservation.",
      },
      {
        character: "养生很重要。",
        pinyin: "Yǎngshēng hěn zhòngyào.",
        meaning: "Health preservation is very important.",
      },
    ],
  },
];

export default healthWords;
