import React, { useState, useCallback } from "react";
import "../style/Vocabulary.css";
import Advertisement from "./Advertisement";
import core1000WordList from "../data/core1000WordList";

// Vocabulary data
const vocabularyData = [
  // Adjectives
  {
    id: 1,
    character: "难",
    pinyin: "nán",
    meaning: "difficult",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=难",
    examples: [
      {
        character: "难题",
        pinyin: "nántí",
        meaning: "difficult problem",
      },
      {
        character: "困难",
        pinyin: "kùnnán",
        meaning: "difficulty",
      },
      {
        character: "难度",
        pinyin: "nándù",
        meaning: "difficulty level",
      },
    ],
  },
  {
    id: 2,
    character: "简单",
    pinyin: "jiǎndān",
    meaning: "easy",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=简单",
    examples: [
      {
        character: "简单的问题",
        pinyin: "jiǎndān de wèntí",
        meaning: "easy problem",
      },
      {
        character: "很简单",
        pinyin: "hěn jiǎndān",
        meaning: "very easy",
      },
    ],
  },
  {
    id: 3,
    character: "坏",
    pinyin: "huài",
    meaning: "bad",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=坏",
    examples: [
      {
        character: "那个男人很坏",
        pinyin: "Nà gè nánrén hěn huài",
        meaning: "The man is bad.",
      },
      {
        character: "坏习惯",
        pinyin: "huài xíguàn",
        meaning: "bad habit",
      },
      {
        character: "坏人",
        pinyin: "huàirén",
        meaning: "bad person",
      },
      {
        character: "坏了",
        pinyin: "huài le",
        meaning: "broken",
      },
    ],
  },
  {
    id: 4,
    character: "近",
    pinyin: "jìn",
    meaning: "near",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=近",
    examples: [
      {
        character: "我住在大学附近",
        pinyin: "Wǒ zhùzài dàxué fùjìn",
        meaning: "I live near the university.",
      },
      {
        character: "近视",
        pinyin: "jìnshì",
        meaning: "nearsighted",
      },
    ],
  },
  {
    id: 5,
    character: "好",
    pinyin: "hǎo",
    meaning: "good",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=好",
    examples: [
      {
        character: "好人",
        pinyin: "hǎorén",
        meaning: "good person",
      },
      {
        character: "好吃",
        pinyin: "hǎochī",
        meaning: "delicious",
      },
      {
        character: "好看",
        pinyin: "hǎokàn",
        meaning: "good-looking",
      },
    ],
  },
  {
    id: 6,
    character: "大",
    pinyin: "dà",
    meaning: "big",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=大",
    examples: [
      {
        character: "大学",
        pinyin: "dàxué",
        meaning: "university",
      },
      {
        character: "大人",
        pinyin: "dàrén",
        meaning: "adult",
      },
      {
        character: "大小",
        pinyin: "dàxiǎo",
        meaning: "size",
      },
    ],
  },
  {
    id: 7,
    character: "小",
    pinyin: "xiǎo",
    meaning: "small",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=小",
    examples: [
      {
        character: "小狗",
        pinyin: "xiǎogǒu",
        meaning: "puppy",
      },
      {
        character: "小心",
        pinyin: "xiǎoxīn",
        meaning: "careful",
      },
      {
        character: "小时",
        pinyin: "xiǎoshí",
        meaning: "hour",
      },
    ],
  },
  {
    id: 8,
    character: "热",
    pinyin: "rè",
    meaning: "hot",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=热",
    examples: [
      {
        character: "热天",
        pinyin: "rètiān",
        meaning: "hot day",
      },
      {
        character: "热水",
        pinyin: "rèshuǐ",
        meaning: "hot water",
      },
      {
        character: "热情",
        pinyin: "rèqíng",
        meaning: "enthusiasm",
      },
    ],
  },
  {
    id: 9,
    character: "冷",
    pinyin: "lěng",
    meaning: "cold",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=冷",
    examples: [
      {
        character: "冷天",
        pinyin: "lěngtiān",
        meaning: "cold day",
      },
      {
        character: "冷水",
        pinyin: "lěngshuǐ",
        meaning: "cold water",
      },
      {
        character: "冷静",
        pinyin: "lěngjìng",
        meaning: "calm",
      },
    ],
  },
  {
    id: 10,
    character: "快",
    pinyin: "kuài",
    meaning: "fast",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=快",
    examples: [
      {
        character: "快车",
        pinyin: "kuàichē",
        meaning: "express train",
      },
      {
        character: "快乐",
        pinyin: "kuàilè",
        meaning: "happy",
      },
      {
        character: "很快",
        pinyin: "hěn kuài",
        meaning: "very fast",
      },
    ],
  },
  {
    id: 11,
    character: "慢",
    pinyin: "màn",
    meaning: "slow",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=慢",
    examples: [
      {
        character: "慢车",
        pinyin: "mànchē",
        meaning: "slow train",
      },
      {
        character: "慢慢",
        pinyin: "mànmàn",
        meaning: "slowly",
      },
      {
        character: "很慢",
        pinyin: "hěn màn",
        meaning: "very slow",
      },
    ],
  },
  {
    id: 12,
    character: "高",
    pinyin: "gāo",
    meaning: "tall/high",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=高",
    examples: [
      {
        character: "高楼",
        pinyin: "gāolóu",
        meaning: "tall building",
      },
      {
        character: "高兴",
        pinyin: "gāoxìng",
        meaning: "happy",
      },
      {
        character: "高中",
        pinyin: "gāozhōng",
        meaning: "high school",
      },
    ],
  },
  {
    id: 13,
    character: "矮",
    pinyin: "ǎi",
    meaning: "short (height)",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=矮",
    examples: [
      {
        character: "矮人",
        pinyin: "ǎirén",
        meaning: "short person",
      },
      {
        character: "又矮又胖",
        pinyin: "yòu ǎi yòu pàng",
        meaning: "short and fat",
      },
    ],
  },
  {
    id: 14,
    character: "长",
    pinyin: "cháng",
    meaning: "long",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=长",
    examples: [
      {
        character: "长路",
        pinyin: "chánglù",
        meaning: "long road",
      },
      {
        character: "长时间",
        pinyin: "cháng shíjiān",
        meaning: "long time",
      },
      {
        character: "长城",
        pinyin: "chángchéng",
        meaning: "Great Wall",
      },
    ],
  },
  {
    id: 15,
    character: "短",
    pinyin: "duǎn",
    meaning: "short (length)",
    partOfSpeech: "adj",
    image: "https://placehold.co/100x100/e6f7ff/1890ff?text=短",
    examples: [
      {
        character: "短裤",
        pinyin: "duǎnkù",
        meaning: "shorts",
      },
      {
        character: "短信",
        pinyin: "duǎnxìn",
        meaning: "text message",
      },
      {
        character: "短发",
        pinyin: "duǎnfà",
        meaning: "short hair",
      },
    ],
  },
  // Nouns
  {
    id: 16,
    character: "人",
    pinyin: "rén",
    meaning: "person",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=人",
    examples: [
      {
        character: "中国人",
        pinyin: "Zhōngguó rén",
        meaning: "Chinese person",
      },
      {
        character: "人民",
        pinyin: "rénmín",
        meaning: "people",
      },
      {
        character: "人生",
        pinyin: "rénshēng",
        meaning: "life",
      },
    ],
  },
  {
    id: 17,
    character: "水",
    pinyin: "shuǐ",
    meaning: "water",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=水",
    examples: [
      {
        character: "水果",
        pinyin: "shuǐguǒ",
        meaning: "fruit",
      },
      {
        character: "水平",
        pinyin: "shuǐpíng",
        meaning: "level",
      },
      {
        character: "喝水",
        pinyin: "hē shuǐ",
        meaning: "drink water",
      },
    ],
  },
  {
    id: 18,
    character: "火",
    pinyin: "huǒ",
    meaning: "fire",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=火",
    examples: [
      {
        character: "火车",
        pinyin: "huǒchē",
        meaning: "train",
      },
      {
        character: "火山",
        pinyin: "huǒshān",
        meaning: "volcano",
      },
      {
        character: "生火",
        pinyin: "shēng huǒ",
        meaning: "make a fire",
      },
    ],
  },
  {
    id: 19,
    character: "山",
    pinyin: "shān",
    meaning: "mountain",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=山",
    examples: [
      {
        character: "山水",
        pinyin: "shānshuǐ",
        meaning: "landscape",
      },
      {
        character: "爬山",
        pinyin: "pá shān",
        meaning: "climb a mountain",
      },
      {
        character: "山区",
        pinyin: "shānqū",
        meaning: "mountainous area",
      },
    ],
  },
  {
    id: 20,
    character: "书",
    pinyin: "shū",
    meaning: "book",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=书",
    examples: [
      {
        character: "书包",
        pinyin: "shūbāo",
        meaning: "schoolbag",
      },
      {
        character: "看书",
        pinyin: "kàn shū",
        meaning: "read a book",
      },
      {
        character: "书店",
        pinyin: "shūdiàn",
        meaning: "bookstore",
      },
    ],
  },
  {
    id: 21,
    character: "车",
    pinyin: "chē",
    meaning: "car/vehicle",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=车",
    examples: [
      {
        character: "汽车",
        pinyin: "qìchē",
        meaning: "automobile",
      },
      {
        character: "火车",
        pinyin: "huǒchē",
        meaning: "train",
      },
      {
        character: "开车",
        pinyin: "kāi chē",
        meaning: "drive a car",
      },
    ],
  },
  {
    id: 22,
    character: "电脑",
    pinyin: "diànnǎo",
    meaning: "computer",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=电脑",
    examples: [
      {
        character: "用电脑",
        pinyin: "yòng diànnǎo",
        meaning: "use a computer",
      },
      {
        character: "笔记本电脑",
        pinyin: "bǐjìběn diànnǎo",
        meaning: "laptop",
      },
    ],
  },
  {
    id: 23,
    character: "手机",
    pinyin: "shǒujī",
    meaning: "mobile phone",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=手机",
    examples: [
      {
        character: "打手机",
        pinyin: "dǎ shǒujī",
        meaning: "make a phone call",
      },
      {
        character: "智能手机",
        pinyin: "zhìnéng shǒujī",
        meaning: "smartphone",
      },
    ],
  },
  {
    id: 24,
    character: "学校",
    pinyin: "xuéxiào",
    meaning: "school",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=学校",
    examples: [
      {
        character: "去学校",
        pinyin: "qù xuéxiào",
        meaning: "go to school",
      },
      {
        character: "小学",
        pinyin: "xiǎoxué",
        meaning: "primary school",
      },
      {
        character: "大学",
        pinyin: "dàxué",
        meaning: "university",
      },
    ],
  },
  {
    id: 25,
    character: "朋友",
    pinyin: "péngyou",
    meaning: "friend",
    partOfSpeech: "noun",
    image: "https://placehold.co/100x100/f6ffed/52c41a?text=朋友",
    examples: [
      {
        character: "好朋友",
        pinyin: "hǎo péngyou",
        meaning: "good friend",
      },
      {
        character: "朋友们",
        pinyin: "péngyou men",
        meaning: "friends",
      },
      {
        character: "交朋友",
        pinyin: "jiāo péngyou",
        meaning: "make friends",
      },
    ],
  },
  // Verbs
  {
    id: 26,
    character: "吃",
    pinyin: "chī",
    meaning: "to eat",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=吃",
    examples: [
      {
        character: "吃饭",
        pinyin: "chī fàn",
        meaning: "eat a meal",
      },
      {
        character: "吃水果",
        pinyin: "chī shuǐguǒ",
        meaning: "eat fruit",
      },
      {
        character: "吃药",
        pinyin: "chī yào",
        meaning: "take medicine",
      },
    ],
  },
  {
    id: 27,
    character: "喝",
    pinyin: "hē",
    meaning: "to drink",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=喝",
    examples: [
      {
        character: "喝水",
        pinyin: "hē shuǐ",
        meaning: "drink water",
      },
      {
        character: "喝茶",
        pinyin: "hē chá",
        meaning: "drink tea",
      },
      {
        character: "喝咖啡",
        pinyin: "hē kāfēi",
        meaning: "drink coffee",
      },
    ],
  },
  {
    id: 28,
    character: "说",
    pinyin: "shuō",
    meaning: "to speak/say",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=说",
    examples: [
      {
        character: "说话",
        pinyin: "shuō huà",
        meaning: "speak",
      },
      {
        character: "说中文",
        pinyin: "shuō Zhōngwén",
        meaning: "speak Chinese",
      },
      {
        character: "说实话",
        pinyin: "shuō shíhuà",
        meaning: "tell the truth",
      },
    ],
  },
  {
    id: 29,
    character: "看",
    pinyin: "kàn",
    meaning: "to see/look/read",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=看",
    examples: [
      {
        character: "看书",
        pinyin: "kàn shū",
        meaning: "read a book",
      },
      {
        character: "看电视",
        pinyin: "kàn diànshì",
        meaning: "watch TV",
      },
      {
        character: "看见",
        pinyin: "kànjiàn",
        meaning: "to see",
      },
    ],
  },
  {
    id: 30,
    character: "听",
    pinyin: "tīng",
    meaning: "to listen",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=听",
    examples: [
      {
        character: "听音乐",
        pinyin: "tīng yīnyuè",
        meaning: "listen to music",
      },
      {
        character: "听不懂",
        pinyin: "tīng bù dǒng",
        meaning: "don't understand (what is heard)",
      },
      {
        character: "听说",
        pinyin: "tīngshuō",
        meaning: "to hear (that)",
      },
    ],
  },
  {
    id: 31,
    character: "写",
    pinyin: "xiě",
    meaning: "to write",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=写",
    examples: [
      {
        character: "写字",
        pinyin: "xiě zì",
        meaning: "write characters",
      },
      {
        character: "写信",
        pinyin: "xiě xìn",
        meaning: "write a letter",
      },
      {
        character: "写作业",
        pinyin: "xiě zuòyè",
        meaning: "do homework",
      },
    ],
  },
  {
    id: 32,
    character: "去",
    pinyin: "qù",
    meaning: "to go",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=去",
    examples: [
      {
        character: "去学校",
        pinyin: "qù xuéxiào",
        meaning: "go to school",
      },
      {
        character: "去中国",
        pinyin: "qù Zhōngguó",
        meaning: "go to China",
      },
      {
        character: "去年",
        pinyin: "qùnián",
        meaning: "last year",
      },
    ],
  },
  {
    id: 33,
    character: "来",
    pinyin: "lái",
    meaning: "to come",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=来",
    examples: [
      {
        character: "来这里",
        pinyin: "lái zhèlǐ",
        meaning: "come here",
      },
      {
        character: "来自",
        pinyin: "láizì",
        meaning: "come from",
      },
      {
        character: "欢迎光临",
        pinyin: "huānyíng guānglín",
        meaning: "welcome",
      },
    ],
  },
  {
    id: 34,
    character: "学习",
    pinyin: "xuéxí",
    meaning: "to study/learn",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=学习",
    examples: [
      {
        character: "学习中文",
        pinyin: "xuéxí Zhōngwén",
        meaning: "study Chinese",
      },
      {
        character: "学生",
        pinyin: "xuésheng",
        meaning: "student",
      },
      {
        character: "学校",
        pinyin: "xuéxiào",
        meaning: "school",
      },
    ],
  },
  {
    id: 35,
    character: "工作",
    pinyin: "gōngzuò",
    meaning: "to work",
    partOfSpeech: "verb",
    image: "https://placehold.co/100x100/fff7e6/fa8c16?text=工作",
    examples: [
      {
        character: "找工作",
        pinyin: "zhǎo gōngzuò",
        meaning: "look for a job",
      },
      {
        character: "工作忙",
        pinyin: "gōngzuò máng",
        meaning: "busy with work",
      },
      {
        character: "工人",
        pinyin: "gōngrén",
        meaning: "worker",
      },
    ],
  },
  // Adverbs
  {
    id: 36,
    character: "很",
    pinyin: "hěn",
    meaning: "very",
    partOfSpeech: "adv",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=很",
    examples: [
      {
        character: "很好",
        pinyin: "hěn hǎo",
        meaning: "very good",
      },
      {
        character: "很大",
        pinyin: "hěn dà",
        meaning: "very big",
      },
      {
        character: "很忙",
        pinyin: "hěn máng",
        meaning: "very busy",
      },
    ],
  },
  {
    id: 37,
    character: "太",
    pinyin: "tài",
    meaning: "too/extremely",
    partOfSpeech: "adv",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=太",
    examples: [
      {
        character: "太好了",
        pinyin: "tài hǎo le",
        meaning: "great!/excellent!",
      },
      {
        character: "太贵了",
        pinyin: "tài guì le",
        meaning: "too expensive",
      },
      {
        character: "太多了",
        pinyin: "tài duō le",
        meaning: "too much",
      },
    ],
  },
  {
    id: 38,
    character: "不",
    pinyin: "bù",
    meaning: "not",
    partOfSpeech: "adv",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=不",
    examples: [
      {
        character: "不好",
        pinyin: "bù hǎo",
        meaning: "not good",
      },
      {
        character: "不是",
        pinyin: "bú shì",
        meaning: "is not",
      },
      {
        character: "不要",
        pinyin: "bú yào",
        meaning: "don't",
      },
    ],
  },
  {
    id: 39,
    character: "也",
    pinyin: "yě",
    meaning: "also",
    partOfSpeech: "adv",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=也",
    examples: [
      {
        character: "我也是",
        pinyin: "wǒ yě shì",
        meaning: "me too",
      },
      {
        character: "他也来",
        pinyin: "tā yě lái",
        meaning: "he also comes",
      },
      {
        character: "也不错",
        pinyin: "yě bú cuò",
        meaning: "also not bad",
      },
    ],
  },
  {
    id: 40,
    character: "都",
    pinyin: "dōu",
    meaning: "all/both",
    partOfSpeech: "adv",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=都",
    examples: [
      {
        character: "我们都去",
        pinyin: "wǒmen dōu qù",
        meaning: "we all go",
      },
      {
        character: "都好",
        pinyin: "dōu hǎo",
        meaning: "all good",
      },
      {
        character: "都不",
        pinyin: "dōu bù",
        meaning: "none/all not",
      },
    ],
  },
  // Pronouns
  {
    id: 41,
    character: "我",
    pinyin: "wǒ",
    meaning: "I/me",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=我",
    examples: [
      {
        character: "我是",
        pinyin: "wǒ shì",
        meaning: "I am",
      },
      {
        character: "我的",
        pinyin: "wǒ de",
        meaning: "my/mine",
      },
      {
        character: "我们",
        pinyin: "wǒmen",
        meaning: "we/us",
      },
    ],
  },
  {
    id: 42,
    character: "你",
    pinyin: "nǐ",
    meaning: "you",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=你",
    examples: [
      {
        character: "你好",
        pinyin: "nǐ hǎo",
        meaning: "hello",
      },
      {
        character: "你的",
        pinyin: "nǐ de",
        meaning: "your/yours",
      },
      {
        character: "你们",
        pinyin: "nǐmen",
        meaning: "you (plural)",
      },
    ],
  },
  {
    id: 43,
    character: "他",
    pinyin: "tā",
    meaning: "he/him",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=他",
    examples: [
      {
        character: "他是",
        pinyin: "tā shì",
        meaning: "he is",
      },
      {
        character: "他的",
        pinyin: "tā de",
        meaning: "his",
      },
      {
        character: "他们",
        pinyin: "tāmen",
        meaning: "they/them (male or mixed)",
      },
    ],
  },
  {
    id: 44,
    character: "她",
    pinyin: "tā",
    meaning: "she/her",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=她",
    examples: [
      {
        character: "她是",
        pinyin: "tā shì",
        meaning: "she is",
      },
      {
        character: "她的",
        pinyin: "tā de",
        meaning: "her/hers",
      },
      {
        character: "她们",
        pinyin: "tāmen",
        meaning: "they/them (female)",
      },
    ],
  },
  {
    id: 45,
    character: "这",
    pinyin: "zhè",
    meaning: "this",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=这",
    examples: [
      {
        character: "这个",
        pinyin: "zhè ge",
        meaning: "this one",
      },
      {
        character: "这里",
        pinyin: "zhèlǐ",
        meaning: "here",
      },
      {
        character: "这是",
        pinyin: "zhè shì",
        meaning: "this is",
      },
    ],
  },
  {
    id: 46,
    character: "那",
    pinyin: "nà",
    meaning: "that",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=那",
    examples: [
      {
        character: "那个",
        pinyin: "nà ge",
        meaning: "that one",
      },
      {
        character: "那里",
        pinyin: "nàlǐ",
        meaning: "there",
      },
      {
        character: "那是",
        pinyin: "nà shì",
        meaning: "that is",
      },
    ],
  },
  {
    id: 47,
    character: "什么",
    pinyin: "shénme",
    meaning: "what",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=什么",
    examples: [
      {
        character: "什么时候",
        pinyin: "shénme shíhou",
        meaning: "when",
      },
      {
        character: "什么意思",
        pinyin: "shénme yìsi",
        meaning: "what meaning",
      },
      {
        character: "为什么",
        pinyin: "wèi shénme",
        meaning: "why",
      },
    ],
  },
  {
    id: 48,
    character: "谁",
    pinyin: "shuí",
    meaning: "who",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=谁",
    examples: [
      {
        character: "谁的",
        pinyin: "shuí de",
        meaning: "whose",
      },
      {
        character: "是谁",
        pinyin: "shì shuí",
        meaning: "who is",
      },
      {
        character: "谁知道",
        pinyin: "shuí zhīdào",
        meaning: "who knows",
      },
    ],
  },
  {
    id: 49,
    character: "哪",
    pinyin: "nǎ",
    meaning: "which",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=哪",
    examples: [
      {
        character: "哪个",
        pinyin: "nǎ ge",
        meaning: "which one",
      },
      {
        character: "哪里",
        pinyin: "nǎlǐ",
        meaning: "where",
      },
      {
        character: "哪些",
        pinyin: "nǎ xiē",
        meaning: "which ones",
      },
    ],
  },
  {
    id: 50,
    character: "怎么",
    pinyin: "zěnme",
    meaning: "how",
    partOfSpeech: "pronoun",
    image: "https://placehold.co/100x100/e6fffb/13c2c2?text=怎么",
    examples: [
      {
        character: "怎么样",
        pinyin: "zěnmeyàng",
        meaning: "how is it",
      },
      {
        character: "怎么办",
        pinyin: "zěnme bàn",
        meaning: "what to do",
      },
      {
        character: "怎么说",
        pinyin: "zěnme shuō",
        meaning: "how to say",
      },
    ],
  },
];

const Vocabulary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedWords, setSelectedWords] = useState([]);
  const [showExamples, setShowExamples] = useState({});
  const [speaking, setSpeaking] = useState(false);
  const [currentSpeech, setCurrentSpeech] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.8);
  const [speechVolume, setSpeechVolume] = useState(1.0);
  const [isCore1000Mode, setIsCore1000Mode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(20);

  // Get categories for Core 1000 Word List
  const core1000Categories = [
    "All",
    ...new Set(core1000WordList.map((word) => word.category)),
  ];

  // Get current data source based on mode
  const currentDataSource = isCore1000Mode ? core1000WordList : vocabularyData;

  // Filter vocabulary based on search term and category
  const filteredVocabulary = currentDataSource.filter((word) => {
    const matchesSearch =
      word.character.includes(searchTerm) ||
      word.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.meaning.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesCategory = false;
    if (isCore1000Mode) {
      matchesCategory =
        selectedCategory === "All" || word.category === selectedCategory;
    } else {
      matchesCategory =
        selectedCategory === "All" || word.partOfSpeech === selectedCategory;
    }

    return matchesSearch && matchesCategory;
  });

  // Get current words for pagination (only in Core 1000 mode)
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = isCore1000Mode
    ? filteredVocabulary.slice(indexOfFirstWord, indexOfLastWord)
    : filteredVocabulary;

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredVocabulary.length / wordsPerPage);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Speech synthesis function
  const speakText = useCallback(
    (text, lang = "zh-CN") => {
      // Stop any current speech
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        if (currentSpeech === text) {
          setCurrentSpeech(null);
          setSpeaking(false);
          return;
        }
      }

      // Create a new speech synthesis utterance
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechRate; // Use the user-selected rate
      utterance.volume = speechVolume; // Use the user-selected volume

      // Set event handlers
      utterance.onstart = () => {
        setSpeaking(true);
        setCurrentSpeech(text);
      };

      utterance.onend = () => {
        setSpeaking(false);
        setCurrentSpeech(null);
      };

      utterance.onerror = (event) => {
        console.error("Speech synthesis error:", event);
        setSpeaking(false);
        setCurrentSpeech(null);
      };

      // Speak the text
      window.speechSynthesis.speak(utterance);
    },
    [currentSpeech, speechRate, speechVolume]
  );

  // Toggle showing examples for a word
  const toggleExamples = (id) => {
    setShowExamples((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Toggle word selection
  const toggleWordSelection = (id) => {
    if (selectedWords.includes(id)) {
      setSelectedWords(selectedWords.filter((wordId) => wordId !== id));
    } else {
      setSelectedWords([...selectedWords, id]);
    }
  };

  return (
    <div className="vocabulary-container">
      {isCore1000Mode ? (
        <div className="core-word-list-header">
          <div className="core-word-list-logo">
            <div className="logo-circle">
              <span>1000</span>
            </div>
          </div>
          <div className="core-word-list-title">
            <h2>Chinese Core 1000 Word List</h2>
            <p>{filteredVocabulary.length} WORDS</p>
          </div>
        </div>
      ) : (
        <>
          <h2>Chinese Vocabulary</h2>
          <p>Learn essential Chinese words and phrases with examples.</p>
        </>
      )}

      {/* Top ad */}
      <Advertisement type="adsterra" />

      <div className="vocabulary-controls">
        <div className="mode-toggle">
          <button
            className={`mode-button ${!isCore1000Mode ? "active" : ""}`}
            onClick={() => {
              setIsCore1000Mode(false);
              setCurrentPage(1);
              setSelectedCategory("All");
            }}
          >
            Regular Vocabulary
          </button>
          <button
            className={`mode-button ${isCore1000Mode ? "active" : ""}`}
            onClick={() => {
              setIsCore1000Mode(true);
              setCurrentPage(1);
              setSelectedCategory("All");
            }}
          >
            Core 1000 Word List
          </button>
        </div>

        <div className="vocabulary-search">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search (English, Chinese or Romanization)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">Search</button>
          </div>
          <div className="category-dropdown">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {isCore1000Mode ? (
                // Categories for Core 1000 Word List
                core1000Categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "All"
                      ? "Category (All)"
                      : category
                          .split(" ")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                  </option>
                ))
              ) : (
                // Categories for regular vocabulary
                <>
                  <option value="All">Category (All)</option>
                  <option value="noun">Nouns</option>
                  <option value="verb">Verbs</option>
                  <option value="adj">Adjectives</option>
                  <option value="adv">Adverbs</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="speech-controls">
          <h4>Speech Settings</h4>
          <div className="speech-control-item">
            <label htmlFor="speech-rate">Speed:</label>
            <input
              type="range"
              id="speech-rate"
              min="0.5"
              max="1.5"
              step="0.1"
              value={speechRate}
              onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
            />
            <span className="speech-value">{speechRate.toFixed(1)}x</span>
          </div>
          <div className="speech-control-item">
            <label htmlFor="speech-volume">Volume:</label>
            <input
              type="range"
              id="speech-volume"
              min="0"
              max="1"
              step="0.1"
              value={speechVolume}
              onChange={(e) => setSpeechVolume(parseFloat(e.target.value))}
            />
            <span className="speech-value">
              {Math.round(speechVolume * 100)}%
            </span>
          </div>
          <div className="speech-info">
            <p>Click on 🔊 to hear Chinese characters</p>
            <p>Click on 🔈 to hear pinyin pronunciation</p>
          </div>
        </div>
      </div>

      <div className="vocabulary-list">
        {currentWords.map((word) => (
          <div key={word.id} className="vocabulary-item">
            <div className="word-checkbox">
              <input
                type="checkbox"
                checked={selectedWords.includes(word.id)}
                onChange={() => toggleWordSelection(word.id)}
              />
            </div>
            <div className="word-image">
              <img src={word.image} alt={word.character} />
            </div>
            <div className="word-details">
              <div className="word-main">
                <div className="word-character">
                  <span
                    className={`audio-icon ${
                      currentSpeech === word.character ? "speaking" : ""
                    }`}
                    onClick={() => speakText(word.character)}
                    title="Click to hear pronunciation"
                  >
                    🔊
                  </span>
                  <span className="character">{word.character}</span>
                  <span className="part-of-speech">({word.partOfSpeech})</span>
                </div>
                <div className="word-pronunciation">
                  <div className="pinyin">
                    {word.pinyin}
                    <button
                      className={`pinyin-audio-btn ${
                        currentSpeech === word.pinyin ? "speaking" : ""
                      }`}
                      onClick={() =>
                        speakText(
                          word.pinyin
                            .replace(/[āáǎà]/g, "a")
                            .replace(/[ēéěè]/g, "e")
                            .replace(/[īíǐì]/g, "i")
                            .replace(/[ōóǒò]/g, "o")
                            .replace(/[ūúǔù]/g, "u"),
                          "zh-CN"
                        )
                      }
                      title="Hear pinyin pronunciation"
                    >
                      <span className="pinyin-audio-icon">🔈</span>
                    </button>
                  </div>
                  <div className="meaning">{word.meaning}</div>
                </div>
              </div>

              <div className="word-examples">
                {word.examples.slice(0, 1).map((example, index) => (
                  <div key={index} className="example">
                    <div className="example-character">
                      <span
                        className={`audio-icon ${
                          currentSpeech === example.character ? "speaking" : ""
                        }`}
                        onClick={() => speakText(example.character)}
                        title="Click to hear pronunciation"
                      >
                        🔊
                      </span>
                      <span>{example.character}</span>
                    </div>
                    <div className="example-pronunciation">
                      <div className="pinyin">
                        {example.pinyin}
                        <button
                          className={`pinyin-audio-btn ${
                            currentSpeech === example.pinyin ? "speaking" : ""
                          }`}
                          onClick={() =>
                            speakText(
                              example.pinyin
                                .replace(/[āáǎà]/g, "a")
                                .replace(/[ēéěè]/g, "e")
                                .replace(/[īíǐì]/g, "i")
                                .replace(/[ōóǒò]/g, "o")
                                .replace(/[ūúǔù]/g, "u"),
                              "zh-CN"
                            )
                          }
                          title="Hear pinyin pronunciation"
                        >
                          <span className="pinyin-audio-icon">🔈</span>
                        </button>
                      </div>
                      <div className="meaning">{example.meaning}</div>
                    </div>
                  </div>
                ))}

                {word.examples.length > 1 && (
                  <div className="more-examples">
                    <button
                      className="toggle-examples"
                      onClick={() => toggleExamples(word.id)}
                    >
                      {showExamples[word.id]
                        ? "Hide examples"
                        : `${word.examples.length - 1} MORE EXAMPLE${
                            word.examples.length - 1 > 1 ? "S" : ""
                          }`}
                    </button>
                  </div>
                )}

                {showExamples[word.id] &&
                  word.examples.slice(1).map((example, index) => (
                    <div key={index} className="example">
                      <div className="example-character">
                        <span
                          className={`audio-icon ${
                            currentSpeech === example.character
                              ? "speaking"
                              : ""
                          }`}
                          onClick={() => speakText(example.character)}
                          title="Click to hear pronunciation"
                        >
                          🔊
                        </span>
                        <span>{example.character}</span>
                      </div>
                      <div className="example-pronunciation">
                        <div className="pinyin">
                          {example.pinyin}
                          <button
                            className={`pinyin-audio-btn ${
                              currentSpeech === example.pinyin ? "speaking" : ""
                            }`}
                            onClick={() =>
                              speakText(
                                example.pinyin
                                  .replace(/[āáǎà]/g, "a")
                                  .replace(/[ēéěè]/g, "e")
                                  .replace(/[īíǐì]/g, "i")
                                  .replace(/[ōóǒò]/g, "o")
                                  .replace(/[ūúǔù]/g, "u"),
                                "zh-CN"
                              )
                            }
                            title="Hear pinyin pronunciation"
                          >
                            <span className="pinyin-audio-icon">🔈</span>
                          </button>
                        </div>
                        <div className="meaning">{example.meaning}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination for Core 1000 Word List */}
      {isCore1000Mode && totalPages > 1 && (
        <div className="pagination">
          {/* Previous page button */}
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className={currentPage === 1 ? "disabled" : ""}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {/* First page */}
          {currentPage > 3 && <button onClick={() => paginate(1)}>1</button>}

          {/* Ellipsis if needed */}
          {currentPage > 4 && <span className="pagination-ellipsis">...</span>}

          {/* Pages around current page */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) => page >= currentPage - 1 && page <= currentPage + 1
            )
            .filter((page) => page > 0 && page <= totalPages)
            .map((page) => (
              <button
                key={page}
                onClick={() => paginate(page)}
                className={currentPage === page ? "active" : ""}
              >
                {page}
              </button>
            ))}

          {/* Ellipsis if needed */}
          {currentPage < totalPages - 3 && (
            <span className="pagination-ellipsis">...</span>
          )}

          {/* Last page */}
          {currentPage < totalPages - 2 && (
            <button onClick={() => paginate(totalPages)}>{totalPages}</button>
          )}

          {/* Next page button */}
          <button
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            className={currentPage === totalPages ? "disabled" : ""}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}

      {/* Bottom ad */}
      <Advertisement type="adsterra" />
    </div>
  );
};

export default Vocabulary;
