// src/components/QuizPage.js
import React, { useState, useEffect } from "react";
import allQuestions from './Questions';  // Import the question sets

// Function to shuffle the array of questions
function shuffleArray(arr) {
  let shuffledArray = [...arr];  // Clone the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
}

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);  // State to hold the selected questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Randomly pick a question set (easy, medium, or hard)
  useEffect(() => {
    const randomSet = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    const shuffledQuestions = shuffleArray(randomSet);  // Shuffle the selected set

    // Select the first 5 questions, if there are less than 5 in the set, combine from other sets
    let selectedQuestions = shuffledQuestions.slice(0, 5);
    if (selectedQuestions.length < 5) {
      let remainingQuestions = shuffledQuestions.slice(selectedQuestions.length);
      allQuestions.forEach(set => {
        if (selectedQuestions.length < 5) {
          remainingQuestions = shuffleArray(set).slice(0, 5 - selectedQuestions.length);
          selectedQuestions = [...selectedQuestions, ...remainingQuestions];
        }
      });
    }

    setQuestions(selectedQuestions);  // Update the state with selected questions
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelection = (answer) => {
    setUserAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (userAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1); // Increase score if the answer is correct
    }

    // Move to the next question or finish the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
    } else {
      setQuizCompleted(true); // Finish the quiz if all questions are answered
    }
  };

  return (
    <div>
      <h1>Quiz Page</h1>

      {!quizCompleted ? (
        <>
          <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
          <h2>{currentQuestion?.question}</h2>
          <div>
            {currentQuestion?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(option)}
                style={{
                  backgroundColor: userAnswer === option ? "lightblue" : "",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <br />
          <button onClick={handleSubmitAnswer}>Submit Answer</button>
        </>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your final score is: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
