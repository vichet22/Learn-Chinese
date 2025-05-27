// Education and work vocabulary
const educationWords = [
  // School and education
  {
    id: 401,
    character: "学校",
    pinyin: "xuéxiào",
    meaning: "school",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=学校",
    examples: [
      {
        character: "我的学校很大。",
        pinyin: "Wǒ de xuéxiào hěn dà.",
        meaning: "My school is very big.",
      },
      {
        character: "学校离我家很近。",
        pinyin: "Xuéxiào lí wǒ jiā hěn jìn.",
        meaning: "The school is very close to my home.",
      },
    ],
  },
  {
    id: 402,
    character: "大学",
    pinyin: "dàxué",
    meaning: "university, college",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=大学",
    examples: [
      {
        character: "我在北京大学学习。",
        pinyin: "Wǒ zài Běijīng Dàxué xuéxí.",
        meaning: "I study at Peking University.",
      },
      {
        character: "这所大学很有名。",
        pinyin: "Zhè suǒ dàxué hěn yǒumíng.",
        meaning: "This university is very famous.",
      },
    ],
  },
  {
    id: 403,
    character: "老师",
    pinyin: "lǎoshī",
    meaning: "teacher",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=老师",
    examples: [
      {
        character: "她是我的中文老师。",
        pinyin: "Tā shì wǒ de Zhōngwén lǎoshī.",
        meaning: "She is my Chinese teacher.",
      },
      {
        character: "这位老师教得很好。",
        pinyin: "Zhè wèi lǎoshī jiāo de hěn hǎo.",
        meaning: "This teacher teaches very well.",
      },
    ],
  },
  {
    id: 404,
    character: "学生",
    pinyin: "xuéshēng",
    meaning: "student",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=学生",
    examples: [
      {
        character: "我是一名大学学生。",
        pinyin: "Wǒ shì yì míng dàxué xuéshēng.",
        meaning: "I am a university student.",
      },
      {
        character: "教室里有很多学生。",
        pinyin: "Jiàoshì lǐ yǒu hěn duō xuéshēng.",
        meaning: "There are many students in the classroom.",
      },
    ],
  },
  {
    id: 405,
    character: "课",
    pinyin: "kè",
    meaning: "class, lesson",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=课",
    examples: [
      {
        character: "今天我有三节课。",
        pinyin: "Jīntiān wǒ yǒu sān jié kè.",
        meaning: "I have three classes today.",
      },
      {
        character: "中文课很有趣。",
        pinyin: "Zhōngwén kè hěn yǒuqù.",
        meaning: "Chinese class is very interesting.",
      },
    ],
  },
  {
    id: 406,
    character: "教室",
    pinyin: "jiàoshì",
    meaning: "classroom",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=教室",
    examples: [
      {
        character: "教室里有三十个学生。",
        pinyin: "Jiàoshì lǐ yǒu sānshí gè xuéshēng.",
        meaning: "There are thirty students in the classroom.",
      },
      {
        character: "这个教室很大。",
        pinyin: "Zhège jiàoshì hěn dà.",
        meaning: "This classroom is very big.",
      },
    ],
  },
  {
    id: 407,
    character: "图书馆",
    pinyin: "túshūguǎn",
    meaning: "library",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=图书馆",
    examples: [
      {
        character: "我常去图书馆学习。",
        pinyin: "Wǒ cháng qù túshūguǎn xuéxí.",
        meaning: "I often go to the library to study.",
      },
      {
        character: "图书馆里有很多书。",
        pinyin: "Túshūguǎn lǐ yǒu hěn duō shū.",
        meaning: "There are many books in the library.",
      },
    ],
  },
  {
    id: 408,
    character: "书",
    pinyin: "shū",
    meaning: "book",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=书",
    examples: [
      {
        character: "我喜欢读书。",
        pinyin: "Wǒ xǐhuān dú shū.",
        meaning: "I like to read books.",
      },
      {
        character: "这本书很有趣。",
        pinyin: "Zhè běn shū hěn yǒuqù.",
        meaning: "This book is very interesting.",
      },
    ],
  },
  {
    id: 409,
    character: "笔",
    pinyin: "bǐ",
    meaning: "pen",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=笔",
    examples: [
      {
        character: "这是我的笔。",
        pinyin: "Zhè shì wǒ de bǐ.",
        meaning: "This is my pen.",
      },
      {
        character: "你能借我一支笔吗？",
        pinyin: "Nǐ néng jiè wǒ yì zhī bǐ ma?",
        meaning: "Can you lend me a pen?",
      },
    ],
  },
  {
    id: 410,
    character: "纸",
    pinyin: "zhǐ",
    meaning: "paper",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=纸",
    examples: [
      {
        character: "我需要一张纸。",
        pinyin: "Wǒ xūyào yì zhāng zhǐ.",
        meaning: "I need a piece of paper.",
      },
      {
        character: "这张纸很白。",
        pinyin: "Zhè zhāng zhǐ hěn bái.",
        meaning: "This paper is very white.",
      },
    ],
  },

  // Study and learning
  {
    id: 411,
    character: "学习",
    pinyin: "xuéxí",
    meaning: "to study, learn",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=学习",
    examples: [
      {
        character: "我喜欢学习中文。",
        pinyin: "Wǒ xǐhuān xuéxí Zhōngwén.",
        meaning: "I like to study Chinese.",
      },
      {
        character: "学习很重要。",
        pinyin: "Xuéxí hěn zhòngyào.",
        meaning: "Studying is important.",
      },
    ],
  },
  {
    id: 412,
    character: "读",
    pinyin: "dú",
    meaning: "to read",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=读",
    examples: [
      {
        character: "我喜欢读书。",
        pinyin: "Wǒ xǐhuān dú shū.",
        meaning: "I like to read books.",
      },
      {
        character: "请大声读这个句子。",
        pinyin: "Qǐng dàshēng dú zhège jùzi.",
        meaning: "Please read this sentence aloud.",
      },
    ],
  },
  {
    id: 413,
    character: "写",
    pinyin: "xiě",
    meaning: "to write",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=写",
    examples: [
      {
        character: "我在写作业。",
        pinyin: "Wǒ zài xiě zuòyè.",
        meaning: "I am writing homework.",
      },
      {
        character: "请写你的名字。",
        pinyin: "Qǐng xiě nǐ de míngzi.",
        meaning: "Please write your name.",
      },
    ],
  },
  {
    id: 414,
    character: "问",
    pinyin: "wèn",
    meaning: "to ask",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=问",
    examples: [
      {
        character: "我想问一个问题。",
        pinyin: "Wǒ xiǎng wèn yí gè wèntí.",
        meaning: "I want to ask a question.",
      },
      {
        character: "如果你不懂，请问老师。",
        pinyin: "Rúguǒ nǐ bù dǒng, qǐng wèn lǎoshī.",
        meaning: "If you don't understand, please ask the teacher.",
      },
    ],
  },
  {
    id: 415,
    character: "回答",
    pinyin: "huídá",
    meaning: "to answer",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=回答",
    examples: [
      {
        character: "请回答我的问题。",
        pinyin: "Qǐng huídá wǒ de wèntí.",
        meaning: "Please answer my question.",
      },
      {
        character: "他回答得很好。",
        pinyin: "Tā huídá de hěn hǎo.",
        meaning: "He answered very well.",
      },
    ],
  },

  // Work and career
  {
    id: 416,
    character: "工作",
    pinyin: "gōngzuò",
    meaning: "to work, job",
    partOfSpeech: "v/n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=工作",
    examples: [
      {
        character: "我在一家公司工作。",
        pinyin: "Wǒ zài yì jiā gōngsī gōngzuò.",
        meaning: "I work at a company.",
      },
      {
        character: "这份工作很有趣。",
        pinyin: "Zhè fèn gōngzuò hěn yǒuqù.",
        meaning: "This job is very interesting.",
      },
    ],
  },
  {
    id: 417,
    character: "公司",
    pinyin: "gōngsī",
    meaning: "company",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=公司",
    examples: [
      {
        character: "我在一家大公司工作。",
        pinyin: "Wǒ zài yì jiā dà gōngsī gōngzuò.",
        meaning: "I work at a big company.",
      },
      {
        character: "这家公司很有名。",
        pinyin: "Zhè jiā gōngsī hěn yǒumíng.",
        meaning: "This company is very famous.",
      },
    ],
  },
  {
    id: 418,
    character: "办公室",
    pinyin: "bàngōngshì",
    meaning: "office",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=办公室",
    examples: [
      {
        character: "我的办公室在五楼。",
        pinyin: "Wǒ de bàngōngshì zài wǔ lóu.",
        meaning: "My office is on the fifth floor.",
      },
      {
        character: "这个办公室很大。",
        pinyin: "Zhège bàngōngshì hěn dà.",
        meaning: "This office is very big.",
      },
    ],
  },
  {
    id: 419,
    character: "老板",
    pinyin: "lǎobǎn",
    meaning: "boss",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=老板",
    examples: [
      {
        character: "我的老板很好。",
        pinyin: "Wǒ de lǎobǎn hěn hǎo.",
        meaning: "My boss is very nice.",
      },
      {
        character: "老板今天不在办公室。",
        pinyin: "Lǎobǎn jīntiān bú zài bàngōngshì.",
        meaning: "The boss is not in the office today.",
      },
    ],
  },
  {
    id: 420,
    character: "同事",
    pinyin: "tóngshì",
    meaning: "colleague",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=同事",
    examples: [
      {
        character: "他是我的同事。",
        pinyin: "Tā shì wǒ de tóngshì.",
        meaning: "He is my colleague.",
      },
      {
        character: "我和同事关系很好。",
        pinyin: "Wǒ hé tóngshì guānxì hěn hǎo.",
        meaning: "I have a good relationship with my colleagues.",
      },
    ],
  },

  // School subjects
  {
    id: 421,
    character: "数学",
    pinyin: "shùxué",
    meaning: "mathematics",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=数学",
    examples: [
      {
        character: "我喜欢数学。",
        pinyin: "Wǒ xǐhuān shùxué.",
        meaning: "I like mathematics.",
      },
      {
        character: "数学很难。",
        pinyin: "Shùxué hěn nán.",
        meaning: "Mathematics is difficult.",
      },
    ],
  },
  {
    id: 422,
    character: "语文",
    pinyin: "yǔwén",
    meaning: "Chinese language (subject)",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=语文",
    examples: [
      {
        character: "我的语文成绩很好。",
        pinyin: "Wǒ de yǔwén chéngjì hěn hǎo.",
        meaning: "My Chinese language grades are very good.",
      },
      {
        character: "今天有语文课。",
        pinyin: "Jīntiān yǒu yǔwén kè.",
        meaning: "Today we have Chinese language class.",
      },
    ],
  },
  {
    id: 423,
    character: "英语",
    pinyin: "Yīngyǔ",
    meaning: "English language",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=英语",
    examples: [
      {
        character: "我在学英语。",
        pinyin: "Wǒ zài xué Yīngyǔ.",
        meaning: "I am learning English.",
      },
      {
        character: "他的英语说得很好。",
        pinyin: "Tā de Yīngyǔ shuō de hěn hǎo.",
        meaning: "He speaks English very well.",
      },
    ],
  },
  {
    id: 424,
    character: "历史",
    pinyin: "lìshǐ",
    meaning: "history",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=历史",
    examples: [
      {
        character: "我喜欢学习历史。",
        pinyin: "Wǒ xǐhuān xuéxí lìshǐ.",
        meaning: "I like to study history.",
      },
      {
        character: "中国历史很悠久。",
        pinyin: "Zhōngguó lìshǐ hěn yōujiǔ.",
        meaning: "Chinese history is very long.",
      },
    ],
  },
  {
    id: 425,
    character: "地理",
    pinyin: "dìlǐ",
    meaning: "geography",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=地理",
    examples: [
      {
        character: "我对地理很感兴趣。",
        pinyin: "Wǒ duì dìlǐ hěn gǎn xìngqù.",
        meaning: "I am very interested in geography.",
      },
      {
        character: "地理课很有趣。",
        pinyin: "Dìlǐ kè hěn yǒuqù.",
        meaning: "Geography class is very interesting.",
      },
    ],
  },
  {
    id: 426,
    character: "物理",
    pinyin: "wùlǐ",
    meaning: "physics",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=物理",
    examples: [
      {
        character: "物理很难学。",
        pinyin: "Wùlǐ hěn nán xué.",
        meaning: "Physics is difficult to learn.",
      },
      {
        character: "他是物理老师。",
        pinyin: "Tā shì wùlǐ lǎoshī.",
        meaning: "He is a physics teacher.",
      },
    ],
  },
  {
    id: 427,
    character: "化学",
    pinyin: "huàxué",
    meaning: "chemistry",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=化学",
    examples: [
      {
        character: "化学实验很有趣。",
        pinyin: "Huàxué shíyàn hěn yǒuqù.",
        meaning: "Chemistry experiments are very interesting.",
      },
      {
        character: "我不喜欢化学。",
        pinyin: "Wǒ bù xǐhuān huàxué.",
        meaning: "I don't like chemistry.",
      },
    ],
  },
  {
    id: 428,
    character: "生物",
    pinyin: "shēngwù",
    meaning: "biology",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=生物",
    examples: [
      {
        character: "生物课很有趣。",
        pinyin: "Shēngwù kè hěn yǒuqù.",
        meaning: "Biology class is very interesting.",
      },
      {
        character: "我喜欢学习生物。",
        pinyin: "Wǒ xǐhuān xuéxí shēngwù.",
        meaning: "I like to study biology.",
      },
    ],
  },
  {
    id: 429,
    character: "音乐",
    pinyin: "yīnyuè",
    meaning: "music",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=音乐",
    examples: [
      {
        character: "我喜欢音乐课。",
        pinyin: "Wǒ xǐhuān yīnyuè kè.",
        meaning: "I like music class.",
      },
      {
        character: "他是音乐老师。",
        pinyin: "Tā shì yīnyuè lǎoshī.",
        meaning: "He is a music teacher.",
      },
    ],
  },
  {
    id: 430,
    character: "体育",
    pinyin: "tǐyù",
    meaning: "physical education, sports",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=体育",
    examples: [
      {
        character: "我喜欢体育课。",
        pinyin: "Wǒ xǐhuān tǐyù kè.",
        meaning: "I like P.E. class.",
      },
      {
        character: "他是体育老师。",
        pinyin: "Tā shì tǐyù lǎoshī.",
        meaning: "He is a P.E. teacher.",
      },
    ],
  },

  // Educational terms
  {
    id: 431,
    character: "考试",
    pinyin: "kǎoshì",
    meaning: "exam, test",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=考试",
    examples: [
      {
        character: "明天有考试。",
        pinyin: "Míngtiān yǒu kǎoshì.",
        meaning: "There is an exam tomorrow.",
      },
      {
        character: "我在准备考试。",
        pinyin: "Wǒ zài zhǔnbèi kǎoshì.",
        meaning: "I am preparing for the exam.",
      },
    ],
  },
  {
    id: 432,
    character: "作业",
    pinyin: "zuòyè",
    meaning: "homework",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=作业",
    examples: [
      {
        character: "我有很多作业。",
        pinyin: "Wǒ yǒu hěn duō zuòyè.",
        meaning: "I have a lot of homework.",
      },
      {
        character: "你做完作业了吗？",
        pinyin: "Nǐ zuò wán zuòyè le ma?",
        meaning: "Have you finished your homework?",
      },
    ],
  },
  {
    id: 433,
    character: "成绩",
    pinyin: "chéngjì",
    meaning: "grade, score",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=成绩",
    examples: [
      {
        character: "他的成绩很好。",
        pinyin: "Tā de chéngjì hěn hǎo.",
        meaning: "His grades are very good.",
      },
      {
        character: "我的考试成绩不错。",
        pinyin: "Wǒ de kǎoshì chéngjì bú cuò.",
        meaning: "My exam scores are not bad.",
      },
    ],
  },
  {
    id: 434,
    character: "毕业",
    pinyin: "bìyè",
    meaning: "to graduate",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=毕业",
    examples: [
      {
        character: "我明年毕业。",
        pinyin: "Wǒ míngnián bìyè.",
        meaning: "I will graduate next year.",
      },
      {
        character: "他已经大学毕业了。",
        pinyin: "Tā yǐjīng dàxué bìyè le.",
        meaning: "He has already graduated from university.",
      },
    ],
  },
  {
    id: 435,
    character: "文凭",
    pinyin: "wénpíng",
    meaning: "diploma, certificate",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=文凭",
    examples: [
      {
        character: "他有大学文凭。",
        pinyin: "Tā yǒu dàxué wénpíng.",
        meaning: "He has a university diploma.",
      },
      {
        character: "这个工作需要高中文凭。",
        pinyin: "Zhège gōngzuò xūyào gāozhōng wénpíng.",
        meaning: "This job requires a high school diploma.",
      },
    ],
  },
  {
    id: 436,
    character: "学期",
    pinyin: "xuéqī",
    meaning: "semester, term",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=学期",
    examples: [
      {
        character: "这个学期很忙。",
        pinyin: "Zhège xuéqī hěn máng.",
        meaning: "This semester is very busy.",
      },
      {
        character: "下学期我要选更多的课。",
        pinyin: "Xià xuéqī wǒ yào xuǎn gèng duō de kè.",
        meaning: "Next semester I will choose more courses.",
      },
    ],
  },
  {
    id: 437,
    character: "课程",
    pinyin: "kèchéng",
    meaning: "course",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=课程",
    examples: [
      {
        character: "这个课程很难。",
        pinyin: "Zhège kèchéng hěn nán.",
        meaning: "This course is very difficult.",
      },
      {
        character: "我选了三个课程。",
        pinyin: "Wǒ xuǎn le sān gè kèchéng.",
        meaning: "I chose three courses.",
      },
    ],
  },
  {
    id: 438,
    character: "讲座",
    pinyin: "jiǎngzuò",
    meaning: "lecture",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=讲座",
    examples: [
      {
        character: "今天有一个讲座。",
        pinyin: "Jīntiān yǒu yí gè jiǎngzuò.",
        meaning: "There is a lecture today.",
      },
      {
        character: "这个讲座很有趣。",
        pinyin: "Zhège jiǎngzuò hěn yǒuqù.",
        meaning: "This lecture is very interesting.",
      },
    ],
  },
  {
    id: 439,
    character: "奖学金",
    pinyin: "jiǎngxuéjīn",
    meaning: "scholarship",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=奖学金",
    examples: [
      {
        character: "他获得了奖学金。",
        pinyin: "Tā huòdé le jiǎngxuéjīn.",
        meaning: "He received a scholarship.",
      },
      {
        character: "这个奖学金很有价值。",
        pinyin: "Zhège jiǎngxuéjīn hěn yǒu jiàzhí.",
        meaning: "This scholarship is very valuable.",
      },
    ],
  },
  {
    id: 440,
    character: "留学",
    pinyin: "liúxué",
    meaning: "to study abroad",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=留学",
    examples: [
      {
        character: "我想去美国留学。",
        pinyin: "Wǒ xiǎng qù Měiguó liúxué.",
        meaning: "I want to study abroad in America.",
      },
      {
        character: "他在英国留学。",
        pinyin: "Tā zài Yīngguó liúxué.",
        meaning: "He is studying abroad in England.",
      },
    ],
  },

  // Work-related
  {
    id: 441,
    character: "简历",
    pinyin: "jiǎnlì",
    meaning: "resume, CV",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=简历",
    examples: [
      {
        character: "我正在写简历。",
        pinyin: "Wǒ zhèngzài xiě jiǎnlì.",
        meaning: "I am writing my resume.",
      },
      {
        character: "请把你的简历发给我。",
        pinyin: "Qǐng bǎ nǐ de jiǎnlì fā gěi wǒ.",
        meaning: "Please send me your resume.",
      },
    ],
  },
  {
    id: 442,
    character: "面试",
    pinyin: "miànshì",
    meaning: "interview",
    partOfSpeech: "n/v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=面试",
    examples: [
      {
        character: "明天我有一个面试。",
        pinyin: "Míngtiān wǒ yǒu yí gè miànshì.",
        meaning: "I have an interview tomorrow.",
      },
      {
        character: "面试很顺利。",
        pinyin: "Miànshì hěn shùnlì.",
        meaning: "The interview went smoothly.",
      },
    ],
  },
  {
    id: 443,
    character: "经验",
    pinyin: "jīngyàn",
    meaning: "experience",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=经验",
    examples: [
      {
        character: "他有很多工作经验。",
        pinyin: "Tā yǒu hěn duō gōngzuò jīngyàn.",
        meaning: "He has a lot of work experience.",
      },
      {
        character: "经验很重要。",
        pinyin: "Jīngyàn hěn zhòngyào.",
        meaning: "Experience is very important.",
      },
    ],
  },
  {
    id: 444,
    character: "职业",
    pinyin: "zhíyè",
    meaning: "profession, occupation",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=职业",
    examples: [
      {
        character: "你的职业是什么？",
        pinyin: "Nǐ de zhíyè shì shénme?",
        meaning: "What is your profession?",
      },
      {
        character: "教师是一个很好的职业。",
        pinyin: "Jiàoshī shì yí gè hěn hǎo de zhíyè.",
        meaning: "Teaching is a very good profession.",
      },
    ],
  },
  {
    id: 445,
    character: "薪水",
    pinyin: "xīnshuǐ",
    meaning: "salary",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=薪水",
    examples: [
      {
        character: "这份工作的薪水很高。",
        pinyin: "Zhè fèn gōngzuò de xīnshuǐ hěn gāo.",
        meaning: "The salary for this job is very high.",
      },
      {
        character: "他的薪水比我高。",
        pinyin: "Tā de xīnshuǐ bǐ wǒ gāo.",
        meaning: "His salary is higher than mine.",
      },
    ],
  },
  {
    id: 446,
    character: "加班",
    pinyin: "jiābān",
    meaning: "to work overtime",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=加班",
    examples: [
      {
        character: "我今天要加班。",
        pinyin: "Wǒ jīntiān yào jiābān.",
        meaning: "I have to work overtime today.",
      },
      {
        character: "他经常加班。",
        pinyin: "Tā jīngcháng jiābān.",
        meaning: "He often works overtime.",
      },
    ],
  },
  {
    id: 447,
    character: "辞职",
    pinyin: "cízhí",
    meaning: "to resign",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=辞职",
    examples: [
      {
        character: "他决定辞职。",
        pinyin: "Tā juédìng cízhí.",
        meaning: "He decided to resign.",
      },
      {
        character: "我想辞职去旅行。",
        pinyin: "Wǒ xiǎng cízhí qù lǚxíng.",
        meaning: "I want to resign and go traveling.",
      },
    ],
  },
  {
    id: 448,
    character: "升职",
    pinyin: "shēngzhí",
    meaning: "to get promoted",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=升职",
    examples: [
      {
        character: "他最近升职了。",
        pinyin: "Tā zuìjìn shēngzhí le.",
        meaning: "He was recently promoted.",
      },
      {
        character: "我希望明年能升职。",
        pinyin: "Wǒ xīwàng míngnián néng shēngzhí.",
        meaning: "I hope to get promoted next year.",
      },
    ],
  },
  {
    id: 449,
    character: "退休",
    pinyin: "tuìxiū",
    meaning: "to retire",
    partOfSpeech: "v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=退休",
    examples: [
      {
        character: "我爸爸已经退休了。",
        pinyin: "Wǒ bàba yǐjīng tuìxiū le.",
        meaning: "My father has already retired.",
      },
      {
        character: "他计划六十岁退休。",
        pinyin: "Tā jìhuà liùshí suì tuìxiū.",
        meaning: "He plans to retire at sixty.",
      },
    ],
  },
  {
    id: 450,
    character: "失业",
    pinyin: "shīyè",
    meaning: "to lose one's job, unemployment",
    partOfSpeech: "v/n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=失业",
    examples: [
      {
        character: "他最近失业了。",
        pinyin: "Tā zuìjìn shīyè le.",
        meaning: "He recently lost his job.",
      },
      {
        character: "失业率很高。",
        pinyin: "Shīyè lǜ hěn gāo.",
        meaning: "The unemployment rate is very high.",
      },
    ],
  },
  // Additional education words
  {
    id: 451,
    character: "知识",
    pinyin: "zhīshi",
    meaning: "knowledge",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=知识",
    examples: [
      {
        character: "学习新知识。",
        pinyin: "Xuéxí xīn zhīshi.",
        meaning: "Learn new knowledge.",
      },
      {
        character: "知识就是力量。",
        pinyin: "Zhīshi jiù shì lìliàng.",
        meaning: "Knowledge is power.",
      },
    ],
  },
  {
    id: 452,
    character: "智慧",
    pinyin: "zhìhuì",
    meaning: "wisdom",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=智慧",
    examples: [
      {
        character: "古人的智慧。",
        pinyin: "Gǔrén de zhìhuì.",
        meaning: "The wisdom of the ancients.",
      },
      {
        character: "智慧比知识更重要。",
        pinyin: "Zhìhuì bǐ zhīshi gèng zhòngyào.",
        meaning: "Wisdom is more important than knowledge.",
      },
    ],
  },
  {
    id: 453,
    character: "能力",
    pinyin: "nénglì",
    meaning: "ability, capability",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=能力",
    examples: [
      {
        character: "提高能力。",
        pinyin: "Tígāo nénglì.",
        meaning: "Improve ability.",
      },
      {
        character: "他有很强的能力。",
        pinyin: "Tā yǒu hěn qiáng de nénglì.",
        meaning: "He has strong abilities.",
      },
    ],
  },
  {
    id: 454,
    character: "技能",
    pinyin: "jìnéng",
    meaning: "skill",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=技能",
    examples: [
      {
        character: "学习新技能。",
        pinyin: "Xuéxí xīn jìnéng.",
        meaning: "Learn new skills.",
      },
      {
        character: "专业技能。",
        pinyin: "Zhuānyè jìnéng.",
        meaning: "Professional skills.",
      },
    ],
  },
  {
    id: 455,
    character: "经验",
    pinyin: "jīngyàn",
    meaning: "experience",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=经验",
    examples: [
      {
        character: "积累经验。",
        pinyin: "Jīlěi jīngyàn.",
        meaning: "Accumulate experience.",
      },
      {
        character: "工作经验。",
        pinyin: "Gōngzuò jīngyàn.",
        meaning: "Work experience.",
      },
    ],
  },
  {
    id: 456,
    character: "培训",
    pinyin: "péixùn",
    meaning: "training",
    partOfSpeech: "n/v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=培训",
    examples: [
      {
        character: "参加培训。",
        pinyin: "Cānjiā péixùn.",
        meaning: "Attend training.",
      },
      {
        character: "培训课程。",
        pinyin: "Péixùn kèchéng.",
        meaning: "Training course.",
      },
    ],
  },
  {
    id: 457,
    character: "实习",
    pinyin: "shíxí",
    meaning: "internship",
    partOfSpeech: "n/v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=实习",
    examples: [
      {
        character: "暑期实习。",
        pinyin: "Shǔqī shíxí.",
        meaning: "Summer internship.",
      },
      {
        character: "在公司实习。",
        pinyin: "Zài gōngsī shíxí.",
        meaning: "Intern at a company.",
      },
    ],
  },
  {
    id: 458,
    character: "进步",
    pinyin: "jìnbù",
    meaning: "progress",
    partOfSpeech: "n/v",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=进步",
    examples: [
      {
        character: "取得进步。",
        pinyin: "Qǔdé jìnbù.",
        meaning: "Make progress.",
      },
      {
        character: "他进步很快。",
        pinyin: "Tā jìnbù hěn kuài.",
        meaning: "He progresses very quickly.",
      },
    ],
  },
  {
    id: 459,
    character: "成就",
    pinyin: "chéngjiù",
    meaning: "achievement",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=成就",
    examples: [
      {
        character: "伟大的成就。",
        pinyin: "Wěidà de chéngjiù.",
        meaning: "Great achievement.",
      },
      {
        character: "学术成就。",
        pinyin: "Xuéshù chéngjiù.",
        meaning: "Academic achievement.",
      },
    ],
  },
  {
    id: 460,
    character: "目标",
    pinyin: "mùbiāo",
    meaning: "goal, target",
    partOfSpeech: "n",
    category: "education",
    image: "https://placehold.co/100x100/f9f0ff/722ed1?text=目标",
    examples: [
      {
        character: "设定目标。",
        pinyin: "Shèdìng mùbiāo.",
        meaning: "Set goals.",
      },
      {
        character: "实现目标。",
        pinyin: "Shíxiàn mùbiāo.",
        meaning: "Achieve goals.",
      },
    ],
  },
];

export default educationWords;
