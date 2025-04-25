// src/components/Questions.js

// Easy set of questions
const easyQuestions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: "Pacific",
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "India", "Australia"],
    correctAnswer: "Japan",
  },
  // Add more easy questions if needed
];

// Medium set of questions
const mediumQuestions = [
  {
    question: "What is the square root of 144?",
    options: ["10", "12", "14", "16"],
    correctAnswer: "12",
  },
  {
    question: "Who is the president of the USA?",
    options: ["Donald Trump", "Barack Obama", "Joe Biden", "George Bush"],
    correctAnswer: "Joe Biden",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Won", "Ringgit"],
    correctAnswer: "Yen",
  },
  {
    question: "What is the largest planet in the solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Which element has the chemical symbol O?",
    options: ["Oxygen", "Osmium", "Ozone", "Olivine"],
    correctAnswer: "Oxygen",
  },
  // Add more medium questions if needed
];

// Hard set of questions
const hardQuestions = [
  {
    question: "In which year did World War II end?",
    options: ["1945", "1940", "1914", "1990"],
    correctAnswer: "1945",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    question: "What is the hardest known natural material?",
    options: ["Diamond", "Graphene", "Gold", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"],
    correctAnswer: "Albert Einstein",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Ganges"],
    correctAnswer: "Nile",
  },
  // Add more hard questions if needed
];

// Combine all question sets into one array
const allQuestions = [easyQuestions, mediumQuestions, hardQuestions];

export default allQuestions;
