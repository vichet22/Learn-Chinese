import React, { useState } from "react";
import "../style/Quizzes.css";
import Adsterra from "./adsterra";

const quizData = [
  // Original questions
  {
    question: "What is the Chinese word for 'hello'?",
    options: ["Ni hao", "Zai jian", "Xie xie", "Dui bu qi"],
    answer: "Ni hao",
  },
  {
    question: "Which Chinese character means 'person'?",
    options: ["人", "木", "水", "火"],
    answer: "人",
  },
  {
    question: "How do you say 'thank you' in Chinese?",
    options: ["Zai jian", "Ni hao", "Xie xie", "Bu keqi"],
    answer: "Xie xie",
  },
  {
    question: "What is the Chinese word for 'goodbye'?",
    options: ["Zai jian", "Ni hao", "Xie xie", "Dui bu qi"],
    answer: "Zai jian",
  },
  {
    question: "Which Chinese character means 'water'?",
    options: ["人", "木", "水", "火"],
    answer: "水",
  },
  {
    question: "How do you say 'sorry' in Chinese?",
    options: ["Zai jian", "Ni hao", "Xie xie", "Dui bu qi"],
    answer: "Dui bu qi",
  },
  {
    question: "What is the Chinese word for 'yes'?",
    options: ["Shi", "Bu", "Hao", "Wo"],
    answer: "Shi",
  },
  {
    question: "What is the Chinese word for 'no'?",
    options: ["Shi", "Bu", "Hao", "Wo"],
    answer: "Bu",
  },
  {
    question: "How do you say 'I' or 'me' in Chinese?",
    options: ["Wo", "Ni", "Ta", "Women"],
    answer: "Wo",
  },
  {
    question: "How do you say 'you' in Chinese?",
    options: ["Wo", "Ni", "Ta", "Women"],
    answer: "Ni",
  },
  {
    question: "Which Chinese character means 'fire'?",
    options: ["人", "木", "水", "火"],
    answer: "火",
  },
  {
    question: "Which Chinese character means 'wood' or 'tree'?",
    options: ["人", "木", "水", "火"],
    answer: "木",
  },
  {
    question: "How do you say 'good' in Chinese?",
    options: ["Hao", "Bu", "Shi", "Wo"],
    answer: "Hao",
  },
  {
    question: "What is the Chinese word for 'delicious'?",
    options: ["Hao chi", "Hao kan", "Hao ting", "Hao wan"],
    answer: "Hao chi",
  },
  {
    question: "How do you say 'beautiful' in Chinese?",
    options: ["Hao chi", "Hao kan", "Hao ting", "Hao wan"],
    answer: "Hao kan",
  },
  {
    question: "What is the Chinese word for 'one'?",
    options: ["Yi", "Er", "San", "Si"],
    answer: "Yi",
  },
  {
    question: "What is the Chinese word for 'two'?",
    options: ["Yi", "Er", "San", "Si"],
    answer: "Er",
  },
  {
    question: "What is the Chinese word for 'three'?",
    options: ["Yi", "Er", "San", "Si"],
    answer: "San",
  },
  {
    question: "What is the Chinese word for 'four'?",
    options: ["Yi", "Er", "San", "Si"],
    answer: "Si",
  },
  {
    question: "How do you say 'he/him' in Chinese?",
    options: ["Wo", "Ni", "Ta", "Women"],
    answer: "Ta",
  },
  {
    question: "How do you say 'we' in Chinese?",
    options: ["Wo", "Ni", "Ta", "Women"],
    answer: "Women",
  },
  {
    question: "What is the Chinese word for 'eat'?",
    options: ["Chi", "He", "Kan", "Ting"],
    answer: "Chi",
  },
  {
    question: "What is the Chinese word for 'drink'?",
    options: ["Chi", "He", "Kan", "Ting"],
    answer: "He",
  },
  {
    question: "How do you say 'to look' or 'to see' in Chinese?",
    options: ["Chi", "He", "Kan", "Ting"],
    answer: "Kan",
  },
  {
    question: "How do you say 'to listen' in Chinese?",
    options: ["Chi", "He", "Kan", "Ting"],
    answer: "Ting",
  },
  {
    question: "What is the Chinese word for 'big'?",
    options: ["Da", "Xiao", "Gao", "Di"],
    answer: "Da",
  },
  {
    question: "What is the Chinese word for 'small'?",
    options: ["Da", "Xiao", "Gao", "Di"],
    answer: "Xiao",
  },
  {
    question: "How do you say 'tall' in Chinese?",
    options: ["Da", "Xiao", "Gao", "Di"],
    answer: "Gao",
  },

  // New questions - Basic Words
  {
    question: "What does '谢谢' mean in English?",
    options: ["Hello", "Thank you", "Goodbye", "Sorry"],
    answer: "Thank you",
  },
  {
    question: "Which character means 'to speak'?",
    options: ["说", "看", "听", "写"],
    answer: "说",
  },
  {
    question: "What is the correct pinyin for '学习'?",
    options: ["xuéxí", "xué", "shū", "dú"],
    answer: "xuéxí",
  },
  {
    question: "Which word means 'book' in Chinese?",
    options: ["书", "笔", "桌子", "椅子"],
    answer: "书",
  },
  {
    question: "What does '朋友' mean?",
    options: ["Friend", "Family", "Teacher", "Student"],
    answer: "Friend",
  },

  // Food Words
  {
    question: "What is '米饭' in English?",
    options: ["Rice", "Noodles", "Bread", "Meat"],
    answer: "Rice",
  },
  {
    question: "Which character represents 'tea'?",
    options: ["茶", "咖啡", "水", "牛奶"],
    answer: "茶",
  },
  {
    question: "What does '好吃' mean?",
    options: ["Delicious", "Spicy", "Sweet", "Sour"],
    answer: "Delicious",
  },
  {
    question: "Which is NOT a Chinese vegetable?",
    options: [
      "Avocado",
      "白菜 (bok choy)",
      "茄子 (eggplant)",
      "青椒 (green pepper)",
    ],
    answer: "Avocado",
  },
  {
    question: "What is '筷子' in English?",
    options: ["Chopsticks", "Spoon", "Fork", "Knife"],
    answer: "Chopsticks",
  },

  // Daily Life Words
  {
    question: "What does '睡觉' mean?",
    options: ["To sleep", "To eat", "To work", "To study"],
    answer: "To sleep",
  },
  {
    question: "Which word means 'telephone'?",
    options: ["电话", "电视", "电脑", "手机"],
    answer: "电话",
  },
  {
    question: "What is '时间' in English?",
    options: ["Time", "Day", "Week", "Month"],
    answer: "Time",
  },
  {
    question: "Which character means 'to buy'?",
    options: ["买", "卖", "付", "收"],
    answer: "买",
  },
  {
    question: "What does '工作' mean?",
    options: ["Work", "Play", "Rest", "Exercise"],
    answer: "Work",
  },

  // Travel Words
  {
    question: "What is '飞机' in English?",
    options: ["Airplane", "Train", "Bus", "Car"],
    answer: "Airplane",
  },
  {
    question: "Which word means 'hotel'?",
    options: ["酒店", "餐厅", "公园", "医院"],
    answer: "酒店",
  },
  {
    question: "What does '护照' mean?",
    options: ["Passport", "Ticket", "Map", "Luggage"],
    answer: "Passport",
  },
  {
    question: "Which is the correct translation for 'airport'?",
    options: ["机场", "火车站", "地铁站", "公交站"],
    answer: "机场",
  },
  {
    question: "What does '旅游' mean?",
    options: ["Travel", "Work", "Study", "Live"],
    answer: "Travel",
  },

  // Education Words
  {
    question: "What is '老师' in English?",
    options: ["Teacher", "Student", "Friend", "Parent"],
    answer: "Teacher",
  },
  {
    question: "Which word means 'homework'?",
    options: ["作业", "考试", "课程", "学校"],
    answer: "作业",
  },
  {
    question: "What does '大学' mean?",
    options: [
      "University",
      "High school",
      "Middle school",
      "Elementary school",
    ],
    answer: "University",
  },
  {
    question: "Which character represents 'to study'?",
    options: ["学习", "教", "读", "写"],
    answer: "学习",
  },
  {
    question: "What is '考试' in English?",
    options: ["Exam", "Class", "Lecture", "Homework"],
    answer: "Exam",
  },

  // Health Words
  {
    question: "What does '医生' mean?",
    options: ["Doctor", "Nurse", "Patient", "Hospital"],
    answer: "Doctor",
  },
  {
    question: "Which word means 'medicine'?",
    options: ["药", "病", "疼", "健康"],
    answer: "药",
  },
  {
    question: "What is '头疼' in English?",
    options: ["Headache", "Stomachache", "Fever", "Cold"],
    answer: "Headache",
  },
  {
    question: "Which body part is '眼睛'?",
    options: ["Eyes", "Ears", "Nose", "Mouth"],
    answer: "Eyes",
  },
  {
    question: "What does '生病' mean?",
    options: ["To be sick", "To be healthy", "To be tired", "To be hungry"],
    answer: "To be sick",
  },

  // Family Words
  {
    question: "What is '爸爸' in English?",
    options: ["Father", "Mother", "Brother", "Sister"],
    answer: "Father",
  },
  {
    question: "Which word means 'mother'?",
    options: ["妈妈", "爸爸", "哥哥", "姐姐"],
    answer: "妈妈",
  },
  {
    question: "What does '孩子' mean?",
    options: ["Child", "Parent", "Grandparent", "Sibling"],
    answer: "Child",
  },
  {
    question: "Which is the correct translation for 'wife'?",
    options: ["妻子", "丈夫", "儿子", "女儿"],
    answer: "妻子",
  },
  {
    question: "What does '家庭' mean?",
    options: ["Family", "House", "Home", "Apartment"],
    answer: "Family",
  },

  // Nature Words
  {
    question: "What is '天气' in English?",
    options: ["Weather", "Sky", "Cloud", "Wind"],
    answer: "Weather",
  },
  {
    question: "Which word means 'mountain'?",
    options: ["山", "河", "海", "湖"],
    answer: "山",
  },
  {
    question: "What does '下雨' mean?",
    options: ["To rain", "To snow", "To be sunny", "To be cloudy"],
    answer: "To rain",
  },
  {
    question: "Which animal is '猫'?",
    options: ["Cat", "Dog", "Bird", "Fish"],
    answer: "Cat",
  },
  {
    question: "What does '树' mean?",
    options: ["Tree", "Flower", "Grass", "Leaf"],
    answer: "Tree",
  },

  // Shopping Words
  {
    question: "What is '商店' in English?",
    options: ["Store", "Market", "Mall", "Shop"],
    answer: "Store",
  },
  {
    question: "Which word means 'money'?",
    options: ["钱", "价格", "便宜", "贵"],
    answer: "钱",
  },
  {
    question: "What does '便宜' mean?",
    options: ["Cheap", "Expensive", "Sale", "Discount"],
    answer: "Cheap",
  },
  {
    question: "Which is the correct translation for 'credit card'?",
    options: ["信用卡", "现金", "支票", "钱包"],
    answer: "信用卡",
  },
  {
    question: "What does '买东西' mean?",
    options: ["To shop", "To sell", "To pay", "To return"],
    answer: "To shop",
  },

  // Numbers & Colors
  {
    question: "What is '红色' in English?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Red",
  },
  {
    question: "Which word means 'blue'?",
    options: ["蓝色", "红色", "黄色", "绿色"],
    answer: "蓝色",
  },
  {
    question: "What does '十' mean?",
    options: ["Ten", "Hundred", "Thousand", "Million"],
    answer: "Ten",
  },
  {
    question: "Which is the correct translation for 'black'?",
    options: ["黑色", "白色", "灰色", "棕色"],
    answer: "黑色",
  },
  {
    question: "What does '百分之五十' mean?",
    options: ["50%", "5%", "500%", "15%"],
    answer: "50%",
  },

  // Entertainment Words
  {
    question: "What is '电影' in English?",
    options: ["Movie", "Television", "Radio", "Internet"],
    answer: "Movie",
  },
  {
    question: "Which word means 'music'?",
    options: ["音乐", "歌曲", "舞蹈", "游戏"],
    answer: "音乐",
  },
  {
    question: "What does '唱歌' mean?",
    options: ["To sing", "To dance", "To play", "To watch"],
    answer: "To sing",
  },
  {
    question: "Which is the correct translation for 'book'?",
    options: ["书", "报纸", "杂志", "文章"],
    answer: "书",
  },
  {
    question: "What does '游戏' mean?",
    options: ["Game", "Sport", "Hobby", "Activity"],
    answer: "Game",
  },

  // Grammar Patterns
  {
    question: "Which is the correct word order in Chinese?",
    options: [
      "Subject-Verb-Object",
      "Subject-Object-Verb",
      "Verb-Subject-Object",
      "Object-Subject-Verb",
    ],
    answer: "Subject-Verb-Object",
  },
  {
    question: "How do you form a question with '吗'?",
    options: [
      "Add 吗 at the end of a statement",
      "Add 吗 at the beginning of a statement",
      "Add 吗 before the verb",
      "Add 吗 after the subject",
    ],
    answer: "Add 吗 at the end of a statement",
  },
  {
    question: "What does the particle '了' often indicate?",
    options: [
      "Completed action",
      "Future action",
      "Ongoing action",
      "Habitual action",
    ],
    answer: "Completed action",
  },
  {
    question: "Which structure is used to express 'want to do something'?",
    options: ["想 + verb", "要 + noun", "会 + verb", "能 + noun"],
    answer: "想 + verb",
  },
  {
    question: "How do you express 'can' (ability) in Chinese?",
    options: ["会", "能", "可以", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which is the correct way to form a negative sentence?",
    options: [
      "Add 不 before the verb",
      "Add 不 after the verb",
      "Add 不 at the end of the sentence",
      "Add 不 at the beginning of the sentence",
    ],
    answer: "Add 不 before the verb",
  },
  {
    question: "What is the function of '的' in '我的书'?",
    options: [
      "Shows possession",
      "Indicates past tense",
      "Forms a question",
      "Connects adjectives",
    ],
    answer: "Shows possession",
  },
  {
    question:
      "Which structure is used to express 'in the process of doing something'?",
    options: ["正在 + verb", "已经 + verb", "要 + verb", "刚 + verb"],
    answer: "正在 + verb",
  },
  {
    question: "How do you express 'too much' in Chinese?",
    options: [
      "太 + adjective + 了",
      "很 + adjective",
      "非常 + adjective",
      "真 + adjective",
    ],
    answer: "太 + adjective + 了",
  },
  {
    question: "Which is the correct way to use the '是...的' structure?",
    options: [
      "To emphasize when, where, how something happened",
      "To negate a statement",
      "To ask a question",
      "To express a future action",
    ],
    answer: "To emphasize when, where, how something happened",
  },

  // Measure Words
  {
    question: "Which measure word is used for books?",
    options: ["本", "个", "张", "只"],
    answer: "本",
  },
  {
    question: "What is the correct measure word for people?",
    options: ["个", "位", "Both A and B", "Neither A nor B"],
    answer: "Both A and B",
  },
  {
    question: "Which measure word is used for flat objects like paper?",
    options: ["张", "个", "只", "条"],
    answer: "张",
  },
  {
    question: "What is the correct measure word for animals?",
    options: ["只", "个", "条", "头"],
    answer: "只",
  },
  {
    question: "Which measure word is used for long, thin objects like rivers?",
    options: ["条", "根", "张", "个"],
    answer: "条",
  },

  // Time Expressions
  {
    question: "How do you say 'tomorrow' in Chinese?",
    options: ["明天", "昨天", "今天", "后天"],
    answer: "明天",
  },
  {
    question: "Which is the correct order for dates in Chinese?",
    options: [
      "Year-Month-Day",
      "Day-Month-Year",
      "Month-Day-Year",
      "Year-Day-Month",
    ],
    answer: "Year-Month-Day",
  },
  {
    question: "What does '星期三' mean?",
    options: ["Wednesday", "Thursday", "Tuesday", "Sunday"],
    answer: "Wednesday",
  },
  {
    question: "How do you say 'last year' in Chinese?",
    options: ["去年", "今年", "明年", "后年"],
    answer: "去年",
  },
  {
    question: "Which expression means 'weekend' in Chinese?",
    options: ["周末", "工作日", "早上", "晚上"],
    answer: "周末",
  },

  // Directional Words
  {
    question: "What does '上' mean in terms of direction?",
    options: ["Up", "Down", "Left", "Right"],
    answer: "Up",
  },
  {
    question: "Which word means 'inside'?",
    options: ["里", "外", "前", "后"],
    answer: "里",
  },
  {
    question: "What does '北' mean?",
    options: ["North", "South", "East", "West"],
    answer: "North",
  },
  {
    question: "Which is the correct translation for 'behind'?",
    options: ["后面", "前面", "上面", "下面"],
    answer: "后面",
  },
  {
    question: "What does '左边' mean?",
    options: ["Left side", "Right side", "Front side", "Back side"],
    answer: "Left side",
  },

  // Technology Words
  {
    question: "What is '互联网' in English?",
    options: ["Internet", "Computer", "Website", "Software"],
    answer: "Internet",
  },
  {
    question: "Which word means 'smartphone'?",
    options: ["智能手机", "电脑", "平板", "电视"],
    answer: "智能手机",
  },
  {
    question: "What does '软件' mean?",
    options: ["Software", "Hardware", "Website", "App"],
    answer: "Software",
  },
  {
    question: "Which is the correct translation for 'social media'?",
    options: ["社交媒体", "电子邮件", "短信", "视频通话"],
    answer: "社交媒体",
  },
  {
    question: "What does '下载' mean?",
    options: ["Download", "Upload", "Install", "Delete"],
    answer: "Download",
  },

  // Business Words
  {
    question: "What is '公司' in English?",
    options: ["Company", "Store", "Factory", "Office"],
    answer: "Company",
  },
  {
    question: "Which word means 'meeting'?",
    options: ["会议", "工作", "办公室", "老板"],
    answer: "会议",
  },
  {
    question: "What does '经理' mean?",
    options: ["Manager", "Boss", "Employee", "Customer"],
    answer: "Manager",
  },
  {
    question: "Which is the correct translation for 'business card'?",
    options: ["名片", "信用卡", "身份证", "护照"],
    answer: "名片",
  },
  {
    question: "What does '合作' mean?",
    options: ["Cooperation", "Competition", "Negotiation", "Investment"],
    answer: "Cooperation",
  },

  // Cultural Concepts
  {
    question: "What is '春节' in English?",
    options: [
      "Spring Festival (Chinese New Year)",
      "Mid-Autumn Festival",
      "Dragon Boat Festival",
      "Lantern Festival",
    ],
    answer: "Spring Festival (Chinese New Year)",
  },
  {
    question: "Which concept is associated with '面子' (miànzi)?",
    options: ["Face/reputation", "Happiness", "Success", "Wealth"],
    answer: "Face/reputation",
  },
  {
    question: "What does '功夫' traditionally refer to?",
    options: ["Martial arts", "Cooking", "Painting", "Music"],
    answer: "Martial arts",
  },
  {
    question: "Which is a traditional Chinese art form?",
    options: [
      "书法 (calligraphy)",
      "摄影 (photography)",
      "电影 (film)",
      "动画 (animation)",
    ],
    answer: "书法 (calligraphy)",
  },
  {
    question: "What does '茶道' mean?",
    options: ["Tea ceremony", "Tea shop", "Tea variety", "Tea farming"],
    answer: "Tea ceremony",
  },

  // Idioms and Expressions
  {
    question: "What does the idiom '马马虎虎' mean?",
    options: ["So-so/passable", "Excellent", "Terrible", "Interesting"],
    answer: "So-so/passable",
  },
  {
    question: "Which expression is used to wish someone good luck?",
    options: ["加油", "没关系", "不客气", "对不起"],
    answer: "加油",
  },
  {
    question: "What does '慢走' mean when said to someone leaving?",
    options: [
      "Take care/goodbye",
      "Walk slowly",
      "Come back soon",
      "See you tomorrow",
    ],
    answer: "Take care/goodbye",
  },
  {
    question:
      "Which idiom means 'a journey of a thousand miles begins with a single step'?",
    options: ["千里之行，始于足下", "一石二鸟", "时间就是金钱", "入乡随俗"],
    answer: "千里之行，始于足下",
  },
  {
    question: "What does '不好意思' commonly express?",
    options: ["Embarrassment/excuse me", "Happiness", "Anger", "Surprise"],
    answer: "Embarrassment/excuse me",
  },

  // Advanced Vocabulary
  {
    question: "What is '环境' in English?",
    options: ["Environment", "Situation", "Condition", "Circumstance"],
    answer: "Environment",
  },
  {
    question: "Which word means 'culture'?",
    options: ["文化", "历史", "艺术", "科学"],
    answer: "文化",
  },
  {
    question: "What does '政府' mean?",
    options: ["Government", "Politics", "Country", "Nation"],
    answer: "Government",
  },
  {
    question: "Which is the correct translation for 'economy'?",
    options: ["经济", "金融", "贸易", "商业"],
    answer: "经济",
  },
  {
    question: "What does '发展' mean?",
    options: ["Development", "Progress", "Growth", "All of the above"],
    answer: "All of the above",
  },
];

const Quizzes = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const correct = option === quizData[currentQuestion].answer;
    setIsCorrect(correct);
    setShowFeedback(true);
    setQuestionsAnswered((prev) => prev + 1);

    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleNext = () => {
    setSelectedOption("");
    setShowFeedback(false);
    setIsCorrect(false);

    if (currentQuestion === quizData.length - 1) {
      // Quiz completed
      setQuizCompleted(true);
    } else {
      // Move to next question
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setShowFeedback(false);
    setIsCorrect(false);
    setScore(0);
    setQuestionsAnswered(0);
    setQuizCompleted(false);
  };

  const question = quizData[currentQuestion];

  return (
    <div className="quizzes-container">
      <h2>Chinese Language Quiz</h2>

      {/* Top ad */}
      <Adsterra />

      {quizCompleted ? (
        <div className="quiz-box quiz-completed">
          <h3>Quiz Completed!</h3>
          <div className="final-score">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/{questionsAnswered}</span>
            </div>
            <p className="score-percentage">
              {Math.round((score / questionsAnswered) * 100)}% Correct
            </p>
          </div>

          <div className="completion-message">
            {score === questionsAnswered ? (
              <p>Perfect score! You're a Chinese language master!</p>
            ) : score >= questionsAnswered * 0.8 ? (
              <p>Excellent work! You have a strong grasp of Chinese.</p>
            ) : score >= questionsAnswered * 0.6 ? (
              <p>Good job! Keep practicing to improve your Chinese skills.</p>
            ) : (
              <p>Keep learning! Practice makes perfect with Chinese.</p>
            )}
          </div>

          <button className="restart-button" onClick={handleRestartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-box">
          <div className="quiz-header">
            <div className="quiz-progress">
              <span>
                Question {currentQuestion + 1} of {quizData.length}
              </span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / quizData.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="quiz-score">
              <span>
                Score: {score}/{questionsAnswered}
              </span>
              <span className="score-percentage">
                {questionsAnswered > 0
                  ? `(${Math.round((score / questionsAnswered) * 100)}%)`
                  : "(0%)"}
              </span>
            </div>
          </div>

          <p className="question">{question.question}</p>
          <ul className="options">
            {question.options.map((option, index) => (
              <li key={index}>
                <button
                  className={`option-button ${
                    showFeedback && option === question.answer ? "correct" : ""
                  } ${
                    showFeedback &&
                    option === selectedOption &&
                    option !== question.answer
                      ? "incorrect"
                      : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                  disabled={showFeedback}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {showFeedback && (
            <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
              {isCorrect
                ? "✅ Correct!"
                : "❌ Incorrect. The correct answer is: " + question.answer}
            </div>
          )}
          {showFeedback && (
            <button className="next-button" onClick={handleNext}>
              {currentQuestion === quizData.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          )}
        </div>
      )}

      <div className="quiz-content-layout">
        <div className="quiz-main-content">
          <h3>Test Your Chinese Knowledge</h3>
          <p>
            Our quizzes are designed to help you practice and reinforce your
            Chinese language skills. Complete the quiz above to test your
            knowledge of basic Chinese vocabulary and phrases.
          </p>
        </div>
        <div className="quiz-sidebar">
          {/* Sidebar ad */}
          <Adsterra placement="sidebar" showSpinner={true} />
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
