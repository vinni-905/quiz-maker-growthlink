import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { score, total } = state || { score: 0, total: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Your Score 🎉</h1>
      <p className="text-2xl mb-6">{score} / {total}</p>
      <button
        onClick={() => navigate('/quiz')}
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
      >
        Try Again
      </button>
    </div>
  );
};

export default ResultPage;
