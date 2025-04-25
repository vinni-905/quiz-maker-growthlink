import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';

const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (selected) => {
    if (selected === questions[current].correctAnswer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      navigate('/result', {
        state: {
          score: score + (selected === questions[current].correctAnswer ? 1 : 0),
          total: questions.length,
        }
      });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{questions[current].question}</h2>
      <div className="flex flex-col gap-4">
        {questions[current].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
