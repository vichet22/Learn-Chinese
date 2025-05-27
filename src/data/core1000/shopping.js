// Shopping and clothing vocabulary
const shoppingWords = [
  // Shopping places
  {
    id: 801,
    character: "商店",
    pinyin: "shāngdiàn",
    meaning: "shop, store",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=商店",
    examples: [
      {
        character: "这家商店很大。",
        pinyin: "Zhè jiā shāngdiàn hěn dà.",
        meaning: "This store is very big.",
      },
      {
        character: "商店几点关门？",
        pinyin: "Shāngdiàn jǐ diǎn guānmén?",
        meaning: "What time does the store close?",
      },
    ],
  },
  {
    id: 802,
    character: "超市",
    pinyin: "chāoshì",
    meaning: "supermarket",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=超市",
    examples: [
      {
        character: "我要去超市买东西。",
        pinyin: "Wǒ yào qù chāoshì mǎi dōngxi.",
        meaning: "I'm going to the supermarket to buy things.",
      },
      {
        character: "这家超市的东西很便宜。",
        pinyin: "Zhè jiā chāoshì de dōngxi hěn piányi.",
        meaning: "The things at this supermarket are very cheap.",
      },
    ],
  },
  {
    id: 803,
    character: "市场",
    pinyin: "shìchǎng",
    meaning: "market",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=市场",
    examples: [
      {
        character: "我喜欢去菜市场买菜。",
        pinyin: "Wǒ xǐhuān qù cài shìchǎng mǎi cài.",
        meaning: "I like to go to the vegetable market to buy vegetables.",
      },
      {
        character: "这个市场很热闹。",
        pinyin: "Zhège shìchǎng hěn rènao.",
        meaning: "This market is very lively.",
      },
    ],
  },
  {
    id: 804,
    character: "商场",
    pinyin: "shāngchǎng",
    meaning: "shopping mall",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=商场",
    examples: [
      {
        character: "这个商场有很多商店。",
        pinyin: "Zhège shāngchǎng yǒu hěn duō shāngdiàn.",
        meaning: "This shopping mall has many stores.",
      },
      {
        character: "我们周末去商场吧。",
        pinyin: "Wǒmen zhōumò qù shāngchǎng ba.",
        meaning: "Let's go to the shopping mall on the weekend.",
      },
    ],
  },
  {
    id: 805,
    character: "书店",
    pinyin: "shūdiàn",
    meaning: "bookstore",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=书店",
    examples: [
      {
        character: "我喜欢去书店。",
        pinyin: "Wǒ xǐhuān qù shūdiàn.",
        meaning: "I like to go to bookstores.",
      },
      {
        character: "这家书店的书很多。",
        pinyin: "Zhè jiā shūdiàn de shū hěn duō.",
        meaning: "This bookstore has many books.",
      },
    ],
  },

  // Shopping actions
  {
    id: 806,
    character: "买",
    pinyin: "mǎi",
    meaning: "to buy",
    partOfSpeech: "v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=买",
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
    id: 807,
    character: "卖",
    pinyin: "mài",
    meaning: "to sell",
    partOfSpeech: "v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=卖",
    examples: [
      {
        character: "他卖水果。",
        pinyin: "Tā mài shuǐguǒ.",
        meaning: "He sells fruit.",
      },
      {
        character: "这家商店卖什么？",
        pinyin: "Zhè jiā shāngdiàn mài shénme?",
        meaning: "What does this store sell?",
      },
    ],
  },
  {
    id: 808,
    character: "付钱",
    pinyin: "fù qián",
    meaning: "to pay money",
    partOfSpeech: "v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=付钱",
    examples: [
      {
        character: "我要付钱。",
        pinyin: "Wǒ yào fù qián.",
        meaning: "I want to pay.",
      },
      {
        character: "你可以用信用卡付钱。",
        pinyin: "Nǐ kěyǐ yòng xìnyòngkǎ fù qián.",
        meaning: "You can pay with a credit card.",
      },
    ],
  },
  {
    id: 809,
    character: "便宜",
    pinyin: "piányi",
    meaning: "cheap, inexpensive",
    partOfSpeech: "adj",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=便宜",
    examples: [
      {
        character: "这个很便宜。",
        pinyin: "Zhège hěn piányi.",
        meaning: "This is very cheap.",
      },
      {
        character: "可以便宜一点吗？",
        pinyin: "Kěyǐ piányi yìdiǎn ma?",
        meaning: "Can it be a little cheaper?",
      },
    ],
  },
  {
    id: 810,
    character: "贵",
    pinyin: "guì",
    meaning: "expensive",
    partOfSpeech: "adj",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=贵",
    examples: [
      {
        character: "这个太贵了。",
        pinyin: "Zhège tài guì le.",
        meaning: "This is too expensive.",
      },
      {
        character: "为什么这么贵？",
        pinyin: "Wèishénme zhème guì?",
        meaning: "Why is it so expensive?",
      },
    ],
  },

  // Clothing
  {
    id: 811,
    character: "衣服",
    pinyin: "yīfu",
    meaning: "clothes",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=衣服",
    examples: [
      {
        character: "我想买新衣服。",
        pinyin: "Wǒ xiǎng mǎi xīn yīfu.",
        meaning: "I want to buy new clothes.",
      },
      {
        character: "这件衣服很漂亮。",
        pinyin: "Zhè jiàn yīfu hěn piàoliang.",
        meaning: "This piece of clothing is very beautiful.",
      },
    ],
  },
  {
    id: 812,
    character: "裤子",
    pinyin: "kùzi",
    meaning: "pants, trousers",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=裤子",
    examples: [
      {
        character: "我需要一条新裤子。",
        pinyin: "Wǒ xūyào yì tiáo xīn kùzi.",
        meaning: "I need a new pair of pants.",
      },
      {
        character: "这条裤子太长了。",
        pinyin: "Zhè tiáo kùzi tài cháng le.",
        meaning: "These pants are too long.",
      },
    ],
  },
  {
    id: 813,
    character: "衬衫",
    pinyin: "chènshān",
    meaning: "shirt",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=衬衫",
    examples: [
      {
        character: "我喜欢穿白色衬衫。",
        pinyin: "Wǒ xǐhuān chuān báisè chènshān.",
        meaning: "I like to wear white shirts.",
      },
      {
        character: "这件衬衫很合身。",
        pinyin: "Zhè jiàn chènshān hěn héshēn.",
        meaning: "This shirt fits well.",
      },
    ],
  },
  {
    id: 814,
    character: "T恤",
    pinyin: "T xù",
    meaning: "T-shirt",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=T恤",
    examples: [
      {
        character: "夏天我喜欢穿T恤。",
        pinyin: "Xiàtiān wǒ xǐhuān chuān T xù.",
        meaning: "I like to wear T-shirts in summer.",
      },
      {
        character: "这件T恤很舒服。",
        pinyin: "Zhè jiàn T xù hěn shūfu.",
        meaning: "This T-shirt is very comfortable.",
      },
    ],
  },
  {
    id: 815,
    character: "裙子",
    pinyin: "qúnzi",
    meaning: "skirt",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=裙子",
    examples: [
      {
        character: "她穿着一条红裙子。",
        pinyin: "Tā chuān zhe yì tiáo hóng qúnzi.",
        meaning: "She is wearing a red skirt.",
      },
      {
        character: "这条裙子很漂亮。",
        pinyin: "Zhè tiáo qúnzi hěn piàoliang.",
        meaning: "This skirt is very beautiful.",
      },
    ],
  },
  {
    id: 816,
    character: "外套",
    pinyin: "wàitào",
    meaning: "coat, jacket",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=外套",
    examples: [
      {
        character: "天冷了，你需要穿外套。",
        pinyin: "Tiān lěng le, nǐ xūyào chuān wàitào.",
        meaning: "It's cold, you need to wear a coat.",
      },
      {
        character: "这件外套很暖和。",
        pinyin: "Zhè jiàn wàitào hěn nuǎnhuo.",
        meaning: "This coat is very warm.",
      },
    ],
  },
  {
    id: 817,
    character: "鞋",
    pinyin: "xié",
    meaning: "shoes",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=鞋",
    examples: [
      {
        character: "我需要一双新鞋。",
        pinyin: "Wǒ xūyào yì shuāng xīn xié.",
        meaning: "I need a new pair of shoes.",
      },
      {
        character: "这双鞋很舒服。",
        pinyin: "Zhè shuāng xié hěn shūfu.",
        meaning: "These shoes are very comfortable.",
      },
    ],
  },
  {
    id: 818,
    character: "袜子",
    pinyin: "wàzi",
    meaning: "socks",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=袜子",
    examples: [
      {
        character: "我需要买袜子。",
        pinyin: "Wǒ xūyào mǎi wàzi.",
        meaning: "I need to buy socks.",
      },
      {
        character: "这双袜子很暖和。",
        pinyin: "Zhè shuāng wàzi hěn nuǎnhuo.",
        meaning: "These socks are very warm.",
      },
    ],
  },
  {
    id: 819,
    character: "帽子",
    pinyin: "màozi",
    meaning: "hat",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=帽子",
    examples: [
      {
        character: "夏天我喜欢戴帽子。",
        pinyin: "Xiàtiān wǒ xǐhuān dài màozi.",
        meaning: "I like to wear a hat in summer.",
      },
      {
        character: "这顶帽子很漂亮。",
        pinyin: "Zhè dǐng màozi hěn piàoliang.",
        meaning: "This hat is very beautiful.",
      },
    ],
  },
  {
    id: 820,
    character: "眼镜",
    pinyin: "yǎnjìng",
    meaning: "glasses",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=眼镜",
    examples: [
      {
        character: "我需要戴眼镜。",
        pinyin: "Wǒ xūyào dài yǎnjìng.",
        meaning: "I need to wear glasses.",
      },
      {
        character: "这副眼镜很贵。",
        pinyin: "Zhè fù yǎnjìng hěn guì.",
        meaning: "These glasses are very expensive.",
      },
    ],
  },

  // More clothing items
  {
    id: 821,
    character: "手表",
    pinyin: "shǒubiǎo",
    meaning: "watch",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=手表",
    examples: [
      {
        character: "这是一块很贵的手表。",
        pinyin: "Zhè shì yí kuài hěn guì de shǒubiǎo.",
        meaning: "This is a very expensive watch.",
      },
      {
        character: "我的手表坏了。",
        pinyin: "Wǒ de shǒubiǎo huài le.",
        meaning: "My watch is broken.",
      },
    ],
  },
  {
    id: 822,
    character: "围巾",
    pinyin: "wéijīn",
    meaning: "scarf",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=围巾",
    examples: [
      {
        character: "冬天我喜欢戴围巾。",
        pinyin: "Dōngtiān wǒ xǐhuān dài wéijīn.",
        meaning: "I like to wear a scarf in winter.",
      },
      {
        character: "这条围巾很漂亮。",
        pinyin: "Zhè tiáo wéijīn hěn piàoliang.",
        meaning: "This scarf is very beautiful.",
      },
    ],
  },
  {
    id: 823,
    character: "手套",
    pinyin: "shǒutào",
    meaning: "gloves",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=手套",
    examples: [
      {
        character: "冬天我需要戴手套。",
        pinyin: "Dōngtiān wǒ xūyào dài shǒutào.",
        meaning: "I need to wear gloves in winter.",
      },
      {
        character: "这双手套很暖和。",
        pinyin: "Zhè shuāng shǒutào hěn nuǎnhuo.",
        meaning: "These gloves are very warm.",
      },
    ],
  },
  {
    id: 824,
    character: "皮带",
    pinyin: "pídài",
    meaning: "belt",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=皮带",
    examples: [
      {
        character: "我需要一条新皮带。",
        pinyin: "Wǒ xūyào yì tiáo xīn pídài.",
        meaning: "I need a new belt.",
      },
      {
        character: "这条皮带很贵。",
        pinyin: "Zhè tiáo pídài hěn guì.",
        meaning: "This belt is very expensive.",
      },
    ],
  },
  {
    id: 825,
    character: "珠宝",
    pinyin: "zhūbǎo",
    meaning: "jewelry",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=珠宝",
    examples: [
      {
        character: "这家商店卖珠宝。",
        pinyin: "Zhè jiā shāngdiàn mài zhūbǎo.",
        meaning: "This store sells jewelry.",
      },
      {
        character: "这件珠宝很漂亮。",
        pinyin: "Zhè jiàn zhūbǎo hěn piàoliang.",
        meaning: "This piece of jewelry is very beautiful.",
      },
    ],
  },

  // Shopping terms
  {
    id: 826,
    character: "价格",
    pinyin: "jiàgé",
    meaning: "price",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=价格",
    examples: [
      {
        character: "这个东西的价格很高。",
        pinyin: "Zhège dōngxi de jiàgé hěn gāo.",
        meaning: "The price of this thing is very high.",
      },
      {
        character: "价格便宜吗？",
        pinyin: "Jiàgé piányi ma?",
        meaning: "Is the price cheap?",
      },
    ],
  },
  {
    id: 827,
    character: "打折",
    pinyin: "dǎzhé",
    meaning: "discount, to give a discount",
    partOfSpeech: "v/n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=打折",
    examples: [
      {
        character: "这个商品在打折。",
        pinyin: "Zhège shāngpǐn zài dǎzhé.",
        meaning: "This product is on sale.",
      },
      {
        character: "打折的时候我会买很多东西。",
        pinyin: "Dǎzhé de shíhou wǒ huì mǎi hěn duō dōngxi.",
        meaning: "I will buy many things when there are discounts.",
      },
    ],
  },
  {
    id: 828,
    character: "试穿",
    pinyin: "shìchuān",
    meaning: "to try on (clothes)",
    partOfSpeech: "v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=试穿",
    examples: [
      {
        character: "我想试穿这件衣服。",
        pinyin: "Wǒ xiǎng shìchuān zhè jiàn yīfu.",
        meaning: "I want to try on this piece of clothing.",
      },
      {
        character: "试衣间在哪里？",
        pinyin: "Shì yī jiān zài nǎlǐ?",
        meaning: "Where is the fitting room?",
      },
    ],
  },
  {
    id: 829,
    character: "退货",
    pinyin: "tuìhuò",
    meaning: "to return goods",
    partOfSpeech: "v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=退货",
    examples: [
      {
        character: "我想退货。",
        pinyin: "Wǒ xiǎng tuìhuò.",
        meaning: "I want to return this item.",
      },
      {
        character: "这个商店可以退货吗？",
        pinyin: "Zhège shāngdiàn kěyǐ tuìhuò ma?",
        meaning: "Can I return items at this store?",
      },
    ],
  },
  {
    id: 830,
    character: "购物袋",
    pinyin: "gòuwù dài",
    meaning: "shopping bag",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=购物袋",
    examples: [
      {
        character: "请给我一个购物袋。",
        pinyin: "Qǐng gěi wǒ yí gè gòuwù dài.",
        meaning: "Please give me a shopping bag.",
      },
      {
        character: "我的购物袋满了。",
        pinyin: "Wǒ de gòuwù dài mǎn le.",
        meaning: "My shopping bag is full.",
      },
    ],
  },

  // Payment methods
  {
    id: 831,
    character: "现金",
    pinyin: "xiànjīn",
    meaning: "cash",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=现金",
    examples: [
      {
        character: "我用现金付款。",
        pinyin: "Wǒ yòng xiànjīn fùkuǎn.",
        meaning: "I pay with cash.",
      },
      {
        character: "你有现金吗？",
        pinyin: "Nǐ yǒu xiànjīn ma?",
        meaning: "Do you have cash?",
      },
    ],
  },
  {
    id: 832,
    character: "信用卡",
    pinyin: "xìnyòngkǎ",
    meaning: "credit card",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=信用卡",
    examples: [
      {
        character: "我用信用卡付款。",
        pinyin: "Wǒ yòng xìnyòngkǎ fùkuǎn.",
        meaning: "I pay with a credit card.",
      },
      {
        character: "这家店接受信用卡吗？",
        pinyin: "Zhè jiā diàn jiēshòu xìnyòngkǎ ma?",
        meaning: "Does this store accept credit cards?",
      },
    ],
  },
  {
    id: 833,
    character: "支付宝",
    pinyin: "Zhīfùbǎo",
    meaning: "Alipay",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=支付宝",
    examples: [
      {
        character: "我用支付宝付款。",
        pinyin: "Wǒ yòng Zhīfùbǎo fùkuǎn.",
        meaning: "I pay with Alipay.",
      },
      {
        character: "这家店接受支付宝吗？",
        pinyin: "Zhè jiā diàn jiēshòu Zhīfùbǎo ma?",
        meaning: "Does this store accept Alipay?",
      },
    ],
  },
  {
    id: 834,
    character: "微信支付",
    pinyin: "Wēixìn zhīfù",
    meaning: "WeChat Pay",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=微信支付",
    examples: [
      {
        character: "我用微信支付付款。",
        pinyin: "Wǒ yòng Wēixìn zhīfù fùkuǎn.",
        meaning: "I pay with WeChat Pay.",
      },
      {
        character: "这家店接受微信支付吗？",
        pinyin: "Zhè jiā diàn jiēshòu Wēixìn zhīfù ma?",
        meaning: "Does this store accept WeChat Pay?",
      },
    ],
  },
  {
    id: 835,
    character: "发票",
    pinyin: "fāpiào",
    meaning: "receipt, invoice",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=发票",
    examples: [
      {
        character: "请给我发票。",
        pinyin: "Qǐng gěi wǒ fāpiào.",
        meaning: "Please give me a receipt.",
      },
      {
        character: "我需要发票报销。",
        pinyin: "Wǒ xūyào fāpiào bàoxiāo.",
        meaning: "I need a receipt for reimbursement.",
      },
    ],
  },

  // Online shopping
  {
    id: 836,
    character: "网上购物",
    pinyin: "wǎngshàng gòuwù",
    meaning: "online shopping",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=网上购物",
    examples: [
      {
        character: "我喜欢网上购物。",
        pinyin: "Wǒ xǐhuān wǎngshàng gòuwù.",
        meaning: "I like online shopping.",
      },
      {
        character: "网上购物很方便。",
        pinyin: "Wǎngshàng gòuwù hěn fāngbiàn.",
        meaning: "Online shopping is very convenient.",
      },
    ],
  },
  {
    id: 837,
    character: "快递",
    pinyin: "kuàidì",
    meaning: "express delivery",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=快递",
    examples: [
      {
        character: "我的快递到了吗？",
        pinyin: "Wǒ de kuàidì dào le ma?",
        meaning: "Has my express delivery arrived?",
      },
      {
        character: "快递很快。",
        pinyin: "Kuàidì hěn kuài.",
        meaning: "Express delivery is very fast.",
      },
    ],
  },
  {
    id: 838,
    character: "购物车",
    pinyin: "gòuwù chē",
    meaning: "shopping cart",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=购物车",
    examples: [
      {
        character: "我把这个商品放入购物车。",
        pinyin: "Wǒ bǎ zhège shāngpǐn fàng rù gòuwù chē.",
        meaning: "I put this product in the shopping cart.",
      },
      {
        character: "我的购物车里有很多东西。",
        pinyin: "Wǒ de gòuwù chē lǐ yǒu hěn duō dōngxi.",
        meaning: "There are many things in my shopping cart.",
      },
    ],
  },
  {
    id: 839,
    character: "订单",
    pinyin: "dìngdān",
    meaning: "order",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=订单",
    examples: [
      {
        character: "我的订单已经发货了。",
        pinyin: "Wǒ de dìngdān yǐjīng fāhuò le.",
        meaning: "My order has been shipped.",
      },
      {
        character: "我想查询我的订单。",
        pinyin: "Wǒ xiǎng cháxún wǒ de dìngdān.",
        meaning: "I want to check my order.",
      },
    ],
  },
  {
    id: 840,
    character: "购物中心",
    pinyin: "gòuwù zhōngxīn",
    meaning: "shopping center",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=购物中心",
    examples: [
      {
        character: "这个购物中心很大。",
        pinyin: "Zhège gòuwù zhōngxīn hěn dà.",
        meaning: "This shopping center is very big.",
      },
      {
        character: "我们去购物中心吧。",
        pinyin: "Wǒmen qù gòuwù zhōngxīn ba.",
        meaning: "Let's go to the shopping center.",
      },
    ],
  },
  // Additional shopping words
  {
    id: 841,
    character: "促销",
    pinyin: "cùxiāo",
    meaning: "promotion, sale",
    partOfSpeech: "n/v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=促销",
    examples: [
      {
        character: "今天有促销活动。",
        pinyin: "Jīntiān yǒu cùxiāo huódòng.",
        meaning: "There is a promotion today.",
      },
      {
        character: "促销价格很便宜。",
        pinyin: "Cùxiāo jiàgé hěn piányi.",
        meaning: "The promotional price is very cheap.",
      },
    ],
  },
  {
    id: 842,
    character: "折扣",
    pinyin: "zhékòu",
    meaning: "discount",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=折扣",
    examples: [
      {
        character: "这件衣服有折扣。",
        pinyin: "Zhè jiàn yīfu yǒu zhékòu.",
        meaning: "This piece of clothing has a discount.",
      },
      {
        character: "八折优惠。",
        pinyin: "Bā zhé yōuhuì.",
        meaning: "20% discount.",
      },
    ],
  },
  {
    id: 843,
    character: "会员",
    pinyin: "huìyuán",
    meaning: "member",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=会员",
    examples: [
      {
        character: "我是这家店的会员。",
        pinyin: "Wǒ shì zhè jiā diàn de huìyuán.",
        meaning: "I am a member of this store.",
      },
      {
        character: "会员有优惠。",
        pinyin: "Huìyuán yǒu yōuhuì.",
        meaning: "Members have discounts.",
      },
    ],
  },
  {
    id: 844,
    character: "积分",
    pinyin: "jīfēn",
    meaning: "points",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=积分",
    examples: [
      {
        character: "我有很多积分。",
        pinyin: "Wǒ yǒu hěn duō jīfēn.",
        meaning: "I have many points.",
      },
      {
        character: "用积分换礼品。",
        pinyin: "Yòng jīfēn huàn lǐpǐn.",
        meaning: "Exchange points for gifts.",
      },
    ],
  },
  {
    id: 845,
    character: "退货",
    pinyin: "tuìhuò",
    meaning: "return goods",
    partOfSpeech: "v/n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=退货",
    examples: [
      {
        character: "我想退货。",
        pinyin: "Wǒ xiǎng tuìhuò.",
        meaning: "I want to return the goods.",
      },
      {
        character: "退货政策。",
        pinyin: "Tuìhuò zhèngcè.",
        meaning: "Return policy.",
      },
    ],
  },
  {
    id: 846,
    character: "换货",
    pinyin: "huànhuò",
    meaning: "exchange goods",
    partOfSpeech: "v/n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=换货",
    examples: [
      {
        character: "我想换货。",
        pinyin: "Wǒ xiǎng huànhuò.",
        meaning: "I want to exchange the goods.",
      },
      {
        character: "可以换货吗？",
        pinyin: "Kěyǐ huànhuò ma?",
        meaning: "Can I exchange it?",
      },
    ],
  },
  {
    id: 847,
    character: "保修",
    pinyin: "bǎoxiū",
    meaning: "warranty",
    partOfSpeech: "n/v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=保修",
    examples: [
      {
        character: "这个产品有保修。",
        pinyin: "Zhège chǎnpǐn yǒu bǎoxiū.",
        meaning: "This product has a warranty.",
      },
      {
        character: "保修期是一年。",
        pinyin: "Bǎoxiū qī shì yì nián.",
        meaning: "The warranty period is one year.",
      },
    ],
  },
  {
    id: 848,
    character: "配送",
    pinyin: "pèisòng",
    meaning: "delivery",
    partOfSpeech: "n/v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=配送",
    examples: [
      {
        character: "免费配送。",
        pinyin: "Miǎnfèi pèisòng.",
        meaning: "Free delivery.",
      },
      {
        character: "配送时间。",
        pinyin: "Pèisòng shíjiān.",
        meaning: "Delivery time.",
      },
    ],
  },
  {
    id: 849,
    character: "包装",
    pinyin: "bāozhuāng",
    meaning: "packaging",
    partOfSpeech: "n/v",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=包装",
    examples: [
      {
        character: "包装很精美。",
        pinyin: "Bāozhuāng hěn jīngměi.",
        meaning: "The packaging is very beautiful.",
      },
      {
        character: "请帮我包装。",
        pinyin: "Qǐng bāng wǒ bāozhuāng.",
        meaning: "Please help me package it.",
      },
    ],
  },
  {
    id: 850,
    character: "库存",
    pinyin: "kùcún",
    meaning: "inventory, stock",
    partOfSpeech: "n",
    category: "shopping",
    image: "https://placehold.co/100x100/f0f5ff/2f54eb?text=库存",
    examples: [
      {
        character: "库存不足。",
        pinyin: "Kùcún bùzú.",
        meaning: "Insufficient stock.",
      },
      {
        character: "检查库存。",
        pinyin: "Jiǎnchá kùcún.",
        meaning: "Check inventory.",
      },
    ],
  },
];

export default shoppingWords;
